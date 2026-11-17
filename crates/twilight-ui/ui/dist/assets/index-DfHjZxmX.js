(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ld=!1;var fo=Array.isArray,Nh=Array.prototype.indexOf,es=Array.prototype.includes,ho=Array.from,Id=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,Oh=Object.getOwnPropertyDescriptors,kh=Object.prototype,Fh=Array.prototype,Dd=Object.getPrototypeOf,Ec=Object.isExtensible;const Bh=()=>{};function zh(i){for(var e=0;e<i.length;e++)i[e]()}function Ud(){var i,e,t=new Promise((n,r)=>{i=n,e=r});return{promise:t,resolve:i,reject:e}}function Nd(i,e){if(Array.isArray(i))return i;if(!(Symbol.iterator in i))return Array.from(i);const t=[];for(const n of i)if(t.push(n),t.length===e)break;return t}const Rn=2,ha=4,po=8,Od=1<<24,di=16,vi=32,dr=64,ml=128,Vl=256,pi=512,mn=1024,Yt=2048,Xn=4096,Dn=8192,yn=16384,wa=32768,ts=1<<25,pa=65536,eo=1<<17,Gh=1<<18,Ta=1<<19,Hh=1<<20,Si=1<<25,to=1<<21,oa=1<<22,or=1<<23,Er=Symbol("$state"),kd=Symbol("component"),Vh=Symbol("legacy props"),Wh=Symbol(""),Fd=Symbol("attributes"),vl=Symbol("class"),gl=Symbol("style"),_l=Symbol("text"),Ks=Symbol("form reset"),hs=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},jh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),Xh=1,qh=2,Bd=4,Yh=8,Kh=16,Zh=1,Jh=4,Qh=8,$h=16,ep=1,tp=2,zd={},pn=Symbol("uninitialized"),np="http://www.w3.org/1999/xhtml";function ip(){console.warn("https://svelte.dev/e/derived_inert")}function rp(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ap(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Gd(i){return i===this.v}function sp(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Hd(i){return!sp(i,this.v)}function Vd(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function op(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function lp(i,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function cp(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function up(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function dp(i){throw new Error("https://svelte.dev/e/effect_orphan")}function fp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hp(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function pp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function vp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function gp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let _p=!1,Sn=null;function ma(i){Sn=i}function Qt(i,e=!1,t){Sn={p:Sn,i:!1,c:null,e:null,s:i,x:null,r:Ft,l:null}}function $t(i){var e=Sn,t=e.e;if(t!==null){e.e=null;for(var n of t)cf(n)}return e.i=!0,Sn=e.p,Wl(i)}function Wl(i={}){return Id(i,kd,{value:!0}),i}function Wd(){return!0}let yr=[];function jd(){var i=yr;yr=[],zh(i)}function Mi(i){if(yr.length===0&&!Ka){var e=yr;queueMicrotask(()=>{e===yr&&jd()})}yr.push(i)}function xp(){for(;yr.length>0;)jd()}const bp=-7169;function an(i,e){i.f=i.f&bp|e}function jl(i){(i.f&pi)!==0||i.deps===null?an(i,mn):an(i,Xn)}function Xd(i,e){(i.f&Yt)!==0?e.set(i,Yt):(i.f&Xn)!==0&&e.get(i)!==Yt&&e.set(i,Xn),an(i,mn)}function yp(i,e){{const t=document.body;i.autofocus=!0,Mi(()=>{document.activeElement===t&&i.focus()})}}let wc=!1;function Sp(){wc||(wc=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const e of i.target.elements)e[Ks]?.()})},{capture:!0}))}function Aa(i){var e=Ot,t=Ft;ai(null),Ai(null);try{return i()}finally{ai(e),Ai(t)}}function qd(i,e,t,n=t){i.addEventListener(e,()=>Aa(t));const r=i[Ks];r?i[Ks]=()=>{r(),n(!0)}:i[Ks]=()=>n(!0),Sp()}function Mp(i,e,t,n){const r=ns;var a=i.filter(v=>!v.settled),l=e.map(r);if(t.length===0&&a.length===0){n(l);return}var s=Ft,c=Ep(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(v=>v.promise)):null;function d(v){if((s.f&yn)===0){c();try{n([...l,...v])}catch(b){yi(b,s)}no()}}var h=Yd();if(t.length===0){u.then(()=>d([])).finally(h);return}function f(){Promise.all(t.map(v=>wp(v))).then(d).catch(v=>yi(v,s)).finally(h)}u?u.then(()=>{if((s.f&yn)!==0){h();return}c(),f(),no()}):f()}function Ep(){var i=Ft,e=Ot,t=Sn,n=Et;return function(a=!0){Ai(i),ai(e),ma(t),a&&(i.f&yn)===0&&(n?.activate(),n?.apply())}}function no(i=!0){Ai(null),ai(null),ma(null),i&&Et?.deactivate()}function Yd(){var i=Ft,e=i.b,t=Et,n=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(n,i),()=>{e?.update_pending_count(-1,t),t.decrement(n,i)}}function ns(i){var e=Rn|Yt;return Ft!==null&&(Ft.f|=Ta),{ctx:Sn,deps:null,effects:null,equals:Gd,f:e,fn:i,reactions:null,rv:0,v:pn,wv:0,parent:Ft,ac:null}}const Va=Symbol("obsolete");function wp(i,e,t){let n=Ft;n===null&&op();var r=void 0,a=Lr(pn),l=!Ot,s=new Set;return zp(()=>{var c=Ft,u=Ud();r=u.promise;try{Promise.resolve(i()).then(u.resolve,v=>{v!==hs&&u.reject(v)}).finally(no)}catch(v){u.reject(v),no()}var d=Et;if(l){if((c.f&wa)!==0)var h=Yd();if(n.b?.is_rendered())d.async_deriveds.get(c)?.reject(Va);else for(const v of s.values())v.reject(Va);s.add(u),d.async_deriveds.set(c,u)}const f=(v,b=void 0)=>{h?.(),s.delete(u),b!==Va&&(d.activate(),b?(a.f|=or,va(a,b)):((a.f&or)!==0&&(a.f^=or),va(a,v)),d.deactivate())};u.promise.then(f,v=>f(null,v||"unknown"))}),Zl(()=>{for(const c of s)c.reject(Va)}),new Promise(c=>{function u(d){function h(){d===r?c(a):u(r)}d.then(h,h)}u(r)})}function st(i){const e=ns(i);return mf(e),e}function Kd(i){const e=ns(i);return e.equals=Hd,e}function Tp(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)On(e[t])}}function Xl(i){var e,t=Ft,n=i.parent;if(!Ki&&n!==null&&i.v!==pn&&(n.f&(yn|Dn))!==0)return ip(),i.v;Ai(n);try{Tp(i),e=xf(i)}finally{Ai(t)}return e}function Zd(i){var e=Xl(i);if(!i.equals(e)&&(i.wv=gf(),(!Et?.is_fork||i.deps===null)&&(Et!==null?(Et.capture(i,e,!0),la?.capture(i,e,!0)):i.v=e,i.deps===null))){an(i,mn);return}Ki||(fi!==null?(Kl()||Et?.is_fork)&&fi.set(i,e):jl(i))}function Ap(i){if(i.effects!==null)for(const e of i.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&Aa(()=>{e.ac.abort(hs),e.ac=null}),e.fn!==null&&(e.teardown=Bh),rs(e,0),Ql(e))}function Jd(i){if(i.effects!==null)for(const e of i.effects)e.teardown&&e.fn!==null&&ga(e)}let To=null,Nr=null,Et=null,la=null,fi=null,xl=null,Ka=!1,Ao=!1,Za=null,Zs=null;var Tc=0;let Rp=1;class fr{id=Rp++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Nr===null?To=Nr=this:(Nr.next=this,this.prev=Nr),Nr=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=n=>this.schedule(n)){var n=this.#o.get(e);if(n){this.#o.delete(e);for(var r of n.d)an(r,Yt),t(r);for(r of n.m)an(r,Xn),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&yn)!==0||(a.f&(Yt|Xn))===0)){for(var t=a,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(dr|vi))!==0){if((r&mn)===0){n=!0;break}t.f^=mn}}n||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,c]of this.#r)an(s,c),this.schedule(s);this.apply();for(var e=Za=[],t=[],n=Zs=[];this.#i.length>0;){Tc++>1e3&&(this.#f(),Pp());for(const s of this.#u())try{this.#x(s,e,t)}catch(c){throw ef(s),this.#p()||this.discard(),c}}if(Et=null,n.length>0){var r=fr.ensure();for(const s of n)r.schedule(s)}if(Za=null,Zs=null,this.#p()){this.#v(t),this.#v(e);for(const[s,c]of this.#o)$d(s,c);n.length>0&&Et.#m();return}const a=this.#S();if(a){this.#v(t),this.#v(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),la=this,Ac(t),Ac(e),la=null,this.#n?.resolve();var l=Et;this.#e===0&&(this.#i.length===0||l!==null)&&this.#f(),l!==null&&(wi.clear(),l.#m())}#x(e,t,n){e.f^=mn;for(var r=e.first;r!==null;){var a=r.f,l=(a&(vi|dr))!==0,s=l&&(a&mn)!==0,c=s||(a&Dn)!==0||this.#o.has(r);if(!c&&r.fn!==null){l?r.f^=mn:(a&ha)!==0?t.push(r):ms(r)&&((a&di)!==0&&this.add_dirty_reaction(r,Xn),ga(r));var u=r.first;if(u!==null){r=u;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#S(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,n]]of this.current)if(!n&&e.current.has(t))return!0;return!1}#d(e){for(const[n,r]of e.current)!this.previous.has(n)&&e.previous.has(n)&&this.previous.set(n,e.previous.get(n)),this.current.set(n,r);for(const[n,r]of e.async_deriveds){const a=this.async_deriveds.get(n);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=n=>{var r=n.reactions;if(r!==null&&!((n.f&Rn)!==0&&(n.f&(Yt|Xn))===0))for(const s of r){var a=s.f;if((a&Rn)!==0)t(s);else{var l=s;a&(oa|di)&&!this.async_deriveds.has(l)&&(this.#r.delete(l),an(l,Yt),this.schedule(l))}}};for(const n of this.current.keys())t(n);this.oncommit(()=>e.discard()),e.#f(),Et=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)Xd(e[t],this.#r)}capture(e,t,n=!1){e.v!==pn&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&or)===0&&(this.current.set(e,[t,n]),fi?.set(e,t)),this.is_fork||(e.v=t)}activate(){Et=this}deactivate(){Et=null,fi=null}flush(){try{Ao=!0,Et=this,this.#m()}finally{Tc=0,xl=null,Za=null,Zs=null,Ao=!1,Et=null,fi=null,wi.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Va);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let h=To;h!==null;h=h.next){var e=h.id<this.id,t=[];for(const[f,[v,b]]of this.current){if(h.current.has(f)){var n=h.current.get(f)[0];if(e&&v!==n)h.current.set(f,[v,b]);else continue}t.push(f)}if(e)for(const[f,v]of this.async_deriveds){const b=h.async_deriveds.get(f);b&&v.promise.then(b.resolve).catch(b.reject)}var r=[...h.current.keys()].filter(f=>!h.current.get(f)[1]);if(!(!h.started||r.length===0)){var a=r.filter(f=>!this.current.has(f));if(a.length===0)e&&h.discard();else if(t.length>0){if(e)for(const f of this.#h)h.unskip_effect(f,v=>{(v.f&(di|oa))!==0?h.schedule(v):h.#v([v])});h.activate();var l=new Set,s=new Map;for(var c of t)Qd(c,a,l,s);s=new Map;var u=[...h.current].filter(([f,v])=>{const b=this.current.get(f);return b?b[0]!==v[0]||b[1]!==v[1]:!0}).map(([f])=>f);if(u.length>0)for(const f of this.#a)(f.f&(yn|Dn|eo))===0&&ql(f,u,s)&&((f.f&(oa|di))!==0?(an(f,Yt),h.schedule(f)):h.add_dirty_reaction(f,Yt));if(h.#i.length>0&&!h.#c){h.apply();for(var d of h.#u())h.#x(d,[],[])}h.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let n=this.#s.get(t)??0;this.#s.set(t,n+1)}}decrement(e,t){if(this.#e-=1,e){let n=this.#s.get(t)??0;n===1?this.#s.delete(t):this.#s.set(t,n-1)}this.#c||(this.#c=!0,Mi(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,n]of e)this.add_dirty_reaction(t,n);e.clear()}add_dirty_reaction(e,t){(t===Yt||this.#r.get(e)!==Yt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=Ud()).promise}static ensure(){if(Et===null){const e=Et=new fr;!Ao&&!Ka&&Mi(()=>{e.started||e.flush()})}return Et}apply(){{fi=null;return}}schedule(e){if(xl=e,e.b?.is_pending&&(e.f&(ha|po|Od))!==0&&(e.f&wa)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?To=t:e.next=t,t===null?Nr=e:t.prev=e,this.linked=!1}}}function Cp(i){var e=Ka,t=la;la=null,Ka=!0;try{for(var n;;){if(xp(),Et===null)return n;Et.flush()}}finally{Ka=e,la=t}}function Pp(){try{fp()}catch(i){yi(i,xl)}}let Gi=null;function Ac(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(yn|Dn))===0&&ms(n)&&(Gi=new Set,ga(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&ff(n),Gi?.size>0)){wi.clear();for(const r of Gi){if((r.f&(yn|Dn))!==0)continue;const a=[r];let l=r.parent;for(;l!==null;)Gi.has(l)&&(Gi.delete(l),a.push(l)),l=l.parent;for(let s=a.length-1;s>=0;s--){const c=a[s];(c.f&(yn|Dn))===0&&ga(c)}}Gi.clear()}}Gi=null}}function Qd(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const r of i.reactions){const a=r.f;(a&Rn)!==0?Qd(r,e,t,n):(a&(oa|di))!==0&&(a&Yt)===0&&ql(r,e,n)&&(an(r,Yt),Yl(r))}}function ql(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const r of i.deps){if(es.call(e,r))return!0;if((r.f&Rn)!==0&&ql(r,e,t))return t.set(r,!0),!0}return t.set(i,!1),!1}function Yl(i){Et.schedule(i)}function $d(i,e){if(!((i.f&vi)!==0&&(i.f&mn)!==0)){(i.f&Yt)!==0?e.d.push(i):(i.f&Xn)!==0&&e.m.push(i),an(i,mn);for(var t=i.first;t!==null;)$d(t,e),t=t.next}}function ef(i){an(i,mn);for(var e=i.first;e!==null;)ef(e),e=e.next}let io=new Set;const wi=new Map;let tf=!1;function Lr(i,e){var t={f:0,v:i,reactions:null,equals:Gd,rv:0,wv:0};return t}function se(i,e){const t=Lr(i);return mf(t),t}function Lp(i,e=!1,t=!0){const n=Lr(i);return e||(n.equals=Hd),n}function g(i,e,t=!1){Ot!==null&&(!hi||(Ot.f&eo)!==0)&&Wd()&&(Ot.f&(Rn|di|oa|eo))!==0&&(Ti===null||!Ti.has(i))&&vp();let n=t?kt(e):e;return va(i,n,Zs)}var xr=null,bl=0;function va(i,e,t=null){if(!i.equals(e)){Ki?wi.set(i,e):wi.has(i)||wi.set(i,i.v);var n=fr.ensure();if(n.capture(i,e),(i.f&Rn)!==0){const r=i;(i.f&Yt)!==0&&Xl(r),fi===null&&jl(r)}i.wv=gf(),xr=null,bl=0,nf(i,Yt,t),xr=null,Ft!==null&&(Ft.f&mn)!==0&&(Ft.f&(vi|dr))===0&&(Qn===null?Vp([i]):Qn.push(i)),!n.is_fork&&io.size>0&&!tf&&Ip()}return e}function Ip(){tf=!1;for(const i of io){(i.f&mn)!==0&&an(i,Xn);let e;try{e=ms(i)}catch{e=!0}e&&ga(i)}io.clear()}function Ja(i){g(i,i.v+1)}function nf(i,e,t){var n=i.reactions;if(n!==null){var r=n.length;if(bl+=r,bl>1e5&&xr===null&&(xr=new Set),xr!==null){if(xr.has(i))return;xr.add(i)}for(var a=0;a<r;a++){var l=n[a],s=l.f,c=(s&Yt)===0;if(c&&an(l,e),(s&eo)!==0)io.add(l);else if((s&Rn)!==0){var u=l;fi?.delete(u),nf(u,Xn,t)}else if(c){var d=l;(s&di)!==0&&Gi!==null&&Gi.add(d),t!==null?t.push(d):Yl(d)}}}}function kt(i){if(typeof i!="object"||i===null||Er in i||kd in i)return i;const e=Dd(i);if(e!==kh&&e!==Fh)return i;var t=new Map,n=fo(i),r=se(0),a=Tr,l=s=>{if(Tr===a)return s();var c=Ot,u=Tr;ai(null),Lc(a);var d=s();return ai(c),Lc(u),d};return n&&t.set("length",se(i.length)),new Proxy(i,{defineProperty(s,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&pp();var d=t.get(c);return d===void 0?l(()=>{var h=se(u.value);return t.set(c,h),h}):g(d,u.value,!0),!0},deleteProperty(s,c){var u=t.get(c);if(u===void 0){if(c in s){const d=l(()=>se(pn));t.set(c,d),Ja(r)}}else g(u,pn),Ja(r);return!0},get(s,c,u){if(c===Er)return i;var d=t.get(c),h=c in s;if(d===void 0&&(!h||sa(s,c)?.writable)&&(d=l(()=>{var v=kt(h?s[c]:pn),b=se(v);return b}),t.set(c,d)),d!==void 0){var f=o(d);return f===pn?void 0:f}return Reflect.get(s,c,u)},getOwnPropertyDescriptor(s,c){this.has?.(s,c);var u=Reflect.getOwnPropertyDescriptor(s,c),d=t.get(c);if(d!==void 0){var h=o(d);if(h===pn)return;if(u&&"value"in u)u.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(s,c){if(c===Er)return!0;var u=t.get(c),d=u!==void 0&&u.v!==pn||Reflect.has(s,c);if(u!==void 0||(Ft!==null||Ot!==null)&&(!d||sa(s,c)?.writable)){u===void 0&&(u=l(()=>{var f=d?kt(s[c]):pn,v=se(f);return v}),t.set(c,u));var h=o(u);if(h===pn)return!1}return d},set(s,c,u,d){var h=t.get(c),f=c in s;if(n&&c==="length")for(var v=u;v<h.v;v+=1){var b=t.get(v+"");b!==void 0?g(b,pn):v in s&&(b=l(()=>se(pn)),t.set(v+"",b))}if(h===void 0)(!f||sa(s,c)?.writable)&&(h=l(()=>se(void 0)),g(h,kt(u)),t.set(c,h));else{f=h.v!==pn;var S=l(()=>kt(u));g(h,S)}var m=Reflect.getOwnPropertyDescriptor(s,c);if(m?.set&&m.set.call(d,u),!f){if(n&&typeof c=="string"){var p=t.get("length"),E=Number(c);Number.isInteger(E)&&E>=p.v&&g(p,E+1)}Ja(r)}return!0},ownKeys(s){o(r);var c=Reflect.ownKeys(s).filter(h=>{var f=t.get(h);return f===void 0||f.v!==pn});for(var[u,d]of t)d.v!==pn&&!(u in s)&&c.push(u);return c},setPrototypeOf(){mp()}})}function Rc(i){try{if(i!==null&&typeof i=="object"&&Er in i)return i[Er]}catch{}return i}function rf(i,e){return Object.is(Rc(i),Rc(e))}var Cc,af,sf,of;function Dp(){if(Cc===void 0){Cc=window,af=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;sf=sa(e,"firstChild").get,of=sa(e,"nextSibling").get,Ec(i)&&(i[vl]=void 0,i[Fd]=null,i[gl]=void 0,i.__e=void 0),Ec(t)&&(t[_l]=void 0)}}function Xi(i=""){return document.createTextNode(i)}function is(i){return sf.call(i)}function ps(i){return of.call(i)}function L(i,e){return is(i)}function At(i,e=!1){{var t=is(i);return t instanceof Comment&&t.data===""?ps(t):t}}function J(i,e=!1){return is(i)}function y(i,e=1,t=!1){let n=i;for(;e--;)n=ps(n);return n}function Up(i){i.textContent=""}function lf(){return!1}function Np(i,e,t){return t?document.createElement(i,{is:t}):document.createElement(i)}function Op(i){var e=Ft;if(e===null)return Ot.f|=or,i;if((e.f&wa)===0&&(e.f&ha)===0)throw i;yi(i,e)}function yi(i,e){if(i===zd)throw i;if(!(e!==null&&(e.f&yn)!==0)){for(;e!==null;){if((e.f&ml)!==0&&(e.f&(yn|ts))===0){if((e.f&wa)===0)throw i;try{e.b.error(i);return}catch(t){i=t}}e=e.parent}throw i}}function kp(i){Ft===null&&(Ot===null&&dp(),up()),Ki&&cp()}function Fp(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function Qi(i,e){var t=Ft;t!==null&&(t.f&Dn)!==0&&(i|=Dn);var n={ctx:Sn,deps:null,nodes:null,f:i|Yt|pi,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Et?.register_created_effect(n);var r=n;if((i&ha)!==0)Za!==null?Za.push(n):fr.ensure().schedule(n);else if(e!==null){try{ga(n)}catch(l){throw On(n),l}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Ta)===0&&(r=r.first,(i&di)!==0&&(i&pa)!==0&&r!==null&&(r.f|=pa))}if(r!==null&&(r.parent=t,t!==null&&Fp(r,t),Ot!==null&&(Ot.f&Rn)!==0&&(i&dr)===0)){var a=Ot;(a.effects??=[]).push(r)}return n}function Kl(){return Ot!==null&&!hi}function Zl(i){const e=Qi(po,null);return an(e,mn),e.teardown=i,e}function tn(i){kp();var e=Ft.f,t=!Ot&&(e&vi)!==0&&Sn!==null&&!Sn.i;if(t){var n=Sn;(n.e??=[]).push(i)}else return cf(i)}function cf(i){return Qi(ha|Hh,i)}function Bp(i){fr.ensure();const e=Qi(dr|Ta,i);return(t={})=>new Promise(n=>{t.outro?wr(e,()=>{On(e),n(void 0)}):(On(e),n(void 0))})}function uf(i){return Qi(ha,i)}function zp(i){return Qi(oa|Ta,i)}function Jl(i,e=0){return Qi(po|e,i)}function ge(i,e=[],t=[],n=[]){Mp(n,e,t,r=>{Qi(po,()=>{i(...r.map(o))})})}function mo(i,e=0){var t=Qi(di|e,i);return t}function $n(i){return Qi(vi|Ta,i)}function df(i){var e=i.teardown;if(e!==null){const t=Ki,n=Ot;Pc(!0),ai(null);try{e.call(null)}catch(r){yi(r,i.parent)}finally{Pc(t),ai(n)}}}function Ql(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const r=t.ac;r!==null&&Aa(()=>{r.abort(hs)});var n=t.next;(t.f&dr)!==0?t.parent=null:On(t,e),t=n}}function Gp(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&vi)===0&&On(e),e=t}}function On(i,e=!0){var t=!1;(e||(i.f&Gh)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(Hp(i.nodes.start,i.nodes.end),t=!0),i.f|=ts,Ql(i,e&&!t),rs(i,0);var n=i.nodes&&i.nodes.t;if(n!==null)for(const a of n)a.stop();df(i),i.f^=ts,i.f|=yn;var r=i.parent;r!==null&&r.first!==null&&ff(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=i.b=null}function Hp(i,e){for(;i!==null;){var t=i===e?null:ps(i);i.remove(),i=t}}function ff(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function wr(i,e,t=!0){var n=[];i.f|=Vl,hf(i,n,!0);var r=()=>{t&&On(i),e&&e()},a=n.length;if(a>0){var l=()=>--a||r();for(var s of n)s.out(l)}else r()}function hf(i,e,t){if((i.f&Dn)===0){i.f^=Dn;var n=i.nodes&&i.nodes.t;if(n!==null)for(const s of n)(s.is_global||t)&&e.push(s);for(var r=i.first;r!==null;){var a=r.next;if((r.f&dr)===0){var l=(r.f&pa)!==0||(r.f&vi)!==0&&(i.f&di)!==0;hf(r,e,l?t:!1)}r=a}}}function ro(i){i.f&=~Vl,pf(i,!0)}function pf(i,e){if((i.f&Vl)===0&&(i.f&Dn)!==0){i.f^=Dn,(i.f&mn)===0&&(an(i,Yt),fr.ensure().schedule(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&pa)!==0||(t.f&vi)!==0;pf(t,r?e:!1),t=n}var a=i.nodes&&i.nodes.t;if(a!==null)for(const l of a)(l.is_global||e)&&l.in()}}function $l(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var r=t===n?null:ps(t);e.append(t),t=r}}let Ki=!1;function Pc(i){Ki=i}let Ot=null,hi=!1;function ai(i){Ot=i}let Ft=null;function Ai(i){Ft=i}let Ti=null;function mf(i){Ot!==null&&((Ot.f&to)!==0||(Ot.f&Rn)!==0)&&(Ti??=new Set).add(i)}let Nn=null,Wn=0,Qn=null;function Vp(i){Qn=i}let vf=1,Sr=0,Tr=Sr;function Lc(i){Tr=i}function gf(){return++vf}function ms(i){var e=i.f;if((e&Yt)!==0)return!0;if((e&Xn)!==0){for(var t=i.deps,n=t.length,r=0;r<n;r++){var a=t[r];if(ms(a)&&Zd(a),a.wv>i.wv)return!0}(e&pi)!==0&&fi===null&&an(i,mn)}return!1}function _f(i,e,t=!0){var n=i.reactions;if(n!==null&&!(Ti!==null&&Ti.has(i)))for(var r=0;r<n.length;r++){var a=n[r];(a.f&Rn)!==0?_f(a,e,!1):e===a&&(t?an(a,Yt):(a.f&mn)!==0&&an(a,Xn),Yl(a))}}function xf(i){var e=Nn,t=Wn,n=Qn,r=Ot,a=Ti,l=Sn,s=hi,c=Tr,u=i.f;Nn=null,Wn=0,Qn=null,Ot=(u&(vi|dr))===0?i:null,Ti=null,ma(i.ctx),hi=!1,Tr=++Sr,i.ac!==null&&(Aa(()=>{i.ac.abort(hs)}),i.ac=null);try{i.f|=to;var d=i.fn,h=d();i.f|=wa;var f=Ic(i);if(Wd()&&Qn!==null&&!hi&&f!==null&&(i.f&(Rn|Xn|Yt))===0)for(var v=0;v<Qn.length;v++)_f(Qn[v],i);if(r!==null&&r!==i){if(Sr++,r.deps!==null)for(let b=0;b<t;b+=1)r.deps[b].rv=Sr;if(e!==null)for(const b of e)b.rv=Sr;Qn!==null&&(n===null?n=Qn:n.push(...Qn))}return(i.f&or)!==0&&(i.f^=or),h}catch(b){return Ic(i),Op(b)}finally{i.f^=to,Nn=e,Wn=t,Qn=n,Ot=r,Ti=a,ma(l),hi=s,Tr=c}}function Ic(i){var e=i.deps,t=Et?.is_fork;if(Nn!==null){var n;if(t||rs(i,Wn),e!==null&&Wn>0)for(e.length=Wn+Nn.length,n=0;n<Nn.length;n++)e[Wn+n]=Nn[n];else i.deps=e=Nn;if(Kl()&&(i.f&pi)!==0)for(n=Wn;n<e.length;n++)(e[n].reactions??=[]).push(i)}else!t&&e!==null&&Wn<e.length&&(rs(i,Wn),e.length=Wn);return e}function Wp(i,e){let t=e.reactions;if(t!==null){var n=Nh.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}if(t===null&&(e.f&Rn)!==0&&(Nn===null||!es.call(Nn,e))){var a=e;(a.f&pi)!==0&&(a.f^=pi),a.v!==pn&&jl(a),a.ac!==null&&Aa(()=>{a.ac.abort(hs),a.ac=null,an(a,Yt)}),Ap(a),rs(a,0)}}function rs(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)Wp(i,t[n])}function ga(i){var e=i.f;if((e&yn)===0){an(i,mn);var t=Ft;Ft=i;try{(e&(di|Od))!==0?Gp(i):Ql(i),df(i);var n=xf(i);i.teardown=typeof n=="function"?n:null,i.wv=vf;var r;Ld&&_p&&(i.f&Yt)!==0&&i.deps}finally{Ft=t}}}async function jp(){await Promise.resolve(),Cp()}function o(i){var e=i.f,t=(e&Rn)!==0;if(Ot!==null&&!hi){var n=Ft!==null&&(Ft.f&yn)!==0;if(!n&&(Ti===null||!Ti.has(i))){var r=Ot.deps;if((Ot.f&to)!==0)i.rv<Sr&&(i.rv=Sr,Nn===null&&r!==null&&r[Wn]===i?Wn++:Nn===null?Nn=[i]:Nn.push(i));else{Ot.deps??=[],es.call(Ot.deps,i)||Ot.deps.push(i);var a=i.reactions;a===null?i.reactions=[Ot]:es.call(a,Ot)||a.push(Ot)}}}if(Ki&&wi.has(i))return wi.get(i);if(t){var l=i;if(Ki){var s=l.v;return((l.f&mn)===0&&l.reactions!==null||yf(l))&&(s=Xl(l)),wi.set(l,s),s}var c=(l.f&pi)===0&&!hi&&Ot!==null&&(Ot.f&pi)!==0,u=(l.f&wa)===0;ms(l)&&(c&&(l.f|=pi),Zd(l)),c&&!u&&(Jd(l),bf(l))}if(fi?.has(i))return fi.get(i);if((i.f&or)!==0)throw i.v;return i.v}function bf(i){if(i.f|=pi,i.deps!==null)for(const t of i.deps){var e=t.reactions;e===null?t.reactions=[i]:es.call(e,i)||e.push(i),(t.f&Rn)!==0&&(t.f&pi)===0&&(Jd(t),bf(t))}}function yf(i){if(i.v===pn)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(wi.has(e)||(e.f&Rn)!==0&&yf(e))return!0;return!1}function Ra(i){var e=hi;try{return hi=!0,i()}finally{hi=e}}const Xp=["touchstart","touchmove"];function qp(i){return Xp.includes(i)}const Wa=Symbol("events"),Sf=new Set,yl=new Set;function Yp(i,e,t,n={}){function r(a){if(n.capture||Sl.call(e,a),!a.cancelBubble)return Aa(()=>t?.call(this,a))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?(r.__removed=!1,Mi(()=>{r.__removed||e.addEventListener(i,r,n)})):e.addEventListener(i,r,n),r}function kn(i,e,t,n,r){var a={capture:n,passive:r},l=Yp(i,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Zl(()=>{l.__removed=!0,e.removeEventListener(i,l,a)})}function ae(i,e,t){(e[Wa]??={})[i]=t}function dn(i){for(var e=0;e<i.length;e++)Sf.add(i[e]);for(var t of yl)t(i)}let Ro=null,Co=!1;function Sl(i){var e=this,t=e.ownerDocument,n=i.type,r=i.composedPath?.()||[],a=r[0]||i.target;Ro=i,Co||(Co=!0,setTimeout(()=>{Co=!1,Ro=null}));var l=0,s=Ro===i&&i[Wa];if(s){var c=r.indexOf(s);if(c!==-1&&(e===document||e===window)){i[Wa]=e;return}var u=r.indexOf(e);if(u===-1)return;c<=u&&(l=c)}if(a=r[l]||i.target,a!==e){Id(i,"currentTarget",{configurable:!0,get(){return a||t}});var d=Ot,h=Ft;ai(null),Ai(null);try{for(var f,v=[];a!==null&&a!==e;){try{var b=a[Wa]?.[n];b!=null&&(!a.disabled||i.target===a)&&b.call(a,i)}catch(S){f?v.push(S):f=S}if(i.cancelBubble)break;l++,a=l<r.length?r[l]:null}if(f){for(let S of v)queueMicrotask(()=>{throw S});throw f}}finally{i[Wa]=e,delete i.currentTarget,ai(d),Ai(h)}}}const Kp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function Zp(i){return Kp?.createHTML(i)??i}function Jp(i){var e=Np("template");return e.innerHTML=Zp(i.replaceAll("<!>","<!---->")),e.content}function ao(i,e){var t=Ft;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function j(i,e){var t=(e&ep)!==0,n=(e&tp)!==0,r,a=!i.startsWith("<!>");return()=>{r===void 0&&(r=Jp(a?i:"<!>"+i),t||(r=is(r)));var l=n||af?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=is(l),c=l.lastChild;ao(s,c)}else ao(l,l);return l}}function Hi(i=""){{var e=Xi(i+"");return ao(e,e),e}}function as(){var i=document.createDocumentFragment(),e=document.createComment(""),t=Xi();return i.append(e,t),ao(e,t),i}function k(i,e){i!==null&&i.before(e)}function Qp(i){let e=0,t=Lr(0),n;return()=>{Kl()&&(o(t),Jl(()=>(e===0&&(n=Ra(()=>i(()=>Ja(t)))),e+=1,()=>{Mi(()=>{e-=1,e===0&&(n?.(),n=void 0,Ja(t))})})))}}var $p=pa|Ta;function em(i,e,t,n){new tm(i,e,t,n)}class tm{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#u=null;#m=Qp(()=>(this.#u=Lr(this.#h),()=>{this.#u=null}));constructor(e,t,n,r){this.#t=e,this.#e=t,this.#s=a=>{var l=Ft;l.b=this,l.f|=ml,n(a)},this.parent=Ft.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=mo(()=>{this.#b()},$p)}#x(){try{this.#i=$n(()=>this.#s(this.#t))}catch(e){this.error(e)}}#S(e){const t=this.#e.failed,{reset:n,invoke_onerror:r}=this.#_(e);Mi(r),t&&(this.#r=$n(()=>{t(this.#t,()=>e,()=>n)}))}#_(e){var t=!1,n=!1;const r=()=>{if(!this.#d()){if(t){ap();return}t=!0,n&&gp(),this.#r!==null&&wr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{n=!0,this.#e.onerror?.(e,r),n=!1}catch(l){yi(l,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(yn|ts))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=$n(()=>e(this.#t)),Mi(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),n=Xi(),r=!1;if(t.append(n),this.#i=this.#y(()=>{try{return $n(()=>this.#s(n))}catch(a){try{this.error(a),r=!0}catch(l){yi(l,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(Et);return}this.#c===0&&(this.#t.before(t),this.#o=null,wr(this.#a,()=>{this.#a=null}),this.#f(Et))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=$n(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();$l(this.#i,e);const t=this.#e.pending;this.#a=$n(()=>t(this.#t))}else this.#f(Et)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){Xd(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=Ft,n=Ot,r=Sn;Ai(this.#n),ai(this.#n),ma(this.#n.ctx);try{return fr.ensure(),e()}finally{Ai(t),ai(n),ma(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&wr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Mi(()=>{this.#p=!1,this.#u&&va(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),o(this.#u)}error(e){if(e===zd||!this.#e.onerror&&!this.#e.failed)throw e;Et?.is_fork?(this.#i&&Et.skip_effect(this.#i),this.#a&&Et.skip_effect(this.#a),this.#r&&Et.skip_effect(this.#r),Et.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(On(this.#i),this.#i=null),this.#a&&(On(this.#a),this.#a=null),this.#r&&(On(this.#r),this.#r=null);let t=this.#e.failed;const n=r=>{if(this.#d())return;const{reset:a,invoke_onerror:l}=this.#_(r);l(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return $n(()=>{var s=Ft;s.b=this,s.f|=ml,t(this.#t,()=>r,()=>a)})}catch(s){return yi(s,this.#n.parent),null}}))};Mi(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){yi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(n,a=>yi(a,this.#n&&this.#n.parent)):n(r)}})}}function $(i,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(i[_l]??=i.nodeValue)&&(i[_l]=t,i.nodeValue=`${t}`)}function nm(i,e){return im(i,e)}const _s=new Map;function im(i,{target:e,anchor:t,props:n={},events:r,context:a,intro:l=!0,transformError:s}){Dp();var c=void 0,u=Bp(()=>{var d=t??e.appendChild(Xi());em(d,{pending:()=>{}},v=>{Qt({});var b=Sn;a&&(b.c=a),r&&(n.$$events=r),c=i(v,n)||Wl(),$t()},s);var h=new Set,f=v=>{for(var b=0;b<v.length;b++){var S=v[b];if(!h.has(S)){h.add(S);var m=qp(S);for(const x of[e,document]){var p=_s.get(x);p===void 0&&(p=new Map,_s.set(x,p));var E=p.get(S);E===void 0?(x.addEventListener(S,Sl,{passive:m}),p.set(S,1)):p.set(S,E+1)}}}};return f(ho(Sf)),yl.add(f),()=>{for(var v of h)for(const m of[e,document]){var b=_s.get(m),S=b.get(v);--S==0?(m.removeEventListener(v,Sl),b.delete(v),b.size===0&&_s.delete(m)):b.set(v,S)}yl.delete(f),d!==t&&d.parentNode?.removeChild(d)}});return rm.set(c,u),c}let rm=new WeakMap;class Mf{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),n=this.#l.get(t);if(n)ro(n),this.#s.delete(t);else{var r=this.#e.get(t);r&&(ro(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[a,l]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(l);s&&(On(s.effect),this.#e.delete(l))}for(const[a,l]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var u=document.createDocumentFragment();$l(l,u),u.append(Xi()),this.#e.set(a,{effect:l,fragment:u})}else On(l);this.#s.delete(a),this.#l.delete(a)};this.#n||!n?(this.#s.add(a),wr(l,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[n,r]of this.#e)t.includes(n)||(On(r.effect),this.#e.delete(n))};ensure(e,t){var n=Et,r=lf();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),l=Xi();a.append(l),this.#e.set(e,{effect:$n(()=>t(l)),fragment:a})}else this.#l.set(e,$n(()=>t(this.anchor)));if(this.#t.set(n,e),r){for(const[s,c]of this.#l)s===e?n.unskip_effect(c):n.skip_effect(c);for(const[s,c]of this.#e)s===e?n.unskip_effect(c.effect):n.skip_effect(c.effect);n.oncommit(this.#i),n.ondiscard(this.#a)}else this.#i(n)}}function Le(i,e,t=!1){var n=new Mf(i),r=t?pa:0;function a(l,s){n.ensure(l,s)}mo(()=>{var l=!1;e((s,c=0)=>{l=!0,a(c,s)}),l||a(-1,null)},r)}const am=Symbol("NaN");function Ef(i,e,t){var n=new Mf(i);mo(()=>{var r=e();r!==r&&(r=am),n.ensure(r,t)})}function Ml(i,e){return e}function sm(i,e,t){for(var n=[],r=e.length,a,l=e.length,s=0;s<r;s++){let h=e[s];wr(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=i.outrogroups;El(i,ho(a.done)),f.delete(a),f.size===0&&(i.outrogroups=null)}}else l-=1},!1)}if(l===0){var c=n.length===0&&t!==null&&i.pending.size===0;if(c){var u=t,d=u.parentNode;Up(d),d.append(u),i.items.clear()}El(i,e,!c)}else a={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(a)}function El(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const l of i.pending.values())for(const s of l)n.add(i.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(n?.has(a)){a.f|=Si;const l=document.createDocumentFragment();$l(a,l)}else On(e[r],t)}}var Dc;function Ct(i,e,t,n,r,a=null){var l=i,s=new Map,c=(e&Bd)!==0;if(c){var u=i;l=u.appendChild(Xi())}var d=null,h=Kd(()=>{var E=t();return fo(E)?E:E==null?[]:ho(E)}),f=new Map,v=!0;function b(E){if((p.effect.f&yn)===0){p.pending.delete(E);var x=o(h);p.fallback=d,om(p,x,l,e,n),d!==null&&(x.length===0?(d.f&Si)===0?ro(d):(d.f^=Si,ja(d,null,l)):wr(d,()=>{d=null}))}}function S(E){p.pending.delete(E)}var m=mo(()=>{for(var E=o(h),x=E.length,w=new Set,A=Et,D=lf(),P=0;P<x;P+=1){var X=E[P],_=n(X,P),M=v?null:s.get(_);M?(M.v&&va(M.v,X),M.i&&va(M.i,P),D&&A.unskip_effect(M.e)):(M=lm(s,v?l:Dc??=Xi(),X,_,P,r,e,t),v||(M.e.f|=Si),s.set(_,M)),w.add(_)}if(x===0&&a&&!d&&(v?d=$n(()=>a(l)):(d=$n(()=>a(Dc??=Xi())),d.f|=Si)),x>w.size&&lp(),!v)if(f.set(A,w),D){for(const[ie,B]of s)w.has(ie)||A.skip_effect(B.e);A.oncommit(b),A.ondiscard(S)}else b(A);o(h)}),p={effect:m,items:s,pending:f,outrogroups:null,fallback:d};v=!1}function Ua(i){for(;i!==null&&(i.f&vi)===0;)i=i.next;return i}function om(i,e,t,n,r){var a=(n&Yh)!==0,l=e.length,s=i.items,c=Ua(i.effect.first),u,d=null,h,f=[],v=[],b,S,m,p;if(a)for(p=0;p<l;p+=1)b=e[p],S=r(b,p),m=s.get(S).e,(m.f&Si)===0&&(m.nodes?.a?.measure(),(h??=new Set).add(m));for(p=0;p<l;p+=1){if(b=e[p],S=r(b,p),m=s.get(S).e,i.outrogroups!==null)for(const M of i.outrogroups)M.pending.delete(m),M.done.delete(m);if((m.f&Dn)!==0&&(ro(m),a&&(m.nodes?.a?.unfix(),(h??=new Set).delete(m))),(m.f&Si)!==0)if(m.f^=Si,m===c)ja(m,null,t);else{var E=d?d.next:c;m===i.effect.last&&(i.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),er(i,d,m),er(i,m,E),ja(m,E,t),d=m,f=[],v=[],c=Ua(d.next);continue}if(m!==c){if(u!==void 0&&u.has(m)){if(f.length<v.length){var x=v[0],w;d=x.prev;var A=f[0],D=f[f.length-1];for(w=0;w<f.length;w+=1)ja(f[w],x,t);for(w=0;w<v.length;w+=1)u.delete(v[w]);er(i,A.prev,D.next),er(i,d,A),er(i,D,x),c=x,d=D,p-=1,f=[],v=[]}else u.delete(m),ja(m,c,t),er(i,m.prev,m.next),er(i,m,d===null?i.effect.first:d.next),er(i,d,m),d=m;continue}for(f=[],v=[];c!==null&&c!==m;)(u??=new Set).add(c),v.push(c),c=Ua(c.next);if(c===null)continue}(m.f&Si)===0&&f.push(m),d=m,c=Ua(m.next)}if(i.outrogroups!==null){for(const M of i.outrogroups)M.pending.size===0&&(El(i,ho(M.done)),i.outrogroups?.delete(M));i.outrogroups.size===0&&(i.outrogroups=null)}if(c!==null||u!==void 0){var P=[];if(u!==void 0)for(m of u)(m.f&Dn)===0&&P.push(m);for(;c!==null;)(c.f&Dn)===0&&c!==i.fallback&&P.push(c),c=Ua(c.next);var X=P.length;if(X>0){var _=(n&Bd)!==0&&l===0?t:null;if(a){for(p=0;p<X;p+=1)P[p].nodes?.a?.measure();for(p=0;p<X;p+=1)P[p].nodes?.a?.fix()}sm(i,P,_)}}a&&Mi(()=>{if(h!==void 0)for(m of h)m.nodes?.a?.apply()})}function lm(i,e,t,n,r,a,l,s){var c=(l&Xh)!==0?(l&Kh)===0?Lp(t,!1,!1):Lr(t):null,u=(l&qh)!==0?Lr(r):null;return{v:c,i:u,e:$n(()=>(a(e,c??t,u??r,s),()=>{i.delete(n)}))}}function ja(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,a=e&&(e.f&Si)===0?e.nodes.start:t;n!==null;){var l=ps(n);if(a.before(n),n===r)return;n=l}}function er(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const Uc=[...` 	
\r\f \v\uFEFF`];function cm(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var r of Object.keys(t))if(t[r])n=n?n+" "+r:r;else if(n.length)for(var a=r.length,l=0;(l=n.indexOf(r,l))>=0;){var s=l+a;(l===0||Uc.includes(n[l-1]))&&(s===n.length||Uc.includes(n[s]))?n=(l===0?"":n.substring(0,l))+n.substring(s+1):l=s}}return n===""?null:n}function um(i,e){return i==null?null:String(i)}function vt(i,e,t,n,r,a){var l=i[vl];if(l!==t||l===void 0){var s=cm(t,n,a);s==null?i.removeAttribute("class"):i.className=s,i[vl]=t}else if(a&&r!==a)for(var c in a){var u=!!a[c];(r==null||u!==!!r[c])&&i.classList.toggle(c,u)}return a}function Ln(i,e,t,n){var r=i[gl];if(r!==e){var a=um(e);a==null?i.removeAttribute("style"):i.style.cssText=a,i[gl]=e}return n}function dm(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function fm(i,e){var t=i.__defaultValue,n=i.multiple,r=n?t??[]:null;if(!(n&&!fo(r))){i.selectedIndex;for(var a of i.options){var l=ca(a);dm(a,n?r.includes(l):rf(l,t))}}}function wf(i,e,t=!1){if(i.multiple){if(e==null)return;if(!fo(e))return rp();for(var n of i.options)n.selected=e.includes(ca(n));return}for(n of i.options){var r=ca(n);if(rf(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function _a(i){var e=new MutationObserver(t=>{t.every(hm)||("__defaultValue"in i&&fm(i),"__value"in i&&wf(i,i.__value))});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Zl(()=>{e.disconnect()})}function xa(i,e,t=e){var n=new WeakSet,r=!0;qd(i,"change",a=>{var l=a?"[selected]":":checked",s;if(i.multiple)s=[].map.call(i.querySelectorAll(l),ca);else{var c=i.querySelector(l)??i.querySelector("option:not([disabled])");s=c&&ca(c)}t(s),i.__value=s,Et!==null&&n.add(Et)}),uf(()=>{var a=e();if(i===document.activeElement){var l=Et;if(n.has(l))return}if(wf(i,a,r),r&&a===void 0){var s=i.querySelector(":checked");s!==null&&(a=ca(s),t(a))}i.__value=a,r=!1})}function ca(i){return"__value"in i?i.__value:i.value}function hm(i){if(i.target.closest("selectedcontent")!==null)return!0;if(i.type==="childList"){var e=[...i.addedNodes,...i.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const pm=Symbol("is custom element"),mm=Symbol("is html"),vm=jh?"progress":"PROGRESS";function ss(i,e){var t=ec(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==vm)||(i.value=e??"")}function Qa(i,e){var t=ec(i);t.checked!==(t.checked=e??void 0)&&(i.checked=e)}function Ne(i,e,t,n){var r=ec(i),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(i[Wh]=t),t==null?i.removeAttribute(e):typeof t!="string"&&gm(i).has(e)?i[e]=t:i.setAttribute(e,t))}function ec(i){return i[Fd]??={[pm]:i.nodeName.includes("-"),[mm]:i.namespaceURI===np}}var Nc=new Map;function gm(i){var e=i.getAttribute("is")||i.nodeName,t=Nc.get(e);if(t)return t;Nc.set(e,t=new Set);for(var n,r=i,a=Element.prototype;a!==r;){n=Oh(r);for(var l in n)n[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&t.add(l);r=Dd(r)}return t}function Xt(i,e,t=e){var n=new WeakSet;qd(i,"input",async r=>{var a=r?i.defaultValue:i.value;if(a=Po(i)?Lo(a):a,t(a),Et!==null&&n.add(Et),await jp(),a!==(a=e())){var l=i.selectionStart,s=i.selectionEnd,c=i.value.length;if(i.value=a??"",s!==null){var u=i.value.length;l===s&&s===c&&u>c?(i.selectionStart=u,i.selectionEnd=u):(i.selectionStart=l,i.selectionEnd=Math.min(s,u))}}}),Ra(e)==null&&i.value&&(t(Po(i)?Lo(i.value):i.value),Et!==null&&n.add(Et)),Jl(()=>{var r=e();if(i===document.activeElement){var a=Et;if(n.has(a))return}Po(i)&&r===Lo(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function Po(i){var e=i.type;return e==="number"||e==="range"}function Lo(i){return i===""?null:+i}function Io(i,e){return i===e||i?.[Er]===e}function Tf(i=Wl(),e,t,n){var r=Sn.r,a=Ft;return uf(()=>{var l,s;return Jl(()=>{l=s,s=[],Ra(()=>{Io(t(...s),i)||(e(i,...s),l&&Io(t(...l),i)&&e(null,...l))})}),()=>{let c=a;for(;c!==r&&c.parent!==null&&c.parent.f&ts;)c=c.parent;const u=()=>{s&&Io(t(...s),i)&&e(null,...s)},d=c.teardown;c.teardown=()=>{u(),d?.()}}}),i}let xs=!1;function _m(i){var e=xs;try{return xs=!1,[i(),xs]}finally{xs=e}}function $e(i,e,t,n){var r=!0,a=(t&Qh)!==0,l=(t&$h)!==0,s=n,c=!0,u=void 0,d=()=>l&&r?(u??=ns(n),o(u)):(c&&(c=!1,s=l?Ra(n):n),s);let h;if(a){var f=Er in i||Vh in i;h=sa(i,e)?.set??(f&&e in i?w=>i[e]=w:void 0)}var v,b=!1;a?[v,b]=_m(()=>i[e]):v=i[e],v===void 0&&n!==void 0&&(v=d(),h&&(hp(),h(v)));var S;if(S=()=>{var w=i[e];return w===void 0?d():(c=!0,w)},(t&Jh)===0)return S;if(h){var m=i.$$legacy;return(function(w,A){return arguments.length>0?((!A||m||b)&&h(A?S():w),w):S()})}var p=!1,E=((t&Zh)!==0?ns:Kd)(()=>(p=!1,S()));a&&o(E);var x=Ft;return(function(w,A){if(arguments.length>0){const D=A?o(E):a?kt(w):w;return g(E,D),p=!0,s!==void 0&&(s=D),w}return Ki&&p||(x.f&yn)!==0?E.v:o(E)})}function Pi(i){Sn===null&&Vd(),tn(()=>{const e=Ra(i);if(typeof e=="function")return e})}function tc(i){Sn===null&&Vd(),Pi(()=>()=>Ra(i))}const xm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(xm);function bm(i){const e=[];for(const t of String(i??"")){const n=t.codePointAt(0);if(!(n===65039||n===65038)){if(n===8205){e.push("200d");continue}e.push(n.toString(16))}}return e.join("-")}const Af=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310","23f9","2b07","1f50d","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","1f980","2b50","1f9ed","1f5e1","1f52e","1f409","1f47e","2693","1f3b2","1f4a3","1f36a","1f331","1f9bb","1f4da","2696","1f3c6","1f451","1f9ea","1f52d","1f6e9"]),ym=["1f980","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","2b50","1f9ed","1f310","1f409","1f47e","1f4a3","1f36a","1f331","1f9ea","1f52e","1f52d","2693","1f3b2","1f4da","2696","1f3c6","1f451","1f5e1","1f9f1","1f9e9"],Rf=["grass","dirt","stone","diamond","gold","iron","brick","planks","creeper","squarecreeper","enderman","skeleton","steve","herobrine","chicken","fox","bee","meat","enderpearl","netherstar","flame","tnt","gear","magitech","fabricmc","quiltmc","neoforged","modrinth","ftb_logo","prismlauncher"],wl="/";function Sm(i){const e=bm(i);return Af.has(e)?`${wl}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}function vo(i){const e=String(i??"").trim();if(!e)return null;if(e.startsWith("twemoji:")){const t=e.slice(8);return Af.has(t)?`${wl}twemoji/${t}.svg`.replace(/\/{2,}/g,"/"):null}if(e.startsWith("prism:")){const t=e.slice(6);return Rf.includes(t)?`${wl}instance-icons/prism/${t}.svg`.replace(/\/{2,}/g,"/"):null}return null}var Mm=j('<img draggable="false"/>'),Em=j("<span> </span>");function Ei(i,e){Qt(e,!0);let t=$e(e,"emoji",3,""),n=$e(e,"size",3,null),r=$e(e,"alt",3,""),a=$e(e,"class",3,"");const l=st(()=>Sm(t())),s=st(()=>r()||t()),c=st(()=>n()?`${n()}px`:"1em");var u=as(),d=At(u);{var h=v=>{var b=Mm();ge(()=>{Ne(b,"src",o(l)),Ne(b,"alt",o(s)),Ne(b,"title",r()||void 0),vt(b,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),Ln(b,`width: ${o(c)??""}; height: ${o(c)??""};`),Ne(b,"aria-hidden",r()?void 0:"true")}),k(v,b)},f=v=>{var b=Em(),S=J(b,!0);ge(()=>{vt(b,1,`inline-block ${a()??""}`),Ne(b,"aria-hidden",r()?void 0:"true"),Ne(b,"title",r()||void 0),$(S,t())}),k(v,b)};Le(d,v=>{o(l)?v(h):v(f,-1)})}k(i,u),$t()}var wm=j('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Rename</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),Tm=j('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Am(i,e){Qt(e,!0);let t=$e(e,"selected",3,!1),n=$e(e,"gameRunning",3,!1),r=$e(e,"menuOpen",3,!1);const a=st(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function l(){const X=vo(e.instance.icon_key);if(X)return X;const _=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&_?_(e.instance.icon_path):"/logo.png"}var s=Tm(),c=L(s),u=L(c),d=J(u),h=y(u,2),f=L(h),v=J(f,!0),b=y(f,2),S=L(b),m=J(S,!0),p=y(S,2),E=J(p,!0),x=y(h,2),w=y(c,2),A=J(w,!0),D=y(w,2);{var P=X=>{var _=wm(),M=At(_),ie=y(M,2),B=L(ie),O=y(B,2),F=y(O,2),H=y(F,2),me=L(H);Ei(me,{emoji:"📂"});var oe=y(H,2),ne=y(oe,4);ge(()=>B.disabled=n()),ae("click",M,function(...Me){e.onclosemenu?.apply(this,Me)}),ae("click",B,()=>{e.onclosemenu(),e.onplay()}),ae("click",O,()=>{e.onclosemenu(),e.onedit()}),ae("click",F,()=>{e.onclosemenu(),e.onrename?.()}),ae("click",H,()=>{e.onclosemenu(),e.onopenfolder()}),ae("click",oe,function(...Me){e.onviewlogs?.apply(this,Me)}),ae("click",ne,()=>{e.onclosemenu(),e.ondelete()}),k(X,_)};Le(D,X=>{r()&&X(P)})}ge((X,_)=>{vt(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),Ne(s,"aria-selected",t()),Ne(s,"title",e.instance.name),Ne(d,"src",X),$(v,e.instance.name),$(m,e.instance.minecraft_version),vt(p,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${o(a)??""}`),$(E,e.instance.loader_type),$(A,_)},[()=>l(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),ae("click",s,function(...X){e.onselect?.apply(this,X)}),ae("dblclick",s,function(...X){e.onplay?.apply(this,X)}),ae("keydown",s,X=>{(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),e.onplay())}),ae("contextmenu",s,X=>{X.preventDefault(),e.onselect(),e.ontogglemenu()}),kn("error",d,X=>{X.currentTarget.dataset.f||(X.currentTarget.dataset.f="1",X.currentTarget.src="/logo.png")}),ae("click",x,X=>{X.stopPropagation(),e.ontogglemenu()}),k(i,s),$t()}dn(["click","dblclick","keydown","contextmenu"]);var Rm=j('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Cm=j('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Pm=j('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Lm=j('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function Im(i,e){Qt(e,!0);var t=Lm();Ct(t,21,()=>e.instances,n=>n.id,(n,r)=>{{let a=st(()=>e.selectedId===o(r).id),l=st(()=>e.menuFor===o(r).id);Am(n,{get instance(){return o(r)},get selected(){return o(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return o(l)},onselect:()=>e.onselect?.(o(r).id),onplay:()=>e.onplay?.(o(r).id),ontogglemenu:()=>e.ontogglemenu?.(o(r).id),onedit:()=>e.onedit?.(o(r)),onrename:()=>e.onrename?.(o(r)),onopenfolder:()=>e.onopenfolder?.(o(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(o(r).id),get onclosemenu(){return e.onclosemenu}})}},n=>{var r=as(),a=At(r);{var l=d=>{var h=Rm(),f=J(h,!0);ge(()=>$(f,e.error)),k(d,h)},s=d=>{var h=Cm(),f=J(h);ge(v=>$(f,`No instances match "${v??""}".`),[()=>e.query.trim()]),k(d,h)},c=st(()=>e.query.trim()),u=d=>{var h=Pm(),f=y(L(h),6);ae("click",f,()=>e.onadd?.()),k(d,h)};Le(a,d=>{e.error?d(l):o(c)?d(s,1):d(u,-1)})}k(n,r)}),k(i,t),$t()}dn(["click"]);const os=[];function Ca(i){return os.push(i),i}function Pa(i){const e=os.lastIndexOf(i);e!==-1&&os.splice(e,1)}function Oc(){return os[os.length-1]??null}var Dm=j('<button type="button" role="tab"> </button>'),Um=j('<button type="button"><img alt="" class="h-12 w-12 object-contain" draggable="false" loading="lazy"/> <span class="w-full truncate text-center text-[10px] text-(--text-muted)"> </span></button>'),Nm=j('<div class="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2"></div>'),Om=j('<button type="button"><img alt="" class="h-8 w-8" draggable="false" loading="lazy"/></button>'),km=j('<div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2"></div>'),Fm=j('<div class="flex items-center gap-2 rounded border border-(--border) p-2"><img alt="" class="h-10 w-10 object-contain" draggable="false"/> <span class="truncate text-[11px] text-(--text-muted)"> </span></div>'),Bm=j('<p role="alert" class="text-[11px] text-red-400"> </p>'),zm=j(`<div class="flex flex-col items-start gap-3"><p class="text-[12px] text-(--text-muted)">Pick a PNG, JPG, SVG, WEBP or ICO from disk. The file is copied into the instance
            directory, so the instance stays self-contained.</p> <!> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-xs font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-50"> </button> <!></div>`),Gm=j('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Choose an instance icon"><div class="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-xl"><header class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h2 class="text-sm font-semibold">Instance icon</h2> <button type="button" class="rounded px-2 py-1 text-xs text-(--text-muted) hover:bg-(--bg-subtle)" aria-label="Close icon picker">Close</button></header> <div class="flex gap-1 border-b border-(--border) px-3 py-2" role="tablist" aria-label="Icon sources"></div> <div class="min-h-0 flex-1 overflow-y-auto p-4"><!></div></div></div>');function Cf(i,e){Qt(e,!0);let t=$e(e,"currentKey",3,""),n=$e(e,"currentPath",3,"");const r=[{id:"prism",label:"Prism / Freesm"},{id:"twemoji",label:"Twemoji"},{id:"custom",label:"Custom image…"}];let a=se("prism"),l=se(!1),s=se("");const c="/",u=_=>`${c}${_}`.replace(/\/{2,}/g,"/"),d=_=>u(`instance-icons/prism/${_}.svg`),h=_=>u(`twemoji/${_}.svg`),f=_=>_.replace(/_/g," ").replace(/\b\w/g,M=>M.toUpperCase()).replace(/^(Fabricmc|Quiltmc|Neoforged|Ftb)\b/,M=>({Fabricmc:"Fabric",Quiltmc:"Quilt",Neoforged:"NeoForge",Ftb:"FTB"})[M]??M);Pi(()=>{const _=Ca(()=>e.onclose?.());return()=>Pa(_)});function v(_){e.onpick?.(_),e.onclose?.()}async function b(){if(!o(l)){g(l,!0),g(s,"");try{const _=await e.oncustom?.();if(_==null)return;e.onclose?.()}catch(_){g(s,String(_),!0)}finally{g(l,!1)}}}var S=Gm(),m=L(S),p=L(m),E=y(L(p),2),x=y(p,2);Ct(x,21,()=>r,_=>_.id,(_,M)=>{var ie=Dm(),B=J(ie,!0);ge(()=>{Ne(ie,"aria-selected",o(a)===o(M).id),vt(ie,1,`rounded px-2.5 py-1 text-xs font-medium transition-colors ${o(a)===o(M).id?"bg-(--accent)/15 text-(--accent)":"text-(--text-muted) hover:bg-(--bg-subtle)"}`),$(B,o(M).label)}),ae("click",ie,()=>g(a,o(M).id,!0)),k(_,ie)});var w=y(x,2),A=L(w);{var D=_=>{var M=Nm();Ct(M,20,()=>Rf,ie=>ie,(ie,B)=>{var O=Um(),F=L(O),H=y(F,2),me=J(H,!0);ge((oe,ne,Me)=>{vt(O,1,`group flex flex-col items-center gap-1 rounded border p-2 transition-colors ${t()===`prism:${B}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),Ne(O,"title",oe),Ne(F,"src",ne),$(me,Me)},[()=>f(B),()=>d(B),()=>f(B)]),ae("click",O,()=>v(`prism:${B}`)),k(ie,O)}),k(_,M)},P=_=>{var M=km();Ct(M,20,()=>ym,ie=>ie,(ie,B)=>{var O=Om(),F=J(O);ge(H=>{vt(O,1,`flex items-center justify-center rounded border p-2 transition-colors ${t()===`twemoji:${B}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),Ne(O,"title",B),Ne(O,"aria-label",`Twemoji ${B}`),Ne(F,"src",H)},[()=>h(B)]),ae("click",O,()=>v(`twemoji:${B}`)),k(ie,O)}),k(_,M)},X=_=>{var M=zm(),ie=y(L(M),2);{var B=oe=>{var ne=Fm(),Me=L(ne),Q=y(Me,2),V=J(Q,!0);ge(()=>{Ne(Me,"src",n()),$(V,n())}),k(oe,ne)};Le(ie,oe=>{n()&&oe(B)})}var O=y(ie,2),F=J(O,!0),H=y(O,2);{var me=oe=>{var ne=Bm(),Me=J(ne,!0);ge(()=>$(Me,o(s))),k(oe,ne)};Le(H,oe=>{o(s)&&oe(me)})}ge(()=>{O.disabled=o(l),$(F,o(l)?"Copying…":"Choose file…")}),ae("click",O,b),k(_,M)};Le(A,_=>{o(a)==="prism"?_(D):o(a)==="twemoji"?_(P,1):_(X,-1)})}ae("click",E,function(..._){e.onclose?.apply(this,_)}),k(i,S),$t()}dn(["click"]);const ls="twilight_user_accent",nc="twilight_custom_themes",kc="#06B6D4",Fc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],Bc="#0F172A",Hm="#FFFFFF",Vm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function bs(i){return Vm[i]??[]}function vs(i){let e=i.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function zc(i){const e=t=>{const n=parseInt(i.replace("#","").substring(t,t+2),16)/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function Wm(i){const e=zc(i),t=1.05/(e+.05);return(e+.05)/(zc(Bc)+.05)>=t?Bc:Hm}function cs(i,{persist:e=!0}={}){const t=vs(i);if(!t)return!1;const n=document.documentElement;return n.style.setProperty("--user-accent",t),n.style.setProperty("--on-accent",Wm(t)),e&&localStorage.setItem(ls,t),!0}function jm(){localStorage.removeItem(ls);const i=document.documentElement;i.style.removeProperty("--user-accent"),i.style.removeProperty("--on-accent")}function Tl(){return vs(localStorage.getItem(ls)??"")}function Xm(){const i=Tl();i&&cs(i)}const go=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:Fc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...Fc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:bs("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:bs("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:bs("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:bs("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],ic="twilight-dark",Al={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},qm=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function Ym(i){let e="";for(const t of i){const n=t.codePointAt(0);n>=65&&n<=90?e+=String.fromCharCode(n+32):n>=97&&n<=122||n>=48&&n<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function Pf(i){const e=i&&typeof i=="object"?i:{},t={};for(const[n,r]of Object.entries(Al))t[n]=vs(e[n]??"")??r;return t}function Km(i){return typeof i=="string"&&i.startsWith("custom:")}function Lf(i){return Mr().find(e=>e.id===i)??null}function Mr(){try{const i=JSON.parse(localStorage.getItem(nc)??"[]");return Array.isArray(i)?i.filter(e=>e&&typeof e=="object"&&Km(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:Pf(e.tokens)})):[]}catch{return[]}}function Gc({name:i,dark:e,tokens:t}){const n=String(i??"").trim()||"Custom theme",r={id:`custom:${Ym(n)||"theme"}`,name:n,dark:!!e,tokens:Pf(t)},a=[...Mr().filter(l=>l.id!==r.id),r];return localStorage.setItem(nc,JSON.stringify(a)),r}function Zm(i){const e=Mr().filter(t=>t.id!==i);return localStorage.setItem(nc,JSON.stringify(e)),e}function Hc(){try{const i=getComputedStyle(document.documentElement),e=(n,r)=>{const a=i.getPropertyValue(n).trim();return vs(a)??r},t={};for(const[n,r]of Object.entries(Al)){const a=`--${n.replace(/(\d)$/,"-$1")}`;t[n]=e(a,r)}return t}catch{return{...Al}}}const Jm=new Set(go.map(i=>i.id));function rc(i){const e=(i??"").trim();return e==="dark"?ic:e==="light"?"twilight-light":Jm.has(e)||Lf(e)?e:null}function Qm(i){const e=i.tokens;return{id:i.id,label:i.name,dark:i.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:i.name,hex:e.accent1}],tokens:e}}function ua(i){const e=rc(i);return e?go.find(t=>t.id===e)??Qm(Lf(e)):null}function Xa(i){return ua(i)?.dark??!0}const $m=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Do="";function ev(i){const e=ua(i)??ua(ic);if(!e||e.id===Do)return e;const t=Do==="";Do=e.id;const n=document.documentElement;for(const r of $m)n.style.removeProperty(r);n.classList.toggle("dark",e.dark),n.classList.toggle("light",!e.dark);for(const r of go)r.cls&&n.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;n.style.setProperty("--bg-1",r.bg1),n.style.setProperty("--bg-2",r.bg2),n.style.setProperty("--bg-3",r.bg3),n.style.setProperty("--border-1",r.border1),n.style.setProperty("--fg-1",r.fg1),n.style.setProperty("--fg-2",r.fg2),n.style.setProperty("--accent-1",r.accent1),n.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(ls),cs(r.accent1,{persist:!1})}else t||(localStorage.removeItem(ls),cs(e.accent,{persist:!1}));return e}const tv="/".replace(/\/{2,}/g,"/"),If=[{id:"fluent-auto",label:"Fluent (Auto)",hint:"Freesm Fluent · follows the theme"},{id:"fluent",label:"Fluent Light",hint:"Freesm Fluent · light ink"},{id:"fluent_dark",label:"Fluent Dark",hint:"Freesm Fluent · white ink"},{id:"breeze_dark",label:"Breeze Dark",hint:"Prism · KDE Breeze dark"},{id:"breeze_light",label:"Breeze Light",hint:"Prism · KDE Breeze light"},{id:"pe_colored",label:"Prism PE Colored",hint:"Prism · full-color PE"},{id:"twemoji",label:"Twemoji",hint:"Emoji glyphs · the classic look"}],Df=new Set(If.map(i=>i.id)),Uf="twilight-icon-pack",nv={instances:"viewfolder",folder:"viewfolder",server:"server",settings:"settings",accounts:"accounts",new:"new",launch:"launch",edit:"instance-settings",copy:"copy",export:"export",delete:"delete",shortcut:"shortcut",mods:"centralmods",refresh:"refresh",console:"log",tag:"tag",star:"star",help:"help",about:"about",screenshots:"screenshots",worlds:"worlds"},Vc={kill:"⏹",download:"⬇",search:"🔍",sun:"☀",moon:"🌙",package:"📦",modrinth:"🧩",success:"✅",warning:"⚠",error:"⛔",instances:"📁",folder:"📁",server:"🌐",settings:"⚙",accounts:"👤",new:"➕",launch:"▶",edit:"✏",copy:"⧉",export:"⤓",delete:"🗑",shortcut:"🔗",mods:"📦",refresh:"🔄",console:"📜",tag:"🏷",star:"★",help:"❔",about:"ℹ",screenshots:"🖼",worlds:"🌐"};let qa=null;function so(){if(qa)return qa;const i=localStorage.getItem(Uf);return qa=Df.has(i??"")?i:"fluent-auto",qa}function iv(i){Df.has(i)&&(qa=i,localStorage.setItem(Uf,i),Nf())}let Rl="";function rv(i){const e=rc(i)??String(i??"");e!==Rl&&(Rl=e,Nf())}function av(i=so()){return i!=="fluent-auto"?i:Xa(Rl||"twilight-dark")?"fluent_dark":"fluent"}const Cl=new Set;function Nf(){for(const i of Cl)i()}function sv(i){return Cl.add(i),()=>Cl.delete(i)}function ov(i,e=null){const t=e??so(),n=i;if(t==="twemoji"){const l=Vc[i];return l?{kind:"emoji",emoji:l,label:n}:null}const r=nv[i];if(r)return{kind:"svg",src:`${tv}icons/${av(t)}/${r}.svg`,label:n};const a=Vc[i];return a?{kind:"emoji",emoji:a,label:n}:null}var lv=j('<img draggable="false"/>'),cv=j("<span></span>");function jt(i,e){Qt(e,!0);let t=$e(e,"name",3,""),n=$e(e,"pack",3,null),r=$e(e,"size",3,null),a=$e(e,"alt",3,""),l=$e(e,"class",3,""),s=se(0);const c=sv(()=>g(s,o(s)+1));tc(c);const u=st(()=>(o(s),ov(t(),n()))),d=st(()=>r()?`${r()}px`:"1em"),h=st(()=>a()||t());let f=se(!1);tn(()=>{o(u)?.kind,g(f,!1)});var v=as(),b=At(v);{var S=E=>{var x=as(),w=At(x);Ef(w,()=>o(u).src,A=>{var D=lv();ge(()=>{Ne(D,"src",o(u).src),Ne(D,"alt",o(h)),Ne(D,"title",a()||void 0),vt(D,1,`shrink-0 select-none ${l()??""}`),Ln(D,`width:${o(d)??""};height:${o(d)??""};object-fit:contain`),Ne(D,"aria-hidden",a()?void 0:"true")}),kn("error",D,()=>g(f,!0)),k(A,D)}),k(E,x)},m=E=>{{let x=st(()=>a()||void 0);Ei(E,{get emoji(){return o(u).emoji},get size(){return r()},get alt(){return o(x)},get class(){return l()}})}},p=E=>{var x=cv();ge(()=>{vt(x,1,`inline-block shrink-0 ${l()??""}`),Ln(x,`width:${o(d)??""};height:${o(d)??""}`)}),k(E,x)};Le(b,E=>{o(u)?.kind==="svg"&&!o(f)?E(S):o(u)?.kind==="emoji"?E(m,1):E(p,-1)})}k(i,v),$t()}const ri=kt({dialog:null,toasts:[]});function uv(i){return new Promise(e=>{ri.dialog={...i,resolve:e}})}function ys(i){const e=ri.dialog;ri.dialog=null,e?.resolve?.(i)}function dv(i={}){return uv({variant:"prompt",...i})}let fv=0;function xi(i,e="info",{title:t="",duration:n=4500}={}){const r=++fv;return ri.toasts.push({id:r,message:i,kind:e,title:t,duration:n}),ri.toasts.length>6&&ri.toasts.shift(),r}function Wc(i){const e=ri.toasts.findIndex(t=>t.id===i);e!==-1&&ri.toasts.splice(e,1)}var hv=j('<div class="p-6 text-center text-(--step-body) text-(--fg-2)">Resolving mods and their dependencies…</div>'),pv=j('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div></div>'),mv=j('<tr><td class="px-3 py-2 align-top"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent-1)"/></td><td> </td><td class="px-3 py-2 align-top text-(--fg-2)"> </td><td class="px-3 py-2 align-top font-mono text-[11px] text-(--fg-2)"> </td><td> </td><td class="px-3 py-2 text-right align-top text-(--fg-2)"> </td></tr>'),vv=j('<tr><td colspan="6" class="px-3 py-6 text-center text-(--fg-2)">The queue is empty.</td></tr>'),gv=j('<table class="w-full text-left text-(--step-body)"><thead class="sticky top-0 z-10 bg-(--bg-3)"><tr class="border-b border-(--border-1) text-(--step-caption) uppercase tracking-wide text-(--fg-2)"><th class="w-[36px] px-3 py-2 font-medium"></th><th class="px-3 py-2 font-medium">Mod</th><th class="w-[130px] px-3 py-2 font-medium">Version</th><th class="w-[220px] px-3 py-2 font-medium">File</th><th class="w-[190px] px-3 py-2 font-medium">Source</th><th class="w-[80px] px-3 py-2 text-right font-medium">Size</th></tr></thead><tbody></tbody></table>'),_v=j('<span class="text-rose-400"> </span>'),xv=j(`<div role="presentation" class="fixed inset-0 z-[60] flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[560px] w-[880px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Confirm download</h3> <p class="text-(--step-meta) text-(--fg-2)">You're about to download the following mods — only rows with a check will be downloaded.</p></div> <button class="text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="min-w-0 truncate text-(--step-meta) text-(--fg-2)"><!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Back</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Downloads every checked file (SHA-1 verified) into this instance's mods folder"> </button></div></div></div></div>`);function bv(i,e){Qt(e,!0);let t=$e(e,"items",19,()=>[]);const n=["fabric","quilt","forge","neoforge"],r=st(()=>{const Q=e.instance.loader_type.toLowerCase();return n.includes(Q)?Q:""});let a=se(null),l=se(!0),s=se(""),c=se(kt({})),u=se(!1),d=se("");function h(Q){return Q>=1024*1024?`${(Q/1024/1024).toFixed(1)} MB`:Q>=1024?`${(Q/1024).toFixed(1)} KB`:`${Q} B`}function f(Q){return Q.required_by.length?`required by ${Q.required_by.join(", ")}`:Q.installed?"already installed":"your selection"}function v(){return o(a)?.filter(Q=>o(c)[Q.project_id]).length??0}function b(Q){g(c,{...o(c),[Q.project_id]:!o(c)[Q.project_id]},!0)}function S(Q,V){const fe=window.__TAURI__?.core;return fe?fe.invoke(Q,V):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function m(){if(!o(a)||o(u))return;const Q=o(a).filter(V=>o(c)[V.project_id]).map(V=>({url:V.url,filename:V.filename,sha1:V.sha1}));if(Q.length){g(u,!0),g(d,"");try{const V=await S("install_modrinth_batch",{instanceId:e.instance.id,files:Q});xi(`Downloaded ${V.length} mod file${V.length===1?"":"s"}.`,"success"),e.ondownloaded?.(V)}catch(V){g(d,String(V),!0),xi(`Download failed: ${V}`,"error")}finally{g(u,!1)}}}Pi(()=>{const Q=Ca(()=>o(u)?void 0:e.onclose?.());return S("preview_mod_download_queue",{instanceId:e.instance.id,projects:t(),gameVersion:e.instance.minecraft_version,loader:o(r)}).then(V=>{g(a,V,!0),g(c,Object.fromEntries(V.map(fe=>[fe.project_id,!fe.installed])),!0),g(l,!1)}).catch(V=>{g(s,String(V),!0),g(l,!1)}),()=>Pa(Q)});var p=xv(),E=L(p),x=L(E),w=y(L(x),2),A=y(x,2),D=L(A);{var P=Q=>{var V=hv();k(Q,V)},X=Q=>{var V=pv(),fe=L(V),Ae=J(fe,!0);ge(()=>$(Ae,o(s))),k(Q,V)},_=Q=>{var V=gv(),fe=y(L(V));Ct(fe,21,()=>o(a),Ae=>Ae.project_id,(Ae,Se)=>{var Ie=mv(),Ue=L(Ie),Be=L(Ue),ze=y(Ue),et=J(ze,!0),xt=y(ze),Qe=J(xt,!0),te=y(xt),Mt=J(te,!0),Oe=y(te),_e=J(Oe,!0),Ee=y(Oe),Fe=J(Ee,!0);ge((Ge,He)=>{vt(Ie,1,`border-b border-(--border-1)/50 ${o(Se).installed?"bg-(--bg-3)/60":o(Se).required_by.length?"bg-(--brand-tint)/40":""}`),Qa(Be,o(c)[o(Se).project_id]??!1),vt(ze,1,`px-3 py-2 align-top font-medium ${o(Se).installed?"opacity-60":"text-(--fg-1)"}`),$(et,o(Se).title),$(Qe,o(Se).version),Ne(te,"title",o(Se).filename),$(Mt,o(Se).filename),vt(Oe,1,`px-3 py-2 align-top text-[11px] ${o(Se).required_by.length?"text-(--accent-1)":"text-(--fg-2)"}`),$(_e,Ge),$(Fe,He)},[()=>f(o(Se)),()=>h(o(Se).size)]),ae("change",Be,()=>b(o(Se))),k(Ae,Ie)},Ae=>{var Se=vv();k(Ae,Se)}),k(Q,V)};Le(D,Q=>{o(l)?Q(P):o(s)?Q(X,1):o(a)&&Q(_,2)})}var M=y(A,2),ie=L(M),B=L(ie);{var O=Q=>{var V=_v(),fe=J(V,!0);ge(()=>$(fe,o(d))),k(Q,V)},F=Q=>{var V=Hi();ge((fe,Ae)=>$(V,`Downloading ${fe??""} file${Ae??""}…`),[()=>v(),()=>v()===1?"":"s"]),k(Q,V)},H=Q=>{var V=Hi();ge(fe=>$(V,`${fe??""} of ${o(a).length??""} rows will download`),[()=>v()]),k(Q,V)};Le(B,Q=>{o(d)?Q(O):o(u)?Q(F,1):o(a)&&Q(H,2)})}var me=y(ie,2),oe=L(me),ne=y(oe,2),Me=J(ne,!0);ge(Q=>{w.disabled=o(u),Ne(ie,"title",o(d)),oe.disabled=o(u),ne.disabled=Q,$(Me,o(u)?"Downloading…":"Confirm & Download")},[()=>o(u)||!o(a)||v()===0]),ae("click",p,Q=>{Q.target===Q.currentTarget&&!o(u)&&e.onclose?.()}),ae("click",w,()=>e.onclose?.()),ae("click",oe,()=>e.onclose?.()),ae("click",ne,m),k(i,p),$t()}dn(["click","change"]);var yv=j('<label class="flex cursor-pointer items-center gap-2 text-(--step-body) capitalize"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent-1)"/> <span> </span></label>'),jc=j("<option> </option>"),Sv=j('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div>'),Xc=j('<div class="p-6 text-center text-(--step-body) text-(--fg-2)"> </div>'),Mv=j('<span class="shrink-0 rounded bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-green-500">installed</span>'),Ev=j('<span class="shrink-0 rounded bg-(--accent-1)/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-1)">queued</span>'),wv=j('<button><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <span class="min-w-0 flex-1"><span class="flex items-center gap-2"><span class="truncate text-(--step-card) font-medium text-(--fg-1)"> </span> <!> <!></span> <span class="block truncate text-(--step-meta) text-(--fg-2)"> </span> <span class="block truncate text-[10px] text-(--fg-2)"> </span></span></button>'),Tv=j('<div class="flex flex-col gap-1.5"></div>'),Av=j('<div class="flex h-full flex-col items-center justify-center p-6 text-center text-(--step-body) text-(--fg-2)"><!> <p class="mt-3">Select a mod to inspect it.</p></div>'),Rv=j('<div class="mt-1 flex h-8 items-center rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) text-(--fg-2)">Loading versions…</div>'),Cv=j('<select id="mods-version" class="mt-1 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"><option> </option><!></select>'),Pv=j('<div class="mt-1 h-8 rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) leading-8 text-(--fg-2)">Latest compatible</div>'),Lv=j('<p class="mt-2 text-[11px] text-rose-400"> </p>'),Iv=j('<div class="mt-2 text-(--step-meta) whitespace-pre-wrap break-words text-(--fg-2)"> </div>'),Dv=j('<div class="flex items-start gap-3 border-b border-(--border-1) p-3"><img alt="" draggable="false" class="h-12 w-12 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="truncate text-(--step-card) font-semibold text-(--fg-1)"> </div> <div class="truncate text-[10px] text-(--fg-2)"> </div> <div class="text-[10px] text-(--fg-2)"> </div></div></div> <div class="border-b border-(--border-1) p-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-version">Version</label> <!></div> <div class="min-h-0 flex-1 p-3"><div class="text-(--step-body) text-(--fg-2)"> </div> <!> <!></div>',1),Uv=j('<span class="ml-1 text-[10px]"> </span>'),Nv=j('<div role="presentation" class="fixed inset-0 z-50 flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[720px] w-[1180px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Browse &amp; Download Mods</h3> <p class="truncate text-(--step-meta) text-(--fg-2)"> <!></p></div> <button class="text-(--fg-2) hover:text-(--fg-1)">✕</button></div> <div class="flex min-h-0 flex-1"><aside class="flex w-[200px] shrink-0 flex-col gap-4 overflow-y-auto border-r border-(--border-1) p-3"><section><h4 class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)">Categories</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border-1) pt-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-sort">Sort</label> <select id="mods-sort" class="mt-1.5 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"></select></section></aside> <section class="flex min-w-0 flex-1 flex-col"><div class="border-b border-(--border-1) p-3"><input class="h-9 w-full rounded border border-(--border-1) bg-(--bg-3) px-3 text-(--step-card) text-(--fg-1) outline-none placeholder:text-(--fg-2) focus:border-(--accent-1)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></section> <aside class="flex w-[330px] shrink-0 flex-col overflow-y-auto border-l border-(--border-1)"><!></aside></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="text-(--step-body) text-(--fg-2)"> <!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Clear</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Stages every queued mod plus its required dependencies for confirmation"><!> Review and Confirm…</button></div></div></div></div> <!>',1);function Ov(i,e){Qt(e,!0);const t=["fabric","quilt","forge","neoforge","legacy-fabric"],n=st(()=>{const z=e.instance.loader_type.toLowerCase();return z==="legacy fabric"||z==="legacyfabric"?"legacy-fabric":z==="cleanroom"?"forge":t.includes(z)?z:""}),r=["optimization","utility","library","worldgen","accessibility","technology","adventure","decoration","mobs","equipment","food","storage","transportation","game-mechanics"],a=[{id:"relevance",label:"Relevance"},{id:"downloads",label:"Most downloaded"},{id:"updated",label:"Recently updated"},{id:"newest",label:"Newest"}];let l=se(""),s=se("relevance"),c=se(kt(new Set)),u=se(null),d=se(!1),h=se(""),f=0,v=se(kt([]));function b(z){const Y=z.title.toLowerCase().replace(/[^a-z0-9]+/g,"-");return o(v).some(we=>we.includes(Y))}let S=se(null),m=se(null),p=se(!1),E=se(""),x=0,w=se(""),A=se(kt([])),D=se(!1);function P(z){const Y=new Set(o(c));Y.has(z)?Y.delete(z):Y.add(z),g(c,Y,!0)}function X(z){return z>=1e6?`${(z/1e6).toFixed(1)}M`:z>=1e3?`${(z/1e3).toFixed(0)}K`:String(z)}function _(z){return z.icon_url||"/logo.png"}function M(z,Y){const we=window.__TAURI__?.core;return we?we.invoke(z,Y):Promise.reject(new Error("Tauri backend unavailable in this preview."))}tn(()=>{const z=o(l).trim(),Y=[...o(c)],we=o(s),De=++f,N=setTimeout(()=>{g(d,!0),g(h,""),M("search_modrinth_mods",{query:z,gameVersion:e.instance.minecraft_version,loader:o(n),categories:Y,index:we}).then(ye=>{De===f&&(g(u,ye,!0),g(d,!1))}).catch(ye=>{De===f&&(g(h,String(ye),!0),g(d,!1))})},350);return()=>clearTimeout(N)});async function ie(z){if(o(S)?.project_id===z.project_id)return;g(S,z,!0),g(m,null),g(E,""),g(w,"");const Y=++x;g(p,!0);try{const we=await M("get_modrinth_project_details",{projectId:z.project_id,gameVersion:e.instance.minecraft_version,loader:o(n)});Y===x&&g(m,we,!0)}catch(we){Y===x&&g(E,String(we),!0)}finally{Y===x&&g(p,!1)}}function B(z){return o(A).some(Y=>Y.project_id===z)}function O(){o(A).length&&g(D,!0)}Pi(()=>{const z=Ca(()=>e.onclose?.());return M("list_instance_mods",{instanceId:e.instance.id}).then(Y=>g(v,Y.map(we=>we.filename.toLowerCase()),!0)).catch(()=>{}),()=>Pa(z)});var F=Nv(),H=At(F),me=L(H),oe=L(me),ne=L(oe),Me=y(L(ne),2),Q=L(Me),V=y(Q);{var fe=z=>{var Y=Hi();ge(we=>$(Y,`· ${we??""}`),[()=>o(n)[0].toUpperCase()+o(n).slice(1)]),k(z,Y)};Le(V,z=>{o(n)&&z(fe)})}var Ae=y(ne,2),Se=y(oe,2),Ie=L(Se),Ue=L(Ie),Be=y(L(Ue),2);Ct(Be,20,()=>r,z=>z,(z,Y)=>{var we=yv(),De=L(we),N=y(De,2),ye=J(N,!0);ge((ue,Te)=>{Qa(De,ue),$(ye,Te)},[()=>o(c).has(Y),()=>Y.replace("-"," ")]),ae("change",De,()=>P(Y)),k(z,we)});var ze=y(Ue,2),et=y(L(ze),2);Ct(et,21,()=>a,z=>z.id,(z,Y)=>{var we=jc(),De=J(we,!0),N={};ge(()=>{$(De,o(Y).label),N!==(N=o(Y).id)&&(we.value=(we.__value=N)??"")}),k(z,we)}),_a(et);var xt=y(Ie,2),Qe=L(xt),te=L(Qe),Mt=y(Qe,2),Oe=L(Mt);{var _e=z=>{var Y=Sv(),we=J(Y,!0);ge(()=>$(we,o(h))),k(z,Y)};Le(Oe,z=>{o(h)&&z(_e)})}var Ee=y(Oe,2);{var Fe=z=>{var Y=Xc(),we=J(Y,!0);ge(()=>$(we,o(d)?"Searching Modrinth…":"Type to search.")),k(z,Y)},Ge=z=>{var Y=Xc(),we=J(Y);ge(De=>$(we,`No mods for MC ${e.instance.minecraft_version??""}${o(n)?` + ${o(n)}`:""} match
              “${De??""}”.`),[()=>o(l).trim()]),k(z,Y)},He=z=>{var Y=Tv();Ct(Y,21,()=>o(u),we=>we.project_id,(we,De)=>{var N=wv(),ye=L(N),ue=y(ye,2),Te=L(ue),Re=L(Te),Je=J(Re,!0),Ze=y(Re,2);{var nt=_t=>{var Ut=Mv();k(_t,Ut)},yt=st(()=>b(o(De)));Le(Ze,_t=>{o(yt)&&_t(nt)})}var ut=y(Ze,2);{var Pt=_t=>{var Ut=Ev();k(_t,Ut)},wt=st(()=>B(o(De).project_id));Le(ut,_t=>{o(wt)&&_t(Pt)})}var We=y(Te,2),ke=J(We,!0),lt=y(We,2),Lt=J(lt);ge((_t,Ut)=>{vt(N,1,`flex items-center gap-3 rounded border px-3 py-2 text-left ${o(S)?.project_id===o(De).project_id?"border-(--accent-1) bg-(--brand-tint)":"border-(--border-1) bg-(--bg-3) hover:border-(--accent-1)/60"}`),Ne(ye,"src",_t),Ne(Re,"title",o(De).title),$(Je,o(De).title),Ne(We,"title",o(De).description),$(ke,o(De).description),$(Lt,`by ${(o(De).author||"unknown")??""} · ${Ut??""} downloads`)},[()=>_(o(De)),()=>X(o(De).downloads)]),ae("click",N,()=>ie(o(De))),kn("error",ye,_t=>{_t.currentTarget.dataset.f||(_t.currentTarget.dataset.f="1",_t.currentTarget.src="/logo.png")}),k(we,N)}),k(z,Y)};Le(Ee,z=>{o(u)?o(u).length===0&&!o(d)?z(Ge,1):z(He,-1):z(Fe)})}var Ye=y(xt,2),ot=L(Ye);{var ht=z=>{var Y=Av(),we=L(Y);jt(we,{name:"modrinth",size:28}),k(z,Y)},I=z=>{var Y=Dv(),we=At(Y),De=L(we),N=y(De,2),ye=L(N),ue=J(ye,!0),Te=y(ye,2),Re=J(Te),Je=y(Te,2),Ze=J(Je),nt=y(we,2),yt=y(L(nt),2);{var ut=gt=>{var pt=Rv();k(gt,pt)},Pt=gt=>{var pt=Cv(),Xe=L(pt),R=J(Xe);Xe.value=Xe.__value="";var ee=y(Xe);Ct(ee,17,()=>o(m).versions,pe=>pe.id,(pe,le)=>{var xe=jc(),qe=J(xe),rt={};ge(()=>{$(qe,`${o(le).version??""}${o(le).version_type&&o(le).version_type!=="release"?` (${o(le).version_type})`:""}`),rt!==(rt=o(le).id)&&(xe.value=(xe.__value=rt)??"")}),k(pe,xe)}),_a(pt),ge(()=>$(R,`Latest (${o(m).versions[0]?.version??""})`)),xa(pt,()=>o(w),pe=>g(w,pe)),k(gt,pt)},wt=gt=>{var pt=Pv();k(gt,pt)};Le(yt,gt=>{o(p)?gt(ut):o(m)?.versions?.length?gt(Pt,1):gt(wt,-1)})}var We=y(nt,2),ke=L(We),lt=J(ke,!0),Lt=y(ke,2);{var _t=gt=>{var pt=Lv(),Xe=J(pt,!0);ge(()=>$(Xe,o(E))),k(gt,pt)};Le(Lt,gt=>{o(E)&&gt(_t)})}var Ut=y(Lt,2);{var zt=gt=>{var pt=Iv(),Xe=J(pt,!0);ge(()=>$(Xe,o(m).body)),k(gt,pt)};Le(Ut,gt=>{o(m)?.body&&gt(zt)})}ge((gt,pt)=>{Ne(De,"src",gt),Ne(ye,"title",o(S).title),$(ue,o(S).title),$(Re,`by ${(o(S).author||"unknown")??""}`),$(Ze,`${pt??""} downloads`),$(lt,o(S).description)},[()=>_(o(S)),()=>X(o(S).downloads)]),kn("error",De,gt=>{gt.currentTarget.dataset.f||(gt.currentTarget.dataset.f="1",gt.currentTarget.src="/logo.png")}),k(z,Y)};Le(ot,z=>{o(S)?z(I,-1):z(ht)})}var T=y(Se,2),G=L(T),q=L(G),U=y(q);{var K=z=>{var Y=Uv(),we=J(Y);ge(De=>$(we,`(${De??""})`),[()=>o(A).map(De=>De.title).join(", ")]),k(z,Y)};Le(U,z=>{o(A).length&&z(K)})}var re=y(G,2),de=L(re),W=y(de,2),C=L(W);jt(C,{name:"download",size:13});var he=y(H,2);{var be=z=>{bv(z,{get instance(){return e.instance},get items(){return o(A)},onclose:()=>g(D,!1),ondownloaded:Y=>{g(D,!1),g(A,[],!0),e.oninstalled?.(Y)}})};Le(he,z=>{o(D)&&z(be)})}ge(()=>{$(Q,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `),$(q,`${o(A).length===0?"No mods selected":`${o(A).length} mod${o(A).length===1?"":"s"} selected`} `),de.disabled=!o(A).length,W.disabled=!o(A).length}),ae("click",H,z=>{z.target===z.currentTarget&&e.onclose?.()}),ae("click",Ae,()=>e.onclose?.()),xa(et,()=>o(s),z=>g(s,z)),Xt(te,()=>o(l),z=>g(l,z)),ae("click",de,()=>g(A,[],!0)),ae("click",W,O),k(i,F),$t()}dn(["click","change"]);var kv=j('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Fv=j('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Bv=j('<div class="mt-4 rounded border border-amber-500/30 bg-amber-500/10 p-3" role="status" aria-live="polite"><p class="text-[12px] text-amber-400"><strong> </strong> </p> <button class="mt-2 rounded border border-amber-500/40 px-3 py-1.5 text-[12px] font-medium text-amber-400 hover:bg-amber-500/20 disabled:opacity-40"> </button></div>'),zv=j('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),qc=j('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),Uo=j('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Gv=j(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <!> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),Hv=j('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),Vv=j('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),Wv=j('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),jv=j('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),Xv=j('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),qv=j('<p class="mt-2 text-[11px] text-(--fg-2)"> </p>'),Yv=j('<button type="button" class="rounded px-2.5 py-1.5 text-[11px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)">Reset</button>'),Kv=j('<p role="alert" class="mt-2 text-[11px] text-red-400"> </p>'),Zv=j(`<div role="alert" class="mt-4 rounded border border-red-500/40 bg-red-500/10 p-3 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
              it works — it is prone to crashes and only a limited subset of Forge mods support it.</p></div>`),Jv=j('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance name</div> <p class="mt-1 text-[11px] text-(--text-muted)">The display name across the grid and context panel; the folder id stays put.</p> <div class="mt-3 flex items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-2) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)" aria-label="Instance name"/> <button type="button" class="rounded bg-(--accent-1) px-3 py-1.5 font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40">Rename</button></div> <!> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance icon</div> <p class="mt-1 text-[11px] text-(--text-muted)">Pick a bundled launcher icon, a Twemoji, or a custom image.</p> <div class="mt-3 flex items-center gap-3"><span class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded border border-(--border) bg-(--accent)/10"><img alt="" draggable="false" class="h-full w-full object-cover"/></span> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-[12px] font-medium text-(--accent) hover:bg-(--accent)/25">Change icon…</button> <!></div> <!></div> <!> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, loader switching and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p>',1),Qv=j('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!> <!></div>');function $v(i,e){Qt(e,!0);let t=$e(e,"instance",7),n=$e(e,"storage",3,null),r=$e(e,"blindMode",3,!1),a=$e(e,"deafMode",3,!1);const l=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let s=se("mods"),c=se(kt([])),u=se(!1),d=se(""),h=se(""),f=se(!1),v=se(!1),b=se(kt(t().icon_key??"")),S=se(""),m=se(kt(t().name)),p=se("");async function E(){const U=o(m).trim();if(!(!U||U===t().name)){g(p,"");try{const K=await window.__TAURI__.core.invoke("rename_instance",{instanceId:t().id,newName:U});t().name=K.name,g(m,K.name,!0),g(p,`Renamed to ${K.name}.`)}catch(K){g(p,String(K),!0)}}}function x(){const U=vo(o(b));return U||(t().icon_path?ie(t().icon_path):"/logo.png")}async function w(U){g(S,"");try{await window.__TAURI__.core.invoke("set_instance_icon_key",{instanceId:t().id,iconKey:U}),g(b,U,!0),t().icon_key=U,t().icon_path=null}catch(K){g(S,String(K),!0)}}async function A(){const U=window.__TAURI__?.dialog?.open;if(!U)throw new Error("Image picker unavailable in this build.");const K=await U({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});if(!K)return null;const re=await window.__TAURI__.core.invoke("set_instance_icon",{instanceId:t().id,imagePath:String(K)});return g(b,""),t().icon_key=null,t().icon_path=re,re}let D=se(kt([])),P=se(kt([])),X=se(!1),_=se("");function M(...U){return[n()?n().instances_dir.replace(/\\/g,"/"):"",t().id,"minecraft",...U].filter(Boolean).join("/")}function ie(U){const K=window.__TAURI__?.core?.convertFileSrc;return K?K(U):U}function B(U){return U>=1024*1024?`${(U/1024/1024).toFixed(1)} MB`:U>=1024?`${(U/1024).toFixed(1)} KB`:`${U} B`}function O(U){return U?new Date(U*1e3).toLocaleString():""}function F(){const U=o(h).trim().toLowerCase();return U?o(c).filter(K=>K.display_name.toLowerCase().includes(U)||K.filename.toLowerCase().includes(U)):o(c)}async function H(){g(u,!0);try{g(c,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:t().id}),!0),g(d,"")}catch(U){g(d,String(U),!0)}finally{g(u,!1)}}const me={"minecraft-access":"Minecraft Access",echosight:"EchoSight"},oe=st(()=>[...r()&&!o(c).some(U=>U.filename.toLowerCase().includes("minecraft-access"))?["minecraft-access"]:[],...a()&&!o(c).some(U=>U.filename.toLowerCase().includes("echosight"))?["echosight"]:[]]);let ne=se(!1);async function Me(){g(ne,!0);try{for(const U of o(oe))await window.__TAURI__.core.invoke("install_mod_with_deps",{instanceId:t().id,projectId:U,gameVersion:t().minecraft_version,loader:t().loader_type.toLowerCase()});g(d,"Accessibility mods installed.")}catch(U){g(d,String(U),!0)}finally{g(ne,!1)}await H()}async function Q(U){g(u,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:t().id,filename:U.filename,enable:!U.is_enabled}),o(d)&&g(d,"")}catch(K){g(d,String(K),!0)}finally{g(u,!1)}await H()}async function V(U){g(u,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:t().id,filename:U.filename}),g(d,"")}catch(K){g(d,String(K),!0)}finally{g(u,!1)}await H()}async function fe(){const U=window.__TAURI__?.dialog?.open;if(!U){g(d,"File picker unavailable in this build.");return}let K;try{K=await U({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(de){g(d,String(de),!0);return}const re=K?[].concat(K):[];if(re.length){g(u,!0);try{for(const de of re)await window.__TAURI__.core.invoke("import_mod",{instanceId:t().id,jarPath:de});g(d,"")}catch(de){g(d,String(de),!0)}finally{g(u,!1)}await H()}}async function Ae(U){g(X,!0);try{const K=await window.__TAURI__.core.invoke(U,{instanceId:t().id});g(U==="list_screenshots"?D:P,K,!0),g(_,"")}catch(K){g(_,String(K),!0)}finally{g(X,!1)}}function Se(U){window.__TAURI__.core.invoke("open_path",{path:U}).catch(K=>g(_,String(K),!0))}function Ie(U){Se(M("screenshots",U))}Pi(()=>{H(),Ae("list_screenshots"),Ae("list_logs")});var Ue=Qv(),Be=L(Ue),ze=L(Be),et=y(ze,2),xt=L(et),Qe=J(xt,!0),te=y(xt,2),Mt=J(te),Oe=y(et,2);Ct(Oe,21,()=>l,U=>U.id,(U,K)=>{var re=kv(),de=L(re),W=L(de);Ei(W,{get emoji(){return o(K).icon},size:15});var C=y(de,2),he=J(C,!0);ge(()=>{vt(re,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${o(s)===o(K).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Ne(re,"aria-current",o(s)===o(K).id?"true":void 0),$(he,o(K).label)}),ae("click",re,()=>g(s,o(K).id,!0)),k(U,re)});var _e=y(Be,2),Ee=L(_e),Fe=L(Ee);{var Ge=U=>{var K=Fv(),re=y(At(K),4),de=L(re),W=J(de),C=y(de,2),he=J(C),be=y(C,2),z=J(be);ge(Y=>{$(W,`Minecraft ${t().minecraft_version??""}`),$(he,`Loader: ${t().loader_type??""}`),$(z,`Last played: ${Y??""}`)},[()=>t().last_played?new Date(t().last_played*1e3).toLocaleString():"never"]),k(U,K)},He=U=>{var K=Gv(),re=y(At(K),4);{var de=Ze=>{var nt=Bv(),yt=L(nt),ut=L(yt),Pt=J(ut,!0),wt=y(ut),We=y(yt,2),ke=J(We,!0);ge(lt=>{$(Pt,lt),$(wt,` ${o(oe).length>1?"are":"is"} not installed yet — recommended for your
              accessibility profile. Required dependencies (e.g. Fabric API) install automatically.`),We.disabled=o(u)||o(ne),$(ke,o(ne)?"Installing…":"Install Recommended Accessibility Mods")},[()=>o(oe).map(lt=>me[lt]??lt).join(" and ")]),ae("click",We,Me),k(Ze,nt)};Le(re,Ze=>{(r()||a())&&(t().loader_type==="Fabric"||t().loader_type==="Quilt")&&o(oe).length&&Ze(de)})}var W=y(re,2),C=L(W),he=J(C),be=y(C,2),z=y(W,2),Y=y(z,2),we=y(Y,2),De=L(we);Ct(De,21,F,Ze=>Ze.filename,(Ze,nt)=>{var yt=zv(),ut=L(yt),Pt=L(ut);let wt;var We=J(Pt,!0),ke=y(Pt,2),lt=J(ke),Lt=y(ut),_t=J(Lt),Ut=y(Lt),zt=J(Ut);ge(gt=>{wt=vt(Pt,1,"truncate",null,wt,{"opacity-50":!o(nt).is_enabled}),$(We,o(nt).display_name),$(lt,`${o(nt).filename??""} · ${gt??""}`),vt(_t,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${o(nt).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),Ne(_t,"title",o(nt).is_enabled?"Disable":"Enable"),_t.disabled=o(u),Ne(zt,"title",`Delete ${o(nt).display_name??""}`),zt.disabled=o(u)},[()=>B(o(nt).file_size)]),ae("click",_t,()=>Q(o(nt))),ae("click",zt,()=>V(o(nt))),k(Ze,yt)},Ze=>{var nt=qc(),yt=L(nt),ut=L(yt);{var Pt=We=>{var ke=Hi("Loading mods…");k(We,ke)},wt=We=>{var ke=Hi("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");k(We,ke)};Le(ut,We=>{o(u)?We(Pt):We(wt,-1)})}k(Ze,nt)});var N=y(we,2);{var ye=Ze=>{var nt=Uo(),yt=J(nt,!0);ge(()=>$(yt,o(d))),k(Ze,nt)};Le(N,Ze=>{o(d)&&Ze(ye)})}var ue=y(N,2),Te=L(ue),Re=y(Te,2),Je=L(Re);Ei(Je,{emoji:"📂"}),ge(()=>{$(he,`Installed (${o(c).length??""})`),be.disabled=o(u),Te.disabled=o(u),Re.disabled=!n(),Ne(Re,"title",n()?"Opens the instance mods folder":"Storage unknown")}),ae("click",be,H),Xt(z,()=>o(h),Ze=>g(h,Ze)),ae("click",Y,()=>g(f,!0)),ae("click",Te,fe),ae("click",Re,()=>Se(M("mods"))),k(U,K)},Ye=U=>{var K=Wv(),re=y(At(K),4);Ct(re,21,()=>o(D),be=>be.name,(be,z)=>{var Y=Hv(),we=L(Y),De=y(we,2),N=J(De,!0);ge((ye,ue,Te)=>{Ne(Y,"title",`${o(z).name??""} · ${ye??""} · ${ue??""}`),Ne(we,"src",Te),Ne(we,"alt",o(z).name),Ne(De,"title",o(z).name),$(N,o(z).name)},[()=>B(o(z).size),()=>O(o(z).modified),()=>ie(M("screenshots",o(z).name))]),ae("click",Y,()=>Ie(o(z).name)),ae("keydown",Y,ye=>{(ye.key==="Enter"||ye.key===" ")&&(ye.preventDefault(),Ie(o(z).name))}),k(be,Y)},be=>{var z=Vv(),Y=L(z);{var we=N=>{var ye=Hi("Loading screenshots…");k(N,ye)},De=N=>{var ye=Hi("No screenshots yet — press F2 in game to capture one.");k(N,ye)};Le(Y,N=>{o(X)?N(we):N(De,-1)})}k(be,z)});var de=y(re,2);{var W=be=>{var z=Uo(),Y=J(z,!0);ge(()=>$(Y,o(_))),k(be,z)};Le(de,be=>{o(_)&&be(W)})}var C=y(de,2),he=L(C);Ei(he,{emoji:"📂"}),ae("click",C,()=>Se(M("screenshots"))),k(U,K)},ot=U=>{var K=Xv(),re=y(At(K),4),de=L(re);Ct(de,21,()=>o(P),we=>we.name,(we,De)=>{var N=jv(),ye=L(N),ue=L(ye),Te=J(ue,!0),Re=y(ue,2),Je=J(Re),Ze=y(ye),nt=J(Ze);ge((yt,ut)=>{Ne(ue,"title",o(De).name),$(Te,o(De).name),$(Je,`${yt??""} · ${ut??""}`)},[()=>B(o(De).size),()=>O(o(De).modified)]),ae("click",nt,()=>Se(M("logs",o(De).name))),k(we,N)},we=>{var De=qc(),N=L(De),ye=L(N);{var ue=Re=>{var Je=Hi("Loading logs…");k(Re,Je)},Te=Re=>{var Je=Hi("No log files yet — logs appear after the first launch.");k(Re,Je)};Le(ye,Re=>{o(X)?Re(ue):Re(Te,-1)})}k(we,De)});var W=y(re,2);{var C=we=>{var De=Uo(),N=J(De,!0);ge(()=>$(N,o(_))),k(we,De)};Le(W,we=>{o(_)&&we(C)})}var he=y(W,2),be=L(he),z=y(be,2),Y=L(z);Ei(Y,{emoji:"📂"}),ae("click",be,()=>e.onopenconsole?.()),ae("click",z,()=>Se(M("logs"))),k(U,K)},ht=U=>{var K=Jv(),re=y(At(K),4),de=y(L(re),4),W=L(de),C=y(W,2),he=y(de,2);{var be=We=>{var ke=qv(),lt=J(ke,!0);ge(()=>$(lt,o(p))),k(We,ke)};Le(he,We=>{o(p)&&We(be)})}var z=y(he,2),Y=L(z),we=J(Y),De=y(Y,2),N=J(De),ye=y(re,2),ue=y(L(ye),4),Te=L(ue),Re=J(Te),Je=y(Te,2),Ze=y(Je,2);{var nt=We=>{var ke=Yv();ae("click",ke,()=>w("")),k(We,ke)};Le(Ze,We=>{o(b)&&We(nt)})}var yt=y(ue,2);{var ut=We=>{var ke=Kv(),lt=J(ke,!0);ge(()=>$(lt,o(S))),k(We,ke)};Le(yt,We=>{o(S)&&We(ut)})}var Pt=y(ye,2);{var wt=We=>{var ke=Zv();k(We,ke)};Le(Pt,We=>{t().loader_type==="Cleanroom"&&We(wt)})}ge((We,ke,lt,Lt,_t)=>{C.disabled=We,Ne(z,"title",ke),$(we,`Game folder: ${lt??""}`),$(N,`Mods folder: ${Lt??""}`),Ne(Re,"src",_t)},[()=>!o(m).trim()||o(m).trim()===t().name,()=>M(),()=>M(),()=>M("mods"),()=>x()]),ae("keydown",W,We=>{We.key==="Enter"&&E()}),Xt(W,()=>o(m),We=>g(m,We)),ae("click",C,E),ae("click",Je,()=>g(v,!0)),k(U,K)};Le(Fe,U=>{o(s)==="components"?U(Ge):o(s)==="mods"?U(He,1):o(s)==="screenshots"?U(Ye,2):o(s)==="logs"?U(ot,3):U(ht,-1)})}var I=y(_e,2);{var T=U=>{{let K=st(()=>o(b)?"":x());Cf(U,{get currentKey(){return o(b)},get currentPath(){return o(K)},onpick:re=>{w(re),g(v,!1)},oncustom:A,onclose:()=>g(v,!1)})}};Le(I,U=>{o(v)&&U(T)})}var G=y(I,2);{var q=U=>{Ov(U,{get instance(){return t()},onclose:()=>g(f,!1),oninstalled:()=>H()})};Le(G,U=>{o(f)&&U(q)})}ge(()=>{Ne(xt,"title",t().name),$(Qe,t().name),$(Mt,`${t().minecraft_version??""} · ${t().loader_type??""}`)}),ae("click",ze,function(...U){e.onback?.apply(this,U)}),k(i,Ue),$t()}dn(["click","keydown"]);var eg=j('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),tg=j('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),ng=j('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),ig=j('<p class="mt-3 text-[12px] text-red-400"> </p>'),rg=j(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),ag=j('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function sg(i,e){Qt(e,!0);let t=se(null),n=se(""),r=se(""),a=se(!1),l=se("");function s(E){return E>=1024*1024?`${(E/1024/1024).toFixed(1)} MB`:E>=1024?`${(E/1024).toFixed(0)} KB`:`${E} B`}function c(){return!o(t)||!o(t).loader?"Vanilla":o(t).loader[0].toUpperCase()+o(t).loader.slice(1)+(o(t).loader_version?` ${o(t).loader_version}`:" (latest stable)")}Pi(async()=>{const E=Ca(()=>e.onclose?.());try{g(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),g(r,o(t).name,!0)}catch(x){g(n,String(x),!0)}return()=>Pa(E)});async function u(){if(!o(a)){g(a,!0),g(l,"");try{const E=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:o(r).trim()});e.oninstalled?.(E)}catch(E){g(l,String(E),!0)}finally{g(a,!1)}}}var d=ag(),h=L(d),f=L(h),v=y(L(f),2),b=y(f,2);{var S=E=>{var x=eg(),w=L(x),A=J(w,!0),D=y(w,2),P=J(D,!0);ge(()=>{$(A,o(n)),Ne(D,"title",e.path),$(P,e.path)}),k(E,x)},m=E=>{var x=tg();k(E,x)},p=E=>{var x=rg(),w=At(x),A=L(w),D=L(A),P=J(D,!0),X=y(D,2);{var _=Ue=>{var Be=ng(),ze=J(Be,!0);ge(()=>$(ze,o(t).summary)),k(Ue,Be)};Le(X,Ue=>{o(t).summary&&Ue(_)})}var M=y(X,2),ie=L(M),B=J(ie),O=y(ie,2),F=J(O,!0),H=y(O,2),me=J(H),oe=y(H,2),ne=J(oe,!0),Me=y(A,4),Q=y(Me,2);{var V=Ue=>{var Be=ig(),ze=J(Be,!0);ge(()=>$(ze,o(l))),k(Ue,Be)};Le(Q,Ue=>{o(l)&&Ue(V)})}var fe=y(w,2),Ae=L(fe),Se=y(Ae,2),Ie=J(Se,!0);ge((Ue,Be,ze)=>{Ne(D,"title",o(t).name),$(P,o(t).name),$(B,`MC ${(o(t).game_version||"?")??""}`),$(F,Ue),Ne(H,"title",`${o(t).download_count??""} downloaded, ${o(t).override_count??""} overrides extracted`),$(me,`${o(t).file_count??""} files`),$(ne,Be),Se.disabled=ze,$(Ie,o(a)?"Installing…":"Install Modpack")},[()=>c(),()=>s(o(t).archive_size),()=>o(a)||!o(r).trim()]),Xt(Me,()=>o(r),Ue=>g(r,Ue)),ae("click",Ae,()=>e.onclose?.()),ae("click",Se,u),k(E,x)};Le(b,E=>{o(n)?E(S):o(t)?E(p,-1):E(m,1)})}ae("click",d,E=>{E.target===E.currentTarget&&e.onclose?.()}),ae("click",v,()=>e.onclose?.()),k(i,d),$t()}dn(["click"]);var og=j('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),lg=j('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),Yc=j("<option> </option>"),cg=j('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),ug=j('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),dg=j('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),fg=j('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),hg=j('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),pg=j('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),mg=j('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),vg=j('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),gg=j('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),_g=j('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),xg=j('<p class="mt-1.5 font-medium">Cleanroom only runs Minecraft 1.12.2 — select that version to continue.</p>'),bg=j(`<div role="alert" class="mt-2 rounded border border-red-500/40 bg-red-500/10 p-2.5 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
                it works — it is prone to crashes and only a limited subset of Forge mods support it.</p> <!></div>`),yg=j('<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400"> <strong>Fabric</strong>.</div>'),Sg=j(`<p role="status" class="mt-2 rounded border border-amber-500/20 bg-amber-500/5 p-2 text-[11px] text-amber-400"> <strong>Legacy Fabric</strong> is
              the recommended loader for it.</p>`),Mg=j(`<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400">Blind Mode Notice: Vanilla Minecraft's built-in Narrator lacks 3D world navigation and
              block inspection. We strongly recommend selecting <strong>Fabric</strong> or <strong>Quilt</strong> with Minecraft Access.</div>`),Eg=j('<label class="flex cursor-pointer items-start gap-2 text-[12px]"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent)"/> <span><span> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span></label>'),wg=j('<section class="mt-3 border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Accessibility mods</h4> <p class="mt-0.5 text-[10px] text-(--text-muted)"> </p> <div class="mt-1.5 flex flex-col gap-1.5"></div></section>'),Tg=j('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),Ag=j('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Rg=j('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),Cg=j('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),Pg=j('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),Lg=j('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),Ig=j('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!> <!> <!> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div> <!>',1);function Dg(i,e){Qt(e,!0);let t=$e(e,"groups",19,()=>[]),n=$e(e,"blindMode",3,!1),r=$e(e,"deafMode",3,!1);const a=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],l=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"cleanroom",label:"Cleanroom"},{id:"fabric",label:"Fabric"},{id:"legacyfabric",label:"Legacy Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],s=["","fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],c=["fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],u="1.13.2";function d(ve,Ce){const je=tt=>String(tt??"").split(".").map(Gt=>parseInt(Gt,10)||0),ft=je(ve),it=je(Ce);for(let tt=0;tt<Math.max(ft.length,it.length);tt+=1){const Gt=ft[tt]??0,Tt=it[tt]??0;if(Gt!==Tt)return Gt<Tt}return!0}const h=st(()=>!!o(x)&&d(o(x),u)),f=st(()=>o(_)==="cleanroom"&&o(x)!=="1.12.2"),v="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let b=se(null),S=se(!0),m=se(""),p=se(""),E=se(kt(new Set(["release"]))),x=se(""),w=se(""),A=se(""),D=se(""),P=se(""),X=se(!1),_=se(""),M=se(""),ie=se(kt([])),B=se("idle"),O=0,F=se(!1),H=se("");const me=[{id:"minecraft-access",label:"Minecraft Access",hint:"Core: screen reader & 3D spatial navigation"},{id:"sound-physics-remastered",label:"Sound Physics Remastered",hint:"Optional: spatial acoustics & directional echoes"}],oe=[{id:"echosight",label:"EchoSight",hint:"Directional sound radar & priority subtitles"},{id:"subtitles-visualizer",label:"Subtitles Visualizer",hint:"In-world directional subtitle markers"},{id:"visible-sound",label:"Visible Sound",hint:"In-world block/entity sound highlights"},{id:"soundsight",label:"SoundSight",hint:"Visual threat ring & enhanced subtitles"}];let ne=se(kt(new Set(["minecraft-access"])));const Me=st(()=>[...n()?me:[],...r()?oe:[]]);tn(()=>{g(ne,new Set(n()&&(o(_)==="fabric"||o(_)==="quilt")?["minecraft-access"]:[]),!0)});function Q(ve){const Ce=new Set(o(ne));Ce.has(ve)?Ce.delete(ve):Ce.add(ve),g(ne,Ce,!0)}function V(ve,Ce){const je=window.__TAURI__?.core;return je?je.invoke(ve,Ce):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const fe=st(()=>{const ve=o(b)?.versions??[],Ce=o(p).trim().toLowerCase();return ve.filter(je=>o(E).has(je.version_type)&&(!Ce||je.id.toLowerCase().includes(Ce)))}),Ae=st(()=>!s.includes(o(_))),Se=st(()=>c.includes(o(_))),Ie=st(()=>!!o(x)&&!o(Ae)&&!o(f)&&!o(F)&&!(o(Se)&&o(B)==="loading"));function Ue(ve){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[ve]??ve}function Be(ve){if(!ve)return"—";const Ce=new Date(ve);if(Number.isNaN(Ce.getTime()))return String(ve).slice(0,10);const je=ft=>String(ft).padStart(2,"0");return`${je(Ce.getDate())}/${je(Ce.getMonth()+1)}/${Ce.getFullYear()}`}function ze(ve){const Ce=new Set(o(E));Ce.has(ve)?Ce.delete(ve):Ce.add(ve),g(E,Ce,!0)}function et(){const ve=vo(o(P));if(ve)return ve;const Ce=window.__TAURI__?.core?.convertFileSrc;return o(D)&&Ce?Ce(o(D)):null}async function xt(){const ve=window.__TAURI__?.dialog?.open;if(!ve){g(H,"Image picker unavailable in this build.");return}try{const Ce=await ve({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});return Ce&&(g(P,""),g(D,String(Ce),!0),g(H,"")),Ce?String(Ce):null}catch(Ce){return g(H,String(Ce),!0),null}}async function Qe(){if(!o(Se)||!o(x))return;const ve=++O;g(B,"loading");try{const Ce=await V("fetch_loader_versions",{loader:o(_),gameVersion:o(x)});if(ve!==O)return;g(ie,Ce,!0),g(M,Ce.find(je=>je.stable)?.version??Ce[0]?.version??"",!0),g(B,Ce.length?"idle":"error",!0)}catch{if(ve!==O)return;g(ie,[],!0),g(M,""),g(B,"error")}}async function te(ve){g(x,ve,!0),!o(_)&&d(ve,u)&&g(_,"legacyfabric"),o(Se)&&await Qe()}async function Mt(ve){g(_,ve,!0),g(M,""),g(ie,[],!0),g(B,"idle"),o(Se)&&await Qe()}async function Oe(){g(S,!0),g(m,"");try{g(b,await V("fetch_vanilla_versions"),!0)}catch(ve){g(m,String(ve),!0)}finally{g(S,!1)}}async function _e(){if(!o(Ie))return;g(F,!0),g(H,"");const ve=o(x),Ce=o(w).trim()||ve;try{const je=await V("create_instance",{name:Ce,version:ve,loader:o(_)||null,loaderVersion:o(M).trim()||null});let ft="";if(o(P))try{await V("set_instance_icon_key",{instanceId:je.id,iconKey:o(P)})}catch(it){ft=`Instance created, but the icon could not be applied: ${it}`}else if(o(D))try{await V("set_instance_icon",{instanceId:je.id,imagePath:o(D)})}catch(it){ft=`Instance created, but the icon could not be applied: ${it}`}if(o(A).trim())try{await V("set_instance_group",{instanceId:je.id,group:o(A).trim()})}catch(it){ft=ft?`${ft} The group could not be set: ${it}`:`Instance created, but the group could not be set: ${it}`}for(const it of o(ne))try{await V("install_mod_with_deps",{instanceId:je.id,projectId:it,gameVersion:ve,loader:o(_)})}catch(tt){ft=ft?`${ft} ${it} could not be installed: ${tt}`:`Instance created, but ${it} could not be installed: ${tt}`}e.oncreated?.(je,ft)}catch(je){g(H,String(je),!0)}finally{g(F,!1)}}function Ee(){window.__TAURI__?.core?.invoke("open_path",{path:v}).catch(ve=>g(H,String(ve),!0))}Pi(()=>{const ve=Ca(()=>e.onclose?.());return Oe(),()=>Pa(ve)});var Fe=Ig(),Ge=At(Fe),He=L(Ge),Ye=L(He),ot=L(Ye),ht=L(ot);{var I=ve=>{var Ce=og(),je=At(Ce);ge(ft=>Ne(je,"src",ft),[()=>et()]),k(ve,Ce)},T=st(()=>et()),G=ve=>{var Ce=lg();k(ve,Ce)};Le(ht,ve=>{o(T)?ve(I):ve(G,-1)})}var q=y(ot,2),U=L(q),K=y(U,2),re=y(L(K),2),de=L(re);de.value=de.__value="";var W=y(de);Ct(W,16,t,ve=>ve,(ve,Ce)=>{var je=Yc(),ft=J(je,!0),it={};ge(()=>{$(ft,Ce),it!==(it=Ce)&&(je.value=(je.__value=it)??"")}),k(ve,je)}),_a(re);var C=y(q,2),he=y(Ye,2),be=L(he),z=L(be),Y=L(z);{var we=ve=>{var Ce=cg();k(ve,Ce)},De=ve=>{var Ce=ug(),je=L(Ce),ft=J(je,!0),it=y(je,2);ge(()=>$(ft,o(m))),ae("click",it,Oe),k(ve,Ce)},N=ve=>{var Ce=pg(),je=y(L(Ce));Ct(je,21,()=>o(fe),ft=>ft.id,(ft,it)=>{var tt=fg(),Gt=L(tt),Tt=L(Gt),nn=J(Tt,!0),Bn=y(Tt,2);{var fn=qt=>{var Li=dg();k(qt,Li)};Le(Bn,qt=>{o(it).is_latest_release&&qt(fn)})}var xn=y(Gt),Ht=J(xn,!0),Mn=y(xn),zn=J(Mn,!0);ge((qt,Li)=>{vt(tt,1,`cursor-pointer border-b border-(--border)/50 ${o(x)===o(it).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),$(nn,o(it).id),$(Ht,qt),$(zn,Li)},[()=>Be(o(it).release_time),()=>Ue(o(it).version_type)]),ae("click",tt,()=>te(o(it).id)),ae("keydown",tt,qt=>{(qt.key==="Enter"||qt.key===" ")&&(qt.preventDefault(),te(o(it).id))}),k(ft,tt)},ft=>{var it=hg();k(ft,it)}),k(ve,Ce)};Le(Y,ve=>{o(S)?ve(we):o(m)?ve(De,1):ve(N,-1)})}var ye=y(z,2),ue=L(ye),Te=y(ue,2),Re=J(Te),Je=y(be,2),Ze=L(Je),nt=y(L(Ze),2);Ct(nt,21,()=>a,ve=>ve.id,(ve,Ce)=>{var je=mg(),ft=L(je),it=y(ft,2),tt=J(it,!0);ge(Gt=>{Qa(ft,Gt),$(tt,o(Ce).label)},[()=>o(E).has(o(Ce).id)]),ae("change",ft,()=>ze(o(Ce).id)),k(ve,je)});var yt=y(Ze,2),ut=y(L(yt),2);Ct(ut,21,()=>l,ve=>ve.id,(ve,Ce)=>{var je=vg(),ft=L(je),it=y(ft,2),tt=J(it,!0);ge(()=>{ss(ft,o(Ce).id),Qa(ft,o(_)===o(Ce).id),$(tt,o(Ce).label)}),ae("change",ft,()=>Mt(o(Ce).id)),k(ve,je)});var Pt=y(ut,2);{var wt=ve=>{var Ce=gg();k(ve,Ce)},We=ve=>{var Ce=_g();k(ve,Ce)};Le(Pt,ve=>{o(Ae)?ve(wt):o(_)||ve(We,1)})}var ke=y(Pt,2);{var lt=ve=>{var Ce=bg(),je=y(L(Ce),4);{var ft=it=>{var tt=xg();k(it,tt)};Le(je,it=>{o(f)&&it(ft)})}k(ve,Ce)};Le(ke,ve=>{o(_)==="cleanroom"&&ve(lt)})}var Lt=y(ke,2);{var _t=ve=>{var Ce=yg(),je=L(Ce);je.nodeValue=`Legacy Fabric targets Minecraft 1.13.2 and older; newer versions should use
              regular `,k(ve,Ce)},Ut=ve=>{var Ce=Sg(),je=L(Ce);ge(()=>$(je,`Minecraft ${o(x)??""} predates modern Fabric — `)),k(ve,Ce)};Le(Lt,ve=>{o(_)==="legacyfabric"&&!o(h)?ve(_t):o(_)===""&&o(h)&&ve(Ut,1)})}var zt=y(Lt,2);{var gt=ve=>{var Ce=Mg();k(ve,Ce)};Le(zt,ve=>{n()&&(o(_)===""||o(_)==="horizon")&&ve(gt)})}var pt=y(zt,2);{var Xe=ve=>{var Ce=wg(),je=y(L(Ce),2),ft=J(je),it=y(je,2);Ct(it,21,()=>o(Me),tt=>tt.id,(tt,Gt)=>{var Tt=Eg(),nn=L(Tt),Bn=y(nn,2),fn=L(Bn),xn=J(fn,!0),Ht=y(fn,2),Mn=J(Ht,!0);ge(zn=>{Qa(nn,zn),$(xn,o(Gt).label),$(Mn,o(Gt).hint)},[()=>o(ne).has(o(Gt).id)]),ae("change",nn,()=>Q(o(Gt).id)),k(tt,Tt)}),ge(()=>$(ft,`Installed right after the instance is created.
                ${o(_)==="quilt"?"Dependencies resolve through QFAPI.":""}`)),k(ve,Ce)};Le(pt,ve=>{(o(_)==="fabric"||o(_)==="quilt")&&o(Me).length&&ve(Xe)})}var R=y(pt,2);{var ee=ve=>{var Ce=Cg(),je=y(At(Ce),2);{var ft=Gt=>{var Tt=Tg();k(Gt,Tt)},it=Gt=>{var Tt=Ag(),nn=At(Tt);Xt(nn,()=>o(M),Bn=>g(M,Bn)),k(Gt,Tt)},tt=Gt=>{var Tt=Rg(),nn=L(Tt);nn.value=nn.__value="";var Bn=y(nn);Ct(Bn,17,()=>o(ie),fn=>fn.version,(fn,xn)=>{var Ht=Yc(),Mn=J(Ht),zn={};ge(()=>{$(Mn,`${o(xn).version??""}${o(xn).stable?"":" (unstable)"}`),zn!==(zn=o(xn).version)&&(Ht.value=(Ht.__value=zn)??"")}),k(fn,Ht)}),_a(Tt),xa(Tt,()=>o(M),fn=>g(M,fn)),k(Gt,Tt)};Le(je,Gt=>{o(B)==="loading"?Gt(ft):o(B)==="error"?Gt(it,1):Gt(tt,-1)})}k(ve,Ce)};Le(R,ve=>{o(Se)&&ve(ee)})}var pe=y(he,2),le=L(pe),xe=y(le,2);{var qe=ve=>{var Ce=Pg(),je=J(Ce,!0);ge(()=>{Ne(Ce,"title",o(H)),$(je,o(H))}),k(ve,Ce)},rt=ve=>{var Ce=Lg(),je=J(Ce,!0);ge(()=>$(je,o(x)?`Selected Minecraft ${o(x)}`:"Pick a version to continue")),k(ve,Ce)};Le(xe,ve=>{o(H)?ve(qe):ve(rt,-1)})}var dt=y(xe,2),ct=y(dt,2),St=J(ct,!0),mt=y(Ge,2);{var bt=ve=>{{let Ce=st(()=>et()??"");Cf(ve,{get currentKey(){return o(P)},get currentPath(){return o(Ce)},onpick:je=>{g(P,je,!0),g(D,""),g(X,!1)},oncustom:async()=>{const je=await xt();return je&&g(P,""),je},onclose:()=>g(X,!1)})}};Le(mt,ve=>{o(X)&&ve(bt)})}ge(()=>{Ne(U,"placeholder",o(x)?`Instance name (${o(x)})`:"Instance name"),ue.disabled=!o(b),$(Re,`${o(fe).length??""} shown`),ct.disabled=!o(Ie),Ne(ct,"title",o(Ae)?"This mod loader is not supported yet.":"Create the instance"),$(St,o(F)?"Creating…":"OK")}),ae("click",Ge,ve=>{ve.target===ve.currentTarget&&e.onclose?.()}),ae("click",ot,()=>g(X,!0)),Xt(U,()=>o(w),ve=>g(w,ve)),xa(re,()=>o(A),ve=>g(A,ve)),ae("click",C,()=>e.onclose?.()),Xt(ue,()=>o(p),ve=>g(p,ve)),ae("click",le,Ee),ae("click",dt,()=>e.onclose?.()),ae("click",ct,_e),k(i,Fe),$t()}dn(["click","keydown","change"]);var Ug=j('<input class="h-7 w-full rounded border border-(--accent) bg-(--bg-surface) px-2 text-[13px] font-medium outline-none" aria-label="Instance name"/>'),Ng=j('<span class="group/name flex items-center gap-1"><span class="truncate"> </span> <button type="button" class="shrink-0 rounded p-0.5 text-[10px] text-(--text-muted) opacity-0 transition-opacity hover:text-(--accent) focus-visible:opacity-100 group-hover/name:opacity-100" title="Rename instance" aria-label="Rename instance">✎</button></span>'),Og=j('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),kg=j('<button class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game"><!> Kill</button>'),Fg=j("<button> </button>"),Bg=j('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),zg=j('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><div class="flex items-start justify-between gap-2"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <button type="button" class="rounded p-1 text-[13px] leading-none text-(--text-muted) transition-colors hover:bg-(--bg-subtle) hover:text-(--text-main) focus-visible:ring-1 focus-visible:ring-(--accent) focus-visible:outline-none" title="Close panel (Esc)" aria-label="Clear selection and close the instance panel">✕</button></div> <h3 class="mt-2.5 truncate text-[14px] font-semibold"><!></h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"><!> Launch</button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip"><!> Export</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance"><!> Copy</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"><!> Delete</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance"><!> Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Gg(i,e){Qt(e,!0);let t=$e(e,"storage",3,null),n=$e(e,"gameRunning",3,!1),r=$e(e,"modsCount",3,null),a=$e(e,"groups",19,()=>[]),l=se(!1),s=se(""),c=se(!1),u=se("");function d(){g(u,e.instance.name,!0),g(c,!0)}function h(){if(!o(c))return;const re=o(u).trim();g(c,!1),re&&re!==e.instance.name&&e.onrename?.(re)}function f(){g(c,!1)}const v=st(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function b(){const re=vo(e.instance.icon_key);if(re)return re;const de=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&de?de(e.instance.icon_path):"/logo.png"}function S(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function m(re){const de=new Date(re*1e3),W=C=>String(C).padStart(2,"0");return`${W(de.getDate())}/${W(de.getMonth()+1)}/${de.getFullYear()} ${W(de.getHours())}:${W(de.getMinutes())}:${W(de.getSeconds())}`}function p(re){const de=Math.max(0,Math.floor(re)),W=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],C=[];let he=de;for(const[be,z]of W){const Y=Math.floor(he/be);if(Y&&(C.push(`${Y} ${z}${Y===1?"":"s"}`),he-=Y*be,C.length===2))break}return C.length?C.join(" "):"0 seconds"}const E=st(()=>{const re=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${re}, last played on ${m(e.instance.last_played)}, total played for ${p(e.instance.total_time_played)}`:re});function x(re){g(l,!1),g(s,""),e.onchangegroup?.(re.trim()?re.trim():null)}var w=zg(),A=L(w),D=L(A),P=J(D),X=y(D,2),_=y(A,2),M=L(_);{var ie=re=>{var de=Ug();ae("keydown",de,W=>{W.key==="Enter"?h():W.key==="Escape"&&f()}),kn("blur",de,h),Xt(de,()=>o(u),W=>g(u,W)),k(re,de)},B=re=>{var de=Ng(),W=L(de),C=J(W,!0),he=y(W,2);ge(()=>$(C,e.instance.name)),ae("click",he,d),k(re,de)};Le(M,re=>{o(c)?re(ie):re(B,-1)})}var O=y(_,2),F=L(O),H=J(F,!0),me=y(F,2),oe=J(me,!0),ne=y(me,2);{var Me=re=>{var de=Og(),W=J(de);ge(()=>$(W,`▤ ${e.instance.group??""}`)),k(re,de)};Le(ne,re=>{e.instance.group&&re(Me)})}var Q=y(O,2),V=J(Q,!0),fe=y(Q,2),Ae=L(fe),Se=L(Ae);jt(Se,{name:"launch",size:13});var Ie=y(Ae,2);{var Ue=re=>{var de=kg(),W=L(de);jt(W,{name:"kill",size:13}),ae("click",de,function(...C){e.onkill?.apply(this,C)}),k(re,de)};Le(Ie,re=>{n()&&re(Ue)})}var Be=y(Ie,2),ze=L(Be);jt(ze,{name:"edit",size:13});var et=y(Be,2),xt=y(L(et),2),Qe=J(xt,!0),te=y(et,2);{var Mt=re=>{var de=Bg(),W=L(de),C=y(W,2);Ct(C,16,a,Y=>Y,(Y,we)=>{var De=Fg(),N=J(De,!0);ge(()=>{vt(De,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===we?"font-medium text-(--accent)":"text-(--text-muted)"}`),$(N,we)}),ae("click",De,()=>x(we)),k(Y,De)});var he=y(C,2),be=L(he),z=y(be,2);ge(Y=>{vt(W,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),z.disabled=Y},[()=>!o(s).trim()]),ae("click",W,()=>x("")),ae("keydown",be,Y=>{Y.key==="Enter"&&o(s).trim()&&x(o(s))}),Xt(be,()=>o(s),Y=>g(s,Y)),ae("click",z,()=>x(o(s))),k(re,de)};Le(te,re=>{o(l)&&re(Mt)})}var Oe=y(te,2),_e=L(Oe);jt(_e,{name:"folder",size:13});var Ee=y(Oe,2),Fe=L(Ee);jt(Fe,{name:"export",size:13});var Ge=y(Ee,2),He=L(Ge);jt(He,{name:"copy",size:13});var Ye=y(Ge,2),ot=L(Ye);jt(ot,{name:"delete",size:13});var ht=y(Ye,2),I=L(ht);jt(I,{name:"shortcut",size:13});var T=y(fe,2),G=L(T),q=J(G,!0),U=y(G,2),K=J(U);ge((re,de,W)=>{Ne(P,"src",re),Ne(_,"title",e.instance.name),$(H,e.instance.minecraft_version),vt(me,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${o(v)??""}`),$(oe,e.instance.loader_type),Ne(Q,"title",de),$(V,W),Ae.disabled=n(),Ne(Ae,"title",n()?"A game is already running":`Launch ${e.instance.name}`),$(Qe,o(l)?"▴":"▾"),Oe.disabled=!t(),Ne(Oe,"title",t()?"Opens the instance folder":"Storage unknown"),$(q,o(E)),$(K,`${r()??"…"??""} mods installed`)},[()=>b(),()=>S(),()=>S()]),kn("error",P,re=>{re.currentTarget.dataset.f||(re.currentTarget.dataset.f="1",re.currentTarget.src="/logo.png")}),ae("click",X,()=>e.onclose?.()),ae("click",Ae,function(...re){e.onlaunch?.apply(this,re)}),ae("click",Be,function(...re){e.onedit?.apply(this,re)}),ae("click",et,()=>g(l,!o(l))),ae("click",Oe,function(...re){e.onopenfolder?.apply(this,re)}),ae("click",Ee,function(...re){e.onexport?.apply(this,re)}),ae("click",Ge,function(...re){e.oncopy?.apply(this,re)}),ae("click",Ye,function(...re){e.ondelete?.apply(this,re)}),ae("click",ht,function(...re){e.onshortcut?.apply(this,re)}),k(i,w),$t()}dn(["click","keydown"]);var Hg=j("<button></button>"),Vg=j('<span class="text-[11px] text-rose-400">invalid hex</span>'),Wg=j('<span class="text-[11px] text-(--text-muted)">live preview</span>'),jg=j('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function Xg(i,e){Qt(e,!0);let t=$e(e,"theme",3,"twilight-dark");const n=st(()=>ua(t())?.accent??kc),r=st(()=>{const x=ua(t())?.suggested??[],w=(ua(t())?.accent??kc).toLowerCase();return x.map(A=>({...A,isBuiltin:A.hex.toLowerCase()===w}))});let a=se(kt(Tl())),l=se(kt(o(a)??o(n))),s=se(!1);tn(()=>{t(),g(a,Tl(),!0),g(l,o(a)??o(n),!0),g(s,!1)});function c(x){return o(a)===null?x.isBuiltin:o(a)===x.hex.toLowerCase()}function u(x){x.isBuiltin?(jm(),g(a,null)):cs(x.hex)&&g(a,x.hex.toLowerCase(),!0),g(l,o(a)??o(n),!0),g(s,!1)}function d(x,w){const A=cs(x,{persist:w})?vs(x):null;A?(g(a,A,!0),g(s,!1)):g(s,!0)}var h=jg(),f=At(h);Ct(f,21,()=>o(r),x=>x.hex,(x,w)=>{var A=Hg();ge((D,P)=>{vt(A,1,`h-7 w-7 rounded-full ${D??""}`),Ln(A,`background:${o(w).hex??""}`),Ne(A,"title",`${o(w).name??""}${o(w).isBuiltin?" (built-in)":""}`),Ne(A,"aria-label",`${o(w).name??""} accent`),Ne(A,"aria-pressed",P)},[()=>c(o(w))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>c(o(w))]),ae("click",A,()=>u(o(w))),k(x,A)});var v=y(f,2),b=L(v),S=y(b,2),m=y(S,2);{var p=x=>{var w=Vg();k(x,w)},E=x=>{var w=Wg();k(x,w)};Le(m,x=>{o(s)?x(p):x(E,-1)})}ge(()=>{ss(b,o(l)),ss(S,o(l)),Ne(S,"placeholder",o(n))}),ae("input",b,x=>{g(l,x.currentTarget.value,!0),d(o(l),!1)}),ae("change",b,x=>d(x.currentTarget.value,!0)),ae("input",S,x=>{g(l,x.currentTarget.value,!0),d(o(l),!1)}),ae("change",S,x=>d(x.currentTarget.value,!0)),k(i,h),$t()}dn(["click","input","change"]);var qg=j('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Yg=j('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Kg=j('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),Zg=j('<button><span class="flex items-center gap-2"><!> <!> <!></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Jg=j('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),Kc=j('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),Qg=j(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Icon pack</h3> <p class="mt-1 text-[12px] text-(--text-muted)">The glyph set used across the launcher. Fluent (Auto) follows the theme.</p> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),Zc=j("<option> </option>"),$g=j('<p class="mt-2 text-[12px] text-rose-400"> </p>'),e_=j('<span class="text-amber-400">(selection not applied yet)</span>'),t_=j('<p class="mt-1 text-[12px] text-(--accent)"> </p>'),n_=j('<p role="alert" class="mt-1 text-[12px] text-rose-400"> </p>'),i_=j('<span class="shrink-0 text-(--accent)">active</span>'),r_=j('<li class="flex items-center justify-between gap-2 text-[11px] text-(--text-muted)"><span class="truncate font-mono"> </span> <!></li>'),a_=j('<ul class="mt-2 space-y-0.5"></ul>'),s_=j('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!><!></select> <!> <!> <div class="mt-3 flex flex-wrap items-center gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50">↻ Rescan JREs</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"> </button> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-50">Apply</button></div> <p class="mt-2 flex items-center gap-1.5 text-[11px] text-(--text-muted)"><span></span> Active runtime: <span class="font-mono"> </span> <!></p> <!> <!> <!> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),o_=j('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),l_=j('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),c_=j('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),u_=j('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),d_=j('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),f_=j(`<h2 class="text-[16px] font-semibold">Accessibility</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Assistive profiles that adapt suggestions, installs and pre-launch setup for screen-reader and caption users.</p> <div class="mt-6 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Blind Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Screen reader &amp; audio navigation. Suggests Minecraft Access and spatial-audio mods on
              Fabric; Fabric is strongly recommended over Vanilla or Horizon.</p></div> <button type="button" role="switch" aria-label="Blind Mode (screen reader and audio navigation): suggests Minecraft Access on Fabric and recommends Fabric over Vanilla or Horizon" title="Toggle Blind Mode"><span aria-hidden="true"></span></button></div> <div class="mt-4 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Deaf Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Closed captions &amp; visual sound cues. Enforces <span class="font-mono">showSubtitles:true</span> in <span class="font-mono">options.txt</span> before every launch and suggests visual-sound Fabric mods.</p></div> <button type="button" role="switch" aria-label="Deaf Mode (closed captions and visual sound cues): enforces showSubtitles true in options.txt before launch and suggests visual-sound Fabric mods" title="Toggle Deaf Mode"><span aria-hidden="true"></span></button></div> <p class="mt-4 text-[11px] text-(--text-muted)" aria-live="polite"> </p>`,1),h_=j('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),p_=j("<p> </p>"),m_=j('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div> <button class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Open the dedicated Accounts page"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <span class="truncate">Accounts</span></button></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function v_(i,e){Qt(e,!0);let t=$e(e,"version",3,""),n=$e(e,"theme",15,"twilight-dark"),r=$e(e,"blindMode",15,!1),a=$e(e,"deafMode",15,!1),l=$e(e,"storage",3,null),s=$e(e,"runtimes",19,()=>[]),c=$e(e,"scanning",3,!1),u=$e(e,"javaError",3,""),d=$e(e,"javaPath",15,""),h=$e(e,"javaCustomPaths",27,()=>kt([])),f=$e(e,"minMem",15,0),v=$e(e,"maxMem",15,0);$e(e,"sharedInput",11,""),$e(e,"instancesInput",11,"");let b=$e(e,"storageBusy",3,!1),S=$e(e,"storageMsg",3,""),m=$e(e,"javaMsg",3,""),p=$e(e,"gameRunning",3,!1),E=se(kt([])),x=se(""),w=se(""),A=se(!1),D=se(kt(d()));async function P(){const q=window.__TAURI__?.dialog?.open;if(!q){g(w,"File picker unavailable in this build.");return}g(w,""),g(x,"");try{const U=await q({multiple:!1,title:"Select a Java executable",filters:[{name:"Java",extensions:["exe",""]}]});if(!U)return;g(A,!0);const K=await window.__TAURI__.core.invoke("probe_java_path",{path:String(U)}),re=await e.onaddjava?.(K.executable);Array.isArray(re)&&g(E,re,!0),g(x,`Added Java ${K.major} (${K.version})`)}catch(U){g(w,String(U),!0)}finally{g(A,!1)}}async function X(q){g(w,""),g(A,!0);try{await e.onapplyjava?.(q||null),g(D,q||"",!0),d(q||""),g(x,q?"Applied. Launches will use this runtime.":"Reverted to auto-discovery.",!0)}catch(U){g(w,String(U),!0)}finally{g(A,!1)}}tn(()=>{Array.isArray(h())&&g(E,h(),!0)});const _=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"accessibility",label:"Accessibility",icon:"♿"},{id:"about",label:"About & Updates",icon:"ℹ"}];let M=se("appearance"),ie=se(kt(so())),B=se(kt(Mr())),O=se(""),F=se(!0),H=se(kt(Hc())),me=se(""),oe=se("");function ne(){g(H,Hc(),!0),g(oe,"Loaded the active theme’s tokens — tweak and save.")}function Me(){try{const q=Gc({name:o(O),dark:o(F),tokens:o(H)});g(B,Mr(),!0),n(q.id),g(oe,`Saved “${q.name}”.`)}catch(q){g(oe,String(q),!0)}}function Q(q){Zm(q),g(B,Mr(),!0),n()===q&&n(ic),g(oe,"Theme deleted.")}function V(){g(me,JSON.stringify({name:o(O).trim()||"My theme",dark:o(F),tokens:o(H)},null,2),!0),g(oe,"Theme JSON written below — copy it to share.")}function fe(){try{const q=JSON.parse(o(me));if(!q||typeof q!="object"||Array.isArray(q))throw new Error("Expected a theme object.");const U=Gc(q);g(B,Mr(),!0),n(U.id),g(oe,`Imported “${U.name}”.`),g(me,"")}catch(q){g(oe,`Import failed: ${q}`)}}async function Ae(q){const U=window.__TAURI__?.dialog?.open;if(!U)return null;try{const K=await U({directory:!0,multiple:!1,defaultPath:q&&q.trim()?q.trim():void 0});return typeof K=="string"?K:null}catch{return null}}const Se=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let Ie=se(kt({}));tn(()=>{l()&&g(Ie,{instances:l().is_default_instances?"":l().instances_dir,shared:l().is_default_shared?"":l().shared_dir,versions:l().is_default_versions?"":l().versions_dir,mods:l().is_default_mods?"":l().mods_dir,icons:l().is_default_icons?"":l().icons_dir,java:l().is_default_java?"":l().java_dir,skins:l().is_default_skins?"":l().skins_dir,downloads:l().downloads_dir||""},!0)});function Ue(q){return l()?q==="downloads"?l().staging_root:l()[`${q}_dir`]:""}function Be(q){return l()?q==="downloads"?l().is_default_staging:l()[`is_default_${q}`]:!0}const ze="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var et=m_(),xt=L(et),Qe=L(xt),te=y(Qe,2);Ct(te,21,()=>_,q=>q.id,(q,U)=>{var K=qg(),re=L(K),de=L(re);Ei(de,{get emoji(){return o(U).icon},size:15});var W=y(re,2),C=J(W,!0);ge(()=>{vt(K,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${o(M)===o(U).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Ne(K,"aria-current",o(M)===o(U).id?"true":void 0),$(C,o(U).label)}),ae("click",K,()=>g(M,o(U).id,!0)),k(q,K)});var Mt=y(te,2),Oe=L(Mt),_e=L(Oe);jt(_e,{name:"accounts",size:15});var Ee=y(xt,2),Fe=L(Ee),Ge=L(Fe);{var He=q=>{var U=Qg(),K=y(At(U),6),re=L(K);Ct(re,17,()=>go,We=>We.id,(We,ke)=>{var lt=Yg(),Lt=L(lt),_t=L(Lt),Ut=y(_t,2),zt=y(Ut,2),gt=y(Lt,2),pt=J(gt,!0),Xe=y(gt,2),R=J(Xe,!0);ge(()=>{vt(lt,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===o(ke).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Ne(lt,"aria-pressed",n()===o(ke).id),Ne(lt,"title",`${o(ke).label??""}: ${o(ke).dark?"dark":"light"} ground`),Ln(_t,`background:${o(ke).swatch[0]??""}`),Ln(Ut,`background:${o(ke).swatch[1]??""}`),Ln(zt,`background:${o(ke).swatch[2]??""}`),$(pt,o(ke).label),$(R,o(ke).dark?"Dark ground":"Light ground")}),ae("click",lt,()=>n(o(ke).id)),k(We,lt)});var de=y(re,2);Ct(de,17,()=>o(B),We=>We.id,(We,ke)=>{var lt=Kg(),Lt=L(lt),_t=L(Lt),Ut=y(_t,2),zt=y(Ut,2),gt=y(Lt,2),pt=J(gt,!0),Xe=y(gt,2),R=J(Xe),ee=y(Xe,2);ge(()=>{vt(lt,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===o(ke).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Ne(lt,"title",`${o(ke).name??""}: ${o(ke).dark?"dark":"light"} ground`),Ln(_t,`background:${o(ke).tokens.bg1??""}`),Ln(Ut,`background:${o(ke).tokens.bg3??""}`),Ln(zt,`background:${o(ke).tokens.accent1??""}`),$(pt,o(ke).name),$(R,`Custom · ${o(ke).dark?"Dark":"Light"} ground`),Ne(ee,"title",`Delete ${o(ke).name??""}`),Ne(ee,"aria-label",`Delete ${o(ke).name??""}`)}),ae("click",lt,()=>n(o(ke).id)),ae("keydown",lt,pe=>{(pe.key==="Enter"||pe.key===" ")&&(pe.preventDefault(),n(o(ke).id))}),ae("click",ee,pe=>{pe.stopPropagation(),Q(o(ke).id)}),k(We,lt)});var W=y(K,4),C=L(W);Xg(C,{get theme(){return n()}});var he=y(W,6);Ct(he,21,()=>If,We=>We.id,(We,ke)=>{var lt=Zg(),Lt=L(lt),_t=L(Lt);jt(_t,{name:"instances",size:16,get pack(){return o(ke).id}});var Ut=y(_t,2);jt(Ut,{name:"settings",size:16,get pack(){return o(ke).id}});var zt=y(Ut,2);jt(zt,{name:"accounts",size:16,get pack(){return o(ke).id}});var gt=y(Lt,2),pt=J(gt,!0),Xe=y(gt,2),R=J(Xe,!0);ge(()=>{vt(lt,1,`flex flex-col items-start gap-2 rounded border p-2.5 text-left ${o(ie)===o(ke).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Ne(lt,"aria-pressed",o(ie)===o(ke).id),Ne(lt,"title",`${o(ke).label??""}: ${o(ke).hint??""}`),$(pt,o(ke).label),$(R,o(ke).hint)}),ae("click",lt,()=>{iv(o(ke).id),g(ie,so(),!0)}),k(We,lt)});var be=y(he,6),z=L(be),Y=L(z),we=y(Y,2),De=L(we),N=y(De,2),ye=y(z,2);Ct(ye,21,()=>qm,We=>We.key,(We,ke)=>{var lt=Jg(),Lt=L(lt),_t=J(Lt,!0),Ut=y(Lt,2),zt=L(Ut),gt=y(zt,2);ge(()=>{$(_t,o(ke).label),ss(zt,o(H)[o(ke).key]),Ne(zt,"title",`${o(ke).label??""} color`),Ne(zt,"aria-label",`${o(ke).label??""} color`),ss(gt,o(H)[o(ke).key]),Ne(gt,"aria-label",`${o(ke).label??""} hex`)}),ae("input",zt,pt=>g(H,{...o(H),[o(ke).key]:pt.currentTarget.value},!0)),ae("input",gt,pt=>g(H,{...o(H),[o(ke).key]:pt.currentTarget.value},!0)),k(We,lt)});var ue=y(ye,2),Te=L(ue),Re=y(Te,2),Je=y(be,4),Ze=L(Je),nt=y(Ze,2),yt=L(nt),ut=y(yt,2),Pt=y(Je,2);{var wt=We=>{var ke=Kc(),lt=J(ke,!0);ge(()=>$(lt,o(oe))),k(We,ke)};Le(Pt,We=>{o(oe)&&We(wt)})}ge(()=>{vt(De,1,`px-3 py-1.5 text-[12px] ${o(F)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Ne(De,"aria-pressed",o(F)),vt(N,1,`px-3 py-1.5 text-[12px] ${o(F)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),Ne(N,"aria-pressed",!o(F))}),Xt(Y,()=>o(O),We=>g(O,We)),ae("click",De,()=>g(F,!0)),ae("click",N,()=>g(F,!1)),ae("click",Te,ne),ae("click",Re,Me),Xt(Ze,()=>o(me),We=>g(me,We)),ae("click",yt,V),ae("click",ut,fe),k(q,U)},Ye=q=>{var U=s_(),K=y(At(U),6),re=L(K);re.value=re.__value="";var de=y(re);Ct(de,17,s,Xe=>Xe.executable,(Xe,R)=>{var ee=Zc(),pe=J(ee),le={};ge(()=>{$(pe,`Java ${o(R).major??""} — ${o(R).home??""}`),le!==(le=o(R).executable)&&(ee.value=(ee.__value=le)??"")}),k(Xe,ee)});var W=y(de);Ct(W,16,()=>o(E).filter(Xe=>!s().some(R=>R.executable===Xe)),Xe=>Xe,(Xe,R)=>{var ee=Zc(),pe=J(ee),le={};ge(()=>{$(pe,`Custom — ${R??""}`),le!==(le=R)&&(ee.value=(ee.__value=le)??"")}),k(Xe,ee)}),_a(K);var C=y(K,2);{var he=Xe=>{var R=Kc(),ee=J(R,!0);ge(()=>$(ee,c()?"Probing system roots…":"No runtimes detected.")),k(Xe,R)};Le(C,Xe=>{s().length||Xe(he)})}var be=y(C,2);{var z=Xe=>{var R=$g(),ee=J(R,!0);ge(()=>$(ee,u())),k(Xe,R)};Le(be,Xe=>{u()&&Xe(z)})}var Y=y(be,2),we=L(Y),De=y(we,2),N=J(De,!0),ye=y(De,2),ue=y(Y,2),Te=L(ue),Re=y(Te,2),Je=J(Re,!0),Ze=y(Re,2);{var nt=Xe=>{var R=e_();k(Xe,R)};Le(Ze,Xe=>{d()!==o(D)&&Xe(nt)})}var yt=y(ue,2);{var ut=Xe=>{var R=t_(),ee=J(R,!0);ge(()=>$(ee,o(x))),k(Xe,R)};Le(yt,Xe=>{o(x)&&Xe(ut)})}var Pt=y(yt,2);{var wt=Xe=>{var R=n_(),ee=J(R,!0);ge(()=>$(ee,o(w))),k(Xe,R)};Le(Pt,Xe=>{o(w)&&Xe(wt)})}var We=y(Pt,2);{var ke=Xe=>{var R=a_();Ct(R,20,()=>o(E),ee=>ee,(ee,pe)=>{var le=r_(),xe=L(le),qe=J(xe,!0),rt=y(xe,2);{var dt=ct=>{var St=i_();k(ct,St)};Le(rt,ct=>{o(D)===pe&&ct(dt)})}ge(()=>{Ne(xe,"title",pe),$(qe,pe)}),k(ee,le)}),k(Xe,R)};Le(We,Xe=>{o(E).length&&Xe(ke)})}var lt=y(We,4),Lt=y(L(lt),2),_t=y(Lt,2),Ut=y(lt,2),zt=y(L(Ut),2),gt=y(zt,2),pt=y(Ut,4);ge(()=>{we.disabled=c(),De.disabled=o(A),$(N,o(A)?"Checking…":"Browse / Add Custom Java…"),ye.disabled=o(A)||d()===o(D),vt(Te,1,`inline-block h-1.5 w-1.5 rounded-full ${o(D)?"bg-(--accent)":"bg-(--text-muted)"}`),$(Je,o(D)||"auto-discovery")}),xa(K,d),ae("click",we,function(...Xe){e.onscanjava?.apply(this,Xe)}),ae("click",De,P),ae("click",ye,()=>X(d())),Xt(Lt,f),Xt(_t,f),Xt(zt,v),Xt(gt,v),ae("click",pt,function(...Xe){e.onsaveprefs?.apply(this,Xe)}),k(q,U)},ot=q=>{var U=d_(),K=y(At(U),4);{var re=de=>{var W=u_(),C=At(W),he=L(C),be=L(he),z=y(L(be),2),Y=J(z,!0),we=y(be,2),De=y(C,2);Ct(De,17,()=>Se,N=>N.key,(N,ye)=>{var ue=c_(),Te=L(ue),Re=L(Te),Je=L(Re),Ze=y(Je),nt=J(Ze,!0),yt=y(Re,2);{var ut=pt=>{var Xe=o_();ge(()=>Xe.disabled=b()),ae("click",Xe,()=>e.onsavefolder?.(o(ye).key,"")),k(pt,Xe)},Pt=st(()=>!Be(o(ye).key));Le(yt,pt=>{o(Pt)&&pt(ut)})}var wt=y(Te,2),We=J(wt,!0),ke=y(wt,2),lt=L(ke),Lt=y(lt,2),_t=y(Lt,2),Ut=y(_t,2),zt=y(ke,2);{var gt=pt=>{var Xe=l_(),R=L(Xe),ee=J(R),pe=y(R,2);ge(()=>{Ne(R,"title",l().staging_root),$(ee,`Staging: ${l().staging_root??""}`),pe.disabled=b()||p(),Ne(pe,"title",p()?"Unavailable while a game is running":"Purges the staging area")}),ae("click",pe,function(...le){e.oncleanstaging?.apply(this,le)}),k(pt,Xe)};Le(zt,pt=>{o(ye).key==="downloads"&&pt(gt)})}ge((pt,Xe)=>{$(Je,`${o(ye).label??""} `),$(nt,pt),$(We,o(ye).hint),Ne(lt,"placeholder",Xe),Ut.disabled=b()},[()=>Be(o(ye).key)?"(default)":"(custom)",()=>Ue(o(ye).key)]),Xt(lt,()=>o(Ie)[o(ye).key],pt=>o(Ie)[o(ye).key]=pt),ae("click",Lt,async()=>{const pt=await Ae(o(Ie)[o(ye).key]);pt&&(o(Ie)[o(ye).key]=pt)}),ae("click",_t,()=>e.onopenfolder?.(Ue(o(ye).key))),ae("click",Ut,()=>e.onsavefolder?.(o(ye).key,o(Ie)[o(ye).key])),k(N,ue)}),ge(()=>{Ne(z,"title",l().app_data),$(Y,l().app_data)}),ae("click",we,()=>e.onopenfolder?.(l().app_data)),k(de,W)};Le(K,de=>{l()&&de(re)})}k(q,U)},ht=q=>{var U=f_(),K=y(At(U),4),re=y(L(K),2),de=J(re),W=y(K,2),C=y(L(W),2),he=J(C),be=y(W,2),z=J(be);ge(()=>{Ne(re,"aria-checked",r()),vt(re,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${r()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),vt(de,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${r()?"translate-x-[22px]":""}`),Ne(C,"aria-checked",a()),vt(C,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${a()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),vt(he,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${a()?"translate-x-[22px]":""}`),$(z,`Blind Mode is ${r()?"on":"off"}. Deaf Mode is ${a()?"on":"off"}.`)}),ae("click",re,()=>r(!r())),ae("click",C,()=>a(!a())),k(q,U)},I=q=>{var U=h_(),K=y(At(U),4),re=L(K),de=y(L(re),2),W=L(de),C=y(L(W)),he=J(C),be=y(K,2),z=L(be),Y=y(z,2),we=y(Y,2);ge(()=>$(he,`(alpha-v${t()??""})`)),ae("click",z,()=>e.onopenurl?.(`${ze}`)),ae("click",Y,()=>e.onopenurl?.(`${ze}/releases`)),ae("click",we,()=>e.onopenurl?.(`${ze}/issues`)),k(q,U)};Le(Ge,q=>{o(M)==="appearance"?q(He):o(M)==="java"?q(Ye,1):o(M)==="storage"?q(ot,2):o(M)==="accessibility"?q(ht,3):q(I,-1)})}var T=y(Ge,2);{var G=q=>{var U=p_(),K=J(U,!0);ge(()=>{vt(U,1,`mt-5 text-[12px] ${m()?"text-(--accent)":"text-(--text-muted)"}`),$(K,m()||S())}),k(q,U)};Le(T,q=>{(m()||S())&&q(G)})}ae("click",Qe,function(...q){e.onback?.apply(this,q)}),ae("click",Mt,function(...q){e.onopenaccounts?.apply(this,q)}),k(i,et),$t()}dn(["click","keydown","input"]);var g_=j("<button> </button>"),__=j('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),x_=j('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),b_=j('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),Jc=j('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),y_=j('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),Qc=j('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),S_=j('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),M_=j('<div class="p-4"><!> <!></div>'),E_=j(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),w_=j('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),T_=j('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),A_=j('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),R_=j('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),C_=j(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),P_=j('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),L_=j('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),I_=j('<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div><!> <!></div>',1);function Of(i,e){Qt(e,!0);let t=se("offline"),n=se(""),r=se(!1),a=se(""),l=se(""),s=se("idle"),c=se(""),u=se(null),d=se(!1),h=null,f=se("idle"),v=se(""),b=se(!1),S=se(!1),m=se(null),p=se(!1),E=null,x=se(""),w=se(""),A=se(!1),D=se(""),P=se(""),X=se(""),_=se("");function M(_e,Ee){const Fe=window.__TAURI__?.core;return Fe?Fe.invoke(_e,Ee):Promise.reject(new Error("Tauri backend unavailable in this preview."))}tc(()=>{ie(),B()});function ie(){h&&(clearInterval(h),h=null)}function B(){E&&(clearInterval(E),E=null)}tn(()=>{const _e=o(a).trim(),Ee=setTimeout(async()=>{if(!_e){g(l,"");return}try{g(l,await M("offline_uuid",{username:_e}),!0)}catch{g(l,"")}},200);return()=>clearTimeout(Ee)});async function O(_e){_e.preventDefault(),g(n,""),g(r,!0);try{await M("add_offline_account",{username:o(a).trim()}),g(a,""),g(l,""),await e.onrefresh?.()}catch(Ee){g(n,String(Ee),!0)}finally{g(r,!1)}}async function F(){g(c,""),g(d,!1),g(s,"requesting");try{g(u,await M("start_microsoft_device_code"),!0),g(s,"code"),ie(),h=setInterval(H,(o(u).interval||5)*1e3)}catch(_e){g(s,"idle"),g(c,String(_e),!0)}}async function H(){if(o(u))try{const _e=await M("poll_microsoft_device_code",{device:o(u)});if(_e.state==="pending")return;if(_e.state==="slow_down"){ie(),h=setInterval(H,((o(u).interval||5)+5)*1e3);return}if(ie(),_e.state==="failed"){g(c,_e.reason,!0),g(u,null),g(s,"idle");return}g(u,null),g(s,"signedin"),await e.onrefresh?.()}catch(_e){g(c,String(_e),!0)}}async function me(){if(o(u))try{await navigator.clipboard.writeText(o(u).user_code),g(d,!0),setTimeout(()=>g(d,!1),1600)}catch{}}async function oe(){g(v,""),g(b,!1),g(S,!0);try{await M("elyby_browser_login"),g(b,!0),await e.onrefresh?.()}catch(_e){g(v,String(_e),!0)}finally{g(S,!1)}}async function ne(){g(v,""),g(p,!1),g(f,"requesting");try{g(m,await M("start_elyby_device_code"),!0),g(f,"code"),B(),E=setInterval(Me,(o(m).interval||5)*1e3)}catch(_e){g(f,"idle"),g(v,String(_e),!0)}}async function Me(){if(o(m))try{const _e=await M("poll_elyby_device_code",{device:o(m)});if(_e.state==="pending")return;if(_e.state==="slow_down"){B(),E=setInterval(Me,((o(m).interval||5)+5)*1e3);return}if(B(),_e.state==="failed"){g(v,_e.reason,!0),g(m,null),g(f,"idle");return}g(m,null),g(f,"signedin"),await e.onrefresh?.()}catch(_e){g(v,String(_e),!0)}}async function Q(){if(o(m))try{await navigator.clipboard.writeText(o(m).user_code),g(p,!0),setTimeout(()=>g(p,!1),1600)}catch{}}function V(){const _e=o(m)?.verification_uri_complete??o(m)?.verification_uri;_e&&M("open_external_url",{url:_e}).catch(()=>{})}async function fe(_e){_e.preventDefault(),g(n,""),g(A,!0),g(b,!1);try{await M("add_elyby_account",{username:o(x).trim(),password:o(w)}),g(x,""),g(w,""),g(b,!0),await e.onrefresh?.()}catch(Ee){g(n,String(Ee),!0)}finally{g(A,!1)}}async function Ae(_e){_e.preventDefault(),g(n,""),g(r,!0);try{const Ee=await M("add_custom_yggdrasil_account",{username:o(D).trim(),serverUrl:o(P).trim()});(o(X).trim()||o(_).trim())&&await M("set_account_textures",{id:Ee.id,skin:o(X).trim()||null,cape:o(_).trim()||null}),g(D,""),g(P,""),g(X,""),g(_,""),await e.onrefresh?.()}catch(Ee){g(n,String(Ee),!0)}finally{g(r,!1)}}async function Se(_e){const Ee=window.__TAURI__?.dialog?.open;if(!Ee){g(n,"File picker unavailable in this build.");return}try{const Fe=await Ee({multiple:!1,title:_e==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Fe)return;const Ge=String(Fe);g(_e==="skin"?X:_,Ge,!0),g(n,"")}catch(Fe){g(n,String(Fe),!0)}}var Ie=I_(),Ue=At(Ie);Ct(Ue,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],Ml,(_e,Ee)=>{var Fe=st(()=>Nd(Ee,2));let Ge=()=>o(Fe)[0],He=()=>o(Fe)[1];var Ye=g_(),ot=J(Ye,!0);ge(()=>{vt(Ye,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${o(t)===Ge()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),$(ot,He())}),ae("click",Ye,()=>{g(t,Ge(),!0),g(n,"")}),k(_e,Ye)});var Be=y(Ue,2),ze=L(Be);{var et=_e=>{var Ee=x_(),Fe=At(Ee),Ge=L(Fe),He=y(Ge,2),Ye=y(Fe,2);{var ot=ht=>{var I=__(),T=y(L(I),2),G=J(T,!0);ge(()=>$(G,o(l))),k(ht,I)};Le(Ye,ht=>{o(l)&&ht(ot)})}ge(ht=>He.disabled=ht,[()=>!o(a).trim()||o(r)]),kn("submit",Fe,O),Xt(Ge,()=>o(a),ht=>g(a,ht)),k(_e,Ee)},xt=_e=>{var Ee=M_(),Fe=L(Ee);{var Ge=T=>{var G=b_(),q=At(G);ge(()=>q.disabled=o(r)),ae("click",q,F),k(T,G)},He=T=>{var G=Jc();k(T,G)},Ye=T=>{var G=y_(),q=y(L(G),2),U=J(q,!0),K=y(q,4),re=J(K,!0),de=y(K,2),W=L(de),C=J(W,!0),he=y(W,2);ge(()=>{$(U,o(u).verification_uri),$(re,o(u).user_code),$(C,o(d)?"Copied ✓":"Copy code")}),ae("click",W,me),ae("click",he,F),k(T,G)},ot=T=>{var G=Qc(),q=y(At(G),2);ae("click",q,()=>{g(s,"idle"),g(c,"")}),k(T,G)};Le(Fe,T=>{o(s)==="idle"?T(Ge):o(s)==="requesting"?T(He,1):o(s)==="code"&&o(u)?T(Ye,2):o(s)==="signedin"&&T(ot,3)})}var ht=y(Fe,2);{var I=T=>{var G=S_(),q=J(G,!0);ge(()=>$(q,o(c))),k(T,G)};Le(ht,T=>{o(c)&&T(I)})}k(_e,Ee)},Qe=_e=>{var Ee=C_(),Fe=y(L(Ee),2);{var Ge=C=>{var he=E_(),be=At(he),z=J(be,!0),Y=y(be,4);ge(()=>{be.disabled=o(S),$(z,o(S)?"Waiting for the browser…":"Sign in with browser (recommended)"),Y.disabled=o(S)}),ae("click",be,oe),ae("click",Y,ne),k(C,he)},He=C=>{var he=Jc();k(C,he)},Ye=C=>{var he=T_(),be=y(L(he),2),z=J(be,!0),Y=y(be,4),we=J(Y,!0),De=y(Y,2),N=L(De),ye=J(N,!0),ue=y(N,2);{var Te=Je=>{var Ze=w_();ae("click",Ze,V),k(Je,Ze)};Le(ue,Je=>{(o(m).verification_uri||o(m).verification_uri_complete)&&Je(Te)})}var Re=y(ue,2);ge(()=>{$(z,o(m).verification_uri),$(we,o(m).user_code),$(ye,o(p)?"Copied ✓":"Copy code")}),ae("click",N,Q),ae("click",Re,ne),k(C,he)},ot=C=>{var he=Qc(),be=y(At(he),2);ae("click",be,()=>{g(f,"idle"),g(v,"")}),k(C,he)};Le(Fe,C=>{o(f)==="idle"?C(Ge):o(f)==="requesting"?C(He,1):o(f)==="code"&&o(m)?C(Ye,2):o(f)==="signedin"&&C(ot,3)})}var ht=y(Fe,2);{var I=C=>{var he=A_(),be=J(he,!0);ge(()=>$(be,o(v))),k(C,he)};Le(ht,C=>{o(v)&&C(I)})}var T=y(ht,2);{var G=C=>{var he=R_();k(C,he)};Le(T,C=>{o(b)&&o(f)==="idle"&&C(G)})}var q=y(T,2),U=y(L(q),2),K=L(U),re=y(K,2),de=y(re,2),W=J(de,!0);ge(C=>{de.disabled=C,$(W,o(A)?"Signing in…":"Sign in")},[()=>!o(x).trim()||!o(w)||o(A)]),kn("submit",U,fe),Xt(K,()=>o(x),C=>g(x,C)),Xt(re,()=>o(w),C=>g(w,C)),k(_e,Ee)},te=_e=>{var Ee=P_(),Fe=L(Ee),Ge=y(Fe,2),He=y(Ge,2),Ye=L(He),ot=y(L(Ye)),ht=J(ot,!0),I=y(Ye,2),T=y(L(I)),G=J(T,!0),q=y(He,2);ge(U=>{$(ht,o(X)||"none"),$(G,o(_)||"none"),q.disabled=U},[()=>!o(D).trim()||!o(P).trim()||o(r)]),kn("submit",Ee,Ae),Xt(Fe,()=>o(P),U=>g(P,U)),Xt(Ge,()=>o(D),U=>g(D,U)),ae("click",Ye,()=>Se("skin")),ae("click",I,()=>Se("cape")),k(_e,Ee)};Le(ze,_e=>{o(t)==="offline"?_e(et):o(t)==="microsoft"?_e(xt,1):o(t)==="elyby"?_e(Qe,2):o(t)==="custom"&&_e(te,3)})}var Mt=y(ze,2);{var Oe=_e=>{var Ee=L_(),Fe=J(Ee,!0);ge(()=>$(Fe,o(n))),k(_e,Ee)};Le(Mt,_e=>{o(n)&&_e(Oe)})}k(i,Ie),$t()}dn(["click"]);const ac="156",Or={ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},D_=0,$c=1,U_=2,kf=1,N_=2,zi=3,Ri=0,Fn=1,ii=2,qi=0,da=1,eu=2,tu=3,nu=4,O_=5,ra=100,k_=101,F_=102,iu=103,ru=104,B_=200,z_=201,G_=202,H_=203,Ff=204,Bf=205,V_=206,W_=207,j_=208,X_=209,q_=210,Y_=0,K_=1,Z_=2,Pl=3,J_=4,Q_=5,$_=6,ex=7,zf=0,tx=1,nx=2,lr=0,ix=1,rx=2,ax=3,sx=4,ox=5,Gf=300,ba=301,ya=302,oo=303,Ll=304,_o=306,Il=1e3,ci=1001,Dl=1002,en=1003,au=1004,No=1005,ti=1006,lx=1007,us=1008,cr=1009,cx=1010,ux=1011,sc=1012,Hf=1013,sr=1014,Wi=1015,Sa=1016,Vf=1017,Wf=1018,Ar=1020,dx=1021,ui=1023,fx=1024,hx=1025,Rr=1026,Ma=1027,px=1028,jf=1029,mx=1030,Xf=1031,qf=1033,Oo=33776,ko=33777,Fo=33778,Bo=33779,su=35840,ou=35841,lu=35842,cu=35843,vx=36196,uu=37492,du=37496,fu=37808,hu=37809,pu=37810,mu=37811,vu=37812,gu=37813,_u=37814,xu=37815,bu=37816,yu=37817,Su=37818,Mu=37819,Eu=37820,wu=37821,zo=36492,Tu=36494,Au=36495,gx=36283,Ru=36284,Cu=36285,Pu=36286,Yf=3e3,Cr=3001,_x=3200,xx=3201,Kf=0,bx=1,Pr="",Zt="srgb",Ci="srgb-linear",xo="display-p3",Go=7680,yx=519,Sx=512,Mx=513,Ex=514,wx=515,Tx=516,Ax=517,Rx=518,Cx=519,Ul=35044,Lu="300 es",Nl=1035,ji=2e3,lo=2001;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,Ol=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function In(i,e,t){return Math.max(e,Math.min(t,i))}function Px(i,e){return(i%e+e)%e}function Ho(i,e,t){return(1-t)*i+t*e}function Iu(i){return(i&i-1)===0&&i!==0}function kl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lx={DEG2RAD:Js};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(e,t,n,r,a,l,s,c,u){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,s,c,u)}set(e,t,n,r,a,l,s,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=l,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],s=n[3],c=n[6],u=n[1],d=n[4],h=n[7],f=n[2],v=n[5],b=n[8],S=r[0],m=r[3],p=r[6],E=r[1],x=r[4],w=r[7],A=r[2],D=r[5],P=r[8];return a[0]=l*S+s*E+c*A,a[3]=l*m+s*x+c*D,a[6]=l*p+s*w+c*P,a[1]=u*S+d*E+h*A,a[4]=u*m+d*x+h*D,a[7]=u*p+d*w+h*P,a[2]=f*S+v*E+b*A,a[5]=f*m+v*x+b*D,a[8]=f*p+v*w+b*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],c=e[6],u=e[7],d=e[8];return t*l*d-t*s*u-n*a*d+n*s*c+r*a*u-r*l*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=d*l-s*u,f=s*c-d*a,v=u*a-l*c,b=t*h+n*f+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/b;return e[0]=h*S,e[1]=(r*u-d*n)*S,e[2]=(s*n-r*l)*S,e[3]=f*S,e[4]=(d*t-r*c)*S,e[5]=(r*a-s*t)*S,e[6]=v*S,e[7]=(n*c-u*t)*S,e[8]=(l*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,s){const c=Math.cos(a),u=Math.sin(a);return this.set(n*c,n*u,-n*(c*l+u*s)+l+e,-r*u,r*c,-r*(-u*l+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Dt;function Zf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ix(){const i=co("canvas");return i.style.display="block",i}const Du={};function $a(i){i in Du||(Du[i]=!0,console.warn(i))}function fa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Dx=new Dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ux=new Dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Nx(i){return i.convertSRGBToLinear().applyMatrix3(Ux)}function Ox(i){return i.applyMatrix3(Dx).convertLinearToSRGB()}const kx={[Ci]:i=>i,[Zt]:i=>i.convertSRGBToLinear(),[xo]:Nx},Fx={[Ci]:i=>i,[Zt]:i=>i.convertLinearToSRGB(),[xo]:Ox},Jn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Ci},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=kx[e],r=Fx[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Fr;class Jf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=co("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=fa(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fa(t[n]/255)*255):t[n]=fa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bx=0;class Qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,s=r.length;l<s;l++)r[l].isDataTexture?a.push(jo(r[l].image)):a.push(jo(r[l]))}else a=jo(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zx=0;class Tn extends Dr{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=ci,r=ci,a=ti,l=us,s=ui,c=cr,u=Tn.DEFAULT_ANISOTROPY,d=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ur(),this.name="",this.source=new Qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:($a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Cr?Zt:Pr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Il:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Il:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?Cr:Yf}set encoding(e){$a("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cr?Zt:Pr}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Gf;Tn.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,t=0,n=0,r=1){Jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,u=c[0],d=c[4],h=c[8],f=c[1],v=c[5],b=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(b-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(b+m)<.1&&Math.abs(u+v+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,w=(v+1)/2,A=(p+1)/2,D=(d+f)/4,P=(h+S)/4,X=(b+m)/4;return x>w&&x>A?x<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(x),r=D/n,a=P/n):w>A?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=D/r,a=X/r):A<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),n=P/a,r=X/a),this.set(n,r,a,t),this}let E=Math.sqrt((m-b)*(m-b)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(m-b)/E,this.y=(h-S)/E,this.z=(f-d)/E,this.w=Math.acos((u+v+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gx extends Dr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&($a("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cr?Zt:Pr),this.texture=new Tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Gx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $f extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hx extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,s){let c=n[r+0],u=n[r+1],d=n[r+2],h=n[r+3];const f=a[l+0],v=a[l+1],b=a[l+2],S=a[l+3];if(s===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=v,e[t+2]=b,e[t+3]=S;return}if(h!==S||c!==f||u!==v||d!==b){let m=1-s;const p=c*f+u*v+d*b+h*S,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),D=Math.atan2(A,p*E);m=Math.sin(m*D)/A,s=Math.sin(s*D)/A}const w=s*E;if(c=c*m+f*w,u=u*m+v*w,d=d*m+b*w,h=h*m+S*w,m===1-s){const A=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=A,u*=A,d*=A,h*=A}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,l){const s=n[r],c=n[r+1],u=n[r+2],d=n[r+3],h=a[l],f=a[l+1],v=a[l+2],b=a[l+3];return e[t]=s*b+d*h+c*v-u*f,e[t+1]=c*b+d*f+u*h-s*v,e[t+2]=u*b+d*v+s*f-c*h,e[t+3]=d*b-s*h-c*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,l=e._order,s=Math.cos,c=Math.sin,u=s(n/2),d=s(r/2),h=s(a/2),f=c(n/2),v=c(r/2),b=c(a/2);switch(l){case"XYZ":this._x=f*d*h+u*v*b,this._y=u*v*h-f*d*b,this._z=u*d*b+f*v*h,this._w=u*d*h-f*v*b;break;case"YXZ":this._x=f*d*h+u*v*b,this._y=u*v*h-f*d*b,this._z=u*d*b-f*v*h,this._w=u*d*h+f*v*b;break;case"ZXY":this._x=f*d*h-u*v*b,this._y=u*v*h+f*d*b,this._z=u*d*b+f*v*h,this._w=u*d*h-f*v*b;break;case"ZYX":this._x=f*d*h-u*v*b,this._y=u*v*h+f*d*b,this._z=u*d*b-f*v*h,this._w=u*d*h+f*v*b;break;case"YZX":this._x=f*d*h+u*v*b,this._y=u*v*h+f*d*b,this._z=u*d*b-f*v*h,this._w=u*d*h-f*v*b;break;case"XZY":this._x=f*d*h-u*v*b,this._y=u*v*h-f*d*b,this._z=u*d*b+f*v*h,this._w=u*d*h+f*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],s=t[5],c=t[9],u=t[2],d=t[6],h=t[10],f=n+s+h;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-c)*v,this._y=(a-u)*v,this._z=(l-r)*v}else if(n>s&&n>h){const v=2*Math.sqrt(1+n-s-h);this._w=(d-c)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+u)/v}else if(s>h){const v=2*Math.sqrt(1+s-n-h);this._w=(a-u)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+h-n-s);this._w=(l-r)/v,this._x=(a+u)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,s=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+l*s+r*u-a*c,this._y=r*d+l*c+a*s-n*u,this._z=a*d+l*u+n*c-r*s,this._w=l*d-n*s-r*c-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let s=l*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),d=Math.atan2(u,s),h=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=l*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,t=0,n=0){ce.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,s=e.z,c=e.w,u=c*t+l*r-s*n,d=c*n+s*t-a*r,h=c*r+a*n-l*t,f=-a*t-l*n-s*r;return this.x=u*c+f*-a+d*-s-h*-l,this.y=d*c+f*-l+h*-a-u*-s,this.z=h*c+f*-s+u*-l-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*l-n*c,this.z=n*s-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new ce,Uu=new Ir;class gs{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let l=0,s=a.count;l<s;l++)Ni.fromBufferAttribute(a,l).applyMatrix4(e.matrixWorld),this.expandByPoint(Ni)}else r.boundingBox===null&&r.computeBoundingBox(),Br.copy(r.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),Ss.subVectors(this.max,Na),zr.subVectors(e.a,Na),Gr.subVectors(e.b,Na),Hr.subVectors(e.c,Na),tr.subVectors(Gr,zr),nr.subVectors(Hr,Gr),hr.subVectors(zr,Hr);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-hr.z,hr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,hr.z,0,-hr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-hr.y,hr.x,0];return!qo(t,zr,Gr,Hr,Ss)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,zr,Gr,Hr,Ss))?!1:(Ms.crossVectors(tr,nr),t=[Ms.x,Ms.y,Ms.z],qo(t,zr,Gr,Hr,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Ni=new ce,Br=new gs,zr=new ce,Gr=new ce,Hr=new ce,tr=new ce,nr=new ce,hr=new ce,Na=new ce,Ss=new ce,Ms=new ce,pr=new ce;function qo(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){pr.fromArray(i,a);const s=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),c=e.dot(pr),u=t.dot(pr),d=n.dot(pr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>s)return!1}return!0}const Vx=new gs,Oa=new ce,Yo=new ce;class oc{constructor(e=new ce,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vx.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Oa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Yo)),this.expandByPoint(Oa.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new ce,Ko=new ce,Es=new ce,ir=new ce,Zo=new ce,ws=new ce,Jo=new ce;class eh{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ko.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(Ko);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Es),s=ir.dot(this.direction),c=-ir.dot(Es),u=ir.lengthSq(),d=Math.abs(1-l*l);let h,f,v,b;if(d>0)if(h=l*c-s,f=l*s-c,b=a*d,h>=0)if(f>=-b)if(f<=b){const S=1/d;h*=S,f*=S,v=h*(h+l*f+2*s)+f*(l*h+f+2*c)+u}else f=a,h=Math.max(0,-(l*f+s)),v=-h*h+f*(f+2*c)+u;else f=-a,h=Math.max(0,-(l*f+s)),v=-h*h+f*(f+2*c)+u;else f<=-b?(h=Math.max(0,-(-l*a+s)),f=h>0?-a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u):f<=b?(h=0,f=Math.min(Math.max(-a,-c),a),v=f*(f+2*c)+u):(h=Math.max(0,-(l*a+s)),f=h>0?a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u);else f=l>0?-a:a,h=Math.max(0,-(l*f+s)),v=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ko).addScaledVector(Es,f),v}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),r=Oi.dot(Oi)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),s=n-l,c=n+l;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,s,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(a=(e.min.y-f.y)*d,l=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,l=(e.min.y-f.y)*d),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,r,a){Zo.subVectors(t,e),ws.subVectors(n,e),Jo.crossVectors(Zo,ws);let l=this.direction.dot(Jo),s;if(l>0){if(r)return null;s=1}else if(l<0)s=-1,l=-l;else return null;ir.subVectors(this.origin,e);const c=s*this.direction.dot(ws.crossVectors(ir,ws));if(c<0)return null;const u=s*this.direction.dot(Zo.cross(ir));if(u<0||c+u>l)return null;const d=-s*ir.dot(Jo);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,n,r,a,l,s,c,u,d,h,f,v,b,S,m){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,s,c,u,d,h,f,v,b,S,m)}set(e,t,n,r,a,l,s,c,u,d,h,f,v,b,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=l,p[9]=s,p[13]=c,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=v,p[7]=b,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),a=1/Vr.setFromMatrixColumn(e,1).length(),l=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),s=Math.sin(n),c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=l*d,v=l*h,b=s*d,S=s*h;t[0]=c*d,t[4]=-c*h,t[8]=u,t[1]=v+b*u,t[5]=f-S*u,t[9]=-s*c,t[2]=S-f*u,t[6]=b+v*u,t[10]=l*c}else if(e.order==="YXZ"){const f=c*d,v=c*h,b=u*d,S=u*h;t[0]=f+S*s,t[4]=b*s-v,t[8]=l*u,t[1]=l*h,t[5]=l*d,t[9]=-s,t[2]=v*s-b,t[6]=S+f*s,t[10]=l*c}else if(e.order==="ZXY"){const f=c*d,v=c*h,b=u*d,S=u*h;t[0]=f-S*s,t[4]=-l*h,t[8]=b+v*s,t[1]=v+b*s,t[5]=l*d,t[9]=S-f*s,t[2]=-l*u,t[6]=s,t[10]=l*c}else if(e.order==="ZYX"){const f=l*d,v=l*h,b=s*d,S=s*h;t[0]=c*d,t[4]=b*u-v,t[8]=f*u+S,t[1]=c*h,t[5]=S*u+f,t[9]=v*u-b,t[2]=-u,t[6]=s*c,t[10]=l*c}else if(e.order==="YZX"){const f=l*c,v=l*u,b=s*c,S=s*u;t[0]=c*d,t[4]=S-f*h,t[8]=b*h+v,t[1]=h,t[5]=l*d,t[9]=-s*d,t[2]=-u*d,t[6]=v*h+b,t[10]=f-S*h}else if(e.order==="XZY"){const f=l*c,v=l*u,b=s*c,S=s*u;t[0]=c*d,t[4]=-h,t[8]=u*d,t[1]=f*h+S,t[5]=l*d,t[9]=v*h-b,t[2]=b*h-v,t[6]=s*d,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wx,e,jx)}lookAt(e,t,n){const r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),rr.crossVectors(n,Hn),rr.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),rr.crossVectors(n,Hn)),rr.normalize(),Ts.crossVectors(Hn,rr),r[0]=rr.x,r[4]=Ts.x,r[8]=Hn.x,r[1]=rr.y,r[5]=Ts.y,r[9]=Hn.y,r[2]=rr.z,r[6]=Ts.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],s=n[4],c=n[8],u=n[12],d=n[1],h=n[5],f=n[9],v=n[13],b=n[2],S=n[6],m=n[10],p=n[14],E=n[3],x=n[7],w=n[11],A=n[15],D=r[0],P=r[4],X=r[8],_=r[12],M=r[1],ie=r[5],B=r[9],O=r[13],F=r[2],H=r[6],me=r[10],oe=r[14],ne=r[3],Me=r[7],Q=r[11],V=r[15];return a[0]=l*D+s*M+c*F+u*ne,a[4]=l*P+s*ie+c*H+u*Me,a[8]=l*X+s*B+c*me+u*Q,a[12]=l*_+s*O+c*oe+u*V,a[1]=d*D+h*M+f*F+v*ne,a[5]=d*P+h*ie+f*H+v*Me,a[9]=d*X+h*B+f*me+v*Q,a[13]=d*_+h*O+f*oe+v*V,a[2]=b*D+S*M+m*F+p*ne,a[6]=b*P+S*ie+m*H+p*Me,a[10]=b*X+S*B+m*me+p*Q,a[14]=b*_+S*O+m*oe+p*V,a[3]=E*D+x*M+w*F+A*ne,a[7]=E*P+x*ie+w*H+A*Me,a[11]=E*X+x*B+w*me+A*Q,a[15]=E*_+x*O+w*oe+A*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],s=e[5],c=e[9],u=e[13],d=e[2],h=e[6],f=e[10],v=e[14],b=e[3],S=e[7],m=e[11],p=e[15];return b*(+a*c*h-r*u*h-a*s*f+n*u*f+r*s*v-n*c*v)+S*(+t*c*v-t*u*f+a*l*f-r*l*v+r*u*d-a*c*d)+m*(+t*u*h-t*s*v-a*l*h+n*l*v+a*s*d-n*u*d)+p*(-r*s*d-t*c*h+t*s*f+r*l*h-n*l*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],v=e[11],b=e[12],S=e[13],m=e[14],p=e[15],E=h*m*u-S*f*u+S*c*v-s*m*v-h*c*p+s*f*p,x=b*f*u-d*m*u-b*c*v+l*m*v+d*c*p-l*f*p,w=d*S*u-b*h*u+b*s*v-l*S*v-d*s*p+l*h*p,A=b*h*c-d*S*c-b*s*f+l*S*f+d*s*m-l*h*m,D=t*E+n*x+r*w+a*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=E*P,e[1]=(S*f*a-h*m*a-S*r*v+n*m*v+h*r*p-n*f*p)*P,e[2]=(s*m*a-S*c*a+S*r*u-n*m*u-s*r*p+n*c*p)*P,e[3]=(h*c*a-s*f*a-h*r*u+n*f*u+s*r*v-n*c*v)*P,e[4]=x*P,e[5]=(d*m*a-b*f*a+b*r*v-t*m*v-d*r*p+t*f*p)*P,e[6]=(b*c*a-l*m*a-b*r*u+t*m*u+l*r*p-t*c*p)*P,e[7]=(l*f*a-d*c*a+d*r*u-t*f*u-l*r*v+t*c*v)*P,e[8]=w*P,e[9]=(b*h*a-d*S*a-b*n*v+t*S*v+d*n*p-t*h*p)*P,e[10]=(l*S*a-b*s*a+b*n*u-t*S*u-l*n*p+t*s*p)*P,e[11]=(d*s*a-l*h*a-d*n*u+t*h*u+l*n*v-t*s*v)*P,e[12]=A*P,e[13]=(d*S*r-b*h*r+b*n*f-t*S*f-d*n*m+t*h*m)*P,e[14]=(b*s*r-l*S*r-b*n*c+t*S*c+l*n*m-t*s*m)*P,e[15]=(l*h*r-d*s*r+d*n*c-t*h*c-l*n*f+t*s*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,s=e.y,c=e.z,u=a*l,d=a*s;return this.set(u*l+n,u*s-r*c,u*c+r*s,0,u*s+r*c,d*s+n,d*c-r*l,0,u*c-r*s,d*c+r*l,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,s=t._z,c=t._w,u=a+a,d=l+l,h=s+s,f=a*u,v=a*d,b=a*h,S=l*d,m=l*h,p=s*h,E=c*u,x=c*d,w=c*h,A=n.x,D=n.y,P=n.z;return r[0]=(1-(S+p))*A,r[1]=(v+w)*A,r[2]=(b-x)*A,r[3]=0,r[4]=(v-w)*D,r[5]=(1-(f+p))*D,r[6]=(m+E)*D,r[7]=0,r[8]=(b+x)*P,r[9]=(m-E)*P,r[10]=(1-(f+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Vr.set(r[0],r[1],r[2]).length();const l=Vr.set(r[4],r[5],r[6]).length(),s=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const u=1/a,d=1/l,h=1/s;return si.elements[0]*=u,si.elements[1]*=u,si.elements[2]*=u,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),n.x=a,n.y=l,n.z=s,this}makePerspective(e,t,n,r,a,l,s=ji){const c=this.elements,u=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let v,b;if(s===ji)v=-(l+a)/(l-a),b=-2*l*a/(l-a);else if(s===lo)v=-l/(l-a),b=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,l,s=ji){const c=this.elements,u=1/(t-e),d=1/(n-r),h=1/(l-a),f=(t+e)*u,v=(n+r)*d;let b,S;if(s===ji)b=(l+a)*h,S=-2*h;else if(s===lo)b=a*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=S,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new ce,si=new sn,Wx=new ce(0,0,0),jx=new ce(1,1,1),rr=new ce,Ts=new ce,Hn=new ce,Nu=new sn,Ou=new Ir;class bo{constructor(e=0,t=0,n=0,r=bo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],s=r[8],c=r[1],u=r[5],d=r[9],h=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(In(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-In(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(In(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(In(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,v));break;case"XZY":this._z=Math.asin(-In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bo.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xx=0;const ku=new ce,Wr=new Ir,ki=new sn,As=new ce,ka=new ce,qx=new ce,Yx=new Ir,Fu=new ce(1,0,0),Bu=new ce(0,1,0),zu=new ce(0,0,1),Kx={type:"added"},Zx={type:"removed"};class An extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new ce,t=new bo,n=new Ir,r=new ce(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new sn},normalMatrix:{value:new Dt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(ka,As,this.up):ki.lookAt(As,ka,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(ki),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const l=this.children[r].getObjectsByProperty(e,t);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,Yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=l(e.geometries),c=l(e.materials),u=l(e.textures),d=l(e.images),h=l(e.shapes),f=l(e.skeletons),v=l(e.animations),b=l(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=r,n;function l(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}An.DEFAULT_UP=new ce(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new ce,Fi=new ce,Qo=new ce,Bi=new ce,jr=new ce,Xr=new ce,Gu=new ce,$o=new ce,el=new ce,tl=new ce;let Rs=!1;class ni{constructor(e=new ce,t=new ce,n=new ce){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),oi.subVectors(e,t),r.cross(oi);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){oi.subVectors(r,t),Fi.subVectors(n,t),Qo.subVectors(e,t);const l=oi.dot(oi),s=oi.dot(Fi),c=oi.dot(Qo),u=Fi.dot(Fi),d=Fi.dot(Qo),h=l*u-s*s;if(h===0)return a.set(-2,-1,-1);const f=1/h,v=(u*c-s*d)*f,b=(l*d-s*c)*f;return a.set(1-v-b,b,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bi),Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(e,t,n,r,a,l,s,c){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(e,t,n,r,a,l,s,c)}static getInterpolation(e,t,n,r,a,l,s,c){return this.getBarycoord(e,t,n,r,Bi),c.setScalar(0),c.addScaledVector(a,Bi.x),c.addScaledVector(l,Bi.y),c.addScaledVector(s,Bi.z),c}static isFrontFacing(e,t,n,r){return oi.subVectors(n,t),Fi.subVectors(e,t),oi.cross(Fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),oi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,s;jr.subVectors(r,n),Xr.subVectors(a,n),$o.subVectors(e,n);const c=jr.dot($o),u=Xr.dot($o);if(c<=0&&u<=0)return t.copy(n);el.subVectors(e,r);const d=jr.dot(el),h=Xr.dot(el);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return l=c/(c-d),t.copy(n).addScaledVector(jr,l);tl.subVectors(e,a);const v=jr.dot(tl),b=Xr.dot(tl);if(b>=0&&v<=b)return t.copy(a);const S=v*u-c*b;if(S<=0&&u>=0&&b<=0)return s=u/(u-b),t.copy(n).addScaledVector(Xr,s);const m=d*b-v*h;if(m<=0&&h-d>=0&&v-b>=0)return Gu.subVectors(a,r),s=(h-d)/(h-d+(v-b)),t.copy(r).addScaledVector(Gu,s);const p=1/(m+S+f);return l=S*p,s=f*p,t.copy(n).addScaledVector(jr,l).addScaledVector(Xr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Jx=0;class La extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=da,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Bf,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==da&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const s in a){const c=a[s];delete c.metadata,l.push(c)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function nl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Jn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Jn.workingColorSpace){if(e=Px(e,1),t=In(t,0,1),n=In(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=nl(l,a,e+1/3),this.g=nl(l,a,e),this.b=nl(l,a,e-1/3)}return Jn.toWorkingColorSpace(this,r),this}setStyle(e,t=Zt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],s=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Jn.fromWorkingColorSpace(wn.copy(this),e),Math.round(In(wn.r*255,0,255))*65536+Math.round(In(wn.g*255,0,255))*256+Math.round(In(wn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jn.workingColorSpace){Jn.fromWorkingColorSpace(wn.copy(this),t);const n=wn.r,r=wn.g,a=wn.b,l=Math.max(n,r,a),s=Math.min(n,r,a);let c,u;const d=(s+l)/2;if(s===l)c=0,u=0;else{const h=l-s;switch(u=d<=.5?h/(l+s):h/(2-l-s),l){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=Jn.workingColorSpace){return Jn.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Zt){Jn.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,n=wn.g,r=wn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(li),li.h+=e,li.s+=t,li.l+=n,this.setHSL(li.h,li.s,li.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Cs);const n=Ho(li.h,Cs.h,t),r=Ho(li.s,Cs.s,t),a=Ho(li.l,Cs.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Bt;Bt.NAMES=nh;class ih extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new ce,Ps=new at;class mi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ul,this.updateRange={offset:0,count:-1},this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class rh extends mi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ah extends mi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yi extends mi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qx=0;const Kn=new sn,il=new An,qr=new ce,Vn=new gs,Fa=new gs,_n=new ce;class $i extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zf(e)?ah:rh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Dt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Vn.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ce,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const s=t[a];Fa.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(Vn.min,Fa.min),Vn.expandByPoint(_n),_n.addVectors(Vn.max,Fa.max),Vn.expandByPoint(_n)):(Vn.expandByPoint(Fa.min),Vn.expandByPoint(Fa.max))}Vn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)_n.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(_n));if(t)for(let a=0,l=t.length;a<l;a++){const s=t[a],c=this.morphTargetsRelative;for(let u=0,d=s.count;u<d;u++)_n.fromBufferAttribute(s,u),c&&(qr.fromBufferAttribute(e,u),_n.add(qr)),r=Math.max(r,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let M=0;M<s;M++)u[M]=new ce,d[M]=new ce;const h=new ce,f=new ce,v=new ce,b=new at,S=new at,m=new at,p=new ce,E=new ce;function x(M,ie,B){h.fromArray(r,M*3),f.fromArray(r,ie*3),v.fromArray(r,B*3),b.fromArray(l,M*2),S.fromArray(l,ie*2),m.fromArray(l,B*2),f.sub(h),v.sub(h),S.sub(b),m.sub(b);const O=1/(S.x*m.y-m.x*S.y);isFinite(O)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(v,-S.y).multiplyScalar(O),E.copy(v).multiplyScalar(S.x).addScaledVector(f,-m.x).multiplyScalar(O),u[M].add(p),u[ie].add(p),u[B].add(p),d[M].add(E),d[ie].add(E),d[B].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let M=0,ie=w.length;M<ie;++M){const B=w[M],O=B.start,F=B.count;for(let H=O,me=O+F;H<me;H+=3)x(n[H+0],n[H+1],n[H+2])}const A=new ce,D=new ce,P=new ce,X=new ce;function _(M){P.fromArray(a,M*3),X.copy(P);const ie=u[M];A.copy(ie),A.sub(P.multiplyScalar(P.dot(ie))).normalize(),D.crossVectors(X,ie);const O=D.dot(d[M])<0?-1:1;c[M*4]=A.x,c[M*4+1]=A.y,c[M*4+2]=A.z,c[M*4+3]=O}for(let M=0,ie=w.length;M<ie;++M){const B=w[M],O=B.start,F=B.count;for(let H=O,me=O+F;H<me;H+=3)_(n[H+0]),_(n[H+1]),_(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);const r=new ce,a=new ce,l=new ce,s=new ce,c=new ce,u=new ce,d=new ce,h=new ce;if(e)for(let f=0,v=e.count;f<v;f+=3){const b=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,m),d.subVectors(l,a),h.subVectors(r,a),d.cross(h),s.fromBufferAttribute(n,b),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,m),s.add(d),c.add(d),u.add(d),n.setXYZ(b,s.x,s.y,s.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),d.subVectors(l,a),h.subVectors(r,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(s,c){const u=s.array,d=s.itemSize,h=s.normalized,f=new u.constructor(c.length*d);let v=0,b=0;for(let S=0,m=c.length;S<m;S++){s.isInterleavedBufferAttribute?v=c[S]*s.data.stride+s.offset:v=c[S]*d;for(let p=0;p<d;p++)f[b++]=u[v++]}return new mi(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,n=this.index.array,r=this.attributes;for(const s in r){const c=r[s],u=e(c,n);t.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const c=[],u=a[s];for(let d=0,h=u.length;d<h;d++){const f=u[d],v=e(f,n);c.push(v)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let s=0,c=l.length;s<c;s++){const u=l[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const v=u[h];d.push(v.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],h=a[u];for(let f=0,v=h.length;f<v;f++)d.push(h[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,d=l.length;u<d;u++){const h=l[u];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new sn,mr=new eh,Ls=new oc,Vu=new ce,Yr=new ce,Kr=new ce,Zr=new ce,rl=new ce,Is=new ce,Ds=new at,Us=new at,Ns=new at,Wu=new ce,ju=new ce,Xu=new ce,Os=new ce,ks=new ce;class Wt extends An{constructor(e=new $i,t=new ih){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Is.set(0,0,0);for(let c=0,u=a.length;c<u;c++){const d=s[c],h=a[c];d!==0&&(rl.fromBufferAttribute(h,e),l?Is.addScaledVector(rl,d):Is.addScaledVector(rl.sub(t),d))}t.add(Is)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(a),mr.copy(e.ray).recast(e.near),!(Ls.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ls,Vu)===null||mr.origin.distanceToSquared(Vu)>(e.far-e.near)**2))&&(Hu.copy(a).invert(),mr.copy(e.ray).applyMatrix4(Hu),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,s=a.index,c=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,v=a.drawRange;if(s!==null)if(Array.isArray(l))for(let b=0,S=f.length;b<S;b++){const m=f[b],p=l[m.materialIndex],E=Math.max(m.start,v.start),x=Math.min(s.count,Math.min(m.start+m.count,v.start+v.count));for(let w=E,A=x;w<A;w+=3){const D=s.getX(w),P=s.getX(w+1),X=s.getX(w+2);r=Fs(this,p,e,n,u,d,h,D,P,X),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),S=Math.min(s.count,v.start+v.count);for(let m=b,p=S;m<p;m+=3){const E=s.getX(m),x=s.getX(m+1),w=s.getX(m+2);r=Fs(this,l,e,n,u,d,h,E,x,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(l))for(let b=0,S=f.length;b<S;b++){const m=f[b],p=l[m.materialIndex],E=Math.max(m.start,v.start),x=Math.min(c.count,Math.min(m.start+m.count,v.start+v.count));for(let w=E,A=x;w<A;w+=3){const D=w,P=w+1,X=w+2;r=Fs(this,p,e,n,u,d,h,D,P,X),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),S=Math.min(c.count,v.start+v.count);for(let m=b,p=S;m<p;m+=3){const E=m,x=m+1,w=m+2;r=Fs(this,l,e,n,u,d,h,E,x,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function $x(i,e,t,n,r,a,l,s){let c;if(e.side===Fn?c=n.intersectTriangle(l,a,r,!0,s):c=n.intersectTriangle(r,a,l,e.side===Ri,s),c===null)return null;ks.copy(s),ks.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(ks);return u<t.near||u>t.far?null:{distance:u,point:ks.clone(),object:i}}function Fs(i,e,t,n,r,a,l,s,c,u){i.getVertexPosition(s,Yr),i.getVertexPosition(c,Kr),i.getVertexPosition(u,Zr);const d=$x(i,e,t,n,Yr,Kr,Zr,Os);if(d){r&&(Ds.fromBufferAttribute(r,s),Us.fromBufferAttribute(r,c),Ns.fromBufferAttribute(r,u),d.uv=ni.getInterpolation(Os,Yr,Kr,Zr,Ds,Us,Ns,new at)),a&&(Ds.fromBufferAttribute(a,s),Us.fromBufferAttribute(a,c),Ns.fromBufferAttribute(a,u),d.uv1=ni.getInterpolation(Os,Yr,Kr,Zr,Ds,Us,Ns,new at),d.uv2=d.uv1),l&&(Wu.fromBufferAttribute(l,s),ju.fromBufferAttribute(l,c),Xu.fromBufferAttribute(l,u),d.normal=ni.getInterpolation(Os,Yr,Kr,Zr,Wu,ju,Xu,new ce),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:c,c:u,normal:new ce,materialIndex:0};ni.getNormal(Yr,Kr,Zr,h.normal),d.face=h}return d}class rn extends $i{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const s=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const c=[],u=[],d=[],h=[];let f=0,v=0;b("z","y","x",-1,-1,n,t,e,l,a,0),b("z","y","x",1,-1,n,t,-e,l,a,1),b("x","z","y",1,1,e,n,t,r,l,2),b("x","z","y",1,-1,e,n,-t,r,l,3),b("x","y","z",1,-1,e,t,n,r,a,4),b("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Yi(u,3)),this.setAttribute("normal",new Yi(d,3)),this.setAttribute("uv",new Yi(h,2));function b(S,m,p,E,x,w,A,D,P,X,_){const M=w/P,ie=A/X,B=w/2,O=A/2,F=D/2,H=P+1,me=X+1;let oe=0,ne=0;const Me=new ce;for(let Q=0;Q<me;Q++){const V=Q*ie-O;for(let fe=0;fe<H;fe++){const Ae=fe*M-B;Me[S]=Ae*E,Me[m]=V*x,Me[p]=F,u.push(Me.x,Me.y,Me.z),Me[S]=0,Me[m]=0,Me[p]=D>0?1:-1,d.push(Me.x,Me.y,Me.z),h.push(fe/P),h.push(1-Q/X),oe+=1}}for(let Q=0;Q<X;Q++)for(let V=0;V<P;V++){const fe=f+V+H*Q,Ae=f+V+H*(Q+1),Se=f+(V+1)+H*(Q+1),Ie=f+(V+1)+H*Q;c.push(fe,Ae,Ie),c.push(Ae,Se,Ie),ne+=6}s.addGroup(v,ne,_),v+=ne,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ea(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pn(i){const e={};for(let t=0;t<i.length;t++){const n=Ea(i[t]);for(const r in n)e[r]=n[r]}return e}function eb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sh(i){return i.getRenderTarget()===null?i.outputColorSpace:Ci}const oh={clone:Ea,merge:Pn};var tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tb,this.fragmentShader=nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=eb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lh extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends lh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,u=l.fullHeight;a+=l.offsetX*r/c,t-=l.offsetY*n/u,r*=l.width/c,n*=l.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jr=-90,Qr=1;class ib extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new jn(Jr,Qr,e,t);r.layers=this.layers,this.add(r);const a=new jn(Jr,Qr,e,t);a.layers=this.layers,this.add(a);const l=new jn(Jr,Qr,e,t);l.layers=this.layers,this.add(l);const s=new jn(Jr,Qr,e,t);s.layers=this.layers,this.add(s);const c=new jn(Jr,Qr,e,t);c.layers=this.layers,this.add(c);const u=new jn(Jr,Qr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,s,c]=t;for(const u of t)this.remove(u);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,s,c,u]=this.children,d=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(d),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ch extends Tn{constructor(e,t,n,r,a,l,s,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:ba,super(e,t,n,r,a,l,s,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rb extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&($a("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cr?Zt:Pr),this.texture=new ch(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rn(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:Ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:qi});a.uniforms.tEquirect.value=t;const l=new Wt(r,a),s=t.minFilter;return t.minFilter===us&&(t.minFilter=ti),new ib(1,10,this).update(e,l),t.minFilter=s,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const al=new ce,ab=new ce,sb=new Dt;class ar{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=al.subVectors(n,t).cross(ab.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(al),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sb.getNormalMatrix(e),r=this.coplanarPoint(al).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new oc,Bs=new ce;class lc{constructor(e=new ar,t=new ar,n=new ar,r=new ar,a=new ar,l=new ar){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ji){const n=this.planes,r=e.elements,a=r[0],l=r[1],s=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],v=r[8],b=r[9],S=r[10],m=r[11],p=r[12],E=r[13],x=r[14],w=r[15];if(n[0].setComponents(c-a,f-u,m-v,w-p).normalize(),n[1].setComponents(c+a,f+u,m+v,w+p).normalize(),n[2].setComponents(c+l,f+d,m+b,w+E).normalize(),n[3].setComponents(c-l,f-d,m-b,w-E).normalize(),n[4].setComponents(c-s,f-h,m-S,w-x).normalize(),t===ji)n[5].setComponents(c+s,f+h,m+S,w+x).normalize();else if(t===lo)n[5].setComponents(s,h,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uh(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ob(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,d){const h=u.array,f=u.usage,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,h,f),u.onUploadCallback();let b;if(h instanceof Float32Array)b=i.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=i.SHORT;else if(h instanceof Uint32Array)b=i.UNSIGNED_INT;else if(h instanceof Int32Array)b=i.INT;else if(h instanceof Int8Array)b=i.BYTE;else if(h instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function a(u,d,h){const f=d.array,v=d.updateRange;i.bindBuffer(h,u),v.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(i.deleteBuffer(d.buffer),n.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,r(u,d)):h.version<u.version&&(a(h.buffer,u,d),h.version=u.version)}return{get:l,remove:s,update:c}}class cc extends $i{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,s=Math.floor(n),c=Math.floor(r),u=s+1,d=c+1,h=e/s,f=t/c,v=[],b=[],S=[],m=[];for(let p=0;p<d;p++){const E=p*f-l;for(let x=0;x<u;x++){const w=x*h-a;b.push(w,-E,0),S.push(0,0,1),m.push(x/s),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<s;E++){const x=E+u*p,w=E+u*(p+1),A=E+1+u*(p+1),D=E+1+u*p;v.push(x,w,D),v.push(w,A,D)}this.setIndex(v),this.setAttribute("position",new Yi(b,3)),this.setAttribute("normal",new Yi(S,3)),this.setAttribute("uv",new Yi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
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
#endif`,ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_b=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xb=`#ifdef USE_IRIDESCENCE
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
#endif`,bb=`#ifdef USE_BUMPMAP
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
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cb=`#define PI 3.141592653589793
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
} // validated`,Pb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",kb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qb=`#ifdef USE_GRADIENTMAP
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
}`,Yb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qb=`uniform bool receiveShadow;
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
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
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
#endif`,a0=`struct PhysicalMaterial {
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
}`,s0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,c0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sy=`uniform sampler2D t2D;
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
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
}`,fy=`#if DEPTH_PACKING == 3200
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
}`,hy=`#define DISTANCE
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
}`,py=`#define DISTANCE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`uniform float scale;
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
}`,_y=`uniform vec3 diffuse;
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
}`,xy=`#include <common>
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
}`,by=`uniform vec3 diffuse;
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
}`,yy=`#define LAMBERT
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
}`,Sy=`#define LAMBERT
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
}`,My=`#define MATCAP
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
}`,Ey=`#define MATCAP
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
}`,wy=`#define NORMAL
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
}`,Ty=`#define NORMAL
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
}`,Ay=`#define PHONG
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
}`,Ry=`#define PHONG
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
}`,Cy=`#define STANDARD
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
}`,Py=`#define STANDARD
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
}`,Ly=`#define TOON
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
}`,Iy=`#define TOON
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
}`,Dy=`uniform float size;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Oy=`uniform vec3 color;
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
}`,ky=`uniform float rotation;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:lb,alphahash_pars_fragment:cb,alphamap_fragment:ub,alphamap_pars_fragment:db,alphatest_fragment:fb,alphatest_pars_fragment:hb,aomap_fragment:pb,aomap_pars_fragment:mb,begin_vertex:vb,beginnormal_vertex:gb,bsdfs:_b,iridescence_fragment:xb,bumpmap_pars_fragment:bb,clipping_planes_fragment:yb,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:Mb,clipping_planes_vertex:Eb,color_fragment:wb,color_pars_fragment:Tb,color_pars_vertex:Ab,color_vertex:Rb,common:Cb,cube_uv_reflection_fragment:Pb,defaultnormal_vertex:Lb,displacementmap_pars_vertex:Ib,displacementmap_vertex:Db,emissivemap_fragment:Ub,emissivemap_pars_fragment:Nb,colorspace_fragment:Ob,colorspace_pars_fragment:kb,envmap_fragment:Fb,envmap_common_pars_fragment:Bb,envmap_pars_fragment:zb,envmap_pars_vertex:Gb,envmap_physical_pars_fragment:$b,envmap_vertex:Hb,fog_vertex:Vb,fog_pars_vertex:Wb,fog_fragment:jb,fog_pars_fragment:Xb,gradientmap_pars_fragment:qb,lightmap_fragment:Yb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Zb,lights_lambert_pars_fragment:Jb,lights_pars_begin:Qb,lights_toon_fragment:e0,lights_toon_pars_fragment:t0,lights_phong_fragment:n0,lights_phong_pars_fragment:i0,lights_physical_fragment:r0,lights_physical_pars_fragment:a0,lights_fragment_begin:s0,lights_fragment_maps:o0,lights_fragment_end:l0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:f0,map_fragment:h0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:v0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:_0,morphcolor_vertex:x0,morphnormal_vertex:b0,morphtarget_pars_vertex:y0,morphtarget_vertex:S0,normal_fragment_begin:M0,normal_fragment_maps:E0,normal_pars_fragment:w0,normal_pars_vertex:T0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:I0,opaque_fragment:D0,packing:U0,premultiplied_alpha_fragment:N0,project_vertex:O0,dithering_fragment:k0,dithering_pars_fragment:F0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:H0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:j0,skinning_pars_vertex:X0,skinning_vertex:q0,skinnormal_vertex:Y0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:$0,transmission_pars_fragment:ey,uv_pars_fragment:ty,uv_pars_vertex:ny,uv_vertex:iy,worldpos_vertex:ry,background_vert:ay,background_frag:sy,backgroundCube_vert:oy,backgroundCube_frag:ly,cube_vert:cy,cube_frag:uy,depth_vert:dy,depth_frag:fy,distanceRGBA_vert:hy,distanceRGBA_frag:py,equirect_vert:my,equirect_frag:vy,linedashed_vert:gy,linedashed_frag:_y,meshbasic_vert:xy,meshbasic_frag:by,meshlambert_vert:yy,meshlambert_frag:Sy,meshmatcap_vert:My,meshmatcap_frag:Ey,meshnormal_vert:wy,meshnormal_frag:Ty,meshphong_vert:Ay,meshphong_frag:Ry,meshphysical_vert:Cy,meshphysical_frag:Py,meshtoon_vert:Ly,meshtoon_frag:Iy,points_vert:Dy,points_frag:Uy,shadow_vert:Ny,shadow_frag:Oy,sprite_vert:ky,sprite_frag:Fy},Ve={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},bi={basic:{uniforms:Pn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Pn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Pn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Pn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Pn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Pn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Pn([Ve.points,Ve.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Pn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Pn([Ve.common,Ve.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Pn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Pn([Ve.sprite,Ve.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Pn([Ve.common,Ve.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Pn([Ve.lights,Ve.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};bi.physical={uniforms:Pn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const zs={r:0,b:0,g:0};function By(i,e,t,n,r,a,l){const s=new Bt(0);let c=a===!0?0:1,u,d,h=null,f=0,v=null;function b(m,p){let E=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?S(s,c):x&&x.isColor&&(S(x,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,l):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===_o)?(d===void 0&&(d=new Wt(new rn(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Ea(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=x.colorSpace!==Zt,(h!==x||f!==x.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,v=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Wt(new cc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Ea(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Zt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,v=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function S(m,p){m.getRGB(zs,sh(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,p,l)}return{getClearColor:function(){return s},setClearColor:function(m,p=1){s.set(m),c=p,S(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,S(s,c)},render:b}}function zy(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,s={},c=m(null);let u=c,d=!1;function h(F,H,me,oe,ne){let Me=!1;if(l){const Q=S(oe,me,H);u!==Q&&(u=Q,v(u.object)),Me=p(F,oe,me,ne),Me&&E(F,oe,me,ne)}else{const Q=H.wireframe===!0;(u.geometry!==oe.id||u.program!==me.id||u.wireframe!==Q)&&(u.geometry=oe.id,u.program=me.id,u.wireframe=Q,Me=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(Me||d)&&(d=!1,X(F,H,me,oe),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function v(F){return n.isWebGL2?i.bindVertexArray(F):a.bindVertexArrayOES(F)}function b(F){return n.isWebGL2?i.deleteVertexArray(F):a.deleteVertexArrayOES(F)}function S(F,H,me){const oe=me.wireframe===!0;let ne=s[F.id];ne===void 0&&(ne={},s[F.id]=ne);let Me=ne[H.id];Me===void 0&&(Me={},ne[H.id]=Me);let Q=Me[oe];return Q===void 0&&(Q=m(f()),Me[oe]=Q),Q}function m(F){const H=[],me=[],oe=[];for(let ne=0;ne<r;ne++)H[ne]=0,me[ne]=0,oe[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:me,attributeDivisors:oe,object:F,attributes:{},index:null}}function p(F,H,me,oe){const ne=u.attributes,Me=H.attributes;let Q=0;const V=me.getAttributes();for(const fe in V)if(V[fe].location>=0){const Se=ne[fe];let Ie=Me[fe];if(Ie===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),Se===void 0||Se.attribute!==Ie||Ie&&Se.data!==Ie.data)return!0;Q++}return u.attributesNum!==Q||u.index!==oe}function E(F,H,me,oe){const ne={},Me=H.attributes;let Q=0;const V=me.getAttributes();for(const fe in V)if(V[fe].location>=0){let Se=Me[fe];Se===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(Se=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(Se=F.instanceColor));const Ie={};Ie.attribute=Se,Se&&Se.data&&(Ie.data=Se.data),ne[fe]=Ie,Q++}u.attributes=ne,u.attributesNum=Q,u.index=oe}function x(){const F=u.newAttributes;for(let H=0,me=F.length;H<me;H++)F[H]=0}function w(F){A(F,0)}function A(F,H){const me=u.newAttributes,oe=u.enabledAttributes,ne=u.attributeDivisors;me[F]=1,oe[F]===0&&(i.enableVertexAttribArray(F),oe[F]=1),ne[F]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,H),ne[F]=H)}function D(){const F=u.newAttributes,H=u.enabledAttributes;for(let me=0,oe=H.length;me<oe;me++)H[me]!==F[me]&&(i.disableVertexAttribArray(me),H[me]=0)}function P(F,H,me,oe,ne,Me,Q){Q===!0?i.vertexAttribIPointer(F,H,me,ne,Me):i.vertexAttribPointer(F,H,me,oe,ne,Me)}function X(F,H,me,oe){if(n.isWebGL2===!1&&(F.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const ne=oe.attributes,Me=me.getAttributes(),Q=H.defaultAttributeValues;for(const V in Me){const fe=Me[V];if(fe.location>=0){let Ae=ne[V];if(Ae===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(Ae=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(Ae=F.instanceColor)),Ae!==void 0){const Se=Ae.normalized,Ie=Ae.itemSize,Ue=t.get(Ae);if(Ue===void 0)continue;const Be=Ue.buffer,ze=Ue.type,et=Ue.bytesPerElement,xt=n.isWebGL2===!0&&(ze===i.INT||ze===i.UNSIGNED_INT||Ae.gpuType===Hf);if(Ae.isInterleavedBufferAttribute){const Qe=Ae.data,te=Qe.stride,Mt=Ae.offset;if(Qe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<fe.locationSize;Oe++)A(fe.location+Oe,Qe.meshPerAttribute);F.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Oe=0;Oe<fe.locationSize;Oe++)w(fe.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Oe=0;Oe<fe.locationSize;Oe++)P(fe.location+Oe,Ie/fe.locationSize,ze,Se,te*et,(Mt+Ie/fe.locationSize*Oe)*et,xt)}else{if(Ae.isInstancedBufferAttribute){for(let Qe=0;Qe<fe.locationSize;Qe++)A(fe.location+Qe,Ae.meshPerAttribute);F.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Qe=0;Qe<fe.locationSize;Qe++)w(fe.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Qe=0;Qe<fe.locationSize;Qe++)P(fe.location+Qe,Ie/fe.locationSize,ze,Se,Ie*et,Ie/fe.locationSize*Qe*et,xt)}}else if(Q!==void 0){const Se=Q[V];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(fe.location,Se);break;case 3:i.vertexAttrib3fv(fe.location,Se);break;case 4:i.vertexAttrib4fv(fe.location,Se);break;default:i.vertexAttrib1fv(fe.location,Se)}}}}D()}function _(){B();for(const F in s){const H=s[F];for(const me in H){const oe=H[me];for(const ne in oe)b(oe[ne].object),delete oe[ne];delete H[me]}delete s[F]}}function M(F){if(s[F.id]===void 0)return;const H=s[F.id];for(const me in H){const oe=H[me];for(const ne in oe)b(oe[ne].object),delete oe[ne];delete H[me]}delete s[F.id]}function ie(F){for(const H in s){const me=s[H];if(me[F.id]===void 0)continue;const oe=me[F.id];for(const ne in oe)b(oe[ne].object),delete oe[ne];delete me[F.id]}}function B(){O(),d=!0,u!==c&&(u=c,v(u.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:O,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfProgram:ie,initAttributes:x,enableAttribute:w,disableUnusedAttributes:D}}function Gy(i,e,t,n){const r=n.isWebGL2;let a;function l(u){a=u}function s(u,d){i.drawArrays(a,u,d),t.update(d,a,1)}function c(u,d,h){if(h===0)return;let f,v;if(r)f=i,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](a,u,d,h),t.update(d,a,h)}this.setMode=l,this.render=s,this.renderInstances=c}function Hy(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const c=a(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const u=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,w=l||e.has("OES_texture_float"),A=x&&w,D=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:A,maxSamples:D}}function Vy(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new ar,s=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const v=h.length!==0||f||n!==0||r;return r=f,n=h.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,v){const b=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||b===null||b.length===0||a&&!m)a?d(null):u();else{const E=a?0:n,x=E*4;let w=p.clippingState||null;c.value=w,w=d(b,f,x,v);for(let A=0;A!==x;++A)w[A]=t[A];p.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,v,b){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=c.value,b!==!0||m===null){const p=v+S*4,E=f.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,w=v;x!==S;++x,w+=4)l.copy(h[x]).applyMatrix4(E,s),l.normal.toArray(m,w),m[w+3]=l.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Wy(i){let e=new WeakMap;function t(l,s){return s===oo?l.mapping=ba:s===Ll&&(l.mapping=ya),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const s=l.mapping;if(s===oo||s===Ll)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const u=new rb(c.height/2);return u.fromEquirectangularTexture(i,l),e.set(l,u),l.addEventListener("dispose",r),t(u.texture,l.mapping)}else return null}}return l}function r(l){const s=l.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class dh extends lh{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,l=a+u*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const aa=4,qu=[.125,.215,.35,.446,.526,.582],br=20,sl=new dh,Yu=new Bt;let ol=null;const _r=(1+Math.sqrt(5))/2,$r=1/_r,Ku=[new ce(1,1,1),new ce(-1,1,1),new ce(1,1,-1),new ce(-1,1,-1),new ce(0,_r,$r),new ce(0,_r,-$r),new ce($r,0,_r),new ce(-$r,0,_r),new ce(_r,$r,0),new ce(-_r,$r,0)];class Zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ol=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol),e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ba||e.mapping===ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Sa,format:ui,colorSpace:Ci,depthBuffer:!1},r=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(a)),this._blurMaterial=Xy(a,e,t)}return r}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,n,r){const s=new jn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Yu),d.toneMapping=lr,d.autoClear=!1;const v=new ih({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),b=new Wt(new rn,v);let S=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,S=!0):(v.color.copy(Yu),S=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(s.up.set(0,c[p],0),s.lookAt(u[p],0,0)):E===1?(s.up.set(0,0,c[p]),s.lookAt(0,u[p],0)):(s.up.set(0,c[p],0),s.lookAt(0,0,u[p]));const x=this._cubeSize;Gs(r,E*x,p>2?x:0,x,x),d.setRenderTarget(r),S&&d.render(b,s),d.render(e,s)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ba||e.mapping===ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new Wt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;Gs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Ku[(r-1)%Ku.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,s){const c=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Wt(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*br-1),S=a/b,m=isFinite(a)?1+Math.floor(d*S):br;m>br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let E=0;for(let P=0;P<br;++P){const X=P/S,_=Math.exp(-X*X/2);p.push(_),P===0?E+=_:P<m&&(E+=2*_)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=l==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:x}=this;f.dTheta.value=b,f.mipInt.value=x-n;const w=this._sizeLods[r],A=3*w*(r>x-aa?r-x+aa:0),D=4*(this._cubeSize-w);Gs(t,A,D,3*w,2*w),c.setRenderTarget(t),c.render(h,sl)}}function jy(i){const e=[],t=[],n=[];let r=i;const a=i-aa+1+qu.length;for(let l=0;l<a;l++){const s=Math.pow(2,r);t.push(s);let c=1/s;l>i-aa?c=qu[l-i+aa-1]:l===0&&(c=0),n.push(c);const u=1/(s-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,b=6,S=3,m=2,p=1,E=new Float32Array(S*b*v),x=new Float32Array(m*b*v),w=new Float32Array(p*b*v);for(let D=0;D<v;D++){const P=D%3*2/3-1,X=D>2?0:-1,_=[P,X,0,P+2/3,X,0,P+2/3,X+1,0,P,X,0,P+2/3,X+1,0,P,X+1,0];E.set(_,S*b*D),x.set(f,m*b*D);const M=[D,D,D,D,D,D];w.set(M,p*b*D)}const A=new $i;A.setAttribute("position",new mi(E,S)),A.setAttribute("uv",new mi(x,m)),A.setAttribute("faceIndex",new mi(w,p)),e.push(A),r>aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ju(i,e,t){const n=new Zi(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Xy(i,e,t){const n=new Float32Array(br),r=new ce(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Qu(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function $u(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function qy(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,u=c===oo||c===Ll,d=c===ba||c===ya;if(u||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Zu(i)),h=u?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(u&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new Zu(i));const f=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let c=0;const u=6;for(let d=0;d<u;d++)s[d]!==void 0&&c++;return c===u}function a(s){const c=s.target;c.removeEventListener("dispose",a);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Yy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ky(i,e,t,n){const r={},a=new WeakMap;function l(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const b in f.attributes)e.remove(f.attributes[b]);for(const b in f.morphAttributes){const S=f.morphAttributes[b];for(let m=0,p=S.length;m<p;m++)e.remove(S[m])}f.removeEventListener("dispose",l),delete r[f.id];const v=a.get(f);v&&(e.remove(v),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",l),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const b in f)e.update(f[b],i.ARRAY_BUFFER);const v=h.morphAttributes;for(const b in v){const S=v[b];for(let m=0,p=S.length;m<p;m++)e.update(S[m],i.ARRAY_BUFFER)}}function u(h){const f=[],v=h.index,b=h.attributes.position;let S=0;if(v!==null){const E=v.array;S=v.version;for(let x=0,w=E.length;x<w;x+=3){const A=E[x+0],D=E[x+1],P=E[x+2];f.push(A,D,D,P,P,A)}}else if(b!==void 0){const E=b.array;S=b.version;for(let x=0,w=E.length/3-1;x<w;x+=3){const A=x+0,D=x+1,P=x+2;f.push(A,D,D,P,P,A)}}else return;const m=new(Zf(f)?ah:rh)(f,1);m.version=S;const p=a.get(h);p&&e.remove(p),a.set(h,m)}function d(h){const f=a.get(h);if(f){const v=h.index;v!==null&&f.version<v.version&&u(h)}else u(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function Zy(i,e,t,n){const r=n.isWebGL2;let a;function l(f){a=f}let s,c;function u(f){s=f.type,c=f.bytesPerElement}function d(f,v){i.drawElements(a,v,s,f*c),t.update(v,a,1)}function h(f,v,b){if(b===0)return;let S,m;if(r)S=i,m="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[m](a,v,s,f*c,b),t.update(v,a,b)}this.setMode=l,this.setIndex=u,this.render=d,this.renderInstances=h}function Jy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,s){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Qy(i,e){return i[0]-e[0]}function $y(i,e){return Math.abs(e[1])-Math.abs(i[1])}function e1(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new Jt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function c(u,d,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const b=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=b!==void 0?b.length:0;let m=a.get(d);if(m===void 0||m.count!==S){let H=function(){O.dispose(),a.delete(d),d.removeEventListener("dispose",H)};var v=H;m!==void 0&&m.texture.dispose();const x=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,D=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],X=d.morphAttributes.color||[];let _=0;x===!0&&(_=1),w===!0&&(_=2),A===!0&&(_=3);let M=d.attributes.position.count*_,ie=1;M>e.maxTextureSize&&(ie=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const B=new Float32Array(M*ie*4*S),O=new $f(B,M,ie,S);O.type=Wi,O.needsUpdate=!0;const F=_*4;for(let me=0;me<S;me++){const oe=D[me],ne=P[me],Me=X[me],Q=M*ie*4*me;for(let V=0;V<oe.count;V++){const fe=V*F;x===!0&&(l.fromBufferAttribute(oe,V),B[Q+fe+0]=l.x,B[Q+fe+1]=l.y,B[Q+fe+2]=l.z,B[Q+fe+3]=0),w===!0&&(l.fromBufferAttribute(ne,V),B[Q+fe+4]=l.x,B[Q+fe+5]=l.y,B[Q+fe+6]=l.z,B[Q+fe+7]=0),A===!0&&(l.fromBufferAttribute(Me,V),B[Q+fe+8]=l.x,B[Q+fe+9]=l.y,B[Q+fe+10]=l.z,B[Q+fe+11]=Me.itemSize===4?l.w:1)}}m={count:S,texture:O,size:new at(M,ie)},a.set(d,m),d.addEventListener("dispose",H)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const E=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const b=f===void 0?0:f.length;let S=n[d.id];if(S===void 0||S.length!==b){S=[];for(let w=0;w<b;w++)S[w]=[w,0];n[d.id]=S}for(let w=0;w<b;w++){const A=S[w];A[0]=w,A[1]=f[w]}S.sort($y);for(let w=0;w<8;w++)w<b&&S[w][1]?(s[w][0]=S[w][0],s[w][1]=S[w][1]):(s[w][0]=Number.MAX_SAFE_INTEGER,s[w][1]=0);s.sort(Qy);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const A=s[w],D=A[0],P=A[1];D!==Number.MAX_SAFE_INTEGER&&P?(m&&d.getAttribute("morphTarget"+w)!==m[D]&&d.setAttribute("morphTarget"+w,m[D]),p&&d.getAttribute("morphNormal"+w)!==p[D]&&d.setAttribute("morphNormal"+w,p[D]),r[w]=P,E+=P):(m&&d.hasAttribute("morphTarget"+w)===!0&&d.deleteAttribute("morphTarget"+w),p&&d.hasAttribute("morphNormal"+w)===!0&&d.deleteAttribute("morphNormal"+w),r[w]=0)}const x=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function t1(i,e,t,n){let r=new WeakMap;function a(c){const u=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function l(){r=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:l}}const fh=new Tn,hh=new $f,ph=new Hx,mh=new ch,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),rd=new Float32Array(4);function Ia(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=ed[r];if(a===void 0&&(a=new Float32Array(r),ed[r]=a),e!==0){n.toArray(a,0);for(let l=1,s=0;l!==e;++l)s+=t,i[l].toArray(a,s)}return a}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function r1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function a1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function s1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;rd.set(n),i.uniformMatrix2fv(this.addr,!1,rd),gn(t,n)}}function o1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),gn(t,n)}}function l1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),gn(t,n)}}function c1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function d1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function f1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function h1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function m1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function v1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function g1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||fh,r)}function _1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ph,r)}function x1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mh,r)}function b1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hh,r)}function y1(i){switch(i){case 5126:return n1;case 35664:return i1;case 35665:return r1;case 35666:return a1;case 35674:return s1;case 35675:return o1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return u1;case 35668:case 35672:return d1;case 35669:case 35673:return f1;case 5125:return h1;case 36294:return p1;case 36295:return m1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return b1}}function S1(i,e){i.uniform1fv(this.addr,e)}function M1(i,e){const t=Ia(e,this.size,2);i.uniform2fv(this.addr,t)}function E1(i,e){const t=Ia(e,this.size,3);i.uniform3fv(this.addr,t)}function w1(i,e){const t=Ia(e,this.size,4);i.uniform4fv(this.addr,t)}function T1(i,e){const t=Ia(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function A1(i,e){const t=Ia(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function R1(i,e){const t=Ia(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C1(i,e){i.uniform1iv(this.addr,e)}function P1(i,e){i.uniform2iv(this.addr,e)}function L1(i,e){i.uniform3iv(this.addr,e)}function I1(i,e){i.uniform4iv(this.addr,e)}function D1(i,e){i.uniform1uiv(this.addr,e)}function U1(i,e){i.uniform2uiv(this.addr,e)}function N1(i,e){i.uniform3uiv(this.addr,e)}function O1(i,e){i.uniform4uiv(this.addr,e)}function k1(i,e,t){const n=this.cache,r=e.length,a=yo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||fh,a[l])}function F1(i,e,t){const n=this.cache,r=e.length,a=yo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||ph,a[l])}function B1(i,e,t){const n=this.cache,r=e.length,a=yo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||mh,a[l])}function z1(i,e,t){const n=this.cache,r=e.length,a=yo(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||hh,a[l])}function G1(i){switch(i){case 5126:return S1;case 35664:return M1;case 35665:return E1;case 35666:return w1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return P1;case 35668:case 35672:return L1;case 35669:case 35673:return I1;case 5125:return D1;case 36294:return U1;case 36295:return N1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}class H1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=y1(t.type)}}class V1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=G1(t.type)}}class W1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function ad(i,e){i.seq.push(e),i.map[e.id]=e}function j1(i,e,t){const n=i.name,r=n.length;for(ll.lastIndex=0;;){const a=ll.exec(n),l=ll.lastIndex;let s=a[1];const c=a[2]==="]",u=a[3];if(c&&(s=s|0),u===void 0||u==="["&&l+2===r){ad(t,u===void 0?new H1(s,i,e):new V1(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new W1(s),ad(t,h)),t=h}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);j1(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const s=t[a],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function sd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let X1=0;function q1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const s=l+1;n.push(`${s===e?">":" "} ${s}: ${t[l]}`)}return n.join(`
`)}function Y1(i){switch(i){case Ci:return["Linear","( value )"];case Zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function od(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+q1(i.getShaderSource(e),l)}else return r}function K1(i,e){const t=Y1(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Z1(i,e){let t;switch(e){case ix:t="Linear";break;case rx:t="Reinhard";break;case ax:t="OptimizedCineon";break;case sx:t="ACESFilmic";break;case ox:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function J1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ya).join(`
`)}function Q1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:s}}return t}function Ya(i){return i!==""}function ld(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(i){return i.replace(eS,nS)}const tS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nS(i,e){let t=Rt[e];if(t===void 0){const n=tS.get(e);if(n!==void 0)t=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fl(t)}const iS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(iS,rS)}function rS(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function dd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===N_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function sS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ba:case ya:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oS(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ya&&(e="ENVMAP_MODE_REFRACTION"),e}function lS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zf:e="ENVMAP_BLENDING_MULTIPLY";break;case tx:e="ENVMAP_BLENDING_MIX";break;case nx:e="ENVMAP_BLENDING_ADD";break}return e}function cS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function uS(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,s=t.fragmentShader;const c=aS(t),u=sS(t),d=oS(t),h=lS(t),f=cS(t),v=t.isWebGL2?"":J1(t),b=Q1(a),S=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ya).join(`
`),m.length>0&&(m+=`
`),p=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ya).join(`
`),p.length>0&&(p+=`
`)):(m=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),p=[v,dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Rt.tonemapping_pars_fragment:"",t.toneMapping!==lr?Z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,K1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),l=Fl(l),l=ld(l,t),l=cd(l,t),s=Fl(s),s=ld(s,t),s=cd(s,t),l=ud(l),s=ud(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+l,w=E+p+s,A=sd(r,r.VERTEX_SHADER,x),D=sd(r,r.FRAGMENT_SHADER,w);if(r.attachShader(S,A),r.attachShader(S,D),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),i.debug.checkShaderErrors){const _=r.getProgramInfoLog(S).trim(),M=r.getShaderInfoLog(A).trim(),ie=r.getShaderInfoLog(D).trim();let B=!0,O=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,A,D);else{const F=od(r,A,"vertex"),H=od(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+_+`
`+F+`
`+H)}else _!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_):(M===""||ie==="")&&(O=!1);O&&(this.diagnostics={runnable:B,programLog:_,vertexShader:{log:M,prefix:m},fragmentShader:{log:ie,prefix:p}})}r.deleteShader(A),r.deleteShader(D);let P;this.getUniforms=function(){return P===void 0&&(P=new Qs(r,S)),P};let X;return this.getAttributes=function(){return X===void 0&&(X=$1(r,S)),X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=D,this}let dS=0;class fS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hS(e),t.set(e,n)),n}}class hS{constructor(e){this.id=dS++,this.code=e,this.usedTimes=0}}function pS(i,e,t,n,r,a,l){const s=new th,c=new fS,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return _===0?"uv":`uv${_}`}function m(_,M,ie,B,O){const F=B.fog,H=O.geometry,me=_.isMeshStandardMaterial?B.environment:null,oe=(_.isMeshStandardMaterial?t:e).get(_.envMap||me),ne=oe&&oe.mapping===_o?oe.image.height:null,Me=b[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,V=Q!==void 0?Q.length:0;let fe=0;H.morphAttributes.position!==void 0&&(fe=1),H.morphAttributes.normal!==void 0&&(fe=2),H.morphAttributes.color!==void 0&&(fe=3);let Ae,Se,Ie,Ue;if(Me){const ut=bi[Me];Ae=ut.vertexShader,Se=ut.fragmentShader}else Ae=_.vertexShader,Se=_.fragmentShader,c.update(_),Ie=c.getVertexShaderID(_),Ue=c.getFragmentShaderID(_);const Be=i.getRenderTarget(),ze=O.isInstancedMesh===!0,et=!!_.map,xt=!!_.matcap,Qe=!!oe,te=!!_.aoMap,Mt=!!_.lightMap,Oe=!!_.bumpMap,_e=!!_.normalMap,Ee=!!_.displacementMap,Fe=!!_.emissiveMap,Ge=!!_.metalnessMap,He=!!_.roughnessMap,Ye=_.anisotropy>0,ot=_.clearcoat>0,ht=_.iridescence>0,I=_.sheen>0,T=_.transmission>0,G=Ye&&!!_.anisotropyMap,q=ot&&!!_.clearcoatMap,U=ot&&!!_.clearcoatNormalMap,K=ot&&!!_.clearcoatRoughnessMap,re=ht&&!!_.iridescenceMap,de=ht&&!!_.iridescenceThicknessMap,W=I&&!!_.sheenColorMap,C=I&&!!_.sheenRoughnessMap,he=!!_.specularMap,be=!!_.specularColorMap,z=!!_.specularIntensityMap,Y=T&&!!_.transmissionMap,we=T&&!!_.thicknessMap,De=!!_.gradientMap,N=!!_.alphaMap,ye=_.alphaTest>0,ue=!!_.alphaHash,Te=!!_.extensions,Re=!!H.attributes.uv1,Je=!!H.attributes.uv2,Ze=!!H.attributes.uv3;let nt=lr;return _.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(nt=i.toneMapping),{isWebGL2:d,shaderID:Me,shaderType:_.type,shaderName:_.name,vertexShader:Ae,fragmentShader:Se,defines:_.defines,customVertexShaderID:Ie,customFragmentShaderID:Ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,instancing:ze,instancingColor:ze&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Ci,map:et,matcap:xt,envMap:Qe,envMapMode:Qe&&oe.mapping,envMapCubeUVHeight:ne,aoMap:te,lightMap:Mt,bumpMap:Oe,normalMap:_e,displacementMap:f&&Ee,emissiveMap:Fe,normalMapObjectSpace:_e&&_.normalMapType===bx,normalMapTangentSpace:_e&&_.normalMapType===Kf,metalnessMap:Ge,roughnessMap:He,anisotropy:Ye,anisotropyMap:G,clearcoat:ot,clearcoatMap:q,clearcoatNormalMap:U,clearcoatRoughnessMap:K,iridescence:ht,iridescenceMap:re,iridescenceThicknessMap:de,sheen:I,sheenColorMap:W,sheenRoughnessMap:C,specularMap:he,specularColorMap:be,specularIntensityMap:z,transmission:T,transmissionMap:Y,thicknessMap:we,gradientMap:De,opaque:_.transparent===!1&&_.blending===da,alphaMap:N,alphaTest:ye,alphaHash:ue,combine:_.combine,mapUv:et&&S(_.map.channel),aoMapUv:te&&S(_.aoMap.channel),lightMapUv:Mt&&S(_.lightMap.channel),bumpMapUv:Oe&&S(_.bumpMap.channel),normalMapUv:_e&&S(_.normalMap.channel),displacementMapUv:Ee&&S(_.displacementMap.channel),emissiveMapUv:Fe&&S(_.emissiveMap.channel),metalnessMapUv:Ge&&S(_.metalnessMap.channel),roughnessMapUv:He&&S(_.roughnessMap.channel),anisotropyMapUv:G&&S(_.anisotropyMap.channel),clearcoatMapUv:q&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:U&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:W&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:C&&S(_.sheenRoughnessMap.channel),specularMapUv:he&&S(_.specularMap.channel),specularColorMapUv:be&&S(_.specularColorMap.channel),specularIntensityMapUv:z&&S(_.specularIntensityMap.channel),transmissionMapUv:Y&&S(_.transmissionMap.channel),thicknessMapUv:we&&S(_.thicknessMap.channel),alphaMapUv:N&&S(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_e||Ye),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Je,vertexUv3s:Ze,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(et||N),fog:!!F,useFog:_.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&ie.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:et&&_.map.isVideoTexture===!0&&_.map.colorSpace===Zt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ii,flipSided:_.side===Fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:Te&&_.extensions.derivatives===!0,extensionFragDepth:Te&&_.extensions.fragDepth===!0,extensionDrawBuffers:Te&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&_.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const ie in _.defines)M.push(ie),M.push(_.defines[ie]);return _.isRawShaderMaterial===!1&&(E(M,_),x(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function E(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function x(_,M){s.disableAll(),M.isWebGL2&&s.enable(0),M.supportsVertexTextures&&s.enable(1),M.instancing&&s.enable(2),M.instancingColor&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),_.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.useLegacyLights&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),_.push(s.mask)}function w(_){const M=b[_.type];let ie;if(M){const B=bi[M];ie=oh.clone(B.uniforms)}else ie=_.uniforms;return ie}function A(_,M){let ie;for(let B=0,O=u.length;B<O;B++){const F=u[B];if(F.cacheKey===M){ie=F,++ie.usedTimes;break}}return ie===void 0&&(ie=new uS(i,M,_,a),u.push(ie)),ie}function D(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function P(_){c.remove(_)}function X(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:A,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:X}}function mS(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,s){i.get(a)[l]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function vS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hd(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(h,f,v,b,S,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:v,groupOrder:b,renderOrder:h.renderOrder,z:S,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=v,p.groupOrder=b,p.renderOrder=h.renderOrder,p.z=S,p.group=m),e++,p}function s(h,f,v,b,S,m){const p=l(h,f,v,b,S,m);v.transmission>0?n.push(p):v.transparent===!0?r.push(p):t.push(p)}function c(h,f,v,b,S,m){const p=l(h,f,v,b,S,m);v.transmission>0?n.unshift(p):v.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,f){t.length>1&&t.sort(h||vS),n.length>1&&n.sort(f||fd),r.length>1&&r.sort(f||fd)}function d(){for(let h=e,f=i.length;h<f;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:c,finish:d,sort:u}}function gS(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new hd,i.set(n,[l])):r>=a.length?(l=new hd,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function _S(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new Bt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return i[e.id]=t,t}}}function xS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let bS=0;function yS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function SS(i,e){const t=new _S,n=xS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new ce);const a=new ce,l=new sn,s=new sn;function c(d,h){let f=0,v=0,b=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let S=0,m=0,p=0,E=0,x=0,w=0,A=0,D=0,P=0,X=0;d.sort(yS);const _=h===!0?Math.PI:1;for(let ie=0,B=d.length;ie<B;ie++){const O=d[ie],F=O.color,H=O.intensity,me=O.distance,oe=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=F.r*H*_,v+=F.g*H*_,b+=F.b*H*_;else if(O.isLightProbe)for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(O.sh.coefficients[ne],H);else if(O.isDirectionalLight){const ne=t.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity*_),O.castShadow){const Me=O.shadow,Q=n.get(O);Q.shadowBias=Me.bias,Q.shadowNormalBias=Me.normalBias,Q.shadowRadius=Me.radius,Q.shadowMapSize=Me.mapSize,r.directionalShadow[S]=Q,r.directionalShadowMap[S]=oe,r.directionalShadowMatrix[S]=O.shadow.matrix,w++}r.directional[S]=ne,S++}else if(O.isSpotLight){const ne=t.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(F).multiplyScalar(H*_),ne.distance=me,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,r.spot[p]=ne;const Me=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,Me.updateMatrices(O),O.castShadow&&X++),r.spotLightMatrix[p]=Me.matrix,O.castShadow){const Q=n.get(O);Q.shadowBias=Me.bias,Q.shadowNormalBias=Me.normalBias,Q.shadowRadius=Me.radius,Q.shadowMapSize=Me.mapSize,r.spotShadow[p]=Q,r.spotShadowMap[p]=oe,D++}p++}else if(O.isRectAreaLight){const ne=t.get(O);ne.color.copy(F).multiplyScalar(H),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),r.rectArea[E]=ne,E++}else if(O.isPointLight){const ne=t.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity*_),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){const Me=O.shadow,Q=n.get(O);Q.shadowBias=Me.bias,Q.shadowNormalBias=Me.normalBias,Q.shadowRadius=Me.radius,Q.shadowMapSize=Me.mapSize,Q.shadowCameraNear=Me.camera.near,Q.shadowCameraFar=Me.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=oe,r.pointShadowMatrix[m]=O.shadow.matrix,A++}r.point[m]=ne,m++}else if(O.isHemisphereLight){const ne=t.get(O);ne.skyColor.copy(O.color).multiplyScalar(H*_),ne.groundColor.copy(O.groundColor).multiplyScalar(H*_),r.hemi[x]=ne,x++}}E>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=b;const M=r.hash;(M.directionalLength!==S||M.pointLength!==m||M.spotLength!==p||M.rectAreaLength!==E||M.hemiLength!==x||M.numDirectionalShadows!==w||M.numPointShadows!==A||M.numSpotShadows!==D||M.numSpotMaps!==P)&&(r.directional.length=S,r.spot.length=p,r.rectArea.length=E,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=D+P-X,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=X,M.directionalLength=S,M.pointLength=m,M.spotLength=p,M.rectAreaLength=E,M.hemiLength=x,M.numDirectionalShadows=w,M.numPointShadows=A,M.numSpotShadows=D,M.numSpotMaps=P,r.version=bS++)}function u(d,h){let f=0,v=0,b=0,S=0,m=0;const p=h.matrixWorldInverse;for(let E=0,x=d.length;E<x;E++){const w=d[E];if(w.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(p),f++}else if(w.isSpotLight){const A=r.spot[b];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(p),b++}else if(w.isRectAreaLight){const A=r.rectArea[S];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),s.identity(),l.copy(w.matrixWorld),l.premultiply(p),s.extractRotation(l),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),S++}else if(w.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),v++}else if(w.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:u,state:r}}function pd(i,e){const t=new SS(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(h){n.push(h)}function s(h){r.push(h)}function c(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:l,pushShadow:s}}function MS(i,e){let t=new WeakMap;function n(a,l=0){const s=t.get(a);let c;return s===void 0?(c=new pd(i,e),t.set(a,[c])):l>=s.length?(c=new pd(i,e),s.push(c)):c=s[l],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class ES extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wS extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AS=`uniform sampler2D shadow_pass;
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
}`;function RS(i,e,t){let n=new lc;const r=new at,a=new at,l=new Jt,s=new ES({depthPacking:xx}),c=new wS,u={},d=t.maxTextureSize,h={[Ri]:Fn,[Fn]:Ri,[ii]:ii},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:TS,fragmentShader:AS}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const b=new $i;b.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Wt(b,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kf;let p=this.type;this.render=function(A,D,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const X=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),ie=i.state;ie.setBlending(qi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const B=p!==zi&&this.type===zi,O=p===zi&&this.type!==zi;for(let F=0,H=A.length;F<H;F++){const me=A[F],oe=me.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;r.copy(oe.mapSize);const ne=oe.getFrameExtents();if(r.multiply(ne),a.copy(oe.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ne.x),r.x=a.x*ne.x,oe.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ne.y),r.y=a.y*ne.y,oe.mapSize.y=a.y)),oe.map===null||B===!0||O===!0){const Q=this.type!==zi?{minFilter:en,magFilter:en}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Zi(r.x,r.y,Q),oe.map.texture.name=me.name+".shadowMap",oe.camera.updateProjectionMatrix()}i.setRenderTarget(oe.map),i.clear();const Me=oe.getViewportCount();for(let Q=0;Q<Me;Q++){const V=oe.getViewport(Q);l.set(a.x*V.x,a.y*V.y,a.x*V.z,a.y*V.w),ie.viewport(l),oe.updateMatrices(me,Q),n=oe.getFrustum(),w(D,P,oe.camera,me,this.type)}oe.isPointLightShadow!==!0&&this.type===zi&&E(oe,P),oe.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(X,_,M)};function E(A,D){const P=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,P,f,S,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,P,v,S,null)}function x(A,D,P,X){let _=null;const M=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)_=M;else if(_=P.isPointLight===!0?c:s,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ie=_.uuid,B=D.uuid;let O=u[ie];O===void 0&&(O={},u[ie]=O);let F=O[B];F===void 0&&(F=_.clone(),O[B]=F),_=F}if(_.visible=D.visible,_.wireframe=D.wireframe,X===zi?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:h[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const ie=i.properties.get(_);ie.light=P}return _}function w(A,D,P,X,_){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===zi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=e.update(A),O=A.material;if(Array.isArray(O)){const F=B.groups;for(let H=0,me=F.length;H<me;H++){const oe=F[H],ne=O[oe.materialIndex];if(ne&&ne.visible){const Me=x(A,ne,X,_);i.renderBufferDirect(P,null,B,Me,A,oe)}}}else if(O.visible){const F=x(A,O,X,_);i.renderBufferDirect(P,null,B,F,A,null)}}const ie=A.children;for(let B=0,O=ie.length;B<O;B++)w(ie[B],D,P,X,_)}}function CS(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const ye=new Jt;let ue=null;const Te=new Jt(0,0,0,0);return{setMask:function(Re){ue!==Re&&!N&&(i.colorMask(Re,Re,Re,Re),ue=Re)},setLocked:function(Re){N=Re},setClear:function(Re,Je,Ze,nt,yt){yt===!0&&(Re*=nt,Je*=nt,Ze*=nt),ye.set(Re,Je,Ze,nt),Te.equals(ye)===!1&&(i.clearColor(Re,Je,Ze,nt),Te.copy(ye))},reset:function(){N=!1,ue=null,Te.set(-1,0,0,0)}}}function a(){let N=!1,ye=null,ue=null,Te=null;return{setTest:function(Re){Re?Be(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Re){ye!==Re&&!N&&(i.depthMask(Re),ye=Re)},setFunc:function(Re){if(ue!==Re){switch(Re){case Y_:i.depthFunc(i.NEVER);break;case K_:i.depthFunc(i.ALWAYS);break;case Z_:i.depthFunc(i.LESS);break;case Pl:i.depthFunc(i.LEQUAL);break;case J_:i.depthFunc(i.EQUAL);break;case Q_:i.depthFunc(i.GEQUAL);break;case $_:i.depthFunc(i.GREATER);break;case ex:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Re}},setLocked:function(Re){N=Re},setClear:function(Re){Te!==Re&&(i.clearDepth(Re),Te=Re)},reset:function(){N=!1,ye=null,ue=null,Te=null}}}function l(){let N=!1,ye=null,ue=null,Te=null,Re=null,Je=null,Ze=null,nt=null,yt=null;return{setTest:function(ut){N||(ut?Be(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(ut){ye!==ut&&!N&&(i.stencilMask(ut),ye=ut)},setFunc:function(ut,Pt,wt){(ue!==ut||Te!==Pt||Re!==wt)&&(i.stencilFunc(ut,Pt,wt),ue=ut,Te=Pt,Re=wt)},setOp:function(ut,Pt,wt){(Je!==ut||Ze!==Pt||nt!==wt)&&(i.stencilOp(ut,Pt,wt),Je=ut,Ze=Pt,nt=wt)},setLocked:function(ut){N=ut},setClear:function(ut){yt!==ut&&(i.clearStencil(ut),yt=ut)},reset:function(){N=!1,ye=null,ue=null,Te=null,Re=null,Je=null,Ze=null,nt=null,yt=null}}}const s=new r,c=new a,u=new l,d=new WeakMap,h=new WeakMap;let f={},v={},b=new WeakMap,S=[],m=null,p=!1,E=null,x=null,w=null,A=null,D=null,P=null,X=null,_=!1,M=null,ie=null,B=null,O=null,F=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,oe=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ne)[1]),me=oe>=1):ne.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),me=oe>=2);let Me=null,Q={};const V=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Ae=new Jt().fromArray(V),Se=new Jt().fromArray(fe);function Ie(N,ye,ue,Te){const Re=new Uint8Array(4),Je=i.createTexture();i.bindTexture(N,Je),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ue;Ze++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(ye,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ye+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Je}const Ue={};Ue[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Be(i.DEPTH_TEST),c.setFunc(Pl),Ee(!1),Fe($c),Be(i.CULL_FACE),Oe(qi);function Be(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function ze(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function et(N,ye){return v[N]!==ye?(i.bindFramebuffer(N,ye),v[N]=ye,n&&(N===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=ye),N===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=ye)),!0):!1}function xt(N,ye){let ue=S,Te=!1;if(N)if(ue=b.get(ye),ue===void 0&&(ue=[],b.set(ye,ue)),N.isWebGLMultipleRenderTargets){const Re=N.texture;if(ue.length!==Re.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Je=0,Ze=Re.length;Je<Ze;Je++)ue[Je]=i.COLOR_ATTACHMENT0+Je;ue.length=Re.length,Te=!0}}else ue[0]!==i.COLOR_ATTACHMENT0&&(ue[0]=i.COLOR_ATTACHMENT0,Te=!0);else ue[0]!==i.BACK&&(ue[0]=i.BACK,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Qe(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const te={[ra]:i.FUNC_ADD,[k_]:i.FUNC_SUBTRACT,[F_]:i.FUNC_REVERSE_SUBTRACT};if(n)te[iu]=i.MIN,te[ru]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(te[iu]=N.MIN_EXT,te[ru]=N.MAX_EXT)}const Mt={[B_]:i.ZERO,[z_]:i.ONE,[G_]:i.SRC_COLOR,[Ff]:i.SRC_ALPHA,[q_]:i.SRC_ALPHA_SATURATE,[j_]:i.DST_COLOR,[V_]:i.DST_ALPHA,[H_]:i.ONE_MINUS_SRC_COLOR,[Bf]:i.ONE_MINUS_SRC_ALPHA,[X_]:i.ONE_MINUS_DST_COLOR,[W_]:i.ONE_MINUS_DST_ALPHA};function Oe(N,ye,ue,Te,Re,Je,Ze,nt){if(N===qi){p===!0&&(ze(i.BLEND),p=!1);return}if(p===!1&&(Be(i.BLEND),p=!0),N!==O_){if(N!==E||nt!==_){if((x!==ra||D!==ra)&&(i.blendEquation(i.FUNC_ADD),x=ra,D=ra),nt)switch(N){case da:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eu:i.blendFunc(i.ONE,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case eu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,A=null,P=null,X=null,E=N,_=nt}return}Re=Re||ye,Je=Je||ue,Ze=Ze||Te,(ye!==x||Re!==D)&&(i.blendEquationSeparate(te[ye],te[Re]),x=ye,D=Re),(ue!==w||Te!==A||Je!==P||Ze!==X)&&(i.blendFuncSeparate(Mt[ue],Mt[Te],Mt[Je],Mt[Ze]),w=ue,A=Te,P=Je,X=Ze),E=N,_=!1}function _e(N,ye){N.side===ii?ze(i.CULL_FACE):Be(i.CULL_FACE);let ue=N.side===Fn;ye&&(ue=!ue),Ee(ue),N.blending===da&&N.transparent===!1?Oe(qi):Oe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),s.setMask(N.colorWrite);const Te=N.stencilWrite;u.setTest(Te),Te&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),He(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Be(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function Fe(N){N!==D_?(Be(i.CULL_FACE),N!==ie&&(N===$c?i.cullFace(i.BACK):N===U_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),ie=N}function Ge(N){N!==B&&(me&&i.lineWidth(N),B=N)}function He(N,ye,ue){N?(Be(i.POLYGON_OFFSET_FILL),(O!==ye||F!==ue)&&(i.polygonOffset(ye,ue),O=ye,F=ue)):ze(i.POLYGON_OFFSET_FILL)}function Ye(N){N?Be(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function ot(N){N===void 0&&(N=i.TEXTURE0+H-1),Me!==N&&(i.activeTexture(N),Me=N)}function ht(N,ye,ue){ue===void 0&&(Me===null?ue=i.TEXTURE0+H-1:ue=Me);let Te=Q[ue];Te===void 0&&(Te={type:void 0,texture:void 0},Q[ue]=Te),(Te.type!==N||Te.texture!==ye)&&(Me!==ue&&(i.activeTexture(ue),Me=ue),i.bindTexture(N,ye||Ue[N]),Te.type=N,Te.texture=ye)}function I(){const N=Q[Me];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function T(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function C(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){Ae.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ae.copy(N))}function z(N){Se.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Se.copy(N))}function Y(N,ye){let ue=h.get(ye);ue===void 0&&(ue=new WeakMap,h.set(ye,ue));let Te=ue.get(N);Te===void 0&&(Te=i.getUniformBlockIndex(ye,N.name),ue.set(N,Te))}function we(N,ye){const Te=h.get(ye).get(N);d.get(ye)!==Te&&(i.uniformBlockBinding(ye,Te,N.__bindingPointIndex),d.set(ye,Te))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Me=null,Q={},v={},b=new WeakMap,S=[],m=null,p=!1,E=null,x=null,w=null,A=null,D=null,P=null,X=null,_=!1,M=null,ie=null,B=null,O=null,F=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),s.reset(),c.reset(),u.reset()}return{buffers:{color:s,depth:c,stencil:u},enable:Be,disable:ze,bindFramebuffer:et,drawBuffers:xt,useProgram:Qe,setBlending:Oe,setMaterial:_e,setFlipSided:Ee,setCullFace:Fe,setLineWidth:Ge,setPolygonOffset:He,setScissorTest:Ye,activeTexture:ot,bindTexture:ht,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:C,texImage3D:he,updateUBOMapping:Y,uniformBlockBinding:we,texStorage2D:de,texStorage3D:W,texSubImage2D:q,texSubImage3D:U,compressedTexSubImage2D:K,compressedTexSubImage3D:re,scissor:be,viewport:z,reset:De}}function PS(i,e,t,n,r,a,l){const s=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let S;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,T){return p?new OffscreenCanvas(I,T):co("canvas")}function x(I,T,G,q){let U=1;if((I.width>q||I.height>q)&&(U=q/Math.max(I.width,I.height)),U<1||T===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const K=T?kl:Math.floor,re=K(U*I.width),de=K(U*I.height);S===void 0&&(S=E(re,de));const W=G?E(re,de):S;return W.width=re,W.height=de,W.getContext("2d").drawImage(I,0,0,re,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+re+"x"+de+")."),W}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function w(I){return Iu(I.width)&&Iu(I.height)}function A(I){return s?!1:I.wrapS!==ci||I.wrapT!==ci||I.minFilter!==en&&I.minFilter!==ti}function D(I,T){return I.generateMipmaps&&T&&I.minFilter!==en&&I.minFilter!==ti}function P(I){i.generateMipmap(I)}function X(I,T,G,q,U=!1){if(s===!1)return T;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=T;return T===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),T===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),T===i.RGBA&&(G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=q===Zt&&U===!1?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)),(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(I,T,G){return D(I,G)===!0||I.isFramebufferTexture&&I.minFilter!==en&&I.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function M(I){return I===en||I===au||I===No?i.NEAREST:i.LINEAR}function ie(I){const T=I.target;T.removeEventListener("dispose",ie),O(T),T.isVideoTexture&&b.delete(T)}function B(I){const T=I.target;T.removeEventListener("dispose",B),H(T)}function O(I){const T=n.get(I);if(T.__webglInit===void 0)return;const G=I.source,q=m.get(G);if(q){const U=q[T.__cacheKey];U.usedTimes--,U.usedTimes===0&&F(I),Object.keys(q).length===0&&m.delete(G)}n.remove(I)}function F(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const G=I.source,q=m.get(G);delete q[T.__cacheKey],l.memory.textures--}function H(I){const T=I.texture,G=n.get(I),q=n.get(T);if(q.__webglTexture!==void 0&&(i.deleteTexture(q.__webglTexture),l.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(G.__webglFramebuffer[U]))for(let K=0;K<G.__webglFramebuffer[U].length;K++)i.deleteFramebuffer(G.__webglFramebuffer[U][K]);else i.deleteFramebuffer(G.__webglFramebuffer[U]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[U])}else{if(Array.isArray(G.__webglFramebuffer))for(let U=0;U<G.__webglFramebuffer.length;U++)i.deleteFramebuffer(G.__webglFramebuffer[U]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let U=0;U<G.__webglColorRenderbuffer.length;U++)G.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[U]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let U=0,K=T.length;U<K;U++){const re=n.get(T[U]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),l.memory.textures--),n.remove(T[U])}n.remove(T),n.remove(I)}let me=0;function oe(){me=0}function ne(){const I=me;return I>=c&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+c),me+=1,I}function Me(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Q(I,T){const G=n.get(I);if(I.isVideoTexture&&ot(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const q=I.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(G,I,T);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}function V(I,T){const G=n.get(I);if(I.version>0&&G.__version!==I.version){et(G,I,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T)}function fe(I,T){const G=n.get(I);if(I.version>0&&G.__version!==I.version){et(G,I,T);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)}function Ae(I,T){const G=n.get(I);if(I.version>0&&G.__version!==I.version){xt(G,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)}const Se={[Il]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},Ie={[en]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[No]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[lx]:i.LINEAR_MIPMAP_NEAREST,[us]:i.LINEAR_MIPMAP_LINEAR},Ue={[Sx]:i.NEVER,[Cx]:i.ALWAYS,[Mx]:i.LESS,[wx]:i.LEQUAL,[Ex]:i.EQUAL,[Rx]:i.GEQUAL,[Tx]:i.GREATER,[Ax]:i.NOTEQUAL};function Be(I,T,G){if(G?(i.texParameteri(I,i.TEXTURE_WRAP_S,Se[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Se[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Se[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Ie[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Ie[T.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==ci||T.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,M(T.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,M(T.minFilter)),T.minFilter!==en&&T.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===en||T.minFilter!==No&&T.minFilter!==us||T.type===Wi&&e.has("OES_texture_float_linear")===!1||s===!1&&T.type===Sa&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ze(I,T){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",ie));const q=T.source;let U=m.get(q);U===void 0&&(U={},m.set(q,U));const K=Me(T);if(K!==I.__cacheKey){U[K]===void 0&&(U[K]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,G=!0),U[K].usedTimes++;const re=U[I.__cacheKey];re!==void 0&&(U[I.__cacheKey].usedTimes--,re.usedTimes===0&&F(T)),I.__cacheKey=K,I.__webglTexture=U[K].texture}return G}function et(I,T,G){let q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=i.TEXTURE_3D);const U=ze(I,T),K=T.source;t.bindTexture(q,I.__webglTexture,i.TEXTURE0+G);const re=n.get(K);if(K.version!==re.__version||U===!0){t.activeTexture(i.TEXTURE0+G),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const de=A(T)&&w(T.image)===!1;let W=x(T.image,de,!1,d);W=ht(T,W);const C=w(W)||s,he=a.convert(T.format,T.colorSpace);let be=a.convert(T.type),z=X(T.internalFormat,he,be,T.colorSpace,T.isVideoTexture);Be(q,T,C);let Y;const we=T.mipmaps,De=s&&T.isVideoTexture!==!0,N=re.__version===void 0||U===!0,ye=_(T,W,C);if(T.isDepthTexture)z=i.DEPTH_COMPONENT,s?T.type===Wi?z=i.DEPTH_COMPONENT32F:T.type===sr?z=i.DEPTH_COMPONENT24:T.type===Ar?z=i.DEPTH24_STENCIL8:z=i.DEPTH_COMPONENT16:T.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Rr&&z===i.DEPTH_COMPONENT&&T.type!==sc&&T.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=sr,be=a.convert(T.type)),T.format===Ma&&z===i.DEPTH_COMPONENT&&(z=i.DEPTH_STENCIL,T.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ar,be=a.convert(T.type))),N&&(De?t.texStorage2D(i.TEXTURE_2D,1,z,W.width,W.height):t.texImage2D(i.TEXTURE_2D,0,z,W.width,W.height,0,he,be,null));else if(T.isDataTexture)if(we.length>0&&C){De&&N&&t.texStorage2D(i.TEXTURE_2D,ye,z,we[0].width,we[0].height);for(let ue=0,Te=we.length;ue<Te;ue++)Y=we[ue],De?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Y.width,Y.height,he,be,Y.data):t.texImage2D(i.TEXTURE_2D,ue,z,Y.width,Y.height,0,he,be,Y.data);T.generateMipmaps=!1}else De?(N&&t.texStorage2D(i.TEXTURE_2D,ye,z,W.width,W.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,he,be,W.data)):t.texImage2D(i.TEXTURE_2D,0,z,W.width,W.height,0,he,be,W.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){De&&N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,z,we[0].width,we[0].height,W.depth);for(let ue=0,Te=we.length;ue<Te;ue++)Y=we[ue],T.format!==ui?he!==null?De?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Y.width,Y.height,W.depth,he,Y.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,z,Y.width,Y.height,W.depth,0,Y.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Y.width,Y.height,W.depth,he,be,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,z,Y.width,Y.height,W.depth,0,he,be,Y.data)}else{De&&N&&t.texStorage2D(i.TEXTURE_2D,ye,z,we[0].width,we[0].height);for(let ue=0,Te=we.length;ue<Te;ue++)Y=we[ue],T.format!==ui?he!==null?De?t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Y.width,Y.height,he,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,z,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Y.width,Y.height,he,be,Y.data):t.texImage2D(i.TEXTURE_2D,ue,z,Y.width,Y.height,0,he,be,Y.data)}else if(T.isDataArrayTexture)De?(N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,z,W.width,W.height,W.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,he,be,W.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,z,W.width,W.height,W.depth,0,he,be,W.data);else if(T.isData3DTexture)De?(N&&t.texStorage3D(i.TEXTURE_3D,ye,z,W.width,W.height,W.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,he,be,W.data)):t.texImage3D(i.TEXTURE_3D,0,z,W.width,W.height,W.depth,0,he,be,W.data);else if(T.isFramebufferTexture){if(N)if(De)t.texStorage2D(i.TEXTURE_2D,ye,z,W.width,W.height);else{let ue=W.width,Te=W.height;for(let Re=0;Re<ye;Re++)t.texImage2D(i.TEXTURE_2D,Re,z,ue,Te,0,he,be,null),ue>>=1,Te>>=1}}else if(we.length>0&&C){De&&N&&t.texStorage2D(i.TEXTURE_2D,ye,z,we[0].width,we[0].height);for(let ue=0,Te=we.length;ue<Te;ue++)Y=we[ue],De?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,he,be,Y):t.texImage2D(i.TEXTURE_2D,ue,z,he,be,Y);T.generateMipmaps=!1}else De?(N&&t.texStorage2D(i.TEXTURE_2D,ye,z,W.width,W.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,be,W)):t.texImage2D(i.TEXTURE_2D,0,z,he,be,W);D(T,C)&&P(q),re.__version=K.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function xt(I,T,G){if(T.image.length!==6)return;const q=ze(I,T),U=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);const K=n.get(U);if(U.version!==K.__version||q===!0){t.activeTexture(i.TEXTURE0+G),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const re=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,W=[];for(let ue=0;ue<6;ue++)!re&&!de?W[ue]=x(T.image[ue],!1,!0,u):W[ue]=de?T.image[ue].image:T.image[ue],W[ue]=ht(T,W[ue]);const C=W[0],he=w(C)||s,be=a.convert(T.format,T.colorSpace),z=a.convert(T.type),Y=X(T.internalFormat,be,z,T.colorSpace),we=s&&T.isVideoTexture!==!0,De=K.__version===void 0||q===!0;let N=_(T,C,he);Be(i.TEXTURE_CUBE_MAP,T,he);let ye;if(re){we&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,N,Y,C.width,C.height);for(let ue=0;ue<6;ue++){ye=W[ue].mipmaps;for(let Te=0;Te<ye.length;Te++){const Re=ye[Te];T.format!==ui?be!==null?we?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,0,0,Re.width,Re.height,be,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,Y,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,0,0,Re.width,Re.height,be,z,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,Y,Re.width,Re.height,0,be,z,Re.data)}}}else{ye=T.mipmaps,we&&De&&(ye.length>0&&N++,t.texStorage2D(i.TEXTURE_CUBE_MAP,N,Y,W[0].width,W[0].height));for(let ue=0;ue<6;ue++)if(de){we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,W[ue].width,W[ue].height,be,z,W[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Y,W[ue].width,W[ue].height,0,be,z,W[ue].data);for(let Te=0;Te<ye.length;Te++){const Je=ye[Te].image[ue].image;we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,0,0,Je.width,Je.height,be,z,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,Y,Je.width,Je.height,0,be,z,Je.data)}}else{we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,be,z,W[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Y,be,z,W[ue]);for(let Te=0;Te<ye.length;Te++){const Re=ye[Te];we?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,0,0,be,z,Re.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,Y,be,z,Re.image[ue])}}}D(T,he)&&P(i.TEXTURE_CUBE_MAP),K.__version=U.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Qe(I,T,G,q,U,K){const re=a.convert(G.format,G.colorSpace),de=a.convert(G.type),W=X(G.internalFormat,re,de,G.colorSpace);if(!n.get(T).__hasExternalTextures){const he=Math.max(1,T.width>>K),be=Math.max(1,T.height>>K);U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?t.texImage3D(U,K,W,he,be,T.depth,0,re,de,null):t.texImage2D(U,K,W,he,be,0,re,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ye(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,U,n.get(G).__webglTexture,0,He(T)):(U===i.TEXTURE_2D||U>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,U,n.get(G).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(I,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer&&!T.stencilBuffer){let q=i.DEPTH_COMPONENT16;if(G||Ye(T)){const U=T.depthTexture;U&&U.isDepthTexture&&(U.type===Wi?q=i.DEPTH_COMPONENT32F:U.type===sr&&(q=i.DEPTH_COMPONENT24));const K=He(T);Ye(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,q,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,q,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,q,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(T.depthBuffer&&T.stencilBuffer){const q=He(T);G&&Ye(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,T.width,T.height):Ye(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const q=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let U=0;U<q.length;U++){const K=q[U],re=a.convert(K.format,K.colorSpace),de=a.convert(K.type),W=X(K.internalFormat,re,de,K.colorSpace),C=He(T);G&&Ye(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,C,W,T.width,T.height):Ye(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C,W,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,W,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const q=n.get(T.depthTexture).__webglTexture,U=He(T);if(T.depthTexture.format===Rr)Ye(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(T.depthTexture.format===Ma)Ye(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Oe(I){const T=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Mt(T.__webglFramebuffer,I)}else if(G){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]=i.createRenderbuffer(),te(T.__webglDepthbuffer[q],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),te(T.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(I,T,G){const q=n.get(I);T!==void 0&&Qe(q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Oe(I)}function Ee(I){const T=I.texture,G=n.get(I),q=n.get(T);I.addEventListener("dispose",B),I.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=T.version,l.memory.textures++);const U=I.isWebGLCubeRenderTarget===!0,K=I.isWebGLMultipleRenderTargets===!0,re=w(I)||s;if(U){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(s&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let W=0;W<T.mipmaps.length;W++)G.__webglFramebuffer[de][W]=i.createFramebuffer()}else G.__webglFramebuffer[de]=i.createFramebuffer()}else{if(s&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)G.__webglFramebuffer[de]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(K)if(r.drawBuffers){const de=I.texture;for(let W=0,C=de.length;W<C;W++){const he=n.get(de[W]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&I.samples>0&&Ye(I)===!1){const de=K?T:[T];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let W=0;W<de.length;W++){const C=de[W];G.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[W]);const he=a.convert(C.format,C.colorSpace),be=a.convert(C.type),z=X(C.internalFormat,he,be,C.colorSpace,I.isXRRenderTarget===!0),Y=He(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,z,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,G.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),te(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Be(i.TEXTURE_CUBE_MAP,T,re);for(let de=0;de<6;de++)if(s&&T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)Qe(G.__webglFramebuffer[de][W],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,W);else Qe(G.__webglFramebuffer[de],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);D(T,re)&&P(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){const de=I.texture;for(let W=0,C=de.length;W<C;W++){const he=de[W],be=n.get(he);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),Be(i.TEXTURE_2D,he,re),Qe(G.__webglFramebuffer,I,he,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,0),D(he,re)&&P(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(s?de=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,q.__webglTexture),Be(de,T,re),s&&T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)Qe(G.__webglFramebuffer[W],I,T,i.COLOR_ATTACHMENT0,de,W);else Qe(G.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,de,0);D(T,re)&&P(de),t.unbindTexture()}I.depthBuffer&&Oe(I)}function Fe(I){const T=w(I)||s,G=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let q=0,U=G.length;q<U;q++){const K=G[q];if(D(K,T)){const re=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(K).__webglTexture;t.bindTexture(re,de),P(re),t.unbindTexture()}}}function Ge(I){if(s&&I.samples>0&&Ye(I)===!1){const T=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],G=I.width,q=I.height;let U=i.COLOR_BUFFER_BIT;const K=[],re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(I),W=I.isWebGLMultipleRenderTargets===!0;if(W)for(let C=0;C<T.length;C++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let C=0;C<T.length;C++){K.push(i.COLOR_ATTACHMENT0+C),I.depthBuffer&&K.push(re);const he=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(he===!1&&(I.depthBuffer&&(U|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(U|=i.STENCIL_BUFFER_BIT)),W&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[C]),he===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[re])),W){const be=n.get(T[C]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,G,q,0,0,G,q,U,i.NEAREST),v&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let C=0;C<T.length;C++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,de.__webglColorRenderbuffer[C]);const he=n.get(T[C]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function He(I){return Math.min(h,I.samples)}function Ye(I){const T=n.get(I);return s&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ot(I){const T=l.render.frame;b.get(I)!==T&&(b.set(I,T),I.update())}function ht(I,T){const G=I.colorSpace,q=I.format,U=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Nl||G!==Ci&&G!==Pr&&(G===Zt||G===xo?s===!1?e.has("EXT_sRGB")===!0&&q===ui?(I.format=Nl,I.minFilter=ti,I.generateMipmaps=!1):T=Jf.sRGBToLinear(T):(q!==ui||U!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}this.allocateTextureUnit=ne,this.resetTextureUnits=oe,this.setTexture2D=Q,this.setTexture2DArray=V,this.setTexture3D=fe,this.setTextureCube=Ae,this.rebindTextures=_e,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=Ye}const LS=0,hn=1;function IS(i,e,t){const n=t.isWebGL2;function r(a,l=Pr){let s;const c=l===Zt||l===xo?hn:LS;if(a===cr)return i.UNSIGNED_BYTE;if(a===Vf)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Wf)return i.UNSIGNED_SHORT_5_5_5_1;if(a===cx)return i.BYTE;if(a===ux)return i.SHORT;if(a===sc)return i.UNSIGNED_SHORT;if(a===Hf)return i.INT;if(a===sr)return i.UNSIGNED_INT;if(a===Wi)return i.FLOAT;if(a===Sa)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===dx)return i.ALPHA;if(a===ui)return i.RGBA;if(a===fx)return i.LUMINANCE;if(a===hx)return i.LUMINANCE_ALPHA;if(a===Rr)return i.DEPTH_COMPONENT;if(a===Ma)return i.DEPTH_STENCIL;if(a===Nl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===px)return i.RED;if(a===jf)return i.RED_INTEGER;if(a===mx)return i.RG;if(a===Xf)return i.RG_INTEGER;if(a===qf)return i.RGBA_INTEGER;if(a===Oo||a===ko||a===Fo||a===Bo)if(c===hn)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===su||a===ou||a===lu||a===cu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===su)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ou)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===vx)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===uu||a===du)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===uu)return c===hn?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===du)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===fu||a===hu||a===pu||a===mu||a===vu||a===gu||a===_u||a===xu||a===bu||a===yu||a===Su||a===Mu||a===Eu||a===wu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===fu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===hu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===pu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===mu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===vu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===gu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===_u)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===xu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===bu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===yu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Su)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Mu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Eu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===wu)return c===hn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===zo||a===Tu||a===Au)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===zo)return c===hn?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===gx||a===Ru||a===Cu||a===Pu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===zo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Ru)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Cu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ar?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class DS extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bn extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const US={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const s=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(u,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),v=.02,b=.005;u.inputState.pinching&&f>v+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(US)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vh extends Tn{constructor(e,t,n,r,a,l,s,c,u,d){if(d=d!==void 0?d:Rr,d!==Rr&&d!==Ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Rr&&(n=sr),n===void 0&&d===Ma&&(n=Ar),super(null,r,a,l,s,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class NS extends Dr{constructor(e,t){super();const n=this;let r=null,a=1,l=null,s="local-floor",c=1,u=null,d=null,h=null,f=null,v=null,b=null;const S=t.getContextAttributes();let m=null,p=null;const E=[],x=[],w=new jn;w.layers.enable(1),w.viewport=new Jt;const A=new jn;A.layers.enable(2),A.viewport=new Jt;const D=[w,A],P=new DS;P.layers.enable(1),P.layers.enable(2);let X=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let fe=E[V];return fe===void 0&&(fe=new cl,E[V]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(V){let fe=E[V];return fe===void 0&&(fe=new cl,E[V]=fe),fe.getGripSpace()},this.getHand=function(V){let fe=E[V];return fe===void 0&&(fe=new cl,E[V]=fe),fe.getHandSpace()};function M(V){const fe=x.indexOf(V.inputSource);if(fe===-1)return;const Ae=E[fe];Ae!==void 0&&(Ae.update(V.inputSource,V.frame,u||l),Ae.dispatchEvent({type:V.type,data:V.inputSource}))}function ie(){r.removeEventListener("select",M),r.removeEventListener("selectstart",M),r.removeEventListener("selectend",M),r.removeEventListener("squeeze",M),r.removeEventListener("squeezestart",M),r.removeEventListener("squeezeend",M),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",B);for(let V=0;V<E.length;V++){const fe=x[V];fe!==null&&(x[V]=null,E[V].disconnect(fe))}X=null,_=null,e.setRenderTarget(m),v=null,f=null,h=null,r=null,p=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return h},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",M),r.addEventListener("selectstart",M),r.addEventListener("selectend",M),r.addEventListener("squeeze",M),r.addEventListener("squeezestart",M),r.addEventListener("squeezeend",M),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:v}),p=new Zi(v.framebufferWidth,v.framebufferHeight,{format:ui,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Ae=null,Se=null;S.depth&&(Se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?Ma:Rr,Ae=S.stencil?Ar:sr);const Ie={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),p=new Zi(f.textureWidth,f.textureHeight,{format:ui,type:cr,depthTexture:new vh(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Ue=e.properties.get(p);Ue.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,l=await r.requestReferenceSpace(s),Q.setContext(r),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(V){for(let fe=0;fe<V.removed.length;fe++){const Ae=V.removed[fe],Se=x.indexOf(Ae);Se>=0&&(x[Se]=null,E[Se].disconnect(Ae))}for(let fe=0;fe<V.added.length;fe++){const Ae=V.added[fe];let Se=x.indexOf(Ae);if(Se===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=x.length){x.push(Ae),Se=Ue;break}else if(x[Ue]===null){x[Ue]=Ae,Se=Ue;break}if(Se===-1)break}const Ie=E[Se];Ie&&Ie.connect(Ae)}}const O=new ce,F=new ce;function H(V,fe,Ae){O.setFromMatrixPosition(fe.matrixWorld),F.setFromMatrixPosition(Ae.matrixWorld);const Se=O.distanceTo(F),Ie=fe.projectionMatrix.elements,Ue=Ae.projectionMatrix.elements,Be=Ie[14]/(Ie[10]-1),ze=Ie[14]/(Ie[10]+1),et=(Ie[9]+1)/Ie[5],xt=(Ie[9]-1)/Ie[5],Qe=(Ie[8]-1)/Ie[0],te=(Ue[8]+1)/Ue[0],Mt=Be*Qe,Oe=Be*te,_e=Se/(-Qe+te),Ee=_e*-Qe;fe.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ee),V.translateZ(_e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Fe=Be+_e,Ge=ze+_e,He=Mt-Ee,Ye=Oe+(Se-Ee),ot=et*ze/Ge*Fe,ht=xt*ze/Ge*Fe;V.projectionMatrix.makePerspective(He,Ye,ot,ht,Fe,Ge),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function me(V,fe){fe===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(fe.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;P.near=A.near=w.near=V.near,P.far=A.far=w.far=V.far,(X!==P.near||_!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),X=P.near,_=P.far);const fe=V.parent,Ae=P.cameras;me(P,fe);for(let Se=0;Se<Ae.length;Se++)me(Ae[Se],fe);Ae.length===2?H(P,w,A):P.projectionMatrix.copy(w.projectionMatrix),oe(V,P,fe)};function oe(V,fe,Ae){Ae===null?V.matrix.copy(fe.matrixWorld):(V.matrix.copy(Ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(fe.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(fe.projectionMatrix),V.projectionMatrixInverse.copy(fe.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ol*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&v===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=V)};let ne=null;function Me(V,fe){if(d=fe.getViewerPose(u||l),b=fe,d!==null){const Ae=d.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let Se=!1;Ae.length!==P.cameras.length&&(P.cameras.length=0,Se=!0);for(let Ie=0;Ie<Ae.length;Ie++){const Ue=Ae[Ie];let Be=null;if(v!==null)Be=v.getViewport(Ue);else{const et=h.getViewSubImage(f,Ue);Be=et.viewport,Ie===0&&(e.setRenderTargetTextures(p,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(p))}let ze=D[Ie];ze===void 0&&(ze=new jn,ze.layers.enable(Ie),ze.viewport=new Jt,D[Ie]=ze),ze.matrix.fromArray(Ue.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ue.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Be.x,Be.y,Be.width,Be.height),Ie===0&&(P.matrix.copy(ze.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Se===!0&&P.cameras.push(ze)}}for(let Ae=0;Ae<E.length;Ae++){const Se=x[Ae],Ie=E[Ae];Se!==null&&Ie!==void 0&&Ie.update(Se,fe,u||l)}ne&&ne(V,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),b=null}const Q=new uh;Q.setAnimationLoop(Me),this.setAnimationLoop=function(V){ne=V},this.dispose=function(){}}}function OS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),d(m,p)):p.isMeshStandardMaterial?(a(m,p),f(m,p),p.isMeshPhysicalMaterial&&v(m,p,w)):p.isMeshMatcapMaterial?(a(m,p),b(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),S(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(l(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?c(m,p,E,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function v(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function kS(i,e,t,n){let r={},a={},l=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,x){const w=x.program;n.uniformBlockBinding(E,w)}function u(E,x){let w=r[E.id];w===void 0&&(b(E),w=d(E),r[E.id]=w,E.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(E,A);const D=e.render.frame;a[E.id]!==D&&(f(E),a[E.id]=D)}function d(E){const x=h();E.__bindingPointIndex=x;const w=i.createBuffer(),A=E.__size,D=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function h(){for(let E=0;E<s;E++)if(l.indexOf(E)===-1)return l.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=r[E.id],w=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let D=0,P=w.length;D<P;D++){const X=w[D];if(v(X,D,A)===!0){const _=X.__offset,M=Array.isArray(X.value)?X.value:[X.value];let ie=0;for(let B=0;B<M.length;B++){const O=M[B],F=S(O);typeof O=="number"?(X.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,_+ie,X.__data)):O.isMatrix3?(X.__data[0]=O.elements[0],X.__data[1]=O.elements[1],X.__data[2]=O.elements[2],X.__data[3]=O.elements[0],X.__data[4]=O.elements[3],X.__data[5]=O.elements[4],X.__data[6]=O.elements[5],X.__data[7]=O.elements[0],X.__data[8]=O.elements[6],X.__data[9]=O.elements[7],X.__data[10]=O.elements[8],X.__data[11]=O.elements[0]):(O.toArray(X.__data,ie),ie+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,_,X.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(E,x,w){const A=E.value;if(w[x]===void 0){if(typeof A=="number")w[x]=A;else{const D=Array.isArray(A)?A:[A],P=[];for(let X=0;X<D.length;X++)P.push(D[X].clone());w[x]=P}return!0}else if(typeof A=="number"){if(w[x]!==A)return w[x]=A,!0}else{const D=Array.isArray(w[x])?w[x]:[w[x]],P=Array.isArray(A)?A:[A];for(let X=0;X<D.length;X++){const _=D[X];if(_.equals(P[X])===!1)return _.copy(P[X]),!0}}return!1}function b(E){const x=E.uniforms;let w=0;const A=16;let D=0;for(let P=0,X=x.length;P<X;P++){const _=x[P],M={boundary:0,storage:0},ie=Array.isArray(_.value)?_.value:[_.value];for(let B=0,O=ie.length;B<O;B++){const F=ie[B],H=S(F);M.boundary+=H.boundary,M.storage+=H.storage}if(_.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),_.__offset=w,P>0){D=w%A;const B=A-D;D!==0&&B-M.boundary<0&&(w+=A-D,_.__offset=w)}w+=M.storage}return D=w%A,D>0&&(w+=A-D),E.__size=w,E.__cache={},this}function S(E){const x={boundary:0,storage:0};return typeof E=="number"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const w=l.indexOf(x.__bindingPointIndex);l.splice(w,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);l=[],r={},a={}}return{bind:c,update:u,dispose:p}}class gh{constructor(e={}){const{canvas:t=Ix(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=l;const v=new Uint32Array(4),b=new Int32Array(4);let S=null,m=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const x=this;let w=!1,A=0,D=0,P=null,X=-1,_=null;const M=new Jt,ie=new Jt;let B=null;const O=new Bt(0);let F=0,H=t.width,me=t.height,oe=1,ne=null,Me=null;const Q=new Jt(0,0,H,me),V=new Jt(0,0,H,me);let fe=!1;const Ae=new lc;let Se=!1,Ie=!1,Ue=null;const Be=new sn,ze=new at,et=new ce,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return P===null?oe:1}let te=n;function Mt(R,ee){for(let pe=0;pe<R.length;pe++){const le=R[pe],xe=t.getContext(le,ee);if(xe!==null)return xe}return null}try{const R={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ac}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Te,!1),te===null){const ee=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&ee.shift(),te=Mt(ee,R),te===null)throw Mt(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Oe,_e,Ee,Fe,Ge,He,Ye,ot,ht,I,T,G,q,U,K,re,de,W,C,he,be,z,Y,we;function De(){Oe=new Yy(te),_e=new Hy(te,Oe,e),Oe.init(_e),z=new IS(te,Oe,_e),Ee=new CS(te,Oe,_e),Fe=new Jy(te),Ge=new mS,He=new PS(te,Oe,Ee,Ge,_e,z,Fe),Ye=new Wy(x),ot=new qy(x),ht=new ob(te,_e),Y=new zy(te,Oe,ht,_e),I=new Ky(te,ht,Fe,Y),T=new t1(te,I,ht,Fe),C=new e1(te,_e,He),re=new Vy(Ge),G=new pS(x,Ye,ot,Oe,_e,Y,re),q=new OS(x,Ge),U=new gS,K=new MS(Oe,_e),W=new By(x,Ye,ot,Ee,T,f,c),de=new RS(x,T,_e),we=new kS(te,Fe,_e,Ee),he=new Gy(te,Oe,Fe,_e),be=new Zy(te,Oe,Fe,_e),Fe.programs=G.programs,x.capabilities=_e,x.extensions=Oe,x.properties=Ge,x.renderLists=U,x.shadowMap=de,x.state=Ee,x.info=Fe}De();const N=new NS(x,te);this.xr=N,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const R=Oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(R){R!==void 0&&(oe=R,this.setSize(H,me,!1))},this.getSize=function(R){return R.set(H,me)},this.setSize=function(R,ee,pe=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,me=ee,t.width=Math.floor(R*oe),t.height=Math.floor(ee*oe),pe===!0&&(t.style.width=R+"px",t.style.height=ee+"px"),this.setViewport(0,0,R,ee)},this.getDrawingBufferSize=function(R){return R.set(H*oe,me*oe).floor()},this.setDrawingBufferSize=function(R,ee,pe){H=R,me=ee,oe=pe,t.width=Math.floor(R*pe),t.height=Math.floor(ee*pe),this.setViewport(0,0,R,ee)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,ee,pe,le){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,ee,pe,le),Ee.viewport(M.copy(Q).multiplyScalar(oe).floor())},this.getScissor=function(R){return R.copy(V)},this.setScissor=function(R,ee,pe,le){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,ee,pe,le),Ee.scissor(ie.copy(V).multiplyScalar(oe).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(R){Ee.setScissorTest(fe=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){Me=R},this.getClearColor=function(R){return R.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(R=!0,ee=!0,pe=!0){let le=0;if(R){let xe=!1;if(P!==null){const qe=P.texture.format;xe=qe===qf||qe===Xf||qe===jf}if(xe){const qe=P.texture.type,rt=qe===cr||qe===sr||qe===sc||qe===Ar||qe===Vf||qe===Wf,dt=W.getClearColor(),ct=W.getClearAlpha(),St=dt.r,mt=dt.g,bt=dt.b;rt?(v[0]=St,v[1]=mt,v[2]=bt,v[3]=ct,te.clearBufferuiv(te.COLOR,0,v)):(b[0]=St,b[1]=mt,b[2]=bt,b[3]=ct,te.clearBufferiv(te.COLOR,0,b))}else le|=te.COLOR_BUFFER_BIT}ee&&(le|=te.DEPTH_BUFFER_BIT),pe&&(le|=te.STENCIL_BUFFER_BIT),te.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),U.dispose(),K.dispose(),Ge.dispose(),Ye.dispose(),ot.dispose(),T.dispose(),Y.dispose(),we.dispose(),G.dispose(),N.dispose(),N.removeEventListener("sessionstart",ut),N.removeEventListener("sessionend",Pt),Ue&&(Ue.dispose(),Ue=null),wt.stop()};function ye(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=Fe.autoReset,ee=de.enabled,pe=de.autoUpdate,le=de.needsUpdate,xe=de.type;De(),Fe.autoReset=R,de.enabled=ee,de.autoUpdate=pe,de.needsUpdate=le,de.type=xe}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Re(R){const ee=R.target;ee.removeEventListener("dispose",Re),Je(ee)}function Je(R){Ze(R),Ge.remove(R)}function Ze(R){const ee=Ge.get(R).programs;ee!==void 0&&(ee.forEach(function(pe){G.releaseProgram(pe)}),R.isShaderMaterial&&G.releaseShaderCache(R))}this.renderBufferDirect=function(R,ee,pe,le,xe,qe){ee===null&&(ee=xt);const rt=xe.isMesh&&xe.matrixWorld.determinant()<0,dt=gt(R,ee,pe,le,xe);Ee.setMaterial(le,rt);let ct=pe.index,St=1;if(le.wireframe===!0){if(ct=I.getWireframeAttribute(pe),ct===void 0)return;St=2}const mt=pe.drawRange,bt=pe.attributes.position;let ve=mt.start*St,Ce=(mt.start+mt.count)*St;qe!==null&&(ve=Math.max(ve,qe.start*St),Ce=Math.min(Ce,(qe.start+qe.count)*St)),ct!==null?(ve=Math.max(ve,0),Ce=Math.min(Ce,ct.count)):bt!=null&&(ve=Math.max(ve,0),Ce=Math.min(Ce,bt.count));const je=Ce-ve;if(je<0||je===1/0)return;Y.setup(xe,le,dt,pe,ct);let ft,it=he;if(ct!==null&&(ft=ht.get(ct),it=be,it.setIndex(ft)),xe.isMesh)le.wireframe===!0?(Ee.setLineWidth(le.wireframeLinewidth*Qe()),it.setMode(te.LINES)):it.setMode(te.TRIANGLES);else if(xe.isLine){let tt=le.linewidth;tt===void 0&&(tt=1),Ee.setLineWidth(tt*Qe()),xe.isLineSegments?it.setMode(te.LINES):xe.isLineLoop?it.setMode(te.LINE_LOOP):it.setMode(te.LINE_STRIP)}else xe.isPoints?it.setMode(te.POINTS):xe.isSprite&&it.setMode(te.TRIANGLES);if(xe.isInstancedMesh)it.renderInstances(ve,je,xe.count);else if(pe.isInstancedBufferGeometry){const tt=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Gt=Math.min(pe.instanceCount,tt);it.renderInstances(ve,je,Gt)}else it.render(ve,je)},this.compile=function(R,ee){function pe(le,xe,qe){le.transparent===!0&&le.side===ii&&le.forceSinglePass===!1?(le.side=Fn,le.needsUpdate=!0,Ut(le,xe,qe),le.side=Ri,le.needsUpdate=!0,Ut(le,xe,qe),le.side=ii):Ut(le,xe,qe)}m=K.get(R),m.init(),E.push(m),R.traverseVisible(function(le){le.isLight&&le.layers.test(ee.layers)&&(m.pushLight(le),le.castShadow&&m.pushShadow(le))}),m.setupLights(x._useLegacyLights),R.traverse(function(le){const xe=le.material;if(xe)if(Array.isArray(xe))for(let qe=0;qe<xe.length;qe++){const rt=xe[qe];pe(rt,R,le)}else pe(xe,R,le)}),E.pop(),m=null};let nt=null;function yt(R){nt&&nt(R)}function ut(){wt.stop()}function Pt(){wt.start()}const wt=new uh;wt.setAnimationLoop(yt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(R){nt=R,N.setAnimationLoop(R),R===null?wt.stop():wt.start()},N.addEventListener("sessionstart",ut),N.addEventListener("sessionend",Pt),this.render=function(R,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(ee),ee=N.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,ee,P),m=K.get(R,E.length),m.init(),E.push(m),Be.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Ae.setFromProjectionMatrix(Be),Ie=this.localClippingEnabled,Se=re.init(this.clippingPlanes,Ie),S=U.get(R,p.length),S.init(),p.push(S),We(R,ee,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(ne,Me),this.info.render.frame++,Se===!0&&re.beginShadows();const pe=m.state.shadowsArray;if(de.render(pe,R,ee),Se===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(S,R),m.setupLights(x._useLegacyLights),ee.isArrayCamera){const le=ee.cameras;for(let xe=0,qe=le.length;xe<qe;xe++){const rt=le[xe];ke(S,R,rt,rt.viewport)}}else ke(S,R,ee);P!==null&&(He.updateMultisampleRenderTarget(P),He.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(x,R,ee),Y.resetDefaultState(),X=-1,_=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function We(R,ee,pe,le){if(R.visible===!1)return;if(R.layers.test(ee.layers)){if(R.isGroup)pe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ee);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ae.intersectsSprite(R)){le&&et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Be);const rt=T.update(R),dt=R.material;dt.visible&&S.push(R,rt,dt,pe,et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ae.intersectsObject(R))){const rt=T.update(R),dt=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),et.copy(R.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),et.copy(rt.boundingSphere.center)),et.applyMatrix4(R.matrixWorld).applyMatrix4(Be)),Array.isArray(dt)){const ct=rt.groups;for(let St=0,mt=ct.length;St<mt;St++){const bt=ct[St],ve=dt[bt.materialIndex];ve&&ve.visible&&S.push(R,rt,ve,pe,et.z,bt)}}else dt.visible&&S.push(R,rt,dt,pe,et.z,null)}}const qe=R.children;for(let rt=0,dt=qe.length;rt<dt;rt++)We(qe[rt],ee,pe,le)}function ke(R,ee,pe,le){const xe=R.opaque,qe=R.transmissive,rt=R.transparent;m.setupLightsView(pe),Se===!0&&re.setGlobalState(x.clippingPlanes,pe),qe.length>0&&lt(xe,qe,ee,pe),le&&Ee.viewport(M.copy(le)),xe.length>0&&Lt(xe,ee,pe),qe.length>0&&Lt(qe,ee,pe),rt.length>0&&Lt(rt,ee,pe),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function lt(R,ee,pe,le){const xe=_e.isWebGL2;Ue===null&&(Ue=new Zi(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")?Sa:cr,minFilter:us,samples:xe?4:0})),x.getDrawingBufferSize(ze),xe?Ue.setSize(ze.x,ze.y):Ue.setSize(kl(ze.x),kl(ze.y));const qe=x.getRenderTarget();x.setRenderTarget(Ue),x.getClearColor(O),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear();const rt=x.toneMapping;x.toneMapping=lr,Lt(R,pe,le),He.updateMultisampleRenderTarget(Ue),He.updateRenderTargetMipmap(Ue);let dt=!1;for(let ct=0,St=ee.length;ct<St;ct++){const mt=ee[ct],bt=mt.object,ve=mt.geometry,Ce=mt.material,je=mt.group;if(Ce.side===ii&&bt.layers.test(le.layers)){const ft=Ce.side;Ce.side=Fn,Ce.needsUpdate=!0,_t(bt,pe,le,ve,Ce,je),Ce.side=ft,Ce.needsUpdate=!0,dt=!0}}dt===!0&&(He.updateMultisampleRenderTarget(Ue),He.updateRenderTargetMipmap(Ue)),x.setRenderTarget(qe),x.setClearColor(O,F),x.toneMapping=rt}function Lt(R,ee,pe){const le=ee.isScene===!0?ee.overrideMaterial:null;for(let xe=0,qe=R.length;xe<qe;xe++){const rt=R[xe],dt=rt.object,ct=rt.geometry,St=le===null?rt.material:le,mt=rt.group;dt.layers.test(pe.layers)&&_t(dt,ee,pe,ct,St,mt)}}function _t(R,ee,pe,le,xe,qe){R.onBeforeRender(x,ee,pe,le,xe,qe),R.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),xe.onBeforeRender(x,ee,pe,le,R,qe),xe.transparent===!0&&xe.side===ii&&xe.forceSinglePass===!1?(xe.side=Fn,xe.needsUpdate=!0,x.renderBufferDirect(pe,ee,le,xe,R,qe),xe.side=Ri,xe.needsUpdate=!0,x.renderBufferDirect(pe,ee,le,xe,R,qe),xe.side=ii):x.renderBufferDirect(pe,ee,le,xe,R,qe),R.onAfterRender(x,ee,pe,le,xe,qe)}function Ut(R,ee,pe){ee.isScene!==!0&&(ee=xt);const le=Ge.get(R),xe=m.state.lights,qe=m.state.shadowsArray,rt=xe.state.version,dt=G.getParameters(R,xe.state,qe,ee,pe),ct=G.getProgramCacheKey(dt);let St=le.programs;le.environment=R.isMeshStandardMaterial?ee.environment:null,le.fog=ee.fog,le.envMap=(R.isMeshStandardMaterial?ot:Ye).get(R.envMap||le.environment),St===void 0&&(R.addEventListener("dispose",Re),St=new Map,le.programs=St);let mt=St.get(ct);if(mt!==void 0){if(le.currentProgram===mt&&le.lightsStateVersion===rt)return zt(R,dt),mt}else dt.uniforms=G.getUniforms(R),R.onBuild(pe,dt,x),R.onBeforeCompile(dt,x),mt=G.acquireProgram(dt,ct),St.set(ct,mt),le.uniforms=dt.uniforms;const bt=le.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(bt.clippingPlanes=re.uniform),zt(R,dt),le.needsLights=Xe(R),le.lightsStateVersion=rt,le.needsLights&&(bt.ambientLightColor.value=xe.state.ambient,bt.lightProbe.value=xe.state.probe,bt.directionalLights.value=xe.state.directional,bt.directionalLightShadows.value=xe.state.directionalShadow,bt.spotLights.value=xe.state.spot,bt.spotLightShadows.value=xe.state.spotShadow,bt.rectAreaLights.value=xe.state.rectArea,bt.ltc_1.value=xe.state.rectAreaLTC1,bt.ltc_2.value=xe.state.rectAreaLTC2,bt.pointLights.value=xe.state.point,bt.pointLightShadows.value=xe.state.pointShadow,bt.hemisphereLights.value=xe.state.hemi,bt.directionalShadowMap.value=xe.state.directionalShadowMap,bt.directionalShadowMatrix.value=xe.state.directionalShadowMatrix,bt.spotShadowMap.value=xe.state.spotShadowMap,bt.spotLightMatrix.value=xe.state.spotLightMatrix,bt.spotLightMap.value=xe.state.spotLightMap,bt.pointShadowMap.value=xe.state.pointShadowMap,bt.pointShadowMatrix.value=xe.state.pointShadowMatrix);const ve=mt.getUniforms(),Ce=Qs.seqWithValue(ve.seq,bt);return le.currentProgram=mt,le.uniformsList=Ce,mt}function zt(R,ee){const pe=Ge.get(R);pe.outputColorSpace=ee.outputColorSpace,pe.instancing=ee.instancing,pe.instancingColor=ee.instancingColor,pe.skinning=ee.skinning,pe.morphTargets=ee.morphTargets,pe.morphNormals=ee.morphNormals,pe.morphColors=ee.morphColors,pe.morphTargetsCount=ee.morphTargetsCount,pe.numClippingPlanes=ee.numClippingPlanes,pe.numIntersection=ee.numClipIntersection,pe.vertexAlphas=ee.vertexAlphas,pe.vertexTangents=ee.vertexTangents,pe.toneMapping=ee.toneMapping}function gt(R,ee,pe,le,xe){ee.isScene!==!0&&(ee=xt),He.resetTextureUnits();const qe=ee.fog,rt=le.isMeshStandardMaterial?ee.environment:null,dt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ci,ct=(le.isMeshStandardMaterial?ot:Ye).get(le.envMap||rt),St=le.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,mt=!!pe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),bt=!!pe.morphAttributes.position,ve=!!pe.morphAttributes.normal,Ce=!!pe.morphAttributes.color;let je=lr;le.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(je=x.toneMapping);const ft=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,it=ft!==void 0?ft.length:0,tt=Ge.get(le),Gt=m.state.lights;if(Se===!0&&(Ie===!0||R!==_)){const qt=R===_&&le.id===X;re.setState(le,R,qt)}let Tt=!1;le.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Gt.state.version||tt.outputColorSpace!==dt||xe.isInstancedMesh&&tt.instancing===!1||!xe.isInstancedMesh&&tt.instancing===!0||xe.isSkinnedMesh&&tt.skinning===!1||!xe.isSkinnedMesh&&tt.skinning===!0||xe.isInstancedMesh&&tt.instancingColor===!0&&xe.instanceColor===null||xe.isInstancedMesh&&tt.instancingColor===!1&&xe.instanceColor!==null||tt.envMap!==ct||le.fog===!0&&tt.fog!==qe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==re.numPlanes||tt.numIntersection!==re.numIntersection)||tt.vertexAlphas!==St||tt.vertexTangents!==mt||tt.morphTargets!==bt||tt.morphNormals!==ve||tt.morphColors!==Ce||tt.toneMapping!==je||_e.isWebGL2===!0&&tt.morphTargetsCount!==it)&&(Tt=!0):(Tt=!0,tt.__version=le.version);let nn=tt.currentProgram;Tt===!0&&(nn=Ut(le,ee,xe));let Bn=!1,fn=!1,xn=!1;const Ht=nn.getUniforms(),Mn=tt.uniforms;if(Ee.useProgram(nn.program)&&(Bn=!0,fn=!0,xn=!0),le.id!==X&&(X=le.id,fn=!0),Bn||_!==R){Ht.setValue(te,"projectionMatrix",R.projectionMatrix),Ht.setValue(te,"viewMatrix",R.matrixWorldInverse);const qt=Ht.map.cameraPosition;qt!==void 0&&qt.setValue(te,et.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&Ht.setValue(te,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ht.setValue(te,"isOrthographic",R.isOrthographicCamera===!0),_!==R&&(_=R,fn=!0,xn=!0)}if(xe.isSkinnedMesh){Ht.setOptional(te,xe,"bindMatrix"),Ht.setOptional(te,xe,"bindMatrixInverse");const qt=xe.skeleton;qt&&(_e.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ht.setValue(te,"boneTexture",qt.boneTexture,He),Ht.setValue(te,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zn=pe.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0&&_e.isWebGL2===!0)&&C.update(xe,pe,nn),(fn||tt.receiveShadow!==xe.receiveShadow)&&(tt.receiveShadow=xe.receiveShadow,Ht.setValue(te,"receiveShadow",xe.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Mn.envMap.value=ct,Mn.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),fn&&(Ht.setValue(te,"toneMappingExposure",x.toneMappingExposure),tt.needsLights&&pt(Mn,xn),qe&&le.fog===!0&&q.refreshFogUniforms(Mn,qe),q.refreshMaterialUniforms(Mn,le,oe,me,Ue),Qs.upload(te,tt.uniformsList,Mn,He)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Qs.upload(te,tt.uniformsList,Mn,He),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ht.setValue(te,"center",xe.center),Ht.setValue(te,"modelViewMatrix",xe.modelViewMatrix),Ht.setValue(te,"normalMatrix",xe.normalMatrix),Ht.setValue(te,"modelMatrix",xe.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const qt=le.uniformsGroups;for(let Li=0,Da=qt.length;Li<Da;Li++)if(_e.isWebGL2){const Ur=qt[Li];we.update(Ur,nn),we.bind(Ur,nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nn}function pt(R,ee){R.ambientLightColor.needsUpdate=ee,R.lightProbe.needsUpdate=ee,R.directionalLights.needsUpdate=ee,R.directionalLightShadows.needsUpdate=ee,R.pointLights.needsUpdate=ee,R.pointLightShadows.needsUpdate=ee,R.spotLights.needsUpdate=ee,R.spotLightShadows.needsUpdate=ee,R.rectAreaLights.needsUpdate=ee,R.hemisphereLights.needsUpdate=ee}function Xe(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,ee,pe){Ge.get(R.texture).__webglTexture=ee,Ge.get(R.depthTexture).__webglTexture=pe;const le=Ge.get(R);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=pe===void 0,le.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,ee){const pe=Ge.get(R);pe.__webglFramebuffer=ee,pe.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(R,ee=0,pe=0){P=R,A=ee,D=pe;let le=!0,xe=null,qe=!1,rt=!1;if(R){const ct=Ge.get(R);ct.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(te.FRAMEBUFFER,null),le=!1):ct.__webglFramebuffer===void 0?He.setupRenderTarget(R):ct.__hasExternalTextures&&He.rebindTextures(R,Ge.get(R.texture).__webglTexture,Ge.get(R.depthTexture).__webglTexture);const St=R.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(rt=!0);const mt=Ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(mt[ee])?xe=mt[ee][pe]:xe=mt[ee],qe=!0):_e.isWebGL2&&R.samples>0&&He.useMultisampledRTT(R)===!1?xe=Ge.get(R).__webglMultisampledFramebuffer:Array.isArray(mt)?xe=mt[pe]:xe=mt,M.copy(R.viewport),ie.copy(R.scissor),B=R.scissorTest}else M.copy(Q).multiplyScalar(oe).floor(),ie.copy(V).multiplyScalar(oe).floor(),B=fe;if(Ee.bindFramebuffer(te.FRAMEBUFFER,xe)&&_e.drawBuffers&&le&&Ee.drawBuffers(R,xe),Ee.viewport(M),Ee.scissor(ie),Ee.setScissorTest(B),qe){const ct=Ge.get(R.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ct.__webglTexture,pe)}else if(rt){const ct=Ge.get(R.texture),St=ee||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,ct.__webglTexture,pe||0,St)}X=-1},this.readRenderTargetPixels=function(R,ee,pe,le,xe,qe,rt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){Ee.bindFramebuffer(te.FRAMEBUFFER,dt);try{const ct=R.texture,St=ct.format,mt=ct.type;if(St!==ui&&z.convert(St)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const bt=mt===Sa&&(Oe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&Oe.has("EXT_color_buffer_float"));if(mt!==cr&&z.convert(mt)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)&&!(mt===Wi&&(_e.isWebGL2||Oe.has("OES_texture_float")||Oe.has("WEBGL_color_buffer_float")))&&!bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=R.width-le&&pe>=0&&pe<=R.height-xe&&te.readPixels(ee,pe,le,xe,z.convert(St),z.convert(mt),qe)}finally{const ct=P!==null?Ge.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(te.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(R,ee,pe=0){const le=Math.pow(2,-pe),xe=Math.floor(ee.image.width*le),qe=Math.floor(ee.image.height*le);He.setTexture2D(ee,0),te.copyTexSubImage2D(te.TEXTURE_2D,pe,0,0,R.x,R.y,xe,qe),Ee.unbindTexture()},this.copyTextureToTexture=function(R,ee,pe,le=0){const xe=ee.image.width,qe=ee.image.height,rt=z.convert(pe.format),dt=z.convert(pe.type);He.setTexture2D(pe,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,pe.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pe.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,pe.unpackAlignment),ee.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,le,R.x,R.y,xe,qe,rt,dt,ee.image.data):ee.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,le,R.x,R.y,ee.mipmaps[0].width,ee.mipmaps[0].height,rt,ee.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,le,R.x,R.y,rt,dt,ee.image),le===0&&pe.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(R,ee,pe,le,xe=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const qe=R.max.x-R.min.x+1,rt=R.max.y-R.min.y+1,dt=R.max.z-R.min.z+1,ct=z.convert(le.format),St=z.convert(le.type);let mt;if(le.isData3DTexture)He.setTexture3D(le,0),mt=te.TEXTURE_3D;else if(le.isDataArrayTexture)He.setTexture2DArray(le,0),mt=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,le.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,le.unpackAlignment);const bt=te.getParameter(te.UNPACK_ROW_LENGTH),ve=te.getParameter(te.UNPACK_IMAGE_HEIGHT),Ce=te.getParameter(te.UNPACK_SKIP_PIXELS),je=te.getParameter(te.UNPACK_SKIP_ROWS),ft=te.getParameter(te.UNPACK_SKIP_IMAGES),it=pe.isCompressedTexture?pe.mipmaps[0]:pe.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,it.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,it.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,R.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,R.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,R.min.z),pe.isDataTexture||pe.isData3DTexture?te.texSubImage3D(mt,xe,ee.x,ee.y,ee.z,qe,rt,dt,ct,St,it.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(mt,xe,ee.x,ee.y,ee.z,qe,rt,dt,ct,it.data)):te.texSubImage3D(mt,xe,ee.x,ee.y,ee.z,qe,rt,dt,ct,St,it),te.pixelStorei(te.UNPACK_ROW_LENGTH,bt),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,ve),te.pixelStorei(te.UNPACK_SKIP_PIXELS,Ce),te.pixelStorei(te.UNPACK_SKIP_ROWS,je),te.pixelStorei(te.UNPACK_SKIP_IMAGES,ft),xe===0&&le.generateMipmaps&&te.generateMipmap(mt),Ee.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?He.setTextureCube(R,0):R.isData3DTexture?He.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?He.setTexture2DArray(R,0):He.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){A=0,D=0,P=null,Ee.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?Cr:Yf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cr?Zt:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class FS extends gh{}FS.prototype.isWebGL1Renderer=!0;class BS extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class zS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ul,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new ce;class uo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),a=Vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _h extends La{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ea;const Ba=new ce,ta=new ce,na=new ce,ia=new at,za=new at,xh=new sn,Hs=new ce,Ga=new ce,Vs=new ce,md=new at,ul=new at,vd=new at;class GS extends An{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new $i;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zS(t,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new uo(n,3,0,!1)),ea.setAttribute("uv",new uo(n,2,3,!1))}this.geometry=ea,this.material=e!==void 0?e:new _h,this.center=new at(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),xh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),na.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-na.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const l=this.center;Ws(Hs.set(-.5,-.5,0),na,l,ta,r,a),Ws(Ga.set(.5,-.5,0),na,l,ta,r,a),Ws(Vs.set(.5,.5,0),na,l,ta,r,a),md.set(0,0),ul.set(1,0),vd.set(1,1);let s=e.ray.intersectTriangle(Hs,Ga,Vs,!1,Ba);if(s===null&&(Ws(Ga.set(-.5,.5,0),na,l,ta,r,a),ul.set(0,1),s=e.ray.intersectTriangle(Hs,Vs,Ga,!1,Ba),s===null))return;const c=e.ray.origin.distanceTo(Ba);c<e.near||c>e.far||t.push({distance:c,point:Ba.clone(),uv:ni.getInterpolation(Ba,Hs,Ga,Vs,md,ul,vd,new at),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ws(i,e,t,n,r,a){ia.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(za.x=a*ia.x-r*ia.y,za.y=r*ia.x+a*ia.y):za.copy(ia),i.copy(e),i.x+=za.x,i.y+=za.y,i.applyMatrix4(xh)}class $s extends Tn{constructor(e,t,n,r,a,l,s,c,u){super(e,t,n,r,a,l,s,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ds extends La{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bh extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const dl=new sn,gd=new ce,_d=new ce;class HS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(gd),_d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_d),t.updateMatrixWorld(),dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xd=new sn,Ha=new ce,fl=new ce;class VS extends HS{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new ce(1,0,0),new ce(-1,0,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,1,0),new ce(0,-1,0)],this._cubeUps=[new ce(0,1,0),new ce(0,1,0),new ce(0,1,0),new ce(0,1,0),new ce(0,0,1),new ce(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ha.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ha),fl.copy(n.position),fl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fl),n.updateMatrixWorld(),r.makeTranslation(-Ha.x,-Ha.y,-Ha.z),xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd)}}class WS extends bh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new VS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jS extends bh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bd(){return(typeof performance>"u"?Date:performance).now()}class yd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(In(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);function dc(i,e,t,n,r,a,l,s){const c=(P,X,_,M)=>[new at(P/l,1-M/s),new at(_/l,1-M/s),new at(_/l,1-X/s),new at(P/l,1-X/s)],u=c(e+a,t,e+n+a,t+a),d=c(e+n+a,t,e+n*2+a,t+a),h=c(e,t+a,e+a,t+a+r),f=c(e+a,t+a,e+n+a,t+a+r),v=c(e+n+a,t+a,e+n+a*2,t+r+a),b=c(e+n+a*2,t+a,e+n*2+a*2,t+r+a),S=i.attributes.uv,m=[v[3],v[2],v[0],v[1]],p=[h[3],h[2],h[0],h[1]],E=[u[3],u[2],u[0],u[1]],x=[d[0],d[1],d[3],d[2]],w=[f[3],f[2],f[0],f[1]],A=[b[3],b[2],b[0],b[1]],D=[];for(const P of[m,p,E,x,w,A])for(const X of P)D.push(X.x,X.y);S.set(new Float32Array(D)),S.needsUpdate=!0}function Zn(i,e,t,n,r,a){dc(i,e,t,n,r,a,64,64)}function Bl(i,e,t,n,r,a){dc(i,e,t,n,r,a,64,32)}class gr extends bn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class XS extends bn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new ds({side:Ri}),this.layer2Material=new ds({side:ii,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new rn(8,8,8);Zn(e,0,0,8,8,8);const t=new Wt(e,this.layer1Material),n=new rn(9,9,9);Zn(n,32,0,8,8,8);const r=new Wt(n,this.layer2Material);this.head=new gr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new rn(8,12,4);Zn(a,16,16,8,12,4);const l=new Wt(a,this.layer1Material),s=new rn(8.5,12.5,4.5);Zn(s,16,32,8,12,4);const c=new Wt(s,this.layer2Material);this.body=new gr(l,c),this.body.name="body",this.body.add(l,c),this.body.position.y=-6,this.add(this.body);const u=new rn,d=new Wt(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3:4,d.scale.y=12,d.scale.z=4,Zn(u,40,16,this.slim?3:4,12,4)});const h=new rn,f=new Wt(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Zn(h,40,32,this.slim?3:4,12,4)});const v=new bn;v.add(d,f),this.modelListeners.push(()=>{v.position.x=this.slim?-.5:-1}),v.position.y=-4,this.rightArm=new gr(d,f),this.rightArm.name="rightArm",this.rightArm.add(v),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const b=new rn,S=new Wt(b,this.layer1MaterialBiased);this.modelListeners.push(()=>{S.scale.x=this.slim?3:4,S.scale.y=12,S.scale.z=4,Zn(b,32,48,this.slim?3:4,12,4)});const m=new rn,p=new Wt(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Zn(m,48,48,this.slim?3:4,12,4)});const E=new bn;E.add(S,p),this.modelListeners.push(()=>{E.position.x=this.slim?.5:1}),E.position.y=-4,this.leftArm=new gr(S,p),this.leftArm.name="leftArm",this.leftArm.add(E),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const x=new rn(4,12,4);Zn(x,0,16,4,12,4);const w=new Wt(x,this.layer1MaterialBiased),A=new rn(4.5,12.5,4.5);Zn(A,0,32,4,12,4);const D=new Wt(A,this.layer2MaterialBiased),P=new bn;P.add(w,D),P.position.y=-6,this.rightLeg=new gr(w,D),this.rightLeg.name="rightLeg",this.rightLeg.add(P),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const X=new rn(4,12,4);Zn(X,16,48,4,12,4);const _=new Wt(X,this.layer1MaterialBiased),M=new rn(4.5,12.5,4.5);Zn(M,0,48,4,12,4);const ie=new Wt(M,this.layer2MaterialBiased),B=new bn;B.add(_,ie),B.position.y=-6,this.leftLeg=new gr(_,ie),this.leftLeg.name="leftLeg",this.leftLeg.add(B),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof gr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class qS extends bn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ds({side:ii,transparent:!0,alphaTest:1e-5});const e=new rn(10,16,1);Bl(e,0,0,10,16,1),this.cape=new Wt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class YS extends bn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ds({side:ii,transparent:!0,alphaTest:1e-5});const e=new rn(12,22,4);Bl(e,22,0,10,20,2);const t=new Wt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new bn,this.leftWing.add(t),this.add(this.leftWing);const n=new rn(12,22,4);Bl(n,22,0,10,20,2);const r=new Wt(n,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new bn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class KS extends bn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ds({side:Ri});const e=new rn(8,8,4/3);dc(e,0,0,6,6,1,14,7),this.rightEar=new Wt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Wt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Sd=10.8*Math.PI/180;class ZS extends bn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new XS,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new qS,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Sd,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new YS,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new KS,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Sd,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function js(i){return i instanceof HTMLImageElement||i instanceof HTMLVideoElement||i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas}function zl(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let s=0;s<r;s++){const c=(l+s*n)*4;if(a.data[c+3]!==255)return!0}return!1}function So(i){return i/64}function Md(i,e,t){if(t){if(zl(i,0,0,e,e))return}else if(zl(i,0,0,e,e/2))return;const n=So(e),r=(a,l,s,c)=>i.clearRect(a*n,l*n,s*n,c*n);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function JS(i,e){i.save(),i.scale(-1,1);const t=So(e),n=(r,a,l,s,c,u)=>i.drawImage(i.canvas,r*t,a*t,l*t,s*t,-c*t,u*t,-l*t,s*t);n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52),i.restore()}function QS(i,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=i.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;i.width=r,i.height=r,n.clearRect(0,0,r,r),n.drawImage(e,0,0,r,r/2),JS(n,r),Md(n,i.width,!1)}else i.width=e.width,i.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0,i.width,i.height),Md(n,i.width,!0)}function $S(i){if(i.width===2*i.height)return i.width/64;if(i.width*17===i.height*22)return i.width/22;if(i.width*11===i.height*23)return i.width/46;throw new Error(`Bad cape size: ${i.width}x${i.height}`)}function eM(i,e){const t=$S(e);i.width=64*t,i.height=32*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function tM(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let s=0;s<r;s++){const c=(l+s*n)*4;if(!(a.data[c+0]===0&&a.data[c+1]===0&&a.data[c+2]===0&&a.data[c+3]===255))return!1}return!0}function nM(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let s=0;s<r;s++){const c=(l+s*n)*4;if(!(a.data[c+0]===255&&a.data[c+1]===255&&a.data[c+2]===255&&a.data[c+3]===255))return!1}return!0}function iM(i){const e=So(i.width),t=i.getContext("2d",{willReadFrequently:!0}),n=(s,c,u,d)=>zl(t,s*e,c*e,u*e,d*e),r=(s,c,u,d)=>tM(t,s*e,c*e,u*e,d*e),a=(s,c,u,d)=>nM(t,s*e,c*e,u*e,d*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function rM(i){if(i.width===i.height*2&&i.height%7===0)return i.height/7;throw new Error(`Bad ears size: ${i.width}x${i.height}`)}function aM(i,e){const t=rM(e);i.width=14*t,i.height=7*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function Ed(i,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=So(e.width),n=14*t,r=7*t;i.width=n,i.height=r;const a=i.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,n,r),a.drawImage(e,24*t,0,n,r,0,0,n,r)}async function Xs(i){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof i=="string"?e.src=i:(i.crossOrigin!==void 0&&(e.crossOrigin=i.crossOrigin),i.referrerPolicy!==void 0&&(e.referrerPolicy=i.referrerPolicy),e.src=i.src)})}const wd={type:"change"},hl={type:"start"},Td={type:"end"},qs=new eh,Ad=new ar,sM=Math.cos(70*Lx.DEG2RAD);class oM extends Dr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ce,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",T),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wd),n.update(),a=r.NONE},this.update=(function(){const C=new ce,he=new Ir().setFromUnitVectors(e.up,new ce(0,1,0)),be=he.clone().invert(),z=new ce,Y=new Ir,we=new ce,De=2*Math.PI;return function(ye=null){const ue=n.object.position;C.copy(ue).sub(n.target),C.applyQuaternion(he),s.setFromVector3(C),n.autoRotate&&a===r.NONE&&ie(_(ye)),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let Te=n.minAzimuthAngle,Re=n.maxAzimuthAngle;isFinite(Te)&&isFinite(Re)&&(Te<-Math.PI?Te+=De:Te>Math.PI&&(Te-=De),Re<-Math.PI?Re+=De:Re>Math.PI&&(Re-=De),Te<=Re?s.theta=Math.max(Te,Math.min(Re,s.theta)):s.theta=s.theta>(Te+Re)/2?Math.max(Te,s.theta):Math.min(Re,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&D||n.object.isOrthographicCamera?s.radius=Me(s.radius):s.radius=Me(s.radius*u),C.setFromSpherical(s),C.applyQuaternion(be),ue.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let Je=!1;if(n.zoomToCursor&&D){let Ze=null;if(n.object.isPerspectiveCamera){const nt=C.length();Ze=Me(nt*u);const yt=nt-Ze;n.object.position.addScaledVector(w,yt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const nt=new ce(A.x,A.y,0);nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Je=!0;const yt=new ce(A.x,A.y,0);yt.unproject(n.object),n.object.position.sub(yt).add(nt),n.object.updateMatrixWorld(),Ze=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ze).add(n.object.position):(qs.origin.copy(n.object.position),qs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(qs.direction))<sM?e.lookAt(n.target):(Ad.setFromNormalAndCoplanarPoint(n.object.up,n.target),qs.intersectPlane(Ad,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Je=!0);return u=1,D=!1,Je||z.distanceToSquared(n.object.position)>l||8*(1-Y.dot(n.object.quaternion))>l||we.distanceToSquared(n.target)>0?(n.dispatchEvent(wd),z.copy(n.object.position),Y.copy(n.object.quaternion),we.copy(n.target),Je=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",Ge),n.domElement.removeEventListener("pointercancel",Ye),n.domElement.removeEventListener("wheel",I),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",Ye),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,s=new yd,c=new yd;let u=1;const d=new ce,h=new at,f=new at,v=new at,b=new at,S=new at,m=new at,p=new at,E=new at,x=new at,w=new ce,A=new at;let D=!1;const P=[],X={};function _(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function ie(C){c.theta-=C}function B(C){c.phi-=C}const O=(function(){const C=new ce;return function(be,z){C.setFromMatrixColumn(z,0),C.multiplyScalar(-be),d.add(C)}})(),F=(function(){const C=new ce;return function(be,z){n.screenSpacePanning===!0?C.setFromMatrixColumn(z,1):(C.setFromMatrixColumn(z,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(be),d.add(C)}})(),H=(function(){const C=new ce;return function(be,z){const Y=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;C.copy(we).sub(n.target);let De=C.length();De*=Math.tan(n.object.fov/2*Math.PI/180),O(2*be*De/Y.clientHeight,n.object.matrix),F(2*z*De/Y.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(be*(n.object.right-n.object.left)/n.object.zoom/Y.clientWidth,n.object.matrix),F(z*(n.object.top-n.object.bottom)/n.object.zoom/Y.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function me(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(C){if(!n.zoomToCursor)return;D=!0;const he=n.domElement.getBoundingClientRect(),be=C.clientX-he.left,z=C.clientY-he.top,Y=he.width,we=he.height;A.x=be/Y*2-1,A.y=-(z/we)*2+1,w.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function Me(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function Q(C){h.set(C.clientX,C.clientY)}function V(C){ne(C),p.set(C.clientX,C.clientY)}function fe(C){b.set(C.clientX,C.clientY)}function Ae(C){f.set(C.clientX,C.clientY),v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const he=n.domElement;ie(2*Math.PI*v.x/he.clientHeight),B(2*Math.PI*v.y/he.clientHeight),h.copy(f),n.update()}function Se(C){E.set(C.clientX,C.clientY),x.subVectors(E,p),x.y>0?me(M()):x.y<0&&oe(M()),p.copy(E),n.update()}function Ie(C){S.set(C.clientX,C.clientY),m.subVectors(S,b).multiplyScalar(n.panSpeed),H(m.x,m.y),b.copy(S),n.update()}function Ue(C){ne(C),C.deltaY<0?oe(M()):C.deltaY>0&&me(M()),n.update()}function Be(C){let he=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),he=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),he=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?ie(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),he=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?ie(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),he=!0;break}he&&(C.preventDefault(),n.update())}function ze(){if(P.length===1)h.set(P[0].pageX,P[0].pageY);else{const C=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);h.set(C,he)}}function et(){if(P.length===1)b.set(P[0].pageX,P[0].pageY);else{const C=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);b.set(C,he)}}function xt(){const C=P[0].pageX-P[1].pageX,he=P[0].pageY-P[1].pageY,be=Math.sqrt(C*C+he*he);p.set(0,be)}function Qe(){n.enableZoom&&xt(),n.enablePan&&et()}function te(){n.enableZoom&&xt(),n.enableRotate&&ze()}function Mt(C){if(P.length==1)f.set(C.pageX,C.pageY);else{const be=W(C),z=.5*(C.pageX+be.x),Y=.5*(C.pageY+be.y);f.set(z,Y)}v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const he=n.domElement;ie(2*Math.PI*v.x/he.clientHeight),B(2*Math.PI*v.y/he.clientHeight),h.copy(f)}function Oe(C){if(P.length===1)S.set(C.pageX,C.pageY);else{const he=W(C),be=.5*(C.pageX+he.x),z=.5*(C.pageY+he.y);S.set(be,z)}m.subVectors(S,b).multiplyScalar(n.panSpeed),H(m.x,m.y),b.copy(S)}function _e(C){const he=W(C),be=C.pageX-he.x,z=C.pageY-he.y,Y=Math.sqrt(be*be+z*z);E.set(0,Y),x.set(0,Math.pow(E.y/p.y,n.zoomSpeed)),me(x.y),p.copy(E)}function Ee(C){n.enableZoom&&_e(C),n.enablePan&&Oe(C)}function Fe(C){n.enableZoom&&_e(C),n.enableRotate&&Mt(C)}function Ge(C){n.enabled!==!1&&(P.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",He),n.domElement.addEventListener("pointerup",Ye)),K(C),C.pointerType==="touch"?G(C):ot(C))}function He(C){n.enabled!==!1&&(C.pointerType==="touch"?q(C):ht(C))}function Ye(C){re(C),P.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",He),n.domElement.removeEventListener("pointerup",Ye)),n.dispatchEvent(Td),a=r.NONE}function ot(C){let he;switch(C.button){case 0:he=n.mouseButtons.LEFT;break;case 1:he=n.mouseButtons.MIDDLE;break;case 2:he=n.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Or.DOLLY:if(n.enableZoom===!1)return;V(C),a=r.DOLLY;break;case Or.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;fe(C),a=r.PAN}else{if(n.enableRotate===!1)return;Q(C),a=r.ROTATE}break;case Or.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Q(C),a=r.ROTATE}else{if(n.enablePan===!1)return;fe(C),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(hl)}function ht(C){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Ae(C);break;case r.DOLLY:if(n.enableZoom===!1)return;Se(C);break;case r.PAN:if(n.enablePan===!1)return;Ie(C);break}}function I(C){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(C.preventDefault(),n.dispatchEvent(hl),Ue(C),n.dispatchEvent(Td))}function T(C){n.enabled===!1||n.enablePan===!1||Be(C)}function G(C){switch(de(C),P.length){case 1:switch(n.touches.ONE){case kr.ROTATE:if(n.enableRotate===!1)return;ze(),a=r.TOUCH_ROTATE;break;case kr.PAN:if(n.enablePan===!1)return;et(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case kr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qe(),a=r.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(hl)}function q(C){switch(de(C),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Oe(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(C),n.update();break;default:a=r.NONE}}function U(C){n.enabled!==!1&&C.preventDefault()}function K(C){P.push(C)}function re(C){delete X[C.pointerId];for(let he=0;he<P.length;he++)if(P[he].pointerId==C.pointerId){P.splice(he,1);return}}function de(C){let he=X[C.pointerId];he===void 0&&(he=new at,X[C.pointerId]=he),he.set(C.pageX,C.pageY)}function W(C){const he=C.pointerId===P[0].pointerId?P[1]:P[0];return X[he.pointerId]}n.domElement.addEventListener("contextmenu",U),n.domElement.addEventListener("pointerdown",Ge),n.domElement.addEventListener("pointercancel",Ye),n.domElement.addEventListener("wheel",I,{passive:!1}),this.update()}}const lM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cM=new dh(-1,1,1,-1,0,1),fc=new $i;fc.setAttribute("position",new Yi([-1,3,0,-1,-1,0,3,-1,0],3));fc.setAttribute("uv",new Yi([0,2,0,0,2,0],2));class uM{constructor(e){this._mesh=new Wt(fc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Sh extends Mo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ji?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oh.clone(e.uniforms),this.material=new Ji({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new uM(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Rd extends Mo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,s;this.inverse?(l=0,s=1):(l=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class dM extends Mo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new at);this._width=n.width,this._height=n.height,t=new Zi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sa}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sh(lM),this.copyPass.material.blending=qi,this.clock=new yh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Rd!==void 0&&(l instanceof Rd?n=!0:l instanceof dM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hM extends Mo{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}const pM={uniforms:{tDiffuse:{value:null},resolution:{value:new at(1/1024,1/512)}},vertexShader:`

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
	`};class Mh{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const n=t*this.speed;this.animate(e,n),this.animationObjects.forEach((r,a)=>{const l=this.progress0.get(a);r(e,this.progress-l,a)}),this.progress+=n}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Cd extends Mh{animate(e){const t=this.progress*2,n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class Pd extends Mh{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class mM extends GS{constructor(e="",t={}){const n=new _h({transparent:!0,alphaTest:1e-5});super(n),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=n,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const n=t.measureText(this.text);e.width=this.margin[3]+n.actualBoundingBoxLeft+n.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+n.actualBoundingBoxAscent+n.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+n.actualBoundingBoxLeft,this.margin[0]+n.actualBoundingBoxAscent);const r=new $s(e);r.magFilter=en,r.minFilter=en,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class vM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new jS(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new WS(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new BS,this.camera=new jn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Jn.enabled=!1,this.renderer=new gh({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Zi(0,0,{depthTexture:new vh(0,0,Wi)})),this.composer=new fM(this.renderer,t),this.renderPass=new hM(this.scene,this.camera),this.fxaaPass=new Sh(pM),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new ZS,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new bn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new oM(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new yh,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=n=>{n.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",n=>{n.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new $s(this.skinCanvas),this.skinTexture.magFilter=en,this.skinTexture.minFilter=en,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new $s(this.capeCanvas),this.capeTexture.magFilter=en,this.capeTexture.minFilter=en,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new $s(this.earsCanvas),this.earsTexture.magFilter=en,this.earsTexture.minFilter=en,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(js(e))QS(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=iM(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Ed(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Xs(e).then(n=>this.loadSkin(n,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(js(e))eM(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Xs(e).then(n=>this.loadCape(n,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(js(e))t.textureType==="skin"?Ed(this.earsCanvas,e):aM(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Xs(e).then(n=>this.loadEars(n,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,oo)}loadBackground(e,t){if(js(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Tn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Xs(e).then(n=>this.loadBackground(n,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new ce).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new at).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new at).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Bt||e instanceof Tn?this.scene.background=e:this.scene.background=new Bt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof An||(e=new mM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const ei=kt({list:[],active:null,ready:!1}),pl=new Map;function Gl(i,e){const t=window.__TAURI__?.core;return t?t.invoke(i,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function Ys(){try{ei.list=await Gl("get_accounts"),ei.active=await Gl("get_active_account")}catch{}finally{ei.ready=!0}}function fs(i){return i?i.skin??(i.account_type?.type==="ely_by"?i.username:null):null}async function Hl(i){if(!i)return null;const e=String(i).trim();if(!e||e.startsWith("data:"))return e||null;if(pl.has(e))return pl.get(e);try{const t=await Gl("proxy_skin_png",{source:e});return pl.set(e,t),t}catch{return null}}function gM(i){try{const e=String(i??"").split(",")[1]??"",t=atob(e.slice(0,44));if(t.length<24)return null;const n=l=>t.charCodeAt(l)&255;if(n(1)!==80||n(2)!==78||n(3)!==71)return null;const r=(n(16)<<24|n(17)<<16|n(18)<<8|n(19))>>>0,a=(n(20)<<24|n(21)<<16|n(22)<<8|n(23))>>>0;return!r||!a?null:{width:r,height:a}}catch{return null}}var _M=j('<button title="Toggle the hat/jacket outer layer"> </button>'),xM=j("<canvas></canvas> <!>",1);function hc(i,e){Qt(e,!0);let t=$e(e,"skin",3,null),n=$e(e,"cape",3,null),r=$e(e,"model",3,null),a=$e(e,"width",3,260),l=$e(e,"height",3,340),s=$e(e,"walking",3,!1),c=$e(e,"autorotate",3,!1),u=$e(e,"zoom",3,.85),d=$e(e,"outerLayer",15,!0),h=$e(e,"showToggle",3,!1),f=se(null),v=null,b,S,m,p=se(null),E=se(null),x=0;function w(B){if(!B)return null;const O=String(B).trim();if(!O)return null;if(/^(https?:|data:)/i.test(O))return O;const F=window.__TAURI__?.core?.convertFileSrc;return F?F(O):O}function A(B){const O=String(B??"").trim().toLowerCase();return O==="slim"?"slim":O==="classic"?"default":"auto-detect"}function D(){v&&((o(p)!==b||A(r())!==m)&&(b=o(p),m=A(r()),o(p)?v.loadSkin(o(p),{model:m}).catch(()=>{}):v.resetSkin()),o(E)!==S&&(S=o(E),o(E)?v.loadCape(o(E)).catch(()=>{}):v.resetCape()))}function P(){const B=v?.playerObject?.skin;if(B)for(const O of[B.head,B.body,B.rightArm,B.leftArm,B.rightLeg,B.leftLeg])O?.outerLayer&&(O.outerLayer.visible=d())}Pi(()=>(v=new vM({canvas:o(f),width:a(),height:l(),zoom:u(),fov:55}),v.controls.enablePan=!1,v.controls.enableZoom=!0,v.autoRotate=c(),v.animation=s()?new Pd:new Cd,D(),P(),()=>{v?.dispose(),v=null})),tn(()=>{const B=t(),O=n(),F=++x;(async()=>{const H=await Hl(B),me=await Hl(O);F===x&&(g(p,H??w(B),!0),g(E,me??w(O),!0))})()}),tn(()=>{D(),P()}),tn(()=>{d(),v&&P()}),tn(()=>{v&&(v.animation=s()?new Pd:new Cd)}),tn(()=>{v&&(v.autoRotate=c())}),tn(()=>{v&&v.setSize(a(),l())});var X=xM(),_=At(X);Tf(_,B=>g(f,B),()=>o(f));var M=y(_,2);{var ie=B=>{var O=_M(),F=J(O);ge(()=>{vt(O,1,`rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) ${d()?"text-(--accent)":""}`),Ne(O,"aria-pressed",d()),$(F,`Outer layer: ${d()?"on":"off"}`)}),ae("click",O,()=>d(!d())),k(B,O)};Le(M,B=>{h()&&B(ie)})}ge(()=>Ln(_,`width:${a()??""}px;height:${l()??""}px;display:block`)),k(i,X),$t()}dn(["click"]);var bM=j('<span class="absolute inset-0"></span> <span class="absolute inset-0"></span>',1),yM=j('<span class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"> </span>'),SM=j("<span><!></span>");function pc(i,e){Qt(e,!0);let t=$e(e,"source",3,null),n=$e(e,"size",3,32),r=$e(e,"letter",3,null),a=$e(e,"class",3,""),l=se(null),s=se(1),c=0;tn(()=>{const m=t(),p=++c;(async()=>{const E=await Hl(m);if(p!==c)return;g(l,E,!0);const x=E?gM(E):null;g(s,x&&x.height&&x.width?x.height/x.width:1,!0)})()}),tc(()=>{c+=1});const u=st(()=>(800*o(s)).toFixed(4)),d=st(()=>(100/(8*o(s)-1)).toFixed(4)),h=st(()=>o(l)?`background-image:url(${o(l)});background-size:800% ${o(u)}%;image-rendering:pixelated;`:"");var f=SM(),v=L(f);{var b=m=>{var p=bM(),E=At(p),x=y(E,2);ge(()=>{Ln(E,`${o(h)}background-position:14.2857% ${o(d)}%`),Ln(x,`${o(h)}background-position:71.4286% ${o(d)}%`)}),k(m,p)},S=m=>{var p=yM(),E=J(p,!0);ge(()=>{Ln(p,`font-size:${n()*.45}px`),$(E,r())}),k(m,p)};Le(v,m=>{o(l)?m(b):r()&&m(S,1)})}ge(()=>{vt(f,1,`relative inline-block shrink-0 overflow-hidden ${a()??""}`),Ln(f,`width:${n()??""}px;height:${n()??""}px`)}),k(i,f),$t()}var MM=j('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),EM=j(`<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40" title="Silently renew this account's token"> </button>`),wM=j('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),TM=j('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),AM=j('<div><div class="flex items-center gap-3"><!> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),RM=j('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),CM=j('<p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),PM=j('<div class="flex flex-col"><!> <!></div>');function Eh(i,e){Qt(e,!0);let t=$e(e,"accounts",19,()=>[]),n=$e(e,"active",3,null),r=se(""),a=se(!1),l=se(null),s=se(""),c=se(""),u=se(null);function d(_,M){const ie=window.__TAURI__?.core;return ie?ie.invoke(_,M):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function h(_){g(r,"");try{await d("set_active_account",{id:_}),await e.onrefresh?.()}catch(M){g(r,String(M),!0)}}async function f(_){g(r,"");try{await d("remove_account",{id:_}),o(l)===_&&g(l,null),await e.onrefresh?.()}catch(M){g(r,String(M),!0)}}async function v(_){const M=b(_);if(M){g(r,""),g(u,_.id,!0);try{await d(M,{id:_.id}),await e.onrefresh?.()}catch(ie){g(r,String(ie),!0)}finally{g(u,null)}}}function b(_){const M=_.account_type?.type;return M==="microsoft"?"refresh_microsoft_account":M==="ely_by"&&_.refresh_token?"refresh_elyby_account":null}function S(_){if(o(l)===_.id){g(l,null);return}g(l,_.id,!0),g(s,_.skin??"",!0),g(c,_.cape??"",!0)}async function m(_){const M=window.__TAURI__?.dialog?.open;if(!M){g(r,"File picker unavailable in this build.");return}try{const ie=await M({multiple:!1,title:_==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!ie)return;g(_==="skin"?s:c,String(ie),!0),g(r,"")}catch(ie){g(r,String(ie),!0)}}async function p(){g(r,""),g(a,!0);try{await d("set_account_textures",{id:o(l),skin:o(s).trim()||null,cape:o(c).trim()||null}),await e.onrefresh?.(),g(l,null)}catch(_){g(r,String(_),!0)}finally{g(a,!1)}}async function E(){g(s,""),g(c,""),await p()}function x(_){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[_.account_type.type]??"Yggdrasil"}const w=st(()=>t().find(_=>_.id===o(l))??null);var A=PM(),D=L(A);Ct(D,17,t,_=>_.id,(_,M)=>{var ie=AM(),B=L(ie),O=L(B);{let _e=st(()=>fs(o(M))),Ee=st(()=>o(M).username[0]?.toUpperCase()??"?");pc(O,{get source(){return o(_e)},size:32,get letter(){return o(Ee)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var F=y(O,2),H=L(F),me=L(H),oe=J(me,!0),ne=y(me,2),Me=J(ne,!0),Q=y(ne,2);{var V=_e=>{var Ee=MM();k(_e,Ee)};Le(Q,_e=>{n()?.id===o(M).id&&_e(V)})}var fe=y(H,2),Ae=J(fe,!0),Se=y(F,2),Ie=L(Se),Ue=L(Ie);Ei(Ue,{emoji:"🎨"});var Be=y(Ie,2);{var ze=_e=>{var Ee=EM(),Fe=J(Ee,!0);ge(()=>{Ee.disabled=o(u)!==null,$(Fe,o(u)===o(M).id?"Refreshing…":"Refresh token")}),ae("click",Ee,()=>v(o(M))),k(_e,Ee)},et=st(()=>b(o(M)));Le(Be,_e=>{o(et)&&_e(ze)})}var xt=y(Be,2);{var Qe=_e=>{var Ee=wM();ae("click",Ee,()=>h(o(M).id)),k(_e,Ee)};Le(xt,_e=>{n()?.id!==o(M).id&&_e(Qe)})}var te=y(xt,2),Mt=y(B,2);{var Oe=_e=>{var Ee=TM(),Fe=L(Ee);{let K=st(()=>o(w)?.model);hc(Fe,{get skin(){return o(s)},get cape(){return o(c)},get model(){return o(K)},width:110,height:150})}var Ge=y(Fe,2),He=L(Ge),Ye=y(L(He)),ot=J(Ye,!0),ht=y(He,2),I=y(L(ht)),T=J(I,!0),G=y(ht,2),q=L(G),U=y(q,2);ge(()=>{$(ot,o(s)||"default (Steve/Alex)"),$(T,o(c)||"none"),q.disabled=o(a)}),ae("click",He,()=>m("skin")),ae("click",ht,()=>m("cape")),ae("click",q,p),ae("click",U,E),k(_e,Ee)};Le(Mt,_e=>{o(l)===o(M).id&&o(w)&&_e(Oe)})}ge(_e=>{vt(ie,1,`border-b border-(--border) px-4 py-2.5 ${n()?.id===o(M).id?"bg-(--accent)/10":""}`),$(oe,o(M).username),$(Me,_e),$(Ae,o(M).uuid)},[()=>x(o(M))]),ae("click",Ie,()=>S(o(M))),ae("click",te,()=>f(o(M).id)),k(_,ie)},_=>{var M=RM();k(_,M)});var P=y(D,2);{var X=_=>{var M=CM(),ie=J(M,!0);ge(()=>$(ie,o(r))),k(_,M)};Le(P,_=>{o(r)&&_(X)})}k(i,A),$t()}dn(["click"]);var LM=j('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <div class="border-t border-(--border)"><!></div></div></div></div>');function IM(i,e){Qt(e,!0);let t=$e(e,"accounts",19,()=>[]),n=$e(e,"active",3,null);Pi(()=>{const f=Ca(()=>e.onclose?.());return()=>Pa(f)});var r=LM(),a=L(r),l=L(a),s=y(L(l),2),c=y(l,2),u=L(c);Of(u,{get onrefresh(){return e.onrefresh}});var d=y(u,2),h=L(d);Eh(h,{get accounts(){return t()},get active(){return n()},get onrefresh(){return e.onrefresh}}),ae("click",r,f=>{f.target===f.currentTarget&&e.onclose?.()}),ae("click",s,()=>e.onclose?.()),k(i,r),$t()}dn(["click"]);var DM=j('<button><span class="truncate"> </span></button>'),UM=j('<span class="text-[9px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),NM=j('<button><!> <span class="text-[12px] font-medium"> </span> <!></button>'),OM=j('<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]"><dt class="text-(--text-muted)">Profile UUID</dt> <dd class="min-w-0 truncate font-mono"> </dd> <dt class="text-(--text-muted)">Skin source</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Cape</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Renewable token</dt> <dd class="min-w-0 truncate"> </dd></dl></div>'),kM=j('<div class="mt-6 flex flex-wrap gap-2"></div> <!>',1),FM=j(`<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><p class="text-sm font-medium">No accounts yet</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom
              Yggdrasil server — everything lives in the Add Account section.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Add an account</button></div>`),BM=j('<h2 class="text-[16px] font-semibold">Account overview</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The character launches use, with the hat/jacket outer layer included.</p> <!>',1),zM=j('<h2 class="text-[16px] font-semibold">Add account</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.</p> <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),GM=j('<h2 class="text-[16px] font-semibold">Saved accounts</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Set the active profile, renew tokens silently, edit skins — or remove accounts.</p> <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),HM=j('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Accounts sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div></div>');function VM(i,e){Qt(e,!0);const t=[{id:"overview",label:"Overview"},{id:"add",label:"Add Account"},{id:"saved",label:"Saved Accounts"}];let n=se("overview"),r=se(null);const a=st(()=>{const E=ei.list;return E.find(x=>x.id===o(r))??E.find(x=>x.id===ei.active?.id)??E[0]??null});let l=se(!0);function s(E){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[E.account_type.type]??"Yggdrasil"}var c=HM(),u=L(c),d=L(u),h=y(d,2);Ct(h,21,()=>t,E=>E.id,(E,x)=>{var w=DM(),A=L(w),D=J(A,!0);ge(()=>{vt(w,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${o(n)===o(x).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Ne(w,"aria-current",o(n)===o(x).id?"true":void 0),$(D,o(x).label)}),ae("click",w,()=>g(n,o(x).id,!0)),k(E,w)});var f=y(u,2),v=L(f),b=L(v);{var S=E=>{var x=BM(),w=y(At(x),4);{var A=P=>{var X=kM(),_=At(X);Ct(_,21,()=>ei.list,B=>B.id,(B,O)=>{var F=NM(),H=L(F);{let Q=st(()=>fs(o(O))),V=st(()=>o(O).username[0]?.toUpperCase()??"?");pc(H,{get source(){return o(Q)},size:24,get letter(){return o(V)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var me=y(H,2),oe=J(me,!0),ne=y(me,2);{var Me=Q=>{var V=UM();k(Q,V)};Le(ne,Q=>{ei.active?.id===o(O).id&&Q(Me)})}ge(()=>{vt(F,1,`flex items-center gap-2 rounded border px-2 py-1.5 text-left ${o(a)?.id===o(O).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Ne(F,"title",`Preview ${o(O).username??""}`),$(oe,o(O).username)}),ae("click",F,()=>g(r,o(O).id,!0)),k(B,F)});var M=y(_,2);{var ie=B=>{var O=OM(),F=L(O);{let et=st(()=>fs(o(a)));hc(F,{get skin(){return o(et)},get cape(){return o(a).cape},get model(){return o(a).model},width:230,height:310,showToggle:!0,get outerLayer(){return o(l)},set outerLayer(xt){g(l,xt,!0)}})}var H=y(F,2),me=L(H),oe=J(me,!0),ne=y(me,2),Me=J(ne,!0),Q=y(H,2),V=y(L(Q),2),fe=J(V,!0),Ae=y(V,4),Se=J(Ae,!0),Ie=y(Ae,4),Ue=J(Ie,!0),Be=y(Ie,4),ze=J(Be,!0);ge(et=>{$(oe,o(a).username),$(Me,et),Ne(V,"title",o(a).uuid),$(fe,o(a).uuid),Ne(Ae,"title",o(a).skin??"default (Steve/Alex)"),$(Se,o(a).skin?"custom skin":"default (Steve/Alex)"),$(Ue,o(a).cape?"custom cape":"none"),$(ze,o(a).refresh_token?"yes — silent refresh available":"no")},[()=>s(o(a))]),k(B,O)};Le(M,B=>{o(a)&&B(ie)})}k(P,X)},D=P=>{var X=FM(),_=y(L(X),4);ae("click",_,()=>g(n,"add")),k(P,X)};Le(w,P=>{ei.list.length?P(A):P(D,-1)})}k(E,x)},m=E=>{var x=zM(),w=y(At(x),4),A=L(w);Of(A,{get onrefresh(){return e.onrefresh}}),k(E,x)},p=E=>{var x=GM(),w=y(At(x),4),A=L(w);Eh(A,{get accounts(){return ei.list},get active(){return ei.active},get onrefresh(){return e.onrefresh}}),k(E,x)};Le(b,E=>{o(n)==="overview"?E(S):o(n)==="add"?E(m,1):E(p,-1)})}ae("click",d,function(...E){e.onback?.apply(this,E)}),k(i,c),$t()}dn(["click"]);var WM=j('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),jM=j('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),XM=j('<p class="text-center text-[11px] text-red-400"> </p>'),qM=j("<option> </option>"),YM=j("<option>No instances yet</option>"),KM=j('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),ZM=j('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),JM=j('<p class="mt-2 text-[11px] text-red-400"> </p>'),QM=j('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="flex items-center gap-1.5 rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer"><!> Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),$M=j('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function eE(i,e){Qt(e,!0);let t=$e(e,"instances",19,()=>[]),n=$e(e,"active",3,null),r=$e(e,"gameRunning",3,!1),a=$e(e,"status",3,"Ready");function l(B,O){const F=window.__TAURI__?.core;return F?F.invoke(B,O):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let c=se(kt(f())),u=se(""),d=se(""),h=se("");function f(){try{const B=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray(B)?B:[]}catch{return[]}}function v(){localStorage.setItem(s,JSON.stringify(o(c)))}function b(B){B.preventDefault(),g(h,"");const O=o(d).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(O)){g(h,"Address must be a hostname (optionally host:port).");return}g(c,[...o(c),{name:o(u).trim()||O.split(":")[0],address:O}],!0),v(),g(u,""),g(d,"")}function S(B){g(c,o(c).filter((O,F)=>F!==B),!0),v()}let m=se("");tn(()=>{o(m)&&t().some(B=>B.id===o(m))||g(m,t()[0]?.id??"",!0)});const p=st(()=>t().find(B=>B.id===o(m))?.name??"no instance selected");function E(B){!o(m)||r()||e.onlaunch?.(o(m),B.address)}let x=se(""),w=se(!1);async function A(B){const O=window.__TAURI__?.dialog?.open;if(!O){g(x,"File picker unavailable in this build.");return}try{const F=await O({multiple:!1,title:B==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!F)return;g(w,!0),g(x,""),await l("set_account_textures",{id:n().id,skin:B==="skin"?String(F):null,cape:B==="cape"?String(F):null}),await e.onrefresh?.()}catch(F){g(x,String(F),!0)}finally{g(w,!1)}}async function D(){if(n())try{g(w,!0),await l("set_account_textures",{id:n().id,skin:null,cape:null}),await e.onrefresh?.()}catch(B){g(x,String(B),!0)}finally{g(w,!1)}}function P(B){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[B.account_type.type]??"Yggdrasil"}var X=$M(),_=L(X);{var M=B=>{var O=WM(),F=L(O);Ei(F,{emoji:"👤",size:30});var H=y(F,6);ae("click",H,()=>e.onopenaccounts?.()),k(B,O)},ie=B=>{var O=QM(),F=L(O),H=L(F);Ef(H,()=>n()?.id,G=>{{let q=st(()=>fs(n()));hc(G,{get skin(){return o(q)},get cape(){return n().cape},get model(){return n().model},width:220,height:300})}});var me=y(H,2),oe=L(me),ne=J(oe,!0),Me=y(oe,2),Q=J(Me,!0),V=y(me,2),fe=L(V),Ae=y(fe,2),Se=y(Ae,2);{var Ie=G=>{var q=jM();ge(()=>q.disabled=o(w)),ae("click",q,D),k(G,q)};Le(Se,G=>{(n().cape||n().skin)&&G(Ie)})}var Ue=y(V,2);{var Be=G=>{var q=XM(),U=J(q,!0);ge(()=>$(U,o(x))),k(G,q)};Le(Ue,G=>{o(x)&&G(Be)})}var ze=y(F,2),et=L(ze),xt=y(L(et),2),Qe=L(xt);Ct(Qe,21,t,G=>G.id,(G,q)=>{var U=qM(),K=J(U,!0),re={};ge(()=>{$(K,o(q).name),re!==(re=o(q).id)&&(U.value=(U.__value=re)??"")}),k(G,U)},G=>{var q=YM();q.value=q.__value="",k(G,q)}),_a(Qe);var te=y(Qe,2),Mt=L(te);jt(Mt,{name:"log",size:12});var Oe=y(xt,2),_e=J(Oe,!0),Ee=y(Oe,2),Fe=J(Ee,!0),Ge=y(et,2),He=y(L(Ge),2);Ct(He,19,()=>o(c),G=>G.address,(G,q,U)=>{var K=KM(),re=L(K),de=L(re),W=J(de,!0),C=y(de,2),he=J(C,!0),be=y(re,2),z=y(be,2);ge(()=>{$(W,o(q).name),$(he,o(q).address),be.disabled=!o(m)||r(),Ne(be,"title",`Join ${o(q).address} with ${o(p)}`)}),ae("click",be,()=>E(o(q))),ae("click",z,()=>S(o(U))),k(G,K)},G=>{var q=ZM();k(G,q)});var Ye=y(He,2),ot=L(Ye),ht=y(ot,2),I=y(Ye,2);{var T=G=>{var q=JM(),U=J(q,!0);ge(()=>$(U,o(h))),k(G,q)};Le(I,G=>{o(h)&&G(T)})}ge(G=>{$(ne,n().username),$(Q,G),fe.disabled=o(w),Ae.disabled=o(w),Oe.disabled=!o(m)||r(),$(_e,r()?"GAME RUNNING…":"LAUNCH GAME"),$(Fe,r()?a():o(p))},[()=>P(n())]),ae("click",fe,()=>A("skin")),ae("click",Ae,()=>A("cape")),xa(Qe,()=>o(m),G=>g(m,G)),ae("click",te,()=>e.onopenconsole?.()),ae("click",Oe,()=>e.onlaunch?.(o(m),null)),kn("submit",Ye,b),Xt(ot,()=>o(u),G=>g(u,G)),Xt(ht,()=>o(d),G=>g(d,G)),k(B,O)};Le(_,B=>{n()?B(ie,-1):B(M)})}k(i,X),$t()}dn(["click"]);var tE=j('<h3 class="text-(--step-heading) font-semibold text-(--fg-1)"> </h3>'),nE=j('<input class="mt-3 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"/>'),iE=j('<button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1)"> </button>'),rE=j('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="alertdialog" aria-modal="true" class="w-[380px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><!> <p> </p> <!></div></div> <div class="flex items-center justify-end gap-2 border-t border-(--border-1) px-4 py-3"><!> <button class="rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"> </button></div></div></div>');function aE(i,e){Qt(e,!0);const t={info:{icon:"about",tint:"text-(--accent)"},success:{icon:"success",tint:"text-green-500"},warning:{icon:"warning",tint:"text-(--accent-star)"},error:{icon:"error",tint:"text-rose-400"},confirm:{icon:"help",tint:"text-(--accent)"},prompt:{icon:"edit",tint:"text-(--accent)"}},n=st(()=>ri.dialog),r=st(()=>t[o(n)?.variant]??t.info);let a=se("");tn(()=>{o(n),g(a,o(n)?.value??"",!0)});function l(){o(n)?.variant==="prompt"?ys(o(a)):ys(!0)}function s(){o(n)?.variant==="prompt"?ys(null):ys(!1)}function c(f){f.key==="Enter"&&(f.preventDefault(),l())}var u=as(),d=At(u);{var h=f=>{var v=rE(),b=L(v),S=L(b),m=L(S),p=L(m);{let F=st(()=>o(n).icon||o(r).icon);jt(p,{get name(){return o(F)},size:17})}var E=y(m,2),x=L(E);{var w=F=>{var H=tE(),me=J(H,!0);ge(()=>$(me,o(n).title)),k(F,H)};Le(x,F=>{o(n).title&&F(w)})}var A=y(x,2),D=J(A,!0),P=y(A,2);{var X=F=>{var H=nE();yp(H),ge(()=>Ne(H,"placeholder",o(n).placeholder??"")),Xt(H,()=>o(a),me=>g(a,me)),k(F,H)};Le(P,F=>{o(n).variant==="prompt"&&F(X)})}var _=y(S,2),M=L(_);{var ie=F=>{var H=iE(),me=J(H,!0);ge(()=>$(me,o(n).cancelLabel??"Cancel")),ae("click",H,s),k(F,H)};Le(M,F=>{o(n).variant!=="alert"&&F(ie)})}var B=y(M,2),O=J(B,!0);ge(()=>{Ne(b,"aria-label",o(n).title||"Alert"),vt(A,1,`mt-1 text-(--step-body) break-words text-(--fg-2) ${o(n).title?"":"font-medium text-(--fg-1)"}`),$(D,o(n).message),$(O,o(n).confirmLabel??"OK")}),ae("click",v,F=>{F.target===F.currentTarget&&s()}),ae("keydown",b,c),ae("click",B,l),k(f,v)};Le(d,f=>{o(n)&&f(h)})}k(i,u),$t()}dn(["click","keydown"]);var sE=j('<span class="block truncate text-(--step-body) font-semibold text-(--fg-1)"> </span>'),oE=j('<button title="Click to dismiss"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <span class="min-w-0 flex-1"><!> <span class="block text-(--step-meta) break-words text-(--fg-2)"> </span></span> <span class="shrink-0 text-(--step-caption) text-(--fg-2)">✕</span></button>'),lE=j('<div class="pointer-events-none fixed right-4 bottom-4 z-[80] flex w-80 flex-col gap-2"></div>');function cE(i,e){Qt(e,!0);const t={info:{icon:"about",tint:"border-(--accent-1)/50"},success:{icon:"success",tint:"border-green-500/60"},warning:{icon:"warning",tint:"border-(--accent-2)/60"},error:{icon:"error",tint:"border-rose-500/60"}};let n=se(!1);const r=new Map,a=new Set;function l(){if(!o(n))for(const d of ri.toasts)a.has(d.id)||(a.add(d.id),r.set(d.id,setTimeout(()=>{a.delete(d.id),r.delete(d.id),Wc(d.id)},d.duration)))}function s(){g(n,!0);for(const d of r.values())clearTimeout(d);r.clear(),a.clear()}function c(){g(n,!1),l()}tn(()=>{ri.toasts.length,l()});var u=lE();Ct(u,21,()=>ri.toasts,d=>d.id,(d,h)=>{var f=oE(),v=L(f),b=L(v);jt(b,{get name(){return(t[o(h).kind]??t.info).icon},size:14});var S=y(v,2),m=L(S);{var p=w=>{var A=sE(),D=J(A,!0);ge(()=>$(D,o(h).title)),k(w,A)};Le(m,w=>{o(h).title&&w(p)})}var E=y(m,2),x=J(E,!0);ge(()=>{vt(f,1,`pointer-events-auto flex w-full items-start gap-2.5 rounded-lg border ${(t[o(h).kind]??t.info).tint??""} bg-(--bg-2) p-3 text-left shadow-xl animate-[fade-in_120ms_ease-out] hover:bg-(--bg-3)`),$(x,o(h).message)}),ae("click",f,()=>Wc(o(h).id)),k(d,f)}),kn("mouseenter",u,s),kn("mouseleave",u,c),k(i,u),$t()}dn(["click"]);var uE=j('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),dE=j('<span class="truncate text-[13px]"> </span>'),fE=j('<button><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button>'),hE=j('<span class="truncate text-[13px]">Add Instance</span>'),pE=j('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),mE=j('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),vE=j('<button role="tab"> </button>'),gE=j('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),_E=j('<div class="mb-4 flex items-center gap-2"><button class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"><!> Add Instance</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance"><!> Install .mrpack</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="flex rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),xE=j('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),bE=j('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),yE=j('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),SE=j("<div> </div>"),ME=j('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),EE=j('<p class="mt-2 text-[12px] text-red-400"> </p>'),wE=j('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),TE=j('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),AE=j('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),RE=j('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button></div> <button><!> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)" aria-live="polite"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <!> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function CE(i,e){Qt(e,!0);let t=se("…"),n=se("instances"),r=se(kt(rc(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));tn(()=>{ev(o(r)),localStorage.setItem("twilight-theme",o(r)),rv(o(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:Xa(o(r))?"dark":"light"}).catch(()=>{})}),Xm();let a=se("Ready"),l=se(!1),s=se(kt(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));tn(()=>{localStorage.setItem("twilight-mode",o(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:o(s)}).catch(()=>{})});let c=se(localStorage.getItem("twilight-blind-mode")==="true"),u=se(localStorage.getItem("twilight-deaf-mode")==="true");tn(()=>{localStorage.setItem("twilight-blind-mode",String(o(c))),localStorage.setItem("twilight-deaf-mode",String(o(u))),window.__TAURI__?.core.invoke("set_accessibility_config",{blindMode:o(c),deafMode:o(u)}).catch(()=>{})});const d=[{id:"instances",label:"Instances",icon:"instances"},{id:"worlds",label:"Servers & P2P",icon:"worlds"},{id:"downloads",label:"Downloads",icon:"download"},{id:"settings",label:"Settings",icon:"settings"},{id:"accounts",label:"Accounts",icon:"accounts"}],h={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]},f=st(()=>ei.active);let v=se(!1),b=se(kt([])),S=se(!1),m=se(""),p=se(!1),E=se(!1),x=se(""),w=se(!1),A=se(""),D=se(null),P=st(()=>o(D)?"edit":o(n)),X=se(null),_=se(null),M=se(!1),ie=se(""),B=se(null),O=se(""),F=se(kt([])),H=se(0),me=se(0),oe=se("");async function ne(Z,Pe){return window.__TAURI__.core.invoke(Z,Pe)}function Me(){g(r,Xa(o(r))?"twilight-light":"twilight-dark",!0)}async function Q(){g(S,!0),g(m,"");try{g(b,await ne("discover_java_installations"),!0)}catch(Z){g(m,String(Z),!0)}finally{g(S,!1)}}function V(){g(p,!0)}async function fe(){if(o(x).trim()){g(w,!0),g(A,"");try{const Z=await ne("install_modpack",{pathOrUrl:o(x).trim()});g(E,!1),g(x,""),await ot(),Z&&g(Ee,Z,!0),g(a,"Modpack installed.")}catch(Z){g(A,String(Z),!0)}finally{g(w,!1)}}}let Ae=se(kt([])),Se=se(!1),Ie=se(!1),Ue=se(null);tn(()=>{o(Ae).length,o(Ue)&&(o(Ue).scrollTop=o(Ue).scrollHeight)});function Be(Z){o(Ae).push(Z),o(Ae).length>5e3&&o(Ae).splice(0,o(Ae).length-5e3)}function ze(){g(Ae,[],!0)}function et(Z){return Z.stream==="stderr"||Z.line.includes("/ERROR]")?"text-rose-400":Z.line.includes("/WARN]")?"text-(--accent-star)":Z.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function xt(){const Z=o(Ae).map(Pe=>Pe.line).join(`
`);try{await navigator.clipboard.writeText(Z),xi("Logs copied to clipboard.","success")}catch{const Pe=document.createElement("textarea");Pe.value=Z,document.body.append(Pe),Pe.select(),document.execCommand("copy"),Pe.remove()}}async function Qe(){if(o(Ie))try{await ne("kill_instance"),Be({stream:"stdout",line:"kill requested"})}catch(Z){Be({stream:"stderr",line:String(Z)})}}let te=se(kt([])),Mt=se(""),Oe=se(null),_e=se(""),Ee=se(null),Fe=se(null),Ge=se(""),He=se(!1);function Ye(){const Z=o(_e).trim().toLowerCase();return Z?o(te).filter(Pe=>Pe.name.toLowerCase().includes(Z)||Pe.minecraft_version.toLowerCase().includes(Z)||Pe.id.toLowerCase().includes(Z)):o(te)}async function ot(){try{g(te,await ne("scan_instances"),!0),g(Mt,"")}catch(Z){g(Mt,String(Z),!0)}}function ht(Z){g(Ee,Z,!0)}async function I(Z,Pe=null){if(o(Ie))return;const Ke=o(te).find(It=>It.id===Z),Nt=Ke?Ke.name:Z;g(Ie,!0),g(a,Pe?`Running ${Nt} → ${Pe}…`:`Running ${Nt}…`,!0),g(Se,!0);try{const It=await ne("launch_instance",{instanceId:Z,server:Pe});Be({stream:"stdout",line:`launcher reports exit code ${It}`}),await ot(),g(a,"Ready")}catch(It){console.error("Launch failed:",It),Be({stream:"stderr",line:`[ERROR] Launch failed: ${It}`}),xi(`Launch failed: ${It}`,"error"),g(a,"Launch failed")}finally{g(Ie,!1),o(a)!=="Launch failed"&&g(a,"Ready")}}function T(){o(_)&&ne("open_path",{path:o(_).instances_dir}).catch(Z=>g(a,String(Z),!0))}function G(Z){o(_)&&ne("open_path",{path:[o(_).instances_dir.replace(/\\/g,"/"),Z].join("/")}).catch(Pe=>g(a,String(Pe),!0))}function q(Z){g(Ge,""),g(Fe,Z,!0)}async function U(Z){if(!(!o(Fe)||o(He))){g(He,!0),g(Ge,"");try{await ne("delete_instance",{instanceId:o(Fe),toTrash:Z}),o(Ee)===o(Fe)&&g(Ee,null),g(Fe,null),await ot(),g(a,Z?"Instance moved to trash.":"Instance deleted.",!0)}catch(Pe){g(Ge,String(Pe),!0)}finally{g(He,!1)}}}const K=st(()=>[...new Set(o(te).map(Z=>Z.group).filter(Boolean))].sort((Z,Pe)=>Z.localeCompare(Pe)));async function re(Z){if(!o(Y))return;const Pe=o(Y).name;try{await ne("set_instance_group",{instanceId:o(Y).id,group:Z}),await ot(),g(a,Z?`Moved ${Pe} to ${Z}.`:`${Pe} is ungrouped.`,!0)}catch(Ke){g(a,String(Ke),!0)}}async function de(){if(!o(Y))return;const Z=o(Y).name;try{const Pe=await ne("duplicate_instance",{instanceId:o(Y).id});await ot(),g(Ee,Pe.id,!0),xi(`Copied ${Z}.`,"success"),g(a,`Copied ${Z}.`)}catch(Pe){g(a,String(Pe),!0),xi(`Copy failed: ${Pe}`,"error")}}async function W(Z){const Pe=typeof Z=="string"?o(Y):Z;if(!Pe)return;let Ke=typeof Z=="string"?Z:null;if(Ke==null&&(Ke=await dv({title:"Rename instance",message:`Choose a new display name for ${Pe.name}.`,value:Pe.name,placeholder:"Instance name",confirmLabel:"Rename"}),Ke==null||!Ke.trim()||Ke.trim()===Pe.name))return;const Nt=Pe.name;try{const It=await ne("rename_instance",{instanceId:Pe.id,newName:Ke});await ot(),g(Ee,It.id,!0),g(a,`Renamed ${Nt} to ${It.name}.`),xi(`Renamed to ${It.name}.`,"success")}catch(It){g(a,String(It),!0),xi(`Rename failed: ${It}`,"error")}}async function C(){if(!o(Y))return;const Z=window.__TAURI__?.dialog?.save;if(!Z){g(a,"File picker unavailable in this build.");return}try{const Pe=await Z({title:"Export instance",defaultPath:`${o(Y).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Pe)return;const Ke=await ne("export_instance_zip",{instanceId:o(Y).id,destPath:Pe});g(a,`Exported to ${Ke}.`)}catch(Pe){g(a,String(Pe),!0)}}async function he(){if(o(Y))try{const Z=await ne("create_desktop_shortcut",{instanceId:o(Y).id});xi(`Shortcut created: ${Z}`,"success"),g(a,`Shortcut created: ${Z}`)}catch(Z){g(a,String(Z),!0),xi(`Shortcut failed: ${Z}`,"error")}}async function be(Z,Pe){g(p,!1),await ot(),Z?.id&&g(Ee,Z.id,!0),g(a,Pe||`Instance ${Z?.name??""} created.`,!0)}function z(Z){g(D,Z,!0)}const Y=st(()=>o(te).find(Z=>Z.id===o(Ee))??null);let we=se(null),De=0;tn(()=>{const Z=o(Y);o(D);const Pe=++De;g(we,null),Z&&ne("list_instance_mods",{instanceId:Z.id}).then(Ke=>{Pe===De&&g(we,Ke.length,!0)}).catch(()=>{Pe===De&&g(we,null)})});async function N(){try{g(B,await ne("get_java_prefs"),!0),g(O,o(B).java_path??"",!0),g(F,o(B).custom_java_paths??[],!0),g(H,o(B).min_memory_mb,!0),g(me,o(B).max_memory_mb,!0),g(oe,""),o(b).length===0&&await Q()}catch{}}async function ye(){g(oe,"");try{await ne("set_java_prefs",{javaPath:o(O).trim()||null,minMemoryMb:Number(o(H))||0,maxMemoryMb:Number(o(me))||0}),g(oe,"Java settings saved.")}catch(Z){g(oe,String(Z),!0)}}async function ue(Z){return g(F,await ne("add_custom_java",{path:Z}),!0),o(F)}async function Te(Z){await ne("apply_java_runtime",{path:Z||null}),g(O,Z||"",!0),g(oe,"")}async function Re(){g(M,!0);try{g(_,await ne("get_storage"),!0)}catch(Z){g(ie,String(Z),!0)}finally{g(M,!1)}}async function Je(Z,Pe){g(M,!0),g(ie,"");try{await ne("set_folder_dir",{kind:Z,path:Pe?.trim()||null}),g(_,await ne("get_storage"),!0),g(ie,"Folders updated."),(Z==="instances"||Z==="shared")&&(await ot(),o(Ee)&&!o(te).some(Ke=>Ke.id===o(Ee))&&g(Ee,null))}catch(Ke){g(ie,String(Ke),!0)}finally{g(M,!1)}}function Ze(Z){ne("open_path",{path:Z}).catch(Pe=>g(a,String(Pe),!0))}async function nt(){g(M,!0),g(ie,"");try{await ne("clean_staging"),g(ie,"Staging cleaned.")}catch(Z){g(ie,String(Z),!0)}finally{g(M,!1)}}function yt(Z){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[Z.account_type.type]??"Yggdrasil"}Pi(()=>{const Z=[],Pe=Ke=>{if(Ke.key==="Escape"){const ln=Oc();if(ln){ln();return}o(Oe)?g(Oe,null):o(Fe)?(g(Fe,null),g(Ge,"")):o(D)?g(D,null):o(Ee)?g(Ee,null):o(v)?g(v,!1):o(E)?g(E,!1):o(Se)&&g(Se,!1);return}if(o(Oe)||o(Fe)||o(v)||o(E)||o(D)||o(Se)||Oc()||Ke.target?.closest?.("input, textarea, select, [contenteditable]"))return;const It=Ye();if(!It.length)return;const Kt=It.findIndex(ln=>ln.id===o(Ee));let on=null;if(Ke.key==="ArrowDown"||Ke.key==="ArrowRight")on=Kt+1;else if(Ke.key==="ArrowUp"||Ke.key==="ArrowLeft")on=Kt<0?0:Kt-1;else if(Ke.key==="Enter"&&Kt>=0&&document.activeElement===document.body){Ke.preventDefault(),I(It[Kt].id);return}on!=null&&It[on]&&(Ke.preventDefault(),g(Ee,It[on].id,!0))};return window.addEventListener("keydown",Pe),(async()=>{try{g(t,await ne("get_version"),!0)}catch{g(t,"dev")}try{Z.push(await window.__TAURI__.event.listen("launch-log",Ke=>Be(Ke.payload))),Z.push(await window.__TAURI__.event.listen("tauri://drag-drop",Ke=>{const Nt=Ke.payload?.paths?.[0];Nt&&Nt.endsWith(".mrpack")&&(o(E)?g(x,Nt,!0):g(X,Nt,!0))}))}catch{}await Ys(),await ot(),await Re();try{const Ke=await ne("get_startup_launch");Ke&&o(te).some(Nt=>Nt.id===Ke)&&I(Ke)}catch{}})(),()=>Z.forEach(Ke=>Ke())});var ut=RE(),Pt=L(ut),wt=L(Pt),We=y(L(wt),2);{var ke=Z=>{var Pe=uE();k(Z,Pe)};Le(We,Z=>{o(l)&&Z(ke)})}var lt=y(wt,2),Lt=L(lt);Ct(Lt,17,()=>d,Z=>Z.id,(Z,Pe)=>{var Ke=fE(),Nt=L(Ke),It=L(Nt);jt(It,{get name(){return o(Pe).icon},size:15});var Kt=y(Nt,2);{var on=ln=>{var qn=dE(),Gn=J(qn,!0);ge(()=>$(Gn,o(Pe).label)),k(ln,qn)};Le(Kt,ln=>{o(l)&&ln(on)})}ge(()=>{vt(Ke,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${o(l)?"":"justify-center"} ${o(n)===o(Pe).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Ne(Ke,"title",o(Pe).label)}),ae("click",Ke,()=>{g(n,o(Pe).id,!0),g(D,null),g(s,"launcher"),o(Pe).id==="settings"&&(N(),o(_)||Re())}),k(Z,Ke)});var _t=y(Lt,2),Ut=L(_t),zt=L(Ut);jt(zt,{name:"new",size:15});var gt=y(Ut,2);{var pt=Z=>{var Pe=hE();k(Z,Pe)};Le(gt,Z=>{o(l)&&Z(pt)})}var Xe=y(lt,2),R=L(Xe);{let Z=st(()=>fs(o(f))),Pe=st(()=>o(f)?o(f).username[0]?.toUpperCase():"?");pc(R,{get source(){return o(Z)},size:28,get letter(){return o(Pe)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var ee=y(R,2);{var pe=Z=>{var Pe=pE(),Ke=L(Pe),Nt=J(Ke,!0),It=y(Ke,2),Kt=J(It,!0);ge(on=>{$(Nt,o(f)?o(f).username:"Accounts"),$(Kt,on)},[()=>o(f)?yt(o(f)):"manage & sign in"]),k(Z,Pe)};Le(ee,Z=>{o(l)&&Z(pe)})}var le=y(Xe,2),xe=J(le,!0),qe=y(Pt,2),rt=L(qe),dt=L(rt),ct=L(dt);{var St=Z=>{var Pe=mE(),Ke=At(Pe),Nt=y(Ke,2),It=J(Nt,!0);ge(()=>{Ne(Nt,"title",o(D)?.name),$(It,o(D)?.name)}),ae("click",Ke,()=>g(D,null)),k(Z,Pe)},mt=Z=>{var Pe=gE(),Ke=At(Pe),Nt=J(Ke),It=y(Ke,4);Ct(It,20,()=>[["launcher","Launcher"],["client","Client"]],Ml,(Kt,on)=>{var ln=st(()=>Nd(on,2));let qn=()=>o(ln)[0],Gn=()=>o(ln)[1];var Un=vE(),Ii=J(Un,!0);ge(()=>{vt(Un,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${o(s)===qn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Ne(Un,"aria-selected",o(s)===qn()),$(Ii,Gn())}),ae("click",Un,()=>g(s,qn(),!0)),k(Kt,Un)}),ge(()=>$(Nt,`TwilightMC Bolide (alpha-v${o(t)??""})`)),k(Z,Pe)};Le(ct,Z=>{o(P)==="edit"?Z(St):Z(mt,-1)})}var bt=y(dt,2),ve=J(bt,!0),Ce=y(rt,2),je=L(Ce);{var ft=Z=>{VM(Z,{onback:()=>g(n,"instances")})},it=Z=>{eE(Z,{get instances(){return o(te)},get active(){return o(f)},get gameRunning(){return o(Ie)},get status(){return o(a)},onlaunch:I,onopenconsole:()=>g(Se,!0),get onrefresh(){return Ys},onopenaccounts:()=>{g(n,"accounts"),g(s,"launcher")}})},tt=Z=>{$v(Z,{get instance(){return o(D)},get storage(){return o(_)},get blindMode(){return o(c)},get deafMode(){return o(u)},onback:()=>g(D,null),onopenconsole:()=>g(Se,!0)})},Gt=Z=>{v_(Z,{get version(){return o(t)},get storage(){return o(_)},get runtimes(){return o(b)},get scanning(){return o(S)},get javaError(){return o(m)},get storageBusy(){return o(M)},get storageMsg(){return o(ie)},get javaMsg(){return o(oe)},get gameRunning(){return o(Ie)},onback:()=>g(n,"instances"),onscanjava:Q,onsaveprefs:ye,onaddjava:ue,onapplyjava:Te,onsavefolder:Je,onopenfolder:Ze,oncleanstaging:nt,onopenaccounts:()=>{g(n,"accounts"),g(s,"launcher")},onopenurl:Pe=>ne("open_external_url",{url:Pe}).catch(Ke=>g(a,String(Ke),!0)),get theme(){return o(r)},set theme(Pe){g(r,Pe,!0)},get blindMode(){return o(c)},set blindMode(Pe){g(c,Pe,!0)},get deafMode(){return o(u)},set deafMode(Pe){g(u,Pe,!0)},get javaPath(){return o(O)},set javaPath(Pe){g(O,Pe,!0)},get javaCustomPaths(){return o(F)},set javaCustomPaths(Pe){g(F,Pe,!0)},get minMem(){return o(H)},set minMem(Pe){g(H,Pe,!0)},get maxMem(){return o(me)},set maxMem(Pe){g(me,Pe,!0)}})},Tt=Z=>{var Pe=_E(),Ke=At(Pe),Nt=L(Ke),It=L(Nt);jt(It,{name:"new",size:13});var Kt=y(Nt,2),on=L(Kt);jt(on,{name:"folder",size:14});var ln=y(Kt,2),qn=L(ln);jt(qn,{name:"package",size:14});var Gn=y(ln,2),Un=L(Gn);jt(Un,{name:"settings",size:14});var Ii=y(Gn,2),gi=y(Ii,4),_i=L(gi);{var cn=Yn=>{jt(Yn,{name:"sun",size:15})},Di=st(()=>Xa(o(r))),wo=Yn=>{jt(Yn,{name:"moon",size:15})};Le(_i,Yn=>{o(Di)?Yn(cn):Yn(wo,-1)})}var Uh=y(Ke,2);{let Yn=st(Ye);Im(Uh,{get instances(){return o(Yn)},get error(){return o(Mt)},get query(){return o(_e)},get selectedId(){return o(Ee)},get gameRunning(){return o(Ie)},get menuFor(){return o(Oe)},onselect:ht,onplay:I,ontogglemenu:Mc=>g(Oe,o(Oe)===Mc?null:Mc,!0),onedit:z,onrename:W,onopenfolder:G,onviewlogs:()=>g(Se,!0),ondelete:q,onclosemenu:()=>g(Oe,null),onadd:V})}ge(Yn=>{Kt.disabled=!o(_),Ne(Kt,"title",o(_)?o(_).instances_dir:""),Ne(gi,"title",Yn)},[()=>Xa(o(r))?"Twilight Light":"Twilight Dark"]),ae("click",Nt,V),ae("click",Kt,T),ae("click",ln,()=>g(E,!0)),ae("click",Gn,()=>{g(n,"settings"),N(),o(_)||Re()}),Xt(Ii,()=>o(_e),Yn=>g(_e,Yn)),ae("click",gi,Me),k(Z,Pe)},nn=Z=>{var Pe=xE(),Ke=At(Pe),Nt=J(Ke,!0),It=y(Ke,2),Kt=J(It,!0);ge(()=>{$(Nt,h[o(n)][0]),$(Kt,h[o(n)][1])}),k(Z,Pe)};Le(je,Z=>{o(P)==="accounts"?Z(ft):o(s)==="client"?Z(it,1):o(P)==="edit"&&o(D)?Z(tt,2):o(n)==="settings"?Z(Gt,3):o(n)==="instances"?Z(Tt,4):Z(nn,-1)})}var Bn=y(Ce,2),fn=L(Bn),xn=L(fn),Ht=L(xn),Mn=y(Ht,2);jt(Mn,{name:"log",size:13});var zn=y(Mn,4);{var qt=Z=>{var Pe=bE();k(Z,Pe)};Le(zn,Z=>{o(Ie)&&Z(qt)})}var Li=y(xn,2),Da=L(Li),Ur=y(Da,2),Eo=y(Ur,2),wh=y(Eo,2);{var Th=Z=>{var Pe=yE();ae("click",Pe,()=>g(Se,!1)),k(Z,Pe)};Le(wh,Z=>{o(Se)&&Z(Th)})}var mc=y(fn,2);Ct(mc,21,()=>o(Ae),Ml,(Z,Pe)=>{var Ke=SE(),Nt=J(Ke,!0);ge(It=>{vt(Ke,1,`whitespace-pre-wrap break-all ${It??""}`),$(Nt,o(Pe).line)},[()=>et(o(Pe))]),k(Z,Ke)},Z=>{var Pe=ME();k(Z,Pe)}),Tf(mc,Z=>g(Ue,Z),()=>o(Ue));var vc=y(qe,2);{var Ah=Z=>{Gg(Z,{get instance(){return o(Y)},get storage(){return o(_)},get gameRunning(){return o(Ie)},get modsCount(){return o(we)},get groups(){return o(K)},onlaunch:()=>I(o(Y).id),onkill:Qe,onedit:()=>z(o(Y)),onchangegroup:re,onopenfolder:()=>G(o(Y).id),onexport:C,oncopy:de,ondelete:()=>q(o(Y).id),onshortcut:he,onrename:W,onclose:()=>g(Ee,null)})};Le(vc,Z=>{o(P)==="instances"&&o(Y)&&Z(Ah)})}var gc=y(vc,2);{var Rh=Z=>{sg(Z,{get path(){return o(X)},onclose:()=>g(X,null),oninstalled:async Pe=>{g(X,null),await ot(),g(Ee,Pe,!0),g(a,"Modpack installed.")}})};Le(gc,Z=>{o(X)&&Z(Rh)})}var _c=y(gc,2);{var Ch=Z=>{IM(Z,{get accounts(){return ei.list},get active(){return o(f)},onclose:()=>{g(v,!1),Ys()},get onrefresh(){return Ys}})};Le(_c,Z=>{o(v)&&Z(Ch)})}var xc=y(_c,2);{var Ph=Z=>{Dg(Z,{get groups(){return o(K)},get blindMode(){return o(c)},get deafMode(){return o(u)},onclose:()=>g(p,!1),oncreated:be})};Le(xc,Z=>{o(p)&&Z(Ph)})}var bc=y(xc,2);{var Lh=Z=>{var Pe=wE(),Ke=L(Pe),Nt=L(Ke),It=y(L(Nt),2),Kt=y(Nt,2),on=L(Kt),ln=y(on,2),qn=y(ln,2);{var Gn=cn=>{var Di=EE(),wo=J(Di,!0);ge(()=>$(wo,o(A))),k(cn,Di)};Le(qn,cn=>{o(A)&&cn(Gn)})}var Un=y(Kt,2),Ii=L(Un),gi=y(Ii,2),_i=J(gi,!0);ge(cn=>{gi.disabled=cn,$(_i,o(w)?"Installing…":"Install .mrpack")},[()=>o(w)||!o(x).trim()]),ae("click",Pe,cn=>{cn.target===cn.currentTarget&&!o(w)&&g(E,!1)}),ae("click",It,()=>g(E,!1)),kn("dragover",on,cn=>cn.preventDefault()),kn("drop",on,cn=>{cn.preventDefault();const Di=cn.dataTransfer?.files?.[0]?.path;Di&&g(x,Di,!0)}),Xt(ln,()=>o(x),cn=>g(x,cn)),ae("click",Ii,()=>g(E,!1)),ae("click",gi,fe),k(Z,Pe)};Le(bc,Z=>{o(E)&&Z(Lh)})}var yc=y(bc,2);{var Ih=Z=>{var Pe=AE(),Ke=L(Pe),Nt=y(L(Ke),2),It=y(L(Nt)),Kt=J(It,!0),on=y(Nt,2);{var ln=_i=>{var cn=TE(),Di=J(cn,!0);ge(()=>$(Di,o(Ge))),k(_i,cn)};Le(on,_i=>{o(Ge)&&_i(ln)})}var qn=y(on,2),Gn=L(qn),Un=y(Gn,2),Ii=L(Un);Ei(Ii,{emoji:"♻"});var gi=y(Un,2);ge(()=>{$(Kt,o(Fe)),Gn.disabled=o(He),Un.disabled=o(He),gi.disabled=o(He)}),ae("click",Pe,_i=>{_i.target===_i.currentTarget&&!o(He)&&g(Fe,null)}),ae("click",Gn,()=>g(Fe,null)),ae("click",Un,()=>U(!0)),ae("click",gi,()=>U(!1)),k(Z,Pe)};Le(yc,Z=>{o(Fe)&&Z(Ih)})}var Sc=y(yc,2);aE(Sc,{});var Dh=y(Sc,2);cE(Dh,{}),ge(()=>{vt(Pt,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${o(l)?"w-60":"w-16"}`),vt(_t,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${o(l)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),vt(Xe,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${o(l)?"":"justify-center"}`),Ne(Xe,"title",o(f)?o(f).username:"Manage accounts"),vt(le,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${o(l)?"":"opacity-0 group-hover/nav:opacity-100"}`),$(xe,o(l)?"«":"»"),$(ve,o(a)),vt(Bn,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${o(Se)?"h-48":"h-10"}`),Ne(xn,"title",o(Se)?"Collapse console":"Expand console"),vt(Ht,1,`h-2 w-2 shrink-0 rounded-full ${o(Ie)?"animate-pulse bg-green-500":"bg-(--border)"}`),Da.disabled=!o(Ae).length,Ur.disabled=!o(Ae).length,Eo.disabled=!o(Ie)}),ae("dblclick",wt,()=>g(l,!o(l))),ae("click",_t,V),ae("click",Xe,()=>{g(n,"accounts"),g(D,null),g(s,"launcher")}),ae("click",le,()=>g(l,!o(l))),ae("click",xn,()=>g(Se,!o(Se))),ae("click",Da,Z=>{Z.stopPropagation(),ze()}),ae("click",Ur,Z=>{Z.stopPropagation(),xt()}),ae("click",Eo,Z=>{Z.stopPropagation(),Qe()}),k(i,ut),$t()}dn(["dblclick","click"]);nm(CE,{target:document.getElementById("app")});
