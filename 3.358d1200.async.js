(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{ViwI:function(e,t,r){"use strict";var a=r("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("26gd");var u=a(r("1GiV")),n=a(r("cO38")),o=c(r("xwgP")),i=a(r("GviW")),l=a(r("eb2t"));function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var o=u?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}var d=function(e){var t=e.config,r=e.deviceId,a=(0,o.useState)(1e3),f=(0,n.default)(a,2),c=f[0],d=f[1],s=(0,o.useState)(null),p=(0,n.default)(s,2),v=p[0],y=p[1],w=new i.default,g=(0,o.useState)(300),b=(0,n.default)(g,2),h=b[0],O=b[1];return(0,o.useEffect)(function(){var t=document.getElementById(e.id);t&&(O(t.offsetHeight-50),d(t.offsetWidth-50))},[e.ySize]),(0,o.useEffect)(function(){e.ready&&e.ready(function(){u.default.success("\u66f4\u65b0\u3002\u3002\u3002".concat(e.id))}),e.edit&&e.edit(function(){return e.config}),"input"===t.urlType?y(t.url):"switch"===t.urlType&&w.propertySource(r,t.property).subscribe(function(e){if(null===e||void 0===e?void 0:e.value){var r="";"object"===typeof e.value?r=e.value[t.target]:"string"===typeof e.value&&(r=JSON.parse(e.value)[t.target]),y(r)}else u.default.error("\u4e0d\u5b58\u5728\u89c6\u9891\u6e90\u6570\u636e!")})},[]),o.default.createElement("div",null,v&&o.default.createElement(l.default,{url:v||"",width:c,height:h}))},s=d;t.default=s},eb2t:function(e,t,r){"use strict";var a=r("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(r("xwgP")),n=function(e){var t=e.width,a=e.height,n=e.url;return u.default.createElement("embed",{src:r("xBzr"),width:t,height:a,quality:"high",bgcolor:"#000000",name:"StrobeMediaPlayback",allowfullscreen:"true",pluginspage:"http://www.adobe.com/go/getflashplayer",flashvars:"&&src=".concat(n,"&&autoHideControlBar=true&&streamType=live&&autoPlay=true"),type:"application/x-shockwave-flash"})},o=n;t.default=o},xBzr:function(e,t,r){e.exports=r.p+"static/StrobeMediaPlayback.232d4647.swf"}}]);