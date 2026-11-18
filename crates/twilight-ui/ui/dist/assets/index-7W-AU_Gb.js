(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ou=!1;var fo=Array.isArray,Hh=Array.prototype.indexOf,$a=Array.prototype.includes,ho=Array.from,Fu=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,Vh=Object.getOwnPropertyDescriptors,Wh=Object.prototype,jh=Array.prototype,Bu=Object.getPrototypeOf,Cc=Object.isExtensible;const Xh=()=>{};function qh(i){for(var e=0;e<i.length;e++)i[e]()}function zu(){var i,e,t=new Promise((n,r)=>{i=n,e=r});return{promise:t,resolve:i,reject:e}}function Gu(i,e){if(Array.isArray(i))return i;if(!(Symbol.iterator in i))return Array.from(i);const t=[];for(const n of i)if(t.push(n),t.length===e)break;return t}const Rn=2,ha=4,po=8,Hu=1<<24,fi=16,gi=32,ur=64,xl=128,Xl=256,mi=512,mn=1024,Kt=2048,Xn=4096,Un=8192,Sn=16384,Ta=32768,es=1<<25,pa=65536,$s=1<<17,Yh=1<<18,Aa=1<<19,Kh=1<<20,Mi=1<<25,eo=1<<21,oa=1<<22,or=1<<23,wr=Symbol("$state"),Vu=Symbol("component"),Zh=Symbol("legacy props"),Jh=Symbol(""),Wu=Symbol("attributes"),bl=Symbol("class"),yl=Symbol("style"),Sl=Symbol("text"),Ys=Symbol("form reset"),us=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Qh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),$h=1,ep=2,ju=4,tp=8,np=16,ip=1,rp=4,ap=8,sp=16,op=1,lp=2,Xu={},pn=Symbol("uninitialized"),cp="http://www.w3.org/1999/xhtml";function dp(){console.warn("https://svelte.dev/e/derived_inert")}function up(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function fp(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function qu(i){return i===this.v}function hp(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Yu(i){return!hp(i,this.v)}function Ku(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function pp(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function mp(i,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function vp(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function gp(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _p(i){throw new Error("https://svelte.dev/e/effect_orphan")}function xp(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function bp(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function yp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Sp(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Mp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function wp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Ep=!1,Mn=null;function ma(i){Mn=i}function jt(i,e=!1,t){Mn={p:Mn,i:!1,c:null,e:null,s:i,x:null,r:Ft,l:null}}function Xt(i){var e=Mn,t=e.e;if(t!==null){e.e=null;for(var n of t)pf(n)}return e.i=!0,Mn=e.p,ql(i)}function ql(i={}){return Fu(i,Vu,{value:!0}),i}function Zu(){return!0}let yr=[];function Ju(){var i=yr;yr=[],qh(i)}function wi(i){if(yr.length===0&&!Ya){var e=yr;queueMicrotask(()=>{e===yr&&Ju()})}yr.push(i)}function Tp(){for(;yr.length>0;)Ju()}const Ap=-7169;function on(i,e){i.f=i.f&Ap|e}function Yl(i){(i.f&mi)!==0||i.deps===null?on(i,mn):on(i,Xn)}function Qu(i,e){(i.f&Kt)!==0?e.set(i,Kt):(i.f&Xn)!==0&&e.get(i)!==Kt&&e.set(i,Xn),on(i,mn)}function Rp(i,e){{const t=document.body;i.autofocus=!0,wi(()=>{document.activeElement===t&&i.focus()})}}let Pc=!1;function Cp(){Pc||(Pc=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const e of i.target.elements)e[Ys]?.()})},{capture:!0}))}function Ra(i){var e=Nt,t=Ft;si(null),Ri(null);try{return i()}finally{si(e),Ri(t)}}function Kl(i,e,t,n=t){i.addEventListener(e,()=>Ra(t));const r=i[Ys];r?i[Ys]=()=>{r(),n(!0)}:i[Ys]=()=>n(!0),Cp()}function Pp(i,e,t,n){const r=ts;var a=i.filter(g=>!g.settled),l=e.map(r);if(t.length===0&&a.length===0){n(l);return}var o=Ft,c=Lp(),d=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function u(g){if((o.f&Sn)===0){c();try{n([...l,...g])}catch(y){Si(y,o)}to()}}var h=$u();if(t.length===0){d.then(()=>u([])).finally(h);return}function f(){Promise.all(t.map(g=>Ip(g))).then(u).catch(g=>Si(g,o)).finally(h)}d?d.then(()=>{if((o.f&Sn)!==0){h();return}c(),f(),to()}):f()}function Lp(){var i=Ft,e=Nt,t=Mn,n=Tt;return function(a=!0){Ri(i),si(e),ma(t),a&&(i.f&Sn)===0&&(n?.activate(),n?.apply())}}function to(i=!0){Ri(null),si(null),ma(null),i&&Tt?.deactivate()}function $u(){var i=Ft,e=i.b,t=Tt,n=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(n,i),()=>{e?.update_pending_count(-1,t),t.decrement(n,i)}}function ts(i){var e=Rn|Kt;return Ft!==null&&(Ft.f|=Aa),{ctx:Mn,deps:null,effects:null,equals:qu,f:e,fn:i,reactions:null,rv:0,v:pn,wv:0,parent:Ft,ac:null}}const Ha=Symbol("obsolete");function Ip(i,e,t){let n=Ft;n===null&&pp();var r=void 0,a=Lr(pn),l=!Nt,o=new Set;return qp(()=>{var c=Ft,d=zu();r=d.promise;try{Promise.resolve(i()).then(d.resolve,g=>{g!==us&&d.reject(g)}).finally(to)}catch(g){d.reject(g),to()}var u=Tt;if(l){if((c.f&Ta)!==0)var h=$u();if(n.b?.is_rendered())u.async_deriveds.get(c)?.reject(Ha);else for(const g of o.values())g.reject(Ha);o.add(d),u.async_deriveds.set(c,d)}const f=(g,y=void 0)=>{h?.(),o.delete(d),y!==Ha&&(u.activate(),y?(a.f|=or,va(a,y)):((a.f&or)!==0&&(a.f^=or),va(a,g)),u.deactivate())};d.promise.then(f,g=>f(null,g||"unknown"))}),ec(()=>{for(const c of o)c.reject(Ha)}),new Promise(c=>{function d(u){function h(){u===r?c(a):d(r)}u.then(h,h)}d(r)})}function mt(i){const e=ts(i);return bf(e),e}function ef(i){const e=ts(i);return e.equals=Yu,e}function Dp(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)Bn(e[t])}}function Zl(i){var e,t=Ft,n=i.parent;if(!Ki&&n!==null&&i.v!==pn&&(n.f&(Sn|Un))!==0)return dp(),i.v;Ri(n);try{Dp(i),e=wf(i)}finally{Ri(t)}return e}function tf(i){var e=Zl(i);if(!i.equals(e)&&(i.wv=Sf(),(!Tt?.is_fork||i.deps===null)&&(Tt!==null?(Tt.capture(i,e,!0),la?.capture(i,e,!0)):i.v=e,i.deps===null))){on(i,mn);return}Ki||(hi!==null?($l()||Tt?.is_fork)&&hi.set(i,e):Yl(i))}function Up(i){if(i.effects!==null)for(const e of i.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&Ra(()=>{e.ac.abort(us),e.ac=null}),e.fn!==null&&(e.teardown=Xh),is(e,0),tc(e))}function nf(i){if(i.effects!==null)for(const e of i.effects)e.teardown&&e.fn!==null&&ga(e)}let Po=null,kr=null,Tt=null,la=null,hi=null,Ml=null,Ya=!1,Lo=!1,Ka=null,Ks=null;var Lc=0;let kp=1;class fr{id=kp++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){kr===null?Po=kr=this:(kr.next=this,this.prev=kr),kr=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=n=>this.schedule(n)){var n=this.#o.get(e);if(n){this.#o.delete(e);for(var r of n.d)on(r,Kt),t(r);for(r of n.m)on(r,Xn),t(r)}this.#h.add(e)}#d(){var e=[];for(const a of this.#i)if(!((a.f&Sn)!==0||(a.f&(Kt|Xn))===0)){for(var t=a,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(ur|gi))!==0){if((r&mn)===0){n=!0;break}t.f^=mn}}n||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[o,c]of this.#r)on(o,c),this.schedule(o);this.apply();for(var e=Ka=[],t=[],n=Ks=[];this.#i.length>0;){Lc++>1e3&&(this.#f(),Op());for(const o of this.#d())try{this.#x(o,e,t)}catch(c){throw sf(o),this.#p()||this.discard(),c}}if(Tt=null,n.length>0){var r=fr.ensure();for(const o of n)r.schedule(o)}if(Ka=null,Ks=null,this.#p()){this.#v(t),this.#v(e);for(const[o,c]of this.#o)af(o,c);n.length>0&&Tt.#m();return}const a=this.#S();if(a){this.#v(t),this.#v(e),a.#u(this);return}this.#r.clear();for(const o of this.#t)o(this);this.#t.clear(),la=this,Ic(t),Ic(e),la=null,this.#n?.resolve();var l=Tt;this.#e===0&&(this.#i.length===0||l!==null)&&this.#f(),l!==null&&(Ti.clear(),l.#m())}#x(e,t,n){e.f^=mn;for(var r=e.first;r!==null;){var a=r.f,l=(a&(gi|ur))!==0,o=l&&(a&mn)!==0,c=o||(a&Un)!==0||this.#o.has(r);if(!c&&r.fn!==null){l?r.f^=mn:(a&ha)!==0?t.push(r):hs(r)&&((a&fi)!==0&&this.add_dirty_reaction(r,Xn),ga(r));var d=r.first;if(d!==null){r=d;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}}#S(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,n]]of this.current)if(!n&&e.current.has(t))return!0;return!1}#u(e){for(const[n,r]of e.current)!this.previous.has(n)&&e.previous.has(n)&&this.previous.set(n,e.previous.get(n)),this.current.set(n,r);for(const[n,r]of e.async_deriveds){const a=this.async_deriveds.get(n);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=n=>{var r=n.reactions;if(r!==null&&!((n.f&Rn)!==0&&(n.f&(Kt|Xn))===0))for(const o of r){var a=o.f;if((a&Rn)!==0)t(o);else{var l=o;a&(oa|fi)&&!this.async_deriveds.has(l)&&(this.#r.delete(l),on(l,Kt),this.schedule(l))}}};for(const n of this.current.keys())t(n);this.oncommit(()=>e.discard()),e.#f(),Tt=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)Qu(e[t],this.#r)}capture(e,t,n=!1){e.v!==pn&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&or)===0&&(this.current.set(e,[t,n]),hi?.set(e,t)),this.is_fork||(e.v=t)}activate(){Tt=this}deactivate(){Tt=null,hi=null}flush(){try{Lo=!0,Tt=this,this.#m()}finally{Lc=0,Ml=null,Ka=null,Ks=null,Lo=!1,Tt=null,hi=null,Ti.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Ha);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let h=Po;h!==null;h=h.next){var e=h.id<this.id,t=[];for(const[f,[g,y]]of this.current){if(h.current.has(f)){var n=h.current.get(f)[0];if(e&&g!==n)h.current.set(f,[g,y]);else continue}t.push(f)}if(e)for(const[f,g]of this.async_deriveds){const y=h.async_deriveds.get(f);y&&g.promise.then(y.resolve).catch(y.reject)}var r=[...h.current.keys()].filter(f=>!h.current.get(f)[1]);if(!(!h.started||r.length===0)){var a=r.filter(f=>!this.current.has(f));if(a.length===0)e&&h.discard();else if(t.length>0){if(e)for(const f of this.#h)h.unskip_effect(f,g=>{(g.f&(fi|oa))!==0?h.schedule(g):h.#v([g])});h.activate();var l=new Set,o=new Map;for(var c of t)rf(c,a,l,o);o=new Map;var d=[...h.current].filter(([f,g])=>{const y=this.current.get(f);return y?y[0]!==g[0]||y[1]!==g[1]:!0}).map(([f])=>f);if(d.length>0)for(const f of this.#a)(f.f&(Sn|Un|$s))===0&&Jl(f,d,o)&&((f.f&(oa|fi))!==0?(on(f,Kt),h.schedule(f)):h.add_dirty_reaction(f,Kt));if(h.#i.length>0&&!h.#c){h.apply();for(var u of h.#d())h.#x(u,[],[])}h.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let n=this.#s.get(t)??0;this.#s.set(t,n+1)}}decrement(e,t){if(this.#e-=1,e){let n=this.#s.get(t)??0;n===1?this.#s.delete(t):this.#s.set(t,n-1)}this.#c||(this.#c=!0,wi(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,n]of e)this.add_dirty_reaction(t,n);e.clear()}add_dirty_reaction(e,t){(t===Kt||this.#r.get(e)!==Kt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=zu()).promise}static ensure(){if(Tt===null){const e=Tt=new fr;!Lo&&!Ya&&wi(()=>{e.started||e.flush()})}return Tt}apply(){{hi=null;return}}schedule(e){if(Ml=e,e.b?.is_pending&&(e.f&(ha|po|Hu))!==0&&(e.f&Ta)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?Po=t:e.next=t,t===null?kr=e:t.prev=e,this.linked=!1}}}function Np(i){var e=Ya,t=la;la=null,Ya=!0;try{for(var n;;){if(Tp(),Tt===null)return n;Tt.flush()}}finally{Ya=e,la=t}}function Op(){try{xp()}catch(i){Si(i,Ml)}}let Gi=null;function Ic(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(Sn|Un))===0&&hs(n)&&(Gi=new Set,ga(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&gf(n),Gi?.size>0)){Ti.clear();for(const r of Gi){if((r.f&(Sn|Un))!==0)continue;const a=[r];let l=r.parent;for(;l!==null;)Gi.has(l)&&(Gi.delete(l),a.push(l)),l=l.parent;for(let o=a.length-1;o>=0;o--){const c=a[o];(c.f&(Sn|Un))===0&&ga(c)}}Gi.clear()}}Gi=null}}function rf(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const r of i.reactions){const a=r.f;(a&Rn)!==0?rf(r,e,t,n):(a&(oa|fi))!==0&&(a&Kt)===0&&Jl(r,e,n)&&(on(r,Kt),Ql(r))}}function Jl(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const r of i.deps){if($a.call(e,r))return!0;if((r.f&Rn)!==0&&Jl(r,e,t))return t.set(r,!0),!0}return t.set(i,!1),!1}function Ql(i){Tt.schedule(i)}function af(i,e){if(!((i.f&gi)!==0&&(i.f&mn)!==0)){(i.f&Kt)!==0?e.d.push(i):(i.f&Xn)!==0&&e.m.push(i),on(i,mn);for(var t=i.first;t!==null;)af(t,e),t=t.next}}function sf(i){on(i,mn);for(var e=i.first;e!==null;)sf(e),e=e.next}let no=new Set;const Ti=new Map;let of=!1;function Lr(i,e){var t={f:0,v:i,reactions:null,equals:qu,rv:0,wv:0};return t}function Z(i,e){const t=Lr(i);return bf(t),t}function Fp(i,e=!1,t=!0){const n=Lr(i);return e||(n.equals=Yu),n}function v(i,e,t=!1){Nt!==null&&(!pi||(Nt.f&$s)!==0)&&Zu()&&(Nt.f&(Rn|fi|oa|$s))!==0&&(Ai===null||!Ai.has(i))&&Mp();let n=t?Pt(e):e;return va(i,n,Ks)}var xr=null,wl=0;function va(i,e,t=null){if(!i.equals(e)){Ki?Ti.set(i,e):Ti.has(i)||Ti.set(i,i.v);var n=fr.ensure();if(n.capture(i,e),(i.f&Rn)!==0){const r=i;(i.f&Kt)!==0&&Zl(r),hi===null&&Yl(r)}i.wv=Sf(),xr=null,wl=0,lf(i,Kt,t),xr=null,Ft!==null&&(Ft.f&mn)!==0&&(Ft.f&(gi|ur))===0&&($n===null?Zp([i]):$n.push(i)),!n.is_fork&&no.size>0&&!of&&Bp()}return e}function Bp(){of=!1;for(const i of no){(i.f&mn)!==0&&on(i,Xn);let e;try{e=hs(i)}catch{e=!0}e&&ga(i)}no.clear()}function Za(i){v(i,i.v+1)}function lf(i,e,t){var n=i.reactions;if(n!==null){var r=n.length;if(wl+=r,wl>1e5&&xr===null&&(xr=new Set),xr!==null){if(xr.has(i))return;xr.add(i)}for(var a=0;a<r;a++){var l=n[a],o=l.f,c=(o&Kt)===0;if(c&&on(l,e),(o&$s)!==0)no.add(l);else if((o&Rn)!==0){var d=l;hi?.delete(d),lf(d,Xn,t)}else if(c){var u=l;(o&fi)!==0&&Gi!==null&&Gi.add(u),t!==null?t.push(u):Ql(u)}}}}function Pt(i){if(typeof i!="object"||i===null||wr in i||Vu in i)return i;const e=Bu(i);if(e!==Wh&&e!==jh)return i;var t=new Map,n=fo(i),r=Z(0),a=Tr,l=o=>{if(Tr===a)return o();var c=Nt,d=Tr;si(null),Nc(a);var u=o();return si(c),Nc(d),u};return n&&t.set("length",Z(i.length)),new Proxy(i,{defineProperty(o,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&yp();var u=t.get(c);return u===void 0?l(()=>{var h=Z(d.value);return t.set(c,h),h}):v(u,d.value,!0),!0},deleteProperty(o,c){var d=t.get(c);if(d===void 0){if(c in o){const u=l(()=>Z(pn));t.set(c,u),Za(r)}}else v(d,pn),Za(r);return!0},get(o,c,d){if(c===wr)return i;var u=t.get(c),h=c in o;if(u===void 0&&(!h||sa(o,c)?.writable)&&(u=l(()=>{var g=Pt(h?o[c]:pn),y=Z(g);return y}),t.set(c,u)),u!==void 0){var f=s(u);return f===pn?void 0:f}return Reflect.get(o,c,d)},getOwnPropertyDescriptor(o,c){this.has?.(o,c);var d=Reflect.getOwnPropertyDescriptor(o,c),u=t.get(c);if(u!==void 0){var h=s(u);if(h===pn)return;if(d&&"value"in d)d.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return d},has(o,c){if(c===wr)return!0;var d=t.get(c),u=d!==void 0&&d.v!==pn||Reflect.has(o,c);if(d!==void 0||(Ft!==null||Nt!==null)&&(!u||sa(o,c)?.writable)){d===void 0&&(d=l(()=>{var f=u?Pt(o[c]):pn,g=Z(f);return g}),t.set(c,d));var h=s(d);if(h===pn)return!1}return u},set(o,c,d,u){var h=t.get(c),f=c in o;if(n&&c==="length")for(var g=d;g<h.v;g+=1){var y=t.get(g+"");y!==void 0?v(y,pn):g in o&&(y=l(()=>Z(pn)),t.set(g+"",y))}if(h===void 0)(!f||sa(o,c)?.writable)&&(h=l(()=>Z(void 0)),v(h,Pt(d)),t.set(c,h));else{f=h.v!==pn;var S=l(()=>Pt(d));v(h,S)}var p=Reflect.getOwnPropertyDescriptor(o,c);if(p?.set&&p.set.call(u,d),!f){if(n&&typeof c=="string"){var m=t.get("length"),w=Number(c);Number.isInteger(w)&&w>=m.v&&v(m,w+1)}Za(r)}return!0},ownKeys(o){s(r);var c=Reflect.ownKeys(o).filter(h=>{var f=t.get(h);return f===void 0||f.v!==pn});for(var[d,u]of t)u.v!==pn&&!(d in o)&&c.push(d);return c},setPrototypeOf(){Sp()}})}function Dc(i){try{if(i!==null&&typeof i=="object"&&wr in i)return i[wr]}catch{}return i}function cf(i,e){return Object.is(Dc(i),Dc(e))}var Uc,df,uf,ff;function zp(){if(Uc===void 0){Uc=window,df=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;uf=sa(e,"firstChild").get,ff=sa(e,"nextSibling").get,Cc(i)&&(i[bl]=void 0,i[Wu]=null,i[yl]=void 0,i.__e=void 0),Cc(t)&&(t[Sl]=void 0)}}function Xi(i=""){return document.createTextNode(i)}function ns(i){return uf.call(i)}function fs(i){return ff.call(i)}function R(i,e){return ns(i)}function Mt(i,e=!1){{var t=ns(i);return t instanceof Comment&&t.data===""?fs(t):t}}function q(i,e=!1){return ns(i)}function _(i,e=1,t=!1){let n=i;for(;e--;)n=fs(n);return n}function Gp(i){i.textContent=""}function hf(){return!1}function Hp(i,e,t){return t?document.createElement(i,{is:t}):document.createElement(i)}function Vp(i){var e=Ft;if(e===null)return Nt.f|=or,i;if((e.f&Ta)===0&&(e.f&ha)===0)throw i;Si(i,e)}function Si(i,e){if(i===Xu)throw i;if(!(e!==null&&(e.f&Sn)!==0)){for(;e!==null;){if((e.f&xl)!==0&&(e.f&(Sn|es))===0){if((e.f&Ta)===0)throw i;try{e.b.error(i);return}catch(t){i=t}}e=e.parent}throw i}}function Wp(i){Ft===null&&(Nt===null&&_p(),gp()),Ki&&vp()}function jp(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function Qi(i,e){var t=Ft;t!==null&&(t.f&Un)!==0&&(i|=Un);var n={ctx:Mn,deps:null,nodes:null,f:i|Kt|mi,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};Tt?.register_created_effect(n);var r=n;if((i&ha)!==0)Ka!==null?Ka.push(n):fr.ensure().schedule(n);else if(e!==null){try{ga(n)}catch(l){throw Bn(n),l}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Aa)===0&&(r=r.first,(i&fi)!==0&&(i&pa)!==0&&r!==null&&(r.f|=pa))}if(r!==null&&(r.parent=t,t!==null&&jp(r,t),Nt!==null&&(Nt.f&Rn)!==0&&(i&ur)===0)){var a=Nt;(a.effects??=[]).push(r)}return n}function $l(){return Nt!==null&&!pi}function ec(i){const e=Qi(po,null);return on(e,mn),e.teardown=i,e}function nn(i){Wp();var e=Ft.f,t=!Nt&&(e&gi)!==0&&Mn!==null&&!Mn.i;if(t){var n=Mn;(n.e??=[]).push(i)}else return pf(i)}function pf(i){return Qi(ha|Kh,i)}function Xp(i){fr.ensure();const e=Qi(ur|Aa,i);return(t={})=>new Promise(n=>{t.outro?Er(e,()=>{Bn(e),n(void 0)}):(Bn(e),n(void 0))})}function mf(i){return Qi(ha,i)}function qp(i){return Qi(oa|Aa,i)}function mo(i,e=0){return Qi(po|e,i)}function ae(i,e=[],t=[],n=[]){Pp(n,e,t,r=>{Qi(po,()=>{i(...r.map(s))})})}function vo(i,e=0){var t=Qi(fi|e,i);return t}function ei(i){return Qi(gi|Aa,i)}function vf(i){var e=i.teardown;if(e!==null){const t=Ki,n=Nt;kc(!0),si(null);try{e.call(null)}catch(r){Si(r,i.parent)}finally{kc(t),si(n)}}}function tc(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const r=t.ac;r!==null&&Ra(()=>{r.abort(us)});var n=t.next;(t.f&ur)!==0?t.parent=null:Bn(t,e),t=n}}function Yp(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&gi)===0&&Bn(e),e=t}}function Bn(i,e=!0){var t=!1;(e||(i.f&Yh)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(Kp(i.nodes.start,i.nodes.end),t=!0),i.f|=es,tc(i,e&&!t),is(i,0);var n=i.nodes&&i.nodes.t;if(n!==null)for(const a of n)a.stop();vf(i),i.f^=es,i.f|=Sn;var r=i.parent;r!==null&&r.first!==null&&gf(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=i.b=null}function Kp(i,e){for(;i!==null;){var t=i===e?null:fs(i);i.remove(),i=t}}function gf(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function Er(i,e,t=!0){var n=[];i.f|=Xl,_f(i,n,!0);var r=()=>{t&&Bn(i),e&&e()},a=n.length;if(a>0){var l=()=>--a||r();for(var o of n)o.out(l)}else r()}function _f(i,e,t){if((i.f&Un)===0){i.f^=Un;var n=i.nodes&&i.nodes.t;if(n!==null)for(const o of n)(o.is_global||t)&&e.push(o);for(var r=i.first;r!==null;){var a=r.next;if((r.f&ur)===0){var l=(r.f&pa)!==0||(r.f&gi)!==0&&(i.f&fi)!==0;_f(r,e,l?t:!1)}r=a}}}function io(i){i.f&=~Xl,xf(i,!0)}function xf(i,e){if((i.f&Xl)===0&&(i.f&Un)!==0){i.f^=Un,(i.f&mn)===0&&(on(i,Kt),fr.ensure().schedule(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&pa)!==0||(t.f&gi)!==0;xf(t,r?e:!1),t=n}var a=i.nodes&&i.nodes.t;if(a!==null)for(const l of a)(l.is_global||e)&&l.in()}}function nc(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var r=t===n?null:fs(t);e.append(t),t=r}}let Ki=!1;function kc(i){Ki=i}let Nt=null,pi=!1;function si(i){Nt=i}let Ft=null;function Ri(i){Ft=i}let Ai=null;function bf(i){Nt!==null&&((Nt.f&eo)!==0||(Nt.f&Rn)!==0)&&(Ai??=new Set).add(i)}let Fn=null,Wn=0,$n=null;function Zp(i){$n=i}let yf=1,Sr=0,Tr=Sr;function Nc(i){Tr=i}function Sf(){return++yf}function hs(i){var e=i.f;if((e&Kt)!==0)return!0;if((e&Xn)!==0){for(var t=i.deps,n=t.length,r=0;r<n;r++){var a=t[r];if(hs(a)&&tf(a),a.wv>i.wv)return!0}(e&mi)!==0&&hi===null&&on(i,mn)}return!1}function Mf(i,e,t=!0){var n=i.reactions;if(n!==null&&!(Ai!==null&&Ai.has(i)))for(var r=0;r<n.length;r++){var a=n[r];(a.f&Rn)!==0?Mf(a,e,!1):e===a&&(t?on(a,Kt):(a.f&mn)!==0&&on(a,Xn),Ql(a))}}function wf(i){var e=Fn,t=Wn,n=$n,r=Nt,a=Ai,l=Mn,o=pi,c=Tr,d=i.f;Fn=null,Wn=0,$n=null,Nt=(d&(gi|ur))===0?i:null,Ai=null,ma(i.ctx),pi=!1,Tr=++Sr,i.ac!==null&&(Ra(()=>{i.ac.abort(us)}),i.ac=null);try{i.f|=eo;var u=i.fn,h=u();i.f|=Ta;var f=Oc(i);if(Zu()&&$n!==null&&!pi&&f!==null&&(i.f&(Rn|Xn|Kt))===0)for(var g=0;g<$n.length;g++)Mf($n[g],i);if(r!==null&&r!==i){if(Sr++,r.deps!==null)for(let y=0;y<t;y+=1)r.deps[y].rv=Sr;if(e!==null)for(const y of e)y.rv=Sr;$n!==null&&(n===null?n=$n:n.push(...$n))}return(i.f&or)!==0&&(i.f^=or),h}catch(y){return Oc(i),Vp(y)}finally{i.f^=eo,Fn=e,Wn=t,$n=n,Nt=r,Ai=a,ma(l),pi=o,Tr=c}}function Oc(i){var e=i.deps,t=Tt?.is_fork;if(Fn!==null){var n;if(t||is(i,Wn),e!==null&&Wn>0)for(e.length=Wn+Fn.length,n=0;n<Fn.length;n++)e[Wn+n]=Fn[n];else i.deps=e=Fn;if($l()&&(i.f&mi)!==0)for(n=Wn;n<e.length;n++)(e[n].reactions??=[]).push(i)}else!t&&e!==null&&Wn<e.length&&(is(i,Wn),e.length=Wn);return e}function Jp(i,e){let t=e.reactions;if(t!==null){var n=Hh.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}if(t===null&&(e.f&Rn)!==0&&(Fn===null||!$a.call(Fn,e))){var a=e;(a.f&mi)!==0&&(a.f^=mi),a.v!==pn&&Yl(a),a.ac!==null&&Ra(()=>{a.ac.abort(us),a.ac=null,on(a,Kt)}),Up(a),is(a,0)}}function is(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)Jp(i,t[n])}function ga(i){var e=i.f;if((e&Sn)===0){on(i,mn);var t=Ft;Ft=i;try{(e&(fi|Hu))!==0?Yp(i):tc(i),vf(i);var n=wf(i);i.teardown=typeof n=="function"?n:null,i.wv=yf;var r;Ou&&Ep&&(i.f&Kt)!==0&&i.deps}finally{Ft=t}}}async function Qp(){await Promise.resolve(),Np()}function s(i){var e=i.f,t=(e&Rn)!==0;if(Nt!==null&&!pi){var n=Ft!==null&&(Ft.f&Sn)!==0;if(!n&&(Ai===null||!Ai.has(i))){var r=Nt.deps;if((Nt.f&eo)!==0)i.rv<Sr&&(i.rv=Sr,Fn===null&&r!==null&&r[Wn]===i?Wn++:Fn===null?Fn=[i]:Fn.push(i));else{Nt.deps??=[],$a.call(Nt.deps,i)||Nt.deps.push(i);var a=i.reactions;a===null?i.reactions=[Nt]:$a.call(a,Nt)||a.push(Nt)}}}if(Ki&&Ti.has(i))return Ti.get(i);if(t){var l=i;if(Ki){var o=l.v;return((l.f&mn)===0&&l.reactions!==null||Tf(l))&&(o=Zl(l)),Ti.set(l,o),o}var c=(l.f&mi)===0&&!pi&&Nt!==null&&(Nt.f&mi)!==0,d=(l.f&Ta)===0;hs(l)&&(c&&(l.f|=mi),tf(l)),c&&!d&&(nf(l),Ef(l))}if(hi?.has(i))return hi.get(i);if((i.f&or)!==0)throw i.v;return i.v}function Ef(i){if(i.f|=mi,i.deps!==null)for(const t of i.deps){var e=t.reactions;e===null?t.reactions=[i]:$a.call(e,i)||e.push(i),(t.f&Rn)!==0&&(t.f&mi)===0&&(nf(t),Ef(t))}}function Tf(i){if(i.v===pn)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(Ti.has(e)||(e.f&Rn)!==0&&Tf(e))return!0;return!1}function Dr(i){var e=pi;try{return pi=!0,i()}finally{pi=e}}const $p=["touchstart","touchmove"];function em(i){return $p.includes(i)}const Va=Symbol("events"),Af=new Set,El=new Set;function tm(i,e,t,n={}){function r(a){if(n.capture||Tl.call(e,a),!a.cancelBubble)return Ra(()=>t?.call(this,a))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?(r.__removed=!1,wi(()=>{r.__removed||e.addEventListener(i,r,n)})):e.addEventListener(i,r,n),r}function kn(i,e,t,n,r){var a={capture:n,passive:r},l=tm(i,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ec(()=>{l.__removed=!0,e.removeEventListener(i,l,a)})}function J(i,e,t){(e[Va]??={})[i]=t}function rn(i){for(var e=0;e<i.length;e++)Af.add(i[e]);for(var t of El)t(i)}let Io=null,Do=!1;function Tl(i){var e=this,t=e.ownerDocument,n=i.type,r=i.composedPath?.()||[],a=r[0]||i.target;Io=i,Do||(Do=!0,setTimeout(()=>{Do=!1,Io=null}));var l=0,o=Io===i&&i[Va];if(o){var c=r.indexOf(o);if(c!==-1&&(e===document||e===window)){i[Va]=e;return}var d=r.indexOf(e);if(d===-1)return;c<=d&&(l=c)}if(a=r[l]||i.target,a!==e){Fu(i,"currentTarget",{configurable:!0,get(){return a||t}});var u=Nt,h=Ft;si(null),Ri(null);try{for(var f,g=[];a!==null&&a!==e;){try{var y=a[Va]?.[n];y!=null&&(!a.disabled||i.target===a)&&y.call(a,i)}catch(S){f?g.push(S):f=S}if(i.cancelBubble)break;l++,a=l<r.length?r[l]:null}if(f){for(let S of g)queueMicrotask(()=>{throw S});throw f}}finally{i[Va]=e,delete i.currentTarget,si(u),Ri(h)}}}const nm=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function im(i){return nm?.createHTML(i)??i}function rm(i){var e=Hp("template");return e.innerHTML=im(i.replaceAll("<!>","<!---->")),e.content}function ro(i,e){var t=Ft;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function N(i,e){var t=(e&op)!==0,n=(e&lp)!==0,r,a=!i.startsWith("<!>");return()=>{r===void 0&&(r=rm(a?i:"<!>"+i),t||(r=ns(r)));var l=n||df?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=ns(l),c=l.lastChild;ro(o,c)}else ro(l,l);return l}}function Hi(i=""){{var e=Xi(i+"");return ro(e,e),e}}function _a(){var i=document.createDocumentFragment(),e=document.createComment(""),t=Xi();return i.append(e,t),ro(e,t),i}function U(i,e){i!==null&&i.before(e)}function am(i){let e=0,t=Lr(0),n;return()=>{$l()&&(s(t),mo(()=>(e===0&&(n=Dr(()=>i(()=>Za(t)))),e+=1,()=>{wi(()=>{e-=1,e===0&&(n?.(),n=void 0,Za(t))})})))}}var sm=pa|Aa;function om(i,e,t,n){new lm(i,e,t,n)}class lm{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#d=null;#m=am(()=>(this.#d=Lr(this.#h),()=>{this.#d=null}));constructor(e,t,n,r){this.#t=e,this.#e=t,this.#s=a=>{var l=Ft;l.b=this,l.f|=xl,n(a)},this.parent=Ft.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=vo(()=>{this.#b()},sm)}#x(){try{this.#i=ei(()=>this.#s(this.#t))}catch(e){this.error(e)}}#S(e){const t=this.#e.failed,{reset:n,invoke_onerror:r}=this.#_(e);wi(r),t&&(this.#r=ei(()=>{t(this.#t,()=>e,()=>n)}))}#_(e){var t=!1,n=!1;const r=()=>{if(!this.#u()){if(t){fp();return}t=!0,n&&wp(),this.#r!==null&&Er(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#u())try{n=!0,this.#e.onerror?.(e,r),n=!1}catch(l){Si(l,this.#n&&this.#n.parent)}}}}#u(){return(this.#n.f&(Sn|es))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=ei(()=>e(this.#t)),wi(()=>{if(!this.#u()){var t=this.#o=document.createDocumentFragment(),n=Xi(),r=!1;if(t.append(n),this.#i=this.#y(()=>{try{return ei(()=>this.#s(n))}catch(a){try{this.error(a),r=!0}catch(l){Si(l,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(Tt);return}this.#c===0&&(this.#t.before(t),this.#o=null,Er(this.#a,()=>{this.#a=null}),this.#f(Tt))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=ei(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();nc(this.#i,e);const t=this.#e.pending;this.#a=ei(()=>t(this.#t))}else this.#f(Tt)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){Qu(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=Ft,n=Nt,r=Mn;Ri(this.#n),si(this.#n),ma(this.#n.ctx);try{return fr.ensure(),e()}finally{Ri(t),si(n),ma(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&Er(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#h+=e,!(!this.#d||this.#p)&&(this.#p=!0,wi(()=>{this.#p=!1,this.#d&&va(this.#d,this.#h)}))}get_effect_pending(){return this.#m(),s(this.#d)}error(e){if(e===Xu||!this.#e.onerror&&!this.#e.failed)throw e;Tt?.is_fork?(this.#i&&Tt.skip_effect(this.#i),this.#a&&Tt.skip_effect(this.#a),this.#r&&Tt.skip_effect(this.#r),Tt.oncommit(()=>{this.#u()||this.#w(e)})):this.#w(e)}#w(e){this.#i&&(Bn(this.#i),this.#i=null),this.#a&&(Bn(this.#a),this.#a=null),this.#r&&(Bn(this.#r),this.#r=null);let t=this.#e.failed;const n=r=>{if(this.#u())return;const{reset:a,invoke_onerror:l}=this.#_(r);l(),t&&!this.#u()&&(this.#r=this.#y(()=>{try{return ei(()=>{var o=Ft;o.b=this,o.f|=xl,t(this.#t,()=>r,()=>a)})}catch(o){return Si(o,this.#n.parent),null}}))};wi(()=>{if(!this.#u()){var r;try{r=this.transform_error(e)}catch(a){Si(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(n,a=>Si(a,this.#n&&this.#n.parent)):n(r)}})}}function Y(i,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(i[Sl]??=i.nodeValue)&&(i[Sl]=t,i.nodeValue=`${t}`)}function cm(i,e){return dm(i,e)}const gs=new Map;function dm(i,{target:e,anchor:t,props:n={},events:r,context:a,intro:l=!0,transformError:o}){zp();var c=void 0,d=Xp(()=>{var u=t??e.appendChild(Xi());om(u,{pending:()=>{}},g=>{jt({});var y=Mn;a&&(y.c=a),r&&(n.$$events=r),c=i(g,n)||ql(),Xt()},o);var h=new Set,f=g=>{for(var y=0;y<g.length;y++){var S=g[y];if(!h.has(S)){h.add(S);var p=em(S);for(const b of[e,document]){var m=gs.get(b);m===void 0&&(m=new Map,gs.set(b,m));var w=m.get(S);w===void 0?(b.addEventListener(S,Tl,{passive:p}),m.set(S,1)):m.set(S,w+1)}}}};return f(ho(Af)),El.add(f),()=>{for(var g of h)for(const p of[e,document]){var y=gs.get(p),S=y.get(g);--S==0?(p.removeEventListener(g,Tl),y.delete(g),y.size===0&&gs.delete(p)):y.set(g,S)}El.delete(f),u!==t&&u.parentNode?.removeChild(u)}});return um.set(c,d),c}let um=new WeakMap;class Rf{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),n=this.#l.get(t);if(n)io(n),this.#s.delete(t);else{var r=this.#e.get(t);r&&(io(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[a,l]of this.#t){if(this.#t.delete(a),a===e)break;const o=this.#e.get(l);o&&(Bn(o.effect),this.#e.delete(l))}for(const[a,l]of this.#l){if(a===t||this.#s.has(a))continue;const o=()=>{if(Array.from(this.#t.values()).includes(a)){var d=document.createDocumentFragment();nc(l,d),d.append(Xi()),this.#e.set(a,{effect:l,fragment:d})}else Bn(l);this.#s.delete(a),this.#l.delete(a)};this.#n||!n?(this.#s.add(a),Er(l,o,!1)):o()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[n,r]of this.#e)t.includes(n)||(Bn(r.effect),this.#e.delete(n))};ensure(e,t){var n=Tt,r=hf();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),l=Xi();a.append(l),this.#e.set(e,{effect:ei(()=>t(l)),fragment:a})}else this.#l.set(e,ei(()=>t(this.anchor)));if(this.#t.set(n,e),r){for(const[o,c]of this.#l)o===e?n.unskip_effect(c):n.skip_effect(c);for(const[o,c]of this.#e)o===e?n.unskip_effect(c.effect):n.skip_effect(c.effect);n.oncommit(this.#i),n.ondiscard(this.#a)}else this.#i(n)}}function Me(i,e,t=!1){var n=new Rf(i),r=t?pa:0;function a(l,o){n.ensure(l,o)}vo(()=>{var l=!1;e((o,c=0)=>{l=!0,a(c,o)}),l||a(-1,null)},r)}const fm=Symbol("NaN");function Cf(i,e,t){var n=new Rf(i);vo(()=>{var r=e();r!==r&&(r=fm),n.ensure(r,t)})}function ao(i,e){return e}function hm(i,e,t){for(var n=[],r=e.length,a,l=e.length,o=0;o<r;o++){let h=e[o];Er(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=i.outrogroups;Al(i,ho(a.done)),f.delete(a),f.size===0&&(i.outrogroups=null)}}else l-=1},!1)}if(l===0){var c=n.length===0&&t!==null&&i.pending.size===0;if(c){var d=t,u=d.parentNode;Gp(u),u.append(d),i.items.clear()}Al(i,e,!c)}else a={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(a)}function Al(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const l of i.pending.values())for(const o of l)n.add(i.items.get(o).e)}for(var r=0;r<e.length;r++){var a=e[r];if(n?.has(a)){a.f|=Mi;const l=document.createDocumentFragment();nc(a,l)}else Bn(e[r],t)}}var Fc;function Et(i,e,t,n,r,a=null){var l=i,o=new Map,c=(e&ju)!==0;if(c){var d=i;l=d.appendChild(Xi())}var u=null,h=ef(()=>{var w=t();return fo(w)?w:w==null?[]:ho(w)}),f=new Map,g=!0;function y(w){if((m.effect.f&Sn)===0){m.pending.delete(w);var b=s(h);m.fallback=u,pm(m,b,l,e,n),u!==null&&(b.length===0?(u.f&Mi)===0?io(u):(u.f^=Mi,Wa(u,null,l)):Er(u,()=>{u=null}))}}function S(w){m.pending.delete(w)}var p=vo(()=>{for(var w=s(h),b=w.length,T=new Set,A=Tt,D=hf(),C=0;C<b;C+=1){var V=w[C],x=n(V,C),M=g?null:o.get(x);M?(M.v&&va(M.v,V),M.i&&va(M.i,C),D&&A.unskip_effect(M.e)):(M=mm(o,g?l:Fc??=Xi(),V,x,C,r,e,t),g||(M.e.f|=Mi),o.set(x,M)),T.add(x)}if(b===0&&a&&!u&&(g?u=ei(()=>a(l)):(u=ei(()=>a(Fc??=Xi())),u.f|=Mi)),b>T.size&&mp(),!g)if(f.set(A,T),D){for(const[ne,z]of o)T.has(ne)||A.skip_effect(z.e);A.oncommit(y),A.ondiscard(S)}else y(A);s(h)}),m={effect:p,items:o,pending:f,outrogroups:null,fallback:u};g=!1}function Da(i){for(;i!==null&&(i.f&gi)===0;)i=i.next;return i}function pm(i,e,t,n,r){var a=(n&tp)!==0,l=e.length,o=i.items,c=Da(i.effect.first),d,u=null,h,f=[],g=[],y,S,p,m;if(a)for(m=0;m<l;m+=1)y=e[m],S=r(y,m),p=o.get(S).e,(p.f&Mi)===0&&(p.nodes?.a?.measure(),(h??=new Set).add(p));for(m=0;m<l;m+=1){if(y=e[m],S=r(y,m),p=o.get(S).e,i.outrogroups!==null)for(const M of i.outrogroups)M.pending.delete(p),M.done.delete(p);if((p.f&Un)!==0&&(io(p),a&&(p.nodes?.a?.unfix(),(h??=new Set).delete(p))),(p.f&Mi)!==0)if(p.f^=Mi,p===c)Wa(p,null,t);else{var w=u?u.next:c;p===i.effect.last&&(i.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),er(i,u,p),er(i,p,w),Wa(p,w,t),u=p,f=[],g=[],c=Da(u.next);continue}if(p!==c){if(d!==void 0&&d.has(p)){if(f.length<g.length){var b=g[0],T;u=b.prev;var A=f[0],D=f[f.length-1];for(T=0;T<f.length;T+=1)Wa(f[T],b,t);for(T=0;T<g.length;T+=1)d.delete(g[T]);er(i,A.prev,D.next),er(i,u,A),er(i,D,b),c=b,u=D,m-=1,f=[],g=[]}else d.delete(p),Wa(p,c,t),er(i,p.prev,p.next),er(i,p,u===null?i.effect.first:u.next),er(i,u,p),u=p;continue}for(f=[],g=[];c!==null&&c!==p;)(d??=new Set).add(c),g.push(c),c=Da(c.next);if(c===null)continue}(p.f&Mi)===0&&f.push(p),u=p,c=Da(p.next)}if(i.outrogroups!==null){for(const M of i.outrogroups)M.pending.size===0&&(Al(i,ho(M.done)),i.outrogroups?.delete(M));i.outrogroups.size===0&&(i.outrogroups=null)}if(c!==null||d!==void 0){var C=[];if(d!==void 0)for(p of d)(p.f&Un)===0&&C.push(p);for(;c!==null;)(c.f&Un)===0&&c!==i.fallback&&C.push(c),c=Da(c.next);var V=C.length;if(V>0){var x=(n&ju)!==0&&l===0?t:null;if(a){for(m=0;m<V;m+=1)C[m].nodes?.a?.measure();for(m=0;m<V;m+=1)C[m].nodes?.a?.fix()}hm(i,C,x)}}a&&wi(()=>{if(h!==void 0)for(p of h)p.nodes?.a?.apply()})}function mm(i,e,t,n,r,a,l,o){var c=(l&$h)!==0?(l&np)===0?Fp(t,!1,!1):Lr(t):null,d=(l&ep)!==0?Lr(r):null;return{v:c,i:d,e:ei(()=>(a(e,c??t,d??r,o),()=>{i.delete(n)}))}}function Wa(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,a=e&&(e.f&Mi)===0?e.nodes.start:t;n!==null;){var l=fs(n);if(a.before(n),n===r)return;n=l}}function er(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}function Pf(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(t=Pf(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function vm(){for(var i,e,t=0,n="",r=arguments.length;t<r;t++)(i=arguments[t])&&(e=Pf(i))&&(n&&(n+=" "),n+=e);return n}function gm(i){return typeof i=="object"?vm(i):i??""}const Bc=[...` 	
\r\f \v\uFEFF`];function _m(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var r of Object.keys(t))if(t[r])n=n?n+" "+r:r;else if(n.length)for(var a=r.length,l=0;(l=n.indexOf(r,l))>=0;){var o=l+a;(l===0||Bc.includes(n[l-1]))&&(o===n.length||Bc.includes(n[o]))?n=(l===0?"":n.substring(0,l))+n.substring(o+1):l=o}}return n===""?null:n}function xm(i,e){return i==null?null:String(i)}function xt(i,e,t,n,r,a){var l=i[bl];if(l!==t||l===void 0){var o=_m(t,n,a);o==null?i.removeAttribute("class"):i.className=o,i[bl]=t}else if(a&&r!==a)for(var c in a){var d=!!a[c];(r==null||d!==!!r[c])&&i.classList.toggle(c,d)}return a}function In(i,e,t,n){var r=i[yl];if(r!==e){var a=xm(e);a==null?i.removeAttribute("style"):i.style.cssText=a,i[yl]=e}return n}function bm(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function ym(i,e){var t=i.__defaultValue,n=i.multiple,r=n?t??[]:null;if(!(n&&!fo(r))){i.selectedIndex;for(var a of i.options){var l=ca(a);bm(a,n?r.includes(l):cf(l,t))}}}function Lf(i,e,t=!1){if(i.multiple){if(e==null)return;if(!fo(e))return up();for(var n of i.options)n.selected=e.includes(ca(n));return}for(n of i.options){var r=ca(n);if(cf(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function xa(i){var e=new MutationObserver(t=>{t.every(Sm)||("__defaultValue"in i&&ym(i),"__value"in i&&Lf(i,i.__value))});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ec(()=>{e.disconnect()})}function ba(i,e,t=e){var n=new WeakSet,r=!0;Kl(i,"change",a=>{var l=a?"[selected]":":checked",o;if(i.multiple)o=[].map.call(i.querySelectorAll(l),ca);else{var c=i.querySelector(l)??i.querySelector("option:not([disabled])");o=c&&ca(c)}t(o),i.__value=o,Tt!==null&&n.add(Tt)}),mf(()=>{var a=e();if(i===document.activeElement){var l=Tt;if(n.has(l))return}if(Lf(i,a,r),r&&a===void 0){var o=i.querySelector(":checked");o!==null&&(a=ca(o),t(a))}i.__value=a,r=!1})}function ca(i){return"__value"in i?i.__value:i.value}function Sm(i){if(i.target.closest("selectedcontent")!==null)return!0;if(i.type==="childList"){var e=[...i.addedNodes,...i.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const Mm=Symbol("is custom element"),wm=Symbol("is html"),Em=Qh?"progress":"PROGRESS";function rs(i,e){var t=ic(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==Em)||(i.value=e??"")}function Ja(i,e){var t=ic(i);t.checked!==(t.checked=e??void 0)&&(i.checked=e)}function je(i,e,t,n){var r=ic(i),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(i[Jh]=t),t==null?i.removeAttribute(e):typeof t!="string"&&Tm(i).has(e)?i[e]=t:i.setAttribute(e,t))}function ic(i){return i[Wu]??={[Mm]:i.nodeName.includes("-"),[wm]:i.namespaceURI===cp}}var zc=new Map;function Tm(i){var e=i.getAttribute("is")||i.nodeName,t=zc.get(e);if(t)return t;zc.set(e,t=new Set);for(var n,r=i,a=Element.prototype;a!==r;){n=Vh(r);for(var l in n)n[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&t.add(l);r=Bu(r)}return t}function Ot(i,e,t=e){var n=new WeakSet;Kl(i,"input",async r=>{var a=r?i.defaultValue:i.value;if(a=Uo(i)?ko(a):a,t(a),Tt!==null&&n.add(Tt),await Qp(),a!==(a=e())){var l=i.selectionStart,o=i.selectionEnd,c=i.value.length;if(i.value=a??"",o!==null){var d=i.value.length;l===o&&o===c&&d>c?(i.selectionStart=d,i.selectionEnd=d):(i.selectionStart=l,i.selectionEnd=Math.min(o,d))}}}),Dr(e)==null&&i.value&&(t(Uo(i)?ko(i.value):i.value),Tt!==null&&n.add(Tt)),mo(()=>{var r=e();if(i===document.activeElement){var a=Tt;if(n.has(a))return}Uo(i)&&r===ko(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function Am(i,e,t=e){Kl(i,"change",n=>{var r=n?i.defaultChecked:i.checked;t(r)}),Dr(e)==null&&t(i.checked),mo(()=>{var n=e();i.checked=!!n})}function Uo(i){var e=i.type;return e==="number"||e==="range"}function ko(i){return i===""?null:+i}function No(i,e){return i===e||i?.[wr]===e}function rc(i=ql(),e,t,n){var r=Mn.r,a=Ft;return mf(()=>{var l,o;return mo(()=>{l=o,o=[],Dr(()=>{No(t(...o),i)||(e(i,...o),l&&No(t(...l),i)&&e(null,...l))})}),()=>{let c=a;for(;c!==r&&c.parent!==null&&c.parent.f&es;)c=c.parent;const d=()=>{o&&No(t(...o),i)&&e(null,...o)},u=c.teardown;c.teardown=()=>{d(),u?.()}}}),i}let _s=!1;function Rm(i){var e=_s;try{return _s=!1,[i(),_s]}finally{_s=e}}function ot(i,e,t,n){var r=!0,a=(t&ap)!==0,l=(t&sp)!==0,o=n,c=!0,d=void 0,u=()=>l&&r?(d??=ts(n),s(d)):(c&&(c=!1,o=l?Dr(n):n),o);let h;if(a){var f=wr in i||Zh in i;h=sa(i,e)?.set??(f&&e in i?T=>i[e]=T:void 0)}var g,y=!1;a?[g,y]=Rm(()=>i[e]):g=i[e],g===void 0&&n!==void 0&&(g=u(),h&&(bp(),h(g)));var S;if(S=()=>{var T=i[e];return T===void 0?u():(c=!0,T)},(t&rp)===0)return S;if(h){var p=i.$$legacy;return(function(T,A){return arguments.length>0?((!A||p||y)&&h(A?S():T),T):S()})}var m=!1,w=((t&ip)!==0?ts:ef)(()=>(m=!1,S()));a&&s(w);var b=Ft;return(function(T,A){if(arguments.length>0){const D=A?s(w):a?Pt(T):T;return v(w,D),m=!0,o!==void 0&&(o=D),T}return Ki&&m||(b.f&Sn)!==0?w.v:s(w)})}function _i(i){Mn===null&&Ku(),nn(()=>{const e=Dr(i);if(typeof e=="function")return e})}function ac(i){Mn===null&&Ku(),_i(()=>()=>Dr(i))}const Cm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Cm);function Pm(i){const e=[];for(const t of String(i??"")){const n=t.codePointAt(0);if(!(n===65039||n===65038)){if(n===8205){e.push("200d");continue}e.push(n.toString(16))}}return e.join("-")}const If=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310","23f9","2b07","1f50d","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","1f980","2b50","1f9ed","1f5e1","1f52e","1f409","1f47e","2693","1f3b2","1f4a3","1f36a","1f331","1f9bb","1f4da","2696","1f3c6","1f451","1f9ea","1f52d","1f6e9"]),Lm=["1f980","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","2b50","1f9ed","1f310","1f409","1f47e","1f4a3","1f36a","1f331","1f9ea","1f52e","1f52d","2693","1f3b2","1f4da","2696","1f3c6","1f451","1f5e1","1f9f1","1f9e9"],Df=["grass","dirt","stone","diamond","gold","iron","brick","planks","creeper","squarecreeper","enderman","skeleton","steve","herobrine","chicken","fox","bee","meat","enderpearl","netherstar","flame","tnt","gear","magitech","fabricmc","quiltmc","neoforged","modrinth","ftb_logo","prismlauncher"],Rl="/";function Im(i){const e=Pm(i);return If.has(e)?`${Rl}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}function go(i){const e=String(i??"").trim();if(!e)return null;if(e.startsWith("twemoji:")){const t=e.slice(8);return If.has(t)?`${Rl}twemoji/${t}.svg`.replace(/\/{2,}/g,"/"):null}if(e.startsWith("prism:")){const t=e.slice(6);return Df.includes(t)?`${Rl}instance-icons/prism/${t}.svg`.replace(/\/{2,}/g,"/"):null}return null}var Dm=N('<img draggable="false"/>'),Um=N("<span> </span>");function Ei(i,e){jt(e,!0);let t=ot(e,"emoji",3,""),n=ot(e,"size",3,null),r=ot(e,"alt",3,""),a=ot(e,"class",3,"");const l=mt(()=>Im(t())),o=mt(()=>r()||t()),c=mt(()=>n()?`${n()}px`:"1em");var d=_a(),u=Mt(d);{var h=g=>{var y=Dm();ae(()=>{je(y,"src",s(l)),je(y,"alt",s(o)),je(y,"title",r()||void 0),xt(y,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),In(y,`width: ${s(c)??""}; height: ${s(c)??""};`),je(y,"aria-hidden",r()?void 0:"true")}),U(g,y)},f=g=>{var y=Um(),S=q(y,!0);ae(()=>{xt(y,1,`inline-block ${a()??""}`),je(y,"aria-hidden",r()?void 0:"true"),je(y,"title",r()||void 0),Y(S,t())}),U(g,y)};Me(u,g=>{s(l)?g(h):g(f,-1)})}U(i,d),Xt()}var km=N('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Rename</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),Nm=N('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Om(i,e){jt(e,!0);let t=ot(e,"selected",3,!1),n=ot(e,"gameRunning",3,!1),r=ot(e,"menuOpen",3,!1);const a=mt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function l(){const V=go(e.instance.icon_key);if(V)return V;const x=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&x?x(e.instance.icon_path):"/logo.png"}var o=Nm(),c=R(o),d=R(c),u=q(d),h=_(d,2),f=R(h),g=q(f,!0),y=_(f,2),S=R(y),p=q(S,!0),m=_(S,2),w=q(m,!0),b=_(h,2),T=_(c,2),A=q(T,!0),D=_(T,2);{var C=V=>{var x=km(),M=Mt(x),ne=_(M,2),z=R(ne),O=_(z,2),H=_(O,2),X=_(H,2),ge=R(X);Ei(ge,{emoji:"📂"});var le=_(X,2),ce=_(le,4);ae(()=>z.disabled=n()),J("click",M,function(...me){e.onclosemenu?.apply(this,me)}),J("click",z,()=>{e.onclosemenu(),e.onplay()}),J("click",O,()=>{e.onclosemenu(),e.onedit()}),J("click",H,()=>{e.onclosemenu(),e.onrename?.()}),J("click",X,()=>{e.onclosemenu(),e.onopenfolder()}),J("click",le,function(...me){e.onviewlogs?.apply(this,me)}),J("click",ce,()=>{e.onclosemenu(),e.ondelete()}),U(V,x)};Me(D,V=>{r()&&V(C)})}ae((V,x)=>{xt(o,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),je(o,"aria-selected",t()),je(o,"title",e.instance.name),je(u,"src",V),Y(g,e.instance.name),Y(p,e.instance.minecraft_version),xt(m,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${s(a)??""}`),Y(w,e.instance.loader_type),Y(A,x)},[()=>l(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),J("click",o,function(...V){e.onselect?.apply(this,V)}),J("dblclick",o,function(...V){e.onplay?.apply(this,V)}),J("keydown",o,V=>{(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),e.onplay())}),J("contextmenu",o,V=>{V.preventDefault(),e.onselect(),e.ontogglemenu()}),kn("error",u,V=>{V.currentTarget.dataset.f||(V.currentTarget.dataset.f="1",V.currentTarget.src="/logo.png")}),J("click",b,V=>{V.stopPropagation(),e.ontogglemenu()}),U(i,o),Xt()}rn(["click","dblclick","keydown","contextmenu"]);var Fm=N('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Bm=N('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),zm=N('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Gm=N('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function Hm(i,e){jt(e,!0);var t=Gm();Et(t,21,()=>e.instances,n=>n.id,(n,r)=>{{let a=mt(()=>e.selectedId===s(r).id),l=mt(()=>e.menuFor===s(r).id);Om(n,{get instance(){return s(r)},get selected(){return s(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return s(l)},onselect:()=>e.onselect?.(s(r).id),onplay:()=>e.onplay?.(s(r).id),ontogglemenu:()=>e.ontogglemenu?.(s(r).id),onedit:()=>e.onedit?.(s(r)),onrename:()=>e.onrename?.(s(r)),onopenfolder:()=>e.onopenfolder?.(s(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(s(r).id),get onclosemenu(){return e.onclosemenu}})}},n=>{var r=_a(),a=Mt(r);{var l=u=>{var h=Fm(),f=q(h,!0);ae(()=>Y(f,e.error)),U(u,h)},o=u=>{var h=Bm(),f=q(h);ae(g=>Y(f,`No instances match "${g??""}".`),[()=>e.query.trim()]),U(u,h)},c=mt(()=>e.query.trim()),d=u=>{var h=zm(),f=_(R(h),6);J("click",f,()=>e.onadd?.()),U(u,h)};Me(a,u=>{e.error?u(l):s(c)?u(o,1):u(d,-1)})}U(n,r)}),U(i,t),Xt()}rn(["click"]);const as=[];function Ca(i){return as.push(i),i}function Pa(i){const e=as.lastIndexOf(i);e!==-1&&as.splice(e,1)}function Gc(){return as[as.length-1]??null}var Vm=N('<button type="button" role="tab"> </button>'),Wm=N('<button type="button"><img alt="" class="h-12 w-12 object-contain" draggable="false" loading="lazy"/> <span class="w-full truncate text-center text-[10px] text-(--text-muted)"> </span></button>'),jm=N('<div class="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2"></div>'),Xm=N('<button type="button"><img alt="" class="h-8 w-8" draggable="false" loading="lazy"/></button>'),qm=N('<div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2"></div>'),Ym=N('<div class="flex items-center gap-2 rounded border border-(--border) p-2"><img alt="" class="h-10 w-10 object-contain" draggable="false"/> <span class="truncate text-[11px] text-(--text-muted)"> </span></div>'),Km=N('<p role="alert" class="text-[11px] text-red-400"> </p>'),Zm=N(`<div class="flex flex-col items-start gap-3"><p class="text-[12px] text-(--text-muted)">Pick a PNG, JPG, SVG, WEBP or ICO from disk. The file is copied into the instance
            directory, so the instance stays self-contained.</p> <!> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-xs font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-50"> </button> <!></div>`),Jm=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Choose an instance icon"><div class="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-xl"><header class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h2 class="text-sm font-semibold">Instance icon</h2> <button type="button" class="rounded px-2 py-1 text-xs text-(--text-muted) hover:bg-(--bg-subtle)" aria-label="Close icon picker">Close</button></header> <div class="flex gap-1 border-b border-(--border) px-3 py-2" role="tablist" aria-label="Icon sources"></div> <div class="min-h-0 flex-1 overflow-y-auto p-4"><!></div></div></div>');function Uf(i,e){jt(e,!0);let t=ot(e,"currentKey",3,""),n=ot(e,"currentPath",3,"");const r=[{id:"prism",label:"Prism / Freesm"},{id:"twemoji",label:"Twemoji"},{id:"custom",label:"Custom image…"}];let a=Z("prism"),l=Z(!1),o=Z("");const c="/",d=x=>`${c}${x}`.replace(/\/{2,}/g,"/"),u=x=>d(`instance-icons/prism/${x}.svg`),h=x=>d(`twemoji/${x}.svg`),f=x=>x.replace(/_/g," ").replace(/\b\w/g,M=>M.toUpperCase()).replace(/^(Fabricmc|Quiltmc|Neoforged|Ftb)\b/,M=>({Fabricmc:"Fabric",Quiltmc:"Quilt",Neoforged:"NeoForge",Ftb:"FTB"})[M]??M);_i(()=>{const x=Ca(()=>e.onclose?.());return()=>Pa(x)});function g(x){e.onpick?.(x),e.onclose?.()}async function y(){if(!s(l)){v(l,!0),v(o,"");try{const x=await e.oncustom?.();if(x==null)return;e.onclose?.()}catch(x){v(o,String(x),!0)}finally{v(l,!1)}}}var S=Jm(),p=R(S),m=R(p),w=_(R(m),2),b=_(m,2);Et(b,21,()=>r,x=>x.id,(x,M)=>{var ne=Vm(),z=q(ne,!0);ae(()=>{je(ne,"aria-selected",s(a)===s(M).id),xt(ne,1,`rounded px-2.5 py-1 text-xs font-medium transition-colors ${s(a)===s(M).id?"bg-(--accent)/15 text-(--accent)":"text-(--text-muted) hover:bg-(--bg-subtle)"}`),Y(z,s(M).label)}),J("click",ne,()=>v(a,s(M).id,!0)),U(x,ne)});var T=_(b,2),A=R(T);{var D=x=>{var M=jm();Et(M,20,()=>Df,ne=>ne,(ne,z)=>{var O=Wm(),H=R(O),X=_(H,2),ge=q(X,!0);ae((le,ce,me)=>{xt(O,1,`group flex flex-col items-center gap-1 rounded border p-2 transition-colors ${t()===`prism:${z}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),je(O,"title",le),je(H,"src",ce),Y(ge,me)},[()=>f(z),()=>u(z),()=>f(z)]),J("click",O,()=>g(`prism:${z}`)),U(ne,O)}),U(x,M)},C=x=>{var M=qm();Et(M,20,()=>Lm,ne=>ne,(ne,z)=>{var O=Xm(),H=q(O);ae(X=>{xt(O,1,`flex items-center justify-center rounded border p-2 transition-colors ${t()===`twemoji:${z}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),je(O,"title",z),je(O,"aria-label",`Twemoji ${z}`),je(H,"src",X)},[()=>h(z)]),J("click",O,()=>g(`twemoji:${z}`)),U(ne,O)}),U(x,M)},V=x=>{var M=Zm(),ne=_(R(M),2);{var z=le=>{var ce=Ym(),me=R(ce),ee=_(me,2),W=q(ee,!0);ae(()=>{je(me,"src",n()),Y(W,n())}),U(le,ce)};Me(ne,le=>{n()&&le(z)})}var O=_(ne,2),H=q(O,!0),X=_(O,2);{var ge=le=>{var ce=Km(),me=q(ce,!0);ae(()=>Y(me,s(o))),U(le,ce)};Me(X,le=>{s(o)&&le(ge)})}ae(()=>{O.disabled=s(l),Y(H,s(l)?"Copying…":"Choose file…")}),J("click",O,y),U(x,M)};Me(A,x=>{s(a)==="prism"?x(D):s(a)==="twemoji"?x(C,1):x(V,-1)})}J("click",w,function(...x){e.onclose?.apply(this,x)}),U(i,S),Xt()}rn(["click"]);const ss="twilight_user_accent",sc="twilight_custom_themes",Hc="#06B6D4",Vc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],Wc="#0F172A",Qm="#FFFFFF",$m={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function xs(i){return $m[i]??[]}function ps(i){let e=i.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function jc(i){const e=t=>{const n=parseInt(i.replace("#","").substring(t,t+2),16)/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function ev(i){const e=jc(i),t=1.05/(e+.05);return(e+.05)/(jc(Wc)+.05)>=t?Wc:Qm}function os(i,{persist:e=!0}={}){const t=ps(i);if(!t)return!1;const n=document.documentElement;return n.style.setProperty("--user-accent",t),n.style.setProperty("--on-accent",ev(t)),e&&localStorage.setItem(ss,t),!0}function tv(){localStorage.removeItem(ss);const i=document.documentElement;i.style.removeProperty("--user-accent"),i.style.removeProperty("--on-accent")}function Cl(){return ps(localStorage.getItem(ss)??"")}function nv(){const i=Cl();i&&os(i)}const _o=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:Vc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...Vc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:xs("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:xs("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:xs("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:xs("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],oc="twilight-dark",Pl={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},iv=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function rv(i){let e="";for(const t of i){const n=t.codePointAt(0);n>=65&&n<=90?e+=String.fromCharCode(n+32):n>=97&&n<=122||n>=48&&n<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function kf(i){const e=i&&typeof i=="object"?i:{},t={};for(const[n,r]of Object.entries(Pl))t[n]=ps(e[n]??"")??r;return t}function av(i){return typeof i=="string"&&i.startsWith("custom:")}function Nf(i){return Mr().find(e=>e.id===i)??null}function Mr(){try{const i=JSON.parse(localStorage.getItem(sc)??"[]");return Array.isArray(i)?i.filter(e=>e&&typeof e=="object"&&av(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:kf(e.tokens)})):[]}catch{return[]}}function Xc({name:i,dark:e,tokens:t}){const n=String(i??"").trim()||"Custom theme",r={id:`custom:${rv(n)||"theme"}`,name:n,dark:!!e,tokens:kf(t)},a=[...Mr().filter(l=>l.id!==r.id),r];return localStorage.setItem(sc,JSON.stringify(a)),r}function sv(i){const e=Mr().filter(t=>t.id!==i);return localStorage.setItem(sc,JSON.stringify(e)),e}function qc(){try{const i=getComputedStyle(document.documentElement),e=(n,r)=>{const a=i.getPropertyValue(n).trim();return ps(a)??r},t={};for(const[n,r]of Object.entries(Pl)){const a=`--${n.replace(/(\d)$/,"-$1")}`;t[n]=e(a,r)}return t}catch{return{...Pl}}}const ov=new Set(_o.map(i=>i.id));function lc(i){const e=(i??"").trim();return e==="dark"?oc:e==="light"?"twilight-light":ov.has(e)||Nf(e)?e:null}function lv(i){const e=i.tokens;return{id:i.id,label:i.name,dark:i.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:i.name,hex:e.accent1}],tokens:e}}function da(i){const e=lc(i);return e?_o.find(t=>t.id===e)??lv(Nf(e)):null}function ja(i){return da(i)?.dark??!0}const cv=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Oo="";function dv(i){const e=da(i)??da(oc);if(!e||e.id===Oo)return e;const t=Oo==="";Oo=e.id;const n=document.documentElement;for(const r of cv)n.style.removeProperty(r);n.classList.toggle("dark",e.dark),n.classList.toggle("light",!e.dark);for(const r of _o)r.cls&&n.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;n.style.setProperty("--bg-1",r.bg1),n.style.setProperty("--bg-2",r.bg2),n.style.setProperty("--bg-3",r.bg3),n.style.setProperty("--border-1",r.border1),n.style.setProperty("--fg-1",r.fg1),n.style.setProperty("--fg-2",r.fg2),n.style.setProperty("--accent-1",r.accent1),n.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(ss),os(r.accent1,{persist:!1})}else t||(localStorage.removeItem(ss),os(e.accent,{persist:!1}));return e}const uv="/".replace(/\/{2,}/g,"/"),Of=[{id:"fluent-auto",label:"Fluent (Auto)",hint:"Freesm Fluent · follows the theme"},{id:"fluent",label:"Fluent Light",hint:"Freesm Fluent · light ink"},{id:"fluent_dark",label:"Fluent Dark",hint:"Freesm Fluent · white ink"},{id:"breeze_dark",label:"Breeze Dark",hint:"Prism · KDE Breeze dark"},{id:"breeze_light",label:"Breeze Light",hint:"Prism · KDE Breeze light"},{id:"pe_colored",label:"Prism PE Colored",hint:"Prism · full-color PE"},{id:"twemoji",label:"Twemoji",hint:"Emoji glyphs · the classic look"}],Ff=new Set(Of.map(i=>i.id)),Bf="twilight-icon-pack",fv={instances:"viewfolder",folder:"viewfolder",server:"server",settings:"settings",accounts:"accounts",new:"new",launch:"launch",edit:"instance-settings",copy:"copy",export:"export",delete:"delete",shortcut:"shortcut",mods:"centralmods",refresh:"refresh",console:"log",tag:"tag",star:"star",help:"help",about:"about",screenshots:"screenshots",worlds:"worlds"},Yc={kill:"⏹",download:"⬇",search:"🔍",sun:"☀",moon:"🌙",package:"📦",modrinth:"🧩",success:"✅",warning:"⚠",error:"⛔",instances:"📁",folder:"📁",server:"🌐",settings:"⚙",accounts:"👤",new:"➕",launch:"▶",edit:"✏",copy:"⧉",export:"⤓",delete:"🗑",shortcut:"🔗",mods:"📦",refresh:"🔄",console:"📜",tag:"🏷",star:"★",help:"❔",about:"ℹ",screenshots:"🖼",worlds:"🌐"};let Xa=null;function so(){if(Xa)return Xa;const i=localStorage.getItem(Bf);return Xa=Ff.has(i??"")?i:"fluent-auto",Xa}function hv(i){Ff.has(i)&&(Xa=i,localStorage.setItem(Bf,i),zf())}let Ll="";function pv(i){const e=lc(i)??String(i??"");e!==Ll&&(Ll=e,zf())}function mv(i=so()){return i!=="fluent-auto"?i:ja(Ll||"twilight-dark")?"fluent_dark":"fluent"}const Il=new Set;function zf(){for(const i of Il)i()}function vv(i){return Il.add(i),()=>Il.delete(i)}function gv(i,e=null){const t=e??so(),n=i;if(t==="twemoji"){const l=Yc[i];return l?{kind:"emoji",emoji:l,label:n}:null}const r=fv[i];if(r)return{kind:"svg",src:`${uv}icons/${mv(t)}/${r}.svg`,label:n};const a=Yc[i];return a?{kind:"emoji",emoji:a,label:n}:null}var _v=N('<img draggable="false"/>'),xv=N("<span></span>");function Wt(i,e){jt(e,!0);let t=ot(e,"name",3,""),n=ot(e,"pack",3,null),r=ot(e,"size",3,null),a=ot(e,"alt",3,""),l=ot(e,"class",3,""),o=Z(0);const c=vv(()=>v(o,s(o)+1));ac(c);const d=mt(()=>(s(o),gv(t(),n()))),u=mt(()=>r()?`${r()}px`:"1em"),h=mt(()=>a()||t());let f=Z(!1);nn(()=>{s(d)?.kind,v(f,!1)});var g=_a(),y=Mt(g);{var S=w=>{var b=_a(),T=Mt(b);Cf(T,()=>s(d).src,A=>{var D=_v();ae(()=>{je(D,"src",s(d).src),je(D,"alt",s(h)),je(D,"title",a()||void 0),xt(D,1,`shrink-0 select-none ${l()??""}`),In(D,`width:${s(u)??""};height:${s(u)??""};object-fit:contain`),je(D,"aria-hidden",a()?void 0:"true")}),kn("error",D,()=>v(f,!0)),U(A,D)}),U(w,b)},p=w=>{{let b=mt(()=>a()||void 0);Ei(w,{get emoji(){return s(d).emoji},get size(){return r()},get alt(){return s(b)},get class(){return l()}})}},m=w=>{var b=xv();ae(()=>{xt(b,1,`inline-block shrink-0 ${l()??""}`),In(b,`width:${s(u)??""};height:${s(u)??""}`)}),U(w,b)};Me(y,w=>{s(d)?.kind==="svg"&&!s(f)?w(S):s(d)?.kind==="emoji"?w(p,1):w(m,-1)})}U(i,g),Xt()}const ai=Pt({dialog:null,toasts:[]});function Gf(i){return new Promise(e=>{ai.dialog={...i,resolve:e}})}function bs(i){const e=ai.dialog;ai.dialog=null,e?.resolve?.(i)}function bv(i={}){return Gf({variant:"confirm",...i})}function yv(i={}){return Gf({variant:"prompt",...i})}let Sv=0;function Jt(i,e="info",{title:t="",duration:n=4500}={}){const r=++Sv;return ai.toasts.push({id:r,message:i,kind:e,title:t,duration:n}),ai.toasts.length>6&&ai.toasts.shift(),r}function Kc(i){const e=ai.toasts.findIndex(t=>t.id===i);e!==-1&&ai.toasts.splice(e,1)}var Mv=N('<div class="p-6 text-center text-(--step-body) text-(--fg-2)">Resolving mods and their dependencies…</div>'),wv=N('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div></div>'),Ev=N('<tr><td class="px-3 py-2 align-top"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent-1)"/></td><td> </td><td class="px-3 py-2 align-top text-(--fg-2)"> </td><td class="px-3 py-2 align-top font-mono text-[11px] text-(--fg-2)"> </td><td> </td><td class="px-3 py-2 text-right align-top text-(--fg-2)"> </td></tr>'),Tv=N('<tr><td colspan="6" class="px-3 py-6 text-center text-(--fg-2)">The queue is empty.</td></tr>'),Av=N('<table class="w-full text-left text-(--step-body)"><thead class="sticky top-0 z-10 bg-(--bg-3)"><tr class="border-b border-(--border-1) text-(--step-caption) uppercase tracking-wide text-(--fg-2)"><th class="w-[36px] px-3 py-2 font-medium"></th><th class="px-3 py-2 font-medium">Mod</th><th class="w-[130px] px-3 py-2 font-medium">Version</th><th class="w-[220px] px-3 py-2 font-medium">File</th><th class="w-[190px] px-3 py-2 font-medium">Source</th><th class="w-[80px] px-3 py-2 text-right font-medium">Size</th></tr></thead><tbody></tbody></table>'),Rv=N('<span class="text-rose-400"> </span>'),Cv=N(`<div role="presentation" class="fixed inset-0 z-[60] flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[560px] w-[880px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Confirm download</h3> <p class="text-(--step-meta) text-(--fg-2)">You're about to download the following mods — only rows with a check will be downloaded.</p></div> <button class="text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="min-w-0 truncate text-(--step-meta) text-(--fg-2)"><!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Back</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Downloads every checked file (SHA-1 verified) into this instance's mods folder"> </button></div></div></div></div>`);function Pv(i,e){jt(e,!0);let t=ot(e,"items",19,()=>[]);const n=["fabric","quilt","forge","neoforge"],r=mt(()=>{const ee=e.instance.loader_type.toLowerCase();return n.includes(ee)?ee:""});let a=Z(null),l=Z(!0),o=Z(""),c=Z(Pt({})),d=Z(!1),u=Z("");function h(ee){return ee>=1024*1024?`${(ee/1024/1024).toFixed(1)} MB`:ee>=1024?`${(ee/1024).toFixed(1)} KB`:`${ee} B`}function f(ee){return ee.required_by.length?`required by ${ee.required_by.join(", ")}`:ee.installed?"already installed":"your selection"}function g(){return s(a)?.filter(ee=>s(c)[ee.project_id]).length??0}function y(ee){v(c,{...s(c),[ee.project_id]:!s(c)[ee.project_id]},!0)}function S(ee,W){const re=window.__TAURI__?.core;return re?re.invoke(ee,W):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function p(){if(!s(a)||s(d))return;const ee=s(a).filter(W=>s(c)[W.project_id]).map(W=>({url:W.url,filename:W.filename,sha1:W.sha1}));if(ee.length){v(d,!0),v(u,"");try{const W=await S("install_modrinth_batch",{instanceId:e.instance.id,files:ee});Jt(`Downloaded ${W.length} mod file${W.length===1?"":"s"}.`,"success"),e.ondownloaded?.(W)}catch(W){v(u,String(W),!0),Jt(`Download failed: ${W}`,"error")}finally{v(d,!1)}}}_i(()=>{const ee=Ca(()=>s(d)?void 0:e.onclose?.());return S("preview_mod_download_queue",{instanceId:e.instance.id,projects:t(),gameVersion:e.instance.minecraft_version,loader:s(r)}).then(W=>{v(a,W,!0),v(c,Object.fromEntries(W.map(re=>[re.project_id,!re.installed])),!0),v(l,!1)}).catch(W=>{v(o,String(W),!0),v(l,!1)}),()=>Pa(ee)});var m=Cv(),w=R(m),b=R(w),T=_(R(b),2),A=_(b,2),D=R(A);{var C=ee=>{var W=Mv();U(ee,W)},V=ee=>{var W=wv(),re=R(W),Pe=q(re,!0);ae(()=>Y(Pe,s(o))),U(ee,W)},x=ee=>{var W=Av(),re=_(R(W));Et(re,21,()=>s(a),Pe=>Pe.project_id,(Pe,Ce)=>{var Fe=Ev(),Ve=R(Fe),qe=R(Ve),Xe=_(Ve),we=q(Xe,!0),Te=_(Xe),Re=q(Te,!0),F=_(Te),st=q(F,!0),ze=_(F),ve=q(ze,!0),Le=_(ze),Oe=q(Le,!0);ae((De,Ge)=>{xt(Fe,1,`border-b border-(--border-1)/50 ${s(Ce).installed?"bg-(--bg-3)/60":s(Ce).required_by.length?"bg-(--brand-tint)/40":""}`),Ja(qe,s(c)[s(Ce).project_id]??!1),xt(Xe,1,`px-3 py-2 align-top font-medium ${s(Ce).installed?"opacity-60":"text-(--fg-1)"}`),Y(we,s(Ce).title),Y(Re,s(Ce).version),je(F,"title",s(Ce).filename),Y(st,s(Ce).filename),xt(ze,1,`px-3 py-2 align-top text-[11px] ${s(Ce).required_by.length?"text-(--accent-1)":"text-(--fg-2)"}`),Y(ve,De),Y(Oe,Ge)},[()=>f(s(Ce)),()=>h(s(Ce).size)]),J("change",qe,()=>y(s(Ce))),U(Pe,Fe)},Pe=>{var Ce=Tv();U(Pe,Ce)}),U(ee,W)};Me(D,ee=>{s(l)?ee(C):s(o)?ee(V,1):s(a)&&ee(x,2)})}var M=_(A,2),ne=R(M),z=R(ne);{var O=ee=>{var W=Rv(),re=q(W,!0);ae(()=>Y(re,s(u))),U(ee,W)},H=ee=>{var W=Hi();ae((re,Pe)=>Y(W,`Downloading ${re??""} file${Pe??""}…`),[()=>g(),()=>g()===1?"":"s"]),U(ee,W)},X=ee=>{var W=Hi();ae(re=>Y(W,`${re??""} of ${s(a).length??""} rows will download`),[()=>g()]),U(ee,W)};Me(z,ee=>{s(u)?ee(O):s(d)?ee(H,1):s(a)&&ee(X,2)})}var ge=_(ne,2),le=R(ge),ce=_(le,2),me=q(ce,!0);ae(ee=>{T.disabled=s(d),je(ne,"title",s(u)),le.disabled=s(d),ce.disabled=ee,Y(me,s(d)?"Downloading…":"Confirm & Download")},[()=>s(d)||!s(a)||g()===0]),J("click",m,ee=>{ee.target===ee.currentTarget&&!s(d)&&e.onclose?.()}),J("click",T,()=>e.onclose?.()),J("click",le,()=>e.onclose?.()),J("click",ce,p),U(i,m),Xt()}rn(["click","change"]);var Lv=N('<label class="flex cursor-pointer items-center gap-2 text-(--step-body) capitalize"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent-1)"/> <span> </span></label>'),Zc=N("<option> </option>"),Iv=N('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div>'),Jc=N('<div class="p-6 text-center text-(--step-body) text-(--fg-2)"> </div>'),Dv=N('<span class="shrink-0 rounded bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-green-500">installed</span>'),Uv=N('<span class="shrink-0 rounded bg-(--accent-1)/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-1)">queued</span>'),kv=N('<button><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <span class="min-w-0 flex-1"><span class="flex items-center gap-2"><span class="truncate text-(--step-card) font-medium text-(--fg-1)"> </span> <!> <!></span> <span class="block truncate text-(--step-meta) text-(--fg-2)"> </span> <span class="block truncate text-[10px] text-(--fg-2)"> </span></span></button>'),Nv=N('<div class="flex flex-col gap-1.5"></div>'),Ov=N('<div class="flex h-full flex-col items-center justify-center p-6 text-center text-(--step-body) text-(--fg-2)"><!> <p class="mt-3">Select a mod to inspect it.</p></div>'),Fv=N('<div class="mt-1 flex h-8 items-center rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) text-(--fg-2)">Loading versions…</div>'),Bv=N('<select id="mods-version" class="mt-1 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"><option> </option><!></select>'),zv=N('<div class="mt-1 h-8 rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) leading-8 text-(--fg-2)">Latest compatible</div>'),Gv=N('<p class="mt-2 text-[11px] text-rose-400"> </p>'),Hv=N('<div class="mt-2 text-(--step-meta) whitespace-pre-wrap break-words text-(--fg-2)"> </div>'),Vv=N('<div class="flex items-start gap-3 border-b border-(--border-1) p-3"><img alt="" draggable="false" class="h-12 w-12 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="truncate text-(--step-card) font-semibold text-(--fg-1)"> </div> <div class="truncate text-[10px] text-(--fg-2)"> </div> <div class="text-[10px] text-(--fg-2)"> </div></div></div> <div class="border-b border-(--border-1) p-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-version">Version</label> <!></div> <div class="min-h-0 flex-1 p-3"><div class="text-(--step-body) text-(--fg-2)"> </div> <!> <!></div>',1),Wv=N('<span class="ml-1 text-[10px]"> </span>'),jv=N('<div role="presentation" class="fixed inset-0 z-50 flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[720px] w-[1180px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Browse &amp; Download Mods</h3> <p class="truncate text-(--step-meta) text-(--fg-2)"> <!></p></div> <button class="text-(--fg-2) hover:text-(--fg-1)">✕</button></div> <div class="flex min-h-0 flex-1"><aside class="flex w-[200px] shrink-0 flex-col gap-4 overflow-y-auto border-r border-(--border-1) p-3"><section><h4 class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)">Categories</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border-1) pt-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-sort">Sort</label> <select id="mods-sort" class="mt-1.5 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"></select></section></aside> <section class="flex min-w-0 flex-1 flex-col"><div class="border-b border-(--border-1) p-3"><input class="h-9 w-full rounded border border-(--border-1) bg-(--bg-3) px-3 text-(--step-card) text-(--fg-1) outline-none placeholder:text-(--fg-2) focus:border-(--accent-1)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></section> <aside class="flex w-[330px] shrink-0 flex-col overflow-y-auto border-l border-(--border-1)"><!></aside></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="text-(--step-body) text-(--fg-2)"> <!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Clear</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Stages every queued mod plus its required dependencies for confirmation"><!> Review and Confirm…</button></div></div></div></div> <!>',1);function Xv(i,e){jt(e,!0);const t=["fabric","quilt","forge","neoforge","legacy-fabric"],n=mt(()=>{const B=e.instance.loader_type.toLowerCase();return B==="legacy fabric"||B==="legacyfabric"?"legacy-fabric":B==="cleanroom"?"forge":t.includes(B)?B:""}),r=["optimization","utility","library","worldgen","accessibility","technology","adventure","decoration","mobs","equipment","food","storage","transportation","game-mechanics"],a=[{id:"relevance",label:"Relevance"},{id:"downloads",label:"Most downloaded"},{id:"updated",label:"Recently updated"},{id:"newest",label:"Newest"}];let l=Z(""),o=Z("relevance"),c=Z(Pt(new Set)),d=Z(null),u=Z(!1),h=Z(""),f=0,g=Z(Pt([]));function y(B){const $=B.title.toLowerCase().replace(/[^a-z0-9]+/g,"-");return s(g).some(be=>be.includes($))}let S=Z(null),p=Z(null),m=Z(!1),w=Z(""),b=0,T=Z(""),A=Z(Pt([])),D=Z(!1);function C(B){const $=new Set(s(c));$.has(B)?$.delete(B):$.add(B),v(c,$,!0)}function V(B){return B>=1e6?`${(B/1e6).toFixed(1)}M`:B>=1e3?`${(B/1e3).toFixed(0)}K`:String(B)}function x(B){return B.icon_url||"/logo.png"}function M(B,$){const be=window.__TAURI__?.core;return be?be.invoke(B,$):Promise.reject(new Error("Tauri backend unavailable in this preview."))}nn(()=>{const B=s(l).trim(),$=[...s(c)],be=s(o),Ue=++f,k=setTimeout(()=>{v(u,!0),v(h,""),M("search_modrinth_mods",{query:B,gameVersion:e.instance.minecraft_version,loader:s(n),categories:$,index:be}).then(Ae=>{Ue===f&&(v(d,Ae,!0),v(u,!1))}).catch(Ae=>{Ue===f&&(v(h,String(Ae),!0),v(u,!1))})},350);return()=>clearTimeout(k)});async function ne(B){if(s(S)?.project_id===B.project_id)return;v(S,B,!0),v(p,null),v(w,""),v(T,"");const $=++b;v(m,!0);try{const be=await M("get_modrinth_project_details",{projectId:B.project_id,gameVersion:e.instance.minecraft_version,loader:s(n)});$===b&&v(p,be,!0)}catch(be){$===b&&v(w,String(be),!0)}finally{$===b&&v(m,!1)}}function z(B){return s(A).some($=>$.project_id===B)}function O(){s(A).length&&v(D,!0)}_i(()=>{const B=Ca(()=>e.onclose?.());return M("list_instance_mods",{instanceId:e.instance.id}).then($=>v(g,$.map(be=>be.filename.toLowerCase()),!0)).catch(()=>{}),()=>Pa(B)});var H=jv(),X=Mt(H),ge=R(X),le=R(ge),ce=R(le),me=_(R(ce),2),ee=R(me),W=_(ee);{var re=B=>{var $=Hi();ae(be=>Y($,`· ${be??""}`),[()=>s(n)[0].toUpperCase()+s(n).slice(1)]),U(B,$)};Me(W,B=>{s(n)&&B(re)})}var Pe=_(ce,2),Ce=_(le,2),Fe=R(Ce),Ve=R(Fe),qe=_(R(Ve),2);Et(qe,20,()=>r,B=>B,(B,$)=>{var be=Lv(),Ue=R(be),k=_(Ue,2),Ae=q(k,!0);ae((ie,Ee)=>{Ja(Ue,ie),Y(Ae,Ee)},[()=>s(c).has($),()=>$.replace("-"," ")]),J("change",Ue,()=>C($)),U(B,be)});var Xe=_(Ve,2),we=_(R(Xe),2);Et(we,21,()=>a,B=>B.id,(B,$)=>{var be=Zc(),Ue=q(be,!0),k={};ae(()=>{Y(Ue,s($).label),k!==(k=s($).id)&&(be.value=(be.__value=k)??"")}),U(B,be)}),xa(we);var Te=_(Fe,2),Re=R(Te),F=R(Re),st=_(Re,2),ze=R(st);{var ve=B=>{var $=Iv(),be=q($,!0);ae(()=>Y(be,s(h))),U(B,$)};Me(ze,B=>{s(h)&&B(ve)})}var Le=_(ze,2);{var Oe=B=>{var $=Jc(),be=q($,!0);ae(()=>Y(be,s(u)?"Searching Modrinth…":"Type to search.")),U(B,$)},De=B=>{var $=Jc(),be=q($);ae(Ue=>Y(be,`No mods for MC ${e.instance.minecraft_version??""}${s(n)?` + ${s(n)}`:""} match
              “${Ue??""}”.`),[()=>s(l).trim()]),U(B,$)},Ge=B=>{var $=Nv();Et($,21,()=>s(d),be=>be.project_id,(be,Ue)=>{var k=kv(),Ae=R(k),ie=_(Ae,2),Ee=R(ie),Ie=R(Ee),tt=q(Ie,!0),Qe=_(Ie,2);{var Je=Rt=>{var Gt=Dv();U(Rt,Gt)},dt=mt(()=>y(s(Ue)));Me(Qe,Rt=>{s(dt)&&Rt(Je)})}var ht=_(Qe,2);{var ut=Rt=>{var Gt=Uv();U(Rt,Gt)},vt=mt(()=>z(s(Ue).project_id));Me(ht,Rt=>{s(vt)&&Rt(ut)})}var rt=_(Ee,2),St=q(rt,!0),Ut=_(rt,2),It=q(Ut);ae((Rt,Gt)=>{xt(k,1,`flex items-center gap-3 rounded border px-3 py-2 text-left ${s(S)?.project_id===s(Ue).project_id?"border-(--accent-1) bg-(--brand-tint)":"border-(--border-1) bg-(--bg-3) hover:border-(--accent-1)/60"}`),je(Ae,"src",Rt),je(Ie,"title",s(Ue).title),Y(tt,s(Ue).title),je(rt,"title",s(Ue).description),Y(St,s(Ue).description),Y(It,`by ${(s(Ue).author||"unknown")??""} · ${Gt??""} downloads`)},[()=>x(s(Ue)),()=>V(s(Ue).downloads)]),J("click",k,()=>ne(s(Ue))),kn("error",Ae,Rt=>{Rt.currentTarget.dataset.f||(Rt.currentTarget.dataset.f="1",Rt.currentTarget.src="/logo.png")}),U(be,k)}),U(B,$)};Me(Le,B=>{s(d)?s(d).length===0&&!s(u)?B(De,1):B(Ge,-1):B(Oe)})}var He=_(Te,2),it=R(He);{var nt=B=>{var $=Ov(),be=R($);Wt(be,{name:"modrinth",size:28}),U(B,$)},I=B=>{var $=Vv(),be=Mt($),Ue=R(be),k=_(Ue,2),Ae=R(k),ie=q(Ae,!0),Ee=_(Ae,2),Ie=q(Ee),tt=_(Ee,2),Qe=q(tt),Je=_(be,2),dt=_(R(Je),2);{var ht=pt=>{var Ye=Fv();U(pt,Ye)},ut=pt=>{var Ye=Bv(),_t=R(Ye),P=q(_t);_t.value=_t.__value="";var se=_(_t);Et(se,17,()=>s(p).versions,_e=>_e.id,(_e,oe)=>{var xe=Zc(),We=q(xe),Be={};ae(()=>{Y(We,`${s(oe).version??""}${s(oe).version_type&&s(oe).version_type!=="release"?` (${s(oe).version_type})`:""}`),Be!==(Be=s(oe).id)&&(xe.value=(xe.__value=Be)??"")}),U(_e,xe)}),xa(Ye),ae(()=>Y(P,`Latest (${s(p).versions[0]?.version??""})`)),ba(Ye,()=>s(T),_e=>v(T,_e)),U(pt,Ye)},vt=pt=>{var Ye=zv();U(pt,Ye)};Me(dt,pt=>{s(m)?pt(ht):s(p)?.versions?.length?pt(ut,1):pt(vt,-1)})}var rt=_(Je,2),St=R(rt),Ut=q(St,!0),It=_(St,2);{var Rt=pt=>{var Ye=Gv(),_t=q(Ye,!0);ae(()=>Y(_t,s(w))),U(pt,Ye)};Me(It,pt=>{s(w)&&pt(Rt)})}var Gt=_(It,2);{var en=pt=>{var Ye=Hv(),_t=q(Ye,!0);ae(()=>Y(_t,s(p).body)),U(pt,Ye)};Me(Gt,pt=>{s(p)?.body&&pt(en)})}ae((pt,Ye)=>{je(Ue,"src",pt),je(Ae,"title",s(S).title),Y(ie,s(S).title),Y(Ie,`by ${(s(S).author||"unknown")??""}`),Y(Qe,`${Ye??""} downloads`),Y(Ut,s(S).description)},[()=>x(s(S)),()=>V(s(S).downloads)]),kn("error",Ue,pt=>{pt.currentTarget.dataset.f||(pt.currentTarget.dataset.f="1",pt.currentTarget.src="/logo.png")}),U(B,$)};Me(it,B=>{s(S)?B(I,-1):B(nt)})}var E=_(Ce,2),K=R(E),Se=R(K),j=_(Se);{var fe=B=>{var $=Wv(),be=q($);ae(Ue=>Y(be,`(${Ue??""})`),[()=>s(A).map(Ue=>Ue.title).join(", ")]),U(B,$)};Me(j,B=>{s(A).length&&B(fe)})}var de=_(K,2),pe=R(de),Q=_(pe,2),L=R(Q);Wt(L,{name:"download",size:13});var G=_(X,2);{var he=B=>{Pv(B,{get instance(){return e.instance},get items(){return s(A)},onclose:()=>v(D,!1),ondownloaded:$=>{v(D,!1),v(A,[],!0),e.oninstalled?.($)}})};Me(G,B=>{s(D)&&B(he)})}ae(()=>{Y(ee,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `),Y(Se,`${s(A).length===0?"No mods selected":`${s(A).length} mod${s(A).length===1?"":"s"} selected`} `),pe.disabled=!s(A).length,Q.disabled=!s(A).length}),J("click",X,B=>{B.target===B.currentTarget&&e.onclose?.()}),J("click",Pe,()=>e.onclose?.()),ba(we,()=>s(o),B=>v(o,B)),Ot(F,()=>s(l),B=>v(l,B)),J("click",pe,()=>v(A,[],!0)),J("click",Q,O),U(i,H),Xt()}rn(["click","change"]);var qv=N('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Yv=N('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Kv=N('<div class="mt-4 rounded border border-amber-500/30 bg-amber-500/10 p-3" role="status" aria-live="polite"><p class="text-[12px] text-amber-400"><strong> </strong> </p> <button class="mt-2 rounded border border-amber-500/40 px-3 py-1.5 text-[12px] font-medium text-amber-400 hover:bg-amber-500/20 disabled:opacity-40"> </button></div>'),Zv=N('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),Qc=N('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),Fo=N('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Jv=N(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <!> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),Qv=N('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),$v=N('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),eg=N('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),tg=N('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),ng=N('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),ig=N('<p class="mt-2 text-[11px] text-(--fg-2)"> </p>'),rg=N('<button type="button" class="rounded px-2.5 py-1.5 text-[11px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)">Reset</button>'),ag=N('<p role="alert" class="mt-2 text-[11px] text-red-400"> </p>'),sg=N(`<div role="alert" class="mt-4 rounded border border-red-500/40 bg-red-500/10 p-3 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
              it works — it is prone to crashes and only a limited subset of Forge mods support it.</p></div>`),og=N('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance name</div> <p class="mt-1 text-[11px] text-(--text-muted)">The display name across the grid and context panel; the folder id stays put.</p> <div class="mt-3 flex items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-2) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)" aria-label="Instance name"/> <button type="button" class="rounded bg-(--accent-1) px-3 py-1.5 font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40">Rename</button></div> <!> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance icon</div> <p class="mt-1 text-[11px] text-(--text-muted)">Pick a bundled launcher icon, a Twemoji, or a custom image.</p> <div class="mt-3 flex items-center gap-3"><span class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded border border-(--border) bg-(--accent)/10"><img alt="" draggable="false" class="h-full w-full object-cover"/></span> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-[12px] font-medium text-(--accent) hover:bg-(--accent)/25">Change icon…</button> <!></div> <!></div> <!> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, loader switching and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p>',1),lg=N('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!> <!></div>');function cg(i,e){jt(e,!0);let t=ot(e,"instance",7),n=ot(e,"storage",3,null),r=ot(e,"blindMode",3,!1),a=ot(e,"deafMode",3,!1);const l=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let o=Z("mods"),c=Z(Pt([])),d=Z(!1),u=Z(""),h=Z(""),f=Z(!1),g=Z(!1),y=Z(Pt(t().icon_key??"")),S=Z(""),p=Z(Pt(t().name)),m=Z("");async function w(){const j=s(p).trim();if(!(!j||j===t().name)){v(m,"");try{const fe=await window.__TAURI__.core.invoke("rename_instance",{instanceId:t().id,newName:j});t().name=fe.name,v(p,fe.name,!0),v(m,`Renamed to ${fe.name}.`)}catch(fe){v(m,String(fe),!0)}}}function b(){const j=go(s(y));return j||(t().icon_path?ne(t().icon_path):"/logo.png")}async function T(j){v(S,"");try{await window.__TAURI__.core.invoke("set_instance_icon_key",{instanceId:t().id,iconKey:j}),v(y,j,!0),t().icon_key=j,t().icon_path=null}catch(fe){v(S,String(fe),!0)}}async function A(){const j=window.__TAURI__?.dialog?.open;if(!j)throw new Error("Image picker unavailable in this build.");const fe=await j({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});if(!fe)return null;const de=await window.__TAURI__.core.invoke("set_instance_icon",{instanceId:t().id,imagePath:String(fe)});return v(y,""),t().icon_key=null,t().icon_path=de,de}let D=Z(Pt([])),C=Z(Pt([])),V=Z(!1),x=Z("");function M(...j){return[n()?n().instances_dir.replace(/\\/g,"/"):"",t().id,"minecraft",...j].filter(Boolean).join("/")}function ne(j){const fe=window.__TAURI__?.core?.convertFileSrc;return fe?fe(j):j}function z(j){return j>=1024*1024?`${(j/1024/1024).toFixed(1)} MB`:j>=1024?`${(j/1024).toFixed(1)} KB`:`${j} B`}function O(j){return j?new Date(j*1e3).toLocaleString():""}function H(){const j=s(h).trim().toLowerCase();return j?s(c).filter(fe=>fe.display_name.toLowerCase().includes(j)||fe.filename.toLowerCase().includes(j)):s(c)}async function X(){v(d,!0);try{v(c,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:t().id}),!0),v(u,"")}catch(j){v(u,String(j),!0)}finally{v(d,!1)}}const ge={"minecraft-access":"Minecraft Access",echosight:"EchoSight"},le=mt(()=>[...r()&&!s(c).some(j=>j.filename.toLowerCase().includes("minecraft-access"))?["minecraft-access"]:[],...a()&&!s(c).some(j=>j.filename.toLowerCase().includes("echosight"))?["echosight"]:[]]);let ce=Z(!1);async function me(){v(ce,!0);try{for(const j of s(le))await window.__TAURI__.core.invoke("install_mod_with_deps",{instanceId:t().id,projectId:j,gameVersion:t().minecraft_version,loader:t().loader_type.toLowerCase()});v(u,"Accessibility mods installed.")}catch(j){v(u,String(j),!0)}finally{v(ce,!1)}await X()}async function ee(j){v(d,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:t().id,filename:j.filename,enable:!j.is_enabled}),s(u)&&v(u,"")}catch(fe){v(u,String(fe),!0)}finally{v(d,!1)}await X()}async function W(j){v(d,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:t().id,filename:j.filename}),v(u,"")}catch(fe){v(u,String(fe),!0)}finally{v(d,!1)}await X()}async function re(){const j=window.__TAURI__?.dialog?.open;if(!j){v(u,"File picker unavailable in this build.");return}let fe;try{fe=await j({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(pe){v(u,String(pe),!0);return}const de=fe?[].concat(fe):[];if(de.length){v(d,!0);try{for(const pe of de)await window.__TAURI__.core.invoke("import_mod",{instanceId:t().id,jarPath:pe});v(u,"")}catch(pe){v(u,String(pe),!0)}finally{v(d,!1)}await X()}}async function Pe(j){v(V,!0);try{const fe=await window.__TAURI__.core.invoke(j,{instanceId:t().id});v(j==="list_screenshots"?D:C,fe,!0),v(x,"")}catch(fe){v(x,String(fe),!0)}finally{v(V,!1)}}function Ce(j){window.__TAURI__.core.invoke("open_path",{path:j}).catch(fe=>v(x,String(fe),!0))}function Fe(j){Ce(M("screenshots",j))}_i(()=>{X(),Pe("list_screenshots"),Pe("list_logs")});var Ve=lg(),qe=R(Ve),Xe=R(qe),we=_(Xe,2),Te=R(we),Re=q(Te,!0),F=_(Te,2),st=q(F),ze=_(we,2);Et(ze,21,()=>l,j=>j.id,(j,fe)=>{var de=qv(),pe=R(de),Q=R(pe);Ei(Q,{get emoji(){return s(fe).icon},size:15});var L=_(pe,2),G=q(L,!0);ae(()=>{xt(de,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${s(o)===s(fe).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(de,"aria-current",s(o)===s(fe).id?"true":void 0),Y(G,s(fe).label)}),J("click",de,()=>v(o,s(fe).id,!0)),U(j,de)});var ve=_(qe,2),Le=R(ve),Oe=R(Le);{var De=j=>{var fe=Yv(),de=_(Mt(fe),4),pe=R(de),Q=q(pe),L=_(pe,2),G=q(L),he=_(L,2),B=q(he);ae($=>{Y(Q,`Minecraft ${t().minecraft_version??""}`),Y(G,`Loader: ${t().loader_type??""}`),Y(B,`Last played: ${$??""}`)},[()=>t().last_played?new Date(t().last_played*1e3).toLocaleString():"never"]),U(j,fe)},Ge=j=>{var fe=Jv(),de=_(Mt(fe),4);{var pe=Qe=>{var Je=Kv(),dt=R(Je),ht=R(dt),ut=q(ht,!0),vt=_(ht),rt=_(dt,2),St=q(rt,!0);ae(Ut=>{Y(ut,Ut),Y(vt,` ${s(le).length>1?"are":"is"} not installed yet — recommended for your
              accessibility profile. Required dependencies (e.g. Fabric API) install automatically.`),rt.disabled=s(d)||s(ce),Y(St,s(ce)?"Installing…":"Install Recommended Accessibility Mods")},[()=>s(le).map(Ut=>ge[Ut]??Ut).join(" and ")]),J("click",rt,me),U(Qe,Je)};Me(de,Qe=>{(r()||a())&&(t().loader_type==="Fabric"||t().loader_type==="Quilt")&&s(le).length&&Qe(pe)})}var Q=_(de,2),L=R(Q),G=q(L),he=_(L,2),B=_(Q,2),$=_(B,2),be=_($,2),Ue=R(be);Et(Ue,21,H,Qe=>Qe.filename,(Qe,Je)=>{var dt=Zv(),ht=R(dt),ut=R(ht);let vt;var rt=q(ut,!0),St=_(ut,2),Ut=q(St),It=_(ht),Rt=q(It),Gt=_(It),en=q(Gt);ae(pt=>{vt=xt(ut,1,"truncate",null,vt,{"opacity-50":!s(Je).is_enabled}),Y(rt,s(Je).display_name),Y(Ut,`${s(Je).filename??""} · ${pt??""}`),xt(Rt,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${s(Je).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),je(Rt,"title",s(Je).is_enabled?"Disable":"Enable"),Rt.disabled=s(d),je(en,"title",`Delete ${s(Je).display_name??""}`),en.disabled=s(d)},[()=>z(s(Je).file_size)]),J("click",Rt,()=>ee(s(Je))),J("click",en,()=>W(s(Je))),U(Qe,dt)},Qe=>{var Je=Qc(),dt=R(Je),ht=R(dt);{var ut=rt=>{var St=Hi("Loading mods…");U(rt,St)},vt=rt=>{var St=Hi("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");U(rt,St)};Me(ht,rt=>{s(d)?rt(ut):rt(vt,-1)})}U(Qe,Je)});var k=_(be,2);{var Ae=Qe=>{var Je=Fo(),dt=q(Je,!0);ae(()=>Y(dt,s(u))),U(Qe,Je)};Me(k,Qe=>{s(u)&&Qe(Ae)})}var ie=_(k,2),Ee=R(ie),Ie=_(Ee,2),tt=R(Ie);Ei(tt,{emoji:"📂"}),ae(()=>{Y(G,`Installed (${s(c).length??""})`),he.disabled=s(d),Ee.disabled=s(d),Ie.disabled=!n(),je(Ie,"title",n()?"Opens the instance mods folder":"Storage unknown")}),J("click",he,X),Ot(B,()=>s(h),Qe=>v(h,Qe)),J("click",$,()=>v(f,!0)),J("click",Ee,re),J("click",Ie,()=>Ce(M("mods"))),U(j,fe)},He=j=>{var fe=eg(),de=_(Mt(fe),4);Et(de,21,()=>s(D),he=>he.name,(he,B)=>{var $=Qv(),be=R($),Ue=_(be,2),k=q(Ue,!0);ae((Ae,ie,Ee)=>{je($,"title",`${s(B).name??""} · ${Ae??""} · ${ie??""}`),je(be,"src",Ee),je(be,"alt",s(B).name),je(Ue,"title",s(B).name),Y(k,s(B).name)},[()=>z(s(B).size),()=>O(s(B).modified),()=>ne(M("screenshots",s(B).name))]),J("click",$,()=>Fe(s(B).name)),J("keydown",$,Ae=>{(Ae.key==="Enter"||Ae.key===" ")&&(Ae.preventDefault(),Fe(s(B).name))}),U(he,$)},he=>{var B=$v(),$=R(B);{var be=k=>{var Ae=Hi("Loading screenshots…");U(k,Ae)},Ue=k=>{var Ae=Hi("No screenshots yet — press F2 in game to capture one.");U(k,Ae)};Me($,k=>{s(V)?k(be):k(Ue,-1)})}U(he,B)});var pe=_(de,2);{var Q=he=>{var B=Fo(),$=q(B,!0);ae(()=>Y($,s(x))),U(he,B)};Me(pe,he=>{s(x)&&he(Q)})}var L=_(pe,2),G=R(L);Ei(G,{emoji:"📂"}),J("click",L,()=>Ce(M("screenshots"))),U(j,fe)},it=j=>{var fe=ng(),de=_(Mt(fe),4),pe=R(de);Et(pe,21,()=>s(C),be=>be.name,(be,Ue)=>{var k=tg(),Ae=R(k),ie=R(Ae),Ee=q(ie,!0),Ie=_(ie,2),tt=q(Ie),Qe=_(Ae),Je=q(Qe);ae((dt,ht)=>{je(ie,"title",s(Ue).name),Y(Ee,s(Ue).name),Y(tt,`${dt??""} · ${ht??""}`)},[()=>z(s(Ue).size),()=>O(s(Ue).modified)]),J("click",Je,()=>Ce(M("logs",s(Ue).name))),U(be,k)},be=>{var Ue=Qc(),k=R(Ue),Ae=R(k);{var ie=Ie=>{var tt=Hi("Loading logs…");U(Ie,tt)},Ee=Ie=>{var tt=Hi("No log files yet — logs appear after the first launch.");U(Ie,tt)};Me(Ae,Ie=>{s(V)?Ie(ie):Ie(Ee,-1)})}U(be,Ue)});var Q=_(de,2);{var L=be=>{var Ue=Fo(),k=q(Ue,!0);ae(()=>Y(k,s(x))),U(be,Ue)};Me(Q,be=>{s(x)&&be(L)})}var G=_(Q,2),he=R(G),B=_(he,2),$=R(B);Ei($,{emoji:"📂"}),J("click",he,()=>e.onopenconsole?.()),J("click",B,()=>Ce(M("logs"))),U(j,fe)},nt=j=>{var fe=og(),de=_(Mt(fe),4),pe=_(R(de),4),Q=R(pe),L=_(Q,2),G=_(pe,2);{var he=rt=>{var St=ig(),Ut=q(St,!0);ae(()=>Y(Ut,s(m))),U(rt,St)};Me(G,rt=>{s(m)&&rt(he)})}var B=_(G,2),$=R(B),be=q($),Ue=_($,2),k=q(Ue),Ae=_(de,2),ie=_(R(Ae),4),Ee=R(ie),Ie=q(Ee),tt=_(Ee,2),Qe=_(tt,2);{var Je=rt=>{var St=rg();J("click",St,()=>T("")),U(rt,St)};Me(Qe,rt=>{s(y)&&rt(Je)})}var dt=_(ie,2);{var ht=rt=>{var St=ag(),Ut=q(St,!0);ae(()=>Y(Ut,s(S))),U(rt,St)};Me(dt,rt=>{s(S)&&rt(ht)})}var ut=_(Ae,2);{var vt=rt=>{var St=sg();U(rt,St)};Me(ut,rt=>{t().loader_type==="Cleanroom"&&rt(vt)})}ae((rt,St,Ut,It,Rt)=>{L.disabled=rt,je(B,"title",St),Y(be,`Game folder: ${Ut??""}`),Y(k,`Mods folder: ${It??""}`),je(Ie,"src",Rt)},[()=>!s(p).trim()||s(p).trim()===t().name,()=>M(),()=>M(),()=>M("mods"),()=>b()]),J("keydown",Q,rt=>{rt.key==="Enter"&&w()}),Ot(Q,()=>s(p),rt=>v(p,rt)),J("click",L,w),J("click",tt,()=>v(g,!0)),U(j,fe)};Me(Oe,j=>{s(o)==="components"?j(De):s(o)==="mods"?j(Ge,1):s(o)==="screenshots"?j(He,2):s(o)==="logs"?j(it,3):j(nt,-1)})}var I=_(ve,2);{var E=j=>{{let fe=mt(()=>s(y)?"":b());Uf(j,{get currentKey(){return s(y)},get currentPath(){return s(fe)},onpick:de=>{T(de),v(g,!1)},oncustom:A,onclose:()=>v(g,!1)})}};Me(I,j=>{s(g)&&j(E)})}var K=_(I,2);{var Se=j=>{Xv(j,{get instance(){return t()},onclose:()=>v(f,!1),oninstalled:()=>X()})};Me(K,j=>{s(f)&&j(Se)})}ae(()=>{je(Te,"title",t().name),Y(Re,t().name),Y(st,`${t().minecraft_version??""} · ${t().loader_type??""}`)}),J("click",Xe,function(...j){e.onback?.apply(this,j)}),U(i,Ve),Xt()}rn(["click","keydown"]);var dg=N('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),ug=N('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),fg=N('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),hg=N('<p class="mt-3 text-[12px] text-red-400"> </p>'),pg=N(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),mg=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function vg(i,e){jt(e,!0);let t=Z(null),n=Z(""),r=Z(""),a=Z(!1),l=Z("");function o(w){return w>=1024*1024?`${(w/1024/1024).toFixed(1)} MB`:w>=1024?`${(w/1024).toFixed(0)} KB`:`${w} B`}function c(){return!s(t)||!s(t).loader?"Vanilla":s(t).loader[0].toUpperCase()+s(t).loader.slice(1)+(s(t).loader_version?` ${s(t).loader_version}`:" (latest stable)")}_i(async()=>{const w=Ca(()=>e.onclose?.());try{v(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),v(r,s(t).name,!0)}catch(b){v(n,String(b),!0)}return()=>Pa(w)});async function d(){if(!s(a)){v(a,!0),v(l,"");try{const w=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:s(r).trim()});e.oninstalled?.(w)}catch(w){v(l,String(w),!0)}finally{v(a,!1)}}}var u=mg(),h=R(u),f=R(h),g=_(R(f),2),y=_(f,2);{var S=w=>{var b=dg(),T=R(b),A=q(T,!0),D=_(T,2),C=q(D,!0);ae(()=>{Y(A,s(n)),je(D,"title",e.path),Y(C,e.path)}),U(w,b)},p=w=>{var b=ug();U(w,b)},m=w=>{var b=pg(),T=Mt(b),A=R(T),D=R(A),C=q(D,!0),V=_(D,2);{var x=Ve=>{var qe=fg(),Xe=q(qe,!0);ae(()=>Y(Xe,s(t).summary)),U(Ve,qe)};Me(V,Ve=>{s(t).summary&&Ve(x)})}var M=_(V,2),ne=R(M),z=q(ne),O=_(ne,2),H=q(O,!0),X=_(O,2),ge=q(X),le=_(X,2),ce=q(le,!0),me=_(A,4),ee=_(me,2);{var W=Ve=>{var qe=hg(),Xe=q(qe,!0);ae(()=>Y(Xe,s(l))),U(Ve,qe)};Me(ee,Ve=>{s(l)&&Ve(W)})}var re=_(T,2),Pe=R(re),Ce=_(Pe,2),Fe=q(Ce,!0);ae((Ve,qe,Xe)=>{je(D,"title",s(t).name),Y(C,s(t).name),Y(z,`MC ${(s(t).game_version||"?")??""}`),Y(H,Ve),je(X,"title",`${s(t).download_count??""} downloaded, ${s(t).override_count??""} overrides extracted`),Y(ge,`${s(t).file_count??""} files`),Y(ce,qe),Ce.disabled=Xe,Y(Fe,s(a)?"Installing…":"Install Modpack")},[()=>c(),()=>o(s(t).archive_size),()=>s(a)||!s(r).trim()]),Ot(me,()=>s(r),Ve=>v(r,Ve)),J("click",Pe,()=>e.onclose?.()),J("click",Ce,d),U(w,b)};Me(y,w=>{s(n)?w(S):s(t)?w(m,-1):w(p,1)})}J("click",u,w=>{w.target===w.currentTarget&&e.onclose?.()}),J("click",g,()=>e.onclose?.()),U(i,u),Xt()}rn(["click"]);var gg=N('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),_g=N('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),$c=N("<option> </option>"),xg=N('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),bg=N('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),yg=N('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),Sg=N('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),Mg=N('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),wg=N('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),Eg=N('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Tg=N('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Ag=N('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),Rg=N('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),Cg=N('<p class="mt-1.5 font-medium">Cleanroom only runs Minecraft 1.12.2 — select that version to continue.</p>'),Pg=N(`<div role="alert" class="mt-2 rounded border border-red-500/40 bg-red-500/10 p-2.5 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
                it works — it is prone to crashes and only a limited subset of Forge mods support it.</p> <!></div>`),Lg=N('<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400"> <strong>Fabric</strong>.</div>'),Ig=N(`<p role="status" class="mt-2 rounded border border-amber-500/20 bg-amber-500/5 p-2 text-[11px] text-amber-400"> <strong>Legacy Fabric</strong> is
              the recommended loader for it.</p>`),Dg=N(`<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400">Blind Mode Notice: Vanilla Minecraft's built-in Narrator lacks 3D world navigation and
              block inspection. We strongly recommend selecting <strong>Fabric</strong> or <strong>Quilt</strong> with Minecraft Access.</div>`),Ug=N('<label class="flex cursor-pointer items-start gap-2 text-[12px]"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent)"/> <span><span> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span></label>'),kg=N('<section class="mt-3 border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Accessibility mods</h4> <p class="mt-0.5 text-[10px] text-(--text-muted)"> </p> <div class="mt-1.5 flex flex-col gap-1.5"></div></section>'),Ng=N('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),Og=N('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Fg=N('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),Bg=N('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),zg=N('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),Gg=N('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),Hg=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!> <!> <!> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div> <!>',1);function Vg(i,e){jt(e,!0);let t=ot(e,"groups",19,()=>[]),n=ot(e,"blindMode",3,!1),r=ot(e,"deafMode",3,!1);const a=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],l=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"cleanroom",label:"Cleanroom"},{id:"fabric",label:"Fabric"},{id:"legacyfabric",label:"Legacy Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],o=["","fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],c=["fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],d="1.13.2";function u(ye,ke){const $e=ct=>String(ct??"").split(".").map(zt=>parseInt(zt,10)||0),yt=$e(ye),lt=$e(ke);for(let ct=0;ct<Math.max(yt.length,lt.length);ct+=1){const zt=yt[ct]??0,At=lt[ct]??0;if(zt!==At)return zt<At}return!0}const h=mt(()=>!!s(b)&&u(s(b),d)),f=mt(()=>s(x)==="cleanroom"&&s(b)!=="1.12.2"),g="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let y=Z(null),S=Z(!0),p=Z(""),m=Z(""),w=Z(Pt(new Set(["release"]))),b=Z(""),T=Z(""),A=Z(""),D=Z(""),C=Z(""),V=Z(!1),x=Z(""),M=Z(""),ne=Z(Pt([])),z=Z("idle"),O=0,H=Z(!1),X=Z("");const ge=[{id:"minecraft-access",label:"Minecraft Access",hint:"Core: screen reader & 3D spatial navigation"},{id:"sound-physics-remastered",label:"Sound Physics Remastered",hint:"Optional: spatial acoustics & directional echoes"}],le=[{id:"echosight",label:"EchoSight",hint:"Directional sound radar & priority subtitles"},{id:"subtitles-visualizer",label:"Subtitles Visualizer",hint:"In-world directional subtitle markers"},{id:"visible-sound",label:"Visible Sound",hint:"In-world block/entity sound highlights"},{id:"soundsight",label:"SoundSight",hint:"Visual threat ring & enhanced subtitles"}];let ce=Z(Pt(new Set(["minecraft-access"])));const me=mt(()=>[...n()?ge:[],...r()?le:[]]);nn(()=>{v(ce,new Set(n()&&(s(x)==="fabric"||s(x)==="quilt")?["minecraft-access"]:[]),!0)});function ee(ye){const ke=new Set(s(ce));ke.has(ye)?ke.delete(ye):ke.add(ye),v(ce,ke,!0)}function W(ye,ke){const $e=window.__TAURI__?.core;return $e?$e.invoke(ye,ke):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const re=mt(()=>{const ye=s(y)?.versions??[],ke=s(m).trim().toLowerCase();return ye.filter($e=>s(w).has($e.version_type)&&(!ke||$e.id.toLowerCase().includes(ke)))}),Pe=mt(()=>!o.includes(s(x))),Ce=mt(()=>c.includes(s(x))),Fe=mt(()=>!!s(b)&&!s(Pe)&&!s(f)&&!s(H)&&!(s(Ce)&&s(z)==="loading"));function Ve(ye){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[ye]??ye}function qe(ye){if(!ye)return"—";const ke=new Date(ye);if(Number.isNaN(ke.getTime()))return String(ye).slice(0,10);const $e=yt=>String(yt).padStart(2,"0");return`${$e(ke.getDate())}/${$e(ke.getMonth()+1)}/${ke.getFullYear()}`}function Xe(ye){const ke=new Set(s(w));ke.has(ye)?ke.delete(ye):ke.add(ye),v(w,ke,!0)}function we(){const ye=go(s(C));if(ye)return ye;const ke=window.__TAURI__?.core?.convertFileSrc;return s(D)&&ke?ke(s(D)):null}async function Te(){const ye=window.__TAURI__?.dialog?.open;if(!ye){v(X,"Image picker unavailable in this build.");return}try{const ke=await ye({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});return ke&&(v(C,""),v(D,String(ke),!0),v(X,"")),ke?String(ke):null}catch(ke){return v(X,String(ke),!0),null}}async function Re(){if(!s(Ce)||!s(b))return;const ye=++O;v(z,"loading");try{const ke=await W("fetch_loader_versions",{loader:s(x),gameVersion:s(b)});if(ye!==O)return;v(ne,ke,!0),v(M,ke.find($e=>$e.stable)?.version??ke[0]?.version??"",!0),v(z,ke.length?"idle":"error",!0)}catch{if(ye!==O)return;v(ne,[],!0),v(M,""),v(z,"error")}}async function F(ye){v(b,ye,!0),!s(x)&&u(ye,d)&&v(x,"legacyfabric"),s(Ce)&&await Re()}async function st(ye){v(x,ye,!0),v(M,""),v(ne,[],!0),v(z,"idle"),s(Ce)&&await Re()}async function ze(){v(S,!0),v(p,"");try{v(y,await W("fetch_vanilla_versions"),!0)}catch(ye){v(p,String(ye),!0)}finally{v(S,!1)}}async function ve(){if(!s(Fe))return;v(H,!0),v(X,"");const ye=s(b),ke=s(T).trim()||ye;try{const $e=await W("create_instance",{name:ke,version:ye,loader:s(x)||null,loaderVersion:s(M).trim()||null});let yt="";if(s(C))try{await W("set_instance_icon_key",{instanceId:$e.id,iconKey:s(C)})}catch(lt){yt=`Instance created, but the icon could not be applied: ${lt}`}else if(s(D))try{await W("set_instance_icon",{instanceId:$e.id,imagePath:s(D)})}catch(lt){yt=`Instance created, but the icon could not be applied: ${lt}`}if(s(A).trim())try{await W("set_instance_group",{instanceId:$e.id,group:s(A).trim()})}catch(lt){yt=yt?`${yt} The group could not be set: ${lt}`:`Instance created, but the group could not be set: ${lt}`}for(const lt of s(ce))try{await W("install_mod_with_deps",{instanceId:$e.id,projectId:lt,gameVersion:ye,loader:s(x)})}catch(ct){yt=yt?`${yt} ${lt} could not be installed: ${ct}`:`Instance created, but ${lt} could not be installed: ${ct}`}e.oncreated?.($e,yt)}catch($e){v(X,String($e),!0)}finally{v(H,!1)}}function Le(){window.__TAURI__?.core?.invoke("open_path",{path:g}).catch(ye=>v(X,String(ye),!0))}_i(()=>{const ye=Ca(()=>e.onclose?.());return ze(),()=>Pa(ye)});var Oe=Hg(),De=Mt(Oe),Ge=R(De),He=R(Ge),it=R(He),nt=R(it);{var I=ye=>{var ke=gg(),$e=Mt(ke);ae(yt=>je($e,"src",yt),[()=>we()]),U(ye,ke)},E=mt(()=>we()),K=ye=>{var ke=_g();U(ye,ke)};Me(nt,ye=>{s(E)?ye(I):ye(K,-1)})}var Se=_(it,2),j=R(Se),fe=_(j,2),de=_(R(fe),2),pe=R(de);pe.value=pe.__value="";var Q=_(pe);Et(Q,16,t,ye=>ye,(ye,ke)=>{var $e=$c(),yt=q($e,!0),lt={};ae(()=>{Y(yt,ke),lt!==(lt=ke)&&($e.value=($e.__value=lt)??"")}),U(ye,$e)}),xa(de);var L=_(Se,2),G=_(He,2),he=R(G),B=R(he),$=R(B);{var be=ye=>{var ke=xg();U(ye,ke)},Ue=ye=>{var ke=bg(),$e=R(ke),yt=q($e,!0),lt=_($e,2);ae(()=>Y(yt,s(p))),J("click",lt,ze),U(ye,ke)},k=ye=>{var ke=wg(),$e=_(R(ke));Et($e,21,()=>s(re),yt=>yt.id,(yt,lt)=>{var ct=Sg(),zt=R(ct),At=R(zt),an=q(At,!0),qn=_(At,2);{var _n=qt=>{var Li=yg();U(qt,Li)};Me(qn,qt=>{s(lt).is_latest_release&&qt(_n)})}var Cn=_(zt),Ht=q(Cn,!0),xn=_(Cn),Nn=q(xn,!0);ae((qt,Li)=>{xt(ct,1,`cursor-pointer border-b border-(--border)/50 ${s(b)===s(lt).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),Y(an,s(lt).id),Y(Ht,qt),Y(Nn,Li)},[()=>qe(s(lt).release_time),()=>Ve(s(lt).version_type)]),J("click",ct,()=>F(s(lt).id)),J("keydown",ct,qt=>{(qt.key==="Enter"||qt.key===" ")&&(qt.preventDefault(),F(s(lt).id))}),U(yt,ct)},yt=>{var lt=Mg();U(yt,lt)}),U(ye,ke)};Me($,ye=>{s(S)?ye(be):s(p)?ye(Ue,1):ye(k,-1)})}var Ae=_(B,2),ie=R(Ae),Ee=_(ie,2),Ie=q(Ee),tt=_(he,2),Qe=R(tt),Je=_(R(Qe),2);Et(Je,21,()=>a,ye=>ye.id,(ye,ke)=>{var $e=Eg(),yt=R($e),lt=_(yt,2),ct=q(lt,!0);ae(zt=>{Ja(yt,zt),Y(ct,s(ke).label)},[()=>s(w).has(s(ke).id)]),J("change",yt,()=>Xe(s(ke).id)),U(ye,$e)});var dt=_(Qe,2),ht=_(R(dt),2);Et(ht,21,()=>l,ye=>ye.id,(ye,ke)=>{var $e=Tg(),yt=R($e),lt=_(yt,2),ct=q(lt,!0);ae(()=>{rs(yt,s(ke).id),Ja(yt,s(x)===s(ke).id),Y(ct,s(ke).label)}),J("change",yt,()=>st(s(ke).id)),U(ye,$e)});var ut=_(ht,2);{var vt=ye=>{var ke=Ag();U(ye,ke)},rt=ye=>{var ke=Rg();U(ye,ke)};Me(ut,ye=>{s(Pe)?ye(vt):s(x)||ye(rt,1)})}var St=_(ut,2);{var Ut=ye=>{var ke=Pg(),$e=_(R(ke),4);{var yt=lt=>{var ct=Cg();U(lt,ct)};Me($e,lt=>{s(f)&&lt(yt)})}U(ye,ke)};Me(St,ye=>{s(x)==="cleanroom"&&ye(Ut)})}var It=_(St,2);{var Rt=ye=>{var ke=Lg(),$e=R(ke);$e.nodeValue=`Legacy Fabric targets Minecraft 1.13.2 and older; newer versions should use
              regular `,U(ye,ke)},Gt=ye=>{var ke=Ig(),$e=R(ke);ae(()=>Y($e,`Minecraft ${s(b)??""} predates modern Fabric — `)),U(ye,ke)};Me(It,ye=>{s(x)==="legacyfabric"&&!s(h)?ye(Rt):s(x)===""&&s(h)&&ye(Gt,1)})}var en=_(It,2);{var pt=ye=>{var ke=Dg();U(ye,ke)};Me(en,ye=>{n()&&(s(x)===""||s(x)==="horizon")&&ye(pt)})}var Ye=_(en,2);{var _t=ye=>{var ke=kg(),$e=_(R(ke),2),yt=q($e),lt=_($e,2);Et(lt,21,()=>s(me),ct=>ct.id,(ct,zt)=>{var At=Ug(),an=R(At),qn=_(an,2),_n=R(qn),Cn=q(_n,!0),Ht=_(_n,2),xn=q(Ht,!0);ae(Nn=>{Ja(an,Nn),Y(Cn,s(zt).label),Y(xn,s(zt).hint)},[()=>s(ce).has(s(zt).id)]),J("change",an,()=>ee(s(zt).id)),U(ct,At)}),ae(()=>Y(yt,`Installed right after the instance is created.
                ${s(x)==="quilt"?"Dependencies resolve through QFAPI.":""}`)),U(ye,ke)};Me(Ye,ye=>{(s(x)==="fabric"||s(x)==="quilt")&&s(me).length&&ye(_t)})}var P=_(Ye,2);{var se=ye=>{var ke=Bg(),$e=_(Mt(ke),2);{var yt=zt=>{var At=Ng();U(zt,At)},lt=zt=>{var At=Og(),an=Mt(At);Ot(an,()=>s(M),qn=>v(M,qn)),U(zt,At)},ct=zt=>{var At=Fg(),an=R(At);an.value=an.__value="";var qn=_(an);Et(qn,17,()=>s(ne),_n=>_n.version,(_n,Cn)=>{var Ht=$c(),xn=q(Ht),Nn={};ae(()=>{Y(xn,`${s(Cn).version??""}${s(Cn).stable?"":" (unstable)"}`),Nn!==(Nn=s(Cn).version)&&(Ht.value=(Ht.__value=Nn)??"")}),U(_n,Ht)}),xa(At),ba(At,()=>s(M),_n=>v(M,_n)),U(zt,At)};Me($e,zt=>{s(z)==="loading"?zt(yt):s(z)==="error"?zt(lt,1):zt(ct,-1)})}U(ye,ke)};Me(P,ye=>{s(Ce)&&ye(se)})}var _e=_(G,2),oe=R(_e),xe=_(oe,2);{var We=ye=>{var ke=zg(),$e=q(ke,!0);ae(()=>{je(ke,"title",s(X)),Y($e,s(X))}),U(ye,ke)},Be=ye=>{var ke=Gg(),$e=q(ke,!0);ae(()=>Y($e,s(b)?`Selected Minecraft ${s(b)}`:"Pick a version to continue")),U(ye,ke)};Me(xe,ye=>{s(X)?ye(We):ye(Be,-1)})}var Ke=_(xe,2),Ze=_(Ke,2),gt=q(Ze,!0),ft=_(De,2);{var wt=ye=>{{let ke=mt(()=>we()??"");Uf(ye,{get currentKey(){return s(C)},get currentPath(){return s(ke)},onpick:$e=>{v(C,$e,!0),v(D,""),v(V,!1)},oncustom:async()=>{const $e=await Te();return $e&&v(C,""),$e},onclose:()=>v(V,!1)})}};Me(ft,ye=>{s(V)&&ye(wt)})}ae(()=>{je(j,"placeholder",s(b)?`Instance name (${s(b)})`:"Instance name"),ie.disabled=!s(y),Y(Ie,`${s(re).length??""} shown`),Ze.disabled=!s(Fe),je(Ze,"title",s(Pe)?"This mod loader is not supported yet.":"Create the instance"),Y(gt,s(H)?"Creating…":"OK")}),J("click",De,ye=>{ye.target===ye.currentTarget&&e.onclose?.()}),J("click",it,()=>v(V,!0)),Ot(j,()=>s(T),ye=>v(T,ye)),ba(de,()=>s(A),ye=>v(A,ye)),J("click",L,()=>e.onclose?.()),Ot(ie,()=>s(m),ye=>v(m,ye)),J("click",oe,Le),J("click",Ke,()=>e.onclose?.()),J("click",Ze,ve),U(i,Oe),Xt()}rn(["click","keydown","change"]);var Wg=N('<input class="h-7 w-full rounded border border-(--accent) bg-(--bg-surface) px-2 text-[13px] font-medium outline-none" aria-label="Instance name"/>'),jg=N('<span class="group/name flex items-center gap-1"><span class="truncate"> </span> <button type="button" class="shrink-0 rounded p-0.5 text-[10px] text-(--text-muted) opacity-0 transition-opacity hover:text-(--accent) focus-visible:opacity-100 group-hover/name:opacity-100" title="Rename instance" aria-label="Rename instance">✎</button></span>'),Xg=N('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),qg=N('<button class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game"><!> Kill</button>'),Yg=N("<button> </button>"),Kg=N('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Zg=N('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><div class="flex items-start justify-between gap-2"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <button type="button" class="rounded p-1 text-[13px] leading-none text-(--text-muted) transition-colors hover:bg-(--bg-subtle) hover:text-(--text-main) focus-visible:ring-1 focus-visible:ring-(--accent) focus-visible:outline-none" title="Close panel (Esc)" aria-label="Clear selection and close the instance panel">✕</button></div> <h3 class="mt-2.5 truncate text-[14px] font-semibold"><!></h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"><!> Launch</button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip"><!> Export</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance"><!> Copy</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"><!> Delete</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance"><!> Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Jg(i,e){jt(e,!0);let t=ot(e,"storage",3,null),n=ot(e,"gameRunning",3,!1),r=ot(e,"modsCount",3,null),a=ot(e,"groups",19,()=>[]),l=Z(!1),o=Z(""),c=Z(!1),d=Z("");function u(){v(d,e.instance.name,!0),v(c,!0)}function h(){if(!s(c))return;const de=s(d).trim();v(c,!1),de&&de!==e.instance.name&&e.onrename?.(de)}function f(){v(c,!1)}const g=mt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function y(){const de=go(e.instance.icon_key);if(de)return de;const pe=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&pe?pe(e.instance.icon_path):"/logo.png"}function S(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function p(de){const pe=new Date(de*1e3),Q=L=>String(L).padStart(2,"0");return`${Q(pe.getDate())}/${Q(pe.getMonth()+1)}/${pe.getFullYear()} ${Q(pe.getHours())}:${Q(pe.getMinutes())}:${Q(pe.getSeconds())}`}function m(de){const pe=Math.max(0,Math.floor(de)),Q=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],L=[];let G=pe;for(const[he,B]of Q){const $=Math.floor(G/he);if($&&(L.push(`${$} ${B}${$===1?"":"s"}`),G-=$*he,L.length===2))break}return L.length?L.join(" "):"0 seconds"}const w=mt(()=>{const de=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${de}, last played on ${p(e.instance.last_played)}, total played for ${m(e.instance.total_time_played)}`:de});function b(de){v(l,!1),v(o,""),e.onchangegroup?.(de.trim()?de.trim():null)}var T=Zg(),A=R(T),D=R(A),C=q(D),V=_(D,2),x=_(A,2),M=R(x);{var ne=de=>{var pe=Wg();J("keydown",pe,Q=>{Q.key==="Enter"?h():Q.key==="Escape"&&f()}),kn("blur",pe,h),Ot(pe,()=>s(d),Q=>v(d,Q)),U(de,pe)},z=de=>{var pe=jg(),Q=R(pe),L=q(Q,!0),G=_(Q,2);ae(()=>Y(L,e.instance.name)),J("click",G,u),U(de,pe)};Me(M,de=>{s(c)?de(ne):de(z,-1)})}var O=_(x,2),H=R(O),X=q(H,!0),ge=_(H,2),le=q(ge,!0),ce=_(ge,2);{var me=de=>{var pe=Xg(),Q=q(pe);ae(()=>Y(Q,`▤ ${e.instance.group??""}`)),U(de,pe)};Me(ce,de=>{e.instance.group&&de(me)})}var ee=_(O,2),W=q(ee,!0),re=_(ee,2),Pe=R(re),Ce=R(Pe);Wt(Ce,{name:"launch",size:13});var Fe=_(Pe,2);{var Ve=de=>{var pe=qg(),Q=R(pe);Wt(Q,{name:"kill",size:13}),J("click",pe,function(...L){e.onkill?.apply(this,L)}),U(de,pe)};Me(Fe,de=>{n()&&de(Ve)})}var qe=_(Fe,2),Xe=R(qe);Wt(Xe,{name:"edit",size:13});var we=_(qe,2),Te=_(R(we),2),Re=q(Te,!0),F=_(we,2);{var st=de=>{var pe=Kg(),Q=R(pe),L=_(Q,2);Et(L,16,a,$=>$,($,be)=>{var Ue=Yg(),k=q(Ue,!0);ae(()=>{xt(Ue,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===be?"font-medium text-(--accent)":"text-(--text-muted)"}`),Y(k,be)}),J("click",Ue,()=>b(be)),U($,Ue)});var G=_(L,2),he=R(G),B=_(he,2);ae($=>{xt(Q,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),B.disabled=$},[()=>!s(o).trim()]),J("click",Q,()=>b("")),J("keydown",he,$=>{$.key==="Enter"&&s(o).trim()&&b(s(o))}),Ot(he,()=>s(o),$=>v(o,$)),J("click",B,()=>b(s(o))),U(de,pe)};Me(F,de=>{s(l)&&de(st)})}var ze=_(F,2),ve=R(ze);Wt(ve,{name:"folder",size:13});var Le=_(ze,2),Oe=R(Le);Wt(Oe,{name:"export",size:13});var De=_(Le,2),Ge=R(De);Wt(Ge,{name:"copy",size:13});var He=_(De,2),it=R(He);Wt(it,{name:"delete",size:13});var nt=_(He,2),I=R(nt);Wt(I,{name:"shortcut",size:13});var E=_(re,2),K=R(E),Se=q(K,!0),j=_(K,2),fe=q(j);ae((de,pe,Q)=>{je(C,"src",de),je(x,"title",e.instance.name),Y(X,e.instance.minecraft_version),xt(ge,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${s(g)??""}`),Y(le,e.instance.loader_type),je(ee,"title",pe),Y(W,Q),Pe.disabled=n(),je(Pe,"title",n()?"A game is already running":`Launch ${e.instance.name}`),Y(Re,s(l)?"▴":"▾"),ze.disabled=!t(),je(ze,"title",t()?"Opens the instance folder":"Storage unknown"),Y(Se,s(w)),Y(fe,`${r()??"…"??""} mods installed`)},[()=>y(),()=>S(),()=>S()]),kn("error",C,de=>{de.currentTarget.dataset.f||(de.currentTarget.dataset.f="1",de.currentTarget.src="/logo.png")}),J("click",V,()=>e.onclose?.()),J("click",Pe,function(...de){e.onlaunch?.apply(this,de)}),J("click",qe,function(...de){e.onedit?.apply(this,de)}),J("click",we,()=>v(l,!s(l))),J("click",ze,function(...de){e.onopenfolder?.apply(this,de)}),J("click",Le,function(...de){e.onexport?.apply(this,de)}),J("click",De,function(...de){e.oncopy?.apply(this,de)}),J("click",He,function(...de){e.ondelete?.apply(this,de)}),J("click",nt,function(...de){e.onshortcut?.apply(this,de)}),U(i,T),Xt()}rn(["click","keydown"]);var Qg=N("<button></button>"),$g=N('<span class="text-[11px] text-rose-400">invalid hex</span>'),e_=N('<span class="text-[11px] text-(--text-muted)">live preview</span>'),t_=N('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function n_(i,e){jt(e,!0);let t=ot(e,"theme",3,"twilight-dark");const n=mt(()=>da(t())?.accent??Hc),r=mt(()=>{const b=da(t())?.suggested??[],T=(da(t())?.accent??Hc).toLowerCase();return b.map(A=>({...A,isBuiltin:A.hex.toLowerCase()===T}))});let a=Z(Pt(Cl())),l=Z(Pt(s(a)??s(n))),o=Z(!1);nn(()=>{t(),v(a,Cl(),!0),v(l,s(a)??s(n),!0),v(o,!1)});function c(b){return s(a)===null?b.isBuiltin:s(a)===b.hex.toLowerCase()}function d(b){b.isBuiltin?(tv(),v(a,null)):os(b.hex)&&v(a,b.hex.toLowerCase(),!0),v(l,s(a)??s(n),!0),v(o,!1)}function u(b,T){const A=os(b,{persist:T})?ps(b):null;A?(v(a,A,!0),v(o,!1)):v(o,!0)}var h=t_(),f=Mt(h);Et(f,21,()=>s(r),b=>b.hex,(b,T)=>{var A=Qg();ae((D,C)=>{xt(A,1,`h-7 w-7 rounded-full ${D??""}`),In(A,`background:${s(T).hex??""}`),je(A,"title",`${s(T).name??""}${s(T).isBuiltin?" (built-in)":""}`),je(A,"aria-label",`${s(T).name??""} accent`),je(A,"aria-pressed",C)},[()=>c(s(T))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>c(s(T))]),J("click",A,()=>d(s(T))),U(b,A)});var g=_(f,2),y=R(g),S=_(y,2),p=_(S,2);{var m=b=>{var T=$g();U(b,T)},w=b=>{var T=e_();U(b,T)};Me(p,b=>{s(o)?b(m):b(w,-1)})}ae(()=>{rs(y,s(l)),rs(S,s(l)),je(S,"placeholder",s(n))}),J("input",y,b=>{v(l,b.currentTarget.value,!0),u(s(l),!1)}),J("change",y,b=>u(b.currentTarget.value,!0)),J("input",S,b=>{v(l,b.currentTarget.value,!0),u(s(l),!1)}),J("change",S,b=>u(b.currentTarget.value,!0)),U(i,h),Xt()}rn(["click","input","change"]);var i_=N('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),r_=N('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),a_=N('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),s_=N('<button><span class="flex items-center gap-2"><!> <!> <!></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),o_=N('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),ed=N('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),l_=N(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Icon pack</h3> <p class="mt-1 text-[12px] text-(--text-muted)">The glyph set used across the launcher. Fluent (Auto) follows the theme.</p> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),td=N("<option> </option>"),c_=N('<p class="mt-2 text-[12px] text-rose-400"> </p>'),d_=N('<span class="text-amber-400">(selection not applied yet)</span>'),u_=N('<p class="mt-1 text-[12px] text-(--accent)"> </p>'),f_=N('<p role="alert" class="mt-1 text-[12px] text-rose-400"> </p>'),h_=N('<span class="shrink-0 text-(--accent)">active</span>'),p_=N('<li class="flex items-center justify-between gap-2 text-[11px] text-(--text-muted)"><span class="truncate font-mono"> </span> <!></li>'),m_=N('<ul class="mt-2 space-y-0.5"></ul>'),v_=N('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!><!></select> <!> <!> <div class="mt-3 flex flex-wrap items-center gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50">↻ Rescan JREs</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-50"> </button> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-50">Apply</button></div> <p class="mt-2 flex items-center gap-1.5 text-[11px] text-(--text-muted)"><span></span> Active runtime: <span class="font-mono"> </span> <!></p> <!> <!> <!> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),g_=N('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),__=N('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),x_=N('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),b_=N('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),y_=N('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),S_=N('<p class="mt-2 text-[11px] text-green-500"> </p>'),M_=N('<p class="mt-2 text-[11px] text-rose-400"> </p>'),w_=N(`<h2 class="text-[16px] font-semibold">API Keys</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Optional keys for third-party APIs. The launcher works fully without them —
          every default flow is keyless.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="text-[12px] font-medium">CurseForge API key <span class="font-normal text-(--text-muted)"> </span></div> <p class="mt-0.5 text-[11px] text-(--text-muted)">Only used to auto-download mods from imported CurseForge packs. Your key is yours —
            paste it here, it is saved locally and never bundled with the launcher.</p> <div class="mt-3 flex gap-2"><input type="password" class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" aria-label="CurseForge API key" spellcheck="false"/> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)" title="Save the CurseForge API key (blank clears it)">Save</button></div> <!> <!></div>`,1),E_=N(`<h2 class="text-[16px] font-semibold">Accessibility</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Assistive profiles that adapt suggestions, installs and pre-launch setup for screen-reader and caption users.</p> <div class="mt-6 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Blind Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Screen reader &amp; audio navigation. Suggests Minecraft Access and spatial-audio mods on
              Fabric; Fabric is strongly recommended over Vanilla or Horizon.</p></div> <button type="button" role="switch" aria-label="Blind Mode (screen reader and audio navigation): suggests Minecraft Access on Fabric and recommends Fabric over Vanilla or Horizon" title="Toggle Blind Mode"><span aria-hidden="true"></span></button></div> <div class="mt-4 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Deaf Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Closed captions &amp; visual sound cues. Enforces <span class="font-mono">showSubtitles:true</span> in <span class="font-mono">options.txt</span> before every launch and suggests visual-sound Fabric mods.</p></div> <button type="button" role="switch" aria-label="Deaf Mode (closed captions and visual sound cues): enforces showSubtitles true in options.txt before launch and suggests visual-sound Fabric mods" title="Toggle Deaf Mode"><span aria-hidden="true"></span></button></div> <p class="mt-4 text-[11px] text-(--text-muted)" aria-live="polite"> </p>`,1),T_=N('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),A_=N("<p> </p>"),R_=N('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div> <button class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Open the dedicated Accounts page"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <span class="truncate">Accounts</span></button></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function C_(i,e){jt(e,!0);let t=ot(e,"version",3,""),n=ot(e,"theme",15,"twilight-dark"),r=ot(e,"blindMode",15,!1),a=ot(e,"deafMode",15,!1),l=ot(e,"storage",3,null),o=ot(e,"runtimes",19,()=>[]),c=ot(e,"scanning",3,!1),d=ot(e,"javaError",3,""),u=ot(e,"javaPath",15,""),h=ot(e,"javaCustomPaths",27,()=>Pt([])),f=ot(e,"minMem",15,0),g=ot(e,"maxMem",15,0);ot(e,"sharedInput",11,""),ot(e,"instancesInput",11,"");let y=ot(e,"storageBusy",3,!1),S=ot(e,"storageMsg",3,""),p=ot(e,"javaMsg",3,""),m=ot(e,"gameRunning",3,!1),w=Z(Pt([])),b=Z(""),T=Z(""),A=Z(!1),D=Z(Pt(u()));async function C(){const G=window.__TAURI__?.dialog?.open;if(!G){v(T,"File picker unavailable in this build.");return}v(T,""),v(b,"");try{const he=await G({multiple:!1,title:"Select a Java executable",filters:[{name:"Java",extensions:["exe",""]}]});if(!he)return;v(A,!0);const B=await window.__TAURI__.core.invoke("probe_java_path",{path:String(he)}),$=await e.onaddjava?.(B.executable);Array.isArray($)&&v(w,$,!0),v(b,`Added Java ${B.major} (${B.version})`)}catch(he){v(T,String(he),!0)}finally{v(A,!1)}}async function V(G){v(T,""),v(A,!0);try{await e.onapplyjava?.(G||null),v(D,G||"",!0),u(G||""),v(b,G?"Applied. Launches will use this runtime.":"Reverted to auto-discovery.",!0)}catch(he){v(T,String(he),!0)}finally{v(A,!1)}}nn(()=>{Array.isArray(h())&&v(w,h(),!0)});const x=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"apikeys",label:"API Keys",icon:"🔑"},{id:"accessibility",label:"Accessibility",icon:"♿"},{id:"about",label:"About & Updates",icon:"ℹ"}];let M=Z("appearance"),ne=Z(Pt(so())),z=Z(""),O=Z(!1),H=Z(""),X=Z("");async function ge(){try{const G=await window.__TAURI__.core.invoke("get_curseforge_api_key");v(O,G.configured,!0)}catch(G){v(X,String(G),!0)}}ge();async function le(){v(X,""),v(H,"");try{await window.__TAURI__.core.invoke("set_curseforge_api_key",{apiKey:s(z)});const G=await window.__TAURI__.core.invoke("get_curseforge_api_key");v(O,G.configured,!0),v(z,""),v(H,G.configured?"Saved. Imported CurseForge packs will resolve their mod downloads.":"Cleared. The zero-key flow (Modrinth core mods + manual import) stays active.",!0)}catch(G){v(X,String(G),!0)}}let ce=Z(Pt(Mr())),me=Z(""),ee=Z(!0),W=Z(Pt(qc())),re=Z(""),Pe=Z("");function Ce(){v(W,qc(),!0),v(Pe,"Loaded the active theme’s tokens — tweak and save.")}function Fe(){try{const G=Xc({name:s(me),dark:s(ee),tokens:s(W)});v(ce,Mr(),!0),n(G.id),v(Pe,`Saved “${G.name}”.`)}catch(G){v(Pe,String(G),!0)}}function Ve(G){sv(G),v(ce,Mr(),!0),n()===G&&n(oc),v(Pe,"Theme deleted.")}function qe(){v(re,JSON.stringify({name:s(me).trim()||"My theme",dark:s(ee),tokens:s(W)},null,2),!0),v(Pe,"Theme JSON written below — copy it to share.")}function Xe(){try{const G=JSON.parse(s(re));if(!G||typeof G!="object"||Array.isArray(G))throw new Error("Expected a theme object.");const he=Xc(G);v(ce,Mr(),!0),n(he.id),v(Pe,`Imported “${he.name}”.`),v(re,"")}catch(G){v(Pe,`Import failed: ${G}`)}}async function we(G){const he=window.__TAURI__?.dialog?.open;if(!he)return null;try{const B=await he({directory:!0,multiple:!1,defaultPath:G&&G.trim()?G.trim():void 0});return typeof B=="string"?B:null}catch{return null}}const Te=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let Re=Z(Pt({}));nn(()=>{l()&&v(Re,{instances:l().is_default_instances?"":l().instances_dir,shared:l().is_default_shared?"":l().shared_dir,versions:l().is_default_versions?"":l().versions_dir,mods:l().is_default_mods?"":l().mods_dir,icons:l().is_default_icons?"":l().icons_dir,java:l().is_default_java?"":l().java_dir,skins:l().is_default_skins?"":l().skins_dir,downloads:l().downloads_dir||""},!0)});function F(G){return l()?G==="downloads"?l().staging_root:l()[`${G}_dir`]:""}function st(G){return l()?G==="downloads"?l().is_default_staging:l()[`is_default_${G}`]:!0}const ze="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var ve=R_(),Le=R(ve),Oe=R(Le),De=_(Oe,2);Et(De,21,()=>x,G=>G.id,(G,he)=>{var B=i_(),$=R(B),be=R($);Ei(be,{get emoji(){return s(he).icon},size:15});var Ue=_($,2),k=q(Ue,!0);ae(()=>{xt(B,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${s(M)===s(he).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(B,"aria-current",s(M)===s(he).id?"true":void 0),Y(k,s(he).label)}),J("click",B,()=>v(M,s(he).id,!0)),U(G,B)});var Ge=_(De,2),He=R(Ge),it=R(He);Wt(it,{name:"accounts",size:15});var nt=_(Le,2),I=R(nt),E=R(I);{var K=G=>{var he=l_(),B=_(Mt(he),6),$=R(B);Et($,17,()=>_o,pt=>pt.id,(pt,Ye)=>{var _t=r_(),P=R(_t),se=R(P),_e=_(se,2),oe=_(_e,2),xe=_(P,2),We=q(xe,!0),Be=_(xe,2),Ke=q(Be,!0);ae(()=>{xt(_t,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===s(Ye).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(_t,"aria-pressed",n()===s(Ye).id),je(_t,"title",`${s(Ye).label??""}: ${s(Ye).dark?"dark":"light"} ground`),In(se,`background:${s(Ye).swatch[0]??""}`),In(_e,`background:${s(Ye).swatch[1]??""}`),In(oe,`background:${s(Ye).swatch[2]??""}`),Y(We,s(Ye).label),Y(Ke,s(Ye).dark?"Dark ground":"Light ground")}),J("click",_t,()=>n(s(Ye).id)),U(pt,_t)});var be=_($,2);Et(be,17,()=>s(ce),pt=>pt.id,(pt,Ye)=>{var _t=a_(),P=R(_t),se=R(P),_e=_(se,2),oe=_(_e,2),xe=_(P,2),We=q(xe,!0),Be=_(xe,2),Ke=q(Be),Ze=_(Be,2);ae(()=>{xt(_t,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===s(Ye).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(_t,"title",`${s(Ye).name??""}: ${s(Ye).dark?"dark":"light"} ground`),In(se,`background:${s(Ye).tokens.bg1??""}`),In(_e,`background:${s(Ye).tokens.bg3??""}`),In(oe,`background:${s(Ye).tokens.accent1??""}`),Y(We,s(Ye).name),Y(Ke,`Custom · ${s(Ye).dark?"Dark":"Light"} ground`),je(Ze,"title",`Delete ${s(Ye).name??""}`),je(Ze,"aria-label",`Delete ${s(Ye).name??""}`)}),J("click",_t,()=>n(s(Ye).id)),J("keydown",_t,gt=>{(gt.key==="Enter"||gt.key===" ")&&(gt.preventDefault(),n(s(Ye).id))}),J("click",Ze,gt=>{gt.stopPropagation(),Ve(s(Ye).id)}),U(pt,_t)});var Ue=_(B,4),k=R(Ue);n_(k,{get theme(){return n()}});var Ae=_(Ue,6);Et(Ae,21,()=>Of,pt=>pt.id,(pt,Ye)=>{var _t=s_(),P=R(_t),se=R(P);Wt(se,{name:"instances",size:16,get pack(){return s(Ye).id}});var _e=_(se,2);Wt(_e,{name:"settings",size:16,get pack(){return s(Ye).id}});var oe=_(_e,2);Wt(oe,{name:"accounts",size:16,get pack(){return s(Ye).id}});var xe=_(P,2),We=q(xe,!0),Be=_(xe,2),Ke=q(Be,!0);ae(()=>{xt(_t,1,`flex flex-col items-start gap-2 rounded border p-2.5 text-left ${s(ne)===s(Ye).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(_t,"aria-pressed",s(ne)===s(Ye).id),je(_t,"title",`${s(Ye).label??""}: ${s(Ye).hint??""}`),Y(We,s(Ye).label),Y(Ke,s(Ye).hint)}),J("click",_t,()=>{hv(s(Ye).id),v(ne,so(),!0)}),U(pt,_t)});var ie=_(Ae,6),Ee=R(ie),Ie=R(Ee),tt=_(Ie,2),Qe=R(tt),Je=_(Qe,2),dt=_(Ee,2);Et(dt,21,()=>iv,pt=>pt.key,(pt,Ye)=>{var _t=o_(),P=R(_t),se=q(P,!0),_e=_(P,2),oe=R(_e),xe=_(oe,2);ae(()=>{Y(se,s(Ye).label),rs(oe,s(W)[s(Ye).key]),je(oe,"title",`${s(Ye).label??""} color`),je(oe,"aria-label",`${s(Ye).label??""} color`),rs(xe,s(W)[s(Ye).key]),je(xe,"aria-label",`${s(Ye).label??""} hex`)}),J("input",oe,We=>v(W,{...s(W),[s(Ye).key]:We.currentTarget.value},!0)),J("input",xe,We=>v(W,{...s(W),[s(Ye).key]:We.currentTarget.value},!0)),U(pt,_t)});var ht=_(dt,2),ut=R(ht),vt=_(ut,2),rt=_(ie,4),St=R(rt),Ut=_(St,2),It=R(Ut),Rt=_(It,2),Gt=_(rt,2);{var en=pt=>{var Ye=ed(),_t=q(Ye,!0);ae(()=>Y(_t,s(Pe))),U(pt,Ye)};Me(Gt,pt=>{s(Pe)&&pt(en)})}ae(()=>{xt(Qe,1,`px-3 py-1.5 text-[12px] ${s(ee)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(Qe,"aria-pressed",s(ee)),xt(Je,1,`px-3 py-1.5 text-[12px] ${s(ee)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),je(Je,"aria-pressed",!s(ee))}),Ot(Ie,()=>s(me),pt=>v(me,pt)),J("click",Qe,()=>v(ee,!0)),J("click",Je,()=>v(ee,!1)),J("click",ut,Ce),J("click",vt,Fe),Ot(St,()=>s(re),pt=>v(re,pt)),J("click",It,qe),J("click",Rt,Xe),U(G,he)},Se=G=>{var he=v_(),B=_(Mt(he),6),$=R(B);$.value=$.__value="";var be=_($);Et(be,17,o,Be=>Be.executable,(Be,Ke)=>{var Ze=td(),gt=q(Ze),ft={};ae(()=>{Y(gt,`Java ${s(Ke).major??""} — ${s(Ke).home??""}`),ft!==(ft=s(Ke).executable)&&(Ze.value=(Ze.__value=ft)??"")}),U(Be,Ze)});var Ue=_(be);Et(Ue,16,()=>s(w).filter(Be=>!o().some(Ke=>Ke.executable===Be)),Be=>Be,(Be,Ke)=>{var Ze=td(),gt=q(Ze),ft={};ae(()=>{Y(gt,`Custom — ${Ke??""}`),ft!==(ft=Ke)&&(Ze.value=(Ze.__value=ft)??"")}),U(Be,Ze)}),xa(B);var k=_(B,2);{var Ae=Be=>{var Ke=ed(),Ze=q(Ke,!0);ae(()=>Y(Ze,c()?"Probing system roots…":"No runtimes detected.")),U(Be,Ke)};Me(k,Be=>{o().length||Be(Ae)})}var ie=_(k,2);{var Ee=Be=>{var Ke=c_(),Ze=q(Ke,!0);ae(()=>Y(Ze,d())),U(Be,Ke)};Me(ie,Be=>{d()&&Be(Ee)})}var Ie=_(ie,2),tt=R(Ie),Qe=_(tt,2),Je=q(Qe,!0),dt=_(Qe,2),ht=_(Ie,2),ut=R(ht),vt=_(ut,2),rt=q(vt,!0),St=_(vt,2);{var Ut=Be=>{var Ke=d_();U(Be,Ke)};Me(St,Be=>{u()!==s(D)&&Be(Ut)})}var It=_(ht,2);{var Rt=Be=>{var Ke=u_(),Ze=q(Ke,!0);ae(()=>Y(Ze,s(b))),U(Be,Ke)};Me(It,Be=>{s(b)&&Be(Rt)})}var Gt=_(It,2);{var en=Be=>{var Ke=f_(),Ze=q(Ke,!0);ae(()=>Y(Ze,s(T))),U(Be,Ke)};Me(Gt,Be=>{s(T)&&Be(en)})}var pt=_(Gt,2);{var Ye=Be=>{var Ke=m_();Et(Ke,20,()=>s(w),Ze=>Ze,(Ze,gt)=>{var ft=p_(),wt=R(ft),ye=q(wt,!0),ke=_(wt,2);{var $e=yt=>{var lt=h_();U(yt,lt)};Me(ke,yt=>{s(D)===gt&&yt($e)})}ae(()=>{je(wt,"title",gt),Y(ye,gt)}),U(Ze,ft)}),U(Be,Ke)};Me(pt,Be=>{s(w).length&&Be(Ye)})}var _t=_(pt,4),P=_(R(_t),2),se=_(P,2),_e=_(_t,2),oe=_(R(_e),2),xe=_(oe,2),We=_(_e,4);ae(()=>{tt.disabled=c(),Qe.disabled=s(A),Y(Je,s(A)?"Checking…":"Browse / Add Custom Java…"),dt.disabled=s(A)||u()===s(D),xt(ut,1,`inline-block h-1.5 w-1.5 rounded-full ${s(D)?"bg-(--accent)":"bg-(--text-muted)"}`),Y(rt,s(D)||"auto-discovery")}),ba(B,u),J("click",tt,function(...Be){e.onscanjava?.apply(this,Be)}),J("click",Qe,C),J("click",dt,()=>V(u())),Ot(P,f),Ot(se,f),Ot(oe,g),Ot(xe,g),J("click",We,function(...Be){e.onsaveprefs?.apply(this,Be)}),U(G,he)},j=G=>{var he=y_(),B=_(Mt(he),4);{var $=be=>{var Ue=b_(),k=Mt(Ue),Ae=R(k),ie=R(Ae),Ee=_(R(ie),2),Ie=q(Ee,!0),tt=_(ie,2),Qe=_(k,2);Et(Qe,17,()=>Te,Je=>Je.key,(Je,dt)=>{var ht=x_(),ut=R(ht),vt=R(ut),rt=R(vt),St=_(rt),Ut=q(St,!0),It=_(vt,2);{var Rt=We=>{var Be=g_();ae(()=>Be.disabled=y()),J("click",Be,()=>e.onsavefolder?.(s(dt).key,"")),U(We,Be)},Gt=mt(()=>!st(s(dt).key));Me(It,We=>{s(Gt)&&We(Rt)})}var en=_(ut,2),pt=q(en,!0),Ye=_(en,2),_t=R(Ye),P=_(_t,2),se=_(P,2),_e=_(se,2),oe=_(Ye,2);{var xe=We=>{var Be=__(),Ke=R(Be),Ze=q(Ke),gt=_(Ke,2);ae(()=>{je(Ke,"title",l().staging_root),Y(Ze,`Staging: ${l().staging_root??""}`),gt.disabled=y()||m(),je(gt,"title",m()?"Unavailable while a game is running":"Purges the staging area")}),J("click",gt,function(...ft){e.oncleanstaging?.apply(this,ft)}),U(We,Be)};Me(oe,We=>{s(dt).key==="downloads"&&We(xe)})}ae((We,Be)=>{Y(rt,`${s(dt).label??""} `),Y(Ut,We),Y(pt,s(dt).hint),je(_t,"placeholder",Be),_e.disabled=y()},[()=>st(s(dt).key)?"(default)":"(custom)",()=>F(s(dt).key)]),Ot(_t,()=>s(Re)[s(dt).key],We=>s(Re)[s(dt).key]=We),J("click",P,async()=>{const We=await we(s(Re)[s(dt).key]);We&&(s(Re)[s(dt).key]=We)}),J("click",se,()=>e.onopenfolder?.(F(s(dt).key))),J("click",_e,()=>e.onsavefolder?.(s(dt).key,s(Re)[s(dt).key])),U(Je,ht)}),ae(()=>{je(Ee,"title",l().app_data),Y(Ie,l().app_data)}),J("click",tt,()=>e.onopenfolder?.(l().app_data)),U(be,Ue)};Me(B,be=>{l()&&be($)})}U(G,he)},fe=G=>{var he=w_(),B=_(Mt(he),4),$=R(B),be=_(R($)),Ue=q(be,!0),k=_($,4),Ae=R(k),ie=_(Ae,2),Ee=_(k,2);{var Ie=Je=>{var dt=S_(),ht=q(dt,!0);ae(()=>Y(ht,s(H))),U(Je,dt)};Me(Ee,Je=>{s(H)&&Je(Ie)})}var tt=_(Ee,2);{var Qe=Je=>{var dt=M_(),ht=q(dt,!0);ae(()=>Y(ht,s(X))),U(Je,dt)};Me(tt,Je=>{s(X)&&Je(Qe)})}ae(()=>{Y(Ue,s(O)?"(configured)":"(not set)"),je(Ae,"placeholder",s(O)?"•••••••••••• (saved — paste a new key to replace)":"Paste your CurseForge API key")}),Ot(Ae,()=>s(z),Je=>v(z,Je)),J("click",ie,le),U(G,he)},de=G=>{var he=E_(),B=_(Mt(he),4),$=_(R(B),2),be=q($),Ue=_(B,2),k=_(R(Ue),2),Ae=q(k),ie=_(Ue,2),Ee=q(ie);ae(()=>{je($,"aria-checked",r()),xt($,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${r()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),xt(be,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${r()?"translate-x-[22px]":""}`),je(k,"aria-checked",a()),xt(k,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${a()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),xt(Ae,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${a()?"translate-x-[22px]":""}`),Y(Ee,`Blind Mode is ${r()?"on":"off"}. Deaf Mode is ${a()?"on":"off"}.`)}),J("click",$,()=>r(!r())),J("click",k,()=>a(!a())),U(G,he)},pe=G=>{var he=T_(),B=_(Mt(he),4),$=R(B),be=_(R($),2),Ue=R(be),k=_(R(Ue)),Ae=q(k),ie=_(B,2),Ee=R(ie),Ie=_(Ee,2),tt=_(Ie,2);ae(()=>Y(Ae,`(alpha-v${t()??""})`)),J("click",Ee,()=>e.onopenurl?.(`${ze}`)),J("click",Ie,()=>e.onopenurl?.(`${ze}/releases`)),J("click",tt,()=>e.onopenurl?.(`${ze}/issues`)),U(G,he)};Me(E,G=>{s(M)==="appearance"?G(K):s(M)==="java"?G(Se,1):s(M)==="storage"?G(j,2):s(M)==="apikeys"?G(fe,3):s(M)==="accessibility"?G(de,4):G(pe,-1)})}var Q=_(E,2);{var L=G=>{var he=A_(),B=q(he,!0);ae(()=>{xt(he,1,`mt-5 text-[12px] ${p()?"text-(--accent)":"text-(--text-muted)"}`),Y(B,p()||S())}),U(G,he)};Me(Q,G=>{(p()||S())&&G(L)})}J("click",Oe,function(...G){e.onback?.apply(this,G)}),J("click",Ge,function(...G){e.onopenaccounts?.apply(this,G)}),U(i,ve),Xt()}rn(["click","keydown","input"]);var P_=N("<button> </button>"),L_=N('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),I_=N('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),D_=N('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),nd=N('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),U_=N('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),id=N('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),k_=N('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),N_=N('<div class="p-4"><!> <!></div>'),O_=N(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),F_=N('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),B_=N('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),z_=N('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),G_=N('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),H_=N(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),V_=N('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),W_=N('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),j_=N('<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div><!> <!></div>',1);function Hf(i,e){jt(e,!0);let t=Z("offline"),n=Z(""),r=Z(!1),a=Z(""),l=Z(""),o=Z("idle"),c=Z(""),d=Z(null),u=Z(!1),h=null,f=Z("idle"),g=Z(""),y=Z(!1),S=Z(!1),p=Z(null),m=Z(!1),w=null,b=Z(""),T=Z(""),A=Z(!1),D=Z(""),C=Z(""),V=Z(""),x=Z("");function M(ve,Le){const Oe=window.__TAURI__?.core;return Oe?Oe.invoke(ve,Le):Promise.reject(new Error("Tauri backend unavailable in this preview."))}ac(()=>{ne(),z()});function ne(){h&&(clearInterval(h),h=null)}function z(){w&&(clearInterval(w),w=null)}nn(()=>{const ve=s(a).trim(),Le=setTimeout(async()=>{if(!ve){v(l,"");return}try{v(l,await M("offline_uuid",{username:ve}),!0)}catch{v(l,"")}},200);return()=>clearTimeout(Le)});async function O(ve){ve.preventDefault(),v(n,""),v(r,!0);try{await M("add_offline_account",{username:s(a).trim()}),v(a,""),v(l,""),await e.onrefresh?.()}catch(Le){v(n,String(Le),!0)}finally{v(r,!1)}}async function H(){v(c,""),v(u,!1),v(o,"requesting");try{v(d,await M("start_microsoft_device_code"),!0),v(o,"code"),ne(),h=setInterval(X,(s(d).interval||5)*1e3)}catch(ve){v(o,"idle"),v(c,String(ve),!0)}}async function X(){if(s(d))try{const ve=await M("poll_microsoft_device_code",{device:s(d)});if(ve.state==="pending")return;if(ve.state==="slow_down"){ne(),h=setInterval(X,((s(d).interval||5)+5)*1e3);return}if(ne(),ve.state==="failed"){v(c,ve.reason,!0),v(d,null),v(o,"idle");return}v(d,null),v(o,"signedin"),await e.onrefresh?.()}catch(ve){v(c,String(ve),!0)}}async function ge(){if(s(d))try{await navigator.clipboard.writeText(s(d).user_code),v(u,!0),setTimeout(()=>v(u,!1),1600)}catch{}}async function le(){v(g,""),v(y,!1),v(S,!0);try{await M("elyby_browser_login"),v(y,!0),await e.onrefresh?.()}catch(ve){v(g,String(ve),!0)}finally{v(S,!1)}}async function ce(){v(g,""),v(m,!1),v(f,"requesting");try{v(p,await M("start_elyby_device_code"),!0),v(f,"code"),z(),w=setInterval(me,(s(p).interval||5)*1e3)}catch(ve){v(f,"idle"),v(g,String(ve),!0)}}async function me(){if(s(p))try{const ve=await M("poll_elyby_device_code",{device:s(p)});if(ve.state==="pending")return;if(ve.state==="slow_down"){z(),w=setInterval(me,((s(p).interval||5)+5)*1e3);return}if(z(),ve.state==="failed"){v(g,ve.reason,!0),v(p,null),v(f,"idle");return}v(p,null),v(f,"signedin"),await e.onrefresh?.()}catch(ve){v(g,String(ve),!0)}}async function ee(){if(s(p))try{await navigator.clipboard.writeText(s(p).user_code),v(m,!0),setTimeout(()=>v(m,!1),1600)}catch{}}function W(){const ve=s(p)?.verification_uri_complete??s(p)?.verification_uri;ve&&M("open_external_url",{url:ve}).catch(()=>{})}async function re(ve){ve.preventDefault(),v(n,""),v(A,!0),v(y,!1);try{await M("add_elyby_account",{username:s(b).trim(),password:s(T)}),v(b,""),v(T,""),v(y,!0),await e.onrefresh?.()}catch(Le){v(n,String(Le),!0)}finally{v(A,!1)}}async function Pe(ve){ve.preventDefault(),v(n,""),v(r,!0);try{const Le=await M("add_custom_yggdrasil_account",{username:s(D).trim(),serverUrl:s(C).trim()});(s(V).trim()||s(x).trim())&&await M("set_account_textures",{id:Le.id,skin:s(V).trim()||null,cape:s(x).trim()||null}),v(D,""),v(C,""),v(V,""),v(x,""),await e.onrefresh?.()}catch(Le){v(n,String(Le),!0)}finally{v(r,!1)}}async function Ce(ve){const Le=window.__TAURI__?.dialog?.open;if(!Le){v(n,"File picker unavailable in this build.");return}try{const Oe=await Le({multiple:!1,title:ve==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Oe)return;const De=String(Oe);v(ve==="skin"?V:x,De,!0),v(n,"")}catch(Oe){v(n,String(Oe),!0)}}var Fe=j_(),Ve=Mt(Fe);Et(Ve,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],ao,(ve,Le)=>{var Oe=mt(()=>Gu(Le,2));let De=()=>s(Oe)[0],Ge=()=>s(Oe)[1];var He=P_(),it=q(He,!0);ae(()=>{xt(He,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${s(t)===De()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),Y(it,Ge())}),J("click",He,()=>{v(t,De(),!0),v(n,"")}),U(ve,He)});var qe=_(Ve,2),Xe=R(qe);{var we=ve=>{var Le=I_(),Oe=Mt(Le),De=R(Oe),Ge=_(De,2),He=_(Oe,2);{var it=nt=>{var I=L_(),E=_(R(I),2),K=q(E,!0);ae(()=>Y(K,s(l))),U(nt,I)};Me(He,nt=>{s(l)&&nt(it)})}ae(nt=>Ge.disabled=nt,[()=>!s(a).trim()||s(r)]),kn("submit",Oe,O),Ot(De,()=>s(a),nt=>v(a,nt)),U(ve,Le)},Te=ve=>{var Le=N_(),Oe=R(Le);{var De=E=>{var K=D_(),Se=Mt(K);ae(()=>Se.disabled=s(r)),J("click",Se,H),U(E,K)},Ge=E=>{var K=nd();U(E,K)},He=E=>{var K=U_(),Se=_(R(K),2),j=q(Se,!0),fe=_(Se,4),de=q(fe,!0),pe=_(fe,2),Q=R(pe),L=q(Q,!0),G=_(Q,2);ae(()=>{Y(j,s(d).verification_uri),Y(de,s(d).user_code),Y(L,s(u)?"Copied ✓":"Copy code")}),J("click",Q,ge),J("click",G,H),U(E,K)},it=E=>{var K=id(),Se=_(Mt(K),2);J("click",Se,()=>{v(o,"idle"),v(c,"")}),U(E,K)};Me(Oe,E=>{s(o)==="idle"?E(De):s(o)==="requesting"?E(Ge,1):s(o)==="code"&&s(d)?E(He,2):s(o)==="signedin"&&E(it,3)})}var nt=_(Oe,2);{var I=E=>{var K=k_(),Se=q(K,!0);ae(()=>Y(Se,s(c))),U(E,K)};Me(nt,E=>{s(c)&&E(I)})}U(ve,Le)},Re=ve=>{var Le=H_(),Oe=_(R(Le),2);{var De=L=>{var G=O_(),he=Mt(G),B=q(he,!0),$=_(he,4);ae(()=>{he.disabled=s(S),Y(B,s(S)?"Waiting for the browser…":"Sign in with browser (recommended)"),$.disabled=s(S)}),J("click",he,le),J("click",$,ce),U(L,G)},Ge=L=>{var G=nd();U(L,G)},He=L=>{var G=B_(),he=_(R(G),2),B=q(he,!0),$=_(he,4),be=q($,!0),Ue=_($,2),k=R(Ue),Ae=q(k,!0),ie=_(k,2);{var Ee=tt=>{var Qe=F_();J("click",Qe,W),U(tt,Qe)};Me(ie,tt=>{(s(p).verification_uri||s(p).verification_uri_complete)&&tt(Ee)})}var Ie=_(ie,2);ae(()=>{Y(B,s(p).verification_uri),Y(be,s(p).user_code),Y(Ae,s(m)?"Copied ✓":"Copy code")}),J("click",k,ee),J("click",Ie,ce),U(L,G)},it=L=>{var G=id(),he=_(Mt(G),2);J("click",he,()=>{v(f,"idle"),v(g,"")}),U(L,G)};Me(Oe,L=>{s(f)==="idle"?L(De):s(f)==="requesting"?L(Ge,1):s(f)==="code"&&s(p)?L(He,2):s(f)==="signedin"&&L(it,3)})}var nt=_(Oe,2);{var I=L=>{var G=z_(),he=q(G,!0);ae(()=>Y(he,s(g))),U(L,G)};Me(nt,L=>{s(g)&&L(I)})}var E=_(nt,2);{var K=L=>{var G=G_();U(L,G)};Me(E,L=>{s(y)&&s(f)==="idle"&&L(K)})}var Se=_(E,2),j=_(R(Se),2),fe=R(j),de=_(fe,2),pe=_(de,2),Q=q(pe,!0);ae(L=>{pe.disabled=L,Y(Q,s(A)?"Signing in…":"Sign in")},[()=>!s(b).trim()||!s(T)||s(A)]),kn("submit",j,re),Ot(fe,()=>s(b),L=>v(b,L)),Ot(de,()=>s(T),L=>v(T,L)),U(ve,Le)},F=ve=>{var Le=V_(),Oe=R(Le),De=_(Oe,2),Ge=_(De,2),He=R(Ge),it=_(R(He)),nt=q(it,!0),I=_(He,2),E=_(R(I)),K=q(E,!0),Se=_(Ge,2);ae(j=>{Y(nt,s(V)||"none"),Y(K,s(x)||"none"),Se.disabled=j},[()=>!s(D).trim()||!s(C).trim()||s(r)]),kn("submit",Le,Pe),Ot(Oe,()=>s(C),j=>v(C,j)),Ot(De,()=>s(D),j=>v(D,j)),J("click",He,()=>Ce("skin")),J("click",I,()=>Ce("cape")),U(ve,Le)};Me(Xe,ve=>{s(t)==="offline"?ve(we):s(t)==="microsoft"?ve(Te,1):s(t)==="elyby"?ve(Re,2):s(t)==="custom"&&ve(F,3)})}var st=_(Xe,2);{var ze=ve=>{var Le=W_(),Oe=q(Le,!0);ae(()=>Y(Oe,s(n))),U(ve,Le)};Me(st,ve=>{s(n)&&ve(ze)})}U(i,Fe),Xt()}rn(["click"]);const cc="156",Nr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},X_=0,rd=1,q_=2,Vf=1,Y_=2,zi=3,Ci=0,zn=1,ri=2,qi=0,ua=1,ad=2,sd=3,od=4,K_=5,ra=100,Z_=101,J_=102,ld=103,cd=104,Q_=200,$_=201,ex=202,tx=203,Wf=204,jf=205,nx=206,ix=207,rx=208,ax=209,sx=210,ox=0,lx=1,cx=2,Dl=3,dx=4,ux=5,fx=6,hx=7,Xf=0,px=1,mx=2,lr=0,vx=1,gx=2,_x=3,xx=4,bx=5,qf=300,ya=301,Sa=302,oo=303,Ul=304,xo=306,kl=1e3,di=1001,Nl=1002,tn=1003,dd=1004,Bo=1005,ni=1006,yx=1007,ls=1008,cr=1009,Sx=1010,Mx=1011,dc=1012,Yf=1013,sr=1014,Wi=1015,Ma=1016,Kf=1017,Zf=1018,Ar=1020,wx=1021,ui=1023,Ex=1024,Tx=1025,Rr=1026,wa=1027,Ax=1028,Jf=1029,Rx=1030,Qf=1031,$f=1033,zo=33776,Go=33777,Ho=33778,Vo=33779,ud=35840,fd=35841,hd=35842,pd=35843,Cx=36196,md=37492,vd=37496,gd=37808,_d=37809,xd=37810,bd=37811,yd=37812,Sd=37813,Md=37814,wd=37815,Ed=37816,Td=37817,Ad=37818,Rd=37819,Cd=37820,Pd=37821,Wo=36492,Ld=36494,Id=36495,Px=36283,Dd=36284,Ud=36285,kd=36286,eh=3e3,Cr=3001,Lx=3200,Ix=3201,th=0,Dx=1,Pr="",Qt="srgb",Pi="srgb-linear",bo="display-p3",jo=7680,Ux=519,kx=512,Nx=513,Ox=514,Fx=515,Bx=516,zx=517,Gx=518,Hx=519,Ol=35044,Nd="300 es",Fl=1035,ji=2e3,lo=2001;class Ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,Bl=180/Math.PI;function dr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function Dn(i,e,t){return Math.max(e,Math.min(t,i))}function Vx(i,e){return(i%e+e)%e}function Xo(i,e,t){return(1-t)*i+t*e}function Od(i){return(i&i-1)===0&&i!==0}function zl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wx={DEG2RAD:Zs};class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(e,t,n,r,a,l,o,c,d){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,o,c,d)}set(e,t,n,r,a,l,o,c,d){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=l,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],o=n[3],c=n[6],d=n[1],u=n[4],h=n[7],f=n[2],g=n[5],y=n[8],S=r[0],p=r[3],m=r[6],w=r[1],b=r[4],T=r[7],A=r[2],D=r[5],C=r[8];return a[0]=l*S+o*w+c*A,a[3]=l*p+o*b+c*D,a[6]=l*m+o*T+c*C,a[1]=d*S+u*w+h*A,a[4]=d*p+u*b+h*D,a[7]=d*m+u*T+h*C,a[2]=f*S+g*w+y*A,a[5]=f*p+g*b+y*D,a[8]=f*m+g*T+y*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],d=e[7],u=e[8];return t*l*u-t*o*d-n*a*u+n*o*c+r*a*d-r*l*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],d=e[7],u=e[8],h=u*l-o*d,f=o*c-u*a,g=d*a-l*c,y=t*h+n*f+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=h*S,e[1]=(r*d-u*n)*S,e[2]=(o*n-r*l)*S,e[3]=f*S,e[4]=(u*t-r*c)*S,e[5]=(r*a-o*t)*S,e[6]=g*S,e[7]=(n*c-d*t)*S,e[8]=(l*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,o){const c=Math.cos(a),d=Math.sin(a);return this.set(n*c,n*d,-n*(c*l+d*o)+l+e,-r*d,r*c,-r*(-d*l+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new Dt;function nh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jx(){const i=co("canvas");return i.style.display="block",i}const Fd={};function Qa(i){i in Fd||(Fd[i]=!0,console.warn(i))}function fa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xx=new Dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),qx=new Dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Yx(i){return i.convertSRGBToLinear().applyMatrix3(qx)}function Kx(i){return i.applyMatrix3(Xx).convertLinearToSRGB()}const Zx={[Pi]:i=>i,[Qt]:i=>i.convertSRGBToLinear(),[bo]:Yx},Jx={[Pi]:i=>i,[Qt]:i=>i.convertLinearToSRGB(),[bo]:Kx},Qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Pi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Zx[e],r=Jx[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Fr;class ih{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=co("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=fa(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fa(t[n]/255)*255):t[n]=fa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qx=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,o=r.length;l<o;l++)r[l].isDataTexture?a.push(Ko(r[l].image)):a.push(Ko(r[l]))}else a=Ko(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $x=0;class Tn extends Ur{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=di,r=di,a=ni,l=ls,o=ui,c=cr,d=Tn.DEFAULT_ANISOTROPY,u=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=dr(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Cr?Qt:Pr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kl:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kl:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qt?Cr:eh}set encoding(e){Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cr?Qt:Pr}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=qf;Tn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,n=0,r=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,d=c[0],u=c[4],h=c[8],f=c[1],g=c[5],y=c[9],S=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(y-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(y+p)<.1&&Math.abs(d+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(d+1)/2,T=(g+1)/2,A=(m+1)/2,D=(u+f)/4,C=(h+S)/4,V=(y+p)/4;return b>T&&b>A?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=D/n,a=C/n):T>A?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=D/r,a=V/r):A<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),n=C/a,r=V/a),this.set(n,r,a,t),this}let w=Math.sqrt((p-y)*(p-y)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-y)/w,this.y=(h-S)/w,this.z=(f-u)/w,this.w=Math.acos((d+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eb extends Ur{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Qa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cr?Qt:Pr),this.texture=new Tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends eb{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ah extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tb extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,o){let c=n[r+0],d=n[r+1],u=n[r+2],h=n[r+3];const f=a[l+0],g=a[l+1],y=a[l+2],S=a[l+3];if(o===0){e[t+0]=c,e[t+1]=d,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=g,e[t+2]=y,e[t+3]=S;return}if(h!==S||c!==f||d!==g||u!==y){let p=1-o;const m=c*f+d*g+u*y+h*S,w=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const A=Math.sqrt(b),D=Math.atan2(A,m*w);p=Math.sin(p*D)/A,o=Math.sin(o*D)/A}const T=o*w;if(c=c*p+f*T,d=d*p+g*T,u=u*p+y*T,h=h*p+S*T,p===1-o){const A=1/Math.sqrt(c*c+d*d+u*u+h*h);c*=A,d*=A,u*=A,h*=A}}e[t]=c,e[t+1]=d,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,l){const o=n[r],c=n[r+1],d=n[r+2],u=n[r+3],h=a[l],f=a[l+1],g=a[l+2],y=a[l+3];return e[t]=o*y+u*h+c*g-d*f,e[t+1]=c*y+u*f+d*h-o*g,e[t+2]=d*y+u*g+o*f-c*h,e[t+3]=u*y-o*h-c*f-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,l=e._order,o=Math.cos,c=Math.sin,d=o(n/2),u=o(r/2),h=o(a/2),f=c(n/2),g=c(r/2),y=c(a/2);switch(l){case"XYZ":this._x=f*u*h+d*g*y,this._y=d*g*h-f*u*y,this._z=d*u*y+f*g*h,this._w=d*u*h-f*g*y;break;case"YXZ":this._x=f*u*h+d*g*y,this._y=d*g*h-f*u*y,this._z=d*u*y-f*g*h,this._w=d*u*h+f*g*y;break;case"ZXY":this._x=f*u*h-d*g*y,this._y=d*g*h+f*u*y,this._z=d*u*y+f*g*h,this._w=d*u*h-f*g*y;break;case"ZYX":this._x=f*u*h-d*g*y,this._y=d*g*h+f*u*y,this._z=d*u*y-f*g*h,this._w=d*u*h+f*g*y;break;case"YZX":this._x=f*u*h+d*g*y,this._y=d*g*h+f*u*y,this._z=d*u*y-f*g*h,this._w=d*u*h-f*g*y;break;case"XZY":this._x=f*u*h-d*g*y,this._y=d*g*h-f*u*y,this._z=d*u*y+f*g*h,this._w=d*u*h+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],o=t[5],c=t[9],d=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-c)*g,this._y=(a-d)*g,this._z=(l-r)*g}else if(n>o&&n>h){const g=2*Math.sqrt(1+n-o-h);this._w=(u-c)/g,this._x=.25*g,this._y=(r+l)/g,this._z=(a+d)/g}else if(o>h){const g=2*Math.sqrt(1+o-n-h);this._w=(a-d)/g,this._x=(r+l)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+h-n-o);this._w=(l-r)/g,this._x=(a+d)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,o=t._x,c=t._y,d=t._z,u=t._w;return this._x=n*u+l*o+r*d-a*c,this._y=r*u+l*c+a*o-n*d,this._z=a*u+l*d+n*c-r*o,this._w=l*u-n*o-r*c-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let o=l*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*l+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(c),u=Math.atan2(d,o),h=Math.sin((1-t)*u)/d,f=Math.sin(t*u)/d;return this._w=l*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,n=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,o=e.z,c=e.w,d=c*t+l*r-o*n,u=c*n+o*t-a*r,h=c*r+a*n-l*t,f=-a*t-l*n-o*r;return this.x=d*c+f*-a+u*-o-h*-l,this.y=u*c+f*-l+h*-a-d*-o,this.z=h*c+f*-o+d*-l-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*l-n*c,this.z=n*o-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new ue,Bd=new Ir;class ms{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let l=0,o=a.count;l<o;l++)ki.fromBufferAttribute(a,l).applyMatrix4(e.matrixWorld),this.expandByPoint(ki)}else r.boundingBox===null&&r.computeBoundingBox(),Br.copy(r.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),ys.subVectors(this.max,Ua),zr.subVectors(e.a,Ua),Gr.subVectors(e.b,Ua),Hr.subVectors(e.c,Ua),tr.subVectors(Gr,zr),nr.subVectors(Hr,Gr),hr.subVectors(zr,Hr);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-hr.z,hr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,hr.z,0,-hr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-hr.y,hr.x,0];return!Jo(t,zr,Gr,Hr,ys)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,zr,Gr,Hr,ys))?!1:(Ss.crossVectors(tr,nr),t=[Ss.x,Ss.y,Ss.z],Jo(t,zr,Gr,Hr,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],ki=new ue,Br=new ms,zr=new ue,Gr=new ue,Hr=new ue,tr=new ue,nr=new ue,hr=new ue,Ua=new ue,ys=new ue,Ss=new ue,pr=new ue;function Jo(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){pr.fromArray(i,a);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),c=e.dot(pr),d=t.dot(pr),u=n.dot(pr);if(Math.max(-Math.max(c,d,u),Math.min(c,d,u))>o)return!1}return!0}const nb=new ms,ka=new ue,Qo=new ue;class uc{constructor(e=new ue,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nb.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ka,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Qo)),this.expandByPoint(ka.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new ue,$o=new ue,Ms=new ue,ir=new ue,el=new ue,ws=new ue,tl=new ue;class sh{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$o.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),ir.copy(this.origin).sub($o);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Ms),o=ir.dot(this.direction),c=-ir.dot(Ms),d=ir.lengthSq(),u=Math.abs(1-l*l);let h,f,g,y;if(u>0)if(h=l*c-o,f=l*o-c,y=a*u,h>=0)if(f>=-y)if(f<=y){const S=1/u;h*=S,f*=S,g=h*(h+l*f+2*o)+f*(l*h+f+2*c)+d}else f=a,h=Math.max(0,-(l*f+o)),g=-h*h+f*(f+2*c)+d;else f=-a,h=Math.max(0,-(l*f+o)),g=-h*h+f*(f+2*c)+d;else f<=-y?(h=Math.max(0,-(-l*a+o)),f=h>0?-a:Math.min(Math.max(-a,-c),a),g=-h*h+f*(f+2*c)+d):f<=y?(h=0,f=Math.min(Math.max(-a,-c),a),g=f*(f+2*c)+d):(h=Math.max(0,-(l*a+o)),f=h>0?a:Math.min(Math.max(-a,-c),a),g=-h*h+f*(f+2*c)+d);else f=l>0?-a:a,h=Math.max(0,-(l*f+o)),g=-h*h+f*(f+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($o).addScaledVector(Ms,f),g}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),r=Ni.dot(Ni)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),o=n-l,c=n+l;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,o,c;const d=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return d>=0?(n=(e.min.x-f.x)*d,r=(e.max.x-f.x)*d):(n=(e.max.x-f.x)*d,r=(e.min.x-f.x)*d),u>=0?(a=(e.min.y-f.y)*u,l=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,l=(e.min.y-f.y)*u),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,r,a){el.subVectors(t,e),ws.subVectors(n,e),tl.crossVectors(el,ws);let l=this.direction.dot(tl),o;if(l>0){if(r)return null;o=1}else if(l<0)o=-1,l=-l;else return null;ir.subVectors(this.origin,e);const c=o*this.direction.dot(ws.crossVectors(ir,ws));if(c<0)return null;const d=o*this.direction.dot(el.cross(ir));if(d<0||c+d>l)return null;const u=-o*ir.dot(tl);return u<0?null:this.at(u/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,t,n,r,a,l,o,c,d,u,h,f,g,y,S,p){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,o,c,d,u,h,f,g,y,S,p)}set(e,t,n,r,a,l,o,c,d,u,h,f,g,y,S,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=l,m[9]=o,m[13]=c,m[2]=d,m[6]=u,m[10]=h,m[14]=f,m[3]=g,m[7]=y,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),a=1/Vr.setFromMatrixColumn(e,1).length(),l=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),o=Math.sin(n),c=Math.cos(r),d=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=l*u,g=l*h,y=o*u,S=o*h;t[0]=c*u,t[4]=-c*h,t[8]=d,t[1]=g+y*d,t[5]=f-S*d,t[9]=-o*c,t[2]=S-f*d,t[6]=y+g*d,t[10]=l*c}else if(e.order==="YXZ"){const f=c*u,g=c*h,y=d*u,S=d*h;t[0]=f+S*o,t[4]=y*o-g,t[8]=l*d,t[1]=l*h,t[5]=l*u,t[9]=-o,t[2]=g*o-y,t[6]=S+f*o,t[10]=l*c}else if(e.order==="ZXY"){const f=c*u,g=c*h,y=d*u,S=d*h;t[0]=f-S*o,t[4]=-l*h,t[8]=y+g*o,t[1]=g+y*o,t[5]=l*u,t[9]=S-f*o,t[2]=-l*d,t[6]=o,t[10]=l*c}else if(e.order==="ZYX"){const f=l*u,g=l*h,y=o*u,S=o*h;t[0]=c*u,t[4]=y*d-g,t[8]=f*d+S,t[1]=c*h,t[5]=S*d+f,t[9]=g*d-y,t[2]=-d,t[6]=o*c,t[10]=l*c}else if(e.order==="YZX"){const f=l*c,g=l*d,y=o*c,S=o*d;t[0]=c*u,t[4]=S-f*h,t[8]=y*h+g,t[1]=h,t[5]=l*u,t[9]=-o*u,t[2]=-d*u,t[6]=g*h+y,t[10]=f-S*h}else if(e.order==="XZY"){const f=l*c,g=l*d,y=o*c,S=o*d;t[0]=c*u,t[4]=-h,t[8]=d*u,t[1]=f*h+S,t[5]=l*u,t[9]=g*h-y,t[2]=y*h-g,t[6]=o*u,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ib,e,rb)}lookAt(e,t,n){const r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),rr.crossVectors(n,Hn),rr.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),rr.crossVectors(n,Hn)),rr.normalize(),Es.crossVectors(Hn,rr),r[0]=rr.x,r[4]=Es.x,r[8]=Hn.x,r[1]=rr.y,r[5]=Es.y,r[9]=Hn.y,r[2]=rr.z,r[6]=Es.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],o=n[4],c=n[8],d=n[12],u=n[1],h=n[5],f=n[9],g=n[13],y=n[2],S=n[6],p=n[10],m=n[14],w=n[3],b=n[7],T=n[11],A=n[15],D=r[0],C=r[4],V=r[8],x=r[12],M=r[1],ne=r[5],z=r[9],O=r[13],H=r[2],X=r[6],ge=r[10],le=r[14],ce=r[3],me=r[7],ee=r[11],W=r[15];return a[0]=l*D+o*M+c*H+d*ce,a[4]=l*C+o*ne+c*X+d*me,a[8]=l*V+o*z+c*ge+d*ee,a[12]=l*x+o*O+c*le+d*W,a[1]=u*D+h*M+f*H+g*ce,a[5]=u*C+h*ne+f*X+g*me,a[9]=u*V+h*z+f*ge+g*ee,a[13]=u*x+h*O+f*le+g*W,a[2]=y*D+S*M+p*H+m*ce,a[6]=y*C+S*ne+p*X+m*me,a[10]=y*V+S*z+p*ge+m*ee,a[14]=y*x+S*O+p*le+m*W,a[3]=w*D+b*M+T*H+A*ce,a[7]=w*C+b*ne+T*X+A*me,a[11]=w*V+b*z+T*ge+A*ee,a[15]=w*x+b*O+T*le+A*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],o=e[5],c=e[9],d=e[13],u=e[2],h=e[6],f=e[10],g=e[14],y=e[3],S=e[7],p=e[11],m=e[15];return y*(+a*c*h-r*d*h-a*o*f+n*d*f+r*o*g-n*c*g)+S*(+t*c*g-t*d*f+a*l*f-r*l*g+r*d*u-a*c*u)+p*(+t*d*h-t*o*g-a*l*h+n*l*g+a*o*u-n*d*u)+m*(-r*o*u-t*c*h+t*o*f+r*l*h-n*l*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],o=e[5],c=e[6],d=e[7],u=e[8],h=e[9],f=e[10],g=e[11],y=e[12],S=e[13],p=e[14],m=e[15],w=h*p*d-S*f*d+S*c*g-o*p*g-h*c*m+o*f*m,b=y*f*d-u*p*d-y*c*g+l*p*g+u*c*m-l*f*m,T=u*S*d-y*h*d+y*o*g-l*S*g-u*o*m+l*h*m,A=y*h*c-u*S*c-y*o*f+l*S*f+u*o*p-l*h*p,D=t*w+n*b+r*T+a*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=w*C,e[1]=(S*f*a-h*p*a-S*r*g+n*p*g+h*r*m-n*f*m)*C,e[2]=(o*p*a-S*c*a+S*r*d-n*p*d-o*r*m+n*c*m)*C,e[3]=(h*c*a-o*f*a-h*r*d+n*f*d+o*r*g-n*c*g)*C,e[4]=b*C,e[5]=(u*p*a-y*f*a+y*r*g-t*p*g-u*r*m+t*f*m)*C,e[6]=(y*c*a-l*p*a-y*r*d+t*p*d+l*r*m-t*c*m)*C,e[7]=(l*f*a-u*c*a+u*r*d-t*f*d-l*r*g+t*c*g)*C,e[8]=T*C,e[9]=(y*h*a-u*S*a-y*n*g+t*S*g+u*n*m-t*h*m)*C,e[10]=(l*S*a-y*o*a+y*n*d-t*S*d-l*n*m+t*o*m)*C,e[11]=(u*o*a-l*h*a-u*n*d+t*h*d+l*n*g-t*o*g)*C,e[12]=A*C,e[13]=(u*S*r-y*h*r+y*n*f-t*S*f-u*n*p+t*h*p)*C,e[14]=(y*o*r-l*S*r-y*n*c+t*S*c+l*n*p-t*o*p)*C,e[15]=(l*h*r-u*o*r+u*n*c-t*h*c-l*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,o=e.y,c=e.z,d=a*l,u=a*o;return this.set(d*l+n,d*o-r*c,d*c+r*o,0,d*o+r*c,u*o+n,u*c-r*l,0,d*c-r*o,u*c+r*l,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,o=t._z,c=t._w,d=a+a,u=l+l,h=o+o,f=a*d,g=a*u,y=a*h,S=l*u,p=l*h,m=o*h,w=c*d,b=c*u,T=c*h,A=n.x,D=n.y,C=n.z;return r[0]=(1-(S+m))*A,r[1]=(g+T)*A,r[2]=(y-b)*A,r[3]=0,r[4]=(g-T)*D,r[5]=(1-(f+m))*D,r[6]=(p+w)*D,r[7]=0,r[8]=(y+b)*C,r[9]=(p-w)*C,r[10]=(1-(f+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Vr.set(r[0],r[1],r[2]).length();const l=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);const d=1/a,u=1/l,h=1/o;return oi.elements[0]*=d,oi.elements[1]*=d,oi.elements[2]*=d,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,t.setFromRotationMatrix(oi),n.x=a,n.y=l,n.z=o,this}makePerspective(e,t,n,r,a,l,o=ji){const c=this.elements,d=2*a/(t-e),u=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let g,y;if(o===ji)g=-(l+a)/(l-a),y=-2*l*a/(l-a);else if(o===lo)g=-l/(l-a),y=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,l,o=ji){const c=this.elements,d=1/(t-e),u=1/(n-r),h=1/(l-a),f=(t+e)*d,g=(n+r)*u;let y,S;if(o===ji)y=(l+a)*h,S=-2*h;else if(o===lo)y=a*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=S,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new ue,oi=new ln,ib=new ue(0,0,0),rb=new ue(1,1,1),rr=new ue,Es=new ue,Hn=new ue,zd=new ln,Gd=new Ir;class yo{constructor(e=0,t=0,n=0,r=yo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],o=r[8],c=r[1],d=r[5],u=r[9],h=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yo.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ab=0;const Hd=new ue,Wr=new Ir,Oi=new ln,Ts=new ue,Na=new ue,sb=new ue,ob=new Ir,Vd=new ue(1,0,0),Wd=new ue(0,1,0),jd=new ue(0,0,1),lb={type:"added"},cb={type:"removed"};class An extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new ue,t=new yo,n=new Ir,r=new ue(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ln},normalMatrix:{value:new Dt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Na,Ts,this.up):Oi.lookAt(Ts,Na,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(Oi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const l=this.children[r].getObjectsByProperty(e,t);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,sb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){const h=c[d];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=l(e.geometries),c=l(e.materials),d=l(e.textures),u=l(e.images),h=l(e.shapes),f=l(e.skeletons),g=l(e.animations),y=l(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=r,n;function l(o){const c=[];for(const d in o){const u=o[d];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}An.DEFAULT_UP=new ue(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new ue,Fi=new ue,nl=new ue,Bi=new ue,jr=new ue,Xr=new ue,Xd=new ue,il=new ue,rl=new ue,al=new ue;let As=!1;class ii{constructor(e=new ue,t=new ue,n=new ue){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),li.subVectors(e,t),r.cross(li);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){li.subVectors(r,t),Fi.subVectors(n,t),nl.subVectors(e,t);const l=li.dot(li),o=li.dot(Fi),c=li.dot(nl),d=Fi.dot(Fi),u=Fi.dot(nl),h=l*d-o*o;if(h===0)return a.set(-2,-1,-1);const f=1/h,g=(d*c-o*u)*f,y=(l*u-o*c)*f;return a.set(1-g-y,y,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bi),Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getUV(e,t,n,r,a,l,o,c){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(e,t,n,r,a,l,o,c)}static getInterpolation(e,t,n,r,a,l,o,c){return this.getBarycoord(e,t,n,r,Bi),c.setScalar(0),c.addScaledVector(a,Bi.x),c.addScaledVector(l,Bi.y),c.addScaledVector(o,Bi.z),c}static isFrontFacing(e,t,n,r){return li.subVectors(n,t),Fi.subVectors(e,t),li.cross(Fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),li.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),ii.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,o;jr.subVectors(r,n),Xr.subVectors(a,n),il.subVectors(e,n);const c=jr.dot(il),d=Xr.dot(il);if(c<=0&&d<=0)return t.copy(n);rl.subVectors(e,r);const u=jr.dot(rl),h=Xr.dot(rl);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*d;if(f<=0&&c>=0&&u<=0)return l=c/(c-u),t.copy(n).addScaledVector(jr,l);al.subVectors(e,a);const g=jr.dot(al),y=Xr.dot(al);if(y>=0&&g<=y)return t.copy(a);const S=g*d-c*y;if(S<=0&&d>=0&&y<=0)return o=d/(d-y),t.copy(n).addScaledVector(Xr,o);const p=u*y-g*h;if(p<=0&&h-u>=0&&g-y>=0)return Xd.subVectors(a,r),o=(h-u)/(h-u+(g-y)),t.copy(r).addScaledVector(Xd,o);const m=1/(p+S+f);return l=S*m,o=f*m,t.copy(n).addScaledVector(jr,l).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let db=0;class La extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=ua,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wf,this.blendDst=jf,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const o in a){const c=a[o];delete c.metadata,l.push(c)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function sl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qn.workingColorSpace){if(e=Vx(e,1),t=Dn(t,0,1),n=Dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=sl(l,a,e+1/3),this.g=sl(l,a,e),this.b=sl(l,a,e-1/3)}return Qn.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],o=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=lh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Qn.fromWorkingColorSpace(En.copy(this),e),Math.round(Dn(En.r*255,0,255))*65536+Math.round(Dn(En.g*255,0,255))*256+Math.round(Dn(En.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qn.workingColorSpace){Qn.fromWorkingColorSpace(En.copy(this),t);const n=En.r,r=En.g,a=En.b,l=Math.max(n,r,a),o=Math.min(n,r,a);let c,d;const u=(o+l)/2;if(o===l)c=0,d=0;else{const h=l-o;switch(d=u<=.5?h/(l+o):h/(2-l-o),l){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=d,e.l=u,e}getRGB(e,t=Qn.workingColorSpace){return Qn.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Qt){Qn.fromWorkingColorSpace(En.copy(this),e);const t=En.r,n=En.g,r=En.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),ci.h+=e,ci.s+=t,ci.l+=n,this.setHSL(ci.h,ci.s,ci.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Rs);const n=Xo(ci.h,Rs.h,t),r=Xo(ci.s,Rs.s,t),a=Xo(ci.l,Rs.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Bt;Bt.NAMES=lh;class ch extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new ue,Cs=new bt;class vi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRange={offset:0,count:-1},this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class dh extends vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uh extends vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yi extends vi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ub=0;const Zn=new ln,ol=new An,qr=new ue,Vn=new ms,Oa=new ms,bn=new ue;class $i extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nh(e)?uh:dh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Dt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Vn.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ue,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const o=t[a];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(Vn.min,Oa.min),Vn.expandByPoint(bn),bn.addVectors(Vn.max,Oa.max),Vn.expandByPoint(bn)):(Vn.expandByPoint(Oa.min),Vn.expandByPoint(Oa.max))}Vn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)bn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(bn));if(t)for(let a=0,l=t.length;a<l;a++){const o=t[a],c=this.morphTargetsRelative;for(let d=0,u=o.count;d<u;d++)bn.fromBufferAttribute(o,d),c&&(qr.fromBufferAttribute(e,d),bn.add(qr)),r=Math.max(r,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,d=[],u=[];for(let M=0;M<o;M++)d[M]=new ue,u[M]=new ue;const h=new ue,f=new ue,g=new ue,y=new bt,S=new bt,p=new bt,m=new ue,w=new ue;function b(M,ne,z){h.fromArray(r,M*3),f.fromArray(r,ne*3),g.fromArray(r,z*3),y.fromArray(l,M*2),S.fromArray(l,ne*2),p.fromArray(l,z*2),f.sub(h),g.sub(h),S.sub(y),p.sub(y);const O=1/(S.x*p.y-p.x*S.y);isFinite(O)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(g,-S.y).multiplyScalar(O),w.copy(g).multiplyScalar(S.x).addScaledVector(f,-p.x).multiplyScalar(O),d[M].add(m),d[ne].add(m),d[z].add(m),u[M].add(w),u[ne].add(w),u[z].add(w))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let M=0,ne=T.length;M<ne;++M){const z=T[M],O=z.start,H=z.count;for(let X=O,ge=O+H;X<ge;X+=3)b(n[X+0],n[X+1],n[X+2])}const A=new ue,D=new ue,C=new ue,V=new ue;function x(M){C.fromArray(a,M*3),V.copy(C);const ne=d[M];A.copy(ne),A.sub(C.multiplyScalar(C.dot(ne))).normalize(),D.crossVectors(V,ne);const O=D.dot(u[M])<0?-1:1;c[M*4]=A.x,c[M*4+1]=A.y,c[M*4+2]=A.z,c[M*4+3]=O}for(let M=0,ne=T.length;M<ne;++M){const z=T[M],O=z.start,H=z.count;for(let X=O,ge=O+H;X<ge;X+=3)x(n[X+0]),x(n[X+1]),x(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const r=new ue,a=new ue,l=new ue,o=new ue,c=new ue,d=new ue,u=new ue,h=new ue;if(e)for(let f=0,g=e.count;f<g;f+=3){const y=e.getX(f+0),S=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,p),u.subVectors(l,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,S),d.fromBufferAttribute(n,p),o.add(u),c.add(u),d.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(p,d.x,d.y,d.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),l.fromBufferAttribute(t,f+2),u.subVectors(l,a),h.subVectors(r,a),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(o,c){const d=o.array,u=o.itemSize,h=o.normalized,f=new d.constructor(c.length*u);let g=0,y=0;for(let S=0,p=c.length;S<p;S++){o.isInterleavedBufferAttribute?g=c[S]*o.data.stride+o.offset:g=c[S]*u;for(let m=0;m<u;m++)f[y++]=d[g++]}return new vi(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],d=e(c,n);t.setAttribute(o,d)}const a=this.morphAttributes;for(const o in a){const c=[],d=a[o];for(let u=0,h=d.length;u<h;u++){const f=d[u],g=e(f,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let o=0,c=l.length;o<c;o++){const d=l[o];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],u=[];for(let h=0,f=d.length;h<f;h++){const g=d[h];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const u=r[d];this.setAttribute(d,u.clone(t))}const a=e.morphAttributes;for(const d in a){const u=[],h=a[d];for(let f=0,g=h.length;f<g;f++)u.push(h[f].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,u=l.length;d<u;d++){const h=l[d];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new ln,mr=new sh,Ps=new uc,Yd=new ue,Yr=new ue,Kr=new ue,Zr=new ue,ll=new ue,Ls=new ue,Is=new bt,Ds=new bt,Us=new bt,Kd=new ue,Zd=new ue,Jd=new ue,ks=new ue,Ns=new ue;class Yt extends An{constructor(e=new $i,t=new ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ls.set(0,0,0);for(let c=0,d=a.length;c<d;c++){const u=o[c],h=a[c];u!==0&&(ll.fromBufferAttribute(h,e),l?Ls.addScaledVector(ll,u):Ls.addScaledVector(ll.sub(t),u))}t.add(Ls)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(a),mr.copy(e.ray).recast(e.near),!(Ps.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ps,Yd)===null||mr.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(a).invert(),mr.copy(e.ray).applyMatrix4(qd),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,o=a.index,c=a.attributes.position,d=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,f=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(l))for(let y=0,S=f.length;y<S;y++){const p=f[y],m=l[p.materialIndex],w=Math.max(p.start,g.start),b=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let T=w,A=b;T<A;T+=3){const D=o.getX(T),C=o.getX(T+1),V=o.getX(T+2);r=Os(this,m,e,n,d,u,h,D,C,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let p=y,m=S;p<m;p+=3){const w=o.getX(p),b=o.getX(p+1),T=o.getX(p+2);r=Os(this,l,e,n,d,u,h,w,b,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(l))for(let y=0,S=f.length;y<S;y++){const p=f[y],m=l[p.materialIndex],w=Math.max(p.start,g.start),b=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let T=w,A=b;T<A;T+=3){const D=T,C=T+1,V=T+2;r=Os(this,m,e,n,d,u,h,D,C,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let p=y,m=S;p<m;p+=3){const w=p,b=p+1,T=p+2;r=Os(this,l,e,n,d,u,h,w,b,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function fb(i,e,t,n,r,a,l,o){let c;if(e.side===zn?c=n.intersectTriangle(l,a,r,!0,o):c=n.intersectTriangle(r,a,l,e.side===Ci,o),c===null)return null;Ns.copy(o),Ns.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Ns);return d<t.near||d>t.far?null:{distance:d,point:Ns.clone(),object:i}}function Os(i,e,t,n,r,a,l,o,c,d){i.getVertexPosition(o,Yr),i.getVertexPosition(c,Kr),i.getVertexPosition(d,Zr);const u=fb(i,e,t,n,Yr,Kr,Zr,ks);if(u){r&&(Is.fromBufferAttribute(r,o),Ds.fromBufferAttribute(r,c),Us.fromBufferAttribute(r,d),u.uv=ii.getInterpolation(ks,Yr,Kr,Zr,Is,Ds,Us,new bt)),a&&(Is.fromBufferAttribute(a,o),Ds.fromBufferAttribute(a,c),Us.fromBufferAttribute(a,d),u.uv1=ii.getInterpolation(ks,Yr,Kr,Zr,Is,Ds,Us,new bt),u.uv2=u.uv1),l&&(Kd.fromBufferAttribute(l,o),Zd.fromBufferAttribute(l,c),Jd.fromBufferAttribute(l,d),u.normal=ii.getInterpolation(ks,Yr,Kr,Zr,Kd,Zd,Jd,new ue),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:d,normal:new ue,materialIndex:0};ii.getNormal(Yr,Kr,Zr,h.normal),u.face=h}return u}class sn extends $i{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const o=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const c=[],d=[],u=[],h=[];let f=0,g=0;y("z","y","x",-1,-1,n,t,e,l,a,0),y("z","y","x",1,-1,n,t,-e,l,a,1),y("x","z","y",1,1,e,n,t,r,l,2),y("x","z","y",1,-1,e,n,-t,r,l,3),y("x","y","z",1,-1,e,t,n,r,a,4),y("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new Yi(d,3)),this.setAttribute("normal",new Yi(u,3)),this.setAttribute("uv",new Yi(h,2));function y(S,p,m,w,b,T,A,D,C,V,x){const M=T/C,ne=A/V,z=T/2,O=A/2,H=D/2,X=C+1,ge=V+1;let le=0,ce=0;const me=new ue;for(let ee=0;ee<ge;ee++){const W=ee*ne-O;for(let re=0;re<X;re++){const Pe=re*M-z;me[S]=Pe*w,me[p]=W*b,me[m]=H,d.push(me.x,me.y,me.z),me[S]=0,me[p]=0,me[m]=D>0?1:-1,u.push(me.x,me.y,me.z),h.push(re/C),h.push(1-ee/V),le+=1}}for(let ee=0;ee<V;ee++)for(let W=0;W<C;W++){const re=f+W+X*ee,Pe=f+W+X*(ee+1),Ce=f+(W+1)+X*(ee+1),Fe=f+(W+1)+X*ee;c.push(re,Pe,Fe),c.push(Pe,Ce,Fe),ce+=6}o.addGroup(g,ce,x),g+=ce,f+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ea(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ln(i){const e={};for(let t=0;t<i.length;t++){const n=Ea(i[t]);for(const r in n)e[r]=n[r]}return e}function hb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fh(i){return i.getRenderTarget()===null?i.outputColorSpace:Pi}const hh={clone:Ea,merge:Ln};var pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pb,this.fragmentShader=mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=hb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ph extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends ph{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,d=l.fullHeight;a+=l.offsetX*r/c,t-=l.offsetY*n/d,r*=l.width/c,n*=l.height/d}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jr=-90,Qr=1;class vb extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new jn(Jr,Qr,e,t);r.layers=this.layers,this.add(r);const a=new jn(Jr,Qr,e,t);a.layers=this.layers,this.add(a);const l=new jn(Jr,Qr,e,t);l.layers=this.layers,this.add(l);const o=new jn(Jr,Qr,e,t);o.layers=this.layers,this.add(o);const c=new jn(Jr,Qr,e,t);c.layers=this.layers,this.add(c);const d=new jn(Jr,Qr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,o,c]=t;for(const d of t)this.remove(d);if(e===ji)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,d]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,d),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class mh extends Tn{constructor(e,t,n,r,a,l,o,c,d,u){e=e!==void 0?e:[],t=t!==void 0?t:ya,super(e,t,n,r,a,l,o,c,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gb extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Qa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cr?Qt:Pr),this.texture=new mh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sn(5,5,5),a=new Ji({name:"CubemapFromEquirect",uniforms:Ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:qi});a.uniforms.tEquirect.value=t;const l=new Yt(r,a),o=t.minFilter;return t.minFilter===ls&&(t.minFilter=ni),new vb(1,10,this).update(e,l),t.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const cl=new ue,_b=new ue,xb=new Dt;class ar{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=cl.subVectors(n,t).cross(_b.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xb.getNormalMatrix(e),r=this.coplanarPoint(cl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new uc,Fs=new ue;class fc{constructor(e=new ar,t=new ar,n=new ar,r=new ar,a=new ar,l=new ar){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ji){const n=this.planes,r=e.elements,a=r[0],l=r[1],o=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],y=r[9],S=r[10],p=r[11],m=r[12],w=r[13],b=r[14],T=r[15];if(n[0].setComponents(c-a,f-d,p-g,T-m).normalize(),n[1].setComponents(c+a,f+d,p+g,T+m).normalize(),n[2].setComponents(c+l,f+u,p+y,T+w).normalize(),n[3].setComponents(c-l,f-u,p-y,T-w).normalize(),n[4].setComponents(c-o,f-h,p-S,T-b).normalize(),t===ji)n[5].setComponents(c+o,f+h,p+S,T+b).normalize();else if(t===lo)n[5].setComponents(o,h,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vh(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function bb(i,e){const t=e.isWebGL2,n=new WeakMap;function r(d,u){const h=d.array,f=d.usage,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),d.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(h instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version}}function a(d,u,h){const f=u.array,g=u.updateRange;i.bindBuffer(h,d),g.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):i.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const u=n.get(d);u&&(i.deleteBuffer(u.buffer),n.delete(d))}function c(d,u){if(d.isGLBufferAttribute){const f=n.get(d);(!f||f.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const h=n.get(d);h===void 0?n.set(d,r(d,u)):h.version<d.version&&(a(h.buffer,d,u),h.version=d.version)}return{get:l,remove:o,update:c}}class hc extends $i{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,o=Math.floor(n),c=Math.floor(r),d=o+1,u=c+1,h=e/o,f=t/c,g=[],y=[],S=[],p=[];for(let m=0;m<u;m++){const w=m*f-l;for(let b=0;b<d;b++){const T=b*h-a;y.push(T,-w,0),S.push(0,0,1),p.push(b/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<o;w++){const b=w+d*m,T=w+d*(m+1),A=w+1+d*(m+1),D=w+1+d*m;g.push(b,T,D),g.push(T,A,D)}this.setIndex(g),this.setAttribute("position",new Yi(y,3)),this.setAttribute("normal",new Yi(S,3)),this.setAttribute("uv",new Yi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sb=`#ifdef USE_ALPHAHASH
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
#endif`,Mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ab=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ib=`#ifdef USE_IRIDESCENCE
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
#endif`,Db=`#ifdef USE_BUMPMAP
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hb=`#define PI 3.141592653589793
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
} // validated`,Vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wb=`vec3 transformedNormal = objectNormal;
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
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
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
}`,o0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,l0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
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
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
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
#endif`,_0=`struct PhysicalMaterial {
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
}`,x0=`
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,S0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C0=`#if defined( USE_POINTS_UV )
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
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,O0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iy=`float getShadowMask() {
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
}`,ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
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
}`,Ey=`#if DEPTH_PACKING == 3200
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
}`,Ty=`#define DISTANCE
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
}`,Ay=`#define DISTANCE
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`uniform float scale;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Iy=`#include <common>
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Uy=`#define LAMBERT
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
}`,ky=`#define LAMBERT
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
}`,Ny=`#define MATCAP
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
}`,Oy=`#define MATCAP
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
}`,Fy=`#define NORMAL
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
}`,By=`#define NORMAL
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
}`,zy=`#define PHONG
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
}`,Gy=`#define PHONG
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
}`,Hy=`#define STANDARD
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
}`,Vy=`#define STANDARD
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
}`,Wy=`#define TOON
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
}`,jy=`#define TOON
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
}`,Xy=`uniform float size;
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
}`,qy=`uniform vec3 diffuse;
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
}`,Yy=`#include <common>
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
}`,Ky=`uniform vec3 color;
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
}`,Zy=`uniform float rotation;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:yb,alphahash_pars_fragment:Sb,alphamap_fragment:Mb,alphamap_pars_fragment:wb,alphatest_fragment:Eb,alphatest_pars_fragment:Tb,aomap_fragment:Ab,aomap_pars_fragment:Rb,begin_vertex:Cb,beginnormal_vertex:Pb,bsdfs:Lb,iridescence_fragment:Ib,bumpmap_pars_fragment:Db,clipping_planes_fragment:Ub,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Nb,clipping_planes_vertex:Ob,color_fragment:Fb,color_pars_fragment:Bb,color_pars_vertex:zb,color_vertex:Gb,common:Hb,cube_uv_reflection_fragment:Vb,defaultnormal_vertex:Wb,displacementmap_pars_vertex:jb,displacementmap_vertex:Xb,emissivemap_fragment:qb,emissivemap_pars_fragment:Yb,colorspace_fragment:Kb,colorspace_pars_fragment:Zb,envmap_fragment:Jb,envmap_common_pars_fragment:Qb,envmap_pars_fragment:$b,envmap_pars_vertex:e0,envmap_physical_pars_fragment:f0,envmap_vertex:t0,fog_vertex:n0,fog_pars_vertex:i0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:s0,lightmap_fragment:o0,lightmap_pars_fragment:l0,lights_lambert_fragment:c0,lights_lambert_pars_fragment:d0,lights_pars_begin:u0,lights_toon_fragment:h0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:v0,lights_physical_fragment:g0,lights_physical_pars_fragment:_0,lights_fragment_begin:x0,lights_fragment_maps:b0,lights_fragment_end:y0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:E0,map_fragment:T0,map_pars_fragment:A0,map_particle_fragment:R0,map_particle_pars_fragment:C0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:L0,morphcolor_vertex:I0,morphnormal_vertex:D0,morphtarget_pars_vertex:U0,morphtarget_vertex:k0,normal_fragment_begin:N0,normal_fragment_maps:O0,normal_pars_fragment:F0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:j0,opaque_fragment:X0,packing:q0,premultiplied_alpha_fragment:Y0,project_vertex:K0,dithering_fragment:Z0,dithering_pars_fragment:J0,roughnessmap_fragment:Q0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ty,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:ry,skinning_pars_vertex:ay,skinning_vertex:sy,skinnormal_vertex:oy,specularmap_fragment:ly,specularmap_pars_fragment:cy,tonemapping_fragment:dy,tonemapping_pars_fragment:uy,transmission_fragment:fy,transmission_pars_fragment:hy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:vy,worldpos_vertex:gy,background_vert:_y,background_frag:xy,backgroundCube_vert:by,backgroundCube_frag:yy,cube_vert:Sy,cube_frag:My,depth_vert:wy,depth_frag:Ey,distanceRGBA_vert:Ty,distanceRGBA_frag:Ay,equirect_vert:Ry,equirect_frag:Cy,linedashed_vert:Py,linedashed_frag:Ly,meshbasic_vert:Iy,meshbasic_frag:Dy,meshlambert_vert:Uy,meshlambert_frag:ky,meshmatcap_vert:Ny,meshmatcap_frag:Oy,meshnormal_vert:Fy,meshnormal_frag:By,meshphong_vert:zy,meshphong_frag:Gy,meshphysical_vert:Hy,meshphysical_frag:Vy,meshtoon_vert:Wy,meshtoon_frag:jy,points_vert:Xy,points_frag:qy,shadow_vert:Yy,shadow_frag:Ky,sprite_vert:Zy,sprite_frag:Jy},et={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},yi={basic:{uniforms:Ln([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Ln([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Ln([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Ln([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Ln([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Ln([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Ln([et.points,et.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Ln([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Ln([et.common,et.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Ln([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Ln([et.sprite,et.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Ln([et.common,et.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Ln([et.lights,et.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};yi.physical={uniforms:Ln([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Bs={r:0,b:0,g:0};function Qy(i,e,t,n,r,a,l){const o=new Bt(0);let c=a===!0?0:1,d,u,h=null,f=0,g=null;function y(p,m){let w=!1,b=m.isScene===!0?m.background:null;b&&b.isTexture&&(b=(m.backgroundBlurriness>0?t:e).get(b)),b===null?S(o,c):b&&b.isColor&&(S(b,1),w=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,l):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===xo)?(u===void 0&&(u=new Yt(new sn(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Ea(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=b.colorSpace!==Qt,(h!==b||f!==b.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,g=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Yt(new hc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Ea(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=b.colorSpace!==Qt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,g=i.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null))}function S(p,m){p.getRGB(Bs,fh(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,m,l)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),c=m,S(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,S(o,c)},render:y}}function $y(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,o={},c=p(null);let d=c,u=!1;function h(H,X,ge,le,ce){let me=!1;if(l){const ee=S(le,ge,X);d!==ee&&(d=ee,g(d.object)),me=m(H,le,ge,ce),me&&w(H,le,ge,ce)}else{const ee=X.wireframe===!0;(d.geometry!==le.id||d.program!==ge.id||d.wireframe!==ee)&&(d.geometry=le.id,d.program=ge.id,d.wireframe=ee,me=!0)}ce!==null&&t.update(ce,i.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,V(H,X,ge,le),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function g(H){return n.isWebGL2?i.bindVertexArray(H):a.bindVertexArrayOES(H)}function y(H){return n.isWebGL2?i.deleteVertexArray(H):a.deleteVertexArrayOES(H)}function S(H,X,ge){const le=ge.wireframe===!0;let ce=o[H.id];ce===void 0&&(ce={},o[H.id]=ce);let me=ce[X.id];me===void 0&&(me={},ce[X.id]=me);let ee=me[le];return ee===void 0&&(ee=p(f()),me[le]=ee),ee}function p(H){const X=[],ge=[],le=[];for(let ce=0;ce<r;ce++)X[ce]=0,ge[ce]=0,le[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ge,attributeDivisors:le,object:H,attributes:{},index:null}}function m(H,X,ge,le){const ce=d.attributes,me=X.attributes;let ee=0;const W=ge.getAttributes();for(const re in W)if(W[re].location>=0){const Ce=ce[re];let Fe=me[re];if(Fe===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(Fe=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(Fe=H.instanceColor)),Ce===void 0||Ce.attribute!==Fe||Fe&&Ce.data!==Fe.data)return!0;ee++}return d.attributesNum!==ee||d.index!==le}function w(H,X,ge,le){const ce={},me=X.attributes;let ee=0;const W=ge.getAttributes();for(const re in W)if(W[re].location>=0){let Ce=me[re];Ce===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(Ce=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(Ce=H.instanceColor));const Fe={};Fe.attribute=Ce,Ce&&Ce.data&&(Fe.data=Ce.data),ce[re]=Fe,ee++}d.attributes=ce,d.attributesNum=ee,d.index=le}function b(){const H=d.newAttributes;for(let X=0,ge=H.length;X<ge;X++)H[X]=0}function T(H){A(H,0)}function A(H,X){const ge=d.newAttributes,le=d.enabledAttributes,ce=d.attributeDivisors;ge[H]=1,le[H]===0&&(i.enableVertexAttribArray(H),le[H]=1),ce[H]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,X),ce[H]=X)}function D(){const H=d.newAttributes,X=d.enabledAttributes;for(let ge=0,le=X.length;ge<le;ge++)X[ge]!==H[ge]&&(i.disableVertexAttribArray(ge),X[ge]=0)}function C(H,X,ge,le,ce,me,ee){ee===!0?i.vertexAttribIPointer(H,X,ge,ce,me):i.vertexAttribPointer(H,X,ge,le,ce,me)}function V(H,X,ge,le){if(n.isWebGL2===!1&&(H.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const ce=le.attributes,me=ge.getAttributes(),ee=X.defaultAttributeValues;for(const W in me){const re=me[W];if(re.location>=0){let Pe=ce[W];if(Pe===void 0&&(W==="instanceMatrix"&&H.instanceMatrix&&(Pe=H.instanceMatrix),W==="instanceColor"&&H.instanceColor&&(Pe=H.instanceColor)),Pe!==void 0){const Ce=Pe.normalized,Fe=Pe.itemSize,Ve=t.get(Pe);if(Ve===void 0)continue;const qe=Ve.buffer,Xe=Ve.type,we=Ve.bytesPerElement,Te=n.isWebGL2===!0&&(Xe===i.INT||Xe===i.UNSIGNED_INT||Pe.gpuType===Yf);if(Pe.isInterleavedBufferAttribute){const Re=Pe.data,F=Re.stride,st=Pe.offset;if(Re.isInstancedInterleavedBuffer){for(let ze=0;ze<re.locationSize;ze++)A(re.location+ze,Re.meshPerAttribute);H.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let ze=0;ze<re.locationSize;ze++)T(re.location+ze);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ze=0;ze<re.locationSize;ze++)C(re.location+ze,Fe/re.locationSize,Xe,Ce,F*we,(st+Fe/re.locationSize*ze)*we,Te)}else{if(Pe.isInstancedBufferAttribute){for(let Re=0;Re<re.locationSize;Re++)A(re.location+Re,Pe.meshPerAttribute);H.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Re=0;Re<re.locationSize;Re++)T(re.location+Re);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Re=0;Re<re.locationSize;Re++)C(re.location+Re,Fe/re.locationSize,Xe,Ce,Fe*we,Fe/re.locationSize*Re*we,Te)}}else if(ee!==void 0){const Ce=ee[W];if(Ce!==void 0)switch(Ce.length){case 2:i.vertexAttrib2fv(re.location,Ce);break;case 3:i.vertexAttrib3fv(re.location,Ce);break;case 4:i.vertexAttrib4fv(re.location,Ce);break;default:i.vertexAttrib1fv(re.location,Ce)}}}}D()}function x(){z();for(const H in o){const X=o[H];for(const ge in X){const le=X[ge];for(const ce in le)y(le[ce].object),delete le[ce];delete X[ge]}delete o[H]}}function M(H){if(o[H.id]===void 0)return;const X=o[H.id];for(const ge in X){const le=X[ge];for(const ce in le)y(le[ce].object),delete le[ce];delete X[ge]}delete o[H.id]}function ne(H){for(const X in o){const ge=o[X];if(ge[H.id]===void 0)continue;const le=ge[H.id];for(const ce in le)y(le[ce].object),delete le[ce];delete ge[H.id]}}function z(){O(),u=!0,d!==c&&(d=c,g(d.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:z,resetDefaultState:O,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:ne,initAttributes:b,enableAttribute:T,disableUnusedAttributes:D}}function e1(i,e,t,n){const r=n.isWebGL2;let a;function l(d){a=d}function o(d,u){i.drawArrays(a,d,u),t.update(u,a,1)}function c(d,u,h){if(h===0)return;let f,g;if(r)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](a,d,u,h),t.update(u,a,h)}this.setMode=l,this.render=o,this.renderInstances=c}function t1(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const d=l||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,T=l||e.has("OES_texture_float"),A=b&&T,D=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:w,vertexTextures:b,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:D}}function n1(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new ar,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||n!==0||r;return r=f,n=h.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,g){const y=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||y===null||y.length===0||a&&!p)a?u(null):d();else{const w=a?0:n,b=w*4;let T=m.clippingState||null;c.value=T,T=u(y,f,b,g);for(let A=0;A!==b;++A)T[A]=t[A];m.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,g,y){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=c.value,y!==!0||p===null){const m=g+S*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,T=g;b!==S;++b,T+=4)l.copy(h[b]).applyMatrix4(w,o),l.normal.toArray(p,T),p[T+3]=l.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function i1(i){let e=new WeakMap;function t(l,o){return o===oo?l.mapping=ya:o===Ul&&(l.mapping=Sa),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const o=l.mapping;if(o===oo||o===Ul)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const d=new gb(c.height/2);return d.fromEquirectangularTexture(i,l),e.set(l,d),l.addEventListener("dispose",r),t(d.texture,l.mapping)}else return null}}return l}function r(l){const o=l.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class gh extends ph{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,l,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const aa=4,Qd=[.125,.215,.35,.446,.526,.582],br=20,dl=new gh,$d=new Bt;let ul=null;const _r=(1+Math.sqrt(5))/2,$r=1/_r,eu=[new ue(1,1,1),new ue(-1,1,1),new ue(1,1,-1),new ue(-1,1,-1),new ue(0,_r,$r),new ue(0,_r,-$r),new ue($r,0,_r),new ue(-$r,0,_r),new ue(_r,$r,0),new ue(-_r,$r,0)];class tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ul=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul),e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ya||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Ma,format:ui,colorSpace:Pi,depthBuffer:!1},r=nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r1(a)),this._blurMaterial=a1(a,e,t)}return r}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,r){const o=new jn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($d),u.toneMapping=lr,u.autoClear=!1;const g=new ch({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),y=new Yt(new sn,g);let S=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,S=!0):(g.color.copy($d),S=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(o.up.set(0,c[m],0),o.lookAt(d[m],0,0)):w===1?(o.up.set(0,0,c[m]),o.lookAt(0,d[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,d[m]));const b=this._cubeSize;zs(r,w*b,m>2?b:0,b,b),u.setRenderTarget(r),S&&u.render(y,o),u.render(e,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ya||e.mapping===Sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new Yt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;zs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=eu[(r-1)%eu.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,o){const c=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yt(this._lodPlanes[r],d),f=d.uniforms,g=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*br-1),S=a/y,p=isFinite(a)?1+Math.floor(u*S):br;p>br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);const m=[];let w=0;for(let C=0;C<br;++C){const V=C/S,x=Math.exp(-V*V/2);m.push(x),C===0?w+=x:C<p&&(w+=2*x)}for(let C=0;C<m.length;C++)m[C]=m[C]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=l==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=y,f.mipInt.value=b-n;const T=this._sizeLods[r],A=3*T*(r>b-aa?r-b+aa:0),D=4*(this._cubeSize-T);zs(t,A,D,3*T,2*T),c.setRenderTarget(t),c.render(h,dl)}}function r1(i){const e=[],t=[],n=[];let r=i;const a=i-aa+1+Qd.length;for(let l=0;l<a;l++){const o=Math.pow(2,r);t.push(o);let c=1/o;l>i-aa?c=Qd[l-i+aa-1]:l===0&&(c=0),n.push(c);const d=1/(o-2),u=-d,h=1+d,f=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,y=6,S=3,p=2,m=1,w=new Float32Array(S*y*g),b=new Float32Array(p*y*g),T=new Float32Array(m*y*g);for(let D=0;D<g;D++){const C=D%3*2/3-1,V=D>2?0:-1,x=[C,V,0,C+2/3,V,0,C+2/3,V+1,0,C,V,0,C+2/3,V+1,0,C,V+1,0];w.set(x,S*y*D),b.set(f,p*y*D);const M=[D,D,D,D,D,D];T.set(M,m*y*D)}const A=new $i;A.setAttribute("position",new vi(w,S)),A.setAttribute("uv",new vi(b,p)),A.setAttribute("faceIndex",new vi(T,m)),e.push(A),r>aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nu(i,e,t){const n=new Zi(i,e,t);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function a1(i,e,t){const n=new Float32Array(br),r=new ue(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pc(),fragmentShader:`

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
	`}function s1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===oo||c===Ul,u=c===ya||c===Sa;if(d||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new tu(i)),h=d?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(d&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new tu(i));const f=d?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let c=0;const d=6;for(let u=0;u<d;u++)o[u]!==void 0&&c++;return c===d}function a(o){const c=o.target;c.removeEventListener("dispose",a);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function o1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function l1(i,e,t,n){const r={},a=new WeakMap;function l(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const S=f.morphAttributes[y];for(let p=0,m=S.length;p<m;p++)e.remove(S[p])}f.removeEventListener("dispose",l),delete r[f.id];const g=a.get(f);g&&(e.remove(g),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",l),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const y in f)e.update(f[y],i.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const S=g[y];for(let p=0,m=S.length;p<m;p++)e.update(S[p],i.ARRAY_BUFFER)}}function d(h){const f=[],g=h.index,y=h.attributes.position;let S=0;if(g!==null){const w=g.array;S=g.version;for(let b=0,T=w.length;b<T;b+=3){const A=w[b+0],D=w[b+1],C=w[b+2];f.push(A,D,D,C,C,A)}}else if(y!==void 0){const w=y.array;S=y.version;for(let b=0,T=w.length/3-1;b<T;b+=3){const A=b+0,D=b+1,C=b+2;f.push(A,D,D,C,C,A)}}else return;const p=new(nh(f)?uh:dh)(f,1);p.version=S;const m=a.get(h);m&&e.remove(m),a.set(h,p)}function u(h){const f=a.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&d(h)}else d(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function c1(i,e,t,n){const r=n.isWebGL2;let a;function l(f){a=f}let o,c;function d(f){o=f.type,c=f.bytesPerElement}function u(f,g){i.drawElements(a,g,o,f*c),t.update(g,a,1)}function h(f,g,y){if(y===0)return;let S,p;if(r)S=i,p="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[p](a,g,o,f*c,y),t.update(g,a,y)}this.setMode=l,this.setIndex=d,this.render=u,this.renderInstances=h}function d1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,o){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function u1(i,e){return i[0]-e[0]}function f1(i,e){return Math.abs(e[1])-Math.abs(i[1])}function h1(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new $t,o=[];for(let d=0;d<8;d++)o[d]=[d,0];function c(d,u,h){const f=d.morphTargetInfluences;if(e.isWebGL2===!0){const y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=y!==void 0?y.length:0;let p=a.get(u);if(p===void 0||p.count!==S){let X=function(){O.dispose(),a.delete(u),u.removeEventListener("dispose",X)};var g=X;p!==void 0&&p.texture.dispose();const b=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],V=u.morphAttributes.color||[];let x=0;b===!0&&(x=1),T===!0&&(x=2),A===!0&&(x=3);let M=u.attributes.position.count*x,ne=1;M>e.maxTextureSize&&(ne=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const z=new Float32Array(M*ne*4*S),O=new ah(z,M,ne,S);O.type=Wi,O.needsUpdate=!0;const H=x*4;for(let ge=0;ge<S;ge++){const le=D[ge],ce=C[ge],me=V[ge],ee=M*ne*4*ge;for(let W=0;W<le.count;W++){const re=W*H;b===!0&&(l.fromBufferAttribute(le,W),z[ee+re+0]=l.x,z[ee+re+1]=l.y,z[ee+re+2]=l.z,z[ee+re+3]=0),T===!0&&(l.fromBufferAttribute(ce,W),z[ee+re+4]=l.x,z[ee+re+5]=l.y,z[ee+re+6]=l.z,z[ee+re+7]=0),A===!0&&(l.fromBufferAttribute(me,W),z[ee+re+8]=l.x,z[ee+re+9]=l.y,z[ee+re+10]=l.z,z[ee+re+11]=me.itemSize===4?l.w:1)}}p={count:S,texture:O,size:new bt(M,ne)},a.set(u,p),u.addEventListener("dispose",X)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];const w=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const y=f===void 0?0:f.length;let S=n[u.id];if(S===void 0||S.length!==y){S=[];for(let T=0;T<y;T++)S[T]=[T,0];n[u.id]=S}for(let T=0;T<y;T++){const A=S[T];A[0]=T,A[1]=f[T]}S.sort(f1);for(let T=0;T<8;T++)T<y&&S[T][1]?(o[T][0]=S[T][0],o[T][1]=S[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(u1);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let w=0;for(let T=0;T<8;T++){const A=o[T],D=A[0],C=A[1];D!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+T)!==p[D]&&u.setAttribute("morphTarget"+T,p[D]),m&&u.getAttribute("morphNormal"+T)!==m[D]&&u.setAttribute("morphNormal"+T,m[D]),r[T]=C,w+=C):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),m&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const b=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function p1(i,e,t,n){let r=new WeakMap;function a(c){const d=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function l(){r=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:l}}const _h=new Tn,xh=new ah,bh=new tb,yh=new mh,au=[],su=[],ou=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Ia(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=au[r];if(a===void 0&&(a=new Float32Array(r),au[r]=a),e!==0){n.toArray(a,0);for(let l=1,o=0;l!==e;++l)o+=t,i[l].toArray(a,o)}return a}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function So(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function m1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function g1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function _1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function x1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;cu.set(n),i.uniformMatrix2fv(this.addr,!1,cu),gn(t,n)}}function b1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;lu.set(n),i.uniformMatrix3fv(this.addr,!1,lu),gn(t,n)}}function y1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(vn(t,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),gn(t,n)}}function S1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function M1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function E1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function T1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function A1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function R1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function C1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function P1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||_h,r)}function L1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bh,r)}function I1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||yh,r)}function D1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xh,r)}function U1(i){switch(i){case 5126:return m1;case 35664:return v1;case 35665:return g1;case 35666:return _1;case 35674:return x1;case 35675:return b1;case 35676:return y1;case 5124:case 35670:return S1;case 35667:case 35671:return M1;case 35668:case 35672:return w1;case 35669:case 35673:return E1;case 5125:return T1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return D1}}function k1(i,e){i.uniform1fv(this.addr,e)}function N1(i,e){const t=Ia(e,this.size,2);i.uniform2fv(this.addr,t)}function O1(i,e){const t=Ia(e,this.size,3);i.uniform3fv(this.addr,t)}function F1(i,e){const t=Ia(e,this.size,4);i.uniform4fv(this.addr,t)}function B1(i,e){const t=Ia(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function z1(i,e){const t=Ia(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function G1(i,e){const t=Ia(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function H1(i,e){i.uniform1iv(this.addr,e)}function V1(i,e){i.uniform2iv(this.addr,e)}function W1(i,e){i.uniform3iv(this.addr,e)}function j1(i,e){i.uniform4iv(this.addr,e)}function X1(i,e){i.uniform1uiv(this.addr,e)}function q1(i,e){i.uniform2uiv(this.addr,e)}function Y1(i,e){i.uniform3uiv(this.addr,e)}function K1(i,e){i.uniform4uiv(this.addr,e)}function Z1(i,e,t){const n=this.cache,r=e.length,a=So(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||_h,a[l])}function J1(i,e,t){const n=this.cache,r=e.length,a=So(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||bh,a[l])}function Q1(i,e,t){const n=this.cache,r=e.length,a=So(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||yh,a[l])}function $1(i,e,t){const n=this.cache,r=e.length,a=So(t,r);vn(n,a)||(i.uniform1iv(this.addr,a),gn(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||xh,a[l])}function eS(i){switch(i){case 5126:return k1;case 35664:return N1;case 35665:return O1;case 35666:return F1;case 35674:return B1;case 35675:return z1;case 35676:return G1;case 5124:case 35670:return H1;case 35667:case 35671:return V1;case 35668:case 35672:return W1;case 35669:case 35673:return j1;case 5125:return X1;case 36294:return q1;case 36295:return Y1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return $1}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=U1(t.type)}}class nS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=eS(t.type)}}class iS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function du(i,e){i.seq.push(e),i.map[e.id]=e}function rS(i,e,t){const n=i.name,r=n.length;for(fl.lastIndex=0;;){const a=fl.exec(n),l=fl.lastIndex;let o=a[1];const c=a[2]==="]",d=a[3];if(c&&(o=o|0),d===void 0||d==="["&&l+2===r){du(t,d===void 0?new tS(o,i,e):new nS(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new iS(o),du(t,h)),t=h}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);rS(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function uu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let aS=0;function sS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const o=l+1;n.push(`${o===e?">":" "} ${o}: ${t[l]}`)}return n.join(`
`)}function oS(i){switch(i){case Pi:return["Linear","( value )"];case Qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function fu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sS(i.getShaderSource(e),l)}else return r}function lS(i,e){const t=oS(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function cS(i,e){let t;switch(e){case vx:t="Linear";break;case gx:t="Reinhard";break;case _x:t="OptimizedCineon";break;case xx:t="ACESFilmic";break;case bx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qa).join(`
`)}function uS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:o}}return t}function qa(i){return i!==""}function hu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(hS,mS)}const pS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mS(i,e){let t=Ct[e];if(t===void 0){const n=pS.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}const vS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(vS,gS)}function gS(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function vu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _S(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function xS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ya:case Sa:e="ENVMAP_TYPE_CUBE";break;case xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bS(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Sa&&(e="ENVMAP_MODE_REFRACTION"),e}function yS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xf:e="ENVMAP_BLENDING_MULTIPLY";break;case px:e="ENVMAP_BLENDING_MIX";break;case mx:e="ENVMAP_BLENDING_ADD";break}return e}function SS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function MS(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,o=t.fragmentShader;const c=_S(t),d=xS(t),u=bS(t),h=yS(t),f=SS(t),g=t.isWebGL2?"":dS(t),y=uS(a),S=r.createProgram();let p,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(qa).join(`
`),p.length>0&&(p+=`
`),m=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(qa).join(`
`),m.length>0&&(m+=`
`)):(p=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),m=[g,vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Ct.tonemapping_pars_fragment:"",t.toneMapping!==lr?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),l=Gl(l),l=hu(l,t),l=pu(l,t),o=Gl(o),o=hu(o,t),o=pu(o,t),l=mu(l),o=mu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=w+p+l,T=w+m+o,A=uu(r,r.VERTEX_SHADER,b),D=uu(r,r.FRAGMENT_SHADER,T);if(r.attachShader(S,A),r.attachShader(S,D),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),i.debug.checkShaderErrors){const x=r.getProgramInfoLog(S).trim(),M=r.getShaderInfoLog(A).trim(),ne=r.getShaderInfoLog(D).trim();let z=!0,O=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,A,D);else{const H=fu(r,A,"vertex"),X=fu(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+H+`
`+X)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(M===""||ne==="")&&(O=!1);O&&(this.diagnostics={runnable:z,programLog:x,vertexShader:{log:M,prefix:p},fragmentShader:{log:ne,prefix:m}})}r.deleteShader(A),r.deleteShader(D);let C;this.getUniforms=function(){return C===void 0&&(C=new Js(r,S)),C};let V;return this.getAttributes=function(){return V===void 0&&(V=fS(r,S)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=D,this}let wS=0;class ES{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new TS(e),t.set(e,n)),n}}class TS{constructor(e){this.id=wS++,this.code=e,this.usedTimes=0}}function AS(i,e,t,n,r,a,l){const o=new oh,c=new ES,d=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return x===0?"uv":`uv${x}`}function p(x,M,ne,z,O){const H=z.fog,X=O.geometry,ge=x.isMeshStandardMaterial?z.environment:null,le=(x.isMeshStandardMaterial?t:e).get(x.envMap||ge),ce=le&&le.mapping===xo?le.image.height:null,me=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ee=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,W=ee!==void 0?ee.length:0;let re=0;X.morphAttributes.position!==void 0&&(re=1),X.morphAttributes.normal!==void 0&&(re=2),X.morphAttributes.color!==void 0&&(re=3);let Pe,Ce,Fe,Ve;if(me){const ht=yi[me];Pe=ht.vertexShader,Ce=ht.fragmentShader}else Pe=x.vertexShader,Ce=x.fragmentShader,c.update(x),Fe=c.getVertexShaderID(x),Ve=c.getFragmentShaderID(x);const qe=i.getRenderTarget(),Xe=O.isInstancedMesh===!0,we=!!x.map,Te=!!x.matcap,Re=!!le,F=!!x.aoMap,st=!!x.lightMap,ze=!!x.bumpMap,ve=!!x.normalMap,Le=!!x.displacementMap,Oe=!!x.emissiveMap,De=!!x.metalnessMap,Ge=!!x.roughnessMap,He=x.anisotropy>0,it=x.clearcoat>0,nt=x.iridescence>0,I=x.sheen>0,E=x.transmission>0,K=He&&!!x.anisotropyMap,Se=it&&!!x.clearcoatMap,j=it&&!!x.clearcoatNormalMap,fe=it&&!!x.clearcoatRoughnessMap,de=nt&&!!x.iridescenceMap,pe=nt&&!!x.iridescenceThicknessMap,Q=I&&!!x.sheenColorMap,L=I&&!!x.sheenRoughnessMap,G=!!x.specularMap,he=!!x.specularColorMap,B=!!x.specularIntensityMap,$=E&&!!x.transmissionMap,be=E&&!!x.thicknessMap,Ue=!!x.gradientMap,k=!!x.alphaMap,Ae=x.alphaTest>0,ie=!!x.alphaHash,Ee=!!x.extensions,Ie=!!X.attributes.uv1,tt=!!X.attributes.uv2,Qe=!!X.attributes.uv3;let Je=lr;return x.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(Je=i.toneMapping),{isWebGL2:u,shaderID:me,shaderType:x.type,shaderName:x.name,vertexShader:Pe,fragmentShader:Ce,defines:x.defines,customVertexShaderID:Fe,customFragmentShaderID:Ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,instancing:Xe,instancingColor:Xe&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:qe===null?i.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:Pi,map:we,matcap:Te,envMap:Re,envMapMode:Re&&le.mapping,envMapCubeUVHeight:ce,aoMap:F,lightMap:st,bumpMap:ze,normalMap:ve,displacementMap:f&&Le,emissiveMap:Oe,normalMapObjectSpace:ve&&x.normalMapType===Dx,normalMapTangentSpace:ve&&x.normalMapType===th,metalnessMap:De,roughnessMap:Ge,anisotropy:He,anisotropyMap:K,clearcoat:it,clearcoatMap:Se,clearcoatNormalMap:j,clearcoatRoughnessMap:fe,iridescence:nt,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:I,sheenColorMap:Q,sheenRoughnessMap:L,specularMap:G,specularColorMap:he,specularIntensityMap:B,transmission:E,transmissionMap:$,thicknessMap:be,gradientMap:Ue,opaque:x.transparent===!1&&x.blending===ua,alphaMap:k,alphaTest:Ae,alphaHash:ie,combine:x.combine,mapUv:we&&S(x.map.channel),aoMapUv:F&&S(x.aoMap.channel),lightMapUv:st&&S(x.lightMap.channel),bumpMapUv:ze&&S(x.bumpMap.channel),normalMapUv:ve&&S(x.normalMap.channel),displacementMapUv:Le&&S(x.displacementMap.channel),emissiveMapUv:Oe&&S(x.emissiveMap.channel),metalnessMapUv:De&&S(x.metalnessMap.channel),roughnessMapUv:Ge&&S(x.roughnessMap.channel),anisotropyMapUv:K&&S(x.anisotropyMap.channel),clearcoatMapUv:Se&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:j&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:L&&S(x.sheenRoughnessMap.channel),specularMapUv:G&&S(x.specularMap.channel),specularColorMapUv:he&&S(x.specularColorMap.channel),specularIntensityMapUv:B&&S(x.specularIntensityMap.channel),transmissionMapUv:$&&S(x.transmissionMap.channel),thicknessMapUv:be&&S(x.thicknessMap.channel),alphaMapUv:k&&S(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ve||He),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:tt,vertexUv3s:Qe,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(we||k),fog:!!H,useFog:x.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&ne.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&x.map.colorSpace===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ee&&x.extensions.derivatives===!0,extensionFragDepth:Ee&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const ne in x.defines)M.push(ne),M.push(x.defines[ne]);return x.isRawShaderMaterial===!1&&(w(M,x),b(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function w(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function T(x){const M=y[x.type];let ne;if(M){const z=yi[M];ne=hh.clone(z.uniforms)}else ne=x.uniforms;return ne}function A(x,M){let ne;for(let z=0,O=d.length;z<O;z++){const H=d[z];if(H.cacheKey===M){ne=H,++ne.usedTimes;break}}return ne===void 0&&(ne=new MS(i,M,x,a),d.push(ne)),ne}function D(x){if(--x.usedTimes===0){const M=d.indexOf(x);d[M]=d[d.length-1],d.pop(),x.destroy()}}function C(x){c.remove(x)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:A,releaseProgram:D,releaseShaderCache:C,programs:d,dispose:V}}function RS(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function CS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _u(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(h,f,g,y,S,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:g,groupOrder:y,renderOrder:h.renderOrder,z:S,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=g,m.groupOrder=y,m.renderOrder=h.renderOrder,m.z=S,m.group=p),e++,m}function o(h,f,g,y,S,p){const m=l(h,f,g,y,S,p);g.transmission>0?n.push(m):g.transparent===!0?r.push(m):t.push(m)}function c(h,f,g,y,S,p){const m=l(h,f,g,y,S,p);g.transmission>0?n.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function d(h,f){t.length>1&&t.sort(h||CS),n.length>1&&n.sort(f||gu),r.length>1&&r.sort(f||gu)}function u(){for(let h=e,f=i.length;h<f;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:u,sort:d}}function PS(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new _u,i.set(n,[l])):r>=a.length?(l=new _u,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function LS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new Bt};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return i[e.id]=t,t}}}function IS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let DS=0;function US(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kS(i,e){const t=new LS,n=IS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new ue);const a=new ue,l=new ln,o=new ln;function c(u,h){let f=0,g=0,y=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let S=0,p=0,m=0,w=0,b=0,T=0,A=0,D=0,C=0,V=0;u.sort(US);const x=h===!0?Math.PI:1;for(let ne=0,z=u.length;ne<z;ne++){const O=u[ne],H=O.color,X=O.intensity,ge=O.distance,le=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=H.r*X*x,g+=H.g*X*x,y+=H.b*X*x;else if(O.isLightProbe)for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(O.sh.coefficients[ce],X);else if(O.isDirectionalLight){const ce=t.get(O);if(ce.color.copy(O.color).multiplyScalar(O.intensity*x),O.castShadow){const me=O.shadow,ee=n.get(O);ee.shadowBias=me.bias,ee.shadowNormalBias=me.normalBias,ee.shadowRadius=me.radius,ee.shadowMapSize=me.mapSize,r.directionalShadow[S]=ee,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=O.shadow.matrix,T++}r.directional[S]=ce,S++}else if(O.isSpotLight){const ce=t.get(O);ce.position.setFromMatrixPosition(O.matrixWorld),ce.color.copy(H).multiplyScalar(X*x),ce.distance=ge,ce.coneCos=Math.cos(O.angle),ce.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ce.decay=O.decay,r.spot[m]=ce;const me=O.shadow;if(O.map&&(r.spotLightMap[C]=O.map,C++,me.updateMatrices(O),O.castShadow&&V++),r.spotLightMatrix[m]=me.matrix,O.castShadow){const ee=n.get(O);ee.shadowBias=me.bias,ee.shadowNormalBias=me.normalBias,ee.shadowRadius=me.radius,ee.shadowMapSize=me.mapSize,r.spotShadow[m]=ee,r.spotShadowMap[m]=le,D++}m++}else if(O.isRectAreaLight){const ce=t.get(O);ce.color.copy(H).multiplyScalar(X),ce.halfWidth.set(O.width*.5,0,0),ce.halfHeight.set(0,O.height*.5,0),r.rectArea[w]=ce,w++}else if(O.isPointLight){const ce=t.get(O);if(ce.color.copy(O.color).multiplyScalar(O.intensity*x),ce.distance=O.distance,ce.decay=O.decay,O.castShadow){const me=O.shadow,ee=n.get(O);ee.shadowBias=me.bias,ee.shadowNormalBias=me.normalBias,ee.shadowRadius=me.radius,ee.shadowMapSize=me.mapSize,ee.shadowCameraNear=me.camera.near,ee.shadowCameraFar=me.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=le,r.pointShadowMatrix[p]=O.shadow.matrix,A++}r.point[p]=ce,p++}else if(O.isHemisphereLight){const ce=t.get(O);ce.skyColor.copy(O.color).multiplyScalar(X*x),ce.groundColor.copy(O.groundColor).multiplyScalar(X*x),r.hemi[b]=ce,b++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=et.LTC_FLOAT_1,r.rectAreaLTC2=et.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=et.LTC_HALF_1,r.rectAreaLTC2=et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=y;const M=r.hash;(M.directionalLength!==S||M.pointLength!==p||M.spotLength!==m||M.rectAreaLength!==w||M.hemiLength!==b||M.numDirectionalShadows!==T||M.numPointShadows!==A||M.numSpotShadows!==D||M.numSpotMaps!==C)&&(r.directional.length=S,r.spot.length=m,r.rectArea.length=w,r.point.length=p,r.hemi.length=b,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=D+C-V,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=V,M.directionalLength=S,M.pointLength=p,M.spotLength=m,M.rectAreaLength=w,M.hemiLength=b,M.numDirectionalShadows=T,M.numPointShadows=A,M.numSpotShadows=D,M.numSpotMaps=C,r.version=DS++)}function d(u,h){let f=0,g=0,y=0,S=0,p=0;const m=h.matrixWorldInverse;for(let w=0,b=u.length;w<b;w++){const T=u[w];if(T.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(m),f++}else if(T.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(m),y++}else if(T.isRectAreaLight){const A=r.rectArea[S];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),o.identity(),l.copy(T.matrixWorld),l.premultiply(m),o.extractRotation(l),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),S++}else if(T.isPointLight){const A=r.point[g];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(m),g++}else if(T.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:c,setupView:d,state:r}}function xu(i,e){const t=new kS(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(h){n.push(h)}function o(h){r.push(h)}function c(h){t.setup(n,h)}function d(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:d,pushLight:l,pushShadow:o}}function NS(i,e){let t=new WeakMap;function n(a,l=0){const o=t.get(a);let c;return o===void 0?(c=new xu(i,e),t.set(a,[c])):l>=o.length?(c=new xu(i,e),o.push(c)):c=o[l],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class OS extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FS extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
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
}`;function GS(i,e,t){let n=new fc;const r=new bt,a=new bt,l=new $t,o=new OS({depthPacking:Ix}),c=new FS,d={},u=t.maxTextureSize,h={[Ci]:zn,[zn]:Ci,[ri]:ri},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:BS,fragmentShader:zS}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const y=new $i;y.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Yt(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vf;let m=this.type;this.render=function(A,D,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const V=i.getRenderTarget(),x=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(qi),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const z=m!==zi&&this.type===zi,O=m===zi&&this.type!==zi;for(let H=0,X=A.length;H<X;H++){const ge=A[H],le=ge.shadow;if(le===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;r.copy(le.mapSize);const ce=le.getFrameExtents();if(r.multiply(ce),a.copy(le.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ce.x),r.x=a.x*ce.x,le.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ce.y),r.y=a.y*ce.y,le.mapSize.y=a.y)),le.map===null||z===!0||O===!0){const ee=this.type!==zi?{minFilter:tn,magFilter:tn}:{};le.map!==null&&le.map.dispose(),le.map=new Zi(r.x,r.y,ee),le.map.texture.name=ge.name+".shadowMap",le.camera.updateProjectionMatrix()}i.setRenderTarget(le.map),i.clear();const me=le.getViewportCount();for(let ee=0;ee<me;ee++){const W=le.getViewport(ee);l.set(a.x*W.x,a.y*W.y,a.x*W.z,a.y*W.w),ne.viewport(l),le.updateMatrices(ge,ee),n=le.getFrustum(),T(D,C,le.camera,ge,this.type)}le.isPointLightShadow!==!0&&this.type===zi&&w(le,C),le.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(V,x,M)};function w(A,D){const C=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,C,f,S,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,C,g,S,null)}function b(A,D,C,V){let x=null;const M=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)x=M;else if(x=C.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ne=x.uuid,z=D.uuid;let O=d[ne];O===void 0&&(O={},d[ne]=O);let H=O[z];H===void 0&&(H=x.clone(),O[z]=H),x=H}if(x.visible=D.visible,x.wireframe=D.wireframe,V===zi?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:h[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const ne=i.properties.get(x);ne.light=C}return x}function T(A,D,C,V,x){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===zi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=e.update(A),O=A.material;if(Array.isArray(O)){const H=z.groups;for(let X=0,ge=H.length;X<ge;X++){const le=H[X],ce=O[le.materialIndex];if(ce&&ce.visible){const me=b(A,ce,V,x);i.renderBufferDirect(C,null,z,me,A,le)}}}else if(O.visible){const H=b(A,O,V,x);i.renderBufferDirect(C,null,z,H,A,null)}}const ne=A.children;for(let z=0,O=ne.length;z<O;z++)T(ne[z],D,C,V,x)}}function HS(i,e,t){const n=t.isWebGL2;function r(){let k=!1;const Ae=new $t;let ie=null;const Ee=new $t(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!k&&(i.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,tt,Qe,Je,dt){dt===!0&&(Ie*=Je,tt*=Je,Qe*=Je),Ae.set(Ie,tt,Qe,Je),Ee.equals(Ae)===!1&&(i.clearColor(Ie,tt,Qe,Je),Ee.copy(Ae))},reset:function(){k=!1,ie=null,Ee.set(-1,0,0,0)}}}function a(){let k=!1,Ae=null,ie=null,Ee=null;return{setTest:function(Ie){Ie?qe(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(Ie){Ae!==Ie&&!k&&(i.depthMask(Ie),Ae=Ie)},setFunc:function(Ie){if(ie!==Ie){switch(Ie){case ox:i.depthFunc(i.NEVER);break;case lx:i.depthFunc(i.ALWAYS);break;case cx:i.depthFunc(i.LESS);break;case Dl:i.depthFunc(i.LEQUAL);break;case dx:i.depthFunc(i.EQUAL);break;case ux:i.depthFunc(i.GEQUAL);break;case fx:i.depthFunc(i.GREATER);break;case hx:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Ie}},setLocked:function(Ie){k=Ie},setClear:function(Ie){Ee!==Ie&&(i.clearDepth(Ie),Ee=Ie)},reset:function(){k=!1,Ae=null,ie=null,Ee=null}}}function l(){let k=!1,Ae=null,ie=null,Ee=null,Ie=null,tt=null,Qe=null,Je=null,dt=null;return{setTest:function(ht){k||(ht?qe(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(ht){Ae!==ht&&!k&&(i.stencilMask(ht),Ae=ht)},setFunc:function(ht,ut,vt){(ie!==ht||Ee!==ut||Ie!==vt)&&(i.stencilFunc(ht,ut,vt),ie=ht,Ee=ut,Ie=vt)},setOp:function(ht,ut,vt){(tt!==ht||Qe!==ut||Je!==vt)&&(i.stencilOp(ht,ut,vt),tt=ht,Qe=ut,Je=vt)},setLocked:function(ht){k=ht},setClear:function(ht){dt!==ht&&(i.clearStencil(ht),dt=ht)},reset:function(){k=!1,Ae=null,ie=null,Ee=null,Ie=null,tt=null,Qe=null,Je=null,dt=null}}}const o=new r,c=new a,d=new l,u=new WeakMap,h=new WeakMap;let f={},g={},y=new WeakMap,S=[],p=null,m=!1,w=null,b=null,T=null,A=null,D=null,C=null,V=null,x=!1,M=null,ne=null,z=null,O=null,H=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ge=!1,le=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ge=le>=1):ce.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ge=le>=2);let me=null,ee={};const W=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),Pe=new $t().fromArray(W),Ce=new $t().fromArray(re);function Fe(k,Ae,ie,Ee){const Ie=new Uint8Array(4),tt=i.createTexture();i.bindTexture(k,tt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ie;Qe++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ae,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Ae+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return tt}const Ve={};Ve[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ve[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ve[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ve[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),qe(i.DEPTH_TEST),c.setFunc(Dl),Le(!1),Oe(rd),qe(i.CULL_FACE),ze(qi);function qe(k){f[k]!==!0&&(i.enable(k),f[k]=!0)}function Xe(k){f[k]!==!1&&(i.disable(k),f[k]=!1)}function we(k,Ae){return g[k]!==Ae?(i.bindFramebuffer(k,Ae),g[k]=Ae,n&&(k===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Ae),k===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function Te(k,Ae){let ie=S,Ee=!1;if(k)if(ie=y.get(Ae),ie===void 0&&(ie=[],y.set(Ae,ie)),k.isWebGLMultipleRenderTargets){const Ie=k.texture;if(ie.length!==Ie.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Qe=Ie.length;tt<Qe;tt++)ie[tt]=i.COLOR_ATTACHMENT0+tt;ie.length=Ie.length,Ee=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,Ee=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Re(k){return p!==k?(i.useProgram(k),p=k,!0):!1}const F={[ra]:i.FUNC_ADD,[Z_]:i.FUNC_SUBTRACT,[J_]:i.FUNC_REVERSE_SUBTRACT};if(n)F[ld]=i.MIN,F[cd]=i.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(F[ld]=k.MIN_EXT,F[cd]=k.MAX_EXT)}const st={[Q_]:i.ZERO,[$_]:i.ONE,[ex]:i.SRC_COLOR,[Wf]:i.SRC_ALPHA,[sx]:i.SRC_ALPHA_SATURATE,[rx]:i.DST_COLOR,[nx]:i.DST_ALPHA,[tx]:i.ONE_MINUS_SRC_COLOR,[jf]:i.ONE_MINUS_SRC_ALPHA,[ax]:i.ONE_MINUS_DST_COLOR,[ix]:i.ONE_MINUS_DST_ALPHA};function ze(k,Ae,ie,Ee,Ie,tt,Qe,Je){if(k===qi){m===!0&&(Xe(i.BLEND),m=!1);return}if(m===!1&&(qe(i.BLEND),m=!0),k!==K_){if(k!==w||Je!==x){if((b!==ra||D!==ra)&&(i.blendEquation(i.FUNC_ADD),b=ra,D=ra),Je)switch(k){case ua:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFunc(i.ONE,i.ONE);break;case sd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case od:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ua:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case od:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}T=null,A=null,C=null,V=null,w=k,x=Je}return}Ie=Ie||Ae,tt=tt||ie,Qe=Qe||Ee,(Ae!==b||Ie!==D)&&(i.blendEquationSeparate(F[Ae],F[Ie]),b=Ae,D=Ie),(ie!==T||Ee!==A||tt!==C||Qe!==V)&&(i.blendFuncSeparate(st[ie],st[Ee],st[tt],st[Qe]),T=ie,A=Ee,C=tt,V=Qe),w=k,x=!1}function ve(k,Ae){k.side===ri?Xe(i.CULL_FACE):qe(i.CULL_FACE);let ie=k.side===zn;Ae&&(ie=!ie),Le(ie),k.blending===ua&&k.transparent===!1?ze(qi):ze(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),o.setMask(k.colorWrite);const Ee=k.stencilWrite;d.setTest(Ee),Ee&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?qe(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function Oe(k){k!==X_?(qe(i.CULL_FACE),k!==ne&&(k===rd?i.cullFace(i.BACK):k===q_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),ne=k}function De(k){k!==z&&(ge&&i.lineWidth(k),z=k)}function Ge(k,Ae,ie){k?(qe(i.POLYGON_OFFSET_FILL),(O!==Ae||H!==ie)&&(i.polygonOffset(Ae,ie),O=Ae,H=ie)):Xe(i.POLYGON_OFFSET_FILL)}function He(k){k?qe(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function it(k){k===void 0&&(k=i.TEXTURE0+X-1),me!==k&&(i.activeTexture(k),me=k)}function nt(k,Ae,ie){ie===void 0&&(me===null?ie=i.TEXTURE0+X-1:ie=me);let Ee=ee[ie];Ee===void 0&&(Ee={type:void 0,texture:void 0},ee[ie]=Ee),(Ee.type!==k||Ee.texture!==Ae)&&(me!==ie&&(i.activeTexture(ie),me=ie),i.bindTexture(k,Ae||Ve[k]),Ee.type=k,Ee.texture=Ae)}function I(){const k=ee[me];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function L(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(k){Pe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Pe.copy(k))}function B(k){Ce.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ce.copy(k))}function $(k,Ae){let ie=h.get(Ae);ie===void 0&&(ie=new WeakMap,h.set(Ae,ie));let Ee=ie.get(k);Ee===void 0&&(Ee=i.getUniformBlockIndex(Ae,k.name),ie.set(k,Ee))}function be(k,Ae){const Ee=h.get(Ae).get(k);u.get(Ae)!==Ee&&(i.uniformBlockBinding(Ae,Ee,k.__bindingPointIndex),u.set(Ae,Ee))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},me=null,ee={},g={},y=new WeakMap,S=[],p=null,m=!1,w=null,b=null,T=null,A=null,D=null,C=null,V=null,x=!1,M=null,ne=null,z=null,O=null,H=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:qe,disable:Xe,bindFramebuffer:we,drawBuffers:Te,useProgram:Re,setBlending:ze,setMaterial:ve,setFlipSided:Le,setCullFace:Oe,setLineWidth:De,setPolygonOffset:Ge,setScissorTest:He,activeTexture:it,bindTexture:nt,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:K,texImage2D:L,texImage3D:G,updateUBOMapping:$,uniformBlockBinding:be,texStorage2D:pe,texStorage3D:Q,texSubImage2D:Se,texSubImage3D:j,compressedTexSubImage2D:fe,compressedTexSubImage3D:de,scissor:he,viewport:B,reset:Ue}}function VS(i,e,t,n,r,a,l){const o=r.isWebGL2,c=r.maxTextures,d=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let S;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,E){return m?new OffscreenCanvas(I,E):co("canvas")}function b(I,E,K,Se){let j=1;if((I.width>Se||I.height>Se)&&(j=Se/Math.max(I.width,I.height)),j<1||E===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const fe=E?zl:Math.floor,de=fe(j*I.width),pe=fe(j*I.height);S===void 0&&(S=w(de,pe));const Q=K?w(de,pe):S;return Q.width=de,Q.height=pe,Q.getContext("2d").drawImage(I,0,0,de,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+de+"x"+pe+")."),Q}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function T(I){return Od(I.width)&&Od(I.height)}function A(I){return o?!1:I.wrapS!==di||I.wrapT!==di||I.minFilter!==tn&&I.minFilter!==ni}function D(I,E){return I.generateMipmaps&&E&&I.minFilter!==tn&&I.minFilter!==ni}function C(I){i.generateMipmap(I)}function V(I,E,K,Se,j=!1){if(o===!1)return E;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=E;return E===i.RED&&(K===i.FLOAT&&(fe=i.R32F),K===i.HALF_FLOAT&&(fe=i.R16F),K===i.UNSIGNED_BYTE&&(fe=i.R8)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(fe=i.R8UI),K===i.UNSIGNED_SHORT&&(fe=i.R16UI),K===i.UNSIGNED_INT&&(fe=i.R32UI),K===i.BYTE&&(fe=i.R8I),K===i.SHORT&&(fe=i.R16I),K===i.INT&&(fe=i.R32I)),E===i.RG&&(K===i.FLOAT&&(fe=i.RG32F),K===i.HALF_FLOAT&&(fe=i.RG16F),K===i.UNSIGNED_BYTE&&(fe=i.RG8)),E===i.RGBA&&(K===i.FLOAT&&(fe=i.RGBA32F),K===i.HALF_FLOAT&&(fe=i.RGBA16F),K===i.UNSIGNED_BYTE&&(fe=Se===Qt&&j===!1?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)),(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function x(I,E,K){return D(I,K)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==ni?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function M(I){return I===tn||I===dd||I===Bo?i.NEAREST:i.LINEAR}function ne(I){const E=I.target;E.removeEventListener("dispose",ne),O(E),E.isVideoTexture&&y.delete(E)}function z(I){const E=I.target;E.removeEventListener("dispose",z),X(E)}function O(I){const E=n.get(I);if(E.__webglInit===void 0)return;const K=I.source,Se=p.get(K);if(Se){const j=Se[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(I),Object.keys(Se).length===0&&p.delete(K)}n.remove(I)}function H(I){const E=n.get(I);i.deleteTexture(E.__webglTexture);const K=I.source,Se=p.get(K);delete Se[E.__cacheKey],l.memory.textures--}function X(I){const E=I.texture,K=n.get(I),Se=n.get(E);if(Se.__webglTexture!==void 0&&(i.deleteTexture(Se.__webglTexture),l.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(K.__webglFramebuffer[j]))for(let fe=0;fe<K.__webglFramebuffer[j].length;fe++)i.deleteFramebuffer(K.__webglFramebuffer[j][fe]);else i.deleteFramebuffer(K.__webglFramebuffer[j]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[j])}else{if(Array.isArray(K.__webglFramebuffer))for(let j=0;j<K.__webglFramebuffer.length;j++)i.deleteFramebuffer(K.__webglFramebuffer[j]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let j=0;j<K.__webglColorRenderbuffer.length;j++)K.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[j]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let j=0,fe=E.length;j<fe;j++){const de=n.get(E[j]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),l.memory.textures--),n.remove(E[j])}n.remove(E),n.remove(I)}let ge=0;function le(){ge=0}function ce(){const I=ge;return I>=c&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+c),ge+=1,I}function me(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ee(I,E){const K=n.get(I);if(I.isVideoTexture&&it(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const Se=I.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,I,E);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function W(I,E){const K=n.get(I);if(I.version>0&&K.__version!==I.version){we(K,I,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function re(I,E){const K=n.get(I);if(I.version>0&&K.__version!==I.version){we(K,I,E);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function Pe(I,E){const K=n.get(I);if(I.version>0&&K.__version!==I.version){Te(K,I,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}const Ce={[kl]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Nl]:i.MIRRORED_REPEAT},Fe={[tn]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[Bo]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[yx]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Ve={[kx]:i.NEVER,[Hx]:i.ALWAYS,[Nx]:i.LESS,[Fx]:i.LEQUAL,[Ox]:i.EQUAL,[Gx]:i.GEQUAL,[Bx]:i.GREATER,[zx]:i.NOTEQUAL};function qe(I,E,K){if(K?(i.texParameteri(I,i.TEXTURE_WRAP_S,Ce[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Ce[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Ce[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Fe[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Fe[E.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==di||E.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,M(E.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,M(E.minFilter)),E.minFilter!==tn&&E.minFilter!==ni&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Se=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===tn||E.minFilter!==Bo&&E.minFilter!==ls||E.type===Wi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ma&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(I,Se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Xe(I,E){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",ne));const Se=E.source;let j=p.get(Se);j===void 0&&(j={},p.set(Se,j));const fe=me(E);if(fe!==I.__cacheKey){j[fe]===void 0&&(j[fe]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,K=!0),j[fe].usedTimes++;const de=j[I.__cacheKey];de!==void 0&&(j[I.__cacheKey].usedTimes--,de.usedTimes===0&&H(E)),I.__cacheKey=fe,I.__webglTexture=j[fe].texture}return K}function we(I,E,K){let Se=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Se=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Se=i.TEXTURE_3D);const j=Xe(I,E),fe=E.source;t.bindTexture(Se,I.__webglTexture,i.TEXTURE0+K);const de=n.get(fe);if(fe.version!==de.__version||j===!0){t.activeTexture(i.TEXTURE0+K),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const pe=A(E)&&T(E.image)===!1;let Q=b(E.image,pe,!1,u);Q=nt(E,Q);const L=T(Q)||o,G=a.convert(E.format,E.colorSpace);let he=a.convert(E.type),B=V(E.internalFormat,G,he,E.colorSpace,E.isVideoTexture);qe(Se,E,L);let $;const be=E.mipmaps,Ue=o&&E.isVideoTexture!==!0,k=de.__version===void 0||j===!0,Ae=x(E,Q,L);if(E.isDepthTexture)B=i.DEPTH_COMPONENT,o?E.type===Wi?B=i.DEPTH_COMPONENT32F:E.type===sr?B=i.DEPTH_COMPONENT24:E.type===Ar?B=i.DEPTH24_STENCIL8:B=i.DEPTH_COMPONENT16:E.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Rr&&B===i.DEPTH_COMPONENT&&E.type!==dc&&E.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=sr,he=a.convert(E.type)),E.format===wa&&B===i.DEPTH_COMPONENT&&(B=i.DEPTH_STENCIL,E.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ar,he=a.convert(E.type))),k&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,B,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,B,Q.width,Q.height,0,G,he,null));else if(E.isDataTexture)if(be.length>0&&L){Ue&&k&&t.texStorage2D(i.TEXTURE_2D,Ae,B,be[0].width,be[0].height);for(let ie=0,Ee=be.length;ie<Ee;ie++)$=be[ie],Ue?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,$.width,$.height,G,he,$.data):t.texImage2D(i.TEXTURE_2D,ie,B,$.width,$.height,0,G,he,$.data);E.generateMipmaps=!1}else Ue?(k&&t.texStorage2D(i.TEXTURE_2D,Ae,B,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,G,he,Q.data)):t.texImage2D(i.TEXTURE_2D,0,B,Q.width,Q.height,0,G,he,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&k&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,B,be[0].width,be[0].height,Q.depth);for(let ie=0,Ee=be.length;ie<Ee;ie++)$=be[ie],E.format!==ui?G!==null?Ue?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,$.width,$.height,Q.depth,G,$.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,B,$.width,$.height,Q.depth,0,$.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,$.width,$.height,Q.depth,G,he,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,B,$.width,$.height,Q.depth,0,G,he,$.data)}else{Ue&&k&&t.texStorage2D(i.TEXTURE_2D,Ae,B,be[0].width,be[0].height);for(let ie=0,Ee=be.length;ie<Ee;ie++)$=be[ie],E.format!==ui?G!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,$.width,$.height,G,$.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,B,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,$.width,$.height,G,he,$.data):t.texImage2D(i.TEXTURE_2D,ie,B,$.width,$.height,0,G,he,$.data)}else if(E.isDataArrayTexture)Ue?(k&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,B,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,G,he,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,B,Q.width,Q.height,Q.depth,0,G,he,Q.data);else if(E.isData3DTexture)Ue?(k&&t.texStorage3D(i.TEXTURE_3D,Ae,B,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,G,he,Q.data)):t.texImage3D(i.TEXTURE_3D,0,B,Q.width,Q.height,Q.depth,0,G,he,Q.data);else if(E.isFramebufferTexture){if(k)if(Ue)t.texStorage2D(i.TEXTURE_2D,Ae,B,Q.width,Q.height);else{let ie=Q.width,Ee=Q.height;for(let Ie=0;Ie<Ae;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,B,ie,Ee,0,G,he,null),ie>>=1,Ee>>=1}}else if(be.length>0&&L){Ue&&k&&t.texStorage2D(i.TEXTURE_2D,Ae,B,be[0].width,be[0].height);for(let ie=0,Ee=be.length;ie<Ee;ie++)$=be[ie],Ue?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,G,he,$):t.texImage2D(i.TEXTURE_2D,ie,B,G,he,$);E.generateMipmaps=!1}else Ue?(k&&t.texStorage2D(i.TEXTURE_2D,Ae,B,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,G,he,Q)):t.texImage2D(i.TEXTURE_2D,0,B,G,he,Q);D(E,L)&&C(Se),de.__version=fe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Te(I,E,K){if(E.image.length!==6)return;const Se=Xe(I,E),j=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+K);const fe=n.get(j);if(j.version!==fe.__version||Se===!0){t.activeTexture(i.TEXTURE0+K),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,pe=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!de&&!pe?Q[ie]=b(E.image[ie],!1,!0,d):Q[ie]=pe?E.image[ie].image:E.image[ie],Q[ie]=nt(E,Q[ie]);const L=Q[0],G=T(L)||o,he=a.convert(E.format,E.colorSpace),B=a.convert(E.type),$=V(E.internalFormat,he,B,E.colorSpace),be=o&&E.isVideoTexture!==!0,Ue=fe.__version===void 0||Se===!0;let k=x(E,L,G);qe(i.TEXTURE_CUBE_MAP,E,G);let Ae;if(de){be&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,k,$,L.width,L.height);for(let ie=0;ie<6;ie++){Ae=Q[ie].mipmaps;for(let Ee=0;Ee<Ae.length;Ee++){const Ie=Ae[Ee];E.format!==ui?he!==null?be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,Ie.width,Ie.height,he,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,$,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,Ie.width,Ie.height,he,B,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,$,Ie.width,Ie.height,0,he,B,Ie.data)}}}else{Ae=E.mipmaps,be&&Ue&&(Ae.length>0&&k++,t.texStorage2D(i.TEXTURE_CUBE_MAP,k,$,Q[0].width,Q[0].height));for(let ie=0;ie<6;ie++)if(pe){be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q[ie].width,Q[ie].height,he,B,Q[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$,Q[ie].width,Q[ie].height,0,he,B,Q[ie].data);for(let Ee=0;Ee<Ae.length;Ee++){const tt=Ae[Ee].image[ie].image;be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,tt.width,tt.height,he,B,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,$,tt.width,tt.height,0,he,B,tt.data)}}else{be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,he,B,Q[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$,he,B,Q[ie]);for(let Ee=0;Ee<Ae.length;Ee++){const Ie=Ae[Ee];be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,he,B,Ie.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,$,he,B,Ie.image[ie])}}}D(E,G)&&C(i.TEXTURE_CUBE_MAP),fe.__version=j.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Re(I,E,K,Se,j,fe){const de=a.convert(K.format,K.colorSpace),pe=a.convert(K.type),Q=V(K.internalFormat,de,pe,K.colorSpace);if(!n.get(E).__hasExternalTextures){const G=Math.max(1,E.width>>fe),he=Math.max(1,E.height>>fe);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,fe,Q,G,he,E.depth,0,de,pe,null):t.texImage2D(j,fe,Q,G,he,0,de,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),He(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,j,n.get(K).__webglTexture,0,Ge(E)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Se,j,n.get(K).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(I,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer&&!E.stencilBuffer){let Se=i.DEPTH_COMPONENT16;if(K||He(E)){const j=E.depthTexture;j&&j.isDepthTexture&&(j.type===Wi?Se=i.DEPTH_COMPONENT32F:j.type===sr&&(Se=i.DEPTH_COMPONENT24));const fe=Ge(E);He(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Se,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Se,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,Se,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(E.depthBuffer&&E.stencilBuffer){const Se=Ge(E);K&&He(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,E.width,E.height):He(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const Se=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let j=0;j<Se.length;j++){const fe=Se[j],de=a.convert(fe.format,fe.colorSpace),pe=a.convert(fe.type),Q=V(fe.internalFormat,de,pe,fe.colorSpace),L=Ge(E);K&&He(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,Q,E.width,E.height):He(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,Q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Q,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ee(E.depthTexture,0);const Se=n.get(E.depthTexture).__webglTexture,j=Ge(E);if(E.depthTexture.format===Rr)He(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0);else if(E.depthTexture.format===wa)He(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function ze(I){const E=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");st(E.__webglFramebuffer,I)}else if(K){E.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Se]),E.__webglDepthbuffer[Se]=i.createRenderbuffer(),F(E.__webglDepthbuffer[Se],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),F(E.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(I,E,K){const Se=n.get(I);E!==void 0&&Re(Se.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ze(I)}function Le(I){const E=I.texture,K=n.get(I),Se=n.get(E);I.addEventListener("dispose",z),I.isWebGLMultipleRenderTargets!==!0&&(Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture()),Se.__version=E.version,l.memory.textures++);const j=I.isWebGLCubeRenderTarget===!0,fe=I.isWebGLMultipleRenderTargets===!0,de=T(I)||o;if(j){K.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[pe]=[];for(let Q=0;Q<E.mipmaps.length;Q++)K.__webglFramebuffer[pe][Q]=i.createFramebuffer()}else K.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)K.__webglFramebuffer[pe]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(fe)if(r.drawBuffers){const pe=I.texture;for(let Q=0,L=pe.length;Q<L;Q++){const G=n.get(pe[Q]);G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&He(I)===!1){const pe=fe?E:[E];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Q=0;Q<pe.length;Q++){const L=pe[Q];K.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Q]);const G=a.convert(L.format,L.colorSpace),he=a.convert(L.type),B=V(L.internalFormat,G,he,L.colorSpace,I.isXRRenderTarget===!0),$=Ge(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,B,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,K.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),F(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Se.__webglTexture),qe(i.TEXTURE_CUBE_MAP,E,de);for(let pe=0;pe<6;pe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Re(K.__webglFramebuffer[pe][Q],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Q);else Re(K.__webglFramebuffer[pe],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);D(E,de)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const pe=I.texture;for(let Q=0,L=pe.length;Q<L;Q++){const G=pe[Q],he=n.get(G);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),qe(i.TEXTURE_2D,G,de),Re(K.__webglFramebuffer,I,G,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),D(G,de)&&C(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?pe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,Se.__webglTexture),qe(pe,E,de),o&&E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Re(K.__webglFramebuffer[Q],I,E,i.COLOR_ATTACHMENT0,pe,Q);else Re(K.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,pe,0);D(E,de)&&C(pe),t.unbindTexture()}I.depthBuffer&&ze(I)}function Oe(I){const E=T(I)||o,K=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let Se=0,j=K.length;Se<j;Se++){const fe=K[Se];if(D(fe,E)){const de=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(fe).__webglTexture;t.bindTexture(de,pe),C(de),t.unbindTexture()}}}function De(I){if(o&&I.samples>0&&He(I)===!1){const E=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],K=I.width,Se=I.height;let j=i.COLOR_BUFFER_BIT;const fe=[],de=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(I),Q=I.isWebGLMultipleRenderTargets===!0;if(Q)for(let L=0;L<E.length;L++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let L=0;L<E.length;L++){fe.push(i.COLOR_ATTACHMENT0+L),I.depthBuffer&&fe.push(de);const G=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(G===!1&&(I.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Q&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[L]),G===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[de]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[de])),Q){const he=n.get(E[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,K,Se,0,0,K,Se,j,i.NEAREST),g&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let L=0;L<E.length;L++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,pe.__webglColorRenderbuffer[L]);const G=n.get(E[L]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,G,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Ge(I){return Math.min(h,I.samples)}function He(I){const E=n.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function it(I){const E=l.render.frame;y.get(I)!==E&&(y.set(I,E),I.update())}function nt(I,E){const K=I.colorSpace,Se=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Fl||K!==Pi&&K!==Pr&&(K===Qt||K===bo?o===!1?e.has("EXT_sRGB")===!0&&Se===ui?(I.format=Fl,I.minFilter=ni,I.generateMipmaps=!1):E=ih.sRGBToLinear(E):(Se!==ui||j!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}this.allocateTextureUnit=ce,this.resetTextureUnits=le,this.setTexture2D=ee,this.setTexture2DArray=W,this.setTexture3D=re,this.setTextureCube=Pe,this.rebindTextures=ve,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=He}const WS=0,hn=1;function jS(i,e,t){const n=t.isWebGL2;function r(a,l=Pr){let o;const c=l===Qt||l===bo?hn:WS;if(a===cr)return i.UNSIGNED_BYTE;if(a===Kf)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Zf)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Sx)return i.BYTE;if(a===Mx)return i.SHORT;if(a===dc)return i.UNSIGNED_SHORT;if(a===Yf)return i.INT;if(a===sr)return i.UNSIGNED_INT;if(a===Wi)return i.FLOAT;if(a===Ma)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===wx)return i.ALPHA;if(a===ui)return i.RGBA;if(a===Ex)return i.LUMINANCE;if(a===Tx)return i.LUMINANCE_ALPHA;if(a===Rr)return i.DEPTH_COMPONENT;if(a===wa)return i.DEPTH_STENCIL;if(a===Fl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Ax)return i.RED;if(a===Jf)return i.RED_INTEGER;if(a===Rx)return i.RG;if(a===Qf)return i.RG_INTEGER;if(a===$f)return i.RGBA_INTEGER;if(a===zo||a===Go||a===Ho||a===Vo)if(c===hn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Go)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ho)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ud||a===fd||a===hd||a===pd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===ud)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===fd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===hd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===pd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===md||a===vd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===md)return c===hn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===vd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===gd||a===_d||a===xd||a===bd||a===yd||a===Sd||a===Md||a===wd||a===Ed||a===Td||a===Ad||a===Rd||a===Cd||a===Pd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===gd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===_d)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===xd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===bd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===yd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Sd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Md)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===wd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ed)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Td)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ad)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Rd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Cd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Pd)return c===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Wo||a===Ld||a===Id)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Wo)return c===hn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ld)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Id)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Px||a===Dd||a===Ud||a===kd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Wo)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Dd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ud)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===kd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ar?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class XS extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yn extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qS={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const o=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,n),m=this._getHandJoint(d,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],f=u.position.distanceTo(h.position),g=.02,y=.005;d.inputState.pinching&&f>g+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=g-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Sh extends Tn{constructor(e,t,n,r,a,l,o,c,d,u){if(u=u!==void 0?u:Rr,u!==Rr&&u!==wa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Rr&&(n=sr),n===void 0&&u===wa&&(n=Ar),super(null,r,a,l,o,c,u,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class YS extends Ur{constructor(e,t){super();const n=this;let r=null,a=1,l=null,o="local-floor",c=1,d=null,u=null,h=null,f=null,g=null,y=null;const S=t.getContextAttributes();let p=null,m=null;const w=[],b=[],T=new jn;T.layers.enable(1),T.viewport=new $t;const A=new jn;A.layers.enable(2),A.viewport=new $t;const D=[T,A],C=new XS;C.layers.enable(1),C.layers.enable(2);let V=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let re=w[W];return re===void 0&&(re=new hl,w[W]=re),re.getTargetRaySpace()},this.getControllerGrip=function(W){let re=w[W];return re===void 0&&(re=new hl,w[W]=re),re.getGripSpace()},this.getHand=function(W){let re=w[W];return re===void 0&&(re=new hl,w[W]=re),re.getHandSpace()};function M(W){const re=b.indexOf(W.inputSource);if(re===-1)return;const Pe=w[re];Pe!==void 0&&(Pe.update(W.inputSource,W.frame,d||l),Pe.dispatchEvent({type:W.type,data:W.inputSource}))}function ne(){r.removeEventListener("select",M),r.removeEventListener("selectstart",M),r.removeEventListener("selectend",M),r.removeEventListener("squeeze",M),r.removeEventListener("squeezestart",M),r.removeEventListener("squeezeend",M),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",z);for(let W=0;W<w.length;W++){const re=b[W];re!==null&&(b[W]=null,w[W].disconnect(re))}V=null,x=null,e.setRenderTarget(p),g=null,f=null,h=null,r=null,m=null,ee.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(W){d=W},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",M),r.addEventListener("selectstart",M),r.addEventListener("selectend",M),r.addEventListener("squeeze",M),r.addEventListener("squeezestart",M),r.addEventListener("squeezeend",M),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:g}),m=new Zi(g.framebufferWidth,g.framebufferHeight,{format:ui,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let re=null,Pe=null,Ce=null;S.depth&&(Ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=S.stencil?wa:Rr,Pe=S.stencil?Ar:sr);const Fe={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),m=new Zi(f.textureWidth,f.textureHeight,{format:ui,type:cr,depthTexture:new Sh(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Ve=e.properties.get(m);Ve.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),d=null,l=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(W){for(let re=0;re<W.removed.length;re++){const Pe=W.removed[re],Ce=b.indexOf(Pe);Ce>=0&&(b[Ce]=null,w[Ce].disconnect(Pe))}for(let re=0;re<W.added.length;re++){const Pe=W.added[re];let Ce=b.indexOf(Pe);if(Ce===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=b.length){b.push(Pe),Ce=Ve;break}else if(b[Ve]===null){b[Ve]=Pe,Ce=Ve;break}if(Ce===-1)break}const Fe=w[Ce];Fe&&Fe.connect(Pe)}}const O=new ue,H=new ue;function X(W,re,Pe){O.setFromMatrixPosition(re.matrixWorld),H.setFromMatrixPosition(Pe.matrixWorld);const Ce=O.distanceTo(H),Fe=re.projectionMatrix.elements,Ve=Pe.projectionMatrix.elements,qe=Fe[14]/(Fe[10]-1),Xe=Fe[14]/(Fe[10]+1),we=(Fe[9]+1)/Fe[5],Te=(Fe[9]-1)/Fe[5],Re=(Fe[8]-1)/Fe[0],F=(Ve[8]+1)/Ve[0],st=qe*Re,ze=qe*F,ve=Ce/(-Re+F),Le=ve*-Re;re.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Le),W.translateZ(ve),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Oe=qe+ve,De=Xe+ve,Ge=st-Le,He=ze+(Ce-Le),it=we*Xe/De*Oe,nt=Te*Xe/De*Oe;W.projectionMatrix.makePerspective(Ge,He,it,nt,Oe,De),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ge(W,re){re===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(re.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;C.near=A.near=T.near=W.near,C.far=A.far=T.far=W.far,(V!==C.near||x!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,x=C.far);const re=W.parent,Pe=C.cameras;ge(C,re);for(let Ce=0;Ce<Pe.length;Ce++)ge(Pe[Ce],re);Pe.length===2?X(C,T,A):C.projectionMatrix.copy(T.projectionMatrix),le(W,C,re)};function le(W,re,Pe){Pe===null?W.matrix.copy(re.matrixWorld):(W.matrix.copy(Pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(re.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Bl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)};let ce=null;function me(W,re){if(u=re.getViewerPose(d||l),y=re,u!==null){const Pe=u.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let Ce=!1;Pe.length!==C.cameras.length&&(C.cameras.length=0,Ce=!0);for(let Fe=0;Fe<Pe.length;Fe++){const Ve=Pe[Fe];let qe=null;if(g!==null)qe=g.getViewport(Ve);else{const we=h.getViewSubImage(f,Ve);qe=we.viewport,Fe===0&&(e.setRenderTargetTextures(m,we.colorTexture,f.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(m))}let Xe=D[Fe];Xe===void 0&&(Xe=new jn,Xe.layers.enable(Fe),Xe.viewport=new $t,D[Fe]=Xe),Xe.matrix.fromArray(Ve.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ve.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(qe.x,qe.y,qe.width,qe.height),Fe===0&&(C.matrix.copy(Xe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ce===!0&&C.cameras.push(Xe)}}for(let Pe=0;Pe<w.length;Pe++){const Ce=b[Pe],Fe=w[Pe];Ce!==null&&Fe!==void 0&&Fe.update(Ce,re,d||l)}ce&&ce(W,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),y=null}const ee=new vh;ee.setAnimationLoop(me),this.setAnimationLoop=function(W){ce=W},this.dispose=function(){}}}function KS(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,fh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,w,b,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(p,m):m.isMeshToonMaterial?(a(p,m),h(p,m)):m.isMeshPhongMaterial?(a(p,m),u(p,m)):m.isMeshStandardMaterial?(a(p,m),f(p,m),m.isMeshPhysicalMaterial&&g(p,m,T)):m.isMeshMatcapMaterial?(a(p,m),y(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),S(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(l(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,w,b):m.isSpriteMaterial?d(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===zn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===zn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=e.get(m).envMap;if(w&&(p.envMap.value=w,p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function d(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function g(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){const w=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ZS(i,e,t,n){let r={},a={},l=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,b){const T=b.program;n.uniformBlockBinding(w,T)}function d(w,b){let T=r[w.id];T===void 0&&(y(w),T=u(w),r[w.id]=T,w.addEventListener("dispose",p));const A=b.program;n.updateUBOMapping(w,A);const D=e.render.frame;a[w.id]!==D&&(f(w),a[w.id]=D)}function u(w){const b=h();w.__bindingPointIndex=b;const T=i.createBuffer(),A=w.__size,D=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function h(){for(let w=0;w<o;w++)if(l.indexOf(w)===-1)return l.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=r[w.id],T=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let D=0,C=T.length;D<C;D++){const V=T[D];if(g(V,D,A)===!0){const x=V.__offset,M=Array.isArray(V.value)?V.value:[V.value];let ne=0;for(let z=0;z<M.length;z++){const O=M[z],H=S(O);typeof O=="number"?(V.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,x+ne,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=O.elements[0],V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=O.elements[0],V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=O.elements[0]):(O.toArray(V.__data,ne),ne+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,V.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,b,T){const A=w.value;if(T[b]===void 0){if(typeof A=="number")T[b]=A;else{const D=Array.isArray(A)?A:[A],C=[];for(let V=0;V<D.length;V++)C.push(D[V].clone());T[b]=C}return!0}else if(typeof A=="number"){if(T[b]!==A)return T[b]=A,!0}else{const D=Array.isArray(T[b])?T[b]:[T[b]],C=Array.isArray(A)?A:[A];for(let V=0;V<D.length;V++){const x=D[V];if(x.equals(C[V])===!1)return x.copy(C[V]),!0}}return!1}function y(w){const b=w.uniforms;let T=0;const A=16;let D=0;for(let C=0,V=b.length;C<V;C++){const x=b[C],M={boundary:0,storage:0},ne=Array.isArray(x.value)?x.value:[x.value];for(let z=0,O=ne.length;z<O;z++){const H=ne[z],X=S(H);M.boundary+=X.boundary,M.storage+=X.storage}if(x.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=T,C>0){D=T%A;const z=A-D;D!==0&&z-M.boundary<0&&(T+=A-D,x.__offset=T)}T+=M.storage}return D=T%A,D>0&&(T+=A-D),w.__size=T,w.__cache={},this}function S(w){const b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){const b=w.target;b.removeEventListener("dispose",p);const T=l.indexOf(b.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function m(){for(const w in r)i.deleteBuffer(r[w]);l=[],r={},a={}}return{bind:c,update:d,dispose:m}}class Mh{constructor(e={}){const{canvas:t=jx(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=l;const g=new Uint32Array(4),y=new Int32Array(4);let S=null,p=null;const m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qt,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const b=this;let T=!1,A=0,D=0,C=null,V=-1,x=null;const M=new $t,ne=new $t;let z=null;const O=new Bt(0);let H=0,X=t.width,ge=t.height,le=1,ce=null,me=null;const ee=new $t(0,0,X,ge),W=new $t(0,0,X,ge);let re=!1;const Pe=new fc;let Ce=!1,Fe=!1,Ve=null;const qe=new ln,Xe=new bt,we=new ue,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return C===null?le:1}let F=n;function st(P,se){for(let _e=0;_e<P.length;_e++){const oe=P[_e],xe=t.getContext(oe,se);if(xe!==null)return xe}return null}try{const P={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),F===null){const se=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&se.shift(),F=st(se,P),F===null)throw st(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ze,ve,Le,Oe,De,Ge,He,it,nt,I,E,K,Se,j,fe,de,pe,Q,L,G,he,B,$,be;function Ue(){ze=new o1(F),ve=new t1(F,ze,e),ze.init(ve),B=new jS(F,ze,ve),Le=new HS(F,ze,ve),Oe=new d1(F),De=new RS,Ge=new VS(F,ze,Le,De,ve,B,Oe),He=new i1(b),it=new s1(b),nt=new bb(F,ve),$=new $y(F,ze,nt,ve),I=new l1(F,nt,Oe,$),E=new p1(F,I,nt,Oe),L=new h1(F,ve,Ge),de=new n1(De),K=new AS(b,He,it,ze,ve,$,de),Se=new KS(b,De),j=new PS,fe=new NS(ze,ve),Q=new Qy(b,He,it,Le,E,f,c),pe=new GS(b,E,ve),be=new ZS(F,Oe,ve,Le),G=new e1(F,ze,Oe,ve),he=new c1(F,ze,Oe,ve),Oe.programs=K.programs,b.capabilities=ve,b.extensions=ze,b.properties=De,b.renderLists=j,b.shadowMap=pe,b.state=Le,b.info=Oe}Ue();const k=new YS(b,F);this.xr=k,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=ze.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ze.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(P){P!==void 0&&(le=P,this.setSize(X,ge,!1))},this.getSize=function(P){return P.set(X,ge)},this.setSize=function(P,se,_e=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,ge=se,t.width=Math.floor(P*le),t.height=Math.floor(se*le),_e===!0&&(t.style.width=P+"px",t.style.height=se+"px"),this.setViewport(0,0,P,se)},this.getDrawingBufferSize=function(P){return P.set(X*le,ge*le).floor()},this.setDrawingBufferSize=function(P,se,_e){X=P,ge=se,le=_e,t.width=Math.floor(P*_e),t.height=Math.floor(se*_e),this.setViewport(0,0,P,se)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(ee)},this.setViewport=function(P,se,_e,oe){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,se,_e,oe),Le.viewport(M.copy(ee).multiplyScalar(le).floor())},this.getScissor=function(P){return P.copy(W)},this.setScissor=function(P,se,_e,oe){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,se,_e,oe),Le.scissor(ne.copy(W).multiplyScalar(le).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(P){Le.setScissorTest(re=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){me=P},this.getClearColor=function(P){return P.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(P=!0,se=!0,_e=!0){let oe=0;if(P){let xe=!1;if(C!==null){const We=C.texture.format;xe=We===$f||We===Qf||We===Jf}if(xe){const We=C.texture.type,Be=We===cr||We===sr||We===dc||We===Ar||We===Kf||We===Zf,Ke=Q.getClearColor(),Ze=Q.getClearAlpha(),gt=Ke.r,ft=Ke.g,wt=Ke.b;Be?(g[0]=gt,g[1]=ft,g[2]=wt,g[3]=Ze,F.clearBufferuiv(F.COLOR,0,g)):(y[0]=gt,y[1]=ft,y[2]=wt,y[3]=Ze,F.clearBufferiv(F.COLOR,0,y))}else oe|=F.COLOR_BUFFER_BIT}se&&(oe|=F.DEPTH_BUFFER_BIT),_e&&(oe|=F.STENCIL_BUFFER_BIT),F.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),j.dispose(),fe.dispose(),De.dispose(),He.dispose(),it.dispose(),E.dispose(),$.dispose(),be.dispose(),K.dispose(),k.dispose(),k.removeEventListener("sessionstart",ht),k.removeEventListener("sessionend",ut),Ve&&(Ve.dispose(),Ve=null),vt.stop()};function Ae(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const P=Oe.autoReset,se=pe.enabled,_e=pe.autoUpdate,oe=pe.needsUpdate,xe=pe.type;Ue(),Oe.autoReset=P,pe.enabled=se,pe.autoUpdate=_e,pe.needsUpdate=oe,pe.type=xe}function Ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ie(P){const se=P.target;se.removeEventListener("dispose",Ie),tt(se)}function tt(P){Qe(P),De.remove(P)}function Qe(P){const se=De.get(P).programs;se!==void 0&&(se.forEach(function(_e){K.releaseProgram(_e)}),P.isShaderMaterial&&K.releaseShaderCache(P))}this.renderBufferDirect=function(P,se,_e,oe,xe,We){se===null&&(se=Te);const Be=xe.isMesh&&xe.matrixWorld.determinant()<0,Ke=pt(P,se,_e,oe,xe);Le.setMaterial(oe,Be);let Ze=_e.index,gt=1;if(oe.wireframe===!0){if(Ze=I.getWireframeAttribute(_e),Ze===void 0)return;gt=2}const ft=_e.drawRange,wt=_e.attributes.position;let ye=ft.start*gt,ke=(ft.start+ft.count)*gt;We!==null&&(ye=Math.max(ye,We.start*gt),ke=Math.min(ke,(We.start+We.count)*gt)),Ze!==null?(ye=Math.max(ye,0),ke=Math.min(ke,Ze.count)):wt!=null&&(ye=Math.max(ye,0),ke=Math.min(ke,wt.count));const $e=ke-ye;if($e<0||$e===1/0)return;$.setup(xe,oe,Ke,_e,Ze);let yt,lt=G;if(Ze!==null&&(yt=nt.get(Ze),lt=he,lt.setIndex(yt)),xe.isMesh)oe.wireframe===!0?(Le.setLineWidth(oe.wireframeLinewidth*Re()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(xe.isLine){let ct=oe.linewidth;ct===void 0&&(ct=1),Le.setLineWidth(ct*Re()),xe.isLineSegments?lt.setMode(F.LINES):xe.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else xe.isPoints?lt.setMode(F.POINTS):xe.isSprite&&lt.setMode(F.TRIANGLES);if(xe.isInstancedMesh)lt.renderInstances(ye,$e,xe.count);else if(_e.isInstancedBufferGeometry){const ct=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,zt=Math.min(_e.instanceCount,ct);lt.renderInstances(ye,$e,zt)}else lt.render(ye,$e)},this.compile=function(P,se){function _e(oe,xe,We){oe.transparent===!0&&oe.side===ri&&oe.forceSinglePass===!1?(oe.side=zn,oe.needsUpdate=!0,Gt(oe,xe,We),oe.side=Ci,oe.needsUpdate=!0,Gt(oe,xe,We),oe.side=ri):Gt(oe,xe,We)}p=fe.get(P),p.init(),w.push(p),P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(se.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),p.setupLights(b._useLegacyLights),P.traverse(function(oe){const xe=oe.material;if(xe)if(Array.isArray(xe))for(let We=0;We<xe.length;We++){const Be=xe[We];_e(Be,P,oe)}else _e(xe,P,oe)}),w.pop(),p=null};let Je=null;function dt(P){Je&&Je(P)}function ht(){vt.stop()}function ut(){vt.start()}const vt=new vh;vt.setAnimationLoop(dt),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(P){Je=P,k.setAnimationLoop(P),P===null?vt.stop():vt.start()},k.addEventListener("sessionstart",ht),k.addEventListener("sessionend",ut),this.render=function(P,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(se),se=k.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,se,C),p=fe.get(P,w.length),p.init(),w.push(p),qe.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),Pe.setFromProjectionMatrix(qe),Fe=this.localClippingEnabled,Ce=de.init(this.clippingPlanes,Fe),S=j.get(P,m.length),S.init(),m.push(S),rt(P,se,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ce,me),this.info.render.frame++,Ce===!0&&de.beginShadows();const _e=p.state.shadowsArray;if(pe.render(_e,P,se),Ce===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(S,P),p.setupLights(b._useLegacyLights),se.isArrayCamera){const oe=se.cameras;for(let xe=0,We=oe.length;xe<We;xe++){const Be=oe[xe];St(S,P,Be,Be.viewport)}}else St(S,P,se);C!==null&&(Ge.updateMultisampleRenderTarget(C),Ge.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(b,P,se),$.resetDefaultState(),V=-1,x=null,w.pop(),w.length>0?p=w[w.length-1]:p=null,m.pop(),m.length>0?S=m[m.length-1]:S=null};function rt(P,se,_e,oe){if(P.visible===!1)return;if(P.layers.test(se.layers)){if(P.isGroup)_e=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(se);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Pe.intersectsSprite(P)){oe&&we.setFromMatrixPosition(P.matrixWorld).applyMatrix4(qe);const Be=E.update(P),Ke=P.material;Ke.visible&&S.push(P,Be,Ke,_e,we.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Pe.intersectsObject(P))){const Be=E.update(P),Ke=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),we.copy(P.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),we.copy(Be.boundingSphere.center)),we.applyMatrix4(P.matrixWorld).applyMatrix4(qe)),Array.isArray(Ke)){const Ze=Be.groups;for(let gt=0,ft=Ze.length;gt<ft;gt++){const wt=Ze[gt],ye=Ke[wt.materialIndex];ye&&ye.visible&&S.push(P,Be,ye,_e,we.z,wt)}}else Ke.visible&&S.push(P,Be,Ke,_e,we.z,null)}}const We=P.children;for(let Be=0,Ke=We.length;Be<Ke;Be++)rt(We[Be],se,_e,oe)}function St(P,se,_e,oe){const xe=P.opaque,We=P.transmissive,Be=P.transparent;p.setupLightsView(_e),Ce===!0&&de.setGlobalState(b.clippingPlanes,_e),We.length>0&&Ut(xe,We,se,_e),oe&&Le.viewport(M.copy(oe)),xe.length>0&&It(xe,se,_e),We.length>0&&It(We,se,_e),Be.length>0&&It(Be,se,_e),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ut(P,se,_e,oe){const xe=ve.isWebGL2;Ve===null&&(Ve=new Zi(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")?Ma:cr,minFilter:ls,samples:xe?4:0})),b.getDrawingBufferSize(Xe),xe?Ve.setSize(Xe.x,Xe.y):Ve.setSize(zl(Xe.x),zl(Xe.y));const We=b.getRenderTarget();b.setRenderTarget(Ve),b.getClearColor(O),H=b.getClearAlpha(),H<1&&b.setClearColor(16777215,.5),b.clear();const Be=b.toneMapping;b.toneMapping=lr,It(P,_e,oe),Ge.updateMultisampleRenderTarget(Ve),Ge.updateRenderTargetMipmap(Ve);let Ke=!1;for(let Ze=0,gt=se.length;Ze<gt;Ze++){const ft=se[Ze],wt=ft.object,ye=ft.geometry,ke=ft.material,$e=ft.group;if(ke.side===ri&&wt.layers.test(oe.layers)){const yt=ke.side;ke.side=zn,ke.needsUpdate=!0,Rt(wt,_e,oe,ye,ke,$e),ke.side=yt,ke.needsUpdate=!0,Ke=!0}}Ke===!0&&(Ge.updateMultisampleRenderTarget(Ve),Ge.updateRenderTargetMipmap(Ve)),b.setRenderTarget(We),b.setClearColor(O,H),b.toneMapping=Be}function It(P,se,_e){const oe=se.isScene===!0?se.overrideMaterial:null;for(let xe=0,We=P.length;xe<We;xe++){const Be=P[xe],Ke=Be.object,Ze=Be.geometry,gt=oe===null?Be.material:oe,ft=Be.group;Ke.layers.test(_e.layers)&&Rt(Ke,se,_e,Ze,gt,ft)}}function Rt(P,se,_e,oe,xe,We){P.onBeforeRender(b,se,_e,oe,xe,We),P.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),xe.onBeforeRender(b,se,_e,oe,P,We),xe.transparent===!0&&xe.side===ri&&xe.forceSinglePass===!1?(xe.side=zn,xe.needsUpdate=!0,b.renderBufferDirect(_e,se,oe,xe,P,We),xe.side=Ci,xe.needsUpdate=!0,b.renderBufferDirect(_e,se,oe,xe,P,We),xe.side=ri):b.renderBufferDirect(_e,se,oe,xe,P,We),P.onAfterRender(b,se,_e,oe,xe,We)}function Gt(P,se,_e){se.isScene!==!0&&(se=Te);const oe=De.get(P),xe=p.state.lights,We=p.state.shadowsArray,Be=xe.state.version,Ke=K.getParameters(P,xe.state,We,se,_e),Ze=K.getProgramCacheKey(Ke);let gt=oe.programs;oe.environment=P.isMeshStandardMaterial?se.environment:null,oe.fog=se.fog,oe.envMap=(P.isMeshStandardMaterial?it:He).get(P.envMap||oe.environment),gt===void 0&&(P.addEventListener("dispose",Ie),gt=new Map,oe.programs=gt);let ft=gt.get(Ze);if(ft!==void 0){if(oe.currentProgram===ft&&oe.lightsStateVersion===Be)return en(P,Ke),ft}else Ke.uniforms=K.getUniforms(P),P.onBuild(_e,Ke,b),P.onBeforeCompile(Ke,b),ft=K.acquireProgram(Ke,Ze),gt.set(Ze,ft),oe.uniforms=Ke.uniforms;const wt=oe.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(wt.clippingPlanes=de.uniform),en(P,Ke),oe.needsLights=_t(P),oe.lightsStateVersion=Be,oe.needsLights&&(wt.ambientLightColor.value=xe.state.ambient,wt.lightProbe.value=xe.state.probe,wt.directionalLights.value=xe.state.directional,wt.directionalLightShadows.value=xe.state.directionalShadow,wt.spotLights.value=xe.state.spot,wt.spotLightShadows.value=xe.state.spotShadow,wt.rectAreaLights.value=xe.state.rectArea,wt.ltc_1.value=xe.state.rectAreaLTC1,wt.ltc_2.value=xe.state.rectAreaLTC2,wt.pointLights.value=xe.state.point,wt.pointLightShadows.value=xe.state.pointShadow,wt.hemisphereLights.value=xe.state.hemi,wt.directionalShadowMap.value=xe.state.directionalShadowMap,wt.directionalShadowMatrix.value=xe.state.directionalShadowMatrix,wt.spotShadowMap.value=xe.state.spotShadowMap,wt.spotLightMatrix.value=xe.state.spotLightMatrix,wt.spotLightMap.value=xe.state.spotLightMap,wt.pointShadowMap.value=xe.state.pointShadowMap,wt.pointShadowMatrix.value=xe.state.pointShadowMatrix);const ye=ft.getUniforms(),ke=Js.seqWithValue(ye.seq,wt);return oe.currentProgram=ft,oe.uniformsList=ke,ft}function en(P,se){const _e=De.get(P);_e.outputColorSpace=se.outputColorSpace,_e.instancing=se.instancing,_e.instancingColor=se.instancingColor,_e.skinning=se.skinning,_e.morphTargets=se.morphTargets,_e.morphNormals=se.morphNormals,_e.morphColors=se.morphColors,_e.morphTargetsCount=se.morphTargetsCount,_e.numClippingPlanes=se.numClippingPlanes,_e.numIntersection=se.numClipIntersection,_e.vertexAlphas=se.vertexAlphas,_e.vertexTangents=se.vertexTangents,_e.toneMapping=se.toneMapping}function pt(P,se,_e,oe,xe){se.isScene!==!0&&(se=Te),Ge.resetTextureUnits();const We=se.fog,Be=oe.isMeshStandardMaterial?se.environment:null,Ke=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pi,Ze=(oe.isMeshStandardMaterial?it:He).get(oe.envMap||Be),gt=oe.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,ft=!!_e.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),wt=!!_e.morphAttributes.position,ye=!!_e.morphAttributes.normal,ke=!!_e.morphAttributes.color;let $e=lr;oe.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&($e=b.toneMapping);const yt=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,lt=yt!==void 0?yt.length:0,ct=De.get(oe),zt=p.state.lights;if(Ce===!0&&(Fe===!0||P!==x)){const qt=P===x&&oe.id===V;de.setState(oe,P,qt)}let At=!1;oe.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==zt.state.version||ct.outputColorSpace!==Ke||xe.isInstancedMesh&&ct.instancing===!1||!xe.isInstancedMesh&&ct.instancing===!0||xe.isSkinnedMesh&&ct.skinning===!1||!xe.isSkinnedMesh&&ct.skinning===!0||xe.isInstancedMesh&&ct.instancingColor===!0&&xe.instanceColor===null||xe.isInstancedMesh&&ct.instancingColor===!1&&xe.instanceColor!==null||ct.envMap!==Ze||oe.fog===!0&&ct.fog!==We||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==de.numPlanes||ct.numIntersection!==de.numIntersection)||ct.vertexAlphas!==gt||ct.vertexTangents!==ft||ct.morphTargets!==wt||ct.morphNormals!==ye||ct.morphColors!==ke||ct.toneMapping!==$e||ve.isWebGL2===!0&&ct.morphTargetsCount!==lt)&&(At=!0):(At=!0,ct.__version=oe.version);let an=ct.currentProgram;At===!0&&(an=Gt(oe,se,xe));let qn=!1,_n=!1,Cn=!1;const Ht=an.getUniforms(),xn=ct.uniforms;if(Le.useProgram(an.program)&&(qn=!0,_n=!0,Cn=!0),oe.id!==V&&(V=oe.id,_n=!0),qn||x!==P){Ht.setValue(F,"projectionMatrix",P.projectionMatrix),Ht.setValue(F,"viewMatrix",P.matrixWorldInverse);const qt=Ht.map.cameraPosition;qt!==void 0&&qt.setValue(F,we.setFromMatrixPosition(P.matrixWorld)),ve.logarithmicDepthBuffer&&Ht.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ht.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),x!==P&&(x=P,_n=!0,Cn=!0)}if(xe.isSkinnedMesh){Ht.setOptional(F,xe,"bindMatrix"),Ht.setOptional(F,xe,"bindMatrixInverse");const qt=xe.skeleton;qt&&(ve.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ht.setValue(F,"boneTexture",qt.boneTexture,Ge),Ht.setValue(F,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nn=_e.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0&&ve.isWebGL2===!0)&&L.update(xe,_e,an),(_n||ct.receiveShadow!==xe.receiveShadow)&&(ct.receiveShadow=xe.receiveShadow,Ht.setValue(F,"receiveShadow",xe.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(xn.envMap.value=Ze,xn.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),_n&&(Ht.setValue(F,"toneMappingExposure",b.toneMappingExposure),ct.needsLights&&Ye(xn,Cn),We&&oe.fog===!0&&Se.refreshFogUniforms(xn,We),Se.refreshMaterialUniforms(xn,oe,le,ge,Ve),Js.upload(F,ct.uniformsList,xn,Ge)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Js.upload(F,ct.uniformsList,xn,Ge),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ht.setValue(F,"center",xe.center),Ht.setValue(F,"modelViewMatrix",xe.modelViewMatrix),Ht.setValue(F,"normalMatrix",xe.normalMatrix),Ht.setValue(F,"modelMatrix",xe.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const qt=oe.uniformsGroups;for(let Li=0,Eo=qt.length;Li<Eo;Li++)if(ve.isWebGL2){const vs=qt[Li];be.update(vs,an),be.bind(vs,an)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return an}function Ye(P,se){P.ambientLightColor.needsUpdate=se,P.lightProbe.needsUpdate=se,P.directionalLights.needsUpdate=se,P.directionalLightShadows.needsUpdate=se,P.pointLights.needsUpdate=se,P.pointLightShadows.needsUpdate=se,P.spotLights.needsUpdate=se,P.spotLightShadows.needsUpdate=se,P.rectAreaLights.needsUpdate=se,P.hemisphereLights.needsUpdate=se}function _t(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,se,_e){De.get(P.texture).__webglTexture=se,De.get(P.depthTexture).__webglTexture=_e;const oe=De.get(P);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=_e===void 0,oe.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,se){const _e=De.get(P);_e.__webglFramebuffer=se,_e.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(P,se=0,_e=0){C=P,A=se,D=_e;let oe=!0,xe=null,We=!1,Be=!1;if(P){const Ze=De.get(P);Ze.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(F.FRAMEBUFFER,null),oe=!1):Ze.__webglFramebuffer===void 0?Ge.setupRenderTarget(P):Ze.__hasExternalTextures&&Ge.rebindTextures(P,De.get(P.texture).__webglTexture,De.get(P.depthTexture).__webglTexture);const gt=P.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(Be=!0);const ft=De.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ft[se])?xe=ft[se][_e]:xe=ft[se],We=!0):ve.isWebGL2&&P.samples>0&&Ge.useMultisampledRTT(P)===!1?xe=De.get(P).__webglMultisampledFramebuffer:Array.isArray(ft)?xe=ft[_e]:xe=ft,M.copy(P.viewport),ne.copy(P.scissor),z=P.scissorTest}else M.copy(ee).multiplyScalar(le).floor(),ne.copy(W).multiplyScalar(le).floor(),z=re;if(Le.bindFramebuffer(F.FRAMEBUFFER,xe)&&ve.drawBuffers&&oe&&Le.drawBuffers(P,xe),Le.viewport(M),Le.scissor(ne),Le.setScissorTest(z),We){const Ze=De.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ze.__webglTexture,_e)}else if(Be){const Ze=De.get(P.texture),gt=se||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ze.__webglTexture,_e||0,gt)}V=-1},this.readRenderTargetPixels=function(P,se,_e,oe,xe,We,Be){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=De.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Be!==void 0&&(Ke=Ke[Be]),Ke){Le.bindFramebuffer(F.FRAMEBUFFER,Ke);try{const Ze=P.texture,gt=Ze.format,ft=Ze.type;if(gt!==ui&&B.convert(gt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const wt=ft===Ma&&(ze.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ze.has("EXT_color_buffer_float"));if(ft!==cr&&B.convert(ft)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ft===Wi&&(ve.isWebGL2||ze.has("OES_texture_float")||ze.has("WEBGL_color_buffer_float")))&&!wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=P.width-oe&&_e>=0&&_e<=P.height-xe&&F.readPixels(se,_e,oe,xe,B.convert(gt),B.convert(ft),We)}finally{const Ze=C!==null?De.get(C).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(P,se,_e=0){const oe=Math.pow(2,-_e),xe=Math.floor(se.image.width*oe),We=Math.floor(se.image.height*oe);Ge.setTexture2D(se,0),F.copyTexSubImage2D(F.TEXTURE_2D,_e,0,0,P.x,P.y,xe,We),Le.unbindTexture()},this.copyTextureToTexture=function(P,se,_e,oe=0){const xe=se.image.width,We=se.image.height,Be=B.convert(_e.format),Ke=B.convert(_e.type);Ge.setTexture2D(_e,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,_e.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,_e.unpackAlignment),se.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,oe,P.x,P.y,xe,We,Be,Ke,se.image.data):se.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,oe,P.x,P.y,se.mipmaps[0].width,se.mipmaps[0].height,Be,se.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,oe,P.x,P.y,Be,Ke,se.image),oe===0&&_e.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(P,se,_e,oe,xe=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const We=P.max.x-P.min.x+1,Be=P.max.y-P.min.y+1,Ke=P.max.z-P.min.z+1,Ze=B.convert(oe.format),gt=B.convert(oe.type);let ft;if(oe.isData3DTexture)Ge.setTexture3D(oe,0),ft=F.TEXTURE_3D;else if(oe.isDataArrayTexture)Ge.setTexture2DArray(oe,0),ft=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,oe.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,oe.unpackAlignment);const wt=F.getParameter(F.UNPACK_ROW_LENGTH),ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ke=F.getParameter(F.UNPACK_SKIP_PIXELS),$e=F.getParameter(F.UNPACK_SKIP_ROWS),yt=F.getParameter(F.UNPACK_SKIP_IMAGES),lt=_e.isCompressedTexture?_e.mipmaps[0]:_e.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,lt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,P.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,P.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,P.min.z),_e.isDataTexture||_e.isData3DTexture?F.texSubImage3D(ft,xe,se.x,se.y,se.z,We,Be,Ke,Ze,gt,lt.data):_e.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ft,xe,se.x,se.y,se.z,We,Be,Ke,Ze,lt.data)):F.texSubImage3D(ft,xe,se.x,se.y,se.z,We,Be,Ke,Ze,gt,lt),F.pixelStorei(F.UNPACK_ROW_LENGTH,wt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,$e),F.pixelStorei(F.UNPACK_SKIP_IMAGES,yt),xe===0&&oe.generateMipmaps&&F.generateMipmap(ft),Le.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ge.setTextureCube(P,0):P.isData3DTexture?Ge.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ge.setTexture2DArray(P,0):Ge.setTexture2D(P,0),Le.unbindTexture()},this.resetState=function(){A=0,D=0,C=null,Le.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qt?Cr:eh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cr?Qt:Pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JS extends Mh{}JS.prototype.isWebGL1Renderer=!0;class QS extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class $S{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new ue;class uo{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),a=Vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new vi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wh extends La{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ea;const Fa=new ue,ta=new ue,na=new ue,ia=new bt,Ba=new bt,Eh=new ln,Gs=new ue,za=new ue,Hs=new ue,bu=new bt,pl=new bt,yu=new bt;class eM extends An{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new $i;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $S(t,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new uo(n,3,0,!1)),ea.setAttribute("uv",new uo(n,2,3,!1))}this.geometry=ea,this.material=e!==void 0?e:new wh,this.center=new bt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),Eh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),na.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-na.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const l=this.center;Vs(Gs.set(-.5,-.5,0),na,l,ta,r,a),Vs(za.set(.5,-.5,0),na,l,ta,r,a),Vs(Hs.set(.5,.5,0),na,l,ta,r,a),bu.set(0,0),pl.set(1,0),yu.set(1,1);let o=e.ray.intersectTriangle(Gs,za,Hs,!1,Fa);if(o===null&&(Vs(za.set(-.5,.5,0),na,l,ta,r,a),pl.set(0,1),o=e.ray.intersectTriangle(Gs,Hs,za,!1,Fa),o===null))return;const c=e.ray.origin.distanceTo(Fa);c<e.near||c>e.far||t.push({distance:c,point:Fa.clone(),uv:ii.getInterpolation(Fa,Gs,za,Hs,bu,pl,yu,new bt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vs(i,e,t,n,r,a){ia.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ba.x=a*ia.x-r*ia.y,Ba.y=r*ia.x+a*ia.y):Ba.copy(ia),i.copy(e),i.x+=Ba.x,i.y+=Ba.y,i.applyMatrix4(Eh)}class Qs extends Tn{constructor(e,t,n,r,a,l,o,c,d){super(e,t,n,r,a,l,o,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cs extends La{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Th extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ml=new ln,Su=new ue,Mu=new ue;class tM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Su.setFromMatrixPosition(e.matrixWorld),t.position.copy(Su),Mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mu),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wu=new ln,Ga=new ue,vl=new ue;class nM extends tM{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new ue(1,0,0),new ue(-1,0,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,1,0),new ue(0,-1,0)],this._cubeUps=[new ue(0,1,0),new ue(0,1,0),new ue(0,1,0),new ue(0,1,0),new ue(0,0,1),new ue(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ga),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),r.makeTranslation(-Ga.x,-Ga.y,-Ga.z),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu)}}class iM extends Th{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new nM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rM extends Th{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ah{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eu(){return(typeof performance>"u"?Date:performance).now()}class Tu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);function mc(i,e,t,n,r,a,l,o){const c=(C,V,x,M)=>[new bt(C/l,1-M/o),new bt(x/l,1-M/o),new bt(x/l,1-V/o),new bt(C/l,1-V/o)],d=c(e+a,t,e+n+a,t+a),u=c(e+n+a,t,e+n*2+a,t+a),h=c(e,t+a,e+a,t+a+r),f=c(e+a,t+a,e+n+a,t+a+r),g=c(e+n+a,t+a,e+n+a*2,t+r+a),y=c(e+n+a*2,t+a,e+n*2+a*2,t+r+a),S=i.attributes.uv,p=[g[3],g[2],g[0],g[1]],m=[h[3],h[2],h[0],h[1]],w=[d[3],d[2],d[0],d[1]],b=[u[0],u[1],u[3],u[2]],T=[f[3],f[2],f[0],f[1]],A=[y[3],y[2],y[0],y[1]],D=[];for(const C of[p,m,w,b,T,A])for(const V of C)D.push(V.x,V.y);S.set(new Float32Array(D)),S.needsUpdate=!0}function Jn(i,e,t,n,r,a){mc(i,e,t,n,r,a,64,64)}function Hl(i,e,t,n,r,a){mc(i,e,t,n,r,a,64,32)}class gr extends yn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class aM extends yn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new cs({side:Ci}),this.layer2Material=new cs({side:ri,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new sn(8,8,8);Jn(e,0,0,8,8,8);const t=new Yt(e,this.layer1Material),n=new sn(9,9,9);Jn(n,32,0,8,8,8);const r=new Yt(n,this.layer2Material);this.head=new gr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new sn(8,12,4);Jn(a,16,16,8,12,4);const l=new Yt(a,this.layer1Material),o=new sn(8.5,12.5,4.5);Jn(o,16,32,8,12,4);const c=new Yt(o,this.layer2Material);this.body=new gr(l,c),this.body.name="body",this.body.add(l,c),this.body.position.y=-6,this.add(this.body);const d=new sn,u=new Yt(d,this.layer1MaterialBiased);this.modelListeners.push(()=>{u.scale.x=this.slim?3:4,u.scale.y=12,u.scale.z=4,Jn(d,40,16,this.slim?3:4,12,4)});const h=new sn,f=new Yt(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Jn(h,40,32,this.slim?3:4,12,4)});const g=new yn;g.add(u,f),this.modelListeners.push(()=>{g.position.x=this.slim?-.5:-1}),g.position.y=-4,this.rightArm=new gr(u,f),this.rightArm.name="rightArm",this.rightArm.add(g),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const y=new sn,S=new Yt(y,this.layer1MaterialBiased);this.modelListeners.push(()=>{S.scale.x=this.slim?3:4,S.scale.y=12,S.scale.z=4,Jn(y,32,48,this.slim?3:4,12,4)});const p=new sn,m=new Yt(p,this.layer2MaterialBiased);this.modelListeners.push(()=>{m.scale.x=this.slim?3.5:4.5,m.scale.y=12.5,m.scale.z=4.5,Jn(p,48,48,this.slim?3:4,12,4)});const w=new yn;w.add(S,m),this.modelListeners.push(()=>{w.position.x=this.slim?.5:1}),w.position.y=-4,this.leftArm=new gr(S,m),this.leftArm.name="leftArm",this.leftArm.add(w),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const b=new sn(4,12,4);Jn(b,0,16,4,12,4);const T=new Yt(b,this.layer1MaterialBiased),A=new sn(4.5,12.5,4.5);Jn(A,0,32,4,12,4);const D=new Yt(A,this.layer2MaterialBiased),C=new yn;C.add(T,D),C.position.y=-6,this.rightLeg=new gr(T,D),this.rightLeg.name="rightLeg",this.rightLeg.add(C),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const V=new sn(4,12,4);Jn(V,16,48,4,12,4);const x=new Yt(V,this.layer1MaterialBiased),M=new sn(4.5,12.5,4.5);Jn(M,0,48,4,12,4);const ne=new Yt(M,this.layer2MaterialBiased),z=new yn;z.add(x,ne),z.position.y=-6,this.leftLeg=new gr(x,ne),this.leftLeg.name="leftLeg",this.leftLeg.add(z),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof gr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class sM extends yn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new cs({side:ri,transparent:!0,alphaTest:1e-5});const e=new sn(10,16,1);Hl(e,0,0,10,16,1),this.cape=new Yt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class oM extends yn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new cs({side:ri,transparent:!0,alphaTest:1e-5});const e=new sn(12,22,4);Hl(e,22,0,10,20,2);const t=new Yt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new yn,this.leftWing.add(t),this.add(this.leftWing);const n=new sn(12,22,4);Hl(n,22,0,10,20,2);const r=new Yt(n,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new yn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class lM extends yn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new cs({side:Ci});const e=new sn(8,8,4/3);mc(e,0,0,6,6,1,14,7),this.rightEar=new Yt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Yt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Au=10.8*Math.PI/180;class cM extends yn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new aM,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new sM,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Au,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new oM,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new lM,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Au,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ws(i){return i instanceof HTMLImageElement||i instanceof HTMLVideoElement||i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas}function Vl(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let o=0;o<r;o++){const c=(l+o*n)*4;if(a.data[c+3]!==255)return!0}return!1}function Mo(i){return i/64}function Ru(i,e,t){if(t){if(Vl(i,0,0,e,e))return}else if(Vl(i,0,0,e,e/2))return;const n=Mo(e),r=(a,l,o,c)=>i.clearRect(a*n,l*n,o*n,c*n);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function dM(i,e){i.save(),i.scale(-1,1);const t=Mo(e),n=(r,a,l,o,c,d)=>i.drawImage(i.canvas,r*t,a*t,l*t,o*t,-c*t,d*t,-l*t,o*t);n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52),i.restore()}function uM(i,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=i.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;i.width=r,i.height=r,n.clearRect(0,0,r,r),n.drawImage(e,0,0,r,r/2),dM(n,r),Ru(n,i.width,!1)}else i.width=e.width,i.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0,i.width,i.height),Ru(n,i.width,!0)}function fM(i){if(i.width===2*i.height)return i.width/64;if(i.width*17===i.height*22)return i.width/22;if(i.width*11===i.height*23)return i.width/46;throw new Error(`Bad cape size: ${i.width}x${i.height}`)}function hM(i,e){const t=fM(e);i.width=64*t,i.height=32*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function pM(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let o=0;o<r;o++){const c=(l+o*n)*4;if(!(a.data[c+0]===0&&a.data[c+1]===0&&a.data[c+2]===0&&a.data[c+3]===255))return!1}return!0}function mM(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let l=0;l<n;l++)for(let o=0;o<r;o++){const c=(l+o*n)*4;if(!(a.data[c+0]===255&&a.data[c+1]===255&&a.data[c+2]===255&&a.data[c+3]===255))return!1}return!0}function vM(i){const e=Mo(i.width),t=i.getContext("2d",{willReadFrequently:!0}),n=(o,c,d,u)=>Vl(t,o*e,c*e,d*e,u*e),r=(o,c,d,u)=>pM(t,o*e,c*e,d*e,u*e),a=(o,c,d,u)=>mM(t,o*e,c*e,d*e,u*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function gM(i){if(i.width===i.height*2&&i.height%7===0)return i.height/7;throw new Error(`Bad ears size: ${i.width}x${i.height}`)}function _M(i,e){const t=gM(e);i.width=14*t,i.height=7*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function Cu(i,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=Mo(e.width),n=14*t,r=7*t;i.width=n,i.height=r;const a=i.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,n,r),a.drawImage(e,24*t,0,n,r,0,0,n,r)}async function js(i){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof i=="string"?e.src=i:(i.crossOrigin!==void 0&&(e.crossOrigin=i.crossOrigin),i.referrerPolicy!==void 0&&(e.referrerPolicy=i.referrerPolicy),e.src=i.src)})}const Pu={type:"change"},gl={type:"start"},Lu={type:"end"},Xs=new sh,Iu=new ar,xM=Math.cos(70*Wx.DEG2RAD);class bM extends Ur{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ue,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",E),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pu),n.update(),a=r.NONE},this.update=(function(){const L=new ue,G=new Ir().setFromUnitVectors(e.up,new ue(0,1,0)),he=G.clone().invert(),B=new ue,$=new Ir,be=new ue,Ue=2*Math.PI;return function(Ae=null){const ie=n.object.position;L.copy(ie).sub(n.target),L.applyQuaternion(G),o.setFromVector3(L),n.autoRotate&&a===r.NONE&&ne(x(Ae)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Ee=n.minAzimuthAngle,Ie=n.maxAzimuthAngle;isFinite(Ee)&&isFinite(Ie)&&(Ee<-Math.PI?Ee+=Ue:Ee>Math.PI&&(Ee-=Ue),Ie<-Math.PI?Ie+=Ue:Ie>Math.PI&&(Ie-=Ue),Ee<=Ie?o.theta=Math.max(Ee,Math.min(Ie,o.theta)):o.theta=o.theta>(Ee+Ie)/2?Math.max(Ee,o.theta):Math.min(Ie,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&D||n.object.isOrthographicCamera?o.radius=me(o.radius):o.radius=me(o.radius*d),L.setFromSpherical(o),L.applyQuaternion(he),ie.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let tt=!1;if(n.zoomToCursor&&D){let Qe=null;if(n.object.isPerspectiveCamera){const Je=L.length();Qe=me(Je*d);const dt=Je-Qe;n.object.position.addScaledVector(T,dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Je=new ue(A.x,A.y,0);Je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),tt=!0;const dt=new ue(A.x,A.y,0);dt.unproject(n.object),n.object.position.sub(dt).add(Je),n.object.updateMatrixWorld(),Qe=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Qe).add(n.object.position):(Xs.origin.copy(n.object.position),Xs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xs.direction))<xM?e.lookAt(n.target):(Iu.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xs.intersectPlane(Iu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),tt=!0);return d=1,D=!1,tt||B.distanceToSquared(n.object.position)>l||8*(1-$.dot(n.object.quaternion))>l||be.distanceToSquared(n.target)>0?(n.dispatchEvent(Pu),B.copy(n.object.position),$.copy(n.object.quaternion),be.copy(n.target),tt=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",j),n.domElement.removeEventListener("pointerdown",De),n.domElement.removeEventListener("pointercancel",He),n.domElement.removeEventListener("wheel",I),n.domElement.removeEventListener("pointermove",Ge),n.domElement.removeEventListener("pointerup",He),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const l=1e-6,o=new Tu,c=new Tu;let d=1;const u=new ue,h=new bt,f=new bt,g=new bt,y=new bt,S=new bt,p=new bt,m=new bt,w=new bt,b=new bt,T=new ue,A=new bt;let D=!1;const C=[],V={};function x(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function ne(L){c.theta-=L}function z(L){c.phi-=L}const O=(function(){const L=new ue;return function(he,B){L.setFromMatrixColumn(B,0),L.multiplyScalar(-he),u.add(L)}})(),H=(function(){const L=new ue;return function(he,B){n.screenSpacePanning===!0?L.setFromMatrixColumn(B,1):(L.setFromMatrixColumn(B,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(he),u.add(L)}})(),X=(function(){const L=new ue;return function(he,B){const $=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;L.copy(be).sub(n.target);let Ue=L.length();Ue*=Math.tan(n.object.fov/2*Math.PI/180),O(2*he*Ue/$.clientHeight,n.object.matrix),H(2*B*Ue/$.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(he*(n.object.right-n.object.left)/n.object.zoom/$.clientWidth,n.object.matrix),H(B*(n.object.top-n.object.bottom)/n.object.zoom/$.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ge(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?d*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(L){if(!n.zoomToCursor)return;D=!0;const G=n.domElement.getBoundingClientRect(),he=L.clientX-G.left,B=L.clientY-G.top,$=G.width,be=G.height;A.x=he/$*2-1,A.y=-(B/be)*2+1,T.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function me(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function ee(L){h.set(L.clientX,L.clientY)}function W(L){ce(L),m.set(L.clientX,L.clientY)}function re(L){y.set(L.clientX,L.clientY)}function Pe(L){f.set(L.clientX,L.clientY),g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const G=n.domElement;ne(2*Math.PI*g.x/G.clientHeight),z(2*Math.PI*g.y/G.clientHeight),h.copy(f),n.update()}function Ce(L){w.set(L.clientX,L.clientY),b.subVectors(w,m),b.y>0?ge(M()):b.y<0&&le(M()),m.copy(w),n.update()}function Fe(L){S.set(L.clientX,L.clientY),p.subVectors(S,y).multiplyScalar(n.panSpeed),X(p.x,p.y),y.copy(S),n.update()}function Ve(L){ce(L),L.deltaY<0?le(M()):L.deltaY>0&&ge(M()),n.update()}function qe(L){let G=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?ne(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?ne(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(-n.keyPanSpeed,0),G=!0;break}G&&(L.preventDefault(),n.update())}function Xe(){if(C.length===1)h.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),G=.5*(C[0].pageY+C[1].pageY);h.set(L,G)}}function we(){if(C.length===1)y.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),G=.5*(C[0].pageY+C[1].pageY);y.set(L,G)}}function Te(){const L=C[0].pageX-C[1].pageX,G=C[0].pageY-C[1].pageY,he=Math.sqrt(L*L+G*G);m.set(0,he)}function Re(){n.enableZoom&&Te(),n.enablePan&&we()}function F(){n.enableZoom&&Te(),n.enableRotate&&Xe()}function st(L){if(C.length==1)f.set(L.pageX,L.pageY);else{const he=Q(L),B=.5*(L.pageX+he.x),$=.5*(L.pageY+he.y);f.set(B,$)}g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const G=n.domElement;ne(2*Math.PI*g.x/G.clientHeight),z(2*Math.PI*g.y/G.clientHeight),h.copy(f)}function ze(L){if(C.length===1)S.set(L.pageX,L.pageY);else{const G=Q(L),he=.5*(L.pageX+G.x),B=.5*(L.pageY+G.y);S.set(he,B)}p.subVectors(S,y).multiplyScalar(n.panSpeed),X(p.x,p.y),y.copy(S)}function ve(L){const G=Q(L),he=L.pageX-G.x,B=L.pageY-G.y,$=Math.sqrt(he*he+B*B);w.set(0,$),b.set(0,Math.pow(w.y/m.y,n.zoomSpeed)),ge(b.y),m.copy(w)}function Le(L){n.enableZoom&&ve(L),n.enablePan&&ze(L)}function Oe(L){n.enableZoom&&ve(L),n.enableRotate&&st(L)}function De(L){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Ge),n.domElement.addEventListener("pointerup",He)),fe(L),L.pointerType==="touch"?K(L):it(L))}function Ge(L){n.enabled!==!1&&(L.pointerType==="touch"?Se(L):nt(L))}function He(L){de(L),C.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Ge),n.domElement.removeEventListener("pointerup",He)),n.dispatchEvent(Lu),a=r.NONE}function it(L){let G;switch(L.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Nr.DOLLY:if(n.enableZoom===!1)return;W(L),a=r.DOLLY;break;case Nr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;re(L),a=r.PAN}else{if(n.enableRotate===!1)return;ee(L),a=r.ROTATE}break;case Nr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;ee(L),a=r.ROTATE}else{if(n.enablePan===!1)return;re(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(gl)}function nt(L){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Pe(L);break;case r.DOLLY:if(n.enableZoom===!1)return;Ce(L);break;case r.PAN:if(n.enablePan===!1)return;Fe(L);break}}function I(L){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(L.preventDefault(),n.dispatchEvent(gl),Ve(L),n.dispatchEvent(Lu))}function E(L){n.enabled===!1||n.enablePan===!1||qe(L)}function K(L){switch(pe(L),C.length){case 1:switch(n.touches.ONE){case Or.ROTATE:if(n.enableRotate===!1)return;Xe(),a=r.TOUCH_ROTATE;break;case Or.PAN:if(n.enablePan===!1)return;we(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Or.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(),a=r.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(gl)}function Se(L){switch(pe(L),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;st(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ze(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(L),n.update();break;default:a=r.NONE}}function j(L){n.enabled!==!1&&L.preventDefault()}function fe(L){C.push(L)}function de(L){delete V[L.pointerId];for(let G=0;G<C.length;G++)if(C[G].pointerId==L.pointerId){C.splice(G,1);return}}function pe(L){let G=V[L.pointerId];G===void 0&&(G=new bt,V[L.pointerId]=G),G.set(L.pageX,L.pageY)}function Q(L){const G=L.pointerId===C[0].pointerId?C[1]:C[0];return V[G.pointerId]}n.domElement.addEventListener("contextmenu",j),n.domElement.addEventListener("pointerdown",De),n.domElement.addEventListener("pointercancel",He),n.domElement.addEventListener("wheel",I,{passive:!1}),this.update()}}const yM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const SM=new gh(-1,1,1,-1,0,1),vc=new $i;vc.setAttribute("position",new Yi([-1,3,0,-1,-1,0,3,-1,0],3));vc.setAttribute("uv",new Yi([0,2,0,0,2,0],2));class MM{constructor(e){this._mesh=new Yt(vc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,SM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rh extends wo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ji?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hh.clone(e.uniforms),this.material=new Ji({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new MM(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Du extends wo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,o;this.inverse?(l=0,o=1):(l=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class wM extends wo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class EM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new bt);this._width=n.width,this._height=n.height,t=new Zi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ma}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rh(yM),this.copyPass.material.blending=qi,this.clock=new Ah}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Du!==void 0&&(l instanceof Du?n=!0:l instanceof wM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class TM extends wo{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}const AM={uniforms:{tDiffuse:{value:null},resolution:{value:new bt(1/1024,1/512)}},vertexShader:`

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
	`};class Ch{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const n=t*this.speed;this.animate(e,n),this.animationObjects.forEach((r,a)=>{const l=this.progress0.get(a);r(e,this.progress-l,a)}),this.progress+=n}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Uu extends Ch{animate(e){const t=this.progress*2,n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class ku extends Ch{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class RM extends eM{constructor(e="",t={}){const n=new wh({transparent:!0,alphaTest:1e-5});super(n),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=n,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const n=t.measureText(this.text);e.width=this.margin[3]+n.actualBoundingBoxLeft+n.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+n.actualBoundingBoxAscent+n.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+n.actualBoundingBoxLeft,this.margin[0]+n.actualBoundingBoxAscent);const r=new Qs(e);r.magFilter=tn,r.minFilter=tn,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class CM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new rM(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new iM(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new QS,this.camera=new jn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Qn.enabled=!1,this.renderer=new Mh({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Zi(0,0,{depthTexture:new Sh(0,0,Wi)})),this.composer=new EM(this.renderer,t),this.renderPass=new TM(this.scene,this.camera),this.fxaaPass=new Rh(AM),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new cM,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new yn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new bM(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Ah,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=n=>{n.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",n=>{n.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Qs(this.skinCanvas),this.skinTexture.magFilter=tn,this.skinTexture.minFilter=tn,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Qs(this.capeCanvas),this.capeTexture.magFilter=tn,this.capeTexture.minFilter=tn,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Qs(this.earsCanvas),this.earsTexture.magFilter=tn,this.earsTexture.minFilter=tn,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ws(e))uM(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=vM(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Cu(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return js(e).then(n=>this.loadSkin(n,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ws(e))hM(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return js(e).then(n=>this.loadCape(n,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ws(e))t.textureType==="skin"?Cu(this.earsCanvas,e):_M(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return js(e).then(n=>this.loadEars(n,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,oo)}loadBackground(e,t){if(Ws(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new Tn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return js(e).then(n=>this.loadBackground(n,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new ue).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new bt).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new bt).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Bt||e instanceof Tn?this.scene.background=e:this.scene.background=new Bt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof An||(e=new RM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const ti=Pt({list:[],active:null,ready:!1}),_l=new Map;function Wl(i,e){const t=window.__TAURI__?.core;return t?t.invoke(i,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function qs(){try{ti.list=await Wl("get_accounts"),ti.active=await Wl("get_active_account")}catch{}finally{ti.ready=!0}}function ds(i){return i?i.skin??(i.account_type?.type==="ely_by"?i.username:null):null}async function jl(i){if(!i)return null;const e=String(i).trim();if(!e||e.startsWith("data:"))return e||null;if(_l.has(e))return _l.get(e);try{const t=await Wl("proxy_skin_png",{source:e});return _l.set(e,t),t}catch{return null}}function PM(i){try{const e=String(i??"").split(",")[1]??"",t=atob(e.slice(0,44));if(t.length<24)return null;const n=l=>t.charCodeAt(l)&255;if(n(1)!==80||n(2)!==78||n(3)!==71)return null;const r=(n(16)<<24|n(17)<<16|n(18)<<8|n(19))>>>0,a=(n(20)<<24|n(21)<<16|n(22)<<8|n(23))>>>0;return!r||!a?null:{width:r,height:a}}catch{return null}}var LM=N('<button title="Toggle the hat/jacket outer layer"> </button>'),IM=N("<canvas></canvas> <!>",1);function gc(i,e){jt(e,!0);let t=ot(e,"skin",3,null),n=ot(e,"cape",3,null),r=ot(e,"model",3,null),a=ot(e,"width",3,260),l=ot(e,"height",3,340),o=ot(e,"walking",3,!1),c=ot(e,"autorotate",3,!1),d=ot(e,"zoom",3,.85),u=ot(e,"outerLayer",15,!0),h=ot(e,"showToggle",3,!1),f=Z(null),g=null,y,S,p,m=Z(null),w=Z(null),b=0;function T(z){if(!z)return null;const O=String(z).trim();if(!O)return null;if(/^(https?:|data:)/i.test(O))return O;const H=window.__TAURI__?.core?.convertFileSrc;return H?H(O):O}function A(z){const O=String(z??"").trim().toLowerCase();return O==="slim"?"slim":O==="classic"?"default":"auto-detect"}function D(){g&&((s(m)!==y||A(r())!==p)&&(y=s(m),p=A(r()),s(m)?g.loadSkin(s(m),{model:p}).catch(()=>{}):g.resetSkin()),s(w)!==S&&(S=s(w),s(w)?g.loadCape(s(w)).catch(()=>{}):g.resetCape()))}function C(){const z=g?.playerObject?.skin;if(z)for(const O of[z.head,z.body,z.rightArm,z.leftArm,z.rightLeg,z.leftLeg])O?.outerLayer&&(O.outerLayer.visible=u())}_i(()=>(g=new CM({canvas:s(f),width:a(),height:l(),zoom:d(),fov:55}),g.controls.enablePan=!1,g.controls.enableZoom=!0,g.autoRotate=c(),g.animation=o()?new ku:new Uu,D(),C(),()=>{g?.dispose(),g=null})),nn(()=>{const z=t(),O=n(),H=++b;(async()=>{const X=await jl(z),ge=await jl(O);H===b&&(v(m,X??T(z),!0),v(w,ge??T(O),!0))})()}),nn(()=>{D(),C()}),nn(()=>{u(),g&&C()}),nn(()=>{g&&(g.animation=o()?new ku:new Uu)}),nn(()=>{g&&(g.autoRotate=c())}),nn(()=>{g&&g.setSize(a(),l())});var V=IM(),x=Mt(V);rc(x,z=>v(f,z),()=>s(f));var M=_(x,2);{var ne=z=>{var O=LM(),H=q(O);ae(()=>{xt(O,1,`rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) ${u()?"text-(--accent)":""}`),je(O,"aria-pressed",u()),Y(H,`Outer layer: ${u()?"on":"off"}`)}),J("click",O,()=>u(!u())),U(z,O)};Me(M,z=>{h()&&z(ne)})}ae(()=>In(x,`width:${a()??""}px;height:${l()??""}px;display:block`)),U(i,V),Xt()}rn(["click"]);var DM=N('<span class="absolute inset-0"></span> <span class="absolute inset-0"></span>',1),UM=N('<span class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"> </span>'),kM=N("<span><!></span>");function _c(i,e){jt(e,!0);let t=ot(e,"source",3,null),n=ot(e,"size",3,32),r=ot(e,"letter",3,null),a=ot(e,"class",3,""),l=Z(null),o=Z(1),c=0;nn(()=>{const p=t(),m=++c;(async()=>{const w=await jl(p);if(m!==c)return;v(l,w,!0);const b=w?PM(w):null;v(o,b&&b.height&&b.width?b.height/b.width:1,!0)})()}),ac(()=>{c+=1});const d=mt(()=>(800*s(o)).toFixed(4)),u=mt(()=>(100/(8*s(o)-1)).toFixed(4)),h=mt(()=>s(l)?`background-image:url(${s(l)});background-size:800% ${s(d)}%;image-rendering:pixelated;`:"");var f=kM(),g=R(f);{var y=p=>{var m=DM(),w=Mt(m),b=_(w,2);ae(()=>{In(w,`${s(h)}background-position:14.2857% ${s(u)}%`),In(b,`${s(h)}background-position:71.4286% ${s(u)}%`)}),U(p,m)},S=p=>{var m=UM(),w=q(m,!0);ae(()=>{In(m,`font-size:${n()*.45}px`),Y(w,r())}),U(p,m)};Me(g,p=>{s(l)?p(y):r()&&p(S,1)})}ae(()=>{xt(f,1,`relative inline-block shrink-0 overflow-hidden ${a()??""}`),In(f,`width:${n()??""}px;height:${n()??""}px`)}),U(i,f),Xt()}var NM=N('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),OM=N(`<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40" title="Silently renew this account's token"> </button>`),FM=N('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),BM=N('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),zM=N('<div><div class="flex items-center gap-3"><!> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),GM=N('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),HM=N('<p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),VM=N('<div class="flex flex-col"><!> <!></div>');function Ph(i,e){jt(e,!0);let t=ot(e,"accounts",19,()=>[]),n=ot(e,"active",3,null),r=Z(""),a=Z(!1),l=Z(null),o=Z(""),c=Z(""),d=Z(null);function u(x,M){const ne=window.__TAURI__?.core;return ne?ne.invoke(x,M):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function h(x){v(r,"");try{await u("set_active_account",{id:x}),await e.onrefresh?.()}catch(M){v(r,String(M),!0)}}async function f(x){v(r,"");try{await u("remove_account",{id:x}),s(l)===x&&v(l,null),await e.onrefresh?.()}catch(M){v(r,String(M),!0)}}async function g(x){const M=y(x);if(M){v(r,""),v(d,x.id,!0);try{await u(M,{id:x.id}),await e.onrefresh?.()}catch(ne){v(r,String(ne),!0)}finally{v(d,null)}}}function y(x){const M=x.account_type?.type;return M==="microsoft"?"refresh_microsoft_account":M==="ely_by"&&x.refresh_token?"refresh_elyby_account":null}function S(x){if(s(l)===x.id){v(l,null);return}v(l,x.id,!0),v(o,x.skin??"",!0),v(c,x.cape??"",!0)}async function p(x){const M=window.__TAURI__?.dialog?.open;if(!M){v(r,"File picker unavailable in this build.");return}try{const ne=await M({multiple:!1,title:x==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!ne)return;v(x==="skin"?o:c,String(ne),!0),v(r,"")}catch(ne){v(r,String(ne),!0)}}async function m(){v(r,""),v(a,!0);try{await u("set_account_textures",{id:s(l),skin:s(o).trim()||null,cape:s(c).trim()||null}),await e.onrefresh?.(),v(l,null)}catch(x){v(r,String(x),!0)}finally{v(a,!1)}}async function w(){v(o,""),v(c,""),await m()}function b(x){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[x.account_type.type]??"Yggdrasil"}const T=mt(()=>t().find(x=>x.id===s(l))??null);var A=VM(),D=R(A);Et(D,17,t,x=>x.id,(x,M)=>{var ne=zM(),z=R(ne),O=R(z);{let ve=mt(()=>ds(s(M))),Le=mt(()=>s(M).username[0]?.toUpperCase()??"?");_c(O,{get source(){return s(ve)},size:32,get letter(){return s(Le)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var H=_(O,2),X=R(H),ge=R(X),le=q(ge,!0),ce=_(ge,2),me=q(ce,!0),ee=_(ce,2);{var W=ve=>{var Le=NM();U(ve,Le)};Me(ee,ve=>{n()?.id===s(M).id&&ve(W)})}var re=_(X,2),Pe=q(re,!0),Ce=_(H,2),Fe=R(Ce),Ve=R(Fe);Ei(Ve,{emoji:"🎨"});var qe=_(Fe,2);{var Xe=ve=>{var Le=OM(),Oe=q(Le,!0);ae(()=>{Le.disabled=s(d)!==null,Y(Oe,s(d)===s(M).id?"Refreshing…":"Refresh token")}),J("click",Le,()=>g(s(M))),U(ve,Le)},we=mt(()=>y(s(M)));Me(qe,ve=>{s(we)&&ve(Xe)})}var Te=_(qe,2);{var Re=ve=>{var Le=FM();J("click",Le,()=>h(s(M).id)),U(ve,Le)};Me(Te,ve=>{n()?.id!==s(M).id&&ve(Re)})}var F=_(Te,2),st=_(z,2);{var ze=ve=>{var Le=BM(),Oe=R(Le);{let fe=mt(()=>s(T)?.model);gc(Oe,{get skin(){return s(o)},get cape(){return s(c)},get model(){return s(fe)},width:110,height:150})}var De=_(Oe,2),Ge=R(De),He=_(R(Ge)),it=q(He,!0),nt=_(Ge,2),I=_(R(nt)),E=q(I,!0),K=_(nt,2),Se=R(K),j=_(Se,2);ae(()=>{Y(it,s(o)||"default (Steve/Alex)"),Y(E,s(c)||"none"),Se.disabled=s(a)}),J("click",Ge,()=>p("skin")),J("click",nt,()=>p("cape")),J("click",Se,m),J("click",j,w),U(ve,Le)};Me(st,ve=>{s(l)===s(M).id&&s(T)&&ve(ze)})}ae(ve=>{xt(ne,1,`border-b border-(--border) px-4 py-2.5 ${n()?.id===s(M).id?"bg-(--accent)/10":""}`),Y(le,s(M).username),Y(me,ve),Y(Pe,s(M).uuid)},[()=>b(s(M))]),J("click",Fe,()=>S(s(M))),J("click",F,()=>f(s(M).id)),U(x,ne)},x=>{var M=GM();U(x,M)});var C=_(D,2);{var V=x=>{var M=HM(),ne=q(M,!0);ae(()=>Y(ne,s(r))),U(x,M)};Me(C,x=>{s(r)&&x(V)})}U(i,A),Xt()}rn(["click"]);var WM=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <div class="border-t border-(--border)"><!></div></div></div></div>');function jM(i,e){jt(e,!0);let t=ot(e,"accounts",19,()=>[]),n=ot(e,"active",3,null);_i(()=>{const f=Ca(()=>e.onclose?.());return()=>Pa(f)});var r=WM(),a=R(r),l=R(a),o=_(R(l),2),c=_(l,2),d=R(c);Hf(d,{get onrefresh(){return e.onrefresh}});var u=_(d,2),h=R(u);Ph(h,{get accounts(){return t()},get active(){return n()},get onrefresh(){return e.onrefresh}}),J("click",r,f=>{f.target===f.currentTarget&&e.onclose?.()}),J("click",o,()=>e.onclose?.()),U(i,r),Xt()}rn(["click"]);var XM=N('<button><span class="truncate"> </span></button>'),qM=N('<span class="text-[9px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),YM=N('<button><!> <span class="text-[12px] font-medium"> </span> <!></button>'),KM=N('<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]"><dt class="text-(--text-muted)">Profile UUID</dt> <dd class="min-w-0 truncate font-mono"> </dd> <dt class="text-(--text-muted)">Skin source</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Cape</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Renewable token</dt> <dd class="min-w-0 truncate"> </dd></dl></div>'),ZM=N('<div class="mt-6 flex flex-wrap gap-2"></div> <!>',1),JM=N(`<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><p class="text-sm font-medium">No accounts yet</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom
              Yggdrasil server — everything lives in the Add Account section.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Add an account</button></div>`),QM=N('<h2 class="text-[16px] font-semibold">Account overview</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The character launches use, with the hat/jacket outer layer included.</p> <!>',1),$M=N('<h2 class="text-[16px] font-semibold">Add account</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.</p> <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),ew=N('<h2 class="text-[16px] font-semibold">Saved accounts</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Set the active profile, renew tokens silently, edit skins — or remove accounts.</p> <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),tw=N('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Accounts sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div></div>');function nw(i,e){jt(e,!0);const t=[{id:"overview",label:"Overview"},{id:"add",label:"Add Account"},{id:"saved",label:"Saved Accounts"}];let n=Z("overview"),r=Z(null);const a=mt(()=>{const w=ti.list;return w.find(b=>b.id===s(r))??w.find(b=>b.id===ti.active?.id)??w[0]??null});let l=Z(!0);function o(w){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[w.account_type.type]??"Yggdrasil"}var c=tw(),d=R(c),u=R(d),h=_(u,2);Et(h,21,()=>t,w=>w.id,(w,b)=>{var T=XM(),A=R(T),D=q(A,!0);ae(()=>{xt(T,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${s(n)===s(b).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(T,"aria-current",s(n)===s(b).id?"true":void 0),Y(D,s(b).label)}),J("click",T,()=>v(n,s(b).id,!0)),U(w,T)});var f=_(d,2),g=R(f),y=R(g);{var S=w=>{var b=QM(),T=_(Mt(b),4);{var A=C=>{var V=ZM(),x=Mt(V);Et(x,21,()=>ti.list,z=>z.id,(z,O)=>{var H=YM(),X=R(H);{let ee=mt(()=>ds(s(O))),W=mt(()=>s(O).username[0]?.toUpperCase()??"?");_c(X,{get source(){return s(ee)},size:24,get letter(){return s(W)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var ge=_(X,2),le=q(ge,!0),ce=_(ge,2);{var me=ee=>{var W=qM();U(ee,W)};Me(ce,ee=>{ti.active?.id===s(O).id&&ee(me)})}ae(()=>{xt(H,1,`flex items-center gap-2 rounded border px-2 py-1.5 text-left ${s(a)?.id===s(O).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(H,"title",`Preview ${s(O).username??""}`),Y(le,s(O).username)}),J("click",H,()=>v(r,s(O).id,!0)),U(z,H)});var M=_(x,2);{var ne=z=>{var O=KM(),H=R(O);{let we=mt(()=>ds(s(a)));gc(H,{get skin(){return s(we)},get cape(){return s(a).cape},get model(){return s(a).model},width:230,height:310,showToggle:!0,get outerLayer(){return s(l)},set outerLayer(Te){v(l,Te,!0)}})}var X=_(H,2),ge=R(X),le=q(ge,!0),ce=_(ge,2),me=q(ce,!0),ee=_(X,2),W=_(R(ee),2),re=q(W,!0),Pe=_(W,4),Ce=q(Pe,!0),Fe=_(Pe,4),Ve=q(Fe,!0),qe=_(Fe,4),Xe=q(qe,!0);ae(we=>{Y(le,s(a).username),Y(me,we),je(W,"title",s(a).uuid),Y(re,s(a).uuid),je(Pe,"title",s(a).skin??"default (Steve/Alex)"),Y(Ce,s(a).skin?"custom skin":"default (Steve/Alex)"),Y(Ve,s(a).cape?"custom cape":"none"),Y(Xe,s(a).refresh_token?"yes — silent refresh available":"no")},[()=>o(s(a))]),U(z,O)};Me(M,z=>{s(a)&&z(ne)})}U(C,V)},D=C=>{var V=JM(),x=_(R(V),4);J("click",x,()=>v(n,"add")),U(C,V)};Me(T,C=>{ti.list.length?C(A):C(D,-1)})}U(w,b)},p=w=>{var b=$M(),T=_(Mt(b),4),A=R(T);Hf(A,{get onrefresh(){return e.onrefresh}}),U(w,b)},m=w=>{var b=ew(),T=_(Mt(b),4),A=R(T);Ph(A,{get accounts(){return ti.list},get active(){return ti.active},get onrefresh(){return e.onrefresh}}),U(w,b)};Me(y,w=>{s(n)==="overview"?w(S):s(n)==="add"?w(p,1):w(m,-1)})}J("click",u,function(...w){e.onback?.apply(this,w)}),U(i,c),Xt()}rn(["click"]);var iw=N('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),rw=N('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),aw=N('<p class="text-center text-[11px] text-red-400"> </p>'),sw=N("<option> </option>"),ow=N("<option>No instances yet</option>"),lw=N('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),cw=N('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),dw=N('<p class="mt-2 text-[11px] text-red-400"> </p>'),uw=N('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="flex items-center gap-1.5 rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer"><!> Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),fw=N('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function hw(i,e){jt(e,!0);let t=ot(e,"instances",19,()=>[]),n=ot(e,"active",3,null),r=ot(e,"gameRunning",3,!1),a=ot(e,"status",3,"Ready");function l(z,O){const H=window.__TAURI__?.core;return H?H.invoke(z,O):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const o="twilight-pinned-servers";let c=Z(Pt(f())),d=Z(""),u=Z(""),h=Z("");function f(){try{const z=JSON.parse(localStorage.getItem(o)??"[]");return Array.isArray(z)?z:[]}catch{return[]}}function g(){localStorage.setItem(o,JSON.stringify(s(c)))}function y(z){z.preventDefault(),v(h,"");const O=s(u).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(O)){v(h,"Address must be a hostname (optionally host:port).");return}v(c,[...s(c),{name:s(d).trim()||O.split(":")[0],address:O}],!0),g(),v(d,""),v(u,"")}function S(z){v(c,s(c).filter((O,H)=>H!==z),!0),g()}let p=Z("");nn(()=>{s(p)&&t().some(z=>z.id===s(p))||v(p,t()[0]?.id??"",!0)});const m=mt(()=>t().find(z=>z.id===s(p))?.name??"no instance selected");function w(z){!s(p)||r()||e.onlaunch?.(s(p),z.address)}let b=Z(""),T=Z(!1);async function A(z){const O=window.__TAURI__?.dialog?.open;if(!O){v(b,"File picker unavailable in this build.");return}try{const H=await O({multiple:!1,title:z==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!H)return;v(T,!0),v(b,""),await l("set_account_textures",{id:n().id,skin:z==="skin"?String(H):null,cape:z==="cape"?String(H):null}),await e.onrefresh?.()}catch(H){v(b,String(H),!0)}finally{v(T,!1)}}async function D(){if(n())try{v(T,!0),await l("set_account_textures",{id:n().id,skin:null,cape:null}),await e.onrefresh?.()}catch(z){v(b,String(z),!0)}finally{v(T,!1)}}function C(z){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[z.account_type.type]??"Yggdrasil"}var V=fw(),x=R(V);{var M=z=>{var O=iw(),H=R(O);Ei(H,{emoji:"👤",size:30});var X=_(H,6);J("click",X,()=>e.onopenaccounts?.()),U(z,O)},ne=z=>{var O=uw(),H=R(O),X=R(H);Cf(X,()=>n()?.id,K=>{{let Se=mt(()=>ds(n()));gc(K,{get skin(){return s(Se)},get cape(){return n().cape},get model(){return n().model},width:220,height:300})}});var ge=_(X,2),le=R(ge),ce=q(le,!0),me=_(le,2),ee=q(me,!0),W=_(ge,2),re=R(W),Pe=_(re,2),Ce=_(Pe,2);{var Fe=K=>{var Se=rw();ae(()=>Se.disabled=s(T)),J("click",Se,D),U(K,Se)};Me(Ce,K=>{(n().cape||n().skin)&&K(Fe)})}var Ve=_(W,2);{var qe=K=>{var Se=aw(),j=q(Se,!0);ae(()=>Y(j,s(b))),U(K,Se)};Me(Ve,K=>{s(b)&&K(qe)})}var Xe=_(H,2),we=R(Xe),Te=_(R(we),2),Re=R(Te);Et(Re,21,t,K=>K.id,(K,Se)=>{var j=sw(),fe=q(j,!0),de={};ae(()=>{Y(fe,s(Se).name),de!==(de=s(Se).id)&&(j.value=(j.__value=de)??"")}),U(K,j)},K=>{var Se=ow();Se.value=Se.__value="",U(K,Se)}),xa(Re);var F=_(Re,2),st=R(F);Wt(st,{name:"log",size:12});var ze=_(Te,2),ve=q(ze,!0),Le=_(ze,2),Oe=q(Le,!0),De=_(we,2),Ge=_(R(De),2);Et(Ge,19,()=>s(c),K=>K.address,(K,Se,j)=>{var fe=lw(),de=R(fe),pe=R(de),Q=q(pe,!0),L=_(pe,2),G=q(L,!0),he=_(de,2),B=_(he,2);ae(()=>{Y(Q,s(Se).name),Y(G,s(Se).address),he.disabled=!s(p)||r(),je(he,"title",`Join ${s(Se).address} with ${s(m)}`)}),J("click",he,()=>w(s(Se))),J("click",B,()=>S(s(j))),U(K,fe)},K=>{var Se=cw();U(K,Se)});var He=_(Ge,2),it=R(He),nt=_(it,2),I=_(He,2);{var E=K=>{var Se=dw(),j=q(Se,!0);ae(()=>Y(j,s(h))),U(K,Se)};Me(I,K=>{s(h)&&K(E)})}ae(K=>{Y(ce,n().username),Y(ee,K),re.disabled=s(T),Pe.disabled=s(T),ze.disabled=!s(p)||r(),Y(ve,r()?"GAME RUNNING…":"LAUNCH GAME"),Y(Oe,r()?a():s(m))},[()=>C(n())]),J("click",re,()=>A("skin")),J("click",Pe,()=>A("cape")),ba(Re,()=>s(p),K=>v(p,K)),J("click",F,()=>e.onopenconsole?.()),J("click",ze,()=>e.onlaunch?.(s(p),null)),kn("submit",He,y),Ot(it,()=>s(d),K=>v(d,K)),Ot(nt,()=>s(u),K=>v(u,K)),U(z,O)};Me(x,z=>{n()?z(ne,-1):z(M)})}U(i,V),Xt()}rn(["click"]);var pw=N("<span></span>"),mw=N('<button><span class="block text-[12.5px] font-medium"> </span> <span class="mt-0.5 block text-[11px] text-(--text-muted)"> </span></button>'),vw=N('<p class="mt-3 text-[11px] text-(--text-muted)">Checking available versions…</p>'),gw=N('<p class="mt-3 text-[11px] text-(--text-muted)">Host CPU target: <span class="text-(--text-main)"> </span> </p>'),_w=N('<p class="text-[12px] text-(--text-muted)">Pick the server software.</p> <div class="mt-3 grid grid-cols-2 gap-2"></div> <!> <!>',1),xw=N('<p class="mt-4 text-[12px] text-(--text-muted)">Fetching versions…</p>'),bw=N('<p class="mt-4 text-[12px] text-amber-500"> </p>'),yw=N("<button> </button>"),Sw=N('<div class="mt-3 grid max-h-[380px] grid-cols-4 gap-1.5 overflow-y-auto"></div>'),Mw=N('<p class="text-[12px] text-(--text-muted)"> </p> <!>',1),ww=N('<p class="mt-1 text-[11px] text-amber-500">Max memory is below min — the flag is skipped.</p>'),Ew=N('<p class="text-[12px] text-(--text-muted)">Name, port and memory.</p> <label for="ns-name" class="mt-4 block text-[11px] font-medium text-(--text-muted)">Server name</label> <input id="ns-name" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-3) px-2.5 text-[12.5px] outline-none focus:border-(--accent)" placeholder="My Server"/> <label for="ns-port" class="mt-3 block text-[11px] font-medium text-(--text-muted)">Port</label> <input id="ns-port" type="number" min="1024" max="65535" class="mt-1 h-8 w-40 rounded border border-(--border) bg-(--bg-3) px-2.5 text-[12.5px] outline-none focus:border-(--accent)"/> <p class="mt-3 block text-[11px] font-medium text-(--text-muted)"> </p> <input class="mt-1 w-full accent-(--accent)" type="range" min="512" max="8192" step="256"/> <input class="mt-1 w-full accent-(--accent)" type="range" min="1024" max="32768" step="512"/> <!>',1),Tw=N(`<div class="mt-2 rounded border border-amber-500/40 bg-amber-500/10 p-2.5 text-[11px] text-amber-500">Offline Server Notice: With online-mode=false, anyone can connect using any username or spoof administrator UUIDs.
            You can 1-click install AuthMeReloaded from the server card afterwards.</div>`),Aw=N('<p class="mt-3 text-[11px] text-rose-400"> </p>'),Rw=N('<p class="text-[12px] text-(--text-muted)">Who can reach the server?</p> <div class="mt-3 grid gap-2"><button><span class="block text-[12.5px] font-medium">Local Only</span> <span class="mt-0.5 block text-[11px] text-(--text-muted)">LAN and localhost — no tunnel.</span></button> <button><span class="block text-[12.5px] font-medium">Enable Minekube Connect Tunnel</span> <span class="mt-0.5 block text-[11px] text-(--text-muted)">Friends join over the internet without port forwarding (connect.minekube.com).</span></button></div> <label class="mt-4 flex cursor-pointer items-start gap-2.5"><input type="checkbox" class="mt-0.5 accent-(--accent)"/> <span class="min-w-0"><span class="block text-[12.5px] font-medium">Offline Mode (online-mode=false)</span> <span class="mt-0.5 block text-[11px] text-(--text-muted)">Allows cracked / third-party clients. TwilightMC recommends AuthMeReloaded for these servers.</span></span></label> <!> <!>',1),Cw=N('<button class="rounded border border-(--border) px-4 py-1.5 text-[12px] font-medium text-(--text-main) hover:border-(--accent) disabled:opacity-40">← Back</button>'),Nu=N('<button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button>'),Pw=N('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="dialog" aria-modal="true" aria-label="New server" class="flex max-h-[640px] w-[560px] flex-col rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-center justify-between border-b border-(--border) p-4"><h3 class="text-[14px] font-semibold">New Server</h3> <div class="flex items-center gap-1.5"></div></div> <div class="min-h-0 flex-1 overflow-y-auto p-4"><!></div> <div class="flex items-center justify-between border-t border-(--border) p-4"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <div class="flex items-center gap-2"><!> <!></div></div></div></div>');function Lw(i,e){jt(e,!0);const t=[{id:"paper",label:"Paper",note:"High-performance Bukkit server"},{id:"purpur",label:"Purpur",note:"Paper fork, maximum configurability"},{id:"vanilla",label:"Vanilla",note:"Official Mojang server"},{id:"fabric",label:"Fabric",note:"Lightweight mod loader"},{id:"pumpkin",label:"PumpkinMC (Rust)",note:"Multithreaded native server"},{id:"velocity",label:"Velocity",note:"Modern proxy (no world)"},{id:"forge",label:"Forge",note:"Mod loader — manual installer"},{id:"neoforge",label:"NeoForge",note:"Mod loader, auto-installer"},{id:"steel",label:"SteelMC (Rust)",note:"Native server, auto-download"}],n={forge:"TwilightMC cannot fetch Forge installers automatically — Next continues with a manual install; drop the launcher jar into the server folder before starting."};let r=Z(1),a=Z(""),l=Z(Pt([])),o=Z(""),c=Z(!1),d=Z(""),u=Z(""),h=Z(25565),f=Z(1024),g=Z(4096),y=Z(!0),S=Z(!1),p=Z(""),m=Z(""),w=Z(""),b=0;window.__TAURI__?.core.invoke("get_cpu_target").then(Te=>v(w,Te,!0)).catch(()=>{});function T(Te){return t.find(Re=>Re.id===Te)?.label??Te}async function A(Te){if(s(a)===Te)return;const Re=++b;v(a,Te,!0),v(d,""),v(l,[],!0),v(o,""),v(c,!0);try{const F=await window.__TAURI__.core.invoke("fetch_server_versions",{software:Te});if(Re!==b)return;v(l,F??[],!0),Te==="fabric"&&v(l,s(l).slice(0,80),!0),s(l).length===0&&n[Te]&&v(o,n[Te],!0)}catch(F){Re===b&&v(o,String(F),!0)}finally{Re===b&&v(c,!1)}}function D(Te){v(d,Te,!0)}function C(){if(s(r)===1){if(!s(a))return;v(r,2)}else if(s(r)===2){if(s(c)||!s(d)&&s(l).length>0)return;s(d)||v(d,"manual"),s(u).trim()||v(u,`${T(s(a))} ${s(d).split("+")[0]}`),v(r,3)}else s(r)===3&&v(r,4)}function V(){s(p)||s(r)<=1||v(r,s(r)-1)}const x=mt(()=>s(r)===1&&!!s(a)&&!s(c)||s(r)===2&&!s(c)&&(s(d)!==""||s(l).length===0)||s(r)===3),M=mt(()=>s(w).includes("v3")?"AVX2":"baseline");async function ne(){v(m,""),v(p,"create");try{await window.__TAURI__.core.invoke("create_server",{config:{name:s(u).trim(),software:s(a),version:s(d).trim()||"manual",loader_version:null,port:Number(s(h))||25565,min_memory_mb:Number(s(f))||0,max_memory_mb:Number(s(g))||0,offline_mode:s(S),connect:!s(y)}}),e.oncreated?.(),e.onclose?.(),Jt(`Server ${s(u).trim()} created.`,"success")}catch(Te){v(m,String(Te),!0)}finally{v(p,"")}}var z=Pw(),O=R(z),H=R(O),X=_(R(H),2);Et(X,20,()=>[1,2,3,4],Te=>Te,(Te,Re)=>{var F=pw();ae(()=>xt(F,1,`h-1.5 w-6 rounded-full ${s(r)>=Re?"bg-(--accent)":"bg-(--bg-3)"}`)),U(Te,F)});var ge=_(H,2),le=R(ge);{var ce=Te=>{var Re=_w(),F=_(Mt(Re),2);Et(F,21,()=>t,Oe=>Oe.id,(Oe,De)=>{var Ge=mw(),He=R(Ge),it=q(He,!0),nt=_(He,2),I=q(nt,!0);ae(()=>{xt(Ge,1,`rounded border px-3 py-2.5 text-left transition-colors ${s(a)===s(De).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--accent)"}`),Y(it,s(De).label),Y(I,s(De).note)}),J("click",Ge,()=>A(s(De).id)),U(Oe,Ge)});var st=_(F,2);{var ze=Oe=>{var De=vw();U(Oe,De)};Me(st,Oe=>{s(c)&&Oe(ze)})}var ve=_(st,2);{var Le=Oe=>{var De=gw(),Ge=_(R(De)),He=q(Ge,!0),it=_(Ge);ae(()=>{Y(He,s(w)),Y(it,` — native builds
            are matched to it (${s(M)??""}).`)}),U(Oe,De)};Me(ve,Oe=>{s(w)&&Oe(Le)})}U(Te,Re)},me=Te=>{var Re=Mw(),F=Mt(Re),st=q(F),ze=_(F,2);{var ve=De=>{var Ge=xw();U(De,Ge)},Le=De=>{var Ge=bw(),He=q(Ge,!0);ae(()=>Y(He,s(o))),U(De,Ge)},Oe=De=>{var Ge=Sw();Et(Ge,20,()=>s(l),He=>He,(He,it)=>{var nt=yw(),I=q(nt,!0);ae(E=>{xt(nt,1,`rounded border px-2 py-1.5 text-[11.5px] transition-colors ${s(d)===it?"border-(--accent) bg-(--brand-tint) font-medium text-(--accent)":"border-(--border) hover:border-(--accent)"}`),Y(I,E)},[()=>it.split("+")[0]]),J("click",nt,()=>D(it)),U(He,nt)}),U(De,Ge)};Me(ze,De=>{s(c)?De(ve):s(o)?De(Le,1):De(Oe,-1)})}ae(De=>Y(st,`Pick the version for ${De??""}.`),[()=>T(s(a))]),U(Te,Re)},ee=Te=>{var Re=Ew(),F=_(Mt(Re),4),st=_(F,4),ze=_(st,2),ve=q(ze),Le=_(ze,2),Oe=_(Le,2),De=_(Oe,2);{var Ge=He=>{var it=ww();U(He,it)};Me(De,He=>{s(g)<s(f)&&He(Ge)})}ae(()=>Y(ve,`Memory: ${s(f)??""}-${s(g)??""} MiB`)),Ot(F,()=>s(u),He=>v(u,He)),Ot(st,()=>s(h),He=>v(h,He)),Ot(Le,()=>s(f),He=>v(f,He)),Ot(Oe,()=>s(g),He=>v(g,He)),U(Te,Re)},W=Te=>{var Re=Rw(),F=_(Mt(Re),2),st=R(F),ze=_(st,2),ve=_(F,2),Le=R(ve),Oe=_(ve,2);{var De=it=>{var nt=Tw();U(it,nt)};Me(Oe,it=>{s(S)&&it(De)})}var Ge=_(Oe,2);{var He=it=>{var nt=Aw(),I=q(nt,!0);ae(()=>Y(I,s(m))),U(it,nt)};Me(Ge,it=>{s(m)&&it(He)})}ae(()=>{xt(st,1,`rounded border px-3 py-2.5 text-left transition-colors ${s(y)?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--accent)"}`),xt(ze,1,`rounded border px-3 py-2.5 text-left transition-colors ${s(y)?"border-(--border) hover:border-(--accent)":"border-(--accent) bg-(--brand-tint)"}`)}),J("click",st,()=>v(y,!0)),J("click",ze,()=>v(y,!1)),Am(Le,()=>s(S),it=>v(S,it)),U(Te,Re)};Me(le,Te=>{s(r)===1?Te(ce):s(r)===2?Te(me,1):s(r)===3?Te(ee,2):Te(W,-1)})}var re=_(ge,2),Pe=R(re),Ce=_(Pe,2),Fe=R(Ce);{var Ve=Te=>{var Re=Cw();ae(()=>Re.disabled=s(p)!==""),J("click",Re,V),U(Te,Re)};Me(Fe,Te=>{s(r)>1&&Te(Ve)})}var qe=_(Fe,2);{var Xe=Te=>{var Re=Nu(),F=q(Re,!0);ae(st=>{Re.disabled=st,Y(F,s(p)==="create"?"Creating…":"Create Server")},[()=>s(p)!==""||!s(u).trim()]),J("click",Re,ne),U(Te,Re)},we=Te=>{var Re=Nu(),F=q(Re,!0);ae(()=>{Re.disabled=s(p)!==""||!s(x),Y(F,s(r)===3?"Next: Networking":"Next →")}),J("click",Re,C),U(Te,Re)};Me(qe,Te=>{s(r)===4?Te(Xe):Te(we,-1)})}ae(()=>Pe.disabled=s(p)!==""),J("click",z,Te=>{Te.target===Te.currentTarget&&!s(p)&&e.onclose?.()}),J("click",Pe,function(...Te){e.onclose?.apply(this,Te)}),U(i,z),Xt()}rn(["click"]);var Iw=N('<p class="mt-6 text-[13px] text-(--text-muted)">Scanning servers…</p>'),Dw=N('<p class="mt-6 text-[13px] text-rose-400"> </p>'),Uw=N('<div class="mt-8 rounded-lg border border-(--border) bg-(--bg-subtle) p-6 text-center"><p class="text-[13px] font-medium">No local servers yet</p> <p class="mt-1 text-[12px] text-(--text-muted)">Create one with the wizard — Vanilla, Paper, Purpur, Fabric or the Rust-native PumpkinMC.</p></div>'),kw=N("<span> </span>"),Nw=N('<div class="mt-2 flex items-center gap-2"><code class="min-w-0 flex-1 truncate rounded bg-(--bg-3) px-2 py-1 text-[11px]"> </code> <button class="shrink-0 rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)">Copy Share Link</button></div>'),Ow=N('<button class="mt-2 w-full rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40">Start to activate the tunnel</button>'),Fw=N('<button class="mt-1.5 w-full rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40">(Re)install Connect plugin</button>'),Bw=N('<div class="mt-3 rounded border border-(--border) bg-(--bg-2) p-2.5"><div class="flex items-center justify-between gap-2"><span class="text-[11px] font-medium">Minekube Connect</span> <span> </span></div> <!> <!></div>'),zw=N('<button class="mt-2 w-full rounded border border-amber-500/50 px-2 py-1 text-[11px] font-medium text-amber-500 hover:bg-amber-500/10 disabled:opacity-40">Install AuthMeReloaded (Recommended for Offline Servers)</button>'),Gw=N('<div class="mt-2 rounded border border-amber-500/40 bg-amber-500/10 p-2.5"><p class="text-[11px] text-amber-500">Offline Server Notice: With online-mode=false, anyone can connect using any username or spoof administrator UUIDs.</p> <!></div>'),Hw=N('<button class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40">Graceful Stop</button> <button class="rounded border border-rose-500/40 px-2 py-1 text-[11px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">Kill</button>',1),Vw=N('<button class="rounded border border-(--accent) px-2 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent-hover) disabled:opacity-40">Start</button> <button class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent) disabled:opacity-40">Restart</button>',1),Ww=N('<span class="text-(--text-muted)">No output yet — start the server.</span>'),jw=N('<div class="whitespace-pre-wrap break-all"> </div>'),Xw=N('<!> <!> <div class="mt-3 grid grid-cols-3 gap-1.5"><!> <button class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)">Open Folder</button> <button class="rounded border border-(--border) px-2 py-1 text-[11px] hover:border-(--accent)">Edit Properties</button> <button class="rounded border border-rose-500/40 px-2 py-1 text-[11px] text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">Delete</button></div> <div class="mt-3 flex h-44 flex-col overflow-hidden rounded border border-(--border) bg-(--bg-2)"><div class="min-h-0 flex-1 overflow-y-auto p-2 font-mono text-[10.5px] leading-relaxed"><!></div> <form class="flex items-center gap-1.5 border-t border-(--border) px-2 py-1.5"><span class="text-[11px] text-(--accent)">&gt;</span> <input class="h-6 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-3) px-2 font-mono text-[11px] outline-none focus:border-(--accent)"/></form></div>',1),qw=N('<div><button class="block w-full text-left"><div class="flex items-center justify-between gap-2"><span class="truncate text-[13px] font-medium"> </span> <span> </span></div> <div class="mt-1.5 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="rounded bg-(--bg-3) px-1.5 py-0.5 font-medium text-(--text-main)"> </span> <span> </span> <!></div></button> <!></div>'),Yw=N('<div class="mt-4 grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));"></div>'),Kw=N('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="dialog" aria-modal="true" aria-label="Edit server properties" class="flex h-[520px] w-[560px] flex-col rounded-lg border border-(--border-1) bg-(--bg-2) p-4 shadow-2xl animate-[fade-in_120ms_ease-out]"><h3 class="text-[14px] font-semibold"> </h3> <textarea class="mt-3 min-h-0 flex-1 resize-none rounded border border-(--border) bg-(--bg-3) p-2.5 font-mono text-[11.5px] leading-relaxed outline-none focus:border-(--accent)" spellcheck="false"></textarea> <div class="mt-3 flex justify-end gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div></div></div>'),Zw=N('<div class="flex min-h-0 flex-1 flex-col"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">Servers &amp; P2P</h2> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">+ New Server</button></div> <!></div> <!> <!>',1);function Jw(i,e){jt(e,!0);let t=Z(Pt([])),n=Z(""),r=Z(!0),a=Z(null),l=Z(!1),o=Z(""),c=Z(Pt({})),d=Z(Pt({})),u=Z(""),h=Z(!1),f=Z(""),g=Z(null);const y=2e3;function S(we,Te){return window.__TAURI__.core.invoke(we,Te)}async function p(){v(n,"");try{v(t,await S("list_servers"),!0),s(a)&&!s(t).some(we=>we.id===s(a))&&v(a,null);for(const we of s(t))try{const[Te,Re]=await S("get_connect_status",{id:we.id});v(d,{...s(d),[we.id]:{connect:Te,endpoint:Re}},!0)}catch{}}catch(we){v(n,String(we),!0)}finally{v(r,!1)}}function m(we,Te){const Re={...s(c)},F=[...Re[we]??[],Te];F.length>y&&F.splice(0,F.length-y),Re[we]=F,v(c,Re,!0),queueMicrotask(()=>s(g)?.scrollTo({top:s(g).scrollHeight}))}const w=mt(()=>s(t).find(we=>we.id===s(a))??null),b=mt(()=>s(c)[s(a)]??[]);async function T(we){v(a,we,!0),v(h,!1);try{const[Te,Re]=await S("get_connect_status",{id:we});v(d,{...s(d),[we]:{connect:Te,endpoint:Re}},!0)}catch{}}async function A(we,Te){if(!s(o)){v(o,we,!0);try{await S(we,{id:Te}),await p()}catch(Re){Jt(String(Re),"error",{title:"Server action failed"})}finally{v(o,"")}}}async function D(we){try{await S("open_server_folder",{id:we})}catch(Te){Jt(String(Te),"error")}}async function C(){if(s(w))try{const we=await S("get_server_properties",{id:s(w).id});v(u,we.join(`
`),!0),v(h,!0)}catch(we){Jt(String(we),"error")}}async function V(){if(!s(w))return;const we={};for(const Te of s(u).split(`
`)){const Re=Te.trim();if(!Re||Re.startsWith("#"))continue;const F=Re.indexOf("=");F>0&&(we[Re.slice(0,F).trim()]=Re.slice(F+1).trim())}v(o,"props");try{await S("update_server_properties",{id:s(w).id,properties:we}),Jt("Properties saved — restart the server to apply.","success"),v(h,!1)}catch(Te){Jt(String(Te),"error",{title:"Save failed"})}finally{v(o,"")}}async function x(){if(s(w)){v(o,"authme");try{await S("install_authme",{id:s(w).id}),Jt("AuthMeReloaded installed into plugins/.","success")}catch(we){Jt(String(we),"error")}finally{v(o,"")}}}async function M(){if(s(w)){v(o,"connect");try{await S("install_connect",{id:s(w).id}),Jt("Minekube Connect plugin installed into plugins/.","success")}catch(we){Jt(String(we),"error")}finally{v(o,"")}}}async function ne(){const we=s(d)[s(a)]?.endpoint;if(we)try{await navigator.clipboard.writeText(we),Jt("Share address copied — send it to your friends!","success")}catch{Jt("Copy failed — select the address manually.","warning")}}async function z(we){if(we?.preventDefault(),!s(w)||!s(f).trim())return;const Te=s(f);v(f,"");try{await S("send_server_command",{id:s(w).id,command:Te})}catch(Re){Jt(String(Re),"error")}}async function O(we){if(await bv({title:"Delete server?",message:"This removes the server directory and every file inside it."})){v(o,"delete");try{await S("delete_server",{id:we}),s(a)===we&&v(a,null),await p()}catch(Re){Jt(String(Re),"error")}finally{v(o,"")}}}const H={Running:"bg-green-500/15 text-green-500",Starting:"bg-amber-500/15 text-amber-500",Stopping:"bg-amber-500/15 text-amber-500",Stopped:"bg-(--bg-3) text-(--text-muted)"};function X(we){return`rounded-full px-2 py-0.5 text-[10px] font-medium ${H[we]??H.Stopped}`}_i(()=>{const we=[];return(async()=>{try{we.push(await window.__TAURI__.event.listen("server-log",Te=>m(Te.payload.id,Te.payload.line))),we.push(await window.__TAURI__.event.listen("server-state",Te=>p())),we.push(await window.__TAURI__.event.listen("server-connect",Te=>p()))}catch{}await p()})(),()=>we.forEach(Te=>Te())});var ge=Zw(),le=Mt(ge),ce=R(le),me=_(R(ce),2),ee=_(ce,2);{var W=we=>{var Te=Iw();U(we,Te)},re=we=>{var Te=Dw(),Re=q(Te,!0);ae(()=>Y(Re,s(n))),U(we,Te)},Pe=we=>{var Te=Uw();U(we,Te)},Ce=we=>{var Te=Yw();Et(Te,21,()=>s(t),Re=>Re.id,(Re,F)=>{var st=qw(),ze=R(st),ve=R(ze),Le=R(ve),Oe=q(Le,!0),De=_(Le,2),Ge=q(De,!0),He=_(ve,2),it=R(He),nt=q(it),I=_(it,2),E=q(I),K=_(I,2);{var Se=de=>{var pe=kw(),Q=q(pe);ae(()=>Y(Q,`${(s(F).min_memory_mb||0)??""}-${(s(F).max_memory_mb||0)??""}M`)),U(de,pe)};Me(K,de=>{(s(F).min_memory_mb||s(F).max_memory_mb)&&de(Se)})}var j=_(ze,2);{var fe=de=>{var pe=Xw(),Q=Mt(pe);{var L=ut=>{var vt=Bw(),rt=R(vt),St=_(R(rt),2),Ut=q(St,!0),It=_(rt,2);{var Rt=Ye=>{var _t=Nw(),P=R(_t),se=q(P,!0),_e=_(P,2);ae(()=>Y(se,s(d)[s(F).id].endpoint)),J("click",_e,ne),U(Ye,_t)},Gt=Ye=>{var _t=Ow();ae(()=>_t.disabled=s(o)!==""||s(F).state!=="Stopped"),J("click",_t,()=>A("start_server",s(F).id)),U(Ye,_t)};Me(It,Ye=>{s(d)[s(F).id]?.endpoint?Ye(Rt):Ye(Gt,-1)})}var en=_(It,2);{var pt=Ye=>{var _t=Fw();ae(()=>_t.disabled=s(o)!==""),J("click",_t,M),U(Ye,_t)};Me(en,Ye=>{s(F).state==="Stopped"&&Ye(pt)})}ae(()=>{xt(St,1,`text-[10px] ${s(d)[s(F).id]?.endpoint?"text-green-500":"text-(--text-muted)"}`),Y(Ut,s(d)[s(F).id]?.endpoint?"Tunnel active":s(F).state==="Running"?"Waiting for endpoint…":"Offline")}),U(ut,vt)};Me(Q,ut=>{s(F).connect&&ut(L)})}var G=_(Q,2);{var he=ut=>{var vt=Gw(),rt=_(R(vt),2);{var St=Ut=>{var It=zw();ae(()=>It.disabled=s(o)!==""),J("click",It,x),U(Ut,It)};Me(rt,Ut=>{(s(F).software==="paper"||s(F).software==="purpur"||s(F).software==="vanilla")&&Ut(St)})}U(ut,vt)};Me(G,ut=>{s(F).offline_mode&&ut(he)})}var B=_(G,2),$=R(B);{var be=ut=>{var vt=Hw(),rt=Mt(vt),St=_(rt,2);ae(()=>{rt.disabled=s(o)!=="",St.disabled=s(o)!==""}),J("click",rt,()=>A("stop_server",s(F).id)),J("click",St,()=>A("kill_server",s(F).id)),U(ut,vt)},Ue=ut=>{var vt=Vw(),rt=Mt(vt),St=_(rt,2);ae(()=>{rt.disabled=s(o)!=="",St.disabled=s(o)!==""}),J("click",rt,()=>A("start_server",s(F).id)),J("click",St,()=>A("restart_server",s(F).id)),U(ut,vt)};Me($,ut=>{s(F).state==="Running"||s(F).state==="Starting"?ut(be):ut(Ue,-1)})}var k=_($,2),Ae=_(k,2),ie=_(Ae,2),Ee=_(B,2),Ie=R(Ee),tt=R(Ie);{var Qe=ut=>{var vt=Ww();U(ut,vt)},Je=ut=>{var vt=_a(),rt=Mt(vt);Et(rt,17,()=>s(b),ao,(St,Ut)=>{var It=jw(),Rt=q(It,!0);ae(()=>Y(Rt,s(Ut))),U(St,It)}),U(ut,vt)};Me(tt,ut=>{s(b).length===0?ut(Qe):ut(Je,-1)})}rc(Ie,ut=>v(g,ut),()=>s(g));var dt=_(Ie,2),ht=_(R(dt),2);ae(()=>{ie.disabled=s(o)!=="",je(ht,"placeholder",s(F).state==="Running"?"console command…":"start the server first"),ht.disabled=s(F).state!=="Running"}),J("click",k,()=>D(s(F).id)),J("click",Ae,C),J("click",ie,()=>O(s(F).id)),kn("submit",dt,z),Ot(ht,()=>s(f),ut=>v(f,ut)),U(de,pe)};Me(j,de=>{s(a)===s(F).id&&de(fe)})}ae(de=>{xt(st,1,`rounded-lg border p-3 transition-colors ${s(a)===s(F).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) bg-(--bg-subtle) hover:border-(--accent)"}`),Y(Oe,s(F).id),xt(De,1,de),Y(Ge,s(F).state),Y(nt,`${(s(F).software==="pumpkin"?"PumpkinMC Rust":s(F).software==="steel"?"SteelMC Rust":s(F).software)??""} ${s(F).version??""}`),Y(E,`:${s(F).port??""}`)},[()=>gm(X(s(F).state))]),J("click",ze,()=>T(s(F).id)),U(Re,st)}),U(we,Te)};Me(ee,we=>{s(r)?we(W):s(n)?we(re,1):s(t).length===0?we(Pe,2):we(Ce,-1)})}var Fe=_(le,2);{var Ve=we=>{var Te=Kw(),Re=R(Te),F=R(Re),st=q(F),ze=_(F,2),ve=_(ze,2),Le=R(ve),Oe=_(Le,2);ae(()=>{Y(st,`server.properties — ${s(w).id??""}`),Oe.disabled=s(o)!==""}),J("click",Te,De=>{De.target===De.currentTarget&&v(h,!1)}),Ot(ze,()=>s(u),De=>v(u,De)),J("click",Le,()=>v(h,!1)),J("click",Oe,V),U(we,Te)};Me(Fe,we=>{s(h)&&s(w)&&we(Ve)})}var qe=_(Fe,2);{var Xe=we=>{Lw(we,{onclose:()=>v(l,!1),oncreated:p})};Me(qe,we=>{s(l)&&we(Xe)})}J("click",me,()=>v(l,!0)),U(i,ge),Xt()}rn(["click"]);var Qw=N('<h3 class="text-(--step-heading) font-semibold text-(--fg-1)"> </h3>'),$w=N('<input class="mt-3 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"/>'),eE=N('<button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1)"> </button>'),tE=N('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="alertdialog" aria-modal="true" class="w-[380px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><!> <p> </p> <!></div></div> <div class="flex items-center justify-end gap-2 border-t border-(--border-1) px-4 py-3"><!> <button class="rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"> </button></div></div></div>');function nE(i,e){jt(e,!0);const t={info:{icon:"about",tint:"text-(--accent)"},success:{icon:"success",tint:"text-green-500"},warning:{icon:"warning",tint:"text-(--accent-star)"},error:{icon:"error",tint:"text-rose-400"},confirm:{icon:"help",tint:"text-(--accent)"},prompt:{icon:"edit",tint:"text-(--accent)"}},n=mt(()=>ai.dialog),r=mt(()=>t[s(n)?.variant]??t.info);let a=Z("");nn(()=>{s(n),v(a,s(n)?.value??"",!0)});function l(){s(n)?.variant==="prompt"?bs(s(a)):bs(!0)}function o(){s(n)?.variant==="prompt"?bs(null):bs(!1)}function c(f){f.key==="Enter"&&(f.preventDefault(),l())}var d=_a(),u=Mt(d);{var h=f=>{var g=tE(),y=R(g),S=R(y),p=R(S),m=R(p);{let H=mt(()=>s(n).icon||s(r).icon);Wt(m,{get name(){return s(H)},size:17})}var w=_(p,2),b=R(w);{var T=H=>{var X=Qw(),ge=q(X,!0);ae(()=>Y(ge,s(n).title)),U(H,X)};Me(b,H=>{s(n).title&&H(T)})}var A=_(b,2),D=q(A,!0),C=_(A,2);{var V=H=>{var X=$w();Rp(X),ae(()=>je(X,"placeholder",s(n).placeholder??"")),Ot(X,()=>s(a),ge=>v(a,ge)),U(H,X)};Me(C,H=>{s(n).variant==="prompt"&&H(V)})}var x=_(S,2),M=R(x);{var ne=H=>{var X=eE(),ge=q(X,!0);ae(()=>Y(ge,s(n).cancelLabel??"Cancel")),J("click",X,o),U(H,X)};Me(M,H=>{s(n).variant!=="alert"&&H(ne)})}var z=_(M,2),O=q(z,!0);ae(()=>{je(y,"aria-label",s(n).title||"Alert"),xt(A,1,`mt-1 text-(--step-body) break-words text-(--fg-2) ${s(n).title?"":"font-medium text-(--fg-1)"}`),Y(D,s(n).message),Y(O,s(n).confirmLabel??"OK")}),J("click",g,H=>{H.target===H.currentTarget&&o()}),J("keydown",y,c),J("click",z,l),U(f,g)};Me(u,f=>{s(n)&&f(h)})}U(i,d),Xt()}rn(["click","keydown"]);var iE=N('<div class="grid gap-2"><button class="flex items-center gap-2.5 rounded border border-(--accent) bg-(--brand-tint) px-3 py-2 text-left text-[12px] font-medium text-(--accent) hover:bg-(--accent-hover) disabled:opacity-40"><span class="w-4 shrink-0 text-center" aria-hidden="true"> </span> <span class="min-w-0">Install core mods from Modrinth — no key needed <span class="block font-normal text-(--text-muted)">Fugue, MixinBooter, ConfigAnytime for 1.12.2 (forge)</span></span></button> <button class="flex items-center gap-2.5 rounded border border-(--border) px-3 py-2 text-left text-[12px] text-(--text-main) hover:border-(--accent) disabled:opacity-40"><span class="w-4 shrink-0 text-center" aria-hidden="true"> </span> <span class="min-w-0">Import Downloaded .zip… <span class="block font-normal text-(--text-muted)">CurseForge pack zip (manifest.json + overrides/)</span></span></button> <button class="flex items-center gap-2.5 rounded border border-(--border) px-3 py-2 text-left text-[12px] text-(--text-main) hover:border-(--accent) disabled:opacity-40"><span class="w-4 shrink-0 text-center" aria-hidden="true">↗</span> <span class="min-w-0">Open BareBones Template on CurseForge <span class="block font-normal text-(--text-muted)">Download the zip there, then import it above</span></span></button></div> <p class="mt-3 text-[11px] text-(--text-muted)">Scalar Legacy is CurseForge-only: the 1-click install covers the other three and the gate passes without it.</p>',1),rE=N('<p class="mt-1 text-[11px] text-(--text-muted)"> </p>'),aE=N('<div class="rounded border border-(--border) bg-(--bg-3) p-3"><p class="text-[12px] text-green-500"> </p> <!></div> <div class="mt-4 flex justify-end gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Close</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Launch 1.12.2</button></div>',1),sE=N('<p class="mt-3 text-[11px] text-rose-400"> </p>'),oE=N('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="dialog" aria-modal="true" aria-label="BareBones Template required" class="w-[440px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">BareBones Template required</h3> <p class="mt-1 text-[12px] text-(--fg-2)"></p></div></div> <div class="px-4 pb-4"><!> <!></div></div></div>');function lE(i,e){jt(e,!0);const t="https://www.curseforge.com/minecraft/modpacks/barebones-template-cleanroom/files";let n=Z(""),r=Z(""),a=Z(null);function l(){window.__TAURI__?.core.invoke("open_external_url",{url:t}).catch(C=>v(r,String(C),!0))}async function o(){v(r,""),v(n,"install");try{const C=await window.__TAURI__.core.invoke("install_cleanroom_core_mods",{instanceId:e.instanceId});v(a,{title:`Installed ${C.length} core mod${C.length===1?"":"s"}: Fugue, MixinBooter, ConfigAnytime.`,note:"Scalar Legacy is CurseForge-only and was skipped — the gate is satisfied without it. Import the full BareBones zip if you want it too."},!0)}catch(C){v(r,String(C),!0)}finally{v(n,"")}}async function c(){const C=window.__TAURI__?.dialog?.open;if(!C){v(r,"File picker unavailable in this build.");return}v(r,"");try{const V=await C({multiple:!1,title:"Import a CurseForge modpack zip",filters:[{name:"CurseForge modpack",extensions:["zip"]}]});if(!V)return;v(n,"import");const x=await window.__TAURI__.core.invoke("import_curseforge_pack",{zipPath:String(V),instanceId:e.instanceId});v(a,{title:`Imported ${x.name} ${x.version}: ${x.overrides_extracted} override file${x.overrides_extracted===1?"":"s"}.`,note:x.mods_skipped>0?`${x.mods_skipped} listed mod file${x.mods_skipped===1?" was":"s were"} not downloaded — add a CurseForge API key in Settings → API Keys to fetch them automatically.`:""},!0)}catch(V){v(r,String(V),!0)}finally{v(n,"")}}function d(){e.onlaunch?.(e.instanceId)}var u=oE(),h=R(u),f=R(h),g=R(f),y=R(g);Wt(y,{name:"mods",size:17});var S=_(g,2),p=_(R(S),2);p.textContent="CleanroomMC requires the BareBones Template (Cleanroom) mods (Fugue, MixinBooter, ConfigAnytime, Scalar Legacy) to boot 1.12.2 safely.";var m=_(f,2),w=R(m);{var b=C=>{var V=iE(),x=Mt(V),M=R(x),ne=R(M),z=q(ne,!0),O=_(M,2),H=R(O),X=q(H,!0),ge=_(O,2);ae(()=>{M.disabled=s(n)!=="",Y(z,s(n)==="install"?"…":"⚡"),O.disabled=s(n)!=="",Y(X,s(n)==="import"?"…":"📦"),ge.disabled=s(n)!==""}),J("click",M,o),J("click",O,c),J("click",ge,l),U(C,V)},T=C=>{var V=aE(),x=Mt(V),M=R(x),ne=q(M,!0),z=_(M,2);{var O=le=>{var ce=rE(),me=q(ce,!0);ae(()=>Y(me,s(a).note)),U(le,ce)};Me(z,le=>{s(a).note&&le(O)})}var H=_(x,2),X=R(H),ge=_(X,2);ae(()=>Y(ne,s(a).title)),J("click",X,()=>e.onclose?.()),J("click",ge,d),U(C,V)};Me(w,C=>{s(a)?C(T,-1):C(b)})}var A=_(w,2);{var D=C=>{var V=sE(),x=q(V,!0);ae(()=>Y(x,s(r))),U(C,V)};Me(A,C=>{s(r)&&C(D)})}J("click",u,C=>{C.target===C.currentTarget&&!s(n)&&e.onclose?.()}),U(i,u),Xt()}rn(["click"]);var cE=N('<span class="block truncate text-(--step-body) font-semibold text-(--fg-1)"> </span>'),dE=N('<button title="Click to dismiss"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <span class="min-w-0 flex-1"><!> <span class="block text-(--step-meta) break-words text-(--fg-2)"> </span></span> <span class="shrink-0 text-(--step-caption) text-(--fg-2)">✕</span></button>'),uE=N('<div class="pointer-events-none fixed right-4 bottom-4 z-[80] flex w-80 flex-col gap-2"></div>');function fE(i,e){jt(e,!0);const t={info:{icon:"about",tint:"border-(--accent-1)/50"},success:{icon:"success",tint:"border-green-500/60"},warning:{icon:"warning",tint:"border-(--accent-2)/60"},error:{icon:"error",tint:"border-rose-500/60"}};let n=Z(!1);const r=new Map,a=new Set;function l(){if(!s(n))for(const u of ai.toasts)a.has(u.id)||(a.add(u.id),r.set(u.id,setTimeout(()=>{a.delete(u.id),r.delete(u.id),Kc(u.id)},u.duration)))}function o(){v(n,!0);for(const u of r.values())clearTimeout(u);r.clear(),a.clear()}function c(){v(n,!1),l()}nn(()=>{ai.toasts.length,l()});var d=uE();Et(d,21,()=>ai.toasts,u=>u.id,(u,h)=>{var f=dE(),g=R(f),y=R(g);Wt(y,{get name(){return(t[s(h).kind]??t.info).icon},size:14});var S=_(g,2),p=R(S);{var m=T=>{var A=cE(),D=q(A,!0);ae(()=>Y(D,s(h).title)),U(T,A)};Me(p,T=>{s(h).title&&T(m)})}var w=_(p,2),b=q(w,!0);ae(()=>{xt(f,1,`pointer-events-auto flex w-full items-start gap-2.5 rounded-lg border ${(t[s(h).kind]??t.info).tint??""} bg-(--bg-2) p-3 text-left shadow-xl animate-[fade-in_120ms_ease-out] hover:bg-(--bg-3)`),Y(b,s(h).message)}),J("click",f,()=>Kc(s(h).id)),U(u,f)}),kn("mouseenter",d,o),kn("mouseleave",d,c),U(i,d),Xt()}rn(["click"]);var hE=N('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),pE=N('<span class="truncate text-[13px]"> </span>'),mE=N('<button><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button>'),vE=N('<span class="truncate text-[13px]">Add Instance</span>'),gE=N('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),_E=N('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),xE=N('<button role="tab"> </button>'),bE=N('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),yE=N('<div class="mb-4 flex items-center gap-2"><button class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"><!> Add Instance</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance"><!> Install .mrpack</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="flex rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),SE=N('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),ME=N('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),wE=N('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),EE=N("<div> </div>"),TE=N('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),AE=N('<p class="mt-2 text-[12px] text-red-400"> </p>'),RE=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),CE=N('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),PE=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),LE=N('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button></div> <button><!> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)" aria-live="polite"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <!> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!> <!> <!> <!></div>');function IE(i,e){jt(e,!0);let t=Z("…"),n=Z("instances"),r=Z(Pt(lc(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));nn(()=>{dv(s(r)),localStorage.setItem("twilight-theme",s(r)),pv(s(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:ja(s(r))?"dark":"light"}).catch(()=>{})}),nv();let a=Z("Ready"),l=Z(!1),o=Z(Pt(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));nn(()=>{localStorage.setItem("twilight-mode",s(o)),window.__TAURI__?.core.invoke("set_mode_config",{mode:s(o)}).catch(()=>{})});let c=Z(localStorage.getItem("twilight-blind-mode")==="true"),d=Z(localStorage.getItem("twilight-deaf-mode")==="true");nn(()=>{localStorage.setItem("twilight-blind-mode",String(s(c))),localStorage.setItem("twilight-deaf-mode",String(s(d))),window.__TAURI__?.core.invoke("set_accessibility_config",{blindMode:s(c),deafMode:s(d)}).catch(()=>{})});const u=[{id:"instances",label:"Instances",icon:"instances"},{id:"worlds",label:"Servers & P2P",icon:"worlds"},{id:"downloads",label:"Downloads",icon:"download"},{id:"settings",label:"Settings",icon:"settings"},{id:"accounts",label:"Accounts",icon:"accounts"}],h={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Create and run local servers with the Minekube Connect tunnel."],downloads:["Downloads","Direct downloads land in a later milestone."]},f=mt(()=>ti.active);let g=Z(!1),y=Z(Pt([])),S=Z(!1),p=Z(""),m=Z(!1),w=Z(!1),b=Z(""),T=Z(!1),A=Z(""),D=Z(null),C=mt(()=>s(D)?"edit":s(n)),V=Z(null),x=Z(null),M=Z(null),ne=Z(!1),z=Z(""),O=Z(null),H=Z(""),X=Z(Pt([])),ge=Z(0),le=Z(0),ce=Z("");async function me(te,Ne){return window.__TAURI__.core.invoke(te,Ne)}function ee(){v(r,ja(s(r))?"twilight-light":"twilight-dark",!0)}async function W(){v(S,!0),v(p,"");try{v(y,await me("discover_java_installations"),!0)}catch(te){v(p,String(te),!0)}finally{v(S,!1)}}function re(){v(m,!0)}async function Pe(){if(s(b).trim()){v(T,!0),v(A,"");try{const te=await me("install_modpack",{pathOrUrl:s(b).trim()});v(w,!1),v(b,""),await nt(),te&&v(Oe,te,!0),v(a,"Modpack installed.")}catch(te){v(A,String(te),!0)}finally{v(T,!1)}}}let Ce=Z(Pt([])),Fe=Z(!1),Ve=Z(!1),qe=Z(null);nn(()=>{s(Ce).length,s(qe)&&(s(qe).scrollTop=s(qe).scrollHeight)});function Xe(te){s(Ce).push(te),s(Ce).length>5e3&&s(Ce).splice(0,s(Ce).length-5e3)}function we(){v(Ce,[],!0)}function Te(te){return te.stream==="stderr"||te.line.includes("/ERROR]")?"text-rose-400":te.line.includes("/WARN]")?"text-(--accent-star)":te.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function Re(){const te=s(Ce).map(Ne=>Ne.line).join(`
`);try{await navigator.clipboard.writeText(te),Jt("Logs copied to clipboard.","success")}catch{const Ne=document.createElement("textarea");Ne.value=te,document.body.append(Ne),Ne.select(),document.execCommand("copy"),Ne.remove()}}async function F(){if(s(Ve))try{await me("kill_instance"),Xe({stream:"stdout",line:"kill requested"})}catch(te){Xe({stream:"stderr",line:String(te)})}}let st=Z(Pt([])),ze=Z(""),ve=Z(null),Le=Z(""),Oe=Z(null),De=Z(null),Ge=Z(""),He=Z(!1);function it(){const te=s(Le).trim().toLowerCase();return te?s(st).filter(Ne=>Ne.name.toLowerCase().includes(te)||Ne.minecraft_version.toLowerCase().includes(te)||Ne.id.toLowerCase().includes(te)):s(st)}async function nt(){try{v(st,await me("scan_instances"),!0),v(ze,"")}catch(te){v(ze,String(te),!0)}}function I(te){v(Oe,te,!0)}async function E(te,Ne=null){if(s(Ve))return;const at=s(st).find(Lt=>Lt.id===te),kt=at?at.name:te;v(Ve,!0),v(a,Ne?`Running ${kt} → ${Ne}…`:`Running ${kt}…`,!0),v(Fe,!0);try{const Lt=await me("launch_instance",{instanceId:te,server:Ne});Xe({stream:"stdout",line:`launcher reports exit code ${Lt}`}),await nt(),v(a,"Ready")}catch(Lt){console.error("Launch failed:",Lt),Xe({stream:"stderr",line:`[ERROR] Launch failed: ${Lt}`}),String(Lt).includes("BareBones Template")?v(x,te,!0):Jt(`Launch failed: ${Lt}`,"error"),v(a,"Launch failed")}finally{v(Ve,!1),s(a)!=="Launch failed"&&v(a,"Ready")}}function K(){s(M)&&me("open_path",{path:s(M).instances_dir}).catch(te=>v(a,String(te),!0))}function Se(te){s(M)&&me("open_path",{path:[s(M).instances_dir.replace(/\\/g,"/"),te].join("/")}).catch(Ne=>v(a,String(Ne),!0))}function j(te){v(Ge,""),v(De,te,!0)}async function fe(te){if(!(!s(De)||s(He))){v(He,!0),v(Ge,"");try{await me("delete_instance",{instanceId:s(De),toTrash:te}),s(Oe)===s(De)&&v(Oe,null),v(De,null),await nt(),v(a,te?"Instance moved to trash.":"Instance deleted.",!0)}catch(Ne){v(Ge,String(Ne),!0)}finally{v(He,!1)}}}const de=mt(()=>[...new Set(s(st).map(te=>te.group).filter(Boolean))].sort((te,Ne)=>te.localeCompare(Ne)));async function pe(te){if(!s(be))return;const Ne=s(be).name;try{await me("set_instance_group",{instanceId:s(be).id,group:te}),await nt(),v(a,te?`Moved ${Ne} to ${te}.`:`${Ne} is ungrouped.`,!0)}catch(at){v(a,String(at),!0)}}async function Q(){if(!s(be))return;const te=s(be).name;try{const Ne=await me("duplicate_instance",{instanceId:s(be).id});await nt(),v(Oe,Ne.id,!0),Jt(`Copied ${te}.`,"success"),v(a,`Copied ${te}.`)}catch(Ne){v(a,String(Ne),!0),Jt(`Copy failed: ${Ne}`,"error")}}async function L(te){const Ne=typeof te=="string"?s(be):te;if(!Ne)return;let at=typeof te=="string"?te:null;if(at==null&&(at=await yv({title:"Rename instance",message:`Choose a new display name for ${Ne.name}.`,value:Ne.name,placeholder:"Instance name",confirmLabel:"Rename"}),at==null||!at.trim()||at.trim()===Ne.name))return;const kt=Ne.name;try{const Lt=await me("rename_instance",{instanceId:Ne.id,newName:at});await nt(),v(Oe,Lt.id,!0),v(a,`Renamed ${kt} to ${Lt.name}.`),Jt(`Renamed to ${Lt.name}.`,"success")}catch(Lt){v(a,String(Lt),!0),Jt(`Rename failed: ${Lt}`,"error")}}async function G(){if(!s(be))return;const te=window.__TAURI__?.dialog?.save;if(!te){v(a,"File picker unavailable in this build.");return}try{const Ne=await te({title:"Export instance",defaultPath:`${s(be).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Ne)return;const at=await me("export_instance_zip",{instanceId:s(be).id,destPath:Ne});v(a,`Exported to ${at}.`)}catch(Ne){v(a,String(Ne),!0)}}async function he(){if(s(be))try{const te=await me("create_desktop_shortcut",{instanceId:s(be).id});Jt(`Shortcut created: ${te}`,"success"),v(a,`Shortcut created: ${te}`)}catch(te){v(a,String(te),!0),Jt(`Shortcut failed: ${te}`,"error")}}async function B(te,Ne){v(m,!1),await nt(),te?.id&&v(Oe,te.id,!0),v(a,Ne||`Instance ${te?.name??""} created.`,!0)}function $(te){v(D,te,!0)}const be=mt(()=>s(st).find(te=>te.id===s(Oe))??null);let Ue=Z(null),k=0;nn(()=>{const te=s(be);s(D);const Ne=++k;v(Ue,null),te&&me("list_instance_mods",{instanceId:te.id}).then(at=>{Ne===k&&v(Ue,at.length,!0)}).catch(()=>{Ne===k&&v(Ue,null)})});async function Ae(){try{v(O,await me("get_java_prefs"),!0),v(H,s(O).java_path??"",!0),v(X,s(O).custom_java_paths??[],!0),v(ge,s(O).min_memory_mb,!0),v(le,s(O).max_memory_mb,!0),v(ce,""),s(y).length===0&&await W()}catch{}}async function ie(){v(ce,"");try{await me("set_java_prefs",{javaPath:s(H).trim()||null,minMemoryMb:Number(s(ge))||0,maxMemoryMb:Number(s(le))||0}),v(ce,"Java settings saved.")}catch(te){v(ce,String(te),!0)}}async function Ee(te){return v(X,await me("add_custom_java",{path:te}),!0),s(X)}async function Ie(te){await me("apply_java_runtime",{path:te||null}),v(H,te||"",!0),v(ce,"")}async function tt(){v(ne,!0);try{v(M,await me("get_storage"),!0)}catch(te){v(z,String(te),!0)}finally{v(ne,!1)}}async function Qe(te,Ne){v(ne,!0),v(z,"");try{await me("set_folder_dir",{kind:te,path:Ne?.trim()||null}),v(M,await me("get_storage"),!0),v(z,"Folders updated."),(te==="instances"||te==="shared")&&(await nt(),s(Oe)&&!s(st).some(at=>at.id===s(Oe))&&v(Oe,null))}catch(at){v(z,String(at),!0)}finally{v(ne,!1)}}function Je(te){me("open_path",{path:te}).catch(Ne=>v(a,String(Ne),!0))}async function dt(){v(ne,!0),v(z,"");try{await me("clean_staging"),v(z,"Staging cleaned.")}catch(te){v(z,String(te),!0)}finally{v(ne,!1)}}function ht(te){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[te.account_type.type]??"Yggdrasil"}_i(()=>{const te=[],Ne=at=>{if(at.key==="Escape"){const dn=Gc();if(dn){dn();return}s(ve)?v(ve,null):s(De)?(v(De,null),v(Ge,"")):s(D)?v(D,null):s(Oe)?v(Oe,null):s(g)?v(g,!1):s(w)?v(w,!1):s(Fe)&&v(Fe,!1);return}if(s(ve)||s(De)||s(g)||s(w)||s(D)||s(Fe)||Gc()||at.target?.closest?.("input, textarea, select, [contenteditable]"))return;const Lt=it();if(!Lt.length)return;const Zt=Lt.findIndex(dn=>dn.id===s(Oe));let cn=null;if(at.key==="ArrowDown"||at.key==="ArrowRight")cn=Zt+1;else if(at.key==="ArrowUp"||at.key==="ArrowLeft")cn=Zt<0?0:Zt-1;else if(at.key==="Enter"&&Zt>=0&&document.activeElement===document.body){at.preventDefault(),E(Lt[Zt].id);return}cn!=null&&Lt[cn]&&(at.preventDefault(),v(Oe,Lt[cn].id,!0))};return window.addEventListener("keydown",Ne),(async()=>{try{v(t,await me("get_version"),!0)}catch{v(t,"dev")}try{te.push(await window.__TAURI__.event.listen("launch-log",at=>Xe(at.payload))),te.push(await window.__TAURI__.event.listen("tauri://drag-drop",at=>{const kt=at.payload?.paths?.[0];kt&&kt.endsWith(".mrpack")&&(s(w)?v(b,kt,!0):v(V,kt,!0))}))}catch{}await qs(),await nt(),await tt();try{const at=await me("get_startup_launch");at&&s(st).some(kt=>kt.id===at)&&E(at)}catch{}})(),()=>te.forEach(at=>at())});var ut=LE(),vt=R(ut),rt=R(vt),St=_(R(rt),2);{var Ut=te=>{var Ne=hE();U(te,Ne)};Me(St,te=>{s(l)&&te(Ut)})}var It=_(rt,2),Rt=R(It);Et(Rt,17,()=>u,te=>te.id,(te,Ne)=>{var at=mE(),kt=R(at),Lt=R(kt);Wt(Lt,{get name(){return s(Ne).icon},size:15});var Zt=_(kt,2);{var cn=dn=>{var Yn=pE(),Gn=q(Yn,!0);ae(()=>Y(Gn,s(Ne).label)),U(dn,Yn)};Me(Zt,dn=>{s(l)&&dn(cn)})}ae(()=>{xt(at,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${s(l)?"":"justify-center"} ${s(n)===s(Ne).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),je(at,"title",s(Ne).label)}),J("click",at,()=>{v(n,s(Ne).id,!0),v(D,null),v(o,"launcher"),s(Ne).id==="settings"&&(Ae(),s(M)||tt())}),U(te,at)});var Gt=_(Rt,2),en=R(Gt),pt=R(en);Wt(pt,{name:"new",size:15});var Ye=_(en,2);{var _t=te=>{var Ne=vE();U(te,Ne)};Me(Ye,te=>{s(l)&&te(_t)})}var P=_(It,2),se=R(P);{let te=mt(()=>ds(s(f))),Ne=mt(()=>s(f)?s(f).username[0]?.toUpperCase():"?");_c(se,{get source(){return s(te)},size:28,get letter(){return s(Ne)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var _e=_(se,2);{var oe=te=>{var Ne=gE(),at=R(Ne),kt=q(at,!0),Lt=_(at,2),Zt=q(Lt,!0);ae(cn=>{Y(kt,s(f)?s(f).username:"Accounts"),Y(Zt,cn)},[()=>s(f)?ht(s(f)):"manage & sign in"]),U(te,Ne)};Me(_e,te=>{s(l)&&te(oe)})}var xe=_(P,2),We=q(xe,!0),Be=_(vt,2),Ke=R(Be),Ze=R(Ke),gt=R(Ze);{var ft=te=>{var Ne=_E(),at=Mt(Ne),kt=_(at,2),Lt=q(kt,!0);ae(()=>{je(kt,"title",s(D)?.name),Y(Lt,s(D)?.name)}),J("click",at,()=>v(D,null)),U(te,Ne)},wt=te=>{var Ne=bE(),at=Mt(Ne),kt=q(at),Lt=_(at,4);Et(Lt,20,()=>[["launcher","Launcher"],["client","Client"]],ao,(Zt,cn)=>{var dn=mt(()=>Gu(cn,2));let Yn=()=>s(dn)[0],Gn=()=>s(dn)[1];var On=xE(),Ii=q(On,!0);ae(()=>{xt(On,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${s(o)===Yn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),je(On,"aria-selected",s(o)===Yn()),Y(Ii,Gn())}),J("click",On,()=>v(o,Yn(),!0)),U(Zt,On)}),ae(()=>Y(kt,`TwilightMC Bolide (alpha-v${s(t)??""})`)),U(te,Ne)};Me(gt,te=>{s(C)==="edit"?te(ft):te(wt,-1)})}var ye=_(Ze,2),ke=q(ye,!0),$e=_(Ke,2),yt=R($e);{var lt=te=>{nw(te,{onback:()=>v(n,"instances")})},ct=te=>{hw(te,{get instances(){return s(st)},get active(){return s(f)},get gameRunning(){return s(Ve)},get status(){return s(a)},onlaunch:E,onopenconsole:()=>v(Fe,!0),get onrefresh(){return qs},onopenaccounts:()=>{v(n,"accounts"),v(o,"launcher")}})},zt=te=>{cg(te,{get instance(){return s(D)},get storage(){return s(M)},get blindMode(){return s(c)},get deafMode(){return s(d)},onback:()=>v(D,null),onopenconsole:()=>v(Fe,!0)})},At=te=>{C_(te,{get version(){return s(t)},get storage(){return s(M)},get runtimes(){return s(y)},get scanning(){return s(S)},get javaError(){return s(p)},get storageBusy(){return s(ne)},get storageMsg(){return s(z)},get javaMsg(){return s(ce)},get gameRunning(){return s(Ve)},onback:()=>v(n,"instances"),onscanjava:W,onsaveprefs:ie,onaddjava:Ee,onapplyjava:Ie,onsavefolder:Qe,onopenfolder:Je,oncleanstaging:dt,onopenaccounts:()=>{v(n,"accounts"),v(o,"launcher")},onopenurl:Ne=>me("open_external_url",{url:Ne}).catch(at=>v(a,String(at),!0)),get theme(){return s(r)},set theme(Ne){v(r,Ne,!0)},get blindMode(){return s(c)},set blindMode(Ne){v(c,Ne,!0)},get deafMode(){return s(d)},set deafMode(Ne){v(d,Ne,!0)},get javaPath(){return s(H)},set javaPath(Ne){v(H,Ne,!0)},get javaCustomPaths(){return s(X)},set javaCustomPaths(Ne){v(X,Ne,!0)},get minMem(){return s(ge)},set minMem(Ne){v(ge,Ne,!0)},get maxMem(){return s(le)},set maxMem(Ne){v(le,Ne,!0)}})},an=te=>{var Ne=yE(),at=Mt(Ne),kt=R(at),Lt=R(kt);Wt(Lt,{name:"new",size:13});var Zt=_(kt,2),cn=R(Zt);Wt(cn,{name:"folder",size:14});var dn=_(Zt,2),Yn=R(dn);Wt(Yn,{name:"package",size:14});var Gn=_(dn,2),On=R(Gn);Wt(On,{name:"settings",size:14});var Ii=_(Gn,2),xi=_(Ii,4),bi=R(xi);{var un=Kn=>{Wt(Kn,{name:"sun",size:15})},Di=mt(()=>ja(s(r))),Co=Kn=>{Wt(Kn,{name:"moon",size:15})};Me(bi,Kn=>{s(Di)?Kn(un):Kn(Co,-1)})}var Gh=_(at,2);{let Kn=mt(it);Hm(Gh,{get instances(){return s(Kn)},get error(){return s(ze)},get query(){return s(Le)},get selectedId(){return s(Oe)},get gameRunning(){return s(Ve)},get menuFor(){return s(ve)},onselect:I,onplay:E,ontogglemenu:Rc=>v(ve,s(ve)===Rc?null:Rc,!0),onedit:$,onrename:L,onopenfolder:Se,onviewlogs:()=>v(Fe,!0),ondelete:j,onclosemenu:()=>v(ve,null),onadd:re})}ae(Kn=>{Zt.disabled=!s(M),je(Zt,"title",s(M)?s(M).instances_dir:""),je(xi,"title",Kn)},[()=>ja(s(r))?"Twilight Light":"Twilight Dark"]),J("click",kt,re),J("click",Zt,K),J("click",dn,()=>v(w,!0)),J("click",Gn,()=>{v(n,"settings"),Ae(),s(M)||tt()}),Ot(Ii,()=>s(Le),Kn=>v(Le,Kn)),J("click",xi,ee),U(te,Ne)},qn=te=>{Jw(te,{})},_n=te=>{var Ne=SE(),at=Mt(Ne),kt=q(at,!0),Lt=_(at,2),Zt=q(Lt,!0);ae(()=>{Y(kt,h[s(n)][0]),Y(Zt,h[s(n)][1])}),U(te,Ne)};Me(yt,te=>{s(C)==="accounts"?te(lt):s(o)==="client"?te(ct,1):s(C)==="edit"&&s(D)?te(zt,2):s(n)==="settings"?te(At,3):s(n)==="instances"?te(an,4):s(n)==="worlds"?te(qn,5):te(_n,-1)})}var Cn=_($e,2),Ht=R(Cn),xn=R(Ht),Nn=R(xn),qt=_(Nn,2);Wt(qt,{name:"log",size:13});var Li=_(qt,4);{var Eo=te=>{var Ne=ME();U(te,Ne)};Me(Li,te=>{s(Ve)&&te(Eo)})}var vs=_(xn,2),To=R(vs),Ao=_(To,2),Ro=_(Ao,2),Lh=_(Ro,2);{var Ih=te=>{var Ne=wE();J("click",Ne,()=>v(Fe,!1)),U(te,Ne)};Me(Lh,te=>{s(Fe)&&te(Ih)})}var xc=_(Ht,2);Et(xc,21,()=>s(Ce),ao,(te,Ne)=>{var at=EE(),kt=q(at,!0);ae(Lt=>{xt(at,1,`whitespace-pre-wrap break-all ${Lt??""}`),Y(kt,s(Ne).line)},[()=>Te(s(Ne))]),U(te,at)},te=>{var Ne=TE();U(te,Ne)}),rc(xc,te=>v(qe,te),()=>s(qe));var bc=_(Be,2);{var Dh=te=>{Jg(te,{get instance(){return s(be)},get storage(){return s(M)},get gameRunning(){return s(Ve)},get modsCount(){return s(Ue)},get groups(){return s(de)},onlaunch:()=>E(s(be).id),onkill:F,onedit:()=>$(s(be)),onchangegroup:pe,onopenfolder:()=>Se(s(be).id),onexport:G,oncopy:Q,ondelete:()=>j(s(be).id),onshortcut:he,onrename:L,onclose:()=>v(Oe,null)})};Me(bc,te=>{s(C)==="instances"&&s(be)&&te(Dh)})}var yc=_(bc,2);{var Uh=te=>{vg(te,{get path(){return s(V)},onclose:()=>v(V,null),oninstalled:async Ne=>{v(V,null),await nt(),v(Oe,Ne,!0),v(a,"Modpack installed.")}})};Me(yc,te=>{s(V)&&te(Uh)})}var Sc=_(yc,2);{var kh=te=>{jM(te,{get accounts(){return ti.list},get active(){return s(f)},onclose:()=>{v(g,!1),qs()},get onrefresh(){return qs}})};Me(Sc,te=>{s(g)&&te(kh)})}var Mc=_(Sc,2);{var Nh=te=>{Vg(te,{get groups(){return s(de)},get blindMode(){return s(c)},get deafMode(){return s(d)},onclose:()=>v(m,!1),oncreated:B})};Me(Mc,te=>{s(m)&&te(Nh)})}var wc=_(Mc,2);{var Oh=te=>{var Ne=RE(),at=R(Ne),kt=R(at),Lt=_(R(kt),2),Zt=_(kt,2),cn=R(Zt),dn=_(cn,2),Yn=_(dn,2);{var Gn=un=>{var Di=AE(),Co=q(Di,!0);ae(()=>Y(Co,s(A))),U(un,Di)};Me(Yn,un=>{s(A)&&un(Gn)})}var On=_(Zt,2),Ii=R(On),xi=_(Ii,2),bi=q(xi,!0);ae(un=>{xi.disabled=un,Y(bi,s(T)?"Installing…":"Install .mrpack")},[()=>s(T)||!s(b).trim()]),J("click",Ne,un=>{un.target===un.currentTarget&&!s(T)&&v(w,!1)}),J("click",Lt,()=>v(w,!1)),kn("dragover",cn,un=>un.preventDefault()),kn("drop",cn,un=>{un.preventDefault();const Di=un.dataTransfer?.files?.[0]?.path;Di&&v(b,Di,!0)}),Ot(dn,()=>s(b),un=>v(b,un)),J("click",Ii,()=>v(w,!1)),J("click",xi,Pe),U(te,Ne)};Me(wc,te=>{s(w)&&te(Oh)})}var Ec=_(wc,2);{var Fh=te=>{var Ne=PE(),at=R(Ne),kt=_(R(at),2),Lt=_(R(kt)),Zt=q(Lt,!0),cn=_(kt,2);{var dn=bi=>{var un=CE(),Di=q(un,!0);ae(()=>Y(Di,s(Ge))),U(bi,un)};Me(cn,bi=>{s(Ge)&&bi(dn)})}var Yn=_(cn,2),Gn=R(Yn),On=_(Gn,2),Ii=R(On);Ei(Ii,{emoji:"♻"});var xi=_(On,2);ae(()=>{Y(Zt,s(De)),Gn.disabled=s(He),On.disabled=s(He),xi.disabled=s(He)}),J("click",Ne,bi=>{bi.target===bi.currentTarget&&!s(He)&&v(De,null)}),J("click",Gn,()=>v(De,null)),J("click",On,()=>fe(!0)),J("click",xi,()=>fe(!1)),U(te,Ne)};Me(Ec,te=>{s(De)&&te(Fh)})}var Tc=_(Ec,2);nE(Tc,{});var Ac=_(Tc,2);{var Bh=te=>{lE(te,{get instanceId(){return s(x)},onclose:()=>v(x,null),onlaunch:Ne=>{v(x,null),E(Ne)}})};Me(Ac,te=>{s(x)&&te(Bh)})}var zh=_(Ac,2);fE(zh,{}),ae(()=>{xt(vt,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${s(l)?"w-60":"w-16"}`),xt(Gt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${s(l)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),xt(P,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${s(l)?"":"justify-center"}`),je(P,"title",s(f)?s(f).username:"Manage accounts"),xt(xe,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${s(l)?"":"opacity-0 group-hover/nav:opacity-100"}`),Y(We,s(l)?"«":"»"),Y(ke,s(a)),xt(Cn,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${s(Fe)?"h-48":"h-10"}`),je(xn,"title",s(Fe)?"Collapse console":"Expand console"),xt(Nn,1,`h-2 w-2 shrink-0 rounded-full ${s(Ve)?"animate-pulse bg-green-500":"bg-(--border)"}`),To.disabled=!s(Ce).length,Ao.disabled=!s(Ce).length,Ro.disabled=!s(Ve)}),J("dblclick",rt,()=>v(l,!s(l))),J("click",Gt,re),J("click",P,()=>{v(n,"accounts"),v(D,null),v(o,"launcher")}),J("click",xe,()=>v(l,!s(l))),J("click",xn,()=>v(Fe,!s(Fe))),J("click",To,te=>{te.stopPropagation(),we()}),J("click",Ao,te=>{te.stopPropagation(),Re()}),J("click",Ro,te=>{te.stopPropagation(),F()}),U(i,ut),Xt()}rn(["dblclick","click"]);cm(IE,{target:document.getElementById("app")});
