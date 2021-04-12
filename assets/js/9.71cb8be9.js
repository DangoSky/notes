(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{348:function(t,e,o){t.exports=o.p+"assets/img/1.1537b651.png"},349:function(t,e,o){t.exports=o.p+"assets/img/2.22225f5d.png"},350:function(t,e,o){t.exports=o.p+"assets/img/3.8c705b0c.png"},492:function(t,e,o){"use strict";o.r(e);var s=o(42),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dom-属性计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-属性计算"}},[t._v("#")]),t._v(" DOM 属性计算")]),t._v(" "),s("h2",{attrs:{id:"screen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen"}},[t._v("#")]),t._v(" screen")]),t._v(" "),s("ul",[s("li",[t._v("screenX / screenY 是以屏幕为基准进行测量，也就是当前元素距离屏幕的尺寸。")])]),t._v(" "),s("h2",{attrs:{id:"offset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offset"}},[t._v("#")]),t._v(" offset")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("offsetParent：返回最近一个带有定位的父元素。如果其父级元素都没有定位则为body。如果当前元素display设为none或为固定定位，则返回null。（parentNode 则不考虑它的父级元素是否带有定位。）")])]),t._v(" "),s("li",[s("p",[t._v("offsetWidth（offsetHeight）= content + padding + border（不包括因为overflow而隐藏的部分）。")])]),t._v(" "),s("li",[s("p",[t._v("offsetLeft（offsetTop）：相对于offsetParent左边或上边的距离，如果都没有定位，则以body为准。")])]),t._v(" "),s("li",[s("p",[t._v("offsetX（offsetY）：同clientX（clientY， 但 offsetX（offsetY）是支持IE。")])])]),t._v(" "),s("p",[t._v("style.left（style.top）和 offsetLeft（offsetTop）都能获取到目标元素到 offsetParent 相应的距离，但通过 style 只能获取行内样式，而 offsetLeft 则无此限制。并且 offsetLeft 是只读的，返回的是数字；而 style.left 是可读写，返回的是字符串包括了单位。")]),t._v(" "),s("h1",{attrs:{id:"client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" client")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("clientWidth（clientHeight）= content + padding (只对块级元素有效）。")])]),t._v(" "),s("li",[s("p",[t._v("clientLeft = border的宽度。")])]),t._v(" "),s("li",[s("p",[t._v("clientX（clientY）：以当前可视区域为基准（不考虑页面滚动）。")])]),t._v(" "),s("li",[s("p",[t._v("pageX（pageY）：以当前文档为基准（算上滚动的距离，等同于 clientX/Y + 滚动距离）。")])])]),t._v(" "),s("h2",{attrs:{id:"scroll"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scroll"}},[t._v("#")]),t._v(" scroll")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("scrollLeft（scrollTop） = 滚动的长度。")])]),t._v(" "),s("li",[s("p",[t._v("scrollWidth（scrollHeight）= content + padding + 被卷去的部分（不包括margin和border）。")])]),t._v(" "),s("li",[s("p",[t._v("判断元素是否滚动到底部："),s("code",[t._v("element.scrollHeight - element.scrollTop === element.clientHeight")])])])]),t._v(" "),s("p",[t._v("兼容写法：\n"),s("code",[t._v("window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0")]),t._v(";\n"),s("code",[t._v("window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;")])]),t._v(" "),s("h2",{attrs:{id:"获取浏览器窗口大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取浏览器窗口大小"}},[t._v("#")]),t._v(" 获取浏览器窗口大小")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("window.outerWidth")]),t._v("：整个浏览器的宽高。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("document.documentElement.clientWidth, document.documentElement.clientHeight")]),t._v("：body的宽高")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("window.innerWidth, window.innerHeight")]),t._v("：浏览器宽高减去浏览器工具栏宽高")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("window.screen.availWidth, window.screen.availHeight")]),t._v("：屏幕可用的宽高，即屏幕宽度减去任务栏后的宽高，")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("window.screen.width, window.screen.height")]),t._v("：屏幕的宽高")])])]),t._v(" "),s("h2",{attrs:{id:"获取网页正文的大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取网页正文的大小"}},[t._v("#")]),t._v(" 获取网页正文的大小")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("document.body.clientWidth, document.body.clientHeight")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("document.body.offsetWidth, document.body.offsetHeight")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("document.body.scrollWidth, document.body.scrollHeight")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:o(348),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:o(349),alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:o(350),alt:""}})])])}),[],!1,null,null,null);e.default=l.exports}}]);