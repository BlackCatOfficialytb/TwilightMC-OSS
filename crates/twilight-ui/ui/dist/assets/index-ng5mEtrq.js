(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ku=!1;var Zs=Array.isArray,Hf=Array.prototype.indexOf,ka=Array.prototype.includes,Js=Array.from,Zu=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Vf=Object.getOwnPropertyDescriptors,Wf=Object.prototype,Xf=Array.prototype,Ju=Object.getPrototypeOf,Yl=Object.isExtensible;const jf=()=>{};function Yf(n){for(var e=0;e<n.length;e++)n[e]()}function Qu(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}function $u(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const i of n)if(t.push(i),t.length===e)break;return t}const cn=2,ta=4,Qs=8,ed=1<<24,Qn=16,ii=32,Ki=64,Jo=128,bl=256,ti=512,Kt=1024,Rt=2048,Dn=4096,gn=8192,nn=16384,da=32768,Ba=1<<25,na=65536,ks=1<<17,qf=1<<18,fa=1<<19,Kf=1<<20,ui=1<<25,Bs=1<<21,Kr=1<<22,Xi=1<<23,fr=Symbol("$state"),td=Symbol("component"),Zf=Symbol("legacy props"),Jf=Symbol(""),nd=Symbol("attributes"),Qo=Symbol("class"),$o=Symbol("style"),el=Symbol("text"),Is=Symbol("form reset"),Ka=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Qf=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),$f=1,eh=2,id=4,th=8,nh=16,ih=1,rh=4,ah=8,sh=16,oh=1,lh=2,rd={},qt=Symbol("uninitialized"),ch="http://www.w3.org/1999/xhtml";function uh(){console.warn("https://svelte.dev/e/derived_inert")}function dh(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function fh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ad(n){return n===this.v}function hh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function sd(n){return!hh(n,this.v)}function od(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ph(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function mh(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function gh(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _h(n){throw new Error("https://svelte.dev/e/effect_orphan")}function xh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function bh(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function yh(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Mh(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Sh(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Eh(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let wh=!1,rn=null;function ia(n){rn=n}function En(n,e=!1,t){rn={p:rn,i:!1,c:null,e:null,s:n,x:null,r:_t,l:null}}function wn(n){var e=rn,t=e.e;if(t!==null){e.e=null;for(var i of t)Td(i)}return e.i=!0,rn=e.p,yl(n)}function yl(n={}){return Zu(n,td,{value:!0}),n}function ld(){return!0}let cr=[];function cd(){var n=cr;cr=[],Yf(n)}function Ti(n){if(cr.length===0&&!Ua){var e=cr;queueMicrotask(()=>{e===cr&&cd()})}cr.push(n)}function Th(){for(;cr.length>0;)cd()}const Ah=-7169;function Ht(n,e){n.f=n.f&Ah|e}function Ml(n){(n.f&ti)!==0||n.deps===null?Ht(n,Kt):Ht(n,Dn)}function ud(n,e){(n.f&Rt)!==0?e.set(n,Rt):(n.f&Dn)!==0&&e.get(n)!==Rt&&e.set(n,Dn),Ht(n,Kt)}let ql=!1;function Rh(){ql||(ql=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e[Is]?.()})},{capture:!0}))}function ha(n){var e=mt,t=_t;Gn(null),hi(null);try{return n()}finally{Gn(e),hi(t)}}function dd(n,e,t,i=t){n.addEventListener(e,()=>ha(t));const r=n[Is];r?n[Is]=()=>{r(),i(!0)}:n[Is]=()=>i(!0),Rh()}function Ch(n,e,t,i){const r=za;var a=n.filter(g=>!g.settled),o=e.map(r);if(t.length===0&&a.length===0){i(o);return}var s=_t,l=Ph(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function u(g){if((s.f&nn)===0){l();try{i([...o,...g])}catch(_){ci(_,s)}zs()}}var f=fd();if(t.length===0){c.then(()=>u([])).finally(f);return}function p(){Promise.all(t.map(g=>Lh(g))).then(u).catch(g=>ci(g,s)).finally(f)}c?c.then(()=>{if((s.f&nn)!==0){f();return}l(),p(),zs()}):p()}function Ph(){var n=_t,e=mt,t=rn,i=lt;return function(a=!0){hi(n),Gn(e),ia(t),a&&(n.f&nn)===0&&(i?.activate(),i?.apply())}}function zs(n=!0){hi(null),Gn(null),ia(null),n&&lt?.deactivate()}function fd(){var n=_t,e=n.b,t=lt,i=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(i,n),()=>{e?.update_pending_count(-1,t),t.decrement(i,n)}}function za(n){var e=cn|Rt;return _t!==null&&(_t.f|=fa),{ctx:rn,deps:null,effects:null,equals:ad,f:e,fn:n,reactions:null,rv:0,v:qt,wv:0,parent:_t,ac:null}}const Pa=Symbol("obsolete");function Lh(n,e,t){let i=_t;i===null&&ph();var r=void 0,a=xr(qt),o=!mt,s=new Set;return jh(()=>{var l=_t,c=Qu();r=c.promise;try{Promise.resolve(n()).then(c.resolve,g=>{g!==Ka&&c.reject(g)}).finally(zs)}catch(g){c.reject(g),zs()}var u=lt;if(o){if((l.f&da)!==0)var f=fd();if(i.b?.is_rendered())u.async_deriveds.get(l)?.reject(Pa);else for(const g of s.values())g.reject(Pa);s.add(c),u.async_deriveds.set(l,c)}const p=(g,_=void 0)=>{f?.(),s.delete(c),_!==Pa&&(u.activate(),_?(a.f|=Xi,ra(a,_)):((a.f&Xi)!==0&&(a.f^=Xi),ra(a,g)),u.deactivate())};c.promise.then(p,g=>p(null,g||"unknown"))}),Al(()=>{for(const l of s)l.reject(Pa)}),new Promise(l=>{function c(u){function f(){u===r?l(a):c(r)}u.then(f,f)}c(r)})}function Ot(n){const e=za(n);return Dd(e),e}function hd(n){const e=za(n);return e.equals=sd,e}function Dh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Mn(e[t])}}function Sl(n){var e,t=_t,i=n.parent;if(!Di&&i!==null&&n.v!==qt&&(i.f&(nn|gn))!==0)return uh(),n.v;hi(i);try{Dh(n),e=Od(n)}finally{hi(t)}return e}function pd(n){var e=Sl(n);if(!n.equals(e)&&(n.wv=Ud(),(!lt?.is_fork||n.deps===null)&&(lt!==null?(lt.capture(n,e,!0),Zr?.capture(n,e,!0)):n.v=e,n.deps===null))){Ht(n,Kt);return}Di||($n!==null?(Tl()||lt?.is_fork)&&$n.set(n,e):Ml(n))}function Ih(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&ha(()=>{e.ac.abort(Ka),e.ac=null}),e.fn!==null&&(e.teardown=jf),Ha(e,0),Pl(e))}function md(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&aa(e)}let lo=null,Sr=null,lt=null,Zr=null,$n=null,tl=null,Ua=!1,co=!1,Na=null,Us=null;var Kl=0;let Uh=1;class Zi{id=Uh++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Sr===null?lo=Sr=this:(Sr.next=this,this.prev=Sr),Sr=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#v(e))return!0;return!1}#v(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=this.#o.get(e);if(i){this.#o.delete(e);for(var r of i.d)Ht(r,Rt),t(r);for(r of i.m)Ht(r,Dn),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&nn)!==0||(a.f&(Rt|Dn))===0)){for(var t=a,i=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(Ki|ii))!==0){if((r&Kt)===0){i=!0;break}t.f^=Kt}}i||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,l]of this.#r)Ht(s,l),this.schedule(s);this.apply();for(var e=Na=[],t=[],i=Us=[];this.#i.length>0;){Kl++>1e3&&(this.#f(),Oh());for(const s of this.#u())try{this.#x(s,e,t)}catch(l){throw _d(s),this.#p()||this.discard(),l}}if(lt=null,i.length>0){var r=Zi.ensure();for(const s of i)r.schedule(s)}if(Na=null,Us=null,this.#p()){this.#g(t),this.#g(e);for(const[s,l]of this.#o)vd(s,l);i.length>0&&lt.#m();return}const a=this.#M();if(a){this.#g(t),this.#g(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),Zr=this,Zl(t),Zl(e),Zr=null,this.#n?.resolve();var o=lt;this.#e===0&&(this.#i.length===0||o!==null)&&this.#f(),o!==null&&(di.clear(),o.#m())}#x(e,t,i){e.f^=Kt;for(var r=e.first;r!==null;){var a=r.f,o=(a&(ii|Ki))!==0,s=o&&(a&Kt)!==0,l=s||(a&gn)!==0||this.#o.has(r);if(!l&&r.fn!==null){o?r.f^=Kt:(a&ta)!==0?t.push(r):Ja(r)&&((a&Qn)!==0&&this.add_dirty_reaction(r,Dn),aa(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}}#M(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,i]]of this.current)if(!i&&e.current.has(t))return!0;return!1}#d(e){for(const[i,r]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,r);for(const[i,r]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=i=>{var r=i.reactions;if(r!==null&&!((i.f&cn)!==0&&(i.f&(Rt|Dn))===0))for(const s of r){var a=s.f;if((a&cn)!==0)t(s);else{var o=s;a&(Kr|Qn)&&!this.async_deriveds.has(o)&&(this.#r.delete(o),Ht(o,Rt),this.schedule(o))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),e.#f(),lt=this,this.#m()}#g(e){for(var t=0;t<e.length;t+=1)ud(e[t],this.#r)}capture(e,t,i=!1){e.v!==qt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Xi)===0&&(this.current.set(e,[t,i]),$n?.set(e,t)),this.is_fork||(e.v=t)}activate(){lt=this}deactivate(){lt=null,$n=null}flush(){try{co=!0,lt=this,this.#m()}finally{Kl=0,tl=null,Na=null,Us=null,co=!1,lt=null,$n=null,di.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Pa);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let f=lo;f!==null;f=f.next){var e=f.id<this.id,t=[];for(const[p,[g,_]]of this.current){if(f.current.has(p)){var i=f.current.get(p)[0];if(e&&g!==i)f.current.set(p,[g,_]);else continue}t.push(p)}if(e)for(const[p,g]of this.async_deriveds){const _=f.async_deriveds.get(p);_&&g.promise.then(_.resolve).catch(_.reject)}var r=[...f.current.keys()].filter(p=>!f.current.get(p)[1]);if(!(!f.started||r.length===0)){var a=r.filter(p=>!this.current.has(p));if(a.length===0)e&&f.discard();else if(t.length>0){if(e)for(const p of this.#h)f.unskip_effect(p,g=>{(g.f&(Qn|Kr))!==0?f.schedule(g):f.#g([g])});f.activate();var o=new Set,s=new Map;for(var l of t)gd(l,a,o,s);s=new Map;var c=[...f.current].filter(([p,g])=>{const _=this.current.get(p);return _?_[0]!==g[0]||_[1]!==g[1]:!0}).map(([p])=>p);if(c.length>0)for(const p of this.#a)(p.f&(nn|gn|ks))===0&&El(p,c,s)&&((p.f&(Kr|Qn))!==0?(Ht(p,Rt),f.schedule(p)):f.add_dirty_reaction(p,Rt));if(f.#i.length>0&&!f.#c){f.apply();for(var u of f.#u())f.#x(u,[],[])}f.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let i=this.#s.get(t)??0;this.#s.set(t,i+1)}}decrement(e,t){if(this.#e-=1,e){let i=this.#s.get(t)??0;i===1?this.#s.delete(t):this.#s.set(t,i-1)}this.#c||(this.#c=!0,Ti(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,i]of e)this.add_dirty_reaction(t,i);e.clear()}add_dirty_reaction(e,t){(t===Rt||this.#r.get(e)!==Rt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=Qu()).promise}static ensure(){if(lt===null){const e=lt=new Zi;!co&&!Ua&&Ti(()=>{e.started||e.flush()})}return lt}apply(){{$n=null;return}}schedule(e){if(tl=e,e.b?.is_pending&&(e.f&(ta|Qs|ed))!==0&&(e.f&da)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?lo=t:e.next=t,t===null?Sr=e:t.prev=e,this.linked=!1}}}function Nh(n){var e=Ua,t=Zr;Zr=null,Ua=!0;try{for(var i;;){if(Th(),lt===null)return i;lt.flush()}}finally{Ua=e,Zr=t}}function Oh(){try{xh()}catch(n){ci(n,tl)}}let Si=null;function Zl(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(nn|gn))===0&&Ja(i)&&(Si=new Set,aa(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Cd(i),Si?.size>0)){di.clear();for(const r of Si){if((r.f&(nn|gn))!==0)continue;const a=[r];let o=r.parent;for(;o!==null;)Si.has(o)&&(Si.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const l=a[s];(l.f&(nn|gn))===0&&aa(l)}}Si.clear()}}Si=null}}function gd(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const a=r.f;(a&cn)!==0?gd(r,e,t,i):(a&(Kr|Qn))!==0&&(a&Rt)===0&&El(r,e,i)&&(Ht(r,Rt),wl(r))}}function El(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(ka.call(e,r))return!0;if((r.f&cn)!==0&&El(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function wl(n){lt.schedule(n)}function vd(n,e){if(!((n.f&ii)!==0&&(n.f&Kt)!==0)){(n.f&Rt)!==0?e.d.push(n):(n.f&Dn)!==0&&e.m.push(n),Ht(n,Kt);for(var t=n.first;t!==null;)vd(t,e),t=t.next}}function _d(n){Ht(n,Kt);for(var e=n.first;e!==null;)_d(e),e=e.next}let Gs=new Set;const di=new Map;let xd=!1;function xr(n,e){var t={f:0,v:n,reactions:null,equals:ad,rv:0,wv:0};return t}function xe(n,e){const t=xr(n);return Dd(t),t}function Fh(n,e=!1,t=!0){const i=xr(n);return e||(i.equals=sd),i}function y(n,e,t=!1){mt!==null&&(!ei||(mt.f&ks)!==0)&&ld()&&(mt.f&(cn|Qn|Kr|ks))!==0&&(fi===null||!fi.has(n))&&Sh();let i=t?Ct(e):e;return ra(n,i,Us)}var or=null,nl=0;function ra(n,e,t=null){if(!n.equals(e)){Di?di.set(n,e):di.has(n)||di.set(n,n.v);var i=Zi.ensure();if(i.capture(n,e),(n.f&cn)!==0){const r=n;(n.f&Rt)!==0&&Sl(r),$n===null&&Ml(r)}n.wv=Ud(),or=null,nl=0,bd(n,Rt,t),or=null,_t!==null&&(_t.f&Kt)!==0&&(_t.f&(ii|Ki))===0&&(On===null?Kh([n]):On.push(n)),!i.is_fork&&Gs.size>0&&!xd&&kh()}return e}function kh(){xd=!1;for(const n of Gs){(n.f&Kt)!==0&&Ht(n,Dn);let e;try{e=Ja(n)}catch{e=!0}e&&aa(n)}Gs.clear()}function Oa(n){y(n,n.v+1)}function bd(n,e,t){var i=n.reactions;if(i!==null){var r=i.length;if(nl+=r,nl>1e5&&or===null&&(or=new Set),or!==null){if(or.has(n))return;or.add(n)}for(var a=0;a<r;a++){var o=i[a],s=o.f,l=(s&Rt)===0;if(l&&Ht(o,e),(s&ks)!==0)Gs.add(o);else if((s&cn)!==0){var c=o;$n?.delete(c),bd(c,Dn,t)}else if(l){var u=o;(s&Qn)!==0&&Si!==null&&Si.add(u),t!==null?t.push(u):wl(u)}}}}function Ct(n){if(typeof n!="object"||n===null||fr in n||td in n)return n;const e=Ju(n);if(e!==Wf&&e!==Xf)return n;var t=new Map,i=Zs(n),r=xe(0),a=pr,o=s=>{if(pr===a)return s();var l=mt,c=pr;Gn(null),ec(a);var u=s();return Gn(l),ec(c),u};return i&&t.set("length",xe(n.length)),new Proxy(n,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&yh();var u=t.get(l);return u===void 0?o(()=>{var f=xe(c.value);return t.set(l,f),f}):y(u,c.value,!0),!0},deleteProperty(s,l){var c=t.get(l);if(c===void 0){if(l in s){const u=o(()=>xe(qt));t.set(l,u),Oa(r)}}else y(c,qt),Oa(r);return!0},get(s,l,c){if(l===fr)return n;var u=t.get(l),f=l in s;if(u===void 0&&(!f||qr(s,l)?.writable)&&(u=o(()=>{var g=Ct(f?s[l]:qt),_=xe(g);return _}),t.set(l,u)),u!==void 0){var p=d(u);return p===qt?void 0:p}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){this.has?.(s,l);var c=Reflect.getOwnPropertyDescriptor(s,l),u=t.get(l);if(u!==void 0){var f=d(u);if(f===qt)return;if(c&&"value"in c)c.value=f;else return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(s,l){if(l===fr)return!0;var c=t.get(l),u=c!==void 0&&c.v!==qt||Reflect.has(s,l);if(c!==void 0||(_t!==null||mt!==null)&&(!u||qr(s,l)?.writable)){c===void 0&&(c=o(()=>{var p=u?Ct(s[l]):qt,g=xe(p);return g}),t.set(l,c));var f=d(c);if(f===qt)return!1}return u},set(s,l,c,u){var f=t.get(l),p=l in s;if(i&&l==="length")for(var g=c;g<f.v;g+=1){var _=t.get(g+"");_!==void 0?y(_,qt):g in s&&(_=o(()=>xe(qt)),t.set(g+"",_))}if(f===void 0)(!p||qr(s,l)?.writable)&&(f=o(()=>xe(void 0)),y(f,Ct(c)),t.set(l,f));else{p=f.v!==qt;var x=o(()=>Ct(c));y(f,x)}var m=Reflect.getOwnPropertyDescriptor(s,l);if(m?.set&&m.set.call(u,c),!p){if(i&&typeof l=="string"){var h=t.get("length"),E=Number(l);Number.isInteger(E)&&E>=h.v&&y(h,E+1)}Oa(r)}return!0},ownKeys(s){d(r);var l=Reflect.ownKeys(s).filter(f=>{var p=t.get(f);return p===void 0||p.v!==qt});for(var[c,u]of t)u.v!==qt&&!(c in s)&&l.push(c);return l},setPrototypeOf(){Mh()}})}function Jl(n){try{if(n!==null&&typeof n=="object"&&fr in n)return n[fr]}catch{}return n}function yd(n,e){return Object.is(Jl(n),Jl(e))}var Ql,Md,Sd,Ed;function Bh(){if(Ql===void 0){Ql=window,Md=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Sd=qr(e,"firstChild").get,Ed=qr(e,"nextSibling").get,Yl(n)&&(n[Qo]=void 0,n[nd]=null,n[$o]=void 0,n.__e=void 0),Yl(t)&&(t[el]=void 0)}}function Ci(n=""){return document.createTextNode(n)}function Ga(n){return Sd.call(n)}function Za(n){return Ed.call(n)}function G(n,e){return Ga(n)}function It(n,e=!1){{var t=Ga(n);return t instanceof Comment&&t.data===""?Za(t):t}}function de(n,e=!1){return Ga(n)}function C(n,e=1,t=!1){let i=n;for(;e--;)i=Za(i);return i}function zh(n){n.textContent=""}function wd(){return!1}function Gh(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function Hh(n){var e=_t;if(e===null)return mt.f|=Xi,n;if((e.f&da)===0&&(e.f&ta)===0)throw n;ci(n,e)}function ci(n,e){if(n===rd)throw n;if(!(e!==null&&(e.f&nn)!==0)){for(;e!==null;){if((e.f&Jo)!==0&&(e.f&(nn|Ba))===0){if((e.f&da)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function Vh(n){_t===null&&(mt===null&&_h(),vh()),Di&&gh()}function Wh(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Ni(n,e){var t=_t;t!==null&&(t.f&gn)!==0&&(n|=gn);var i={ctx:rn,deps:null,nodes:null,f:n|Rt|ti,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};lt?.register_created_effect(i);var r=i;if((n&ta)!==0)Na!==null?Na.push(i):Zi.ensure().schedule(i);else if(e!==null){try{aa(i)}catch(o){throw Mn(i),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&fa)===0&&(r=r.first,(n&Qn)!==0&&(n&na)!==0&&r!==null&&(r.f|=na))}if(r!==null&&(r.parent=t,t!==null&&Wh(r,t),mt!==null&&(mt.f&cn)!==0&&(n&Ki)===0)){var a=mt;(a.effects??=[]).push(r)}return i}function Tl(){return mt!==null&&!ei}function Al(n){const e=Ni(Qs,null);return Ht(e,Kt),e.teardown=n,e}function yn(n){Vh();var e=_t.f,t=!mt&&(e&ii)!==0&&rn!==null&&!rn.i;if(t){var i=rn;(i.e??=[]).push(n)}else return Td(n)}function Td(n){return Ni(ta|Kf,n)}function Xh(n){Zi.ensure();const e=Ni(Ki|fa,n);return(t={})=>new Promise(i=>{t.outro?hr(e,()=>{Mn(e),i(void 0)}):(Mn(e),i(void 0))})}function Ad(n){return Ni(ta,n)}function jh(n){return Ni(Kr|fa,n)}function Rl(n,e=0){return Ni(Qs|e,n)}function Oe(n,e=[],t=[],i=[]){Ch(i,e,t,r=>{Ni(Qs,()=>{n(...r.map(d))})})}function Cl(n,e=0){var t=Ni(Qn|e,n);return t}function Fn(n){return Ni(ii|fa,n)}function Rd(n){var e=n.teardown;if(e!==null){const t=Di,i=mt;$l(!0),Gn(null);try{e.call(null)}catch(r){ci(r,n.parent)}finally{$l(t),Gn(i)}}}function Pl(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&ha(()=>{r.abort(Ka)});var i=t.next;(t.f&Ki)!==0?t.parent=null:Mn(t,e),t=i}}function Yh(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&ii)===0&&Mn(e),e=t}}function Mn(n,e=!0){var t=!1;(e||(n.f&qf)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(qh(n.nodes.start,n.nodes.end),t=!0),n.f|=Ba,Pl(n,e&&!t),Ha(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)a.stop();Rd(n),n.f^=Ba,n.f|=nn;var r=n.parent;r!==null&&r.first!==null&&Cd(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function qh(n,e){for(;n!==null;){var t=n===e?null:Za(n);n.remove(),n=t}}function Cd(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function hr(n,e,t=!0){var i=[];n.f|=bl,Pd(n,i,!0);var r=()=>{t&&Mn(n),e&&e()},a=i.length;if(a>0){var o=()=>--a||r();for(var s of i)s.out(o)}else r()}function Pd(n,e,t){if((n.f&gn)===0){n.f^=gn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&e.push(s);for(var r=n.first;r!==null;){var a=r.next;if((r.f&Ki)===0){var o=(r.f&na)!==0||(r.f&ii)!==0&&(n.f&Qn)!==0;Pd(r,e,o?t:!1)}r=a}}}function Hs(n){n.f&=~bl,Ld(n,!0)}function Ld(n,e){if((n.f&bl)===0&&(n.f&gn)!==0){n.f^=gn,(n.f&Kt)===0&&(Ht(n,Rt),Zi.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&na)!==0||(t.f&ii)!==0;Ld(t,r?e:!1),t=i}var a=n.nodes&&n.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function Ll(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Za(t);e.append(t),t=r}}let Di=!1;function $l(n){Di=n}let mt=null,ei=!1;function Gn(n){mt=n}let _t=null;function hi(n){_t=n}let fi=null;function Dd(n){mt!==null&&((mt.f&Bs)!==0||(mt.f&cn)!==0)&&(fi??=new Set).add(n)}let bn=null,Pn=0,On=null;function Kh(n){On=n}let Id=1,ur=0,pr=ur;function ec(n){pr=n}function Ud(){return++Id}function Ja(n){var e=n.f;if((e&Rt)!==0)return!0;if((e&Dn)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var a=t[r];if(Ja(a)&&pd(a),a.wv>n.wv)return!0}(e&ti)!==0&&$n===null&&Ht(n,Kt)}return!1}function Nd(n,e,t=!0){var i=n.reactions;if(i!==null&&!(fi!==null&&fi.has(n)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&cn)!==0?Nd(a,e,!1):e===a&&(t?Ht(a,Rt):(a.f&Kt)!==0&&Ht(a,Dn),wl(a))}}function Od(n){var e=bn,t=Pn,i=On,r=mt,a=fi,o=rn,s=ei,l=pr,c=n.f;bn=null,Pn=0,On=null,mt=(c&(ii|Ki))===0?n:null,fi=null,ia(n.ctx),ei=!1,pr=++ur,n.ac!==null&&(ha(()=>{n.ac.abort(Ka)}),n.ac=null);try{n.f|=Bs;var u=n.fn,f=u();n.f|=da;var p=tc(n);if(ld()&&On!==null&&!ei&&p!==null&&(n.f&(cn|Dn|Rt))===0)for(var g=0;g<On.length;g++)Nd(On[g],n);if(r!==null&&r!==n){if(ur++,r.deps!==null)for(let _=0;_<t;_+=1)r.deps[_].rv=ur;if(e!==null)for(const _ of e)_.rv=ur;On!==null&&(i===null?i=On:i.push(...On))}return(n.f&Xi)!==0&&(n.f^=Xi),f}catch(_){return tc(n),Hh(_)}finally{n.f^=Bs,bn=e,Pn=t,On=i,mt=r,fi=a,ia(o),ei=s,pr=l}}function tc(n){var e=n.deps,t=lt?.is_fork;if(bn!==null){var i;if(t||Ha(n,Pn),e!==null&&Pn>0)for(e.length=Pn+bn.length,i=0;i<bn.length;i++)e[Pn+i]=bn[i];else n.deps=e=bn;if(Tl()&&(n.f&ti)!==0)for(i=Pn;i<e.length;i++)(e[i].reactions??=[]).push(n)}else!t&&e!==null&&Pn<e.length&&(Ha(n,Pn),e.length=Pn);return e}function Zh(n,e){let t=e.reactions;if(t!==null){var i=Hf.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&cn)!==0&&(bn===null||!ka.call(bn,e))){var a=e;(a.f&ti)!==0&&(a.f^=ti),a.v!==qt&&Ml(a),a.ac!==null&&ha(()=>{a.ac.abort(Ka),a.ac=null,Ht(a,Rt)}),Ih(a),Ha(a,0)}}function Ha(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Zh(n,t[i])}function aa(n){var e=n.f;if((e&nn)===0){Ht(n,Kt);var t=_t;_t=n;try{(e&(Qn|ed))!==0?Yh(n):Pl(n),Rd(n);var i=Od(n);n.teardown=typeof i=="function"?i:null,n.wv=Id;var r;Ku&&wh&&(n.f&Rt)!==0&&n.deps}finally{_t=t}}}async function Jh(){await Promise.resolve(),Nh()}function d(n){var e=n.f,t=(e&cn)!==0;if(mt!==null&&!ei){var i=_t!==null&&(_t.f&nn)!==0;if(!i&&(fi===null||!fi.has(n))){var r=mt.deps;if((mt.f&Bs)!==0)n.rv<ur&&(n.rv=ur,bn===null&&r!==null&&r[Pn]===n?Pn++:bn===null?bn=[n]:bn.push(n));else{mt.deps??=[],ka.call(mt.deps,n)||mt.deps.push(n);var a=n.reactions;a===null?n.reactions=[mt]:ka.call(a,mt)||a.push(mt)}}}if(Di&&di.has(n))return di.get(n);if(t){var o=n;if(Di){var s=o.v;return((o.f&Kt)===0&&o.reactions!==null||kd(o))&&(s=Sl(o)),di.set(o,s),s}var l=(o.f&ti)===0&&!ei&&mt!==null&&(mt.f&ti)!==0,c=(o.f&da)===0;Ja(o)&&(l&&(o.f|=ti),pd(o)),l&&!c&&(md(o),Fd(o))}if($n?.has(n))return $n.get(n);if((n.f&Xi)!==0)throw n.v;return n.v}function Fd(n){if(n.f|=ti,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:ka.call(e,n)||e.push(n),(t.f&cn)!==0&&(t.f&ti)===0&&(md(t),Fd(t))}}function kd(n){if(n.v===qt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(di.has(e)||(e.f&cn)!==0&&kd(e))return!0;return!1}function pa(n){var e=ei;try{return ei=!0,n()}finally{ei=e}}const Qh=["touchstart","touchmove"];function $h(n){return Qh.includes(n)}const La=Symbol("events"),Bd=new Set,il=new Set;function ep(n,e,t,i={}){function r(a){if(i.capture||rl.call(e,a),!a.cancelBubble)return ha(()=>t?.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(r.__removed=!1,Ti(()=>{r.__removed||e.addEventListener(n,r,i)})):e.addEventListener(n,r,i),r}function Ji(n,e,t,i,r){var a={capture:i,passive:r},o=ep(n,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Al(()=>{o.__removed=!0,e.removeEventListener(n,o,a)})}function re(n,e,t){(e[La]??={})[n]=t}function Hn(n){for(var e=0;e<n.length;e++)Bd.add(n[e]);for(var t of il)t(n)}let uo=null,fo=!1;function rl(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],a=r[0]||n.target;uo=n,fo||(fo=!0,setTimeout(()=>{fo=!1,uo=null}));var o=0,s=uo===n&&n[La];if(s){var l=r.indexOf(s);if(l!==-1&&(e===document||e===window)){n[La]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(a=r[o]||n.target,a!==e){Zu(n,"currentTarget",{configurable:!0,get(){return a||t}});var u=mt,f=_t;Gn(null),hi(null);try{for(var p,g=[];a!==null&&a!==e;){try{var _=a[La]?.[i];_!=null&&(!a.disabled||n.target===a)&&_.call(a,n)}catch(x){p?g.push(x):p=x}if(n.cancelBubble)break;o++,a=o<r.length?r[o]:null}if(p){for(let x of g)queueMicrotask(()=>{throw x});throw p}}finally{n[La]=e,delete n.currentTarget,Gn(u),hi(f)}}}const tp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function np(n){return tp?.createHTML(n)??n}function ip(n){var e=Gh("template");return e.innerHTML=np(n.replaceAll("<!>","<!---->")),e.content}function Vs(n,e){var t=_t;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function me(n,e){var t=(e&oh)!==0,i=(e&lh)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=ip(a?n:"<!>"+n),t||(r=Ga(r)));var o=i||Md?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=Ga(o),l=o.lastChild;Vs(s,l)}else Vs(o,o);return o}}function Ei(n=""){{var e=Ci(n+"");return Vs(e,e),e}}function rp(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Ci();return n.append(e,t),Vs(e,t),n}function ne(n,e){n!==null&&n.before(e)}function ap(n){let e=0,t=xr(0),i;return()=>{Tl()&&(d(t),Rl(()=>(e===0&&(i=pa(()=>n(()=>Oa(t)))),e+=1,()=>{Ti(()=>{e-=1,e===0&&(i?.(),i=void 0,Oa(t))})})))}}var sp=na|fa;function op(n,e,t,i){new lp(n,e,t,i)}class lp{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#v=new Map;#u=null;#m=ap(()=>(this.#u=xr(this.#h),()=>{this.#u=null}));constructor(e,t,i,r){this.#t=e,this.#e=t,this.#s=a=>{var o=_t;o.b=this,o.f|=Jo,i(a)},this.parent=_t.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=Cl(()=>{this.#b()},sp)}#x(){try{this.#i=Fn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#M(e){const t=this.#e.failed,{reset:i,invoke_onerror:r}=this.#_(e);Ti(r),t&&(this.#r=Fn(()=>{t(this.#t,()=>e,()=>i)}))}#_(e){var t=!1,i=!1;const r=()=>{if(!this.#d()){if(t){fh();return}t=!0,i&&Eh(),this.#r!==null&&hr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{i=!0,this.#e.onerror?.(e,r),i=!1}catch(o){ci(o,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(nn|Ba))!==0}#g(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=Fn(()=>e(this.#t)),Ti(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),i=Ci(),r=!1;if(t.append(i),this.#i=this.#y(()=>{try{return Fn(()=>this.#s(i))}catch(a){try{this.error(a),r=!0}catch(o){ci(o,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(lt);return}this.#c===0&&(this.#t.before(t),this.#o=null,hr(this.#a,()=>{this.#a=null}),this.#f(lt))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=Fn(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();Ll(this.#i,e);const t=this.#e.pending;this.#a=Fn(()=>t(this.#t))}else this.#f(lt)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#v)}defer_effect(e){ud(e,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=_t,i=mt,r=rn;hi(this.#n),Gn(this.#n),ia(this.#n.ctx);try{return Zi.ensure(),e()}finally{hi(t),Gn(i),ia(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&hr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#S(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Ti(()=>{this.#p=!1,this.#u&&ra(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),d(this.#u)}error(e){if(e===rd||!this.#e.onerror&&!this.#e.failed)throw e;lt?.is_fork?(this.#i&&lt.skip_effect(this.#i),this.#a&&lt.skip_effect(this.#a),this.#r&&lt.skip_effect(this.#r),lt.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(Mn(this.#i),this.#i=null),this.#a&&(Mn(this.#a),this.#a=null),this.#r&&(Mn(this.#r),this.#r=null);let t=this.#e.failed;const i=r=>{if(this.#d())return;const{reset:a,invoke_onerror:o}=this.#_(r);o(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return Fn(()=>{var s=_t;s.b=this,s.f|=Jo,t(this.#t,()=>r,()=>a)})}catch(s){return ci(s,this.#n.parent),null}}))};Ti(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){ci(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>ci(a,this.#n&&this.#n.parent)):i(r)}})}}function he(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[el]??=n.nodeValue)&&(n[el]=t,n.nodeValue=`${t}`)}function cp(n,e){return up(n,e)}const is=new Map;function up(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:o=!0,transformError:s}){Bh();var l=void 0,c=Xh(()=>{var u=t??e.appendChild(Ci());op(u,{pending:()=>{}},g=>{En({});var _=rn;a&&(_.c=a),r&&(i.$$events=r),l=n(g,i)||yl(),wn()},s);var f=new Set,p=g=>{for(var _=0;_<g.length;_++){var x=g[_];if(!f.has(x)){f.add(x);var m=$h(x);for(const b of[e,document]){var h=is.get(b);h===void 0&&(h=new Map,is.set(b,h));var E=h.get(x);E===void 0?(b.addEventListener(x,rl,{passive:m}),h.set(x,1)):h.set(x,E+1)}}}};return p(Js(Bd)),il.add(p),()=>{for(var g of f)for(const m of[e,document]){var _=is.get(m),x=_.get(g);--x==0?(m.removeEventListener(g,rl),_.delete(g),_.size===0&&is.delete(m)):_.set(g,x)}il.delete(p),u!==t&&u.parentNode?.removeChild(u)}});return dp.set(l,c),l}let dp=new WeakMap;class fp{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),i=this.#l.get(t);if(i)Hs(i),this.#s.delete(t);else{var r=this.#e.get(t);r&&(Hs(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,o]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(o);s&&(Mn(s.effect),this.#e.delete(o))}for(const[a,o]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var c=document.createDocumentFragment();Ll(o,c),c.append(Ci()),this.#e.set(a,{effect:o,fragment:c})}else Mn(o);this.#s.delete(a),this.#l.delete(a)};this.#n||!i?(this.#s.add(a),hr(o,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,r]of this.#e)t.includes(i)||(Mn(r.effect),this.#e.delete(i))};ensure(e,t){var i=lt,r=wd();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),o=Ci();a.append(o),this.#e.set(e,{effect:Fn(()=>t(o)),fragment:a})}else this.#l.set(e,Fn(()=>t(this.anchor)));if(this.#t.set(i,e),r){for(const[s,l]of this.#l)s===e?i.unskip_effect(l):i.skip_effect(l);for(const[s,l]of this.#e)s===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#i),i.ondiscard(this.#a)}else this.#i(i)}}function Ze(n,e,t=!1){var i=new fp(n),r=t?na:0;function a(o,s){i.ensure(o,s)}Cl(()=>{var o=!1;e((s,l=0)=>{o=!0,a(l,s)}),o||a(-1,null)},r)}function al(n,e){return e}function hp(n,e,t){for(var i=[],r=e.length,a,o=e.length,s=0;s<r;s++){let f=e[s];hr(f,()=>{if(a){if(a.pending.delete(f),a.done.add(f),a.pending.size===0){var p=n.outrogroups;sl(n,Js(a.done)),p.delete(a),p.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&t!==null&&n.pending.size===0;if(l){var c=t,u=c.parentNode;zh(u),u.append(c),n.items.clear()}sl(n,e,!l)}else a={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(a)}function sl(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const s of o)i.add(n.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(i?.has(a)){a.f|=ui;const o=document.createDocumentFragment();Ll(a,o)}else Mn(e[r],t)}}var nc;function wt(n,e,t,i,r,a=null){var o=n,s=new Map,l=(e&id)!==0;if(l){var c=n;o=c.appendChild(Ci())}var u=null,f=hd(()=>{var E=t();return Zs(E)?E:E==null?[]:Js(E)}),p=new Map,g=!0;function _(E){if((h.effect.f&nn)===0){h.pending.delete(E);var b=d(f);h.fallback=u,pp(h,b,o,e,i),u!==null&&(b.length===0?(u.f&ui)===0?Hs(u):(u.f^=ui,Da(u,null,o)):hr(u,()=>{u=null}))}}function x(E){h.pending.delete(E)}var m=Cl(()=>{for(var E=d(f),b=E.length,M=new Set,w=lt,I=wd(),R=0;R<b;R+=1){var O=E[R],S=i(O,R),A=g?null:s.get(S);A?(A.v&&ra(A.v,O),A.i&&ra(A.i,R),I&&w.unskip_effect(A.e)):(A=mp(s,g?o:nc??=Ci(),O,S,R,r,e,t),g||(A.e.f|=ui),s.set(S,A)),M.add(S)}if(b===0&&a&&!u&&(g?u=Fn(()=>a(o)):(u=Fn(()=>a(nc??=Ci())),u.f|=ui)),b>M.size&&mh(),!g)if(p.set(w,M),I){for(const[oe,$]of s)M.has(oe)||w.skip_effect($.e);w.oncommit(_),w.ondiscard(x)}else _(w);d(f)}),h={effect:m,items:s,pending:p,outrogroups:null,fallback:u};g=!1}function ya(n){for(;n!==null&&(n.f&ii)===0;)n=n.next;return n}function pp(n,e,t,i,r){var a=(i&th)!==0,o=e.length,s=n.items,l=ya(n.effect.first),c,u=null,f,p=[],g=[],_,x,m,h;if(a)for(h=0;h<o;h+=1)_=e[h],x=r(_,h),m=s.get(x).e,(m.f&ui)===0&&(m.nodes?.a?.measure(),(f??=new Set).add(m));for(h=0;h<o;h+=1){if(_=e[h],x=r(_,h),m=s.get(x).e,n.outrogroups!==null)for(const A of n.outrogroups)A.pending.delete(m),A.done.delete(m);if((m.f&gn)!==0&&(Hs(m),a&&(m.nodes?.a?.unfix(),(f??=new Set).delete(m))),(m.f&ui)!==0)if(m.f^=ui,m===l)Da(m,null,t);else{var E=u?u.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Fi(n,u,m),Fi(n,m,E),Da(m,E,t),u=m,p=[],g=[],l=ya(u.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(p.length<g.length){var b=g[0],M;u=b.prev;var w=p[0],I=p[p.length-1];for(M=0;M<p.length;M+=1)Da(p[M],b,t);for(M=0;M<g.length;M+=1)c.delete(g[M]);Fi(n,w.prev,I.next),Fi(n,u,w),Fi(n,I,b),l=b,u=I,h-=1,p=[],g=[]}else c.delete(m),Da(m,l,t),Fi(n,m.prev,m.next),Fi(n,m,u===null?n.effect.first:u.next),Fi(n,u,m),u=m;continue}for(p=[],g=[];l!==null&&l!==m;)(c??=new Set).add(l),g.push(l),l=ya(l.next);if(l===null)continue}(m.f&ui)===0&&p.push(m),u=m,l=ya(m.next)}if(n.outrogroups!==null){for(const A of n.outrogroups)A.pending.size===0&&(sl(n,Js(A.done)),n.outrogroups?.delete(A));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var R=[];if(c!==void 0)for(m of c)(m.f&gn)===0&&R.push(m);for(;l!==null;)(l.f&gn)===0&&l!==n.fallback&&R.push(l),l=ya(l.next);var O=R.length;if(O>0){var S=(i&id)!==0&&o===0?t:null;if(a){for(h=0;h<O;h+=1)R[h].nodes?.a?.measure();for(h=0;h<O;h+=1)R[h].nodes?.a?.fix()}hp(n,R,S)}}a&&Ti(()=>{if(f!==void 0)for(m of f)m.nodes?.a?.apply()})}function mp(n,e,t,i,r,a,o,s){var l=(o&$f)!==0?(o&nh)===0?Fh(t,!1,!1):xr(t):null,c=(o&eh)!==0?xr(r):null;return{v:l,i:c,e:Fn(()=>(a(e,l??t,c??r,s),()=>{n.delete(i)}))}}function Da(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,a=e&&(e.f&ui)===0?e.nodes.start:t;i!==null;){var o=Za(i);if(a.before(i),i===r)return;i=o}}function Fi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const ic=[...` 	
\r\f \v\uFEFF`];function gp(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,o=0;(o=i.indexOf(r,o))>=0;){var s=o+a;(o===0||ic.includes(i[o-1]))&&(s===i.length||ic.includes(i[s]))?i=(o===0?"":i.substring(0,o))+i.substring(s+1):o=s}}return i===""?null:i}function vp(n,e){return n==null?null:String(n)}function St(n,e,t,i,r,a){var o=n[Qo];if(o!==t||o===void 0){var s=gp(t,i,a);s==null?n.removeAttribute("class"):n.className=s,n[Qo]=t}else if(a&&r!==a)for(var l in a){var c=!!a[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return a}function Hi(n,e,t,i){var r=n[$o];if(r!==e){var a=vp(e);a==null?n.removeAttribute("style"):n.style.cssText=a,n[$o]=e}return i}function _p(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function xp(n,e){var t=n.__defaultValue,i=n.multiple,r=i?t??[]:null;if(!(i&&!Zs(r))){n.selectedIndex;for(var a of n.options){var o=Jr(a);_p(a,i?r.includes(o):yd(o,t))}}}function zd(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Zs(e))return dh();for(var i of n.options)i.selected=e.includes(Jr(i));return}for(i of n.options){var r=Jr(i);if(yd(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Ws(n){var e=new MutationObserver(t=>{t.every(bp)||("__defaultValue"in n&&xp(n),"__value"in n&&zd(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Al(()=>{e.disconnect()})}function Xs(n,e,t=e){var i=new WeakSet,r=!0;dd(n,"change",a=>{var o=a?"[selected]":":checked",s;if(n.multiple)s=[].map.call(n.querySelectorAll(o),Jr);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");s=l&&Jr(l)}t(s),n.__value=s,lt!==null&&i.add(lt)}),Ad(()=>{var a=e();if(n===document.activeElement){var o=lt;if(i.has(o))return}if(zd(n,a,r),r&&a===void 0){var s=n.querySelector(":checked");s!==null&&(a=Jr(s),t(a))}n.__value=a,r=!1})}function Jr(n){return"__value"in n?n.__value:n.value}function bp(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const yp=Symbol("is custom element"),Mp=Symbol("is html"),Sp=Qf?"progress":"PROGRESS";function Va(n,e){var t=Dl(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==Sp)||(n.value=e??"")}function rc(n,e){var t=Dl(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function $e(n,e,t,i){var r=Dl(n),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(n[Jf]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Ep(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Dl(n){return n[nd]??={[yp]:n.nodeName.includes("-"),[Mp]:n.namespaceURI===ch}}var ac=new Map;function Ep(n){var e=n.getAttribute("is")||n.nodeName,t=ac.get(e);if(t)return t;ac.set(e,t=new Set);for(var i,r=n,a=Element.prototype;a!==r;){i=Vf(r);for(var o in i)i[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.add(o);r=Ju(r)}return t}function Gt(n,e,t=e){var i=new WeakSet;dd(n,"input",async r=>{var a=r?n.defaultValue:n.value;if(a=ho(n)?po(a):a,t(a),lt!==null&&i.add(lt),await Jh(),a!==(a=e())){var o=n.selectionStart,s=n.selectionEnd,l=n.value.length;if(n.value=a??"",s!==null){var c=n.value.length;o===s&&s===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(s,c))}}}),pa(e)==null&&n.value&&(t(ho(n)?po(n.value):n.value),lt!==null&&i.add(lt)),Rl(()=>{var r=e();if(n===document.activeElement){var a=lt;if(i.has(a))return}ho(n)&&r===po(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function ho(n){var e=n.type;return e==="number"||e==="range"}function po(n){return n===""?null:+n}function mo(n,e){return n===e||n?.[fr]===e}function Gd(n=yl(),e,t,i){var r=rn.r,a=_t;return Ad(()=>{var o,s;return Rl(()=>{o=s,s=[],pa(()=>{mo(t(...s),n)||(e(n,...s),o&&mo(t(...o),n)&&e(null,...o))})}),()=>{let l=a;for(;l!==r&&l.parent!==null&&l.parent.f&Ba;)l=l.parent;const c=()=>{s&&mo(t(...s),n)&&e(null,...s)},u=l.teardown;l.teardown=()=>{c(),u?.()}}}),n}let rs=!1;function wp(n){var e=rs;try{return rs=!1,[n(),rs]}finally{rs=e}}function ft(n,e,t,i){var r=!0,a=(t&ah)!==0,o=(t&sh)!==0,s=i,l=!0,c=void 0,u=()=>o&&r?(c??=za(i),d(c)):(l&&(l=!1,s=o?pa(i):i),s);let f;if(a){var p=fr in n||Zf in n;f=qr(n,e)?.set??(p&&e in n?M=>n[e]=M:void 0)}var g,_=!1;a?[g,_]=wp(()=>n[e]):g=n[e],g===void 0&&i!==void 0&&(g=u(),f&&(bh(),f(g)));var x;if(x=()=>{var M=n[e];return M===void 0?u():(l=!0,M)},(t&rh)===0)return x;if(f){var m=n.$$legacy;return(function(M,w){return arguments.length>0?((!w||m||_)&&f(w?x():M),M):x()})}var h=!1,E=((t&ih)!==0?za:hd)(()=>(h=!1,x()));a&&d(E);var b=_t;return(function(M,w){if(arguments.length>0){const I=w?d(E):a?Ct(M):M;return y(E,I),h=!0,s!==void 0&&(s=I),M}return Di&&h||(b.f&nn)!==0?E.v:d(E)})}function Qi(n){rn===null&&od(),yn(()=>{const e=pa(n);if(typeof e=="function")return e})}function Tp(n){rn===null&&od(),Qi(()=>()=>pa(n))}const Ap="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Ap);var Rp=me('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">📂 Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),Cp=me('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Pp(n,e){En(e,!0);let t=ft(e,"selected",3,!1),i=ft(e,"gameRunning",3,!1),r=ft(e,"menuOpen",3,!1);const a=Ot(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function o(){const O=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&O?O(e.instance.icon_path):"/logo.png"}var s=Cp(),l=G(s),c=G(l),u=de(c),f=C(c,2),p=G(f),g=de(p,!0),_=C(p,2),x=G(_),m=de(x,!0),h=C(x,2),E=de(h,!0),b=C(f,2),M=C(l,2),w=de(M,!0),I=C(M,2);{var R=O=>{var S=Rp(),A=It(S),oe=C(A,2),$=G(oe),B=C($,2),V=C(B,2),Z=C(V,2),k=C(Z,4);Oe(()=>$.disabled=i()),re("click",A,function(...j){e.onclosemenu?.apply(this,j)}),re("click",$,()=>{e.onclosemenu(),e.onplay()}),re("click",B,()=>{e.onclosemenu(),e.onedit()}),re("click",V,()=>{e.onclosemenu(),e.onopenfolder()}),re("click",Z,function(...j){e.onviewlogs?.apply(this,j)}),re("click",k,()=>{e.onclosemenu(),e.ondelete()}),ne(O,S)};Ze(I,O=>{r()&&O(R)})}Oe((O,S)=>{St(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),$e(s,"aria-selected",t()),$e(s,"title",e.instance.name),$e(u,"src",O),he(g,e.instance.name),he(m,e.instance.minecraft_version),St(h,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${d(a)??""}`),he(E,e.instance.loader_type),he(w,S)},[()=>o(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),re("click",s,function(...O){e.onselect?.apply(this,O)}),re("dblclick",s,function(...O){e.onplay?.apply(this,O)}),re("keydown",s,O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),e.onplay())}),re("contextmenu",s,O=>{O.preventDefault(),e.onselect(),e.ontogglemenu()}),Ji("error",u,O=>{O.currentTarget.dataset.f||(O.currentTarget.dataset.f="1",O.currentTarget.src="/logo.png")}),re("click",b,O=>{O.stopPropagation(),e.ontogglemenu()}),ne(n,s),wn()}Hn(["click","dblclick","keydown","contextmenu"]);var Lp=me('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Dp=me('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Ip=me('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Up=me('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function Np(n,e){En(e,!0);var t=Up();wt(t,21,()=>e.instances,i=>i.id,(i,r)=>{{let a=Ot(()=>e.selectedId===d(r).id),o=Ot(()=>e.menuFor===d(r).id);Pp(i,{get instance(){return d(r)},get selected(){return d(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return d(o)},onselect:()=>e.onselect?.(d(r).id),onplay:()=>e.onplay?.(d(r).id),ontogglemenu:()=>e.ontogglemenu?.(d(r).id),onedit:()=>e.onedit?.(d(r)),onopenfolder:()=>e.onopenfolder?.(d(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(d(r).id),get onclosemenu(){return e.onclosemenu}})}},i=>{var r=rp(),a=It(r);{var o=u=>{var f=Lp(),p=de(f,!0);Oe(()=>he(p,e.error)),ne(u,f)},s=u=>{var f=Dp(),p=de(f);Oe(g=>he(p,`No instances match "${g??""}".`),[()=>e.query.trim()]),ne(u,f)},l=Ot(()=>e.query.trim()),c=u=>{var f=Ip(),p=C(G(f),6);re("click",p,()=>e.onadd?.()),ne(u,f)};Ze(a,u=>{e.error?u(o):d(l)?u(s,1):u(c,-1)})}ne(i,r)}),ne(n,t),wn()}Hn(["click"]);const Wa=[];function $s(n){return Wa.push(n),n}function eo(n){const e=Wa.lastIndexOf(n);e!==-1&&Wa.splice(e,1)}function sc(){return Wa[Wa.length-1]??null}var Op=me('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div>'),oc=me('<div class="p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Fp=me('<span class="shrink-0 rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent)">✓ Installed</span>'),kp=me(`<button class="shrink-0 rounded bg-(--accent) px-3 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Downloads the primary jar into this instance's mods folder"> </button>`),Bp=me('<div class="flex items-center gap-3 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div> <div class="truncate text-[11px] text-(--text-muted)"> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></div> <!></div>'),zp=me('<div class="flex flex-col gap-1.5"></div>'),Gp=me('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[480px] w-[640px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><div class="min-w-0"><h3 class="text-sm font-semibold">Get more mods</h3> <p class="truncate text-[11px] text-(--text-muted)"> <!></p></div> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="border-b border-(--border) p-3"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></div></div>');function Hp(n,e){En(e,!0);let t=xe(""),i=xe(null),r=xe(!1),a=xe(""),o=xe(Ct({})),s=xe(Ct({})),l=0;const c=["fabric","quilt","forge","neoforge"],u=Ot(()=>{const k=e.instance.loader_type.toLowerCase();return c.includes(k)?k:""});function f(k){return k>=1e6?`${(k/1e6).toFixed(1)}M`:k>=1e3?`${(k/1e3).toFixed(0)}K`:String(k)}function p(k){return k.icon_url||"/logo.png"}yn(()=>{const k=d(t).trim(),j=++l,ee=setTimeout(()=>{y(r,!0),y(a,""),window.__TAURI__.core.invoke("search_modrinth_mods",{query:k,gameVersion:e.instance.minecraft_version,loader:d(u)}).then(le=>{j===l&&(y(i,le,!0),y(r,!1))}).catch(le=>{j===l&&(y(a,String(le),!0),y(r,!1))})},350);return()=>clearTimeout(ee)});async function g(k){if(!(d(o)[k.project_id]||d(s)[k.project_id])){y(o,{...d(o),[k.project_id]:!0},!0);try{const j=await window.__TAURI__.core.invoke("install_modrinth_mod",{instanceId:e.instance.id,projectId:k.project_id,gameVersion:e.instance.minecraft_version,loader:d(u)});y(s,{...d(s),[k.project_id]:j},!0),e.oninstalled?.(k)}catch(j){y(a,`Install failed: ${j}`)}finally{y(o,{...d(o),[k.project_id]:!1},!0)}}}Qi(()=>{const k=$s(()=>e.onclose?.());return()=>eo(k)});var _=Gp(),x=G(_),m=G(x),h=G(m),E=C(G(h),2),b=G(E),M=C(b);{var w=k=>{var j=Ei();Oe(ee=>he(j,`· ${ee??""}`),[()=>d(u)[0].toUpperCase()+d(u).slice(1)]),ne(k,j)};Ze(M,k=>{d(u)&&k(w)})}var I=C(h,2),R=C(m,2),O=G(R),S=C(R,2),A=G(S);{var oe=k=>{var j=Op(),ee=de(j,!0);Oe(()=>he(ee,d(a))),ne(k,j)};Ze(A,k=>{d(a)&&k(oe)})}var $=C(A,2);{var B=k=>{var j=oc(),ee=de(j,!0);Oe(()=>he(ee,d(r)?"Searching Modrinth…":"Type to search.")),ne(k,j)},V=k=>{var j=oc(),ee=de(j);Oe(le=>he(ee,`No mods for MC ${e.instance.minecraft_version??""}${d(u)?` + ${d(u)}`:""} match “${le??""}”.`),[()=>d(t).trim()]),ne(k,j)},Z=k=>{var j=zp();wt(j,21,()=>d(i),ee=>ee.project_id,(ee,le)=>{var _e=Bp(),W=G(_e),q=C(W,2),Te=G(q),Le=G(Te),Fe=de(Le,!0),ze=C(Le,2),Xe=de(ze),He=C(Te,2),Ee=de(He,!0),Be=C(He,2),ue=de(Be),U=C(q,2);{var be=F=>{var X=Fp();Oe(()=>$e(X,"title",d(s)[d(le).project_id])),ne(F,X)},ge=F=>{var X=kp(),we=de(X,!0);Oe(()=>{X.disabled=d(o)[d(le).project_id],he(we,d(o)[d(le).project_id]?"Installing…":"Install")}),re("click",X,()=>g(d(le))),ne(F,X)};Ze(U,F=>{d(s)[d(le).project_id]?F(be):F(ge,-1)})}Oe((F,X,we)=>{$e(W,"src",F),$e(Le,"title",d(le).title),he(Fe,d(le).title),$e(ze,"title",`${X??""} downloads`),he(Xe,`⤓ ${we??""}`),$e(He,"title",d(le).description),he(Ee,d(le).description),he(ue,`by ${(d(le).author||"unknown")??""}`)},[()=>p(d(le)),()=>f(d(le).downloads),()=>f(d(le).downloads)]),Ji("error",W,F=>{F.currentTarget.dataset.f||(F.currentTarget.dataset.f="1",F.currentTarget.src="/logo.png")}),ne(ee,_e)}),ne(k,j)};Ze($,k=>{d(i)?d(i).length===0&&!d(r)?k(V,1):k(Z,-1):k(B)})}Oe(()=>he(b,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `)),re("click",_,k=>{k.target===k.currentTarget&&e.onclose?.()}),re("click",I,()=>e.onclose?.()),Gt(O,()=>d(t),k=>y(t,k)),ne(n,_),wn()}Hn(["click"]);var Vp=me('<button><span class="w-5 shrink-0 text-center text-[15px]"> </span> <span class="truncate"> </span></button>'),Wp=me('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Xp=me('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),lc=me('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),go=me('<p class="mt-2 text-[12px] text-rose-400"> </p>'),jp=me(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">📂 Open Mods Folder</button></div>`,1),Yp=me('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),qp=me('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),Kp=me('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder">📂 Open Screenshots Folder</button>',1),Zp=me('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),Jp=me('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder">📂 Open Logs Folder</button></div>',1),Qp=me('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, icon and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p></div>',1),$p=me('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!></div>');function em(n,e){En(e,!0);let t=ft(e,"storage",3,null);const i=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let r=xe("mods"),a=xe(Ct([])),o=xe(!1),s=xe(""),l=xe(""),c=xe(!1),u=xe(Ct([])),f=xe(Ct([])),p=xe(!1),g=xe("");function _(...Ee){return[t()?t().instances_dir.replace(/\\/g,"/"):"",e.instance.id,"minecraft",...Ee].filter(Boolean).join("/")}function x(Ee){const Be=window.__TAURI__?.core?.convertFileSrc;return Be?Be(Ee):Ee}function m(Ee){return Ee>=1024*1024?`${(Ee/1024/1024).toFixed(1)} MB`:Ee>=1024?`${(Ee/1024).toFixed(1)} KB`:`${Ee} B`}function h(Ee){return Ee?new Date(Ee*1e3).toLocaleString():""}function E(){const Ee=d(l).trim().toLowerCase();return Ee?d(a).filter(Be=>Be.display_name.toLowerCase().includes(Ee)||Be.filename.toLowerCase().includes(Ee)):d(a)}async function b(){y(o,!0);try{y(a,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:e.instance.id}),!0),y(s,"")}catch(Ee){y(s,String(Ee),!0)}finally{y(o,!1)}}async function M(Ee){y(o,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:e.instance.id,filename:Ee.filename,enable:!Ee.is_enabled}),d(s)&&y(s,"")}catch(Be){y(s,String(Be),!0)}finally{y(o,!1)}await b()}async function w(Ee){y(o,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:e.instance.id,filename:Ee.filename}),y(s,"")}catch(Be){y(s,String(Be),!0)}finally{y(o,!1)}await b()}async function I(){const Ee=window.__TAURI__?.dialog?.open;if(!Ee){y(s,"File picker unavailable in this build.");return}let Be;try{Be=await Ee({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(U){y(s,String(U),!0);return}const ue=Be?[].concat(Be):[];if(ue.length){y(o,!0);try{for(const U of ue)await window.__TAURI__.core.invoke("import_mod",{instanceId:e.instance.id,jarPath:U});y(s,"")}catch(U){y(s,String(U),!0)}finally{y(o,!1)}await b()}}async function R(Ee){y(p,!0);try{const Be=await window.__TAURI__.core.invoke(Ee,{instanceId:e.instance.id});y(Ee==="list_screenshots"?u:f,Be,!0),y(g,"")}catch(Be){y(g,String(Be),!0)}finally{y(p,!1)}}function O(Ee){window.__TAURI__.core.invoke("open_path",{path:Ee}).catch(Be=>y(g,String(Be),!0))}function S(Ee){O(_("screenshots",Ee))}Qi(()=>{b(),R("list_screenshots"),R("list_logs")});var A=$p(),oe=G(A),$=G(oe),B=C($,2),V=G(B),Z=de(V,!0),k=C(V,2),j=de(k),ee=C(B,2);wt(ee,21,()=>i,Ee=>Ee.id,(Ee,Be)=>{var ue=Vp(),U=G(ue),be=de(U,!0),ge=C(U,2),F=de(ge,!0);Oe(()=>{St(ue,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${d(r)===d(Be).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),$e(ue,"aria-current",d(r)===d(Be).id?"true":void 0),he(be,d(Be).icon),he(F,d(Be).label)}),re("click",ue,()=>y(r,d(Be).id,!0)),ne(Ee,ue)});var le=C(oe,2),_e=G(le),W=G(_e);{var q=Ee=>{var Be=Wp(),ue=C(It(Be),4),U=G(ue),be=de(U),ge=C(U,2),F=de(ge),X=C(ge,2),we=de(X);Oe(Pe=>{he(be,`Minecraft ${e.instance.minecraft_version??""}`),he(F,`Loader: ${e.instance.loader_type??""}`),he(we,`Last played: ${Pe??""}`)},[()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleString():"never"]),ne(Ee,Be)},Te=Ee=>{var Be=jp(),ue=C(It(Be),4),U=G(ue),be=de(U),ge=C(U,2),F=C(ue,2),X=C(F,2),we=C(X,2),Pe=G(we);wt(Pe,21,E,v=>v.filename,(v,D)=>{var se=Xp(),pe=G(se),ae=G(pe);let Ie;var ye=de(ae,!0),Y=C(ae,2),L=de(Y),te=C(pe),Ue=de(te),Me=C(te),ve=de(Me);Oe(We=>{Ie=St(ae,1,"truncate",null,Ie,{"opacity-50":!d(D).is_enabled}),he(ye,d(D).display_name),he(L,`${d(D).filename??""} · ${We??""}`),St(Ue,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${d(D).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),$e(Ue,"title",d(D).is_enabled?"Disable":"Enable"),Ue.disabled=d(o),$e(ve,"title",`Delete ${d(D).display_name??""}`),ve.disabled=d(o)},[()=>m(d(D).file_size)]),re("click",Ue,()=>M(d(D))),re("click",ve,()=>w(d(D))),ne(v,se)},v=>{var D=lc(),se=G(D),pe=G(se);{var ae=ye=>{var Y=Ei("Loading mods…");ne(ye,Y)},Ie=ye=>{var Y=Ei("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");ne(ye,Y)};Ze(pe,ye=>{d(o)?ye(ae):ye(Ie,-1)})}ne(v,D)});var Ae=C(we,2);{var Ce=v=>{var D=go(),se=de(D,!0);Oe(()=>he(se,d(s))),ne(v,D)};Ze(Ae,v=>{d(s)&&v(Ce)})}var Ve=C(Ae,2),je=G(Ve),T=C(je,2);Oe(()=>{he(be,`Installed (${d(a).length??""})`),ge.disabled=d(o),je.disabled=d(o),T.disabled=!t(),$e(T,"title",t()?"Opens the instance mods folder":"Storage unknown")}),re("click",ge,b),Gt(F,()=>d(l),v=>y(l,v)),re("click",X,()=>y(c,!0)),re("click",je,I),re("click",T,()=>O(_("mods"))),ne(Ee,Be)},Le=Ee=>{var Be=Kp(),ue=C(It(Be),4);wt(ue,21,()=>d(u),F=>F.name,(F,X)=>{var we=Yp(),Pe=G(we),Ae=C(Pe,2),Ce=de(Ae,!0);Oe((Ve,je,T)=>{$e(we,"title",`${d(X).name??""} · ${Ve??""} · ${je??""}`),$e(Pe,"src",T),$e(Pe,"alt",d(X).name),$e(Ae,"title",d(X).name),he(Ce,d(X).name)},[()=>m(d(X).size),()=>h(d(X).modified),()=>x(_("screenshots",d(X).name))]),re("click",we,()=>S(d(X).name)),re("keydown",we,Ve=>{(Ve.key==="Enter"||Ve.key===" ")&&(Ve.preventDefault(),S(d(X).name))}),ne(F,we)},F=>{var X=qp(),we=G(X);{var Pe=Ce=>{var Ve=Ei("Loading screenshots…");ne(Ce,Ve)},Ae=Ce=>{var Ve=Ei("No screenshots yet — press F2 in game to capture one.");ne(Ce,Ve)};Ze(we,Ce=>{d(p)?Ce(Pe):Ce(Ae,-1)})}ne(F,X)});var U=C(ue,2);{var be=F=>{var X=go(),we=de(X,!0);Oe(()=>he(we,d(g))),ne(F,X)};Ze(U,F=>{d(g)&&F(be)})}var ge=C(U,2);re("click",ge,()=>O(_("screenshots"))),ne(Ee,Be)},Fe=Ee=>{var Be=Jp(),ue=C(It(Be),4),U=G(ue);wt(U,21,()=>d(f),Pe=>Pe.name,(Pe,Ae)=>{var Ce=Zp(),Ve=G(Ce),je=G(Ve),T=de(je,!0),v=C(je,2),D=de(v),se=C(Ve),pe=de(se);Oe((ae,Ie)=>{$e(je,"title",d(Ae).name),he(T,d(Ae).name),he(D,`${ae??""} · ${Ie??""}`)},[()=>m(d(Ae).size),()=>h(d(Ae).modified)]),re("click",pe,()=>O(_("logs",d(Ae).name))),ne(Pe,Ce)},Pe=>{var Ae=lc(),Ce=G(Ae),Ve=G(Ce);{var je=v=>{var D=Ei("Loading logs…");ne(v,D)},T=v=>{var D=Ei("No log files yet — logs appear after the first launch.");ne(v,D)};Ze(Ve,v=>{d(p)?v(je):v(T,-1)})}ne(Pe,Ae)});var be=C(ue,2);{var ge=Pe=>{var Ae=go(),Ce=de(Ae,!0);Oe(()=>he(Ce,d(g))),ne(Pe,Ae)};Ze(be,Pe=>{d(g)&&Pe(ge)})}var F=C(be,2),X=G(F),we=C(X,2);re("click",X,()=>e.onopenconsole?.()),re("click",we,()=>O(_("logs"))),ne(Ee,Be)},ze=Ee=>{var Be=Qp(),ue=C(It(Be),4),U=G(ue),be=de(U,!0),ge=C(U,2),F=G(ge),X=de(F),we=C(F,2),Pe=de(we);Oe((Ae,Ce,Ve)=>{he(be,e.instance.name),$e(ge,"title",Ae),he(X,`Game folder: ${Ce??""}`),he(Pe,`Mods folder: ${Ve??""}`)},[()=>_(),()=>_(),()=>_("mods")]),ne(Ee,Be)};Ze(W,Ee=>{d(r)==="components"?Ee(q):d(r)==="mods"?Ee(Te,1):d(r)==="screenshots"?Ee(Le,2):d(r)==="logs"?Ee(Fe,3):Ee(ze,-1)})}var Xe=C(le,2);{var He=Ee=>{Hp(Ee,{get instance(){return e.instance},onclose:()=>y(c,!1),oninstalled:()=>b()})};Ze(Xe,Ee=>{d(c)&&Ee(He)})}Oe(()=>{$e(V,"title",e.instance.name),he(Z,e.instance.name),he(j,`${e.instance.minecraft_version??""} · ${e.instance.loader_type??""}`)}),re("click",$,function(...Ee){e.onback?.apply(this,Ee)}),ne(n,A),wn()}Hn(["click","keydown"]);var tm=me('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),nm=me('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),im=me('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),rm=me('<p class="mt-3 text-[12px] text-red-400"> </p>'),am=me(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),sm=me('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function om(n,e){En(e,!0);let t=xe(null),i=xe(""),r=xe(""),a=xe(!1),o=xe("");function s(E){return E>=1024*1024?`${(E/1024/1024).toFixed(1)} MB`:E>=1024?`${(E/1024).toFixed(0)} KB`:`${E} B`}function l(){return!d(t)||!d(t).loader?"Vanilla":d(t).loader[0].toUpperCase()+d(t).loader.slice(1)+(d(t).loader_version?` ${d(t).loader_version}`:" (latest stable)")}Qi(async()=>{const E=$s(()=>e.onclose?.());try{y(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),y(r,d(t).name,!0)}catch(b){y(i,String(b),!0)}return()=>eo(E)});async function c(){if(!d(a)){y(a,!0),y(o,"");try{const E=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:d(r).trim()});e.oninstalled?.(E)}catch(E){y(o,String(E),!0)}finally{y(a,!1)}}}var u=sm(),f=G(u),p=G(f),g=C(G(p),2),_=C(p,2);{var x=E=>{var b=tm(),M=G(b),w=de(M,!0),I=C(M,2),R=de(I,!0);Oe(()=>{he(w,d(i)),$e(I,"title",e.path),he(R,e.path)}),ne(E,b)},m=E=>{var b=nm();ne(E,b)},h=E=>{var b=am(),M=It(b),w=G(M),I=G(w),R=de(I,!0),O=C(I,2);{var S=ze=>{var Xe=im(),He=de(Xe,!0);Oe(()=>he(He,d(t).summary)),ne(ze,Xe)};Ze(O,ze=>{d(t).summary&&ze(S)})}var A=C(O,2),oe=G(A),$=de(oe),B=C(oe,2),V=de(B,!0),Z=C(B,2),k=de(Z),j=C(Z,2),ee=de(j,!0),le=C(w,4),_e=C(le,2);{var W=ze=>{var Xe=rm(),He=de(Xe,!0);Oe(()=>he(He,d(o))),ne(ze,Xe)};Ze(_e,ze=>{d(o)&&ze(W)})}var q=C(M,2),Te=G(q),Le=C(Te,2),Fe=de(Le,!0);Oe((ze,Xe,He)=>{$e(I,"title",d(t).name),he(R,d(t).name),he($,`MC ${(d(t).game_version||"?")??""}`),he(V,ze),$e(Z,"title",`${d(t).download_count??""} downloaded, ${d(t).override_count??""} overrides extracted`),he(k,`${d(t).file_count??""} files`),he(ee,Xe),Le.disabled=He,he(Fe,d(a)?"Installing…":"Install Modpack")},[()=>l(),()=>s(d(t).archive_size),()=>d(a)||!d(r).trim()]),Gt(le,()=>d(r),ze=>y(r,ze)),re("click",Te,()=>e.onclose?.()),re("click",Le,c),ne(E,b)};Ze(_,E=>{d(i)?E(x):d(t)?E(h,-1):E(m,1)})}re("click",u,E=>{E.target===E.currentTarget&&e.onclose?.()}),re("click",g,()=>e.onclose?.()),ne(n,u),wn()}Hn(["click"]);var lm=me('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),cm=me('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),cc=me("<option> </option>"),um=me('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),dm=me('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),fm=me('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),hm=me('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),pm=me('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),mm=me('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),gm=me('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),vm=me('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),_m=me('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),xm=me('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),bm=me('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),ym=me('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Mm=me('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),Sm=me('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),Em=me('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),wm=me('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),Tm=me('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>');function Am(n,e){En(e,!0);let t=ft(e,"groups",19,()=>[]);const i=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],r=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"fabric",label:"Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],a=["","fabric","quilt"],o=["fabric","quilt"],s="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let l=xe(null),c=xe(!0),u=xe(""),f=xe(""),p=xe(Ct(new Set(["release"]))),g=xe(""),_=xe(""),x=xe(""),m=xe(""),h=xe(""),E=xe(""),b=xe(Ct([])),M=xe("idle"),w=0,I=xe(!1),R=xe("");function O(fe,ke){const Qe=window.__TAURI__?.core;return Qe?Qe.invoke(fe,ke):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const S=Ot(()=>{const fe=d(l)?.versions??[],ke=d(f).trim().toLowerCase();return fe.filter(Qe=>d(p).has(Qe.version_type)&&(!ke||Qe.id.toLowerCase().includes(ke)))}),A=Ot(()=>!a.includes(d(h))),oe=Ot(()=>o.includes(d(h))),$=Ot(()=>!!d(g)&&!d(A)&&!d(I)&&!(d(oe)&&d(M)==="loading"));function B(fe){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[fe]??fe}function V(fe){if(!fe)return"—";const ke=new Date(fe);if(Number.isNaN(ke.getTime()))return String(fe).slice(0,10);const Qe=pt=>String(pt).padStart(2,"0");return`${Qe(ke.getDate())}/${Qe(ke.getMonth()+1)}/${ke.getFullYear()}`}function Z(fe){const ke=new Set(d(p));ke.has(fe)?ke.delete(fe):ke.add(fe),y(p,ke,!0)}function k(){const fe=window.__TAURI__?.core?.convertFileSrc;return d(m)&&fe?fe(d(m)):null}async function j(){const fe=window.__TAURI__?.dialog?.open;if(!fe){y(R,"Image picker unavailable in this build.");return}try{const ke=await fe({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});ke&&(y(m,String(ke),!0),y(R,""))}catch(ke){y(R,String(ke),!0)}}async function ee(){if(!d(oe)||!d(g))return;const fe=++w;y(M,"loading");try{const ke=await O("fetch_loader_versions",{loader:d(h),gameVersion:d(g)});if(fe!==w)return;y(b,ke,!0),y(E,ke.find(Qe=>Qe.stable)?.version??ke[0]?.version??"",!0),y(M,ke.length?"idle":"error",!0)}catch{if(fe!==w)return;y(b,[],!0),y(E,""),y(M,"error")}}async function le(fe){y(g,fe,!0),d(oe)&&await ee()}async function _e(fe){y(h,fe,!0),y(E,""),y(b,[],!0),y(M,"idle"),d(oe)&&await ee()}async function W(){y(c,!0),y(u,"");try{y(l,await O("fetch_vanilla_versions"),!0)}catch(fe){y(u,String(fe),!0)}finally{y(c,!1)}}async function q(){if(!d($))return;y(I,!0),y(R,"");const fe=d(g),ke=d(_).trim()||fe;try{const Qe=await O("create_instance",{name:ke,version:fe,loader:d(h)||null,loaderVersion:d(E).trim()||null});let pt="";if(d(m))try{await O("set_instance_icon",{instanceId:Qe.id,imagePath:d(m)})}catch(bt){pt=`Instance created, but the icon could not be applied: ${bt}`}if(d(x).trim())try{await O("set_instance_group",{instanceId:Qe.id,group:d(x).trim()})}catch(bt){pt=pt?`${pt} The group could not be set: ${bt}`:`Instance created, but the group could not be set: ${bt}`}e.oncreated?.(Qe,pt)}catch(Qe){y(R,String(Qe),!0)}finally{y(I,!1)}}function Te(){window.__TAURI__?.core?.invoke("open_path",{path:s}).catch(fe=>y(R,String(fe),!0))}Qi(()=>{const fe=$s(()=>e.onclose?.());return W(),()=>eo(fe)});var Le=Tm(),Fe=G(Le),ze=G(Fe),Xe=G(ze),He=G(Xe);{var Ee=fe=>{var ke=lm(),Qe=It(ke);Oe(pt=>$e(Qe,"src",pt),[()=>k()]),ne(fe,ke)},Be=Ot(()=>k()),ue=fe=>{var ke=cm();ne(fe,ke)};Ze(He,fe=>{d(Be)?fe(Ee):fe(ue,-1)})}var U=C(Xe,2),be=G(U),ge=C(be,2),F=C(G(ge),2),X=G(F);X.value=X.__value="";var we=C(X);wt(we,16,t,fe=>fe,(fe,ke)=>{var Qe=cc(),pt=de(Qe,!0),bt={};Oe(()=>{he(pt,ke),bt!==(bt=ke)&&(Qe.value=(Qe.__value=bt)??"")}),ne(fe,Qe)}),Ws(F);var Pe=C(U,2),Ae=C(ze,2),Ce=G(Ae),Ve=G(Ce),je=G(Ve);{var T=fe=>{var ke=um();ne(fe,ke)},v=fe=>{var ke=dm(),Qe=G(ke),pt=de(Qe,!0),bt=C(Qe,2);Oe(()=>he(pt,d(u))),re("click",bt,W),ne(fe,ke)},D=fe=>{var ke=mm(),Qe=C(G(ke));wt(Qe,21,()=>d(S),pt=>pt.id,(pt,bt)=>{var un=hm(),Tt=G(un),Qt=G(Tt),vn=de(Qt,!0),ri=C(Qt,2);{var Vn=ie=>{var Q=fm();ne(ie,Q)};Ze(ri,ie=>{d(bt).is_latest_release&&ie(Vn)})}var ai=C(Tt),si=de(ai,!0),P=C(ai),K=de(P,!0);Oe((ie,Q)=>{St(un,1,`cursor-pointer border-b border-(--border)/50 ${d(g)===d(bt).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),he(vn,d(bt).id),he(si,ie),he(K,Q)},[()=>V(d(bt).release_time),()=>B(d(bt).version_type)]),re("click",un,()=>le(d(bt).id)),re("keydown",un,ie=>{(ie.key==="Enter"||ie.key===" ")&&(ie.preventDefault(),le(d(bt).id))}),ne(pt,un)},pt=>{var bt=pm();ne(pt,bt)}),ne(fe,ke)};Ze(je,fe=>{d(c)?fe(T):d(u)?fe(v,1):fe(D,-1)})}var se=C(Ve,2),pe=G(se),ae=C(pe,2),Ie=de(ae),ye=C(Ce,2),Y=G(ye),L=C(G(Y),2);wt(L,21,()=>i,fe=>fe.id,(fe,ke)=>{var Qe=gm(),pt=G(Qe),bt=C(pt,2),un=de(bt,!0);Oe(Tt=>{rc(pt,Tt),he(un,d(ke).label)},[()=>d(p).has(d(ke).id)]),re("change",pt,()=>Z(d(ke).id)),ne(fe,Qe)});var te=C(Y,2),Ue=C(G(te),2);wt(Ue,21,()=>r,fe=>fe.id,(fe,ke)=>{var Qe=vm(),pt=G(Qe),bt=C(pt,2),un=de(bt,!0);Oe(()=>{Va(pt,d(ke).id),rc(pt,d(h)===d(ke).id),he(un,d(ke).label)}),re("change",pt,()=>_e(d(ke).id)),ne(fe,Qe)});var Me=C(Ue,2);{var ve=fe=>{var ke=_m();ne(fe,ke)},We=fe=>{var ke=xm();ne(fe,ke)};Ze(Me,fe=>{d(A)?fe(ve):d(h)||fe(We,1)})}var Ye=C(Me,2);{var N=fe=>{var ke=Sm(),Qe=C(It(ke),2);{var pt=Tt=>{var Qt=bm();ne(Tt,Qt)},bt=Tt=>{var Qt=ym(),vn=It(Qt);Gt(vn,()=>d(E),ri=>y(E,ri)),ne(Tt,Qt)},un=Tt=>{var Qt=Mm(),vn=G(Qt);vn.value=vn.__value="";var ri=C(vn);wt(ri,17,()=>d(b),Vn=>Vn.version,(Vn,ai)=>{var si=cc(),P=de(si),K={};Oe(()=>{he(P,`${d(ai).version??""}${d(ai).stable?"":" (unstable)"}`),K!==(K=d(ai).version)&&(si.value=(si.__value=K)??"")}),ne(Vn,si)}),Ws(Qt),Xs(Qt,()=>d(E),Vn=>y(E,Vn)),ne(Tt,Qt)};Ze(Qe,Tt=>{d(M)==="loading"?Tt(pt):d(M)==="error"?Tt(bt,1):Tt(un,-1)})}ne(fe,ke)};Ze(Ye,fe=>{d(oe)&&fe(N)})}var Ne=C(Ae,2),J=G(Ne),Se=C(J,2);{var De=fe=>{var ke=Em(),Qe=de(ke,!0);Oe(()=>{$e(ke,"title",d(R)),he(Qe,d(R))}),ne(fe,ke)},Je=fe=>{var ke=wm(),Qe=de(ke,!0);Oe(()=>he(Qe,d(g)?`Selected Minecraft ${d(g)}`:"Pick a version to continue")),ne(fe,ke)};Ze(Se,fe=>{d(R)?fe(De):fe(Je,-1)})}var tt=C(Se,2),st=C(tt,2),yt=de(st,!0);Oe(()=>{$e(be,"placeholder",d(g)?`Instance name (${d(g)})`:"Instance name"),pe.disabled=!d(l),he(Ie,`${d(S).length??""} shown`),st.disabled=!d($),$e(st,"title",d(A)?"This mod loader is not supported yet.":"Create the instance"),he(yt,d(I)?"Creating…":"OK")}),re("click",Le,fe=>{fe.target===fe.currentTarget&&e.onclose?.()}),re("click",Xe,j),Gt(be,()=>d(_),fe=>y(_,fe)),Xs(F,()=>d(x),fe=>y(x,fe)),re("click",Pe,()=>e.onclose?.()),Gt(pe,()=>d(f),fe=>y(f,fe)),re("click",J,Te),re("click",tt,()=>e.onclose?.()),re("click",st,q),ne(n,Le),wn()}Hn(["click","keydown","change"]);var Rm=me('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Cm=me('<button class="w-full rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game">■ Kill</button>'),Pm=me("<button> </button>"),Lm=me('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Dm=me('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="w-full rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">▶ Launch</button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">⚙ Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">📂 Folder</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip">⤓ Export</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance">⧉ Copy</button> <button class="w-full rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance">⇱ Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Im(n,e){En(e,!0);let t=ft(e,"storage",3,null),i=ft(e,"gameRunning",3,!1),r=ft(e,"modsCount",3,null),a=ft(e,"groups",19,()=>[]),o=xe(!1),s=xe("");const l=Ot(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function c(){const be=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&be?be(e.instance.icon_path):"/logo.png"}function u(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function f(be){const ge=new Date(be*1e3),F=X=>String(X).padStart(2,"0");return`${F(ge.getDate())}/${F(ge.getMonth()+1)}/${ge.getFullYear()} ${F(ge.getHours())}:${F(ge.getMinutes())}:${F(ge.getSeconds())}`}function p(be){const ge=Math.max(0,Math.floor(be)),F=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],X=[];let we=ge;for(const[Pe,Ae]of F){const Ce=Math.floor(we/Pe);if(Ce&&(X.push(`${Ce} ${Ae}${Ce===1?"":"s"}`),we-=Ce*Pe,X.length===2))break}return X.length?X.join(" "):"0 seconds"}const g=Ot(()=>{const be=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${be}, last played on ${f(e.instance.last_played)}, total played for ${p(e.instance.total_time_played)}`:be});function _(be){y(o,!1),y(s,""),e.onchangegroup?.(be.trim()?be.trim():null)}var x=Dm(),m=G(x),h=de(m),E=C(m,2),b=de(E,!0),M=C(E,2),w=G(M),I=de(w,!0),R=C(w,2),O=de(R,!0),S=C(R,2);{var A=be=>{var ge=Rm(),F=de(ge);Oe(()=>he(F,`▤ ${e.instance.group??""}`)),ne(be,ge)};Ze(S,be=>{e.instance.group&&be(A)})}var oe=C(M,2),$=de(oe,!0),B=C(oe,2),V=G(B),Z=C(V,2);{var k=be=>{var ge=Cm();re("click",ge,function(...F){e.onkill?.apply(this,F)}),ne(be,ge)};Ze(Z,be=>{i()&&be(k)})}var j=C(Z,2),ee=C(j,2),le=C(G(ee),2),_e=de(le,!0),W=C(ee,2);{var q=be=>{var ge=Lm(),F=G(ge),X=C(F,2);wt(X,16,a,Ce=>Ce,(Ce,Ve)=>{var je=Pm(),T=de(je,!0);Oe(()=>{St(je,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===Ve?"font-medium text-(--accent)":"text-(--text-muted)"}`),he(T,Ve)}),re("click",je,()=>_(Ve)),ne(Ce,je)});var we=C(X,2),Pe=G(we),Ae=C(Pe,2);Oe(Ce=>{St(F,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),Ae.disabled=Ce},[()=>!d(s).trim()]),re("click",F,()=>_("")),re("keydown",Pe,Ce=>{Ce.key==="Enter"&&d(s).trim()&&_(d(s))}),Gt(Pe,()=>d(s),Ce=>y(s,Ce)),re("click",Ae,()=>_(d(s))),ne(be,ge)};Ze(W,be=>{d(o)&&be(q)})}var Te=C(W,2),Le=C(Te,2),Fe=C(Le,2),ze=C(Fe,2),Xe=C(ze,2),He=C(B,2),Ee=G(He),Be=de(Ee,!0),ue=C(Ee,2),U=de(ue);Oe((be,ge,F)=>{$e(h,"src",be),$e(E,"title",e.instance.name),he(b,e.instance.name),he(I,e.instance.minecraft_version),St(R,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${d(l)??""}`),he(O,e.instance.loader_type),$e(oe,"title",ge),he($,F),V.disabled=i(),$e(V,"title",i()?"A game is already running":`Launch ${e.instance.name}`),he(_e,d(o)?"▴":"▾"),Te.disabled=!t(),$e(Te,"title",t()?"Opens the instance folder":"Storage unknown"),he(Be,d(g)),he(U,`${r()??"…"??""} mods installed`)},[()=>c(),()=>u(),()=>u()]),Ji("error",h,be=>{be.currentTarget.dataset.f||(be.currentTarget.dataset.f="1",be.currentTarget.src="/logo.png")}),re("click",V,function(...be){e.onlaunch?.apply(this,be)}),re("click",j,function(...be){e.onedit?.apply(this,be)}),re("click",ee,()=>y(o,!d(o))),re("click",Te,function(...be){e.onopenfolder?.apply(this,be)}),re("click",Le,function(...be){e.onexport?.apply(this,be)}),re("click",Fe,function(...be){e.oncopy?.apply(this,be)}),re("click",ze,function(...be){e.ondelete?.apply(this,be)}),re("click",Xe,function(...be){e.onshortcut?.apply(this,be)}),ne(n,x),wn()}Hn(["click","keydown"]);const Xa="twilight_user_accent",Il="twilight_custom_themes",uc="#06B6D4",dc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],fc="#0F172A",Um="#FFFFFF",Nm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function as(n){return Nm[n]??[]}function Qa(n){let e=n.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function hc(n){const e=t=>{const i=parseInt(n.replace("#","").substring(t,t+2),16)/255;return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function Om(n){const e=hc(n),t=1.05/(e+.05);return(e+.05)/(hc(fc)+.05)>=t?fc:Um}function ja(n,{persist:e=!0}={}){const t=Qa(n);if(!t)return!1;const i=document.documentElement;return i.style.setProperty("--user-accent",t),i.style.setProperty("--on-accent",Om(t)),e&&localStorage.setItem(Xa,t),!0}function Fm(){localStorage.removeItem(Xa);const n=document.documentElement;n.style.removeProperty("--user-accent"),n.style.removeProperty("--on-accent")}function ol(){return Qa(localStorage.getItem(Xa)??"")}function km(){const n=ol();n&&ja(n)}const to=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:dc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...dc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:as("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:as("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:as("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:as("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],Ul="twilight-dark",ll={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},Bm=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function zm(n){let e="";for(const t of n){const i=t.codePointAt(0);i>=65&&i<=90?e+=String.fromCharCode(i+32):i>=97&&i<=122||i>=48&&i<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function Hd(n){const e=n&&typeof n=="object"?n:{},t={};for(const[i,r]of Object.entries(ll))t[i]=Qa(e[i]??"")??r;return t}function Gm(n){return typeof n=="string"&&n.startsWith("custom:")}function Vd(n){return dr().find(e=>e.id===n)??null}function dr(){try{const n=JSON.parse(localStorage.getItem(Il)??"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e=="object"&&Gm(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:Hd(e.tokens)})):[]}catch{return[]}}function pc({name:n,dark:e,tokens:t}){const i=String(n??"").trim()||"Custom theme",r={id:`custom:${zm(i)||"theme"}`,name:i,dark:!!e,tokens:Hd(t)},a=[...dr().filter(o=>o.id!==r.id),r];return localStorage.setItem(Il,JSON.stringify(a)),r}function Hm(n){const e=dr().filter(t=>t.id!==n);return localStorage.setItem(Il,JSON.stringify(e)),e}function mc(){try{const n=getComputedStyle(document.documentElement),e=(i,r)=>{const a=n.getPropertyValue(i).trim();return Qa(a)??r},t={};for(const[i,r]of Object.entries(ll)){const a=`--${i.replace(/(\d)$/,"-$1")}`;t[i]=e(a,r)}return t}catch{return{...ll}}}const Vm=new Set(to.map(n=>n.id));function Wd(n){const e=(n??"").trim();return e==="dark"?Ul:e==="light"?"twilight-light":Vm.has(e)||Vd(e)?e:null}function Wm(n){const e=n.tokens;return{id:n.id,label:n.name,dark:n.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:n.name,hex:e.accent1}],tokens:e}}function Qr(n){const e=Wd(n);return e?to.find(t=>t.id===e)??Wm(Vd(e)):null}function ss(n){return Qr(n)?.dark??!0}const Xm=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let vo="";function jm(n){const e=Qr(n)??Qr(Ul);if(!e||e.id===vo)return e;const t=vo==="";vo=e.id;const i=document.documentElement;for(const r of Xm)i.style.removeProperty(r);i.classList.toggle("dark",e.dark),i.classList.toggle("light",!e.dark);for(const r of to)r.cls&&i.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;i.style.setProperty("--bg-1",r.bg1),i.style.setProperty("--bg-2",r.bg2),i.style.setProperty("--bg-3",r.bg3),i.style.setProperty("--border-1",r.border1),i.style.setProperty("--fg-1",r.fg1),i.style.setProperty("--fg-2",r.fg2),i.style.setProperty("--accent-1",r.accent1),i.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(Xa),ja(r.accent1,{persist:!1})}else t||(localStorage.removeItem(Xa),ja(e.accent,{persist:!1}));return e}var Ym=me("<button></button>"),qm=me('<span class="text-[11px] text-rose-400">invalid hex</span>'),Km=me('<span class="text-[11px] text-(--text-muted)">live preview</span>'),Zm=me('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function Jm(n,e){En(e,!0);let t=ft(e,"theme",3,"twilight-dark");const i=Ot(()=>Qr(t())?.accent??uc),r=Ot(()=>{const b=Qr(t())?.suggested??[],M=(Qr(t())?.accent??uc).toLowerCase();return b.map(w=>({...w,isBuiltin:w.hex.toLowerCase()===M}))});let a=xe(Ct(ol())),o=xe(Ct(d(a)??d(i))),s=xe(!1);yn(()=>{t(),y(a,ol(),!0),y(o,d(a)??d(i),!0),y(s,!1)});function l(b){return d(a)===null?b.isBuiltin:d(a)===b.hex.toLowerCase()}function c(b){b.isBuiltin?(Fm(),y(a,null)):ja(b.hex)&&y(a,b.hex.toLowerCase(),!0),y(o,d(a)??d(i),!0),y(s,!1)}function u(b,M){const w=ja(b,{persist:M})?Qa(b):null;w?(y(a,w,!0),y(s,!1)):y(s,!0)}var f=Zm(),p=It(f);wt(p,21,()=>d(r),b=>b.hex,(b,M)=>{var w=Ym();Oe((I,R)=>{St(w,1,`h-7 w-7 rounded-full ${I??""}`),Hi(w,`background:${d(M).hex??""}`),$e(w,"title",`${d(M).name??""}${d(M).isBuiltin?" (built-in)":""}`),$e(w,"aria-label",`${d(M).name??""} accent`),$e(w,"aria-pressed",R)},[()=>l(d(M))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>l(d(M))]),re("click",w,()=>c(d(M))),ne(b,w)});var g=C(p,2),_=G(g),x=C(_,2),m=C(x,2);{var h=b=>{var M=qm();ne(b,M)},E=b=>{var M=Km();ne(b,M)};Ze(m,b=>{d(s)?b(h):b(E,-1)})}Oe(()=>{Va(_,d(o)),Va(x,d(o)),$e(x,"placeholder",d(i))}),re("input",_,b=>{y(o,b.currentTarget.value,!0),u(d(o),!1)}),re("change",_,b=>u(b.currentTarget.value,!0)),re("input",x,b=>{y(o,b.currentTarget.value,!0),u(d(o),!1)}),re("change",x,b=>u(b.currentTarget.value,!0)),ne(n,f),wn()}Hn(["click","input","change"]);var Qm=me('<button><span class="w-5 shrink-0 text-center text-[15px]"> </span> <span class="truncate"> </span></button>'),$m=me('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),eg=me('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),tg=me('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),gc=me('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),ng=me(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),ig=me("<option> </option>"),rg=me('<p class="mt-2 text-[12px] text-rose-400"> </p>'),ag=me('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!></select> <!> <!> <button class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)">↻ Rescan JREs</button> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),sg=me('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),og=me('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),lg=me('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),cg=me('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),ug=me('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),dg=me('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),fg=me("<p> </p>"),hg=me('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function pg(n,e){En(e,!0);let t=ft(e,"version",3,""),i=ft(e,"theme",15,"twilight-dark"),r=ft(e,"storage",3,null),a=ft(e,"runtimes",19,()=>[]),o=ft(e,"scanning",3,!1),s=ft(e,"javaError",3,""),l=ft(e,"javaPath",15,""),c=ft(e,"minMem",15,0),u=ft(e,"maxMem",15,0);ft(e,"sharedInput",11,""),ft(e,"instancesInput",11,"");let f=ft(e,"storageBusy",3,!1),p=ft(e,"storageMsg",3,""),g=ft(e,"javaMsg",3,""),_=ft(e,"gameRunning",3,!1);const x=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"about",label:"About & Updates",icon:"ℹ️"}];let m=xe("appearance"),h=xe(Ct(dr())),E=xe(""),b=xe(!0),M=xe(Ct(mc())),w=xe(""),I=xe("");function R(){y(M,mc(),!0),y(I,"Loaded the active theme’s tokens — tweak and save.")}function O(){try{const ue=pc({name:d(E),dark:d(b),tokens:d(M)});y(h,dr(),!0),i(ue.id),y(I,`Saved “${ue.name}”.`)}catch(ue){y(I,String(ue),!0)}}function S(ue){Hm(ue),y(h,dr(),!0),i()===ue&&i(Ul),y(I,"Theme deleted.")}function A(){y(w,JSON.stringify({name:d(E).trim()||"My theme",dark:d(b),tokens:d(M)},null,2),!0),y(I,"Theme JSON written below — copy it to share.")}function oe(){try{const ue=JSON.parse(d(w));if(!ue||typeof ue!="object"||Array.isArray(ue))throw new Error("Expected a theme object.");const U=pc(ue);y(h,dr(),!0),i(U.id),y(I,`Imported “${U.name}”.`),y(w,"")}catch(ue){y(I,`Import failed: ${ue}`)}}async function $(ue){const U=window.__TAURI__?.dialog?.open;if(!U)return null;try{const be=await U({directory:!0,multiple:!1,defaultPath:ue&&ue.trim()?ue.trim():void 0});return typeof be=="string"?be:null}catch{return null}}const B=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let V=xe(Ct({}));yn(()=>{r()&&y(V,{instances:r().is_default_instances?"":r().instances_dir,shared:r().is_default_shared?"":r().shared_dir,versions:r().is_default_versions?"":r().versions_dir,mods:r().is_default_mods?"":r().mods_dir,icons:r().is_default_icons?"":r().icons_dir,java:r().is_default_java?"":r().java_dir,skins:r().is_default_skins?"":r().skins_dir,downloads:r().downloads_dir||""},!0)});function Z(ue){return r()?ue==="downloads"?r().staging_root:r()[`${ue}_dir`]:""}function k(ue){return r()?ue==="downloads"?r().is_default_staging:r()[`is_default_${ue}`]:!0}const j="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var ee=hg(),le=G(ee),_e=G(le),W=C(_e,2);wt(W,21,()=>x,ue=>ue.id,(ue,U)=>{var be=Qm(),ge=G(be),F=de(ge,!0),X=C(ge,2),we=de(X,!0);Oe(()=>{St(be,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${d(m)===d(U).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),$e(be,"aria-current",d(m)===d(U).id?"true":void 0),he(F,d(U).icon),he(we,d(U).label)}),re("click",be,()=>y(m,d(U).id,!0)),ne(ue,be)});var q=C(le,2),Te=G(q),Le=G(Te);{var Fe=ue=>{var U=ng(),be=C(It(U),6),ge=G(be);wt(ge,17,()=>to,Me=>Me.id,(Me,ve)=>{var We=$m(),Ye=G(We),N=G(Ye),Ne=C(N,2),J=C(Ne,2),Se=C(Ye,2),De=de(Se,!0),Je=C(Se,2),tt=de(Je,!0);Oe(()=>{St(We,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===d(ve).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),$e(We,"aria-pressed",i()===d(ve).id),$e(We,"title",`${d(ve).label??""}: ${d(ve).dark?"dark":"light"} ground`),Hi(N,`background:${d(ve).swatch[0]??""}`),Hi(Ne,`background:${d(ve).swatch[1]??""}`),Hi(J,`background:${d(ve).swatch[2]??""}`),he(De,d(ve).label),he(tt,d(ve).dark?"Dark ground":"Light ground")}),re("click",We,()=>i(d(ve).id)),ne(Me,We)});var F=C(ge,2);wt(F,17,()=>d(h),Me=>Me.id,(Me,ve)=>{var We=eg(),Ye=G(We),N=G(Ye),Ne=C(N,2),J=C(Ne,2),Se=C(Ye,2),De=de(Se,!0),Je=C(Se,2),tt=de(Je),st=C(Je,2);Oe(()=>{St(We,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===d(ve).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),$e(We,"title",`${d(ve).name??""}: ${d(ve).dark?"dark":"light"} ground`),Hi(N,`background:${d(ve).tokens.bg1??""}`),Hi(Ne,`background:${d(ve).tokens.bg3??""}`),Hi(J,`background:${d(ve).tokens.accent1??""}`),he(De,d(ve).name),he(tt,`Custom · ${d(ve).dark?"Dark":"Light"} ground`),$e(st,"title",`Delete ${d(ve).name??""}`),$e(st,"aria-label",`Delete ${d(ve).name??""}`)}),re("click",We,()=>i(d(ve).id)),re("keydown",We,yt=>{(yt.key==="Enter"||yt.key===" ")&&(yt.preventDefault(),i(d(ve).id))}),re("click",st,yt=>{yt.stopPropagation(),S(d(ve).id)}),ne(Me,We)});var X=C(be,4),we=G(X);Jm(we,{get theme(){return i()}});var Pe=C(X,6),Ae=G(Pe),Ce=G(Ae),Ve=C(Ce,2),je=G(Ve),T=C(je,2),v=C(Ae,2);wt(v,21,()=>Bm,Me=>Me.key,(Me,ve)=>{var We=tg(),Ye=G(We),N=de(Ye,!0),Ne=C(Ye,2),J=G(Ne),Se=C(J,2);Oe(()=>{he(N,d(ve).label),Va(J,d(M)[d(ve).key]),$e(J,"title",`${d(ve).label??""} color`),$e(J,"aria-label",`${d(ve).label??""} color`),Va(Se,d(M)[d(ve).key]),$e(Se,"aria-label",`${d(ve).label??""} hex`)}),re("input",J,De=>y(M,{...d(M),[d(ve).key]:De.currentTarget.value},!0)),re("input",Se,De=>y(M,{...d(M),[d(ve).key]:De.currentTarget.value},!0)),ne(Me,We)});var D=C(v,2),se=G(D),pe=C(se,2),ae=C(Pe,4),Ie=G(ae),ye=C(Ie,2),Y=G(ye),L=C(Y,2),te=C(ae,2);{var Ue=Me=>{var ve=gc(),We=de(ve,!0);Oe(()=>he(We,d(I))),ne(Me,ve)};Ze(te,Me=>{d(I)&&Me(Ue)})}Oe(()=>{St(je,1,`px-3 py-1.5 text-[12px] ${d(b)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),$e(je,"aria-pressed",d(b)),St(T,1,`px-3 py-1.5 text-[12px] ${d(b)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),$e(T,"aria-pressed",!d(b))}),Gt(Ce,()=>d(E),Me=>y(E,Me)),re("click",je,()=>y(b,!0)),re("click",T,()=>y(b,!1)),re("click",se,R),re("click",pe,O),Gt(Ie,()=>d(w),Me=>y(w,Me)),re("click",Y,A),re("click",L,oe),ne(ue,U)},ze=ue=>{var U=ag(),be=C(It(U),6),ge=G(be);ge.value=ge.__value="";var F=C(ge);wt(F,17,a,ae=>ae.executable,(ae,Ie)=>{var ye=ig(),Y=de(ye),L={};Oe(()=>{he(Y,`Java ${d(Ie).major??""} — ${d(Ie).home??""}`),L!==(L=d(Ie).executable)&&(ye.value=(ye.__value=L)??"")}),ne(ae,ye)}),Ws(be);var X=C(be,2);{var we=ae=>{var Ie=gc(),ye=de(Ie,!0);Oe(()=>he(ye,o()?"Probing system roots…":"No runtimes detected.")),ne(ae,Ie)};Ze(X,ae=>{a().length||ae(we)})}var Pe=C(X,2);{var Ae=ae=>{var Ie=rg(),ye=de(Ie,!0);Oe(()=>he(ye,s())),ne(ae,Ie)};Ze(Pe,ae=>{s()&&ae(Ae)})}var Ce=C(Pe,2),Ve=C(Ce,4),je=C(G(Ve),2),T=C(je,2),v=C(Ve,2),D=C(G(v),2),se=C(D,2),pe=C(v,4);Oe(()=>Ce.disabled=o()),Xs(be,l),re("click",Ce,function(...ae){e.onscanjava?.apply(this,ae)}),Gt(je,c),Gt(T,c),Gt(D,u),Gt(se,u),re("click",pe,function(...ae){e.onsaveprefs?.apply(this,ae)}),ne(ue,U)},Xe=ue=>{var U=ug(),be=C(It(U),4);{var ge=F=>{var X=cg(),we=It(X),Pe=G(we),Ae=G(Pe),Ce=C(G(Ae),2),Ve=de(Ce,!0),je=C(Ae,2),T=C(we,2);wt(T,17,()=>B,v=>v.key,(v,D)=>{var se=lg(),pe=G(se),ae=G(pe),Ie=G(ae),ye=C(Ie),Y=de(ye,!0),L=C(ae,2);{var te=Je=>{var tt=sg();Oe(()=>tt.disabled=f()),re("click",tt,()=>e.onsavefolder?.(d(D).key,"")),ne(Je,tt)},Ue=Ot(()=>!k(d(D).key));Ze(L,Je=>{d(Ue)&&Je(te)})}var Me=C(pe,2),ve=de(Me,!0),We=C(Me,2),Ye=G(We),N=C(Ye,2),Ne=C(N,2),J=C(Ne,2),Se=C(We,2);{var De=Je=>{var tt=og(),st=G(tt),yt=de(st),fe=C(st,2);Oe(()=>{$e(st,"title",r().staging_root),he(yt,`Staging: ${r().staging_root??""}`),fe.disabled=f()||_(),$e(fe,"title",_()?"Unavailable while a game is running":"Purges the staging area")}),re("click",fe,function(...ke){e.oncleanstaging?.apply(this,ke)}),ne(Je,tt)};Ze(Se,Je=>{d(D).key==="downloads"&&Je(De)})}Oe((Je,tt)=>{he(Ie,`${d(D).label??""} `),he(Y,Je),he(ve,d(D).hint),$e(Ye,"placeholder",tt),J.disabled=f()},[()=>k(d(D).key)?"(default)":"(custom)",()=>Z(d(D).key)]),Gt(Ye,()=>d(V)[d(D).key],Je=>d(V)[d(D).key]=Je),re("click",N,async()=>{const Je=await $(d(V)[d(D).key]);Je&&(d(V)[d(D).key]=Je)}),re("click",Ne,()=>e.onopenfolder?.(Z(d(D).key))),re("click",J,()=>e.onsavefolder?.(d(D).key,d(V)[d(D).key])),ne(v,se)}),Oe(()=>{$e(Ce,"title",r().app_data),he(Ve,r().app_data)}),re("click",je,()=>e.onopenfolder?.(r().app_data)),ne(F,X)};Ze(be,F=>{r()&&F(ge)})}ne(ue,U)},He=ue=>{var U=dg(),be=C(It(U),4),ge=G(be),F=C(G(ge),2),X=G(F),we=C(G(X)),Pe=de(we),Ae=C(be,2),Ce=G(Ae),Ve=C(Ce,2),je=C(Ve,2);Oe(()=>he(Pe,`(alpha-v${t()??""})`)),re("click",Ce,()=>e.onopenurl?.(`${j}`)),re("click",Ve,()=>e.onopenurl?.(`${j}/releases`)),re("click",je,()=>e.onopenurl?.(`${j}/issues`)),ne(ue,U)};Ze(Le,ue=>{d(m)==="appearance"?ue(Fe):d(m)==="java"?ue(ze,1):d(m)==="storage"?ue(Xe,2):ue(He,-1)})}var Ee=C(Le,2);{var Be=ue=>{var U=fg(),be=de(U,!0);Oe(()=>{St(U,1,`mt-5 text-[12px] ${g()?"text-(--accent)":"text-(--text-muted)"}`),he(be,g()||p())}),ne(ue,U)};Ze(Ee,ue=>{(g()||p())&&ue(Be)})}re("click",_e,function(...ue){e.onback?.apply(this,ue)}),ne(n,ee),wn()}Hn(["click","keydown","input"]);const Nl="156",Er={ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mg=0,vc=1,gg=2,Xd=1,vg=2,Mi=3,pi=0,Sn=1,zn=2,Pi=0,$r=1,_c=2,xc=3,bc=4,_g=5,jr=100,xg=101,bg=102,yc=103,Mc=104,yg=200,Mg=201,Sg=202,Eg=203,jd=204,Yd=205,wg=206,Tg=207,Ag=208,Rg=209,Cg=210,Pg=0,Lg=1,Dg=2,cl=3,Ig=4,Ug=5,Ng=6,Og=7,qd=0,Fg=1,kg=2,ji=0,Bg=1,zg=2,Gg=3,Hg=4,Vg=5,Kd=300,sa=301,oa=302,js=303,ul=304,no=306,dl=1e3,Zn=1001,fl=1002,Nt=1003,Sc=1004,_o=1005,kn=1006,Wg=1007,Ya=1008,Yi=1009,Xg=1010,jg=1011,Ol=1012,Zd=1013,Wi=1014,Ai=1015,la=1016,Jd=1017,Qd=1018,mr=1020,Yg=1021,Jn=1023,qg=1024,Kg=1025,gr=1026,ca=1027,Zg=1028,$d=1029,Jg=1030,ef=1031,tf=1033,xo=33776,bo=33777,yo=33778,Mo=33779,Ec=35840,wc=35841,Tc=35842,Ac=35843,Qg=36196,Rc=37492,Cc=37496,Pc=37808,Lc=37809,Dc=37810,Ic=37811,Uc=37812,Nc=37813,Oc=37814,Fc=37815,kc=37816,Bc=37817,zc=37818,Gc=37819,Hc=37820,Vc=37821,So=36492,Wc=36494,Xc=36495,$g=36283,jc=36284,Yc=36285,qc=36286,nf=3e3,vr=3001,ev=3200,tv=3201,rf=0,nv=1,_r="",Lt="srgb",mi="srgb-linear",io="display-p3",Eo=7680,iv=519,rv=512,av=513,sv=514,ov=515,lv=516,cv=517,uv=518,dv=519,hl=35044,Kc="300 es",pl=1035,Ri=2e3,Ys=2001;class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,ml=180/Math.PI;function qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function mn(n,e,t){return Math.max(e,Math.min(t,n))}function fv(n,e){return(n%e+e)%e}function wo(n,e,t){return(1-t)*n+t*e}function Zc(n){return(n&n-1)===0&&n!==0}function gl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hv={DEG2RAD:Ns};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,i,r,a,o,s,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],p=i[2],g=i[5],_=i[8],x=r[0],m=r[3],h=r[6],E=r[1],b=r[4],M=r[7],w=r[2],I=r[5],R=r[8];return a[0]=o*x+s*E+l*w,a[3]=o*m+s*b+l*I,a[6]=o*h+s*M+l*R,a[1]=c*x+u*E+f*w,a[4]=c*m+u*b+f*I,a[7]=c*h+u*M+f*R,a[2]=p*x+g*E+_*w,a[5]=p*m+g*b+_*I,a[8]=p*h+g*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,p=s*l-u*a,g=c*a-o*l,_=t*f+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(s*i-r*o)*x,e[3]=p*x,e[4]=(u*t-r*l)*x,e[5]=(r*a-s*t)*x,e[6]=g*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new ht;function af(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pv(){const n=qs("canvas");return n.style.display="block",n}const Jc={};function Fa(n){n in Jc||(Jc[n]=!0,console.warn(n))}function ea(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const mv=new ht().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gv=new ht().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function vv(n){return n.convertSRGBToLinear().applyMatrix3(gv)}function _v(n){return n.applyMatrix3(mv).convertLinearToSRGB()}const xv={[mi]:n=>n,[Lt]:n=>n.convertSRGBToLinear(),[io]:vv},bv={[mi]:n=>n,[Lt]:n=>n.convertLinearToSRGB(),[io]:_v},Nn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return mi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=xv[e],r=bv[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Tr;class sf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=qs("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ea(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ea(t[i]/255)*255):t[i]=ea(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yv=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=qi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Ro(r[o].image)):a.push(Ro(r[o]))}else a=Ro(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mv=0;class on extends yr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=Zn,r=Zn,a=kn,o=Ya,s=Jn,l=Yi,c=on.DEFAULT_ANISOTROPY,u=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=qi(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===vr?Lt:_r),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dl:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dl:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?vr:nf}set encoding(e){Fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vr?Lt:_r}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Kd;on.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],p=l[1],g=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(g+1)/2,w=(h+1)/2,I=(u+p)/4,R=(f+x)/4,O=(_+m)/4;return b>M&&b>w?b<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(b),r=I/i,a=R/i):M>w?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=I/r,a=O/r):w<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),i=R/a,r=O/a),this.set(i,r,a,t),this}let E=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-x)/E,this.z=(p-u)/E,this.w=Math.acos((c+g+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sv extends yr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Fa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vr?Lt:_r),this.texture=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:kn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Sv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lf extends on{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ev extends on{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const p=a[o+0],g=a[o+1],_=a[o+2],x=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=p,e[t+1]=g,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==p||c!==g||u!==_){let m=1-s;const h=l*p+c*g+u*_+f*x,E=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const w=Math.sqrt(b),I=Math.atan2(w,h*E);m=Math.sin(m*I)/w,s=Math.sin(s*I)/w}const M=s*E;if(l=l*m+p*M,c=c*m+g*M,u=u*m+_*M,f=f*m+x*M,m===1-s){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[o],p=a[o+1],g=a[o+2],_=a[o+3];return e[t]=s*_+u*f+l*g-c*p,e[t+1]=l*_+u*p+c*f-s*g,e[t+2]=c*_+u*g+s*p-l*f,e[t+3]=u*_-s*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(a/2),p=l(i/2),g=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=p*u*f+c*g*_,this._y=c*g*f-p*u*_,this._z=c*u*_+p*g*f,this._w=c*u*f-p*g*_;break;case"YXZ":this._x=p*u*f+c*g*_,this._y=c*g*f-p*u*_,this._z=c*u*_-p*g*f,this._w=c*u*f+p*g*_;break;case"ZXY":this._x=p*u*f-c*g*_,this._y=c*g*f+p*u*_,this._z=c*u*_+p*g*f,this._w=c*u*f-p*g*_;break;case"ZYX":this._x=p*u*f-c*g*_,this._y=c*g*f+p*u*_,this._z=c*u*_-p*g*f,this._w=c*u*f+p*g*_;break;case"YZX":this._x=p*u*f+c*g*_,this._y=c*g*f+p*u*_,this._z=c*u*_-p*g*f,this._w=c*u*f-p*g*_;break;case"XZY":this._x=p*u*f-c*g*_,this._y=c*g*f-p*u*_,this._z=c*u*_+p*g*f,this._w=c*u*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],p=i+s+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-l)*g,this._y=(a-c)*g,this._z=(o-r)*g}else if(i>s&&i>f){const g=2*Math.sqrt(1+i-s-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(a+c)/g}else if(s>f){const g=2*Math.sqrt(1+s-i-f);this._w=(a-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-i-s);this._w=(o-r)/g,this._x=(a+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*r-s*i,u=l*i+s*t-a*r,f=l*r+a*i-o*t,p=-a*t-o*i-s*r;return this.x=c*l+p*-a+u*-s-f*-o,this.y=u*l+p*-o+f*-a-c*-s,this.z=f*l+p*-s+c*-o-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new H,Qc=new br;class $a{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox),Ar.applyMatrix4(e.matrixWorld),this.union(Ar);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)vi.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else r.boundingBox===null&&r.computeBoundingBox(),Ar.copy(r.boundingBox),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),os.subVectors(this.max,Ma),Rr.subVectors(e.a,Ma),Cr.subVectors(e.b,Ma),Pr.subVectors(e.c,Ma),ki.subVectors(Cr,Rr),Bi.subVectors(Pr,Cr),tr.subVectors(Rr,Pr);let t=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-tr.z,tr.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,tr.z,0,-tr.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-tr.y,tr.x,0];return!Po(t,Rr,Cr,Pr,os)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,Rr,Cr,Pr,os))?!1:(ls.crossVectors(ki,Bi),t=[ls.x,ls.y,ls.z],Po(t,Rr,Cr,Pr,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new H,new H,new H,new H,new H,new H,new H,new H],vi=new H,Ar=new $a,Rr=new H,Cr=new H,Pr=new H,ki=new H,Bi=new H,tr=new H,Ma=new H,os=new H,ls=new H,nr=new H;function Po(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){nr.fromArray(n,a);const s=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const wv=new $a,Sa=new H,Lo=new H;class Fl{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wv.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Lo)),this.expandByPoint(Sa.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new H,Do=new H,cs=new H,zi=new H,Io=new H,us=new H,Uo=new H;class cf{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Do.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Do);const a=e.distanceTo(t)*.5,o=-this.direction.dot(cs),s=zi.dot(this.direction),l=-zi.dot(cs),c=zi.lengthSq(),u=Math.abs(1-o*o);let f,p,g,_;if(u>0)if(f=o*l-s,p=o*s-l,_=a*u,f>=0)if(p>=-_)if(p<=_){const x=1/u;f*=x,p*=x,g=f*(f+o*p+2*s)+p*(o*f+p+2*l)+c}else p=a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-o*a+s)),p=f>0?-a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-a,-l),a),g=p*(p+2*l)+c):(f=Math.max(0,-(o*a+s)),p=f>0?a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c);else p=o>0?-a:a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Do).addScaledVector(cs,p),g}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(a=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(s=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,r,a){Io.subVectors(t,e),us.subVectors(i,e),Uo.crossVectors(Io,us);let o=this.direction.dot(Uo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=s*this.direction.dot(us.crossVectors(zi,us));if(l<0)return null;const c=s*this.direction.dot(Io.cross(zi));if(c<0||l+c>o)return null;const u=-s*zi.dot(Uo);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,i,r,a,o,s,l,c,u,f,p,g,_,x,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,u,f,p,g,_,x,m)}set(e,t,i,r,a,o,s,l,c,u,f,p,g,_,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=p,h[3]=g,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),a=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=o*u,g=o*f,_=s*u,x=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=g+_*c,t[5]=p-x*c,t[9]=-s*l,t[2]=x-p*c,t[6]=_+g*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,g=l*f,_=c*u,x=c*f;t[0]=p+x*s,t[4]=_*s-g,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=g*s-_,t[6]=x+p*s,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,g=l*f,_=c*u,x=c*f;t[0]=p-x*s,t[4]=-o*f,t[8]=_+g*s,t[1]=g+_*s,t[5]=o*u,t[9]=x-p*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,g=o*f,_=s*u,x=s*f;t[0]=l*u,t[4]=_*c-g,t[8]=p*c+x,t[1]=l*f,t[5]=x*c+p,t[9]=g*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,g=o*c,_=s*l,x=s*c;t[0]=l*u,t[4]=x-p*f,t[8]=_*f+g,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=g*f+_,t[10]=p-x*f}else if(e.order==="XZY"){const p=o*l,g=o*c,_=s*l,x=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=p*f+x,t[5]=o*u,t[9]=g*f-_,t[2]=_*f-g,t[6]=s*u,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,Av)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Gi.crossVectors(i,Rn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Gi.crossVectors(i,Rn)),Gi.normalize(),ds.crossVectors(Rn,Gi),r[0]=Gi.x,r[4]=ds.x,r[8]=Rn.x,r[1]=Gi.y,r[5]=ds.y,r[9]=Rn.y,r[2]=Gi.z,r[6]=ds.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],p=i[9],g=i[13],_=i[2],x=i[6],m=i[10],h=i[14],E=i[3],b=i[7],M=i[11],w=i[15],I=r[0],R=r[4],O=r[8],S=r[12],A=r[1],oe=r[5],$=r[9],B=r[13],V=r[2],Z=r[6],k=r[10],j=r[14],ee=r[3],le=r[7],_e=r[11],W=r[15];return a[0]=o*I+s*A+l*V+c*ee,a[4]=o*R+s*oe+l*Z+c*le,a[8]=o*O+s*$+l*k+c*_e,a[12]=o*S+s*B+l*j+c*W,a[1]=u*I+f*A+p*V+g*ee,a[5]=u*R+f*oe+p*Z+g*le,a[9]=u*O+f*$+p*k+g*_e,a[13]=u*S+f*B+p*j+g*W,a[2]=_*I+x*A+m*V+h*ee,a[6]=_*R+x*oe+m*Z+h*le,a[10]=_*O+x*$+m*k+h*_e,a[14]=_*S+x*B+m*j+h*W,a[3]=E*I+b*A+M*V+w*ee,a[7]=E*R+b*oe+M*Z+w*le,a[11]=E*O+b*$+M*k+w*_e,a[15]=E*S+b*B+M*j+w*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],p=e[10],g=e[14],_=e[3],x=e[7],m=e[11],h=e[15];return _*(+a*l*f-r*c*f-a*s*p+i*c*p+r*s*g-i*l*g)+x*(+t*l*g-t*c*p+a*o*p-r*o*g+r*c*u-a*l*u)+m*(+t*c*f-t*s*g-a*o*f+i*o*g+a*s*u-i*c*u)+h*(-r*s*u-t*l*f+t*s*p+r*o*f-i*o*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],p=e[10],g=e[11],_=e[12],x=e[13],m=e[14],h=e[15],E=f*m*c-x*p*c+x*l*g-s*m*g-f*l*h+s*p*h,b=_*p*c-u*m*c-_*l*g+o*m*g+u*l*h-o*p*h,M=u*x*c-_*f*c+_*s*g-o*x*g-u*s*h+o*f*h,w=_*f*l-u*x*l-_*s*p+o*x*p+u*s*m-o*f*m,I=t*E+i*b+r*M+a*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=E*R,e[1]=(x*p*a-f*m*a-x*r*g+i*m*g+f*r*h-i*p*h)*R,e[2]=(s*m*a-x*l*a+x*r*c-i*m*c-s*r*h+i*l*h)*R,e[3]=(f*l*a-s*p*a-f*r*c+i*p*c+s*r*g-i*l*g)*R,e[4]=b*R,e[5]=(u*m*a-_*p*a+_*r*g-t*m*g-u*r*h+t*p*h)*R,e[6]=(_*l*a-o*m*a-_*r*c+t*m*c+o*r*h-t*l*h)*R,e[7]=(o*p*a-u*l*a+u*r*c-t*p*c-o*r*g+t*l*g)*R,e[8]=M*R,e[9]=(_*f*a-u*x*a-_*i*g+t*x*g+u*i*h-t*f*h)*R,e[10]=(o*x*a-_*s*a+_*i*c-t*x*c-o*i*h+t*s*h)*R,e[11]=(u*s*a-o*f*a-u*i*c+t*f*c+o*i*g-t*s*g)*R,e[12]=w*R,e[13]=(u*x*r-_*f*r+_*i*p-t*x*p-u*i*m+t*f*m)*R,e[14]=(_*s*r-o*x*r-_*i*l+t*x*l+o*i*m-t*s*m)*R,e[15]=(o*f*r-u*s*r+u*i*l-t*f*l-o*i*p+t*s*p)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,f=s+s,p=a*c,g=a*u,_=a*f,x=o*u,m=o*f,h=s*f,E=l*c,b=l*u,M=l*f,w=i.x,I=i.y,R=i.z;return r[0]=(1-(x+h))*w,r[1]=(g+M)*w,r[2]=(_-b)*w,r[3]=0,r[4]=(g-M)*I,r[5]=(1-(p+h))*I,r[6]=(m+E)*I,r[7]=0,r[8]=(_+b)*R,r[9]=(m-E)*R,r[10]=(1-(p+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Lr.set(r[0],r[1],r[2]).length();const o=Lr.set(r[4],r[5],r[6]).length(),s=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/a,u=1/o,f=1/s;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Ri){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(s===Ri)g=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===Ys)g=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Ri){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-a),p=(t+e)*c,g=(i+r)*u;let _,x;if(s===Ri)_=(o+a)*f,x=-2*f;else if(s===Ys)_=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Lr=new H,Yn=new Vt,Tv=new H(0,0,0),Av=new H(1,1,1),Gi=new H,ds=new H,Rn=new H,$c=new Vt,eu=new br;class ro{constructor(e=0,t=0,i=0,r=ro.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],p=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(mn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ro.DEFAULT_ORDER="XYZ";class uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rv=0;const tu=new H,Dr=new br,xi=new Vt,fs=new H,Ea=new H,Cv=new H,Pv=new br,nu=new H(1,0,0),iu=new H(0,1,0),ru=new H(0,0,1),Lv={type:"added"},Dv={type:"removed"};class ln extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new H,t=new ro,i=new br,r=new H(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ht}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fs.copy(e):fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ea,fs,this.up):xi.lookAt(fs,Ea,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(xi),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,Cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,Pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new H(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new H,bi=new H,No=new H,yi=new H,Ir=new H,Ur=new H,au=new H,Oo=new H,Fo=new H,ko=new H;let hs=!1;class Bn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){qn.subVectors(r,t),bi.subVectors(i,t),No.subVectors(e,t);const o=qn.dot(qn),s=qn.dot(bi),l=qn.dot(No),c=bi.dot(bi),u=bi.dot(No),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const p=1/f,g=(c*l-s*u)*p,_=(o*u-s*l)*p;return a.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yi),yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,t,i,r,a,o,s,l){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,yi),l.setScalar(0),l.addScaledVector(a,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(s,yi.z),l}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),bi.subVectors(e,t),qn.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),qn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;Ir.subVectors(r,i),Ur.subVectors(a,i),Oo.subVectors(e,i);const l=Ir.dot(Oo),c=Ur.dot(Oo);if(l<=0&&c<=0)return t.copy(i);Fo.subVectors(e,r);const u=Ir.dot(Fo),f=Ur.dot(Fo);if(u>=0&&f<=u)return t.copy(r);const p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ir,o);ko.subVectors(e,a);const g=Ir.dot(ko),_=Ur.dot(ko);if(_>=0&&g<=_)return t.copy(a);const x=g*c-l*_;if(x<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(i).addScaledVector(Ur,s);const m=u*_-g*f;if(m<=0&&f-u>=0&&g-_>=0)return au.subVectors(a,r),s=(f-u)/(f-u+(g-_)),t.copy(r).addScaledVector(au,s);const h=1/(m+x+p);return o=x*h,s=p*h,t.copy(i).addScaledVector(Ir,o).addScaledVector(Ur,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Iv=0;class ma extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=$r,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Yd,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Nn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Nn.workingColorSpace){if(e=fv(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Bo(o,a,e+1/3),this.g=Bo(o,a,e),this.b=Bo(o,a,e-1/3)}return Nn.toWorkingColorSpace(this,r),this}setStyle(e,t=Lt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const i=df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Nn.fromWorkingColorSpace(sn.copy(this),e),Math.round(mn(sn.r*255,0,255))*65536+Math.round(mn(sn.g*255,0,255))*256+Math.round(mn(sn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nn.workingColorSpace){Nn.fromWorkingColorSpace(sn.copy(this),t);const i=sn.r,r=sn.g,a=sn.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Nn.workingColorSpace){return Nn.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Lt){Nn.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,r=sn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),Kn.h+=e,Kn.s+=t,Kn.l+=i,this.setHSL(Kn.h,Kn.s,Kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(ps);const i=wo(Kn.h,ps.h,t),r=wo(Kn.s,ps.s,t),a=wo(Kn.l,ps.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new xt;xt.NAMES=df;class ff extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new H,ms=new et;class ni{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hl,this.updateRange={offset:0,count:-1},this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array),a=Mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class hf extends ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pf extends ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Li extends ni{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Uv=0;const In=new Vt,zo=new ln,Nr=new H,Cn=new $a,wa=new $a,$t=new H;class Oi extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?pf:hf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ht().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Cn.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];wa.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(Cn.min,wa.min),Cn.expandByPoint($t),$t.addVectors(Cn.max,wa.max),Cn.expandByPoint($t)):(Cn.expandByPoint(wa.min),Cn.expandByPoint(wa.max))}Cn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)$t.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared($t));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)$t.fromBufferAttribute(s,c),l&&(Nr.fromBufferAttribute(e,c),$t.add(Nr)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<s;A++)c[A]=new H,u[A]=new H;const f=new H,p=new H,g=new H,_=new et,x=new et,m=new et,h=new H,E=new H;function b(A,oe,$){f.fromArray(r,A*3),p.fromArray(r,oe*3),g.fromArray(r,$*3),_.fromArray(o,A*2),x.fromArray(o,oe*2),m.fromArray(o,$*2),p.sub(f),g.sub(f),x.sub(_),m.sub(_);const B=1/(x.x*m.y-m.x*x.y);isFinite(B)&&(h.copy(p).multiplyScalar(m.y).addScaledVector(g,-x.y).multiplyScalar(B),E.copy(g).multiplyScalar(x.x).addScaledVector(p,-m.x).multiplyScalar(B),c[A].add(h),c[oe].add(h),c[$].add(h),u[A].add(E),u[oe].add(E),u[$].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let A=0,oe=M.length;A<oe;++A){const $=M[A],B=$.start,V=$.count;for(let Z=B,k=B+V;Z<k;Z+=3)b(i[Z+0],i[Z+1],i[Z+2])}const w=new H,I=new H,R=new H,O=new H;function S(A){R.fromArray(a,A*3),O.copy(R);const oe=c[A];w.copy(oe),w.sub(R.multiplyScalar(R.dot(oe))).normalize(),I.crossVectors(O,oe);const B=I.dot(u[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=B}for(let A=0,oe=M.length;A<oe;++A){const $=M[A],B=$.start,V=$.count;for(let Z=B,k=B+V;Z<k;Z+=3)S(i[Z+0]),S(i[Z+1]),S(i[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new H,a=new H,o=new H,s=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,p=new c.constructor(l.length*u);let g=0,_=0;for(let x=0,m=l.length;x<m;x++){s.isInterleavedBufferAttribute?g=l[x]*s.data.stride+s.offset:g=l[x]*u;for(let h=0;h<u;h++)p[_++]=c[g++]}return new ni(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const p=c[u],g=e(p,i);l.push(g)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let p=0,g=f.length;p<g;p++)u.push(f[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new Vt,ir=new cf,gs=new Fl,ou=new H,Or=new H,Fr=new H,kr=new H,Go=new H,vs=new H,_s=new et,xs=new et,bs=new et,lu=new H,cu=new H,uu=new H,ys=new H,Ms=new H;class Et extends ln{constructor(e=new Oi,t=new ff){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){vs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(Go.fromBufferAttribute(f,e),o?vs.addScaledVector(Go,u):vs.addScaledVector(Go.sub(t),u))}t.add(vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(a),ir.copy(e.ray).recast(e.near),!(gs.containsPoint(ir.origin)===!1&&(ir.intersectSphere(gs,ou)===null||ir.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(su.copy(a).invert(),ir.copy(e.ray).applyMatrix4(su),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],h=o[m.materialIndex],E=Math.max(m.start,g.start),b=Math.min(s.count,Math.min(m.start+m.count,g.start+g.count));for(let M=E,w=b;M<w;M+=3){const I=s.getX(M),R=s.getX(M+1),O=s.getX(M+2);r=Ss(this,h,e,i,c,u,f,I,R,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(s.count,g.start+g.count);for(let m=_,h=x;m<h;m+=3){const E=s.getX(m),b=s.getX(m+1),M=s.getX(m+2);r=Ss(this,o,e,i,c,u,f,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],h=o[m.materialIndex],E=Math.max(m.start,g.start),b=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=E,w=b;M<w;M+=3){const I=M,R=M+1,O=M+2;r=Ss(this,h,e,i,c,u,f,I,R,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=_,h=x;m<h;m+=3){const E=m,b=m+1,M=m+2;r=Ss(this,o,e,i,c,u,f,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Nv(n,e,t,i,r,a,o,s){let l;if(e.side===Sn?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===pi,s),l===null)return null;Ms.copy(s),Ms.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:n}}function Ss(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,Or),n.getVertexPosition(l,Fr),n.getVertexPosition(c,kr);const u=Nv(n,e,t,i,Or,Fr,kr,ys);if(u){r&&(_s.fromBufferAttribute(r,s),xs.fromBufferAttribute(r,l),bs.fromBufferAttribute(r,c),u.uv=Bn.getInterpolation(ys,Or,Fr,kr,_s,xs,bs,new et)),a&&(_s.fromBufferAttribute(a,s),xs.fromBufferAttribute(a,l),bs.fromBufferAttribute(a,c),u.uv1=Bn.getInterpolation(ys,Or,Fr,kr,_s,xs,bs,new et),u.uv2=u.uv1),o&&(lu.fromBufferAttribute(o,s),cu.fromBufferAttribute(o,l),uu.fromBufferAttribute(o,c),u.normal=Bn.getInterpolation(ys,Or,Fr,kr,lu,cu,uu,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new H,materialIndex:0};Bn.getNormal(Or,Fr,kr,f.normal),u.face=f}return u}class zt extends Oi{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,i,t,e,o,a,0),_("z","y","x",1,-1,i,t,-e,o,a,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(u,3)),this.setAttribute("uv",new Li(f,2));function _(x,m,h,E,b,M,w,I,R,O,S){const A=M/R,oe=w/O,$=M/2,B=w/2,V=I/2,Z=R+1,k=O+1;let j=0,ee=0;const le=new H;for(let _e=0;_e<k;_e++){const W=_e*oe-B;for(let q=0;q<Z;q++){const Te=q*A-$;le[x]=Te*E,le[m]=W*b,le[h]=V,c.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[h]=I>0?1:-1,u.push(le.x,le.y,le.z),f.push(q/R),f.push(1-_e/O),j+=1}}for(let _e=0;_e<O;_e++)for(let W=0;W<R;W++){const q=p+W+Z*_e,Te=p+W+Z*(_e+1),Le=p+(W+1)+Z*(_e+1),Fe=p+(W+1)+Z*_e;l.push(q,Te,Fe),l.push(Te,Le,Fe),ee+=6}s.addGroup(g,ee,S),g+=ee,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ua(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=ua(n[t]);for(const r in i)e[r]=i[r]}return e}function Ov(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mf(n){return n.getRenderTarget()===null?n.outputColorSpace:mi}const gf={clone:ua,merge:pn};var Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=Ov(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vf extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends vf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Br=-90,zr=1;class Bv extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Ln(Br,zr,e,t);r.layers=this.layers,this.add(r);const a=new Ln(Br,zr,e,t);a.layers=this.layers,this.add(a);const o=new Ln(Br,zr,e,t);o.layers=this.layers,this.add(o);const s=new Ln(Br,zr,e,t);s.layers=this.layers,this.add(s);const l=new Ln(Br,zr,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Br,zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class _f extends on{constructor(e,t,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:sa,super(e,t,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zv extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Fa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vr?Lt:_r),this.texture=new _f(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zt(5,5,5),a=new Ui({name:"CubemapFromEquirect",uniforms:ua(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Pi});a.uniforms.tEquirect.value=t;const o=new Et(r,a),s=t.minFilter;return t.minFilter===Ya&&(t.minFilter=kn),new Bv(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const Ho=new H,Gv=new H,Hv=new ht;class Vi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ho.subVectors(i,t).cross(Gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ho),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hv.getNormalMatrix(e),r=this.coplanarPoint(Ho).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Fl,Es=new H;class kl{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,a=new Vi,o=new Vi){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],x=r[10],m=r[11],h=r[12],E=r[13],b=r[14],M=r[15];if(i[0].setComponents(l-a,p-c,m-g,M-h).normalize(),i[1].setComponents(l+a,p+c,m+g,M+h).normalize(),i[2].setComponents(l+o,p+u,m+_,M+E).normalize(),i[3].setComponents(l-o,p-u,m-_,M-E).normalize(),i[4].setComponents(l-s,p-f,m-x,M-b).normalize(),t===Ri)i[5].setComponents(l+s,p+f,m+x,M+b).normalize();else if(t===Ys)i[5].setComponents(s,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Es.x=r.normal.x>0?e.max.x:e.min.x,Es.y=r.normal.y>0?e.max.y:e.min.y,Es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xf(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Vv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,p=c.usage,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,p),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,f){const p=u.array,g=u.updateRange;n.bindBuffer(f,c),g.count===-1?n.bufferSubData(f,0,p):(t?n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(a(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class Bl extends Oi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,p=t/l,g=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const E=h*p-o;for(let b=0;b<c;b++){const M=b*f-a;_.push(M,-E,0),x.push(0,0,1),m.push(b/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<s;E++){const b=E+c*h,M=E+c*(h+1),w=E+1+c*(h+1),I=E+1+c*h;g.push(b,M,I),g.push(M,w,I)}this.setIndex(g),this.setAttribute("position",new Li(_,3)),this.setAttribute("normal",new Li(x,3)),this.setAttribute("uv",new Li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xv=`#ifdef USE_ALPHAHASH
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
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$v=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t_=`#ifdef USE_IRIDESCENCE
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
#endif`,n_=`#ifdef USE_BUMPMAP
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,d_=`#define PI 3.141592653589793
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
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h_=`vec3 transformedNormal = objectNormal;
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
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
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
}`,P_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U_=`uniform bool receiveShadow;
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
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,O_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
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
#endif`,G_=`struct PhysicalMaterial {
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
}`,H_=`
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
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
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,X_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q_=`#if defined( USE_POINTS_UV )
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
#endif`,$_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
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
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
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
#endif`,dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tx=`float getShadowMask() {
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
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
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
}`,qx=`#if DEPTH_PACKING == 3200
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
}`,Kx=`#define DISTANCE
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
}`,Zx=`#define DISTANCE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`uniform float scale;
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#include <common>
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#define LAMBERT
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
}`,rb=`#define LAMBERT
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
}`,ab=`#define MATCAP
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
}`,sb=`#define MATCAP
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
}`,ob=`#define NORMAL
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
}`,lb=`#define NORMAL
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
}`,cb=`#define PHONG
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
}`,ub=`#define PHONG
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
}`,db=`#define STANDARD
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
}`,fb=`#define STANDARD
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
}`,hb=`#define TOON
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
}`,pb=`#define TOON
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
}`,mb=`uniform float size;
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
}`,gb=`uniform vec3 diffuse;
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
}`,vb=`#include <common>
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
}`,_b=`uniform vec3 color;
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
}`,xb=`uniform float rotation;
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
}`,bb=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Wv,alphahash_pars_fragment:Xv,alphamap_fragment:jv,alphamap_pars_fragment:Yv,alphatest_fragment:qv,alphatest_pars_fragment:Kv,aomap_fragment:Zv,aomap_pars_fragment:Jv,begin_vertex:Qv,beginnormal_vertex:$v,bsdfs:e_,iridescence_fragment:t_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:r_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:s_,color_fragment:o_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:u_,common:d_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:h_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:v_,colorspace_fragment:__,colorspace_pars_fragment:x_,envmap_fragment:b_,envmap_common_pars_fragment:y_,envmap_pars_fragment:M_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:N_,envmap_vertex:E_,fog_vertex:w_,fog_pars_vertex:T_,fog_fragment:A_,fog_pars_fragment:R_,gradientmap_pars_fragment:C_,lightmap_fragment:P_,lightmap_pars_fragment:L_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:I_,lights_pars_begin:U_,lights_toon_fragment:O_,lights_toon_pars_fragment:F_,lights_phong_fragment:k_,lights_phong_pars_fragment:B_,lights_physical_fragment:z_,lights_physical_pars_fragment:G_,lights_fragment_begin:H_,lights_fragment_maps:V_,lights_fragment_end:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:q_,map_fragment:K_,map_pars_fragment:Z_,map_particle_fragment:J_,map_particle_pars_fragment:Q_,metalnessmap_fragment:$_,metalnessmap_pars_fragment:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:rx,normal_fragment_begin:ax,normal_fragment_maps:sx,normal_pars_fragment:ox,normal_pars_vertex:lx,normal_vertex:cx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:dx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:hx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:vx,project_vertex:_x,dithering_fragment:xx,dithering_pars_fragment:bx,roughnessmap_fragment:yx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:Ex,shadowmap_vertex:wx,shadowmask_pars_fragment:Tx,skinbase_vertex:Ax,skinning_pars_vertex:Rx,skinning_vertex:Cx,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:Dx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Ux,transmission_fragment:Nx,transmission_pars_fragment:Ox,uv_pars_fragment:Fx,uv_pars_vertex:kx,uv_vertex:Bx,worldpos_vertex:zx,background_vert:Gx,background_frag:Hx,backgroundCube_vert:Vx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:jx,depth_vert:Yx,depth_frag:qx,distanceRGBA_vert:Kx,distanceRGBA_frag:Zx,equirect_vert:Jx,equirect_frag:Qx,linedashed_vert:$x,linedashed_frag:eb,meshbasic_vert:tb,meshbasic_frag:nb,meshlambert_vert:ib,meshlambert_frag:rb,meshmatcap_vert:ab,meshmatcap_frag:sb,meshnormal_vert:ob,meshnormal_frag:lb,meshphong_vert:cb,meshphong_frag:ub,meshphysical_vert:db,meshphysical_frag:fb,meshtoon_vert:hb,meshtoon_frag:pb,points_vert:mb,points_frag:gb,shadow_vert:vb,shadow_frag:_b,sprite_vert:xb,sprite_frag:bb},Ge={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},li={basic:{uniforms:pn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:pn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new xt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:pn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:pn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:pn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new xt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:pn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:pn([Ge.points,Ge.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:pn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:pn([Ge.common,Ge.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:pn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:pn([Ge.sprite,Ge.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:pn([Ge.common,Ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:pn([Ge.lights,Ge.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};li.physical={uniforms:pn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const ws={r:0,b:0,g:0};function yb(n,e,t,i,r,a,o){const s=new xt(0);let l=a===!0?0:1,c,u,f=null,p=0,g=null;function _(m,h){let E=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=(h.backgroundBlurriness>0?t:e).get(b)),b===null?x(s,l):b&&b.isColor&&(x(b,1),E=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===no)?(u===void 0&&(u=new Et(new zt(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:ua(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=b.colorSpace!==Lt,(f!==b||p!==b.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,p=b.version,g=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Et(new Bl(2,2),new Ui({name:"BackgroundMaterial",uniforms:ua(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=b.colorSpace!==Lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||p!==b.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,p=b.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,h){m.getRGB(ws,mf(n)),i.buffers.color.setClear(ws.r,ws.g,ws.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(s,l)},render:_}}function Mb(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let c=l,u=!1;function f(V,Z,k,j,ee){let le=!1;if(o){const _e=x(j,k,Z);c!==_e&&(c=_e,g(c.object)),le=h(V,j,k,ee),le&&E(V,j,k,ee)}else{const _e=Z.wireframe===!0;(c.geometry!==j.id||c.program!==k.id||c.wireframe!==_e)&&(c.geometry=j.id,c.program=k.id,c.wireframe=_e,le=!0)}ee!==null&&t.update(ee,n.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,O(V,Z,k,j),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function p(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function g(V){return i.isWebGL2?n.bindVertexArray(V):a.bindVertexArrayOES(V)}function _(V){return i.isWebGL2?n.deleteVertexArray(V):a.deleteVertexArrayOES(V)}function x(V,Z,k){const j=k.wireframe===!0;let ee=s[V.id];ee===void 0&&(ee={},s[V.id]=ee);let le=ee[Z.id];le===void 0&&(le={},ee[Z.id]=le);let _e=le[j];return _e===void 0&&(_e=m(p()),le[j]=_e),_e}function m(V){const Z=[],k=[],j=[];for(let ee=0;ee<r;ee++)Z[ee]=0,k[ee]=0,j[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:k,attributeDivisors:j,object:V,attributes:{},index:null}}function h(V,Z,k,j){const ee=c.attributes,le=Z.attributes;let _e=0;const W=k.getAttributes();for(const q in W)if(W[q].location>=0){const Le=ee[q];let Fe=le[q];if(Fe===void 0&&(q==="instanceMatrix"&&V.instanceMatrix&&(Fe=V.instanceMatrix),q==="instanceColor"&&V.instanceColor&&(Fe=V.instanceColor)),Le===void 0||Le.attribute!==Fe||Fe&&Le.data!==Fe.data)return!0;_e++}return c.attributesNum!==_e||c.index!==j}function E(V,Z,k,j){const ee={},le=Z.attributes;let _e=0;const W=k.getAttributes();for(const q in W)if(W[q].location>=0){let Le=le[q];Le===void 0&&(q==="instanceMatrix"&&V.instanceMatrix&&(Le=V.instanceMatrix),q==="instanceColor"&&V.instanceColor&&(Le=V.instanceColor));const Fe={};Fe.attribute=Le,Le&&Le.data&&(Fe.data=Le.data),ee[q]=Fe,_e++}c.attributes=ee,c.attributesNum=_e,c.index=j}function b(){const V=c.newAttributes;for(let Z=0,k=V.length;Z<k;Z++)V[Z]=0}function M(V){w(V,0)}function w(V,Z){const k=c.newAttributes,j=c.enabledAttributes,ee=c.attributeDivisors;k[V]=1,j[V]===0&&(n.enableVertexAttribArray(V),j[V]=1),ee[V]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Z),ee[V]=Z)}function I(){const V=c.newAttributes,Z=c.enabledAttributes;for(let k=0,j=Z.length;k<j;k++)Z[k]!==V[k]&&(n.disableVertexAttribArray(k),Z[k]=0)}function R(V,Z,k,j,ee,le,_e){_e===!0?n.vertexAttribIPointer(V,Z,k,ee,le):n.vertexAttribPointer(V,Z,k,j,ee,le)}function O(V,Z,k,j){if(i.isWebGL2===!1&&(V.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const ee=j.attributes,le=k.getAttributes(),_e=Z.defaultAttributeValues;for(const W in le){const q=le[W];if(q.location>=0){let Te=ee[W];if(Te===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(Te=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(Te=V.instanceColor)),Te!==void 0){const Le=Te.normalized,Fe=Te.itemSize,ze=t.get(Te);if(ze===void 0)continue;const Xe=ze.buffer,He=ze.type,Ee=ze.bytesPerElement,Be=i.isWebGL2===!0&&(He===n.INT||He===n.UNSIGNED_INT||Te.gpuType===Zd);if(Te.isInterleavedBufferAttribute){const ue=Te.data,U=ue.stride,be=Te.offset;if(ue.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)w(q.location+ge,ue.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<q.locationSize;ge++)M(q.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ge=0;ge<q.locationSize;ge++)R(q.location+ge,Fe/q.locationSize,He,Le,U*Ee,(be+Fe/q.locationSize*ge)*Ee,Be)}else{if(Te.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)w(q.location+ue,Te.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ue=0;ue<q.locationSize;ue++)M(q.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ue=0;ue<q.locationSize;ue++)R(q.location+ue,Fe/q.locationSize,He,Le,Fe*Ee,Fe/q.locationSize*ue*Ee,Be)}}else if(_e!==void 0){const Le=_e[W];if(Le!==void 0)switch(Le.length){case 2:n.vertexAttrib2fv(q.location,Le);break;case 3:n.vertexAttrib3fv(q.location,Le);break;case 4:n.vertexAttrib4fv(q.location,Le);break;default:n.vertexAttrib1fv(q.location,Le)}}}}I()}function S(){$();for(const V in s){const Z=s[V];for(const k in Z){const j=Z[k];for(const ee in j)_(j[ee].object),delete j[ee];delete Z[k]}delete s[V]}}function A(V){if(s[V.id]===void 0)return;const Z=s[V.id];for(const k in Z){const j=Z[k];for(const ee in j)_(j[ee].object),delete j[ee];delete Z[k]}delete s[V.id]}function oe(V){for(const Z in s){const k=s[Z];if(k[V.id]===void 0)continue;const j=k[V.id];for(const ee in j)_(j[ee].object),delete j[ee];delete k[V.id]}}function $(){B(),u=!0,c!==l&&(c=l,g(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:B,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:oe,initAttributes:b,enableAttribute:M,disableUnusedAttributes:I}}function Sb(n,e,t,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,u){n.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,f){if(f===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,c,u,f),t.update(u,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function Eb(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,M=o||e.has("OES_texture_float"),w=b&&M,I=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:I}}function wb(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new Vi,s=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||a&&!m)a?u(null):c();else{const E=a?0:i,b=E*4;let M=h.clippingState||null;l.value=M,M=u(_,p,b,g);for(let w=0;w!==b;++w)M[w]=t[w];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,p,g,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=g+x*4,E=p.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,M=g;b!==x;++b,M+=4)o.copy(f[b]).applyMatrix4(E,s),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Tb(n){let e=new WeakMap;function t(o,s){return s===js?o.mapping=sa:s===ul&&(o.mapping=oa),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===js||s===ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zv(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class bf extends vf{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yr=4,du=[.125,.215,.35,.446,.526,.582],lr=20,Vo=new bf,fu=new xt;let Wo=null;const sr=(1+Math.sqrt(5))/2,Gr=1/sr,hu=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,sr,Gr),new H(0,sr,-Gr),new H(Gr,0,sr),new H(-Gr,0,sr),new H(sr,Gr,0),new H(-sr,Gr,0)];class pu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wo=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo),e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sa||e.mapping===oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:la,format:Jn,colorSpace:mi,depthBuffer:!1},r=mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ab(a)),this._blurMaterial=Rb(a,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,i,r){const s=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(fu),u.toneMapping=ji,u.autoClear=!1;const g=new ff({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new Et(new zt,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(fu),x=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):E===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const b=this._cubeSize;Ts(r,E*b,h>2?b:0,b,b),u.setRenderTarget(r),x&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sa||e.mapping===oa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hu[(r-1)%hu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Et(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*lr-1),x=a/_,m=isFinite(a)?1+Math.floor(u*x):lr;m>lr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const h=[];let E=0;for(let R=0;R<lr;++R){const O=R/x,S=Math.exp(-O*O/2);h.push(S),R===0?E+=S:R<m&&(E+=2*S)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:b}=this;p.dTheta.value=_,p.mipInt.value=b-i;const M=this._sizeLods[r],w=3*M*(r>b-Yr?r-b+Yr:0),I=4*(this._cubeSize-M);Ts(t,w,I,3*M,2*M),l.setRenderTarget(t),l.render(f,Vo)}}function Ab(n){const e=[],t=[],i=[];let r=n;const a=n-Yr+1+du.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-Yr?l=du[o-n+Yr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,_=6,x=3,m=2,h=1,E=new Float32Array(x*_*g),b=new Float32Array(m*_*g),M=new Float32Array(h*_*g);for(let I=0;I<g;I++){const R=I%3*2/3-1,O=I>2?0:-1,S=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];E.set(S,x*_*I),b.set(p,m*_*I);const A=[I,I,I,I,I,I];M.set(A,h*_*I)}const w=new Oi;w.setAttribute("position",new ni(E,x)),w.setAttribute("uv",new ni(b,m)),w.setAttribute("faceIndex",new ni(M,h)),e.push(w),r>Yr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mu(n,e,t){const i=new Ii(n,e,t);return i.texture.mapping=no,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rb(n,e,t){const i=new Float32Array(lr),r=new H(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function gu(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function vu(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function Cb(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===js||l===ul,u=l===sa||l===oa;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new pu(n)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new pu(n));const p=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Pb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Lb(n,e,t,i){const r={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const x=p.morphAttributes[_];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const x=g[_];for(let m=0,h=x.length;m<h;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,_=f.attributes.position;let x=0;if(g!==null){const E=g.array;x=g.version;for(let b=0,M=E.length;b<M;b+=3){const w=E[b+0],I=E[b+1],R=E[b+2];p.push(w,I,I,R,R,w)}}else if(_!==void 0){const E=_.array;x=_.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const w=b+0,I=b+1,R=b+2;p.push(w,I,I,R,R,w)}}else return;const m=new(af(p)?pf:hf)(p,1);m.version=x;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function u(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Db(n,e,t,i){const r=i.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(a,g,s,p*l),t.update(g,a,1)}function f(p,g,_){if(_===0)return;let x,m;if(r)x=n,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](a,g,s,p*l,_),t.update(g,a,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Ib(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ub(n,e){return n[0]-e[0]}function Nb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ob(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new Dt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let m=a.get(u);if(m===void 0||m.count!==x){let Z=function(){B.dispose(),a.delete(u),u.removeEventListener("dispose",Z)};var g=Z;m!==void 0&&m.texture.dispose();const b=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],O=u.morphAttributes.color||[];let S=0;b===!0&&(S=1),M===!0&&(S=2),w===!0&&(S=3);let A=u.attributes.position.count*S,oe=1;A>e.maxTextureSize&&(oe=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const $=new Float32Array(A*oe*4*x),B=new lf($,A,oe,x);B.type=Ai,B.needsUpdate=!0;const V=S*4;for(let k=0;k<x;k++){const j=I[k],ee=R[k],le=O[k],_e=A*oe*4*k;for(let W=0;W<j.count;W++){const q=W*V;b===!0&&(o.fromBufferAttribute(j,W),$[_e+q+0]=o.x,$[_e+q+1]=o.y,$[_e+q+2]=o.z,$[_e+q+3]=0),M===!0&&(o.fromBufferAttribute(ee,W),$[_e+q+4]=o.x,$[_e+q+5]=o.y,$[_e+q+6]=o.z,$[_e+q+7]=0),w===!0&&(o.fromBufferAttribute(le,W),$[_e+q+8]=o.x,$[_e+q+9]=o.y,$[_e+q+10]=o.z,$[_e+q+11]=le.itemSize===4?o.w:1)}}m={count:x,texture:B,size:new et(A,oe)},a.set(u,m),u.addEventListener("dispose",Z)}let h=0;for(let b=0;b<p.length;b++)h+=p[b];const E=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=p===void 0?0:p.length;let x=i[u.id];if(x===void 0||x.length!==_){x=[];for(let M=0;M<_;M++)x[M]=[M,0];i[u.id]=x}for(let M=0;M<_;M++){const w=x[M];w[0]=M,w[1]=p[M]}x.sort(Nb);for(let M=0;M<8;M++)M<_&&x[M][1]?(s[M][0]=x[M][0],s[M][1]=x[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(Ub);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const w=s[M],I=w[0],R=w[1];I!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+M)!==m[I]&&u.setAttribute("morphTarget"+M,m[I]),h&&u.getAttribute("morphNormal"+M)!==h[I]&&u.setAttribute("morphNormal"+M,h[I]),r[M]=R,E+=R):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),h&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const b=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Fb(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const yf=new on,Mf=new lf,Sf=new Ev,Ef=new _f,_u=[],xu=[],bu=new Float32Array(16),yu=new Float32Array(9),Mu=new Float32Array(4);function ga(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=_u[r];if(a===void 0&&(a=new Float32Array(r),_u[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ao(n,e){let t=xu[e];t===void 0&&(t=new Int32Array(e),xu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function Hb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Mu.set(i),n.uniformMatrix2fv(this.addr,!1,Mu),Jt(t,i)}}function Vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;yu.set(i),n.uniformMatrix3fv(this.addr,!1,yu),Jt(t,i)}}function Wb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),Jt(t,i)}}function Xb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function Kb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function Qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function $b(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||yf,r)}function e0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sf,r)}function t0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ef,r)}function n0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mf,r)}function i0(n){switch(n){case 5126:return kb;case 35664:return Bb;case 35665:return zb;case 35666:return Gb;case 35674:return Hb;case 35675:return Vb;case 35676:return Wb;case 5124:case 35670:return Xb;case 35667:case 35671:return jb;case 35668:case 35672:return Yb;case 35669:case 35673:return qb;case 5125:return Kb;case 36294:return Zb;case 36295:return Jb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}function r0(n,e){n.uniform1fv(this.addr,e)}function a0(n,e){const t=ga(e,this.size,2);n.uniform2fv(this.addr,t)}function s0(n,e){const t=ga(e,this.size,3);n.uniform3fv(this.addr,t)}function o0(n,e){const t=ga(e,this.size,4);n.uniform4fv(this.addr,t)}function l0(n,e){const t=ga(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c0(n,e){const t=ga(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u0(n,e){const t=ga(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function d0(n,e){n.uniform1iv(this.addr,e)}function f0(n,e){n.uniform2iv(this.addr,e)}function h0(n,e){n.uniform3iv(this.addr,e)}function p0(n,e){n.uniform4iv(this.addr,e)}function m0(n,e){n.uniform1uiv(this.addr,e)}function g0(n,e){n.uniform2uiv(this.addr,e)}function v0(n,e){n.uniform3uiv(this.addr,e)}function _0(n,e){n.uniform4uiv(this.addr,e)}function x0(n,e,t){const i=this.cache,r=e.length,a=ao(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||yf,a[o])}function b0(n,e,t){const i=this.cache,r=e.length,a=ao(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sf,a[o])}function y0(n,e,t){const i=this.cache,r=e.length,a=ao(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ef,a[o])}function M0(n,e,t){const i=this.cache,r=e.length,a=ao(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mf,a[o])}function S0(n){switch(n){case 5126:return r0;case 35664:return a0;case 35665:return s0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return h0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return v0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return M0}}class E0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=i0(t.type)}}class w0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=S0(t.type)}}class T0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Su(n,e){n.seq.push(e),n.map[e.id]=e}function A0(n,e,t){const i=n.name,r=i.length;for(Xo.lastIndex=0;;){const a=Xo.exec(i),o=Xo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Su(t,c===void 0?new E0(s,n,e):new w0(s,n,e));break}else{let f=t.map[s];f===void 0&&(f=new T0(s),Su(t,f)),t=f}}}class Os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);A0(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Eu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let R0=0;function C0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function P0(n){switch(n){case mi:return["Linear","( value )"];case Lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function wu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+C0(n.getShaderSource(e),o)}else return r}function L0(n,e){const t=P0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function D0(n,e){let t;switch(e){case Bg:t="Linear";break;case zg:t="Reinhard";break;case Gg:t="OptimizedCineon";break;case Hg:t="ACESFilmic";break;case Vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ia).join(`
`)}function U0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Ia(n){return n!==""}function Tu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Au(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(n){return n.replace(O0,k0)}const F0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function k0(n,e){let t=ct[e];if(t===void 0){const i=F0.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}const B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(n){return n.replace(B0,z0)}function z0(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Cu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function H0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sa:case oa:e="ENVMAP_TYPE_CUBE";break;case no:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===oa&&(e="ENVMAP_MODE_REFRACTION"),e}function W0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qd:e="ENVMAP_BLENDING_MULTIPLY";break;case Fg:e="ENVMAP_BLENDING_MIX";break;case kg:e="ENVMAP_BLENDING_ADD";break}return e}function X0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function j0(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=G0(t),c=H0(t),u=V0(t),f=W0(t),p=X0(t),g=t.isWebGL2?"":I0(t),_=U0(a),x=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ia).join(`
`),m.length>0&&(m+=`
`),h=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ia).join(`
`),h.length>0&&(h+=`
`)):(m=[Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),h=[g,Cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?ct.tonemapping_pars_fragment:"",t.toneMapping!==ji?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,L0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=vl(o),o=Tu(o,t),o=Au(o,t),s=vl(s),s=Tu(s,t),s=Au(s,t),o=Ru(o),s=Ru(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=E+m+o,M=E+h+s,w=Eu(r,r.VERTEX_SHADER,b),I=Eu(r,r.FRAGMENT_SHADER,M);if(r.attachShader(x,w),r.attachShader(x,I),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(x).trim(),A=r.getShaderInfoLog(w).trim(),oe=r.getShaderInfoLog(I).trim();let $=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,w,I);else{const V=wu(r,w,"vertex"),Z=wu(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+V+`
`+Z)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||oe==="")&&(B=!1);B&&(this.diagnostics={runnable:$,programLog:S,vertexShader:{log:A,prefix:m},fragmentShader:{log:oe,prefix:h}})}r.deleteShader(w),r.deleteShader(I);let R;this.getUniforms=function(){return R===void 0&&(R=new Os(r,x)),R};let O;return this.getAttributes=function(){return O===void 0&&(O=N0(r,x)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=I,this}let Y0=0;class q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new K0(e),t.set(e,i)),i}}class K0{constructor(e){this.id=Y0++,this.code=e,this.usedTimes=0}}function Z0(n,e,t,i,r,a,o){const s=new uf,l=new q0,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,A,oe,$,B){const V=$.fog,Z=B.geometry,k=S.isMeshStandardMaterial?$.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),ee=j&&j.mapping===no?j.image.height:null,le=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,W=_e!==void 0?_e.length:0;let q=0;Z.morphAttributes.position!==void 0&&(q=1),Z.morphAttributes.normal!==void 0&&(q=2),Z.morphAttributes.color!==void 0&&(q=3);let Te,Le,Fe,ze;if(le){const fe=li[le];Te=fe.vertexShader,Le=fe.fragmentShader}else Te=S.vertexShader,Le=S.fragmentShader,l.update(S),Fe=l.getVertexShaderID(S),ze=l.getFragmentShaderID(S);const Xe=n.getRenderTarget(),He=B.isInstancedMesh===!0,Ee=!!S.map,Be=!!S.matcap,ue=!!j,U=!!S.aoMap,be=!!S.lightMap,ge=!!S.bumpMap,F=!!S.normalMap,X=!!S.displacementMap,we=!!S.emissiveMap,Pe=!!S.metalnessMap,Ae=!!S.roughnessMap,Ce=S.anisotropy>0,Ve=S.clearcoat>0,je=S.iridescence>0,T=S.sheen>0,v=S.transmission>0,D=Ce&&!!S.anisotropyMap,se=Ve&&!!S.clearcoatMap,pe=Ve&&!!S.clearcoatNormalMap,ae=Ve&&!!S.clearcoatRoughnessMap,Ie=je&&!!S.iridescenceMap,ye=je&&!!S.iridescenceThicknessMap,Y=T&&!!S.sheenColorMap,L=T&&!!S.sheenRoughnessMap,te=!!S.specularMap,Ue=!!S.specularColorMap,Me=!!S.specularIntensityMap,ve=v&&!!S.transmissionMap,We=v&&!!S.thicknessMap,Ye=!!S.gradientMap,N=!!S.alphaMap,Ne=S.alphaTest>0,J=!!S.alphaHash,Se=!!S.extensions,De=!!Z.attributes.uv1,Je=!!Z.attributes.uv2,tt=!!Z.attributes.uv3;let st=ji;return S.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:u,shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:Te,fragmentShader:Le,defines:S.defines,customVertexShaderID:Fe,customFragmentShaderID:ze,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:He,instancingColor:He&&B.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Xe===null?n.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:mi,map:Ee,matcap:Be,envMap:ue,envMapMode:ue&&j.mapping,envMapCubeUVHeight:ee,aoMap:U,lightMap:be,bumpMap:ge,normalMap:F,displacementMap:p&&X,emissiveMap:we,normalMapObjectSpace:F&&S.normalMapType===nv,normalMapTangentSpace:F&&S.normalMapType===rf,metalnessMap:Pe,roughnessMap:Ae,anisotropy:Ce,anisotropyMap:D,clearcoat:Ve,clearcoatMap:se,clearcoatNormalMap:pe,clearcoatRoughnessMap:ae,iridescence:je,iridescenceMap:Ie,iridescenceThicknessMap:ye,sheen:T,sheenColorMap:Y,sheenRoughnessMap:L,specularMap:te,specularColorMap:Ue,specularIntensityMap:Me,transmission:v,transmissionMap:ve,thicknessMap:We,gradientMap:Ye,opaque:S.transparent===!1&&S.blending===$r,alphaMap:N,alphaTest:Ne,alphaHash:J,combine:S.combine,mapUv:Ee&&x(S.map.channel),aoMapUv:U&&x(S.aoMap.channel),lightMapUv:be&&x(S.lightMap.channel),bumpMapUv:ge&&x(S.bumpMap.channel),normalMapUv:F&&x(S.normalMap.channel),displacementMapUv:X&&x(S.displacementMap.channel),emissiveMapUv:we&&x(S.emissiveMap.channel),metalnessMapUv:Pe&&x(S.metalnessMap.channel),roughnessMapUv:Ae&&x(S.roughnessMap.channel),anisotropyMapUv:D&&x(S.anisotropyMap.channel),clearcoatMapUv:se&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:L&&x(S.sheenRoughnessMap.channel),specularMapUv:te&&x(S.specularMap.channel),specularColorMapUv:Ue&&x(S.specularColorMap.channel),specularIntensityMapUv:Me&&x(S.specularIntensityMap.channel),transmissionMapUv:ve&&x(S.transmissionMap.channel),thicknessMapUv:We&&x(S.thicknessMap.channel),alphaMapUv:N&&x(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(F||Ce),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Je,vertexUv3s:tt,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Ee||N),fog:!!V,useFog:S.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&oe.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ee&&S.map.isVideoTexture===!0&&S.map.colorSpace===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zn,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Se&&S.extensions.derivatives===!0,extensionFragDepth:Se&&S.extensions.fragDepth===!0,extensionDrawBuffers:Se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const oe in S.defines)A.push(oe),A.push(S.defines[oe]);return S.isRawShaderMaterial===!1&&(E(A,S),b(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function E(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function b(S,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),S.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function M(S){const A=_[S.type];let oe;if(A){const $=li[A];oe=gf.clone($.uniforms)}else oe=S.uniforms;return oe}function w(S,A){let oe;for(let $=0,B=c.length;$<B;$++){const V=c[$];if(V.cacheKey===A){oe=V,++oe.usedTimes;break}}return oe===void 0&&(oe=new j0(n,A,S,a),c.push(oe)),oe}function I(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:w,releaseProgram:I,releaseShaderCache:R,programs:c,dispose:O}}function J0(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Q0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(f,p,g,_,x,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=g,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function s(f,p,g,_,x,m){const h=o(f,p,g,_,x,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):t.push(h)}function l(f,p,g,_,x,m){const h=o(f,p,g,_,x,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,p){t.length>1&&t.sort(f||Q0),i.length>1&&i.sort(p||Pu),r.length>1&&r.sort(p||Pu)}function u(){for(let f=e,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function $0(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Lu,n.set(i,[o])):r>=a.length?(o=new Lu,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ey(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new xt};break;case"SpotLight":t={position:new H,direction:new H,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function ty(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ny=0;function iy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ry(n,e){const t=new ey,i=ty(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new H);const a=new H,o=new Vt,s=new Vt;function l(u,f){let p=0,g=0,_=0;for(let oe=0;oe<9;oe++)r.probe[oe].set(0,0,0);let x=0,m=0,h=0,E=0,b=0,M=0,w=0,I=0,R=0,O=0;u.sort(iy);const S=f===!0?Math.PI:1;for(let oe=0,$=u.length;oe<$;oe++){const B=u[oe],V=B.color,Z=B.intensity,k=B.distance,j=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=V.r*Z*S,g+=V.g*Z*S,_+=V.b*Z*S;else if(B.isLightProbe)for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(B.sh.coefficients[ee],Z);else if(B.isDirectionalLight){const ee=t.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity*S),B.castShadow){const le=B.shadow,_e=i.get(B);_e.shadowBias=le.bias,_e.shadowNormalBias=le.normalBias,_e.shadowRadius=le.radius,_e.shadowMapSize=le.mapSize,r.directionalShadow[x]=_e,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=B.shadow.matrix,M++}r.directional[x]=ee,x++}else if(B.isSpotLight){const ee=t.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(V).multiplyScalar(Z*S),ee.distance=k,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,r.spot[h]=ee;const le=B.shadow;if(B.map&&(r.spotLightMap[R]=B.map,R++,le.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[h]=le.matrix,B.castShadow){const _e=i.get(B);_e.shadowBias=le.bias,_e.shadowNormalBias=le.normalBias,_e.shadowRadius=le.radius,_e.shadowMapSize=le.mapSize,r.spotShadow[h]=_e,r.spotShadowMap[h]=j,I++}h++}else if(B.isRectAreaLight){const ee=t.get(B);ee.color.copy(V).multiplyScalar(Z),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),r.rectArea[E]=ee,E++}else if(B.isPointLight){const ee=t.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity*S),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const le=B.shadow,_e=i.get(B);_e.shadowBias=le.bias,_e.shadowNormalBias=le.normalBias,_e.shadowRadius=le.radius,_e.shadowMapSize=le.mapSize,_e.shadowCameraNear=le.camera.near,_e.shadowCameraFar=le.camera.far,r.pointShadow[m]=_e,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=B.shadow.matrix,w++}r.point[m]=ee,m++}else if(B.isHemisphereLight){const ee=t.get(B);ee.skyColor.copy(B.color).multiplyScalar(Z*S),ee.groundColor.copy(B.groundColor).multiplyScalar(Z*S),r.hemi[b]=ee,b++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==x||A.pointLength!==m||A.spotLength!==h||A.rectAreaLength!==E||A.hemiLength!==b||A.numDirectionalShadows!==M||A.numPointShadows!==w||A.numSpotShadows!==I||A.numSpotMaps!==R)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=E,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=I+R-O,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=O,A.directionalLength=x,A.pointLength=m,A.spotLength=h,A.rectAreaLength=E,A.hemiLength=b,A.numDirectionalShadows=M,A.numPointShadows=w,A.numSpotShadows=I,A.numSpotMaps=R,r.version=ny++)}function c(u,f){let p=0,g=0,_=0,x=0,m=0;const h=f.matrixWorldInverse;for(let E=0,b=u.length;E<b;E++){const M=u[E];if(M.isDirectionalLight){const w=r.directional[p];w.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),p++}else if(M.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),_++}else if(M.isRectAreaLight){const w=r.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(h),s.identity(),o.copy(M.matrixWorld),o.premultiply(h),s.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),x++}else if(M.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(h),g++}else if(M.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Du(n,e){const t=new ry(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function ay(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Du(n,e),t.set(a,[l])):o>=s.length?(l=new Du(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class sy extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oy extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
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
}`;function uy(n,e,t){let i=new kl;const r=new et,a=new et,o=new Dt,s=new sy({depthPacking:tv}),l=new oy,c={},u=t.maxTextureSize,f={[pi]:Sn,[Sn]:pi,[zn]:zn},p=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Oi;_.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Et(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xd;let h=this.type;this.render=function(w,I,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const O=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(Pi),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const $=h!==Mi&&this.type===Mi,B=h===Mi&&this.type!==Mi;for(let V=0,Z=w.length;V<Z;V++){const k=w[V],j=k.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ee=j.getFrameExtents();if(r.multiply(ee),a.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ee.x),r.x=a.x*ee.x,j.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ee.y),r.y=a.y*ee.y,j.mapSize.y=a.y)),j.map===null||$===!0||B===!0){const _e=this.type!==Mi?{minFilter:Nt,magFilter:Nt}:{};j.map!==null&&j.map.dispose(),j.map=new Ii(r.x,r.y,_e),j.map.texture.name=k.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const le=j.getViewportCount();for(let _e=0;_e<le;_e++){const W=j.getViewport(_e);o.set(a.x*W.x,a.y*W.y,a.x*W.z,a.y*W.w),oe.viewport(o),j.updateMatrices(k,_e),i=j.getFrustum(),M(I,R,j.camera,k,this.type)}j.isPointLightShadow!==!0&&this.type===Mi&&E(j,R),j.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(O,S,A)};function E(w,I){const R=e.update(x);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ii(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,R,p,x,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,R,g,x,null)}function b(w,I,R,O){let S=null;const A=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)S=A;else if(S=R.isPointLight===!0?l:s,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const oe=S.uuid,$=I.uuid;let B=c[oe];B===void 0&&(B={},c[oe]=B);let V=B[$];V===void 0&&(V=S.clone(),B[$]=V),S=V}if(S.visible=I.visible,S.wireframe=I.wireframe,O===Mi?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:f[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const oe=n.properties.get(S);oe.light=R}return S}function M(w,I,R,O,S){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Mi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const $=e.update(w),B=w.material;if(Array.isArray(B)){const V=$.groups;for(let Z=0,k=V.length;Z<k;Z++){const j=V[Z],ee=B[j.materialIndex];if(ee&&ee.visible){const le=b(w,ee,O,S);n.renderBufferDirect(R,null,$,le,w,j)}}}else if(B.visible){const V=b(w,B,O,S);n.renderBufferDirect(R,null,$,V,w,null)}}const oe=w.children;for(let $=0,B=oe.length;$<B;$++)M(oe[$],I,R,O,S)}}function dy(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const Ne=new Dt;let J=null;const Se=new Dt(0,0,0,0);return{setMask:function(De){J!==De&&!N&&(n.colorMask(De,De,De,De),J=De)},setLocked:function(De){N=De},setClear:function(De,Je,tt,st,yt){yt===!0&&(De*=st,Je*=st,tt*=st),Ne.set(De,Je,tt,st),Se.equals(Ne)===!1&&(n.clearColor(De,Je,tt,st),Se.copy(Ne))},reset:function(){N=!1,J=null,Se.set(-1,0,0,0)}}}function a(){let N=!1,Ne=null,J=null,Se=null;return{setTest:function(De){De?Xe(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(De){Ne!==De&&!N&&(n.depthMask(De),Ne=De)},setFunc:function(De){if(J!==De){switch(De){case Pg:n.depthFunc(n.NEVER);break;case Lg:n.depthFunc(n.ALWAYS);break;case Dg:n.depthFunc(n.LESS);break;case cl:n.depthFunc(n.LEQUAL);break;case Ig:n.depthFunc(n.EQUAL);break;case Ug:n.depthFunc(n.GEQUAL);break;case Ng:n.depthFunc(n.GREATER);break;case Og:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=De}},setLocked:function(De){N=De},setClear:function(De){Se!==De&&(n.clearDepth(De),Se=De)},reset:function(){N=!1,Ne=null,J=null,Se=null}}}function o(){let N=!1,Ne=null,J=null,Se=null,De=null,Je=null,tt=null,st=null,yt=null;return{setTest:function(fe){N||(fe?Xe(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(fe){Ne!==fe&&!N&&(n.stencilMask(fe),Ne=fe)},setFunc:function(fe,ke,Qe){(J!==fe||Se!==ke||De!==Qe)&&(n.stencilFunc(fe,ke,Qe),J=fe,Se=ke,De=Qe)},setOp:function(fe,ke,Qe){(Je!==fe||tt!==ke||st!==Qe)&&(n.stencilOp(fe,ke,Qe),Je=fe,tt=ke,st=Qe)},setLocked:function(fe){N=fe},setClear:function(fe){yt!==fe&&(n.clearStencil(fe),yt=fe)},reset:function(){N=!1,Ne=null,J=null,Se=null,De=null,Je=null,tt=null,st=null,yt=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let p={},g={},_=new WeakMap,x=[],m=null,h=!1,E=null,b=null,M=null,w=null,I=null,R=null,O=null,S=!1,A=null,oe=null,$=null,B=null,V=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=j>=1):ee.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=j>=2);let le=null,_e={};const W=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),Te=new Dt().fromArray(W),Le=new Dt().fromArray(q);function Fe(N,Ne,J,Se){const De=new Uint8Array(4),Je=n.createTexture();n.bindTexture(N,Je),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<J;tt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ne,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ne+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Je}const ze={};ze[n.TEXTURE_2D]=Fe(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ze[n.TEXTURE_2D_ARRAY]=Fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Xe(n.DEPTH_TEST),l.setFunc(cl),X(!1),we(vc),Xe(n.CULL_FACE),ge(Pi);function Xe(N){p[N]!==!0&&(n.enable(N),p[N]=!0)}function He(N){p[N]!==!1&&(n.disable(N),p[N]=!1)}function Ee(N,Ne){return g[N]!==Ne?(n.bindFramebuffer(N,Ne),g[N]=Ne,i&&(N===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ne),N===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ne)),!0):!1}function Be(N,Ne){let J=x,Se=!1;if(N)if(J=_.get(Ne),J===void 0&&(J=[],_.set(Ne,J)),N.isWebGLMultipleRenderTargets){const De=N.texture;if(J.length!==De.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,tt=De.length;Je<tt;Je++)J[Je]=n.COLOR_ATTACHMENT0+Je;J.length=De.length,Se=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,Se=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function ue(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const U={[jr]:n.FUNC_ADD,[xg]:n.FUNC_SUBTRACT,[bg]:n.FUNC_REVERSE_SUBTRACT};if(i)U[yc]=n.MIN,U[Mc]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(U[yc]=N.MIN_EXT,U[Mc]=N.MAX_EXT)}const be={[yg]:n.ZERO,[Mg]:n.ONE,[Sg]:n.SRC_COLOR,[jd]:n.SRC_ALPHA,[Cg]:n.SRC_ALPHA_SATURATE,[Ag]:n.DST_COLOR,[wg]:n.DST_ALPHA,[Eg]:n.ONE_MINUS_SRC_COLOR,[Yd]:n.ONE_MINUS_SRC_ALPHA,[Rg]:n.ONE_MINUS_DST_COLOR,[Tg]:n.ONE_MINUS_DST_ALPHA};function ge(N,Ne,J,Se,De,Je,tt,st){if(N===Pi){h===!0&&(He(n.BLEND),h=!1);return}if(h===!1&&(Xe(n.BLEND),h=!0),N!==_g){if(N!==E||st!==S){if((b!==jr||I!==jr)&&(n.blendEquation(n.FUNC_ADD),b=jr,I=jr),st)switch(N){case $r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case $r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,w=null,R=null,O=null,E=N,S=st}return}De=De||Ne,Je=Je||J,tt=tt||Se,(Ne!==b||De!==I)&&(n.blendEquationSeparate(U[Ne],U[De]),b=Ne,I=De),(J!==M||Se!==w||Je!==R||tt!==O)&&(n.blendFuncSeparate(be[J],be[Se],be[Je],be[tt]),M=J,w=Se,R=Je,O=tt),E=N,S=!1}function F(N,Ne){N.side===zn?He(n.CULL_FACE):Xe(n.CULL_FACE);let J=N.side===Sn;Ne&&(J=!J),X(J),N.blending===$r&&N.transparent===!1?ge(Pi):ge(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),s.setMask(N.colorWrite);const Se=N.stencilWrite;c.setTest(Se),Se&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Xe(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(N){A!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),A=N)}function we(N){N!==mg?(Xe(n.CULL_FACE),N!==oe&&(N===vc?n.cullFace(n.BACK):N===gg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),oe=N}function Pe(N){N!==$&&(k&&n.lineWidth(N),$=N)}function Ae(N,Ne,J){N?(Xe(n.POLYGON_OFFSET_FILL),(B!==Ne||V!==J)&&(n.polygonOffset(Ne,J),B=Ne,V=J)):He(n.POLYGON_OFFSET_FILL)}function Ce(N){N?Xe(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=n.TEXTURE0+Z-1),le!==N&&(n.activeTexture(N),le=N)}function je(N,Ne,J){J===void 0&&(le===null?J=n.TEXTURE0+Z-1:J=le);let Se=_e[J];Se===void 0&&(Se={type:void 0,texture:void 0},_e[J]=Se),(Se.type!==N||Se.texture!==Ne)&&(le!==J&&(n.activeTexture(J),le=J),n.bindTexture(N,Ne||ze[N]),Se.type=N,Se.texture=Ne)}function T(){const N=_e[le];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){Te.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Te.copy(N))}function Me(N){Le.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Le.copy(N))}function ve(N,Ne){let J=f.get(Ne);J===void 0&&(J=new WeakMap,f.set(Ne,J));let Se=J.get(N);Se===void 0&&(Se=n.getUniformBlockIndex(Ne,N.name),J.set(N,Se))}function We(N,Ne){const Se=f.get(Ne).get(N);u.get(Ne)!==Se&&(n.uniformBlockBinding(Ne,Se,N.__bindingPointIndex),u.set(Ne,Se))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},le=null,_e={},g={},_=new WeakMap,x=[],m=null,h=!1,E=null,b=null,M=null,w=null,I=null,R=null,O=null,S=!1,A=null,oe=null,$=null,B=null,V=null,Te.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Xe,disable:He,bindFramebuffer:Ee,drawBuffers:Be,useProgram:ue,setBlending:ge,setMaterial:F,setFlipSided:X,setCullFace:we,setLineWidth:Pe,setPolygonOffset:Ae,setScissorTest:Ce,activeTexture:Ve,bindTexture:je,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:D,texImage2D:L,texImage3D:te,updateUBOMapping:ve,uniformBlockBinding:We,texStorage2D:ye,texStorage3D:Y,texSubImage2D:se,texSubImage3D:pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ie,scissor:Ue,viewport:Me,reset:Ye}}function fy(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,v){return h?new OffscreenCanvas(T,v):qs("canvas")}function b(T,v,D,se){let pe=1;if((T.width>se||T.height>se)&&(pe=se/Math.max(T.width,T.height)),pe<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ae=v?gl:Math.floor,Ie=ae(pe*T.width),ye=ae(pe*T.height);x===void 0&&(x=E(Ie,ye));const Y=D?E(Ie,ye):x;return Y.width=Ie,Y.height=ye,Y.getContext("2d").drawImage(T,0,0,Ie,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ie+"x"+ye+")."),Y}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return Zc(T.width)&&Zc(T.height)}function w(T){return s?!1:T.wrapS!==Zn||T.wrapT!==Zn||T.minFilter!==Nt&&T.minFilter!==kn}function I(T,v){return T.generateMipmaps&&v&&T.minFilter!==Nt&&T.minFilter!==kn}function R(T){n.generateMipmap(T)}function O(T,v,D,se,pe=!1){if(s===!1)return v;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=v;return v===n.RED&&(D===n.FLOAT&&(ae=n.R32F),D===n.HALF_FLOAT&&(ae=n.R16F),D===n.UNSIGNED_BYTE&&(ae=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(ae=n.R8UI),D===n.UNSIGNED_SHORT&&(ae=n.R16UI),D===n.UNSIGNED_INT&&(ae=n.R32UI),D===n.BYTE&&(ae=n.R8I),D===n.SHORT&&(ae=n.R16I),D===n.INT&&(ae=n.R32I)),v===n.RG&&(D===n.FLOAT&&(ae=n.RG32F),D===n.HALF_FLOAT&&(ae=n.RG16F),D===n.UNSIGNED_BYTE&&(ae=n.RG8)),v===n.RGBA&&(D===n.FLOAT&&(ae=n.RGBA32F),D===n.HALF_FLOAT&&(ae=n.RGBA16F),D===n.UNSIGNED_BYTE&&(ae=se===Lt&&pe===!1?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)),(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function S(T,v,D){return I(T,D)===!0||T.isFramebufferTexture&&T.minFilter!==Nt&&T.minFilter!==kn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){return T===Nt||T===Sc||T===_o?n.NEAREST:n.LINEAR}function oe(T){const v=T.target;v.removeEventListener("dispose",oe),B(v),v.isVideoTexture&&_.delete(v)}function $(T){const v=T.target;v.removeEventListener("dispose",$),Z(v)}function B(T){const v=i.get(T);if(v.__webglInit===void 0)return;const D=T.source,se=m.get(D);if(se){const pe=se[v.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&V(T),Object.keys(se).length===0&&m.delete(D)}i.remove(T)}function V(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const D=T.source,se=m.get(D);delete se[v.__cacheKey],o.memory.textures--}function Z(T){const v=T.texture,D=i.get(T),se=i.get(v);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(D.__webglFramebuffer[pe]))for(let ae=0;ae<D.__webglFramebuffer[pe].length;ae++)n.deleteFramebuffer(D.__webglFramebuffer[pe][ae]);else n.deleteFramebuffer(D.__webglFramebuffer[pe]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[pe])}else{if(Array.isArray(D.__webglFramebuffer))for(let pe=0;pe<D.__webglFramebuffer.length;pe++)n.deleteFramebuffer(D.__webglFramebuffer[pe]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let pe=0;pe<D.__webglColorRenderbuffer.length;pe++)D.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[pe]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let pe=0,ae=v.length;pe<ae;pe++){const Ie=i.get(v[pe]);Ie.__webglTexture&&(n.deleteTexture(Ie.__webglTexture),o.memory.textures--),i.remove(v[pe])}i.remove(v),i.remove(T)}let k=0;function j(){k=0}function ee(){const T=k;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),k+=1,T}function le(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function _e(T,v){const D=i.get(T);if(T.isVideoTexture&&Ve(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const se=T.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(D,T,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function W(T,v){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Ee(D,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function q(T,v){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Ee(D,T,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function Te(T,v){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Be(D,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const Le={[dl]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},Fe={[Nt]:n.NEAREST,[Sc]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[Wg]:n.LINEAR_MIPMAP_NEAREST,[Ya]:n.LINEAR_MIPMAP_LINEAR},ze={[rv]:n.NEVER,[dv]:n.ALWAYS,[av]:n.LESS,[ov]:n.LEQUAL,[sv]:n.EQUAL,[uv]:n.GEQUAL,[lv]:n.GREATER,[cv]:n.NOTEQUAL};function Xe(T,v,D){if(D?(n.texParameteri(T,n.TEXTURE_WRAP_S,Le[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Le[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Le[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Fe[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Fe[v.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Zn||v.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Nt&&v.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Nt||v.minFilter!==_o&&v.minFilter!==Ya||v.type===Ai&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===la&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(T,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function He(T,v){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",oe));const se=v.source;let pe=m.get(se);pe===void 0&&(pe={},m.set(se,pe));const ae=le(v);if(ae!==T.__cacheKey){pe[ae]===void 0&&(pe[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),pe[ae].usedTimes++;const Ie=pe[T.__cacheKey];Ie!==void 0&&(pe[T.__cacheKey].usedTimes--,Ie.usedTimes===0&&V(v)),T.__cacheKey=ae,T.__webglTexture=pe[ae].texture}return D}function Ee(T,v,D){let se=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=n.TEXTURE_3D);const pe=He(T,v),ae=v.source;t.bindTexture(se,T.__webglTexture,n.TEXTURE0+D);const Ie=i.get(ae);if(ae.version!==Ie.__version||pe===!0){t.activeTexture(n.TEXTURE0+D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ye=w(v)&&M(v.image)===!1;let Y=b(v.image,ye,!1,u);Y=je(v,Y);const L=M(Y)||s,te=a.convert(v.format,v.colorSpace);let Ue=a.convert(v.type),Me=O(v.internalFormat,te,Ue,v.colorSpace,v.isVideoTexture);Xe(se,v,L);let ve;const We=v.mipmaps,Ye=s&&v.isVideoTexture!==!0,N=Ie.__version===void 0||pe===!0,Ne=S(v,Y,L);if(v.isDepthTexture)Me=n.DEPTH_COMPONENT,s?v.type===Ai?Me=n.DEPTH_COMPONENT32F:v.type===Wi?Me=n.DEPTH_COMPONENT24:v.type===mr?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:v.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===gr&&Me===n.DEPTH_COMPONENT&&v.type!==Ol&&v.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Wi,Ue=a.convert(v.type)),v.format===ca&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,v.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=mr,Ue=a.convert(v.type))),N&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Me,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,Me,Y.width,Y.height,0,te,Ue,null));else if(v.isDataTexture)if(We.length>0&&L){Ye&&N&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,We[0].width,We[0].height);for(let J=0,Se=We.length;J<Se;J++)ve=We[J],Ye?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ve.width,ve.height,te,Ue,ve.data):t.texImage2D(n.TEXTURE_2D,J,Me,ve.width,ve.height,0,te,Ue,ve.data);v.generateMipmaps=!1}else Ye?(N&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,te,Ue,Y.data)):t.texImage2D(n.TEXTURE_2D,0,Me,Y.width,Y.height,0,te,Ue,Y.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Me,We[0].width,We[0].height,Y.depth);for(let J=0,Se=We.length;J<Se;J++)ve=We[J],v.format!==Jn?te!==null?Ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ve.width,ve.height,Y.depth,te,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Me,ve.width,ve.height,Y.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ve.width,ve.height,Y.depth,te,Ue,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Me,ve.width,ve.height,Y.depth,0,te,Ue,ve.data)}else{Ye&&N&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,We[0].width,We[0].height);for(let J=0,Se=We.length;J<Se;J++)ve=We[J],v.format!==Jn?te!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ve.width,ve.height,te,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(n.TEXTURE_2D,J,0,0,ve.width,ve.height,te,Ue,ve.data):t.texImage2D(n.TEXTURE_2D,J,Me,ve.width,ve.height,0,te,Ue,ve.data)}else if(v.isDataArrayTexture)Ye?(N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Me,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,te,Ue,Y.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,Y.width,Y.height,Y.depth,0,te,Ue,Y.data);else if(v.isData3DTexture)Ye?(N&&t.texStorage3D(n.TEXTURE_3D,Ne,Me,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,te,Ue,Y.data)):t.texImage3D(n.TEXTURE_3D,0,Me,Y.width,Y.height,Y.depth,0,te,Ue,Y.data);else if(v.isFramebufferTexture){if(N)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ne,Me,Y.width,Y.height);else{let J=Y.width,Se=Y.height;for(let De=0;De<Ne;De++)t.texImage2D(n.TEXTURE_2D,De,Me,J,Se,0,te,Ue,null),J>>=1,Se>>=1}}else if(We.length>0&&L){Ye&&N&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,We[0].width,We[0].height);for(let J=0,Se=We.length;J<Se;J++)ve=We[J],Ye?t.texSubImage2D(n.TEXTURE_2D,J,0,0,te,Ue,ve):t.texImage2D(n.TEXTURE_2D,J,Me,te,Ue,ve);v.generateMipmaps=!1}else Ye?(N&&t.texStorage2D(n.TEXTURE_2D,Ne,Me,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,Ue,Y)):t.texImage2D(n.TEXTURE_2D,0,Me,te,Ue,Y);I(v,L)&&R(se),Ie.__version=ae.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Be(T,v,D){if(v.image.length!==6)return;const se=He(T,v),pe=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const ae=i.get(pe);if(pe.version!==ae.__version||se===!0){t.activeTexture(n.TEXTURE0+D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,ye=v.image[0]&&v.image[0].isDataTexture,Y=[];for(let J=0;J<6;J++)!Ie&&!ye?Y[J]=b(v.image[J],!1,!0,c):Y[J]=ye?v.image[J].image:v.image[J],Y[J]=je(v,Y[J]);const L=Y[0],te=M(L)||s,Ue=a.convert(v.format,v.colorSpace),Me=a.convert(v.type),ve=O(v.internalFormat,Ue,Me,v.colorSpace),We=s&&v.isVideoTexture!==!0,Ye=ae.__version===void 0||se===!0;let N=S(v,L,te);Xe(n.TEXTURE_CUBE_MAP,v,te);let Ne;if(Ie){We&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,N,ve,L.width,L.height);for(let J=0;J<6;J++){Ne=Y[J].mipmaps;for(let Se=0;Se<Ne.length;Se++){const De=Ne[Se];v.format!==Jn?Ue!==null?We?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,De.width,De.height,Ue,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,ve,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,0,0,De.width,De.height,Ue,Me,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se,ve,De.width,De.height,0,Ue,Me,De.data)}}}else{Ne=v.mipmaps,We&&Ye&&(Ne.length>0&&N++,t.texStorage2D(n.TEXTURE_CUBE_MAP,N,ve,Y[0].width,Y[0].height));for(let J=0;J<6;J++)if(ye){We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Y[J].width,Y[J].height,Ue,Me,Y[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ve,Y[J].width,Y[J].height,0,Ue,Me,Y[J].data);for(let Se=0;Se<Ne.length;Se++){const Je=Ne[Se].image[J].image;We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,Je.width,Je.height,Ue,Me,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,ve,Je.width,Je.height,0,Ue,Me,Je.data)}}else{We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,Me,Y[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ve,Ue,Me,Y[J]);for(let Se=0;Se<Ne.length;Se++){const De=Ne[Se];We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,0,0,Ue,Me,De.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Se+1,ve,Ue,Me,De.image[J])}}}I(v,te)&&R(n.TEXTURE_CUBE_MAP),ae.__version=pe.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ue(T,v,D,se,pe,ae){const Ie=a.convert(D.format,D.colorSpace),ye=a.convert(D.type),Y=O(D.internalFormat,Ie,ye,D.colorSpace);if(!i.get(v).__hasExternalTextures){const te=Math.max(1,v.width>>ae),Ue=Math.max(1,v.height>>ae);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ae,Y,te,Ue,v.depth,0,Ie,ye,null):t.texImage2D(pe,ae,Y,te,Ue,0,Ie,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ce(v)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,pe,i.get(D).__webglTexture,0,Ae(v)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,pe,i.get(D).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(T,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let se=n.DEPTH_COMPONENT16;if(D||Ce(v)){const pe=v.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Ai?se=n.DEPTH_COMPONENT32F:pe.type===Wi&&(se=n.DEPTH_COMPONENT24));const ae=Ae(v);Ce(v)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,se,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,se,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){const se=Ae(v);D&&Ce(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,v.width,v.height):Ce(v)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const se=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let pe=0;pe<se.length;pe++){const ae=se[pe],Ie=a.convert(ae.format,ae.colorSpace),ye=a.convert(ae.type),Y=O(ae.internalFormat,Ie,ye,ae.colorSpace),L=Ae(v);D&&Ce(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,Y,v.width,v.height):Ce(v)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,Y,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Y,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),_e(v.depthTexture,0);const se=i.get(v.depthTexture).__webglTexture,pe=Ae(v);if(v.depthTexture.format===gr)Ce(v)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(v.depthTexture.format===ca)Ce(v)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ge(T){const v=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,T)}else if(D){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]=n.createRenderbuffer(),U(v.__webglDepthbuffer[se],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),U(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(T,v,D){const se=i.get(T);v!==void 0&&ue(se.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&ge(T)}function X(T){const v=T.texture,D=i.get(T),se=i.get(v);T.addEventListener("dispose",$),T.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=v.version,o.memory.textures++);const pe=T.isWebGLCubeRenderTarget===!0,ae=T.isWebGLMultipleRenderTargets===!0,Ie=M(T)||s;if(pe){D.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(s&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[ye]=[];for(let Y=0;Y<v.mipmaps.length;Y++)D.__webglFramebuffer[ye][Y]=n.createFramebuffer()}else D.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let ye=0;ye<v.mipmaps.length;ye++)D.__webglFramebuffer[ye]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ae)if(r.drawBuffers){const ye=T.texture;for(let Y=0,L=ye.length;Y<L;Y++){const te=i.get(ye[Y]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&T.samples>0&&Ce(T)===!1){const ye=ae?v:[v];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Y=0;Y<ye.length;Y++){const L=ye[Y];D.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[Y]);const te=a.convert(L.format,L.colorSpace),Ue=a.convert(L.type),Me=O(L.internalFormat,te,Ue,L.colorSpace,T.isXRRenderTarget===!0),ve=Ae(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Me,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,D.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),U(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,v,Ie);for(let ye=0;ye<6;ye++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let Y=0;Y<v.mipmaps.length;Y++)ue(D.__webglFramebuffer[ye][Y],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Y);else ue(D.__webglFramebuffer[ye],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);I(v,Ie)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const ye=T.texture;for(let Y=0,L=ye.length;Y<L;Y++){const te=ye[Y],Ue=i.get(te);t.bindTexture(n.TEXTURE_2D,Ue.__webglTexture),Xe(n.TEXTURE_2D,te,Ie),ue(D.__webglFramebuffer,T,te,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,0),I(te,Ie)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(s?ye=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,se.__webglTexture),Xe(ye,v,Ie),s&&v.mipmaps&&v.mipmaps.length>0)for(let Y=0;Y<v.mipmaps.length;Y++)ue(D.__webglFramebuffer[Y],T,v,n.COLOR_ATTACHMENT0,ye,Y);else ue(D.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,ye,0);I(v,Ie)&&R(ye),t.unbindTexture()}T.depthBuffer&&ge(T)}function we(T){const v=M(T)||s,D=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let se=0,pe=D.length;se<pe;se++){const ae=D[se];if(I(ae,v)){const Ie=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(ae).__webglTexture;t.bindTexture(Ie,ye),R(Ie),t.unbindTexture()}}}function Pe(T){if(s&&T.samples>0&&Ce(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],D=T.width,se=T.height;let pe=n.COLOR_BUFFER_BIT;const ae=[],Ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(T),Y=T.isWebGLMultipleRenderTargets===!0;if(Y)for(let L=0;L<v.length;L++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let L=0;L<v.length;L++){ae.push(n.COLOR_ATTACHMENT0+L),T.depthBuffer&&ae.push(Ie);const te=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(te===!1&&(T.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),Y&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[L]),te===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ie]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ie])),Y){const Ue=i.get(v[L]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,D,se,0,0,D,se,pe,n.NEAREST),g&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let L=0;L<v.length;L++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,ye.__webglColorRenderbuffer[L]);const te=i.get(v[L]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Ae(T){return Math.min(f,T.samples)}function Ce(T){const v=i.get(T);return s&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ve(T){const v=o.render.frame;_.get(T)!==v&&(_.set(T,v),T.update())}function je(T,v){const D=T.colorSpace,se=T.format,pe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===pl||D!==mi&&D!==_r&&(D===Lt||D===io?s===!1?e.has("EXT_sRGB")===!0&&se===Jn?(T.format=pl,T.minFilter=kn,T.generateMipmaps=!1):v=sf.sRGBToLinear(v):(se!==Jn||pe!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}this.allocateTextureUnit=ee,this.resetTextureUnits=j,this.setTexture2D=_e,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=Te,this.rebindTextures=F,this.setupRenderTarget=X,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ce}const hy=0,Yt=1;function py(n,e,t){const i=t.isWebGL2;function r(a,o=_r){let s;const l=o===Lt||o===io?Yt:hy;if(a===Yi)return n.UNSIGNED_BYTE;if(a===Jd)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Qd)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Xg)return n.BYTE;if(a===jg)return n.SHORT;if(a===Ol)return n.UNSIGNED_SHORT;if(a===Zd)return n.INT;if(a===Wi)return n.UNSIGNED_INT;if(a===Ai)return n.FLOAT;if(a===la)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Yg)return n.ALPHA;if(a===Jn)return n.RGBA;if(a===qg)return n.LUMINANCE;if(a===Kg)return n.LUMINANCE_ALPHA;if(a===gr)return n.DEPTH_COMPONENT;if(a===ca)return n.DEPTH_STENCIL;if(a===pl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Zg)return n.RED;if(a===$d)return n.RED_INTEGER;if(a===Jg)return n.RG;if(a===ef)return n.RG_INTEGER;if(a===tf)return n.RGBA_INTEGER;if(a===xo||a===bo||a===yo||a===Mo)if(l===Yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ec||a===wc||a===Tc||a===Ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Qg)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Rc||a===Cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Rc)return l===Yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Cc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Pc||a===Lc||a===Dc||a===Ic||a===Uc||a===Nc||a===Oc||a===Fc||a===kc||a===Bc||a===zc||a===Gc||a===Hc||a===Vc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Pc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Lc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Dc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ic)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Uc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Nc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Oc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Fc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===kc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Bc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===zc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Gc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Hc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===So||a===Wc||a===Xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===So)return l===Yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===$g||a===jc||a===Yc||a===qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===So)return s.COMPRESSED_RED_RGTC1_EXT;if(a===jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===mr?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class my extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gy={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&p>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(gy)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wf extends on{constructor(e,t,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:gr,u!==gr&&u!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gr&&(i=Wi),i===void 0&&u===ca&&(i=mr),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vy extends yr{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,p=null,g=null,_=null;const x=t.getContextAttributes();let m=null,h=null;const E=[],b=[],M=new Ln;M.layers.enable(1),M.viewport=new Dt;const w=new Ln;w.layers.enable(2),w.viewport=new Dt;const I=[M,w],R=new my;R.layers.enable(1),R.layers.enable(2);let O=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=E[W];return q===void 0&&(q=new jo,E[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=E[W];return q===void 0&&(q=new jo,E[W]=q),q.getGripSpace()},this.getHand=function(W){let q=E[W];return q===void 0&&(q=new jo,E[W]=q),q.getHandSpace()};function A(W){const q=b.indexOf(W.inputSource);if(q===-1)return;const Te=E[q];Te!==void 0&&(Te.update(W.inputSource,W.frame,c||o),Te.dispatchEvent({type:W.type,data:W.inputSource}))}function oe(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",$);for(let W=0;W<E.length;W++){const q=b[W];q!==null&&(b[W]=null,E[W].disconnect(q))}O=null,S=null,e.setRenderTarget(m),g=null,p=null,f=null,r=null,h=null,_e.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:g}),h=new Ii(g.framebufferWidth,g.framebufferHeight,{format:Jn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let q=null,Te=null,Le=null;x.depth&&(Le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=x.stencil?ca:gr,Te=x.stencil?mr:Wi);const Fe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(Fe),r.updateRenderState({layers:[p]}),h=new Ii(p.textureWidth,p.textureHeight,{format:Jn,type:Yi,depthTexture:new wf(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ze=e.properties.get(h);ze.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(W){for(let q=0;q<W.removed.length;q++){const Te=W.removed[q],Le=b.indexOf(Te);Le>=0&&(b[Le]=null,E[Le].disconnect(Te))}for(let q=0;q<W.added.length;q++){const Te=W.added[q];let Le=b.indexOf(Te);if(Le===-1){for(let ze=0;ze<E.length;ze++)if(ze>=b.length){b.push(Te),Le=ze;break}else if(b[ze]===null){b[ze]=Te,Le=ze;break}if(Le===-1)break}const Fe=E[Le];Fe&&Fe.connect(Te)}}const B=new H,V=new H;function Z(W,q,Te){B.setFromMatrixPosition(q.matrixWorld),V.setFromMatrixPosition(Te.matrixWorld);const Le=B.distanceTo(V),Fe=q.projectionMatrix.elements,ze=Te.projectionMatrix.elements,Xe=Fe[14]/(Fe[10]-1),He=Fe[14]/(Fe[10]+1),Ee=(Fe[9]+1)/Fe[5],Be=(Fe[9]-1)/Fe[5],ue=(Fe[8]-1)/Fe[0],U=(ze[8]+1)/ze[0],be=Xe*ue,ge=Xe*U,F=Le/(-ue+U),X=F*-ue;q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(X),W.translateZ(F),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const we=Xe+F,Pe=He+F,Ae=be-X,Ce=ge+(Le-X),Ve=Ee*He/Pe*we,je=Be*He/Pe*we;W.projectionMatrix.makePerspective(Ae,Ce,Ve,je,we,Pe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function k(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;R.near=w.near=M.near=W.near,R.far=w.far=M.far=W.far,(O!==R.near||S!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,S=R.far);const q=W.parent,Te=R.cameras;k(R,q);for(let Le=0;Le<Te.length;Le++)k(Te[Le],q);Te.length===2?Z(R,M,w):R.projectionMatrix.copy(M.projectionMatrix),j(W,R,q)};function j(W,q,Te){Te===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(Te.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ml*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)};let ee=null;function le(W,q){if(u=q.getViewerPose(c||o),_=q,u!==null){const Te=u.views;g!==null&&(e.setRenderTargetFramebuffer(h,g.framebuffer),e.setRenderTarget(h));let Le=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,Le=!0);for(let Fe=0;Fe<Te.length;Fe++){const ze=Te[Fe];let Xe=null;if(g!==null)Xe=g.getViewport(ze);else{const Ee=f.getViewSubImage(p,ze);Xe=Ee.viewport,Fe===0&&(e.setRenderTargetTextures(h,Ee.colorTexture,p.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(h))}let He=I[Fe];He===void 0&&(He=new Ln,He.layers.enable(Fe),He.viewport=new Dt,I[Fe]=He),He.matrix.fromArray(ze.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ze.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Fe===0&&(R.matrix.copy(He.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Le===!0&&R.cameras.push(He)}}for(let Te=0;Te<E.length;Te++){const Le=b[Te],Fe=E[Te];Le!==null&&Fe!==void 0&&Fe.update(Le,q,c||o)}ee&&ee(W,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const _e=new xf;_e.setAnimationLoop(le),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}}function _y(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,mf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,b,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&g(m,h,M)):h.isMeshMatcapMaterial?(a(m,h),_(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,E,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*b,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xy(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,b){const M=b.program;i.uniformBlockBinding(E,M)}function c(E,b){let M=r[E.id];M===void 0&&(_(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(E,w);const I=e.render.frame;a[E.id]!==I&&(p(E),a[E.id]=I)}function u(E){const b=f();E.__bindingPointIndex=b;const M=n.createBuffer(),w=E.__size,I=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const b=r[E.id],M=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,R=M.length;I<R;I++){const O=M[I];if(g(O,I,w)===!0){const S=O.__offset,A=Array.isArray(O.value)?O.value:[O.value];let oe=0;for(let $=0;$<A.length;$++){const B=A[$],V=x(B);typeof B=="number"?(O.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,S+oe,O.__data)):B.isMatrix3?(O.__data[0]=B.elements[0],O.__data[1]=B.elements[1],O.__data[2]=B.elements[2],O.__data[3]=B.elements[0],O.__data[4]=B.elements[3],O.__data[5]=B.elements[4],O.__data[6]=B.elements[5],O.__data[7]=B.elements[0],O.__data[8]=B.elements[6],O.__data[9]=B.elements[7],O.__data[10]=B.elements[8],O.__data[11]=B.elements[0]):(B.toArray(O.__data,oe),oe+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,O.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,b,M){const w=E.value;if(M[b]===void 0){if(typeof w=="number")M[b]=w;else{const I=Array.isArray(w)?w:[w],R=[];for(let O=0;O<I.length;O++)R.push(I[O].clone());M[b]=R}return!0}else if(typeof w=="number"){if(M[b]!==w)return M[b]=w,!0}else{const I=Array.isArray(M[b])?M[b]:[M[b]],R=Array.isArray(w)?w:[w];for(let O=0;O<I.length;O++){const S=I[O];if(S.equals(R[O])===!1)return S.copy(R[O]),!0}}return!1}function _(E){const b=E.uniforms;let M=0;const w=16;let I=0;for(let R=0,O=b.length;R<O;R++){const S=b[R],A={boundary:0,storage:0},oe=Array.isArray(S.value)?S.value:[S.value];for(let $=0,B=oe.length;$<B;$++){const V=oe[$],Z=x(V);A.boundary+=Z.boundary,A.storage+=Z.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,R>0){I=M%w;const $=w-I;I!==0&&$-A.boundary<0&&(M+=w-I,S.__offset=M)}M+=A.storage}return I=M%w,I>0&&(M+=w-I),E.__size=M,E.__cache={},this}function x(E){const b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}class Tf{constructor(e={}){const{canvas:t=pv(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;const b=this;let M=!1,w=0,I=0,R=null,O=-1,S=null;const A=new Dt,oe=new Dt;let $=null;const B=new xt(0);let V=0,Z=t.width,k=t.height,j=1,ee=null,le=null;const _e=new Dt(0,0,Z,k),W=new Dt(0,0,Z,k);let q=!1;const Te=new kl;let Le=!1,Fe=!1,ze=null;const Xe=new Vt,He=new et,Ee=new H,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return R===null?j:1}let U=i;function be(P,K){for(let ie=0;ie<P.length;ie++){const Q=P[ie],ce=t.getContext(Q,K);if(ce!==null)return ce}return null}try{const P={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",Se,!1),U===null){const K=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&K.shift(),U=be(K,P),U===null)throw be(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ge,F,X,we,Pe,Ae,Ce,Ve,je,T,v,D,se,pe,ae,Ie,ye,Y,L,te,Ue,Me,ve,We;function Ye(){ge=new Pb(U),F=new Eb(U,ge,e),ge.init(F),Me=new py(U,ge,F),X=new dy(U,ge,F),we=new Ib(U),Pe=new J0,Ae=new fy(U,ge,X,Pe,F,Me,we),Ce=new Tb(b),Ve=new Cb(b),je=new Vv(U,F),ve=new Mb(U,ge,je,F),T=new Lb(U,je,we,ve),v=new Fb(U,T,je,we),L=new Ob(U,F,Ae),Ie=new wb(Pe),D=new Z0(b,Ce,Ve,ge,F,ve,Ie),se=new _y(b,Pe),pe=new $0,ae=new ay(ge,F),Y=new yb(b,Ce,Ve,X,v,p,l),ye=new uy(b,v,F),We=new xy(U,we,F,X),te=new Sb(U,ge,we,F),Ue=new Db(U,ge,we,F),we.programs=D.programs,b.capabilities=F,b.extensions=ge,b.properties=Pe,b.renderLists=pe,b.shadowMap=ye,b.state=X,b.info=we}Ye();const N=new vy(b,U);this.xr=N,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const P=ge.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ge.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(Z,k,!1))},this.getSize=function(P){return P.set(Z,k)},this.setSize=function(P,K,ie=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=P,k=K,t.width=Math.floor(P*j),t.height=Math.floor(K*j),ie===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(Z*j,k*j).floor()},this.setDrawingBufferSize=function(P,K,ie){Z=P,k=K,j=ie,t.width=Math.floor(P*ie),t.height=Math.floor(K*ie),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(_e)},this.setViewport=function(P,K,ie,Q){P.isVector4?_e.set(P.x,P.y,P.z,P.w):_e.set(P,K,ie,Q),X.viewport(A.copy(_e).multiplyScalar(j).floor())},this.getScissor=function(P){return P.copy(W)},this.setScissor=function(P,K,ie,Q){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,K,ie,Q),X.scissor(oe.copy(W).multiplyScalar(j).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(P){X.setScissorTest(q=P)},this.setOpaqueSort=function(P){ee=P},this.setTransparentSort=function(P){le=P},this.getClearColor=function(P){return P.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(P=!0,K=!0,ie=!0){let Q=0;if(P){let ce=!1;if(R!==null){const qe=R.texture.format;ce=qe===tf||qe===ef||qe===$d}if(ce){const qe=R.texture.type,nt=qe===Yi||qe===Wi||qe===Ol||qe===mr||qe===Jd||qe===Qd,rt=Y.getClearColor(),at=Y.getClearAlpha(),ut=rt.r,it=rt.g,ot=rt.b;nt?(g[0]=ut,g[1]=it,g[2]=ot,g[3]=at,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=ut,_[1]=it,_[2]=ot,_[3]=at,U.clearBufferiv(U.COLOR,0,_))}else Q|=U.COLOR_BUFFER_BIT}K&&(Q|=U.DEPTH_BUFFER_BIT),ie&&(Q|=U.STENCIL_BUFFER_BIT),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),pe.dispose(),ae.dispose(),Pe.dispose(),Ce.dispose(),Ve.dispose(),v.dispose(),ve.dispose(),We.dispose(),D.dispose(),N.dispose(),N.removeEventListener("sessionstart",fe),N.removeEventListener("sessionend",ke),ze&&(ze.dispose(),ze=null),Qe.stop()};function Ne(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const P=we.autoReset,K=ye.enabled,ie=ye.autoUpdate,Q=ye.needsUpdate,ce=ye.type;Ye(),we.autoReset=P,ye.enabled=K,ye.autoUpdate=ie,ye.needsUpdate=Q,ye.type=ce}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function De(P){const K=P.target;K.removeEventListener("dispose",De),Je(K)}function Je(P){tt(P),Pe.remove(P)}function tt(P){const K=Pe.get(P).programs;K!==void 0&&(K.forEach(function(ie){D.releaseProgram(ie)}),P.isShaderMaterial&&D.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ie,Q,ce,qe){K===null&&(K=Be);const nt=ce.isMesh&&ce.matrixWorld.determinant()<0,rt=Vn(P,K,ie,Q,ce);X.setMaterial(Q,nt);let at=ie.index,ut=1;if(Q.wireframe===!0){if(at=T.getWireframeAttribute(ie),at===void 0)return;ut=2}const it=ie.drawRange,ot=ie.attributes.position;let Pt=it.start*ut,Ut=(it.start+it.count)*ut;qe!==null&&(Pt=Math.max(Pt,qe.start*ut),Ut=Math.min(Ut,(qe.start+qe.count)*ut)),at!==null?(Pt=Math.max(Pt,0),Ut=Math.min(Ut,at.count)):ot!=null&&(Pt=Math.max(Pt,0),Ut=Math.min(Ut,ot.count));const _n=Ut-Pt;if(_n<0||_n===1/0)return;ve.setup(ce,Q,rt,ie,at);let Wn,Ft=te;if(at!==null&&(Wn=je.get(at),Ft=Ue,Ft.setIndex(Wn)),ce.isMesh)Q.wireframe===!0?(X.setLineWidth(Q.wireframeLinewidth*ue()),Ft.setMode(U.LINES)):Ft.setMode(U.TRIANGLES);else if(ce.isLine){let dt=Q.linewidth;dt===void 0&&(dt=1),X.setLineWidth(dt*ue()),ce.isLineSegments?Ft.setMode(U.LINES):ce.isLineLoop?Ft.setMode(U.LINE_LOOP):Ft.setMode(U.LINE_STRIP)}else ce.isPoints?Ft.setMode(U.POINTS):ce.isSprite&&Ft.setMode(U.TRIANGLES);if(ce.isInstancedMesh)Ft.renderInstances(Pt,_n,ce.count);else if(ie.isInstancedBufferGeometry){const dt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Mr=Math.min(ie.instanceCount,dt);Ft.renderInstances(Pt,_n,Mr)}else Ft.render(Pt,_n)},this.compile=function(P,K){function ie(Q,ce,qe){Q.transparent===!0&&Q.side===zn&&Q.forceSinglePass===!1?(Q.side=Sn,Q.needsUpdate=!0,vn(Q,ce,qe),Q.side=pi,Q.needsUpdate=!0,vn(Q,ce,qe),Q.side=zn):vn(Q,ce,qe)}m=ae.get(P),m.init(),E.push(m),P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(b._useLegacyLights),P.traverse(function(Q){const ce=Q.material;if(ce)if(Array.isArray(ce))for(let qe=0;qe<ce.length;qe++){const nt=ce[qe];ie(nt,P,Q)}else ie(ce,P,Q)}),E.pop(),m=null};let st=null;function yt(P){st&&st(P)}function fe(){Qe.stop()}function ke(){Qe.start()}const Qe=new xf;Qe.setAnimationLoop(yt),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(P){st=P,N.setAnimationLoop(P),P===null?Qe.stop():Qe.start()},N.addEventListener("sessionstart",fe),N.addEventListener("sessionend",ke),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(K),K=N.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,K,R),m=ae.get(P,E.length),m.init(),E.push(m),Xe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Te.setFromProjectionMatrix(Xe),Fe=this.localClippingEnabled,Le=Ie.init(this.clippingPlanes,Fe),x=pe.get(P,h.length),x.init(),h.push(x),pt(P,K,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(ee,le),this.info.render.frame++,Le===!0&&Ie.beginShadows();const ie=m.state.shadowsArray;if(ye.render(ie,P,K),Le===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(x,P),m.setupLights(b._useLegacyLights),K.isArrayCamera){const Q=K.cameras;for(let ce=0,qe=Q.length;ce<qe;ce++){const nt=Q[ce];bt(x,P,nt,nt.viewport)}}else bt(x,P,K);R!==null&&(Ae.updateMultisampleRenderTarget(R),Ae.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(b,P,K),ve.resetDefaultState(),O=-1,S=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function pt(P,K,ie,Q){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Te.intersectsSprite(P)){Q&&Ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Xe);const nt=v.update(P),rt=P.material;rt.visible&&x.push(P,nt,rt,ie,Ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Te.intersectsObject(P))){const nt=v.update(P),rt=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ee.copy(P.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),Ee.copy(nt.boundingSphere.center)),Ee.applyMatrix4(P.matrixWorld).applyMatrix4(Xe)),Array.isArray(rt)){const at=nt.groups;for(let ut=0,it=at.length;ut<it;ut++){const ot=at[ut],Pt=rt[ot.materialIndex];Pt&&Pt.visible&&x.push(P,nt,Pt,ie,Ee.z,ot)}}else rt.visible&&x.push(P,nt,rt,ie,Ee.z,null)}}const qe=P.children;for(let nt=0,rt=qe.length;nt<rt;nt++)pt(qe[nt],K,ie,Q)}function bt(P,K,ie,Q){const ce=P.opaque,qe=P.transmissive,nt=P.transparent;m.setupLightsView(ie),Le===!0&&Ie.setGlobalState(b.clippingPlanes,ie),qe.length>0&&un(ce,qe,K,ie),Q&&X.viewport(A.copy(Q)),ce.length>0&&Tt(ce,K,ie),qe.length>0&&Tt(qe,K,ie),nt.length>0&&Tt(nt,K,ie),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function un(P,K,ie,Q){const ce=F.isWebGL2;ze===null&&(ze=new Ii(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?la:Yi,minFilter:Ya,samples:ce?4:0})),b.getDrawingBufferSize(He),ce?ze.setSize(He.x,He.y):ze.setSize(gl(He.x),gl(He.y));const qe=b.getRenderTarget();b.setRenderTarget(ze),b.getClearColor(B),V=b.getClearAlpha(),V<1&&b.setClearColor(16777215,.5),b.clear();const nt=b.toneMapping;b.toneMapping=ji,Tt(P,ie,Q),Ae.updateMultisampleRenderTarget(ze),Ae.updateRenderTargetMipmap(ze);let rt=!1;for(let at=0,ut=K.length;at<ut;at++){const it=K[at],ot=it.object,Pt=it.geometry,Ut=it.material,_n=it.group;if(Ut.side===zn&&ot.layers.test(Q.layers)){const Wn=Ut.side;Ut.side=Sn,Ut.needsUpdate=!0,Qt(ot,ie,Q,Pt,Ut,_n),Ut.side=Wn,Ut.needsUpdate=!0,rt=!0}}rt===!0&&(Ae.updateMultisampleRenderTarget(ze),Ae.updateRenderTargetMipmap(ze)),b.setRenderTarget(qe),b.setClearColor(B,V),b.toneMapping=nt}function Tt(P,K,ie){const Q=K.isScene===!0?K.overrideMaterial:null;for(let ce=0,qe=P.length;ce<qe;ce++){const nt=P[ce],rt=nt.object,at=nt.geometry,ut=Q===null?nt.material:Q,it=nt.group;rt.layers.test(ie.layers)&&Qt(rt,K,ie,at,ut,it)}}function Qt(P,K,ie,Q,ce,qe){P.onBeforeRender(b,K,ie,Q,ce,qe),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(b,K,ie,Q,P,qe),ce.transparent===!0&&ce.side===zn&&ce.forceSinglePass===!1?(ce.side=Sn,ce.needsUpdate=!0,b.renderBufferDirect(ie,K,Q,ce,P,qe),ce.side=pi,ce.needsUpdate=!0,b.renderBufferDirect(ie,K,Q,ce,P,qe),ce.side=zn):b.renderBufferDirect(ie,K,Q,ce,P,qe),P.onAfterRender(b,K,ie,Q,ce,qe)}function vn(P,K,ie){K.isScene!==!0&&(K=Be);const Q=Pe.get(P),ce=m.state.lights,qe=m.state.shadowsArray,nt=ce.state.version,rt=D.getParameters(P,ce.state,qe,K,ie),at=D.getProgramCacheKey(rt);let ut=Q.programs;Q.environment=P.isMeshStandardMaterial?K.environment:null,Q.fog=K.fog,Q.envMap=(P.isMeshStandardMaterial?Ve:Ce).get(P.envMap||Q.environment),ut===void 0&&(P.addEventListener("dispose",De),ut=new Map,Q.programs=ut);let it=ut.get(at);if(it!==void 0){if(Q.currentProgram===it&&Q.lightsStateVersion===nt)return ri(P,rt),it}else rt.uniforms=D.getUniforms(P),P.onBuild(ie,rt,b),P.onBeforeCompile(rt,b),it=D.acquireProgram(rt,at),ut.set(at,it),Q.uniforms=rt.uniforms;const ot=Q.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ot.clippingPlanes=Ie.uniform),ri(P,rt),Q.needsLights=si(P),Q.lightsStateVersion=nt,Q.needsLights&&(ot.ambientLightColor.value=ce.state.ambient,ot.lightProbe.value=ce.state.probe,ot.directionalLights.value=ce.state.directional,ot.directionalLightShadows.value=ce.state.directionalShadow,ot.spotLights.value=ce.state.spot,ot.spotLightShadows.value=ce.state.spotShadow,ot.rectAreaLights.value=ce.state.rectArea,ot.ltc_1.value=ce.state.rectAreaLTC1,ot.ltc_2.value=ce.state.rectAreaLTC2,ot.pointLights.value=ce.state.point,ot.pointLightShadows.value=ce.state.pointShadow,ot.hemisphereLights.value=ce.state.hemi,ot.directionalShadowMap.value=ce.state.directionalShadowMap,ot.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ot.spotShadowMap.value=ce.state.spotShadowMap,ot.spotLightMatrix.value=ce.state.spotLightMatrix,ot.spotLightMap.value=ce.state.spotLightMap,ot.pointShadowMap.value=ce.state.pointShadowMap,ot.pointShadowMatrix.value=ce.state.pointShadowMatrix);const Pt=it.getUniforms(),Ut=Os.seqWithValue(Pt.seq,ot);return Q.currentProgram=it,Q.uniformsList=Ut,it}function ri(P,K){const ie=Pe.get(P);ie.outputColorSpace=K.outputColorSpace,ie.instancing=K.instancing,ie.instancingColor=K.instancingColor,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function Vn(P,K,ie,Q,ce){K.isScene!==!0&&(K=Be),Ae.resetTextureUnits();const qe=K.fog,nt=Q.isMeshStandardMaterial?K.environment:null,rt=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mi,at=(Q.isMeshStandardMaterial?Ve:Ce).get(Q.envMap||nt),ut=Q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,it=!!ie.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ot=!!ie.morphAttributes.position,Pt=!!ie.morphAttributes.normal,Ut=!!ie.morphAttributes.color;let _n=ji;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_n=b.toneMapping);const Wn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ft=Wn!==void 0?Wn.length:0,dt=Pe.get(Q),Mr=m.state.lights;if(Le===!0&&(Fe===!0||P!==S)){const dn=P===S&&Q.id===O;Ie.setState(Q,P,dn)}let At=!1;Q.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Mr.state.version||dt.outputColorSpace!==rt||ce.isInstancedMesh&&dt.instancing===!1||!ce.isInstancedMesh&&dt.instancing===!0||ce.isSkinnedMesh&&dt.skinning===!1||!ce.isSkinnedMesh&&dt.skinning===!0||ce.isInstancedMesh&&dt.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&dt.instancingColor===!1&&ce.instanceColor!==null||dt.envMap!==at||Q.fog===!0&&dt.fog!==qe||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Ie.numPlanes||dt.numIntersection!==Ie.numIntersection)||dt.vertexAlphas!==ut||dt.vertexTangents!==it||dt.morphTargets!==ot||dt.morphNormals!==Pt||dt.morphColors!==Ut||dt.toneMapping!==_n||F.isWebGL2===!0&&dt.morphTargetsCount!==Ft)&&(At=!0):(At=!0,dt.__version=Q.version);let oi=dt.currentProgram;At===!0&&(oi=vn(Q,K,ce));let es=!1,$i=!1,va=!1;const Xt=oi.getUniforms(),Xn=dt.uniforms;if(X.useProgram(oi.program)&&(es=!0,$i=!0,va=!0),Q.id!==O&&(O=Q.id,$i=!0),es||S!==P){Xt.setValue(U,"projectionMatrix",P.projectionMatrix),Xt.setValue(U,"viewMatrix",P.matrixWorldInverse);const dn=Xt.map.cameraPosition;dn!==void 0&&dn.setValue(U,Ee.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&Xt.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Xt.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,$i=!0,va=!0)}if(ce.isSkinnedMesh){Xt.setOptional(U,ce,"bindMatrix"),Xt.setOptional(U,ce,"bindMatrixInverse");const dn=ce.skeleton;dn&&(F.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Xt.setValue(U,"boneTexture",dn.boneTexture,Ae),Xt.setValue(U,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const er=ie.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0&&F.isWebGL2===!0)&&L.update(ce,ie,oi),($i||dt.receiveShadow!==ce.receiveShadow)&&(dt.receiveShadow=ce.receiveShadow,Xt.setValue(U,"receiveShadow",ce.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Xn.envMap.value=at,Xn.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),$i&&(Xt.setValue(U,"toneMappingExposure",b.toneMappingExposure),dt.needsLights&&ai(Xn,va),qe&&Q.fog===!0&&se.refreshFogUniforms(Xn,qe),se.refreshMaterialUniforms(Xn,Q,j,k,ze),Os.upload(U,dt.uniformsList,Xn,Ae)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Os.upload(U,dt.uniformsList,Xn,Ae),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Xt.setValue(U,"center",ce.center),Xt.setValue(U,"modelViewMatrix",ce.modelViewMatrix),Xt.setValue(U,"normalMatrix",ce.normalMatrix),Xt.setValue(U,"modelMatrix",ce.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const dn=Q.uniformsGroups;for(let _a=0,ts=dn.length;_a<ts;_a++)if(F.isWebGL2){const xa=dn[_a];We.update(xa,oi),We.bind(xa,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function ai(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function si(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,K,ie){Pe.get(P.texture).__webglTexture=K,Pe.get(P.depthTexture).__webglTexture=ie;const Q=Pe.get(P);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=ie===void 0,Q.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,K){const ie=Pe.get(P);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,ie=0){R=P,w=K,I=ie;let Q=!0,ce=null,qe=!1,nt=!1;if(P){const at=Pe.get(P);at.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1):at.__webglFramebuffer===void 0?Ae.setupRenderTarget(P):at.__hasExternalTextures&&Ae.rebindTextures(P,Pe.get(P.texture).__webglTexture,Pe.get(P.depthTexture).__webglTexture);const ut=P.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(nt=!0);const it=Pe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[K])?ce=it[K][ie]:ce=it[K],qe=!0):F.isWebGL2&&P.samples>0&&Ae.useMultisampledRTT(P)===!1?ce=Pe.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?ce=it[ie]:ce=it,A.copy(P.viewport),oe.copy(P.scissor),$=P.scissorTest}else A.copy(_e).multiplyScalar(j).floor(),oe.copy(W).multiplyScalar(j).floor(),$=q;if(X.bindFramebuffer(U.FRAMEBUFFER,ce)&&F.drawBuffers&&Q&&X.drawBuffers(P,ce),X.viewport(A),X.scissor(oe),X.setScissorTest($),qe){const at=Pe.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+K,at.__webglTexture,ie)}else if(nt){const at=Pe.get(P.texture),ut=K||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,at.__webglTexture,ie||0,ut)}O=-1},this.readRenderTargetPixels=function(P,K,ie,Q,ce,qe,nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=Pe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&nt!==void 0&&(rt=rt[nt]),rt){X.bindFramebuffer(U.FRAMEBUFFER,rt);try{const at=P.texture,ut=at.format,it=at.type;if(ut!==Jn&&Me.convert(ut)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=it===la&&(ge.has("EXT_color_buffer_half_float")||F.isWebGL2&&ge.has("EXT_color_buffer_float"));if(it!==Yi&&Me.convert(it)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Ai&&(F.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-Q&&ie>=0&&ie<=P.height-ce&&U.readPixels(K,ie,Q,ce,Me.convert(ut),Me.convert(it),qe)}finally{const at=R!==null?Pe.get(R).__webglFramebuffer:null;X.bindFramebuffer(U.FRAMEBUFFER,at)}}},this.copyFramebufferToTexture=function(P,K,ie=0){const Q=Math.pow(2,-ie),ce=Math.floor(K.image.width*Q),qe=Math.floor(K.image.height*Q);Ae.setTexture2D(K,0),U.copyTexSubImage2D(U.TEXTURE_2D,ie,0,0,P.x,P.y,ce,qe),X.unbindTexture()},this.copyTextureToTexture=function(P,K,ie,Q=0){const ce=K.image.width,qe=K.image.height,nt=Me.convert(ie.format),rt=Me.convert(ie.type);Ae.setTexture2D(ie,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ie.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,ie.unpackAlignment),K.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Q,P.x,P.y,ce,qe,nt,rt,K.image.data):K.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Q,P.x,P.y,K.mipmaps[0].width,K.mipmaps[0].height,nt,K.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Q,P.x,P.y,nt,rt,K.image),Q===0&&ie.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(P,K,ie,Q,ce=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const qe=P.max.x-P.min.x+1,nt=P.max.y-P.min.y+1,rt=P.max.z-P.min.z+1,at=Me.convert(Q.format),ut=Me.convert(Q.type);let it;if(Q.isData3DTexture)Ae.setTexture3D(Q,0),it=U.TEXTURE_3D;else if(Q.isDataArrayTexture)Ae.setTexture2DArray(Q,0),it=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Q.unpackAlignment);const ot=U.getParameter(U.UNPACK_ROW_LENGTH),Pt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ut=U.getParameter(U.UNPACK_SKIP_PIXELS),_n=U.getParameter(U.UNPACK_SKIP_ROWS),Wn=U.getParameter(U.UNPACK_SKIP_IMAGES),Ft=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,P.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,P.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,P.min.z),ie.isDataTexture||ie.isData3DTexture?U.texSubImage3D(it,ce,K.x,K.y,K.z,qe,nt,rt,at,ut,Ft.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(it,ce,K.x,K.y,K.z,qe,nt,rt,at,Ft.data)):U.texSubImage3D(it,ce,K.x,K.y,K.z,qe,nt,rt,at,ut,Ft),U.pixelStorei(U.UNPACK_ROW_LENGTH,ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),U.pixelStorei(U.UNPACK_SKIP_ROWS,_n),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Wn),ce===0&&Q.generateMipmaps&&U.generateMipmap(it),X.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ae.setTextureCube(P,0):P.isData3DTexture?Ae.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ae.setTexture2DArray(P,0):Ae.setTexture2D(P,0),X.unbindTexture()},this.resetState=function(){w=0,I=0,R=null,X.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?vr:nf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vr?Lt:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class by extends Tf{}by.prototype.isWebGL1Renderer=!0;class yy extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class My{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new H;class Ks{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),r=Mt(r,this.array),a=Mt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new ni(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Af extends ma{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hr;const Ta=new H,Vr=new H,Wr=new H,Xr=new et,Aa=new et,Rf=new Vt,As=new H,Ra=new H,Rs=new H,Iu=new et,Yo=new et,Uu=new et;class Sy extends ln{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new Oi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new My(t,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new Ks(i,3,0,!1)),Hr.setAttribute("uv",new Ks(i,2,3,!1))}this.geometry=Hr,this.material=e!==void 0?e:new Af,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),Rf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Wr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;Cs(As.set(-.5,-.5,0),Wr,o,Vr,r,a),Cs(Ra.set(.5,-.5,0),Wr,o,Vr,r,a),Cs(Rs.set(.5,.5,0),Wr,o,Vr,r,a),Iu.set(0,0),Yo.set(1,0),Uu.set(1,1);let s=e.ray.intersectTriangle(As,Ra,Rs,!1,Ta);if(s===null&&(Cs(Ra.set(-.5,.5,0),Wr,o,Vr,r,a),Yo.set(0,1),s=e.ray.intersectTriangle(As,Rs,Ra,!1,Ta),s===null))return;const l=e.ray.origin.distanceTo(Ta);l<e.near||l>e.far||t.push({distance:l,point:Ta.clone(),uv:Bn.getInterpolation(Ta,As,Ra,Rs,Iu,Yo,Uu,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cs(n,e,t,i,r,a){Xr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Aa.x=a*Xr.x-r*Xr.y,Aa.y=r*Xr.x+a*Xr.y):Aa.copy(Xr),n.copy(e),n.x+=Aa.x,n.y+=Aa.y,n.applyMatrix4(Rf)}class Fs extends on{constructor(e,t,i,r,a,o,s,l,c){super(e,t,i,r,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qa extends ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cf extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qo=new Vt,Nu=new H,Ou=new H;class Ey{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ou),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fu=new Vt,Ca=new H,Ko=new H;class wy extends Ey{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ca),Ko.copy(i.position),Ko.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ko),i.updateMatrixWorld(),r.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Fu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}}class Ty extends Cf{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new wy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ay extends Cf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ku(){return(typeof performance>"u"?Date:performance).now()}class Bu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);function Gl(n,e,t,i,r,a,o,s){const l=(R,O,S,A)=>[new et(R/o,1-A/s),new et(S/o,1-A/s),new et(S/o,1-O/s),new et(R/o,1-O/s)],c=l(e+a,t,e+i+a,t+a),u=l(e+i+a,t,e+i*2+a,t+a),f=l(e,t+a,e+a,t+a+r),p=l(e+a,t+a,e+i+a,t+a+r),g=l(e+i+a,t+a,e+i+a*2,t+r+a),_=l(e+i+a*2,t+a,e+i*2+a*2,t+r+a),x=n.attributes.uv,m=[g[3],g[2],g[0],g[1]],h=[f[3],f[2],f[0],f[1]],E=[c[3],c[2],c[0],c[1]],b=[u[0],u[1],u[3],u[2]],M=[p[3],p[2],p[0],p[1]],w=[_[3],_[2],_[0],_[1]],I=[];for(const R of[m,h,E,b,M,w])for(const O of R)I.push(O.x,O.y);x.set(new Float32Array(I)),x.needsUpdate=!0}function Un(n,e,t,i,r,a){Gl(n,e,t,i,r,a,64,64)}function _l(n,e,t,i,r,a){Gl(n,e,t,i,r,a,64,32)}class ar extends tn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class Ry extends tn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new qa({side:pi}),this.layer2Material=new qa({side:zn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new zt(8,8,8);Un(e,0,0,8,8,8);const t=new Et(e,this.layer1Material),i=new zt(9,9,9);Un(i,32,0,8,8,8);const r=new Et(i,this.layer2Material);this.head=new ar(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new zt(8,12,4);Un(a,16,16,8,12,4);const o=new Et(a,this.layer1Material),s=new zt(8.5,12.5,4.5);Un(s,16,32,8,12,4);const l=new Et(s,this.layer2Material);this.body=new ar(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const c=new zt,u=new Et(c,this.layer1MaterialBiased);this.modelListeners.push(()=>{u.scale.x=this.slim?3:4,u.scale.y=12,u.scale.z=4,Un(c,40,16,this.slim?3:4,12,4)});const f=new zt,p=new Et(f,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Un(f,40,32,this.slim?3:4,12,4)});const g=new tn;g.add(u,p),this.modelListeners.push(()=>{g.position.x=this.slim?-.5:-1}),g.position.y=-4,this.rightArm=new ar(u,p),this.rightArm.name="rightArm",this.rightArm.add(g),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const _=new zt,x=new Et(_,this.layer1MaterialBiased);this.modelListeners.push(()=>{x.scale.x=this.slim?3:4,x.scale.y=12,x.scale.z=4,Un(_,32,48,this.slim?3:4,12,4)});const m=new zt,h=new Et(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3.5:4.5,h.scale.y=12.5,h.scale.z=4.5,Un(m,48,48,this.slim?3:4,12,4)});const E=new tn;E.add(x,h),this.modelListeners.push(()=>{E.position.x=this.slim?.5:1}),E.position.y=-4,this.leftArm=new ar(x,h),this.leftArm.name="leftArm",this.leftArm.add(E),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const b=new zt(4,12,4);Un(b,0,16,4,12,4);const M=new Et(b,this.layer1MaterialBiased),w=new zt(4.5,12.5,4.5);Un(w,0,32,4,12,4);const I=new Et(w,this.layer2MaterialBiased),R=new tn;R.add(M,I),R.position.y=-6,this.rightLeg=new ar(M,I),this.rightLeg.name="rightLeg",this.rightLeg.add(R),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const O=new zt(4,12,4);Un(O,16,48,4,12,4);const S=new Et(O,this.layer1MaterialBiased),A=new zt(4.5,12.5,4.5);Un(A,0,48,4,12,4);const oe=new Et(A,this.layer2MaterialBiased),$=new tn;$.add(S,oe),$.position.y=-6,this.leftLeg=new ar(S,oe),this.leftLeg.name="leftLeg",this.leftLeg.add($),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof ar)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Cy extends tn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new qa({side:zn,transparent:!0,alphaTest:1e-5});const e=new zt(10,16,1);_l(e,0,0,10,16,1),this.cape=new Et(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Py extends tn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new qa({side:zn,transparent:!0,alphaTest:1e-5});const e=new zt(12,22,4);_l(e,22,0,10,20,2);const t=new Et(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new tn,this.leftWing.add(t),this.add(this.leftWing);const i=new zt(12,22,4);_l(i,22,0,10,20,2);const r=new Et(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new tn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Ly extends tn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new qa({side:pi});const e=new zt(8,8,4/3);Gl(e,0,0,6,6,1,14,7),this.rightEar=new Et(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Et(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const zu=10.8*Math.PI/180;class Dy extends tn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new Ry,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Cy,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=zu,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new Py,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Ly,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=zu,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ps(n){return n instanceof HTMLImageElement||n instanceof HTMLVideoElement||n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}function xl(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(a.data[l+3]!==255)return!0}return!1}function so(n){return n/64}function Gu(n,e,t){if(t){if(xl(n,0,0,e,e))return}else if(xl(n,0,0,e,e/2))return;const i=so(e),r=(a,o,s,l)=>n.clearRect(a*i,o*i,s*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function Iy(n,e){n.save(),n.scale(-1,1);const t=so(e),i=(r,a,o,s,l,c)=>n.drawImage(n.canvas,r*t,a*t,o*t,s*t,-l*t,c*t,-o*t,s*t);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),n.restore()}function Uy(n,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=n.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;n.width=r,n.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),Iy(i,r),Gu(i,n.width,!1)}else n.width=e.width,n.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,n.width,n.height),Gu(i,n.width,!0)}function Ny(n){if(n.width===2*n.height)return n.width/64;if(n.width*17===n.height*22)return n.width/22;if(n.width*11===n.height*23)return n.width/46;throw new Error(`Bad cape size: ${n.width}x${n.height}`)}function Oy(n,e){const t=Ny(e);n.width=64*t,n.height=32*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function Fy(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===0&&a.data[l+1]===0&&a.data[l+2]===0&&a.data[l+3]===255))return!1}return!0}function ky(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===255&&a.data[l+1]===255&&a.data[l+2]===255&&a.data[l+3]===255))return!1}return!0}function By(n){const e=so(n.width),t=n.getContext("2d",{willReadFrequently:!0}),i=(s,l,c,u)=>xl(t,s*e,l*e,c*e,u*e),r=(s,l,c,u)=>Fy(t,s*e,l*e,c*e,u*e),a=(s,l,c,u)=>ky(t,s*e,l*e,c*e,u*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function zy(n){if(n.width===n.height*2&&n.height%7===0)return n.height/7;throw new Error(`Bad ears size: ${n.width}x${n.height}`)}function Gy(n,e){const t=zy(e);n.width=14*t,n.height=7*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function Hu(n,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=so(e.width),i=14*t,r=7*t;n.width=i,n.height=r;const a=n.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,i,r),a.drawImage(e,24*t,0,i,r,0,0,i,r)}async function Ls(n){const e=document.createElement("img");return new Promise((t,i)=>{e.onload=()=>t(e),e.onerror=i,e.crossOrigin="anonymous",typeof n=="string"?e.src=n:(n.crossOrigin!==void 0&&(e.crossOrigin=n.crossOrigin),n.referrerPolicy!==void 0&&(e.referrerPolicy=n.referrerPolicy),e.src=n.src)})}const Vu={type:"change"},Zo={type:"start"},Wu={type:"end"},Ds=new cf,Xu=new Vi,Hy=Math.cos(70*hv.DEG2RAD);class Vy extends yr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",v),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Vu),i.update(),a=r.NONE},this.update=(function(){const L=new H,te=new br().setFromUnitVectors(e.up,new H(0,1,0)),Ue=te.clone().invert(),Me=new H,ve=new br,We=new H,Ye=2*Math.PI;return function(Ne=null){const J=i.object.position;L.copy(J).sub(i.target),L.applyQuaternion(te),s.setFromVector3(L),i.autoRotate&&a===r.NONE&&oe(S(Ne)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Se=i.minAzimuthAngle,De=i.maxAzimuthAngle;isFinite(Se)&&isFinite(De)&&(Se<-Math.PI?Se+=Ye:Se>Math.PI&&(Se-=Ye),De<-Math.PI?De+=Ye:De>Math.PI&&(De-=Ye),Se<=De?s.theta=Math.max(Se,Math.min(De,s.theta)):s.theta=s.theta>(Se+De)/2?Math.max(Se,s.theta):Math.min(De,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&I||i.object.isOrthographicCamera?s.radius=le(s.radius):s.radius=le(s.radius*c),L.setFromSpherical(s),L.applyQuaternion(Ue),J.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Je=!1;if(i.zoomToCursor&&I){let tt=null;if(i.object.isPerspectiveCamera){const st=L.length();tt=le(st*c);const yt=st-tt;i.object.position.addScaledVector(M,yt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const st=new H(w.x,w.y,0);st.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Je=!0;const yt=new H(w.x,w.y,0);yt.unproject(i.object),i.object.position.sub(yt).add(st),i.object.updateMatrixWorld(),tt=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(tt).add(i.object.position):(Ds.origin.copy(i.object.position),Ds.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ds.direction))<Hy?e.lookAt(i.target):(Xu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ds.intersectPlane(Xu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Je=!0);return c=1,I=!1,Je||Me.distanceToSquared(i.object.position)>o||8*(1-ve.dot(i.object.quaternion))>o||We.distanceToSquared(i.target)>0?(i.dispatchEvent(Vu),Me.copy(i.object.position),ve.copy(i.object.quaternion),We.copy(i.target),Je=!1,!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",pe),i.domElement.removeEventListener("pointerdown",Pe),i.domElement.removeEventListener("pointercancel",Ce),i.domElement.removeEventListener("wheel",T),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",Ce),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Bu,l=new Bu;let c=1;const u=new H,f=new et,p=new et,g=new et,_=new et,x=new et,m=new et,h=new et,E=new et,b=new et,M=new H,w=new et;let I=!1;const R=[],O={};function S(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function oe(L){l.theta-=L}function $(L){l.phi-=L}const B=(function(){const L=new H;return function(Ue,Me){L.setFromMatrixColumn(Me,0),L.multiplyScalar(-Ue),u.add(L)}})(),V=(function(){const L=new H;return function(Ue,Me){i.screenSpacePanning===!0?L.setFromMatrixColumn(Me,1):(L.setFromMatrixColumn(Me,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ue),u.add(L)}})(),Z=(function(){const L=new H;return function(Ue,Me){const ve=i.domElement;if(i.object.isPerspectiveCamera){const We=i.object.position;L.copy(We).sub(i.target);let Ye=L.length();Ye*=Math.tan(i.object.fov/2*Math.PI/180),B(2*Ue*Ye/ve.clientHeight,i.object.matrix),V(2*Me*Ye/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(B(Ue*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),V(Me*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function k(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(L){if(!i.zoomToCursor)return;I=!0;const te=i.domElement.getBoundingClientRect(),Ue=L.clientX-te.left,Me=L.clientY-te.top,ve=te.width,We=te.height;w.x=Ue/ve*2-1,w.y=-(Me/We)*2+1,M.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function le(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function _e(L){f.set(L.clientX,L.clientY)}function W(L){ee(L),h.set(L.clientX,L.clientY)}function q(L){_.set(L.clientX,L.clientY)}function Te(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const te=i.domElement;oe(2*Math.PI*g.x/te.clientHeight),$(2*Math.PI*g.y/te.clientHeight),f.copy(p),i.update()}function Le(L){E.set(L.clientX,L.clientY),b.subVectors(E,h),b.y>0?k(A()):b.y<0&&j(A()),h.copy(E),i.update()}function Fe(L){x.set(L.clientX,L.clientY),m.subVectors(x,_).multiplyScalar(i.panSpeed),Z(m.x,m.y),_.copy(x),i.update()}function ze(L){ee(L),L.deltaY<0?j(A()):L.deltaY>0&&k(A()),i.update()}function Xe(L){let te=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?oe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?oe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),te=!0;break}te&&(L.preventDefault(),i.update())}function He(){if(R.length===1)f.set(R[0].pageX,R[0].pageY);else{const L=.5*(R[0].pageX+R[1].pageX),te=.5*(R[0].pageY+R[1].pageY);f.set(L,te)}}function Ee(){if(R.length===1)_.set(R[0].pageX,R[0].pageY);else{const L=.5*(R[0].pageX+R[1].pageX),te=.5*(R[0].pageY+R[1].pageY);_.set(L,te)}}function Be(){const L=R[0].pageX-R[1].pageX,te=R[0].pageY-R[1].pageY,Ue=Math.sqrt(L*L+te*te);h.set(0,Ue)}function ue(){i.enableZoom&&Be(),i.enablePan&&Ee()}function U(){i.enableZoom&&Be(),i.enableRotate&&He()}function be(L){if(R.length==1)p.set(L.pageX,L.pageY);else{const Ue=Y(L),Me=.5*(L.pageX+Ue.x),ve=.5*(L.pageY+Ue.y);p.set(Me,ve)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const te=i.domElement;oe(2*Math.PI*g.x/te.clientHeight),$(2*Math.PI*g.y/te.clientHeight),f.copy(p)}function ge(L){if(R.length===1)x.set(L.pageX,L.pageY);else{const te=Y(L),Ue=.5*(L.pageX+te.x),Me=.5*(L.pageY+te.y);x.set(Ue,Me)}m.subVectors(x,_).multiplyScalar(i.panSpeed),Z(m.x,m.y),_.copy(x)}function F(L){const te=Y(L),Ue=L.pageX-te.x,Me=L.pageY-te.y,ve=Math.sqrt(Ue*Ue+Me*Me);E.set(0,ve),b.set(0,Math.pow(E.y/h.y,i.zoomSpeed)),k(b.y),h.copy(E)}function X(L){i.enableZoom&&F(L),i.enablePan&&ge(L)}function we(L){i.enableZoom&&F(L),i.enableRotate&&be(L)}function Pe(L){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Ae),i.domElement.addEventListener("pointerup",Ce)),ae(L),L.pointerType==="touch"?D(L):Ve(L))}function Ae(L){i.enabled!==!1&&(L.pointerType==="touch"?se(L):je(L))}function Ce(L){Ie(L),R.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Ae),i.domElement.removeEventListener("pointerup",Ce)),i.dispatchEvent(Wu),a=r.NONE}function Ve(L){let te;switch(L.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Er.DOLLY:if(i.enableZoom===!1)return;W(L),a=r.DOLLY;break;case Er.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;q(L),a=r.PAN}else{if(i.enableRotate===!1)return;_e(L),a=r.ROTATE}break;case Er.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;_e(L),a=r.ROTATE}else{if(i.enablePan===!1)return;q(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Zo)}function je(L){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;Te(L);break;case r.DOLLY:if(i.enableZoom===!1)return;Le(L);break;case r.PAN:if(i.enablePan===!1)return;Fe(L);break}}function T(L){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(L.preventDefault(),i.dispatchEvent(Zo),ze(L),i.dispatchEvent(Wu))}function v(L){i.enabled===!1||i.enablePan===!1||Xe(L)}function D(L){switch(ye(L),R.length){case 1:switch(i.touches.ONE){case wr.ROTATE:if(i.enableRotate===!1)return;He(),a=r.TOUCH_ROTATE;break;case wr.PAN:if(i.enablePan===!1)return;Ee(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case wr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ue(),a=r.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Zo)}function se(L){switch(ye(L),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ge(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;X(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;we(L),i.update();break;default:a=r.NONE}}function pe(L){i.enabled!==!1&&L.preventDefault()}function ae(L){R.push(L)}function Ie(L){delete O[L.pointerId];for(let te=0;te<R.length;te++)if(R[te].pointerId==L.pointerId){R.splice(te,1);return}}function ye(L){let te=O[L.pointerId];te===void 0&&(te=new et,O[L.pointerId]=te),te.set(L.pageX,L.pageY)}function Y(L){const te=L.pointerId===R[0].pointerId?R[1]:R[0];return O[te.pointerId]}i.domElement.addEventListener("contextmenu",pe),i.domElement.addEventListener("pointerdown",Pe),i.domElement.addEventListener("pointercancel",Ce),i.domElement.addEventListener("wheel",T,{passive:!1}),this.update()}}const Wy={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class oo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xy=new bf(-1,1,1,-1,0,1),Hl=new Oi;Hl.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3));Hl.setAttribute("uv",new Li([0,2,0,0,2,0],2));class jy{constructor(e){this._mesh=new Et(Hl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Lf extends oo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ui?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gf.clone(e.uniforms),this.material=new Ui({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jy(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ju extends oo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class Yy extends oo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new et);this._width=i.width,this._height=i.height,t=new Ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:la}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lf(Wy),this.copyPass.material.blending=Pi,this.clock=new Pf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}ju!==void 0&&(o instanceof ju?i=!0:o instanceof Yy&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ky extends oo{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Zy={uniforms:{tDiffuse:{value:null},resolution:{value:new et(1/1024,1/512)}},vertexShader:`

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
	`};class Df{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const i=t*this.speed;this.animate(e,i),this.animationObjects.forEach((r,a)=>{const o=this.progress0.get(a);r(e,this.progress-o,a)}),this.progress+=i}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Yu extends Df{animate(e){const t=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class qu extends Df{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class Jy extends Sy{constructor(e="",t={}){const i=new Af({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const i=t.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new Fs(e);r.magFilter=Nt,r.minFilter=Nt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class Qy{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new Ay(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new Ty(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new yy,this.camera=new Ln,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Nn.enabled=!1,this.renderer=new Tf({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Ii(0,0,{depthTexture:new wf(0,0,Ai)})),this.composer=new qy(this.renderer,t),this.renderPass=new Ky(this.scene,this.camera),this.fxaaPass=new Lf(Zy),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new Dy,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new tn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new Vy(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Pf,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Fs(this.skinCanvas),this.skinTexture.magFilter=Nt,this.skinTexture.minFilter=Nt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Fs(this.capeCanvas),this.capeTexture.magFilter=Nt,this.capeTexture.minFilter=Nt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Fs(this.earsCanvas),this.earsTexture.magFilter=Nt,this.earsTexture.minFilter=Nt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ps(e))Uy(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=By(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Hu(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Ls(e).then(i=>this.loadSkin(i,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ps(e))Oy(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Ls(e).then(i=>this.loadCape(i,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ps(e))t.textureType==="skin"?Hu(this.earsCanvas,e):Gy(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Ls(e).then(i=>this.loadEars(i,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,js)}loadBackground(e,t){if(Ps(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new on,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Ls(e).then(i=>this.loadBackground(i,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new H).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new et).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new et).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof xt||e instanceof on?this.scene.background=e:this.scene.background=new xt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof ln||(e=new Jy(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}var $y=me("<canvas></canvas>");function If(n,e){En(e,!0);let t=ft(e,"skin",3,null),i=ft(e,"cape",3,null),r=ft(e,"width",3,260),a=ft(e,"height",3,340),o=ft(e,"walking",3,!1),s=ft(e,"autorotate",3,!1),l=ft(e,"zoom",3,.85),c=xe(null),u=null,f,p;function g(m){if(!m)return null;const h=String(m).trim();if(!h)return null;if(/^(https?:|data:)/i.test(h))return h;const E=window.__TAURI__?.core?.convertFileSrc;return E?E(h):h}function _(){if(!u)return;const m=g(t()),h=g(i());m!==f&&(f=m,m?u.loadSkin(m,{model:"auto-detect"}).catch(()=>{}):u.resetSkin()),h!==p&&(p=h,h?u.loadCape(h).catch(()=>{}):u.resetCape())}Qi(()=>(u=new Qy({canvas:d(c),width:r(),height:a(),zoom:l(),fov:55}),u.controls.enablePan=!1,u.controls.enableZoom=!0,u.autoRotate=s(),u.animation=o()?new qu:new Yu,_(),()=>{u?.dispose(),u=null})),yn(()=>{_()}),yn(()=>{u&&(u.animation=o()?new qu:new Yu)}),yn(()=>{u&&(u.autoRotate=s())}),yn(()=>{u&&u.setSize(r(),a())});var x=$y();Gd(x,m=>y(c,m),()=>d(c)),Oe(()=>Hi(x,`width:${r()??""}px;height:${a()??""}px;display:block`)),ne(n,x),wn()}var eM=me("<button> </button>"),tM=me('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),nM=me('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),iM=me('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),rM=me('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),aM=me('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),sM=me('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),oM=me('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),lM=me('<div class="p-4"><!> <!></div>'),cM=me('<form class="flex flex-col gap-3 p-4"><div class="flex gap-2"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <button type="button" class="shrink-0 rounded border border-(--border) px-2.5 text-[11px] hover:bg-(--bg-subtle)" title="Use the Ely.by authlib-injector endpoint">Ely.by</button></div> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),uM=me('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),dM=me('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),fM=me('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),hM=me('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),pM=me('<div><div class="flex items-center gap-3"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-sm font-bold text-(--accent)"> </span> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape">🎨</button> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),mM=me('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),gM=me('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <!> <div class="border-t border-(--border)"></div></div></div></div>');function vM(n,e){En(e,!0);let t=ft(e,"accounts",19,()=>[]),i=ft(e,"active",3,null),r=xe("offline"),a=xe(""),o=xe(!1),s=xe(""),l=xe(""),c=xe("idle"),u=xe(""),f=xe(null),p=xe(!1),g=null,_=xe(""),x=xe(""),m=xe(""),h=xe(""),E=xe(null),b=xe(""),M=xe("");function w(F,X){const we=window.__TAURI__?.core;return we?we.invoke(F,X):Promise.reject(new Error("Tauri backend unavailable in this preview."))}Qi(()=>{const F=$s(()=>e.onclose?.());return()=>eo(F)}),Tp(()=>I());function I(){g&&(clearInterval(g),g=null)}yn(()=>{const F=d(s).trim(),X=setTimeout(async()=>{if(!F){y(l,"");return}try{y(l,await w("offline_uuid",{username:F}),!0)}catch{y(l,"")}},200);return()=>clearTimeout(X)});async function R(F){F.preventDefault(),y(a,""),y(o,!0);try{await w("add_offline_account",{username:d(s).trim()}),y(s,""),y(l,""),await e.onrefresh?.()}catch(X){y(a,String(X),!0)}finally{y(o,!1)}}async function O(){y(u,""),y(p,!1),y(c,"requesting");try{y(f,await w("start_microsoft_device_code"),!0),y(c,"code"),I(),g=setInterval(S,(d(f).interval||5)*1e3)}catch(F){y(c,"idle"),y(u,String(F),!0)}}async function S(){if(d(f))try{const F=await w("poll_microsoft_device_code",{device:d(f)});if(F.state==="pending")return;if(F.state==="slow_down"){I(),g=setInterval(S,((d(f).interval||5)+5)*1e3);return}if(I(),F.state==="failed"){y(u,F.reason,!0),y(f,null),y(c,"idle");return}y(f,null),y(c,"signedin"),await e.onrefresh?.()}catch(F){y(u,String(F),!0)}}async function A(){if(d(f))try{await navigator.clipboard.writeText(d(f).user_code),y(p,!0),setTimeout(()=>y(p,!1),1600)}catch{}}async function oe(F){F.preventDefault(),y(a,""),y(o,!0);try{const X=await w("add_custom_yggdrasil_account",{username:d(_).trim(),serverUrl:d(x).trim()});(d(m).trim()||d(h).trim())&&await w("set_account_textures",{id:X.id,skin:d(m).trim()||null,cape:d(h).trim()||null}),y(_,""),y(x,""),y(m,""),y(h,""),await e.onrefresh?.()}catch(X){y(a,String(X),!0)}finally{y(o,!1)}}const $="https://authserver.ely.by/api/authlib-injector";async function B(F){const X=window.__TAURI__?.dialog?.open;if(!X){y(a,"File picker unavailable in this build.");return}try{const we=await X({multiple:!1,title:F==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!we)return;const Pe=String(we);y(F==="skin"?m:h,Pe,!0),y(a,"")}catch(we){y(a,String(we),!0)}}async function V(F){y(a,"");try{await w("set_active_account",{id:F}),await e.onrefresh?.()}catch(X){y(a,String(X),!0)}}async function Z(F){y(a,"");try{await w("remove_account",{id:F}),d(E)===F&&y(E,null),await e.onrefresh?.()}catch(X){y(a,String(X),!0)}}function k(F){if(d(E)===F.id){y(E,null);return}y(E,F.id,!0),y(b,F.skin??"",!0),y(M,F.cape??"",!0)}async function j(F){const X=window.__TAURI__?.dialog?.open;if(!X){y(a,"File picker unavailable in this build.");return}try{const we=await X({multiple:!1,title:F==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!we)return;y(F==="skin"?b:M,String(we),!0),y(a,"")}catch(we){y(a,String(we),!0)}}async function ee(){y(a,""),y(o,!0);try{await w("set_account_textures",{id:d(E),skin:d(b).trim()||null,cape:d(M).trim()||null}),await e.onrefresh?.(),y(E,null)}catch(F){y(a,String(F),!0)}finally{y(o,!1)}}async function le(){y(b,""),y(M,""),await ee()}function _e(F){return{offline:"Offline",microsoft:"Microsoft"}[F.account_type.type]??"Yggdrasil"}const W=Ot(()=>t().find(F=>F.id===d(E))??null);var q=gM(),Te=G(q),Le=G(Te),Fe=C(G(Le),2),ze=C(Le,2);wt(ze,20,()=>[["offline","Offline"],["microsoft","Microsoft"],["custom","Custom / Ely.by"]],al,(F,X)=>{var we=Ot(()=>$u(X,2));let Pe=()=>d(we)[0],Ae=()=>d(we)[1];var Ce=eM(),Ve=de(Ce,!0);Oe(()=>{St(Ce,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${d(r)===Pe()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),he(Ve,Ae())}),re("click",Ce,()=>{y(r,Pe(),!0),y(a,"")}),ne(F,Ce)});var Xe=C(ze,2),He=G(Xe);{var Ee=F=>{var X=nM(),we=It(X),Pe=G(we),Ae=C(Pe,2),Ce=C(we,2);{var Ve=je=>{var T=tM(),v=C(G(T),2),D=de(v,!0);Oe(()=>he(D,d(l))),ne(je,T)};Ze(Ce,je=>{d(l)&&je(Ve)})}Oe(je=>Ae.disabled=je,[()=>!d(s).trim()||d(o)]),Ji("submit",we,R),Gt(Pe,()=>d(s),je=>y(s,je)),ne(F,X)},Be=F=>{var X=lM(),we=G(X);{var Pe=v=>{var D=iM(),se=It(D);Oe(()=>se.disabled=d(o)),re("click",se,O),ne(v,D)},Ae=v=>{var D=rM();ne(v,D)},Ce=v=>{var D=aM(),se=C(G(D),2),pe=de(se,!0),ae=C(se,4),Ie=de(ae,!0),ye=C(ae,2),Y=G(ye),L=de(Y,!0),te=C(Y,2);Oe(()=>{he(pe,d(f).verification_uri),he(Ie,d(f).user_code),he(L,d(p)?"Copied ✓":"Copy code")}),re("click",Y,A),re("click",te,O),ne(v,D)},Ve=v=>{var D=sM(),se=C(It(D),2);re("click",se,()=>{y(c,"idle"),y(u,"")}),ne(v,D)};Ze(we,v=>{d(c)==="idle"?v(Pe):d(c)==="requesting"?v(Ae,1):d(c)==="code"&&d(f)?v(Ce,2):d(c)==="signedin"&&v(Ve,3)})}var je=C(we,2);{var T=v=>{var D=oM(),se=de(D,!0);Oe(()=>he(se,d(u))),ne(v,D)};Ze(je,v=>{d(u)&&v(T)})}ne(F,X)},ue=F=>{var X=cM(),we=G(X),Pe=G(we),Ae=C(Pe,2),Ce=C(we,2),Ve=C(Ce,2),je=G(Ve),T=C(G(je)),v=de(T,!0),D=C(je,2),se=C(G(D)),pe=de(se,!0),ae=C(Ve,2);Oe(Ie=>{he(v,d(m)||"none"),he(pe,d(h)||"none"),ae.disabled=Ie},[()=>!d(_).trim()||!d(x).trim()||d(o)]),Ji("submit",X,oe),Gt(Pe,()=>d(x),Ie=>y(x,Ie)),re("click",Ae,()=>y(x,$)),Gt(Ce,()=>d(_),Ie=>y(_,Ie)),re("click",je,()=>B("skin")),re("click",D,()=>B("cape")),ne(F,X)};Ze(He,F=>{d(r)==="offline"?F(Ee):d(r)==="microsoft"?F(Be,1):d(r)==="custom"&&F(ue,2)})}var U=C(He,2);{var be=F=>{var X=uM(),we=de(X,!0);Oe(()=>he(we,d(a))),ne(F,X)};Ze(U,F=>{d(a)&&F(be)})}var ge=C(U,2);wt(ge,21,t,F=>F.id,(F,X)=>{var we=pM(),Pe=G(we),Ae=G(Pe),Ce=de(Ae,!0),Ve=C(Ae,2),je=G(Ve),T=G(je),v=de(T,!0),D=C(T,2),se=de(D,!0),pe=C(D,2);{var ae=Ye=>{var N=dM();ne(Ye,N)};Ze(pe,Ye=>{i()?.id===d(X).id&&Ye(ae)})}var Ie=C(je,2),ye=de(Ie,!0),Y=C(Ve,2),L=G(Y),te=C(L,2);{var Ue=Ye=>{var N=fM();re("click",N,()=>V(d(X).id)),ne(Ye,N)};Ze(te,Ye=>{i()?.id!==d(X).id&&Ye(Ue)})}var Me=C(te,2),ve=C(Pe,2);{var We=Ye=>{var N=hM(),Ne=G(N);If(Ne,{get skin(){return d(b)},get cape(){return d(M)},width:110,height:150});var J=C(Ne,2),Se=G(J),De=C(G(Se)),Je=de(De,!0),tt=C(Se,2),st=C(G(tt)),yt=de(st,!0),fe=C(tt,2),ke=G(fe),Qe=C(ke,2);Oe(()=>{he(Je,d(b)||"default (Steve/Alex)"),he(yt,d(M)||"none"),ke.disabled=d(o)}),re("click",Se,()=>j("skin")),re("click",tt,()=>j("cape")),re("click",ke,ee),re("click",Qe,le),ne(Ye,N)};Ze(ve,Ye=>{d(E)===d(X).id&&d(W)&&Ye(We)})}Oe((Ye,N)=>{St(we,1,`border-b border-(--border) px-4 py-2.5 ${i()?.id===d(X).id?"bg-(--accent)/10":""}`),he(Ce,Ye),he(v,d(X).username),he(se,N),he(ye,d(X).uuid)},[()=>d(X).username[0]?.toUpperCase(),()=>_e(d(X))]),re("click",L,()=>k(d(X))),re("click",Me,()=>Z(d(X).id)),ne(F,we)},F=>{var X=mM();ne(F,X)}),re("click",q,F=>{F.target===F.currentTarget&&e.onclose?.()}),re("click",Fe,()=>e.onclose?.()),ne(n,q),wn()}Hn(["click"]);var _M=me('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><span class="text-3xl">👤</span> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),xM=me('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),bM=me('<p class="text-center text-[11px] text-red-400"> </p>'),yM=me("<option> </option>"),MM=me("<option>No instances yet</option>"),SM=me('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),EM=me('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),wM=me('<p class="mt-2 text-[11px] text-red-400"> </p>'),TM=me('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer">▶ Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),AM=me('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function RM(n,e){En(e,!0);let t=ft(e,"instances",19,()=>[]),i=ft(e,"active",3,null),r=ft(e,"gameRunning",3,!1),a=ft(e,"status",3,"Ready");function o($,B){const V=window.__TAURI__?.core;return V?V.invoke($,B):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let l=xe(Ct(p())),c=xe(""),u=xe(""),f=xe("");function p(){try{const $=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray($)?$:[]}catch{return[]}}function g(){localStorage.setItem(s,JSON.stringify(d(l)))}function _($){$.preventDefault(),y(f,"");const B=d(u).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(B)){y(f,"Address must be a hostname (optionally host:port).");return}y(l,[...d(l),{name:d(c).trim()||B.split(":")[0],address:B}],!0),g(),y(c,""),y(u,"")}function x($){y(l,d(l).filter((B,V)=>V!==$),!0),g()}let m=xe("");yn(()=>{d(m)&&t().some($=>$.id===d(m))||y(m,t()[0]?.id??"",!0)});const h=Ot(()=>t().find($=>$.id===d(m))?.name??"no instance selected");function E($){!d(m)||r()||e.onlaunch?.(d(m),$.address)}let b=xe(""),M=xe(!1);async function w($){const B=window.__TAURI__?.dialog?.open;if(!B){y(b,"File picker unavailable in this build.");return}try{const V=await B({multiple:!1,title:$==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!V)return;y(M,!0),y(b,""),await o("set_account_textures",{id:i().id,skin:$==="skin"?String(V):null,cape:$==="cape"?String(V):null}),await e.onrefresh?.()}catch(V){y(b,String(V),!0)}finally{y(M,!1)}}async function I(){if(i())try{y(M,!0),await o("set_account_textures",{id:i().id,skin:null,cape:null}),await e.onrefresh?.()}catch($){y(b,String($),!0)}finally{y(M,!1)}}function R($){return{offline:"Offline",microsoft:"Microsoft"}[$.account_type.type]??"Yggdrasil"}var O=AM(),S=G(O);{var A=$=>{var B=_M(),V=C(G(B),6);re("click",V,()=>e.onopenaccounts?.()),ne($,B)},oe=$=>{var B=TM(),V=G(B),Z=G(V);If(Z,{get skin(){return i().skin},get cape(){return i().cape},width:220,height:300});var k=C(Z,2),j=G(k),ee=de(j,!0),le=C(j,2),_e=de(le,!0),W=C(k,2),q=G(W),Te=C(q,2),Le=C(Te,2);{var Fe=v=>{var D=xM();Oe(()=>D.disabled=d(M)),re("click",D,I),ne(v,D)};Ze(Le,v=>{(i().cape||i().skin)&&v(Fe)})}var ze=C(W,2);{var Xe=v=>{var D=bM(),se=de(D,!0);Oe(()=>he(se,d(b))),ne(v,D)};Ze(ze,v=>{d(b)&&v(Xe)})}var He=C(V,2),Ee=G(He),Be=C(G(Ee),2),ue=G(Be);wt(ue,21,t,v=>v.id,(v,D)=>{var se=yM(),pe=de(se,!0),ae={};Oe(()=>{he(pe,d(D).name),ae!==(ae=d(D).id)&&(se.value=(se.__value=ae)??"")}),ne(v,se)},v=>{var D=MM();D.value=D.__value="",ne(v,D)}),Ws(ue);var U=C(ue,2),be=C(Be,2),ge=de(be,!0),F=C(be,2),X=de(F,!0),we=C(Ee,2),Pe=C(G(we),2);wt(Pe,19,()=>d(l),v=>v.address,(v,D,se)=>{var pe=SM(),ae=G(pe),Ie=G(ae),ye=de(Ie,!0),Y=C(Ie,2),L=de(Y,!0),te=C(ae,2),Ue=C(te,2);Oe(()=>{he(ye,d(D).name),he(L,d(D).address),te.disabled=!d(m)||r(),$e(te,"title",`Join ${d(D).address} with ${d(h)}`)}),re("click",te,()=>E(d(D))),re("click",Ue,()=>x(d(se))),ne(v,pe)},v=>{var D=EM();ne(v,D)});var Ae=C(Pe,2),Ce=G(Ae),Ve=C(Ce,2),je=C(Ae,2);{var T=v=>{var D=wM(),se=de(D,!0);Oe(()=>he(se,d(f))),ne(v,D)};Ze(je,v=>{d(f)&&v(T)})}Oe(v=>{he(ee,i().username),he(_e,v),q.disabled=d(M),Te.disabled=d(M),be.disabled=!d(m)||r(),he(ge,r()?"GAME RUNNING…":"LAUNCH GAME"),he(X,r()?a():d(h))},[()=>R(i())]),re("click",q,()=>w("skin")),re("click",Te,()=>w("cape")),Xs(ue,()=>d(m),v=>y(m,v)),re("click",U,()=>e.onopenconsole?.()),re("click",be,()=>e.onlaunch?.(d(m),null)),Ji("submit",Ae,_),Gt(Ce,()=>d(c),v=>y(c,v)),Gt(Ve,()=>d(u),v=>y(u,v)),ne($,B)};Ze(S,$=>{i()?$(oe,-1):$(A)})}ne(n,O),wn()}Hn(["click"]);var CM=me('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),PM=me('<span class="truncate text-[13px]"> </span>'),LM=me('<button><span class="w-5 shrink-0 text-center text-[15px] leading-none"> </span> <!></button>'),DM=me('<span class="truncate text-[13px]">Add Instance</span>'),IM=me('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),UM=me('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),NM=me('<button role="tab"> </button>'),OM=me('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),FM=me('<div class="mb-4 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">📂 Instance Folder</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance">⤓ Install .mrpack</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">⚙ Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"> </button></div> <!>',1),kM=me('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),BM=me('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),zM=me('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),GM=me("<div> </div>"),HM=me('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),VM=me('<p class="mt-2 text-[12px] text-red-400"> </p>'),WM=me('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),XM=me('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),jM=me('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root">♻ Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),YM=me('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="w-5 shrink-0 text-center text-[15px] leading-none">＋</span> <!></button></div> <button><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-[11px] font-bold text-(--accent)"><!></span> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!></div>');function qM(n,e){En(e,!0);let t=xe("…"),i=xe("instances"),r=xe(Ct(Wd(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));yn(()=>{jm(d(r)),localStorage.setItem("twilight-theme",d(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:ss(d(r))?"dark":"light"}).catch(()=>{})}),km();let a=xe("Ready"),o=xe(!1),s=xe(Ct(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));yn(()=>{localStorage.setItem("twilight-mode",d(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:d(s)}).catch(()=>{})});const l=[{id:"instances",label:"Instances",icon:"▦"},{id:"worlds",label:"Servers & P2P",icon:"⌗"},{id:"downloads",label:"Downloads",icon:"⤓"},{id:"settings",label:"Settings",icon:"⚙"}],c={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]};let u=xe(Ct([])),f=xe(null),p=xe(!1),g=xe(Ct([])),_=xe(!1),x=xe(""),m=xe(!1),h=xe(!1),E=xe(""),b=xe(!1),M=xe(""),w=xe(null),I=Ot(()=>d(w)?"edit":d(i)),R=xe(null),O=xe(null),S=xe(!1),A=xe(""),oe=xe(null),$=xe(""),B=xe(0),V=xe(0),Z=xe("");async function k(z,Re){return window.__TAURI__.core.invoke(z,Re)}function j(){y(r,ss(d(r))?"twilight-light":"twilight-dark",!0)}async function ee(){y(_,!0),y(x,"");try{y(g,await k("discover_java_installations"),!0)}catch(z){y(x,String(z),!0)}finally{y(_,!1)}}function le(){y(m,!0)}async function _e(){if(d(E).trim()){y(b,!0),y(M,"");try{const z=await k("install_modpack",{pathOrUrl:d(E).trim()});y(h,!1),y(E,""),await Ae(),z&&y(ge,z,!0),y(a,"Modpack installed.")}catch(z){y(M,String(z),!0)}finally{y(b,!1)}}}let W=xe(Ct([])),q=xe(!1),Te=xe(!1),Le=xe(null);yn(()=>{d(W).length,d(Le)&&(d(Le).scrollTop=d(Le).scrollHeight)});function Fe(z){d(W).push(z),d(W).length>5e3&&d(W).splice(0,d(W).length-5e3)}function ze(){y(W,[],!0)}function Xe(z){return z.stream==="stderr"||z.line.includes("/ERROR]")?"text-rose-400":z.line.includes("/WARN]")?"text-(--accent-star)":z.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function He(){const z=d(W).map(Re=>Re.line).join(`
`);try{await navigator.clipboard.writeText(z)}catch{const Re=document.createElement("textarea");Re.value=z,document.body.append(Re),Re.select(),document.execCommand("copy"),Re.remove()}}async function Ee(){if(d(Te))try{await k("kill_instance"),Fe({stream:"stdout",line:"kill requested"})}catch(z){Fe({stream:"stderr",line:String(z)})}}let Be=xe(Ct([])),ue=xe(""),U=xe(null),be=xe(""),ge=xe(null),F=xe(null),X=xe(""),we=xe(!1);function Pe(){const z=d(be).trim().toLowerCase();return z?d(Be).filter(Re=>Re.name.toLowerCase().includes(z)||Re.minecraft_version.toLowerCase().includes(z)||Re.id.toLowerCase().includes(z)):d(Be)}async function Ae(){try{y(Be,await k("scan_instances"),!0),y(ue,"")}catch(z){y(ue,String(z),!0)}}function Ce(z){y(ge,z,!0)}async function Ve(z,Re=null){if(d(Te))return;const Ke=d(Be).find(vt=>vt.id===z),gt=Ke?Ke.name:z;y(Te,!0),y(a,Re?`Running ${gt} → ${Re}…`:`Running ${gt}…`,!0),y(q,!0);try{const vt=await k("launch_instance",{instanceId:z,server:Re});Fe({stream:"stdout",line:`launcher reports exit code ${vt}`}),await Ae(),y(a,"Ready")}catch(vt){console.error("Launch failed:",vt),Fe({stream:"stderr",line:`[ERROR] Launch failed: ${vt}`}),y(a,"Launch failed")}finally{y(Te,!1),d(a)!=="Launch failed"&&y(a,"Ready")}}function je(){d(O)&&k("open_path",{path:d(O).instances_dir}).catch(z=>y(a,String(z),!0))}function T(z){d(O)&&k("open_path",{path:[d(O).instances_dir.replace(/\\/g,"/"),z].join("/")}).catch(Re=>y(a,String(Re),!0))}function v(z){y(X,""),y(F,z,!0)}async function D(z){if(!(!d(F)||d(we))){y(we,!0),y(X,"");try{await k("delete_instance",{instanceId:d(F),toTrash:z}),d(ge)===d(F)&&y(ge,null),y(F,null),await Ae(),y(a,z?"Instance moved to trash.":"Instance deleted.",!0)}catch(Re){y(X,String(Re),!0)}finally{y(we,!1)}}}const se=Ot(()=>[...new Set(d(Be).map(z=>z.group).filter(Boolean))].sort((z,Re)=>z.localeCompare(Re)));async function pe(z){if(!d(te))return;const Re=d(te).name;try{await k("set_instance_group",{instanceId:d(te).id,group:z}),await Ae(),y(a,z?`Moved ${Re} to ${z}.`:`${Re} is ungrouped.`,!0)}catch(Ke){y(a,String(Ke),!0)}}async function ae(){if(!d(te))return;const z=d(te).name;try{const Re=await k("duplicate_instance",{instanceId:d(te).id});await Ae(),y(ge,Re.id,!0),y(a,`Copied ${z}.`)}catch(Re){y(a,String(Re),!0)}}async function Ie(){if(!d(te))return;const z=window.__TAURI__?.dialog?.save;if(!z){y(a,"File picker unavailable in this build.");return}try{const Re=await z({title:"Export instance",defaultPath:`${d(te).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Re)return;const Ke=await k("export_instance_zip",{instanceId:d(te).id,destPath:Re});y(a,`Exported to ${Ke}.`)}catch(Re){y(a,String(Re),!0)}}async function ye(){if(d(te))try{const z=await k("create_desktop_shortcut",{instanceId:d(te).id});y(a,`Shortcut created: ${z}`)}catch(z){y(a,String(z),!0)}}async function Y(z,Re){y(m,!1),await Ae(),z?.id&&y(ge,z.id,!0),y(a,Re||`Instance ${z?.name??""} created.`,!0)}function L(z){y(w,z,!0)}const te=Ot(()=>d(Be).find(z=>z.id===d(ge))??null);let Ue=xe(null),Me=0;yn(()=>{const z=d(te);d(w);const Re=++Me;y(Ue,null),z&&k("list_instance_mods",{instanceId:z.id}).then(Ke=>{Re===Me&&y(Ue,Ke.length,!0)}).catch(()=>{Re===Me&&y(Ue,null)})});async function ve(){try{y(oe,await k("get_java_prefs"),!0),y($,d(oe).java_path??"",!0),y(B,d(oe).min_memory_mb,!0),y(V,d(oe).max_memory_mb,!0),y(Z,""),d(g).length===0&&await ee()}catch{}}async function We(){y(Z,"");try{await k("set_java_prefs",{javaPath:d($).trim()||null,minMemoryMb:Number(d(B))||0,maxMemoryMb:Number(d(V))||0}),y(Z,"Java settings saved.")}catch(z){y(Z,String(z),!0)}}async function Ye(){y(S,!0);try{y(O,await k("get_storage"),!0)}catch(z){y(A,String(z),!0)}finally{y(S,!1)}}async function N(z,Re){y(S,!0),y(A,"");try{await k("set_folder_dir",{kind:z,path:Re?.trim()||null}),y(O,await k("get_storage"),!0),y(A,"Folders updated."),(z==="instances"||z==="shared")&&(await Ae(),d(ge)&&!d(Be).some(Ke=>Ke.id===d(ge))&&y(ge,null))}catch(Ke){y(A,String(Ke),!0)}finally{y(S,!1)}}function Ne(z){k("open_path",{path:z}).catch(Re=>y(a,String(Re),!0))}async function J(){y(S,!0),y(A,"");try{await k("clean_staging"),y(A,"Staging cleaned.")}catch(z){y(A,String(z),!0)}finally{y(S,!1)}}async function Se(){try{y(u,await k("get_accounts"),!0),y(f,await k("get_active_account"),!0)}catch{}}function De(z){return{offline:"Offline",microsoft:"Microsoft"}[z.account_type.type]??"Yggdrasil"}Qi(()=>{const z=[],Re=Ke=>{if(Ke.key==="Escape"){const jt=sc();if(jt){jt();return}d(U)?y(U,null):d(F)?(y(F,null),y(X,"")):d(w)?y(w,null):d(ge)?y(ge,null):d(p)?y(p,!1):d(h)?y(h,!1):d(q)&&y(q,!1);return}if(d(U)||d(F)||d(p)||d(h)||d(w)||d(q)||sc()||Ke.target?.closest?.("input, textarea, select, [contenteditable]"))return;const vt=Pe();if(!vt.length)return;const kt=vt.findIndex(jt=>jt.id===d(ge));let Bt=null;if(Ke.key==="ArrowDown"||Ke.key==="ArrowRight")Bt=kt+1;else if(Ke.key==="ArrowUp"||Ke.key==="ArrowLeft")Bt=kt<0?0:kt-1;else if(Ke.key==="Enter"&&kt>=0&&document.activeElement===document.body){Ke.preventDefault(),Ve(vt[kt].id);return}Bt!=null&&vt[Bt]&&(Ke.preventDefault(),y(ge,vt[Bt].id,!0))};return window.addEventListener("keydown",Re),(async()=>{try{y(t,await k("get_version"),!0)}catch{y(t,"dev")}try{z.push(await window.__TAURI__.event.listen("launch-log",Ke=>Fe(Ke.payload))),z.push(await window.__TAURI__.event.listen("tauri://drag-drop",Ke=>{const gt=Ke.payload?.paths?.[0];gt&&gt.endsWith(".mrpack")&&(d(h)?y(E,gt,!0):y(R,gt,!0))}))}catch{}await Se(),await Ae(),await Ye();try{const Ke=await k("get_startup_launch");Ke&&d(Be).some(gt=>gt.id===Ke)&&Ve(Ke)}catch{}})(),()=>z.forEach(Ke=>Ke())});var Je=YM(),tt=G(Je),st=G(tt),yt=C(G(st),2);{var fe=z=>{var Re=CM();ne(z,Re)};Ze(yt,z=>{d(o)&&z(fe)})}var ke=C(st,2),Qe=G(ke);wt(Qe,17,()=>l,z=>z.id,(z,Re)=>{var Ke=LM(),gt=G(Ke),vt=de(gt,!0),kt=C(gt,2);{var Bt=jt=>{var xn=PM(),jn=de(xn,!0);Oe(()=>he(jn,d(Re).label)),ne(jt,xn)};Ze(kt,jt=>{d(o)&&jt(Bt)})}Oe(()=>{St(Ke,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${d(o)?"":"justify-center"} ${d(i)===d(Re).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),$e(Ke,"title",d(Re).label),he(vt,d(Re).icon)}),re("click",Ke,()=>{y(i,d(Re).id,!0),y(w,null),y(s,"launcher"),d(Re).id==="settings"&&(ve(),d(O)||Ye())}),ne(z,Ke)});var pt=C(Qe,2),bt=C(G(pt),2);{var un=z=>{var Re=DM();ne(z,Re)};Ze(bt,z=>{d(o)&&z(un)})}var Tt=C(ke,2),Qt=G(Tt),vn=G(Qt);{var ri=z=>{var Re=Ei();Oe(Ke=>he(Re,Ke),[()=>d(f).username[0]?.toUpperCase()]),ne(z,Re)},Vn=z=>{var Re=Ei("?");ne(z,Re)};Ze(vn,z=>{d(f)?z(ri):z(Vn,-1)})}var ai=C(Qt,2);{var si=z=>{var Re=IM(),Ke=G(Re),gt=de(Ke,!0),vt=C(Ke,2),kt=de(vt,!0);Oe(Bt=>{he(gt,d(f)?d(f).username:"Add account"),he(kt,Bt)},[()=>d(f)?De(d(f)):"Offline"]),ne(z,Re)};Ze(ai,z=>{d(o)&&z(si)})}var P=C(Tt,2),K=de(P,!0),ie=C(tt,2),Q=G(ie),ce=G(Q),qe=G(ce);{var nt=z=>{var Re=UM(),Ke=It(Re),gt=C(Ke,2),vt=de(gt,!0);Oe(()=>{$e(gt,"title",d(w)?.name),he(vt,d(w)?.name)}),re("click",Ke,()=>y(w,null)),ne(z,Re)},rt=z=>{var Re=OM(),Ke=It(Re),gt=de(Ke),vt=C(Ke,4);wt(vt,20,()=>[["launcher","Launcher"],["client","Client"]],al,(kt,Bt)=>{var jt=Ot(()=>$u(Bt,2));let xn=()=>d(jt)[0],jn=()=>d(jt)[1];var Tn=NM(),An=de(Tn,!0);Oe(()=>{St(Tn,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${d(s)===xn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),$e(Tn,"aria-selected",d(s)===xn()),he(An,jn())}),re("click",Tn,()=>y(s,xn(),!0)),ne(kt,Tn)}),Oe(()=>he(gt,`TwilightMC Bolide (alpha-v${d(t)??""})`)),ne(z,Re)};Ze(qe,z=>{d(I)==="edit"?z(nt):z(rt,-1)})}var at=C(ce,2),ut=de(at,!0),it=C(Q,2),ot=G(it);{var Pt=z=>{RM(z,{get instances(){return d(Be)},get active(){return d(f)},get gameRunning(){return d(Te)},get status(){return d(a)},onlaunch:Ve,onopenconsole:()=>y(q,!0),onrefresh:Se,onopenaccounts:()=>y(p,!0)})},Ut=z=>{em(z,{get instance(){return d(w)},get storage(){return d(O)},onback:()=>y(w,null),onopenconsole:()=>y(q,!0)})},_n=z=>{pg(z,{get version(){return d(t)},get storage(){return d(O)},get runtimes(){return d(g)},get scanning(){return d(_)},get javaError(){return d(x)},get storageBusy(){return d(S)},get storageMsg(){return d(A)},get javaMsg(){return d(Z)},get gameRunning(){return d(Te)},onback:()=>y(i,"instances"),onscanjava:ee,onsaveprefs:We,onsavefolder:N,onopenfolder:Ne,oncleanstaging:J,onopenurl:Re=>k("open_path",{path:Re}).catch(Ke=>y(a,String(Ke),!0)),get theme(){return d(r)},set theme(Re){y(r,Re,!0)},get javaPath(){return d($)},set javaPath(Re){y($,Re,!0)},get minMem(){return d(B)},set minMem(Re){y(B,Re,!0)},get maxMem(){return d(V)},set maxMem(Re){y(V,Re,!0)}})},Wn=z=>{var Re=FM(),Ke=It(Re),gt=G(Ke),vt=C(gt,2),kt=C(vt,2),Bt=C(kt,2),jt=C(Bt,2),xn=C(jt,4),jn=de(xn,!0),Tn=C(Ke,2);{let An=Ot(Pe);Np(Tn,{get instances(){return d(An)},get error(){return d(ue)},get query(){return d(be)},get selectedId(){return d(ge)},get gameRunning(){return d(Te)},get menuFor(){return d(U)},onselect:Ce,onplay:Ve,ontogglemenu:fn=>y(U,d(U)===fn?null:fn,!0),onedit:L,onopenfolder:T,onviewlogs:()=>y(q,!0),ondelete:v,onclosemenu:()=>y(U,null),onadd:le})}Oe((An,fn)=>{vt.disabled=!d(O),$e(vt,"title",d(O)?d(O).instances_dir:""),$e(xn,"title",An),he(jn,fn)},[()=>ss(d(r))?"Twilight Light":"Twilight Dark",()=>ss(d(r))?"☀":"☾"]),re("click",gt,le),re("click",vt,je),re("click",kt,()=>y(h,!0)),re("click",Bt,()=>{y(i,"settings"),ve(),d(O)||Ye()}),Gt(jt,()=>d(be),An=>y(be,An)),re("click",xn,j),ne(z,Re)},Ft=z=>{var Re=kM(),Ke=It(Re),gt=de(Ke,!0),vt=C(Ke,2),kt=de(vt,!0);Oe(()=>{he(gt,c[d(i)][0]),he(kt,c[d(i)][1])}),ne(z,Re)};Ze(ot,z=>{d(s)==="client"?z(Pt):d(I)==="edit"&&d(w)?z(Ut,1):d(i)==="settings"?z(_n,2):d(i)==="instances"?z(Wn,3):z(Ft,-1)})}var dt=C(it,2),Mr=G(dt),At=G(Mr),oi=G(At),es=C(oi,4);{var $i=z=>{var Re=BM();ne(z,Re)};Ze(es,z=>{d(Te)&&z($i)})}var va=C(At,2),Xt=G(va),Xn=C(Xt,2),er=C(Xn,2),dn=C(er,2);{var _a=z=>{var Re=zM();re("click",Re,()=>y(q,!1)),ne(z,Re)};Ze(dn,z=>{d(q)&&z(_a)})}var ts=C(Mr,2);wt(ts,21,()=>d(W),al,(z,Re)=>{var Ke=GM(),gt=de(Ke,!0);Oe(vt=>{St(Ke,1,`whitespace-pre-wrap break-all ${vt??""}`),he(gt,d(Re).line)},[()=>Xe(d(Re))]),ne(z,Ke)},z=>{var Re=HM();ne(z,Re)}),Gd(ts,z=>y(Le,z),()=>d(Le));var xa=C(ie,2);{var Uf=z=>{Im(z,{get instance(){return d(te)},get storage(){return d(O)},get gameRunning(){return d(Te)},get modsCount(){return d(Ue)},get groups(){return d(se)},onlaunch:()=>Ve(d(te).id),onkill:Ee,onedit:()=>L(d(te)),onchangegroup:pe,onopenfolder:()=>T(d(te).id),onexport:Ie,oncopy:ae,ondelete:()=>v(d(te).id),onshortcut:ye})};Ze(xa,z=>{d(I)==="instances"&&d(te)&&z(Uf)})}var Vl=C(xa,2);{var Nf=z=>{om(z,{get path(){return d(R)},onclose:()=>y(R,null),oninstalled:async Re=>{y(R,null),await Ae(),y(ge,Re,!0),y(a,"Modpack installed.")}})};Ze(Vl,z=>{d(R)&&z(Nf)})}var Wl=C(Vl,2);{var Of=z=>{vM(z,{get accounts(){return d(u)},get active(){return d(f)},onclose:()=>y(p,!1),onrefresh:Se})};Ze(Wl,z=>{d(p)&&z(Of)})}var Xl=C(Wl,2);{var Ff=z=>{Am(z,{get groups(){return d(se)},onclose:()=>y(m,!1),oncreated:Y})};Ze(Xl,z=>{d(m)&&z(Ff)})}var jl=C(Xl,2);{var kf=z=>{var Re=WM(),Ke=G(Re),gt=G(Ke),vt=C(G(gt),2),kt=C(gt,2),Bt=G(kt),jt=C(Bt,2),xn=C(jt,2);{var jn=en=>{var ba=VM(),Gf=de(ba,!0);Oe(()=>he(Gf,d(M))),ne(en,ba)};Ze(xn,en=>{d(M)&&en(jn)})}var Tn=C(kt,2),An=G(Tn),fn=C(An,2),ns=de(fn,!0);Oe(en=>{fn.disabled=en,he(ns,d(b)?"Installing…":"Install .mrpack")},[()=>d(b)||!d(E).trim()]),re("click",Re,en=>{en.target===en.currentTarget&&!d(b)&&y(h,!1)}),re("click",vt,()=>y(h,!1)),Ji("dragover",Bt,en=>en.preventDefault()),Ji("drop",Bt,en=>{en.preventDefault();const ba=en.dataTransfer?.files?.[0]?.path;ba&&y(E,ba,!0)}),Gt(jt,()=>d(E),en=>y(E,en)),re("click",An,()=>y(h,!1)),re("click",fn,_e),ne(z,Re)};Ze(jl,z=>{d(h)&&z(kf)})}var Bf=C(jl,2);{var zf=z=>{var Re=jM(),Ke=G(Re),gt=C(G(Ke),2),vt=C(G(gt)),kt=de(vt,!0),Bt=C(gt,2);{var jt=fn=>{var ns=XM(),en=de(ns,!0);Oe(()=>he(en,d(X))),ne(fn,ns)};Ze(Bt,fn=>{d(X)&&fn(jt)})}var xn=C(Bt,2),jn=G(xn),Tn=C(jn,2),An=C(Tn,2);Oe(()=>{he(kt,d(F)),jn.disabled=d(we),Tn.disabled=d(we),An.disabled=d(we)}),re("click",Re,fn=>{fn.target===fn.currentTarget&&!d(we)&&y(F,null)}),re("click",jn,()=>y(F,null)),re("click",Tn,()=>D(!0)),re("click",An,()=>D(!1)),ne(z,Re)};Ze(Bf,z=>{d(F)&&z(zf)})}Oe(()=>{St(tt,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${d(o)?"w-60":"w-16"}`),St(pt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${d(o)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),St(Tt,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${d(o)?"":"justify-center"}`),$e(Tt,"title",d(f)?d(f).username:"Add account"),St(P,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${d(o)?"":"opacity-0 group-hover/nav:opacity-100"}`),he(K,d(o)?"«":"»"),he(ut,d(a)),St(dt,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${d(q)?"h-48":"h-10"}`),$e(At,"title",d(q)?"Collapse console":"Expand console"),St(oi,1,`h-2 w-2 shrink-0 rounded-full ${d(Te)?"animate-pulse bg-green-500":"bg-(--border)"}`),Xt.disabled=!d(W).length,Xn.disabled=!d(W).length,er.disabled=!d(Te)}),re("dblclick",st,()=>y(o,!d(o))),re("click",pt,le),re("click",Tt,()=>y(p,!0)),re("click",P,()=>y(o,!d(o))),re("click",At,()=>y(q,!d(q))),re("click",Xt,z=>{z.stopPropagation(),ze()}),re("click",Xn,z=>{z.stopPropagation(),He()}),re("click",er,z=>{z.stopPropagation(),Ee()}),ne(n,Je),wn()}Hn(["dblclick","click"]);cp(qM,{target:document.getElementById("app")});
