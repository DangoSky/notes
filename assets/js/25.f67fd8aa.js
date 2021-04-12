(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{495:function(t,l,e){"use strict";e.r(l);var a=e(42),v=Object(a.a)({},(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),e("h2",{attrs:{id:"flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[t._v("#")]),t._v(" flex")]),t._v(" "),e("p",[t._v("在传统的 BFC 中，使用 margin：auto 只能在水平方向居中在垂直方向却不可以。在水平方向上使用 auto，margin-left 和 margin-right 会平分剩余的空间从而导致水平居中。但垂直方向上的 auto， margin-top 和 margin-bottom 不会平分剩余的空间，反而会导致它们的值都为 0。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("在 FFC / GFC 中，使用 margin：auto 则水平和垂直方向都会平分剩余的空间。使用了 margin：auto 的 flex 子项目，它们父元素设置的 justify-content 和它们本身的 align-self 将不再生效。")])]),t._v(" "),e("li",[e("p",[t._v("在一个 ul 中，对最后一个 li 使用 margin-left：auto 可以实现让最后一个 li 右浮动的效果。（也就是 auto 的计算值就是水平方向上容器排列所有 li 之后的剩余空间）。")])]),t._v(" "),e("li",[e("p",[t._v("还可以在需要垂直居中的第一个元素上进行 margin-top: auto，最后一个元素上进行 margin-bottom: auto 就可以实现部分内容垂直居中。")])])]),t._v(" "),e("h2",{attrs:{id:"rem-适配方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem-适配方案"}},[t._v("#")]),t._v(" rem 适配方案")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("rem适配和使用vw、vh和百分比差不多，都是通过计算元素在页面中的占比而定的。其中vw和vh是相对于浏览器视口而定，1vw、1vh表示占浏览器视口的百分之一。rem则是相对于html根元素的font-size而言的。因为在不同的屏幕下，元素在页面中所占据的比列是不变的，所以我们使用rem来设置元素的宽高距离，对于不同大小的屏幕设置不同的根font-size就可以使得不同屏幕下的元素的大小相应的变化。")])]),t._v(" "),e("li",[e("p",[t._v("rem适配公式："),e("strong",[t._v("h1 / s1 = h2 / s2")])])])]),t._v(" "),e("p",[e("strong",[t._v("h2 = h1 * s2 / s1")])]),t._v(" "),e("p",[t._v("h1和h2分别是不同屏幕下的根元素font-size值，s1和s2是不同屏幕的大小。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("设置的两种方式：")]),t._v(" "),e("ul",[e("li",[t._v("css 媒体查询。")]),t._v(" "),e("li",[t._v("js 动态获取屏幕宽度设置。"),e("code",[t._v("document.getElementsByTagName('html')[0].clientWidth")])])])]),t._v(" "),e("li",[e("p",[t._v("rem 的问题：对于一些元素，比如字体，在不同的屏幕下尺寸不一致但有时候需要是一致的。对于图片视频，大小比例可能会出现拉伸变形。对于字体则使用 em。")])])]),t._v(" "),e("h2",{attrs:{id:"bfc块级格式化上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc块级格式化上下文"}},[t._v("#")]),t._v(" BFC块级格式化上下文")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"http://blog.dangosky.com/2019/03/12/CSS%E8%B4%9F%E8%BE%B9%E8%B7%9D/#toc-heading-17",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考我的 Blog"),e("OutboundLink")],1)])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("BFC 就是具有特定规则的一个容器，而且容器里面的元素不会在布局上影响到外面的元素。即不同的BFC区域之间是相互独立的，互不影响。一个BFC区域包含创建该上下文元素的所有子元素，但是不包括创建了新的BFC的子元素的内部元素。每一个BFC区域只包括其子元素，不包括其子元素的子元素。")])]),t._v(" "),e("li",[e("p",[t._v("满足下列条件之一就可触发BFC：")]),t._v(" "),e("ul",[e("li",[t._v("根元素，即 body。")]),t._v(" "),e("li",[t._v("float的值不为none")]),t._v(" "),e("li",[t._v("overflow的值不为visible")]),t._v(" "),e("li",[t._v("display的值为inline-block、table-cell、table-caption")]),t._v(" "),e("li",[t._v("position的值为absolute或fixed")])])]),t._v(" "),e("li",[e("p",[t._v("利用两个 BFC 之间不会互相影响，所以 BFC 可以用来：")]),t._v(" "),e("ul",[e("li",[t._v("防止垂直方向上的 margin 合并，阻止子元素设置margin-top带跑了父元素。")]),t._v(" "),e("li",[t._v("可以阻止 BFC 区域被浮动元素覆盖。")]),t._v(" "),e("li",[t._v("可以包含浮动的元素（清除浮动），使浮动的子元素也可以撑起带有BFC的父元素。")])])])])])}),[],!1,null,null,null);l.default=v.exports}}]);