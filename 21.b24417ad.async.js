(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{k9q4:function(e,t,a){"use strict";var i=a("tAuX"),o=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("gWZ8"));a("miYZ");var c=o(a("tsqr")),r=o(a("qIgq")),u=i(a("q1tI")),d=a("yP6+"),l=o(a("CLrh")),s=o(a("Ba9O")),f=a("N8P2"),m=o(a("wd/R")),g=function(e){var t=e.config,a=[],i=(0,u.useState)(a),o=(0,r.default)(i,2),g=o[0],v=o[1],p=(0,u.useState)(1e3),y=(0,r.default)(p,2),h=(y[0],y[1]),b=(0,u.useState)(300),I=(0,r.default)(b,2),E=I[0],Y=I[1];return(0,u.useEffect)(function(){var t=document.getElementById(e.id);t&&(Y(t.offsetHeight-50),h(t.offsetWidth))},[e.ySize]),(0,u.useEffect)(function(){e.ready&&e.ready(function(){c.default.success("\u66f4\u65b0\u3002\u3002\u3002".concat(e.id))}),e.edit&&e.edit(function(){return e.config})},[]),(0,u.useEffect)(function(){var t,a=[],i=e.config.dimension;return"history"===i?a=[{dashboard:"device",object:e.productId,measurement:e.config.measurement,dimension:e.config.dimension,params:{history:e.config.history,deviceId:e.deviceId}}]:"agg"===i?a=[{dashboard:"device",object:e.productId,measurement:e.config.measurement,dimension:e.config.dimension,params:{limit:e.config.limit,deviceId:e.deviceId,time:e.config.time,agg:e.config.agg,format:e.config.format,from:e.config.from,to:e.config.to}}]:"realTime"===i&&(t=(0,f.getWebsocket)("".concat(e.id,"-").concat(e.productId,"-").concat(e.deviceId,"-").concat(e.config.measurement),"/dashboard/device/".concat(e.productId,"/").concat(e.config.measurement,"/realTime"),{deviceId:e.deviceId,history:e.config.history}).subscribe(function(t){var a=t.payload;g.push({year:(0,m.default)(a.timestamp).format("YYYY-MM-DD HH:mm:ss"),value:a.value.value}),g.length>e.config.history&&g.shift(),v((0,n.default)(g))})),"realTime"!==i&&l.default.visualization.getDashboardData(a).then(function(e){if(200===e.status){var t=e.result,a=t.map(function(e){return{year:(0,m.default)(e.data.timestamp).format("YYYY-MM-DD HH:mm:ss"),value:e.data.value.value}});v(a)}}),function(){return t&&t.unsubscribe()}},[e.deviceId]),u.default.createElement(d.Chart,{height:E,data:g,scale:{year:{alias:t.x||"\u6b21",type:"time",mask:"MM:ss",tickCount:10,nice:!1},value:{range:[0,.9],alias:t.y||"\u65f6\u95f4"},type:{type:"cat"}},forceFit:!0,placeholder:!0},u.default.createElement("h4",{className:s.default.subTitle},t.name||""),u.default.createElement(d.Axis,{name:"year",label:{autoRotate:!1},title:{position:"end",offset:15,autoRotate:!0,textStyle:{fontSize:"12",textAlign:"center",fill:"#999",fontWeight:"bold",rotate:0}}}),u.default.createElement(d.Axis,{name:"value",label:{autoRotate:!1},title:{position:"end",offset:5.5,textStyle:{fontSize:"12",textAlign:"right",fill:"#999",fontWeight:"bold",rotate:0}}}),u.default.createElement(d.Tooltip,{crosshairs:{type:"y"}}),u.default.createElement(d.Geom,{type:"line",position:"year*value",size:2,tooltip:["year*value",function(e,t){return{name:"\u6570\u503c",value:t,title:e}}]}),u.default.createElement(d.Geom,{type:"point",position:"year*value",size:4,shape:"circle",style:{stroke:"#fff",lineWidth:1},tooltip:["year*value",function(e,t){return{name:"\u6570\u503c",value:t,title:e}}]}))},v=g;t.default=v}}]);