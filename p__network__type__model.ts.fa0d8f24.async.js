(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"95d6":function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("p0pE")),u=r(a("d6i3")),s=r(a("CLrh")),c={namespace:"networkType",state:{result:[]},effects:{query:u.default.mark(function e(t,a){var r,n,c,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,c=a.put,e.next=4,n(s.default.network.list,r);case 4:if(l=e.sent,200!==l.status){e.next=8;break}return e.next=8,c({type:"save",payload:l.result});case 8:case"end":return e.stop()}},e)}),remove:u.default.mark(function e(t,a){var r,n,c,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,c=a.call,e.next=4,c(s.default.network.remove,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)}),insert:u.default.mark(function e(t,a){var r,n,c,l;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=t.callback,c=a.call,e.next=4,c(s.default.network.save,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,n.default)({},e,{result:t.payload})}}},l=c;t.default=l}}]);