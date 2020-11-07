# Hook

- 为什么要有 Hook：
  - 函数组件没有类组件中的 state，无法使用 state 并监测 state 变化做相应的渲染。对此 Hook 引入了 useState 使函数组件也可以有自己的 state。
  - 虽然函数组件没有了生命周期方法和创建类实例，节省了不必要的开销，但同时也无法在某些特定的时刻进行某些操作。对此 Hook 引入了 useEffect，可以在依赖改变时调用，如果依赖为空的话就相当于类的 componentDidMount 了。

> [手写ReactHook核心原理](https://mp.weixin.qq.com/s?__biz=MzU5NDM5MDg1Mw==&mid=2247489248&idx=1&sn=b9ea39bdbbf012bf675352b011b5b162&chksm=fe00accac97725dc1db75e0908a3585b4a8bef16186c779be983ec73c631bf2f78343a0c08d4&mpshare=1&srcid=11014bpdNQPCvb156OEwmJMM&sharer_sharetime=1604196121318&sharer_shareid=4bdc7d4bd1af5e53e942566d21a430a1&scene=1&subscene=10000&clicktime=1604197742&enterid=1604197742&ascene=1&devicetype=android-29&version=27001353&nettype=3gnet&abtest_cookie=AAACAA%3D%3D&lang=zh_CN&exportkey=AWIne1omkJkDZtHdU48WgT0%3D&pass_ticket=6pgjYUk6ocWOBXsoqT1ShfqjYzbG9uSjvFHywJlIAC%2FWuxhwRHVp%2BMU40Qc5FCoV&wx_header=1)

## 常用的 Hook

### useState

- 使用：
  - 在函数组件中使用state。返回当前状态和一个修改它的函数。useState的唯一一个参数就是初始的state，可以接受任意的数据类型。 `Const [count, setCount] = useState(0)`。可以直接用 count 来读取值，使用 `setCount(count + 1)` 来更新（这更新操作也是异步的）。
- useState 更新 state 时总是会**替换旧的state**，而 setState 是合并新旧state。如果新旧的state是相等的，不会重新渲染组件。
- useState 只会在页面第一次渲染时调用，后续的渲染不会再调用 useState。


### useEffect

- 使用：
  - 接受一个函数（称作effect）作为参数，在每次渲染后调用（包括页面第一次渲染和卸载，**调用时页面已经渲染完成了**）。相当于 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。
  - 每次重新渲染，都会生成新的 effect 函数，所以能够在 effect 中获取最新的state值，并且在执行当前 effect 之前会对上一个 effect 进行清除。
  - 可以接受一个数组作为第二个参数，当数组内的数据发生变化时，才会执行 effect 优化性能。即使只有一个数组元素发生变化也会执行 effect（如果收到一个空数组，则只在页面挂载和卸载时执行一次 effect。不传第二个参数的话则每次渲染都会调用）。
  - effect 可以返回一个函数作为清除函数（在组件卸载前调用），用来清除订阅或定时器。这防止了当依据id订阅某个消息时，当id改变了而旧的订阅器一直存在造成的内存泄漏问题（或者省去了在 componentDidUpdate 手动更新订阅器的操作）。
  - 可以使用多个 useEffect，从而分离不相关的代码。

- 其他：
  - 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕。React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得额外操作很方便。经测试后发现执行顺序为：
    - effect返回的清除函数。
    - 页面渲染。
    - effect。
  - 通常在 effect 内部声明它所需要的函数，这样就能容易的看出 effect 依赖了组件作用域中的哪些值。
  - useLayoutEffect的函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。

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

- 返回一个 memoized 的函数（只是返回参数函数，并不会执行它）。把回调函数及依赖项数组作为参数传入 useCallback，用来对函数进行缓存，防止总是重复的生成新的函数（避免因为生成新的函数而重新渲染组件）。返回的函数仅在某个依赖项改变时才会更新。
- 如果依赖项数组为空，则每次都返回旧的函数。（可使用 Set 来验证，将返回的函数放入 Set 中，观察 set.size）。


```js
const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  },[a, b]
);
```

### useMemo

- 返回一个 memoized 值（会执行参数函数）。把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这可以避免无关依赖改变时也重新计算memoized值，导致每次渲染时都进行高开销的计算。如果依赖没有发生变化时，则不执行计算直接返回缓存结果。如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。

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

#### 特点

- 返回一个不变的 ref 对象（只有 current 属性），current 被初始化为传入的参数（current可后续手动改变），ref 对象在组件的整个生命周期内保持不变（也就是 useRef 在每次渲染时返回的都是同一个 ref 对象）。

- 跟 useState 一样，返回的 ref 对象只会在页面第一次渲染时创建一次，后续页面的渲染不会再创建。

#### 用途

- 绑定 DOM 节点。跟 createRef 一样用来生成对DOM对象或组件的引用。

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
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

- 绑定数据。用来和某一个 state 关联起来，可用于解决 useEFfect 等 hook 中闭包过时的问题。注意这绑定是单方向的，关联的 state 改变了，绑定的 ref 对象的 current 也自动跟着变；但如果是改变 ref 对象的 current，则关联的 state 不会跟着变。

```js
const Demo = () => {
  const [count,setCount] = useState(0);
  const countRef = useRef();
  countRef.current = count;
  useEffect(() => {
    const timeId = setInterval(() => {
      setCount(countRef.current + 1);
      console.log(countRef);
    }, 1000);
    console.log("id: ", timeId); // 因为依赖项数组为空，所以只会打印一次timerId，也就是定时器只创建了一次
    return () => {
      clearInterval(timeId);
    }
  }, [])

  return (
    <>
      <p>countRef.current: {countRef.current}</p>
      <p>count: {count}</p>
    </>
  )
}
```


### useReducer

- 相较于 useState，useReducer 更适合用在更新state时有比较复杂的逻辑（比如根据参数选择不同的更新方式，使用switch）或者更新操作依赖于当前的 state等场景。（感觉和使用函数形式更新的 useState 差不多）
- useReducer 总共有三个参数：
  - 第一个参数是 一个 reducer，其函数签名为 `(state, action) => newState`，传入当前的 state 和调用更新函数时传的参数。
  - 第二个参数是初始 state，也就是默认值，是比较简单的方法。
  - 第三个参数是惰性初始化，这么做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利。

```js
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  });
  return (
    <>
      点击次数: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```


### useImperativeHandle

在使用 ref 时自定义暴露给父组件的实例值，也就是子组件可以选择性的暴露给副组件一些方法，这样可以隐藏一些私有方法和属性，官方建议，useImperativeHandle应当与 forwardRef 一起使用。

```js
function Kun (props, ref) {
  const kun = useRef()
  const introduce = useCallback (() => {
    console.log('i can sing, jump, rap, play basketball')
  }, []);
  // 选择性暴露给父组件
  useImperativeHandle(ref, () => ({
    introduce: () => {
      introduce()
    }
  }));

  return (
    <div ref={kun}> { props.count }</div>
  )
}

const KunKun = forwardRef(Kun)  // 使用forwardRef转发ref

function App () {
  const [ count, setCount ] = useState(0)
  const kunRef = useRef(null)
  const onClick = useCallback (() => {
    setCount(count => count + 1)
    kunRef.current.introduce()
  }, [])

  return (
    <div>
      点击次数: { count }
      <KunKun ref={kunRef}  count={count}></KunKun>
      <button onClick={onClick}>点我</button>
    </div>
    )
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
  - 其实只要保证循环每次都完全一样还是可以在循环中使用 Hook 的。

## 自定义Hook

- 规则：必须以 “use” 开头。
- 自定义的 Hook 就是为了将组件逻辑提取到可重用的函数中，来解决逻辑难以复用的问题。
- 在两个组件中使用相同的 Hook，每次调用时都会创建一个新的state，两个 state 是独立互不关联的。
