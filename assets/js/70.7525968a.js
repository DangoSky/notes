(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{454:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[t._v("#")]),t._v(" 类")]),t._v(" "),a("ul",[a("li",[t._v("类也可以作为接口使用。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point3d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" point3d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Point3d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("private 、protected、readonly、静态属性")]),t._v(" "),a("ul",[a("li",[t._v("private的属性无法在类的外部使用。")]),t._v(" "),a("li",[t._v("protected的属性也无法在类外使用，但可以在派生类中使用。")]),t._v(" "),a("li",[t._v("构造函数被标记成protected时， 意味着这个类不能在类外被实例化，但是能被继承。")]),t._v(" "),a("li",[t._v("访问静态属性时需要在前面加上类名。")])])]),t._v(" "),a("li",[a("p",[t._v("抽象类")]),t._v(" "),a("ul",[a("li",[t._v("只能作为基类被其他类派生，无法直接被实例化。当子类继承自抽象类时，子类中的方法必须先在抽象类中申明才能使用。")]),t._v(" "),a("li",[t._v("抽象方法只定义方法名而不定义方法体，方法体在派生类中定义。")]),t._v(" "),a("li",[t._v("抽象类中不存在的方法，派生类实例出来的类无法调用。")])])]),t._v(" "),a("li",[a("p",[t._v("参数属性")])])]),t._v(" "),a("p",[t._v("参数属性通过给构造函数参数添加一个访问限定符来声明。 使用private/public/protected限定一个参数属性会声明并初始化一个私有成员，这样可以把声明和赋值合并至一处。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);