!function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=28)}([function(t,n,r){var e=r(22)("wks"),o=r(23),i=r(1).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(10),o=r(20);t.exports=r(6)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports={}},function(t,n,r){var e=r(9);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,n,r){t.exports=!r(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(4),o=r(40),i=r(55),u=Object.defineProperty;n.f=r(6)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(22)("keys"),o=r(23);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(41),o=r(8);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(15),o=r(0)("toStringTag"),i="Arguments"==e(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(n=Object(t),o))?r:i?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(9),o=r(1).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){"use strict";var e=r(44),o=r(38),i=r(50),u=r(2),c=r(7),f=r(3),a=r(42),s=r(21),p=r(47),l=r(0)("iterator"),v=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,r,y,d,x,g){a(r,n,y);var b,_,m,w=function(t){if(!v&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},O=n+" Iterator",j="values"==d,M=!1,S=t.prototype,P=S[l]||S["@@iterator"]||d&&S[d],E=P||w(d),k=d?j?w("entries"):E:void 0,A="Array"==n?S.entries||P:P;if(A&&(m=p(A.call(new t)))!==Object.prototype&&(s(m,O,!0),e||c(m,l)||u(m,l,h)),j&&P&&"values"!==P.name&&(M=!0,E=function(){return P.call(this)}),e&&!g||!v&&!M&&S[l]||u(S,l,E),f[n]=E,f[O]=h,d)if(b={values:j?E:w("values"),keys:x?E:w("keys"),entries:k},g)for(_ in b)_ in S||i(S,_,b[_]);else o(o.P+o.F*(v||M),n,b);return b}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(10).f,o=r(7),i=r(0)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(1),o=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){"use strict";var e=r(51)(!0);r(19)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){r(59);for(var e=r(1),o=r(2),i=r(3),u=r(0)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;f<5;f++){var a=c[f],s=e[a],p=s&&s.prototype;p&&!p[u]&&o(p,u,a),i[a]=i.Array}},function(t,n,r){"use strict";var e=r(31),o=r.n(e),i=function(t,n){var r=n.length;if(1===t)return[n[r-2],n[r-1]];for(var e=0;t<n[e].h||t>=n[e+1].h;)e++;var o=e===r?0:e+1;return[n[e],n[o]]},u=function(t,n,r,e,o){var i=e+(t-n)*(o-e)/(r-n);return Math.round(i)},c=function(t,n){var r=i(t,n),e=o()(r,2),c=e[0],f=e[1];return{r:u(t,c.h,f.h,c.r,f.r),g:u(t,c.h,f.h,c.g,f.g),b:u(t,c.h,f.h,c.b,f.b),a:255}},f=[{h:0,r:255,g:255,b:255},{h:1,r:0,g:0,b:0}],a=[{h:0,r:255,g:255,b:255},{h:.1,r:255,g:0,b:255},{h:.2,r:0,g:0,b:255},{h:.3,r:0,g:255,b:255},{h:.4,r:0,g:255,b:0},{h:.6,r:255,g:255,b:0},{h:.8,r:255,g:0,b:0},{h:1,r:0,g:0,b:0}],s=[{h:0,r:0,g:7,b:100},{h:.16,r:32,g:107,b:203},{h:.42,r:237,g:255,b:255},{h:.64,r:255,g:170,b:0},{h:.86,r:0,g:2,b:0},{h:1,r:0,g:7,b:100}];n.a={bw:f,rainbow:a,wiki:s,lg:c}},function(t,n,r){"use strict";var e=function(t,n){return t.x<0||t.x>1||t.y<0||t.y>1?0:t.x*n},o=function(t,n){if(0===n)return 0;var r=Math.log(t)/2;return n-Math.log(r)/Math.log(2)},i=function(t,n){for(var r={x:0,y:0},e=0;e<n;e++){var i={x:r.x*r.x-r.y*r.y+t.x,y:2*r.x*r.y+t.y},u=i.x*i.x+i.y*i.y;if(u>4)return o(u,e);r=i}return n};n.a={colorPalette:e,mandelbrot:i}},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(27),o=r(26),i=function(t,n,r){return{x:r.x+t/r.zoom,y:r.y-n/r.zoom}};self.onmessage=function(t){for(var n=t.data.params,r=t.data.image,u=n.width,c=n.height,f=Math.floor(u/2),a=Math.floor(c/2),s=n.resolution,p=0;p<c;p++)for(var l=0;l<u;l++){var v=4*(p*u+l),h=i(l-f,p-a,n),y=e.a.mandelbrot(h,s),d=function(t){return o.a.lg(t,n.palette)}(y/s);r.data[v+0]=d.r,r.data[v+1]=d.g,r.data[v+2]=d.b,r.data[v+3]=d.a}postMessage({image:r})}},function(t,n,r){t.exports={default:r(32),__esModule:!0}},function(t,n,r){t.exports={default:r(33),__esModule:!0}},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=r(30),i=e(o),u=r(29),c=e(u);n.default=function(){function t(t,n){var r=[],e=!0,o=!1,i=void 0;try{for(var u,f=(0,c.default)(t);!(e=(u=f.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{!e&&f.return&&f.return()}finally{if(o)throw i}}return r}return function(n,r){if(Array.isArray(n))return n;if((0,i.default)(Object(n)))return t(n,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,n,r){r(25),r(24),t.exports=r(57)},function(t,n,r){r(25),r(24),t.exports=r(58)},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,r){var e=r(13),o=r(53),i=r(52);t.exports=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(34);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(1),o=r(5),i=r(37),u=r(2),c=function(t,n,r){var f,a,s,p=t&c.F,l=t&c.G,v=t&c.S,h=t&c.P,y=t&c.B,d=t&c.W,x=l?o:o[n]||(o[n]={}),g=x.prototype,b=l?e:v?e[n]:(e[n]||{}).prototype;l&&(r=n);for(f in r)(a=!p&&b&&void 0!==b[f])&&f in x||(s=a?b[f]:r[f],x[f]=l&&"function"!=typeof b[f]?r[f]:y&&a?i(s,e):d&&b[f]==s?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):h&&"function"==typeof s?i(Function.call,s):s,h&&((x.virtual||(x.virtual={}))[f]=s,t&c.R&&g&&!g[f]&&u(g,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,r){t.exports=r(1).document&&document.documentElement},function(t,n,r){t.exports=!r(6)&&!r(18)(function(){return 7!=Object.defineProperty(r(16)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(15);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){"use strict";var e=r(45),o=r(20),i=r(21),u={};r(2)(u,r(0)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:o(1,r)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n){t.exports=!0},function(t,n,r){var e=r(4),o=r(46),i=r(17),u=r(11)("IE_PROTO"),c=function(){},f=function(){var t,n=r(16)("iframe"),e=i.length;for(n.style.display="none",r(39).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;e--;)delete f.prototype[i[e]];return f()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=f(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(10),o=r(4),i=r(49);t.exports=r(6)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},function(t,n,r){var e=r(7),o=r(54),i=r(11)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(7),o=r(13),i=r(36)(!1),u=r(11)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(48),o=r(17);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){t.exports=r(2)},function(t,n,r){var e=r(12),o=r(8);t.exports=function(t){return function(n,r){var i,u,c=String(o(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,r){var e=r(12),o=Math.max,i=Math.min;t.exports=function(t,n){return t=e(t),t<0?o(t+n,0):i(t,n)}},function(t,n,r){var e=r(12),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(8);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(9);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(14),o=r(0)("iterator"),i=r(3);t.exports=r(5).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[e(t)]}},function(t,n,r){var e=r(4),o=r(56);t.exports=r(5).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return e(n.call(t))}},function(t,n,r){var e=r(14),o=r(0)("iterator"),i=r(3);t.exports=r(5).isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||i.hasOwnProperty(e(n))}},function(t,n,r){"use strict";var e=r(35),o=r(43),i=r(3),u=r(13);t.exports=r(19)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,r):"values"==n?o(0,t[r]):o(0,[r,t[r]])},"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")}]);