(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{Uy1u:function(e,t,a){"use strict";var l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("yuUY");var n=l(a("2n5t"));a("nPjb");var u=l(a("nKmx"));a("4ADO");var r=l(a("wty1"));a("NWD0");var d=l(a("2L3m"));a("C1KP");var f=l(a("d6B9")),i=l(a("cO38")),o=s(a("xwgP")),m=l(a("dRV3"));function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var r=n?Object.getOwnPropertyDescriptor(e,u):null;r&&(r.get||r.set)?Object.defineProperty(l,u,r):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}var v=function(e){var t,a=e.form,l=e.form.getFieldDecorator,c=e.metadata,s=JSON.parse(c),v=s.properties,p=(0,o.useState)(),g=(0,i.default)(p,2),E=(g[0],g[1]),y=null===(t=e.data)||void 0===t?void 0:t.config,b=function(){var e;return a.validateFields(function(t,a){t||(e=a)}),e};return(0,o.useEffect)(function(){var t,a;(e.save&&e.save(function(){return b()}),e.data)&&E(null===(t=e.data)||void 0===t?void 0:null===(a=t.config)||void 0===a?void 0:a.dimension)},[]),o.default.createElement(f.default,{className:m.default.configForm},o.default.createElement(d.default,{gutter:16},o.default.createElement(r.default,{lg:22,push:2,md:12,sm:24},o.default.createElement(f.default.Item,{label:"\u540d\u79f0"},l("name",{initialValue:null===y||void 0===y?void 0:y.name,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0"}]})(o.default.createElement(u.default,null)))),o.default.createElement(r.default,{lg:22,push:2,md:12,sm:24},o.default.createElement(f.default.Item,{label:"\u5c5e\u6027"},l("measurement",{initialValue:null===y||void 0===y?void 0:y.measurement,rules:[{required:!0,message:"\u9009\u62e9\u5c5e\u6027"}]})(o.default.createElement(n.default,{style:{width:"100%"}},v.map(function(e){return o.default.createElement(n.default.Option,{key:e.id,value:e.id},e.name)}))))),o.default.createElement(r.default,{xl:{span:10,offset:2},lg:{span:8},md:{span:12},sm:24},o.default.createElement(f.default.Item,{label:"\u6700\u5c0f\u503c"},l("min",{initialValue:(null===y||void 0===y?void 0:y.min)||0})(o.default.createElement(u.default,null)))),o.default.createElement(r.default,{xl:{span:10,offset:2},lg:{span:10},md:{span:24},sm:24},o.default.createElement(f.default.Item,{label:"\u6700\u5927\u503c"},l("max",{initialValue:(null===y||void 0===y?void 0:y.max)||100})(o.default.createElement(u.default,null))))))},p=f.default.create()(v);t.default=p}}]);