(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"3EXq":function(e,t,r){e.exports={login:"antd-pro-pages-user-login2-index-login",bg1:"antd-pro-pages-user-login2-index-bg1",gyl:"antd-pro-pages-user-login2-index-gyl",gy2:"antd-pro-pages-user-login2-index-gy2",box:"antd-pro-pages-user-login2-index-box",box1:"antd-pro-pages-user-login2-index-box1",header:"antd-pro-pages-user-login2-index-header",item:"antd-pro-pages-user-login2-index-item",userLabel:"antd-pro-pages-user-login2-index-userLabel",remember:"antd-pro-pages-user-login2-index-remember",remember_box:"antd-pro-pages-user-login2-index-remember_box",text:"antd-pro-pages-user-login2-index-text",btn:"antd-pro-pages-user-login2-index-btn",avatar:"antd-pro-pages-user-login2-index-avatar",avatarx:"antd-pro-pages-user-login2-index-avatarx",code:"antd-pro-pages-user-login2-index-code",code_img:"antd-pro-pages-user-login2-index-code_img"}},R1gS:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unique=t.union=t.ua=t.trim=t.sum=t.sort=t.shuffle=t.scrollToTop=t.removeHtmltag=t.removeClass=t.remove=t.random=t.numberToChinese=t.min=t.max=t.isUndefined=t.isURL=t.isSymbol=t.isString=t.isSpider=t.isSet=t.isRegExp=t.isQQBrowser=t.isPromise=t.isPhone=t.isPC=t.isObjectEqual=t.isObj=t.isNumber=t.isNull=t.isMobile=t.isIos=t.isFunction=t.isError=t.isEmail=t.isDeviceMobile=t.isDate=t.isCardID=t.isBoolean=t.isArray=t.intersect=t.insertStr=t.injectScript=t.hasClass=t.getScrollPosition=t.getQueryString=t.formArray=t.elementIsVisibleInViewport=t.download=t.debouncer=t.copyTextToClipboard=t.contains=t.colorToRGB=t.checkStr=t.checkPwd=t.changeToChinese=t.changeCase=t.average=t.appendQuery=t.addClass=void 0;var n="undefined"===typeof arguments?void 0:arguments,a=void 0,o=function(e){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e)};t.isEmail=o;var i=function(e){return/^1[0-9]{10}$/.test(e)};t.isMobile=i;var s=function(e){return/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(e)};t.isPhone=s;var u=function(e){return/^http[s]?:\/\/.*/.test(e)};t.isURL=u;var c=function(e){return"String"===Object.prototype.toString.call(e).slice(8,-1)};t.isString=c;var l=function(e){return"Number"===Object.prototype.toString.call(e).slice(8,-1)};t.isNumber=l;var d=function(e){return"Boolean"===Object.prototype.toString.call(e).slice(8,-1)};t.isBoolean=d;var f=function(e){return"Function"===Object.prototype.toString.call(e).slice(8,-1)};t.isFunction=f;var p=function(e){return"Null"===Object.prototype.toString.call(e).slice(8,-1)};t.isNull=p;var g=function(e){return"Undefined"===Object.prototype.toString.call(e).slice(8,-1)};t.isUndefined=g;var v=function(e){return"Object"===Object.prototype.toString.call(e).slice(8,-1)};t.isObj=v;var m=function(e){return"Array"===Object.prototype.toString.call(e).slice(8,-1)};t.isArray=m;var b=function(e){return"Date"===Object.prototype.toString.call(e).slice(8,-1)};t.isDate=b;var h=function(e){return"RegExp"===Object.prototype.toString.call(e).slice(8,-1)};t.isRegExp=h;var y=function(e){return"Error"===Object.prototype.toString.call(e).slice(8,-1)};t.isError=y;var w=function(e){return"Symbol"===Object.prototype.toString.call(e).slice(8,-1)};t.isSymbol=w;var x=function(e){return"Promise"===Object.prototype.toString.call(e).slice(8,-1)};t.isPromise=x;var E=function(e){return"Set"===Object.prototype.toString.call(e).slice(8,-1)};t.isSet=E;var k=navigator.userAgent.toLowerCase();t.ua=k;var S=function(){return/android|webos|iphone|ipod|balckberry/i.test(k)};t.isDeviceMobile=S;var O=function(){return!!k.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)};t.isQQBrowser=O;var C=function(){return/adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(k)};t.isSpider=C;var N=function(){var e=navigator.userAgent;return!(e.indexOf("Android")>-1||e.indexOf("Linux")>-1)&&(e.indexOf("iPhone")>-1||!(e.indexOf("iPad")>-1)&&(e.indexOf("Windows Phone"),!1))};t.isIos=N;var j=function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],r=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){r=!1;break}return r};t.isPC=j;var A=function(e){return e.replace(/<[^>]+>/g,"")};t.removeHtmltag=A;var P=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),r=window.location.search.split("?")[1]||"",n=r.match(t)||[];return n[2]};t.getQueryString=P;var T=function(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)};t.injectScript=T;var _=function(e){var t=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,r=navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(t||r){var n=document.createElement("a");if(n.href=e,void 0!==n.download){var a=e.substring(e.lastIndexOf("/")+1,e.length);n.download=a}if(document.createEvent){var o=document.createEvent("MouseEvents");return o.initEvent("click",!0,!0),n.dispatchEvent(o),!0}}return-1===e.indexOf("?")&&(e+="?download"),window.open(e,"_self"),!0};t.download=_;var L=function(e,t){var r=new RegExp("(^|\\s)"+t+"(\\s|$)");return r.test(e.className)};t.hasClass=L;var M=function(e,t){if(!L(e,t)){var r=e.className.split(" ");r.push(t),e.className=r.join(" ")}};t.addClass=M;var R=function(e,t){if(L(e,t)){var r=new RegExp("(^|\\s)"+t+"(\\s|$)","g");e.className=e.className.replace(r," ")}};t.removeClass=R;var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return{x:void 0!==e.pageXOffset?e.pageXOffset:e.scrollLeft,y:void 0!==e.pageYOffset?e.pageYOffset:e.scrollTop}};t.getScrollPosition=q;var I=function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))};t.scrollToTop=I;var B=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.getBoundingClientRect(),n=r.top,a=r.left,o=r.bottom,i=r.right,s=window,u=s.innerHeight,c=s.innerWidth;return t?(n>0&&n<u||o>0&&o<u)&&(a>0&&a<c||i>0&&i<c):n>=0&&a>=0&&o<=u&&i<=c};t.elementIsVisibleInViewport=B;var U=function(e){var t,r=[];while(e.length>0)t=Math.floor(Math.random()*e.length),r.push(e[t]),e.splice(t,1);return r};t.shuffle=U;var z=function(e){var t=document.createElement("textarea");t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(e){console.log("Oops, unable to copy")}document.body.removeChild(t)};t.copyTextToClipboard=z;var Q=function(e,t){switch(t){case"phone":return/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(e);case"tel":return/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(e);case"card":return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e);case"pwd":return/^[a-zA-Z]\w{5,17}$/.test(e);case"postal":return/[1-9]\d{5}(?!\d)/.test(e);case"QQ":return/^[1-9][0-9]{4,9}$/.test(e);case"email":return/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(e);case"money":return/^\d*(?:\.\d{0,2})?$/.test(e);case"URL":return/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e);case"IP":return/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(e);case"date":return/^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(e)||/^(\d{4})\-(\d{2})\-(\d{2})$/.test(e);case"number":return/^[0-9]$/.test(e);case"english":return/^[a-zA-Z]+$/.test(e);case"chinese":return/^[\\u4E00-\\u9FA5]+$/.test(e);case"lower":return/^[a-z]+$/.test(e);case"upper":return/^[A-Z]+$/.test(e);case"HTML":return/<("[^"]*"|'[^']*'|[^'">])*>/.test(e);default:return!0}};t.checkStr=Q;var D=function(e){if(!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(e))return console.log("\u4f60\u8f93\u5165\u7684\u8eab\u4efd\u8bc1\u957f\u5ea6\u6216\u683c\u5f0f\u9519\u8bef"),!1;var t={11:"\u5317\u4eac",12:"\u5929\u6d25",13:"\u6cb3\u5317",14:"\u5c71\u897f",15:"\u5185\u8499\u53e4",21:"\u8fbd\u5b81",22:"\u5409\u6797",23:"\u9ed1\u9f99\u6c5f",31:"\u4e0a\u6d77",32:"\u6c5f\u82cf",33:"\u6d59\u6c5f",34:"\u5b89\u5fbd",35:"\u798f\u5efa",36:"\u6c5f\u897f",37:"\u5c71\u4e1c",41:"\u6cb3\u5357",42:"\u6e56\u5317",43:"\u6e56\u5357",44:"\u5e7f\u4e1c",45:"\u5e7f\u897f",46:"\u6d77\u5357",50:"\u91cd\u5e86",51:"\u56db\u5ddd",52:"\u8d35\u5dde",53:"\u4e91\u5357",54:"\u897f\u85cf",61:"\u9655\u897f",62:"\u7518\u8083",63:"\u9752\u6d77",64:"\u5b81\u590f",65:"\u65b0\u7586",71:"\u53f0\u6e7e",81:"\u9999\u6e2f",82:"\u6fb3\u95e8",91:"\u56fd\u5916"};if(!t[parseInt(e.substr(0,2))])return console.log("\u4f60\u7684\u8eab\u4efd\u8bc1\u5730\u533a\u975e\u6cd5"),!1;var r=(e.substr(6,4)+"-"+Number(e.substr(10,2))+"-"+Number(e.substr(12,2))).replace(/-/g,"/"),n=new Date(r);if(r!=n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate())return console.log("\u8eab\u4efd\u8bc1\u4e0a\u7684\u51fa\u751f\u65e5\u671f\u975e\u6cd5"),!1;for(var a=0,o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i="10X98765432",s=0;s<e.length-1;s++)a+=e[s]*o[s];var u=i[a%11];return e[e.length-1]==u||(console.log("\u4f60\u8f93\u5165\u7684\u8eab\u4efd\u8bc1\u53f7\u975e\u6cd5"),!1)};t.isCardID=D;var F=function(e,t){return 2===n.length?Math.floor(e+Math.random()*(t+1-e)):null};t.random=F;var G=function(e){for(var t=new Array("\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341"),r=new Array("","\u5341","\u767e","\u4edf","\u842c","\u5104","\u70b9",""),n=(""+e).replace(/(^0*)/g,"").split("."),a=0,o="",i=n[0].length-1;i>=0;i--){switch(a){case 0:o=r[7]+o;break;case 4:new RegExp("0{4}//d{"+(n[0].length-i-1)+"}$").test(n[0])||(o=r[4]+o);break;case 8:o=r[5]+o,r[7]=r[5],a=0;break}a%4==2&&0!=n[0].charAt(i+2)&&0==n[0].charAt(i+1)&&(o=t[0]+o),0!=n[0].charAt(i)&&(o=t[n[0].charAt(i)]+r[a%4]+o),a++}if(n.length>1){o+=r[6];for(i=0;i<n[1].length;i++)o+=t[n[1].charAt(i)]}return"\u4e00\u5341"==o&&(o="\u5341"),o.match(/^\u4e00/)&&3==o.length&&(o=o.replace("\u4e00","")),o};t.numberToChinese=G;var X=function(e){if("number"==typeof e&&(e=new String(e)),e=e.replace(/,/g,""),e=e.replace(/ /g,""),e=e.replace(/\uffe5/g,""),isNaN(e))return"";for(var t=String(e).split("."),r="",n=t[0].length-1;n>=0;n--){if(t[0].length>10)return"";var a="",o=t[0].charAt(n);switch(o){case"0":a="\u96f6"+a;break;case"1":a="\u58f9"+a;break;case"2":a="\u8d30"+a;break;case"3":a="\u53c1"+a;break;case"4":a="\u8086"+a;break;case"5":a="\u4f0d"+a;break;case"6":a="\u9646"+a;break;case"7":a="\u67d2"+a;break;case"8":a="\u634c"+a;break;case"9":a="\u7396"+a;break}switch(t[0].length-n-1){case 0:a+="\u5143";break;case 1:0!=o&&(a+="\u62fe");break;case 2:0!=o&&(a+="\u4f70");break;case 3:0!=o&&(a+="\u4edf");break;case 4:a+="\u4e07";break;case 5:0!=o&&(a+="\u62fe");break;case 6:0!=o&&(a+="\u4f70");break;case 7:0!=o&&(a+="\u4edf");break;case 8:a+="\u4ebf";break;case 9:a+="\u62fe";break}r=a+r}if(-1!=e.indexOf("."))for(t[1].length>2&&(t[1]=t[1].substr(0,2)),n=0;n<t[1].length;n++){switch(a="",o=t[1].charAt(n),o){case"0":a="\u96f6"+a;break;case"1":a="\u58f9"+a;break;case"2":a="\u8d30"+a;break;case"3":a="\u53c1"+a;break;case"4":a="\u8086"+a;break;case"5":a="\u4f0d"+a;break;case"6":a="\u9646"+a;break;case"7":a="\u67d2"+a;break;case"8":a="\u634c"+a;break;case"9":a="\u7396"+a;break}0==n&&(a+="\u89d2"),1==n&&(a+="\u5206"),r+=a}while(-1!=r.search("\u96f6\u96f6"))r=r.replace("\u96f6\u96f6","\u96f6");return r=r.replace("\u96f6\u4ebf","\u4ebf"),r=r.replace("\u4ebf\u4e07","\u4ebf"),r=r.replace("\u96f6\u4e07","\u4e07"),r=r.replace("\u96f6\u5143","\u5143"),r=r.replace("\u96f6\u89d2",""),r=r.replace("\u96f6\u5206",""),"\u5143"==r.charAt(r.length-1)&&(r+="\u6574"),r};t.changeToChinese=X;var Z=function(e,t){return-1!=e.indexOf(t)};t.contains=Z;var W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e.sort(function(r,n){switch(t){case 1:return r-n;case 2:return n-r;case 3:return Math.random()-.5;default:return e}})};t.sort=W;var H=function(e){if(Array.hasOwnProperty("from"))return Array.from(new Set(e));for(var t={},r=[],n=0;n<e.length;n++)t[e[n]]||(t[e[n]]=!0,r.push(e[n]));return r};t.unique=H;var Y=function(e,t){var r=e.concat(t);return a.unique(r)};t.union=Y;var J=function(e,t){var r=a;return e=a.unique(e),a.map(e,function(e){return r.contains(t,e)?e:null})};t.intersect=J;var K=function(e,t){var r=e.indexOf(t);return r>-1&&e.splice(r,1),e};t.remove=K;var V=function(e){var t=[];return t=Array.isArray(e)?e:Array.prototype.slice.call(e),t};t.formArray=V;var ee=function(e){return Math.max.apply(null,e)};t.max=ee;var te=function(e){return Math.min.apply(null,e)};t.min=te;var re=function(e){return e.reduce(function(e,t){return e+t})};t.sum=re;var ne=function(e){return a.sum(e)/e.length};t.average=ne;var ae=function(e,t){switch(t=t||1,t){case 1:return e.replace(/\s+/g,"");case 2:return e.replace(/(^\s*)|(\s*$)/g,"");case 3:return e.replace(/(^\s*)/g,"");case 4:return e.replace(/(\s*$)/g,"");default:return e}};t.trim=ae;var oe=function(e,t){switch(t=t||4,t){case 1:return e.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()});case 2:return e.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toLowerCase()+e.substring(1).toUpperCase()});case 3:return e.split("").map(function(e){return/[a-z]/.test(e)?e.toUpperCase():e.toLowerCase()}).join("");case 4:return e.toUpperCase();case 5:return e.toLowerCase();default:return e}};t.changeCase=oe;var ie=function(e){var t=0;return e.length<6?t:(/[0-9]/.test(e)&&t++,/[a-z]/.test(e)&&t++,/[A-Z]/.test(e)&&t++,/[\.|-|_]/.test(e)&&t++,t)};t.checkPwd=ie;var se=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;t-(window.debounceTimestamp||0)>r&&(e&&e(),window.debounceTimestamp=t)};t.debouncer=se;var ue=function(e,t,r){var n=e.slice(0,t)+r+e.slice(t);return n};t.insertStr=ue;var ce=function(e,t){var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var a=0;a<r.length;a++){var o=r[a];if(e[o]!==t[o])return!1}return!0};t.isObjectEqual=ce;var le=function(e,t){var r=/^(#?)[a-fA-F0-9]{6}$/,n="number"==typeof t;if(!r.test(e))return"";for(var a=e.replace(/#/,""),o=[],i="",s=0;s<3;s++){var u=a.substring(2*s,2*s+2),c=parseInt(u,16);o.push(c)}return i=o.join(),i="rgb"+(n?"a":"")+"("+i+(n?","+t:"")+")",i};t.colorToRGB=le;var de=function(e,t,r){var n=t;return"string"==typeof n&&(n={},n[t]=r),n=$.param(n),e.includes("?")?e+="&"+n:e+="?"+n,e};t.appendQuery=de},S7Sw:function(e,t,r){e.exports=r.p+"static/banner.b20d07a7.jpeg"},T7p2:function(e,t,r){"use strict";var n=r("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("43Yg")),o=n(r("8aBX")),i=n(r("scpF")),s=n(r("O/V9")),u=r("bG4t"),c=n(r("sy1d")),l=r("/bJj"),d=n(r("Ysru"));function f(e){var t=p();return function(){var r,n=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}var g=function(e){(0,o.default)(r,e);var t=f(r);function r(){var e;return(0,a.default)(this,r),e=t.apply(this,arguments),e.captchaConfig=function(){return(0,u.defer)(function(){return(0,u.from)((0,c.default)("/jetlinks/authorize/captcha/config",{method:"GET",errorHandler:function(){}})).pipe((0,l.map)(function(e){return null===e||void 0===e?void 0:e.result}))})},e.getCaptcha=function(){return(0,u.defer)(function(){return(0,u.from)((0,c.default)("/jetlinks/authorize/captcha/image?width=130&height=40",{method:"GET"})).pipe((0,l.map)(function(e){return e.result}))})},e.queryCurrent=function(){return(0,u.defer)(function(){return(0,u.from)((0,c.default)("/jetlinks/authorize/me",{method:"GET"})).pipe((0,l.map)(function(e){return e}))})},e}return r}(d.default),v=g;t.default=v},vlar:function(e,t,r){"use strict";var n=r("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("Gcrx");var a=n(r("Wyac"));r("0UdG");var o=n(r("8gui")),i=n(r("cO38")),s=b(r("xwgP")),u=r("8ur3"),c=n(r("3EXq")),l=n(r("T7p2")),d=r("/ENq"),f=n(r("S7Sw")),p=r("R1gS"),g=n(r("CLrh")),v=r("xKgJ");function m(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var h=function(e){var t=e.dispatch,r=e.settings,n=e.location.query,u=(0,v.getAccessToken)(),m=new l.default(""),b=(0,s.useState)(""),h=(0,i.default)(b,2),y=h[0],w=h[1],x=(0,s.useState)(""),E=(0,i.default)(x,2),k=E[0],S=E[1],O=(0,s.useState)(36e5),C=(0,i.default)(O,2),N=C[0],j=C[1],A=(0,s.useState)(!1),P=(0,i.default)(A,2),T=P[0],$=P[1],_=(0,s.useState)(""),L=(0,i.default)(_,2),M=L[0],R=L[1],q=(0,s.useState)(""),I=(0,i.default)(q,2),B=I[0],U=I[1],z=(0,s.useState)(""),Q=(0,i.default)(z,2),D=Q[0],F=Q[1],G=(0,s.useState)(!1),X=(0,i.default)(G,2),Z=X[0],W=X[1],H=(0,s.useState)(!1),Y=(0,i.default)(H,2),J=Y[0],K=Y[1],V=function(){t({type:"login/login",payload:{username:y,password:k,expires:N,tokenType:"default",verifyKey:M,verifyCode:D,bindCode:null===n||void 0===n?void 0:n.code},callback:function(){ee()}})},ee=function(){Z&&m.getCaptcha().subscribe(function(e){R(e.key),U(e.base64)})};(0,s.useEffect)(function(){t&&t({type:"settings/fetchConfig",callback:function(){var e=document.getElementById("sys-title"),t=document.getElementById("title-icon");e&&r.title&&(e.textContent=r.title),t&&r.titleIcon&&(t.href=r.titleIcon),"null"!==u?m.queryCurrent().subscribe(function(e){200===e.status?K(!0):K(!1),$(!0)}):$(!0)}}),m.captchaConfig().subscribe(function(e){e&&(W(e.enabled),e.enabled&&m.getCaptcha().subscribe(function(e){R(e.key),U(e.base64)}))})},[r.title]);var te=function(){var e=JSON.parse(localStorage.getItem("user-detail")||"{}");return J?s.default.createElement("div",{className:c.default.login,style:{background:"url(".concat(f.default,")")}},s.default.createElement("div",{className:c.default.bg1}),s.default.createElement("div",{className:c.default.gyl},"\u4e91\u8015\u5929\u5730",s.default.createElement("br",null),"\u7269\u8054\u7f51\u5e73\u53f0"),s.default.createElement("div",{className:c.default.box},s.default.createElement("div",{className:c.default.box1},s.default.createElement("div",{style:{width:"100%",height:"30px"}}),s.default.createElement("div",{className:c.default.avatar},s.default.createElement(o.default,{size:"small",className:c.default.avatarx,src:e.avatar||"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3273016457,3482023254&fm=26&gp=0.jpg",alt:"avatar"})),s.default.createElement("input",{onClick:function(){var e=(0,p.getQueryString)(window.location.hash);e&&void 0!==e.client_id&&void 0!==e.response_type&&void 0!==e.redirect_uri&&void 0!==e.state?g.default.login.oauth(e).then(function(e){200===e.status&&(window.location.href=e.result)}):d.router.replace("/")},className:c.default.btn,type:"button",name:"\u767b\u5f55",value:"\u767b\u5f55"}),s.default.createElement("div",{style:{width:"100%",height:"30px"}}),s.default.createElement("input",{onClick:function(){localStorage.setItem("x-access-token",""),K(!1),"/user/login"!==window.location.pathname?d.router.replace({pathname:"/user/login"}):d.router.push("/user/login")},className:c.default.btn,type:"button",name:"\u5207\u6362\u8d26\u53f7",value:"\u5207\u6362\u8d26\u53f7"}),s.default.createElement("div",{style:{width:"100%",height:"30px"}})))):re()},re=function(){return s.default.createElement("div",{className:c.default.login,style:{background:"url(".concat(f.default,")")}},s.default.createElement("div",{className:c.default.bg1}),s.default.createElement("div",{className:c.default.gyl},"\u4e91\u8015\u5929\u5730",s.default.createElement("br",null),"\u7269\u8054\u7f51\u5e73\u53f0"),s.default.createElement("div",{className:c.default.box},s.default.createElement("div",{className:c.default.box1},s.default.createElement("div",{className:c.default.header},"\u7528\u6237\u767b\u5f55"),s.default.createElement("div",{className:c.default.item},s.default.createElement("div",{className:c.default.userLabel},"\u7528\u6237\u540d"),s.default.createElement("input",{style:{borderStyle:"none none solid none"},onChange:function(e){return w(e.target.value)},value:y,type:"text"})),s.default.createElement("div",{className:c.default.item,onKeyUp:function(e){13!==e.keyCode||Z||V()}},s.default.createElement("div",{className:c.default.userLabel},"\u5bc6",s.default.createElement("span",{style:{marginLeft:"1em"}}),"\u7801"),s.default.createElement("input",{style:{borderStyle:"none none solid none"},onChange:function(e){return S(e.target.value)},value:k,type:"password"})),Z?s.default.createElement("div",{className:c.default.item},s.default.createElement("div",{className:c.default.userLabel},"\u9a8c\u8bc1\u7801"),s.default.createElement("input",{onKeyUp:function(e){13===e.keyCode&&V()},style:{borderStyle:"none none solid none"},onChange:function(e){return F(e.target.value)},value:D,type:"text"}),s.default.createElement("div",{className:c.default.code,onClick:function(){ee()}},s.default.createElement("img",{src:B,className:c.default.code_img}))):s.default.createElement("div",null),s.default.createElement("div",{className:c.default.remember},s.default.createElement("div",{className:c.default.remember_box},s.default.createElement("input",{type:"checkbox",checked:-1===N,onChange:function(){j(-1===N?36e5:-1)}}),s.default.createElement("div",{className:c.default.text},"\u8bb0\u4f4f\u6211"))),s.default.createElement("input",{onClick:function(){V()},className:c.default.btn,type:"button",name:"\u767b\u5f55",value:"\u767b\u5f55"}))))};return T?te():s.default.createElement(a.default,{spinning:T})},y=(0,u.connect)(function(e){var t=e.login,r=e.loading,n=e.settings;return{userLogin:t,submitting:r.effects["login/login"],settings:n}})(h);t.default=y}}]);