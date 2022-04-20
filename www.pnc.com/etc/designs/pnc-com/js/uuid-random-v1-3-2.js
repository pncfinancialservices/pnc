// Array.from support for IE11
// MDN Polyfill
Array.from||(Array.from=function(){var r;try{r=Symbol.iterator?Symbol.iterator:"Symbol(Symbol.iterator)"}catch(t){r="Symbol(Symbol.iterator)"}var t=Object.prototype.toString,n=function(r){return"function"==typeof r||"[object Function]"===t.call(r)},o=Math.pow(2,53)-1,e=function(r){var t=function(r){var t=Number(r);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(r);return Math.min(Math.max(t,0),o)};return function(t){var o=Object(t),a=n(o[r]);if(null==t&&!a)throw new TypeError("Array.from requires an array-like object or iterator - not null or undefined");var i,u=arguments.length>1?arguments[1]:void 0;if(void 0!==u){if(!n(u))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}var f=e(o.length);return function(r,t,n,o,e,a){for(var i=0;i<n||e;){var u=o(i),f=e?u.value:u;if(e&&u.done)return t;t[i]=a?void 0===r?a(f,i):a.call(r,f,i):f,i+=1}if(e)throw new TypeError("Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1");return t.length=n,t}(i,n(this)?Object(new this(f)):new Array(f),f,function(t,n){var o=t&&n[r]();return function(r){return t?o.next():n[r]}}(a,o),a,u)}}());
// UUID-Random-v1.3.2
// https://github.com/jchook/uuid-random
"use strict";!function(){var n,r,t,e=0,o=[];for(r=0;r<256;r++)o[r]=(r+256).toString(16).substr(1);function u(){var r,t=(r=16,(!n||e+r>i.BUFFER_SIZE)&&(e=0,n=i.randomBytes(i.BUFFER_SIZE)),n.slice(e,e+=r));return t[6]=15&t[6]|64,t[8]=63&t[8]|128,t}function i(){var n=u();return o[n[0]]+o[n[1]]+o[n[2]]+o[n[3]]+"-"+o[n[4]]+o[n[5]]+"-"+o[n[6]]+o[n[7]]+"-"+o[n[8]]+o[n[9]]+"-"+o[n[10]]+o[n[11]]+o[n[12]]+o[n[13]]+o[n[14]]+o[n[15]]}i.BUFFER_SIZE=4096,i.bin=u,i.clearBuffer=function(){n=null,e=0},i.test=function(n){return"string"==typeof n&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(n)},"undefined"!=typeof crypto?t=crypto:"undefined"!=typeof window&&void 0!==window.msCrypto&&(t=window.msCrypto),"undefined"!=typeof module&&"function"==typeof require?(t=t||require("crypto"),module.exports=i):"undefined"!=typeof window&&(window.uuid=i),i.randomBytes=function(){if(t){if(t.randomBytes)return t.randomBytes;if(t.getRandomValues)return"function"!=typeof Uint8Array.prototype.slice?function(n){var r=new Uint8Array(n);return t.getRandomValues(r),Array.from(r)}:function(n){var r=new Uint8Array(n);return t.getRandomValues(r),r}}return function(n){var r,t=[];for(r=0;r<n;r++)t.push(Math.floor(256*Math.random()));return t}}()}();
