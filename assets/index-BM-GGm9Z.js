(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Kn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const te={},bt=[],Ue=()=>{},Vs=()=>!1,un=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Wn=e=>e.startsWith("onUpdate:"),ae=Object.assign,Vn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Zr=Object.prototype.hasOwnProperty,J=(e,t)=>Zr.call(e,t),H=Array.isArray,yt=e=>Ut(e)==="[object Map]",Gs=e=>Ut(e)==="[object Set]",_s=e=>Ut(e)==="[object Date]",k=e=>typeof e=="function",le=e=>typeof e=="string",Ie=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Js=e=>(Q(e)||k(e))&&k(e.then)&&k(e.catch),zs=Object.prototype.toString,Ut=e=>zs.call(e),ei=e=>Ut(e).slice(8,-1),qs=e=>Ut(e)==="[object Object]",Gn=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,At=Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),an=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ti=/-\w/g,it=an(e=>e.replace(ti,t=>t.slice(1).toUpperCase())),ni=/\B([A-Z])/g,_t=an(e=>e.replace(ni,"-$1").toLowerCase()),Ys=an(e=>e.charAt(0).toUpperCase()+e.slice(1)),yn=an(e=>e?`on${Ys(e)}`:""),rt=(e,t)=>!Object.is(e,t),vn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Qs=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},si=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ds;const hn=()=>ds||(ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _n(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=le(s)?oi(s):_n(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(le(e)||Q(e))return e}const ri=/;(?![^(]*\))/g,ii=/:([^]+)/,li=/\/\*[^]*?\*\//g;function oi(e){const t={};return e.replace(li,"").split(ri).forEach(n=>{if(n){const s=n.split(ii);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Jn(e){let t="";if(le(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const s=Jn(e[n]);s&&(t+=s+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const fi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ci=Kn(fi);function Xs(e){return!!e||e===""}function ui(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=zn(e[s],t[s]);return n}function zn(e,t){if(e===t)return!0;let n=_s(e),s=_s(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=Ie(e),s=Ie(t),n||s)return e===t;if(n=H(e),s=H(t),n||s)return n&&s?ui(e,t):!1;if(n=Q(e),s=Q(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const l in e){const f=e.hasOwnProperty(l),u=t.hasOwnProperty(l);if(f&&!u||!f&&u||!zn(e[l],t[l]))return!1}}return String(e)===String(t)}const Zs=e=>!!(e&&e.__v_isRef===!0),Ke=e=>le(e)?e:e==null?"":H(e)||Q(e)&&(e.toString===zs||!k(e.toString))?Zs(e)?Ke(e.value):JSON.stringify(e,er,2):String(e),er=(e,t)=>Zs(t)?er(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Sn(s,i)+" =>"]=r,n),{})}:Gs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Sn(n))}:Ie(t)?Sn(t):Q(t)&&!H(t)&&!qs(t)?String(t):t,Sn=(e,t="")=>{var n;return Ie(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let ve;class ai{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ve,!t&&ve&&(this.index=(ve.scopes||(ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ve;try{return ve=this,t()}finally{ve=n}}}on(){++this._on===1&&(this.prevScope=ve,ve=this)}off(){this._on>0&&--this._on===0&&(ve=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function hi(){return ve}let ee;const Rn=new WeakSet;class tr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ve&&ve.active&&ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rn.has(this)&&(Rn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ps(this),rr(this);const t=ee,n=Le;ee=this,Le=!0;try{return this.fn()}finally{ir(this),ee=t,Le=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qn(t);this.deps=this.depsTail=void 0,ps(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fn(this)&&this.run()}get dirty(){return Fn(this)}}let nr=0,Mt,Ft;function sr(e,t=!1){if(e.flags|=8,t){e.next=Ft,Ft=e;return}e.next=Mt,Mt=e}function qn(){nr++}function Yn(){if(--nr>0)return;if(Ft){let t=Ft;for(Ft=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Mt;){let t=Mt;for(Mt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function rr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ir(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Qn(s),_i(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Fn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(lr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function lr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dt)||(e.globalVersion=Dt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fn(e))))return;e.flags|=2;const t=e.dep,n=ee,s=Le;ee=e,Le=!0;try{rr(e);const r=e.fn(e._value);(t.version===0||rt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ee=n,Le=s,ir(e),e.flags&=-3}}function Qn(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qn(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function _i(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Le=!0;const or=[];function Qe(){or.push(Le),Le=!1}function Xe(){const e=or.pop();Le=e===void 0?!0:e}function ps(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ee;ee=void 0;try{t()}finally{ee=n}}}let Dt=0;class di{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ee||!Le||ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ee)n=this.activeLink=new di(ee,this),ee.deps?(n.prevDep=ee.depsTail,ee.depsTail.nextDep=n,ee.depsTail=n):ee.deps=ee.depsTail=n,fr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ee.depsTail,n.nextDep=void 0,ee.depsTail.nextDep=n,ee.depsTail=n,ee.deps===n&&(ee.deps=s)}return n}trigger(t){this.version++,Dt++,this.notify(t)}notify(t){qn();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Yn()}}}function fr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)fr(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Pn=new WeakMap,ut=Symbol(""),On=Symbol(""),jt=Symbol("");function fe(e,t,n){if(Le&&ee){let s=Pn.get(e);s||Pn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Xn),r.map=s,r.key=n),r.track()}}function Ye(e,t,n,s,r,i){const l=Pn.get(e);if(!l){Dt++;return}const f=u=>{u&&u.trigger()};if(qn(),t==="clear")l.forEach(f);else{const u=H(e),b=u&&Gn(n);if(u&&n==="length"){const _=Number(s);l.forEach((R,F)=>{(F==="length"||F===jt||!Ie(F)&&F>=_)&&f(R)})}else switch((n!==void 0||l.has(void 0))&&f(l.get(n)),b&&f(l.get(jt)),t){case"add":u?b&&f(l.get("length")):(f(l.get(ut)),yt(e)&&f(l.get(On)));break;case"delete":u||(f(l.get(ut)),yt(e)&&f(l.get(On)));break;case"set":yt(e)&&f(l.get(ut));break}}Yn()}function pt(e){const t=G(e);return t===e?t:(fe(t,"iterate",jt),Ce(e)?t:t.map(Ae))}function dn(e){return fe(e=G(e),"iterate",jt),e}function tt(e,t){return Ze(e)?xt(at(e)?Ae(t):t):Ae(t)}const pi={__proto__:null,[Symbol.iterator](){return xn(this,Symbol.iterator,e=>tt(this,e))},concat(...e){return pt(this).concat(...e.map(t=>H(t)?pt(t):t))},entries(){return xn(this,"entries",e=>(e[1]=tt(this,e[1]),e))},every(e,t){return Je(this,"every",e,t,void 0,arguments)},filter(e,t){return Je(this,"filter",e,t,n=>n.map(s=>tt(this,s)),arguments)},find(e,t){return Je(this,"find",e,t,n=>tt(this,n),arguments)},findIndex(e,t){return Je(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Je(this,"findLast",e,t,n=>tt(this,n),arguments)},findLastIndex(e,t){return Je(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Je(this,"forEach",e,t,void 0,arguments)},includes(...e){return wn(this,"includes",e)},indexOf(...e){return wn(this,"indexOf",e)},join(e){return pt(this).join(e)},lastIndexOf(...e){return wn(this,"lastIndexOf",e)},map(e,t){return Je(this,"map",e,t,void 0,arguments)},pop(){return Tt(this,"pop")},push(...e){return Tt(this,"push",e)},reduce(e,...t){return gs(this,"reduce",e,t)},reduceRight(e,...t){return gs(this,"reduceRight",e,t)},shift(){return Tt(this,"shift")},some(e,t){return Je(this,"some",e,t,void 0,arguments)},splice(...e){return Tt(this,"splice",e)},toReversed(){return pt(this).toReversed()},toSorted(e){return pt(this).toSorted(e)},toSpliced(...e){return pt(this).toSpliced(...e)},unshift(...e){return Tt(this,"unshift",e)},values(){return xn(this,"values",e=>tt(this,e))}};function xn(e,t,n){const s=dn(e),r=s[t]();return s!==e&&!Ce(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const gi=Array.prototype;function Je(e,t,n,s,r,i){const l=dn(e),f=l!==e&&!Ce(e),u=l[t];if(u!==gi[t]){const R=u.apply(e,i);return f?Ae(R):R}let b=n;l!==e&&(f?b=function(R,F){return n.call(this,tt(e,R),F,e)}:n.length>2&&(b=function(R,F){return n.call(this,R,F,e)}));const _=u.call(l,b,s);return f&&r?r(_):_}function gs(e,t,n,s){const r=dn(e);let i=n;return r!==e&&(Ce(e)?n.length>3&&(i=function(l,f,u){return n.call(this,l,f,u,e)}):i=function(l,f,u){return n.call(this,l,tt(e,f),u,e)}),r[t](i,...s)}function wn(e,t,n){const s=G(e);fe(s,"iterate",jt);const r=s[t](...n);return(r===-1||r===!1)&&ns(n[0])?(n[0]=G(n[0]),s[t](...n)):r}function Tt(e,t,n=[]){Qe(),qn();const s=G(e)[t].apply(e,n);return Yn(),Xe(),s}const mi=Kn("__proto__,__v_isRef,__isVue"),cr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ie));function bi(e){Ie(e)||(e=String(e));const t=G(this);return fe(t,"has",e),t.hasOwnProperty(e)}class ur{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Li:dr:i?_r:hr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const l=H(t);if(!r){let u;if(l&&(u=pi[n]))return u;if(n==="hasOwnProperty")return bi}const f=Reflect.get(t,n,ue(t)?t:s);if((Ie(n)?cr.has(n):mi(n))||(r||fe(t,"get",n),i))return f;if(ue(f)){const u=l&&Gn(n)?f:f.value;return r&&Q(u)?Dn(u):u}return Q(f)?r?Dn(f):es(f):f}}class ar extends ur{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const l=H(t)&&Gn(n);if(!this._isShallow){const b=Ze(i);if(!Ce(s)&&!Ze(s)&&(i=G(i),s=G(s)),!l&&ue(i)&&!ue(s))return b||(i.value=s),!0}const f=l?Number(n)<t.length:J(t,n),u=Reflect.set(t,n,s,ue(t)?t:r);return t===G(r)&&(f?rt(s,i)&&Ye(t,"set",n,s):Ye(t,"add",n,s)),u}deleteProperty(t,n){const s=J(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Ye(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Ie(n)||!cr.has(n))&&fe(t,"has",n),s}ownKeys(t){return fe(t,"iterate",H(t)?"length":ut),Reflect.ownKeys(t)}}class yi extends ur{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const vi=new ar,Si=new yi,Ri=new ar(!0);const $n=e=>e,Jt=e=>Reflect.getPrototypeOf(e);function xi(e,t,n){return function(...s){const r=this.__v_raw,i=G(r),l=yt(i),f=e==="entries"||e===Symbol.iterator&&l,u=e==="keys"&&l,b=r[e](...s),_=n?$n:t?xt:Ae;return!t&&fe(i,"iterate",u?On:ut),ae(Object.create(b),{next(){const{value:R,done:F}=b.next();return F?{value:R,done:F}:{value:f?[_(R[0]),_(R[1])]:_(R),done:F}}})}}function zt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wi(e,t){const n={get(r){const i=this.__v_raw,l=G(i),f=G(r);e||(rt(r,f)&&fe(l,"get",r),fe(l,"get",f));const{has:u}=Jt(l),b=t?$n:e?xt:Ae;if(u.call(l,r))return b(i.get(r));if(u.call(l,f))return b(i.get(f));i!==l&&i.get(r)},get size(){const r=this.__v_raw;return!e&&fe(G(r),"iterate",ut),r.size},has(r){const i=this.__v_raw,l=G(i),f=G(r);return e||(rt(r,f)&&fe(l,"has",r),fe(l,"has",f)),r===f?i.has(r):i.has(r)||i.has(f)},forEach(r,i){const l=this,f=l.__v_raw,u=G(f),b=t?$n:e?xt:Ae;return!e&&fe(u,"iterate",ut),f.forEach((_,R)=>r.call(i,b(_),b(R),l))}};return ae(n,e?{add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear")}:{add(r){!t&&!Ce(r)&&!Ze(r)&&(r=G(r));const i=G(this);return Jt(i).has.call(i,r)||(i.add(r),Ye(i,"add",r,r)),this},set(r,i){!t&&!Ce(i)&&!Ze(i)&&(i=G(i));const l=G(this),{has:f,get:u}=Jt(l);let b=f.call(l,r);b||(r=G(r),b=f.call(l,r));const _=u.call(l,r);return l.set(r,i),b?rt(i,_)&&Ye(l,"set",r,i):Ye(l,"add",r,i),this},delete(r){const i=G(this),{has:l,get:f}=Jt(i);let u=l.call(i,r);u||(r=G(r),u=l.call(i,r)),f&&f.call(i,r);const b=i.delete(r);return u&&Ye(i,"delete",r,void 0),b},clear(){const r=G(this),i=r.size!==0,l=r.clear();return i&&Ye(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=xi(r,e,t)}),n}function Zn(e,t){const n=wi(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(J(n,r)&&r in s?n:s,r,i)}const Ci={get:Zn(!1,!1)},Ti={get:Zn(!1,!0)},Ei={get:Zn(!0,!1)};const hr=new WeakMap,_r=new WeakMap,dr=new WeakMap,Li=new WeakMap;function Ii(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ai(e){return e.__v_skip||!Object.isExtensible(e)?0:Ii(ei(e))}function es(e){return Ze(e)?e:ts(e,!1,vi,Ci,hr)}function Mi(e){return ts(e,!1,Ri,Ti,_r)}function Dn(e){return ts(e,!0,Si,Ei,dr)}function ts(e,t,n,s,r){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Ai(e);if(i===0)return e;const l=r.get(e);if(l)return l;const f=new Proxy(e,i===2?s:n);return r.set(e,f),f}function at(e){return Ze(e)?at(e.__v_raw):!!(e&&e.__v_isReactive)}function Ze(e){return!!(e&&e.__v_isReadonly)}function Ce(e){return!!(e&&e.__v_isShallow)}function ns(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Fi(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&Qs(e,"__v_skip",!0),e}const Ae=e=>Q(e)?es(e):e,xt=e=>Q(e)?Dn(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function Qt(e){return Pi(e,!1)}function Pi(e,t){return ue(e)?e:new Oi(e,t)}class Oi{constructor(t,n){this.dep=new Xn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:G(t),this._value=n?t:Ae(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ce(t)||Ze(t);t=s?t:G(t),rt(t,n)&&(this._rawValue=t,this._value=s?t:Ae(t),this.dep.trigger())}}function Xt(e){return ue(e)?e.value:e}const $i={get:(e,t,n)=>t==="__v_raw"?e:Xt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ue(r)&&!ue(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function pr(e){return at(e)?e:new Proxy(e,$i)}class Di{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Xn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ee!==this)return sr(this,!0),!0}get value(){const t=this.dep.track();return lr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ji(e,t,n=!1){let s,r;return k(e)?s=e:(s=e.get,r=e.set),new Di(s,r,n)}const qt={},sn=new WeakMap;let ct;function Ni(e,t=!1,n=ct){if(n){let s=sn.get(n);s||sn.set(n,s=[]),s.push(e)}}function Bi(e,t,n=te){const{immediate:s,deep:r,once:i,scheduler:l,augmentJob:f,call:u}=n,b=j=>r?j:Ce(j)||r===!1||r===0?st(j,1):st(j);let _,R,F,O,V=!1,N=!1;if(ue(e)?(R=()=>e.value,V=Ce(e)):at(e)?(R=()=>b(e),V=!0):H(e)?(N=!0,V=e.some(j=>at(j)||Ce(j)),R=()=>e.map(j=>{if(ue(j))return j.value;if(at(j))return b(j);if(k(j))return u?u(j,2):j()})):k(e)?t?R=u?()=>u(e,2):e:R=()=>{if(F){Qe();try{F()}finally{Xe()}}const j=ct;ct=_;try{return u?u(e,3,[O]):e(O)}finally{ct=j}}:R=Ue,t&&r){const j=R,ie=r===!0?1/0:r;R=()=>st(j(),ie)}const re=hi(),X=()=>{_.stop(),re&&re.active&&Vn(re.effects,_)};if(i&&t){const j=t;t=(...ie)=>{j(...ie),X()}}let U=N?new Array(e.length).fill(qt):qt;const W=j=>{if(!(!(_.flags&1)||!_.dirty&&!j))if(t){const ie=_.run();if(r||V||(N?ie.some((Me,we)=>rt(Me,U[we])):rt(ie,U))){F&&F();const Me=ct;ct=_;try{const we=[ie,U===qt?void 0:N&&U[0]===qt?[]:U,O];U=ie,u?u(t,3,we):t(...we)}finally{ct=Me}}}else _.run()};return f&&f(W),_=new tr(R),_.scheduler=l?()=>l(W,!1):W,O=j=>Ni(j,!1,_),F=_.onStop=()=>{const j=sn.get(_);if(j){if(u)u(j,4);else for(const ie of j)ie();sn.delete(_)}},t?s?W(!0):U=_.run():l?l(W.bind(null,!0),!0):_.run(),X.pause=_.pause.bind(_),X.resume=_.resume.bind(_),X.stop=X,X}function st(e,t=1/0,n){if(t<=0||!Q(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ue(e))st(e.value,t,n);else if(H(e))for(let s=0;s<e.length;s++)st(e[s],t,n);else if(Gs(e)||yt(e))e.forEach(s=>{st(s,t,n)});else if(qs(e)){for(const s in e)st(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&st(e[s],t,n)}return e}function Kt(e,t,n,s){try{return s?e(...s):e()}catch(r){pn(r,t,n)}}function We(e,t,n,s){if(k(e)){const r=Kt(e,t,n,s);return r&&Js(r)&&r.catch(i=>{pn(i,t,n)}),r}if(H(e)){const r=[];for(let i=0;i<e.length;i++)r.push(We(e[i],t,n,s));return r}}function pn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||te;if(t){let f=t.parent;const u=t.proxy,b=`https://vuejs.org/error-reference/#runtime-${n}`;for(;f;){const _=f.ec;if(_){for(let R=0;R<_.length;R++)if(_[R](e,u,b)===!1)return}f=f.parent}if(i){Qe(),Kt(i,null,10,[e,u,b]),Xe();return}}Hi(e,n,r,s,l)}function Hi(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const de=[];let Be=-1;const vt=[];let nt=null,gt=0;const gr=Promise.resolve();let rn=null;function ki(e){const t=rn||gr;return e?t.then(this?e.bind(this):e):t}function Ui(e){let t=Be+1,n=de.length;for(;t<n;){const s=t+n>>>1,r=de[s],i=Nt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function ss(e){if(!(e.flags&1)){const t=Nt(e),n=de[de.length-1];!n||!(e.flags&2)&&t>=Nt(n)?de.push(e):de.splice(Ui(t),0,e),e.flags|=1,mr()}}function mr(){rn||(rn=gr.then(yr))}function Ki(e){H(e)?vt.push(...e):nt&&e.id===-1?nt.splice(gt+1,0,e):e.flags&1||(vt.push(e),e.flags|=1),mr()}function ms(e,t,n=Be+1){for(;n<de.length;n++){const s=de[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;de.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function br(e){if(vt.length){const t=[...new Set(vt)].sort((n,s)=>Nt(n)-Nt(s));if(vt.length=0,nt){nt.push(...t);return}for(nt=t,gt=0;gt<nt.length;gt++){const n=nt[gt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nt=null,gt=0}}const Nt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yr(e){try{for(Be=0;Be<de.length;Be++){const t=de[Be];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Kt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Be<de.length;Be++){const t=de[Be];t&&(t.flags&=-2)}Be=-1,de.length=0,br(),rn=null,(de.length||vt.length)&&yr()}}let Se=null,vr=null;function ln(e){const t=Se;return Se=e,vr=e&&e.type.__scopeId||null,t}function mt(e,t=Se,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Ls(-1);const i=ln(t);let l;try{l=e(...r)}finally{ln(i),s._d&&Ls(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function ot(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let l=0;l<r.length;l++){const f=r[l];i&&(f.oldValue=i[l].value);let u=f.dir[s];u&&(Qe(),We(u,n,8,[e.el,f,e,t]),Xe())}}function Wi(e,t){if(ge){let n=ge.provides;const s=ge.parent&&ge.parent.provides;s===n&&(n=ge.provides=Object.create(s)),n[e]=t}}function Zt(e,t,n=!1){const s=Kl();if(s||Rt){let r=Rt?Rt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&k(t)?t.call(s&&s.proxy):t}}const Vi=Symbol.for("v-scx"),Gi=()=>Zt(Vi);function Cn(e,t,n){return Sr(e,t,n)}function Sr(e,t,n=te){const{immediate:s,deep:r,flush:i,once:l}=n,f=ae({},n),u=t&&s||!t&&i!=="post";let b;if(kt){if(i==="sync"){const O=Gi();b=O.__watcherHandles||(O.__watcherHandles=[])}else if(!u){const O=()=>{};return O.stop=Ue,O.resume=Ue,O.pause=Ue,O}}const _=ge;f.call=(O,V,N)=>We(O,_,V,N);let R=!1;i==="post"?f.scheduler=O=>{ye(O,_&&_.suspense)}:i!=="sync"&&(R=!0,f.scheduler=(O,V)=>{V?O():ss(O)}),f.augmentJob=O=>{t&&(O.flags|=4),R&&(O.flags|=2,_&&(O.id=_.uid,O.i=_))};const F=Bi(e,t,f);return kt&&(b?b.push(F):u&&F()),F}function Ji(e,t,n){const s=this.proxy,r=le(e)?e.includes(".")?Rr(s,e):()=>s[e]:e.bind(s,s);let i;k(t)?i=t:(i=t.handler,n=t);const l=Wt(this),f=Sr(r,i.bind(s),n);return l(),f}function Rr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const zi=Symbol("_vte"),qi=e=>e.__isTeleport,Yi=Symbol("_leaveCb");function rs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,rs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function bs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const on=new WeakMap;function Pt(e,t,n,s,r=!1){if(H(e)){e.forEach((N,re)=>Pt(N,t&&(H(t)?t[re]:t),n,s,r));return}if(St(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Pt(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?cs(s.component):s.el,l=r?null:i,{i:f,r:u}=e,b=t&&t.r,_=f.refs===te?f.refs={}:f.refs,R=f.setupState,F=G(R),O=R===te?Vs:N=>bs(_,N)?!1:J(F,N),V=(N,re)=>!(re&&bs(_,re));if(b!=null&&b!==u){if(ys(t),le(b))_[b]=null,O(b)&&(R[b]=null);else if(ue(b)){const N=t;V(b,N.k)&&(b.value=null),N.k&&(_[N.k]=null)}}if(k(u))Kt(u,f,12,[l,_]);else{const N=le(u),re=ue(u);if(N||re){const X=()=>{if(e.f){const U=N?O(u)?R[u]:_[u]:V()||!e.k?u.value:_[e.k];if(r)H(U)&&Vn(U,i);else if(H(U))U.includes(i)||U.push(i);else if(N)_[u]=[i],O(u)&&(R[u]=_[u]);else{const W=[i];V(u,e.k)&&(u.value=W),e.k&&(_[e.k]=W)}}else N?(_[u]=l,O(u)&&(R[u]=l)):re&&(V(u,e.k)&&(u.value=l),e.k&&(_[e.k]=l))};if(l){const U=()=>{X(),on.delete(e)};U.id=-1,on.set(e,U),ye(U,n)}else ys(e),X()}}}function ys(e){const t=on.get(e);t&&(t.flags|=8,on.delete(e))}hn().requestIdleCallback;hn().cancelIdleCallback;const St=e=>!!e.type.__asyncLoader,wr=e=>e.type.__isKeepAlive;function Qi(e,t){Cr(e,"a",t)}function Xi(e,t){Cr(e,"da",t)}function Cr(e,t,n=ge){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(gn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)wr(r.parent.vnode)&&Zi(s,t,n,r),r=r.parent}}function Zi(e,t,n,s){const r=gn(t,e,s,!0);Er(()=>{Vn(s[t],r)},n)}function gn(e,t,n=ge,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...l)=>{Qe();const f=Wt(n),u=We(t,n,e,l);return f(),Xe(),u});return s?r.unshift(i):r.push(i),i}}const et=e=>(t,n=ge)=>{(!kt||e==="sp")&&gn(e,(...s)=>t(...s),n)},el=et("bm"),Tr=et("m"),tl=et("bu"),nl=et("u"),sl=et("bum"),Er=et("um"),rl=et("sp"),il=et("rtg"),ll=et("rtc");function ol(e,t=ge){gn("ec",e,t)}const fl=Symbol.for("v-ndc");function Tn(e,t,n,s){let r;const i=n,l=H(e);if(l||le(e)){const f=l&&at(e);let u=!1,b=!1;f&&(u=!Ce(e),b=Ze(e),e=dn(e)),r=new Array(e.length);for(let _=0,R=e.length;_<R;_++)r[_]=t(u?b?xt(Ae(e[_])):Ae(e[_]):e[_],_,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let f=0;f<e;f++)r[f]=t(f+1,f,void 0,i)}else if(Q(e))if(e[Symbol.iterator])r=Array.from(e,(f,u)=>t(f,u,void 0,i));else{const f=Object.keys(e);r=new Array(f.length);for(let u=0,b=f.length;u<b;u++){const _=f[u];r[u]=t(e[_],_,u,i)}}else r=[];return r}function Lr(e,t,n={},s,r){if(Se.ce||Se.parent&&St(Se.parent)&&Se.parent.ce){const b=Object.keys(n).length>0;return _e(),Ht(pe,null,[ce("slot",n,s)],b?-2:64)}let i=e[t];i&&i._c&&(i._d=!1),_e();const l=i&&Ir(i(n)),f=n.key||l&&l.key,u=Ht(pe,{key:(f&&!Ie(f)?f:`_${t}`)+(!l&&s?"_fb":"")},l||[],l&&e._===1?64:-2);return i&&i._c&&(i._d=!0),u}function Ir(e){return e.some(t=>os(t)?!(t.type===ht||t.type===pe&&!Ir(t.children)):!0)?e:null}const jn=e=>e?Yr(e)?cs(e):jn(e.parent):null,Ot=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jn(e.parent),$root:e=>jn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Mr(e),$forceUpdate:e=>e.f||(e.f=()=>{ss(e.update)}),$nextTick:e=>e.n||(e.n=ki.bind(e.proxy)),$watch:e=>Ji.bind(e)}),En=(e,t)=>e!==te&&!e.__isScriptSetup&&J(e,t),cl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:l,type:f,appContext:u}=e;if(t[0]!=="$"){const F=l[t];if(F!==void 0)switch(F){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(En(s,t))return l[t]=1,s[t];if(r!==te&&J(r,t))return l[t]=2,r[t];if(J(i,t))return l[t]=3,i[t];if(n!==te&&J(n,t))return l[t]=4,n[t];Nn&&(l[t]=0)}}const b=Ot[t];let _,R;if(b)return t==="$attrs"&&fe(e.attrs,"get",""),b(e);if((_=f.__cssModules)&&(_=_[t]))return _;if(n!==te&&J(n,t))return l[t]=4,n[t];if(R=u.config.globalProperties,J(R,t))return R[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return En(r,t)?(r[t]=n,!0):s!==te&&J(s,t)?(s[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:l}},f){let u;return!!(n[f]||e!==te&&f[0]!=="$"&&J(e,f)||En(t,f)||J(i,f)||J(s,f)||J(Ot,f)||J(r.config.globalProperties,f)||(u=l.__cssModules)&&u[f])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:J(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function vs(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nn=!0;function ul(e){const t=Mr(e),n=e.proxy,s=e.ctx;Nn=!1,t.beforeCreate&&Ss(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:l,watch:f,provide:u,inject:b,created:_,beforeMount:R,mounted:F,beforeUpdate:O,updated:V,activated:N,deactivated:re,beforeDestroy:X,beforeUnmount:U,destroyed:W,unmounted:j,render:ie,renderTracked:Me,renderTriggered:we,errorCaptured:Te,serverPrefetch:dt,expose:Ve,inheritAttrs:Ge,components:Ee,directives:Fe,filters:Pe}=t;if(b&&al(b,s,null),l)for(const ne in l){const q=l[ne];k(q)&&(s[ne]=q.bind(n))}if(r){const ne=r.call(n,n);Q(ne)&&(e.data=es(ne))}if(Nn=!0,i)for(const ne in i){const q=i[ne],Oe=k(q)?q.bind(n,n):k(q.get)?q.get.bind(n,n):Ue,lt=!k(q)&&k(q.set)?q.set.bind(n):Ue,Y=ql({get:Oe,set:lt});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>Y.value,set:p=>Y.value=p})}if(f)for(const ne in f)Ar(f[ne],s,n,ne);if(u){const ne=k(u)?u.call(n):u;Reflect.ownKeys(ne).forEach(q=>{Wi(q,ne[q])})}_&&Ss(_,e,"c");function oe(ne,q){H(q)?q.forEach(Oe=>ne(Oe.bind(n))):q&&ne(q.bind(n))}if(oe(el,R),oe(Tr,F),oe(tl,O),oe(nl,V),oe(Qi,N),oe(Xi,re),oe(ol,Te),oe(ll,Me),oe(il,we),oe(sl,U),oe(Er,j),oe(rl,dt),H(Ve))if(Ve.length){const ne=e.exposed||(e.exposed={});Ve.forEach(q=>{Object.defineProperty(ne,q,{get:()=>n[q],set:Oe=>n[q]=Oe,enumerable:!0})})}else e.exposed||(e.exposed={});ie&&e.render===Ue&&(e.render=ie),Ge!=null&&(e.inheritAttrs=Ge),Ee&&(e.components=Ee),Fe&&(e.directives=Fe),dt&&xr(e)}function al(e,t,n=Ue){H(e)&&(e=Bn(e));for(const s in e){const r=e[s];let i;Q(r)?"default"in r?i=Zt(r.from||s,r.default,!0):i=Zt(r.from||s):i=Zt(r),ue(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[s]=i}}function Ss(e,t,n){We(H(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ar(e,t,n,s){let r=s.includes(".")?Rr(n,s):()=>n[s];if(le(e)){const i=t[e];k(i)&&Cn(r,i)}else if(k(e))Cn(r,e.bind(n));else if(Q(e))if(H(e))e.forEach(i=>Ar(i,t,n,s));else{const i=k(e.handler)?e.handler.bind(n):t[e.handler];k(i)&&Cn(r,i,e)}}function Mr(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,f=i.get(t);let u;return f?u=f:!r.length&&!n&&!s?u=t:(u={},r.length&&r.forEach(b=>fn(u,b,l,!0)),fn(u,t,l)),Q(t)&&i.set(t,u),u}function fn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&fn(e,i,n,!0),r&&r.forEach(l=>fn(e,l,n,!0));for(const l in t)if(!(s&&l==="expose")){const f=hl[l]||n&&n[l];e[l]=f?f(e[l],t[l]):t[l]}return e}const hl={data:Rs,props:xs,emits:xs,methods:It,computed:It,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:It,directives:It,watch:dl,provide:Rs,inject:_l};function Rs(e,t){return t?e?function(){return ae(k(e)?e.call(this,this):e,k(t)?t.call(this,this):t)}:t:e}function _l(e,t){return It(Bn(e),Bn(t))}function Bn(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function It(e,t){return e?ae(Object.create(null),e,t):t}function xs(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:ae(Object.create(null),vs(e),vs(t??{})):t}function dl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const s in t)n[s]=he(e[s],t[s]);return n}function Fr(){return{app:null,config:{isNativeTag:Vs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pl=0;function gl(e,t){return function(s,r=null){k(s)||(s=ae({},s)),r!=null&&!Q(r)&&(r=null);const i=Fr(),l=new WeakSet,f=[];let u=!1;const b=i.app={_uid:pl++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Yl,get config(){return i.config},set config(_){},use(_,...R){return l.has(_)||(_&&k(_.install)?(l.add(_),_.install(b,...R)):k(_)&&(l.add(_),_(b,...R))),b},mixin(_){return i.mixins.includes(_)||i.mixins.push(_),b},component(_,R){return R?(i.components[_]=R,b):i.components[_]},directive(_,R){return R?(i.directives[_]=R,b):i.directives[_]},mount(_,R,F){if(!u){const O=b._ceVNode||ce(s,r);return O.appContext=i,F===!0?F="svg":F===!1&&(F=void 0),e(O,_,F),u=!0,b._container=_,_.__vue_app__=b,cs(O.component)}},onUnmount(_){f.push(_)},unmount(){u&&(We(f,b._instance,16),e(null,b._container),delete b._container.__vue_app__)},provide(_,R){return i.provides[_]=R,b},runWithContext(_){const R=Rt;Rt=b;try{return _()}finally{Rt=R}}};return b}}let Rt=null;const ml=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${it(t)}Modifiers`]||e[`${_t(t)}Modifiers`];function bl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||te;let r=n;const i=t.startsWith("update:"),l=i&&ml(s,t.slice(7));l&&(l.trim&&(r=n.map(_=>le(_)?_.trim():_)),l.number&&(r=n.map(si)));let f,u=s[f=yn(t)]||s[f=yn(it(t))];!u&&i&&(u=s[f=yn(_t(t))]),u&&We(u,e,6,r);const b=s[f+"Once"];if(b){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,We(b,e,6,r)}}const yl=new WeakMap;function Pr(e,t,n=!1){const s=n?yl:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let l={},f=!1;if(!k(e)){const u=b=>{const _=Pr(b,t,!0);_&&(f=!0,ae(l,_))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!f?(Q(e)&&s.set(e,null),null):(H(i)?i.forEach(u=>l[u]=null):ae(l,i),Q(e)&&s.set(e,l),l)}function mn(e,t){return!e||!un(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,_t(t))||J(e,t))}function ws(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:l,attrs:f,emit:u,render:b,renderCache:_,props:R,data:F,setupState:O,ctx:V,inheritAttrs:N}=e,re=ln(e);let X,U;try{if(n.shapeFlag&4){const j=r||s,ie=j;X=He(b.call(ie,j,_,R,O,F,V)),U=f}else{const j=t;X=He(j.length>1?j(R,{attrs:f,slots:l,emit:u}):j(R,null)),U=t.props?f:vl(f)}}catch(j){$t.length=0,pn(j,e,1),X=ce(ht)}let W=X;if(U&&N!==!1){const j=Object.keys(U),{shapeFlag:ie}=W;j.length&&ie&7&&(i&&j.some(Wn)&&(U=Sl(U,i)),W=wt(W,U,!1,!0))}return n.dirs&&(W=wt(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&rs(W,n.transition),X=W,ln(re),X}const vl=e=>{let t;for(const n in e)(n==="class"||n==="style"||un(n))&&((t||(t={}))[n]=e[n]);return t},Sl=(e,t)=>{const n={};for(const s in e)(!Wn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Rl(e,t,n){const{props:s,children:r,component:i}=e,{props:l,children:f,patchFlag:u}=t,b=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Cs(s,l,b):!!l;if(u&8){const _=t.dynamicProps;for(let R=0;R<_.length;R++){const F=_[R];if(Or(l,s,F)&&!mn(b,F))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:s===l?!1:s?l?Cs(s,l,b):!0:!!l;return!1}function Cs(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(Or(t,e,i)&&!mn(n,i))return!0}return!1}function Or(e,t,n){const s=e[n],r=t[n];return n==="style"&&Q(s)&&Q(r)?!zn(s,r):s!==r}function xl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const $r={},Dr=()=>Object.create($r),jr=e=>Object.getPrototypeOf(e)===$r;function wl(e,t,n,s=!1){const r={},i=Dr();e.propsDefaults=Object.create(null),Nr(e,t,r,i);for(const l in e.propsOptions[0])l in r||(r[l]=void 0);n?e.props=s?r:Mi(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Cl(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:l}}=e,f=G(r),[u]=e.propsOptions;let b=!1;if((s||l>0)&&!(l&16)){if(l&8){const _=e.vnode.dynamicProps;for(let R=0;R<_.length;R++){let F=_[R];if(mn(e.emitsOptions,F))continue;const O=t[F];if(u)if(J(i,F))O!==i[F]&&(i[F]=O,b=!0);else{const V=it(F);r[V]=Hn(u,f,V,O,e,!1)}else O!==i[F]&&(i[F]=O,b=!0)}}}else{Nr(e,t,r,i)&&(b=!0);let _;for(const R in f)(!t||!J(t,R)&&((_=_t(R))===R||!J(t,_)))&&(u?n&&(n[R]!==void 0||n[_]!==void 0)&&(r[R]=Hn(u,f,R,void 0,e,!0)):delete r[R]);if(i!==f)for(const R in i)(!t||!J(t,R))&&(delete i[R],b=!0)}b&&Ye(e.attrs,"set","")}function Nr(e,t,n,s){const[r,i]=e.propsOptions;let l=!1,f;if(t)for(let u in t){if(At(u))continue;const b=t[u];let _;r&&J(r,_=it(u))?!i||!i.includes(_)?n[_]=b:(f||(f={}))[_]=b:mn(e.emitsOptions,u)||(!(u in s)||b!==s[u])&&(s[u]=b,l=!0)}if(i){const u=G(n),b=f||te;for(let _=0;_<i.length;_++){const R=i[_];n[R]=Hn(r,u,R,b[R],e,!J(b,R))}}return l}function Hn(e,t,n,s,r,i){const l=e[n];if(l!=null){const f=J(l,"default");if(f&&s===void 0){const u=l.default;if(l.type!==Function&&!l.skipFactory&&k(u)){const{propsDefaults:b}=r;if(n in b)s=b[n];else{const _=Wt(r);s=b[n]=u.call(null,t),_()}}else s=u;r.ce&&r.ce._setProp(n,s)}l[0]&&(i&&!f?s=!1:l[1]&&(s===""||s===_t(n))&&(s=!0))}return s}const Tl=new WeakMap;function Br(e,t,n=!1){const s=n?Tl:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,l={},f=[];let u=!1;if(!k(e)){const _=R=>{u=!0;const[F,O]=Br(R,t,!0);ae(l,F),O&&f.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(_),e.extends&&_(e.extends),e.mixins&&e.mixins.forEach(_)}if(!i&&!u)return Q(e)&&s.set(e,bt),bt;if(H(i))for(let _=0;_<i.length;_++){const R=it(i[_]);Ts(R)&&(l[R]=te)}else if(i)for(const _ in i){const R=it(_);if(Ts(R)){const F=i[_],O=l[R]=H(F)||k(F)?{type:F}:ae({},F),V=O.type;let N=!1,re=!0;if(H(V))for(let X=0;X<V.length;++X){const U=V[X],W=k(U)&&U.name;if(W==="Boolean"){N=!0;break}else W==="String"&&(re=!1)}else N=k(V)&&V.name==="Boolean";O[0]=N,O[1]=re,(N||J(O,"default"))&&f.push(R)}}const b=[l,f];return Q(e)&&s.set(e,b),b}function Ts(e){return e[0]!=="$"&&!At(e)}const is=e=>e==="_"||e==="_ctx"||e==="$stable",ls=e=>H(e)?e.map(He):[He(e)],El=(e,t,n)=>{if(t._n)return t;const s=mt((...r)=>ls(t(...r)),n);return s._c=!1,s},Hr=(e,t,n)=>{const s=e._ctx;for(const r in e){if(is(r))continue;const i=e[r];if(k(i))t[r]=El(r,i,s);else if(i!=null){const l=ls(i);t[r]=()=>l}}},kr=(e,t)=>{const n=ls(t);e.slots.default=()=>n},Ur=(e,t,n)=>{for(const s in t)(n||!is(s))&&(e[s]=t[s])},Ll=(e,t,n)=>{const s=e.slots=Dr();if(e.vnode.shapeFlag&32){const r=t._;r?(Ur(s,t,n),n&&Qs(s,"_",r,!0)):Hr(t,s)}else t&&kr(e,t)},Il=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,l=te;if(s.shapeFlag&32){const f=t._;f?n&&f===1?i=!1:Ur(r,t,n):(i=!t.$stable,Hr(t,r)),l=t}else t&&(kr(e,t),l={default:1});if(i)for(const f in r)!is(f)&&l[f]==null&&delete r[f]},ye=Ol;function Al(e){return Ml(e)}function Ml(e,t){const n=hn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:l,createText:f,createComment:u,setText:b,setElementText:_,parentNode:R,nextSibling:F,setScopeId:O=Ue,insertStaticContent:V}=e,N=(o,c,h,m=null,v=null,y=null,I=void 0,w=null,C=!!c.dynamicChildren)=>{if(o===c)return;o&&!Et(o,c)&&(m=T(o),p(o,v,y,!0),o=null),c.patchFlag===-2&&(C=!1,c.dynamicChildren=null);const{type:S,ref:P,shapeFlag:M}=c;switch(S){case bn:re(o,c,h,m);break;case ht:X(o,c,h,m);break;case en:o==null&&U(c,h,m,I);break;case pe:Ee(o,c,h,m,v,y,I,w,C);break;default:M&1?ie(o,c,h,m,v,y,I,w,C):M&6?Fe(o,c,h,m,v,y,I,w,C):(M&64||M&128)&&S.process(o,c,h,m,v,y,I,w,C,A)}P!=null&&v?Pt(P,o&&o.ref,y,c||o,!c):P==null&&o&&o.ref!=null&&Pt(o.ref,null,y,o,!0)},re=(o,c,h,m)=>{if(o==null)s(c.el=f(c.children),h,m);else{const v=c.el=o.el;c.children!==o.children&&b(v,c.children)}},X=(o,c,h,m)=>{o==null?s(c.el=u(c.children||""),h,m):c.el=o.el},U=(o,c,h,m)=>{[o.el,o.anchor]=V(o.children,c,h,m,o.el,o.anchor)},W=({el:o,anchor:c},h,m)=>{let v;for(;o&&o!==c;)v=F(o),s(o,h,m),o=v;s(c,h,m)},j=({el:o,anchor:c})=>{let h;for(;o&&o!==c;)h=F(o),r(o),o=h;r(c)},ie=(o,c,h,m,v,y,I,w,C)=>{if(c.type==="svg"?I="svg":c.type==="math"&&(I="mathml"),o==null)Me(c,h,m,v,y,I,w,C);else{const S=o.el&&o.el._isVueCE?o.el:null;try{S&&S._beginPatch(),dt(o,c,v,y,I,w,C)}finally{S&&S._endPatch()}}},Me=(o,c,h,m,v,y,I,w)=>{let C,S;const{props:P,shapeFlag:M,transition:$,dirs:B}=o;if(C=o.el=l(o.type,y,P&&P.is,P),M&8?_(C,o.children):M&16&&Te(o.children,C,null,m,v,Ln(o,y),I,w),B&&ot(o,null,m,"created"),we(C,o,o.scopeId,I,m),P){for(const Z in P)Z!=="value"&&!At(Z)&&i(C,Z,null,P[Z],y,m);"value"in P&&i(C,"value",null,P.value,y),(S=P.onVnodeBeforeMount)&&Ne(S,m,o)}B&&ot(o,null,m,"beforeMount");const K=Fl(v,$);K&&$.beforeEnter(C),s(C,c,h),((S=P&&P.onVnodeMounted)||K||B)&&ye(()=>{S&&Ne(S,m,o),K&&$.enter(C),B&&ot(o,null,m,"mounted")},v)},we=(o,c,h,m,v)=>{if(h&&O(o,h),m)for(let y=0;y<m.length;y++)O(o,m[y]);if(v){let y=v.subTree;if(c===y||Gr(y.type)&&(y.ssContent===c||y.ssFallback===c)){const I=v.vnode;we(o,I,I.scopeId,I.slotScopeIds,v.parent)}}},Te=(o,c,h,m,v,y,I,w,C=0)=>{for(let S=C;S<o.length;S++){const P=o[S]=w?qe(o[S]):He(o[S]);N(null,P,c,h,m,v,y,I,w)}},dt=(o,c,h,m,v,y,I)=>{const w=c.el=o.el;let{patchFlag:C,dynamicChildren:S,dirs:P}=c;C|=o.patchFlag&16;const M=o.props||te,$=c.props||te;let B;if(h&&ft(h,!1),(B=$.onVnodeBeforeUpdate)&&Ne(B,h,c,o),P&&ot(c,o,h,"beforeUpdate"),h&&ft(h,!0),(M.innerHTML&&$.innerHTML==null||M.textContent&&$.textContent==null)&&_(w,""),S?Ve(o.dynamicChildren,S,w,h,m,Ln(c,v),y):I||q(o,c,w,null,h,m,Ln(c,v),y,!1),C>0){if(C&16)Ge(w,M,$,h,v);else if(C&2&&M.class!==$.class&&i(w,"class",null,$.class,v),C&4&&i(w,"style",M.style,$.style,v),C&8){const K=c.dynamicProps;for(let Z=0;Z<K.length;Z++){const z=K[Z],me=M[z],be=$[z];(be!==me||z==="value")&&i(w,z,me,be,v,h)}}C&1&&o.children!==c.children&&_(w,c.children)}else!I&&S==null&&Ge(w,M,$,h,v);((B=$.onVnodeUpdated)||P)&&ye(()=>{B&&Ne(B,h,c,o),P&&ot(c,o,h,"updated")},m)},Ve=(o,c,h,m,v,y,I)=>{for(let w=0;w<c.length;w++){const C=o[w],S=c[w],P=C.el&&(C.type===pe||!Et(C,S)||C.shapeFlag&198)?R(C.el):h;N(C,S,P,null,m,v,y,I,!0)}},Ge=(o,c,h,m,v)=>{if(c!==h){if(c!==te)for(const y in c)!At(y)&&!(y in h)&&i(o,y,c[y],null,v,m);for(const y in h){if(At(y))continue;const I=h[y],w=c[y];I!==w&&y!=="value"&&i(o,y,w,I,v,m)}"value"in h&&i(o,"value",c.value,h.value,v)}},Ee=(o,c,h,m,v,y,I,w,C)=>{const S=c.el=o?o.el:f(""),P=c.anchor=o?o.anchor:f("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:B}=c;B&&(w=w?w.concat(B):B),o==null?(s(S,h,m),s(P,h,m),Te(c.children||[],h,P,v,y,I,w,C)):M>0&&M&64&&$&&o.dynamicChildren&&o.dynamicChildren.length===$.length?(Ve(o.dynamicChildren,$,h,v,y,I,w),(c.key!=null||v&&c===v.subTree)&&Kr(o,c,!0)):q(o,c,h,P,v,y,I,w,C)},Fe=(o,c,h,m,v,y,I,w,C)=>{c.slotScopeIds=w,o==null?c.shapeFlag&512?v.ctx.activate(c,h,m,I,C):Pe(c,h,m,v,y,I,C):Gt(o,c,C)},Pe=(o,c,h,m,v,y,I)=>{const w=o.component=Ul(o,m,v);if(wr(o)&&(w.ctx.renderer=A),Wl(w,!1,I),w.asyncDep){if(v&&v.registerDep(w,oe,I),!o.el){const C=w.subTree=ce(ht);X(null,C,c,h),o.placeholder=C.el}}else oe(w,o,c,h,v,y,I)},Gt=(o,c,h)=>{const m=c.component=o.component;if(Rl(o,c,h))if(m.asyncDep&&!m.asyncResolved){ne(m,c,h);return}else m.next=c,m.update();else c.el=o.el,m.vnode=c},oe=(o,c,h,m,v,y,I)=>{const w=()=>{if(o.isMounted){let{next:M,bu:$,u:B,parent:K,vnode:Z}=o;{const De=Wr(o);if(De){M&&(M.el=Z.el,ne(o,M,I)),De.asyncDep.then(()=>{ye(()=>{o.isUnmounted||S()},v)});return}}let z=M,me;ft(o,!1),M?(M.el=Z.el,ne(o,M,I)):M=Z,$&&vn($),(me=M.props&&M.props.onVnodeBeforeUpdate)&&Ne(me,K,M,Z),ft(o,!0);const be=ws(o),$e=o.subTree;o.subTree=be,N($e,be,R($e.el),T($e),o,v,y),M.el=be.el,z===null&&xl(o,be.el),B&&ye(B,v),(me=M.props&&M.props.onVnodeUpdated)&&ye(()=>Ne(me,K,M,Z),v)}else{let M;const{el:$,props:B}=c,{bm:K,m:Z,parent:z,root:me,type:be}=o,$e=St(c);ft(o,!1),K&&vn(K),!$e&&(M=B&&B.onVnodeBeforeMount)&&Ne(M,z,c),ft(o,!0);{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(be);const De=o.subTree=ws(o);N(null,De,h,m,o,v,y),c.el=De.el}if(Z&&ye(Z,v),!$e&&(M=B&&B.onVnodeMounted)){const De=c;ye(()=>Ne(M,z,De),v)}(c.shapeFlag&256||z&&St(z.vnode)&&z.vnode.shapeFlag&256)&&o.a&&ye(o.a,v),o.isMounted=!0,c=h=m=null}};o.scope.on();const C=o.effect=new tr(w);o.scope.off();const S=o.update=C.run.bind(C),P=o.job=C.runIfDirty.bind(C);P.i=o,P.id=o.uid,C.scheduler=()=>ss(P),ft(o,!0),S()},ne=(o,c,h)=>{c.component=o;const m=o.vnode.props;o.vnode=c,o.next=null,Cl(o,c.props,m,h),Il(o,c.children,h),Qe(),ms(o),Xe()},q=(o,c,h,m,v,y,I,w,C=!1)=>{const S=o&&o.children,P=o?o.shapeFlag:0,M=c.children,{patchFlag:$,shapeFlag:B}=c;if($>0){if($&128){lt(S,M,h,m,v,y,I,w,C);return}else if($&256){Oe(S,M,h,m,v,y,I,w,C);return}}B&8?(P&16&&x(S,v,y),M!==S&&_(h,M)):P&16?B&16?lt(S,M,h,m,v,y,I,w,C):x(S,v,y,!0):(P&8&&_(h,""),B&16&&Te(M,h,m,v,y,I,w,C))},Oe=(o,c,h,m,v,y,I,w,C)=>{o=o||bt,c=c||bt;const S=o.length,P=c.length,M=Math.min(S,P);let $;for($=0;$<M;$++){const B=c[$]=C?qe(c[$]):He(c[$]);N(o[$],B,h,null,v,y,I,w,C)}S>P?x(o,v,y,!0,!1,M):Te(c,h,m,v,y,I,w,C,M)},lt=(o,c,h,m,v,y,I,w,C)=>{let S=0;const P=c.length;let M=o.length-1,$=P-1;for(;S<=M&&S<=$;){const B=o[S],K=c[S]=C?qe(c[S]):He(c[S]);if(Et(B,K))N(B,K,h,null,v,y,I,w,C);else break;S++}for(;S<=M&&S<=$;){const B=o[M],K=c[$]=C?qe(c[$]):He(c[$]);if(Et(B,K))N(B,K,h,null,v,y,I,w,C);else break;M--,$--}if(S>M){if(S<=$){const B=$+1,K=B<P?c[B].el:m;for(;S<=$;)N(null,c[S]=C?qe(c[S]):He(c[S]),h,K,v,y,I,w,C),S++}}else if(S>$)for(;S<=M;)p(o[S],v,y,!0),S++;else{const B=S,K=S,Z=new Map;for(S=K;S<=$;S++){const Re=c[S]=C?qe(c[S]):He(c[S]);Re.key!=null&&Z.set(Re.key,S)}let z,me=0;const be=$-K+1;let $e=!1,De=0;const Ct=new Array(be);for(S=0;S<be;S++)Ct[S]=0;for(S=B;S<=M;S++){const Re=o[S];if(me>=be){p(Re,v,y,!0);continue}let je;if(Re.key!=null)je=Z.get(Re.key);else for(z=K;z<=$;z++)if(Ct[z-K]===0&&Et(Re,c[z])){je=z;break}je===void 0?p(Re,v,y,!0):(Ct[je-K]=S+1,je>=De?De=je:$e=!0,N(Re,c[je],h,null,v,y,I,w,C),me++)}const us=$e?Pl(Ct):bt;for(z=us.length-1,S=be-1;S>=0;S--){const Re=K+S,je=c[Re],as=c[Re+1],hs=Re+1<P?as.el||Vr(as):m;Ct[S]===0?N(null,je,h,hs,v,y,I,w,C):$e&&(z<0||S!==us[z]?Y(je,h,hs,2):z--)}}},Y=(o,c,h,m,v=null)=>{const{el:y,type:I,transition:w,children:C,shapeFlag:S}=o;if(S&6){Y(o.component.subTree,c,h,m);return}if(S&128){o.suspense.move(c,h,m);return}if(S&64){I.move(o,c,h,A);return}if(I===pe){s(y,c,h);for(let M=0;M<C.length;M++)Y(C[M],c,h,m);s(o.anchor,c,h);return}if(I===en){W(o,c,h);return}if(m!==2&&S&1&&w)if(m===0)w.beforeEnter(y),s(y,c,h),ye(()=>w.enter(y),v);else{const{leave:M,delayLeave:$,afterLeave:B}=w,K=()=>{o.ctx.isUnmounted?r(y):s(y,c,h)},Z=()=>{y._isLeaving&&y[Yi](!0),M(y,()=>{K(),B&&B()})};$?$(y,K,Z):Z()}else s(y,c,h)},p=(o,c,h,m=!1,v=!1)=>{const{type:y,props:I,ref:w,children:C,dynamicChildren:S,shapeFlag:P,patchFlag:M,dirs:$,cacheIndex:B}=o;if(M===-2&&(v=!1),w!=null&&(Qe(),Pt(w,null,h,o,!0),Xe()),B!=null&&(c.renderCache[B]=void 0),P&256){c.ctx.deactivate(o);return}const K=P&1&&$,Z=!St(o);let z;if(Z&&(z=I&&I.onVnodeBeforeUnmount)&&Ne(z,c,o),P&6)d(o.component,h,m);else{if(P&128){o.suspense.unmount(h,m);return}K&&ot(o,null,c,"beforeUnmount"),P&64?o.type.remove(o,c,h,A,m):S&&!S.hasOnce&&(y!==pe||M>0&&M&64)?x(S,c,h,!1,!0):(y===pe&&M&384||!v&&P&16)&&x(C,c,h),m&&g(o)}(Z&&(z=I&&I.onVnodeUnmounted)||K)&&ye(()=>{z&&Ne(z,c,o),K&&ot(o,null,c,"unmounted")},h)},g=o=>{const{type:c,el:h,anchor:m,transition:v}=o;if(c===pe){a(h,m);return}if(c===en){j(o);return}const y=()=>{r(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(o.shapeFlag&1&&v&&!v.persisted){const{leave:I,delayLeave:w}=v,C=()=>I(h,y);w?w(o.el,y,C):C()}else y()},a=(o,c)=>{let h;for(;o!==c;)h=F(o),r(o),o=h;r(c)},d=(o,c,h)=>{const{bum:m,scope:v,job:y,subTree:I,um:w,m:C,a:S}=o;Es(C),Es(S),m&&vn(m),v.stop(),y&&(y.flags|=8,p(I,o,c,h)),w&&ye(w,c),ye(()=>{o.isUnmounted=!0},c)},x=(o,c,h,m=!1,v=!1,y=0)=>{for(let I=y;I<o.length;I++)p(o[I],c,h,m,v)},T=o=>{if(o.shapeFlag&6)return T(o.component.subTree);if(o.shapeFlag&128)return o.suspense.next();const c=F(o.anchor||o.el),h=c&&c[zi];return h?F(h):c};let E=!1;const L=(o,c,h)=>{let m;o==null?c._vnode&&(p(c._vnode,null,null,!0),m=c._vnode.component):N(c._vnode||null,o,c,null,null,null,h),c._vnode=o,E||(E=!0,ms(m),br(),E=!1)},A={p:N,um:p,m:Y,r:g,mt:Pe,mc:Te,pc:q,pbc:Ve,n:T,o:e};return{render:L,hydrate:void 0,createApp:gl(L)}}function Ln({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ft({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Fl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Kr(e,t,n=!1){const s=e.children,r=t.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const l=s[i];let f=r[i];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[i]=qe(r[i]),f.el=l.el),!n&&f.patchFlag!==-2&&Kr(l,f)),f.type===bn&&(f.patchFlag===-1&&(f=r[i]=qe(f)),f.el=l.el),f.type===ht&&!f.el&&(f.el=l.el)}}function Pl(e){const t=e.slice(),n=[0];let s,r,i,l,f;const u=e.length;for(s=0;s<u;s++){const b=e[s];if(b!==0){if(r=n[n.length-1],e[r]<b){t[s]=r,n.push(s);continue}for(i=0,l=n.length-1;i<l;)f=i+l>>1,e[n[f]]<b?i=f+1:l=f;b<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=t[l];return n}function Wr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Wr(t)}function Es(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Vr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Vr(t.subTree):null}const Gr=e=>e.__isSuspense;function Ol(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Ki(e)}const pe=Symbol.for("v-fgt"),bn=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),en=Symbol.for("v-stc"),$t=[];let xe=null;function _e(e=!1){$t.push(xe=e?null:[])}function $l(){$t.pop(),xe=$t[$t.length-1]||null}let Bt=1;function Ls(e,t=!1){Bt+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function Jr(e){return e.dynamicChildren=Bt>0?xe||bt:null,$l(),Bt>0&&xe&&xe.push(e),e}function ke(e,t,n,s,r,i){return Jr(se(e,t,n,s,r,i,!0))}function Ht(e,t,n,s,r){return Jr(ce(e,t,n,s,r,!0))}function os(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const zr=({key:e})=>e??null,tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||ue(e)||k(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function se(e,t=null,n=null,s=0,r=null,i=e===pe?0:1,l=!1,f=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zr(t),ref:t&&tn(t),scopeId:vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Se};return f?(fs(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=le(n)?8:16),Bt>0&&!l&&xe&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&xe.push(u),u}const ce=Dl;function Dl(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===fl)&&(e=ht),os(e)){const f=wt(e,t,!0);return n&&fs(f,n),Bt>0&&!i&&xe&&(f.shapeFlag&6?xe[xe.indexOf(e)]=f:xe.push(f)),f.patchFlag=-2,f}if(zl(e)&&(e=e.__vccOpts),t){t=jl(t);let{class:f,style:u}=t;f&&!le(f)&&(t.class=Jn(f)),Q(u)&&(ns(u)&&!H(u)&&(u=ae({},u)),t.style=_n(u))}const l=le(e)?1:Gr(e)?128:qi(e)?64:Q(e)?4:k(e)?2:0;return se(e,t,n,s,r,l,i,!0)}function jl(e){return e?ns(e)||jr(e)?ae({},e):e:null}function wt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:l,children:f,transition:u}=e,b=t?qr(r||{},t):r,_={__v_isVNode:!0,__v_skip:!0,type:e.type,props:b,key:b&&zr(b),ref:t&&t.ref?n&&i?H(i)?i.concat(tn(t)):[i,tn(t)]:tn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:f,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&rs(_,u.clone(_)),_}function Nl(e=" ",t=0){return ce(bn,null,e,t)}function Bl(e,t){const n=ce(en,null,e);return n.staticCount=t,n}function He(e){return e==null||typeof e=="boolean"?ce(ht):H(e)?ce(pe,null,e.slice()):os(e)?qe(e):ce(bn,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wt(e)}function fs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),fs(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!jr(t)?t._ctx=Se:r===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else k(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),s&64?(n=16,t=[Nl(t)]):n=8);e.children=t,e.shapeFlag|=n}function qr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Jn([t.class,s.class]));else if(r==="style")t.style=_n([t.style,s.style]);else if(un(r)){const i=t[r],l=s[r];l&&i!==l&&!(H(i)&&i.includes(l))&&(t[r]=i?[].concat(i,l):l)}else r!==""&&(t[r]=s[r])}return t}function Ne(e,t,n,s=null){We(e,t,7,[n,s])}const Hl=Fr();let kl=0;function Ul(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Hl,i={uid:kl++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ai(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Br(s,r),emitsOptions:Pr(s,r),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=bl.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const Kl=()=>ge||Se;let cn,kn;{const e=hn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(l=>l(i)):r[0](i)}};cn=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),kn=t("__VUE_SSR_SETTERS__",n=>kt=n)}const Wt=e=>{const t=ge;return cn(e),e.scope.on(),()=>{e.scope.off(),cn(t)}},Is=()=>{ge&&ge.scope.off(),cn(null)};function Yr(e){return e.vnode.shapeFlag&4}let kt=!1;function Wl(e,t=!1,n=!1){t&&kn(t);const{props:s,children:r}=e.vnode,i=Yr(e);wl(e,s,i,t),Ll(e,r,n||t);const l=i?Vl(e,t):void 0;return t&&kn(!1),l}function Vl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,cl);const{setup:s}=n;if(s){Qe();const r=e.setupContext=s.length>1?Jl(e):null,i=Wt(e),l=Kt(s,e,0,[e.props,r]),f=Js(l);if(Xe(),i(),(f||e.sp)&&!St(e)&&xr(e),f){if(l.then(Is,Is),t)return l.then(u=>{As(e,u)}).catch(u=>{pn(u,e,0)});e.asyncDep=l}else As(e,l)}else Qr(e)}function As(e,t,n){k(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=pr(t)),Qr(e)}function Qr(e,t,n){const s=e.type;e.render||(e.render=s.render||Ue);{const r=Wt(e);Qe();try{ul(e)}finally{Xe(),r()}}}const Gl={get(e,t){return fe(e,"get",""),e[t]}};function Jl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Gl),slots:e.slots,emit:e.emit,expose:t}}function cs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pr(Fi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ot)return Ot[n](e)},has(t,n){return n in t||n in Ot}})):e.proxy}function zl(e){return k(e)&&"__vccOpts"in e}const ql=(e,t)=>ji(e,t,kt),Yl="3.5.28";let Un;const Ms=typeof window<"u"&&window.trustedTypes;if(Ms)try{Un=Ms.createPolicy("vue",{createHTML:e=>e})}catch{}const Xr=Un?e=>Un.createHTML(e):e=>e,Ql="http://www.w3.org/2000/svg",Xl="http://www.w3.org/1998/Math/MathML",ze=typeof document<"u"?document:null,Fs=ze&&ze.createElement("template"),Zl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?ze.createElementNS(Ql,e):t==="mathml"?ze.createElementNS(Xl,e):n?ze.createElement(e,{is:n}):ze.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>ze.createTextNode(e),createComment:e=>ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const l=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Fs.innerHTML=Xr(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const f=Fs.content;if(s==="svg"||s==="mathml"){const u=f.firstChild;for(;u.firstChild;)f.appendChild(u.firstChild);f.removeChild(u)}t.insertBefore(f,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},eo=Symbol("_vtc");function to(e,t,n){const s=e[eo];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ps=Symbol("_vod"),no=Symbol("_vsh"),so=Symbol(""),ro=/(?:^|;)\s*display\s*:/;function io(e,t,n){const s=e.style,r=le(n);let i=!1;if(n&&!r){if(t)if(le(t))for(const l of t.split(";")){const f=l.slice(0,l.indexOf(":")).trim();n[f]==null&&nn(s,f,"")}else for(const l in t)n[l]==null&&nn(s,l,"");for(const l in n)l==="display"&&(i=!0),nn(s,l,n[l])}else if(r){if(t!==n){const l=s[so];l&&(n+=";"+l),s.cssText=n,i=ro.test(n)}}else t&&e.removeAttribute("style");Ps in e&&(e[Ps]=i?s.display:"",e[no]&&(s.display="none"))}const Os=/\s*!important$/;function nn(e,t,n){if(H(n))n.forEach(s=>nn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=lo(e,t);Os.test(n)?e.setProperty(_t(s),n.replace(Os,""),"important"):e[s]=n}}const $s=["Webkit","Moz","ms"],In={};function lo(e,t){const n=In[t];if(n)return n;let s=it(t);if(s!=="filter"&&s in e)return In[t]=s;s=Ys(s);for(let r=0;r<$s.length;r++){const i=$s[r]+s;if(i in e)return In[t]=i}return t}const Ds="http://www.w3.org/1999/xlink";function js(e,t,n,s,r,i=ci(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ds,t.slice(6,t.length)):e.setAttributeNS(Ds,t,n):n==null||i&&!Xs(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ie(n)?String(n):n)}function Ns(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Xr(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const f=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(f!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Xs(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(r||t)}function oo(e,t,n,s){e.addEventListener(t,n,s)}function fo(e,t,n,s){e.removeEventListener(t,n,s)}const Bs=Symbol("_vei");function co(e,t,n,s,r=null){const i=e[Bs]||(e[Bs]={}),l=i[t];if(s&&l)l.value=s;else{const[f,u]=uo(t);if(s){const b=i[t]=_o(s,r);oo(e,f,b,u)}else l&&(fo(e,f,l,u),i[t]=void 0)}}const Hs=/(?:Once|Passive|Capture)$/;function uo(e){let t;if(Hs.test(e)){t={};let s;for(;s=e.match(Hs);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_t(e.slice(2)),t]}let An=0;const ao=Promise.resolve(),ho=()=>An||(ao.then(()=>An=0),An=Date.now());function _o(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;We(po(s,n.value),t,5,[s])};return n.value=e,n.attached=ho(),n}function po(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const ks=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,go=(e,t,n,s,r,i)=>{const l=r==="svg";t==="class"?to(e,s,l):t==="style"?io(e,n,s):un(t)?Wn(t)||co(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mo(e,t,s,l))?(Ns(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&js(e,t,s,l,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!le(s))?Ns(e,it(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),js(e,t,s,l))};function mo(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ks(t)&&k(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ks(t)&&le(n)?!1:t in e}const bo=ae({patchProp:go},Zl);let Us;function yo(){return Us||(Us=Al(bo))}const vo=((...e)=>{const t=yo().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Ro(s);if(!r)return;const i=t._component;!k(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=n(r,!1,So(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t});function So(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ro(e){return le(e)?document.querySelector(e):e}const xo={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class wo{constructor(){this.comment="",this.numChars=0,this.options={}}}const Mn=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],Ks={"ANSI-Compact":"ANSI Compact"},Lt=e=>Ks[e]?Ks[e]:e;function Co(e){return/[.*+?^${}()|[\]\\]/.test(e)?"\\"+e:e}const Ws=(()=>{const{FULL_WIDTH:e=0,FITTING:t,SMUSHING:n,CONTROLLED_SMUSHING:s}=xo,r={},i={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function l(p,g,a){const d=Co(p.trim().slice(-1))||"@",x=g===a-1?new RegExp(d+d+"?\\s*$"):new RegExp(d+"\\s*$");return p.replace(x,"")}function f(p=-1,g=null){let a={},d,x=[[16384,"vLayout",n],[8192,"vLayout",t],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",n],[64,"hLayout",t],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];d=g!==null?g:p;for(const[T,E,L]of x)d>=T?(d-=T,a[E]===void 0&&(a[E]=L)):E!=="vLayout"&&E!=="hLayout"&&(a[E]=!1);return typeof a.hLayout>"u"?p===0?a.hLayout=t:p===-1?a.hLayout=e:a.hRule1||a.hRule2||a.hRule3||a.hRule4||a.hRule5||a.hRule6?a.hLayout=s:a.hLayout=n:a.hLayout===n&&(a.hRule1||a.hRule2||a.hRule3||a.hRule4||a.hRule5||a.hRule6)&&(a.hLayout=s),typeof a.vLayout>"u"?a.vRule1||a.vRule2||a.vRule3||a.vRule4||a.vRule5?a.vLayout=s:a.vLayout=e:a.vLayout===n&&(a.vRule1||a.vRule2||a.vRule3||a.vRule4||a.vRule5)&&(a.vLayout=s),a}function u(p,g,a=""){return p===g&&p!==a?p:!1}function b(p,g){let a="|/\\[]{}()<>";if(p==="_"){if(a.indexOf(g)!==-1)return g}else if(g==="_"&&a.indexOf(p)!==-1)return p;return!1}function _(p,g){let a="| /\\ [] {} () <>",d=a.indexOf(p),x=a.indexOf(g);if(d!==-1&&x!==-1&&d!==x&&Math.abs(d-x)!==1){const T=Math.max(d,x),E=T+1;return a.substring(T,E)}return!1}function R(p,g){let a="[] {} ()",d=a.indexOf(p),x=a.indexOf(g);return d!==-1&&x!==-1&&Math.abs(d-x)<=1?"|":!1}function F(p,g){return{"/\\":"|","\\/":"Y","><":"X"}[p+g]||!1}function O(p,g,a=""){return p===a&&g===a?a:!1}function V(p,g){return p===g?p:!1}function N(p,g){return b(p,g)}function re(p,g){return _(p,g)}function X(p,g){return p==="-"&&g==="_"||p==="_"&&g==="-"?"=":!1}function U(p,g){return p==="|"&&g==="|"?"|":!1}function W(p,g,a){return g===" "||g===""||g===a&&p!==" "?p:g}function j(p,g,a){if(a.fittingRules&&a.fittingRules.vLayout===e)return"invalid";let d,x=Math.min(p.length,g.length),T,E,L=!1,A;if(x===0)return"invalid";for(d=0;d<x;d++)if(T=p.substring(d,d+1),E=g.substring(d,d+1),T!==" "&&E!==" "){if(a.fittingRules&&a.fittingRules.vLayout===t)return"invalid";if(a.fittingRules&&a.fittingRules.vLayout===n)return"end";if(U(T,E)){L=L||!1;continue}if(A=!1,A=a.fittingRules&&a.fittingRules.vRule1?V(T,E):A,A=!A&&a.fittingRules&&a.fittingRules.vRule2?N(T,E):A,A=!A&&a.fittingRules&&a.fittingRules.vRule3?re(T,E):A,A=!A&&a.fittingRules&&a.fittingRules.vRule4?X(T,E):A,L=!0,!A)return"invalid"}return L?"end":"valid"}function ie(p,g,a){let d=p.length,x=p.length,T,E,L,A=1,D,o,c;for(;A<=d;){for(T=p.slice(Math.max(0,x-A),x),E=g.slice(0,Math.min(d,A)),L=E.length,c="",D=0;D<L;D++)if(o=j(T[D],E[D],a),o==="end")c=o;else if(o==="invalid"){c=o;break}else c===""&&(c="valid");if(c==="invalid"){A--;break}if(c==="end")break;c==="valid"&&A++}return Math.min(d,A)}function Me(p,g,a){let d,x=Math.min(p.length,g.length),T,E,L="",A;const D=a.fittingRules||{};for(d=0;d<x;d++)T=p.substring(d,d+1),E=g.substring(d,d+1),T!==" "&&E!==" "?D.vLayout===t||D.vLayout===n?L+=W(T,E):(A=!1,A=D.vRule5?U(T,E):A,A=!A&&D.vRule1?V(T,E):A,A=!A&&D.vRule2?N(T,E):A,A=!A&&D.vRule3?re(T,E):A,A=!A&&D.vRule4?X(T,E):A,L+=A):L+=W(T,E);return L}function we(p,g,a,d){let x=p.length,T=g.length,E=p.slice(0,Math.max(0,x-a)),L=p.slice(Math.max(0,x-a),x),A=g.slice(0,Math.min(a,T)),D,o,c,h=[],m;for(o=L.length,D=0;D<o;D++)D>=T?c=L[D]:c=Me(L[D],A[D],d),h.push(c);return m=g.slice(Math.min(a,T),T),[...E,...h,...m]}function Te(p,g){const a=" ".repeat(g);return p.map(d=>d+a)}function dt(p,g,a){let d=p[0].length,x=g[0].length,T;return d>x?g=Te(g,d-x):x>d&&(p=Te(p,x-d)),T=ie(p,g,a),we(p,g,T,a)}function Ve(p,g,a){const d=a.fittingRules||{};if(d.hLayout===e)return 0;let x,T=p.length,E=g.length,L=T,A=1,D=!1,o,c,h,m;if(T===0)return 0;e:for(;A<=L;){const v=T-A;for(o=p.substring(v,v+A),c=g.substring(0,Math.min(A,E)),x=0;x<Math.min(A,E);x++)if(h=o.substring(x,x+1),m=c.substring(x,x+1),h!==" "&&m!==" "){if(d.hLayout===t){A=A-1;break e}else if(d.hLayout===n){(h===a.hardBlank||m===a.hardBlank)&&(A=A-1);break e}else if(D=!0,!(d.hRule1&&u(h,m,a.hardBlank)||d.hRule2&&b(h,m)||d.hRule3&&_(h,m)||d.hRule4&&R(h,m)||d.hRule5&&F(h,m)||d.hRule6&&O(h,m,a.hardBlank))){A=A-1;break e}}if(D)break;A++}return Math.min(L,A)}function Ge(p,g,a,d){let x,T,E=[],L,A,D,o,c,h,m,v;const y=d.fittingRules||{};if(typeof d.height!="number")throw new Error("height is not defined.");for(x=0;x<d.height;x++){m=p[x],v=g[x],c=m.length,h=v.length,L=c-a,A=m.slice(0,Math.max(0,L)),D="";const I=Math.max(0,c-a);let w=m.substring(I,I+a),C=v.substring(0,Math.min(a,h));for(T=0;T<a;T++){let S=T<c?w.substring(T,T+1):" ",P=T<h?C.substring(T,T+1):" ";if(S!==" "&&P!==" ")if(y.hLayout===t||y.hLayout===n)D+=W(S,P,d.hardBlank);else{const M=y.hRule1&&u(S,P,d.hardBlank)||y.hRule2&&b(S,P)||y.hRule3&&_(S,P)||y.hRule4&&R(S,P)||y.hRule5&&F(S,P)||y.hRule6&&O(S,P,d.hardBlank)||W(S,P,d.hardBlank);D+=M}else D+=W(S,P,d.hardBlank)}a>=h?o="":o=v.substring(a,a+Math.max(0,h-a)),E[x]=A+D+o}return E}function Ee(p){return new Array(p).fill("")}const Fe=function(p){return Math.max(...p.map(g=>g.length))};function Pe(p,g,a){return p.reduce(function(d,x){return Ge(d,x.fig,x.overlap||0,a)},Ee(g))}function Gt(p,g,a){for(let d=p.length-1;d>0;d--){const x=Pe(p.slice(0,d),g,a);if(Fe(x)<=a.width)return{outputFigText:x,chars:p.slice(d)}}return{outputFigText:Ee(g),chars:p}}function oe(p,g,a){let d,x,T=0,E,L,A,D=a.height,o=[],c,h={chars:[],overlap:T},m=[],v,y,I,w,C;if(typeof D!="number")throw new Error("height is not defined.");L=Ee(D);const S=a.fittingRules||{};for(a.printDirection===1&&(p=p.split("").reverse().join("")),A=p.length,d=0;d<A;d++)if(v=p.substring(d,d+1),y=v.match(/\s/),x=g[v.charCodeAt(0)],w=null,x){if(S.hLayout!==e){for(T=1e4,E=0;E<D;E++)T=Math.min(T,Ve(L[E],x[E],a));T=T===1e4?0:T}if(a.width>0&&(a.whitespaceBreak?(I=Pe(h.chars.concat([{fig:x,overlap:T}]),D,a),w=Pe(m.concat([{fig:I,overlap:h.overlap}]),D,a),c=Fe(w)):(w=Ge(L,x,T,a),c=Fe(w)),c>=a.width&&d>0&&(a.whitespaceBreak?(L=Pe(m.slice(0,-1),D,a),m.length>1&&(o.push(L),L=Ee(D)),m=[]):(o.push(L),L=Ee(D)))),a.width>0&&a.whitespaceBreak&&((!y||d===A-1)&&h.chars.push({fig:x,overlap:T}),y||d===A-1)){for(C=null;w=Pe(h.chars,D,a),c=Fe(w),c>=a.width;)C=Gt(h.chars,D,a),h={chars:C.chars},o.push(C.outputFigText);c>0&&(C?m.push({fig:w,overlap:1}):m.push({fig:w,overlap:h.overlap})),y&&(m.push({fig:x,overlap:T}),L=Ee(D)),d===A-1&&(L=Pe(m,D,a)),h={chars:[],overlap:T};continue}L=Ge(L,x,T,a)}return Fe(L)>0&&o.push(L),a.showHardBlanks||o.forEach(function(P){for(A=P.length,E=0;E<A;E++)P[E]=P[E].replace(new RegExp("\\"+a.hardBlank,"g")," ")}),p===""&&o.length===0&&o.push(new Array(D).fill("")),o}const ne=function(p,g){let a;const d=g.fittingRules||{};if(p==="default")a={hLayout:d.hLayout,hRule1:d.hRule1,hRule2:d.hRule2,hRule3:d.hRule3,hRule4:d.hRule4,hRule5:d.hRule5,hRule6:d.hRule6};else if(p==="full")a={hLayout:e,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(p==="fitted")a={hLayout:t,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(p==="controlled smushing")a={hLayout:s,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(p==="universal smushing")a={hLayout:n,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return a},q=function(p,g){let a={};const d=g.fittingRules||{};if(p==="default")a={vLayout:d.vLayout,vRule1:d.vRule1,vRule2:d.vRule2,vRule3:d.vRule3,vRule4:d.vRule4,vRule5:d.vRule5};else if(p==="full")a={vLayout:e,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(p==="fitted")a={vLayout:t,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(p==="controlled smushing")a={vLayout:s,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(p==="universal smushing")a={vLayout:n,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return a},Oe=function(p,g,a){a=a.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const d=Lt(p);let x=a.split(`
`),T=[],E,L,A;for(L=x.length,E=0;E<L;E++)T=T.concat(oe(x[E],r[d],g));for(L=T.length,A=T[0],E=1;E<L;E++)A=dt(A,T[E],g);return A?A.join(`
`):""};function lt(p,g){let a;if(typeof structuredClone<"u"?a=structuredClone(p):a=JSON.parse(JSON.stringify(p)),a.showHardBlanks=g.showHardBlanks||!1,a.width=g.width||-1,a.whitespaceBreak=g.whitespaceBreak||!1,g.horizontalLayout){const d=ne(g.horizontalLayout,p);d&&Object.assign(a.fittingRules,d)}if(g.verticalLayout){const d=q(g.verticalLayout,p);d&&Object.assign(a.fittingRules,d)}return a.printDirection=g.printDirection!==null&&g.printDirection!==void 0?g.printDirection:p.printDirection,a}const Y=async function(p,g,a){return Y.text(p,g,a)};return Y.text=async function(p,g,a){p=p+"";let d,x;typeof g=="function"?(x=g,d={font:i.font}):typeof g=="string"?(d={font:g},x=a):g?(d=g,x=a):(d={font:i.font},x=a);const T=d.font||i.font;try{const E=await Y.loadFont(T),L=E?Oe(T,lt(E,d),p):"";return x&&x(null,L),L}catch(E){const L=E instanceof Error?E:new Error(String(E));if(x)return x(L),"";throw L}},Y.textSync=function(p,g){p=p+"",typeof g=="string"?g={font:g}:g=g||{};const a=g.font||i.font;let d=lt(Y.loadFontSync(a),g);return Oe(a,d,p)},Y.metadata=async function(p,g){p=p+"";try{const a=await Y.loadFont(p);if(!a)throw new Error("Error loading font.");const d=Lt(p),x=r[d]||{},T=[a,x.comment||""];return g&&g(null,a,x.comment),T}catch(a){const d=a instanceof Error?a:new Error(String(a));if(g)return g(d),null;throw d}},Y.defaults=function(p){return p&&typeof p=="object"&&Object.assign(i,p),typeof structuredClone<"u"?structuredClone(i):JSON.parse(JSON.stringify(i))},Y.parseFont=function(p,g,a=!0){if(r[p]&&!a)return r[p].options;g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const d=new wo,x=g.split(`
`),T=x.shift();if(!T)throw new Error("Invalid font file: missing header");const E=T.split(" "),L={hardBlank:E[0].substring(5,6),height:parseInt(E[1],10),baseline:parseInt(E[2],10),maxLength:parseInt(E[3],10),oldLayout:parseInt(E[4],10),numCommentLines:parseInt(E[5],10),printDirection:E[6]?parseInt(E[6],10):0,fullLayout:E[7]?parseInt(E[7],10):null,codeTagCount:E[8]?parseInt(E[8],10):null};if((L.hardBlank||"").length!==1||[L.height,L.baseline,L.maxLength,L.oldLayout,L.numCommentLines].some(o=>o==null||isNaN(o)))throw new Error("FIGlet header contains invalid values.");if(L.height==null||L.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");L.fittingRules=f(L.oldLayout,L.fullLayout),d.options=L;const D=[];for(let o=32;o<=126;o++)D.push(o);if(D.push(196,214,220,228,246,252,223),x.length<L.numCommentLines+L.height*D.length)throw new Error(`FIGlet file is missing data. Line length: ${x.length}. Comment lines: ${L.numCommentLines}. Height: ${L.height}. Num chars: ${D.length}.`);for(d.comment=x.splice(0,L.numCommentLines).join(`
`),d.numChars=0;x.length>0&&d.numChars<D.length;){const o=D[d.numChars];d[o]=x.splice(0,L.height);for(let c=0;c<L.height;c++)typeof d[o][c]>"u"?d[o][c]="":d[o][c]=l(d[o][c],c,L.height);d.numChars++}for(;x.length>0;){const o=x.shift();if(!o||o.trim()==="")break;let c=o.split(" ")[0],h;if(/^-?0[xX][0-9a-fA-F]+$/.test(c))h=parseInt(c,16);else if(/^-?0[0-7]+$/.test(c))h=parseInt(c,8);else if(/^-?[0-9]+$/.test(c))h=parseInt(c,10);else throw new Error(`Error parsing data. Invalid data: ${c}`);if(h===-1||h<-2147483648||h>2147483647){const m=h===-1?"The char code -1 is not permitted.":`The char code cannot be ${h<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${m}`)}d[h]=x.splice(0,L.height);for(let m=0;m<L.height;m++)typeof d[h][m]>"u"?d[h][m]="":d[h][m]=l(d[h][m],m,L.height);d.numChars++}return r[p]=d,L},Y.loadedFonts=()=>Object.keys(r),Y.clearLoadedFonts=()=>{Object.keys(r).forEach(p=>{delete r[p]})},Y.loadFont=async function(p,g){const a=Lt(p);if(r[a]){const d=r[a].options;return g&&g(null,d),Promise.resolve(d)}try{if(!i.fetchFontIfMissing)throw new Error(`Font is not loaded: ${a}`);const d=await fetch(`${i.fontPath}/${a}.flf`);if(!d.ok)throw new Error(`Network response was not ok: ${d.status}`);const x=await d.text(),T=Y.parseFont(a,x);return g&&g(null,T),T}catch(d){const x=d instanceof Error?d:new Error(String(d));if(g)return g(x),null;throw x}},Y.loadFontSync=function(p){const g=Lt(p);if(r[g])return r[g].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},Y.preloadFonts=async function(p,g){try{for(const a of p){const d=Lt(a),x=await fetch(`${i.fontPath}/${d}.flf`);if(!x.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${d}, status code: ${x.statusText}`);const T=await x.text();Y.parseFont(d,T)}g&&g()}catch(a){const d=a instanceof Error?a:new Error(String(a));if(g){g(d);return}throw a}},Y.fonts=function(p){return new Promise(function(g,a){g(Mn),p&&p(null,Mn)})},Y.fontsSync=function(){return Mn},Y.figFonts=r,Y})(),To=`flf2a$ 11 11 18 -1 23
isometric1.flf

Figlet conversion by Kent Nassen (kentn@cyberspace.org), 8-10-94, based
on the fonts posted by Lennert Stock:

From: stock@fwi.uva.nl (Lennert Stock)
Date: 15 Jul 1994 00:04:25 GMT

Here are some fonts. Non-figlet I'm afraid, if you wanna convert them, be
my guest. I posted the isometric fonts before.

------------------------------------------------------------------------------

     .x%%%%%%x.                                             .x%%%%%%x.
    ,%%%%%%%%%%.                                           .%%%%%%%%%%.
   ,%%%'  )'  \\)                                           :(  \`(  \`%%%.
  ,%x%)________) --------- L e n n e r t   S t o c k       ( _   __ (%x%.
  (%%%~^88P~88P|                                           |~=> .=-~ %%%)
  (%%::. .:,\\ .'                                           \`. /,:. .::%%)
  \`;%:\`\\. \`-' |                                             | \`-' ./':%:'
   \`\`x\`. -===.'                   stock@fwi.uva.nl -------- \`.===- .'x''
    / \`:\`.__.;                                               :.__.':' \\
 .d8b.     ..\`.                                             .'..     .d8b.
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@
$       $@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\__\\ @
 /:/\\:\\ \\:|__|@
 \\:\\~\\:\\/:/  /@
  \\:\\ \\::/  / @
   \\:\\/:/  /  @
    \\::/__/   @
     ~~       @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/ \\:\\__\\@
 \\:\\  \\  \\/__/@
  \\:\\  \\      @
   \\:\\  \\     @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\__\\ @
 /:/__/ \\:|__|@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/__/   @
     ~~       @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\:\\~\\:\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\ \\/__/  @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\ \\/__/@
      \\:\\__\\  @
       \\/__/  @
              @
              @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/_\\:\\__\\@
 \\:\\  /\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/__/     @
  /::\\  \\ ___ @
 /:/\\:\\  /\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
            @
      ___   @
     /\\  \\  @
     \\:\\  \\ @
     /::\\__\\@
  __/:/\\/__/@
 /\\/:/  /   @
 \\::/__/    @
  \\:\\__\\    @
   \\/__/    @
            @@
       ___   @
      /\\  \\  @
      \\:\\  \\ @
  ___ /::\\__\\@
 /\\  /:/\\/__/@
 \\:\\/:/  /   @
  \\::/  /    @
   \\/__/     @
             @
             @
             @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/__/     @
  /::\\__\\____ @
 /:/\\:::::\\__\\@
 \\/_|:|~~|~   @
    |:|  |    @
    |:|  |    @
    |:|  |    @
     \\|__|    @@
      ___ @
     /\\__\\@
    /:/  /@
   /:/  / @
  /:/  /  @
 /:/__/   @
 \\:\\  \\   @
  \\:\\  \\  @
   \\:\\  \\ @
    \\:\\__\\@
     \\/__/@@
      ___     @
     /\\__\\    @
    /::|  |   @
   /:|:|  |   @
  /:/|:|__|__ @
 /:/ |::::\\__\\@
 \\/__/~~/:/  /@
       /:/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /::|  |   @
   /:|:|  |   @
  /:/|:|  |__ @
 /:/ |:| /\\__\\@
 \\/__|:|/:/  /@
     |:/:/  / @
     |::/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/ \\:\\__\\@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
       \\/__/  @
              @
              @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
   \\:\\~\\:\\  \\ @
    \\:\\ \\:\\__\\@
     \\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/_|::\\/:/  /@
    |:|::/  / @
    |:|\\/__/  @
    |:|  |    @
     \\|__|    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\ \\  \\  @
  _\\:\\~\\ \\  \\ @
 /\\ \\:\\ \\ \\__\\@
 \\:\\ \\:\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
     \\:\\  \\   @
      \\:\\  \\  @
      /::\\  \\ @
     /:/\\:\\__\\@
    /:/  \\/__/@
   /:/  /     @
   \\/__/      @
              @
              @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/  /     @
  /:/  /  ___ @
 /:/__/  /\\__\\@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/  /     @
  /:/__/  ___ @
  |:|  | /\\__\\@
  |:|  |/:/  /@
  |:|__/:/  / @
   \\::::/__/  @
    ~~~~      @
              @@
      ___     @
     /\\__\\    @
    /:/ _/_   @
   /:/ /\\__\\  @
  /:/ /:/ _/_ @
 /:/_/:/ /\\__\\@
 \\:\\/:/ /:/  /@
  \\::/_/:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     |\\__\\    @
     |:|  |   @
     |:|  |   @
     |:|__|__ @
 ____/::::\\__\\@
 \\::::/~~/~   @
  ~~|:|~~|    @
    |:|  |    @
    |:|  |    @
     \\|__|    @@
      ___     @
     |\\__\\    @
     |:|  |   @
     |:|  |   @
     |:|__|__ @
     /::::\\__\\@
    /:/~~/~   @
   /:/  /     @
   \\/__/      @
              @
              @@
      ___     @
     /\\  \\    @
     \\:\\  \\   @
      \\:\\  \\  @
       \\:\\  \\ @
 _______\\:\\__\\@
 \\::::::::/__/@
  \\:\\~~\\~~    @
   \\:\\  \\     @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /::::\\  \\  @
  /::::::\\  \\ @
 /:::LS:::\\__\\@
 \\::1994::/  /@
  \\::::::/  / @
   \\::::/  /  @
    \\::/  /   @
     \\/__/    @@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\__\\ @
 /:/\\:\\ \\:|__|@
 \\:\\~\\:\\/:/  /@
  \\:\\ \\::/  / @
   \\:\\/:/  /  @
    \\::/__/   @
     ~~       @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/ \\:\\__\\@
 \\:\\  \\  \\/__/@
  \\:\\  \\      @
   \\:\\  \\     @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\__\\ @
 /:/__/ \\:|__|@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/__/   @
     ~~       @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\:\\~\\:\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\ \\/__/  @
    \\:\\__\\    @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\ \\/__/@
      \\:\\__\\  @
       \\/__/  @
              @
              @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/_\\:\\__\\@
 \\:\\  /\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/__/     @
  /::\\  \\ ___ @
 /:/\\:\\  /\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
            @
      ___   @
     /\\  \\  @
     \\:\\  \\ @
     /::\\__\\@
  __/:/\\/__/@
 /\\/:/  /   @
 \\::/__/    @
  \\:\\__\\    @
   \\/__/    @
            @@
       ___   @
      /\\  \\  @
      \\:\\  \\ @
  ___ /::\\__\\@
 /\\  /:/\\/__/@
 \\:\\/:/  /   @
  \\::/  /    @
   \\/__/     @
             @
             @
             @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/__/     @
  /::\\__\\____ @
 /:/\\:::::\\__\\@
 \\/_|:|~~|~   @
    |:|  |    @
    |:|  |    @
    |:|  |    @
     \\|__|    @@
      ___ @
     /\\__\\@
    /:/  /@
   /:/  / @
  /:/  /  @
 /:/__/   @
 \\:\\  \\   @
  \\:\\  \\  @
   \\:\\  \\ @
    \\:\\__\\@
     \\/__/@@
      ___     @
     /\\__\\    @
    /::|  |   @
   /:|:|  |   @
  /:/|:|__|__ @
 /:/ |::::\\__\\@
 \\/__/~~/:/  /@
       /:/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /::|  |   @
   /:|:|  |   @
  /:/|:|  |__ @
 /:/ |:| /\\__\\@
 \\/__|:|/:/  /@
     |:/:/  / @
     |::/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /:/  \\:\\  \\ @
 /:/__/ \\:\\__\\@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/__\\:\\/:/  /@
      \\::/  / @
       \\/__/  @
              @
              @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
   \\:\\~\\:\\  \\ @
    \\:\\ \\:\\__\\@
     \\:\\/:/  /@
      \\::/  / @
      /:/  /  @
     /:/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\:\\  \\  @
  /::\\~\\:\\  \\ @
 /:/\\:\\ \\:\\__\\@
 \\/_|::\\/:/  /@
    |:|::/  / @
    |:|\\/__/  @
    |:|  |    @
     \\|__|    @@
      ___     @
     /\\  \\    @
    /::\\  \\   @
   /:/\\ \\  \\  @
  _\\:\\~\\ \\  \\ @
 /\\ \\:\\ \\ \\__\\@
 \\:\\ \\:\\ \\/__/@
  \\:\\ \\:\\__\\  @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\  \\    @
     \\:\\  \\   @
      \\:\\  \\  @
      /::\\  \\ @
     /:/\\:\\__\\@
    /:/  \\/__/@
   /:/  /     @
   \\/__/      @
              @
              @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/  /     @
  /:/  /  ___ @
 /:/__/  /\\__\\@
 \\:\\  \\ /:/  /@
  \\:\\  /:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     /\\__\\    @
    /:/  /    @
   /:/  /     @
  /:/__/  ___ @
  |:|  | /\\__\\@
  |:|  |/:/  /@
  |:|__/:/  / @
   \\::::/__/  @
    ~~~~      @
              @@
      ___     @
     /\\__\\    @
    /:/ _/_   @
   /:/ /\\__\\  @
  /:/ /:/ _/_ @
 /:/_/:/ /\\__\\@
 \\:\\/:/ /:/  /@
  \\::/_/:/  / @
   \\:\\/:/  /  @
    \\::/  /   @
     \\/__/    @@
      ___     @
     |\\__\\    @
     |:|  |   @
     |:|  |   @
     |:|__|__ @
 ____/::::\\__\\@
 \\::::/~~/~   @
  ~~|:|~~|    @
    |:|  |    @
    |:|  |    @
     \\|__|    @@
      ___     @
     |\\__\\    @
     |:|  |   @
     |:|  |   @
     |:|__|__ @
     /::::\\__\\@
    /:/~~/~   @
   /:/  /     @
   \\/__/      @
              @
              @@
      ___     @
     /\\  \\    @
     \\:\\  \\   @
      \\:\\  \\  @
       \\:\\  \\ @
 _______\\:\\__\\@
 \\::::::::/__/@
  \\:\\~~\\~~    @
   \\:\\  \\     @
    \\:\\__\\    @
     \\/__/    @@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@
@@
`,Vt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Eo={class:"section"},Lo={class:"content"},Io={__name:"Section",props:{title:String},setup(e){return(t,n)=>(_e(),ke("section",Eo,[se("h2",null,Ke(e.title),1),se("div",Lo,[Lr(t.$slots,"default",{},void 0)])]))}},Yt=Vt(Io,[["__scopeId","data-v-6a6eb6ce"]]),Ao={class:"entry"},Mo={class:"header"},Fo={__name:"Entry",props:{title:String,period:String,institution:String},setup(e){return(t,n)=>(_e(),ke("div",Ao,[se("div",Mo,[se("strong",null,Ke(e.institution),1),se("span",null,Ke(e.period),1)]),se("span",null,Ke(e.title),1)]))}},Po=Vt(Fo,[["__scopeId","data-v-280e6735"]]),Oo=["href"],$o={class:"header"},Do={__name:"ProjectEntry",props:{project:Object},setup(e){const t=Qt(!1);return(n,s)=>(_e(),ke("a",{href:e.project.link,target:"_blank",class:"project-link"},[se("div",{class:"project",onMouseenter:s[0]||(s[0]=r=>t.value=!0),onMouseleave:s[1]||(s[1]=r=>t.value=!1)},[se("div",$o,[se("strong",null,Ke(e.project.name),1),se("span",null,Ke(e.project.tech),1)]),se("p",null,Ke(e.project.description),1)],32)],8,Oo))}},jo=Vt(Do,[["__scopeId","data-v-b812d78d"]]),No={},Bo={class:"fade"};function Ho(e,t){return _e(),ke("div",Bo,[Lr(e.$slots,"default",{},void 0)])}const ko=Vt(No,[["render",Ho],["__scopeId","data-v-baf7554c"]]),Uo={},Ko={class:"top"};function Wo(e,t){return _e(),ke("div",Ko,[...t[0]||(t[0]=[Bl('<nav class="navbar" data-v-b63bf3b5><a href="#about" data-v-b63bf3b5>About</a><a href="#education" data-v-b63bf3b5>Education</a><a href="#projects" data-v-b63bf3b5>Projects</a><a href="#skills" data-v-b63bf3b5>Skills</a></nav><nav class="links" data-v-b63bf3b5><a href="https://github.com/chris-karagiannis" target="_blank" data-v-b63bf3b5><i class="bi bi-github" data-v-b63bf3b5></i></a><a href="https://www.linkedin.com/in/c-karagiannis" target="_blank" data-v-b63bf3b5><i class="bi bi-linkedin" data-v-b63bf3b5></i></a><a href="mailto:chris.karagiannis30@outlook.com" target="_blank" data-v-b63bf3b5><i class="bi bi-envelope-fill" data-v-b63bf3b5></i></a></nav>',2)])])}const Vo=Vt(Uo,[["render",Wo],["__scopeId","data-v-b63bf3b5"]]),Go=[{title:"Bachelor of Software Engineering (Honours)",period:"2024 - 2028",institution:"Adelaide University"},{title:"Bachelor of Commerce (Accounting)",period:"2018 - 2021",institution:"University of South Australia"}],Jo=[{name:"ledger.md",tech:"Vue.js · Python · Flask · SQLite · Jinja",description:"Designed and implemented a flexible accounting and reporting application to address the limitations of custom reports in traditional accounting software, making use of Markdown with reusable predefined Jinja macros to dynamically render accounting data.",link:"https://github.com/Chris-Karagiannis/ledgermd"},{name:"Adelaide Metro Vehicle Live Tracker",tech:"Python · Flask · JavaScript · SQLite",description:"Interactive web application with a map of live locations of Adelaide Metro vehicles on a map. The web application makes of the Adelaide Metro GTFS Realtime API responses into map ready data to be presented on the map.",link:"https://github.com/Chris-Karagiannis/adelaide-metro"}],zo=`
I am currently a second year Bachelor of Software Engineering (Honours) student at Adelaide University. 
My interest in programming came independently using Python to aid in tasks in my role as an accountant. 
This initial exposure sparked my interest to learn more, eventually leading me to pursue software engineering as a career.
`,qo={class:"container"},Yo={class:"hero"},Qo={class:"ascii-art"},Xo={class:"about-text"},Zo={__name:"Home",setup(e){const t=Qt(0),n=Qt([]),s=Qt("CHRIS");Ws.parseFont("Isometric",To);function r(){n.value.length=0;for(let l=0;l<s.value.length;l++)Ws.text(s.value[l],{font:"Isometric"},(f,u)=>{if(f){console.error(f);return}n.value.push(u)})}const i=()=>{t.value+=.05,requestAnimationFrame(i)};return Tr(()=>{r(),i()}),(l,f)=>(_e(),ke("main",qo,[ce(Vo),ce(ko,null,{default:mt(()=>[se("div",Yo,[f[0]||(f[0]=se("h1",{class:"name"},"Chris Karagiannis",-1)),f[1]||(f[1]=se("p",{class:"tagline"},"Software Engineering Student at Adelaide University",-1)),se("pre",Qo,[(_e(!0),ke(pe,null,Tn(n.value,(u,b)=>(_e(),ke("div",{class:"ascii-letter",style:_n({transform:`translateY(${Math.sin(b*.5+t.value)*8}px)`})},Ke(u),5))),256))])]),ce(Yt,{id:"about",title:"About"},{default:mt(()=>[se("p",Xo,Ke(Xt(zo)),1)]),_:1}),ce(Yt,{id:"education",title:"Education"},{default:mt(()=>[(_e(!0),ke(pe,null,Tn(Xt(Go),u=>(_e(),Ht(Po,qr({key:u.title},{ref_for:!0},u),null,16))),128))]),_:1}),ce(Yt,{id:"projects",title:"Projects"},{default:mt(()=>[(_e(!0),ke(pe,null,Tn(Xt(Jo),u=>(_e(),Ht(jo,{key:u.name,project:u},null,8,["project"]))),128))]),_:1}),ce(Yt,{title:"Skills",id:"skills"},{default:mt(()=>[...f[2]||(f[2]=[se("div",{class:"skills"},[se("div",{class:"skill-group"},[se("strong",null,"Languages"),se("p",null,"Python · JavaScript · SQL")]),se("div",{class:"skill-group"},[se("strong",null,"Frameworks & Tools"),se("p",null,"Vue.js · Flask · SQLite")])],-1)])]),_:1})]),_:1})]))}},ef={__name:"App",setup(e){return(t,n)=>(_e(),Ht(Zo))}};vo(ef).mount("#app");
