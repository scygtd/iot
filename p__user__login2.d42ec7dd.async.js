(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{"3EXq":function(e,t,a){e.exports={login:"antd-pro-pages-user-login2-index-login",bg1:"antd-pro-pages-user-login2-index-bg1",gyl:"antd-pro-pages-user-login2-index-gyl",gy2:"antd-pro-pages-user-login2-index-gy2",box:"antd-pro-pages-user-login2-index-box",box1:"antd-pro-pages-user-login2-index-box1",header:"antd-pro-pages-user-login2-index-header",item:"antd-pro-pages-user-login2-index-item",userLabel:"antd-pro-pages-user-login2-index-userLabel",remember:"antd-pro-pages-user-login2-index-remember",remember_box:"antd-pro-pages-user-login2-index-remember_box",text:"antd-pro-pages-user-login2-index-text",btn:"antd-pro-pages-user-login2-index-btn",avatar:"antd-pro-pages-user-login2-index-avatar",avatarx:"antd-pro-pages-user-login2-index-avatarx",code:"antd-pro-pages-user-login2-index-code",code_img:"antd-pro-pages-user-login2-index-code_img"}},S7Sw:function(e,t,a){e.exports=a.p+"static/banner.b20d07a7.jpeg"},T7p2:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("43Yg")),u=n(a("8aBX")),r=n(a("scpF")),i=n(a("O/V9")),o=a("bG4t"),d=n(a("sy1d")),c=a("/bJj"),s=n(a("Ysru"));function f(e){var t=m();return function(){var a,n=(0,i.default)(e);if(t){var l=(0,i.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,r.default)(this,a)}}function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var p=function(e){(0,u.default)(a,e);var t=f(a);function a(){var e;return(0,l.default)(this,a),e=t.apply(this,arguments),e.captchaConfig=function(){return(0,o.defer)(function(){return(0,o.from)((0,d.default)("/jetlinks/authorize/captcha/config",{method:"GET",errorHandler:function(){}})).pipe((0,c.map)(function(e){return null===e||void 0===e?void 0:e.result}))})},e.getCaptcha=function(){return(0,o.defer)(function(){return(0,o.from)((0,d.default)("/jetlinks/authorize/captcha/image?width=130&height=40",{method:"GET"})).pipe((0,c.map)(function(e){return e.result}))})},e.queryCurrent=function(){return(0,o.defer)(function(){return(0,o.from)((0,d.default)("/jetlinks/authorize/me",{method:"GET"})).pipe((0,c.map)(function(e){return e}))})},e}return a}(s.default),g=p;t.default=g},vlar:function(e,t,a){"use strict";var n=a("fbTi"),l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Gcrx");var u=l(a("Wyac"));a("0UdG");var r=l(a("8gui")),i=l(a("cO38")),o=n(a("xwgP")),d=a("8ur3"),c=l(a("3EXq")),s=l(a("T7p2")),f=a("/ENq"),m=l(a("S7Sw")),p=function(e){var t=e.dispatch,a=e.settings,n=e.location.query,l=localStorage.getItem("x-access-token"),d=new s.default(""),p=(0,o.useState)(""),g=(0,i.default)(p,2),v=g[0],b=g[1],y=(0,o.useState)(""),h=(0,i.default)(y,2),x=h[0],E=h[1],N=(0,o.useState)(36e5),k=(0,i.default)(N,2),C=k[0],S=k[1],w=(0,o.useState)(!1),_=(0,i.default)(w,2),j=_[0],G=_[1],I=(0,o.useState)(""),L=(0,i.default)(I,2),T=L[0],q=L[1],O=(0,o.useState)(""),B=(0,i.default)(O,2),R=B[0],U=B[1],z=(0,o.useState)(""),J=(0,i.default)(z,2),K=J[0],P=J[1],X=(0,o.useState)(!1),F=(0,i.default)(X,2),Y=F[0],H=F[1],M=(0,o.useState)(!1),W=(0,i.default)(M,2),Z=W[0],Q=W[1],V=function(){t({type:"login/login",payload:{username:v,password:x,expires:C,tokenType:"default",verifyKey:T,verifyCode:K,bindCode:null===n||void 0===n?void 0:n.code},callback:function(){A()}})},A=function(){Y&&d.getCaptcha().subscribe(function(e){q(e.key),U(e.base64)})};(0,o.useEffect)(function(){t&&t({type:"settings/fetchConfig",callback:function(){var e=document.getElementById("sys-title"),t=document.getElementById("title-icon");e&&a.title&&(e.textContent=a.title),t&&a.titleIcon&&(t.href=a.titleIcon),l?d.queryCurrent().subscribe(function(e){200===e.status?Q(!0):Q(!1),G(!0)}):G(!0)}}),d.captchaConfig().subscribe(function(e){e&&(H(e.enabled),e.enabled&&d.getCaptcha().subscribe(function(e){q(e.key),U(e.base64)}))})},[a.title]);var D=function(){var e=JSON.parse(localStorage.getItem("user-detail")||"{}");return Z?o.default.createElement("div",{className:c.default.login,style:{background:"url(".concat(m.default,")")}},o.default.createElement("div",{className:c.default.bg1}),o.default.createElement("div",{className:c.default.gyl},"\u4e91\u8015\u5929\u5730",o.default.createElement("br",null),"\u7269\u8054\u7f51\u5e73\u53f0"),o.default.createElement("div",{className:c.default.box},o.default.createElement("div",{className:c.default.box1},o.default.createElement("div",{style:{width:"100%",height:"30px"}}),o.default.createElement("div",{className:c.default.avatar},o.default.createElement(r.default,{size:"small",className:c.default.avatarx,src:e.avatar||"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3273016457,3482023254&fm=26&gp=0.jpg",alt:"avatar"})),o.default.createElement("input",{onClick:function(){f.router.replace("/")},className:c.default.btn,type:"button",name:"\u767b\u5f55",value:"\u767b\u5f55"}),o.default.createElement("div",{style:{width:"100%",height:"30px"}}),o.default.createElement("input",{onClick:function(){localStorage.setItem("x-access-token",""),Q(!1),"/user/login"!==window.location.pathname?f.router.replace({pathname:"/user/login"}):f.router.push("/user/login")},className:c.default.btn,type:"button",name:"\u5207\u6362\u8d26\u53f7",value:"\u5207\u6362\u8d26\u53f7"}),o.default.createElement("div",{style:{width:"100%",height:"30px"}})))):$()},$=function(){return o.default.createElement("div",{className:c.default.login,style:{background:"url(".concat(m.default,")")}},o.default.createElement("div",{className:c.default.bg1}),o.default.createElement("div",{className:c.default.gyl},"\u4e91\u8015\u5929\u5730",o.default.createElement("br",null),"\u7269\u8054\u7f51\u5e73\u53f0"),o.default.createElement("div",{className:c.default.box},o.default.createElement("div",{className:c.default.box1},o.default.createElement("div",{className:c.default.header},"\u7528\u6237\u767b\u5f55"),o.default.createElement("div",{className:c.default.item},o.default.createElement("div",{className:c.default.userLabel},"\u7528\u6237\u540d"),o.default.createElement("input",{style:{borderStyle:"none none solid none"},onChange:function(e){return b(e.target.value)},value:v,type:"text"})),o.default.createElement("div",{className:c.default.item,onKeyUp:function(e){13!==e.keyCode||Y||V()}},o.default.createElement("div",{className:c.default.userLabel},"\u5bc6",o.default.createElement("span",{style:{marginLeft:"1em"}}),"\u7801"),o.default.createElement("input",{style:{borderStyle:"none none solid none"},onChange:function(e){return E(e.target.value)},value:x,type:"password"})),Y?o.default.createElement("div",{className:c.default.item},o.default.createElement("div",{className:c.default.userLabel},"\u9a8c\u8bc1\u7801"),o.default.createElement("input",{onKeyUp:function(e){13===e.keyCode&&V()},style:{borderStyle:"none none solid none"},onChange:function(e){return P(e.target.value)},value:K,type:"text"}),o.default.createElement("div",{className:c.default.code,onClick:function(){A()}},o.default.createElement("img",{src:R,className:c.default.code_img}))):o.default.createElement("div",null),o.default.createElement("div",{className:c.default.remember},o.default.createElement("div",{className:c.default.remember_box},o.default.createElement("input",{type:"checkbox",checked:-1===C,onChange:function(){S(-1===C?36e5:-1)}}),o.default.createElement("div",{className:c.default.text},"\u8bb0\u4f4f\u6211"))),o.default.createElement("input",{onClick:function(){V()},className:c.default.btn,type:"button",name:"\u767b\u5f55",value:"\u767b\u5f55"}))))};return j?D():o.default.createElement(u.default,{spinning:j})},g=(0,d.connect)(function(e){var t=e.login,a=e.loading,n=e.settings;return{userLogin:t,submitting:a.effects["login/login"],settings:n}})(p);t.default=g}}]);