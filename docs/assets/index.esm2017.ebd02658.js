import{_ as cu,C as du,r as $i,F as fu,g as mu,a as gu,b as pu,L as Rt,c as _u,d as Jt,S as yu,e as Eu}from"./index.esm.db934170.js";var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Br=Br||{},v=Tu||self;function Mn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ze(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function vu(e){return Object.prototype.hasOwnProperty.call(e,or)&&e[or]||(e[or]=++Iu)}var or="closure_uid_"+(1e9*Math.random()>>>0),Iu=0;function Au(e,t,n){return e.call.apply(e.bind,arguments)}function wu(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function J(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=Au:J=wu,J.apply(null,arguments)}function on(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function kt(){this.s=this.s,this.o=this.o}var Ru=0;kt.prototype.s=!1;kt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ru!=0)&&vu(this)};kt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bs=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function jr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Gi(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Mn(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var Pu=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",()=>{},t),v.removeEventListener("test",()=>{},t)}catch{}return e}();function Ce(e){return/^[\s\xa0]*$/.test(e)}function On(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function dt(e){return On().indexOf(e)!=-1}function zr(e){return zr[" "](e),e}zr[" "]=function(){};function Vu(e,t){var n=El;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Su=dt("Opera"),Zt=dt("Trident")||dt("MSIE"),js=dt("Edge"),yr=js||Zt,zs=dt("Gecko")&&!(On().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),Cu=On().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function $s(){var e=v.document;return e?e.documentMode:void 0}var Er;t:{var ar="",ur=function(){var e=On();if(zs)return/rv:([^\);]+)(\)|;)/.exec(e);if(js)return/Edge\/([\d\.]+)/.exec(e);if(Zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Cu)return/WebKit\/(\S+)/.exec(e);if(Su)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ur&&(ar=ur?ur[1]:""),Zt){var lr=$s();if(lr!=null&&lr>parseFloat(ar)){Er=String(lr);break t}}Er=ar}var Tr;if(v.document&&Zt){var Ki=$s();Tr=Ki||parseInt(Er,10)||void 0}else Tr=void 0;var Du=Tr;function De(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(zs){t:{try{zr(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ku[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&De.$.h.call(this)}}z(De,Z);var ku={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $e="closure_listenable_"+(1e6*Math.random()|0),Nu=0;function xu(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Nu,this.fa=this.ia=!1}function Fn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function $r(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Mu(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Gs(e){const t={};for(const n in e)t[n]=e[n];return t}const Qi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ks(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Qi.length;s++)n=Qi[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ln(e){this.src=e,this.g={},this.h=0}Ln.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Ir(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new xu(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function vr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Bs(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Fn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ir(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Gr="closure_lm_"+(1e6*Math.random()|0),hr={};function Qs(e,t,n,r,i){if(r&&r.once)return Hs(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Qs(e,t[s],n,r,i);return null}return n=Wr(n),e&&e[$e]?e.O(t,n,ze(r)?!!r.capture:!!r,i):Ws(e,t,n,!1,r,i)}function Ws(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ze(i)?!!i.capture:!!i,a=Qr(e);if(a||(e[Gr]=a=new Ln(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Ou(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Pu||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ys(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ou(){function e(n){return t.call(e.src,e.listener,n)}const t=Fu;return e}function Hs(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Hs(e,t[s],n,r,i);return null}return n=Wr(n),e&&e[$e]?e.P(t,n,ze(r)?!!r.capture:!!r,i):Ws(e,t,n,!0,r,i)}function Xs(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Xs(e,t[s],n,r,i);else r=ze(r)?!!r.capture:!!r,n=Wr(n),e&&e[$e]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Ir(s,n,r,i),-1<n&&(Fn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Qr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ir(t,n,r,i)),(n=-1<e?t[e]:null)&&Kr(n))}function Kr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[$e])vr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ys(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Qr(t))?(vr(n,e),n.h==0&&(n.src=null,t[Gr]=null)):Fn(e)}}}function Ys(e){return e in hr?hr[e]:hr[e]="on"+e}function Fu(e,t){if(e.fa)e=!0;else{t=new De(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Kr(e),e=n.call(r,t)}return e}function Qr(e){return e=e[Gr],e instanceof Ln?e:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wr(e){return typeof e=="function"?e:(e[cr]||(e[cr]=function(t){return e.handleEvent(t)}),e[cr])}function j(){kt.call(this),this.i=new Ln(this),this.S=this,this.J=null}z(j,kt);j.prototype[$e]=!0;j.prototype.removeEventListener=function(e,t,n,r){Xs(this,e,t,n,r)};function Q(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var i=t;t=new Z(r,e),Ks(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=an(o,r,!0,t)&&i}if(o=t.g=e,i=an(o,r,!0,t)&&i,i=an(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=an(o,r,!1,t)&&i}j.prototype.N=function(){if(j.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Fn(n[r]);delete e.g[t],e.h--}}this.J=null};j.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};j.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function an(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&vr(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Hr=v.JSON.stringify;class Lu{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function bu(){var e=Xr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Uu{constructor(){this.h=this.g=null}add(t,n){const r=Js.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Js=new Lu(()=>new qu,e=>e.reset());class qu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Bu(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function ju(e){v.setTimeout(()=>{throw e},0)}let ke,Ne=!1,Xr=new Uu,Zs=()=>{const e=v.Promise.resolve(void 0);ke=()=>{e.then(zu)}};var zu=()=>{for(var e;e=bu();){try{e.h.call(e.g)}catch(n){ju(n)}var t=Js;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ne=!1};function bn(e,t){j.call(this),this.h=e||1,this.g=t||v,this.j=J(this.qb,this),this.l=Date.now()}z(bn,j);p=bn.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(Yr(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){bn.$.N.call(this),Yr(this),delete this.g};function Jr(e,t,n){if(typeof e=="function")n&&(e=J(e,n));else if(e&&typeof e.handleEvent=="function")e=J(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function to(e){e.g=Jr(()=>{e.g=null,e.i&&(e.i=!1,to(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class $u extends kt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:to(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(e){kt.call(this),this.h=e,this.g={}}z(xe,kt);var Wi=[];function eo(e,t,n,r){Array.isArray(n)||(n&&(Wi[0]=n.toString()),n=Wi);for(var i=0;i<n.length;i++){var s=Qs(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function no(e){$r(e.g,function(t,n){this.g.hasOwnProperty(n)&&Kr(t)},e),e.g={}}xe.prototype.N=function(){xe.$.N.call(this),no(this)};xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Un(){this.g=!0}Un.prototype.Ea=function(){this.g=!1};function Gu(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var h=l[0];l=l[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Ku(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Wt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Wu(e,n)+(r?" "+r:"")})}function Qu(e,t){e.info(function(){return"TIMEOUT: "+t})}Un.prototype.info=function(){};function Wu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Hr(n)}catch{return t}}var qt={},Hi=null;function qn(){return Hi=Hi||new j}qt.Ta="serverreachability";function ro(e){Z.call(this,qt.Ta,e)}z(ro,Z);function Me(e){const t=qn();Q(t,new ro(t))}qt.STAT_EVENT="statevent";function io(e,t){Z.call(this,qt.STAT_EVENT,e),this.stat=t}z(io,Z);function nt(e){const t=qn();Q(t,new io(t,e))}qt.Ua="timingevent";function so(e,t){Z.call(this,qt.Ua,e),this.size=t}z(so,Z);function Ge(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var Bn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},oo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zr(){}Zr.prototype.h=null;function Xi(e){return e.h||(e.h=e.i())}function ao(){}var Ke={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ti(){Z.call(this,"d")}z(ti,Z);function ei(){Z.call(this,"c")}z(ei,Z);var Ar;function jn(){}z(jn,Zr);jn.prototype.g=function(){return new XMLHttpRequest};jn.prototype.i=function(){return{}};Ar=new jn;function Qe(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new xe(this),this.P=Hu,e=yr?125:void 0,this.V=new bn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new uo}function uo(){this.i=null,this.g="",this.h=!1}var Hu=45e3,wr={},yn={};p=Qe.prototype;p.setTimeout=function(e){this.P=e};function Rr(e,t,n){e.L=1,e.v=$n(vt(t)),e.s=n,e.S=!0,lo(e,null)}function lo(e,t){e.G=Date.now(),We(e),e.A=vt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),yo(n.i,"t",r),e.C=0,n=e.l.J,e.h=new uo,e.g=Uo(e.l,n?t:null,!e.s),0<e.O&&(e.M=new $u(J(e.Pa,e,e.g),e.O)),eo(e.U,e.g,"readystatechange",e.nb),t=e.I?Gs(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Me(),Gu(e.j,e.u,e.A,e.m,e.W,e.s)}p.nb=function(e){e=e.target;const t=this.M;t&&ft(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)t:{const h=ft(this.g);var t=this.g.Ia();const c=this.g.da();if(!(3>h)&&(h!=3||yr||this.g&&(this.h.h||this.g.ja()||ts(this.g)))){this.J||h!=4||t==7||(t==8||0>=c?Me(3):Me(2)),zn(this);var n=this.g.da();this.ca=n;e:if(ho(this)){var r=ts(this.g);e="";var i=r.length,s=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),we(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ku(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ce(a)){var l=a;break e}}l=null}if(n=l)Wt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pr(this,n);else{this.i=!1,this.o=3,nt(12),xt(this),we(this);break t}}this.S?(co(this,h,o),yr&&this.i&&h==3&&(eo(this.U,this.V,"tick",this.mb),this.V.start())):(Wt(this.j,this.m,o,null),Pr(this,o)),h==4&&xt(this),this.i&&!this.J&&(h==4?Oo(this.l,this):(this.i=!1,We(this)))}else pl(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),xt(this),we(this)}}}catch{}finally{}};function ho(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function co(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=Xu(e,n),i==yn){t==4&&(e.o=4,nt(14),r=!1),Wt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==wr){e.o=4,nt(15),Wt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Wt(e.j,e.m,i,null),Pr(e,i);ho(e)&&i!=yn&&i!=wr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,nt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ai(t),t.M=!0,nt(11))):(Wt(e.j,e.m,n,"[Invalid Chunked Response]"),xt(e),we(e))}p.mb=function(){if(this.g){var e=ft(this.g),t=this.g.ja();this.C<t.length&&(zn(this),co(this,e,t),this.i&&e!=4&&We(this))}};function Xu(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?yn:(n=Number(t.substring(n,r)),isNaN(n)?wr:(r+=1,r+n>t.length?yn:(t=t.slice(r,r+n),e.C=r+n,t)))}p.cancel=function(){this.J=!0,xt(this)};function We(e){e.Y=Date.now()+e.P,fo(e,e.P)}function fo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ge(J(e.lb,e),t)}function zn(e){e.B&&(v.clearTimeout(e.B),e.B=null)}p.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Qu(this.j,this.A),this.L!=2&&(Me(),nt(17)),xt(this),this.o=2,we(this)):fo(this,this.Y-e)};function we(e){e.l.H==0||e.J||Oo(e.l,e)}function xt(e){zn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Yr(e.V),no(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Pr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Vr(n.i,e))){if(!e.K&&Vr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)vn(n),Qn(n);else break t;oi(n),nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ge(J(n.ib,n),6e3));if(1>=vo(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mt(n,11)}else if((e.K||n.g==e)&&vn(n),!Ce(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const h=l[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const c=l[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const R=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var s=r.i;s.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ni(s,s.h),s.h=null))}if(r.F){const V=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;V&&(r.Da=V,k(r.I,r.F,V))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=bo(r,r.J?r.pa:null,r.Y),o.K){Io(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(zn(a),We(a)),r.g=o}else xo(r);0<n.j.length&&Wn(n)}else l[0]!="stop"&&l[0]!="close"||Mt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mt(n,7):si(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Me(4)}catch{}}function Yu(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Mn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Ju(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Mn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function mo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Mn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ju(e),r=Yu(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var go=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ft(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ft){this.h=e.h,En(this,e.j),this.s=e.s,this.g=e.g,Tn(this,e.m),this.l=e.l;var t=e.i,n=new Oe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Yi(this,n),this.o=e.o}else e&&(t=String(e).match(go))?(this.h=!1,En(this,t[1]||"",!0),this.s=Ee(t[2]||""),this.g=Ee(t[3]||"",!0),Tn(this,t[4]),this.l=Ee(t[5]||"",!0),Yi(this,t[6]||"",!0),this.o=Ee(t[7]||"")):(this.h=!1,this.i=new Oe(null,this.h))}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Te(t,Ji,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Te(t,Ji,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Te(n,n.charAt(0)=="/"?nl:el,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Te(n,il)),e.join("")};function vt(e){return new Ft(e)}function En(e,t,n){e.j=n?Ee(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Tn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Yi(e,t,n){t instanceof Oe?(e.i=t,sl(e.i,e.h)):(n||(t=Te(t,rl)),e.i=new Oe(t,e.h))}function k(e,t,n){e.i.set(t,n)}function $n(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ee(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Te(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,tl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ji=/[#\/\?@]/g,el=/[#\?:]/g,nl=/[#\?]/g,rl=/[#\?@]/g,il=/#/g;function Oe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Nt(e){e.g||(e.g=new Map,e.h=0,e.i&&Zu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=Oe.prototype;p.add=function(e,t){Nt(this),this.i=null,e=ae(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function po(e,t){Nt(e),t=ae(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _o(e,t){return Nt(e),t=ae(e,t),e.g.has(t)}p.forEach=function(e,t){Nt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};p.ta=function(){Nt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};p.Z=function(e){Nt(this);let t=[];if(typeof e=="string")_o(this,e)&&(t=t.concat(this.g.get(ae(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return Nt(this),this.i=null,e=ae(this,e),_o(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function yo(e,t,n){po(e,t),0<n.length&&(e.i=null,e.g.set(ae(e,t),jr(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ae(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function sl(e,t){t&&!e.j&&(Nt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(po(this,r),yo(this,i,n))},e)),e.j=t}var ol=class{constructor(e,t){this.g=e,this.map=t}};function Eo(e){this.l=e||al,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var al=10;function To(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function vo(e){return e.h?1:e.g?e.g.size:0}function Vr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ni(e,t){e.g?e.g.add(t):e.h=t}function Io(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Eo.prototype.cancel=function(){if(this.i=Ao(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ao(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return jr(e.i)}var ul=class{stringify(e){return v.JSON.stringify(e,void 0)}parse(e){return v.JSON.parse(e,void 0)}};function ll(){this.g=new ul}function hl(e,t,n){const r=n||"";try{mo(e,function(i,s){let o=i;ze(i)&&(o=Hr(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function cl(e,t){const n=new Un;if(v.Image){const r=new Image;r.onload=on(un,n,r,"TestLoadImage: loaded",!0,t),r.onerror=on(un,n,r,"TestLoadImage: error",!1,t),r.onabort=on(un,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=on(un,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function un(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function He(e){this.l=e.ec||null,this.j=e.ob||!1}z(He,Zr);He.prototype.g=function(){return new Gn(this.l,this.j)};He.prototype.i=function(e){return function(){return e}}({});function Gn(e,t){j.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ri,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Gn,j);var ri=0;p=Gn.prototype;p.open=function(e,t){if(this.readyState!=ri)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Fe(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=ri};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;wo(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function wo(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Xe(this):Fe(this),this.readyState==3&&wo(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,Xe(this))};p.Ya=function(e){this.g&&(this.response=e,Xe(this))};p.ka=function(){this.g&&Xe(this)};function Xe(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Fe(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Fe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var dl=v.JSON.parse;function O(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ro,this.L=this.M=!1}z(O,j);var Ro="",fl=/^https?$/i,ml=["POST","PUT"];p=O.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ar.g(),this.C=this.u?Xi(this.u):Xi(Ar),this.g.onreadystatechange=J(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Zi(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=v.FormData&&e instanceof v.FormData,!(0<=Bs(ml,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{So(this),0<this.B&&((this.L=gl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.ua,this)):this.A=Jr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Zi(this,s)}};function gl(e){return Zt&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof Br<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function Zi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Po(e),Kn(e)}function Po(e){e.F||(e.F=!0,Q(e,"complete"),Q(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),Kn(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),O.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?Vo(this):this.kb())};p.kb=function(){Vo(this)};function Vo(e){if(e.h&&typeof Br<"u"&&(!e.C[1]||ft(e)!=4||e.da()!=2)){if(e.v&&ft(e)==4)Jr(e.La,0,e);else if(Q(e,"readystatechange"),ft(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(go)[1]||null;!i&&v.self&&v.self.location&&(i=v.self.location.protocol.slice(0,-1)),r=!fl.test(i?i.toLowerCase():"")}n=r}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var s=2<ft(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Po(e)}}finally{Kn(e)}}}}function Kn(e,t){if(e.g){So(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=r}catch{}}}function So(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function ft(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),dl(t)}};function ts(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ro:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function pl(e){const t={};e=(e.g&&2<=ft(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Ce(e[r]))continue;var n=Bu(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Mu(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Co(e){let t="";return $r(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ii(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Co(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function pe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Do(e){this.Ga=0,this.j=[],this.l=new Un,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pe("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pe("baseRetryDelayMs",5e3,e),this.hb=pe("retryDelaySeedMs",1e4,e),this.eb=pe("forwardChannelMaxRetries",2,e),this.xa=pe("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Eo(e&&e.concurrentRequestLimit),this.Ja=new ll,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=Do.prototype;p.ra=8;p.H=1;function si(e){if(ko(e),e.H==3){var t=e.W++,n=vt(e.I);if(k(n,"SID",e.K),k(n,"RID",t),k(n,"TYPE","terminate"),Ye(e,n),t=new Qe(e,e.l,t),t.L=2,t.v=$n(vt(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=Uo(t.l,null),t.g.ha(t.v)),t.G=Date.now(),We(t)}Lo(e)}function Qn(e){e.g&&(ai(e),e.g.cancel(),e.g=null)}function ko(e){Qn(e),e.u&&(v.clearTimeout(e.u),e.u=null),vn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function Wn(e){if(!To(e.i)&&!e.m){e.m=!0;var t=e.Na;ke||Zs(),Ne||(ke(),Ne=!0),Xr.add(t,e),e.C=0}}function _l(e,t){return vo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ge(J(e.Na,e,t),Fo(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Qe(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Gs(s),Ks(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=No(this,i,t),n=vt(this.I),k(n,"RID",e),k(n,"CVER",22),this.F&&k(n,"X-HTTP-Session-Id",this.F),Ye(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Co(s)))+"&"+t:this.o&&ii(n,this.o,s)),ni(this.i,i),this.bb&&k(n,"TYPE","init"),this.P?(k(n,"$req",t),k(n,"SID","null"),i.aa=!0,Rr(i,n,null)):Rr(i,n,t),this.H=2}}else this.H==3&&(e?es(this,e):this.j.length==0||To(this.i)||es(this))};function es(e,t){var n;t?n=t.m:n=e.W++;const r=vt(e.I);k(r,"SID",e.K),k(r,"RID",n),k(r,"AID",e.V),Ye(e,r),e.o&&e.s&&ii(r,e.o,e.s),n=new Qe(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=No(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ni(e.i,n),Rr(n,r,t)}function Ye(e,t){e.na&&$r(e.na,function(n,r){k(t,r,n)}),e.h&&mo({},function(n,r){k(t,r,n)})}function No(e,t,n){n=Math.min(e.j.length,n);var r=e.h?J(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const h=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{hl(h,o,"req"+l+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function xo(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ke||Zs(),Ne||(ke(),Ne=!0),Xr.add(t,e),e.A=0}}function oi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ge(J(e.Ma,e),Fo(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,Mo(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ge(J(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Qn(this),Mo(this))};function ai(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function Mo(e){e.g=new Qe(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=vt(e.wa);k(t,"RID","rpc"),k(t,"SID",e.K),k(t,"AID",e.V),k(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&k(t,"TO",e.qa),k(t,"TYPE","xmlhttp"),Ye(e,t),e.o&&e.s&&ii(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=$n(vt(t)),n.s=null,n.S=!0,lo(n,e)}p.ib=function(){this.v!=null&&(this.v=null,Qn(this),oi(this),nt(19))};function vn(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function Oo(e,t){var n=null;if(e.g==t){vn(e),ai(e),e.g=null;var r=2}else if(Vr(e.i,t))n=t.F,Io(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=qn(),Q(r,new so(r,n)),Wn(e)}else xo(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&_l(e,t)||r==2&&oi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function Fo(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Mt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=J(e.pb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||En(n,"https"),$n(n)),cl(n.toString(),r)}else nt(2);e.H=0,e.h&&e.h.za(t),Lo(e),ko(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function Lo(e){if(e.H=0,e.ma=[],e.h){const t=Ao(e.i);(t.length!=0||e.j.length!=0)&&(Gi(e.ma,t),Gi(e.ma,e.j),e.i.i.length=0,jr(e.j),e.j.length=0),e.h.ya()}}function bo(e,t,n){var r=n instanceof Ft?vt(n):new Ft(n);if(r.g!="")t&&(r.g=t+"."+r.g),Tn(r,r.m);else{var i=v.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ft(null);r&&En(s,r),t&&(s.g=t),i&&Tn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&k(r,n,t),k(r,"VER",e.ra),Ye(e,r),r}function Uo(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new O(new He({ob:!0})):new O(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function qo(){}p=qo.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function In(){if(Zt&&!(10<=Number(Du)))throw Error("Environmental error: no available transport.")}In.prototype.g=function(e,t){return new st(e,t)};function st(e,t){j.call(this),this.g=new Do(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ce(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ce(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ue(this)}z(st,j);st.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;nt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=bo(e,null,e.Y),Wn(e)};st.prototype.close=function(){si(this.g)};st.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Hr(e),e=n);t.j.push(new ol(t.fb++,e)),t.H==3&&Wn(t)};st.prototype.N=function(){this.g.h=null,delete this.j,si(this.g),delete this.g,st.$.N.call(this)};function Bo(e){ti.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Bo,ti);function jo(){ei.call(this),this.status=1}z(jo,ei);function ue(e){this.g=e}z(ue,qo);ue.prototype.Ba=function(){Q(this.g,"a")};ue.prototype.Aa=function(e){Q(this.g,new Bo(e))};ue.prototype.za=function(e){Q(this.g,new jo)};ue.prototype.ya=function(){Q(this.g,"b")};function yl(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ht,yl);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function dr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ht.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)dr(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){dr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){dr(this,r),i=0;break}}this.h=i,this.i+=t};ht.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function D(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var El={};function ui(e){return-128<=e&&128>e?Vu(e,function(t){return new D([t|0],0>t?-1:0)}):new D([e|0],0>e?-1:0)}function mt(e){if(isNaN(e)||!isFinite(e))return Ht;if(0>e)return G(mt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Sr;return new D(t,0)}function zo(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return G(zo(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mt(Math.pow(t,8)),r=Ht,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=mt(Math.pow(t,s)),r=r.R(s).add(mt(o))):(r=r.R(n),r=r.add(mt(o)))}return r}var Sr=4294967296,Ht=ui(0),Cr=ui(1),ns=ui(16777216);p=D.prototype;p.ea=function(){if(ot(this))return-G(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Sr+r)*t,t*=Sr}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Et(this))return"0";if(ot(this))return"-"+G(this).toString(e);for(var t=mt(Math.pow(e,6)),n=this,r="";;){var i=wn(n,t).g;n=An(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Et(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Et(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ot(e){return e.h==-1}p.X=function(e){return e=An(this,e),ot(e)?-1:Et(e)?0:1};function G(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new D(n,~e.h).add(Cr)}p.abs=function(){return ot(this)?G(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new D(n,n[n.length-1]&-2147483648?-1:0)};function An(e,t){return e.add(G(t))}p.R=function(e){if(Et(this)||Et(e))return Ht;if(ot(this))return ot(e)?G(this).R(G(e)):G(G(this).R(e));if(ot(e))return G(this.R(G(e)));if(0>this.X(ns)&&0>e.X(ns))return mt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,ln(n,2*r+2*i),n[2*r+2*i+1]+=s*u,ln(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ln(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ln(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new D(n,0)};function ln(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function _e(e,t){this.g=e,this.h=t}function wn(e,t){if(Et(t))throw Error("division by zero");if(Et(e))return new _e(Ht,Ht);if(ot(e))return t=wn(G(e),t),new _e(G(t.g),G(t.h));if(ot(t))return t=wn(e,G(t)),new _e(G(t.g),t.h);if(30<e.g.length){if(ot(e)||ot(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=t;0>=r.X(e);)n=rs(n),r=rs(r);var i=$t(n,1),s=$t(r,1);for(r=$t(r,2),n=$t(n,2);!Et(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=$t(r,1),n=$t(n,1)}return t=An(e,i.R(t)),new _e(i,t)}for(i=Ht;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=mt(n),o=s.R(t);ot(o)||0<o.X(e);)n-=r,s=mt(n),o=s.R(t);Et(s)&&(s=Cr),i=i.add(s),e=An(e,o)}return new _e(i,e)}p.gb=function(e){return wn(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new D(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new D(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new D(n,this.h^e.h)};function rs(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new D(n,e.h)}function $t(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new D(i,e.h)}In.prototype.createWebChannel=In.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;Bn.NO_ERROR=0;Bn.TIMEOUT=8;Bn.HTTP_ERROR=6;oo.COMPLETE="complete";ao.EventType=Ke;Ke.OPEN="a";Ke.CLOSE="b";Ke.ERROR="c";Ke.MESSAGE="d";j.prototype.listen=j.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;D.prototype.add=D.prototype.add;D.prototype.multiply=D.prototype.R;D.prototype.modulo=D.prototype.gb;D.prototype.compare=D.prototype.X;D.prototype.toNumber=D.prototype.ea;D.prototype.toString=D.prototype.toString;D.prototype.getBits=D.prototype.D;D.fromNumber=mt;D.fromString=zo;var Tl=function(){return new In},vl=function(){return qn()},fr=Bn,Il=oo,Al=qt,is={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wl=He,hn=ao,Rl=O,Pl=ht,Xt=D;const ss="@firebase/firestore";/**
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
 */class X{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
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
 */let le="10.5.2";/**
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
 */const Lt=new Eu("@firebase/firestore");function ye(){return Lt.logLevel}function y(e,...t){if(Lt.logLevel<=Rt.DEBUG){const n=t.map(li);Lt.debug(`Firestore (${le}): ${e}`,...n)}}function It(e,...t){if(Lt.logLevel<=Rt.ERROR){const n=t.map(li);Lt.error(`Firestore (${le}): ${e}`,...n)}}function te(e,...t){if(Lt.logLevel<=Rt.WARN){const n=t.map(li);Lt.warn(`Firestore (${le}): ${e}`,...n)}}function li(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function T(e="Unexpected state"){const t=`FIRESTORE (${le}) INTERNAL ASSERTION FAILED: `+e;throw It(t),new Error(t)}function x(e,t){e||T()}function w(e,t){return e}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends fu{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class $o{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Vl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class Sl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Cl{constructor(t){this.t=t,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(x(typeof r.accessToken=="string"),new $o(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return x(t===null||typeof t=="string"),new X(t)}}class Dl{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=X.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kl{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Dl(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xl{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(x(typeof n.token=="string"),this.R=n.token,new Nl(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ml(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Go{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Ml(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function C(e,t){return e<t?-1:e>t?1:0}function ee(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new q(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new q(0,0))}static max(){return new I(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Le{constructor(t,n,r){n===void 0?n=0:n>t.length&&T(),r===void 0?r=t.length-n:r>t.length-n&&T(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Le.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Le?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class N extends Le{construct(t,n,r){return new N(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new _(d.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new N(n)}static emptyPath(){return new N([])}}const Ol=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends Le{construct(t,n,r){return new K(t,n,r)}static isValidIdentifier(t){return Ol.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new _(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new _(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(n)}static emptyPath(){return new K([])}}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(N.fromString(t))}static fromName(t){return new E(N.fromString(t).popFirst(5))}static empty(){return new E(N.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&N.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return N.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new N(t.slice()))}}function Fl(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=I.fromTimestamp(r===1e9?new q(n+1,0):new q(n,r));return new St(i,E.empty(),t)}function Ll(e){return new St(e.readTime,e.key,-1)}class St{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new St(I.min(),E.empty(),-1)}static max(){return new St(I.max(),E.empty(),-1)}}function bl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:C(e.largestBatchId,t.largestBatchId))}/**
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
 */const Ul="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ql{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Je(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Ul)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):m.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):m.reject(n)}static resolve(t){return new m((n,r)=>{n(t)})}static reject(t){return new m((n,r)=>{r(t)})}static waitFor(t){return new m((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=m.resolve(!1);for(const r of t)n=n.next(i=>i?m.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new m((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(t[l]).next(h=>{o[l]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,n){return new m((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Ze(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class hi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}hi._e=-1;function Hn(e){return e==null}function Rn(e){return e===0&&1/e==-1/0}function Bl(e){return typeof e=="number"&&Number.isInteger(e)&&!Rn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function os(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function he(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ko(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class M{constructor(t,n){this.comparator=t,this.root=n||$.EMPTY}insert(t,n){return new M(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,$.BLACK,null,null))}remove(t){return new M(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cn(this.root,t,this.comparator,!0)}}class cn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ${constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??$.RED,this.left=i??$.EMPTY,this.right=s??$.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new $(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return $.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,n,r,i,s){return this}insert(t,n,r){return new $(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class W{constructor(t){this.comparator=t,this.data=new M(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new as(this.data.getIterator())}getIteratorFrom(t){return new as(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof W)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new W(this.comparator);return n.data=t,n}}class as{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(t){this.fields=t,t.sort(K.comparator)}static empty(){return new ut([])}unionWith(t){let n=new W(K.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ut(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ee(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Qo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qo("Invalid base64 string: "+s):s}}(t);return new tt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new tt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const jl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(e){if(x(!!e),typeof e=="string"){let t=0;const n=jl.exec(e);if(x(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:b(e.seconds),nanos:b(e.nanos)}}function b(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function bt(e){return typeof e=="string"?tt.fromBase64String(e):tt.fromUint8Array(e)}/**
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
 */function ci(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function di(e){const t=e.mapValue.fields.__previous_value__;return ci(t)?di(t):t}function be(e){const t=Ct(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
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
 */class zl{constructor(t,n,r,i,s,o,a,u,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class Ue{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ue("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ue&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const dn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ut(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ci(e)?4:$l(e)?9007199254740991:10:T()}function _t(e,t){if(e===t)return!0;const n=Ut(e);if(n!==Ut(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return be(e).isEqual(be(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ct(i.timestampValue),a=Ct(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return bt(i.bytesValue).isEqual(bt(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return b(i.geoPointValue.latitude)===b(s.geoPointValue.latitude)&&b(i.geoPointValue.longitude)===b(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return b(i.integerValue)===b(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=b(i.doubleValue),a=b(s.doubleValue);return o===a?Rn(o)===Rn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return ee(e.arrayValue.values||[],t.arrayValue.values||[],_t);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(os(o)!==os(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!_t(o[u],a[u])))return!1;return!0}(e,t);default:return T()}}function qe(e,t){return(e.values||[]).find(n=>_t(n,t))!==void 0}function ne(e,t){if(e===t)return 0;const n=Ut(e),r=Ut(t);if(n!==r)return C(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return C(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=b(s.integerValue||s.doubleValue),u=b(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return us(e.timestampValue,t.timestampValue);case 4:return us(be(e),be(t));case 5:return C(e.stringValue,t.stringValue);case 6:return function(s,o){const a=bt(s),u=bt(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const h=C(a[l],u[l]);if(h!==0)return h}return C(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=C(b(s.latitude),b(o.latitude));return a!==0?a:C(b(s.longitude),b(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const h=ne(a[l],u[l]);if(h)return h}return C(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===dn.mapValue&&o===dn.mapValue)return 0;if(s===dn.mapValue)return 1;if(o===dn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},h=Object.keys(l);u.sort(),h.sort();for(let c=0;c<u.length&&c<h.length;++c){const f=C(u[c],h[c]);if(f!==0)return f;const g=ne(a[u[c]],l[h[c]]);if(g!==0)return g}return C(u.length,h.length)}(e.mapValue,t.mapValue);default:throw T()}}function us(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return C(e,t);const n=Ct(e),r=Ct(t),i=C(n.seconds,r.seconds);return i!==0?i:C(n.nanos,r.nanos)}function re(e){return Dr(e)}function Dr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ct(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return bt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dr(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dr(n.fields[o])}`;return i+"}"}(e.mapValue):T()}function ls(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function kr(e){return!!e&&"integerValue"in e}function fi(e){return!!e&&"arrayValue"in e}function hs(e){return!!e&&"nullValue"in e}function cs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function mn(e){return!!e&&"mapValue"in e}function Re(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return he(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Re(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Re(e.arrayValue.values[n]);return t}return Object.assign({},e)}function $l(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class at{constructor(t){this.value=t}static empty(){return new at({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!mn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Re(n)}setAll(t){let n=K.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Re(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());mn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return _t(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];mn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){he(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new at(Re(this.value))}}function Wo(e){const t=[];return he(e.fields,(n,r)=>{const i=new K([n]);if(mn(r)){const s=Wo(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ut(t)}/**
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
 */class Y{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Y(t,0,I.min(),I.min(),I.min(),at.empty(),0)}static newFoundDocument(t,n,r,i){return new Y(t,1,n,I.min(),r,i,0)}static newNoDocument(t,n){return new Y(t,2,n,I.min(),I.min(),at.empty(),0)}static newUnknownDocument(t,n){return new Y(t,3,n,I.min(),I.min(),at.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pn{constructor(t,n){this.position=t,this.inclusive=n}}function ds(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=ne(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fs(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!_t(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Vn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Gl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Ho{}class U extends Ho{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Ql(t,n,r):n==="array-contains"?new Xl(t,r):n==="in"?new Yl(t,r):n==="not-in"?new Jl(t,r):n==="array-contains-any"?new Zl(t,r):new U(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Wl(t,r):new Hl(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ne(n,this.value)):n!==null&&Ut(this.value)===Ut(n)&&this.matchesComparison(ne(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ct extends Ho{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new ct(t,n)}matches(t){return Xo(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Xo(e){return e.op==="and"}function Yo(e){return Kl(e)&&Xo(e)}function Kl(e){for(const t of e.filters)if(t instanceof ct)return!1;return!0}function Nr(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+re(e.value);if(Yo(e))return e.filters.map(t=>Nr(t)).join(",");{const t=e.filters.map(n=>Nr(n)).join(",");return`${e.op}(${t})`}}function Jo(e,t){return e instanceof U?function(r,i){return i instanceof U&&r.op===i.op&&r.field.isEqual(i.field)&&_t(r.value,i.value)}(e,t):e instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Jo(o,i.filters[a]),!0):!1}(e,t):void T()}function Zo(e){return e instanceof U?function(n){return`${n.field.canonicalString()} ${n.op} ${re(n.value)}`}(e):e instanceof ct?function(n){return n.op.toString()+" {"+n.getFilters().map(Zo).join(" ,")+"}"}(e):"Filter"}class Ql extends U{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Wl extends U{constructor(t,n){super(t,"in",n),this.keys=ta("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Hl extends U{constructor(t,n){super(t,"not-in",n),this.keys=ta("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ta(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class Xl extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return fi(n)&&qe(n.arrayValue,this.value)}}class Yl extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&qe(this.value.arrayValue,n)}}class Jl extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!qe(this.value.arrayValue,n)}}class Zl extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!fi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qe(this.value.arrayValue,r))}}/**
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
 */class th{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function ms(e,t=null,n=[],r=[],i=null,s=null,o=null){return new th(e,t,n,r,i,s,o)}function mi(e){const t=w(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Nr(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Hn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>re(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>re(r)).join(",")),t.ce=n}return t.ce}function gi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Gl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Jo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!fs(e.startAt,t.startAt)&&fs(e.endAt,t.endAt)}function xr(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class tn{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function eh(e,t,n,r,i,s,o,a){return new tn(e,t,n,r,i,s,o,a)}function pi(e){return new tn(e)}function gs(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ea(e){return e.collectionGroup!==null}function Pe(e){const t=w(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new W(K.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new Vn(s,r))}),n.has(K.keyField().canonicalString())||t.le.push(new Vn(K.keyField(),r))}return t.le}function gt(e){const t=w(e);return t.he||(t.he=nh(t,Pe(e))),t.he}function nh(e,t){if(e.limitType==="F")return ms(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vn(i.field,s)});const n=e.endAt?new Pn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Pn(e.startAt.position,e.startAt.inclusive):null;return ms(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Mr(e,t){const n=e.filters.concat([t]);return new tn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Sn(e,t,n){return new tn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Xn(e,t){return gi(gt(e),gt(t))&&e.limitType===t.limitType}function na(e){return`${mi(gt(e))}|lt:${e.limitType}`}function Gt(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Zo(i)).join(", ")}]`),Hn(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>re(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>re(i)).join(",")),`Target(${r})`}(gt(e))}; limitType=${e.limitType})`}function Yn(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Pe(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=ds(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,Pe(r),i)||r.endAt&&!function(o,a,u){const l=ds(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,Pe(r),i))}(e,t)}function rh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ra(e){return(t,n)=>{let r=!1;for(const i of Pe(e)){const s=ih(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ih(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?ne(u,l):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
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
 */class ce{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){he(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Ko(this.inner)}size(){return this.innerSize}}/**
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
 */const sh=new M(E.comparator);function At(){return sh}const ia=new M(E.comparator);function ve(...e){let t=ia;for(const n of e)t=t.insert(n.key,n);return t}function sa(e){let t=ia;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ot(){return Ve()}function oa(){return Ve()}function Ve(){return new ce(e=>e.toString(),(e,t)=>e.isEqual(t))}const oh=new M(E.comparator),ah=new W(E.comparator);function P(...e){let t=ah;for(const n of e)t=t.add(n);return t}const uh=new W(C);function lh(){return uh}/**
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
 */function aa(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rn(t)?"-0":t}}function ua(e){return{integerValue:""+e}}function hh(e,t){return Bl(t)?ua(t):aa(e,t)}/**
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
 */class Jn{constructor(){this._=void 0}}function ch(e,t,n){return e instanceof Cn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ci(s)&&(s=di(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Be?ha(e,t):e instanceof je?ca(e,t):function(i,s){const o=la(i,s),a=ps(o)+ps(i.Ie);return kr(o)&&kr(i.Ie)?ua(a):aa(i.serializer,a)}(e,t)}function dh(e,t,n){return e instanceof Be?ha(e,t):e instanceof je?ca(e,t):n}function la(e,t){return e instanceof Dn?function(r){return kr(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Cn extends Jn{}class Be extends Jn{constructor(t){super(),this.elements=t}}function ha(e,t){const n=da(t);for(const r of e.elements)n.some(i=>_t(i,r))||n.push(r);return{arrayValue:{values:n}}}class je extends Jn{constructor(t){super(),this.elements=t}}function ca(e,t){let n=da(t);for(const r of e.elements)n=n.filter(i=>!_t(i,r));return{arrayValue:{values:n}}}class Dn extends Jn{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function ps(e){return b(e.integerValue||e.doubleValue)}function da(e){return fi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function fh(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Be&&i instanceof Be||r instanceof je&&i instanceof je?ee(r.elements,i.elements,_t):r instanceof Dn&&i instanceof Dn?_t(r.Ie,i.Ie):r instanceof Cn&&i instanceof Cn}(e.transform,t.transform)}class mh{constructor(t,n){this.version=t,this.transformResults=n}}class lt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new lt}static exists(t){return new lt(void 0,t)}static updateTime(t){return new lt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Zn{}function fa(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new _i(e.key,lt.none()):new en(e.key,e.data,lt.none());{const n=e.data,r=at.empty();let i=new W(K.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bt(e.key,r,new ut(i.toArray()),lt.none())}}function gh(e,t,n){e instanceof en?function(i,s,o){const a=i.value.clone(),u=ys(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Bt?function(i,s,o){if(!gn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ys(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ma(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Se(e,t,n,r){return e instanceof en?function(s,o,a,u){if(!gn(s.precondition,o))return a;const l=s.value.clone(),h=Es(s.fieldTransforms,u,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Bt?function(s,o,a,u){if(!gn(s.precondition,o))return a;const l=Es(s.fieldTransforms,u,o),h=o.data;return h.setAll(ma(s)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(s,o,a){return gn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function ph(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=la(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function _s(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ee(r,i,(s,o)=>fh(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class en extends Zn{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bt extends Zn{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ma(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ys(e,t,n){const r=new Map;x(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,dh(o,a,n[i]))}return r}function Es(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ch(s,o,t))}return r}class _i extends Zn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _h extends Zn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yh{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&gh(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Se(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Se(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=oa();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=fa(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&ee(this.mutations,t.mutations,(n,r)=>_s(n,r))&&ee(this.baseMutations,t.baseMutations,(n,r)=>_s(n,r))}}class yi{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){x(t.mutations.length===r.length);let i=function(){return oh}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yi(t,n,r,i)}}/**
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
 */class Eh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Th{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var L,S;function vh(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function ga(e){if(e===void 0)return It("GRPC error has no .code"),d.UNKNOWN;switch(e){case L.OK:return d.OK;case L.CANCELLED:return d.CANCELLED;case L.UNKNOWN:return d.UNKNOWN;case L.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case L.INTERNAL:return d.INTERNAL;case L.UNAVAILABLE:return d.UNAVAILABLE;case L.UNAUTHENTICATED:return d.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case L.NOT_FOUND:return d.NOT_FOUND;case L.ALREADY_EXISTS:return d.ALREADY_EXISTS;case L.PERMISSION_DENIED:return d.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case L.ABORTED:return d.ABORTED;case L.OUT_OF_RANGE:return d.OUT_OF_RANGE;case L.UNIMPLEMENTED:return d.UNIMPLEMENTED;case L.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(S=L||(L={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ih(){return new TextEncoder}/**
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
 */const Ah=new Xt([4294967295,4294967295],0);function Ts(e){const t=Ih().encode(e),n=new Pl;return n.update(t),new Uint8Array(n.digest())}function vs(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Xt([n,r],0),new Xt([i,s],0)]}class Ei{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ie(`Invalid padding: ${n}`);if(r<0)throw new Ie(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ie(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ie(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Xt.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(Xt.fromNumber(r)));return i.compare(Ah)===1&&(i=new Xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Ts(t),[r,i]=vs(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Ei(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Ts(t),[r,i]=vs(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ie extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tr{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,nn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new tr(I.min(),i,new M(C),At(),P())}}class nn{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new nn(r,n,P(),P(),P())}}/**
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
 */class pn{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class pa{constructor(t,n){this.targetId=t,this.fe=n}}class _a{constructor(t,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Is{constructor(){this.ge=0,this.pe=ws(),this.ye=tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),n=P(),r=P();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:T()}}),new nn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=ws()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class wh{constructor(t){this.Le=t,this.ke=new Map,this.qe=At(),this.Qe=As(),this.Ke=new M(C)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(xr(s))if(r===0){const o=new E(s.path);this.We(n,o,Y.newNoDocument(o,I.min()))}else x(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=bt(r).toUint8Array()}catch(u){if(u instanceof Qo)return te("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ei(o,i,s)}catch(u){return te(u instanceof Ie?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&xr(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,Y.newNoDocument(u,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=P();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ye(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new tr(t,n,this.Ke,this.qe,r);return this.qe=At(),this.Qe=As(),this.Ke=new M(C),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Is,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new W(C),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Is),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function As(){return new M(E.comparator)}function ws(){return new M(E.comparator)}const Rh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ph=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Vh=(()=>({and:"AND",or:"OR"}))();class Sh{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Or(e,t){return e.useProto3Json||Hn(t)?t:{value:t}}function kn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ya(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ch(e,t){return kn(e,t.toTimestamp())}function pt(e){return x(!!e),I.fromTimestamp(function(n){const r=Ct(n);return new q(r.seconds,r.nanos)}(e))}function Ti(e,t){return function(r){return new N(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Ea(e){const t=N.fromString(e);return x(Aa(t)),t}function Fr(e,t){return Ti(e.databaseId,t.path)}function mr(e,t){const n=Ea(t);if(n.get(1)!==e.databaseId.projectId)throw new _(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Ta(n))}function Lr(e,t){return Ti(e.databaseId,t)}function Dh(e){const t=Ea(e);return t.length===4?N.emptyPath():Ta(t)}function br(e){return new N(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ta(e){return x(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Rs(e,t,n){return{name:Fr(e,t),fields:n.value.mapValue.fields}}function kh(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,h){return l.useProto3Json?(x(h===void 0||typeof h=="string"),tt.fromBase64String(h||"")):(x(h===void 0||h instanceof Uint8Array),tt.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const h=l.code===void 0?d.UNKNOWN:ga(l.code);return new _(h,l.message||"")}(o);n=new _a(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=mr(e,r.document.name),s=pt(r.document.updateTime),o=r.document.createTime?pt(r.document.createTime):I.min(),a=new at({mapValue:{fields:r.document.fields}}),u=Y.newFoundDocument(i,s,o,a),l=r.targetIds||[],h=r.removedTargetIds||[];n=new pn(l,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=mr(e,r.document),s=r.readTime?pt(r.readTime):I.min(),o=Y.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=mr(e,r.document),s=r.removedTargetIds||[];n=new pn([],s,i,null)}else{if(!("filter"in t))return T();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Th(i,s),a=r.targetId;n=new pa(a,o)}}return n}function Nh(e,t){let n;if(t instanceof en)n={update:Rs(e,t.key,t.value)};else if(t instanceof _i)n={delete:Fr(e,t.key)};else if(t instanceof Bt)n={update:Rs(e,t.key,t.data),updateMask:Bh(t.fieldMask)};else{if(!(t instanceof _h))return T();n={verify:Fr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Cn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Be)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof je)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Dn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw T()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ch(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(e,t.precondition)),n}function xh(e,t){return e&&e.length>0?(x(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?pt(i.updateTime):pt(s);return o.isEqual(I.min())&&(o=pt(s)),new mh(o,i.transformResults||[])}(n,t))):[]}function Mh(e,t){return{documents:[Lr(e,t.path)]}}function Oh(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Lr(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Lr(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return Ia(ct.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:Kt(c.field),direction:bh(c.dir)}}(l))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Or(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Fh(e){let t=Dh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){x(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(c){const f=va(c);return f instanceof ct&&Yo(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(f=>function(R){return new Vn(Qt(R.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,Hn(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(c){const f=!!c.before,g=c.values||[];return new Pn(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const f=!c.before,g=c.values||[];return new Pn(g,f)}(n.endAt)),eh(t,i,o,s,a,"F",u,l)}function Lh(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function va(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qt(n.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qt(n.unaryFilter.field);return U.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qt(n.unaryFilter.field);return U.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qt(n.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(n){return U.create(Qt(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ct.create(n.compositeFilter.filters.map(r=>va(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return T()}}(n.compositeFilter.op))}(e):T()}function bh(e){return Rh[e]}function Uh(e){return Ph[e]}function qh(e){return Vh[e]}function Kt(e){return{fieldPath:e.canonicalString()}}function Qt(e){return K.fromServerFormat(e.fieldPath)}function Ia(e){return e instanceof U?function(n){if(n.op==="=="){if(cs(n.value))return{unaryFilter:{field:Kt(n.field),op:"IS_NAN"}};if(hs(n.value))return{unaryFilter:{field:Kt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cs(n.value))return{unaryFilter:{field:Kt(n.field),op:"IS_NOT_NAN"}};if(hs(n.value))return{unaryFilter:{field:Kt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kt(n.field),op:Uh(n.op),value:n.value}}}(e):e instanceof ct?function(n){const r=n.getFilters().map(i=>Ia(i));return r.length===1?r[0]:{compositeFilter:{op:qh(n.op),filters:r}}}(e):T()}function Bh(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Aa(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Pt{constructor(t,n,r,i,s=I.min(),o=I.min(),a=tt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Pt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class jh{constructor(t){this.ut=t}}function zh(e){const t=Fh({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Sn(t,t.limit,"L"):t}/**
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
 */class $h{constructor(){this.on=new Gh}addToCollectionParentIndex(t,n){return this.on.add(n),m.resolve()}getCollectionParents(t,n){return m.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return m.resolve()}deleteFieldIndex(t,n){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,n){return m.resolve()}getDocumentsMatchingTarget(t,n){return m.resolve(null)}getIndexType(t,n){return m.resolve(0)}getFieldIndexes(t,n){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,n){return m.resolve(St.min())}getMinOffsetFromCollectionGroup(t,n){return m.resolve(St.min())}updateCollectionGroup(t,n,r){return m.resolve()}updateIndexEntries(t,n){return m.resolve()}}class Gh{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new W(N.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new W(N.comparator)).toArray()}}/**
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
 */class ie{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new ie(0)}static Nn(){return new ie(-1)}}/**
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
 */class Kh{constructor(){this.changes=new ce(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Y.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Qh{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Wh{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Se(r.mutation,i,ut.empty(),q.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,n,r=P()){const i=Ot();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=ve();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ot();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,P()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=At();const o=Ve(),a=function(){return Ve()}();return n.forEach((u,l)=>{const h=r.get(l.key);i.has(l.key)&&(h===void 0||h.mutation instanceof Bt)?s=s.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),Se(h.mutation,l,h.mutation.getFieldMask(),q.now())):o.set(l.key,ut.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((l,h)=>o.set(l,h)),n.forEach((l,h)=>{var c;return a.set(l,new Qh(h,(c=o.get(l))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ve();let i=new M((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let h=r.get(u)||ut.empty();h=a.applyToLocalView(l,h),r.set(u,h);const c=(i.get(a.batchId)||P()).add(u);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,h=u.value,c=oa();h.forEach(f=>{if(!s.has(f)){const g=fa(n.get(f),r.get(f));g!==null&&c.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,c))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ea(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):m.resolve(Ot());let a=-1,u=s;return o.next(l=>m.forEach(l,(h,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(h)?m.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{u=u.insert(h,f)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,u,l,P())).next(h=>({batchId:a,changes:sa(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let i=ve();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=ve();return this.indexManager.getCollectionParents(t,s).next(a=>m.forEach(a,u=>{const l=function(c,f){return new tn(f,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r,i).next(h=>{h.forEach((c,f)=>{o=o.insert(c,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,l)=>{const h=l.getKey();o.get(h)===null&&(o=o.insert(h,Y.newInvalidDocument(h)))});let a=ve();return o.forEach((u,l)=>{const h=s.get(u);h!==void 0&&Se(h.mutation,l,ut.empty(),q.now()),Yn(n,l)&&(a=a.insert(u,l))}),a})}}/**
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
 */class Hh{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return m.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pt(i.createTime)}}(n)),m.resolve()}getNamedQuery(t,n){return m.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:zh(i.bundledQuery),readTime:pt(i.readTime)}}(n)),m.resolve()}}/**
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
 */class Xh{constructor(){this.overlays=new M(E.comparator),this.lr=new Map}getOverlay(t,n){return m.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ot();return m.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),m.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(t,n,r){const i=Ot(),s=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return m.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new M((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let h=s.get(l.largestBatchId);h===null&&(h=Ot(),s=s.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=Ot(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=i)););return m.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Eh(n,r));let s=this.lr.get(n);s===void 0&&(s=P(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class vi{constructor(){this.hr=new W(B.Pr),this.Ir=new W(B.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new B(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new B(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new E(new N([])),r=new B(n,t),i=new B(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new E(new N([])),r=new B(n,t),i=new B(n,t+1);let s=P();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new B(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class B{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return E.comparator(t.key,n.key)||C(t.gr,n.gr)}static Tr(t,n){return C(t.gr,n.gr)||E.comparator(t.key,n.key)}}/**
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
 */class Yh{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new W(B.Pr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yh(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new B(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,n){return m.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new B(n,0),i=new B(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new W(C);return n.forEach(i=>{const s=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new B(new E(s),0);let a=new W(C);return this.yr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.gr)),!0)},o),m.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){x(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(n.mutations,i=>{const s=new B(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new B(n,0),i=this.yr.firstAfterOrEqual(r);return m.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Jh{constructor(t){this.Cr=t,this.docs=function(){return new M(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return m.resolve(r?r.document.mutableCopy():Y.newInvalidDocument(n))}getEntries(t,n){let r=At();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Y.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=At();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:h}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||bl(Ll(h),r)<=0||(i.has(h.key)||Yn(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,n,r,i){T()}vr(t,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Zh(this)}getSize(t){return m.resolve(this.size)}}class Zh extends Kh{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),m.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class tc{constructor(t){this.persistence=t,this.Fr=new ce(n=>mi(n),gi),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Mr=0,this.Or=new vi,this.targetCount=0,this.Nr=ie.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),m.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new ie(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,m.resolve()}updateTargetData(t,n){return this.kn(n),m.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return m.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),m.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),m.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return m.resolve(r)}containsKey(t,n){return m.resolve(this.Or.containsKey(n))}}/**
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
 */class ec{constructor(t,n){this.Br={},this.overlays={},this.Lr=new hi(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new tc(this),this.indexManager=new $h,this.remoteDocumentCache=function(i){return new Jh(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new jh(n),this.Kr=new Hh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Xh,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Yh(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){y("MemoryPersistence","Starting transaction:",t);const i=new nc(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class nc extends ql{constructor(t){super(),this.currentSequenceNumber=t}}class Ii{constructor(t){this.persistence=t,this.Gr=new vi,this.zr=null}static jr(t){return new Ii(t)}get Hr(){if(this.zr)return this.zr;throw T()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),m.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),m.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const i=E.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,I.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return m.or([()=>m.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class Ai{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=P(),i=P();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ai(t,n.fromCache,r,i)}}/**
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
 */class rc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ic{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rc;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(ye()<=Rt.DEBUG&&y("QueryEngine","SDK will not create cache indexes for query:",Gt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(ye()<=Rt.DEBUG&&y("QueryEngine","Query:",Gt(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(ye()<=Rt.DEBUG&&y("QueryEngine","The SDK decides to create cache indexes for query:",Gt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,gt(n))):m.resolve())}zi(t,n){if(gs(n))return m.resolve(null);let r=gt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sn(n,null,"F"),r=gt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=P(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const l=this.Yi(n,a);return this.Zi(n,l,o,u.readTime)?this.zi(t,Sn(n,null,"F")):this.Xi(t,l,n,u)}))})))}ji(t,n,r,i){return gs(n)||i.isEqual(I.min())?m.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?m.resolve(null):(ye()<=Rt.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gt(n)),this.Xi(t,o,n,Fl(i,-1)).next(a=>a))})}Yi(t,n){let r=new W(ra(t));return n.forEach((i,s)=>{Yn(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return ye()<=Rt.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Gt(n)),this.Gi.getDocumentsMatchingQuery(t,n,St.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class sc{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new M(C),this.ns=new ce(s=>mi(s),gi),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wh(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function oc(e,t,n,r){return new sc(e,t,n,r)}async function wa(e,t){const n=w(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=P();for(const l of i){o.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}for(const l of s){a.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function ac(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,l,h){const c=l.batch,f=c.keys();let g=m.resolve();return f.forEach(R=>{g=g.next(()=>h.getEntry(u,R)).next(V=>{const A=l.docVersions.get(R);x(A!==null),V.version.compareTo(A)<0&&(c.applyToRemoteDocument(V,l),V.isValidDocument()&&(V.setReadTime(l.commitVersion),h.addEntry(V)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,c))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=P();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ra(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function uc(e,t){const n=w(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((h,c)=>{const f=i.get(c);if(!f)return;a.push(n.qr.removeMatchingKeys(s,h.removedDocuments,c).next(()=>n.qr.addMatchingKeys(s,h.addedDocuments,c)));let g=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(c)!==null?g=g.withResumeToken(tt.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(c,g),function(V,A,F){return V.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(f,g,h)&&a.push(n.qr.updateTargetData(s,g))});let u=At(),l=P();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(lc(s,o,t.documentUpdates).next(h=>{u=h.us,l=h.cs})),!r.isEqual(I.min())){const h=n.qr.getLastRemoteSnapshotVersion(s).next(c=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.ts=i,s))}function lc(e,t,n){let r=P(),i=P();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=At();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{us:o,cs:i}})}function hc(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function cc(e,t){const n=w(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Pt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function Ur(e,t,n){const r=w(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ze(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function Ps(e,t,n){const r=w(e);let i=I.min(),s=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,h){const c=w(u),f=c.ns.get(h);return f!==void 0?m.resolve(c.ts.get(f)):c.qr.getTargetData(l,h)}(r,o,gt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?i:I.min(),n?s:P())).next(a=>(dc(r,rh(t),a),{documents:a,ls:s})))}function dc(e,t,n){let r=e.rs.get(t)||I.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.rs.set(t,r)}class Vs{constructor(){this.activeTargetIds=lh()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fc{constructor(){this.eo=new Vs,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Vs,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class mc{ro(t){}shutdown(){}}/**
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
 */class Ss{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fn=null;function gr(){return fn===null?fn=function(){return 268435456+Math.round(2147483648*Math.random())}():fn++,"0x"+fn.toString(16)}/**
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
 */const gc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class pc{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
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
 */const H="WebChannelConnection";class _c extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=gr(),u=this.So(n,r);y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,s,o),this.Do(n,u,l,i).then(h=>(y("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw te("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+le}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=gc[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=gr();return new Promise((o,a)=>{const u=new Rl;u.setWithCredentials(!0),u.listenOnce(Il.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case fr.NO_ERROR:const h=u.getResponseJson();y(H,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case fr.TIMEOUT:y(H,`RPC '${t}' ${s} timed out`),a(new _(d.DEADLINE_EXCEEDED,"Request time out"));break;case fr.HTTP_ERROR:const c=u.getStatus();if(y(H,`RPC '${t}' ${s} failed with status:`,c,"response text:",u.getResponseText()),c>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const R=function(A){const F=A.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(F)>=0?F:d.UNKNOWN}(g.status);a(new _(R,g.message))}else a(new _(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new _(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y(H,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);y(H,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}vo(t,n,r){const i=gr(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Tl(),a=vl(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new wl({})),this.bo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");y(H,`Creating RPC '${t}' stream ${i}: ${h}`,u);const c=o.createWebChannel(h,u);let f=!1,g=!1;const R=new pc({co:A=>{g?y(H,`Not sending because RPC '${t}' stream ${i} is closed:`,A):(f||(y(H,`Opening RPC '${t}' stream ${i} transport.`),c.open(),f=!0),y(H,`RPC '${t}' stream ${i} sending:`,A),c.send(A))},lo:()=>c.close()}),V=(A,F,et)=>{A.listen(F,it=>{try{et(it)}catch(yt){setTimeout(()=>{throw yt},0)}})};return V(c,hn.EventType.OPEN,()=>{g||y(H,`RPC '${t}' stream ${i} transport opened.`)}),V(c,hn.EventType.CLOSE,()=>{g||(g=!0,y(H,`RPC '${t}' stream ${i} transport closed`),R.Ro())}),V(c,hn.EventType.ERROR,A=>{g||(g=!0,te(H,`RPC '${t}' stream ${i} transport errored:`,A),R.Ro(new _(d.UNAVAILABLE,"The operation could not be completed")))}),V(c,hn.EventType.MESSAGE,A=>{var F;if(!g){const et=A.data[0];x(!!et);const it=et,yt=it.error||((F=it[0])===null||F===void 0?void 0:F.error);if(yt){y(H,`RPC '${t}' stream ${i} received error:`,yt);const me=yt.status;let ge=function(hu){const zi=L[hu];if(zi!==void 0)return ga(zi)}(me),ji=yt.message;ge===void 0&&(ge=d.INTERNAL,ji="Unknown error status: "+me+" with message "+yt.message),g=!0,R.Ro(new _(ge,ji)),c.close()}else y(H,`RPC '${t}' stream ${i} received:`,et),R.Vo(et)}}),V(a,Al.STAT_EVENT,A=>{A.stat===is.PROXY?y(H,`RPC '${t}' stream ${i} detected buffering proxy`):A.stat===is.NOPROXY&&y(H,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.Ao()},0),R}}function pr(){return typeof document<"u"?document:null}/**
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
 */function er(e){return new Sh(e,!0)}/**
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
 */class Pa{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class Va{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Pa(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new _(d.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yc extends Va{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=kh(this.serializer,t),r=function(s){if(!("targetChange"in s))return I.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?pt(o.readTime):I.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=br(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=xr(u)?{documents:Mh(s,u)}:{query:Oh(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ya(s,o.resumeToken);const l=Or(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=kn(s,o.snapshotVersion.toTimestamp());const l=Or(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=Lh(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=br(this.serializer),n.removeTarget=t,this.e_(n)}}class Ec extends Va{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(x(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=xh(t.writeResults,t.commitTime),r=pt(t.commitTime);return this.listener.I_(r,n)}return x(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=br(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Nh(this.serializer,r))};this.e_(n)}}/**
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
 */class Tc extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(d.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(d.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class vc{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(It(n),this.f_=!1):y("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class Ic{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{jt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=w(u);l.C_.add(4),await rn(l),l.M_.set("Unknown"),l.C_.delete(4),await nr(l)}(this))})}),this.M_=new vc(r,i)}}async function nr(e){if(jt(e))for(const t of e.v_)await t(!0)}async function rn(e){for(const t of e.v_)await t(!1)}function Sa(e,t){const n=w(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),Pi(n)?Ri(n):de(n).Ho()&&wi(n,t))}function Ca(e,t){const n=w(e),r=de(n);n.D_.delete(t),r.Ho()&&Da(n,t),n.D_.size===0&&(r.Ho()?r.Zo():jt(n)&&n.M_.set("Unknown"))}function wi(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}de(e).u_(t)}function Da(e,t){e.x_.Oe(t),de(e).c_(t)}function Ri(e){e.x_=new wh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),de(e).start(),e.M_.g_()}function Pi(e){return jt(e)&&!de(e).jo()&&e.D_.size>0}function jt(e){return w(e).C_.size===0}function ka(e){e.x_=void 0}async function Ac(e){e.D_.forEach((t,n)=>{wi(e,t)})}async function wc(e,t){ka(e),Pi(e)?(e.M_.w_(t),Ri(e)):e.M_.set("Unknown")}async function Rc(e,t,n){if(e.M_.set("Online"),t instanceof _a&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Nn(e,r)}else if(t instanceof pn?e.x_.$e(t):t instanceof pa?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(I.min()))try{const r=await Ra(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.D_.get(l);h&&s.D_.set(l,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const h=s.D_.get(u);if(!h)return;s.D_.set(u,h.withResumeToken(tt.EMPTY_BYTE_STRING,h.snapshotVersion)),Da(s,u);const c=new Pt(h.target,u,l,h.sequenceNumber);wi(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await Nn(e,r)}}async function Nn(e,t,n){if(!Ze(t))throw t;e.C_.add(1),await rn(e),e.M_.set("Offline"),n||(n=()=>Ra(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await nr(e)})}function Na(e,t){return t().catch(n=>Nn(e,n,t))}async function rr(e){const t=w(e),n=Dt(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;Pc(t);)try{const i=await hc(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,Vc(t,i)}catch(i){await Nn(t,i)}xa(t)&&Ma(t)}function Pc(e){return jt(e)&&e.b_.length<10}function Vc(e,t){e.b_.push(t);const n=Dt(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function xa(e){return jt(e)&&!Dt(e).jo()&&e.b_.length>0}function Ma(e){Dt(e).start()}async function Sc(e){Dt(e).E_()}async function Cc(e){const t=Dt(e);for(const n of e.b_)t.P_(n.mutations)}async function Dc(e,t,n){const r=e.b_.shift(),i=yi.from(r,t,n);await Na(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await rr(e)}async function kc(e,t){t&&Dt(e).h_&&await async function(r,i){if(function(o){return vh(o)&&o!==d.ABORTED}(i.code)){const s=r.b_.shift();Dt(r).Yo(),await Na(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await rr(r)}}(e,t),xa(e)&&Ma(e)}async function Cs(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=jt(n);n.C_.add(3),await rn(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await nr(n)}async function Nc(e,t){const n=w(e);t?(n.C_.delete(2),await nr(n)):t||(n.C_.add(2),await rn(n),n.M_.set("Unknown"))}function de(e){return e.O_||(e.O_=function(n,r,i){const s=w(n);return s.A_(),new yc(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:Ac.bind(null,e),Io:wc.bind(null,e),a_:Rc.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),Pi(e)?Ri(e):e.M_.set("Unknown")):(await e.O_.stop(),ka(e))})),e.O_}function Dt(e){return e.N_||(e.N_=function(n,r,i){const s=w(n);return s.A_(),new Ec(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:Sc.bind(null,e),Io:kc.bind(null,e),T_:Cc.bind(null,e),I_:Dc.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await rr(e)):(await e.N_.stop(),e.b_.length>0&&(y("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
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
 */class Vi{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Vi(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Si(e,t){if(It("AsyncQueue",`${t}: ${e}`),Ze(e))return new _(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Yt{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=ve(),this.sortedSet=new M(this.comparator)}static emptySet(t){return new Yt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Yt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Yt;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Ds{constructor(){this.B_=new M(E.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):T():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class se{constructor(t,n,r,i,s,o,a,u,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new se(t,n,Yt.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xc{constructor(){this.k_=void 0,this.listeners=[]}}class Mc{constructor(){this.queries=new ce(t=>na(t),Xn),this.onlineState="Unknown",this.q_=new Set}}async function Oa(e,t){const n=w(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new xc),i)try{s.k_=await n.onListen(r)}catch(o){const a=Si(o,`Initialization of query '${Gt(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&Ci(n)}async function Fa(e,t){const n=w(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Oc(e,t){const n=w(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Ci(n)}function Fc(e,t,n){const r=w(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Ci(e){e.q_.forEach(t=>{t.next()})}class La{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new se(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
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
 */class ba{constructor(t){this.key=t}}class Ua{constructor(t){this.key=t}}class Lc{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=P(),this.mutatedKeys=P(),this._a=ra(t),this.aa=new Yt(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new Ds,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,c)=>{const f=i.get(h),g=Yn(this.query,c)?c:null,R=!!f&&this.mutatedKeys.has(f.key),V=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;f&&g?f.data.isEqual(g.data)?R!==V&&(r.track({type:3,doc:g}),A=!0):this.ha(f,g)||(r.track({type:2,doc:g}),A=!0,(u&&this._a(g,u)>0||l&&this._a(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),A=!0):f&&!g&&(r.track({type:1,doc:f}),A=!0,(u||l)&&(a=!0)),A&&(g?(o=o.add(g),s=V?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((l,h)=>function(f,g){const R=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return R(f)-R(g)}(l.type,h.type)||this._a(l.doc,h.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,s.length!==0||u?{snapshot:new se(this.query,t.aa,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Ds,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=P(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new Ua(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new ba(r))}),n}da(t){this.ia=t.ls,this.oa=P();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return se.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class bc{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Uc{constructor(t){this.key=t,this.Ra=!1}}class qc{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ce(a=>na(a),Xn),this.fa=new Map,this.ga=new Set,this.pa=new M(E.comparator),this.ya=new Map,this.wa=new vi,this.Sa={},this.ba=new Map,this.Da=ie.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Bc(e,t){const n=Yc(e);let r,i;const s=n.ma.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await cc(n.localStore,gt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await jc(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Sa(n.remoteStore,o)}return i}async function jc(e,t,n,r,i){e.va=(c,f,g)=>async function(V,A,F,et){let it=A.view.ca(F);it.Zi&&(it=await Ps(V.localStore,A.query,!1).then(({documents:ge})=>A.view.ca(ge,it)));const yt=et&&et.targetChanges.get(A.targetId),me=A.view.applyChanges(it,V.isPrimaryClient,yt);return Ns(V,A.targetId,me.Ta),me.snapshot}(e,c,f,g);const s=await Ps(e.localStore,t,!0),o=new Lc(t,s.ls),a=o.ca(s.documents),u=nn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),l=o.applyChanges(a,e.isPrimaryClient,u);Ns(e,n,l.Ta);const h=new bc(t,n,o);return e.ma.set(t,h),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),l.snapshot}async function zc(e,t){const n=w(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Xn(s,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ur(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ca(n.remoteStore,r.targetId),qr(n,r.targetId)}).catch(Je)):(qr(n,r.targetId),await Ur(n.localStore,r.targetId,!0))}async function $c(e,t,n){const r=Jc(e);try{const i=await function(o,a){const u=w(o),l=q.now(),h=a.reduce((g,R)=>g.add(R.key),P());let c,f;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=At(),V=P();return u.ss.getEntries(g,h).next(A=>{R=A,R.forEach((F,et)=>{et.isValidDocument()||(V=V.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,R)).next(A=>{c=A;const F=[];for(const et of a){const it=ph(et,c.get(et.key).overlayedDocument);it!=null&&F.push(new Bt(et.key,it,Wo(it.value.mapValue),lt.exists(!0)))}return u.mutationQueue.addMutationBatch(g,l,F,a)}).next(A=>{f=A;const F=A.applyToLocalDocumentSet(c,V);return u.documentOverlayCache.saveOverlays(g,A.batchId,F)})}).then(()=>({batchId:f.batchId,changes:sa(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.Sa[o.currentUser.toKey()];l||(l=new M(C)),l=l.insert(a,u),o.Sa[o.currentUser.toKey()]=l}(r,i.batchId,n),await sn(r,i.changes),await rr(r.remoteStore)}catch(i){const s=Si(i,"Failed to persist write");n.reject(s)}}async function qa(e,t){const n=w(e);try{const r=await uc(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(x(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?x(o.Ra):i.removedDocuments.size>0&&(x(o.Ra),o.Ra=!1))}),await sn(n,r,t)}catch(r){await Je(r)}}function ks(e,t,n){const r=w(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=w(o);u.onlineState=a;let l=!1;u.queries.forEach((h,c)=>{for(const f of c.listeners)f.Q_(a)&&(l=!0)}),l&&Ci(u)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Gc(e,t,n){const r=w(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new M(E.comparator);o=o.insert(s,Y.newNoDocument(s,I.min()));const a=P().add(s),u=new tr(I.min(),new Map,new M(C),o,a);await qa(r,u),r.pa=r.pa.remove(s),r.ya.delete(t),Di(r)}else await Ur(r.localStore,t,!1).then(()=>qr(r,t,n)).catch(Je)}async function Kc(e,t){const n=w(e),r=t.batch.batchId;try{const i=await ac(n.localStore,t);ja(n,r,null),Ba(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sn(n,i)}catch(i){await Je(i)}}async function Qc(e,t,n){const r=w(e);try{const i=await function(o,a){const u=w(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return u.mutationQueue.lookupMutationBatch(l,a).next(c=>(x(c!==null),h=c.keys(),u.mutationQueue.removeMutationBatch(l,c))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>u.localDocuments.getDocuments(l,h))})}(r.localStore,t);ja(r,t,n),Ba(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await sn(r,i)}catch(i){await Je(i)}}function Ba(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function ja(e,t,n){const r=w(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function qr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||za(e,r)})}function za(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(Ca(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),Di(e))}function Ns(e,t,n){for(const r of n)r instanceof ba?(e.wa.addReference(r.key,t),Wc(e,r)):r instanceof Ua?(y("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||za(e,r.key)):T()}function Wc(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(y("SyncEngine","New document in limbo: "+n),e.ga.add(r),Di(e))}function Di(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new E(N.fromString(t)),r=e.Da.next();e.ya.set(r,new Uc(n)),e.pa=e.pa.insert(n,r),Sa(e.remoteStore,new Pt(gt(pi(n.path)),r,"TargetPurposeLimboResolution",hi._e))}}async function sn(e,t,n){const r=w(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const h=Ai.Qi(u.targetId,l);s.push(h)}}))}),await Promise.all(o),r.Va.a_(i),await async function(u,l){const h=w(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>m.forEach(l,f=>m.forEach(f.ki,g=>h.persistence.referenceDelegate.addReference(c,f.targetId,g)).next(()=>m.forEach(f.qi,g=>h.persistence.referenceDelegate.removeReference(c,f.targetId,g)))))}catch(c){if(!Ze(c))throw c;y("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const f=c.targetId;if(!c.fromCache){const g=h.ts.get(f),R=g.snapshotVersion,V=g.withLastLimboFreeSnapshotVersion(R);h.ts=h.ts.insert(f,V)}}}(r.localStore,s))}async function Hc(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const r=await wa(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(u=>{u.reject(new _(d.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await sn(n,r._s)}}function Xc(e,t){const n=w(e),r=n.ya.get(t);if(r&&r.Ra)return P().add(r.key);{let i=P();const s=n.fa.get(t);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function Yc(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=qa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Gc.bind(null,t),t.Va.a_=Oc.bind(null,t.eventManager),t.Va.Fa=Fc.bind(null,t.eventManager),t}function Jc(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Kc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qc.bind(null,t),t}class xs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=er(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return oc(this.persistence,new ic,t.initialUser,this.serializer)}createPersistence(t){return new ec(Ii.jr,this.serializer)}createSharedClientState(t){return new fc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zc{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ks(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hc.bind(null,this.syncEngine),await Nc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Mc}()}createDatastore(t){const n=er(t.databaseInfo.databaseId),r=function(s){return new _c(s)}(t.databaseInfo);return function(s,o,a,u){return new Tc(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Ic(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ks(this.syncEngine,n,0),function(){return Ss.D()?new Ss:new mc}())}createSyncEngine(t,n){return function(i,s,o,a,u,l,h){const c=new qc(i,s,o,a,u,l);return h&&(c.Ca=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=w(n);y("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await rn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class $a{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):It("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class td{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=X.UNAUTHENTICATED,this.clientId=Go.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Si(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function _r(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wa(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ms(e,t){e.asyncQueue.verifyOperationInProgress();const n=await nd(e);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Cs(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Cs(t.remoteStore,s)),e._onlineComponents=t}function ed(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function nd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await _r(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!ed(n))throw n;te("Error using user provided cache. Falling back to memory cache: "+n),await _r(e,new xs)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await _r(e,new xs);return e._offlineComponents}async function Ga(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await Ms(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await Ms(e,new Zc))),e._onlineComponents}function rd(e){return Ga(e).then(t=>t.syncEngine)}async function Ka(e){const t=await Ga(e),n=t.eventManager;return n.onListen=Bc.bind(null,t.syncEngine),n.onUnlisten=zc.bind(null,t.syncEngine),n}function id(e,t,n={}){const r=new Tt;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const h=new $a({next:f=>{o.enqueueAndForget(()=>Fa(s,c));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new _(d.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&u&&u.source==="server"?l.reject(new _(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),c=new La(pi(a.path),h,{includeMetadataChanges:!0,J_:!0});return Oa(s,c)}(await Ka(e),e.asyncQueue,t,n,r)),r.promise}function sd(e,t,n={}){const r=new Tt;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const h=new $a({next:f=>{o.enqueueAndForget(()=>Fa(s,c)),f.fromCache&&u.source==="server"?l.reject(new _(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),c=new La(a,h,{includeMetadataChanges:!0,J_:!0});return Oa(s,c)}(await Ka(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function Qa(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Os=new Map;/**
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
 */function Wa(e,t,n){if(!n)throw new _(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function od(e,t,n,r){if(t===!0&&r===!0)throw new _(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fs(e){if(!E.isDocumentKey(e))throw new _(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ls(e){if(E.isDocumentKey(e))throw new _(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ir(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function wt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ir(e);throw new _(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ad(e,t){if(t<=0)throw new _(d.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
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
 */class bs{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}od("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qa((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class sr{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bs(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vl;switch(r.type){case"firstParty":return new kl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Os.get(n);r&&(y("ComponentProvider","Removing Datastore"),Os.delete(n),r.terminate())}(this),Promise.resolve()}}function ud(e,t,n,r={}){var i;const s=(e=wt(e,sr))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&te("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=X.MOCK_USER;else{a=_u(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new _(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new X(l)}e._authCredentials=new Sl(new $o(a,u))}}/**
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
 */class zt{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zt(this.firestore,t,this._query)}}class rt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rt(this.firestore,t,this._key)}}class Vt extends zt{constructor(t,n,r){super(t,n,pi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rt(this.firestore,null,new E(t))}withConverter(t){return new Vt(this.firestore,t,this._path)}}function Cd(e,t,...n){if(e=Jt(e),Wa("collection","path",t),e instanceof sr){const r=N.fromString(t,...n);return Ls(r),new Vt(e,null,r)}{if(!(e instanceof rt||e instanceof Vt))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(N.fromString(t,...n));return Ls(r),new Vt(e.firestore,null,r)}}function ld(e,t,...n){if(e=Jt(e),arguments.length===1&&(t=Go.newId()),Wa("doc","path",t),e instanceof sr){const r=N.fromString(t,...n);return Fs(r),new rt(e,null,new E(r))}{if(!(e instanceof rt||e instanceof Vt))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(N.fromString(t,...n));return Fs(r),new rt(e.firestore,e instanceof Vt?e.converter:null,new E(r))}}/**
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
 */class hd{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Pa(this,"async_queue_retry"),this.iu=()=>{const n=pr();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=pr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=pr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Tt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Ze(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw It("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=Vi.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&T()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class fe extends sr{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new hd}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ha(this),this._firestoreClient.terminate()}}function Dd(e,t){const n=typeof e=="object"?e:mu(),r=typeof e=="string"?e:t||"(default)",i=gu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=pu("firestore");s&&ud(i,...s)}return i}function ki(e){return e._firestoreClient||Ha(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ha(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,l,h){return new zl(a,u,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Qa(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new td(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class oe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new oe(tt.fromBase64String(t))}catch(n){throw new _(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new oe(tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ni{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Xa{constructor(t){this._methodName=t}}/**
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
 */class xi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
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
 */const cd=/^__.*__$/;class dd{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Bt(t,this.data,this.fieldMask,n,this.fieldTransforms):new en(t,this.data,n,this.fieldTransforms)}}function Ya(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Mi{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Mi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return xn(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(Ya(this.Iu)&&cd.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class fd{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||er(t)}pu(t,n,r,i=!1){return new Mi({Iu:t,methodName:n,gu:r,path:K.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oi(e){const t=e._freezeSettings(),n=er(e._databaseId);return new fd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ja(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);eu("Data must be an object, but it was:",o,r);const a=Za(r,o);let u,l;if(s.merge)u=new ut(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const c of s.mergeFields){const f=gd(t,c,n);if(!o.contains(f))throw new _(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);_d(h,f)||h.push(f)}u=new ut(h),l=o.fieldTransforms.filter(c=>u.covers(c.field))}else u=null,l=o.fieldTransforms;return new dd(new at(a),u,l)}function md(e,t,n,r=!1){return Fi(n,e.pu(r?4:3,t))}function Fi(e,t){if(tu(e=Jt(e)))return eu("Unsupported field value:",t,e),Za(e,t);if(e instanceof Xa)return function(r,i){if(!Ya(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Fi(a,i.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=q.fromDate(r);return{timestampValue:kn(i.serializer,s)}}if(r instanceof q){const s=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kn(i.serializer,s)}}if(r instanceof xi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof oe)return{bytesValue:ya(i.serializer,r._byteString)};if(r instanceof rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ti(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${ir(r)}`)}(e,t)}function Za(e,t){const n={};return Ko(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):he(e,(r,i)=>{const s=Fi(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof xi||e instanceof oe||e instanceof rt||e instanceof Xa)}function eu(e,t,n){if(!tu(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ir(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function gd(e,t,n){if((t=Jt(t))instanceof Ni)return t._internalPath;if(typeof t=="string")return nu(e,t);throw xn("Field path arguments must be of type string or ",e,!1,void 0,n)}const pd=new RegExp("[~\\*/\\[\\]]");function nu(e,t,n){if(t.search(pd)>=0)throw xn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ni(...t.split("."))._internalPath}catch{throw xn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function xn(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new _(d.INVALID_ARGUMENT,a+e+u)}function _d(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class ru{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yd extends ru{data(){return super.data()}}function iu(e,t){return typeof t=="string"?nu(e,t):t instanceof Ni?t._internalPath:t._delegate._internalPath}/**
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
 */function Ed(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new _(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Li{}class su extends Li{}function kd(e,t,...n){let r=[];t instanceof Li&&r.push(t),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ui).length,a=s.filter(u=>u instanceof bi).length;if(o>1||o>0&&a>0)throw new _(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class bi extends su{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new bi(t,n,r)}_apply(t){const n=this._parse(t);return ou(t._query,n),new zt(t.firestore,t.converter,Mr(t._query,n))}_parse(t){const n=Oi(t.firestore);return function(s,o,a,u,l,h,c){let f;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new _(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){qs(c,h);const g=[];for(const R of c)g.push(Us(u,s,R));f={arrayValue:{values:g}}}else f=Us(u,s,c)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||qs(c,h),f=md(a,o,c,h==="in"||h==="not-in");return U.create(l,h,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Ui extends Li{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ui(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ct.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)ou(o,u),o=Mr(o,u)}(t._query,n),new zt(t.firestore,t.converter,Mr(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qi extends su{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new qi(t,n,r)}_apply(t){return new zt(t.firestore,t.converter,Sn(t._query,this._limit,this._limitType))}}function Nd(e){return ad("limit",e),qi._create("limit",e,"F")}function Us(e,t,n){if(typeof(n=Jt(n))=="string"){if(n==="")throw new _(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ea(t)&&n.indexOf("/")!==-1)throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(N.fromString(n));if(!E.isDocumentKey(r))throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ls(e,new E(r))}if(n instanceof rt)return ls(e,n._key);throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ir(n)}.`)}function qs(e,t){if(!Array.isArray(e)||e.length===0)throw new _(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ou(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new _(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Td{convertValue(t,n="none"){switch(Ut(t)){case 0:return null;case 1:return t.booleanValue;case 2:return b(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return he(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new xi(b(t.latitude),b(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=di(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(be(t));default:return null}}convertTimestamp(t){const n=Ct(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=N.fromString(t);x(Aa(r));const i=new Ue(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(n)||It(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function au(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Ae{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uu extends ru{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new _n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(iu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _n extends uu{data(t={}){return super.data(t)}}class vd{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ae(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new _n(this._firestore,this._userDataWriter,r.key,r,new Ae(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new _n(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ae(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new _n(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ae(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,h=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Id(a.type),doc:u,oldIndex:l,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Id(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
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
 */function xd(e){e=wt(e,rt);const t=wt(e.firestore,fe);return id(ki(t),e._key).then(n=>Ad(t,e,n))}class lu extends Td{constructor(t){super(),this.firestore=t}convertBytes(t){return new oe(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new rt(this.firestore,null,n)}}function Md(e){e=wt(e,zt);const t=wt(e.firestore,fe),n=ki(t),r=new lu(t);return Ed(e._query),sd(n,e._query).then(i=>new vd(t,r,e,i))}function Od(e,t,n){e=wt(e,rt);const r=wt(e.firestore,fe),i=au(e.converter,t,n);return Bi(r,[Ja(Oi(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,lt.none())])}function Fd(e){return Bi(wt(e.firestore,fe),[new _i(e._key,lt.none())])}function Ld(e,t){const n=wt(e.firestore,fe),r=ld(e),i=au(e.converter,t);return Bi(n,[Ja(Oi(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,lt.exists(!1))]).then(()=>r)}function Bi(e,t){return function(r,i){const s=new Tt;return r.asyncQueue.enqueueAndForget(async()=>$c(await rd(r),i,s)),s.promise}(ki(e),t)}function Ad(e,t,n){const r=n.docs.get(t._key),i=new lu(e);return new uu(e,i,t._key,r,new Ae(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){le=i})(yu),cu(new du("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new fe(new Cl(r.getProvider("auth-internal")),new xl(r.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new _(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ue(l.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),$i(ss,"4.3.2",t),$i(ss,"4.3.2","esm2017")})();export{Ld as a,Fd as b,Cd as c,ld as d,Md as e,xd as f,Dd as g,Nd as l,kd as q,Od as s};
