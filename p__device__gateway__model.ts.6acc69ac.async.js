(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{t7we:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(a("p0pE")),n=r(a("d6i3")),s=r(a("CLrh")),c={namespace:"deviceGateway",state:{result:{}},effects:{query:n.default.mark(function e(t,a){var r,u,c,l,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,u=t.callback,c=a.call,l=a.put,e.next=4,c(s.default.deviceGateway.list,r);case 4:return d=e.sent,u(d),e.next=8,l({type:"save",payload:d.result});case 8:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,u.default)({},e,{result:t.payload})}}},l=c;t.default=l}}]);