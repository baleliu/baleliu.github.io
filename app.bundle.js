(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./src/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/component/Layout/index.tsx":
/*!****************************************!*\
  !*** ./src/component/Layout/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_breadcrumb_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/breadcrumb/style/css */ "./node_modules/antd/es/breadcrumb/style/css.js");
/* harmony import */ var antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/breadcrumb */ "./node_modules/antd/es/breadcrumb/index.js");
/* harmony import */ var antd_es_menu_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/antd/es/menu/style/css.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/menu */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var antd_es_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/antd/es/icon/style/css.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var antd_es_layout_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/layout/style/css */ "./node_modules/antd/es/layout/style/css.js");
/* harmony import */ var antd_es_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/layout */ "./node_modules/antd/es/layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");










const {
  Header,
  Content,
  Footer,
  Sider
} = antd_es_layout__WEBPACK_IMPORTED_MODULE_7__["default"]; // const SubMenu = Menu.SubMenu;

class SiderDemo extends react__WEBPACK_IMPORTED_MODULE_8___default.a.Component {
  constructor() {
    super(...arguments);
    this.state = {
      collapsed: false
    };

    this.onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({
        collapsed
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        minHeight: '100vh'
      }
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Sider, {
      collapsible: true,
      collapsed: this.state.collapsed,
      onCollapse: this.onCollapse
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "logo"
    }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      theme: "dark",
      defaultSelectedKeys: ['1'],
      mode: "inline"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
      key: "1"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      to: "/page1"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "pie-chart"
    }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "page 1"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
      key: "2"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      to: "/page2"
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "desktop"
    }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "page 2"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Header, {
      style: {
        background: '#fff',
        padding: 0
      }
    }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Content, {
      style: {
        margin: '0 16px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: {
        margin: '16px 0'
      }
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"].Item, null, "User"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_es_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"].Item, null, "Bill")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      style: {
        padding: 24,
        background: '#fff',
        minHeight: 360
      }
    }, this.props.children)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Footer, {
      style: {
        textAlign: 'center'
      }
    }, "DOC \xA92019 Created by Bale.liu")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SiderDemo);

/***/ }),

/***/ "./src/component/MdPage/index.tsx":
/*!****************************************!*\
  !*** ./src/component/MdPage/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);



class MdPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    /*fetch('https://doc.bale.net.cn/index.md', {
        method: 'GET',
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8'
        },
    }).then(d => {
        console.log(d)
    });*/
    // @ts-ignore
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
      source: this.props.src
    }));
  }

}

MdPage.defaultProps = {
  src: "nothing"
};
/* harmony default export */ __webpack_exports__["default"] = (MdPage);

/***/ }),

/***/ "./src/component/RouteIndex/index.tsx":
/*!********************************************!*\
  !*** ./src/component/RouteIndex/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteIndex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout */ "./src/component/Layout/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _view_Page1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view/Page1 */ "./src/view/Page1/index.tsx");
/* harmony import */ var _view_Page2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view/Page2 */ "./src/view/Page2/index.tsx");





class RouteIndex extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/page1",
      component: _view_Page1__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/page2",
      component: _view_Page2__WEBPACK_IMPORTED_MODULE_4__["default"]
    })));
  }

}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_RouteIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/RouteIndex */ "./src/component/RouteIndex/index.tsx");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_RouteIndex__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById('root'));

/***/ }),

/***/ "./src/view/Page1/doc.md":
/*!*******************************!*\
  !*** ./src/view/Page1/doc.md ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# 记一次后端Tomcat多环境Docker改造\n\n\n## 背景\n\n> 项目比较小，开发阶段使用云服务器，只有dev环境，当时没有什么任何不适应的情况，项目采用`jenkins+tomcat+nginx`部署\n> 但是！\n> 项目进入 `uat阶段`-`>pro阶段`的时候，问题来了，环境变多了（开发进入后期，云服务的环境也迁入到机房的物理机），但是配置也跟着复杂了起来，这时候我想到了docker（这不是最适合`docker`的情景，但是用`docker`之后很爽）\n> 一不做而不休，撸起袖子打开iterm就把所有环境穿上docker的新衣裳\n\n## 思路\n\n- step1:安装docker\n- step2:将所有后端tomcat都替换成docker-tomcat\n- step3:修改后端jenkins配置\n\n> 这里考虑过把 jenkins也放入docker，把数据库也放入docker，redis也放入docker\n> 1.出于稳定性考虑，数据库服务器已经部署完成，因此不改造db\n> 2.目前jenkins控制docker镜像，因此jenkins放入docker个人感觉必要性不大，因此jenkins使用原本jenkins\n\n## 行动\n\n### 安装Docker\n> docker 安装啥的这里我不多墨迹，满大街都是文档\n\n```\n// todo docker 安装专题（waiting。。。）\n```\n\n```\n// 清理\nyum remove docker*\n```\n```\n// 环境\nyum install -y yum-utils device-mapper-persistent-data lvm2\n```\n\n```\n// 安装\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\nyum -y install docker-ce\n```\n```\n// 查看\ndocker version\n```\n![23777d78db86e54c89c730301b095bda.png](static/img1.jpg)\n\n> `ok` docker 准备好了\n\n\n### 下载Tomcat镜像&准备动作\n\n> 接下来我们把docker加工成我们想要的内容，有心的同学可以自己制作`docker file` 我这里就偷懒使用官方镜像了\n\n```\n// 查看服务器镜像，选择人数最多的就可以 或者去官网查询需要版本\ndocker search tomcat\n// `:`后为版本号，默认不写而`lasted`\n// 这里我使用tomcat9+jre8版本，详情见docker官网\ndocker pull tomcat:9.0.14-jre8\n```\n\n当前环境如下：\n\n> `dev` 日志重要性不大，日志输出多，频繁重启\n> `uat`&`pro`日志很重要，并且需要将日志记录在案，偶尔需要重启\n\n因此采取如下方案：\n> 1.所有环境使用volumes挂载公共路径\n> 2.所有环境使用volumes挂载webapp目录方便jenkins自动部署\n> 3.`uat`&`pro`环境使用volumes持久化存储logs目录下日志\n> 使用配置容器将上述内容配置起来（并不需要启动容器，仅仅提供配置）\n> 4.环境略多，将上述内容编写shell脚本方便使用\n\n```\n#!/bin/sh\nBASE=\"$0\"\n\nENV=\"$1\"\n\n# 简单校验 参数传入\nif [ ! $ENV ] ;then\n    echo \"[$BASE ENV] ENV not empty\";\n    exit 1;\nelse\n    echo \"<-BEGIN->\"\nfi\n# dev 环境\nif [$ENV = \"dev\"] ; then\ndocker create --name conf-tomcat-$ENV \\\n-v /home/tomcat/$ENV/elastic:/usr/local/shareDir \\\n-v /home/tomcat/$ENV/conf:/usr/local/tomcat/conf \\\n-v /home/tomcat/$ENV/webapp:/usr/local/tomcat/webapps \\\ntomcat\nelse\n# 其他环境\ndocker create --name conf-tomcat-$ENV \\\n-v /home/tomcat/$ENV/elastic:/usr/local/shareDir \\\n-v /home/tomcat/$ENV/conf:/usr/local/tomcat/conf \\\n-v /home/tomcat/$ENV/webapp:/usr/local/tomcat/webapps \\\n-v /home/tomcat/$ENV/logs:/usr/local/tomcat/logs \\\ntomcat\nfi\n\necho \"<-END->\"\n```\n\n```\n// `ok` 准备完成->运行脚本->查看配置情况\n// 记得`-a` 不加参数看不到未启动容器（未启用+异常退出）\ndocker ps -a\n\n// 记得给文件夹授予操作权限\n// 偷懒可以 chown -R 777 文件夹/\n```\n\n![76987d550eac2dd9734b701dea28bb70.png](evernotecid://C0395E0D-46AA-405B-AA0B-91B088AE051C/appyinxiangcom/19256479/ENResource/p93)\n\n不废话，容器运行起来！：\n```\n// 运行tomcat容器\n// 继承对应配置\n// 映射宿主机器端口\n// 直接运行\n// 容器重命名\ndocker run -itd -h 8080:8080 --volumes-from conf-dev --name tomcat-uat tomcat:9.0.14-jre8\n```\n\n```\n// 瞄一眼容器启动情况（没错很稳！）\ndocker ps\n```\n![4016c3ed97e9fed32d14e3efb7e8d93e.png](evernotecid://C0395E0D-46AA-405B-AA0B-91B088AE051C/appyinxiangcom/19256479/ENResource/p94)\n\n> 到这里docker容器准备已经完成，就等着jenkins使用呢！\n\n\n### Jenkins 配置\n> jenkins 安装也是满大街都是，可以压缩包，可以直接安装，也可以扔到docker里，反正你高兴就行。\n```\n// todo 很详细的jenkins安装 （waiting。。。）\n```\n\n```\n// 把jenkins用户加到docker分组中，让jenkins拥有操作cocker权限\n// 这步无限重要\nusermod -a docker jenkins\n```\n\n> 不管三七二十我们先把jenkins创建一个（假装是一个，其他的都是以后复制的）\n![163405319d0a5ffcf6e513931ac31aa3.png](evernotecid://C0395E0D-46AA-405B-AA0B-91B088AE051C/appyinxiangcom/19256479/ENResource/p95)\n\n> 配置jenkins\n> 这里需要注意`name=`后面需要写正则表达式，如果不加`^`那么会把我的`配置容器tomcat-env-conf`一起启动起来，虽然没影响，但是浪费资源，而且，如果不小心把其他测试容器弄起来，很吓人的。\n```\n# 进入打包目录，这里我叫`core`小伙伴可以根据`pom`的`finalName`来自己改动\ncd core\nENV=dev\n/usr/local/maven/bin/mvn clean package -P$ENV\ncd target\nrm -rf /home/tomcat/$ENV/webapp/core-$ENV.war\nmv core.war /home/tomcat/$ENV/webapp/core-$ENV.war\n# 喵一眼镜像情况，方便查看\ndocker ps -a\n# 重启我们需要的镜像\ndocker restart `docker ps -aq   --filter name=\"^tomcat-$ENV\\$\"`\n```\n\n> ok 完成配置，启动一下喵一眼，并且把其他环境配置起来，复制工程即可\n\n![c427c37f2ef94d2286acd12fbabf549d.png](evernotecid://C0395E0D-46AA-405B-AA0B-91B088AE051C/appyinxiangcom/19256479/ENResource/p96)\n\n### 前端改造\n\n```\n// todo 前端多环境，下一次改造一波。\n```\n\n## 总结\n\n> docker 准备的期间略显麻烦，但是当来到jenkins的步骤的时候，就已经可以明显的体会到docker的方便，不仅配置少了很多，并且管用用户的处理也更加方便（之前jenkins要处理tomcat那可是要不少麻烦事情，可能有偷懒的小伙伴直接改成root，但是安全隐患又成一个问题）\n\n"

/***/ }),

