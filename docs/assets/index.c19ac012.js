import{u as nt}from"./vue.f36acd1f.a60398e7.js";import{ad as rt,ae as st,E as $,r as ot,c as it,o as at,R as C,A as b,af as lt,t as w,z as S,M as _e,x as m,N as ct,I as re,G as I,O as ut,S as A,v as _,Q as F,P as T,a0 as dt,X as ft,B as se,ag as pt,ah as J,y as x,ai as ht,aj as mt,ak as yt,al as wt,K as ge,L as Se,am as bt,an as W,ao as Et,ap as _t,aq as gt}from"./entry.5f99c685.js";import{u as St}from"./useVuetifyThemeSwitcher.391abfaa.js";function xt(e,t){const{title:n,titleTemplate:r,...s}=e;return nt({title:n,titleTemplate:r,_flatMeta:s},{...t,transform(o){const i=rt({...o._flatMeta});return delete o._flatMeta,{...o,meta:i}}})}function Fe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Rt}=Object.prototype,{getPrototypeOf:he}=Object,Z=(e=>t=>{const n=Rt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),B=e=>(e=e.toLowerCase(),t=>Z(t)===e),Y=e=>t=>typeof t===e,{isArray:v}=Array,M=Y("undefined");function Ot(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&N(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const De=B("ArrayBuffer");function At(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&De(e.buffer),t}const Tt=Y("string"),N=Y("function"),je=Y("number"),ee=e=>e!==null&&typeof e=="object",Nt=e=>e===!0||e===!1,K=e=>{if(Z(e)!=="object")return!1;const t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Pt=B("Date"),Ct=B("File"),kt=B("Blob"),Bt=B("FileList"),Lt=e=>ee(e)&&N(e.pipe),Ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||N(e.append)&&((t=Z(e))==="formdata"||t==="object"&&N(e.toString)&&e.toString()==="[object FormData]"))},Dt=B("URLSearchParams"),jt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),v(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ve=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ie=e=>!M(e)&&e!==ve;function ce(){const{caseless:e}=Ie(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ue(t,s)||s;K(t[o])&&K(r)?t[o]=ce(t[o],r):K(r)?t[o]=ce({},r):v(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const Ut=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&N(s)?e[o]=Fe(s,n):e[o]=s},{allOwnKeys:r}),e),vt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),It=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Vt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&he(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Mt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ht=e=>{if(!e)return null;if(v(e))return e;let t=e.length;if(!je(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},qt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&he(Uint8Array)),zt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},$t=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Jt=B("HTMLFormElement"),Wt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),xe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Kt=B("RegExp"),Ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Gt=e=>{Ve(e,(t,n)=>{if(N(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(N(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Xt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return v(e)?r(e):r(String(e).split(t)),n},Qt=()=>{},Zt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),oe="abcdefghijklmnopqrstuvwxyz",Re="0123456789",Me={DIGIT:Re,ALPHA:oe,ALPHA_DIGIT:oe+oe.toUpperCase()+Re},Yt=(e=16,t=Me.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function en(e){return!!(e&&N(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const tn=e=>{const t=new Array(10),n=(r,s)=>{if(ee(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=v(r)?[]:{};return H(r,(i,l)=>{const f=n(i,s+1);!M(f)&&(o[l]=f)}),t[s]=void 0,o}}return r};return n(e,0)},nn=B("AsyncFunction"),rn=e=>e&&(ee(e)||N(e))&&N(e.then)&&N(e.catch),a={isArray:v,isArrayBuffer:De,isBuffer:Ot,isFormData:Ft,isArrayBufferView:At,isString:Tt,isNumber:je,isBoolean:Nt,isObject:ee,isPlainObject:K,isUndefined:M,isDate:Pt,isFile:Ct,isBlob:kt,isRegExp:Kt,isFunction:N,isStream:Lt,isURLSearchParams:Dt,isTypedArray:qt,isFileList:Bt,forEach:H,merge:ce,extend:Ut,trim:jt,stripBOM:vt,inherits:It,toFlatObject:Vt,kindOf:Z,kindOfTest:B,endsWith:Mt,toArray:Ht,forEachEntry:zt,matchAll:$t,isHTMLForm:Jt,hasOwnProperty:xe,hasOwnProp:xe,reduceDescriptors:Ve,freezeMethods:Gt,toObjectSet:Xt,toCamelCase:Wt,noop:Qt,toFiniteNumber:Zt,findKey:Ue,global:ve,isContextDefined:Ie,ALPHABET:Me,generateString:Yt,isSpecCompliantForm:en,toJSONObject:tn,isAsyncFn:nn,isThenable:rn};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const He=y.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(y,qe);Object.defineProperty(He,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(He);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},l=>l!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const sn=null;function ue(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Oe(e,t,n){return e?e.concat(t).map(function(s,o){return s=ze(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function on(e){return a.isArray(e)&&!e.some(ue)}const an=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function te(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function c(d,h,R){let L=d;if(d&&!R&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&on(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(L=a.toArray(d)))return h=ze(h),L.forEach(function(z,tt){!(a.isUndefined(z)||z===null)&&t.append(i===!0?Oe([h],tt,o):i===null?h:h+"[]",u(z))}),!1}return ue(d)?!0:(t.append(Oe(R,h,o),u(d)),!1)}const p=[],E=Object.assign(an,{defaultVisitor:c,convertValue:u,isVisitable:ue});function O(d,h){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(d),a.forEach(d,function(L,P){(!(a.isUndefined(L)||L===null)&&s.call(t,L,a.isString(P)?P.trim():P,h,E))===!0&&O(L,h?h.concat(P):[P])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return O(e),t}function Ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function me(e,t){this._pairs=[],e&&te(e,this,t)}const $e=me.prototype;$e.append=function(t,n){this._pairs.push([t,n])};$e.toString=function(t){const n=t?function(r){return t.call(this,r,Ae)}:Ae;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ln(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Je(e,t,n){if(!t)return e;const r=n&&n.encode||ln,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new me(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class cn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Te=cn,We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},un=typeof URLSearchParams<"u"?URLSearchParams:me,dn=typeof FormData<"u"?FormData:null,fn=typeof Blob<"u"?Blob:null,pn={isBrowser:!0,classes:{URLSearchParams:un,FormData:dn,Blob:fn},protocols:["http","https","file","blob","url","data"]},Ke=typeof window<"u"&&typeof document<"u",hn=(e=>Ke&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),mn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),yn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ke,hasStandardBrowserEnv:hn,hasStandardBrowserWebWorkerEnv:mn},Symbol.toStringTag,{value:"Module"})),k={...yn,...pn};function wn(e,t){return te(e,new k.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return k.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function bn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function En(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ge(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=En(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(bn(r),s,n,0)}),n}return null}function _n(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ye={transitional:We,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ge(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return te(l?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),_n(t)):t}],transformResponse:[function(t){const n=this.transitional||ye.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:k.classes.FormData,Blob:k.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ye.headers[e]={}});const we=ye,gn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Sn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&gn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ne=Symbol("internals");function V(e){return e&&String(e).trim().toLowerCase()}function G(e){return e===!1||e==null?e:a.isArray(e)?e.map(G):String(e)}function xn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Rn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ie(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function On(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function An(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class ne{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,f,u){const c=V(f);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||f]=G(l))}const i=(l,f)=>a.forEach(l,(u,c)=>o(u,c,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Rn(t)?i(Sn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=V(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return xn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=V(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ie(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=V(i),i){const l=a.findKey(r,i);l&&(!n||ie(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ie(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=G(s),delete n[o];return}const l=t?On(o):String(o).trim();l!==o&&delete n[o],n[l]=G(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ne]=this[Ne]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=V(i);r[l]||(An(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}ne.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(ne.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(ne);const D=ne;function ae(e,t){const n=this||we,r=t||n,s=D.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Xe(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,y,{__CANCEL__:!0});function Tn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Nn=k.hasStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Cn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Qe(e,t){return e&&!Pn(t)?Cn(e,t):t}const kn=k.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Bn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ln(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),c=r[o];i||(i=u),n[s]=f,r[s]=u;let p=o,E=0;for(;p!==s;)E+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const O=c&&u-c;return O?Math.round(E*1e3/O):void 0}}function Pe(e,t){let n=0;const r=Ln(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,f=r(l),u=o<=i;n=o;const c={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:f||void 0,estimated:f&&i&&u?(i-o)/f:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const Fn=typeof XMLHttpRequest<"u",Dn=Fn&&function(e){return new Promise(function(n,r){let s=e.data;const o=D.from(e.headers).normalize(),i=e.responseType;let l;function f(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let u;if(a.isFormData(s)){if(k.hasStandardBrowserEnv||k.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[d,...h]=u?u.split(";").map(R=>R.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...h].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+h))}const p=Qe(e.baseURL,e.url);c.open(e.method.toUpperCase(),Je(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function E(){if(!c)return;const d=D.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),R={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:d,config:e,request:c};Tn(function(P){n(P),f()},function(P){r(P),f()},R),c=null}if("onloadend"in c?c.onloadend=E:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(E)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const R=e.transitional||We;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new y(h,R.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},k.hasStandardBrowserEnv){const d=kn(p)&&e.xsrfCookieName&&Nn.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(h,R){c.setRequestHeader(R,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=d=>{c&&(r(!d||d.type?new q(null,e,c):d),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const O=Bn(p);if(O&&k.protocols.indexOf(O)===-1){r(new y("Unsupported protocol "+O+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},de={http:sn,xhr:Dn};a.forEach(de,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce=e=>`- ${e}`,jn=e=>a.isFunction(e)||e===null||e===!1,Ze={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!jn(n)&&(r=de[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,f])=>`adapter ${l} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ce).join(`
`):" "+Ce(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:de};function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function ke(e){return le(e),e.headers=D.from(e.headers),e.data=ae.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ze.getAdapter(e.adapter||we.adapter)(e).then(function(r){return le(e),r.data=ae.call(e,e.transformResponse,r),r.headers=D.from(r.headers),r},function(r){return Xe(r)||(le(e),r&&r.response&&(r.response.data=ae.call(e,e.transformResponse,r.response),r.response.headers=D.from(r.response.headers))),Promise.reject(r)})}const Be=e=>e instanceof D?e.toJSON():e;function U(e,t){t=t||{};const n={};function r(u,c,p){return a.isPlainObject(u)&&a.isPlainObject(c)?a.merge.call({caseless:p},u,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(u,c,p){if(a.isUndefined(c)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,c,p)}function o(u,c){if(!a.isUndefined(c))return r(void 0,c)}function i(u,c){if(a.isUndefined(c)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,p){if(p in t)return r(u,c);if(p in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(u,c)=>s(Be(u),Be(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=f[c]||s,E=p(e[c],t[c],c);a.isUndefined(E)&&p!==l||(n[c]=E)}),n}const Ye="1.6.1",be={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{be[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Le={};be.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ye+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Le[i]&&(Le[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function Un(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],f=l===void 0||i(l,o,e);if(f!==!0)throw new y("option "+o+" must be "+f,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const fe={assertOptions:Un,validators:be},j=fe.validators;class Q{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&fe.assertOptions(r,{silentJSONParsing:j.transitional(j.boolean),forcedJSONParsing:j.transitional(j.boolean),clarifyTimeoutError:j.transitional(j.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:fe.assertOptions(s,{encode:j.function,serialize:j.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=D.concat(i,o);const l=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let c,p=0,E;if(!f){const d=[ke.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,u),E=d.length,c=Promise.resolve(n);p<E;)c=c.then(d[p++],d[p++]);return c}E=l.length;let O=n;for(p=0;p<E;){const d=l[p++],h=l[p++];try{O=d(O)}catch(R){h.call(this,R);break}}try{c=ke.call(this,O)}catch(d){return Promise.reject(d)}for(p=0,E=u.length;p<E;)c=c.then(u[p++],u[p++]);return c}getUri(t){t=U(this.defaults,t);const n=Qe(t.baseURL,t.url);return Je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){Q.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(U(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}Q.prototype[t]=n(),Q.prototype[t+"Form"]=n(!0)});const X=Q;class Ee{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new q(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ee(function(s){t=s}),cancel:t}}}const vn=Ee;function In(e){return function(n){return e.apply(null,n)}}function Vn(e){return a.isObject(e)&&e.isAxiosError===!0}const pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});const Mn=pe;function et(e){const t=new X(e),n=Fe(X.prototype.request,t);return a.extend(n,X.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return et(U(e,s))},n}const g=et(we);g.Axios=X;g.CanceledError=q;g.CancelToken=vn;g.isCancel=Xe;g.VERSION=Ye;g.toFormData=te;g.AxiosError=y;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=In;g.isAxiosError=Vn;g.mergeConfig=U;g.AxiosHeaders=D;g.formToJSON=e=>Ge(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=Ze.getAdapter;g.HttpStatusCode=Mn;g.default=g;const Hn=g;const qn={style:{position:"fixed",top:"15px",right:"15px"}},zn={class:"d-flex align-center pe-4",style:{gap:"15px"}},$n={key:1,class:"d-flex flex-column py-5",style:{width:"100vw !important",gap:"20px"}},Jn=m("br",null,null,-1),Wn={class:"d-flex flex-wrap align-center",style:{gap:"10px"}},Kn=["href"],Gn=["src"],Xn=m("br",null,null,-1),Qn=["innerHTML"],Zn=m("h1",null,"Skills",-1),Yn=m("br",null,null,-1),er={class:"d-flex flex-column",style:{gap:"20px"}},tr={key:0,class:"d-flex align-center"},nr={style:{"min-width":"150px","max-width":"150px"}},rr={class:"flex-grow-1"},sr={class:"d-block text-right",style:{"min-width":"50px","max-width":"50px"}},or=m("h1",null,"Experiências",-1),ir=m("br",null,null,-1),ar={class:"d-flex flex-column",style:{gap:"35px"}},lr={class:"ps-5",style:{"border-left":"solid 5px #444"}},cr={class:"mb-2"},ur={key:0,class:"d-flex align-center"},dr={class:"d-flex align-center"},fr=m("div",{class:"px-2"},"~",-1),pr={key:1,class:"d-flex align-center"},hr=["innerHTML"],mr=m("h1",null,"Projetos",-1),yr=m("br",null,null,-1),wr={class:"bg-white",style:{height:"100%",overflow:"auto"}},br={class:"text-center py-3"},Er=["src"],_r={class:"d-flex align-center"},gr=m("div",{class:"px-2"},"~",-1),Sr=["innerHTML"],xr=m("br",null,null,-1),Rr={class:"d-flex align-center",style:{gap:"10px"}},Nr={__name:"index",setup(e){const t=st(),n=St(),r=$({ready:!1,data:!1,async load(){try{let{data:l}=await Hn.get("https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/linkedin-resume.json");l.projects=l.projects.sort((f,u)=>f.dateInterval.start<f.dateInterval.final?-1:f.dateInterval.start>f.dateInterval.final?1:0),r.data=l,i.title=`${l.profile.firstName} ${l.profile.lastName} - ${l.profile.headline}`,i.description=l.profile.summary,i.image=l.profile.image}catch{}r.ready=!0}});ot(null);const s=$({show:!1,icon:"solar:hamburger-menu-outline",items:[{text:"Info",href:"#info"},{text:"Skills",href:"#skills"},{text:"Experiências",href:"#experiencias"},{text:"Projetos",href:"#projetos"},{icon:it(()=>n.current=="light"?"material-symbols:dark-mode":"material-symbols:light-mode"),onClick:l=>{n.switch()}}],defaults:{VBtn:{flat:!0}}}),o=$({dialog:!1,open(l){o.dialog=l.url}}),i=$({title:"",description:"",image:""});return xt({title:i.title,ogTitle:i.title,description:i.description,ogDescription:i.description,ogImage:i.image,twitterCard:"summary_large_image"}),at(()=>{r.load()}),(l,f)=>(w(),C(lt,null,{default:b(()=>[S(wt,null,{default:b(()=>[S(_e,{defaults:s.defaults},{default:b(()=>[m("div",qn,[S(ct,{location:"start"},{activator:b(u=>[re(t).mobile.value?A("",!0):(w(),C(I,ut({key:0,icon:s.icon},u.props),null,16,["icon"]))]),default:b(()=>[S(_e,{defaults:s.defaults},{default:b(()=>[m("div",zn,[(w(!0),_(T,null,F(s.items,u=>(w(),C(I,ge(Se(u)),null,16))),256))])]),_:1},8,["defaults"])]),_:1}),re(t).mobile.value?(w(),C(I,{key:0,icon:s.icon,onClick:f[0]||(f[0]=u=>s.show=!0)},null,8,["icon"])):A("",!0)])]),_:1},8,["defaults"]),re(t).mobile.value?(w(),C(dt,{key:0,modelValue:s.show,"onUpdate:modelValue":f[1]||(f[1]=u=>s.show=u),location:"end",width:"300",style:{position:"fixed",top:"0"}},{default:b(()=>[S(ft,null,{default:b(()=>[se("Seções")]),_:1}),S(pt,null,{default:b(()=>[(w(!0),_(T,null,F(s.items,u=>(w(),C(bt,ge(Se(u)),{default:b(()=>[u.icon?(w(),C(W,{key:0,icon:u.icon},null,8,["icon"])):A("",!0)]),_:2},1040))),256))]),_:1})]),_:1},8,["modelValue"])):A("",!0),r.ready?(w(),_("div",$n,[S(J,{id:"info"},{default:b(()=>[m("h1",null,x(r.data.profile.firstName)+" "+x(r.data.profile.lastName),1),m("h2",null,x(r.data.profile.headline),1),Jn,m("div",Wn,[(w(!0),_(T,null,F(r.data.contacts,u=>(w(),_("a",{href:u.url,target:"_blank"},[m("img",{src:u.icon,alt:""},null,8,Gn)],8,Kn))),256))]),Xn,m("div",{innerHTML:r.data.profile.summary,style:{"white-space":"pre-line"}},null,8,Qn)]),_:1}),S(J,{id:"skills"},{default:b(()=>[Zn,Yn,m("div",er,[(w(!0),_(T,null,F(r.data.skills,u=>(w(),_(T,null,[u.meta?(w(),_("div",tr,[m("div",nr,x(u.name),1),m("div",rr,[S(Et,{"model-value":100*u.meta.rating/5,height:"5"},null,8,["model-value"])]),m("small",sr,x(u.meta.rating)+" / 5",1)])):A("",!0)],64))),256))])]),_:1}),S(J,{id:"experiencias"},{default:b(()=>[or,ir,m("div",ar,[(w(!0),_(T,null,F(r.data.positions,u=>(w(),_("div",lr,[m("h2",cr,x(u.title),1),u.companyName?(w(),_("h3",ur,[S(W,{icon:"material-symbols:alternate-email",size:"16",class:"me-1"}),m("span",null,x(u.companyName),1)])):A("",!0),m("div",dr,[S(W,{icon:"material-symbols:calendar-month",size:"16",class:"me-1"}),m("div",null,x(u.dateInterval.start.formatted||"Atualmente"),1),fr,m("div",null,x(u.dateInterval.final.formatted||"Atualmente"),1)]),u.location.fullName?(w(),_("div",pr,[S(W,{icon:"ic:round-place",size:"16",class:"me-1"}),m("span",null,x(u.location.fullName),1)])):A("",!0),u.description?(w(),_("div",{key:2,innerHTML:u.description,class:"mt-3"},null,8,hr)):A("",!0)]))),256))])]),_:1}),S(J,{id:"projetos"},{default:b(()=>[mr,yr,S(ht,{modelValue:o.dialog,"onUpdate:modelValue":f[3]||(f[3]=u=>o.dialog=u),width:"600"},{default:b(()=>[S(mt,{modelValue:o.dialog,"onUpdate:modelValue":f[2]||(f[2]=u=>o.dialog=u),height:"80vh",style:{"border-radius":"6px"},"hide-delimiters":!0},{default:b(()=>[(w(!0),_(T,null,F(r.data.projects,(u,c)=>(w(),_(T,null,[(w(!0),_(T,null,F(u.meta.images,(p,E)=>(w(),C(_t,{value:p.url},{default:b(()=>[m("div",wr,[m("h2",br,x(u.title),1),m("img",{src:p.url,alt:"",style:{width:"100%"}},null,8,Er)])]),_:2},1032,["value"]))),256))],64))),256))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),S(yt,{side:"end",align:"start"},{default:b(()=>[(w(!0),_(T,null,F(r.data.projects,(u,c)=>(w(),C(gt,{size:"small"},{default:b(()=>[m("h2",null,x(u.title),1),m("div",_r,[m("div",null,x(u.dateInterval.start.formatted||"Atualmente"),1),gr,m("div",null,x(u.dateInterval.start.formatted||"Atualmente"),1)]),u.description?(w(),_("div",{key:0,innerHTML:u.description,class:"mt-3"},null,8,Sr)):A("",!0),xr,m("div",Rr,[S(I,{href:u.url,target:"_blank"},{default:b(()=>[se("Visualizar")]),_:2},1032,["href"]),u.meta?(w(),_(T,{key:0},[u.meta.images?(w(!0),_(T,{key:0},F(u.meta.images,(p,E)=>(w(),C(I,{onClick:O=>o.open(p)},{default:b(()=>[se("Image "+x(E+1),1)]),_:2},1032,["onClick"]))),256)):A("",!0)],64)):A("",!0)])]),_:2},1024))),256))]),_:1})]),_:1}),m("pre",null,x(l.btnRefs),1)])):A("",!0)]),_:1})]),_:1}))}};export{Nr as default};
