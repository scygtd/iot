(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{k9q4:function(e,t,a){"use strict";var i=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("rXjv"));a("26gd");var o=i(a("1GiV")),r=i(a("cO38")),c=p(a("xwgP")),u=a("w38x"),f=i(a("CLrh")),l=i(a("Ba9O")),d=a("N8P2"),s=i(a("yq+b"));function m(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=n?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(i,o,r):i[o]=e[o]}return i.default=e,a&&a.set(e,i),i}var v=function(e){var t=e.config,a=[],i=(0,c.useState)(a),m=(0,r.default)(i,2),p=m[0],v=m[1],g=(0,c.useState)(1e3),y=(0,r.default)(g,2),h=(y[0],y[1]),b=(0,c.useState)(300),w=(0,r.default)(b,2),I=w[0],E=w[1];return(0,c.useEffect)(function(){var t=document.getElementById(e.id);t&&(E(t.offsetHeight-50),h(t.offsetWidth))},[e.ySize]),(0,c.useEffect)(function(){e.ready&&e.ready(function(){o.default.success("\u66f4\u65b0\u3002\u3002\u3002".concat(e.id))}),e.edit&&e.edit(function(){return e.config})},[]),(0,c.useEffect)(function(){var t,a=[],i=e.config.dimension;return"history"===i?a=[{dashboard:"device",object:e.productId,measurement:e.config.measurement,dimension:e.config.dimension,params:{history:e.config.history,deviceId:e.deviceId}}]:"agg"===i?a=[{dashboard:"device",object:e.productId,measurement:e.config.measurement,dimension:e.config.dimension,params:{limit:e.config.limit,deviceId:e.deviceId,time:e.config.time,agg:e.config.agg,format:e.config.format,from:e.config.from,to:e.config.to}}]:"realTime"===i&&(t=(0,d.getWebsocket)("".concat(e.id,"-").concat(e.productId,"-").concat(e.deviceId,"-").concat(e.config.measurement),"/dashboard/device/".concat(e.productId,"/").concat(e.config.measurement,"/realTime"),{deviceId:e.deviceId,history:e.config.history}).subscribe(function(t){var a=t.payload;p.push({year:(0,s.default)(a.timestamp).format("YYYY-MM-DD HH:mm:ss"),value:a.value.value}),p.length>e.config.history&&p.shift(),v((0,n.default)(p))})),"realTime"!==i&&f.default.visualization.getDashboardData(a).then(function(e){if(200===e.status){var t=e.result,a=t.map(function(e){return{year:(0,s.default)(e.data.timestamp).format("YYYY-MM-DD HH:mm:ss"),value:e.data.value.value}});v(a)}}),function(){return t&&t.unsubscribe()}},[e.deviceId]),c.default.createElement(u.Chart,{height:I,data:p,scale:{year:{alias:t.x||"\u6b21",type:"time",mask:"MM:ss",tickCount:10,nice:!1},value:{range:[0,.9],alias:t.y||"\u65f6\u95f4"},type:{type:"cat"}},forceFit:!0,placeholder:!0},c.default.createElement("h4",{className:l.default.subTitle},t.name||""),c.default.createElement(u.Axis,{name:"year",label:{autoRotate:!1},title:{position:"end",offset:15,autoRotate:!0,textStyle:{fontSize:"12",textAlign:"center",fill:"#999",fontWeight:"bold",rotate:0}}}),c.default.createElement(u.Axis,{name:"value",label:{autoRotate:!1},title:{position:"end",offset:5.5,textStyle:{fontSize:"12",textAlign:"right",fill:"#999",fontWeight:"bold",rotate:0}}}),c.default.createElement(u.Tooltip,{crosshairs:{type:"y"}}),c.default.createElement(u.Geom,{type:"line",position:"year*value",size:2,tooltip:["year*value",function(e,t){return{name:"\u6570\u503c",value:t,title:e}}]}),c.default.createElement(u.Geom,{type:"point",position:"year*value",size:4,shape:"circle",style:{stroke:"#fff",lineWidth:1},tooltip:["year*value",function(e,t){return{name:"\u6570\u503c",value:t,title:e}}]}))},g=v;t.default=g}}]);