(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{Uy1u:function(e,t,a){"use strict";var l=a("fbTi"),u=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("yuUY");var n=u(a("2n5t"));a("nPjb");var d=u(a("nKmx"));a("4ADO");var i=u(a("wty1"));a("NWD0");var f=u(a("2L3m"));a("C1KP");var r=u(a("d6B9")),m=u(a("cO38")),o=l(a("xwgP")),s=u(a("dRV3")),c=function(e){var t,a=e.form,l=e.form.getFieldDecorator,u=e.metadata,c=JSON.parse(u),v=c.properties,p=(0,o.useState)(),E=(0,m.default)(p,2),g=(E[0],E[1]),b=null===(t=e.data)||void 0===t?void 0:t.config,w=function(){var e;return a.validateFields(function(t,a){t||(e=a)}),e};return(0,o.useEffect)(function(){var t,a;(e.save&&e.save(function(){return w()}),e.data)&&g(null===(t=e.data)||void 0===t?void 0:null===(a=t.config)||void 0===a?void 0:a.dimension)},[]),o.default.createElement(r.default,{className:s.default.configForm},o.default.createElement(f.default,{gutter:16},o.default.createElement(i.default,{lg:22,push:2,md:12,sm:24},o.default.createElement(r.default.Item,{label:"\u540d\u79f0"},l("name",{initialValue:null===b||void 0===b?void 0:b.name,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0"}]})(o.default.createElement(d.default,null)))),o.default.createElement(i.default,{lg:22,push:2,md:12,sm:24},o.default.createElement(r.default.Item,{label:"\u5c5e\u6027"},l("measurement",{initialValue:null===b||void 0===b?void 0:b.measurement,rules:[{required:!0,message:"\u9009\u62e9\u5c5e\u6027"}]})(o.default.createElement(n.default,{style:{width:"100%"}},v.map(function(e){return o.default.createElement(n.default.Option,{key:e.id,value:e.id},e.name)}))))),o.default.createElement(i.default,{xl:{span:10,offset:2},lg:{span:8},md:{span:12},sm:24},o.default.createElement(r.default.Item,{label:"\u6700\u5c0f\u503c"},l("min",{initialValue:(null===b||void 0===b?void 0:b.min)||0})(o.default.createElement(d.default,null)))),o.default.createElement(i.default,{xl:{span:10,offset:2},lg:{span:10},md:{span:24},sm:24},o.default.createElement(r.default.Item,{label:"\u6700\u5927\u503c"},l("max",{initialValue:(null===b||void 0===b?void 0:b.max)||100})(o.default.createElement(d.default,null))))))},v=r.default.create()(c);t.default=v}}]);