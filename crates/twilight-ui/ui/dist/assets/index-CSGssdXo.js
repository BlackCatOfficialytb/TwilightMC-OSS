(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Pd=!1;var fo=Array.isArray,Uh=Array.prototype.indexOf,es=Array.prototype.includes,ho=Array.from,Ld=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,Nh=Object.getOwnPropertyDescriptors,Oh=Object.prototype,kh=Array.prototype,Id=Object.getPrototypeOf,Mc=Object.isExtensible;const Fh=()=>{};function Bh(i){for(var e=0;e<i.length;e++)i[e]()}function Dd(){var i,e,t=new Promise((n,r)=>{i=n,e=r});return{promise:t,resolve:i,reject:e}}function Ud(i,e){if(Array.isArray(i))return i;if(!(Symbol.iterator in i))return Array.from(i);const t=[];for(const n of i)if(t.push(n),t.length===e)break;return t}const Tn=2,ha=4,po=8,Nd=1<<24,di=16,gi=32,dr=64,pl=128,Hl=256,pi=512,mn=1024,qt=2048,jn=4096,Dn=8192,bn=16384,wa=32768,ts=1<<25,pa=65536,eo=1<<17,zh=1<<18,Ta=1<<19,Gh=1<<20,Si=1<<25,to=1<<21,oa=1<<22,or=1<<23,Er=Symbol("$state"),Od=Symbol("component"),Hh=Symbol("legacy props"),Vh=Symbol(""),kd=Symbol("attributes"),ml=Symbol("class"),vl=Symbol("style"),gl=Symbol("text"),Ks=Symbol("form reset"),hs=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Wh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),jh=1,Xh=2,Fd=4,qh=8,Yh=16,Kh=1,Zh=4,Jh=8,Qh=16,$h=1,ep=2,Bd={},pn=Symbol("uninitialized"),tp="http://www.w3.org/1999/xhtml";function np(){console.warn("https://svelte.dev/e/derived_inert")}function ip(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function rp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function zd(i){return i===this.v}function ap(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Gd(i){return!ap(i,this.v)}function Hd(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function sp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function op(i,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function lp(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function cp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function up(i){throw new Error("https://svelte.dev/e/effect_orphan")}function dp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fp(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function hp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function pp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function vp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let gp=!1,yn=null;function ma(i){yn=i}function Qt(i,e=!1,t){yn={p:yn,i:!1,c:null,e:null,s:i,x:null,r:kt,l:null}}function $t(i){var e=yn,t=e.e;if(t!==null){e.e=null;for(var n of t)lf(n)}return e.i=!0,yn=e.p,Vl(i)}function Vl(i={}){return Ld(i,Od,{value:!0}),i}function Vd(){return!0}let yr=[];function Wd(){var i=yr;yr=[],Bh(i)}function Mi(i){if(yr.length===0&&!Ka){var e=yr;queueMicrotask(()=>{e===yr&&Wd()})}yr.push(i)}function _p(){for(;yr.length>0;)Wd()}const xp=-7169;function sn(i,e){i.f=i.f&xp|e}function Wl(i){(i.f&pi)!==0||i.deps===null?sn(i,mn):sn(i,jn)}function jd(i,e){(i.f&qt)!==0?e.set(i,qt):(i.f&jn)!==0&&e.get(i)!==qt&&e.set(i,jn),sn(i,mn)}function bp(i,e){{const t=document.body;i.autofocus=!0,Mi(()=>{document.activeElement===t&&i.focus()})}}let Ec=!1;function yp(){Ec||(Ec=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const e of i.target.elements)e[Ks]?.()})},{capture:!0}))}function Aa(i){var e=Dt,t=kt;ri(null),Ai(null);try{return i()}finally{ri(e),Ai(t)}}function Xd(i,e,t,n=t){i.addEventListener(e,()=>Aa(t));const r=i[Ks];r?i[Ks]=()=>{r(),n(!0)}:i[Ks]=()=>n(!0),yp()}function Sp(i,e,t,n){const r=ns;var a=i.filter(v=>!v.settled),l=e.map(r);if(t.length===0&&a.length===0){n(l);return}var s=kt,c=Mp(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(v=>v.promise)):null;function d(v){if((s.f&bn)===0){c();try{n([...l,...v])}catch(y){yi(y,s)}no()}}var h=qd();if(t.length===0){u.then(()=>d([])).finally(h);return}function f(){Promise.all(t.map(v=>Ep(v))).then(d).catch(v=>yi(v,s)).finally(h)}u?u.then(()=>{if((s.f&bn)!==0){h();return}c(),f(),no()}):f()}function Mp(){var i=kt,e=Dt,t=yn,n=St;return function(a=!0){Ai(i),ri(e),ma(t),a&&(i.f&bn)===0&&(n?.activate(),n?.apply())}}function no(i=!0){Ai(null),ri(null),ma(null),i&&St?.deactivate()}function qd(){var i=kt,e=i.b,t=St,n=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(n,i),()=>{e?.update_pending_count(-1,t),t.decrement(n,i)}}function ns(i){var e=Tn|qt;return kt!==null&&(kt.f|=Ta),{ctx:yn,deps:null,effects:null,equals:zd,f:e,fn:i,reactions:null,rv:0,v:pn,wv:0,parent:kt,ac:null}}const Va=Symbol("obsolete");function Ep(i,e,t){let n=kt;n===null&&sp();var r=void 0,a=Lr(pn),l=!Dt,s=new Set;return Bp(()=>{var c=kt,u=Dd();r=u.promise;try{Promise.resolve(i()).then(u.resolve,v=>{v!==hs&&u.reject(v)}).finally(no)}catch(v){u.reject(v),no()}var d=St;if(l){if((c.f&wa)!==0)var h=qd();if(n.b?.is_rendered())d.async_deriveds.get(c)?.reject(Va);else for(const v of s.values())v.reject(Va);s.add(u),d.async_deriveds.set(c,u)}const f=(v,y=void 0)=>{h?.(),s.delete(u),y!==Va&&(d.activate(),y?(a.f|=or,va(a,y)):((a.f&or)!==0&&(a.f^=or),va(a,v)),d.deactivate())};u.promise.then(f,v=>f(null,v||"unknown"))}),Kl(()=>{for(const c of s)c.reject(Va)}),new Promise(c=>{function u(d){function h(){d===r?c(a):u(r)}d.then(h,h)}u(r)})}function st(i){const e=ns(i);return pf(e),e}function Yd(i){const e=ns(i);return e.equals=Gd,e}function wp(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)On(e[t])}}function jl(i){var e,t=kt,n=i.parent;if(!Yi&&n!==null&&i.v!==pn&&(n.f&(bn|Dn))!==0)return np(),i.v;Ai(n);try{wp(i),e=_f(i)}finally{Ai(t)}return e}function Kd(i){var e=jl(i);if(!i.equals(e)&&(i.wv=vf(),(!St?.is_fork||i.deps===null)&&(St!==null?(St.capture(i,e,!0),la?.capture(i,e,!0)):i.v=e,i.deps===null))){sn(i,mn);return}Yi||(fi!==null?(Yl()||St?.is_fork)&&fi.set(i,e):Wl(i))}function Tp(i){if(i.effects!==null)for(const e of i.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&Aa(()=>{e.ac.abort(hs),e.ac=null}),e.fn!==null&&(e.teardown=Fh),rs(e,0),Jl(e))}function Zd(i){if(i.effects!==null)for(const e of i.effects)e.teardown&&e.fn!==null&&ga(e)}let wo=null,Nr=null,St=null,la=null,fi=null,_l=null,Ka=!1,To=!1,Za=null,Zs=null;var wc=0;let Ap=1;class fr{id=Ap++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Nr===null?wo=Nr=this:(Nr.next=this,this.prev=Nr),Nr=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=n=>this.schedule(n)){var n=this.#o.get(e);if(n){this.#o.delete(e);for(var r of n.d)sn(r,qt),t(r);for(r of n.m)sn(r,jn),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&bn)!==0||(a.f&(qt|jn))===0)){for(var t=a,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(dr|gi))!==0){if((r&mn)===0){n=!0;break}t.f^=mn}}n||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,c]of this.#r)sn(s,c),this.schedule(s);this.apply();for(var e=Za=[],t=[],n=Zs=[];this.#i.length>0;){wc++>1e3&&(this.#f(),Cp());for(const s of this.#u())try{this.#x(s,e,t)}catch(c){throw $d(s),this.#p()||this.discard(),c}}if(St=null,n.length>0){var r=fr.ensure();for(const s of n)r.schedule(s)}if(Za=null,Zs=null,this.#p()){this.#v(t),this.#v(e);for(const[s,c]of this.#o)Qd(s,c);n.length>0&&St.#m();return}const a=this.#S();if(a){this.#v(t),this.#v(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),la=this,Tc(t),Tc(e),la=null,this.#n?.resolve();var l=St;this.#e===0&&(this.#i.length===0||l!==null)&&this.#f(),l!==null&&(wi.clear(),l.#m())}#x(e,t,n){e.f^=mn;for(var r=e.first;r!==null;){var a=r.f,l=(a&(gi|dr))!==0,s=l&&(a&mn)!==0,c=s||(a&Dn)!==0||this.#o.has(r);if(!c&&r.fn!==null){l?r.f^=mn:(a&ha)!==0?t.push(r):ms(r)&&((a&di)!==0&&this.add_dirty_reaction(r,jn),ga(r));var u=r.first;if(u!==null){r=u;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#S(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,n]]of this.current)if(!n&&e.current.has(t))return!0;return!1}#d(e){for(const[n,r]of e.current)!this.previous.has(n)&&e.previous.has(n)&&this.previous.set(n,e.previous.get(n)),this.current.set(n,r);for(const[n,r]of e.async_deriveds){const a=this.async_deriveds.get(n);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=n=>{var r=n.reactions;if(r!==null&&!((n.f&Tn)!==0&&(n.f&(qt|jn))===0))for(const s of r){var a=s.f;if((a&Tn)!==0)t(s);else{var l=s;a&(oa|di)&&!this.async_deriveds.has(l)&&(this.#r.delete(l),sn(l,qt),this.schedule(l))}}};for(const n of this.current.keys())t(n);this.oncommit(()=>e.discard()),e.#f(),St=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)jd(e[t],this.#r)}capture(e,t,n=!1){e.v!==pn&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&or)===0&&(this.current.set(e,[t,n]),fi?.set(e,t)),this.is_fork||(e.v=t)}activate(){St=this}deactivate(){St=null,fi=null}flush(){try{To=!0,St=this,this.#m()}finally{wc=0,_l=null,Za=null,Zs=null,To=!1,St=null,fi=null,wi.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Va);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let h=wo;h!==null;h=h.next){var e=h.id<this.id,t=[];for(const[f,[v,y]]of this.current){if(h.current.has(f)){var n=h.current.get(f)[0];if(e&&v!==n)h.current.set(f,[v,y]);else continue}t.push(f)}if(e)for(const[f,v]of this.async_deriveds){const y=h.async_deriveds.get(f);y&&v.promise.then(y.resolve).catch(y.reject)}var r=[...h.current.keys()].filter(f=>!h.current.get(f)[1]);if(!(!h.started||r.length===0)){var a=r.filter(f=>!this.current.has(f));if(a.length===0)e&&h.discard();else if(t.length>0){if(e)for(const f of this.#h)h.unskip_effect(f,v=>{(v.f&(di|oa))!==0?h.schedule(v):h.#v([v])});h.activate();var l=new Set,s=new Map;for(var c of t)Jd(c,a,l,s);s=new Map;var u=[...h.current].filter(([f,v])=>{const y=this.current.get(f);return y?y[0]!==v[0]||y[1]!==v[1]:!0}).map(([f])=>f);if(u.length>0)for(const f of this.#a)(f.f&(bn|Dn|eo))===0&&Xl(f,u,s)&&((f.f&(oa|di))!==0?(sn(f,qt),h.schedule(f)):h.add_dirty_reaction(f,qt));if(h.#i.length>0&&!h.#c){h.apply();for(var d of h.#u())h.#x(d,[],[])}h.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let n=this.#s.get(t)??0;this.#s.set(t,n+1)}}decrement(e,t){if(this.#e-=1,e){let n=this.#s.get(t)??0;n===1?this.#s.delete(t):this.#s.set(t,n-1)}this.#c||(this.#c=!0,Mi(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,n]of e)this.add_dirty_reaction(t,n);e.clear()}add_dirty_reaction(e,t){(t===qt||this.#r.get(e)!==qt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=Dd()).promise}static ensure(){if(St===null){const e=St=new fr;!To&&!Ka&&Mi(()=>{e.started||e.flush()})}return St}apply(){{fi=null;return}}schedule(e){if(_l=e,e.b?.is_pending&&(e.f&(ha|po|Nd))!==0&&(e.f&wa)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?wo=t:e.next=t,t===null?Nr=e:t.prev=e,this.linked=!1}}}function Rp(i){var e=Ka,t=la;la=null,Ka=!0;try{for(var n;;){if(_p(),St===null)return n;St.flush()}}finally{Ka=e,la=t}}function Cp(){try{dp()}catch(i){yi(i,_l)}}let zi=null;function Tc(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(bn|Dn))===0&&ms(n)&&(zi=new Set,ga(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&df(n),zi?.size>0)){wi.clear();for(const r of zi){if((r.f&(bn|Dn))!==0)continue;const a=[r];let l=r.parent;for(;l!==null;)zi.has(l)&&(zi.delete(l),a.push(l)),l=l.parent;for(let s=a.length-1;s>=0;s--){const c=a[s];(c.f&(bn|Dn))===0&&ga(c)}}zi.clear()}}zi=null}}function Jd(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const r of i.reactions){const a=r.f;(a&Tn)!==0?Jd(r,e,t,n):(a&(oa|di))!==0&&(a&qt)===0&&Xl(r,e,n)&&(sn(r,qt),ql(r))}}function Xl(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const r of i.deps){if(es.call(e,r))return!0;if((r.f&Tn)!==0&&Xl(r,e,t))return t.set(r,!0),!0}return t.set(i,!1),!1}function ql(i){St.schedule(i)}function Qd(i,e){if(!((i.f&gi)!==0&&(i.f&mn)!==0)){(i.f&qt)!==0?e.d.push(i):(i.f&jn)!==0&&e.m.push(i),sn(i,mn);for(var t=i.first;t!==null;)Qd(t,e),t=t.next}}function $d(i){sn(i,mn);for(var e=i.first;e!==null;)$d(e),e=e.next}let io=new Set;const wi=new Map;let ef=!1;function Lr(i,e){var t={f:0,v:i,reactions:null,equals:zd,rv:0,wv:0};return t}function ie(i,e){const t=Lr(i);return pf(t),t}function Pp(i,e=!1,t=!0){const n=Lr(i);return e||(n.equals=Gd),n}function g(i,e,t=!1){Dt!==null&&(!hi||(Dt.f&eo)!==0)&&Vd()&&(Dt.f&(Tn|di|oa|eo))!==0&&(Ti===null||!Ti.has(i))&&mp();let n=t?Ut(e):e;return va(i,n,Zs)}var xr=null,xl=0;function va(i,e,t=null){if(!i.equals(e)){Yi?wi.set(i,e):wi.has(i)||wi.set(i,i.v);var n=fr.ensure();if(n.capture(i,e),(i.f&Tn)!==0){const r=i;(i.f&qt)!==0&&jl(r),fi===null&&Wl(r)}i.wv=vf(),xr=null,xl=0,tf(i,qt,t),xr=null,kt!==null&&(kt.f&mn)!==0&&(kt.f&(gi|dr))===0&&(Qn===null?Hp([i]):Qn.push(i)),!n.is_fork&&io.size>0&&!ef&&Lp()}return e}function Lp(){ef=!1;for(const i of io){(i.f&mn)!==0&&sn(i,jn);let e;try{e=ms(i)}catch{e=!0}e&&ga(i)}io.clear()}function Ja(i){g(i,i.v+1)}function tf(i,e,t){var n=i.reactions;if(n!==null){var r=n.length;if(xl+=r,xl>1e5&&xr===null&&(xr=new Set),xr!==null){if(xr.has(i))return;xr.add(i)}for(var a=0;a<r;a++){var l=n[a],s=l.f,c=(s&qt)===0;if(c&&sn(l,e),(s&eo)!==0)io.add(l);else if((s&Tn)!==0){var u=l;fi?.delete(u),tf(u,jn,t)}else if(c){var d=l;(s&di)!==0&&zi!==null&&zi.add(d),t!==null?t.push(d):ql(d)}}}}function Ut(i){if(typeof i!="object"||i===null||Er in i||Od in i)return i;const e=Id(i);if(e!==Oh&&e!==kh)return i;var t=new Map,n=fo(i),r=ie(0),a=Tr,l=s=>{if(Tr===a)return s();var c=Dt,u=Tr;ri(null),Pc(a);var d=s();return ri(c),Pc(u),d};return n&&t.set("length",ie(i.length)),new Proxy(i,{defineProperty(s,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&hp();var d=t.get(c);return d===void 0?l(()=>{var h=ie(u.value);return t.set(c,h),h}):g(d,u.value,!0),!0},deleteProperty(s,c){var u=t.get(c);if(u===void 0){if(c in s){const d=l(()=>ie(pn));t.set(c,d),Ja(r)}}else g(u,pn),Ja(r);return!0},get(s,c,u){if(c===Er)return i;var d=t.get(c),h=c in s;if(d===void 0&&(!h||sa(s,c)?.writable)&&(d=l(()=>{var v=Ut(h?s[c]:pn),y=ie(v);return y}),t.set(c,d)),d!==void 0){var f=o(d);return f===pn?void 0:f}return Reflect.get(s,c,u)},getOwnPropertyDescriptor(s,c){this.has?.(s,c);var u=Reflect.getOwnPropertyDescriptor(s,c),d=t.get(c);if(d!==void 0){var h=o(d);if(h===pn)return;if(u&&"value"in u)u.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(s,c){if(c===Er)return!0;var u=t.get(c),d=u!==void 0&&u.v!==pn||Reflect.has(s,c);if(u!==void 0||(kt!==null||Dt!==null)&&(!d||sa(s,c)?.writable)){u===void 0&&(u=l(()=>{var f=d?Ut(s[c]):pn,v=ie(f);return v}),t.set(c,u));var h=o(u);if(h===pn)return!1}return d},set(s,c,u,d){var h=t.get(c),f=c in s;if(n&&c==="length")for(var v=u;v<h.v;v+=1){var y=t.get(v+"");y!==void 0?g(y,pn):v in s&&(y=l(()=>ie(pn)),t.set(v+"",y))}if(h===void 0)(!f||sa(s,c)?.writable)&&(h=l(()=>ie(void 0)),g(h,Ut(u)),t.set(c,h));else{f=h.v!==pn;var S=l(()=>Ut(u));g(h,S)}var m=Reflect.getOwnPropertyDescriptor(s,c);if(m?.set&&m.set.call(d,u),!f){if(n&&typeof c=="string"){var p=t.get("length"),w=Number(c);Number.isInteger(w)&&w>=p.v&&g(p,w+1)}Ja(r)}return!0},ownKeys(s){o(r);var c=Reflect.ownKeys(s).filter(h=>{var f=t.get(h);return f===void 0||f.v!==pn});for(var[u,d]of t)d.v!==pn&&!(u in s)&&c.push(u);return c},setPrototypeOf(){pp()}})}function Ac(i){try{if(i!==null&&typeof i=="object"&&Er in i)return i[Er]}catch{}return i}function nf(i,e){return Object.is(Ac(i),Ac(e))}var Rc,rf,af,sf;function Ip(){if(Rc===void 0){Rc=window,rf=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;af=sa(e,"firstChild").get,sf=sa(e,"nextSibling").get,Mc(i)&&(i[ml]=void 0,i[kd]=null,i[vl]=void 0,i.__e=void 0),Mc(t)&&(t[gl]=void 0)}}function ji(i=""){return document.createTextNode(i)}function is(i){return af.call(i)}function ps(i){return sf.call(i)}function I(i,e){return is(i)}function Tt(i,e=!1){{var t=is(i);return t instanceof Comment&&t.data===""?ps(t):t}}function K(i,e=!1){return is(i)}function M(i,e=1,t=!1){let n=i;for(;e--;)n=ps(n);return n}function Dp(i){i.textContent=""}function of(){return!1}function Up(i,e,t){return t?document.createElement(i,{is:t}):document.createElement(i)}function Np(i){var e=kt;if(e===null)return Dt.f|=or,i;if((e.f&wa)===0&&(e.f&ha)===0)throw i;yi(i,e)}function yi(i,e){if(i===Bd)throw i;if(!(e!==null&&(e.f&bn)!==0)){for(;e!==null;){if((e.f&pl)!==0&&(e.f&(bn|ts))===0){if((e.f&wa)===0)throw i;try{e.b.error(i);return}catch(t){i=t}}e=e.parent}throw i}}function Op(i){kt===null&&(Dt===null&&up(),cp()),Yi&&lp()}function kp(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function Ji(i,e){var t=kt;t!==null&&(t.f&Dn)!==0&&(i|=Dn);var n={ctx:yn,deps:null,nodes:null,f:i|qt|pi,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};St?.register_created_effect(n);var r=n;if((i&ha)!==0)Za!==null?Za.push(n):fr.ensure().schedule(n);else if(e!==null){try{ga(n)}catch(l){throw On(n),l}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Ta)===0&&(r=r.first,(i&di)!==0&&(i&pa)!==0&&r!==null&&(r.f|=pa))}if(r!==null&&(r.parent=t,t!==null&&kp(r,t),Dt!==null&&(Dt.f&Tn)!==0&&(i&dr)===0)){var a=Dt;(a.effects??=[]).push(r)}return n}function Yl(){return Dt!==null&&!hi}function Kl(i){const e=Ji(po,null);return sn(e,mn),e.teardown=i,e}function tn(i){Op();var e=kt.f,t=!Dt&&(e&gi)!==0&&yn!==null&&!yn.i;if(t){var n=yn;(n.e??=[]).push(i)}else return lf(i)}function lf(i){return Ji(ha|Gh,i)}function Fp(i){fr.ensure();const e=Ji(dr|Ta,i);return(t={})=>new Promise(n=>{t.outro?wr(e,()=>{On(e),n(void 0)}):(On(e),n(void 0))})}function cf(i){return Ji(ha,i)}function Bp(i){return Ji(oa|Ta,i)}function Zl(i,e=0){return Ji(po|e,i)}function me(i,e=[],t=[],n=[]){Sp(n,e,t,r=>{Ji(po,()=>{i(...r.map(o))})})}function mo(i,e=0){var t=Ji(di|e,i);return t}function $n(i){return Ji(gi|Ta,i)}function uf(i){var e=i.teardown;if(e!==null){const t=Yi,n=Dt;Cc(!0),ri(null);try{e.call(null)}catch(r){yi(r,i.parent)}finally{Cc(t),ri(n)}}}function Jl(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const r=t.ac;r!==null&&Aa(()=>{r.abort(hs)});var n=t.next;(t.f&dr)!==0?t.parent=null:On(t,e),t=n}}function zp(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&gi)===0&&On(e),e=t}}function On(i,e=!0){var t=!1;(e||(i.f&zh)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(Gp(i.nodes.start,i.nodes.end),t=!0),i.f|=ts,Jl(i,e&&!t),rs(i,0);var n=i.nodes&&i.nodes.t;if(n!==null)for(const a of n)a.stop();uf(i),i.f^=ts,i.f|=bn;var r=i.parent;r!==null&&r.first!==null&&df(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=i.b=null}function Gp(i,e){for(;i!==null;){var t=i===e?null:ps(i);i.remove(),i=t}}function df(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function wr(i,e,t=!0){var n=[];i.f|=Hl,ff(i,n,!0);var r=()=>{t&&On(i),e&&e()},a=n.length;if(a>0){var l=()=>--a||r();for(var s of n)s.out(l)}else r()}function ff(i,e,t){if((i.f&Dn)===0){i.f^=Dn;var n=i.nodes&&i.nodes.t;if(n!==null)for(const s of n)(s.is_global||t)&&e.push(s);for(var r=i.first;r!==null;){var a=r.next;if((r.f&dr)===0){var l=(r.f&pa)!==0||(r.f&gi)!==0&&(i.f&di)!==0;ff(r,e,l?t:!1)}r=a}}}function ro(i){i.f&=~Hl,hf(i,!0)}function hf(i,e){if((i.f&Hl)===0&&(i.f&Dn)!==0){i.f^=Dn,(i.f&mn)===0&&(sn(i,qt),fr.ensure().schedule(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&pa)!==0||(t.f&gi)!==0;hf(t,r?e:!1),t=n}var a=i.nodes&&i.nodes.t;if(a!==null)for(const l of a)(l.is_global||e)&&l.in()}}function Ql(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var r=t===n?null:ps(t);e.append(t),t=r}}let Yi=!1;function Cc(i){Yi=i}let Dt=null,hi=!1;function ri(i){Dt=i}let kt=null;function Ai(i){kt=i}let Ti=null;function pf(i){Dt!==null&&((Dt.f&to)!==0||(Dt.f&Tn)!==0)&&(Ti??=new Set).add(i)}let Nn=null,Vn=0,Qn=null;function Hp(i){Qn=i}let mf=1,Sr=0,Tr=Sr;function Pc(i){Tr=i}function vf(){return++mf}function ms(i){var e=i.f;if((e&qt)!==0)return!0;if((e&jn)!==0){for(var t=i.deps,n=t.length,r=0;r<n;r++){var a=t[r];if(ms(a)&&Kd(a),a.wv>i.wv)return!0}(e&pi)!==0&&fi===null&&sn(i,mn)}return!1}function gf(i,e,t=!0){var n=i.reactions;if(n!==null&&!(Ti!==null&&Ti.has(i)))for(var r=0;r<n.length;r++){var a=n[r];(a.f&Tn)!==0?gf(a,e,!1):e===a&&(t?sn(a,qt):(a.f&mn)!==0&&sn(a,jn),ql(a))}}function _f(i){var e=Nn,t=Vn,n=Qn,r=Dt,a=Ti,l=yn,s=hi,c=Tr,u=i.f;Nn=null,Vn=0,Qn=null,Dt=(u&(gi|dr))===0?i:null,Ti=null,ma(i.ctx),hi=!1,Tr=++Sr,i.ac!==null&&(Aa(()=>{i.ac.abort(hs)}),i.ac=null);try{i.f|=to;var d=i.fn,h=d();i.f|=wa;var f=Lc(i);if(Vd()&&Qn!==null&&!hi&&f!==null&&(i.f&(Tn|jn|qt))===0)for(var v=0;v<Qn.length;v++)gf(Qn[v],i);if(r!==null&&r!==i){if(Sr++,r.deps!==null)for(let y=0;y<t;y+=1)r.deps[y].rv=Sr;if(e!==null)for(const y of e)y.rv=Sr;Qn!==null&&(n===null?n=Qn:n.push(...Qn))}return(i.f&or)!==0&&(i.f^=or),h}catch(y){return Lc(i),Np(y)}finally{i.f^=to,Nn=e,Vn=t,Qn=n,Dt=r,Ti=a,ma(l),hi=s,Tr=c}}function Lc(i){var e=i.deps,t=St?.is_fork;if(Nn!==null){var n;if(t||rs(i,Vn),e!==null&&Vn>0)for(e.length=Vn+Nn.length,n=0;n<Nn.length;n++)e[Vn+n]=Nn[n];else i.deps=e=Nn;if(Yl()&&(i.f&pi)!==0)for(n=Vn;n<e.length;n++)(e[n].reactions??=[]).push(i)}else!t&&e!==null&&Vn<e.length&&(rs(i,Vn),e.length=Vn);return e}function Vp(i,e){let t=e.reactions;if(t!==null){var n=Uh.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}if(t===null&&(e.f&Tn)!==0&&(Nn===null||!es.call(Nn,e))){var a=e;(a.f&pi)!==0&&(a.f^=pi),a.v!==pn&&Wl(a),a.ac!==null&&Aa(()=>{a.ac.abort(hs),a.ac=null,sn(a,qt)}),Tp(a),rs(a,0)}}function rs(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)Vp(i,t[n])}function ga(i){var e=i.f;if((e&bn)===0){sn(i,mn);var t=kt;kt=i;try{(e&(di|Nd))!==0?zp(i):Jl(i),uf(i);var n=_f(i);i.teardown=typeof n=="function"?n:null,i.wv=mf;var r;Pd&&gp&&(i.f&qt)!==0&&i.deps}finally{kt=t}}}async function Wp(){await Promise.resolve(),Rp()}function o(i){var e=i.f,t=(e&Tn)!==0;if(Dt!==null&&!hi){var n=kt!==null&&(kt.f&bn)!==0;if(!n&&(Ti===null||!Ti.has(i))){var r=Dt.deps;if((Dt.f&to)!==0)i.rv<Sr&&(i.rv=Sr,Nn===null&&r!==null&&r[Vn]===i?Vn++:Nn===null?Nn=[i]:Nn.push(i));else{Dt.deps??=[],es.call(Dt.deps,i)||Dt.deps.push(i);var a=i.reactions;a===null?i.reactions=[Dt]:es.call(a,Dt)||a.push(Dt)}}}if(Yi&&wi.has(i))return wi.get(i);if(t){var l=i;if(Yi){var s=l.v;return((l.f&mn)===0&&l.reactions!==null||bf(l))&&(s=jl(l)),wi.set(l,s),s}var c=(l.f&pi)===0&&!hi&&Dt!==null&&(Dt.f&pi)!==0,u=(l.f&wa)===0;ms(l)&&(c&&(l.f|=pi),Kd(l)),c&&!u&&(Zd(l),xf(l))}if(fi?.has(i))return fi.get(i);if((i.f&or)!==0)throw i.v;return i.v}function xf(i){if(i.f|=pi,i.deps!==null)for(const t of i.deps){var e=t.reactions;e===null?t.reactions=[i]:es.call(e,i)||e.push(i),(t.f&Tn)!==0&&(t.f&pi)===0&&(Zd(t),xf(t))}}function bf(i){if(i.v===pn)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(wi.has(e)||(e.f&Tn)!==0&&bf(e))return!0;return!1}function Ra(i){var e=hi;try{return hi=!0,i()}finally{hi=e}}const jp=["touchstart","touchmove"];function Xp(i){return jp.includes(i)}const Wa=Symbol("events"),yf=new Set,bl=new Set;function qp(i,e,t,n={}){function r(a){if(n.capture||yl.call(e,a),!a.cancelBubble)return Aa(()=>t?.call(this,a))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?(r.__removed=!1,Mi(()=>{r.__removed||e.addEventListener(i,r,n)})):e.addEventListener(i,r,n),r}function Xn(i,e,t,n,r){var a={capture:n,passive:r},l=qp(i,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Kl(()=>{l.__removed=!0,e.removeEventListener(i,l,a)})}function ne(i,e,t){(e[Wa]??={})[i]=t}function fn(i){for(var e=0;e<i.length;e++)yf.add(i[e]);for(var t of bl)t(i)}let Ao=null,Ro=!1;function yl(i){var e=this,t=e.ownerDocument,n=i.type,r=i.composedPath?.()||[],a=r[0]||i.target;Ao=i,Ro||(Ro=!0,setTimeout(()=>{Ro=!1,Ao=null}));var l=0,s=Ao===i&&i[Wa];if(s){var c=r.indexOf(s);if(c!==-1&&(e===document||e===window)){i[Wa]=e;return}var u=r.indexOf(e);if(u===-1)return;c<=u&&(l=c)}if(a=r[l]||i.target,a!==e){Ld(i,"currentTarget",{configurable:!0,get(){return a||t}});var d=Dt,h=kt;ri(null),Ai(null);try{for(var f,v=[];a!==null&&a!==e;){try{var y=a[Wa]?.[n];y!=null&&(!a.disabled||i.target===a)&&y.call(a,i)}catch(S){f?v.push(S):f=S}if(i.cancelBubble)break;l++,a=l<r.length?r[l]:null}if(f){for(let S of v)queueMicrotask(()=>{throw S});throw f}}finally{i[Wa]=e,delete i.currentTarget,ri(d),Ai(h)}}}const Yp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function Kp(i){return Yp?.createHTML(i)??i}function Zp(i){var e=Up("template");return e.innerHTML=Kp(i.replaceAll("<!>","<!---->")),e.content}function ao(i,e){var t=kt;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function W(i,e){var t=(e&$h)!==0,n=(e&ep)!==0,r,a=!i.startsWith("<!>");return()=>{r===void 0&&(r=Zp(a?i:"<!>"+i),t||(r=is(r)));var l=n||rf?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=is(l),c=l.lastChild;ao(s,c)}else ao(l,l);return l}}function Gi(i=""){{var e=ji(i+"");return ao(e,e),e}}function as(){var i=document.createDocumentFragment(),e=document.createComment(""),t=ji();return i.append(e,t),ao(e,t),i}function F(i,e){i!==null&&i.before(e)}function Jp(i){let e=0,t=Lr(0),n;return()=>{Yl()&&(o(t),Zl(()=>(e===0&&(n=Ra(()=>i(()=>Ja(t)))),e+=1,()=>{Mi(()=>{e-=1,e===0&&(n?.(),n=void 0,Ja(t))})})))}}var Qp=pa|Ta;function $p(i,e,t,n){new em(i,e,t,n)}class em{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#u=null;#m=Jp(()=>(this.#u=Lr(this.#h),()=>{this.#u=null}));constructor(e,t,n,r){this.#t=e,this.#e=t,this.#s=a=>{var l=kt;l.b=this,l.f|=pl,n(a)},this.parent=kt.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=mo(()=>{this.#b()},Qp)}#x(){try{this.#i=$n(()=>this.#s(this.#t))}catch(e){this.error(e)}}#S(e){const t=this.#e.failed,{reset:n,invoke_onerror:r}=this.#_(e);Mi(r),t&&(this.#r=$n(()=>{t(this.#t,()=>e,()=>n)}))}#_(e){var t=!1,n=!1;const r=()=>{if(!this.#d()){if(t){rp();return}t=!0,n&&vp(),this.#r!==null&&wr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{n=!0,this.#e.onerror?.(e,r),n=!1}catch(l){yi(l,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(bn|ts))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=$n(()=>e(this.#t)),Mi(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),n=ji(),r=!1;if(t.append(n),this.#i=this.#y(()=>{try{return $n(()=>this.#s(n))}catch(a){try{this.error(a),r=!0}catch(l){yi(l,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(St);return}this.#c===0&&(this.#t.before(t),this.#o=null,wr(this.#a,()=>{this.#a=null}),this.#f(St))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=$n(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();Ql(this.#i,e);const t=this.#e.pending;this.#a=$n(()=>t(this.#t))}else this.#f(St)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){jd(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=kt,n=Dt,r=yn;Ai(this.#n),ri(this.#n),ma(this.#n.ctx);try{return fr.ensure(),e()}finally{Ai(t),ri(n),ma(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&wr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Mi(()=>{this.#p=!1,this.#u&&va(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),o(this.#u)}error(e){if(e===Bd||!this.#e.onerror&&!this.#e.failed)throw e;St?.is_fork?(this.#i&&St.skip_effect(this.#i),this.#a&&St.skip_effect(this.#a),this.#r&&St.skip_effect(this.#r),St.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(On(this.#i),this.#i=null),this.#a&&(On(this.#a),this.#a=null),this.#r&&(On(this.#r),this.#r=null);let t=this.#e.failed;const n=r=>{if(this.#d())return;const{reset:a,invoke_onerror:l}=this.#_(r);l(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return $n(()=>{var s=kt;s.b=this,s.f|=pl,t(this.#t,()=>r,()=>a)})}catch(s){return yi(s,this.#n.parent),null}}))};Mi(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){yi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(n,a=>yi(a,this.#n&&this.#n.parent)):n(r)}})}}function Z(i,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(i[gl]??=i.nodeValue)&&(i[gl]=t,i.nodeValue=`${t}`)}function tm(i,e){return nm(i,e)}const _s=new Map;function nm(i,{target:e,anchor:t,props:n={},events:r,context:a,intro:l=!0,transformError:s}){Ip();var c=void 0,u=Fp(()=>{var d=t??e.appendChild(ji());$p(d,{pending:()=>{}},v=>{Qt({});var y=yn;a&&(y.c=a),r&&(n.$$events=r),c=i(v,n)||Vl(),$t()},s);var h=new Set,f=v=>{for(var y=0;y<v.length;y++){var S=v[y];if(!h.has(S)){h.add(S);var m=Xp(S);for(const b of[e,document]){var p=_s.get(b);p===void 0&&(p=new Map,_s.set(b,p));var w=p.get(S);w===void 0?(b.addEventListener(S,yl,{passive:m}),p.set(S,1)):p.set(S,w+1)}}}};return f(ho(yf)),bl.add(f),()=>{for(var v of h)for(const m of[e,document]){var y=_s.get(m),S=y.get(v);--S==0?(m.removeEventListener(v,yl),y.delete(v),y.size===0&&_s.delete(m)):y.set(v,S)}bl.delete(f),d!==t&&d.parentNode?.removeChild(d)}});return im.set(c,u),c}let im=new WeakMap;class Sf{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),n=this.#l.get(t);if(n)ro(n),this.#s.delete(t);else{var r=this.#e.get(t);r&&(ro(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[a,l]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(l);s&&(On(s.effect),this.#e.delete(l))}for(const[a,l]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var u=document.createDocumentFragment();Ql(l,u),u.append(ji()),this.#e.set(a,{effect:l,fragment:u})}else On(l);this.#s.delete(a),this.#l.delete(a)};this.#n||!n?(this.#s.add(a),wr(l,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[n,r]of this.#e)t.includes(n)||(On(r.effect),this.#e.delete(n))};ensure(e,t){var n=St,r=of();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),l=ji();a.append(l),this.#e.set(e,{effect:$n(()=>t(l)),fragment:a})}else this.#l.set(e,$n(()=>t(this.anchor)));if(this.#t.set(n,e),r){for(const[s,c]of this.#l)s===e?n.unskip_effect(c):n.skip_effect(c);for(const[s,c]of this.#e)s===e?n.unskip_effect(c.effect):n.skip_effect(c.effect);n.oncommit(this.#i),n.ondiscard(this.#a)}else this.#i(n)}}function Le(i,e,t=!1){var n=new Sf(i),r=t?pa:0;function a(l,s){n.ensure(l,s)}mo(()=>{var l=!1;e((s,c=0)=>{l=!0,a(c,s)}),l||a(-1,null)},r)}const rm=Symbol("NaN");function Mf(i,e,t){var n=new Sf(i);mo(()=>{var r=e();r!==r&&(r=rm),n.ensure(r,t)})}function Sl(i,e){return e}function am(i,e,t){for(var n=[],r=e.length,a,l=e.length,s=0;s<r;s++){let h=e[s];wr(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=i.outrogroups;Ml(i,ho(a.done)),f.delete(a),f.size===0&&(i.outrogroups=null)}}else l-=1},!1)}if(l===0){var c=n.length===0&&t!==null&&i.pending.size===0;if(c){var u=t,d=u.parentNode;Dp(d),d.append(u),i.items.clear()}Ml(i,e,!c)}else a={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(a)}function Ml(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const l of i.pending.values())for(const s of l)n.add(i.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(n?.has(a)){a.f|=Si;const l=document.createDocumentFragment();Ql(a,l)}else On(e[r],t)}}var Ic;function Rt(i,e,t,n,r,a=null){var l=i,s=new Map,c=(e&Fd)!==0;if(c){var u=i;l=u.appendChild(ji())}var d=null,h=Yd(()=>{var w=t();return fo(w)?w:w==null?[]:ho(w)}),f=new Map,v=!0;function y(w){if((p.effect.f&bn)===0){p.pending.delete(w);var b=o(h);p.fallback=d,sm(p,b,l,e,n),d!==null&&(b.length===0?(d.f&Si)===0?ro(d):(d.f^=Si,ja(d,null,l)):wr(d,()=>{d=null}))}}function S(w){p.pending.delete(w)}var m=mo(()=>{for(var w=o(h),b=w.length,T=new Set,A=St,D=of(),C=0;C<b;C+=1){var j=w[C],x=n(j,C),E=v?null:s.get(x);E?(E.v&&va(E.v,j),E.i&&va(E.i,C),D&&A.unskip_effect(E.e)):(E=om(s,v?l:Ic??=ji(),j,x,C,r,e,t),v||(E.e.f|=Si),s.set(x,E)),T.add(x)}if(b===0&&a&&!d&&(v?d=$n(()=>a(l)):(d=$n(()=>a(Ic??=ji())),d.f|=Si)),b>T.size&&op(),!v)if(f.set(A,T),D){for(const[te,z]of s)T.has(te)||A.skip_effect(z.e);A.oncommit(y),A.ondiscard(S)}else y(A);o(h)}),p={effect:m,items:s,pending:f,outrogroups:null,fallback:d};v=!1}function Ua(i){for(;i!==null&&(i.f&gi)===0;)i=i.next;return i}function sm(i,e,t,n,r){var a=(n&qh)!==0,l=e.length,s=i.items,c=Ua(i.effect.first),u,d=null,h,f=[],v=[],y,S,m,p;if(a)for(p=0;p<l;p+=1)y=e[p],S=r(y,p),m=s.get(S).e,(m.f&Si)===0&&(m.nodes?.a?.measure(),(h??=new Set).add(m));for(p=0;p<l;p+=1){if(y=e[p],S=r(y,p),m=s.get(S).e,i.outrogroups!==null)for(const E of i.outrogroups)E.pending.delete(m),E.done.delete(m);if((m.f&Dn)!==0&&(ro(m),a&&(m.nodes?.a?.unfix(),(h??=new Set).delete(m))),(m.f&Si)!==0)if(m.f^=Si,m===c)ja(m,null,t);else{var w=d?d.next:c;m===i.effect.last&&(i.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),$i(i,d,m),$i(i,m,w),ja(m,w,t),d=m,f=[],v=[],c=Ua(d.next);continue}if(m!==c){if(u!==void 0&&u.has(m)){if(f.length<v.length){var b=v[0],T;d=b.prev;var A=f[0],D=f[f.length-1];for(T=0;T<f.length;T+=1)ja(f[T],b,t);for(T=0;T<v.length;T+=1)u.delete(v[T]);$i(i,A.prev,D.next),$i(i,d,A),$i(i,D,b),c=b,d=D,p-=1,f=[],v=[]}else u.delete(m),ja(m,c,t),$i(i,m.prev,m.next),$i(i,m,d===null?i.effect.first:d.next),$i(i,d,m),d=m;continue}for(f=[],v=[];c!==null&&c!==m;)(u??=new Set).add(c),v.push(c),c=Ua(c.next);if(c===null)continue}(m.f&Si)===0&&f.push(m),d=m,c=Ua(m.next)}if(i.outrogroups!==null){for(const E of i.outrogroups)E.pending.size===0&&(Ml(i,ho(E.done)),i.outrogroups?.delete(E));i.outrogroups.size===0&&(i.outrogroups=null)}if(c!==null||u!==void 0){var C=[];if(u!==void 0)for(m of u)(m.f&Dn)===0&&C.push(m);for(;c!==null;)(c.f&Dn)===0&&c!==i.fallback&&C.push(c),c=Ua(c.next);var j=C.length;if(j>0){var x=(n&Fd)!==0&&l===0?t:null;if(a){for(p=0;p<j;p+=1)C[p].nodes?.a?.measure();for(p=0;p<j;p+=1)C[p].nodes?.a?.fix()}am(i,C,x)}}a&&Mi(()=>{if(h!==void 0)for(m of h)m.nodes?.a?.apply()})}function om(i,e,t,n,r,a,l,s){var c=(l&jh)!==0?(l&Yh)===0?Pp(t,!1,!1):Lr(t):null,u=(l&Xh)!==0?Lr(r):null;return{v:c,i:u,e:$n(()=>(a(e,c??t,u??r,s),()=>{i.delete(n)}))}}function ja(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,a=e&&(e.f&Si)===0?e.nodes.start:t;n!==null;){var l=ps(n);if(a.before(n),n===r)return;n=l}}function $i(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const Dc=[...` 	
\r\f \v\uFEFF`];function lm(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var r of Object.keys(t))if(t[r])n=n?n+" "+r:r;else if(n.length)for(var a=r.length,l=0;(l=n.indexOf(r,l))>=0;){var s=l+a;(l===0||Dc.includes(n[l-1]))&&(s===n.length||Dc.includes(n[s]))?n=(l===0?"":n.substring(0,l))+n.substring(s+1):l=s}}return n===""?null:n}function cm(i,e){return i==null?null:String(i)}function pt(i,e,t,n,r,a){var l=i[ml];if(l!==t||l===void 0){var s=lm(t,n,a);s==null?i.removeAttribute("class"):i.className=s,i[ml]=t}else if(a&&r!==a)for(var c in a){var u=!!a[c];(r==null||u!==!!r[c])&&i.classList.toggle(c,u)}return a}function Ln(i,e,t,n){var r=i[vl];if(r!==e){var a=cm(e);a==null?i.removeAttribute("style"):i.style.cssText=a,i[vl]=e}return n}function um(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function dm(i,e){var t=i.__defaultValue,n=i.multiple,r=n?t??[]:null;if(!(n&&!fo(r))){i.selectedIndex;for(var a of i.options){var l=ca(a);um(a,n?r.includes(l):nf(l,t))}}}function Ef(i,e,t=!1){if(i.multiple){if(e==null)return;if(!fo(e))return ip();for(var n of i.options)n.selected=e.includes(ca(n));return}for(n of i.options){var r=ca(n);if(nf(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function _a(i){var e=new MutationObserver(t=>{t.every(fm)||("__defaultValue"in i&&dm(i),"__value"in i&&Ef(i,i.__value))});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Kl(()=>{e.disconnect()})}function xa(i,e,t=e){var n=new WeakSet,r=!0;Xd(i,"change",a=>{var l=a?"[selected]":":checked",s;if(i.multiple)s=[].map.call(i.querySelectorAll(l),ca);else{var c=i.querySelector(l)??i.querySelector("option:not([disabled])");s=c&&ca(c)}t(s),i.__value=s,St!==null&&n.add(St)}),cf(()=>{var a=e();if(i===document.activeElement){var l=St;if(n.has(l))return}if(Ef(i,a,r),r&&a===void 0){var s=i.querySelector(":checked");s!==null&&(a=ca(s),t(a))}i.__value=a,r=!1})}function ca(i){return"__value"in i?i.__value:i.value}function fm(i){if(i.target.closest("selectedcontent")!==null)return!0;if(i.type==="childList"){var e=[...i.addedNodes,...i.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const hm=Symbol("is custom element"),pm=Symbol("is html"),mm=Wh?"progress":"PROGRESS";function ss(i,e){var t=$l(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==mm)||(i.value=e??"")}function Qa(i,e){var t=$l(i);t.checked!==(t.checked=e??void 0)&&(i.checked=e)}function Oe(i,e,t,n){var r=$l(i),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(i[Vh]=t),t==null?i.removeAttribute(e):typeof t!="string"&&vm(i).has(e)?i[e]=t:i.setAttribute(e,t))}function $l(i){return i[kd]??={[hm]:i.nodeName.includes("-"),[pm]:i.namespaceURI===tp}}var Uc=new Map;function vm(i){var e=i.getAttribute("is")||i.nodeName,t=Uc.get(e);if(t)return t;Uc.set(e,t=new Set);for(var n,r=i,a=Element.prototype;a!==r;){n=Nh(r);for(var l in n)n[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&t.add(l);r=Id(r)}return t}function Kt(i,e,t=e){var n=new WeakSet;Xd(i,"input",async r=>{var a=r?i.defaultValue:i.value;if(a=Co(i)?Po(a):a,t(a),St!==null&&n.add(St),await Wp(),a!==(a=e())){var l=i.selectionStart,s=i.selectionEnd,c=i.value.length;if(i.value=a??"",s!==null){var u=i.value.length;l===s&&s===c&&u>c?(i.selectionStart=u,i.selectionEnd=u):(i.selectionStart=l,i.selectionEnd=Math.min(s,u))}}}),Ra(e)==null&&i.value&&(t(Co(i)?Po(i.value):i.value),St!==null&&n.add(St)),Zl(()=>{var r=e();if(i===document.activeElement){var a=St;if(n.has(a))return}Co(i)&&r===Po(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function Co(i){var e=i.type;return e==="number"||e==="range"}function Po(i){return i===""?null:+i}function Lo(i,e){return i===e||i?.[Er]===e}function wf(i=Vl(),e,t,n){var r=yn.r,a=kt;return cf(()=>{var l,s;return Zl(()=>{l=s,s=[],Ra(()=>{Lo(t(...s),i)||(e(i,...s),l&&Lo(t(...l),i)&&e(null,...l))})}),()=>{let c=a;for(;c!==r&&c.parent!==null&&c.parent.f&ts;)c=c.parent;const u=()=>{s&&Lo(t(...s),i)&&e(null,...s)},d=c.teardown;c.teardown=()=>{u(),d?.()}}}),i}let xs=!1;function gm(i){var e=xs;try{return xs=!1,[i(),xs]}finally{xs=e}}function Qe(i,e,t,n){var r=!0,a=(t&Jh)!==0,l=(t&Qh)!==0,s=n,c=!0,u=void 0,d=()=>l&&r?(u??=ns(n),o(u)):(c&&(c=!1,s=l?Ra(n):n),s);let h;if(a){var f=Er in i||Hh in i;h=sa(i,e)?.set??(f&&e in i?T=>i[e]=T:void 0)}var v,y=!1;a?[v,y]=gm(()=>i[e]):v=i[e],v===void 0&&n!==void 0&&(v=d(),h&&(fp(),h(v)));var S;if(S=()=>{var T=i[e];return T===void 0?d():(c=!0,T)},(t&Zh)===0)return S;if(h){var m=i.$$legacy;return(function(T,A){return arguments.length>0?((!A||m||y)&&h(A?S():T),T):S()})}var p=!1,w=((t&Kh)!==0?ns:Yd)(()=>(p=!1,S()));a&&o(w);var b=kt;return(function(T,A){if(arguments.length>0){const D=A?o(w):a?Ut(T):T;return g(w,D),p=!0,s!==void 0&&(s=D),T}return Yi&&p||(b.f&bn)!==0?w.v:o(w)})}function Pi(i){yn===null&&Hd(),tn(()=>{const e=Ra(i);if(typeof e=="function")return e})}function ec(i){yn===null&&Hd(),Pi(()=>()=>Ra(i))}const _m="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(_m);function xm(i){const e=[];for(const t of String(i??"")){const n=t.codePointAt(0);if(!(n===65039||n===65038)){if(n===8205){e.push("200d");continue}e.push(n.toString(16))}}return e.join("-")}const Tf=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310","23f9","2b07","1f50d","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","1f980","2b50","1f9ed","1f5e1","1f52e","1f409","1f47e","2693","1f3b2","1f4a3","1f36a","1f331","1f9bb","1f4da","2696","1f3c6","1f451","1f9ea","1f52d","1f6e9"]),bm=["1f980","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","2b50","1f9ed","1f310","1f409","1f47e","1f4a3","1f36a","1f331","1f9ea","1f52e","1f52d","2693","1f3b2","1f4da","2696","1f3c6","1f451","1f5e1","1f9f1","1f9e9"],Af=["grass","dirt","stone","diamond","gold","iron","brick","planks","creeper","squarecreeper","enderman","skeleton","steve","herobrine","chicken","fox","bee","meat","enderpearl","netherstar","flame","tnt","gear","magitech","fabricmc","quiltmc","neoforged","modrinth","ftb_logo","prismlauncher"],El="/";function ym(i){const e=xm(i);return Tf.has(e)?`${El}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}function vo(i){const e=String(i??"").trim();if(!e)return null;if(e.startsWith("twemoji:")){const t=e.slice(8);return Tf.has(t)?`${El}twemoji/${t}.svg`.replace(/\/{2,}/g,"/"):null}if(e.startsWith("prism:")){const t=e.slice(6);return Af.includes(t)?`${El}instance-icons/prism/${t}.svg`.replace(/\/{2,}/g,"/"):null}return null}var Sm=W('<img draggable="false"/>'),Mm=W("<span> </span>");function Ei(i,e){Qt(e,!0);let t=Qe(e,"emoji",3,""),n=Qe(e,"size",3,null),r=Qe(e,"alt",3,""),a=Qe(e,"class",3,"");const l=st(()=>ym(t())),s=st(()=>r()||t()),c=st(()=>n()?`${n()}px`:"1em");var u=as(),d=Tt(u);{var h=v=>{var y=Sm();me(()=>{Oe(y,"src",o(l)),Oe(y,"alt",o(s)),Oe(y,"title",r()||void 0),pt(y,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),Ln(y,`width: ${o(c)??""}; height: ${o(c)??""};`),Oe(y,"aria-hidden",r()?void 0:"true")}),F(v,y)},f=v=>{var y=Mm(),S=K(y,!0);me(()=>{pt(y,1,`inline-block ${a()??""}`),Oe(y,"aria-hidden",r()?void 0:"true"),Oe(y,"title",r()||void 0),Z(S,t())}),F(v,y)};Le(d,v=>{o(l)?v(h):v(f,-1)})}F(i,u),$t()}var Em=W('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),wm=W('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Tm(i,e){Qt(e,!0);let t=Qe(e,"selected",3,!1),n=Qe(e,"gameRunning",3,!1),r=Qe(e,"menuOpen",3,!1);const a=st(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function l(){const j=vo(e.instance.icon_key);if(j)return j;const x=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&x?x(e.instance.icon_path):"/logo.png"}var s=wm(),c=I(s),u=I(c),d=K(u),h=M(u,2),f=I(h),v=K(f,!0),y=M(f,2),S=I(y),m=K(S,!0),p=M(S,2),w=K(p,!0),b=M(h,2),T=M(c,2),A=K(T,!0),D=M(T,2);{var C=j=>{var x=Em(),E=Tt(x),te=M(E,2),z=I(te),N=M(z,2),B=M(N,2),V=I(B);Ei(V,{emoji:"📂"});var he=M(B,2),se=M(he,4);me(()=>z.disabled=n()),ne("click",E,function(...ee){e.onclosemenu?.apply(this,ee)}),ne("click",z,()=>{e.onclosemenu(),e.onplay()}),ne("click",N,()=>{e.onclosemenu(),e.onedit()}),ne("click",B,()=>{e.onclosemenu(),e.onopenfolder()}),ne("click",he,function(...ee){e.onviewlogs?.apply(this,ee)}),ne("click",se,()=>{e.onclosemenu(),e.ondelete()}),F(j,x)};Le(D,j=>{r()&&j(C)})}me((j,x)=>{pt(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),Oe(s,"aria-selected",t()),Oe(s,"title",e.instance.name),Oe(d,"src",j),Z(v,e.instance.name),Z(m,e.instance.minecraft_version),pt(p,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${o(a)??""}`),Z(w,e.instance.loader_type),Z(A,x)},[()=>l(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),ne("click",s,function(...j){e.onselect?.apply(this,j)}),ne("dblclick",s,function(...j){e.onplay?.apply(this,j)}),ne("keydown",s,j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),e.onplay())}),ne("contextmenu",s,j=>{j.preventDefault(),e.onselect(),e.ontogglemenu()}),Xn("error",d,j=>{j.currentTarget.dataset.f||(j.currentTarget.dataset.f="1",j.currentTarget.src="/logo.png")}),ne("click",b,j=>{j.stopPropagation(),e.ontogglemenu()}),F(i,s),$t()}fn(["click","dblclick","keydown","contextmenu"]);var Am=W('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Rm=W('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Cm=W('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Pm=W('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function Lm(i,e){Qt(e,!0);var t=Pm();Rt(t,21,()=>e.instances,n=>n.id,(n,r)=>{{let a=st(()=>e.selectedId===o(r).id),l=st(()=>e.menuFor===o(r).id);Tm(n,{get instance(){return o(r)},get selected(){return o(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return o(l)},onselect:()=>e.onselect?.(o(r).id),onplay:()=>e.onplay?.(o(r).id),ontogglemenu:()=>e.ontogglemenu?.(o(r).id),onedit:()=>e.onedit?.(o(r)),onopenfolder:()=>e.onopenfolder?.(o(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(o(r).id),get onclosemenu(){return e.onclosemenu}})}},n=>{var r=as(),a=Tt(r);{var l=d=>{var h=Am(),f=K(h,!0);me(()=>Z(f,e.error)),F(d,h)},s=d=>{var h=Rm(),f=K(h);me(v=>Z(f,`No instances match "${v??""}".`),[()=>e.query.trim()]),F(d,h)},c=st(()=>e.query.trim()),u=d=>{var h=Cm(),f=M(I(h),6);ne("click",f,()=>e.onadd?.()),F(d,h)};Le(a,d=>{e.error?d(l):o(c)?d(s,1):d(u,-1)})}F(n,r)}),F(i,t),$t()}fn(["click"]);const os=[];function Ca(i){return os.push(i),i}function Pa(i){const e=os.lastIndexOf(i);e!==-1&&os.splice(e,1)}function Nc(){return os[os.length-1]??null}var Im=W('<button type="button" role="tab"> </button>'),Dm=W('<button type="button"><img alt="" class="h-12 w-12 object-contain" draggable="false" loading="lazy"/> <span class="w-full truncate text-center text-[10px] text-(--text-muted)"> </span></button>'),Um=W('<div class="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2"></div>'),Nm=W('<button type="button"><img alt="" class="h-8 w-8" draggable="false" loading="lazy"/></button>'),Om=W('<div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2"></div>'),km=W('<div class="flex items-center gap-2 rounded border border-(--border) p-2"><img alt="" class="h-10 w-10 object-contain" draggable="false"/> <span class="truncate text-[11px] text-(--text-muted)"> </span></div>'),Fm=W('<p role="alert" class="text-[11px] text-red-400"> </p>'),Bm=W(`<div class="flex flex-col items-start gap-3"><p class="text-[12px] text-(--text-muted)">Pick a PNG, JPG, SVG, WEBP or ICO from disk. The file is copied into the instance
            directory, so the instance stays self-contained.</p> <!> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-xs font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-50"> </button> <!></div>`),zm=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Choose an instance icon"><div class="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-xl"><header class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h2 class="text-sm font-semibold">Instance icon</h2> <button type="button" class="rounded px-2 py-1 text-xs text-(--text-muted) hover:bg-(--bg-subtle)" aria-label="Close icon picker">Close</button></header> <div class="flex gap-1 border-b border-(--border) px-3 py-2" role="tablist" aria-label="Icon sources"></div> <div class="min-h-0 flex-1 overflow-y-auto p-4"><!></div></div></div>');function Rf(i,e){Qt(e,!0);let t=Qe(e,"currentKey",3,""),n=Qe(e,"currentPath",3,"");const r=[{id:"prism",label:"Prism / Freesm"},{id:"twemoji",label:"Twemoji"},{id:"custom",label:"Custom image…"}];let a=ie("prism"),l=ie(!1),s=ie("");const c="/",u=x=>`${c}${x}`.replace(/\/{2,}/g,"/"),d=x=>u(`instance-icons/prism/${x}.svg`),h=x=>u(`twemoji/${x}.svg`),f=x=>x.replace(/_/g," ").replace(/\b\w/g,E=>E.toUpperCase()).replace(/^(Fabricmc|Quiltmc|Neoforged|Ftb)\b/,E=>({Fabricmc:"Fabric",Quiltmc:"Quilt",Neoforged:"NeoForge",Ftb:"FTB"})[E]??E);Pi(()=>{const x=Ca(()=>e.onclose?.());return()=>Pa(x)});function v(x){e.onpick?.(x),e.onclose?.()}async function y(){if(!o(l)){g(l,!0),g(s,"");try{const x=await e.oncustom?.();if(x==null)return;e.onclose?.()}catch(x){g(s,String(x),!0)}finally{g(l,!1)}}}var S=zm(),m=I(S),p=I(m),w=M(I(p),2),b=M(p,2);Rt(b,21,()=>r,x=>x.id,(x,E)=>{var te=Im(),z=K(te,!0);me(()=>{Oe(te,"aria-selected",o(a)===o(E).id),pt(te,1,`rounded px-2.5 py-1 text-xs font-medium transition-colors ${o(a)===o(E).id?"bg-(--accent)/15 text-(--accent)":"text-(--text-muted) hover:bg-(--bg-subtle)"}`),Z(z,o(E).label)}),ne("click",te,()=>g(a,o(E).id,!0)),F(x,te)});var T=M(b,2),A=I(T);{var D=x=>{var E=Um();Rt(E,20,()=>Af,te=>te,(te,z)=>{var N=Dm(),B=I(N),V=M(B,2),he=K(V,!0);me((se,ee,Ee)=>{pt(N,1,`group flex flex-col items-center gap-1 rounded border p-2 transition-colors ${t()===`prism:${z}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),Oe(N,"title",se),Oe(B,"src",ee),Z(he,Ee)},[()=>f(z),()=>d(z),()=>f(z)]),ne("click",N,()=>v(`prism:${z}`)),F(te,N)}),F(x,E)},C=x=>{var E=Om();Rt(E,20,()=>bm,te=>te,(te,z)=>{var N=Nm(),B=K(N);me(V=>{pt(N,1,`flex items-center justify-center rounded border p-2 transition-colors ${t()===`twemoji:${z}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),Oe(N,"title",z),Oe(N,"aria-label",`Twemoji ${z}`),Oe(B,"src",V)},[()=>h(z)]),ne("click",N,()=>v(`twemoji:${z}`)),F(te,N)}),F(x,E)},j=x=>{var E=Bm(),te=M(I(E),2);{var z=se=>{var ee=km(),Ee=I(ee),Y=M(Ee,2),H=K(Y,!0);me(()=>{Oe(Ee,"src",n()),Z(H,n())}),F(se,ee)};Le(te,se=>{n()&&se(z)})}var N=M(te,2),B=K(N,!0),V=M(N,2);{var he=se=>{var ee=Fm(),Ee=K(ee,!0);me(()=>Z(Ee,o(s))),F(se,ee)};Le(V,se=>{o(s)&&se(he)})}me(()=>{N.disabled=o(l),Z(B,o(l)?"Copying…":"Choose file…")}),ne("click",N,y),F(x,E)};Le(A,x=>{o(a)==="prism"?x(D):o(a)==="twemoji"?x(C,1):x(j,-1)})}ne("click",w,function(...x){e.onclose?.apply(this,x)}),F(i,S),$t()}fn(["click"]);const ls="twilight_user_accent",tc="twilight_custom_themes",Oc="#06B6D4",kc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],Fc="#0F172A",Gm="#FFFFFF",Hm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function bs(i){return Hm[i]??[]}function vs(i){let e=i.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function Bc(i){const e=t=>{const n=parseInt(i.replace("#","").substring(t,t+2),16)/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function Vm(i){const e=Bc(i),t=1.05/(e+.05);return(e+.05)/(Bc(Fc)+.05)>=t?Fc:Gm}function cs(i,{persist:e=!0}={}){const t=vs(i);if(!t)return!1;const n=document.documentElement;return n.style.setProperty("--user-accent",t),n.style.setProperty("--on-accent",Vm(t)),e&&localStorage.setItem(ls,t),!0}function Wm(){localStorage.removeItem(ls);const i=document.documentElement;i.style.removeProperty("--user-accent"),i.style.removeProperty("--on-accent")}function wl(){return vs(localStorage.getItem(ls)??"")}function jm(){const i=wl();i&&cs(i)}const go=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:kc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...kc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:bs("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:bs("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:bs("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:bs("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],nc="twilight-dark",Tl={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},Xm=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function qm(i){let e="";for(const t of i){const n=t.codePointAt(0);n>=65&&n<=90?e+=String.fromCharCode(n+32):n>=97&&n<=122||n>=48&&n<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function Cf(i){const e=i&&typeof i=="object"?i:{},t={};for(const[n,r]of Object.entries(Tl))t[n]=vs(e[n]??"")??r;return t}function Ym(i){return typeof i=="string"&&i.startsWith("custom:")}function Pf(i){return Mr().find(e=>e.id===i)??null}function Mr(){try{const i=JSON.parse(localStorage.getItem(tc)??"[]");return Array.isArray(i)?i.filter(e=>e&&typeof e=="object"&&Ym(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:Cf(e.tokens)})):[]}catch{return[]}}function zc({name:i,dark:e,tokens:t}){const n=String(i??"").trim()||"Custom theme",r={id:`custom:${qm(n)||"theme"}`,name:n,dark:!!e,tokens:Cf(t)},a=[...Mr().filter(l=>l.id!==r.id),r];return localStorage.setItem(tc,JSON.stringify(a)),r}function Km(i){const e=Mr().filter(t=>t.id!==i);return localStorage.setItem(tc,JSON.stringify(e)),e}function Gc(){try{const i=getComputedStyle(document.documentElement),e=(n,r)=>{const a=i.getPropertyValue(n).trim();return vs(a)??r},t={};for(const[n,r]of Object.entries(Tl)){const a=`--${n.replace(/(\d)$/,"-$1")}`;t[n]=e(a,r)}return t}catch{return{...Tl}}}const Zm=new Set(go.map(i=>i.id));function ic(i){const e=(i??"").trim();return e==="dark"?nc:e==="light"?"twilight-light":Zm.has(e)||Pf(e)?e:null}function Jm(i){const e=i.tokens;return{id:i.id,label:i.name,dark:i.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:i.name,hex:e.accent1}],tokens:e}}function ua(i){const e=ic(i);return e?go.find(t=>t.id===e)??Jm(Pf(e)):null}function Xa(i){return ua(i)?.dark??!0}const Qm=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Io="";function $m(i){const e=ua(i)??ua(nc);if(!e||e.id===Io)return e;const t=Io==="";Io=e.id;const n=document.documentElement;for(const r of Qm)n.style.removeProperty(r);n.classList.toggle("dark",e.dark),n.classList.toggle("light",!e.dark);for(const r of go)r.cls&&n.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;n.style.setProperty("--bg-1",r.bg1),n.style.setProperty("--bg-2",r.bg2),n.style.setProperty("--bg-3",r.bg3),n.style.setProperty("--border-1",r.border1),n.style.setProperty("--fg-1",r.fg1),n.style.setProperty("--fg-2",r.fg2),n.style.setProperty("--accent-1",r.accent1),n.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(ls),cs(r.accent1,{persist:!1})}else t||(localStorage.removeItem(ls),cs(e.accent,{persist:!1}));return e}const ev="/".replace(/\/{2,}/g,"/"),Lf=[{id:"fluent-auto",label:"Fluent (Auto)",hint:"Freesm Fluent · follows the theme"},{id:"fluent",label:"Fluent Light",hint:"Freesm Fluent · light ink"},{id:"fluent_dark",label:"Fluent Dark",hint:"Freesm Fluent · white ink"},{id:"breeze_dark",label:"Breeze Dark",hint:"Prism · KDE Breeze dark"},{id:"breeze_light",label:"Breeze Light",hint:"Prism · KDE Breeze light"},{id:"pe_colored",label:"Prism PE Colored",hint:"Prism · full-color PE"},{id:"twemoji",label:"Twemoji",hint:"Emoji glyphs · the classic look"}],If=new Set(Lf.map(i=>i.id)),Df="twilight-icon-pack",tv={instances:"viewfolder",folder:"viewfolder",server:"server",settings:"settings",accounts:"accounts",new:"new",launch:"launch",edit:"instance-settings",copy:"copy",export:"export",delete:"delete",shortcut:"shortcut",mods:"centralmods",refresh:"refresh",console:"log",tag:"tag",star:"star",help:"help",about:"about",screenshots:"screenshots",worlds:"worlds"},Hc={kill:"⏹",download:"⬇",search:"🔍",sun:"☀",moon:"🌙",package:"📦",modrinth:"🧩",success:"✅",warning:"⚠",error:"⛔",instances:"📁",folder:"📁",server:"🌐",settings:"⚙",accounts:"👤",new:"➕",launch:"▶",edit:"✏",copy:"⧉",export:"⤓",delete:"🗑",shortcut:"🔗",mods:"📦",refresh:"🔄",console:"📜",tag:"🏷",star:"★",help:"❔",about:"ℹ",screenshots:"🖼",worlds:"🌐"};let qa=null;function so(){if(qa)return qa;const i=localStorage.getItem(Df);return qa=If.has(i??"")?i:"fluent-auto",qa}function nv(i){If.has(i)&&(qa=i,localStorage.setItem(Df,i),Uf())}let Al="";function iv(i){const e=ic(i)??String(i??"");e!==Al&&(Al=e,Uf())}function rv(i=so()){return i!=="fluent-auto"?i:Xa(Al||"twilight-dark")?"fluent_dark":"fluent"}const Rl=new Set;function Uf(){for(const i of Rl)i()}function av(i){return Rl.add(i),()=>Rl.delete(i)}function sv(i,e=null){const t=e??so(),n=i;if(t==="twemoji"){const l=Hc[i];return l?{kind:"emoji",emoji:l,label:n}:null}const r=tv[i];if(r)return{kind:"svg",src:`${ev}icons/${rv(t)}/${r}.svg`,label:n};const a=Hc[i];return a?{kind:"emoji",emoji:a,label:n}:null}var ov=W('<img draggable="false"/>'),lv=W("<span></span>");function jt(i,e){Qt(e,!0);let t=Qe(e,"name",3,""),n=Qe(e,"pack",3,null),r=Qe(e,"size",3,null),a=Qe(e,"alt",3,""),l=Qe(e,"class",3,""),s=ie(0);const c=av(()=>g(s,o(s)+1));ec(c);const u=st(()=>(o(s),sv(t(),n()))),d=st(()=>r()?`${r()}px`:"1em"),h=st(()=>a()||t());let f=ie(!1);tn(()=>{o(u)?.kind,g(f,!1)});var v=as(),y=Tt(v);{var S=w=>{var b=as(),T=Tt(b);Mf(T,()=>o(u).src,A=>{var D=ov();me(()=>{Oe(D,"src",o(u).src),Oe(D,"alt",o(h)),Oe(D,"title",a()||void 0),pt(D,1,`shrink-0 select-none ${l()??""}`),Ln(D,`width:${o(d)??""};height:${o(d)??""};object-fit:contain`),Oe(D,"aria-hidden",a()?void 0:"true")}),Xn("error",D,()=>g(f,!0)),F(A,D)}),F(w,b)},m=w=>{{let b=st(()=>a()||void 0);Ei(w,{get emoji(){return o(u).emoji},get size(){return r()},get alt(){return o(b)},get class(){return l()}})}},p=w=>{var b=lv();me(()=>{pt(b,1,`inline-block shrink-0 ${l()??""}`),Ln(b,`width:${o(d)??""};height:${o(d)??""}`)}),F(w,b)};Le(y,w=>{o(u)?.kind==="svg"&&!o(f)?w(S):o(u)?.kind==="emoji"?w(m,1):w(p,-1)})}F(i,v),$t()}const mi=Ut({dialog:null,toasts:[]});function ys(i){const e=mi.dialog;mi.dialog=null,e?.resolve?.(i)}let cv=0;function rr(i,e="info",{title:t="",duration:n=4500}={}){const r=++cv;return mi.toasts.push({id:r,message:i,kind:e,title:t,duration:n}),mi.toasts.length>6&&mi.toasts.shift(),r}function Vc(i){const e=mi.toasts.findIndex(t=>t.id===i);e!==-1&&mi.toasts.splice(e,1)}var uv=W('<div class="p-6 text-center text-(--step-body) text-(--fg-2)">Resolving mods and their dependencies…</div>'),dv=W('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div></div>'),fv=W('<tr><td class="px-3 py-2 align-top"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent-1)"/></td><td> </td><td class="px-3 py-2 align-top text-(--fg-2)"> </td><td class="px-3 py-2 align-top font-mono text-[11px] text-(--fg-2)"> </td><td> </td><td class="px-3 py-2 text-right align-top text-(--fg-2)"> </td></tr>'),hv=W('<tr><td colspan="6" class="px-3 py-6 text-center text-(--fg-2)">The queue is empty.</td></tr>'),pv=W('<table class="w-full text-left text-(--step-body)"><thead class="sticky top-0 z-10 bg-(--bg-3)"><tr class="border-b border-(--border-1) text-(--step-caption) uppercase tracking-wide text-(--fg-2)"><th class="w-[36px] px-3 py-2 font-medium"></th><th class="px-3 py-2 font-medium">Mod</th><th class="w-[130px] px-3 py-2 font-medium">Version</th><th class="w-[220px] px-3 py-2 font-medium">File</th><th class="w-[190px] px-3 py-2 font-medium">Source</th><th class="w-[80px] px-3 py-2 text-right font-medium">Size</th></tr></thead><tbody></tbody></table>'),mv=W('<span class="text-rose-400"> </span>'),vv=W(`<div role="presentation" class="fixed inset-0 z-[60] flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[560px] w-[880px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Confirm download</h3> <p class="text-(--step-meta) text-(--fg-2)">You're about to download the following mods — only rows with a check will be downloaded.</p></div> <button class="text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="min-w-0 truncate text-(--step-meta) text-(--fg-2)"><!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Back</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Downloads every checked file (SHA-1 verified) into this instance's mods folder"> </button></div></div></div></div>`);function gv(i,e){Qt(e,!0);let t=Qe(e,"items",19,()=>[]);const n=["fabric","quilt","forge","neoforge"],r=st(()=>{const Y=e.instance.loader_type.toLowerCase();return n.includes(Y)?Y:""});let a=ie(null),l=ie(!0),s=ie(""),c=ie(Ut({})),u=ie(!1),d=ie("");function h(Y){return Y>=1024*1024?`${(Y/1024/1024).toFixed(1)} MB`:Y>=1024?`${(Y/1024).toFixed(1)} KB`:`${Y} B`}function f(Y){return Y.required_by.length?`required by ${Y.required_by.join(", ")}`:Y.installed?"already installed":"your selection"}function v(){return o(a)?.filter(Y=>o(c)[Y.project_id]).length??0}function y(Y){g(c,{...o(c),[Y.project_id]:!o(c)[Y.project_id]},!0)}function S(Y,H){const le=window.__TAURI__?.core;return le?le.invoke(Y,H):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function m(){if(!o(a)||o(u))return;const Y=o(a).filter(H=>o(c)[H.project_id]).map(H=>({url:H.url,filename:H.filename,sha1:H.sha1}));if(Y.length){g(u,!0),g(d,"");try{const H=await S("install_modrinth_batch",{instanceId:e.instance.id,files:Y});rr(`Downloaded ${H.length} mod file${H.length===1?"":"s"}.`,"success"),e.ondownloaded?.(H)}catch(H){g(d,String(H),!0),rr(`Download failed: ${H}`,"error")}finally{g(u,!1)}}}Pi(()=>{const Y=Ca(()=>o(u)?void 0:e.onclose?.());return S("preview_mod_download_queue",{instanceId:e.instance.id,projects:t(),gameVersion:e.instance.minecraft_version,loader:o(r)}).then(H=>{g(a,H,!0),g(c,Object.fromEntries(H.map(le=>[le.project_id,!le.installed])),!0),g(l,!1)}).catch(H=>{g(s,String(H),!0),g(l,!1)}),()=>Pa(Y)});var p=vv(),w=I(p),b=I(w),T=M(I(b),2),A=M(b,2),D=I(A);{var C=Y=>{var H=uv();F(Y,H)},j=Y=>{var H=dv(),le=I(H),Ae=K(le,!0);me(()=>Z(Ae,o(s))),F(Y,H)},x=Y=>{var H=pv(),le=M(I(H));Rt(le,21,()=>o(a),Ae=>Ae.project_id,(Ae,Me)=>{var Pe=fv(),Ne=I(Pe),ke=I(Ne),Be=M(Ne),et=K(Be,!0),gt=M(Be),Ke=K(gt,!0),Q=M(gt),_t=K(Q,!0),ze=M(Q),ge=K(ze,!0),we=M(ze),Fe=K(we,!0);me((Ge,He)=>{pt(Pe,1,`border-b border-(--border-1)/50 ${o(Me).installed?"bg-(--bg-3)/60":o(Me).required_by.length?"bg-(--brand-tint)/40":""}`),Qa(ke,o(c)[o(Me).project_id]??!1),pt(Be,1,`px-3 py-2 align-top font-medium ${o(Me).installed?"opacity-60":"text-(--fg-1)"}`),Z(et,o(Me).title),Z(Ke,o(Me).version),Oe(Q,"title",o(Me).filename),Z(_t,o(Me).filename),pt(ze,1,`px-3 py-2 align-top text-[11px] ${o(Me).required_by.length?"text-(--accent-1)":"text-(--fg-2)"}`),Z(ge,Ge),Z(Fe,He)},[()=>f(o(Me)),()=>h(o(Me).size)]),ne("change",ke,()=>y(o(Me))),F(Ae,Pe)},Ae=>{var Me=hv();F(Ae,Me)}),F(Y,H)};Le(D,Y=>{o(l)?Y(C):o(s)?Y(j,1):o(a)&&Y(x,2)})}var E=M(A,2),te=I(E),z=I(te);{var N=Y=>{var H=mv(),le=K(H,!0);me(()=>Z(le,o(d))),F(Y,H)},B=Y=>{var H=Gi();me((le,Ae)=>Z(H,`Downloading ${le??""} file${Ae??""}…`),[()=>v(),()=>v()===1?"":"s"]),F(Y,H)},V=Y=>{var H=Gi();me(le=>Z(H,`${le??""} of ${o(a).length??""} rows will download`),[()=>v()]),F(Y,H)};Le(z,Y=>{o(d)?Y(N):o(u)?Y(B,1):o(a)&&Y(V,2)})}var he=M(te,2),se=I(he),ee=M(se,2),Ee=K(ee,!0);me(Y=>{T.disabled=o(u),Oe(te,"title",o(d)),se.disabled=o(u),ee.disabled=Y,Z(Ee,o(u)?"Downloading…":"Confirm & Download")},[()=>o(u)||!o(a)||v()===0]),ne("click",p,Y=>{Y.target===Y.currentTarget&&!o(u)&&e.onclose?.()}),ne("click",T,()=>e.onclose?.()),ne("click",se,()=>e.onclose?.()),ne("click",ee,m),F(i,p),$t()}fn(["click","change"]);var _v=W('<label class="flex cursor-pointer items-center gap-2 text-(--step-body) capitalize"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent-1)"/> <span> </span></label>'),Wc=W("<option> </option>"),xv=W('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div>'),jc=W('<div class="p-6 text-center text-(--step-body) text-(--fg-2)"> </div>'),bv=W('<span class="shrink-0 rounded bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-green-500">installed</span>'),yv=W('<span class="shrink-0 rounded bg-(--accent-1)/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-1)">queued</span>'),Sv=W('<button><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <span class="min-w-0 flex-1"><span class="flex items-center gap-2"><span class="truncate text-(--step-card) font-medium text-(--fg-1)"> </span> <!> <!></span> <span class="block truncate text-(--step-meta) text-(--fg-2)"> </span> <span class="block truncate text-[10px] text-(--fg-2)"> </span></span></button>'),Mv=W('<div class="flex flex-col gap-1.5"></div>'),Ev=W('<div class="flex h-full flex-col items-center justify-center p-6 text-center text-(--step-body) text-(--fg-2)"><!> <p class="mt-3">Select a mod to inspect it.</p></div>'),wv=W('<div class="mt-1 flex h-8 items-center rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) text-(--fg-2)">Loading versions…</div>'),Tv=W('<select id="mods-version" class="mt-1 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"><option> </option><!></select>'),Av=W('<div class="mt-1 h-8 rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) leading-8 text-(--fg-2)">Latest compatible</div>'),Rv=W('<p class="mt-2 text-[11px] text-rose-400"> </p>'),Cv=W('<div class="mt-2 text-(--step-meta) whitespace-pre-wrap break-words text-(--fg-2)"> </div>'),Pv=W('<div class="flex items-start gap-3 border-b border-(--border-1) p-3"><img alt="" draggable="false" class="h-12 w-12 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="truncate text-(--step-card) font-semibold text-(--fg-1)"> </div> <div class="truncate text-[10px] text-(--fg-2)"> </div> <div class="text-[10px] text-(--fg-2)"> </div></div></div> <div class="border-b border-(--border-1) p-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-version">Version</label> <!></div> <div class="min-h-0 flex-1 p-3"><div class="text-(--step-body) text-(--fg-2)"> </div> <!> <!></div>',1),Lv=W('<span class="ml-1 text-[10px]"> </span>'),Iv=W('<div role="presentation" class="fixed inset-0 z-50 flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[720px] w-[1180px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Browse &amp; Download Mods</h3> <p class="truncate text-(--step-meta) text-(--fg-2)"> <!></p></div> <button class="text-(--fg-2) hover:text-(--fg-1)">✕</button></div> <div class="flex min-h-0 flex-1"><aside class="flex w-[200px] shrink-0 flex-col gap-4 overflow-y-auto border-r border-(--border-1) p-3"><section><h4 class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)">Categories</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border-1) pt-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-sort">Sort</label> <select id="mods-sort" class="mt-1.5 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"></select></section></aside> <section class="flex min-w-0 flex-1 flex-col"><div class="border-b border-(--border-1) p-3"><input class="h-9 w-full rounded border border-(--border-1) bg-(--bg-3) px-3 text-(--step-card) text-(--fg-1) outline-none placeholder:text-(--fg-2) focus:border-(--accent-1)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></section> <aside class="flex w-[330px] shrink-0 flex-col overflow-y-auto border-l border-(--border-1)"><!></aside></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="text-(--step-body) text-(--fg-2)"> <!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Clear</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Stages every queued mod plus its required dependencies for confirmation"><!> Review and Confirm…</button></div></div></div></div> <!>',1);function Dv(i,e){Qt(e,!0);const t=["fabric","quilt","forge","neoforge","legacy-fabric"],n=st(()=>{const G=e.instance.loader_type.toLowerCase();return G==="legacy fabric"||G==="legacyfabric"?"legacy-fabric":G==="cleanroom"?"forge":t.includes(G)?G:""}),r=["optimization","utility","library","worldgen","accessibility","technology","adventure","decoration","mobs","equipment","food","storage","transportation","game-mechanics"],a=[{id:"relevance",label:"Relevance"},{id:"downloads",label:"Most downloaded"},{id:"updated",label:"Recently updated"},{id:"newest",label:"Newest"}];let l=ie(""),s=ie("relevance"),c=ie(Ut(new Set)),u=ie(null),d=ie(!1),h=ie(""),f=0,v=ie(Ut([]));function y(G){const ae=G.title.toLowerCase().replace(/[^a-z0-9]+/g,"-");return o(v).some(Re=>Re.includes(ae))}let S=ie(null),m=ie(null),p=ie(!1),w=ie(""),b=0,T=ie(""),A=ie(Ut([])),D=ie(!1);function C(G){const ae=new Set(o(c));ae.has(G)?ae.delete(G):ae.add(G),g(c,ae,!0)}function j(G){return G>=1e6?`${(G/1e6).toFixed(1)}M`:G>=1e3?`${(G/1e3).toFixed(0)}K`:String(G)}function x(G){return G.icon_url||"/logo.png"}function E(G,ae){const Re=window.__TAURI__?.core;return Re?Re.invoke(G,ae):Promise.reject(new Error("Tauri backend unavailable in this preview."))}tn(()=>{const G=o(l).trim(),ae=[...o(c)],Re=o(s),De=++f,O=setTimeout(()=>{g(d,!0),g(h,""),E("search_modrinth_mods",{query:G,gameVersion:e.instance.minecraft_version,loader:o(n),categories:ae,index:Re}).then(ye=>{De===f&&(g(u,ye,!0),g(d,!1))}).catch(ye=>{De===f&&(g(h,String(ye),!0),g(d,!1))})},350);return()=>clearTimeout(O)});async function te(G){if(o(S)?.project_id===G.project_id)return;g(S,G,!0),g(m,null),g(w,""),g(T,"");const ae=++b;g(p,!0);try{const Re=await E("get_modrinth_project_details",{projectId:G.project_id,gameVersion:e.instance.minecraft_version,loader:o(n)});ae===b&&g(m,Re,!0)}catch(Re){ae===b&&g(w,String(Re),!0)}finally{ae===b&&g(p,!1)}}function z(G){return o(A).some(ae=>ae.project_id===G)}function N(){o(A).length&&g(D,!0)}Pi(()=>{const G=Ca(()=>e.onclose?.());return E("list_instance_mods",{instanceId:e.instance.id}).then(ae=>g(v,ae.map(Re=>Re.filename.toLowerCase()),!0)).catch(()=>{}),()=>Pa(G)});var B=Iv(),V=Tt(B),he=I(V),se=I(he),ee=I(se),Ee=M(I(ee),2),Y=I(Ee),H=M(Y);{var le=G=>{var ae=Gi();me(Re=>Z(ae,`· ${Re??""}`),[()=>o(n)[0].toUpperCase()+o(n).slice(1)]),F(G,ae)};Le(H,G=>{o(n)&&G(le)})}var Ae=M(ee,2),Me=M(se,2),Pe=I(Me),Ne=I(Pe),ke=M(I(Ne),2);Rt(ke,20,()=>r,G=>G,(G,ae)=>{var Re=_v(),De=I(Re),O=M(De,2),ye=K(O,!0);me((ce,_e)=>{Qa(De,ce),Z(ye,_e)},[()=>o(c).has(ae),()=>ae.replace("-"," ")]),ne("change",De,()=>C(ae)),F(G,Re)});var Be=M(Ne,2),et=M(I(Be),2);Rt(et,21,()=>a,G=>G.id,(G,ae)=>{var Re=Wc(),De=K(Re,!0),O={};me(()=>{Z(De,o(ae).label),O!==(O=o(ae).id)&&(Re.value=(Re.__value=O)??"")}),F(G,Re)}),_a(et);var gt=M(Pe,2),Ke=I(gt),Q=I(Ke),_t=M(Ke,2),ze=I(_t);{var ge=G=>{var ae=xv(),Re=K(ae,!0);me(()=>Z(Re,o(h))),F(G,ae)};Le(ze,G=>{o(h)&&G(ge)})}var we=M(ze,2);{var Fe=G=>{var ae=jc(),Re=K(ae,!0);me(()=>Z(Re,o(d)?"Searching Modrinth…":"Type to search.")),F(G,ae)},Ge=G=>{var ae=jc(),Re=K(ae);me(De=>Z(Re,`No mods for MC ${e.instance.minecraft_version??""}${o(n)?` + ${o(n)}`:""} match
              “${De??""}”.`),[()=>o(l).trim()]),F(G,ae)},He=G=>{var ae=Mv();Rt(ae,21,()=>o(u),Re=>Re.project_id,(Re,De)=>{var O=Sv(),ye=I(O),ce=M(ye,2),_e=I(ce),Te=I(_e),qe=K(Te,!0),je=M(Te,2);{var rt=Et=>{var Ot=bv();F(Et,Ot)},Mt=st(()=>y(o(De)));Le(je,Et=>{o(Mt)&&Et(rt)})}var ot=M(je,2);{var It=Et=>{var Ot=yv();F(Et,Ot)},Lt=st(()=>z(o(De).project_id));Le(ot,Et=>{o(Lt)&&Et(It)})}var xt=M(_e,2),Ye=K(xt,!0),vt=M(xt,2),Ct=K(vt);me((Et,Ot)=>{pt(O,1,`flex items-center gap-3 rounded border px-3 py-2 text-left ${o(S)?.project_id===o(De).project_id?"border-(--accent-1) bg-(--brand-tint)":"border-(--border-1) bg-(--bg-3) hover:border-(--accent-1)/60"}`),Oe(ye,"src",Et),Oe(Te,"title",o(De).title),Z(qe,o(De).title),Oe(xt,"title",o(De).description),Z(Ye,o(De).description),Z(Ct,`by ${(o(De).author||"unknown")??""} · ${Ot??""} downloads`)},[()=>x(o(De)),()=>j(o(De).downloads)]),ne("click",O,()=>te(o(De))),Xn("error",ye,Et=>{Et.currentTarget.dataset.f||(Et.currentTarget.dataset.f="1",Et.currentTarget.src="/logo.png")}),F(Re,O)}),F(G,ae)};Le(we,G=>{o(u)?o(u).length===0&&!o(d)?G(Ge,1):G(He,-1):G(Fe)})}var Ze=M(gt,2),lt=I(Ze);{var Ue=G=>{var ae=Ev(),Re=I(ae);jt(Re,{name:"modrinth",size:28}),F(G,ae)},P=G=>{var ae=Pv(),Re=Tt(ae),De=I(Re),O=M(De,2),ye=I(O),ce=K(ye,!0),_e=M(ye,2),Te=K(_e),qe=M(_e,2),je=K(qe),rt=M(Re,2),Mt=M(I(rt),2);{var ot=mt=>{var ut=wv();F(mt,ut)},It=mt=>{var ut=Tv(),Je=I(ut),R=K(Je);Je.value=Je.__value="";var J=M(Je);Rt(J,17,()=>o(m).versions,fe=>fe.id,(fe,oe)=>{var ve=Wc(),Xe=K(ve),it={};me(()=>{Z(Xe,`${o(oe).version??""}${o(oe).version_type&&o(oe).version_type!=="release"?` (${o(oe).version_type})`:""}`),it!==(it=o(oe).id)&&(ve.value=(ve.__value=it)??"")}),F(fe,ve)}),_a(ut),me(()=>Z(R,`Latest (${o(m).versions[0]?.version??""})`)),xa(ut,()=>o(T),fe=>g(T,fe)),F(mt,ut)},Lt=mt=>{var ut=Av();F(mt,ut)};Le(Mt,mt=>{o(p)?mt(ot):o(m)?.versions?.length?mt(It,1):mt(Lt,-1)})}var xt=M(rt,2),Ye=I(xt),vt=K(Ye,!0),Ct=M(Ye,2);{var Et=mt=>{var ut=Rv(),Je=K(ut,!0);me(()=>Z(Je,o(w))),F(mt,ut)};Le(Ct,mt=>{o(w)&&mt(Et)})}var Ot=M(Ct,2);{var Vt=mt=>{var ut=Cv(),Je=K(ut,!0);me(()=>Z(Je,o(m).body)),F(mt,ut)};Le(Ot,mt=>{o(m)?.body&&mt(Vt)})}me((mt,ut)=>{Oe(De,"src",mt),Oe(ye,"title",o(S).title),Z(ce,o(S).title),Z(Te,`by ${(o(S).author||"unknown")??""}`),Z(je,`${ut??""} downloads`),Z(vt,o(S).description)},[()=>x(o(S)),()=>j(o(S).downloads)]),Xn("error",De,mt=>{mt.currentTarget.dataset.f||(mt.currentTarget.dataset.f="1",mt.currentTarget.src="/logo.png")}),F(G,ae)};Le(lt,G=>{o(S)?G(P,-1):G(Ue)})}var _=M(Me,2),U=I(_),k=I(U),X=M(k);{var de=G=>{var ae=Lv(),Re=K(ae);me(De=>Z(Re,`(${De??""})`),[()=>o(A).map(De=>De.title).join(", ")]),F(G,ae)};Le(X,G=>{o(A).length&&G(de)})}var Se=M(U,2),xe=I(Se),q=M(xe,2),L=I(q);jt(L,{name:"download",size:13});var ue=M(V,2);{var be=G=>{gv(G,{get instance(){return e.instance},get items(){return o(A)},onclose:()=>g(D,!1),ondownloaded:ae=>{g(D,!1),g(A,[],!0),e.oninstalled?.(ae)}})};Le(ue,G=>{o(D)&&G(be)})}me(()=>{Z(Y,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `),Z(k,`${o(A).length===0?"No mods selected":`${o(A).length} mod${o(A).length===1?"":"s"} selected`} `),xe.disabled=!o(A).length,q.disabled=!o(A).length}),ne("click",V,G=>{G.target===G.currentTarget&&e.onclose?.()}),ne("click",Ae,()=>e.onclose?.()),xa(et,()=>o(s),G=>g(s,G)),Kt(Q,()=>o(l),G=>g(l,G)),ne("click",xe,()=>g(A,[],!0)),ne("click",q,N),F(i,B),$t()}fn(["click","change"]);var Uv=W('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Nv=W('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Ov=W('<div class="mt-4 rounded border border-amber-500/30 bg-amber-500/10 p-3" role="status" aria-live="polite"><p class="text-[12px] text-amber-400"><strong> </strong> </p> <button class="mt-2 rounded border border-amber-500/40 px-3 py-1.5 text-[12px] font-medium text-amber-400 hover:bg-amber-500/20 disabled:opacity-40"> </button></div>'),kv=W('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),Xc=W('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),Do=W('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Fv=W(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <!> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),Bv=W('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),zv=W('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),Gv=W('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),Hv=W('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),Vv=W('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),Wv=W('<button type="button" class="rounded px-2.5 py-1.5 text-[11px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)">Reset</button>'),jv=W('<p role="alert" class="mt-2 text-[11px] text-red-400"> </p>'),Xv=W(`<div role="alert" class="mt-4 rounded border border-red-500/40 bg-red-500/10 p-3 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
              it works — it is prone to crashes and only a limited subset of Forge mods support it.</p></div>`),qv=W('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance icon</div> <p class="mt-1 text-[11px] text-(--text-muted)">Pick a bundled launcher icon, a Twemoji, or a custom image.</p> <div class="mt-3 flex items-center gap-3"><span class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded border border-(--border) bg-(--accent)/10"><img alt="" draggable="false" class="h-full w-full object-cover"/></span> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-[12px] font-medium text-(--accent) hover:bg-(--accent)/25">Change icon…</button> <!></div> <!></div> <!> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, loader switching and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p>',1),Yv=W('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!> <!></div>');function Kv(i,e){Qt(e,!0);let t=Qe(e,"instance",7),n=Qe(e,"storage",3,null),r=Qe(e,"blindMode",3,!1),a=Qe(e,"deafMode",3,!1);const l=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let s=ie("mods"),c=ie(Ut([])),u=ie(!1),d=ie(""),h=ie(""),f=ie(!1),v=ie(!1),y=ie(Ut(t().icon_key??"")),S=ie("");function m(){const _=vo(o(y));return _||(t().icon_path?j(t().icon_path):"/logo.png")}async function p(_){g(S,"");try{await window.__TAURI__.core.invoke("set_instance_icon_key",{instanceId:t().id,iconKey:_}),g(y,_,!0),t().icon_key=_,t().icon_path=null}catch(U){g(S,String(U),!0)}}async function w(){const _=window.__TAURI__?.dialog?.open;if(!_)throw new Error("Image picker unavailable in this build.");const U=await _({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});if(!U)return null;const k=await window.__TAURI__.core.invoke("set_instance_icon",{instanceId:t().id,imagePath:String(U)});return g(y,""),t().icon_key=null,t().icon_path=k,k}let b=ie(Ut([])),T=ie(Ut([])),A=ie(!1),D=ie("");function C(..._){return[n()?n().instances_dir.replace(/\\/g,"/"):"",t().id,"minecraft",..._].filter(Boolean).join("/")}function j(_){const U=window.__TAURI__?.core?.convertFileSrc;return U?U(_):_}function x(_){return _>=1024*1024?`${(_/1024/1024).toFixed(1)} MB`:_>=1024?`${(_/1024).toFixed(1)} KB`:`${_} B`}function E(_){return _?new Date(_*1e3).toLocaleString():""}function te(){const _=o(h).trim().toLowerCase();return _?o(c).filter(U=>U.display_name.toLowerCase().includes(_)||U.filename.toLowerCase().includes(_)):o(c)}async function z(){g(u,!0);try{g(c,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:t().id}),!0),g(d,"")}catch(_){g(d,String(_),!0)}finally{g(u,!1)}}const N={"minecraft-access":"Minecraft Access",echosight:"EchoSight"},B=st(()=>[...r()&&!o(c).some(_=>_.filename.toLowerCase().includes("minecraft-access"))?["minecraft-access"]:[],...a()&&!o(c).some(_=>_.filename.toLowerCase().includes("echosight"))?["echosight"]:[]]);let V=ie(!1);async function he(){g(V,!0);try{for(const _ of o(B))await window.__TAURI__.core.invoke("install_mod_with_deps",{instanceId:t().id,projectId:_,gameVersion:t().minecraft_version,loader:t().loader_type.toLowerCase()});g(d,"Accessibility mods installed.")}catch(_){g(d,String(_),!0)}finally{g(V,!1)}await z()}async function se(_){g(u,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:t().id,filename:_.filename,enable:!_.is_enabled}),o(d)&&g(d,"")}catch(U){g(d,String(U),!0)}finally{g(u,!1)}await z()}async function ee(_){g(u,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:t().id,filename:_.filename}),g(d,"")}catch(U){g(d,String(U),!0)}finally{g(u,!1)}await z()}async function Ee(){const _=window.__TAURI__?.dialog?.open;if(!_){g(d,"File picker unavailable in this build.");return}let U;try{U=await _({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(X){g(d,String(X),!0);return}const k=U?[].concat(U):[];if(k.length){g(u,!0);try{for(const X of k)await window.__TAURI__.core.invoke("import_mod",{instanceId:t().id,jarPath:X});g(d,"")}catch(X){g(d,String(X),!0)}finally{g(u,!1)}await z()}}async function Y(_){g(A,!0);try{const U=await window.__TAURI__.core.invoke(_,{instanceId:t().id});g(_==="list_screenshots"?b:T,U,!0),g(D,"")}catch(U){g(D,String(U),!0)}finally{g(A,!1)}}function H(_){window.__TAURI__.core.invoke("open_path",{path:_}).catch(U=>g(D,String(U),!0))}function le(_){H(C("screenshots",_))}Pi(()=>{z(),Y("list_screenshots"),Y("list_logs")});var Ae=Yv(),Me=I(Ae),Pe=I(Me),Ne=M(Pe,2),ke=I(Ne),Be=K(ke,!0),et=M(ke,2),gt=K(et),Ke=M(Ne,2);Rt(Ke,21,()=>l,_=>_.id,(_,U)=>{var k=Uv(),X=I(k),de=I(X);Ei(de,{get emoji(){return o(U).icon},size:15});var Se=M(X,2),xe=K(Se,!0);me(()=>{pt(k,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${o(s)===o(U).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Oe(k,"aria-current",o(s)===o(U).id?"true":void 0),Z(xe,o(U).label)}),ne("click",k,()=>g(s,o(U).id,!0)),F(_,k)});var Q=M(Me,2),_t=I(Q),ze=I(_t);{var ge=_=>{var U=Nv(),k=M(Tt(U),4),X=I(k),de=K(X),Se=M(X,2),xe=K(Se),q=M(Se,2),L=K(q);me(ue=>{Z(de,`Minecraft ${t().minecraft_version??""}`),Z(xe,`Loader: ${t().loader_type??""}`),Z(L,`Last played: ${ue??""}`)},[()=>t().last_played?new Date(t().last_played*1e3).toLocaleString():"never"]),F(_,U)},we=_=>{var U=Fv(),k=M(Tt(U),4);{var X=_e=>{var Te=Ov(),qe=I(Te),je=I(qe),rt=K(je,!0),Mt=M(je),ot=M(qe,2),It=K(ot,!0);me(Lt=>{Z(rt,Lt),Z(Mt,` ${o(B).length>1?"are":"is"} not installed yet — recommended for your
              accessibility profile. Required dependencies (e.g. Fabric API) install automatically.`),ot.disabled=o(u)||o(V),Z(It,o(V)?"Installing…":"Install Recommended Accessibility Mods")},[()=>o(B).map(Lt=>N[Lt]??Lt).join(" and ")]),ne("click",ot,he),F(_e,Te)};Le(k,_e=>{(r()||a())&&(t().loader_type==="Fabric"||t().loader_type==="Quilt")&&o(B).length&&_e(X)})}var de=M(k,2),Se=I(de),xe=K(Se),q=M(Se,2),L=M(de,2),ue=M(L,2),be=M(ue,2),G=I(be);Rt(G,21,te,_e=>_e.filename,(_e,Te)=>{var qe=kv(),je=I(qe),rt=I(je);let Mt;var ot=K(rt,!0),It=M(rt,2),Lt=K(It),xt=M(je),Ye=K(xt),vt=M(xt),Ct=K(vt);me(Et=>{Mt=pt(rt,1,"truncate",null,Mt,{"opacity-50":!o(Te).is_enabled}),Z(ot,o(Te).display_name),Z(Lt,`${o(Te).filename??""} · ${Et??""}`),pt(Ye,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${o(Te).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),Oe(Ye,"title",o(Te).is_enabled?"Disable":"Enable"),Ye.disabled=o(u),Oe(Ct,"title",`Delete ${o(Te).display_name??""}`),Ct.disabled=o(u)},[()=>x(o(Te).file_size)]),ne("click",Ye,()=>se(o(Te))),ne("click",Ct,()=>ee(o(Te))),F(_e,qe)},_e=>{var Te=Xc(),qe=I(Te),je=I(qe);{var rt=ot=>{var It=Gi("Loading mods…");F(ot,It)},Mt=ot=>{var It=Gi("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");F(ot,It)};Le(je,ot=>{o(u)?ot(rt):ot(Mt,-1)})}F(_e,Te)});var ae=M(be,2);{var Re=_e=>{var Te=Do(),qe=K(Te,!0);me(()=>Z(qe,o(d))),F(_e,Te)};Le(ae,_e=>{o(d)&&_e(Re)})}var De=M(ae,2),O=I(De),ye=M(O,2),ce=I(ye);Ei(ce,{emoji:"📂"}),me(()=>{Z(xe,`Installed (${o(c).length??""})`),q.disabled=o(u),O.disabled=o(u),ye.disabled=!n(),Oe(ye,"title",n()?"Opens the instance mods folder":"Storage unknown")}),ne("click",q,z),Kt(L,()=>o(h),_e=>g(h,_e)),ne("click",ue,()=>g(f,!0)),ne("click",O,Ee),ne("click",ye,()=>H(C("mods"))),F(_,U)},Fe=_=>{var U=Gv(),k=M(Tt(U),4);Rt(k,21,()=>o(b),q=>q.name,(q,L)=>{var ue=Bv(),be=I(ue),G=M(be,2),ae=K(G,!0);me((Re,De,O)=>{Oe(ue,"title",`${o(L).name??""} · ${Re??""} · ${De??""}`),Oe(be,"src",O),Oe(be,"alt",o(L).name),Oe(G,"title",o(L).name),Z(ae,o(L).name)},[()=>x(o(L).size),()=>E(o(L).modified),()=>j(C("screenshots",o(L).name))]),ne("click",ue,()=>le(o(L).name)),ne("keydown",ue,Re=>{(Re.key==="Enter"||Re.key===" ")&&(Re.preventDefault(),le(o(L).name))}),F(q,ue)},q=>{var L=zv(),ue=I(L);{var be=ae=>{var Re=Gi("Loading screenshots…");F(ae,Re)},G=ae=>{var Re=Gi("No screenshots yet — press F2 in game to capture one.");F(ae,Re)};Le(ue,ae=>{o(A)?ae(be):ae(G,-1)})}F(q,L)});var X=M(k,2);{var de=q=>{var L=Do(),ue=K(L,!0);me(()=>Z(ue,o(D))),F(q,L)};Le(X,q=>{o(D)&&q(de)})}var Se=M(X,2),xe=I(Se);Ei(xe,{emoji:"📂"}),ne("click",Se,()=>H(C("screenshots"))),F(_,U)},Ge=_=>{var U=Vv(),k=M(Tt(U),4),X=I(k);Rt(X,21,()=>o(T),be=>be.name,(be,G)=>{var ae=Hv(),Re=I(ae),De=I(Re),O=K(De,!0),ye=M(De,2),ce=K(ye),_e=M(Re),Te=K(_e);me((qe,je)=>{Oe(De,"title",o(G).name),Z(O,o(G).name),Z(ce,`${qe??""} · ${je??""}`)},[()=>x(o(G).size),()=>E(o(G).modified)]),ne("click",Te,()=>H(C("logs",o(G).name))),F(be,ae)},be=>{var G=Xc(),ae=I(G),Re=I(ae);{var De=ye=>{var ce=Gi("Loading logs…");F(ye,ce)},O=ye=>{var ce=Gi("No log files yet — logs appear after the first launch.");F(ye,ce)};Le(Re,ye=>{o(A)?ye(De):ye(O,-1)})}F(be,G)});var de=M(k,2);{var Se=be=>{var G=Do(),ae=K(G,!0);me(()=>Z(ae,o(D))),F(be,G)};Le(de,be=>{o(D)&&be(Se)})}var xe=M(de,2),q=I(xe),L=M(q,2),ue=I(L);Ei(ue,{emoji:"📂"}),ne("click",q,()=>e.onopenconsole?.()),ne("click",L,()=>H(C("logs"))),F(_,U)},He=_=>{var U=qv(),k=M(Tt(U),4),X=I(k),de=K(X,!0),Se=M(X,2),xe=I(Se),q=K(xe),L=M(xe,2),ue=K(L),be=M(k,2),G=M(I(be),4),ae=I(G),Re=K(ae),De=M(ae,2),O=M(De,2);{var ye=je=>{var rt=Wv();ne("click",rt,()=>p("")),F(je,rt)};Le(O,je=>{o(y)&&je(ye)})}var ce=M(G,2);{var _e=je=>{var rt=jv(),Mt=K(rt,!0);me(()=>Z(Mt,o(S))),F(je,rt)};Le(ce,je=>{o(S)&&je(_e)})}var Te=M(be,2);{var qe=je=>{var rt=Xv();F(je,rt)};Le(Te,je=>{t().loader_type==="Cleanroom"&&je(qe)})}me((je,rt,Mt,ot)=>{Z(de,t().name),Oe(Se,"title",je),Z(q,`Game folder: ${rt??""}`),Z(ue,`Mods folder: ${Mt??""}`),Oe(Re,"src",ot)},[()=>C(),()=>C(),()=>C("mods"),()=>m()]),ne("click",De,()=>g(v,!0)),F(_,U)};Le(ze,_=>{o(s)==="components"?_(ge):o(s)==="mods"?_(we,1):o(s)==="screenshots"?_(Fe,2):o(s)==="logs"?_(Ge,3):_(He,-1)})}var Ze=M(Q,2);{var lt=_=>{{let U=st(()=>o(y)?"":m());Rf(_,{get currentKey(){return o(y)},get currentPath(){return o(U)},onpick:k=>{p(k),g(v,!1)},oncustom:w,onclose:()=>g(v,!1)})}};Le(Ze,_=>{o(v)&&_(lt)})}var Ue=M(Ze,2);{var P=_=>{Dv(_,{get instance(){return t()},onclose:()=>g(f,!1),oninstalled:()=>z()})};Le(Ue,_=>{o(f)&&_(P)})}me(()=>{Oe(ke,"title",t().name),Z(Be,t().name),Z(gt,`${t().minecraft_version??""} · ${t().loader_type??""}`)}),ne("click",Pe,function(..._){e.onback?.apply(this,_)}),F(i,Ae),$t()}fn(["click","keydown"]);var Zv=W('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),Jv=W('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),Qv=W('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),$v=W('<p class="mt-3 text-[12px] text-red-400"> </p>'),eg=W(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),tg=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function ng(i,e){Qt(e,!0);let t=ie(null),n=ie(""),r=ie(""),a=ie(!1),l=ie("");function s(w){return w>=1024*1024?`${(w/1024/1024).toFixed(1)} MB`:w>=1024?`${(w/1024).toFixed(0)} KB`:`${w} B`}function c(){return!o(t)||!o(t).loader?"Vanilla":o(t).loader[0].toUpperCase()+o(t).loader.slice(1)+(o(t).loader_version?` ${o(t).loader_version}`:" (latest stable)")}Pi(async()=>{const w=Ca(()=>e.onclose?.());try{g(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),g(r,o(t).name,!0)}catch(b){g(n,String(b),!0)}return()=>Pa(w)});async function u(){if(!o(a)){g(a,!0),g(l,"");try{const w=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:o(r).trim()});e.oninstalled?.(w)}catch(w){g(l,String(w),!0)}finally{g(a,!1)}}}var d=tg(),h=I(d),f=I(h),v=M(I(f),2),y=M(f,2);{var S=w=>{var b=Zv(),T=I(b),A=K(T,!0),D=M(T,2),C=K(D,!0);me(()=>{Z(A,o(n)),Oe(D,"title",e.path),Z(C,e.path)}),F(w,b)},m=w=>{var b=Jv();F(w,b)},p=w=>{var b=eg(),T=Tt(b),A=I(T),D=I(A),C=K(D,!0),j=M(D,2);{var x=Ne=>{var ke=Qv(),Be=K(ke,!0);me(()=>Z(Be,o(t).summary)),F(Ne,ke)};Le(j,Ne=>{o(t).summary&&Ne(x)})}var E=M(j,2),te=I(E),z=K(te),N=M(te,2),B=K(N,!0),V=M(N,2),he=K(V),se=M(V,2),ee=K(se,!0),Ee=M(A,4),Y=M(Ee,2);{var H=Ne=>{var ke=$v(),Be=K(ke,!0);me(()=>Z(Be,o(l))),F(Ne,ke)};Le(Y,Ne=>{o(l)&&Ne(H)})}var le=M(T,2),Ae=I(le),Me=M(Ae,2),Pe=K(Me,!0);me((Ne,ke,Be)=>{Oe(D,"title",o(t).name),Z(C,o(t).name),Z(z,`MC ${(o(t).game_version||"?")??""}`),Z(B,Ne),Oe(V,"title",`${o(t).download_count??""} downloaded, ${o(t).override_count??""} overrides extracted`),Z(he,`${o(t).file_count??""} files`),Z(ee,ke),Me.disabled=Be,Z(Pe,o(a)?"Installing…":"Install Modpack")},[()=>c(),()=>s(o(t).archive_size),()=>o(a)||!o(r).trim()]),Kt(Ee,()=>o(r),Ne=>g(r,Ne)),ne("click",Ae,()=>e.onclose?.()),ne("click",Me,u),F(w,b)};Le(y,w=>{o(n)?w(S):o(t)?w(p,-1):w(m,1)})}ne("click",d,w=>{w.target===w.currentTarget&&e.onclose?.()}),ne("click",v,()=>e.onclose?.()),F(i,d),$t()}fn(["click"]);var ig=W('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),rg=W('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),qc=W("<option> </option>"),ag=W('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),sg=W('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),og=W('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),lg=W('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),cg=W('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),ug=W('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),dg=W('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),fg=W('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),hg=W('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),pg=W('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),mg=W('<p class="mt-1.5 font-medium">Cleanroom only runs Minecraft 1.12.2 — select that version to continue.</p>'),vg=W(`<div role="alert" class="mt-2 rounded border border-red-500/40 bg-red-500/10 p-2.5 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
                it works — it is prone to crashes and only a limited subset of Forge mods support it.</p> <!></div>`),gg=W('<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400"> <strong>Fabric</strong>.</div>'),_g=W(`<p role="status" class="mt-2 rounded border border-amber-500/20 bg-amber-500/5 p-2 text-[11px] text-amber-400"> <strong>Legacy Fabric</strong> is
              the recommended loader for it.</p>`),xg=W(`<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400">Blind Mode Notice: Vanilla Minecraft's built-in Narrator lacks 3D world navigation and
              block inspection. We strongly recommend selecting <strong>Fabric</strong> or <strong>Quilt</strong> with Minecraft Access.</div>`),bg=W('<label class="flex cursor-pointer items-start gap-2 text-[12px]"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent)"/> <span><span> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span></label>'),yg=W('<section class="mt-3 border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Accessibility mods</h4> <p class="mt-0.5 text-[10px] text-(--text-muted)"> </p> <div class="mt-1.5 flex flex-col gap-1.5"></div></section>'),Sg=W('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),Mg=W('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Eg=W('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),wg=W('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),Tg=W('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),Ag=W('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),Rg=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!> <!> <!> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div> <!>',1);function Cg(i,e){Qt(e,!0);let t=Qe(e,"groups",19,()=>[]),n=Qe(e,"blindMode",3,!1),r=Qe(e,"deafMode",3,!1);const a=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],l=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"cleanroom",label:"Cleanroom"},{id:"fabric",label:"Fabric"},{id:"legacyfabric",label:"Legacy Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],s=["","fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],c=["fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],u="1.13.2";function d(pe,Ce){const We=$e=>String($e??"").split(".").map(zt=>parseInt(zt,10)||0),dt=We(pe),tt=We(Ce);for(let $e=0;$e<Math.max(dt.length,tt.length);$e+=1){const zt=dt[$e]??0,wt=tt[$e]??0;if(zt!==wt)return zt<wt}return!0}const h=st(()=>!!o(b)&&d(o(b),u)),f=st(()=>o(x)==="cleanroom"&&o(b)!=="1.12.2"),v="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let y=ie(null),S=ie(!0),m=ie(""),p=ie(""),w=ie(Ut(new Set(["release"]))),b=ie(""),T=ie(""),A=ie(""),D=ie(""),C=ie(""),j=ie(!1),x=ie(""),E=ie(""),te=ie(Ut([])),z=ie("idle"),N=0,B=ie(!1),V=ie("");const he=[{id:"minecraft-access",label:"Minecraft Access",hint:"Core: screen reader & 3D spatial navigation"},{id:"sound-physics-remastered",label:"Sound Physics Remastered",hint:"Optional: spatial acoustics & directional echoes"}],se=[{id:"echosight",label:"EchoSight",hint:"Directional sound radar & priority subtitles"},{id:"subtitles-visualizer",label:"Subtitles Visualizer",hint:"In-world directional subtitle markers"},{id:"visible-sound",label:"Visible Sound",hint:"In-world block/entity sound highlights"},{id:"soundsight",label:"SoundSight",hint:"Visual threat ring & enhanced subtitles"}];let ee=ie(Ut(new Set(["minecraft-access"])));const Ee=st(()=>[...n()?he:[],...r()?se:[]]);tn(()=>{g(ee,new Set(n()&&(o(x)==="fabric"||o(x)==="quilt")?["minecraft-access"]:[]),!0)});function Y(pe){const Ce=new Set(o(ee));Ce.has(pe)?Ce.delete(pe):Ce.add(pe),g(ee,Ce,!0)}function H(pe,Ce){const We=window.__TAURI__?.core;return We?We.invoke(pe,Ce):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const le=st(()=>{const pe=o(y)?.versions??[],Ce=o(p).trim().toLowerCase();return pe.filter(We=>o(w).has(We.version_type)&&(!Ce||We.id.toLowerCase().includes(Ce)))}),Ae=st(()=>!s.includes(o(x))),Me=st(()=>c.includes(o(x))),Pe=st(()=>!!o(b)&&!o(Ae)&&!o(f)&&!o(B)&&!(o(Me)&&o(z)==="loading"));function Ne(pe){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[pe]??pe}function ke(pe){if(!pe)return"—";const Ce=new Date(pe);if(Number.isNaN(Ce.getTime()))return String(pe).slice(0,10);const We=dt=>String(dt).padStart(2,"0");return`${We(Ce.getDate())}/${We(Ce.getMonth()+1)}/${Ce.getFullYear()}`}function Be(pe){const Ce=new Set(o(w));Ce.has(pe)?Ce.delete(pe):Ce.add(pe),g(w,Ce,!0)}function et(){const pe=vo(o(C));if(pe)return pe;const Ce=window.__TAURI__?.core?.convertFileSrc;return o(D)&&Ce?Ce(o(D)):null}async function gt(){const pe=window.__TAURI__?.dialog?.open;if(!pe){g(V,"Image picker unavailable in this build.");return}try{const Ce=await pe({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});return Ce&&(g(C,""),g(D,String(Ce),!0),g(V,"")),Ce?String(Ce):null}catch(Ce){return g(V,String(Ce),!0),null}}async function Ke(){if(!o(Me)||!o(b))return;const pe=++N;g(z,"loading");try{const Ce=await H("fetch_loader_versions",{loader:o(x),gameVersion:o(b)});if(pe!==N)return;g(te,Ce,!0),g(E,Ce.find(We=>We.stable)?.version??Ce[0]?.version??"",!0),g(z,Ce.length?"idle":"error",!0)}catch{if(pe!==N)return;g(te,[],!0),g(E,""),g(z,"error")}}async function Q(pe){g(b,pe,!0),!o(x)&&d(pe,u)&&g(x,"legacyfabric"),o(Me)&&await Ke()}async function _t(pe){g(x,pe,!0),g(E,""),g(te,[],!0),g(z,"idle"),o(Me)&&await Ke()}async function ze(){g(S,!0),g(m,"");try{g(y,await H("fetch_vanilla_versions"),!0)}catch(pe){g(m,String(pe),!0)}finally{g(S,!1)}}async function ge(){if(!o(Pe))return;g(B,!0),g(V,"");const pe=o(b),Ce=o(T).trim()||pe;try{const We=await H("create_instance",{name:Ce,version:pe,loader:o(x)||null,loaderVersion:o(E).trim()||null});let dt="";if(o(C))try{await H("set_instance_icon_key",{instanceId:We.id,iconKey:o(C)})}catch(tt){dt=`Instance created, but the icon could not be applied: ${tt}`}else if(o(D))try{await H("set_instance_icon",{instanceId:We.id,imagePath:o(D)})}catch(tt){dt=`Instance created, but the icon could not be applied: ${tt}`}if(o(A).trim())try{await H("set_instance_group",{instanceId:We.id,group:o(A).trim()})}catch(tt){dt=dt?`${dt} The group could not be set: ${tt}`:`Instance created, but the group could not be set: ${tt}`}for(const tt of o(ee))try{await H("install_mod_with_deps",{instanceId:We.id,projectId:tt,gameVersion:pe,loader:o(x)})}catch($e){dt=dt?`${dt} ${tt} could not be installed: ${$e}`:`Instance created, but ${tt} could not be installed: ${$e}`}e.oncreated?.(We,dt)}catch(We){g(V,String(We),!0)}finally{g(B,!1)}}function we(){window.__TAURI__?.core?.invoke("open_path",{path:v}).catch(pe=>g(V,String(pe),!0))}Pi(()=>{const pe=Ca(()=>e.onclose?.());return ze(),()=>Pa(pe)});var Fe=Rg(),Ge=Tt(Fe),He=I(Ge),Ze=I(He),lt=I(Ze),Ue=I(lt);{var P=pe=>{var Ce=ig(),We=Tt(Ce);me(dt=>Oe(We,"src",dt),[()=>et()]),F(pe,Ce)},_=st(()=>et()),U=pe=>{var Ce=rg();F(pe,Ce)};Le(Ue,pe=>{o(_)?pe(P):pe(U,-1)})}var k=M(lt,2),X=I(k),de=M(X,2),Se=M(I(de),2),xe=I(Se);xe.value=xe.__value="";var q=M(xe);Rt(q,16,t,pe=>pe,(pe,Ce)=>{var We=qc(),dt=K(We,!0),tt={};me(()=>{Z(dt,Ce),tt!==(tt=Ce)&&(We.value=(We.__value=tt)??"")}),F(pe,We)}),_a(Se);var L=M(k,2),ue=M(Ze,2),be=I(ue),G=I(be),ae=I(G);{var Re=pe=>{var Ce=ag();F(pe,Ce)},De=pe=>{var Ce=sg(),We=I(Ce),dt=K(We,!0),tt=M(We,2);me(()=>Z(dt,o(m))),ne("click",tt,ze),F(pe,Ce)},O=pe=>{var Ce=ug(),We=M(I(Ce));Rt(We,21,()=>o(le),dt=>dt.id,(dt,tt)=>{var $e=lg(),zt=I($e),wt=I(zt),nn=K(wt,!0),Fn=M(wt,2);{var rn=Xt=>{var ai=og();F(Xt,ai)};Le(Fn,Xt=>{o(tt).is_latest_release&&Xt(rn)})}var An=M(zt),Gt=K(An,!0),Rn=M(An),Bn=K(Rn,!0);me((Xt,ai)=>{pt($e,1,`cursor-pointer border-b border-(--border)/50 ${o(b)===o(tt).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),Z(nn,o(tt).id),Z(Gt,Xt),Z(Bn,ai)},[()=>ke(o(tt).release_time),()=>Ne(o(tt).version_type)]),ne("click",$e,()=>Q(o(tt).id)),ne("keydown",$e,Xt=>{(Xt.key==="Enter"||Xt.key===" ")&&(Xt.preventDefault(),Q(o(tt).id))}),F(dt,$e)},dt=>{var tt=cg();F(dt,tt)}),F(pe,Ce)};Le(ae,pe=>{o(S)?pe(Re):o(m)?pe(De,1):pe(O,-1)})}var ye=M(G,2),ce=I(ye),_e=M(ce,2),Te=K(_e),qe=M(be,2),je=I(qe),rt=M(I(je),2);Rt(rt,21,()=>a,pe=>pe.id,(pe,Ce)=>{var We=dg(),dt=I(We),tt=M(dt,2),$e=K(tt,!0);me(zt=>{Qa(dt,zt),Z($e,o(Ce).label)},[()=>o(w).has(o(Ce).id)]),ne("change",dt,()=>Be(o(Ce).id)),F(pe,We)});var Mt=M(je,2),ot=M(I(Mt),2);Rt(ot,21,()=>l,pe=>pe.id,(pe,Ce)=>{var We=fg(),dt=I(We),tt=M(dt,2),$e=K(tt,!0);me(()=>{ss(dt,o(Ce).id),Qa(dt,o(x)===o(Ce).id),Z($e,o(Ce).label)}),ne("change",dt,()=>_t(o(Ce).id)),F(pe,We)});var It=M(ot,2);{var Lt=pe=>{var Ce=hg();F(pe,Ce)},xt=pe=>{var Ce=pg();F(pe,Ce)};Le(It,pe=>{o(Ae)?pe(Lt):o(x)||pe(xt,1)})}var Ye=M(It,2);{var vt=pe=>{var Ce=vg(),We=M(I(Ce),4);{var dt=tt=>{var $e=mg();F(tt,$e)};Le(We,tt=>{o(f)&&tt(dt)})}F(pe,Ce)};Le(Ye,pe=>{o(x)==="cleanroom"&&pe(vt)})}var Ct=M(Ye,2);{var Et=pe=>{var Ce=gg(),We=I(Ce);We.nodeValue=`Legacy Fabric targets Minecraft 1.13.2 and older; newer versions should use
              regular `,F(pe,Ce)},Ot=pe=>{var Ce=_g(),We=I(Ce);me(()=>Z(We,`Minecraft ${o(b)??""} predates modern Fabric — `)),F(pe,Ce)};Le(Ct,pe=>{o(x)==="legacyfabric"&&!o(h)?pe(Et):o(x)===""&&o(h)&&pe(Ot,1)})}var Vt=M(Ct,2);{var mt=pe=>{var Ce=xg();F(pe,Ce)};Le(Vt,pe=>{n()&&(o(x)===""||o(x)==="horizon")&&pe(mt)})}var ut=M(Vt,2);{var Je=pe=>{var Ce=yg(),We=M(I(Ce),2),dt=K(We),tt=M(We,2);Rt(tt,21,()=>o(Ee),$e=>$e.id,($e,zt)=>{var wt=bg(),nn=I(wt),Fn=M(nn,2),rn=I(Fn),An=K(rn,!0),Gt=M(rn,2),Rn=K(Gt,!0);me(Bn=>{Qa(nn,Bn),Z(An,o(zt).label),Z(Rn,o(zt).hint)},[()=>o(ee).has(o(zt).id)]),ne("change",nn,()=>Y(o(zt).id)),F($e,wt)}),me(()=>Z(dt,`Installed right after the instance is created.
                ${o(x)==="quilt"?"Dependencies resolve through QFAPI.":""}`)),F(pe,Ce)};Le(ut,pe=>{(o(x)==="fabric"||o(x)==="quilt")&&o(Ee).length&&pe(Je)})}var R=M(ut,2);{var J=pe=>{var Ce=wg(),We=M(Tt(Ce),2);{var dt=zt=>{var wt=Sg();F(zt,wt)},tt=zt=>{var wt=Mg(),nn=Tt(wt);Kt(nn,()=>o(E),Fn=>g(E,Fn)),F(zt,wt)},$e=zt=>{var wt=Eg(),nn=I(wt);nn.value=nn.__value="";var Fn=M(nn);Rt(Fn,17,()=>o(te),rn=>rn.version,(rn,An)=>{var Gt=qc(),Rn=K(Gt),Bn={};me(()=>{Z(Rn,`${o(An).version??""}${o(An).stable?"":" (unstable)"}`),Bn!==(Bn=o(An).version)&&(Gt.value=(Gt.__value=Bn)??"")}),F(rn,Gt)}),_a(wt),xa(wt,()=>o(E),rn=>g(E,rn)),F(zt,wt)};Le(We,zt=>{o(z)==="loading"?zt(dt):o(z)==="error"?zt(tt,1):zt($e,-1)})}F(pe,Ce)};Le(R,pe=>{o(Me)&&pe(J)})}var fe=M(ue,2),oe=I(fe),ve=M(oe,2);{var Xe=pe=>{var Ce=Tg(),We=K(Ce,!0);me(()=>{Oe(Ce,"title",o(V)),Z(We,o(V))}),F(pe,Ce)},it=pe=>{var Ce=Ag(),We=K(Ce,!0);me(()=>Z(We,o(b)?`Selected Minecraft ${o(b)}`:"Pick a version to continue")),F(pe,Ce)};Le(ve,pe=>{o(V)?pe(Xe):pe(it,-1)})}var ft=M(ve,2),ct=M(ft,2),yt=K(ct,!0),ht=M(Ge,2);{var bt=pe=>{{let Ce=st(()=>et()??"");Rf(pe,{get currentKey(){return o(C)},get currentPath(){return o(Ce)},onpick:We=>{g(C,We,!0),g(D,""),g(j,!1)},oncustom:async()=>{const We=await gt();return We&&g(C,""),We},onclose:()=>g(j,!1)})}};Le(ht,pe=>{o(j)&&pe(bt)})}me(()=>{Oe(X,"placeholder",o(b)?`Instance name (${o(b)})`:"Instance name"),ce.disabled=!o(y),Z(Te,`${o(le).length??""} shown`),ct.disabled=!o(Pe),Oe(ct,"title",o(Ae)?"This mod loader is not supported yet.":"Create the instance"),Z(yt,o(B)?"Creating…":"OK")}),ne("click",Ge,pe=>{pe.target===pe.currentTarget&&e.onclose?.()}),ne("click",lt,()=>g(j,!0)),Kt(X,()=>o(T),pe=>g(T,pe)),xa(Se,()=>o(A),pe=>g(A,pe)),ne("click",L,()=>e.onclose?.()),Kt(ce,()=>o(p),pe=>g(p,pe)),ne("click",oe,we),ne("click",ft,()=>e.onclose?.()),ne("click",ct,ge),F(i,Fe),$t()}fn(["click","keydown","change"]);var Pg=W('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Lg=W('<button class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game"><!> Kill</button>'),Ig=W("<button> </button>"),Dg=W('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Ug=W('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><div class="flex items-start justify-between gap-2"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <button type="button" class="rounded p-1 text-[13px] leading-none text-(--text-muted) transition-colors hover:bg-(--bg-subtle) hover:text-(--text-main) focus-visible:ring-1 focus-visible:ring-(--accent) focus-visible:outline-none" title="Close panel (Esc)" aria-label="Clear selection and close the instance panel">✕</button></div> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"><!> Launch</button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip"><!> Export</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance"><!> Copy</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"><!> Delete</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance"><!> Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Ng(i,e){Qt(e,!0);let t=Qe(e,"storage",3,null),n=Qe(e,"gameRunning",3,!1),r=Qe(e,"modsCount",3,null),a=Qe(e,"groups",19,()=>[]),l=ie(!1),s=ie("");const c=st(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function u(){const Ue=vo(e.instance.icon_key);if(Ue)return Ue;const P=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&P?P(e.instance.icon_path):"/logo.png"}function d(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function h(Ue){const P=new Date(Ue*1e3),_=U=>String(U).padStart(2,"0");return`${_(P.getDate())}/${_(P.getMonth()+1)}/${P.getFullYear()} ${_(P.getHours())}:${_(P.getMinutes())}:${_(P.getSeconds())}`}function f(Ue){const P=Math.max(0,Math.floor(Ue)),_=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],U=[];let k=P;for(const[X,de]of _){const Se=Math.floor(k/X);if(Se&&(U.push(`${Se} ${de}${Se===1?"":"s"}`),k-=Se*X,U.length===2))break}return U.length?U.join(" "):"0 seconds"}const v=st(()=>{const Ue=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${Ue}, last played on ${h(e.instance.last_played)}, total played for ${f(e.instance.total_time_played)}`:Ue});function y(Ue){g(l,!1),g(s,""),e.onchangegroup?.(Ue.trim()?Ue.trim():null)}var S=Ug(),m=I(S),p=I(m),w=K(p),b=M(p,2),T=M(m,2),A=K(T,!0),D=M(T,2),C=I(D),j=K(C,!0),x=M(C,2),E=K(x,!0),te=M(x,2);{var z=Ue=>{var P=Pg(),_=K(P);me(()=>Z(_,`▤ ${e.instance.group??""}`)),F(Ue,P)};Le(te,Ue=>{e.instance.group&&Ue(z)})}var N=M(D,2),B=K(N,!0),V=M(N,2),he=I(V),se=I(he);jt(se,{name:"launch",size:13});var ee=M(he,2);{var Ee=Ue=>{var P=Lg(),_=I(P);jt(_,{name:"kill",size:13}),ne("click",P,function(...U){e.onkill?.apply(this,U)}),F(Ue,P)};Le(ee,Ue=>{n()&&Ue(Ee)})}var Y=M(ee,2),H=I(Y);jt(H,{name:"edit",size:13});var le=M(Y,2),Ae=M(I(le),2),Me=K(Ae,!0),Pe=M(le,2);{var Ne=Ue=>{var P=Dg(),_=I(P),U=M(_,2);Rt(U,16,a,Se=>Se,(Se,xe)=>{var q=Ig(),L=K(q,!0);me(()=>{pt(q,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===xe?"font-medium text-(--accent)":"text-(--text-muted)"}`),Z(L,xe)}),ne("click",q,()=>y(xe)),F(Se,q)});var k=M(U,2),X=I(k),de=M(X,2);me(Se=>{pt(_,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),de.disabled=Se},[()=>!o(s).trim()]),ne("click",_,()=>y("")),ne("keydown",X,Se=>{Se.key==="Enter"&&o(s).trim()&&y(o(s))}),Kt(X,()=>o(s),Se=>g(s,Se)),ne("click",de,()=>y(o(s))),F(Ue,P)};Le(Pe,Ue=>{o(l)&&Ue(Ne)})}var ke=M(Pe,2),Be=I(ke);jt(Be,{name:"folder",size:13});var et=M(ke,2),gt=I(et);jt(gt,{name:"export",size:13});var Ke=M(et,2),Q=I(Ke);jt(Q,{name:"copy",size:13});var _t=M(Ke,2),ze=I(_t);jt(ze,{name:"delete",size:13});var ge=M(_t,2),we=I(ge);jt(we,{name:"shortcut",size:13});var Fe=M(V,2),Ge=I(Fe),He=K(Ge,!0),Ze=M(Ge,2),lt=K(Ze);me((Ue,P,_)=>{Oe(w,"src",Ue),Oe(T,"title",e.instance.name),Z(A,e.instance.name),Z(j,e.instance.minecraft_version),pt(x,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${o(c)??""}`),Z(E,e.instance.loader_type),Oe(N,"title",P),Z(B,_),he.disabled=n(),Oe(he,"title",n()?"A game is already running":`Launch ${e.instance.name}`),Z(Me,o(l)?"▴":"▾"),ke.disabled=!t(),Oe(ke,"title",t()?"Opens the instance folder":"Storage unknown"),Z(He,o(v)),Z(lt,`${r()??"…"??""} mods installed`)},[()=>u(),()=>d(),()=>d()]),Xn("error",w,Ue=>{Ue.currentTarget.dataset.f||(Ue.currentTarget.dataset.f="1",Ue.currentTarget.src="/logo.png")}),ne("click",b,()=>e.onclose?.()),ne("click",he,function(...Ue){e.onlaunch?.apply(this,Ue)}),ne("click",Y,function(...Ue){e.onedit?.apply(this,Ue)}),ne("click",le,()=>g(l,!o(l))),ne("click",ke,function(...Ue){e.onopenfolder?.apply(this,Ue)}),ne("click",et,function(...Ue){e.onexport?.apply(this,Ue)}),ne("click",Ke,function(...Ue){e.oncopy?.apply(this,Ue)}),ne("click",_t,function(...Ue){e.ondelete?.apply(this,Ue)}),ne("click",ge,function(...Ue){e.onshortcut?.apply(this,Ue)}),F(i,S),$t()}fn(["click","keydown"]);var Og=W("<button></button>"),kg=W('<span class="text-[11px] text-rose-400">invalid hex</span>'),Fg=W('<span class="text-[11px] text-(--text-muted)">live preview</span>'),Bg=W('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function zg(i,e){Qt(e,!0);let t=Qe(e,"theme",3,"twilight-dark");const n=st(()=>ua(t())?.accent??Oc),r=st(()=>{const b=ua(t())?.suggested??[],T=(ua(t())?.accent??Oc).toLowerCase();return b.map(A=>({...A,isBuiltin:A.hex.toLowerCase()===T}))});let a=ie(Ut(wl())),l=ie(Ut(o(a)??o(n))),s=ie(!1);tn(()=>{t(),g(a,wl(),!0),g(l,o(a)??o(n),!0),g(s,!1)});function c(b){return o(a)===null?b.isBuiltin:o(a)===b.hex.toLowerCase()}function u(b){b.isBuiltin?(Wm(),g(a,null)):cs(b.hex)&&g(a,b.hex.toLowerCase(),!0),g(l,o(a)??o(n),!0),g(s,!1)}function d(b,T){const A=cs(b,{persist:T})?vs(b):null;A?(g(a,A,!0),g(s,!1)):g(s,!0)}var h=Bg(),f=Tt(h);Rt(f,21,()=>o(r),b=>b.hex,(b,T)=>{var A=Og();me((D,C)=>{pt(A,1,`h-7 w-7 rounded-full ${D??""}`),Ln(A,`background:${o(T).hex??""}`),Oe(A,"title",`${o(T).name??""}${o(T).isBuiltin?" (built-in)":""}`),Oe(A,"aria-label",`${o(T).name??""} accent`),Oe(A,"aria-pressed",C)},[()=>c(o(T))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>c(o(T))]),ne("click",A,()=>u(o(T))),F(b,A)});var v=M(f,2),y=I(v),S=M(y,2),m=M(S,2);{var p=b=>{var T=kg();F(b,T)},w=b=>{var T=Fg();F(b,T)};Le(m,b=>{o(s)?b(p):b(w,-1)})}me(()=>{ss(y,o(l)),ss(S,o(l)),Oe(S,"placeholder",o(n))}),ne("input",y,b=>{g(l,b.currentTarget.value,!0),d(o(l),!1)}),ne("change",y,b=>d(b.currentTarget.value,!0)),ne("input",S,b=>{g(l,b.currentTarget.value,!0),d(o(l),!1)}),ne("change",S,b=>d(b.currentTarget.value,!0)),F(i,h),$t()}fn(["click","input","change"]);var Gg=W('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Hg=W('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Vg=W('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),Wg=W('<button><span class="flex items-center gap-2"><!> <!> <!></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),jg=W('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),Yc=W('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),Xg=W(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Icon pack</h3> <p class="mt-1 text-[12px] text-(--text-muted)">The glyph set used across the launcher. Fluent (Auto) follows the theme.</p> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),Kc=W("<option> </option>"),qg=W('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Yg=W('<span class="text-amber-400">(selection not applied yet)</span>'),Kg=W('<p class="mt-1 text-[12px] text-(--accent)"> </p>'),Zg=W('<p role="alert" class="mt-1 text-[12px] text-rose-400"> </p>'),Jg=W('<span class="shrink-0 text-(--accent)">active</span>'),Qg=W('<li class="flex items-center justify-between gap-2 text-[11px] text-(--text-muted)"><span class="truncate font-mono"> </span> <!></li>'),$g=W('<ul class="mt-2 space-y-0.5"></ul>'),e_=W('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!><!></select> <!> <!> <div class="mt-3 flex flex-wrap items-center gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50">↻ Rescan JREs</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"> </button> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-50">Apply</button></div> <p class="mt-2 flex items-center gap-1.5 text-[11px] text-(--text-muted)"><span></span> Active runtime: <span class="font-mono"> </span> <!></p> <!> <!> <!> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),t_=W('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),n_=W('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),i_=W('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),r_=W('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),a_=W('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),s_=W(`<h2 class="text-[16px] font-semibold">Accessibility</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Assistive profiles that adapt suggestions, installs and pre-launch setup for screen-reader and caption users.</p> <div class="mt-6 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Blind Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Screen reader &amp; audio navigation. Suggests Minecraft Access and spatial-audio mods on
              Fabric; Fabric is strongly recommended over Vanilla or Horizon.</p></div> <button type="button" role="switch" aria-label="Blind Mode (screen reader and audio navigation): suggests Minecraft Access on Fabric and recommends Fabric over Vanilla or Horizon" title="Toggle Blind Mode"><span aria-hidden="true"></span></button></div> <div class="mt-4 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Deaf Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Closed captions &amp; visual sound cues. Enforces <span class="font-mono">showSubtitles:true</span> in <span class="font-mono">options.txt</span> before every launch and suggests visual-sound Fabric mods.</p></div> <button type="button" role="switch" aria-label="Deaf Mode (closed captions and visual sound cues): enforces showSubtitles true in options.txt before launch and suggests visual-sound Fabric mods" title="Toggle Deaf Mode"><span aria-hidden="true"></span></button></div> <p class="mt-4 text-[11px] text-(--text-muted)" aria-live="polite"> </p>`,1),o_=W('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),l_=W("<p> </p>"),c_=W('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div> <button class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Open the dedicated Accounts page"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <span class="truncate">Accounts</span></button></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function u_(i,e){Qt(e,!0);let t=Qe(e,"version",3,""),n=Qe(e,"theme",15,"twilight-dark"),r=Qe(e,"blindMode",15,!1),a=Qe(e,"deafMode",15,!1),l=Qe(e,"storage",3,null),s=Qe(e,"runtimes",19,()=>[]),c=Qe(e,"scanning",3,!1),u=Qe(e,"javaError",3,""),d=Qe(e,"javaPath",15,""),h=Qe(e,"javaCustomPaths",27,()=>Ut([])),f=Qe(e,"minMem",15,0),v=Qe(e,"maxMem",15,0);Qe(e,"sharedInput",11,""),Qe(e,"instancesInput",11,"");let y=Qe(e,"storageBusy",3,!1),S=Qe(e,"storageMsg",3,""),m=Qe(e,"javaMsg",3,""),p=Qe(e,"gameRunning",3,!1),w=ie(Ut([])),b=ie(""),T=ie(""),A=ie(!1),D=ie(Ut(d()));async function C(){const k=window.__TAURI__?.dialog?.open;if(!k){g(T,"File picker unavailable in this build.");return}g(T,""),g(b,"");try{const X=await k({multiple:!1,title:"Select a Java executable",filters:[{name:"Java",extensions:["exe",""]}]});if(!X)return;g(A,!0);const de=await window.__TAURI__.core.invoke("probe_java_path",{path:String(X)}),Se=await e.onaddjava?.(de.executable);Array.isArray(Se)&&g(w,Se,!0),g(b,`Added Java ${de.major} (${de.version})`)}catch(X){g(T,String(X),!0)}finally{g(A,!1)}}async function j(k){g(T,""),g(A,!0);try{await e.onapplyjava?.(k||null),g(D,k||"",!0),d(k||""),g(b,k?"Applied. Launches will use this runtime.":"Reverted to auto-discovery.",!0)}catch(X){g(T,String(X),!0)}finally{g(A,!1)}}tn(()=>{Array.isArray(h())&&g(w,h(),!0)});const x=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"accessibility",label:"Accessibility",icon:"♿"},{id:"about",label:"About & Updates",icon:"ℹ"}];let E=ie("appearance"),te=ie(Ut(so())),z=ie(Ut(Mr())),N=ie(""),B=ie(!0),V=ie(Ut(Gc())),he=ie(""),se=ie("");function ee(){g(V,Gc(),!0),g(se,"Loaded the active theme’s tokens — tweak and save.")}function Ee(){try{const k=zc({name:o(N),dark:o(B),tokens:o(V)});g(z,Mr(),!0),n(k.id),g(se,`Saved “${k.name}”.`)}catch(k){g(se,String(k),!0)}}function Y(k){Km(k),g(z,Mr(),!0),n()===k&&n(nc),g(se,"Theme deleted.")}function H(){g(he,JSON.stringify({name:o(N).trim()||"My theme",dark:o(B),tokens:o(V)},null,2),!0),g(se,"Theme JSON written below — copy it to share.")}function le(){try{const k=JSON.parse(o(he));if(!k||typeof k!="object"||Array.isArray(k))throw new Error("Expected a theme object.");const X=zc(k);g(z,Mr(),!0),n(X.id),g(se,`Imported “${X.name}”.`),g(he,"")}catch(k){g(se,`Import failed: ${k}`)}}async function Ae(k){const X=window.__TAURI__?.dialog?.open;if(!X)return null;try{const de=await X({directory:!0,multiple:!1,defaultPath:k&&k.trim()?k.trim():void 0});return typeof de=="string"?de:null}catch{return null}}const Me=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let Pe=ie(Ut({}));tn(()=>{l()&&g(Pe,{instances:l().is_default_instances?"":l().instances_dir,shared:l().is_default_shared?"":l().shared_dir,versions:l().is_default_versions?"":l().versions_dir,mods:l().is_default_mods?"":l().mods_dir,icons:l().is_default_icons?"":l().icons_dir,java:l().is_default_java?"":l().java_dir,skins:l().is_default_skins?"":l().skins_dir,downloads:l().downloads_dir||""},!0)});function Ne(k){return l()?k==="downloads"?l().staging_root:l()[`${k}_dir`]:""}function ke(k){return l()?k==="downloads"?l().is_default_staging:l()[`is_default_${k}`]:!0}const Be="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var et=c_(),gt=I(et),Ke=I(gt),Q=M(Ke,2);Rt(Q,21,()=>x,k=>k.id,(k,X)=>{var de=Gg(),Se=I(de),xe=I(Se);Ei(xe,{get emoji(){return o(X).icon},size:15});var q=M(Se,2),L=K(q,!0);me(()=>{pt(de,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${o(E)===o(X).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Oe(de,"aria-current",o(E)===o(X).id?"true":void 0),Z(L,o(X).label)}),ne("click",de,()=>g(E,o(X).id,!0)),F(k,de)});var _t=M(Q,2),ze=I(_t),ge=I(ze);jt(ge,{name:"accounts",size:15});var we=M(gt,2),Fe=I(we),Ge=I(Fe);{var He=k=>{var X=Xg(),de=M(Tt(X),6),Se=I(de);Rt(Se,17,()=>go,xt=>xt.id,(xt,Ye)=>{var vt=Hg(),Ct=I(vt),Et=I(Ct),Ot=M(Et,2),Vt=M(Ot,2),mt=M(Ct,2),ut=K(mt,!0),Je=M(mt,2),R=K(Je,!0);me(()=>{pt(vt,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===o(Ye).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Oe(vt,"aria-pressed",n()===o(Ye).id),Oe(vt,"title",`${o(Ye).label??""}: ${o(Ye).dark?"dark":"light"} ground`),Ln(Et,`background:${o(Ye).swatch[0]??""}`),Ln(Ot,`background:${o(Ye).swatch[1]??""}`),Ln(Vt,`background:${o(Ye).swatch[2]??""}`),Z(ut,o(Ye).label),Z(R,o(Ye).dark?"Dark ground":"Light ground")}),ne("click",vt,()=>n(o(Ye).id)),F(xt,vt)});var xe=M(Se,2);Rt(xe,17,()=>o(z),xt=>xt.id,(xt,Ye)=>{var vt=Vg(),Ct=I(vt),Et=I(Ct),Ot=M(Et,2),Vt=M(Ot,2),mt=M(Ct,2),ut=K(mt,!0),Je=M(mt,2),R=K(Je),J=M(Je,2);me(()=>{pt(vt,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===o(Ye).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Oe(vt,"title",`${o(Ye).name??""}: ${o(Ye).dark?"dark":"light"} ground`),Ln(Et,`background:${o(Ye).tokens.bg1??""}`),Ln(Ot,`background:${o(Ye).tokens.bg3??""}`),Ln(Vt,`background:${o(Ye).tokens.accent1??""}`),Z(ut,o(Ye).name),Z(R,`Custom · ${o(Ye).dark?"Dark":"Light"} ground`),Oe(J,"title",`Delete ${o(Ye).name??""}`),Oe(J,"aria-label",`Delete ${o(Ye).name??""}`)}),ne("click",vt,()=>n(o(Ye).id)),ne("keydown",vt,fe=>{(fe.key==="Enter"||fe.key===" ")&&(fe.preventDefault(),n(o(Ye).id))}),ne("click",J,fe=>{fe.stopPropagation(),Y(o(Ye).id)}),F(xt,vt)});var q=M(de,4),L=I(q);zg(L,{get theme(){return n()}});var ue=M(q,6);Rt(ue,21,()=>Lf,xt=>xt.id,(xt,Ye)=>{var vt=Wg(),Ct=I(vt),Et=I(Ct);jt(Et,{name:"instances",size:16,get pack(){return o(Ye).id}});var Ot=M(Et,2);jt(Ot,{name:"settings",size:16,get pack(){return o(Ye).id}});var Vt=M(Ot,2);jt(Vt,{name:"accounts",size:16,get pack(){return o(Ye).id}});var mt=M(Ct,2),ut=K(mt,!0),Je=M(mt,2),R=K(Je,!0);me(()=>{pt(vt,1,`flex flex-col items-start gap-2 rounded border p-2.5 text-left ${o(te)===o(Ye).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Oe(vt,"aria-pressed",o(te)===o(Ye).id),Oe(vt,"title",`${o(Ye).label??""}: ${o(Ye).hint??""}`),Z(ut,o(Ye).label),Z(R,o(Ye).hint)}),ne("click",vt,()=>{nv(o(Ye).id),g(te,so(),!0)}),F(xt,vt)});var be=M(ue,6),G=I(be),ae=I(G),Re=M(ae,2),De=I(Re),O=M(De,2),ye=M(G,2);Rt(ye,21,()=>Xm,xt=>xt.key,(xt,Ye)=>{var vt=jg(),Ct=I(vt),Et=K(Ct,!0),Ot=M(Ct,2),Vt=I(Ot),mt=M(Vt,2);me(()=>{Z(Et,o(Ye).label),ss(Vt,o(V)[o(Ye).key]),Oe(Vt,"title",`${o(Ye).label??""} color`),Oe(Vt,"aria-label",`${o(Ye).label??""} color`),ss(mt,o(V)[o(Ye).key]),Oe(mt,"aria-label",`${o(Ye).label??""} hex`)}),ne("input",Vt,ut=>g(V,{...o(V),[o(Ye).key]:ut.currentTarget.value},!0)),ne("input",mt,ut=>g(V,{...o(V),[o(Ye).key]:ut.currentTarget.value},!0)),F(xt,vt)});var ce=M(ye,2),_e=I(ce),Te=M(_e,2),qe=M(be,4),je=I(qe),rt=M(je,2),Mt=I(rt),ot=M(Mt,2),It=M(qe,2);{var Lt=xt=>{var Ye=Yc(),vt=K(Ye,!0);me(()=>Z(vt,o(se))),F(xt,Ye)};Le(It,xt=>{o(se)&&xt(Lt)})}me(()=>{pt(De,1,`px-3 py-1.5 text-[12px] ${o(B)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Oe(De,"aria-pressed",o(B)),pt(O,1,`px-3 py-1.5 text-[12px] ${o(B)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),Oe(O,"aria-pressed",!o(B))}),Kt(ae,()=>o(N),xt=>g(N,xt)),ne("click",De,()=>g(B,!0)),ne("click",O,()=>g(B,!1)),ne("click",_e,ee),ne("click",Te,Ee),Kt(je,()=>o(he),xt=>g(he,xt)),ne("click",Mt,H),ne("click",ot,le),F(k,X)},Ze=k=>{var X=e_(),de=M(Tt(X),6),Se=I(de);Se.value=Se.__value="";var xe=M(Se);Rt(xe,17,s,Je=>Je.executable,(Je,R)=>{var J=Kc(),fe=K(J),oe={};me(()=>{Z(fe,`Java ${o(R).major??""} — ${o(R).home??""}`),oe!==(oe=o(R).executable)&&(J.value=(J.__value=oe)??"")}),F(Je,J)});var q=M(xe);Rt(q,16,()=>o(w).filter(Je=>!s().some(R=>R.executable===Je)),Je=>Je,(Je,R)=>{var J=Kc(),fe=K(J),oe={};me(()=>{Z(fe,`Custom — ${R??""}`),oe!==(oe=R)&&(J.value=(J.__value=oe)??"")}),F(Je,J)}),_a(de);var L=M(de,2);{var ue=Je=>{var R=Yc(),J=K(R,!0);me(()=>Z(J,c()?"Probing system roots…":"No runtimes detected.")),F(Je,R)};Le(L,Je=>{s().length||Je(ue)})}var be=M(L,2);{var G=Je=>{var R=qg(),J=K(R,!0);me(()=>Z(J,u())),F(Je,R)};Le(be,Je=>{u()&&Je(G)})}var ae=M(be,2),Re=I(ae),De=M(Re,2),O=K(De,!0),ye=M(De,2),ce=M(ae,2),_e=I(ce),Te=M(_e,2),qe=K(Te,!0),je=M(Te,2);{var rt=Je=>{var R=Yg();F(Je,R)};Le(je,Je=>{d()!==o(D)&&Je(rt)})}var Mt=M(ce,2);{var ot=Je=>{var R=Kg(),J=K(R,!0);me(()=>Z(J,o(b))),F(Je,R)};Le(Mt,Je=>{o(b)&&Je(ot)})}var It=M(Mt,2);{var Lt=Je=>{var R=Zg(),J=K(R,!0);me(()=>Z(J,o(T))),F(Je,R)};Le(It,Je=>{o(T)&&Je(Lt)})}var xt=M(It,2);{var Ye=Je=>{var R=$g();Rt(R,20,()=>o(w),J=>J,(J,fe)=>{var oe=Qg(),ve=I(oe),Xe=K(ve,!0),it=M(ve,2);{var ft=ct=>{var yt=Jg();F(ct,yt)};Le(it,ct=>{o(D)===fe&&ct(ft)})}me(()=>{Oe(ve,"title",fe),Z(Xe,fe)}),F(J,oe)}),F(Je,R)};Le(xt,Je=>{o(w).length&&Je(Ye)})}var vt=M(xt,4),Ct=M(I(vt),2),Et=M(Ct,2),Ot=M(vt,2),Vt=M(I(Ot),2),mt=M(Vt,2),ut=M(Ot,4);me(()=>{Re.disabled=c(),De.disabled=o(A),Z(O,o(A)?"Checking…":"Browse / Add Custom Java…"),ye.disabled=o(A)||d()===o(D),pt(_e,1,`inline-block h-1.5 w-1.5 rounded-full ${o(D)?"bg-(--accent)":"bg-(--text-muted)"}`),Z(qe,o(D)||"auto-discovery")}),xa(de,d),ne("click",Re,function(...Je){e.onscanjava?.apply(this,Je)}),ne("click",De,C),ne("click",ye,()=>j(d())),Kt(Ct,f),Kt(Et,f),Kt(Vt,v),Kt(mt,v),ne("click",ut,function(...Je){e.onsaveprefs?.apply(this,Je)}),F(k,X)},lt=k=>{var X=a_(),de=M(Tt(X),4);{var Se=xe=>{var q=r_(),L=Tt(q),ue=I(L),be=I(ue),G=M(I(be),2),ae=K(G,!0),Re=M(be,2),De=M(L,2);Rt(De,17,()=>Me,O=>O.key,(O,ye)=>{var ce=i_(),_e=I(ce),Te=I(_e),qe=I(Te),je=M(qe),rt=K(je,!0),Mt=M(Te,2);{var ot=ut=>{var Je=t_();me(()=>Je.disabled=y()),ne("click",Je,()=>e.onsavefolder?.(o(ye).key,"")),F(ut,Je)},It=st(()=>!ke(o(ye).key));Le(Mt,ut=>{o(It)&&ut(ot)})}var Lt=M(_e,2),xt=K(Lt,!0),Ye=M(Lt,2),vt=I(Ye),Ct=M(vt,2),Et=M(Ct,2),Ot=M(Et,2),Vt=M(Ye,2);{var mt=ut=>{var Je=n_(),R=I(Je),J=K(R),fe=M(R,2);me(()=>{Oe(R,"title",l().staging_root),Z(J,`Staging: ${l().staging_root??""}`),fe.disabled=y()||p(),Oe(fe,"title",p()?"Unavailable while a game is running":"Purges the staging area")}),ne("click",fe,function(...oe){e.oncleanstaging?.apply(this,oe)}),F(ut,Je)};Le(Vt,ut=>{o(ye).key==="downloads"&&ut(mt)})}me((ut,Je)=>{Z(qe,`${o(ye).label??""} `),Z(rt,ut),Z(xt,o(ye).hint),Oe(vt,"placeholder",Je),Ot.disabled=y()},[()=>ke(o(ye).key)?"(default)":"(custom)",()=>Ne(o(ye).key)]),Kt(vt,()=>o(Pe)[o(ye).key],ut=>o(Pe)[o(ye).key]=ut),ne("click",Ct,async()=>{const ut=await Ae(o(Pe)[o(ye).key]);ut&&(o(Pe)[o(ye).key]=ut)}),ne("click",Et,()=>e.onopenfolder?.(Ne(o(ye).key))),ne("click",Ot,()=>e.onsavefolder?.(o(ye).key,o(Pe)[o(ye).key])),F(O,ce)}),me(()=>{Oe(G,"title",l().app_data),Z(ae,l().app_data)}),ne("click",Re,()=>e.onopenfolder?.(l().app_data)),F(xe,q)};Le(de,xe=>{l()&&xe(Se)})}F(k,X)},Ue=k=>{var X=s_(),de=M(Tt(X),4),Se=M(I(de),2),xe=K(Se),q=M(de,2),L=M(I(q),2),ue=K(L),be=M(q,2),G=K(be);me(()=>{Oe(Se,"aria-checked",r()),pt(Se,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${r()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),pt(xe,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${r()?"translate-x-[22px]":""}`),Oe(L,"aria-checked",a()),pt(L,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${a()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),pt(ue,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${a()?"translate-x-[22px]":""}`),Z(G,`Blind Mode is ${r()?"on":"off"}. Deaf Mode is ${a()?"on":"off"}.`)}),ne("click",Se,()=>r(!r())),ne("click",L,()=>a(!a())),F(k,X)},P=k=>{var X=o_(),de=M(Tt(X),4),Se=I(de),xe=M(I(Se),2),q=I(xe),L=M(I(q)),ue=K(L),be=M(de,2),G=I(be),ae=M(G,2),Re=M(ae,2);me(()=>Z(ue,`(alpha-v${t()??""})`)),ne("click",G,()=>e.onopenurl?.(`${Be}`)),ne("click",ae,()=>e.onopenurl?.(`${Be}/releases`)),ne("click",Re,()=>e.onopenurl?.(`${Be}/issues`)),F(k,X)};Le(Ge,k=>{o(E)==="appearance"?k(He):o(E)==="java"?k(Ze,1):o(E)==="storage"?k(lt,2):o(E)==="accessibility"?k(Ue,3):k(P,-1)})}var _=M(Ge,2);{var U=k=>{var X=l_(),de=K(X,!0);me(()=>{pt(X,1,`mt-5 text-[12px] ${m()?"text-(--accent)":"text-(--text-muted)"}`),Z(de,m()||S())}),F(k,X)};Le(_,k=>{(m()||S())&&k(U)})}ne("click",Ke,function(...k){e.onback?.apply(this,k)}),ne("click",_t,function(...k){e.onopenaccounts?.apply(this,k)}),F(i,et),$t()}fn(["click","keydown","input"]);var d_=W("<button> </button>"),f_=W('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),h_=W('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),p_=W('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),Zc=W('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),m_=W('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),Jc=W('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),v_=W('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),g_=W('<div class="p-4"><!> <!></div>'),__=W(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),x_=W('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),b_=W('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),y_=W('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),S_=W('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),M_=W(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),E_=W('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),w_=W('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),T_=W('<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div><!> <!></div>',1);function Nf(i,e){Qt(e,!0);let t=ie("offline"),n=ie(""),r=ie(!1),a=ie(""),l=ie(""),s=ie("idle"),c=ie(""),u=ie(null),d=ie(!1),h=null,f=ie("idle"),v=ie(""),y=ie(!1),S=ie(!1),m=ie(null),p=ie(!1),w=null,b=ie(""),T=ie(""),A=ie(!1),D=ie(""),C=ie(""),j=ie(""),x=ie("");function E(ge,we){const Fe=window.__TAURI__?.core;return Fe?Fe.invoke(ge,we):Promise.reject(new Error("Tauri backend unavailable in this preview."))}ec(()=>{te(),z()});function te(){h&&(clearInterval(h),h=null)}function z(){w&&(clearInterval(w),w=null)}tn(()=>{const ge=o(a).trim(),we=setTimeout(async()=>{if(!ge){g(l,"");return}try{g(l,await E("offline_uuid",{username:ge}),!0)}catch{g(l,"")}},200);return()=>clearTimeout(we)});async function N(ge){ge.preventDefault(),g(n,""),g(r,!0);try{await E("add_offline_account",{username:o(a).trim()}),g(a,""),g(l,""),await e.onrefresh?.()}catch(we){g(n,String(we),!0)}finally{g(r,!1)}}async function B(){g(c,""),g(d,!1),g(s,"requesting");try{g(u,await E("start_microsoft_device_code"),!0),g(s,"code"),te(),h=setInterval(V,(o(u).interval||5)*1e3)}catch(ge){g(s,"idle"),g(c,String(ge),!0)}}async function V(){if(o(u))try{const ge=await E("poll_microsoft_device_code",{device:o(u)});if(ge.state==="pending")return;if(ge.state==="slow_down"){te(),h=setInterval(V,((o(u).interval||5)+5)*1e3);return}if(te(),ge.state==="failed"){g(c,ge.reason,!0),g(u,null),g(s,"idle");return}g(u,null),g(s,"signedin"),await e.onrefresh?.()}catch(ge){g(c,String(ge),!0)}}async function he(){if(o(u))try{await navigator.clipboard.writeText(o(u).user_code),g(d,!0),setTimeout(()=>g(d,!1),1600)}catch{}}async function se(){g(v,""),g(y,!1),g(S,!0);try{await E("elyby_browser_login"),g(y,!0),await e.onrefresh?.()}catch(ge){g(v,String(ge),!0)}finally{g(S,!1)}}async function ee(){g(v,""),g(p,!1),g(f,"requesting");try{g(m,await E("start_elyby_device_code"),!0),g(f,"code"),z(),w=setInterval(Ee,(o(m).interval||5)*1e3)}catch(ge){g(f,"idle"),g(v,String(ge),!0)}}async function Ee(){if(o(m))try{const ge=await E("poll_elyby_device_code",{device:o(m)});if(ge.state==="pending")return;if(ge.state==="slow_down"){z(),w=setInterval(Ee,((o(m).interval||5)+5)*1e3);return}if(z(),ge.state==="failed"){g(v,ge.reason,!0),g(m,null),g(f,"idle");return}g(m,null),g(f,"signedin"),await e.onrefresh?.()}catch(ge){g(v,String(ge),!0)}}async function Y(){if(o(m))try{await navigator.clipboard.writeText(o(m).user_code),g(p,!0),setTimeout(()=>g(p,!1),1600)}catch{}}function H(){const ge=o(m)?.verification_uri_complete??o(m)?.verification_uri;ge&&E("open_external_url",{url:ge}).catch(()=>{})}async function le(ge){ge.preventDefault(),g(n,""),g(A,!0),g(y,!1);try{await E("add_elyby_account",{username:o(b).trim(),password:o(T)}),g(b,""),g(T,""),g(y,!0),await e.onrefresh?.()}catch(we){g(n,String(we),!0)}finally{g(A,!1)}}async function Ae(ge){ge.preventDefault(),g(n,""),g(r,!0);try{const we=await E("add_custom_yggdrasil_account",{username:o(D).trim(),serverUrl:o(C).trim()});(o(j).trim()||o(x).trim())&&await E("set_account_textures",{id:we.id,skin:o(j).trim()||null,cape:o(x).trim()||null}),g(D,""),g(C,""),g(j,""),g(x,""),await e.onrefresh?.()}catch(we){g(n,String(we),!0)}finally{g(r,!1)}}async function Me(ge){const we=window.__TAURI__?.dialog?.open;if(!we){g(n,"File picker unavailable in this build.");return}try{const Fe=await we({multiple:!1,title:ge==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Fe)return;const Ge=String(Fe);g(ge==="skin"?j:x,Ge,!0),g(n,"")}catch(Fe){g(n,String(Fe),!0)}}var Pe=T_(),Ne=Tt(Pe);Rt(Ne,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],Sl,(ge,we)=>{var Fe=st(()=>Ud(we,2));let Ge=()=>o(Fe)[0],He=()=>o(Fe)[1];var Ze=d_(),lt=K(Ze,!0);me(()=>{pt(Ze,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${o(t)===Ge()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),Z(lt,He())}),ne("click",Ze,()=>{g(t,Ge(),!0),g(n,"")}),F(ge,Ze)});var ke=M(Ne,2),Be=I(ke);{var et=ge=>{var we=h_(),Fe=Tt(we),Ge=I(Fe),He=M(Ge,2),Ze=M(Fe,2);{var lt=Ue=>{var P=f_(),_=M(I(P),2),U=K(_,!0);me(()=>Z(U,o(l))),F(Ue,P)};Le(Ze,Ue=>{o(l)&&Ue(lt)})}me(Ue=>He.disabled=Ue,[()=>!o(a).trim()||o(r)]),Xn("submit",Fe,N),Kt(Ge,()=>o(a),Ue=>g(a,Ue)),F(ge,we)},gt=ge=>{var we=g_(),Fe=I(we);{var Ge=_=>{var U=p_(),k=Tt(U);me(()=>k.disabled=o(r)),ne("click",k,B),F(_,U)},He=_=>{var U=Zc();F(_,U)},Ze=_=>{var U=m_(),k=M(I(U),2),X=K(k,!0),de=M(k,4),Se=K(de,!0),xe=M(de,2),q=I(xe),L=K(q,!0),ue=M(q,2);me(()=>{Z(X,o(u).verification_uri),Z(Se,o(u).user_code),Z(L,o(d)?"Copied ✓":"Copy code")}),ne("click",q,he),ne("click",ue,B),F(_,U)},lt=_=>{var U=Jc(),k=M(Tt(U),2);ne("click",k,()=>{g(s,"idle"),g(c,"")}),F(_,U)};Le(Fe,_=>{o(s)==="idle"?_(Ge):o(s)==="requesting"?_(He,1):o(s)==="code"&&o(u)?_(Ze,2):o(s)==="signedin"&&_(lt,3)})}var Ue=M(Fe,2);{var P=_=>{var U=v_(),k=K(U,!0);me(()=>Z(k,o(c))),F(_,U)};Le(Ue,_=>{o(c)&&_(P)})}F(ge,we)},Ke=ge=>{var we=M_(),Fe=M(I(we),2);{var Ge=L=>{var ue=__(),be=Tt(ue),G=K(be,!0),ae=M(be,4);me(()=>{be.disabled=o(S),Z(G,o(S)?"Waiting for the browser…":"Sign in with browser (recommended)"),ae.disabled=o(S)}),ne("click",be,se),ne("click",ae,ee),F(L,ue)},He=L=>{var ue=Zc();F(L,ue)},Ze=L=>{var ue=b_(),be=M(I(ue),2),G=K(be,!0),ae=M(be,4),Re=K(ae,!0),De=M(ae,2),O=I(De),ye=K(O,!0),ce=M(O,2);{var _e=qe=>{var je=x_();ne("click",je,H),F(qe,je)};Le(ce,qe=>{(o(m).verification_uri||o(m).verification_uri_complete)&&qe(_e)})}var Te=M(ce,2);me(()=>{Z(G,o(m).verification_uri),Z(Re,o(m).user_code),Z(ye,o(p)?"Copied ✓":"Copy code")}),ne("click",O,Y),ne("click",Te,ee),F(L,ue)},lt=L=>{var ue=Jc(),be=M(Tt(ue),2);ne("click",be,()=>{g(f,"idle"),g(v,"")}),F(L,ue)};Le(Fe,L=>{o(f)==="idle"?L(Ge):o(f)==="requesting"?L(He,1):o(f)==="code"&&o(m)?L(Ze,2):o(f)==="signedin"&&L(lt,3)})}var Ue=M(Fe,2);{var P=L=>{var ue=y_(),be=K(ue,!0);me(()=>Z(be,o(v))),F(L,ue)};Le(Ue,L=>{o(v)&&L(P)})}var _=M(Ue,2);{var U=L=>{var ue=S_();F(L,ue)};Le(_,L=>{o(y)&&o(f)==="idle"&&L(U)})}var k=M(_,2),X=M(I(k),2),de=I(X),Se=M(de,2),xe=M(Se,2),q=K(xe,!0);me(L=>{xe.disabled=L,Z(q,o(A)?"Signing in…":"Sign in")},[()=>!o(b).trim()||!o(T)||o(A)]),Xn("submit",X,le),Kt(de,()=>o(b),L=>g(b,L)),Kt(Se,()=>o(T),L=>g(T,L)),F(ge,we)},Q=ge=>{var we=E_(),Fe=I(we),Ge=M(Fe,2),He=M(Ge,2),Ze=I(He),lt=M(I(Ze)),Ue=K(lt,!0),P=M(Ze,2),_=M(I(P)),U=K(_,!0),k=M(He,2);me(X=>{Z(Ue,o(j)||"none"),Z(U,o(x)||"none"),k.disabled=X},[()=>!o(D).trim()||!o(C).trim()||o(r)]),Xn("submit",we,Ae),Kt(Fe,()=>o(C),X=>g(C,X)),Kt(Ge,()=>o(D),X=>g(D,X)),ne("click",Ze,()=>Me("skin")),ne("click",P,()=>Me("cape")),F(ge,we)};Le(Be,ge=>{o(t)==="offline"?ge(et):o(t)==="microsoft"?ge(gt,1):o(t)==="elyby"?ge(Ke,2):o(t)==="custom"&&ge(Q,3)})}var _t=M(Be,2);{var ze=ge=>{var we=w_(),Fe=K(we,!0);me(()=>Z(Fe,o(n))),F(ge,we)};Le(_t,ge=>{o(n)&&ge(ze)})}F(i,Pe),$t()}fn(["click"]);const rc="156",Or={ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},A_=0,Qc=1,R_=2,Of=1,C_=2,Bi=3,Ri=0,kn=1,ii=2,Xi=0,da=1,$c=2,eu=3,tu=4,P_=5,ra=100,L_=101,I_=102,nu=103,iu=104,D_=200,U_=201,N_=202,O_=203,kf=204,Ff=205,k_=206,F_=207,B_=208,z_=209,G_=210,H_=0,V_=1,W_=2,Cl=3,j_=4,X_=5,q_=6,Y_=7,Bf=0,K_=1,Z_=2,lr=0,J_=1,Q_=2,$_=3,ex=4,tx=5,zf=300,ba=301,ya=302,oo=303,Pl=304,_o=306,Ll=1e3,ci=1001,Il=1002,en=1003,ru=1004,Uo=1005,ti=1006,nx=1007,us=1008,cr=1009,ix=1010,rx=1011,ac=1012,Gf=1013,sr=1014,Vi=1015,Sa=1016,Hf=1017,Vf=1018,Ar=1020,ax=1021,ui=1023,sx=1024,ox=1025,Rr=1026,Ma=1027,lx=1028,Wf=1029,cx=1030,jf=1031,Xf=1033,No=33776,Oo=33777,ko=33778,Fo=33779,au=35840,su=35841,ou=35842,lu=35843,ux=36196,cu=37492,uu=37496,du=37808,fu=37809,hu=37810,pu=37811,mu=37812,vu=37813,gu=37814,_u=37815,xu=37816,bu=37817,yu=37818,Su=37819,Mu=37820,Eu=37821,Bo=36492,wu=36494,Tu=36495,dx=36283,Au=36284,Ru=36285,Cu=36286,qf=3e3,Cr=3001,fx=3200,hx=3201,Yf=0,px=1,Pr="",Zt="srgb",Ci="srgb-linear",xo="display-p3",zo=7680,mx=519,vx=512,gx=513,_x=514,xx=515,bx=516,yx=517,Sx=518,Mx=519,Dl=35044,Pu="300 es",Ul=1035,Wi=2e3,lo=2001;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,Nl=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function In(i,e,t){return Math.max(e,Math.min(t,i))}function Ex(i,e){return(i%e+e)%e}function Go(i,e,t){return(1-t)*i+t*e}function Lu(i){return(i&i-1)===0&&i!==0}function Ol(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wx={DEG2RAD:Js};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(e,t,n,r,a,l,s,c,u){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,s,c,u)}set(e,t,n,r,a,l,s,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=l,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],s=n[3],c=n[6],u=n[1],d=n[4],h=n[7],f=n[2],v=n[5],y=n[8],S=r[0],m=r[3],p=r[6],w=r[1],b=r[4],T=r[7],A=r[2],D=r[5],C=r[8];return a[0]=l*S+s*w+c*A,a[3]=l*m+s*b+c*D,a[6]=l*p+s*T+c*C,a[1]=u*S+d*w+h*A,a[4]=u*m+d*b+h*D,a[7]=u*p+d*T+h*C,a[2]=f*S+v*w+y*A,a[5]=f*m+v*b+y*D,a[8]=f*p+v*T+y*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],c=e[6],u=e[7],d=e[8];return t*l*d-t*s*u-n*a*d+n*s*c+r*a*u-r*l*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=d*l-s*u,f=s*c-d*a,v=u*a-l*c,y=t*h+n*f+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=h*S,e[1]=(r*u-d*n)*S,e[2]=(s*n-r*l)*S,e[3]=f*S,e[4]=(d*t-r*c)*S,e[5]=(r*a-s*t)*S,e[6]=v*S,e[7]=(n*c-u*t)*S,e[8]=(l*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,s){const c=Math.cos(a),u=Math.sin(a);return this.set(n*c,n*u,-n*(c*l+u*s)+l+e,-r*u,r*c,-r*(-u*l+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new Pt;function Kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tx(){const i=co("canvas");return i.style.display="block",i}const Iu={};function $a(i){i in Iu||(Iu[i]=!0,console.warn(i))}function fa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ax=new Pt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Rx=new Pt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Cx(i){return i.convertSRGBToLinear().applyMatrix3(Rx)}function Px(i){return i.applyMatrix3(Ax).convertLinearToSRGB()}const Lx={[Ci]:i=>i,[Zt]:i=>i.convertSRGBToLinear(),[xo]:Cx},Ix={[Ci]:i=>i,[Zt]:i=>i.convertLinearToSRGB(),[xo]:Px},Jn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Ci},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Lx[e],r=Ix[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Fr;class Zf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=co("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=fa(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fa(t[n]/255)*255):t[n]=fa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dx=0;class Jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,s=r.length;l<s;l++)r[l].isDataTexture?a.push(Wo(r[l].image)):a.push(Wo(r[l]))}else a=Wo(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ux=0;class En extends Dr{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,n=ci,r=ci,a=ti,l=us,s=ui,c=cr,u=En.DEFAULT_ANISOTROPY,d=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ur(),this.name="",this.source=new Jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:($a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Cr?Zt:Pr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?Cr:qf}set encoding(e){$a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cr?Zt:Pr}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=zf;En.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,t=0,n=0,r=1){Jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,u=c[0],d=c[4],h=c[8],f=c[1],v=c[5],y=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(y+m)<.1&&Math.abs(u+v+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,T=(v+1)/2,A=(p+1)/2,D=(d+f)/4,C=(h+S)/4,j=(y+m)/4;return b>T&&b>A?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=D/n,a=C/n):T>A?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=D/r,a=j/r):A<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),n=C/a,r=j/a),this.set(n,r,a,t),this}let w=Math.sqrt((m-y)*(m-y)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(m-y)/w,this.y=(h-S)/w,this.z=(f-d)/w,this.w=Math.acos((u+v+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nx extends Dr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&($a("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cr?Zt:Pr),this.texture=new En(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Nx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qf extends En{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ox extends En{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,s){let c=n[r+0],u=n[r+1],d=n[r+2],h=n[r+3];const f=a[l+0],v=a[l+1],y=a[l+2],S=a[l+3];if(s===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=v,e[t+2]=y,e[t+3]=S;return}if(h!==S||c!==f||u!==v||d!==y){let m=1-s;const p=c*f+u*v+d*y+h*S,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const A=Math.sqrt(b),D=Math.atan2(A,p*w);m=Math.sin(m*D)/A,s=Math.sin(s*D)/A}const T=s*w;if(c=c*m+f*T,u=u*m+v*T,d=d*m+y*T,h=h*m+S*T,m===1-s){const A=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=A,u*=A,d*=A,h*=A}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,l){const s=n[r],c=n[r+1],u=n[r+2],d=n[r+3],h=a[l],f=a[l+1],v=a[l+2],y=a[l+3];return e[t]=s*y+d*h+c*v-u*f,e[t+1]=c*y+d*f+u*h-s*v,e[t+2]=u*y+d*v+s*f-c*h,e[t+3]=d*y-s*h-c*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,l=e._order,s=Math.cos,c=Math.sin,u=s(n/2),d=s(r/2),h=s(a/2),f=c(n/2),v=c(r/2),y=c(a/2);switch(l){case"XYZ":this._x=f*d*h+u*v*y,this._y=u*v*h-f*d*y,this._z=u*d*y+f*v*h,this._w=u*d*h-f*v*y;break;case"YXZ":this._x=f*d*h+u*v*y,this._y=u*v*h-f*d*y,this._z=u*d*y-f*v*h,this._w=u*d*h+f*v*y;break;case"ZXY":this._x=f*d*h-u*v*y,this._y=u*v*h+f*d*y,this._z=u*d*y+f*v*h,this._w=u*d*h-f*v*y;break;case"ZYX":this._x=f*d*h-u*v*y,this._y=u*v*h+f*d*y,this._z=u*d*y-f*v*h,this._w=u*d*h+f*v*y;break;case"YZX":this._x=f*d*h+u*v*y,this._y=u*v*h+f*d*y,this._z=u*d*y-f*v*h,this._w=u*d*h-f*v*y;break;case"XZY":this._x=f*d*h-u*v*y,this._y=u*v*h-f*d*y,this._z=u*d*y+f*v*h,this._w=u*d*h+f*v*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],s=t[5],c=t[9],u=t[2],d=t[6],h=t[10],f=n+s+h;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-c)*v,this._y=(a-u)*v,this._z=(l-r)*v}else if(n>s&&n>h){const v=2*Math.sqrt(1+n-s-h);this._w=(d-c)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+u)/v}else if(s>h){const v=2*Math.sqrt(1+s-n-h);this._w=(a-u)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+h-n-s);this._w=(l-r)/v,this._x=(a+u)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,s=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+l*s+r*u-a*c,this._y=r*d+l*c+a*s-n*u,this._z=a*d+l*u+n*c-r*s,this._w=l*d-n*s-r*c-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let s=l*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),d=Math.atan2(u,s),h=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=l*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,n=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,s=e.z,c=e.w,u=c*t+l*r-s*n,d=c*n+s*t-a*r,h=c*r+a*n-l*t,f=-a*t-l*n-s*r;return this.x=u*c+f*-a+d*-s-h*-l,this.y=d*c+f*-l+h*-a-u*-s,this.z=h*c+f*-s+u*-l-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*l-n*c,this.z=n*s-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new re,Du=new Ir;class gs{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let l=0,s=a.count;l<s;l++)Ui.fromBufferAttribute(a,l).applyMatrix4(e.matrixWorld),this.expandByPoint(Ui)}else r.boundingBox===null&&r.computeBoundingBox(),Br.copy(r.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),Ss.subVectors(this.max,Na),zr.subVectors(e.a,Na),Gr.subVectors(e.b,Na),Hr.subVectors(e.c,Na),er.subVectors(Gr,zr),tr.subVectors(Hr,Gr),hr.subVectors(zr,Hr);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-hr.z,hr.y,er.z,0,-er.x,tr.z,0,-tr.x,hr.z,0,-hr.x,-er.y,er.x,0,-tr.y,tr.x,0,-hr.y,hr.x,0];return!Xo(t,zr,Gr,Hr,Ss)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,zr,Gr,Hr,Ss))?!1:(Ms.crossVectors(er,tr),t=[Ms.x,Ms.y,Ms.z],Xo(t,zr,Gr,Hr,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new re,new re,new re,new re,new re,new re,new re,new re],Ui=new re,Br=new gs,zr=new re,Gr=new re,Hr=new re,er=new re,tr=new re,hr=new re,Na=new re,Ss=new re,Ms=new re,pr=new re;function Xo(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){pr.fromArray(i,a);const s=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),c=e.dot(pr),u=t.dot(pr),d=n.dot(pr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>s)return!1}return!0}const kx=new gs,Oa=new re,qo=new re;class sc{constructor(e=new re,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kx.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Oa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(qo)),this.expandByPoint(Oa.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new re,Yo=new re,Es=new re,nr=new re,Ko=new re,ws=new re,Zo=new re;class $f{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yo.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(Yo);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Es),s=nr.dot(this.direction),c=-nr.dot(Es),u=nr.lengthSq(),d=Math.abs(1-l*l);let h,f,v,y;if(d>0)if(h=l*c-s,f=l*s-c,y=a*d,h>=0)if(f>=-y)if(f<=y){const S=1/d;h*=S,f*=S,v=h*(h+l*f+2*s)+f*(l*h+f+2*c)+u}else f=a,h=Math.max(0,-(l*f+s)),v=-h*h+f*(f+2*c)+u;else f=-a,h=Math.max(0,-(l*f+s)),v=-h*h+f*(f+2*c)+u;else f<=-y?(h=Math.max(0,-(-l*a+s)),f=h>0?-a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u):f<=y?(h=0,f=Math.min(Math.max(-a,-c),a),v=f*(f+2*c)+u):(h=Math.max(0,-(l*a+s)),f=h>0?a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u);else f=l>0?-a:a,h=Math.max(0,-(l*f+s)),v=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Yo).addScaledVector(Es,f),v}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),r=Ni.dot(Ni)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),s=n-l,c=n+l;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,s,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(a=(e.min.y-f.y)*d,l=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,l=(e.min.y-f.y)*d),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,r,a){Ko.subVectors(t,e),ws.subVectors(n,e),Zo.crossVectors(Ko,ws);let l=this.direction.dot(Zo),s;if(l>0){if(r)return null;s=1}else if(l<0)s=-1,l=-l;else return null;nr.subVectors(this.origin,e);const c=s*this.direction.dot(ws.crossVectors(nr,ws));if(c<0)return null;const u=s*this.direction.dot(Ko.cross(nr));if(u<0||c+u>l)return null;const d=-s*nr.dot(Zo);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,t,n,r,a,l,s,c,u,d,h,f,v,y,S,m){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,s,c,u,d,h,f,v,y,S,m)}set(e,t,n,r,a,l,s,c,u,d,h,f,v,y,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=l,p[9]=s,p[13]=c,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=v,p[7]=y,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),a=1/Vr.setFromMatrixColumn(e,1).length(),l=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),s=Math.sin(n),c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=l*d,v=l*h,y=s*d,S=s*h;t[0]=c*d,t[4]=-c*h,t[8]=u,t[1]=v+y*u,t[5]=f-S*u,t[9]=-s*c,t[2]=S-f*u,t[6]=y+v*u,t[10]=l*c}else if(e.order==="YXZ"){const f=c*d,v=c*h,y=u*d,S=u*h;t[0]=f+S*s,t[4]=y*s-v,t[8]=l*u,t[1]=l*h,t[5]=l*d,t[9]=-s,t[2]=v*s-y,t[6]=S+f*s,t[10]=l*c}else if(e.order==="ZXY"){const f=c*d,v=c*h,y=u*d,S=u*h;t[0]=f-S*s,t[4]=-l*h,t[8]=y+v*s,t[1]=v+y*s,t[5]=l*d,t[9]=S-f*s,t[2]=-l*u,t[6]=s,t[10]=l*c}else if(e.order==="ZYX"){const f=l*d,v=l*h,y=s*d,S=s*h;t[0]=c*d,t[4]=y*u-v,t[8]=f*u+S,t[1]=c*h,t[5]=S*u+f,t[9]=v*u-y,t[2]=-u,t[6]=s*c,t[10]=l*c}else if(e.order==="YZX"){const f=l*c,v=l*u,y=s*c,S=s*u;t[0]=c*d,t[4]=S-f*h,t[8]=y*h+v,t[1]=h,t[5]=l*d,t[9]=-s*d,t[2]=-u*d,t[6]=v*h+y,t[10]=f-S*h}else if(e.order==="XZY"){const f=l*c,v=l*u,y=s*c,S=s*u;t[0]=c*d,t[4]=-h,t[8]=u*d,t[1]=f*h+S,t[5]=l*d,t[9]=v*h-y,t[2]=y*h-v,t[6]=s*d,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fx,e,Bx)}lookAt(e,t,n){const r=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ir.crossVectors(n,Gn),ir.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ir.crossVectors(n,Gn)),ir.normalize(),Ts.crossVectors(Gn,ir),r[0]=ir.x,r[4]=Ts.x,r[8]=Gn.x,r[1]=ir.y,r[5]=Ts.y,r[9]=Gn.y,r[2]=ir.z,r[6]=Ts.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],s=n[4],c=n[8],u=n[12],d=n[1],h=n[5],f=n[9],v=n[13],y=n[2],S=n[6],m=n[10],p=n[14],w=n[3],b=n[7],T=n[11],A=n[15],D=r[0],C=r[4],j=r[8],x=r[12],E=r[1],te=r[5],z=r[9],N=r[13],B=r[2],V=r[6],he=r[10],se=r[14],ee=r[3],Ee=r[7],Y=r[11],H=r[15];return a[0]=l*D+s*E+c*B+u*ee,a[4]=l*C+s*te+c*V+u*Ee,a[8]=l*j+s*z+c*he+u*Y,a[12]=l*x+s*N+c*se+u*H,a[1]=d*D+h*E+f*B+v*ee,a[5]=d*C+h*te+f*V+v*Ee,a[9]=d*j+h*z+f*he+v*Y,a[13]=d*x+h*N+f*se+v*H,a[2]=y*D+S*E+m*B+p*ee,a[6]=y*C+S*te+m*V+p*Ee,a[10]=y*j+S*z+m*he+p*Y,a[14]=y*x+S*N+m*se+p*H,a[3]=w*D+b*E+T*B+A*ee,a[7]=w*C+b*te+T*V+A*Ee,a[11]=w*j+b*z+T*he+A*Y,a[15]=w*x+b*N+T*se+A*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],s=e[5],c=e[9],u=e[13],d=e[2],h=e[6],f=e[10],v=e[14],y=e[3],S=e[7],m=e[11],p=e[15];return y*(+a*c*h-r*u*h-a*s*f+n*u*f+r*s*v-n*c*v)+S*(+t*c*v-t*u*f+a*l*f-r*l*v+r*u*d-a*c*d)+m*(+t*u*h-t*s*v-a*l*h+n*l*v+a*s*d-n*u*d)+p*(-r*s*d-t*c*h+t*s*f+r*l*h-n*l*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],v=e[11],y=e[12],S=e[13],m=e[14],p=e[15],w=h*m*u-S*f*u+S*c*v-s*m*v-h*c*p+s*f*p,b=y*f*u-d*m*u-y*c*v+l*m*v+d*c*p-l*f*p,T=d*S*u-y*h*u+y*s*v-l*S*v-d*s*p+l*h*p,A=y*h*c-d*S*c-y*s*f+l*S*f+d*s*m-l*h*m,D=t*w+n*b+r*T+a*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=w*C,e[1]=(S*f*a-h*m*a-S*r*v+n*m*v+h*r*p-n*f*p)*C,e[2]=(s*m*a-S*c*a+S*r*u-n*m*u-s*r*p+n*c*p)*C,e[3]=(h*c*a-s*f*a-h*r*u+n*f*u+s*r*v-n*c*v)*C,e[4]=b*C,e[5]=(d*m*a-y*f*a+y*r*v-t*m*v-d*r*p+t*f*p)*C,e[6]=(y*c*a-l*m*a-y*r*u+t*m*u+l*r*p-t*c*p)*C,e[7]=(l*f*a-d*c*a+d*r*u-t*f*u-l*r*v+t*c*v)*C,e[8]=T*C,e[9]=(y*h*a-d*S*a-y*n*v+t*S*v+d*n*p-t*h*p)*C,e[10]=(l*S*a-y*s*a+y*n*u-t*S*u-l*n*p+t*s*p)*C,e[11]=(d*s*a-l*h*a-d*n*u+t*h*u+l*n*v-t*s*v)*C,e[12]=A*C,e[13]=(d*S*r-y*h*r+y*n*f-t*S*f-d*n*m+t*h*m)*C,e[14]=(y*s*r-l*S*r-y*n*c+t*S*c+l*n*m-t*s*m)*C,e[15]=(l*h*r-d*s*r+d*n*c-t*h*c-l*n*f+t*s*f)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,s=e.y,c=e.z,u=a*l,d=a*s;return this.set(u*l+n,u*s-r*c,u*c+r*s,0,u*s+r*c,d*s+n,d*c-r*l,0,u*c-r*s,d*c+r*l,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,s=t._z,c=t._w,u=a+a,d=l+l,h=s+s,f=a*u,v=a*d,y=a*h,S=l*d,m=l*h,p=s*h,w=c*u,b=c*d,T=c*h,A=n.x,D=n.y,C=n.z;return r[0]=(1-(S+p))*A,r[1]=(v+T)*A,r[2]=(y-b)*A,r[3]=0,r[4]=(v-T)*D,r[5]=(1-(f+p))*D,r[6]=(m+w)*D,r[7]=0,r[8]=(y+b)*C,r[9]=(m-w)*C,r[10]=(1-(f+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Vr.set(r[0],r[1],r[2]).length();const l=Vr.set(r[4],r[5],r[6]).length(),s=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const u=1/a,d=1/l,h=1/s;return si.elements[0]*=u,si.elements[1]*=u,si.elements[2]*=u,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),n.x=a,n.y=l,n.z=s,this}makePerspective(e,t,n,r,a,l,s=Wi){const c=this.elements,u=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let v,y;if(s===Wi)v=-(l+a)/(l-a),y=-2*l*a/(l-a);else if(s===lo)v=-l/(l-a),y=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,l,s=Wi){const c=this.elements,u=1/(t-e),d=1/(n-r),h=1/(l-a),f=(t+e)*u,v=(n+r)*d;let y,S;if(s===Wi)y=(l+a)*h,S=-2*h;else if(s===lo)y=a*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=S,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new re,si=new on,Fx=new re(0,0,0),Bx=new re(1,1,1),ir=new re,Ts=new re,Gn=new re,Uu=new on,Nu=new Ir;class bo{constructor(e=0,t=0,n=0,r=bo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],s=r[8],c=r[1],u=r[5],d=r[9],h=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(In(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-In(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(In(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(In(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,v));break;case"XZY":this._z=Math.asin(-In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bo.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zx=0;const Ou=new re,Wr=new Ir,Oi=new on,As=new re,ka=new re,Gx=new re,Hx=new Ir,ku=new re(1,0,0),Fu=new re(0,1,0),Bu=new re(0,0,1),Vx={type:"added"},Wx={type:"removed"};class wn extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new re,t=new bo,n=new Ir,r=new re(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new on},normalMatrix:{value:new Pt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(Bu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(Bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(ka,As,this.up):Oi.lookAt(As,ka,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(Oi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const l=this.children[r].getObjectsByProperty(e,t);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,Gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=l(e.geometries),c=l(e.materials),u=l(e.textures),d=l(e.images),h=l(e.shapes),f=l(e.skeletons),v=l(e.animations),y=l(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=r,n;function l(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wn.DEFAULT_UP=new re(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new re,ki=new re,Jo=new re,Fi=new re,jr=new re,Xr=new re,zu=new re,Qo=new re,$o=new re,el=new re;let Rs=!1;class ni{constructor(e=new re,t=new re,n=new re){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),oi.subVectors(e,t),r.cross(oi);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){oi.subVectors(r,t),ki.subVectors(n,t),Jo.subVectors(e,t);const l=oi.dot(oi),s=oi.dot(ki),c=oi.dot(Jo),u=ki.dot(ki),d=ki.dot(Jo),h=l*u-s*s;if(h===0)return a.set(-2,-1,-1);const f=1/h,v=(u*c-s*d)*f,y=(l*d-s*c)*f;return a.set(1-v-y,y,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fi),Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,n,r,a,l,s,c){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(e,t,n,r,a,l,s,c)}static getInterpolation(e,t,n,r,a,l,s,c){return this.getBarycoord(e,t,n,r,Fi),c.setScalar(0),c.addScaledVector(a,Fi.x),c.addScaledVector(l,Fi.y),c.addScaledVector(s,Fi.z),c}static isFrontFacing(e,t,n,r){return oi.subVectors(n,t),ki.subVectors(e,t),oi.cross(ki).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),oi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,s;jr.subVectors(r,n),Xr.subVectors(a,n),Qo.subVectors(e,n);const c=jr.dot(Qo),u=Xr.dot(Qo);if(c<=0&&u<=0)return t.copy(n);$o.subVectors(e,r);const d=jr.dot($o),h=Xr.dot($o);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return l=c/(c-d),t.copy(n).addScaledVector(jr,l);el.subVectors(e,a);const v=jr.dot(el),y=Xr.dot(el);if(y>=0&&v<=y)return t.copy(a);const S=v*u-c*y;if(S<=0&&u>=0&&y<=0)return s=u/(u-y),t.copy(n).addScaledVector(Xr,s);const m=d*y-v*h;if(m<=0&&h-d>=0&&v-y>=0)return zu.subVectors(a,r),s=(h-d)/(h-d+(v-y)),t.copy(r).addScaledVector(zu,s);const p=1/(m+S+f);return l=S*p,s=f*p,t.copy(n).addScaledVector(jr,l).addScaledVector(Xr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jx=0;class La extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=da,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=Ff,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==da&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const s in a){const c=a[s];delete c.metadata,l.push(c)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function tl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Jn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Jn.workingColorSpace){if(e=Ex(e,1),t=In(t,0,1),n=In(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=tl(l,a,e+1/3),this.g=tl(l,a,e),this.b=tl(l,a,e-1/3)}return Jn.toWorkingColorSpace(this,r),this}setStyle(e,t=Zt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],s=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Jn.fromWorkingColorSpace(Mn.copy(this),e),Math.round(In(Mn.r*255,0,255))*65536+Math.round(In(Mn.g*255,0,255))*256+Math.round(In(Mn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jn.workingColorSpace){Jn.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,r=Mn.g,a=Mn.b,l=Math.max(n,r,a),s=Math.min(n,r,a);let c,u;const d=(s+l)/2;if(s===l)c=0,u=0;else{const h=l-s;switch(u=d<=.5?h/(l+s):h/(2-l-s),l){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=Jn.workingColorSpace){return Jn.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Zt){Jn.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,r=Mn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(li),li.h+=e,li.s+=t,li.l+=n,this.setHSL(li.h,li.s,li.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Cs);const n=Go(li.h,Cs.h,t),r=Go(li.s,Cs.s,t),a=Go(li.l,Cs.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ft;Ft.NAMES=th;class nh extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new re,Ps=new at;class vi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dl,this.updateRange={offset:0,count:-1},this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ih extends vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rh extends vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qi extends vi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xx=0;const Kn=new on,nl=new wn,qr=new re,Hn=new gs,Fa=new gs,_n=new re;class Qi extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?rh:ih)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Pt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new qi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Hn.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new re,1/0);return}if(e){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const s=t[a];Fa.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(Hn.min,Fa.min),Hn.expandByPoint(_n),_n.addVectors(Hn.max,Fa.max),Hn.expandByPoint(_n)):(Hn.expandByPoint(Fa.min),Hn.expandByPoint(Fa.max))}Hn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)_n.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(_n));if(t)for(let a=0,l=t.length;a<l;a++){const s=t[a],c=this.morphTargetsRelative;for(let u=0,d=s.count;u<d;u++)_n.fromBufferAttribute(s,u),c&&(qr.fromBufferAttribute(e,u),_n.add(qr)),r=Math.max(r,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let E=0;E<s;E++)u[E]=new re,d[E]=new re;const h=new re,f=new re,v=new re,y=new at,S=new at,m=new at,p=new re,w=new re;function b(E,te,z){h.fromArray(r,E*3),f.fromArray(r,te*3),v.fromArray(r,z*3),y.fromArray(l,E*2),S.fromArray(l,te*2),m.fromArray(l,z*2),f.sub(h),v.sub(h),S.sub(y),m.sub(y);const N=1/(S.x*m.y-m.x*S.y);isFinite(N)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(v,-S.y).multiplyScalar(N),w.copy(v).multiplyScalar(S.x).addScaledVector(f,-m.x).multiplyScalar(N),u[E].add(p),u[te].add(p),u[z].add(p),d[E].add(w),d[te].add(w),d[z].add(w))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,te=T.length;E<te;++E){const z=T[E],N=z.start,B=z.count;for(let V=N,he=N+B;V<he;V+=3)b(n[V+0],n[V+1],n[V+2])}const A=new re,D=new re,C=new re,j=new re;function x(E){C.fromArray(a,E*3),j.copy(C);const te=u[E];A.copy(te),A.sub(C.multiplyScalar(C.dot(te))).normalize(),D.crossVectors(j,te);const N=D.dot(d[E])<0?-1:1;c[E*4]=A.x,c[E*4+1]=A.y,c[E*4+2]=A.z,c[E*4+3]=N}for(let E=0,te=T.length;E<te;++E){const z=T[E],N=z.start,B=z.count;for(let V=N,he=N+B;V<he;V+=3)x(n[V+0]),x(n[V+1]),x(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);const r=new re,a=new re,l=new re,s=new re,c=new re,u=new re,d=new re,h=new re;if(e)for(let f=0,v=e.count;f<v;f+=3){const y=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,m),d.subVectors(l,a),h.subVectors(r,a),d.cross(h),s.fromBufferAttribute(n,y),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,m),s.add(d),c.add(d),u.add(d),n.setXYZ(y,s.x,s.y,s.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),d.subVectors(l,a),h.subVectors(r,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(s,c){const u=s.array,d=s.itemSize,h=s.normalized,f=new u.constructor(c.length*d);let v=0,y=0;for(let S=0,m=c.length;S<m;S++){s.isInterleavedBufferAttribute?v=c[S]*s.data.stride+s.offset:v=c[S]*d;for(let p=0;p<d;p++)f[y++]=u[v++]}return new vi(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qi,n=this.index.array,r=this.attributes;for(const s in r){const c=r[s],u=e(c,n);t.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const c=[],u=a[s];for(let d=0,h=u.length;d<h;d++){const f=u[d],v=e(f,n);c.push(v)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let s=0,c=l.length;s<c;s++){const u=l[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const v=u[h];d.push(v.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],h=a[u];for(let f=0,v=h.length;f<v;f++)d.push(h[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,d=l.length;u<d;u++){const h=l[u];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new on,mr=new $f,Ls=new sc,Hu=new re,Yr=new re,Kr=new re,Zr=new re,il=new re,Is=new re,Ds=new at,Us=new at,Ns=new at,Vu=new re,Wu=new re,ju=new re,Os=new re,ks=new re;class Wt extends wn{constructor(e=new Qi,t=new nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Is.set(0,0,0);for(let c=0,u=a.length;c<u;c++){const d=s[c],h=a[c];d!==0&&(il.fromBufferAttribute(h,e),l?Is.addScaledVector(il,d):Is.addScaledVector(il.sub(t),d))}t.add(Is)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(a),mr.copy(e.ray).recast(e.near),!(Ls.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ls,Hu)===null||mr.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(Gu.copy(a).invert(),mr.copy(e.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,s=a.index,c=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,v=a.drawRange;if(s!==null)if(Array.isArray(l))for(let y=0,S=f.length;y<S;y++){const m=f[y],p=l[m.materialIndex],w=Math.max(m.start,v.start),b=Math.min(s.count,Math.min(m.start+m.count,v.start+v.count));for(let T=w,A=b;T<A;T+=3){const D=s.getX(T),C=s.getX(T+1),j=s.getX(T+2);r=Fs(this,p,e,n,u,d,h,D,C,j),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),S=Math.min(s.count,v.start+v.count);for(let m=y,p=S;m<p;m+=3){const w=s.getX(m),b=s.getX(m+1),T=s.getX(m+2);r=Fs(this,l,e,n,u,d,h,w,b,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(l))for(let y=0,S=f.length;y<S;y++){const m=f[y],p=l[m.materialIndex],w=Math.max(m.start,v.start),b=Math.min(c.count,Math.min(m.start+m.count,v.start+v.count));for(let T=w,A=b;T<A;T+=3){const D=T,C=T+1,j=T+2;r=Fs(this,p,e,n,u,d,h,D,C,j),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),S=Math.min(c.count,v.start+v.count);for(let m=y,p=S;m<p;m+=3){const w=m,b=m+1,T=m+2;r=Fs(this,l,e,n,u,d,h,w,b,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function qx(i,e,t,n,r,a,l,s){let c;if(e.side===kn?c=n.intersectTriangle(l,a,r,!0,s):c=n.intersectTriangle(r,a,l,e.side===Ri,s),c===null)return null;ks.copy(s),ks.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(ks);return u<t.near||u>t.far?null:{distance:u,point:ks.clone(),object:i}}function Fs(i,e,t,n,r,a,l,s,c,u){i.getVertexPosition(s,Yr),i.getVertexPosition(c,Kr),i.getVertexPosition(u,Zr);const d=qx(i,e,t,n,Yr,Kr,Zr,Os);if(d){r&&(Ds.fromBufferAttribute(r,s),Us.fromBufferAttribute(r,c),Ns.fromBufferAttribute(r,u),d.uv=ni.getInterpolation(Os,Yr,Kr,Zr,Ds,Us,Ns,new at)),a&&(Ds.fromBufferAttribute(a,s),Us.fromBufferAttribute(a,c),Ns.fromBufferAttribute(a,u),d.uv1=ni.getInterpolation(Os,Yr,Kr,Zr,Ds,Us,Ns,new at),d.uv2=d.uv1),l&&(Vu.fromBufferAttribute(l,s),Wu.fromBufferAttribute(l,c),ju.fromBufferAttribute(l,u),d.normal=ni.getInterpolation(Os,Yr,Kr,Zr,Vu,Wu,ju,new re),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:c,c:u,normal:new re,materialIndex:0};ni.getNormal(Yr,Kr,Zr,h.normal),d.face=h}return d}class an extends Qi{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const s=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const c=[],u=[],d=[],h=[];let f=0,v=0;y("z","y","x",-1,-1,n,t,e,l,a,0),y("z","y","x",1,-1,n,t,-e,l,a,1),y("x","z","y",1,1,e,n,t,r,l,2),y("x","z","y",1,-1,e,n,-t,r,l,3),y("x","y","z",1,-1,e,t,n,r,a,4),y("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new qi(u,3)),this.setAttribute("normal",new qi(d,3)),this.setAttribute("uv",new qi(h,2));function y(S,m,p,w,b,T,A,D,C,j,x){const E=T/C,te=A/j,z=T/2,N=A/2,B=D/2,V=C+1,he=j+1;let se=0,ee=0;const Ee=new re;for(let Y=0;Y<he;Y++){const H=Y*te-N;for(let le=0;le<V;le++){const Ae=le*E-z;Ee[S]=Ae*w,Ee[m]=H*b,Ee[p]=B,u.push(Ee.x,Ee.y,Ee.z),Ee[S]=0,Ee[m]=0,Ee[p]=D>0?1:-1,d.push(Ee.x,Ee.y,Ee.z),h.push(le/C),h.push(1-Y/j),se+=1}}for(let Y=0;Y<j;Y++)for(let H=0;H<C;H++){const le=f+H+V*Y,Ae=f+H+V*(Y+1),Me=f+(H+1)+V*(Y+1),Pe=f+(H+1)+V*Y;c.push(le,Ae,Pe),c.push(Ae,Me,Pe),ee+=6}s.addGroup(v,ee,x),v+=ee,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ea(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pn(i){const e={};for(let t=0;t<i.length;t++){const n=Ea(i[t]);for(const r in n)e[r]=n[r]}return e}function Yx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){return i.getRenderTarget()===null?i.outputColorSpace:Ci}const sh={clone:Ea,merge:Pn};var Kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kx,this.fragmentShader=Zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=Yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oh extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wn extends oh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,u=l.fullHeight;a+=l.offsetX*r/c,t-=l.offsetY*n/u,r*=l.width/c,n*=l.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jr=-90,Qr=1;class Jx extends wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Wn(Jr,Qr,e,t);r.layers=this.layers,this.add(r);const a=new Wn(Jr,Qr,e,t);a.layers=this.layers,this.add(a);const l=new Wn(Jr,Qr,e,t);l.layers=this.layers,this.add(l);const s=new Wn(Jr,Qr,e,t);s.layers=this.layers,this.add(s);const c=new Wn(Jr,Qr,e,t);c.layers=this.layers,this.add(c);const u=new Wn(Jr,Qr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,s,c]=t;for(const u of t)this.remove(u);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,s,c,u]=this.children,d=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(d),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class lh extends En{constructor(e,t,n,r,a,l,s,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:ba,super(e,t,n,r,a,l,s,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qx extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&($a("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cr?Zt:Pr),this.texture=new lh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new an(5,5,5),a=new Zi({name:"CubemapFromEquirect",uniforms:Ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Xi});a.uniforms.tEquirect.value=t;const l=new Wt(r,a),s=t.minFilter;return t.minFilter===us&&(t.minFilter=ti),new Jx(1,10,this).update(e,l),t.minFilter=s,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const rl=new re,$x=new re,eb=new Pt;class ar{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=rl.subVectors(n,t).cross($x.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eb.getNormalMatrix(e),r=this.coplanarPoint(rl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new sc,Bs=new re;class oc{constructor(e=new ar,t=new ar,n=new ar,r=new ar,a=new ar,l=new ar){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){const n=this.planes,r=e.elements,a=r[0],l=r[1],s=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],v=r[8],y=r[9],S=r[10],m=r[11],p=r[12],w=r[13],b=r[14],T=r[15];if(n[0].setComponents(c-a,f-u,m-v,T-p).normalize(),n[1].setComponents(c+a,f+u,m+v,T+p).normalize(),n[2].setComponents(c+l,f+d,m+y,T+w).normalize(),n[3].setComponents(c-l,f-d,m-y,T-w).normalize(),n[4].setComponents(c-s,f-h,m-S,T-b).normalize(),t===Wi)n[5].setComponents(c+s,f+h,m+S,T+b).normalize();else if(t===lo)n[5].setComponents(s,h,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ch(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function tb(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,d){const h=u.array,f=u.usage,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,h,f),u.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function a(u,d,h){const f=d.array,v=d.updateRange;i.bindBuffer(h,u),v.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(i.deleteBuffer(d.buffer),n.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,r(u,d)):h.version<u.version&&(a(h.buffer,u,d),h.version=u.version)}return{get:l,remove:s,update:c}}class lc extends Qi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,s=Math.floor(n),c=Math.floor(r),u=s+1,d=c+1,h=e/s,f=t/c,v=[],y=[],S=[],m=[];for(let p=0;p<d;p++){const w=p*f-l;for(let b=0;b<u;b++){const T=b*h-a;y.push(T,-w,0),S.push(0,0,1),m.push(b/s),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<s;w++){const b=w+u*p,T=w+u*(p+1),A=w+1+u*(p+1),D=w+1+u*p;v.push(b,T,D),v.push(T,A,D)}this.setIndex(v),this.setAttribute("position",new qi(y,3)),this.setAttribute("normal",new qi(S,3)),this.setAttribute("uv",new qi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ib=`#ifdef USE_ALPHAHASH
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
#endif`,rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hb=`#ifdef USE_IRIDESCENCE
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
#endif`,pb=`#ifdef USE_BUMPMAP
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mb=`#define PI 3.141592653589793
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
} // validated`,Eb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wb=`vec3 transformedNormal = objectNormal;
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
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gb=`#ifdef USE_GRADIENTMAP
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
}`,Hb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xb=`uniform bool receiveShadow;
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
#endif`,qb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qb=`PhysicalMaterial material;
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
#endif`,$b=`struct PhysicalMaterial {
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
}`,e0=`
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u0=`#if defined( USE_POINTS_UV )
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
#endif`,d0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
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
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F0=`float getShadowMask() {
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
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ey=`uniform sampler2D t2D;
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
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
}`,sy=`#if DEPTH_PACKING == 3200
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
}`,oy=`#define DISTANCE
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
}`,ly=`#define DISTANCE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
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
}`,fy=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#define LAMBERT
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
}`,vy=`#define LAMBERT
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
}`,gy=`#define MATCAP
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
}`,_y=`#define MATCAP
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
}`,xy=`#define NORMAL
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
}`,by=`#define NORMAL
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
}`,yy=`#define PHONG
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
}`,Sy=`#define PHONG
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
}`,My=`#define STANDARD
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
}`,Ey=`#define STANDARD
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
}`,wy=`#define TOON
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
}`,Ty=`#define TOON
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
}`,Ay=`uniform float size;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Py=`uniform vec3 color;
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
}`,Ly=`uniform float rotation;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:nb,alphahash_pars_fragment:ib,alphamap_fragment:rb,alphamap_pars_fragment:ab,alphatest_fragment:sb,alphatest_pars_fragment:ob,aomap_fragment:lb,aomap_pars_fragment:cb,begin_vertex:ub,beginnormal_vertex:db,bsdfs:fb,iridescence_fragment:hb,bumpmap_pars_fragment:pb,clipping_planes_fragment:mb,clipping_planes_pars_fragment:vb,clipping_planes_pars_vertex:gb,clipping_planes_vertex:_b,color_fragment:xb,color_pars_fragment:bb,color_pars_vertex:yb,color_vertex:Sb,common:Mb,cube_uv_reflection_fragment:Eb,defaultnormal_vertex:wb,displacementmap_pars_vertex:Tb,displacementmap_vertex:Ab,emissivemap_fragment:Rb,emissivemap_pars_fragment:Cb,colorspace_fragment:Pb,colorspace_pars_fragment:Lb,envmap_fragment:Ib,envmap_common_pars_fragment:Db,envmap_pars_fragment:Ub,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:qb,envmap_vertex:Ob,fog_vertex:kb,fog_pars_vertex:Fb,fog_fragment:Bb,fog_pars_fragment:zb,gradientmap_pars_fragment:Gb,lightmap_fragment:Hb,lightmap_pars_fragment:Vb,lights_lambert_fragment:Wb,lights_lambert_pars_fragment:jb,lights_pars_begin:Xb,lights_toon_fragment:Yb,lights_toon_pars_fragment:Kb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Jb,lights_physical_fragment:Qb,lights_physical_pars_fragment:$b,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:s0,map_fragment:o0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:u0,metalnessmap_fragment:d0,metalnessmap_pars_fragment:f0,morphcolor_vertex:h0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:v0,normal_fragment_begin:g0,normal_fragment_maps:_0,normal_pars_fragment:x0,normal_pars_vertex:b0,normal_vertex:y0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:w0,iridescence_pars_fragment:T0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:P0,dithering_fragment:L0,dithering_pars_fragment:I0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:O0,shadowmap_vertex:k0,shadowmask_pars_fragment:F0,skinbase_vertex:B0,skinning_pars_vertex:z0,skinning_vertex:G0,skinnormal_vertex:H0,specularmap_fragment:V0,specularmap_pars_fragment:W0,tonemapping_fragment:j0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:K0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:$0,background_frag:ey,backgroundCube_vert:ty,backgroundCube_frag:ny,cube_vert:iy,cube_frag:ry,depth_vert:ay,depth_frag:sy,distanceRGBA_vert:oy,distanceRGBA_frag:ly,equirect_vert:cy,equirect_frag:uy,linedashed_vert:dy,linedashed_frag:fy,meshbasic_vert:hy,meshbasic_frag:py,meshlambert_vert:my,meshlambert_frag:vy,meshmatcap_vert:gy,meshmatcap_frag:_y,meshnormal_vert:xy,meshnormal_frag:by,meshphong_vert:yy,meshphong_frag:Sy,meshphysical_vert:My,meshphysical_frag:Ey,meshtoon_vert:wy,meshtoon_frag:Ty,points_vert:Ay,points_frag:Ry,shadow_vert:Cy,shadow_frag:Py,sprite_vert:Ly,sprite_frag:Iy},Ve={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},bi={basic:{uniforms:Pn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Pn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ft(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Pn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Pn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Pn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ft(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Pn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Pn([Ve.points,Ve.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Pn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Pn([Ve.common,Ve.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Pn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Pn([Ve.sprite,Ve.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:Pn([Ve.common,Ve.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:Pn([Ve.lights,Ve.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};bi.physical={uniforms:Pn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const zs={r:0,b:0,g:0};function Dy(i,e,t,n,r,a,l){const s=new Ft(0);let c=a===!0?0:1,u,d,h=null,f=0,v=null;function y(m,p){let w=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?t:e).get(b)),b===null?S(s,c):b&&b.isColor&&(S(b,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,l):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===_o)?(d===void 0&&(d=new Wt(new an(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Ea(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=b.colorSpace!==Zt,(h!==b||f!==b.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,v=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new Wt(new lc(2,2),new Zi({name:"BackgroundMaterial",uniforms:Ea(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=b.colorSpace!==Zt,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,v=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function S(m,p){m.getRGB(zs,ah(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,p,l)}return{getClearColor:function(){return s},setClearColor:function(m,p=1){s.set(m),c=p,S(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,S(s,c)},render:y}}function Uy(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,s={},c=m(null);let u=c,d=!1;function h(B,V,he,se,ee){let Ee=!1;if(l){const Y=S(se,he,V);u!==Y&&(u=Y,v(u.object)),Ee=p(B,se,he,ee),Ee&&w(B,se,he,ee)}else{const Y=V.wireframe===!0;(u.geometry!==se.id||u.program!==he.id||u.wireframe!==Y)&&(u.geometry=se.id,u.program=he.id,u.wireframe=Y,Ee=!0)}ee!==null&&t.update(ee,i.ELEMENT_ARRAY_BUFFER),(Ee||d)&&(d=!1,j(B,V,he,se),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function v(B){return n.isWebGL2?i.bindVertexArray(B):a.bindVertexArrayOES(B)}function y(B){return n.isWebGL2?i.deleteVertexArray(B):a.deleteVertexArrayOES(B)}function S(B,V,he){const se=he.wireframe===!0;let ee=s[B.id];ee===void 0&&(ee={},s[B.id]=ee);let Ee=ee[V.id];Ee===void 0&&(Ee={},ee[V.id]=Ee);let Y=Ee[se];return Y===void 0&&(Y=m(f()),Ee[se]=Y),Y}function m(B){const V=[],he=[],se=[];for(let ee=0;ee<r;ee++)V[ee]=0,he[ee]=0,se[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:he,attributeDivisors:se,object:B,attributes:{},index:null}}function p(B,V,he,se){const ee=u.attributes,Ee=V.attributes;let Y=0;const H=he.getAttributes();for(const le in H)if(H[le].location>=0){const Me=ee[le];let Pe=Ee[le];if(Pe===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(Pe=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(Pe=B.instanceColor)),Me===void 0||Me.attribute!==Pe||Pe&&Me.data!==Pe.data)return!0;Y++}return u.attributesNum!==Y||u.index!==se}function w(B,V,he,se){const ee={},Ee=V.attributes;let Y=0;const H=he.getAttributes();for(const le in H)if(H[le].location>=0){let Me=Ee[le];Me===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(Me=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(Me=B.instanceColor));const Pe={};Pe.attribute=Me,Me&&Me.data&&(Pe.data=Me.data),ee[le]=Pe,Y++}u.attributes=ee,u.attributesNum=Y,u.index=se}function b(){const B=u.newAttributes;for(let V=0,he=B.length;V<he;V++)B[V]=0}function T(B){A(B,0)}function A(B,V){const he=u.newAttributes,se=u.enabledAttributes,ee=u.attributeDivisors;he[B]=1,se[B]===0&&(i.enableVertexAttribArray(B),se[B]=1),ee[B]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,V),ee[B]=V)}function D(){const B=u.newAttributes,V=u.enabledAttributes;for(let he=0,se=V.length;he<se;he++)V[he]!==B[he]&&(i.disableVertexAttribArray(he),V[he]=0)}function C(B,V,he,se,ee,Ee,Y){Y===!0?i.vertexAttribIPointer(B,V,he,ee,Ee):i.vertexAttribPointer(B,V,he,se,ee,Ee)}function j(B,V,he,se){if(n.isWebGL2===!1&&(B.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const ee=se.attributes,Ee=he.getAttributes(),Y=V.defaultAttributeValues;for(const H in Ee){const le=Ee[H];if(le.location>=0){let Ae=ee[H];if(Ae===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(Ae=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(Ae=B.instanceColor)),Ae!==void 0){const Me=Ae.normalized,Pe=Ae.itemSize,Ne=t.get(Ae);if(Ne===void 0)continue;const ke=Ne.buffer,Be=Ne.type,et=Ne.bytesPerElement,gt=n.isWebGL2===!0&&(Be===i.INT||Be===i.UNSIGNED_INT||Ae.gpuType===Gf);if(Ae.isInterleavedBufferAttribute){const Ke=Ae.data,Q=Ke.stride,_t=Ae.offset;if(Ke.isInstancedInterleavedBuffer){for(let ze=0;ze<le.locationSize;ze++)A(le.location+ze,Ke.meshPerAttribute);B.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let ze=0;ze<le.locationSize;ze++)T(le.location+ze);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let ze=0;ze<le.locationSize;ze++)C(le.location+ze,Pe/le.locationSize,Be,Me,Q*et,(_t+Pe/le.locationSize*ze)*et,gt)}else{if(Ae.isInstancedBufferAttribute){for(let Ke=0;Ke<le.locationSize;Ke++)A(le.location+Ke,Ae.meshPerAttribute);B.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ke=0;Ke<le.locationSize;Ke++)T(le.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Ke=0;Ke<le.locationSize;Ke++)C(le.location+Ke,Pe/le.locationSize,Be,Me,Pe*et,Pe/le.locationSize*Ke*et,gt)}}else if(Y!==void 0){const Me=Y[H];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(le.location,Me);break;case 3:i.vertexAttrib3fv(le.location,Me);break;case 4:i.vertexAttrib4fv(le.location,Me);break;default:i.vertexAttrib1fv(le.location,Me)}}}}D()}function x(){z();for(const B in s){const V=s[B];for(const he in V){const se=V[he];for(const ee in se)y(se[ee].object),delete se[ee];delete V[he]}delete s[B]}}function E(B){if(s[B.id]===void 0)return;const V=s[B.id];for(const he in V){const se=V[he];for(const ee in se)y(se[ee].object),delete se[ee];delete V[he]}delete s[B.id]}function te(B){for(const V in s){const he=s[V];if(he[B.id]===void 0)continue;const se=he[B.id];for(const ee in se)y(se[ee].object),delete se[ee];delete he[B.id]}}function z(){N(),d=!0,u!==c&&(u=c,v(u.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:z,resetDefaultState:N,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:te,initAttributes:b,enableAttribute:T,disableUnusedAttributes:D}}function Ny(i,e,t,n){const r=n.isWebGL2;let a;function l(u){a=u}function s(u,d){i.drawArrays(a,u,d),t.update(d,a,1)}function c(u,d,h){if(h===0)return;let f,v;if(r)f=i,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](a,u,d,h),t.update(d,a,h)}this.setMode=l,this.render=s,this.renderInstances=c}function Oy(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const c=a(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const u=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,T=l||e.has("OES_texture_float"),A=b&&T,D=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:b,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:D}}function ky(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new ar,s=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const v=h.length!==0||f||n!==0||r;return r=f,n=h.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,v){const y=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||y===null||y.length===0||a&&!m)a?d(null):u();else{const w=a?0:n,b=w*4;let T=p.clippingState||null;c.value=T,T=d(y,f,b,v);for(let A=0;A!==b;++A)T[A]=t[A];p.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,v,y){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=c.value,y!==!0||m===null){const p=v+S*4,w=f.matrixWorldInverse;s.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,T=v;b!==S;++b,T+=4)l.copy(h[b]).applyMatrix4(w,s),l.normal.toArray(m,T),m[T+3]=l.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Fy(i){let e=new WeakMap;function t(l,s){return s===oo?l.mapping=ba:s===Pl&&(l.mapping=ya),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const s=l.mapping;if(s===oo||s===Pl)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const u=new Qx(c.height/2);return u.fromEquirectangularTexture(i,l),e.set(l,u),l.addEventListener("dispose",r),t(u.texture,l.mapping)}else return null}}return l}function r(l){const s=l.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class uh extends oh{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,l=a+u*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const aa=4,Xu=[.125,.215,.35,.446,.526,.582],br=20,al=new uh,qu=new Ft;let sl=null;const _r=(1+Math.sqrt(5))/2,$r=1/_r,Yu=[new re(1,1,1),new re(-1,1,1),new re(1,1,-1),new re(-1,1,-1),new re(0,_r,$r),new re(0,_r,-$r),new re($r,0,_r),new re(-$r,0,_r),new re(_r,$r,0),new re(-_r,$r,0)];class Ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){sl=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl),e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ba||e.mapping===ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Sa,format:ui,colorSpace:Ci,depthBuffer:!1},r=Zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=By(a)),this._blurMaterial=zy(a,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,al)}_sceneToCubeUV(e,t,n,r){const s=new Wn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qu),d.toneMapping=lr,d.autoClear=!1;const v=new nh({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new Wt(new an,v);let S=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,S=!0):(v.color.copy(qu),S=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(s.up.set(0,c[p],0),s.lookAt(u[p],0,0)):w===1?(s.up.set(0,0,c[p]),s.lookAt(0,u[p],0)):(s.up.set(0,c[p],0),s.lookAt(0,0,u[p]));const b=this._cubeSize;Gs(r,w*b,p>2?b:0,b,b),d.setRenderTarget(r),S&&d.render(y,s),d.render(e,s)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ba||e.mapping===ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new Wt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;Gs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,al)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Yu[(r-1)%Yu.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,s){const c=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Wt(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*br-1),S=a/y,m=isFinite(a)?1+Math.floor(d*S):br;m>br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let w=0;for(let C=0;C<br;++C){const j=C/S,x=Math.exp(-j*j/2);p.push(x),C===0?w+=x:C<m&&(w+=2*x)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=l==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:b}=this;f.dTheta.value=y,f.mipInt.value=b-n;const T=this._sizeLods[r],A=3*T*(r>b-aa?r-b+aa:0),D=4*(this._cubeSize-T);Gs(t,A,D,3*T,2*T),c.setRenderTarget(t),c.render(h,al)}}function By(i){const e=[],t=[],n=[];let r=i;const a=i-aa+1+Xu.length;for(let l=0;l<a;l++){const s=Math.pow(2,r);t.push(s);let c=1/s;l>i-aa?c=Xu[l-i+aa-1]:l===0&&(c=0),n.push(c);const u=1/(s-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,y=6,S=3,m=2,p=1,w=new Float32Array(S*y*v),b=new Float32Array(m*y*v),T=new Float32Array(p*y*v);for(let D=0;D<v;D++){const C=D%3*2/3-1,j=D>2?0:-1,x=[C,j,0,C+2/3,j,0,C+2/3,j+1,0,C,j,0,C+2/3,j+1,0,C,j+1,0];w.set(x,S*y*D),b.set(f,m*y*D);const E=[D,D,D,D,D,D];T.set(E,p*y*D)}const A=new Qi;A.setAttribute("position",new vi(w,S)),A.setAttribute("uv",new vi(b,m)),A.setAttribute("faceIndex",new vi(T,p)),e.push(A),r>aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zu(i,e,t){const n=new Ki(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function zy(i,e,t){const n=new Float32Array(br),r=new re(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ju(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Qu(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function cc(){return`

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
	`}function Gy(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,u=c===oo||c===Pl,d=c===ba||c===ya;if(u||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Ku(i)),h=u?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(u&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new Ku(i));const f=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let c=0;const u=6;for(let d=0;d<u;d++)s[d]!==void 0&&c++;return c===u}function a(s){const c=s.target;c.removeEventListener("dispose",a);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Hy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Vy(i,e,t,n){const r={},a=new WeakMap;function l(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const S=f.morphAttributes[y];for(let m=0,p=S.length;m<p;m++)e.remove(S[m])}f.removeEventListener("dispose",l),delete r[f.id];const v=a.get(f);v&&(e.remove(v),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",l),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const y in f)e.update(f[y],i.ARRAY_BUFFER);const v=h.morphAttributes;for(const y in v){const S=v[y];for(let m=0,p=S.length;m<p;m++)e.update(S[m],i.ARRAY_BUFFER)}}function u(h){const f=[],v=h.index,y=h.attributes.position;let S=0;if(v!==null){const w=v.array;S=v.version;for(let b=0,T=w.length;b<T;b+=3){const A=w[b+0],D=w[b+1],C=w[b+2];f.push(A,D,D,C,C,A)}}else if(y!==void 0){const w=y.array;S=y.version;for(let b=0,T=w.length/3-1;b<T;b+=3){const A=b+0,D=b+1,C=b+2;f.push(A,D,D,C,C,A)}}else return;const m=new(Kf(f)?rh:ih)(f,1);m.version=S;const p=a.get(h);p&&e.remove(p),a.set(h,m)}function d(h){const f=a.get(h);if(f){const v=h.index;v!==null&&f.version<v.version&&u(h)}else u(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function Wy(i,e,t,n){const r=n.isWebGL2;let a;function l(f){a=f}let s,c;function u(f){s=f.type,c=f.bytesPerElement}function d(f,v){i.drawElements(a,v,s,f*c),t.update(v,a,1)}function h(f,v,y){if(y===0)return;let S,m;if(r)S=i,m="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[m](a,v,s,f*c,y),t.update(v,a,y)}this.setMode=l,this.setIndex=u,this.render=d,this.renderInstances=h}function jy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,s){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Xy(i,e){return i[0]-e[0]}function qy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Yy(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new Jt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function c(u,d,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=y!==void 0?y.length:0;let m=a.get(d);if(m===void 0||m.count!==S){let V=function(){N.dispose(),a.delete(d),d.removeEventListener("dispose",V)};var v=V;m!==void 0&&m.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,D=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],j=d.morphAttributes.color||[];let x=0;b===!0&&(x=1),T===!0&&(x=2),A===!0&&(x=3);let E=d.attributes.position.count*x,te=1;E>e.maxTextureSize&&(te=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const z=new Float32Array(E*te*4*S),N=new Qf(z,E,te,S);N.type=Vi,N.needsUpdate=!0;const B=x*4;for(let he=0;he<S;he++){const se=D[he],ee=C[he],Ee=j[he],Y=E*te*4*he;for(let H=0;H<se.count;H++){const le=H*B;b===!0&&(l.fromBufferAttribute(se,H),z[Y+le+0]=l.x,z[Y+le+1]=l.y,z[Y+le+2]=l.z,z[Y+le+3]=0),T===!0&&(l.fromBufferAttribute(ee,H),z[Y+le+4]=l.x,z[Y+le+5]=l.y,z[Y+le+6]=l.z,z[Y+le+7]=0),A===!0&&(l.fromBufferAttribute(Ee,H),z[Y+le+8]=l.x,z[Y+le+9]=l.y,z[Y+le+10]=l.z,z[Y+le+11]=Ee.itemSize===4?l.w:1)}}m={count:S,texture:N,size:new at(E,te)},a.set(d,m),d.addEventListener("dispose",V)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];const w=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const y=f===void 0?0:f.length;let S=n[d.id];if(S===void 0||S.length!==y){S=[];for(let T=0;T<y;T++)S[T]=[T,0];n[d.id]=S}for(let T=0;T<y;T++){const A=S[T];A[0]=T,A[1]=f[T]}S.sort(qy);for(let T=0;T<8;T++)T<y&&S[T][1]?(s[T][0]=S[T][0],s[T][1]=S[T][1]):(s[T][0]=Number.MAX_SAFE_INTEGER,s[T][1]=0);s.sort(Xy);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let w=0;for(let T=0;T<8;T++){const A=s[T],D=A[0],C=A[1];D!==Number.MAX_SAFE_INTEGER&&C?(m&&d.getAttribute("morphTarget"+T)!==m[D]&&d.setAttribute("morphTarget"+T,m[D]),p&&d.getAttribute("morphNormal"+T)!==p[D]&&d.setAttribute("morphNormal"+T,p[D]),r[T]=C,w+=C):(m&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),p&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),r[T]=0)}const b=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Ky(i,e,t,n){let r=new WeakMap;function a(c){const u=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function l(){r=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}const dh=new En,fh=new Qf,hh=new Ox,ph=new lh,$u=[],ed=[],td=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function Ia(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=$u[r];if(a===void 0&&(a=new Float32Array(r),$u[r]=a),e!==0){n.toArray(a,0);for(let l=1,s=0;l!==e;++l)s+=t,i[l].toArray(a,s)}return a}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=ed[e];t===void 0&&(t=new Int32Array(e),ed[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function Qy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function $y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function e1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;id.set(n),i.uniformMatrix2fv(this.addr,!1,id),gn(t,n)}}function t1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;nd.set(n),i.uniformMatrix3fv(this.addr,!1,nd),gn(t,n)}}function n1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;td.set(n),i.uniformMatrix4fv(this.addr,!1,td),gn(t,n)}}function i1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function a1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function s1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function o1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function c1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function u1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function d1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||dh,r)}function f1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hh,r)}function h1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ph,r)}function p1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||fh,r)}function m1(i){switch(i){case 5126:return Zy;case 35664:return Jy;case 35665:return Qy;case 35666:return $y;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return a1;case 35669:case 35673:return s1;case 5125:return o1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return p1}}function v1(i,e){i.uniform1fv(this.addr,e)}function g1(i,e){const t=Ia(e,this.size,2);i.uniform2fv(this.addr,t)}function _1(i,e){const t=Ia(e,this.size,3);i.uniform3fv(this.addr,t)}function x1(i,e){const t=Ia(e,this.size,4);i.uniform4fv(this.addr,t)}function b1(i,e){const t=Ia(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y1(i,e){const t=Ia(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function S1(i,e){const t=Ia(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M1(i,e){i.uniform1iv(this.addr,e)}function E1(i,e){i.uniform2iv(this.addr,e)}function w1(i,e){i.uniform3iv(this.addr,e)}function T1(i,e){i.uniform4iv(this.addr,e)}function A1(i,e){i.uniform1uiv(this.addr,e)}function R1(i,e){i.uniform2uiv(this.addr,e)}function C1(i,e){i.uniform3uiv(this.addr,e)}function P1(i,e){i.uniform4uiv(this.addr,e)}function L1(i,e,t){const n=this.cache,r=e.length,a=yo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||dh,a[l])}function I1(i,e,t){const n=this.cache,r=e.length,a=yo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||hh,a[l])}function D1(i,e,t){const n=this.cache,r=e.length,a=yo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||ph,a[l])}function U1(i,e,t){const n=this.cache,r=e.length,a=yo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||fh,a[l])}function N1(i){switch(i){case 5126:return v1;case 35664:return g1;case 35665:return _1;case 35666:return x1;case 35674:return b1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return E1;case 35668:case 35672:return w1;case 35669:case 35673:return T1;case 5125:return A1;case 36294:return R1;case 36295:return C1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return U1}}class O1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=m1(t.type)}}class k1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=N1(t.type)}}class F1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function rd(i,e){i.seq.push(e),i.map[e.id]=e}function B1(i,e,t){const n=i.name,r=n.length;for(ol.lastIndex=0;;){const a=ol.exec(n),l=ol.lastIndex;let s=a[1];const c=a[2]==="]",u=a[3];if(c&&(s=s|0),u===void 0||u==="["&&l+2===r){rd(t,u===void 0?new O1(s,i,e):new k1(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new F1(s),rd(t,h)),t=h}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);B1(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const s=t[a],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function ad(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let z1=0;function G1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const s=l+1;n.push(`${s===e?">":" "} ${s}: ${t[l]}`)}return n.join(`
`)}function H1(i){switch(i){case Ci:return["Linear","( value )"];case Zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function sd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+G1(i.getShaderSource(e),l)}else return r}function V1(i,e){const t=H1(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function W1(i,e){let t;switch(e){case J_:t="Linear";break;case Q_:t="Reinhard";break;case $_:t="OptimizedCineon";break;case ex:t="ACESFilmic";break;case tx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function j1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ya).join(`
`)}function X1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:s}}return t}function Ya(i){return i!==""}function od(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(i){return i.replace(Y1,Z1)}const K1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Z1(i,e){let t=At[e];if(t===void 0){const n=K1.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(i){return i.replace(J1,Q1)}function Q1(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ud(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===C_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function eS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ba:case ya:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tS(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ya&&(e="ENVMAP_MODE_REFRACTION"),e}function nS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bf:e="ENVMAP_BLENDING_MULTIPLY";break;case K_:e="ENVMAP_BLENDING_MIX";break;case Z_:e="ENVMAP_BLENDING_ADD";break}return e}function iS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rS(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,s=t.fragmentShader;const c=$1(t),u=eS(t),d=tS(t),h=nS(t),f=iS(t),v=t.isWebGL2?"":j1(t),y=X1(a),S=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ya).join(`
`),m.length>0&&(m+=`
`),p=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ya).join(`
`),p.length>0&&(p+=`
`)):(m=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),p=[v,ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?At.tonemapping_pars_fragment:"",t.toneMapping!==lr?W1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,V1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),l=kl(l),l=od(l,t),l=ld(l,t),s=kl(s),s=od(s,t),s=ld(s,t),l=cd(l),s=cd(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+l,T=w+p+s,A=ad(r,r.VERTEX_SHADER,b),D=ad(r,r.FRAGMENT_SHADER,T);if(r.attachShader(S,A),r.attachShader(S,D),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),i.debug.checkShaderErrors){const x=r.getProgramInfoLog(S).trim(),E=r.getShaderInfoLog(A).trim(),te=r.getShaderInfoLog(D).trim();let z=!0,N=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,A,D);else{const B=sd(r,A,"vertex"),V=sd(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+B+`
`+V)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(E===""||te==="")&&(N=!1);N&&(this.diagnostics={runnable:z,programLog:x,vertexShader:{log:E,prefix:m},fragmentShader:{log:te,prefix:p}})}r.deleteShader(A),r.deleteShader(D);let C;this.getUniforms=function(){return C===void 0&&(C=new Qs(r,S)),C};let j;return this.getAttributes=function(){return j===void 0&&(j=q1(r,S)),j},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=D,this}let aS=0;class sS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new oS(e),t.set(e,n)),n}}class oS{constructor(e){this.id=aS++,this.code=e,this.usedTimes=0}}function lS(i,e,t,n,r,a,l){const s=new eh,c=new sS,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return x===0?"uv":`uv${x}`}function m(x,E,te,z,N){const B=z.fog,V=N.geometry,he=x.isMeshStandardMaterial?z.environment:null,se=(x.isMeshStandardMaterial?t:e).get(x.envMap||he),ee=se&&se.mapping===_o?se.image.height:null,Ee=y[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const Y=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,H=Y!==void 0?Y.length:0;let le=0;V.morphAttributes.position!==void 0&&(le=1),V.morphAttributes.normal!==void 0&&(le=2),V.morphAttributes.color!==void 0&&(le=3);let Ae,Me,Pe,Ne;if(Ee){const ot=bi[Ee];Ae=ot.vertexShader,Me=ot.fragmentShader}else Ae=x.vertexShader,Me=x.fragmentShader,c.update(x),Pe=c.getVertexShaderID(x),Ne=c.getFragmentShaderID(x);const ke=i.getRenderTarget(),Be=N.isInstancedMesh===!0,et=!!x.map,gt=!!x.matcap,Ke=!!se,Q=!!x.aoMap,_t=!!x.lightMap,ze=!!x.bumpMap,ge=!!x.normalMap,we=!!x.displacementMap,Fe=!!x.emissiveMap,Ge=!!x.metalnessMap,He=!!x.roughnessMap,Ze=x.anisotropy>0,lt=x.clearcoat>0,Ue=x.iridescence>0,P=x.sheen>0,_=x.transmission>0,U=Ze&&!!x.anisotropyMap,k=lt&&!!x.clearcoatMap,X=lt&&!!x.clearcoatNormalMap,de=lt&&!!x.clearcoatRoughnessMap,Se=Ue&&!!x.iridescenceMap,xe=Ue&&!!x.iridescenceThicknessMap,q=P&&!!x.sheenColorMap,L=P&&!!x.sheenRoughnessMap,ue=!!x.specularMap,be=!!x.specularColorMap,G=!!x.specularIntensityMap,ae=_&&!!x.transmissionMap,Re=_&&!!x.thicknessMap,De=!!x.gradientMap,O=!!x.alphaMap,ye=x.alphaTest>0,ce=!!x.alphaHash,_e=!!x.extensions,Te=!!V.attributes.uv1,qe=!!V.attributes.uv2,je=!!V.attributes.uv3;let rt=lr;return x.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(rt=i.toneMapping),{isWebGL2:d,shaderID:Ee,shaderType:x.type,shaderName:x.name,vertexShader:Ae,fragmentShader:Me,defines:x.defines,customVertexShaderID:Pe,customFragmentShaderID:Ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,instancing:Be,instancingColor:Be&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ke===null?i.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:Ci,map:et,matcap:gt,envMap:Ke,envMapMode:Ke&&se.mapping,envMapCubeUVHeight:ee,aoMap:Q,lightMap:_t,bumpMap:ze,normalMap:ge,displacementMap:f&&we,emissiveMap:Fe,normalMapObjectSpace:ge&&x.normalMapType===px,normalMapTangentSpace:ge&&x.normalMapType===Yf,metalnessMap:Ge,roughnessMap:He,anisotropy:Ze,anisotropyMap:U,clearcoat:lt,clearcoatMap:k,clearcoatNormalMap:X,clearcoatRoughnessMap:de,iridescence:Ue,iridescenceMap:Se,iridescenceThicknessMap:xe,sheen:P,sheenColorMap:q,sheenRoughnessMap:L,specularMap:ue,specularColorMap:be,specularIntensityMap:G,transmission:_,transmissionMap:ae,thicknessMap:Re,gradientMap:De,opaque:x.transparent===!1&&x.blending===da,alphaMap:O,alphaTest:ye,alphaHash:ce,combine:x.combine,mapUv:et&&S(x.map.channel),aoMapUv:Q&&S(x.aoMap.channel),lightMapUv:_t&&S(x.lightMap.channel),bumpMapUv:ze&&S(x.bumpMap.channel),normalMapUv:ge&&S(x.normalMap.channel),displacementMapUv:we&&S(x.displacementMap.channel),emissiveMapUv:Fe&&S(x.emissiveMap.channel),metalnessMapUv:Ge&&S(x.metalnessMap.channel),roughnessMapUv:He&&S(x.roughnessMap.channel),anisotropyMapUv:U&&S(x.anisotropyMap.channel),clearcoatMapUv:k&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:X&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:q&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:L&&S(x.sheenRoughnessMap.channel),specularMapUv:ue&&S(x.specularMap.channel),specularColorMapUv:be&&S(x.specularColorMap.channel),specularIntensityMapUv:G&&S(x.specularIntensityMap.channel),transmissionMapUv:ae&&S(x.transmissionMap.channel),thicknessMapUv:Re&&S(x.thicknessMap.channel),alphaMapUv:O&&S(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||Ze),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:qe,vertexUv3s:je,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(et||O),fog:!!B,useFog:x.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&te.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:et&&x.map.isVideoTexture===!0&&x.map.colorSpace===Zt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ii,flipSided:x.side===kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:_e&&x.extensions.derivatives===!0,extensionFragDepth:_e&&x.extensions.fragDepth===!0,extensionDrawBuffers:_e&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const te in x.defines)E.push(te),E.push(x.defines[te]);return x.isRawShaderMaterial===!1&&(w(E,x),b(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function w(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.matcap&&s.enable(4),E.envMap&&s.enable(5),E.normalMapObjectSpace&&s.enable(6),E.normalMapTangentSpace&&s.enable(7),E.clearcoat&&s.enable(8),E.iridescence&&s.enable(9),E.alphaTest&&s.enable(10),E.vertexColors&&s.enable(11),E.vertexAlphas&&s.enable(12),E.vertexUv1s&&s.enable(13),E.vertexUv2s&&s.enable(14),E.vertexUv3s&&s.enable(15),E.vertexTangents&&s.enable(16),E.anisotropy&&s.enable(17),x.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.skinning&&s.enable(4),E.morphTargets&&s.enable(5),E.morphNormals&&s.enable(6),E.morphColors&&s.enable(7),E.premultipliedAlpha&&s.enable(8),E.shadowMapEnabled&&s.enable(9),E.useLegacyLights&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),x.push(s.mask)}function T(x){const E=y[x.type];let te;if(E){const z=bi[E];te=sh.clone(z.uniforms)}else te=x.uniforms;return te}function A(x,E){let te;for(let z=0,N=u.length;z<N;z++){const B=u[z];if(B.cacheKey===E){te=B,++te.usedTimes;break}}return te===void 0&&(te=new rS(i,E,x,a),u.push(te)),te}function D(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function C(x){c.remove(x)}function j(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:A,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:j}}function cS(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,s){i.get(a)[l]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function uS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fd(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(h,f,v,y,S,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:v,groupOrder:y,renderOrder:h.renderOrder,z:S,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=v,p.groupOrder=y,p.renderOrder=h.renderOrder,p.z=S,p.group=m),e++,p}function s(h,f,v,y,S,m){const p=l(h,f,v,y,S,m);v.transmission>0?n.push(p):v.transparent===!0?r.push(p):t.push(p)}function c(h,f,v,y,S,m){const p=l(h,f,v,y,S,m);v.transmission>0?n.unshift(p):v.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,f){t.length>1&&t.sort(h||uS),n.length>1&&n.sort(f||dd),r.length>1&&r.sort(f||dd)}function d(){for(let h=e,f=i.length;h<f;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:c,finish:d,sort:u}}function dS(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new fd,i.set(n,[l])):r>=a.length?(l=new fd,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function fS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Ft};break;case"SpotLight":t={position:new re,direction:new re,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new re,halfWidth:new re,halfHeight:new re};break}return i[e.id]=t,t}}}function hS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pS=0;function mS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vS(i,e){const t=new fS,n=hS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new re);const a=new re,l=new on,s=new on;function c(d,h){let f=0,v=0,y=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let S=0,m=0,p=0,w=0,b=0,T=0,A=0,D=0,C=0,j=0;d.sort(mS);const x=h===!0?Math.PI:1;for(let te=0,z=d.length;te<z;te++){const N=d[te],B=N.color,V=N.intensity,he=N.distance,se=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=B.r*V*x,v+=B.g*V*x,y+=B.b*V*x;else if(N.isLightProbe)for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(N.sh.coefficients[ee],V);else if(N.isDirectionalLight){const ee=t.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){const Ee=N.shadow,Y=n.get(N);Y.shadowBias=Ee.bias,Y.shadowNormalBias=Ee.normalBias,Y.shadowRadius=Ee.radius,Y.shadowMapSize=Ee.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=se,r.directionalShadowMatrix[S]=N.shadow.matrix,T++}r.directional[S]=ee,S++}else if(N.isSpotLight){const ee=t.get(N);ee.position.setFromMatrixPosition(N.matrixWorld),ee.color.copy(B).multiplyScalar(V*x),ee.distance=he,ee.coneCos=Math.cos(N.angle),ee.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ee.decay=N.decay,r.spot[p]=ee;const Ee=N.shadow;if(N.map&&(r.spotLightMap[C]=N.map,C++,Ee.updateMatrices(N),N.castShadow&&j++),r.spotLightMatrix[p]=Ee.matrix,N.castShadow){const Y=n.get(N);Y.shadowBias=Ee.bias,Y.shadowNormalBias=Ee.normalBias,Y.shadowRadius=Ee.radius,Y.shadowMapSize=Ee.mapSize,r.spotShadow[p]=Y,r.spotShadowMap[p]=se,D++}p++}else if(N.isRectAreaLight){const ee=t.get(N);ee.color.copy(B).multiplyScalar(V),ee.halfWidth.set(N.width*.5,0,0),ee.halfHeight.set(0,N.height*.5,0),r.rectArea[w]=ee,w++}else if(N.isPointLight){const ee=t.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity*x),ee.distance=N.distance,ee.decay=N.decay,N.castShadow){const Ee=N.shadow,Y=n.get(N);Y.shadowBias=Ee.bias,Y.shadowNormalBias=Ee.normalBias,Y.shadowRadius=Ee.radius,Y.shadowMapSize=Ee.mapSize,Y.shadowCameraNear=Ee.camera.near,Y.shadowCameraFar=Ee.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=se,r.pointShadowMatrix[m]=N.shadow.matrix,A++}r.point[m]=ee,m++}else if(N.isHemisphereLight){const ee=t.get(N);ee.skyColor.copy(N.color).multiplyScalar(V*x),ee.groundColor.copy(N.groundColor).multiplyScalar(V*x),r.hemi[b]=ee,b++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=y;const E=r.hash;(E.directionalLength!==S||E.pointLength!==m||E.spotLength!==p||E.rectAreaLength!==w||E.hemiLength!==b||E.numDirectionalShadows!==T||E.numPointShadows!==A||E.numSpotShadows!==D||E.numSpotMaps!==C)&&(r.directional.length=S,r.spot.length=p,r.rectArea.length=w,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=D+C-j,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=j,E.directionalLength=S,E.pointLength=m,E.spotLength=p,E.rectAreaLength=w,E.hemiLength=b,E.numDirectionalShadows=T,E.numPointShadows=A,E.numSpotShadows=D,E.numSpotMaps=C,r.version=pS++)}function u(d,h){let f=0,v=0,y=0,S=0,m=0;const p=h.matrixWorldInverse;for(let w=0,b=d.length;w<b;w++){const T=d[w];if(T.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(p),f++}else if(T.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(p),y++}else if(T.isRectAreaLight){const A=r.rectArea[S];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),s.identity(),l.copy(T.matrixWorld),l.premultiply(p),s.extractRotation(l),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),S++}else if(T.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),v++}else if(T.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:u,state:r}}function hd(i,e){const t=new vS(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(h){n.push(h)}function s(h){r.push(h)}function c(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:l,pushShadow:s}}function gS(i,e){let t=new WeakMap;function n(a,l=0){const s=t.get(a);let c;return s===void 0?(c=new hd(i,e),t.set(a,[c])):l>=s.length?(c=new hd(i,e),s.push(c)):c=s[l],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class _S extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xS extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yS=`uniform sampler2D shadow_pass;
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
}`;function SS(i,e,t){let n=new oc;const r=new at,a=new at,l=new Jt,s=new _S({depthPacking:hx}),c=new xS,u={},d=t.maxTextureSize,h={[Ri]:kn,[kn]:Ri,[ii]:ii},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:bS,fragmentShader:yS}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const y=new Qi;y.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Wt(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of;let p=this.type;this.render=function(A,D,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const j=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),te=i.state;te.setBlending(Xi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const z=p!==Bi&&this.type===Bi,N=p===Bi&&this.type!==Bi;for(let B=0,V=A.length;B<V;B++){const he=A[B],se=he.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);const ee=se.getFrameExtents();if(r.multiply(ee),a.copy(se.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ee.x),r.x=a.x*ee.x,se.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ee.y),r.y=a.y*ee.y,se.mapSize.y=a.y)),se.map===null||z===!0||N===!0){const Y=this.type!==Bi?{minFilter:en,magFilter:en}:{};se.map!==null&&se.map.dispose(),se.map=new Ki(r.x,r.y,Y),se.map.texture.name=he.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const Ee=se.getViewportCount();for(let Y=0;Y<Ee;Y++){const H=se.getViewport(Y);l.set(a.x*H.x,a.y*H.y,a.x*H.z,a.y*H.w),te.viewport(l),se.updateMatrices(he,Y),n=se.getFrustum(),T(D,C,se.camera,he,this.type)}se.isPointLightShadow!==!0&&this.type===Bi&&w(se,C),se.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(j,x,E)};function w(A,D){const C=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ki(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,C,f,S,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,C,v,S,null)}function b(A,D,C,j){let x=null;const E=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=C.isPointLight===!0?c:s,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const te=x.uuid,z=D.uuid;let N=u[te];N===void 0&&(N={},u[te]=N);let B=N[z];B===void 0&&(B=x.clone(),N[z]=B),x=B}if(x.visible=D.visible,x.wireframe=D.wireframe,j===Bi?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:h[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const te=i.properties.get(x);te.light=C}return x}function T(A,D,C,j,x){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Bi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=e.update(A),N=A.material;if(Array.isArray(N)){const B=z.groups;for(let V=0,he=B.length;V<he;V++){const se=B[V],ee=N[se.materialIndex];if(ee&&ee.visible){const Ee=b(A,ee,j,x);i.renderBufferDirect(C,null,z,Ee,A,se)}}}else if(N.visible){const B=b(A,N,j,x);i.renderBufferDirect(C,null,z,B,A,null)}}const te=A.children;for(let z=0,N=te.length;z<N;z++)T(te[z],D,C,j,x)}}function MS(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const ye=new Jt;let ce=null;const _e=new Jt(0,0,0,0);return{setMask:function(Te){ce!==Te&&!O&&(i.colorMask(Te,Te,Te,Te),ce=Te)},setLocked:function(Te){O=Te},setClear:function(Te,qe,je,rt,Mt){Mt===!0&&(Te*=rt,qe*=rt,je*=rt),ye.set(Te,qe,je,rt),_e.equals(ye)===!1&&(i.clearColor(Te,qe,je,rt),_e.copy(ye))},reset:function(){O=!1,ce=null,_e.set(-1,0,0,0)}}}function a(){let O=!1,ye=null,ce=null,_e=null;return{setTest:function(Te){Te?ke(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(Te){ye!==Te&&!O&&(i.depthMask(Te),ye=Te)},setFunc:function(Te){if(ce!==Te){switch(Te){case H_:i.depthFunc(i.NEVER);break;case V_:i.depthFunc(i.ALWAYS);break;case W_:i.depthFunc(i.LESS);break;case Cl:i.depthFunc(i.LEQUAL);break;case j_:i.depthFunc(i.EQUAL);break;case X_:i.depthFunc(i.GEQUAL);break;case q_:i.depthFunc(i.GREATER);break;case Y_:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Te}},setLocked:function(Te){O=Te},setClear:function(Te){_e!==Te&&(i.clearDepth(Te),_e=Te)},reset:function(){O=!1,ye=null,ce=null,_e=null}}}function l(){let O=!1,ye=null,ce=null,_e=null,Te=null,qe=null,je=null,rt=null,Mt=null;return{setTest:function(ot){O||(ot?ke(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(ot){ye!==ot&&!O&&(i.stencilMask(ot),ye=ot)},setFunc:function(ot,It,Lt){(ce!==ot||_e!==It||Te!==Lt)&&(i.stencilFunc(ot,It,Lt),ce=ot,_e=It,Te=Lt)},setOp:function(ot,It,Lt){(qe!==ot||je!==It||rt!==Lt)&&(i.stencilOp(ot,It,Lt),qe=ot,je=It,rt=Lt)},setLocked:function(ot){O=ot},setClear:function(ot){Mt!==ot&&(i.clearStencil(ot),Mt=ot)},reset:function(){O=!1,ye=null,ce=null,_e=null,Te=null,qe=null,je=null,rt=null,Mt=null}}}const s=new r,c=new a,u=new l,d=new WeakMap,h=new WeakMap;let f={},v={},y=new WeakMap,S=[],m=null,p=!1,w=null,b=null,T=null,A=null,D=null,C=null,j=null,x=!1,E=null,te=null,z=null,N=null,B=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,se=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ee)[1]),he=se>=1):ee.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),he=se>=2);let Ee=null,Y={};const H=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Ae=new Jt().fromArray(H),Me=new Jt().fromArray(le);function Pe(O,ye,ce,_e){const Te=new Uint8Array(4),qe=i.createTexture();i.bindTexture(O,qe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ce;je++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(ye,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ye+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return qe}const Ne={};Ne[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ne[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ke(i.DEPTH_TEST),c.setFunc(Cl),we(!1),Fe(Qc),ke(i.CULL_FACE),ze(Xi);function ke(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function Be(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function et(O,ye){return v[O]!==ye?(i.bindFramebuffer(O,ye),v[O]=ye,n&&(O===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=ye),O===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=ye)),!0):!1}function gt(O,ye){let ce=S,_e=!1;if(O)if(ce=y.get(ye),ce===void 0&&(ce=[],y.set(ye,ce)),O.isWebGLMultipleRenderTargets){const Te=O.texture;if(ce.length!==Te.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,je=Te.length;qe<je;qe++)ce[qe]=i.COLOR_ATTACHMENT0+qe;ce.length=Te.length,_e=!0}}else ce[0]!==i.COLOR_ATTACHMENT0&&(ce[0]=i.COLOR_ATTACHMENT0,_e=!0);else ce[0]!==i.BACK&&(ce[0]=i.BACK,_e=!0);_e&&(t.isWebGL2?i.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Ke(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const Q={[ra]:i.FUNC_ADD,[L_]:i.FUNC_SUBTRACT,[I_]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[nu]=i.MIN,Q[iu]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Q[nu]=O.MIN_EXT,Q[iu]=O.MAX_EXT)}const _t={[D_]:i.ZERO,[U_]:i.ONE,[N_]:i.SRC_COLOR,[kf]:i.SRC_ALPHA,[G_]:i.SRC_ALPHA_SATURATE,[B_]:i.DST_COLOR,[k_]:i.DST_ALPHA,[O_]:i.ONE_MINUS_SRC_COLOR,[Ff]:i.ONE_MINUS_SRC_ALPHA,[z_]:i.ONE_MINUS_DST_COLOR,[F_]:i.ONE_MINUS_DST_ALPHA};function ze(O,ye,ce,_e,Te,qe,je,rt){if(O===Xi){p===!0&&(Be(i.BLEND),p=!1);return}if(p===!1&&(ke(i.BLEND),p=!0),O!==P_){if(O!==w||rt!==x){if((b!==ra||D!==ra)&&(i.blendEquation(i.FUNC_ADD),b=ra,D=ra),rt)switch(O){case da:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFunc(i.ONE,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,A=null,C=null,j=null,w=O,x=rt}return}Te=Te||ye,qe=qe||ce,je=je||_e,(ye!==b||Te!==D)&&(i.blendEquationSeparate(Q[ye],Q[Te]),b=ye,D=Te),(ce!==T||_e!==A||qe!==C||je!==j)&&(i.blendFuncSeparate(_t[ce],_t[_e],_t[qe],_t[je]),T=ce,A=_e,C=qe,j=je),w=O,x=!1}function ge(O,ye){O.side===ii?Be(i.CULL_FACE):ke(i.CULL_FACE);let ce=O.side===kn;ye&&(ce=!ce),we(ce),O.blending===da&&O.transparent===!1?ze(Xi):ze(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),s.setMask(O.colorWrite);const _e=O.stencilWrite;u.setTest(_e),_e&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),He(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ke(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(O){E!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),E=O)}function Fe(O){O!==A_?(ke(i.CULL_FACE),O!==te&&(O===Qc?i.cullFace(i.BACK):O===R_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),te=O}function Ge(O){O!==z&&(he&&i.lineWidth(O),z=O)}function He(O,ye,ce){O?(ke(i.POLYGON_OFFSET_FILL),(N!==ye||B!==ce)&&(i.polygonOffset(ye,ce),N=ye,B=ce)):Be(i.POLYGON_OFFSET_FILL)}function Ze(O){O?ke(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function lt(O){O===void 0&&(O=i.TEXTURE0+V-1),Ee!==O&&(i.activeTexture(O),Ee=O)}function Ue(O,ye,ce){ce===void 0&&(Ee===null?ce=i.TEXTURE0+V-1:ce=Ee);let _e=Y[ce];_e===void 0&&(_e={type:void 0,texture:void 0},Y[ce]=_e),(_e.type!==O||_e.texture!==ye)&&(Ee!==ce&&(i.activeTexture(ce),Ee=ce),i.bindTexture(O,ye||Ne[O]),_e.type=O,_e.texture=ye)}function P(){const O=Y[Ee];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(O){Ae.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ae.copy(O))}function G(O){Me.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Me.copy(O))}function ae(O,ye){let ce=h.get(ye);ce===void 0&&(ce=new WeakMap,h.set(ye,ce));let _e=ce.get(O);_e===void 0&&(_e=i.getUniformBlockIndex(ye,O.name),ce.set(O,_e))}function Re(O,ye){const _e=h.get(ye).get(O);d.get(ye)!==_e&&(i.uniformBlockBinding(ye,_e,O.__bindingPointIndex),d.set(ye,_e))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Ee=null,Y={},v={},y=new WeakMap,S=[],m=null,p=!1,w=null,b=null,T=null,A=null,D=null,C=null,j=null,x=!1,E=null,te=null,z=null,N=null,B=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),c.reset(),u.reset()}return{buffers:{color:s,depth:c,stencil:u},enable:ke,disable:Be,bindFramebuffer:et,drawBuffers:gt,useProgram:Ke,setBlending:ze,setMaterial:ge,setFlipSided:we,setCullFace:Fe,setLineWidth:Ge,setPolygonOffset:He,setScissorTest:Ze,activeTexture:lt,bindTexture:Ue,unbindTexture:P,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:L,texImage3D:ue,updateUBOMapping:ae,uniformBlockBinding:Re,texStorage2D:xe,texStorage3D:q,texSubImage2D:k,texSubImage3D:X,compressedTexSubImage2D:de,compressedTexSubImage3D:Se,scissor:be,viewport:G,reset:De}}function ES(i,e,t,n,r,a,l){const s=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let S;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,_){return p?new OffscreenCanvas(P,_):co("canvas")}function b(P,_,U,k){let X=1;if((P.width>k||P.height>k)&&(X=k/Math.max(P.width,P.height)),X<1||_===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const de=_?Ol:Math.floor,Se=de(X*P.width),xe=de(X*P.height);S===void 0&&(S=w(Se,xe));const q=U?w(Se,xe):S;return q.width=Se,q.height=xe,q.getContext("2d").drawImage(P,0,0,Se,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Se+"x"+xe+")."),q}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function T(P){return Lu(P.width)&&Lu(P.height)}function A(P){return s?!1:P.wrapS!==ci||P.wrapT!==ci||P.minFilter!==en&&P.minFilter!==ti}function D(P,_){return P.generateMipmaps&&_&&P.minFilter!==en&&P.minFilter!==ti}function C(P){i.generateMipmap(P)}function j(P,_,U,k,X=!1){if(s===!1)return _;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=_;return _===i.RED&&(U===i.FLOAT&&(de=i.R32F),U===i.HALF_FLOAT&&(de=i.R16F),U===i.UNSIGNED_BYTE&&(de=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(de=i.R8UI),U===i.UNSIGNED_SHORT&&(de=i.R16UI),U===i.UNSIGNED_INT&&(de=i.R32UI),U===i.BYTE&&(de=i.R8I),U===i.SHORT&&(de=i.R16I),U===i.INT&&(de=i.R32I)),_===i.RG&&(U===i.FLOAT&&(de=i.RG32F),U===i.HALF_FLOAT&&(de=i.RG16F),U===i.UNSIGNED_BYTE&&(de=i.RG8)),_===i.RGBA&&(U===i.FLOAT&&(de=i.RGBA32F),U===i.HALF_FLOAT&&(de=i.RGBA16F),U===i.UNSIGNED_BYTE&&(de=k===Zt&&X===!1?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)),(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function x(P,_,U){return D(P,U)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==ti?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function E(P){return P===en||P===ru||P===Uo?i.NEAREST:i.LINEAR}function te(P){const _=P.target;_.removeEventListener("dispose",te),N(_),_.isVideoTexture&&y.delete(_)}function z(P){const _=P.target;_.removeEventListener("dispose",z),V(_)}function N(P){const _=n.get(P);if(_.__webglInit===void 0)return;const U=P.source,k=m.get(U);if(k){const X=k[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&B(P),Object.keys(k).length===0&&m.delete(U)}n.remove(P)}function B(P){const _=n.get(P);i.deleteTexture(_.__webglTexture);const U=P.source,k=m.get(U);delete k[_.__cacheKey],l.memory.textures--}function V(P){const _=P.texture,U=n.get(P),k=n.get(_);if(k.__webglTexture!==void 0&&(i.deleteTexture(k.__webglTexture),l.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(U.__webglFramebuffer[X]))for(let de=0;de<U.__webglFramebuffer[X].length;de++)i.deleteFramebuffer(U.__webglFramebuffer[X][de]);else i.deleteFramebuffer(U.__webglFramebuffer[X]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[X])}else{if(Array.isArray(U.__webglFramebuffer))for(let X=0;X<U.__webglFramebuffer.length;X++)i.deleteFramebuffer(U.__webglFramebuffer[X]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let X=0;X<U.__webglColorRenderbuffer.length;X++)U.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[X]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let X=0,de=_.length;X<de;X++){const Se=n.get(_[X]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),l.memory.textures--),n.remove(_[X])}n.remove(_),n.remove(P)}let he=0;function se(){he=0}function ee(){const P=he;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),he+=1,P}function Ee(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function Y(P,_){const U=n.get(P);if(P.isVideoTexture&&lt(P),P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){const k=P.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(U,P,_);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function H(P,_){const U=n.get(P);if(P.version>0&&U.__version!==P.version){et(U,P,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function le(P,_){const U=n.get(P);if(P.version>0&&U.__version!==P.version){et(U,P,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function Ae(P,_){const U=n.get(P);if(P.version>0&&U.__version!==P.version){gt(U,P,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}const Me={[Ll]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Il]:i.MIRRORED_REPEAT},Pe={[en]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[Uo]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[nx]:i.LINEAR_MIPMAP_NEAREST,[us]:i.LINEAR_MIPMAP_LINEAR},Ne={[vx]:i.NEVER,[Mx]:i.ALWAYS,[gx]:i.LESS,[xx]:i.LEQUAL,[_x]:i.EQUAL,[Sx]:i.GEQUAL,[bx]:i.GREATER,[yx]:i.NOTEQUAL};function ke(P,_,U){if(U?(i.texParameteri(P,i.TEXTURE_WRAP_S,Me[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Me[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Me[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Pe[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Pe[_.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==ci||_.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,E(_.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,E(_.minFilter)),_.minFilter!==en&&_.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ne[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===en||_.minFilter!==Uo&&_.minFilter!==us||_.type===Vi&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===Sa&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Be(P,_){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",te));const k=_.source;let X=m.get(k);X===void 0&&(X={},m.set(k,X));const de=Ee(_);if(de!==P.__cacheKey){X[de]===void 0&&(X[de]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,U=!0),X[de].usedTimes++;const Se=X[P.__cacheKey];Se!==void 0&&(X[P.__cacheKey].usedTimes--,Se.usedTimes===0&&B(_)),P.__cacheKey=de,P.__webglTexture=X[de].texture}return U}function et(P,_,U){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);const X=Be(P,_),de=_.source;t.bindTexture(k,P.__webglTexture,i.TEXTURE0+U);const Se=n.get(de);if(de.version!==Se.__version||X===!0){t.activeTexture(i.TEXTURE0+U),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const xe=A(_)&&T(_.image)===!1;let q=b(_.image,xe,!1,d);q=Ue(_,q);const L=T(q)||s,ue=a.convert(_.format,_.colorSpace);let be=a.convert(_.type),G=j(_.internalFormat,ue,be,_.colorSpace,_.isVideoTexture);ke(k,_,L);let ae;const Re=_.mipmaps,De=s&&_.isVideoTexture!==!0,O=Se.__version===void 0||X===!0,ye=x(_,q,L);if(_.isDepthTexture)G=i.DEPTH_COMPONENT,s?_.type===Vi?G=i.DEPTH_COMPONENT32F:_.type===sr?G=i.DEPTH_COMPONENT24:_.type===Ar?G=i.DEPTH24_STENCIL8:G=i.DEPTH_COMPONENT16:_.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Rr&&G===i.DEPTH_COMPONENT&&_.type!==ac&&_.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=sr,be=a.convert(_.type)),_.format===Ma&&G===i.DEPTH_COMPONENT&&(G=i.DEPTH_STENCIL,_.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ar,be=a.convert(_.type))),O&&(De?t.texStorage2D(i.TEXTURE_2D,1,G,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,G,q.width,q.height,0,ue,be,null));else if(_.isDataTexture)if(Re.length>0&&L){De&&O&&t.texStorage2D(i.TEXTURE_2D,ye,G,Re[0].width,Re[0].height);for(let ce=0,_e=Re.length;ce<_e;ce++)ae=Re[ce],De?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ae.width,ae.height,ue,be,ae.data):t.texImage2D(i.TEXTURE_2D,ce,G,ae.width,ae.height,0,ue,be,ae.data);_.generateMipmaps=!1}else De?(O&&t.texStorage2D(i.TEXTURE_2D,ye,G,q.width,q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,q.width,q.height,ue,be,q.data)):t.texImage2D(i.TEXTURE_2D,0,G,q.width,q.height,0,ue,be,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&O&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,G,Re[0].width,Re[0].height,q.depth);for(let ce=0,_e=Re.length;ce<_e;ce++)ae=Re[ce],_.format!==ui?ue!==null?De?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ae.width,ae.height,q.depth,ue,ae.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,G,ae.width,ae.height,q.depth,0,ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ae.width,ae.height,q.depth,ue,be,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,G,ae.width,ae.height,q.depth,0,ue,be,ae.data)}else{De&&O&&t.texStorage2D(i.TEXTURE_2D,ye,G,Re[0].width,Re[0].height);for(let ce=0,_e=Re.length;ce<_e;ce++)ae=Re[ce],_.format!==ui?ue!==null?De?t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,ae.width,ae.height,ue,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,G,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ae.width,ae.height,ue,be,ae.data):t.texImage2D(i.TEXTURE_2D,ce,G,ae.width,ae.height,0,ue,be,ae.data)}else if(_.isDataArrayTexture)De?(O&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,G,q.width,q.height,q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ue,be,q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,G,q.width,q.height,q.depth,0,ue,be,q.data);else if(_.isData3DTexture)De?(O&&t.texStorage3D(i.TEXTURE_3D,ye,G,q.width,q.height,q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ue,be,q.data)):t.texImage3D(i.TEXTURE_3D,0,G,q.width,q.height,q.depth,0,ue,be,q.data);else if(_.isFramebufferTexture){if(O)if(De)t.texStorage2D(i.TEXTURE_2D,ye,G,q.width,q.height);else{let ce=q.width,_e=q.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,G,ce,_e,0,ue,be,null),ce>>=1,_e>>=1}}else if(Re.length>0&&L){De&&O&&t.texStorage2D(i.TEXTURE_2D,ye,G,Re[0].width,Re[0].height);for(let ce=0,_e=Re.length;ce<_e;ce++)ae=Re[ce],De?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ue,be,ae):t.texImage2D(i.TEXTURE_2D,ce,G,ue,be,ae);_.generateMipmaps=!1}else De?(O&&t.texStorage2D(i.TEXTURE_2D,ye,G,q.width,q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,be,q)):t.texImage2D(i.TEXTURE_2D,0,G,ue,be,q);D(_,L)&&C(k),Se.__version=de.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function gt(P,_,U){if(_.image.length!==6)return;const k=Be(P,_),X=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+U);const de=n.get(X);if(X.version!==de.__version||k===!0){t.activeTexture(i.TEXTURE0+U),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,xe=_.image[0]&&_.image[0].isDataTexture,q=[];for(let ce=0;ce<6;ce++)!Se&&!xe?q[ce]=b(_.image[ce],!1,!0,u):q[ce]=xe?_.image[ce].image:_.image[ce],q[ce]=Ue(_,q[ce]);const L=q[0],ue=T(L)||s,be=a.convert(_.format,_.colorSpace),G=a.convert(_.type),ae=j(_.internalFormat,be,G,_.colorSpace),Re=s&&_.isVideoTexture!==!0,De=de.__version===void 0||k===!0;let O=x(_,L,ue);ke(i.TEXTURE_CUBE_MAP,_,ue);let ye;if(Se){Re&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,O,ae,L.width,L.height);for(let ce=0;ce<6;ce++){ye=q[ce].mipmaps;for(let _e=0;_e<ye.length;_e++){const Te=ye[_e];_.format!==ui?be!==null?Re?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e,0,0,Te.width,Te.height,be,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e,ae,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e,0,0,Te.width,Te.height,be,G,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e,ae,Te.width,Te.height,0,be,G,Te.data)}}}else{ye=_.mipmaps,Re&&De&&(ye.length>0&&O++,t.texStorage2D(i.TEXTURE_CUBE_MAP,O,ae,q[0].width,q[0].height));for(let ce=0;ce<6;ce++)if(xe){Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,q[ce].width,q[ce].height,be,G,q[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ae,q[ce].width,q[ce].height,0,be,G,q[ce].data);for(let _e=0;_e<ye.length;_e++){const qe=ye[_e].image[ce].image;Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e+1,0,0,qe.width,qe.height,be,G,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e+1,ae,qe.width,qe.height,0,be,G,qe.data)}}else{Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,be,G,q[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ae,be,G,q[ce]);for(let _e=0;_e<ye.length;_e++){const Te=ye[_e];Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e+1,0,0,be,G,Te.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e+1,ae,be,G,Te.image[ce])}}}D(_,ue)&&C(i.TEXTURE_CUBE_MAP),de.__version=X.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Ke(P,_,U,k,X,de){const Se=a.convert(U.format,U.colorSpace),xe=a.convert(U.type),q=j(U.internalFormat,Se,xe,U.colorSpace);if(!n.get(_).__hasExternalTextures){const ue=Math.max(1,_.width>>de),be=Math.max(1,_.height>>de);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,de,q,ue,be,_.depth,0,Se,xe,null):t.texImage2D(X,de,q,ue,be,0,Se,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Ze(_)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,X,n.get(U).__webglTexture,0,He(_)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,X,n.get(U).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(P,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer&&!_.stencilBuffer){let k=i.DEPTH_COMPONENT16;if(U||Ze(_)){const X=_.depthTexture;X&&X.isDepthTexture&&(X.type===Vi?k=i.DEPTH_COMPONENT32F:X.type===sr&&(k=i.DEPTH_COMPONENT24));const de=He(_);Ze(_)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,k,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,k,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(_.depthBuffer&&_.stencilBuffer){const k=He(_);U&&Ze(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,i.DEPTH24_STENCIL8,_.width,_.height):Ze(_)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const k=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let X=0;X<k.length;X++){const de=k[X],Se=a.convert(de.format,de.colorSpace),xe=a.convert(de.type),q=j(de.internalFormat,Se,xe,de.colorSpace),L=He(_);U&&Ze(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,q,_.width,_.height):Ze(_)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(P,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const k=n.get(_.depthTexture).__webglTexture,X=He(_);if(_.depthTexture.format===Rr)Ze(_)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else if(_.depthTexture.format===Ma)Ze(_)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function ze(P){const _=n.get(P),U=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");_t(_.__webglFramebuffer,P)}else if(U){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]=i.createRenderbuffer(),Q(_.__webglDepthbuffer[k],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Q(_.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(P,_,U){const k=n.get(P);_!==void 0&&Ke(k.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&ze(P)}function we(P){const _=P.texture,U=n.get(P),k=n.get(_);P.addEventListener("dispose",z),P.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,l.memory.textures++);const X=P.isWebGLCubeRenderTarget===!0,de=P.isWebGLMultipleRenderTargets===!0,Se=T(P)||s;if(X){U.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(s&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[xe]=[];for(let q=0;q<_.mipmaps.length;q++)U.__webglFramebuffer[xe][q]=i.createFramebuffer()}else U.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(s&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let xe=0;xe<_.mipmaps.length;xe++)U.__webglFramebuffer[xe]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(de)if(r.drawBuffers){const xe=P.texture;for(let q=0,L=xe.length;q<L;q++){const ue=n.get(xe[q]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&P.samples>0&&Ze(P)===!1){const xe=de?_:[_];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<xe.length;q++){const L=xe[q];U.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[q]);const ue=a.convert(L.format,L.colorSpace),be=a.convert(L.type),G=j(L.internalFormat,ue,be,L.colorSpace,P.isXRRenderTarget===!0),ae=He(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,G,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,U.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(U.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),ke(i.TEXTURE_CUBE_MAP,_,Se);for(let xe=0;xe<6;xe++)if(s&&_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)Ke(U.__webglFramebuffer[xe][q],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,q);else Ke(U.__webglFramebuffer[xe],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);D(_,Se)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const xe=P.texture;for(let q=0,L=xe.length;q<L;q++){const ue=xe[q],be=n.get(ue);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),ke(i.TEXTURE_2D,ue,Se),Ke(U.__webglFramebuffer,P,ue,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,0),D(ue,Se)&&C(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(s?xe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,k.__webglTexture),ke(xe,_,Se),s&&_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)Ke(U.__webglFramebuffer[q],P,_,i.COLOR_ATTACHMENT0,xe,q);else Ke(U.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,xe,0);D(_,Se)&&C(xe),t.unbindTexture()}P.depthBuffer&&ze(P)}function Fe(P){const _=T(P)||s,U=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let k=0,X=U.length;k<X;k++){const de=U[k];if(D(de,_)){const Se=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(de).__webglTexture;t.bindTexture(Se,xe),C(Se),t.unbindTexture()}}}function Ge(P){if(s&&P.samples>0&&Ze(P)===!1){const _=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],U=P.width,k=P.height;let X=i.COLOR_BUFFER_BIT;const de=[],Se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(P),q=P.isWebGLMultipleRenderTargets===!0;if(q)for(let L=0;L<_.length;L++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let L=0;L<_.length;L++){de.push(i.COLOR_ATTACHMENT0+L),P.depthBuffer&&de.push(Se);const ue=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(ue===!1&&(P.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),q&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[L]),ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),q){const be=n.get(_[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,U,k,0,0,U,k,X,i.NEAREST),v&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let L=0;L<_.length;L++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,xe.__webglColorRenderbuffer[L]);const ue=n.get(_[L]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function He(P){return Math.min(h,P.samples)}function Ze(P){const _=n.get(P);return s&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function lt(P){const _=l.render.frame;y.get(P)!==_&&(y.set(P,_),P.update())}function Ue(P,_){const U=P.colorSpace,k=P.format,X=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ul||U!==Ci&&U!==Pr&&(U===Zt||U===xo?s===!1?e.has("EXT_sRGB")===!0&&k===ui?(P.format=Ul,P.minFilter=ti,P.generateMipmaps=!1):_=Zf.sRGBToLinear(_):(k!==ui||X!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}this.allocateTextureUnit=ee,this.resetTextureUnits=se,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=le,this.setTextureCube=Ae,this.rebindTextures=ge,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=Ze}const wS=0,hn=1;function TS(i,e,t){const n=t.isWebGL2;function r(a,l=Pr){let s;const c=l===Zt||l===xo?hn:wS;if(a===cr)return i.UNSIGNED_BYTE;if(a===Hf)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Vf)return i.UNSIGNED_SHORT_5_5_5_1;if(a===ix)return i.BYTE;if(a===rx)return i.SHORT;if(a===ac)return i.UNSIGNED_SHORT;if(a===Gf)return i.INT;if(a===sr)return i.UNSIGNED_INT;if(a===Vi)return i.FLOAT;if(a===Sa)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===ax)return i.ALPHA;if(a===ui)return i.RGBA;if(a===sx)return i.LUMINANCE;if(a===ox)return i.LUMINANCE_ALPHA;if(a===Rr)return i.DEPTH_COMPONENT;if(a===Ma)return i.DEPTH_STENCIL;if(a===Ul)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===lx)return i.RED;if(a===Wf)return i.RED_INTEGER;if(a===cx)return i.RG;if(a===jf)return i.RG_INTEGER;if(a===Xf)return i.RGBA_INTEGER;if(a===No||a===Oo||a===ko||a===Fo)if(c===hn)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===au||a===su||a===ou||a===lu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===au)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ou)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ux)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===cu||a===uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===cu)return c===hn?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===uu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===du||a===fu||a===hu||a===pu||a===mu||a===vu||a===gu||a===_u||a===xu||a===bu||a===yu||a===Su||a===Mu||a===Eu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===du)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===fu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===hu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===pu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===mu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===vu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===gu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===_u)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===xu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===bu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===yu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Su)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Mu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Eu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Bo||a===wu||a===Tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Bo)return c===hn?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===wu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===dx||a===Au||a===Ru||a===Cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Bo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ar?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class AS extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xn extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RS={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const s=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(u,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),v=.02,y=.005;u.inputState.pinching&&f>v+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mh extends En{constructor(e,t,n,r,a,l,s,c,u,d){if(d=d!==void 0?d:Rr,d!==Rr&&d!==Ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Rr&&(n=sr),n===void 0&&d===Ma&&(n=Ar),super(null,r,a,l,s,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class CS extends Dr{constructor(e,t){super();const n=this;let r=null,a=1,l=null,s="local-floor",c=1,u=null,d=null,h=null,f=null,v=null,y=null;const S=t.getContextAttributes();let m=null,p=null;const w=[],b=[],T=new Wn;T.layers.enable(1),T.viewport=new Jt;const A=new Wn;A.layers.enable(2),A.viewport=new Jt;const D=[T,A],C=new AS;C.layers.enable(1),C.layers.enable(2);let j=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let le=w[H];return le===void 0&&(le=new ll,w[H]=le),le.getTargetRaySpace()},this.getControllerGrip=function(H){let le=w[H];return le===void 0&&(le=new ll,w[H]=le),le.getGripSpace()},this.getHand=function(H){let le=w[H];return le===void 0&&(le=new ll,w[H]=le),le.getHandSpace()};function E(H){const le=b.indexOf(H.inputSource);if(le===-1)return;const Ae=w[le];Ae!==void 0&&(Ae.update(H.inputSource,H.frame,u||l),Ae.dispatchEvent({type:H.type,data:H.inputSource}))}function te(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",z);for(let H=0;H<w.length;H++){const le=b[H];le!==null&&(b[H]=null,w[H].disconnect(le))}j=null,x=null,e.setRenderTarget(m),v=null,f=null,h=null,r=null,p=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",te),r.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:v}),p=new Ki(v.framebufferWidth,v.framebufferHeight,{format:ui,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let le=null,Ae=null,Me=null;S.depth&&(Me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=S.stencil?Ma:Rr,Ae=S.stencil?Ar:sr);const Pe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),p=new Ki(f.textureWidth,f.textureHeight,{format:ui,type:cr,depthTexture:new mh(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Ne=e.properties.get(p);Ne.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,l=await r.requestReferenceSpace(s),Y.setContext(r),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(H){for(let le=0;le<H.removed.length;le++){const Ae=H.removed[le],Me=b.indexOf(Ae);Me>=0&&(b[Me]=null,w[Me].disconnect(Ae))}for(let le=0;le<H.added.length;le++){const Ae=H.added[le];let Me=b.indexOf(Ae);if(Me===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=b.length){b.push(Ae),Me=Ne;break}else if(b[Ne]===null){b[Ne]=Ae,Me=Ne;break}if(Me===-1)break}const Pe=w[Me];Pe&&Pe.connect(Ae)}}const N=new re,B=new re;function V(H,le,Ae){N.setFromMatrixPosition(le.matrixWorld),B.setFromMatrixPosition(Ae.matrixWorld);const Me=N.distanceTo(B),Pe=le.projectionMatrix.elements,Ne=Ae.projectionMatrix.elements,ke=Pe[14]/(Pe[10]-1),Be=Pe[14]/(Pe[10]+1),et=(Pe[9]+1)/Pe[5],gt=(Pe[9]-1)/Pe[5],Ke=(Pe[8]-1)/Pe[0],Q=(Ne[8]+1)/Ne[0],_t=ke*Ke,ze=ke*Q,ge=Me/(-Ke+Q),we=ge*-Ke;le.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(we),H.translateZ(ge),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Fe=ke+ge,Ge=Be+ge,He=_t-we,Ze=ze+(Me-we),lt=et*Be/Ge*Fe,Ue=gt*Be/Ge*Fe;H.projectionMatrix.makePerspective(He,Ze,lt,Ue,Fe,Ge),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function he(H,le){le===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(le.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;C.near=A.near=T.near=H.near,C.far=A.far=T.far=H.far,(j!==C.near||x!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),j=C.near,x=C.far);const le=H.parent,Ae=C.cameras;he(C,le);for(let Me=0;Me<Ae.length;Me++)he(Ae[Me],le);Ae.length===2?V(C,T,A):C.projectionMatrix.copy(T.projectionMatrix),se(H,C,le)};function se(H,le,Ae){Ae===null?H.matrix.copy(le.matrixWorld):(H.matrix.copy(Ae.matrixWorld),H.matrix.invert(),H.matrix.multiply(le.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(le.projectionMatrix),H.projectionMatrixInverse.copy(le.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Nl*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&v===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=H)};let ee=null;function Ee(H,le){if(d=le.getViewerPose(u||l),y=le,d!==null){const Ae=d.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let Me=!1;Ae.length!==C.cameras.length&&(C.cameras.length=0,Me=!0);for(let Pe=0;Pe<Ae.length;Pe++){const Ne=Ae[Pe];let ke=null;if(v!==null)ke=v.getViewport(Ne);else{const et=h.getViewSubImage(f,Ne);ke=et.viewport,Pe===0&&(e.setRenderTargetTextures(p,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(p))}let Be=D[Pe];Be===void 0&&(Be=new Wn,Be.layers.enable(Pe),Be.viewport=new Jt,D[Pe]=Be),Be.matrix.fromArray(Ne.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ne.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(ke.x,ke.y,ke.width,ke.height),Pe===0&&(C.matrix.copy(Be.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Me===!0&&C.cameras.push(Be)}}for(let Ae=0;Ae<w.length;Ae++){const Me=b[Ae],Pe=w[Ae];Me!==null&&Pe!==void 0&&Pe.update(Me,le,u||l)}ee&&ee(H,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),y=null}const Y=new ch;Y.setAnimationLoop(Ee),this.setAnimationLoop=function(H){ee=H},this.dispose=function(){}}}function PS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ah(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,b,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),d(m,p)):p.isMeshStandardMaterial?(a(m,p),f(m,p),p.isMeshPhysicalMaterial&&v(m,p,T)):p.isMeshMatcapMaterial?(a(m,p),y(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),S(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(l(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?c(m,p,w,b):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function v(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function LS(i,e,t,n){let r={},a={},l=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,b){const T=b.program;n.uniformBlockBinding(w,T)}function u(w,b){let T=r[w.id];T===void 0&&(y(w),T=d(w),r[w.id]=T,w.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(w,A);const D=e.render.frame;a[w.id]!==D&&(f(w),a[w.id]=D)}function d(w){const b=h();w.__bindingPointIndex=b;const T=i.createBuffer(),A=w.__size,D=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function h(){for(let w=0;w<s;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=r[w.id],T=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let D=0,C=T.length;D<C;D++){const j=T[D];if(v(j,D,A)===!0){const x=j.__offset,E=Array.isArray(j.value)?j.value:[j.value];let te=0;for(let z=0;z<E.length;z++){const N=E[z],B=S(N);typeof N=="number"?(j.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,x+te,j.__data)):N.isMatrix3?(j.__data[0]=N.elements[0],j.__data[1]=N.elements[1],j.__data[2]=N.elements[2],j.__data[3]=N.elements[0],j.__data[4]=N.elements[3],j.__data[5]=N.elements[4],j.__data[6]=N.elements[5],j.__data[7]=N.elements[0],j.__data[8]=N.elements[6],j.__data[9]=N.elements[7],j.__data[10]=N.elements[8],j.__data[11]=N.elements[0]):(N.toArray(j.__data,te),te+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,j.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(w,b,T){const A=w.value;if(T[b]===void 0){if(typeof A=="number")T[b]=A;else{const D=Array.isArray(A)?A:[A],C=[];for(let j=0;j<D.length;j++)C.push(D[j].clone());T[b]=C}return!0}else if(typeof A=="number"){if(T[b]!==A)return T[b]=A,!0}else{const D=Array.isArray(T[b])?T[b]:[T[b]],C=Array.isArray(A)?A:[A];for(let j=0;j<D.length;j++){const x=D[j];if(x.equals(C[j])===!1)return x.copy(C[j]),!0}}return!1}function y(w){const b=w.uniforms;let T=0;const A=16;let D=0;for(let C=0,j=b.length;C<j;C++){const x=b[C],E={boundary:0,storage:0},te=Array.isArray(x.value)?x.value:[x.value];for(let z=0,N=te.length;z<N;z++){const B=te[z],V=S(B);E.boundary+=V.boundary,E.storage+=V.storage}if(x.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=T,C>0){D=T%A;const z=A-D;D!==0&&z-E.boundary<0&&(T+=A-D,x.__offset=T)}T+=E.storage}return D=T%A,D>0&&(T+=A-D),w.__size=T,w.__cache={},this}function S(w){const b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const T=l.indexOf(b.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function p(){for(const w in r)i.deleteBuffer(r[w]);l=[],r={},a={}}return{bind:c,update:u,dispose:p}}class vh{constructor(e={}){const{canvas:t=Tx(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=l;const v=new Uint32Array(4),y=new Int32Array(4);let S=null,m=null;const p=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const b=this;let T=!1,A=0,D=0,C=null,j=-1,x=null;const E=new Jt,te=new Jt;let z=null;const N=new Ft(0);let B=0,V=t.width,he=t.height,se=1,ee=null,Ee=null;const Y=new Jt(0,0,V,he),H=new Jt(0,0,V,he);let le=!1;const Ae=new oc;let Me=!1,Pe=!1,Ne=null;const ke=new on,Be=new at,et=new re,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return C===null?se:1}let Q=n;function _t(R,J){for(let fe=0;fe<R.length;fe++){const oe=R[fe],ve=t.getContext(oe,J);if(ve!==null)return ve}return null}try{const R={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",_e,!1),Q===null){const J=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&J.shift(),Q=_t(J,R),Q===null)throw _t(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ze,ge,we,Fe,Ge,He,Ze,lt,Ue,P,_,U,k,X,de,Se,xe,q,L,ue,be,G,ae,Re;function De(){ze=new Hy(Q),ge=new Oy(Q,ze,e),ze.init(ge),G=new TS(Q,ze,ge),we=new MS(Q,ze,ge),Fe=new jy(Q),Ge=new cS,He=new ES(Q,ze,we,Ge,ge,G,Fe),Ze=new Fy(b),lt=new Gy(b),Ue=new tb(Q,ge),ae=new Uy(Q,ze,Ue,ge),P=new Vy(Q,Ue,Fe,ae),_=new Ky(Q,P,Ue,Fe),L=new Yy(Q,ge,He),Se=new ky(Ge),U=new lS(b,Ze,lt,ze,ge,ae,Se),k=new PS(b,Ge),X=new dS,de=new gS(ze,ge),q=new Dy(b,Ze,lt,we,_,f,c),xe=new SS(b,_,ge),Re=new LS(Q,Fe,ge,we),ue=new Ny(Q,ze,Fe,ge),be=new Wy(Q,ze,Fe,ge),Fe.programs=U.programs,b.capabilities=ge,b.extensions=ze,b.properties=Ge,b.renderLists=X,b.shadowMap=xe,b.state=we,b.info=Fe}De();const O=new CS(b,Q);this.xr=O,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const R=ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(R){R!==void 0&&(se=R,this.setSize(V,he,!1))},this.getSize=function(R){return R.set(V,he)},this.setSize=function(R,J,fe=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,he=J,t.width=Math.floor(R*se),t.height=Math.floor(J*se),fe===!0&&(t.style.width=R+"px",t.style.height=J+"px"),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(V*se,he*se).floor()},this.setDrawingBufferSize=function(R,J,fe){V=R,he=J,se=fe,t.width=Math.floor(R*fe),t.height=Math.floor(J*fe),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(Y)},this.setViewport=function(R,J,fe,oe){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,J,fe,oe),we.viewport(E.copy(Y).multiplyScalar(se).floor())},this.getScissor=function(R){return R.copy(H)},this.setScissor=function(R,J,fe,oe){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,J,fe,oe),we.scissor(te.copy(H).multiplyScalar(se).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){we.setScissorTest(le=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){Ee=R},this.getClearColor=function(R){return R.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(R=!0,J=!0,fe=!0){let oe=0;if(R){let ve=!1;if(C!==null){const Xe=C.texture.format;ve=Xe===Xf||Xe===jf||Xe===Wf}if(ve){const Xe=C.texture.type,it=Xe===cr||Xe===sr||Xe===ac||Xe===Ar||Xe===Hf||Xe===Vf,ft=q.getClearColor(),ct=q.getClearAlpha(),yt=ft.r,ht=ft.g,bt=ft.b;it?(v[0]=yt,v[1]=ht,v[2]=bt,v[3]=ct,Q.clearBufferuiv(Q.COLOR,0,v)):(y[0]=yt,y[1]=ht,y[2]=bt,y[3]=ct,Q.clearBufferiv(Q.COLOR,0,y))}else oe|=Q.COLOR_BUFFER_BIT}J&&(oe|=Q.DEPTH_BUFFER_BIT),fe&&(oe|=Q.STENCIL_BUFFER_BIT),Q.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),X.dispose(),de.dispose(),Ge.dispose(),Ze.dispose(),lt.dispose(),_.dispose(),ae.dispose(),Re.dispose(),U.dispose(),O.dispose(),O.removeEventListener("sessionstart",ot),O.removeEventListener("sessionend",It),Ne&&(Ne.dispose(),Ne=null),Lt.stop()};function ye(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Fe.autoReset,J=xe.enabled,fe=xe.autoUpdate,oe=xe.needsUpdate,ve=xe.type;De(),Fe.autoReset=R,xe.enabled=J,xe.autoUpdate=fe,xe.needsUpdate=oe,xe.type=ve}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const J=R.target;J.removeEventListener("dispose",Te),qe(J)}function qe(R){je(R),Ge.remove(R)}function je(R){const J=Ge.get(R).programs;J!==void 0&&(J.forEach(function(fe){U.releaseProgram(fe)}),R.isShaderMaterial&&U.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,fe,oe,ve,Xe){J===null&&(J=gt);const it=ve.isMesh&&ve.matrixWorld.determinant()<0,ft=mt(R,J,fe,oe,ve);we.setMaterial(oe,it);let ct=fe.index,yt=1;if(oe.wireframe===!0){if(ct=P.getWireframeAttribute(fe),ct===void 0)return;yt=2}const ht=fe.drawRange,bt=fe.attributes.position;let pe=ht.start*yt,Ce=(ht.start+ht.count)*yt;Xe!==null&&(pe=Math.max(pe,Xe.start*yt),Ce=Math.min(Ce,(Xe.start+Xe.count)*yt)),ct!==null?(pe=Math.max(pe,0),Ce=Math.min(Ce,ct.count)):bt!=null&&(pe=Math.max(pe,0),Ce=Math.min(Ce,bt.count));const We=Ce-pe;if(We<0||We===1/0)return;ae.setup(ve,oe,ft,fe,ct);let dt,tt=ue;if(ct!==null&&(dt=Ue.get(ct),tt=be,tt.setIndex(dt)),ve.isMesh)oe.wireframe===!0?(we.setLineWidth(oe.wireframeLinewidth*Ke()),tt.setMode(Q.LINES)):tt.setMode(Q.TRIANGLES);else if(ve.isLine){let $e=oe.linewidth;$e===void 0&&($e=1),we.setLineWidth($e*Ke()),ve.isLineSegments?tt.setMode(Q.LINES):ve.isLineLoop?tt.setMode(Q.LINE_LOOP):tt.setMode(Q.LINE_STRIP)}else ve.isPoints?tt.setMode(Q.POINTS):ve.isSprite&&tt.setMode(Q.TRIANGLES);if(ve.isInstancedMesh)tt.renderInstances(pe,We,ve.count);else if(fe.isInstancedBufferGeometry){const $e=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,zt=Math.min(fe.instanceCount,$e);tt.renderInstances(pe,We,zt)}else tt.render(pe,We)},this.compile=function(R,J){function fe(oe,ve,Xe){oe.transparent===!0&&oe.side===ii&&oe.forceSinglePass===!1?(oe.side=kn,oe.needsUpdate=!0,Ot(oe,ve,Xe),oe.side=Ri,oe.needsUpdate=!0,Ot(oe,ve,Xe),oe.side=ii):Ot(oe,ve,Xe)}m=de.get(R),m.init(),w.push(m),R.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(m.pushLight(oe),oe.castShadow&&m.pushShadow(oe))}),m.setupLights(b._useLegacyLights),R.traverse(function(oe){const ve=oe.material;if(ve)if(Array.isArray(ve))for(let Xe=0;Xe<ve.length;Xe++){const it=ve[Xe];fe(it,R,oe)}else fe(ve,R,oe)}),w.pop(),m=null};let rt=null;function Mt(R){rt&&rt(R)}function ot(){Lt.stop()}function It(){Lt.start()}const Lt=new ch;Lt.setAnimationLoop(Mt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(R){rt=R,O.setAnimationLoop(R),R===null?Lt.stop():Lt.start()},O.addEventListener("sessionstart",ot),O.addEventListener("sessionend",It),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(J),J=O.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,J,C),m=de.get(R,w.length),m.init(),w.push(m),ke.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Ae.setFromProjectionMatrix(ke),Pe=this.localClippingEnabled,Me=Se.init(this.clippingPlanes,Pe),S=X.get(R,p.length),S.init(),p.push(S),xt(R,J,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ee,Ee),this.info.render.frame++,Me===!0&&Se.beginShadows();const fe=m.state.shadowsArray;if(xe.render(fe,R,J),Me===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(S,R),m.setupLights(b._useLegacyLights),J.isArrayCamera){const oe=J.cameras;for(let ve=0,Xe=oe.length;ve<Xe;ve++){const it=oe[ve];Ye(S,R,it,it.viewport)}}else Ye(S,R,J);C!==null&&(He.updateMultisampleRenderTarget(C),He.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(b,R,J),ae.resetDefaultState(),j=-1,x=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function xt(R,J,fe,oe){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ae.intersectsSprite(R)){oe&&et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ke);const it=_.update(R),ft=R.material;ft.visible&&S.push(R,it,ft,fe,et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ae.intersectsObject(R))){const it=_.update(R),ft=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),et.copy(R.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),et.copy(it.boundingSphere.center)),et.applyMatrix4(R.matrixWorld).applyMatrix4(ke)),Array.isArray(ft)){const ct=it.groups;for(let yt=0,ht=ct.length;yt<ht;yt++){const bt=ct[yt],pe=ft[bt.materialIndex];pe&&pe.visible&&S.push(R,it,pe,fe,et.z,bt)}}else ft.visible&&S.push(R,it,ft,fe,et.z,null)}}const Xe=R.children;for(let it=0,ft=Xe.length;it<ft;it++)xt(Xe[it],J,fe,oe)}function Ye(R,J,fe,oe){const ve=R.opaque,Xe=R.transmissive,it=R.transparent;m.setupLightsView(fe),Me===!0&&Se.setGlobalState(b.clippingPlanes,fe),Xe.length>0&&vt(ve,Xe,J,fe),oe&&we.viewport(E.copy(oe)),ve.length>0&&Ct(ve,J,fe),Xe.length>0&&Ct(Xe,J,fe),it.length>0&&Ct(it,J,fe),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function vt(R,J,fe,oe){const ve=ge.isWebGL2;Ne===null&&(Ne=new Ki(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")?Sa:cr,minFilter:us,samples:ve?4:0})),b.getDrawingBufferSize(Be),ve?Ne.setSize(Be.x,Be.y):Ne.setSize(Ol(Be.x),Ol(Be.y));const Xe=b.getRenderTarget();b.setRenderTarget(Ne),b.getClearColor(N),B=b.getClearAlpha(),B<1&&b.setClearColor(16777215,.5),b.clear();const it=b.toneMapping;b.toneMapping=lr,Ct(R,fe,oe),He.updateMultisampleRenderTarget(Ne),He.updateRenderTargetMipmap(Ne);let ft=!1;for(let ct=0,yt=J.length;ct<yt;ct++){const ht=J[ct],bt=ht.object,pe=ht.geometry,Ce=ht.material,We=ht.group;if(Ce.side===ii&&bt.layers.test(oe.layers)){const dt=Ce.side;Ce.side=kn,Ce.needsUpdate=!0,Et(bt,fe,oe,pe,Ce,We),Ce.side=dt,Ce.needsUpdate=!0,ft=!0}}ft===!0&&(He.updateMultisampleRenderTarget(Ne),He.updateRenderTargetMipmap(Ne)),b.setRenderTarget(Xe),b.setClearColor(N,B),b.toneMapping=it}function Ct(R,J,fe){const oe=J.isScene===!0?J.overrideMaterial:null;for(let ve=0,Xe=R.length;ve<Xe;ve++){const it=R[ve],ft=it.object,ct=it.geometry,yt=oe===null?it.material:oe,ht=it.group;ft.layers.test(fe.layers)&&Et(ft,J,fe,ct,yt,ht)}}function Et(R,J,fe,oe,ve,Xe){R.onBeforeRender(b,J,fe,oe,ve,Xe),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ve.onBeforeRender(b,J,fe,oe,R,Xe),ve.transparent===!0&&ve.side===ii&&ve.forceSinglePass===!1?(ve.side=kn,ve.needsUpdate=!0,b.renderBufferDirect(fe,J,oe,ve,R,Xe),ve.side=Ri,ve.needsUpdate=!0,b.renderBufferDirect(fe,J,oe,ve,R,Xe),ve.side=ii):b.renderBufferDirect(fe,J,oe,ve,R,Xe),R.onAfterRender(b,J,fe,oe,ve,Xe)}function Ot(R,J,fe){J.isScene!==!0&&(J=gt);const oe=Ge.get(R),ve=m.state.lights,Xe=m.state.shadowsArray,it=ve.state.version,ft=U.getParameters(R,ve.state,Xe,J,fe),ct=U.getProgramCacheKey(ft);let yt=oe.programs;oe.environment=R.isMeshStandardMaterial?J.environment:null,oe.fog=J.fog,oe.envMap=(R.isMeshStandardMaterial?lt:Ze).get(R.envMap||oe.environment),yt===void 0&&(R.addEventListener("dispose",Te),yt=new Map,oe.programs=yt);let ht=yt.get(ct);if(ht!==void 0){if(oe.currentProgram===ht&&oe.lightsStateVersion===it)return Vt(R,ft),ht}else ft.uniforms=U.getUniforms(R),R.onBuild(fe,ft,b),R.onBeforeCompile(ft,b),ht=U.acquireProgram(ft,ct),yt.set(ct,ht),oe.uniforms=ft.uniforms;const bt=oe.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(bt.clippingPlanes=Se.uniform),Vt(R,ft),oe.needsLights=Je(R),oe.lightsStateVersion=it,oe.needsLights&&(bt.ambientLightColor.value=ve.state.ambient,bt.lightProbe.value=ve.state.probe,bt.directionalLights.value=ve.state.directional,bt.directionalLightShadows.value=ve.state.directionalShadow,bt.spotLights.value=ve.state.spot,bt.spotLightShadows.value=ve.state.spotShadow,bt.rectAreaLights.value=ve.state.rectArea,bt.ltc_1.value=ve.state.rectAreaLTC1,bt.ltc_2.value=ve.state.rectAreaLTC2,bt.pointLights.value=ve.state.point,bt.pointLightShadows.value=ve.state.pointShadow,bt.hemisphereLights.value=ve.state.hemi,bt.directionalShadowMap.value=ve.state.directionalShadowMap,bt.directionalShadowMatrix.value=ve.state.directionalShadowMatrix,bt.spotShadowMap.value=ve.state.spotShadowMap,bt.spotLightMatrix.value=ve.state.spotLightMatrix,bt.spotLightMap.value=ve.state.spotLightMap,bt.pointShadowMap.value=ve.state.pointShadowMap,bt.pointShadowMatrix.value=ve.state.pointShadowMatrix);const pe=ht.getUniforms(),Ce=Qs.seqWithValue(pe.seq,bt);return oe.currentProgram=ht,oe.uniformsList=Ce,ht}function Vt(R,J){const fe=Ge.get(R);fe.outputColorSpace=J.outputColorSpace,fe.instancing=J.instancing,fe.instancingColor=J.instancingColor,fe.skinning=J.skinning,fe.morphTargets=J.morphTargets,fe.morphNormals=J.morphNormals,fe.morphColors=J.morphColors,fe.morphTargetsCount=J.morphTargetsCount,fe.numClippingPlanes=J.numClippingPlanes,fe.numIntersection=J.numClipIntersection,fe.vertexAlphas=J.vertexAlphas,fe.vertexTangents=J.vertexTangents,fe.toneMapping=J.toneMapping}function mt(R,J,fe,oe,ve){J.isScene!==!0&&(J=gt),He.resetTextureUnits();const Xe=J.fog,it=oe.isMeshStandardMaterial?J.environment:null,ft=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ci,ct=(oe.isMeshStandardMaterial?lt:Ze).get(oe.envMap||it),yt=oe.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ht=!!fe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),bt=!!fe.morphAttributes.position,pe=!!fe.morphAttributes.normal,Ce=!!fe.morphAttributes.color;let We=lr;oe.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(We=b.toneMapping);const dt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,tt=dt!==void 0?dt.length:0,$e=Ge.get(oe),zt=m.state.lights;if(Me===!0&&(Pe===!0||R!==x)){const Xt=R===x&&oe.id===j;Se.setState(oe,R,Xt)}let wt=!1;oe.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==zt.state.version||$e.outputColorSpace!==ft||ve.isInstancedMesh&&$e.instancing===!1||!ve.isInstancedMesh&&$e.instancing===!0||ve.isSkinnedMesh&&$e.skinning===!1||!ve.isSkinnedMesh&&$e.skinning===!0||ve.isInstancedMesh&&$e.instancingColor===!0&&ve.instanceColor===null||ve.isInstancedMesh&&$e.instancingColor===!1&&ve.instanceColor!==null||$e.envMap!==ct||oe.fog===!0&&$e.fog!==Xe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Se.numPlanes||$e.numIntersection!==Se.numIntersection)||$e.vertexAlphas!==yt||$e.vertexTangents!==ht||$e.morphTargets!==bt||$e.morphNormals!==pe||$e.morphColors!==Ce||$e.toneMapping!==We||ge.isWebGL2===!0&&$e.morphTargetsCount!==tt)&&(wt=!0):(wt=!0,$e.__version=oe.version);let nn=$e.currentProgram;wt===!0&&(nn=Ot(oe,J,ve));let Fn=!1,rn=!1,An=!1;const Gt=nn.getUniforms(),Rn=$e.uniforms;if(we.useProgram(nn.program)&&(Fn=!0,rn=!0,An=!0),oe.id!==j&&(j=oe.id,rn=!0),Fn||x!==R){Gt.setValue(Q,"projectionMatrix",R.projectionMatrix),Gt.setValue(Q,"viewMatrix",R.matrixWorldInverse);const Xt=Gt.map.cameraPosition;Xt!==void 0&&Xt.setValue(Q,et.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&Gt.setValue(Q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Gt.setValue(Q,"isOrthographic",R.isOrthographicCamera===!0),x!==R&&(x=R,rn=!0,An=!0)}if(ve.isSkinnedMesh){Gt.setOptional(Q,ve,"bindMatrix"),Gt.setOptional(Q,ve,"bindMatrixInverse");const Xt=ve.skeleton;Xt&&(ge.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Gt.setValue(Q,"boneTexture",Xt.boneTexture,He),Gt.setValue(Q,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bn=fe.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0&&ge.isWebGL2===!0)&&L.update(ve,fe,nn),(rn||$e.receiveShadow!==ve.receiveShadow)&&($e.receiveShadow=ve.receiveShadow,Gt.setValue(Q,"receiveShadow",ve.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Rn.envMap.value=ct,Rn.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),rn&&(Gt.setValue(Q,"toneMappingExposure",b.toneMappingExposure),$e.needsLights&&ut(Rn,An),Xe&&oe.fog===!0&&k.refreshFogUniforms(Rn,Xe),k.refreshMaterialUniforms(Rn,oe,se,he,Ne),Qs.upload(Q,$e.uniformsList,Rn,He)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Qs.upload(Q,$e.uniformsList,Rn,He),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Gt.setValue(Q,"center",ve.center),Gt.setValue(Q,"modelViewMatrix",ve.modelViewMatrix),Gt.setValue(Q,"normalMatrix",ve.normalMatrix),Gt.setValue(Q,"modelMatrix",ve.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Xt=oe.uniformsGroups;for(let ai=0,Da=Xt.length;ai<Da;ai++)if(ge.isWebGL2){const Ur=Xt[ai];Re.update(Ur,nn),Re.bind(Ur,nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nn}function ut(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function Je(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,J,fe){Ge.get(R.texture).__webglTexture=J,Ge.get(R.depthTexture).__webglTexture=fe;const oe=Ge.get(R);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=fe===void 0,oe.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,J){const fe=Ge.get(R);fe.__webglFramebuffer=J,fe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,fe=0){C=R,A=J,D=fe;let oe=!0,ve=null,Xe=!1,it=!1;if(R){const ct=Ge.get(R);ct.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(Q.FRAMEBUFFER,null),oe=!1):ct.__webglFramebuffer===void 0?He.setupRenderTarget(R):ct.__hasExternalTextures&&He.rebindTextures(R,Ge.get(R.texture).__webglTexture,Ge.get(R.depthTexture).__webglTexture);const yt=R.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(it=!0);const ht=Ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ht[J])?ve=ht[J][fe]:ve=ht[J],Xe=!0):ge.isWebGL2&&R.samples>0&&He.useMultisampledRTT(R)===!1?ve=Ge.get(R).__webglMultisampledFramebuffer:Array.isArray(ht)?ve=ht[fe]:ve=ht,E.copy(R.viewport),te.copy(R.scissor),z=R.scissorTest}else E.copy(Y).multiplyScalar(se).floor(),te.copy(H).multiplyScalar(se).floor(),z=le;if(we.bindFramebuffer(Q.FRAMEBUFFER,ve)&&ge.drawBuffers&&oe&&we.drawBuffers(R,ve),we.viewport(E),we.scissor(te),we.setScissorTest(z),Xe){const ct=Ge.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct.__webglTexture,fe)}else if(it){const ct=Ge.get(R.texture),yt=J||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ct.__webglTexture,fe||0,yt)}j=-1},this.readRenderTargetPixels=function(R,J,fe,oe,ve,Xe,it){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&it!==void 0&&(ft=ft[it]),ft){we.bindFramebuffer(Q.FRAMEBUFFER,ft);try{const ct=R.texture,yt=ct.format,ht=ct.type;if(yt!==ui&&G.convert(yt)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const bt=ht===Sa&&(ze.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ze.has("EXT_color_buffer_float"));if(ht!==cr&&G.convert(ht)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ht===Vi&&(ge.isWebGL2||ze.has("OES_texture_float")||ze.has("WEBGL_color_buffer_float")))&&!bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-oe&&fe>=0&&fe<=R.height-ve&&Q.readPixels(J,fe,oe,ve,G.convert(yt),G.convert(ht),Xe)}finally{const ct=C!==null?Ge.get(C).__webglFramebuffer:null;we.bindFramebuffer(Q.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(R,J,fe=0){const oe=Math.pow(2,-fe),ve=Math.floor(J.image.width*oe),Xe=Math.floor(J.image.height*oe);He.setTexture2D(J,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,fe,0,0,R.x,R.y,ve,Xe),we.unbindTexture()},this.copyTextureToTexture=function(R,J,fe,oe=0){const ve=J.image.width,Xe=J.image.height,it=G.convert(fe.format),ft=G.convert(fe.type);He.setTexture2D(fe,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,fe.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,fe.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,fe.unpackAlignment),J.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,oe,R.x,R.y,ve,Xe,it,ft,J.image.data):J.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,oe,R.x,R.y,J.mipmaps[0].width,J.mipmaps[0].height,it,J.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,oe,R.x,R.y,it,ft,J.image),oe===0&&fe.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(R,J,fe,oe,ve=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Xe=R.max.x-R.min.x+1,it=R.max.y-R.min.y+1,ft=R.max.z-R.min.z+1,ct=G.convert(oe.format),yt=G.convert(oe.type);let ht;if(oe.isData3DTexture)He.setTexture3D(oe,0),ht=Q.TEXTURE_3D;else if(oe.isDataArrayTexture)He.setTexture2DArray(oe,0),ht=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,oe.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,oe.unpackAlignment);const bt=Q.getParameter(Q.UNPACK_ROW_LENGTH),pe=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ce=Q.getParameter(Q.UNPACK_SKIP_PIXELS),We=Q.getParameter(Q.UNPACK_SKIP_ROWS),dt=Q.getParameter(Q.UNPACK_SKIP_IMAGES),tt=fe.isCompressedTexture?fe.mipmaps[0]:fe.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,tt.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,tt.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,R.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,R.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,R.min.z),fe.isDataTexture||fe.isData3DTexture?Q.texSubImage3D(ht,ve,J.x,J.y,J.z,Xe,it,ft,ct,yt,tt.data):fe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(ht,ve,J.x,J.y,J.z,Xe,it,ft,ct,tt.data)):Q.texSubImage3D(ht,ve,J.x,J.y,J.z,Xe,it,ft,ct,yt,tt),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,bt),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,pe),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ce),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,We),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,dt),ve===0&&oe.generateMipmaps&&Q.generateMipmap(ht),we.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?He.setTextureCube(R,0):R.isData3DTexture?He.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?He.setTexture2DArray(R,0):He.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){A=0,D=0,C=null,we.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?Cr:qf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cr?Zt:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class IS extends vh{}IS.prototype.isWebGL1Renderer=!0;class DS extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class US{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new re;class uo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),a=Ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new vi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gh extends La{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ea;const Ba=new re,ta=new re,na=new re,ia=new at,za=new at,_h=new on,Hs=new re,Ga=new re,Vs=new re,pd=new at,cl=new at,md=new at;class NS extends wn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new Qi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new US(t,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new uo(n,3,0,!1)),ea.setAttribute("uv",new uo(n,2,3,!1))}this.geometry=ea,this.material=e!==void 0?e:new gh,this.center=new at(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),_h.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),na.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-na.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const l=this.center;Ws(Hs.set(-.5,-.5,0),na,l,ta,r,a),Ws(Ga.set(.5,-.5,0),na,l,ta,r,a),Ws(Vs.set(.5,.5,0),na,l,ta,r,a),pd.set(0,0),cl.set(1,0),md.set(1,1);let s=e.ray.intersectTriangle(Hs,Ga,Vs,!1,Ba);if(s===null&&(Ws(Ga.set(-.5,.5,0),na,l,ta,r,a),cl.set(0,1),s=e.ray.intersectTriangle(Hs,Vs,Ga,!1,Ba),s===null))return;const c=e.ray.origin.distanceTo(Ba);c<e.near||c>e.far||t.push({distance:c,point:Ba.clone(),uv:ni.getInterpolation(Ba,Hs,Ga,Vs,pd,cl,md,new at),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ws(i,e,t,n,r,a){ia.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(za.x=a*ia.x-r*ia.y,za.y=r*ia.x+a*ia.y):za.copy(ia),i.copy(e),i.x+=za.x,i.y+=za.y,i.applyMatrix4(_h)}class $s extends En{constructor(e,t,n,r,a,l,s,c,u){super(e,t,n,r,a,l,s,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ds extends La{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xh extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ul=new on,vd=new re,gd=new re;class OS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gd),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _d=new on,Ha=new re,dl=new re;class kS extends OS{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new re(1,0,0),new re(-1,0,0),new re(0,0,1),new re(0,0,-1),new re(0,1,0),new re(0,-1,0)],this._cubeUps=[new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,0,1),new re(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ha.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ha),dl.copy(n.position),dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dl),n.updateMatrixWorld(),r.makeTranslation(-Ha.x,-Ha.y,-Ha.z),_d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d)}}class FS extends xh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new kS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BS extends xh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xd(){return(typeof performance>"u"?Date:performance).now()}class bd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(In(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function uc(i,e,t,n,r,a,l,s){const c=(C,j,x,E)=>[new at(C/l,1-E/s),new at(x/l,1-E/s),new at(x/l,1-j/s),new at(C/l,1-j/s)],u=c(e+a,t,e+n+a,t+a),d=c(e+n+a,t,e+n*2+a,t+a),h=c(e,t+a,e+a,t+a+r),f=c(e+a,t+a,e+n+a,t+a+r),v=c(e+n+a,t+a,e+n+a*2,t+r+a),y=c(e+n+a*2,t+a,e+n*2+a*2,t+r+a),S=i.attributes.uv,m=[v[3],v[2],v[0],v[1]],p=[h[3],h[2],h[0],h[1]],w=[u[3],u[2],u[0],u[1]],b=[d[0],d[1],d[3],d[2]],T=[f[3],f[2],f[0],f[1]],A=[y[3],y[2],y[0],y[1]],D=[];for(const C of[m,p,w,b,T,A])for(const j of C)D.push(j.x,j.y);S.set(new Float32Array(D)),S.needsUpdate=!0}function Zn(i,e,t,n,r,a){uc(i,e,t,n,r,a,64,64)}function Fl(i,e,t,n,r,a){uc(i,e,t,n,r,a,64,32)}class gr extends xn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class zS extends xn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new ds({side:Ri}),this.layer2Material=new ds({side:ii,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new an(8,8,8);Zn(e,0,0,8,8,8);const t=new Wt(e,this.layer1Material),n=new an(9,9,9);Zn(n,32,0,8,8,8);const r=new Wt(n,this.layer2Material);this.head=new gr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new an(8,12,4);Zn(a,16,16,8,12,4);const l=new Wt(a,this.layer1Material),s=new an(8.5,12.5,4.5);Zn(s,16,32,8,12,4);const c=new Wt(s,this.layer2Material);this.body=new gr(l,c),this.body.name="body",this.body.add(l,c),this.body.position.y=-6,this.add(this.body);const u=new an,d=new Wt(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3:4,d.scale.y=12,d.scale.z=4,Zn(u,40,16,this.slim?3:4,12,4)});const h=new an,f=new Wt(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Zn(h,40,32,this.slim?3:4,12,4)});const v=new xn;v.add(d,f),this.modelListeners.push(()=>{v.position.x=this.slim?-.5:-1}),v.position.y=-4,this.rightArm=new gr(d,f),this.rightArm.name="rightArm",this.rightArm.add(v),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const y=new an,S=new Wt(y,this.layer1MaterialBiased);this.modelListeners.push(()=>{S.scale.x=this.slim?3:4,S.scale.y=12,S.scale.z=4,Zn(y,32,48,this.slim?3:4,12,4)});const m=new an,p=new Wt(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Zn(m,48,48,this.slim?3:4,12,4)});const w=new xn;w.add(S,p),this.modelListeners.push(()=>{w.position.x=this.slim?.5:1}),w.position.y=-4,this.leftArm=new gr(S,p),this.leftArm.name="leftArm",this.leftArm.add(w),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const b=new an(4,12,4);Zn(b,0,16,4,12,4);const T=new Wt(b,this.layer1MaterialBiased),A=new an(4.5,12.5,4.5);Zn(A,0,32,4,12,4);const D=new Wt(A,this.layer2MaterialBiased),C=new xn;C.add(T,D),C.position.y=-6,this.rightLeg=new gr(T,D),this.rightLeg.name="rightLeg",this.rightLeg.add(C),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const j=new an(4,12,4);Zn(j,16,48,4,12,4);const x=new Wt(j,this.layer1MaterialBiased),E=new an(4.5,12.5,4.5);Zn(E,0,48,4,12,4);const te=new Wt(E,this.layer2MaterialBiased),z=new xn;z.add(x,te),z.position.y=-6,this.leftLeg=new gr(x,te),this.leftLeg.name="leftLeg",this.leftLeg.add(z),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof gr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class GS extends xn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ds({side:ii,transparent:!0,alphaTest:1e-5});const e=new an(10,16,1);Fl(e,0,0,10,16,1),this.cape=new Wt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class HS extends xn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ds({side:ii,transparent:!0,alphaTest:1e-5});const e=new an(12,22,4);Fl(e,22,0,10,20,2);const t=new Wt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new xn,this.leftWing.add(t),this.add(this.leftWing);const n=new an(12,22,4);Fl(n,22,0,10,20,2);const r=new Wt(n,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new xn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class VS extends xn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ds({side:Ri});const e=new an(8,8,4/3);uc(e,0,0,6,6,1,14,7),this.rightEar=new Wt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Wt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const yd=10.8*Math.PI/180;class WS extends xn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new zS,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new GS,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=yd,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new HS,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new VS,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=yd,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function js(i){return i instanceof HTMLImageElement||i instanceof HTMLVideoElement||i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas}function Bl(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let s=0;s<r;s++){const c=(l+s*n)*4;if(a.data[c+3]!==255)return!0}return!1}function So(i){return i/64}function Sd(i,e,t){if(t){if(Bl(i,0,0,e,e))return}else if(Bl(i,0,0,e,e/2))return;const n=So(e),r=(a,l,s,c)=>i.clearRect(a*n,l*n,s*n,c*n);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function jS(i,e){i.save(),i.scale(-1,1);const t=So(e),n=(r,a,l,s,c,u)=>i.drawImage(i.canvas,r*t,a*t,l*t,s*t,-c*t,u*t,-l*t,s*t);n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52),i.restore()}function XS(i,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=i.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;i.width=r,i.height=r,n.clearRect(0,0,r,r),n.drawImage(e,0,0,r,r/2),jS(n,r),Sd(n,i.width,!1)}else i.width=e.width,i.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0,i.width,i.height),Sd(n,i.width,!0)}function qS(i){if(i.width===2*i.height)return i.width/64;if(i.width*17===i.height*22)return i.width/22;if(i.width*11===i.height*23)return i.width/46;throw new Error(`Bad cape size: ${i.width}x${i.height}`)}function YS(i,e){const t=qS(e);i.width=64*t,i.height=32*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function KS(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let s=0;s<r;s++){const c=(l+s*n)*4;if(!(a.data[c+0]===0&&a.data[c+1]===0&&a.data[c+2]===0&&a.data[c+3]===255))return!1}return!0}function ZS(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let s=0;s<r;s++){const c=(l+s*n)*4;if(!(a.data[c+0]===255&&a.data[c+1]===255&&a.data[c+2]===255&&a.data[c+3]===255))return!1}return!0}function JS(i){const e=So(i.width),t=i.getContext("2d",{willReadFrequently:!0}),n=(s,c,u,d)=>Bl(t,s*e,c*e,u*e,d*e),r=(s,c,u,d)=>KS(t,s*e,c*e,u*e,d*e),a=(s,c,u,d)=>ZS(t,s*e,c*e,u*e,d*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function QS(i){if(i.width===i.height*2&&i.height%7===0)return i.height/7;throw new Error(`Bad ears size: ${i.width}x${i.height}`)}function $S(i,e){const t=QS(e);i.width=14*t,i.height=7*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function Md(i,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=So(e.width),n=14*t,r=7*t;i.width=n,i.height=r;const a=i.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,n,r),a.drawImage(e,24*t,0,n,r,0,0,n,r)}async function Xs(i){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof i=="string"?e.src=i:(i.crossOrigin!==void 0&&(e.crossOrigin=i.crossOrigin),i.referrerPolicy!==void 0&&(e.referrerPolicy=i.referrerPolicy),e.src=i.src)})}const Ed={type:"change"},fl={type:"start"},wd={type:"end"},qs=new $f,Td=new ar,eM=Math.cos(70*wx.DEG2RAD);class tM extends Dr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new re,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",_),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ed),n.update(),a=r.NONE},this.update=(function(){const L=new re,ue=new Ir().setFromUnitVectors(e.up,new re(0,1,0)),be=ue.clone().invert(),G=new re,ae=new Ir,Re=new re,De=2*Math.PI;return function(ye=null){const ce=n.object.position;L.copy(ce).sub(n.target),L.applyQuaternion(ue),s.setFromVector3(L),n.autoRotate&&a===r.NONE&&te(x(ye)),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let _e=n.minAzimuthAngle,Te=n.maxAzimuthAngle;isFinite(_e)&&isFinite(Te)&&(_e<-Math.PI?_e+=De:_e>Math.PI&&(_e-=De),Te<-Math.PI?Te+=De:Te>Math.PI&&(Te-=De),_e<=Te?s.theta=Math.max(_e,Math.min(Te,s.theta)):s.theta=s.theta>(_e+Te)/2?Math.max(_e,s.theta):Math.min(Te,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&D||n.object.isOrthographicCamera?s.radius=Ee(s.radius):s.radius=Ee(s.radius*u),L.setFromSpherical(s),L.applyQuaternion(be),ce.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let qe=!1;if(n.zoomToCursor&&D){let je=null;if(n.object.isPerspectiveCamera){const rt=L.length();je=Ee(rt*u);const Mt=rt-je;n.object.position.addScaledVector(T,Mt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const rt=new re(A.x,A.y,0);rt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),qe=!0;const Mt=new re(A.x,A.y,0);Mt.unproject(n.object),n.object.position.sub(Mt).add(rt),n.object.updateMatrixWorld(),je=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;je!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(je).add(n.object.position):(qs.origin.copy(n.object.position),qs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(qs.direction))<eM?e.lookAt(n.target):(Td.setFromNormalAndCoplanarPoint(n.object.up,n.target),qs.intersectPlane(Td,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),qe=!0);return u=1,D=!1,qe||G.distanceToSquared(n.object.position)>l||8*(1-ae.dot(n.object.quaternion))>l||Re.distanceToSquared(n.target)>0?(n.dispatchEvent(Ed),G.copy(n.object.position),ae.copy(n.object.quaternion),Re.copy(n.target),qe=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",Ge),n.domElement.removeEventListener("pointercancel",Ze),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,s=new bd,c=new bd;let u=1;const d=new re,h=new at,f=new at,v=new at,y=new at,S=new at,m=new at,p=new at,w=new at,b=new at,T=new re,A=new at;let D=!1;const C=[],j={};function x(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function E(){return Math.pow(.95,n.zoomSpeed)}function te(L){c.theta-=L}function z(L){c.phi-=L}const N=(function(){const L=new re;return function(be,G){L.setFromMatrixColumn(G,0),L.multiplyScalar(-be),d.add(L)}})(),B=(function(){const L=new re;return function(be,G){n.screenSpacePanning===!0?L.setFromMatrixColumn(G,1):(L.setFromMatrixColumn(G,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(be),d.add(L)}})(),V=(function(){const L=new re;return function(be,G){const ae=n.domElement;if(n.object.isPerspectiveCamera){const Re=n.object.position;L.copy(Re).sub(n.target);let De=L.length();De*=Math.tan(n.object.fov/2*Math.PI/180),N(2*be*De/ae.clientHeight,n.object.matrix),B(2*G*De/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(be*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),B(G*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function he(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(L){if(!n.zoomToCursor)return;D=!0;const ue=n.domElement.getBoundingClientRect(),be=L.clientX-ue.left,G=L.clientY-ue.top,ae=ue.width,Re=ue.height;A.x=be/ae*2-1,A.y=-(G/Re)*2+1,T.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ee(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function Y(L){h.set(L.clientX,L.clientY)}function H(L){ee(L),p.set(L.clientX,L.clientY)}function le(L){y.set(L.clientX,L.clientY)}function Ae(L){f.set(L.clientX,L.clientY),v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ue=n.domElement;te(2*Math.PI*v.x/ue.clientHeight),z(2*Math.PI*v.y/ue.clientHeight),h.copy(f),n.update()}function Me(L){w.set(L.clientX,L.clientY),b.subVectors(w,p),b.y>0?he(E()):b.y<0&&se(E()),p.copy(w),n.update()}function Pe(L){S.set(L.clientX,L.clientY),m.subVectors(S,y).multiplyScalar(n.panSpeed),V(m.x,m.y),y.copy(S),n.update()}function Ne(L){ee(L),L.deltaY<0?se(E()):L.deltaY>0&&he(E()),n.update()}function ke(L){let ue=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),ue=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),ue=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),ue=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),ue=!0;break}ue&&(L.preventDefault(),n.update())}function Be(){if(C.length===1)h.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),ue=.5*(C[0].pageY+C[1].pageY);h.set(L,ue)}}function et(){if(C.length===1)y.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),ue=.5*(C[0].pageY+C[1].pageY);y.set(L,ue)}}function gt(){const L=C[0].pageX-C[1].pageX,ue=C[0].pageY-C[1].pageY,be=Math.sqrt(L*L+ue*ue);p.set(0,be)}function Ke(){n.enableZoom&&gt(),n.enablePan&&et()}function Q(){n.enableZoom&&gt(),n.enableRotate&&Be()}function _t(L){if(C.length==1)f.set(L.pageX,L.pageY);else{const be=q(L),G=.5*(L.pageX+be.x),ae=.5*(L.pageY+be.y);f.set(G,ae)}v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ue=n.domElement;te(2*Math.PI*v.x/ue.clientHeight),z(2*Math.PI*v.y/ue.clientHeight),h.copy(f)}function ze(L){if(C.length===1)S.set(L.pageX,L.pageY);else{const ue=q(L),be=.5*(L.pageX+ue.x),G=.5*(L.pageY+ue.y);S.set(be,G)}m.subVectors(S,y).multiplyScalar(n.panSpeed),V(m.x,m.y),y.copy(S)}function ge(L){const ue=q(L),be=L.pageX-ue.x,G=L.pageY-ue.y,ae=Math.sqrt(be*be+G*G);w.set(0,ae),b.set(0,Math.pow(w.y/p.y,n.zoomSpeed)),he(b.y),p.copy(w)}function we(L){n.enableZoom&&ge(L),n.enablePan&&ze(L)}function Fe(L){n.enableZoom&&ge(L),n.enableRotate&&_t(L)}function Ge(L){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",He),n.domElement.addEventListener("pointerup",Ze)),de(L),L.pointerType==="touch"?U(L):lt(L))}function He(L){n.enabled!==!1&&(L.pointerType==="touch"?k(L):Ue(L))}function Ze(L){Se(L),C.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(wd),a=r.NONE}function lt(L){let ue;switch(L.button){case 0:ue=n.mouseButtons.LEFT;break;case 1:ue=n.mouseButtons.MIDDLE;break;case 2:ue=n.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Or.DOLLY:if(n.enableZoom===!1)return;H(L),a=r.DOLLY;break;case Or.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;le(L),a=r.PAN}else{if(n.enableRotate===!1)return;Y(L),a=r.ROTATE}break;case Or.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;Y(L),a=r.ROTATE}else{if(n.enablePan===!1)return;le(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(fl)}function Ue(L){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Ae(L);break;case r.DOLLY:if(n.enableZoom===!1)return;Me(L);break;case r.PAN:if(n.enablePan===!1)return;Pe(L);break}}function P(L){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(L.preventDefault(),n.dispatchEvent(fl),Ne(L),n.dispatchEvent(wd))}function _(L){n.enabled===!1||n.enablePan===!1||ke(L)}function U(L){switch(xe(L),C.length){case 1:switch(n.touches.ONE){case kr.ROTATE:if(n.enableRotate===!1)return;Be(),a=r.TOUCH_ROTATE;break;case kr.PAN:if(n.enablePan===!1)return;et(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case kr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(),a=r.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Q(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(fl)}function k(L){switch(xe(L),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;_t(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ze(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(L),n.update();break;default:a=r.NONE}}function X(L){n.enabled!==!1&&L.preventDefault()}function de(L){C.push(L)}function Se(L){delete j[L.pointerId];for(let ue=0;ue<C.length;ue++)if(C[ue].pointerId==L.pointerId){C.splice(ue,1);return}}function xe(L){let ue=j[L.pointerId];ue===void 0&&(ue=new at,j[L.pointerId]=ue),ue.set(L.pageX,L.pageY)}function q(L){const ue=L.pointerId===C[0].pointerId?C[1]:C[0];return j[ue.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",Ge),n.domElement.addEventListener("pointercancel",Ze),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const nM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iM=new uh(-1,1,1,-1,0,1),dc=new Qi;dc.setAttribute("position",new qi([-1,3,0,-1,-1,0,3,-1,0],3));dc.setAttribute("uv",new qi([0,2,0,0,2,0],2));class rM{constructor(e){this._mesh=new Wt(dc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class yh extends Mo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sh.clone(e.uniforms),this.material=new Zi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rM(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ad extends Mo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,s;this.inverse?(l=0,s=1):(l=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class aM extends Mo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new at);this._width=n.width,this._height=n.height,t=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sa}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yh(nM),this.copyPass.material.blending=Xi,this.clock=new bh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Ad!==void 0&&(l instanceof Ad?n=!0:l instanceof aM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class oM extends Mo{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}const lM={uniforms:{tDiffuse:{value:null},resolution:{value:new at(1/1024,1/512)}},vertexShader:`

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
	`};class Sh{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const n=t*this.speed;this.animate(e,n),this.animationObjects.forEach((r,a)=>{const l=this.progress0.get(a);r(e,this.progress-l,a)}),this.progress+=n}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Rd extends Sh{animate(e){const t=this.progress*2,n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class Cd extends Sh{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class cM extends NS{constructor(e="",t={}){const n=new gh({transparent:!0,alphaTest:1e-5});super(n),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=n,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const n=t.measureText(this.text);e.width=this.margin[3]+n.actualBoundingBoxLeft+n.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+n.actualBoundingBoxAscent+n.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+n.actualBoundingBoxLeft,this.margin[0]+n.actualBoundingBoxAscent);const r=new $s(e);r.magFilter=en,r.minFilter=en,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class uM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new BS(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new FS(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new DS,this.camera=new Wn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Jn.enabled=!1,this.renderer=new vh({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Ki(0,0,{depthTexture:new mh(0,0,Vi)})),this.composer=new sM(this.renderer,t),this.renderPass=new oM(this.scene,this.camera),this.fxaaPass=new yh(lM),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new WS,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new xn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new tM(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new bh,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=n=>{n.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",n=>{n.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new $s(this.skinCanvas),this.skinTexture.magFilter=en,this.skinTexture.minFilter=en,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new $s(this.capeCanvas),this.capeTexture.magFilter=en,this.capeTexture.minFilter=en,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new $s(this.earsCanvas),this.earsTexture.magFilter=en,this.earsTexture.minFilter=en,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(js(e))XS(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=JS(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Md(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Xs(e).then(n=>this.loadSkin(n,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(js(e))YS(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Xs(e).then(n=>this.loadCape(n,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(js(e))t.textureType==="skin"?Md(this.earsCanvas,e):$S(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Xs(e).then(n=>this.loadEars(n,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,oo)}loadBackground(e,t){if(js(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new En,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Xs(e).then(n=>this.loadBackground(n,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new re).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new at).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new at).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Ft||e instanceof En?this.scene.background=e:this.scene.background=new Ft(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof wn||(e=new cM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const ei=Ut({list:[],active:null,ready:!1}),hl=new Map;function zl(i,e){const t=window.__TAURI__?.core;return t?t.invoke(i,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function Ys(){try{ei.list=await zl("get_accounts"),ei.active=await zl("get_active_account")}catch{}finally{ei.ready=!0}}function fs(i){return i?i.skin??(i.account_type?.type==="ely_by"?i.username:null):null}async function Gl(i){if(!i)return null;const e=String(i).trim();if(!e||e.startsWith("data:"))return e||null;if(hl.has(e))return hl.get(e);try{const t=await zl("proxy_skin_png",{source:e});return hl.set(e,t),t}catch{return null}}function dM(i){try{const e=String(i??"").split(",")[1]??"",t=atob(e.slice(0,44));if(t.length<24)return null;const n=l=>t.charCodeAt(l)&255;if(n(1)!==80||n(2)!==78||n(3)!==71)return null;const r=(n(16)<<24|n(17)<<16|n(18)<<8|n(19))>>>0,a=(n(20)<<24|n(21)<<16|n(22)<<8|n(23))>>>0;return!r||!a?null:{width:r,height:a}}catch{return null}}var fM=W('<button title="Toggle the hat/jacket outer layer"> </button>'),hM=W("<canvas></canvas> <!>",1);function fc(i,e){Qt(e,!0);let t=Qe(e,"skin",3,null),n=Qe(e,"cape",3,null),r=Qe(e,"model",3,null),a=Qe(e,"width",3,260),l=Qe(e,"height",3,340),s=Qe(e,"walking",3,!1),c=Qe(e,"autorotate",3,!1),u=Qe(e,"zoom",3,.85),d=Qe(e,"outerLayer",15,!0),h=Qe(e,"showToggle",3,!1),f=ie(null),v=null,y,S,m,p=ie(null),w=ie(null),b=0;function T(z){if(!z)return null;const N=String(z).trim();if(!N)return null;if(/^(https?:|data:)/i.test(N))return N;const B=window.__TAURI__?.core?.convertFileSrc;return B?B(N):N}function A(z){const N=String(z??"").trim().toLowerCase();return N==="slim"?"slim":N==="classic"?"default":"auto-detect"}function D(){v&&((o(p)!==y||A(r())!==m)&&(y=o(p),m=A(r()),o(p)?v.loadSkin(o(p),{model:m}).catch(()=>{}):v.resetSkin()),o(w)!==S&&(S=o(w),o(w)?v.loadCape(o(w)).catch(()=>{}):v.resetCape()))}function C(){const z=v?.playerObject?.skin;if(z)for(const N of[z.head,z.body,z.rightArm,z.leftArm,z.rightLeg,z.leftLeg])N?.outerLayer&&(N.outerLayer.visible=d())}Pi(()=>(v=new uM({canvas:o(f),width:a(),height:l(),zoom:u(),fov:55}),v.controls.enablePan=!1,v.controls.enableZoom=!0,v.autoRotate=c(),v.animation=s()?new Cd:new Rd,D(),C(),()=>{v?.dispose(),v=null})),tn(()=>{const z=t(),N=n(),B=++b;(async()=>{const V=await Gl(z),he=await Gl(N);B===b&&(g(p,V??T(z),!0),g(w,he??T(N),!0))})()}),tn(()=>{D(),C()}),tn(()=>{d(),v&&C()}),tn(()=>{v&&(v.animation=s()?new Cd:new Rd)}),tn(()=>{v&&(v.autoRotate=c())}),tn(()=>{v&&v.setSize(a(),l())});var j=hM(),x=Tt(j);wf(x,z=>g(f,z),()=>o(f));var E=M(x,2);{var te=z=>{var N=fM(),B=K(N);me(()=>{pt(N,1,`rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) ${d()?"text-(--accent)":""}`),Oe(N,"aria-pressed",d()),Z(B,`Outer layer: ${d()?"on":"off"}`)}),ne("click",N,()=>d(!d())),F(z,N)};Le(E,z=>{h()&&z(te)})}me(()=>Ln(x,`width:${a()??""}px;height:${l()??""}px;display:block`)),F(i,j),$t()}fn(["click"]);var pM=W('<span class="absolute inset-0"></span> <span class="absolute inset-0"></span>',1),mM=W('<span class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"> </span>'),vM=W("<span><!></span>");function hc(i,e){Qt(e,!0);let t=Qe(e,"source",3,null),n=Qe(e,"size",3,32),r=Qe(e,"letter",3,null),a=Qe(e,"class",3,""),l=ie(null),s=ie(1),c=0;tn(()=>{const m=t(),p=++c;(async()=>{const w=await Gl(m);if(p!==c)return;g(l,w,!0);const b=w?dM(w):null;g(s,b&&b.height&&b.width?b.height/b.width:1,!0)})()}),ec(()=>{c+=1});const u=st(()=>(800*o(s)).toFixed(4)),d=st(()=>(100/(8*o(s)-1)).toFixed(4)),h=st(()=>o(l)?`background-image:url(${o(l)});background-size:800% ${o(u)}%;image-rendering:pixelated;`:"");var f=vM(),v=I(f);{var y=m=>{var p=pM(),w=Tt(p),b=M(w,2);me(()=>{Ln(w,`${o(h)}background-position:14.2857% ${o(d)}%`),Ln(b,`${o(h)}background-position:71.4286% ${o(d)}%`)}),F(m,p)},S=m=>{var p=mM(),w=K(p,!0);me(()=>{Ln(p,`font-size:${n()*.45}px`),Z(w,r())}),F(m,p)};Le(v,m=>{o(l)?m(y):r()&&m(S,1)})}me(()=>{pt(f,1,`relative inline-block shrink-0 overflow-hidden ${a()??""}`),Ln(f,`width:${n()??""}px;height:${n()??""}px`)}),F(i,f),$t()}var gM=W('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),_M=W(`<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40" title="Silently renew this account's token"> </button>`),xM=W('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),bM=W('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),yM=W('<div><div class="flex items-center gap-3"><!> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),SM=W('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),MM=W('<p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),EM=W('<div class="flex flex-col"><!> <!></div>');function Mh(i,e){Qt(e,!0);let t=Qe(e,"accounts",19,()=>[]),n=Qe(e,"active",3,null),r=ie(""),a=ie(!1),l=ie(null),s=ie(""),c=ie(""),u=ie(null);function d(x,E){const te=window.__TAURI__?.core;return te?te.invoke(x,E):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function h(x){g(r,"");try{await d("set_active_account",{id:x}),await e.onrefresh?.()}catch(E){g(r,String(E),!0)}}async function f(x){g(r,"");try{await d("remove_account",{id:x}),o(l)===x&&g(l,null),await e.onrefresh?.()}catch(E){g(r,String(E),!0)}}async function v(x){const E=y(x);if(E){g(r,""),g(u,x.id,!0);try{await d(E,{id:x.id}),await e.onrefresh?.()}catch(te){g(r,String(te),!0)}finally{g(u,null)}}}function y(x){const E=x.account_type?.type;return E==="microsoft"?"refresh_microsoft_account":E==="ely_by"&&x.refresh_token?"refresh_elyby_account":null}function S(x){if(o(l)===x.id){g(l,null);return}g(l,x.id,!0),g(s,x.skin??"",!0),g(c,x.cape??"",!0)}async function m(x){const E=window.__TAURI__?.dialog?.open;if(!E){g(r,"File picker unavailable in this build.");return}try{const te=await E({multiple:!1,title:x==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!te)return;g(x==="skin"?s:c,String(te),!0),g(r,"")}catch(te){g(r,String(te),!0)}}async function p(){g(r,""),g(a,!0);try{await d("set_account_textures",{id:o(l),skin:o(s).trim()||null,cape:o(c).trim()||null}),await e.onrefresh?.(),g(l,null)}catch(x){g(r,String(x),!0)}finally{g(a,!1)}}async function w(){g(s,""),g(c,""),await p()}function b(x){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[x.account_type.type]??"Yggdrasil"}const T=st(()=>t().find(x=>x.id===o(l))??null);var A=EM(),D=I(A);Rt(D,17,t,x=>x.id,(x,E)=>{var te=yM(),z=I(te),N=I(z);{let ge=st(()=>fs(o(E))),we=st(()=>o(E).username[0]?.toUpperCase()??"?");hc(N,{get source(){return o(ge)},size:32,get letter(){return o(we)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var B=M(N,2),V=I(B),he=I(V),se=K(he,!0),ee=M(he,2),Ee=K(ee,!0),Y=M(ee,2);{var H=ge=>{var we=gM();F(ge,we)};Le(Y,ge=>{n()?.id===o(E).id&&ge(H)})}var le=M(V,2),Ae=K(le,!0),Me=M(B,2),Pe=I(Me),Ne=I(Pe);Ei(Ne,{emoji:"🎨"});var ke=M(Pe,2);{var Be=ge=>{var we=_M(),Fe=K(we,!0);me(()=>{we.disabled=o(u)!==null,Z(Fe,o(u)===o(E).id?"Refreshing…":"Refresh token")}),ne("click",we,()=>v(o(E))),F(ge,we)},et=st(()=>y(o(E)));Le(ke,ge=>{o(et)&&ge(Be)})}var gt=M(ke,2);{var Ke=ge=>{var we=xM();ne("click",we,()=>h(o(E).id)),F(ge,we)};Le(gt,ge=>{n()?.id!==o(E).id&&ge(Ke)})}var Q=M(gt,2),_t=M(z,2);{var ze=ge=>{var we=bM(),Fe=I(we);{let de=st(()=>o(T)?.model);fc(Fe,{get skin(){return o(s)},get cape(){return o(c)},get model(){return o(de)},width:110,height:150})}var Ge=M(Fe,2),He=I(Ge),Ze=M(I(He)),lt=K(Ze,!0),Ue=M(He,2),P=M(I(Ue)),_=K(P,!0),U=M(Ue,2),k=I(U),X=M(k,2);me(()=>{Z(lt,o(s)||"default (Steve/Alex)"),Z(_,o(c)||"none"),k.disabled=o(a)}),ne("click",He,()=>m("skin")),ne("click",Ue,()=>m("cape")),ne("click",k,p),ne("click",X,w),F(ge,we)};Le(_t,ge=>{o(l)===o(E).id&&o(T)&&ge(ze)})}me(ge=>{pt(te,1,`border-b border-(--border) px-4 py-2.5 ${n()?.id===o(E).id?"bg-(--accent)/10":""}`),Z(se,o(E).username),Z(Ee,ge),Z(Ae,o(E).uuid)},[()=>b(o(E))]),ne("click",Pe,()=>S(o(E))),ne("click",Q,()=>f(o(E).id)),F(x,te)},x=>{var E=SM();F(x,E)});var C=M(D,2);{var j=x=>{var E=MM(),te=K(E,!0);me(()=>Z(te,o(r))),F(x,E)};Le(C,x=>{o(r)&&x(j)})}F(i,A),$t()}fn(["click"]);var wM=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <div class="border-t border-(--border)"><!></div></div></div></div>');function TM(i,e){Qt(e,!0);let t=Qe(e,"accounts",19,()=>[]),n=Qe(e,"active",3,null);Pi(()=>{const f=Ca(()=>e.onclose?.());return()=>Pa(f)});var r=wM(),a=I(r),l=I(a),s=M(I(l),2),c=M(l,2),u=I(c);Nf(u,{get onrefresh(){return e.onrefresh}});var d=M(u,2),h=I(d);Mh(h,{get accounts(){return t()},get active(){return n()},get onrefresh(){return e.onrefresh}}),ne("click",r,f=>{f.target===f.currentTarget&&e.onclose?.()}),ne("click",s,()=>e.onclose?.()),F(i,r),$t()}fn(["click"]);var AM=W('<button><span class="truncate"> </span></button>'),RM=W('<span class="text-[9px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),CM=W('<button><!> <span class="text-[12px] font-medium"> </span> <!></button>'),PM=W('<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]"><dt class="text-(--text-muted)">Profile UUID</dt> <dd class="min-w-0 truncate font-mono"> </dd> <dt class="text-(--text-muted)">Skin source</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Cape</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Renewable token</dt> <dd class="min-w-0 truncate"> </dd></dl></div>'),LM=W('<div class="mt-6 flex flex-wrap gap-2"></div> <!>',1),IM=W(`<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><p class="text-sm font-medium">No accounts yet</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom
              Yggdrasil server — everything lives in the Add Account section.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Add an account</button></div>`),DM=W('<h2 class="text-[16px] font-semibold">Account overview</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The character launches use, with the hat/jacket outer layer included.</p> <!>',1),UM=W('<h2 class="text-[16px] font-semibold">Add account</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.</p> <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),NM=W('<h2 class="text-[16px] font-semibold">Saved accounts</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Set the active profile, renew tokens silently, edit skins — or remove accounts.</p> <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),OM=W('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Accounts sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div></div>');function kM(i,e){Qt(e,!0);const t=[{id:"overview",label:"Overview"},{id:"add",label:"Add Account"},{id:"saved",label:"Saved Accounts"}];let n=ie("overview"),r=ie(null);const a=st(()=>{const w=ei.list;return w.find(b=>b.id===o(r))??w.find(b=>b.id===ei.active?.id)??w[0]??null});let l=ie(!0);function s(w){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[w.account_type.type]??"Yggdrasil"}var c=OM(),u=I(c),d=I(u),h=M(d,2);Rt(h,21,()=>t,w=>w.id,(w,b)=>{var T=AM(),A=I(T),D=K(A,!0);me(()=>{pt(T,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${o(n)===o(b).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Oe(T,"aria-current",o(n)===o(b).id?"true":void 0),Z(D,o(b).label)}),ne("click",T,()=>g(n,o(b).id,!0)),F(w,T)});var f=M(u,2),v=I(f),y=I(v);{var S=w=>{var b=DM(),T=M(Tt(b),4);{var A=C=>{var j=LM(),x=Tt(j);Rt(x,21,()=>ei.list,z=>z.id,(z,N)=>{var B=CM(),V=I(B);{let Y=st(()=>fs(o(N))),H=st(()=>o(N).username[0]?.toUpperCase()??"?");hc(V,{get source(){return o(Y)},size:24,get letter(){return o(H)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var he=M(V,2),se=K(he,!0),ee=M(he,2);{var Ee=Y=>{var H=RM();F(Y,H)};Le(ee,Y=>{ei.active?.id===o(N).id&&Y(Ee)})}me(()=>{pt(B,1,`flex items-center gap-2 rounded border px-2 py-1.5 text-left ${o(a)?.id===o(N).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Oe(B,"title",`Preview ${o(N).username??""}`),Z(se,o(N).username)}),ne("click",B,()=>g(r,o(N).id,!0)),F(z,B)});var E=M(x,2);{var te=z=>{var N=PM(),B=I(N);{let et=st(()=>fs(o(a)));fc(B,{get skin(){return o(et)},get cape(){return o(a).cape},get model(){return o(a).model},width:230,height:310,showToggle:!0,get outerLayer(){return o(l)},set outerLayer(gt){g(l,gt,!0)}})}var V=M(B,2),he=I(V),se=K(he,!0),ee=M(he,2),Ee=K(ee,!0),Y=M(V,2),H=M(I(Y),2),le=K(H,!0),Ae=M(H,4),Me=K(Ae,!0),Pe=M(Ae,4),Ne=K(Pe,!0),ke=M(Pe,4),Be=K(ke,!0);me(et=>{Z(se,o(a).username),Z(Ee,et),Oe(H,"title",o(a).uuid),Z(le,o(a).uuid),Oe(Ae,"title",o(a).skin??"default (Steve/Alex)"),Z(Me,o(a).skin?"custom skin":"default (Steve/Alex)"),Z(Ne,o(a).cape?"custom cape":"none"),Z(Be,o(a).refresh_token?"yes — silent refresh available":"no")},[()=>s(o(a))]),F(z,N)};Le(E,z=>{o(a)&&z(te)})}F(C,j)},D=C=>{var j=IM(),x=M(I(j),4);ne("click",x,()=>g(n,"add")),F(C,j)};Le(T,C=>{ei.list.length?C(A):C(D,-1)})}F(w,b)},m=w=>{var b=UM(),T=M(Tt(b),4),A=I(T);Nf(A,{get onrefresh(){return e.onrefresh}}),F(w,b)},p=w=>{var b=NM(),T=M(Tt(b),4),A=I(T);Mh(A,{get accounts(){return ei.list},get active(){return ei.active},get onrefresh(){return e.onrefresh}}),F(w,b)};Le(y,w=>{o(n)==="overview"?w(S):o(n)==="add"?w(m,1):w(p,-1)})}ne("click",d,function(...w){e.onback?.apply(this,w)}),F(i,c),$t()}fn(["click"]);var FM=W('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),BM=W('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),zM=W('<p class="text-center text-[11px] text-red-400"> </p>'),GM=W("<option> </option>"),HM=W("<option>No instances yet</option>"),VM=W('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),WM=W('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),jM=W('<p class="mt-2 text-[11px] text-red-400"> </p>'),XM=W('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="flex items-center gap-1.5 rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer"><!> Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),qM=W('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function YM(i,e){Qt(e,!0);let t=Qe(e,"instances",19,()=>[]),n=Qe(e,"active",3,null),r=Qe(e,"gameRunning",3,!1),a=Qe(e,"status",3,"Ready");function l(z,N){const B=window.__TAURI__?.core;return B?B.invoke(z,N):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let c=ie(Ut(f())),u=ie(""),d=ie(""),h=ie("");function f(){try{const z=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray(z)?z:[]}catch{return[]}}function v(){localStorage.setItem(s,JSON.stringify(o(c)))}function y(z){z.preventDefault(),g(h,"");const N=o(d).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(N)){g(h,"Address must be a hostname (optionally host:port).");return}g(c,[...o(c),{name:o(u).trim()||N.split(":")[0],address:N}],!0),v(),g(u,""),g(d,"")}function S(z){g(c,o(c).filter((N,B)=>B!==z),!0),v()}let m=ie("");tn(()=>{o(m)&&t().some(z=>z.id===o(m))||g(m,t()[0]?.id??"",!0)});const p=st(()=>t().find(z=>z.id===o(m))?.name??"no instance selected");function w(z){!o(m)||r()||e.onlaunch?.(o(m),z.address)}let b=ie(""),T=ie(!1);async function A(z){const N=window.__TAURI__?.dialog?.open;if(!N){g(b,"File picker unavailable in this build.");return}try{const B=await N({multiple:!1,title:z==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!B)return;g(T,!0),g(b,""),await l("set_account_textures",{id:n().id,skin:z==="skin"?String(B):null,cape:z==="cape"?String(B):null}),await e.onrefresh?.()}catch(B){g(b,String(B),!0)}finally{g(T,!1)}}async function D(){if(n())try{g(T,!0),await l("set_account_textures",{id:n().id,skin:null,cape:null}),await e.onrefresh?.()}catch(z){g(b,String(z),!0)}finally{g(T,!1)}}function C(z){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[z.account_type.type]??"Yggdrasil"}var j=qM(),x=I(j);{var E=z=>{var N=FM(),B=I(N);Ei(B,{emoji:"👤",size:30});var V=M(B,6);ne("click",V,()=>e.onopenaccounts?.()),F(z,N)},te=z=>{var N=XM(),B=I(N),V=I(B);Mf(V,()=>n()?.id,U=>{{let k=st(()=>fs(n()));fc(U,{get skin(){return o(k)},get cape(){return n().cape},get model(){return n().model},width:220,height:300})}});var he=M(V,2),se=I(he),ee=K(se,!0),Ee=M(se,2),Y=K(Ee,!0),H=M(he,2),le=I(H),Ae=M(le,2),Me=M(Ae,2);{var Pe=U=>{var k=BM();me(()=>k.disabled=o(T)),ne("click",k,D),F(U,k)};Le(Me,U=>{(n().cape||n().skin)&&U(Pe)})}var Ne=M(H,2);{var ke=U=>{var k=zM(),X=K(k,!0);me(()=>Z(X,o(b))),F(U,k)};Le(Ne,U=>{o(b)&&U(ke)})}var Be=M(B,2),et=I(Be),gt=M(I(et),2),Ke=I(gt);Rt(Ke,21,t,U=>U.id,(U,k)=>{var X=GM(),de=K(X,!0),Se={};me(()=>{Z(de,o(k).name),Se!==(Se=o(k).id)&&(X.value=(X.__value=Se)??"")}),F(U,X)},U=>{var k=HM();k.value=k.__value="",F(U,k)}),_a(Ke);var Q=M(Ke,2),_t=I(Q);jt(_t,{name:"log",size:12});var ze=M(gt,2),ge=K(ze,!0),we=M(ze,2),Fe=K(we,!0),Ge=M(et,2),He=M(I(Ge),2);Rt(He,19,()=>o(c),U=>U.address,(U,k,X)=>{var de=VM(),Se=I(de),xe=I(Se),q=K(xe,!0),L=M(xe,2),ue=K(L,!0),be=M(Se,2),G=M(be,2);me(()=>{Z(q,o(k).name),Z(ue,o(k).address),be.disabled=!o(m)||r(),Oe(be,"title",`Join ${o(k).address} with ${o(p)}`)}),ne("click",be,()=>w(o(k))),ne("click",G,()=>S(o(X))),F(U,de)},U=>{var k=WM();F(U,k)});var Ze=M(He,2),lt=I(Ze),Ue=M(lt,2),P=M(Ze,2);{var _=U=>{var k=jM(),X=K(k,!0);me(()=>Z(X,o(h))),F(U,k)};Le(P,U=>{o(h)&&U(_)})}me(U=>{Z(ee,n().username),Z(Y,U),le.disabled=o(T),Ae.disabled=o(T),ze.disabled=!o(m)||r(),Z(ge,r()?"GAME RUNNING…":"LAUNCH GAME"),Z(Fe,r()?a():o(p))},[()=>C(n())]),ne("click",le,()=>A("skin")),ne("click",Ae,()=>A("cape")),xa(Ke,()=>o(m),U=>g(m,U)),ne("click",Q,()=>e.onopenconsole?.()),ne("click",ze,()=>e.onlaunch?.(o(m),null)),Xn("submit",Ze,y),Kt(lt,()=>o(u),U=>g(u,U)),Kt(Ue,()=>o(d),U=>g(d,U)),F(z,N)};Le(x,z=>{n()?z(te,-1):z(E)})}F(i,j),$t()}fn(["click"]);var KM=W('<h3 class="text-(--step-heading) font-semibold text-(--fg-1)"> </h3>'),ZM=W('<input class="mt-3 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"/>'),JM=W('<button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1)"> </button>'),QM=W('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="alertdialog" aria-modal="true" class="w-[380px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><!> <p> </p> <!></div></div> <div class="flex items-center justify-end gap-2 border-t border-(--border-1) px-4 py-3"><!> <button class="rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"> </button></div></div></div>');function $M(i,e){Qt(e,!0);const t={info:{icon:"about",tint:"text-(--accent)"},success:{icon:"success",tint:"text-green-500"},warning:{icon:"warning",tint:"text-(--accent-star)"},error:{icon:"error",tint:"text-rose-400"},confirm:{icon:"help",tint:"text-(--accent)"},prompt:{icon:"edit",tint:"text-(--accent)"}},n=st(()=>mi.dialog),r=st(()=>t[o(n)?.variant]??t.info);let a=ie("");tn(()=>{o(n),g(a,o(n)?.value??"",!0)});function l(){o(n)?.variant==="prompt"?ys(o(a)):ys(!0)}function s(){o(n)?.variant==="prompt"?ys(null):ys(!1)}function c(f){f.key==="Enter"&&o(n)?.variant!=="prompt"&&(f.preventDefault(),l())}var u=as(),d=Tt(u);{var h=f=>{var v=QM(),y=I(v),S=I(y),m=I(S),p=I(m);{let B=st(()=>o(n).icon||o(r).icon);jt(p,{get name(){return o(B)},size:17})}var w=M(m,2),b=I(w);{var T=B=>{var V=KM(),he=K(V,!0);me(()=>Z(he,o(n).title)),F(B,V)};Le(b,B=>{o(n).title&&B(T)})}var A=M(b,2),D=K(A,!0),C=M(A,2);{var j=B=>{var V=ZM();bp(V),me(()=>Oe(V,"placeholder",o(n).placeholder??"")),Kt(V,()=>o(a),he=>g(a,he)),F(B,V)};Le(C,B=>{o(n).variant==="prompt"&&B(j)})}var x=M(S,2),E=I(x);{var te=B=>{var V=JM(),he=K(V,!0);me(()=>Z(he,o(n).cancelLabel??"Cancel")),ne("click",V,s),F(B,V)};Le(E,B=>{o(n).variant!=="alert"&&B(te)})}var z=M(E,2),N=K(z,!0);me(()=>{Oe(y,"aria-label",o(n).title||"Alert"),pt(A,1,`mt-1 text-(--step-body) break-words text-(--fg-2) ${o(n).title?"":"font-medium text-(--fg-1)"}`),Z(D,o(n).message),Z(N,o(n).confirmLabel??"OK")}),ne("click",v,B=>{B.target===B.currentTarget&&s()}),ne("keydown",y,c),ne("click",z,l),F(f,v)};Le(d,f=>{o(n)&&f(h)})}F(i,u),$t()}fn(["click","keydown"]);var eE=W('<span class="block truncate text-(--step-body) font-semibold text-(--fg-1)"> </span>'),tE=W('<button title="Click to dismiss"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <span class="min-w-0 flex-1"><!> <span class="block text-(--step-meta) break-words text-(--fg-2)"> </span></span> <span class="shrink-0 text-(--step-caption) text-(--fg-2)">✕</span></button>'),nE=W('<div class="pointer-events-none fixed right-4 bottom-4 z-[80] flex w-80 flex-col gap-2"></div>');function iE(i,e){Qt(e,!0);const t={info:{icon:"about",tint:"border-(--accent-1)/50"},success:{icon:"success",tint:"border-green-500/60"},warning:{icon:"warning",tint:"border-(--accent-2)/60"},error:{icon:"error",tint:"border-rose-500/60"}};let n=ie(!1);const r=new Map,a=new Set;function l(){if(!o(n))for(const d of mi.toasts)a.has(d.id)||(a.add(d.id),r.set(d.id,setTimeout(()=>{a.delete(d.id),r.delete(d.id),Vc(d.id)},d.duration)))}function s(){g(n,!0);for(const d of r.values())clearTimeout(d);r.clear(),a.clear()}function c(){g(n,!1),l()}tn(()=>{mi.toasts.length,l()});var u=nE();Rt(u,21,()=>mi.toasts,d=>d.id,(d,h)=>{var f=tE(),v=I(f),y=I(v);jt(y,{get name(){return(t[o(h).kind]??t.info).icon},size:14});var S=M(v,2),m=I(S);{var p=T=>{var A=eE(),D=K(A,!0);me(()=>Z(D,o(h).title)),F(T,A)};Le(m,T=>{o(h).title&&T(p)})}var w=M(m,2),b=K(w,!0);me(()=>{pt(f,1,`pointer-events-auto flex w-full items-start gap-2.5 rounded-lg border ${(t[o(h).kind]??t.info).tint??""} bg-(--bg-2) p-3 text-left shadow-xl animate-[fade-in_120ms_ease-out] hover:bg-(--bg-3)`),Z(b,o(h).message)}),ne("click",f,()=>Vc(o(h).id)),F(d,f)}),Xn("mouseenter",u,s),Xn("mouseleave",u,c),F(i,u),$t()}fn(["click"]);var rE=W('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),aE=W('<span class="truncate text-[13px]"> </span>'),sE=W('<button><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button>'),oE=W('<span class="truncate text-[13px]">Add Instance</span>'),lE=W('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),cE=W('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),uE=W('<button role="tab"> </button>'),dE=W('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),fE=W('<div class="mb-4 flex items-center gap-2"><button class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"><!> Add Instance</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance"><!> Install .mrpack</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="flex rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),hE=W('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),pE=W('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),mE=W('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),vE=W("<div> </div>"),gE=W('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),_E=W('<p class="mt-2 text-[12px] text-red-400"> </p>'),xE=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),bE=W('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),yE=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),SE=W('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button></div> <button><!> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)" aria-live="polite"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <!> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function ME(i,e){Qt(e,!0);let t=ie("…"),n=ie("instances"),r=ie(Ut(ic(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));tn(()=>{$m(o(r)),localStorage.setItem("twilight-theme",o(r)),iv(o(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:Xa(o(r))?"dark":"light"}).catch(()=>{})}),jm();let a=ie("Ready"),l=ie(!1),s=ie(Ut(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));tn(()=>{localStorage.setItem("twilight-mode",o(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:o(s)}).catch(()=>{})});let c=ie(localStorage.getItem("twilight-blind-mode")==="true"),u=ie(localStorage.getItem("twilight-deaf-mode")==="true");tn(()=>{localStorage.setItem("twilight-blind-mode",String(o(c))),localStorage.setItem("twilight-deaf-mode",String(o(u))),window.__TAURI__?.core.invoke("set_accessibility_config",{blindMode:o(c),deafMode:o(u)}).catch(()=>{})});const d=[{id:"instances",label:"Instances",icon:"instances"},{id:"worlds",label:"Servers & P2P",icon:"worlds"},{id:"downloads",label:"Downloads",icon:"download"},{id:"settings",label:"Settings",icon:"settings"},{id:"accounts",label:"Accounts",icon:"accounts"}],h={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]},f=st(()=>ei.active);let v=ie(!1),y=ie(Ut([])),S=ie(!1),m=ie(""),p=ie(!1),w=ie(!1),b=ie(""),T=ie(!1),A=ie(""),D=ie(null),C=st(()=>o(D)?"edit":o(n)),j=ie(null),x=ie(null),E=ie(!1),te=ie(""),z=ie(null),N=ie(""),B=ie(Ut([])),V=ie(0),he=ie(0),se=ie("");async function ee($,Ie){return window.__TAURI__.core.invoke($,Ie)}function Ee(){g(r,Xa(o(r))?"twilight-light":"twilight-dark",!0)}async function Y(){g(S,!0),g(m,"");try{g(y,await ee("discover_java_installations"),!0)}catch($){g(m,String($),!0)}finally{g(S,!1)}}function H(){g(p,!0)}async function le(){if(o(b).trim()){g(T,!0),g(A,"");try{const $=await ee("install_modpack",{pathOrUrl:o(b).trim()});g(w,!1),g(b,""),await lt(),$&&g(we,$,!0),g(a,"Modpack installed.")}catch($){g(A,String($),!0)}finally{g(T,!1)}}}let Ae=ie(Ut([])),Me=ie(!1),Pe=ie(!1),Ne=ie(null);tn(()=>{o(Ae).length,o(Ne)&&(o(Ne).scrollTop=o(Ne).scrollHeight)});function ke($){o(Ae).push($),o(Ae).length>5e3&&o(Ae).splice(0,o(Ae).length-5e3)}function Be(){g(Ae,[],!0)}function et($){return $.stream==="stderr"||$.line.includes("/ERROR]")?"text-rose-400":$.line.includes("/WARN]")?"text-(--accent-star)":$.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function gt(){const $=o(Ae).map(Ie=>Ie.line).join(`
`);try{await navigator.clipboard.writeText($),rr("Logs copied to clipboard.","success")}catch{const Ie=document.createElement("textarea");Ie.value=$,document.body.append(Ie),Ie.select(),document.execCommand("copy"),Ie.remove()}}async function Ke(){if(o(Pe))try{await ee("kill_instance"),ke({stream:"stdout",line:"kill requested"})}catch($){ke({stream:"stderr",line:String($)})}}let Q=ie(Ut([])),_t=ie(""),ze=ie(null),ge=ie(""),we=ie(null),Fe=ie(null),Ge=ie(""),He=ie(!1);function Ze(){const $=o(ge).trim().toLowerCase();return $?o(Q).filter(Ie=>Ie.name.toLowerCase().includes($)||Ie.minecraft_version.toLowerCase().includes($)||Ie.id.toLowerCase().includes($)):o(Q)}async function lt(){try{g(Q,await ee("scan_instances"),!0),g(_t,"")}catch($){g(_t,String($),!0)}}function Ue($){g(we,$,!0)}async function P($,Ie=null){if(o(Pe))return;const nt=o(Q).find(Bt=>Bt.id===$),Nt=nt?nt.name:$;g(Pe,!0),g(a,Ie?`Running ${Nt} → ${Ie}…`:`Running ${Nt}…`,!0),g(Me,!0);try{const Bt=await ee("launch_instance",{instanceId:$,server:Ie});ke({stream:"stdout",line:`launcher reports exit code ${Bt}`}),await lt(),g(a,"Ready")}catch(Bt){console.error("Launch failed:",Bt),ke({stream:"stderr",line:`[ERROR] Launch failed: ${Bt}`}),rr(`Launch failed: ${Bt}`,"error"),g(a,"Launch failed")}finally{g(Pe,!1),o(a)!=="Launch failed"&&g(a,"Ready")}}function _(){o(x)&&ee("open_path",{path:o(x).instances_dir}).catch($=>g(a,String($),!0))}function U($){o(x)&&ee("open_path",{path:[o(x).instances_dir.replace(/\\/g,"/"),$].join("/")}).catch(Ie=>g(a,String(Ie),!0))}function k($){g(Ge,""),g(Fe,$,!0)}async function X($){if(!(!o(Fe)||o(He))){g(He,!0),g(Ge,"");try{await ee("delete_instance",{instanceId:o(Fe),toTrash:$}),o(we)===o(Fe)&&g(we,null),g(Fe,null),await lt(),g(a,$?"Instance moved to trash.":"Instance deleted.",!0)}catch(Ie){g(Ge,String(Ie),!0)}finally{g(He,!1)}}}const de=st(()=>[...new Set(o(Q).map($=>$.group).filter(Boolean))].sort(($,Ie)=>$.localeCompare(Ie)));async function Se($){if(!o(G))return;const Ie=o(G).name;try{await ee("set_instance_group",{instanceId:o(G).id,group:$}),await lt(),g(a,$?`Moved ${Ie} to ${$}.`:`${Ie} is ungrouped.`,!0)}catch(nt){g(a,String(nt),!0)}}async function xe(){if(!o(G))return;const $=o(G).name;try{const Ie=await ee("duplicate_instance",{instanceId:o(G).id});await lt(),g(we,Ie.id,!0),rr(`Copied ${$}.`,"success"),g(a,`Copied ${$}.`)}catch(Ie){g(a,String(Ie),!0),rr(`Copy failed: ${Ie}`,"error")}}async function q(){if(!o(G))return;const $=window.__TAURI__?.dialog?.save;if(!$){g(a,"File picker unavailable in this build.");return}try{const Ie=await $({title:"Export instance",defaultPath:`${o(G).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Ie)return;const nt=await ee("export_instance_zip",{instanceId:o(G).id,destPath:Ie});g(a,`Exported to ${nt}.`)}catch(Ie){g(a,String(Ie),!0)}}async function L(){if(o(G))try{const $=await ee("create_desktop_shortcut",{instanceId:o(G).id});rr(`Shortcut created: ${$}`,"success"),g(a,`Shortcut created: ${$}`)}catch($){g(a,String($),!0),rr(`Shortcut failed: ${$}`,"error")}}async function ue($,Ie){g(p,!1),await lt(),$?.id&&g(we,$.id,!0),g(a,Ie||`Instance ${$?.name??""} created.`,!0)}function be($){g(D,$,!0)}const G=st(()=>o(Q).find($=>$.id===o(we))??null);let ae=ie(null),Re=0;tn(()=>{const $=o(G);o(D);const Ie=++Re;g(ae,null),$&&ee("list_instance_mods",{instanceId:$.id}).then(nt=>{Ie===Re&&g(ae,nt.length,!0)}).catch(()=>{Ie===Re&&g(ae,null)})});async function De(){try{g(z,await ee("get_java_prefs"),!0),g(N,o(z).java_path??"",!0),g(B,o(z).custom_java_paths??[],!0),g(V,o(z).min_memory_mb,!0),g(he,o(z).max_memory_mb,!0),g(se,""),o(y).length===0&&await Y()}catch{}}async function O(){g(se,"");try{await ee("set_java_prefs",{javaPath:o(N).trim()||null,minMemoryMb:Number(o(V))||0,maxMemoryMb:Number(o(he))||0}),g(se,"Java settings saved.")}catch($){g(se,String($),!0)}}async function ye($){return g(B,await ee("add_custom_java",{path:$}),!0),o(B)}async function ce($){await ee("apply_java_runtime",{path:$||null}),g(N,$||"",!0),g(se,"")}async function _e(){g(E,!0);try{g(x,await ee("get_storage"),!0)}catch($){g(te,String($),!0)}finally{g(E,!1)}}async function Te($,Ie){g(E,!0),g(te,"");try{await ee("set_folder_dir",{kind:$,path:Ie?.trim()||null}),g(x,await ee("get_storage"),!0),g(te,"Folders updated."),($==="instances"||$==="shared")&&(await lt(),o(we)&&!o(Q).some(nt=>nt.id===o(we))&&g(we,null))}catch(nt){g(te,String(nt),!0)}finally{g(E,!1)}}function qe($){ee("open_path",{path:$}).catch(Ie=>g(a,String(Ie),!0))}async function je(){g(E,!0),g(te,"");try{await ee("clean_staging"),g(te,"Staging cleaned.")}catch($){g(te,String($),!0)}finally{g(E,!1)}}function rt($){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[$.account_type.type]??"Yggdrasil"}Pi(()=>{const $=[],Ie=nt=>{if(nt.key==="Escape"){const cn=Nc();if(cn){cn();return}o(ze)?g(ze,null):o(Fe)?(g(Fe,null),g(Ge,"")):o(D)?g(D,null):o(we)?g(we,null):o(v)?g(v,!1):o(w)?g(w,!1):o(Me)&&g(Me,!1);return}if(o(ze)||o(Fe)||o(v)||o(w)||o(D)||o(Me)||Nc()||nt.target?.closest?.("input, textarea, select, [contenteditable]"))return;const Bt=Ze();if(!Bt.length)return;const Yt=Bt.findIndex(cn=>cn.id===o(we));let ln=null;if(nt.key==="ArrowDown"||nt.key==="ArrowRight")ln=Yt+1;else if(nt.key==="ArrowUp"||nt.key==="ArrowLeft")ln=Yt<0?0:Yt-1;else if(nt.key==="Enter"&&Yt>=0&&document.activeElement===document.body){nt.preventDefault(),P(Bt[Yt].id);return}ln!=null&&Bt[ln]&&(nt.preventDefault(),g(we,Bt[ln].id,!0))};return window.addEventListener("keydown",Ie),(async()=>{try{g(t,await ee("get_version"),!0)}catch{g(t,"dev")}try{$.push(await window.__TAURI__.event.listen("launch-log",nt=>ke(nt.payload))),$.push(await window.__TAURI__.event.listen("tauri://drag-drop",nt=>{const Nt=nt.payload?.paths?.[0];Nt&&Nt.endsWith(".mrpack")&&(o(w)?g(b,Nt,!0):g(j,Nt,!0))}))}catch{}await Ys(),await lt(),await _e();try{const nt=await ee("get_startup_launch");nt&&o(Q).some(Nt=>Nt.id===nt)&&P(nt)}catch{}})(),()=>$.forEach(nt=>nt())});var Mt=SE(),ot=I(Mt),It=I(ot),Lt=M(I(It),2);{var xt=$=>{var Ie=rE();F($,Ie)};Le(Lt,$=>{o(l)&&$(xt)})}var Ye=M(It,2),vt=I(Ye);Rt(vt,17,()=>d,$=>$.id,($,Ie)=>{var nt=sE(),Nt=I(nt),Bt=I(Nt);jt(Bt,{get name(){return o(Ie).icon},size:15});var Yt=M(Nt,2);{var ln=cn=>{var qn=aE(),zn=K(qn,!0);me(()=>Z(zn,o(Ie).label)),F(cn,qn)};Le(Yt,cn=>{o(l)&&cn(ln)})}me(()=>{pt(nt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${o(l)?"":"justify-center"} ${o(n)===o(Ie).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Oe(nt,"title",o(Ie).label)}),ne("click",nt,()=>{g(n,o(Ie).id,!0),g(D,null),g(s,"launcher"),o(Ie).id==="settings"&&(De(),o(x)||_e())}),F($,nt)});var Ct=M(vt,2),Et=I(Ct),Ot=I(Et);jt(Ot,{name:"new",size:15});var Vt=M(Et,2);{var mt=$=>{var Ie=oE();F($,Ie)};Le(Vt,$=>{o(l)&&$(mt)})}var ut=M(Ye,2),Je=I(ut);{let $=st(()=>fs(o(f))),Ie=st(()=>o(f)?o(f).username[0]?.toUpperCase():"?");hc(Je,{get source(){return o($)},size:28,get letter(){return o(Ie)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var R=M(Je,2);{var J=$=>{var Ie=lE(),nt=I(Ie),Nt=K(nt,!0),Bt=M(nt,2),Yt=K(Bt,!0);me(ln=>{Z(Nt,o(f)?o(f).username:"Accounts"),Z(Yt,ln)},[()=>o(f)?rt(o(f)):"manage & sign in"]),F($,Ie)};Le(R,$=>{o(l)&&$(J)})}var fe=M(ut,2),oe=K(fe,!0),ve=M(ot,2),Xe=I(ve),it=I(Xe),ft=I(it);{var ct=$=>{var Ie=cE(),nt=Tt(Ie),Nt=M(nt,2),Bt=K(Nt,!0);me(()=>{Oe(Nt,"title",o(D)?.name),Z(Bt,o(D)?.name)}),ne("click",nt,()=>g(D,null)),F($,Ie)},yt=$=>{var Ie=dE(),nt=Tt(Ie),Nt=K(nt),Bt=M(nt,4);Rt(Bt,20,()=>[["launcher","Launcher"],["client","Client"]],Sl,(Yt,ln)=>{var cn=st(()=>Ud(ln,2));let qn=()=>o(cn)[0],zn=()=>o(cn)[1];var Un=uE(),Li=K(Un,!0);me(()=>{pt(Un,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${o(s)===qn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Oe(Un,"aria-selected",o(s)===qn()),Z(Li,zn())}),ne("click",Un,()=>g(s,qn(),!0)),F(Yt,Un)}),me(()=>Z(Nt,`TwilightMC Bolide (alpha-v${o(t)??""})`)),F($,Ie)};Le(ft,$=>{o(C)==="edit"?$(ct):$(yt,-1)})}var ht=M(it,2),bt=K(ht,!0),pe=M(Xe,2),Ce=I(pe);{var We=$=>{kM($,{onback:()=>g(n,"instances")})},dt=$=>{YM($,{get instances(){return o(Q)},get active(){return o(f)},get gameRunning(){return o(Pe)},get status(){return o(a)},onlaunch:P,onopenconsole:()=>g(Me,!0),get onrefresh(){return Ys},onopenaccounts:()=>{g(n,"accounts"),g(s,"launcher")}})},tt=$=>{Kv($,{get instance(){return o(D)},get storage(){return o(x)},get blindMode(){return o(c)},get deafMode(){return o(u)},onback:()=>g(D,null),onopenconsole:()=>g(Me,!0)})},$e=$=>{u_($,{get version(){return o(t)},get storage(){return o(x)},get runtimes(){return o(y)},get scanning(){return o(S)},get javaError(){return o(m)},get storageBusy(){return o(E)},get storageMsg(){return o(te)},get javaMsg(){return o(se)},get gameRunning(){return o(Pe)},onback:()=>g(n,"instances"),onscanjava:Y,onsaveprefs:O,onaddjava:ye,onapplyjava:ce,onsavefolder:Te,onopenfolder:qe,oncleanstaging:je,onopenaccounts:()=>{g(n,"accounts"),g(s,"launcher")},onopenurl:Ie=>ee("open_external_url",{url:Ie}).catch(nt=>g(a,String(nt),!0)),get theme(){return o(r)},set theme(Ie){g(r,Ie,!0)},get blindMode(){return o(c)},set blindMode(Ie){g(c,Ie,!0)},get deafMode(){return o(u)},set deafMode(Ie){g(u,Ie,!0)},get javaPath(){return o(N)},set javaPath(Ie){g(N,Ie,!0)},get javaCustomPaths(){return o(B)},set javaCustomPaths(Ie){g(B,Ie,!0)},get minMem(){return o(V)},set minMem(Ie){g(V,Ie,!0)},get maxMem(){return o(he)},set maxMem(Ie){g(he,Ie,!0)}})},zt=$=>{var Ie=fE(),nt=Tt(Ie),Nt=I(nt),Bt=I(Nt);jt(Bt,{name:"new",size:13});var Yt=M(Nt,2),ln=I(Yt);jt(ln,{name:"folder",size:14});var cn=M(Yt,2),qn=I(cn);jt(qn,{name:"package",size:14});var zn=M(cn,2),Un=I(zn);jt(Un,{name:"settings",size:14});var Li=M(zn,2),_i=M(Li,4),xi=I(_i);{var un=Yn=>{jt(Yn,{name:"sun",size:15})},Ii=st(()=>Xa(o(r))),Eo=Yn=>{jt(Yn,{name:"moon",size:15})};Le(xi,Yn=>{o(Ii)?Yn(un):Yn(Eo,-1)})}var Dh=M(nt,2);{let Yn=st(Ze);Lm(Dh,{get instances(){return o(Yn)},get error(){return o(_t)},get query(){return o(ge)},get selectedId(){return o(we)},get gameRunning(){return o(Pe)},get menuFor(){return o(ze)},onselect:Ue,onplay:P,ontogglemenu:Sc=>g(ze,o(ze)===Sc?null:Sc,!0),onedit:be,onopenfolder:U,onviewlogs:()=>g(Me,!0),ondelete:k,onclosemenu:()=>g(ze,null),onadd:H})}me(Yn=>{Yt.disabled=!o(x),Oe(Yt,"title",o(x)?o(x).instances_dir:""),Oe(_i,"title",Yn)},[()=>Xa(o(r))?"Twilight Light":"Twilight Dark"]),ne("click",Nt,H),ne("click",Yt,_),ne("click",cn,()=>g(w,!0)),ne("click",zn,()=>{g(n,"settings"),De(),o(x)||_e()}),Kt(Li,()=>o(ge),Yn=>g(ge,Yn)),ne("click",_i,Ee),F($,Ie)},wt=$=>{var Ie=hE(),nt=Tt(Ie),Nt=K(nt,!0),Bt=M(nt,2),Yt=K(Bt,!0);me(()=>{Z(Nt,h[o(n)][0]),Z(Yt,h[o(n)][1])}),F($,Ie)};Le(Ce,$=>{o(C)==="accounts"?$(We):o(s)==="client"?$(dt,1):o(C)==="edit"&&o(D)?$(tt,2):o(n)==="settings"?$($e,3):o(n)==="instances"?$(zt,4):$(wt,-1)})}var nn=M(pe,2),Fn=I(nn),rn=I(Fn),An=I(rn),Gt=M(An,2);jt(Gt,{name:"log",size:13});var Rn=M(Gt,4);{var Bn=$=>{var Ie=pE();F($,Ie)};Le(Rn,$=>{o(Pe)&&$(Bn)})}var Xt=M(rn,2),ai=I(Xt),Da=M(ai,2),Ur=M(Da,2),Eh=M(Ur,2);{var wh=$=>{var Ie=mE();ne("click",Ie,()=>g(Me,!1)),F($,Ie)};Le(Eh,$=>{o(Me)&&$(wh)})}var pc=M(Fn,2);Rt(pc,21,()=>o(Ae),Sl,($,Ie)=>{var nt=vE(),Nt=K(nt,!0);me(Bt=>{pt(nt,1,`whitespace-pre-wrap break-all ${Bt??""}`),Z(Nt,o(Ie).line)},[()=>et(o(Ie))]),F($,nt)},$=>{var Ie=gE();F($,Ie)}),wf(pc,$=>g(Ne,$),()=>o(Ne));var mc=M(ve,2);{var Th=$=>{Ng($,{get instance(){return o(G)},get storage(){return o(x)},get gameRunning(){return o(Pe)},get modsCount(){return o(ae)},get groups(){return o(de)},onlaunch:()=>P(o(G).id),onkill:Ke,onedit:()=>be(o(G)),onchangegroup:Se,onopenfolder:()=>U(o(G).id),onexport:q,oncopy:xe,ondelete:()=>k(o(G).id),onshortcut:L,onclose:()=>g(we,null)})};Le(mc,$=>{o(C)==="instances"&&o(G)&&$(Th)})}var vc=M(mc,2);{var Ah=$=>{ng($,{get path(){return o(j)},onclose:()=>g(j,null),oninstalled:async Ie=>{g(j,null),await lt(),g(we,Ie,!0),g(a,"Modpack installed.")}})};Le(vc,$=>{o(j)&&$(Ah)})}var gc=M(vc,2);{var Rh=$=>{TM($,{get accounts(){return ei.list},get active(){return o(f)},onclose:()=>{g(v,!1),Ys()},get onrefresh(){return Ys}})};Le(gc,$=>{o(v)&&$(Rh)})}var _c=M(gc,2);{var Ch=$=>{Cg($,{get groups(){return o(de)},get blindMode(){return o(c)},get deafMode(){return o(u)},onclose:()=>g(p,!1),oncreated:ue})};Le(_c,$=>{o(p)&&$(Ch)})}var xc=M(_c,2);{var Ph=$=>{var Ie=xE(),nt=I(Ie),Nt=I(nt),Bt=M(I(Nt),2),Yt=M(Nt,2),ln=I(Yt),cn=M(ln,2),qn=M(cn,2);{var zn=un=>{var Ii=_E(),Eo=K(Ii,!0);me(()=>Z(Eo,o(A))),F(un,Ii)};Le(qn,un=>{o(A)&&un(zn)})}var Un=M(Yt,2),Li=I(Un),_i=M(Li,2),xi=K(_i,!0);me(un=>{_i.disabled=un,Z(xi,o(T)?"Installing…":"Install .mrpack")},[()=>o(T)||!o(b).trim()]),ne("click",Ie,un=>{un.target===un.currentTarget&&!o(T)&&g(w,!1)}),ne("click",Bt,()=>g(w,!1)),Xn("dragover",ln,un=>un.preventDefault()),Xn("drop",ln,un=>{un.preventDefault();const Ii=un.dataTransfer?.files?.[0]?.path;Ii&&g(b,Ii,!0)}),Kt(cn,()=>o(b),un=>g(b,un)),ne("click",Li,()=>g(w,!1)),ne("click",_i,le),F($,Ie)};Le(xc,$=>{o(w)&&$(Ph)})}var bc=M(xc,2);{var Lh=$=>{var Ie=yE(),nt=I(Ie),Nt=M(I(nt),2),Bt=M(I(Nt)),Yt=K(Bt,!0),ln=M(Nt,2);{var cn=xi=>{var un=bE(),Ii=K(un,!0);me(()=>Z(Ii,o(Ge))),F(xi,un)};Le(ln,xi=>{o(Ge)&&xi(cn)})}var qn=M(ln,2),zn=I(qn),Un=M(zn,2),Li=I(Un);Ei(Li,{emoji:"♻"});var _i=M(Un,2);me(()=>{Z(Yt,o(Fe)),zn.disabled=o(He),Un.disabled=o(He),_i.disabled=o(He)}),ne("click",Ie,xi=>{xi.target===xi.currentTarget&&!o(He)&&g(Fe,null)}),ne("click",zn,()=>g(Fe,null)),ne("click",Un,()=>X(!0)),ne("click",_i,()=>X(!1)),F($,Ie)};Le(bc,$=>{o(Fe)&&$(Lh)})}var yc=M(bc,2);$M(yc,{});var Ih=M(yc,2);iE(Ih,{}),me(()=>{pt(ot,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${o(l)?"w-60":"w-16"}`),pt(Ct,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${o(l)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),pt(ut,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${o(l)?"":"justify-center"}`),Oe(ut,"title",o(f)?o(f).username:"Manage accounts"),pt(fe,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${o(l)?"":"opacity-0 group-hover/nav:opacity-100"}`),Z(oe,o(l)?"«":"»"),Z(bt,o(a)),pt(nn,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${o(Me)?"h-48":"h-10"}`),Oe(rn,"title",o(Me)?"Collapse console":"Expand console"),pt(An,1,`h-2 w-2 shrink-0 rounded-full ${o(Pe)?"animate-pulse bg-green-500":"bg-(--border)"}`),ai.disabled=!o(Ae).length,Da.disabled=!o(Ae).length,Ur.disabled=!o(Pe)}),ne("dblclick",It,()=>g(l,!o(l))),ne("click",Ct,H),ne("click",ut,()=>{g(n,"accounts"),g(D,null),g(s,"launcher")}),ne("click",fe,()=>g(l,!o(l))),ne("click",rn,()=>g(Me,!o(Me))),ne("click",ai,$=>{$.stopPropagation(),Be()}),ne("click",Da,$=>{$.stopPropagation(),gt()}),ne("click",Ur,$=>{$.stopPropagation(),Ke()}),F(i,Mt),$t()}fn(["dblclick","click"]);tm(ME,{target:document.getElementById("app")});
