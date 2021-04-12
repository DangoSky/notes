(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{441:function(_,v,t){"use strict";t.r(v);var a=t(42),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[_._v("#")]),_._v(" 概述")]),_._v(" "),t("h2",{attrs:{id:"操作系统的主要功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的主要功能"}},[_._v("#")]),_._v(" 操作系统的主要功能")]),_._v(" "),t("h4",{attrs:{id:"_1-存储管理功能-包括内存分配、地址映射、内存保护、内存扩充。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-存储管理功能-包括内存分配、地址映射、内存保护、内存扩充。"}},[_._v("#")]),_._v(" 1. 存储管理功能，包括内存分配、地址映射、内存保护、内存扩充。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("内存分配：为每道程序分配一定的内存空间。")])]),_._v(" "),t("li",[t("p",[_._v("地址映射：各程序中用到的其他地址都分别相对起始地址（0）计算。地址映射就是把所用的相对地址（或称逻辑地址）转换成内存的物理地址。")])]),_._v(" "),t("li",[t("p",[_._v("内存保护：不同用户的程序都放在一个内存中，所以必须保证它们在各自的内存空间中活动。内存保护可以设置两个界限寄存器，分别存放正在执行的程序在内存中的上界地址值和下界地址值。当程序运行时，所产生的每个访问内存的地址都要做合法性检查。")])]),_._v(" "),t("li",[t("p",[_._v("内存扩充：也就是虚拟存储技术。把一个程序当前正在使用的部分放在内存，而其余部分放在磁盘上（程序部分装入内存）。此后根据程序执行需要动态地将所需部分调入内存或将完成的部分调出内存（内存置换）。")])])]),_._v(" "),t("h4",{attrs:{id:"_2-作业和进程管理-包括作业和进程调度、进程控制、进程通信。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-作业和进程管理-包括作业和进程调度、进程控制、进程通信。"}},[_._v("#")]),_._v(" 2. 作业和进程管理，包括作业和进程调度、进程控制、进程通信。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("作业和进程调度：一个作业（用户的计算任务）通常经过两级调度才得以在 CPU 上执行。首先是作业调度，它把选中的一批作业放入内存，并分配其他必要资源，为这些作业建立相应的进程（程序的执行过程）。然后进程调度按一定的算法从就绪进程中选出一个合适进程，使之在 CPU 上运行。")])]),_._v(" "),t("li",[t("p",[_._v("进程控制：进程是系统中活动的实体。进程控制包括创建进程、撤消进程、封锁进程、唤醒进程等。")])]),_._v(" "),t("li",[t("p",[_._v("进程通信。")])])]),_._v(" "),t("h4",{attrs:{id:"_3-设备管理-包括缓冲区管理、设备分配、设备驱动、设备无关性。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-设备管理-包括缓冲区管理、设备分配、设备驱动、设备无关性。"}},[_._v("#")]),_._v(" 3. 设备管理，包括缓冲区管理、设备分配、设备驱动、设备无关性。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("缓冲区管理：解决 CPU 和外设速度不匹配的矛盾，使它们充分并行工作，提高各自的利用率。")])]),_._v(" "),t("li",[t("p",[_._v("设备分配。")])]),_._v(" "),t("li",[t("p",[_._v("设备驱动：实现 CPU 与通道和外设之间的通信。")])]),_._v(" "),t("li",[t("p",[_._v("设备无关性：又称设备独立性，即用户编写的程序与实际使用的物理设备无关，由操作系统把用户程序中使用的逻辑设备映射到物理设备。")])])]),_._v(" "),t("h4",{attrs:{id:"_4-文件管理-包括文件存储空间的管理、文件操作的一般管理、目录管理、文件的读写管理和存取控制。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-文件管理-包括文件存储空间的管理、文件操作的一般管理、目录管理、文件的读写管理和存取控制。"}},[_._v("#")]),_._v(" 4. 文件管理，包括文件存储空间的管理、文件操作的一般管理、目录管理、文件的读写管理和存取控制。")]),_._v(" "),t("h4",{attrs:{id:"_5-用户接口服务-包括程序接口、命令行接口、图形接口。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-用户接口服务-包括程序接口、命令行接口、图形接口。"}},[_._v("#")]),_._v(" 5.用户接口服务，包括程序接口、命令行接口、图形接口。")]),_._v(" "),t("h2",{attrs:{id:"操作系统的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的类型"}},[_._v("#")]),_._v(" 操作系统的类型")]),_._v(" "),t("h3",{attrs:{id:"多道批处理系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多道批处理系统"}},[_._v("#")]),_._v(" 多道批处理系统")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("把用户的计算任务按作业进行管理。作业是用户定义的、由计算机完成的工作单位。它通常包括一组计算机程序、文件 和对操作系统的控制语句。")])]),_._v(" "),t("li",[t("p",[_._v("特点：")]),_._v(" "),t("ul",[t("li",[_._v("多道：内存中存放多个作业，并且在外存上存放大量的后备作业。")]),_._v(" "),t("li",[_._v("成批：在系统运行过程中不允许用户和机器之间发生交互作用。")])])]),_._v(" "),t("li",[t("p",[_._v("优点：")]),_._v(" "),t("ul",[t("li",[_._v("系统资源利用率高。")]),_._v(" "),t("li",[_._v("系统吞吐量大。")])])]),_._v(" "),t("li",[t("p",[_._v("缺点：")]),_._v(" "),t("ul",[t("li",[_._v("用户作业的等待时间长。")]),_._v(" "),t("li",[_._v("没有交互能力，用户无法干预自己作业的运行。")])])])]),_._v(" "),t("h3",{attrs:{id:"分时系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分时系统"}},[_._v("#")]),_._v(" 分时系统")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("让用户通过终端设备联机地使用计算机。")])]),_._v(" "),t("li",[t("p",[_._v("并行：同一时刻有两个或两个以上的活动发生（需要多个 CPU）。")])]),_._v(" "),t("li",[t("p",[_._v("并发：多个程序在一段时间内（宏观上同时）在同一 CPU 上执行。")])]),_._v(" "),t("li",[t("p",[_._v("分时：若干并发程序对 CPU 时间的共享。利用时钟系统把 CPU 时间分成一个一个很小的时间片，操作系统轮流把每个时间片分给各个程序，每个程序一次只能运行一个时间片。")])]),_._v(" "),t("li",[t("p",[_._v("特点：")]),_._v(" "),t("ul",[t("li",[_._v("同时性。若干用户可以同时上机使用计算机系统。")]),_._v(" "),t("li",[_._v("交互性。用户能够方便地与系统进行人机对话。")]),_._v(" "),t("li",[_._v("独立性。系统中各用户可以彼此独立地操作，互不干扰或破坏。")]),_._v(" "),t("li",[_._v("及时性。用户能在很短时间内得到系统的响应。")])])])]),_._v(" "),t("h3",{attrs:{id:"实时系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实时系统"}},[_._v("#")]),_._v(" 实时系统")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("在规定内完成对事件的处理，及时响应外部事件的请求。")])]),_._v(" "),t("li",[t("p",[_._v("交互性不如分时系统，但更加可靠。")])]),_._v(" "),t("li",[t("p",[_._v("分为硬式实时系统和软式实时系统，前者对时间管理更加严格。")])])])])}),[],!1,null,null,null);v.default=s.exports}}]);