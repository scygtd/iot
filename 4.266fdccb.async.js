(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{m0HB:function(e,t,n){"use strict";var u=n("fbTi"),c=n("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("SMEU");var f=c(n("xc0u"));n("26gd");var i=c(n("1GiV")),a=c(n("cO38")),o=u(n("xwgP")),d=c(n("GviW")),r=function(e){var t=(0,o.useState)(100),n=(0,a.default)(t,2),u=(n[0],n[1]),c=(0,o.useState)(80),r=(0,a.default)(c,2),s=(r[0],r[1]);(0,o.useEffect)(function(){var t=document.getElementById(e.id);t&&(s(t.offsetHeight-50),u(t.offsetWidth-50))},[e.ySize]),(0,o.useEffect)(function(){e.ready&&e.ready(function(){i.default.success("\u66f4\u65b0\u3002\u3002\u3002".concat(e.id))}),e.edit&&e.edit(function(){return e.config})},[]);var l=e.deviceId,v=e.config,g=new d.default,p=function(){"function"===v.sourceType&&g.exec(l,v.function,v.runParam).subscribe(function(){i.default.success("\u64cd\u4f5c\u6210\u529f")})};return o.default.createElement(f.default,{onClick:function(){p()},type:e.config.type||"danger"},e.config.name)},s=r;t.default=s}}]);