(function(){'use strict';var m;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function fa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ha=fa(this);function v(a,b){if(b)a:{var c=ha;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ha[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ba(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ka(a){return a.raw=a}
function ma(a,b){a.raw=b;return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function na(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function oa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var pa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)oa(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||pa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function x(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function xa(){this.u=!1;this.m=null;this.i=void 0;this.h=1;this.H=this.l=0;this.K=this.j=null}
function ya(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
xa.prototype.B=function(a){this.i=a};
function za(a,b){a.j={exception:b,md:!0};a.h=a.l||a.H}
xa.prototype.return=function(a){this.j={return:a};this.h=this.H};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.A=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.H=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.md?a.h=a.l||a.H:void 0!=b.A&&a.H<b.A?(a.h=b.A,a.j=null):a.h=a.H:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Ea(a,b){ya(a.h);var c=a.h.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.m=null,za(a.h,g),Ga(a)}a.h.m=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.md)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){ya(a.h);a.h.m?b=Fa(a,a.h.m.next,b,a.h.B):(a.h.B(b),b=Ga(a));return b};
this.throw=function(b){ya(a.h);a.h.m?b=Fa(a,a.h.m["throw"],b,a.h.B):(za(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return ra});
v("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ha.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.Z),reject:g(this.m)}};
b.prototype.Z=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.X(g):this.H(g)}};
b.prototype.X=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ha(h,g):this.H(g)};
b.prototype.m=function(g){this.B(2,g)};
b.prototype.H=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.K()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=ha.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.u)return!1;var g=ha.CustomEvent,h=ha.Event,k=ha.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ha.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Yb(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(u){try{l(t(u))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Yb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Yb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),n=l.next();!n.done;n=l.next())d(n.value).Yb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(u){return function(y){t[u]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Yb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!oa(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!oa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&oa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&oa(k,g)&&oa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&oa(k,g)&&oa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&oa(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||wa});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
v("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)oa(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)oa(b,d)&&c.push([d,b[d]]);return c}});
v("globalThis",function(a){return a||ha});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ma(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(){return Date.now()}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Ya($a,Error);$a.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){C.console&&C.console.error(c.message)}xb=a}else xb=a}return xb}
;function zb(a,b){this.h=a===Ab&&b||""}
zb.prototype.toString=function(){return this.h};
function Bb(a){return new zb(Ab,a)}
var Ab={};Bb("");var Cb={};function Db(a){this.h=a}
Db.prototype.toString=function(){return this.h.toString()};function Eb(a){this.h=a}
Eb.prototype.toString=function(){return this.h+""};
function Fb(a){if(a instanceof Eb&&a.constructor===Eb)return a.h;Na(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Hb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Eb(a,Gb)}
;var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Jb(a){this.h=a}
Jb.prototype.toString=function(){return this.h.toString()};
var Kb={},Lb=new Jb("about:invalid#zClosurez",Kb);var Mb=Ma(610401301,!1),Nb=Ma(572417392,!0);function Ob(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=C.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Mb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Ob().indexOf(a)}
;function Sb(){return Mb?!!Pb&&0<Pb.brands.length:!1}
function Tb(){return Sb()?!1:F("Opera")}
function Ub(){return Sb()?!1:F("Trident")||F("MSIE")}
function Vb(){return F("Firefox")||F("FxiOS")}
function Wb(){return Sb()?Rb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Sb()?0:F("Edge"))||F("Silk")}
;function Xb(a){this.h=a}
Xb.prototype.toString=function(){return this.h.toString()};function Yb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a,b){return b.match(Zb)[a]||null}
function bc(a){return $b(ac(3,a))}
function cc(a){var b=a.match(Zb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function dc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function ec(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function hc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)fc(a[b],a[b+1],c);return c.join("&")}
function ic(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function jc(a,b){var c=2==arguments.length?hc(arguments[1],0):hc(arguments,1);return ec(a,c)}
function kc(a,b){b=ic(b);return ec(a,b)}
function lc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return ec(a,b+c)}
function nc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var oc=/#|$/,pc=/[?&]($|#)/;function qc(a,b){for(var c=a.search(oc),d=0,e,f=[];0<=(e=nc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(pc,"$1")}
;function rc(a){this.h=a}
;function sc(a,b,c){this.j=a;this.m=b;this.i=c||[];this.h=new Map}
m=sc.prototype;m.Ld=function(a){var b=B.apply(1,arguments),c=this.Ac(b);c?c.push(new rc(a)):this.yd(a,b)};
m.yd=function(a){var b=this.getKey(B.apply(1,arguments));this.h.set(b,[new rc(a)])};
m.Ac=function(){var a=this.getKey(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.ce=function(){var a=this.Ac(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.getKey=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function tc(a,b){sc.call(this,a,3,b)}
x(tc,sc);tc.prototype.l=function(a){var b=B.apply(1,arguments),c=0,d=this.ce(b);d&&(c=d.h);this.yd(c+a,b)};function uc(a,b){sc.call(this,a,2,b)}
x(uc,sc);uc.prototype.record=function(a){this.Ld(a,B.apply(1,arguments))};function vc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?wc.apply(null,d):vc(d)}}
;function H(){this.qb=this.qb;this.H=this.H}
m=H.prototype;m.qb=!1;m.aa=function(){return this.qb};
m.dispose=function(){this.qb||(this.qb=!0,this.S())};
function xc(a,b){a.addOnDisposeCallback(Wa(vc,b))}
m.addOnDisposeCallback=function(a,b){this.qb?void 0!==b?a.call(b):a():(this.H||(this.H=[]),this.H.push(void 0!==b?Va(a,b):a))};
m.S=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function yc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
yc.prototype.stopPropagation=function(){this.j=!0};
yc.prototype.preventDefault=function(){this.defaultPrevented=!0};function zc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Bc[c])c=Bc[c];else{c=String(c);if(!Bc[c]){var f=/function\s+([^\(]+)/m.exec(c);Bc[c]=f?f[1]:"[Anonymous]"}c=Bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Ac(a,b){b||(b={});b[Cc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Cc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ac(a,b));return c}
function Cc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Bc={};var Dc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ec(){return Mb?!!Pb&&!!Pb.platform:!1}
function Fc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Gc(a){Gc[" "](a);return a}
Gc[" "]=function(){};var Hc=Tb(),Ic=Ub(),Jc=F("Edge"),Kc=F("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Lc=-1!=Ob().toLowerCase().indexOf("webkit")&&!F("Edge");Lc&&F("Mobile");Ec()||F("Macintosh");Ec()||F("Windows");(Ec()?"Linux"===Pb.platform:F("Linux"))||Ec()||F("CrOS");var Mc=Ec()?"Android"===Pb.platform:F("Android");Fc();F("iPad");F("iPod");Fc()||F("iPad")||F("iPod");Ob().toLowerCase().indexOf("kaios");
function Nc(){var a=C.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Ob();if(Kc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Jc)return/Edge\/([\d\.]+)/.exec(a);if(Ic)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Lc)return/WebKit\/(\S+)/.exec(a);if(Hc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Ic){var Tc=Nc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Vc;if(C.document&&Ic){var Wc=Nc();Vc=Wc?Wc:parseInt(Uc,10)||void 0}else Vc=void 0;var Xc=Vc;function Yc(a,b){yc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(Yc,yc);var Zc={2:"touch",3:"pen",4:"mouse"};
Yc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Kc){a:{try{Gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Zc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Yc.Aa.preventDefault.call(this)};
Yc.prototype.stopPropagation=function(){Yc.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Yc.prototype.preventDefault=function(){Yc.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $c="closure_listenable_"+(1E6*Math.random()|0);var ad=0;function bd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.dc=e;this.key=++ad;this.Qb=this.Xb=!1}
function cd(a){a.Qb=!0;a.listener=null;a.proxy=null;a.src=null;a.dc=null}
;function dd(a){this.src=a;this.listeners={};this.h=0}
dd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ed(a,b,d,e);-1<g?(b=a[g],c||(b.Xb=!1)):(b=new bd(b,this.src,f,!!d,e),b.Xb=c,a.push(b));return b};
dd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ed(e,b,c,d);return-1<b?(cd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function fd(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(cd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ed(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qb&&f.listener==b&&f.capture==!!c&&f.dc==d)return e}return-1}
;var gd="closure_lm_"+(1E6*Math.random()|0),hd={},id=0;function jd(a,b,c,d,e){if(d&&d.once)kd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)jd(a,b[f],c,d,e);else c=ld(c),a&&a[$c]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):md(a,b,c,!1,d,e)}
function md(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=nd(a);h||(a[gd]=h=new dd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=od();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Dc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(pd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");id++}}
function od(){function a(c){return b.call(a.src,a.listener,c)}
var b=qd;return a}
function kd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)kd(a,b[f],c,d,e);else c=ld(c),a&&a[$c]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):md(a,b,c,!0,d,e)}
function rd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)rd(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=ld(c),a&&a[$c])?a.h.remove(String(b),c,d,e):a&&(a=nd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ed(b,c,d,e)),(c=-1<a?b[a]:null)&&sd(c))}
function sd(a){if("number"!==typeof a&&a&&!a.Qb){var b=a.src;if(b&&b[$c])fd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(pd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);id--;(c=nd(b))?(fd(c,a),0==c.h&&(c.src=null,b[gd]=null)):cd(a)}}}
function pd(a){return a in hd?hd[a]:hd[a]="on"+a}
function qd(a,b){if(a.Qb)a=!0;else{b=new Yc(b,this);var c=a.listener,d=a.dc||a.src;a.Xb&&sd(a);a=c.call(d,b)}return a}
function nd(a){a=a[gd];return a instanceof dd?a:null}
var td="__closure_events_fn_"+(1E9*Math.random()>>>0);function ld(a){if("function"===typeof a)return a;a[td]||(a[td]=function(b){return a.handleEvent(b)});
return a[td]}
;function ud(){H.call(this);this.h=new dd(this);this.Ka=this;this.fa=null}
Ya(ud,H);ud.prototype[$c]=!0;m=ud.prototype;m.addEventListener=function(a,b,c,d){jd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){rd(this,a,b,c,d)};
function vd(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Ka;c=b.type||b;"string"===typeof b?b=new yc(b,a):b instanceof yc?b.target=b.target||a:(e=b,b=new yc(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=wd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=wd(g,c,!0,b)&&e,b.j||(e=wd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=wd(g,c,!1,b)&&e}
m.S=function(){ud.Aa.S.call(this);this.removeAllListeners();this.fa=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,cd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function wd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Qb&&g.capture==c){var h=g.listener,k=g.dc||g.src;g.Xb&&fd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function xd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
xd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function yd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function zd(a,b){return a+Math.random()*(b-a)}
;function Ad(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Ad.prototype;m.clone=function(){return new Ad(this.x,this.y)};
m.equals=function(a){return a instanceof Ad&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Bd(a,b){this.width=a;this.height=b}
m=Bd.prototype;m.clone=function(){return new Bd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.Lb=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Cd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Dd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ed(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Fd;function Gd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Dd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Zc;c.Zc=null;e()}};
return function(e){d.next={Zc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Hd(a){C.setTimeout(function(){throw a;},0)}
;function Id(){this.i=this.h=null}
Id.prototype.add=function(a,b){var c=Jd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Id.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Jd=new xd(function(){return new Kd},function(a){return a.reset()});
function Kd(){this.next=this.scope=this.h=null}
Kd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Kd.prototype.reset=function(){this.next=this.scope=this.h=null};var Ld,Md=!1,Nd=new Id;function Od(a,b){Ld||Pd();Md||(Ld(),Md=!0);Nd.add(a,b)}
function Pd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Ld=function(){a.then(Qd)}}else Ld=function(){var b=Qd;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Sb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Fd||(Fd=Gd()),Fd(b)):C.setImmediate(b)}}
function Qd(){for(var a;a=Nd.remove();){try{a.h.call(a.scope)}catch(b){Hd(b)}yd(Jd,a)}Md=!1}
;function Rd(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.H=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){Sd(b,2,c)},function(c){Sd(b,3,c)})}catch(c){Sd(this,3,c)}}
function Td(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Td.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Ud=new xd(function(){return new Td},function(a){a.reset()});
function Vd(a,b,c){var d=Ud.get();d.i=a;d.h=b;d.context=c;return d}
function Wd(a){return new Rd(function(b,c){c(a)})}
Rd.prototype.then=function(a,b,c){return Xd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Rd.prototype.$goog_Thenable=!0;m=Rd.prototype;m.sc=function(a,b){return Xd(this,null,a,b)};
m.catch=Rd.prototype.sc;m.cancel=function(a){if(0==this.h){var b=new Yd(a);Od(function(){Zd(this,b)},this)}};
function Zd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Zd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):$d(c),ae(c,e,3,b)))}a.j=null}else Sd(a,3,b)}
function be(a,b){a.i||2!=a.h&&3!=a.h||ce(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Xd(a,b,c,d){var e=Vd(null,null,null);e.child=new Rd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Yd?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;be(a,e);return e.child}
m.bf=function(a){this.h=0;Sd(this,2,a)};
m.cf=function(a){this.h=0;Sd(this,3,a)};
function Sd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.bf,f=a.cf;if(d instanceof Rd){be(d,Vd(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){de(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,ce(a),3!=b||c instanceof Yd||ee(a,c))}}
function de(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ce(a){a.H||(a.H=!0,Od(a.Xd,a))}
function $d(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.Xd=function(){for(var a;a=$d(this);)ae(this,a,this.h,this.u);this.H=!1};
function ae(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,fe(b,c,d);else try{b.j?b.i.call(b.context):fe(b,c,d)}catch(e){ge.call(null,e)}yd(Ud,b)}
function fe(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ee(a,b){a.m=!0;Od(function(){a.m&&ge.call(null,b)})}
var ge=Hd;function Yd(a){$a.call(this,a)}
Ya(Yd,$a);Yd.prototype.name="cancel";function he(a,b){ud.call(this);this.j=a||1;this.i=b||C;this.l=Va(this.Ze,this);this.m=Xa()}
Ya(he,ud);m=he.prototype;m.enabled=!1;m.Ga=null;m.setInterval=function(a){this.j=a;this.Ga&&this.enabled?(this.stop(),this.start()):this.Ga&&this.stop()};
m.Ze=function(){if(this.enabled){var a=Xa()-this.m;0<a&&a<.8*this.j?this.Ga=this.i.setTimeout(this.l,this.j-a):(this.Ga&&(this.i.clearTimeout(this.Ga),this.Ga=null),vd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ga||(this.Ga=this.i.setTimeout(this.l,this.j),this.m=Xa())};
m.stop=function(){this.enabled=!1;this.Ga&&(this.i.clearTimeout(this.Ga),this.Ga=null)};
m.S=function(){he.Aa.S.call(this);this.stop();delete this.i};
function ie(a,b,c){if("function"===typeof a)c&&(a=Va(a,c));else if(a&&"function"==typeof a.handleEvent)a=Va(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function je(a){H.call(this);this.B=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.u=new Set;this.flushInterval=3E4;this.h=new he(this.flushInterval);this.h.listen("tick",this.mb,!1,this);xc(this,this.h)}
x(je,H);m=je.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ke(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.mb()}
m.mb=function(){var a=this.i.values();a=[].concat(na(a)).filter(function(b){return b.h.size});
a.length&&this.B.flush(a,this.m);le(a);this.j=0;this.h.enabled&&this.h.stop()};
m.wc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new tc(a,b))};
m.Vc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new uc(a,b))};
function me(a,b){return a.u.has(b)?void 0:a.i.get(b)}
m.Ub=function(a){this.Kd.apply(this,[a,1].concat(na(B.apply(1,arguments))))};
m.Kd=function(a,b){var c=B.apply(2,arguments),d=me(this,a);d&&d instanceof tc&&(d.l(b,c),ke(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=me(this,a);d&&d instanceof uc&&(d.record(b,c),ke(this))};
function le(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function ne(a){this.h=a;this.h.wc("/client_streamz/bg/fic",{Da:3,Ca:"ke"})}
function oe(a){this.h=a;this.h.wc("/client_streamz/bg/fiec",{Da:3,Ca:"rk"},{Da:3,Ca:"ke"},{Da:2,Ca:"ec"},{Da:3,Ca:"em"})}
function pe(a,b,c,d,e){a.h.Ub("/client_streamz/bg/fiec",b,c,d,e)}
function qe(a){this.h=a;this.h.Vc("/client_streamz/bg/fil",{Da:3,Ca:"rk"},{Da:3,Ca:"ke"})}
qe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function re(a){this.h=a;this.h.wc("/client_streamz/bg/fsc",{Da:3,Ca:"rk"},{Da:3,Ca:"ke"})}
function se(a){this.h=a;this.h.Vc("/client_streamz/bg/fsl",{Da:3,Ca:"rk"},{Da:3,Ca:"ke"})}
se.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var te={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function ue(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ve(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=we(a,h),d+=we(a,h+4),e+=we(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return te.toString(e)}
function ve(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function we(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Vb();var xe=Fc()||F("iPod"),ye=F("iPad");!F("Android")||Wb()||Vb()||Tb()||F("Silk");Wb();var ze=F("Safari")&&!(Wb()||(Sb()?0:F("Coast"))||Tb()||(Sb()?0:F("Edge"))||(Sb()?Rb("Microsoft Edge"):F("Edg/"))||(Sb()?Rb("Opera"):F("OPR"))||Vb()||F("Silk")||F("Android"))&&!(Fc()||F("iPad")||F("iPod"));var Ae={},Be=null;function Ce(a,b){Oa(a);void 0===b&&(b=0);De();b=Ae[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ee(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Fe(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Fe(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Be[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
De();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function De(){if(!Be){Be={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ae[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Be[f]&&(Be[f]=e)}}}}
;var Ge="undefined"!==typeof Uint8Array,He=!Ic&&"function"===typeof btoa;function Ie(a){if(!He)return Ce(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Je=/[-_.]/g,Ke={"-":"+",_:"/",".":"="};function Le(a){return Ke[a]||""}
function Me(a){return Ge&&null!=a&&a instanceof Uint8Array}
var Ne={};var Oe;function Pe(a){if(a!==Ne)throw Error("illegal external caller");}
function Qe(a,b){Pe(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Qe.prototype.Lb=function(){return null==this.value_};
Qe.prototype.sizeBytes=function(){Pe(Ne);var a=this.value_;if(null!=a&&!Me(a))if("string"===typeof a)if(He){Je.test(a)&&(a=a.replace(Je,Le));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ee(a);else Na(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Re(){return"function"===typeof BigInt}
var Se=!Nb,Te=!Nb;function Ue(a){return Array.prototype.slice.call(a)}
;var Ve;Ve="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,na(Object.values({Ff:1,Df:2,Cf:4,If:8,Hf:16,Gf:32,tf:64,Kf:128,Bf:256,Af:512,Ef:1024,yf:2048,Jf:4096,zf:8192})));var We=Ve?function(a,b){a[Ve]|=b}:function(a,b){void 0!==a.Ta?a.Ta|=b:Object.defineProperties(a,{Ta:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Xe(a){var b=Ye(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Ue(a)),Ze(a,b|1))}
function $e(a,b,c){return c?a|b:a&~b}
var Ye=Ve?function(a){return a[Ve]|0}:function(a){return a.Ta|0},af=Ve?function(a){return a[Ve]}:function(a){return a.Ta},Ze=Ve?function(a,b){a[Ve]=b}:function(a,b){void 0!==a.Ta?a.Ta=b:Object.defineProperties(a,{Ta:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function bf(){var a=[];We(a,1);return a}
function cf(a,b){Ze(b,(a|0)&-14591)}
function df(a,b){Ze(b,(a|34)&-14557)}
function ef(a){a=a>>14&1023;return 0===a?536870912:a}
;var ff={},gf={};function hf(a){return!(!a||"object"!==typeof a||a.Yf!==gf)}
function jf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var kf,lf=!Nb;function mf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Qe(a,Ne):Oe||(Oe=new Qe(null,Ne));else if(a.constructor!==Qe)if(Me(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Qe(new Uint8Array(a),Ne):Oe||(Oe=new Qe(null,Ne));else throw Error();return a}
function nf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Ye(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Ze(a,d|1);return!0}
var of,pf=[];Ze(pf,55);of=Object.freeze(pf);function qf(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var rf=0,sf=0;function tf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(uf(c,a)),b=c.next().value,a=c.next().value,c=b);rf=c>>>0;sf=a>>>0}
function vf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Re()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+wf(c)+wf(a));return c}
function wf(a){a=String(a);return"0000000".slice(a.length)+a}
function xf(){var a=rf,b=sf;b&2147483648?Re()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(uf(a,b)),a=b.next().value,b=b.next().value,a="-"+vf(a,b)):a=vf(a,b);return a}
function uf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function yf(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function zf(a){return a.displayName||a.name||"unknown type name"}
function Af(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var Bf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Cf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Bf.test(a)}
function Df(a){if(null!=a){if("number"!==typeof a)throw yf("int32");if(!Number.isFinite(a))throw yf("int32");a|=0}return a}
function Ef(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Ff(a){if(null!=a){var b=!!b;if(!Cf(a))throw yf("int64");a="string"===typeof a?Gf(a):b?Hf(a):If(a)}return a}
function Jf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function If(a){Cf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){tf(a);var b=rf,c=sf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Hf(a){Cf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Jf(b)?a=b:(tf(a),a=xf())}return a}
function Gf(a){Cf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Jf(a)){if(16>a.length)tf(Number(a));else if(Re())a=BigInt(a),rf=Number(a&BigInt(4294967295))>>>0,sf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);sf=rf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),sf*=1E6,rf=1E6*rf+d,4294967296<=rf&&(sf+=Math.trunc(rf/4294967296),sf>>>=0,rf>>>=0);b&&(b=w(uf(rf,sf)),
a=b.next().value,b=b.next().value,rf=a,sf=b)}a=xf()}return a}
function Kf(a){if("string"!==typeof a)throw Error();return a}
function Lf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Mf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+zf(b)+" but got "+(a&&zf(a.constructor)));}
function Nf(a,b,c){if(null!=a&&"object"===typeof a&&a.Kc===ff)return a;if(Array.isArray(a)){var d=Ye(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Ze(a,e);return new b(a)}}
;var Of;function Pf(a,b){Ye(b);Of=b;a=new a(b);Of=void 0;return a}
function Qf(a,b,c){null==a&&(a=Of);Of=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Ye(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=d;if(d=a.length){var e=d-1;if(jf(a[e])){c|=256;b=e-(+!!(c&512)-1);if(1024<=b)throw Error();d=c&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,d-(+!!(c&512)-1));if(1024<b)throw Error();d=c&-16760833|(b&1023)<<14}else d=c}}Ze(a,d);return a}
;function Rf(a,b){return Sf(b)}
function Sf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return lf||!nf(a,void 0,9999)?a:void 0;if(Me(a))return Ie(a);if(a instanceof Qe){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Ie(b)}}}return a}
;function Tf(a,b,c){a=Ue(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Uf(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Ye(a)&1?void 0:f&&Ye(a)&2?a:Vf(a,b,c,void 0!==d,e,f);else if(jf(a)){var g={},h;for(h in a)g[h]=Uf(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Vf(a,b,c,d,e,f){var g=d||c?Ye(a):0;d=d?!!(g&32):void 0;a=Ue(a);for(var h=0;h<a.length;h++)a[h]=Uf(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Wf(a){return a.Kc===ff?a.toJSON():Sf(a)}
;function Xf(a,b,c){c=void 0===c?df:c;if(null!=a){if(Ge&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Ye(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Ze(a,(d|34)&-12293),a):Vf(a,Xf,d&4?df:c,!0,!1,!0)}a.Kc===ff&&(c=a.D,d=af(c),a=d&2?a:Pf(a.constructor,Yf(c,d,!0)));return a}}
function Yf(a,b,c){var d=c||b&2?df:cf,e=!!(b&32);a=Tf(a,b,function(f){return Xf(f,e,d)});
We(a,32|(c?2:0));return a}
function Zf(a){var b=a.D,c=af(b);return c&2?Pf(a.constructor,Yf(b,c,!1)):a}
;function $f(a,b){a=a.D;return ag(a,af(a),b)}
function ag(a,b,c,d){if(-1===c)return null;if(c>=ef(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function J(a,b,c){var d=a.D,e=af(d);qf(e);bg(d,e,b,c);return a}
function bg(a,b,c,d,e){jf(d);var f=ef(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Ze(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function cg(a){return void 0!==dg(a,eg,11,!1)}
function fg(a,b,c,d){var e=a.D,f=af(e);qf(f);if(null==c)return bg(e,f,b),a;var g=Ye(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g))for(g=21,k&&(c=Ue(c),h=0,g=gg(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(c=Ue(c),h=0,g=gg(g,f,!0));g!==h&&Ze(c,g);bg(e,f,b,c);return a}
function hg(a,b,c,d){a=a.D;var e=af(a);qf(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=ag(a,f,k)&&(0!==g&&(f=bg(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=bg(a,e,c));bg(a,e,b,d)}
function dg(a,b,c,d){a=a.D;var e=af(a),f=ag(a,e,c,d);b=Nf(f,b,e);b!==f&&null!=b&&bg(a,e,c,b,d);return b}
function ig(a,b,c,d){d=void 0===d?!1:d;b=dg(a,b,c,d);if(null==b)return b;a=a.D;var e=af(a);if(!(e&2)){var f=Zf(b);f!==b&&(b=f,bg(a,e,c,b,d))}return b}
function jg(a,b,c,d){null!=d?Mf(d,b):d=void 0;return J(a,c,d)}
function kg(a,b,c,d){var e=a.D,f=af(e);qf(f);if(null==d)return bg(e,f,c),a;for(var g=Ye(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var u=d[r];Mf(u,b);k||(u=!!(Ye(u.D)&2),p&&(p=!u),t&&(t=u))}k||(g=$e(g,5,!0),g=$e(g,8,p),g=$e(g,16,t));if(n||l&&g!==h)d=Ue(d),h=0,g=gg(g,f,!0);g!==h&&Ze(d,g);bg(e,f,c,d);return a}
function gg(a,b,c){a=$e(a,2,!!(2&b));a=$e(a,32,!!(32&b)&&c);return a=$e(a,2048,!1)}
function lg(a,b){a=$f(a,b);var c;null==a?c=a:Cf(a)?"number"===typeof a?c=If(a):c=Gf(a):c=void 0;return c}
function mg(a){a=$f(a,1);var b=void 0===b?!1:b;b=null==a?a:Cf(a)?"string"===typeof a?Gf(a):b?Hf(a):If(a):void 0;return b}
function ng(a){return mf(a,!1)}
function og(a,b,c){if(null!=c){if(!Number.isFinite(c))throw yf("enum");c|=0}return J(a,b,c)}
;function pg(a,b,c){this.D=Qf(a,b,c)}
m=pg.prototype;m.toJSON=function(){if(kf)var a=qg(this,this.D,!1);else a=Vf(this.D,Wf,void 0,void 0,!1,!1),a=qg(this,a,!0);return a};
m.serialize=function(){kf=!0;try{return JSON.stringify(this.toJSON(),Rf)}finally{kf=!1}};
function rg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);We(b,32);return Pf(a,b)}
m.clone=function(){var a=this.D,b=af(a);return Pf(this.constructor,Yf(a,b,!1))};
m.Kc=ff;m.toString=function(){return qg(this,this.D,!1).toString()};
function qg(a,b,c){var d=a.constructor.Va,e=af(c?a.D:b),f=ef(e),g=!1;if(d&&lf){if(!c){b=Ue(b);var h;if(b.length&&jf(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=af(a.D);a=ef(h);h=+!!(h&512)-1;for(var k,l,n=0;n<d.length;n++)if(l=d[n],l<a){l+=h;var p=f[l];null==p?f[l]=c?of:bf():c&&p!==of&&Xe(p)}else k||(p=void 0,f.length&&jf(p=f[f.length-1])?k=p:f.push(k={})),p=k[l],null==k[l]?k[l]=c?of:bf():c&&p!==of&&Xe(p)}k=b.length;if(!k)return b;var t;
if(jf(f=b[k-1])){a:{var r=f;c={};a=!1;for(var u in r){h=r[u];if(Array.isArray(h)){n=h;if(!Te&&nf(h,d,+u)||!Se&&hf(h)&&0===h.size)h=null;h!=n&&(a=!0)}null!=h?c[u]=h:a=!0}if(a){for(var y in c){r=c;break a}r=null}}r!=f&&(t=!0);k--}for(e=+!!(e&512)-1;0<k;k--){u=k-1;f=b[u];if(!(null==f||!Te&&nf(f,d,u-e)||!Se&&hf(f)&&0===f.size))break;var z=!0}if(!t&&!z)return b;var G;g?G=b:G=Array.prototype.slice.call(b,0,k);b=G;g&&(b.length=k);r&&b.push(r);return b}
;function sg(a){this.D=Qf(a)}
x(sg,pg);var tg=[1,2,3];function ug(a){this.D=Qf(a)}
x(ug,pg);var vg=[1,2,3];function wg(a){this.D=Qf(a)}
x(wg,pg);wg.Va=[1];function xg(a){this.D=Qf(a)}
x(xg,pg);xg.Va=[3,6,4];function yg(a){this.D=Qf(a)}
x(yg,pg);yg.Va=[1];function zg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Ag(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var u=e[1],y=e[2],z=e[3],G=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var L=z^u&(y^z);var K=1518500249}else L=u^y^z,K=1859775393;else 60>r?(L=u&y|z&(u|y),K=2400959708):(L=u^y^z,K=3395469782);L=((p<<5|p>>>27)&4294967295)+L+G+K+t[r]&4294967295;G=z;z=y;y=(u<<30|u>>>2)&4294967295;u=p;p=L}e[0]=e[0]+p&4294967295;e[1]=e[1]+u&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],u=0,y=p.length;u<y;++u)r.push(p.charCodeAt(u));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var u=24;0<=u;u-=8)p[t++]=e[r]>>u&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Td:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function Bg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Cg(zg(d),a,c||null)].join(" "):null}
function Cg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),Dg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=Dg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Dg(a){var b=Ag();b.update(a);return b.Td().toLowerCase()}
;var Eg={};function Fg(a){this.h=a||{cookie:""}}
m=Fg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Lb())return!0;this.set("TESTCOOKIESENABLED","1",{hc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.hg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.hc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{hc:0,path:b,domain:c});return d};
m.Dc=function(){return Gg(this).keys};
m.Lb=function(){return!this.h.cookie};
m.clear=function(){for(var a=Gg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Gg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Hg=new Fg("undefined"==typeof document?null:document);function Ig(a){return!!Eg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Jg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Ig(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Fg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Ig(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Kg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Fg(document)).get(b));return a?Bg(a,c,d):null}
function Lg(a,b){b=void 0===b?!1:b;var c=zg(String(C.location.href)),d=[];if(Jg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Fg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Bg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ig(b)&&((b=Kg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Kg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Mg(a){this.D=Qf(a)}
x(Mg,pg);Mg.Va=[2];function Ng(a){ud.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Xa()};
this.j=this.i()}
x(Ng,ud);Ng.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Ng.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Ng.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Ng.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),vd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Og(a){this.D=Qf(a)}
x(Og,pg);function Pg(a){this.D=Qf(a)}
x(Pg,pg);function Qg(a){this.h=this.i=this.j=a}
Qg.prototype.reset=function(){this.h=this.i=this.j};
Qg.prototype.getValue=function(){return this.i};function Rg(a){this.D=Qf(a)}
x(Rg,pg);function Sg(a){this.D=Qf(a)}
x(Sg,pg);Sg.Va=[1];function eg(a){this.D=Qf(a)}
x(eg,pg);var Tg=["platform","platformVersion","architecture","model","uaFullVersion"];new Sg;function Ug(a){this.D=Qf(a)}
x(Ug,pg);function Vg(a){this.D=Qf(a)}
x(Vg,pg);function Wg(a){this.D=Qf(a,35)}
x(Wg,pg);Wg.Va=[3,20,27];function Xg(a){this.D=Qf(a,19)}
x(Xg,pg);Xg.prototype.Rb=function(a){return og(this,2,a)};
Xg.Va=[3,5];function Yg(a){this.D=Qf(a,7)}
x(Yg,pg);var Zg=function(a){return function(b){return rg(a,b)}}(Yg);
Yg.Va=[5,6];function $g(a){this.D=Qf(a)}
x($g,pg);var ah;ah=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=ig;this.defaultValue=void 0}(175237375,{Tf:0},$g);function bh(a){H.call(this);var b=this;this.componentId="";this.i=[];this.na="";this.Ba=this.fa=-1;this.ha=!1;this.B=this.experimentIds=null;this.Z=this.ea=this.u=this.l=0;this.Ka=1;this.timeoutMillis=0;this.K=!1;this.logSource=a.logSource;this.rb=a.rb||function(){};
this.j=new ch(a.logSource,a.vb);this.network=a.network;this.Cb=a.Cb||null;this.bufferSize=1E3;this.nb=Wa(zd,0,1);this.X=a.df||null;this.sessionIndex=a.sessionIndex||null;this.Jb=a.Jb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.dd;this.vb=a.vb||!1;var c=og(new Ug,1,1);dh(this.j,c);this.m=new Qg(1E4);this.h=new Ng(this.m.getValue());a=eh(this,a.Wc);jd(this.h,"tick",a,!1,this);this.T=new Ng(6E5);jd(this.T,"tick",a,!1,this);this.Jb||this.T.start();this.vb||(jd(document,"visibilitychange",
function(){"hidden"===document.visibilityState&&b.yc()}),jd(document,"pagehide",this.yc,!1,this))}
x(bh,H);function eh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=bh.prototype;m.S=function(){this.yc();this.h.stop();this.T.stop();H.prototype.S.call(this)};
function fh(a){a.X||(a.X=.01>a.nb()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.X}
function gh(a,b){a.m=new Qg(1>b?1:b);a.h.setInterval(a.m.getValue())}
m.log=function(a){a=a.clone();var b=this.Ka++;a=J(a,21,Ff(b));this.componentId&&J(a,26,Lf(this.componentId));mg(a)||(b=Date.now(),b=Number.isFinite(b)?b.toString():"0",J(a,1,Ff(b)));null==lg(a,15)&&J(a,15,Ff(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),jg(a,Mg,16,b));b=this.i.length-this.bufferSize+1;0<b&&(this.i.splice(0,b),this.l+=b);this.i.push(a);this.Jb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.i.length)a&&a();else if(this.K)hh(this.j,3),ih(this);else{var d=Date.now();if(this.Ba>d&&this.fa<d)b&&b("throttled");else{hh(this.j,1);var e=jh(this.j,this.i,this.l,this.u,this.Cb,this.ea,this.Z);d={};var f=this.rb();f&&(d.Authorization=f);var g=fh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=lc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=lc(g,"pageId",this.pageId));if(f&&this.na===f)b&&b("stale-auth-token");
else{this.i=[];this.h.enabled&&this.h.stop();this.l=0;var h=e.serialize(),k;this.B&&this.B.isSupported(h.length)&&(k=this.B.compress(h));var l={url:g,body:h,Pd:1,Nc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.m.reset();c.h.setInterval(c.m.getValue());if(r){var u=null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));u=Zg(y)}catch(G){}if(u){r=Number;y="-1";y=void 0===y?"0":y;var z=mg(u);r=r(null!=z?z:y);0<r&&(c.fa=Date.now(),
c.Ba=c.fa+r);u=ah.ctor?ah.i(u,ah.ctor,ah.h,!0):ah.i(u,ah.h,null,!0);if(r=null===u?void 0:u)u=-1,u=void 0===u?0:u,r=Ef($f(r,1)),u=null!=r?r:u,-1!==u&&(c.ha||gh(c,u))}}a&&a();c.u=0},p=function(r,u){var y=e.D;
var z=af(y),G=z,L=2&G?1:2,K=1===L;L=2===L;var R=G;var O=R&2;G=ag(y,R,3);Array.isArray(G)||(G=of);var la=!!(R&32);R=Ye(G);0===R&&la&&!O?(R|=33,Ze(G,R)):R&1||(R|=1,Ze(G,R));O&&(O=!1,R&2||(We(G,34),O=!!(4&R)),O&&Object.freeze(G));O=G;G=af(y);var I=Ye(O),da=!!(2&I);R=!!(4&I);la=!!(32&I);var ja=da&&R||!!(2048&I);if(!R){var U=O,ea=G,ab=!!(2&I);ab&&(ea=$e(ea,2,!0));for(var Oc=!ab,Pc=!0,mc=0,aa=0;mc<U.length;mc++){var Ki=Nf(U[mc],Wg,ea);if(Ki instanceof Wg){if(!ab){var gn=!!(Ye(Ki.D)&2);Oc&&(Oc=!gn);Pc&&
(Pc=gn)}U[aa++]=Ki}}aa<mc&&(U.length=aa);I=$e(I,4,!0);I=$e(I,16,Pc);I=$e(I,8,Oc);Ze(U,I);da&&(Object.freeze(O),ja=!0)}da=I;U=!!(8&I)||K&&!O.length;if(!(2&z||U)){ja&&(O=Ue(O),ja=!1,da=0,I=gg(I,G,!1),G=bg(y,G,3,O));z=O;U=I;for(I=0;I<z.length;I++)ea=z[I],ab=Zf(ea),ea!==ab&&(z[I]=ab);U=$e(U,8,!0);I=U=$e(U,16,!z.length)}ja||(K?I=$e(I,!O.length||16&I&&(!R||la)?2:2048,!0):I=$e(I,32,!1),I!==da&&Ze(O,I),K&&(Object.freeze(O),ja=!0));L&&ja&&(O=Ue(O),I=gg(I,G,!1),Ze(O,I),bg(y,G,3,O));y=O;K=lg(e,14);L=c.m;L.h=
Math.min(3E5,2*L.h);L.i=Math.min(3E5,L.h+Math.round(.2*(Math.random()-.5)*L.h));c.h.setInterval(c.m.getValue());401===r&&f&&(c.na=f);K&&(c.l+=K);void 0===u&&(u=c.isRetryable(r));u&&(c.i=y.concat(c.i),c.Jb||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.u},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Nc["Content-Encoding"]="gzip";l.Nc["Content-Type"]="application/binary";l.body=r;l.Pd=2;t()},function(){t()}):t()}}}};
m.yc=function(){kh(this.j,!0);this.flush();kh(this.j,!1)};
function ih(a){lh(a,function(b,c){b=lc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.K&&!d&&(a.K=!1);return d})}
function lh(a,b){if(0!==a.i.length){var c=qc(fh(a),"format");c=jc(c,"auth",a.rb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.i.length;++d){var e=a.i.slice(0,32),f=jh(a.j,e,a.l,a.u,a.Cb,a.ea,a.Z);if(!b(c,f)){++a.u;break}a.l=0;a.u=0;a.ea=0;a.Z=0;a.i=a.i.slice(e.length)}a.h.enabled&&a.h.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function ch(a,b){this.vb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Xg;Number.isInteger(a)&&this.h.Rb(a);b||(this.locale=document.documentElement.getAttribute("lang"));dh(this,new Ug)}
ch.prototype.Rb=function(a){this.h.Rb(a);return this};
function dh(a,b){jg(a.h,Ug,1,b);var c=$f(b,1);(null==c?c:Number.isFinite(c)&&c|0)||og(b,1,1);a.vb||(b=mh(a),c=$f(b,5),(null==c||"string"===typeof c)&&c||J(b,5,Lf(a.locale)));a.uach&&(b=mh(a),ig(b,Sg,9)||jg(b,Sg,9,a.uach))}
function hh(a,b){cg(nh(a))&&(a=oh(a),og(a,1,b))}
function kh(a,b){cg(nh(a))&&(a=oh(a),J(a,2,Af(b)))}
function nh(a){return ig(a.h,Ug,1)}
function ph(a,b){var c=void 0===c?Tg:c;b(window,c).then(function(d){a.uach=d;d=mh(a);jg(d,Sg,9,a.uach);return!0}).catch(function(){return!1})}
function mh(a){a=nh(a);var b=ig(a,eg,11);b||(b=new eg,jg(a,eg,11,b));return b}
function oh(a){a=mh(a);var b=ig(a,Rg,10);b||(b=new Rg,J(b,2,Af(!1)),jg(a,Rg,10,b));return b}
function jh(a,b,c,d,e,f,g){c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(cg(nh(a))){var h=oh(a);J(h,3,Df(d))}cg(nh(a))&&(d=oh(a),J(d,4,Df(f)));cg(nh(a))&&(f=oh(a),J(f,5,Df(g)));a=a.h.clone();g=Date.now().toString();a=J(a,4,Ff(g));b=kg(a,Wg,3,b);e&&(a=new Og,e=J(a,13,Df(e)),a=new Pg,e=jg(a,Og,2,e),a=new Vg,e=jg(a,Pg,1,e),e=og(e,2,9),jg(b,Vg,18,e));c&&J(b,14,Ff(c));return b}
;function qh(){}
qh.prototype.serialize=function(a){var b=[];rh(this,a,b);return b.join("")};
function rh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),rh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),sh(d,c),c.push(":"),rh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":sh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var th={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},uh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function sh(a,b){b.push('"',a.replace(uh,function(c){var d=th[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),th[c]=d);return d}),'"')}
;function vh(){}
vh.prototype.h=null;vh.prototype.getOptions=function(){var a;(a=this.h)||(a={},wh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var xh;function yh(){}
Ya(yh,vh);function zh(a){return(a=wh(a))?new ActiveXObject(a):new XMLHttpRequest}
function wh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
xh=new yh;function Ah(a){ud.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.K=this.J=null;this.l=this.ea="";this.j=this.Z=this.u=this.X=!1;this.m=0;this.B=null;this.Ba="";this.ha=this.na=!1}
Ya(Ah,ud);var Bh=/^https?$/i,Ch=["POST","PUT"],Dh=[];function Eh(a,b,c,d,e,f,g){var h=new Ah;Dh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Rd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.na=g);h.send(a,c,d,e)}
m=Ah.prototype;m.Rd=function(){this.dispose();kb(Dh,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.X=!1;this.i=!0;this.J=this.T?zh(this.T):zh(xh);this.K=this.T?this.T.getOptions():xh.getOptions();this.J.onreadystatechange=Va(this.pd,this);try{this.getStatus(),this.Z=!0,this.J.open(b,String(a),!0),this.Z=!1}catch(g){this.getStatus();Fh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=eb(Ch,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Ba&&(this.J.responseType=this.Ba);"withCredentials"in this.J&&this.J.withCredentials!==this.na&&(this.J.withCredentials=this.na);try{Gh(this),0<this.m&&(this.ha=Hh(this.J),this.getStatus(),this.ha?(this.J.timeout=this.m,this.J.ontimeout=Va(this.Dd,
this)):this.B=ie(this.Dd,this.m,this)),this.getStatus(),this.u=!0,this.J.send(a),this.u=!1}catch(g){this.getStatus(),Fh(this,g)}};
function Hh(a){return Ic&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Dd=function(){"undefined"!=typeof La&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),vd(this,"timeout"),this.abort(8))};
function Fh(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;Ih(a);Jh(a)}
function Ih(a){a.X||(a.X=!0,vd(a,"complete"),vd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,vd(this,"complete"),vd(this,"abort"),Jh(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),Jh(this,!0));Ah.Aa.S.call(this)};
m.pd=function(){this.aa()||(this.Z||this.u||this.j?Kh(this):this.ye())};
m.ye=function(){Kh(this)};
function Kh(a){if(a.i&&"undefined"!=typeof La)if(a.K[1]&&4==Lh(a)&&2==a.getStatus())a.getStatus();else if(a.u&&4==Lh(a))ie(a.pd,0,a);else if(vd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Mh(a))vd(a,"complete"),vd(a,"success");else{try{var b=2<Lh(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Ih(a)}}finally{Jh(a)}}}
function Jh(a,b){if(a.J){Gh(a);var c=a.J,d=a.K[0]?function(){}:null;
a.J=null;a.K=null;b||vd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Gh(a){a.J&&a.ha&&(a.J.ontimeout=null);a.B&&(C.clearTimeout(a.B),a.B=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==Lh(this)};
function Mh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=ac(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Bh.test(a?a.toLowerCase():"");c=b}return c}
function Lh(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<Lh(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Nh(){}
Nh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Eh(a.url,function(d){d=d.target;if(Mh(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Nc,a.timeoutMillis,a.withCredentials)};function Oh(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Nh}
x(Oh,H);Oh.prototype.dd=function(){this.X=!0;return this};function Ph(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;H.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Oh(a,"0"),a.componentId=b,xc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),b=new bh({logSource:a.logSource,rb:a.rb?a.rb:Lg,sessionIndex:a.sessionIndex,df:a.i,vb:a.j,Jb:!1,dd:a.X,pageId:a.pageId,Wc:a.Wc,network:a.network?a.network:void 0}),xc(a,b),a.u&&dh(b.j,a.u),a.h&&(c=a.h,d=mh(b.j),J(d,7,Lf(c))),a.m&&(b.B=a.m),a.componentId&&
(b.componentId=a.componentId),a.Cb&&(b.Cb=a.Cb),a.l&&((c=a.l)?(b.experimentIds||(b.experimentIds=new Mg),c=c.serialize(),J(b.experimentIds,4,Lf(c))):b.experimentIds&&J(b.experimentIds,4)),a.K&&(c=a.K,b.experimentIds||(b.experimentIds=new Mg),fg(b.experimentIds,2,c,ng)),a.B&&(c=a.B,b.ha=!0,gh(b,c)),a.T&&ph(b.j,a.T),a.network.Rb&&a.network.Rb(a.logSource),a.network.Se&&a.network.Se(b),a=b);this.h=a}
x(Ph,H);
Ph.prototype.flush=function(a){var b=a||[];if(b.length){a=new yg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new xg;f=J(f,1,Lf(e.j));for(var g=[],h=0;h<e.i.length;h++)g.push(e.i[h].Ca);f=fg(f,3,g,Kf);g=[];h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.m;for(var p=e.Ac(l)||[],t=[],r=0;r<p.length;r++){var u=p[r],y=u&&u.h;u=new ug;switch(n){case 3:y=Number(y);Number.isFinite(y)&&hg(u,1,vg,Ff(y));break;case 2:y=Number(y);
if(null!=y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);hg(u,2,vg,y)}t.push(u)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new wg;t=jg(r,ug,2,t);r=l;u=[];y=[];for(var z=0;z<e.i.length;z++)y.push(e.i[z].Da);for(z=0;z<y.length;z++){var G=y[z],L=r[z],K=new sg;switch(G){case 3:hg(K,1,tg,Lf(String(L)));break;case 2:G=Number(L);Number.isFinite(G)&&hg(K,2,tg,Df(G));break;case 1:hg(K,3,tg,Af("true"===L))}u.push(K)}kg(t,sg,1,u);g.push(t)}}kg(f,wg,4,g);c.push(f);
e.clear()}kg(a,xg,1,c);b=this.h;a instanceof Wg?b.log(a):(c=new Wg,a=a.serialize(),a=J(c,8,Lf(a)),b.log(a));this.h.flush()}};function Qh(a,b){this.h=b;this.m=void 0;this.B=new Ph(1828);this.i=new je(this.B);this.K=new qe(this.i);this.H=new re(this.i);this.u=new se(this.i);this.l=new oe(this.i);this.j=ue(a);(new ne(this.i)).h.Ub("/client_streamz/bg/fic",this.h)}
function Rh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Sh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Th(a){function b(z,G,L){Promise.resolve().then(function(){var K;null!=(K=c.ra)&&void 0!==K.m&&K.K.record(Rh()-K.m,K.j,K.h);h.resolve({Nd:z,Ve:G,cg:L})})}
var c=this;this.h=!1;var d=a.program;var e=a.ee;if(!1!==a.Ee){var f,g;this.ra=null!=(g=a.ra)?g:new Qh(e,null!=(f=a.ag)?f:"_")}var h=new Sh;this.i=h.promise;if(!C[e]){var k;null!=(k=this.ra)&&pe(k.l,k.j,k.h,1,"");var l;null!=(l=this.ra)&&l.i.mb()}else if(!C[e].a){var n;null!=(n=this.ra)&&pe(n.l,n.j,n.h,2,"");var p;null!=(p=this.ra)&&p.i.mb()}try{var t=C[e].a,r;null!=(r=this.ra)&&(r.m=Rh());this.j=w(t(d,b,!0,a.mg)).next().value;this.Ue=h.promise.then(function(){})}catch(z){var u;
null!=(u=this.ra)&&pe(u.l,u.j,u.h,4,z.message);var y;null!=(y=this.ra)&&y.i.mb();throw z;}}
Th.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=Rh(),d;null!=(d=this.ra)&&d.H.h.Ub("/client_streamz/bg/fsc",d.j,d.h);return this.i.then(function(e){var f=e.Nd;return new Promise(function(g){f(function(h){var k;null!=(k=b.ra)&&k.u.record(Rh()-c,k.j,k.h);g(h)},[a.cd,
a.We,a.ff])})})};
Th.prototype.Ad=function(a){if(this.h)throw Error("Already disposed");var b=Rh(),c;null!=(c=this.ra)&&c.H.h.Ub("/client_streamz/bg/fsc",c.j,c.h);a=this.j([a.cd,a.We,a.ff]);var d;null!=(d=this.ra)&&d.u.record(Rh()-b,d.j,d.h);return a};
Th.prototype.dispose=function(){var a;null!=(a=this.ra)&&a.i.mb();this.h=!0;this.i.then(function(b){(b=b.Ve)&&b()})};
Th.prototype.aa=function(){return this.h};var Uh=window;Bb("csi.gstatic.com");Bb("googleads.g.doubleclick.net");Bb("partner.googleadservices.com");Bb("pubads.g.doubleclick.net");Bb("securepubads.g.doubleclick.net");Bb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Vh=ka([""]),Wh=ma(["\x00"],["\\0"]),Xh=ma(["\n"],["\\n"]),Yh=ma(["\x00"],["\\u0000"]);function Zh(a){return-1===a.toString().indexOf("`")}
Zh(function(a){return a(Vh)})||Zh(function(a){return a(Wh)})||Zh(function(a){return a(Xh)})||Zh(function(a){return a(Yh)});function $h(a){this.pe=a}
function ai(a){return new $h(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var bi=[ai("data"),ai("http"),ai("https"),ai("mailto"),ai("ftp"),new $h(function(a){return/^[^:]*([/?#]|$)/.test(a)})],ci="function"===typeof URL;
function di(a){if(a instanceof Jb)a instanceof Jb&&a.constructor===Jb?a=a.h:(Na(a),a="type_error:SafeUrl");else{b:if(ci){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function ei(a,b){b=di(b);void 0!==b&&(a.href=b)}
;var fi={};function gi(){}
function hi(a){this.h=a}
x(hi,gi);hi.prototype.toString=function(){return this.h};function ii(a){var b="true".toString(),c=[new hi(ji[0].toLowerCase(),fi)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof hi)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function ki(){throw Error("unknown trace type");}
;var li="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function mi(a,b){if(b instanceof Eb)a.href=Fb(b).toString();else{if(-1===li.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=di(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function ni(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function oi(a){var b=ni(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function pi(a,b){a.src=Fb(b);oi(a)}
;function qi(a){var b=ri;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function si(){var a=[];qi(function(b){a.push(b)});
return a}
var ri={gf:"allow-forms",hf:"allow-modals",jf:"allow-orientation-lock",kf:"allow-pointer-lock",lf:"allow-popups",mf:"allow-popups-to-escape-sandbox",nf:"allow-presentation",pf:"allow-same-origin",qf:"allow-scripts",rf:"allow-top-navigation",sf:"allow-top-navigation-by-user-activation"},ti=db(function(){return si()});
function ui(){var a=vi(),b={};fb(ti(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function vi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function wi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var xi=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var yi="undefined"!==typeof TextEncoder?new TextEncoder:null,zi=yi?function(a){return yi.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Ai(a){ud.call(this);var b=this;this.u=this.j=0;this.Fa=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(Bi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.u||Ci(this)}
x(Ai,ud);function Di(){var a=Ei;Ai.h||(Ai.h=new Ai(a));return Ai.h}
Ai.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Fa.qa(this.u);delete Ai.h};
Ai.prototype.wa=function(){return this.i};
function Ci(a){a.u=a.Fa.oa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):c.yield(Bi(a),3):c.yield(Bi(a),3);Ci(a);c.h=0})},3E4)}
function Bi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Fa.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.l=0;h.H=0;a.m=void 0;a.j&&(a.Fa.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?vd(a,"networkstatus-online"):vd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function Fi(){this.data=[];this.h=-1}
Fi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Fi.prototype.get=function(a){return!!this.data[a]};
function Gi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Hi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Hi.prototype[Symbol.iterator]=function(){return this};
Hi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ii(a,b){return new Hi(a,b)}
;function Ji(){this.blockSize=-1}
;function Li(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Ya(Li,Ji);Li.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Mi(a,b,c){c||(c=0);var d=a.H;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Li.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Mi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Mi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Mi(this,e);f=0;break}}this.i=f;this.l+=b}};
Li.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Mi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ni(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Oi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Pi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ni(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function Qi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Pi(a,"inverted-hdpi")&&Oi(a,Array.prototype.filter.call(a.classList?a.classList:Ni(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ri(){}
Ri.prototype.next=function(){return Si};
var Si={done:!0,value:void 0};function Ti(a){return{value:a,done:!1}}
Ri.prototype.Ha=function(){return this};function Ui(a){if(a instanceof Vi||a instanceof Wi||a instanceof Xi)return a;if("function"==typeof a.next)return new Vi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Vi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ha)return new Vi(function(){return a.Ha()});
throw Error("Not an iterator or iterable.");}
function Vi(a){this.i=a}
Vi.prototype.Ha=function(){return new Wi(this.i())};
Vi.prototype[Symbol.iterator]=function(){return new Xi(this.i())};
Vi.prototype.h=function(){return new Xi(this.i())};
function Wi(a){this.i=a}
x(Wi,Ri);Wi.prototype.next=function(){return this.i.next()};
Wi.prototype[Symbol.iterator]=function(){return new Xi(this.i)};
Wi.prototype.h=function(){return new Xi(this.i)};
function Xi(a){Vi.call(this,function(){return a});
this.j=a}
x(Xi,Vi);Xi.prototype.next=function(){return this.j.next()};function Yi(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Yi)for(c=a.Dc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Yi.prototype;m.Dc=function(){Zi(this);return this.h.concat()};
m.has=function(a){return $i(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||aj;Zi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function aj(a,b){return a===b}
m.Lb=function(){return 0==this.size};
m.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return $i(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&Zi(this),!0):!1};
function Zi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];$i(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],$i(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return $i(this.i,a)?this.i[a]:b};
m.set=function(a,b){$i(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Dc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Yi(this)};
m.keys=function(){return Ui(this.Ha(!0)).h()};
m.values=function(){return Ui(this.Ha(!1)).h()};
m.entries=function(){var a=this;return Ii(this.keys(),function(b){return[b,a.get(b)]})};
m.Ha=function(a){Zi(this);var b=0,c=this.Xa,d=this,e=new Ri;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Si;var f=d.h[b++];return Ti(a?f:d.i[f])};
return e};
function $i(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function M(a){H.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.u=!!a}
Ya(M,H);m=M.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Eb(a)}return!1};
m.Eb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&kb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Za=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];bj(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.aa();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Eb(c)}}return 0!=e}return!1};
function bj(a,b,c){Od(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Eb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){M.Aa.S.call(this);this.clear();this.j.length=0};function cj(a){this.h=a}
cj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new qh).serialize(b))};
cj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
cj.prototype.remove=function(a){this.h.remove(a)};function dj(a){this.h=a}
Ya(dj,cj);function ej(a){this.data=a}
function fj(a){return void 0===a||a instanceof ej?a:new ej(a)}
dj.prototype.set=function(a,b){dj.Aa.set.call(this,a,fj(b))};
dj.prototype.i=function(a){a=dj.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
dj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function gj(a){this.h=a}
Ya(gj,dj);gj.prototype.set=function(a,b,c){if(b=fj(b)){if(c){if(c<Xa()){gj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}gj.Aa.set.call(this,a,b)};
gj.prototype.i=function(a){var b=gj.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())gj.prototype.remove.call(this,a);else return b}};function hj(){}
;function ij(){}
Ya(ij,hj);ij.prototype[Symbol.iterator]=function(){return Ui(this.Ha(!0)).h()};
ij.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function jj(a){this.h=a;this.i=null}
Ya(jj,ij);m=jj.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){kj(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){kj(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){kj(this);this.h.removeItem(a)};
m.Ha=function(a){kj(this);var b=0,c=this.h,d=new Ri;d.next=function(){if(b>=c.length)return Si;var e=c.key(b++);if(a)return Ti(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ti(e)};
return d};
m.clear=function(){kj(this);this.h.clear()};
m.key=function(a){kj(this);return this.h.key(a)};
function kj(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Hd(Error("Storage mechanism: Storage unavailable"))}
;function lj(){var a=null;try{a=C.localStorage||null}catch(b){}jj.call(this,a)}
Ya(lj,jj);function mj(a,b){this.i=a;this.h=null;var c;if(c=Ic)c=!(9<=Number(Xc));if(c){nj||(nj=new Yi);this.h=nj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),nj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Ya(mj,ij);var oj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},nj=null;function pj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return oj[b]})}
m=mj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(pj(a),b);qj(this)};
m.get=function(a){a=this.h.getAttribute(pj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(pj(a));qj(this)};
m.Ha=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ri;d.next=function(){if(b>=c.length)return Si;var e=c[b++];if(a)return Ti(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ti(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);qj(this)};
function qj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function rj(a,b){this.i=a;this.h=b+"::"}
Ya(rj,ij);rj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
rj.prototype.get=function(a){return this.i.get(this.h+a)};
rj.prototype.remove=function(a){this.i.remove(this.h+a)};
rj.prototype.Ha=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ri;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ti(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},sj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Qc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var tj={ob:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},uj={ob:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
N.Te=function(){sj?(N.lb=Uint8Array,N.Ja=Uint16Array,N.Jd=Int32Array,N.assign(N,tj)):(N.lb=Array,N.Ja=Array,N.Jd=Array,N.assign(N,uj))};
N.Te();var vj=!0;try{new Uint8Array(1)}catch(a){vj=!1}
function wj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var xj={};xj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var yj={},zj,Aj=[],Bj=0;256>Bj;Bj++){zj=Bj;for(var Cj=0;8>Cj;Cj++)zj=zj&1?3988292384^zj>>>1:zj>>>1;Aj[Bj]=zj}yj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Aj[(a^b[d])&255];return a^-1};var Dj={};Dj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ej(a){for(var b=a.length;0<=--b;)a[b]=0}
var Fj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Gj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Hj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ij=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Jj=Array(576);Ej(Jj);var Kj=Array(60);Ej(Kj);var Lj=Array(512);Ej(Lj);var Mj=Array(256);Ej(Mj);var Nj=Array(29);Ej(Nj);var Oj=Array(30);Ej(Oj);function Pj(a,b,c,d,e){this.Bd=a;this.Zd=b;this.Yd=c;this.Ud=d;this.ue=e;this.kd=a&&a.length}
var Qj,Rj,Sj;function Tj(a,b){this.ed=a;this.zb=0;this.Wa=b}
function Uj(a,b){a.W[a.pending++]=b&255;a.W[a.pending++]=b>>>8&255}
function Vj(a,b,c){a.ga>16-c?(a.ma|=b<<a.ga&65535,Uj(a,a.ma),a.ma=b>>16-a.ga,a.ga+=c-16):(a.ma|=b<<a.ga&65535,a.ga+=c)}
function Wj(a,b,c){Vj(a,c[2*b],c[2*b+1])}
function Xj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Yj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Xj(d[e]++,e))}
function Zj(a){var b;for(b=0;286>b;b++)a.sa[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ia[2*b]=0;a.sa[512]=1;a.Qa=a.Db=0;a.ya=a.matches=0}
function ak(a){8<a.ga?Uj(a,a.ma):0<a.ga&&(a.W[a.pending++]=a.ma);a.ma=0;a.ga=0}
function bk(a,b,c){ak(a);Uj(a,c);Uj(a,~c);N.ob(a.W,a.window,b,c,a.pending);a.pending+=c}
function ck(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function dk(a,b,c){for(var d=a.Y[c],e=c<<1;e<=a.Oa;){e<a.Oa&&ck(b,a.Y[e+1],a.Y[e],a.depth)&&e++;if(ck(b,d,a.Y[e],a.depth))break;a.Y[c]=a.Y[e];c=e;e<<=1}a.Y[c]=d}
function ek(a,b,c){var d=0;if(0!==a.ya){do{var e=a.W[a.Ib+2*d]<<8|a.W[a.Ib+2*d+1];var f=a.W[a.Hc+d];d++;if(0===e)Wj(a,f,b);else{var g=Mj[f];Wj(a,g+256+1,b);var h=Fj[g];0!==h&&(f-=Nj[g],Vj(a,f,h));e--;g=256>e?Lj[e]:Lj[256+(e>>>7)];Wj(a,g,c);h=Gj[g];0!==h&&(e-=Oj[g],Vj(a,e,h))}}while(d<a.ya)}Wj(a,256,b)}
function fk(a,b){var c=b.ed,d=b.Wa.Bd,e=b.Wa.kd,f=b.Wa.Ud,g,h=-1;a.Oa=0;a.tb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Y[++a.Oa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Oa;){var k=a.Y[++a.Oa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Qa--;e&&(a.Db-=d[2*k+1])}b.zb=h;for(g=a.Oa>>1;1<=g;g--)dk(a,c,g);k=f;do g=a.Y[1],a.Y[1]=a.Y[a.Oa--],dk(a,c,1),d=a.Y[1],a.Y[--a.tb]=g,a.Y[--a.tb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Y[1]=k++,dk(a,c,1);while(2<=a.Oa);a.Y[--a.tb]=
a.Y[1];g=b.ed;k=b.zb;d=b.Wa.Bd;e=b.Wa.kd;f=b.Wa.Zd;var l=b.Wa.Yd,n=b.Wa.ue,p,t=0;for(p=0;15>=p;p++)a.La[p]=0;g[2*a.Y[a.tb]+1]=0;for(b=a.tb+1;573>b;b++){var r=a.Y[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.La[p]++;var u=0;r>=l&&(u=f[r-l]);var y=g[2*r];a.Qa+=y*(p+u);e&&(a.Db+=y*(d[2*r+1]+u))}}if(0!==t){do{for(p=n-1;0===a.La[p];)p--;a.La[p]--;a.La[p+1]+=2;a.La[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.La[p];0!==r;)d=a.Y[--b],d>k||(g[2*d+1]!==p&&(a.Qa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}Yj(c,h,a.La)}
function gk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ia[2*l]+=g:0!==l?(l!==e&&a.ia[2*l]++,a.ia[32]++):10>=g?a.ia[34]++:a.ia[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function hk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Wj(a,l,a.ia);while(0!==--g)}else 0!==l?(l!==e&&(Wj(a,l,a.ia),g--),Wj(a,16,a.ia),Vj(a,g-3,2)):10>=g?(Wj(a,17,a.ia),Vj(a,g-3,3)):(Wj(a,18,a.ia),Vj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function ik(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.sa[2*c])return 0;if(0!==a.sa[18]||0!==a.sa[20]||0!==a.sa[26])return 1;for(c=32;256>c;c++)if(0!==a.sa[2*c])return 1;return 0}
var jk=!1;function kk(a,b,c){a.W[a.Ib+2*a.ya]=b>>>8&255;a.W[a.Ib+2*a.ya+1]=b&255;a.W[a.Hc+a.ya]=c&255;a.ya++;0===b?a.sa[2*c]++:(a.matches++,b--,a.sa[2*(Mj[c]+256+1)]++,a.bb[2*(256>b?Lj[b]:Lj[256+(b>>>7)])]++);return a.ya===a.Mb-1}
;function lk(a,b){a.msg=Dj[b];return b}
function mk(a){for(var b=a.length;0<=--b;)a[b]=0}
function nk(a){var b=a.state,c=b.pending;c>a.P&&(c=a.P);0!==c&&(N.ob(a.output,b.W,b.Pb,c,a.Ab),a.Ab+=c,b.Pb+=c,a.Rc+=c,a.P-=c,b.pending-=c,0===b.pending&&(b.Pb=0))}
function ok(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.I.xc&&(a.I.xc=ik(a));fk(a,a.fc);fk(a,a.ac);gk(a,a.sa,a.fc.zb);gk(a,a.bb,a.ac.zb);fk(a,a.Xc);for(e=18;3<=e&&0===a.ia[2*Ij[e]+1];e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.Db+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Vj(a,b?1:0,3),bk(a,c,d);else if(4===a.strategy||g===f)Vj(a,2+(b?1:0),3),ek(a,Jj,Kj);else{Vj(a,4+(b?1:0),3);c=a.fc.zb+1;d=a.ac.zb+1;e+=1;Vj(a,c-257,5);Vj(a,d-1,5);Vj(a,e-4,4);for(f=0;f<e;f++)Vj(a,a.ia[2*
Ij[f]+1],3);hk(a,a.sa,c-1);hk(a,a.bb,d-1);ek(a,a.sa,a.bb)}Zj(a);b&&ak(a);a.va=a.o;nk(a.I)}
function P(a,b){a.W[a.pending++]=b}
function pk(a,b){a.W[a.pending++]=b>>>8&255;a.W[a.pending++]=b&255}
function qk(a,b){var c=a.nd,d=a.o,e=a.xa,f=a.od,g=a.o>a.ka-262?a.o-(a.ka-262):0,h=a.window,k=a.Ya,l=a.Ia,n=a.o+258,p=h[d+e-1],t=h[d+e];a.xa>=a.jd&&(c>>=2);f>a.v&&(f=a.v);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.yb=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.v?e:a.v}
function rk(a){var b=a.ka,c;do{var d=a.Hd-a.v-a.o;if(a.o>=b+(b-262)){N.ob(a.window,a.window,b,b,0);a.yb-=b;a.o-=b;a.va-=b;var e=c=a.ec;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.la)break;e=a.I;c=a.window;f=a.o+a.v;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,N.ob(c,e.input,e.hb,g,f),1===e.state.wrap?e.G=xj(e.G,c,g,f):2===e.state.wrap&&(e.G=yj(e.G,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.v+=c;if(3<=a.v+a.ta)for(d=a.o-a.ta,a.M=a.window[d],
a.M=(a.M<<a.Na^a.window[d+1])&a.Ma;a.ta&&!(a.M=(a.M<<a.Na^a.window[d+3-1])&a.Ma,a.Ia[d&a.Ya]=a.head[a.M],a.head[a.M]=d,d++,a.ta--,3>a.v+a.ta););}while(262>a.v&&0!==a.I.la)}
function sk(a,b){for(var c;;){if(262>a.v){rk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.M=(a.M<<a.Na^a.window[a.o+3-1])&a.Ma,c=a.Ia[a.o&a.Ya]=a.head[a.M],a.head[a.M]=a.o);0!==c&&a.o-c<=a.ka-262&&(a.R=qk(a,c));if(3<=a.R)if(c=kk(a,a.o-a.yb,a.R-3),a.v-=a.R,a.R<=a.Ic&&3<=a.v){a.R--;do a.o++,a.M=(a.M<<a.Na^a.window[a.o+3-1])&a.Ma,a.Ia[a.o&a.Ya]=a.head[a.M],a.head[a.M]=a.o;while(0!==--a.R);a.o++}else a.o+=a.R,a.R=0,a.M=a.window[a.o],a.M=(a.M<<a.Na^a.window[a.o+1])&a.Ma;else c=kk(a,0,
a.window[a.o]),a.v--,a.o++;if(c&&(ok(a,!1),0===a.I.P))return 1}a.ta=2>a.o?a.o:2;return 4===b?(ok(a,!0),0===a.I.P?3:4):a.ya&&(ok(a,!1),0===a.I.P)?1:2}
function tk(a,b){for(var c,d;;){if(262>a.v){rk(a);if(262>a.v&&0===b)return 1;if(0===a.v)break}c=0;3<=a.v&&(a.M=(a.M<<a.Na^a.window[a.o+3-1])&a.Ma,c=a.Ia[a.o&a.Ya]=a.head[a.M],a.head[a.M]=a.o);a.xa=a.R;a.rd=a.yb;a.R=2;0!==c&&a.xa<a.Ic&&a.o-c<=a.ka-262&&(a.R=qk(a,c),5>=a.R&&(1===a.strategy||3===a.R&&4096<a.o-a.yb)&&(a.R=2));if(3<=a.xa&&a.R<=a.xa){d=a.o+a.v-3;c=kk(a,a.o-1-a.rd,a.xa-3);a.v-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.M=(a.M<<a.Na^a.window[a.o+3-1])&a.Ma,a.Ia[a.o&a.Ya]=a.head[a.M],a.head[a.M]=a.o);
while(0!==--a.xa);a.fb=0;a.R=2;a.o++;if(c&&(ok(a,!1),0===a.I.P))return 1}else if(a.fb){if((c=kk(a,0,a.window[a.o-1]))&&ok(a,!1),a.o++,a.v--,0===a.I.P)return 1}else a.fb=1,a.o++,a.v--}a.fb&&(kk(a,0,a.window[a.o-1]),a.fb=0);a.ta=2>a.o?a.o:2;return 4===b?(ok(a,!0),0===a.I.P?3:4):a.ya&&(ok(a,!1),0===a.I.P)?1:2}
function uk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.v){rk(a);if(258>=a.v&&0===b)return 1;if(0===a.v)break}a.R=0;if(3<=a.v&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.R=258-(e-d);a.R>a.v&&(a.R=a.v)}3<=a.R?(c=kk(a,1,a.R-3),a.v-=a.R,a.o+=a.R,a.R=0):(c=kk(a,0,a.window[a.o]),a.v--,a.o++);if(c&&(ok(a,!1),0===a.I.P))return 1}a.ta=0;return 4===b?(ok(a,!0),0===a.I.P?3:4):
a.ya&&(ok(a,!1),0===a.I.P)?1:2}
function vk(a,b){for(var c;;){if(0===a.v&&(rk(a),0===a.v)){if(0===b)return 1;break}a.R=0;c=kk(a,0,a.window[a.o]);a.v--;a.o++;if(c&&(ok(a,!1),0===a.I.P))return 1}a.ta=0;return 4===b?(ok(a,!0),0===a.I.P?3:4):a.ya&&(ok(a,!1),0===a.I.P)?1:2}
function wk(a,b,c,d,e){this.ge=a;this.te=b;this.xe=c;this.se=d;this.be=e}
var xk;xk=[new wk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.v){rk(a);if(0===a.v&&0===b)return 1;if(0===a.v)break}a.o+=a.v;a.v=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.v=a.o-d,a.o=d,ok(a,!1),0===a.I.P)return 1;if(a.o-a.va>=a.ka-262&&(ok(a,!1),0===a.I.P))return 1}a.ta=0;if(4===b)return ok(a,!0),0===a.I.P?3:4;a.o>a.va&&ok(a,!1);return 1}),
new wk(4,4,8,4,sk),new wk(4,5,16,8,sk),new wk(4,6,32,32,sk),new wk(4,4,16,16,tk),new wk(8,16,32,32,tk),new wk(8,16,128,128,tk),new wk(8,32,128,256,tk),new wk(32,128,258,1024,tk),new wk(32,258,258,4096,tk)];
function yk(){this.I=null;this.status=0;this.W=null;this.wrap=this.pending=this.Pb=this.za=0;this.F=null;this.Ea=0;this.method=8;this.wb=-1;this.Ya=this.Tc=this.ka=0;this.window=null;this.Hd=0;this.head=this.Ia=null;this.od=this.jd=this.strategy=this.level=this.Ic=this.nd=this.xa=this.v=this.yb=this.o=this.fb=this.rd=this.R=this.va=this.Na=this.Ma=this.Ec=this.ec=this.M=0;this.sa=new N.Ja(1146);this.bb=new N.Ja(122);this.ia=new N.Ja(78);mk(this.sa);mk(this.bb);mk(this.ia);this.Xc=this.ac=this.fc=
null;this.La=new N.Ja(16);this.Y=new N.Ja(573);mk(this.Y);this.tb=this.Oa=0;this.depth=new N.Ja(573);mk(this.depth);this.ga=this.ma=this.ta=this.matches=this.Db=this.Qa=this.Ib=this.ya=this.Mb=this.Hc=0}
function zk(a,b){if(!a||!a.state||5<b||0>b)return a?lk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return lk(a,0===a.P?-5:-2);c.I=a;var d=c.wb;c.wb=b;if(42===c.status)if(2===c.wrap)a.G=0,P(c,31),P(c,139),P(c,8),c.F?(P(c,(c.F.text?1:0)+(c.F.Sa?2:0)+(c.F.extra?4:0)+(c.F.name?8:0)+(c.F.comment?16:0)),P(c,c.F.time&255),P(c,c.F.time>>8&255),P(c,c.F.time>>16&255),P(c,c.F.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.F.os&255),c.F.extra&&c.F.extra.length&&
(P(c,c.F.extra.length&255),P(c,c.F.extra.length>>8&255)),c.F.Sa&&(a.G=yj(a.G,c.W,c.pending,0)),c.Ea=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Tc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;pk(c,e+(31-e%31));0!==c.o&&(pk(c,a.G>>>16),pk(c,a.G&65535));a.G=1}if(69===c.status)if(c.F.extra){for(e=c.pending;c.Ea<(c.F.extra.length&65535)&&(c.pending!==c.za||
(c.F.Sa&&c.pending>e&&(a.G=yj(a.G,c.W,c.pending-e,e)),nk(a),e=c.pending,c.pending!==c.za));)P(c,c.F.extra[c.Ea]&255),c.Ea++;c.F.Sa&&c.pending>e&&(a.G=yj(a.G,c.W,c.pending-e,e));c.Ea===c.F.extra.length&&(c.Ea=0,c.status=73)}else c.status=73;if(73===c.status)if(c.F.name){e=c.pending;do{if(c.pending===c.za&&(c.F.Sa&&c.pending>e&&(a.G=yj(a.G,c.W,c.pending-e,e)),nk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ea<c.F.name.length?c.F.name.charCodeAt(c.Ea++)&255:0;P(c,f)}while(0!==f);c.F.Sa&&c.pending>
e&&(a.G=yj(a.G,c.W,c.pending-e,e));0===f&&(c.Ea=0,c.status=91)}else c.status=91;if(91===c.status)if(c.F.comment){e=c.pending;do{if(c.pending===c.za&&(c.F.Sa&&c.pending>e&&(a.G=yj(a.G,c.W,c.pending-e,e)),nk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ea<c.F.comment.length?c.F.comment.charCodeAt(c.Ea++)&255:0;P(c,f)}while(0!==f);c.F.Sa&&c.pending>e&&(a.G=yj(a.G,c.W,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.F.Sa?(c.pending+2>c.za&&nk(a),c.pending+2<=c.za&&(P(c,a.G&
255),P(c,a.G>>8&255),a.G=0,c.status=113)):c.status=113);if(0!==c.pending){if(nk(a),0===a.P)return c.wb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return lk(a,-5);if(666===c.status&&0!==a.la)return lk(a,-5);if(0!==a.la||0!==c.v||0!==b&&666!==c.status){d=2===c.strategy?vk(c,b):3===c.strategy?uk(c,b):xk[c.level].be(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.P&&(c.wb=-1),0;if(2===d&&(1===b?(Vj(c,2,3),Wj(c,256,Jj),16===c.ga?(Uj(c,c.ma),c.ma=0,c.ga=0):8<=c.ga&&
(c.W[c.pending++]=c.ma&255,c.ma>>=8,c.ga-=8)):5!==b&&(Vj(c,0,3),bk(c,0,0),3===b&&(mk(c.head),0===c.v&&(c.o=0,c.va=0,c.ta=0))),nk(a),0===a.P))return c.wb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.G&255),P(c,a.G>>8&255),P(c,a.G>>16&255),P(c,a.G>>24&255),P(c,a.kb&255),P(c,a.kb>>8&255),P(c,a.kb>>16&255),P(c,a.kb>>24&255)):(pk(c,a.G>>>16),pk(c,a.G&65535));nk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Ak={};Ak=function(){this.input=null;this.kb=this.la=this.hb=0;this.output=null;this.Rc=this.P=this.Ab=0;this.msg="";this.state=null;this.xc=2;this.G=0};var Bk=Object.prototype.toString;
function Ck(a){if(!(this instanceof Ck))return new Ck(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new Ak;this.I.P=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=lk(b,-2);else{8===e&&(e=9);var k=new yk;b.state=k;k.I=b;k.wrap=h;k.F=null;k.Tc=e;k.ka=1<<k.Tc;k.Ya=k.ka-1;k.Ec=f+7;k.ec=1<<k.Ec;k.Ma=k.ec-1;k.Na=~~((k.Ec+3-1)/3);k.window=new N.lb(2*k.ka);k.head=new N.Ja(k.ec);k.Ia=new N.Ja(k.ka);k.Mb=1<<f+6;k.za=4*k.Mb;k.W=new N.lb(k.za);k.Ib=1*k.Mb;k.Hc=3*k.Mb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Rc=0;b.xc=2;c=b.state;c.pending=0;c.Pb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.G=2===c.wrap?
0:1;c.wb=0;if(!jk){d=Array(16);for(f=g=0;28>f;f++)for(Nj[f]=g,e=0;e<1<<Fj[f];e++)Mj[g++]=f;Mj[g-1]=f;for(f=g=0;16>f;f++)for(Oj[f]=g,e=0;e<1<<Gj[f];e++)Lj[g++]=f;for(g>>=7;30>f;f++)for(Oj[f]=g<<7,e=0;e<1<<Gj[f]-7;e++)Lj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Jj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Jj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Jj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Jj[2*e+1]=8,e++,d[8]++;Yj(Jj,287,d);for(e=0;30>e;e++)Kj[2*e+1]=5,Kj[2*e]=Xj(e,5);Qj=new Pj(Jj,Fj,257,286,15);Rj=new Pj(Kj,
Gj,0,30,15);Sj=new Pj([],Hj,0,19,7);jk=!0}c.fc=new Tj(c.sa,Qj);c.ac=new Tj(c.bb,Rj);c.Xc=new Tj(c.ia,Sj);c.ma=0;c.ga=0;Zj(c);c=0}else c=lk(b,-2);0===c&&(b=b.state,b.Hd=2*b.ka,mk(b.head),b.Ic=xk[b.level].te,b.jd=xk[b.level].ge,b.od=xk[b.level].xe,b.nd=xk[b.level].se,b.o=0,b.va=0,b.v=0,b.ta=0,b.R=b.xa=2,b.fb=0,b.M=0);b=c}}else b=-2;if(0!==b)throw Error(Dj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.F=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=wj(a.dictionary):
"[object ArrayBuffer]"===Bk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.v)b=-2;else{1===b&&(a.G=xj(a.G,f,g,0));l.wrap=0;g>=l.ka&&(0===b&&(mk(l.head),l.o=0,l.va=0,l.ta=0),c=new N.lb(l.ka),N.ob(c,f,g-l.ka,l.ka,0),f=c,g=l.ka);c=a.la;d=a.hb;e=a.input;a.la=g;a.hb=0;a.input=f;for(rk(l);3<=l.v;){f=l.o;g=l.v-2;do l.M=(l.M<<l.Na^l.window[f+3-1])&l.Ma,l.Ia[f&l.Ya]=l.head[l.M],l.head[l.M]=f,f++;while(--g);
l.o=f;l.v=2;rk(l)}l.o+=l.v;l.va=l.o;l.ta=l.v;l.v=0;l.R=l.xa=2;l.fb=0;a.hb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Dj[b]);this.Lf=!0}}
Ck.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=wj(a):"[object ArrayBuffer]"===Bk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.la=c.input.length;do{0===c.P&&(c.output=new N.lb(d),c.Ab=0,c.P=d);a=zk(c,e);if(1!==a&&0!==a)return Dk(this,a),this.ended=!0,!1;if(0===c.P||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=N.Qc(c.output,c.Ab);b=f;f=f.length;if(65537>f&&(b.subarray&&vj||!b.subarray))b=
String.fromCharCode.apply(null,N.Qc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Qc(c.output,c.Ab),this.chunks.push(b)}while((0<c.la||0===c.P)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=lk(c,-2):(c.state=null,a=113===d?lk(c,-3):0)):a=-2,Dk(this,a),this.ended=!0,0===a;2===e&&(Dk(this,0),c.P=0);return!0};
function Dk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):N.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function Ek(a,b){b=b||{};b.gzip=!0;b=new Ck(b);b.push(a,!0);if(b.err)throw b.msg||Dj[b.err];return b.result}
;function Fk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Hb(a):b=null;return b}
;function Gk(a){return Hb(null===a?"null":void 0===a?"undefined":a)}
;function Hk(a){this.name=a}
;var Ik=new Hk("rawColdConfigGroup");var Jk=new Hk("rawHotConfigGroup");function Kk(a){this.D=Qf(a)}
x(Kk,pg);var Lk=new Hk("continuationCommand");var Mk=new Hk("webCommandMetadata");var Nk=new Hk("signalServiceEndpoint");var Ok={xf:"EMBEDDED_PLAYER_MODE_UNKNOWN",uf:"EMBEDDED_PLAYER_MODE_DEFAULT",wf:"EMBEDDED_PLAYER_MODE_PFP",vf:"EMBEDDED_PLAYER_MODE_PFL"};var Pk=new Hk("feedbackEndpoint");function Qk(a){this.D=Qf(a)}
x(Qk,pg);Qk.prototype.setTrackingParams=function(a){return J(this,1,mf(a,!0))};var Rk=new Hk("webPlayerShareEntityServiceEndpoint");var Sk=new Hk("playlistEditEndpoint");var Tk=new Hk("modifyChannelNotificationPreferenceEndpoint");var Uk=new Hk("unsubscribeEndpoint");var Vk=new Hk("subscribeEndpoint");function Wk(){var a=Xk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Yk(a){D("yt.ads.biscotti.lastId_",a)}
;function Zk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var $k=C.window,al,bl,cl=(null==$k?void 0:null==(al=$k.yt)?void 0:al.config_)||(null==$k?void 0:null==(bl=$k.ytcfg)?void 0:bl.data_)||{};D("yt.config_",cl);function dl(){Zk(cl,arguments)}
function S(a,b){return a in cl?cl[a]:b}
function el(a){var b=cl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var fl=[];function gl(a){fl.forEach(function(b){return b(a)})}
function hl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){il(b)}}:a}
function il(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),dl("ERRORS",b));gl(a)}
function jl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),dl("ERRORS",f))}
;var kl=/^[\w.]*$/,ll={q:!0,search_query:!0};function ml(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=nl(f[0]||""),h=nl(f[1]||"");g in c?Array.isArray(c[g])?lb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(ml);k.args=[{key:l,value:f[1],query:a,method:ol==n?"unchanged":n}];ll.hasOwnProperty(l)||jl(k)}}return c}
var ol=String(ml);function pl(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ql(a){"?"==a.charAt(0)&&(a=a.substr(1));return ml(a,"&")}
function rl(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ql(1<a.length?a[1]:a[0])):{}}
function sl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ql(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return kc(a,e)+d}
function tl(a){if(!b)var b=window.location.href;var c=ac(1,a),d=bc(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)==d&&(Number(ac(4,b))||null)==(Number(ac(4,a))||null):!0;return a}
function nl(a){return a&&a.match(kl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ul(a){var b=vl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=xi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ea){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Uh:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=Uh.screen)?void 0:k.height;var l;e.u_w=null==(l=Uh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Uh.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Uh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Uh.screen)?void 0:t.colorDepth}catch(ea){}h=b.h;try{var r=h.screenX;var u=h.screenY}catch(ea){}try{var y=h.outerWidth;var z=h.outerHeight}catch(ea){}try{var G=h.innerWidth;var L=h.innerHeight}catch(ea){}try{var K=h.screenLeft;var R=h.screenTop}catch(ea){}try{G=h.innerWidth,L=h.innerHeight}catch(ea){}try{var O=h.screen.availWidth;var la=h.screen.availTop}catch(ea){}r=[K,R,r,u,O,la,y,z,G,L];try{var I=(b.h.top||window).document,da="CSS1Compat"==
I.compatMode?I.documentElement:I.body;var ja=(new Bd(da.clientWidth,da.clientHeight)).round()}catch(ea){ja=new Bd(-12245933,-12245933)}I=ja;ja={};var U=void 0===U?C:U;da=new Fi;"SVGElement"in U&&"createElementNS"in U.document&&da.set(0);u=ui();u["allow-top-navigation-by-user-activation"]&&da.set(1);u["allow-popups-to-escape-sandbox"]&&da.set(2);U.crypto&&U.crypto.subtle&&da.set(3);"TextDecoder"in U&&"TextEncoder"in U&&da.set(4);U=Gi(da);ja.bc=U;ja.bih=I.height;ja.biw=I.width;ja.brdim=r.join();b=b.i;
b=(ja.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ja.wgl=!!Uh.WebGLRenderingContext,ja);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var vl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return pl(ul(a))});Xa();navigator.userAgent.indexOf(" (CrKey ");function T(a){a=wl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function xl(a,b){a=wl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function wl(a){return S("EXPERIMENT_FLAGS",{})[a]}
function yl(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var zl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Al(){if(!zl)return null;var a=zl();return"open"in a?a:null}
function Bl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Cl(a,b){"function"===typeof a&&(a=hl(a));return window.setTimeout(a,b)}
;var Dl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(na(Dl),["client_dev_set_cookie"]);var El={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Fl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(na(Dl)),Gl=!1;
function Hl(a,b){b=void 0===b?{}:b;var c=tl(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in El){var f=S(El[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&bc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&S("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());
if(c||!bc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=pl(ul()));return b}
function Il(a){var b=window.location.search,c=bc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&tl(a)&&(c=document.location.hostname);var d=$b(ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ql(b),f={};fb(Fl,function(g){e[g]&&(f[g]=e[g])});
return sl(a,f||{},!1)}
function Jl(a,b){var c=b.format||"JSON";a=Kl(a,b);var d=Ll(a,b),e=!1,f=Ml(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Bl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Nl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Cl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Kl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=sl(a,b||{},!0);return a}
function Ll(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ql(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):ic(e));f=e||f&&!pb(f);!Gl&&f&&"POST"!=b.method&&(Gl=!0,il(Error("AJAX request with postData should use POST")));return e}
function Nl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,jl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ol(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Pl(g)})}d&&Ql(e);
return e}
function Ql(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else Ql(a[b])}}
function Ol(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Pl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Rl(a,b){b.method="POST";b.postParams||(b.postParams={});return Jl(a,b)}
function Ml(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&hl(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Al();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Il(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Hl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Sl=[{Jc:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Jc:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Jc:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ul={Ua:[],Ra:[{callback:Tl,weight:500}]};function Tl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Vl(){this.Ra=[];this.Ua=[]}
var Wl;function Xl(){if(!Wl){var a=Wl=new Vl;a.Ua.length=0;a.Ra.length=0;Ul.Ua&&a.Ua.push.apply(a.Ua,Ul.Ua);Ul.Ra&&a.Ra.push.apply(a.Ra,Ul.Ra)}return Wl}
;var Yl=new M;function Zl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=$l(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=$l(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=$l(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function $l(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function am(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=bm(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Zl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?bm(f+".ve",g,h,k):0;d+=f;d+=bm(e,a[e],b,c);if(500<d)break}}else c[b]=cm(a),d+=c[b].length;else c[b]=cm(a),d+=c[b].length;return d}
function bm(a,b,c,d){c+="."+a;a=cm(b);d[c]=a;return c.length+a.length}
function cm(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function dm(){this.Xe=!0}
function em(){dm.h||(dm.h=new dm);return dm.h}
function fm(a,b){a={};var c=Lg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in cl||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in cl&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return a}
;var gm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function hm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function im(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function jm(a,b,c,d,e){Hg.set(""+a,b,{hc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function km(a){return Hg.get(""+a,void 0)}
function lm(a,b,c){Hg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function mm(){if(!Hg.isEnabled())return!1;if(!Hg.Lb())return!0;Hg.set("TESTCOOKIESENABLED","1",{hc:60});if("1"!==Hg.get("TESTCOOKIESENABLED"))return!1;Hg.remove("TESTCOOKIESENABLED");return!0}
;var nm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",nm);function om(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=km(this.h);a&&this.parse(a)}
var pm;function qm(){pm||(pm=new om);return pm}
m=om.prototype;m.get=function(a,b){rm(a);sm(a);a=void 0!==nm[a]?nm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){rm(a);sm(a);if(null==b)throw Error("ExpectedNotNull");nm[a]=b.toString()};
function tm(a){return!!((um("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){rm(a);sm(a);delete nm[a]};
m.clear=function(){for(var a in nm)delete nm[a]};
function sm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function rm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function um(a){a=void 0!==nm[a]?nm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(nm[d]=c.toString())}};var wm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},xm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function ym(){var a=C.navigator;return a?a.connection:void 0}
function zm(){var a=ym();if(a){var b=wm[a.type||"unknown"]||"CONN_UNKNOWN";a=wm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Am(){var a=ym();if(null!=a&&a.effectiveType)return xm.hasOwnProperty(a.effectiveType)?xm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(na(b))}
x(V,Error);function Bm(){try{return Cm(),!0}catch(a){return!1}}
function Cm(a){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new V("Datasync ID not set",void 0===a?"unknown":a);}
;function Dm(){}
function Em(a,b){return Ei.ab(a,0,b)}
Dm.prototype.oa=function(a,b){return this.ab(a,1,b)};
Dm.prototype.Fb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Fm=xl("web_emulated_idle_callback_delay",300),Gm=1E3/60-3,Hm=[8,5,4,3,2,1,0];
function Im(a){a=void 0===a?{}:a;H.call(this);this.i=[];this.j={};this.Z=this.h=0;this.X=this.m=!1;this.K=[];this.T=this.ea=!1;for(var b=w(Hm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.vc=a.timeout||1;this.B=Gm;this.u=0;this.ha=this.ze.bind(this);this.uc=this.af.bind(this);this.Ba=this.Md.bind(this);this.Ka=this.he.bind(this);this.nb=this.Ce.bind(this);this.na=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.fa=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ha)}
x(Im,H);m=Im.prototype;m.Fb=function(a){var b=Xa();Jm(this,a);a=Xa()-b;this.m||(this.B-=a)};
m.ab=function(a,b,c){++this.Z;if(10===b)return this.Fb(a),this.Z;var d=this.Z;this.j[d]=a;this.m&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.m||(0!==this.h&&Km(this)!==this.u&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function Lm(a){a.K.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Mm(a){return!a.isHidden()&&a.fa}
function Km(a){if(a.i[8].length){if(a.T)return 4;if(Mm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Mm(a)?3:2:1;return 0}
m.Nb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Jm(a,b){try{b()}catch(c){a.Nb(c)}}
function Nm(a){for(var b=w(Hm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.he=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Om(this,b);this.ea=!1};
m.af=function(){Om(this)};
m.Md=function(){Pm(this)};
m.Ce=function(a){this.T=!0;var b=Km(this);4===b&&b!==this.u&&(this.stop(),this.start());Om(this,void 0,a);this.T=!1};
m.ze=function(){this.isHidden()||Pm(this);this.h&&(this.stop(),this.start())};
function Pm(a){a.stop();a.m=!0;for(var b=Xa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Jm(a,e)}Qm(a);a.m=!1;Nm(a)&&a.start();b=Xa()-b;a.B-=b}
function Qm(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function Om(a,b,c){a.T&&4===a.u&&a.h||a.stop();a.m=!0;b=Xa()+(b||a.B);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Nb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Jm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Xa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Jm(a,c)}while(c&&Xa()<b)}a.m=!1;Qm(a);a.B=Gm;Nm(a)&&a.start()}
m.start=function(){this.X=!1;if(0===this.h)switch(this.u=Km(this),this.u){case 1:var a=this.Ka;this.h=this.na?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Fm);break;case 2:this.h=window.setTimeout(this.uc,this.vc);break;case 3:this.h=window.requestAnimationFrame(this.nb);break;case 4:this.h=window.setTimeout(this.Ba,0)}};
m.pause=function(){this.stop();this.X=!0};
m.stop=function(){if(this.h){switch(this.u){case 1:var a=this.h;this.na?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Lm(this);this.stop();this.fa&&document.removeEventListener("visibilitychange",this.ha);H.prototype.S.call(this)};var Rm=E("yt.scheduler.instance.timerIdMap_")||{},Sm=xl("kevlar_tuner_scheduler_soft_state_timer_ms",800),Tm=0,Um=0;function Vm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.aa())a=new Im(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Wm(){Xm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(vc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Xm(){Lm(Vm());for(var a in Rm)Rm.hasOwnProperty(a)&&delete Rm[Number(a)]}
function Ym(a,b,c){if(!c)return c=void 0===c,-Vm().ab(a,b,c);var d=window.setTimeout(function(){var e=Vm().ab(a,b);Rm[d]=e},c);
return d}
function Zm(a){Vm().Fb(a)}
function $m(a){var b=Vm();if(0>a)b.qa(-a);else{var c=Rm[a];c?(b.qa(c),delete Rm[a]):window.clearTimeout(a)}}
function an(){bn()}
function bn(){window.clearTimeout(Tm);Vm().start()}
function cn(){Vm().pause();window.clearTimeout(Tm);Tm=window.setTimeout(an,Sm)}
function dn(){window.clearTimeout(Um);Um=window.setTimeout(function(){en(0)},Sm)}
function en(a){dn();var b=Vm();b.l=a;b.start()}
function fn(a){dn();var b=Vm();b.l>a&&(b.l=a,b.start())}
function hn(){window.clearTimeout(Um);var a=Vm();a.l=0;a.start()}
function jn(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Wm),D("yt.scheduler.instance.addJob",Ym),D("yt.scheduler.instance.addImmediateJob",Zm),D("yt.scheduler.instance.cancelJob",$m),D("yt.scheduler.instance.cancelAllJobs",Xm),D("yt.scheduler.instance.start",bn),D("yt.scheduler.instance.pause",cn),D("yt.scheduler.instance.setPriorityThreshold",en),D("yt.scheduler.instance.enablePriorityThreshold",fn),D("yt.scheduler.instance.clearPriorityThreshold",hn),D("yt.scheduler.initialized",
!0))}
;function kn(){Dm.apply(this,arguments)}
x(kn,Dm);function ln(){kn.h||(kn.h=new kn);return kn.h}
kn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Cl(a,c||0)};
kn.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
kn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
kn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Ei=ln();T("web_scheduler_auto_init")&&jn();function mn(a){var b=new lj;(b=b.isAvailable()?a?new rj(b,a):b:null)||(a=new mj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new gj(a):null;this.i=document.domain||window.location.hostname}
mn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new qh).serialize(b))}catch(f){return}else e=escape(b);jm(a,e,c,this.i)};
mn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=km(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
mn.prototype.remove=function(a){this.h&&this.h.remove(a);lm(a,"/",this.i)};var nn=function(){var a;return function(){a||(a=new mn("ytidb"));return a}}();
function on(){var a;return null==(a=nn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var pn=[],qn,rn=!1;function sn(){var a={};for(qn=new tn(void 0===a.handleError?un:a.handleError,void 0===a.logEvent?vn:a.logEvent);0<pn.length;)switch(a=pn.shift(),a.type){case "ERROR":qn.Nb(a.payload);break;case "EVENT":qn.logEvent(a.eventType,a.payload)}}
function wn(a){rn||(qn?qn.Nb(a):(pn.push({type:"ERROR",payload:a}),10<pn.length&&pn.shift()))}
function xn(a,b){rn||(qn?qn.logEvent(a,b):(pn.push({type:"EVENT",eventType:a,payload:b}),10<pn.length&&pn.shift()))}
;function yn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function zn(a){return a.substr(0,a.indexOf(":"))||a}
;var An=xe||ye;function Bn(a){var b=Ob();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Cn={},Dn=(Cn.AUTH_INVALID="No user identifier specified.",Cn.EXPLICIT_ABORT="Transaction was explicitly aborted.",Cn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Cn.MISSING_INDEX="Index not created.",Cn.MISSING_OBJECT_STORES="Object stores not created.",Cn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Cn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Cn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Cn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Cn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Cn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Cn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Cn),En={},Fn=(En.AUTH_INVALID="ERROR",En.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",En.EXPLICIT_ABORT="IGNORED",En.IDB_NOT_SUPPORTED="ERROR",En.MISSING_INDEX=
"WARNING",En.MISSING_OBJECT_STORES="ERROR",En.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",En.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",En.QUOTA_EXCEEDED="WARNING",En.QUOTA_MAYBE_EXCEEDED="WARNING",En.UNKNOWN_ABORT="WARNING",En.INCOMPATIBLE_DB_VERSION="WARNING",En),Gn={},Hn=(Gn.AUTH_INVALID=!1,Gn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Gn.EXPLICIT_ABORT=!1,Gn.IDB_NOT_SUPPORTED=!1,Gn.MISSING_INDEX=!1,Gn.MISSING_OBJECT_STORES=!1,Gn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Gn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Gn.QUOTA_EXCEEDED=!1,Gn.QUOTA_MAYBE_EXCEEDED=!0,Gn.UNKNOWN_ABORT=!0,Gn.INCOMPATIBLE_DB_VERSION=!1,Gn);function In(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Dn[a]:c;d=void 0===d?Fn[a]:d;e=void 0===e?Hn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,In.prototype)}
x(In,V);function Jn(a,b){In.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Dn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Jn.prototype)}
x(Jn,In);function Kn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Kn.prototype)}
x(Kn,Error);var Ln=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Mn(a,b,c,d){b=zn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof In)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new In("QUOTA_EXCEEDED",a);if(ze&&"UnknownError"===e.name)return new In("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Kn)return new In("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ln.some(function(f){return e.message.includes(f)}))return new In("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new In("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",qd:e.name})];e.level="WARNING";return e}
function Nn(a,b,c){var d=on();return new In("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function On(a){if(!a)throw Error();throw a;}
function Pn(a){return a}
function Qn(a){this.h=a}
function Rn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Rn.all=function(a){return new Rn(new Qn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ub:0};f.ub<a.length;f={ub:f.ub},++f.ub)Rn.resolve(a[f.ub]).then(function(g){return function(h){d[g.ub]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Rn.resolve=function(a){return new Rn(new Qn(function(b,c){a instanceof Rn?a.then(b,c):b(a)}))};
Rn.reject=function(a){return new Rn(new Qn(function(b,c){c(a)}))};
Rn.prototype.then=function(a,b){var c=this,d=null!=a?a:Pn,e=null!=b?b:On;return new Rn(new Qn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Sn(c,c,d,f,g)}),c.i.push(function(){Tn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Sn(c,c,d,f,g):"REJECTED"===c.state.status&&Tn(c,c,e,f,g)}))};
Rn.prototype.catch=function(a){return this.then(void 0,a)};
function Sn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Rn?Un(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Rn?Un(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Un(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Rn?Un(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Vn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Wn(a){return new Promise(function(b,c){Vn(a,b,c)})}
function Xn(a){return new Rn(new Qn(function(b,c){Vn(a,b,c)}))}
;function Yn(a,b){return new Rn(new Qn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Zn=window,W=Zn.ytcsi&&Zn.ytcsi.now?Zn.ytcsi.now:Zn.performance&&Zn.performance.timing&&Zn.performance.now&&Zn.performance.timing.navigationStart?function(){return Zn.performance.timing.navigationStart+Zn.performance.now()}:function(){return(new Date).getTime()};function $n(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=$n.prototype;m.add=function(a,b,c){return ao(this,[a],{mode:"readwrite",ja:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return ao(this,[a],{mode:"readwrite",ja:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return ao(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).count(b)})};
function bo(a,b,c){a=a.h.createObjectStore(b,c);return new co(a)}
m.delete=function(a,b){return ao(this,[a],{mode:"readwrite",ja:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return ao(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).get(b)})};
function eo(a,b,c){return ao(a,[b],{mode:"readwrite",ja:!0},function(d){d=d.objectStore(b);return Xn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function ao(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,u,y;return A(function(z){switch(z.h){case 1:var G={mode:"readonly",ja:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ja?3:1;g=0;case 2:if(h){z.A(4);break}g++;k=Math.round(W());Aa(z,5);l=a.h.transaction(b,e.mode);G=z.yield;var L=new fo(l);L=go(L,d);return G.call(z,L,7);case 7:return n=z.i,p=Math.round(W()),ho(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Ba(z);r=Math.round(W());u=Mn(t,
a.h.name,b.join(),a.h.version);if((y=u instanceof In&&!u.h)||g>=f)ho(a,k,r,g,u,b.join(),e),h=u;z.A(2);break;case 4:return z.return(Promise.reject(h))}})}
function ho(a,b,c,d,e,f,g){b=c-b;e?(e instanceof In&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&xn("QUOTA_EXCEEDED",{dbName:zn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof In&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),xn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),io(a,!1,d,f,b,g.tag),wn(e)):io(a,!0,d,f,b,g.tag)}
function io(a,b,c,d,e,f){xn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function co(a){this.h=a}
m=co.prototype;m.add=function(a,b){return Xn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Xn(this.h.clear()).then(function(){})};
function jo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Xn(this.h.count(a))};
function ko(a,b){return lo(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?ko(this,a):Xn(this.h.delete(a))};
m.get=function(a){return Xn(this.h.get(a))};
m.index=function(a){try{return new mo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Kn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function lo(a,b,c){a=a.h.openCursor(b.query,b.direction);return no(a).then(function(d){return Yn(d,c)})}
function fo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=In;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function go(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
fo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new In("EXPLICIT_ABORT");};
fo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new co(a),this.i.set(a,b));return b};
function mo(a){this.h=a}
m=mo.prototype;m.count=function(a){return Xn(this.h.count(a))};
m.delete=function(a){return oo(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Xn(this.h.get(a))};
m.getKey=function(a){return Xn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function oo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return no(a).then(function(d){return Yn(d,c)})}
function po(a,b){this.request=a;this.cursor=b}
function no(a){return Xn(a).then(function(b){return b?new po(a,b):null})}
m=po.prototype;m.advance=function(a){this.cursor.advance(a);return no(this.request)};
m.continue=function(a){this.cursor.continue(a);return no(this.request)};
m.delete=function(){return Xn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Xn(this.cursor.update(a))};function qo(a,b,c){return new Promise(function(d,e){function f(){t||(t=new $n(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Od,k=c.blocking,l=c.Ye,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&xn("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:zn(a)});var u=f(),y=new fo(g.transaction);
n&&n(u,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){xn("IDB_UNEXPECTEDLY_CLOSED",{dbName:zn(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ro(a,b,c){c=void 0===c?{}:c;return qo(a,b,c)}
function so(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Od)&&c.addEventListener("blocked",function(){e()}),g.yield(Wn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),Mn(f,a,"",-1);})}
;function to(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
to.prototype.i=function(a,b,c){c=void 0===c?{}:c;return ro(a,b,c)};
to.prototype.delete=function(a){a=void 0===a?{}:a;return so(this.name,a)};
function uo(a,b){return new In("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function vo(a,b){if(!b)throw Nn("openWithToken",zn(a.name));return a.open()}
to.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,u;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,G=[],L=w(Object.keys(z.Bb)),K=L.next();!K.done;K=L.next()){K=K.value;var R=z.Bb[K],O=void 0===R.Fe?Number.MAX_VALUE:R.Fe;!(h.h.version>=R.Gb)||h.h.version>=O||h.h.objectStoreNames.contains(K)||G.push(K)}k=G;if(0===k.length){y.A(5);break}l=Object.keys(c.options.Bb);n=h.objectStoreNames();
if(c.m<xl("ytidb_reopen_db_retries",0))return c.m++,h.close(),wn(new In("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<xl("ytidb_remake_db_retries",1))){y.A(6);break}c.l++;return y.yield(c.delete(),7);case 7:return wn(new In("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Jn(n,l);case 5:return y.return(h);case 2:p=Ba(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.A(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,uo(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!T("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Mn(p,c.name,"",null!=(u=c.options.version)?u:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw uo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ye:b,upgrade:this.options.upgrade};return this.h=d=a()};var wo=new to("YtIdbMeta",{Bb:{databases:{Gb:1}},upgrade:function(a,b){b(1)&&bo(a,"databases",{keyPath:"actualName"})}});
function xo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(vo(wo,b),2);c=d.i;return d.return(ao(c,["databases"],{ja:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Xn(f.h.put(a,void 0)).then(function(){})})}))})}
function yo(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(vo(wo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function zo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(vo(wo,b),2)):3!=e.h?(d=e.i,e.yield(ao(d,["databases"],{ja:!0,mode:"readonly"},function(f){c.length=0;return lo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Ao(a){return zo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Bo(a,b,c){return zo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Co(a){var b,c;return A(function(d){if(1==d.h)return b=Cm("YtIdbMeta hasAnyMeta other"),d.yield(zo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Do,Eo=new function(){}(new function(){});
function Fo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=on();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=An)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||Jc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(xo(d,Eo),4);case 4:return e.yield(yo("yt-idb-test-do-not-use",Eo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Go(){if(void 0!==Do)return Do;rn=!0;return Do=Fo().then(function(a){rn=!1;var b;if(null!=(b=nn())&&b.h){var c;b={hasSucceededOnce:(null==(c=on())?void 0:c.hasSucceededOnce)||a};var d;null==(d=nn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Ho(){return E("ytglobal.idbToken_")||void 0}
function Io(){var a=Ho();return a?Promise.resolve(a):Go().then(function(b){(b=b?Eo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Jo=0;function Ko(a,b){Jo||(Jo=Ei.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Io(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(Bo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(so(f.actualName),7);case 7:return h.yield(yo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),wn(g),d=!1;case 4:Ei.qa(Jo),Jo=0,d&&Ko(a,b),h.h=0}})}))}
function Lo(){var a;return A(function(b){return 1==b.h?b.yield(Io(),2):(a=b.i)?b.return(Co(a)):b.return(!1)})}
new Sh;function Mo(a){if(!Bm())throw a=new In("AUTH_INVALID",{dbName:a}),wn(a),a;var b=Cm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function No(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Io(),2);case 2:g=n.i;if(!g)throw h=Nn("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),wn(h),h;yn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Mo(a);Aa(n,3);return n.yield(xo(k,g),5);case 5:return n.yield(ro(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(yo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function Oo(a,b,c){c=void 0===c?{}:c;return No(a,b,!1,c)}
function Po(a,b,c){c=void 0===c?{}:c;return No(a,b,!0,c)}
function Qo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(Io(),2);if(3!=e.h){c=e.i;if(!c)return e.return();yn(a);d=Mo(a);return e.yield(so(d.actualName,b),3)}return e.yield(yo(d.actualName,c),0)})}
function Ro(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(so(d.actualName,b),2):e.yield(yo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function So(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(Io(),2);if(3!=d.h){b=d.i;if(!b)return d.return();yn("LogsDatabaseV2");return d.yield(Ao(b),3)}c=d.i;return d.yield(Ro(c,a,b),0)})}
function To(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(Io(),2);if(3!=d.h){c=d.i;if(!c)return d.return();yn(a);return d.yield(so(a,b),3)}return d.yield(yo(a,c),0)})}
;function Uo(a,b){to.call(this,a,b);this.options=b;yn(a)}
x(Uo,to);function Vo(a,b){var c;return function(){c||(c=new Uo(a,b));return c}}
Uo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.qc?Po:Oo)(a,b,Object.assign({},c))};
Uo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.qc?To:Qo)(this.name,a)};
function Wo(a,b){return Vo(a,b)}
;var Xo={},Yo=Wo("ytGcfConfig",{Bb:(Xo.coldConfigStore={Gb:1},Xo.hotConfigStore={Gb:1},Xo),qc:!1,upgrade:function(a,b){b(1)&&(jo(bo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),jo(bo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Zo(a){return vo(Yo(),a)}
function $o(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Zo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(eo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function ap(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Zo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(eo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function bp(a){var b,c;return A(function(d){return 1==d.h?d.yield(Zo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(ao(b,["coldConfigStore"],{mode:"readwrite",ja:!0},function(e){return oo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function cp(a){var b,c;return A(function(d){return 1==d.h?d.yield(Zo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(ao(b,["hotConfigStore"],{mode:"readwrite",ja:!0},function(e){return oo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function dp(){H.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(na(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(dp,H);dp.prototype.S=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;H.prototype.S.call(this)};function ep(){this.h=0;this.i=new dp}
function fp(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:S("RAW_HOT_CONFIG_GROUP")}
function gp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.A(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Ho();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(cp(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield($o(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function hp(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!T("start_client_gcf"))return h.A(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Ho())?c?h.A(4):h.yield(bp(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(ap(c,b,g,d),0)})}
function ip(){if(!ep.h){var a=new ep;ep.h=a}a=ep.h;var b=W()-a.h;if(!(0!==a.h&&b<xl("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
ep.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function jp(){return"INNERTUBE_API_KEY"in cl&&"INNERTUBE_API_VERSION"in cl}
function kp(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),je:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ld:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Sf:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),le:S("INNERTUBE_CONTEXT_HL"),ke:S("INNERTUBE_CONTEXT_GL"),me:S("INNERTUBE_HOST_OVERRIDE")||"",oe:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ne:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function lp(a){var b={client:{hl:a.le,gl:a.ke,clientName:a.ld,clientVersion:a.innertubeContextClientVersion,configInfo:a.je}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=yl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.ld;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=im()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=zm())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=Am())&&
b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=ip())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=w(Object.entries(ql(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function mp(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Mf:(a=fm(em()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function np(a,b){this.version=a;this.args=b}
np.prototype.serialize=function(){return{version:this.version,args:this.args}};function op(a,b){this.topic=a;this.h=b}
op.prototype.toString=function(){return this.topic};var pp=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Eb;M.prototype.publish=M.prototype.Za;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",pp);var qp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",qp);var rp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",rp);var sp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",sp);
D("ytPubsub2Pubsub2SkipSubKey",null);function tp(a,b){var c=up();c&&c.publish.call(c,a.toString(),a,b)}
function vp(a){var b=wp,c=up();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(qp[d])try{if(f&&b instanceof op&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var l=new h;h.Xa=l.version}var n=h.Xa}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var u=Array(r);for(k=0;k<r;k++)u[k]=t[k];var y=u}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){il(z)}},sp[b.toString()]?E("yt.scheduler.instance")?Ei.oa(g):Cl(g,0):g())});
qp[d]=!0;rp[b.toString()]||(rp[b.toString()]=[]);rp[b.toString()].push(d);return d}
function xp(){var a=yp,b=vp(function(c){a.apply(void 0,arguments);zp(b)});
return b}
function zp(a){var b=up();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete qp[c]}))}
function up(){return E("ytPubsub2Pubsub2Instance")}
;function Ap(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&tp("meta_logging_csi_event",{timerName:a,lg:b})}
;var Bp=void 0,Cp=void 0;function Dp(){Cp||(Cp=Fk(S("WORKER_SERIALIZATION_URL")));return Cp||void 0}
function Ep(){var a=Dp();Bp||void 0===a||(Bp=new Worker(Fb(a),void 0));return Bp}
;var Fp=xl("max_body_size_to_compress",5E5),Gp=xl("min_body_size_to_compress",500),Hp=!0,Ip=0,Jp=0,Kp=xl("compression_performance_threshold_lr",250),Lp=xl("slow_compressions_before_abandon_count",4),Mp=!1,Np=new Map,Op=1,Pp=!0;function Qp(){if("function"===typeof Worker&&Dp()&&!Mp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Np.get(c.key);d&&(Rp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Np.delete(c.key))}},b=Ep();
b&&(b.addEventListener("message",a),b.onerror=function(){Np.clear()},Mp=!0)}}
function Sp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Hp)try{var g=Tp(b);if(null!=g&&(g>Fp||g<Gp))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Pp||!T("initial_gzip_use_main_thread"))){Mp||Qp();var h=Ep();if(h&&!e){Np.set(Op,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Op});Op++;return}}var k=Ek(zi(b));Rp(k,f,a,c,d)}}catch(l){jl(l),d(a,c)}else d(a,c)}
function Rp(a,b,c,d,e){Pp=!1;var f=W();b.ticks.gelc=f;Jp++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Kp&&(Ip++,T("abandon_compression_after_N_slow_zips")?Jp===xl("compression_disable_point")&&Ip>Lp&&(Hp=!1):Hp=!1);Up(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Vp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Hp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Tp(g);if(null!=h&&(h>Fp||h<Gp))return a;f=Ek(zi(g),b?{level:1}:void 0);var k=W();e.ticks.gelc=k;if(b){Jp++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Kp)if(Ip++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Ip/Jp;var l=Lp/xl("compression_disable_point");0<Jp&&0===Jp%xl("compression_disable_point")&&b>=l&&(Hp=!1)}else Hp=!1;Up(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return jl(n),a}}else return a}
function Tp(a){try{return(new Blob(a.split(""))).size}catch(b){return jl(b),null}}
function Up(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Ap("gel_compression",a,{sampleRate:.1})}
;function Wp(a){a=Object.assign({},a);delete a.Authorization;var b=Lg();if(b){var c=new Li;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Ce(c.digest(),3)}return a}
;var Xp;function Yp(){Xp||(Xp=new mn("yt.innertube"));return Xp}
function Zp(a,b,c,d){if(d)return null;d=Yp().get("nextId",!0)||1;var e=Yp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Wp(c),requestTime:Math.round(W())};Yp().set("nextId",d+1,86400,!0);Yp().set("requests",e,86400,!0);return d}
function $p(a){var b=Yp().get("requests",!0)||{};delete b[a];Yp().set("requests",b,86400,!0)}
function aq(a){var b=Yp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Wp(mp(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),bq(a,d.method,e,{}));delete b[c]}}Yp().set("requests",b,86400,!0)}}
;function cq(a){this.Wb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.sb=function(){};
this.now=Date.now;this.Kb=!1;var b;this.Cd=null!=(b=a.Cd)?b:100;var c;this.wd=null!=(c=a.wd)?c:1;var d;this.ud=null!=(d=a.ud)?d:2592E6;var e;this.sd=null!=(e=a.sd)?e:12E4;var f;this.vd=null!=(f=a.vd)?f:5E3;var g;this.U=null!=(g=a.U)?g:void 0;this.cc=!!a.cc;var h;this.Zb=null!=(h=a.Zb)?h:.1;var k;this.mc=null!=(k=a.mc)?k:10;a.handleError&&(this.handleError=a.handleError);a.sb&&(this.sb=a.sb);a.Kb&&(this.Kb=a.Kb);a.Wb&&(this.Wb=a.Wb);this.V=a.V;this.Fa=a.Fa;this.da=a.da;this.ba=a.ba;this.sendFn=a.sendFn;
this.Mc=a.Mc;this.Lc=a.Lc;dq(this)&&(!this.V||this.V("networkless_logging"))&&eq(this)}
function eq(a){dq(a)&&!a.Kb&&(a.h=!0,a.cc&&Math.random()<=a.Zb&&a.da.Qd(a.U),fq(a),a.ba.wa()&&a.Tb(),a.ba.listen(a.Mc,a.Tb.bind(a)),a.ba.listen(a.Lc,a.Yc.bind(a)))}
m=cq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(dq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.U).then(function(e){d.id=e;c.ba.wa()&&gq(c,d)}).catch(function(e){gq(c,d);
hq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(dq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.V&&this.V("nwl_skip_retry")&&(e.skipRetry=c);if(this.ba.wa()||this.V&&this.V("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.da.set(e,d.U).catch(function(l){hq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.U).catch(function(g){d.sendFn(a,b,e.skipRetry);
hq(d,g)})}else this.sendFn(a,b,this.V&&this.V("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(dq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.pb(d.id,c.U):e=!0;c.ba.gb&&c.V&&c.V("vss_network_hint")&&c.ba.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.U).then(function(g){d.id=g;e&&c.da.pb(d.id,c.U)}).catch(function(g){hq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Tb=function(){var a=this;if(!dq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Fa.oa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.da.hd("NEW",a.U),2);if(3!=c.h)return b=c.i,b?c.yield(gq(a,b),3):(a.Yc(),c.return());a.i&&(a.i=0,a.Tb());c.h=0})},this.Cd))};
m.Yc=function(){this.Fa.qa(this.i);this.i=0};
function gq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!dq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.A(2);break}return d.yield(a.da.re(b.id,a.U),3);case 3:(c=d.i)||a.sb(Error("The request cannot be found in the database."));case 2:if(iq(a,b,a.ud)){d.A(4);break}a.sb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.A(5);break}return d.yield(a.da.pb(b.id,a.U),5);case 5:return d.return();case 4:b.skipRetry||(b=jq(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||void 0===b.id){d.A(8);break}return d.yield(a.da.pb(b.id,a.U),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function jq(a,b){if(!dq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=kq(f);(h=lq(f))&&a.V&&a.V("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.V&&a.V("nwl_consider_error_code")&&g||a.V&&!a.V("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.mc)){n.A(2);break}if(!a.ba.pc){n.A(3);break}return n.yield(a.ba.pc(),3);case 3:if(a.ba.wa()){n.A(2);break}c(e,f);if(!a.V||!a.V("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.A(6);
break}return n.yield(a.da.Oc(b.id,a.U,!1),6);case 6:return n.return();case 2:if(a.V&&a.V("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.mc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.A(8);break}return b.sendCount<a.wd?n.yield(a.da.Oc(b.id,a.U,!0,h?!1:void 0),12):n.yield(a.da.pb(b.id,a.U),8);case 12:a.Fa.oa(function(){a.ba.wa()&&a.Tb()},a.vd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):h.yield(a.da.pb(b.id,a.U),2);a.ba.gb&&a.V&&a.V("vss_network_hint")&&a.ba.gb(!0);d(e,f);h.h=0})};
return b}
function iq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function fq(a){if(!dq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.hd("QUEUED",a.U).then(function(b){b&&!iq(a,b,a.sd)?a.Fa.oa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.A(2):c.yield(a.da.Oc(b.id,a.U),2);fq(a);c.h=0})}):a.ba.wa()&&a.Tb()})}
function hq(a,b){a.Id&&!a.ba.wa()?a.Id(b):a.handleError(b)}
function dq(a){return!!a.U||a.Wb}
function kq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function lq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var mq;
function nq(){if(mq)return mq();var a={};mq=Wo("LogsDatabaseV2",{Bb:(a.LogsRequestsStore={Gb:2},a),qc:!1,upgrade:function(b,c,d){c(2)&&bo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),jo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return mq()}
;function oq(a){return vo(nq(),a)}
function pq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(oq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(eo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();qq(c);return g.return(f)})}
function rq(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(oq(b),2);if(3!=l.h)return d=l.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(ao(d,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(n){return oo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=W();qq(c);return l.return(k)})}
function sq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(oq(b),2);c=d.i;return d.return(ao(c,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Xn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function tq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(oq(b),2);e=f.i;return f.return(ao(e,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Xn(h.h.put(k,void 0)).then(function(){return k})):Rn.resolve(void 0)})}))})}
function uq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(oq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function vq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(oq(a),2);b=d.i;c=W()-2592E6;return d.yield(ao(b,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){return lo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function wq(){A(function(a){return a.yield(So(),0)})}
function qq(a){T("nwl_csi_killswitch")||Ap("networkless_performance",a,{sampleRate:1})}
;var xq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494};var yq={},zq=Wo("ServiceWorkerLogsDatabase",{Bb:(yq.SWHealthLog={Gb:1},yq),qc:!0,upgrade:function(a,b){b(1)&&jo(bo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Aq(a){return vo(zq(),a)}
function Bq(a){var b,c;A(function(d){if(1==d.h)return d.yield(Aq(a),2);b=d.i;c=W()-2592E6;return d.yield(ao(b,["SWHealthLog"],{mode:"readwrite",ja:!0},function(e){return lo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Cq(a){var b;return A(function(c){if(1==c.h)return c.yield(Aq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Dq={},Eq=0;function Fq(a){var b=new Image,c=""+Eq++;Dq[c]=b;b.onload=b.onerror=function(){delete Dq[c]};
b.src=a}
;function Gq(){this.h=new Map;this.i=!1}
function Hq(){if(!Gq.h){var a=E("yt.networkRequestMonitor.instance")||new Gq;D("yt.networkRequestMonitor.instance",a);Gq.h=a}return Gq.h}
Gq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Gq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Gq.prototype.removeParams=function(a){return a.split("?")[0]};
Gq.prototype.removeParams=Gq.prototype.removeParams;Gq.prototype.isEndpointCFR=Gq.prototype.isEndpointCFR;Gq.prototype.requestComplete=Gq.prototype.requestComplete;Gq.getInstance=Hq;var Iq;function Jq(){Iq||(Iq=new mn("yt.offline"));return Iq}
function Kq(a){if(T("offline_error_handling")){var b=Jq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Jq().set("errors",b,2592E3,!0)}}
;function Lq(){ud.call(this);var a=this;this.j=!1;this.i=Di();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Jq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;il(d)}Jq().set("errors",{},2592E3,!0)}}})}
x(Lq,ud);function Mq(){if(!Lq.h){var a=E("yt.networkStatusManager.instance")||new Lq;D("yt.networkStatusManager.instance",a);Lq.h=a}return Lq.h}
m=Lq.prototype;m.wa=function(){return this.i.wa()};
m.gb=function(a){this.i.i=a};
m.de=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Vd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.pc=function(a){a=Bi(this.i,a);a.then(function(b){T("use_cfr_monitor")&&Hq().requestComplete("generate_204",b)});
return a};
Lq.prototype.sendNetworkCheckRequest=Lq.prototype.pc;Lq.prototype.listen=Lq.prototype.listen;Lq.prototype.enableErrorFlushing=Lq.prototype.Vd;Lq.prototype.getWindowStatus=Lq.prototype.de;Lq.prototype.networkStatusHint=Lq.prototype.gb;Lq.prototype.isNetworkAvailable=Lq.prototype.wa;Lq.getInstance=Mq;function Nq(a){a=void 0===a?{}:a;ud.call(this);var b=this;this.i=this.m=0;this.j=Mq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Oq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Oq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){vd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){vd(b,"publicytnetworkstatus-offline")})))}
x(Nq,ud);Nq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Nq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Nq.prototype.pc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Hq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Oq(a,b){a.rateLimit?a.i?(Ei.qa(a.m),a.m=Ei.oa(function(){a.l!==b&&(vd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(vd(a,b),a.l=b,a.i=W()):vd(a,b)}
;var Pq;function Qq(){var a=cq.call;Pq||(Pq=new Nq({Xf:!0,Qf:!0}));a.call(cq,this,{da:{Qd:vq,pb:uq,hd:rq,re:sq,Oc:tq,set:pq},ba:Pq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;jl(new V(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else il(b)},
sb:jl,sendFn:Rq,now:W,Id:Kq,Fa:ln(),Mc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",cc:!0,Zb:.1,mc:xl("potential_esf_error_limit",10),V:T,Kb:!(Bm()&&Sq())});this.j=new Sh;T("networkless_immediately_drop_all_requests")&&wq();To("LogsDatabaseV2")}
x(Qq,cq);function Tq(){var a=E("yt.networklessRequestController.instance");a||(a=new Qq,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Io().then(function(b){a.U=b;eq(a);a.j.resolve();a.cc&&Math.random()<=a.Zb&&a.U&&Bq(a.U);T("networkless_immediately_drop_sw_health_store")&&Uq(a)}));
return a}
Qq.prototype.writeThenSend=function(a,b){b||(b={});Bm()||(this.h=!1);cq.prototype.writeThenSend.call(this,a,b)};
Qq.prototype.sendThenWrite=function(a,b,c){b||(b={});Bm()||(this.h=!1);cq.prototype.sendThenWrite.call(this,a,b,c)};
Qq.prototype.sendAndWrite=function(a,b){b||(b={});Bm()||(this.h=!1);cq.prototype.sendAndWrite.call(this,a,b)};
Qq.prototype.awaitInitialization=function(){return this.j.promise};
function Uq(a){var b;A(function(c){if(!a.U)throw b=Nn("clearSWHealthLogsDb"),b;return c.return(Cq(a.U).catch(function(d){a.handleError(d)}))})}
function Rq(a,b,c,d){d=void 0===d?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Vq(a,b);if(T("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Ml(a,void 0,"POST",f);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||
h)Ml(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new bb({url:a});if(k.j&&k.i||k.l){var l=$b(ac(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(oc),t=nc(a,0,"ri",p);if(0>t)var r=null;else{var u=a.indexOf("&",t);if(0>u||u>p)u=p;r=decodeURIComponent(a.slice(t+3,-1!==u?u:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(G){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(G){}z=!1}c=z?!0:!1}else c=
!1;c||Fq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Sp(a,b.postBody,b,Jl,d)):Sp(a,JSON.stringify(b.postParams),b,Rl,d):Jl(a,b)}
function Vq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Hq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Hq().requestComplete(a,!0);d(e,f)}}
function Sq(){return"www.youtube-nocookie.com"!==bc(document.location.toString())}
;var Wq=!1,Xq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Wq};D("ytNetworklessLoggingInitializationOptions",Xq);function Yq(){var a;A(function(b){if(1==b.h)return b.yield(Io(),2);a=b.i;if(!a||!Bm()&&!T("nwl_init_require_datasync_id_killswitch")||!Sq())return b.A(0);Wq=!0;Xq.isNwlInitialized=Wq;return b.yield(Tq().awaitInitialization(),0)})}
;function Zq(a){var b=this;this.config_=null;a?this.config_=a:jp()&&(this.config_=kp());Em(function(){aq(b)},5E3)}
Zq.prototype.isReady=function(){!this.config_&&jp()&&(this.config_=kp());return!!this.config_};
function bq(a,b,c,d){function e(u){u=void 0===u?!1:u;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(u||T("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Zp(b,c,l,k)),y)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(R,O){$p(y);z(R,O)};
c.onFetchSuccess=function(R,O){$p(y);G(R,O)}}try{if(u&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Tq().writeThenSend(r,g):Tq().sendAndWrite(r,g);
else if(d.compress){var L=!d.networklessOptions.writeThenSend;if(g.postBody){var K=g.postBody;"string"!==typeof K&&(K=JSON.stringify(g.postBody));Sp(r,K,g,Jl,L)}else Sp(r,JSON.stringify(g.postParams),g,Rl,L)}else T("web_all_payloads_via_jspb")?Jl(r,g):Rl(r,g)}catch(R){if("InvalidAccessError"==R.name)y&&($p(y),y=0),jl(Error("An extension is blocking network request."));else throw R;}y&&Em(function(){aq(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&jl(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);il(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(u,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,y){if(d.onError)d.onError(y)},
onFetchError:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.me)&&(h=f);var k=a.config_.oe||!1,l=mp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.ne&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=sl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Xq.isNwlInitialized:Wq)?Go().then(function(u){e(u)}):e(!1)}
;var $q=0,ar=Lc?"webkit":Kc?"moz":Ic?"ms":Hc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++$q});var br={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function cr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in br||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function dr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
cr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
cr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
cr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",ob);var er=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",er);
function fr(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var gr=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function hr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=fr(a,b,c,d);if(e)return e;e=++er.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new cr(h);if(!Ed(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new cr(h);
h.currentTarget=a;return c.call(a,h)};
g=hl(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),gr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
function ir(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?gr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
;function jr(a){this.B=a;this.h=null;this.l=0;this.u=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.T=hr(window,"mousemove",Va(this.X,this));a=Va(this.K,this);"function"===typeof a&&(a=hl(a));this.Z=window.setInterval(a,25)}
Ya(jr,H);jr.prototype.X=function(a){void 0===a.h&&dr(a);var b=a.h;void 0===a.i&&dr(a);this.h=new Ad(b,a.i)};
jr.prototype.K=function(){if(this.h){var a=W();if(0!=this.l){var b=this.u,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.B();this.m=d}this.l=a;this.u=this.h;this.j=(this.j+1)%4}};
jr.prototype.S=function(){window.clearInterval(this.Z);ir(this.T)};var kr={};
function lr(a){var b=void 0===a?{}:a;a=void 0===b.Be?!1:b.Be;b=void 0===b.Wd?!0:b.Wd;if(null==E("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&mr();hr(document,"keydown",mr);hr(document,"keyup",mr);hr(document,"mousedown",mr);hr(document,"mouseup",mr);a?hr(window,"touchmove",function(){nr("touchmove",200)},{passive:!0}):(hr(window,"resize",function(){nr("resize",200)}),b&&hr(window,"scroll",function(){nr("scroll",200)}));
new jr(function(){nr("mouse",100)});
hr(document,"touchstart",mr,{passive:!0});hr(document,"touchend",mr,{passive:!0})}}
function nr(a,b){kr[a]||(kr[a]=!0,Ei.oa(function(){mr();kr[a]=!1},b))}
function mr(){null==E("_lact",window)&&lr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function or(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var pr=C.ytPubsubPubsubInstance||new M,qr=C.ytPubsubPubsubSubscribedKeys||{},rr=C.ytPubsubPubsubTopicToKeys||{},sr=C.ytPubsubPubsubIsSynchronous||{};function tr(a,b){var c=ur();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){qr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{sr[a]?f():Cl(f,0)}catch(g){il(g)}},void 0);
qr[d]=!0;rr[a]||(rr[a]=[]);rr[a].push(d);return d}return 0}
function vr(a){var b=ur();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete qr[c]}))}
function wr(a,b){var c=ur();c&&c.publish.apply(c,arguments)}
function xr(a){var b=ur();if(b)if(b.clear(a),a)yr(a);else for(var c in rr)yr(c)}
function ur(){return C.ytPubsubPubsubInstance}
function yr(a){rr[a]&&(a=rr[a],fb(a,function(b){qr[b]&&delete qr[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Eb;M.prototype.publish=M.prototype.Za;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",pr);D("ytPubsubPubsubTopicToKeys",rr);D("ytPubsubPubsubIsSynchronous",sr);D("ytPubsubPubsubSubscribedKeys",qr);var zr=Symbol("injectionDeps");function Ar(a){this.name=a}
Ar.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Br(a){this.key=a}
function Cr(){this.i=new Map;this.j=new Map;this.h=new Map}
function Dr(a,b){a.i.set(b.oc,b);var c=a.j.get(b.oc);c&&c.gg(a.resolve(b.oc))}
Cr.prototype.resolve=function(a){return a instanceof Br?Er(this,a.key,[],!0):Er(this,a,[])};
function Er(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Fd)var e=d.Fd;else if(d.ef)e=d[zr]?Fr(a,d[zr],c):[],e=d.ef.apply(d,na(e));else if(d.Ed){e=d.Ed;var f=e[zr]?Fr(a,e[zr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(na(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.kg||a.h.set(b,e);return e}
function Fr(a,b,c){return b?b.map(function(d){return d instanceof Br?Er(a,d.key,c,!0):Er(a,d,c)}):[]}
;var Gr;function Hr(){Gr||(Gr=new Cr);return Gr}
;var Ir=window;function Jr(){var a,b;return"h5vcc"in Ir&&(null==(a=Ir.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Ir.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Ir&&Ir.performance.mark&&Ir.performance.measure?2:0}
function Kr(a){switch(Jr()){case 1:Ir.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ir.performance.mark(a+"-start");break;case 0:break;default:ki()}}
function Lr(a){switch(Jr()){case 1:Ir.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Ir.performance.mark(c);Ir.performance.measure(a,b,c);break;case 0:break;default:ki()}}
;var Mr=T("web_enable_lifecycle_monitoring")&&0!==Jr(),Nr=T("web_enable_lifecycle_monitoring");function Or(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?ln():d;this.j=c;this.scheduler=d;this.i=new Sh;this.h=a;for(a={cb:0};a.cb<this.h.length;a={Ob:a.Ob,cb:a.cb},a.cb++)a.Ob=this.h[a.cb],c=function(e){return function(){e.Ob.Gc();b.h[e.cb].nc=!0;b.h.every(function(f){return!0===f.nc})&&b.i.resolve()}}(a),d=this.getPriority(a.Ob),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.Ob,{Gc:c,
jobId:d})}
function Pr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.nc||(a.scheduler.qa(c.jobId),a.scheduler.ab(c.Gc,10))}
Or.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.nc||this.scheduler.qa(b.jobId),b.nc=!0;this.i.resolve()};
Or.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Qr(a){this.state=a;this.plugins=[];this.l=void 0;this.u={};Mr&&Kr(this.state)}
m=Qr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Mr&&Lr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Pr(this.j),this.j=void 0);Rr(this,a,b);this.state=a;Mr&&Kr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Sr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Sr(a,b){var c=b.filter(function(e){return 10===Tr(a,e)}),d=b.filter(function(e){return 10!==Tr(a,e)});
return a.u.jg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Ie.apply(a,[c].concat(na(e))),2);a.zd.apply(a,[d].concat(na(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Je.apply(a,[c].concat(na(e)));a.zd.apply(a,[d].concat(na(e)))}}
m.Je=function(a){for(var b=B.apply(1,arguments),c=ln(),d=w(a),e=d.next(),f={};!e.done;f={xb:f.xb},e=d.next())f.xb=e.value,c.Fb(function(g){return function(){Ur(g.xb.name);g.xb.callback.apply(g.xb,na(b));Vr(g.xb.name)}}(f))};
m.Ie=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=ln(),d=w(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.A(0);f.eb=e.value;f.Hb=void 0;g=function(k){return function(){Ur(k.eb.name);var l=k.eb.callback.apply(k.eb,na(b));"function"===typeof(null==l?void 0:l.then)?k.Hb=l.then(function(){Vr(k.eb.name)}):Vr(k.eb.name)}}(f);
c.Fb(g);return f.Hb?h.yield(f.Hb,3):h.A(3)}f={eb:f.eb,Hb:f.Hb};e=d.next();return h.A(2)})};
m.zd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Gc:function(){Ur(e.name);e.callback.apply(e,na(b));Vr(e.name)},
priority:Tr(c,e)}});
d.length&&(this.j=new Or(d))};
function Tr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Ur(a){Mr&&a&&Kr(a)}
function Vr(a){Mr&&a&&Lr(a)}
function Rr(a,b,c){Nr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ha.Object.defineProperties(Qr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Wr(a){Qr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Xr;x(Wr,Qr);Wr.prototype.i=function(a,b){var c=this;this.h=Em(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Wr.prototype.m=function(a,b){this.h&&(Ei.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Yr(){Xr||(Xr=new Wr);return Xr}
;var Zr=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Zr});function $r(){this.store={};this.h={}}
$r.prototype.storePayload=function(a,b){a=as(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
$r.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=bs(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,na(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,na(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,na(this.smartExtractMatchingEntries(a))));return c};
$r.prototype.extractMatchingEntries=function(a){a=bs(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,na(this.store[a[c]])),delete this.store[a[c]]);return b};
$r.prototype.getSequenceCount=function(a){a=bs(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function bs(a,b){var c=as(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&as(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(cs(b.auth,g[0])){var h=b.isJspb;cs(void 0===h?"undefined":h?"true":"false",g[1])&&cs(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),cs(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function cs(a,b){return void 0===a||"undefined"===a?!0:a===b}
$r.prototype.getSequenceCount=$r.prototype.getSequenceCount;$r.prototype.extractMatchingEntries=$r.prototype.extractMatchingEntries;$r.prototype.smartExtractMatchingEntries=$r.prototype.smartExtractMatchingEntries;$r.prototype.storePayload=$r.prototype.storePayload;function as(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function ds(a,b){if(a)return a[b.name]}
;var es=xl("initial_gel_batch_timeout",2E3),gs=xl("gel_queue_timeout_max_ms",6E4),hs=Math.pow(2,16)-1,is=xl("gel_min_batch_size",5),js=void 0;function ks(){this.l=this.h=this.i=0;this.j=!1}
var ls=new ks,ms=new ks,ns=new ks,ps=new ks,qs,rs=!0,ss=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",ss);var ts={};function us(){var a=E("yt.logging.ims");a||(a=new $r,D("yt.logging.ims",a));return a}
function vs(a,b){if("log_event"===a.endpoint){ws();var c=xs(a),d=ys(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=xq[d||""];var f,g,h,k=null==Hr().resolve(new Br(ep))?void 0:null==(f=fp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!T("web_payload_policy_disabled_killswitch"))return;k=zs(e.tier);if(400===k){As(a,b);return}}ts[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};us().storePayload(e,a.payload);Bs(b,c,e,"gelDebuggingEvent"===d)}}
function Bs(a,b,c,d){function e(){Cs({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(js=new a);a=xl("tvhtml5_logging_max_batch_ads_fork")||xl("web_logging_max_batch")||100;var g=W(),h=Ds(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=us().getSequenceCount(c));1E3<=d?e():d>=a?qs||(qs=Es(function(){e();qs=void 0},0)):10<=g-k&&(Fs(f,c.tier),h.l=g)}
function As(a,b){if("log_event"===a.endpoint){ws();var c=xs(a),d=new Map;d.set(c,[a.payload]);var e=ys(a.payload)||"";b&&(js=new b);return new Rd(function(f,g){js&&js.isReady()?Gs(d,js,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function xs(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);ss[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Cs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Rd(function(e,f){var g=Ds(c,d),h=g.j;g.j=!1;Hs(g.i);Hs(g.h);g.h=0;js&&js.isReady()?void 0===d&&T("enable_web_tiered_gel")?Is(e,f,a,b,c,300,h):Is(e,f,a,b,c,d,h):(Fs(c,d),e())})}
function Is(a,b,c,d,e,f,g){var h=js;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=T("enable_web_tiered_gel")?us().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):us().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(ts)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?us().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):us().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete ts[l];Gs(k,h,a,b,c,!1,g)}
function Fs(a,b){function c(){Cs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Ds(a,b),e=d===ps||d===ns?5E3:gs;T("web_gel_timeout_cap")&&!d.h&&(e=Es(function(){c()},e),d.h=e);
Hs(d.i);e=S("LOGGING_BATCH_TIMEOUT",xl("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&rs&&(e=es);e=Es(function(){0<xl("gel_min_batch_size")?us().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=is&&c():c()},e);
d.i=e}
function Gs(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(W()),k=a.size,l=(void 0===g?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var n=a.next();for(g={};!n.done;g={ic:g.ic,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,kc:g.kc,jc:g.jc},n=a.next()){var p=w(n.value);n=p.next().value;p=p.next().value;g.batchRequest=ub({context:lp(b.config_||kp())});if(!Oa(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=
p;(p=ss[n])&&Js(g.batchRequest,n,p);delete ss[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Ks(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.kc=function(t){T("start_client_gcf")&&Ei.oa(function(){return A(function(r){return r.yield(Ls(t),0)})});
k--;k||c()};
g.ic=0;g.jc=function(t){return function(){t.ic++;if(e.bypassNetworkless&&1===t.ic)try{bq(b,l,t.batchRequest,Ms({writeThenSend:!0},t.dangerousLogToVisitorSession,t.kc,t.jc,f)),rs=!1}catch(r){il(r),d()}k--;k||c()}}(g);
try{bq(b,l,g.batchRequest,Ms(e,g.dangerousLogToVisitorSession,g.kc,g.jc,f)),rs=!1}catch(t){il(t),d()}}}
function Ms(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Nf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Ns()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Ks(a,b,c){Ns()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*hs/2)),c++,c>hs&&(c=1),dl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Js(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function ws(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=wl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Zr=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Zr),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ns(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Es(a,b){return T("transport_use_scheduler")?T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Em(function(){if("none"===Yr().currentState)a();else{var c={};Yr().install((c.none={callback:a},c))}},b):Em(a,b):Cl(a,b)}
function Hs(a){T("transport_use_scheduler")?Ei.qa(a):window.clearTimeout(a)}
function Ls(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=ds(d,Jk),g=null==(f=d)?void 0:f.hotHashData,h=ds(d,Ik),l=null==(k=d)?void 0:k.coldHashData,(n=Hr().resolve(new Br(ep)))?g?e?p.yield(gp(n,g,e),2):p.yield(gp(n,g),2):p.A(2):p.return()):l?h?p.yield(hp(n,l,h),0):p.yield(hp(n,l),0):p.A(0)})}
function Ds(a,b){b=void 0===b?200:b;return a?300===b?ps:ms:300===b?ns:ls}
function ys(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,xq[b])return b}
function zs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Os=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Os);
function Ps(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=or();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Os[b]=b in Os?Os[b]+1:0,a.sequence={index:Os[b],groupKey:b},d.endOfSequence&&delete Os[d.sequenceGroup]);(d.sendIsolatedPayload?As:vs)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function vn(a,b,c){c=void 0===c?{}:c;var d=Zq;S("ytLoggingEventsDefaultDisabled",!1)&&Zq===Zq&&(d=null);T("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=or(),c.timestamp=W());Ps(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Qs=new Set,Rs=0,Ss=0,Ts=0,Us=[],Vs=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function un(a){Ws(a)}
function Xs(a){Ws(a,"WARNING")}
function Ys(a){a instanceof Error?Ws(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",Xs(a))}
function Ws(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Rs))){d=Us;var k=zc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=am(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var u="params."+t,y=cm(r[t]);c[u]=y;p+=u.length+y.length;if(500<p)break}}else c.params=cm(r)}if(d.length)for(t=0;t<d.length&&!(p=am(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Xl();c=w(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Zf)){a=d.weight;break a}a=w(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=w(Sl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.lc[t.name])for(e=w(c.lc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Jc(f);break}t.params||(t.params={});a=Xl();t.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Ra.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Bb("sample").constructor!==zb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Qs.has(t.message)){if(g&&T("web_enable_error_204"))Zs(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Yl.Za("handleError",t),T("record_app_crashed_web")&&0===Ts&&1===t.sampleWeight&&(Ts++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),vn("appCrashed",g)),Ss++):"WARNING"===b&&Yl.Za("handleWarning",t);if(T("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=w(Vs);for(c=a.next();!c.done;c=a.next())if(Bn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));e=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!el("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=w(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=w(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(vn("clientError",h),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&Cs(void 0,void 0,!1))}T("suppress_error_204_logging")||Zs(b,t)}try{Qs.add(t.message)}catch(z){}Rs++}}}
function Zs(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Jl(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function $s(){this.register=new Map}
function at(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.eg("ABORTED")}
$s.prototype.clear=function(){at(this);this.register.clear()};
var bt=new $s;var ct=Date.now().toString();
function dt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ct)for(a=1,b=0;b<ct.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ct.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var et,ft=C.ytLoggingDocDocumentNonce_;ft||(ft=dt(),D("ytLoggingDocDocumentNonce_",ft));et=ft;function gt(a){this.h=a}
m=gt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Qk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&J(a,2,Df(this.h.veType)),void 0!==this.h.veCounter&&J(a,6,Df(this.h.veCounter)),void 0!==this.h.elementIndex&&J(a,3,Df(this.h.elementIndex)),this.h.isCounterfactual&&J(a,5,Af(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();jg(a,Qk,7,b)}void 0!==this.h.youtubeData&&jg(a,Kk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function ht(a){return S("client-screen-nonce-store",{})[void 0===a?0:a]}
function jt(a,b){b=void 0===b?0:b;var c=S("client-screen-nonce-store");c||(c={},dl("client-screen-nonce-store",c));c[b]=a}
function kt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function lt(a){return S(kt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",lt);function mt(){var a=S("csn-to-ctt-auth-info");a||(a={},dl("csn-to-ctt-auth-info",a));return a}
function nt(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function ot(a){a=ht(void 0===a?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",ot);function pt(a,b,c){var d=mt();(c=ot(c))&&delete d[c];b&&(d[a]=b)}
function qt(a){return mt()[a]}
D("yt_logging_screen.getCttAuthInfo",qt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==ht(c)||b!==S(kt(c)))if(pt(a,d,c),jt(a,c),dl(kt(c),b),b=function(){setTimeout(function(){a&&vn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:et,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var rt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",rt);function st(a){Zk(rt,arguments)}
;function tt(){var a=tb(ut),b;return(new Rd(function(c,d){a.onSuccess=function(e){Bl(e)?c(new vt(e)):d(new wt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new wt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new wt("Request timed out","net.timeout",e))};
b=Jl("//googleads.g.doubleclick.net/pagead/id",a)})).sc(function(c){c instanceof Yd&&b.abort();
return Wd(c)})}
function wt(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(wt,$a);function vt(a){this.xhr=a}
;function xt(){this.h=0;this.value_=null}
xt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:zt(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:At(a):this};
xt.prototype.getValue=function(){return this.value_};
xt.prototype.isRejected=function(){return 2==this.h};
xt.prototype.$goog_Thenable=!0;function At(a){var b=new xt;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function zt(a){var b=new xt;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function Bt(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:tl(a)?"same-origin":"cors",credentials:tl(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Ct(){return Jg()||(xe||ye)&&Bn("applewebkit")&&!Bn("version")&&(!Bn("safari")||Bn("gsa/"))||Mc&&Bn("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Dt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Ok)if(Ok[d]==c.embeddedPlayerMode){b=Ok[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Et(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ft;this.isTimeout=a instanceof wt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Yd}
x(Et,$a);Et.prototype.name="BiscottiError";function Ft(){$a.call(this,"Biscotti ID is missing from server")}
x(Ft,$a);Ft.prototype.name="BiscottiMissingError";var ut={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gt=null;function Ht(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ct())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if("1"==rb(a))return Error("Biscotti ID is not available in private embed mode");if(Dt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Xk(){var a=Ht();if(void 0!==a)return Wd(a);Gt||(Gt=tt().then(It).sc(function(b){return Jt(2,b)}));
return Gt}
function It(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ft;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ft;a=a.id;Yk(a);Gt=zt(a);Kt(18E5,2);return a}
function Jt(a,b){b=new Et(b);Yk("");Gt=At(b);0<a&&Kt(12E4,a-1);throw b;}
function Kt(a,b){Cl(function(){tt().then(It,function(c){return Jt(b,c)}).sc(cb)},a)}
function Lt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Xk()}catch(b){return Wd(b)}}
;function Mt(a){if("1"!=rb(S("PLAYER_VARS",{}))){a&&Wk();try{Lt().then(function(){},function(){}),Cl(Mt,18E5)}catch(b){il(b)}}}
;var Nt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ot(){var a=void 0===a?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;$b(ac(5,a));try{var b=rl(a).theme;void 0===b&&T("parent_tools_enable_app_settings")&&(b=rl(a).color_theme);return Nt.get(b)||null}catch(c){}return null}
;function Pt(){this.h={};if(this.i=mm()){var a=km("CONSISTENCY");a&&Qt(this,{encryptedTokenJarContents:a})}}
Pt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Pa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Qt(this,a)}};
function Qt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&jm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Rt=window.location.hostname.split(".").slice(-2).join(".");function St(){var a=S("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===S("INNERTUBE_CLIENT_NAME")&&(this.h=Tt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Ut;function Vt(){Ut=E("yt.clientLocationService.instance");Ut||(Ut=new St,D("yt.clientLocationService.instance",Ut));return Ut}
m=St.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===S("INNERTUBE_CLIENT_NAME")?(this.h=Tt(this))&&this.h.set("yt-location-playability-token",a,15552E3):jm("YT_CL",JSON.stringify({loctok:a}),15552E3,Rt,!0))};
function Tt(a){return void 0===a.h?new mn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Tt(this))&&this.h.remove("yt-location-playability-token"):lm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===S("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Wt(a,b){var c,d=null==(c=ds(a,Nk))?void 0:c.signal;if(d&&b.Sb&&(c=b.Sb[d]))return c();var e;if((c=null==(e=ds(a,Lk))?void 0:e.request)&&b.Sd&&(e=b.Sd[c]))return e();for(var f in a)if(b.bd[f]&&(a=b.bd[f]))return a()}
;function Xt(a){return function(){return new a}}
;var Yt={},Zt=(Yt.WEB_UNPLUGGED="^unplugged/",Yt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Yt.WEB_UNPLUGGED_OPS="^unplugged/",Yt.WEB_UNPLUGGED_PUBLIC="^unplugged/",Yt.WEB_CREATOR="^creator/",Yt.WEB_KIDS="^kids/",Yt.WEB_EXPERIMENTS="^experiments/",Yt.WEB_MUSIC="^music/",Yt.WEB_REMIX="^music/",Yt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Yt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Yt);
function $t(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Zt[b];if(c){var d=new RegExp(c),e=w(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Zt).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=w(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function au(){}
au.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?gm:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=ub(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;qm();var l="USER_INTERFACE_THEME_LIGHT";tm(165)?l="USER_INTERFACE_THEME_DARK":tm(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:Ot()||l;h.userInterfaceTheme=k;if(!f){if(k=zm())h.connectionType=
k;T("web_log_effective_connection_type")&&(k=Am())&&(g.client.effectiveConnectionType=k)}var n;if(T("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}T("web_gcf_hashes_innertube")&&(k=ip())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);p=rl(C.location.href);!T("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&hm.h&&(p=hm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=im(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!T("web_lr_app_quality_killswitch")&&(p=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(da){}t=void 0}t&&(h.timeZone=t)}(t=S("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=yl();Pt.h||(Pt.h=new Pt);h=Pt.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!T("web_prequest_context_killswitch")&&(r=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=r);t=qm();r=tm(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?e&&(f=ot())&&(g.clientScreenNonce=f):
!f&&(f=ot())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Vt().setLocationOnInnerTubeContext(g);try{var u=ul(),y=u.bid;delete u.bid;g.adSignalsInfo={params:[],bid:y};var z=w(Object.entries(u));for(var G=z.next();!G.done;G=z.next()){var L=w(G.value),K=L.next().value,R=L.next().value;u=K;y=R;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:u,value:""+y})}var O;if(T("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==(O=
g.client)?void 0:O.clientName)){var la=S("INNERTUBE_CONTEXT");la.adSignalsInfo&&(g.adSignalsInfo.advertisingId=la.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=la.adSignalsInfo.limitAdTracking)}}catch(da){Ws(da)}z=g}else Ws(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(G=this.h(a)){this.i(z,G,b);var I;b="/youtubei/v1/"+$t(this.j());(G=null==(I=ds(a.commandMetadata,Mk))?void 0:I.apiUrl)&&(b=G);I=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(I=String(b)+
String(cc(I)));b={};b.key=S("INNERTUBE_API_KEY");T("json_condensed_response")&&(b.prettyPrint="false");I=sl(I,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:I,ib:Bt(I),Pa:z,config:a};a.config.Vb?a.config.Vb.identity=c:a.config.Vb={identity:c};return a}Ws(new V("Error: Failed to create Request from Command.",a))};
ha.Object.defineProperties(au.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function bu(){}
x(bu,au);bu.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",ib:Bt("/getDatasyncIdsEndpoint","GET"),Pa:{}}};
bu.prototype.j=function(){return[]};
bu.prototype.h=function(){};
bu.prototype.i=function(){};var cu={},du=(cu.GET_DATASYNC_IDS=Xt(bu),cu);var eu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function fu(a,b){var c=void 0===c?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=bc(window.location.href);e&&d.push(e);e=bc(a);if(0<=eb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),ei(d,a),a=d.href)if(a=cc(a),a=dc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:ot()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&gu(a,b,f)}else gu(a,b)}
function gu(a,b,c){a=hu(a);b=b?ic(b):"";c=c||5;Ct()&&jm(a,b,c)}
function hu(a){for(var b=w(eu),c=b.next();!c.done;c=b.next())a=qc(a,c.value);return"ST-"+Yb(a).toString(36)}
;function iu(){try{return!!self.localStorage}catch(a){return!1}}
;function ju(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function ku(a){if(iu()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=ju(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function lu(){if(!iu())return!1;var a=Cm(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=ju(c.value),void 0!==c&&c!==a)return!0;return!1}
;function mu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return T("copy_login_info_to_st_cookie")&&("WEB"===S("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===S("INNERTUBE_CLIENT_NAME"))&&a}
function nu(a){if(S("LOGGED_IN",!0)&&mu()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=bc(window.location.href);c&&b.push(c);c=bc(a);0<=eb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=cc(a),(b=dc(b))?(b=hu(b),b=(b=km(b)||null)?ql(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;mu()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&fu(a,b)}}
;function ou(a){var b=B.apply(1,arguments);if(!pu(a)||b.some(function(d){return!pu(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())qu(a,c.value);return a}
function qu(a,b){for(var c in b)if(pu(b[c])){if(c in a&&!pu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});qu(a[c],b[c])}else if(ru(b[c])){if(c in a&&!ru(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);su(a[c],b[c])}else a[c]=b[c];return a}
function su(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,pu(c)?a.push(qu({},c)):ru(c)?a.push(su([],c)):a.push(c);return a}
function pu(a){return"object"===typeof a&&!Array.isArray(a)}
function ru(a){return"object"===typeof a&&Array.isArray(a)}
;function tu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function uu(){var a=tu();a.info||(a.info={});return a.info}
function vu(a){a=tu(a);a.metadata||(a.metadata={});return a.metadata}
function wu(a){a=tu(a);a.tick||(a.tick={});return a.tick}
function xu(a){a=tu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function yu(a){a=xu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function zu(a){var b=tu(a).nonce;b||(b=dt(),tu(a).nonce=b);return b}
;function Au(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Bu(a){a=a||"";var b=E("ytcsi.reference");b||(Au(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Au(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Cu=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",
X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]=
"LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]=
"LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",
X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]=
"LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant=
"LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X),Y={},Du=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p=
"httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav=
"kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",
Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",
Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID=
"requestIds",Y),Eu="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Fu={},Gu=(Fu.ccs="CANARY_STATE_",Fu.mver="MEASUREMENT_VERSION_",Fu.pis="PLAYER_INITIALIZED_STATE_",Fu.yt_pt="LATENCY_PLAYER_",Fu.pa="LATENCY_ACTION_",
Fu.ctop="TOP_ENTITY_TYPE_",Fu.yt_vst="VIDEO_STREAM_TYPE_",Fu),Hu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Iu(a,b,c){c=xu(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Du){c=Du[a];0<=eb(Eu,c)&&(b=!!b);a in Gu&&"string"===typeof b&&(b=Gu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return ou({},d)}0<=eb(Hu,a)||Xs(new V("Unknown label logged with GEL CSI",a))}
;function Ju(a,b){np.call(this,1,arguments);this.timer=b}
x(Ju,np);var Ku=new op("aft-recorded",Ju);var Lu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Lu);function Mu(){this.h=0}
function Nu(){Mu.h||(Mu.h=new Mu);return Mu.h}
Mu.prototype.tick=function(a,b,c,d){Ou(this,"tick_"+a+"_"+b)||vn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Mu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Ou(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,vn("latencyActionInfo",a,{cttAuthInfo:c}))};
Mu.prototype.jspbInfo=function(){};
Mu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Ou(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,vn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Ou(a,b){Lu[b]=Lu[b]||{count:0};var c=Lu[b];c.count++;c.time=W();a.h||(a.h=Em(function(){var d=W(),e;for(e in Lu)Lu[e]&&6E4<d-Lu[e].time&&delete Lu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Xs(c)),!0):!1}
;var Pu=window;function Qu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Ru(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Su(e.requestStart),e.responseEnd=Su(e.responseEnd),e.redirectStart=Su(e.redirectStart),e.redirectEnd=Su(e.redirectEnd),e.domainLookupEnd=Su(e.domainLookupEnd),e.connectStart=Su(e.connectStart),e.connectEnd=
Su(e.connectEnd),e.responseStart=Su(e.responseStart),e.secureConnectionStart=Su(e.secureConnectionStart),e.domainLookupStart=Su(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function Su(a){return Math.round(Tu()+a)}
function Tu(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=Pu.performance||Pu.mozPerformance||Pu.msPerformance||Pu.webkitPerformance||new Qu;var Uu=!1,Vu=!1,Wu={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Va(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||cb,Z);function Xu(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;vu(c).loadType=e}(a=Iu(a,b,c))&&Yu(a,c,d)}}
function Yu(a,b){if(!T("web_csi_action_sampling_enabled")||!tu(b).actionDisabled){var c=Bu(b||"");ou(c.info,a);a.loadType&&(c=a.loadType,vu(b).loadType=c);ou(yu(b),a);c=zu(b);b=tu(b).cttAuthInfo;Nu().info(a,c,b)}}
function Zu(){var a,b,c,d;return(null!=(d=null==Hr().resolve(new Br(ep))?void 0:null==(a=fp())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function $u(a,b,c){if(!T("web_csi_action_sampling_enabled")||!tu(c).actionDisabled){var d=zu(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(null==Hr().resolve(new Br(ep))?0:fp())&&!Vu&&(Vu=!0,$u("gcfl",W(),c));var f,g,h;e=(null==Hr().resolve(new Br(ep))?void 0:null==(f=fp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=Zu();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+
d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;tu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Yu(f,c));tu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Z.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Z.mark(e)));e=Bu(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=xu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=wu(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||
(f[a]=e):f[a]=e;f=tu(c).cttAuthInfo;"_start"===a?(a=Nu(),Ou(a,"baseline_"+d)||vn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Nu().tick(a,d,b,f);av(c);return e}}}
function bv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ar+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function cv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ni(window)&&a.setAttribute("nonce",ni(window));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=Tu(),$u("rsf_"+b,c+Math.round(a.fetchStart)),$u("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function dv(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&($u("wffs",Su(b.startTime)),$u("wffe",Su(b.responseEnd)))}
function ev(a){var b=fv("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=fv(b[d],a);if(e)return e}return NaN}
function fv(a,b){if(a=wu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function av(a){var b=fv("_start",a),c=ev(a);b&&c&&!Uu&&(tp(Ku,new Ju(Math.round(c-b),a)),Uu=!0)}
function gv(a,b){for(var c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!gv(a[d],b[d]))return!1;return!0}
function hv(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=jb(a,function(b){return"first-paint"===b.name}))return Su(a.startTime)}a=Z.timing;
return a.we?Math.max(0,a.we):0}
;function iv(a,b){hl(function(){Bu("").info.actionType=a;b&&dl("TIMING_AFT_KEYS",b);dl("TIMING_ACTION",a);var c=S("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&Xu(d,c[d]);c={isNavigation:!0,actionType:Cu[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=S("PREVIOUS_ACTION"))c.previousAction=Cu[d]||"LATENCY_ACTION_UNKNOWN";if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=ot())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=bv();if(1===d||-1===d)c.isVisible=
!0;vu();uu();c.loadType="cold";d=uu();var e=Ru(),f=Tu(),g=S("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&($u("srt",e.responseStart),1!==d.prerender&&$u("_start",f,void 0));d=hv();0<d&&$u("fpt",d);d=Ru();d.isPerformanceNavigationTiming&&Yu({performanceNavigationTiming:!0},void 0);$u("nreqs",d.requestStart,void 0);$u("nress",d.responseStart,void 0);$u("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&($u("nrs",d.redirectStart,void 0),
$u("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&($u("ndnss",d.domainLookupStart,void 0),$u("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&($u("ntcps",d.connectStart,void 0),$u("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Tu()&&0<d.connectEnd-d.secureConnectionStart&&($u("nstcps",d.secureConnectionStart,void 0),$u("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&dv();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in Wu)Wu.hasOwnProperty(h)&&
(e=Wu[h],cv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Yu(c);c=uu();h=xu();h.preLoggedGelInfos||(h.preLoggedGelInfos=[]);d=h.preLoggedGelInfos;h=yu();e=void 0;for(f=0;f<d.length;f++)if(g=d[f],g.loadType){e=g.loadType;break}if("cold"===vu().loadType&&("cold"===c.yt_lt||"cold"===h.loadType||"cold"===e)){e=wu();f=xu();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var k in e)if(!(k in f))if("number"===typeof e[k])$u(k,
fv(k));else if(T("log_repeated_ytcsi_ticks")){g=w(e[k]);for(var l=g.next();!l.done;l=g.next())l=l.value,$u(k.slice(1),l)}k={};e=!1;if(T("use_infogel_early_logging"))for(d=w(d),f=d.next();!f.done;f=d.next())e=f.value,ou(h,e),ou(k,e),e=!0;d=w(Object.keys(c));for(f=d.next();!f.done;f=d.next())f=f.value,(f=Iu(f,c[f]))&&!gv(yu(),f)&&(ou(h,f),ou(k,f),e=!0);e&&Yu(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&jv()&&ev()&&av()})()}
function kv(a,b,c,d){hl(Xu)(a,b,c,d)}
function lv(a,b,c){hl(Yu)(a,b,void 0===c?!1:c)}
function mv(a,b,c){return hl($u)(a,b,c)}
function jv(){return hl(function(){return"_start"in wu()})()}
function nv(){hl(function(){var a=zu();requestAnimationFrame(function(){setTimeout(function(){a===zu()&&mv("ol",void 0,void 0)},0)})})()}
var ov=window;ov.ytcsi&&(ov.ytcsi.info=kv,ov.ytcsi.infoGel=lv,ov.ytcsi.tick=mv);var pv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),qv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function rv(a,b,c,d){this.m=a;this.ba=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Sb||(a.Sb={});a.Sb=Object.assign({},du,a.Sb)}
function sv(a,b,c,d){if(void 0!==rv.h){if(d=rv.h,a=[a!==d.m,b!==d.ba,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else rv.h=new rv(a,b,c,d)}
function tv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?gm:c;var d=Wt(b,a.m);if(!d)return Wd(new V("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(nu(e.input),new Rd(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.Xe){var n=e.config,p;n=null==n?void 0:null==(p=n.Vb)?void 0:p.sessionIndex;p=fm(0,{sessionIndex:n});k=Object.assign({},uv(h),p);return l.A(2)}return l.yield(vv(e.config,
h),3)}2!=l.h&&(k=l.i);f(wv(a,e,k));l.h=0})})):Wd(new V("Error: Failed to build request for command.",b))}
function xv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=w(pv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function wv(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,u,y,z,G,L,K,R,O,la,I,da,ja,U,ea,ab,Oc,Pc,mc;return A(function(aa){switch(aa.h){case 1:aa.A(2);break;case 3:if((d=aa.i)&&!d.isExpired())return aa.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Pa)?0:f.context)){aa.A(4);break}g=b.Pa.context;aa.A(5);break;case 5:h=w([]),k=h.next();case 7:if(k.done){aa.A(4);break}l=k.value;return aa.yield(l.dg(g),8);case 8:k=h.next();aa.A(7);break;case 4:if(null==(n=a.i)||!n.ig(b.input,b.Pa)){aa.A(11);
break}return aa.yield(a.i.Wf(b.input,b.Pa),12);case 12:return p=aa.i,T("kevlar_process_local_innertube_responses_killswitch")||xv(a,p,b),aa.return(p);case 11:return(u=null==(r=b.config)?void 0:r.fg)&&a.h.has(u)&&T("web_memoize_inflight_requests")?t=a.h.get(u):(y=JSON.stringify(b.Pa),L=null!=(G=null==(z=b.ib)?void 0:z.headers)?G:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},L,c)}),K=Object.assign({},b.ib),"POST"===b.ib.method&&(K=Object.assign({},K,{body:y})),(null==(R=b.config)?0:R.Ge)&&
mv(b.config.Ge),O=function(){return a.ba.fetch(b.input,K,b.config)},t=O(),u&&a.h.set(u,t)),aa.yield(t,13);
case 13:if((la=aa.i)&&"error"in la&&(null==(I=la)?0:null==(da=I.error)?0:da.details))for(ja=la.error.details,U=w(ja),ea=U.next();!ea.done;ea=U.next())ab=ea.value,(Oc=ab["@type"])&&-1<qv.indexOf(Oc)&&(delete ab["@type"],la=ab);u&&a.h.has(u)&&a.h.delete(u);(null==(Pc=b.config)?0:Pc.He)&&mv(b.config.He);if(la||null==(mc=a.i)||!mc.Of(b.input,b.Pa)){aa.A(14);break}return aa.yield(a.i.Vf(b.input,b.Pa),15);case 15:la=aa.i;case 14:return xv(a,la,b),aa.return(la||void 0)}})}
function vv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Vb)?void 0:d.sessionIndex;var h=g.yield;var k=fm(0,{sessionIndex:e});if(!(k instanceof Rd)){var l=new Rd(cb);Sd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},uv(b),f)))})}
function uv(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));S("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&
(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var yv=new Ar("INNERTUBE_TRANSPORT_TOKEN");var zv=["share/get_web_player_share_panel"],Av=["feedback"],Bv=["notification/modify_channel_preference"],Cv=["browse/edit_playlist"],Dv=["subscription/subscribe"],Ev=["subscription/unsubscribe"];function Fv(){}
x(Fv,au);Fv.prototype.j=function(){return Dv};
Fv.prototype.h=function(a){return ds(a,Vk)||void 0};
Fv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ha.Object.defineProperties(Fv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Gv(){}
x(Gv,au);Gv.prototype.j=function(){return Ev};
Gv.prototype.h=function(a){return ds(a,Uk)||void 0};
Gv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ha.Object.defineProperties(Gv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Hv(){}
x(Hv,au);Hv.prototype.j=function(){return Av};
Hv.prototype.h=function(a){return ds(a,Pk)||void 0};
Hv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ha.Object.defineProperties(Hv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Iv(){}
x(Iv,au);Iv.prototype.j=function(){return Bv};
Iv.prototype.h=function(a){return ds(a,Tk)||void 0};
Iv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Jv(){}
x(Jv,au);Jv.prototype.j=function(){return Cv};
Jv.prototype.h=function(a){return ds(a,Sk)||void 0};
Jv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Kv(){}
x(Kv,au);Kv.prototype.j=function(){return zv};
Kv.prototype.h=function(a){return ds(a,Rk)};
Kv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Lv=new Ar("NETWORK_SLI_TOKEN");function Mv(a){this.h=a}
Mv.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h&&(e=$b(ac(5,qc(a,"key")))||"/UNKNOWN_PATH",d.h.start(e));f=b;T("wug_networking_gzip_request")&&(f=Vp(b));g=new window.Request(a,f);return h.return(fetch(g).then(function(k){return d.handleResponse(k,c)}).catch(function(k){Xs(k)}))})};
Mv.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.qe)&&a.ok?rg(b.qe,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Rf(),c=c.then(function(d){Xs(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Mv[zr]=[new Br(Lv)];var Nv=new Ar("NETWORK_MANAGER_TOKEN");var Ov;function Pv(){var a,b,c;return A(function(d){if(1==d.h)return a=Hr().resolve(yv),a?d.yield(tv(a),2):(Xs(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Xs(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Pf;return d.return(c)}Xs(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Qv=C.caches,Rv;function Sv(a){var b=a.indexOf(":");return-1===b?{qd:a}:{qd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Tv(){return A(function(a){if(void 0!==Rv)return a.return(Rv);Rv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(Qv.open("test-only"),4);case 4:return d.yield(Qv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Rv)})}
function Uv(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(Tv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Qv.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Sv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Qv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Vv(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(Tv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Cm("cache contains other");return h.yield(Qv.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Sv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Wv(){Pv().then(function(a){a&&(Ko(a),Uv(a),ku(a))})}
function Xv(){var a=new Nq;Ei.oa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=Cm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Ko(g);Uv(g);ku(g);return f.return()}c=lu();return f.yield(Vv(),3);case 3:return d=f.i,f.yield(Lo(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?Wv():a.h.add("publicytnetworkstatus-online",Wv,!0,void 0,void 0),f.h=0}})})}
;var ji=ka(["data-"]);function Yv(a){a&&(a.dataset?a.dataset[Zv()]="true":ii(a))}
function $v(a){return a?a.dataset?a.dataset[Zv()]:a.getAttribute("data-loaded"):null}
var aw={};function Zv(){return aw.loaded||(aw.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var bw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,cw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function dw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(bw,""),c=c.replace(cw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ew(a,b,c)}
function ew(a,b,c){c=void 0===c?null:c;var d=fw(a),e=document.getElementById(d),f=e&&$v(e),g=e&&!f;f?b&&b():(b&&(f=tr(d,b),b=""+Qa(b),gw[b]=f),g||(e=hw(a,d,function(){if(!$v(e)){Yv(e);wr(d);var h=Wa(xr,d);Cl(h,0)}},c)))}
function hw(a,b,c,d){d=void 0===d?null:d;var e=Dd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);pi(e,Gk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function iw(a){a=fw(a);var b=document.getElementById(a);b&&(xr(a),b.parentNode.removeChild(b))}
function jw(a,b){a&&b&&(a=""+Qa(b),(a=gw[a])&&vr(a))}
function fw(a){var b=document.createElement("a");ei(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Yb(a)}
var gw={};var kw=[],lw=!1;function mw(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ct()){var a=S("PLAYER_VARS",{});if("1"!=rb(a)&&!Dt(a)){var b=function(){lw=!0;"google_ad_status"in window?dl("DCLKSTAT",1):dl("DCLKSTAT",2)};
try{dw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}kw.push(Ei.oa(function(){if(!(lw||"google_ad_status"in window)){try{jw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}lw=!0;dl("DCLKSTAT",3)}},5E3))}}}
function nw(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function ow(a){Qr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.B},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(ow,Qr);ow.prototype.B=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
ow.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
ow.prototype.H=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
ow.prototype.i=function(){this.h=new Map};function pw(a){Qr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(pw,Qr);pw.prototype.i=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
pw.prototype.h=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
pw.prototype.m=function(a,b){a(null==b?void 0:b.event)};
pw.prototype.H=function(a,b){a(null==b?void 0:b.event)};function qw(){this.l=new ow;this.m=new pw}
qw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function rw(a){np.call(this,1,arguments);this.csn=a}
x(rw,np);var wp=new op("screen-created",rw),sw=[],tw=0,uw=new Map,vw=new Map,ww=new Map;
function xw(a,b,c,d,e){e=void 0===e?!1:e;for(var f=yw({cttAuthInfo:qt(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(pb(k)||!k.trackingParams&&!k.veType)&&Xs(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=zw(h,b);if(k.veType&&!vw.has(l)&&!ww.has(l)&&!e){uw.set(l,[a,b,c,h]);return}h=zw(c,b);uw.has(h)?Aw(c,b):ww.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:hb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?Bw("visualElementAttached",f,c):a?Ps("visualElementAttached",c,a,f):vn("visualElementAttached",c,f)}
function Bw(a,b,c){sw.push({Ae:a,payload:c,Uf:void 0,options:b});tw||(tw=xp())}
function yp(a){if(sw){for(var b=w(sw),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,vn(c.Ae,c.payload,c.options));sw.length=0}tw=0}
function zw(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Aw(a,b){a=zw(a,b);uw.has(a)&&(b=uw.get(a)||[],xw(b[0],b[1],b[2],[b[3]],!0),uw.delete(a))}
function yw(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Cw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Cw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=ot(void 0===c?0:c)){a=this.client;d=new gt({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=zw(d,c);vw.set(f,!0);Aw(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=yw({cttAuthInfo:qt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?Bw("visualElementGestured",f,d):a?Ps("visualElementGestured",d,a,f):vn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Cw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new gt({trackingParams:a}),b,void 0===c?0:c)};
Cw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=ot(d);a||(a=(a=lt(void 0===d?0:d))?new gt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=yw({cttAuthInfo:qt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?Bw("visualElementStateChanged",d,b):a?Ps("visualElementStateChanged",b,a,d):vn("visualElementStateChanged",b,d))}};
function Dw(a,b){if(void 0===b)for(var c=nt(),d=0;d<c.length;d++)void 0!==c[d]&&Dw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&xw(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Ew(){qw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
x(Ew,qw);Ew.prototype.j=function(){vn("finalPayload",{csn:ot()})};
Ew.prototype.h=function(){at(bt)};
Ew.prototype.i=function(){var a=Dw;Cw.h||(Cw.h=new Cw);a(Cw.h)};function Fw(){}
function Gw(){var a=E("ytglobal.storage_");a||(a=new Fw,D("ytglobal.storage_",a));return a}
Fw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Hw()):d.return()})};
function Hw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Fw);function tn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=xl("ytidb_transaction_ended_event_rate_limit_session",.2)}
tn.prototype.Nb=function(a){this.handleError(a)};
tn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Iw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=xl("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Iw(a,b){Gw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Jw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Jw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Jw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Kw(a,b,c){H.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.u=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=eb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.u)}
x(Kw,H);Kw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){jl(d)}}};
Kw.prototype.S=function(){window.removeEventListener("message",this.u);H.prototype.S.call(this)};function Lw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Kw(!!S("WIDGET_ID_ENFORCE")),b=this.De.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=S("WIDGET_ID"))this.h.sessionId=a}
m=Lw.prototype;m.De=function(a,b,c){"addEventListener"===a&&b?this.Fc(b[0],c):this.Uc(a,b,c)};
m.Uc=function(){};
m.zc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Fc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.zc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ae=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Cc());this.sendMessage("onReady");fb(this.i,this.xd,this);this.i=[]};
m.Cc=function(){return null};
function Mw(a,b){a.sendMessage("infoDelivery",b)}
m.xd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.xd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Nw={},Ow=(Nw["api.invalidparam"]=2,Nw.auth=150,Nw["drm.auth"]=150,Nw["heartbeat.net"]=150,Nw["heartbeat.servererror"]=150,Nw["heartbeat.stop"]=150,Nw["html5.unsupportedads"]=5,Nw["fmt.noneavailable"]=5,Nw["fmt.decode"]=5,Nw["fmt.unplayable"]=5,Nw["html5.missingapi"]=5,Nw["html5.unsupportedlive"]=5,Nw["drm.unavailable"]=5,Nw["mrm.blocked"]=151,Nw);var Pw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Qw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Rw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(Pw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Sw(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Tw(a){Lw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Pe.bind(this));this.addEventListener("onVolumeChange",this.Qe.bind(this));this.addEventListener("onApiChange",this.Ke.bind(this));this.addEventListener("onPlaybackQualityChange",this.Me.bind(this));this.addEventListener("onPlaybackRateChange",this.Ne.bind(this));this.addEventListener("onStateChange",this.Oe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Re.bind(this))}
x(Tw,Lw);m=Tw.prototype;
m.Uc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Qw(a)){var d=b;if(Pa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Rw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Rw(e);break;case "loadPlaylist":case "cuePlaylist":e=Sw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Qw(a)&&Mw(this,this.Cc())}};
m.Fc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Lw.prototype.Fc.call(this,a,b)};
m.zc=function(a,b){var c=this,d=Lw.prototype.zc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.ae.bind(this);this.h.h=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Ow[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Cc=function(){if(!this.api)return null;var a=this.api.getApiInterface();kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Oe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Mw(this,a)};
m.Me=function(a){Mw(this,{playbackQuality:a})};
m.Ne=function(a){Mw(this,{playbackRate:a})};
m.Ke=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Qe=function(){Mw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Pe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Mw(this,a)};
m.Re=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Mw(this,a)};
m.dispose=function(){Lw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Uw(a){H.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.td,this)}
x(Uw,H);m=Uw.prototype;m.start=function(){this.started||this.aa()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.aa()&&this.connection.jb(a,b)};
m.td=function(a,b,c){if(this.started&&!this.aa()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Vw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Ww(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Le.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Le=function(a,b){this.started&&!this.aa()&&this.connection.jb(a,this.Bc(a,b))};
m.Bc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.td,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.S.call(this)};function Xw(a,b){Uw.call(this,b);this.api=a;this.start()}
x(Xw,Uw);Xw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Xw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Vw(a,b){switch(a){case "loadVideoById":return a=Rw(b),[a];case "cueVideoById":return a=Rw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Sw(b),[a];case "cuePlaylist":return a=Sw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Ww(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Xw.prototype.Bc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Uw.prototype.Bc.call(this,a,b)};
Xw.prototype.S=function(){Uw.prototype.S.call(this);delete this.api};function Yw(a){a=void 0===a?!1:a;H.call(this);this.h=new M(a);xc(this,this.h)}
Ya(Yw,H);Yw.prototype.subscribe=function(a,b,c){return this.aa()?0:this.h.subscribe(a,b,c)};
Yw.prototype.unsubscribe=function(a,b,c){return this.aa()?!1:this.h.unsubscribe(a,b,c)};
Yw.prototype.l=function(a,b){this.aa()||this.h.Za.apply(this.h,arguments)};function Zw(a,b,c){Yw.call(this);this.j=a;this.i=b;this.id=c}
x(Zw,Yw);Zw.prototype.jb=function(a,b){this.aa()||this.j.jb(this.i,this.id,a,b)};
Zw.prototype.S=function(){this.i=this.j=null;Yw.prototype.S.call(this)};function $w(a,b,c){H.call(this);this.h=a;this.origin=c;this.i=hr(window,"message",this.j.bind(this));this.connection=new Zw(this,a,b);xc(this,this.connection)}
x($w,H);$w.prototype.jb=function(a,b,c,d){this.aa()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
$w.prototype.j=function(a){if(!this.aa()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.aa()||c.l("command",b.command,b.data,a.origin)}}}};
$w.prototype.S=function(){ir(this.i);this.h=null;H.prototype.S.call(this)};function ax(){this.state=1;this.h=null}
m=ax.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=yb())?d.createScript(f):f,f=new Db(f,Cb)):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=Fk(a.interpreterSafeUrl).toString());bx(this,d,e,a.program,b,c)}else Xs(Error("Cannot initialize botguard without program"))};
function bx(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,dw(c,function(){window[g]?cx(a,d,g,e):(a.state=3,iw(c),Xs(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Dd("SCRIPT"),b instanceof Db?(b instanceof Db&&b.constructor===Db?b=b.h:(Na(b),b="type_error:SafeScript"),f.textContent=b,oi(f)):f.textContent=b,f.nonce=ni(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?cx(a,d,g,e):(a.state=4,Xs(new V("Unable to load Botguard from JS")))):Xs(new V("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function cx(a,b,c,d){a.state=5;try{var e=new Th({program:b,ee:c,Ee:T("att_web_record_metrics")});e.Ue.then(function(){a.state=6;d&&d(b)});
a.Pc(e)}catch(f){a.state=7,f instanceof Error&&Xs(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Sc()?this.Gd({cd:a}):null};
m.dispose=function(){this.Pc(null);this.state=8};
m.Sc=function(){return!!this.h};
m.Gd=function(a){return this.h.Ad(a)};
m.Pc=function(a){vc(this.h);this.h=a};function dx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function ex(){ax.apply(this,arguments)}
x(ex,ax);ex.prototype.Pc=function(a){var b;null==(b=dx())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ad.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
ex.prototype.Sc=function(){return!!dx()};
ex.prototype.Gd=function(a){return dx().bgvmc(a)};var fx=new ex;function gx(){return fx.Sc()}
function hx(a){a=void 0===a?{}:a;return fx.invoke(a)}
;function ix(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ix.prototype.clone=function(){var a=new ix,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=tb(c):a[b]=c}return a};var jx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function kx(a){a=a||"";if(window.spf){var b=a.match(jx);spf.style.load(a,b?b[1]:"",void 0)}else lx(a)}
function lx(a){var b=mx(a),c=document.getElementById(b),d=c&&$v(c);d||c&&!d||(c=nx(a,b,function(){if(!$v(c)){Yv(c);wr(b);var e=Wa(xr,b);Cl(e,0)}}))}
function nx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Gk(a);mi(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function mx(a){var b=Dd("A");ei(b,new Jb(a,Kb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Yb(a)}
;function ox(a,b,c,d,e){H.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.uc=e;this.Ba=!1;this.api={};this.fa=this.u=null;this.T=new M;this.h={};this.Z=this.ha=this.elementId=this.Ka=this.config=null;this.X=!1;this.j=this.l=null;this.na={};this.vc=["onReady"];this.lastError=null;this.nb=NaN;this.K={};this.ea=0;this.i=this.m=a;xc(this,this.T);px(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(qx(this),rx(this))}
x(ox,H);m=ox.prototype;m.getId=function(){return this.B};
m.loadNewVideoConfig=function(a){if(!this.aa()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof ix||(b=new ix(b));this.config=b;this.setConfig(a);rx(this);this.isReady()&&sx(this)}};
function qx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Ka=a;this.config=tx(a);qx(this);if(!this.ha){var b;this.ha=ux(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=wi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=wi(Number(a)||a))};
function sx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function vx(a){var b=!0,c=wx(a);c&&a.config&&(b=c.dataset.version===xx(a));return b&&!!E("yt.player.Application.create")}
function rx(a){if(!a.aa()&&!a.X){var b=vx(a);if(b&&"html5"===(wx(a)?"html5":null))a.Z="html5",a.isReady()||yx(a);else if(zx(a),a.Z="html5",b&&a.j&&a.m)a.m.appendChild(a.j),yx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.l=function(){c=!0;var d=Ax(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?tx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.uc);yx(a)};
a.X=!0;b?a.l():(b=xx(a),Ax(a,"web_player_proxy_new_scriptloader")?Bx(b,a.l):dw(xx(a),a.l),(b=Cx(a))&&(Ax(a,"web_player_proxy_new_styleloader")?Dx(b):kx(b)),Ex(a)&&!c&&D("yt.player.Application.create",null))}}}
function wx(a){var b=Cd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function yx(a){if(!a.aa()){var b=wx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!Ax(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Fx(a)}else a.nb=setTimeout(function(){yx(a)},50)}}
function Fx(a){px(a);a.Ba=!0;var b=wx(a);if(b){a.u=Gx(a,b,"addEventListener");a.fa=Gx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Gx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);sx(a);a.ha&&a.ha(a.api);a.T.Za("onReady",a.api)}
function Gx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function px(a){a.Ba=!1;if(a.fa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.fa(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.u=null;a.fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ka};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ba};
m.addEventListener=function(a,b){var c=this,d=ux(this,b);d&&(0<=eb(this.vc,a)||this.h[a]||(b=Hx(this,a),this.u&&this.u(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.aa()||(b=ux(this,b))&&this.T.unsubscribe(a,b)};
function ux(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.na[b]=c}return c?c:null}
function Hx(a,b){function c(d){var e=setTimeout(function(){if(!a.aa()){try{a.T.Za(b,null!=d?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.B,data:d});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
qb(a.K,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.Z||(wx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function zx(a){a.cancel();px(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=wx(a);b&&(vx(a)||!Ex(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){if(this.l)if(Ax(this,"web_player_proxy_new_scriptloader")){var a=xx(this),b=this.l;a&&b&&(a=document.getElementById("ytp-"+a))&&a.removeEventListener("load",b)}else jw(xx(this),this.l);clearTimeout(this.nb);this.X=!1};
m.S=function(){zx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.na=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ka=this.config=this.api=null;delete this.m;delete this.i;H.prototype.S.call(this)};
function Ex(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function xx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Cx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ax(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function tx(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
function Dx(a){var b="ytp-"+a;if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;a=Gk(a);mi(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function Bx(a,b){var c="ytp-"+a,d=document.getElementById(c);if(d)d.dataset.loaded?b():d.addEventListener("load",function(){b()});
else{var e=document.createElement("script");e.id=c;e.addEventListener("load",function(){e.dataset.loaded="true";b()});
a=Gk(a);pi(e,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild)}}
;var Ix={},Jx="player_uid_"+(1E9*Math.random()>>>0);function Kx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Cd(c):c;var e=Jx+"_"+Qa(c),f=Ix[e];if(f&&d)return Lx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new ox(c,e,a,b,void 0);Ix[e]=f;f.addOnDisposeCallback(function(){delete Ix[f.getId()]});
return f.api}
function Lx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Mx=null,Nx=null,Ox=null;
function Px(){nv();var a=qm(),b=tm(119),c=1<window.devicePixelRatio;if(document.body&&Pi(document.body,"exp-invert-logo"))if(c&&!Pi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Pi(d,"inverted-hdpi")){var e=Ni(d);Oi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Pi(document.body,"inverted-hdpi")&&Qi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=um(b)||0;d=c?d|67108864:d&-67108865;0===d?delete nm[b]:(c=d.toString(16),nm[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in nm)nm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(nm[f])));var f=d.join("&");jm(b,f,63072E3,a.i,c)}}
function Qx(){Rx()}
function Sx(){mv("ep_init_pr");Rx()}
function Rx(){var a=Mx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Tx(){Mx&&Mx.sendAbandonmentPing&&Mx.sendAbandonmentPing();S("PL_ATT")&&fx.dispose();for(var a=Ei,b=0,c=kw.length;b<c;b++)a.qa(kw[b]);kw.length=0;iw("//static.doubleclick.net/instream/ad_status.js");lw=!1;dl("DCLKSTAT",0);wc(Ox,Nx);Mx&&(Mx.removeEventListener("onVideoDataChange",Qx),Mx.destroy())}
;function Ux(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&fu(a,b);if(c)return!1;nu(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=kc(a,e);nu(a);f=a+f;var h=void 0===h?bi:h;a:if(h=void 0===h?bi:h,f instanceof Jb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof $h&&b.pe(f)){h=new Jb(f,Kb);break a}h=void 0}g=g.location;h=di(h||Lb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",dl);D("yt.config.set",dl);D("yt.setMsg",st);D("yt.msgs.set",st);D("yt.logging.errors.log",Ws);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}Mt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);iv("embed",["ol"]);c=S("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=rl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&iv("watch",["pbs","pbu","pbp"]);Mx=Kx(a,c);Mx.addEventListener("onVideoDataChange",Qx);Mx.addEventListener("onReady",Sx);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Ox=new Tw(Mx):S("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Nx=new $w(window.parent,a,b),Ox=new Xw(Mx,Nx.connection));mw();T("ytidb_create_logger_embed_killswitch")||sn();a={};Ew.h||(Ew.h=new Ew);
Ew.h.install((a.flush_logs={callback:function(){Cs()}},a));
Yq();T("ytidb_clear_embedded_player")&&Ei.oa(function(){var f,g;if(!Ov){var h=Hr();Dr(h,{oc:Nv,Ed:Mv});var k={bd:{feedbackEndpoint:Xt(Hv),modifyChannelNotificationPreferenceEndpoint:Xt(Iv),playlistEditEndpoint:Xt(Jv),subscribeEndpoint:Xt(Fv),unsubscribeEndpoint:Xt(Gv),webPlayerShareEntityServiceEndpoint:Xt(Kv)}},l=Vt(),n={};l&&(n.client_location=l);void 0===f&&(f=em());void 0===g&&(g=h.resolve(Nv));sv(k,g,f,n);Dr(h,{oc:yv,Fd:rv.h});Ov=h.resolve(yv)}Xv()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||gx);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||hx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||nw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Ux);D("yt.util.activity.init",E("yt.util.activity.init")||lr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||or);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||mr);window.addEventListener("load",hl(function(){Px()}));
window.addEventListener("pageshow",hl(function(a){a.persisted||Px()}));
window.addEventListener("pagehide",hl(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Tx():a.persisted||Tx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=el("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Ws(e):Xs(e))};
ge=Ys;window.addEventListener("unhandledrejection",function(a){Ys(a.reason)});
fb(S("ERRORS")||[],function(a){Ws.apply(null,a)});
dl("ERRORS",[]);T("embeds_web_enable_scheduler_to_player_binary")&&jn();}).call(this);
