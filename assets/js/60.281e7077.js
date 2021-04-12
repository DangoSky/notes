(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{462:function(e,t,a){"use strict";a.r(t);var r=a(42),l=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"react-fiber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-fiber"}},[e._v("#")]),e._v(" React Fiber")]),e._v(" "),a("blockquote",[a("p",[e._v("TODO：详情待日后补充，先记录目前我对 React Fiber 的理解")])]),e._v(" "),a("ul",[a("li",[e._v("为什么有 React Fiber")])]),e._v(" "),a("p",[e._v("React 在 setState 开始到渲染完成这整个过程是同步的，如果需要渲染的组件比较庞大，JS 执行会较长时间占据主线程时间，导致页面响应能力变差，甚至会使得动画和手势等应用卡顿。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("React Fiber 对此做了什么")]),e._v(" "),a("ul",[a("li",[e._v("给事件划分优先级。高优先级任务可以打断低优先级任务，使得可以更快地响应用户操作。")]),e._v(" "),a("li",[e._v("时间分片。不一口气执行掉所有的任务，而是分为多个小的时间片段，每次只执行一小部分，执行完这个时间片后去看看主线程里有没有更高优先级的任务，有的话就先执行高优先级任务。")])])]),e._v(" "),a("li",[a("p",[e._v("当低优先任务被高优先任务打断后，当它再次分配到主线程执行时，是重新开始执行而不是从上次被打断的地方继续执行。这就导致了一次渲染可能会执行多次生命周期函数。")])]),e._v(" "),a("li",[a("p",[e._v("React Fiber 将一个更新过程被分为两个阶段：第一个阶段 Reconciliation Phase，第二阶段 Commit Phase。在第一阶段，React Fiber 会找出需要更新哪些 DOM，这个阶段是可以被打断的。到了第二阶段就将更新操作全部完成，不会再被打断。所以第一阶段中的生命周期函数可能会被多次调用，比如 "),a("code",[e._v("componentWillMount")]),e._v("、"),a("code",[e._v("componentWillReceiveProps")]),e._v("、"),a("code",[e._v("shouldComponentUpdate")]),e._v("、"),a("code",[e._v("componentWillUpdate")]),e._v("。")])])]),e._v(" "),a("h4",{attrs:{id:"requestidlecallback-和-requestanimationframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestidlecallback-和-requestanimationframe"}},[e._v("#")]),e._v(" "),a("code",[e._v("requestIdleCallback")]),e._v(" 和 "),a("code",[e._v("requestAnimationFrame")])]),e._v(" "),a("p",[a("code",[e._v("requestIdleCallback")]),e._v(" 会在浏览器空闲时候执行，而 "),a("code",[e._v("requestAnimationFrame")]),e._v(" 会在每一帧都执行。所以 "),a("code",[e._v("requestAnimationFrame")]),e._v(" 是比较高优的任务，"),a("code",[e._v("requestIdleCallback")]),e._v(" 是属于低优先级的，如果浏览器一直繁忙的话，"),a("code",[e._v("requestIdleCallback")]),e._v(" 会一直等不到执行（可以给它传递第二个参数，表示经过多长时间后还没执行的话就强制执行）。")]),e._v(" "),a("p",[e._v("什么是浏览器空闲时间：浏览器做完一帧内的工作后，还剩下的多余时间。")]),e._v(" "),a("p",[e._v("浏览器一帧内的工作包括：处理用户的交互、JS 解析执行、帧开始（窗口尺寸变更和页面滚去等的处理）、requestAnimationFrame、布局、绘制。")])])}),[],!1,null,null,null);t.default=l.exports}}]);