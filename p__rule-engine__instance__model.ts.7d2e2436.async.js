(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{R8zL:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("p0pE")),u=n(t("d6i3")),c=n(t("CLrh")),l={namespace:"ruleInstance",state:{result:{}},effects:{query:u.default.mark(function e(a,t){var n,r,l,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,a.callback,r=t.call,l=t.put,e.next=4,r(c.default.ruleInstance.list,n);case 4:return s=e.sent,e.next=7,l({type:"save",payload:s.result});case 7:case"end":return e.stop()}},e)}),queryById:u.default.mark(function e(a,t){var n,r,l,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,l=t.call,e.next=4,l(c.default.ruleInstance.list,n);case 4:s=e.sent,r(s);case 6:case"end":return e.stop()}},e)}),insert:u.default.mark(function e(a,t){var n,r,l,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,l=t.call,e.next=4,l(c.default.ruleInstance.saveOrUpdate,n);case 4:s=e.sent,r(s);case 6:case"end":return e.stop()}},e)}),remove:u.default.mark(function e(a,t){var n,r,l,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,l=t.call,t.put,e.next=4,l(c.default.ruleInstance.remove,n);case 4:s=e.sent,r(s);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,r.default)({},e,{result:(0,r.default)({},a.payload)})}}},s=l;a.default=s}}]);