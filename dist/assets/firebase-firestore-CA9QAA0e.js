import{L as hh,_ as dh,C as fh,r as pa,F as mh,a as Qt,g as gh,b as ph,c as _h,d as yh,e as Nt,f as Vu,S as Ih,i as bu,h as Qr,j as Th}from"./firebase-core-BFqPDSUV.js";var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var we,Su;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function y(){}y.prototype=p.prototype,T.D=p.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,v,R){for(var _=Array(arguments.length-2),Kt=2;Kt<arguments.length;Kt++)_[Kt-2]=arguments[Kt];return p.prototype[v].apply(E,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,p,y){y||(y=0);var E=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)E[v]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(v=0;16>v;++v)E[v]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=T.g[0],y=T.g[1],v=T.g[2];var R=T.g[3],_=p+(R^y&(v^R))+E[0]+3614090360&4294967295;p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[1]+3905402710&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[2]+606105819&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+E[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[5]+1200080426&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[6]+2821735955&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+E[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[9]+2336552879&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[10]+4294925233&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+E[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[13]+4254626195&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[14]+2792965006&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(v^R&(y^v))+E[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[6]+3225465664&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[11]+643717713&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+E[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[10]+38016083&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[15]+3634488961&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+E[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[14]+3275163606&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[3]+4107603335&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+E[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[2]+4243563512&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[7]+1735328473&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(y^v^R)+E[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[8]+2272392833&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[11]+1839030562&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+E[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[4]+1272893353&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[7]+4139469664&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+E[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[0]+3936430074&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[3]+3572445317&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+E[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[12]+3873151461&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[15]+530742520&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(v^(y|~R))+E[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[7]+1126891415&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[14]+2878612391&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+E[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[3]+2399980690&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[10]+4293915773&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+E[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[15]+4264355552&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[6]+2734768916&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+E[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[11]+3174756917&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[2]+718787259&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var y=p-this.blockSize,E=this.B,v=this.h,R=0;R<p;){if(v==0)for(;R<=y;)i(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<p;)if(E[v++]=T.charCodeAt(R++),v==this.blockSize){i(this,E),v=0;break}}else for(;R<p;)if(E[v++]=T[R++],v==this.blockSize){i(this,E),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var y=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=y&255,y/=256;for(this.u(T),T=Array(16),p=y=0;4>p;++p)for(var E=0;32>E;E+=8)T[y++]=this.g[p]>>>E&255;return T};function s(T,p){var y=u;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=p(T)}function a(T,p){this.h=p;for(var y=[],E=!0,v=T.length-1;0<=v;v--){var R=T[v]|0;E&&R==p||(y[v]=R,E=!1)}this.g=y}var u={};function c(T){return-128<=T&&128>T?s(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return C(d(-T));for(var p=[],y=1,E=0;T>=y;E++)p[E]=T/y|0,y*=4294967296;return new a(p,0)}function f(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return C(f(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),E=g,v=0;v<T.length;v+=8){var R=Math.min(8,T.length-v),_=parseInt(T.substring(v,v+R),p);8>R?(R=d(Math.pow(p,R)),E=E.j(R).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var g=c(0),I=c(1),P=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-C(this).m();for(var T=0,p=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(N(this))return"-"+C(this).toString(T);for(var p=d(Math.pow(T,6)),y=this,E="";;){var v=H(y,p).g;y=G(y,v.j(p));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=v,x(y))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=G(this,T),N(T)?-1:x(T)?0:1};function C(T){for(var p=T.g.length,y=[],E=0;E<p;E++)y[E]=~T.g[E];return new a(y,~T.h).add(I)}r.abs=function(){return N(this)?C(this):this},r.add=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0,v=0;v<=p;v++){var R=E+(this.i(v)&65535)+(T.i(v)&65535),_=(R>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);E=_>>>16,R&=65535,_&=65535,y[v]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(T,p){return T.add(C(p))}r.j=function(T){if(x(this)||x(T))return g;if(N(this))return N(T)?C(this).j(C(T)):C(C(this).j(T));if(N(T))return C(this.j(C(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var p=this.g.length+T.g.length,y=[],E=0;E<2*p;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<T.g.length;v++){var R=this.i(E)>>>16,_=this.i(E)&65535,Kt=T.i(v)>>>16,pn=T.i(v)&65535;y[2*E+2*v]+=_*pn,q(y,2*E+2*v),y[2*E+2*v+1]+=R*pn,q(y,2*E+2*v+1),y[2*E+2*v+1]+=_*Kt,q(y,2*E+2*v+1),y[2*E+2*v+2]+=R*Kt,q(y,2*E+2*v+2)}for(E=0;E<p;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=p;E<2*p;E++)y[E]=0;return new a(y,0)};function q(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function U(T,p){this.g=T,this.h=p}function H(T,p){if(x(p))throw Error("division by zero");if(x(T))return new U(g,g);if(N(T))return p=H(C(T),p),new U(C(p.g),C(p.h));if(N(p))return p=H(T,C(p)),new U(C(p.g),p.h);if(30<T.g.length){if(N(T)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var y=I,E=p;0>=E.l(T);)y=tt(y),E=tt(E);var v=Q(y,1),R=Q(E,1);for(E=Q(E,2),y=Q(y,2);!x(E);){var _=R.add(E);0>=_.l(T)&&(v=v.add(y),R=_),E=Q(E,1),y=Q(y,1)}return p=G(T,v.j(p)),new U(v,p)}for(v=g;0<=T.l(p);){for(y=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(y),_=R.j(p);N(_)||0<_.l(T);)y-=E,R=d(y),_=R.j(p);x(R)&&(R=I),v=v.add(R),T=G(T,_)}return new U(v,T)}r.A=function(T){return H(this,T).h},r.and=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},r.or=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},r.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function tt(T){for(var p=T.g.length+1,y=[],E=0;E<p;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function Q(T,p){var y=p>>5;p%=32;for(var E=T.g.length-y,v=[],R=0;R<E;R++)v[R]=0<p?T.i(R+y)>>>p|T.i(R+y+1)<<32-p:T.i(R+y);return new a(v,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Su=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,we=a}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xu,Ln,Cu,Lr,ns,Du,Nu,ku;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dr=="object"&&Dr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function i(o,l){if(l)t:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var w=o[m];if(!(w in h))break t;h=h[w]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,m=!1,w={next:function(){if(!m&&h<o.length){var V=h++;return{value:l(V,o[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,m),o.apply(l,w)}}return function(){return o.apply(l,arguments)}}function I(o,l,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,I.apply(null,arguments)}function P(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function x(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,w,V){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return l.prototype[w].apply(m,k)}}function N(o){const l=o.length;if(0<l){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function C(o,l){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(c(m)){const w=o.length||0,V=m.length||0;o.length=w+V;for(let k=0;k<V;k++)o[w+k]=m[k]}else o.push(m)}}class G{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function q(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var tt=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function Q(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function T(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function p(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(h in m)o[h]=m[h];for(let V=0;V<y.length;V++)h=y[V],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function v(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function _(){var o=Vi;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Kt{constructor(){this.h=this.g=null}add(l,h){const m=pn.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var pn=new G(()=>new xc,o=>o.reset());class xc{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let _n,yn=!1,Vi=new Kt,po=()=>{const o=u.Promise.resolve(void 0);_n=()=>{o.then(Cc)}};var Cc=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var l=pn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}yn=!1};function Jt(){this.s=this.s,this.C=this.C}Jt.prototype.s=!1,Jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var Dc=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return o}();function In(o,l){if(pt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(tt){t:{try{H(l.nodeName);var w=!0;break t}catch{}w=!1}w||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Nc[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&In.aa.h.call(this)}}x(In,pt);var Nc={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var fr="closure_listenable_"+(1e6*Math.random()|0),kc=0;function Mc(o,l,h,m,w){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=w,this.key=++kc,this.da=this.fa=!1}function mr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function gr(o){this.src=o,this.g={},this.h=0}gr.prototype.add=function(o,l,h,m,w){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var k=Si(o,l,m,w);return-1<k?(l=o[k],h||(l.fa=!1)):(l=new Mc(l,this.src,V,!!m,w),l.fa=h,o.push(l)),l};function bi(o,l){var h=l.type;if(h in o.g){var m=o.g[h],w=Array.prototype.indexOf.call(m,l,void 0),V;(V=0<=w)&&Array.prototype.splice.call(m,w,1),V&&(mr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Si(o,l,h,m){for(var w=0;w<o.length;++w){var V=o[w];if(!V.da&&V.listener==l&&V.capture==!!h&&V.ha==m)return w}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),Ci={};function _o(o,l,h,m,w){if(Array.isArray(l)){for(var V=0;V<l.length;V++)_o(o,l[V],h,m,w);return null}return h=To(h),o&&o[fr]?o.K(l,h,d(m)?!!m.capture:!1,w):Fc(o,l,h,!1,m,w)}function Fc(o,l,h,m,w,V){if(!l)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,Z=Ni(o);if(Z||(o[xi]=Z=new gr(o)),h=Z.add(l,h,m,k,V),h.proxy)return h;if(m=Oc(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)Dc||(w=k),w===void 0&&(w=!1),o.addEventListener(l.toString(),m,w);else if(o.attachEvent)o.attachEvent(Io(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Oc(){function o(h){return l.call(o.src,o.listener,h)}const l=Lc;return o}function yo(o,l,h,m,w){if(Array.isArray(l))for(var V=0;V<l.length;V++)yo(o,l[V],h,m,w);else m=d(m)?!!m.capture:!!m,h=To(h),o&&o[fr]?(o=o.i,l=String(l).toString(),l in o.g&&(V=o.g[l],h=Si(V,h,m,w),-1<h&&(mr(V[h]),Array.prototype.splice.call(V,h,1),V.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ni(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Si(l,h,m,w)),(h=-1<o?l[o]:null)&&Di(h))}function Di(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[fr])bi(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent(Io(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=Ni(l))?(bi(h,o),h.h==0&&(h.src=null,l[xi]=null)):mr(o)}}}function Io(o){return o in Ci?Ci[o]:Ci[o]="on"+o}function Lc(o,l){if(o.da)o=!0;else{l=new In(l,this);var h=o.listener,m=o.ha||o.src;o.fa&&Di(o),o=h.call(m,l)}return o}function Ni(o){return o=o[xi],o instanceof gr?o:null}var ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function To(o){return typeof o=="function"?o:(o[ki]||(o[ki]=function(l){return o.handleEvent(l)}),o[ki])}function _t(){Jt.call(this),this.i=new gr(this),this.M=this,this.F=null}x(_t,Jt),_t.prototype[fr]=!0,_t.prototype.removeEventListener=function(o,l,h,m){yo(this,o,l,h,m)};function At(o,l){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new pt(l,o);else if(l instanceof pt)l.target=l.target||o;else{var w=l;l=new pt(m,o),E(l,w)}if(w=!0,h)for(var V=h.length-1;0<=V;V--){var k=l.g=h[V];w=pr(k,m,!0,l)&&w}if(k=l.g=o,w=pr(k,m,!0,l)&&w,w=pr(k,m,!1,l)&&w,h)for(V=0;V<h.length;V++)k=l.g=h[V],w=pr(k,m,!1,l)&&w}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],m=0;m<h.length;m++)mr(h[m]);delete o.g[l],o.h--}}this.F=null},_t.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},_t.prototype.L=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function pr(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var w=!0,V=0;V<l.length;++V){var k=l[V];if(k&&!k.da&&k.capture==h){var Z=k.listener,ft=k.ha||k.src;k.fa&&bi(o.i,k),w=Z.call(ft,m)!==!1&&w}}return w&&!m.defaultPrevented}function Eo(o,l,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function vo(o){o.g=Eo(()=>{o.g=null,o.i&&(o.i=!1,vo(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Uc extends Jt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:vo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(o){Jt.call(this),this.h=o,this.g={}}x(Tn,Jt);var wo=[];function Ao(o){Q(o.g,function(l,h){this.g.hasOwnProperty(h)&&Di(l)},o),o.g={}}Tn.prototype.N=function(){Tn.aa.N.call(this),Ao(this)},Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mi=u.JSON.stringify,Bc=u.JSON.parse,qc=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Fi(){}Fi.prototype.h=null;function Ro(o){return o.h||(o.h=o.i())}function Po(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oi(){pt.call(this,"d")}x(Oi,pt);function Li(){pt.call(this,"c")}x(Li,pt);var fe={},Vo=null;function _r(){return Vo=Vo||new _t}fe.La="serverreachability";function bo(o){pt.call(this,fe.La,o)}x(bo,pt);function vn(o){const l=_r();At(l,new bo(l))}fe.STAT_EVENT="statevent";function So(o,l){pt.call(this,fe.STAT_EVENT,o),this.stat=l}x(So,pt);function Rt(o){const l=_r();At(l,new So(l,o))}fe.Ma="timingevent";function xo(o,l){pt.call(this,fe.Ma,o),this.size=l}x(xo,pt);function wn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function jc(o,l,h,m,w,V){o.info(function(){if(o.g)if(V)for(var k="",Z=V.split("&"),ft=0;ft<Z.length;ft++){var W=Z[ft].split("=");if(1<W.length){var yt=W[0];W=W[1];var It=yt.split("_");k=2<=It.length&&It[1]=="type"?k+(yt+"="+W+"&"):k+(yt+"=redacted&")}}else k=null;else k=V;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+l+`
`+h+`
`+k})}function Gc(o,l,h,m,w,V,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+l+`
`+h+`
`+V+" "+k})}function je(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+zc(o,h)+(m?" "+m:"")})}function Kc(o,l){o.info(function(){return"TIMEOUT: "+l})}An.prototype.info=function(){};function zc(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var w=m[1];if(Array.isArray(w)&&!(1>w.length)){var V=w[0];if(V!="noop"&&V!="stop"&&V!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return Mi(h)}catch{return l}}var yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Co={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ui;function Ir(){}x(Ir,Fi),Ir.prototype.g=function(){return new XMLHttpRequest},Ir.prototype.i=function(){return{}},Ui=new Ir;function Xt(o,l,h,m){this.j=o,this.i=l,this.l=h,this.R=m||1,this.U=new Tn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Do}function Do(){this.i=null,this.g="",this.h=!1}var No={},Bi={};function qi(o,l,h){o.L=1,o.v=wr(zt(l)),o.m=h,o.P=!0,ko(o,null)}function ko(o,l){o.F=Date.now(),Tr(o),o.A=zt(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Wo(h.i,"t",m),o.C=0,h=o.j.J,o.h=new Do,o.g=da(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Uc(I(o.Y,o,o.g),o.O)),l=o.U,h=o.g,m=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(wo[0]=w.toString()),w=wo);for(var V=0;V<w.length;V++){var k=_o(h,w[V],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),vn(),jc(o.i,o.u,o.A,o.l,o.R,o.m)}Xt.prototype.ca=function(o){o=o.target;const l=this.M;l&&$t(o)==3?l.j():this.Y(o)},Xt.prototype.Y=function(o){try{if(o==this.g)t:{const It=$t(this.g);var l=this.g.Ba();const ze=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||ea(this.g)))){this.J||It!=4||l==7||(l==8||0>=ze?vn(3):vn(2)),ji(this);var h=this.g.Z();this.X=h;e:if(Mo(this)){var m=ea(this.g);o="";var w=m.length,V=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){me(this),Rn(this);var k="";break e}this.h.i=new u.TextDecoder}for(l=0;l<w;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(V&&l==w-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Gc(this.i,this.u,this.A,this.l,this.R,It,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,ft=this.g;if((Z=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Z)){var W=Z;break e}}W=null}if(h=W)je(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gi(this,h);else{this.o=!1,this.s=3,Rt(12),me(this),Rn(this);break t}}if(this.P){h=!0;let Ot;for(;!this.J&&this.C<k.length;)if(Ot=$c(this,k),Ot==Bi){It==4&&(this.s=4,Rt(14),h=!1),je(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==No){this.s=4,Rt(15),je(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else je(this.i,this.l,Ot,null),Gi(this,Ot);if(Mo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||k.length!=0||this.h.h||(this.s=1,Rt(16),h=!1),this.o=this.o&&h,!h)je(this.i,this.l,k,"[Invalid Chunked Response]"),me(this),Rn(this);else if(0<k.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Hi(yt),yt.M=!0,Rt(11))}}else je(this.i,this.l,k,null),Gi(this,k);It==4&&me(this),this.o&&!this.J&&(It==4?ua(this.j,this):(this.o=!1,Tr(this)))}else lh(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),me(this),Rn(this)}}}catch{}finally{}};function Mo(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function $c(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?Bi:(h=Number(l.substring(h,m)),isNaN(h)?No:(m+=1,m+h>l.length?Bi:(l=l.slice(m,m+h),o.C=m+h,l)))}Xt.prototype.cancel=function(){this.J=!0,me(this)};function Tr(o){o.S=Date.now()+o.I,Fo(o,o.I)}function Fo(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=wn(I(o.ba,o),l)}function ji(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Xt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Kc(this.i,this.A),this.L!=2&&(vn(),Rt(17)),me(this),this.s=2,Rn(this)):Fo(this,this.S-o)};function Rn(o){o.j.G==0||o.J||ua(o.j,o)}function me(o){ji(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Ao(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Gi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Ki(h.h,o))){if(!o.K&&Ki(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Sr(h),Vr(h);else break t;Wi(h),Rt(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=wn(I(h.Za,h),6e3));if(1>=Uo(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else pe(h,11)}else if((o.K||h.g==o)&&Sr(h),!q(l))for(w=h.Da.g.parse(l),l=0;l<w.length;l++){let W=w[l];if(h.T=W[0],W=W[1],h.G==2)if(W[0]=="c"){h.K=W[1],h.ia=W[2];const yt=W[3];yt!=null&&(h.la=yt,h.j.info("VER="+h.la));const It=W[4];It!=null&&(h.Aa=It,h.j.info("SVER="+h.Aa));const ze=W[5];ze!=null&&typeof ze=="number"&&0<ze&&(m=1.5*ze,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Ot=o.g;if(Ot){const Cr=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cr){var V=m.h;V.g||Cr.indexOf("spdy")==-1&&Cr.indexOf("quic")==-1&&Cr.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(zi(V,V.h),V.h=null))}if(m.D){const Yi=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Yi&&(m.ya=Yi,et(m.I,m.D,Yi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var k=o;if(m.qa=ha(m,m.J?m.ia:null,m.W),k.K){Bo(m.h,k);var Z=k,ft=m.L;ft&&(Z.I=ft),Z.B&&(ji(Z),Tr(Z)),m.g=k}else oa(m);0<h.i.length&&br(h)}else W[0]!="stop"&&W[0]!="close"||pe(h,7);else h.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?pe(h,7):Qi(h):W[0]!="noop"&&h.l&&h.l.ta(W),h.v=0)}}vn(4)}catch{}}var Qc=class{constructor(o,l){this.g=o,this.map=l}};function Oo(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lo(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Uo(o){return o.h?1:o.g?o.g.size:0}function Ki(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function zi(o,l){o.g?o.g.add(l):o.h=l}function Bo(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Oo.prototype.cancel=function(){if(this.i=qo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function qo(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return N(o.i)}function Wc(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],h=o.length,m=0;m<h;m++)l.push(o[m]);return l}l=[],h=0;for(m in o)l[h++]=o[m];return l}function Hc(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const m in o)l[h++]=m;return l}}}function jo(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Hc(o),m=Wc(o),w=m.length,V=0;V<w;V++)l.call(void 0,m[V],h&&h[V],o)}var Go=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yc(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),w=null;if(0<=m){var V=o[h].substring(0,m);w=o[h].substring(m+1)}else V=o[h];l(V,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ge(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ge){this.h=o.h,Er(this,o.j),this.o=o.o,this.g=o.g,vr(this,o.s),this.l=o.l;var l=o.i,h=new bn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Ko(this,h),this.m=o.m}else o&&(l=String(o).match(Go))?(this.h=!1,Er(this,l[1]||"",!0),this.o=Pn(l[2]||""),this.g=Pn(l[3]||"",!0),vr(this,l[4]),this.l=Pn(l[5]||"",!0),Ko(this,l[6]||"",!0),this.m=Pn(l[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}ge.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Vn(l,zo,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Vn(l,zo,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Vn(h,h.charAt(0)=="/"?Zc:Xc,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Vn(h,eh)),o.join("")};function zt(o){return new ge(o)}function Er(o,l,h){o.j=h?Pn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function vr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ko(o,l,h){l instanceof bn?(o.i=l,nh(o.i,o.h)):(h||(l=Vn(l,th)),o.i=new bn(l,o.h))}function et(o,l,h){o.i.set(l,h)}function wr(o){return et(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Pn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Vn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Jc),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Jc(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zo=/[#\/\?@]/g,Xc=/[#\?:]/g,Zc=/[#\?]/g,th=/[#\?@]/g,eh=/#/g;function bn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Zt(o){o.g||(o.g=new Map,o.h=0,o.i&&Yc(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=bn.prototype,r.add=function(o,l){Zt(this),this.i=null,o=Ge(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function $o(o,l){Zt(o),l=Ge(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Qo(o,l){return Zt(o),l=Ge(o,l),o.g.has(l)}r.forEach=function(o,l){Zt(this),this.g.forEach(function(h,m){h.forEach(function(w){o.call(l,w,m,this)},this)},this)},r.na=function(){Zt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let m=0;m<l.length;m++){const w=o[m];for(let V=0;V<w.length;V++)h.push(l[m])}return h},r.V=function(o){Zt(this);let l=[];if(typeof o=="string")Qo(this,o)&&(l=l.concat(this.g.get(Ge(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},r.set=function(o,l){return Zt(this),this.i=null,o=Ge(this,o),Qo(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Wo(o,l,h){$o(o,l),0<h.length&&(o.i=null,o.g.set(Ge(o,l),N(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var m=l[h];const V=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var w=V;k[m]!==""&&(w+="="+encodeURIComponent(String(k[m]))),o.push(w)}}return this.i=o.join("&")};function Ge(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function nh(o,l){l&&!o.j&&(Zt(o),o.i=null,o.g.forEach(function(h,m){var w=m.toLowerCase();m!=w&&($o(this,m),Wo(this,w,h))},o)),o.j=l}function rh(o,l){const h=new An;if(u.Image){const m=new Image;m.onload=P(te,h,"TestLoadImage: loaded",!0,l,m),m.onerror=P(te,h,"TestLoadImage: error",!1,l,m),m.onabort=P(te,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=P(te,h,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function ih(o,l){const h=new An,m=new AbortController,w=setTimeout(()=>{m.abort(),te(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(V=>{clearTimeout(w),V.ok?te(h,"TestPingServer: ok",!0,l):te(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(w),te(h,"TestPingServer: error",!1,l)})}function te(o,l,h,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(h)}catch{}}function sh(){this.g=new qc}function oh(o,l,h){const m=h||"";try{jo(o,function(w,V){let k=w;d(w)&&(k=Mi(w)),l.push(m+V+"="+encodeURIComponent(k))})}catch(w){throw l.push(m+"type="+encodeURIComponent("_badmap")),w}}function Ar(o){this.l=o.Ub||null,this.j=o.eb||!1}x(Ar,Fi),Ar.prototype.g=function(){return new Rr(this.l,this.j)},Ar.prototype.i=function(o){return function(){return o}}({});function Rr(o,l){_t.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Rr,_t),r=Rr.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,xn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ho(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ho(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Sn(this):xn(this),this.readyState==3&&Ho(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Sn(this))},r.Qa=function(o){this.g&&(this.response=o,Sn(this))},r.ga=function(){this.g&&Sn(this)};function Sn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,xn(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function xn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Yo(o){let l="";return Q(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function $i(o,l,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=Yo(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):et(o,l,h))}function ot(o){_t.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ot,_t);var ah=/^https?$/i,uh=["POST","PUT"];r=ot.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ui.g(),this.v=this.o?Ro(this.o):Ro(Ui),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(V){Jo(this,V);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)h.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())h.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(V=>V.toLowerCase()=="content-type"),w=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(uh,l,void 0))||m||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,k]of h)this.g.setRequestHeader(V,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ta(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){Jo(this,V)}};function Jo(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Xo(o),Pr(o)}function Xo(o){o.A||(o.A=!0,At(o,"complete"),At(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,At(this,"complete"),At(this,"abort"),Pr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pr(this,!0)),ot.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Zo(this):this.bb())},r.bb=function(){Zo(this)};function Zo(o){if(o.h&&typeof a<"u"&&(!o.v[1]||$t(o)!=4||o.Z()!=2)){if(o.u&&$t(o)==4)Eo(o.Ea,0,o);else if(At(o,"readystatechange"),$t(o)==4){o.h=!1;try{const k=o.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var m;if(m=k===0){var w=String(o.D).match(Go)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),m=!ah.test(w?w.toLowerCase():"")}h=m}if(h)At(o,"complete"),At(o,"success");else{o.m=6;try{var V=2<$t(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",Xo(o)}}finally{Pr(o)}}}}function Pr(o,l){if(o.g){ta(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||At(o,"ready");try{h.onreadystatechange=m}catch{}}}function ta(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function $t(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Bc(l)}};function ea(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function lh(o){const l={};o=(o.g&&2<=$t(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(q(o[m]))continue;var h=v(o[m]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const V=l[w]||[];l[w]=V,V.push(h)}T(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function na(o){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cn("baseRetryDelayMs",5e3,o),this.cb=Cn("retryDelaySeedMs",1e4,o),this.Wa=Cn("forwardChannelMaxRetries",2,o),this.wa=Cn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Oo(o&&o.concurrentRequestLimit),this.Da=new sh,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=na.prototype,r.la=8,r.G=1,r.connect=function(o,l,h,m){Rt(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=ha(this,null,this.W),br(this)};function Qi(o){if(ra(o),o.G==3){var l=o.U++,h=zt(o.I);if(et(h,"SID",o.K),et(h,"RID",l),et(h,"TYPE","terminate"),Dn(o,h),l=new Xt(o,o.j,l),l.L=2,l.v=wr(zt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=da(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Tr(l)}ca(o)}function Vr(o){o.g&&(Hi(o),o.g.cancel(),o.g=null)}function ra(o){Vr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Sr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function br(o){if(!Lo(o.h)&&!o.s){o.s=!0;var l=o.Ga;_n||po(),yn||(_n(),yn=!0),Vi.add(l,o),o.B=0}}function ch(o,l){return Uo(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=wn(I(o.Ga,o,l),la(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new Xt(this,this.j,o);let V=this.o;if(this.S&&(V?(V=p(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(w.H=V,V=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=sa(this,w,l),h=zt(this.I),et(h,"RID",o),et(h,"CVER",22),this.D&&et(h,"X-HTTP-Session-Id",this.D),Dn(this,h),V&&(this.O?l="headers="+encodeURIComponent(String(Yo(V)))+"&"+l:this.m&&$i(h,this.m,V)),zi(this.h,w),this.Ua&&et(h,"TYPE","init"),this.P?(et(h,"$req",l),et(h,"SID","null"),w.T=!0,qi(w,h,null)):qi(w,h,l),this.G=2}}else this.G==3&&(o?ia(this,o):this.i.length==0||Lo(this.h)||ia(this))};function ia(o,l){var h;l?h=l.l:h=o.U++;const m=zt(o.I);et(m,"SID",o.K),et(m,"RID",h),et(m,"AID",o.T),Dn(o,m),o.m&&o.o&&$i(m,o.m,o.o),h=new Xt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=sa(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),zi(o.h,h),qi(h,m,l)}function Dn(o,l){o.H&&Q(o.H,function(h,m){et(l,m,h)}),o.l&&jo({},function(h,m){et(l,m,h)})}function sa(o,l,h){h=Math.min(o.i.length,h);var m=o.l?I(o.l.Na,o.l,o):null;t:{var w=o.i;let V=-1;for(;;){const k=["count="+h];V==-1?0<h?(V=w[0].g,k.push("ofs="+V)):V=0:k.push("ofs="+V);let Z=!0;for(let ft=0;ft<h;ft++){let W=w[ft].g;const yt=w[ft].map;if(W-=V,0>W)V=Math.max(0,w[ft].g-100),Z=!1;else try{oh(yt,k,"req"+W+"_")}catch{m&&m(yt)}}if(Z){m=k.join("&");break t}}}return o=o.i.splice(0,h),l.D=o,m}function oa(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;_n||po(),yn||(_n(),yn=!0),Vi.add(l,o),o.v=0}}function Wi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=wn(I(o.Fa,o),la(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,aa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=wn(I(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Vr(this),aa(this))};function Hi(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function aa(o){o.g=new Xt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=zt(o.qa);et(l,"RID","rpc"),et(l,"SID",o.K),et(l,"AID",o.T),et(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&et(l,"TO",o.ja),et(l,"TYPE","xmlhttp"),Dn(o,l),o.m&&o.o&&$i(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=wr(zt(l)),h.m=null,h.P=!0,ko(h,o)}r.Za=function(){this.C!=null&&(this.C=null,Vr(this),Wi(this),Rt(19))};function Sr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function ua(o,l){var h=null;if(o.g==l){Sr(o),Hi(o),o.g=null;var m=2}else if(Ki(o.h,l))h=l.D,Bo(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var w=o.B;m=_r(),At(m,new xo(m,h)),br(o)}else oa(o);else if(w=l.s,w==3||w==0&&0<l.X||!(m==1&&ch(o,l)||m==2&&Wi(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),w){case 1:pe(o,5);break;case 4:pe(o,10);break;case 3:pe(o,6);break;default:pe(o,2)}}}function la(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function pe(o,l){if(o.j.info("Error code "+l),l==2){var h=I(o.fb,o),m=o.Xa;const w=!m;m=new ge(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Er(m,"https"),wr(m),w?rh(m.toString(),h):ih(m.toString(),h)}else Rt(2);o.G=0,o.l&&o.l.sa(l),ca(o),ra(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function ca(o){if(o.G=0,o.ka=[],o.l){const l=qo(o.h);(l.length!=0||o.i.length!=0)&&(C(o.ka,l),C(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function ha(o,l,h){var m=h instanceof ge?zt(h):new ge(h);if(m.g!="")l&&(m.g=l+"."+m.g),vr(m,m.s);else{var w=u.location;m=w.protocol,l=l?l+"."+w.hostname:w.hostname,w=+w.port;var V=new ge(null);m&&Er(V,m),l&&(V.g=l),w&&vr(V,w),h&&(V.l=h),m=V}return h=o.D,l=o.ya,h&&l&&et(m,h,l),et(m,"VER",o.la),Dn(o,m),m}function da(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ot(new Ar({eb:h})):new ot(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fa(){}r=fa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function xr(){}xr.prototype.g=function(o,l){return new Ct(o,l)};function Ct(o,l){_t.call(this),this.g=new na(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!q(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!q(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Ke(this)}x(Ct,_t),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Qi(this.g)},Ct.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Mi(o),o=h);l.i.push(new Qc(l.Ya++,o)),l.G==3&&br(l)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Qi(this.g),delete this.g,Ct.aa.N.call(this)};function ma(o){Oi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}x(ma,Oi);function ga(){Li.call(this),this.status=1}x(ga,Li);function Ke(o){this.g=o}x(Ke,fa),Ke.prototype.ua=function(){At(this.g,"a")},Ke.prototype.ta=function(o){At(this.g,new ma(o))},Ke.prototype.sa=function(o){At(this.g,new ga)},Ke.prototype.ra=function(){At(this.g,"b")},xr.prototype.createWebChannel=xr.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,ku=function(){return new xr},Nu=function(){return _r()},Du=fe,ns={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yr.NO_ERROR=0,yr.TIMEOUT=8,yr.HTTP_ERROR=6,Lr=yr,Co.COMPLETE="complete",Cu=Co,Po.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Ln=Po,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,xu=ot}).apply(typeof Dr<"u"?Dr:typeof self<"u"?self:typeof window<"u"?window:{});const ya="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new hh("@firebase/firestore");function Ye(){return Re.logLevel}function S(r,...t){if(Re.logLevel<=Qt.DEBUG){const e=t.map(vs);Re.debug(`Firestore (${dn}): ${r}`,...e)}}function Pt(r,...t){if(Re.logLevel<=Qt.ERROR){const e=t.map(vs);Re.error(`Firestore (${dn}): ${r}`,...e)}}function Pe(r,...t){if(Re.logLevel<=Qt.WARN){const e=t.map(vs);Re.warn(`Firestore (${dn}): ${r}`,...e)}}function vs(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r="Unexpected state"){const t=`FIRESTORE (${dn}) INTERNAL ASSERTION FAILED: `+r;throw Pt(t),new Error(t)}function O(r,t){r||F()}function B(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends mh{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Eh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class vh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class wh{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){O(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let s=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(O(typeof n.accessToken=="string"),new Mu(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return O(t===null||typeof t=="string"),new mt(t)}}class Ah{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Rh{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Ah(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ph{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){O(this.o===void 0);const n=s=>{s.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,S("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const i=s=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(O(typeof e.token=="string"),this.R=e.token,new Ph(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=bh(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function j(r,t){return r<t?-1:r>t?1:0}function rn(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}function Ou(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new D(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new st(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new st(0,0))}static max(){return new L(new st(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e,n){e===void 0?e=0:e>t.length&&F(),n===void 0?n=t.length-e:n>t.length-e&&F(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Qn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Qn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=t.get(i),a=e.get(i);if(s<a)return-1;if(s>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends Qn{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const Sh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Qn{construct(t,e,n){return new it(t,e,n)}static isValidIdentifier(t){return Sh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(n.length===0)throw new D(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new D(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(s(),i++)}if(s(),a)throw new D(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}function rs(r){return r.fields.find(t=>t.kind===2)}function ye(r){return r.fields.filter(t=>t.kind!==2)}Wr.UNKNOWN_ID=-1;class Ur{constructor(t,e){this.fieldPath=t,this.kind=e}}class Wn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Wn(0,kt.min())}}function xh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new st(e+1,0):new st(e,n));return new kt(i,M.empty(),t)}function Lu(r){return new kt(r.readTime,r.key,-1)}class kt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new kt(L.min(),M.empty(),-1)}static max(){return new kt(L.max(),M.empty(),-1)}}function ws(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:j(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(r){if(r.code!==b.FAILED_PRECONDITION||r.message!==Uu)throw r;S("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new A((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof A?e:A.resolve(e)}catch(e){return A.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):A.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):A.reject(e)}static resolve(t){return new A((e,n)=>{e(t)})}static reject(t){return new A((e,n)=>{n(t)})}static waitFor(t){return new A((e,n)=>{let i=0,s=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&e()},c=>n(c))}),a=!0,s===i&&e()})}static or(t){let e=A.resolve(!1);for(const n of t)e=e.next(i=>i?A.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,s)=>{n.push(e.call(this,i,s))}),this.waitFor(n)}static mapArray(t,e){return new A((n,i)=>{const s=t.length,a=new Array(s);let u=0;for(let c=0;c<s;c++){const d=c;e(t[d]).next(f=>{a[d]=f,++u,u===s&&n(a)},f=>i(f))}})}static doWhile(t,e){return new A((n,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):n()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new qt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Gn(t,e.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=As(n.target.error);this.V.reject(new Gn(t,i))}}static open(t,e,n,i){try{return new ai(e,t.transaction(i,n))}catch(s){throw new Gn(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(S("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Dh(e)}}class se{constructor(t,e,n){this.name=t,this.version=e,this.p=n,se.S(Qr())===12.2&&Pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return S("SimpleDb","Removing database:",t),Ie(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Th())return!1;if(se.v())return!0;const t=Qr(),e=se.S(t),n=0<e&&e<10,i=qu(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||s)}static v(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.C)==="YES"}static F(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(t){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;e(a)},i.onblocked=()=>{n(new Gn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?n(new D(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new D(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Gn(t,a))},i.onupgradeneeded=s=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.p.O(a,i.transaction,s.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(t){this.N=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,i){const s=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(t);const u=ai.open(this.db,t,s?"readonly":"readwrite",n),c=i(u).next(d=>(u.g(),d)).catch(d=>(u.abort(d),A.reject(d))).toPromise();return c.catch(()=>{}),await u.m,c}catch(u){const c=u,d=c.name!=="FirebaseError"&&a<3;if(S("SimpleDb","Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function qu(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Ch{constructor(t){this.B=t,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(t){this.B=t}done(){this.k=!0}$(t){this.q=t}delete(){return Ie(this.B.delete())}}class Gn extends D{constructor(t,e){super(b.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function he(r){return r.name==="IndexedDbTransactionError"}class Dh{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(S("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ie(n)}add(t){return S("SimpleDb","ADD",this.store.name,t,t),Ie(this.store.add(t))}get(t){return Ie(this.store.get(t)).next(e=>(e===void 0&&(e=null),S("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return S("SimpleDb","DELETE",this.store.name,t),Ie(this.store.delete(t))}count(){return S("SimpleDb","COUNT",this.store.name),Ie(this.store.count())}U(t,e){const n=this.options(t,e),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new A((a,u)=>{s.onerror=c=>{u(c.target.error)},s.onsuccess=c=>{a(c.target.result)}})}{const s=this.cursor(n),a=[];return this.W(s,(u,c)=>{a.push(c)}).next(()=>a)}}G(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new A((i,s)=>{n.onerror=a=>{s(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}j(t,e){S("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const i=this.cursor(n);return this.W(i,(s,a,u)=>u.delete())}J(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.W(i,e)}Y(t){const e=this.cursor({});return new A((n,i)=>{e.onerror=s=>{const a=As(s.target.error);i(a)},e.onsuccess=s=>{const a=s.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}W(t,e){const n=[];return new A((i,s)=>{t.onerror=a=>{s(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void i();const c=new Ch(u),d=e(u.primaryKey,u.value,c);if(d instanceof A){const f=d.catch(g=>(c.done(),A.reject(g)));n.push(f)}c.isDone?i():c.K===null?u.continue():u.continue(c.K)}}).next(()=>A.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ie(r){return new A((t,e)=>{r.onsuccess=n=>{const i=n.target.result;t(i)},r.onerror=n=>{const i=As(n.target.error);e(i)}})}let Ia=!1;function As(r){const t=se.S(Qr());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ia||(Ia=!0,setTimeout(()=>{throw n},0)),n}}return r}class Nh{constructor(t,e){this.asyncQueue=t,this.Z=e,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(t){S("IndexBackfiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{S("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){he(e)?S("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await Fe(e)}await this.X(6e4)})}}class kh{constructor(t,e){this.localStore=t,this.persistence=e}async ee(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.te(e,t))}te(t,e){const n=new Set;let i=e,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return S("IndexBackfiller",`Processing collection: ${a}`),this.ne(t,a,i).next(u=>{i-=u,n.add(a)});s=!1})).next(()=>e-i)}ne(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,n).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.re(i,s)).next(u=>(S("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}re(t,e){let n=t;return e.changes.forEach((i,s)=>{const a=Lu(s);ws(a,n)>0&&(n=a)}),new kt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Mt.oe=-1;function ui(r){return r==null}function Hn(r){return r===0&&1/r==-1/0}function Mh(r){return typeof r=="number"&&Number.isInteger(r)&&!Hn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ta(t)),t=Fh(r.get(e),t);return Ta(t)}function Fh(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":e+="";break;case"":e+="";break;default:e+=s}}return e}function Ta(r){return r+""}function Ut(r){const t=r.length;if(O(t>=2),t===2)return O(r.charAt(0)===""&&r.charAt(1)===""),Y.emptyPath();const e=t-2,n=[];let i="";for(let s=0;s<t;){const a=r.indexOf("",s);switch((a<0||a>e)&&F(),r.charAt(a+1)){case"":const u=r.substring(s,a);let c;i.length===0?c=u:(i+=u,c=i,i=""),n.push(c);break;case"":i+=r.substring(s,a),i+="\0";break;case"":i+=r.substring(s,a+1);break;default:F()}s=a+2}return new Y(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(r,t){return[r,Vt(t)]}function ju(r,t,e){return[r,Vt(t),e]}const Oh={},Lh=["prefixPath","collectionGroup","readTime","documentId"],Uh=["prefixPath","collectionGroup","documentId"],Bh=["collectionGroup","readTime","prefixPath","documentId"],qh=["canonicalId","targetId"],jh=["targetId","path"],Gh=["path","targetId"],Kh=["collectionId","parent"],zh=["indexId","uid"],$h=["uid","sequenceNumber"],Qh=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Wh=["indexId","uid","orderedDocumentKey"],Hh=["userId","collectionPath","documentId"],Yh=["userId","collectionPath","largestBatchId"],Jh=["userId","collectionGroup","largestBatchId"],Gu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Xh=[...Gu,"documentOverlays"],Ku=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zu=Ku,Rs=[...zu,"indexConfiguration","indexState","indexEntries"],Zh=Rs,td=[...Rs,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends Bu{constructor(t,e){super(),this._e=t,this.currentSequenceNumber=e}}function ht(r,t){const e=B(r);return se.F(e._e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Oe(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function $u(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nr(this.root,t,this.comparator,!0)}}class Nr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=n??gt.RED,this.left=i??gt.EMPTY,this.right=s??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new gt(t??this.key,e??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,i,s){return this}insert(t,e,n){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new wa(this.data.getIterator())}getIteratorFrom(t){return new wa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof X)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new X(this.comparator);return e.data=t,e}}class wa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function $e(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new xt([])}unionWith(t){let e=new X(it.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return rn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qu("Invalid base64 string: "+s):s}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const ed=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(r){if(O(!!r),typeof r=="string"){let t=0;const e=ed.exec(r);if(O(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:nt(r.seconds),nanos:nt(r.nanos)}}function nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ae(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Ps(r){const t=r.mapValue.fields.__previous_value__;return li(t)?Ps(t):t}function Yn(r){const t=Ht(r.mapValue.fields.__local_write_time__.timestampValue);return new st(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t,e,n,i,s,a,u,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class Ve{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ve("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ve&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},qr={nullValue:"NULL_VALUE"};function be(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?li(r)?4:Wu(r)?9007199254740991:ci(r)?10:11:F()}function jt(r,t){if(r===t)return!0;const e=be(r);if(e!==be(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Yn(r).isEqual(Yn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Ht(i.timestampValue),u=Ht(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,s){return ae(i.bytesValue).isEqual(ae(s.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,s){return nt(i.geoPointValue.latitude)===nt(s.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(s.geoPointValue.longitude)}(r,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return nt(i.integerValue)===nt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=nt(i.doubleValue),u=nt(s.doubleValue);return a===u?Hn(a)===Hn(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return rn(r.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(va(a)!==va(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!jt(a[c],u[c])))return!1;return!0}(r,t);default:return F()}}function Jn(r,t){return(r.values||[]).find(e=>jt(e,t))!==void 0}function ue(r,t){if(r===t)return 0;const e=be(r),n=be(t);if(e!==n)return j(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,t.booleanValue);case 2:return function(s,a){const u=nt(s.integerValue||s.doubleValue),c=nt(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,t);case 3:return Aa(r.timestampValue,t.timestampValue);case 4:return Aa(Yn(r),Yn(t));case 5:return j(r.stringValue,t.stringValue);case 6:return function(s,a){const u=ae(s),c=ae(a);return u.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(s,a){const u=s.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const f=j(u[d],c[d]);if(f!==0)return f}return j(u.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(s,a){const u=j(nt(s.latitude),nt(a.latitude));return u!==0?u:j(nt(s.longitude),nt(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ra(r.arrayValue,t.arrayValue);case 10:return function(s,a){var u,c,d,f;const g=s.fields||{},I=a.fields||{},P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,x=(c=I.value)===null||c===void 0?void 0:c.arrayValue,N=j(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Ra(P,x)}(r.mapValue,t.mapValue);case 11:return function(s,a){if(s===ie.mapValue&&a===ie.mapValue)return 0;if(s===ie.mapValue)return 1;if(a===ie.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const I=j(c[g],f[g]);if(I!==0)return I;const P=ue(u[c[g]],d[f[g]]);if(P!==0)return P}return j(c.length,f.length)}(r.mapValue,t.mapValue);default:throw F()}}function Aa(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return j(r,t);const e=Ht(r),n=Ht(t),i=j(e.seconds,n.seconds);return i!==0?i:j(e.nanos,n.nanos)}function Ra(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const s=ue(e[i],n[i]);if(s)return s}return j(e.length,n.length)}function sn(r){return ss(r)}function ss(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Ht(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ae(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const s of e.values||[])i?i=!1:n+=",",n+=ss(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${ss(e.fields[a])}`;return i+"}"}(r.mapValue):F()}function Se(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function os(r){return!!r&&"integerValue"in r}function Xn(r){return!!r&&"arrayValue"in r}function Pa(r){return!!r&&"nullValue"in r}function Va(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function jr(r){return!!r&&"mapValue"in r}function ci(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Kn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Oe(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Kn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Kn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Wu(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Hu={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function rd(r){return"nullValue"in r?qr:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Se(Ve.empty(),M.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ci(r)?Hu:{mapValue:{}}:F()}function id(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Se(Ve.empty(),M.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Hu:"mapValue"in r?ci(r)?{mapValue:{}}:ie:F()}function ba(r,t){const e=ue(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function Sa(r,t){const e=ue(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!jr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Kn(e)}setAll(t){let e=it.emptyPath(),n={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,i),n={},i=[],e=u.popLast()}a?n[u.lastSegment()]=Kn(a):i.push(u.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());jr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];jr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Oe(e,(i,s)=>t[i]=s);for(const i of n)delete t[i]}clone(){return new Et(Kn(this.value))}}function Yu(r){const t=[];return Oe(r.fields,(e,n)=>{const i=new it([e]);if(jr(n)){const s=Yu(n.mapValue).fields;if(s.length===0)t.push(i);else for(const a of s)t.push(i.child(a))}else t.push(i)}),new xt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e,n,i,s,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(t){return new at(t,0,L.min(),L.min(),L.min(),Et.empty(),0)}static newFoundDocument(t,e,n,i){return new at(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new at(t,2,e,L.min(),L.min(),Et.empty(),0)}static newUnknownDocument(t,e){return new at(t,3,e,L.min(),L.min(),Et.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.position=t,this.inclusive=e}}function xa(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const s=t[i],a=r.position[i];if(s.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),e.key):n=ue(a,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ca(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!jt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e="asc"){this.field=t,this.dir=e}}function sd(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{}class z extends Ju{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new od(t,e,n):e==="array-contains"?new ld(t,n):e==="in"?new rl(t,n):e==="not-in"?new cd(t,n):e==="array-contains-any"?new hd(t,n):new z(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ad(t,n):new ud(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ue(e,this.value)):e!==null&&be(this.value)===be(e)&&this.matchesComparison(ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class J extends Ju{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new J(t,e)}matches(t){return on(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function on(r){return r.op==="and"}function as(r){return r.op==="or"}function Vs(r){return Xu(r)&&on(r)}function Xu(r){for(const t of r.filters)if(t instanceof J)return!1;return!0}function us(r){if(r instanceof z)return r.field.canonicalString()+r.op.toString()+sn(r.value);if(Vs(r))return r.filters.map(t=>us(t)).join(",");{const t=r.filters.map(e=>us(e)).join(",");return`${r.op}(${t})`}}function Zu(r,t){return r instanceof z?function(n,i){return i instanceof z&&n.op===i.op&&n.field.isEqual(i.field)&&jt(n.value,i.value)}(r,t):r instanceof J?function(n,i){return i instanceof J&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,u)=>s&&Zu(a,i.filters[u]),!0):!1}(r,t):void F()}function tl(r,t){const e=r.filters.concat(t);return J.create(e,r.op)}function el(r){return r instanceof z?function(e){return`${e.field.canonicalString()} ${e.op} ${sn(e.value)}`}(r):r instanceof J?function(e){return e.op.toString()+" {"+e.getFilters().map(el).join(" ,")+"}"}(r):"Filter"}class od extends z{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class ad extends z{constructor(t,e){super(t,"in",e),this.keys=nl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ud extends z{constructor(t,e){super(t,"not-in",e),this.keys=nl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function nl(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class ld extends z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xn(e)&&Jn(e.arrayValue,this.value)}}class rl extends z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Jn(this.value.arrayValue,e)}}class cd extends z{constructor(t,e){super(t,"not-in",e)}matches(t){if(Jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Jn(this.value.arrayValue,e)}}class hd extends z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xn(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Jn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e=null,n=[],i=[],s=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.ue=null}}function ls(r,t=null,e=[],n=[],i=null,s=null,a=null){return new dd(r,t,e,n,i,s,a)}function xe(r){const t=B(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>us(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),ui(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>sn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>sn(n)).join(",")),t.ue=e}return t.ue}function er(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!sd(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Zu(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ca(r.startAt,t.startAt)&&Ca(r.endAt,t.endAt)}function Hr(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Yr(r,t){return r.filters.filter(e=>e instanceof z&&e.field.isEqual(t))}function Da(r,t,e){let n=qr,i=!0;for(const s of Yr(r,t)){let a=qr,u=!0;switch(s.op){case"<":case"<=":a=rd(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,u=!1;break;case"!=":case"not-in":a=qr}ba({value:n,inclusive:i},{value:a,inclusive:u})<0&&(n=a,i=u)}if(e!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(t)){const a=e.position[s];ba({value:n,inclusive:i},{value:a,inclusive:e.inclusive})<0&&(n=a,i=e.inclusive);break}}return{value:n,inclusive:i}}function Na(r,t,e){let n=ie,i=!0;for(const s of Yr(r,t)){let a=ie,u=!0;switch(s.op){case">=":case">":a=id(s.value),u=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,u=!1;break;case"!=":case"not-in":a=ie}Sa({value:n,inclusive:i},{value:a,inclusive:u})>0&&(n=a,i=u)}if(e!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(t)){const a=e.position[s];Sa({value:n,inclusive:i},{value:a,inclusive:e.inclusive})>0&&(n=a,i=e.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e=null,n=[],i=[],s=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fd(r,t,e,n,i,s,a,u){return new Le(r,t,e,n,i,s,a,u)}function nr(r){return new Le(r)}function ka(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function bs(r){return r.collectionGroup!==null}function en(r){const t=B(r);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new X(it.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Zn(s,n))}),e.has(it.keyField().canonicalString())||t.ce.push(new Zn(it.keyField(),n))}return t.ce}function Ft(r){const t=B(r);return t.le||(t.le=md(t,en(r))),t.le}function md(r,t){if(r.limitType==="F")return ls(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zn(i.field,s)});const e=r.endAt?new le(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new le(r.startAt.position,r.startAt.inclusive):null;return ls(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function cs(r,t){const e=r.filters.concat([t]);return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Jr(r,t,e){return new Le(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function hi(r,t){return er(Ft(r),Ft(t))&&r.limitType===t.limitType}function il(r){return`${xe(Ft(r))}|lt:${r.limitType}`}function Je(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>el(i)).join(", ")}]`),ui(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>sn(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>sn(i)).join(",")),`Target(${n})`}(Ft(r))}; limitType=${r.limitType})`}function rr(r,t){return t.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):M.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,t)&&function(n,i){for(const s of en(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,u,c){const d=xa(a,u,c);return a.inclusive?d<=0:d<0}(n.startAt,en(n),i)||n.endAt&&!function(a,u,c){const d=xa(a,u,c);return a.inclusive?d>=0:d>0}(n.endAt,en(n),i))}(r,t)}function gd(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function sl(r){return(t,e)=>{let n=!1;for(const i of en(r)){const s=pd(i,t,e);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function pd(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(s,a,u){const c=a.data.field(s),d=u.data.field(s);return c!==null&&d!==null?ue(c,d):F()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Oe(this.inner,(e,n)=>{for(const[i,s]of n)t(i,s)})}isEmpty(){return $u(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new rt(M.comparator);function Dt(){return _d}const ol=new rt(M.comparator);function Un(...r){let t=ol;for(const e of r)t=t.insert(e.key,e);return t}function al(r){let t=ol;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Bt(){return zn()}function ul(){return zn()}function zn(){return new de(r=>r.toString(),(r,t)=>r.isEqual(t))}const yd=new rt(M.comparator),Id=new X(M.comparator);function K(...r){let t=Id;for(const e of r)t=t.add(e);return t}const Td=new X(j);function Ed(){return Td}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hn(t)?"-0":t}}function ll(r){return{integerValue:""+r}}function cl(r,t){return Mh(t)?ll(t):Ss(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this._=void 0}}function vd(r,t,e){return r instanceof an?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&li(s)&&(s=Ps(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(e,t):r instanceof Ce?dl(r,t):r instanceof De?fl(r,t):function(i,s){const a=hl(i,s),u=Ma(a)+Ma(i.Pe);return os(a)&&os(i.Pe)?ll(u):Ss(i.serializer,u)}(r,t)}function wd(r,t,e){return r instanceof Ce?dl(r,t):r instanceof De?fl(r,t):e}function hl(r,t){return r instanceof un?function(n){return os(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class an extends di{}class Ce extends di{constructor(t){super(),this.elements=t}}function dl(r,t){const e=ml(t);for(const n of r.elements)e.some(i=>jt(i,n))||e.push(n);return{arrayValue:{values:e}}}class De extends di{constructor(t){super(),this.elements=t}}function fl(r,t){let e=ml(t);for(const n of r.elements)e=e.filter(i=>!jt(i,n));return{arrayValue:{values:e}}}class un extends di{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ma(r){return nt(r.integerValue||r.doubleValue)}function ml(r){return Xn(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.field=t,this.transform=e}}function Ad(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Ce&&i instanceof Ce||n instanceof De&&i instanceof De?rn(n.elements,i.elements,jt):n instanceof un&&i instanceof un?jt(n.Pe,i.Pe):n instanceof an&&i instanceof an}(r.transform,t.transform)}class Rd{constructor(t,e){this.version=t,this.transformResults=e}}class ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ct}static exists(t){return new ct(void 0,t)}static updateTime(t){return new ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class fi{}function gl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new sr(r.key,ct.none()):new fn(r.key,r.data,ct.none());{const e=r.data,n=Et.empty();let i=new X(it.comparator);for(let s of t.fields)if(!i.has(s)){let a=e.field(s);a===null&&s.length>1&&(s=s.popLast(),a=e.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new Yt(r.key,n,new xt(i.toArray()),ct.none())}}function Pd(r,t,e){r instanceof fn?function(i,s,a){const u=i.value.clone(),c=Oa(i.fieldTransforms,s,a.transformResults);u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof Yt?function(i,s,a){if(!Gr(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=Oa(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(pl(i)),c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function $n(r,t,e,n){return r instanceof fn?function(s,a,u,c){if(!Gr(s.precondition,a))return u;const d=s.value.clone(),f=La(s.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof Yt?function(s,a,u,c){if(!Gr(s.precondition,a))return u;const d=La(s.fieldTransforms,c,a),f=a.data;return f.setAll(pl(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(s,a,u){return Gr(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function Vd(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),s=hl(n.transform,i||null);s!=null&&(e===null&&(e=Et.empty()),e.set(n.field,s))}return e||null}function Fa(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&rn(n,i,(s,a)=>Ad(s,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class fn extends fi{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yt extends fi{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Oa(r,t,e){const n=new Map;O(r.length===e.length);for(let i=0;i<e.length;i++){const s=r[i],a=s.transform,u=t.data.field(s.field);n.set(s.field,wd(a,u,e[i]))}return n}function La(r,t,e){const n=new Map;for(const i of r){const s=i.transform,a=e.data.field(i.field);n.set(i.field,vd(s,a,t))}return n}class sr extends fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _l extends fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Pd(s,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=$n(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=$n(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ul();return this.mutations.forEach(i=>{const s=t.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=e.has(i.key)?null:u;const c=gl(a,u);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),K())}isEqual(t){return this.batchId===t.batchId&&rn(this.mutations,t.mutations,(e,n)=>Fa(e,n))&&rn(this.baseMutations,t.baseMutations,(e,n)=>Fa(e,n))}}class Cs{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){O(t.mutations.length===n.length);let i=function(){return yd}();const s=t.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new Cs(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,$;function Sd(r){switch(r){default:return F();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function yl(r){if(r===void 0)return Pt("GRPC error has no .code"),b.UNKNOWN;switch(r){case ut.OK:return b.OK;case ut.CANCELLED:return b.CANCELLED;case ut.UNKNOWN:return b.UNKNOWN;case ut.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ut.INTERNAL:return b.INTERNAL;case ut.UNAVAILABLE:return b.UNAVAILABLE;case ut.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ut.NOT_FOUND:return b.NOT_FOUND;case ut.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ut.ABORTED:return b.ABORTED;case ut.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ut.DATA_LOSS:return b.DATA_LOSS;default:return F()}}($=ut||(ut={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new we([4294967295,4294967295],0);function Ua(r){const t=xd().encode(r),e=new Su;return e.update(t),new Uint8Array(e.digest())}function Ba(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new we([e,n],0),new we([i,s],0)]}class Ns{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Bn(`Invalid padding: ${e}`);if(n<0)throw new Bn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Bn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Bn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=we.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(we.fromNumber(n)));return i.compare(Cd)===1&&(i=new we([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ua(t),[n,i]=Ba(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);if(!this.de(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Ns(s,i,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=Ua(t),[n,i]=Ba(e);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,or.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new mi(L.min(),i,new rt(j),Dt(),K())}}class or{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new or(n,e,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class Il{constructor(t,e){this.targetId=t,this.me=e}}class Tl{constructor(t,e,n=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class qa{constructor(){this.fe=0,this.ge=Ga(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=K(),e=K(),n=K();return this.ge.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:F()}}),new or(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Ga()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,O(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Dd{constructor(t){this.Le=t,this.Be=new Map,this.ke=Dt(),this.qe=ja(),this.Qe=new rt(j)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:F()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const s=i.target;if(Hr(s))if(n===0){const a=new M(s.path);this.Ue(e,a,at.newNoDocument(a,L.min()))}else O(n===1);else{const a=this.Ye(e);if(a!==n){const u=this.Ze(t),c=u?this.Xe(u,t,a):1;if(c!==0){this.je(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=e;let a,u;try{a=ae(n).toUint8Array()}catch(c){if(c instanceof Qu)return Pe("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Ns(a,i,s)}catch(c){return Pe(c instanceof Bn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ie===0?null:u}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(s=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,s,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((s,a)=>{const u=this.Je(a);if(u){if(s.current&&Hr(u.target)){const c=new M(u.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,at.newNoDocument(c,t))}s.be&&(e.set(a,s.ve()),s.Ce())}});let n=K();this.qe.forEach((s,a)=>{let u=!0;a.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(t));const i=new mi(t,e,this.Qe,this.ke,n);return this.ke=Dt(),this.qe=ja(),this.Qe=new rt(j),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new qa,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new X(j),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||S("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new qa),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ja(){return new rt(M.comparator)}function Ga(){return new rt(M.comparator)}const Nd={asc:"ASCENDING",desc:"DESCENDING"},kd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Md={and:"AND",or:"OR"};class Fd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function hs(r,t){return r.useProto3Json||ui(t)?t:{value:t}}function ln(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function El(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Od(r,t){return ln(r,t.toTimestamp())}function bt(r){return O(!!r),L.fromTimestamp(function(e){const n=Ht(e);return new st(n.seconds,n.nanos)}(r))}function ks(r,t){return ds(r,t).canonicalString()}function ds(r,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function vl(r){const t=Y.fromString(r);return O(Cl(t)),t}function Xr(r,t){return ks(r.databaseId,t.path)}function Ae(r,t){const e=vl(t);if(e.get(1)!==r.databaseId.projectId)throw new D(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new D(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(Rl(e))}function wl(r,t){return ks(r.databaseId,t)}function Al(r){const t=vl(r);return t.length===4?Y.emptyPath():Rl(t)}function fs(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Rl(r){return O(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ka(r,t,e){return{name:Xr(r,t),fields:e.value.mapValue.fields}}function Ld(r,t,e){const n=Ae(r,t.name),i=bt(t.updateTime),s=t.createTime?bt(t.createTime):L.min(),a=new Et({mapValue:{fields:t.fields}}),u=at.newFoundDocument(n,i,s,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Ud(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(O(f===void 0||typeof f=="string"),lt.fromBase64String(f||"")):(O(f===void 0||f instanceof Buffer||f instanceof Uint8Array),lt.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const f=d.code===void 0?b.UNKNOWN:yl(d.code);return new D(f,d.message||"")}(a);e=new Tl(n,i,s,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Ae(r,n.document.name),s=bt(n.document.updateTime),a=n.document.createTime?bt(n.document.createTime):L.min(),u=new Et({mapValue:{fields:n.document.fields}}),c=at.newFoundDocument(i,s,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];e=new Kr(d,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Ae(r,n.document),s=n.readTime?bt(n.readTime):L.min(),a=at.newNoDocument(i,s),u=n.removedTargetIds||[];e=new Kr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Ae(r,n.document),s=n.removedTargetIds||[];e=new Kr([],s,i,null)}else{if(!("filter"in t))return F();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new bd(i,s),u=n.targetId;e=new Il(u,a)}}return e}function Zr(r,t){let e;if(t instanceof fn)e={update:Ka(r,t.key,t.value)};else if(t instanceof sr)e={delete:Xr(r,t.key)};else if(t instanceof Yt)e={update:Ka(r,t.key,t.data),updateMask:zd(t.fieldMask)};else{if(!(t instanceof _l))return F();e={verify:Xr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,a){const u=a.transform;if(u instanceof an)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Ce)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof De)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof un)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw F()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Od(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(r,t.precondition)),e}function ms(r,t){const e=t.currentDocument?function(s){return s.updateTime!==void 0?ct.updateTime(bt(s.updateTime)):s.exists!==void 0?ct.exists(s.exists):ct.none()}(t.currentDocument):ct.none(),n=t.updateTransforms?t.updateTransforms.map(i=>function(a,u){let c=null;if("setToServerValue"in u)O(u.setToServerValue==="REQUEST_TIME"),c=new an;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new Ce(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new De(f)}else"increment"in u?c=new un(a,u.increment):F();const d=it.fromServerFormat(u.fieldPath);return new ir(d,c)}(r,i)):[];if(t.update){t.update.name;const i=Ae(r,t.update.name),s=new Et({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(c){const d=c.fieldPaths||[];return new xt(d.map(f=>it.fromServerFormat(f)))}(t.updateMask);return new Yt(i,s,a,e,n)}return new fn(i,s,e,n)}if(t.delete){const i=Ae(r,t.delete);return new sr(i,e)}if(t.verify){const i=Ae(r,t.verify);return new _l(i,e)}return F()}function Bd(r,t){return r&&r.length>0?(O(t!==void 0),r.map(e=>function(i,s){let a=i.updateTime?bt(i.updateTime):bt(s);return a.isEqual(L.min())&&(a=bt(s)),new Rd(a,i.transformResults||[])}(e,t))):[]}function Pl(r,t){return{documents:[wl(r,t.path)]}}function Vl(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=wl(r,i);const s=function(d){if(d.length!==0)return xl(J.create(d,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(I){return{field:Xe(I.field),direction:jd(I.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=hs(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function bl(r){let t=Al(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){O(n===1);const f=e.from[0];f.allDescendants?i=f.collectionId:t=t.child(f.collectionId)}let s=[];e.where&&(s=function(g){const I=Sl(g);return I instanceof J&&Vs(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(I=>function(x){return new Zn(Ze(x.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(I))}(e.orderBy));let u=null;e.limit&&(u=function(g){let I;return I=typeof g=="object"?g.value:g,ui(I)?null:I}(e.limit));let c=null;e.startAt&&(c=function(g){const I=!!g.before,P=g.values||[];return new le(P,I)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const I=!g.before,P=g.values||[];return new le(P,I)}(e.endAt)),fd(t,i,a,s,u,"F",c,d)}function qd(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Sl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ze(e.unaryFilter.field);return z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ze(e.unaryFilter.field);return z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ze(e.unaryFilter.field);return z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ze(e.unaryFilter.field);return z.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(e){return z.create(Ze(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return J.create(e.compositeFilter.filters.map(n=>Sl(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(r):F()}function jd(r){return Nd[r]}function Gd(r){return kd[r]}function Kd(r){return Md[r]}function Xe(r){return{fieldPath:r.canonicalString()}}function Ze(r){return it.fromServerFormat(r.fieldPath)}function xl(r){return r instanceof z?function(e){if(e.op==="=="){if(Va(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NAN"}};if(Pa(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Va(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NAN"}};if(Pa(e.value))return{unaryFilter:{field:Xe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xe(e.field),op:Gd(e.op),value:e.value}}}(r):r instanceof J?function(e){const n=e.getFilters().map(i=>xl(i));return n.length===1?n[0]:{compositeFilter:{op:Kd(e.op),filters:n}}}(r):F()}function zd(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Cl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e,n,i,s=L.min(),a=L.min(),u=lt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this.ct=t}}function $d(r,t){let e;if(t.document)e=Ld(r.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=M.fromSegments(t.noDocument.path),i=ke(t.noDocument.readTime);e=at.newNoDocument(n,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return F();{const n=M.fromSegments(t.unknownDocument.path),i=ke(t.unknownDocument.version);e=at.newUnknownDocument(n,i)}}return t.readTime&&e.setReadTime(function(i){const s=new st(i[0],i[1]);return L.fromTimestamp(s)}(t.readTime)),e}function za(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:ti(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(s,a){return{name:Xr(s,a.key),fields:a.data.value.mapValue.fields,updateTime:ln(s,a.version.toTimestamp()),createTime:ln(s,a.createTime.toTimestamp())}}(r.ct,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Ne(t.version)};else{if(!t.isUnknownDocument())return F();n.unknownDocument={path:e.path.toArray(),version:Ne(t.version)}}return n}function ti(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Ne(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function ke(r){const t=new st(r.seconds,r.nanoseconds);return L.fromTimestamp(t)}function Te(r,t){const e=(t.baseMutations||[]).map(s=>ms(r.ct,s));for(let s=0;s<t.mutations.length-1;++s){const a=t.mutations[s];if(s+1<t.mutations.length&&t.mutations[s+1].transform!==void 0){const u=t.mutations[s+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const n=t.mutations.map(s=>ms(r.ct,s)),i=st.fromMillis(t.localWriteTimeMs);return new xs(t.batchId,i,e,n)}function qn(r){const t=ke(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?ke(r.lastLimboFreeSnapshotVersion):L.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return O(s.documents.length===1),Ft(nr(Al(s.documents[0])))}(r.query):function(s){return Ft(bl(s))}(r.query),new Wt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,lt.fromBase64String(r.resumeToken))}function Nl(r,t){const e=Ne(t.snapshotVersion),n=Ne(t.lastLimboFreeSnapshotVersion);let i;i=Hr(t.target)?Pl(r.ct,t.target):Vl(r.ct,t.target)._t;const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:xe(t.target),readTime:e,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function kl(r){const t=bl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Jr(t,t.limit,"L"):t}function Ji(r,t){return new Ds(t.largestBatchId,ms(r.ct,t.overlayMutation))}function $a(r,t){const e=t.path.lastSegment();return[r,Vt(t.path.popLast()),e]}function Qa(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Ne(n.readTime),documentKey:Vt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{getBundleMetadata(t,e){return Wa(t).get(e).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:ke(s.createTime),version:s.version}}(n)})}saveBundleMetadata(t,e){return Wa(t).put(function(i){return{bundleId:i.id,createTime:Ne(bt(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return Ha(t).get(e).next(n=>{if(n)return function(s){return{name:s.name,query:kl(s.bundledQuery),readTime:ke(s.readTime)}}(n)})}saveNamedQuery(t,e){return Ha(t).put(function(i){return{name:i.name,readTime:Ne(bt(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function Wa(r){return ht(r,"bundles")}function Ha(r){return ht(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const n=e.uid||"";return new gi(t,n)}getOverlay(t,e){return Nn(t).get($a(this.userId,e)).next(n=>n?Ji(this.serializer,n):null)}getOverlays(t,e){const n=Bt();return A.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(t,e,n){const i=[];return n.forEach((s,a)=>{const u=new Ds(e,a);i.push(this.ht(t,u))}),A.waitFor(i)}removeOverlaysForBatchId(t,e,n){const i=new Set;e.forEach(a=>i.add(Vt(a.getCollectionPath())));const s=[];return i.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);s.push(Nn(t).j("collectionPathOverlayIndex",u))}),A.waitFor(s)}getOverlaysForCollection(t,e,n){const i=Bt(),s=Vt(e),a=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Nn(t).U("collectionPathOverlayIndex",a).next(u=>{for(const c of u){const d=Ji(this.serializer,c);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(t,e,n,i){const s=Bt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Nn(t).J({index:"collectionGroupOverlayIndex",range:u},(c,d,f)=>{const g=Ji(this.serializer,d);s.size()<i||g.largestBatchId===a?(s.set(g.getKey(),g),a=g.largestBatchId):f.done()}).next(()=>s)}ht(t,e){return Nn(t).put(function(i,s,a){const[u,c,d]=$a(s,a.mutation.key);return{userId:s,collectionPath:c,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Zr(i.ct,a.mutation)}}(this.serializer,this.userId,e))}}function Nn(r){return ht(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{Pt(t){return ht(t,"globals")}getSessionToken(t){return this.Pt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?lt.fromUint8Array(n):lt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.Pt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(nt(t.integerValue));else if("doubleValue"in t){const n=nt(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),Hn(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),typeof n=="string"&&(n=Ht(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(ae(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?Wu(t)?this.dt(e,Number.MAX_SAFE_INTEGER):ci(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):F()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const i of Object.keys(n))this.Vt(i,e),this.Tt(n[i],e)}wt(t,e){var n,i;const s=t.fields||{};this.dt(e,53);const a="value",u=((i=(n=s[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.dt(e,15),e.At(nt(u)),this.Vt(a,e),this.Tt(s[a],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const i of n)this.Tt(i,e)}yt(t,e){this.dt(e,37),M.fromName(t).path.forEach(n=>{this.dt(e,60),this.Dt(n,e)})}dt(t,e){t.At(e)}ft(t){t.At(2)}}Ee.vt=new Ee;function Hd(r){if(r===0)return 8;let t=0;return!(r>>4)&&(t+=4,r<<=4),!(r>>6)&&(t+=2,r<<=2),!(r>>7)&&(t+=1),t}function Ya(r){const t=64-function(n){let i=0;for(let s=0;s<8;++s){const a=Hd(255&n[s]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(t/8)}class Yd{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ft(n.value),n=e.next();this.Mt()}xt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ot(n.value),n=e.next();this.Nt()}Lt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const i=e.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const i=e.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(t){const e=this.qt(t),n=Ya(e);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=255&e[i]}Kt(t){const e=this.qt(t),n=Ya(e);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(t){this.Qt(t.length),this.buffer.set(t,this.position),this.position+=t.length}zt(){return this.buffer.slice(0,this.position)}qt(t){const e=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(t),n=(128&e[0])!=0;e[0]^=n?255:128;for(let i=1;i<e.length;++i)e[i]^=n?255:0;return e}Ft(t){const e=255&t;e===0?(this.Ut(0),this.Ut(255)):e===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ot(t){const e=255&t;e===0?(this.Gt(0),this.Gt(255)):e===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(t){this.Qt(1),this.buffer[this.position++]=t}Gt(t){this.Qt(1),this.buffer[this.position++]=~t}Qt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class Jd{constructor(t){this.jt=t}gt(t){this.jt.Ct(t)}Rt(t){this.jt.Lt(t)}At(t){this.jt.kt(t)}Et(){this.jt.$t()}}class Xd{constructor(t){this.jt=t}gt(t){this.jt.xt(t)}Rt(t){this.jt.Bt(t)}At(t){this.jt.Kt(t)}Et(){this.jt.Wt()}}class kn{constructor(){this.jt=new Yd,this.Ht=new Jd(this.jt),this.Jt=new Xd(this.jt)}seed(t){this.jt.seed(t)}Yt(t){return t===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e,n,i){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=i}Zt(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new ve(this.indexId,this.documentKey,this.arrayValue,n)}}function ee(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=Ja(r.arrayValue,t.arrayValue),e!==0?e:(e=Ja(r.directionalValue,t.directionalValue),e!==0?e:M.comparator(r.documentKey,t.documentKey)))}function Ja(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){this.Xt=new X((e,n)=>it.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.en=t.orderBy,this.tn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(t){if(O(t.collectionGroup===this.collectionId),this.nn)return!1;const e=rs(t);if(e!==void 0&&!this.sn(e))return!1;const n=ye(t);let i=new Set,s=0,a=0;for(;s<n.length&&this.sn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Xt.size>0){const u=this.Xt.getIterator().getNext();if(!i.has(u.field.canonicalString())){const c=n[s];if(!this.on(u,c)||!this._n(this.en[a++],c))return!1}++s}for(;s<n.length;++s){const u=n[s];if(a>=this.en.length||!this._n(this.en[a++],u))return!1}return!0}an(){if(this.nn)return null;let t=new X(it.comparator);const e=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Ur(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Ur(n.field,0))}for(const n of this.en)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Ur(n.field,n.dir==="asc"?0:1)));return new Wr(Wr.UNKNOWN_ID,this.collectionId,e,Wn.empty())}sn(t){for(const e of this.tn)if(this.on(e,t))return!0;return!1}on(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}_n(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(r){var t,e;if(O(r instanceof z||r instanceof J),r instanceof z){if(r instanceof rl){const i=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(s=>z.create(r.field,"==",s)))||[];return J.create(i,"or")}return r}const n=r.filters.map(i=>Ml(i));return J.create(n,r.op)}function Zd(r){if(r.getFilters().length===0)return[];const t=_s(Ml(r));return O(Fl(t)),gs(t)||ps(t)?[t]:t.getFilters()}function gs(r){return r instanceof z}function ps(r){return r instanceof J&&Vs(r)}function Fl(r){return gs(r)||ps(r)||function(e){if(e instanceof J&&as(e)){for(const n of e.getFilters())if(!gs(n)&&!ps(n))return!1;return!0}return!1}(r)}function _s(r){if(O(r instanceof z||r instanceof J),r instanceof z)return r;if(r.filters.length===1)return _s(r.filters[0]);const t=r.filters.map(n=>_s(n));let e=J.create(t,r.op);return e=ei(e),Fl(e)?e:(O(e instanceof J),O(on(e)),O(e.filters.length>1),e.filters.reduce((n,i)=>Ms(n,i)))}function Ms(r,t){let e;return O(r instanceof z||r instanceof J),O(t instanceof z||t instanceof J),e=r instanceof z?t instanceof z?function(i,s){return J.create([i,s],"and")}(r,t):Za(r,t):t instanceof z?Za(t,r):function(i,s){if(O(i.filters.length>0&&s.filters.length>0),on(i)&&on(s))return tl(i,s.getFilters());const a=as(i)?i:s,u=as(i)?s:i,c=a.filters.map(d=>Ms(d,u));return J.create(c,"or")}(r,t),ei(e)}function Za(r,t){if(on(t))return tl(t,r.getFilters());{const e=t.filters.map(n=>Ms(r,n));return J.create(e,"or")}}function ei(r){if(O(r instanceof z||r instanceof J),r instanceof z)return r;const t=r.getFilters();if(t.length===1)return ei(t[0]);if(Xu(r))return r;const e=t.map(i=>ei(i)),n=[];return e.forEach(i=>{i instanceof z?n.push(i):i instanceof J&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:J.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.un=new Fs}addToCollectionParentIndex(t,e){return this.un.add(e),A.resolve()}getCollectionParents(t,e){return A.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return A.resolve()}deleteFieldIndex(t,e){return A.resolve()}deleteAllFieldIndexes(t){return A.resolve()}createTargetIndexes(t,e){return A.resolve()}getDocumentsMatchingTarget(t,e){return A.resolve(null)}getIndexType(t,e){return A.resolve(0)}getFieldIndexes(t,e){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,e){return A.resolve(kt.min())}getMinOffsetFromCollectionGroup(t,e){return A.resolve(kt.min())}updateCollectionGroup(t,e,n){return A.resolve()}updateIndexEntries(t,e){return A.resolve()}}class Fs{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new X(Y.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new X(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Uint8Array(0);class ef{constructor(t,e){this.databaseId=e,this.cn=new Fs,this.ln=new de(n=>xe(n),(n,i)=>er(n,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.cn.has(e)){const n=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this.cn.add(e)});const s={collectionId:n,parent:Vt(i)};return tu(t).put(s)}return A.resolve()}getCollectionParents(t,e){const n=[],i=IDBKeyRange.bound([e,""],[Ou(e),""],!1,!0);return tu(t).U(i).next(s=>{for(const a of s){if(a.collectionId!==e)break;n.push(Ut(a.parent))}return n})}addFieldIndex(t,e){const n=Mn(t),i=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete i.indexId;const s=n.add(i);if(e.indexState){const a=We(t);return s.next(u=>{a.put(Qa(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return s.next()}deleteFieldIndex(t,e){const n=Mn(t),i=We(t),s=Qe(t);return n.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=Mn(t),n=Qe(t),i=We(t);return e.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(t,e){return A.forEach(this.hn(e),n=>this.getIndexType(t,n).next(i=>{if(i===0||i===1){const s=new Xa(n).an();if(s!=null)return this.addFieldIndex(t,s)}}))}getDocumentsMatchingTarget(t,e){const n=Qe(t);let i=!0;const s=new Map;return A.forEach(this.hn(e),a=>this.Pn(t,a).next(u=>{i&&(i=!!u),s.set(a,u)})).next(()=>{if(i){let a=K();const u=[];return A.forEach(s,(c,d)=>{S("IndexedDbIndexManager",`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(c)} to execute ${xe(e)}`);const f=function(U,H){const tt=rs(H);if(tt===void 0)return null;for(const Q of Yr(U,tt.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(d,c),g=function(U,H){const tt=new Map;for(const Q of ye(H))for(const T of Yr(U,Q.fieldPath))switch(T.op){case"==":case"in":tt.set(Q.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return tt.set(Q.fieldPath.canonicalString(),T.value),Array.from(tt.values())}return null}(d,c),I=function(U,H){const tt=[];let Q=!0;for(const T of ye(H)){const p=T.kind===0?Da(U,T.fieldPath,U.startAt):Na(U,T.fieldPath,U.startAt);tt.push(p.value),Q&&(Q=p.inclusive)}return new le(tt,Q)}(d,c),P=function(U,H){const tt=[];let Q=!0;for(const T of ye(H)){const p=T.kind===0?Na(U,T.fieldPath,U.endAt):Da(U,T.fieldPath,U.endAt);tt.push(p.value),Q&&(Q=p.inclusive)}return new le(tt,Q)}(d,c),x=this.In(c,d,I),N=this.In(c,d,P),C=this.Tn(c,d,g),G=this.En(c.indexId,f,x,I.inclusive,N,P.inclusive,C);return A.forEach(G,q=>n.G(q,e.limit).next(U=>{U.forEach(H=>{const tt=M.fromSegments(H.documentKey);a.has(tt)||(a=a.add(tt),u.push(tt))})}))}).next(()=>u)}return A.resolve(null)})}hn(t){let e=this.ln.get(t);return e||(t.filters.length===0?e=[t]:e=Zd(J.create(t.filters,"and")).map(n=>ls(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.ln.set(t,e),e)}En(t,e,n,i,s,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,s.length),d=c/(e!=null?e.length:1),f=[];for(let g=0;g<c;++g){const I=e?this.dn(e[g/d]):kr,P=this.An(t,I,n[g%d],i),x=this.Rn(t,I,s[g%d],a),N=u.map(C=>this.An(t,I,C,!0));f.push(...this.createRange(P,x,N))}return f}An(t,e,n,i){const s=new ve(t,M.empty(),e,n);return i?s:s.Zt()}Rn(t,e,n,i){const s=new ve(t,M.empty(),e,n);return i?s.Zt():s}Pn(t,e){const n=new Xa(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(s=>{let a=null;for(const u of s)n.rn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const i=this.hn(e);return A.forEach(i,s=>this.Pn(t,s).next(a=>{a?n!==0&&a.fields.length<function(c){let d=new X(it.comparator),f=!1;for(const g of c.filters)for(const I of g.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?f=!0:d=d.add(I.field));for(const g of c.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&i.length>1&&n===2?1:n)}Vn(t,e){const n=new kn;for(const i of ye(t)){const s=e.data.field(i.fieldPath);if(s==null)return null;const a=n.Yt(i.kind);Ee.vt.It(s,a)}return n.zt()}dn(t){const e=new kn;return Ee.vt.It(t,e.Yt(0)),e.zt()}mn(t,e){const n=new kn;return Ee.vt.It(Se(this.databaseId,e),n.Yt(function(s){const a=ye(s);return a.length===0?0:a[a.length-1].kind}(t))),n.zt()}Tn(t,e,n){if(n===null)return[];let i=[];i.push(new kn);let s=0;for(const a of ye(t)){const u=n[s++];for(const c of i)if(this.fn(e,a.fieldPath)&&Xn(u))i=this.gn(i,a,u);else{const d=c.Yt(a.kind);Ee.vt.It(u,d)}}return this.pn(i)}In(t,e,n){return this.Tn(t,e,n.position)}pn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].zt();return e}gn(t,e,n){const i=[...t],s=[];for(const a of n.arrayValue.values||[])for(const u of i){const c=new kn;c.seed(u.zt()),Ee.vt.It(a,c.Yt(e.kind)),s.push(c)}return s}fn(t,e){return!!t.filters.find(n=>n instanceof z&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=Mn(t),i=We(t);return(e?n.U("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.U()).next(s=>{const a=[];return A.forEach(s,u=>i.get([u.indexId,this.uid]).next(c=>{a.push(function(f,g){const I=g?new Wn(g.sequenceNumber,new kt(ke(g.readTime),new M(Ut(g.documentKey)),g.largestBatchId)):Wn.empty(),P=f.fields.map(([x,N])=>new Ur(it.fromServerFormat(x),N));return new Wr(f.indexId,f.collectionGroup,P,I)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:j(n.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const i=Mn(t),s=We(t);return this.yn(t).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(u=>A.forEach(u,c=>s.put(Qa(c.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return A.forEach(e,(i,s)=>{const a=n.get(i.collectionGroup);return(a?A.resolve(a):this.getFieldIndexes(t,i.collectionGroup)).next(u=>(n.set(i.collectionGroup,u),A.forEach(u,c=>this.wn(t,i,c).next(d=>{const f=this.Sn(s,c);return d.isEqual(f)?A.resolve():this.bn(t,s,c,d,f)}))))})}Dn(t,e,n,i){return Qe(t).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,e.key),documentKey:e.key.path.toArray()})}vn(t,e,n,i){return Qe(t).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,e.key),e.key.path.toArray()])}wn(t,e,n){const i=Qe(t);let s=new X(ee);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,e)])},(a,u)=>{s=s.add(new ve(n.indexId,e,u.arrayValue,u.directionalValue))}).next(()=>s)}Sn(t,e){let n=new X(ee);const i=this.Vn(e,t);if(i==null)return n;const s=rs(e);if(s!=null){const a=t.data.field(s.fieldPath);if(Xn(a))for(const u of a.arrayValue.values||[])n=n.add(new ve(e.indexId,t.key,this.dn(u),i))}else n=n.add(new ve(e.indexId,t.key,kr,i));return n}bn(t,e,n,i,s){S("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const a=[];return function(c,d,f,g,I){const P=c.getIterator(),x=d.getIterator();let N=$e(P),C=$e(x);for(;N||C;){let G=!1,q=!1;if(N&&C){const U=f(N,C);U<0?q=!0:U>0&&(G=!0)}else N!=null?q=!0:G=!0;G?(g(C),C=$e(x)):q?(I(N),N=$e(P)):(N=$e(P),C=$e(x))}}(i,s,ee,u=>{a.push(this.Dn(t,e,n,u))},u=>{a.push(this.vn(t,e,n,u))}),A.waitFor(a)}yn(t){let e=1;return We(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>ee(a,u)).filter((a,u,c)=>!u||ee(a,c[u-1])!==0);const i=[];i.push(t);for(const a of n){const u=ee(a,t),c=ee(a,e);if(u===0)i[0]=t.Zt();else if(u>0&&c<0)i.push(a),i.push(a.Zt());else if(c>0)break}i.push(e);const s=[];for(let a=0;a<i.length;a+=2){if(this.Cn(i[a],i[a+1]))return[];const u=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,kr,[]],c=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,kr,[]];s.push(IDBKeyRange.bound(u,c))}return s}Cn(t,e){return ee(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(eu)}getMinOffset(t,e){return A.mapArray(this.hn(e),n=>this.Pn(t,n).next(i=>i||F())).next(eu)}}function tu(r){return ht(r,"collectionParents")}function Qe(r){return ht(r,"indexEntries")}function Mn(r){return ht(r,"indexConfiguration")}function We(r){return ht(r,"indexState")}function eu(r){O(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;ws(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new kt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class St{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new St(t,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(r,t,e){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.J({range:a},(f,g,I)=>(u++,I.delete()));s.push(c.next(()=>{O(u===1)}));const d=[];for(const f of e.mutations){const g=ju(t,f.key.path,e.batchId);s.push(i.delete(g)),d.push(f.key)}return A.waitFor(s).next(()=>d)}function ni(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw F();t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(41943040,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);class pi{constructor(t,e,n,i){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(t,e,n,i){O(t.uid!=="");const s=t.isAuthenticated()?t.uid:"";return new pi(s,e,n,i)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ne(t).J({index:"userMutationsIndex",range:n},(i,s,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,i){const s=tn(t),a=ne(t);return a.add({}).next(u=>{O(typeof u=="number");const c=new xs(u,e,n,i),d=function(P,x,N){const C=N.baseMutations.map(q=>Zr(P.ct,q)),G=N.mutations.map(q=>Zr(P.ct,q));return{userId:x,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:C,mutations:G}}(this.serializer,this.userId,c),f=[];let g=new X((I,P)=>j(I.canonicalString(),P.canonicalString()));for(const I of i){const P=ju(this.userId,I.key.path,u);g=g.add(I.key.path.popLast()),f.push(a.put(d)),f.push(s.put(P,Oh))}return g.forEach(I=>{f.push(this.indexManager.addToCollectionParentIndex(t,I))}),t.addOnCommittedListener(()=>{this.Fn[u]=c.keys()}),A.waitFor(f).next(()=>c)})}lookupMutationBatch(t,e){return ne(t).get(e).next(n=>n?(O(n.userId===this.userId),Te(this.serializer,n)):null)}Mn(t,e){return this.Fn[e]?A.resolve(this.Fn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const i=n.keys();return this.Fn[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return ne(t).J({index:"userMutationsIndex",range:i},(a,u,c)=>{u.userId===this.userId&&(O(u.batchId>=n),s=Te(this.serializer,u)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ne(t).J({index:"userMutationsIndex",range:e,reverse:!0},(i,s,a)=>{n=s.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ne(t).U("userMutationsIndex",e).next(n=>n.map(i=>Te(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Br(this.userId,e.path),i=IDBKeyRange.lowerBound(n),s=[];return tn(t).J({range:i},(a,u,c)=>{const[d,f,g]=a,I=Ut(f);if(d===this.userId&&e.path.isEqual(I))return ne(t).get(g).next(P=>{if(!P)throw F();O(P.userId===this.userId),s.push(Te(this.serializer,P))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new X(j);const i=[];return e.forEach(s=>{const a=Br(this.userId,s.path),u=IDBKeyRange.lowerBound(a),c=tn(t).J({range:u},(d,f,g)=>{const[I,P,x]=d,N=Ut(P);I===this.userId&&s.path.isEqual(N)?n=n.add(x):g.done()});i.push(c)}),A.waitFor(i).next(()=>this.xn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1,s=Br(this.userId,n),a=IDBKeyRange.lowerBound(s);let u=new X(j);return tn(t).J({range:a},(c,d,f)=>{const[g,I,P]=c,x=Ut(I);g===this.userId&&n.isPrefixOf(x)?x.length===i&&(u=u.add(P)):f.done()}).next(()=>this.xn(t,u))}xn(t,e){const n=[],i=[];return e.forEach(s=>{i.push(ne(t).get(s).next(a=>{if(a===null)throw F();O(a.userId===this.userId),n.push(Te(this.serializer,a))}))}),A.waitFor(i).next(()=>n)}removeMutationBatch(t,e){return Ol(t._e,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.On(e.batchId)}),A.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}On(t){delete this.Fn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return A.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return tn(t).J({range:n},(s,a,u)=>{if(s[0]===this.userId){const c=Ut(s[1]);i.push(c)}else u.done()}).next(()=>{O(i.length===0)})})}containsKey(t,e){return Ll(t,this.userId,e)}Nn(t){return Ul(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ll(r,t,e){const n=Br(t,e.path),i=n[1],s=IDBKeyRange.lowerBound(n);let a=!1;return tn(r).J({range:s,H:!0},(u,c,d)=>{const[f,g,I]=u;f===t&&g===i&&(a=!0),d.done()}).next(()=>a)}function ne(r){return ht(r,"mutations")}function tn(r){return ht(r,"documentMutations")}function Ul(r){return ht(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Me(0)}static kn(){return new Me(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.qn(t).next(e=>{const n=new Me(e.highestTargetId);return e.highestTargetId=n.next(),this.Qn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.qn(t).next(e=>L.fromTimestamp(new st(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.qn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.qn(t).next(i=>(i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.Qn(t,i)))}addTargetData(t,e){return this.Kn(t,e).next(()=>this.qn(t).next(n=>(n.targetCount+=1,this.$n(e,n),this.Qn(t,n))))}updateTargetData(t,e){return this.Kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>He(t).delete(e.targetId)).next(()=>this.qn(t)).next(n=>(O(n.targetCount>0),n.targetCount-=1,this.Qn(t,n)))}removeTargets(t,e,n){let i=0;const s=[];return He(t).J((a,u)=>{const c=qn(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(t,c)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(t,e){return He(t).J((n,i)=>{const s=qn(i);e(s)})}qn(t){return ru(t).get("targetGlobalKey").next(e=>(O(e!==null),e))}Qn(t,e){return ru(t).put("targetGlobalKey",e)}Kn(t,e){return He(t).put(Nl(this.serializer,e))}$n(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.qn(t).next(e=>e.targetCount)}getTargetData(t,e){const n=xe(e),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return He(t).J({range:i,index:"queryTargetsIndex"},(a,u,c)=>{const d=qn(u);er(e,d.target)&&(s=d,c.done())}).next(()=>s)}addMatchingKeys(t,e,n){const i=[],s=re(t);return e.forEach(a=>{const u=Vt(a.path);i.push(s.put({targetId:n,path:u})),i.push(this.referenceDelegate.addReference(t,n,a))}),A.waitFor(i)}removeMatchingKeys(t,e,n){const i=re(t);return A.forEach(e,s=>{const a=Vt(s.path);return A.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(t,n,s)])})}removeMatchingKeysForTargetId(t,e){const n=re(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),i=re(t);let s=K();return i.J({range:n,H:!0},(a,u,c)=>{const d=Ut(a[1]),f=new M(d);s=s.add(f)}).next(()=>s)}containsKey(t,e){const n=Vt(e.path),i=IDBKeyRange.bound([n],[Ou(n)],!1,!0);let s=0;return re(t).J({index:"documentTargetsIndex",H:!0,range:i},([a,u],c,d)=>{a!==0&&(s++,d.done())}).next(()=>s>0)}ot(t,e){return He(t).get(e).next(n=>n?qn(n):null)}}function He(r){return ht(r,"targets")}function ru(r){return ht(r,"targetGlobal")}function re(r){return ht(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu([r,t],[e,n]){const i=j(r,e);return i===0?j(t,n):i}class rf{constructor(t){this.Un=t,this.buffer=new X(iu),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();iu(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class sf{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(t){S("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){he(e)?S("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Fe(e)}await this.Hn(3e5)})}}class of{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return A.resolve(Mt.oe);const n=new rf(e);return this.Jn.forEachTarget(t,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(t,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(S("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(nu)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(S("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nu):this.Xn(t,e))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,e){let n,i,s,a,u,c,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(S("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(t,i))).next(g=>(n=g,u=Date.now(),this.removeTargets(t,n,e))).next(g=>(s=g,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(d=Date.now(),Ye()<=Qt.DEBUG&&S("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(d-c)+`ms
Total Duration: ${d-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function af(r,t){return new of(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,e){this.db=t,this.garbageCollector=af(this,e)}Yn(t){const e=this.er(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}er(t){let e=0;return this.Zn(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Zn(t,e){return this.tr(t,(n,i)=>e(i))}addReference(t,e,n){return Mr(t,n)}removeReference(t,e,n){return Mr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Mr(t,e)}nr(t,e){return function(i,s){let a=!1;return Ul(i).Y(u=>Ll(i,u,s).next(c=>(c&&(a=!0),A.resolve(!c)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(t,(a,u)=>{if(u<=e){const c=this.nr(t,a).next(d=>{if(!d)return s++,n.getEntry(t,a).next(()=>(n.removeEntry(a,L.min()),re(t).delete(function(g){return[0,Vt(g.path)]}(a))))});i.push(c)}}).next(()=>A.waitFor(i)).next(()=>n.apply(t)).next(()=>s)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Mr(t,e)}tr(t,e){const n=re(t);let i,s=Mt.oe;return n.J({index:"documentTargetsIndex"},([a,u],{path:c,sequenceNumber:d})=>{a===0?(s!==Mt.oe&&e(new M(Ut(i)),s),s=d,i=c):s=Mt.oe}).next(()=>{s!==Mt.oe&&e(new M(Ut(i)),s)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Mr(r,t){return re(r).put(function(n,i){return{targetId:0,path:Vt(n.path),sequenceNumber:i}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.changes=new de(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?A.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return _e(t).put(n)}removeEntry(t,e,n){return _e(t).delete(function(s,a){const u=s.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],ti(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.rr(t,n)))}getEntry(t,e){let n=at.newInvalidDocument(e);return _e(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fn(e))},(i,s)=>{n=this.ir(e,s)}).next(()=>n)}sr(t,e){let n={size:0,document:at.newInvalidDocument(e)};return _e(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fn(e))},(i,s)=>{n={document:this.ir(e,s),size:ni(s)}}).next(()=>n)}getEntries(t,e){let n=Dt();return this._r(t,e,(i,s)=>{const a=this.ir(i,s);n=n.insert(i,a)}).next(()=>n)}ar(t,e){let n=Dt(),i=new rt(M.comparator);return this._r(t,e,(s,a)=>{const u=this.ir(s,a);n=n.insert(s,u),i=i.insert(s,ni(a))}).next(()=>({documents:n,ur:i}))}_r(t,e,n){if(e.isEmpty())return A.resolve();let i=new X(au);e.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Fn(i.first()),Fn(i.last())),a=i.getIterator();let u=a.getNext();return _e(t).J({index:"documentKeyIndex",range:s},(c,d,f)=>{const g=M.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&au(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?f.$(Fn(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,i,s){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),ti(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return _e(t).U(IDBKeyRange.bound(u,c,!0)).next(d=>{s==null||s.incrementDocumentReadCount(d.length);let f=Dt();for(const g of d){const I=this.ir(M.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);I.isFoundDocument()&&(rr(e,I)||i.has(I.key))&&(f=f.insert(I.key,I))}return f})}getAllFromCollectionGroup(t,e,n,i){let s=Dt();const a=ou(e,n),u=ou(e,kt.max());return _e(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},(c,d,f)=>{const g=this.ir(M.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(g.key,g),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(t){return new cf(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return su(t).get("remoteDocumentGlobalKey").next(e=>(O(!!e),e))}rr(t,e){return su(t).put("remoteDocumentGlobalKey",e)}ir(t,e){if(e){const n=$d(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(L.min())))return n}return at.newInvalidDocument(t)}}function ql(r){return new lf(r)}class cf extends Bl{constructor(t,e){super(),this.cr=t,this.trackRemovals=e,this.lr=new de(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(t){const e=[];let n=0,i=new X((s,a)=>j(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const u=this.lr.get(s);if(e.push(this.cr.removeEntry(t,s,u.readTime)),a.isValidDocument()){const c=za(this.cr.serializer,a);i=i.add(s.path.popLast());const d=ni(c);n+=d-u.size,e.push(this.cr.addEntry(t,s,c))}else if(n-=u.size,this.trackRemovals){const c=za(this.cr.serializer,a.convertToNoDocument(L.min()));e.push(this.cr.addEntry(t,s,c))}}),i.forEach(s=>{e.push(this.cr.indexManager.addToCollectionParentIndex(t,s))}),e.push(this.cr.updateMetadata(t,n)),A.waitFor(e)}getFromCache(t,e){return this.cr.sr(t,e).next(n=>(this.lr.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.cr.ar(t,e).next(({documents:n,ur:i})=>(i.forEach((s,a)=>{this.lr.set(s,{size:a,readTime:n.get(s).readTime})}),n))}}function su(r){return ht(r,"remoteDocumentGlobal")}function _e(r){return ht(r,"remoteDocumentsV14")}function Fn(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ou(r,t){const e=t.documentKey.path.toArray();return[r,ti(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function au(r,t){const e=r.path.toArray(),n=t.path.toArray();let i=0;for(let s=0;s<e.length-2&&s<n.length-2;++s)if(i=j(e[s],n[s]),i)return i;return i=j(e.length,n.length),i||(i=j(e[e.length-2],n[n.length-2]),i||j(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&$n(n.mutation,i,xt.empty(),st.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,K()).next(()=>n))}getLocalViewOfDocuments(t,e,n=K()){const i=Bt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(s=>{let a=Un();return s.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Bt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,K()))}populateOverlays(t,e,n){const i=[];return n.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,i){let s=Dt();const a=zn(),u=function(){return zn()}();return e.forEach((c,d)=>{const f=n.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Yt)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),$n(f.mutation,d,f.mutation.getFieldMask(),st.now())):a.set(d.key,xt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var g;return u.set(d,new hf(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(t,e){const n=zn();let i=new rt((a,u)=>a-u),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(c=>{const d=e.get(c);if(d===null)return;let f=n.get(c)||xt.empty();f=u.applyToLocalView(d,f),n.set(c,f);const g=(i.get(u.batchId)||K()).add(c);i=i.insert(u.batchId,g)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,f=c.value,g=ul();f.forEach(I=>{if(!s.has(I)){const P=gl(e.get(I),n.get(I));P!==null&&g.set(I,P),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return A.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):bs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):A.resolve(Bt());let u=-1,c=s;return a.next(d=>A.forEach(d,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),s.get(f)?A.resolve():this.remoteDocumentCache.getEntry(t,f).next(I=>{c=c.insert(f,I)}))).next(()=>this.populateOverlays(t,d,s)).next(()=>this.computeViews(t,c,d,K())).next(f=>({batchId:u,changes:al(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=Un();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const s=e.collectionGroup;let a=Un();return this.indexManager.getCollectionParents(t,s).next(u=>A.forEach(u,c=>{const d=function(g,I){return new Le(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(f=>{f.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,i))).next(a=>{s.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,at.newInvalidDocument(f)))});let u=Un();return a.forEach((c,d)=>{const f=s.get(c);f!==void 0&&$n(f.mutation,d,xt.empty(),st.now()),rr(e,d)&&(u=u.insert(c,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return A.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}}(e)),A.resolve()}getNamedQuery(t,e){return A.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:kl(i.bundledQuery),readTime:bt(i.readTime)}}(e)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.overlays=new rt(M.comparator),this.Ir=new Map}getOverlay(t,e){return A.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Bt();return A.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,s)=>{this.ht(t,e,s)}),A.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),A.resolve()}getOverlaysForCollection(t,e,n){const i=Bt(),s=e.length+1,a=new M(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return A.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new rt((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=s.get(d.largestBatchId);f===null&&(f=Bt(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=Bt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=i)););return A.resolve(u)}ht(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Ds(e,n));let s=this.Ir.get(e);s===void 0&&(s=K(),this.Ir.set(e,s)),this.Ir.set(e,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return A.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.Tr=new X(dt.Er),this.dr=new X(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new dt(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new dt(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new M(new Y([])),n=new dt(e,t),i=new dt(e,t+1),s=[];return this.dr.forEachInRange([n,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new Y([])),n=new dt(e,t),i=new dt(e,t+1);let s=K();return this.dr.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(t){const e=new dt(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class dt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new X(dt.Er)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new xs(s,e,n,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new dt(u.key,s)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return A.resolve(a)}lookupMutationBatch(t,e){return A.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new dt(e,0),i=new dt(e,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],a=>{const u=this.Dr(a.wr);s.push(u)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new X(j);return e.forEach(i=>{const s=new dt(i,0),a=new dt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],u=>{n=n.add(u.wr)})}),A.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;M.isDocumentKey(s)||(s=s.child(""));const a=new dt(new M(s),0);let u=new X(j);return this.br.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(u=u.add(c.wr)),!0)},a),A.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(n=>{const i=this.Dr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){O(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return A.forEach(e.mutations,i=>{const s=new dt(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new dt(e,0),i=this.br.firstAfterOrEqual(n);return A.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.Mr=t,this.docs=function(){return new rt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return A.resolve(n?n.document.mutableCopy():at.newInvalidDocument(e))}getEntries(t,e){let n=Dt();return e.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),A.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let s=Dt();const a=e.path,u=new M(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ws(Lu(f),n)<=0||(i.has(f.key)||rr(e,f))&&(s=s.insert(f.key,f.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(t,e,n,i){F()}Or(t,e){return A.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new _f(this)}getSize(t){return A.resolve(this.size)}}class _f extends Bl{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)}),A.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t){this.persistence=t,this.Nr=new de(e=>xe(e),er),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Os,this.targetCount=0,this.kr=Me.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,i)=>e(i)),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),A.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,A.resolve()}updateTargetData(t,e){return this.Kn(e),A.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return A.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),A.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(a=>{s.push(i.markPotentiallyOrphaned(t,a))}),A.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),A.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return A.resolve(n)}containsKey(t,e){return A.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Mt(0),this.Kr=!1,this.Kr=!0,this.$r=new mf,this.referenceDelegate=t(this),this.Ur=new yf(this),this.indexManager=new tf,this.remoteDocumentCache=function(i){return new pf(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Dl(e),this.Gr=new df(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ff,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new gf(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){S("MemoryPersistence","Starting transaction:",t);const i=new If(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(t,e){return A.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class If extends Bu{constructor(t){super(),this.currentSequenceNumber=t}}class _i{constructor(t){this.persistence=t,this.Jr=new Os,this.Yr=null}static Zr(t){return new _i(t)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),A.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),A.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),A.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xr,n=>{const i=M.fromPath(n);return this.ei(t,i).next(s=>{s||e.removeEntry(i,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return A.or([()=>A.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t){this.serializer=t}O(t,e,n,i){const s=new ai("createOrUpgrade",e);n<1&&i>=1&&(function(c){c.createObjectStore("owner")}(t),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ea,{unique:!0}),c.createObjectStore("documentMutations")}(t),uu(t),function(c){c.createObjectStore("remoteDocuments")}(t));let a=A.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(t),uu(t)),a=a.next(()=>function(c){const d=c.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:L.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(c,d){return d.store("mutations").U().next(f=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ea,{unique:!0});const g=d.store("mutations"),I=f.map(P=>g.put(P));return A.waitFor(I)})}(t,s))),a=a.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),n<5&&i>=5&&(a=a.next(()=>this.ni(s))),n<6&&i>=6&&(a=a.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(t),this.ri(s)))),n<7&&i>=7&&(a=a.next(()=>this.ii(s))),n<8&&i>=8&&(a=a.next(()=>this.si(t,s))),n<9&&i>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&i>=10&&(a=a.next(()=>this.oi(s))),n<11&&i>=11&&(a=a.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&i>=12&&(a=a.next(()=>{(function(c){const d=c.createObjectStore("documentOverlays",{keyPath:Hh});d.createIndex("collectionPathOverlayIndex",Yh,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",Jh,{unique:!1})})(t)})),n<13&&i>=13&&(a=a.next(()=>function(c){const d=c.createObjectStore("remoteDocumentsV14",{keyPath:Lh});d.createIndex("documentKeyIndex",Uh),d.createIndex("collectionGroupIndex",Bh)}(t)).next(()=>this._i(t,s)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(a=a.next(()=>this.ai(t,s))),n<15&&i>=15&&(a=a.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:zh}).createIndex("sequenceNumberIndex",$h,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:Qh}).createIndex("documentKeyIndex",Wh,{unique:!1})}(t))),n<16&&i>=16&&(a=a.next(()=>{e.objectStore("indexState").clear()}).next(()=>{e.objectStore("indexEntries").clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(t)})),a}ri(t){let e=0;return t.store("remoteDocuments").J((n,i)=>{e+=ni(i)}).next(()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.U().next(i=>A.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(u=>A.forEach(u,c=>{O(c.userId===s.userId);const d=Te(this.serializer,c);return Ol(t,s.userId,d).next(()=>{})}))}))}ii(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((a,u)=>{const c=new Y(a),d=function(g){return[0,Vt(g)]}(c);s.push(e.get(d).next(f=>f?A.resolve():(g=>e.put({targetId:0,path:Vt(g),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>A.waitFor(s))})}si(t,e){t.createObjectStore("collectionParents",{keyPath:Kh});const n=e.store("collectionParents"),i=new Fs,s=a=>{if(i.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Vt(c)})}};return e.store("remoteDocuments").J({H:!0},(a,u)=>{const c=new Y(a);return s(c.popLast())}).next(()=>e.store("documentMutations").J({H:!0},([a,u,c],d)=>{const f=Ut(u);return s(f.popLast())}))}oi(t){const e=t.store("targets");return e.J((n,i)=>{const s=qn(i),a=Nl(this.serializer,s);return e.put(a)})}_i(t,e){const n=e.store("remoteDocuments"),i=[];return n.J((s,a)=>{const u=e.store("remoteDocumentsV14"),c=function(g){return g.document?new M(Y.fromString(g.document.name).popFirst(5)):g.noDocument?M.fromSegments(g.noDocument.path):g.unknownDocument?M.fromSegments(g.unknownDocument.path):F()}(a).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(u.put(d))}).next(()=>A.waitFor(i))}ai(t,e){const n=e.store("mutations"),i=ql(this.serializer),s=new Gl(_i.Zr,this.serializer.ct);return n.U().next(a=>{const u=new Map;return a.forEach(c=>{var d;let f=(d=u.get(c.userId))!==null&&d!==void 0?d:K();Te(this.serializer,c).keys().forEach(g=>f=f.add(g)),u.set(c.userId,f)}),A.forEach(u,(c,d)=>{const f=new mt(d),g=gi.lt(this.serializer,f),I=s.getIndexManager(f),P=pi.lt(f,this.serializer,I,s.referenceDelegate);return new jl(i,P,g,I).recalculateAndSaveOverlaysForDocumentKeys(new is(e,Mt.oe),c).next()})})}}function uu(r){r.createObjectStore("targetDocuments",{keyPath:jh}).createIndex("documentTargetsIndex",Gh,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",qh,{unique:!0}),r.createObjectStore("targetGlobal")}const Xi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ls{constructor(t,e,n,i,s,a,u,c,d,f,g=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.ui=s,this.window=a,this.document=u,this.ci=d,this.li=f,this.hi=g,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=I=>Promise.resolve(),!Ls.D())throw new D(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new uf(this,i),this.Ai=e+"main",this.serializer=new Dl(c),this.Ri=new se(this.Ai,this.hi,new Tf(this.serializer)),this.$r=new Wd,this.Ur=new nf(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ql(this.serializer),this.Gr=new Qd,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&Pt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(b.FAILED_PRECONDITION,Xi);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Ur.getHighestSequenceNumber(t))}).then(t=>{this.Qr=new Mt(t,this.ci)}).then(()=>{this.Kr=!0}).catch(t=>(this.Ri&&this.Ri.close(),Promise.reject(t)))}yi(t){return this.di=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ri.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Fr(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(t).next(e=>{e||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(t)).next(e=>this.isPrimary&&!e?this.bi(t).next(()=>!1):!!e&&this.Di(t).next(()=>!0))).catch(t=>{if(he(t))return S("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return S("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.ui.enqueueRetryable(()=>this.di(t)),this.isPrimary=t})}wi(t){return On(t).get("owner").next(e=>A.resolve(this.vi(e)))}Ci(t){return Fr(t).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=ht(e,"clientMetadata");return n.U().next(i=>{const s=this.xi(i,18e5),a=i.filter(u=>s.indexOf(u)===-1);return A.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Vi)for(const e of t)this.Vi.removeItem(this.Oi(e.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(t){return!!t&&t.ownerId===this.clientId}Si(t){return this.li?A.resolve(!0):On(t).get("owner").next(e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)){if(this.vi(e)&&this.networkEnabled)return!0;if(!this.vi(e)){if(!e.allowTabSynchronization)throw new D(b.FAILED_PRECONDITION,Xi);return!1}}return!(!this.networkEnabled||!this.inForeground)||Fr(t).U().next(n=>this.xi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,u=this.networkEnabled===i.networkEnabled;if(s||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&S("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new is(t,Mt.oe);return this.bi(e).next(()=>this.Ci(e))}),this.Ri.close(),this.qi()}xi(t,e){return t.filter(n=>this.Mi(n.updateTimeMs,e)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",t=>Fr(t).U().next(e=>this.xi(e,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(t,e){return pi.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new ef(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return gi.lt(this.serializer,t)}getBundleCache(){return this.Gr}runTransaction(t,e,n){S("IndexedDbPersistence","Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",s=function(c){return c===17?td:c===16?Zh:c===15?Rs:c===14?zu:c===13?Ku:c===12?Xh:c===11?Gu:void F()}(this.hi);let a;return this.Ri.runTransaction(t,i,s,u=>(a=new is(u,this.Qr?this.Qr.next():Mt.oe),e==="readwrite-primary"?this.wi(a).next(c=>!!c||this.Si(a)).next(c=>{if(!c)throw Pt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new D(b.FAILED_PRECONDITION,Uu);return n(a)}).next(c=>this.Di(a).next(()=>c)):this.Ki(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Ki(t){return On(t).get("owner").next(e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)&&!this.vi(e)&&!(this.li||this.allowTabSynchronization&&e.allowTabSynchronization))throw new D(b.FAILED_PRECONDITION,Xi)})}Di(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return On(t).put("owner",e)}static D(){return se.D()}bi(t){const e=On(t);return e.get("owner").next(n=>this.vi(n)?(S("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):A.resolve())}Mi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(Pt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const e=/(?:Version|Mobile)\/1[456]/;bu()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(t){var e;try{const n=((e=this.Vi)===null||e===void 0?void 0:e.getItem(this.Oi(t)))!==null;return S("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Pt("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(t){Pt("Failed to set zombie client id.",t)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function On(r){return ht(r,"owner")}function Fr(r){return ht(r,"clientMetadata")}function Ef(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=i}static Wi(t,e){let n=K(),i=K();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Us(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bu()?8:qu(Qr())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const s={result:null};return this.Yi(t,e).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(t,e,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new vf;return this.Xi(t,e,a).next(u=>{if(s.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>s.result)}es(t,e,n,i){return n.documentReadCount<this.ji?(Ye()<=Qt.DEBUG&&S("QueryEngine","SDK will not create cache indexes for query:",Je(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),A.resolve()):(Ye()<=Qt.DEBUG&&S("QueryEngine","Query:",Je(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Ye()<=Qt.DEBUG&&S("QueryEngine","The SDK decides to create cache indexes for query:",Je(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ft(e))):A.resolve())}Yi(t,e){if(ka(e))return A.resolve(null);let n=Ft(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Jr(e,null,"F"),n=Ft(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const a=K(...s);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(c=>{const d=this.ts(e,u);return this.ns(e,d,a,c.readTime)?this.Yi(t,Jr(e,null,"F")):this.rs(t,d,e,c)}))})))}Zi(t,e,n,i){return ka(e)||i.isEqual(L.min())?A.resolve(null):this.Ji.getDocuments(t,n).next(s=>{const a=this.ts(e,s);return this.ns(e,a,n,i)?A.resolve(null):(Ye()<=Qt.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Je(e)),this.rs(t,a,e,xh(i,-1)).next(u=>u))})}ts(t,e){let n=new X(sl(t));return e.forEach((i,s)=>{rr(t,s)&&(n=n.add(s))}),n}ns(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(t,e,n){return Ye()<=Qt.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",Je(e)),this.Ji.getDocumentsMatchingQuery(t,e,kt.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next(s=>(e.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new rt(j),this._s=new de(s=>xe(s),er),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jl(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function zl(r,t,e,n){return new wf(r,t,e,n)}async function $l(r,t){const e=B(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],u=[];let c=K();for(const d of i){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of s){u.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return e.localDocuments.getDocuments(n,c).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Af(r,t){const e=B(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),s=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,f){const g=d.batch,I=g.keys();let P=A.resolve();return I.forEach(x=>{P=P.next(()=>f.getEntry(c,x)).next(N=>{const C=d.docVersions.get(x);O(C!==null),N.version.compareTo(C)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=K();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Ql(r){const t=B(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Rf(r,t){const e=B(r),n=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const u=[];t.targetChanges.forEach((f,g)=>{const I=i.get(g);if(!I)return;u.push(e.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>e.Ur.addMatchingKeys(s,f.addedDocuments,g)));let P=I.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(g)!==null?P=P.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,n)),i=i.insert(g,P),function(N,C,G){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(I,P,f)&&u.push(e.Ur.updateTargetData(s,P))});let c=Dt(),d=K();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(Pf(s,a,t.documentUpdates).next(f=>{c=f.Ps,d=f.Is})),!n.isEqual(L.min())){const f=e.Ur.getLastRemoteSnapshotVersion(s).next(g=>e.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));u.push(f)}return A.waitFor(u).next(()=>a.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,d)).next(()=>c)}).then(s=>(e.os=i,s))}function Pf(r,t,e){let n=K(),i=K();return e.forEach(s=>n=n.add(s)),t.getEntries(r,n).next(s=>{let a=Dt();return e.forEach((u,c)=>{const d=s.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(L.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):S("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Ps:a,Is:i}})}function Vf(r,t){const e=B(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function bf(r,t){const e=B(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Ur.getTargetData(n,t).next(s=>s?(i=s,A.resolve(i)):e.Ur.allocateTargetId(n).next(a=>(i=new Wt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function ys(r,t,e){const n=B(r),i=n.os.get(t),s=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!he(a))throw a;S("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(i.target)}function lu(r,t,e){const n=B(r);let i=L.min(),s=K();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const g=B(c),I=g._s.get(f);return I!==void 0?A.resolve(g.os.get(I)):g.Ur.getTargetData(d,f)}(n,a,Ft(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,u.targetId).next(c=>{s=c})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?s:K())).next(u=>(Sf(n,gd(t),u),{documents:u,Ts:s})))}function Sf(r,t,e){let n=r.us.get(t)||L.min();e.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(t,n)}class cu{constructor(){this.activeTargetIds=Ed()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wl{constructor(){this.so=new cu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new cu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or=null;function Zi(){return Or===null?Or=function(){return 268435456+Math.round(2147483648*Math.random())}():Or++,"0x"+Or.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class Nf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(e,n,i,s,a){const u=Zi(),c=this.xo(e,n.toUriEncodedString());S("RestConnection",`Sending RPC '${e}' ${u}:`,c,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(e,c,d,i).then(f=>(S("RestConnection",`Received RPC '${e}' ${u}: `,f),f),f=>{throw Pe("RestConnection",`RPC '${e}' ${u} failed with error: `,f,"url: ",c,"request:",i),f})}Lo(e,n,i,s,a,u){return this.Mo(e,n,i,s,a)}Oo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>e[a]=s),i&&i.headers.forEach((s,a)=>e[a]=s)}xo(e,n){const i=Cf[e];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const s=Zi();return new Promise((a,u)=>{const c=new xu;c.setWithCredentials(!0),c.listenOnce(Cu.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Lr.NO_ERROR:const f=c.getResponseJson();S(Tt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(f)),a(f);break;case Lr.TIMEOUT:S(Tt,`RPC '${t}' ${s} timed out`),u(new D(b.DEADLINE_EXCEEDED,"Request time out"));break;case Lr.HTTP_ERROR:const g=c.getStatus();if(S(Tt,`RPC '${t}' ${s} failed with status:`,g,"response text:",c.getResponseText()),g>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const x=function(C){const G=C.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(G)>=0?G:b.UNKNOWN}(P.status);u(new D(x,P.message))}else u(new D(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new D(b.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{S(Tt,`RPC '${t}' ${s} completed.`)}});const d=JSON.stringify(i);S(Tt,`RPC '${t}' ${s} sending request:`,i),c.send(e,"POST",d,n,15)})}Bo(t,e,n){const i=Zi(),s=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ku(),u=Nu(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const f=s.join("");S(Tt,`Creating RPC '${t}' stream ${i}: ${f}`,c);const g=a.createWebChannel(f,c);let I=!1,P=!1;const x=new Df({Io:C=>{P?S(Tt,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(I||(S(Tt,`Opening RPC '${t}' stream ${i} transport.`),g.open(),I=!0),S(Tt,`RPC '${t}' stream ${i} sending:`,C),g.send(C))},To:()=>g.close()}),N=(C,G,q)=>{C.listen(G,U=>{try{q(U)}catch(H){setTimeout(()=>{throw H},0)}})};return N(g,Ln.EventType.OPEN,()=>{P||(S(Tt,`RPC '${t}' stream ${i} transport opened.`),x.yo())}),N(g,Ln.EventType.CLOSE,()=>{P||(P=!0,S(Tt,`RPC '${t}' stream ${i} transport closed`),x.So())}),N(g,Ln.EventType.ERROR,C=>{P||(P=!0,Pe(Tt,`RPC '${t}' stream ${i} transport errored:`,C),x.So(new D(b.UNAVAILABLE,"The operation could not be completed")))}),N(g,Ln.EventType.MESSAGE,C=>{var G;if(!P){const q=C.data[0];O(!!q);const U=q,H=U.error||((G=U[0])===null||G===void 0?void 0:G.error);if(H){S(Tt,`RPC '${t}' stream ${i} received error:`,H);const tt=H.status;let Q=function(y){const E=ut[y];if(E!==void 0)return yl(E)}(tt),T=H.message;Q===void 0&&(Q=b.INTERNAL,T="Unknown error status: "+tt+" with message "+H.message),P=!0,x.So(new D(Q,T)),g.close()}else S(Tt,`RPC '${t}' stream ${i} received:`,q),x.bo(q)}}),N(u,Du.STAT_EVENT,C=>{C.stat===ns.PROXY?S(Tt,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===ns.NOPROXY&&S(Tt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(){return typeof window<"u"?window:null}function zr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(r){return new Fd(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e,n=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-n);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e,n,i,s,a,u,c){this.ui=t,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(Pt(e.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===e&&this.P_(n,i)},n=>{t(()=>{const i=new D(b.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return S("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mf extends Yl{constructor(t,e,n,i,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=s}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Ud(this.serializer,t),n=function(s){if(!("targetChange"in s))return L.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?bt(a.readTime):L.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=fs(this.serializer),e.addTarget=function(s,a){let u;const c=a.target;if(u=Hr(c)?{documents:Pl(s,c)}:{query:Vl(s,c)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=El(s,a.resumeToken);const d=hs(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){u.readTime=ln(s,a.snapshotVersion.toTimestamp());const d=hs(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=qd(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=fs(this.serializer),e.removeTarget=t,this.a_(e)}}class Ff extends Yl{constructor(t,e,n,i,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return O(!!t.streamToken),this.lastStreamToken=t.streamToken,O(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){O(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Bd(t.writeResults,t.commitTime),n=bt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=fs(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Zr(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new D(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(t,ds(e,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(b.UNKNOWN,s.toString())})}Lo(t,e,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,ds(e,n),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Lf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pt(e),this.D_=!1):S("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{n.enqueueAndForget(async()=>{Ue(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=B(c);d.L_.add(4),await ar(d),d.q_.set("Unknown"),d.L_.delete(4),await Ii(d)}(this))})}),this.q_=new Lf(n,i)}}async function Ii(r){if(Ue(r))for(const t of r.B_)await t(!0)}async function ar(r){for(const t of r.B_)await t(!1)}function Jl(r,t){const e=B(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Gs(e)?js(e):mn(e).r_()&&qs(e,t))}function Bs(r,t){const e=B(r),n=mn(e);e.N_.delete(t),n.r_()&&Xl(e,t),e.N_.size===0&&(n.r_()?n.o_():Ue(e)&&e.q_.set("Unknown"))}function qs(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}mn(r).A_(t)}function Xl(r,t){r.Q_.xe(t),mn(r).R_(t)}function js(r){r.Q_=new Dd({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),mn(r).start(),r.q_.v_()}function Gs(r){return Ue(r)&&!mn(r).n_()&&r.N_.size>0}function Ue(r){return B(r).L_.size===0}function Zl(r){r.Q_=void 0}async function Bf(r){r.q_.set("Online")}async function qf(r){r.N_.forEach((t,e)=>{qs(r,t)})}async function jf(r,t){Zl(r),Gs(r)?(r.q_.M_(t),js(r)):r.q_.set("Unknown")}async function Gf(r,t,e){if(r.q_.set("Online"),t instanceof Tl&&t.state===2&&t.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(r,t)}catch(n){S("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ri(r,n)}else if(t instanceof Kr?r.Q_.Ke(t):t instanceof Il?r.Q_.He(t):r.Q_.We(t),!e.isEqual(L.min()))try{const n=await Ql(r.localStore);e.compareTo(n)>=0&&await function(s,a){const u=s.Q_.rt(a);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,d)=>{const f=s.N_.get(c);if(!f)return;s.N_.set(c,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),Xl(s,c);const g=new Wt(f.target,c,d,f.sequenceNumber);qs(s,g)}),s.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){S("RemoteStore","Failed to raise snapshot:",n),await ri(r,n)}}async function ri(r,t,e){if(!he(t))throw t;r.L_.add(1),await ar(r),r.q_.set("Offline"),e||(e=()=>Ql(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await Ii(r)})}function tc(r,t){return t().catch(e=>ri(r,e,t))}async function ur(r){const t=B(r),e=ce(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Kf(t);)try{const i=await Vf(t.localStore,n);if(i===null){t.O_.length===0&&e.o_();break}n=i.batchId,zf(t,i)}catch(i){await ri(t,i)}ec(t)&&nc(t)}function Kf(r){return Ue(r)&&r.O_.length<10}function zf(r,t){r.O_.push(t);const e=ce(r);e.r_()&&e.V_&&e.m_(t.mutations)}function ec(r){return Ue(r)&&!ce(r).n_()&&r.O_.length>0}function nc(r){ce(r).start()}async function $f(r){ce(r).p_()}async function Qf(r){const t=ce(r);for(const e of r.O_)t.m_(e.mutations)}async function Wf(r,t,e){const n=r.O_.shift(),i=Cs.from(n,t,e);await tc(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await ur(r)}async function Hf(r,t){t&&ce(r).V_&&await async function(n,i){if(function(a){return Sd(a)&&a!==b.ABORTED}(i.code)){const s=n.O_.shift();ce(n).s_(),await tc(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ur(n)}}(r,t),ec(r)&&nc(r)}async function du(r,t){const e=B(r);e.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const n=Ue(e);e.L_.add(3),await ar(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Ii(e)}async function Yf(r,t){const e=B(r);t?(e.L_.delete(2),await Ii(e)):t||(e.L_.add(2),await ar(e),e.q_.set("Unknown"))}function mn(r){return r.K_||(r.K_=function(e,n,i){const s=B(e);return s.w_(),new Mf(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:Bf.bind(null,r),Ro:qf.bind(null,r),mo:jf.bind(null,r),d_:Gf.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),Gs(r)?js(r):r.q_.set("Unknown")):(await r.K_.stop(),Zl(r))})),r.K_}function ce(r){return r.U_||(r.U_=function(e,n,i){const s=B(e);return s.w_(),new Ff(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$f.bind(null,r),mo:Hf.bind(null,r),f_:Qf.bind(null,r),g_:Wf.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await ur(r)):(await r.U_.stop(),r.O_.length>0&&(S("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,s){const a=Date.now()+n,u=new Ks(t,e,a,i,s);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zs(r,t){if(Pt("AsyncQueue",`${t}: ${r}`),he(r))return new D(b.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=Un(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new nn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof nn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new nn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.W_=new rt(M.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):F():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class cn{constructor(t,e,n,i,s,a,u,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,s){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new cn(t,e,nn.emptySet(e),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Xf{constructor(){this.queries=mu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const i=B(e),s=i.queries;i.queries=mu(),s.forEach((a,u)=>{for(const c of u.j_)c.onError(n)})})(this,new D(b.ABORTED,"Firestore shutting down"))}}function mu(){return new de(r=>il(r),hi)}async function $s(r,t){const e=B(r);let n=3;const i=t.query;let s=e.queries.get(i);s?!s.H_()&&t.J_()&&(n=2):(s=new Jf,n=t.J_()?0:1);try{switch(n){case 0:s.z_=await e.onListen(i,!0);break;case 1:s.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=zs(a,`Initialization of query '${Je(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,s),s.j_.push(t),t.Z_(e.onlineState),s.z_&&t.X_(s.z_)&&Ws(e)}async function Qs(r,t){const e=B(r),n=t.query;let i=3;const s=e.queries.get(n);if(s){const a=s.j_.indexOf(t);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Zf(r,t){const e=B(r);let n=!1;for(const i of t){const s=i.query,a=e.queries.get(s);if(a){for(const u of a.j_)u.X_(i)&&(n=!0);a.z_=i}}n&&Ws(e)}function tm(r,t,e){const n=B(r),i=n.queries.get(t);if(i)for(const s of i.j_)s.onError(e);n.queries.delete(t)}function Ws(r){r.Y_.forEach(t=>{t.next()})}var Is,gu;(gu=Is||(Is={})).ea="default",gu.Cache="cache";class Hs{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new cn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=cn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Is.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t){this.key=t}}class ic{constructor(t){this.key=t}}class em{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=K(),this.mutatedKeys=K(),this.Aa=sl(t),this.Ra=new nn(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new fu,i=e?e.Ra:this.Ra;let s=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((f,g)=>{const I=i.get(f),P=rr(this.query,g)?g:null,x=!!I&&this.mutatedKeys.has(I.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let C=!1;I&&P?I.data.isEqual(P.data)?x!==N&&(n.track({type:3,doc:P}),C=!0):this.ga(I,P)||(n.track({type:2,doc:P}),C=!0,(c&&this.Aa(P,c)>0||d&&this.Aa(P,d)<0)&&(u=!0)):!I&&P?(n.track({type:0,doc:P}),C=!0):I&&!P&&(n.track({type:1,doc:I}),C=!0,(c||d)&&(u=!0)),C&&(P?(a=a.add(P),s=N?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ra:a,fa:n,ns:u,mutatedKeys:s}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const s=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((f,g)=>function(P,x){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return N(P)-N(x)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(n),i=i!=null&&i;const u=e&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,d=c!==this.Ea;return this.Ea=c,a.length!==0||d?{snapshot:new cn(this.query,t.Ra,s,a,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new fu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=K(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new ic(n))}),this.da.forEach(n=>{t.has(n)||e.push(new rc(n))}),e}ba(t){this.Ta=t.Ts,this.da=K();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return cn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nm{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class rm{constructor(t){this.key=t,this.va=!1}}class im{constructor(t,e,n,i,s,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new de(u=>il(u),hi),this.Ma=new Map,this.xa=new Set,this.Oa=new rt(M.comparator),this.Na=new Map,this.La=new Os,this.Ba={},this.ka=new Map,this.qa=Me.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sm(r,t,e=!0){const n=cc(r);let i;const s=n.Fa.get(t);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await sc(n,t,e,!0),i}async function om(r,t){const e=cc(r);await sc(e,t,!0,!1)}async function sc(r,t,e,n){const i=await bf(r.localStore,Ft(t)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,e);let u;return n&&(u=await am(r,t,s,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&Jl(r.remoteStore,i),u}async function am(r,t,e,n,i){r.Ka=(g,I,P)=>async function(N,C,G,q){let U=C.view.ma(G);U.ns&&(U=await lu(N.localStore,C.query,!1).then(({documents:T})=>C.view.ma(T,U)));const H=q&&q.targetChanges.get(C.targetId),tt=q&&q.targetMismatches.get(C.targetId)!=null,Q=C.view.applyChanges(U,N.isPrimaryClient,H,tt);return _u(N,C.targetId,Q.wa),Q.snapshot}(r,g,I,P);const s=await lu(r.localStore,t,!0),a=new em(t,s.Ts),u=a.ma(s.documents),c=or.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=a.applyChanges(u,r.isPrimaryClient,c);_u(r,e,d.wa);const f=new nm(t,e,a);return r.Fa.set(t,f),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),d.snapshot}async function um(r,t,e){const n=B(r),i=n.Fa.get(t),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(a=>!hi(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ys(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Bs(n.remoteStore,i.targetId),Ts(n,i.targetId)}).catch(Fe)):(Ts(n,i.targetId),await ys(n.localStore,i.targetId,!0))}async function lm(r,t){const e=B(r),n=e.Fa.get(t),i=e.Ma.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Bs(e.remoteStore,n.targetId))}async function cm(r,t,e){const n=hc(r);try{const i=await function(a,u){const c=B(a),d=st.now(),f=u.reduce((P,x)=>P.add(x.key),K());let g,I;return c.persistence.runTransaction("Locally write mutations","readwrite",P=>{let x=Dt(),N=K();return c.cs.getEntries(P,f).next(C=>{x=C,x.forEach((G,q)=>{q.isValidDocument()||(N=N.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(P,x)).next(C=>{g=C;const G=[];for(const q of u){const U=Vd(q,g.get(q.key).overlayedDocument);U!=null&&G.push(new Yt(q.key,U,Yu(U.value.mapValue),ct.exists(!0)))}return c.mutationQueue.addMutationBatch(P,d,G,u)}).next(C=>{I=C;const G=C.applyToLocalDocumentSet(g,N);return c.documentOverlayCache.saveOverlays(P,C.batchId,G)})}).then(()=>({batchId:I.batchId,changes:al(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let d=a.Ba[a.currentUser.toKey()];d||(d=new rt(j)),d=d.insert(u,c),a.Ba[a.currentUser.toKey()]=d}(n,i.batchId,e),await lr(n,i.changes),await ur(n.remoteStore)}catch(i){const s=zs(i,"Failed to persist write");e.reject(s)}}async function oc(r,t){const e=B(r);try{const n=await Rf(e.localStore,t);t.targetChanges.forEach((i,s)=>{const a=e.Na.get(s);a&&(O(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?O(a.va):i.removedDocuments.size>0&&(O(a.va),a.va=!1))}),await lr(e,n,t)}catch(n){await Fe(n)}}function pu(r,t,e){const n=B(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Fa.forEach((s,a)=>{const u=a.view.Z_(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=B(a);c.onlineState=u;let d=!1;c.queries.forEach((f,g)=>{for(const I of g.j_)I.Z_(u)&&(d=!0)}),d&&Ws(c)}(n.eventManager,t),i.length&&n.Ca.d_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function hm(r,t,e){const n=B(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Na.get(t),s=i&&i.key;if(s){let a=new rt(M.comparator);a=a.insert(s,at.newNoDocument(s,L.min()));const u=K().add(s),c=new mi(L.min(),new Map,new rt(j),a,u);await oc(n,c),n.Oa=n.Oa.remove(s),n.Na.delete(t),Ys(n)}else await ys(n.localStore,t,!1).then(()=>Ts(n,t,e)).catch(Fe)}async function dm(r,t){const e=B(r),n=t.batch.batchId;try{const i=await Af(e.localStore,t);uc(e,n,null),ac(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await lr(e,i)}catch(i){await Fe(i)}}async function fm(r,t,e){const n=B(r);try{const i=await function(a,u){const c=B(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,u).next(g=>(O(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(d,g))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(n.localStore,t);uc(n,t,e),ac(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await lr(n,i)}catch(i){await Fe(i)}}function ac(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function uc(r,t,e){const n=B(r);let i=n.Ba[n.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),n.Ba[n.currentUser.toKey()]=i}}function Ts(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||lc(r,n)})}function lc(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(Bs(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),Ys(r))}function _u(r,t,e){for(const n of e)n instanceof rc?(r.La.addReference(n.key,t),mm(r,n)):n instanceof ic?(S("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||lc(r,n.key)):F()}function mm(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(S("SyncEngine","New document in limbo: "+e),r.xa.add(n),Ys(r))}function Ys(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new M(Y.fromString(t)),n=r.qa.next();r.Na.set(n,new rm(e)),r.Oa=r.Oa.insert(e,n),Jl(r.remoteStore,new Wt(Ft(nr(e.path)),n,"TargetPurposeLimboResolution",Mt.oe))}}async function lr(r,t,e){const n=B(r),i=[],s=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((u,c)=>{a.push(n.Ka(c,t,e).then(d=>{var f;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Us.Wi(c.targetId,d);s.push(g)}}))}),await Promise.all(a),n.Ca.d_(i),await async function(c,d){const f=B(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>A.forEach(d,I=>A.forEach(I.$i,P=>f.persistence.referenceDelegate.addReference(g,I.targetId,P)).next(()=>A.forEach(I.Ui,P=>f.persistence.referenceDelegate.removeReference(g,I.targetId,P)))))}catch(g){if(!he(g))throw g;S("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const I=g.targetId;if(!g.fromCache){const P=f.os.get(I),x=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(I,N)}}}(n.localStore,s))}async function gm(r,t){const e=B(r);if(!e.currentUser.isEqual(t)){S("SyncEngine","User change. New user:",t.toKey());const n=await $l(e.localStore,t);e.currentUser=t,function(s,a){s.ka.forEach(u=>{u.forEach(c=>{c.reject(new D(b.CANCELLED,a))})}),s.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await lr(e,n.hs)}}function pm(r,t){const e=B(r),n=e.Na.get(t);if(n&&n.va)return K().add(n.key);{let i=K();const s=e.Ma.get(t);if(!s)return i;for(const a of s){const u=e.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function cc(r){const t=B(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hm.bind(null,t),t.Ca.d_=Zf.bind(null,t.eventManager),t.Ca.$a=tm.bind(null,t.eventManager),t}function hc(r){const t=B(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fm.bind(null,t),t}class tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=yi(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return zl(this.persistence,new Kl,t.initialUser,this.serializer)}Ga(t){return new Gl(_i.Zr,this.serializer)}Wa(t){return new Wl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tr.provider={build:()=>new tr};class _m extends tr{constructor(t,e,n){super(),this.Ja=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ja.initialize(this,t),await hc(this.Ja.syncEngine),await ur(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(t){return zl(this.persistence,new Kl,t.initialUser,this.serializer)}ja(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new sf(n,t.asyncQueue,e)}Ha(t,e){const n=new kh(e,this.persistence);return new Nh(t.asyncQueue,n)}Ga(t){const e=Ef(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new Ls(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,kf(),zr(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(t){return new Wl}}class ii{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>pu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=gm.bind(null,this.syncEngine),await Yf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Xf}()}createDatastore(t){const e=yi(t.databaseInfo.databaseId),n=function(s){return new Nf(s)}(t.databaseInfo);return function(s,a,u,c){return new Of(s,a,u,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,s,a,u){return new Uf(n,i,s,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>pu(this.syncEngine,e,0),function(){return hu.D()?new hu:new xf}())}createSyncEngine(t,e){return function(i,s,a,u,c,d,f){const g=new im(i,s,a,u,c,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const s=B(i);S("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ar(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ii.provider={build:()=>new ii};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Pt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t,e,n,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=Fu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async a=>{S("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(S("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=zs(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ts(r,t){r.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await $l(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function yu(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Im(r);S("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>du(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>du(t.remoteStore,i)),r._onlineComponents=t}async function Im(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await ts(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Pe("Error using user provided cache. Falling back to memory cache: "+e),await ts(r,new tr)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await ts(r,new tr);return r._offlineComponents}async function dc(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await yu(r,r._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await yu(r,new ii))),r._onlineComponents}function Tm(r){return dc(r).then(t=>t.syncEngine)}async function si(r){const t=await dc(r),e=t.eventManager;return e.onListen=sm.bind(null,t.syncEngine),e.onUnlisten=um.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=om.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=lm.bind(null,t.syncEngine),e}function Em(r,t,e={}){const n=new qt;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,d){const f=new Js({next:I=>{f.Za(),a.enqueueAndForget(()=>Qs(s,g));const P=I.docs.has(u);!P&&I.fromCache?d.reject(new D(b.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&I.fromCache&&c&&c.source==="server"?d.reject(new D(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new Hs(nr(u.path),f,{includeMetadataChanges:!0,_a:!0});return $s(s,g)}(await si(r),r.asyncQueue,t,e,n)),n.promise}function vm(r,t,e={}){const n=new qt;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,d){const f=new Js({next:I=>{f.Za(),a.enqueueAndForget(()=>Qs(s,g)),I.fromCache&&c.source==="server"?d.reject(new D(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new Hs(u,f,{includeMetadataChanges:!0,_a:!0});return $s(s,g)}(await si(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(r,t,e){if(!e)throw new D(b.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function wm(r,t,e,n){if(t===!0&&n===!0)throw new D(b.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Tu(r){if(!M.isDocumentKey(r))throw new D(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Eu(r){if(M.isDocumentKey(r))throw new D(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ti(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":F()}function vt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new D(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ti(r);throw new D(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Am(r,t){if(t<=0)throw new D(b.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new D(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fc((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ei{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vu(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Eh;switch(n.type){case"firstParty":return new Rh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Iu.get(e);n&&(S("ComponentProvider","Removing Datastore"),Iu.delete(e),n.terminate())}(this),Promise.resolve()}}function Rm(r,t,e,n={}){var i;const s=(r=vt(r,Ei))._getSettings(),a=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Pe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let u,c;if(typeof n.mockUserToken=="string")u=n.mockUserToken,c=mt.MOCK_USER;else{u=yh(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new D(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new mt(d)}r._authCredentials=new vh(new Mu(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Gt(this.firestore,t,this._query)}}class wt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class oe extends Gt{constructor(t,e,n){super(t,e,nr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new M(t))}withConverter(t){return new oe(this.firestore,t,this._path)}}function qm(r,t,...e){if(r=Nt(r),mc("collection","path",t),r instanceof Ei){const n=Y.fromString(t,...e);return Eu(n),new oe(r,null,n)}{if(!(r instanceof wt||r instanceof oe))throw new D(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Eu(n),new oe(r.firestore,null,n)}}function Pm(r,t,...e){if(r=Nt(r),arguments.length===1&&(t=Fu.newId()),mc("doc","path",t),r instanceof Ei){const n=Y.fromString(t,...e);return Tu(n),new wt(r,null,new M(n))}{if(!(r instanceof wt||r instanceof oe))throw new D(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Tu(n),new wt(r.firestore,r instanceof oe?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hl(this,"async_queue_retry"),this.Vu=()=>{const n=zr();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=zr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=zr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new qt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!he(t))throw t;S("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw Pt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Ks.createAndSchedule(this,t,e,n,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Au(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class Lt extends Ei{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new wu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new wu(t),this._firestoreClient=void 0,await t}}}function jm(r,t){const e=typeof r=="object"?r:gh(),n=typeof r=="string"?r:"(default)",i=ph(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=_h("firestore");s&&Rm(i,...s)}return i}function cr(r){if(r._terminated)throw new D(b.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||gc(r),r._firestoreClient}function gc(r){var t,e,n;const i=r._freezeSettings(),s=function(u,c,d,f){return new nd(u,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,fc(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new ym(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function Gm(r,t){Pe("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return Vm(r,ii.provider,{build:n=>new _m(n,e.cacheSizeBytes,void 0)}),Promise.resolve()}function Vm(r,t,e){if((r=vt(r,Lt))._firestoreClient||r._terminated)throw new D(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new D(b.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},gc(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new hn(lt.fromBase64String(t))}catch(e){throw new D(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new hn(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=/^__.*__$/;class Sm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new Yt(t,this.data,this.fieldMask,e,this.fieldTransforms):new fn(t,this.data,e,this.fieldTransforms)}}class pc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Yt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _c(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class vi{constructor(t,e,n,i,s,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new vi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.Ou(t),i}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return oi(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(_c(this.Cu)&&bm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class xm{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||yi(t)}Qu(t,e,n,i=!1){return new vi({Cu:t,methodName:e,qu:n,path:it.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gn(r){const t=r._freezeSettings(),e=yi(r._databaseId);return new xm(r._databaseId,!!t.ignoreUndefinedProperties,e)}function to(r,t,e,n,i,s={}){const a=r.Qu(s.merge||s.mergeFields?2:0,t,e,i);so("Data must be an object, but it was:",a,n);const u=vc(n,a);let c,d;if(s.merge)c=new xt(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const I=Es(t,g,e);if(!a.contains(I))throw new D(b.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Ac(f,I)||f.push(I)}c=new xt(f),d=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,d=a.fieldTransforms;return new Sm(new Et(u),c,d)}class wi extends Be{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof wi}}function yc(r,t,e){return new vi({Cu:3,qu:t.settings.qu,methodName:r._methodName,xu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class eo extends Be{_toFieldTransform(t){return new ir(t.path,new an)}isEqual(t){return t instanceof eo}}class no extends Be{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=yc(this,t,!0),n=this.Ku.map(s=>qe(s,e)),i=new Ce(n);return new ir(t.path,i)}isEqual(t){return t instanceof no&&Vu(this.Ku,t.Ku)}}class ro extends Be{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=yc(this,t,!0),n=this.Ku.map(s=>qe(s,e)),i=new De(n);return new ir(t.path,i)}isEqual(t){return t instanceof ro&&Vu(this.Ku,t.Ku)}}class io extends Be{constructor(t,e){super(t),this.$u=e}_toFieldTransform(t){const e=new un(t.serializer,cl(t.serializer,this.$u));return new ir(t.path,e)}isEqual(t){return t instanceof io&&this.$u===t.$u}}function Ic(r,t,e,n){const i=r.Qu(1,t,e);so("Data must be an object, but it was:",i,n);const s=[],a=Et.empty();Oe(n,(c,d)=>{const f=oo(t,c,e);d=Nt(d);const g=i.Nu(f);if(d instanceof wi)s.push(f);else{const I=qe(d,g);I!=null&&(s.push(f),a.set(f,I))}});const u=new xt(s);return new pc(a,u,i.fieldTransforms)}function Tc(r,t,e,n,i,s){const a=r.Qu(1,t,e),u=[Es(t,n,e)],c=[i];if(s.length%2!=0)throw new D(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<s.length;I+=2)u.push(Es(t,s[I])),c.push(s[I+1]);const d=[],f=Et.empty();for(let I=u.length-1;I>=0;--I)if(!Ac(d,u[I])){const P=u[I];let x=c[I];x=Nt(x);const N=a.Nu(P);if(x instanceof wi)d.push(P);else{const C=qe(x,N);C!=null&&(d.push(P),f.set(P,C))}}const g=new xt(d);return new pc(f,g,a.fieldTransforms)}function Ec(r,t,e,n=!1){return qe(e,r.Qu(n?4:3,t))}function qe(r,t){if(wc(r=Nt(r)))return so("Unsupported field value:",t,r),vc(r,t);if(r instanceof Be)return function(n,i){if(!_c(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const u of n){let c=qe(u,i.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(r,t)}return function(n,i){if((n=Nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cl(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=st.fromDate(n);return{timestampValue:ln(i.serializer,s)}}if(n instanceof st){const s=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ln(i.serializer,s)}}if(n instanceof Xs)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hn)return{bytesValue:El(i.serializer,n._byteString)};if(n instanceof wt){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ks(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Zs)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.Bu("VectorValues must only contain numeric values.");return Ss(u.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Ti(n)}`)}(r,t)}function vc(r,t){const e={};return $u(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Oe(r,(n,i)=>{const s=qe(i,t.Mu(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function wc(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof st||r instanceof Xs||r instanceof hn||r instanceof wt||r instanceof Be||r instanceof Zs)}function so(r,t,e){if(!wc(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Ti(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function Es(r,t,e){if((t=Nt(t))instanceof hr)return t._internalPath;if(typeof t=="string")return oo(r,t);throw oi("Field path arguments must be of type string or ",r,!1,void 0,e)}const Cm=new RegExp("[~\\*/\\[\\]]");function oo(r,t,e){if(t.search(Cm)>=0)throw oi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new hr(...t.split("."))._internalPath}catch{throw oi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function oi(r,t,e,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new D(b.INVALID_ARGUMENT,u+r+c)}function Ac(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Dm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ai("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Dm extends ao{data(){return super.data()}}function Ai(r,t){return typeof t=="string"?oo(r,t):t instanceof hr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uo{}class Ri extends uo{}function Km(r,t,...e){let n=[];t instanceof uo&&n.push(t),n=n.concat(e),function(s){const a=s.filter(c=>c instanceof lo).length,u=s.filter(c=>c instanceof Pi).length;if(a>1||a>0&&u>0)throw new D(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Pi extends Ri{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Pi(t,e,n)}_apply(t){const e=this._parse(t);return Pc(t._query,e),new Gt(t.firestore,t.converter,cs(t._query,e))}_parse(t){const e=gn(t.firestore);return function(s,a,u,c,d,f,g){let I;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new D(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Pu(g,f);const P=[];for(const x of g)P.push(Ru(c,s,x));I={arrayValue:{values:P}}}else I=Ru(c,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Pu(g,f),I=Ec(u,a,g,f==="in"||f==="not-in");return z.create(d,f,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function zm(r,t,e){const n=t,i=Ai("where",r);return Pi._create(i,n,e)}class lo extends uo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new lo(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:J.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let a=i;const u=s.getFlattenedFilters();for(const c of u)Pc(a,c),a=cs(a,c)}(t._query,e),new Gt(t.firestore,t.converter,cs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class co extends Ri{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new co(t,e)}_apply(t){const e=function(i,s,a){if(i.startAt!==null)throw new D(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new D(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zn(s,a)}(t._query,this._field,this._direction);return new Gt(t.firestore,t.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Le(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function $m(r,t="asc"){const e=t,n=Ai("orderBy",r);return co._create(n,e)}class ho extends Ri{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new ho(t,e,n)}_apply(t){return new Gt(t.firestore,t.converter,Jr(t._query,this._limit,this._limitType))}}function Qm(r){return Am("limit",r),ho._create("limit",r,"F")}class fo extends Ri{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new fo(t,e,n)}_apply(t){const e=Nm(t,this.type,this._docOrFields,this._inclusive);return new Gt(t.firestore,t.converter,function(i,s){return new Le(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(t._query,e))}}function Wm(...r){return fo._create("startAfter",r,!1)}function Nm(r,t,e,n){if(e[0]=Nt(e[0]),e[0]instanceof ao)return function(s,a,u,c,d){if(!c)throw new D(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const g of en(s))if(g.field.isKeyField())f.push(Se(a,c.key));else{const I=c.data.field(g.field);if(li(I))throw new D(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(I===null){const P=g.field.canonicalString();throw new D(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}f.push(I)}return new le(f,d)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const i=gn(r.firestore);return function(a,u,c,d,f,g){const I=a.explicitOrderBy;if(f.length>I.length)throw new D(b.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let x=0;x<f.length;x++){const N=f[x];if(I[x].field.isKeyField()){if(typeof N!="string")throw new D(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof N}`);if(!bs(a)&&N.indexOf("/")!==-1)throw new D(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${N}' contains a slash.`);const C=a.path.child(Y.fromString(N));if(!M.isDocumentKey(C))throw new D(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const G=new M(C);P.push(Se(u,G))}else{const C=Ec(c,d,N);P.push(C)}}return new le(P,g)}(r._query,r.firestore._databaseId,i,t,e,n)}}function Ru(r,t,e){if(typeof(e=Nt(e))=="string"){if(e==="")throw new D(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bs(t)&&e.indexOf("/")!==-1)throw new D(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Y.fromString(e));if(!M.isDocumentKey(n))throw new D(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Se(r,new M(n))}if(e instanceof wt)return Se(r,e._key);throw new D(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ti(e)}.`)}function Pu(r,t){if(!Array.isArray(r)||r.length===0)throw new D(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Pc(r,t){const e=function(i,s){for(const a of i)for(const u of a.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new D(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class km{convertValue(t,e="none"){switch(be(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ae(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Oe(t,(i,s)=>{n[i]=this.convertValue(s,e)}),n}convertVectorValue(t){var e,n,i;const s=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>nt(a.doubleValue));return new Zs(s)}convertGeoPoint(t){return new Xs(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ps(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Yn(t));default:return null}}convertTimestamp(t){const e=Ht(t);return new st(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);O(Cl(n));const i=new Ve(n.get(1),n.get(3)),s=new M(n.popFirst(5));return i.isEqual(e)||Pt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vc extends ao{constructor(t,e,n,i,s,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ai("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $r extends Vc{data(t={}){return super.data(t)}}class bc{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new jn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new $r(this._firestore,this._userDataWriter,n.key,n,new jn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new $r(i._firestore,i._userDataWriter,u.doc.key,u.doc,new jn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const c=new $r(i._firestore,i._userDataWriter,u.doc.key,u.doc,new jn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:Mm(u.type),doc:c,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Mm(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(r){r=vt(r,wt);const t=vt(r.firestore,Lt);return Em(cr(t),r._key).then(e=>Sc(t,r,e))}class go extends km{constructor(t){super(),this.firestore=t}convertBytes(t){return new hn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function Ym(r){r=vt(r,Gt);const t=vt(r.firestore,Lt),e=cr(t),n=new go(t);return Rc(r._query),vm(e,r._query).then(i=>new bc(t,n,r,i))}function Jm(r,t,e){r=vt(r,wt);const n=vt(r.firestore,Lt),i=mo(r.converter,t,e);return dr(n,[to(gn(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,ct.none())])}function Xm(r,t,e,...n){r=vt(r,wt);const i=vt(r.firestore,Lt),s=gn(i);let a;return a=typeof(t=Nt(t))=="string"||t instanceof hr?Tc(s,"updateDoc",r._key,t,e,n):Ic(s,"updateDoc",r._key,t),dr(i,[a.toMutation(r._key,ct.exists(!0))])}function Zm(r){return dr(vt(r.firestore,Lt),[new sr(r._key,ct.none())])}function tg(r,t){const e=vt(r.firestore,Lt),n=Pm(r),i=mo(r.converter,t);return dr(e,[to(gn(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,ct.exists(!1))]).then(()=>n)}function eg(r,...t){var e,n,i;r=Nt(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Au(t[a])||(s=t[a],a++);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Au(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let c,d,f;if(r instanceof wt)d=vt(r.firestore,Lt),f=nr(r._key.path),c={next:g=>{t[a]&&t[a](Sc(d,r,g))},error:t[a+1],complete:t[a+2]};else{const g=vt(r,Gt);d=vt(g.firestore,Lt),f=g._query;const I=new go(d);c={next:P=>{t[a]&&t[a](new bc(d,I,g,P))},error:t[a+1],complete:t[a+2]},Rc(r._query)}return function(I,P,x,N){const C=new Js(N),G=new Hs(P,C,x);return I.asyncQueue.enqueueAndForget(async()=>$s(await si(I),G)),()=>{C.Za(),I.asyncQueue.enqueueAndForget(async()=>Qs(await si(I),G))}}(cr(d),f,u,c)}function dr(r,t){return function(n,i){const s=new qt;return n.asyncQueue.enqueueAndForget(async()=>cm(await Tm(n),i,s)),s.promise}(cr(r),t)}function Sc(r,t,e){const n=e.docs.get(t._key),i=new go(r);return new Vc(r,i,t._key,n,new jn(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=gn(t)}set(t,e,n){this._verifyNotCommitted();const i=es(t,this._firestore),s=mo(i.converter,e,n),a=to(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,ct.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const s=es(t,this._firestore);let a;return a=typeof(e=Nt(e))=="string"||e instanceof hr?Tc(this._dataReader,"WriteBatch.update",s._key,e,n,i):Ic(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,ct.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=es(t,this._firestore);return this._mutations=this._mutations.concat(new sr(e._key,ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function es(r,t){if((r=Nt(r)).firestore!==t)throw new D(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function ng(){return new eo("serverTimestamp")}function rg(...r){return new no("arrayUnion",r)}function ig(...r){return new ro("arrayRemove",r)}function sg(r){return new io("increment",r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(r){return cr(r=vt(r,Lt)),new Fm(r,t=>dr(r,t))}(function(t,e=!0){(function(i){dn=i})(Ih),dh(new fh("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),u=new Lt(new wh(n.getProvider("auth-internal")),new Vh(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ve(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:e},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),pa(ya,"4.7.3",t),pa(ya,"4.7.3","esm2017")})();export{Hm as a,tg as b,qm as c,Pm as d,Zm as e,og as f,Ym as g,ng as h,sg as i,Jm as j,rg as k,Qm as l,eg as m,ig as n,$m as o,jm as p,Km as q,Gm as r,Wm as s,Xm as u,zm as w};
//# sourceMappingURL=firebase-firestore-CA9QAA0e.js.map
