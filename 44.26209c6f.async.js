(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{dxfe:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("NWD0");var u=n(a("2L3m"));a("nPjb");var r=n(a("nKmx"));a("yuUY");var l=n(a("2n5t"));a("C1KP");var f=n(a("d6B9"));a("4ADO");var d=n(a("wty1")),c=n(a("mK77")),i=n(a("cO38")),o=p(a("xwgP")),s=n(a("dRV3"));function m(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=u?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}var v=function(e){var t=e.form,a=e.form.getFieldDecorator,n=e.metadata,m=(0,o.useState)(void 0),p=(0,i.default)(m,2),v=p[0],E=p[1],g=(0,o.useState)(void 0),y=(0,i.default)(g,2),h=y[0],O=y[1],w=(0,o.useState)(void 0),b=(0,i.default)(w,2),P=(b[0],b[1]),k=(0,o.useRef)({}),j=function(){var e;return t.validateFields(function(t,a){t||(e=a)}),(0,c.default)({},e,{runParam:k.current})};(0,o.useEffect)(function(){e.save&&e.save(function(){return j()}),e.data},[]);var C=function(){switch(v){case"property":return o.default.createElement(d.default,{lg:22,push:2,md:12,sm:24},o.default.createElement(f.default.Item,{label:"\u5c5e\u6027"},a("property",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6570\u636e\u7c7b\u578b"}]})(o.default.createElement(l.default,{style:{width:"100%"},onChange:function(e){var t=JSON.parse(n).properties.find(function(t){return t.id===e});O(t)}},JSON.parse(n).properties.map(function(e){return o.default.createElement(l.default.Option,{key:e.id,value:e.id},"".concat(e.name,"(").concat(e.id,")"))})))));case"function":return o.default.createElement(d.default,{lg:22,push:2,md:12,sm:24},o.default.createElement(f.default.Item,{label:"\u529f\u80fd"},a("function",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6570\u636e\u7c7b\u578b"}]})(o.default.createElement(l.default,{style:{width:"100%"},onChange:function(e){var t=JSON.parse(n).functions.find(function(t){return t.id===e});O(t)}},JSON.parse(n).functions.map(function(e){return o.default.createElement(l.default.Option,{key:e.id,value:e.id},"".concat(e.name,"(").concat(e.id,")"))})))));default:return null}},S=(0,o.useState)(""),x=(0,i.default)(S,2),J=x[0],N=x[1],D=function(e,t){var a=t.type;switch(a){case"int":case"string":return o.default.createElement(r.default,{value:J,onChange:function(t){k.current[e]=t.target.value,N(t.target.value)}});case"enum":return o.default.createElement(l.default,{style:{width:"100%"},onChange:function(t){var a=h.inputs.find(function(e){return e.id===t});P(a),k.current[e]=t}},(t.elements||[]).map(function(e){return o.default.createElement(l.default.Option,{key:e.value,value:e.value},"".concat(e.text,"(").concat(e.value,")"))}));case"boolean":return o.default.createElement(l.default,{style:{width:"100%"},onChange:function(t){k.current[e]=t}},o.default.createElement(l.default.Option,{value:t.trueText},t.trueValue),o.default.createElement(l.default.Option,{value:t.falseText},t.falseValue));default:return null}},M=function(){var e=h.inputs;return(e||[]).map(function(e){var t=e.valueType;return o.default.createElement(o.default.Fragment,null,o.default.createElement(d.default,{lg:11,push:1,md:6,sm:12},o.default.createElement(l.default,{disabled:!0,value:e.id,style:{width:"100%"},onChange:function(t){var a=h.inputs.find(function(e){return e.id===t});P(a),k.current[e.id]=t}},o.default.createElement(l.default.Option,{key:e.id,value:e.id},"".concat(e.name,"(").concat(e.id,")")))),o.default.createElement(d.default,{lg:11,push:1,md:6,sm:12},D(e.id,t)))})};return o.default.createElement(f.default,{className:s.default.configForm},o.default.createElement(u.default,{gutter:16},o.default.createElement(d.default,{lg:22,push:2,md:12,sm:24},o.default.createElement(f.default.Item,{label:"\u540d\u79f0"},a("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0"}]})(o.default.createElement(r.default,null)))),o.default.createElement(d.default,{lg:22,push:2,md:12,sm:24},o.default.createElement(f.default.Item,{label:"\u64cd\u4f5c\u7c7b\u578b"},a("sourceType",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6570\u636e\u7c7b\u578b"}]})(o.default.createElement(l.default,{style:{width:"100%"},onChange:function(e){return E(e)}},o.default.createElement(l.default.Option,{value:"property"},"\u5c5e\u6027"),o.default.createElement(l.default.Option,{value:"function"},"\u529f\u80fd"))))),v&&C(),h&&M()))},E=f.default.create()(v);t.default=E}}]);