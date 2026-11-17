(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Nu=!1;var fo=Array.isArray,Gh=Array.prototype.indexOf,$a=Array.prototype.includes,ho=Array.from,Ou=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,Hh=Object.getOwnPropertyDescriptors,Vh=Object.prototype,Wh=Array.prototype,Fu=Object.getPrototypeOf,Cc=Object.isExtensible;const jh=()=>{};function Xh(i){for(var e=0;e<i.length;e++)i[e]()}function Bu(){var i,e,t=new Promise((n,r)=>{i=n,e=r});return{promise:t,resolve:i,reject:e}}function zu(i,e){if(Array.isArray(i))return i;if(!(Symbol.iterator in i))return Array.from(i);const t=[];for(const n of i)if(t.push(n),t.length===e)break;return t}const Rn=2,ha=4,po=8,Gu=1<<24,fi=16,gi=32,ur=64,xl=128,Xl=256,mi=512,mn=1024,Kt=2048,Xn=4096,Un=8192,Sn=16384,Ta=32768,es=1<<25,pa=65536,$s=1<<17,qh=1<<18,Aa=1<<19,Yh=1<<20,Mi=1<<25,eo=1<<21,oa=1<<22,or=1<<23,wr=Symbol("$state"),Hu=Symbol("component"),Kh=Symbol("legacy props"),Zh=Symbol(""),Vu=Symbol("attributes"),bl=Symbol("class"),yl=Symbol("style"),Sl=Symbol("text"),Ys=Symbol("form reset"),us=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Jh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),Qh=1,$h=2,Wu=4,ep=8,tp=16,np=1,ip=4,rp=8,ap=16,sp=1,op=2,ju={},pn=Symbol("uninitialized"),lp="http://www.w3.org/1999/xhtml";function cp(){console.warn("https://svelte.dev/e/derived_inert")}function dp(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function up(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Xu(i){return i===this.v}function fp(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function qu(i){return!fp(i,this.v)}function Yu(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function hp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function pp(i,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function mp(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gp(i){throw new Error("https://svelte.dev/e/effect_orphan")}function _p(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function xp(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function bp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function yp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Sp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Mp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let wp=!1,Mn=null;function ma(i){Mn=i}function jt(i,e=!1,t){Mn={p:Mn,i:!1,c:null,e:null,s:i,x:null,r:Ft,l:null}}function Xt(i){var e=Mn,t=e.e;if(t!==null){e.e=null;for(var n of t)hf(n)}return e.i=!0,Mn=e.p,ql(i)}function ql(i={}){return Ou(i,Hu,{value:!0}),i}function Ku(){return!0}let yr=[];function Zu(){var i=yr;yr=[],Xh(i)}function wi(i){if(yr.length===0&&!Ya){var e=yr;queueMicrotask(()=>{e===yr&&Zu()})}yr.push(i)}function Ep(){for(;yr.length>0;)Zu()}const Tp=-7169;function on(i,e){i.f=i.f&Tp|e}function Yl(i){(i.f&mi)!==0||i.deps===null?on(i,mn):on(i,Xn)}function Ju(i,e){(i.f&Kt)!==0?e.set(i,Kt):(i.f&Xn)!==0&&e.get(i)!==Kt&&e.set(i,Xn),on(i,mn)}function Ap(i,e){{const t=document.body;i.autofocus=!0,wi(()=>{document.activeElement===t&&i.focus()})}}let Pc=!1;function Rp(){Pc||(Pc=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const e of i.target.elements)e[Ys]?.()})},{capture:!0}))}function Ra(i){var e=Nt,t=Ft;si(null),Ri(null);try{return i()}finally{si(e),Ri(t)}}function Kl(i,e,t,n=t){i.addEventListener(e,()=>Ra(t));const r=i[Ys];r?i[Ys]=()=>{r(),n(!0)}:i[Ys]=()=>n(!0),Rp()}function Cp(i,e,t,n){const r=ts;var a=i.filter(g=>!g.settled),l=e.map(r);if(t.length===0&&a.length===0){n(l);return}var o=Ft,c=Pp(),d=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function u(g){if((o.f&Sn)===0){c();try{n([...l,...g])}catch(y){Si(y,o)}to()}}var h=Qu();if(t.length===0){d.then(()=>u([])).finally(h);return}function f(){Promise.all(t.map(g=>Lp(g))).then(u).catch(g=>Si(g,o)).finally(h)}d?d.then(()=>{if((o.f&Sn)!==0){h();return}c(),f(),to()}):f()}function Pp(){var i=Ft,e=Nt,t=Mn,n=Tt;return function(a=!0){Ri(i),si(e),ma(t),a&&(i.f&Sn)===0&&(n?.activate(),n?.apply())}}function to(i=!0){Ri(null),si(null),ma(null),i&&Tt?.deactivate()}function Qu(){var i=Ft,e=i.b,t=Tt,n=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(n,i),()=>{e?.update_pending_count(-1,t),t.decrement(n,i)}}function ts(i){var e=Rn|Kt;return Ft!==null&&(Ft.f|=Aa),{ctx:Mn,deps:null,effects:null,equals:Xu,f:e,fn:i,reactions:null,rv:0,v:pn,wv:0,parent:Ft,ac:null}}const Ha=Symbol("obsolete");function Lp(i,e,t){let n=Ft;n===null&&hp();var r=void 0,a=Lr(pn),l=!Nt,o=new Set;return Xp(()=>{var c=Ft,d=Bu();r=d.promise;try{Promise.resolve(i()).then(d.resolve,g=>{g!==us&&d.reject(g)}).finally(to)}catch(g){d.reject(g),to()}var u=Tt;if(l){if((c.f&Ta)!==0)var h=Qu();if(n.b?.is_rendered())u.async_deriveds.get(c)?.reject(Ha);else for(const g of o.values())g.reject(Ha);o.add(d),u.async_deriveds.set(c,d)}const f=(g,y=void 0)=>{h?.(),o.delete(d),y!==Ha&&(u.activate(),y?(a.f|=or,va(a,y)):((a.f&or)!==0&&(a.f^=or),va(a,g)),u.deactivate())};d.promise.then(f,g=>f(null,g||"unknown"))}),ec(()=>{for(const c of o)c.reject(Ha)}),new Promise(c=>{function d(u){function h(){u===r?c(a):d(r)}u.then(h,h)}d(r)})}function pt(i){const e=ts(i);return xf(e),e}function $u(i){const e=ts(i);return e.equals=qu,e}function Ip(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)Bn(e[t])}}function Zl(i){var e,t=Ft,n=i.parent;if(!Ki&&n!==null&&i.v!==pn&&(n.f&(Sn|Un))!==0)return cp(),i.v;Ri(n);try{Ip(i),e=Mf(i)}finally{Ri(t)}return e}function ef(i){var e=Zl(i);if(!i.equals(e)&&(i.wv=yf(),(!Tt?.is_fork||i.deps===null)&&(Tt!==null?(Tt.capture(i,e,!0),la?.capture(i,e,!0)):i.v=e,i.deps===null))){on(i,mn);return}Ki||(hi!==null?($l()||Tt?.is_fork)&&hi.set(i,e):Yl(i))}function Dp(i){if(i.effects!==null)for(const e of i.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&Ra(()=>{e.ac.abort(us),e.ac=null}),e.fn!==null&&(e.teardown=jh),is(e,0),tc(e))}function tf(i){if(i.effects!==null)for(const e of i.effects)e.teardown&&e.fn!==null&&ga(e)}let Po=null,kr=null,Tt=null,la=null,hi=null,Ml=null,Ya=!1,Lo=!1,Ka=null,Ks=null;var Lc=0;let Up=1;class fr{id=Up++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){kr===null?Po=kr=this:(kr.next=this,this.prev=kr),kr=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=n=>this.schedule(n)){var n=this.#o.get(e);if(n){this.#o.delete(e);for(var r of n.d)on(r,Kt),t(r);for(r of n.m)on(r,Xn),t(r)}this.#h.add(e)}#d(){var e=[];for(const a of this.#i)if(!((a.f&Sn)!==0||(a.f&(Kt|Xn))===0)){for(var t=a,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(ur|gi))!==0){if((r&mn)===0){n=!0;break}t.f^=mn}}n||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[o,c]of this.#r)on(o,c),this.schedule(o);this.apply();for(var e=Ka=[],t=[],n=Ks=[];this.#i.length>0;){Lc++>1e3&&(this.#f(),Np());for(const o of this.#d())try{this.#x(o,e,t)}catch(c){throw af(o),this.#p()||this.discard(),c}}if(Tt=null,n.length>0){var r=fr.ensure();for(const o of n)r.schedule(o)}if(Ka=null,Ks=null,this.#p()){this.#v(t),this.#v(e);for(const[o,c]of this.#o)rf(o,c);n.length>0&&Tt.#m();return}const a=this.#S();if(a){this.#v(t),this.#v(e),a.#u(this);return}this.#r.clear();for(const o of this.#t)o(this);this.#t.clear(),la=this,Ic(t),Ic(e),la=null,this.#n?.resolve();var l=Tt;this.#e===0&&(this.#i.length===0||l!==null)&&this.#f(),l!==null&&(Ti.clear(),l.#m())}#x(e,t,n){e.f^=mn;for(var r=e.first;r!==null;){var a=r.f,l=(a&(gi|ur))!==0,o=l&&(a&mn)!==0,c=o||(a&Un)!==0||this.#o.has(r);if(!c&&r.fn!==null){l?r.f^=mn:(a&ha)!==0?t.push(r):hs(r)&&((a&fi)!==0&&this.add_dirty_reaction(r,Xn),ga(r));var d=r.first;if(d!==null){r=d;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}}#S(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,n]]of this.current)if(!n&&e.current.has(t))return!0;return!1}#u(e){for(const[n,r]of e.current)!this.previous.has(n)&&e.previous.has(n)&&this.previous.set(n,e.previous.get(n)),this.current.set(n,r);for(const[n,r]of e.async_deriveds){const a=this.async_deriveds.get(n);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=n=>{var r=n.reactions;if(r!==null&&!((n.f&Rn)!==0&&(n.f&(Kt|Xn))===0))for(const o of r){var a=o.f;if((a&Rn)!==0)t(o);else{var l=o;a&(oa|fi)&&!this.async_deriveds.has(l)&&(this.#r.delete(l),on(l,Kt),this.schedule(l))}}};for(const n of this.current.keys())t(n);this.oncommit(()=>e.discard()),e.#f(),Tt=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)Ju(e[t],this.#r)}capture(e,t,n=!1){e.v!==pn&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&or)===0&&(this.current.set(e,[t,n]),hi?.set(e,t)),this.is_fork||(e.v=t)}activate(){Tt=this}deactivate(){Tt=null,hi=null}flush(){try{Lo=!0,Tt=this,this.#m()}finally{Lc=0,Ml=null,Ka=null,Ks=null,Lo=!1,Tt=null,hi=null,Ti.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Ha);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let h=Po;h!==null;h=h.next){var e=h.id<this.id,t=[];for(const[f,[g,y]]of this.current){if(h.current.has(f)){var n=h.current.get(f)[0];if(e&&g!==n)h.current.set(f,[g,y]);else continue}t.push(f)}if(e)for(const[f,g]of this.async_deriveds){const y=h.async_deriveds.get(f);y&&g.promise.then(y.resolve).catch(y.reject)}var r=[...h.current.keys()].filter(f=>!h.current.get(f)[1]);if(!(!h.started||r.length===0)){var a=r.filter(f=>!this.current.has(f));if(a.length===0)e&&h.discard();else if(t.length>0){if(e)for(const f of this.#h)h.unskip_effect(f,g=>{(g.f&(fi|oa))!==0?h.schedule(g):h.#v([g])});h.activate();var l=new Set,o=new Map;for(var c of t)nf(c,a,l,o);o=new Map;var d=[...h.current].filter(([f,g])=>{const y=this.current.get(f);return y?y[0]!==g[0]||y[1]!==g[1]:!0}).map(([f])=>f);if(d.length>0)for(const f of this.#a)(f.f&(Sn|Un|$s))===0&&Jl(f,d,o)&&((f.f&(oa|fi))!==0?(on(f,Kt),h.schedule(f)):h.add_dirty_reaction(f,Kt));if(h.#i.length>0&&!h.#c){h.apply();for(var u of h.#d())h.#x(u,[],[])}h.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let n=this.#s.get(t)??0;this.#s.set(t,n+1)}}decrement(e,t){if(this.#e-=1,e){let n=this.#s.get(t)??0;n===1?this.#s.delete(t):this.#s.set(t,n-1)}this.#c||(this.#c=!0,wi(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,n]of e)this.add_dirty_reaction(t,n);e.clear()}add_dirty_reaction(e,t){(t===Kt||this.#r.get(e)!==Kt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=Bu()).promise}static ensure(){if(Tt===null){const e=Tt=new fr;!Lo&&!Ya&&wi(()=>{e.started||e.flush()})}return Tt}apply(){{hi=null;return}}schedule(e){if(Ml=e,e.b?.is_pending&&(e.f&(ha|po|Gu))!==0&&(e.f&Ta)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?Po=t:e.next=t,t===null?kr=e:t.prev=e,this.linked=!1}}}function kp(i){var e=Ya,t=la;la=null,Ya=!0;try{for(var n;;){if(Ep(),Tt===null)return n;Tt.flush()}}finally{Ya=e,la=t}}function Np(){try{_p()}catch(i){Si(i,Ml)}}let Gi=null;function Ic(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(Sn|Un))===0&&hs(n)&&(Gi=new Set,ga(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&vf(n),Gi?.size>0)){Ti.clear();for(const r of Gi){if((r.f&(Sn|Un))!==0)continue;const a=[r];let l=r.parent;for(;l!==null;)Gi.has(l)&&(Gi.delete(l),a.push(l)),l=l.parent;for(let o=a.length-1;o>=0;o--){const c=a[o];(c.f&(Sn|Un))===0&&ga(c)}}Gi.clear()}}Gi=null}}function nf(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const r of i.reactions){const a=r.f;(a&Rn)!==0?nf(r,e,t,n):(a&(oa|fi))!==0&&(a&Kt)===0&&Jl(r,e,n)&&(on(r,Kt),Ql(r))}}function Jl(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const r of i.deps){if($a.call(e,r))return!0;if((r.f&Rn)!==0&&Jl(r,e,t))return t.set(r,!0),!0}return t.set(i,!1),!1}function Ql(i){Tt.schedule(i)}function rf(i,e){if(!((i.f&gi)!==0&&(i.f&mn)!==0)){(i.f&Kt)!==0?e.d.push(i):(i.f&Xn)!==0&&e.m.push(i),on(i,mn);for(var t=i.first;t!==null;)rf(t,e),t=t.next}}function af(i){on(i,mn);for(var e=i.first;e!==null;)af(e),e=e.next}let no=new Set;const Ti=new Map;let sf=!1;function Lr(i,e){var t={f:0,v:i,reactions:null,equals:Xu,rv:0,wv:0};return t}function J(i,e){const t=Lr(i);return xf(t),t}function Op(i,e=!1,t=!0){const n=Lr(i);return e||(n.equals=qu),n}function v(i,e,t=!1){Nt!==null&&(!pi||(Nt.f&$s)!==0)&&Ku()&&(Nt.f&(Rn|fi|oa|$s))!==0&&(Ai===null||!Ai.has(i))&&Sp();let n=t?Pt(e):e;return va(i,n,Ks)}var xr=null,wl=0;function va(i,e,t=null){if(!i.equals(e)){Ki?Ti.set(i,e):Ti.has(i)||Ti.set(i,i.v);var n=fr.ensure();if(n.capture(i,e),(i.f&Rn)!==0){const r=i;(i.f&Kt)!==0&&Zl(r),hi===null&&Yl(r)}i.wv=yf(),xr=null,wl=0,of(i,Kt,t),xr=null,Ft!==null&&(Ft.f&mn)!==0&&(Ft.f&(gi|ur))===0&&($n===null?Kp([i]):$n.push(i)),!n.is_fork&&no.size>0&&!sf&&Fp()}return e}function Fp(){sf=!1;for(const i of no){(i.f&mn)!==0&&on(i,Xn);let e;try{e=hs(i)}catch{e=!0}e&&ga(i)}no.clear()}function Za(i){v(i,i.v+1)}function of(i,e,t){var n=i.reactions;if(n!==null){var r=n.length;if(wl+=r,wl>1e5&&xr===null&&(xr=new Set),xr!==null){if(xr.has(i))return;xr.add(i)}for(var a=0;a<r;a++){var l=n[a],o=l.f,c=(o&Kt)===0;if(c&&on(l,e),(o&$s)!==0)no.add(l);else if((o&Rn)!==0){var d=l;hi?.delete(d),of(d,Xn,t)}else if(c){var u=l;(o&fi)!==0&&Gi!==null&&Gi.add(u),t!==null?t.push(u):Ql(u)}}}}function Pt(i){if(typeof i!="object"||i===null||wr in i||Hu in i)return i;const e=Fu(i);if(e!==Vh&&e!==Wh)return i;var t=new Map,n=fo(i),r=J(0),a=Tr,l=o=>{if(Tr===a)return o();var c=Nt,d=Tr;si(null),Nc(a);var u=o();return si(c),Nc(d),u};return n&&t.set("length",J(i.length)),new Proxy(i,{defineProperty(o,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&bp();var u=t.get(c);return u===void 0?l(()=>{var h=J(d.value);return t.set(c,h),h}):v(u,d.value,!0),!0},deleteProperty(o,c){var d=t.get(c);if(d===void 0){if(c in o){const u=l(()=>J(pn));t.set(c,u),Za(r)}}else v(d,pn),Za(r);return!0},get(o,c,d){if(c===wr)return i;var u=t.get(c),h=c in o;if(u===void 0&&(!h||sa(o,c)?.writable)&&(u=l(()=>{var g=Pt(h?o[c]:pn),y=J(g);return y}),t.set(c,u)),u!==void 0){var f=s(u);return f===pn?void 0:f}return Reflect.get(o,c,d)},getOwnPropertyDescriptor(o,c){this.has?.(o,c);var d=Reflect.getOwnPropertyDescriptor(o,c),u=t.get(c);if(u!==void 0){var h=s(u);if(h===pn)return;if(d&&"value"in d)d.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return d},has(o,c){if(c===wr)return!0;var d=t.get(c),u=d!==void 0&&d.v!==pn||Reflect.has(o,c);if(d!==void 0||(Ft!==null||Nt!==null)&&(!u||sa(o,c)?.writable)){d===void 0&&(d=l(()=>{var f=u?Pt(o[c]):pn,g=J(f);return g}),t.set(c,d));var h=s(d);if(h===pn)return!1}return u},set(o,c,d,u){var h=t.get(c),f=c in o;if(n&&c==="length")for(var g=d;g<h.v;g+=1){var y=t.get(g+"");y!==void 0?v(y,pn):g in o&&(y=l(()=>J(pn)),t.set(g+"",y))}if(h===void 0)(!f||sa(o,c)?.writable)&&(h=l(()=>J(void 0)),v(h,Pt(d)),t.set(c,h));else{f=h.v!==pn;var S=l(()=>Pt(d));v(h,S)}var p=Reflect.getOwnPropertyDescriptor(o,c);if(p?.set&&p.set.call(u,d),!f){if(n&&typeof c=="string"){var m=t.get("length"),w=Number(c);Number.isInteger(w)&&w>=m.v&&v(m,w+1)}Za(r)}return!0},ownKeys(o){s(r);var c=Reflect.ownKeys(o).filter(h=>{var f=t.get(h);return f===void 0||f.v!==pn});for(var[d,u]of t)u.v!==pn&&!(d in o)&&c.push(d);return c},setPrototypeOf(){yp()}})}function Dc(i){try{if(i!==null&&typeof i=="object"&&wr in i)return i[wr]}catch{}return i}function lf(i,e){return Object.is(Dc(i),Dc(e))}var Uc,cf,df,uf;function Bp(){if(Uc===void 0){Uc=window,cf=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;df=sa(e,"firstChild").get,uf=sa(e,"nextSibling").get,Cc(i)&&(i[bl]=void 0,i[Vu]=null,i[yl]=void 0,i.__e=void 0),Cc(t)&&(t[Sl]=void 0)}}function Xi(i=""){return document.createTextNode(i)}function ns(i){return df.call(i)}function fs(i){return uf.call(i)}function R(i,e){return ns(i)}function St(i,e=!1){{var t=ns(i);return t instanceof Comment&&t.data===""?fs(t):t}}function K(i,e=!1){return ns(i)}function _(i,e=1,t=!1){let n=i;for(;e--;)n=fs(n);return n}function zp(i){i.textContent=""}function ff(){return!1}function Gp(i,e,t){return t?document.createElement(i,{is:t}):document.createElement(i)}function Hp(i){var e=Ft;if(e===null)return Nt.f|=or,i;if((e.f&Ta)===0&&(e.f&ha)===0)throw i;Si(i,e)}function Si(i,e){if(i===ju)throw i;if(!(e!==null&&(e.f&Sn)!==0)){for(;e!==null;){if((e.f&xl)!==0&&(e.f&(Sn|es))===0){if((e.f&Ta)===0)throw i;try{e.b.error(i);return}catch(t){i=t}}e=e.parent}throw i}}function Vp(i){Ft===null&&(Nt===null&&gp(),vp()),Ki&&mp()}function Wp(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function Qi(i,e){var t=Ft;t!==null&&(t.f&Un)!==0&&(i|=Un);var n={ctx:Mn,deps:null,nodes:null,f:i|Kt|mi,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Tt?.register_created_effect(n);var r=n;if((i&ha)!==0)Ka!==null?Ka.push(n):fr.ensure().schedule(n);else if(e!==null){try{ga(n)}catch(l){throw Bn(n),l}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Aa)===0&&(r=r.first,(i&fi)!==0&&(i&pa)!==0&&r!==null&&(r.f|=pa))}if(r!==null&&(r.parent=t,t!==null&&Wp(r,t),Nt!==null&&(Nt.f&Rn)!==0&&(i&ur)===0)){var a=Nt;(a.effects??=[]).push(r)}return n}function $l(){return Nt!==null&&!pi}function ec(i){const e=Qi(po,null);return on(e,mn),e.teardown=i,e}function nn(i){Vp();var e=Ft.f,t=!Nt&&(e&gi)!==0&&Mn!==null&&!Mn.i;if(t){var n=Mn;(n.e??=[]).push(i)}else return hf(i)}function hf(i){return Qi(ha|Yh,i)}function jp(i){fr.ensure();const e=Qi(ur|Aa,i);return(t={})=>new Promise(n=>{t.outro?Er(e,()=>{Bn(e),n(void 0)}):(Bn(e),n(void 0))})}function pf(i){return Qi(ha,i)}function Xp(i){return Qi(oa|Aa,i)}function mo(i,e=0){return Qi(po|e,i)}function ce(i,e=[],t=[],n=[]){Cp(n,e,t,r=>{Qi(po,()=>{i(...r.map(s))})})}function vo(i,e=0){var t=Qi(fi|e,i);return t}function ei(i){return Qi(gi|Aa,i)}function mf(i){var e=i.teardown;if(e!==null){const t=Ki,n=Nt;kc(!0),si(null);try{e.call(null)}catch(r){Si(r,i.parent)}finally{kc(t),si(n)}}}function tc(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const r=t.ac;r!==null&&Ra(()=>{r.abort(us)});var n=t.next;(t.f&ur)!==0?t.parent=null:Bn(t,e),t=n}}function qp(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&gi)===0&&Bn(e),e=t}}function Bn(i,e=!0){var t=!1;(e||(i.f&qh)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(Yp(i.nodes.start,i.nodes.end),t=!0),i.f|=es,tc(i,e&&!t),is(i,0);var n=i.nodes&&i.nodes.t;if(n!==null)for(const a of n)a.stop();mf(i),i.f^=es,i.f|=Sn;var r=i.parent;r!==null&&r.first!==null&&vf(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=i.b=null}function Yp(i,e){for(;i!==null;){var t=i===e?null:fs(i);i.remove(),i=t}}function vf(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function Er(i,e,t=!0){var n=[];i.f|=Xl,gf(i,n,!0);var r=()=>{t&&Bn(i),e&&e()},a=n.length;if(a>0){var l=()=>--a||r();for(var o of n)o.out(l)}else r()}function gf(i,e,t){if((i.f&Un)===0){i.f^=Un;var n=i.nodes&&i.nodes.t;if(n!==null)for(const o of n)(o.is_global||t)&&e.push(o);for(var r=i.first;r!==null;){var a=r.next;if((r.f&ur)===0){var l=(r.f&pa)!==0||(r.f&gi)!==0&&(i.f&fi)!==0;gf(r,e,l?t:!1)}r=a}}}function io(i){i.f&=~Xl,_f(i,!0)}function _f(i,e){if((i.f&Xl)===0&&(i.f&Un)!==0){i.f^=Un,(i.f&mn)===0&&(on(i,Kt),fr.ensure().schedule(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&pa)!==0||(t.f&gi)!==0;_f(t,r?e:!1),t=n}var a=i.nodes&&i.nodes.t;if(a!==null)for(const l of a)(l.is_global||e)&&l.in()}}function nc(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var r=t===n?null:fs(t);e.append(t),t=r}}let Ki=!1;function kc(i){Ki=i}let Nt=null,pi=!1;function si(i){Nt=i}let Ft=null;function Ri(i){Ft=i}let Ai=null;function xf(i){Nt!==null&&((Nt.f&eo)!==0||(Nt.f&Rn)!==0)&&(Ai??=new Set).add(i)}let Fn=null,Wn=0,$n=null;function Kp(i){$n=i}let bf=1,Sr=0,Tr=Sr;function Nc(i){Tr=i}function yf(){return++bf}function hs(i){var e=i.f;if((e&Kt)!==0)return!0;if((e&Xn)!==0){for(var t=i.deps,n=t.length,r=0;r<n;r++){var a=t[r];if(hs(a)&&ef(a),a.wv>i.wv)return!0}(e&mi)!==0&&hi===null&&on(i,mn)}return!1}function Sf(i,e,t=!0){var n=i.reactions;if(n!==null&&!(Ai!==null&&Ai.has(i)))for(var r=0;r<n.length;r++){var a=n[r];(a.f&Rn)!==0?Sf(a,e,!1):e===a&&(t?on(a,Kt):(a.f&mn)!==0&&on(a,Xn),Ql(a))}}function Mf(i){var e=Fn,t=Wn,n=$n,r=Nt,a=Ai,l=Mn,o=pi,c=Tr,d=i.f;Fn=null,Wn=0,$n=null,Nt=(d&(gi|ur))===0?i:null,Ai=null,ma(i.ctx),pi=!1,Tr=++Sr,i.ac!==null&&(Ra(()=>{i.ac.abort(us)}),i.ac=null);try{i.f|=eo;var u=i.fn,h=u();i.f|=Ta;var f=Oc(i);if(Ku()&&$n!==null&&!pi&&f!==null&&(i.f&(Rn|Xn|Kt))===0)for(var g=0;g<$n.length;g++)Sf($n[g],i);if(r!==null&&r!==i){if(Sr++,r.deps!==null)for(let y=0;y<t;y+=1)r.deps[y].rv=Sr;if(e!==null)for(const y of e)y.rv=Sr;$n!==null&&(n===null?n=$n:n.push(...$n))}return(i.f&or)!==0&&(i.f^=or),h}catch(y){return Oc(i),Hp(y)}finally{i.f^=eo,Fn=e,Wn=t,$n=n,Nt=r,Ai=a,ma(l),pi=o,Tr=c}}function Oc(i){var e=i.deps,t=Tt?.is_fork;if(Fn!==null){var n;if(t||is(i,Wn),e!==null&&Wn>0)for(e.length=Wn+Fn.length,n=0;n<Fn.length;n++)e[Wn+n]=Fn[n];else i.deps=e=Fn;if($l()&&(i.f&mi)!==0)for(n=Wn;n<e.length;n++)(e[n].reactions??=[]).push(i)}else!t&&e!==null&&Wn<e.length&&(is(i,Wn),e.length=Wn);return e}function Zp(i,e){let t=e.reactions;if(t!==null){var n=Gh.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}if(t===null&&(e.f&Rn)!==0&&(Fn===null||!$a.call(Fn,e))){var a=e;(a.f&mi)!==0&&(a.f^=mi),a.v!==pn&&Yl(a),a.ac!==null&&Ra(()=>{a.ac.abort(us),a.ac=null,on(a,Kt)}),Dp(a),is(a,0)}}function is(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)Zp(i,t[n])}function ga(i){var e=i.f;if((e&Sn)===0){on(i,mn);var t=Ft;Ft=i;try{(e&(fi|Gu))!==0?qp(i):tc(i),mf(i);var n=Mf(i);i.teardown=typeof n=="function"?n:null,i.wv=bf;var r;Nu&&wp&&(i.f&Kt)!==0&&i.deps}finally{Ft=t}}}async function Jp(){await Promise.resolve(),kp()}function s(i){var e=i.f,t=(e&Rn)!==0;if(Nt!==null&&!pi){var n=Ft!==null&&(Ft.f&Sn)!==0;if(!n&&(Ai===null||!Ai.has(i))){var r=Nt.deps;if((Nt.f&eo)!==0)i.rv<Sr&&(i.rv=Sr,Fn===null&&r!==null&&r[Wn]===i?Wn++:Fn===null?Fn=[i]:Fn.push(i));else{Nt.deps??=[],$a.call(Nt.deps,i)||Nt.deps.push(i);var a=i.reactions;a===null?i.reactions=[Nt]:$a.call(a,Nt)||a.push(Nt)}}}if(Ki&&Ti.has(i))return Ti.get(i);if(t){var l=i;if(Ki){var o=l.v;return((l.f&mn)===0&&l.reactions!==null||Ef(l))&&(o=Zl(l)),Ti.set(l,o),o}var c=(l.f&mi)===0&&!pi&&Nt!==null&&(Nt.f&mi)!==0,d=(l.f&Ta)===0;hs(l)&&(c&&(l.f|=mi),ef(l)),c&&!d&&(tf(l),wf(l))}if(hi?.has(i))return hi.get(i);if((i.f&or)!==0)throw i.v;return i.v}function wf(i){if(i.f|=mi,i.deps!==null)for(const t of i.deps){var e=t.reactions;e===null?t.reactions=[i]:$a.call(e,i)||e.push(i),(t.f&Rn)!==0&&(t.f&mi)===0&&(tf(t),wf(t))}}function Ef(i){if(i.v===pn)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(Ti.has(e)||(e.f&Rn)!==0&&Ef(e))return!0;return!1}function Dr(i){var e=pi;try{return pi=!0,i()}finally{pi=e}}const Qp=["touchstart","touchmove"];function $p(i){return Qp.includes(i)}const Va=Symbol("events"),Tf=new Set,El=new Set;function em(i,e,t,n={}){function r(a){if(n.capture||Tl.call(e,a),!a.cancelBubble)return Ra(()=>t?.call(this,a))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?(r.__removed=!1,wi(()=>{r.__removed||e.addEventListener(i,r,n)})):e.addEventListener(i,r,n),r}function kn(i,e,t,n,r){var a={capture:n,passive:r},l=em(i,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ec(()=>{l.__removed=!0,e.removeEventListener(i,l,a)})}function Y(i,e,t){(e[Va]??={})[i]=t}function rn(i){for(var e=0;e<i.length;e++)Tf.add(i[e]);for(var t of El)t(i)}let Io=null,Do=!1;function Tl(i){var e=this,t=e.ownerDocument,n=i.type,r=i.composedPath?.()||[],a=r[0]||i.target;Io=i,Do||(Do=!0,setTimeout(()=>{Do=!1,Io=null}));var l=0,o=Io===i&&i[Va];if(o){var c=r.indexOf(o);if(c!==-1&&(e===document||e===window)){i[Va]=e;return}var d=r.indexOf(e);if(d===-1)return;c<=d&&(l=c)}if(a=r[l]||i.target,a!==e){Ou(i,"currentTarget",{configurable:!0,get(){return a||t}});var u=Nt,h=Ft;si(null),Ri(null);try{for(var f,g=[];a!==null&&a!==e;){try{var y=a[Va]?.[n];y!=null&&(!a.disabled||i.target===a)&&y.call(a,i)}catch(S){f?g.push(S):f=S}if(i.cancelBubble)break;l++,a=l<r.length?r[l]:null}if(f){for(let S of g)queueMicrotask(()=>{throw S});throw f}}finally{i[Va]=e,delete i.currentTarget,si(u),Ri(h)}}}const tm=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function nm(i){return tm?.createHTML(i)??i}function im(i){var e=Gp("template");return e.innerHTML=nm(i.replaceAll("<!>","<!---->")),e.content}function ro(i,e){var t=Ft;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function O(i,e){var t=(e&sp)!==0,n=(e&op)!==0,r,a=!i.startsWith("<!>");return()=>{r===void 0&&(r=im(a?i:"<!>"+i),t||(r=ns(r)));var l=n||cf?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=ns(l),c=l.lastChild;ro(o,c)}else ro(l,l);return l}}function Hi(i=""){{var e=Xi(i+"");return ro(e,e),e}}function _a(){var i=document.createDocumentFragment(),e=document.createComment(""),t=Xi();return i.append(e,t),ro(e,t),i}function U(i,e){i!==null&&i.before(e)}function rm(i){let e=0,t=Lr(0),n;return()=>{$l()&&(s(t),mo(()=>(e===0&&(n=Dr(()=>i(()=>Za(t)))),e+=1,()=>{wi(()=>{e-=1,e===0&&(n?.(),n=void 0,Za(t))})})))}}var am=pa|Aa;function sm(i,e,t,n){new om(i,e,t,n)}class om{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#d=null;#m=rm(()=>(this.#d=Lr(this.#h),()=>{this.#d=null}));constructor(e,t,n,r){this.#t=e,this.#e=t,this.#s=a=>{var l=Ft;l.b=this,l.f|=xl,n(a)},this.parent=Ft.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=vo(()=>{this.#b()},am)}#x(){try{this.#i=ei(()=>this.#s(this.#t))}catch(e){this.error(e)}}#S(e){const t=this.#e.failed,{reset:n,invoke_onerror:r}=this.#_(e);wi(r),t&&(this.#r=ei(()=>{t(this.#t,()=>e,()=>n)}))}#_(e){var t=!1,n=!1;const r=()=>{if(!this.#u()){if(t){up();return}t=!0,n&&Mp(),this.#r!==null&&Er(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#u())try{n=!0,this.#e.onerror?.(e,r),n=!1}catch(l){Si(l,this.#n&&this.#n.parent)}}}}#u(){return(this.#n.f&(Sn|es))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=ei(()=>e(this.#t)),wi(()=>{if(!this.#u()){var t=this.#o=document.createDocumentFragment(),n=Xi(),r=!1;if(t.append(n),this.#i=this.#y(()=>{try{return ei(()=>this.#s(n))}catch(a){try{this.error(a),r=!0}catch(l){Si(l,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(Tt);return}this.#c===0&&(this.#t.before(t),this.#o=null,Er(this.#a,()=>{this.#a=null}),this.#f(Tt))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=ei(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();nc(this.#i,e);const t=this.#e.pending;this.#a=ei(()=>t(this.#t))}else this.#f(Tt)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){Ju(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=Ft,n=Nt,r=Mn;Ri(this.#n),si(this.#n),ma(this.#n.ctx);try{return fr.ensure(),e()}finally{Ri(t),si(n),ma(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&Er(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#h+=e,!(!this.#d||this.#p)&&(this.#p=!0,wi(()=>{this.#p=!1,this.#d&&va(this.#d,this.#h)}))}get_effect_pending(){return this.#m(),s(this.#d)}error(e){if(e===ju||!this.#e.onerror&&!this.#e.failed)throw e;Tt?.is_fork?(this.#i&&Tt.skip_effect(this.#i),this.#a&&Tt.skip_effect(this.#a),this.#r&&Tt.skip_effect(this.#r),Tt.oncommit(()=>{this.#u()||this.#w(e)})):this.#w(e)}#w(e){this.#i&&(Bn(this.#i),this.#i=null),this.#a&&(Bn(this.#a),this.#a=null),this.#r&&(Bn(this.#r),this.#r=null);let t=this.#e.failed;const n=r=>{if(this.#u())return;const{reset:a,invoke_onerror:l}=this.#_(r);l(),t&&!this.#u()&&(this.#r=this.#y(()=>{try{return ei(()=>{var o=Ft;o.b=this,o.f|=xl,t(this.#t,()=>r,()=>a)})}catch(o){return Si(o,this.#n.parent),null}}))};wi(()=>{if(!this.#u()){var r;try{r=this.transform_error(e)}catch(a){Si(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(n,a=>Si(a,this.#n&&this.#n.parent)):n(r)}})}}function Q(i,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(i[Sl]??=i.nodeValue)&&(i[Sl]=t,i.nodeValue=`${t}`)}function lm(i,e){return cm(i,e)}const gs=new Map;function cm(i,{target:e,anchor:t,props:n={},events:r,context:a,intro:l=!0,transformError:o}){Bp();var c=void 0,d=jp(()=>{var u=t??e.appendChild(Xi());sm(u,{pending:()=>{}},g=>{jt({});var y=Mn;a&&(y.c=a),r&&(n.$$events=r),c=i(g,n)||ql(),Xt()},o);var h=new Set,f=g=>{for(var y=0;y<g.length;y++){var S=g[y];if(!h.has(S)){h.add(S);var p=$p(S);for(const b of[e,document]){var m=gs.get(b);m===void 0&&(m=new Map,gs.set(b,m));var w=m.get(S);w===void 0?(b.addEventListener(S,Tl,{passive:p}),m.set(S,1)):m.set(S,w+1)}}}};return f(ho(Tf)),El.add(f),()=>{for(var g of h)for(const p of[e,document]){var y=gs.get(p),S=y.get(g);--S==0?(p.removeEventListener(g,Tl),y.delete(g),y.size===0&&gs.delete(p)):y.set(g,S)}El.delete(f),u!==t&&u.parentNode?.removeChild(u)}});return dm.set(c,d),c}let dm=new WeakMap;class Af{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),n=this.#l.get(t);if(n)io(n),this.#s.delete(t);else{var r=this.#e.get(t);r&&(io(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[a,l]of this.#t){if(this.#t.delete(a),a===e)break;const o=this.#e.get(l);o&&(Bn(o.effect),this.#e.delete(l))}for(const[a,l]of this.#l){if(a===t||this.#s.has(a))continue;const o=()=>{if(Array.from(this.#t.values()).includes(a)){var d=document.createDocumentFragment();nc(l,d),d.append(Xi()),this.#e.set(a,{effect:l,fragment:d})}else Bn(l);this.#s.delete(a),this.#l.delete(a)};this.#n||!n?(this.#s.add(a),Er(l,o,!1)):o()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[n,r]of this.#e)t.includes(n)||(Bn(r.effect),this.#e.delete(n))};ensure(e,t){var n=Tt,r=ff();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),l=Xi();a.append(l),this.#e.set(e,{effect:ei(()=>t(l)),fragment:a})}else this.#l.set(e,ei(()=>t(this.anchor)));if(this.#t.set(n,e),r){for(const[o,c]of this.#l)o===e?n.unskip_effect(c):n.skip_effect(c);for(const[o,c]of this.#e)o===e?n.unskip_effect(c.effect):n.skip_effect(c.effect);n.oncommit(this.#i),n.ondiscard(this.#a)}else this.#i(n)}}function Te(i,e,t=!1){var n=new Af(i),r=t?pa:0;function a(l,o){n.ensure(l,o)}vo(()=>{var l=!1;e((o,c=0)=>{l=!0,a(c,o)}),l||a(-1,null)},r)}const um=Symbol("NaN");function Rf(i,e,t){var n=new Af(i);vo(()=>{var r=e();r!==r&&(r=um),n.ensure(r,t)})}function ao(i,e){return e}function fm(i,e,t){for(var n=[],r=e.length,a,l=e.length,o=0;o<r;o++){let h=e[o];Er(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=i.outrogroups;Al(i,ho(a.done)),f.delete(a),f.size===0&&(i.outrogroups=null)}}else l-=1},!1)}if(l===0){var c=n.length===0&&t!==null&&i.pending.size===0;if(c){var d=t,u=d.parentNode;zp(u),u.append(d),i.items.clear()}Al(i,e,!c)}else a={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(a)}function Al(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const l of i.pending.values())for(const o of l)n.add(i.items.get(o).e)}for(var r=0;r<e.length;r++){var a=e[r];if(n?.has(a)){a.f|=Mi;const l=document.createDocumentFragment();nc(a,l)}else Bn(e[r],t)}}var Fc;function Et(i,e,t,n,r,a=null){var l=i,o=new Map,c=(e&Wu)!==0;if(c){var d=i;l=d.appendChild(Xi())}var u=null,h=$u(()=>{var w=t();return fo(w)?w:w==null?[]:ho(w)}),f=new Map,g=!0;function y(w){if((m.effect.f&Sn)===0){m.pending.delete(w);var b=s(h);m.fallback=u,hm(m,b,l,e,n),u!==null&&(b.length===0?(u.f&Mi)===0?io(u):(u.f^=Mi,Wa(u,null,l)):Er(u,()=>{u=null}))}}function S(w){m.pending.delete(w)}var p=vo(()=>{for(var w=s(h),b=w.length,E=new Set,A=Tt,I=ff(),C=0;C<b;C+=1){var j=w[C],x=n(j,C),M=g?null:o.get(x);M?(M.v&&va(M.v,j),M.i&&va(M.i,C),I&&A.unskip_effect(M.e)):(M=pm(o,g?l:Fc??=Xi(),j,x,C,r,e,t),g||(M.e.f|=Mi),o.set(x,M)),E.add(x)}if(b===0&&a&&!u&&(g?u=ei(()=>a(l)):(u=ei(()=>a(Fc??=Xi())),u.f|=Mi)),b>E.size&&pp(),!g)if(f.set(A,E),I){for(const[ie,H]of o)E.has(ie)||A.skip_effect(H.e);A.oncommit(y),A.ondiscard(S)}else y(A);s(h)}),m={effect:p,items:o,pending:f,outrogroups:null,fallback:u};g=!1}function Da(i){for(;i!==null&&(i.f&gi)===0;)i=i.next;return i}function hm(i,e,t,n,r){var a=(n&ep)!==0,l=e.length,o=i.items,c=Da(i.effect.first),d,u=null,h,f=[],g=[],y,S,p,m;if(a)for(m=0;m<l;m+=1)y=e[m],S=r(y,m),p=o.get(S).e,(p.f&Mi)===0&&(p.nodes?.a?.measure(),(h??=new Set).add(p));for(m=0;m<l;m+=1){if(y=e[m],S=r(y,m),p=o.get(S).e,i.outrogroups!==null)for(const M of i.outrogroups)M.pending.delete(p),M.done.delete(p);if((p.f&Un)!==0&&(io(p),a&&(p.nodes?.a?.unfix(),(h??=new Set).delete(p))),(p.f&Mi)!==0)if(p.f^=Mi,p===c)Wa(p,null,t);else{var w=u?u.next:c;p===i.effect.last&&(i.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),er(i,u,p),er(i,p,w),Wa(p,w,t),u=p,f=[],g=[],c=Da(u.next);continue}if(p!==c){if(d!==void 0&&d.has(p)){if(f.length<g.length){var b=g[0],E;u=b.prev;var A=f[0],I=f[f.length-1];for(E=0;E<f.length;E+=1)Wa(f[E],b,t);for(E=0;E<g.length;E+=1)d.delete(g[E]);er(i,A.prev,I.next),er(i,u,A),er(i,I,b),c=b,u=I,m-=1,f=[],g=[]}else d.delete(p),Wa(p,c,t),er(i,p.prev,p.next),er(i,p,u===null?i.effect.first:u.next),er(i,u,p),u=p;continue}for(f=[],g=[];c!==null&&c!==p;)(d??=new Set).add(c),g.push(c),c=Da(c.next);if(c===null)continue}(p.f&Mi)===0&&f.push(p),u=p,c=Da(p.next)}if(i.outrogroups!==null){for(const M of i.outrogroups)M.pending.size===0&&(Al(i,ho(M.done)),i.outrogroups?.delete(M));i.outrogroups.size===0&&(i.outrogroups=null)}if(c!==null||d!==void 0){var C=[];if(d!==void 0)for(p of d)(p.f&Un)===0&&C.push(p);for(;c!==null;)(c.f&Un)===0&&c!==i.fallback&&C.push(c),c=Da(c.next);var j=C.length;if(j>0){var x=(n&Wu)!==0&&l===0?t:null;if(a){for(m=0;m<j;m+=1)C[m].nodes?.a?.measure();for(m=0;m<j;m+=1)C[m].nodes?.a?.fix()}fm(i,C,x)}}a&&wi(()=>{if(h!==void 0)for(p of h)p.nodes?.a?.apply()})}function pm(i,e,t,n,r,a,l,o){var c=(l&Qh)!==0?(l&tp)===0?Op(t,!1,!1):Lr(t):null,d=(l&$h)!==0?Lr(r):null;return{v:c,i:d,e:ei(()=>(a(e,c??t,d??r,o),()=>{i.delete(n)}))}}function Wa(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,a=e&&(e.f&Mi)===0?e.nodes.start:t;n!==null;){var l=fs(n);if(a.before(n),n===r)return;n=l}}function er(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}function Cf(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(t=Cf(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function mm(){for(var i,e,t=0,n="",r=arguments.length;t<r;t++)(i=arguments[t])&&(e=Cf(i))&&(n&&(n+=" "),n+=e);return n}function vm(i){return typeof i=="object"?mm(i):i??""}const Bc=[...` 	
\r\f \v\uFEFF`];function gm(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var r of Object.keys(t))if(t[r])n=n?n+" "+r:r;else if(n.length)for(var a=r.length,l=0;(l=n.indexOf(r,l))>=0;){var o=l+a;(l===0||Bc.includes(n[l-1]))&&(o===n.length||Bc.includes(n[o]))?n=(l===0?"":n.substring(0,l))+n.substring(o+1):l=o}}return n===""?null:n}function _m(i,e){return i==null?null:String(i)}function _t(i,e,t,n,r,a){var l=i[bl];if(l!==t||l===void 0){var o=gm(t,n,a);o==null?i.removeAttribute("class"):i.className=o,i[bl]=t}else if(a&&r!==a)for(var c in a){var d=!!a[c];(r==null||d!==!!r[c])&&i.classList.toggle(c,d)}return a}function In(i,e,t,n){var r=i[yl];if(r!==e){var a=_m(e);a==null?i.removeAttribute("style"):i.style.cssText=a,i[yl]=e}return n}function xm(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function bm(i,e){var t=i.__defaultValue,n=i.multiple,r=n?t??[]:null;if(!(n&&!fo(r))){i.selectedIndex;for(var a of i.options){var l=ca(a);xm(a,n?r.includes(l):lf(l,t))}}}function Pf(i,e,t=!1){if(i.multiple){if(e==null)return;if(!fo(e))return dp();for(var n of i.options)n.selected=e.includes(ca(n));return}for(n of i.options){var r=ca(n);if(lf(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function xa(i){var e=new MutationObserver(t=>{t.every(ym)||("__defaultValue"in i&&bm(i),"__value"in i&&Pf(i,i.__value))});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ec(()=>{e.disconnect()})}function ba(i,e,t=e){var n=new WeakSet,r=!0;Kl(i,"change",a=>{var l=a?"[selected]":":checked",o;if(i.multiple)o=[].map.call(i.querySelectorAll(l),ca);else{var c=i.querySelector(l)??i.querySelector("option:not([disabled])");o=c&&ca(c)}t(o),i.__value=o,Tt!==null&&n.add(Tt)}),pf(()=>{var a=e();if(i===document.activeElement){var l=Tt;if(n.has(l))return}if(Pf(i,a,r),r&&a===void 0){var o=i.querySelector(":checked");o!==null&&(a=ca(o),t(a))}i.__value=a,r=!1})}function ca(i){return"__value"in i?i.__value:i.value}function ym(i){if(i.target.closest("selectedcontent")!==null)return!0;if(i.type==="childList"){var e=[...i.addedNodes,...i.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const Sm=Symbol("is custom element"),Mm=Symbol("is html"),wm=Jh?"progress":"PROGRESS";function rs(i,e){var t=ic(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==wm)||(i.value=e??"")}function Ja(i,e){var t=ic(i);t.checked!==(t.checked=e??void 0)&&(i.checked=e)}function je(i,e,t,n){var r=ic(i),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(i[Zh]=t),t==null?i.removeAttribute(e):typeof t!="string"&&Em(i).has(e)?i[e]=t:i.setAttribute(e,t))}function ic(i){return i[Vu]??={[Sm]:i.nodeName.includes("-"),[Mm]:i.namespaceURI===lp}}var zc=new Map;function Em(i){var e=i.getAttribute("is")||i.nodeName,t=zc.get(e);if(t)return t;zc.set(e,t=new Set);for(var n,r=i,a=Element.prototype;a!==r;){n=Hh(r);for(var l in n)n[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&t.add(l);r=Fu(r)}return t}function Ot(i,e,t=e){var n=new WeakSet;Kl(i,"input",async r=>{var a=r?i.defaultValue:i.value;if(a=Uo(i)?ko(a):a,t(a),Tt!==null&&n.add(Tt),await Jp(),a!==(a=e())){var l=i.selectionStart,o=i.selectionEnd,c=i.value.length;if(i.value=a??"",o!==null){var d=i.value.length;l===o&&o===c&&d>c?(i.selectionStart=d,i.selectionEnd=d):(i.selectionStart=l,i.selectionEnd=Math.min(o,d))}}}),Dr(e)==null&&i.value&&(t(Uo(i)?ko(i.value):i.value),Tt!==null&&n.add(Tt)),mo(()=>{var r=e();if(i===document.activeElement){var a=Tt;if(n.has(a))return}Uo(i)&&r===ko(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function Tm(i,e,t=e){Kl(i,"change",n=>{var r=n?i.defaultChecked:i.checked;t(r)}),Dr(e)==null&&t(i.checked),mo(()=>{var n=e();i.checked=!!n})}function Uo(i){var e=i.type;return e==="number"||e==="range"}function ko(i){return i===""?null:+i}function No(i,e){return i===e||i?.[wr]===e}function rc(i=ql(),e,t,n){var r=Mn.r,a=Ft;return pf(()=>{var l,o;return mo(()=>{l=o,o=[],Dr(()=>{No(t(...o),i)||(e(i,...o),l&&No(t(...l),i)&&e(null,...l))})}),()=>{let c=a;for(;c!==r&&c.parent!==null&&c.parent.f&es;)c=c.parent;const d=()=>{o&&No(t(...o),i)&&e(null,...o)},u=c.teardown;c.teardown=()=>{d(),u?.()}}}),i}let _s=!1;function Am(i){var e=_s;try{return _s=!1,[i(),_s]}finally{_s=e}}function at(i,e,t,n){var r=!0,a=(t&rp)!==0,l=(t&ap)!==0,o=n,c=!0,d=void 0,u=()=>l&&r?(d??=ts(n),s(d)):(c&&(c=!1,o=l?Dr(n):n),o);let h;if(a){var f=wr in i||Kh in i;h=sa(i,e)?.set??(f&&e in i?E=>i[e]=E:void 0)}var g,y=!1;a?[g,y]=Am(()=>i[e]):g=i[e],g===void 0&&n!==void 0&&(g=u(),h&&(xp(),h(g)));var S;if(S=()=>{var E=i[e];return E===void 0?u():(c=!0,E)},(t&ip)===0)return S;if(h){var p=i.$$legacy;return(function(E,A){return arguments.length>0?((!A||p||y)&&h(A?S():E),E):S()})}var m=!1,w=((t&np)!==0?ts:$u)(()=>(m=!1,S()));a&&s(w);var b=Ft;return(function(E,A){if(arguments.length>0){const I=A?s(w):a?Pt(E):E;return v(w,I),m=!0,o!==void 0&&(o=I),E}return Ki&&m||(b.f&Sn)!==0?w.v:s(w)})}function _i(i){Mn===null&&Yu(),nn(()=>{const e=Dr(i);if(typeof e=="function")return e})}function ac(i){Mn===null&&Yu(),_i(()=>()=>Dr(i))}const Rm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Rm);function Cm(i){const e=[];for(const t of String(i??"")){const n=t.codePointAt(0);if(!(n===65039||n===65038)){if(n===8205){e.push("200d");continue}e.push(n.toString(16))}}return e.join("-")}const Lf=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310","23f9","2b07","1f50d","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","1f980","2b50","1f9ed","1f5e1","1f52e","1f409","1f47e","2693","1f3b2","1f4a3","1f36a","1f331","1f9bb","1f4da","2696","1f3c6","1f451","1f9ea","1f52d","1f6e9"]),Pm=["1f980","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","2b50","1f9ed","1f310","1f409","1f47e","1f4a3","1f36a","1f331","1f9ea","1f52e","1f52d","2693","1f3b2","1f4da","2696","1f3c6","1f451","1f5e1","1f9f1","1f9e9"],If=["grass","dirt","stone","diamond","gold","iron","brick","planks","creeper","squarecreeper","enderman","skeleton","steve","herobrine","chicken","fox","bee","meat","enderpearl","netherstar","flame","tnt","gear","magitech","fabricmc","quiltmc","neoforged","modrinth","ftb_logo","prismlauncher"],Rl="/";function Lm(i){const e=Cm(i);return Lf.has(e)?`${Rl}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}function go(i){const e=String(i??"").trim();if(!e)return null;if(e.startsWith("twemoji:")){const t=e.slice(8);return Lf.has(t)?`${Rl}twemoji/${t}.svg`.replace(/\/{2,}/g,"/"):null}if(e.startsWith("prism:")){const t=e.slice(6);return If.includes(t)?`${Rl}instance-icons/prism/${t}.svg`.replace(/\/{2,}/g,"/"):null}return null}var Im=O('<img draggable="false"/>'),Dm=O("<span> </span>");function Ei(i,e){jt(e,!0);let t=at(e,"emoji",3,""),n=at(e,"size",3,null),r=at(e,"alt",3,""),a=at(e,"class",3,"");const l=pt(()=>Lm(t())),o=pt(()=>r()||t()),c=pt(()=>n()?`${n()}px`:"1em");var d=_a(),u=St(d);{var h=g=>{var y=Im();ce(()=>{je(y,"src",s(l)),je(y,"alt",s(o)),je(y,"title",r()||void 0),_t(y,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),In(y,`width: ${s(c)??""}; height: ${s(c)??""};`),je(y,"aria-hidden",r()?void 0:"true")}),U(g,y)},f=g=>{var y=Dm(),S=K(y,!0);ce(()=>{_t(y,1,`inline-block ${a()??""}`),je(y,"aria-hidden",r()?void 0:"true"),je(y,"title",r()||void 0),Q(S,t())}),U(g,y)};Te(u,g=>{s(l)?g(h):g(f,-1)})}U(i,d),Xt()}var Um=O('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Rename</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),km=O('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Nm(i,e){jt(e,!0);let t=at(e,"selected",3,!1),n=at(e,"gameRunning",3,!1),r=at(e,"menuOpen",3,!1);const a=pt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function l(){const j=go(e.instance.icon_key);if(j)return j;const x=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&x?x(e.instance.icon_path):"/logo.png"}var o=km(),c=R(o),d=R(c),u=K(d),h=_(d,2),f=R(h),g=K(f,!0),y=_(f,2),S=R(y),p=K(S,!0),m=_(S,2),w=K(m,!0),b=_(h,2),E=_(c,2),A=K(E,!0),I=_(E,2);{var C=j=>{var x=Um(),M=St(x),ie=_(M,2),H=R(ie),N=_(H,2),W=_(N,2),q=_(W,2),ve=R(q);Ei(ve,{emoji:"📂"});var ae=_(q,2),le=_(ae,4);ce(()=>H.disabled=n()),Y("click",M,function(...me){e.onclosemenu?.apply(this,me)}),Y("click",H,()=>{e.onclosemenu(),e.onplay()}),Y("click",N,()=>{e.onclosemenu(),e.onedit()}),Y("click",W,()=>{e.onclosemenu(),e.onrename?.()}),Y("click",q,()=>{e.onclosemenu(),e.onopenfolder()}),Y("click",ae,function(...me){e.onviewlogs?.apply(this,me)}),Y("click",le,()=>{e.onclosemenu(),e.ondelete()}),U(j,x)};Te(I,j=>{r()&&j(C)})}ce((j,x)=>{_t(o,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),je(o,"aria-selected",t()),je(o,"title",e.instance.name),je(u,"src",j),Q(g,e.instance.name),Q(p,e.instance.minecraft_version),_t(m,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${s(a)??""}`),Q(w,e.instance.loader_type),Q(A,x)},[()=>l(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),Y("click",o,function(...j){e.onselect?.apply(this,j)}),Y("dblclick",o,function(...j){e.onplay?.apply(this,j)}),Y("keydown",o,j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),e.onplay())}),Y("contextmenu",o,j=>{j.preventDefault(),e.onselect(),e.ontogglemenu()}),kn("error",u,j=>{j.currentTarget.dataset.f||(j.currentTarget.dataset.f="1",j.currentTarget.src="/logo.png")}),Y("click",b,j=>{j.stopPropagation(),e.ontogglemenu()}),U(i,o),Xt()}rn(["click","dblclick","keydown","contextmenu"]);var Om=O('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Fm=O('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Bm=O('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),zm=O('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function Gm(i,e){jt(e,!0);var t=zm();Et(t,21,()=>e.instances,n=>n.id,(n,r)=>{{let a=pt(()=>e.selectedId===s(r).id),l=pt(()=>e.menuFor===s(r).id);Nm(n,{get instance(){return s(r)},get selected(){return s(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return s(l)},onselect:()=>e.onselect?.(s(r).id),onplay:()=>e.onplay?.(s(r).id),ontogglemenu:()=>e.ontogglemenu?.(s(r).id),onedit:()=>e.onedit?.(s(r)),onrename:()=>e.onrename?.(s(r)),onopenfolder:()=>e.onopenfolder?.(s(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(s(r).id),get onclosemenu(){return e.onclosemenu}})}},n=>{var r=_a(),a=St(r);{var l=u=>{var h=Om(),f=K(h,!0);ce(()=>Q(f,e.error)),U(u,h)},o=u=>{var h=Fm(),f=K(h);ce(g=>Q(f,`No instances match "${g??""}".`),[()=>e.query.trim()]),U(u,h)},c=pt(()=>e.query.trim()),d=u=>{var h=Bm(),f=_(R(h),6);Y("click",f,()=>e.onadd?.()),U(u,h)};Te(a,u=>{e.error?u(l):s(c)?u(o,1):u(d,-1)})}U(n,r)}),U(i,t),Xt()}rn(["click"]);const as=[];function Ca(i){return as.push(i),i}function Pa(i){const e=as.lastIndexOf(i);e!==-1&&as.splice(e,1)}function Gc(){return as[as.length-1]??null}var Hm=O('<button type="button" role="tab"> </button>'),Vm=O('<button type="button"><img alt="" class="h-12 w-12 object-contain" draggable="false" loading="lazy"/> <span class="w-full truncate text-center text-[10px] text-(--text-muted)"> </span></button>'),Wm=O('<div class="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2"></div>'),jm=O('<button type="button"><img alt="" class="h-8 w-8" draggable="false" loading="lazy"/></button>'),Xm=O('<div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2"></div>'),qm=O('<div class="flex items-center gap-2 rounded border border-(--border) p-2"><img alt="" class="h-10 w-10 object-contain" draggable="false"/> <span class="truncate text-[11px] text-(--text-muted)"> </span></div>'),Ym=O('<p role="alert" class="text-[11px] text-red-400"> </p>'),Km=O(`<div class="flex flex-col items-start gap-3"><p class="text-[12px] text-(--text-muted)">Pick a PNG, JPG, SVG, WEBP or ICO from disk. The file is copied into the instance
            directory, so the instance stays self-contained.</p> <!> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-xs font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-50"> </button> <!></div>`),Zm=O('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Choose an instance icon"><div class="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-xl"><header class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h2 class="text-sm font-semibold">Instance icon</h2> <button type="button" class="rounded px-2 py-1 text-xs text-(--text-muted) hover:bg-(--bg-subtle)" aria-label="Close icon picker">Close</button></header> <div class="flex gap-1 border-b border-(--border) px-3 py-2" role="tablist" aria-label="Icon sources"></div> <div class="min-h-0 flex-1 overflow-y-auto p-4"><!></div></div></div>');function Df(i,e){jt(e,!0);let t=at(e,"currentKey",3,""),n=at(e,"currentPath",3,"");const r=[{id:"prism",label:"Prism / Freesm"},{id:"twemoji",label:"Twemoji"},{id:"custom",label:"Custom image…"}];let a=J("prism"),l=J(!1),o=J("");const c="/",d=x=>`${c}${x}`.replace(/\/{2,}/g,"/"),u=x=>d(`instance-icons/prism/${x}.svg`),h=x=>d(`twemoji/${x}.svg`),f=x=>x.replace(/_/g," ").replace(/\b\w/g,M=>M.toUpperCase()).replace(/^(Fabricmc|Quiltmc|Neoforged|Ftb)\b/,M=>({Fabricmc:"Fabric",Quiltmc:"Quilt",Neoforged:"NeoForge",Ftb:"FTB"})[M]??M);_i(()=>{const x=Ca(()=>e.onclose?.());return()=>Pa(x)});function g(x){e.onpick?.(x),e.onclose?.()}async function y(){if(!s(l)){v(l,!0),v(o,"");try{const x=await e.oncustom?.();if(x==null)return;e.onclose?.()}catch(x){v(o,String(x),!0)}finally{v(l,!1)}}}var S=Zm(),p=R(S),m=R(p),w=_(R(m),2),b=_(m,2);Et(b,21,()=>r,x=>x.id,(x,M)=>{var ie=Hm(),H=K(ie,!0);ce(()=>{je(ie,"aria-selected",s(a)===s(M).id),_t(ie,1,`rounded px-2.5 py-1 text-xs font-medium transition-colors ${s(a)===s(M).id?"bg-(--accent)/15 text-(--accent)":"text-(--text-muted) hover:bg-(--bg-subtle)"}`),Q(H,s(M).label)}),Y("click",ie,()=>v(a,s(M).id,!0)),U(x,ie)});var E=_(b,2),A=R(E);{var I=x=>{var M=Wm();Et(M,20,()=>If,ie=>ie,(ie,H)=>{var N=Vm(),W=R(N),q=_(W,2),ve=K(q,!0);ce((ae,le,me)=>{_t(N,1,`group flex flex-col items-center gap-1 rounded border p-2 transition-colors ${t()===`prism:${H}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),je(N,"title",ae),je(W,"src",le),Q(ve,me)},[()=>f(H),()=>u(H),()=>f(H)]),Y("click",N,()=>g(`prism:${H}`)),U(ie,N)}),U(x,M)},C=x=>{var M=Xm();Et(M,20,()=>Pm,ie=>ie,(ie,H)=>{var N=jm(),W=K(N);ce(q=>{_t(N,1,`flex items-center justify-center rounded border p-2 transition-colors ${t()===`twemoji:${H}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),je(N,"title",H),je(N,"aria-label",`Twemoji ${H}`),je(W,"src",q)},[()=>h(H)]),Y("click",N,()=>g(`twemoji:${H}`)),U(ie,N)}),U(x,M)},j=x=>{var M=Km(),ie=_(R(M),2);{var H=ae=>{var le=qm(),me=R(le),G=_(me,2),F=K(G,!0);ce(()=>{je(me,"src",n()),Q(F,n())}),U(ae,le)};Te(ie,ae=>{n()&&ae(H)})}var N=_(ie,2),W=K(N,!0),q=_(N,2);{var ve=ae=>{var le=Ym(),me=K(le,!0);ce(()=>Q(me,s(o))),U(ae,le)};Te(q,ae=>{s(o)&&ae(ve)})}ce(()=>{N.disabled=s(l),Q(W,s(l)?"Copying…":"Choose file…")}),Y("click",N,y),U(x,M)};Te(A,x=>{s(a)==="prism"?x(I):s(a)==="twemoji"?x(C,1):x(j,-1)})}Y("click",w,function(...x){e.onclose?.apply(this,x)}),U(i,S),Xt()}rn(["click"]);const ss="twilight_user_accent",sc="twilight_custom_themes",Hc="#06B6D4",Vc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],Wc="#0F172A",Jm="#FFFFFF",Qm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function xs(i){return Qm[i]??[]}function ps(i){let e=i.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function jc(i){const e=t=>{const n=parseInt(i.replace("#","").substring(t,t+2),16)/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function $m(i){const e=jc(i),t=1.05/(e+.05);return(e+.05)/(jc(Wc)+.05)>=t?Wc:Jm}function os(i,{persist:e=!0}={}){const t=ps(i);if(!t)return!1;const n=document.documentElement;return n.style.setProperty("--user-accent",t),n.style.setProperty("--on-accent",$m(t)),e&&localStorage.setItem(ss,t),!0}function ev(){localStorage.removeItem(ss);const i=document.documentElement;i.style.removeProperty("--user-accent"),i.style.removeProperty("--on-accent")}function Cl(){return ps(localStorage.getItem(ss)??"")}function tv(){const i=Cl();i&&os(i)}const _o=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:Vc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...Vc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:xs("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:xs("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:xs("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:xs("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],oc="twilight-dark",Pl={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},nv=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function iv(i){let e="";for(const t of i){const n=t.codePointAt(0);n>=65&&n<=90?e+=String.fromCharCode(n+32):n>=97&&n<=122||n>=48&&n<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function Uf(i){const e=i&&typeof i=="object"?i:{},t={};for(const[n,r]of Object.entries(Pl))t[n]=ps(e[n]??"")??r;return t}function rv(i){return typeof i=="string"&&i.startsWith("custom:")}function kf(i){return Mr().find(e=>e.id===i)??null}function Mr(){try{const i=JSON.parse(localStorage.getItem(sc)??"[]");return Array.isArray(i)?i.filter(e=>e&&typeof e=="object"&&rv(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:Uf(e.tokens)})):[]}catch{return[]}}function Xc({name:i,dark:e,tokens:t}){const n=String(i??"").trim()||"Custom theme",r={id:`custom:${iv(n)||"theme"}`,name:n,dark:!!e,tokens:Uf(t)},a=[...Mr().filter(l=>l.id!==r.id),r];return localStorage.setItem(sc,JSON.stringify(a)),r}function av(i){const e=Mr().filter(t=>t.id!==i);return localStorage.setItem(sc,JSON.stringify(e)),e}function qc(){try{const i=getComputedStyle(document.documentElement),e=(n,r)=>{const a=i.getPropertyValue(n).trim();return ps(a)??r},t={};for(const[n,r]of Object.entries(Pl)){const a=`--${n.replace(/(\d)$/,"-$1")}`;t[n]=e(a,r)}return t}catch{return{...Pl}}}const sv=new Set(_o.map(i=>i.id));function lc(i){const e=(i??"").trim();return e==="dark"?oc:e==="light"?"twilight-light":sv.has(e)||kf(e)?e:null}function ov(i){const e=i.tokens;return{id:i.id,label:i.name,dark:i.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:i.name,hex:e.accent1}],tokens:e}}function da(i){const e=lc(i);return e?_o.find(t=>t.id===e)??ov(kf(e)):null}function ja(i){return da(i)?.dark??!0}const lv=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Oo="";function cv(i){const e=da(i)??da(oc);if(!e||e.id===Oo)return e;const t=Oo==="";Oo=e.id;const n=document.documentElement;for(const r of lv)n.style.removeProperty(r);n.classList.toggle("dark",e.dark),n.classList.toggle("light",!e.dark);for(const r of _o)r.cls&&n.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;n.style.setProperty("--bg-1",r.bg1),n.style.setProperty("--bg-2",r.bg2),n.style.setProperty("--bg-3",r.bg3),n.style.setProperty("--border-1",r.border1),n.style.setProperty("--fg-1",r.fg1),n.style.setProperty("--fg-2",r.fg2),n.style.setProperty("--accent-1",r.accent1),n.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(ss),os(r.accent1,{persist:!1})}else t||(localStorage.removeItem(ss),os(e.accent,{persist:!1}));return e}const dv="/".replace(/\/{2,}/g,"/"),Nf=[{id:"fluent-auto",label:"Fluent (Auto)",hint:"Freesm Fluent · follows the theme"},{id:"fluent",label:"Fluent Light",hint:"Freesm Fluent · light ink"},{id:"fluent_dark",label:"Fluent Dark",hint:"Freesm Fluent · white ink"},{id:"breeze_dark",label:"Breeze Dark",hint:"Prism · KDE Breeze dark"},{id:"breeze_light",label:"Breeze Light",hint:"Prism · KDE Breeze light"},{id:"pe_colored",label:"Prism PE Colored",hint:"Prism · full-color PE"},{id:"twemoji",label:"Twemoji",hint:"Emoji glyphs · the classic look"}],Of=new Set(Nf.map(i=>i.id)),Ff="twilight-icon-pack",uv={instances:"viewfolder",folder:"viewfolder",server:"server",settings:"settings",accounts:"accounts",new:"new",launch:"launch",edit:"instance-settings",copy:"copy",export:"export",delete:"delete",shortcut:"shortcut",mods:"centralmods",refresh:"refresh",console:"log",tag:"tag",star:"star",help:"help",about:"about",screenshots:"screenshots",worlds:"worlds"},Yc={kill:"⏹",download:"⬇",search:"🔍",sun:"☀",moon:"🌙",package:"📦",modrinth:"🧩",success:"✅",warning:"⚠",error:"⛔",instances:"📁",folder:"📁",server:"🌐",settings:"⚙",accounts:"👤",new:"➕",launch:"▶",edit:"✏",copy:"⧉",export:"⤓",delete:"🗑",shortcut:"🔗",mods:"📦",refresh:"🔄",console:"📜",tag:"🏷",star:"★",help:"❔",about:"ℹ",screenshots:"🖼",worlds:"🌐"};let Xa=null;function so(){if(Xa)return Xa;const i=localStorage.getItem(Ff);return Xa=Of.has(i??"")?i:"fluent-auto",Xa}function fv(i){Of.has(i)&&(Xa=i,localStorage.setItem(Ff,i),Bf())}let Ll="";function hv(i){const e=lc(i)??String(i??"");e!==Ll&&(Ll=e,Bf())}function pv(i=so()){return i!=="fluent-auto"?i:ja(Ll||"twilight-dark")?"fluent_dark":"fluent"}const Il=new Set;function Bf(){for(const i of Il)i()}function mv(i){return Il.add(i),()=>Il.delete(i)}function vv(i,e=null){const t=e??so(),n=i;if(t==="twemoji"){const l=Yc[i];return l?{kind:"emoji",emoji:l,label:n}:null}const r=uv[i];if(r)return{kind:"svg",src:`${dv}icons/${pv(t)}/${r}.svg`,label:n};const a=Yc[i];return a?{kind:"emoji",emoji:a,label:n}:null}var gv=O('<img draggable="false"/>'),_v=O("<span></span>");function Wt(i,e){jt(e,!0);let t=at(e,"name",3,""),n=at(e,"pack",3,null),r=at(e,"size",3,null),a=at(e,"alt",3,""),l=at(e,"class",3,""),o=J(0);const c=mv(()=>v(o,s(o)+1));ac(c);const d=pt(()=>(s(o),vv(t(),n()))),u=pt(()=>r()?`${r()}px`:"1em"),h=pt(()=>a()||t());let f=J(!1);nn(()=>{s(d)?.kind,v(f,!1)});var g=_a(),y=St(g);{var S=w=>{var b=_a(),E=St(b);Rf(E,()=>s(d).src,A=>{var I=gv();ce(()=>{je(I,"src",s(d).src),je(I,"alt",s(h)),je(I,"title",a()||void 0),_t(I,1,`shrink-0 select-none ${l()??""}`),In(I,`width:${s(u)??""};height:${s(u)??""};object-fit:contain`),je(I,"aria-hidden",a()?void 0:"true")}),kn("error",I,()=>v(f,!0)),U(A,I)}),U(w,b)},p=w=>{{let b=pt(()=>a()||void 0);Ei(w,{get emoji(){return s(d).emoji},get size(){return r()},get alt(){return s(b)},get class(){return l()}})}},m=w=>{var b=_v();ce(()=>{_t(b,1,`inline-block shrink-0 ${l()??""}`),In(b,`width:${s(u)??""};height:${s(u)??""}`)}),U(w,b)};Te(y,w=>{s(d)?.kind==="svg"&&!s(f)?w(S):s(d)?.kind==="emoji"?w(p,1):w(m,-1)})}U(i,g),Xt()}const ai=Pt({dialog:null,toasts:[]});function zf(i){return new Promise(e=>{ai.dialog={...i,resolve:e}})}function bs(i){const e=ai.dialog;ai.dialog=null,e?.resolve?.(i)}function xv(i={}){return zf({variant:"confirm",...i})}function bv(i={}){return zf({variant:"prompt",...i})}let yv=0;function Jt(i,e="info",{title:t="",duration:n=4500}={}){const r=++yv;return ai.toasts.push({id:r,message:i,kind:e,title:t,duration:n}),ai.toasts.length>6&&ai.toasts.shift(),r}function Kc(i){const e=ai.toasts.findIndex(t=>t.id===i);e!==-1&&ai.toasts.splice(e,1)}var Sv=O('<div class="p-6 text-center text-(--step-body) text-(--fg-2)">Resolving mods and their dependencies…</div>'),Mv=O('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div></div>'),wv=O('<tr><td class="px-3 py-2 align-top"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent-1)"/></td><td> </td><td class="px-3 py-2 align-top text-(--fg-2)"> </td><td class="px-3 py-2 align-top font-mono text-[11px] text-(--fg-2)"> </td><td> </td><td class="px-3 py-2 text-right align-top text-(--fg-2)"> </td></tr>'),Ev=O('<tr><td colspan="6" class="px-3 py-6 text-center text-(--fg-2)">The queue is empty.</td></tr>'),Tv=O('<table class="w-full text-left text-(--step-body)"><thead class="sticky top-0 z-10 bg-(--bg-3)"><tr class="border-b border-(--border-1) text-(--step-caption) uppercase tracking-wide text-(--fg-2)"><th class="w-[36px] px-3 py-2 font-medium"></th><th class="px-3 py-2 font-medium">Mod</th><th class="w-[130px] px-3 py-2 font-medium">Version</th><th class="w-[220px] px-3 py-2 font-medium">File</th><th class="w-[190px] px-3 py-2 font-medium">Source</th><th class="w-[80px] px-3 py-2 text-right font-medium">Size</th></tr></thead><tbody></tbody></table>'),Av=O('<span class="text-rose-400"> </span>'),Rv=O(`<div role="presentation" class="fixed inset-0 z-[60] flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[560px] w-[880px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Confirm download</h3> <p class="text-(--step-meta) text-(--fg-2)">You're about to download the following mods — only rows with a check will be downloaded.</p></div> <button class="text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="min-w-0 truncate text-(--step-meta) text-(--fg-2)"><!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Back</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Downloads every checked file (SHA-1 verified) into this instance's mods folder"> </button></div></div></div></div>`);function Cv(i,e){jt(e,!0);let t=at(e,"items",19,()=>[]);const n=["fabric","quilt","forge","neoforge"],r=pt(()=>{const G=e.instance.loader_type.toLowerCase();return n.includes(G)?G:""});let a=J(null),l=J(!0),o=J(""),c=J(Pt({})),d=J(!1),u=J("");function h(G){return G>=1024*1024?`${(G/1024/1024).toFixed(1)} MB`:G>=1024?`${(G/1024).toFixed(1)} KB`:`${G} B`}function f(G){return G.required_by.length?`required by ${G.required_by.join(", ")}`:G.installed?"already installed":"your selection"}function g(){return s(a)?.filter(G=>s(c)[G.project_id]).length??0}function y(G){v(c,{...s(c),[G.project_id]:!s(c)[G.project_id]},!0)}function S(G,F){const ne=window.__TAURI__?.core;return ne?ne.invoke(G,F):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function p(){if(!s(a)||s(d))return;const G=s(a).filter(F=>s(c)[F.project_id]).map(F=>({url:F.url,filename:F.filename,sha1:F.sha1}));if(G.length){v(d,!0),v(u,"");try{const F=await S("install_modrinth_batch",{instanceId:e.instance.id,files:G});Jt(`Downloaded ${F.length} mod file${F.length===1?"":"s"}.`,"success"),e.ondownloaded?.(F)}catch(F){v(u,String(F),!0),Jt(`Download failed: ${F}`,"error")}finally{v(d,!1)}}}_i(()=>{const G=Ca(()=>s(d)?void 0:e.onclose?.());return S("preview_mod_download_queue",{instanceId:e.instance.id,projects:t(),gameVersion:e.instance.minecraft_version,loader:s(r)}).then(F=>{v(a,F,!0),v(c,Object.fromEntries(F.map(ne=>[ne.project_id,!ne.installed])),!0),v(l,!1)}).catch(F=>{v(o,String(F),!0),v(l,!1)}),()=>Pa(G)});var m=Rv(),w=R(m),b=R(w),E=_(R(b),2),A=_(b,2),I=R(A);{var C=G=>{var F=Sv();U(G,F)},j=G=>{var F=Mv(),ne=R(F),Ee=K(ne,!0);ce(()=>Q(Ee,s(o))),U(G,F)},x=G=>{var F=Tv(),ne=_(R(F));Et(ne,21,()=>s(a),Ee=>Ee.project_id,(Ee,we)=>{var Ce=wv(),Oe=R(Ce),We=R(Oe),ze=_(Oe),Me=K(ze,!0),Be=_(ze),Fe=K(Be,!0),z=_(Be),it=K(z,!0),ke=_(z),ge=K(ke,!0),Le=_(ke),Ge=K(Le,!0);ce((He,Ye)=>{_t(Ce,1,`border-b border-(--border-1)/50 ${s(we).installed?"bg-(--bg-3)/60":s(we).required_by.length?"bg-(--brand-tint)/40":""}`),Ja(We,s(c)[s(we).project_id]??!1),_t(ze,1,`px-3 py-2 align-top font-medium ${s(we).installed?"opacity-60":"text-(--fg-1)"}`),Q(Me,s(we).title),Q(Fe,s(we).version),je(z,"title",s(we).filename),Q(it,s(we).filename),_t(ke,1,`px-3 py-2 align-top text-[11px] ${s(we).required_by.length?"text-(--accent-1)":"text-(--fg-2)"}`),Q(ge,He),Q(Ge,Ye)},[()=>f(s(we)),()=>h(s(we).size)]),Y("change",We,()=>y(s(we))),U(Ee,Ce)},Ee=>{var we=Ev();U(Ee,we)}),U(G,F)};Te(I,G=>{s(l)?G(C):s(o)?G(j,1):s(a)&&G(x,2)})}var M=_(A,2),ie=R(M),H=R(ie);{var N=G=>{var F=Av(),ne=K(F,!0);ce(()=>Q(ne,s(u))),U(G,F)},W=G=>{var F=Hi();ce((ne,Ee)=>Q(F,`Downloading ${ne??""} file${Ee??""}…`),[()=>g(),()=>g()===1?"":"s"]),U(G,F)},q=G=>{var F=Hi();ce(ne=>Q(F,`${ne??""} of ${s(a).length??""} rows will download`),[()=>g()]),U(G,F)};Te(H,G=>{s(u)?G(N):s(d)?G(W,1):s(a)&&G(q,2)})}var ve=_(ie,2),ae=R(ve),le=_(ae,2),me=K(le,!0);ce(G=>{E.disabled=s(d),je(ie,"title",s(u)),ae.disabled=s(d),le.disabled=G,Q(me,s(d)?"Downloading…":"Confirm & Download")},[()=>s(d)||!s(a)||g()===0]),Y("click",m,G=>{G.target===G.currentTarget&&!s(d)&&e.onclose?.()}),Y("click",E,()=>e.onclose?.()),Y("click",ae,()=>e.onclose?.()),Y("click",le,p),U(i,m),Xt()}rn(["click","change"]);var Pv=O('<label class="flex cursor-pointer items-center gap-2 text-(--step-body) capitalize"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent-1)"/> <span> </span></label>'),Zc=O("<option> </option>"),Lv=O('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div>'),Jc=O('<div class="p-6 text-center text-(--step-body) text-(--fg-2)"> </div>'),Iv=O('<span class="shrink-0 rounded bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-green-500">installed</span>'),Dv=O('<span class="shrink-0 rounded bg-(--accent-1)/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-1)">queued</span>'),Uv=O('<button><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <span class="min-w-0 flex-1"><span class="flex items-center gap-2"><span class="truncate text-(--step-card) font-medium text-(--fg-1)"> </span> <!> <!></span> <span class="block truncate text-(--step-meta) text-(--fg-2)"> </span> <span class="block truncate text-[10px] text-(--fg-2)"> </span></span></button>'),kv=O('<div class="flex flex-col gap-1.5"></div>'),Nv=O('<div class="flex h-full flex-col items-center justify-center p-6 text-center text-(--step-body) text-(--fg-2)"><!> <p class="mt-3">Select a mod to inspect it.</p></div>'),Ov=O('<div class="mt-1 flex h-8 items-center rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) text-(--fg-2)">Loading versions…</div>'),Fv=O('<select id="mods-version" class="mt-1 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"><option> </option><!></select>'),Bv=O('<div class="mt-1 h-8 rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) leading-8 text-(--fg-2)">Latest compatible</div>'),zv=O('<p class="mt-2 text-[11px] text-rose-400"> </p>'),Gv=O('<div class="mt-2 text-(--step-meta) whitespace-pre-wrap break-words text-(--fg-2)"> </div>'),Hv=O('<div class="flex items-start gap-3 border-b border-(--border-1) p-3"><img alt="" draggable="false" class="h-12 w-12 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="truncate text-(--step-card) font-semibold text-(--fg-1)"> </div> <div class="truncate text-[10px] text-(--fg-2)"> </div> <div class="text-[10px] text-(--fg-2)"> </div></div></div> <div class="border-b border-(--border-1) p-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-version">Version</label> <!></div> <div class="min-h-0 flex-1 p-3"><div class="text-(--step-body) text-(--fg-2)"> </div> <!> <!></div>',1),Vv=O('<span class="ml-1 text-[10px]"> </span>'),Wv=O('<div role="presentation" class="fixed inset-0 z-50 flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[720px] w-[1180px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Browse &amp; Download Mods</h3> <p class="truncate text-(--step-meta) text-(--fg-2)"> <!></p></div> <button class="text-(--fg-2) hover:text-(--fg-1)">✕</button></div> <div class="flex min-h-0 flex-1"><aside class="flex w-[200px] shrink-0 flex-col gap-4 overflow-y-auto border-r border-(--border-1) p-3"><section><h4 class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)">Categories</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border-1) pt-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-sort">Sort</label> <select id="mods-sort" class="mt-1.5 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"></select></section></aside> <section class="flex min-w-0 flex-1 flex-col"><div class="border-b border-(--border-1) p-3"><input class="h-9 w-full rounded border border-(--border-1) bg-(--bg-3) px-3 text-(--step-card) text-(--fg-1) outline-none placeholder:text-(--fg-2) focus:border-(--accent-1)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></section> <aside class="flex w-[330px] shrink-0 flex-col overflow-y-auto border-l border-(--border-1)"><!></aside></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="text-(--step-body) text-(--fg-2)"> <!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Clear</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Stages every queued mod plus its required dependencies for confirmation"><!> Review and Confirm…</button></div></div></div></div> <!>',1);function jv(i,e){jt(e,!0);const t=["fabric","quilt","forge","neoforge","legacy-fabric"],n=pt(()=>{const B=e.instance.loader_type.toLowerCase();return B==="legacy fabric"||B==="legacyfabric"?"legacy-fabric":B==="cleanroom"?"forge":t.includes(B)?B:""}),r=["optimization","utility","library","worldgen","accessibility","technology","adventure","decoration","mobs","equipment","food","storage","transportation","game-mechanics"],a=[{id:"relevance",label:"Relevance"},{id:"downloads",label:"Most downloaded"},{id:"updated",label:"Recently updated"},{id:"newest",label:"Newest"}];let l=J(""),o=J("relevance"),c=J(Pt(new Set)),d=J(null),u=J(!1),h=J(""),f=0,g=J(Pt([]));function y(B){const ee=B.title.toLowerCase().replace(/[^a-z0-9]+/g,"-");return s(g).some(be=>be.includes(ee))}let S=J(null),p=J(null),m=J(!1),w=J(""),b=0,E=J(""),A=J(Pt([])),I=J(!1);function C(B){const ee=new Set(s(c));ee.has(B)?ee.delete(B):ee.add(B),v(c,ee,!0)}function j(B){return B>=1e6?`${(B/1e6).toFixed(1)}M`:B>=1e3?`${(B/1e3).toFixed(0)}K`:String(B)}function x(B){return B.icon_url||"/logo.png"}function M(B,ee){const be=window.__TAURI__?.core;return be?be.invoke(B,ee):Promise.reject(new Error("Tauri backend unavailable in this preview."))}nn(()=>{const B=s(l).trim(),ee=[...s(c)],be=s(o),Ie=++f,k=setTimeout(()=>{v(u,!0),v(h,""),M("search_modrinth_mods",{query:B,gameVersion:e.instance.minecraft_version,loader:s(n),categories:ee,index:be}).then(Re=>{Ie===f&&(v(d,Re,!0),v(u,!1))}).catch(Re=>{Ie===f&&(v(h,String(Re),!0),v(u,!1))})},350);return()=>clearTimeout(k)});async function ie(B){if(s(S)?.project_id===B.project_id)return;v(S,B,!0),v(p,null),v(w,""),v(E,"");const ee=++b;v(m,!0);try{const be=await M("get_modrinth_project_details",{projectId:B.project_id,gameVersion:e.instance.minecraft_version,loader:s(n)});ee===b&&v(p,be,!0)}catch(be){ee===b&&v(w,String(be),!0)}finally{ee===b&&v(m,!1)}}function H(B){return s(A).some(ee=>ee.project_id===B)}function N(){s(A).length&&v(I,!0)}_i(()=>{const B=Ca(()=>e.onclose?.());return M("list_instance_mods",{instanceId:e.instance.id}).then(ee=>v(g,ee.map(be=>be.filename.toLowerCase()),!0)).catch(()=>{}),()=>Pa(B)});var W=Wv(),q=St(W),ve=R(q),ae=R(ve),le=R(ae),me=_(R(le),2),G=R(me),F=_(G);{var ne=B=>{var ee=Hi();ce(be=>Q(ee,`· ${be??""}`),[()=>s(n)[0].toUpperCase()+s(n).slice(1)]),U(B,ee)};Te(F,B=>{s(n)&&B(ne)})}var Ee=_(le,2),we=_(ae,2),Ce=R(we),Oe=R(Ce),We=_(R(Oe),2);Et(We,20,()=>r,B=>B,(B,ee)=>{var be=Pv(),Ie=R(be),k=_(Ie,2),Re=K(k,!0);ce((re,Ae)=>{Ja(Ie,re),Q(Re,Ae)},[()=>s(c).has(ee),()=>ee.replace("-"," ")]),Y("change",Ie,()=>C(ee)),U(B,be)});var ze=_(Oe,2),Me=_(R(ze),2);Et(Me,21,()=>a,B=>B.id,(B,ee)=>{var be=Zc(),Ie=K(be,!0),k={};ce(()=>{Q(Ie,s(ee).label),k!==(k=s(ee).id)&&(be.value=(be.__value=k)??"")}),U(B,be)}),xa(Me);var Be=_(Ce,2),Fe=R(Be),z=R(Fe),it=_(Fe,2),ke=R(it);{var ge=B=>{var ee=Lv(),be=K(ee,!0);ce(()=>Q(be,s(h))),U(B,ee)};Te(ke,B=>{s(h)&&B(ge)})}var Le=_(ke,2);{var Ge=B=>{var ee=Jc(),be=K(ee,!0);ce(()=>Q(be,s(u)?"Searching Modrinth…":"Type to search.")),U(B,ee)},He=B=>{var ee=Jc(),be=K(ee);ce(Ie=>Q(be,`No mods for MC ${e.instance.minecraft_version??""}${s(n)?` + ${s(n)}`:""} match
              “${Ie??""}”.`),[()=>s(l).trim()]),U(B,ee)},Ye=B=>{var ee=kv();Et(ee,21,()=>s(d),be=>be.project_id,(be,Ie)=>{var k=Uv(),Re=R(k),re=_(Re,2),Ae=R(re),Pe=R(Ae),tt=K(Pe,!0),Je=_(Pe,2);{var Ze=Rt=>{var Gt=Iv();U(Rt,Gt)},lt=pt(()=>y(s(Ie)));Te(Je,Rt=>{s(lt)&&Rt(Ze)})}var ft=_(Je,2);{var ct=Rt=>{var Gt=Dv();U(Rt,Gt)},mt=pt(()=>H(s(Ie).project_id));Te(ft,Rt=>{s(mt)&&Rt(ct)})}var nt=_(Ae,2),yt=K(nt,!0),Ut=_(nt,2),It=K(Ut);ce((Rt,Gt)=>{_t(k,1,`flex items-center gap-3 rounded border px-3 py-2 text-left ${s(S)?.project_id===s(Ie).project_id?"border-(--accent-1) bg-(--brand-tint)":"border-(--border-1) bg-(--bg-3) hover:border-(--accent-1)/60"}`),je(Re,"src",Rt),je(Pe,"title",s(Ie).title),Q(tt,s(Ie).title),je(nt,"title",s(Ie).description),Q(yt,s(Ie).description),Q(It,`by ${(s(Ie).author||"unknown")??""} · ${Gt??""} downloads`)},[()=>x(s(Ie)),()=>j(s(Ie).downloads)]),Y("click",k,()=>ie(s(Ie))),kn("error",Re,Rt=>{Rt.currentTarget.dataset.f||(Rt.currentTarget.dataset.f="1",Rt.currentTarget.src="/logo.png")}),U(be,k)}),U(B,ee)};Te(Le,B=>{s(d)?s(d).length===0&&!s(u)?B(He,1):B(Ye,-1):B(Ge)})}var Qe=_(Be,2),Mt=R(Qe);{var dt=B=>{var ee=Nv(),be=R(ee);Wt(be,{name:"modrinth",size:28}),U(B,ee)},D=B=>{var ee=Hv(),be=St(ee),Ie=R(be),k=_(Ie,2),Re=R(k),re=K(Re,!0),Ae=_(Re,2),Pe=K(Ae),tt=_(Ae,2),Je=K(tt),Ze=_(be,2),lt=_(R(Ze),2);{var ft=ht=>{var Xe=Ov();U(ht,Xe)},ct=ht=>{var Xe=Fv(),gt=R(Xe),P=K(gt);gt.value=gt.__value="";var se=_(gt);Et(se,17,()=>s(p).versions,_e=>_e.id,(_e,oe)=>{var xe=Zc(),Ve=K(xe),Ne={};ce(()=>{Q(Ve,`${s(oe).version??""}${s(oe).version_type&&s(oe).version_type!=="release"?` (${s(oe).version_type})`:""}`),Ne!==(Ne=s(oe).id)&&(xe.value=(xe.__value=Ne)??"")}),U(_e,xe)}),xa(Xe),ce(()=>Q(P,`Latest (${s(p).versions[0]?.version??""})`)),ba(Xe,()=>s(E),_e=>v(E,_e)),U(ht,Xe)},mt=ht=>{var Xe=Bv();U(ht,Xe)};Te(lt,ht=>{s(m)?ht(ft):s(p)?.versions?.length?ht(ct,1):ht(mt,-1)})}var nt=_(Ze,2),yt=R(nt),Ut=K(yt,!0),It=_(yt,2);{var Rt=ht=>{var Xe=zv(),gt=K(Xe,!0);ce(()=>Q(gt,s(w))),U(ht,Xe)};Te(It,ht=>{s(w)&&ht(Rt)})}var Gt=_(It,2);{var en=ht=>{var Xe=Gv(),gt=K(Xe,!0);ce(()=>Q(gt,s(p).body)),U(ht,Xe)};Te(Gt,ht=>{s(p)?.body&&ht(en)})}ce((ht,Xe)=>{je(Ie,"src",ht),je(Re,"title",s(S).title),Q(re,s(S).title),Q(Pe,`by ${(s(S).author||"unknown")??""}`),Q(Je,`${Xe??""} downloads`),Q(Ut,s(S).description)},[()=>x(s(S)),()=>j(s(S).downloads)]),kn("error",Ie,ht=>{ht.currentTarget.dataset.f||(ht.currentTarget.dataset.f="1",ht.currentTarget.src="/logo.png")}),U(B,ee)};Te(Mt,B=>{s(S)?B(D,-1):B(dt)})}var T=_(we,2),Z=R(T),Se=R(Z),X=_(Se);{var fe=B=>{var ee=Vv(),be=K(ee);ce(Ie=>Q(be,`(${Ie??""})`),[()=>s(A).map(Ie=>Ie.title).join(", ")]),U(B,ee)};Te(X,B=>{s(A).length&&B(fe)})}var de=_(Z,2),pe=R(de),$=_(pe,2),L=R($);Wt(L,{name:"download",size:13});var V=_(q,2);{var he=B=>{Cv(B,{get instance(){return e.instance},get items(){return s(A)},onclose:()=>v(I,!1),ondownloaded:ee=>{v(I,!1),v(A,[],!0),e.oninstalled?.(ee)}})};Te(V,B=>{s(I)&&B(he)})}ce(()=>{Q(G,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `),Q(Se,`${s(A).length===0?"No mods selected":`${s(A).length} mod${s(A).length===1?"":"s"} selected`} `),pe.disabled=!s(A).length,$.disabled=!s(A).length}),Y("click",q,B=>{B.target===B.currentTarget&&e.onclose?.()}),Y("click",Ee,()=>e.onclose?.()),ba(Me,()=>s(o),B=>v(o,B)),Ot(z,()=>s(l),B=>v(l,B)),Y("click",pe,()=>v(A,[],!0)),Y("click",$,N),U(i,W),Xt()}rn(["click","change"]);var Xv=O('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),qv=O('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Yv=O('<div class="mt-4 rounded border border-amber-500/30 bg-amber-500/10 p-3" role="status" aria-live="polite"><p class="text-[12px] text-amber-400"><strong> </strong> </p> <button class="mt-2 rounded border border-amber-500/40 px-3 py-1.5 text-[12px] font-medium text-amber-400 hover:bg-amber-500/20 disabled:opacity-40"> </button></div>'),Kv=O('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),Qc=O('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),Fo=O('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Zv=O(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <!> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),Jv=O('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),Qv=O('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),$v=O('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),eg=O('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),tg=O('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),ng=O('<p class="mt-2 text-[11px] text-(--fg-2)"> </p>'),ig=O('<button type="button" class="rounded px-2.5 py-1.5 text-[11px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)">Reset</button>'),rg=O('<p role="alert" class="mt-2 text-[11px] text-red-400"> </p>'),ag=O(`<div role="alert" class="mt-4 rounded border border-red-500/40 bg-red-500/10 p-3 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
              it works — it is prone to crashes and only a limited subset of Forge mods support it.</p></div>`),sg=O('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance name</div> <p class="mt-1 text-[11px] text-(--text-muted)">The display name across the grid and context panel; the folder id stays put.</p> <div class="mt-3 flex items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-2) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)" aria-label="Instance name"/> <button type="button" class="rounded bg-(--accent-1) px-3 py-1.5 font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40">Rename</button></div> <!> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance icon</div> <p class="mt-1 text-[11px] text-(--text-muted)">Pick a bundled launcher icon, a Twemoji, or a custom image.</p> <div class="mt-3 flex items-center gap-3"><span class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded border border-(--border) bg-(--accent)/10"><img alt="" draggable="false" class="h-full w-full object-cover"/></span> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-[12px] font-medium text-(--accent) hover:bg-(--accent)/25">Change icon…</button> <!></div> <!></div> <!> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, loader switching and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p>',1),og=O('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!> <!></div>');function lg(i,e){jt(e,!0);let t=at(e,"instance",7),n=at(e,"storage",3,null),r=at(e,"blindMode",3,!1),a=at(e,"deafMode",3,!1);const l=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let o=J("mods"),c=J(Pt([])),d=J(!1),u=J(""),h=J(""),f=J(!1),g=J(!1),y=J(Pt(t().icon_key??"")),S=J(""),p=J(Pt(t().name)),m=J("");async function w(){const X=s(p).trim();if(!(!X||X===t().name)){v(m,"");try{const fe=await window.__TAURI__.core.invoke("rename_instance",{instanceId:t().id,newName:X});t().name=fe.name,v(p,fe.name,!0),v(m,`Renamed to ${fe.name}.`)}catch(fe){v(m,String(fe),!0)}}}function b(){const X=go(s(y));return X||(t().icon_path?ie(t().icon_path):"/logo.png")}async function E(X){v(S,"");try{await window.__TAURI__.core.invoke("set_instance_icon_key",{instanceId:t().id,iconKey:X}),v(y,X,!0),t().icon_key=X,t().icon_path=null}catch(fe){v(S,String(fe),!0)}}async function A(){const X=window.__TAURI__?.dialog?.open;if(!X)throw new Error("Image picker unavailable in this build.");const fe=await X({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});if(!fe)return null;const de=await window.__TAURI__.core.invoke("set_instance_icon",{instanceId:t().id,imagePath:String(fe)});return v(y,""),t().icon_key=null,t().icon_path=de,de}let I=J(Pt([])),C=J(Pt([])),j=J(!1),x=J("");function M(...X){return[n()?n().instances_dir.replace(/\\/g,"/"):"",t().id,"minecraft",...X].filter(Boolean).join("/")}function ie(X){const fe=window.__TAURI__?.core?.convertFileSrc;return fe?fe(X):X}function H(X){return X>=1024*1024?`${(X/1024/1024).toFixed(1)} MB`:X>=1024?`${(X/1024).toFixed(1)} KB`:`${X} B`}function N(X){return X?new Date(X*1e3).toLocaleString():""}function W(){const X=s(h).trim().toLowerCase();return X?s(c).filter(fe=>fe.display_name.toLowerCase().includes(X)||fe.filename.toLowerCase().includes(X)):s(c)}async function q(){v(d,!0);try{v(c,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:t().id}),!0),v(u,"")}catch(X){v(u,String(X),!0)}finally{v(d,!1)}}const ve={"minecraft-access":"Minecraft Access",echosight:"EchoSight"},ae=pt(()=>[...r()&&!s(c).some(X=>X.filename.toLowerCase().includes("minecraft-access"))?["minecraft-access"]:[],...a()&&!s(c).some(X=>X.filename.toLowerCase().includes("echosight"))?["echosight"]:[]]);let le=J(!1);async function me(){v(le,!0);try{for(const X of s(ae))await window.__TAURI__.core.invoke("install_mod_with_deps",{instanceId:t().id,projectId:X,gameVersion:t().minecraft_version,loader:t().loader_type.toLowerCase()});v(u,"Accessibility mods installed.")}catch(X){v(u,String(X),!0)}finally{v(le,!1)}await q()}async function G(X){v(d,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:t().id,filename:X.filename,enable:!X.is_enabled}),s(u)&&v(u,"")}catch(fe){v(u,String(fe),!0)}finally{v(d,!1)}await q()}async function F(X){v(d,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:t().id,filename:X.filename}),v(u,"")}catch(fe){v(u,String(fe),!0)}finally{v(d,!1)}await q()}async function ne(){const X=window.__TAURI__?.dialog?.open;if(!X){v(u,"File picker unavailable in this build.");return}let fe;try{fe=await X({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(pe){v(u,String(pe),!0);return}const de=fe?[].concat(fe):[];if(de.length){v(d,!0);try{for(const pe of de)await window.__TAURI__.core.invoke("import_mod",{instanceId:t().id,jarPath:pe});v(u,"")}catch(pe){v(u,String(pe),!0)}finally{v(d,!1)}await q()}}async function Ee(X){v(j,!0);try{const fe=await window.__TAURI__.core.invoke(X,{instanceId:t().id});v(X==="list_screenshots"?I:C,fe,!0),v(x,"")}catch(fe){v(x,String(fe),!0)}finally{v(j,!1)}}function we(X){window.__TAURI__.core.invoke("open_path",{path:X}).catch(fe=>v(x,String(fe),!0))}function Ce(X){we(M("screenshots",X))}_i(()=>{q(),Ee("list_screenshots"),Ee("list_logs")});var Oe=og(),We=R(Oe),ze=R(We),Me=_(ze,2),Be=R(Me),Fe=K(Be,!0),z=_(Be,2),it=K(z),ke=_(Me,2);Et(ke,21,()=>l,X=>X.id,(X,fe)=>{var de=Xv(),pe=R(de),$=R(pe);Ei($,{get emoji(){return s(fe).icon},size:15});var L=_(pe,2),V=K(L,!0);ce(()=>{_t(de,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${s(o)===s(fe).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(de,"aria-current",s(o)===s(fe).id?"true":void 0),Q(V,s(fe).label)}),Y("click",de,()=>v(o,s(fe).id,!0)),U(X,de)});var ge=_(We,2),Le=R(ge),Ge=R(Le);{var He=X=>{var fe=qv(),de=_(St(fe),4),pe=R(de),$=K(pe),L=_(pe,2),V=K(L),he=_(L,2),B=K(he);ce(ee=>{Q($,`Minecraft ${t().minecraft_version??""}`),Q(V,`Loader: ${t().loader_type??""}`),Q(B,`Last played: ${ee??""}`)},[()=>t().last_played?new Date(t().last_played*1e3).toLocaleString():"never"]),U(X,fe)},Ye=X=>{var fe=Zv(),de=_(St(fe),4);{var pe=Je=>{var Ze=Yv(),lt=R(Ze),ft=R(lt),ct=K(ft,!0),mt=_(ft),nt=_(lt,2),yt=K(nt,!0);ce(Ut=>{Q(ct,Ut),Q(mt,` ${s(ae).length>1?"are":"is"} not installed yet — recommended for your
              accessibility profile. Required dependencies (e.g. Fabric API) install automatically.`),nt.disabled=s(d)||s(le),Q(yt,s(le)?"Installing…":"Install Recommended Accessibility Mods")},[()=>s(ae).map(Ut=>ve[Ut]??Ut).join(" and ")]),Y("click",nt,me),U(Je,Ze)};Te(de,Je=>{(r()||a())&&(t().loader_type==="Fabric"||t().loader_type==="Quilt")&&s(ae).length&&Je(pe)})}var $=_(de,2),L=R($),V=K(L),he=_(L,2),B=_($,2),ee=_(B,2),be=_(ee,2),Ie=R(be);Et(Ie,21,W,Je=>Je.filename,(Je,Ze)=>{var lt=Kv(),ft=R(lt),ct=R(ft);let mt;var nt=K(ct,!0),yt=_(ct,2),Ut=K(yt),It=_(ft),Rt=K(It),Gt=_(It),en=K(Gt);ce(ht=>{mt=_t(ct,1,"truncate",null,mt,{"opacity-50":!s(Ze).is_enabled}),Q(nt,s(Ze).display_name),Q(Ut,`${s(Ze).filename??""} · ${ht??""}`),_t(Rt,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${s(Ze).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),je(Rt,"title",s(Ze).is_enabled?"Disable":"Enable"),Rt.disabled=s(d),je(en,"title",`Delete ${s(Ze).display_name??""}`),en.disabled=s(d)},[()=>H(s(Ze).file_size)]),Y("click",Rt,()=>G(s(Ze))),Y("click",en,()=>F(s(Ze))),U(Je,lt)},Je=>{var Ze=Qc(),lt=R(Ze),ft=R(lt);{var ct=nt=>{var yt=Hi("Loading mods…");U(nt,yt)},mt=nt=>{var yt=Hi("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");U(nt,yt)};Te(ft,nt=>{s(d)?nt(ct):nt(mt,-1)})}U(Je,Ze)});var k=_(be,2);{var Re=Je=>{var Ze=Fo(),lt=K(Ze,!0);ce(()=>Q(lt,s(u))),U(Je,Ze)};Te(k,Je=>{s(u)&&Je(Re)})}var re=_(k,2),Ae=R(re),Pe=_(Ae,2),tt=R(Pe);Ei(tt,{emoji:"📂"}),ce(()=>{Q(V,`Installed (${s(c).length??""})`),he.disabled=s(d),Ae.disabled=s(d),Pe.disabled=!n(),je(Pe,"title",n()?"Opens the instance mods folder":"Storage unknown")}),Y("click",he,q),Ot(B,()=>s(h),Je=>v(h,Je)),Y("click",ee,()=>v(f,!0)),Y("click",Ae,ne),Y("click",Pe,()=>we(M("mods"))),U(X,fe)},Qe=X=>{var fe=$v(),de=_(St(fe),4);Et(de,21,()=>s(I),he=>he.name,(he,B)=>{var ee=Jv(),be=R(ee),Ie=_(be,2),k=K(Ie,!0);ce((Re,re,Ae)=>{je(ee,"title",`${s(B).name??""} · ${Re??""} · ${re??""}`),je(be,"src",Ae),je(be,"alt",s(B).name),je(Ie,"title",s(B).name),Q(k,s(B).name)},[()=>H(s(B).size),()=>N(s(B).modified),()=>ie(M("screenshots",s(B).name))]),Y("click",ee,()=>Ce(s(B).name)),Y("keydown",ee,Re=>{(Re.key==="Enter"||Re.key===" ")&&(Re.preventDefault(),Ce(s(B).name))}),U(he,ee)},he=>{var B=Qv(),ee=R(B);{var be=k=>{var Re=Hi("Loading screenshots…");U(k,Re)},Ie=k=>{var Re=Hi("No screenshots yet — press F2 in game to capture one.");U(k,Re)};Te(ee,k=>{s(j)?k(be):k(Ie,-1)})}U(he,B)});var pe=_(de,2);{var $=he=>{var B=Fo(),ee=K(B,!0);ce(()=>Q(ee,s(x))),U(he,B)};Te(pe,he=>{s(x)&&he($)})}var L=_(pe,2),V=R(L);Ei(V,{emoji:"📂"}),Y("click",L,()=>we(M("screenshots"))),U(X,fe)},Mt=X=>{var fe=tg(),de=_(St(fe),4),pe=R(de);Et(pe,21,()=>s(C),be=>be.name,(be,Ie)=>{var k=eg(),Re=R(k),re=R(Re),Ae=K(re,!0),Pe=_(re,2),tt=K(Pe),Je=_(Re),Ze=K(Je);ce((lt,ft)=>{je(re,"title",s(Ie).name),Q(Ae,s(Ie).name),Q(tt,`${lt??""} · ${ft??""}`)},[()=>H(s(Ie).size),()=>N(s(Ie).modified)]),Y("click",Ze,()=>we(M("logs",s(Ie).name))),U(be,k)},be=>{var Ie=Qc(),k=R(Ie),Re=R(k);{var re=Pe=>{var tt=Hi("Loading logs…");U(Pe,tt)},Ae=Pe=>{var tt=Hi("No log files yet — logs appear after the first launch.");U(Pe,tt)};Te(Re,Pe=>{s(j)?Pe(re):Pe(Ae,-1)})}U(be,Ie)});var $=_(de,2);{var L=be=>{var Ie=Fo(),k=K(Ie,!0);ce(()=>Q(k,s(x))),U(be,Ie)};Te($,be=>{s(x)&&be(L)})}var V=_($,2),he=R(V),B=_(he,2),ee=R(B);Ei(ee,{emoji:"📂"}),Y("click",he,()=>e.onopenconsole?.()),Y("click",B,()=>we(M("logs"))),U(X,fe)},dt=X=>{var fe=sg(),de=_(St(fe),4),pe=_(R(de),4),$=R(pe),L=_($,2),V=_(pe,2);{var he=nt=>{var yt=ng(),Ut=K(yt,!0);ce(()=>Q(Ut,s(m))),U(nt,yt)};Te(V,nt=>{s(m)&&nt(he)})}var B=_(V,2),ee=R(B),be=K(ee),Ie=_(ee,2),k=K(Ie),Re=_(de,2),re=_(R(Re),4),Ae=R(re),Pe=K(Ae),tt=_(Ae,2),Je=_(tt,2);{var Ze=nt=>{var yt=ig();Y("click",yt,()=>E("")),U(nt,yt)};Te(Je,nt=>{s(y)&&nt(Ze)})}var lt=_(re,2);{var ft=nt=>{var yt=rg(),Ut=K(yt,!0);ce(()=>Q(Ut,s(S))),U(nt,yt)};Te(lt,nt=>{s(S)&&nt(ft)})}var ct=_(Re,2);{var mt=nt=>{var yt=ag();U(nt,yt)};Te(ct,nt=>{t().loader_type==="Cleanroom"&&nt(mt)})}ce((nt,yt,Ut,It,Rt)=>{L.disabled=nt,je(B,"title",yt),Q(be,`Game folder: ${Ut??""}`),Q(k,`Mods folder: ${It??""}`),je(Pe,"src",Rt)},[()=>!s(p).trim()||s(p).trim()===t().name,()=>M(),()=>M(),()=>M("mods"),()=>b()]),Y("keydown",$,nt=>{nt.key==="Enter"&&w()}),Ot($,()=>s(p),nt=>v(p,nt)),Y("click",L,w),Y("click",tt,()=>v(g,!0)),U(X,fe)};Te(Ge,X=>{s(o)==="components"?X(He):s(o)==="mods"?X(Ye,1):s(o)==="screenshots"?X(Qe,2):s(o)==="logs"?X(Mt,3):X(dt,-1)})}var D=_(ge,2);{var T=X=>{{let fe=pt(()=>s(y)?"":b());Df(X,{get currentKey(){return s(y)},get currentPath(){return s(fe)},onpick:de=>{E(de),v(g,!1)},oncustom:A,onclose:()=>v(g,!1)})}};Te(D,X=>{s(g)&&X(T)})}var Z=_(D,2);{var Se=X=>{jv(X,{get instance(){return t()},onclose:()=>v(f,!1),oninstalled:()=>q()})};Te(Z,X=>{s(f)&&X(Se)})}ce(()=>{je(Be,"title",t().name),Q(Fe,t().name),Q(it,`${t().minecraft_version??""} · ${t().loader_type??""}`)}),Y("click",ze,function(...X){e.onback?.apply(this,X)}),U(i,Oe),Xt()}rn(["click","keydown"]);var cg=O('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),dg=O('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),ug=O('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),fg=O('<p class="mt-3 text-[12px] text-red-400"> </p>'),hg=O(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),pg=O('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function mg(i,e){jt(e,!0);let t=J(null),n=J(""),r=J(""),a=J(!1),l=J("");function o(w){return w>=1024*1024?`${(w/1024/1024).toFixed(1)} MB`:w>=1024?`${(w/1024).toFixed(0)} KB`:`${w} B`}function c(){return!s(t)||!s(t).loader?"Vanilla":s(t).loader[0].toUpperCase()+s(t).loader.slice(1)+(s(t).loader_version?` ${s(t).loader_version}`:" (latest stable)")}_i(async()=>{const w=Ca(()=>e.onclose?.());try{v(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),v(r,s(t).name,!0)}catch(b){v(n,String(b),!0)}return()=>Pa(w)});async function d(){if(!s(a)){v(a,!0),v(l,"");try{const w=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:s(r).trim()});e.oninstalled?.(w)}catch(w){v(l,String(w),!0)}finally{v(a,!1)}}}var u=pg(),h=R(u),f=R(h),g=_(R(f),2),y=_(f,2);{var S=w=>{var b=cg(),E=R(b),A=K(E,!0),I=_(E,2),C=K(I,!0);ce(()=>{Q(A,s(n)),je(I,"title",e.path),Q(C,e.path)}),U(w,b)},p=w=>{var b=dg();U(w,b)},m=w=>{var b=hg(),E=St(b),A=R(E),I=R(A),C=K(I,!0),j=_(I,2);{var x=Oe=>{var We=ug(),ze=K(We,!0);ce(()=>Q(ze,s(t).summary)),U(Oe,We)};Te(j,Oe=>{s(t).summary&&Oe(x)})}var M=_(j,2),ie=R(M),H=K(ie),N=_(ie,2),W=K(N,!0),q=_(N,2),ve=K(q),ae=_(q,2),le=K(ae,!0),me=_(A,4),G=_(me,2);{var F=Oe=>{var We=fg(),ze=K(We,!0);ce(()=>Q(ze,s(l))),U(Oe,We)};Te(G,Oe=>{s(l)&&Oe(F)})}var ne=_(E,2),Ee=R(ne),we=_(Ee,2),Ce=K(we,!0);ce((Oe,We,ze)=>{je(I,"title",s(t).name),Q(C,s(t).name),Q(H,`MC ${(s(t).game_version||"?")??""}`),Q(W,Oe),je(q,"title",`${s(t).download_count??""} downloaded, ${s(t).override_count??""} overrides extracted`),Q(ve,`${s(t).file_count??""} files`),Q(le,We),we.disabled=ze,Q(Ce,s(a)?"Installing…":"Install Modpack")},[()=>c(),()=>o(s(t).archive_size),()=>s(a)||!s(r).trim()]),Ot(me,()=>s(r),Oe=>v(r,Oe)),Y("click",Ee,()=>e.onclose?.()),Y("click",we,d),U(w,b)};Te(y,w=>{s(n)?w(S):s(t)?w(m,-1):w(p,1)})}Y("click",u,w=>{w.target===w.currentTarget&&e.onclose?.()}),Y("click",g,()=>e.onclose?.()),U(i,u),Xt()}rn(["click"]);var vg=O('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),gg=O('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),$c=O("<option> </option>"),_g=O('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),xg=O('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),bg=O('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),yg=O('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),Sg=O('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),Mg=O('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),wg=O('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Eg=O('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Tg=O('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),Ag=O('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),Rg=O('<p class="mt-1.5 font-medium">Cleanroom only runs Minecraft 1.12.2 — select that version to continue.</p>'),Cg=O(`<div role="alert" class="mt-2 rounded border border-red-500/40 bg-red-500/10 p-2.5 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
                it works — it is prone to crashes and only a limited subset of Forge mods support it.</p> <!></div>`),Pg=O('<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400"> <strong>Fabric</strong>.</div>'),Lg=O(`<p role="status" class="mt-2 rounded border border-amber-500/20 bg-amber-500/5 p-2 text-[11px] text-amber-400"> <strong>Legacy Fabric</strong> is
              the recommended loader for it.</p>`),Ig=O(`<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400">Blind Mode Notice: Vanilla Minecraft's built-in Narrator lacks 3D world navigation and
              block inspection. We strongly recommend selecting <strong>Fabric</strong> or <strong>Quilt</strong> with Minecraft Access.</div>`),Dg=O('<label class="flex cursor-pointer items-start gap-2 text-[12px]"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent)"/> <span><span> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span></label>'),Ug=O('<section class="mt-3 border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Accessibility mods</h4> <p class="mt-0.5 text-[10px] text-(--text-muted)"> </p> <div class="mt-1.5 flex flex-col gap-1.5"></div></section>'),kg=O('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),Ng=O('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Og=O('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),Fg=O('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),Bg=O('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),zg=O('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),Gg=O('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!> <!> <!> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div> <!>',1);function Hg(i,e){jt(e,!0);let t=at(e,"groups",19,()=>[]),n=at(e,"blindMode",3,!1),r=at(e,"deafMode",3,!1);const a=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],l=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"cleanroom",label:"Cleanroom"},{id:"fabric",label:"Fabric"},{id:"legacyfabric",label:"Legacy Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],o=["","fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],c=["fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],d="1.13.2";function u(ye,De){const $e=ot=>String(ot??"").split(".").map(zt=>parseInt(zt,10)||0),bt=$e(ye),st=$e(De);for(let ot=0;ot<Math.max(bt.length,st.length);ot+=1){const zt=bt[ot]??0,At=st[ot]??0;if(zt!==At)return zt<At}return!0}const h=pt(()=>!!s(b)&&u(s(b),d)),f=pt(()=>s(x)==="cleanroom"&&s(b)!=="1.12.2"),g="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let y=J(null),S=J(!0),p=J(""),m=J(""),w=J(Pt(new Set(["release"]))),b=J(""),E=J(""),A=J(""),I=J(""),C=J(""),j=J(!1),x=J(""),M=J(""),ie=J(Pt([])),H=J("idle"),N=0,W=J(!1),q=J("");const ve=[{id:"minecraft-access",label:"Minecraft Access",hint:"Core: screen reader & 3D spatial navigation"},{id:"sound-physics-remastered",label:"Sound Physics Remastered",hint:"Optional: spatial acoustics & directional echoes"}],ae=[{id:"echosight",label:"EchoSight",hint:"Directional sound radar & priority subtitles"},{id:"subtitles-visualizer",label:"Subtitles Visualizer",hint:"In-world directional subtitle markers"},{id:"visible-sound",label:"Visible Sound",hint:"In-world block/entity sound highlights"},{id:"soundsight",label:"SoundSight",hint:"Visual threat ring & enhanced subtitles"}];let le=J(Pt(new Set(["minecraft-access"])));const me=pt(()=>[...n()?ve:[],...r()?ae:[]]);nn(()=>{v(le,new Set(n()&&(s(x)==="fabric"||s(x)==="quilt")?["minecraft-access"]:[]),!0)});function G(ye){const De=new Set(s(le));De.has(ye)?De.delete(ye):De.add(ye),v(le,De,!0)}function F(ye,De){const $e=window.__TAURI__?.core;return $e?$e.invoke(ye,De):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const ne=pt(()=>{const ye=s(y)?.versions??[],De=s(m).trim().toLowerCase();return ye.filter($e=>s(w).has($e.version_type)&&(!De||$e.id.toLowerCase().includes(De)))}),Ee=pt(()=>!o.includes(s(x))),we=pt(()=>c.includes(s(x))),Ce=pt(()=>!!s(b)&&!s(Ee)&&!s(f)&&!s(W)&&!(s(we)&&s(H)==="loading"));function Oe(ye){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[ye]??ye}function We(ye){if(!ye)return"—";const De=new Date(ye);if(Number.isNaN(De.getTime()))return String(ye).slice(0,10);const $e=bt=>String(bt).padStart(2,"0");return`${$e(De.getDate())}/${$e(De.getMonth()+1)}/${De.getFullYear()}`}function ze(ye){const De=new Set(s(w));De.has(ye)?De.delete(ye):De.add(ye),v(w,De,!0)}function Me(){const ye=go(s(C));if(ye)return ye;const De=window.__TAURI__?.core?.convertFileSrc;return s(I)&&De?De(s(I)):null}async function Be(){const ye=window.__TAURI__?.dialog?.open;if(!ye){v(q,"Image picker unavailable in this build.");return}try{const De=await ye({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});return De&&(v(C,""),v(I,String(De),!0),v(q,"")),De?String(De):null}catch(De){return v(q,String(De),!0),null}}async function Fe(){if(!s(we)||!s(b))return;const ye=++N;v(H,"loading");try{const De=await F("fetch_loader_versions",{loader:s(x),gameVersion:s(b)});if(ye!==N)return;v(ie,De,!0),v(M,De.find($e=>$e.stable)?.version??De[0]?.version??"",!0),v(H,De.length?"idle":"error",!0)}catch{if(ye!==N)return;v(ie,[],!0),v(M,""),v(H,"error")}}async function z(ye){v(b,ye,!0),!s(x)&&u(ye,d)&&v(x,"legacyfabric"),s(we)&&await Fe()}async function it(ye){v(x,ye,!0),v(M,""),v(ie,[],!0),v(H,"idle"),s(we)&&await Fe()}async function ke(){v(S,!0),v(p,"");try{v(y,await F("fetch_vanilla_versions"),!0)}catch(ye){v(p,String(ye),!0)}finally{v(S,!1)}}async function ge(){if(!s(Ce))return;v(W,!0),v(q,"");const ye=s(b),De=s(E).trim()||ye;try{const $e=await F("create_instance",{name:De,version:ye,loader:s(x)||null,loaderVersion:s(M).trim()||null});let bt="";if(s(C))try{await F("set_instance_icon_key",{instanceId:$e.id,iconKey:s(C)})}catch(st){bt=`Instance created, but the icon could not be applied: ${st}`}else if(s(I))try{await F("set_instance_icon",{instanceId:$e.id,imagePath:s(I)})}catch(st){bt=`Instance created, but the icon could not be applied: ${st}`}if(s(A).trim())try{await F("set_instance_group",{instanceId:$e.id,group:s(A).trim()})}catch(st){bt=bt?`${bt} The group could not be set: ${st}`:`Instance created, but the group could not be set: ${st}`}for(const st of s(le))try{await F("install_mod_with_deps",{instanceId:$e.id,projectId:st,gameVersion:ye,loader:s(x)})}catch(ot){bt=bt?`${bt} ${st} could not be installed: ${ot}`:`Instance created, but ${st} could not be installed: ${ot}`}e.oncreated?.($e,bt)}catch($e){v(q,String($e),!0)}finally{v(W,!1)}}function Le(){window.__TAURI__?.core?.invoke("open_path",{path:g}).catch(ye=>v(q,String(ye),!0))}_i(()=>{const ye=Ca(()=>e.onclose?.());return ke(),()=>Pa(ye)});var Ge=Gg(),He=St(Ge),Ye=R(He),Qe=R(Ye),Mt=R(Qe),dt=R(Mt);{var D=ye=>{var De=vg(),$e=St(De);ce(bt=>je($e,"src",bt),[()=>Me()]),U(ye,De)},T=pt(()=>Me()),Z=ye=>{var De=gg();U(ye,De)};Te(dt,ye=>{s(T)?ye(D):ye(Z,-1)})}var Se=_(Mt,2),X=R(Se),fe=_(X,2),de=_(R(fe),2),pe=R(de);pe.value=pe.__value="";var $=_(pe);Et($,16,t,ye=>ye,(ye,De)=>{var $e=$c(),bt=K($e,!0),st={};ce(()=>{Q(bt,De),st!==(st=De)&&($e.value=($e.__value=st)??"")}),U(ye,$e)}),xa(de);var L=_(Se,2),V=_(Qe,2),he=R(V),B=R(he),ee=R(B);{var be=ye=>{var De=_g();U(ye,De)},Ie=ye=>{var De=xg(),$e=R(De),bt=K($e,!0),st=_($e,2);ce(()=>Q(bt,s(p))),Y("click",st,ke),U(ye,De)},k=ye=>{var De=Mg(),$e=_(R(De));Et($e,21,()=>s(ne),bt=>bt.id,(bt,st)=>{var ot=yg(),zt=R(ot),At=R(zt),an=K(At,!0),qn=_(At,2);{var _n=qt=>{var Li=bg();U(qt,Li)};Te(qn,qt=>{s(st).is_latest_release&&qt(_n)})}var Cn=_(zt),Ht=K(Cn,!0),xn=_(Cn),Nn=K(xn,!0);ce((qt,Li)=>{_t(ot,1,`cursor-pointer border-b border-(--border)/50 ${s(b)===s(st).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),Q(an,s(st).id),Q(Ht,qt),Q(Nn,Li)},[()=>We(s(st).release_time),()=>Oe(s(st).version_type)]),Y("click",ot,()=>z(s(st).id)),Y("keydown",ot,qt=>{(qt.key==="Enter"||qt.key===" ")&&(qt.preventDefault(),z(s(st).id))}),U(bt,ot)},bt=>{var st=Sg();U(bt,st)}),U(ye,De)};Te(ee,ye=>{s(S)?ye(be):s(p)?ye(Ie,1):ye(k,-1)})}var Re=_(B,2),re=R(Re),Ae=_(re,2),Pe=K(Ae),tt=_(he,2),Je=R(tt),Ze=_(R(Je),2);Et(Ze,21,()=>a,ye=>ye.id,(ye,De)=>{var $e=wg(),bt=R($e),st=_(bt,2),ot=K(st,!0);ce(zt=>{Ja(bt,zt),Q(ot,s(De).label)},[()=>s(w).has(s(De).id)]),Y("change",bt,()=>ze(s(De).id)),U(ye,$e)});var lt=_(Je,2),ft=_(R(lt),2);Et(ft,21,()=>l,ye=>ye.id,(ye,De)=>{var $e=Eg(),bt=R($e),st=_(bt,2),ot=K(st,!0);ce(()=>{rs(bt,s(De).id),Ja(bt,s(x)===s(De).id),Q(ot,s(De).label)}),Y("change",bt,()=>it(s(De).id)),U(ye,$e)});var ct=_(ft,2);{var mt=ye=>{var De=Tg();U(ye,De)},nt=ye=>{var De=Ag();U(ye,De)};Te(ct,ye=>{s(Ee)?ye(mt):s(x)||ye(nt,1)})}var yt=_(ct,2);{var Ut=ye=>{var De=Cg(),$e=_(R(De),4);{var bt=st=>{var ot=Rg();U(st,ot)};Te($e,st=>{s(f)&&st(bt)})}U(ye,De)};Te(yt,ye=>{s(x)==="cleanroom"&&ye(Ut)})}var It=_(yt,2);{var Rt=ye=>{var De=Pg(),$e=R(De);$e.nodeValue=`Legacy Fabric targets Minecraft 1.13.2 and older; newer versions should use
              regular `,U(ye,De)},Gt=ye=>{var De=Lg(),$e=R(De);ce(()=>Q($e,`Minecraft ${s(b)??""} predates modern Fabric — `)),U(ye,De)};Te(It,ye=>{s(x)==="legacyfabric"&&!s(h)?ye(Rt):s(x)===""&&s(h)&&ye(Gt,1)})}var en=_(It,2);{var ht=ye=>{var De=Ig();U(ye,De)};Te(en,ye=>{n()&&(s(x)===""||s(x)==="horizon")&&ye(ht)})}var Xe=_(en,2);{var gt=ye=>{var De=Ug(),$e=_(R(De),2),bt=K($e),st=_($e,2);Et(st,21,()=>s(me),ot=>ot.id,(ot,zt)=>{var At=Dg(),an=R(At),qn=_(an,2),_n=R(qn),Cn=K(_n,!0),Ht=_(_n,2),xn=K(Ht,!0);ce(Nn=>{Ja(an,Nn),Q(Cn,s(zt).label),Q(xn,s(zt).hint)},[()=>s(le).has(s(zt).id)]),Y("change",an,()=>G(s(zt).id)),U(ot,At)}),ce(()=>Q(bt,`Installed right after the instance is created.
                ${s(x)==="quilt"?"Dependencies resolve through QFAPI.":""}`)),U(ye,De)};Te(Xe,ye=>{(s(x)==="fabric"||s(x)==="quilt")&&s(me).length&&ye(gt)})}var P=_(Xe,2);{var se=ye=>{var De=Fg(),$e=_(St(De),2);{var bt=zt=>{var At=kg();U(zt,At)},st=zt=>{var At=Ng(),an=St(At);Ot(an,()=>s(M),qn=>v(M,qn)),U(zt,At)},ot=zt=>{var At=Og(),an=R(At);an.value=an.__value="";var qn=_(an);Et(qn,17,()=>s(ie),_n=>_n.version,(_n,Cn)=>{var Ht=$c(),xn=K(Ht),Nn={};ce(()=>{Q(xn,`${s(Cn).version??""}${s(Cn).stable?"":" (unstable)"}`),Nn!==(Nn=s(Cn).version)&&(Ht.value=(Ht.__value=Nn)??"")}),U(_n,Ht)}),xa(At),ba(At,()=>s(M),_n=>v(M,_n)),U(zt,At)};Te($e,zt=>{s(H)==="loading"?zt(bt):s(H)==="error"?zt(st,1):zt(ot,-1)})}U(ye,De)};Te(P,ye=>{s(we)&&ye(se)})}var _e=_(V,2),oe=R(_e),xe=_(oe,2);{var Ve=ye=>{var De=Bg(),$e=K(De,!0);ce(()=>{je(De,"title",s(q)),Q($e,s(q))}),U(ye,De)},Ne=ye=>{var De=zg(),$e=K(De,!0);ce(()=>Q($e,s(b)?`Selected Minecraft ${s(b)}`:"Pick a version to continue")),U(ye,De)};Te(xe,ye=>{s(q)?ye(Ve):ye(Ne,-1)})}var qe=_(xe,2),Ke=_(qe,2),vt=K(Ke,!0),ut=_(He,2);{var wt=ye=>{{let De=pt(()=>Me()??"");Df(ye,{get currentKey(){return s(C)},get currentPath(){return s(De)},onpick:$e=>{v(C,$e,!0),v(I,""),v(j,!1)},oncustom:async()=>{const $e=await Be();return $e&&v(C,""),$e},onclose:()=>v(j,!1)})}};Te(ut,ye=>{s(j)&&ye(wt)})}ce(()=>{je(X,"placeholder",s(b)?`Instance name (${s(b)})`:"Instance name"),re.disabled=!s(y),Q(Pe,`${s(ne).length??""} shown`),Ke.disabled=!s(Ce),je(Ke,"title",s(Ee)?"This mod loader is not supported yet.":"Create the instance"),Q(vt,s(W)?"Creating…":"OK")}),Y("click",He,ye=>{ye.target===ye.currentTarget&&e.onclose?.()}),Y("click",Mt,()=>v(j,!0)),Ot(X,()=>s(E),ye=>v(E,ye)),ba(de,()=>s(A),ye=>v(A,ye)),Y("click",L,()=>e.onclose?.()),Ot(re,()=>s(m),ye=>v(m,ye)),Y("click",oe,Le),Y("click",qe,()=>e.onclose?.()),Y("click",Ke,ge),U(i,Ge),Xt()}rn(["click","keydown","change"]);var Vg=O('<input class="h-7 w-full rounded border border-(--accent) bg-(--bg-surface) px-2 text-[13px] font-medium outline-none" aria-label="Instance name"/>'),Wg=O('<span class="group/name flex items-center gap-1"><span class="truncate"> </span> <button type="button" class="shrink-0 rounded p-0.5 text-[10px] text-(--text-muted) opacity-0 transition-opacity hover:text-(--accent) focus-visible:opacity-100 group-hover/name:opacity-100" title="Rename instance" aria-label="Rename instance">✎</button></span>'),jg=O('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Xg=O('<button class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game"><!> Kill</button>'),qg=O("<button> </button>"),Yg=O('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Kg=O('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><div class="flex items-start justify-between gap-2"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <button type="button" class="rounded p-1 text-[13px] leading-none text-(--text-muted) transition-colors hover:bg-(--bg-subtle) hover:text-(--text-main) focus-visible:ring-1 focus-visible:ring-(--accent) focus-visible:outline-none" title="Close panel (Esc)" aria-label="Clear selection and close the instance panel">✕</button></div> <h3 class="mt-2.5 truncate text-[14px] font-semibold"><!></h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"><!> Launch</button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip"><!> Export</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance"><!> Copy</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"><!> Delete</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance"><!> Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Zg(i,e){jt(e,!0);let t=at(e,"storage",3,null),n=at(e,"gameRunning",3,!1),r=at(e,"modsCount",3,null),a=at(e,"groups",19,()=>[]),l=J(!1),o=J(""),c=J(!1),d=J("");function u(){v(d,e.instance.name,!0),v(c,!0)}function h(){if(!s(c))return;const de=s(d).trim();v(c,!1),de&&de!==e.instance.name&&e.onrename?.(de)}function f(){v(c,!1)}const g=pt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function y(){const de=go(e.instance.icon_key);if(de)return de;const pe=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&pe?pe(e.instance.icon_path):"/logo.png"}function S(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function p(de){const pe=new Date(de*1e3),$=L=>String(L).padStart(2,"0");return`${$(pe.getDate())}/${$(pe.getMonth()+1)}/${pe.getFullYear()} ${$(pe.getHours())}:${$(pe.getMinutes())}:${$(pe.getSeconds())}`}function m(de){const pe=Math.max(0,Math.floor(de)),$=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],L=[];let V=pe;for(const[he,B]of $){const ee=Math.floor(V/he);if(ee&&(L.push(`${ee} ${B}${ee===1?"":"s"}`),V-=ee*he,L.length===2))break}return L.length?L.join(" "):"0 seconds"}const w=pt(()=>{const de=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${de}, last played on ${p(e.instance.last_played)}, total played for ${m(e.instance.total_time_played)}`:de});function b(de){v(l,!1),v(o,""),e.onchangegroup?.(de.trim()?de.trim():null)}var E=Kg(),A=R(E),I=R(A),C=K(I),j=_(I,2),x=_(A,2),M=R(x);{var ie=de=>{var pe=Vg();Y("keydown",pe,$=>{$.key==="Enter"?h():$.key==="Escape"&&f()}),kn("blur",pe,h),Ot(pe,()=>s(d),$=>v(d,$)),U(de,pe)},H=de=>{var pe=Wg(),$=R(pe),L=K($,!0),V=_($,2);ce(()=>Q(L,e.instance.name)),Y("click",V,u),U(de,pe)};Te(M,de=>{s(c)?de(ie):de(H,-1)})}var N=_(x,2),W=R(N),q=K(W,!0),ve=_(W,2),ae=K(ve,!0),le=_(ve,2);{var me=de=>{var pe=jg(),$=K(pe);ce(()=>Q($,`▤ ${e.instance.group??""}`)),U(de,pe)};Te(le,de=>{e.instance.group&&de(me)})}var G=_(N,2),F=K(G,!0),ne=_(G,2),Ee=R(ne),we=R(Ee);Wt(we,{name:"launch",size:13});var Ce=_(Ee,2);{var Oe=de=>{var pe=Xg(),$=R(pe);Wt($,{name:"kill",size:13}),Y("click",pe,function(...L){e.onkill?.apply(this,L)}),U(de,pe)};Te(Ce,de=>{n()&&de(Oe)})}var We=_(Ce,2),ze=R(We);Wt(ze,{name:"edit",size:13});var Me=_(We,2),Be=_(R(Me),2),Fe=K(Be,!0),z=_(Me,2);{var it=de=>{var pe=Yg(),$=R(pe),L=_($,2);Et(L,16,a,ee=>ee,(ee,be)=>{var Ie=qg(),k=K(Ie,!0);ce(()=>{_t(Ie,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===be?"font-medium text-(--accent)":"text-(--text-muted)"}`),Q(k,be)}),Y("click",Ie,()=>b(be)),U(ee,Ie)});var V=_(L,2),he=R(V),B=_(he,2);ce(ee=>{_t($,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),B.disabled=ee},[()=>!s(o).trim()]),Y("click",$,()=>b("")),Y("keydown",he,ee=>{ee.key==="Enter"&&s(o).trim()&&b(s(o))}),Ot(he,()=>s(o),ee=>v(o,ee)),Y("click",B,()=>b(s(o))),U(de,pe)};Te(z,de=>{s(l)&&de(it)})}var ke=_(z,2),ge=R(ke);Wt(ge,{name:"folder",size:13});var Le=_(ke,2),Ge=R(Le);Wt(Ge,{name:"export",size:13});var He=_(Le,2),Ye=R(He);Wt(Ye,{name:"copy",size:13});var Qe=_(He,2),Mt=R(Qe);Wt(Mt,{name:"delete",size:13});var dt=_(Qe,2),D=R(dt);Wt(D,{name:"shortcut",size:13});var T=_(ne,2),Z=R(T),Se=K(Z,!0),X=_(Z,2),fe=K(X);ce((de,pe,$)=>{je(C,"src",de),je(x,"title",e.instance.name),Q(q,e.instance.minecraft_version),_t(ve,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${s(g)??""}`),Q(ae,e.instance.loader_type),je(G,"title",pe),Q(F,$),Ee.disabled=n(),je(Ee,"title",n()?"A game is already running":`Launch ${e.instance.name}`),Q(Fe,s(l)?"▴":"▾"),ke.disabled=!t(),je(ke,"title",t()?"Opens the instance folder":"Storage unknown"),Q(Se,s(w)),Q(fe,`${r()??"…"??""} mods installed`)},[()=>y(),()=>S(),()=>S()]),kn("error",C,de=>{de.currentTarget.dataset.f||(de.currentTarget.dataset.f="1",de.currentTarget.src="/logo.png")}),Y("click",j,()=>e.onclose?.()),Y("click",Ee,function(...de){e.onlaunch?.apply(this,de)}),Y("click",We,function(...de){e.onedit?.apply(this,de)}),Y("click",Me,()=>v(l,!s(l))),Y("click",ke,function(...de){e.onopenfolder?.apply(this,de)}),Y("click",Le,function(...de){e.onexport?.apply(this,de)}),Y("click",He,function(...de){e.oncopy?.apply(this,de)}),Y("click",Qe,function(...de){e.ondelete?.apply(this,de)}),Y("click",dt,function(...de){e.onshortcut?.apply(this,de)}),U(i,E),Xt()}rn(["click","keydown"]);var Jg=O("<button></button>"),Qg=O('<span class="text-[11px] text-rose-400">invalid hex</span>'),$g=O('<span class="text-[11px] text-(--text-muted)">live preview</span>'),e_=O('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function t_(i,e){jt(e,!0);let t=at(e,"theme",3,"twilight-dark");const n=pt(()=>da(t())?.accent??Hc),r=pt(()=>{const b=da(t())?.suggested??[],E=(da(t())?.accent??Hc).toLowerCase();return b.map(A=>({...A,isBuiltin:A.hex.toLowerCase()===E}))});let a=J(Pt(Cl())),l=J(Pt(s(a)??s(n))),o=J(!1);nn(()=>{t(),v(a,Cl(),!0),v(l,s(a)??s(n),!0),v(o,!1)});function c(b){return s(a)===null?b.isBuiltin:s(a)===b.hex.toLowerCase()}function d(b){b.isBuiltin?(ev(),v(a,null)):os(b.hex)&&v(a,b.hex.toLowerCase(),!0),v(l,s(a)??s(n),!0),v(o,!1)}function u(b,E){const A=os(b,{persist:E})?ps(b):null;A?(v(a,A,!0),v(o,!1)):v(o,!0)}var h=e_(),f=St(h);Et(f,21,()=>s(r),b=>b.hex,(b,E)=>{var A=Jg();ce((I,C)=>{_t(A,1,`h-7 w-7 rounded-full ${I??""}`),In(A,`background:${s(E).hex??""}`),je(A,"title",`${s(E).name??""}${s(E).isBuiltin?" (built-in)":""}`),je(A,"aria-label",`${s(E).name??""} accent`),je(A,"aria-pressed",C)},[()=>c(s(E))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>c(s(E))]),Y("click",A,()=>d(s(E))),U(b,A)});var g=_(f,2),y=R(g),S=_(y,2),p=_(S,2);{var m=b=>{var E=Qg();U(b,E)},w=b=>{var E=$g();U(b,E)};Te(p,b=>{s(o)?b(m):b(w,-1)})}ce(()=>{rs(y,s(l)),rs(S,s(l)),je(S,"placeholder",s(n))}),Y("input",y,b=>{v(l,b.currentTarget.value,!0),u(s(l),!1)}),Y("change",y,b=>u(b.currentTarget.value,!0)),Y("input",S,b=>{v(l,b.currentTarget.value,!0),u(s(l),!1)}),Y("change",S,b=>u(b.currentTarget.value,!0)),U(i,h),Xt()}rn(["click","input","change"]);var n_=O('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),i_=O('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),r_=O('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),a_=O('<button><span class="flex items-center gap-2"><!> <!> <!></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),s_=O('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),ed=O('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),o_=O(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Icon pack</h3> <p class="mt-1 text-[12px] text-(--text-muted)">The glyph set used across the launcher. Fluent (Auto) follows the theme.</p> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),td=O("<option> </option>"),l_=O('<p class="mt-2 text-[12px] text-rose-400"> </p>'),c_=O('<span class="text-amber-400">(selection not applied yet)</span>'),d_=O('<p class="mt-1 text-[12px] text-(--accent)"> </p>'),u_=O('<p role="alert" class="mt-1 text-[12px] text-rose-400"> </p>'),f_=O('<span class="shrink-0 text-(--accent)">active</span>'),h_=O('<li class="flex items-center justify-between gap-2 text-[11px] text-(--text-muted)"><span class="truncate font-mono"> </span> <!></li>'),p_=O('<ul class="mt-2 space-y-0.5"></ul>'),m_=O('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!><!></select> <!> <!> <div class="mt-3 flex flex-wrap items-center gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50">↻ Rescan JREs</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"> </button> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-50">Apply</button></div> <p class="mt-2 flex items-center gap-1.5 text-[11px] text-(--text-muted)"><span></span> Active runtime: <span class="font-mono"> </span> <!></p> <!> <!> <!> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),v_=O('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),g_=O('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),__=O('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),x_=O('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),b_=O('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),y_=O('<p class="mt-2 text-[11px] text-green-500"> </p>'),S_=O('<p class="mt-2 text-[11px] text-rose-400"> </p>'),M_=O(`<h2 class="text-[16px] font-semibold">API Keys</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Optional keys for third-party APIs. The launcher works fully without them —
          every default flow is keyless.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="text-[12px] font-medium">CurseForge API key <span class="font-normal text-(--text-muted)"> </span></div> <p class="mt-0.5 text-[11px] text-(--text-muted)">Only used to auto-download mods from imported CurseForge packs. Your key is yours —
            paste it here, it is saved locally and never bundled with the launcher.</p> <div class="mt-3 flex gap-2"><input type="password" class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" aria-label="CurseForge API key" spellcheck="false"/> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)" title="Save the CurseForge API key (blank clears it)">Save</button></div> <!> <!></div>`,1),w_=O(`<h2 class="text-[16px] font-semibold">Accessibility</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Assistive profiles that adapt suggestions, installs and pre-launch setup for screen-reader and caption users.</p> <div class="mt-6 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Blind Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Screen reader &amp; audio navigation. Suggests Minecraft Access and spatial-audio mods on
              Fabric; Fabric is strongly recommended over Vanilla or Horizon.</p></div> <button type="button" role="switch" aria-label="Blind Mode (screen reader and audio navigation): suggests Minecraft Access on Fabric and recommends Fabric over Vanilla or Horizon" title="Toggle Blind Mode"><span aria-hidden="true"></span></button></div> <div class="mt-4 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Deaf Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Closed captions &amp; visual sound cues. Enforces <span class="font-mono">showSubtitles:true</span> in <span class="font-mono">options.txt</span> before every launch and suggests visual-sound Fabric mods.</p></div> <button type="button" role="switch" aria-label="Deaf Mode (closed captions and visual sound cues): enforces showSubtitles true in options.txt before launch and suggests visual-sound Fabric mods" title="Toggle Deaf Mode"><span aria-hidden="true"></span></button></div> <p class="mt-4 text-[11px] text-(--text-muted)" aria-live="polite"> </p>`,1),E_=O('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),T_=O("<p> </p>"),A_=O('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div> <button class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Open the dedicated Accounts page"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <span class="truncate">Accounts</span></button></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function R_(i,e){jt(e,!0);let t=at(e,"version",3,""),n=at(e,"theme",15,"twilight-dark"),r=at(e,"blindMode",15,!1),a=at(e,"deafMode",15,!1),l=at(e,"storage",3,null),o=at(e,"runtimes",19,()=>[]),c=at(e,"scanning",3,!1),d=at(e,"javaError",3,""),u=at(e,"javaPath",15,""),h=at(e,"javaCustomPaths",27,()=>Pt([])),f=at(e,"minMem",15,0),g=at(e,"maxMem",15,0);at(e,"sharedInput",11,""),at(e,"instancesInput",11,"");let y=at(e,"storageBusy",3,!1),S=at(e,"storageMsg",3,""),p=at(e,"javaMsg",3,""),m=at(e,"gameRunning",3,!1),w=J(Pt([])),b=J(""),E=J(""),A=J(!1),I=J(Pt(u()));async function C(){const V=window.__TAURI__?.dialog?.open;if(!V){v(E,"File picker unavailable in this build.");return}v(E,""),v(b,"");try{const he=await V({multiple:!1,title:"Select a Java executable",filters:[{name:"Java",extensions:["exe",""]}]});if(!he)return;v(A,!0);const B=await window.__TAURI__.core.invoke("probe_java_path",{path:String(he)}),ee=await e.onaddjava?.(B.executable);Array.isArray(ee)&&v(w,ee,!0),v(b,`Added Java ${B.major} (${B.version})`)}catch(he){v(E,String(he),!0)}finally{v(A,!1)}}async function j(V){v(E,""),v(A,!0);try{await e.onapplyjava?.(V||null),v(I,V||"",!0),u(V||""),v(b,V?"Applied. Launches will use this runtime.":"Reverted to auto-discovery.",!0)}catch(he){v(E,String(he),!0)}finally{v(A,!1)}}nn(()=>{Array.isArray(h())&&v(w,h(),!0)});const x=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"apikeys",label:"API Keys",icon:"🔑"},{id:"accessibility",label:"Accessibility",icon:"♿"},{id:"about",label:"About & Updates",icon:"ℹ"}];let M=J("appearance"),ie=J(Pt(so())),H=J(""),N=J(!1),W=J(""),q=J("");async function ve(){try{const V=await window.__TAURI__.core.invoke("get_curseforge_api_key");v(N,V.configured,!0)}catch(V){v(q,String(V),!0)}}ve();async function ae(){v(q,""),v(W,"");try{await window.__TAURI__.core.invoke("set_curseforge_api_key",{apiKey:s(H)});const V=await window.__TAURI__.core.invoke("get_curseforge_api_key");v(N,V.configured,!0),v(H,""),v(W,V.configured?"Saved. Imported CurseForge packs will resolve their mod downloads.":"Cleared. The zero-key flow (Modrinth core mods + manual import) stays active.",!0)}catch(V){v(q,String(V),!0)}}let le=J(Pt(Mr())),me=J(""),G=J(!0),F=J(Pt(qc())),ne=J(""),Ee=J("");function we(){v(F,qc(),!0),v(Ee,"Loaded the active theme’s tokens — tweak and save.")}function Ce(){try{const V=Xc({name:s(me),dark:s(G),tokens:s(F)});v(le,Mr(),!0),n(V.id),v(Ee,`Saved “${V.name}”.`)}catch(V){v(Ee,String(V),!0)}}function Oe(V){av(V),v(le,Mr(),!0),n()===V&&n(oc),v(Ee,"Theme deleted.")}function We(){v(ne,JSON.stringify({name:s(me).trim()||"My theme",dark:s(G),tokens:s(F)},null,2),!0),v(Ee,"Theme JSON written below — copy it to share.")}function ze(){try{const V=JSON.parse(s(ne));if(!V||typeof V!="object"||Array.isArray(V))throw new Error("Expected a theme object.");const he=Xc(V);v(le,Mr(),!0),n(he.id),v(Ee,`Imported “${he.name}”.`),v(ne,"")}catch(V){v(Ee,`Import failed: ${V}`)}}async function Me(V){const he=window.__TAURI__?.dialog?.open;if(!he)return null;try{const B=await he({directory:!0,multiple:!1,defaultPath:V&&V.trim()?V.trim():void 0});return typeof B=="string"?B:null}catch{return null}}const Be=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let Fe=J(Pt({}));nn(()=>{l()&&v(Fe,{instances:l().is_default_instances?"":l().instances_dir,shared:l().is_default_shared?"":l().shared_dir,versions:l().is_default_versions?"":l().versions_dir,mods:l().is_default_mods?"":l().mods_dir,icons:l().is_default_icons?"":l().icons_dir,java:l().is_default_java?"":l().java_dir,skins:l().is_default_skins?"":l().skins_dir,downloads:l().downloads_dir||""},!0)});function z(V){return l()?V==="downloads"?l().staging_root:l()[`${V}_dir`]:""}function it(V){return l()?V==="downloads"?l().is_default_staging:l()[`is_default_${V}`]:!0}const ke="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var ge=A_(),Le=R(ge),Ge=R(Le),He=_(Ge,2);Et(He,21,()=>x,V=>V.id,(V,he)=>{var B=n_(),ee=R(B),be=R(ee);Ei(be,{get emoji(){return s(he).icon},size:15});var Ie=_(ee,2),k=K(Ie,!0);ce(()=>{_t(B,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${s(M)===s(he).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(B,"aria-current",s(M)===s(he).id?"true":void 0),Q(k,s(he).label)}),Y("click",B,()=>v(M,s(he).id,!0)),U(V,B)});var Ye=_(He,2),Qe=R(Ye),Mt=R(Qe);Wt(Mt,{name:"accounts",size:15});var dt=_(Le,2),D=R(dt),T=R(D);{var Z=V=>{var he=o_(),B=_(St(he),6),ee=R(B);Et(ee,17,()=>_o,ht=>ht.id,(ht,Xe)=>{var gt=i_(),P=R(gt),se=R(P),_e=_(se,2),oe=_(_e,2),xe=_(P,2),Ve=K(xe,!0),Ne=_(xe,2),qe=K(Ne,!0);ce(()=>{_t(gt,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===s(Xe).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(gt,"aria-pressed",n()===s(Xe).id),je(gt,"title",`${s(Xe).label??""}: ${s(Xe).dark?"dark":"light"} ground`),In(se,`background:${s(Xe).swatch[0]??""}`),In(_e,`background:${s(Xe).swatch[1]??""}`),In(oe,`background:${s(Xe).swatch[2]??""}`),Q(Ve,s(Xe).label),Q(qe,s(Xe).dark?"Dark ground":"Light ground")}),Y("click",gt,()=>n(s(Xe).id)),U(ht,gt)});var be=_(ee,2);Et(be,17,()=>s(le),ht=>ht.id,(ht,Xe)=>{var gt=r_(),P=R(gt),se=R(P),_e=_(se,2),oe=_(_e,2),xe=_(P,2),Ve=K(xe,!0),Ne=_(xe,2),qe=K(Ne),Ke=_(Ne,2);ce(()=>{_t(gt,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===s(Xe).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(gt,"title",`${s(Xe).name??""}: ${s(Xe).dark?"dark":"light"} ground`),In(se,`background:${s(Xe).tokens.bg1??""}`),In(_e,`background:${s(Xe).tokens.bg3??""}`),In(oe,`background:${s(Xe).tokens.accent1??""}`),Q(Ve,s(Xe).name),Q(qe,`Custom · ${s(Xe).dark?"Dark":"Light"} ground`),je(Ke,"title",`Delete ${s(Xe).name??""}`),je(Ke,"aria-label",`Delete ${s(Xe).name??""}`)}),Y("click",gt,()=>n(s(Xe).id)),Y("keydown",gt,vt=>{(vt.key==="Enter"||vt.key===" ")&&(vt.preventDefault(),n(s(Xe).id))}),Y("click",Ke,vt=>{vt.stopPropagation(),Oe(s(Xe).id)}),U(ht,gt)});var Ie=_(B,4),k=R(Ie);t_(k,{get theme(){return n()}});var Re=_(Ie,6);Et(Re,21,()=>Nf,ht=>ht.id,(ht,Xe)=>{var gt=a_(),P=R(gt),se=R(P);Wt(se,{name:"instances",size:16,get pack(){return s(Xe).id}});var _e=_(se,2);Wt(_e,{name:"settings",size:16,get pack(){return s(Xe).id}});var oe=_(_e,2);Wt(oe,{name:"accounts",size:16,get pack(){return s(Xe).id}});var xe=_(P,2),Ve=K(xe,!0),Ne=_(xe,2),qe=K(Ne,!0);ce(()=>{_t(gt,1,`flex flex-col items-start gap-2 rounded border p-2.5 text-left ${s(ie)===s(Xe).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(gt,"aria-pressed",s(ie)===s(Xe).id),je(gt,"title",`${s(Xe).label??""}: ${s(Xe).hint??""}`),Q(Ve,s(Xe).label),Q(qe,s(Xe).hint)}),Y("click",gt,()=>{fv(s(Xe).id),v(ie,so(),!0)}),U(ht,gt)});var re=_(Re,6),Ae=R(re),Pe=R(Ae),tt=_(Pe,2),Je=R(tt),Ze=_(Je,2),lt=_(Ae,2);Et(lt,21,()=>nv,ht=>ht.key,(ht,Xe)=>{var gt=s_(),P=R(gt),se=K(P,!0),_e=_(P,2),oe=R(_e),xe=_(oe,2);ce(()=>{Q(se,s(Xe).label),rs(oe,s(F)[s(Xe).key]),je(oe,"title",`${s(Xe).label??""} color`),je(oe,"aria-label",`${s(Xe).label??""} color`),rs(xe,s(F)[s(Xe).key]),je(xe,"aria-label",`${s(Xe).label??""} hex`)}),Y("input",oe,Ve=>v(F,{...s(F),[s(Xe).key]:Ve.currentTarget.value},!0)),Y("input",xe,Ve=>v(F,{...s(F),[s(Xe).key]:Ve.currentTarget.value},!0)),U(ht,gt)});var ft=_(lt,2),ct=R(ft),mt=_(ct,2),nt=_(re,4),yt=R(nt),Ut=_(yt,2),It=R(Ut),Rt=_(It,2),Gt=_(nt,2);{var en=ht=>{var Xe=ed(),gt=K(Xe,!0);ce(()=>Q(gt,s(Ee))),U(ht,Xe)};Te(Gt,ht=>{s(Ee)&&ht(en)})}ce(()=>{_t(Je,1,`px-3 py-1.5 text-[12px] ${s(G)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(Je,"aria-pressed",s(G)),_t(Ze,1,`px-3 py-1.5 text-[12px] ${s(G)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),je(Ze,"aria-pressed",!s(G))}),Ot(Pe,()=>s(me),ht=>v(me,ht)),Y("click",Je,()=>v(G,!0)),Y("click",Ze,()=>v(G,!1)),Y("click",ct,we),Y("click",mt,Ce),Ot(yt,()=>s(ne),ht=>v(ne,ht)),Y("click",It,We),Y("click",Rt,ze),U(V,he)},Se=V=>{var he=m_(),B=_(St(he),6),ee=R(B);ee.value=ee.__value="";var be=_(ee);Et(be,17,o,Ne=>Ne.executable,(Ne,qe)=>{var Ke=td(),vt=K(Ke),ut={};ce(()=>{Q(vt,`Java ${s(qe).major??""} — ${s(qe).home??""}`),ut!==(ut=s(qe).executable)&&(Ke.value=(Ke.__value=ut)??"")}),U(Ne,Ke)});var Ie=_(be);Et(Ie,16,()=>s(w).filter(Ne=>!o().some(qe=>qe.executable===Ne)),Ne=>Ne,(Ne,qe)=>{var Ke=td(),vt=K(Ke),ut={};ce(()=>{Q(vt,`Custom — ${qe??""}`),ut!==(ut=qe)&&(Ke.value=(Ke.__value=ut)??"")}),U(Ne,Ke)}),xa(B);var k=_(B,2);{var Re=Ne=>{var qe=ed(),Ke=K(qe,!0);ce(()=>Q(Ke,c()?"Probing system roots…":"No runtimes detected.")),U(Ne,qe)};Te(k,Ne=>{o().length||Ne(Re)})}var re=_(k,2);{var Ae=Ne=>{var qe=l_(),Ke=K(qe,!0);ce(()=>Q(Ke,d())),U(Ne,qe)};Te(re,Ne=>{d()&&Ne(Ae)})}var Pe=_(re,2),tt=R(Pe),Je=_(tt,2),Ze=K(Je,!0),lt=_(Je,2),ft=_(Pe,2),ct=R(ft),mt=_(ct,2),nt=K(mt,!0),yt=_(mt,2);{var Ut=Ne=>{var qe=c_();U(Ne,qe)};Te(yt,Ne=>{u()!==s(I)&&Ne(Ut)})}var It=_(ft,2);{var Rt=Ne=>{var qe=d_(),Ke=K(qe,!0);ce(()=>Q(Ke,s(b))),U(Ne,qe)};Te(It,Ne=>{s(b)&&Ne(Rt)})}var Gt=_(It,2);{var en=Ne=>{var qe=u_(),Ke=K(qe,!0);ce(()=>Q(Ke,s(E))),U(Ne,qe)};Te(Gt,Ne=>{s(E)&&Ne(en)})}var ht=_(Gt,2);{var Xe=Ne=>{var qe=p_();Et(qe,20,()=>s(w),Ke=>Ke,(Ke,vt)=>{var ut=h_(),wt=R(ut),ye=K(wt,!0),De=_(wt,2);{var $e=bt=>{var st=f_();U(bt,st)};Te(De,bt=>{s(I)===vt&&bt($e)})}ce(()=>{je(wt,"title",vt),Q(ye,vt)}),U(Ke,ut)}),U(Ne,qe)};Te(ht,Ne=>{s(w).length&&Ne(Xe)})}var gt=_(ht,4),P=_(R(gt),2),se=_(P,2),_e=_(gt,2),oe=_(R(_e),2),xe=_(oe,2),Ve=_(_e,4);ce(()=>{tt.disabled=c(),Je.disabled=s(A),Q(Ze,s(A)?"Checking…":"Browse / Add Custom Java…"),lt.disabled=s(A)||u()===s(I),_t(ct,1,`inline-block h-1.5 w-1.5 rounded-full ${s(I)?"bg-(--accent)":"bg-(--text-muted)"}`),Q(nt,s(I)||"auto-discovery")}),ba(B,u),Y("click",tt,function(...Ne){e.onscanjava?.apply(this,Ne)}),Y("click",Je,C),Y("click",lt,()=>j(u())),Ot(P,f),Ot(se,f),Ot(oe,g),Ot(xe,g),Y("click",Ve,function(...Ne){e.onsaveprefs?.apply(this,Ne)}),U(V,he)},X=V=>{var he=b_(),B=_(St(he),4);{var ee=be=>{var Ie=x_(),k=St(Ie),Re=R(k),re=R(Re),Ae=_(R(re),2),Pe=K(Ae,!0),tt=_(re,2),Je=_(k,2);Et(Je,17,()=>Be,Ze=>Ze.key,(Ze,lt)=>{var ft=__(),ct=R(ft),mt=R(ct),nt=R(mt),yt=_(nt),Ut=K(yt,!0),It=_(mt,2);{var Rt=Ve=>{var Ne=v_();ce(()=>Ne.disabled=y()),Y("click",Ne,()=>e.onsavefolder?.(s(lt).key,"")),U(Ve,Ne)},Gt=pt(()=>!it(s(lt).key));Te(It,Ve=>{s(Gt)&&Ve(Rt)})}var en=_(ct,2),ht=K(en,!0),Xe=_(en,2),gt=R(Xe),P=_(gt,2),se=_(P,2),_e=_(se,2),oe=_(Xe,2);{var xe=Ve=>{var Ne=g_(),qe=R(Ne),Ke=K(qe),vt=_(qe,2);ce(()=>{je(qe,"title",l().staging_root),Q(Ke,`Staging: ${l().staging_root??""}`),vt.disabled=y()||m(),je(vt,"title",m()?"Unavailable while a game is running":"Purges the staging area")}),Y("click",vt,function(...ut){e.oncleanstaging?.apply(this,ut)}),U(Ve,Ne)};Te(oe,Ve=>{s(lt).key==="downloads"&&Ve(xe)})}ce((Ve,Ne)=>{Q(nt,`${s(lt).label??""} `),Q(Ut,Ve),Q(ht,s(lt).hint),je(gt,"placeholder",Ne),_e.disabled=y()},[()=>it(s(lt).key)?"(default)":"(custom)",()=>z(s(lt).key)]),Ot(gt,()=>s(Fe)[s(lt).key],Ve=>s(Fe)[s(lt).key]=Ve),Y("click",P,async()=>{const Ve=await Me(s(Fe)[s(lt).key]);Ve&&(s(Fe)[s(lt).key]=Ve)}),Y("click",se,()=>e.onopenfolder?.(z(s(lt).key))),Y("click",_e,()=>e.onsavefolder?.(s(lt).key,s(Fe)[s(lt).key])),U(Ze,ft)}),ce(()=>{je(Ae,"title",l().app_data),Q(Pe,l().app_data)}),Y("click",tt,()=>e.onopenfolder?.(l().app_data)),U(be,Ie)};Te(B,be=>{l()&&be(ee)})}U(V,he)},fe=V=>{var he=M_(),B=_(St(he),4),ee=R(B),be=_(R(ee)),Ie=K(be,!0),k=_(ee,4),Re=R(k),re=_(Re,2),Ae=_(k,2);{var Pe=Ze=>{var lt=y_(),ft=K(lt,!0);ce(()=>Q(ft,s(W))),U(Ze,lt)};Te(Ae,Ze=>{s(W)&&Ze(Pe)})}var tt=_(Ae,2);{var Je=Ze=>{var lt=S_(),ft=K(lt,!0);ce(()=>Q(ft,s(q))),U(Ze,lt)};Te(tt,Ze=>{s(q)&&Ze(Je)})}ce(()=>{Q(Ie,s(N)?"(configured)":"(not set)"),je(Re,"placeholder",s(N)?"•••••••••••• (saved — paste a new key to replace)":"Paste your CurseForge API key")}),Ot(Re,()=>s(H),Ze=>v(H,Ze)),Y("click",re,ae),U(V,he)},de=V=>{var he=w_(),B=_(St(he),4),ee=_(R(B),2),be=K(ee),Ie=_(B,2),k=_(R(Ie),2),Re=K(k),re=_(Ie,2),Ae=K(re);ce(()=>{je(ee,"aria-checked",r()),_t(ee,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${r()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),_t(be,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${r()?"translate-x-[22px]":""}`),je(k,"aria-checked",a()),_t(k,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${a()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),_t(Re,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${a()?"translate-x-[22px]":""}`),Q(Ae,`Blind Mode is ${r()?"on":"off"}. Deaf Mode is ${a()?"on":"off"}.`)}),Y("click",ee,()=>r(!r())),Y("click",k,()=>a(!a())),U(V,he)},pe=V=>{var he=E_(),B=_(St(he),4),ee=R(B),be=_(R(ee),2),Ie=R(be),k=_(R(Ie)),Re=K(k),re=_(B,2),Ae=R(re),Pe=_(Ae,2),tt=_(Pe,2);ce(()=>Q(Re,`(alpha-v${t()??""})`)),Y("click",Ae,()=>e.onopenurl?.(`${ke}`)),Y("click",Pe,()=>e.onopenurl?.(`${ke}/releases`)),Y("click",tt,()=>e.onopenurl?.(`${ke}/issues`)),U(V,he)};Te(T,V=>{s(M)==="appearance"?V(Z):s(M)==="java"?V(Se,1):s(M)==="storage"?V(X,2):s(M)==="apikeys"?V(fe,3):s(M)==="accessibility"?V(de,4):V(pe,-1)})}var $=_(T,2);{var L=V=>{var he=T_(),B=K(he,!0);ce(()=>{_t(he,1,`mt-5 text-[12px] ${p()?"text-(--accent)":"text-(--text-muted)"}`),Q(B,p()||S())}),U(V,he)};Te($,V=>{(p()||S())&&V(L)})}Y("click",Ge,function(...V){e.onback?.apply(this,V)}),Y("click",Ye,function(...V){e.onopenaccounts?.apply(this,V)}),U(i,ge),Xt()}rn(["click","keydown","input"]);var C_=O("<button> </button>"),P_=O('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),L_=O('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),I_=O('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),nd=O('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),D_=O('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),id=O('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),U_=O('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),k_=O('<div class="p-4"><!> <!></div>'),N_=O(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),O_=O('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),F_=O('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),B_=O('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),z_=O('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),G_=O(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),H_=O('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),V_=O('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),W_=O('<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div><!> <!></div>',1);function Gf(i,e){jt(e,!0);let t=J("offline"),n=J(""),r=J(!1),a=J(""),l=J(""),o=J("idle"),c=J(""),d=J(null),u=J(!1),h=null,f=J("idle"),g=J(""),y=J(!1),S=J(!1),p=J(null),m=J(!1),w=null,b=J(""),E=J(""),A=J(!1),I=J(""),C=J(""),j=J(""),x=J("");function M(ge,Le){const Ge=window.__TAURI__?.core;return Ge?Ge.invoke(ge,Le):Promise.reject(new Error("Tauri backend unavailable in this preview."))}ac(()=>{ie(),H()});function ie(){h&&(clearInterval(h),h=null)}function H(){w&&(clearInterval(w),w=null)}nn(()=>{const ge=s(a).trim(),Le=setTimeout(async()=>{if(!ge){v(l,"");return}try{v(l,await M("offline_uuid",{username:ge}),!0)}catch{v(l,"")}},200);return()=>clearTimeout(Le)});async function N(ge){ge.preventDefault(),v(n,""),v(r,!0);try{await M("add_offline_account",{username:s(a).trim()}),v(a,""),v(l,""),await e.onrefresh?.()}catch(Le){v(n,String(Le),!0)}finally{v(r,!1)}}async function W(){v(c,""),v(u,!1),v(o,"requesting");try{v(d,await M("start_microsoft_device_code"),!0),v(o,"code"),ie(),h=setInterval(q,(s(d).interval||5)*1e3)}catch(ge){v(o,"idle"),v(c,String(ge),!0)}}async function q(){if(s(d))try{const ge=await M("poll_microsoft_device_code",{device:s(d)});if(ge.state==="pending")return;if(ge.state==="slow_down"){ie(),h=setInterval(q,((s(d).interval||5)+5)*1e3);return}if(ie(),ge.state==="failed"){v(c,ge.reason,!0),v(d,null),v(o,"idle");return}v(d,null),v(o,"signedin"),await e.onrefresh?.()}catch(ge){v(c,String(ge),!0)}}async function ve(){if(s(d))try{await navigator.clipboard.writeText(s(d).user_code),v(u,!0),setTimeout(()=>v(u,!1),1600)}catch{}}async function ae(){v(g,""),v(y,!1),v(S,!0);try{await M("elyby_browser_login"),v(y,!0),await e.onrefresh?.()}catch(ge){v(g,String(ge),!0)}finally{v(S,!1)}}async function le(){v(g,""),v(m,!1),v(f,"requesting");try{v(p,await M("start_elyby_device_code"),!0),v(f,"code"),H(),w=setInterval(me,(s(p).interval||5)*1e3)}catch(ge){v(f,"idle"),v(g,String(ge),!0)}}async function me(){if(s(p))try{const ge=await M("poll_elyby_device_code",{device:s(p)});if(ge.state==="pending")return;if(ge.state==="slow_down"){H(),w=setInterval(me,((s(p).interval||5)+5)*1e3);return}if(H(),ge.state==="failed"){v(g,ge.reason,!0),v(p,null),v(f,"idle");return}v(p,null),v(f,"signedin"),await e.onrefresh?.()}catch(ge){v(g,String(ge),!0)}}async function G(){if(s(p))try{await navigator.clipboard.writeText(s(p).user_code),v(m,!0),setTimeout(()=>v(m,!1),1600)}catch{}}function F(){const ge=s(p)?.verification_uri_complete??s(p)?.verification_uri;ge&&M("open_external_url",{url:ge}).catch(()=>{})}async function ne(ge){ge.preventDefault(),v(n,""),v(A,!0),v(y,!1);try{await M("add_elyby_account",{username:s(b).trim(),password:s(E)}),v(b,""),v(E,""),v(y,!0),await e.onrefresh?.()}catch(Le){v(n,String(Le),!0)}finally{v(A,!1)}}async function Ee(ge){ge.preventDefault(),v(n,""),v(r,!0);try{const Le=await M("add_custom_yggdrasil_account",{username:s(I).trim(),serverUrl:s(C).trim()});(s(j).trim()||s(x).trim())&&await M("set_account_textures",{id:Le.id,skin:s(j).trim()||null,cape:s(x).trim()||null}),v(I,""),v(C,""),v(j,""),v(x,""),await e.onrefresh?.()}catch(Le){v(n,String(Le),!0)}finally{v(r,!1)}}async function we(ge){const Le=window.__TAURI__?.dialog?.open;if(!Le){v(n,"File picker unavailable in this build.");return}try{const Ge=await Le({multiple:!1,title:ge==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Ge)return;const He=String(Ge);v(ge==="skin"?j:x,He,!0),v(n,"")}catch(Ge){v(n,String(Ge),!0)}}var Ce=W_(),Oe=St(Ce);Et(Oe,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],ao,(ge,Le)=>{var Ge=pt(()=>zu(Le,2));let He=()=>s(Ge)[0],Ye=()=>s(Ge)[1];var Qe=C_(),Mt=K(Qe,!0);ce(()=>{_t(Qe,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${s(t)===He()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),Q(Mt,Ye())}),Y("click",Qe,()=>{v(t,He(),!0),v(n,"")}),U(ge,Qe)});var We=_(Oe,2),ze=R(We);{var Me=ge=>{var Le=L_(),Ge=St(Le),He=R(Ge),Ye=_(He,2),Qe=_(Ge,2);{var Mt=dt=>{var D=P_(),T=_(R(D),2),Z=K(T,!0);ce(()=>Q(Z,s(l))),U(dt,D)};Te(Qe,dt=>{s(l)&&dt(Mt)})}ce(dt=>Ye.disabled=dt,[()=>!s(a).trim()||s(r)]),kn("submit",Ge,N),Ot(He,()=>s(a),dt=>v(a,dt)),U(ge,Le)},Be=ge=>{var Le=k_(),Ge=R(Le);{var He=T=>{var Z=I_(),Se=St(Z);ce(()=>Se.disabled=s(r)),Y("click",Se,W),U(T,Z)},Ye=T=>{var Z=nd();U(T,Z)},Qe=T=>{var Z=D_(),Se=_(R(Z),2),X=K(Se,!0),fe=_(Se,4),de=K(fe,!0),pe=_(fe,2),$=R(pe),L=K($,!0),V=_($,2);ce(()=>{Q(X,s(d).verification_uri),Q(de,s(d).user_code),Q(L,s(u)?"Copied ✓":"Copy code")}),Y("click",$,ve),Y("click",V,W),U(T,Z)},Mt=T=>{var Z=id(),Se=_(St(Z),2);Y("click",Se,()=>{v(o,"idle"),v(c,"")}),U(T,Z)};Te(Ge,T=>{s(o)==="idle"?T(He):s(o)==="requesting"?T(Ye,1):s(o)==="code"&&s(d)?T(Qe,2):s(o)==="signedin"&&T(Mt,3)})}var dt=_(Ge,2);{var D=T=>{var Z=U_(),Se=K(Z,!0);ce(()=>Q(Se,s(c))),U(T,Z)};Te(dt,T=>{s(c)&&T(D)})}U(ge,Le)},Fe=ge=>{var Le=G_(),Ge=_(R(Le),2);{var He=L=>{var V=N_(),he=St(V),B=K(he,!0),ee=_(he,4);ce(()=>{he.disabled=s(S),Q(B,s(S)?"Waiting for the browser…":"Sign in with browser (recommended)"),ee.disabled=s(S)}),Y("click",he,ae),Y("click",ee,le),U(L,V)},Ye=L=>{var V=nd();U(L,V)},Qe=L=>{var V=F_(),he=_(R(V),2),B=K(he,!0),ee=_(he,4),be=K(ee,!0),Ie=_(ee,2),k=R(Ie),Re=K(k,!0),re=_(k,2);{var Ae=tt=>{var Je=O_();Y("click",Je,F),U(tt,Je)};Te(re,tt=>{(s(p).verification_uri||s(p).verification_uri_complete)&&tt(Ae)})}var Pe=_(re,2);ce(()=>{Q(B,s(p).verification_uri),Q(be,s(p).user_code),Q(Re,s(m)?"Copied ✓":"Copy code")}),Y("click",k,G),Y("click",Pe,le),U(L,V)},Mt=L=>{var V=id(),he=_(St(V),2);Y("click",he,()=>{v(f,"idle"),v(g,"")}),U(L,V)};Te(Ge,L=>{s(f)==="idle"?L(He):s(f)==="requesting"?L(Ye,1):s(f)==="code"&&s(p)?L(Qe,2):s(f)==="signedin"&&L(Mt,3)})}var dt=_(Ge,2);{var D=L=>{var V=B_(),he=K(V,!0);ce(()=>Q(he,s(g))),U(L,V)};Te(dt,L=>{s(g)&&L(D)})}var T=_(dt,2);{var Z=L=>{var V=z_();U(L,V)};Te(T,L=>{s(y)&&s(f)==="idle"&&L(Z)})}var Se=_(T,2),X=_(R(Se),2),fe=R(X),de=_(fe,2),pe=_(de,2),$=K(pe,!0);ce(L=>{pe.disabled=L,Q($,s(A)?"Signing in…":"Sign in")},[()=>!s(b).trim()||!s(E)||s(A)]),kn("submit",X,ne),Ot(fe,()=>s(b),L=>v(b,L)),Ot(de,()=>s(E),L=>v(E,L)),U(ge,Le)},z=ge=>{var Le=H_(),Ge=R(Le),He=_(Ge,2),Ye=_(He,2),Qe=R(Ye),Mt=_(R(Qe)),dt=K(Mt,!0),D=_(Qe,2),T=_(R(D)),Z=K(T,!0),Se=_(Ye,2);ce(X=>{Q(dt,s(j)||"none"),Q(Z,s(x)||"none"),Se.disabled=X},[()=>!s(I).trim()||!s(C).trim()||s(r)]),kn("submit",Le,Ee),Ot(Ge,()=>s(C),X=>v(C,X)),Ot(He,()=>s(I),X=>v(I,X)),Y("click",Qe,()=>we("skin")),Y("click",D,()=>we("cape")),U(ge,Le)};Te(ze,ge=>{s(t)==="offline"?ge(Me):s(t)==="microsoft"?ge(Be,1):s(t)==="elyby"?ge(Fe,2):s(t)==="custom"&&ge(z,3)})}var it=_(ze,2);{var ke=ge=>{var Le=V_(),Ge=K(Le,!0);ce(()=>Q(Ge,s(n))),U(ge,Le)};Te(it,ge=>{s(n)&&ge(ke)})}U(i,Ce),Xt()}rn(["click"]);const cc="156",Nr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},j_=0,rd=1,X_=2,Hf=1,q_=2,zi=3,Ci=0,zn=1,ri=2,qi=0,ua=1,ad=2,sd=3,od=4,Y_=5,ra=100,K_=101,Z_=102,ld=103,cd=104,J_=200,Q_=201,$_=202,ex=203,Vf=204,Wf=205,tx=206,nx=207,ix=208,rx=209,ax=210,sx=0,ox=1,lx=2,Dl=3,cx=4,dx=5,ux=6,fx=7,jf=0,hx=1,px=2,lr=0,mx=1,vx=2,gx=3,_x=4,xx=5,Xf=300,ya=301,Sa=302,oo=303,Ul=304,xo=306,kl=1e3,di=1001,Nl=1002,tn=1003,dd=1004,Bo=1005,ni=1006,bx=1007,ls=1008,cr=1009,yx=1010,Sx=1011,dc=1012,qf=1013,sr=1014,Wi=1015,Ma=1016,Yf=1017,Kf=1018,Ar=1020,Mx=1021,ui=1023,wx=1024,Ex=1025,Rr=1026,wa=1027,Tx=1028,Zf=1029,Ax=1030,Jf=1031,Qf=1033,zo=33776,Go=33777,Ho=33778,Vo=33779,ud=35840,fd=35841,hd=35842,pd=35843,Rx=36196,md=37492,vd=37496,gd=37808,_d=37809,xd=37810,bd=37811,yd=37812,Sd=37813,Md=37814,wd=37815,Ed=37816,Td=37817,Ad=37818,Rd=37819,Cd=37820,Pd=37821,Wo=36492,Ld=36494,Id=36495,Cx=36283,Dd=36284,Ud=36285,kd=36286,$f=3e3,Cr=3001,Px=3200,Lx=3201,eh=0,Ix=1,Pr="",Qt="srgb",Pi="srgb-linear",bo="display-p3",jo=7680,Dx=519,Ux=512,kx=513,Nx=514,Ox=515,Fx=516,Bx=517,zx=518,Gx=519,Ol=35044,Nd="300 es",Fl=1035,ji=2e3,lo=2001;class Ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,Bl=180/Math.PI;function dr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function Dn(i,e,t){return Math.max(e,Math.min(t,i))}function Hx(i,e){return(i%e+e)%e}function Xo(i,e,t){return(1-t)*i+t*e}function Od(i){return(i&i-1)===0&&i!==0}function zl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vx={DEG2RAD:Zs};class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(e,t,n,r,a,l,o,c,d){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,o,c,d)}set(e,t,n,r,a,l,o,c,d){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=l,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],o=n[3],c=n[6],d=n[1],u=n[4],h=n[7],f=n[2],g=n[5],y=n[8],S=r[0],p=r[3],m=r[6],w=r[1],b=r[4],E=r[7],A=r[2],I=r[5],C=r[8];return a[0]=l*S+o*w+c*A,a[3]=l*p+o*b+c*I,a[6]=l*m+o*E+c*C,a[1]=d*S+u*w+h*A,a[4]=d*p+u*b+h*I,a[7]=d*m+u*E+h*C,a[2]=f*S+g*w+y*A,a[5]=f*p+g*b+y*I,a[8]=f*m+g*E+y*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],d=e[7],u=e[8];return t*l*u-t*o*d-n*a*u+n*o*c+r*a*d-r*l*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],d=e[7],u=e[8],h=u*l-o*d,f=o*c-u*a,g=d*a-l*c,y=t*h+n*f+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=h*S,e[1]=(r*d-u*n)*S,e[2]=(o*n-r*l)*S,e[3]=f*S,e[4]=(u*t-r*c)*S,e[5]=(r*a-o*t)*S,e[6]=g*S,e[7]=(n*c-d*t)*S,e[8]=(l*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,o){const c=Math.cos(a),d=Math.sin(a);return this.set(n*c,n*d,-n*(c*l+d*o)+l+e,-r*d,r*c,-r*(-d*l+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new Dt;function th(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wx(){const i=co("canvas");return i.style.display="block",i}const Fd={};function Qa(i){i in Fd||(Fd[i]=!0,console.warn(i))}function fa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const jx=new Dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Xx=new Dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function qx(i){return i.convertSRGBToLinear().applyMatrix3(Xx)}function Yx(i){return i.applyMatrix3(jx).convertLinearToSRGB()}const Kx={[Pi]:i=>i,[Qt]:i=>i.convertSRGBToLinear(),[bo]:qx},Zx={[Pi]:i=>i,[Qt]:i=>i.convertLinearToSRGB(),[bo]:Yx},Qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Pi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Kx[e],r=Zx[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Fr;class nh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=co("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=fa(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fa(t[n]/255)*255):t[n]=fa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jx=0;class ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,o=r.length;l<o;l++)r[l].isDataTexture?a.push(Ko(r[l].image)):a.push(Ko(r[l]))}else a=Ko(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qx=0;class Tn extends Ur{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=di,r=di,a=ni,l=ls,o=ui,c=cr,d=Tn.DEFAULT_ANISOTROPY,u=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=dr(),this.name="",this.source=new ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Cr?Qt:Pr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kl:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kl:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?Cr:$f}set encoding(e){Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cr?Qt:Pr}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Xf;Tn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,n=0,r=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,d=c[0],u=c[4],h=c[8],f=c[1],g=c[5],y=c[9],S=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(y-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(y+p)<.1&&Math.abs(d+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,E=(g+1)/2,A=(m+1)/2,I=(u+f)/4,C=(h+S)/4,j=(y+p)/4;return b>E&&b>A?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=I/n,a=C/n):E>A?E<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),n=I/r,a=j/r):A<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),n=C/a,r=j/a),this.set(n,r,a,t),this}let w=Math.sqrt((p-y)*(p-y)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-y)/w,this.y=(h-S)/w,this.z=(f-u)/w,this.w=Math.acos((d+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $x extends Ur{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Qa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cr?Qt:Pr),this.texture=new Tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ih(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends $x{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rh extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eb extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,o){let c=n[r+0],d=n[r+1],u=n[r+2],h=n[r+3];const f=a[l+0],g=a[l+1],y=a[l+2],S=a[l+3];if(o===0){e[t+0]=c,e[t+1]=d,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=y,e[t+3]=S;return}if(h!==S||c!==f||d!==g||u!==y){let p=1-o;const m=c*f+d*g+u*y+h*S,w=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const A=Math.sqrt(b),I=Math.atan2(A,m*w);p=Math.sin(p*I)/A,o=Math.sin(o*I)/A}const E=o*w;if(c=c*p+f*E,d=d*p+g*E,u=u*p+y*E,h=h*p+S*E,p===1-o){const A=1/Math.sqrt(c*c+d*d+u*u+h*h);c*=A,d*=A,u*=A,h*=A}}e[t]=c,e[t+1]=d,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,l){const o=n[r],c=n[r+1],d=n[r+2],u=n[r+3],h=a[l],f=a[l+1],g=a[l+2],y=a[l+3];return e[t]=o*y+u*h+c*g-d*f,e[t+1]=c*y+u*f+d*h-o*g,e[t+2]=d*y+u*g+o*f-c*h,e[t+3]=u*y-o*h-c*f-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,l=e._order,o=Math.cos,c=Math.sin,d=o(n/2),u=o(r/2),h=o(a/2),f=c(n/2),g=c(r/2),y=c(a/2);switch(l){case"XYZ":this._x=f*u*h+d*g*y,this._y=d*g*h-f*u*y,this._z=d*u*y+f*g*h,this._w=d*u*h-f*g*y;break;case"YXZ":this._x=f*u*h+d*g*y,this._y=d*g*h-f*u*y,this._z=d*u*y-f*g*h,this._w=d*u*h+f*g*y;break;case"ZXY":this._x=f*u*h-d*g*y,this._y=d*g*h+f*u*y,this._z=d*u*y+f*g*h,this._w=d*u*h-f*g*y;break;case"ZYX":this._x=f*u*h-d*g*y,this._y=d*g*h+f*u*y,this._z=d*u*y-f*g*h,this._w=d*u*h+f*g*y;break;case"YZX":this._x=f*u*h+d*g*y,this._y=d*g*h+f*u*y,this._z=d*u*y-f*g*h,this._w=d*u*h-f*g*y;break;case"XZY":this._x=f*u*h-d*g*y,this._y=d*g*h-f*u*y,this._z=d*u*y+f*g*h,this._w=d*u*h+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],o=t[5],c=t[9],d=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-c)*g,this._y=(a-d)*g,this._z=(l-r)*g}else if(n>o&&n>h){const g=2*Math.sqrt(1+n-o-h);this._w=(u-c)/g,this._x=.25*g,this._y=(r+l)/g,this._z=(a+d)/g}else if(o>h){const g=2*Math.sqrt(1+o-n-h);this._w=(a-d)/g,this._x=(r+l)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+h-n-o);this._w=(l-r)/g,this._x=(a+d)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,o=t._x,c=t._y,d=t._z,u=t._w;return this._x=n*u+l*o+r*d-a*c,this._y=r*u+l*c+a*o-n*d,this._z=a*u+l*d+n*c-r*o,this._w=l*u-n*o-r*c-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let o=l*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*l+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(c),u=Math.atan2(d,o),h=Math.sin((1-t)*u)/d,f=Math.sin(t*u)/d;return this._w=l*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,n=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,o=e.z,c=e.w,d=c*t+l*r-o*n,u=c*n+o*t-a*r,h=c*r+a*n-l*t,f=-a*t-l*n-o*r;return this.x=d*c+f*-a+u*-o-h*-l,this.y=u*c+f*-l+h*-a-d*-o,this.z=h*c+f*-o+d*-l-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*l-n*c,this.z=n*o-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new ue,Bd=new Ir;class ms{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let l=0,o=a.count;l<o;l++)ki.fromBufferAttribute(a,l).applyMatrix4(e.matrixWorld),this.expandByPoint(ki)}else r.boundingBox===null&&r.computeBoundingBox(),Br.copy(r.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),ys.subVectors(this.max,Ua),zr.subVectors(e.a,Ua),Gr.subVectors(e.b,Ua),Hr.subVectors(e.c,Ua),tr.subVectors(Gr,zr),nr.subVectors(Hr,Gr),hr.subVectors(zr,Hr);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-hr.z,hr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,hr.z,0,-hr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-hr.y,hr.x,0];return!Jo(t,zr,Gr,Hr,ys)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,zr,Gr,Hr,ys))?!1:(Ss.crossVectors(tr,nr),t=[Ss.x,Ss.y,Ss.z],Jo(t,zr,Gr,Hr,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],ki=new ue,Br=new ms,zr=new ue,Gr=new ue,Hr=new ue,tr=new ue,nr=new ue,hr=new ue,Ua=new ue,ys=new ue,Ss=new ue,pr=new ue;function Jo(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){pr.fromArray(i,a);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),c=e.dot(pr),d=t.dot(pr),u=n.dot(pr);if(Math.max(-Math.max(c,d,u),Math.min(c,d,u))>o)return!1}return!0}const tb=new ms,ka=new ue,Qo=new ue;class uc{constructor(e=new ue,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tb.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ka,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Qo)),this.expandByPoint(ka.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new ue,$o=new ue,Ms=new ue,ir=new ue,el=new ue,ws=new ue,tl=new ue;class ah{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$o.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),ir.copy(this.origin).sub($o);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Ms),o=ir.dot(this.direction),c=-ir.dot(Ms),d=ir.lengthSq(),u=Math.abs(1-l*l);let h,f,g,y;if(u>0)if(h=l*c-o,f=l*o-c,y=a*u,h>=0)if(f>=-y)if(f<=y){const S=1/u;h*=S,f*=S,g=h*(h+l*f+2*o)+f*(l*h+f+2*c)+d}else f=a,h=Math.max(0,-(l*f+o)),g=-h*h+f*(f+2*c)+d;else f=-a,h=Math.max(0,-(l*f+o)),g=-h*h+f*(f+2*c)+d;else f<=-y?(h=Math.max(0,-(-l*a+o)),f=h>0?-a:Math.min(Math.max(-a,-c),a),g=-h*h+f*(f+2*c)+d):f<=y?(h=0,f=Math.min(Math.max(-a,-c),a),g=f*(f+2*c)+d):(h=Math.max(0,-(l*a+o)),f=h>0?a:Math.min(Math.max(-a,-c),a),g=-h*h+f*(f+2*c)+d);else f=l>0?-a:a,h=Math.max(0,-(l*f+o)),g=-h*h+f*(f+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($o).addScaledVector(Ms,f),g}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),r=Ni.dot(Ni)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),o=n-l,c=n+l;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,o,c;const d=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return d>=0?(n=(e.min.x-f.x)*d,r=(e.max.x-f.x)*d):(n=(e.max.x-f.x)*d,r=(e.min.x-f.x)*d),u>=0?(a=(e.min.y-f.y)*u,l=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,l=(e.min.y-f.y)*u),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,r,a){el.subVectors(t,e),ws.subVectors(n,e),tl.crossVectors(el,ws);let l=this.direction.dot(tl),o;if(l>0){if(r)return null;o=1}else if(l<0)o=-1,l=-l;else return null;ir.subVectors(this.origin,e);const c=o*this.direction.dot(ws.crossVectors(ir,ws));if(c<0)return null;const d=o*this.direction.dot(el.cross(ir));if(d<0||c+d>l)return null;const u=-o*ir.dot(tl);return u<0?null:this.at(u/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,t,n,r,a,l,o,c,d,u,h,f,g,y,S,p){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,o,c,d,u,h,f,g,y,S,p)}set(e,t,n,r,a,l,o,c,d,u,h,f,g,y,S,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=l,m[9]=o,m[13]=c,m[2]=d,m[6]=u,m[10]=h,m[14]=f,m[3]=g,m[7]=y,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),a=1/Vr.setFromMatrixColumn(e,1).length(),l=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),o=Math.sin(n),c=Math.cos(r),d=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=l*u,g=l*h,y=o*u,S=o*h;t[0]=c*u,t[4]=-c*h,t[8]=d,t[1]=g+y*d,t[5]=f-S*d,t[9]=-o*c,t[2]=S-f*d,t[6]=y+g*d,t[10]=l*c}else if(e.order==="YXZ"){const f=c*u,g=c*h,y=d*u,S=d*h;t[0]=f+S*o,t[4]=y*o-g,t[8]=l*d,t[1]=l*h,t[5]=l*u,t[9]=-o,t[2]=g*o-y,t[6]=S+f*o,t[10]=l*c}else if(e.order==="ZXY"){const f=c*u,g=c*h,y=d*u,S=d*h;t[0]=f-S*o,t[4]=-l*h,t[8]=y+g*o,t[1]=g+y*o,t[5]=l*u,t[9]=S-f*o,t[2]=-l*d,t[6]=o,t[10]=l*c}else if(e.order==="ZYX"){const f=l*u,g=l*h,y=o*u,S=o*h;t[0]=c*u,t[4]=y*d-g,t[8]=f*d+S,t[1]=c*h,t[5]=S*d+f,t[9]=g*d-y,t[2]=-d,t[6]=o*c,t[10]=l*c}else if(e.order==="YZX"){const f=l*c,g=l*d,y=o*c,S=o*d;t[0]=c*u,t[4]=S-f*h,t[8]=y*h+g,t[1]=h,t[5]=l*u,t[9]=-o*u,t[2]=-d*u,t[6]=g*h+y,t[10]=f-S*h}else if(e.order==="XZY"){const f=l*c,g=l*d,y=o*c,S=o*d;t[0]=c*u,t[4]=-h,t[8]=d*u,t[1]=f*h+S,t[5]=l*u,t[9]=g*h-y,t[2]=y*h-g,t[6]=o*u,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nb,e,ib)}lookAt(e,t,n){const r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),rr.crossVectors(n,Hn),rr.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),rr.crossVectors(n,Hn)),rr.normalize(),Es.crossVectors(Hn,rr),r[0]=rr.x,r[4]=Es.x,r[8]=Hn.x,r[1]=rr.y,r[5]=Es.y,r[9]=Hn.y,r[2]=rr.z,r[6]=Es.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],o=n[4],c=n[8],d=n[12],u=n[1],h=n[5],f=n[9],g=n[13],y=n[2],S=n[6],p=n[10],m=n[14],w=n[3],b=n[7],E=n[11],A=n[15],I=r[0],C=r[4],j=r[8],x=r[12],M=r[1],ie=r[5],H=r[9],N=r[13],W=r[2],q=r[6],ve=r[10],ae=r[14],le=r[3],me=r[7],G=r[11],F=r[15];return a[0]=l*I+o*M+c*W+d*le,a[4]=l*C+o*ie+c*q+d*me,a[8]=l*j+o*H+c*ve+d*G,a[12]=l*x+o*N+c*ae+d*F,a[1]=u*I+h*M+f*W+g*le,a[5]=u*C+h*ie+f*q+g*me,a[9]=u*j+h*H+f*ve+g*G,a[13]=u*x+h*N+f*ae+g*F,a[2]=y*I+S*M+p*W+m*le,a[6]=y*C+S*ie+p*q+m*me,a[10]=y*j+S*H+p*ve+m*G,a[14]=y*x+S*N+p*ae+m*F,a[3]=w*I+b*M+E*W+A*le,a[7]=w*C+b*ie+E*q+A*me,a[11]=w*j+b*H+E*ve+A*G,a[15]=w*x+b*N+E*ae+A*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],o=e[5],c=e[9],d=e[13],u=e[2],h=e[6],f=e[10],g=e[14],y=e[3],S=e[7],p=e[11],m=e[15];return y*(+a*c*h-r*d*h-a*o*f+n*d*f+r*o*g-n*c*g)+S*(+t*c*g-t*d*f+a*l*f-r*l*g+r*d*u-a*c*u)+p*(+t*d*h-t*o*g-a*l*h+n*l*g+a*o*u-n*d*u)+m*(-r*o*u-t*c*h+t*o*f+r*l*h-n*l*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],d=e[7],u=e[8],h=e[9],f=e[10],g=e[11],y=e[12],S=e[13],p=e[14],m=e[15],w=h*p*d-S*f*d+S*c*g-o*p*g-h*c*m+o*f*m,b=y*f*d-u*p*d-y*c*g+l*p*g+u*c*m-l*f*m,E=u*S*d-y*h*d+y*o*g-l*S*g-u*o*m+l*h*m,A=y*h*c-u*S*c-y*o*f+l*S*f+u*o*p-l*h*p,I=t*w+n*b+r*E+a*A;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=w*C,e[1]=(S*f*a-h*p*a-S*r*g+n*p*g+h*r*m-n*f*m)*C,e[2]=(o*p*a-S*c*a+S*r*d-n*p*d-o*r*m+n*c*m)*C,e[3]=(h*c*a-o*f*a-h*r*d+n*f*d+o*r*g-n*c*g)*C,e[4]=b*C,e[5]=(u*p*a-y*f*a+y*r*g-t*p*g-u*r*m+t*f*m)*C,e[6]=(y*c*a-l*p*a-y*r*d+t*p*d+l*r*m-t*c*m)*C,e[7]=(l*f*a-u*c*a+u*r*d-t*f*d-l*r*g+t*c*g)*C,e[8]=E*C,e[9]=(y*h*a-u*S*a-y*n*g+t*S*g+u*n*m-t*h*m)*C,e[10]=(l*S*a-y*o*a+y*n*d-t*S*d-l*n*m+t*o*m)*C,e[11]=(u*o*a-l*h*a-u*n*d+t*h*d+l*n*g-t*o*g)*C,e[12]=A*C,e[13]=(u*S*r-y*h*r+y*n*f-t*S*f-u*n*p+t*h*p)*C,e[14]=(y*o*r-l*S*r-y*n*c+t*S*c+l*n*p-t*o*p)*C,e[15]=(l*h*r-u*o*r+u*n*c-t*h*c-l*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,o=e.y,c=e.z,d=a*l,u=a*o;return this.set(d*l+n,d*o-r*c,d*c+r*o,0,d*o+r*c,u*o+n,u*c-r*l,0,d*c-r*o,u*c+r*l,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,o=t._z,c=t._w,d=a+a,u=l+l,h=o+o,f=a*d,g=a*u,y=a*h,S=l*u,p=l*h,m=o*h,w=c*d,b=c*u,E=c*h,A=n.x,I=n.y,C=n.z;return r[0]=(1-(S+m))*A,r[1]=(g+E)*A,r[2]=(y-b)*A,r[3]=0,r[4]=(g-E)*I,r[5]=(1-(f+m))*I,r[6]=(p+w)*I,r[7]=0,r[8]=(y+b)*C,r[9]=(p-w)*C,r[10]=(1-(f+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Vr.set(r[0],r[1],r[2]).length();const l=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);const d=1/a,u=1/l,h=1/o;return oi.elements[0]*=d,oi.elements[1]*=d,oi.elements[2]*=d,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,t.setFromRotationMatrix(oi),n.x=a,n.y=l,n.z=o,this}makePerspective(e,t,n,r,a,l,o=ji){const c=this.elements,d=2*a/(t-e),u=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let g,y;if(o===ji)g=-(l+a)/(l-a),y=-2*l*a/(l-a);else if(o===lo)g=-l/(l-a),y=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,l,o=ji){const c=this.elements,d=1/(t-e),u=1/(n-r),h=1/(l-a),f=(t+e)*d,g=(n+r)*u;let y,S;if(o===ji)y=(l+a)*h,S=-2*h;else if(o===lo)y=a*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=S,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new ue,oi=new ln,nb=new ue(0,0,0),ib=new ue(1,1,1),rr=new ue,Es=new ue,Hn=new ue,zd=new ln,Gd=new Ir;class yo{constructor(e=0,t=0,n=0,r=yo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],o=r[8],c=r[1],d=r[5],u=r[9],h=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yo.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rb=0;const Hd=new ue,Wr=new Ir,Oi=new ln,Ts=new ue,Na=new ue,ab=new ue,sb=new Ir,Vd=new ue(1,0,0),Wd=new ue(0,1,0),jd=new ue(0,0,1),ob={type:"added"},lb={type:"removed"};class An extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new ue,t=new yo,n=new Ir,r=new ue(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ln},normalMatrix:{value:new Dt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Na,Ts,this.up):Oi.lookAt(Ts,Na,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(Oi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ob)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const l=this.children[r].getObjectsByProperty(e,t);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,ab),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){const h=c[d];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=l(e.geometries),c=l(e.materials),d=l(e.textures),u=l(e.images),h=l(e.shapes),f=l(e.skeletons),g=l(e.animations),y=l(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=r,n;function l(o){const c=[];for(const d in o){const u=o[d];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}An.DEFAULT_UP=new ue(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new ue,Fi=new ue,nl=new ue,Bi=new ue,jr=new ue,Xr=new ue,Xd=new ue,il=new ue,rl=new ue,al=new ue;let As=!1;class ii{constructor(e=new ue,t=new ue,n=new ue){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),li.subVectors(e,t),r.cross(li);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){li.subVectors(r,t),Fi.subVectors(n,t),nl.subVectors(e,t);const l=li.dot(li),o=li.dot(Fi),c=li.dot(nl),d=Fi.dot(Fi),u=Fi.dot(nl),h=l*d-o*o;if(h===0)return a.set(-2,-1,-1);const f=1/h,g=(d*c-o*u)*f,y=(l*u-o*c)*f;return a.set(1-g-y,y,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bi),Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(e,t,n,r,a,l,o,c){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(e,t,n,r,a,l,o,c)}static getInterpolation(e,t,n,r,a,l,o,c){return this.getBarycoord(e,t,n,r,Bi),c.setScalar(0),c.addScaledVector(a,Bi.x),c.addScaledVector(l,Bi.y),c.addScaledVector(o,Bi.z),c}static isFrontFacing(e,t,n,r){return li.subVectors(n,t),Fi.subVectors(e,t),li.cross(Fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),li.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),ii.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,o;jr.subVectors(r,n),Xr.subVectors(a,n),il.subVectors(e,n);const c=jr.dot(il),d=Xr.dot(il);if(c<=0&&d<=0)return t.copy(n);rl.subVectors(e,r);const u=jr.dot(rl),h=Xr.dot(rl);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*d;if(f<=0&&c>=0&&u<=0)return l=c/(c-u),t.copy(n).addScaledVector(jr,l);al.subVectors(e,a);const g=jr.dot(al),y=Xr.dot(al);if(y>=0&&g<=y)return t.copy(a);const S=g*d-c*y;if(S<=0&&d>=0&&y<=0)return o=d/(d-y),t.copy(n).addScaledVector(Xr,o);const p=u*y-g*h;if(p<=0&&h-u>=0&&g-y>=0)return Xd.subVectors(a,r),o=(h-u)/(h-u+(g-y)),t.copy(r).addScaledVector(Xd,o);const m=1/(p+S+f);return l=S*m,o=f*m,t.copy(n).addScaledVector(jr,l).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let cb=0;class La extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=ua,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vf,this.blendDst=Wf,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const o in a){const c=a[o];delete c.metadata,l.push(c)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function sl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qn.workingColorSpace){if(e=Hx(e,1),t=Dn(t,0,1),n=Dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=sl(l,a,e+1/3),this.g=sl(l,a,e),this.b=sl(l,a,e-1/3)}return Qn.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],o=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=oh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Qn.fromWorkingColorSpace(En.copy(this),e),Math.round(Dn(En.r*255,0,255))*65536+Math.round(Dn(En.g*255,0,255))*256+Math.round(Dn(En.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qn.workingColorSpace){Qn.fromWorkingColorSpace(En.copy(this),t);const n=En.r,r=En.g,a=En.b,l=Math.max(n,r,a),o=Math.min(n,r,a);let c,d;const u=(o+l)/2;if(o===l)c=0,d=0;else{const h=l-o;switch(d=u<=.5?h/(l+o):h/(2-l-o),l){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=d,e.l=u,e}getRGB(e,t=Qn.workingColorSpace){return Qn.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Qt){Qn.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,r=En.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),ci.h+=e,ci.s+=t,ci.l+=n,this.setHSL(ci.h,ci.s,ci.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Rs);const n=Xo(ci.h,Rs.h,t),r=Xo(ci.s,Rs.s,t),a=Xo(ci.l,Rs.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Bt;Bt.NAMES=oh;class lh extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new ue,Cs=new xt;class vi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRange={offset:0,count:-1},this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ch extends vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dh extends vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yi extends vi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let db=0;const Zn=new ln,ol=new An,qr=new ue,Vn=new ms,Oa=new ms,bn=new ue;class $i extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(th(e)?dh:ch)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Dt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Vn.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ue,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const o=t[a];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(Vn.min,Oa.min),Vn.expandByPoint(bn),bn.addVectors(Vn.max,Oa.max),Vn.expandByPoint(bn)):(Vn.expandByPoint(Oa.min),Vn.expandByPoint(Oa.max))}Vn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)bn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(bn));if(t)for(let a=0,l=t.length;a<l;a++){const o=t[a],c=this.morphTargetsRelative;for(let d=0,u=o.count;d<u;d++)bn.fromBufferAttribute(o,d),c&&(qr.fromBufferAttribute(e,d),bn.add(qr)),r=Math.max(r,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,d=[],u=[];for(let M=0;M<o;M++)d[M]=new ue,u[M]=new ue;const h=new ue,f=new ue,g=new ue,y=new xt,S=new xt,p=new xt,m=new ue,w=new ue;function b(M,ie,H){h.fromArray(r,M*3),f.fromArray(r,ie*3),g.fromArray(r,H*3),y.fromArray(l,M*2),S.fromArray(l,ie*2),p.fromArray(l,H*2),f.sub(h),g.sub(h),S.sub(y),p.sub(y);const N=1/(S.x*p.y-p.x*S.y);isFinite(N)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(g,-S.y).multiplyScalar(N),w.copy(g).multiplyScalar(S.x).addScaledVector(f,-p.x).multiplyScalar(N),d[M].add(m),d[ie].add(m),d[H].add(m),u[M].add(w),u[ie].add(w),u[H].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let M=0,ie=E.length;M<ie;++M){const H=E[M],N=H.start,W=H.count;for(let q=N,ve=N+W;q<ve;q+=3)b(n[q+0],n[q+1],n[q+2])}const A=new ue,I=new ue,C=new ue,j=new ue;function x(M){C.fromArray(a,M*3),j.copy(C);const ie=d[M];A.copy(ie),A.sub(C.multiplyScalar(C.dot(ie))).normalize(),I.crossVectors(j,ie);const N=I.dot(u[M])<0?-1:1;c[M*4]=A.x,c[M*4+1]=A.y,c[M*4+2]=A.z,c[M*4+3]=N}for(let M=0,ie=E.length;M<ie;++M){const H=E[M],N=H.start,W=H.count;for(let q=N,ve=N+W;q<ve;q+=3)x(n[q+0]),x(n[q+1]),x(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const r=new ue,a=new ue,l=new ue,o=new ue,c=new ue,d=new ue,u=new ue,h=new ue;if(e)for(let f=0,g=e.count;f<g;f+=3){const y=e.getX(f+0),S=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,p),u.subVectors(l,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,S),d.fromBufferAttribute(n,p),o.add(u),c.add(u),d.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(p,d.x,d.y,d.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),u.subVectors(l,a),h.subVectors(r,a),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(o,c){const d=o.array,u=o.itemSize,h=o.normalized,f=new d.constructor(c.length*u);let g=0,y=0;for(let S=0,p=c.length;S<p;S++){o.isInterleavedBufferAttribute?g=c[S]*o.data.stride+o.offset:g=c[S]*u;for(let m=0;m<u;m++)f[y++]=d[g++]}return new vi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],d=e(c,n);t.setAttribute(o,d)}const a=this.morphAttributes;for(const o in a){const c=[],d=a[o];for(let u=0,h=d.length;u<h;u++){const f=d[u],g=e(f,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let o=0,c=l.length;o<c;o++){const d=l[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],u=[];for(let h=0,f=d.length;h<f;h++){const g=d[h];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const u=r[d];this.setAttribute(d,u.clone(t))}const a=e.morphAttributes;for(const d in a){const u=[],h=a[d];for(let f=0,g=h.length;f<g;f++)u.push(h[f].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,u=l.length;d<u;d++){const h=l[d];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new ln,mr=new ah,Ps=new uc,Yd=new ue,Yr=new ue,Kr=new ue,Zr=new ue,ll=new ue,Ls=new ue,Is=new xt,Ds=new xt,Us=new xt,Kd=new ue,Zd=new ue,Jd=new ue,ks=new ue,Ns=new ue;class Yt extends An{constructor(e=new $i,t=new lh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ls.set(0,0,0);for(let c=0,d=a.length;c<d;c++){const u=o[c],h=a[c];u!==0&&(ll.fromBufferAttribute(h,e),l?Ls.addScaledVector(ll,u):Ls.addScaledVector(ll.sub(t),u))}t.add(Ls)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(a),mr.copy(e.ray).recast(e.near),!(Ps.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ps,Yd)===null||mr.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(a).invert(),mr.copy(e.ray).applyMatrix4(qd),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,o=a.index,c=a.attributes.position,d=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,f=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(l))for(let y=0,S=f.length;y<S;y++){const p=f[y],m=l[p.materialIndex],w=Math.max(p.start,g.start),b=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let E=w,A=b;E<A;E+=3){const I=o.getX(E),C=o.getX(E+1),j=o.getX(E+2);r=Os(this,m,e,n,d,u,h,I,C,j),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let p=y,m=S;p<m;p+=3){const w=o.getX(p),b=o.getX(p+1),E=o.getX(p+2);r=Os(this,l,e,n,d,u,h,w,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(l))for(let y=0,S=f.length;y<S;y++){const p=f[y],m=l[p.materialIndex],w=Math.max(p.start,g.start),b=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let E=w,A=b;E<A;E+=3){const I=E,C=E+1,j=E+2;r=Os(this,m,e,n,d,u,h,I,C,j),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let p=y,m=S;p<m;p+=3){const w=p,b=p+1,E=p+2;r=Os(this,l,e,n,d,u,h,w,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function ub(i,e,t,n,r,a,l,o){let c;if(e.side===zn?c=n.intersectTriangle(l,a,r,!0,o):c=n.intersectTriangle(r,a,l,e.side===Ci,o),c===null)return null;Ns.copy(o),Ns.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Ns);return d<t.near||d>t.far?null:{distance:d,point:Ns.clone(),object:i}}function Os(i,e,t,n,r,a,l,o,c,d){i.getVertexPosition(o,Yr),i.getVertexPosition(c,Kr),i.getVertexPosition(d,Zr);const u=ub(i,e,t,n,Yr,Kr,Zr,ks);if(u){r&&(Is.fromBufferAttribute(r,o),Ds.fromBufferAttribute(r,c),Us.fromBufferAttribute(r,d),u.uv=ii.getInterpolation(ks,Yr,Kr,Zr,Is,Ds,Us,new xt)),a&&(Is.fromBufferAttribute(a,o),Ds.fromBufferAttribute(a,c),Us.fromBufferAttribute(a,d),u.uv1=ii.getInterpolation(ks,Yr,Kr,Zr,Is,Ds,Us,new xt),u.uv2=u.uv1),l&&(Kd.fromBufferAttribute(l,o),Zd.fromBufferAttribute(l,c),Jd.fromBufferAttribute(l,d),u.normal=ii.getInterpolation(ks,Yr,Kr,Zr,Kd,Zd,Jd,new ue),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:d,normal:new ue,materialIndex:0};ii.getNormal(Yr,Kr,Zr,h.normal),u.face=h}return u}class sn extends $i{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const o=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const c=[],d=[],u=[],h=[];let f=0,g=0;y("z","y","x",-1,-1,n,t,e,l,a,0),y("z","y","x",1,-1,n,t,-e,l,a,1),y("x","z","y",1,1,e,n,t,r,l,2),y("x","z","y",1,-1,e,n,-t,r,l,3),y("x","y","z",1,-1,e,t,n,r,a,4),y("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Yi(d,3)),this.setAttribute("normal",new Yi(u,3)),this.setAttribute("uv",new Yi(h,2));function y(S,p,m,w,b,E,A,I,C,j,x){const M=E/C,ie=A/j,H=E/2,N=A/2,W=I/2,q=C+1,ve=j+1;let ae=0,le=0;const me=new ue;for(let G=0;G<ve;G++){const F=G*ie-N;for(let ne=0;ne<q;ne++){const Ee=ne*M-H;me[S]=Ee*w,me[p]=F*b,me[m]=W,d.push(me.x,me.y,me.z),me[S]=0,me[p]=0,me[m]=I>0?1:-1,u.push(me.x,me.y,me.z),h.push(ne/C),h.push(1-G/j),ae+=1}}for(let G=0;G<j;G++)for(let F=0;F<C;F++){const ne=f+F+q*G,Ee=f+F+q*(G+1),we=f+(F+1)+q*(G+1),Ce=f+(F+1)+q*G;c.push(ne,Ee,Ce),c.push(Ee,we,Ce),le+=6}o.addGroup(g,le,x),g+=le,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ea(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ln(i){const e={};for(let t=0;t<i.length;t++){const n=Ea(i[t]);for(const r in n)e[r]=n[r]}return e}function fb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uh(i){return i.getRenderTarget()===null?i.outputColorSpace:Pi}const fh={clone:Ea,merge:Ln};var hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hb,this.fragmentShader=pb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=fb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hh extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends hh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,d=l.fullHeight;a+=l.offsetX*r/c,t-=l.offsetY*n/d,r*=l.width/c,n*=l.height/d}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jr=-90,Qr=1;class mb extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new jn(Jr,Qr,e,t);r.layers=this.layers,this.add(r);const a=new jn(Jr,Qr,e,t);a.layers=this.layers,this.add(a);const l=new jn(Jr,Qr,e,t);l.layers=this.layers,this.add(l);const o=new jn(Jr,Qr,e,t);o.layers=this.layers,this.add(o);const c=new jn(Jr,Qr,e,t);c.layers=this.layers,this.add(c);const d=new jn(Jr,Qr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,o,c]=t;for(const d of t)this.remove(d);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,d]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,d),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ph extends Tn{constructor(e,t,n,r,a,l,o,c,d,u){e=e!==void 0?e:[],t=t!==void 0?t:ya,super(e,t,n,r,a,l,o,c,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vb extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Qa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cr?Qt:Pr),this.texture=new ph(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sn(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:Ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:qi});a.uniforms.tEquirect.value=t;const l=new Yt(r,a),o=t.minFilter;return t.minFilter===ls&&(t.minFilter=ni),new mb(1,10,this).update(e,l),t.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const cl=new ue,gb=new ue,_b=new Dt;class ar{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=cl.subVectors(n,t).cross(gb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_b.getNormalMatrix(e),r=this.coplanarPoint(cl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new uc,Fs=new ue;class fc{constructor(e=new ar,t=new ar,n=new ar,r=new ar,a=new ar,l=new ar){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ji){const n=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],y=r[9],S=r[10],p=r[11],m=r[12],w=r[13],b=r[14],E=r[15];if(n[0].setComponents(c-a,f-d,p-g,E-m).normalize(),n[1].setComponents(c+a,f+d,p+g,E+m).normalize(),n[2].setComponents(c+l,f+u,p+y,E+w).normalize(),n[3].setComponents(c-l,f-u,p-y,E-w).normalize(),n[4].setComponents(c-o,f-h,p-S,E-b).normalize(),t===ji)n[5].setComponents(c+o,f+h,p+S,E+b).normalize();else if(t===lo)n[5].setComponents(o,h,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mh(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function xb(i,e){const t=e.isWebGL2,n=new WeakMap;function r(d,u){const h=d.array,f=d.usage,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),d.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(h instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version}}function a(d,u,h){const f=u.array,g=u.updateRange;i.bindBuffer(h,d),g.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):i.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const u=n.get(d);u&&(i.deleteBuffer(u.buffer),n.delete(d))}function c(d,u){if(d.isGLBufferAttribute){const f=n.get(d);(!f||f.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const h=n.get(d);h===void 0?n.set(d,r(d,u)):h.version<d.version&&(a(h.buffer,d,u),h.version=d.version)}return{get:l,remove:o,update:c}}class hc extends $i{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,o=Math.floor(n),c=Math.floor(r),d=o+1,u=c+1,h=e/o,f=t/c,g=[],y=[],S=[],p=[];for(let m=0;m<u;m++){const w=m*f-l;for(let b=0;b<d;b++){const E=b*h-a;y.push(E,-w,0),S.push(0,0,1),p.push(b/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<o;w++){const b=w+d*m,E=w+d*(m+1),A=w+1+d*(m+1),I=w+1+d*m;g.push(b,E,I),g.push(E,A,I)}this.setIndex(g),this.setAttribute("position",new Yi(y,3)),this.setAttribute("normal",new Yi(S,3)),this.setAttribute("uv",new Yi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yb=`#ifdef USE_ALPHAHASH
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
#endif`,Sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ib=`#ifdef USE_BUMPMAP
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gb=`#define PI 3.141592653589793
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
} // validated`,Hb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vb=`vec3 transformedNormal = objectNormal;
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
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a0=`#ifdef USE_GRADIENTMAP
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
}`,s0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,o0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,g0=`struct PhysicalMaterial {
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
}`,_0=`
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
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
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ny=`float getShadowMask() {
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
}`,iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uy=`#ifdef USE_TRANSMISSION
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
#endif`,fy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
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
}`,wy=`#if DEPTH_PACKING == 3200
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
}`,Ey=`#define DISTANCE
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
}`,Ty=`#define DISTANCE
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
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`uniform float scale;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Dy=`#define LAMBERT
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
}`,Uy=`#define LAMBERT
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
}`,ky=`#define MATCAP
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
}`,Ny=`#define MATCAP
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
}`,Oy=`#define NORMAL
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
}`,Fy=`#define NORMAL
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
}`,By=`#define PHONG
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
}`,zy=`#define PHONG
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
}`,Gy=`#define STANDARD
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
}`,Hy=`#define STANDARD
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
}`,Vy=`#define TOON
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
}`,Wy=`#define TOON
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
}`,jy=`uniform float size;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,Yy=`uniform vec3 color;
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
}`,Ky=`uniform float rotation;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:bb,alphahash_pars_fragment:yb,alphamap_fragment:Sb,alphamap_pars_fragment:Mb,alphatest_fragment:wb,alphatest_pars_fragment:Eb,aomap_fragment:Tb,aomap_pars_fragment:Ab,begin_vertex:Rb,beginnormal_vertex:Cb,bsdfs:Pb,iridescence_fragment:Lb,bumpmap_pars_fragment:Ib,clipping_planes_fragment:Db,clipping_planes_pars_fragment:Ub,clipping_planes_pars_vertex:kb,clipping_planes_vertex:Nb,color_fragment:Ob,color_pars_fragment:Fb,color_pars_vertex:Bb,color_vertex:zb,common:Gb,cube_uv_reflection_fragment:Hb,defaultnormal_vertex:Vb,displacementmap_pars_vertex:Wb,displacementmap_vertex:jb,emissivemap_fragment:Xb,emissivemap_pars_fragment:qb,colorspace_fragment:Yb,colorspace_pars_fragment:Kb,envmap_fragment:Zb,envmap_common_pars_fragment:Jb,envmap_pars_fragment:Qb,envmap_pars_vertex:$b,envmap_physical_pars_fragment:u0,envmap_vertex:e0,fog_vertex:t0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:r0,gradientmap_pars_fragment:a0,lightmap_fragment:s0,lightmap_pars_fragment:o0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:d0,lights_toon_fragment:f0,lights_toon_pars_fragment:h0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:v0,lights_physical_pars_fragment:g0,lights_fragment_begin:_0,lights_fragment_maps:x0,lights_fragment_end:b0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:w0,map_fragment:E0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphcolor_vertex:L0,morphnormal_vertex:I0,morphtarget_pars_vertex:D0,morphtarget_vertex:U0,normal_fragment_begin:k0,normal_fragment_maps:N0,normal_pars_fragment:O0,normal_pars_vertex:F0,normal_vertex:B0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:W0,opaque_fragment:j0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:K0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:$0,shadowmap_pars_vertex:ey,shadowmap_vertex:ty,shadowmask_pars_fragment:ny,skinbase_vertex:iy,skinning_pars_vertex:ry,skinning_vertex:ay,skinnormal_vertex:sy,specularmap_fragment:oy,specularmap_pars_fragment:ly,tonemapping_fragment:cy,tonemapping_pars_fragment:dy,transmission_fragment:uy,transmission_pars_fragment:fy,uv_pars_fragment:hy,uv_pars_vertex:py,uv_vertex:my,worldpos_vertex:vy,background_vert:gy,background_frag:_y,backgroundCube_vert:xy,backgroundCube_frag:by,cube_vert:yy,cube_frag:Sy,depth_vert:My,depth_frag:wy,distanceRGBA_vert:Ey,distanceRGBA_frag:Ty,equirect_vert:Ay,equirect_frag:Ry,linedashed_vert:Cy,linedashed_frag:Py,meshbasic_vert:Ly,meshbasic_frag:Iy,meshlambert_vert:Dy,meshlambert_frag:Uy,meshmatcap_vert:ky,meshmatcap_frag:Ny,meshnormal_vert:Oy,meshnormal_frag:Fy,meshphong_vert:By,meshphong_frag:zy,meshphysical_vert:Gy,meshphysical_frag:Hy,meshtoon_vert:Vy,meshtoon_frag:Wy,points_vert:jy,points_frag:Xy,shadow_vert:qy,shadow_frag:Yy,sprite_vert:Ky,sprite_frag:Zy},et={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},yi={basic:{uniforms:Ln([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Ln([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Ln([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Ln([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Ln([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Ln([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Ln([et.points,et.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Ln([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Ln([et.common,et.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Ln([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Ln([et.sprite,et.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Ln([et.common,et.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Ln([et.lights,et.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};yi.physical={uniforms:Ln([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Bs={r:0,b:0,g:0};function Jy(i,e,t,n,r,a,l){const o=new Bt(0);let c=a===!0?0:1,d,u,h=null,f=0,g=null;function y(p,m){let w=!1,b=m.isScene===!0?m.background:null;b&&b.isTexture&&(b=(m.backgroundBlurriness>0?t:e).get(b)),b===null?S(o,c):b&&b.isColor&&(S(b,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,l):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===xo)?(u===void 0&&(u=new Yt(new sn(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Ea(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=b.colorSpace!==Qt,(h!==b||f!==b.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,g=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Yt(new hc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Ea(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=b.colorSpace!==Qt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,g=i.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null))}function S(p,m){p.getRGB(Bs,uh(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,m,l)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),c=m,S(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,S(o,c)},render:y}}function Qy(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,o={},c=p(null);let d=c,u=!1;function h(W,q,ve,ae,le){let me=!1;if(l){const G=S(ae,ve,q);d!==G&&(d=G,g(d.object)),me=m(W,ae,ve,le),me&&w(W,ae,ve,le)}else{const G=q.wireframe===!0;(d.geometry!==ae.id||d.program!==ve.id||d.wireframe!==G)&&(d.geometry=ae.id,d.program=ve.id,d.wireframe=G,me=!0)}le!==null&&t.update(le,i.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,j(W,q,ve,ae),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function g(W){return n.isWebGL2?i.bindVertexArray(W):a.bindVertexArrayOES(W)}function y(W){return n.isWebGL2?i.deleteVertexArray(W):a.deleteVertexArrayOES(W)}function S(W,q,ve){const ae=ve.wireframe===!0;let le=o[W.id];le===void 0&&(le={},o[W.id]=le);let me=le[q.id];me===void 0&&(me={},le[q.id]=me);let G=me[ae];return G===void 0&&(G=p(f()),me[ae]=G),G}function p(W){const q=[],ve=[],ae=[];for(let le=0;le<r;le++)q[le]=0,ve[le]=0,ae[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ve,attributeDivisors:ae,object:W,attributes:{},index:null}}function m(W,q,ve,ae){const le=d.attributes,me=q.attributes;let G=0;const F=ve.getAttributes();for(const ne in F)if(F[ne].location>=0){const we=le[ne];let Ce=me[ne];if(Ce===void 0&&(ne==="instanceMatrix"&&W.instanceMatrix&&(Ce=W.instanceMatrix),ne==="instanceColor"&&W.instanceColor&&(Ce=W.instanceColor)),we===void 0||we.attribute!==Ce||Ce&&we.data!==Ce.data)return!0;G++}return d.attributesNum!==G||d.index!==ae}function w(W,q,ve,ae){const le={},me=q.attributes;let G=0;const F=ve.getAttributes();for(const ne in F)if(F[ne].location>=0){let we=me[ne];we===void 0&&(ne==="instanceMatrix"&&W.instanceMatrix&&(we=W.instanceMatrix),ne==="instanceColor"&&W.instanceColor&&(we=W.instanceColor));const Ce={};Ce.attribute=we,we&&we.data&&(Ce.data=we.data),le[ne]=Ce,G++}d.attributes=le,d.attributesNum=G,d.index=ae}function b(){const W=d.newAttributes;for(let q=0,ve=W.length;q<ve;q++)W[q]=0}function E(W){A(W,0)}function A(W,q){const ve=d.newAttributes,ae=d.enabledAttributes,le=d.attributeDivisors;ve[W]=1,ae[W]===0&&(i.enableVertexAttribArray(W),ae[W]=1),le[W]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,q),le[W]=q)}function I(){const W=d.newAttributes,q=d.enabledAttributes;for(let ve=0,ae=q.length;ve<ae;ve++)q[ve]!==W[ve]&&(i.disableVertexAttribArray(ve),q[ve]=0)}function C(W,q,ve,ae,le,me,G){G===!0?i.vertexAttribIPointer(W,q,ve,le,me):i.vertexAttribPointer(W,q,ve,ae,le,me)}function j(W,q,ve,ae){if(n.isWebGL2===!1&&(W.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const le=ae.attributes,me=ve.getAttributes(),G=q.defaultAttributeValues;for(const F in me){const ne=me[F];if(ne.location>=0){let Ee=le[F];if(Ee===void 0&&(F==="instanceMatrix"&&W.instanceMatrix&&(Ee=W.instanceMatrix),F==="instanceColor"&&W.instanceColor&&(Ee=W.instanceColor)),Ee!==void 0){const we=Ee.normalized,Ce=Ee.itemSize,Oe=t.get(Ee);if(Oe===void 0)continue;const We=Oe.buffer,ze=Oe.type,Me=Oe.bytesPerElement,Be=n.isWebGL2===!0&&(ze===i.INT||ze===i.UNSIGNED_INT||Ee.gpuType===qf);if(Ee.isInterleavedBufferAttribute){const Fe=Ee.data,z=Fe.stride,it=Ee.offset;if(Fe.isInstancedInterleavedBuffer){for(let ke=0;ke<ne.locationSize;ke++)A(ne.location+ke,Fe.meshPerAttribute);W.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let ke=0;ke<ne.locationSize;ke++)E(ne.location+ke);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ke=0;ke<ne.locationSize;ke++)C(ne.location+ke,Ce/ne.locationSize,ze,we,z*Me,(it+Ce/ne.locationSize*ke)*Me,Be)}else{if(Ee.isInstancedBufferAttribute){for(let Fe=0;Fe<ne.locationSize;Fe++)A(ne.location+Fe,Ee.meshPerAttribute);W.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Fe=0;Fe<ne.locationSize;Fe++)E(ne.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Fe=0;Fe<ne.locationSize;Fe++)C(ne.location+Fe,Ce/ne.locationSize,ze,we,Ce*Me,Ce/ne.locationSize*Fe*Me,Be)}}else if(G!==void 0){const we=G[F];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv(ne.location,we);break;case 3:i.vertexAttrib3fv(ne.location,we);break;case 4:i.vertexAttrib4fv(ne.location,we);break;default:i.vertexAttrib1fv(ne.location,we)}}}}I()}function x(){H();for(const W in o){const q=o[W];for(const ve in q){const ae=q[ve];for(const le in ae)y(ae[le].object),delete ae[le];delete q[ve]}delete o[W]}}function M(W){if(o[W.id]===void 0)return;const q=o[W.id];for(const ve in q){const ae=q[ve];for(const le in ae)y(ae[le].object),delete ae[le];delete q[ve]}delete o[W.id]}function ie(W){for(const q in o){const ve=o[q];if(ve[W.id]===void 0)continue;const ae=ve[W.id];for(const le in ae)y(ae[le].object),delete ae[le];delete ve[W.id]}}function H(){N(),u=!0,d!==c&&(d=c,g(d.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:N,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:ie,initAttributes:b,enableAttribute:E,disableUnusedAttributes:I}}function $y(i,e,t,n){const r=n.isWebGL2;let a;function l(d){a=d}function o(d,u){i.drawArrays(a,d,u),t.update(u,a,1)}function c(d,u,h){if(h===0)return;let f,g;if(r)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](a,d,u,h),t.update(u,a,h)}this.setMode=l,this.render=o,this.renderInstances=c}function e1(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const d=l||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,E=l||e.has("OES_texture_float"),A=b&&E,I=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:w,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:I}}function t1(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new ar,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||n!==0||r;return r=f,n=h.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,g){const y=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||y===null||y.length===0||a&&!p)a?u(null):d();else{const w=a?0:n,b=w*4;let E=m.clippingState||null;c.value=E,E=u(y,f,b,g);for(let A=0;A!==b;++A)E[A]=t[A];m.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,g,y){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=c.value,y!==!0||p===null){const m=g+S*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,E=g;b!==S;++b,E+=4)l.copy(h[b]).applyMatrix4(w,o),l.normal.toArray(p,E),p[E+3]=l.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function n1(i){let e=new WeakMap;function t(l,o){return o===oo?l.mapping=ya:o===Ul&&(l.mapping=Sa),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const o=l.mapping;if(o===oo||o===Ul)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const d=new vb(c.height/2);return d.fromEquirectangularTexture(i,l),e.set(l,d),l.addEventListener("dispose",r),t(d.texture,l.mapping)}else return null}}return l}function r(l){const o=l.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class vh extends hh{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,l,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const aa=4,Qd=[.125,.215,.35,.446,.526,.582],br=20,dl=new vh,$d=new Bt;let ul=null;const _r=(1+Math.sqrt(5))/2,$r=1/_r,eu=[new ue(1,1,1),new ue(-1,1,1),new ue(1,1,-1),new ue(-1,1,-1),new ue(0,_r,$r),new ue(0,_r,-$r),new ue($r,0,_r),new ue(-$r,0,_r),new ue(_r,$r,0),new ue(-_r,$r,0)];class tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ul=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul),e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ya||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Ma,format:ui,colorSpace:Pi,depthBuffer:!1},r=nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i1(a)),this._blurMaterial=r1(a,e,t)}return r}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,r){const o=new jn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($d),u.toneMapping=lr,u.autoClear=!1;const g=new lh({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),y=new Yt(new sn,g);let S=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,S=!0):(g.color.copy($d),S=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(o.up.set(0,c[m],0),o.lookAt(d[m],0,0)):w===1?(o.up.set(0,0,c[m]),o.lookAt(0,d[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,d[m]));const b=this._cubeSize;zs(r,w*b,m>2?b:0,b,b),u.setRenderTarget(r),S&&u.render(y,o),u.render(e,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ya||e.mapping===Sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new Yt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;zs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=eu[(r-1)%eu.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,o){const c=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yt(this._lodPlanes[r],d),f=d.uniforms,g=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*br-1),S=a/y,p=isFinite(a)?1+Math.floor(u*S):br;p>br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);const m=[];let w=0;for(let C=0;C<br;++C){const j=C/S,x=Math.exp(-j*j/2);m.push(x),C===0?w+=x:C<p&&(w+=2*x)}for(let C=0;C<m.length;C++)m[C]=m[C]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=l==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=y,f.mipInt.value=b-n;const E=this._sizeLods[r],A=3*E*(r>b-aa?r-b+aa:0),I=4*(this._cubeSize-E);zs(t,A,I,3*E,2*E),c.setRenderTarget(t),c.render(h,dl)}}function i1(i){const e=[],t=[],n=[];let r=i;const a=i-aa+1+Qd.length;for(let l=0;l<a;l++){const o=Math.pow(2,r);t.push(o);let c=1/o;l>i-aa?c=Qd[l-i+aa-1]:l===0&&(c=0),n.push(c);const d=1/(o-2),u=-d,h=1+d,f=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,y=6,S=3,p=2,m=1,w=new Float32Array(S*y*g),b=new Float32Array(p*y*g),E=new Float32Array(m*y*g);for(let I=0;I<g;I++){const C=I%3*2/3-1,j=I>2?0:-1,x=[C,j,0,C+2/3,j,0,C+2/3,j+1,0,C,j,0,C+2/3,j+1,0,C,j+1,0];w.set(x,S*y*I),b.set(f,p*y*I);const M=[I,I,I,I,I,I];E.set(M,m*y*I)}const A=new $i;A.setAttribute("position",new vi(w,S)),A.setAttribute("uv",new vi(b,p)),A.setAttribute("faceIndex",new vi(E,m)),e.push(A),r>aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nu(i,e,t){const n=new Zi(i,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function r1(i,e,t){const n=new Float32Array(br),r=new ue(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pc(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function iu(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ru(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function a1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===oo||c===Ul,u=c===ya||c===Sa;if(d||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new tu(i)),h=d?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(d&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new tu(i));const f=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let c=0;const d=6;for(let u=0;u<d;u++)o[u]!==void 0&&c++;return c===d}function a(o){const c=o.target;c.removeEventListener("dispose",a);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function s1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function o1(i,e,t,n){const r={},a=new WeakMap;function l(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const S=f.morphAttributes[y];for(let p=0,m=S.length;p<m;p++)e.remove(S[p])}f.removeEventListener("dispose",l),delete r[f.id];const g=a.get(f);g&&(e.remove(g),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",l),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const y in f)e.update(f[y],i.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const S=g[y];for(let p=0,m=S.length;p<m;p++)e.update(S[p],i.ARRAY_BUFFER)}}function d(h){const f=[],g=h.index,y=h.attributes.position;let S=0;if(g!==null){const w=g.array;S=g.version;for(let b=0,E=w.length;b<E;b+=3){const A=w[b+0],I=w[b+1],C=w[b+2];f.push(A,I,I,C,C,A)}}else if(y!==void 0){const w=y.array;S=y.version;for(let b=0,E=w.length/3-1;b<E;b+=3){const A=b+0,I=b+1,C=b+2;f.push(A,I,I,C,C,A)}}else return;const p=new(th(f)?dh:ch)(f,1);p.version=S;const m=a.get(h);m&&e.remove(m),a.set(h,p)}function u(h){const f=a.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&d(h)}else d(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function l1(i,e,t,n){const r=n.isWebGL2;let a;function l(f){a=f}let o,c;function d(f){o=f.type,c=f.bytesPerElement}function u(f,g){i.drawElements(a,g,o,f*c),t.update(g,a,1)}function h(f,g,y){if(y===0)return;let S,p;if(r)S=i,p="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[p](a,g,o,f*c,y),t.update(g,a,y)}this.setMode=l,this.setIndex=d,this.render=u,this.renderInstances=h}function c1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,o){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function d1(i,e){return i[0]-e[0]}function u1(i,e){return Math.abs(e[1])-Math.abs(i[1])}function f1(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new $t,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function c(d,u,h){const f=d.morphTargetInfluences;if(e.isWebGL2===!0){const y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=y!==void 0?y.length:0;let p=a.get(u);if(p===void 0||p.count!==S){let q=function(){N.dispose(),a.delete(u),u.removeEventListener("dispose",q)};var g=q;p!==void 0&&p.texture.dispose();const b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],j=u.morphAttributes.color||[];let x=0;b===!0&&(x=1),E===!0&&(x=2),A===!0&&(x=3);let M=u.attributes.position.count*x,ie=1;M>e.maxTextureSize&&(ie=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const H=new Float32Array(M*ie*4*S),N=new rh(H,M,ie,S);N.type=Wi,N.needsUpdate=!0;const W=x*4;for(let ve=0;ve<S;ve++){const ae=I[ve],le=C[ve],me=j[ve],G=M*ie*4*ve;for(let F=0;F<ae.count;F++){const ne=F*W;b===!0&&(l.fromBufferAttribute(ae,F),H[G+ne+0]=l.x,H[G+ne+1]=l.y,H[G+ne+2]=l.z,H[G+ne+3]=0),E===!0&&(l.fromBufferAttribute(le,F),H[G+ne+4]=l.x,H[G+ne+5]=l.y,H[G+ne+6]=l.z,H[G+ne+7]=0),A===!0&&(l.fromBufferAttribute(me,F),H[G+ne+8]=l.x,H[G+ne+9]=l.y,H[G+ne+10]=l.z,H[G+ne+11]=me.itemSize===4?l.w:1)}}p={count:S,texture:N,size:new xt(M,ie)},a.set(u,p),u.addEventListener("dispose",q)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];const w=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const y=f===void 0?0:f.length;let S=n[u.id];if(S===void 0||S.length!==y){S=[];for(let E=0;E<y;E++)S[E]=[E,0];n[u.id]=S}for(let E=0;E<y;E++){const A=S[E];A[0]=E,A[1]=f[E]}S.sort(u1);for(let E=0;E<8;E++)E<y&&S[E][1]?(o[E][0]=S[E][0],o[E][1]=S[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(d1);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let w=0;for(let E=0;E<8;E++){const A=o[E],I=A[0],C=A[1];I!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+E)!==p[I]&&u.setAttribute("morphTarget"+E,p[I]),m&&u.getAttribute("morphNormal"+E)!==m[I]&&u.setAttribute("morphNormal"+E,m[I]),r[E]=C,w+=C):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),m&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const b=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function h1(i,e,t,n){let r=new WeakMap;function a(c){const d=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function l(){r=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:l}}const gh=new Tn,_h=new rh,xh=new eb,bh=new ph,au=[],su=[],ou=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Ia(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=au[r];if(a===void 0&&(a=new Float32Array(r),au[r]=a),e!==0){n.toArray(a,0);for(let l=1,o=0;l!==e;++l)o+=t,i[l].toArray(a,o)}return a}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function So(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function p1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function m1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function v1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function g1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function _1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;cu.set(n),i.uniformMatrix2fv(this.addr,!1,cu),gn(t,n)}}function x1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;lu.set(n),i.uniformMatrix3fv(this.addr,!1,lu),gn(t,n)}}function b1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),gn(t,n)}}function y1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function S1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function M1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function E1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function T1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function A1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function R1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function C1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||gh,r)}function P1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||xh,r)}function L1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bh,r)}function I1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_h,r)}function D1(i){switch(i){case 5126:return p1;case 35664:return m1;case 35665:return v1;case 35666:return g1;case 35674:return _1;case 35675:return x1;case 35676:return b1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return w1;case 5125:return E1;case 36294:return T1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return I1}}function U1(i,e){i.uniform1fv(this.addr,e)}function k1(i,e){const t=Ia(e,this.size,2);i.uniform2fv(this.addr,t)}function N1(i,e){const t=Ia(e,this.size,3);i.uniform3fv(this.addr,t)}function O1(i,e){const t=Ia(e,this.size,4);i.uniform4fv(this.addr,t)}function F1(i,e){const t=Ia(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function B1(i,e){const t=Ia(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function z1(i,e){const t=Ia(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function G1(i,e){i.uniform1iv(this.addr,e)}function H1(i,e){i.uniform2iv(this.addr,e)}function V1(i,e){i.uniform3iv(this.addr,e)}function W1(i,e){i.uniform4iv(this.addr,e)}function j1(i,e){i.uniform1uiv(this.addr,e)}function X1(i,e){i.uniform2uiv(this.addr,e)}function q1(i,e){i.uniform3uiv(this.addr,e)}function Y1(i,e){i.uniform4uiv(this.addr,e)}function K1(i,e,t){const n=this.cache,r=e.length,a=So(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||gh,a[l])}function Z1(i,e,t){const n=this.cache,r=e.length,a=So(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||xh,a[l])}function J1(i,e,t){const n=this.cache,r=e.length,a=So(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||bh,a[l])}function Q1(i,e,t){const n=this.cache,r=e.length,a=So(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||_h,a[l])}function $1(i){switch(i){case 5126:return U1;case 35664:return k1;case 35665:return N1;case 35666:return O1;case 35674:return F1;case 35675:return B1;case 35676:return z1;case 5124:case 35670:return G1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return W1;case 5125:return j1;case 36294:return X1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return Q1}}class eS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=D1(t.type)}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=$1(t.type)}}class nS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function du(i,e){i.seq.push(e),i.map[e.id]=e}function iS(i,e,t){const n=i.name,r=n.length;for(fl.lastIndex=0;;){const a=fl.exec(n),l=fl.lastIndex;let o=a[1];const c=a[2]==="]",d=a[3];if(c&&(o=o|0),d===void 0||d==="["&&l+2===r){du(t,d===void 0?new eS(o,i,e):new tS(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new nS(o),du(t,h)),t=h}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);iS(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function uu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let rS=0;function aS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const o=l+1;n.push(`${o===e?">":" "} ${o}: ${t[l]}`)}return n.join(`
`)}function sS(i){switch(i){case Pi:return["Linear","( value )"];case Qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function fu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+aS(i.getShaderSource(e),l)}else return r}function oS(i,e){const t=sS(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function lS(i,e){let t;switch(e){case mx:t="Linear";break;case vx:t="Reinhard";break;case gx:t="OptimizedCineon";break;case _x:t="ACESFilmic";break;case xx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qa).join(`
`)}function dS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:o}}return t}function qa(i){return i!==""}function hu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(fS,pS)}const hS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pS(i,e){let t=Ct[e];if(t===void 0){const n=hS.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}const mS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(mS,vS)}function vS(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function vu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function _S(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ya:case Sa:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xS(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Sa&&(e="ENVMAP_MODE_REFRACTION"),e}function bS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jf:e="ENVMAP_BLENDING_MULTIPLY";break;case hx:e="ENVMAP_BLENDING_MIX";break;case px:e="ENVMAP_BLENDING_ADD";break}return e}function yS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function SS(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,o=t.fragmentShader;const c=gS(t),d=_S(t),u=xS(t),h=bS(t),f=yS(t),g=t.isWebGL2?"":cS(t),y=dS(a),S=r.createProgram();let p,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(qa).join(`
`),p.length>0&&(p+=`
`),m=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(qa).join(`
`),m.length>0&&(m+=`
`)):(p=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),m=[g,vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Ct.tonemapping_pars_fragment:"",t.toneMapping!==lr?lS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,oS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),l=Gl(l),l=hu(l,t),l=pu(l,t),o=Gl(o),o=hu(o,t),o=pu(o,t),l=mu(l),o=mu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=w+p+l,E=w+m+o,A=uu(r,r.VERTEX_SHADER,b),I=uu(r,r.FRAGMENT_SHADER,E);if(r.attachShader(S,A),r.attachShader(S,I),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),i.debug.checkShaderErrors){const x=r.getProgramInfoLog(S).trim(),M=r.getShaderInfoLog(A).trim(),ie=r.getShaderInfoLog(I).trim();let H=!0,N=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,A,I);else{const W=fu(r,A,"vertex"),q=fu(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+W+`
`+q)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(M===""||ie==="")&&(N=!1);N&&(this.diagnostics={runnable:H,programLog:x,vertexShader:{log:M,prefix:p},fragmentShader:{log:ie,prefix:m}})}r.deleteShader(A),r.deleteShader(I);let C;this.getUniforms=function(){return C===void 0&&(C=new Js(r,S)),C};let j;return this.getAttributes=function(){return j===void 0&&(j=uS(r,S)),j},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=I,this}let MS=0;class wS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ES(e),t.set(e,n)),n}}class ES{constructor(e){this.id=MS++,this.code=e,this.usedTimes=0}}function TS(i,e,t,n,r,a,l){const o=new sh,c=new wS,d=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return x===0?"uv":`uv${x}`}function p(x,M,ie,H,N){const W=H.fog,q=N.geometry,ve=x.isMeshStandardMaterial?H.environment:null,ae=(x.isMeshStandardMaterial?t:e).get(x.envMap||ve),le=ae&&ae.mapping===xo?ae.image.height:null,me=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const G=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,F=G!==void 0?G.length:0;let ne=0;q.morphAttributes.position!==void 0&&(ne=1),q.morphAttributes.normal!==void 0&&(ne=2),q.morphAttributes.color!==void 0&&(ne=3);let Ee,we,Ce,Oe;if(me){const ft=yi[me];Ee=ft.vertexShader,we=ft.fragmentShader}else Ee=x.vertexShader,we=x.fragmentShader,c.update(x),Ce=c.getVertexShaderID(x),Oe=c.getFragmentShaderID(x);const We=i.getRenderTarget(),ze=N.isInstancedMesh===!0,Me=!!x.map,Be=!!x.matcap,Fe=!!ae,z=!!x.aoMap,it=!!x.lightMap,ke=!!x.bumpMap,ge=!!x.normalMap,Le=!!x.displacementMap,Ge=!!x.emissiveMap,He=!!x.metalnessMap,Ye=!!x.roughnessMap,Qe=x.anisotropy>0,Mt=x.clearcoat>0,dt=x.iridescence>0,D=x.sheen>0,T=x.transmission>0,Z=Qe&&!!x.anisotropyMap,Se=Mt&&!!x.clearcoatMap,X=Mt&&!!x.clearcoatNormalMap,fe=Mt&&!!x.clearcoatRoughnessMap,de=dt&&!!x.iridescenceMap,pe=dt&&!!x.iridescenceThicknessMap,$=D&&!!x.sheenColorMap,L=D&&!!x.sheenRoughnessMap,V=!!x.specularMap,he=!!x.specularColorMap,B=!!x.specularIntensityMap,ee=T&&!!x.transmissionMap,be=T&&!!x.thicknessMap,Ie=!!x.gradientMap,k=!!x.alphaMap,Re=x.alphaTest>0,re=!!x.alphaHash,Ae=!!x.extensions,Pe=!!q.attributes.uv1,tt=!!q.attributes.uv2,Je=!!q.attributes.uv3;let Ze=lr;return x.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:u,shaderID:me,shaderType:x.type,shaderName:x.name,vertexShader:Ee,fragmentShader:we,defines:x.defines,customVertexShaderID:Ce,customFragmentShaderID:Oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,instancing:ze,instancingColor:ze&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:We===null?i.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Pi,map:Me,matcap:Be,envMap:Fe,envMapMode:Fe&&ae.mapping,envMapCubeUVHeight:le,aoMap:z,lightMap:it,bumpMap:ke,normalMap:ge,displacementMap:f&&Le,emissiveMap:Ge,normalMapObjectSpace:ge&&x.normalMapType===Ix,normalMapTangentSpace:ge&&x.normalMapType===eh,metalnessMap:He,roughnessMap:Ye,anisotropy:Qe,anisotropyMap:Z,clearcoat:Mt,clearcoatMap:Se,clearcoatNormalMap:X,clearcoatRoughnessMap:fe,iridescence:dt,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:D,sheenColorMap:$,sheenRoughnessMap:L,specularMap:V,specularColorMap:he,specularIntensityMap:B,transmission:T,transmissionMap:ee,thicknessMap:be,gradientMap:Ie,opaque:x.transparent===!1&&x.blending===ua,alphaMap:k,alphaTest:Re,alphaHash:re,combine:x.combine,mapUv:Me&&S(x.map.channel),aoMapUv:z&&S(x.aoMap.channel),lightMapUv:it&&S(x.lightMap.channel),bumpMapUv:ke&&S(x.bumpMap.channel),normalMapUv:ge&&S(x.normalMap.channel),displacementMapUv:Le&&S(x.displacementMap.channel),emissiveMapUv:Ge&&S(x.emissiveMap.channel),metalnessMapUv:He&&S(x.metalnessMap.channel),roughnessMapUv:Ye&&S(x.roughnessMap.channel),anisotropyMapUv:Z&&S(x.anisotropyMap.channel),clearcoatMapUv:Se&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:X&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:$&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:L&&S(x.sheenRoughnessMap.channel),specularMapUv:V&&S(x.specularMap.channel),specularColorMapUv:he&&S(x.specularColorMap.channel),specularIntensityMapUv:B&&S(x.specularIntensityMap.channel),transmissionMapUv:ee&&S(x.transmissionMap.channel),thicknessMapUv:be&&S(x.thicknessMap.channel),alphaMapUv:k&&S(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ge||Qe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:tt,vertexUv3s:Je,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(Me||k),fog:!!W,useFog:x.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&ie.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&x.map.colorSpace===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ae&&x.extensions.derivatives===!0,extensionFragDepth:Ae&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const ie in x.defines)M.push(ie),M.push(x.defines[ie]);return x.isRawShaderMaterial===!1&&(w(M,x),b(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function w(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function E(x){const M=y[x.type];let ie;if(M){const H=yi[M];ie=fh.clone(H.uniforms)}else ie=x.uniforms;return ie}function A(x,M){let ie;for(let H=0,N=d.length;H<N;H++){const W=d[H];if(W.cacheKey===M){ie=W,++ie.usedTimes;break}}return ie===void 0&&(ie=new SS(i,M,x,a),d.push(ie)),ie}function I(x){if(--x.usedTimes===0){const M=d.indexOf(x);d[M]=d[d.length-1],d.pop(),x.destroy()}}function C(x){c.remove(x)}function j(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:A,releaseProgram:I,releaseShaderCache:C,programs:d,dispose:j}}function AS(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function RS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _u(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(h,f,g,y,S,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:g,groupOrder:y,renderOrder:h.renderOrder,z:S,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=g,m.groupOrder=y,m.renderOrder=h.renderOrder,m.z=S,m.group=p),e++,m}function o(h,f,g,y,S,p){const m=l(h,f,g,y,S,p);g.transmission>0?n.push(m):g.transparent===!0?r.push(m):t.push(m)}function c(h,f,g,y,S,p){const m=l(h,f,g,y,S,p);g.transmission>0?n.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function d(h,f){t.length>1&&t.sort(h||RS),n.length>1&&n.sort(f||gu),r.length>1&&r.sort(f||gu)}function u(){for(let h=e,f=i.length;h<f;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:u,sort:d}}function CS(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new _u,i.set(n,[l])):r>=a.length?(l=new _u,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function PS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new Bt};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return i[e.id]=t,t}}}function LS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let IS=0;function DS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function US(i,e){const t=new PS,n=LS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new ue);const a=new ue,l=new ln,o=new ln;function c(u,h){let f=0,g=0,y=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let S=0,p=0,m=0,w=0,b=0,E=0,A=0,I=0,C=0,j=0;u.sort(DS);const x=h===!0?Math.PI:1;for(let ie=0,H=u.length;ie<H;ie++){const N=u[ie],W=N.color,q=N.intensity,ve=N.distance,ae=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=W.r*q*x,g+=W.g*q*x,y+=W.b*q*x;else if(N.isLightProbe)for(let le=0;le<9;le++)r.probe[le].addScaledVector(N.sh.coefficients[le],q);else if(N.isDirectionalLight){const le=t.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){const me=N.shadow,G=n.get(N);G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,r.directionalShadow[S]=G,r.directionalShadowMap[S]=ae,r.directionalShadowMatrix[S]=N.shadow.matrix,E++}r.directional[S]=le,S++}else if(N.isSpotLight){const le=t.get(N);le.position.setFromMatrixPosition(N.matrixWorld),le.color.copy(W).multiplyScalar(q*x),le.distance=ve,le.coneCos=Math.cos(N.angle),le.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),le.decay=N.decay,r.spot[m]=le;const me=N.shadow;if(N.map&&(r.spotLightMap[C]=N.map,C++,me.updateMatrices(N),N.castShadow&&j++),r.spotLightMatrix[m]=me.matrix,N.castShadow){const G=n.get(N);G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,r.spotShadow[m]=G,r.spotShadowMap[m]=ae,I++}m++}else if(N.isRectAreaLight){const le=t.get(N);le.color.copy(W).multiplyScalar(q),le.halfWidth.set(N.width*.5,0,0),le.halfHeight.set(0,N.height*.5,0),r.rectArea[w]=le,w++}else if(N.isPointLight){const le=t.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity*x),le.distance=N.distance,le.decay=N.decay,N.castShadow){const me=N.shadow,G=n.get(N);G.shadowBias=me.bias,G.shadowNormalBias=me.normalBias,G.shadowRadius=me.radius,G.shadowMapSize=me.mapSize,G.shadowCameraNear=me.camera.near,G.shadowCameraFar=me.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=ae,r.pointShadowMatrix[p]=N.shadow.matrix,A++}r.point[p]=le,p++}else if(N.isHemisphereLight){const le=t.get(N);le.skyColor.copy(N.color).multiplyScalar(q*x),le.groundColor.copy(N.groundColor).multiplyScalar(q*x),r.hemi[b]=le,b++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=et.LTC_FLOAT_1,r.rectAreaLTC2=et.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=et.LTC_HALF_1,r.rectAreaLTC2=et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=y;const M=r.hash;(M.directionalLength!==S||M.pointLength!==p||M.spotLength!==m||M.rectAreaLength!==w||M.hemiLength!==b||M.numDirectionalShadows!==E||M.numPointShadows!==A||M.numSpotShadows!==I||M.numSpotMaps!==C)&&(r.directional.length=S,r.spot.length=m,r.rectArea.length=w,r.point.length=p,r.hemi.length=b,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=I+C-j,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=j,M.directionalLength=S,M.pointLength=p,M.spotLength=m,M.rectAreaLength=w,M.hemiLength=b,M.numDirectionalShadows=E,M.numPointShadows=A,M.numSpotShadows=I,M.numSpotMaps=C,r.version=IS++)}function d(u,h){let f=0,g=0,y=0,S=0,p=0;const m=h.matrixWorldInverse;for(let w=0,b=u.length;w<b;w++){const E=u[w];if(E.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(m),f++}else if(E.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(m),y++}else if(E.isRectAreaLight){const A=r.rectArea[S];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),o.identity(),l.copy(E.matrixWorld),l.premultiply(m),o.extractRotation(l),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),S++}else if(E.isPointLight){const A=r.point[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(m),g++}else if(E.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:c,setupView:d,state:r}}function xu(i,e){const t=new US(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(h){n.push(h)}function o(h){r.push(h)}function c(h){t.setup(n,h)}function d(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:d,pushLight:l,pushShadow:o}}function kS(i,e){let t=new WeakMap;function n(a,l=0){const o=t.get(a);let c;return o===void 0?(c=new xu(i,e),t.set(a,[c])):l>=o.length?(c=new xu(i,e),o.push(c)):c=o[l],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class NS extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Px,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OS extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BS=`uniform sampler2D shadow_pass;
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
}`;function zS(i,e,t){let n=new fc;const r=new xt,a=new xt,l=new $t,o=new NS({depthPacking:Lx}),c=new OS,d={},u=t.maxTextureSize,h={[Ci]:zn,[zn]:Ci,[ri]:ri},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:FS,fragmentShader:BS}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const y=new $i;y.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Yt(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hf;let m=this.type;this.render=function(A,I,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const j=i.getRenderTarget(),x=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),ie=i.state;ie.setBlending(qi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const H=m!==zi&&this.type===zi,N=m===zi&&this.type!==zi;for(let W=0,q=A.length;W<q;W++){const ve=A[W],ae=ve.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",ve,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;r.copy(ae.mapSize);const le=ae.getFrameExtents();if(r.multiply(le),a.copy(ae.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/le.x),r.x=a.x*le.x,ae.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/le.y),r.y=a.y*le.y,ae.mapSize.y=a.y)),ae.map===null||H===!0||N===!0){const G=this.type!==zi?{minFilter:tn,magFilter:tn}:{};ae.map!==null&&ae.map.dispose(),ae.map=new Zi(r.x,r.y,G),ae.map.texture.name=ve.name+".shadowMap",ae.camera.updateProjectionMatrix()}i.setRenderTarget(ae.map),i.clear();const me=ae.getViewportCount();for(let G=0;G<me;G++){const F=ae.getViewport(G);l.set(a.x*F.x,a.y*F.y,a.x*F.z,a.y*F.w),ie.viewport(l),ae.updateMatrices(ve,G),n=ae.getFrustum(),E(I,C,ae.camera,ve,this.type)}ae.isPointLightShadow!==!0&&this.type===zi&&w(ae,C),ae.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(j,x,M)};function w(A,I){const C=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,C,f,S,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,C,g,S,null)}function b(A,I,C,j){let x=null;const M=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)x=M;else if(x=C.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ie=x.uuid,H=I.uuid;let N=d[ie];N===void 0&&(N={},d[ie]=N);let W=N[H];W===void 0&&(W=x.clone(),N[H]=W),x=W}if(x.visible=I.visible,x.wireframe=I.wireframe,j===zi?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:h[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const ie=i.properties.get(x);ie.light=C}return x}function E(A,I,C,j,x){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===zi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const H=e.update(A),N=A.material;if(Array.isArray(N)){const W=H.groups;for(let q=0,ve=W.length;q<ve;q++){const ae=W[q],le=N[ae.materialIndex];if(le&&le.visible){const me=b(A,le,j,x);i.renderBufferDirect(C,null,H,me,A,ae)}}}else if(N.visible){const W=b(A,N,j,x);i.renderBufferDirect(C,null,H,W,A,null)}}const ie=A.children;for(let H=0,N=ie.length;H<N;H++)E(ie[H],I,C,j,x)}}function GS(i,e,t){const n=t.isWebGL2;function r(){let k=!1;const Re=new $t;let re=null;const Ae=new $t(0,0,0,0);return{setMask:function(Pe){re!==Pe&&!k&&(i.colorMask(Pe,Pe,Pe,Pe),re=Pe)},setLocked:function(Pe){k=Pe},setClear:function(Pe,tt,Je,Ze,lt){lt===!0&&(Pe*=Ze,tt*=Ze,Je*=Ze),Re.set(Pe,tt,Je,Ze),Ae.equals(Re)===!1&&(i.clearColor(Pe,tt,Je,Ze),Ae.copy(Re))},reset:function(){k=!1,re=null,Ae.set(-1,0,0,0)}}}function a(){let k=!1,Re=null,re=null,Ae=null;return{setTest:function(Pe){Pe?We(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Pe){Re!==Pe&&!k&&(i.depthMask(Pe),Re=Pe)},setFunc:function(Pe){if(re!==Pe){switch(Pe){case sx:i.depthFunc(i.NEVER);break;case ox:i.depthFunc(i.ALWAYS);break;case lx:i.depthFunc(i.LESS);break;case Dl:i.depthFunc(i.LEQUAL);break;case cx:i.depthFunc(i.EQUAL);break;case dx:i.depthFunc(i.GEQUAL);break;case ux:i.depthFunc(i.GREATER);break;case fx:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Pe}},setLocked:function(Pe){k=Pe},setClear:function(Pe){Ae!==Pe&&(i.clearDepth(Pe),Ae=Pe)},reset:function(){k=!1,Re=null,re=null,Ae=null}}}function l(){let k=!1,Re=null,re=null,Ae=null,Pe=null,tt=null,Je=null,Ze=null,lt=null;return{setTest:function(ft){k||(ft?We(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(ft){Re!==ft&&!k&&(i.stencilMask(ft),Re=ft)},setFunc:function(ft,ct,mt){(re!==ft||Ae!==ct||Pe!==mt)&&(i.stencilFunc(ft,ct,mt),re=ft,Ae=ct,Pe=mt)},setOp:function(ft,ct,mt){(tt!==ft||Je!==ct||Ze!==mt)&&(i.stencilOp(ft,ct,mt),tt=ft,Je=ct,Ze=mt)},setLocked:function(ft){k=ft},setClear:function(ft){lt!==ft&&(i.clearStencil(ft),lt=ft)},reset:function(){k=!1,Re=null,re=null,Ae=null,Pe=null,tt=null,Je=null,Ze=null,lt=null}}}const o=new r,c=new a,d=new l,u=new WeakMap,h=new WeakMap;let f={},g={},y=new WeakMap,S=[],p=null,m=!1,w=null,b=null,E=null,A=null,I=null,C=null,j=null,x=!1,M=null,ie=null,H=null,N=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ve=!1,ae=0;const le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(le)[1]),ve=ae>=1):le.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ve=ae>=2);let me=null,G={};const F=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),Ee=new $t().fromArray(F),we=new $t().fromArray(ne);function Ce(k,Re,re,Ae){const Pe=new Uint8Array(4),tt=i.createTexture();i.bindTexture(k,tt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<re;Je++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(Re,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Re+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return tt}const Oe={};Oe[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Oe[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),We(i.DEPTH_TEST),c.setFunc(Dl),Le(!1),Ge(rd),We(i.CULL_FACE),ke(qi);function We(k){f[k]!==!0&&(i.enable(k),f[k]=!0)}function ze(k){f[k]!==!1&&(i.disable(k),f[k]=!1)}function Me(k,Re){return g[k]!==Re?(i.bindFramebuffer(k,Re),g[k]=Re,n&&(k===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Re),k===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Re)),!0):!1}function Be(k,Re){let re=S,Ae=!1;if(k)if(re=y.get(Re),re===void 0&&(re=[],y.set(Re,re)),k.isWebGLMultipleRenderTargets){const Pe=k.texture;if(re.length!==Pe.length||re[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Je=Pe.length;tt<Je;tt++)re[tt]=i.COLOR_ATTACHMENT0+tt;re.length=Pe.length,Ae=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,Ae=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,Ae=!0);Ae&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Fe(k){return p!==k?(i.useProgram(k),p=k,!0):!1}const z={[ra]:i.FUNC_ADD,[K_]:i.FUNC_SUBTRACT,[Z_]:i.FUNC_REVERSE_SUBTRACT};if(n)z[ld]=i.MIN,z[cd]=i.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(z[ld]=k.MIN_EXT,z[cd]=k.MAX_EXT)}const it={[J_]:i.ZERO,[Q_]:i.ONE,[$_]:i.SRC_COLOR,[Vf]:i.SRC_ALPHA,[ax]:i.SRC_ALPHA_SATURATE,[ix]:i.DST_COLOR,[tx]:i.DST_ALPHA,[ex]:i.ONE_MINUS_SRC_COLOR,[Wf]:i.ONE_MINUS_SRC_ALPHA,[rx]:i.ONE_MINUS_DST_COLOR,[nx]:i.ONE_MINUS_DST_ALPHA};function ke(k,Re,re,Ae,Pe,tt,Je,Ze){if(k===qi){m===!0&&(ze(i.BLEND),m=!1);return}if(m===!1&&(We(i.BLEND),m=!0),k!==Y_){if(k!==w||Ze!==x){if((b!==ra||I!==ra)&&(i.blendEquation(i.FUNC_ADD),b=ra,I=ra),Ze)switch(k){case ua:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFunc(i.ONE,i.ONE);break;case sd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case od:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ua:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case od:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}E=null,A=null,C=null,j=null,w=k,x=Ze}return}Pe=Pe||Re,tt=tt||re,Je=Je||Ae,(Re!==b||Pe!==I)&&(i.blendEquationSeparate(z[Re],z[Pe]),b=Re,I=Pe),(re!==E||Ae!==A||tt!==C||Je!==j)&&(i.blendFuncSeparate(it[re],it[Ae],it[tt],it[Je]),E=re,A=Ae,C=tt,j=Je),w=k,x=!1}function ge(k,Re){k.side===ri?ze(i.CULL_FACE):We(i.CULL_FACE);let re=k.side===zn;Re&&(re=!re),Le(re),k.blending===ua&&k.transparent===!1?ke(qi):ke(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),o.setMask(k.colorWrite);const Ae=k.stencilWrite;d.setTest(Ae),Ae&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?We(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function Ge(k){k!==j_?(We(i.CULL_FACE),k!==ie&&(k===rd?i.cullFace(i.BACK):k===X_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),ie=k}function He(k){k!==H&&(ve&&i.lineWidth(k),H=k)}function Ye(k,Re,re){k?(We(i.POLYGON_OFFSET_FILL),(N!==Re||W!==re)&&(i.polygonOffset(Re,re),N=Re,W=re)):ze(i.POLYGON_OFFSET_FILL)}function Qe(k){k?We(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function Mt(k){k===void 0&&(k=i.TEXTURE0+q-1),me!==k&&(i.activeTexture(k),me=k)}function dt(k,Re,re){re===void 0&&(me===null?re=i.TEXTURE0+q-1:re=me);let Ae=G[re];Ae===void 0&&(Ae={type:void 0,texture:void 0},G[re]=Ae),(Ae.type!==k||Ae.texture!==Re)&&(me!==re&&(i.activeTexture(re),me=re),i.bindTexture(k,Re||Oe[k]),Ae.type=k,Ae.texture=Re)}function D(){const k=G[me];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function L(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function V(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(k){Ee.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ee.copy(k))}function B(k){we.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),we.copy(k))}function ee(k,Re){let re=h.get(Re);re===void 0&&(re=new WeakMap,h.set(Re,re));let Ae=re.get(k);Ae===void 0&&(Ae=i.getUniformBlockIndex(Re,k.name),re.set(k,Ae))}function be(k,Re){const Ae=h.get(Re).get(k);u.get(Re)!==Ae&&(i.uniformBlockBinding(Re,Ae,k.__bindingPointIndex),u.set(Re,Ae))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},me=null,G={},g={},y=new WeakMap,S=[],p=null,m=!1,w=null,b=null,E=null,A=null,I=null,C=null,j=null,x=!1,M=null,ie=null,H=null,N=null,W=null,Ee.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:We,disable:ze,bindFramebuffer:Me,drawBuffers:Be,useProgram:Fe,setBlending:ke,setMaterial:ge,setFlipSided:Le,setCullFace:Ge,setLineWidth:He,setPolygonOffset:Ye,setScissorTest:Qe,activeTexture:Mt,bindTexture:dt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:Z,texImage2D:L,texImage3D:V,updateUBOMapping:ee,uniformBlockBinding:be,texStorage2D:pe,texStorage3D:$,texSubImage2D:Se,texSubImage3D:X,compressedTexSubImage2D:fe,compressedTexSubImage3D:de,scissor:he,viewport:B,reset:Ie}}function HS(i,e,t,n,r,a,l){const o=r.isWebGL2,c=r.maxTextures,d=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let S;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,T){return m?new OffscreenCanvas(D,T):co("canvas")}function b(D,T,Z,Se){let X=1;if((D.width>Se||D.height>Se)&&(X=Se/Math.max(D.width,D.height)),X<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const fe=T?zl:Math.floor,de=fe(X*D.width),pe=fe(X*D.height);S===void 0&&(S=w(de,pe));const $=Z?w(de,pe):S;return $.width=de,$.height=pe,$.getContext("2d").drawImage(D,0,0,de,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+de+"x"+pe+")."),$}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function E(D){return Od(D.width)&&Od(D.height)}function A(D){return o?!1:D.wrapS!==di||D.wrapT!==di||D.minFilter!==tn&&D.minFilter!==ni}function I(D,T){return D.generateMipmaps&&T&&D.minFilter!==tn&&D.minFilter!==ni}function C(D){i.generateMipmap(D)}function j(D,T,Z,Se,X=!1){if(o===!1)return T;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=T;return T===i.RED&&(Z===i.FLOAT&&(fe=i.R32F),Z===i.HALF_FLOAT&&(fe=i.R16F),Z===i.UNSIGNED_BYTE&&(fe=i.R8)),T===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(fe=i.R8UI),Z===i.UNSIGNED_SHORT&&(fe=i.R16UI),Z===i.UNSIGNED_INT&&(fe=i.R32UI),Z===i.BYTE&&(fe=i.R8I),Z===i.SHORT&&(fe=i.R16I),Z===i.INT&&(fe=i.R32I)),T===i.RG&&(Z===i.FLOAT&&(fe=i.RG32F),Z===i.HALF_FLOAT&&(fe=i.RG16F),Z===i.UNSIGNED_BYTE&&(fe=i.RG8)),T===i.RGBA&&(Z===i.FLOAT&&(fe=i.RGBA32F),Z===i.HALF_FLOAT&&(fe=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(fe=Se===Qt&&X===!1?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)),(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function x(D,T,Z){return I(D,Z)===!0||D.isFramebufferTexture&&D.minFilter!==tn&&D.minFilter!==ni?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function M(D){return D===tn||D===dd||D===Bo?i.NEAREST:i.LINEAR}function ie(D){const T=D.target;T.removeEventListener("dispose",ie),N(T),T.isVideoTexture&&y.delete(T)}function H(D){const T=D.target;T.removeEventListener("dispose",H),q(T)}function N(D){const T=n.get(D);if(T.__webglInit===void 0)return;const Z=D.source,Se=p.get(Z);if(Se){const X=Se[T.__cacheKey];X.usedTimes--,X.usedTimes===0&&W(D),Object.keys(Se).length===0&&p.delete(Z)}n.remove(D)}function W(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const Z=D.source,Se=p.get(Z);delete Se[T.__cacheKey],l.memory.textures--}function q(D){const T=D.texture,Z=n.get(D),Se=n.get(T);if(Se.__webglTexture!==void 0&&(i.deleteTexture(Se.__webglTexture),l.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(Z.__webglFramebuffer[X]))for(let fe=0;fe<Z.__webglFramebuffer[X].length;fe++)i.deleteFramebuffer(Z.__webglFramebuffer[X][fe]);else i.deleteFramebuffer(Z.__webglFramebuffer[X]);Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer[X])}else{if(Array.isArray(Z.__webglFramebuffer))for(let X=0;X<Z.__webglFramebuffer.length;X++)i.deleteFramebuffer(Z.__webglFramebuffer[X]);else i.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let X=0;X<Z.__webglColorRenderbuffer.length;X++)Z.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(Z.__webglColorRenderbuffer[X]);Z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let X=0,fe=T.length;X<fe;X++){const de=n.get(T[X]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),l.memory.textures--),n.remove(T[X])}n.remove(T),n.remove(D)}let ve=0;function ae(){ve=0}function le(){const D=ve;return D>=c&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+c),ve+=1,D}function me(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function G(D,T){const Z=n.get(D);if(D.isVideoTexture&&Mt(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const Se=D.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Z,D,T);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+T)}function F(D,T){const Z=n.get(D);if(D.version>0&&Z.__version!==D.version){Me(Z,D,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+T)}function ne(D,T){const Z=n.get(D);if(D.version>0&&Z.__version!==D.version){Me(Z,D,T);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+T)}function Ee(D,T){const Z=n.get(D);if(D.version>0&&Z.__version!==D.version){Be(Z,D,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+T)}const we={[kl]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Nl]:i.MIRRORED_REPEAT},Ce={[tn]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[Bo]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[bx]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Oe={[Ux]:i.NEVER,[Gx]:i.ALWAYS,[kx]:i.LESS,[Ox]:i.LEQUAL,[Nx]:i.EQUAL,[zx]:i.GEQUAL,[Fx]:i.GREATER,[Bx]:i.NOTEQUAL};function We(D,T,Z){if(Z?(i.texParameteri(D,i.TEXTURE_WRAP_S,we[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,we[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,we[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Ce[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Ce[T.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==di||T.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,M(T.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,M(T.minFilter)),T.minFilter!==tn&&T.minFilter!==ni&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Se=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===tn||T.minFilter!==Bo&&T.minFilter!==ls||T.type===Wi&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Ma&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(D,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ze(D,T){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",ie));const Se=T.source;let X=p.get(Se);X===void 0&&(X={},p.set(Se,X));const fe=me(T);if(fe!==D.__cacheKey){X[fe]===void 0&&(X[fe]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),X[fe].usedTimes++;const de=X[D.__cacheKey];de!==void 0&&(X[D.__cacheKey].usedTimes--,de.usedTimes===0&&W(T)),D.__cacheKey=fe,D.__webglTexture=X[fe].texture}return Z}function Me(D,T,Z){let Se=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Se=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Se=i.TEXTURE_3D);const X=ze(D,T),fe=T.source;t.bindTexture(Se,D.__webglTexture,i.TEXTURE0+Z);const de=n.get(fe);if(fe.version!==de.__version||X===!0){t.activeTexture(i.TEXTURE0+Z),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const pe=A(T)&&E(T.image)===!1;let $=b(T.image,pe,!1,u);$=dt(T,$);const L=E($)||o,V=a.convert(T.format,T.colorSpace);let he=a.convert(T.type),B=j(T.internalFormat,V,he,T.colorSpace,T.isVideoTexture);We(Se,T,L);let ee;const be=T.mipmaps,Ie=o&&T.isVideoTexture!==!0,k=de.__version===void 0||X===!0,Re=x(T,$,L);if(T.isDepthTexture)B=i.DEPTH_COMPONENT,o?T.type===Wi?B=i.DEPTH_COMPONENT32F:T.type===sr?B=i.DEPTH_COMPONENT24:T.type===Ar?B=i.DEPTH24_STENCIL8:B=i.DEPTH_COMPONENT16:T.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Rr&&B===i.DEPTH_COMPONENT&&T.type!==dc&&T.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=sr,he=a.convert(T.type)),T.format===wa&&B===i.DEPTH_COMPONENT&&(B=i.DEPTH_STENCIL,T.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ar,he=a.convert(T.type))),k&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,B,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,B,$.width,$.height,0,V,he,null));else if(T.isDataTexture)if(be.length>0&&L){Ie&&k&&t.texStorage2D(i.TEXTURE_2D,Re,B,be[0].width,be[0].height);for(let re=0,Ae=be.length;re<Ae;re++)ee=be[re],Ie?t.texSubImage2D(i.TEXTURE_2D,re,0,0,ee.width,ee.height,V,he,ee.data):t.texImage2D(i.TEXTURE_2D,re,B,ee.width,ee.height,0,V,he,ee.data);T.generateMipmaps=!1}else Ie?(k&&t.texStorage2D(i.TEXTURE_2D,Re,B,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,V,he,$.data)):t.texImage2D(i.TEXTURE_2D,0,B,$.width,$.height,0,V,he,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ie&&k&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,B,be[0].width,be[0].height,$.depth);for(let re=0,Ae=be.length;re<Ae;re++)ee=be[re],T.format!==ui?V!==null?Ie?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ee.width,ee.height,$.depth,V,ee.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,B,ee.width,ee.height,$.depth,0,ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ee.width,ee.height,$.depth,V,he,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,B,ee.width,ee.height,$.depth,0,V,he,ee.data)}else{Ie&&k&&t.texStorage2D(i.TEXTURE_2D,Re,B,be[0].width,be[0].height);for(let re=0,Ae=be.length;re<Ae;re++)ee=be[re],T.format!==ui?V!==null?Ie?t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ee.width,ee.height,V,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,re,B,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(i.TEXTURE_2D,re,0,0,ee.width,ee.height,V,he,ee.data):t.texImage2D(i.TEXTURE_2D,re,B,ee.width,ee.height,0,V,he,ee.data)}else if(T.isDataArrayTexture)Ie?(k&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,B,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,V,he,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,B,$.width,$.height,$.depth,0,V,he,$.data);else if(T.isData3DTexture)Ie?(k&&t.texStorage3D(i.TEXTURE_3D,Re,B,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,V,he,$.data)):t.texImage3D(i.TEXTURE_3D,0,B,$.width,$.height,$.depth,0,V,he,$.data);else if(T.isFramebufferTexture){if(k)if(Ie)t.texStorage2D(i.TEXTURE_2D,Re,B,$.width,$.height);else{let re=$.width,Ae=$.height;for(let Pe=0;Pe<Re;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,B,re,Ae,0,V,he,null),re>>=1,Ae>>=1}}else if(be.length>0&&L){Ie&&k&&t.texStorage2D(i.TEXTURE_2D,Re,B,be[0].width,be[0].height);for(let re=0,Ae=be.length;re<Ae;re++)ee=be[re],Ie?t.texSubImage2D(i.TEXTURE_2D,re,0,0,V,he,ee):t.texImage2D(i.TEXTURE_2D,re,B,V,he,ee);T.generateMipmaps=!1}else Ie?(k&&t.texStorage2D(i.TEXTURE_2D,Re,B,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,V,he,$)):t.texImage2D(i.TEXTURE_2D,0,B,V,he,$);I(T,L)&&C(Se),de.__version=fe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Be(D,T,Z){if(T.image.length!==6)return;const Se=ze(D,T),X=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Z);const fe=n.get(X);if(X.version!==fe.__version||Se===!0){t.activeTexture(i.TEXTURE0+Z),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const de=T.isCompressedTexture||T.image[0].isCompressedTexture,pe=T.image[0]&&T.image[0].isDataTexture,$=[];for(let re=0;re<6;re++)!de&&!pe?$[re]=b(T.image[re],!1,!0,d):$[re]=pe?T.image[re].image:T.image[re],$[re]=dt(T,$[re]);const L=$[0],V=E(L)||o,he=a.convert(T.format,T.colorSpace),B=a.convert(T.type),ee=j(T.internalFormat,he,B,T.colorSpace),be=o&&T.isVideoTexture!==!0,Ie=fe.__version===void 0||Se===!0;let k=x(T,L,V);We(i.TEXTURE_CUBE_MAP,T,V);let Re;if(de){be&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,k,ee,L.width,L.height);for(let re=0;re<6;re++){Re=$[re].mipmaps;for(let Ae=0;Ae<Re.length;Ae++){const Pe=Re[Ae];T.format!==ui?he!==null?be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,Pe.width,Pe.height,he,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,ee,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,Pe.width,Pe.height,he,B,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,ee,Pe.width,Pe.height,0,he,B,Pe.data)}}}else{Re=T.mipmaps,be&&Ie&&(Re.length>0&&k++,t.texStorage2D(i.TEXTURE_CUBE_MAP,k,ee,$[0].width,$[0].height));for(let re=0;re<6;re++)if(pe){be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,$[re].width,$[re].height,he,B,$[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ee,$[re].width,$[re].height,0,he,B,$[re].data);for(let Ae=0;Ae<Re.length;Ae++){const tt=Re[Ae].image[re].image;be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,tt.width,tt.height,he,B,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,ee,tt.width,tt.height,0,he,B,tt.data)}}else{be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he,B,$[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ee,he,B,$[re]);for(let Ae=0;Ae<Re.length;Ae++){const Pe=Re[Ae];be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,he,B,Pe.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,ee,he,B,Pe.image[re])}}}I(T,V)&&C(i.TEXTURE_CUBE_MAP),fe.__version=X.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Fe(D,T,Z,Se,X,fe){const de=a.convert(Z.format,Z.colorSpace),pe=a.convert(Z.type),$=j(Z.internalFormat,de,pe,Z.colorSpace);if(!n.get(T).__hasExternalTextures){const V=Math.max(1,T.width>>fe),he=Math.max(1,T.height>>fe);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,fe,$,V,he,T.depth,0,de,pe,null):t.texImage2D(X,fe,$,V,he,0,de,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Qe(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,X,n.get(Z).__webglTexture,0,Ye(T)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Se,X,n.get(Z).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function z(D,T,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let Se=i.DEPTH_COMPONENT16;if(Z||Qe(T)){const X=T.depthTexture;X&&X.isDepthTexture&&(X.type===Wi?Se=i.DEPTH_COMPONENT32F:X.type===sr&&(Se=i.DEPTH_COMPONENT24));const fe=Ye(T);Qe(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Se,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Se,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,Se,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const Se=Ye(T);Z&&Qe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,T.width,T.height):Qe(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{const Se=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let X=0;X<Se.length;X++){const fe=Se[X],de=a.convert(fe.format,fe.colorSpace),pe=a.convert(fe.type),$=j(fe.internalFormat,de,pe,fe.colorSpace),L=Ye(T);Z&&Qe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,$,T.width,T.height):Qe(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,$,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,$,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const Se=n.get(T.depthTexture).__webglTexture,X=Ye(T);if(T.depthTexture.format===Rr)Qe(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0);else if(T.depthTexture.format===wa)Qe(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function ke(D){const T=n.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");it(T.__webglFramebuffer,D)}else if(Z){T.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Se]),T.__webglDepthbuffer[Se]=i.createRenderbuffer(),z(T.__webglDepthbuffer[Se],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),z(T.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(D,T,Z){const Se=n.get(D);T!==void 0&&Fe(Se.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&ke(D)}function Le(D){const T=D.texture,Z=n.get(D),Se=n.get(T);D.addEventListener("dispose",H),D.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture()),Se.__version=T.version,l.memory.textures++);const X=D.isWebGLCubeRenderTarget===!0,fe=D.isWebGLMultipleRenderTargets===!0,de=E(D)||o;if(X){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let $=0;$<T.mipmaps.length;$++)Z.__webglFramebuffer[pe][$]=i.createFramebuffer()}else Z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(fe)if(r.drawBuffers){const pe=D.texture;for(let $=0,L=pe.length;$<L;$++){const V=n.get(pe[$]);V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&Qe(D)===!1){const pe=fe?T:[T];Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let $=0;$<pe.length;$++){const L=pe[$];Z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[$]);const V=a.convert(L.format,L.colorSpace),he=a.convert(L.type),B=j(L.internalFormat,V,he,L.colorSpace,D.isXRRenderTarget===!0),ee=Ye(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,B,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,Z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),z(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Se.__webglTexture),We(i.TEXTURE_CUBE_MAP,T,de);for(let pe=0;pe<6;pe++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)Fe(Z.__webglFramebuffer[pe][$],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$);else Fe(Z.__webglFramebuffer[pe],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);I(T,de)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const pe=D.texture;for(let $=0,L=pe.length;$<L;$++){const V=pe[$],he=n.get(V);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),We(i.TEXTURE_2D,V,de),Fe(Z.__webglFramebuffer,D,V,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,0),I(V,de)&&C(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?pe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,Se.__webglTexture),We(pe,T,de),o&&T.mipmaps&&T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)Fe(Z.__webglFramebuffer[$],D,T,i.COLOR_ATTACHMENT0,pe,$);else Fe(Z.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,pe,0);I(T,de)&&C(pe),t.unbindTexture()}D.depthBuffer&&ke(D)}function Ge(D){const T=E(D)||o,Z=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Se=0,X=Z.length;Se<X;Se++){const fe=Z[Se];if(I(fe,T)){const de=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(fe).__webglTexture;t.bindTexture(de,pe),C(de),t.unbindTexture()}}}function He(D){if(o&&D.samples>0&&Qe(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Z=D.width,Se=D.height;let X=i.COLOR_BUFFER_BIT;const fe=[],de=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(D),$=D.isWebGLMultipleRenderTargets===!0;if($)for(let L=0;L<T.length;L++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let L=0;L<T.length;L++){fe.push(i.COLOR_ATTACHMENT0+L),D.depthBuffer&&fe.push(de);const V=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(V===!1&&(D.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),$&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[L]),V===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[de]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[de])),$){const he=n.get(T[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,Z,Se,0,0,Z,Se,X,i.NEAREST),g&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let L=0;L<T.length;L++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,pe.__webglColorRenderbuffer[L]);const V=n.get(T[L]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,V,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ye(D){return Math.min(h,D.samples)}function Qe(D){const T=n.get(D);return o&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Mt(D){const T=l.render.frame;y.get(D)!==T&&(y.set(D,T),D.update())}function dt(D,T){const Z=D.colorSpace,Se=D.format,X=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Fl||Z!==Pi&&Z!==Pr&&(Z===Qt||Z===bo?o===!1?e.has("EXT_sRGB")===!0&&Se===ui?(D.format=Fl,D.minFilter=ni,D.generateMipmaps=!1):T=nh.sRGBToLinear(T):(Se!==ui||X!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}this.allocateTextureUnit=le,this.resetTextureUnits=ae,this.setTexture2D=G,this.setTexture2DArray=F,this.setTexture3D=ne,this.setTextureCube=Ee,this.rebindTextures=ge,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Qe}const VS=0,hn=1;function WS(i,e,t){const n=t.isWebGL2;function r(a,l=Pr){let o;const c=l===Qt||l===bo?hn:VS;if(a===cr)return i.UNSIGNED_BYTE;if(a===Yf)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Kf)return i.UNSIGNED_SHORT_5_5_5_1;if(a===yx)return i.BYTE;if(a===Sx)return i.SHORT;if(a===dc)return i.UNSIGNED_SHORT;if(a===qf)return i.INT;if(a===sr)return i.UNSIGNED_INT;if(a===Wi)return i.FLOAT;if(a===Ma)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Mx)return i.ALPHA;if(a===ui)return i.RGBA;if(a===wx)return i.LUMINANCE;if(a===Ex)return i.LUMINANCE_ALPHA;if(a===Rr)return i.DEPTH_COMPONENT;if(a===wa)return i.DEPTH_STENCIL;if(a===Fl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Tx)return i.RED;if(a===Zf)return i.RED_INTEGER;if(a===Ax)return i.RG;if(a===Jf)return i.RG_INTEGER;if(a===Qf)return i.RGBA_INTEGER;if(a===zo||a===Go||a===Ho||a===Vo)if(c===hn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Go)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ho)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ud||a===fd||a===hd||a===pd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===ud)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===fd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===hd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===pd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Rx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===md||a===vd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===md)return c===hn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===vd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===gd||a===_d||a===xd||a===bd||a===yd||a===Sd||a===Md||a===wd||a===Ed||a===Td||a===Ad||a===Rd||a===Cd||a===Pd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===gd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===_d)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===xd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===bd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===yd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Sd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Md)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===wd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ed)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Td)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ad)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Rd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Cd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Pd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Wo||a===Ld||a===Id)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Wo)return c===hn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ld)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Id)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Cx||a===Dd||a===Ud||a===kd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Wo)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Dd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ud)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===kd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ar?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class jS extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yn extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XS={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const o=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,n),m=this._getHandJoint(d,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],f=u.position.distanceTo(h.position),g=.02,y=.005;d.inputState.pinching&&f>g+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=g-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XS)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yh extends Tn{constructor(e,t,n,r,a,l,o,c,d,u){if(u=u!==void 0?u:Rr,u!==Rr&&u!==wa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rr&&(n=sr),n===void 0&&u===wa&&(n=Ar),super(null,r,a,l,o,c,u,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qS extends Ur{constructor(e,t){super();const n=this;let r=null,a=1,l=null,o="local-floor",c=1,d=null,u=null,h=null,f=null,g=null,y=null;const S=t.getContextAttributes();let p=null,m=null;const w=[],b=[],E=new jn;E.layers.enable(1),E.viewport=new $t;const A=new jn;A.layers.enable(2),A.viewport=new $t;const I=[E,A],C=new jS;C.layers.enable(1),C.layers.enable(2);let j=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let ne=w[F];return ne===void 0&&(ne=new hl,w[F]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(F){let ne=w[F];return ne===void 0&&(ne=new hl,w[F]=ne),ne.getGripSpace()},this.getHand=function(F){let ne=w[F];return ne===void 0&&(ne=new hl,w[F]=ne),ne.getHandSpace()};function M(F){const ne=b.indexOf(F.inputSource);if(ne===-1)return;const Ee=w[ne];Ee!==void 0&&(Ee.update(F.inputSource,F.frame,d||l),Ee.dispatchEvent({type:F.type,data:F.inputSource}))}function ie(){r.removeEventListener("select",M),r.removeEventListener("selectstart",M),r.removeEventListener("selectend",M),r.removeEventListener("squeeze",M),r.removeEventListener("squeezestart",M),r.removeEventListener("squeezeend",M),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",H);for(let F=0;F<w.length;F++){const ne=b[F];ne!==null&&(b[F]=null,w[F].disconnect(ne))}j=null,x=null,e.setRenderTarget(p),g=null,f=null,h=null,r=null,m=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(F){d=F},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",M),r.addEventListener("selectstart",M),r.addEventListener("selectend",M),r.addEventListener("squeeze",M),r.addEventListener("squeezestart",M),r.addEventListener("squeezeend",M),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:g}),m=new Zi(g.framebufferWidth,g.framebufferHeight,{format:ui,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ne=null,Ee=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=S.stencil?wa:Rr,Ee=S.stencil?Ar:sr);const Ce={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),m=new Zi(f.textureWidth,f.textureHeight,{format:ui,type:cr,depthTexture:new yh(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Oe=e.properties.get(m);Oe.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),d=null,l=await r.requestReferenceSpace(o),G.setContext(r),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(F){for(let ne=0;ne<F.removed.length;ne++){const Ee=F.removed[ne],we=b.indexOf(Ee);we>=0&&(b[we]=null,w[we].disconnect(Ee))}for(let ne=0;ne<F.added.length;ne++){const Ee=F.added[ne];let we=b.indexOf(Ee);if(we===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=b.length){b.push(Ee),we=Oe;break}else if(b[Oe]===null){b[Oe]=Ee,we=Oe;break}if(we===-1)break}const Ce=w[we];Ce&&Ce.connect(Ee)}}const N=new ue,W=new ue;function q(F,ne,Ee){N.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(Ee.matrixWorld);const we=N.distanceTo(W),Ce=ne.projectionMatrix.elements,Oe=Ee.projectionMatrix.elements,We=Ce[14]/(Ce[10]-1),ze=Ce[14]/(Ce[10]+1),Me=(Ce[9]+1)/Ce[5],Be=(Ce[9]-1)/Ce[5],Fe=(Ce[8]-1)/Ce[0],z=(Oe[8]+1)/Oe[0],it=We*Fe,ke=We*z,ge=we/(-Fe+z),Le=ge*-Fe;ne.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Le),F.translateZ(ge),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Ge=We+ge,He=ze+ge,Ye=it-Le,Qe=ke+(we-Le),Mt=Me*ze/He*Ge,dt=Be*ze/He*Ge;F.projectionMatrix.makePerspective(Ye,Qe,Mt,dt,Ge,He),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function ve(F,ne){ne===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(ne.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;C.near=A.near=E.near=F.near,C.far=A.far=E.far=F.far,(j!==C.near||x!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),j=C.near,x=C.far);const ne=F.parent,Ee=C.cameras;ve(C,ne);for(let we=0;we<Ee.length;we++)ve(Ee[we],ne);Ee.length===2?q(C,E,A):C.projectionMatrix.copy(E.projectionMatrix),ae(F,C,ne)};function ae(F,ne,Ee){Ee===null?F.matrix.copy(ne.matrixWorld):(F.matrix.copy(Ee.matrixWorld),F.matrix.invert(),F.matrix.multiply(ne.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(ne.projectionMatrix),F.projectionMatrixInverse.copy(ne.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Bl*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(F){c=F,f!==null&&(f.fixedFoveation=F),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=F)};let le=null;function me(F,ne){if(u=ne.getViewerPose(d||l),y=ne,u!==null){const Ee=u.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let we=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,we=!0);for(let Ce=0;Ce<Ee.length;Ce++){const Oe=Ee[Ce];let We=null;if(g!==null)We=g.getViewport(Oe);else{const Me=h.getViewSubImage(f,Oe);We=Me.viewport,Ce===0&&(e.setRenderTargetTextures(m,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(m))}let ze=I[Ce];ze===void 0&&(ze=new jn,ze.layers.enable(Ce),ze.viewport=new $t,I[Ce]=ze),ze.matrix.fromArray(Oe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Oe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(We.x,We.y,We.width,We.height),Ce===0&&(C.matrix.copy(ze.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),we===!0&&C.cameras.push(ze)}}for(let Ee=0;Ee<w.length;Ee++){const we=b[Ee],Ce=w[Ee];we!==null&&Ce!==void 0&&Ce.update(we,ne,d||l)}le&&le(F,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),y=null}const G=new mh;G.setAnimationLoop(me),this.setAnimationLoop=function(F){le=F},this.dispose=function(){}}}function YS(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,uh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,w,b,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(p,m):m.isMeshToonMaterial?(a(p,m),h(p,m)):m.isMeshPhongMaterial?(a(p,m),u(p,m)):m.isMeshStandardMaterial?(a(p,m),f(p,m),m.isMeshPhysicalMaterial&&g(p,m,E)):m.isMeshMatcapMaterial?(a(p,m),y(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),S(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(l(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,w,b):m.isSpriteMaterial?d(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===zn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===zn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=e.get(m).envMap;if(w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function g(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){const w=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function KS(i,e,t,n){let r={},a={},l=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,b){const E=b.program;n.uniformBlockBinding(w,E)}function d(w,b){let E=r[w.id];E===void 0&&(y(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",p));const A=b.program;n.updateUBOMapping(w,A);const I=e.render.frame;a[w.id]!==I&&(f(w),a[w.id]=I)}function u(w){const b=h();w.__bindingPointIndex=b;const E=i.createBuffer(),A=w.__size,I=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function h(){for(let w=0;w<o;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=r[w.id],E=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let I=0,C=E.length;I<C;I++){const j=E[I];if(g(j,I,A)===!0){const x=j.__offset,M=Array.isArray(j.value)?j.value:[j.value];let ie=0;for(let H=0;H<M.length;H++){const N=M[H],W=S(N);typeof N=="number"?(j.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,x+ie,j.__data)):N.isMatrix3?(j.__data[0]=N.elements[0],j.__data[1]=N.elements[1],j.__data[2]=N.elements[2],j.__data[3]=N.elements[0],j.__data[4]=N.elements[3],j.__data[5]=N.elements[4],j.__data[6]=N.elements[5],j.__data[7]=N.elements[0],j.__data[8]=N.elements[6],j.__data[9]=N.elements[7],j.__data[10]=N.elements[8],j.__data[11]=N.elements[0]):(N.toArray(j.__data,ie),ie+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,j.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,b,E){const A=w.value;if(E[b]===void 0){if(typeof A=="number")E[b]=A;else{const I=Array.isArray(A)?A:[A],C=[];for(let j=0;j<I.length;j++)C.push(I[j].clone());E[b]=C}return!0}else if(typeof A=="number"){if(E[b]!==A)return E[b]=A,!0}else{const I=Array.isArray(E[b])?E[b]:[E[b]],C=Array.isArray(A)?A:[A];for(let j=0;j<I.length;j++){const x=I[j];if(x.equals(C[j])===!1)return x.copy(C[j]),!0}}return!1}function y(w){const b=w.uniforms;let E=0;const A=16;let I=0;for(let C=0,j=b.length;C<j;C++){const x=b[C],M={boundary:0,storage:0},ie=Array.isArray(x.value)?x.value:[x.value];for(let H=0,N=ie.length;H<N;H++){const W=ie[H],q=S(W);M.boundary+=q.boundary,M.storage+=q.storage}if(x.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=E,C>0){I=E%A;const H=A-I;I!==0&&H-M.boundary<0&&(E+=A-I,x.__offset=E)}E+=M.storage}return I=E%A,I>0&&(E+=A-I),w.__size=E,w.__cache={},this}function S(w){const b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){const b=w.target;b.removeEventListener("dispose",p);const E=l.indexOf(b.__bindingPointIndex);l.splice(E,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function m(){for(const w in r)i.deleteBuffer(r[w]);l=[],r={},a={}}return{bind:c,update:d,dispose:m}}class Sh{constructor(e={}){const{canvas:t=Wx(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=l;const g=new Uint32Array(4),y=new Int32Array(4);let S=null,p=null;const m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const b=this;let E=!1,A=0,I=0,C=null,j=-1,x=null;const M=new $t,ie=new $t;let H=null;const N=new Bt(0);let W=0,q=t.width,ve=t.height,ae=1,le=null,me=null;const G=new $t(0,0,q,ve),F=new $t(0,0,q,ve);let ne=!1;const Ee=new fc;let we=!1,Ce=!1,Oe=null;const We=new ln,ze=new xt,Me=new ue,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return C===null?ae:1}let z=n;function it(P,se){for(let _e=0;_e<P.length;_e++){const oe=P[_e],xe=t.getContext(oe,se);if(xe!==null)return xe}return null}try{const P={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),z===null){const se=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&se.shift(),z=it(se,P),z===null)throw it(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ke,ge,Le,Ge,He,Ye,Qe,Mt,dt,D,T,Z,Se,X,fe,de,pe,$,L,V,he,B,ee,be;function Ie(){ke=new s1(z),ge=new e1(z,ke,e),ke.init(ge),B=new WS(z,ke,ge),Le=new GS(z,ke,ge),Ge=new c1(z),He=new AS,Ye=new HS(z,ke,Le,He,ge,B,Ge),Qe=new n1(b),Mt=new a1(b),dt=new xb(z,ge),ee=new Qy(z,ke,dt,ge),D=new o1(z,dt,Ge,ee),T=new h1(z,D,dt,Ge),L=new f1(z,ge,Ye),de=new t1(He),Z=new TS(b,Qe,Mt,ke,ge,ee,de),Se=new YS(b,He),X=new CS,fe=new kS(ke,ge),$=new Jy(b,Qe,Mt,Le,T,f,c),pe=new zS(b,T,ge),be=new KS(z,Ge,ge,Le),V=new $y(z,ke,Ge,ge),he=new l1(z,ke,Ge,ge),Ge.programs=Z.programs,b.capabilities=ge,b.extensions=ke,b.properties=He,b.renderLists=X,b.shadowMap=pe,b.state=Le,b.info=Ge}Ie();const k=new qS(b,z);this.xr=k,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=ke.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ke.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(P){P!==void 0&&(ae=P,this.setSize(q,ve,!1))},this.getSize=function(P){return P.set(q,ve)},this.setSize=function(P,se,_e=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=P,ve=se,t.width=Math.floor(P*ae),t.height=Math.floor(se*ae),_e===!0&&(t.style.width=P+"px",t.style.height=se+"px"),this.setViewport(0,0,P,se)},this.getDrawingBufferSize=function(P){return P.set(q*ae,ve*ae).floor()},this.setDrawingBufferSize=function(P,se,_e){q=P,ve=se,ae=_e,t.width=Math.floor(P*_e),t.height=Math.floor(se*_e),this.setViewport(0,0,P,se)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(G)},this.setViewport=function(P,se,_e,oe){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,se,_e,oe),Le.viewport(M.copy(G).multiplyScalar(ae).floor())},this.getScissor=function(P){return P.copy(F)},this.setScissor=function(P,se,_e,oe){P.isVector4?F.set(P.x,P.y,P.z,P.w):F.set(P,se,_e,oe),Le.scissor(ie.copy(F).multiplyScalar(ae).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(P){Le.setScissorTest(ne=P)},this.setOpaqueSort=function(P){le=P},this.setTransparentSort=function(P){me=P},this.getClearColor=function(P){return P.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(P=!0,se=!0,_e=!0){let oe=0;if(P){let xe=!1;if(C!==null){const Ve=C.texture.format;xe=Ve===Qf||Ve===Jf||Ve===Zf}if(xe){const Ve=C.texture.type,Ne=Ve===cr||Ve===sr||Ve===dc||Ve===Ar||Ve===Yf||Ve===Kf,qe=$.getClearColor(),Ke=$.getClearAlpha(),vt=qe.r,ut=qe.g,wt=qe.b;Ne?(g[0]=vt,g[1]=ut,g[2]=wt,g[3]=Ke,z.clearBufferuiv(z.COLOR,0,g)):(y[0]=vt,y[1]=ut,y[2]=wt,y[3]=Ke,z.clearBufferiv(z.COLOR,0,y))}else oe|=z.COLOR_BUFFER_BIT}se&&(oe|=z.DEPTH_BUFFER_BIT),_e&&(oe|=z.STENCIL_BUFFER_BIT),z.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),X.dispose(),fe.dispose(),He.dispose(),Qe.dispose(),Mt.dispose(),T.dispose(),ee.dispose(),be.dispose(),Z.dispose(),k.dispose(),k.removeEventListener("sessionstart",ft),k.removeEventListener("sessionend",ct),Oe&&(Oe.dispose(),Oe=null),mt.stop()};function Re(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=Ge.autoReset,se=pe.enabled,_e=pe.autoUpdate,oe=pe.needsUpdate,xe=pe.type;Ie(),Ge.autoReset=P,pe.enabled=se,pe.autoUpdate=_e,pe.needsUpdate=oe,pe.type=xe}function Ae(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Pe(P){const se=P.target;se.removeEventListener("dispose",Pe),tt(se)}function tt(P){Je(P),He.remove(P)}function Je(P){const se=He.get(P).programs;se!==void 0&&(se.forEach(function(_e){Z.releaseProgram(_e)}),P.isShaderMaterial&&Z.releaseShaderCache(P))}this.renderBufferDirect=function(P,se,_e,oe,xe,Ve){se===null&&(se=Be);const Ne=xe.isMesh&&xe.matrixWorld.determinant()<0,qe=ht(P,se,_e,oe,xe);Le.setMaterial(oe,Ne);let Ke=_e.index,vt=1;if(oe.wireframe===!0){if(Ke=D.getWireframeAttribute(_e),Ke===void 0)return;vt=2}const ut=_e.drawRange,wt=_e.attributes.position;let ye=ut.start*vt,De=(ut.start+ut.count)*vt;Ve!==null&&(ye=Math.max(ye,Ve.start*vt),De=Math.min(De,(Ve.start+Ve.count)*vt)),Ke!==null?(ye=Math.max(ye,0),De=Math.min(De,Ke.count)):wt!=null&&(ye=Math.max(ye,0),De=Math.min(De,wt.count));const $e=De-ye;if($e<0||$e===1/0)return;ee.setup(xe,oe,qe,_e,Ke);let bt,st=V;if(Ke!==null&&(bt=dt.get(Ke),st=he,st.setIndex(bt)),xe.isMesh)oe.wireframe===!0?(Le.setLineWidth(oe.wireframeLinewidth*Fe()),st.setMode(z.LINES)):st.setMode(z.TRIANGLES);else if(xe.isLine){let ot=oe.linewidth;ot===void 0&&(ot=1),Le.setLineWidth(ot*Fe()),xe.isLineSegments?st.setMode(z.LINES):xe.isLineLoop?st.setMode(z.LINE_LOOP):st.setMode(z.LINE_STRIP)}else xe.isPoints?st.setMode(z.POINTS):xe.isSprite&&st.setMode(z.TRIANGLES);if(xe.isInstancedMesh)st.renderInstances(ye,$e,xe.count);else if(_e.isInstancedBufferGeometry){const ot=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,zt=Math.min(_e.instanceCount,ot);st.renderInstances(ye,$e,zt)}else st.render(ye,$e)},this.compile=function(P,se){function _e(oe,xe,Ve){oe.transparent===!0&&oe.side===ri&&oe.forceSinglePass===!1?(oe.side=zn,oe.needsUpdate=!0,Gt(oe,xe,Ve),oe.side=Ci,oe.needsUpdate=!0,Gt(oe,xe,Ve),oe.side=ri):Gt(oe,xe,Ve)}p=fe.get(P),p.init(),w.push(p),P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(se.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),p.setupLights(b._useLegacyLights),P.traverse(function(oe){const xe=oe.material;if(xe)if(Array.isArray(xe))for(let Ve=0;Ve<xe.length;Ve++){const Ne=xe[Ve];_e(Ne,P,oe)}else _e(xe,P,oe)}),w.pop(),p=null};let Ze=null;function lt(P){Ze&&Ze(P)}function ft(){mt.stop()}function ct(){mt.start()}const mt=new mh;mt.setAnimationLoop(lt),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(P){Ze=P,k.setAnimationLoop(P),P===null?mt.stop():mt.start()},k.addEventListener("sessionstart",ft),k.addEventListener("sessionend",ct),this.render=function(P,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(se),se=k.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,se,C),p=fe.get(P,w.length),p.init(),w.push(p),We.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),Ee.setFromProjectionMatrix(We),Ce=this.localClippingEnabled,we=de.init(this.clippingPlanes,Ce),S=X.get(P,m.length),S.init(),m.push(S),nt(P,se,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(le,me),this.info.render.frame++,we===!0&&de.beginShadows();const _e=p.state.shadowsArray;if(pe.render(_e,P,se),we===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(S,P),p.setupLights(b._useLegacyLights),se.isArrayCamera){const oe=se.cameras;for(let xe=0,Ve=oe.length;xe<Ve;xe++){const Ne=oe[xe];yt(S,P,Ne,Ne.viewport)}}else yt(S,P,se);C!==null&&(Ye.updateMultisampleRenderTarget(C),Ye.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(b,P,se),ee.resetDefaultState(),j=-1,x=null,w.pop(),w.length>0?p=w[w.length-1]:p=null,m.pop(),m.length>0?S=m[m.length-1]:S=null};function nt(P,se,_e,oe){if(P.visible===!1)return;if(P.layers.test(se.layers)){if(P.isGroup)_e=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(se);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ee.intersectsSprite(P)){oe&&Me.setFromMatrixPosition(P.matrixWorld).applyMatrix4(We);const Ne=T.update(P),qe=P.material;qe.visible&&S.push(P,Ne,qe,_e,Me.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ee.intersectsObject(P))){const Ne=T.update(P),qe=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Me.copy(P.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Me.copy(Ne.boundingSphere.center)),Me.applyMatrix4(P.matrixWorld).applyMatrix4(We)),Array.isArray(qe)){const Ke=Ne.groups;for(let vt=0,ut=Ke.length;vt<ut;vt++){const wt=Ke[vt],ye=qe[wt.materialIndex];ye&&ye.visible&&S.push(P,Ne,ye,_e,Me.z,wt)}}else qe.visible&&S.push(P,Ne,qe,_e,Me.z,null)}}const Ve=P.children;for(let Ne=0,qe=Ve.length;Ne<qe;Ne++)nt(Ve[Ne],se,_e,oe)}function yt(P,se,_e,oe){const xe=P.opaque,Ve=P.transmissive,Ne=P.transparent;p.setupLightsView(_e),we===!0&&de.setGlobalState(b.clippingPlanes,_e),Ve.length>0&&Ut(xe,Ve,se,_e),oe&&Le.viewport(M.copy(oe)),xe.length>0&&It(xe,se,_e),Ve.length>0&&It(Ve,se,_e),Ne.length>0&&It(Ne,se,_e),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ut(P,se,_e,oe){const xe=ge.isWebGL2;Oe===null&&(Oe=new Zi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")?Ma:cr,minFilter:ls,samples:xe?4:0})),b.getDrawingBufferSize(ze),xe?Oe.setSize(ze.x,ze.y):Oe.setSize(zl(ze.x),zl(ze.y));const Ve=b.getRenderTarget();b.setRenderTarget(Oe),b.getClearColor(N),W=b.getClearAlpha(),W<1&&b.setClearColor(16777215,.5),b.clear();const Ne=b.toneMapping;b.toneMapping=lr,It(P,_e,oe),Ye.updateMultisampleRenderTarget(Oe),Ye.updateRenderTargetMipmap(Oe);let qe=!1;for(let Ke=0,vt=se.length;Ke<vt;Ke++){const ut=se[Ke],wt=ut.object,ye=ut.geometry,De=ut.material,$e=ut.group;if(De.side===ri&&wt.layers.test(oe.layers)){const bt=De.side;De.side=zn,De.needsUpdate=!0,Rt(wt,_e,oe,ye,De,$e),De.side=bt,De.needsUpdate=!0,qe=!0}}qe===!0&&(Ye.updateMultisampleRenderTarget(Oe),Ye.updateRenderTargetMipmap(Oe)),b.setRenderTarget(Ve),b.setClearColor(N,W),b.toneMapping=Ne}function It(P,se,_e){const oe=se.isScene===!0?se.overrideMaterial:null;for(let xe=0,Ve=P.length;xe<Ve;xe++){const Ne=P[xe],qe=Ne.object,Ke=Ne.geometry,vt=oe===null?Ne.material:oe,ut=Ne.group;qe.layers.test(_e.layers)&&Rt(qe,se,_e,Ke,vt,ut)}}function Rt(P,se,_e,oe,xe,Ve){P.onBeforeRender(b,se,_e,oe,xe,Ve),P.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),xe.onBeforeRender(b,se,_e,oe,P,Ve),xe.transparent===!0&&xe.side===ri&&xe.forceSinglePass===!1?(xe.side=zn,xe.needsUpdate=!0,b.renderBufferDirect(_e,se,oe,xe,P,Ve),xe.side=Ci,xe.needsUpdate=!0,b.renderBufferDirect(_e,se,oe,xe,P,Ve),xe.side=ri):b.renderBufferDirect(_e,se,oe,xe,P,Ve),P.onAfterRender(b,se,_e,oe,xe,Ve)}function Gt(P,se,_e){se.isScene!==!0&&(se=Be);const oe=He.get(P),xe=p.state.lights,Ve=p.state.shadowsArray,Ne=xe.state.version,qe=Z.getParameters(P,xe.state,Ve,se,_e),Ke=Z.getProgramCacheKey(qe);let vt=oe.programs;oe.environment=P.isMeshStandardMaterial?se.environment:null,oe.fog=se.fog,oe.envMap=(P.isMeshStandardMaterial?Mt:Qe).get(P.envMap||oe.environment),vt===void 0&&(P.addEventListener("dispose",Pe),vt=new Map,oe.programs=vt);let ut=vt.get(Ke);if(ut!==void 0){if(oe.currentProgram===ut&&oe.lightsStateVersion===Ne)return en(P,qe),ut}else qe.uniforms=Z.getUniforms(P),P.onBuild(_e,qe,b),P.onBeforeCompile(qe,b),ut=Z.acquireProgram(qe,Ke),vt.set(Ke,ut),oe.uniforms=qe.uniforms;const wt=oe.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(wt.clippingPlanes=de.uniform),en(P,qe),oe.needsLights=gt(P),oe.lightsStateVersion=Ne,oe.needsLights&&(wt.ambientLightColor.value=xe.state.ambient,wt.lightProbe.value=xe.state.probe,wt.directionalLights.value=xe.state.directional,wt.directionalLightShadows.value=xe.state.directionalShadow,wt.spotLights.value=xe.state.spot,wt.spotLightShadows.value=xe.state.spotShadow,wt.rectAreaLights.value=xe.state.rectArea,wt.ltc_1.value=xe.state.rectAreaLTC1,wt.ltc_2.value=xe.state.rectAreaLTC2,wt.pointLights.value=xe.state.point,wt.pointLightShadows.value=xe.state.pointShadow,wt.hemisphereLights.value=xe.state.hemi,wt.directionalShadowMap.value=xe.state.directionalShadowMap,wt.directionalShadowMatrix.value=xe.state.directionalShadowMatrix,wt.spotShadowMap.value=xe.state.spotShadowMap,wt.spotLightMatrix.value=xe.state.spotLightMatrix,wt.spotLightMap.value=xe.state.spotLightMap,wt.pointShadowMap.value=xe.state.pointShadowMap,wt.pointShadowMatrix.value=xe.state.pointShadowMatrix);const ye=ut.getUniforms(),De=Js.seqWithValue(ye.seq,wt);return oe.currentProgram=ut,oe.uniformsList=De,ut}function en(P,se){const _e=He.get(P);_e.outputColorSpace=se.outputColorSpace,_e.instancing=se.instancing,_e.instancingColor=se.instancingColor,_e.skinning=se.skinning,_e.morphTargets=se.morphTargets,_e.morphNormals=se.morphNormals,_e.morphColors=se.morphColors,_e.morphTargetsCount=se.morphTargetsCount,_e.numClippingPlanes=se.numClippingPlanes,_e.numIntersection=se.numClipIntersection,_e.vertexAlphas=se.vertexAlphas,_e.vertexTangents=se.vertexTangents,_e.toneMapping=se.toneMapping}function ht(P,se,_e,oe,xe){se.isScene!==!0&&(se=Be),Ye.resetTextureUnits();const Ve=se.fog,Ne=oe.isMeshStandardMaterial?se.environment:null,qe=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pi,Ke=(oe.isMeshStandardMaterial?Mt:Qe).get(oe.envMap||Ne),vt=oe.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,ut=!!_e.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),wt=!!_e.morphAttributes.position,ye=!!_e.morphAttributes.normal,De=!!_e.morphAttributes.color;let $e=lr;oe.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&($e=b.toneMapping);const bt=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,st=bt!==void 0?bt.length:0,ot=He.get(oe),zt=p.state.lights;if(we===!0&&(Ce===!0||P!==x)){const qt=P===x&&oe.id===j;de.setState(oe,P,qt)}let At=!1;oe.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==zt.state.version||ot.outputColorSpace!==qe||xe.isInstancedMesh&&ot.instancing===!1||!xe.isInstancedMesh&&ot.instancing===!0||xe.isSkinnedMesh&&ot.skinning===!1||!xe.isSkinnedMesh&&ot.skinning===!0||xe.isInstancedMesh&&ot.instancingColor===!0&&xe.instanceColor===null||xe.isInstancedMesh&&ot.instancingColor===!1&&xe.instanceColor!==null||ot.envMap!==Ke||oe.fog===!0&&ot.fog!==Ve||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==de.numPlanes||ot.numIntersection!==de.numIntersection)||ot.vertexAlphas!==vt||ot.vertexTangents!==ut||ot.morphTargets!==wt||ot.morphNormals!==ye||ot.morphColors!==De||ot.toneMapping!==$e||ge.isWebGL2===!0&&ot.morphTargetsCount!==st)&&(At=!0):(At=!0,ot.__version=oe.version);let an=ot.currentProgram;At===!0&&(an=Gt(oe,se,xe));let qn=!1,_n=!1,Cn=!1;const Ht=an.getUniforms(),xn=ot.uniforms;if(Le.useProgram(an.program)&&(qn=!0,_n=!0,Cn=!0),oe.id!==j&&(j=oe.id,_n=!0),qn||x!==P){Ht.setValue(z,"projectionMatrix",P.projectionMatrix),Ht.setValue(z,"viewMatrix",P.matrixWorldInverse);const qt=Ht.map.cameraPosition;qt!==void 0&&qt.setValue(z,Me.setFromMatrixPosition(P.matrixWorld)),ge.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),x!==P&&(x=P,_n=!0,Cn=!0)}if(xe.isSkinnedMesh){Ht.setOptional(z,xe,"bindMatrix"),Ht.setOptional(z,xe,"bindMatrixInverse");const qt=xe.skeleton;qt&&(ge.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ht.setValue(z,"boneTexture",qt.boneTexture,Ye),Ht.setValue(z,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nn=_e.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0&&ge.isWebGL2===!0)&&L.update(xe,_e,an),(_n||ot.receiveShadow!==xe.receiveShadow)&&(ot.receiveShadow=xe.receiveShadow,Ht.setValue(z,"receiveShadow",xe.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(xn.envMap.value=Ke,xn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),_n&&(Ht.setValue(z,"toneMappingExposure",b.toneMappingExposure),ot.needsLights&&Xe(xn,Cn),Ve&&oe.fog===!0&&Se.refreshFogUniforms(xn,Ve),Se.refreshMaterialUniforms(xn,oe,ae,ve,Oe),Js.upload(z,ot.uniformsList,xn,Ye)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Js.upload(z,ot.uniformsList,xn,Ye),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ht.setValue(z,"center",xe.center),Ht.setValue(z,"modelViewMatrix",xe.modelViewMatrix),Ht.setValue(z,"normalMatrix",xe.normalMatrix),Ht.setValue(z,"modelMatrix",xe.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const qt=oe.uniformsGroups;for(let Li=0,Eo=qt.length;Li<Eo;Li++)if(ge.isWebGL2){const vs=qt[Li];be.update(vs,an),be.bind(vs,an)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return an}function Xe(P,se){P.ambientLightColor.needsUpdate=se,P.lightProbe.needsUpdate=se,P.directionalLights.needsUpdate=se,P.directionalLightShadows.needsUpdate=se,P.pointLights.needsUpdate=se,P.pointLightShadows.needsUpdate=se,P.spotLights.needsUpdate=se,P.spotLightShadows.needsUpdate=se,P.rectAreaLights.needsUpdate=se,P.hemisphereLights.needsUpdate=se}function gt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,se,_e){He.get(P.texture).__webglTexture=se,He.get(P.depthTexture).__webglTexture=_e;const oe=He.get(P);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=_e===void 0,oe.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,se){const _e=He.get(P);_e.__webglFramebuffer=se,_e.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(P,se=0,_e=0){C=P,A=se,I=_e;let oe=!0,xe=null,Ve=!1,Ne=!1;if(P){const Ke=He.get(P);Ke.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(z.FRAMEBUFFER,null),oe=!1):Ke.__webglFramebuffer===void 0?Ye.setupRenderTarget(P):Ke.__hasExternalTextures&&Ye.rebindTextures(P,He.get(P.texture).__webglTexture,He.get(P.depthTexture).__webglTexture);const vt=P.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(Ne=!0);const ut=He.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ut[se])?xe=ut[se][_e]:xe=ut[se],Ve=!0):ge.isWebGL2&&P.samples>0&&Ye.useMultisampledRTT(P)===!1?xe=He.get(P).__webglMultisampledFramebuffer:Array.isArray(ut)?xe=ut[_e]:xe=ut,M.copy(P.viewport),ie.copy(P.scissor),H=P.scissorTest}else M.copy(G).multiplyScalar(ae).floor(),ie.copy(F).multiplyScalar(ae).floor(),H=ne;if(Le.bindFramebuffer(z.FRAMEBUFFER,xe)&&ge.drawBuffers&&oe&&Le.drawBuffers(P,xe),Le.viewport(M),Le.scissor(ie),Le.setScissorTest(H),Ve){const Ke=He.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ke.__webglTexture,_e)}else if(Ne){const Ke=He.get(P.texture),vt=se||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ke.__webglTexture,_e||0,vt)}j=-1},this.readRenderTargetPixels=function(P,se,_e,oe,xe,Ve,Ne){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=He.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ne!==void 0&&(qe=qe[Ne]),qe){Le.bindFramebuffer(z.FRAMEBUFFER,qe);try{const Ke=P.texture,vt=Ke.format,ut=Ke.type;if(vt!==ui&&B.convert(vt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const wt=ut===Ma&&(ke.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ke.has("EXT_color_buffer_float"));if(ut!==cr&&B.convert(ut)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ut===Wi&&(ge.isWebGL2||ke.has("OES_texture_float")||ke.has("WEBGL_color_buffer_float")))&&!wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=P.width-oe&&_e>=0&&_e<=P.height-xe&&z.readPixels(se,_e,oe,xe,B.convert(vt),B.convert(ut),Ve)}finally{const Ke=C!==null?He.get(C).__webglFramebuffer:null;Le.bindFramebuffer(z.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(P,se,_e=0){const oe=Math.pow(2,-_e),xe=Math.floor(se.image.width*oe),Ve=Math.floor(se.image.height*oe);Ye.setTexture2D(se,0),z.copyTexSubImage2D(z.TEXTURE_2D,_e,0,0,P.x,P.y,xe,Ve),Le.unbindTexture()},this.copyTextureToTexture=function(P,se,_e,oe=0){const xe=se.image.width,Ve=se.image.height,Ne=B.convert(_e.format),qe=B.convert(_e.type);Ye.setTexture2D(_e,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,_e.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,_e.unpackAlignment),se.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,oe,P.x,P.y,xe,Ve,Ne,qe,se.image.data):se.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,oe,P.x,P.y,se.mipmaps[0].width,se.mipmaps[0].height,Ne,se.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,oe,P.x,P.y,Ne,qe,se.image),oe===0&&_e.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(P,se,_e,oe,xe=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=P.max.x-P.min.x+1,Ne=P.max.y-P.min.y+1,qe=P.max.z-P.min.z+1,Ke=B.convert(oe.format),vt=B.convert(oe.type);let ut;if(oe.isData3DTexture)Ye.setTexture3D(oe,0),ut=z.TEXTURE_3D;else if(oe.isDataArrayTexture)Ye.setTexture2DArray(oe,0),ut=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,oe.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,oe.unpackAlignment);const wt=z.getParameter(z.UNPACK_ROW_LENGTH),ye=z.getParameter(z.UNPACK_IMAGE_HEIGHT),De=z.getParameter(z.UNPACK_SKIP_PIXELS),$e=z.getParameter(z.UNPACK_SKIP_ROWS),bt=z.getParameter(z.UNPACK_SKIP_IMAGES),st=_e.isCompressedTexture?_e.mipmaps[0]:_e.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,st.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,P.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,P.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,P.min.z),_e.isDataTexture||_e.isData3DTexture?z.texSubImage3D(ut,xe,se.x,se.y,se.z,Ve,Ne,qe,Ke,vt,st.data):_e.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ut,xe,se.x,se.y,se.z,Ve,Ne,qe,Ke,st.data)):z.texSubImage3D(ut,xe,se.x,se.y,se.z,Ve,Ne,qe,Ke,vt,st),z.pixelStorei(z.UNPACK_ROW_LENGTH,wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye),z.pixelStorei(z.UNPACK_SKIP_PIXELS,De),z.pixelStorei(z.UNPACK_SKIP_ROWS,$e),z.pixelStorei(z.UNPACK_SKIP_IMAGES,bt),xe===0&&oe.generateMipmaps&&z.generateMipmap(ut),Le.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ye.setTextureCube(P,0):P.isData3DTexture?Ye.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ye.setTexture2DArray(P,0):Ye.setTexture2D(P,0),Le.unbindTexture()},this.resetState=function(){A=0,I=0,C=null,Le.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?Cr:$f}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cr?Qt:Pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZS extends Sh{}ZS.prototype.isWebGL1Renderer=!0;class JS extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class QS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new ue;class uo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),a=Vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new vi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mh extends La{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ea;const Fa=new ue,ta=new ue,na=new ue,ia=new xt,Ba=new xt,wh=new ln,Gs=new ue,za=new ue,Hs=new ue,bu=new xt,pl=new xt,yu=new xt;class $S extends An{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new $i;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new QS(t,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new uo(n,3,0,!1)),ea.setAttribute("uv",new uo(n,2,3,!1))}this.geometry=ea,this.material=e!==void 0?e:new Mh,this.center=new xt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),na.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-na.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const l=this.center;Vs(Gs.set(-.5,-.5,0),na,l,ta,r,a),Vs(za.set(.5,-.5,0),na,l,ta,r,a),Vs(Hs.set(.5,.5,0),na,l,ta,r,a),bu.set(0,0),pl.set(1,0),yu.set(1,1);let o=e.ray.intersectTriangle(Gs,za,Hs,!1,Fa);if(o===null&&(Vs(za.set(-.5,.5,0),na,l,ta,r,a),pl.set(0,1),o=e.ray.intersectTriangle(Gs,Hs,za,!1,Fa),o===null))return;const c=e.ray.origin.distanceTo(Fa);c<e.near||c>e.far||t.push({distance:c,point:Fa.clone(),uv:ii.getInterpolation(Fa,Gs,za,Hs,bu,pl,yu,new xt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vs(i,e,t,n,r,a){ia.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ba.x=a*ia.x-r*ia.y,Ba.y=r*ia.x+a*ia.y):Ba.copy(ia),i.copy(e),i.x+=Ba.x,i.y+=Ba.y,i.applyMatrix4(wh)}class Qs extends Tn{constructor(e,t,n,r,a,l,o,c,d){super(e,t,n,r,a,l,o,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cs extends La{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eh,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eh extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ml=new ln,Su=new ue,Mu=new ue;class eM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Su.setFromMatrixPosition(e.matrixWorld),t.position.copy(Su),Mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mu),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wu=new ln,Ga=new ue,vl=new ue;class tM extends eM{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new ue(1,0,0),new ue(-1,0,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,1,0),new ue(0,-1,0)],this._cubeUps=[new ue(0,1,0),new ue(0,1,0),new ue(0,1,0),new ue(0,1,0),new ue(0,0,1),new ue(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ga),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),r.makeTranslation(-Ga.x,-Ga.y,-Ga.z),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu)}}class nM extends Eh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new tM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iM extends Eh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Th{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eu(){return(typeof performance>"u"?Date:performance).now()}class Tu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);function mc(i,e,t,n,r,a,l,o){const c=(C,j,x,M)=>[new xt(C/l,1-M/o),new xt(x/l,1-M/o),new xt(x/l,1-j/o),new xt(C/l,1-j/o)],d=c(e+a,t,e+n+a,t+a),u=c(e+n+a,t,e+n*2+a,t+a),h=c(e,t+a,e+a,t+a+r),f=c(e+a,t+a,e+n+a,t+a+r),g=c(e+n+a,t+a,e+n+a*2,t+r+a),y=c(e+n+a*2,t+a,e+n*2+a*2,t+r+a),S=i.attributes.uv,p=[g[3],g[2],g[0],g[1]],m=[h[3],h[2],h[0],h[1]],w=[d[3],d[2],d[0],d[1]],b=[u[0],u[1],u[3],u[2]],E=[f[3],f[2],f[0],f[1]],A=[y[3],y[2],y[0],y[1]],I=[];for(const C of[p,m,w,b,E,A])for(const j of C)I.push(j.x,j.y);S.set(new Float32Array(I)),S.needsUpdate=!0}function Jn(i,e,t,n,r,a){mc(i,e,t,n,r,a,64,64)}function Hl(i,e,t,n,r,a){mc(i,e,t,n,r,a,64,32)}class gr extends yn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class rM extends yn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new cs({side:Ci}),this.layer2Material=new cs({side:ri,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new sn(8,8,8);Jn(e,0,0,8,8,8);const t=new Yt(e,this.layer1Material),n=new sn(9,9,9);Jn(n,32,0,8,8,8);const r=new Yt(n,this.layer2Material);this.head=new gr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new sn(8,12,4);Jn(a,16,16,8,12,4);const l=new Yt(a,this.layer1Material),o=new sn(8.5,12.5,4.5);Jn(o,16,32,8,12,4);const c=new Yt(o,this.layer2Material);this.body=new gr(l,c),this.body.name="body",this.body.add(l,c),this.body.position.y=-6,this.add(this.body);const d=new sn,u=new Yt(d,this.layer1MaterialBiased);this.modelListeners.push(()=>{u.scale.x=this.slim?3:4,u.scale.y=12,u.scale.z=4,Jn(d,40,16,this.slim?3:4,12,4)});const h=new sn,f=new Yt(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Jn(h,40,32,this.slim?3:4,12,4)});const g=new yn;g.add(u,f),this.modelListeners.push(()=>{g.position.x=this.slim?-.5:-1}),g.position.y=-4,this.rightArm=new gr(u,f),this.rightArm.name="rightArm",this.rightArm.add(g),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const y=new sn,S=new Yt(y,this.layer1MaterialBiased);this.modelListeners.push(()=>{S.scale.x=this.slim?3:4,S.scale.y=12,S.scale.z=4,Jn(y,32,48,this.slim?3:4,12,4)});const p=new sn,m=new Yt(p,this.layer2MaterialBiased);this.modelListeners.push(()=>{m.scale.x=this.slim?3.5:4.5,m.scale.y=12.5,m.scale.z=4.5,Jn(p,48,48,this.slim?3:4,12,4)});const w=new yn;w.add(S,m),this.modelListeners.push(()=>{w.position.x=this.slim?.5:1}),w.position.y=-4,this.leftArm=new gr(S,m),this.leftArm.name="leftArm",this.leftArm.add(w),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const b=new sn(4,12,4);Jn(b,0,16,4,12,4);const E=new Yt(b,this.layer1MaterialBiased),A=new sn(4.5,12.5,4.5);Jn(A,0,32,4,12,4);const I=new Yt(A,this.layer2MaterialBiased),C=new yn;C.add(E,I),C.position.y=-6,this.rightLeg=new gr(E,I),this.rightLeg.name="rightLeg",this.rightLeg.add(C),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const j=new sn(4,12,4);Jn(j,16,48,4,12,4);const x=new Yt(j,this.layer1MaterialBiased),M=new sn(4.5,12.5,4.5);Jn(M,0,48,4,12,4);const ie=new Yt(M,this.layer2MaterialBiased),H=new yn;H.add(x,ie),H.position.y=-6,this.leftLeg=new gr(x,ie),this.leftLeg.name="leftLeg",this.leftLeg.add(H),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof gr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class aM extends yn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new cs({side:ri,transparent:!0,alphaTest:1e-5});const e=new sn(10,16,1);Hl(e,0,0,10,16,1),this.cape=new Yt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class sM extends yn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new cs({side:ri,transparent:!0,alphaTest:1e-5});const e=new sn(12,22,4);Hl(e,22,0,10,20,2);const t=new Yt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new yn,this.leftWing.add(t),this.add(this.leftWing);const n=new sn(12,22,4);Hl(n,22,0,10,20,2);const r=new Yt(n,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new yn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class oM extends yn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new cs({side:Ci});const e=new sn(8,8,4/3);mc(e,0,0,6,6,1,14,7),this.rightEar=new Yt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Yt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Au=10.8*Math.PI/180;class lM extends yn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new rM,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new aM,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Au,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new sM,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new oM,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Au,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ws(i){return i instanceof HTMLImageElement||i instanceof HTMLVideoElement||i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas}function Vl(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let o=0;o<r;o++){const c=(l+o*n)*4;if(a.data[c+3]!==255)return!0}return!1}function Mo(i){return i/64}function Ru(i,e,t){if(t){if(Vl(i,0,0,e,e))return}else if(Vl(i,0,0,e,e/2))return;const n=Mo(e),r=(a,l,o,c)=>i.clearRect(a*n,l*n,o*n,c*n);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function cM(i,e){i.save(),i.scale(-1,1);const t=Mo(e),n=(r,a,l,o,c,d)=>i.drawImage(i.canvas,r*t,a*t,l*t,o*t,-c*t,d*t,-l*t,o*t);n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52),i.restore()}function dM(i,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=i.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;i.width=r,i.height=r,n.clearRect(0,0,r,r),n.drawImage(e,0,0,r,r/2),cM(n,r),Ru(n,i.width,!1)}else i.width=e.width,i.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0,i.width,i.height),Ru(n,i.width,!0)}function uM(i){if(i.width===2*i.height)return i.width/64;if(i.width*17===i.height*22)return i.width/22;if(i.width*11===i.height*23)return i.width/46;throw new Error(`Bad cape size: ${i.width}x${i.height}`)}function fM(i,e){const t=uM(e);i.width=64*t,i.height=32*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function hM(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let o=0;o<r;o++){const c=(l+o*n)*4;if(!(a.data[c+0]===0&&a.data[c+1]===0&&a.data[c+2]===0&&a.data[c+3]===255))return!1}return!0}function pM(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let o=0;o<r;o++){const c=(l+o*n)*4;if(!(a.data[c+0]===255&&a.data[c+1]===255&&a.data[c+2]===255&&a.data[c+3]===255))return!1}return!0}function mM(i){const e=Mo(i.width),t=i.getContext("2d",{willReadFrequently:!0}),n=(o,c,d,u)=>Vl(t,o*e,c*e,d*e,u*e),r=(o,c,d,u)=>hM(t,o*e,c*e,d*e,u*e),a=(o,c,d,u)=>pM(t,o*e,c*e,d*e,u*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function vM(i){if(i.width===i.height*2&&i.height%7===0)return i.height/7;throw new Error(`Bad ears size: ${i.width}x${i.height}`)}function gM(i,e){const t=vM(e);i.width=14*t,i.height=7*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function Cu(i,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=Mo(e.width),n=14*t,r=7*t;i.width=n,i.height=r;const a=i.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,n,r),a.drawImage(e,24*t,0,n,r,0,0,n,r)}async function js(i){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof i=="string"?e.src=i:(i.crossOrigin!==void 0&&(e.crossOrigin=i.crossOrigin),i.referrerPolicy!==void 0&&(e.referrerPolicy=i.referrerPolicy),e.src=i.src)})}const Pu={type:"change"},gl={type:"start"},Lu={type:"end"},Xs=new ah,Iu=new ar,_M=Math.cos(70*Vx.DEG2RAD);class xM extends Ur{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ue,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",T),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pu),n.update(),a=r.NONE},this.update=(function(){const L=new ue,V=new Ir().setFromUnitVectors(e.up,new ue(0,1,0)),he=V.clone().invert(),B=new ue,ee=new Ir,be=new ue,Ie=2*Math.PI;return function(Re=null){const re=n.object.position;L.copy(re).sub(n.target),L.applyQuaternion(V),o.setFromVector3(L),n.autoRotate&&a===r.NONE&&ie(x(Re)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Ae=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;isFinite(Ae)&&isFinite(Pe)&&(Ae<-Math.PI?Ae+=Ie:Ae>Math.PI&&(Ae-=Ie),Pe<-Math.PI?Pe+=Ie:Pe>Math.PI&&(Pe-=Ie),Ae<=Pe?o.theta=Math.max(Ae,Math.min(Pe,o.theta)):o.theta=o.theta>(Ae+Pe)/2?Math.max(Ae,o.theta):Math.min(Pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&I||n.object.isOrthographicCamera?o.radius=me(o.radius):o.radius=me(o.radius*d),L.setFromSpherical(o),L.applyQuaternion(he),re.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let tt=!1;if(n.zoomToCursor&&I){let Je=null;if(n.object.isPerspectiveCamera){const Ze=L.length();Je=me(Ze*d);const lt=Ze-Je;n.object.position.addScaledVector(E,lt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ze=new ue(A.x,A.y,0);Ze.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),tt=!0;const lt=new ue(A.x,A.y,0);lt.unproject(n.object),n.object.position.sub(lt).add(Ze),n.object.updateMatrixWorld(),Je=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Je!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Je).add(n.object.position):(Xs.origin.copy(n.object.position),Xs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xs.direction))<_M?e.lookAt(n.target):(Iu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xs.intersectPlane(Iu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),tt=!0);return d=1,I=!1,tt||B.distanceToSquared(n.object.position)>l||8*(1-ee.dot(n.object.quaternion))>l||be.distanceToSquared(n.target)>0?(n.dispatchEvent(Pu),B.copy(n.object.position),ee.copy(n.object.quaternion),be.copy(n.target),tt=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",He),n.domElement.removeEventListener("pointercancel",Qe),n.domElement.removeEventListener("wheel",D),n.domElement.removeEventListener("pointermove",Ye),n.domElement.removeEventListener("pointerup",Qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,o=new Tu,c=new Tu;let d=1;const u=new ue,h=new xt,f=new xt,g=new xt,y=new xt,S=new xt,p=new xt,m=new xt,w=new xt,b=new xt,E=new ue,A=new xt;let I=!1;const C=[],j={};function x(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function ie(L){c.theta-=L}function H(L){c.phi-=L}const N=(function(){const L=new ue;return function(he,B){L.setFromMatrixColumn(B,0),L.multiplyScalar(-he),u.add(L)}})(),W=(function(){const L=new ue;return function(he,B){n.screenSpacePanning===!0?L.setFromMatrixColumn(B,1):(L.setFromMatrixColumn(B,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(he),u.add(L)}})(),q=(function(){const L=new ue;return function(he,B){const ee=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;L.copy(be).sub(n.target);let Ie=L.length();Ie*=Math.tan(n.object.fov/2*Math.PI/180),N(2*he*Ie/ee.clientHeight,n.object.matrix),W(2*B*Ie/ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(he*(n.object.right-n.object.left)/n.object.zoom/ee.clientWidth,n.object.matrix),W(B*(n.object.top-n.object.bottom)/n.object.zoom/ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ve(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ae(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(L){if(!n.zoomToCursor)return;I=!0;const V=n.domElement.getBoundingClientRect(),he=L.clientX-V.left,B=L.clientY-V.top,ee=V.width,be=V.height;A.x=he/ee*2-1,A.y=-(B/be)*2+1,E.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function me(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function G(L){h.set(L.clientX,L.clientY)}function F(L){le(L),m.set(L.clientX,L.clientY)}function ne(L){y.set(L.clientX,L.clientY)}function Ee(L){f.set(L.clientX,L.clientY),g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const V=n.domElement;ie(2*Math.PI*g.x/V.clientHeight),H(2*Math.PI*g.y/V.clientHeight),h.copy(f),n.update()}function we(L){w.set(L.clientX,L.clientY),b.subVectors(w,m),b.y>0?ve(M()):b.y<0&&ae(M()),m.copy(w),n.update()}function Ce(L){S.set(L.clientX,L.clientY),p.subVectors(S,y).multiplyScalar(n.panSpeed),q(p.x,p.y),y.copy(S),n.update()}function Oe(L){le(L),L.deltaY<0?ae(M()):L.deltaY>0&&ve(M()),n.update()}function We(L){let V=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?ie(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?ie(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),V=!0;break}V&&(L.preventDefault(),n.update())}function ze(){if(C.length===1)h.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),V=.5*(C[0].pageY+C[1].pageY);h.set(L,V)}}function Me(){if(C.length===1)y.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),V=.5*(C[0].pageY+C[1].pageY);y.set(L,V)}}function Be(){const L=C[0].pageX-C[1].pageX,V=C[0].pageY-C[1].pageY,he=Math.sqrt(L*L+V*V);m.set(0,he)}function Fe(){n.enableZoom&&Be(),n.enablePan&&Me()}function z(){n.enableZoom&&Be(),n.enableRotate&&ze()}function it(L){if(C.length==1)f.set(L.pageX,L.pageY);else{const he=$(L),B=.5*(L.pageX+he.x),ee=.5*(L.pageY+he.y);f.set(B,ee)}g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const V=n.domElement;ie(2*Math.PI*g.x/V.clientHeight),H(2*Math.PI*g.y/V.clientHeight),h.copy(f)}function ke(L){if(C.length===1)S.set(L.pageX,L.pageY);else{const V=$(L),he=.5*(L.pageX+V.x),B=.5*(L.pageY+V.y);S.set(he,B)}p.subVectors(S,y).multiplyScalar(n.panSpeed),q(p.x,p.y),y.copy(S)}function ge(L){const V=$(L),he=L.pageX-V.x,B=L.pageY-V.y,ee=Math.sqrt(he*he+B*B);w.set(0,ee),b.set(0,Math.pow(w.y/m.y,n.zoomSpeed)),ve(b.y),m.copy(w)}function Le(L){n.enableZoom&&ge(L),n.enablePan&&ke(L)}function Ge(L){n.enableZoom&&ge(L),n.enableRotate&&it(L)}function He(L){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Ye),n.domElement.addEventListener("pointerup",Qe)),fe(L),L.pointerType==="touch"?Z(L):Mt(L))}function Ye(L){n.enabled!==!1&&(L.pointerType==="touch"?Se(L):dt(L))}function Qe(L){de(L),C.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Ye),n.domElement.removeEventListener("pointerup",Qe)),n.dispatchEvent(Lu),a=r.NONE}function Mt(L){let V;switch(L.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case Nr.DOLLY:if(n.enableZoom===!1)return;F(L),a=r.DOLLY;break;case Nr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;ne(L),a=r.PAN}else{if(n.enableRotate===!1)return;G(L),a=r.ROTATE}break;case Nr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;G(L),a=r.ROTATE}else{if(n.enablePan===!1)return;ne(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(gl)}function dt(L){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Ee(L);break;case r.DOLLY:if(n.enableZoom===!1)return;we(L);break;case r.PAN:if(n.enablePan===!1)return;Ce(L);break}}function D(L){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(L.preventDefault(),n.dispatchEvent(gl),Oe(L),n.dispatchEvent(Lu))}function T(L){n.enabled===!1||n.enablePan===!1||We(L)}function Z(L){switch(pe(L),C.length){case 1:switch(n.touches.ONE){case Or.ROTATE:if(n.enableRotate===!1)return;ze(),a=r.TOUCH_ROTATE;break;case Or.PAN:if(n.enablePan===!1)return;Me(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Or.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(),a=r.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(gl)}function Se(L){switch(pe(L),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;it(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ke(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ge(L),n.update();break;default:a=r.NONE}}function X(L){n.enabled!==!1&&L.preventDefault()}function fe(L){C.push(L)}function de(L){delete j[L.pointerId];for(let V=0;V<C.length;V++)if(C[V].pointerId==L.pointerId){C.splice(V,1);return}}function pe(L){let V=j[L.pointerId];V===void 0&&(V=new xt,j[L.pointerId]=V),V.set(L.pageX,L.pageY)}function $(L){const V=L.pointerId===C[0].pointerId?C[1]:C[0];return j[V.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",He),n.domElement.addEventListener("pointercancel",Qe),n.domElement.addEventListener("wheel",D,{passive:!1}),this.update()}}const bM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yM=new vh(-1,1,1,-1,0,1),vc=new $i;vc.setAttribute("position",new Yi([-1,3,0,-1,-1,0,3,-1,0],3));vc.setAttribute("uv",new Yi([0,2,0,0,2,0],2));class SM{constructor(e){this._mesh=new Yt(vc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ah extends wo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ji?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fh.clone(e.uniforms),this.material=new Ji({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new SM(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Du extends wo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,o;this.inverse?(l=0,o=1):(l=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class MM extends wo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new xt);this._width=n.width,this._height=n.height,t=new Zi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ma}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ah(bM),this.copyPass.material.blending=qi,this.clock=new Th}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Du!==void 0&&(l instanceof Du?n=!0:l instanceof MM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class EM extends wo{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}const TM={uniforms:{tDiffuse:{value:null},resolution:{value:new xt(1/1024,1/512)}},vertexShader:`

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
	`};class Rh{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const n=t*this.speed;this.animate(e,n),this.animationObjects.forEach((r,a)=>{const l=this.progress0.get(a);r(e,this.progress-l,a)}),this.progress+=n}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Uu extends Rh{animate(e){const t=this.progress*2,n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class ku extends Rh{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class AM extends $S{constructor(e="",t={}){const n=new Mh({transparent:!0,alphaTest:1e-5});super(n),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=n,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const n=t.measureText(this.text);e.width=this.margin[3]+n.actualBoundingBoxLeft+n.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+n.actualBoundingBoxAscent+n.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+n.actualBoundingBoxLeft,this.margin[0]+n.actualBoundingBoxAscent);const r=new Qs(e);r.magFilter=tn,r.minFilter=tn,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class RM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new iM(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new nM(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new JS,this.camera=new jn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Qn.enabled=!1,this.renderer=new Sh({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Zi(0,0,{depthTexture:new yh(0,0,Wi)})),this.composer=new wM(this.renderer,t),this.renderPass=new EM(this.scene,this.camera),this.fxaaPass=new Ah(TM),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new lM,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new yn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new xM(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Th,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=n=>{n.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",n=>{n.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Qs(this.skinCanvas),this.skinTexture.magFilter=tn,this.skinTexture.minFilter=tn,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Qs(this.capeCanvas),this.capeTexture.magFilter=tn,this.capeTexture.minFilter=tn,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Qs(this.earsCanvas),this.earsTexture.magFilter=tn,this.earsTexture.minFilter=tn,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ws(e))dM(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=mM(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Cu(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return js(e).then(n=>this.loadSkin(n,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ws(e))fM(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return js(e).then(n=>this.loadCape(n,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ws(e))t.textureType==="skin"?Cu(this.earsCanvas,e):gM(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return js(e).then(n=>this.loadEars(n,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,oo)}loadBackground(e,t){if(Ws(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Tn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return js(e).then(n=>this.loadBackground(n,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new ue).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new xt).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new xt).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Bt||e instanceof Tn?this.scene.background=e:this.scene.background=new Bt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof An||(e=new AM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const ti=Pt({list:[],active:null,ready:!1}),_l=new Map;function Wl(i,e){const t=window.__TAURI__?.core;return t?t.invoke(i,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function qs(){try{ti.list=await Wl("get_accounts"),ti.active=await Wl("get_active_account")}catch{}finally{ti.ready=!0}}function ds(i){return i?i.skin??(i.account_type?.type==="ely_by"?i.username:null):null}async function jl(i){if(!i)return null;const e=String(i).trim();if(!e||e.startsWith("data:"))return e||null;if(_l.has(e))return _l.get(e);try{const t=await Wl("proxy_skin_png",{source:e});return _l.set(e,t),t}catch{return null}}function CM(i){try{const e=String(i??"").split(",")[1]??"",t=atob(e.slice(0,44));if(t.length<24)return null;const n=l=>t.charCodeAt(l)&255;if(n(1)!==80||n(2)!==78||n(3)!==71)return null;const r=(n(16)<<24|n(17)<<16|n(18)<<8|n(19))>>>0,a=(n(20)<<24|n(21)<<16|n(22)<<8|n(23))>>>0;return!r||!a?null:{width:r,height:a}}catch{return null}}var PM=O('<button title="Toggle the hat/jacket outer layer"> </button>'),LM=O("<canvas></canvas> <!>",1);function gc(i,e){jt(e,!0);let t=at(e,"skin",3,null),n=at(e,"cape",3,null),r=at(e,"model",3,null),a=at(e,"width",3,260),l=at(e,"height",3,340),o=at(e,"walking",3,!1),c=at(e,"autorotate",3,!1),d=at(e,"zoom",3,.85),u=at(e,"outerLayer",15,!0),h=at(e,"showToggle",3,!1),f=J(null),g=null,y,S,p,m=J(null),w=J(null),b=0;function E(H){if(!H)return null;const N=String(H).trim();if(!N)return null;if(/^(https?:|data:)/i.test(N))return N;const W=window.__TAURI__?.core?.convertFileSrc;return W?W(N):N}function A(H){const N=String(H??"").trim().toLowerCase();return N==="slim"?"slim":N==="classic"?"default":"auto-detect"}function I(){g&&((s(m)!==y||A(r())!==p)&&(y=s(m),p=A(r()),s(m)?g.loadSkin(s(m),{model:p}).catch(()=>{}):g.resetSkin()),s(w)!==S&&(S=s(w),s(w)?g.loadCape(s(w)).catch(()=>{}):g.resetCape()))}function C(){const H=g?.playerObject?.skin;if(H)for(const N of[H.head,H.body,H.rightArm,H.leftArm,H.rightLeg,H.leftLeg])N?.outerLayer&&(N.outerLayer.visible=u())}_i(()=>(g=new RM({canvas:s(f),width:a(),height:l(),zoom:d(),fov:55}),g.controls.enablePan=!1,g.controls.enableZoom=!0,g.autoRotate=c(),g.animation=o()?new ku:new Uu,I(),C(),()=>{g?.dispose(),g=null})),nn(()=>{const H=t(),N=n(),W=++b;(async()=>{const q=await jl(H),ve=await jl(N);W===b&&(v(m,q??E(H),!0),v(w,ve??E(N),!0))})()}),nn(()=>{I(),C()}),nn(()=>{u(),g&&C()}),nn(()=>{g&&(g.animation=o()?new ku:new Uu)}),nn(()=>{g&&(g.autoRotate=c())}),nn(()=>{g&&g.setSize(a(),l())});var j=LM(),x=St(j);rc(x,H=>v(f,H),()=>s(f));var M=_(x,2);{var ie=H=>{var N=PM(),W=K(N);ce(()=>{_t(N,1,`rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) ${u()?"text-(--accent)":""}`),je(N,"aria-pressed",u()),Q(W,`Outer layer: ${u()?"on":"off"}`)}),Y("click",N,()=>u(!u())),U(H,N)};Te(M,H=>{h()&&H(ie)})}ce(()=>In(x,`width:${a()??""}px;height:${l()??""}px;display:block`)),U(i,j),Xt()}rn(["click"]);var IM=O('<span class="absolute inset-0"></span> <span class="absolute inset-0"></span>',1),DM=O('<span class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"> </span>'),UM=O("<span><!></span>");function _c(i,e){jt(e,!0);let t=at(e,"source",3,null),n=at(e,"size",3,32),r=at(e,"letter",3,null),a=at(e,"class",3,""),l=J(null),o=J(1),c=0;nn(()=>{const p=t(),m=++c;(async()=>{const w=await jl(p);if(m!==c)return;v(l,w,!0);const b=w?CM(w):null;v(o,b&&b.height&&b.width?b.height/b.width:1,!0)})()}),ac(()=>{c+=1});const d=pt(()=>(800*s(o)).toFixed(4)),u=pt(()=>(100/(8*s(o)-1)).toFixed(4)),h=pt(()=>s(l)?`background-image:url(${s(l)});background-size:800% ${s(d)}%;image-rendering:pixelated;`:"");var f=UM(),g=R(f);{var y=p=>{var m=IM(),w=St(m),b=_(w,2);ce(()=>{In(w,`${s(h)}background-position:14.2857% ${s(u)}%`),In(b,`${s(h)}background-position:71.4286% ${s(u)}%`)}),U(p,m)},S=p=>{var m=DM(),w=K(m,!0);ce(()=>{In(m,`font-size:${n()*.45}px`),Q(w,r())}),U(p,m)};Te(g,p=>{s(l)?p(y):r()&&p(S,1)})}ce(()=>{_t(f,1,`relative inline-block shrink-0 overflow-hidden ${a()??""}`),In(f,`width:${n()??""}px;height:${n()??""}px`)}),U(i,f),Xt()}var kM=O('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),NM=O(`<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40" title="Silently renew this account's token"> </button>`),OM=O('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),FM=O('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),BM=O('<div><div class="flex items-center gap-3"><!> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),zM=O('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),GM=O('<p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),HM=O('<div class="flex flex-col"><!> <!></div>');function Ch(i,e){jt(e,!0);let t=at(e,"accounts",19,()=>[]),n=at(e,"active",3,null),r=J(""),a=J(!1),l=J(null),o=J(""),c=J(""),d=J(null);function u(x,M){const ie=window.__TAURI__?.core;return ie?ie.invoke(x,M):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function h(x){v(r,"");try{await u("set_active_account",{id:x}),await e.onrefresh?.()}catch(M){v(r,String(M),!0)}}async function f(x){v(r,"");try{await u("remove_account",{id:x}),s(l)===x&&v(l,null),await e.onrefresh?.()}catch(M){v(r,String(M),!0)}}async function g(x){const M=y(x);if(M){v(r,""),v(d,x.id,!0);try{await u(M,{id:x.id}),await e.onrefresh?.()}catch(ie){v(r,String(ie),!0)}finally{v(d,null)}}}function y(x){const M=x.account_type?.type;return M==="microsoft"?"refresh_microsoft_account":M==="ely_by"&&x.refresh_token?"refresh_elyby_account":null}function S(x){if(s(l)===x.id){v(l,null);return}v(l,x.id,!0),v(o,x.skin??"",!0),v(c,x.cape??"",!0)}async function p(x){const M=window.__TAURI__?.dialog?.open;if(!M){v(r,"File picker unavailable in this build.");return}try{const ie=await M({multiple:!1,title:x==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!ie)return;v(x==="skin"?o:c,String(ie),!0),v(r,"")}catch(ie){v(r,String(ie),!0)}}async function m(){v(r,""),v(a,!0);try{await u("set_account_textures",{id:s(l),skin:s(o).trim()||null,cape:s(c).trim()||null}),await e.onrefresh?.(),v(l,null)}catch(x){v(r,String(x),!0)}finally{v(a,!1)}}async function w(){v(o,""),v(c,""),await m()}function b(x){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[x.account_type.type]??"Yggdrasil"}const E=pt(()=>t().find(x=>x.id===s(l))??null);var A=HM(),I=R(A);Et(I,17,t,x=>x.id,(x,M)=>{var ie=BM(),H=R(ie),N=R(H);{let ge=pt(()=>ds(s(M))),Le=pt(()=>s(M).username[0]?.toUpperCase()??"?");_c(N,{get source(){return s(ge)},size:32,get letter(){return s(Le)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var W=_(N,2),q=R(W),ve=R(q),ae=K(ve,!0),le=_(ve,2),me=K(le,!0),G=_(le,2);{var F=ge=>{var Le=kM();U(ge,Le)};Te(G,ge=>{n()?.id===s(M).id&&ge(F)})}var ne=_(q,2),Ee=K(ne,!0),we=_(W,2),Ce=R(we),Oe=R(Ce);Ei(Oe,{emoji:"🎨"});var We=_(Ce,2);{var ze=ge=>{var Le=NM(),Ge=K(Le,!0);ce(()=>{Le.disabled=s(d)!==null,Q(Ge,s(d)===s(M).id?"Refreshing…":"Refresh token")}),Y("click",Le,()=>g(s(M))),U(ge,Le)},Me=pt(()=>y(s(M)));Te(We,ge=>{s(Me)&&ge(ze)})}var Be=_(We,2);{var Fe=ge=>{var Le=OM();Y("click",Le,()=>h(s(M).id)),U(ge,Le)};Te(Be,ge=>{n()?.id!==s(M).id&&ge(Fe)})}var z=_(Be,2),it=_(H,2);{var ke=ge=>{var Le=FM(),Ge=R(Le);{let fe=pt(()=>s(E)?.model);gc(Ge,{get skin(){return s(o)},get cape(){return s(c)},get model(){return s(fe)},width:110,height:150})}var He=_(Ge,2),Ye=R(He),Qe=_(R(Ye)),Mt=K(Qe,!0),dt=_(Ye,2),D=_(R(dt)),T=K(D,!0),Z=_(dt,2),Se=R(Z),X=_(Se,2);ce(()=>{Q(Mt,s(o)||"default (Steve/Alex)"),Q(T,s(c)||"none"),Se.disabled=s(a)}),Y("click",Ye,()=>p("skin")),Y("click",dt,()=>p("cape")),Y("click",Se,m),Y("click",X,w),U(ge,Le)};Te(it,ge=>{s(l)===s(M).id&&s(E)&&ge(ke)})}ce(ge=>{_t(ie,1,`border-b border-(--border) px-4 py-2.5 ${n()?.id===s(M).id?"bg-(--accent)/10":""}`),Q(ae,s(M).username),Q(me,ge),Q(Ee,s(M).uuid)},[()=>b(s(M))]),Y("click",Ce,()=>S(s(M))),Y("click",z,()=>f(s(M).id)),U(x,ie)},x=>{var M=zM();U(x,M)});var C=_(I,2);{var j=x=>{var M=GM(),ie=K(M,!0);ce(()=>Q(ie,s(r))),U(x,M)};Te(C,x=>{s(r)&&x(j)})}U(i,A),Xt()}rn(["click"]);var VM=O('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <div class="border-t border-(--border)"><!></div></div></div></div>');function WM(i,e){jt(e,!0);let t=at(e,"accounts",19,()=>[]),n=at(e,"active",3,null);_i(()=>{const f=Ca(()=>e.onclose?.());return()=>Pa(f)});var r=VM(),a=R(r),l=R(a),o=_(R(l),2),c=_(l,2),d=R(c);Gf(d,{get onrefresh(){return e.onrefresh}});var u=_(d,2),h=R(u);Ch(h,{get accounts(){return t()},get active(){return n()},get onrefresh(){return e.onrefresh}}),Y("click",r,f=>{f.target===f.currentTarget&&e.onclose?.()}),Y("click",o,()=>e.onclose?.()),U(i,r),Xt()}rn(["click"]);var jM=O('<button><span class="truncate"> </span></button>'),XM=O('<span class="text-[9px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),qM=O('<button><!> <span class="text-[12px] font-medium"> </span> <!></button>'),YM=O('<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]"><dt class="text-(--text-muted)">Profile UUID</dt> <dd class="min-w-0 truncate font-mono"> </dd> <dt class="text-(--text-muted)">Skin source</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Cape</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Renewable token</dt> <dd class="min-w-0 truncate"> </dd></dl></div>'),KM=O('<div class="mt-6 flex flex-wrap gap-2"></div> <!>',1),ZM=O(`<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><p class="text-sm font-medium">No accounts yet</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom
              Yggdrasil server — everything lives in the Add Account section.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Add an account</button></div>`),JM=O('<h2 class="text-[16px] font-semibold">Account overview</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The character launches use, with the hat/jacket outer layer included.</p> <!>',1),QM=O('<h2 class="text-[16px] font-semibold">Add account</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.</p> <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),$M=O('<h2 class="text-[16px] font-semibold">Saved accounts</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Set the active profile, renew tokens silently, edit skins — or remove accounts.</p> <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),ew=O('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Accounts sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div></div>');function tw(i,e){jt(e,!0);const t=[{id:"overview",label:"Overview"},{id:"add",label:"Add Account"},{id:"saved",label:"Saved Accounts"}];let n=J("overview"),r=J(null);const a=pt(()=>{const w=ti.list;return w.find(b=>b.id===s(r))??w.find(b=>b.id===ti.active?.id)??w[0]??null});let l=J(!0);function o(w){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[w.account_type.type]??"Yggdrasil"}var c=ew(),d=R(c),u=R(d),h=_(u,2);Et(h,21,()=>t,w=>w.id,(w,b)=>{var E=jM(),A=R(E),I=K(A,!0);ce(()=>{_t(E,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${s(n)===s(b).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(E,"aria-current",s(n)===s(b).id?"true":void 0),Q(I,s(b).label)}),Y("click",E,()=>v(n,s(b).id,!0)),U(w,E)});var f=_(d,2),g=R(f),y=R(g);{var S=w=>{var b=JM(),E=_(St(b),4);{var A=C=>{var j=KM(),x=St(j);Et(x,21,()=>ti.list,H=>H.id,(H,N)=>{var W=qM(),q=R(W);{let G=pt(()=>ds(s(N))),F=pt(()=>s(N).username[0]?.toUpperCase()??"?");_c(q,{get source(){return s(G)},size:24,get letter(){return s(F)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var ve=_(q,2),ae=K(ve,!0),le=_(ve,2);{var me=G=>{var F=XM();U(G,F)};Te(le,G=>{ti.active?.id===s(N).id&&G(me)})}ce(()=>{_t(W,1,`flex items-center gap-2 rounded border px-2 py-1.5 text-left ${s(a)?.id===s(N).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(W,"title",`Preview ${s(N).username??""}`),Q(ae,s(N).username)}),Y("click",W,()=>v(r,s(N).id,!0)),U(H,W)});var M=_(x,2);{var ie=H=>{var N=YM(),W=R(N);{let Me=pt(()=>ds(s(a)));gc(W,{get skin(){return s(Me)},get cape(){return s(a).cape},get model(){return s(a).model},width:230,height:310,showToggle:!0,get outerLayer(){return s(l)},set outerLayer(Be){v(l,Be,!0)}})}var q=_(W,2),ve=R(q),ae=K(ve,!0),le=_(ve,2),me=K(le,!0),G=_(q,2),F=_(R(G),2),ne=K(F,!0),Ee=_(F,4),we=K(Ee,!0),Ce=_(Ee,4),Oe=K(Ce,!0),We=_(Ce,4),ze=K(We,!0);ce(Me=>{Q(ae,s(a).username),Q(me,Me),je(F,"title",s(a).uuid),Q(ne,s(a).uuid),je(Ee,"title",s(a).skin??"default (Steve/Alex)"),Q(we,s(a).skin?"custom skin":"default (Steve/Alex)"),Q(Oe,s(a).cape?"custom cape":"none"),Q(ze,s(a).refresh_token?"yes — silent refresh available":"no")},[()=>o(s(a))]),U(H,N)};Te(M,H=>{s(a)&&H(ie)})}U(C,j)},I=C=>{var j=ZM(),x=_(R(j),4);Y("click",x,()=>v(n,"add")),U(C,j)};Te(E,C=>{ti.list.length?C(A):C(I,-1)})}U(w,b)},p=w=>{var b=QM(),E=_(St(b),4),A=R(E);Gf(A,{get onrefresh(){return e.onrefresh}}),U(w,b)},m=w=>{var b=$M(),E=_(St(b),4),A=R(E);Ch(A,{get accounts(){return ti.list},get active(){return ti.active},get onrefresh(){return e.onrefresh}}),U(w,b)};Te(y,w=>{s(n)==="overview"?w(S):s(n)==="add"?w(p,1):w(m,-1)})}Y("click",u,function(...w){e.onback?.apply(this,w)}),U(i,c),Xt()}rn(["click"]);var nw=O('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),iw=O('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),rw=O('<p class="text-center text-[11px] text-red-400"> </p>'),aw=O("<option> </option>"),sw=O("<option>No instances yet</option>"),ow=O('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),lw=O('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),cw=O('<p class="mt-2 text-[11px] text-red-400"> </p>'),dw=O('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="flex items-center gap-1.5 rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer"><!> Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),uw=O('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function fw(i,e){jt(e,!0);let t=at(e,"instances",19,()=>[]),n=at(e,"active",3,null),r=at(e,"gameRunning",3,!1),a=at(e,"status",3,"Ready");function l(H,N){const W=window.__TAURI__?.core;return W?W.invoke(H,N):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const o="twilight-pinned-servers";let c=J(Pt(f())),d=J(""),u=J(""),h=J("");function f(){try{const H=JSON.parse(localStorage.getItem(o)??"[]");return Array.isArray(H)?H:[]}catch{return[]}}function g(){localStorage.setItem(o,JSON.stringify(s(c)))}function y(H){H.preventDefault(),v(h,"");const N=s(u).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(N)){v(h,"Address must be a hostname (optionally host:port).");return}v(c,[...s(c),{name:s(d).trim()||N.split(":")[0],address:N}],!0),g(),v(d,""),v(u,"")}function S(H){v(c,s(c).filter((N,W)=>W!==H),!0),g()}let p=J("");nn(()=>{s(p)&&t().some(H=>H.id===s(p))||v(p,t()[0]?.id??"",!0)});const m=pt(()=>t().find(H=>H.id===s(p))?.name??"no instance selected");function w(H){!s(p)||r()||e.onlaunch?.(s(p),H.address)}let b=J(""),E=J(!1);async function A(H){const N=window.__TAURI__?.dialog?.open;if(!N){v(b,"File picker unavailable in this build.");return}try{const W=await N({multiple:!1,title:H==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!W)return;v(E,!0),v(b,""),await l("set_account_textures",{id:n().id,skin:H==="skin"?String(W):null,cape:H==="cape"?String(W):null}),await e.onrefresh?.()}catch(W){v(b,String(W),!0)}finally{v(E,!1)}}async function I(){if(n())try{v(E,!0),await l("set_account_textures",{id:n().id,skin:null,cape:null}),await e.onrefresh?.()}catch(H){v(b,String(H),!0)}finally{v(E,!1)}}function C(H){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[H.account_type.type]??"Yggdrasil"}var j=uw(),x=R(j);{var M=H=>{var N=nw(),W=R(N);Ei(W,{emoji:"👤",size:30});var q=_(W,6);Y("click",q,()=>e.onopenaccounts?.()),U(H,N)},ie=H=>{var N=dw(),W=R(N),q=R(W);Rf(q,()=>n()?.id,Z=>{{let Se=pt(()=>ds(n()));gc(Z,{get skin(){return s(Se)},get cape(){return n().cape},get model(){return n().model},width:220,height:300})}});var ve=_(q,2),ae=R(ve),le=K(ae,!0),me=_(ae,2),G=K(me,!0),F=_(ve,2),ne=R(F),Ee=_(ne,2),we=_(Ee,2);{var Ce=Z=>{var Se=iw();ce(()=>Se.disabled=s(E)),Y("click",Se,I),U(Z,Se)};Te(we,Z=>{(n().cape||n().skin)&&Z(Ce)})}var Oe=_(F,2);{var We=Z=>{var Se=rw(),X=K(Se,!0);ce(()=>Q(X,s(b))),U(Z,Se)};Te(Oe,Z=>{s(b)&&Z(We)})}var ze=_(W,2),Me=R(ze),Be=_(R(Me),2),Fe=R(Be);Et(Fe,21,t,Z=>Z.id,(Z,Se)=>{var X=aw(),fe=K(X,!0),de={};ce(()=>{Q(fe,s(Se).name),de!==(de=s(Se).id)&&(X.value=(X.__value=de)??"")}),U(Z,X)},Z=>{var Se=sw();Se.value=Se.__value="",U(Z,Se)}),xa(Fe);var z=_(Fe,2),it=R(z);Wt(it,{name:"log",size:12});var ke=_(Be,2),ge=K(ke,!0),Le=_(ke,2),Ge=K(Le,!0),He=_(Me,2),Ye=_(R(He),2);Et(Ye,19,()=>s(c),Z=>Z.address,(Z,Se,X)=>{var fe=ow(),de=R(fe),pe=R(de),$=K(pe,!0),L=_(pe,2),V=K(L,!0),he=_(de,2),B=_(he,2);ce(()=>{Q($,s(Se).name),Q(V,s(Se).address),he.disabled=!s(p)||r(),je(he,"title",`Join ${s(Se).address} with ${s(m)}`)}),Y("click",he,()=>w(s(Se))),Y("click",B,()=>S(s(X))),U(Z,fe)},Z=>{var Se=lw();U(Z,Se)});var Qe=_(Ye,2),Mt=R(Qe),dt=_(Mt,2),D=_(Qe,2);{var T=Z=>{var Se=cw(),X=K(Se,!0);ce(()=>Q(X,s(h))),U(Z,Se)};Te(D,Z=>{s(h)&&Z(T)})}ce(Z=>{Q(le,n().username),Q(G,Z),ne.disabled=s(E),Ee.disabled=s(E),ke.disabled=!s(p)||r(),Q(ge,r()?"GAME RUNNING…":"LAUNCH GAME"),Q(Ge,r()?a():s(m))},[()=>C(n())]),Y("click",ne,()=>A("skin")),Y("click",Ee,()=>A("cape")),ba(Fe,()=>s(p),Z=>v(p,Z)),Y("click",z,()=>e.onopenconsole?.()),Y("click",ke,()=>e.onlaunch?.(s(p),null)),kn("submit",Qe,y),Ot(Mt,()=>s(d),Z=>v(d,Z)),Ot(dt,()=>s(u),Z=>v(u,Z)),U(H,N)};Te(x,H=>{n()?H(ie,-1):H(M)})}U(i,j),Xt()}rn(["click"]);var hw=O("<span></span>"),pw=O('<button><span class="block text-[12.5px] font-medium"> </span> <span class="mt-0.5 block text-[11px] text-(--text-muted)"> </span></button>'),mw=O('<p class="text-[12px] text-(--text-muted)">Pick the server software.</p> <div class="mt-3 grid grid-cols-2 gap-2"></div>',1),vw=O('<p class="mt-4 text-[12px] text-(--text-muted)">Fetching versions…</p>'),gw=O('<p class="mt-4 text-[12px] text-amber-500"> </p>'),_w=O("<button> </button>"),xw=O('<div class="mt-3 grid max-h-[380px] grid-cols-4 gap-1.5 overflow-y-auto"></div>'),bw=O('<div class="flex items-center justify-between"><p class="text-[12px] text-(--text-muted)"> </p> <button class="text-[11px] text-(--accent) hover:underline">back</button></div> <!>',1),yw=O('<p class="mt-1 text-[11px] text-amber-500">Max memory is below min — the flag is skipped.</p>'),Sw=O('<div class="flex items-center justify-between"><p class="text-[12px] text-(--text-muted)">Name, port and memory.</p> <button class="text-[11px] text-(--accent) hover:underline">back</button></div> <label for="ns-name" class="mt-4 block text-[11px] font-medium text-(--text-muted)">Server name</label> <input id="ns-name" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-3) px-2.5 text-[12.5px] outline-none focus:border-(--accent)" placeholder="My Server"/> <label for="ns-port" class="mt-3 block text-[11px] font-medium text-(--text-muted)">Port</label> <input id="ns-port" type="number" min="1024" max="65535" class="mt-1 h-8 w-40 rounded border border-(--border) bg-(--bg-3) px-2.5 text-[12.5px] outline-none focus:border-(--accent)"/> <p class="mt-3 block text-[11px] font-medium text-(--text-muted)"> </p> <input class="mt-1 w-full accent-(--accent)" type="range" min="512" max="8192" step="256"/> <input class="mt-1 w-full accent-(--accent)" type="range" min="1024" max="32768" step="512"/> <!> <div class="mt-4 flex justify-end"><button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Next: Networking</button></div>',1),Mw=O(`<div class="mt-2 rounded border border-amber-500/40 bg-amber-500/10 p-2.5 text-[11px] text-amber-500">Offline Server Notice: With online-mode=false, anyone can connect using any username or spoof administrator UUIDs.
            You can 1-click install AuthMeReloaded from the server card afterwards.</div>`),ww=O('<p class="mt-3 text-[11px] text-rose-400"> </p>'),Ew=O('<div class="flex items-center justify-between"><p class="text-[12px] text-(--text-muted)">Who can reach the server?</p> <button class="text-[11px] text-(--accent) hover:underline">back</button></div> <div class="mt-3 grid gap-2"><button><span class="block text-[12.5px] font-medium">Local Only</span> <span class="mt-0.5 block text-[11px] text-(--text-muted)">LAN and localhost — no tunnel.</span></button> <button><span class="block text-[12.5px] font-medium">Enable Minekube Connect Tunnel</span> <span class="mt-0.5 block text-[11px] text-(--text-muted)">Friends join over the internet without port forwarding (connect.minekube.com).</span></button></div> <label class="mt-4 flex cursor-pointer items-start gap-2.5"><input type="checkbox" class="mt-0.5 accent-(--accent)"/> <span class="min-w-0"><span class="block text-[12.5px] font-medium">Offline Mode (online-mode=false)</span> <span class="mt-0.5 block text-[11px] text-(--text-muted)">Allows cracked / third-party clients. TwilightMC recommends AuthMeReloaded for these servers.</span></span></label> <!> <!>',1),Tw=O('<button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button>'),Aw=O('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="dialog" aria-modal="true" aria-label="New server" class="flex max-h-[640px] w-[560px] flex-col rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-center justify-between border-b border-(--border) p-4"><h3 class="text-[14px] font-semibold">New Server</h3> <div class="flex items-center gap-1.5"></div></div> <div class="min-h-0 flex-1 overflow-y-auto p-4"><!></div> <div class="flex items-center justify-between border-t border-(--border) p-4"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <!></div></div></div>');function Rw(i,e){jt(e,!0);const t=[{id:"paper",label:"Paper",note:"High-performance Bukkit server"},{id:"purpur",label:"Purpur",note:"Paper fork, maximum configurability"},{id:"vanilla",label:"Vanilla",note:"Official Mojang server"},{id:"fabric",label:"Fabric",note:"Lightweight mod loader"},{id:"pumpkin",label:"PumpkinMC (Rust)",note:"Multithreaded native server"},{id:"velocity",label:"Velocity",note:"Modern proxy (no world)"},{id:"forge",label:"Forge",note:"Mod loader — manual installer"},{id:"neoforge",label:"NeoForge",note:"Mod loader — manual installer"},{id:"steel",label:"SteelMC (Rust)",note:"Native server — manual installer"}];let n=J(1),r=J(""),a=J(Pt([])),l=J(""),o=J(!1),c=J(""),d=J(""),u=J(25565),h=J(1024),f=J(4096),g=J(!0),y=J(!1),S=J(""),p=J("");const m={forge:"TwilightMC cannot fetch Forge installers automatically — create the folder and run the installer yourself.",neoforge:"TwilightMC cannot fetch NeoForge installers automatically — create the folder and run the installer yourself.",steel:"SteelMC publishes no releases yet — create the folder and build it from source."};async function w(G){v(r,G,!0),v(c,""),v(a,[],!0),v(l,""),v(n,2),v(o,!0);try{v(a,await window.__TAURI__.core.invoke("fetch_server_versions",{software:G}),!0),(G==="paper"||G==="velocity")&&v(a,[...s(a)].reverse().slice(0,80),!0),G==="fabric"&&v(a,s(a).slice(0,80),!0),s(a).length===0&&m[G]&&v(l,m[G],!0)}catch(F){v(l,String(F),!0)}finally{v(o,!1)}}function b(G){v(c,G,!0),s(d).trim()||v(d,`${E(s(r))} ${G.split("+")[0]}`),v(n,3)}function E(G){return t.find(F=>F.id===G)?.label??G}async function A(){v(p,""),v(S,"create");try{await window.__TAURI__.core.invoke("create_server",{config:{name:s(d).trim(),software:s(r),version:s(c).trim()||"manual",loader_version:null,port:Number(s(u))||25565,min_memory_mb:Number(s(h))||0,max_memory_mb:Number(s(f))||0,offline_mode:s(y),connect:!s(g)}}),e.oncreated?.(),e.onclose?.(),Jt(`Server ${s(d).trim()} created.`,"success")}catch(G){v(p,String(G),!0)}finally{v(S,"")}}var I=Aw(),C=R(I),j=R(C),x=_(R(j),2);Et(x,20,()=>[1,2,3,4],G=>G,(G,F)=>{var ne=hw();ce(()=>_t(ne,1,`h-1.5 w-6 rounded-full ${s(n)>=F?"bg-(--accent)":"bg-(--bg-3)"}`)),U(G,ne)});var M=_(j,2),ie=R(M);{var H=G=>{var F=mw(),ne=_(St(F),2);Et(ne,21,()=>t,Ee=>Ee.id,(Ee,we)=>{var Ce=pw(),Oe=R(Ce),We=K(Oe,!0),ze=_(Oe,2),Me=K(ze,!0);ce(()=>{_t(Ce,1,`rounded border px-3 py-2.5 text-left transition-colors ${s(r)===s(we).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--accent)"}`),Q(We,s(we).label),Q(Me,s(we).note)}),Y("click",Ce,()=>w(s(we).id)),U(Ee,Ce)}),U(G,F)},N=G=>{var F=bw(),ne=St(F),Ee=R(ne),we=K(Ee),Ce=_(Ee,2),Oe=_(ne,2);{var We=Be=>{var Fe=vw();U(Be,Fe)},ze=Be=>{var Fe=gw(),z=K(Fe,!0);ce(()=>Q(z,s(l))),U(Be,Fe)},Me=Be=>{var Fe=xw();Et(Fe,20,()=>s(a),z=>z,(z,it)=>{var ke=_w(),ge=K(ke,!0);ce(Le=>{_t(ke,1,`rounded border px-2 py-1.5 text-[11.5px] transition-colors ${s(c)===it?"border-(--accent) bg-(--brand-tint) font-medium text-(--accent)":"border-(--border) hover:border-(--accent)"}`),Q(ge,Le)},[()=>it.split("+")[0]]),Y("click",ke,()=>b(it)),U(z,ke)}),U(Be,Fe)};Te(Oe,Be=>{s(o)?Be(We):s(l)?Be(ze,1):Be(Me,-1)})}ce(Be=>Q(we,`Pick the version for ${Be??""}.`),[()=>E(s(r))]),Y("click",Ce,()=>v(n,1)),U(G,F)},W=G=>{var F=Sw(),ne=St(F),Ee=_(R(ne),2),we=_(ne,4),Ce=_(we,4),Oe=_(Ce,2),We=K(Oe),ze=_(Oe,2),Me=_(ze,2),Be=_(Me,2);{var Fe=ke=>{var ge=yw();U(ke,ge)};Te(Be,ke=>{s(f)<s(h)&&ke(Fe)})}var z=_(Be,2),it=K(z);ce(()=>Q(We,`Memory: ${s(h)??""}-${s(f)??""} MiB`)),Y("click",Ee,()=>v(n,2)),Ot(we,()=>s(d),ke=>v(d,ke)),Ot(Ce,()=>s(u),ke=>v(u,ke)),Ot(ze,()=>s(h),ke=>v(h,ke)),Ot(Me,()=>s(f),ke=>v(f,ke)),Y("click",it,()=>v(n,4)),U(G,F)},q=G=>{var F=Ew(),ne=St(F),Ee=_(R(ne),2),we=_(ne,2),Ce=R(we),Oe=_(Ce,2),We=_(we,2),ze=R(We),Me=_(We,2);{var Be=it=>{var ke=Mw();U(it,ke)};Te(Me,it=>{s(y)&&it(Be)})}var Fe=_(Me,2);{var z=it=>{var ke=ww(),ge=K(ke,!0);ce(()=>Q(ge,s(p))),U(it,ke)};Te(Fe,it=>{s(p)&&it(z)})}ce(()=>{_t(Ce,1,`rounded border px-3 py-2.5 text-left transition-colors ${s(g)?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--accent)"}`),_t(Oe,1,`rounded border px-3 py-2.5 text-left transition-colors ${s(g)?"border-(--border) hover:border-(--accent)":"border-(--accent) bg-(--brand-tint)"}`)}),Y("click",Ee,()=>v(n,3)),Y("click",Ce,()=>v(g,!0)),Y("click",Oe,()=>v(g,!1)),Tm(ze,()=>s(y),it=>v(y,it)),U(G,F)};Te(ie,G=>{s(n)===1?G(H):s(n)===2?G(N,1):s(n)===3?G(W,2):G(q,-1)})}var ve=_(M,2),ae=R(ve),le=_(ae,2);{var me=G=>{var F=Tw(),ne=K(F,!0);ce(Ee=>{F.disabled=Ee,Q(ne,s(S)==="create"?"Creating…":"Create Server")},[()=>s(S)!==""||!s(d).trim()]),Y("click",F,A),U(G,F)};Te(le,G=>{s(n)===4&&G(me)})}ce(()=>ae.disabled=s(S)!==""),Y("click",I,G=>{G.target===G.currentTarget&&!s(S)&&e.onclose?.()}),Y("click",ae,function(...G){e.onclose?.apply(this,G)}),U(i,I),Xt()}rn(["click"]);var Cw=O('<p class="mt-6 text-[13px] text-(--text-muted)">Scanning servers…</p>'),Pw=O('<p class="mt-6 text-[13px] text-rose-400"> </p>'),Lw=O('<div class="mt-8 rounded-lg border border-(--border) bg-(--bg-subtle) p-6 text-center"><p class="text-[13px] font-medium">No local servers yet</p> <p class="mt-1 text-[12px] text-(--text-muted)">Create one with the wizard — Vanilla, Paper, Purpur, Fabric or the Rust-native PumpkinMC.</p></div>'),Iw=O("<span> </span>"),Dw=O('<div class="mt-2 flex items-center gap-2"><code class="min-w-0 flex-1 truncate rounded bg-(--bg-3) px-2 py-1 text-[11px]"> </code> <button class="shrink-0 rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)">Copy Share Link</button></div>'),Uw=O('<button class="mt-2 w-full rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40">Start to activate the tunnel</button>'),kw=O('<button class="mt-1.5 w-full rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40">(Re)install Connect plugin</button>'),Nw=O('<div class="mt-3 rounded border border-(--border) bg-(--bg-2) p-2.5"><div class="flex items-center justify-between gap-2"><span class="text-[11px] font-medium">Minekube Connect</span> <span> </span></div> <!> <!></div>'),Ow=O('<button class="mt-2 w-full rounded border border-amber-500/50 px-2 py-1 text-[11px] font-medium text-amber-500 hover:bg-amber-500/10 disabled:opacity-40">Install AuthMeReloaded (Recommended for Offline Servers)</button>'),Fw=O('<div class="mt-2 rounded border border-amber-500/40 bg-amber-500/10 p-2.5"><p class="text-[11px] text-amber-500">Offline Server Notice: With online-mode=false, anyone can connect using any username or spoof administrator UUIDs.</p> <!></div>'),Bw=O('<button class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40">Graceful Stop</button> <button class="rounded border border-rose-500/40 px-2 py-1 text-[11px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">Kill</button>',1),zw=O('<button class="rounded border border-(--accent) px-2 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent-hover) disabled:opacity-40">Start</button> <button class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40">Restart</button>',1),Gw=O('<span class="text-(--text-muted)">No output yet — start the server.</span>'),Hw=O('<div class="whitespace-pre-wrap break-all"> </div>'),Vw=O('<!> <!> <div class="mt-3 grid grid-cols-3 gap-1.5"><!> <button class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)">Open Folder</button> <button class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)">Edit Properties</button> <button class="rounded border border-rose-500/40 px-2 py-1 text-[11px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">Delete</button></div> <div class="mt-3 flex h-44 flex-col overflow-hidden rounded border border-(--border) bg-(--bg-2)"><div class="min-h-0 flex-1 overflow-y-auto p-2 font-mono text-[10.5px] leading-relaxed"><!></div> <form class="flex items-center gap-1.5 border-t border-(--border) px-2 py-1.5"><span class="text-[11px] text-(--accent)">&gt;</span> <input class="h-6 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-3) px-2 font-mono text-[11px] outline-none focus:border-(--accent)"/></form></div>',1),Ww=O('<div><button class="block w-full text-left"><div class="flex items-center justify-between gap-2"><span class="truncate text-[13px] font-medium"> </span> <span> </span></div> <div class="mt-1.5 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="rounded bg-(--bg-3) px-1.5 py-0.5 font-medium text-(--text-main)"> </span> <span> </span> <!></div></button> <!></div>'),jw=O('<div class="mt-4 grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"></div>'),Xw=O('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="dialog" aria-modal="true" aria-label="Edit server properties" class="flex h-[520px] w-[560px] flex-col rounded-lg border border-(--border-1) bg-(--bg-2) p-4 shadow-2xl animate-[fade-in_120ms_ease-out]"><h3 class="text-[14px] font-semibold"> </h3> <textarea class="mt-3 min-h-0 flex-1 resize-none rounded border border-(--border) bg-(--bg-3) p-2.5 font-mono text-[11.5px] leading-relaxed outline-none focus:border-(--accent)" spellcheck="false"></textarea> <div class="mt-3 flex justify-end gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div></div></div>'),qw=O('<div class="flex min-h-0 flex-1 flex-col"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">Servers &amp; P2P</h2> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">+ New Server</button></div> <!></div> <!> <!>',1);function Yw(i,e){jt(e,!0);let t=J(Pt([])),n=J(""),r=J(!0),a=J(null),l=J(!1),o=J(""),c=J(Pt({})),d=J(Pt({})),u=J(""),h=J(!1),f=J(""),g=J(null);const y=2e3;function S(Me,Be){return window.__TAURI__.core.invoke(Me,Be)}async function p(){v(n,"");try{v(t,await S("list_servers"),!0),s(a)&&!s(t).some(Me=>Me.id===s(a))&&v(a,null);for(const Me of s(t))try{const[Be,Fe]=await S("get_connect_status",{id:Me.id});v(d,{...s(d),[Me.id]:{connect:Be,endpoint:Fe}},!0)}catch{}}catch(Me){v(n,String(Me),!0)}finally{v(r,!1)}}function m(Me,Be){const Fe={...s(c)},z=[...Fe[Me]??[],Be];z.length>y&&z.splice(0,z.length-y),Fe[Me]=z,v(c,Fe,!0),queueMicrotask(()=>s(g)?.scrollTo({top:s(g).scrollHeight}))}const w=pt(()=>s(t).find(Me=>Me.id===s(a))??null),b=pt(()=>s(c)[s(a)]??[]);async function E(Me){v(a,Me,!0),v(h,!1);try{const[Be,Fe]=await S("get_connect_status",{id:Me});v(d,{...s(d),[Me]:{connect:Be,endpoint:Fe}},!0)}catch{}}async function A(Me,Be){if(!s(o)){v(o,Me,!0);try{await S(Me,{id:Be}),await p()}catch(Fe){Jt(String(Fe),"error",{title:"Server action failed"})}finally{v(o,"")}}}async function I(Me){try{await S("open_server_folder",{id:Me})}catch(Be){Jt(String(Be),"error")}}async function C(){if(s(w))try{const Me=await S("get_server_properties",{id:s(w).id});v(u,Me.join(`
`),!0),v(h,!0)}catch(Me){Jt(String(Me),"error")}}async function j(){if(!s(w))return;const Me={};for(const Be of s(u).split(`
`)){const Fe=Be.trim();if(!Fe||Fe.startsWith("#"))continue;const z=Fe.indexOf("=");z>0&&(Me[Fe.slice(0,z).trim()]=Fe.slice(z+1).trim())}v(o,"props");try{await S("update_server_properties",{id:s(w).id,properties:Me}),Jt("Properties saved — restart the server to apply.","success"),v(h,!1)}catch(Be){Jt(String(Be),"error",{title:"Save failed"})}finally{v(o,"")}}async function x(){if(s(w)){v(o,"authme");try{await S("install_authme",{id:s(w).id}),Jt("AuthMeReloaded installed into plugins/.","success")}catch(Me){Jt(String(Me),"error")}finally{v(o,"")}}}async function M(){if(s(w)){v(o,"connect");try{await S("install_connect",{id:s(w).id}),Jt("Minekube Connect plugin installed into plugins/.","success")}catch(Me){Jt(String(Me),"error")}finally{v(o,"")}}}async function ie(){const Me=s(d)[s(a)]?.endpoint;if(Me)try{await navigator.clipboard.writeText(Me),Jt("Share address copied — send it to your friends!","success")}catch{Jt("Copy failed — select the address manually.","warning")}}async function H(Me){if(Me?.preventDefault(),!s(w)||!s(f).trim())return;const Be=s(f);v(f,"");try{await S("send_server_command",{id:s(w).id,command:Be})}catch(Fe){Jt(String(Fe),"error")}}async function N(Me){if(await xv({title:"Delete server?",message:"This removes the server directory and every file inside it."})){v(o,"delete");try{await S("delete_server",{id:Me}),s(a)===Me&&v(a,null),await p()}catch(Fe){Jt(String(Fe),"error")}finally{v(o,"")}}}const W={Running:"bg-green-500/15 text-green-500",Starting:"bg-amber-500/15 text-amber-500",Stopping:"bg-amber-500/15 text-amber-500",Stopped:"bg-(--bg-3) text-(--text-muted)"};function q(Me){return`rounded-full px-2 py-0.5 text-[10px] font-medium ${W[Me]??W.Stopped}`}_i(()=>{const Me=[];return(async()=>{try{Me.push(await window.__TAURI__.event.listen("server-log",Be=>m(Be.payload.id,Be.payload.line))),Me.push(await window.__TAURI__.event.listen("server-state",Be=>p())),Me.push(await window.__TAURI__.event.listen("server-connect",Be=>p()))}catch{}await p()})(),()=>Me.forEach(Be=>Be())});var ve=qw(),ae=St(ve),le=R(ae),me=_(R(le),2),G=_(le,2);{var F=Me=>{var Be=Cw();U(Me,Be)},ne=Me=>{var Be=Pw(),Fe=K(Be,!0);ce(()=>Q(Fe,s(n))),U(Me,Be)},Ee=Me=>{var Be=Lw();U(Me,Be)},we=Me=>{var Be=jw();Et(Be,21,()=>s(t),Fe=>Fe.id,(Fe,z)=>{var it=Ww(),ke=R(it),ge=R(ke),Le=R(ge),Ge=K(Le,!0),He=_(Le,2),Ye=K(He,!0),Qe=_(ge,2),Mt=R(Qe),dt=K(Mt),D=_(Mt,2),T=K(D),Z=_(D,2);{var Se=de=>{var pe=Iw(),$=K(pe);ce(()=>Q($,`${(s(z).min_memory_mb||0)??""}-${(s(z).max_memory_mb||0)??""}M`)),U(de,pe)};Te(Z,de=>{(s(z).min_memory_mb||s(z).max_memory_mb)&&de(Se)})}var X=_(ke,2);{var fe=de=>{var pe=Vw(),$=St(pe);{var L=ct=>{var mt=Nw(),nt=R(mt),yt=_(R(nt),2),Ut=K(yt,!0),It=_(nt,2);{var Rt=Xe=>{var gt=Dw(),P=R(gt),se=K(P,!0),_e=_(P,2);ce(()=>Q(se,s(d)[s(z).id].endpoint)),Y("click",_e,ie),U(Xe,gt)},Gt=Xe=>{var gt=Uw();ce(()=>gt.disabled=s(o)!==""||s(z).state!=="Stopped"),Y("click",gt,()=>A("start_server",s(z).id)),U(Xe,gt)};Te(It,Xe=>{s(d)[s(z).id]?.endpoint?Xe(Rt):Xe(Gt,-1)})}var en=_(It,2);{var ht=Xe=>{var gt=kw();ce(()=>gt.disabled=s(o)!==""),Y("click",gt,M),U(Xe,gt)};Te(en,Xe=>{s(z).state==="Stopped"&&Xe(ht)})}ce(()=>{_t(yt,1,`text-[10px] ${s(d)[s(z).id]?.endpoint?"text-green-500":"text-(--text-muted)"}`),Q(Ut,s(d)[s(z).id]?.endpoint?"Tunnel active":s(z).state==="Running"?"Waiting for endpoint…":"Offline")}),U(ct,mt)};Te($,ct=>{s(z).connect&&ct(L)})}var V=_($,2);{var he=ct=>{var mt=Fw(),nt=_(R(mt),2);{var yt=Ut=>{var It=Ow();ce(()=>It.disabled=s(o)!==""),Y("click",It,x),U(Ut,It)};Te(nt,Ut=>{(s(z).software==="paper"||s(z).software==="purpur"||s(z).software==="vanilla")&&Ut(yt)})}U(ct,mt)};Te(V,ct=>{s(z).offline_mode&&ct(he)})}var B=_(V,2),ee=R(B);{var be=ct=>{var mt=Bw(),nt=St(mt),yt=_(nt,2);ce(()=>{nt.disabled=s(o)!=="",yt.disabled=s(o)!==""}),Y("click",nt,()=>A("stop_server",s(z).id)),Y("click",yt,()=>A("kill_server",s(z).id)),U(ct,mt)},Ie=ct=>{var mt=zw(),nt=St(mt),yt=_(nt,2);ce(()=>{nt.disabled=s(o)!=="",yt.disabled=s(o)!==""}),Y("click",nt,()=>A("start_server",s(z).id)),Y("click",yt,()=>A("restart_server",s(z).id)),U(ct,mt)};Te(ee,ct=>{s(z).state==="Running"||s(z).state==="Starting"?ct(be):ct(Ie,-1)})}var k=_(ee,2),Re=_(k,2),re=_(Re,2),Ae=_(B,2),Pe=R(Ae),tt=R(Pe);{var Je=ct=>{var mt=Gw();U(ct,mt)},Ze=ct=>{var mt=_a(),nt=St(mt);Et(nt,17,()=>s(b),ao,(yt,Ut)=>{var It=Hw(),Rt=K(It,!0);ce(()=>Q(Rt,s(Ut))),U(yt,It)}),U(ct,mt)};Te(tt,ct=>{s(b).length===0?ct(Je):ct(Ze,-1)})}rc(Pe,ct=>v(g,ct),()=>s(g));var lt=_(Pe,2),ft=_(R(lt),2);ce(()=>{re.disabled=s(o)!=="",je(ft,"placeholder",s(z).state==="Running"?"console command…":"start the server first"),ft.disabled=s(z).state!=="Running"}),Y("click",k,()=>I(s(z).id)),Y("click",Re,C),Y("click",re,()=>N(s(z).id)),kn("submit",lt,H),Ot(ft,()=>s(f),ct=>v(f,ct)),U(de,pe)};Te(X,de=>{s(a)===s(z).id&&de(fe)})}ce(de=>{_t(it,1,`rounded-lg border p-3 transition-colors ${s(a)===s(z).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) bg-(--bg-subtle) hover:border-(--accent)"}`),Q(Ge,s(z).id),_t(He,1,de),Q(Ye,s(z).state),Q(dt,`${(s(z).software==="pumpkin"?"PumpkinMC Rust":s(z).software==="steel"?"SteelMC Rust":s(z).software)??""} ${s(z).version??""}`),Q(T,`:${s(z).port??""}`)},[()=>vm(q(s(z).state))]),Y("click",ke,()=>E(s(z).id)),U(Fe,it)}),U(Me,Be)};Te(G,Me=>{s(r)?Me(F):s(n)?Me(ne,1):s(t).length===0?Me(Ee,2):Me(we,-1)})}var Ce=_(ae,2);{var Oe=Me=>{var Be=Xw(),Fe=R(Be),z=R(Fe),it=K(z),ke=_(z,2),ge=_(ke,2),Le=R(ge),Ge=_(Le,2);ce(()=>{Q(it,`server.properties — ${s(w).id??""}`),Ge.disabled=s(o)!==""}),Y("click",Be,He=>{He.target===He.currentTarget&&v(h,!1)}),Ot(ke,()=>s(u),He=>v(u,He)),Y("click",Le,()=>v(h,!1)),Y("click",Ge,j),U(Me,Be)};Te(Ce,Me=>{s(h)&&s(w)&&Me(Oe)})}var We=_(Ce,2);{var ze=Me=>{Rw(Me,{onclose:()=>v(l,!1),oncreated:p})};Te(We,Me=>{s(l)&&Me(ze)})}Y("click",me,()=>v(l,!0)),U(i,ve),Xt()}rn(["click"]);var Kw=O('<h3 class="text-(--step-heading) font-semibold text-(--fg-1)"> </h3>'),Zw=O('<input class="mt-3 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"/>'),Jw=O('<button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1)"> </button>'),Qw=O('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="alertdialog" aria-modal="true" class="w-[380px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><!> <p> </p> <!></div></div> <div class="flex items-center justify-end gap-2 border-t border-(--border-1) px-4 py-3"><!> <button class="rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"> </button></div></div></div>');function $w(i,e){jt(e,!0);const t={info:{icon:"about",tint:"text-(--accent)"},success:{icon:"success",tint:"text-green-500"},warning:{icon:"warning",tint:"text-(--accent-star)"},error:{icon:"error",tint:"text-rose-400"},confirm:{icon:"help",tint:"text-(--accent)"},prompt:{icon:"edit",tint:"text-(--accent)"}},n=pt(()=>ai.dialog),r=pt(()=>t[s(n)?.variant]??t.info);let a=J("");nn(()=>{s(n),v(a,s(n)?.value??"",!0)});function l(){s(n)?.variant==="prompt"?bs(s(a)):bs(!0)}function o(){s(n)?.variant==="prompt"?bs(null):bs(!1)}function c(f){f.key==="Enter"&&(f.preventDefault(),l())}var d=_a(),u=St(d);{var h=f=>{var g=Qw(),y=R(g),S=R(y),p=R(S),m=R(p);{let W=pt(()=>s(n).icon||s(r).icon);Wt(m,{get name(){return s(W)},size:17})}var w=_(p,2),b=R(w);{var E=W=>{var q=Kw(),ve=K(q,!0);ce(()=>Q(ve,s(n).title)),U(W,q)};Te(b,W=>{s(n).title&&W(E)})}var A=_(b,2),I=K(A,!0),C=_(A,2);{var j=W=>{var q=Zw();Ap(q),ce(()=>je(q,"placeholder",s(n).placeholder??"")),Ot(q,()=>s(a),ve=>v(a,ve)),U(W,q)};Te(C,W=>{s(n).variant==="prompt"&&W(j)})}var x=_(S,2),M=R(x);{var ie=W=>{var q=Jw(),ve=K(q,!0);ce(()=>Q(ve,s(n).cancelLabel??"Cancel")),Y("click",q,o),U(W,q)};Te(M,W=>{s(n).variant!=="alert"&&W(ie)})}var H=_(M,2),N=K(H,!0);ce(()=>{je(y,"aria-label",s(n).title||"Alert"),_t(A,1,`mt-1 text-(--step-body) break-words text-(--fg-2) ${s(n).title?"":"font-medium text-(--fg-1)"}`),Q(I,s(n).message),Q(N,s(n).confirmLabel??"OK")}),Y("click",g,W=>{W.target===W.currentTarget&&o()}),Y("keydown",y,c),Y("click",H,l),U(f,g)};Te(u,f=>{s(n)&&f(h)})}U(i,d),Xt()}rn(["click","keydown"]);var eE=O('<div class="grid gap-2"><button class="flex items-center gap-2.5 rounded border border-(--accent) bg-(--brand-tint) px-3 py-2 text-left text-[12px] font-medium text-(--accent) hover:bg-(--accent-hover) disabled:opacity-40"><span class="w-4 shrink-0 text-center" aria-hidden="true"> </span> <span class="min-w-0">Install core mods from Modrinth — no key needed <span class="block font-normal text-(--text-muted)">Fugue, MixinBooter, ConfigAnytime for 1.12.2 (forge)</span></span></button> <button class="flex items-center gap-2.5 rounded border border-(--border) px-3 py-2 text-left text-[12px] text-(--text-main) hover:border-(--accent) disabled:opacity-40"><span class="w-4 shrink-0 text-center" aria-hidden="true"> </span> <span class="min-w-0">Import Downloaded .zip… <span class="block font-normal text-(--text-muted)">CurseForge pack zip (manifest.json + overrides/)</span></span></button> <button class="flex items-center gap-2.5 rounded border border-(--border) px-3 py-2 text-left text-[12px] text-(--text-main) hover:border-(--accent) disabled:opacity-40"><span class="w-4 shrink-0 text-center" aria-hidden="true">↗</span> <span class="min-w-0">Open BareBones Template on CurseForge <span class="block font-normal text-(--text-muted)">Download the zip there, then import it above</span></span></button></div> <p class="mt-3 text-[11px] text-(--text-muted)">Scalar Legacy is CurseForge-only: the 1-click install covers the other three and the gate passes without it.</p>',1),tE=O('<p class="mt-1 text-[11px] text-(--text-muted)"> </p>'),nE=O('<div class="rounded border border-(--border) bg-(--bg-3) p-3"><p class="text-[12px] text-green-500"> </p> <!></div> <div class="mt-4 flex justify-end gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Close</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Launch 1.12.2</button></div>',1),iE=O('<p class="mt-3 text-[11px] text-rose-400"> </p>'),rE=O('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="dialog" aria-modal="true" aria-label="BareBones Template required" class="w-[440px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">BareBones Template required</h3> <p class="mt-1 text-[12px] text-(--fg-2)"></p></div></div> <div class="px-4 pb-4"><!> <!></div></div></div>');function aE(i,e){jt(e,!0);const t="https://www.curseforge.com/minecraft/modpacks/barebones-template-cleanroom/files";let n=J(""),r=J(""),a=J(null);function l(){window.__TAURI__?.core.invoke("open_external_url",{url:t}).catch(C=>v(r,String(C),!0))}async function o(){v(r,""),v(n,"install");try{const C=await window.__TAURI__.core.invoke("install_cleanroom_core_mods",{instanceId:e.instanceId});v(a,{title:`Installed ${C.length} core mod${C.length===1?"":"s"}: Fugue, MixinBooter, ConfigAnytime.`,note:"Scalar Legacy is CurseForge-only and was skipped — the gate is satisfied without it. Import the full BareBones zip if you want it too."},!0)}catch(C){v(r,String(C),!0)}finally{v(n,"")}}async function c(){const C=window.__TAURI__?.dialog?.open;if(!C){v(r,"File picker unavailable in this build.");return}v(r,"");try{const j=await C({multiple:!1,title:"Import a CurseForge modpack zip",filters:[{name:"CurseForge modpack",extensions:["zip"]}]});if(!j)return;v(n,"import");const x=await window.__TAURI__.core.invoke("import_curseforge_pack",{zipPath:String(j),instanceId:e.instanceId});v(a,{title:`Imported ${x.name} ${x.version}: ${x.overrides_extracted} override file${x.overrides_extracted===1?"":"s"}.`,note:x.mods_skipped>0?`${x.mods_skipped} listed mod file${x.mods_skipped===1?" was":"s were"} not downloaded — add a CurseForge API key in Settings → API Keys to fetch them automatically.`:""},!0)}catch(j){v(r,String(j),!0)}finally{v(n,"")}}function d(){e.onlaunch?.(e.instanceId)}var u=rE(),h=R(u),f=R(h),g=R(f),y=R(g);Wt(y,{name:"mods",size:17});var S=_(g,2),p=_(R(S),2);p.textContent="CleanroomMC requires the BareBones Template (Cleanroom) mods (Fugue, MixinBooter, ConfigAnytime, Scalar Legacy) to boot 1.12.2 safely.";var m=_(f,2),w=R(m);{var b=C=>{var j=eE(),x=St(j),M=R(x),ie=R(M),H=K(ie,!0),N=_(M,2),W=R(N),q=K(W,!0),ve=_(N,2);ce(()=>{M.disabled=s(n)!=="",Q(H,s(n)==="install"?"…":"⚡"),N.disabled=s(n)!=="",Q(q,s(n)==="import"?"…":"📦"),ve.disabled=s(n)!==""}),Y("click",M,o),Y("click",N,c),Y("click",ve,l),U(C,j)},E=C=>{var j=nE(),x=St(j),M=R(x),ie=K(M,!0),H=_(M,2);{var N=ae=>{var le=tE(),me=K(le,!0);ce(()=>Q(me,s(a).note)),U(ae,le)};Te(H,ae=>{s(a).note&&ae(N)})}var W=_(x,2),q=R(W),ve=_(q,2);ce(()=>Q(ie,s(a).title)),Y("click",q,()=>e.onclose?.()),Y("click",ve,d),U(C,j)};Te(w,C=>{s(a)?C(E,-1):C(b)})}var A=_(w,2);{var I=C=>{var j=iE(),x=K(j,!0);ce(()=>Q(x,s(r))),U(C,j)};Te(A,C=>{s(r)&&C(I)})}Y("click",u,C=>{C.target===C.currentTarget&&!s(n)&&e.onclose?.()}),U(i,u),Xt()}rn(["click"]);var sE=O('<span class="block truncate text-(--step-body) font-semibold text-(--fg-1)"> </span>'),oE=O('<button title="Click to dismiss"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <span class="min-w-0 flex-1"><!> <span class="block text-(--step-meta) break-words text-(--fg-2)"> </span></span> <span class="shrink-0 text-(--step-caption) text-(--fg-2)">✕</span></button>'),lE=O('<div class="pointer-events-none fixed right-4 bottom-4 z-[80] flex w-80 flex-col gap-2"></div>');function cE(i,e){jt(e,!0);const t={info:{icon:"about",tint:"border-(--accent-1)/50"},success:{icon:"success",tint:"border-green-500/60"},warning:{icon:"warning",tint:"border-(--accent-2)/60"},error:{icon:"error",tint:"border-rose-500/60"}};let n=J(!1);const r=new Map,a=new Set;function l(){if(!s(n))for(const u of ai.toasts)a.has(u.id)||(a.add(u.id),r.set(u.id,setTimeout(()=>{a.delete(u.id),r.delete(u.id),Kc(u.id)},u.duration)))}function o(){v(n,!0);for(const u of r.values())clearTimeout(u);r.clear(),a.clear()}function c(){v(n,!1),l()}nn(()=>{ai.toasts.length,l()});var d=lE();Et(d,21,()=>ai.toasts,u=>u.id,(u,h)=>{var f=oE(),g=R(f),y=R(g);Wt(y,{get name(){return(t[s(h).kind]??t.info).icon},size:14});var S=_(g,2),p=R(S);{var m=E=>{var A=sE(),I=K(A,!0);ce(()=>Q(I,s(h).title)),U(E,A)};Te(p,E=>{s(h).title&&E(m)})}var w=_(p,2),b=K(w,!0);ce(()=>{_t(f,1,`pointer-events-auto flex w-full items-start gap-2.5 rounded-lg border ${(t[s(h).kind]??t.info).tint??""} bg-(--bg-2) p-3 text-left shadow-xl animate-[fade-in_120ms_ease-out] hover:bg-(--bg-3)`),Q(b,s(h).message)}),Y("click",f,()=>Kc(s(h).id)),U(u,f)}),kn("mouseenter",d,o),kn("mouseleave",d,c),U(i,d),Xt()}rn(["click"]);var dE=O('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),uE=O('<span class="truncate text-[13px]"> </span>'),fE=O('<button><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button>'),hE=O('<span class="truncate text-[13px]">Add Instance</span>'),pE=O('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),mE=O('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),vE=O('<button role="tab"> </button>'),gE=O('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),_E=O('<div class="mb-4 flex items-center gap-2"><button class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"><!> Add Instance</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance"><!> Install .mrpack</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="flex rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),xE=O('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),bE=O('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),yE=O('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),SE=O("<div> </div>"),ME=O('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),wE=O('<p class="mt-2 text-[12px] text-red-400"> </p>'),EE=O('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),TE=O('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),AE=O('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),RE=O('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button></div> <button><!> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)" aria-live="polite"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <!> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!> <!> <!> <!></div>');function CE(i,e){jt(e,!0);let t=J("…"),n=J("instances"),r=J(Pt(lc(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));nn(()=>{cv(s(r)),localStorage.setItem("twilight-theme",s(r)),hv(s(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:ja(s(r))?"dark":"light"}).catch(()=>{})}),tv();let a=J("Ready"),l=J(!1),o=J(Pt(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));nn(()=>{localStorage.setItem("twilight-mode",s(o)),window.__TAURI__?.core.invoke("set_mode_config",{mode:s(o)}).catch(()=>{})});let c=J(localStorage.getItem("twilight-blind-mode")==="true"),d=J(localStorage.getItem("twilight-deaf-mode")==="true");nn(()=>{localStorage.setItem("twilight-blind-mode",String(s(c))),localStorage.setItem("twilight-deaf-mode",String(s(d))),window.__TAURI__?.core.invoke("set_accessibility_config",{blindMode:s(c),deafMode:s(d)}).catch(()=>{})});const u=[{id:"instances",label:"Instances",icon:"instances"},{id:"worlds",label:"Servers & P2P",icon:"worlds"},{id:"downloads",label:"Downloads",icon:"download"},{id:"settings",label:"Settings",icon:"settings"},{id:"accounts",label:"Accounts",icon:"accounts"}],h={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Create and run local servers with the Minekube Connect tunnel."],downloads:["Downloads","Direct downloads land in a later milestone."]},f=pt(()=>ti.active);let g=J(!1),y=J(Pt([])),S=J(!1),p=J(""),m=J(!1),w=J(!1),b=J(""),E=J(!1),A=J(""),I=J(null),C=pt(()=>s(I)?"edit":s(n)),j=J(null),x=J(null),M=J(null),ie=J(!1),H=J(""),N=J(null),W=J(""),q=J(Pt([])),ve=J(0),ae=J(0),le=J("");async function me(te,Ue){return window.__TAURI__.core.invoke(te,Ue)}function G(){v(r,ja(s(r))?"twilight-light":"twilight-dark",!0)}async function F(){v(S,!0),v(p,"");try{v(y,await me("discover_java_installations"),!0)}catch(te){v(p,String(te),!0)}finally{v(S,!1)}}function ne(){v(m,!0)}async function Ee(){if(s(b).trim()){v(E,!0),v(A,"");try{const te=await me("install_modpack",{pathOrUrl:s(b).trim()});v(w,!1),v(b,""),await dt(),te&&v(Ge,te,!0),v(a,"Modpack installed.")}catch(te){v(A,String(te),!0)}finally{v(E,!1)}}}let we=J(Pt([])),Ce=J(!1),Oe=J(!1),We=J(null);nn(()=>{s(we).length,s(We)&&(s(We).scrollTop=s(We).scrollHeight)});function ze(te){s(we).push(te),s(we).length>5e3&&s(we).splice(0,s(we).length-5e3)}function Me(){v(we,[],!0)}function Be(te){return te.stream==="stderr"||te.line.includes("/ERROR]")?"text-rose-400":te.line.includes("/WARN]")?"text-(--accent-star)":te.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function Fe(){const te=s(we).map(Ue=>Ue.line).join(`
`);try{await navigator.clipboard.writeText(te),Jt("Logs copied to clipboard.","success")}catch{const Ue=document.createElement("textarea");Ue.value=te,document.body.append(Ue),Ue.select(),document.execCommand("copy"),Ue.remove()}}async function z(){if(s(Oe))try{await me("kill_instance"),ze({stream:"stdout",line:"kill requested"})}catch(te){ze({stream:"stderr",line:String(te)})}}let it=J(Pt([])),ke=J(""),ge=J(null),Le=J(""),Ge=J(null),He=J(null),Ye=J(""),Qe=J(!1);function Mt(){const te=s(Le).trim().toLowerCase();return te?s(it).filter(Ue=>Ue.name.toLowerCase().includes(te)||Ue.minecraft_version.toLowerCase().includes(te)||Ue.id.toLowerCase().includes(te)):s(it)}async function dt(){try{v(it,await me("scan_instances"),!0),v(ke,"")}catch(te){v(ke,String(te),!0)}}function D(te){v(Ge,te,!0)}async function T(te,Ue=null){if(s(Oe))return;const rt=s(it).find(Lt=>Lt.id===te),kt=rt?rt.name:te;v(Oe,!0),v(a,Ue?`Running ${kt} → ${Ue}…`:`Running ${kt}…`,!0),v(Ce,!0);try{const Lt=await me("launch_instance",{instanceId:te,server:Ue});ze({stream:"stdout",line:`launcher reports exit code ${Lt}`}),await dt(),v(a,"Ready")}catch(Lt){console.error("Launch failed:",Lt),ze({stream:"stderr",line:`[ERROR] Launch failed: ${Lt}`}),String(Lt).includes("BareBones Template")?v(x,te,!0):Jt(`Launch failed: ${Lt}`,"error"),v(a,"Launch failed")}finally{v(Oe,!1),s(a)!=="Launch failed"&&v(a,"Ready")}}function Z(){s(M)&&me("open_path",{path:s(M).instances_dir}).catch(te=>v(a,String(te),!0))}function Se(te){s(M)&&me("open_path",{path:[s(M).instances_dir.replace(/\\/g,"/"),te].join("/")}).catch(Ue=>v(a,String(Ue),!0))}function X(te){v(Ye,""),v(He,te,!0)}async function fe(te){if(!(!s(He)||s(Qe))){v(Qe,!0),v(Ye,"");try{await me("delete_instance",{instanceId:s(He),toTrash:te}),s(Ge)===s(He)&&v(Ge,null),v(He,null),await dt(),v(a,te?"Instance moved to trash.":"Instance deleted.",!0)}catch(Ue){v(Ye,String(Ue),!0)}finally{v(Qe,!1)}}}const de=pt(()=>[...new Set(s(it).map(te=>te.group).filter(Boolean))].sort((te,Ue)=>te.localeCompare(Ue)));async function pe(te){if(!s(be))return;const Ue=s(be).name;try{await me("set_instance_group",{instanceId:s(be).id,group:te}),await dt(),v(a,te?`Moved ${Ue} to ${te}.`:`${Ue} is ungrouped.`,!0)}catch(rt){v(a,String(rt),!0)}}async function $(){if(!s(be))return;const te=s(be).name;try{const Ue=await me("duplicate_instance",{instanceId:s(be).id});await dt(),v(Ge,Ue.id,!0),Jt(`Copied ${te}.`,"success"),v(a,`Copied ${te}.`)}catch(Ue){v(a,String(Ue),!0),Jt(`Copy failed: ${Ue}`,"error")}}async function L(te){const Ue=typeof te=="string"?s(be):te;if(!Ue)return;let rt=typeof te=="string"?te:null;if(rt==null&&(rt=await bv({title:"Rename instance",message:`Choose a new display name for ${Ue.name}.`,value:Ue.name,placeholder:"Instance name",confirmLabel:"Rename"}),rt==null||!rt.trim()||rt.trim()===Ue.name))return;const kt=Ue.name;try{const Lt=await me("rename_instance",{instanceId:Ue.id,newName:rt});await dt(),v(Ge,Lt.id,!0),v(a,`Renamed ${kt} to ${Lt.name}.`),Jt(`Renamed to ${Lt.name}.`,"success")}catch(Lt){v(a,String(Lt),!0),Jt(`Rename failed: ${Lt}`,"error")}}async function V(){if(!s(be))return;const te=window.__TAURI__?.dialog?.save;if(!te){v(a,"File picker unavailable in this build.");return}try{const Ue=await te({title:"Export instance",defaultPath:`${s(be).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Ue)return;const rt=await me("export_instance_zip",{instanceId:s(be).id,destPath:Ue});v(a,`Exported to ${rt}.`)}catch(Ue){v(a,String(Ue),!0)}}async function he(){if(s(be))try{const te=await me("create_desktop_shortcut",{instanceId:s(be).id});Jt(`Shortcut created: ${te}`,"success"),v(a,`Shortcut created: ${te}`)}catch(te){v(a,String(te),!0),Jt(`Shortcut failed: ${te}`,"error")}}async function B(te,Ue){v(m,!1),await dt(),te?.id&&v(Ge,te.id,!0),v(a,Ue||`Instance ${te?.name??""} created.`,!0)}function ee(te){v(I,te,!0)}const be=pt(()=>s(it).find(te=>te.id===s(Ge))??null);let Ie=J(null),k=0;nn(()=>{const te=s(be);s(I);const Ue=++k;v(Ie,null),te&&me("list_instance_mods",{instanceId:te.id}).then(rt=>{Ue===k&&v(Ie,rt.length,!0)}).catch(()=>{Ue===k&&v(Ie,null)})});async function Re(){try{v(N,await me("get_java_prefs"),!0),v(W,s(N).java_path??"",!0),v(q,s(N).custom_java_paths??[],!0),v(ve,s(N).min_memory_mb,!0),v(ae,s(N).max_memory_mb,!0),v(le,""),s(y).length===0&&await F()}catch{}}async function re(){v(le,"");try{await me("set_java_prefs",{javaPath:s(W).trim()||null,minMemoryMb:Number(s(ve))||0,maxMemoryMb:Number(s(ae))||0}),v(le,"Java settings saved.")}catch(te){v(le,String(te),!0)}}async function Ae(te){return v(q,await me("add_custom_java",{path:te}),!0),s(q)}async function Pe(te){await me("apply_java_runtime",{path:te||null}),v(W,te||"",!0),v(le,"")}async function tt(){v(ie,!0);try{v(M,await me("get_storage"),!0)}catch(te){v(H,String(te),!0)}finally{v(ie,!1)}}async function Je(te,Ue){v(ie,!0),v(H,"");try{await me("set_folder_dir",{kind:te,path:Ue?.trim()||null}),v(M,await me("get_storage"),!0),v(H,"Folders updated."),(te==="instances"||te==="shared")&&(await dt(),s(Ge)&&!s(it).some(rt=>rt.id===s(Ge))&&v(Ge,null))}catch(rt){v(H,String(rt),!0)}finally{v(ie,!1)}}function Ze(te){me("open_path",{path:te}).catch(Ue=>v(a,String(Ue),!0))}async function lt(){v(ie,!0),v(H,"");try{await me("clean_staging"),v(H,"Staging cleaned.")}catch(te){v(H,String(te),!0)}finally{v(ie,!1)}}function ft(te){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[te.account_type.type]??"Yggdrasil"}_i(()=>{const te=[],Ue=rt=>{if(rt.key==="Escape"){const dn=Gc();if(dn){dn();return}s(ge)?v(ge,null):s(He)?(v(He,null),v(Ye,"")):s(I)?v(I,null):s(Ge)?v(Ge,null):s(g)?v(g,!1):s(w)?v(w,!1):s(Ce)&&v(Ce,!1);return}if(s(ge)||s(He)||s(g)||s(w)||s(I)||s(Ce)||Gc()||rt.target?.closest?.("input, textarea, select, [contenteditable]"))return;const Lt=Mt();if(!Lt.length)return;const Zt=Lt.findIndex(dn=>dn.id===s(Ge));let cn=null;if(rt.key==="ArrowDown"||rt.key==="ArrowRight")cn=Zt+1;else if(rt.key==="ArrowUp"||rt.key==="ArrowLeft")cn=Zt<0?0:Zt-1;else if(rt.key==="Enter"&&Zt>=0&&document.activeElement===document.body){rt.preventDefault(),T(Lt[Zt].id);return}cn!=null&&Lt[cn]&&(rt.preventDefault(),v(Ge,Lt[cn].id,!0))};return window.addEventListener("keydown",Ue),(async()=>{try{v(t,await me("get_version"),!0)}catch{v(t,"dev")}try{te.push(await window.__TAURI__.event.listen("launch-log",rt=>ze(rt.payload))),te.push(await window.__TAURI__.event.listen("tauri://drag-drop",rt=>{const kt=rt.payload?.paths?.[0];kt&&kt.endsWith(".mrpack")&&(s(w)?v(b,kt,!0):v(j,kt,!0))}))}catch{}await qs(),await dt(),await tt();try{const rt=await me("get_startup_launch");rt&&s(it).some(kt=>kt.id===rt)&&T(rt)}catch{}})(),()=>te.forEach(rt=>rt())});var ct=RE(),mt=R(ct),nt=R(mt),yt=_(R(nt),2);{var Ut=te=>{var Ue=dE();U(te,Ue)};Te(yt,te=>{s(l)&&te(Ut)})}var It=_(nt,2),Rt=R(It);Et(Rt,17,()=>u,te=>te.id,(te,Ue)=>{var rt=fE(),kt=R(rt),Lt=R(kt);Wt(Lt,{get name(){return s(Ue).icon},size:15});var Zt=_(kt,2);{var cn=dn=>{var Yn=uE(),Gn=K(Yn,!0);ce(()=>Q(Gn,s(Ue).label)),U(dn,Yn)};Te(Zt,dn=>{s(l)&&dn(cn)})}ce(()=>{_t(rt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${s(l)?"":"justify-center"} ${s(n)===s(Ue).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),je(rt,"title",s(Ue).label)}),Y("click",rt,()=>{v(n,s(Ue).id,!0),v(I,null),v(o,"launcher"),s(Ue).id==="settings"&&(Re(),s(M)||tt())}),U(te,rt)});var Gt=_(Rt,2),en=R(Gt),ht=R(en);Wt(ht,{name:"new",size:15});var Xe=_(en,2);{var gt=te=>{var Ue=hE();U(te,Ue)};Te(Xe,te=>{s(l)&&te(gt)})}var P=_(It,2),se=R(P);{let te=pt(()=>ds(s(f))),Ue=pt(()=>s(f)?s(f).username[0]?.toUpperCase():"?");_c(se,{get source(){return s(te)},size:28,get letter(){return s(Ue)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var _e=_(se,2);{var oe=te=>{var Ue=pE(),rt=R(Ue),kt=K(rt,!0),Lt=_(rt,2),Zt=K(Lt,!0);ce(cn=>{Q(kt,s(f)?s(f).username:"Accounts"),Q(Zt,cn)},[()=>s(f)?ft(s(f)):"manage & sign in"]),U(te,Ue)};Te(_e,te=>{s(l)&&te(oe)})}var xe=_(P,2),Ve=K(xe,!0),Ne=_(mt,2),qe=R(Ne),Ke=R(qe),vt=R(Ke);{var ut=te=>{var Ue=mE(),rt=St(Ue),kt=_(rt,2),Lt=K(kt,!0);ce(()=>{je(kt,"title",s(I)?.name),Q(Lt,s(I)?.name)}),Y("click",rt,()=>v(I,null)),U(te,Ue)},wt=te=>{var Ue=gE(),rt=St(Ue),kt=K(rt),Lt=_(rt,4);Et(Lt,20,()=>[["launcher","Launcher"],["client","Client"]],ao,(Zt,cn)=>{var dn=pt(()=>zu(cn,2));let Yn=()=>s(dn)[0],Gn=()=>s(dn)[1];var On=vE(),Ii=K(On,!0);ce(()=>{_t(On,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${s(o)===Yn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),je(On,"aria-selected",s(o)===Yn()),Q(Ii,Gn())}),Y("click",On,()=>v(o,Yn(),!0)),U(Zt,On)}),ce(()=>Q(kt,`TwilightMC Bolide (alpha-v${s(t)??""})`)),U(te,Ue)};Te(vt,te=>{s(C)==="edit"?te(ut):te(wt,-1)})}var ye=_(Ke,2),De=K(ye,!0),$e=_(qe,2),bt=R($e);{var st=te=>{tw(te,{onback:()=>v(n,"instances")})},ot=te=>{fw(te,{get instances(){return s(it)},get active(){return s(f)},get gameRunning(){return s(Oe)},get status(){return s(a)},onlaunch:T,onopenconsole:()=>v(Ce,!0),get onrefresh(){return qs},onopenaccounts:()=>{v(n,"accounts"),v(o,"launcher")}})},zt=te=>{lg(te,{get instance(){return s(I)},get storage(){return s(M)},get blindMode(){return s(c)},get deafMode(){return s(d)},onback:()=>v(I,null),onopenconsole:()=>v(Ce,!0)})},At=te=>{R_(te,{get version(){return s(t)},get storage(){return s(M)},get runtimes(){return s(y)},get scanning(){return s(S)},get javaError(){return s(p)},get storageBusy(){return s(ie)},get storageMsg(){return s(H)},get javaMsg(){return s(le)},get gameRunning(){return s(Oe)},onback:()=>v(n,"instances"),onscanjava:F,onsaveprefs:re,onaddjava:Ae,onapplyjava:Pe,onsavefolder:Je,onopenfolder:Ze,oncleanstaging:lt,onopenaccounts:()=>{v(n,"accounts"),v(o,"launcher")},onopenurl:Ue=>me("open_external_url",{url:Ue}).catch(rt=>v(a,String(rt),!0)),get theme(){return s(r)},set theme(Ue){v(r,Ue,!0)},get blindMode(){return s(c)},set blindMode(Ue){v(c,Ue,!0)},get deafMode(){return s(d)},set deafMode(Ue){v(d,Ue,!0)},get javaPath(){return s(W)},set javaPath(Ue){v(W,Ue,!0)},get javaCustomPaths(){return s(q)},set javaCustomPaths(Ue){v(q,Ue,!0)},get minMem(){return s(ve)},set minMem(Ue){v(ve,Ue,!0)},get maxMem(){return s(ae)},set maxMem(Ue){v(ae,Ue,!0)}})},an=te=>{var Ue=_E(),rt=St(Ue),kt=R(rt),Lt=R(kt);Wt(Lt,{name:"new",size:13});var Zt=_(kt,2),cn=R(Zt);Wt(cn,{name:"folder",size:14});var dn=_(Zt,2),Yn=R(dn);Wt(Yn,{name:"package",size:14});var Gn=_(dn,2),On=R(Gn);Wt(On,{name:"settings",size:14});var Ii=_(Gn,2),xi=_(Ii,4),bi=R(xi);{var un=Kn=>{Wt(Kn,{name:"sun",size:15})},Di=pt(()=>ja(s(r))),Co=Kn=>{Wt(Kn,{name:"moon",size:15})};Te(bi,Kn=>{s(Di)?Kn(un):Kn(Co,-1)})}var zh=_(rt,2);{let Kn=pt(Mt);Gm(zh,{get instances(){return s(Kn)},get error(){return s(ke)},get query(){return s(Le)},get selectedId(){return s(Ge)},get gameRunning(){return s(Oe)},get menuFor(){return s(ge)},onselect:D,onplay:T,ontogglemenu:Rc=>v(ge,s(ge)===Rc?null:Rc,!0),onedit:ee,onrename:L,onopenfolder:Se,onviewlogs:()=>v(Ce,!0),ondelete:X,onclosemenu:()=>v(ge,null),onadd:ne})}ce(Kn=>{Zt.disabled=!s(M),je(Zt,"title",s(M)?s(M).instances_dir:""),je(xi,"title",Kn)},[()=>ja(s(r))?"Twilight Light":"Twilight Dark"]),Y("click",kt,ne),Y("click",Zt,Z),Y("click",dn,()=>v(w,!0)),Y("click",Gn,()=>{v(n,"settings"),Re(),s(M)||tt()}),Ot(Ii,()=>s(Le),Kn=>v(Le,Kn)),Y("click",xi,G),U(te,Ue)},qn=te=>{Yw(te,{})},_n=te=>{var Ue=xE(),rt=St(Ue),kt=K(rt,!0),Lt=_(rt,2),Zt=K(Lt,!0);ce(()=>{Q(kt,h[s(n)][0]),Q(Zt,h[s(n)][1])}),U(te,Ue)};Te(bt,te=>{s(C)==="accounts"?te(st):s(o)==="client"?te(ot,1):s(C)==="edit"&&s(I)?te(zt,2):s(n)==="settings"?te(At,3):s(n)==="instances"?te(an,4):s(n)==="worlds"?te(qn,5):te(_n,-1)})}var Cn=_($e,2),Ht=R(Cn),xn=R(Ht),Nn=R(xn),qt=_(Nn,2);Wt(qt,{name:"log",size:13});var Li=_(qt,4);{var Eo=te=>{var Ue=bE();U(te,Ue)};Te(Li,te=>{s(Oe)&&te(Eo)})}var vs=_(xn,2),To=R(vs),Ao=_(To,2),Ro=_(Ao,2),Ph=_(Ro,2);{var Lh=te=>{var Ue=yE();Y("click",Ue,()=>v(Ce,!1)),U(te,Ue)};Te(Ph,te=>{s(Ce)&&te(Lh)})}var xc=_(Ht,2);Et(xc,21,()=>s(we),ao,(te,Ue)=>{var rt=SE(),kt=K(rt,!0);ce(Lt=>{_t(rt,1,`whitespace-pre-wrap break-all ${Lt??""}`),Q(kt,s(Ue).line)},[()=>Be(s(Ue))]),U(te,rt)},te=>{var Ue=ME();U(te,Ue)}),rc(xc,te=>v(We,te),()=>s(We));var bc=_(Ne,2);{var Ih=te=>{Zg(te,{get instance(){return s(be)},get storage(){return s(M)},get gameRunning(){return s(Oe)},get modsCount(){return s(Ie)},get groups(){return s(de)},onlaunch:()=>T(s(be).id),onkill:z,onedit:()=>ee(s(be)),onchangegroup:pe,onopenfolder:()=>Se(s(be).id),onexport:V,oncopy:$,ondelete:()=>X(s(be).id),onshortcut:he,onrename:L,onclose:()=>v(Ge,null)})};Te(bc,te=>{s(C)==="instances"&&s(be)&&te(Ih)})}var yc=_(bc,2);{var Dh=te=>{mg(te,{get path(){return s(j)},onclose:()=>v(j,null),oninstalled:async Ue=>{v(j,null),await dt(),v(Ge,Ue,!0),v(a,"Modpack installed.")}})};Te(yc,te=>{s(j)&&te(Dh)})}var Sc=_(yc,2);{var Uh=te=>{WM(te,{get accounts(){return ti.list},get active(){return s(f)},onclose:()=>{v(g,!1),qs()},get onrefresh(){return qs}})};Te(Sc,te=>{s(g)&&te(Uh)})}var Mc=_(Sc,2);{var kh=te=>{Hg(te,{get groups(){return s(de)},get blindMode(){return s(c)},get deafMode(){return s(d)},onclose:()=>v(m,!1),oncreated:B})};Te(Mc,te=>{s(m)&&te(kh)})}var wc=_(Mc,2);{var Nh=te=>{var Ue=EE(),rt=R(Ue),kt=R(rt),Lt=_(R(kt),2),Zt=_(kt,2),cn=R(Zt),dn=_(cn,2),Yn=_(dn,2);{var Gn=un=>{var Di=wE(),Co=K(Di,!0);ce(()=>Q(Co,s(A))),U(un,Di)};Te(Yn,un=>{s(A)&&un(Gn)})}var On=_(Zt,2),Ii=R(On),xi=_(Ii,2),bi=K(xi,!0);ce(un=>{xi.disabled=un,Q(bi,s(E)?"Installing…":"Install .mrpack")},[()=>s(E)||!s(b).trim()]),Y("click",Ue,un=>{un.target===un.currentTarget&&!s(E)&&v(w,!1)}),Y("click",Lt,()=>v(w,!1)),kn("dragover",cn,un=>un.preventDefault()),kn("drop",cn,un=>{un.preventDefault();const Di=un.dataTransfer?.files?.[0]?.path;Di&&v(b,Di,!0)}),Ot(dn,()=>s(b),un=>v(b,un)),Y("click",Ii,()=>v(w,!1)),Y("click",xi,Ee),U(te,Ue)};Te(wc,te=>{s(w)&&te(Nh)})}var Ec=_(wc,2);{var Oh=te=>{var Ue=AE(),rt=R(Ue),kt=_(R(rt),2),Lt=_(R(kt)),Zt=K(Lt,!0),cn=_(kt,2);{var dn=bi=>{var un=TE(),Di=K(un,!0);ce(()=>Q(Di,s(Ye))),U(bi,un)};Te(cn,bi=>{s(Ye)&&bi(dn)})}var Yn=_(cn,2),Gn=R(Yn),On=_(Gn,2),Ii=R(On);Ei(Ii,{emoji:"♻"});var xi=_(On,2);ce(()=>{Q(Zt,s(He)),Gn.disabled=s(Qe),On.disabled=s(Qe),xi.disabled=s(Qe)}),Y("click",Ue,bi=>{bi.target===bi.currentTarget&&!s(Qe)&&v(He,null)}),Y("click",Gn,()=>v(He,null)),Y("click",On,()=>fe(!0)),Y("click",xi,()=>fe(!1)),U(te,Ue)};Te(Ec,te=>{s(He)&&te(Oh)})}var Tc=_(Ec,2);$w(Tc,{});var Ac=_(Tc,2);{var Fh=te=>{aE(te,{get instanceId(){return s(x)},onclose:()=>v(x,null),onlaunch:Ue=>{v(x,null),T(Ue)}})};Te(Ac,te=>{s(x)&&te(Fh)})}var Bh=_(Ac,2);cE(Bh,{}),ce(()=>{_t(mt,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${s(l)?"w-60":"w-16"}`),_t(Gt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${s(l)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),_t(P,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${s(l)?"":"justify-center"}`),je(P,"title",s(f)?s(f).username:"Manage accounts"),_t(xe,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${s(l)?"":"opacity-0 group-hover/nav:opacity-100"}`),Q(Ve,s(l)?"«":"»"),Q(De,s(a)),_t(Cn,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${s(Ce)?"h-48":"h-10"}`),je(xn,"title",s(Ce)?"Collapse console":"Expand console"),_t(Nn,1,`h-2 w-2 shrink-0 rounded-full ${s(Oe)?"animate-pulse bg-green-500":"bg-(--border)"}`),To.disabled=!s(we).length,Ao.disabled=!s(we).length,Ro.disabled=!s(Oe)}),Y("dblclick",nt,()=>v(l,!s(l))),Y("click",Gt,ne),Y("click",P,()=>{v(n,"accounts"),v(I,null),v(o,"launcher")}),Y("click",xe,()=>v(l,!s(l))),Y("click",xn,()=>v(Ce,!s(Ce))),Y("click",To,te=>{te.stopPropagation(),Me()}),Y("click",Ao,te=>{te.stopPropagation(),Fe()}),Y("click",Ro,te=>{te.stopPropagation(),z()}),U(i,ct),Xt()}rn(["dblclick","click"]);lm(CE,{target:document.getElementById("app")});