/***/ "./src/view/Page1/index.tsx":
/*!**********************************!*\
  !*** ./src/view/Page1/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_MdPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/MdPage */ "./src/component/MdPage/index.tsx");



const doc = __webpack_require__(/*! ./doc.md */ "./src/view/Page1/doc.md");

class Page1 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_MdPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      src: doc
    }));
  }

}

/***/ }),

/***/ "./src/view/Page2/doc.md":
/*!*******************************!*\
  !*** ./src/view/Page2/doc.md ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "# 单机部署k8s并部署tomcat服务\n\n## 目录\n\n* [基本安装](#基本安装)\n* [k8s集群初始化](k8s集群初始化)\n* [安装过程中遇到的问题](安装过程中遇到的问题)\n* [安装完成后的配置](安装完成后的配置)\n* [配置tomcat RC](配置tomcatRC)\n* [配置tomcat service](配置tomcatservice)\n* [查看战果](查看战果)\n* [总结](总结)\n\n## 开始\n\n### 环境\n\n基本配置\n\n| 内容 | 参数 |\n| --- | --- |\n| 操作系统 | centos7 |\n| 机器环境 | VMware虚拟机（mac） |\n| 部署目标 | tomcat任意版本 |\n\n虚拟机配置\n\n| 内容 | 参数 |\n| --- | --- |\n| 网卡模式 | NAT |\n| CPU核心数 | 2 |\n| 内存 | 2G |\n### 基本安装\n安装`docker`\n```\n// 安装docker\n$ yum install -y docker-ce\n// 开机启动 && 启动服务\n$ systemctl enable docker && systemctl start docker\n```\n安装镜像\n> google 镜像并不在docker库中，因此要防止墙的问题，需要找代替镜像\n```\n// 查看kubeadm镜像\n$ kubeadm config images list\n\n// 结果\nk8s.gcr.io/kube-apiserver:v1.13.3\nk8s.gcr.io/kube-controller-manager:v1.13.3\nk8s.gcr.io/kube-scheduler:v1.13.3\nk8s.gcr.io/kube-proxy:v1.13.3\nk8s.gcr.io/pause:3.1\nk8s.gcr.io/etcd:3.2.24\nk8s.gcr.io/coredns:1.2.6\n\n// 执行如下脚本（没有翻墙的同学只能通过阿里云镜像或者其他镜像）\n$ for i in `kubeadm config images list`; do \n  imageName=${i#k8s.gcr.io/}\n  docker pull registry.aliyuncs.com/google_containers/$imageName\n  docker tag registry.aliyuncs.com/google_containers/$imageName k8s.gcr.io/$imageName\n  docker rmi registry.aliyuncs.com/google_containers/$imageName\ndone;\n\n// 开机启动 && 启动服务\n$ systemctl enable kubelet && systemctl start kubelet\n```\n\n### k8s集群初始化\n\n```\n// 安装命令\n$ kubeadm init\n```\n### 安装过程中遇到的问题\n```\n[ERROR NumCPU]: the number of available CPUs 1 is less than the required 2\n\n// 解决：\n// 虚拟机修改配置\n```\n![fe193e6ab82de87060c69001e46485f5.png](evernotecid://C0395E0D-46AA-405B-AA0B-91B088AE051C/appyinxiangcom/19256479/ENResource/p98)\n\n```\n[ERROR FileContent--proc-sys-net-bridge-bridge-nf-call-iptables]: /proc/sys/net/bridge/bridge-nf-call-iptables contents are not set to 1\n\n// 解决：\n// 编辑配置\n$ vi /etc/sysctl.conf\n// 添加如下内容\nnet.bridge.bridge-nf-call-iptables = 1\n```\n\n```\n[ERROR Swap]: running with swap on is not supported. Please disable swap\n\n// 解决：\n// 禁用swap功能\nswapoff -a\n\n// 修改配置\n$ vi /etc/fstab\n# 注释如下内容\n# k8s need disabled\n# /dev/mapper/centos-swap swap                    swap    defaults        0 0\n```\n安装成功\n```\nYour Kubernetes master has initialized successfully!\n```\n### 安装完成后的配置\n```\n// 安装成功后根据提示配置\nmkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n// master 参与工作（单机模式必备）\nkubectl taint nodes --all node-role.kubernetes.io/master-\n```\n> 这边有一个BUG遇到，实际服务器可能不存在，但是虚拟机使用NAT模式，并且网卡配置为dhcp模式，动态获取ip\n> 导致一些里问题\n> eg：coredns 启动失败\n> eg：kube-apiserver-localhost.localdomain 启动失败\n> 解决改为静态配置\n\n```\nBOOTPROTO=static\n\n// ...省略...\n\n# ip 为自己实际环境ip\nIPADDR=192.168.228.128\nGATEWAY=192.168.228.2\nNETMASK=255.255.255.0\nDNS1=8.8.8.8\nDNS2=114.114.114.114\n```\n查看k8s集群情况(现在只有system pod)\n```\n$ kubectl get pods --all-namespaces\n\n// 结果如下\nkube-system   coredns-86c58d9df4-48pxx                        1/1     Running   0          6m10s\nkube-system   coredns-86c58d9df4-wdlmr                        1/1     Running   0          6m10s\nkube-system   etcd-localhost.localdomain                      1/1     Running   0          5m22s\nkube-system   kube-apiserver-localhost.localdomain            1/1     Running   0          5m18s\nkube-system   kube-controller-manager-localhost.localdomain   1/1     Running   0          5m4s\nkube-system   kube-proxy-56m56                                1/1     Running   0          6m10s\nkube-system   kube-scheduler-localhost.localdomain            1/1     Running   0          5m18s\nkube-system   weave-net-585s5                                 2/2     Running   0          60s\n```\n开启单机模式\n```\n$kubectl taint nodes --all node-role.kubernetes.io/master-\n```\n\n查看master节点情况\n> 不要慌，这里`NotReady` 完全正常\n> 安装网卡插件后，查询即可变为`Ready`\n```\n$ kubectl get nodes\n// 结果\nlocalhost.localdomain   NotReady    master   144m   v1.13.3\n```\n\n安装网络插件\n```\n// 这边有很多选择，本次使用`weave`\n// 配置地址 https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\n$ kubectl apply -f \"https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\\n')\"\n```\n\n开通必要端口号 防止不必要的问题出现\n```\n// 6443\nfirewall-cmd --zone=public --add-port=6443/tcp --permanent && firewall-cmd --reload\n// 10250\nfirewall-cmd --zone=public --add-port=10250/tcp --permanent && firewall-cmd --reload\n```\n\n### 配置tomcat RC\n配置docker镜像\n```\n// 查看所需要镜像\ndocker search tomcat\n// 下载tag为tomcat的images（默认版本为lasted）\ndocker pull tomcat\n```\n\n> `replicas: 1` pod实例个数为1\n> `image: tomcat` docker镜像\n> `name: tomcat-demo` rc名称\n> `spec:template:` 当运行实例个数小于replicas时候，rc会根据spec:template: 自动生成对应个数pod\n```\napiVersion: v1\nkind: ReplicationController\nmetadata:\n  name: tomcat-demo\nspec:\n  replicas: 1\n  selector:\n    app: tomcat-demo\n  template:\n    metadata:\n      labels:\n        app: tomcat-demo\n    spec:\n      containers:\n      - name: tomcat-demo\n        image: tomcat\n        ports:\n        - containerPort: 8080\n```\n运行配置并查看结果\n```\n// 运行yaml\n$ kubectl create -f tomcat-demo-rc.yaml\n// 结果如下\ntomcat-demo   NodePort    10.105.57.5   <none>        8080:30001/TCP   14s\n```\n\n### 配置tomcat service\n\n> `nodePort: 30001` 映射端口8080:30001\n> `name: tomcat-demo` 服务名\n\n`tomcat-demo-svc.yaml`配置文件内容\n```\napiVersion: v1\nkind: Service\nmetadata:\n  name: tomcat-demo\nspec:\n  type: NodePort\n  ports:\n   - port: 8080\n     nodePort: 30001\n  selector:\n    app: tomcat-demo\n```\n运行配置并查看结果\n```\n// 运行yaml\n$ kubectl create -f tomcat-demo-svc.yaml\n// 结果如下\ntomcat-demo   NodePort    10.105.57.5   <none>        8080:30001/TCP   14s\n```\n> `注意` svc与rc文件可以写在同一个yaml中\n开通端口号\n```\n$ firewall-cmd --zone=public --add-port=30001/tcp --permanent && firewall-cmd --reload\n```\n\n### 查看战果\n\n浏览器中查看结果 `http://${ip地址}:30001/`\n\n![d99f6f8e9d6886189989e6f292d9467e.png](evernotecid://C0395E0D-46AA-405B-AA0B-91B088AE051C/appyinxiangcom/19256479/ENResource/p97)\n\n### 总结\n\n> 安装过生中遇到不少坑，但是都都克服了，最后加入tomcat环节我觉得很有必要，作为初学者，很多文章，都在讲“k8s集群”， 各种集群部署文章，跟着流程安装了一圈，对错与否都模棱两可，还是需要一个“可视化的结果”\n\n\n"

/***/ }),

