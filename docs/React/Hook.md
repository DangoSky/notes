# Hook

- 作用： 
  - 在函数组件中使用 state。
- Hook 避免了 class 需要的额外开支，像是创建类实例和在构造函数中绑定事件处理器的成本。


## 常用的 Hook

### useState

- 使用：
  - 在函数组件中使用state。返回当前状态和一个修改它的函数。useState的唯一一个参数就是初始的state，可以接受任意的数据类型。 `Const [count, setCount] = useState(0)`。可以直接用 count 来读取值，使用 `setCount(count + 1)` 来更新（这更新操作也是异步的）。
  - setCount 除了可以接受一个新值直接更新 state 外，还可以通过函数的形式来更新，函数参数是 prevCount。`setCount(prevCount => prevCount + 1)`。

- 注意：useState 更新 state 时总是会替换旧的state，而 setState 是合并新旧state。

### useEffect

- 使用：
  - 接受一个函数（称作effect）作为参数，在每次渲染后调用（包括页面第一次渲染和卸载，**调用时页面已经渲染完成了**）。相当于 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。
  - 每次重新渲染，都会生成新的 effect 函数，所以能够在 effect 中获取最新的state值，并且在执行当前 effect 之前会对上一个 effect 进行清除。
  - 可以接受一个数组作为第二个参数，当数组内的数据发生变化时，才会执行 effect 优化性能。即使只有一个数组元素发生变化也会执行 effect（如果收到一个空数组，则只在页面挂载和卸载时执行一次 effect）。
  - effect 可以返回一个函数作为清除函数（在组件卸载前调用），用来清除订阅或定时器。这防止了当依据id订阅某个消息时，当id改变了而旧的订阅器一直存在造成的内存泄漏问题（或者省去了在 componentDidUpdate 手动更新订阅器的操作）。
  - 可以使用多个 useEffect，从而分离不相关的代码。

- 其他：
  - 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕。React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得额外操作很方便。经测试后发现执行顺序为：
    - effect返回的清除函数。
    - 页面渲染。
    - effect。
  - 通常在 effect 内部声明它所需要的函数，这样就能容易的看出 effect 依赖了组件作用域中的哪些值。

- 问题：
  - 如何避免因 effect 的依赖频繁变化而造成频繁执行 effect：

```js
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 在这个回调中，count 的值不会发生变化。因为 effect 执行时会创建一个闭包，并将 count 的值（初值为 0）保存在该闭包当中。每隔一秒回调执行的是 setCount(0 + 1)
    // 指定 [count] 作为依赖列表就能修复这个 Bug
    const id = setInterval(() => {
      setCount(count + 1);  
    }, 1000);
    return () => clearInterval(id);
  }, []); // count 没有被指定为依赖

  return <h1>{count}</h1>;
}
```

但每次改变发生时定时器都被重置，可以使用函数形式的setCount来避免：

```js
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // 不依赖于外部的count，所以该effect只会在页面第一次渲染时执行
    }, 1000);
    return () => clearInterval(id);
  }, []); 
  return <h1>{count}</h1>;
}
```


### useContext

`const value = useContext(MyContext);`

- 接收一个 context 对象（`React.createContext` 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 决定。
- 当组件上层最近的 `<MyContext.Provider>` 更新时，该 Hook 会触发重渲染，并使用最新传递给 `<MyContext.Provider>` 的 context 值。
- `useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`。
- `useContext(MyContext)` 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件提供 context。


### useCallback

- 返回一个 memoized 的函数。把回调函数及依赖项数组作为参数传入 useCallback，用来对函数进行缓存，防止总是重复的生成新的函数（避免因为生成新的函数而重新渲染组件）。返回的函数仅在某个依赖项改变时才会更新。
- 如果依赖项数组为空，则每次都返回旧的函数。（可使用 Set 来验证，将返回的函数放入 Set 中，观察 set.size）。


```js
const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  },[a, b]
);
```

### useMemo

- 返回一个 memoized 值。把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这可以避免无关依赖改变时也重新计算memoized值，导致每次渲染时都进行高开销的计算。如果依赖没有发生变化时，则不执行计算直接返回缓存结果。如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。

- 传入 useMemo 的函数会在渲染期间执行。所以不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。

```js
export default function WithMemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');
  const expensive = useMemo(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return <div>
    <h4>{count}-{expensive}</h4>
    {val}
    <div>
      <button onClick={() => setCount(count + 1)}>+c1</button>
      <input value={val} onChange={event => setValue(event.target.value)}/>
    </div>
  </div>;
}
```


### useRef

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变，并且 useRef 会在每次渲染时返回同一个 ref 对象。

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```


### Hook中的闭包

useEffect、useMemo、useCallback都是自带闭包的。每一次组件的渲染，它们都会捕获当前组件函数上下文中的状态(state, props)，所以每一次这三种hooks的执行，反映的也都是当前的状态，你无法使用它们来捕获上一次的状态。

```js
const [count, setCount] = useState(0);

const changeValue = useCallback(() => {
  setCount(count + 1);
  console.log(count);  // 一直打印0，获取的都是初始状态的count
}, []);

<p>{count}</p>  // 一直显示1
<button onClick={changeValue}>count++</button>
```

## Hooks的规则

[eslint-plugin-react-hooks 插件](https://www.npmjs.com/package/eslint-plugin-react-hooks)

- 只能在函数组件中使用，或者在自定义 Hook 中调用其他 Hook 。
- 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
  - 这是因为内部 state 和对应 Hook 的关联，是靠 Hook 的调用顺序在多次渲染之间保持一致的。如果在条件语句中调用 Hook，会导致Hook的调用顺序不一致（可将判断语句放在effect里判断是否执行）。

## 自定义Hook

- 规则：必须以 “use” 开头。
- 在两个组件中使用相同的 Hook，每次调用时都会创建一个新的state，两个 state 是独立互不关联的。
