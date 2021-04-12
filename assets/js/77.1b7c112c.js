(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{444:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"路由钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由钩子"}},[t._v("#")]),t._v(" 路由钩子")]),t._v(" "),e("h2",{attrs:{id:"全局路由钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局路由钩子"}},[t._v("#")]),t._v(" 全局路由钩子")]),t._v(" "),e("h3",{attrs:{id:"router-beforeeach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-beforeeach"}},[t._v("#")]),t._v(" router.beforeEach")]),t._v(" "),e("ul",[e("li",[t._v("可以在此钩子中的回调中对路由进行拦截，比如对于未登录的用户。")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("ul",[e("li",[t._v("next的四种用法\n"),e("ul",[e("li",[t._v("next() 跳入下一个页面")]),t._v(" "),e("li",[t._v("next('/path') 改变路由的跳转方向，使其跳到另一个路由")]),t._v(" "),e("li",[t._v("next(false)  返回原来的页面")]),t._v(" "),e("li",[t._v("next((vm)=>{})  仅在beforeRouteEnter中可用，vm是组件实例。")])])])]),t._v(" "),e("h3",{attrs:{id:"router-aftereach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-aftereach"}},[t._v("#")]),t._v(" router.afterEach")]),t._v(" "),e("p",[t._v("在所有路由跳转结束的时候调用，但是它没有next方法。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'路由全局勾子：afterEach --- 没有next方法'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"组件路由钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件路由钩子"}},[t._v("#")]),t._v(" 组件路由钩子")]),t._v(" "),e("h3",{attrs:{id:"beforerouteenter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforerouteenter"}},[t._v("#")]),t._v(" beforeRouteEnter")]),t._v(" "),e("ul",[e("li",[t._v("在组件创建之前调用，所以它无法直接用this来访问组件实例。在next方法中可以传一个回调，回调的第一个参数即是组件实例。我们可以在这个方法去请求数据，在数据获取到之后，再调用next就能保证进页面的时候数据已经获取到了（会阻塞页面）。")]),t._v(" "),e("li",[t._v("beforeRouteEnter的代码时很早执行的，在组件beforeCreate之前；但是next里面回调的执行在mounted之后，可以说是离dom渲染最近的一个周期。")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//undefined，不能用this来获取vue实例")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//vm为vue的实例")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"beforerouteupdate-切换组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforerouteupdate-切换组件"}},[t._v("#")]),t._v(" beforeRouteUpdate（切换组件）")]),t._v(" "),e("ul",[e("li",[t._v("在离开路由时调用，可以用this来访问组件实例，但是next中不能传回调。")]),t._v(" "),e("li",[t._v("在当前路由改变，但是该组件被复用时调用。举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。")])]),t._v(" "),e("h3",{attrs:{id:"beforerouteleave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforerouteleave"}},[t._v("#")]),t._v(" beforeRouteLeave")]),t._v(" "),e("p",[t._v("这个方法是vue-router2.2版本加上的。因为原来的版本中，如果一个在两个子路由之间跳转，是不触发beforeRouteLeave的。这会导致某些重置操作，没地方触发。在之前，我们都是用watch $route来hack的。但是通过这个勾子，我们有了更好的方式。")]),t._v(" "),e("h2",{attrs:{id:"执行顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[t._v("#")]),t._v(" 执行顺序")]),t._v(" "),e("ol",[e("li",[t._v("路由勾子 (beforeEach、beforeRouteEnter、afterEach)")]),t._v(" "),e("li",[t._v("根组件 (beforeCreate、created、beforeMount)")]),t._v(" "),e("li",[t._v("组件 (beforeCreate、created、beforeMount)")]),t._v(" "),e("li",[t._v("指令 (bind、inserted)")]),t._v(" "),e("li",[t._v("组件 mounted")]),t._v(" "),e("li",[t._v("根组件 mounted")]),t._v(" "),e("li",[t._v("beforeRouteEnter的next的回调")]),t._v(" "),e("li",[t._v("nextTick")])]),t._v(" "),e("ul",[e("li",[t._v("父子组件：")])]),t._v(" "),e("ol",[e("li",[t._v("当子组件完成挂载后，父组件会主动执行一次beforeUpdate/updated钩子函数（仅首次）")]),t._v(" "),e("li",[t._v("父子组件在data变化中是分别监控的，但是在更新props中的数据是关联的")])]),t._v(" "),e("ul",[e("li",[t._v("兄弟组件：")])]),t._v(" "),e("ol",[e("li",[t._v("组件的初始化（mounted之前）分开进行，挂载是从上到下依次进行(一个个先从 beforeCreated 到 beforeMounted，最后再按顺序一个个 mounted)")]),t._v(" "),e("li",[t._v("当没有数据关联时，兄弟组件之间的更新和销毁是互不关联的")])])])}),[],!1,null,null,null);a.default=n.exports}}]);