/***/ "./src/view/Page2/index.tsx":
/*!**********************************!*\
  !*** ./src/view/Page2/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_MdPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/MdPage */ "./src/component/MdPage/index.tsx");



const doc = __webpack_require__(/*! ./doc.md */ "./src/view/Page2/doc.md");

class Page1 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_MdPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      src: doc
    }));
  }

}

/***/ })

},[["./src/index.tsx","manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvTGF5b3V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L01kUGFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Sb3V0ZUluZGV4L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzP2Y3OGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9QYWdlMS9kb2MubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvUGFnZTEvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L1BhZ2UyL2RvYy5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9QYWdlMi9pbmRleC50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlNpZGVyIiwiU2lkZXJEZW1vIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInN0YXRlIiwiY29sbGFwc2VkIiwib25Db2xsYXBzZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInJlbmRlciIsIm1pbkhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luIiwicHJvcHMiLCJjaGlsZHJlbiIsInRleHRBbGlnbiIsIk1kUGFnZSIsImNvbXBvbmVudERpZE1vdW50Iiwic3JjIiwiZGVmYXVsdFByb3BzIiwiUm91dGVJbmRleCIsIlBhZ2UxIiwiUGFnZTIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkb2MiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsU0FBUyxjQUFjLGVBQWUsNkxBQTZMLHdDQUF3Qyx1Q0FB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Q0FBRCxDQUFuQjs7QUFDZSxNQUFNTixLQUFOLFNBQW9CdkIsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDL0NTLFFBQU0sR0FBRztBQUNMLFdBQVEsd0VBQ0EsMkRBQUMseURBQUQ7QUFBUSxTQUFHLEVBQUVrQjtBQUFiLE1BREEsQ0FBUjtBQUdIOztBQUw4QyxDOzs7Ozs7Ozs7OztBQ0huRCxvK0JBQW8rQixvQkFBb0IsY0FBYyxpT0FBaU8saTZJQUFpNkksS0FBSyw4UTs7Ozs7Ozs7Ozs7O0FDQTdvTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQSxNQUFNQSxHQUFHLEdBQUdDLG1CQUFPLENBQUMseUNBQUQsQ0FBbkI7O0FBQ2UsTUFBTU4sS0FBTixTQUFvQnZCLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQy9DUyxRQUFNLEdBQUc7QUFDTCxXQUFRLHdFQUNBLDJEQUFDLHlEQUFEO0FBQVEsU0FBRyxFQUFFa0I7QUFBYixNQURBLENBQVI7QUFHSDs7QUFMOEMsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsXFxuICAgIFxcXCJVYnVudHVcXFwiLCBcXFwiQ2FudGFyZWxsXFxcIiwgXFxcIkZpcmEgU2Fuc1xcXCIsIFxcXCJEcm9pZCBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkNvdXJpZXIgTmV3XFxcIixcXG4gICAgbW9ub3NwYWNlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0LCBNZW51LCBCcmVhZGNydW1iLCBJY29uLCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciwgU2lkZXIsIH0gPSBMYXlvdXQ7XG4vLyBjb25zdCBTdWJNZW51ID0gTWVudS5TdWJNZW51O1xuY2xhc3MgU2lkZXJEZW1vIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Db2xsYXBzZSA9IChjb2xsYXBzZWQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbGxhcHNlZCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGFwc2VkIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPExheW91dCBzdHlsZT17eyBtaW5IZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICAgICAgICAgICAgPFNpZGVyIGNvbGxhcHNpYmxlIGNvbGxhcHNlZD17dGhpcy5zdGF0ZS5jb2xsYXBzZWR9IG9uQ29sbGFwc2U9e3RoaXMub25Db2xsYXBzZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119IG1vZGU9XCJpbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3BhZ2UxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJwaWUtY2hhcnRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnBhZ2UgMTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9wYWdlMlwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImRlc2t0b3BcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnBhZ2UgMjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9TaWRlcj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmJywgcGFkZGluZzogMCB9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50IHN0eWxlPXt7IG1hcmdpbjogJzAgMTZweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYiBzdHlsZT17eyBtYXJnaW46ICcxNnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+VXNlcjwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+QmlsbDwvQnJlYWRjcnVtYi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyNCwgYmFja2dyb3VuZDogJyNmZmYnLCBtaW5IZWlnaHQ6IDM2MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIERPQyDCqTIwMTkgQ3JlYXRlZCBieSBCYWxlLmxpdVxuICAgICAgICAgICAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvTGF5b3V0Pik7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2lkZXJEZW1vO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmNsYXNzIE1kUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8qZmV0Y2goJ2h0dHBzOi8vZG9jLmJhbGUubmV0LmNuL2luZGV4Lm1kJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvbWFya2Rvd247IGNoYXJzZXQ9dXRmLTgnXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKGQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZClcbiAgICAgICAgfSk7Ki9cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3RoaXMucHJvcHMuc3JjfS8+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgIH1cbn1cbk1kUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3JjOiBcIm5vdGhpbmdcIlxufTtcbmV4cG9ydCBkZWZhdWx0IE1kUGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL0xheW91dFwiO1xuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFBhZ2UxIGZyb20gXCIuLi8uLi92aWV3L1BhZ2UxXCI7XG5pbXBvcnQgUGFnZTIgZnJvbSBcIi4uLy4uL3ZpZXcvUGFnZTJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8SGFzaFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wYWdlMVwiIGNvbXBvbmVudD17UGFnZTF9Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcGFnZTJcIiBjb21wb25lbnQ9e1BhZ2UyfS8+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L0hhc2hSb3V0ZXI+KTtcbiAgICB9XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0xIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTEhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBSb3V0ZUluZGV4IGZyb20gJy4vY29tcG9uZW50L1JvdXRlSW5kZXgnO1xuUmVhY3RET00ucmVuZGVyKDxSb3V0ZUluZGV4IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIjIOiusOS4gOasoeWQjuerr1RvbWNhdOWkmueOr+Wig0RvY2tlcuaUuemAoFxcblxcblxcbiMjIOiDjOaZr1xcblxcbj4g6aG555uu5q+U6L6D5bCP77yM5byA5Y+R6Zi25q615L2/55So5LqR5pyN5Yqh5Zmo77yM5Y+q5pyJZGV2546v5aKD77yM5b2T5pe25rKh5pyJ5LuA5LmI5Lu75L2V5LiN6YCC5bqU55qE5oOF5Ya177yM6aG555uu6YeH55SoYGplbmtpbnMrdG9tY2F0K25naW54YOmDqOe9slxcbj4g5L2G5piv77yBXFxuPiDpobnnm67ov5vlhaUgYHVhdOmYtuautWAtYD5wcm/pmLbmrrVg55qE5pe25YCZ77yM6Zeu6aKY5p2l5LqG77yM546v5aKD5Y+Y5aSa5LqG77yI5byA5Y+R6L+b5YWl5ZCO5pyf77yM5LqR5pyN5Yqh55qE546v5aKD5Lmf6L+B5YWl5Yiw5py65oi/55qE54mp55CG5py677yJ77yM5L2G5piv6YWN572u5Lmf6Lef552A5aSN5p2C5LqG6LW35p2l77yM6L+Z5pe25YCZ5oiR5oOz5Yiw5LqGZG9ja2Vy77yI6L+Z5LiN5piv5pyA6YCC5ZCIYGRvY2tlcmDnmoTmg4Xmma/vvIzkvYbmmK/nlKhgZG9ja2VyYOS5i+WQjuW+iOeIve+8iVxcbj4g5LiA5LiN5YGa6ICM5LiN5LyR77yM5pK46LW36KKW5a2Q5omT5byAaXRlcm3lsLHmiormiYDmnInnjq/looPnqb/kuIpkb2NrZXLnmoTmlrDooaPoo7NcXG5cXG4jIyDmgJ3ot69cXG5cXG4tIHN0ZXAxOuWuieijhWRvY2tlclxcbi0gc3RlcDI65bCG5omA5pyJ5ZCO56uvdG9tY2F06YO95pu/5o2i5oiQZG9ja2VyLXRvbWNhdFxcbi0gc3RlcDM65L+u5pS55ZCO56uvamVua2luc+mFjee9rlxcblxcbj4g6L+Z6YeM6ICD6JmR6L+H5oqKIGplbmtpbnPkuZ/mlL7lhaVkb2NrZXLvvIzmiormlbDmja7lupPkuZ/mlL7lhaVkb2NrZXLvvIxyZWRpc+S5n+aUvuWFpWRvY2tlclxcbj4gMS7lh7rkuo7nqLPlrprmgKfogIPomZHvvIzmlbDmja7lupPmnI3liqHlmajlt7Lnu4/pg6jnvbLlrozmiJDvvIzlm6DmraTkuI3mlLnpgKBkYlxcbj4gMi7nm67liY1qZW5raW5z5o6n5Yi2ZG9ja2Vy6ZWc5YOP77yM5Zug5q2kamVua2luc+aUvuWFpWRvY2tlcuS4quS6uuaEn+inieW/heimgeaAp+S4jeWkp++8jOWboOatpGplbmtpbnPkvb/nlKjljp/mnKxqZW5raW5zXFxuXFxuIyMg6KGM5YqoXFxuXFxuIyMjIOWuieijhURvY2tlclxcbj4gZG9ja2VyIOWuieijheWVpeeahOi/memHjOaIkeS4jeWkmuWiqOi/ue+8jOa7oeWkp+ihl+mDveaYr+aWh+aho1xcblxcbmBgYFxcbi8vIHRvZG8gZG9ja2VyIOWuieijheS4k+mimO+8iHdhaXRpbmfjgILjgILjgILvvIlcXG5gYGBcXG5cXG5gYGBcXG4vLyDmuIXnkIZcXG55dW0gcmVtb3ZlIGRvY2tlcipcXG5gYGBcXG5gYGBcXG4vLyDnjq/looNcXG55dW0gaW5zdGFsbCAteSB5dW0tdXRpbHMgZGV2aWNlLW1hcHBlci1wZXJzaXN0ZW50LWRhdGEgbHZtMlxcbmBgYFxcblxcbmBgYFxcbi8vIOWuieijhVxcbnl1bS1jb25maWctbWFuYWdlciAtLWFkZC1yZXBvIGh0dHA6Ly9taXJyb3JzLmFsaXl1bi5jb20vZG9ja2VyLWNlL2xpbnV4L2NlbnRvcy9kb2NrZXItY2UucmVwb1xcbnl1bSAteSBpbnN0YWxsIGRvY2tlci1jZVxcbmBgYFxcbmBgYFxcbi8vIOafpeeci1xcbmRvY2tlciB2ZXJzaW9uXFxuYGBgXFxuIVsyMzc3N2Q3OGRiODZlNTRjODljNzMwMzAxYjA5NWJkYS5wbmddKHN0YXRpYy9pbWcxLmpwZylcXG5cXG4+IGBva2AgZG9ja2VyIOWHhuWkh+WlveS6hlxcblxcblxcbiMjIyDkuIvovb1Ub21jYXTplZzlg48m5YeG5aSH5Yqo5L2cXFxuXFxuPiDmjqXkuIvmnaXmiJHku6zmiopkb2NrZXLliqDlt6XmiJDmiJHku6zmg7PopoHnmoTlhoXlrrnvvIzmnInlv4PnmoTlkIzlrablj6/ku6Xoh6rlt7HliLbkvZxgZG9ja2VyIGZpbGVgIOaIkei/memHjOWwseWBt+aHkuS9v+eUqOWumOaWuemVnOWDj+S6hlxcblxcbmBgYFxcbi8vIOafpeeci+acjeWKoeWZqOmVnOWDj++8jOmAieaLqeS6uuaVsOacgOWkmueahOWwseWPr+S7pSDmiJbogIXljrvlrpjnvZHmn6Xor6LpnIDopoHniYjmnKxcXG5kb2NrZXIgc2VhcmNoIHRvbWNhdFxcbi8vIGA6YOWQjuS4uueJiOacrOWPt++8jOm7mOiupOS4jeWGmeiAjGBsYXN0ZWRgXFxuLy8g6L+Z6YeM5oiR5L2/55SodG9tY2F0OStqcmU454mI5pys77yM6K+m5oOF6KeBZG9ja2Vy5a6Y572RXFxuZG9ja2VyIHB1bGwgdG9tY2F0OjkuMC4xNC1qcmU4XFxuYGBgXFxuXFxu5b2T5YmN546v5aKD5aaC5LiL77yaXFxuXFxuPiBgZGV2YCDml6Xlv5fph43opoHmgKfkuI3lpKfvvIzml6Xlv5fovpPlh7rlpJrvvIzpopHnuYHph43lkK9cXG4+IGB1YXRgJmBwcm9g5pel5b+X5b6I6YeN6KaB77yM5bm25LiU6ZyA6KaB5bCG5pel5b+X6K6w5b2V5Zyo5qGI77yM5YG25bCU6ZyA6KaB6YeN5ZCvXFxuXFxu5Zug5q2k6YeH5Y+W5aaC5LiL5pa55qGI77yaXFxuPiAxLuaJgOacieeOr+Wig+S9v+eUqHZvbHVtZXPmjILovb3lhazlhbHot6/lvoRcXG4+IDIu5omA5pyJ546v5aKD5L2/55Sodm9sdW1lc+aMgui9vXdlYmFwcOebruW9leaWueS+v2plbmtpbnPoh6rliqjpg6jnvbJcXG4+IDMuYHVhdGAmYHByb2Dnjq/looPkvb/nlKh2b2x1bWVz5oyB5LmF5YyW5a2Y5YKobG9nc+ebruW9leS4i+aXpeW/l1xcbj4g5L2/55So6YWN572u5a655Zmo5bCG5LiK6L+w5YaF5a656YWN572u6LW35p2l77yI5bm25LiN6ZyA6KaB5ZCv5Yqo5a655Zmo77yM5LuF5LuF5o+Q5L6b6YWN572u77yJXFxuPiA0LueOr+Wig+eVpeWkmu+8jOWwhuS4iui/sOWGheWuuee8luWGmXNoZWxs6ISa5pys5pa55L6/5L2/55SoXFxuXFxuYGBgXFxuIyEvYmluL3NoXFxuQkFTRT1cXFwiJDBcXFwiXFxuXFxuRU5WPVxcXCIkMVxcXCJcXG5cXG4jIOeugOWNleagoemqjCDlj4LmlbDkvKDlhaVcXG5pZiBbICEgJEVOViBdIDt0aGVuXFxuICAgIGVjaG8gXFxcIlskQkFTRSBFTlZdIEVOViBub3QgZW1wdHlcXFwiO1xcbiAgICBleGl0IDE7XFxuZWxzZVxcbiAgICBlY2hvIFxcXCI8LUJFR0lOLT5cXFwiXFxuZmlcXG4jIGRldiDnjq/looNcXG5pZiBbJEVOViA9IFxcXCJkZXZcXFwiXSA7IHRoZW5cXG5kb2NrZXIgY3JlYXRlIC0tbmFtZSBjb25mLXRvbWNhdC0kRU5WIFxcXFxcXG4tdiAvaG9tZS90b21jYXQvJEVOVi9lbGFzdGljOi91c3IvbG9jYWwvc2hhcmVEaXIgXFxcXFxcbi12IC9ob21lL3RvbWNhdC8kRU5WL2NvbmY6L3Vzci9sb2NhbC90b21jYXQvY29uZiBcXFxcXFxuLXYgL2hvbWUvdG9tY2F0LyRFTlYvd2ViYXBwOi91c3IvbG9jYWwvdG9tY2F0L3dlYmFwcHMgXFxcXFxcbnRvbWNhdFxcbmVsc2VcXG4jIOWFtuS7lueOr+Wig1xcbmRvY2tlciBjcmVhdGUgLS1uYW1lIGNvbmYtdG9tY2F0LSRFTlYgXFxcXFxcbi12IC9ob21lL3RvbWNhdC8kRU5WL2VsYXN0aWM6L3Vzci9sb2NhbC9zaGFyZURpciBcXFxcXFxuLXYgL2hvbWUvdG9tY2F0LyRFTlYvY29uZjovdXNyL2xvY2FsL3RvbWNhdC9jb25mIFxcXFxcXG4tdiAvaG9tZS90b21jYXQvJEVOVi93ZWJhcHA6L3Vzci9sb2NhbC90b21jYXQvd2ViYXBwcyBcXFxcXFxuLXYgL2hvbWUvdG9tY2F0LyRFTlYvbG9nczovdXNyL2xvY2FsL3RvbWNhdC9sb2dzIFxcXFxcXG50b21jYXRcXG5maVxcblxcbmVjaG8gXFxcIjwtRU5ELT5cXFwiXFxuYGBgXFxuXFxuYGBgXFxuLy8gYG9rYCDlh4blpIflrozmiJAtPui/kOihjOiEmuacrC0+5p+l55yL6YWN572u5oOF5Ya1XFxuLy8g6K6w5b6XYC1hYCDkuI3liqDlj4LmlbDnnIvkuI3liLDmnKrlkK/liqjlrrnlmajvvIjmnKrlkK/nlKgr5byC5bi46YCA5Ye677yJXFxuZG9ja2VyIHBzIC1hXFxuXFxuLy8g6K6w5b6X57uZ5paH5Lu25aS55o6I5LqI5pON5L2c5p2D6ZmQXFxuLy8g5YG35oeS5Y+v5LulIGNob3duIC1SIDc3NyDmlofku7blpLkvXFxuYGBgXFxuXFxuIVs3Njk4N2Q1NTBlYWMyZGQ5NzM0YjcwMWRlYTI4YmI3MC5wbmddKGV2ZXJub3RlY2lkOi8vQzAzOTVFMEQtNDZBQS00MDVCLUFBMEItOTFCMDg4QUUwNTFDL2FwcHlpbnhpYW5nY29tLzE5MjU2NDc5L0VOUmVzb3VyY2UvcDkzKVxcblxcbuS4jeW6n+ivne+8jOWuueWZqOi/kOihjOi1t+adpe+8ge+8mlxcbmBgYFxcbi8vIOi/kOihjHRvbWNhdOWuueWZqFxcbi8vIOe7p+aJv+WvueW6lOmFjee9rlxcbi8vIOaYoOWwhOWuv+S4u+acuuWZqOerr+WPo1xcbi8vIOebtOaOpei/kOihjFxcbi8vIOWuueWZqOmHjeWRveWQjVxcbmRvY2tlciBydW4gLWl0ZCAtaCA4MDgwOjgwODAgLS12b2x1bWVzLWZyb20gY29uZi1kZXYgLS1uYW1lIHRvbWNhdC11YXQgdG9tY2F0OjkuMC4xNC1qcmU4XFxuYGBgXFxuXFxuYGBgXFxuLy8g556E5LiA55y85a655Zmo5ZCv5Yqo5oOF5Ya177yI5rKh6ZSZ5b6I56iz77yB77yJXFxuZG9ja2VyIHBzXFxuYGBgXFxuIVs0MDE2YzNlZDk3ZTlmZWQzMmQxNGUzZWZiN2U4ZDkzZS5wbmddKGV2ZXJub3RlY2lkOi8vQzAzOTVFMEQtNDZBQS00MDVCLUFBMEItOTFCMDg4QUUwNTFDL2FwcHlpbnhpYW5nY29tLzE5MjU2NDc5L0VOUmVzb3VyY2UvcDk0KVxcblxcbj4g5Yiw6L+Z6YeMZG9ja2Vy5a655Zmo5YeG5aSH5bey57uP5a6M5oiQ77yM5bCx562J552AamVua2luc+S9v+eUqOWRou+8gVxcblxcblxcbiMjIyBKZW5raW5zIOmFjee9rlxcbj4gamVua2lucyDlronoo4XkuZ/mmK/mu6HlpKfooZfpg73mmK/vvIzlj6/ku6XljovnvKnljIXvvIzlj6/ku6Xnm7TmjqXlronoo4XvvIzkuZ/lj6/ku6XmiZTliLBkb2NrZXLph4zvvIzlj43mraPkvaDpq5jlhbTlsLHooYzjgIJcXG5gYGBcXG4vLyB0b2RvIOW+iOivpue7hueahGplbmtpbnPlronoo4Ug77yId2FpdGluZ+OAguOAguOAgu+8iVxcbmBgYFxcblxcbmBgYFxcbi8vIOaKimplbmtpbnPnlKjmiLfliqDliLBkb2NrZXLliIbnu4TkuK3vvIzorqlqZW5raW5z5oul5pyJ5pON5L2cY29ja2Vy5p2D6ZmQXFxuLy8g6L+Z5q2l5peg6ZmQ6YeN6KaBXFxudXNlcm1vZCAtYSBkb2NrZXIgamVua2luc1xcbmBgYFxcblxcbj4g5LiN566h5LiJ5LiD5LqM5Y2B5oiR5Lus5YWI5oqKamVua2luc+WIm+W7uuS4gOS4qu+8iOWBh+ijheaYr+S4gOS4qu+8jOWFtuS7lueahOmDveaYr+S7peWQjuWkjeWItueahO+8iVxcbiFbMTYzNDA1MzE5ZDBhNWZmY2Y2ZTUxMzkzMWFjMzFhYTMucG5nXShldmVybm90ZWNpZDovL0MwMzk1RTBELTQ2QUEtNDA1Qi1BQTBCLTkxQjA4OEFFMDUxQy9hcHB5aW54aWFuZ2NvbS8xOTI1NjQ3OS9FTlJlc291cmNlL3A5NSlcXG5cXG4+IOmFjee9rmplbmtpbnNcXG4+IOi/memHjOmcgOimgeazqOaEj2BuYW1lPWDlkI7pnaLpnIDopoHlhpnmraPliJnooajovr7lvI/vvIzlpoLmnpzkuI3liqBgXmDpgqPkuYjkvJrmiormiJHnmoRg6YWN572u5a655ZmodG9tY2F0LWVudi1jb25mYOS4gOi1t+WQr+WKqOi1t+adpe+8jOiZveeEtuayoeW9seWTje+8jOS9huaYr+a1qui0uei1hOa6kO+8jOiAjOS4lO+8jOWmguaenOS4jeWwj+W/g+aKiuWFtuS7lua1i+ivleWuueWZqOW8hOi1t+adpe+8jOW+iOWQk+S6uueahOOAglxcbmBgYFxcbiMg6L+b5YWl5omT5YyF55uu5b2V77yM6L+Z6YeM5oiR5Y+rYGNvcmVg5bCP5LyZ5Ly05Y+v5Lul5qC55o2uYHBvbWDnmoRgZmluYWxOYW1lYOadpeiHquW3seaUueWKqFxcbmNkIGNvcmVcXG5FTlY9ZGV2XFxuL3Vzci9sb2NhbC9tYXZlbi9iaW4vbXZuIGNsZWFuIHBhY2thZ2UgLVAkRU5WXFxuY2QgdGFyZ2V0XFxucm0gLXJmIC9ob21lL3RvbWNhdC8kRU5WL3dlYmFwcC9jb3JlLSRFTlYud2FyXFxubXYgY29yZS53YXIgL2hvbWUvdG9tY2F0LyRFTlYvd2ViYXBwL2NvcmUtJEVOVi53YXJcXG4jIOWWteS4gOecvOmVnOWDj+aDheWGte+8jOaWueS+v+afpeeci1xcbmRvY2tlciBwcyAtYVxcbiMg6YeN5ZCv5oiR5Lus6ZyA6KaB55qE6ZWc5YOPXFxuZG9ja2VyIHJlc3RhcnQgYGRvY2tlciBwcyAtYXEgICAtLWZpbHRlciBuYW1lPVxcXCJedG9tY2F0LSRFTlZcXFxcJFxcXCJgXFxuYGBgXFxuXFxuPiBvayDlrozmiJDphY3nva7vvIzlkK/liqjkuIDkuIvllrXkuIDnnLzvvIzlubbkuJTmiorlhbbku5bnjq/looPphY3nva7otbfmnaXvvIzlpI3liLblt6XnqIvljbPlj69cXG5cXG4hW2M0MjdjMzdmMmVmOTRkMjI4NmFjZDEyZmJhYmY1NDlkLnBuZ10oZXZlcm5vdGVjaWQ6Ly9DMDM5NUUwRC00NkFBLTQwNUItQUEwQi05MUIwODhBRTA1MUMvYXBweWlueGlhbmdjb20vMTkyNTY0NzkvRU5SZXNvdXJjZS9wOTYpXFxuXFxuIyMjIOWJjeerr+aUuemAoFxcblxcbmBgYFxcbi8vIHRvZG8g5YmN56uv5aSa546v5aKD77yM5LiL5LiA5qyh5pS56YCg5LiA5rOi44CCXFxuYGBgXFxuXFxuIyMg5oC757uTXFxuXFxuPiBkb2NrZXIg5YeG5aSH55qE5pyf6Ze055Wl5pi+6bq754Om77yM5L2G5piv5b2T5p2l5YiwamVua2luc+eahOatpemqpOeahOaXtuWAme+8jOWwseW3sue7j+WPr+S7peaYjuaYvueahOS9k+S8muWIsGRvY2tlcueahOaWueS+v++8jOS4jeS7hemFjee9ruWwkeS6huW+iOWkmu+8jOW5tuS4lOeuoeeUqOeUqOaIt+eahOWkhOeQhuS5n+abtOWKoOaWueS+v++8iOS5i+WJjWplbmtpbnPopoHlpITnkIZ0b21jYXTpgqPlj6/mmK/opoHkuI3lsJHpurvng6bkuovmg4XvvIzlj6/og73mnInlgbfmh5LnmoTlsI/kvJnkvLTnm7TmjqXmlLnmiJByb29077yM5L2G5piv5a6J5YWo6ZqQ5oKj5Y+I5oiQ5LiA5Liq6Zeu6aKY77yJXFxuXFxuXCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1kUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnQvTWRQYWdlJztcbmNvbnN0IGRvYyA9IHJlcXVpcmUoJy4vZG9jLm1kJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgPE1kUGFnZSBzcmM9e2RvY30vPlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyDljZXmnLrpg6jnvbJrOHPlubbpg6jnvbJ0b21jYXTmnI3liqFcXG5cXG4jIyDnm67lvZVcXG5cXG4qIFvln7rmnKzlronoo4VdKCPln7rmnKzlronoo4UpXFxuKiBbazhz6ZuG576k5Yid5aeL5YyWXShrOHPpm4bnvqTliJ3lp4vljJYpXFxuKiBb5a6J6KOF6L+H56iL5Lit6YGH5Yiw55qE6Zeu6aKYXSjlronoo4Xov4fnqIvkuK3pgYfliLDnmoTpl67popgpXFxuKiBb5a6J6KOF5a6M5oiQ5ZCO55qE6YWN572uXSjlronoo4XlrozmiJDlkI7nmoTphY3nva4pXFxuKiBb6YWN572udG9tY2F0IFJDXSjphY3nva50b21jYXRSQylcXG4qIFvphY3nva50b21jYXQgc2VydmljZV0o6YWN572udG9tY2F0c2VydmljZSlcXG4qIFvmn6XnnIvmiJjmnpxdKOafpeeci+aImOaenClcXG4qIFvmgLvnu5NdKOaAu+e7kylcXG5cXG4jIyDlvIDlp4tcXG5cXG4jIyMg546v5aKDXFxuXFxu5Z+65pys6YWN572uXFxuXFxufCDlhoXlrrkgfCDlj4LmlbAgfFxcbnwgLS0tIHwgLS0tIHxcXG58IOaTjeS9nOezu+e7nyB8IGNlbnRvczcgfFxcbnwg5py65Zmo546v5aKDIHwgVk13YXJl6Jma5ouf5py677yIbWFj77yJIHxcXG58IOmDqOe9suebruaghyB8IHRvbWNhdOS7u+aEj+eJiOacrCB8XFxuXFxu6Jma5ouf5py66YWN572uXFxuXFxufCDlhoXlrrkgfCDlj4LmlbAgfFxcbnwgLS0tIHwgLS0tIHxcXG58IOe9keWNoeaooeW8jyB8IE5BVCB8XFxufCBDUFXmoLjlv4PmlbAgfCAyIHxcXG58IOWGheWtmCB8IDJHIHxcXG4jIyMg5Z+65pys5a6J6KOFXFxu5a6J6KOFYGRvY2tlcmBcXG5gYGBcXG4vLyDlronoo4Vkb2NrZXJcXG4kIHl1bSBpbnN0YWxsIC15IGRvY2tlci1jZVxcbi8vIOW8gOacuuWQr+WKqCAmJiDlkK/liqjmnI3liqFcXG4kIHN5c3RlbWN0bCBlbmFibGUgZG9ja2VyICYmIHN5c3RlbWN0bCBzdGFydCBkb2NrZXJcXG5gYGBcXG7lronoo4XplZzlg49cXG4+IGdvb2dsZSDplZzlg4/lubbkuI3lnKhkb2NrZXLlupPkuK3vvIzlm6DmraTopoHpmLLmraLlopnnmoTpl67popjvvIzpnIDopoHmib7ku6Pmm7/plZzlg49cXG5gYGBcXG4vLyDmn6XnnItrdWJlYWRt6ZWc5YOPXFxuJCBrdWJlYWRtIGNvbmZpZyBpbWFnZXMgbGlzdFxcblxcbi8vIOe7k+aenFxcbms4cy5nY3IuaW8va3ViZS1hcGlzZXJ2ZXI6djEuMTMuM1xcbms4cy5nY3IuaW8va3ViZS1jb250cm9sbGVyLW1hbmFnZXI6djEuMTMuM1xcbms4cy5nY3IuaW8va3ViZS1zY2hlZHVsZXI6djEuMTMuM1xcbms4cy5nY3IuaW8va3ViZS1wcm94eTp2MS4xMy4zXFxuazhzLmdjci5pby9wYXVzZTozLjFcXG5rOHMuZ2NyLmlvL2V0Y2Q6My4yLjI0XFxuazhzLmdjci5pby9jb3JlZG5zOjEuMi42XFxuXFxuLy8g5omn6KGM5aaC5LiL6ISa5pys77yI5rKh5pyJ57+75aKZ55qE5ZCM5a2m5Y+q6IO96YCa6L+H6Zi/6YeM5LqR6ZWc5YOP5oiW6ICF5YW25LuW6ZWc5YOP77yJXFxuJCBmb3IgaSBpbiBga3ViZWFkbSBjb25maWcgaW1hZ2VzIGxpc3RgOyBkbyBcXG4gIGltYWdlTmFtZT0ke2kjazhzLmdjci5pby99XFxuICBkb2NrZXIgcHVsbCByZWdpc3RyeS5hbGl5dW5jcy5jb20vZ29vZ2xlX2NvbnRhaW5lcnMvJGltYWdlTmFtZVxcbiAgZG9ja2VyIHRhZyByZWdpc3RyeS5hbGl5dW5jcy5jb20vZ29vZ2xlX2NvbnRhaW5lcnMvJGltYWdlTmFtZSBrOHMuZ2NyLmlvLyRpbWFnZU5hbWVcXG4gIGRvY2tlciBybWkgcmVnaXN0cnkuYWxpeXVuY3MuY29tL2dvb2dsZV9jb250YWluZXJzLyRpbWFnZU5hbWVcXG5kb25lO1xcblxcbi8vIOW8gOacuuWQr+WKqCAmJiDlkK/liqjmnI3liqFcXG4kIHN5c3RlbWN0bCBlbmFibGUga3ViZWxldCAmJiBzeXN0ZW1jdGwgc3RhcnQga3ViZWxldFxcbmBgYFxcblxcbiMjIyBrOHPpm4bnvqTliJ3lp4vljJZcXG5cXG5gYGBcXG4vLyDlronoo4Xlkb3ku6RcXG4kIGt1YmVhZG0gaW5pdFxcbmBgYFxcbiMjIyDlronoo4Xov4fnqIvkuK3pgYfliLDnmoTpl67pophcXG5gYGBcXG5bRVJST1IgTnVtQ1BVXTogdGhlIG51bWJlciBvZiBhdmFpbGFibGUgQ1BVcyAxIGlzIGxlc3MgdGhhbiB0aGUgcmVxdWlyZWQgMlxcblxcbi8vIOino+WGs++8mlxcbi8vIOiZmuaLn+acuuS/ruaUuemFjee9rlxcbmBgYFxcbiFbZmUxOTNlNmFiODJkZTg3MDYwYzY5MDAxZTQ2NDg1ZjUucG5nXShldmVybm90ZWNpZDovL0MwMzk1RTBELTQ2QUEtNDA1Qi1BQTBCLTkxQjA4OEFFMDUxQy9hcHB5aW54aWFuZ2NvbS8xOTI1NjQ3OS9FTlJlc291cmNlL3A5OClcXG5cXG5gYGBcXG5bRVJST1IgRmlsZUNvbnRlbnQtLXByb2Mtc3lzLW5ldC1icmlkZ2UtYnJpZGdlLW5mLWNhbGwtaXB0YWJsZXNdOiAvcHJvYy9zeXMvbmV0L2JyaWRnZS9icmlkZ2UtbmYtY2FsbC1pcHRhYmxlcyBjb250ZW50cyBhcmUgbm90IHNldCB0byAxXFxuXFxuLy8g6Kej5Yaz77yaXFxuLy8g57yW6L6R6YWN572uXFxuJCB2aSAvZXRjL3N5c2N0bC5jb25mXFxuLy8g5re75Yqg5aaC5LiL5YaF5a65XFxubmV0LmJyaWRnZS5icmlkZ2UtbmYtY2FsbC1pcHRhYmxlcyA9IDFcXG5gYGBcXG5cXG5gYGBcXG5bRVJST1IgU3dhcF06IHJ1bm5pbmcgd2l0aCBzd2FwIG9uIGlzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSBkaXNhYmxlIHN3YXBcXG5cXG4vLyDop6PlhrPvvJpcXG4vLyDnpoHnlKhzd2Fw5Yqf6IO9XFxuc3dhcG9mZiAtYVxcblxcbi8vIOS/ruaUuemFjee9rlxcbiQgdmkgL2V0Yy9mc3RhYlxcbiMg5rOo6YeK5aaC5LiL5YaF5a65XFxuIyBrOHMgbmVlZCBkaXNhYmxlZFxcbiMgL2Rldi9tYXBwZXIvY2VudG9zLXN3YXAgc3dhcCAgICAgICAgICAgICAgICAgICAgc3dhcCAgICBkZWZhdWx0cyAgICAgICAgMCAwXFxuYGBgXFxu5a6J6KOF5oiQ5YqfXFxuYGBgXFxuWW91ciBLdWJlcm5ldGVzIG1hc3RlciBoYXMgaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5IVxcbmBgYFxcbiMjIyDlronoo4XlrozmiJDlkI7nmoTphY3nva5cXG5gYGBcXG4vLyDlronoo4XmiJDlip/lkI7moLnmja7mj5DnpLrphY3nva5cXG5ta2RpciAtcCAkSE9NRS8ua3ViZVxcbnN1ZG8gY3AgLWkgL2V0Yy9rdWJlcm5ldGVzL2FkbWluLmNvbmYgJEhPTUUvLmt1YmUvY29uZmlnXFxuc3VkbyBjaG93biAkKGlkIC11KTokKGlkIC1nKSAkSE9NRS8ua3ViZS9jb25maWdcXG4vLyBtYXN0ZXIg5Y+C5LiO5bel5L2c77yI5Y2V5py65qih5byP5b+F5aSH77yJXFxua3ViZWN0bCB0YWludCBub2RlcyAtLWFsbCBub2RlLXJvbGUua3ViZXJuZXRlcy5pby9tYXN0ZXItXFxuYGBgXFxuPiDov5novrnmnInkuIDkuKpCVUfpgYfliLDvvIzlrp7pmYXmnI3liqHlmajlj6/og73kuI3lrZjlnKjvvIzkvYbmmK/omZrmi5/mnLrkvb/nlKhOQVTmqKHlvI/vvIzlubbkuJTnvZHljaHphY3nva7kuLpkaGNw5qih5byP77yM5Yqo5oCB6I635Y+WaXBcXG4+IOWvvOiHtOS4gOS6m+mHjOmXrumimFxcbj4gZWfvvJpjb3JlZG5zIOWQr+WKqOWksei0pVxcbj4gZWfvvJprdWJlLWFwaXNlcnZlci1sb2NhbGhvc3QubG9jYWxkb21haW4g5ZCv5Yqo5aSx6LSlXFxuPiDop6PlhrPmlLnkuLrpnZnmgIHphY3nva5cXG5cXG5gYGBcXG5CT09UUFJPVE89c3RhdGljXFxuXFxuLy8gLi4u55yB55WlLi4uXFxuXFxuIyBpcCDkuLroh6rlt7Hlrp7pmYXnjq/looNpcFxcbklQQUREUj0xOTIuMTY4LjIyOC4xMjhcXG5HQVRFV0FZPTE5Mi4xNjguMjI4LjJcXG5ORVRNQVNLPTI1NS4yNTUuMjU1LjBcXG5ETlMxPTguOC44LjhcXG5ETlMyPTExNC4xMTQuMTE0LjExNFxcbmBgYFxcbuafpeeci2s4c+mbhue+pOaDheWGtSjnjrDlnKjlj6rmnIlzeXN0ZW0gcG9kKVxcbmBgYFxcbiQga3ViZWN0bCBnZXQgcG9kcyAtLWFsbC1uYW1lc3BhY2VzXFxuXFxuLy8g57uT5p6c5aaC5LiLXFxua3ViZS1zeXN0ZW0gICBjb3JlZG5zLTg2YzU4ZDlkZjQtNDhweHggICAgICAgICAgICAgICAgICAgICAgICAxLzEgICAgIFJ1bm5pbmcgICAwICAgICAgICAgIDZtMTBzXFxua3ViZS1zeXN0ZW0gICBjb3JlZG5zLTg2YzU4ZDlkZjQtd2RsbXIgICAgICAgICAgICAgICAgICAgICAgICAxLzEgICAgIFJ1bm5pbmcgICAwICAgICAgICAgIDZtMTBzXFxua3ViZS1zeXN0ZW0gICBldGNkLWxvY2FsaG9zdC5sb2NhbGRvbWFpbiAgICAgICAgICAgICAgICAgICAgICAxLzEgICAgIFJ1bm5pbmcgICAwICAgICAgICAgIDVtMjJzXFxua3ViZS1zeXN0ZW0gICBrdWJlLWFwaXNlcnZlci1sb2NhbGhvc3QubG9jYWxkb21haW4gICAgICAgICAgICAxLzEgICAgIFJ1bm5pbmcgICAwICAgICAgICAgIDVtMThzXFxua3ViZS1zeXN0ZW0gICBrdWJlLWNvbnRyb2xsZXItbWFuYWdlci1sb2NhbGhvc3QubG9jYWxkb21haW4gICAxLzEgICAgIFJ1bm5pbmcgICAwICAgICAgICAgIDVtNHNcXG5rdWJlLXN5c3RlbSAgIGt1YmUtcHJveHktNTZtNTYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEvMSAgICAgUnVubmluZyAgIDAgICAgICAgICAgNm0xMHNcXG5rdWJlLXN5c3RlbSAgIGt1YmUtc2NoZWR1bGVyLWxvY2FsaG9zdC5sb2NhbGRvbWFpbiAgICAgICAgICAgIDEvMSAgICAgUnVubmluZyAgIDAgICAgICAgICAgNW0xOHNcXG5rdWJlLXN5c3RlbSAgIHdlYXZlLW5ldC01ODVzNSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIvMiAgICAgUnVubmluZyAgIDAgICAgICAgICAgNjBzXFxuYGBgXFxu5byA5ZCv5Y2V5py65qih5byPXFxuYGBgXFxuJGt1YmVjdGwgdGFpbnQgbm9kZXMgLS1hbGwgbm9kZS1yb2xlLmt1YmVybmV0ZXMuaW8vbWFzdGVyLVxcbmBgYFxcblxcbuafpeeci21hc3RlcuiKgueCueaDheWGtVxcbj4g5LiN6KaB5oWM77yM6L+Z6YeMYE5vdFJlYWR5YCDlrozlhajmraPluLhcXG4+IOWuieijhee9keWNoeaPkuS7tuWQju+8jOafpeivouWNs+WPr+WPmOS4umBSZWFkeWBcXG5gYGBcXG4kIGt1YmVjdGwgZ2V0IG5vZGVzXFxuLy8g57uT5p6cXFxubG9jYWxob3N0LmxvY2FsZG9tYWluICAgTm90UmVhZHkgICAgbWFzdGVyICAgMTQ0bSAgIHYxLjEzLjNcXG5gYGBcXG5cXG7lronoo4XnvZHnu5zmj5Lku7ZcXG5gYGBcXG4vLyDov5novrnmnInlvojlpJrpgInmi6nvvIzmnKzmrKHkvb/nlKhgd2VhdmVgXFxuLy8g6YWN572u5Zyw5Z2AIGh0dHBzOi8va3ViZXJuZXRlcy5pby9kb2NzL2NvbmNlcHRzL2NsdXN0ZXItYWRtaW5pc3RyYXRpb24vYWRkb25zL1xcblxcbiQga3ViZWN0bCBhcHBseSAtZiBcXFwiaHR0cHM6Ly9jbG91ZC53ZWF2ZS53b3Jrcy9rOHMvbmV0P2s4cy12ZXJzaW9uPSQoa3ViZWN0bCB2ZXJzaW9uIHwgYmFzZTY0IHwgdHIgLWQgJ1xcXFxuJylcXFwiXFxuYGBgXFxuXFxu5byA6YCa5b+F6KaB56uv5Y+j5Y+3IOmYsuatouS4jeW/heimgeeahOmXrumimOWHuueOsFxcbmBgYFxcbi8vIDY0NDNcXG5maXJld2FsbC1jbWQgLS16b25lPXB1YmxpYyAtLWFkZC1wb3J0PTY0NDMvdGNwIC0tcGVybWFuZW50ICYmIGZpcmV3YWxsLWNtZCAtLXJlbG9hZFxcbi8vIDEwMjUwXFxuZmlyZXdhbGwtY21kIC0tem9uZT1wdWJsaWMgLS1hZGQtcG9ydD0xMDI1MC90Y3AgLS1wZXJtYW5lbnQgJiYgZmlyZXdhbGwtY21kIC0tcmVsb2FkXFxuYGBgXFxuXFxuIyMjIOmFjee9rnRvbWNhdCBSQ1xcbumFjee9rmRvY2tlcumVnOWDj1xcbmBgYFxcbi8vIOafpeeci+aJgOmcgOimgemVnOWDj1xcbmRvY2tlciBzZWFyY2ggdG9tY2F0XFxuLy8g5LiL6L29dGFn5Li6dG9tY2F055qEaW1hZ2Vz77yI6buY6K6k54mI5pys5Li6bGFzdGVk77yJXFxuZG9ja2VyIHB1bGwgdG9tY2F0XFxuYGBgXFxuXFxuPiBgcmVwbGljYXM6IDFgIHBvZOWunuS+i+S4quaVsOS4ujFcXG4+IGBpbWFnZTogdG9tY2F0YCBkb2NrZXLplZzlg49cXG4+IGBuYW1lOiB0b21jYXQtZGVtb2AgcmPlkI3np7BcXG4+IGBzcGVjOnRlbXBsYXRlOmAg5b2T6L+Q6KGM5a6e5L6L5Liq5pWw5bCP5LqOcmVwbGljYXPml7blgJnvvIxyY+S8muagueaNrnNwZWM6dGVtcGxhdGU6IOiHquWKqOeUn+aIkOWvueW6lOS4quaVsHBvZFxcbmBgYFxcbmFwaVZlcnNpb246IHYxXFxua2luZDogUmVwbGljYXRpb25Db250cm9sbGVyXFxubWV0YWRhdGE6XFxuICBuYW1lOiB0b21jYXQtZGVtb1xcbnNwZWM6XFxuICByZXBsaWNhczogMVxcbiAgc2VsZWN0b3I6XFxuICAgIGFwcDogdG9tY2F0LWRlbW9cXG4gIHRlbXBsYXRlOlxcbiAgICBtZXRhZGF0YTpcXG4gICAgICBsYWJlbHM6XFxuICAgICAgICBhcHA6IHRvbWNhdC1kZW1vXFxuICAgIHNwZWM6XFxuICAgICAgY29udGFpbmVyczpcXG4gICAgICAtIG5hbWU6IHRvbWNhdC1kZW1vXFxuICAgICAgICBpbWFnZTogdG9tY2F0XFxuICAgICAgICBwb3J0czpcXG4gICAgICAgIC0gY29udGFpbmVyUG9ydDogODA4MFxcbmBgYFxcbui/kOihjOmFjee9ruW5tuafpeeci+e7k+aenFxcbmBgYFxcbi8vIOi/kOihjHlhbWxcXG4kIGt1YmVjdGwgY3JlYXRlIC1mIHRvbWNhdC1kZW1vLXJjLnlhbWxcXG4vLyDnu5PmnpzlpoLkuItcXG50b21jYXQtZGVtbyAgIE5vZGVQb3J0ICAgIDEwLjEwNS41Ny41ICAgPG5vbmU+ICAgICAgICA4MDgwOjMwMDAxL1RDUCAgIDE0c1xcbmBgYFxcblxcbiMjIyDphY3nva50b21jYXQgc2VydmljZVxcblxcbj4gYG5vZGVQb3J0OiAzMDAwMWAg5pig5bCE56uv5Y+jODA4MDozMDAwMVxcbj4gYG5hbWU6IHRvbWNhdC1kZW1vYCDmnI3liqHlkI1cXG5cXG5gdG9tY2F0LWRlbW8tc3ZjLnlhbWxg6YWN572u5paH5Lu25YaF5a65XFxuYGBgXFxuYXBpVmVyc2lvbjogdjFcXG5raW5kOiBTZXJ2aWNlXFxubWV0YWRhdGE6XFxuICBuYW1lOiB0b21jYXQtZGVtb1xcbnNwZWM6XFxuICB0eXBlOiBOb2RlUG9ydFxcbiAgcG9ydHM6XFxuICAgLSBwb3J0OiA4MDgwXFxuICAgICBub2RlUG9ydDogMzAwMDFcXG4gIHNlbGVjdG9yOlxcbiAgICBhcHA6IHRvbWNhdC1kZW1vXFxuYGBgXFxu6L+Q6KGM6YWN572u5bm25p+l55yL57uT5p6cXFxuYGBgXFxuLy8g6L+Q6KGMeWFtbFxcbiQga3ViZWN0bCBjcmVhdGUgLWYgdG9tY2F0LWRlbW8tc3ZjLnlhbWxcXG4vLyDnu5PmnpzlpoLkuItcXG50b21jYXQtZGVtbyAgIE5vZGVQb3J0ICAgIDEwLjEwNS41Ny41ICAgPG5vbmU+ICAgICAgICA4MDgwOjMwMDAxL1RDUCAgIDE0c1xcbmBgYFxcbj4gYOazqOaEj2Agc3Zj5LiOcmPmlofku7blj6/ku6XlhpnlnKjlkIzkuIDkuKp5YW1s5LitXFxu5byA6YCa56uv5Y+j5Y+3XFxuYGBgXFxuJCBmaXJld2FsbC1jbWQgLS16b25lPXB1YmxpYyAtLWFkZC1wb3J0PTMwMDAxL3RjcCAtLXBlcm1hbmVudCAmJiBmaXJld2FsbC1jbWQgLS1yZWxvYWRcXG5gYGBcXG5cXG4jIyMg5p+l55yL5oiY5p6cXFxuXFxu5rWP6KeI5Zmo5Lit5p+l55yL57uT5p6cIGBodHRwOi8vJHtpcOWcsOWdgH06MzAwMDEvYFxcblxcbiFbZDk5ZjZmOGU5ZDY4ODYxODk5ODllNmYyOTJkOTQ2N2UucG5nXShldmVybm90ZWNpZDovL0MwMzk1RTBELTQ2QUEtNDA1Qi1BQTBCLTkxQjA4OEFFMDUxQy9hcHB5aW54aWFuZ2NvbS8xOTI1NjQ3OS9FTlJlc291cmNlL3A5NylcXG5cXG4jIyMg5oC757uTXFxuXFxuPiDlronoo4Xov4fnlJ/kuK3pgYfliLDkuI3lsJHlnZHvvIzkvYbmmK/pg73pg73lhYvmnI3kuobvvIzmnIDlkI7liqDlhaV0b21jYXTnjq/oioLmiJHop4nlvpflvojmnInlv4XopoHvvIzkvZzkuLrliJ3lrabogIXvvIzlvojlpJrmlofnq6DvvIzpg73lnKjorrLigJxrOHPpm4bnvqTigJ3vvIwg5ZCE56eN6ZuG576k6YOo572y5paH56ug77yM6Lef552A5rWB56iL5a6J6KOF5LqG5LiA5ZyI77yM5a+56ZSZ5LiO5ZCm6YO95qih5qOx5Lik5Y+v77yM6L+Y5piv6ZyA6KaB5LiA5Liq4oCc5Y+v6KeG5YyW55qE57uT5p6c4oCdXFxuXFxuXFxuXCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1kUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnQvTWRQYWdlJztcbmNvbnN0IGRvYyA9IHJlcXVpcmUoJy4vZG9jLm1kJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgPE1kUGFnZSBzcmM9e2RvY30vPlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9