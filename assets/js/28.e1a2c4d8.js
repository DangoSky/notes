(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{494:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[t._v("#")]),t._v(" 常用操作")]),t._v(" "),a("h2",{attrs:{id:"修改-commit-的注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-commit-的注释"}},[t._v("#")]),t._v(" 修改 commit 的注释")]),t._v(" "),a("ul",[a("li",[t._v("对于已经提交并已经 push 到远程仓库中的需要通过 git rebase 才能完成。")]),t._v(" "),a("li",[t._v("首先要 git rebase 到需要修改的那个 commit 的前1个 commit。假设 commit id 是 32e0a87f，运行下面的 git rebase 命令：git rebase -I 32e0a87f。")]),t._v(" "),a("li",[t._v("在弹出的编辑框中会分行依次显示以 pick 开头的这个 commit 之后的所有 commit message。")]),t._v(" "),a("li",[t._v('将需要修改的 commit message 之前的 "pick" 改为 "reword" ，点击保存按钮，并关闭编辑框，这时会执行rebase操作。')]),t._v(" "),a("li",[t._v('接着会再次弹出编辑框，这次编辑框中只有之前改为 "reword" 的那个 commit message，此时修改 commit message 的内容，点击保存按钮并关闭编辑框，会继续执行 rebase 操作。然后强制 push 一下就搞定了。')]),t._v(" "),a("li",[t._v("git push --force")])]),t._v(" "),a("h2",{attrs:{id:"合并多个-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并多个-commit"}},[t._v("#")]),t._v(" 合并多个 commit")]),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"https://www.jianshu.com/p/964de879904a",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"node-获取要-commit-的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-获取要-commit-的文件"}},[t._v("#")]),t._v(" node 获取要 commit 的文件")]),t._v(" "),a("p",[t._v("获取要 commit 的文件中的样式文件，可用于检验规范。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" files "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git diff HEAD --name-only'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(c|le|sa|sc)ss$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"提-mr-时发现落后目标分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提-mr-时发现落后目标分支"}},[t._v("#")]),t._v(" 提 MR 时发现落后目标分支")]),t._v(" "),a("p",[t._v("回到本地分支 "),a("code",[t._v("git pull --rebase origin <远端分支>")]),t._v("，如果有冲突的话则解决冲突，解决完冲突后 "),a("code",[t._v("git add ./ && git rebase --continue")]),t._v("，之后不需要重新 commit，直接 "),a("code",[t._v("git push --force <远端分支>")]),t._v(" 即可。")])])}),[],!1,null,null,null);s.default=n.exports}}]);