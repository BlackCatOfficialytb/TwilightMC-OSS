(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Dd=!1;var uo=Array.isArray,Fh=Array.prototype.indexOf,$a=Array.prototype.includes,fo=Array.from,Ud=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,Bh=Object.getOwnPropertyDescriptors,zh=Object.prototype,Gh=Array.prototype,kd=Object.getPrototypeOf,Tc=Object.isExtensible;const Hh=()=>{};function Vh(i){for(var e=0;e<i.length;e++)i[e]()}function Nd(){var i,e,t=new Promise((n,r)=>{i=n,e=r});return{promise:t,resolve:i,reject:e}}function Od(i,e){if(Array.isArray(i))return i;if(!(Symbol.iterator in i))return Array.from(i);const t=[];for(const n of i)if(t.push(n),t.length===e)break;return t}const An=2,ha=4,ho=8,Fd=1<<24,di=16,vi=32,dr=64,vl=128,Wl=256,pi=512,mn=1024,qt=2048,jn=4096,Dn=8192,bn=16384,Ea=32768,es=1<<25,pa=65536,$s=1<<17,Wh=1<<18,Ta=1<<19,jh=1<<20,Si=1<<25,eo=1<<21,oa=1<<22,or=1<<23,wr=Symbol("$state"),Bd=Symbol("component"),Xh=Symbol("legacy props"),qh=Symbol(""),zd=Symbol("attributes"),gl=Symbol("class"),_l=Symbol("style"),xl=Symbol("text"),Ys=Symbol("form reset"),fs=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Yh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),Kh=1,Zh=2,Gd=4,Jh=8,Qh=16,$h=1,ep=4,tp=8,np=16,ip=1,rp=2,Hd={},pn=Symbol("uninitialized"),ap="http://www.w3.org/1999/xhtml";function sp(){console.warn("https://svelte.dev/e/derived_inert")}function op(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function lp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Vd(i){return i===this.v}function cp(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Wd(i){return!cp(i,this.v)}function jd(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function up(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function dp(i,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function fp(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function hp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function pp(i){throw new Error("https://svelte.dev/e/effect_orphan")}function mp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function vp(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function gp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _p(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function xp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function bp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let yp=!1,yn=null;function ma(i){yn=i}function Yt(i,e=!1,t){yn={p:yn,i:!1,c:null,e:null,s:i,x:null,r:kt,l:null}}function Kt(i){var e=yn,t=e.e;if(t!==null){e.e=null;for(var n of t)df(n)}return e.i=!0,yn=e.p,jl(i)}function jl(i={}){return Ud(i,Bd,{value:!0}),i}function Xd(){return!0}let yr=[];function qd(){var i=yr;yr=[],Vh(i)}function Mi(i){if(yr.length===0&&!Ya){var e=yr;queueMicrotask(()=>{e===yr&&qd()})}yr.push(i)}function Sp(){for(;yr.length>0;)qd()}const Mp=-7169;function an(i,e){i.f=i.f&Mp|e}function Xl(i){(i.f&pi)!==0||i.deps===null?an(i,mn):an(i,jn)}function Yd(i,e){(i.f&qt)!==0?e.set(i,qt):(i.f&jn)!==0&&e.get(i)!==qt&&e.set(i,jn),an(i,mn)}function wp(i,e){{const t=document.body;i.autofocus=!0,Mi(()=>{document.activeElement===t&&i.focus()})}}let Ac=!1;function Ep(){Ac||(Ac=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const e of i.target.elements)e[Ys]?.()})},{capture:!0}))}function Aa(i){var e=Dt,t=kt;ai(null),Ai(null);try{return i()}finally{ai(e),Ai(t)}}function Kd(i,e,t,n=t){i.addEventListener(e,()=>Aa(t));const r=i[Ys];r?i[Ys]=()=>{r(),n(!0)}:i[Ys]=()=>n(!0),Ep()}function Tp(i,e,t,n){const r=ts;var a=i.filter(v=>!v.settled),l=e.map(r);if(t.length===0&&a.length===0){n(l);return}var o=kt,c=Ap(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(v=>v.promise)):null;function d(v){if((o.f&bn)===0){c();try{n([...l,...v])}catch(b){yi(b,o)}to()}}var h=Zd();if(t.length===0){u.then(()=>d([])).finally(h);return}function f(){Promise.all(t.map(v=>Rp(v))).then(d).catch(v=>yi(v,o)).finally(h)}u?u.then(()=>{if((o.f&bn)!==0){h();return}c(),f(),to()}):f()}function Ap(){var i=kt,e=Dt,t=yn,n=Mt;return function(a=!0){Ai(i),ai(e),ma(t),a&&(i.f&bn)===0&&(n?.activate(),n?.apply())}}function to(i=!0){Ai(null),ai(null),ma(null),i&&Mt?.deactivate()}function Zd(){var i=kt,e=i.b,t=Mt,n=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(n,i),()=>{e?.update_pending_count(-1,t),t.decrement(n,i)}}function ts(i){var e=An|qt;return kt!==null&&(kt.f|=Ta),{ctx:yn,deps:null,effects:null,equals:Vd,f:e,fn:i,reactions:null,rv:0,v:pn,wv:0,parent:kt,ac:null}}const Ha=Symbol("obsolete");function Rp(i,e,t){let n=kt;n===null&&up();var r=void 0,a=Lr(pn),l=!Dt,o=new Set;return Vp(()=>{var c=kt,u=Nd();r=u.promise;try{Promise.resolve(i()).then(u.resolve,v=>{v!==fs&&u.reject(v)}).finally(to)}catch(v){u.reject(v),to()}var d=Mt;if(l){if((c.f&Ea)!==0)var h=Zd();if(n.b?.is_rendered())d.async_deriveds.get(c)?.reject(Ha);else for(const v of o.values())v.reject(Ha);o.add(u),d.async_deriveds.set(c,u)}const f=(v,b=void 0)=>{h?.(),o.delete(u),b!==Ha&&(d.activate(),b?(a.f|=or,va(a,b)):((a.f&or)!==0&&(a.f^=or),va(a,v)),d.deactivate())};u.promise.then(f,v=>f(null,v||"unknown"))}),Jl(()=>{for(const c of o)c.reject(Ha)}),new Promise(c=>{function u(d){function h(){d===r?c(a):u(r)}d.then(h,h)}u(r)})}function ft(i){const e=ts(i);return gf(e),e}function Jd(i){const e=ts(i);return e.equals=Wd,e}function Cp(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)On(e[t])}}function ql(i){var e,t=kt,n=i.parent;if(!Ki&&n!==null&&i.v!==pn&&(n.f&(bn|Dn))!==0)return sp(),i.v;Ai(n);try{Cp(i),e=yf(i)}finally{Ai(t)}return e}function Qd(i){var e=ql(i);if(!i.equals(e)&&(i.wv=xf(),(!Mt?.is_fork||i.deps===null)&&(Mt!==null?(Mt.capture(i,e,!0),la?.capture(i,e,!0)):i.v=e,i.deps===null))){an(i,mn);return}Ki||(fi!==null?(Zl()||Mt?.is_fork)&&fi.set(i,e):Xl(i))}function Pp(i){if(i.effects!==null)for(const e of i.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&Aa(()=>{e.ac.abort(fs),e.ac=null}),e.fn!==null&&(e.teardown=Hh),is(e,0),$l(e))}function $d(i){if(i.effects!==null)for(const e of i.effects)e.teardown&&e.fn!==null&&ga(e)}let Ao=null,kr=null,Mt=null,la=null,fi=null,bl=null,Ya=!1,Ro=!1,Ka=null,Ks=null;var Rc=0;let Lp=1;class fr{id=Lp++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){kr===null?Ao=kr=this:(kr.next=this,this.prev=kr),kr=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=n=>this.schedule(n)){var n=this.#o.get(e);if(n){this.#o.delete(e);for(var r of n.d)an(r,qt),t(r);for(r of n.m)an(r,jn),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&bn)!==0||(a.f&(qt|jn))===0)){for(var t=a,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(dr|vi))!==0){if((r&mn)===0){n=!0;break}t.f^=mn}}n||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[o,c]of this.#r)an(o,c),this.schedule(o);this.apply();for(var e=Ka=[],t=[],n=Ks=[];this.#i.length>0;){Rc++>1e3&&(this.#f(),Dp());for(const o of this.#u())try{this.#x(o,e,t)}catch(c){throw nf(o),this.#p()||this.discard(),c}}if(Mt=null,n.length>0){var r=fr.ensure();for(const o of n)r.schedule(o)}if(Ka=null,Ks=null,this.#p()){this.#v(t),this.#v(e);for(const[o,c]of this.#o)tf(o,c);n.length>0&&Mt.#m();return}const a=this.#S();if(a){this.#v(t),this.#v(e),a.#d(this);return}this.#r.clear();for(const o of this.#t)o(this);this.#t.clear(),la=this,Cc(t),Cc(e),la=null,this.#n?.resolve();var l=Mt;this.#e===0&&(this.#i.length===0||l!==null)&&this.#f(),l!==null&&(Ei.clear(),l.#m())}#x(e,t,n){e.f^=mn;for(var r=e.first;r!==null;){var a=r.f,l=(a&(vi|dr))!==0,o=l&&(a&mn)!==0,c=o||(a&Dn)!==0||this.#o.has(r);if(!c&&r.fn!==null){l?r.f^=mn:(a&ha)!==0?t.push(r):ps(r)&&((a&di)!==0&&this.add_dirty_reaction(r,jn),ga(r));var u=r.first;if(u!==null){r=u;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#S(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,n]]of this.current)if(!n&&e.current.has(t))return!0;return!1}#d(e){for(const[n,r]of e.current)!this.previous.has(n)&&e.previous.has(n)&&this.previous.set(n,e.previous.get(n)),this.current.set(n,r);for(const[n,r]of e.async_deriveds){const a=this.async_deriveds.get(n);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=n=>{var r=n.reactions;if(r!==null&&!((n.f&An)!==0&&(n.f&(qt|jn))===0))for(const o of r){var a=o.f;if((a&An)!==0)t(o);else{var l=o;a&(oa|di)&&!this.async_deriveds.has(l)&&(this.#r.delete(l),an(l,qt),this.schedule(l))}}};for(const n of this.current.keys())t(n);this.oncommit(()=>e.discard()),e.#f(),Mt=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)Yd(e[t],this.#r)}capture(e,t,n=!1){e.v!==pn&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&or)===0&&(this.current.set(e,[t,n]),fi?.set(e,t)),this.is_fork||(e.v=t)}activate(){Mt=this}deactivate(){Mt=null,fi=null}flush(){try{Ro=!0,Mt=this,this.#m()}finally{Rc=0,bl=null,Ka=null,Ks=null,Ro=!1,Mt=null,fi=null,Ei.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Ha);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let h=Ao;h!==null;h=h.next){var e=h.id<this.id,t=[];for(const[f,[v,b]]of this.current){if(h.current.has(f)){var n=h.current.get(f)[0];if(e&&v!==n)h.current.set(f,[v,b]);else continue}t.push(f)}if(e)for(const[f,v]of this.async_deriveds){const b=h.async_deriveds.get(f);b&&v.promise.then(b.resolve).catch(b.reject)}var r=[...h.current.keys()].filter(f=>!h.current.get(f)[1]);if(!(!h.started||r.length===0)){var a=r.filter(f=>!this.current.has(f));if(a.length===0)e&&h.discard();else if(t.length>0){if(e)for(const f of this.#h)h.unskip_effect(f,v=>{(v.f&(di|oa))!==0?h.schedule(v):h.#v([v])});h.activate();var l=new Set,o=new Map;for(var c of t)ef(c,a,l,o);o=new Map;var u=[...h.current].filter(([f,v])=>{const b=this.current.get(f);return b?b[0]!==v[0]||b[1]!==v[1]:!0}).map(([f])=>f);if(u.length>0)for(const f of this.#a)(f.f&(bn|Dn|$s))===0&&Yl(f,u,o)&&((f.f&(oa|di))!==0?(an(f,qt),h.schedule(f)):h.add_dirty_reaction(f,qt));if(h.#i.length>0&&!h.#c){h.apply();for(var d of h.#u())h.#x(d,[],[])}h.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let n=this.#s.get(t)??0;this.#s.set(t,n+1)}}decrement(e,t){if(this.#e-=1,e){let n=this.#s.get(t)??0;n===1?this.#s.delete(t):this.#s.set(t,n-1)}this.#c||(this.#c=!0,Mi(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,n]of e)this.add_dirty_reaction(t,n);e.clear()}add_dirty_reaction(e,t){(t===qt||this.#r.get(e)!==qt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=Nd()).promise}static ensure(){if(Mt===null){const e=Mt=new fr;!Ro&&!Ya&&Mi(()=>{e.started||e.flush()})}return Mt}apply(){{fi=null;return}}schedule(e){if(bl=e,e.b?.is_pending&&(e.f&(ha|ho|Fd))!==0&&(e.f&Ea)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?Ao=t:e.next=t,t===null?kr=e:t.prev=e,this.linked=!1}}}function Ip(i){var e=Ya,t=la;la=null,Ya=!0;try{for(var n;;){if(Sp(),Mt===null)return n;Mt.flush()}}finally{Ya=e,la=t}}function Dp(){try{mp()}catch(i){yi(i,bl)}}let Gi=null;function Cc(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(bn|Dn))===0&&ps(n)&&(Gi=new Set,ga(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&pf(n),Gi?.size>0)){Ei.clear();for(const r of Gi){if((r.f&(bn|Dn))!==0)continue;const a=[r];let l=r.parent;for(;l!==null;)Gi.has(l)&&(Gi.delete(l),a.push(l)),l=l.parent;for(let o=a.length-1;o>=0;o--){const c=a[o];(c.f&(bn|Dn))===0&&ga(c)}}Gi.clear()}}Gi=null}}function ef(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const r of i.reactions){const a=r.f;(a&An)!==0?ef(r,e,t,n):(a&(oa|di))!==0&&(a&qt)===0&&Yl(r,e,n)&&(an(r,qt),Kl(r))}}function Yl(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const r of i.deps){if($a.call(e,r))return!0;if((r.f&An)!==0&&Yl(r,e,t))return t.set(r,!0),!0}return t.set(i,!1),!1}function Kl(i){Mt.schedule(i)}function tf(i,e){if(!((i.f&vi)!==0&&(i.f&mn)!==0)){(i.f&qt)!==0?e.d.push(i):(i.f&jn)!==0&&e.m.push(i),an(i,mn);for(var t=i.first;t!==null;)tf(t,e),t=t.next}}function nf(i){an(i,mn);for(var e=i.first;e!==null;)nf(e),e=e.next}let no=new Set;const Ei=new Map;let rf=!1;function Lr(i,e){var t={f:0,v:i,reactions:null,equals:Vd,rv:0,wv:0};return t}function ee(i,e){const t=Lr(i);return gf(t),t}function Up(i,e=!1,t=!0){const n=Lr(i);return e||(n.equals=Wd),n}function g(i,e,t=!1){Dt!==null&&(!hi||(Dt.f&$s)!==0)&&Xd()&&(Dt.f&(An|di|oa|$s))!==0&&(Ti===null||!Ti.has(i))&&xp();let n=t?Ut(e):e;return va(i,n,Ks)}var xr=null,yl=0;function va(i,e,t=null){if(!i.equals(e)){Ki?Ei.set(i,e):Ei.has(i)||Ei.set(i,i.v);var n=fr.ensure();if(n.capture(i,e),(i.f&An)!==0){const r=i;(i.f&qt)!==0&&ql(r),fi===null&&Xl(r)}i.wv=xf(),xr=null,yl=0,af(i,qt,t),xr=null,kt!==null&&(kt.f&mn)!==0&&(kt.f&(vi|dr))===0&&(Qn===null?Xp([i]):Qn.push(i)),!n.is_fork&&no.size>0&&!rf&&kp()}return e}function kp(){rf=!1;for(const i of no){(i.f&mn)!==0&&an(i,jn);let e;try{e=ps(i)}catch{e=!0}e&&ga(i)}no.clear()}function Za(i){g(i,i.v+1)}function af(i,e,t){var n=i.reactions;if(n!==null){var r=n.length;if(yl+=r,yl>1e5&&xr===null&&(xr=new Set),xr!==null){if(xr.has(i))return;xr.add(i)}for(var a=0;a<r;a++){var l=n[a],o=l.f,c=(o&qt)===0;if(c&&an(l,e),(o&$s)!==0)no.add(l);else if((o&An)!==0){var u=l;fi?.delete(u),af(u,jn,t)}else if(c){var d=l;(o&di)!==0&&Gi!==null&&Gi.add(d),t!==null?t.push(d):Kl(d)}}}}function Ut(i){if(typeof i!="object"||i===null||wr in i||Bd in i)return i;const e=kd(i);if(e!==zh&&e!==Gh)return i;var t=new Map,n=uo(i),r=ee(0),a=Tr,l=o=>{if(Tr===a)return o();var c=Dt,u=Tr;ai(null),Dc(a);var d=o();return ai(c),Dc(u),d};return n&&t.set("length",ee(i.length)),new Proxy(i,{defineProperty(o,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&gp();var d=t.get(c);return d===void 0?l(()=>{var h=ee(u.value);return t.set(c,h),h}):g(d,u.value,!0),!0},deleteProperty(o,c){var u=t.get(c);if(u===void 0){if(c in o){const d=l(()=>ee(pn));t.set(c,d),Za(r)}}else g(u,pn),Za(r);return!0},get(o,c,u){if(c===wr)return i;var d=t.get(c),h=c in o;if(d===void 0&&(!h||sa(o,c)?.writable)&&(d=l(()=>{var v=Ut(h?o[c]:pn),b=ee(v);return b}),t.set(c,d)),d!==void 0){var f=s(d);return f===pn?void 0:f}return Reflect.get(o,c,u)},getOwnPropertyDescriptor(o,c){this.has?.(o,c);var u=Reflect.getOwnPropertyDescriptor(o,c),d=t.get(c);if(d!==void 0){var h=s(d);if(h===pn)return;if(u&&"value"in u)u.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(o,c){if(c===wr)return!0;var u=t.get(c),d=u!==void 0&&u.v!==pn||Reflect.has(o,c);if(u!==void 0||(kt!==null||Dt!==null)&&(!d||sa(o,c)?.writable)){u===void 0&&(u=l(()=>{var f=d?Ut(o[c]):pn,v=ee(f);return v}),t.set(c,u));var h=s(u);if(h===pn)return!1}return d},set(o,c,u,d){var h=t.get(c),f=c in o;if(n&&c==="length")for(var v=u;v<h.v;v+=1){var b=t.get(v+"");b!==void 0?g(b,pn):v in o&&(b=l(()=>ee(pn)),t.set(v+"",b))}if(h===void 0)(!f||sa(o,c)?.writable)&&(h=l(()=>ee(void 0)),g(h,Ut(u)),t.set(c,h));else{f=h.v!==pn;var S=l(()=>Ut(u));g(h,S)}var m=Reflect.getOwnPropertyDescriptor(o,c);if(m?.set&&m.set.call(d,u),!f){if(n&&typeof c=="string"){var p=t.get("length"),w=Number(c);Number.isInteger(w)&&w>=p.v&&g(p,w+1)}Za(r)}return!0},ownKeys(o){s(r);var c=Reflect.ownKeys(o).filter(h=>{var f=t.get(h);return f===void 0||f.v!==pn});for(var[u,d]of t)d.v!==pn&&!(u in o)&&c.push(u);return c},setPrototypeOf(){_p()}})}function Pc(i){try{if(i!==null&&typeof i=="object"&&wr in i)return i[wr]}catch{}return i}function sf(i,e){return Object.is(Pc(i),Pc(e))}var Lc,of,lf,cf;function Np(){if(Lc===void 0){Lc=window,of=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;lf=sa(e,"firstChild").get,cf=sa(e,"nextSibling").get,Tc(i)&&(i[gl]=void 0,i[zd]=null,i[_l]=void 0,i.__e=void 0),Tc(t)&&(t[xl]=void 0)}}function Xi(i=""){return document.createTextNode(i)}function ns(i){return lf.call(i)}function hs(i){return cf.call(i)}function C(i,e){return ns(i)}function yt(i,e=!1){{var t=ns(i);return t instanceof Comment&&t.data===""?hs(t):t}}function K(i,e=!1){return ns(i)}function y(i,e=1,t=!1){let n=i;for(;e--;)n=hs(n);return n}function Op(i){i.textContent=""}function uf(){return!1}function Fp(i,e,t){return t?document.createElement(i,{is:t}):document.createElement(i)}function Bp(i){var e=kt;if(e===null)return Dt.f|=or,i;if((e.f&Ea)===0&&(e.f&ha)===0)throw i;yi(i,e)}function yi(i,e){if(i===Hd)throw i;if(!(e!==null&&(e.f&bn)!==0)){for(;e!==null;){if((e.f&vl)!==0&&(e.f&(bn|es))===0){if((e.f&Ea)===0)throw i;try{e.b.error(i);return}catch(t){i=t}}e=e.parent}throw i}}function zp(i){kt===null&&(Dt===null&&pp(),hp()),Ki&&fp()}function Gp(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function Qi(i,e){var t=kt;t!==null&&(t.f&Dn)!==0&&(i|=Dn);var n={ctx:yn,deps:null,nodes:null,f:i|qt|pi,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Mt?.register_created_effect(n);var r=n;if((i&ha)!==0)Ka!==null?Ka.push(n):fr.ensure().schedule(n);else if(e!==null){try{ga(n)}catch(l){throw On(n),l}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Ta)===0&&(r=r.first,(i&di)!==0&&(i&pa)!==0&&r!==null&&(r.f|=pa))}if(r!==null&&(r.parent=t,t!==null&&Gp(r,t),Dt!==null&&(Dt.f&An)!==0&&(i&dr)===0)){var a=Dt;(a.effects??=[]).push(r)}return n}function Zl(){return Dt!==null&&!hi}function Jl(i){const e=Qi(ho,null);return an(e,mn),e.teardown=i,e}function en(i){zp();var e=kt.f,t=!Dt&&(e&vi)!==0&&yn!==null&&!yn.i;if(t){var n=yn;(n.e??=[]).push(i)}else return df(i)}function df(i){return Qi(ha|jh,i)}function Hp(i){fr.ensure();const e=Qi(dr|Ta,i);return(t={})=>new Promise(n=>{t.outro?Er(e,()=>{On(e),n(void 0)}):(On(e),n(void 0))})}function ff(i){return Qi(ha,i)}function Vp(i){return Qi(oa|Ta,i)}function Ql(i,e=0){return Qi(ho|e,i)}function ge(i,e=[],t=[],n=[]){Tp(n,e,t,r=>{Qi(ho,()=>{i(...r.map(s))})})}function po(i,e=0){var t=Qi(di|e,i);return t}function $n(i){return Qi(vi|Ta,i)}function hf(i){var e=i.teardown;if(e!==null){const t=Ki,n=Dt;Ic(!0),ai(null);try{e.call(null)}catch(r){yi(r,i.parent)}finally{Ic(t),ai(n)}}}function $l(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const r=t.ac;r!==null&&Aa(()=>{r.abort(fs)});var n=t.next;(t.f&dr)!==0?t.parent=null:On(t,e),t=n}}function Wp(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&vi)===0&&On(e),e=t}}function On(i,e=!0){var t=!1;(e||(i.f&Wh)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(jp(i.nodes.start,i.nodes.end),t=!0),i.f|=es,$l(i,e&&!t),is(i,0);var n=i.nodes&&i.nodes.t;if(n!==null)for(const a of n)a.stop();hf(i),i.f^=es,i.f|=bn;var r=i.parent;r!==null&&r.first!==null&&pf(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=i.b=null}function jp(i,e){for(;i!==null;){var t=i===e?null:hs(i);i.remove(),i=t}}function pf(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function Er(i,e,t=!0){var n=[];i.f|=Wl,mf(i,n,!0);var r=()=>{t&&On(i),e&&e()},a=n.length;if(a>0){var l=()=>--a||r();for(var o of n)o.out(l)}else r()}function mf(i,e,t){if((i.f&Dn)===0){i.f^=Dn;var n=i.nodes&&i.nodes.t;if(n!==null)for(const o of n)(o.is_global||t)&&e.push(o);for(var r=i.first;r!==null;){var a=r.next;if((r.f&dr)===0){var l=(r.f&pa)!==0||(r.f&vi)!==0&&(i.f&di)!==0;mf(r,e,l?t:!1)}r=a}}}function io(i){i.f&=~Wl,vf(i,!0)}function vf(i,e){if((i.f&Wl)===0&&(i.f&Dn)!==0){i.f^=Dn,(i.f&mn)===0&&(an(i,qt),fr.ensure().schedule(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&pa)!==0||(t.f&vi)!==0;vf(t,r?e:!1),t=n}var a=i.nodes&&i.nodes.t;if(a!==null)for(const l of a)(l.is_global||e)&&l.in()}}function ec(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var r=t===n?null:hs(t);e.append(t),t=r}}let Ki=!1;function Ic(i){Ki=i}let Dt=null,hi=!1;function ai(i){Dt=i}let kt=null;function Ai(i){kt=i}let Ti=null;function gf(i){Dt!==null&&((Dt.f&eo)!==0||(Dt.f&An)!==0)&&(Ti??=new Set).add(i)}let Nn=null,Vn=0,Qn=null;function Xp(i){Qn=i}let _f=1,Sr=0,Tr=Sr;function Dc(i){Tr=i}function xf(){return++_f}function ps(i){var e=i.f;if((e&qt)!==0)return!0;if((e&jn)!==0){for(var t=i.deps,n=t.length,r=0;r<n;r++){var a=t[r];if(ps(a)&&Qd(a),a.wv>i.wv)return!0}(e&pi)!==0&&fi===null&&an(i,mn)}return!1}function bf(i,e,t=!0){var n=i.reactions;if(n!==null&&!(Ti!==null&&Ti.has(i)))for(var r=0;r<n.length;r++){var a=n[r];(a.f&An)!==0?bf(a,e,!1):e===a&&(t?an(a,qt):(a.f&mn)!==0&&an(a,jn),Kl(a))}}function yf(i){var e=Nn,t=Vn,n=Qn,r=Dt,a=Ti,l=yn,o=hi,c=Tr,u=i.f;Nn=null,Vn=0,Qn=null,Dt=(u&(vi|dr))===0?i:null,Ti=null,ma(i.ctx),hi=!1,Tr=++Sr,i.ac!==null&&(Aa(()=>{i.ac.abort(fs)}),i.ac=null);try{i.f|=eo;var d=i.fn,h=d();i.f|=Ea;var f=Uc(i);if(Xd()&&Qn!==null&&!hi&&f!==null&&(i.f&(An|jn|qt))===0)for(var v=0;v<Qn.length;v++)bf(Qn[v],i);if(r!==null&&r!==i){if(Sr++,r.deps!==null)for(let b=0;b<t;b+=1)r.deps[b].rv=Sr;if(e!==null)for(const b of e)b.rv=Sr;Qn!==null&&(n===null?n=Qn:n.push(...Qn))}return(i.f&or)!==0&&(i.f^=or),h}catch(b){return Uc(i),Bp(b)}finally{i.f^=eo,Nn=e,Vn=t,Qn=n,Dt=r,Ti=a,ma(l),hi=o,Tr=c}}function Uc(i){var e=i.deps,t=Mt?.is_fork;if(Nn!==null){var n;if(t||is(i,Vn),e!==null&&Vn>0)for(e.length=Vn+Nn.length,n=0;n<Nn.length;n++)e[Vn+n]=Nn[n];else i.deps=e=Nn;if(Zl()&&(i.f&pi)!==0)for(n=Vn;n<e.length;n++)(e[n].reactions??=[]).push(i)}else!t&&e!==null&&Vn<e.length&&(is(i,Vn),e.length=Vn);return e}function qp(i,e){let t=e.reactions;if(t!==null){var n=Fh.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}if(t===null&&(e.f&An)!==0&&(Nn===null||!$a.call(Nn,e))){var a=e;(a.f&pi)!==0&&(a.f^=pi),a.v!==pn&&Xl(a),a.ac!==null&&Aa(()=>{a.ac.abort(fs),a.ac=null,an(a,qt)}),Pp(a),is(a,0)}}function is(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)qp(i,t[n])}function ga(i){var e=i.f;if((e&bn)===0){an(i,mn);var t=kt;kt=i;try{(e&(di|Fd))!==0?Wp(i):$l(i),hf(i);var n=yf(i);i.teardown=typeof n=="function"?n:null,i.wv=_f;var r;Dd&&yp&&(i.f&qt)!==0&&i.deps}finally{kt=t}}}async function Yp(){await Promise.resolve(),Ip()}function s(i){var e=i.f,t=(e&An)!==0;if(Dt!==null&&!hi){var n=kt!==null&&(kt.f&bn)!==0;if(!n&&(Ti===null||!Ti.has(i))){var r=Dt.deps;if((Dt.f&eo)!==0)i.rv<Sr&&(i.rv=Sr,Nn===null&&r!==null&&r[Vn]===i?Vn++:Nn===null?Nn=[i]:Nn.push(i));else{Dt.deps??=[],$a.call(Dt.deps,i)||Dt.deps.push(i);var a=i.reactions;a===null?i.reactions=[Dt]:$a.call(a,Dt)||a.push(Dt)}}}if(Ki&&Ei.has(i))return Ei.get(i);if(t){var l=i;if(Ki){var o=l.v;return((l.f&mn)===0&&l.reactions!==null||Mf(l))&&(o=ql(l)),Ei.set(l,o),o}var c=(l.f&pi)===0&&!hi&&Dt!==null&&(Dt.f&pi)!==0,u=(l.f&Ea)===0;ps(l)&&(c&&(l.f|=pi),Qd(l)),c&&!u&&($d(l),Sf(l))}if(fi?.has(i))return fi.get(i);if((i.f&or)!==0)throw i.v;return i.v}function Sf(i){if(i.f|=pi,i.deps!==null)for(const t of i.deps){var e=t.reactions;e===null?t.reactions=[i]:$a.call(e,i)||e.push(i),(t.f&An)!==0&&(t.f&pi)===0&&($d(t),Sf(t))}}function Mf(i){if(i.v===pn)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(Ei.has(e)||(e.f&An)!==0&&Mf(e))return!0;return!1}function Ra(i){var e=hi;try{return hi=!0,i()}finally{hi=e}}const Kp=["touchstart","touchmove"];function Zp(i){return Kp.includes(i)}const Va=Symbol("events"),wf=new Set,Sl=new Set;function Jp(i,e,t,n={}){function r(a){if(n.capture||Ml.call(e,a),!a.cancelBubble)return Aa(()=>t?.call(this,a))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?(r.__removed=!1,Mi(()=>{r.__removed||e.addEventListener(i,r,n)})):e.addEventListener(i,r,n),r}function Fn(i,e,t,n,r){var a={capture:n,passive:r},l=Jp(i,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Jl(()=>{l.__removed=!0,e.removeEventListener(i,l,a)})}function $(i,e,t){(e[Va]??={})[i]=t}function on(i){for(var e=0;e<i.length;e++)wf.add(i[e]);for(var t of Sl)t(i)}let Co=null,Po=!1;function Ml(i){var e=this,t=e.ownerDocument,n=i.type,r=i.composedPath?.()||[],a=r[0]||i.target;Co=i,Po||(Po=!0,setTimeout(()=>{Po=!1,Co=null}));var l=0,o=Co===i&&i[Va];if(o){var c=r.indexOf(o);if(c!==-1&&(e===document||e===window)){i[Va]=e;return}var u=r.indexOf(e);if(u===-1)return;c<=u&&(l=c)}if(a=r[l]||i.target,a!==e){Ud(i,"currentTarget",{configurable:!0,get(){return a||t}});var d=Dt,h=kt;ai(null),Ai(null);try{for(var f,v=[];a!==null&&a!==e;){try{var b=a[Va]?.[n];b!=null&&(!a.disabled||i.target===a)&&b.call(a,i)}catch(S){f?v.push(S):f=S}if(i.cancelBubble)break;l++,a=l<r.length?r[l]:null}if(f){for(let S of v)queueMicrotask(()=>{throw S});throw f}}finally{i[Va]=e,delete i.currentTarget,ai(d),Ai(h)}}}const Qp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function $p(i){return Qp?.createHTML(i)??i}function em(i){var e=Fp("template");return e.innerHTML=$p(i.replaceAll("<!>","<!---->")),e.content}function ro(i,e){var t=kt;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function W(i,e){var t=(e&ip)!==0,n=(e&rp)!==0,r,a=!i.startsWith("<!>");return()=>{r===void 0&&(r=em(a?i:"<!>"+i),t||(r=ns(r)));var l=n||of?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=ns(l),c=l.lastChild;ro(o,c)}else ro(l,l);return l}}function Hi(i=""){{var e=Xi(i+"");return ro(e,e),e}}function rs(){var i=document.createDocumentFragment(),e=document.createComment(""),t=Xi();return i.append(e,t),ro(e,t),i}function N(i,e){i!==null&&i.before(e)}function tm(i){let e=0,t=Lr(0),n;return()=>{Zl()&&(s(t),Ql(()=>(e===0&&(n=Ra(()=>i(()=>Za(t)))),e+=1,()=>{Mi(()=>{e-=1,e===0&&(n?.(),n=void 0,Za(t))})})))}}var nm=pa|Ta;function im(i,e,t,n){new rm(i,e,t,n)}class rm{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#u=null;#m=tm(()=>(this.#u=Lr(this.#h),()=>{this.#u=null}));constructor(e,t,n,r){this.#t=e,this.#e=t,this.#s=a=>{var l=kt;l.b=this,l.f|=vl,n(a)},this.parent=kt.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=po(()=>{this.#b()},nm)}#x(){try{this.#i=$n(()=>this.#s(this.#t))}catch(e){this.error(e)}}#S(e){const t=this.#e.failed,{reset:n,invoke_onerror:r}=this.#_(e);Mi(r),t&&(this.#r=$n(()=>{t(this.#t,()=>e,()=>n)}))}#_(e){var t=!1,n=!1;const r=()=>{if(!this.#d()){if(t){lp();return}t=!0,n&&bp(),this.#r!==null&&Er(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{n=!0,this.#e.onerror?.(e,r),n=!1}catch(l){yi(l,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(bn|es))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=$n(()=>e(this.#t)),Mi(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),n=Xi(),r=!1;if(t.append(n),this.#i=this.#y(()=>{try{return $n(()=>this.#s(n))}catch(a){try{this.error(a),r=!0}catch(l){yi(l,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(Mt);return}this.#c===0&&(this.#t.before(t),this.#o=null,Er(this.#a,()=>{this.#a=null}),this.#f(Mt))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=$n(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();ec(this.#i,e);const t=this.#e.pending;this.#a=$n(()=>t(this.#t))}else this.#f(Mt)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){Yd(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=kt,n=Dt,r=yn;Ai(this.#n),ai(this.#n),ma(this.#n.ctx);try{return fr.ensure(),e()}finally{Ai(t),ai(n),ma(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&Er(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Mi(()=>{this.#p=!1,this.#u&&va(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),s(this.#u)}error(e){if(e===Hd||!this.#e.onerror&&!this.#e.failed)throw e;Mt?.is_fork?(this.#i&&Mt.skip_effect(this.#i),this.#a&&Mt.skip_effect(this.#a),this.#r&&Mt.skip_effect(this.#r),Mt.oncommit(()=>{this.#d()||this.#w(e)})):this.#w(e)}#w(e){this.#i&&(On(this.#i),this.#i=null),this.#a&&(On(this.#a),this.#a=null),this.#r&&(On(this.#r),this.#r=null);let t=this.#e.failed;const n=r=>{if(this.#d())return;const{reset:a,invoke_onerror:l}=this.#_(r);l(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return $n(()=>{var o=kt;o.b=this,o.f|=vl,t(this.#t,()=>r,()=>a)})}catch(o){return yi(o,this.#n.parent),null}}))};Mi(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){yi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(n,a=>yi(a,this.#n&&this.#n.parent)):n(r)}})}}function Z(i,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(i[xl]??=i.nodeValue)&&(i[xl]=t,i.nodeValue=`${t}`)}function am(i,e){return sm(i,e)}const gs=new Map;function sm(i,{target:e,anchor:t,props:n={},events:r,context:a,intro:l=!0,transformError:o}){Np();var c=void 0,u=Hp(()=>{var d=t??e.appendChild(Xi());im(d,{pending:()=>{}},v=>{Yt({});var b=yn;a&&(b.c=a),r&&(n.$$events=r),c=i(v,n)||jl(),Kt()},o);var h=new Set,f=v=>{for(var b=0;b<v.length;b++){var S=v[b];if(!h.has(S)){h.add(S);var m=Zp(S);for(const x of[e,document]){var p=gs.get(x);p===void 0&&(p=new Map,gs.set(x,p));var w=p.get(S);w===void 0?(x.addEventListener(S,Ml,{passive:m}),p.set(S,1)):p.set(S,w+1)}}}};return f(fo(wf)),Sl.add(f),()=>{for(var v of h)for(const m of[e,document]){var b=gs.get(m),S=b.get(v);--S==0?(m.removeEventListener(v,Ml),b.delete(v),b.size===0&&gs.delete(m)):b.set(v,S)}Sl.delete(f),d!==t&&d.parentNode?.removeChild(d)}});return om.set(c,u),c}let om=new WeakMap;class Ef{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),n=this.#l.get(t);if(n)io(n),this.#s.delete(t);else{var r=this.#e.get(t);r&&(io(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[a,l]of this.#t){if(this.#t.delete(a),a===e)break;const o=this.#e.get(l);o&&(On(o.effect),this.#e.delete(l))}for(const[a,l]of this.#l){if(a===t||this.#s.has(a))continue;const o=()=>{if(Array.from(this.#t.values()).includes(a)){var u=document.createDocumentFragment();ec(l,u),u.append(Xi()),this.#e.set(a,{effect:l,fragment:u})}else On(l);this.#s.delete(a),this.#l.delete(a)};this.#n||!n?(this.#s.add(a),Er(l,o,!1)):o()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[n,r]of this.#e)t.includes(n)||(On(r.effect),this.#e.delete(n))};ensure(e,t){var n=Mt,r=uf();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),l=Xi();a.append(l),this.#e.set(e,{effect:$n(()=>t(l)),fragment:a})}else this.#l.set(e,$n(()=>t(this.anchor)));if(this.#t.set(n,e),r){for(const[o,c]of this.#l)o===e?n.unskip_effect(c):n.skip_effect(c);for(const[o,c]of this.#e)o===e?n.unskip_effect(c.effect):n.skip_effect(c.effect);n.oncommit(this.#i),n.ondiscard(this.#a)}else this.#i(n)}}function Re(i,e,t=!1){var n=new Ef(i),r=t?pa:0;function a(l,o){n.ensure(l,o)}po(()=>{var l=!1;e((o,c=0)=>{l=!0,a(c,o)}),l||a(-1,null)},r)}const lm=Symbol("NaN");function Tf(i,e,t){var n=new Ef(i);po(()=>{var r=e();r!==r&&(r=lm),n.ensure(r,t)})}function wl(i,e){return e}function cm(i,e,t){for(var n=[],r=e.length,a,l=e.length,o=0;o<r;o++){let h=e[o];Er(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=i.outrogroups;El(i,fo(a.done)),f.delete(a),f.size===0&&(i.outrogroups=null)}}else l-=1},!1)}if(l===0){var c=n.length===0&&t!==null&&i.pending.size===0;if(c){var u=t,d=u.parentNode;Op(d),d.append(u),i.items.clear()}El(i,e,!c)}else a={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(a)}function El(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const l of i.pending.values())for(const o of l)n.add(i.items.get(o).e)}for(var r=0;r<e.length;r++){var a=e[r];if(n?.has(a)){a.f|=Si;const l=document.createDocumentFragment();ec(a,l)}else On(e[r],t)}}var kc;function At(i,e,t,n,r,a=null){var l=i,o=new Map,c=(e&Gd)!==0;if(c){var u=i;l=u.appendChild(Xi())}var d=null,h=Jd(()=>{var w=t();return uo(w)?w:w==null?[]:fo(w)}),f=new Map,v=!0;function b(w){if((p.effect.f&bn)===0){p.pending.delete(w);var x=s(h);p.fallback=d,um(p,x,l,e,n),d!==null&&(x.length===0?(d.f&Si)===0?io(d):(d.f^=Si,Wa(d,null,l)):Er(d,()=>{d=null}))}}function S(w){p.pending.delete(w)}var m=po(()=>{for(var w=s(h),x=w.length,T=new Set,A=Mt,I=uf(),R=0;R<x;R+=1){var G=w[R],_=n(G,R),M=v?null:o.get(_);M?(M.v&&va(M.v,G),M.i&&va(M.i,R),I&&A.unskip_effect(M.e)):(M=dm(o,v?l:kc??=Xi(),G,_,R,r,e,t),v||(M.e.f|=Si),o.set(_,M)),T.add(_)}if(x===0&&a&&!d&&(v?d=$n(()=>a(l)):(d=$n(()=>a(kc??=Xi())),d.f|=Si)),x>T.size&&dp(),!v)if(f.set(A,T),I){for(const[te,B]of o)T.has(te)||A.skip_effect(B.e);A.oncommit(b),A.ondiscard(S)}else b(A);s(h)}),p={effect:m,items:o,pending:f,outrogroups:null,fallback:d};v=!1}function Da(i){for(;i!==null&&(i.f&vi)===0;)i=i.next;return i}function um(i,e,t,n,r){var a=(n&Jh)!==0,l=e.length,o=i.items,c=Da(i.effect.first),u,d=null,h,f=[],v=[],b,S,m,p;if(a)for(p=0;p<l;p+=1)b=e[p],S=r(b,p),m=o.get(S).e,(m.f&Si)===0&&(m.nodes?.a?.measure(),(h??=new Set).add(m));for(p=0;p<l;p+=1){if(b=e[p],S=r(b,p),m=o.get(S).e,i.outrogroups!==null)for(const M of i.outrogroups)M.pending.delete(m),M.done.delete(m);if((m.f&Dn)!==0&&(io(m),a&&(m.nodes?.a?.unfix(),(h??=new Set).delete(m))),(m.f&Si)!==0)if(m.f^=Si,m===c)Wa(m,null,t);else{var w=d?d.next:c;m===i.effect.last&&(i.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),er(i,d,m),er(i,m,w),Wa(m,w,t),d=m,f=[],v=[],c=Da(d.next);continue}if(m!==c){if(u!==void 0&&u.has(m)){if(f.length<v.length){var x=v[0],T;d=x.prev;var A=f[0],I=f[f.length-1];for(T=0;T<f.length;T+=1)Wa(f[T],x,t);for(T=0;T<v.length;T+=1)u.delete(v[T]);er(i,A.prev,I.next),er(i,d,A),er(i,I,x),c=x,d=I,p-=1,f=[],v=[]}else u.delete(m),Wa(m,c,t),er(i,m.prev,m.next),er(i,m,d===null?i.effect.first:d.next),er(i,d,m),d=m;continue}for(f=[],v=[];c!==null&&c!==m;)(u??=new Set).add(c),v.push(c),c=Da(c.next);if(c===null)continue}(m.f&Si)===0&&f.push(m),d=m,c=Da(m.next)}if(i.outrogroups!==null){for(const M of i.outrogroups)M.pending.size===0&&(El(i,fo(M.done)),i.outrogroups?.delete(M));i.outrogroups.size===0&&(i.outrogroups=null)}if(c!==null||u!==void 0){var R=[];if(u!==void 0)for(m of u)(m.f&Dn)===0&&R.push(m);for(;c!==null;)(c.f&Dn)===0&&c!==i.fallback&&R.push(c),c=Da(c.next);var G=R.length;if(G>0){var _=(n&Gd)!==0&&l===0?t:null;if(a){for(p=0;p<G;p+=1)R[p].nodes?.a?.measure();for(p=0;p<G;p+=1)R[p].nodes?.a?.fix()}cm(i,R,_)}}a&&Mi(()=>{if(h!==void 0)for(m of h)m.nodes?.a?.apply()})}function dm(i,e,t,n,r,a,l,o){var c=(l&Kh)!==0?(l&Qh)===0?Up(t,!1,!1):Lr(t):null,u=(l&Zh)!==0?Lr(r):null;return{v:c,i:u,e:$n(()=>(a(e,c??t,u??r,o),()=>{i.delete(n)}))}}function Wa(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,a=e&&(e.f&Si)===0?e.nodes.start:t;n!==null;){var l=hs(n);if(a.before(n),n===r)return;n=l}}function er(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const Nc=[...` 	
\r\f \v\uFEFF`];function fm(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var r of Object.keys(t))if(t[r])n=n?n+" "+r:r;else if(n.length)for(var a=r.length,l=0;(l=n.indexOf(r,l))>=0;){var o=l+a;(l===0||Nc.includes(n[l-1]))&&(o===n.length||Nc.includes(n[o]))?n=(l===0?"":n.substring(0,l))+n.substring(o+1):l=o}}return n===""?null:n}function hm(i,e){return i==null?null:String(i)}function mt(i,e,t,n,r,a){var l=i[gl];if(l!==t||l===void 0){var o=fm(t,n,a);o==null?i.removeAttribute("class"):i.className=o,i[gl]=t}else if(a&&r!==a)for(var c in a){var u=!!a[c];(r==null||u!==!!r[c])&&i.classList.toggle(c,u)}return a}function Ln(i,e,t,n){var r=i[_l];if(r!==e){var a=hm(e);a==null?i.removeAttribute("style"):i.style.cssText=a,i[_l]=e}return n}function pm(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function mm(i,e){var t=i.__defaultValue,n=i.multiple,r=n?t??[]:null;if(!(n&&!uo(r))){i.selectedIndex;for(var a of i.options){var l=ca(a);pm(a,n?r.includes(l):sf(l,t))}}}function Af(i,e,t=!1){if(i.multiple){if(e==null)return;if(!uo(e))return op();for(var n of i.options)n.selected=e.includes(ca(n));return}for(n of i.options){var r=ca(n);if(sf(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function _a(i){var e=new MutationObserver(t=>{t.every(vm)||("__defaultValue"in i&&mm(i),"__value"in i&&Af(i,i.__value))});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Jl(()=>{e.disconnect()})}function xa(i,e,t=e){var n=new WeakSet,r=!0;Kd(i,"change",a=>{var l=a?"[selected]":":checked",o;if(i.multiple)o=[].map.call(i.querySelectorAll(l),ca);else{var c=i.querySelector(l)??i.querySelector("option:not([disabled])");o=c&&ca(c)}t(o),i.__value=o,Mt!==null&&n.add(Mt)}),ff(()=>{var a=e();if(i===document.activeElement){var l=Mt;if(n.has(l))return}if(Af(i,a,r),r&&a===void 0){var o=i.querySelector(":checked");o!==null&&(a=ca(o),t(a))}i.__value=a,r=!1})}function ca(i){return"__value"in i?i.__value:i.value}function vm(i){if(i.target.closest("selectedcontent")!==null)return!0;if(i.type==="childList"){var e=[...i.addedNodes,...i.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const gm=Symbol("is custom element"),_m=Symbol("is html"),xm=Yh?"progress":"PROGRESS";function as(i,e){var t=tc(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==xm)||(i.value=e??"")}function Ja(i,e){var t=tc(i);t.checked!==(t.checked=e??void 0)&&(i.checked=e)}function Fe(i,e,t,n){var r=tc(i),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(i[qh]=t),t==null?i.removeAttribute(e):typeof t!="string"&&bm(i).has(e)?i[e]=t:i.setAttribute(e,t))}function tc(i){return i[zd]??={[gm]:i.nodeName.includes("-"),[_m]:i.namespaceURI===ap}}var Oc=new Map;function bm(i){var e=i.getAttribute("is")||i.nodeName,t=Oc.get(e);if(t)return t;Oc.set(e,t=new Set);for(var n,r=i,a=Element.prototype;a!==r;){n=Bh(r);for(var l in n)n[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&t.add(l);r=kd(r)}return t}function Wt(i,e,t=e){var n=new WeakSet;Kd(i,"input",async r=>{var a=r?i.defaultValue:i.value;if(a=Lo(i)?Io(a):a,t(a),Mt!==null&&n.add(Mt),await Yp(),a!==(a=e())){var l=i.selectionStart,o=i.selectionEnd,c=i.value.length;if(i.value=a??"",o!==null){var u=i.value.length;l===o&&o===c&&u>c?(i.selectionStart=u,i.selectionEnd=u):(i.selectionStart=l,i.selectionEnd=Math.min(o,u))}}}),Ra(e)==null&&i.value&&(t(Lo(i)?Io(i.value):i.value),Mt!==null&&n.add(Mt)),Ql(()=>{var r=e();if(i===document.activeElement){var a=Mt;if(n.has(a))return}Lo(i)&&r===Io(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function Lo(i){var e=i.type;return e==="number"||e==="range"}function Io(i){return i===""?null:+i}function Do(i,e){return i===e||i?.[wr]===e}function Rf(i=jl(),e,t,n){var r=yn.r,a=kt;return ff(()=>{var l,o;return Ql(()=>{l=o,o=[],Ra(()=>{Do(t(...o),i)||(e(i,...o),l&&Do(t(...l),i)&&e(null,...l))})}),()=>{let c=a;for(;c!==r&&c.parent!==null&&c.parent.f&es;)c=c.parent;const u=()=>{o&&Do(t(...o),i)&&e(null,...o)},d=c.teardown;c.teardown=()=>{u(),d?.()}}}),i}let _s=!1;function ym(i){var e=_s;try{return _s=!1,[i(),_s]}finally{_s=e}}function tt(i,e,t,n){var r=!0,a=(t&tp)!==0,l=(t&np)!==0,o=n,c=!0,u=void 0,d=()=>l&&r?(u??=ts(n),s(u)):(c&&(c=!1,o=l?Ra(n):n),o);let h;if(a){var f=wr in i||Xh in i;h=sa(i,e)?.set??(f&&e in i?T=>i[e]=T:void 0)}var v,b=!1;a?[v,b]=ym(()=>i[e]):v=i[e],v===void 0&&n!==void 0&&(v=d(),h&&(vp(),h(v)));var S;if(S=()=>{var T=i[e];return T===void 0?d():(c=!0,T)},(t&ep)===0)return S;if(h){var m=i.$$legacy;return(function(T,A){return arguments.length>0?((!A||m||b)&&h(A?S():T),T):S()})}var p=!1,w=((t&$h)!==0?ts:Jd)(()=>(p=!1,S()));a&&s(w);var x=kt;return(function(T,A){if(arguments.length>0){const I=A?s(w):a?Ut(T):T;return g(w,I),p=!0,o!==void 0&&(o=I),T}return Ki&&p||(x.f&bn)!==0?w.v:s(w)})}function Pi(i){yn===null&&jd(),en(()=>{const e=Ra(i);if(typeof e=="function")return e})}function nc(i){yn===null&&jd(),Pi(()=>()=>Ra(i))}const Sm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Sm);function Mm(i){const e=[];for(const t of String(i??"")){const n=t.codePointAt(0);if(!(n===65039||n===65038)){if(n===8205){e.push("200d");continue}e.push(n.toString(16))}}return e.join("-")}const Cf=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310","23f9","2b07","1f50d","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","1f980","2b50","1f9ed","1f5e1","1f52e","1f409","1f47e","2693","1f3b2","1f4a3","1f36a","1f331","1f9bb","1f4da","2696","1f3c6","1f451","1f9ea","1f52d","1f6e9"]),wm=["1f980","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","2b50","1f9ed","1f310","1f409","1f47e","1f4a3","1f36a","1f331","1f9ea","1f52e","1f52d","2693","1f3b2","1f4da","2696","1f3c6","1f451","1f5e1","1f9f1","1f9e9"],Pf=["grass","dirt","stone","diamond","gold","iron","brick","planks","creeper","squarecreeper","enderman","skeleton","steve","herobrine","chicken","fox","bee","meat","enderpearl","netherstar","flame","tnt","gear","magitech","fabricmc","quiltmc","neoforged","modrinth","ftb_logo","prismlauncher"],Tl="/";function Em(i){const e=Mm(i);return Cf.has(e)?`${Tl}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}function mo(i){const e=String(i??"").trim();if(!e)return null;if(e.startsWith("twemoji:")){const t=e.slice(8);return Cf.has(t)?`${Tl}twemoji/${t}.svg`.replace(/\/{2,}/g,"/"):null}if(e.startsWith("prism:")){const t=e.slice(6);return Pf.includes(t)?`${Tl}instance-icons/prism/${t}.svg`.replace(/\/{2,}/g,"/"):null}return null}var Tm=W('<img draggable="false"/>'),Am=W("<span> </span>");function wi(i,e){Yt(e,!0);let t=tt(e,"emoji",3,""),n=tt(e,"size",3,null),r=tt(e,"alt",3,""),a=tt(e,"class",3,"");const l=ft(()=>Em(t())),o=ft(()=>r()||t()),c=ft(()=>n()?`${n()}px`:"1em");var u=rs(),d=yt(u);{var h=v=>{var b=Tm();ge(()=>{Fe(b,"src",s(l)),Fe(b,"alt",s(o)),Fe(b,"title",r()||void 0),mt(b,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),Ln(b,`width: ${s(c)??""}; height: ${s(c)??""};`),Fe(b,"aria-hidden",r()?void 0:"true")}),N(v,b)},f=v=>{var b=Am(),S=K(b,!0);ge(()=>{mt(b,1,`inline-block ${a()??""}`),Fe(b,"aria-hidden",r()?void 0:"true"),Fe(b,"title",r()||void 0),Z(S,t())}),N(v,b)};Re(d,v=>{s(l)?v(h):v(f,-1)})}N(i,u),Kt()}var Rm=W('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Rename</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),Cm=W('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Pm(i,e){Yt(e,!0);let t=tt(e,"selected",3,!1),n=tt(e,"gameRunning",3,!1),r=tt(e,"menuOpen",3,!1);const a=ft(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function l(){const G=mo(e.instance.icon_key);if(G)return G;const _=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&_?_(e.instance.icon_path):"/logo.png"}var o=Cm(),c=C(o),u=C(c),d=K(u),h=y(u,2),f=C(h),v=K(f,!0),b=y(f,2),S=C(b),m=K(S,!0),p=y(S,2),w=K(p,!0),x=y(h,2),T=y(c,2),A=K(T,!0),I=y(T,2);{var R=G=>{var _=Rm(),M=yt(_),te=y(M,2),B=C(te),k=y(B,2),z=y(k,2),j=y(z,2),be=C(j);wi(be,{emoji:"📂"});var le=y(j,2),ce=y(le,4);ge(()=>B.disabled=n()),$("click",M,function(...he){e.onclosemenu?.apply(this,he)}),$("click",B,()=>{e.onclosemenu(),e.onplay()}),$("click",k,()=>{e.onclosemenu(),e.onedit()}),$("click",z,()=>{e.onclosemenu(),e.onrename?.()}),$("click",j,()=>{e.onclosemenu(),e.onopenfolder()}),$("click",le,function(...he){e.onviewlogs?.apply(this,he)}),$("click",ce,()=>{e.onclosemenu(),e.ondelete()}),N(G,_)};Re(I,G=>{r()&&G(R)})}ge((G,_)=>{mt(o,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),Fe(o,"aria-selected",t()),Fe(o,"title",e.instance.name),Fe(d,"src",G),Z(v,e.instance.name),Z(m,e.instance.minecraft_version),mt(p,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${s(a)??""}`),Z(w,e.instance.loader_type),Z(A,_)},[()=>l(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),$("click",o,function(...G){e.onselect?.apply(this,G)}),$("dblclick",o,function(...G){e.onplay?.apply(this,G)}),$("keydown",o,G=>{(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),e.onplay())}),$("contextmenu",o,G=>{G.preventDefault(),e.onselect(),e.ontogglemenu()}),Fn("error",d,G=>{G.currentTarget.dataset.f||(G.currentTarget.dataset.f="1",G.currentTarget.src="/logo.png")}),$("click",x,G=>{G.stopPropagation(),e.ontogglemenu()}),N(i,o),Kt()}on(["click","dblclick","keydown","contextmenu"]);var Lm=W('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Im=W('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Dm=W('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Um=W('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function km(i,e){Yt(e,!0);var t=Um();At(t,21,()=>e.instances,n=>n.id,(n,r)=>{{let a=ft(()=>e.selectedId===s(r).id),l=ft(()=>e.menuFor===s(r).id);Pm(n,{get instance(){return s(r)},get selected(){return s(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return s(l)},onselect:()=>e.onselect?.(s(r).id),onplay:()=>e.onplay?.(s(r).id),ontogglemenu:()=>e.ontogglemenu?.(s(r).id),onedit:()=>e.onedit?.(s(r)),onrename:()=>e.onrename?.(s(r)),onopenfolder:()=>e.onopenfolder?.(s(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(s(r).id),get onclosemenu(){return e.onclosemenu}})}},n=>{var r=rs(),a=yt(r);{var l=d=>{var h=Lm(),f=K(h,!0);ge(()=>Z(f,e.error)),N(d,h)},o=d=>{var h=Im(),f=K(h);ge(v=>Z(f,`No instances match "${v??""}".`),[()=>e.query.trim()]),N(d,h)},c=ft(()=>e.query.trim()),u=d=>{var h=Dm(),f=y(C(h),6);$("click",f,()=>e.onadd?.()),N(d,h)};Re(a,d=>{e.error?d(l):s(c)?d(o,1):d(u,-1)})}N(n,r)}),N(i,t),Kt()}on(["click"]);const ss=[];function Ca(i){return ss.push(i),i}function Pa(i){const e=ss.lastIndexOf(i);e!==-1&&ss.splice(e,1)}function Fc(){return ss[ss.length-1]??null}var Nm=W('<button type="button" role="tab"> </button>'),Om=W('<button type="button"><img alt="" class="h-12 w-12 object-contain" draggable="false" loading="lazy"/> <span class="w-full truncate text-center text-[10px] text-(--text-muted)"> </span></button>'),Fm=W('<div class="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2"></div>'),Bm=W('<button type="button"><img alt="" class="h-8 w-8" draggable="false" loading="lazy"/></button>'),zm=W('<div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2"></div>'),Gm=W('<div class="flex items-center gap-2 rounded border border-(--border) p-2"><img alt="" class="h-10 w-10 object-contain" draggable="false"/> <span class="truncate text-[11px] text-(--text-muted)"> </span></div>'),Hm=W('<p role="alert" class="text-[11px] text-red-400"> </p>'),Vm=W(`<div class="flex flex-col items-start gap-3"><p class="text-[12px] text-(--text-muted)">Pick a PNG, JPG, SVG, WEBP or ICO from disk. The file is copied into the instance
            directory, so the instance stays self-contained.</p> <!> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-xs font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-50"> </button> <!></div>`),Wm=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Choose an instance icon"><div class="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-xl"><header class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h2 class="text-sm font-semibold">Instance icon</h2> <button type="button" class="rounded px-2 py-1 text-xs text-(--text-muted) hover:bg-(--bg-subtle)" aria-label="Close icon picker">Close</button></header> <div class="flex gap-1 border-b border-(--border) px-3 py-2" role="tablist" aria-label="Icon sources"></div> <div class="min-h-0 flex-1 overflow-y-auto p-4"><!></div></div></div>');function Lf(i,e){Yt(e,!0);let t=tt(e,"currentKey",3,""),n=tt(e,"currentPath",3,"");const r=[{id:"prism",label:"Prism / Freesm"},{id:"twemoji",label:"Twemoji"},{id:"custom",label:"Custom image…"}];let a=ee("prism"),l=ee(!1),o=ee("");const c="/",u=_=>`${c}${_}`.replace(/\/{2,}/g,"/"),d=_=>u(`instance-icons/prism/${_}.svg`),h=_=>u(`twemoji/${_}.svg`),f=_=>_.replace(/_/g," ").replace(/\b\w/g,M=>M.toUpperCase()).replace(/^(Fabricmc|Quiltmc|Neoforged|Ftb)\b/,M=>({Fabricmc:"Fabric",Quiltmc:"Quilt",Neoforged:"NeoForge",Ftb:"FTB"})[M]??M);Pi(()=>{const _=Ca(()=>e.onclose?.());return()=>Pa(_)});function v(_){e.onpick?.(_),e.onclose?.()}async function b(){if(!s(l)){g(l,!0),g(o,"");try{const _=await e.oncustom?.();if(_==null)return;e.onclose?.()}catch(_){g(o,String(_),!0)}finally{g(l,!1)}}}var S=Wm(),m=C(S),p=C(m),w=y(C(p),2),x=y(p,2);At(x,21,()=>r,_=>_.id,(_,M)=>{var te=Nm(),B=K(te,!0);ge(()=>{Fe(te,"aria-selected",s(a)===s(M).id),mt(te,1,`rounded px-2.5 py-1 text-xs font-medium transition-colors ${s(a)===s(M).id?"bg-(--accent)/15 text-(--accent)":"text-(--text-muted) hover:bg-(--bg-subtle)"}`),Z(B,s(M).label)}),$("click",te,()=>g(a,s(M).id,!0)),N(_,te)});var T=y(x,2),A=C(T);{var I=_=>{var M=Fm();At(M,20,()=>Pf,te=>te,(te,B)=>{var k=Om(),z=C(k),j=y(z,2),be=K(j,!0);ge((le,ce,he)=>{mt(k,1,`group flex flex-col items-center gap-1 rounded border p-2 transition-colors ${t()===`prism:${B}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),Fe(k,"title",le),Fe(z,"src",ce),Z(be,he)},[()=>f(B),()=>d(B),()=>f(B)]),$("click",k,()=>v(`prism:${B}`)),N(te,k)}),N(_,M)},R=_=>{var M=zm();At(M,20,()=>wm,te=>te,(te,B)=>{var k=Bm(),z=K(k);ge(j=>{mt(k,1,`flex items-center justify-center rounded border p-2 transition-colors ${t()===`twemoji:${B}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),Fe(k,"title",B),Fe(k,"aria-label",`Twemoji ${B}`),Fe(z,"src",j)},[()=>h(B)]),$("click",k,()=>v(`twemoji:${B}`)),N(te,k)}),N(_,M)},G=_=>{var M=Vm(),te=y(C(M),2);{var B=le=>{var ce=Gm(),he=C(ce),Q=y(he,2),H=K(Q,!0);ge(()=>{Fe(he,"src",n()),Z(H,n())}),N(le,ce)};Re(te,le=>{n()&&le(B)})}var k=y(te,2),z=K(k,!0),j=y(k,2);{var be=le=>{var ce=Hm(),he=K(ce,!0);ge(()=>Z(he,s(o))),N(le,ce)};Re(j,le=>{s(o)&&le(be)})}ge(()=>{k.disabled=s(l),Z(z,s(l)?"Copying…":"Choose file…")}),$("click",k,b),N(_,M)};Re(A,_=>{s(a)==="prism"?_(I):s(a)==="twemoji"?_(R,1):_(G,-1)})}$("click",w,function(..._){e.onclose?.apply(this,_)}),N(i,S),Kt()}on(["click"]);const os="twilight_user_accent",ic="twilight_custom_themes",Bc="#06B6D4",zc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],Gc="#0F172A",jm="#FFFFFF",Xm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function xs(i){return Xm[i]??[]}function ms(i){let e=i.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function Hc(i){const e=t=>{const n=parseInt(i.replace("#","").substring(t,t+2),16)/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function qm(i){const e=Hc(i),t=1.05/(e+.05);return(e+.05)/(Hc(Gc)+.05)>=t?Gc:jm}function ls(i,{persist:e=!0}={}){const t=ms(i);if(!t)return!1;const n=document.documentElement;return n.style.setProperty("--user-accent",t),n.style.setProperty("--on-accent",qm(t)),e&&localStorage.setItem(os,t),!0}function Ym(){localStorage.removeItem(os);const i=document.documentElement;i.style.removeProperty("--user-accent"),i.style.removeProperty("--on-accent")}function Al(){return ms(localStorage.getItem(os)??"")}function Km(){const i=Al();i&&ls(i)}const vo=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:zc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...zc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:xs("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:xs("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:xs("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:xs("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],rc="twilight-dark",Rl={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},Zm=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function Jm(i){let e="";for(const t of i){const n=t.codePointAt(0);n>=65&&n<=90?e+=String.fromCharCode(n+32):n>=97&&n<=122||n>=48&&n<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function If(i){const e=i&&typeof i=="object"?i:{},t={};for(const[n,r]of Object.entries(Rl))t[n]=ms(e[n]??"")??r;return t}function Qm(i){return typeof i=="string"&&i.startsWith("custom:")}function Df(i){return Mr().find(e=>e.id===i)??null}function Mr(){try{const i=JSON.parse(localStorage.getItem(ic)??"[]");return Array.isArray(i)?i.filter(e=>e&&typeof e=="object"&&Qm(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:If(e.tokens)})):[]}catch{return[]}}function Vc({name:i,dark:e,tokens:t}){const n=String(i??"").trim()||"Custom theme",r={id:`custom:${Jm(n)||"theme"}`,name:n,dark:!!e,tokens:If(t)},a=[...Mr().filter(l=>l.id!==r.id),r];return localStorage.setItem(ic,JSON.stringify(a)),r}function $m(i){const e=Mr().filter(t=>t.id!==i);return localStorage.setItem(ic,JSON.stringify(e)),e}function Wc(){try{const i=getComputedStyle(document.documentElement),e=(n,r)=>{const a=i.getPropertyValue(n).trim();return ms(a)??r},t={};for(const[n,r]of Object.entries(Rl)){const a=`--${n.replace(/(\d)$/,"-$1")}`;t[n]=e(a,r)}return t}catch{return{...Rl}}}const ev=new Set(vo.map(i=>i.id));function ac(i){const e=(i??"").trim();return e==="dark"?rc:e==="light"?"twilight-light":ev.has(e)||Df(e)?e:null}function tv(i){const e=i.tokens;return{id:i.id,label:i.name,dark:i.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:i.name,hex:e.accent1}],tokens:e}}function ua(i){const e=ac(i);return e?vo.find(t=>t.id===e)??tv(Df(e)):null}function ja(i){return ua(i)?.dark??!0}const nv=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Uo="";function iv(i){const e=ua(i)??ua(rc);if(!e||e.id===Uo)return e;const t=Uo==="";Uo=e.id;const n=document.documentElement;for(const r of nv)n.style.removeProperty(r);n.classList.toggle("dark",e.dark),n.classList.toggle("light",!e.dark);for(const r of vo)r.cls&&n.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;n.style.setProperty("--bg-1",r.bg1),n.style.setProperty("--bg-2",r.bg2),n.style.setProperty("--bg-3",r.bg3),n.style.setProperty("--border-1",r.border1),n.style.setProperty("--fg-1",r.fg1),n.style.setProperty("--fg-2",r.fg2),n.style.setProperty("--accent-1",r.accent1),n.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(os),ls(r.accent1,{persist:!1})}else t||(localStorage.removeItem(os),ls(e.accent,{persist:!1}));return e}const rv="/".replace(/\/{2,}/g,"/"),Uf=[{id:"fluent-auto",label:"Fluent (Auto)",hint:"Freesm Fluent · follows the theme"},{id:"fluent",label:"Fluent Light",hint:"Freesm Fluent · light ink"},{id:"fluent_dark",label:"Fluent Dark",hint:"Freesm Fluent · white ink"},{id:"breeze_dark",label:"Breeze Dark",hint:"Prism · KDE Breeze dark"},{id:"breeze_light",label:"Breeze Light",hint:"Prism · KDE Breeze light"},{id:"pe_colored",label:"Prism PE Colored",hint:"Prism · full-color PE"},{id:"twemoji",label:"Twemoji",hint:"Emoji glyphs · the classic look"}],kf=new Set(Uf.map(i=>i.id)),Nf="twilight-icon-pack",av={instances:"viewfolder",folder:"viewfolder",server:"server",settings:"settings",accounts:"accounts",new:"new",launch:"launch",edit:"instance-settings",copy:"copy",export:"export",delete:"delete",shortcut:"shortcut",mods:"centralmods",refresh:"refresh",console:"log",tag:"tag",star:"star",help:"help",about:"about",screenshots:"screenshots",worlds:"worlds"},jc={kill:"⏹",download:"⬇",search:"🔍",sun:"☀",moon:"🌙",package:"📦",modrinth:"🧩",success:"✅",warning:"⚠",error:"⛔",instances:"📁",folder:"📁",server:"🌐",settings:"⚙",accounts:"👤",new:"➕",launch:"▶",edit:"✏",copy:"⧉",export:"⤓",delete:"🗑",shortcut:"🔗",mods:"📦",refresh:"🔄",console:"📜",tag:"🏷",star:"★",help:"❔",about:"ℹ",screenshots:"🖼",worlds:"🌐"};let Xa=null;function ao(){if(Xa)return Xa;const i=localStorage.getItem(Nf);return Xa=kf.has(i??"")?i:"fluent-auto",Xa}function sv(i){kf.has(i)&&(Xa=i,localStorage.setItem(Nf,i),Of())}let Cl="";function ov(i){const e=ac(i)??String(i??"");e!==Cl&&(Cl=e,Of())}function lv(i=ao()){return i!=="fluent-auto"?i:ja(Cl||"twilight-dark")?"fluent_dark":"fluent"}const Pl=new Set;function Of(){for(const i of Pl)i()}function cv(i){return Pl.add(i),()=>Pl.delete(i)}function uv(i,e=null){const t=e??ao(),n=i;if(t==="twemoji"){const l=jc[i];return l?{kind:"emoji",emoji:l,label:n}:null}const r=av[i];if(r)return{kind:"svg",src:`${rv}icons/${lv(t)}/${r}.svg`,label:n};const a=jc[i];return a?{kind:"emoji",emoji:a,label:n}:null}var dv=W('<img draggable="false"/>'),fv=W("<span></span>");function Vt(i,e){Yt(e,!0);let t=tt(e,"name",3,""),n=tt(e,"pack",3,null),r=tt(e,"size",3,null),a=tt(e,"alt",3,""),l=tt(e,"class",3,""),o=ee(0);const c=cv(()=>g(o,s(o)+1));nc(c);const u=ft(()=>(s(o),uv(t(),n()))),d=ft(()=>r()?`${r()}px`:"1em"),h=ft(()=>a()||t());let f=ee(!1);en(()=>{s(u)?.kind,g(f,!1)});var v=rs(),b=yt(v);{var S=w=>{var x=rs(),T=yt(x);Tf(T,()=>s(u).src,A=>{var I=dv();ge(()=>{Fe(I,"src",s(u).src),Fe(I,"alt",s(h)),Fe(I,"title",a()||void 0),mt(I,1,`shrink-0 select-none ${l()??""}`),Ln(I,`width:${s(d)??""};height:${s(d)??""};object-fit:contain`),Fe(I,"aria-hidden",a()?void 0:"true")}),Fn("error",I,()=>g(f,!0)),N(A,I)}),N(w,x)},m=w=>{{let x=ft(()=>a()||void 0);wi(w,{get emoji(){return s(u).emoji},get size(){return r()},get alt(){return s(x)},get class(){return l()}})}},p=w=>{var x=fv();ge(()=>{mt(x,1,`inline-block shrink-0 ${l()??""}`),Ln(x,`width:${s(d)??""};height:${s(d)??""}`)}),N(w,x)};Re(b,w=>{s(u)?.kind==="svg"&&!s(f)?w(S):s(u)?.kind==="emoji"?w(m,1):w(p,-1)})}N(i,v),Kt()}const ri=Ut({dialog:null,toasts:[]});function hv(i){return new Promise(e=>{ri.dialog={...i,resolve:e}})}function bs(i){const e=ri.dialog;ri.dialog=null,e?.resolve?.(i)}function pv(i={}){return hv({variant:"prompt",...i})}let mv=0;function xi(i,e="info",{title:t="",duration:n=4500}={}){const r=++mv;return ri.toasts.push({id:r,message:i,kind:e,title:t,duration:n}),ri.toasts.length>6&&ri.toasts.shift(),r}function Xc(i){const e=ri.toasts.findIndex(t=>t.id===i);e!==-1&&ri.toasts.splice(e,1)}var vv=W('<div class="p-6 text-center text-(--step-body) text-(--fg-2)">Resolving mods and their dependencies…</div>'),gv=W('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div></div>'),_v=W('<tr><td class="px-3 py-2 align-top"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent-1)"/></td><td> </td><td class="px-3 py-2 align-top text-(--fg-2)"> </td><td class="px-3 py-2 align-top font-mono text-[11px] text-(--fg-2)"> </td><td> </td><td class="px-3 py-2 text-right align-top text-(--fg-2)"> </td></tr>'),xv=W('<tr><td colspan="6" class="px-3 py-6 text-center text-(--fg-2)">The queue is empty.</td></tr>'),bv=W('<table class="w-full text-left text-(--step-body)"><thead class="sticky top-0 z-10 bg-(--bg-3)"><tr class="border-b border-(--border-1) text-(--step-caption) uppercase tracking-wide text-(--fg-2)"><th class="w-[36px] px-3 py-2 font-medium"></th><th class="px-3 py-2 font-medium">Mod</th><th class="w-[130px] px-3 py-2 font-medium">Version</th><th class="w-[220px] px-3 py-2 font-medium">File</th><th class="w-[190px] px-3 py-2 font-medium">Source</th><th class="w-[80px] px-3 py-2 text-right font-medium">Size</th></tr></thead><tbody></tbody></table>'),yv=W('<span class="text-rose-400"> </span>'),Sv=W(`<div role="presentation" class="fixed inset-0 z-[60] flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[560px] w-[880px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Confirm download</h3> <p class="text-(--step-meta) text-(--fg-2)">You're about to download the following mods — only rows with a check will be downloaded.</p></div> <button class="text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="min-w-0 truncate text-(--step-meta) text-(--fg-2)"><!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Back</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Downloads every checked file (SHA-1 verified) into this instance's mods folder"> </button></div></div></div></div>`);function Mv(i,e){Yt(e,!0);let t=tt(e,"items",19,()=>[]);const n=["fabric","quilt","forge","neoforge"],r=ft(()=>{const Q=e.instance.loader_type.toLowerCase();return n.includes(Q)?Q:""});let a=ee(null),l=ee(!0),o=ee(""),c=ee(Ut({})),u=ee(!1),d=ee("");function h(Q){return Q>=1024*1024?`${(Q/1024/1024).toFixed(1)} MB`:Q>=1024?`${(Q/1024).toFixed(1)} KB`:`${Q} B`}function f(Q){return Q.required_by.length?`required by ${Q.required_by.join(", ")}`:Q.installed?"already installed":"your selection"}function v(){return s(a)?.filter(Q=>s(c)[Q.project_id]).length??0}function b(Q){g(c,{...s(c),[Q.project_id]:!s(c)[Q.project_id]},!0)}function S(Q,H){const ae=window.__TAURI__?.core;return ae?ae.invoke(Q,H):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function m(){if(!s(a)||s(u))return;const Q=s(a).filter(H=>s(c)[H.project_id]).map(H=>({url:H.url,filename:H.filename,sha1:H.sha1}));if(Q.length){g(u,!0),g(d,"");try{const H=await S("install_modrinth_batch",{instanceId:e.instance.id,files:Q});xi(`Downloaded ${H.length} mod file${H.length===1?"":"s"}.`,"success"),e.ondownloaded?.(H)}catch(H){g(d,String(H),!0),xi(`Download failed: ${H}`,"error")}finally{g(u,!1)}}}Pi(()=>{const Q=Ca(()=>s(u)?void 0:e.onclose?.());return S("preview_mod_download_queue",{instanceId:e.instance.id,projects:t(),gameVersion:e.instance.minecraft_version,loader:s(r)}).then(H=>{g(a,H,!0),g(c,Object.fromEntries(H.map(ae=>[ae.project_id,!ae.installed])),!0),g(l,!1)}).catch(H=>{g(o,String(H),!0),g(l,!1)}),()=>Pa(Q)});var p=Sv(),w=C(p),x=C(w),T=y(C(x),2),A=y(x,2),I=C(A);{var R=Q=>{var H=vv();N(Q,H)},G=Q=>{var H=gv(),ae=C(H),Te=K(ae,!0);ge(()=>Z(Te,s(o))),N(Q,H)},_=Q=>{var H=bv(),ae=y(C(H));At(ae,21,()=>s(a),Te=>Te.project_id,(Te,Ee)=>{var Ue=_v(),ke=C(Ue),Ve=C(ke),Ge=y(ke),rt=K(Ge,!0),bt=y(Ge),$e=K(bt,!0),ie=y(bt),gt=K(ie,!0),He=y(ie),Se=K(He,!0),Ie=y(He),Oe=K(Ie,!0);ge((Be,je)=>{mt(Ue,1,`border-b border-(--border-1)/50 ${s(Ee).installed?"bg-(--bg-3)/60":s(Ee).required_by.length?"bg-(--brand-tint)/40":""}`),Ja(Ve,s(c)[s(Ee).project_id]??!1),mt(Ge,1,`px-3 py-2 align-top font-medium ${s(Ee).installed?"opacity-60":"text-(--fg-1)"}`),Z(rt,s(Ee).title),Z($e,s(Ee).version),Fe(ie,"title",s(Ee).filename),Z(gt,s(Ee).filename),mt(He,1,`px-3 py-2 align-top text-[11px] ${s(Ee).required_by.length?"text-(--accent-1)":"text-(--fg-2)"}`),Z(Se,Be),Z(Oe,je)},[()=>f(s(Ee)),()=>h(s(Ee).size)]),$("change",Ve,()=>b(s(Ee))),N(Te,Ue)},Te=>{var Ee=xv();N(Te,Ee)}),N(Q,H)};Re(I,Q=>{s(l)?Q(R):s(o)?Q(G,1):s(a)&&Q(_,2)})}var M=y(A,2),te=C(M),B=C(te);{var k=Q=>{var H=yv(),ae=K(H,!0);ge(()=>Z(ae,s(d))),N(Q,H)},z=Q=>{var H=Hi();ge((ae,Te)=>Z(H,`Downloading ${ae??""} file${Te??""}…`),[()=>v(),()=>v()===1?"":"s"]),N(Q,H)},j=Q=>{var H=Hi();ge(ae=>Z(H,`${ae??""} of ${s(a).length??""} rows will download`),[()=>v()]),N(Q,H)};Re(B,Q=>{s(d)?Q(k):s(u)?Q(z,1):s(a)&&Q(j,2)})}var be=y(te,2),le=C(be),ce=y(le,2),he=K(ce,!0);ge(Q=>{T.disabled=s(u),Fe(te,"title",s(d)),le.disabled=s(u),ce.disabled=Q,Z(he,s(u)?"Downloading…":"Confirm & Download")},[()=>s(u)||!s(a)||v()===0]),$("click",p,Q=>{Q.target===Q.currentTarget&&!s(u)&&e.onclose?.()}),$("click",T,()=>e.onclose?.()),$("click",le,()=>e.onclose?.()),$("click",ce,m),N(i,p),Kt()}on(["click","change"]);var wv=W('<label class="flex cursor-pointer items-center gap-2 text-(--step-body) capitalize"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent-1)"/> <span> </span></label>'),qc=W("<option> </option>"),Ev=W('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div>'),Yc=W('<div class="p-6 text-center text-(--step-body) text-(--fg-2)"> </div>'),Tv=W('<span class="shrink-0 rounded bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-green-500">installed</span>'),Av=W('<span class="shrink-0 rounded bg-(--accent-1)/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-1)">queued</span>'),Rv=W('<button><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <span class="min-w-0 flex-1"><span class="flex items-center gap-2"><span class="truncate text-(--step-card) font-medium text-(--fg-1)"> </span> <!> <!></span> <span class="block truncate text-(--step-meta) text-(--fg-2)"> </span> <span class="block truncate text-[10px] text-(--fg-2)"> </span></span></button>'),Cv=W('<div class="flex flex-col gap-1.5"></div>'),Pv=W('<div class="flex h-full flex-col items-center justify-center p-6 text-center text-(--step-body) text-(--fg-2)"><!> <p class="mt-3">Select a mod to inspect it.</p></div>'),Lv=W('<div class="mt-1 flex h-8 items-center rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) text-(--fg-2)">Loading versions…</div>'),Iv=W('<select id="mods-version" class="mt-1 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"><option> </option><!></select>'),Dv=W('<div class="mt-1 h-8 rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) leading-8 text-(--fg-2)">Latest compatible</div>'),Uv=W('<p class="mt-2 text-[11px] text-rose-400"> </p>'),kv=W('<div class="mt-2 text-(--step-meta) whitespace-pre-wrap break-words text-(--fg-2)"> </div>'),Nv=W('<div class="flex items-start gap-3 border-b border-(--border-1) p-3"><img alt="" draggable="false" class="h-12 w-12 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="truncate text-(--step-card) font-semibold text-(--fg-1)"> </div> <div class="truncate text-[10px] text-(--fg-2)"> </div> <div class="text-[10px] text-(--fg-2)"> </div></div></div> <div class="border-b border-(--border-1) p-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-version">Version</label> <!></div> <div class="min-h-0 flex-1 p-3"><div class="text-(--step-body) text-(--fg-2)"> </div> <!> <!></div>',1),Ov=W('<span class="ml-1 text-[10px]"> </span>'),Fv=W('<div role="presentation" class="fixed inset-0 z-50 flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[720px] w-[1180px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Browse &amp; Download Mods</h3> <p class="truncate text-(--step-meta) text-(--fg-2)"> <!></p></div> <button class="text-(--fg-2) hover:text-(--fg-1)">✕</button></div> <div class="flex min-h-0 flex-1"><aside class="flex w-[200px] shrink-0 flex-col gap-4 overflow-y-auto border-r border-(--border-1) p-3"><section><h4 class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)">Categories</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border-1) pt-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-sort">Sort</label> <select id="mods-sort" class="mt-1.5 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"></select></section></aside> <section class="flex min-w-0 flex-1 flex-col"><div class="border-b border-(--border-1) p-3"><input class="h-9 w-full rounded border border-(--border-1) bg-(--bg-3) px-3 text-(--step-card) text-(--fg-1) outline-none placeholder:text-(--fg-2) focus:border-(--accent-1)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></section> <aside class="flex w-[330px] shrink-0 flex-col overflow-y-auto border-l border-(--border-1)"><!></aside></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="text-(--step-body) text-(--fg-2)"> <!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Clear</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Stages every queued mod plus its required dependencies for confirmation"><!> Review and Confirm…</button></div></div></div></div> <!>',1);function Bv(i,e){Yt(e,!0);const t=["fabric","quilt","forge","neoforge","legacy-fabric"],n=ft(()=>{const O=e.instance.loader_type.toLowerCase();return O==="legacy fabric"||O==="legacyfabric"?"legacy-fabric":O==="cleanroom"?"forge":t.includes(O)?O:""}),r=["optimization","utility","library","worldgen","accessibility","technology","adventure","decoration","mobs","equipment","food","storage","transportation","game-mechanics"],a=[{id:"relevance",label:"Relevance"},{id:"downloads",label:"Most downloaded"},{id:"updated",label:"Recently updated"},{id:"newest",label:"Newest"}];let l=ee(""),o=ee("relevance"),c=ee(Ut(new Set)),u=ee(null),d=ee(!1),h=ee(""),f=0,v=ee(Ut([]));function b(O){const q=O.title.toLowerCase().replace(/[^a-z0-9]+/g,"-");return s(v).some(_e=>_e.includes(q))}let S=ee(null),m=ee(null),p=ee(!1),w=ee(""),x=0,T=ee(""),A=ee(Ut([])),I=ee(!1);function R(O){const q=new Set(s(c));q.has(O)?q.delete(O):q.add(O),g(c,q,!0)}function G(O){return O>=1e6?`${(O/1e6).toFixed(1)}M`:O>=1e3?`${(O/1e3).toFixed(0)}K`:String(O)}function _(O){return O.icon_url||"/logo.png"}function M(O,q){const _e=window.__TAURI__?.core;return _e?_e.invoke(O,q):Promise.reject(new Error("Tauri backend unavailable in this preview."))}en(()=>{const O=s(l).trim(),q=[...s(c)],_e=s(o),Le=++f,U=setTimeout(()=>{g(d,!0),g(h,""),M("search_modrinth_mods",{query:O,gameVersion:e.instance.minecraft_version,loader:s(n),categories:q,index:_e}).then(we=>{Le===f&&(g(u,we,!0),g(d,!1))}).catch(we=>{Le===f&&(g(h,String(we),!0),g(d,!1))})},350);return()=>clearTimeout(U)});async function te(O){if(s(S)?.project_id===O.project_id)return;g(S,O,!0),g(m,null),g(w,""),g(T,"");const q=++x;g(p,!0);try{const _e=await M("get_modrinth_project_details",{projectId:O.project_id,gameVersion:e.instance.minecraft_version,loader:s(n)});q===x&&g(m,_e,!0)}catch(_e){q===x&&g(w,String(_e),!0)}finally{q===x&&g(p,!1)}}function B(O){return s(A).some(q=>q.project_id===O)}function k(){s(A).length&&g(I,!0)}Pi(()=>{const O=Ca(()=>e.onclose?.());return M("list_instance_mods",{instanceId:e.instance.id}).then(q=>g(v,q.map(_e=>_e.filename.toLowerCase()),!0)).catch(()=>{}),()=>Pa(O)});var z=Fv(),j=yt(z),be=C(j),le=C(be),ce=C(le),he=y(C(ce),2),Q=C(he),H=y(Q);{var ae=O=>{var q=Hi();ge(_e=>Z(q,`· ${_e??""}`),[()=>s(n)[0].toUpperCase()+s(n).slice(1)]),N(O,q)};Re(H,O=>{s(n)&&O(ae)})}var Te=y(ce,2),Ee=y(le,2),Ue=C(Ee),ke=C(Ue),Ve=y(C(ke),2);At(Ve,20,()=>r,O=>O,(O,q)=>{var _e=wv(),Le=C(_e),U=y(Le,2),we=K(U,!0);ge((ne,Me)=>{Ja(Le,ne),Z(we,Me)},[()=>s(c).has(q),()=>q.replace("-"," ")]),$("change",Le,()=>R(q)),N(O,_e)});var Ge=y(ke,2),rt=y(C(Ge),2);At(rt,21,()=>a,O=>O.id,(O,q)=>{var _e=qc(),Le=K(_e,!0),U={};ge(()=>{Z(Le,s(q).label),U!==(U=s(q).id)&&(_e.value=(_e.__value=U)??"")}),N(O,_e)}),_a(rt);var bt=y(Ue,2),$e=C(bt),ie=C($e),gt=y($e,2),He=C(gt);{var Se=O=>{var q=Ev(),_e=K(q,!0);ge(()=>Z(_e,s(h))),N(O,q)};Re(He,O=>{s(h)&&O(Se)})}var Ie=y(He,2);{var Oe=O=>{var q=Yc(),_e=K(q,!0);ge(()=>Z(_e,s(d)?"Searching Modrinth…":"Type to search.")),N(O,q)},Be=O=>{var q=Yc(),_e=K(q);ge(Le=>Z(_e,`No mods for MC ${e.instance.minecraft_version??""}${s(n)?` + ${s(n)}`:""} match
              “${Le??""}”.`),[()=>s(l).trim()]),N(O,q)},je=O=>{var q=Cv();At(q,21,()=>s(u),_e=>_e.project_id,(_e,Le)=>{var U=Rv(),we=C(U),ne=y(we,2),Me=C(ne),Ae=C(Me),Qe=K(Ae,!0),Ke=y(Ae,2);{var Xe=Lt=>{var Gt=Tv();N(Lt,Gt)},st=ft(()=>b(s(Le)));Re(Ke,Lt=>{s(st)&&Lt(Xe)})}var ut=y(Ke,2);{var Rt=Lt=>{var Gt=Av();N(Lt,Gt)},St=ft(()=>B(s(Le).project_id));Re(ut,Lt=>{s(St)&&Lt(Rt)})}var ht=y(Me,2),Et=K(ht,!0),Bt=y(ht,2),zt=K(Bt);ge((Lt,Gt)=>{mt(U,1,`flex items-center gap-3 rounded border px-3 py-2 text-left ${s(S)?.project_id===s(Le).project_id?"border-(--accent-1) bg-(--brand-tint)":"border-(--border-1) bg-(--bg-3) hover:border-(--accent-1)/60"}`),Fe(we,"src",Lt),Fe(Ae,"title",s(Le).title),Z(Qe,s(Le).title),Fe(ht,"title",s(Le).description),Z(Et,s(Le).description),Z(zt,`by ${(s(Le).author||"unknown")??""} · ${Gt??""} downloads`)},[()=>_(s(Le)),()=>G(s(Le).downloads)]),$("click",U,()=>te(s(Le))),Fn("error",we,Lt=>{Lt.currentTarget.dataset.f||(Lt.currentTarget.dataset.f="1",Lt.currentTarget.src="/logo.png")}),N(_e,U)}),N(O,q)};Re(Ie,O=>{s(u)?s(u).length===0&&!s(d)?O(Be,1):O(je,-1):O(Oe)})}var Je=y(bt,2),vt=C(Je);{var ot=O=>{var q=Pv(),_e=C(q);Vt(_e,{name:"modrinth",size:28}),N(O,q)},D=O=>{var q=Nv(),_e=yt(q),Le=C(_e),U=y(Le,2),we=C(U),ne=K(we,!0),Me=y(we,2),Ae=K(Me),Qe=y(Me,2),Ke=K(Qe),Xe=y(_e,2),st=y(C(Xe),2);{var ut=lt=>{var Ze=Lv();N(lt,Ze)},Rt=lt=>{var Ze=Iv(),xt=C(Ze),P=K(xt);xt.value=xt.__value="";var se=y(xt);At(se,17,()=>s(m).versions,ve=>ve.id,(ve,re)=>{var me=qc(),Ne=K(me),De={};ge(()=>{Z(Ne,`${s(re).version??""}${s(re).version_type&&s(re).version_type!=="release"?` (${s(re).version_type})`:""}`),De!==(De=s(re).id)&&(me.value=(me.__value=De)??"")}),N(ve,me)}),_a(Ze),ge(()=>Z(P,`Latest (${s(m).versions[0]?.version??""})`)),xa(Ze,()=>s(T),ve=>g(T,ve)),N(lt,Ze)},St=lt=>{var Ze=Dv();N(lt,Ze)};Re(st,lt=>{s(p)?lt(ut):s(m)?.versions?.length?lt(Rt,1):lt(St,-1)})}var ht=y(Xe,2),Et=C(ht),Bt=K(Et,!0),zt=y(Et,2);{var Lt=lt=>{var Ze=Uv(),xt=K(Ze,!0);ge(()=>Z(xt,s(w))),N(lt,Ze)};Re(zt,lt=>{s(w)&&lt(Lt)})}var Gt=y(zt,2);{var tn=lt=>{var Ze=kv(),xt=K(Ze,!0);ge(()=>Z(xt,s(m).body)),N(lt,Ze)};Re(Gt,lt=>{s(m)?.body&&lt(tn)})}ge((lt,Ze)=>{Fe(Le,"src",lt),Fe(we,"title",s(S).title),Z(ne,s(S).title),Z(Ae,`by ${(s(S).author||"unknown")??""}`),Z(Ke,`${Ze??""} downloads`),Z(Bt,s(S).description)},[()=>_(s(S)),()=>G(s(S).downloads)]),Fn("error",Le,lt=>{lt.currentTarget.dataset.f||(lt.currentTarget.dataset.f="1",lt.currentTarget.src="/logo.png")}),N(O,q)};Re(vt,O=>{s(S)?O(D,-1):O(ot)})}var E=y(Ee,2),X=C(E),ye=C(X),V=y(ye);{var ue=O=>{var q=Ov(),_e=K(q);ge(Le=>Z(_e,`(${Le??""})`),[()=>s(A).map(Le=>Le.title).join(", ")]),N(O,q)};Re(V,O=>{s(A).length&&O(ue)})}var fe=y(X,2),pe=C(fe),Y=y(pe,2),L=C(Y);Vt(L,{name:"download",size:13});var F=y(j,2);{var de=O=>{Mv(O,{get instance(){return e.instance},get items(){return s(A)},onclose:()=>g(I,!1),ondownloaded:q=>{g(I,!1),g(A,[],!0),e.oninstalled?.(q)}})};Re(F,O=>{s(I)&&O(de)})}ge(()=>{Z(Q,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `),Z(ye,`${s(A).length===0?"No mods selected":`${s(A).length} mod${s(A).length===1?"":"s"} selected`} `),pe.disabled=!s(A).length,Y.disabled=!s(A).length}),$("click",j,O=>{O.target===O.currentTarget&&e.onclose?.()}),$("click",Te,()=>e.onclose?.()),xa(rt,()=>s(o),O=>g(o,O)),Wt(ie,()=>s(l),O=>g(l,O)),$("click",pe,()=>g(A,[],!0)),$("click",Y,k),N(i,z),Kt()}on(["click","change"]);var zv=W('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Gv=W('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Hv=W('<div class="mt-4 rounded border border-amber-500/30 bg-amber-500/10 p-3" role="status" aria-live="polite"><p class="text-[12px] text-amber-400"><strong> </strong> </p> <button class="mt-2 rounded border border-amber-500/40 px-3 py-1.5 text-[12px] font-medium text-amber-400 hover:bg-amber-500/20 disabled:opacity-40"> </button></div>'),Vv=W('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),Kc=W('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),ko=W('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Wv=W(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <!> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),jv=W('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),Xv=W('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),qv=W('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),Yv=W('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),Kv=W('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),Zv=W('<p class="mt-2 text-[11px] text-(--fg-2)"> </p>'),Jv=W('<button type="button" class="rounded px-2.5 py-1.5 text-[11px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)">Reset</button>'),Qv=W('<p role="alert" class="mt-2 text-[11px] text-red-400"> </p>'),$v=W(`<div role="alert" class="mt-4 rounded border border-red-500/40 bg-red-500/10 p-3 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
              it works — it is prone to crashes and only a limited subset of Forge mods support it.</p></div>`),eg=W('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance name</div> <p class="mt-1 text-[11px] text-(--text-muted)">The display name across the grid and context panel; the folder id stays put.</p> <div class="mt-3 flex items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-2) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)" aria-label="Instance name"/> <button type="button" class="rounded bg-(--accent-1) px-3 py-1.5 font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40">Rename</button></div> <!> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance icon</div> <p class="mt-1 text-[11px] text-(--text-muted)">Pick a bundled launcher icon, a Twemoji, or a custom image.</p> <div class="mt-3 flex items-center gap-3"><span class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded border border-(--border) bg-(--accent)/10"><img alt="" draggable="false" class="h-full w-full object-cover"/></span> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-[12px] font-medium text-(--accent) hover:bg-(--accent)/25">Change icon…</button> <!></div> <!></div> <!> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, loader switching and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p>',1),tg=W('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!> <!></div>');function ng(i,e){Yt(e,!0);let t=tt(e,"instance",7),n=tt(e,"storage",3,null),r=tt(e,"blindMode",3,!1),a=tt(e,"deafMode",3,!1);const l=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let o=ee("mods"),c=ee(Ut([])),u=ee(!1),d=ee(""),h=ee(""),f=ee(!1),v=ee(!1),b=ee(Ut(t().icon_key??"")),S=ee(""),m=ee(Ut(t().name)),p=ee("");async function w(){const V=s(m).trim();if(!(!V||V===t().name)){g(p,"");try{const ue=await window.__TAURI__.core.invoke("rename_instance",{instanceId:t().id,newName:V});t().name=ue.name,g(m,ue.name,!0),g(p,`Renamed to ${ue.name}.`)}catch(ue){g(p,String(ue),!0)}}}function x(){const V=mo(s(b));return V||(t().icon_path?te(t().icon_path):"/logo.png")}async function T(V){g(S,"");try{await window.__TAURI__.core.invoke("set_instance_icon_key",{instanceId:t().id,iconKey:V}),g(b,V,!0),t().icon_key=V,t().icon_path=null}catch(ue){g(S,String(ue),!0)}}async function A(){const V=window.__TAURI__?.dialog?.open;if(!V)throw new Error("Image picker unavailable in this build.");const ue=await V({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});if(!ue)return null;const fe=await window.__TAURI__.core.invoke("set_instance_icon",{instanceId:t().id,imagePath:String(ue)});return g(b,""),t().icon_key=null,t().icon_path=fe,fe}let I=ee(Ut([])),R=ee(Ut([])),G=ee(!1),_=ee("");function M(...V){return[n()?n().instances_dir.replace(/\\/g,"/"):"",t().id,"minecraft",...V].filter(Boolean).join("/")}function te(V){const ue=window.__TAURI__?.core?.convertFileSrc;return ue?ue(V):V}function B(V){return V>=1024*1024?`${(V/1024/1024).toFixed(1)} MB`:V>=1024?`${(V/1024).toFixed(1)} KB`:`${V} B`}function k(V){return V?new Date(V*1e3).toLocaleString():""}function z(){const V=s(h).trim().toLowerCase();return V?s(c).filter(ue=>ue.display_name.toLowerCase().includes(V)||ue.filename.toLowerCase().includes(V)):s(c)}async function j(){g(u,!0);try{g(c,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:t().id}),!0),g(d,"")}catch(V){g(d,String(V),!0)}finally{g(u,!1)}}const be={"minecraft-access":"Minecraft Access",echosight:"EchoSight"},le=ft(()=>[...r()&&!s(c).some(V=>V.filename.toLowerCase().includes("minecraft-access"))?["minecraft-access"]:[],...a()&&!s(c).some(V=>V.filename.toLowerCase().includes("echosight"))?["echosight"]:[]]);let ce=ee(!1);async function he(){g(ce,!0);try{for(const V of s(le))await window.__TAURI__.core.invoke("install_mod_with_deps",{instanceId:t().id,projectId:V,gameVersion:t().minecraft_version,loader:t().loader_type.toLowerCase()});g(d,"Accessibility mods installed.")}catch(V){g(d,String(V),!0)}finally{g(ce,!1)}await j()}async function Q(V){g(u,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:t().id,filename:V.filename,enable:!V.is_enabled}),s(d)&&g(d,"")}catch(ue){g(d,String(ue),!0)}finally{g(u,!1)}await j()}async function H(V){g(u,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:t().id,filename:V.filename}),g(d,"")}catch(ue){g(d,String(ue),!0)}finally{g(u,!1)}await j()}async function ae(){const V=window.__TAURI__?.dialog?.open;if(!V){g(d,"File picker unavailable in this build.");return}let ue;try{ue=await V({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(pe){g(d,String(pe),!0);return}const fe=ue?[].concat(ue):[];if(fe.length){g(u,!0);try{for(const pe of fe)await window.__TAURI__.core.invoke("import_mod",{instanceId:t().id,jarPath:pe});g(d,"")}catch(pe){g(d,String(pe),!0)}finally{g(u,!1)}await j()}}async function Te(V){g(G,!0);try{const ue=await window.__TAURI__.core.invoke(V,{instanceId:t().id});g(V==="list_screenshots"?I:R,ue,!0),g(_,"")}catch(ue){g(_,String(ue),!0)}finally{g(G,!1)}}function Ee(V){window.__TAURI__.core.invoke("open_path",{path:V}).catch(ue=>g(_,String(ue),!0))}function Ue(V){Ee(M("screenshots",V))}Pi(()=>{j(),Te("list_screenshots"),Te("list_logs")});var ke=tg(),Ve=C(ke),Ge=C(Ve),rt=y(Ge,2),bt=C(rt),$e=K(bt,!0),ie=y(bt,2),gt=K(ie),He=y(rt,2);At(He,21,()=>l,V=>V.id,(V,ue)=>{var fe=zv(),pe=C(fe),Y=C(pe);wi(Y,{get emoji(){return s(ue).icon},size:15});var L=y(pe,2),F=K(L,!0);ge(()=>{mt(fe,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${s(o)===s(ue).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Fe(fe,"aria-current",s(o)===s(ue).id?"true":void 0),Z(F,s(ue).label)}),$("click",fe,()=>g(o,s(ue).id,!0)),N(V,fe)});var Se=y(Ve,2),Ie=C(Se),Oe=C(Ie);{var Be=V=>{var ue=Gv(),fe=y(yt(ue),4),pe=C(fe),Y=K(pe),L=y(pe,2),F=K(L),de=y(L,2),O=K(de);ge(q=>{Z(Y,`Minecraft ${t().minecraft_version??""}`),Z(F,`Loader: ${t().loader_type??""}`),Z(O,`Last played: ${q??""}`)},[()=>t().last_played?new Date(t().last_played*1e3).toLocaleString():"never"]),N(V,ue)},je=V=>{var ue=Wv(),fe=y(yt(ue),4);{var pe=Ke=>{var Xe=Hv(),st=C(Xe),ut=C(st),Rt=K(ut,!0),St=y(ut),ht=y(st,2),Et=K(ht,!0);ge(Bt=>{Z(Rt,Bt),Z(St,` ${s(le).length>1?"are":"is"} not installed yet — recommended for your
              accessibility profile. Required dependencies (e.g. Fabric API) install automatically.`),ht.disabled=s(u)||s(ce),Z(Et,s(ce)?"Installing…":"Install Recommended Accessibility Mods")},[()=>s(le).map(Bt=>be[Bt]??Bt).join(" and ")]),$("click",ht,he),N(Ke,Xe)};Re(fe,Ke=>{(r()||a())&&(t().loader_type==="Fabric"||t().loader_type==="Quilt")&&s(le).length&&Ke(pe)})}var Y=y(fe,2),L=C(Y),F=K(L),de=y(L,2),O=y(Y,2),q=y(O,2),_e=y(q,2),Le=C(_e);At(Le,21,z,Ke=>Ke.filename,(Ke,Xe)=>{var st=Vv(),ut=C(st),Rt=C(ut);let St;var ht=K(Rt,!0),Et=y(Rt,2),Bt=K(Et),zt=y(ut),Lt=K(zt),Gt=y(zt),tn=K(Gt);ge(lt=>{St=mt(Rt,1,"truncate",null,St,{"opacity-50":!s(Xe).is_enabled}),Z(ht,s(Xe).display_name),Z(Bt,`${s(Xe).filename??""} · ${lt??""}`),mt(Lt,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${s(Xe).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),Fe(Lt,"title",s(Xe).is_enabled?"Disable":"Enable"),Lt.disabled=s(u),Fe(tn,"title",`Delete ${s(Xe).display_name??""}`),tn.disabled=s(u)},[()=>B(s(Xe).file_size)]),$("click",Lt,()=>Q(s(Xe))),$("click",tn,()=>H(s(Xe))),N(Ke,st)},Ke=>{var Xe=Kc(),st=C(Xe),ut=C(st);{var Rt=ht=>{var Et=Hi("Loading mods…");N(ht,Et)},St=ht=>{var Et=Hi("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");N(ht,Et)};Re(ut,ht=>{s(u)?ht(Rt):ht(St,-1)})}N(Ke,Xe)});var U=y(_e,2);{var we=Ke=>{var Xe=ko(),st=K(Xe,!0);ge(()=>Z(st,s(d))),N(Ke,Xe)};Re(U,Ke=>{s(d)&&Ke(we)})}var ne=y(U,2),Me=C(ne),Ae=y(Me,2),Qe=C(Ae);wi(Qe,{emoji:"📂"}),ge(()=>{Z(F,`Installed (${s(c).length??""})`),de.disabled=s(u),Me.disabled=s(u),Ae.disabled=!n(),Fe(Ae,"title",n()?"Opens the instance mods folder":"Storage unknown")}),$("click",de,j),Wt(O,()=>s(h),Ke=>g(h,Ke)),$("click",q,()=>g(f,!0)),$("click",Me,ae),$("click",Ae,()=>Ee(M("mods"))),N(V,ue)},Je=V=>{var ue=qv(),fe=y(yt(ue),4);At(fe,21,()=>s(I),de=>de.name,(de,O)=>{var q=jv(),_e=C(q),Le=y(_e,2),U=K(Le,!0);ge((we,ne,Me)=>{Fe(q,"title",`${s(O).name??""} · ${we??""} · ${ne??""}`),Fe(_e,"src",Me),Fe(_e,"alt",s(O).name),Fe(Le,"title",s(O).name),Z(U,s(O).name)},[()=>B(s(O).size),()=>k(s(O).modified),()=>te(M("screenshots",s(O).name))]),$("click",q,()=>Ue(s(O).name)),$("keydown",q,we=>{(we.key==="Enter"||we.key===" ")&&(we.preventDefault(),Ue(s(O).name))}),N(de,q)},de=>{var O=Xv(),q=C(O);{var _e=U=>{var we=Hi("Loading screenshots…");N(U,we)},Le=U=>{var we=Hi("No screenshots yet — press F2 in game to capture one.");N(U,we)};Re(q,U=>{s(G)?U(_e):U(Le,-1)})}N(de,O)});var pe=y(fe,2);{var Y=de=>{var O=ko(),q=K(O,!0);ge(()=>Z(q,s(_))),N(de,O)};Re(pe,de=>{s(_)&&de(Y)})}var L=y(pe,2),F=C(L);wi(F,{emoji:"📂"}),$("click",L,()=>Ee(M("screenshots"))),N(V,ue)},vt=V=>{var ue=Kv(),fe=y(yt(ue),4),pe=C(fe);At(pe,21,()=>s(R),_e=>_e.name,(_e,Le)=>{var U=Yv(),we=C(U),ne=C(we),Me=K(ne,!0),Ae=y(ne,2),Qe=K(Ae),Ke=y(we),Xe=K(Ke);ge((st,ut)=>{Fe(ne,"title",s(Le).name),Z(Me,s(Le).name),Z(Qe,`${st??""} · ${ut??""}`)},[()=>B(s(Le).size),()=>k(s(Le).modified)]),$("click",Xe,()=>Ee(M("logs",s(Le).name))),N(_e,U)},_e=>{var Le=Kc(),U=C(Le),we=C(U);{var ne=Ae=>{var Qe=Hi("Loading logs…");N(Ae,Qe)},Me=Ae=>{var Qe=Hi("No log files yet — logs appear after the first launch.");N(Ae,Qe)};Re(we,Ae=>{s(G)?Ae(ne):Ae(Me,-1)})}N(_e,Le)});var Y=y(fe,2);{var L=_e=>{var Le=ko(),U=K(Le,!0);ge(()=>Z(U,s(_))),N(_e,Le)};Re(Y,_e=>{s(_)&&_e(L)})}var F=y(Y,2),de=C(F),O=y(de,2),q=C(O);wi(q,{emoji:"📂"}),$("click",de,()=>e.onopenconsole?.()),$("click",O,()=>Ee(M("logs"))),N(V,ue)},ot=V=>{var ue=eg(),fe=y(yt(ue),4),pe=y(C(fe),4),Y=C(pe),L=y(Y,2),F=y(pe,2);{var de=ht=>{var Et=Zv(),Bt=K(Et,!0);ge(()=>Z(Bt,s(p))),N(ht,Et)};Re(F,ht=>{s(p)&&ht(de)})}var O=y(F,2),q=C(O),_e=K(q),Le=y(q,2),U=K(Le),we=y(fe,2),ne=y(C(we),4),Me=C(ne),Ae=K(Me),Qe=y(Me,2),Ke=y(Qe,2);{var Xe=ht=>{var Et=Jv();$("click",Et,()=>T("")),N(ht,Et)};Re(Ke,ht=>{s(b)&&ht(Xe)})}var st=y(ne,2);{var ut=ht=>{var Et=Qv(),Bt=K(Et,!0);ge(()=>Z(Bt,s(S))),N(ht,Et)};Re(st,ht=>{s(S)&&ht(ut)})}var Rt=y(we,2);{var St=ht=>{var Et=$v();N(ht,Et)};Re(Rt,ht=>{t().loader_type==="Cleanroom"&&ht(St)})}ge((ht,Et,Bt,zt,Lt)=>{L.disabled=ht,Fe(O,"title",Et),Z(_e,`Game folder: ${Bt??""}`),Z(U,`Mods folder: ${zt??""}`),Fe(Ae,"src",Lt)},[()=>!s(m).trim()||s(m).trim()===t().name,()=>M(),()=>M(),()=>M("mods"),()=>x()]),$("keydown",Y,ht=>{ht.key==="Enter"&&w()}),Wt(Y,()=>s(m),ht=>g(m,ht)),$("click",L,w),$("click",Qe,()=>g(v,!0)),N(V,ue)};Re(Oe,V=>{s(o)==="components"?V(Be):s(o)==="mods"?V(je,1):s(o)==="screenshots"?V(Je,2):s(o)==="logs"?V(vt,3):V(ot,-1)})}var D=y(Se,2);{var E=V=>{{let ue=ft(()=>s(b)?"":x());Lf(V,{get currentKey(){return s(b)},get currentPath(){return s(ue)},onpick:fe=>{T(fe),g(v,!1)},oncustom:A,onclose:()=>g(v,!1)})}};Re(D,V=>{s(v)&&V(E)})}var X=y(D,2);{var ye=V=>{Bv(V,{get instance(){return t()},onclose:()=>g(f,!1),oninstalled:()=>j()})};Re(X,V=>{s(f)&&V(ye)})}ge(()=>{Fe(bt,"title",t().name),Z($e,t().name),Z(gt,`${t().minecraft_version??""} · ${t().loader_type??""}`)}),$("click",Ge,function(...V){e.onback?.apply(this,V)}),N(i,ke),Kt()}on(["click","keydown"]);var ig=W('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),rg=W('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),ag=W('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),sg=W('<p class="mt-3 text-[12px] text-red-400"> </p>'),og=W(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),lg=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function cg(i,e){Yt(e,!0);let t=ee(null),n=ee(""),r=ee(""),a=ee(!1),l=ee("");function o(w){return w>=1024*1024?`${(w/1024/1024).toFixed(1)} MB`:w>=1024?`${(w/1024).toFixed(0)} KB`:`${w} B`}function c(){return!s(t)||!s(t).loader?"Vanilla":s(t).loader[0].toUpperCase()+s(t).loader.slice(1)+(s(t).loader_version?` ${s(t).loader_version}`:" (latest stable)")}Pi(async()=>{const w=Ca(()=>e.onclose?.());try{g(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),g(r,s(t).name,!0)}catch(x){g(n,String(x),!0)}return()=>Pa(w)});async function u(){if(!s(a)){g(a,!0),g(l,"");try{const w=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:s(r).trim()});e.oninstalled?.(w)}catch(w){g(l,String(w),!0)}finally{g(a,!1)}}}var d=lg(),h=C(d),f=C(h),v=y(C(f),2),b=y(f,2);{var S=w=>{var x=ig(),T=C(x),A=K(T,!0),I=y(T,2),R=K(I,!0);ge(()=>{Z(A,s(n)),Fe(I,"title",e.path),Z(R,e.path)}),N(w,x)},m=w=>{var x=rg();N(w,x)},p=w=>{var x=og(),T=yt(x),A=C(T),I=C(A),R=K(I,!0),G=y(I,2);{var _=ke=>{var Ve=ag(),Ge=K(Ve,!0);ge(()=>Z(Ge,s(t).summary)),N(ke,Ve)};Re(G,ke=>{s(t).summary&&ke(_)})}var M=y(G,2),te=C(M),B=K(te),k=y(te,2),z=K(k,!0),j=y(k,2),be=K(j),le=y(j,2),ce=K(le,!0),he=y(A,4),Q=y(he,2);{var H=ke=>{var Ve=sg(),Ge=K(Ve,!0);ge(()=>Z(Ge,s(l))),N(ke,Ve)};Re(Q,ke=>{s(l)&&ke(H)})}var ae=y(T,2),Te=C(ae),Ee=y(Te,2),Ue=K(Ee,!0);ge((ke,Ve,Ge)=>{Fe(I,"title",s(t).name),Z(R,s(t).name),Z(B,`MC ${(s(t).game_version||"?")??""}`),Z(z,ke),Fe(j,"title",`${s(t).download_count??""} downloaded, ${s(t).override_count??""} overrides extracted`),Z(be,`${s(t).file_count??""} files`),Z(ce,Ve),Ee.disabled=Ge,Z(Ue,s(a)?"Installing…":"Install Modpack")},[()=>c(),()=>o(s(t).archive_size),()=>s(a)||!s(r).trim()]),Wt(he,()=>s(r),ke=>g(r,ke)),$("click",Te,()=>e.onclose?.()),$("click",Ee,u),N(w,x)};Re(b,w=>{s(n)?w(S):s(t)?w(p,-1):w(m,1)})}$("click",d,w=>{w.target===w.currentTarget&&e.onclose?.()}),$("click",v,()=>e.onclose?.()),N(i,d),Kt()}on(["click"]);var ug=W('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),dg=W('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),Zc=W("<option> </option>"),fg=W('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),hg=W('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),pg=W('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),mg=W('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),vg=W('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),gg=W('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),_g=W('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),xg=W('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),bg=W('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),yg=W('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),Sg=W('<p class="mt-1.5 font-medium">Cleanroom only runs Minecraft 1.12.2 — select that version to continue.</p>'),Mg=W(`<div role="alert" class="mt-2 rounded border border-red-500/40 bg-red-500/10 p-2.5 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
                it works — it is prone to crashes and only a limited subset of Forge mods support it.</p> <!></div>`),wg=W('<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400"> <strong>Fabric</strong>.</div>'),Eg=W(`<p role="status" class="mt-2 rounded border border-amber-500/20 bg-amber-500/5 p-2 text-[11px] text-amber-400"> <strong>Legacy Fabric</strong> is
              the recommended loader for it.</p>`),Tg=W(`<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400">Blind Mode Notice: Vanilla Minecraft's built-in Narrator lacks 3D world navigation and
              block inspection. We strongly recommend selecting <strong>Fabric</strong> or <strong>Quilt</strong> with Minecraft Access.</div>`),Ag=W('<label class="flex cursor-pointer items-start gap-2 text-[12px]"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent)"/> <span><span> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span></label>'),Rg=W('<section class="mt-3 border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Accessibility mods</h4> <p class="mt-0.5 text-[10px] text-(--text-muted)"> </p> <div class="mt-1.5 flex flex-col gap-1.5"></div></section>'),Cg=W('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),Pg=W('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Lg=W('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),Ig=W('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),Dg=W('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),Ug=W('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),kg=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!> <!> <!> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div> <!>',1);function Ng(i,e){Yt(e,!0);let t=tt(e,"groups",19,()=>[]),n=tt(e,"blindMode",3,!1),r=tt(e,"deafMode",3,!1);const a=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],l=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"cleanroom",label:"Cleanroom"},{id:"fabric",label:"Fabric"},{id:"legacyfabric",label:"Legacy Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],o=["","fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],c=["fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],u="1.13.2";function d(xe,Ce){const qe=it=>String(it??"").split(".").map(Ot=>parseInt(Ot,10)||0),pt=qe(xe),nt=qe(Ce);for(let it=0;it<Math.max(pt.length,nt.length);it+=1){const Ot=pt[it]??0,wt=nt[it]??0;if(Ot!==wt)return Ot<wt}return!0}const h=ft(()=>!!s(x)&&d(s(x),u)),f=ft(()=>s(_)==="cleanroom"&&s(x)!=="1.12.2"),v="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let b=ee(null),S=ee(!0),m=ee(""),p=ee(""),w=ee(Ut(new Set(["release"]))),x=ee(""),T=ee(""),A=ee(""),I=ee(""),R=ee(""),G=ee(!1),_=ee(""),M=ee(""),te=ee(Ut([])),B=ee("idle"),k=0,z=ee(!1),j=ee("");const be=[{id:"minecraft-access",label:"Minecraft Access",hint:"Core: screen reader & 3D spatial navigation"},{id:"sound-physics-remastered",label:"Sound Physics Remastered",hint:"Optional: spatial acoustics & directional echoes"}],le=[{id:"echosight",label:"EchoSight",hint:"Directional sound radar & priority subtitles"},{id:"subtitles-visualizer",label:"Subtitles Visualizer",hint:"In-world directional subtitle markers"},{id:"visible-sound",label:"Visible Sound",hint:"In-world block/entity sound highlights"},{id:"soundsight",label:"SoundSight",hint:"Visual threat ring & enhanced subtitles"}];let ce=ee(Ut(new Set(["minecraft-access"])));const he=ft(()=>[...n()?be:[],...r()?le:[]]);en(()=>{g(ce,new Set(n()&&(s(_)==="fabric"||s(_)==="quilt")?["minecraft-access"]:[]),!0)});function Q(xe){const Ce=new Set(s(ce));Ce.has(xe)?Ce.delete(xe):Ce.add(xe),g(ce,Ce,!0)}function H(xe,Ce){const qe=window.__TAURI__?.core;return qe?qe.invoke(xe,Ce):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const ae=ft(()=>{const xe=s(b)?.versions??[],Ce=s(p).trim().toLowerCase();return xe.filter(qe=>s(w).has(qe.version_type)&&(!Ce||qe.id.toLowerCase().includes(Ce)))}),Te=ft(()=>!o.includes(s(_))),Ee=ft(()=>c.includes(s(_))),Ue=ft(()=>!!s(x)&&!s(Te)&&!s(f)&&!s(z)&&!(s(Ee)&&s(B)==="loading"));function ke(xe){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[xe]??xe}function Ve(xe){if(!xe)return"—";const Ce=new Date(xe);if(Number.isNaN(Ce.getTime()))return String(xe).slice(0,10);const qe=pt=>String(pt).padStart(2,"0");return`${qe(Ce.getDate())}/${qe(Ce.getMonth()+1)}/${Ce.getFullYear()}`}function Ge(xe){const Ce=new Set(s(w));Ce.has(xe)?Ce.delete(xe):Ce.add(xe),g(w,Ce,!0)}function rt(){const xe=mo(s(R));if(xe)return xe;const Ce=window.__TAURI__?.core?.convertFileSrc;return s(I)&&Ce?Ce(s(I)):null}async function bt(){const xe=window.__TAURI__?.dialog?.open;if(!xe){g(j,"Image picker unavailable in this build.");return}try{const Ce=await xe({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});return Ce&&(g(R,""),g(I,String(Ce),!0),g(j,"")),Ce?String(Ce):null}catch(Ce){return g(j,String(Ce),!0),null}}async function $e(){if(!s(Ee)||!s(x))return;const xe=++k;g(B,"loading");try{const Ce=await H("fetch_loader_versions",{loader:s(_),gameVersion:s(x)});if(xe!==k)return;g(te,Ce,!0),g(M,Ce.find(qe=>qe.stable)?.version??Ce[0]?.version??"",!0),g(B,Ce.length?"idle":"error",!0)}catch{if(xe!==k)return;g(te,[],!0),g(M,""),g(B,"error")}}async function ie(xe){g(x,xe,!0),!s(_)&&d(xe,u)&&g(_,"legacyfabric"),s(Ee)&&await $e()}async function gt(xe){g(_,xe,!0),g(M,""),g(te,[],!0),g(B,"idle"),s(Ee)&&await $e()}async function He(){g(S,!0),g(m,"");try{g(b,await H("fetch_vanilla_versions"),!0)}catch(xe){g(m,String(xe),!0)}finally{g(S,!1)}}async function Se(){if(!s(Ue))return;g(z,!0),g(j,"");const xe=s(x),Ce=s(T).trim()||xe;try{const qe=await H("create_instance",{name:Ce,version:xe,loader:s(_)||null,loaderVersion:s(M).trim()||null});let pt="";if(s(R))try{await H("set_instance_icon_key",{instanceId:qe.id,iconKey:s(R)})}catch(nt){pt=`Instance created, but the icon could not be applied: ${nt}`}else if(s(I))try{await H("set_instance_icon",{instanceId:qe.id,imagePath:s(I)})}catch(nt){pt=`Instance created, but the icon could not be applied: ${nt}`}if(s(A).trim())try{await H("set_instance_group",{instanceId:qe.id,group:s(A).trim()})}catch(nt){pt=pt?`${pt} The group could not be set: ${nt}`:`Instance created, but the group could not be set: ${nt}`}for(const nt of s(ce))try{await H("install_mod_with_deps",{instanceId:qe.id,projectId:nt,gameVersion:xe,loader:s(_)})}catch(it){pt=pt?`${pt} ${nt} could not be installed: ${it}`:`Instance created, but ${nt} could not be installed: ${it}`}e.oncreated?.(qe,pt)}catch(qe){g(j,String(qe),!0)}finally{g(z,!1)}}function Ie(){window.__TAURI__?.core?.invoke("open_path",{path:v}).catch(xe=>g(j,String(xe),!0))}Pi(()=>{const xe=Ca(()=>e.onclose?.());return He(),()=>Pa(xe)});var Oe=kg(),Be=yt(Oe),je=C(Be),Je=C(je),vt=C(Je),ot=C(vt);{var D=xe=>{var Ce=ug(),qe=yt(Ce);ge(pt=>Fe(qe,"src",pt),[()=>rt()]),N(xe,Ce)},E=ft(()=>rt()),X=xe=>{var Ce=dg();N(xe,Ce)};Re(ot,xe=>{s(E)?xe(D):xe(X,-1)})}var ye=y(vt,2),V=C(ye),ue=y(V,2),fe=y(C(ue),2),pe=C(fe);pe.value=pe.__value="";var Y=y(pe);At(Y,16,t,xe=>xe,(xe,Ce)=>{var qe=Zc(),pt=K(qe,!0),nt={};ge(()=>{Z(pt,Ce),nt!==(nt=Ce)&&(qe.value=(qe.__value=nt)??"")}),N(xe,qe)}),_a(fe);var L=y(ye,2),F=y(Je,2),de=C(F),O=C(de),q=C(O);{var _e=xe=>{var Ce=fg();N(xe,Ce)},Le=xe=>{var Ce=hg(),qe=C(Ce),pt=K(qe,!0),nt=y(qe,2);ge(()=>Z(pt,s(m))),$("click",nt,He),N(xe,Ce)},U=xe=>{var Ce=gg(),qe=y(C(Ce));At(qe,21,()=>s(ae),pt=>pt.id,(pt,nt)=>{var it=mg(),Ot=C(it),wt=C(Ot),nn=K(wt,!0),Xn=y(wt,2);{var fn=Xt=>{var Li=pg();N(Xt,Li)};Re(Xn,Xt=>{s(nt).is_latest_release&&Xt(fn)})}var Rn=y(Ot),Ft=K(Rn,!0),Sn=y(Rn),Un=K(Sn,!0);ge((Xt,Li)=>{mt(it,1,`cursor-pointer border-b border-(--border)/50 ${s(x)===s(nt).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),Z(nn,s(nt).id),Z(Ft,Xt),Z(Un,Li)},[()=>Ve(s(nt).release_time),()=>ke(s(nt).version_type)]),$("click",it,()=>ie(s(nt).id)),$("keydown",it,Xt=>{(Xt.key==="Enter"||Xt.key===" ")&&(Xt.preventDefault(),ie(s(nt).id))}),N(pt,it)},pt=>{var nt=vg();N(pt,nt)}),N(xe,Ce)};Re(q,xe=>{s(S)?xe(_e):s(m)?xe(Le,1):xe(U,-1)})}var we=y(O,2),ne=C(we),Me=y(ne,2),Ae=K(Me),Qe=y(de,2),Ke=C(Qe),Xe=y(C(Ke),2);At(Xe,21,()=>a,xe=>xe.id,(xe,Ce)=>{var qe=_g(),pt=C(qe),nt=y(pt,2),it=K(nt,!0);ge(Ot=>{Ja(pt,Ot),Z(it,s(Ce).label)},[()=>s(w).has(s(Ce).id)]),$("change",pt,()=>Ge(s(Ce).id)),N(xe,qe)});var st=y(Ke,2),ut=y(C(st),2);At(ut,21,()=>l,xe=>xe.id,(xe,Ce)=>{var qe=xg(),pt=C(qe),nt=y(pt,2),it=K(nt,!0);ge(()=>{as(pt,s(Ce).id),Ja(pt,s(_)===s(Ce).id),Z(it,s(Ce).label)}),$("change",pt,()=>gt(s(Ce).id)),N(xe,qe)});var Rt=y(ut,2);{var St=xe=>{var Ce=bg();N(xe,Ce)},ht=xe=>{var Ce=yg();N(xe,Ce)};Re(Rt,xe=>{s(Te)?xe(St):s(_)||xe(ht,1)})}var Et=y(Rt,2);{var Bt=xe=>{var Ce=Mg(),qe=y(C(Ce),4);{var pt=nt=>{var it=Sg();N(nt,it)};Re(qe,nt=>{s(f)&&nt(pt)})}N(xe,Ce)};Re(Et,xe=>{s(_)==="cleanroom"&&xe(Bt)})}var zt=y(Et,2);{var Lt=xe=>{var Ce=wg(),qe=C(Ce);qe.nodeValue=`Legacy Fabric targets Minecraft 1.13.2 and older; newer versions should use
              regular `,N(xe,Ce)},Gt=xe=>{var Ce=Eg(),qe=C(Ce);ge(()=>Z(qe,`Minecraft ${s(x)??""} predates modern Fabric — `)),N(xe,Ce)};Re(zt,xe=>{s(_)==="legacyfabric"&&!s(h)?xe(Lt):s(_)===""&&s(h)&&xe(Gt,1)})}var tn=y(zt,2);{var lt=xe=>{var Ce=Tg();N(xe,Ce)};Re(tn,xe=>{n()&&(s(_)===""||s(_)==="horizon")&&xe(lt)})}var Ze=y(tn,2);{var xt=xe=>{var Ce=Rg(),qe=y(C(Ce),2),pt=K(qe),nt=y(qe,2);At(nt,21,()=>s(he),it=>it.id,(it,Ot)=>{var wt=Ag(),nn=C(wt),Xn=y(nn,2),fn=C(Xn),Rn=K(fn,!0),Ft=y(fn,2),Sn=K(Ft,!0);ge(Un=>{Ja(nn,Un),Z(Rn,s(Ot).label),Z(Sn,s(Ot).hint)},[()=>s(ce).has(s(Ot).id)]),$("change",nn,()=>Q(s(Ot).id)),N(it,wt)}),ge(()=>Z(pt,`Installed right after the instance is created.
                ${s(_)==="quilt"?"Dependencies resolve through QFAPI.":""}`)),N(xe,Ce)};Re(Ze,xe=>{(s(_)==="fabric"||s(_)==="quilt")&&s(he).length&&xe(xt)})}var P=y(Ze,2);{var se=xe=>{var Ce=Ig(),qe=y(yt(Ce),2);{var pt=Ot=>{var wt=Cg();N(Ot,wt)},nt=Ot=>{var wt=Pg(),nn=yt(wt);Wt(nn,()=>s(M),Xn=>g(M,Xn)),N(Ot,wt)},it=Ot=>{var wt=Lg(),nn=C(wt);nn.value=nn.__value="";var Xn=y(nn);At(Xn,17,()=>s(te),fn=>fn.version,(fn,Rn)=>{var Ft=Zc(),Sn=K(Ft),Un={};ge(()=>{Z(Sn,`${s(Rn).version??""}${s(Rn).stable?"":" (unstable)"}`),Un!==(Un=s(Rn).version)&&(Ft.value=(Ft.__value=Un)??"")}),N(fn,Ft)}),_a(wt),xa(wt,()=>s(M),fn=>g(M,fn)),N(Ot,wt)};Re(qe,Ot=>{s(B)==="loading"?Ot(pt):s(B)==="error"?Ot(nt,1):Ot(it,-1)})}N(xe,Ce)};Re(P,xe=>{s(Ee)&&xe(se)})}var ve=y(F,2),re=C(ve),me=y(re,2);{var Ne=xe=>{var Ce=Dg(),qe=K(Ce,!0);ge(()=>{Fe(Ce,"title",s(j)),Z(qe,s(j))}),N(xe,Ce)},De=xe=>{var Ce=Ug(),qe=K(Ce,!0);ge(()=>Z(qe,s(x)?`Selected Minecraft ${s(x)}`:"Pick a version to continue")),N(xe,Ce)};Re(me,xe=>{s(j)?xe(Ne):xe(De,-1)})}var ze=y(me,2),We=y(ze,2),ct=K(We,!0),at=y(Be,2);{var _t=xe=>{{let Ce=ft(()=>rt()??"");Lf(xe,{get currentKey(){return s(R)},get currentPath(){return s(Ce)},onpick:qe=>{g(R,qe,!0),g(I,""),g(G,!1)},oncustom:async()=>{const qe=await bt();return qe&&g(R,""),qe},onclose:()=>g(G,!1)})}};Re(at,xe=>{s(G)&&xe(_t)})}ge(()=>{Fe(V,"placeholder",s(x)?`Instance name (${s(x)})`:"Instance name"),ne.disabled=!s(b),Z(Ae,`${s(ae).length??""} shown`),We.disabled=!s(Ue),Fe(We,"title",s(Te)?"This mod loader is not supported yet.":"Create the instance"),Z(ct,s(z)?"Creating…":"OK")}),$("click",Be,xe=>{xe.target===xe.currentTarget&&e.onclose?.()}),$("click",vt,()=>g(G,!0)),Wt(V,()=>s(T),xe=>g(T,xe)),xa(fe,()=>s(A),xe=>g(A,xe)),$("click",L,()=>e.onclose?.()),Wt(ne,()=>s(p),xe=>g(p,xe)),$("click",re,Ie),$("click",ze,()=>e.onclose?.()),$("click",We,Se),N(i,Oe),Kt()}on(["click","keydown","change"]);var Og=W('<input class="h-7 w-full rounded border border-(--accent) bg-(--bg-surface) px-2 text-[13px] font-medium outline-none" aria-label="Instance name"/>'),Fg=W('<span class="group/name flex items-center gap-1"><span class="truncate"> </span> <button type="button" class="shrink-0 rounded p-0.5 text-[10px] text-(--text-muted) opacity-0 transition-opacity hover:text-(--accent) focus-visible:opacity-100 group-hover/name:opacity-100" title="Rename instance" aria-label="Rename instance">✎</button></span>'),Bg=W('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),zg=W('<button class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game"><!> Kill</button>'),Gg=W("<button> </button>"),Hg=W('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Vg=W('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><div class="flex items-start justify-between gap-2"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <button type="button" class="rounded p-1 text-[13px] leading-none text-(--text-muted) transition-colors hover:bg-(--bg-subtle) hover:text-(--text-main) focus-visible:ring-1 focus-visible:ring-(--accent) focus-visible:outline-none" title="Close panel (Esc)" aria-label="Clear selection and close the instance panel">✕</button></div> <h3 class="mt-2.5 truncate text-[14px] font-semibold"><!></h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"><!> Launch</button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip"><!> Export</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance"><!> Copy</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"><!> Delete</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance"><!> Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Wg(i,e){Yt(e,!0);let t=tt(e,"storage",3,null),n=tt(e,"gameRunning",3,!1),r=tt(e,"modsCount",3,null),a=tt(e,"groups",19,()=>[]),l=ee(!1),o=ee(""),c=ee(!1),u=ee("");function d(){g(u,e.instance.name,!0),g(c,!0)}function h(){if(!s(c))return;const fe=s(u).trim();g(c,!1),fe&&fe!==e.instance.name&&e.onrename?.(fe)}function f(){g(c,!1)}const v=ft(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function b(){const fe=mo(e.instance.icon_key);if(fe)return fe;const pe=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&pe?pe(e.instance.icon_path):"/logo.png"}function S(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function m(fe){const pe=new Date(fe*1e3),Y=L=>String(L).padStart(2,"0");return`${Y(pe.getDate())}/${Y(pe.getMonth()+1)}/${pe.getFullYear()} ${Y(pe.getHours())}:${Y(pe.getMinutes())}:${Y(pe.getSeconds())}`}function p(fe){const pe=Math.max(0,Math.floor(fe)),Y=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],L=[];let F=pe;for(const[de,O]of Y){const q=Math.floor(F/de);if(q&&(L.push(`${q} ${O}${q===1?"":"s"}`),F-=q*de,L.length===2))break}return L.length?L.join(" "):"0 seconds"}const w=ft(()=>{const fe=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${fe}, last played on ${m(e.instance.last_played)}, total played for ${p(e.instance.total_time_played)}`:fe});function x(fe){g(l,!1),g(o,""),e.onchangegroup?.(fe.trim()?fe.trim():null)}var T=Vg(),A=C(T),I=C(A),R=K(I),G=y(I,2),_=y(A,2),M=C(_);{var te=fe=>{var pe=Og();$("keydown",pe,Y=>{Y.key==="Enter"?h():Y.key==="Escape"&&f()}),Fn("blur",pe,h),Wt(pe,()=>s(u),Y=>g(u,Y)),N(fe,pe)},B=fe=>{var pe=Fg(),Y=C(pe),L=K(Y,!0),F=y(Y,2);ge(()=>Z(L,e.instance.name)),$("click",F,d),N(fe,pe)};Re(M,fe=>{s(c)?fe(te):fe(B,-1)})}var k=y(_,2),z=C(k),j=K(z,!0),be=y(z,2),le=K(be,!0),ce=y(be,2);{var he=fe=>{var pe=Bg(),Y=K(pe);ge(()=>Z(Y,`▤ ${e.instance.group??""}`)),N(fe,pe)};Re(ce,fe=>{e.instance.group&&fe(he)})}var Q=y(k,2),H=K(Q,!0),ae=y(Q,2),Te=C(ae),Ee=C(Te);Vt(Ee,{name:"launch",size:13});var Ue=y(Te,2);{var ke=fe=>{var pe=zg(),Y=C(pe);Vt(Y,{name:"kill",size:13}),$("click",pe,function(...L){e.onkill?.apply(this,L)}),N(fe,pe)};Re(Ue,fe=>{n()&&fe(ke)})}var Ve=y(Ue,2),Ge=C(Ve);Vt(Ge,{name:"edit",size:13});var rt=y(Ve,2),bt=y(C(rt),2),$e=K(bt,!0),ie=y(rt,2);{var gt=fe=>{var pe=Hg(),Y=C(pe),L=y(Y,2);At(L,16,a,q=>q,(q,_e)=>{var Le=Gg(),U=K(Le,!0);ge(()=>{mt(Le,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===_e?"font-medium text-(--accent)":"text-(--text-muted)"}`),Z(U,_e)}),$("click",Le,()=>x(_e)),N(q,Le)});var F=y(L,2),de=C(F),O=y(de,2);ge(q=>{mt(Y,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),O.disabled=q},[()=>!s(o).trim()]),$("click",Y,()=>x("")),$("keydown",de,q=>{q.key==="Enter"&&s(o).trim()&&x(s(o))}),Wt(de,()=>s(o),q=>g(o,q)),$("click",O,()=>x(s(o))),N(fe,pe)};Re(ie,fe=>{s(l)&&fe(gt)})}var He=y(ie,2),Se=C(He);Vt(Se,{name:"folder",size:13});var Ie=y(He,2),Oe=C(Ie);Vt(Oe,{name:"export",size:13});var Be=y(Ie,2),je=C(Be);Vt(je,{name:"copy",size:13});var Je=y(Be,2),vt=C(Je);Vt(vt,{name:"delete",size:13});var ot=y(Je,2),D=C(ot);Vt(D,{name:"shortcut",size:13});var E=y(ae,2),X=C(E),ye=K(X,!0),V=y(X,2),ue=K(V);ge((fe,pe,Y)=>{Fe(R,"src",fe),Fe(_,"title",e.instance.name),Z(j,e.instance.minecraft_version),mt(be,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${s(v)??""}`),Z(le,e.instance.loader_type),Fe(Q,"title",pe),Z(H,Y),Te.disabled=n(),Fe(Te,"title",n()?"A game is already running":`Launch ${e.instance.name}`),Z($e,s(l)?"▴":"▾"),He.disabled=!t(),Fe(He,"title",t()?"Opens the instance folder":"Storage unknown"),Z(ye,s(w)),Z(ue,`${r()??"…"??""} mods installed`)},[()=>b(),()=>S(),()=>S()]),Fn("error",R,fe=>{fe.currentTarget.dataset.f||(fe.currentTarget.dataset.f="1",fe.currentTarget.src="/logo.png")}),$("click",G,()=>e.onclose?.()),$("click",Te,function(...fe){e.onlaunch?.apply(this,fe)}),$("click",Ve,function(...fe){e.onedit?.apply(this,fe)}),$("click",rt,()=>g(l,!s(l))),$("click",He,function(...fe){e.onopenfolder?.apply(this,fe)}),$("click",Ie,function(...fe){e.onexport?.apply(this,fe)}),$("click",Be,function(...fe){e.oncopy?.apply(this,fe)}),$("click",Je,function(...fe){e.ondelete?.apply(this,fe)}),$("click",ot,function(...fe){e.onshortcut?.apply(this,fe)}),N(i,T),Kt()}on(["click","keydown"]);var jg=W("<button></button>"),Xg=W('<span class="text-[11px] text-rose-400">invalid hex</span>'),qg=W('<span class="text-[11px] text-(--text-muted)">live preview</span>'),Yg=W('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function Kg(i,e){Yt(e,!0);let t=tt(e,"theme",3,"twilight-dark");const n=ft(()=>ua(t())?.accent??Bc),r=ft(()=>{const x=ua(t())?.suggested??[],T=(ua(t())?.accent??Bc).toLowerCase();return x.map(A=>({...A,isBuiltin:A.hex.toLowerCase()===T}))});let a=ee(Ut(Al())),l=ee(Ut(s(a)??s(n))),o=ee(!1);en(()=>{t(),g(a,Al(),!0),g(l,s(a)??s(n),!0),g(o,!1)});function c(x){return s(a)===null?x.isBuiltin:s(a)===x.hex.toLowerCase()}function u(x){x.isBuiltin?(Ym(),g(a,null)):ls(x.hex)&&g(a,x.hex.toLowerCase(),!0),g(l,s(a)??s(n),!0),g(o,!1)}function d(x,T){const A=ls(x,{persist:T})?ms(x):null;A?(g(a,A,!0),g(o,!1)):g(o,!0)}var h=Yg(),f=yt(h);At(f,21,()=>s(r),x=>x.hex,(x,T)=>{var A=jg();ge((I,R)=>{mt(A,1,`h-7 w-7 rounded-full ${I??""}`),Ln(A,`background:${s(T).hex??""}`),Fe(A,"title",`${s(T).name??""}${s(T).isBuiltin?" (built-in)":""}`),Fe(A,"aria-label",`${s(T).name??""} accent`),Fe(A,"aria-pressed",R)},[()=>c(s(T))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>c(s(T))]),$("click",A,()=>u(s(T))),N(x,A)});var v=y(f,2),b=C(v),S=y(b,2),m=y(S,2);{var p=x=>{var T=Xg();N(x,T)},w=x=>{var T=qg();N(x,T)};Re(m,x=>{s(o)?x(p):x(w,-1)})}ge(()=>{as(b,s(l)),as(S,s(l)),Fe(S,"placeholder",s(n))}),$("input",b,x=>{g(l,x.currentTarget.value,!0),d(s(l),!1)}),$("change",b,x=>d(x.currentTarget.value,!0)),$("input",S,x=>{g(l,x.currentTarget.value,!0),d(s(l),!1)}),$("change",S,x=>d(x.currentTarget.value,!0)),N(i,h),Kt()}on(["click","input","change"]);var Zg=W('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Jg=W('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Qg=W('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),$g=W('<button><span class="flex items-center gap-2"><!> <!> <!></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),e_=W('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),Jc=W('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),t_=W(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Icon pack</h3> <p class="mt-1 text-[12px] text-(--text-muted)">The glyph set used across the launcher. Fluent (Auto) follows the theme.</p> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),Qc=W("<option> </option>"),n_=W('<p class="mt-2 text-[12px] text-rose-400"> </p>'),i_=W('<span class="text-amber-400">(selection not applied yet)</span>'),r_=W('<p class="mt-1 text-[12px] text-(--accent)"> </p>'),a_=W('<p role="alert" class="mt-1 text-[12px] text-rose-400"> </p>'),s_=W('<span class="shrink-0 text-(--accent)">active</span>'),o_=W('<li class="flex items-center justify-between gap-2 text-[11px] text-(--text-muted)"><span class="truncate font-mono"> </span> <!></li>'),l_=W('<ul class="mt-2 space-y-0.5"></ul>'),c_=W('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!><!></select> <!> <!> <div class="mt-3 flex flex-wrap items-center gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50">↻ Rescan JREs</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"> </button> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-50">Apply</button></div> <p class="mt-2 flex items-center gap-1.5 text-[11px] text-(--text-muted)"><span></span> Active runtime: <span class="font-mono"> </span> <!></p> <!> <!> <!> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),u_=W('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),d_=W('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),f_=W('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),h_=W('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),p_=W('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),m_=W('<p class="mt-2 text-[11px] text-green-500"> </p>'),v_=W('<p class="mt-2 text-[11px] text-rose-400"> </p>'),g_=W(`<h2 class="text-[16px] font-semibold">API Keys</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Optional keys for third-party APIs. The launcher works fully without them —
          every default flow is keyless.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="text-[12px] font-medium">CurseForge API key <span class="font-normal text-(--text-muted)"> </span></div> <p class="mt-0.5 text-[11px] text-(--text-muted)">Only used to auto-download mods from imported CurseForge packs. Your key is yours —
            paste it here, it is saved locally and never bundled with the launcher.</p> <div class="mt-3 flex gap-2"><input type="password" class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" aria-label="CurseForge API key" spellcheck="false"/> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)" title="Save the CurseForge API key (blank clears it)">Save</button></div> <!> <!></div>`,1),__=W(`<h2 class="text-[16px] font-semibold">Accessibility</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Assistive profiles that adapt suggestions, installs and pre-launch setup for screen-reader and caption users.</p> <div class="mt-6 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Blind Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Screen reader &amp; audio navigation. Suggests Minecraft Access and spatial-audio mods on
              Fabric; Fabric is strongly recommended over Vanilla or Horizon.</p></div> <button type="button" role="switch" aria-label="Blind Mode (screen reader and audio navigation): suggests Minecraft Access on Fabric and recommends Fabric over Vanilla or Horizon" title="Toggle Blind Mode"><span aria-hidden="true"></span></button></div> <div class="mt-4 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Deaf Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Closed captions &amp; visual sound cues. Enforces <span class="font-mono">showSubtitles:true</span> in <span class="font-mono">options.txt</span> before every launch and suggests visual-sound Fabric mods.</p></div> <button type="button" role="switch" aria-label="Deaf Mode (closed captions and visual sound cues): enforces showSubtitles true in options.txt before launch and suggests visual-sound Fabric mods" title="Toggle Deaf Mode"><span aria-hidden="true"></span></button></div> <p class="mt-4 text-[11px] text-(--text-muted)" aria-live="polite"> </p>`,1),x_=W('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),b_=W("<p> </p>"),y_=W('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div> <button class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Open the dedicated Accounts page"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <span class="truncate">Accounts</span></button></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function S_(i,e){Yt(e,!0);let t=tt(e,"version",3,""),n=tt(e,"theme",15,"twilight-dark"),r=tt(e,"blindMode",15,!1),a=tt(e,"deafMode",15,!1),l=tt(e,"storage",3,null),o=tt(e,"runtimes",19,()=>[]),c=tt(e,"scanning",3,!1),u=tt(e,"javaError",3,""),d=tt(e,"javaPath",15,""),h=tt(e,"javaCustomPaths",27,()=>Ut([])),f=tt(e,"minMem",15,0),v=tt(e,"maxMem",15,0);tt(e,"sharedInput",11,""),tt(e,"instancesInput",11,"");let b=tt(e,"storageBusy",3,!1),S=tt(e,"storageMsg",3,""),m=tt(e,"javaMsg",3,""),p=tt(e,"gameRunning",3,!1),w=ee(Ut([])),x=ee(""),T=ee(""),A=ee(!1),I=ee(Ut(d()));async function R(){const F=window.__TAURI__?.dialog?.open;if(!F){g(T,"File picker unavailable in this build.");return}g(T,""),g(x,"");try{const de=await F({multiple:!1,title:"Select a Java executable",filters:[{name:"Java",extensions:["exe",""]}]});if(!de)return;g(A,!0);const O=await window.__TAURI__.core.invoke("probe_java_path",{path:String(de)}),q=await e.onaddjava?.(O.executable);Array.isArray(q)&&g(w,q,!0),g(x,`Added Java ${O.major} (${O.version})`)}catch(de){g(T,String(de),!0)}finally{g(A,!1)}}async function G(F){g(T,""),g(A,!0);try{await e.onapplyjava?.(F||null),g(I,F||"",!0),d(F||""),g(x,F?"Applied. Launches will use this runtime.":"Reverted to auto-discovery.",!0)}catch(de){g(T,String(de),!0)}finally{g(A,!1)}}en(()=>{Array.isArray(h())&&g(w,h(),!0)});const _=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"apikeys",label:"API Keys",icon:"🔑"},{id:"accessibility",label:"Accessibility",icon:"♿"},{id:"about",label:"About & Updates",icon:"ℹ"}];let M=ee("appearance"),te=ee(Ut(ao())),B=ee(""),k=ee(!1),z=ee(""),j=ee("");async function be(){try{const F=await window.__TAURI__.core.invoke("get_curseforge_api_key");g(k,F.configured,!0)}catch(F){g(j,String(F),!0)}}be();async function le(){g(j,""),g(z,"");try{await window.__TAURI__.core.invoke("set_curseforge_api_key",{apiKey:s(B)});const F=await window.__TAURI__.core.invoke("get_curseforge_api_key");g(k,F.configured,!0),g(B,""),g(z,F.configured?"Saved. Imported CurseForge packs will resolve their mod downloads.":"Cleared. The zero-key flow (Modrinth core mods + manual import) stays active.",!0)}catch(F){g(j,String(F),!0)}}let ce=ee(Ut(Mr())),he=ee(""),Q=ee(!0),H=ee(Ut(Wc())),ae=ee(""),Te=ee("");function Ee(){g(H,Wc(),!0),g(Te,"Loaded the active theme’s tokens — tweak and save.")}function Ue(){try{const F=Vc({name:s(he),dark:s(Q),tokens:s(H)});g(ce,Mr(),!0),n(F.id),g(Te,`Saved “${F.name}”.`)}catch(F){g(Te,String(F),!0)}}function ke(F){$m(F),g(ce,Mr(),!0),n()===F&&n(rc),g(Te,"Theme deleted.")}function Ve(){g(ae,JSON.stringify({name:s(he).trim()||"My theme",dark:s(Q),tokens:s(H)},null,2),!0),g(Te,"Theme JSON written below — copy it to share.")}function Ge(){try{const F=JSON.parse(s(ae));if(!F||typeof F!="object"||Array.isArray(F))throw new Error("Expected a theme object.");const de=Vc(F);g(ce,Mr(),!0),n(de.id),g(Te,`Imported “${de.name}”.`),g(ae,"")}catch(F){g(Te,`Import failed: ${F}`)}}async function rt(F){const de=window.__TAURI__?.dialog?.open;if(!de)return null;try{const O=await de({directory:!0,multiple:!1,defaultPath:F&&F.trim()?F.trim():void 0});return typeof O=="string"?O:null}catch{return null}}const bt=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let $e=ee(Ut({}));en(()=>{l()&&g($e,{instances:l().is_default_instances?"":l().instances_dir,shared:l().is_default_shared?"":l().shared_dir,versions:l().is_default_versions?"":l().versions_dir,mods:l().is_default_mods?"":l().mods_dir,icons:l().is_default_icons?"":l().icons_dir,java:l().is_default_java?"":l().java_dir,skins:l().is_default_skins?"":l().skins_dir,downloads:l().downloads_dir||""},!0)});function ie(F){return l()?F==="downloads"?l().staging_root:l()[`${F}_dir`]:""}function gt(F){return l()?F==="downloads"?l().is_default_staging:l()[`is_default_${F}`]:!0}const He="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var Se=y_(),Ie=C(Se),Oe=C(Ie),Be=y(Oe,2);At(Be,21,()=>_,F=>F.id,(F,de)=>{var O=Zg(),q=C(O),_e=C(q);wi(_e,{get emoji(){return s(de).icon},size:15});var Le=y(q,2),U=K(Le,!0);ge(()=>{mt(O,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${s(M)===s(de).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Fe(O,"aria-current",s(M)===s(de).id?"true":void 0),Z(U,s(de).label)}),$("click",O,()=>g(M,s(de).id,!0)),N(F,O)});var je=y(Be,2),Je=C(je),vt=C(Je);Vt(vt,{name:"accounts",size:15});var ot=y(Ie,2),D=C(ot),E=C(D);{var X=F=>{var de=t_(),O=y(yt(de),6),q=C(O);At(q,17,()=>vo,lt=>lt.id,(lt,Ze)=>{var xt=Jg(),P=C(xt),se=C(P),ve=y(se,2),re=y(ve,2),me=y(P,2),Ne=K(me,!0),De=y(me,2),ze=K(De,!0);ge(()=>{mt(xt,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===s(Ze).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Fe(xt,"aria-pressed",n()===s(Ze).id),Fe(xt,"title",`${s(Ze).label??""}: ${s(Ze).dark?"dark":"light"} ground`),Ln(se,`background:${s(Ze).swatch[0]??""}`),Ln(ve,`background:${s(Ze).swatch[1]??""}`),Ln(re,`background:${s(Ze).swatch[2]??""}`),Z(Ne,s(Ze).label),Z(ze,s(Ze).dark?"Dark ground":"Light ground")}),$("click",xt,()=>n(s(Ze).id)),N(lt,xt)});var _e=y(q,2);At(_e,17,()=>s(ce),lt=>lt.id,(lt,Ze)=>{var xt=Qg(),P=C(xt),se=C(P),ve=y(se,2),re=y(ve,2),me=y(P,2),Ne=K(me,!0),De=y(me,2),ze=K(De),We=y(De,2);ge(()=>{mt(xt,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===s(Ze).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Fe(xt,"title",`${s(Ze).name??""}: ${s(Ze).dark?"dark":"light"} ground`),Ln(se,`background:${s(Ze).tokens.bg1??""}`),Ln(ve,`background:${s(Ze).tokens.bg3??""}`),Ln(re,`background:${s(Ze).tokens.accent1??""}`),Z(Ne,s(Ze).name),Z(ze,`Custom · ${s(Ze).dark?"Dark":"Light"} ground`),Fe(We,"title",`Delete ${s(Ze).name??""}`),Fe(We,"aria-label",`Delete ${s(Ze).name??""}`)}),$("click",xt,()=>n(s(Ze).id)),$("keydown",xt,ct=>{(ct.key==="Enter"||ct.key===" ")&&(ct.preventDefault(),n(s(Ze).id))}),$("click",We,ct=>{ct.stopPropagation(),ke(s(Ze).id)}),N(lt,xt)});var Le=y(O,4),U=C(Le);Kg(U,{get theme(){return n()}});var we=y(Le,6);At(we,21,()=>Uf,lt=>lt.id,(lt,Ze)=>{var xt=$g(),P=C(xt),se=C(P);Vt(se,{name:"instances",size:16,get pack(){return s(Ze).id}});var ve=y(se,2);Vt(ve,{name:"settings",size:16,get pack(){return s(Ze).id}});var re=y(ve,2);Vt(re,{name:"accounts",size:16,get pack(){return s(Ze).id}});var me=y(P,2),Ne=K(me,!0),De=y(me,2),ze=K(De,!0);ge(()=>{mt(xt,1,`flex flex-col items-start gap-2 rounded border p-2.5 text-left ${s(te)===s(Ze).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Fe(xt,"aria-pressed",s(te)===s(Ze).id),Fe(xt,"title",`${s(Ze).label??""}: ${s(Ze).hint??""}`),Z(Ne,s(Ze).label),Z(ze,s(Ze).hint)}),$("click",xt,()=>{sv(s(Ze).id),g(te,ao(),!0)}),N(lt,xt)});var ne=y(we,6),Me=C(ne),Ae=C(Me),Qe=y(Ae,2),Ke=C(Qe),Xe=y(Ke,2),st=y(Me,2);At(st,21,()=>Zm,lt=>lt.key,(lt,Ze)=>{var xt=e_(),P=C(xt),se=K(P,!0),ve=y(P,2),re=C(ve),me=y(re,2);ge(()=>{Z(se,s(Ze).label),as(re,s(H)[s(Ze).key]),Fe(re,"title",`${s(Ze).label??""} color`),Fe(re,"aria-label",`${s(Ze).label??""} color`),as(me,s(H)[s(Ze).key]),Fe(me,"aria-label",`${s(Ze).label??""} hex`)}),$("input",re,Ne=>g(H,{...s(H),[s(Ze).key]:Ne.currentTarget.value},!0)),$("input",me,Ne=>g(H,{...s(H),[s(Ze).key]:Ne.currentTarget.value},!0)),N(lt,xt)});var ut=y(st,2),Rt=C(ut),St=y(Rt,2),ht=y(ne,4),Et=C(ht),Bt=y(Et,2),zt=C(Bt),Lt=y(zt,2),Gt=y(ht,2);{var tn=lt=>{var Ze=Jc(),xt=K(Ze,!0);ge(()=>Z(xt,s(Te))),N(lt,Ze)};Re(Gt,lt=>{s(Te)&&lt(tn)})}ge(()=>{mt(Ke,1,`px-3 py-1.5 text-[12px] ${s(Q)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Fe(Ke,"aria-pressed",s(Q)),mt(Xe,1,`px-3 py-1.5 text-[12px] ${s(Q)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),Fe(Xe,"aria-pressed",!s(Q))}),Wt(Ae,()=>s(he),lt=>g(he,lt)),$("click",Ke,()=>g(Q,!0)),$("click",Xe,()=>g(Q,!1)),$("click",Rt,Ee),$("click",St,Ue),Wt(Et,()=>s(ae),lt=>g(ae,lt)),$("click",zt,Ve),$("click",Lt,Ge),N(F,de)},ye=F=>{var de=c_(),O=y(yt(de),6),q=C(O);q.value=q.__value="";var _e=y(q);At(_e,17,o,De=>De.executable,(De,ze)=>{var We=Qc(),ct=K(We),at={};ge(()=>{Z(ct,`Java ${s(ze).major??""} — ${s(ze).home??""}`),at!==(at=s(ze).executable)&&(We.value=(We.__value=at)??"")}),N(De,We)});var Le=y(_e);At(Le,16,()=>s(w).filter(De=>!o().some(ze=>ze.executable===De)),De=>De,(De,ze)=>{var We=Qc(),ct=K(We),at={};ge(()=>{Z(ct,`Custom — ${ze??""}`),at!==(at=ze)&&(We.value=(We.__value=at)??"")}),N(De,We)}),_a(O);var U=y(O,2);{var we=De=>{var ze=Jc(),We=K(ze,!0);ge(()=>Z(We,c()?"Probing system roots…":"No runtimes detected.")),N(De,ze)};Re(U,De=>{o().length||De(we)})}var ne=y(U,2);{var Me=De=>{var ze=n_(),We=K(ze,!0);ge(()=>Z(We,u())),N(De,ze)};Re(ne,De=>{u()&&De(Me)})}var Ae=y(ne,2),Qe=C(Ae),Ke=y(Qe,2),Xe=K(Ke,!0),st=y(Ke,2),ut=y(Ae,2),Rt=C(ut),St=y(Rt,2),ht=K(St,!0),Et=y(St,2);{var Bt=De=>{var ze=i_();N(De,ze)};Re(Et,De=>{d()!==s(I)&&De(Bt)})}var zt=y(ut,2);{var Lt=De=>{var ze=r_(),We=K(ze,!0);ge(()=>Z(We,s(x))),N(De,ze)};Re(zt,De=>{s(x)&&De(Lt)})}var Gt=y(zt,2);{var tn=De=>{var ze=a_(),We=K(ze,!0);ge(()=>Z(We,s(T))),N(De,ze)};Re(Gt,De=>{s(T)&&De(tn)})}var lt=y(Gt,2);{var Ze=De=>{var ze=l_();At(ze,20,()=>s(w),We=>We,(We,ct)=>{var at=o_(),_t=C(at),xe=K(_t,!0),Ce=y(_t,2);{var qe=pt=>{var nt=s_();N(pt,nt)};Re(Ce,pt=>{s(I)===ct&&pt(qe)})}ge(()=>{Fe(_t,"title",ct),Z(xe,ct)}),N(We,at)}),N(De,ze)};Re(lt,De=>{s(w).length&&De(Ze)})}var xt=y(lt,4),P=y(C(xt),2),se=y(P,2),ve=y(xt,2),re=y(C(ve),2),me=y(re,2),Ne=y(ve,4);ge(()=>{Qe.disabled=c(),Ke.disabled=s(A),Z(Xe,s(A)?"Checking…":"Browse / Add Custom Java…"),st.disabled=s(A)||d()===s(I),mt(Rt,1,`inline-block h-1.5 w-1.5 rounded-full ${s(I)?"bg-(--accent)":"bg-(--text-muted)"}`),Z(ht,s(I)||"auto-discovery")}),xa(O,d),$("click",Qe,function(...De){e.onscanjava?.apply(this,De)}),$("click",Ke,R),$("click",st,()=>G(d())),Wt(P,f),Wt(se,f),Wt(re,v),Wt(me,v),$("click",Ne,function(...De){e.onsaveprefs?.apply(this,De)}),N(F,de)},V=F=>{var de=p_(),O=y(yt(de),4);{var q=_e=>{var Le=h_(),U=yt(Le),we=C(U),ne=C(we),Me=y(C(ne),2),Ae=K(Me,!0),Qe=y(ne,2),Ke=y(U,2);At(Ke,17,()=>bt,Xe=>Xe.key,(Xe,st)=>{var ut=f_(),Rt=C(ut),St=C(Rt),ht=C(St),Et=y(ht),Bt=K(Et,!0),zt=y(St,2);{var Lt=Ne=>{var De=u_();ge(()=>De.disabled=b()),$("click",De,()=>e.onsavefolder?.(s(st).key,"")),N(Ne,De)},Gt=ft(()=>!gt(s(st).key));Re(zt,Ne=>{s(Gt)&&Ne(Lt)})}var tn=y(Rt,2),lt=K(tn,!0),Ze=y(tn,2),xt=C(Ze),P=y(xt,2),se=y(P,2),ve=y(se,2),re=y(Ze,2);{var me=Ne=>{var De=d_(),ze=C(De),We=K(ze),ct=y(ze,2);ge(()=>{Fe(ze,"title",l().staging_root),Z(We,`Staging: ${l().staging_root??""}`),ct.disabled=b()||p(),Fe(ct,"title",p()?"Unavailable while a game is running":"Purges the staging area")}),$("click",ct,function(...at){e.oncleanstaging?.apply(this,at)}),N(Ne,De)};Re(re,Ne=>{s(st).key==="downloads"&&Ne(me)})}ge((Ne,De)=>{Z(ht,`${s(st).label??""} `),Z(Bt,Ne),Z(lt,s(st).hint),Fe(xt,"placeholder",De),ve.disabled=b()},[()=>gt(s(st).key)?"(default)":"(custom)",()=>ie(s(st).key)]),Wt(xt,()=>s($e)[s(st).key],Ne=>s($e)[s(st).key]=Ne),$("click",P,async()=>{const Ne=await rt(s($e)[s(st).key]);Ne&&(s($e)[s(st).key]=Ne)}),$("click",se,()=>e.onopenfolder?.(ie(s(st).key))),$("click",ve,()=>e.onsavefolder?.(s(st).key,s($e)[s(st).key])),N(Xe,ut)}),ge(()=>{Fe(Me,"title",l().app_data),Z(Ae,l().app_data)}),$("click",Qe,()=>e.onopenfolder?.(l().app_data)),N(_e,Le)};Re(O,_e=>{l()&&_e(q)})}N(F,de)},ue=F=>{var de=g_(),O=y(yt(de),4),q=C(O),_e=y(C(q)),Le=K(_e,!0),U=y(q,4),we=C(U),ne=y(we,2),Me=y(U,2);{var Ae=Xe=>{var st=m_(),ut=K(st,!0);ge(()=>Z(ut,s(z))),N(Xe,st)};Re(Me,Xe=>{s(z)&&Xe(Ae)})}var Qe=y(Me,2);{var Ke=Xe=>{var st=v_(),ut=K(st,!0);ge(()=>Z(ut,s(j))),N(Xe,st)};Re(Qe,Xe=>{s(j)&&Xe(Ke)})}ge(()=>{Z(Le,s(k)?"(configured)":"(not set)"),Fe(we,"placeholder",s(k)?"•••••••••••• (saved — paste a new key to replace)":"Paste your CurseForge API key")}),Wt(we,()=>s(B),Xe=>g(B,Xe)),$("click",ne,le),N(F,de)},fe=F=>{var de=__(),O=y(yt(de),4),q=y(C(O),2),_e=K(q),Le=y(O,2),U=y(C(Le),2),we=K(U),ne=y(Le,2),Me=K(ne);ge(()=>{Fe(q,"aria-checked",r()),mt(q,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${r()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),mt(_e,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${r()?"translate-x-[22px]":""}`),Fe(U,"aria-checked",a()),mt(U,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${a()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),mt(we,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${a()?"translate-x-[22px]":""}`),Z(Me,`Blind Mode is ${r()?"on":"off"}. Deaf Mode is ${a()?"on":"off"}.`)}),$("click",q,()=>r(!r())),$("click",U,()=>a(!a())),N(F,de)},pe=F=>{var de=x_(),O=y(yt(de),4),q=C(O),_e=y(C(q),2),Le=C(_e),U=y(C(Le)),we=K(U),ne=y(O,2),Me=C(ne),Ae=y(Me,2),Qe=y(Ae,2);ge(()=>Z(we,`(alpha-v${t()??""})`)),$("click",Me,()=>e.onopenurl?.(`${He}`)),$("click",Ae,()=>e.onopenurl?.(`${He}/releases`)),$("click",Qe,()=>e.onopenurl?.(`${He}/issues`)),N(F,de)};Re(E,F=>{s(M)==="appearance"?F(X):s(M)==="java"?F(ye,1):s(M)==="storage"?F(V,2):s(M)==="apikeys"?F(ue,3):s(M)==="accessibility"?F(fe,4):F(pe,-1)})}var Y=y(E,2);{var L=F=>{var de=b_(),O=K(de,!0);ge(()=>{mt(de,1,`mt-5 text-[12px] ${m()?"text-(--accent)":"text-(--text-muted)"}`),Z(O,m()||S())}),N(F,de)};Re(Y,F=>{(m()||S())&&F(L)})}$("click",Oe,function(...F){e.onback?.apply(this,F)}),$("click",je,function(...F){e.onopenaccounts?.apply(this,F)}),N(i,Se),Kt()}on(["click","keydown","input"]);var M_=W("<button> </button>"),w_=W('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),E_=W('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),T_=W('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),$c=W('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),A_=W('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),eu=W('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),R_=W('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),C_=W('<div class="p-4"><!> <!></div>'),P_=W(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),L_=W('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),I_=W('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),D_=W('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),U_=W('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),k_=W(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),N_=W('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),O_=W('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),F_=W('<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div><!> <!></div>',1);function Ff(i,e){Yt(e,!0);let t=ee("offline"),n=ee(""),r=ee(!1),a=ee(""),l=ee(""),o=ee("idle"),c=ee(""),u=ee(null),d=ee(!1),h=null,f=ee("idle"),v=ee(""),b=ee(!1),S=ee(!1),m=ee(null),p=ee(!1),w=null,x=ee(""),T=ee(""),A=ee(!1),I=ee(""),R=ee(""),G=ee(""),_=ee("");function M(Se,Ie){const Oe=window.__TAURI__?.core;return Oe?Oe.invoke(Se,Ie):Promise.reject(new Error("Tauri backend unavailable in this preview."))}nc(()=>{te(),B()});function te(){h&&(clearInterval(h),h=null)}function B(){w&&(clearInterval(w),w=null)}en(()=>{const Se=s(a).trim(),Ie=setTimeout(async()=>{if(!Se){g(l,"");return}try{g(l,await M("offline_uuid",{username:Se}),!0)}catch{g(l,"")}},200);return()=>clearTimeout(Ie)});async function k(Se){Se.preventDefault(),g(n,""),g(r,!0);try{await M("add_offline_account",{username:s(a).trim()}),g(a,""),g(l,""),await e.onrefresh?.()}catch(Ie){g(n,String(Ie),!0)}finally{g(r,!1)}}async function z(){g(c,""),g(d,!1),g(o,"requesting");try{g(u,await M("start_microsoft_device_code"),!0),g(o,"code"),te(),h=setInterval(j,(s(u).interval||5)*1e3)}catch(Se){g(o,"idle"),g(c,String(Se),!0)}}async function j(){if(s(u))try{const Se=await M("poll_microsoft_device_code",{device:s(u)});if(Se.state==="pending")return;if(Se.state==="slow_down"){te(),h=setInterval(j,((s(u).interval||5)+5)*1e3);return}if(te(),Se.state==="failed"){g(c,Se.reason,!0),g(u,null),g(o,"idle");return}g(u,null),g(o,"signedin"),await e.onrefresh?.()}catch(Se){g(c,String(Se),!0)}}async function be(){if(s(u))try{await navigator.clipboard.writeText(s(u).user_code),g(d,!0),setTimeout(()=>g(d,!1),1600)}catch{}}async function le(){g(v,""),g(b,!1),g(S,!0);try{await M("elyby_browser_login"),g(b,!0),await e.onrefresh?.()}catch(Se){g(v,String(Se),!0)}finally{g(S,!1)}}async function ce(){g(v,""),g(p,!1),g(f,"requesting");try{g(m,await M("start_elyby_device_code"),!0),g(f,"code"),B(),w=setInterval(he,(s(m).interval||5)*1e3)}catch(Se){g(f,"idle"),g(v,String(Se),!0)}}async function he(){if(s(m))try{const Se=await M("poll_elyby_device_code",{device:s(m)});if(Se.state==="pending")return;if(Se.state==="slow_down"){B(),w=setInterval(he,((s(m).interval||5)+5)*1e3);return}if(B(),Se.state==="failed"){g(v,Se.reason,!0),g(m,null),g(f,"idle");return}g(m,null),g(f,"signedin"),await e.onrefresh?.()}catch(Se){g(v,String(Se),!0)}}async function Q(){if(s(m))try{await navigator.clipboard.writeText(s(m).user_code),g(p,!0),setTimeout(()=>g(p,!1),1600)}catch{}}function H(){const Se=s(m)?.verification_uri_complete??s(m)?.verification_uri;Se&&M("open_external_url",{url:Se}).catch(()=>{})}async function ae(Se){Se.preventDefault(),g(n,""),g(A,!0),g(b,!1);try{await M("add_elyby_account",{username:s(x).trim(),password:s(T)}),g(x,""),g(T,""),g(b,!0),await e.onrefresh?.()}catch(Ie){g(n,String(Ie),!0)}finally{g(A,!1)}}async function Te(Se){Se.preventDefault(),g(n,""),g(r,!0);try{const Ie=await M("add_custom_yggdrasil_account",{username:s(I).trim(),serverUrl:s(R).trim()});(s(G).trim()||s(_).trim())&&await M("set_account_textures",{id:Ie.id,skin:s(G).trim()||null,cape:s(_).trim()||null}),g(I,""),g(R,""),g(G,""),g(_,""),await e.onrefresh?.()}catch(Ie){g(n,String(Ie),!0)}finally{g(r,!1)}}async function Ee(Se){const Ie=window.__TAURI__?.dialog?.open;if(!Ie){g(n,"File picker unavailable in this build.");return}try{const Oe=await Ie({multiple:!1,title:Se==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Oe)return;const Be=String(Oe);g(Se==="skin"?G:_,Be,!0),g(n,"")}catch(Oe){g(n,String(Oe),!0)}}var Ue=F_(),ke=yt(Ue);At(ke,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],wl,(Se,Ie)=>{var Oe=ft(()=>Od(Ie,2));let Be=()=>s(Oe)[0],je=()=>s(Oe)[1];var Je=M_(),vt=K(Je,!0);ge(()=>{mt(Je,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${s(t)===Be()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),Z(vt,je())}),$("click",Je,()=>{g(t,Be(),!0),g(n,"")}),N(Se,Je)});var Ve=y(ke,2),Ge=C(Ve);{var rt=Se=>{var Ie=E_(),Oe=yt(Ie),Be=C(Oe),je=y(Be,2),Je=y(Oe,2);{var vt=ot=>{var D=w_(),E=y(C(D),2),X=K(E,!0);ge(()=>Z(X,s(l))),N(ot,D)};Re(Je,ot=>{s(l)&&ot(vt)})}ge(ot=>je.disabled=ot,[()=>!s(a).trim()||s(r)]),Fn("submit",Oe,k),Wt(Be,()=>s(a),ot=>g(a,ot)),N(Se,Ie)},bt=Se=>{var Ie=C_(),Oe=C(Ie);{var Be=E=>{var X=T_(),ye=yt(X);ge(()=>ye.disabled=s(r)),$("click",ye,z),N(E,X)},je=E=>{var X=$c();N(E,X)},Je=E=>{var X=A_(),ye=y(C(X),2),V=K(ye,!0),ue=y(ye,4),fe=K(ue,!0),pe=y(ue,2),Y=C(pe),L=K(Y,!0),F=y(Y,2);ge(()=>{Z(V,s(u).verification_uri),Z(fe,s(u).user_code),Z(L,s(d)?"Copied ✓":"Copy code")}),$("click",Y,be),$("click",F,z),N(E,X)},vt=E=>{var X=eu(),ye=y(yt(X),2);$("click",ye,()=>{g(o,"idle"),g(c,"")}),N(E,X)};Re(Oe,E=>{s(o)==="idle"?E(Be):s(o)==="requesting"?E(je,1):s(o)==="code"&&s(u)?E(Je,2):s(o)==="signedin"&&E(vt,3)})}var ot=y(Oe,2);{var D=E=>{var X=R_(),ye=K(X,!0);ge(()=>Z(ye,s(c))),N(E,X)};Re(ot,E=>{s(c)&&E(D)})}N(Se,Ie)},$e=Se=>{var Ie=k_(),Oe=y(C(Ie),2);{var Be=L=>{var F=P_(),de=yt(F),O=K(de,!0),q=y(de,4);ge(()=>{de.disabled=s(S),Z(O,s(S)?"Waiting for the browser…":"Sign in with browser (recommended)"),q.disabled=s(S)}),$("click",de,le),$("click",q,ce),N(L,F)},je=L=>{var F=$c();N(L,F)},Je=L=>{var F=I_(),de=y(C(F),2),O=K(de,!0),q=y(de,4),_e=K(q,!0),Le=y(q,2),U=C(Le),we=K(U,!0),ne=y(U,2);{var Me=Qe=>{var Ke=L_();$("click",Ke,H),N(Qe,Ke)};Re(ne,Qe=>{(s(m).verification_uri||s(m).verification_uri_complete)&&Qe(Me)})}var Ae=y(ne,2);ge(()=>{Z(O,s(m).verification_uri),Z(_e,s(m).user_code),Z(we,s(p)?"Copied ✓":"Copy code")}),$("click",U,Q),$("click",Ae,ce),N(L,F)},vt=L=>{var F=eu(),de=y(yt(F),2);$("click",de,()=>{g(f,"idle"),g(v,"")}),N(L,F)};Re(Oe,L=>{s(f)==="idle"?L(Be):s(f)==="requesting"?L(je,1):s(f)==="code"&&s(m)?L(Je,2):s(f)==="signedin"&&L(vt,3)})}var ot=y(Oe,2);{var D=L=>{var F=D_(),de=K(F,!0);ge(()=>Z(de,s(v))),N(L,F)};Re(ot,L=>{s(v)&&L(D)})}var E=y(ot,2);{var X=L=>{var F=U_();N(L,F)};Re(E,L=>{s(b)&&s(f)==="idle"&&L(X)})}var ye=y(E,2),V=y(C(ye),2),ue=C(V),fe=y(ue,2),pe=y(fe,2),Y=K(pe,!0);ge(L=>{pe.disabled=L,Z(Y,s(A)?"Signing in…":"Sign in")},[()=>!s(x).trim()||!s(T)||s(A)]),Fn("submit",V,ae),Wt(ue,()=>s(x),L=>g(x,L)),Wt(fe,()=>s(T),L=>g(T,L)),N(Se,Ie)},ie=Se=>{var Ie=N_(),Oe=C(Ie),Be=y(Oe,2),je=y(Be,2),Je=C(je),vt=y(C(Je)),ot=K(vt,!0),D=y(Je,2),E=y(C(D)),X=K(E,!0),ye=y(je,2);ge(V=>{Z(ot,s(G)||"none"),Z(X,s(_)||"none"),ye.disabled=V},[()=>!s(I).trim()||!s(R).trim()||s(r)]),Fn("submit",Ie,Te),Wt(Oe,()=>s(R),V=>g(R,V)),Wt(Be,()=>s(I),V=>g(I,V)),$("click",Je,()=>Ee("skin")),$("click",D,()=>Ee("cape")),N(Se,Ie)};Re(Ge,Se=>{s(t)==="offline"?Se(rt):s(t)==="microsoft"?Se(bt,1):s(t)==="elyby"?Se($e,2):s(t)==="custom"&&Se(ie,3)})}var gt=y(Ge,2);{var He=Se=>{var Ie=O_(),Oe=K(Ie,!0);ge(()=>Z(Oe,s(n))),N(Se,Ie)};Re(gt,Se=>{s(n)&&Se(He)})}N(i,Ue),Kt()}on(["click"]);const sc="156",Nr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},B_=0,tu=1,z_=2,Bf=1,G_=2,zi=3,Ri=0,Bn=1,ii=2,qi=0,da=1,nu=2,iu=3,ru=4,H_=5,ra=100,V_=101,W_=102,au=103,su=104,j_=200,X_=201,q_=202,Y_=203,zf=204,Gf=205,K_=206,Z_=207,J_=208,Q_=209,$_=210,ex=0,tx=1,nx=2,Ll=3,ix=4,rx=5,ax=6,sx=7,Hf=0,ox=1,lx=2,lr=0,cx=1,ux=2,dx=3,fx=4,hx=5,Vf=300,ba=301,ya=302,so=303,Il=304,go=306,Dl=1e3,ci=1001,Ul=1002,$t=1003,ou=1004,No=1005,ti=1006,px=1007,cs=1008,cr=1009,mx=1010,vx=1011,oc=1012,Wf=1013,sr=1014,Wi=1015,Sa=1016,jf=1017,Xf=1018,Ar=1020,gx=1021,ui=1023,_x=1024,xx=1025,Rr=1026,Ma=1027,bx=1028,qf=1029,yx=1030,Yf=1031,Kf=1033,Oo=33776,Fo=33777,Bo=33778,zo=33779,lu=35840,cu=35841,uu=35842,du=35843,Sx=36196,fu=37492,hu=37496,pu=37808,mu=37809,vu=37810,gu=37811,_u=37812,xu=37813,bu=37814,yu=37815,Su=37816,Mu=37817,wu=37818,Eu=37819,Tu=37820,Au=37821,Go=36492,Ru=36494,Cu=36495,Mx=36283,Pu=36284,Lu=36285,Iu=36286,Zf=3e3,Cr=3001,wx=3200,Ex=3201,Jf=0,Tx=1,Pr="",Jt="srgb",Ci="srgb-linear",_o="display-p3",Ho=7680,Ax=519,Rx=512,Cx=513,Px=514,Lx=515,Ix=516,Dx=517,Ux=518,kx=519,kl=35044,Du="300 es",Nl=1035,ji=2e3,oo=2001;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,Ol=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function In(i,e,t){return Math.max(e,Math.min(t,i))}function Nx(i,e){return(i%e+e)%e}function Vo(i,e,t){return(1-t)*i+t*e}function Uu(i){return(i&i-1)===0&&i!==0}function Fl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ox={DEG2RAD:Zs};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(e,t,n,r,a,l,o,c,u){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,o,c,u)}set(e,t,n,r,a,l,o,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=l,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],o=n[3],c=n[6],u=n[1],d=n[4],h=n[7],f=n[2],v=n[5],b=n[8],S=r[0],m=r[3],p=r[6],w=r[1],x=r[4],T=r[7],A=r[2],I=r[5],R=r[8];return a[0]=l*S+o*w+c*A,a[3]=l*m+o*x+c*I,a[6]=l*p+o*T+c*R,a[1]=u*S+d*w+h*A,a[4]=u*m+d*x+h*I,a[7]=u*p+d*T+h*R,a[2]=f*S+v*w+b*A,a[5]=f*m+v*x+b*I,a[8]=f*p+v*T+b*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],u=e[7],d=e[8];return t*l*d-t*o*u-n*a*d+n*o*c+r*a*u-r*l*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],u=e[7],d=e[8],h=d*l-o*u,f=o*c-d*a,v=u*a-l*c,b=t*h+n*f+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/b;return e[0]=h*S,e[1]=(r*u-d*n)*S,e[2]=(o*n-r*l)*S,e[3]=f*S,e[4]=(d*t-r*c)*S,e[5]=(r*a-o*t)*S,e[6]=v*S,e[7]=(n*c-u*t)*S,e[8]=(l*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,o){const c=Math.cos(a),u=Math.sin(a);return this.set(n*c,n*u,-n*(c*l+u*o)+l+e,-r*u,r*c,-r*(-u*l+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wo.makeScale(e,t)),this}rotate(e){return this.premultiply(Wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Pt;function Qf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fx(){const i=lo("canvas");return i.style.display="block",i}const ku={};function Qa(i){i in ku||(ku[i]=!0,console.warn(i))}function fa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Bx=new Pt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),zx=new Pt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Gx(i){return i.convertSRGBToLinear().applyMatrix3(zx)}function Hx(i){return i.applyMatrix3(Bx).convertLinearToSRGB()}const Vx={[Ci]:i=>i,[Jt]:i=>i.convertSRGBToLinear(),[_o]:Gx},Wx={[Ci]:i=>i,[Jt]:i=>i.convertLinearToSRGB(),[_o]:Hx},Jn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Ci},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Vx[e],r=Wx[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Fr;class $f{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=lo("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=fa(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fa(t[n]/255)*255):t[n]=fa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jx=0;class eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,o=r.length;l<o;l++)r[l].isDataTexture?a.push(Xo(r[l].image)):a.push(Xo(r[l]))}else a=Xo(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xx=0;class En extends Dr{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,n=ci,r=ci,a=ti,l=cs,o=ui,c=cr,u=En.DEFAULT_ANISOTROPY,d=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=ur(),this.name="",this.source=new eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Cr?Jt:Pr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?Cr:Zf}set encoding(e){Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cr?Jt:Pr}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Vf;En.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,n=0,r=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,u=c[0],d=c[4],h=c[8],f=c[1],v=c[5],b=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(b-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(b+m)<.1&&Math.abs(u+v+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,T=(v+1)/2,A=(p+1)/2,I=(d+f)/4,R=(h+S)/4,G=(b+m)/4;return x>T&&x>A?x<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(x),r=I/n,a=R/n):T>A?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=I/r,a=G/r):A<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),n=R/a,r=G/a),this.set(n,r,a,t),this}let w=Math.sqrt((m-b)*(m-b)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(m-b)/w,this.y=(h-S)/w,this.z=(f-d)/w,this.w=Math.acos((u+v+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qx extends Dr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Qa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cr?Jt:Pr),this.texture=new En(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends qx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class th extends En{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yx extends En{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,o){let c=n[r+0],u=n[r+1],d=n[r+2],h=n[r+3];const f=a[l+0],v=a[l+1],b=a[l+2],S=a[l+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=v,e[t+2]=b,e[t+3]=S;return}if(h!==S||c!==f||u!==v||d!==b){let m=1-o;const p=c*f+u*v+d*b+h*S,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),I=Math.atan2(A,p*w);m=Math.sin(m*I)/A,o=Math.sin(o*I)/A}const T=o*w;if(c=c*m+f*T,u=u*m+v*T,d=d*m+b*T,h=h*m+S*T,m===1-o){const A=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=A,u*=A,d*=A,h*=A}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,l){const o=n[r],c=n[r+1],u=n[r+2],d=n[r+3],h=a[l],f=a[l+1],v=a[l+2],b=a[l+3];return e[t]=o*b+d*h+c*v-u*f,e[t+1]=c*b+d*f+u*h-o*v,e[t+2]=u*b+d*v+o*f-c*h,e[t+3]=d*b-o*h-c*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,l=e._order,o=Math.cos,c=Math.sin,u=o(n/2),d=o(r/2),h=o(a/2),f=c(n/2),v=c(r/2),b=c(a/2);switch(l){case"XYZ":this._x=f*d*h+u*v*b,this._y=u*v*h-f*d*b,this._z=u*d*b+f*v*h,this._w=u*d*h-f*v*b;break;case"YXZ":this._x=f*d*h+u*v*b,this._y=u*v*h-f*d*b,this._z=u*d*b-f*v*h,this._w=u*d*h+f*v*b;break;case"ZXY":this._x=f*d*h-u*v*b,this._y=u*v*h+f*d*b,this._z=u*d*b+f*v*h,this._w=u*d*h-f*v*b;break;case"ZYX":this._x=f*d*h-u*v*b,this._y=u*v*h+f*d*b,this._z=u*d*b-f*v*h,this._w=u*d*h+f*v*b;break;case"YZX":this._x=f*d*h+u*v*b,this._y=u*v*h+f*d*b,this._z=u*d*b-f*v*h,this._w=u*d*h-f*v*b;break;case"XZY":this._x=f*d*h-u*v*b,this._y=u*v*h-f*d*b,this._z=u*d*b+f*v*h,this._w=u*d*h+f*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],o=t[5],c=t[9],u=t[2],d=t[6],h=t[10],f=n+o+h;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-c)*v,this._y=(a-u)*v,this._z=(l-r)*v}else if(n>o&&n>h){const v=2*Math.sqrt(1+n-o-h);this._w=(d-c)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+u)/v}else if(o>h){const v=2*Math.sqrt(1+o-n-h);this._w=(a-u)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+h-n-o);this._w=(l-r)/v,this._x=(a+u)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,o=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+l*o+r*u-a*c,this._y=r*d+l*c+a*o-n*u,this._z=a*d+l*u+n*c-r*o,this._w=l*d-n*o-r*c-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let o=l*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),d=Math.atan2(u,o),h=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=l*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,n=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,o=e.z,c=e.w,u=c*t+l*r-o*n,d=c*n+o*t-a*r,h=c*r+a*n-l*t,f=-a*t-l*n-o*r;return this.x=u*c+f*-a+d*-o-h*-l,this.y=d*c+f*-l+h*-a-u*-o,this.z=h*c+f*-o+u*-l-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*l-n*c,this.z=n*o-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new oe,Nu=new Ir;class vs{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let l=0,o=a.count;l<o;l++)ki.fromBufferAttribute(a,l).applyMatrix4(e.matrixWorld),this.expandByPoint(ki)}else r.boundingBox===null&&r.computeBoundingBox(),Br.copy(r.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),ys.subVectors(this.max,Ua),zr.subVectors(e.a,Ua),Gr.subVectors(e.b,Ua),Hr.subVectors(e.c,Ua),tr.subVectors(Gr,zr),nr.subVectors(Hr,Gr),hr.subVectors(zr,Hr);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-hr.z,hr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,hr.z,0,-hr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-hr.y,hr.x,0];return!Yo(t,zr,Gr,Hr,ys)||(t=[1,0,0,0,1,0,0,0,1],!Yo(t,zr,Gr,Hr,ys))?!1:(Ss.crossVectors(tr,nr),t=[Ss.x,Ss.y,Ss.z],Yo(t,zr,Gr,Hr,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],ki=new oe,Br=new vs,zr=new oe,Gr=new oe,Hr=new oe,tr=new oe,nr=new oe,hr=new oe,Ua=new oe,ys=new oe,Ss=new oe,pr=new oe;function Yo(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){pr.fromArray(i,a);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),c=e.dot(pr),u=t.dot(pr),d=n.dot(pr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>o)return!1}return!0}const Kx=new vs,ka=new oe,Ko=new oe;class lc{constructor(e=new oe,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kx.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ka,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Ko)),this.expandByPoint(ka.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new oe,Zo=new oe,Ms=new oe,ir=new oe,Jo=new oe,ws=new oe,Qo=new oe;class nh{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zo.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(Zo);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Ms),o=ir.dot(this.direction),c=-ir.dot(Ms),u=ir.lengthSq(),d=Math.abs(1-l*l);let h,f,v,b;if(d>0)if(h=l*c-o,f=l*o-c,b=a*d,h>=0)if(f>=-b)if(f<=b){const S=1/d;h*=S,f*=S,v=h*(h+l*f+2*o)+f*(l*h+f+2*c)+u}else f=a,h=Math.max(0,-(l*f+o)),v=-h*h+f*(f+2*c)+u;else f=-a,h=Math.max(0,-(l*f+o)),v=-h*h+f*(f+2*c)+u;else f<=-b?(h=Math.max(0,-(-l*a+o)),f=h>0?-a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u):f<=b?(h=0,f=Math.min(Math.max(-a,-c),a),v=f*(f+2*c)+u):(h=Math.max(0,-(l*a+o)),f=h>0?a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u);else f=l>0?-a:a,h=Math.max(0,-(l*f+o)),v=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zo).addScaledVector(Ms,f),v}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),r=Ni.dot(Ni)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),o=n-l,c=n+l;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,o,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(a=(e.min.y-f.y)*d,l=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,l=(e.min.y-f.y)*d),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,r,a){Jo.subVectors(t,e),ws.subVectors(n,e),Qo.crossVectors(Jo,ws);let l=this.direction.dot(Qo),o;if(l>0){if(r)return null;o=1}else if(l<0)o=-1,l=-l;else return null;ir.subVectors(this.origin,e);const c=o*this.direction.dot(ws.crossVectors(ir,ws));if(c<0)return null;const u=o*this.direction.dot(Jo.cross(ir));if(u<0||c+u>l)return null;const d=-o*ir.dot(Qo);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,n,r,a,l,o,c,u,d,h,f,v,b,S,m){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,o,c,u,d,h,f,v,b,S,m)}set(e,t,n,r,a,l,o,c,u,d,h,f,v,b,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=l,p[9]=o,p[13]=c,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=v,p[7]=b,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),a=1/Vr.setFromMatrixColumn(e,1).length(),l=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=l*d,v=l*h,b=o*d,S=o*h;t[0]=c*d,t[4]=-c*h,t[8]=u,t[1]=v+b*u,t[5]=f-S*u,t[9]=-o*c,t[2]=S-f*u,t[6]=b+v*u,t[10]=l*c}else if(e.order==="YXZ"){const f=c*d,v=c*h,b=u*d,S=u*h;t[0]=f+S*o,t[4]=b*o-v,t[8]=l*u,t[1]=l*h,t[5]=l*d,t[9]=-o,t[2]=v*o-b,t[6]=S+f*o,t[10]=l*c}else if(e.order==="ZXY"){const f=c*d,v=c*h,b=u*d,S=u*h;t[0]=f-S*o,t[4]=-l*h,t[8]=b+v*o,t[1]=v+b*o,t[5]=l*d,t[9]=S-f*o,t[2]=-l*u,t[6]=o,t[10]=l*c}else if(e.order==="ZYX"){const f=l*d,v=l*h,b=o*d,S=o*h;t[0]=c*d,t[4]=b*u-v,t[8]=f*u+S,t[1]=c*h,t[5]=S*u+f,t[9]=v*u-b,t[2]=-u,t[6]=o*c,t[10]=l*c}else if(e.order==="YZX"){const f=l*c,v=l*u,b=o*c,S=o*u;t[0]=c*d,t[4]=S-f*h,t[8]=b*h+v,t[1]=h,t[5]=l*d,t[9]=-o*d,t[2]=-u*d,t[6]=v*h+b,t[10]=f-S*h}else if(e.order==="XZY"){const f=l*c,v=l*u,b=o*c,S=o*u;t[0]=c*d,t[4]=-h,t[8]=u*d,t[1]=f*h+S,t[5]=l*d,t[9]=v*h-b,t[2]=b*h-v,t[6]=o*d,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,Jx)}lookAt(e,t,n){const r=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),rr.crossVectors(n,Gn),rr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),rr.crossVectors(n,Gn)),rr.normalize(),Es.crossVectors(Gn,rr),r[0]=rr.x,r[4]=Es.x,r[8]=Gn.x,r[1]=rr.y,r[5]=Es.y,r[9]=Gn.y,r[2]=rr.z,r[6]=Es.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],o=n[4],c=n[8],u=n[12],d=n[1],h=n[5],f=n[9],v=n[13],b=n[2],S=n[6],m=n[10],p=n[14],w=n[3],x=n[7],T=n[11],A=n[15],I=r[0],R=r[4],G=r[8],_=r[12],M=r[1],te=r[5],B=r[9],k=r[13],z=r[2],j=r[6],be=r[10],le=r[14],ce=r[3],he=r[7],Q=r[11],H=r[15];return a[0]=l*I+o*M+c*z+u*ce,a[4]=l*R+o*te+c*j+u*he,a[8]=l*G+o*B+c*be+u*Q,a[12]=l*_+o*k+c*le+u*H,a[1]=d*I+h*M+f*z+v*ce,a[5]=d*R+h*te+f*j+v*he,a[9]=d*G+h*B+f*be+v*Q,a[13]=d*_+h*k+f*le+v*H,a[2]=b*I+S*M+m*z+p*ce,a[6]=b*R+S*te+m*j+p*he,a[10]=b*G+S*B+m*be+p*Q,a[14]=b*_+S*k+m*le+p*H,a[3]=w*I+x*M+T*z+A*ce,a[7]=w*R+x*te+T*j+A*he,a[11]=w*G+x*B+T*be+A*Q,a[15]=w*_+x*k+T*le+A*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],o=e[5],c=e[9],u=e[13],d=e[2],h=e[6],f=e[10],v=e[14],b=e[3],S=e[7],m=e[11],p=e[15];return b*(+a*c*h-r*u*h-a*o*f+n*u*f+r*o*v-n*c*v)+S*(+t*c*v-t*u*f+a*l*f-r*l*v+r*u*d-a*c*d)+m*(+t*u*h-t*o*v-a*l*h+n*l*v+a*o*d-n*u*d)+p*(-r*o*d-t*c*h+t*o*f+r*l*h-n*l*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],v=e[11],b=e[12],S=e[13],m=e[14],p=e[15],w=h*m*u-S*f*u+S*c*v-o*m*v-h*c*p+o*f*p,x=b*f*u-d*m*u-b*c*v+l*m*v+d*c*p-l*f*p,T=d*S*u-b*h*u+b*o*v-l*S*v-d*o*p+l*h*p,A=b*h*c-d*S*c-b*o*f+l*S*f+d*o*m-l*h*m,I=t*w+n*x+r*T+a*A;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=w*R,e[1]=(S*f*a-h*m*a-S*r*v+n*m*v+h*r*p-n*f*p)*R,e[2]=(o*m*a-S*c*a+S*r*u-n*m*u-o*r*p+n*c*p)*R,e[3]=(h*c*a-o*f*a-h*r*u+n*f*u+o*r*v-n*c*v)*R,e[4]=x*R,e[5]=(d*m*a-b*f*a+b*r*v-t*m*v-d*r*p+t*f*p)*R,e[6]=(b*c*a-l*m*a-b*r*u+t*m*u+l*r*p-t*c*p)*R,e[7]=(l*f*a-d*c*a+d*r*u-t*f*u-l*r*v+t*c*v)*R,e[8]=T*R,e[9]=(b*h*a-d*S*a-b*n*v+t*S*v+d*n*p-t*h*p)*R,e[10]=(l*S*a-b*o*a+b*n*u-t*S*u-l*n*p+t*o*p)*R,e[11]=(d*o*a-l*h*a-d*n*u+t*h*u+l*n*v-t*o*v)*R,e[12]=A*R,e[13]=(d*S*r-b*h*r+b*n*f-t*S*f-d*n*m+t*h*m)*R,e[14]=(b*o*r-l*S*r-b*n*c+t*S*c+l*n*m-t*o*m)*R,e[15]=(l*h*r-d*o*r+d*n*c-t*h*c-l*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,o=e.y,c=e.z,u=a*l,d=a*o;return this.set(u*l+n,u*o-r*c,u*c+r*o,0,u*o+r*c,d*o+n,d*c-r*l,0,u*c-r*o,d*c+r*l,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,o=t._z,c=t._w,u=a+a,d=l+l,h=o+o,f=a*u,v=a*d,b=a*h,S=l*d,m=l*h,p=o*h,w=c*u,x=c*d,T=c*h,A=n.x,I=n.y,R=n.z;return r[0]=(1-(S+p))*A,r[1]=(v+T)*A,r[2]=(b-x)*A,r[3]=0,r[4]=(v-T)*I,r[5]=(1-(f+p))*I,r[6]=(m+w)*I,r[7]=0,r[8]=(b+x)*R,r[9]=(m-w)*R,r[10]=(1-(f+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Vr.set(r[0],r[1],r[2]).length();const l=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const u=1/a,d=1/l,h=1/o;return si.elements[0]*=u,si.elements[1]*=u,si.elements[2]*=u,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),n.x=a,n.y=l,n.z=o,this}makePerspective(e,t,n,r,a,l,o=ji){const c=this.elements,u=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let v,b;if(o===ji)v=-(l+a)/(l-a),b=-2*l*a/(l-a);else if(o===oo)v=-l/(l-a),b=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,l,o=ji){const c=this.elements,u=1/(t-e),d=1/(n-r),h=1/(l-a),f=(t+e)*u,v=(n+r)*d;let b,S;if(o===ji)b=(l+a)*h,S=-2*h;else if(o===oo)b=a*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=S,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new oe,si=new sn,Zx=new oe(0,0,0),Jx=new oe(1,1,1),rr=new oe,Es=new oe,Gn=new oe,Ou=new sn,Fu=new Ir;class xo{constructor(e=0,t=0,n=0,r=xo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],o=r[8],c=r[1],u=r[5],d=r[9],h=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(In(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-In(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(In(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(In(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xo.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qx=0;const Bu=new oe,Wr=new Ir,Oi=new sn,Ts=new oe,Na=new oe,$x=new oe,eb=new Ir,zu=new oe(1,0,0),Gu=new oe(0,1,0),Hu=new oe(0,0,1),tb={type:"added"},nb={type:"removed"};class Tn extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new oe,t=new xo,n=new Ir,r=new oe(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new sn},normalMatrix:{value:new Pt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Na,Ts,this.up):Oi.lookAt(Ts,Na,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(Oi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const l=this.children[r].getObjectsByProperty(e,t);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,$x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=l(e.geometries),c=l(e.materials),u=l(e.textures),d=l(e.images),h=l(e.shapes),f=l(e.skeletons),v=l(e.animations),b=l(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=r,n;function l(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new oe(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new oe,Fi=new oe,$o=new oe,Bi=new oe,jr=new oe,Xr=new oe,Vu=new oe,el=new oe,tl=new oe,nl=new oe;let As=!1;class ni{constructor(e=new oe,t=new oe,n=new oe){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),oi.subVectors(e,t),r.cross(oi);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){oi.subVectors(r,t),Fi.subVectors(n,t),$o.subVectors(e,t);const l=oi.dot(oi),o=oi.dot(Fi),c=oi.dot($o),u=Fi.dot(Fi),d=Fi.dot($o),h=l*u-o*o;if(h===0)return a.set(-2,-1,-1);const f=1/h,v=(u*c-o*d)*f,b=(l*d-o*c)*f;return a.set(1-v-b,b,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bi),Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(e,t,n,r,a,l,o,c){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(e,t,n,r,a,l,o,c)}static getInterpolation(e,t,n,r,a,l,o,c){return this.getBarycoord(e,t,n,r,Bi),c.setScalar(0),c.addScaledVector(a,Bi.x),c.addScaledVector(l,Bi.y),c.addScaledVector(o,Bi.z),c}static isFrontFacing(e,t,n,r){return oi.subVectors(n,t),Fi.subVectors(e,t),oi.cross(Fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),oi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,o;jr.subVectors(r,n),Xr.subVectors(a,n),el.subVectors(e,n);const c=jr.dot(el),u=Xr.dot(el);if(c<=0&&u<=0)return t.copy(n);tl.subVectors(e,r);const d=jr.dot(tl),h=Xr.dot(tl);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return l=c/(c-d),t.copy(n).addScaledVector(jr,l);nl.subVectors(e,a);const v=jr.dot(nl),b=Xr.dot(nl);if(b>=0&&v<=b)return t.copy(a);const S=v*u-c*b;if(S<=0&&u>=0&&b<=0)return o=u/(u-b),t.copy(n).addScaledVector(Xr,o);const m=d*b-v*h;if(m<=0&&h-d>=0&&v-b>=0)return Vu.subVectors(a,r),o=(h-d)/(h-d+(v-b)),t.copy(r).addScaledVector(Vu,o);const p=1/(m+S+f);return l=S*p,o=f*p,t.copy(n).addScaledVector(jr,l).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ib=0;class La extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=da,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Gf,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==da&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const o in a){const c=a[o];delete c.metadata,l.push(c)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function il(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Jn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Jn.workingColorSpace){if(e=Nx(e,1),t=In(t,0,1),n=In(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=il(l,a,e+1/3),this.g=il(l,a,e),this.b=il(l,a,e-1/3)}return Jn.toWorkingColorSpace(this,r),this}setStyle(e,t=Jt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],o=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=rh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return Jn.fromWorkingColorSpace(wn.copy(this),e),Math.round(In(wn.r*255,0,255))*65536+Math.round(In(wn.g*255,0,255))*256+Math.round(In(wn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jn.workingColorSpace){Jn.fromWorkingColorSpace(wn.copy(this),t);const n=wn.r,r=wn.g,a=wn.b,l=Math.max(n,r,a),o=Math.min(n,r,a);let c,u;const d=(o+l)/2;if(o===l)c=0,u=0;else{const h=l-o;switch(u=d<=.5?h/(l+o):h/(2-l-o),l){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=Jn.workingColorSpace){return Jn.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Jt){Jn.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,n=wn.g,r=wn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(li),li.h+=e,li.s+=t,li.l+=n,this.setHSL(li.h,li.s,li.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Rs);const n=Vo(li.h,Rs.h,t),r=Vo(li.s,Rs.s,t),a=Vo(li.l,Rs.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Nt;Nt.NAMES=rh;class ah extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new oe,Cs=new dt;class mi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRange={offset:0,count:-1},this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class sh extends mi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class oh extends mi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yi extends mi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rb=0;const Kn=new sn,rl=new Tn,qr=new oe,Hn=new vs,Oa=new vs,_n=new oe;class $i extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?oh:sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Pt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Hn.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new oe,1/0);return}if(e){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const o=t[a];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(Hn.min,Oa.min),Hn.expandByPoint(_n),_n.addVectors(Hn.max,Oa.max),Hn.expandByPoint(_n)):(Hn.expandByPoint(Oa.min),Hn.expandByPoint(Oa.max))}Hn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)_n.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(_n));if(t)for(let a=0,l=t.length;a<l;a++){const o=t[a],c=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)_n.fromBufferAttribute(o,u),c&&(qr.fromBufferAttribute(e,u),_n.add(qr)),r=Math.max(r,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let M=0;M<o;M++)u[M]=new oe,d[M]=new oe;const h=new oe,f=new oe,v=new oe,b=new dt,S=new dt,m=new dt,p=new oe,w=new oe;function x(M,te,B){h.fromArray(r,M*3),f.fromArray(r,te*3),v.fromArray(r,B*3),b.fromArray(l,M*2),S.fromArray(l,te*2),m.fromArray(l,B*2),f.sub(h),v.sub(h),S.sub(b),m.sub(b);const k=1/(S.x*m.y-m.x*S.y);isFinite(k)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(v,-S.y).multiplyScalar(k),w.copy(v).multiplyScalar(S.x).addScaledVector(f,-m.x).multiplyScalar(k),u[M].add(p),u[te].add(p),u[B].add(p),d[M].add(w),d[te].add(w),d[B].add(w))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let M=0,te=T.length;M<te;++M){const B=T[M],k=B.start,z=B.count;for(let j=k,be=k+z;j<be;j+=3)x(n[j+0],n[j+1],n[j+2])}const A=new oe,I=new oe,R=new oe,G=new oe;function _(M){R.fromArray(a,M*3),G.copy(R);const te=u[M];A.copy(te),A.sub(R.multiplyScalar(R.dot(te))).normalize(),I.crossVectors(G,te);const k=I.dot(d[M])<0?-1:1;c[M*4]=A.x,c[M*4+1]=A.y,c[M*4+2]=A.z,c[M*4+3]=k}for(let M=0,te=T.length;M<te;++M){const B=T[M],k=B.start,z=B.count;for(let j=k,be=k+z;j<be;j+=3)_(n[j+0]),_(n[j+1]),_(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);const r=new oe,a=new oe,l=new oe,o=new oe,c=new oe,u=new oe,d=new oe,h=new oe;if(e)for(let f=0,v=e.count;f<v;f+=3){const b=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,m),d.subVectors(l,a),h.subVectors(r,a),d.cross(h),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,m),o.add(d),c.add(d),u.add(d),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),d.subVectors(l,a),h.subVectors(r,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,c){const u=o.array,d=o.itemSize,h=o.normalized,f=new u.constructor(c.length*d);let v=0,b=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?v=c[S]*o.data.stride+o.offset:v=c[S]*d;for(let p=0;p<d;p++)f[b++]=u[v++]}return new mi(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,n);t.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const c=[],u=a[o];for(let d=0,h=u.length;d<h;d++){const f=u[d],v=e(f,n);c.push(v)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let o=0,c=l.length;o<c;o++){const u=l[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const v=u[h];d.push(v.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],h=a[u];for(let f=0,v=h.length;f<v;f++)d.push(h[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,d=l.length;u<d;u++){const h=l[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new sn,mr=new nh,Ps=new lc,ju=new oe,Yr=new oe,Kr=new oe,Zr=new oe,al=new oe,Ls=new oe,Is=new dt,Ds=new dt,Us=new dt,Xu=new oe,qu=new oe,Yu=new oe,ks=new oe,Ns=new oe;class jt extends Tn{constructor(e=new $i,t=new ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ls.set(0,0,0);for(let c=0,u=a.length;c<u;c++){const d=o[c],h=a[c];d!==0&&(al.fromBufferAttribute(h,e),l?Ls.addScaledVector(al,d):Ls.addScaledVector(al.sub(t),d))}t.add(Ls)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(a),mr.copy(e.ray).recast(e.near),!(Ps.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ps,ju)===null||mr.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&(Wu.copy(a).invert(),mr.copy(e.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,o=a.index,c=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,v=a.drawRange;if(o!==null)if(Array.isArray(l))for(let b=0,S=f.length;b<S;b++){const m=f[b],p=l[m.materialIndex],w=Math.max(m.start,v.start),x=Math.min(o.count,Math.min(m.start+m.count,v.start+v.count));for(let T=w,A=x;T<A;T+=3){const I=o.getX(T),R=o.getX(T+1),G=o.getX(T+2);r=Os(this,p,e,n,u,d,h,I,R,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),S=Math.min(o.count,v.start+v.count);for(let m=b,p=S;m<p;m+=3){const w=o.getX(m),x=o.getX(m+1),T=o.getX(m+2);r=Os(this,l,e,n,u,d,h,w,x,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(l))for(let b=0,S=f.length;b<S;b++){const m=f[b],p=l[m.materialIndex],w=Math.max(m.start,v.start),x=Math.min(c.count,Math.min(m.start+m.count,v.start+v.count));for(let T=w,A=x;T<A;T+=3){const I=T,R=T+1,G=T+2;r=Os(this,p,e,n,u,d,h,I,R,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),S=Math.min(c.count,v.start+v.count);for(let m=b,p=S;m<p;m+=3){const w=m,x=m+1,T=m+2;r=Os(this,l,e,n,u,d,h,w,x,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ab(i,e,t,n,r,a,l,o){let c;if(e.side===Bn?c=n.intersectTriangle(l,a,r,!0,o):c=n.intersectTriangle(r,a,l,e.side===Ri,o),c===null)return null;Ns.copy(o),Ns.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Ns);return u<t.near||u>t.far?null:{distance:u,point:Ns.clone(),object:i}}function Os(i,e,t,n,r,a,l,o,c,u){i.getVertexPosition(o,Yr),i.getVertexPosition(c,Kr),i.getVertexPosition(u,Zr);const d=ab(i,e,t,n,Yr,Kr,Zr,ks);if(d){r&&(Is.fromBufferAttribute(r,o),Ds.fromBufferAttribute(r,c),Us.fromBufferAttribute(r,u),d.uv=ni.getInterpolation(ks,Yr,Kr,Zr,Is,Ds,Us,new dt)),a&&(Is.fromBufferAttribute(a,o),Ds.fromBufferAttribute(a,c),Us.fromBufferAttribute(a,u),d.uv1=ni.getInterpolation(ks,Yr,Kr,Zr,Is,Ds,Us,new dt),d.uv2=d.uv1),l&&(Xu.fromBufferAttribute(l,o),qu.fromBufferAttribute(l,c),Yu.fromBufferAttribute(l,u),d.normal=ni.getInterpolation(ks,Yr,Kr,Zr,Xu,qu,Yu,new oe),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:u,normal:new oe,materialIndex:0};ni.getNormal(Yr,Kr,Zr,h.normal),d.face=h}return d}class rn extends $i{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const o=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const c=[],u=[],d=[],h=[];let f=0,v=0;b("z","y","x",-1,-1,n,t,e,l,a,0),b("z","y","x",1,-1,n,t,-e,l,a,1),b("x","z","y",1,1,e,n,t,r,l,2),b("x","z","y",1,-1,e,n,-t,r,l,3),b("x","y","z",1,-1,e,t,n,r,a,4),b("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Yi(u,3)),this.setAttribute("normal",new Yi(d,3)),this.setAttribute("uv",new Yi(h,2));function b(S,m,p,w,x,T,A,I,R,G,_){const M=T/R,te=A/G,B=T/2,k=A/2,z=I/2,j=R+1,be=G+1;let le=0,ce=0;const he=new oe;for(let Q=0;Q<be;Q++){const H=Q*te-k;for(let ae=0;ae<j;ae++){const Te=ae*M-B;he[S]=Te*w,he[m]=H*x,he[p]=z,u.push(he.x,he.y,he.z),he[S]=0,he[m]=0,he[p]=I>0?1:-1,d.push(he.x,he.y,he.z),h.push(ae/R),h.push(1-Q/G),le+=1}}for(let Q=0;Q<G;Q++)for(let H=0;H<R;H++){const ae=f+H+j*Q,Te=f+H+j*(Q+1),Ee=f+(H+1)+j*(Q+1),Ue=f+(H+1)+j*Q;c.push(ae,Te,Ue),c.push(Te,Ee,Ue),ce+=6}o.addGroup(v,ce,_),v+=ce,f+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pn(i){const e={};for(let t=0;t<i.length;t++){const n=wa(i[t]);for(const r in n)e[r]=n[r]}return e}function sb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){return i.getRenderTarget()===null?i.outputColorSpace:Ci}const ch={clone:wa,merge:Pn};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wa(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uh extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wn extends uh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,u=l.fullHeight;a+=l.offsetX*r/c,t-=l.offsetY*n/u,r*=l.width/c,n*=l.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jr=-90,Qr=1;class cb extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Wn(Jr,Qr,e,t);r.layers=this.layers,this.add(r);const a=new Wn(Jr,Qr,e,t);a.layers=this.layers,this.add(a);const l=new Wn(Jr,Qr,e,t);l.layers=this.layers,this.add(l);const o=new Wn(Jr,Qr,e,t);o.layers=this.layers,this.add(o);const c=new Wn(Jr,Qr,e,t);c.layers=this.layers,this.add(c);const u=new Wn(Jr,Qr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,o,c]=t;for(const u of t)this.remove(u);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,u]=this.children,d=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(d),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class dh extends En{constructor(e,t,n,r,a,l,o,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:ba,super(e,t,n,r,a,l,o,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ub extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Qa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cr?Jt:Pr),this.texture=new dh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rn(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:wa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:qi});a.uniforms.tEquirect.value=t;const l=new jt(r,a),o=t.minFilter;return t.minFilter===cs&&(t.minFilter=ti),new cb(1,10,this).update(e,l),t.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const sl=new oe,db=new oe,fb=new Pt;class ar{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=sl.subVectors(n,t).cross(db.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fb.getNormalMatrix(e),r=this.coplanarPoint(sl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new lc,Fs=new oe;class cc{constructor(e=new ar,t=new ar,n=new ar,r=new ar,a=new ar,l=new ar){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ji){const n=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],v=r[8],b=r[9],S=r[10],m=r[11],p=r[12],w=r[13],x=r[14],T=r[15];if(n[0].setComponents(c-a,f-u,m-v,T-p).normalize(),n[1].setComponents(c+a,f+u,m+v,T+p).normalize(),n[2].setComponents(c+l,f+d,m+b,T+w).normalize(),n[3].setComponents(c-l,f-d,m-b,T-w).normalize(),n[4].setComponents(c-o,f-h,m-S,T-x).normalize(),t===ji)n[5].setComponents(c+o,f+h,m+S,T+x).normalize();else if(t===oo)n[5].setComponents(o,h,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fh(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function hb(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,d){const h=u.array,f=u.usage,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,h,f),u.onUploadCallback();let b;if(h instanceof Float32Array)b=i.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=i.SHORT;else if(h instanceof Uint32Array)b=i.UNSIGNED_INT;else if(h instanceof Int32Array)b=i.INT;else if(h instanceof Int8Array)b=i.BYTE;else if(h instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function a(u,d,h){const f=d.array,v=d.updateRange;i.bindBuffer(h,u),v.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(i.deleteBuffer(d.buffer),n.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,r(u,d)):h.version<u.version&&(a(h.buffer,u,d),h.version=u.version)}return{get:l,remove:o,update:c}}class uc extends $i{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,d=c+1,h=e/o,f=t/c,v=[],b=[],S=[],m=[];for(let p=0;p<d;p++){const w=p*f-l;for(let x=0;x<u;x++){const T=x*h-a;b.push(T,-w,0),S.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const x=w+u*p,T=w+u*(p+1),A=w+1+u*(p+1),I=w+1+u*p;v.push(x,T,I),v.push(T,A,I)}this.setIndex(v),this.setAttribute("position",new Yi(b,3)),this.setAttribute("normal",new Yi(S,3)),this.setAttribute("uv",new Yi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.widthSegments,e.heightSegments)}}var pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ob=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$b=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,A0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ay=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_y=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,by=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Py=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ny=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:pb,alphahash_pars_fragment:mb,alphamap_fragment:vb,alphamap_pars_fragment:gb,alphatest_fragment:_b,alphatest_pars_fragment:xb,aomap_fragment:bb,aomap_pars_fragment:yb,begin_vertex:Sb,beginnormal_vertex:Mb,bsdfs:wb,iridescence_fragment:Eb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:Ab,clipping_planes_pars_fragment:Rb,clipping_planes_pars_vertex:Cb,clipping_planes_vertex:Pb,color_fragment:Lb,color_pars_fragment:Ib,color_pars_vertex:Db,color_vertex:Ub,common:kb,cube_uv_reflection_fragment:Nb,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Fb,displacementmap_vertex:Bb,emissivemap_fragment:zb,emissivemap_pars_fragment:Gb,colorspace_fragment:Hb,colorspace_pars_fragment:Vb,envmap_fragment:Wb,envmap_common_pars_fragment:jb,envmap_pars_fragment:Xb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:a0,envmap_vertex:Yb,fog_vertex:Kb,fog_pars_vertex:Zb,fog_fragment:Jb,fog_pars_fragment:Qb,gradientmap_pars_fragment:$b,lightmap_fragment:e0,lightmap_pars_fragment:t0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:r0,lights_toon_fragment:s0,lights_toon_pars_fragment:o0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:h0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:x0,map_pars_fragment:b0,map_particle_fragment:y0,map_particle_pars_fragment:S0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:w0,morphcolor_vertex:E0,morphnormal_vertex:T0,morphtarget_pars_vertex:A0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:L0,normal_pars_vertex:I0,normal_vertex:D0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:F0,opaque_fragment:B0,packing:z0,premultiplied_alpha_fragment:G0,project_vertex:H0,dithering_fragment:V0,dithering_pars_fragment:W0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:Y0,shadowmap_vertex:K0,shadowmask_pars_fragment:Z0,skinbase_vertex:J0,skinning_pars_vertex:Q0,skinning_vertex:$0,skinnormal_vertex:ey,specularmap_fragment:ty,specularmap_pars_fragment:ny,tonemapping_fragment:iy,tonemapping_pars_fragment:ry,transmission_fragment:ay,transmission_pars_fragment:sy,uv_pars_fragment:oy,uv_pars_vertex:ly,uv_vertex:cy,worldpos_vertex:uy,background_vert:dy,background_frag:fy,backgroundCube_vert:hy,backgroundCube_frag:py,cube_vert:my,cube_frag:vy,depth_vert:gy,depth_frag:_y,distanceRGBA_vert:xy,distanceRGBA_frag:by,equirect_vert:yy,equirect_frag:Sy,linedashed_vert:My,linedashed_frag:wy,meshbasic_vert:Ey,meshbasic_frag:Ty,meshlambert_vert:Ay,meshlambert_frag:Ry,meshmatcap_vert:Cy,meshmatcap_frag:Py,meshnormal_vert:Ly,meshnormal_frag:Iy,meshphong_vert:Dy,meshphong_frag:Uy,meshphysical_vert:ky,meshphysical_frag:Ny,meshtoon_vert:Oy,meshtoon_frag:Fy,points_vert:By,points_frag:zy,shadow_vert:Gy,shadow_frag:Hy,sprite_vert:Vy,sprite_frag:Wy},Ye={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},bi={basic:{uniforms:Pn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Pn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Pn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Pn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Pn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Pn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Pn([Ye.points,Ye.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Pn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Pn([Ye.common,Ye.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Pn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Pn([Ye.sprite,Ye.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Pn([Ye.common,Ye.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Pn([Ye.lights,Ye.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};bi.physical={uniforms:Pn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Bs={r:0,b:0,g:0};function jy(i,e,t,n,r,a,l){const o=new Nt(0);let c=a===!0?0:1,u,d,h=null,f=0,v=null;function b(m,p){let w=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?S(o,c):x&&x.isColor&&(S(x,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,l):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===go)?(d===void 0&&(d=new jt(new rn(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:wa(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=x.colorSpace!==Jt,(h!==x||f!==x.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,v=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new jt(new uc(2,2),new Ji({name:"BackgroundMaterial",uniforms:wa(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,v=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function S(m,p){m.getRGB(Bs,lh(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,p,l)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,S(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,S(o,c)},render:b}}function Xy(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,o={},c=m(null);let u=c,d=!1;function h(z,j,be,le,ce){let he=!1;if(l){const Q=S(le,be,j);u!==Q&&(u=Q,v(u.object)),he=p(z,le,be,ce),he&&w(z,le,be,ce)}else{const Q=j.wireframe===!0;(u.geometry!==le.id||u.program!==be.id||u.wireframe!==Q)&&(u.geometry=le.id,u.program=be.id,u.wireframe=Q,he=!0)}ce!==null&&t.update(ce,i.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,G(z,j,be,le),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function v(z){return n.isWebGL2?i.bindVertexArray(z):a.bindVertexArrayOES(z)}function b(z){return n.isWebGL2?i.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function S(z,j,be){const le=be.wireframe===!0;let ce=o[z.id];ce===void 0&&(ce={},o[z.id]=ce);let he=ce[j.id];he===void 0&&(he={},ce[j.id]=he);let Q=he[le];return Q===void 0&&(Q=m(f()),he[le]=Q),Q}function m(z){const j=[],be=[],le=[];for(let ce=0;ce<r;ce++)j[ce]=0,be[ce]=0,le[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:be,attributeDivisors:le,object:z,attributes:{},index:null}}function p(z,j,be,le){const ce=u.attributes,he=j.attributes;let Q=0;const H=be.getAttributes();for(const ae in H)if(H[ae].location>=0){const Ee=ce[ae];let Ue=he[ae];if(Ue===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(Ue=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(Ue=z.instanceColor)),Ee===void 0||Ee.attribute!==Ue||Ue&&Ee.data!==Ue.data)return!0;Q++}return u.attributesNum!==Q||u.index!==le}function w(z,j,be,le){const ce={},he=j.attributes;let Q=0;const H=be.getAttributes();for(const ae in H)if(H[ae].location>=0){let Ee=he[ae];Ee===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(Ee=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(Ee=z.instanceColor));const Ue={};Ue.attribute=Ee,Ee&&Ee.data&&(Ue.data=Ee.data),ce[ae]=Ue,Q++}u.attributes=ce,u.attributesNum=Q,u.index=le}function x(){const z=u.newAttributes;for(let j=0,be=z.length;j<be;j++)z[j]=0}function T(z){A(z,0)}function A(z,j){const be=u.newAttributes,le=u.enabledAttributes,ce=u.attributeDivisors;be[z]=1,le[z]===0&&(i.enableVertexAttribArray(z),le[z]=1),ce[z]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,j),ce[z]=j)}function I(){const z=u.newAttributes,j=u.enabledAttributes;for(let be=0,le=j.length;be<le;be++)j[be]!==z[be]&&(i.disableVertexAttribArray(be),j[be]=0)}function R(z,j,be,le,ce,he,Q){Q===!0?i.vertexAttribIPointer(z,j,be,ce,he):i.vertexAttribPointer(z,j,be,le,ce,he)}function G(z,j,be,le){if(n.isWebGL2===!1&&(z.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const ce=le.attributes,he=be.getAttributes(),Q=j.defaultAttributeValues;for(const H in he){const ae=he[H];if(ae.location>=0){let Te=ce[H];if(Te===void 0&&(H==="instanceMatrix"&&z.instanceMatrix&&(Te=z.instanceMatrix),H==="instanceColor"&&z.instanceColor&&(Te=z.instanceColor)),Te!==void 0){const Ee=Te.normalized,Ue=Te.itemSize,ke=t.get(Te);if(ke===void 0)continue;const Ve=ke.buffer,Ge=ke.type,rt=ke.bytesPerElement,bt=n.isWebGL2===!0&&(Ge===i.INT||Ge===i.UNSIGNED_INT||Te.gpuType===Wf);if(Te.isInterleavedBufferAttribute){const $e=Te.data,ie=$e.stride,gt=Te.offset;if($e.isInstancedInterleavedBuffer){for(let He=0;He<ae.locationSize;He++)A(ae.location+He,$e.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let He=0;He<ae.locationSize;He++)T(ae.location+He);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let He=0;He<ae.locationSize;He++)R(ae.location+He,Ue/ae.locationSize,Ge,Ee,ie*rt,(gt+Ue/ae.locationSize*He)*rt,bt)}else{if(Te.isInstancedBufferAttribute){for(let $e=0;$e<ae.locationSize;$e++)A(ae.location+$e,Te.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let $e=0;$e<ae.locationSize;$e++)T(ae.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let $e=0;$e<ae.locationSize;$e++)R(ae.location+$e,Ue/ae.locationSize,Ge,Ee,Ue*rt,Ue/ae.locationSize*$e*rt,bt)}}else if(Q!==void 0){const Ee=Q[H];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(ae.location,Ee);break;case 3:i.vertexAttrib3fv(ae.location,Ee);break;case 4:i.vertexAttrib4fv(ae.location,Ee);break;default:i.vertexAttrib1fv(ae.location,Ee)}}}}I()}function _(){B();for(const z in o){const j=o[z];for(const be in j){const le=j[be];for(const ce in le)b(le[ce].object),delete le[ce];delete j[be]}delete o[z]}}function M(z){if(o[z.id]===void 0)return;const j=o[z.id];for(const be in j){const le=j[be];for(const ce in le)b(le[ce].object),delete le[ce];delete j[be]}delete o[z.id]}function te(z){for(const j in o){const be=o[j];if(be[z.id]===void 0)continue;const le=be[z.id];for(const ce in le)b(le[ce].object),delete le[ce];delete be[z.id]}}function B(){k(),d=!0,u!==c&&(u=c,v(u.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:k,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfProgram:te,initAttributes:x,enableAttribute:T,disableUnusedAttributes:I}}function qy(i,e,t,n){const r=n.isWebGL2;let a;function l(u){a=u}function o(u,d){i.drawArrays(a,u,d),t.update(d,a,1)}function c(u,d,h){if(h===0)return;let f,v;if(r)f=i,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](a,u,d,h),t.update(d,a,h)}this.setMode=l,this.render=o,this.renderInstances=c}function Yy(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,T=l||e.has("OES_texture_float"),A=x&&T,I=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:I}}function Ky(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new ar,o=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const v=h.length!==0||f||n!==0||r;return r=f,n=h.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,v){const b=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||b===null||b.length===0||a&&!m)a?d(null):u();else{const w=a?0:n,x=w*4;let T=p.clippingState||null;c.value=T,T=d(b,f,x,v);for(let A=0;A!==x;++A)T[A]=t[A];p.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,v,b){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=c.value,b!==!0||m===null){const p=v+S*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,T=v;x!==S;++x,T+=4)l.copy(h[x]).applyMatrix4(w,o),l.normal.toArray(m,T),m[T+3]=l.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Zy(i){let e=new WeakMap;function t(l,o){return o===so?l.mapping=ba:o===Il&&(l.mapping=ya),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const o=l.mapping;if(o===so||o===Il)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const u=new ub(c.height/2);return u.fromEquirectangularTexture(i,l),e.set(l,u),l.addEventListener("dispose",r),t(u.texture,l.mapping)}else return null}}return l}function r(l){const o=l.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class hh extends uh{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,l=a+u*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const aa=4,Ku=[.125,.215,.35,.446,.526,.582],br=20,ol=new hh,Zu=new Nt;let ll=null;const _r=(1+Math.sqrt(5))/2,$r=1/_r,Ju=[new oe(1,1,1),new oe(-1,1,1),new oe(1,1,-1),new oe(-1,1,-1),new oe(0,_r,$r),new oe(0,_r,-$r),new oe($r,0,_r),new oe(-$r,0,_r),new oe(_r,$r,0),new oe(-_r,$r,0)];class Qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ll=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ll),e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ba||e.mapping===ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Sa,format:ui,colorSpace:Ci,depthBuffer:!1},r=$u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jy(a)),this._blurMaterial=Qy(a,e,t)}return r}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,n,r){const o=new Wn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Zu),d.toneMapping=lr,d.autoClear=!1;const v=new ah({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),b=new jt(new rn,v);let S=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,S=!0):(v.color.copy(Zu),S=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(u[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,u[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,u[p]));const x=this._cubeSize;zs(r,w*x,p>2?x:0,x,x),d.setRenderTarget(r),S&&d.render(b,o),d.render(e,o)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ba||e.mapping===ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new jt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;zs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,ol)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Ju[(r-1)%Ju.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,o){const c=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new jt(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*br-1),S=a/b,m=isFinite(a)?1+Math.floor(d*S):br;m>br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let w=0;for(let R=0;R<br;++R){const G=R/S,_=Math.exp(-G*G/2);p.push(_),R===0?w+=_:R<m&&(w+=2*_)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=l==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=b,f.mipInt.value=x-n;const T=this._sizeLods[r],A=3*T*(r>x-aa?r-x+aa:0),I=4*(this._cubeSize-T);zs(t,A,I,3*T,2*T),c.setRenderTarget(t),c.render(h,ol)}}function Jy(i){const e=[],t=[],n=[];let r=i;const a=i-aa+1+Ku.length;for(let l=0;l<a;l++){const o=Math.pow(2,r);t.push(o);let c=1/o;l>i-aa?c=Ku[l-i+aa-1]:l===0&&(c=0),n.push(c);const u=1/(o-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,b=6,S=3,m=2,p=1,w=new Float32Array(S*b*v),x=new Float32Array(m*b*v),T=new Float32Array(p*b*v);for(let I=0;I<v;I++){const R=I%3*2/3-1,G=I>2?0:-1,_=[R,G,0,R+2/3,G,0,R+2/3,G+1,0,R,G,0,R+2/3,G+1,0,R,G+1,0];w.set(_,S*b*I),x.set(f,m*b*I);const M=[I,I,I,I,I,I];T.set(M,p*b*I)}const A=new $i;A.setAttribute("position",new mi(w,S)),A.setAttribute("uv",new mi(x,m)),A.setAttribute("faceIndex",new mi(T,p)),e.push(A),r>aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $u(i,e,t){const n=new Zi(i,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Qy(i,e,t){const n=new Float32Array(br),r=new oe(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ed(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function td(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $y(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===so||c===Il,d=c===ba||c===ya;if(u||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Qu(i)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new Qu(i));const f=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&c++;return c===u}function a(o){const c=o.target;c.removeEventListener("dispose",a);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function e1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function t1(i,e,t,n){const r={},a=new WeakMap;function l(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const b in f.attributes)e.remove(f.attributes[b]);for(const b in f.morphAttributes){const S=f.morphAttributes[b];for(let m=0,p=S.length;m<p;m++)e.remove(S[m])}f.removeEventListener("dispose",l),delete r[f.id];const v=a.get(f);v&&(e.remove(v),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",l),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const b in f)e.update(f[b],i.ARRAY_BUFFER);const v=h.morphAttributes;for(const b in v){const S=v[b];for(let m=0,p=S.length;m<p;m++)e.update(S[m],i.ARRAY_BUFFER)}}function u(h){const f=[],v=h.index,b=h.attributes.position;let S=0;if(v!==null){const w=v.array;S=v.version;for(let x=0,T=w.length;x<T;x+=3){const A=w[x+0],I=w[x+1],R=w[x+2];f.push(A,I,I,R,R,A)}}else if(b!==void 0){const w=b.array;S=b.version;for(let x=0,T=w.length/3-1;x<T;x+=3){const A=x+0,I=x+1,R=x+2;f.push(A,I,I,R,R,A)}}else return;const m=new(Qf(f)?oh:sh)(f,1);m.version=S;const p=a.get(h);p&&e.remove(p),a.set(h,m)}function d(h){const f=a.get(h);if(f){const v=h.index;v!==null&&f.version<v.version&&u(h)}else u(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function n1(i,e,t,n){const r=n.isWebGL2;let a;function l(f){a=f}let o,c;function u(f){o=f.type,c=f.bytesPerElement}function d(f,v){i.drawElements(a,v,o,f*c),t.update(v,a,1)}function h(f,v,b){if(b===0)return;let S,m;if(r)S=i,m="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[m](a,v,o,f*c,b),t.update(v,a,b)}this.setMode=l,this.setIndex=u,this.render=d,this.renderInstances=h}function i1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,o){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function r1(i,e){return i[0]-e[0]}function a1(i,e){return Math.abs(e[1])-Math.abs(i[1])}function s1(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new Qt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,d,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const b=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=b!==void 0?b.length:0;let m=a.get(d);if(m===void 0||m.count!==S){let j=function(){k.dispose(),a.delete(d),d.removeEventListener("dispose",j)};var v=j;m!==void 0&&m.texture.dispose();const x=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,I=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],G=d.morphAttributes.color||[];let _=0;x===!0&&(_=1),T===!0&&(_=2),A===!0&&(_=3);let M=d.attributes.position.count*_,te=1;M>e.maxTextureSize&&(te=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const B=new Float32Array(M*te*4*S),k=new th(B,M,te,S);k.type=Wi,k.needsUpdate=!0;const z=_*4;for(let be=0;be<S;be++){const le=I[be],ce=R[be],he=G[be],Q=M*te*4*be;for(let H=0;H<le.count;H++){const ae=H*z;x===!0&&(l.fromBufferAttribute(le,H),B[Q+ae+0]=l.x,B[Q+ae+1]=l.y,B[Q+ae+2]=l.z,B[Q+ae+3]=0),T===!0&&(l.fromBufferAttribute(ce,H),B[Q+ae+4]=l.x,B[Q+ae+5]=l.y,B[Q+ae+6]=l.z,B[Q+ae+7]=0),A===!0&&(l.fromBufferAttribute(he,H),B[Q+ae+8]=l.x,B[Q+ae+9]=l.y,B[Q+ae+10]=l.z,B[Q+ae+11]=he.itemSize===4?l.w:1)}}m={count:S,texture:k,size:new dt(M,te)},a.set(d,m),d.addEventListener("dispose",j)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const w=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const b=f===void 0?0:f.length;let S=n[d.id];if(S===void 0||S.length!==b){S=[];for(let T=0;T<b;T++)S[T]=[T,0];n[d.id]=S}for(let T=0;T<b;T++){const A=S[T];A[0]=T,A[1]=f[T]}S.sort(a1);for(let T=0;T<8;T++)T<b&&S[T][1]?(o[T][0]=S[T][0],o[T][1]=S[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(r1);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let w=0;for(let T=0;T<8;T++){const A=o[T],I=A[0],R=A[1];I!==Number.MAX_SAFE_INTEGER&&R?(m&&d.getAttribute("morphTarget"+T)!==m[I]&&d.setAttribute("morphTarget"+T,m[I]),p&&d.getAttribute("morphNormal"+T)!==p[I]&&d.setAttribute("morphNormal"+T,p[I]),r[T]=R,w+=R):(m&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),p&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),r[T]=0)}const x=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function o1(i,e,t,n){let r=new WeakMap;function a(c){const u=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function l(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}const ph=new En,mh=new th,vh=new Yx,gh=new dh,nd=[],id=[],rd=new Float32Array(16),ad=new Float32Array(9),sd=new Float32Array(4);function Ia(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=nd[r];if(a===void 0&&(a=new Float32Array(r),nd[r]=a),e!==0){n.toArray(a,0);for(let l=1,o=0;l!==e;++l)o+=t,i[l].toArray(a,o)}return a}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bo(i,e){let t=id[e];t===void 0&&(t=new Int32Array(e),id[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function l1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function c1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function u1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function d1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function f1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),gn(t,n)}}function h1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;ad.set(n),i.uniformMatrix3fv(this.addr,!1,ad),gn(t,n)}}function p1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;rd.set(n),i.uniformMatrix4fv(this.addr,!1,rd),gn(t,n)}}function m1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function v1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function g1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function _1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function x1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function S1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function M1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||ph,r)}function w1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vh,r)}function E1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gh,r)}function T1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||mh,r)}function A1(i){switch(i){case 5126:return l1;case 35664:return c1;case 35665:return u1;case 35666:return d1;case 35674:return f1;case 35675:return h1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return v1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return x1;case 36294:return b1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}function R1(i,e){i.uniform1fv(this.addr,e)}function C1(i,e){const t=Ia(e,this.size,2);i.uniform2fv(this.addr,t)}function P1(i,e){const t=Ia(e,this.size,3);i.uniform3fv(this.addr,t)}function L1(i,e){const t=Ia(e,this.size,4);i.uniform4fv(this.addr,t)}function I1(i,e){const t=Ia(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function D1(i,e){const t=Ia(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function U1(i,e){const t=Ia(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function k1(i,e){i.uniform1iv(this.addr,e)}function N1(i,e){i.uniform2iv(this.addr,e)}function O1(i,e){i.uniform3iv(this.addr,e)}function F1(i,e){i.uniform4iv(this.addr,e)}function B1(i,e){i.uniform1uiv(this.addr,e)}function z1(i,e){i.uniform2uiv(this.addr,e)}function G1(i,e){i.uniform3uiv(this.addr,e)}function H1(i,e){i.uniform4uiv(this.addr,e)}function V1(i,e,t){const n=this.cache,r=e.length,a=bo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||ph,a[l])}function W1(i,e,t){const n=this.cache,r=e.length,a=bo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||vh,a[l])}function j1(i,e,t){const n=this.cache,r=e.length,a=bo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||gh,a[l])}function X1(i,e,t){const n=this.cache,r=e.length,a=bo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||mh,a[l])}function q1(i){switch(i){case 5126:return R1;case 35664:return C1;case 35665:return P1;case 35666:return L1;case 35674:return I1;case 35675:return D1;case 35676:return U1;case 5124:case 35670:return k1;case 35667:case 35671:return N1;case 35668:case 35672:return O1;case 35669:case 35673:return F1;case 5125:return B1;case 36294:return z1;case 36295:return G1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return X1}}class Y1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=A1(t.type)}}class K1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=q1(t.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function od(i,e){i.seq.push(e),i.map[e.id]=e}function J1(i,e,t){const n=i.name,r=n.length;for(cl.lastIndex=0;;){const a=cl.exec(n),l=cl.lastIndex;let o=a[1];const c=a[2]==="]",u=a[3];if(c&&(o=o|0),u===void 0||u==="["&&l+2===r){od(t,u===void 0?new Y1(o,i,e):new K1(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Z1(o),od(t,h)),t=h}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);J1(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function ld(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Q1=0;function $1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const o=l+1;n.push(`${o===e?">":" "} ${o}: ${t[l]}`)}return n.join(`
`)}function eS(i){switch(i){case Ci:return["Linear","( value )"];case Jt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function cd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$1(i.getShaderSource(e),l)}else return r}function tS(i,e){const t=eS(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function nS(i,e){let t;switch(e){case cx:t="Linear";break;case ux:t="Reinhard";break;case dx:t="OptimizedCineon";break;case fx:t="ACESFilmic";break;case hx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function iS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qa).join(`
`)}function rS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function aS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:o}}return t}function qa(i){return i!==""}function ud(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(i){return i.replace(sS,lS)}const oS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lS(i,e){let t=Tt[e];if(t===void 0){const n=oS.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bl(t)}const cS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(i){return i.replace(cS,uS)}function uS(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function hd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===G_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function fS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ba:case ya:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hS(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ya&&(e="ENVMAP_MODE_REFRACTION"),e}function pS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hf:e="ENVMAP_BLENDING_MULTIPLY";break;case ox:e="ENVMAP_BLENDING_MIX";break;case lx:e="ENVMAP_BLENDING_ADD";break}return e}function mS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vS(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,o=t.fragmentShader;const c=dS(t),u=fS(t),d=hS(t),h=pS(t),f=mS(t),v=t.isWebGL2?"":iS(t),b=rS(a),S=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(qa).join(`
`),m.length>0&&(m+=`
`),p=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(qa).join(`
`),p.length>0&&(p+=`
`)):(m=[hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),p=[v,hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==lr?nS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,tS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),l=Bl(l),l=ud(l,t),l=dd(l,t),o=Bl(o),o=ud(o,t),o=dd(o,t),l=fd(l),o=fd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+l,T=w+p+o,A=ld(r,r.VERTEX_SHADER,x),I=ld(r,r.FRAGMENT_SHADER,T);if(r.attachShader(S,A),r.attachShader(S,I),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),i.debug.checkShaderErrors){const _=r.getProgramInfoLog(S).trim(),M=r.getShaderInfoLog(A).trim(),te=r.getShaderInfoLog(I).trim();let B=!0,k=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,A,I);else{const z=cd(r,A,"vertex"),j=cd(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+_+`
`+z+`
`+j)}else _!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_):(M===""||te==="")&&(k=!1);k&&(this.diagnostics={runnable:B,programLog:_,vertexShader:{log:M,prefix:m},fragmentShader:{log:te,prefix:p}})}r.deleteShader(A),r.deleteShader(I);let R;this.getUniforms=function(){return R===void 0&&(R=new Js(r,S)),R};let G;return this.getAttributes=function(){return G===void 0&&(G=aS(r,S)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=I,this}let gS=0;class _S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xS(e),t.set(e,n)),n}}class xS{constructor(e){this.id=gS++,this.code=e,this.usedTimes=0}}function bS(i,e,t,n,r,a,l){const o=new ih,c=new _S,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return _===0?"uv":`uv${_}`}function m(_,M,te,B,k){const z=B.fog,j=k.geometry,be=_.isMeshStandardMaterial?B.environment:null,le=(_.isMeshStandardMaterial?t:e).get(_.envMap||be),ce=le&&le.mapping===go?le.image.height:null,he=b[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const Q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,H=Q!==void 0?Q.length:0;let ae=0;j.morphAttributes.position!==void 0&&(ae=1),j.morphAttributes.normal!==void 0&&(ae=2),j.morphAttributes.color!==void 0&&(ae=3);let Te,Ee,Ue,ke;if(he){const ut=bi[he];Te=ut.vertexShader,Ee=ut.fragmentShader}else Te=_.vertexShader,Ee=_.fragmentShader,c.update(_),Ue=c.getVertexShaderID(_),ke=c.getFragmentShaderID(_);const Ve=i.getRenderTarget(),Ge=k.isInstancedMesh===!0,rt=!!_.map,bt=!!_.matcap,$e=!!le,ie=!!_.aoMap,gt=!!_.lightMap,He=!!_.bumpMap,Se=!!_.normalMap,Ie=!!_.displacementMap,Oe=!!_.emissiveMap,Be=!!_.metalnessMap,je=!!_.roughnessMap,Je=_.anisotropy>0,vt=_.clearcoat>0,ot=_.iridescence>0,D=_.sheen>0,E=_.transmission>0,X=Je&&!!_.anisotropyMap,ye=vt&&!!_.clearcoatMap,V=vt&&!!_.clearcoatNormalMap,ue=vt&&!!_.clearcoatRoughnessMap,fe=ot&&!!_.iridescenceMap,pe=ot&&!!_.iridescenceThicknessMap,Y=D&&!!_.sheenColorMap,L=D&&!!_.sheenRoughnessMap,F=!!_.specularMap,de=!!_.specularColorMap,O=!!_.specularIntensityMap,q=E&&!!_.transmissionMap,_e=E&&!!_.thicknessMap,Le=!!_.gradientMap,U=!!_.alphaMap,we=_.alphaTest>0,ne=!!_.alphaHash,Me=!!_.extensions,Ae=!!j.attributes.uv1,Qe=!!j.attributes.uv2,Ke=!!j.attributes.uv3;let Xe=lr;return _.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(Xe=i.toneMapping),{isWebGL2:d,shaderID:he,shaderType:_.type,shaderName:_.name,vertexShader:Te,fragmentShader:Ee,defines:_.defines,customVertexShaderID:Ue,customFragmentShaderID:ke,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,instancing:Ge,instancingColor:Ge&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ve===null?i.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:Ci,map:rt,matcap:bt,envMap:$e,envMapMode:$e&&le.mapping,envMapCubeUVHeight:ce,aoMap:ie,lightMap:gt,bumpMap:He,normalMap:Se,displacementMap:f&&Ie,emissiveMap:Oe,normalMapObjectSpace:Se&&_.normalMapType===Tx,normalMapTangentSpace:Se&&_.normalMapType===Jf,metalnessMap:Be,roughnessMap:je,anisotropy:Je,anisotropyMap:X,clearcoat:vt,clearcoatMap:ye,clearcoatNormalMap:V,clearcoatRoughnessMap:ue,iridescence:ot,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:D,sheenColorMap:Y,sheenRoughnessMap:L,specularMap:F,specularColorMap:de,specularIntensityMap:O,transmission:E,transmissionMap:q,thicknessMap:_e,gradientMap:Le,opaque:_.transparent===!1&&_.blending===da,alphaMap:U,alphaTest:we,alphaHash:ne,combine:_.combine,mapUv:rt&&S(_.map.channel),aoMapUv:ie&&S(_.aoMap.channel),lightMapUv:gt&&S(_.lightMap.channel),bumpMapUv:He&&S(_.bumpMap.channel),normalMapUv:Se&&S(_.normalMap.channel),displacementMapUv:Ie&&S(_.displacementMap.channel),emissiveMapUv:Oe&&S(_.emissiveMap.channel),metalnessMapUv:Be&&S(_.metalnessMap.channel),roughnessMapUv:je&&S(_.roughnessMap.channel),anisotropyMapUv:X&&S(_.anisotropyMap.channel),clearcoatMapUv:ye&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:V&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:L&&S(_.sheenRoughnessMap.channel),specularMapUv:F&&S(_.specularMap.channel),specularColorMapUv:de&&S(_.specularColorMap.channel),specularIntensityMapUv:O&&S(_.specularIntensityMap.channel),transmissionMapUv:q&&S(_.transmissionMap.channel),thicknessMapUv:_e&&S(_.thicknessMap.channel),alphaMapUv:U&&S(_.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Se||Je),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Qe,vertexUv3s:Ke,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(rt||U),fog:!!z,useFog:_.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&te.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:rt&&_.map.isVideoTexture===!0&&_.map.colorSpace===Jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ii,flipSided:_.side===Bn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:Me&&_.extensions.derivatives===!0,extensionFragDepth:Me&&_.extensions.fragDepth===!0,extensionDrawBuffers:Me&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&_.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const te in _.defines)M.push(te),M.push(_.defines[te]);return _.isRawShaderMaterial===!1&&(w(M,_),x(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function w(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function x(_,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function T(_){const M=b[_.type];let te;if(M){const B=bi[M];te=ch.clone(B.uniforms)}else te=_.uniforms;return te}function A(_,M){let te;for(let B=0,k=u.length;B<k;B++){const z=u[B];if(z.cacheKey===M){te=z,++te.usedTimes;break}}return te===void 0&&(te=new vS(i,M,_,a),u.push(te)),te}function I(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function R(_){c.remove(_)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:A,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:G}}function yS(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function SS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function md(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(h,f,v,b,S,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:v,groupOrder:b,renderOrder:h.renderOrder,z:S,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=v,p.groupOrder=b,p.renderOrder=h.renderOrder,p.z=S,p.group=m),e++,p}function o(h,f,v,b,S,m){const p=l(h,f,v,b,S,m);v.transmission>0?n.push(p):v.transparent===!0?r.push(p):t.push(p)}function c(h,f,v,b,S,m){const p=l(h,f,v,b,S,m);v.transmission>0?n.unshift(p):v.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,f){t.length>1&&t.sort(h||SS),n.length>1&&n.sort(f||pd),r.length>1&&r.sort(f||pd)}function d(){for(let h=e,f=i.length;h<f;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:d,sort:u}}function MS(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new md,i.set(n,[l])):r>=a.length?(l=new md,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function wS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new Nt};break;case"SpotLight":t={position:new oe,direction:new oe,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return i[e.id]=t,t}}}function ES(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let TS=0;function AS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function RS(i,e){const t=new wS,n=ES(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new oe);const a=new oe,l=new sn,o=new sn;function c(d,h){let f=0,v=0,b=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let S=0,m=0,p=0,w=0,x=0,T=0,A=0,I=0,R=0,G=0;d.sort(AS);const _=h===!0?Math.PI:1;for(let te=0,B=d.length;te<B;te++){const k=d[te],z=k.color,j=k.intensity,be=k.distance,le=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=z.r*j*_,v+=z.g*j*_,b+=z.b*j*_;else if(k.isLightProbe)for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(k.sh.coefficients[ce],j);else if(k.isDirectionalLight){const ce=t.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity*_),k.castShadow){const he=k.shadow,Q=n.get(k);Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,r.directionalShadow[S]=Q,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=k.shadow.matrix,T++}r.directional[S]=ce,S++}else if(k.isSpotLight){const ce=t.get(k);ce.position.setFromMatrixPosition(k.matrixWorld),ce.color.copy(z).multiplyScalar(j*_),ce.distance=be,ce.coneCos=Math.cos(k.angle),ce.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ce.decay=k.decay,r.spot[p]=ce;const he=k.shadow;if(k.map&&(r.spotLightMap[R]=k.map,R++,he.updateMatrices(k),k.castShadow&&G++),r.spotLightMatrix[p]=he.matrix,k.castShadow){const Q=n.get(k);Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,r.spotShadow[p]=Q,r.spotShadowMap[p]=le,I++}p++}else if(k.isRectAreaLight){const ce=t.get(k);ce.color.copy(z).multiplyScalar(j),ce.halfWidth.set(k.width*.5,0,0),ce.halfHeight.set(0,k.height*.5,0),r.rectArea[w]=ce,w++}else if(k.isPointLight){const ce=t.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity*_),ce.distance=k.distance,ce.decay=k.decay,k.castShadow){const he=k.shadow,Q=n.get(k);Q.shadowBias=he.bias,Q.shadowNormalBias=he.normalBias,Q.shadowRadius=he.radius,Q.shadowMapSize=he.mapSize,Q.shadowCameraNear=he.camera.near,Q.shadowCameraFar=he.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=le,r.pointShadowMatrix[m]=k.shadow.matrix,A++}r.point[m]=ce,m++}else if(k.isHemisphereLight){const ce=t.get(k);ce.skyColor.copy(k.color).multiplyScalar(j*_),ce.groundColor.copy(k.groundColor).multiplyScalar(j*_),r.hemi[x]=ce,x++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ye.LTC_FLOAT_1,r.rectAreaLTC2=Ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ye.LTC_HALF_1,r.rectAreaLTC2=Ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=b;const M=r.hash;(M.directionalLength!==S||M.pointLength!==m||M.spotLength!==p||M.rectAreaLength!==w||M.hemiLength!==x||M.numDirectionalShadows!==T||M.numPointShadows!==A||M.numSpotShadows!==I||M.numSpotMaps!==R)&&(r.directional.length=S,r.spot.length=p,r.rectArea.length=w,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=I+R-G,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=G,M.directionalLength=S,M.pointLength=m,M.spotLength=p,M.rectAreaLength=w,M.hemiLength=x,M.numDirectionalShadows=T,M.numPointShadows=A,M.numSpotShadows=I,M.numSpotMaps=R,r.version=TS++)}function u(d,h){let f=0,v=0,b=0,S=0,m=0;const p=h.matrixWorldInverse;for(let w=0,x=d.length;w<x;w++){const T=d[w];if(T.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(p),f++}else if(T.isSpotLight){const A=r.spot[b];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(p),b++}else if(T.isRectAreaLight){const A=r.rectArea[S];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),o.identity(),l.copy(T.matrixWorld),l.premultiply(p),o.extractRotation(l),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),S++}else if(T.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),v++}else if(T.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:u,state:r}}function vd(i,e){const t=new RS(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(h){n.push(h)}function o(h){r.push(h)}function c(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:l,pushShadow:o}}function CS(i,e){let t=new WeakMap;function n(a,l=0){const o=t.get(a);let c;return o===void 0?(c=new vd(i,e),t.set(a,[c])):l>=o.length?(c=new vd(i,e),o.push(c)):c=o[l],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class PS extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LS extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function US(i,e,t){let n=new cc;const r=new dt,a=new dt,l=new Qt,o=new PS({depthPacking:Ex}),c=new LS,u={},d=t.maxTextureSize,h={[Ri]:Bn,[Bn]:Ri,[ii]:ii},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:IS,fragmentShader:DS}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const b=new $i;b.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new jt(b,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bf;let p=this.type;this.render=function(A,I,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const G=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),te=i.state;te.setBlending(qi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const B=p!==zi&&this.type===zi,k=p===zi&&this.type!==zi;for(let z=0,j=A.length;z<j;z++){const be=A[z],le=be.shadow;if(le===void 0){console.warn("THREE.WebGLShadowMap:",be,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;r.copy(le.mapSize);const ce=le.getFrameExtents();if(r.multiply(ce),a.copy(le.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ce.x),r.x=a.x*ce.x,le.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ce.y),r.y=a.y*ce.y,le.mapSize.y=a.y)),le.map===null||B===!0||k===!0){const Q=this.type!==zi?{minFilter:$t,magFilter:$t}:{};le.map!==null&&le.map.dispose(),le.map=new Zi(r.x,r.y,Q),le.map.texture.name=be.name+".shadowMap",le.camera.updateProjectionMatrix()}i.setRenderTarget(le.map),i.clear();const he=le.getViewportCount();for(let Q=0;Q<he;Q++){const H=le.getViewport(Q);l.set(a.x*H.x,a.y*H.y,a.x*H.z,a.y*H.w),te.viewport(l),le.updateMatrices(be,Q),n=le.getFrustum(),T(I,R,le.camera,be,this.type)}le.isPointLightShadow!==!0&&this.type===zi&&w(le,R),le.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(G,_,M)};function w(A,I){const R=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,R,f,S,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,R,v,S,null)}function x(A,I,R,G){let _=null;const M=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)_=M;else if(_=R.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const te=_.uuid,B=I.uuid;let k=u[te];k===void 0&&(k={},u[te]=k);let z=k[B];z===void 0&&(z=_.clone(),k[B]=z),_=z}if(_.visible=I.visible,_.wireframe=I.wireframe,G===zi?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:h[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const te=i.properties.get(_);te.light=R}return _}function T(A,I,R,G,_){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===zi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const B=e.update(A),k=A.material;if(Array.isArray(k)){const z=B.groups;for(let j=0,be=z.length;j<be;j++){const le=z[j],ce=k[le.materialIndex];if(ce&&ce.visible){const he=x(A,ce,G,_);i.renderBufferDirect(R,null,B,he,A,le)}}}else if(k.visible){const z=x(A,k,G,_);i.renderBufferDirect(R,null,B,z,A,null)}}const te=A.children;for(let B=0,k=te.length;B<k;B++)T(te[B],I,R,G,_)}}function kS(i,e,t){const n=t.isWebGL2;function r(){let U=!1;const we=new Qt;let ne=null;const Me=new Qt(0,0,0,0);return{setMask:function(Ae){ne!==Ae&&!U&&(i.colorMask(Ae,Ae,Ae,Ae),ne=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,Qe,Ke,Xe,st){st===!0&&(Ae*=Xe,Qe*=Xe,Ke*=Xe),we.set(Ae,Qe,Ke,Xe),Me.equals(we)===!1&&(i.clearColor(Ae,Qe,Ke,Xe),Me.copy(we))},reset:function(){U=!1,ne=null,Me.set(-1,0,0,0)}}}function a(){let U=!1,we=null,ne=null,Me=null;return{setTest:function(Ae){Ae?Ve(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(Ae){we!==Ae&&!U&&(i.depthMask(Ae),we=Ae)},setFunc:function(Ae){if(ne!==Ae){switch(Ae){case ex:i.depthFunc(i.NEVER);break;case tx:i.depthFunc(i.ALWAYS);break;case nx:i.depthFunc(i.LESS);break;case Ll:i.depthFunc(i.LEQUAL);break;case ix:i.depthFunc(i.EQUAL);break;case rx:i.depthFunc(i.GEQUAL);break;case ax:i.depthFunc(i.GREATER);break;case sx:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){Me!==Ae&&(i.clearDepth(Ae),Me=Ae)},reset:function(){U=!1,we=null,ne=null,Me=null}}}function l(){let U=!1,we=null,ne=null,Me=null,Ae=null,Qe=null,Ke=null,Xe=null,st=null;return{setTest:function(ut){U||(ut?Ve(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(ut){we!==ut&&!U&&(i.stencilMask(ut),we=ut)},setFunc:function(ut,Rt,St){(ne!==ut||Me!==Rt||Ae!==St)&&(i.stencilFunc(ut,Rt,St),ne=ut,Me=Rt,Ae=St)},setOp:function(ut,Rt,St){(Qe!==ut||Ke!==Rt||Xe!==St)&&(i.stencilOp(ut,Rt,St),Qe=ut,Ke=Rt,Xe=St)},setLocked:function(ut){U=ut},setClear:function(ut){st!==ut&&(i.clearStencil(ut),st=ut)},reset:function(){U=!1,we=null,ne=null,Me=null,Ae=null,Qe=null,Ke=null,Xe=null,st=null}}}const o=new r,c=new a,u=new l,d=new WeakMap,h=new WeakMap;let f={},v={},b=new WeakMap,S=[],m=null,p=!1,w=null,x=null,T=null,A=null,I=null,R=null,G=null,_=!1,M=null,te=null,B=null,k=null,z=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let be=!1,le=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ce)[1]),be=le>=1):ce.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),be=le>=2);let he=null,Q={};const H=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Te=new Qt().fromArray(H),Ee=new Qt().fromArray(ae);function Ue(U,we,ne,Me){const Ae=new Uint8Array(4),Qe=i.createTexture();i.bindTexture(U,Qe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<ne;Ke++)n&&(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)?i.texImage3D(we,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(we+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Qe}const ke={};ke[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ke[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Ve(i.DEPTH_TEST),c.setFunc(Ll),Ie(!1),Oe(tu),Ve(i.CULL_FACE),He(qi);function Ve(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function Ge(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function rt(U,we){return v[U]!==we?(i.bindFramebuffer(U,we),v[U]=we,n&&(U===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=we),U===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=we)),!0):!1}function bt(U,we){let ne=S,Me=!1;if(U)if(ne=b.get(we),ne===void 0&&(ne=[],b.set(we,ne)),U.isWebGLMultipleRenderTargets){const Ae=U.texture;if(ne.length!==Ae.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Qe=0,Ke=Ae.length;Qe<Ke;Qe++)ne[Qe]=i.COLOR_ATTACHMENT0+Qe;ne.length=Ae.length,Me=!0}}else ne[0]!==i.COLOR_ATTACHMENT0&&(ne[0]=i.COLOR_ATTACHMENT0,Me=!0);else ne[0]!==i.BACK&&(ne[0]=i.BACK,Me=!0);Me&&(t.isWebGL2?i.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function $e(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const ie={[ra]:i.FUNC_ADD,[V_]:i.FUNC_SUBTRACT,[W_]:i.FUNC_REVERSE_SUBTRACT};if(n)ie[au]=i.MIN,ie[su]=i.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ie[au]=U.MIN_EXT,ie[su]=U.MAX_EXT)}const gt={[j_]:i.ZERO,[X_]:i.ONE,[q_]:i.SRC_COLOR,[zf]:i.SRC_ALPHA,[$_]:i.SRC_ALPHA_SATURATE,[J_]:i.DST_COLOR,[K_]:i.DST_ALPHA,[Y_]:i.ONE_MINUS_SRC_COLOR,[Gf]:i.ONE_MINUS_SRC_ALPHA,[Q_]:i.ONE_MINUS_DST_COLOR,[Z_]:i.ONE_MINUS_DST_ALPHA};function He(U,we,ne,Me,Ae,Qe,Ke,Xe){if(U===qi){p===!0&&(Ge(i.BLEND),p=!1);return}if(p===!1&&(Ve(i.BLEND),p=!0),U!==H_){if(U!==w||Xe!==_){if((x!==ra||I!==ra)&&(i.blendEquation(i.FUNC_ADD),x=ra,I=ra),Xe)switch(U){case da:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFunc(i.ONE,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,A=null,R=null,G=null,w=U,_=Xe}return}Ae=Ae||we,Qe=Qe||ne,Ke=Ke||Me,(we!==x||Ae!==I)&&(i.blendEquationSeparate(ie[we],ie[Ae]),x=we,I=Ae),(ne!==T||Me!==A||Qe!==R||Ke!==G)&&(i.blendFuncSeparate(gt[ne],gt[Me],gt[Qe],gt[Ke]),T=ne,A=Me,R=Qe,G=Ke),w=U,_=!1}function Se(U,we){U.side===ii?Ge(i.CULL_FACE):Ve(i.CULL_FACE);let ne=U.side===Bn;we&&(ne=!ne),Ie(ne),U.blending===da&&U.transparent===!1?He(qi):He(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const Me=U.stencilWrite;u.setTest(Me),Me&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),je(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ve(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Oe(U){U!==B_?(Ve(i.CULL_FACE),U!==te&&(U===tu?i.cullFace(i.BACK):U===z_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),te=U}function Be(U){U!==B&&(be&&i.lineWidth(U),B=U)}function je(U,we,ne){U?(Ve(i.POLYGON_OFFSET_FILL),(k!==we||z!==ne)&&(i.polygonOffset(we,ne),k=we,z=ne)):Ge(i.POLYGON_OFFSET_FILL)}function Je(U){U?Ve(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function vt(U){U===void 0&&(U=i.TEXTURE0+j-1),he!==U&&(i.activeTexture(U),he=U)}function ot(U,we,ne){ne===void 0&&(he===null?ne=i.TEXTURE0+j-1:ne=he);let Me=Q[ne];Me===void 0&&(Me={type:void 0,texture:void 0},Q[ne]=Me),(Me.type!==U||Me.texture!==we)&&(he!==ne&&(i.activeTexture(ne),he=ne),i.bindTexture(U,we||ke[U]),Me.type=U,Me.texture=we)}function D(){const U=Q[he];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){Te.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Te.copy(U))}function O(U){Ee.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ee.copy(U))}function q(U,we){let ne=h.get(we);ne===void 0&&(ne=new WeakMap,h.set(we,ne));let Me=ne.get(U);Me===void 0&&(Me=i.getUniformBlockIndex(we,U.name),ne.set(U,Me))}function _e(U,we){const Me=h.get(we).get(U);d.get(we)!==Me&&(i.uniformBlockBinding(we,Me,U.__bindingPointIndex),d.set(we,Me))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},he=null,Q={},v={},b=new WeakMap,S=[],m=null,p=!1,w=null,x=null,T=null,A=null,I=null,R=null,G=null,_=!1,M=null,te=null,B=null,k=null,z=null,Te.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Ve,disable:Ge,bindFramebuffer:rt,drawBuffers:bt,useProgram:$e,setBlending:He,setMaterial:Se,setFlipSided:Ie,setCullFace:Oe,setLineWidth:Be,setPolygonOffset:je,setScissorTest:Je,activeTexture:vt,bindTexture:ot,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:L,texImage3D:F,updateUBOMapping:q,uniformBlockBinding:_e,texStorage2D:pe,texStorage3D:Y,texSubImage2D:ye,texSubImage3D:V,compressedTexSubImage2D:ue,compressedTexSubImage3D:fe,scissor:de,viewport:O,reset:Le}}function NS(i,e,t,n,r,a,l){const o=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let S;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return p?new OffscreenCanvas(D,E):lo("canvas")}function x(D,E,X,ye){let V=1;if((D.width>ye||D.height>ye)&&(V=ye/Math.max(D.width,D.height)),V<1||E===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const ue=E?Fl:Math.floor,fe=ue(V*D.width),pe=ue(V*D.height);S===void 0&&(S=w(fe,pe));const Y=X?w(fe,pe):S;return Y.width=fe,Y.height=pe,Y.getContext("2d").drawImage(D,0,0,fe,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+fe+"x"+pe+")."),Y}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function T(D){return Uu(D.width)&&Uu(D.height)}function A(D){return o?!1:D.wrapS!==ci||D.wrapT!==ci||D.minFilter!==$t&&D.minFilter!==ti}function I(D,E){return D.generateMipmaps&&E&&D.minFilter!==$t&&D.minFilter!==ti}function R(D){i.generateMipmap(D)}function G(D,E,X,ye,V=!1){if(o===!1)return E;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=E;return E===i.RED&&(X===i.FLOAT&&(ue=i.R32F),X===i.HALF_FLOAT&&(ue=i.R16F),X===i.UNSIGNED_BYTE&&(ue=i.R8)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ue=i.R8UI),X===i.UNSIGNED_SHORT&&(ue=i.R16UI),X===i.UNSIGNED_INT&&(ue=i.R32UI),X===i.BYTE&&(ue=i.R8I),X===i.SHORT&&(ue=i.R16I),X===i.INT&&(ue=i.R32I)),E===i.RG&&(X===i.FLOAT&&(ue=i.RG32F),X===i.HALF_FLOAT&&(ue=i.RG16F),X===i.UNSIGNED_BYTE&&(ue=i.RG8)),E===i.RGBA&&(X===i.FLOAT&&(ue=i.RGBA32F),X===i.HALF_FLOAT&&(ue=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ue=ye===Jt&&V===!1?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)),(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function _(D,E,X){return I(D,X)===!0||D.isFramebufferTexture&&D.minFilter!==$t&&D.minFilter!==ti?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function M(D){return D===$t||D===ou||D===No?i.NEAREST:i.LINEAR}function te(D){const E=D.target;E.removeEventListener("dispose",te),k(E),E.isVideoTexture&&b.delete(E)}function B(D){const E=D.target;E.removeEventListener("dispose",B),j(E)}function k(D){const E=n.get(D);if(E.__webglInit===void 0)return;const X=D.source,ye=m.get(X);if(ye){const V=ye[E.__cacheKey];V.usedTimes--,V.usedTimes===0&&z(D),Object.keys(ye).length===0&&m.delete(X)}n.remove(D)}function z(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const X=D.source,ye=m.get(X);delete ye[E.__cacheKey],l.memory.textures--}function j(D){const E=D.texture,X=n.get(D),ye=n.get(E);if(ye.__webglTexture!==void 0&&(i.deleteTexture(ye.__webglTexture),l.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(X.__webglFramebuffer[V]))for(let ue=0;ue<X.__webglFramebuffer[V].length;ue++)i.deleteFramebuffer(X.__webglFramebuffer[V][ue]);else i.deleteFramebuffer(X.__webglFramebuffer[V]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[V])}else{if(Array.isArray(X.__webglFramebuffer))for(let V=0;V<X.__webglFramebuffer.length;V++)i.deleteFramebuffer(X.__webglFramebuffer[V]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let V=0;V<X.__webglColorRenderbuffer.length;V++)X.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[V]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let V=0,ue=E.length;V<ue;V++){const fe=n.get(E[V]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),l.memory.textures--),n.remove(E[V])}n.remove(E),n.remove(D)}let be=0;function le(){be=0}function ce(){const D=be;return D>=c&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+c),be+=1,D}function he(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Q(D,E){const X=n.get(D);if(D.isVideoTexture&&vt(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const ye=D.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(X,D,E);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function H(D,E){const X=n.get(D);if(D.version>0&&X.__version!==D.version){rt(X,D,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function ae(D,E){const X=n.get(D);if(D.version>0&&X.__version!==D.version){rt(X,D,E);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function Te(D,E){const X=n.get(D);if(D.version>0&&X.__version!==D.version){bt(X,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}const Ee={[Dl]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Ul]:i.MIRRORED_REPEAT},Ue={[$t]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[No]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[px]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},ke={[Rx]:i.NEVER,[kx]:i.ALWAYS,[Cx]:i.LESS,[Lx]:i.LEQUAL,[Px]:i.EQUAL,[Ux]:i.GEQUAL,[Ix]:i.GREATER,[Dx]:i.NOTEQUAL};function Ve(D,E,X){if(X?(i.texParameteri(D,i.TEXTURE_WRAP_S,Ee[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Ee[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Ee[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Ue[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Ue[E.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==ci||E.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,M(E.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,M(E.minFilter)),E.minFilter!==$t&&E.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ke[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===$t||E.minFilter!==No&&E.minFilter!==cs||E.type===Wi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Sa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(D,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Ge(D,E){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",te));const ye=E.source;let V=m.get(ye);V===void 0&&(V={},m.set(ye,V));const ue=he(E);if(ue!==D.__cacheKey){V[ue]===void 0&&(V[ue]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,X=!0),V[ue].usedTimes++;const fe=V[D.__cacheKey];fe!==void 0&&(V[D.__cacheKey].usedTimes--,fe.usedTimes===0&&z(E)),D.__cacheKey=ue,D.__webglTexture=V[ue].texture}return X}function rt(D,E,X){let ye=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ye=i.TEXTURE_3D);const V=Ge(D,E),ue=E.source;t.bindTexture(ye,D.__webglTexture,i.TEXTURE0+X);const fe=n.get(ue);if(ue.version!==fe.__version||V===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const pe=A(E)&&T(E.image)===!1;let Y=x(E.image,pe,!1,d);Y=ot(E,Y);const L=T(Y)||o,F=a.convert(E.format,E.colorSpace);let de=a.convert(E.type),O=G(E.internalFormat,F,de,E.colorSpace,E.isVideoTexture);Ve(ye,E,L);let q;const _e=E.mipmaps,Le=o&&E.isVideoTexture!==!0,U=fe.__version===void 0||V===!0,we=_(E,Y,L);if(E.isDepthTexture)O=i.DEPTH_COMPONENT,o?E.type===Wi?O=i.DEPTH_COMPONENT32F:E.type===sr?O=i.DEPTH_COMPONENT24:E.type===Ar?O=i.DEPTH24_STENCIL8:O=i.DEPTH_COMPONENT16:E.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Rr&&O===i.DEPTH_COMPONENT&&E.type!==oc&&E.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=sr,de=a.convert(E.type)),E.format===Ma&&O===i.DEPTH_COMPONENT&&(O=i.DEPTH_STENCIL,E.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ar,de=a.convert(E.type))),U&&(Le?t.texStorage2D(i.TEXTURE_2D,1,O,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,O,Y.width,Y.height,0,F,de,null));else if(E.isDataTexture)if(_e.length>0&&L){Le&&U&&t.texStorage2D(i.TEXTURE_2D,we,O,_e[0].width,_e[0].height);for(let ne=0,Me=_e.length;ne<Me;ne++)q=_e[ne],Le?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,q.width,q.height,F,de,q.data):t.texImage2D(i.TEXTURE_2D,ne,O,q.width,q.height,0,F,de,q.data);E.generateMipmaps=!1}else Le?(U&&t.texStorage2D(i.TEXTURE_2D,we,O,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,F,de,Y.data)):t.texImage2D(i.TEXTURE_2D,0,O,Y.width,Y.height,0,F,de,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Le&&U&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,O,_e[0].width,_e[0].height,Y.depth);for(let ne=0,Me=_e.length;ne<Me;ne++)q=_e[ne],E.format!==ui?F!==null?Le?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,q.width,q.height,Y.depth,F,q.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,O,q.width,q.height,Y.depth,0,q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,q.width,q.height,Y.depth,F,de,q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,O,q.width,q.height,Y.depth,0,F,de,q.data)}else{Le&&U&&t.texStorage2D(i.TEXTURE_2D,we,O,_e[0].width,_e[0].height);for(let ne=0,Me=_e.length;ne<Me;ne++)q=_e[ne],E.format!==ui?F!==null?Le?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,q.width,q.height,F,q.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,O,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,q.width,q.height,F,de,q.data):t.texImage2D(i.TEXTURE_2D,ne,O,q.width,q.height,0,F,de,q.data)}else if(E.isDataArrayTexture)Le?(U&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,O,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,F,de,Y.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,O,Y.width,Y.height,Y.depth,0,F,de,Y.data);else if(E.isData3DTexture)Le?(U&&t.texStorage3D(i.TEXTURE_3D,we,O,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,F,de,Y.data)):t.texImage3D(i.TEXTURE_3D,0,O,Y.width,Y.height,Y.depth,0,F,de,Y.data);else if(E.isFramebufferTexture){if(U)if(Le)t.texStorage2D(i.TEXTURE_2D,we,O,Y.width,Y.height);else{let ne=Y.width,Me=Y.height;for(let Ae=0;Ae<we;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,O,ne,Me,0,F,de,null),ne>>=1,Me>>=1}}else if(_e.length>0&&L){Le&&U&&t.texStorage2D(i.TEXTURE_2D,we,O,_e[0].width,_e[0].height);for(let ne=0,Me=_e.length;ne<Me;ne++)q=_e[ne],Le?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,F,de,q):t.texImage2D(i.TEXTURE_2D,ne,O,F,de,q);E.generateMipmaps=!1}else Le?(U&&t.texStorage2D(i.TEXTURE_2D,we,O,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,F,de,Y)):t.texImage2D(i.TEXTURE_2D,0,O,F,de,Y);I(E,L)&&R(ye),fe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function bt(D,E,X){if(E.image.length!==6)return;const ye=Ge(D,E),V=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+X);const ue=n.get(V);if(V.version!==ue.__version||ye===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,pe=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let ne=0;ne<6;ne++)!fe&&!pe?Y[ne]=x(E.image[ne],!1,!0,u):Y[ne]=pe?E.image[ne].image:E.image[ne],Y[ne]=ot(E,Y[ne]);const L=Y[0],F=T(L)||o,de=a.convert(E.format,E.colorSpace),O=a.convert(E.type),q=G(E.internalFormat,de,O,E.colorSpace),_e=o&&E.isVideoTexture!==!0,Le=ue.__version===void 0||ye===!0;let U=_(E,L,F);Ve(i.TEXTURE_CUBE_MAP,E,F);let we;if(fe){_e&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,U,q,L.width,L.height);for(let ne=0;ne<6;ne++){we=Y[ne].mipmaps;for(let Me=0;Me<we.length;Me++){const Ae=we[Me];E.format!==ui?de!==null?_e?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Ae.width,Ae.height,de,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,q,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Ae.width,Ae.height,de,O,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,q,Ae.width,Ae.height,0,de,O,Ae.data)}}}else{we=E.mipmaps,_e&&Le&&(we.length>0&&U++,t.texStorage2D(i.TEXTURE_CUBE_MAP,U,q,Y[0].width,Y[0].height));for(let ne=0;ne<6;ne++)if(pe){_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Y[ne].width,Y[ne].height,de,O,Y[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,q,Y[ne].width,Y[ne].height,0,de,O,Y[ne].data);for(let Me=0;Me<we.length;Me++){const Qe=we[Me].image[ne].image;_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Qe.width,Qe.height,de,O,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,q,Qe.width,Qe.height,0,de,O,Qe.data)}}else{_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de,O,Y[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,q,de,O,Y[ne]);for(let Me=0;Me<we.length;Me++){const Ae=we[Me];_e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,de,O,Ae.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,q,de,O,Ae.image[ne])}}}I(E,F)&&R(i.TEXTURE_CUBE_MAP),ue.__version=V.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function $e(D,E,X,ye,V,ue){const fe=a.convert(X.format,X.colorSpace),pe=a.convert(X.type),Y=G(X.internalFormat,fe,pe,X.colorSpace);if(!n.get(E).__hasExternalTextures){const F=Math.max(1,E.width>>ue),de=Math.max(1,E.height>>ue);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,ue,Y,F,de,E.depth,0,fe,pe,null):t.texImage2D(V,ue,Y,F,de,0,fe,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Je(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,V,n.get(X).__webglTexture,0,je(E)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,V,n.get(X).__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(D,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer&&!E.stencilBuffer){let ye=i.DEPTH_COMPONENT16;if(X||Je(E)){const V=E.depthTexture;V&&V.isDepthTexture&&(V.type===Wi?ye=i.DEPTH_COMPONENT32F:V.type===sr&&(ye=i.DEPTH_COMPONENT24));const ue=je(E);Je(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,ye,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ye,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(E.depthBuffer&&E.stencilBuffer){const ye=je(E);X&&Je(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,E.width,E.height):Je(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{const ye=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let V=0;V<ye.length;V++){const ue=ye[V],fe=a.convert(ue.format,ue.colorSpace),pe=a.convert(ue.type),Y=G(ue.internalFormat,fe,pe,ue.colorSpace),L=je(E);X&&Je(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,Y,E.width,E.height):Je(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,Y,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Y,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const ye=n.get(E.depthTexture).__webglTexture,V=je(E);if(E.depthTexture.format===Rr)Je(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(E.depthTexture.format===Ma)Je(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function He(D){const E=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");gt(E.__webglFramebuffer,D)}else if(X){E.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ye]),E.__webglDepthbuffer[ye]=i.createRenderbuffer(),ie(E.__webglDepthbuffer[ye],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ie(E.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(D,E,X){const ye=n.get(D);E!==void 0&&$e(ye.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&He(D)}function Ie(D){const E=D.texture,X=n.get(D),ye=n.get(E);D.addEventListener("dispose",B),D.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=E.version,l.memory.textures++);const V=D.isWebGLCubeRenderTarget===!0,ue=D.isWebGLMultipleRenderTargets===!0,fe=T(D)||o;if(V){X.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[pe]=[];for(let Y=0;Y<E.mipmaps.length;Y++)X.__webglFramebuffer[pe][Y]=i.createFramebuffer()}else X.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)X.__webglFramebuffer[pe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ue)if(r.drawBuffers){const pe=D.texture;for(let Y=0,L=pe.length;Y<L;Y++){const F=n.get(pe[Y]);F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&Je(D)===!1){const pe=ue?E:[E];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Y=0;Y<pe.length;Y++){const L=pe[Y];X.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Y]);const F=a.convert(L.format,L.colorSpace),de=a.convert(L.type),O=G(L.internalFormat,F,de,L.colorSpace,D.isXRRenderTarget===!0),q=je(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,O,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,X.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(X.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,E,fe);for(let pe=0;pe<6;pe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)$e(X.__webglFramebuffer[pe][Y],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Y);else $e(X.__webglFramebuffer[pe],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);I(E,fe)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const pe=D.texture;for(let Y=0,L=pe.length;Y<L;Y++){const F=pe[Y],de=n.get(F);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),Ve(i.TEXTURE_2D,F,fe),$e(X.__webglFramebuffer,D,F,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,0),I(F,fe)&&R(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?pe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ye.__webglTexture),Ve(pe,E,fe),o&&E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)$e(X.__webglFramebuffer[Y],D,E,i.COLOR_ATTACHMENT0,pe,Y);else $e(X.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,pe,0);I(E,fe)&&R(pe),t.unbindTexture()}D.depthBuffer&&He(D)}function Oe(D){const E=T(D)||o,X=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ye=0,V=X.length;ye<V;ye++){const ue=X[ye];if(I(ue,E)){const fe=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(ue).__webglTexture;t.bindTexture(fe,pe),R(fe),t.unbindTexture()}}}function Be(D){if(o&&D.samples>0&&Je(D)===!1){const E=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],X=D.width,ye=D.height;let V=i.COLOR_BUFFER_BIT;const ue=[],fe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(D),Y=D.isWebGLMultipleRenderTargets===!0;if(Y)for(let L=0;L<E.length;L++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let L=0;L<E.length;L++){ue.push(i.COLOR_ATTACHMENT0+L),D.depthBuffer&&ue.push(fe);const F=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(F===!1&&(D.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),Y&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[L]),F===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),Y){const de=n.get(E[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,X,ye,0,0,X,ye,V,i.NEAREST),v&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let L=0;L<E.length;L++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,pe.__webglColorRenderbuffer[L]);const F=n.get(E[L]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function je(D){return Math.min(h,D.samples)}function Je(D){const E=n.get(D);return o&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(D){const E=l.render.frame;b.get(D)!==E&&(b.set(D,E),D.update())}function ot(D,E){const X=D.colorSpace,ye=D.format,V=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Nl||X!==Ci&&X!==Pr&&(X===Jt||X===_o?o===!1?e.has("EXT_sRGB")===!0&&ye===ui?(D.format=Nl,D.minFilter=ti,D.generateMipmaps=!1):E=$f.sRGBToLinear(E):(ye!==ui||V!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=ce,this.resetTextureUnits=le,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=ae,this.setTextureCube=Te,this.rebindTextures=Se,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=Je}const OS=0,hn=1;function FS(i,e,t){const n=t.isWebGL2;function r(a,l=Pr){let o;const c=l===Jt||l===_o?hn:OS;if(a===cr)return i.UNSIGNED_BYTE;if(a===jf)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Xf)return i.UNSIGNED_SHORT_5_5_5_1;if(a===mx)return i.BYTE;if(a===vx)return i.SHORT;if(a===oc)return i.UNSIGNED_SHORT;if(a===Wf)return i.INT;if(a===sr)return i.UNSIGNED_INT;if(a===Wi)return i.FLOAT;if(a===Sa)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===gx)return i.ALPHA;if(a===ui)return i.RGBA;if(a===_x)return i.LUMINANCE;if(a===xx)return i.LUMINANCE_ALPHA;if(a===Rr)return i.DEPTH_COMPONENT;if(a===Ma)return i.DEPTH_STENCIL;if(a===Nl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===bx)return i.RED;if(a===qf)return i.RED_INTEGER;if(a===yx)return i.RG;if(a===Yf)return i.RG_INTEGER;if(a===Kf)return i.RGBA_INTEGER;if(a===Oo||a===Fo||a===Bo||a===zo)if(c===hn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Oo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Oo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===lu||a===cu||a===uu||a===du)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===cu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===uu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===du)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Sx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===fu||a===hu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===fu)return c===hn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===hu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===pu||a===mu||a===vu||a===gu||a===_u||a===xu||a===bu||a===yu||a===Su||a===Mu||a===wu||a===Eu||a===Tu||a===Au)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===pu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===mu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===vu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===gu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===_u)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===xu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===bu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===yu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Su)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Mu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===wu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Eu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Tu)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Au)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Go||a===Ru||a===Cu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Go)return c===hn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ru)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Cu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Mx||a===Pu||a===Lu||a===Iu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Go)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Pu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Lu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Iu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ar?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class BS extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xn extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zS={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(u,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),v=.02,b=.005;u.inputState.pinching&&f>v+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zS)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _h extends En{constructor(e,t,n,r,a,l,o,c,u,d){if(d=d!==void 0?d:Rr,d!==Rr&&d!==Ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Rr&&(n=sr),n===void 0&&d===Ma&&(n=Ar),super(null,r,a,l,o,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=c!==void 0?c:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class GS extends Dr{constructor(e,t){super();const n=this;let r=null,a=1,l=null,o="local-floor",c=1,u=null,d=null,h=null,f=null,v=null,b=null;const S=t.getContextAttributes();let m=null,p=null;const w=[],x=[],T=new Wn;T.layers.enable(1),T.viewport=new Qt;const A=new Wn;A.layers.enable(2),A.viewport=new Qt;const I=[T,A],R=new BS;R.layers.enable(1),R.layers.enable(2);let G=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ae=w[H];return ae===void 0&&(ae=new ul,w[H]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(H){let ae=w[H];return ae===void 0&&(ae=new ul,w[H]=ae),ae.getGripSpace()},this.getHand=function(H){let ae=w[H];return ae===void 0&&(ae=new ul,w[H]=ae),ae.getHandSpace()};function M(H){const ae=x.indexOf(H.inputSource);if(ae===-1)return;const Te=w[ae];Te!==void 0&&(Te.update(H.inputSource,H.frame,u||l),Te.dispatchEvent({type:H.type,data:H.inputSource}))}function te(){r.removeEventListener("select",M),r.removeEventListener("selectstart",M),r.removeEventListener("selectend",M),r.removeEventListener("squeeze",M),r.removeEventListener("squeezestart",M),r.removeEventListener("squeezeend",M),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",B);for(let H=0;H<w.length;H++){const ae=x[H];ae!==null&&(x[H]=null,w[H].disconnect(ae))}G=null,_=null,e.setRenderTarget(m),v=null,f=null,h=null,r=null,p=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return h},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",M),r.addEventListener("selectstart",M),r.addEventListener("selectend",M),r.addEventListener("squeeze",M),r.addEventListener("squeezestart",M),r.addEventListener("squeezeend",M),r.addEventListener("end",te),r.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:v}),p=new Zi(v.framebufferWidth,v.framebufferHeight,{format:ui,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ae=null,Te=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=S.stencil?Ma:Rr,Te=S.stencil?Ar:sr);const Ue={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),p=new Zi(f.textureWidth,f.textureHeight,{format:ui,type:cr,depthTexture:new _h(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const ke=e.properties.get(p);ke.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,l=await r.requestReferenceSpace(o),Q.setContext(r),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(H){for(let ae=0;ae<H.removed.length;ae++){const Te=H.removed[ae],Ee=x.indexOf(Te);Ee>=0&&(x[Ee]=null,w[Ee].disconnect(Te))}for(let ae=0;ae<H.added.length;ae++){const Te=H.added[ae];let Ee=x.indexOf(Te);if(Ee===-1){for(let ke=0;ke<w.length;ke++)if(ke>=x.length){x.push(Te),Ee=ke;break}else if(x[ke]===null){x[ke]=Te,Ee=ke;break}if(Ee===-1)break}const Ue=w[Ee];Ue&&Ue.connect(Te)}}const k=new oe,z=new oe;function j(H,ae,Te){k.setFromMatrixPosition(ae.matrixWorld),z.setFromMatrixPosition(Te.matrixWorld);const Ee=k.distanceTo(z),Ue=ae.projectionMatrix.elements,ke=Te.projectionMatrix.elements,Ve=Ue[14]/(Ue[10]-1),Ge=Ue[14]/(Ue[10]+1),rt=(Ue[9]+1)/Ue[5],bt=(Ue[9]-1)/Ue[5],$e=(Ue[8]-1)/Ue[0],ie=(ke[8]+1)/ke[0],gt=Ve*$e,He=Ve*ie,Se=Ee/(-$e+ie),Ie=Se*-$e;ae.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ie),H.translateZ(Se),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Oe=Ve+Se,Be=Ge+Se,je=gt-Ie,Je=He+(Ee-Ie),vt=rt*Ge/Be*Oe,ot=bt*Ge/Be*Oe;H.projectionMatrix.makePerspective(je,Je,vt,ot,Oe,Be),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function be(H,ae){ae===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ae.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;R.near=A.near=T.near=H.near,R.far=A.far=T.far=H.far,(G!==R.near||_!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,_=R.far);const ae=H.parent,Te=R.cameras;be(R,ae);for(let Ee=0;Ee<Te.length;Ee++)be(Te[Ee],ae);Te.length===2?j(R,T,A):R.projectionMatrix.copy(T.projectionMatrix),le(H,R,ae)};function le(H,ae,Te){Te===null?H.matrix.copy(ae.matrixWorld):(H.matrix.copy(Te.matrixWorld),H.matrix.invert(),H.matrix.multiply(ae.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ae.projectionMatrix),H.projectionMatrixInverse.copy(ae.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ol*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&v===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=H)};let ce=null;function he(H,ae){if(d=ae.getViewerPose(u||l),b=ae,d!==null){const Te=d.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let Ee=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,Ee=!0);for(let Ue=0;Ue<Te.length;Ue++){const ke=Te[Ue];let Ve=null;if(v!==null)Ve=v.getViewport(ke);else{const rt=h.getViewSubImage(f,ke);Ve=rt.viewport,Ue===0&&(e.setRenderTargetTextures(p,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(p))}let Ge=I[Ue];Ge===void 0&&(Ge=new Wn,Ge.layers.enable(Ue),Ge.viewport=new Qt,I[Ue]=Ge),Ge.matrix.fromArray(ke.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ke.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ue===0&&(R.matrix.copy(Ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ee===!0&&R.cameras.push(Ge)}}for(let Te=0;Te<w.length;Te++){const Ee=x[Te],Ue=w[Te];Ee!==null&&Ue!==void 0&&Ue.update(Ee,ae,u||l)}ce&&ce(H,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),b=null}const Q=new fh;Q.setAnimationLoop(he),this.setAnimationLoop=function(H){ce=H},this.dispose=function(){}}}function HS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,x,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),d(m,p)):p.isMeshStandardMaterial?(a(m,p),f(m,p),p.isMeshPhysicalMaterial&&v(m,p,T)):p.isMeshMatcapMaterial?(a(m,p),b(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),S(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(l(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function v(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function VS(i,e,t,n){let r={},a={},l=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,x){const T=x.program;n.uniformBlockBinding(w,T)}function u(w,x){let T=r[w.id];T===void 0&&(b(w),T=d(w),r[w.id]=T,w.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(w,A);const I=e.render.frame;a[w.id]!==I&&(f(w),a[w.id]=I)}function d(w){const x=h();w.__bindingPointIndex=x;const T=i.createBuffer(),A=w.__size,I=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,T),T}function h(){for(let w=0;w<o;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const x=r[w.id],T=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let I=0,R=T.length;I<R;I++){const G=T[I];if(v(G,I,A)===!0){const _=G.__offset,M=Array.isArray(G.value)?G.value:[G.value];let te=0;for(let B=0;B<M.length;B++){const k=M[B],z=S(k);typeof k=="number"?(G.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,_+te,G.__data)):k.isMatrix3?(G.__data[0]=k.elements[0],G.__data[1]=k.elements[1],G.__data[2]=k.elements[2],G.__data[3]=k.elements[0],G.__data[4]=k.elements[3],G.__data[5]=k.elements[4],G.__data[6]=k.elements[5],G.__data[7]=k.elements[0],G.__data[8]=k.elements[6],G.__data[9]=k.elements[7],G.__data[10]=k.elements[8],G.__data[11]=k.elements[0]):(k.toArray(G.__data,te),te+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,_,G.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(w,x,T){const A=w.value;if(T[x]===void 0){if(typeof A=="number")T[x]=A;else{const I=Array.isArray(A)?A:[A],R=[];for(let G=0;G<I.length;G++)R.push(I[G].clone());T[x]=R}return!0}else if(typeof A=="number"){if(T[x]!==A)return T[x]=A,!0}else{const I=Array.isArray(T[x])?T[x]:[T[x]],R=Array.isArray(A)?A:[A];for(let G=0;G<I.length;G++){const _=I[G];if(_.equals(R[G])===!1)return _.copy(R[G]),!0}}return!1}function b(w){const x=w.uniforms;let T=0;const A=16;let I=0;for(let R=0,G=x.length;R<G;R++){const _=x[R],M={boundary:0,storage:0},te=Array.isArray(_.value)?_.value:[_.value];for(let B=0,k=te.length;B<k;B++){const z=te[B],j=S(z);M.boundary+=j.boundary,M.storage+=j.storage}if(_.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=T,R>0){I=T%A;const B=A-I;I!==0&&B-M.boundary<0&&(T+=A-I,_.__offset=T)}T+=M.storage}return I=T%A,I>0&&(T+=A-I),w.__size=T,w.__cache={},this}function S(w){const x={boundary:0,storage:0};return typeof w=="number"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const T=l.indexOf(x.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function p(){for(const w in r)i.deleteBuffer(r[w]);l=[],r={},a={}}return{bind:c,update:u,dispose:p}}class xh{constructor(e={}){const{canvas:t=Fx(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=l;const v=new Uint32Array(4),b=new Int32Array(4);let S=null,m=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const x=this;let T=!1,A=0,I=0,R=null,G=-1,_=null;const M=new Qt,te=new Qt;let B=null;const k=new Nt(0);let z=0,j=t.width,be=t.height,le=1,ce=null,he=null;const Q=new Qt(0,0,j,be),H=new Qt(0,0,j,be);let ae=!1;const Te=new cc;let Ee=!1,Ue=!1,ke=null;const Ve=new sn,Ge=new dt,rt=new oe,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return R===null?le:1}let ie=n;function gt(P,se){for(let ve=0;ve<P.length;ve++){const re=P[ve],me=t.getContext(re,se);if(me!==null)return me}return null}try{const P={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",Me,!1),ie===null){const se=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&se.shift(),ie=gt(se,P),ie===null)throw gt(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ie instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ie.getShaderPrecisionFormat===void 0&&(ie.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let He,Se,Ie,Oe,Be,je,Je,vt,ot,D,E,X,ye,V,ue,fe,pe,Y,L,F,de,O,q,_e;function Le(){He=new e1(ie),Se=new Yy(ie,He,e),He.init(Se),O=new FS(ie,He,Se),Ie=new kS(ie,He,Se),Oe=new i1(ie),Be=new yS,je=new NS(ie,He,Ie,Be,Se,O,Oe),Je=new Zy(x),vt=new $y(x),ot=new hb(ie,Se),q=new Xy(ie,He,ot,Se),D=new t1(ie,ot,Oe,q),E=new o1(ie,D,ot,Oe),L=new s1(ie,Se,je),fe=new Ky(Be),X=new bS(x,Je,vt,He,Se,q,fe),ye=new HS(x,Be),V=new MS,ue=new CS(He,Se),Y=new jy(x,Je,vt,Ie,E,f,c),pe=new US(x,E,Se),_e=new VS(ie,Oe,Se,Ie),F=new qy(ie,He,Oe,Se),de=new n1(ie,He,Oe,Se),Oe.programs=X.programs,x.capabilities=Se,x.extensions=He,x.properties=Be,x.renderLists=V,x.shadowMap=pe,x.state=Ie,x.info=Oe}Le();const U=new GS(x,ie);this.xr=U,this.getContext=function(){return ie},this.getContextAttributes=function(){return ie.getContextAttributes()},this.forceContextLoss=function(){const P=He.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=He.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(P){P!==void 0&&(le=P,this.setSize(j,be,!1))},this.getSize=function(P){return P.set(j,be)},this.setSize=function(P,se,ve=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=P,be=se,t.width=Math.floor(P*le),t.height=Math.floor(se*le),ve===!0&&(t.style.width=P+"px",t.style.height=se+"px"),this.setViewport(0,0,P,se)},this.getDrawingBufferSize=function(P){return P.set(j*le,be*le).floor()},this.setDrawingBufferSize=function(P,se,ve){j=P,be=se,le=ve,t.width=Math.floor(P*ve),t.height=Math.floor(se*ve),this.setViewport(0,0,P,se)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(Q)},this.setViewport=function(P,se,ve,re){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,se,ve,re),Ie.viewport(M.copy(Q).multiplyScalar(le).floor())},this.getScissor=function(P){return P.copy(H)},this.setScissor=function(P,se,ve,re){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,se,ve,re),Ie.scissor(te.copy(H).multiplyScalar(le).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(P){Ie.setScissorTest(ae=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){he=P},this.getClearColor=function(P){return P.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(P=!0,se=!0,ve=!0){let re=0;if(P){let me=!1;if(R!==null){const Ne=R.texture.format;me=Ne===Kf||Ne===Yf||Ne===qf}if(me){const Ne=R.texture.type,De=Ne===cr||Ne===sr||Ne===oc||Ne===Ar||Ne===jf||Ne===Xf,ze=Y.getClearColor(),We=Y.getClearAlpha(),ct=ze.r,at=ze.g,_t=ze.b;De?(v[0]=ct,v[1]=at,v[2]=_t,v[3]=We,ie.clearBufferuiv(ie.COLOR,0,v)):(b[0]=ct,b[1]=at,b[2]=_t,b[3]=We,ie.clearBufferiv(ie.COLOR,0,b))}else re|=ie.COLOR_BUFFER_BIT}se&&(re|=ie.DEPTH_BUFFER_BIT),ve&&(re|=ie.STENCIL_BUFFER_BIT),ie.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),V.dispose(),ue.dispose(),Be.dispose(),Je.dispose(),vt.dispose(),E.dispose(),q.dispose(),_e.dispose(),X.dispose(),U.dispose(),U.removeEventListener("sessionstart",ut),U.removeEventListener("sessionend",Rt),ke&&(ke.dispose(),ke=null),St.stop()};function we(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=Oe.autoReset,se=pe.enabled,ve=pe.autoUpdate,re=pe.needsUpdate,me=pe.type;Le(),Oe.autoReset=P,pe.enabled=se,pe.autoUpdate=ve,pe.needsUpdate=re,pe.type=me}function Me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ae(P){const se=P.target;se.removeEventListener("dispose",Ae),Qe(se)}function Qe(P){Ke(P),Be.remove(P)}function Ke(P){const se=Be.get(P).programs;se!==void 0&&(se.forEach(function(ve){X.releaseProgram(ve)}),P.isShaderMaterial&&X.releaseShaderCache(P))}this.renderBufferDirect=function(P,se,ve,re,me,Ne){se===null&&(se=bt);const De=me.isMesh&&me.matrixWorld.determinant()<0,ze=lt(P,se,ve,re,me);Ie.setMaterial(re,De);let We=ve.index,ct=1;if(re.wireframe===!0){if(We=D.getWireframeAttribute(ve),We===void 0)return;ct=2}const at=ve.drawRange,_t=ve.attributes.position;let xe=at.start*ct,Ce=(at.start+at.count)*ct;Ne!==null&&(xe=Math.max(xe,Ne.start*ct),Ce=Math.min(Ce,(Ne.start+Ne.count)*ct)),We!==null?(xe=Math.max(xe,0),Ce=Math.min(Ce,We.count)):_t!=null&&(xe=Math.max(xe,0),Ce=Math.min(Ce,_t.count));const qe=Ce-xe;if(qe<0||qe===1/0)return;q.setup(me,re,ze,ve,We);let pt,nt=F;if(We!==null&&(pt=ot.get(We),nt=de,nt.setIndex(pt)),me.isMesh)re.wireframe===!0?(Ie.setLineWidth(re.wireframeLinewidth*$e()),nt.setMode(ie.LINES)):nt.setMode(ie.TRIANGLES);else if(me.isLine){let it=re.linewidth;it===void 0&&(it=1),Ie.setLineWidth(it*$e()),me.isLineSegments?nt.setMode(ie.LINES):me.isLineLoop?nt.setMode(ie.LINE_LOOP):nt.setMode(ie.LINE_STRIP)}else me.isPoints?nt.setMode(ie.POINTS):me.isSprite&&nt.setMode(ie.TRIANGLES);if(me.isInstancedMesh)nt.renderInstances(xe,qe,me.count);else if(ve.isInstancedBufferGeometry){const it=ve._maxInstanceCount!==void 0?ve._maxInstanceCount:1/0,Ot=Math.min(ve.instanceCount,it);nt.renderInstances(xe,qe,Ot)}else nt.render(xe,qe)},this.compile=function(P,se){function ve(re,me,Ne){re.transparent===!0&&re.side===ii&&re.forceSinglePass===!1?(re.side=Bn,re.needsUpdate=!0,Gt(re,me,Ne),re.side=Ri,re.needsUpdate=!0,Gt(re,me,Ne),re.side=ii):Gt(re,me,Ne)}m=ue.get(P),m.init(),w.push(m),P.traverseVisible(function(re){re.isLight&&re.layers.test(se.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),m.setupLights(x._useLegacyLights),P.traverse(function(re){const me=re.material;if(me)if(Array.isArray(me))for(let Ne=0;Ne<me.length;Ne++){const De=me[Ne];ve(De,P,re)}else ve(me,P,re)}),w.pop(),m=null};let Xe=null;function st(P){Xe&&Xe(P)}function ut(){St.stop()}function Rt(){St.start()}const St=new fh;St.setAnimationLoop(st),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(P){Xe=P,U.setAnimationLoop(P),P===null?St.stop():St.start()},U.addEventListener("sessionstart",ut),U.addEventListener("sessionend",Rt),this.render=function(P,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(se),se=U.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,se,R),m=ue.get(P,w.length),m.init(),w.push(m),Ve.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),Te.setFromProjectionMatrix(Ve),Ue=this.localClippingEnabled,Ee=fe.init(this.clippingPlanes,Ue),S=V.get(P,p.length),S.init(),p.push(S),ht(P,se,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(ce,he),this.info.render.frame++,Ee===!0&&fe.beginShadows();const ve=m.state.shadowsArray;if(pe.render(ve,P,se),Ee===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(S,P),m.setupLights(x._useLegacyLights),se.isArrayCamera){const re=se.cameras;for(let me=0,Ne=re.length;me<Ne;me++){const De=re[me];Et(S,P,De,De.viewport)}}else Et(S,P,se);R!==null&&(je.updateMultisampleRenderTarget(R),je.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(x,P,se),q.resetDefaultState(),G=-1,_=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function ht(P,se,ve,re){if(P.visible===!1)return;if(P.layers.test(se.layers)){if(P.isGroup)ve=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(se);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Te.intersectsSprite(P)){re&&rt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ve);const De=E.update(P),ze=P.material;ze.visible&&S.push(P,De,ze,ve,rt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Te.intersectsObject(P))){const De=E.update(P),ze=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),rt.copy(P.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),rt.copy(De.boundingSphere.center)),rt.applyMatrix4(P.matrixWorld).applyMatrix4(Ve)),Array.isArray(ze)){const We=De.groups;for(let ct=0,at=We.length;ct<at;ct++){const _t=We[ct],xe=ze[_t.materialIndex];xe&&xe.visible&&S.push(P,De,xe,ve,rt.z,_t)}}else ze.visible&&S.push(P,De,ze,ve,rt.z,null)}}const Ne=P.children;for(let De=0,ze=Ne.length;De<ze;De++)ht(Ne[De],se,ve,re)}function Et(P,se,ve,re){const me=P.opaque,Ne=P.transmissive,De=P.transparent;m.setupLightsView(ve),Ee===!0&&fe.setGlobalState(x.clippingPlanes,ve),Ne.length>0&&Bt(me,Ne,se,ve),re&&Ie.viewport(M.copy(re)),me.length>0&&zt(me,se,ve),Ne.length>0&&zt(Ne,se,ve),De.length>0&&zt(De,se,ve),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Bt(P,se,ve,re){const me=Se.isWebGL2;ke===null&&(ke=new Zi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")?Sa:cr,minFilter:cs,samples:me?4:0})),x.getDrawingBufferSize(Ge),me?ke.setSize(Ge.x,Ge.y):ke.setSize(Fl(Ge.x),Fl(Ge.y));const Ne=x.getRenderTarget();x.setRenderTarget(ke),x.getClearColor(k),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear();const De=x.toneMapping;x.toneMapping=lr,zt(P,ve,re),je.updateMultisampleRenderTarget(ke),je.updateRenderTargetMipmap(ke);let ze=!1;for(let We=0,ct=se.length;We<ct;We++){const at=se[We],_t=at.object,xe=at.geometry,Ce=at.material,qe=at.group;if(Ce.side===ii&&_t.layers.test(re.layers)){const pt=Ce.side;Ce.side=Bn,Ce.needsUpdate=!0,Lt(_t,ve,re,xe,Ce,qe),Ce.side=pt,Ce.needsUpdate=!0,ze=!0}}ze===!0&&(je.updateMultisampleRenderTarget(ke),je.updateRenderTargetMipmap(ke)),x.setRenderTarget(Ne),x.setClearColor(k,z),x.toneMapping=De}function zt(P,se,ve){const re=se.isScene===!0?se.overrideMaterial:null;for(let me=0,Ne=P.length;me<Ne;me++){const De=P[me],ze=De.object,We=De.geometry,ct=re===null?De.material:re,at=De.group;ze.layers.test(ve.layers)&&Lt(ze,se,ve,We,ct,at)}}function Lt(P,se,ve,re,me,Ne){P.onBeforeRender(x,se,ve,re,me,Ne),P.modelViewMatrix.multiplyMatrices(ve.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),me.onBeforeRender(x,se,ve,re,P,Ne),me.transparent===!0&&me.side===ii&&me.forceSinglePass===!1?(me.side=Bn,me.needsUpdate=!0,x.renderBufferDirect(ve,se,re,me,P,Ne),me.side=Ri,me.needsUpdate=!0,x.renderBufferDirect(ve,se,re,me,P,Ne),me.side=ii):x.renderBufferDirect(ve,se,re,me,P,Ne),P.onAfterRender(x,se,ve,re,me,Ne)}function Gt(P,se,ve){se.isScene!==!0&&(se=bt);const re=Be.get(P),me=m.state.lights,Ne=m.state.shadowsArray,De=me.state.version,ze=X.getParameters(P,me.state,Ne,se,ve),We=X.getProgramCacheKey(ze);let ct=re.programs;re.environment=P.isMeshStandardMaterial?se.environment:null,re.fog=se.fog,re.envMap=(P.isMeshStandardMaterial?vt:Je).get(P.envMap||re.environment),ct===void 0&&(P.addEventListener("dispose",Ae),ct=new Map,re.programs=ct);let at=ct.get(We);if(at!==void 0){if(re.currentProgram===at&&re.lightsStateVersion===De)return tn(P,ze),at}else ze.uniforms=X.getUniforms(P),P.onBuild(ve,ze,x),P.onBeforeCompile(ze,x),at=X.acquireProgram(ze,We),ct.set(We,at),re.uniforms=ze.uniforms;const _t=re.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(_t.clippingPlanes=fe.uniform),tn(P,ze),re.needsLights=xt(P),re.lightsStateVersion=De,re.needsLights&&(_t.ambientLightColor.value=me.state.ambient,_t.lightProbe.value=me.state.probe,_t.directionalLights.value=me.state.directional,_t.directionalLightShadows.value=me.state.directionalShadow,_t.spotLights.value=me.state.spot,_t.spotLightShadows.value=me.state.spotShadow,_t.rectAreaLights.value=me.state.rectArea,_t.ltc_1.value=me.state.rectAreaLTC1,_t.ltc_2.value=me.state.rectAreaLTC2,_t.pointLights.value=me.state.point,_t.pointLightShadows.value=me.state.pointShadow,_t.hemisphereLights.value=me.state.hemi,_t.directionalShadowMap.value=me.state.directionalShadowMap,_t.directionalShadowMatrix.value=me.state.directionalShadowMatrix,_t.spotShadowMap.value=me.state.spotShadowMap,_t.spotLightMatrix.value=me.state.spotLightMatrix,_t.spotLightMap.value=me.state.spotLightMap,_t.pointShadowMap.value=me.state.pointShadowMap,_t.pointShadowMatrix.value=me.state.pointShadowMatrix);const xe=at.getUniforms(),Ce=Js.seqWithValue(xe.seq,_t);return re.currentProgram=at,re.uniformsList=Ce,at}function tn(P,se){const ve=Be.get(P);ve.outputColorSpace=se.outputColorSpace,ve.instancing=se.instancing,ve.instancingColor=se.instancingColor,ve.skinning=se.skinning,ve.morphTargets=se.morphTargets,ve.morphNormals=se.morphNormals,ve.morphColors=se.morphColors,ve.morphTargetsCount=se.morphTargetsCount,ve.numClippingPlanes=se.numClippingPlanes,ve.numIntersection=se.numClipIntersection,ve.vertexAlphas=se.vertexAlphas,ve.vertexTangents=se.vertexTangents,ve.toneMapping=se.toneMapping}function lt(P,se,ve,re,me){se.isScene!==!0&&(se=bt),je.resetTextureUnits();const Ne=se.fog,De=re.isMeshStandardMaterial?se.environment:null,ze=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ci,We=(re.isMeshStandardMaterial?vt:Je).get(re.envMap||De),ct=re.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,at=!!ve.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),_t=!!ve.morphAttributes.position,xe=!!ve.morphAttributes.normal,Ce=!!ve.morphAttributes.color;let qe=lr;re.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(qe=x.toneMapping);const pt=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,nt=pt!==void 0?pt.length:0,it=Be.get(re),Ot=m.state.lights;if(Ee===!0&&(Ue===!0||P!==_)){const Xt=P===_&&re.id===G;fe.setState(re,P,Xt)}let wt=!1;re.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ot.state.version||it.outputColorSpace!==ze||me.isInstancedMesh&&it.instancing===!1||!me.isInstancedMesh&&it.instancing===!0||me.isSkinnedMesh&&it.skinning===!1||!me.isSkinnedMesh&&it.skinning===!0||me.isInstancedMesh&&it.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&it.instancingColor===!1&&me.instanceColor!==null||it.envMap!==We||re.fog===!0&&it.fog!==Ne||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==fe.numPlanes||it.numIntersection!==fe.numIntersection)||it.vertexAlphas!==ct||it.vertexTangents!==at||it.morphTargets!==_t||it.morphNormals!==xe||it.morphColors!==Ce||it.toneMapping!==qe||Se.isWebGL2===!0&&it.morphTargetsCount!==nt)&&(wt=!0):(wt=!0,it.__version=re.version);let nn=it.currentProgram;wt===!0&&(nn=Gt(re,se,me));let Xn=!1,fn=!1,Rn=!1;const Ft=nn.getUniforms(),Sn=it.uniforms;if(Ie.useProgram(nn.program)&&(Xn=!0,fn=!0,Rn=!0),re.id!==G&&(G=re.id,fn=!0),Xn||_!==P){Ft.setValue(ie,"projectionMatrix",P.projectionMatrix),Ft.setValue(ie,"viewMatrix",P.matrixWorldInverse);const Xt=Ft.map.cameraPosition;Xt!==void 0&&Xt.setValue(ie,rt.setFromMatrixPosition(P.matrixWorld)),Se.logarithmicDepthBuffer&&Ft.setValue(ie,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(ie,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,fn=!0,Rn=!0)}if(me.isSkinnedMesh){Ft.setOptional(ie,me,"bindMatrix"),Ft.setOptional(ie,me,"bindMatrixInverse");const Xt=me.skeleton;Xt&&(Se.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ft.setValue(ie,"boneTexture",Xt.boneTexture,je),Ft.setValue(ie,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Un=ve.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0&&Se.isWebGL2===!0)&&L.update(me,ve,nn),(fn||it.receiveShadow!==me.receiveShadow)&&(it.receiveShadow=me.receiveShadow,Ft.setValue(ie,"receiveShadow",me.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Sn.envMap.value=We,Sn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),fn&&(Ft.setValue(ie,"toneMappingExposure",x.toneMappingExposure),it.needsLights&&Ze(Sn,Rn),Ne&&re.fog===!0&&ye.refreshFogUniforms(Sn,Ne),ye.refreshMaterialUniforms(Sn,re,le,be,ke),Js.upload(ie,it.uniformsList,Sn,je)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Js.upload(ie,it.uniformsList,Sn,je),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(ie,"center",me.center),Ft.setValue(ie,"modelViewMatrix",me.modelViewMatrix),Ft.setValue(ie,"normalMatrix",me.normalMatrix),Ft.setValue(ie,"modelMatrix",me.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Xt=re.uniformsGroups;for(let Li=0,Mo=Xt.length;Li<Mo;Li++)if(Se.isWebGL2){const Ur=Xt[Li];_e.update(Ur,nn),_e.bind(Ur,nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nn}function Ze(P,se){P.ambientLightColor.needsUpdate=se,P.lightProbe.needsUpdate=se,P.directionalLights.needsUpdate=se,P.directionalLightShadows.needsUpdate=se,P.pointLights.needsUpdate=se,P.pointLightShadows.needsUpdate=se,P.spotLights.needsUpdate=se,P.spotLightShadows.needsUpdate=se,P.rectAreaLights.needsUpdate=se,P.hemisphereLights.needsUpdate=se}function xt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,se,ve){Be.get(P.texture).__webglTexture=se,Be.get(P.depthTexture).__webglTexture=ve;const re=Be.get(P);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ve===void 0,re.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,se){const ve=Be.get(P);ve.__webglFramebuffer=se,ve.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(P,se=0,ve=0){R=P,A=se,I=ve;let re=!0,me=null,Ne=!1,De=!1;if(P){const We=Be.get(P);We.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(ie.FRAMEBUFFER,null),re=!1):We.__webglFramebuffer===void 0?je.setupRenderTarget(P):We.__hasExternalTextures&&je.rebindTextures(P,Be.get(P.texture).__webglTexture,Be.get(P.depthTexture).__webglTexture);const ct=P.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(De=!0);const at=Be.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(at[se])?me=at[se][ve]:me=at[se],Ne=!0):Se.isWebGL2&&P.samples>0&&je.useMultisampledRTT(P)===!1?me=Be.get(P).__webglMultisampledFramebuffer:Array.isArray(at)?me=at[ve]:me=at,M.copy(P.viewport),te.copy(P.scissor),B=P.scissorTest}else M.copy(Q).multiplyScalar(le).floor(),te.copy(H).multiplyScalar(le).floor(),B=ae;if(Ie.bindFramebuffer(ie.FRAMEBUFFER,me)&&Se.drawBuffers&&re&&Ie.drawBuffers(P,me),Ie.viewport(M),Ie.scissor(te),Ie.setScissorTest(B),Ne){const We=Be.get(P.texture);ie.framebufferTexture2D(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,ie.TEXTURE_CUBE_MAP_POSITIVE_X+se,We.__webglTexture,ve)}else if(De){const We=Be.get(P.texture),ct=se||0;ie.framebufferTextureLayer(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,We.__webglTexture,ve||0,ct)}G=-1},this.readRenderTargetPixels=function(P,se,ve,re,me,Ne,De){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){Ie.bindFramebuffer(ie.FRAMEBUFFER,ze);try{const We=P.texture,ct=We.format,at=We.type;if(ct!==ui&&O.convert(ct)!==ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const _t=at===Sa&&(He.has("EXT_color_buffer_half_float")||Se.isWebGL2&&He.has("EXT_color_buffer_float"));if(at!==cr&&O.convert(at)!==ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_TYPE)&&!(at===Wi&&(Se.isWebGL2||He.has("OES_texture_float")||He.has("WEBGL_color_buffer_float")))&&!_t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=P.width-re&&ve>=0&&ve<=P.height-me&&ie.readPixels(se,ve,re,me,O.convert(ct),O.convert(at),Ne)}finally{const We=R!==null?Be.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(ie.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(P,se,ve=0){const re=Math.pow(2,-ve),me=Math.floor(se.image.width*re),Ne=Math.floor(se.image.height*re);je.setTexture2D(se,0),ie.copyTexSubImage2D(ie.TEXTURE_2D,ve,0,0,P.x,P.y,me,Ne),Ie.unbindTexture()},this.copyTextureToTexture=function(P,se,ve,re=0){const me=se.image.width,Ne=se.image.height,De=O.convert(ve.format),ze=O.convert(ve.type);je.setTexture2D(ve,0),ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,ve.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ve.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,ve.unpackAlignment),se.isDataTexture?ie.texSubImage2D(ie.TEXTURE_2D,re,P.x,P.y,me,Ne,De,ze,se.image.data):se.isCompressedTexture?ie.compressedTexSubImage2D(ie.TEXTURE_2D,re,P.x,P.y,se.mipmaps[0].width,se.mipmaps[0].height,De,se.mipmaps[0].data):ie.texSubImage2D(ie.TEXTURE_2D,re,P.x,P.y,De,ze,se.image),re===0&&ve.generateMipmaps&&ie.generateMipmap(ie.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(P,se,ve,re,me=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=P.max.x-P.min.x+1,De=P.max.y-P.min.y+1,ze=P.max.z-P.min.z+1,We=O.convert(re.format),ct=O.convert(re.type);let at;if(re.isData3DTexture)je.setTexture3D(re,0),at=ie.TEXTURE_3D;else if(re.isDataArrayTexture)je.setTexture2DArray(re,0),at=ie.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,re.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,re.unpackAlignment);const _t=ie.getParameter(ie.UNPACK_ROW_LENGTH),xe=ie.getParameter(ie.UNPACK_IMAGE_HEIGHT),Ce=ie.getParameter(ie.UNPACK_SKIP_PIXELS),qe=ie.getParameter(ie.UNPACK_SKIP_ROWS),pt=ie.getParameter(ie.UNPACK_SKIP_IMAGES),nt=ve.isCompressedTexture?ve.mipmaps[0]:ve.image;ie.pixelStorei(ie.UNPACK_ROW_LENGTH,nt.width),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,nt.height),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,P.min.x),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,P.min.y),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,P.min.z),ve.isDataTexture||ve.isData3DTexture?ie.texSubImage3D(at,me,se.x,se.y,se.z,Ne,De,ze,We,ct,nt.data):ve.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ie.compressedTexSubImage3D(at,me,se.x,se.y,se.z,Ne,De,ze,We,nt.data)):ie.texSubImage3D(at,me,se.x,se.y,se.z,Ne,De,ze,We,ct,nt),ie.pixelStorei(ie.UNPACK_ROW_LENGTH,_t),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,xe),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,Ce),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,qe),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,pt),me===0&&re.generateMipmaps&&ie.generateMipmap(at),Ie.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?je.setTextureCube(P,0):P.isData3DTexture?je.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?je.setTexture2DArray(P,0):je.setTexture2D(P,0),Ie.unbindTexture()},this.resetState=function(){A=0,I=0,R=null,Ie.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?Cr:Zf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cr?Jt:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class WS extends xh{}WS.prototype.isWebGL1Renderer=!0;class jS extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class XS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new oe;class co{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bh extends La{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ea;const Fa=new oe,ta=new oe,na=new oe,ia=new dt,Ba=new dt,yh=new sn,Gs=new oe,za=new oe,Hs=new oe,gd=new dt,dl=new dt,_d=new dt;class qS extends Tn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new $i;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new XS(t,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new co(n,3,0,!1)),ea.setAttribute("uv",new co(n,2,3,!1))}this.geometry=ea,this.material=e!==void 0?e:new bh,this.center=new dt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),na.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-na.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const l=this.center;Vs(Gs.set(-.5,-.5,0),na,l,ta,r,a),Vs(za.set(.5,-.5,0),na,l,ta,r,a),Vs(Hs.set(.5,.5,0),na,l,ta,r,a),gd.set(0,0),dl.set(1,0),_d.set(1,1);let o=e.ray.intersectTriangle(Gs,za,Hs,!1,Fa);if(o===null&&(Vs(za.set(-.5,.5,0),na,l,ta,r,a),dl.set(0,1),o=e.ray.intersectTriangle(Gs,Hs,za,!1,Fa),o===null))return;const c=e.ray.origin.distanceTo(Fa);c<e.near||c>e.far||t.push({distance:c,point:Fa.clone(),uv:ni.getInterpolation(Fa,Gs,za,Hs,gd,dl,_d,new dt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vs(i,e,t,n,r,a){ia.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ba.x=a*ia.x-r*ia.y,Ba.y=r*ia.x+a*ia.y):Ba.copy(ia),i.copy(e),i.x+=Ba.x,i.y+=Ba.y,i.applyMatrix4(yh)}class Qs extends En{constructor(e,t,n,r,a,l,o,c,u){super(e,t,n,r,a,l,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us extends La{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jf,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sh extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fl=new sn,xd=new oe,bd=new oe;class YS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(xd),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yd=new sn,Ga=new oe,hl=new oe;class KS extends YS{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new oe(1,0,0),new oe(-1,0,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,1,0),new oe(0,-1,0)],this._cubeUps=[new oe(0,1,0),new oe(0,1,0),new oe(0,1,0),new oe(0,1,0),new oe(0,0,1),new oe(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ga),hl.copy(n.position),hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hl),n.updateMatrixWorld(),r.makeTranslation(-Ga.x,-Ga.y,-Ga.z),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}}class ZS extends Sh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new KS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class JS extends Sh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Sd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Sd(){return(typeof performance>"u"?Date:performance).now()}class Md{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(In(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);function fc(i,e,t,n,r,a,l,o){const c=(R,G,_,M)=>[new dt(R/l,1-M/o),new dt(_/l,1-M/o),new dt(_/l,1-G/o),new dt(R/l,1-G/o)],u=c(e+a,t,e+n+a,t+a),d=c(e+n+a,t,e+n*2+a,t+a),h=c(e,t+a,e+a,t+a+r),f=c(e+a,t+a,e+n+a,t+a+r),v=c(e+n+a,t+a,e+n+a*2,t+r+a),b=c(e+n+a*2,t+a,e+n*2+a*2,t+r+a),S=i.attributes.uv,m=[v[3],v[2],v[0],v[1]],p=[h[3],h[2],h[0],h[1]],w=[u[3],u[2],u[0],u[1]],x=[d[0],d[1],d[3],d[2]],T=[f[3],f[2],f[0],f[1]],A=[b[3],b[2],b[0],b[1]],I=[];for(const R of[m,p,w,x,T,A])for(const G of R)I.push(G.x,G.y);S.set(new Float32Array(I)),S.needsUpdate=!0}function Zn(i,e,t,n,r,a){fc(i,e,t,n,r,a,64,64)}function zl(i,e,t,n,r,a){fc(i,e,t,n,r,a,64,32)}class gr extends xn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class QS extends xn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new us({side:Ri}),this.layer2Material=new us({side:ii,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new rn(8,8,8);Zn(e,0,0,8,8,8);const t=new jt(e,this.layer1Material),n=new rn(9,9,9);Zn(n,32,0,8,8,8);const r=new jt(n,this.layer2Material);this.head=new gr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new rn(8,12,4);Zn(a,16,16,8,12,4);const l=new jt(a,this.layer1Material),o=new rn(8.5,12.5,4.5);Zn(o,16,32,8,12,4);const c=new jt(o,this.layer2Material);this.body=new gr(l,c),this.body.name="body",this.body.add(l,c),this.body.position.y=-6,this.add(this.body);const u=new rn,d=new jt(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3:4,d.scale.y=12,d.scale.z=4,Zn(u,40,16,this.slim?3:4,12,4)});const h=new rn,f=new jt(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Zn(h,40,32,this.slim?3:4,12,4)});const v=new xn;v.add(d,f),this.modelListeners.push(()=>{v.position.x=this.slim?-.5:-1}),v.position.y=-4,this.rightArm=new gr(d,f),this.rightArm.name="rightArm",this.rightArm.add(v),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const b=new rn,S=new jt(b,this.layer1MaterialBiased);this.modelListeners.push(()=>{S.scale.x=this.slim?3:4,S.scale.y=12,S.scale.z=4,Zn(b,32,48,this.slim?3:4,12,4)});const m=new rn,p=new jt(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Zn(m,48,48,this.slim?3:4,12,4)});const w=new xn;w.add(S,p),this.modelListeners.push(()=>{w.position.x=this.slim?.5:1}),w.position.y=-4,this.leftArm=new gr(S,p),this.leftArm.name="leftArm",this.leftArm.add(w),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const x=new rn(4,12,4);Zn(x,0,16,4,12,4);const T=new jt(x,this.layer1MaterialBiased),A=new rn(4.5,12.5,4.5);Zn(A,0,32,4,12,4);const I=new jt(A,this.layer2MaterialBiased),R=new xn;R.add(T,I),R.position.y=-6,this.rightLeg=new gr(T,I),this.rightLeg.name="rightLeg",this.rightLeg.add(R),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const G=new rn(4,12,4);Zn(G,16,48,4,12,4);const _=new jt(G,this.layer1MaterialBiased),M=new rn(4.5,12.5,4.5);Zn(M,0,48,4,12,4);const te=new jt(M,this.layer2MaterialBiased),B=new xn;B.add(_,te),B.position.y=-6,this.leftLeg=new gr(_,te),this.leftLeg.name="leftLeg",this.leftLeg.add(B),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof gr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class $S extends xn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new us({side:ii,transparent:!0,alphaTest:1e-5});const e=new rn(10,16,1);zl(e,0,0,10,16,1),this.cape=new jt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class eM extends xn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new us({side:ii,transparent:!0,alphaTest:1e-5});const e=new rn(12,22,4);zl(e,22,0,10,20,2);const t=new jt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new xn,this.leftWing.add(t),this.add(this.leftWing);const n=new rn(12,22,4);zl(n,22,0,10,20,2);const r=new jt(n,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new xn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class tM extends xn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new us({side:Ri});const e=new rn(8,8,4/3);fc(e,0,0,6,6,1,14,7),this.rightEar=new jt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new jt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const wd=10.8*Math.PI/180;class nM extends xn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new QS,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new $S,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=wd,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new eM,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new tM,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=wd,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ws(i){return i instanceof HTMLImageElement||i instanceof HTMLVideoElement||i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas}function Gl(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let o=0;o<r;o++){const c=(l+o*n)*4;if(a.data[c+3]!==255)return!0}return!1}function yo(i){return i/64}function Ed(i,e,t){if(t){if(Gl(i,0,0,e,e))return}else if(Gl(i,0,0,e,e/2))return;const n=yo(e),r=(a,l,o,c)=>i.clearRect(a*n,l*n,o*n,c*n);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function iM(i,e){i.save(),i.scale(-1,1);const t=yo(e),n=(r,a,l,o,c,u)=>i.drawImage(i.canvas,r*t,a*t,l*t,o*t,-c*t,u*t,-l*t,o*t);n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52),i.restore()}function rM(i,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=i.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;i.width=r,i.height=r,n.clearRect(0,0,r,r),n.drawImage(e,0,0,r,r/2),iM(n,r),Ed(n,i.width,!1)}else i.width=e.width,i.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0,i.width,i.height),Ed(n,i.width,!0)}function aM(i){if(i.width===2*i.height)return i.width/64;if(i.width*17===i.height*22)return i.width/22;if(i.width*11===i.height*23)return i.width/46;throw new Error(`Bad cape size: ${i.width}x${i.height}`)}function sM(i,e){const t=aM(e);i.width=64*t,i.height=32*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function oM(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let o=0;o<r;o++){const c=(l+o*n)*4;if(!(a.data[c+0]===0&&a.data[c+1]===0&&a.data[c+2]===0&&a.data[c+3]===255))return!1}return!0}function lM(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let o=0;o<r;o++){const c=(l+o*n)*4;if(!(a.data[c+0]===255&&a.data[c+1]===255&&a.data[c+2]===255&&a.data[c+3]===255))return!1}return!0}function cM(i){const e=yo(i.width),t=i.getContext("2d",{willReadFrequently:!0}),n=(o,c,u,d)=>Gl(t,o*e,c*e,u*e,d*e),r=(o,c,u,d)=>oM(t,o*e,c*e,u*e,d*e),a=(o,c,u,d)=>lM(t,o*e,c*e,u*e,d*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function uM(i){if(i.width===i.height*2&&i.height%7===0)return i.height/7;throw new Error(`Bad ears size: ${i.width}x${i.height}`)}function dM(i,e){const t=uM(e);i.width=14*t,i.height=7*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function Td(i,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=yo(e.width),n=14*t,r=7*t;i.width=n,i.height=r;const a=i.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,n,r),a.drawImage(e,24*t,0,n,r,0,0,n,r)}async function js(i){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof i=="string"?e.src=i:(i.crossOrigin!==void 0&&(e.crossOrigin=i.crossOrigin),i.referrerPolicy!==void 0&&(e.referrerPolicy=i.referrerPolicy),e.src=i.src)})}const Ad={type:"change"},pl={type:"start"},Rd={type:"end"},Xs=new nh,Cd=new ar,fM=Math.cos(70*Ox.DEG2RAD);class hM extends Dr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new oe,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",E),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ad),n.update(),a=r.NONE},this.update=(function(){const L=new oe,F=new Ir().setFromUnitVectors(e.up,new oe(0,1,0)),de=F.clone().invert(),O=new oe,q=new Ir,_e=new oe,Le=2*Math.PI;return function(we=null){const ne=n.object.position;L.copy(ne).sub(n.target),L.applyQuaternion(F),o.setFromVector3(L),n.autoRotate&&a===r.NONE&&te(_(we)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Me=n.minAzimuthAngle,Ae=n.maxAzimuthAngle;isFinite(Me)&&isFinite(Ae)&&(Me<-Math.PI?Me+=Le:Me>Math.PI&&(Me-=Le),Ae<-Math.PI?Ae+=Le:Ae>Math.PI&&(Ae-=Le),Me<=Ae?o.theta=Math.max(Me,Math.min(Ae,o.theta)):o.theta=o.theta>(Me+Ae)/2?Math.max(Me,o.theta):Math.min(Ae,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&I||n.object.isOrthographicCamera?o.radius=he(o.radius):o.radius=he(o.radius*u),L.setFromSpherical(o),L.applyQuaternion(de),ne.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let Qe=!1;if(n.zoomToCursor&&I){let Ke=null;if(n.object.isPerspectiveCamera){const Xe=L.length();Ke=he(Xe*u);const st=Xe-Ke;n.object.position.addScaledVector(T,st),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Xe=new oe(A.x,A.y,0);Xe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Qe=!0;const st=new oe(A.x,A.y,0);st.unproject(n.object),n.object.position.sub(st).add(Xe),n.object.updateMatrixWorld(),Ke=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ke!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ke).add(n.object.position):(Xs.origin.copy(n.object.position),Xs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xs.direction))<fM?e.lookAt(n.target):(Cd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xs.intersectPlane(Cd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Qe=!0);return u=1,I=!1,Qe||O.distanceToSquared(n.object.position)>l||8*(1-q.dot(n.object.quaternion))>l||_e.distanceToSquared(n.target)>0?(n.dispatchEvent(Ad),O.copy(n.object.position),q.copy(n.object.quaternion),_e.copy(n.target),Qe=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",Be),n.domElement.removeEventListener("pointercancel",Je),n.domElement.removeEventListener("wheel",D),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Je),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,o=new Md,c=new Md;let u=1;const d=new oe,h=new dt,f=new dt,v=new dt,b=new dt,S=new dt,m=new dt,p=new dt,w=new dt,x=new dt,T=new oe,A=new dt;let I=!1;const R=[],G={};function _(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function te(L){c.theta-=L}function B(L){c.phi-=L}const k=(function(){const L=new oe;return function(de,O){L.setFromMatrixColumn(O,0),L.multiplyScalar(-de),d.add(L)}})(),z=(function(){const L=new oe;return function(de,O){n.screenSpacePanning===!0?L.setFromMatrixColumn(O,1):(L.setFromMatrixColumn(O,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(de),d.add(L)}})(),j=(function(){const L=new oe;return function(de,O){const q=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;L.copy(_e).sub(n.target);let Le=L.length();Le*=Math.tan(n.object.fov/2*Math.PI/180),k(2*de*Le/q.clientHeight,n.object.matrix),z(2*O*Le/q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(de*(n.object.right-n.object.left)/n.object.zoom/q.clientWidth,n.object.matrix),z(O*(n.object.top-n.object.bottom)/n.object.zoom/q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function be(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(L){if(!n.zoomToCursor)return;I=!0;const F=n.domElement.getBoundingClientRect(),de=L.clientX-F.left,O=L.clientY-F.top,q=F.width,_e=F.height;A.x=de/q*2-1,A.y=-(O/_e)*2+1,T.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function he(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function Q(L){h.set(L.clientX,L.clientY)}function H(L){ce(L),p.set(L.clientX,L.clientY)}function ae(L){b.set(L.clientX,L.clientY)}function Te(L){f.set(L.clientX,L.clientY),v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;te(2*Math.PI*v.x/F.clientHeight),B(2*Math.PI*v.y/F.clientHeight),h.copy(f),n.update()}function Ee(L){w.set(L.clientX,L.clientY),x.subVectors(w,p),x.y>0?be(M()):x.y<0&&le(M()),p.copy(w),n.update()}function Ue(L){S.set(L.clientX,L.clientY),m.subVectors(S,b).multiplyScalar(n.panSpeed),j(m.x,m.y),b.copy(S),n.update()}function ke(L){ce(L),L.deltaY<0?le(M()):L.deltaY>0&&be(M()),n.update()}function Ve(L){let F=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(-n.keyPanSpeed,0),F=!0;break}F&&(L.preventDefault(),n.update())}function Ge(){if(R.length===1)h.set(R[0].pageX,R[0].pageY);else{const L=.5*(R[0].pageX+R[1].pageX),F=.5*(R[0].pageY+R[1].pageY);h.set(L,F)}}function rt(){if(R.length===1)b.set(R[0].pageX,R[0].pageY);else{const L=.5*(R[0].pageX+R[1].pageX),F=.5*(R[0].pageY+R[1].pageY);b.set(L,F)}}function bt(){const L=R[0].pageX-R[1].pageX,F=R[0].pageY-R[1].pageY,de=Math.sqrt(L*L+F*F);p.set(0,de)}function $e(){n.enableZoom&&bt(),n.enablePan&&rt()}function ie(){n.enableZoom&&bt(),n.enableRotate&&Ge()}function gt(L){if(R.length==1)f.set(L.pageX,L.pageY);else{const de=Y(L),O=.5*(L.pageX+de.x),q=.5*(L.pageY+de.y);f.set(O,q)}v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;te(2*Math.PI*v.x/F.clientHeight),B(2*Math.PI*v.y/F.clientHeight),h.copy(f)}function He(L){if(R.length===1)S.set(L.pageX,L.pageY);else{const F=Y(L),de=.5*(L.pageX+F.x),O=.5*(L.pageY+F.y);S.set(de,O)}m.subVectors(S,b).multiplyScalar(n.panSpeed),j(m.x,m.y),b.copy(S)}function Se(L){const F=Y(L),de=L.pageX-F.x,O=L.pageY-F.y,q=Math.sqrt(de*de+O*O);w.set(0,q),x.set(0,Math.pow(w.y/p.y,n.zoomSpeed)),be(x.y),p.copy(w)}function Ie(L){n.enableZoom&&Se(L),n.enablePan&&He(L)}function Oe(L){n.enableZoom&&Se(L),n.enableRotate&&gt(L)}function Be(L){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",je),n.domElement.addEventListener("pointerup",Je)),ue(L),L.pointerType==="touch"?X(L):vt(L))}function je(L){n.enabled!==!1&&(L.pointerType==="touch"?ye(L):ot(L))}function Je(L){fe(L),R.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Je)),n.dispatchEvent(Rd),a=r.NONE}function vt(L){let F;switch(L.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Nr.DOLLY:if(n.enableZoom===!1)return;H(L),a=r.DOLLY;break;case Nr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;ae(L),a=r.PAN}else{if(n.enableRotate===!1)return;Q(L),a=r.ROTATE}break;case Nr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;Q(L),a=r.ROTATE}else{if(n.enablePan===!1)return;ae(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(pl)}function ot(L){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Te(L);break;case r.DOLLY:if(n.enableZoom===!1)return;Ee(L);break;case r.PAN:if(n.enablePan===!1)return;Ue(L);break}}function D(L){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(L.preventDefault(),n.dispatchEvent(pl),ke(L),n.dispatchEvent(Rd))}function E(L){n.enabled===!1||n.enablePan===!1||Ve(L)}function X(L){switch(pe(L),R.length){case 1:switch(n.touches.ONE){case Or.ROTATE:if(n.enableRotate===!1)return;Ge(),a=r.TOUCH_ROTATE;break;case Or.PAN:if(n.enablePan===!1)return;rt(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Or.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$e(),a=r.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(pl)}function ye(L){switch(pe(L),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;gt(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;He(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(L),n.update();break;default:a=r.NONE}}function V(L){n.enabled!==!1&&L.preventDefault()}function ue(L){R.push(L)}function fe(L){delete G[L.pointerId];for(let F=0;F<R.length;F++)if(R[F].pointerId==L.pointerId){R.splice(F,1);return}}function pe(L){let F=G[L.pointerId];F===void 0&&(F=new dt,G[L.pointerId]=F),F.set(L.pageX,L.pageY)}function Y(L){const F=L.pointerId===R[0].pointerId?R[1]:R[0];return G[F.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",Be),n.domElement.addEventListener("pointercancel",Je),n.domElement.addEventListener("wheel",D,{passive:!1}),this.update()}}const pM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class So{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mM=new hh(-1,1,1,-1,0,1),hc=new $i;hc.setAttribute("position",new Yi([-1,3,0,-1,-1,0,3,-1,0],3));hc.setAttribute("uv",new Yi([0,2,0,0,2,0],2));class vM{constructor(e){this._mesh=new jt(hc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class wh extends So{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ji?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ch.clone(e.uniforms),this.material=new Ji({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vM(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Pd extends So{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,o;this.inverse?(l=0,o=1):(l=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class gM extends So{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _M{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new dt);this._width=n.width,this._height=n.height,t=new Zi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sa}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wh(pM),this.copyPass.material.blending=qi,this.clock=new Mh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Pd!==void 0&&(l instanceof Pd?n=!0:l instanceof gM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xM extends So{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Nt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}const bM={uniforms:{tDiffuse:{value:null},resolution:{value:new dt(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class Eh{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const n=t*this.speed;this.animate(e,n),this.animationObjects.forEach((r,a)=>{const l=this.progress0.get(a);r(e,this.progress-l,a)}),this.progress+=n}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Ld extends Eh{animate(e){const t=this.progress*2,n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class Id extends Eh{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class yM extends qS{constructor(e="",t={}){const n=new bh({transparent:!0,alphaTest:1e-5});super(n),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=n,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const n=t.measureText(this.text);e.width=this.margin[3]+n.actualBoundingBoxLeft+n.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+n.actualBoundingBoxAscent+n.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+n.actualBoundingBoxLeft,this.margin[0]+n.actualBoundingBoxAscent);const r=new Qs(e);r.magFilter=$t,r.minFilter=$t,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class SM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new JS(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new ZS(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new jS,this.camera=new Wn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Jn.enabled=!1,this.renderer=new xh({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Zi(0,0,{depthTexture:new _h(0,0,Wi)})),this.composer=new _M(this.renderer,t),this.renderPass=new xM(this.scene,this.camera),this.fxaaPass=new wh(bM),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new nM,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new xn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new hM(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Mh,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=n=>{n.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",n=>{n.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Qs(this.skinCanvas),this.skinTexture.magFilter=$t,this.skinTexture.minFilter=$t,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Qs(this.capeCanvas),this.capeTexture.magFilter=$t,this.capeTexture.minFilter=$t,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Qs(this.earsCanvas),this.earsTexture.magFilter=$t,this.earsTexture.minFilter=$t,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ws(e))rM(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=cM(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Td(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return js(e).then(n=>this.loadSkin(n,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ws(e))sM(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return js(e).then(n=>this.loadCape(n,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ws(e))t.textureType==="skin"?Td(this.earsCanvas,e):dM(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return js(e).then(n=>this.loadEars(n,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,so)}loadBackground(e,t){if(Ws(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new En,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return js(e).then(n=>this.loadBackground(n,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new oe).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new dt).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new dt).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Nt||e instanceof En?this.scene.background=e:this.scene.background=new Nt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof Tn||(e=new yM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const ei=Ut({list:[],active:null,ready:!1}),ml=new Map;function Hl(i,e){const t=window.__TAURI__?.core;return t?t.invoke(i,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function qs(){try{ei.list=await Hl("get_accounts"),ei.active=await Hl("get_active_account")}catch{}finally{ei.ready=!0}}function ds(i){return i?i.skin??(i.account_type?.type==="ely_by"?i.username:null):null}async function Vl(i){if(!i)return null;const e=String(i).trim();if(!e||e.startsWith("data:"))return e||null;if(ml.has(e))return ml.get(e);try{const t=await Hl("proxy_skin_png",{source:e});return ml.set(e,t),t}catch{return null}}function MM(i){try{const e=String(i??"").split(",")[1]??"",t=atob(e.slice(0,44));if(t.length<24)return null;const n=l=>t.charCodeAt(l)&255;if(n(1)!==80||n(2)!==78||n(3)!==71)return null;const r=(n(16)<<24|n(17)<<16|n(18)<<8|n(19))>>>0,a=(n(20)<<24|n(21)<<16|n(22)<<8|n(23))>>>0;return!r||!a?null:{width:r,height:a}}catch{return null}}var wM=W('<button title="Toggle the hat/jacket outer layer"> </button>'),EM=W("<canvas></canvas> <!>",1);function pc(i,e){Yt(e,!0);let t=tt(e,"skin",3,null),n=tt(e,"cape",3,null),r=tt(e,"model",3,null),a=tt(e,"width",3,260),l=tt(e,"height",3,340),o=tt(e,"walking",3,!1),c=tt(e,"autorotate",3,!1),u=tt(e,"zoom",3,.85),d=tt(e,"outerLayer",15,!0),h=tt(e,"showToggle",3,!1),f=ee(null),v=null,b,S,m,p=ee(null),w=ee(null),x=0;function T(B){if(!B)return null;const k=String(B).trim();if(!k)return null;if(/^(https?:|data:)/i.test(k))return k;const z=window.__TAURI__?.core?.convertFileSrc;return z?z(k):k}function A(B){const k=String(B??"").trim().toLowerCase();return k==="slim"?"slim":k==="classic"?"default":"auto-detect"}function I(){v&&((s(p)!==b||A(r())!==m)&&(b=s(p),m=A(r()),s(p)?v.loadSkin(s(p),{model:m}).catch(()=>{}):v.resetSkin()),s(w)!==S&&(S=s(w),s(w)?v.loadCape(s(w)).catch(()=>{}):v.resetCape()))}function R(){const B=v?.playerObject?.skin;if(B)for(const k of[B.head,B.body,B.rightArm,B.leftArm,B.rightLeg,B.leftLeg])k?.outerLayer&&(k.outerLayer.visible=d())}Pi(()=>(v=new SM({canvas:s(f),width:a(),height:l(),zoom:u(),fov:55}),v.controls.enablePan=!1,v.controls.enableZoom=!0,v.autoRotate=c(),v.animation=o()?new Id:new Ld,I(),R(),()=>{v?.dispose(),v=null})),en(()=>{const B=t(),k=n(),z=++x;(async()=>{const j=await Vl(B),be=await Vl(k);z===x&&(g(p,j??T(B),!0),g(w,be??T(k),!0))})()}),en(()=>{I(),R()}),en(()=>{d(),v&&R()}),en(()=>{v&&(v.animation=o()?new Id:new Ld)}),en(()=>{v&&(v.autoRotate=c())}),en(()=>{v&&v.setSize(a(),l())});var G=EM(),_=yt(G);Rf(_,B=>g(f,B),()=>s(f));var M=y(_,2);{var te=B=>{var k=wM(),z=K(k);ge(()=>{mt(k,1,`rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) ${d()?"text-(--accent)":""}`),Fe(k,"aria-pressed",d()),Z(z,`Outer layer: ${d()?"on":"off"}`)}),$("click",k,()=>d(!d())),N(B,k)};Re(M,B=>{h()&&B(te)})}ge(()=>Ln(_,`width:${a()??""}px;height:${l()??""}px;display:block`)),N(i,G),Kt()}on(["click"]);var TM=W('<span class="absolute inset-0"></span> <span class="absolute inset-0"></span>',1),AM=W('<span class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"> </span>'),RM=W("<span><!></span>");function mc(i,e){Yt(e,!0);let t=tt(e,"source",3,null),n=tt(e,"size",3,32),r=tt(e,"letter",3,null),a=tt(e,"class",3,""),l=ee(null),o=ee(1),c=0;en(()=>{const m=t(),p=++c;(async()=>{const w=await Vl(m);if(p!==c)return;g(l,w,!0);const x=w?MM(w):null;g(o,x&&x.height&&x.width?x.height/x.width:1,!0)})()}),nc(()=>{c+=1});const u=ft(()=>(800*s(o)).toFixed(4)),d=ft(()=>(100/(8*s(o)-1)).toFixed(4)),h=ft(()=>s(l)?`background-image:url(${s(l)});background-size:800% ${s(u)}%;image-rendering:pixelated;`:"");var f=RM(),v=C(f);{var b=m=>{var p=TM(),w=yt(p),x=y(w,2);ge(()=>{Ln(w,`${s(h)}background-position:14.2857% ${s(d)}%`),Ln(x,`${s(h)}background-position:71.4286% ${s(d)}%`)}),N(m,p)},S=m=>{var p=AM(),w=K(p,!0);ge(()=>{Ln(p,`font-size:${n()*.45}px`),Z(w,r())}),N(m,p)};Re(v,m=>{s(l)?m(b):r()&&m(S,1)})}ge(()=>{mt(f,1,`relative inline-block shrink-0 overflow-hidden ${a()??""}`),Ln(f,`width:${n()??""}px;height:${n()??""}px`)}),N(i,f),Kt()}var CM=W('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),PM=W(`<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40" title="Silently renew this account's token"> </button>`),LM=W('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),IM=W('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),DM=W('<div><div class="flex items-center gap-3"><!> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),UM=W('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),kM=W('<p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),NM=W('<div class="flex flex-col"><!> <!></div>');function Th(i,e){Yt(e,!0);let t=tt(e,"accounts",19,()=>[]),n=tt(e,"active",3,null),r=ee(""),a=ee(!1),l=ee(null),o=ee(""),c=ee(""),u=ee(null);function d(_,M){const te=window.__TAURI__?.core;return te?te.invoke(_,M):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function h(_){g(r,"");try{await d("set_active_account",{id:_}),await e.onrefresh?.()}catch(M){g(r,String(M),!0)}}async function f(_){g(r,"");try{await d("remove_account",{id:_}),s(l)===_&&g(l,null),await e.onrefresh?.()}catch(M){g(r,String(M),!0)}}async function v(_){const M=b(_);if(M){g(r,""),g(u,_.id,!0);try{await d(M,{id:_.id}),await e.onrefresh?.()}catch(te){g(r,String(te),!0)}finally{g(u,null)}}}function b(_){const M=_.account_type?.type;return M==="microsoft"?"refresh_microsoft_account":M==="ely_by"&&_.refresh_token?"refresh_elyby_account":null}function S(_){if(s(l)===_.id){g(l,null);return}g(l,_.id,!0),g(o,_.skin??"",!0),g(c,_.cape??"",!0)}async function m(_){const M=window.__TAURI__?.dialog?.open;if(!M){g(r,"File picker unavailable in this build.");return}try{const te=await M({multiple:!1,title:_==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!te)return;g(_==="skin"?o:c,String(te),!0),g(r,"")}catch(te){g(r,String(te),!0)}}async function p(){g(r,""),g(a,!0);try{await d("set_account_textures",{id:s(l),skin:s(o).trim()||null,cape:s(c).trim()||null}),await e.onrefresh?.(),g(l,null)}catch(_){g(r,String(_),!0)}finally{g(a,!1)}}async function w(){g(o,""),g(c,""),await p()}function x(_){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[_.account_type.type]??"Yggdrasil"}const T=ft(()=>t().find(_=>_.id===s(l))??null);var A=NM(),I=C(A);At(I,17,t,_=>_.id,(_,M)=>{var te=DM(),B=C(te),k=C(B);{let Se=ft(()=>ds(s(M))),Ie=ft(()=>s(M).username[0]?.toUpperCase()??"?");mc(k,{get source(){return s(Se)},size:32,get letter(){return s(Ie)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var z=y(k,2),j=C(z),be=C(j),le=K(be,!0),ce=y(be,2),he=K(ce,!0),Q=y(ce,2);{var H=Se=>{var Ie=CM();N(Se,Ie)};Re(Q,Se=>{n()?.id===s(M).id&&Se(H)})}var ae=y(j,2),Te=K(ae,!0),Ee=y(z,2),Ue=C(Ee),ke=C(Ue);wi(ke,{emoji:"🎨"});var Ve=y(Ue,2);{var Ge=Se=>{var Ie=PM(),Oe=K(Ie,!0);ge(()=>{Ie.disabled=s(u)!==null,Z(Oe,s(u)===s(M).id?"Refreshing…":"Refresh token")}),$("click",Ie,()=>v(s(M))),N(Se,Ie)},rt=ft(()=>b(s(M)));Re(Ve,Se=>{s(rt)&&Se(Ge)})}var bt=y(Ve,2);{var $e=Se=>{var Ie=LM();$("click",Ie,()=>h(s(M).id)),N(Se,Ie)};Re(bt,Se=>{n()?.id!==s(M).id&&Se($e)})}var ie=y(bt,2),gt=y(B,2);{var He=Se=>{var Ie=IM(),Oe=C(Ie);{let ue=ft(()=>s(T)?.model);pc(Oe,{get skin(){return s(o)},get cape(){return s(c)},get model(){return s(ue)},width:110,height:150})}var Be=y(Oe,2),je=C(Be),Je=y(C(je)),vt=K(Je,!0),ot=y(je,2),D=y(C(ot)),E=K(D,!0),X=y(ot,2),ye=C(X),V=y(ye,2);ge(()=>{Z(vt,s(o)||"default (Steve/Alex)"),Z(E,s(c)||"none"),ye.disabled=s(a)}),$("click",je,()=>m("skin")),$("click",ot,()=>m("cape")),$("click",ye,p),$("click",V,w),N(Se,Ie)};Re(gt,Se=>{s(l)===s(M).id&&s(T)&&Se(He)})}ge(Se=>{mt(te,1,`border-b border-(--border) px-4 py-2.5 ${n()?.id===s(M).id?"bg-(--accent)/10":""}`),Z(le,s(M).username),Z(he,Se),Z(Te,s(M).uuid)},[()=>x(s(M))]),$("click",Ue,()=>S(s(M))),$("click",ie,()=>f(s(M).id)),N(_,te)},_=>{var M=UM();N(_,M)});var R=y(I,2);{var G=_=>{var M=kM(),te=K(M,!0);ge(()=>Z(te,s(r))),N(_,M)};Re(R,_=>{s(r)&&_(G)})}N(i,A),Kt()}on(["click"]);var OM=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <div class="border-t border-(--border)"><!></div></div></div></div>');function FM(i,e){Yt(e,!0);let t=tt(e,"accounts",19,()=>[]),n=tt(e,"active",3,null);Pi(()=>{const f=Ca(()=>e.onclose?.());return()=>Pa(f)});var r=OM(),a=C(r),l=C(a),o=y(C(l),2),c=y(l,2),u=C(c);Ff(u,{get onrefresh(){return e.onrefresh}});var d=y(u,2),h=C(d);Th(h,{get accounts(){return t()},get active(){return n()},get onrefresh(){return e.onrefresh}}),$("click",r,f=>{f.target===f.currentTarget&&e.onclose?.()}),$("click",o,()=>e.onclose?.()),N(i,r),Kt()}on(["click"]);var BM=W('<button><span class="truncate"> </span></button>'),zM=W('<span class="text-[9px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),GM=W('<button><!> <span class="text-[12px] font-medium"> </span> <!></button>'),HM=W('<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]"><dt class="text-(--text-muted)">Profile UUID</dt> <dd class="min-w-0 truncate font-mono"> </dd> <dt class="text-(--text-muted)">Skin source</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Cape</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Renewable token</dt> <dd class="min-w-0 truncate"> </dd></dl></div>'),VM=W('<div class="mt-6 flex flex-wrap gap-2"></div> <!>',1),WM=W(`<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><p class="text-sm font-medium">No accounts yet</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom
              Yggdrasil server — everything lives in the Add Account section.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Add an account</button></div>`),jM=W('<h2 class="text-[16px] font-semibold">Account overview</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The character launches use, with the hat/jacket outer layer included.</p> <!>',1),XM=W('<h2 class="text-[16px] font-semibold">Add account</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.</p> <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),qM=W('<h2 class="text-[16px] font-semibold">Saved accounts</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Set the active profile, renew tokens silently, edit skins — or remove accounts.</p> <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),YM=W('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Accounts sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div></div>');function KM(i,e){Yt(e,!0);const t=[{id:"overview",label:"Overview"},{id:"add",label:"Add Account"},{id:"saved",label:"Saved Accounts"}];let n=ee("overview"),r=ee(null);const a=ft(()=>{const w=ei.list;return w.find(x=>x.id===s(r))??w.find(x=>x.id===ei.active?.id)??w[0]??null});let l=ee(!0);function o(w){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[w.account_type.type]??"Yggdrasil"}var c=YM(),u=C(c),d=C(u),h=y(d,2);At(h,21,()=>t,w=>w.id,(w,x)=>{var T=BM(),A=C(T),I=K(A,!0);ge(()=>{mt(T,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${s(n)===s(x).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Fe(T,"aria-current",s(n)===s(x).id?"true":void 0),Z(I,s(x).label)}),$("click",T,()=>g(n,s(x).id,!0)),N(w,T)});var f=y(u,2),v=C(f),b=C(v);{var S=w=>{var x=jM(),T=y(yt(x),4);{var A=R=>{var G=VM(),_=yt(G);At(_,21,()=>ei.list,B=>B.id,(B,k)=>{var z=GM(),j=C(z);{let Q=ft(()=>ds(s(k))),H=ft(()=>s(k).username[0]?.toUpperCase()??"?");mc(j,{get source(){return s(Q)},size:24,get letter(){return s(H)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var be=y(j,2),le=K(be,!0),ce=y(be,2);{var he=Q=>{var H=zM();N(Q,H)};Re(ce,Q=>{ei.active?.id===s(k).id&&Q(he)})}ge(()=>{mt(z,1,`flex items-center gap-2 rounded border px-2 py-1.5 text-left ${s(a)?.id===s(k).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Fe(z,"title",`Preview ${s(k).username??""}`),Z(le,s(k).username)}),$("click",z,()=>g(r,s(k).id,!0)),N(B,z)});var M=y(_,2);{var te=B=>{var k=HM(),z=C(k);{let rt=ft(()=>ds(s(a)));pc(z,{get skin(){return s(rt)},get cape(){return s(a).cape},get model(){return s(a).model},width:230,height:310,showToggle:!0,get outerLayer(){return s(l)},set outerLayer(bt){g(l,bt,!0)}})}var j=y(z,2),be=C(j),le=K(be,!0),ce=y(be,2),he=K(ce,!0),Q=y(j,2),H=y(C(Q),2),ae=K(H,!0),Te=y(H,4),Ee=K(Te,!0),Ue=y(Te,4),ke=K(Ue,!0),Ve=y(Ue,4),Ge=K(Ve,!0);ge(rt=>{Z(le,s(a).username),Z(he,rt),Fe(H,"title",s(a).uuid),Z(ae,s(a).uuid),Fe(Te,"title",s(a).skin??"default (Steve/Alex)"),Z(Ee,s(a).skin?"custom skin":"default (Steve/Alex)"),Z(ke,s(a).cape?"custom cape":"none"),Z(Ge,s(a).refresh_token?"yes — silent refresh available":"no")},[()=>o(s(a))]),N(B,k)};Re(M,B=>{s(a)&&B(te)})}N(R,G)},I=R=>{var G=WM(),_=y(C(G),4);$("click",_,()=>g(n,"add")),N(R,G)};Re(T,R=>{ei.list.length?R(A):R(I,-1)})}N(w,x)},m=w=>{var x=XM(),T=y(yt(x),4),A=C(T);Ff(A,{get onrefresh(){return e.onrefresh}}),N(w,x)},p=w=>{var x=qM(),T=y(yt(x),4),A=C(T);Th(A,{get accounts(){return ei.list},get active(){return ei.active},get onrefresh(){return e.onrefresh}}),N(w,x)};Re(b,w=>{s(n)==="overview"?w(S):s(n)==="add"?w(m,1):w(p,-1)})}$("click",d,function(...w){e.onback?.apply(this,w)}),N(i,c),Kt()}on(["click"]);var ZM=W('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),JM=W('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),QM=W('<p class="text-center text-[11px] text-red-400"> </p>'),$M=W("<option> </option>"),ew=W("<option>No instances yet</option>"),tw=W('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),nw=W('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),iw=W('<p class="mt-2 text-[11px] text-red-400"> </p>'),rw=W('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="flex items-center gap-1.5 rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer"><!> Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),aw=W('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function sw(i,e){Yt(e,!0);let t=tt(e,"instances",19,()=>[]),n=tt(e,"active",3,null),r=tt(e,"gameRunning",3,!1),a=tt(e,"status",3,"Ready");function l(B,k){const z=window.__TAURI__?.core;return z?z.invoke(B,k):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const o="twilight-pinned-servers";let c=ee(Ut(f())),u=ee(""),d=ee(""),h=ee("");function f(){try{const B=JSON.parse(localStorage.getItem(o)??"[]");return Array.isArray(B)?B:[]}catch{return[]}}function v(){localStorage.setItem(o,JSON.stringify(s(c)))}function b(B){B.preventDefault(),g(h,"");const k=s(d).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(k)){g(h,"Address must be a hostname (optionally host:port).");return}g(c,[...s(c),{name:s(u).trim()||k.split(":")[0],address:k}],!0),v(),g(u,""),g(d,"")}function S(B){g(c,s(c).filter((k,z)=>z!==B),!0),v()}let m=ee("");en(()=>{s(m)&&t().some(B=>B.id===s(m))||g(m,t()[0]?.id??"",!0)});const p=ft(()=>t().find(B=>B.id===s(m))?.name??"no instance selected");function w(B){!s(m)||r()||e.onlaunch?.(s(m),B.address)}let x=ee(""),T=ee(!1);async function A(B){const k=window.__TAURI__?.dialog?.open;if(!k){g(x,"File picker unavailable in this build.");return}try{const z=await k({multiple:!1,title:B==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!z)return;g(T,!0),g(x,""),await l("set_account_textures",{id:n().id,skin:B==="skin"?String(z):null,cape:B==="cape"?String(z):null}),await e.onrefresh?.()}catch(z){g(x,String(z),!0)}finally{g(T,!1)}}async function I(){if(n())try{g(T,!0),await l("set_account_textures",{id:n().id,skin:null,cape:null}),await e.onrefresh?.()}catch(B){g(x,String(B),!0)}finally{g(T,!1)}}function R(B){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[B.account_type.type]??"Yggdrasil"}var G=aw(),_=C(G);{var M=B=>{var k=ZM(),z=C(k);wi(z,{emoji:"👤",size:30});var j=y(z,6);$("click",j,()=>e.onopenaccounts?.()),N(B,k)},te=B=>{var k=rw(),z=C(k),j=C(z);Tf(j,()=>n()?.id,X=>{{let ye=ft(()=>ds(n()));pc(X,{get skin(){return s(ye)},get cape(){return n().cape},get model(){return n().model},width:220,height:300})}});var be=y(j,2),le=C(be),ce=K(le,!0),he=y(le,2),Q=K(he,!0),H=y(be,2),ae=C(H),Te=y(ae,2),Ee=y(Te,2);{var Ue=X=>{var ye=JM();ge(()=>ye.disabled=s(T)),$("click",ye,I),N(X,ye)};Re(Ee,X=>{(n().cape||n().skin)&&X(Ue)})}var ke=y(H,2);{var Ve=X=>{var ye=QM(),V=K(ye,!0);ge(()=>Z(V,s(x))),N(X,ye)};Re(ke,X=>{s(x)&&X(Ve)})}var Ge=y(z,2),rt=C(Ge),bt=y(C(rt),2),$e=C(bt);At($e,21,t,X=>X.id,(X,ye)=>{var V=$M(),ue=K(V,!0),fe={};ge(()=>{Z(ue,s(ye).name),fe!==(fe=s(ye).id)&&(V.value=(V.__value=fe)??"")}),N(X,V)},X=>{var ye=ew();ye.value=ye.__value="",N(X,ye)}),_a($e);var ie=y($e,2),gt=C(ie);Vt(gt,{name:"log",size:12});var He=y(bt,2),Se=K(He,!0),Ie=y(He,2),Oe=K(Ie,!0),Be=y(rt,2),je=y(C(Be),2);At(je,19,()=>s(c),X=>X.address,(X,ye,V)=>{var ue=tw(),fe=C(ue),pe=C(fe),Y=K(pe,!0),L=y(pe,2),F=K(L,!0),de=y(fe,2),O=y(de,2);ge(()=>{Z(Y,s(ye).name),Z(F,s(ye).address),de.disabled=!s(m)||r(),Fe(de,"title",`Join ${s(ye).address} with ${s(p)}`)}),$("click",de,()=>w(s(ye))),$("click",O,()=>S(s(V))),N(X,ue)},X=>{var ye=nw();N(X,ye)});var Je=y(je,2),vt=C(Je),ot=y(vt,2),D=y(Je,2);{var E=X=>{var ye=iw(),V=K(ye,!0);ge(()=>Z(V,s(h))),N(X,ye)};Re(D,X=>{s(h)&&X(E)})}ge(X=>{Z(ce,n().username),Z(Q,X),ae.disabled=s(T),Te.disabled=s(T),He.disabled=!s(m)||r(),Z(Se,r()?"GAME RUNNING…":"LAUNCH GAME"),Z(Oe,r()?a():s(p))},[()=>R(n())]),$("click",ae,()=>A("skin")),$("click",Te,()=>A("cape")),xa($e,()=>s(m),X=>g(m,X)),$("click",ie,()=>e.onopenconsole?.()),$("click",He,()=>e.onlaunch?.(s(m),null)),Fn("submit",Je,b),Wt(vt,()=>s(u),X=>g(u,X)),Wt(ot,()=>s(d),X=>g(d,X)),N(B,k)};Re(_,B=>{n()?B(te,-1):B(M)})}N(i,G),Kt()}on(["click"]);var ow=W('<h3 class="text-(--step-heading) font-semibold text-(--fg-1)"> </h3>'),lw=W('<input class="mt-3 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"/>'),cw=W('<button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1)"> </button>'),uw=W('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="alertdialog" aria-modal="true" class="w-[380px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><!> <p> </p> <!></div></div> <div class="flex items-center justify-end gap-2 border-t border-(--border-1) px-4 py-3"><!> <button class="rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"> </button></div></div></div>');function dw(i,e){Yt(e,!0);const t={info:{icon:"about",tint:"text-(--accent)"},success:{icon:"success",tint:"text-green-500"},warning:{icon:"warning",tint:"text-(--accent-star)"},error:{icon:"error",tint:"text-rose-400"},confirm:{icon:"help",tint:"text-(--accent)"},prompt:{icon:"edit",tint:"text-(--accent)"}},n=ft(()=>ri.dialog),r=ft(()=>t[s(n)?.variant]??t.info);let a=ee("");en(()=>{s(n),g(a,s(n)?.value??"",!0)});function l(){s(n)?.variant==="prompt"?bs(s(a)):bs(!0)}function o(){s(n)?.variant==="prompt"?bs(null):bs(!1)}function c(f){f.key==="Enter"&&(f.preventDefault(),l())}var u=rs(),d=yt(u);{var h=f=>{var v=uw(),b=C(v),S=C(b),m=C(S),p=C(m);{let z=ft(()=>s(n).icon||s(r).icon);Vt(p,{get name(){return s(z)},size:17})}var w=y(m,2),x=C(w);{var T=z=>{var j=ow(),be=K(j,!0);ge(()=>Z(be,s(n).title)),N(z,j)};Re(x,z=>{s(n).title&&z(T)})}var A=y(x,2),I=K(A,!0),R=y(A,2);{var G=z=>{var j=lw();wp(j),ge(()=>Fe(j,"placeholder",s(n).placeholder??"")),Wt(j,()=>s(a),be=>g(a,be)),N(z,j)};Re(R,z=>{s(n).variant==="prompt"&&z(G)})}var _=y(S,2),M=C(_);{var te=z=>{var j=cw(),be=K(j,!0);ge(()=>Z(be,s(n).cancelLabel??"Cancel")),$("click",j,o),N(z,j)};Re(M,z=>{s(n).variant!=="alert"&&z(te)})}var B=y(M,2),k=K(B,!0);ge(()=>{Fe(b,"aria-label",s(n).title||"Alert"),mt(A,1,`mt-1 text-(--step-body) break-words text-(--fg-2) ${s(n).title?"":"font-medium text-(--fg-1)"}`),Z(I,s(n).message),Z(k,s(n).confirmLabel??"OK")}),$("click",v,z=>{z.target===z.currentTarget&&o()}),$("keydown",b,c),$("click",B,l),N(f,v)};Re(d,f=>{s(n)&&f(h)})}N(i,u),Kt()}on(["click","keydown"]);var fw=W('<div class="grid gap-2"><button class="flex items-center gap-2.5 rounded border border-(--accent) bg-(--brand-tint) px-3 py-2 text-left text-[12px] font-medium text-(--accent) hover:bg-(--accent-hover) disabled:opacity-40"><span class="w-4 shrink-0 text-center" aria-hidden="true"> </span> <span class="min-w-0">Install core mods from Modrinth — no key needed <span class="block font-normal text-(--text-muted)">Fugue, MixinBooter, ConfigAnytime for 1.12.2 (forge)</span></span></button> <button class="flex items-center gap-2.5 rounded border border-(--border) px-3 py-2 text-left text-[12px] text-(--text-main) hover:border-(--accent) disabled:opacity-40"><span class="w-4 shrink-0 text-center" aria-hidden="true"> </span> <span class="min-w-0">Import Downloaded .zip… <span class="block font-normal text-(--text-muted)">CurseForge pack zip (manifest.json + overrides/)</span></span></button> <button class="flex items-center gap-2.5 rounded border border-(--border) px-3 py-2 text-left text-[12px] text-(--text-main) hover:border-(--accent) disabled:opacity-40"><span class="w-4 shrink-0 text-center" aria-hidden="true">↗</span> <span class="min-w-0">Open BareBones Template on CurseForge <span class="block font-normal text-(--text-muted)">Download the zip there, then import it above</span></span></button></div> <p class="mt-3 text-[11px] text-(--text-muted)">Scalar Legacy is CurseForge-only: the 1-click install covers the other three and the gate passes without it.</p>',1),hw=W('<p class="mt-1 text-[11px] text-(--text-muted)"> </p>'),pw=W('<div class="rounded border border-(--border) bg-(--bg-3) p-3"><p class="text-[12px] text-green-500"> </p> <!></div> <div class="mt-4 flex justify-end gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Close</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Launch 1.12.2</button></div>',1),mw=W('<p class="mt-3 text-[11px] text-rose-400"> </p>'),vw=W('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="dialog" aria-modal="true" aria-label="BareBones Template required" class="w-[440px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">BareBones Template required</h3> <p class="mt-1 text-[12px] text-(--fg-2)"></p></div></div> <div class="px-4 pb-4"><!> <!></div></div></div>');function gw(i,e){Yt(e,!0);const t="https://www.curseforge.com/minecraft/modpacks/barebones-template-cleanroom/files";let n=ee(""),r=ee(""),a=ee(null);function l(){window.__TAURI__?.core.invoke("open_external_url",{url:t}).catch(R=>g(r,String(R),!0))}async function o(){g(r,""),g(n,"install");try{const R=await window.__TAURI__.core.invoke("install_cleanroom_core_mods",{instanceId:e.instanceId});g(a,{title:`Installed ${R.length} core mod${R.length===1?"":"s"}: Fugue, MixinBooter, ConfigAnytime.`,note:"Scalar Legacy is CurseForge-only and was skipped — the gate is satisfied without it. Import the full BareBones zip if you want it too."},!0)}catch(R){g(r,String(R),!0)}finally{g(n,"")}}async function c(){const R=window.__TAURI__?.dialog?.open;if(!R){g(r,"File picker unavailable in this build.");return}g(r,"");try{const G=await R({multiple:!1,title:"Import a CurseForge modpack zip",filters:[{name:"CurseForge modpack",extensions:["zip"]}]});if(!G)return;g(n,"import");const _=await window.__TAURI__.core.invoke("import_curseforge_pack",{zipPath:String(G),instanceId:e.instanceId});g(a,{title:`Imported ${_.name} ${_.version}: ${_.overrides_extracted} override file${_.overrides_extracted===1?"":"s"}.`,note:_.mods_skipped>0?`${_.mods_skipped} listed mod file${_.mods_skipped===1?" was":"s were"} not downloaded — add a CurseForge API key in Settings → API Keys to fetch them automatically.`:""},!0)}catch(G){g(r,String(G),!0)}finally{g(n,"")}}function u(){e.onlaunch?.(e.instanceId)}var d=vw(),h=C(d),f=C(h),v=C(f),b=C(v);Vt(b,{name:"mods",size:17});var S=y(v,2),m=y(C(S),2);m.textContent="CleanroomMC requires the BareBones Template (Cleanroom) mods (Fugue, MixinBooter, ConfigAnytime, Scalar Legacy) to boot 1.12.2 safely.";var p=y(f,2),w=C(p);{var x=R=>{var G=fw(),_=yt(G),M=C(_),te=C(M),B=K(te,!0),k=y(M,2),z=C(k),j=K(z,!0),be=y(k,2);ge(()=>{M.disabled=s(n)!=="",Z(B,s(n)==="install"?"…":"⚡"),k.disabled=s(n)!=="",Z(j,s(n)==="import"?"…":"📦"),be.disabled=s(n)!==""}),$("click",M,o),$("click",k,c),$("click",be,l),N(R,G)},T=R=>{var G=pw(),_=yt(G),M=C(_),te=K(M,!0),B=y(M,2);{var k=le=>{var ce=hw(),he=K(ce,!0);ge(()=>Z(he,s(a).note)),N(le,ce)};Re(B,le=>{s(a).note&&le(k)})}var z=y(_,2),j=C(z),be=y(j,2);ge(()=>Z(te,s(a).title)),$("click",j,()=>e.onclose?.()),$("click",be,u),N(R,G)};Re(w,R=>{s(a)?R(T,-1):R(x)})}var A=y(w,2);{var I=R=>{var G=mw(),_=K(G,!0);ge(()=>Z(_,s(r))),N(R,G)};Re(A,R=>{s(r)&&R(I)})}$("click",d,R=>{R.target===R.currentTarget&&!s(n)&&e.onclose?.()}),N(i,d),Kt()}on(["click"]);var _w=W('<span class="block truncate text-(--step-body) font-semibold text-(--fg-1)"> </span>'),xw=W('<button title="Click to dismiss"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <span class="min-w-0 flex-1"><!> <span class="block text-(--step-meta) break-words text-(--fg-2)"> </span></span> <span class="shrink-0 text-(--step-caption) text-(--fg-2)">✕</span></button>'),bw=W('<div class="pointer-events-none fixed right-4 bottom-4 z-[80] flex w-80 flex-col gap-2"></div>');function yw(i,e){Yt(e,!0);const t={info:{icon:"about",tint:"border-(--accent-1)/50"},success:{icon:"success",tint:"border-green-500/60"},warning:{icon:"warning",tint:"border-(--accent-2)/60"},error:{icon:"error",tint:"border-rose-500/60"}};let n=ee(!1);const r=new Map,a=new Set;function l(){if(!s(n))for(const d of ri.toasts)a.has(d.id)||(a.add(d.id),r.set(d.id,setTimeout(()=>{a.delete(d.id),r.delete(d.id),Xc(d.id)},d.duration)))}function o(){g(n,!0);for(const d of r.values())clearTimeout(d);r.clear(),a.clear()}function c(){g(n,!1),l()}en(()=>{ri.toasts.length,l()});var u=bw();At(u,21,()=>ri.toasts,d=>d.id,(d,h)=>{var f=xw(),v=C(f),b=C(v);Vt(b,{get name(){return(t[s(h).kind]??t.info).icon},size:14});var S=y(v,2),m=C(S);{var p=T=>{var A=_w(),I=K(A,!0);ge(()=>Z(I,s(h).title)),N(T,A)};Re(m,T=>{s(h).title&&T(p)})}var w=y(m,2),x=K(w,!0);ge(()=>{mt(f,1,`pointer-events-auto flex w-full items-start gap-2.5 rounded-lg border ${(t[s(h).kind]??t.info).tint??""} bg-(--bg-2) p-3 text-left shadow-xl animate-[fade-in_120ms_ease-out] hover:bg-(--bg-3)`),Z(x,s(h).message)}),$("click",f,()=>Xc(s(h).id)),N(d,f)}),Fn("mouseenter",u,o),Fn("mouseleave",u,c),N(i,u),Kt()}on(["click"]);var Sw=W('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),Mw=W('<span class="truncate text-[13px]"> </span>'),ww=W('<button><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button>'),Ew=W('<span class="truncate text-[13px]">Add Instance</span>'),Tw=W('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),Aw=W('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),Rw=W('<button role="tab"> </button>'),Cw=W('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),Pw=W('<div class="mb-4 flex items-center gap-2"><button class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"><!> Add Instance</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance"><!> Install .mrpack</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="flex rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),Lw=W('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),Iw=W('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),Dw=W('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),Uw=W("<div> </div>"),kw=W('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),Nw=W('<p class="mt-2 text-[12px] text-red-400"> </p>'),Ow=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),Fw=W('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),Bw=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),zw=W('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button></div> <button><!> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)" aria-live="polite"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <!> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Gw(i,e){Yt(e,!0);let t=ee("…"),n=ee("instances"),r=ee(Ut(ac(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));en(()=>{iv(s(r)),localStorage.setItem("twilight-theme",s(r)),ov(s(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:ja(s(r))?"dark":"light"}).catch(()=>{})}),Km();let a=ee("Ready"),l=ee(!1),o=ee(Ut(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));en(()=>{localStorage.setItem("twilight-mode",s(o)),window.__TAURI__?.core.invoke("set_mode_config",{mode:s(o)}).catch(()=>{})});let c=ee(localStorage.getItem("twilight-blind-mode")==="true"),u=ee(localStorage.getItem("twilight-deaf-mode")==="true");en(()=>{localStorage.setItem("twilight-blind-mode",String(s(c))),localStorage.setItem("twilight-deaf-mode",String(s(u))),window.__TAURI__?.core.invoke("set_accessibility_config",{blindMode:s(c),deafMode:s(u)}).catch(()=>{})});const d=[{id:"instances",label:"Instances",icon:"instances"},{id:"worlds",label:"Servers & P2P",icon:"worlds"},{id:"downloads",label:"Downloads",icon:"download"},{id:"settings",label:"Settings",icon:"settings"},{id:"accounts",label:"Accounts",icon:"accounts"}],h={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]},f=ft(()=>ei.active);let v=ee(!1),b=ee(Ut([])),S=ee(!1),m=ee(""),p=ee(!1),w=ee(!1),x=ee(""),T=ee(!1),A=ee(""),I=ee(null),R=ft(()=>s(I)?"edit":s(n)),G=ee(null),_=ee(null),M=ee(null),te=ee(!1),B=ee(""),k=ee(null),z=ee(""),j=ee(Ut([])),be=ee(0),le=ee(0),ce=ee("");async function he(J,Pe){return window.__TAURI__.core.invoke(J,Pe)}function Q(){g(r,ja(s(r))?"twilight-light":"twilight-dark",!0)}async function H(){g(S,!0),g(m,"");try{g(b,await he("discover_java_installations"),!0)}catch(J){g(m,String(J),!0)}finally{g(S,!1)}}function ae(){g(p,!0)}async function Te(){if(s(x).trim()){g(T,!0),g(A,"");try{const J=await he("install_modpack",{pathOrUrl:s(x).trim()});g(w,!1),g(x,""),await ot(),J&&g(Oe,J,!0),g(a,"Modpack installed.")}catch(J){g(A,String(J),!0)}finally{g(T,!1)}}}let Ee=ee(Ut([])),Ue=ee(!1),ke=ee(!1),Ve=ee(null);en(()=>{s(Ee).length,s(Ve)&&(s(Ve).scrollTop=s(Ve).scrollHeight)});function Ge(J){s(Ee).push(J),s(Ee).length>5e3&&s(Ee).splice(0,s(Ee).length-5e3)}function rt(){g(Ee,[],!0)}function bt(J){return J.stream==="stderr"||J.line.includes("/ERROR]")?"text-rose-400":J.line.includes("/WARN]")?"text-(--accent-star)":J.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function $e(){const J=s(Ee).map(Pe=>Pe.line).join(`
`);try{await navigator.clipboard.writeText(J),xi("Logs copied to clipboard.","success")}catch{const Pe=document.createElement("textarea");Pe.value=J,document.body.append(Pe),Pe.select(),document.execCommand("copy"),Pe.remove()}}async function ie(){if(s(ke))try{await he("kill_instance"),Ge({stream:"stdout",line:"kill requested"})}catch(J){Ge({stream:"stderr",line:String(J)})}}let gt=ee(Ut([])),He=ee(""),Se=ee(null),Ie=ee(""),Oe=ee(null),Be=ee(null),je=ee(""),Je=ee(!1);function vt(){const J=s(Ie).trim().toLowerCase();return J?s(gt).filter(Pe=>Pe.name.toLowerCase().includes(J)||Pe.minecraft_version.toLowerCase().includes(J)||Pe.id.toLowerCase().includes(J)):s(gt)}async function ot(){try{g(gt,await he("scan_instances"),!0),g(He,"")}catch(J){g(He,String(J),!0)}}function D(J){g(Oe,J,!0)}async function E(J,Pe=null){if(s(ke))return;const et=s(gt).find(Ct=>Ct.id===J),It=et?et.name:J;g(ke,!0),g(a,Pe?`Running ${It} → ${Pe}…`:`Running ${It}…`,!0),g(Ue,!0);try{const Ct=await he("launch_instance",{instanceId:J,server:Pe});Ge({stream:"stdout",line:`launcher reports exit code ${Ct}`}),await ot(),g(a,"Ready")}catch(Ct){console.error("Launch failed:",Ct),Ge({stream:"stderr",line:`[ERROR] Launch failed: ${Ct}`}),String(Ct).includes("BareBones Template")?g(_,J,!0):xi(`Launch failed: ${Ct}`,"error"),g(a,"Launch failed")}finally{g(ke,!1),s(a)!=="Launch failed"&&g(a,"Ready")}}function X(){s(M)&&he("open_path",{path:s(M).instances_dir}).catch(J=>g(a,String(J),!0))}function ye(J){s(M)&&he("open_path",{path:[s(M).instances_dir.replace(/\\/g,"/"),J].join("/")}).catch(Pe=>g(a,String(Pe),!0))}function V(J){g(je,""),g(Be,J,!0)}async function ue(J){if(!(!s(Be)||s(Je))){g(Je,!0),g(je,"");try{await he("delete_instance",{instanceId:s(Be),toTrash:J}),s(Oe)===s(Be)&&g(Oe,null),g(Be,null),await ot(),g(a,J?"Instance moved to trash.":"Instance deleted.",!0)}catch(Pe){g(je,String(Pe),!0)}finally{g(Je,!1)}}}const fe=ft(()=>[...new Set(s(gt).map(J=>J.group).filter(Boolean))].sort((J,Pe)=>J.localeCompare(Pe)));async function pe(J){if(!s(_e))return;const Pe=s(_e).name;try{await he("set_instance_group",{instanceId:s(_e).id,group:J}),await ot(),g(a,J?`Moved ${Pe} to ${J}.`:`${Pe} is ungrouped.`,!0)}catch(et){g(a,String(et),!0)}}async function Y(){if(!s(_e))return;const J=s(_e).name;try{const Pe=await he("duplicate_instance",{instanceId:s(_e).id});await ot(),g(Oe,Pe.id,!0),xi(`Copied ${J}.`,"success"),g(a,`Copied ${J}.`)}catch(Pe){g(a,String(Pe),!0),xi(`Copy failed: ${Pe}`,"error")}}async function L(J){const Pe=typeof J=="string"?s(_e):J;if(!Pe)return;let et=typeof J=="string"?J:null;if(et==null&&(et=await pv({title:"Rename instance",message:`Choose a new display name for ${Pe.name}.`,value:Pe.name,placeholder:"Instance name",confirmLabel:"Rename"}),et==null||!et.trim()||et.trim()===Pe.name))return;const It=Pe.name;try{const Ct=await he("rename_instance",{instanceId:Pe.id,newName:et});await ot(),g(Oe,Ct.id,!0),g(a,`Renamed ${It} to ${Ct.name}.`),xi(`Renamed to ${Ct.name}.`,"success")}catch(Ct){g(a,String(Ct),!0),xi(`Rename failed: ${Ct}`,"error")}}async function F(){if(!s(_e))return;const J=window.__TAURI__?.dialog?.save;if(!J){g(a,"File picker unavailable in this build.");return}try{const Pe=await J({title:"Export instance",defaultPath:`${s(_e).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Pe)return;const et=await he("export_instance_zip",{instanceId:s(_e).id,destPath:Pe});g(a,`Exported to ${et}.`)}catch(Pe){g(a,String(Pe),!0)}}async function de(){if(s(_e))try{const J=await he("create_desktop_shortcut",{instanceId:s(_e).id});xi(`Shortcut created: ${J}`,"success"),g(a,`Shortcut created: ${J}`)}catch(J){g(a,String(J),!0),xi(`Shortcut failed: ${J}`,"error")}}async function O(J,Pe){g(p,!1),await ot(),J?.id&&g(Oe,J.id,!0),g(a,Pe||`Instance ${J?.name??""} created.`,!0)}function q(J){g(I,J,!0)}const _e=ft(()=>s(gt).find(J=>J.id===s(Oe))??null);let Le=ee(null),U=0;en(()=>{const J=s(_e);s(I);const Pe=++U;g(Le,null),J&&he("list_instance_mods",{instanceId:J.id}).then(et=>{Pe===U&&g(Le,et.length,!0)}).catch(()=>{Pe===U&&g(Le,null)})});async function we(){try{g(k,await he("get_java_prefs"),!0),g(z,s(k).java_path??"",!0),g(j,s(k).custom_java_paths??[],!0),g(be,s(k).min_memory_mb,!0),g(le,s(k).max_memory_mb,!0),g(ce,""),s(b).length===0&&await H()}catch{}}async function ne(){g(ce,"");try{await he("set_java_prefs",{javaPath:s(z).trim()||null,minMemoryMb:Number(s(be))||0,maxMemoryMb:Number(s(le))||0}),g(ce,"Java settings saved.")}catch(J){g(ce,String(J),!0)}}async function Me(J){return g(j,await he("add_custom_java",{path:J}),!0),s(j)}async function Ae(J){await he("apply_java_runtime",{path:J||null}),g(z,J||"",!0),g(ce,"")}async function Qe(){g(te,!0);try{g(M,await he("get_storage"),!0)}catch(J){g(B,String(J),!0)}finally{g(te,!1)}}async function Ke(J,Pe){g(te,!0),g(B,"");try{await he("set_folder_dir",{kind:J,path:Pe?.trim()||null}),g(M,await he("get_storage"),!0),g(B,"Folders updated."),(J==="instances"||J==="shared")&&(await ot(),s(Oe)&&!s(gt).some(et=>et.id===s(Oe))&&g(Oe,null))}catch(et){g(B,String(et),!0)}finally{g(te,!1)}}function Xe(J){he("open_path",{path:J}).catch(Pe=>g(a,String(Pe),!0))}async function st(){g(te,!0),g(B,"");try{await he("clean_staging"),g(B,"Staging cleaned.")}catch(J){g(B,String(J),!0)}finally{g(te,!1)}}function ut(J){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[J.account_type.type]??"Yggdrasil"}Pi(()=>{const J=[],Pe=et=>{if(et.key==="Escape"){const cn=Fc();if(cn){cn();return}s(Se)?g(Se,null):s(Be)?(g(Be,null),g(je,"")):s(I)?g(I,null):s(Oe)?g(Oe,null):s(v)?g(v,!1):s(w)?g(w,!1):s(Ue)&&g(Ue,!1);return}if(s(Se)||s(Be)||s(v)||s(w)||s(I)||s(Ue)||Fc()||et.target?.closest?.("input, textarea, select, [contenteditable]"))return;const Ct=vt();if(!Ct.length)return;const Zt=Ct.findIndex(cn=>cn.id===s(Oe));let ln=null;if(et.key==="ArrowDown"||et.key==="ArrowRight")ln=Zt+1;else if(et.key==="ArrowUp"||et.key==="ArrowLeft")ln=Zt<0?0:Zt-1;else if(et.key==="Enter"&&Zt>=0&&document.activeElement===document.body){et.preventDefault(),E(Ct[Zt].id);return}ln!=null&&Ct[ln]&&(et.preventDefault(),g(Oe,Ct[ln].id,!0))};return window.addEventListener("keydown",Pe),(async()=>{try{g(t,await he("get_version"),!0)}catch{g(t,"dev")}try{J.push(await window.__TAURI__.event.listen("launch-log",et=>Ge(et.payload))),J.push(await window.__TAURI__.event.listen("tauri://drag-drop",et=>{const It=et.payload?.paths?.[0];It&&It.endsWith(".mrpack")&&(s(w)?g(x,It,!0):g(G,It,!0))}))}catch{}await qs(),await ot(),await Qe();try{const et=await he("get_startup_launch");et&&s(gt).some(It=>It.id===et)&&E(et)}catch{}})(),()=>J.forEach(et=>et())});var Rt=zw(),St=C(Rt),ht=C(St),Et=y(C(ht),2);{var Bt=J=>{var Pe=Sw();N(J,Pe)};Re(Et,J=>{s(l)&&J(Bt)})}var zt=y(ht,2),Lt=C(zt);At(Lt,17,()=>d,J=>J.id,(J,Pe)=>{var et=ww(),It=C(et),Ct=C(It);Vt(Ct,{get name(){return s(Pe).icon},size:15});var Zt=y(It,2);{var ln=cn=>{var qn=Mw(),zn=K(qn,!0);ge(()=>Z(zn,s(Pe).label)),N(cn,qn)};Re(Zt,cn=>{s(l)&&cn(ln)})}ge(()=>{mt(et,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${s(l)?"":"justify-center"} ${s(n)===s(Pe).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Fe(et,"title",s(Pe).label)}),$("click",et,()=>{g(n,s(Pe).id,!0),g(I,null),g(o,"launcher"),s(Pe).id==="settings"&&(we(),s(M)||Qe())}),N(J,et)});var Gt=y(Lt,2),tn=C(Gt),lt=C(tn);Vt(lt,{name:"new",size:15});var Ze=y(tn,2);{var xt=J=>{var Pe=Ew();N(J,Pe)};Re(Ze,J=>{s(l)&&J(xt)})}var P=y(zt,2),se=C(P);{let J=ft(()=>ds(s(f))),Pe=ft(()=>s(f)?s(f).username[0]?.toUpperCase():"?");mc(se,{get source(){return s(J)},size:28,get letter(){return s(Pe)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var ve=y(se,2);{var re=J=>{var Pe=Tw(),et=C(Pe),It=K(et,!0),Ct=y(et,2),Zt=K(Ct,!0);ge(ln=>{Z(It,s(f)?s(f).username:"Accounts"),Z(Zt,ln)},[()=>s(f)?ut(s(f)):"manage & sign in"]),N(J,Pe)};Re(ve,J=>{s(l)&&J(re)})}var me=y(P,2),Ne=K(me,!0),De=y(St,2),ze=C(De),We=C(ze),ct=C(We);{var at=J=>{var Pe=Aw(),et=yt(Pe),It=y(et,2),Ct=K(It,!0);ge(()=>{Fe(It,"title",s(I)?.name),Z(Ct,s(I)?.name)}),$("click",et,()=>g(I,null)),N(J,Pe)},_t=J=>{var Pe=Cw(),et=yt(Pe),It=K(et),Ct=y(et,4);At(Ct,20,()=>[["launcher","Launcher"],["client","Client"]],wl,(Zt,ln)=>{var cn=ft(()=>Od(ln,2));let qn=()=>s(cn)[0],zn=()=>s(cn)[1];var kn=Rw(),Ii=K(kn,!0);ge(()=>{mt(kn,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${s(o)===qn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Fe(kn,"aria-selected",s(o)===qn()),Z(Ii,zn())}),$("click",kn,()=>g(o,qn(),!0)),N(Zt,kn)}),ge(()=>Z(It,`TwilightMC Bolide (alpha-v${s(t)??""})`)),N(J,Pe)};Re(ct,J=>{s(R)==="edit"?J(at):J(_t,-1)})}var xe=y(We,2),Ce=K(xe,!0),qe=y(ze,2),pt=C(qe);{var nt=J=>{KM(J,{onback:()=>g(n,"instances")})},it=J=>{sw(J,{get instances(){return s(gt)},get active(){return s(f)},get gameRunning(){return s(ke)},get status(){return s(a)},onlaunch:E,onopenconsole:()=>g(Ue,!0),get onrefresh(){return qs},onopenaccounts:()=>{g(n,"accounts"),g(o,"launcher")}})},Ot=J=>{ng(J,{get instance(){return s(I)},get storage(){return s(M)},get blindMode(){return s(c)},get deafMode(){return s(u)},onback:()=>g(I,null),onopenconsole:()=>g(Ue,!0)})},wt=J=>{S_(J,{get version(){return s(t)},get storage(){return s(M)},get runtimes(){return s(b)},get scanning(){return s(S)},get javaError(){return s(m)},get storageBusy(){return s(te)},get storageMsg(){return s(B)},get javaMsg(){return s(ce)},get gameRunning(){return s(ke)},onback:()=>g(n,"instances"),onscanjava:H,onsaveprefs:ne,onaddjava:Me,onapplyjava:Ae,onsavefolder:Ke,onopenfolder:Xe,oncleanstaging:st,onopenaccounts:()=>{g(n,"accounts"),g(o,"launcher")},onopenurl:Pe=>he("open_external_url",{url:Pe}).catch(et=>g(a,String(et),!0)),get theme(){return s(r)},set theme(Pe){g(r,Pe,!0)},get blindMode(){return s(c)},set blindMode(Pe){g(c,Pe,!0)},get deafMode(){return s(u)},set deafMode(Pe){g(u,Pe,!0)},get javaPath(){return s(z)},set javaPath(Pe){g(z,Pe,!0)},get javaCustomPaths(){return s(j)},set javaCustomPaths(Pe){g(j,Pe,!0)},get minMem(){return s(be)},set minMem(Pe){g(be,Pe,!0)},get maxMem(){return s(le)},set maxMem(Pe){g(le,Pe,!0)}})},nn=J=>{var Pe=Pw(),et=yt(Pe),It=C(et),Ct=C(It);Vt(Ct,{name:"new",size:13});var Zt=y(It,2),ln=C(Zt);Vt(ln,{name:"folder",size:14});var cn=y(Zt,2),qn=C(cn);Vt(qn,{name:"package",size:14});var zn=y(cn,2),kn=C(zn);Vt(kn,{name:"settings",size:14});var Ii=y(zn,2),gi=y(Ii,4),_i=C(gi);{var un=Yn=>{Vt(Yn,{name:"sun",size:15})},Di=ft(()=>ja(s(r))),To=Yn=>{Vt(Yn,{name:"moon",size:15})};Re(_i,Yn=>{s(Di)?Yn(un):Yn(To,-1)})}var Oh=y(et,2);{let Yn=ft(vt);km(Oh,{get instances(){return s(Yn)},get error(){return s(He)},get query(){return s(Ie)},get selectedId(){return s(Oe)},get gameRunning(){return s(ke)},get menuFor(){return s(Se)},onselect:D,onplay:E,ontogglemenu:Ec=>g(Se,s(Se)===Ec?null:Ec,!0),onedit:q,onrename:L,onopenfolder:ye,onviewlogs:()=>g(Ue,!0),ondelete:V,onclosemenu:()=>g(Se,null),onadd:ae})}ge(Yn=>{Zt.disabled=!s(M),Fe(Zt,"title",s(M)?s(M).instances_dir:""),Fe(gi,"title",Yn)},[()=>ja(s(r))?"Twilight Light":"Twilight Dark"]),$("click",It,ae),$("click",Zt,X),$("click",cn,()=>g(w,!0)),$("click",zn,()=>{g(n,"settings"),we(),s(M)||Qe()}),Wt(Ii,()=>s(Ie),Yn=>g(Ie,Yn)),$("click",gi,Q),N(J,Pe)},Xn=J=>{var Pe=Lw(),et=yt(Pe),It=K(et,!0),Ct=y(et,2),Zt=K(Ct,!0);ge(()=>{Z(It,h[s(n)][0]),Z(Zt,h[s(n)][1])}),N(J,Pe)};Re(pt,J=>{s(R)==="accounts"?J(nt):s(o)==="client"?J(it,1):s(R)==="edit"&&s(I)?J(Ot,2):s(n)==="settings"?J(wt,3):s(n)==="instances"?J(nn,4):J(Xn,-1)})}var fn=y(qe,2),Rn=C(fn),Ft=C(Rn),Sn=C(Ft),Un=y(Sn,2);Vt(Un,{name:"log",size:13});var Xt=y(Un,4);{var Li=J=>{var Pe=Iw();N(J,Pe)};Re(Xt,J=>{s(ke)&&J(Li)})}var Mo=y(Ft,2),Ur=C(Mo),wo=y(Ur,2),Eo=y(wo,2),Ah=y(Eo,2);{var Rh=J=>{var Pe=Dw();$("click",Pe,()=>g(Ue,!1)),N(J,Pe)};Re(Ah,J=>{s(Ue)&&J(Rh)})}var vc=y(Rn,2);At(vc,21,()=>s(Ee),wl,(J,Pe)=>{var et=Uw(),It=K(et,!0);ge(Ct=>{mt(et,1,`whitespace-pre-wrap break-all ${Ct??""}`),Z(It,s(Pe).line)},[()=>bt(s(Pe))]),N(J,et)},J=>{var Pe=kw();N(J,Pe)}),Rf(vc,J=>g(Ve,J),()=>s(Ve));var gc=y(De,2);{var Ch=J=>{Wg(J,{get instance(){return s(_e)},get storage(){return s(M)},get gameRunning(){return s(ke)},get modsCount(){return s(Le)},get groups(){return s(fe)},onlaunch:()=>E(s(_e).id),onkill:ie,onedit:()=>q(s(_e)),onchangegroup:pe,onopenfolder:()=>ye(s(_e).id),onexport:F,oncopy:Y,ondelete:()=>V(s(_e).id),onshortcut:de,onrename:L,onclose:()=>g(Oe,null)})};Re(gc,J=>{s(R)==="instances"&&s(_e)&&J(Ch)})}var _c=y(gc,2);{var Ph=J=>{cg(J,{get path(){return s(G)},onclose:()=>g(G,null),oninstalled:async Pe=>{g(G,null),await ot(),g(Oe,Pe,!0),g(a,"Modpack installed.")}})};Re(_c,J=>{s(G)&&J(Ph)})}var xc=y(_c,2);{var Lh=J=>{FM(J,{get accounts(){return ei.list},get active(){return s(f)},onclose:()=>{g(v,!1),qs()},get onrefresh(){return qs}})};Re(xc,J=>{s(v)&&J(Lh)})}var bc=y(xc,2);{var Ih=J=>{Ng(J,{get groups(){return s(fe)},get blindMode(){return s(c)},get deafMode(){return s(u)},onclose:()=>g(p,!1),oncreated:O})};Re(bc,J=>{s(p)&&J(Ih)})}var yc=y(bc,2);{var Dh=J=>{var Pe=Ow(),et=C(Pe),It=C(et),Ct=y(C(It),2),Zt=y(It,2),ln=C(Zt),cn=y(ln,2),qn=y(cn,2);{var zn=un=>{var Di=Nw(),To=K(Di,!0);ge(()=>Z(To,s(A))),N(un,Di)};Re(qn,un=>{s(A)&&un(zn)})}var kn=y(Zt,2),Ii=C(kn),gi=y(Ii,2),_i=K(gi,!0);ge(un=>{gi.disabled=un,Z(_i,s(T)?"Installing…":"Install .mrpack")},[()=>s(T)||!s(x).trim()]),$("click",Pe,un=>{un.target===un.currentTarget&&!s(T)&&g(w,!1)}),$("click",Ct,()=>g(w,!1)),Fn("dragover",ln,un=>un.preventDefault()),Fn("drop",ln,un=>{un.preventDefault();const Di=un.dataTransfer?.files?.[0]?.path;Di&&g(x,Di,!0)}),Wt(cn,()=>s(x),un=>g(x,un)),$("click",Ii,()=>g(w,!1)),$("click",gi,Te),N(J,Pe)};Re(yc,J=>{s(w)&&J(Dh)})}var Sc=y(yc,2);{var Uh=J=>{var Pe=Bw(),et=C(Pe),It=y(C(et),2),Ct=y(C(It)),Zt=K(Ct,!0),ln=y(It,2);{var cn=_i=>{var un=Fw(),Di=K(un,!0);ge(()=>Z(Di,s(je))),N(_i,un)};Re(ln,_i=>{s(je)&&_i(cn)})}var qn=y(ln,2),zn=C(qn),kn=y(zn,2),Ii=C(kn);wi(Ii,{emoji:"♻"});var gi=y(kn,2);ge(()=>{Z(Zt,s(Be)),zn.disabled=s(Je),kn.disabled=s(Je),gi.disabled=s(Je)}),$("click",Pe,_i=>{_i.target===_i.currentTarget&&!s(Je)&&g(Be,null)}),$("click",zn,()=>g(Be,null)),$("click",kn,()=>ue(!0)),$("click",gi,()=>ue(!1)),N(J,Pe)};Re(Sc,J=>{s(Be)&&J(Uh)})}var Mc=y(Sc,2);dw(Mc,{});var wc=y(Mc,2);{var kh=J=>{gw(J,{get instanceId(){return s(_)},onclose:()=>g(_,null),onlaunch:Pe=>{g(_,null),E(Pe)}})};Re(wc,J=>{s(_)&&J(kh)})}var Nh=y(wc,2);yw(Nh,{}),ge(()=>{mt(St,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${s(l)?"w-60":"w-16"}`),mt(Gt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${s(l)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),mt(P,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${s(l)?"":"justify-center"}`),Fe(P,"title",s(f)?s(f).username:"Manage accounts"),mt(me,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${s(l)?"":"opacity-0 group-hover/nav:opacity-100"}`),Z(Ne,s(l)?"«":"»"),Z(Ce,s(a)),mt(fn,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${s(Ue)?"h-48":"h-10"}`),Fe(Ft,"title",s(Ue)?"Collapse console":"Expand console"),mt(Sn,1,`h-2 w-2 shrink-0 rounded-full ${s(ke)?"animate-pulse bg-green-500":"bg-(--border)"}`),Ur.disabled=!s(Ee).length,wo.disabled=!s(Ee).length,Eo.disabled=!s(ke)}),$("dblclick",ht,()=>g(l,!s(l))),$("click",Gt,ae),$("click",P,()=>{g(n,"accounts"),g(I,null),g(o,"launcher")}),$("click",me,()=>g(l,!s(l))),$("click",Ft,()=>g(Ue,!s(Ue))),$("click",Ur,J=>{J.stopPropagation(),rt()}),$("click",wo,J=>{J.stopPropagation(),$e()}),$("click",Eo,J=>{J.stopPropagation(),ie()}),N(i,Rt),Kt()}on(["dblclick","click"]);am(Gw,{target:document.getElementById("app")});
