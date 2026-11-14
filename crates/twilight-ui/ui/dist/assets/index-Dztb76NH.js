(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Qu=!1;var Zs=Array.isArray,Yf=Array.prototype.indexOf,za=Array.prototype.includes,Js=Array.from,$u=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,qf=Object.getOwnPropertyDescriptors,Kf=Object.prototype,Zf=Array.prototype,ed=Object.getPrototypeOf,Kl=Object.isExtensible;const Jf=()=>{};function Qf(n){for(var e=0;e<n.length;e++)n[e]()}function td(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}function nd(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const i of n)if(t.push(i),t.length===e)break;return t}const un=2,na=4,Qs=8,id=1<<24,Qn=16,ii=32,Ji=64,Jo=128,bl=256,ti=512,Kt=1024,Et=2048,Dn=4096,_n=8192,nn=16384,fa=32768,Ga=1<<25,ia=65536,ks=1<<17,$f=1<<18,ha=1<<19,eh=1<<20,li=1<<25,Bs=1<<21,Zr=1<<22,Yi=1<<23,hr=Symbol("$state"),rd=Symbol("component"),th=Symbol("legacy props"),nh=Symbol(""),ad=Symbol("attributes"),Qo=Symbol("class"),$o=Symbol("style"),el=Symbol("text"),Is=Symbol("form reset"),Ja=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},ih=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),rh=1,ah=2,sd=4,sh=8,oh=16,lh=1,ch=4,uh=8,dh=16,fh=1,hh=2,od={},qt=Symbol("uninitialized"),ph="http://www.w3.org/1999/xhtml";function mh(){console.warn("https://svelte.dev/e/derived_inert")}function gh(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function vh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ld(n){return n===this.v}function _h(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function cd(n){return!_h(n,this.v)}function ud(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function xh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function bh(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function yh(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Mh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Sh(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Eh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function wh(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Th(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ah(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Rh(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ch(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Ph=!1,rn=null;function ra(n){rn=n}function En(n,e=!1,t){rn={p:rn,i:!1,c:null,e:null,s:n,x:null,r:_t,l:null}}function wn(n){var e=rn,t=e.e;if(t!==null){e.e=null;for(var i of t)Cd(i)}return e.i=!0,rn=e.p,yl(n)}function yl(n={}){return $u(n,rd,{value:!0}),n}function dd(){return!0}let ur=[];function fd(){var n=ur;ur=[],Qf(n)}function Ti(n){if(ur.length===0&&!Oa){var e=ur;queueMicrotask(()=>{e===ur&&fd()})}ur.push(n)}function Lh(){for(;ur.length>0;)fd()}const Dh=-7169;function Gt(n,e){n.f=n.f&Dh|e}function Ml(n){(n.f&ti)!==0||n.deps===null?Gt(n,Kt):Gt(n,Dn)}function hd(n,e){(n.f&Et)!==0?e.set(n,Et):(n.f&Dn)!==0&&e.get(n)!==Et&&e.set(n,Dn),Gt(n,Kt)}let Zl=!1;function Ih(){Zl||(Zl=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e[Is]?.()})},{capture:!0}))}function pa(n){var e=pt,t=_t;Hn(null),di(null);try{return n()}finally{Hn(e),di(t)}}function pd(n,e,t,i=t){n.addEventListener(e,()=>pa(t));const r=n[Is];r?n[Is]=()=>{r(),i(!0)}:n[Is]=()=>i(!0),Ih()}function Uh(n,e,t,i){const r=Ha;var a=n.filter(g=>!g.settled),o=e.map(r);if(t.length===0&&a.length===0){i(o);return}var s=_t,l=Nh(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function u(g){if((s.f&nn)===0){l();try{i([...o,...g])}catch(_){oi(_,s)}zs()}}var f=md();if(t.length===0){c.then(()=>u([])).finally(f);return}function p(){Promise.all(t.map(g=>Oh(g))).then(u).catch(g=>oi(g,s)).finally(f)}c?c.then(()=>{if((s.f&nn)!==0){f();return}l(),p(),zs()}):p()}function Nh(){var n=_t,e=pt,t=rn,i=ot;return function(a=!0){di(n),Hn(e),ra(t),a&&(n.f&nn)===0&&(i?.activate(),i?.apply())}}function zs(n=!0){di(null),Hn(null),ra(null),n&&ot?.deactivate()}function md(){var n=_t,e=n.b,t=ot,i=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(i,n),()=>{e?.update_pending_count(-1,t),t.decrement(i,n)}}function Ha(n){var e=un|Et;return _t!==null&&(_t.f|=ha),{ctx:rn,deps:null,effects:null,equals:ld,f:e,fn:n,reactions:null,rv:0,v:qt,wv:0,parent:_t,ac:null}}const Da=Symbol("obsolete");function Oh(n,e,t){let i=_t;i===null&&xh();var r=void 0,a=br(qt),o=!pt,s=new Set;return Jh(()=>{var l=_t,c=td();r=c.promise;try{Promise.resolve(n()).then(c.resolve,g=>{g!==Ja&&c.reject(g)}).finally(zs)}catch(g){c.reject(g),zs()}var u=ot;if(o){if((l.f&fa)!==0)var f=md();if(i.b?.is_rendered())u.async_deriveds.get(l)?.reject(Da);else for(const g of s.values())g.reject(Da);s.add(c),u.async_deriveds.set(l,c)}const p=(g,_=void 0)=>{f?.(),s.delete(c),_!==Da&&(u.activate(),_?(a.f|=Yi,aa(a,_)):((a.f&Yi)!==0&&(a.f^=Yi),aa(a,g)),u.deactivate())};c.promise.then(p,g=>p(null,g||"unknown"))}),Al(()=>{for(const l of s)l.reject(Da)}),new Promise(l=>{function c(u){function f(){u===r?l(a):c(r)}u.then(f,f)}c(r)})}function Ft(n){const e=Ha(n);return Nd(e),e}function gd(n){const e=Ha(n);return e.equals=cd,e}function Fh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Mn(e[t])}}function Sl(n){var e,t=_t,i=n.parent;if(!Di&&i!==null&&n.v!==qt&&(i.f&(nn|_n))!==0)return mh(),n.v;di(i);try{Fh(n),e=Bd(n)}finally{di(t)}return e}function vd(n){var e=Sl(n);if(!n.equals(e)&&(n.wv=Fd(),(!ot?.is_fork||n.deps===null)&&(ot!==null?(ot.capture(n,e,!0),Jr?.capture(n,e,!0)):n.v=e,n.deps===null))){Gt(n,Kt);return}Di||($n!==null?(Tl()||ot?.is_fork)&&$n.set(n,e):Ml(n))}function kh(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&pa(()=>{e.ac.abort(Ja),e.ac=null}),e.fn!==null&&(e.teardown=Jf),Wa(e,0),Pl(e))}function _d(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&sa(e)}let lo=null,Er=null,ot=null,Jr=null,$n=null,tl=null,Oa=!1,co=!1,Fa=null,Us=null;var Jl=0;let Bh=1;class Qi{id=Bh++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Er===null?lo=Er=this:(Er.next=this,this.prev=Er),Er=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#v(e))return!0;return!1}#v(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=this.#o.get(e);if(i){this.#o.delete(e);for(var r of i.d)Gt(r,Et),t(r);for(r of i.m)Gt(r,Dn),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&nn)!==0||(a.f&(Et|Dn))===0)){for(var t=a,i=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(Ji|ii))!==0){if((r&Kt)===0){i=!0;break}t.f^=Kt}}i||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,l]of this.#r)Gt(s,l),this.schedule(s);this.apply();for(var e=Fa=[],t=[],i=Us=[];this.#i.length>0;){Jl++>1e3&&(this.#f(),Gh());for(const s of this.#u())try{this.#x(s,e,t)}catch(l){throw yd(s),this.#p()||this.discard(),l}}if(ot=null,i.length>0){var r=Qi.ensure();for(const s of i)r.schedule(s)}if(Fa=null,Us=null,this.#p()){this.#g(t),this.#g(e);for(const[s,l]of this.#o)bd(s,l);i.length>0&&ot.#m();return}const a=this.#M();if(a){this.#g(t),this.#g(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),Jr=this,Ql(t),Ql(e),Jr=null,this.#n?.resolve();var o=ot;this.#e===0&&(this.#i.length===0||o!==null)&&this.#f(),o!==null&&(ci.clear(),o.#m())}#x(e,t,i){e.f^=Kt;for(var r=e.first;r!==null;){var a=r.f,o=(a&(ii|Ji))!==0,s=o&&(a&Kt)!==0,l=s||(a&_n)!==0||this.#o.has(r);if(!l&&r.fn!==null){o?r.f^=Kt:(a&na)!==0?t.push(r):$a(r)&&((a&Qn)!==0&&this.add_dirty_reaction(r,Dn),sa(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}}#M(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,i]]of this.current)if(!i&&e.current.has(t))return!0;return!1}#d(e){for(const[i,r]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,r);for(const[i,r]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=i=>{var r=i.reactions;if(r!==null&&!((i.f&un)!==0&&(i.f&(Et|Dn))===0))for(const s of r){var a=s.f;if((a&un)!==0)t(s);else{var o=s;a&(Zr|Qn)&&!this.async_deriveds.has(o)&&(this.#r.delete(o),Gt(o,Et),this.schedule(o))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),e.#f(),ot=this,this.#m()}#g(e){for(var t=0;t<e.length;t+=1)hd(e[t],this.#r)}capture(e,t,i=!1){e.v!==qt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Yi)===0&&(this.current.set(e,[t,i]),$n?.set(e,t)),this.is_fork||(e.v=t)}activate(){ot=this}deactivate(){ot=null,$n=null}flush(){try{co=!0,ot=this,this.#m()}finally{Jl=0,tl=null,Fa=null,Us=null,co=!1,ot=null,$n=null,ci.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Da);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let f=lo;f!==null;f=f.next){var e=f.id<this.id,t=[];for(const[p,[g,_]]of this.current){if(f.current.has(p)){var i=f.current.get(p)[0];if(e&&g!==i)f.current.set(p,[g,_]);else continue}t.push(p)}if(e)for(const[p,g]of this.async_deriveds){const _=f.async_deriveds.get(p);_&&g.promise.then(_.resolve).catch(_.reject)}var r=[...f.current.keys()].filter(p=>!f.current.get(p)[1]);if(!(!f.started||r.length===0)){var a=r.filter(p=>!this.current.has(p));if(a.length===0)e&&f.discard();else if(t.length>0){if(e)for(const p of this.#h)f.unskip_effect(p,g=>{(g.f&(Qn|Zr))!==0?f.schedule(g):f.#g([g])});f.activate();var o=new Set,s=new Map;for(var l of t)xd(l,a,o,s);s=new Map;var c=[...f.current].filter(([p,g])=>{const _=this.current.get(p);return _?_[0]!==g[0]||_[1]!==g[1]:!0}).map(([p])=>p);if(c.length>0)for(const p of this.#a)(p.f&(nn|_n|ks))===0&&El(p,c,s)&&((p.f&(Zr|Qn))!==0?(Gt(p,Et),f.schedule(p)):f.add_dirty_reaction(p,Et));if(f.#i.length>0&&!f.#c){f.apply();for(var u of f.#u())f.#x(u,[],[])}f.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let i=this.#s.get(t)??0;this.#s.set(t,i+1)}}decrement(e,t){if(this.#e-=1,e){let i=this.#s.get(t)??0;i===1?this.#s.delete(t):this.#s.set(t,i-1)}this.#c||(this.#c=!0,Ti(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,i]of e)this.add_dirty_reaction(t,i);e.clear()}add_dirty_reaction(e,t){(t===Et||this.#r.get(e)!==Et)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=td()).promise}static ensure(){if(ot===null){const e=ot=new Qi;!co&&!Oa&&Ti(()=>{e.started||e.flush()})}return ot}apply(){{$n=null;return}}schedule(e){if(tl=e,e.b?.is_pending&&(e.f&(na|Qs|id))!==0&&(e.f&fa)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?lo=t:e.next=t,t===null?Er=e:t.prev=e,this.linked=!1}}}function zh(n){var e=Oa,t=Jr;Jr=null,Oa=!0;try{for(var i;;){if(Lh(),ot===null)return i;ot.flush()}}finally{Oa=e,Jr=t}}function Gh(){try{Eh()}catch(n){oi(n,tl)}}let Si=null;function Ql(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(nn|_n))===0&&$a(i)&&(Si=new Set,sa(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Dd(i),Si?.size>0)){ci.clear();for(const r of Si){if((r.f&(nn|_n))!==0)continue;const a=[r];let o=r.parent;for(;o!==null;)Si.has(o)&&(Si.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const l=a[s];(l.f&(nn|_n))===0&&sa(l)}}Si.clear()}}Si=null}}function xd(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const a=r.f;(a&un)!==0?xd(r,e,t,i):(a&(Zr|Qn))!==0&&(a&Et)===0&&El(r,e,i)&&(Gt(r,Et),wl(r))}}function El(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(za.call(e,r))return!0;if((r.f&un)!==0&&El(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function wl(n){ot.schedule(n)}function bd(n,e){if(!((n.f&ii)!==0&&(n.f&Kt)!==0)){(n.f&Et)!==0?e.d.push(n):(n.f&Dn)!==0&&e.m.push(n),Gt(n,Kt);for(var t=n.first;t!==null;)bd(t,e),t=t.next}}function yd(n){Gt(n,Kt);for(var e=n.first;e!==null;)yd(e),e=e.next}let Gs=new Set;const ci=new Map;let Md=!1;function br(n,e){var t={f:0,v:n,reactions:null,equals:ld,rv:0,wv:0};return t}function xe(n,e){const t=br(n);return Nd(t),t}function Hh(n,e=!1,t=!0){const i=br(n);return e||(i.equals=cd),i}function y(n,e,t=!1){pt!==null&&(!ei||(pt.f&ks)!==0)&&dd()&&(pt.f&(un|Qn|Zr|ks))!==0&&(ui===null||!ui.has(n))&&Rh();let i=t?Rt(e):e;return aa(n,i,Us)}var lr=null,nl=0;function aa(n,e,t=null){if(!n.equals(e)){Di?ci.set(n,e):ci.has(n)||ci.set(n,n.v);var i=Qi.ensure();if(i.capture(n,e),(n.f&un)!==0){const r=n;(n.f&Et)!==0&&Sl(r),$n===null&&Ml(r)}n.wv=Fd(),lr=null,nl=0,Sd(n,Et,t),lr=null,_t!==null&&(_t.f&Kt)!==0&&(_t.f&(ii|Ji))===0&&(Fn===null?ep([n]):Fn.push(n)),!i.is_fork&&Gs.size>0&&!Md&&Vh()}return e}function Vh(){Md=!1;for(const n of Gs){(n.f&Kt)!==0&&Gt(n,Dn);let e;try{e=$a(n)}catch{e=!0}e&&sa(n)}Gs.clear()}function ka(n){y(n,n.v+1)}function Sd(n,e,t){var i=n.reactions;if(i!==null){var r=i.length;if(nl+=r,nl>1e5&&lr===null&&(lr=new Set),lr!==null){if(lr.has(n))return;lr.add(n)}for(var a=0;a<r;a++){var o=i[a],s=o.f,l=(s&Et)===0;if(l&&Gt(o,e),(s&ks)!==0)Gs.add(o);else if((s&un)!==0){var c=o;$n?.delete(c),Sd(c,Dn,t)}else if(l){var u=o;(s&Qn)!==0&&Si!==null&&Si.add(u),t!==null?t.push(u):wl(u)}}}}function Rt(n){if(typeof n!="object"||n===null||hr in n||rd in n)return n;const e=ed(n);if(e!==Kf&&e!==Zf)return n;var t=new Map,i=Zs(n),r=xe(0),a=mr,o=s=>{if(mr===a)return s();var l=pt,c=mr;Hn(null),nc(a);var u=s();return Hn(l),nc(c),u};return i&&t.set("length",xe(n.length)),new Proxy(n,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Th();var u=t.get(l);return u===void 0?o(()=>{var f=xe(c.value);return t.set(l,f),f}):y(u,c.value,!0),!0},deleteProperty(s,l){var c=t.get(l);if(c===void 0){if(l in s){const u=o(()=>xe(qt));t.set(l,u),ka(r)}}else y(c,qt),ka(r);return!0},get(s,l,c){if(l===hr)return n;var u=t.get(l),f=l in s;if(u===void 0&&(!f||Kr(s,l)?.writable)&&(u=o(()=>{var g=Rt(f?s[l]:qt),_=xe(g);return _}),t.set(l,u)),u!==void 0){var p=d(u);return p===qt?void 0:p}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){this.has?.(s,l);var c=Reflect.getOwnPropertyDescriptor(s,l),u=t.get(l);if(u!==void 0){var f=d(u);if(f===qt)return;if(c&&"value"in c)c.value=f;else return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(s,l){if(l===hr)return!0;var c=t.get(l),u=c!==void 0&&c.v!==qt||Reflect.has(s,l);if(c!==void 0||(_t!==null||pt!==null)&&(!u||Kr(s,l)?.writable)){c===void 0&&(c=o(()=>{var p=u?Rt(s[l]):qt,g=xe(p);return g}),t.set(l,c));var f=d(c);if(f===qt)return!1}return u},set(s,l,c,u){var f=t.get(l),p=l in s;if(i&&l==="length")for(var g=c;g<f.v;g+=1){var _=t.get(g+"");_!==void 0?y(_,qt):g in s&&(_=o(()=>xe(qt)),t.set(g+"",_))}if(f===void 0)(!p||Kr(s,l)?.writable)&&(f=o(()=>xe(void 0)),y(f,Rt(c)),t.set(l,f));else{p=f.v!==qt;var x=o(()=>Rt(c));y(f,x)}var m=Reflect.getOwnPropertyDescriptor(s,l);if(m?.set&&m.set.call(u,c),!p){if(i&&typeof l=="string"){var h=t.get("length"),E=Number(l);Number.isInteger(E)&&E>=h.v&&y(h,E+1)}ka(r)}return!0},ownKeys(s){d(r);var l=Reflect.ownKeys(s).filter(f=>{var p=t.get(f);return p===void 0||p.v!==qt});for(var[c,u]of t)u.v!==qt&&!(c in s)&&l.push(c);return l},setPrototypeOf(){Ah()}})}function $l(n){try{if(n!==null&&typeof n=="object"&&hr in n)return n[hr]}catch{}return n}function Ed(n,e){return Object.is($l(n),$l(e))}var ec,wd,Td,Ad;function Wh(){if(ec===void 0){ec=window,wd=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Td=Kr(e,"firstChild").get,Ad=Kr(e,"nextSibling").get,Kl(n)&&(n[Qo]=void 0,n[ad]=null,n[$o]=void 0,n.__e=void 0),Kl(t)&&(t[el]=void 0)}}function Ci(n=""){return document.createTextNode(n)}function Va(n){return Td.call(n)}function Qa(n){return Ad.call(n)}function z(n,e){return Va(n)}function Pt(n,e=!1){{var t=Va(n);return t instanceof Comment&&t.data===""?Qa(t):t}}function pe(n,e=!1){return Va(n)}function C(n,e=1,t=!1){let i=n;for(;e--;)i=Qa(i);return i}function Xh(n){n.textContent=""}function Rd(){return!1}function jh(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function Yh(n){var e=_t;if(e===null)return pt.f|=Yi,n;if((e.f&fa)===0&&(e.f&na)===0)throw n;oi(n,e)}function oi(n,e){if(n===od)throw n;if(!(e!==null&&(e.f&nn)!==0)){for(;e!==null;){if((e.f&Jo)!==0&&(e.f&(nn|Ga))===0){if((e.f&fa)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function qh(n){_t===null&&(pt===null&&Sh(),Mh()),Di&&yh()}function Kh(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Ni(n,e){var t=_t;t!==null&&(t.f&_n)!==0&&(n|=_n);var i={ctx:rn,deps:null,nodes:null,f:n|Et|ti,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};ot?.register_created_effect(i);var r=i;if((n&na)!==0)Fa!==null?Fa.push(i):Qi.ensure().schedule(i);else if(e!==null){try{sa(i)}catch(o){throw Mn(i),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&ha)===0&&(r=r.first,(n&Qn)!==0&&(n&ia)!==0&&r!==null&&(r.f|=ia))}if(r!==null&&(r.parent=t,t!==null&&Kh(r,t),pt!==null&&(pt.f&un)!==0&&(n&Ji)===0)){var a=pt;(a.effects??=[]).push(r)}return i}function Tl(){return pt!==null&&!ei}function Al(n){const e=Ni(Qs,null);return Gt(e,Kt),e.teardown=n,e}function In(n){qh();var e=_t.f,t=!pt&&(e&ii)!==0&&rn!==null&&!rn.i;if(t){var i=rn;(i.e??=[]).push(n)}else return Cd(n)}function Cd(n){return Ni(na|eh,n)}function Zh(n){Qi.ensure();const e=Ni(Ji|ha,n);return(t={})=>new Promise(i=>{t.outro?pr(e,()=>{Mn(e),i(void 0)}):(Mn(e),i(void 0))})}function Pd(n){return Ni(na,n)}function Jh(n){return Ni(Zr|ha,n)}function Rl(n,e=0){return Ni(Qs|e,n)}function Fe(n,e=[],t=[],i=[]){Uh(i,e,t,r=>{Ni(Qs,()=>{n(...r.map(d))})})}function Cl(n,e=0){var t=Ni(Qn|e,n);return t}function kn(n){return Ni(ii|ha,n)}function Ld(n){var e=n.teardown;if(e!==null){const t=Di,i=pt;tc(!0),Hn(null);try{e.call(null)}catch(r){oi(r,n.parent)}finally{tc(t),Hn(i)}}}function Pl(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&pa(()=>{r.abort(Ja)});var i=t.next;(t.f&Ji)!==0?t.parent=null:Mn(t,e),t=i}}function Qh(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&ii)===0&&Mn(e),e=t}}function Mn(n,e=!0){var t=!1;(e||(n.f&$f)!==0)&&n.nodes!==null&&n.nodes.end!==null&&($h(n.nodes.start,n.nodes.end),t=!0),n.f|=Ga,Pl(n,e&&!t),Wa(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)a.stop();Ld(n),n.f^=Ga,n.f|=nn;var r=n.parent;r!==null&&r.first!==null&&Dd(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function $h(n,e){for(;n!==null;){var t=n===e?null:Qa(n);n.remove(),n=t}}function Dd(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function pr(n,e,t=!0){var i=[];n.f|=bl,Id(n,i,!0);var r=()=>{t&&Mn(n),e&&e()},a=i.length;if(a>0){var o=()=>--a||r();for(var s of i)s.out(o)}else r()}function Id(n,e,t){if((n.f&_n)===0){n.f^=_n;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&e.push(s);for(var r=n.first;r!==null;){var a=r.next;if((r.f&Ji)===0){var o=(r.f&ia)!==0||(r.f&ii)!==0&&(n.f&Qn)!==0;Id(r,e,o?t:!1)}r=a}}}function Hs(n){n.f&=~bl,Ud(n,!0)}function Ud(n,e){if((n.f&bl)===0&&(n.f&_n)!==0){n.f^=_n,(n.f&Kt)===0&&(Gt(n,Et),Qi.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&ia)!==0||(t.f&ii)!==0;Ud(t,r?e:!1),t=i}var a=n.nodes&&n.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function Ll(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Qa(t);e.append(t),t=r}}let Di=!1;function tc(n){Di=n}let pt=null,ei=!1;function Hn(n){pt=n}let _t=null;function di(n){_t=n}let ui=null;function Nd(n){pt!==null&&((pt.f&Bs)!==0||(pt.f&un)!==0)&&(ui??=new Set).add(n)}let yn=null,Pn=0,Fn=null;function ep(n){Fn=n}let Od=1,dr=0,mr=dr;function nc(n){mr=n}function Fd(){return++Od}function $a(n){var e=n.f;if((e&Et)!==0)return!0;if((e&Dn)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var a=t[r];if($a(a)&&vd(a),a.wv>n.wv)return!0}(e&ti)!==0&&$n===null&&Gt(n,Kt)}return!1}function kd(n,e,t=!0){var i=n.reactions;if(i!==null&&!(ui!==null&&ui.has(n)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&un)!==0?kd(a,e,!1):e===a&&(t?Gt(a,Et):(a.f&Kt)!==0&&Gt(a,Dn),wl(a))}}function Bd(n){var e=yn,t=Pn,i=Fn,r=pt,a=ui,o=rn,s=ei,l=mr,c=n.f;yn=null,Pn=0,Fn=null,pt=(c&(ii|Ji))===0?n:null,ui=null,ra(n.ctx),ei=!1,mr=++dr,n.ac!==null&&(pa(()=>{n.ac.abort(Ja)}),n.ac=null);try{n.f|=Bs;var u=n.fn,f=u();n.f|=fa;var p=ic(n);if(dd()&&Fn!==null&&!ei&&p!==null&&(n.f&(un|Dn|Et))===0)for(var g=0;g<Fn.length;g++)kd(Fn[g],n);if(r!==null&&r!==n){if(dr++,r.deps!==null)for(let _=0;_<t;_+=1)r.deps[_].rv=dr;if(e!==null)for(const _ of e)_.rv=dr;Fn!==null&&(i===null?i=Fn:i.push(...Fn))}return(n.f&Yi)!==0&&(n.f^=Yi),f}catch(_){return ic(n),Yh(_)}finally{n.f^=Bs,yn=e,Pn=t,Fn=i,pt=r,ui=a,ra(o),ei=s,mr=l}}function ic(n){var e=n.deps,t=ot?.is_fork;if(yn!==null){var i;if(t||Wa(n,Pn),e!==null&&Pn>0)for(e.length=Pn+yn.length,i=0;i<yn.length;i++)e[Pn+i]=yn[i];else n.deps=e=yn;if(Tl()&&(n.f&ti)!==0)for(i=Pn;i<e.length;i++)(e[i].reactions??=[]).push(n)}else!t&&e!==null&&Pn<e.length&&(Wa(n,Pn),e.length=Pn);return e}function tp(n,e){let t=e.reactions;if(t!==null){var i=Yf.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&un)!==0&&(yn===null||!za.call(yn,e))){var a=e;(a.f&ti)!==0&&(a.f^=ti),a.v!==qt&&Ml(a),a.ac!==null&&pa(()=>{a.ac.abort(Ja),a.ac=null,Gt(a,Et)}),kh(a),Wa(a,0)}}function Wa(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)tp(n,t[i])}function sa(n){var e=n.f;if((e&nn)===0){Gt(n,Kt);var t=_t;_t=n;try{(e&(Qn|id))!==0?Qh(n):Pl(n),Ld(n);var i=Bd(n);n.teardown=typeof i=="function"?i:null,n.wv=Od;var r;Qu&&Ph&&(n.f&Et)!==0&&n.deps}finally{_t=t}}}async function np(){await Promise.resolve(),zh()}function d(n){var e=n.f,t=(e&un)!==0;if(pt!==null&&!ei){var i=_t!==null&&(_t.f&nn)!==0;if(!i&&(ui===null||!ui.has(n))){var r=pt.deps;if((pt.f&Bs)!==0)n.rv<dr&&(n.rv=dr,yn===null&&r!==null&&r[Pn]===n?Pn++:yn===null?yn=[n]:yn.push(n));else{pt.deps??=[],za.call(pt.deps,n)||pt.deps.push(n);var a=n.reactions;a===null?n.reactions=[pt]:za.call(a,pt)||a.push(pt)}}}if(Di&&ci.has(n))return ci.get(n);if(t){var o=n;if(Di){var s=o.v;return((o.f&Kt)===0&&o.reactions!==null||Gd(o))&&(s=Sl(o)),ci.set(o,s),s}var l=(o.f&ti)===0&&!ei&&pt!==null&&(pt.f&ti)!==0,c=(o.f&fa)===0;$a(o)&&(l&&(o.f|=ti),vd(o)),l&&!c&&(_d(o),zd(o))}if($n?.has(n))return $n.get(n);if((n.f&Yi)!==0)throw n.v;return n.v}function zd(n){if(n.f|=ti,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:za.call(e,n)||e.push(n),(t.f&un)!==0&&(t.f&ti)===0&&(_d(t),zd(t))}}function Gd(n){if(n.v===qt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(ci.has(e)||(e.f&un)!==0&&Gd(e))return!0;return!1}function ma(n){var e=ei;try{return ei=!0,n()}finally{ei=e}}const ip=["touchstart","touchmove"];function rp(n){return ip.includes(n)}const Ia=Symbol("events"),Hd=new Set,il=new Set;function ap(n,e,t,i={}){function r(a){if(i.capture||rl.call(e,a),!a.cancelBubble)return pa(()=>t?.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(r.__removed=!1,Ti(()=>{r.__removed||e.addEventListener(n,r,i)})):e.addEventListener(n,r,i),r}function $i(n,e,t,i,r){var a={capture:i,passive:r},o=ap(n,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Al(()=>{o.__removed=!0,e.removeEventListener(n,o,a)})}function ae(n,e,t){(e[Ia]??={})[n]=t}function Vn(n){for(var e=0;e<n.length;e++)Hd.add(n[e]);for(var t of il)t(n)}let uo=null,fo=!1;function rl(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],a=r[0]||n.target;uo=n,fo||(fo=!0,setTimeout(()=>{fo=!1,uo=null}));var o=0,s=uo===n&&n[Ia];if(s){var l=r.indexOf(s);if(l!==-1&&(e===document||e===window)){n[Ia]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(a=r[o]||n.target,a!==e){$u(n,"currentTarget",{configurable:!0,get(){return a||t}});var u=pt,f=_t;Hn(null),di(null);try{for(var p,g=[];a!==null&&a!==e;){try{var _=a[Ia]?.[i];_!=null&&(!a.disabled||n.target===a)&&_.call(a,n)}catch(x){p?g.push(x):p=x}if(n.cancelBubble)break;o++,a=o<r.length?r[o]:null}if(p){for(let x of g)queueMicrotask(()=>{throw x});throw p}}finally{n[Ia]=e,delete n.currentTarget,Hn(u),di(f)}}}const sp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function op(n){return sp?.createHTML(n)??n}function lp(n){var e=jh("template");return e.innerHTML=op(n.replaceAll("<!>","<!---->")),e.content}function Vs(n,e){var t=_t;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function _e(n,e){var t=(e&fh)!==0,i=(e&hh)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=lp(a?n:"<!>"+n),t||(r=Va(r)));var o=i||wd?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=Va(o),l=o.lastChild;Vs(s,l)}else Vs(o,o);return o}}function Ei(n=""){{var e=Ci(n+"");return Vs(e,e),e}}function cp(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Ci();return n.append(e,t),Vs(e,t),n}function re(n,e){n!==null&&n.before(e)}function up(n){let e=0,t=br(0),i;return()=>{Tl()&&(d(t),Rl(()=>(e===0&&(i=ma(()=>n(()=>ka(t)))),e+=1,()=>{Ti(()=>{e-=1,e===0&&(i?.(),i=void 0,ka(t))})})))}}var dp=ia|ha;function fp(n,e,t,i){new hp(n,e,t,i)}class hp{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#v=new Map;#u=null;#m=up(()=>(this.#u=br(this.#h),()=>{this.#u=null}));constructor(e,t,i,r){this.#t=e,this.#e=t,this.#s=a=>{var o=_t;o.b=this,o.f|=Jo,i(a)},this.parent=_t.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=Cl(()=>{this.#b()},dp)}#x(){try{this.#i=kn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#M(e){const t=this.#e.failed,{reset:i,invoke_onerror:r}=this.#_(e);Ti(r),t&&(this.#r=kn(()=>{t(this.#t,()=>e,()=>i)}))}#_(e){var t=!1,i=!1;const r=()=>{if(!this.#d()){if(t){vh();return}t=!0,i&&Ch(),this.#r!==null&&pr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{i=!0,this.#e.onerror?.(e,r),i=!1}catch(o){oi(o,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(nn|Ga))!==0}#g(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=kn(()=>e(this.#t)),Ti(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),i=Ci(),r=!1;if(t.append(i),this.#i=this.#y(()=>{try{return kn(()=>this.#s(i))}catch(a){try{this.error(a),r=!0}catch(o){oi(o,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(ot);return}this.#c===0&&(this.#t.before(t),this.#o=null,pr(this.#a,()=>{this.#a=null}),this.#f(ot))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=kn(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();Ll(this.#i,e);const t=this.#e.pending;this.#a=kn(()=>t(this.#t))}else this.#f(ot)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#v)}defer_effect(e){hd(e,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=_t,i=pt,r=rn;di(this.#n),Hn(this.#n),ra(this.#n.ctx);try{return Qi.ensure(),e()}finally{di(t),Hn(i),ra(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&pr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#S(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Ti(()=>{this.#p=!1,this.#u&&aa(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),d(this.#u)}error(e){if(e===od||!this.#e.onerror&&!this.#e.failed)throw e;ot?.is_fork?(this.#i&&ot.skip_effect(this.#i),this.#a&&ot.skip_effect(this.#a),this.#r&&ot.skip_effect(this.#r),ot.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(Mn(this.#i),this.#i=null),this.#a&&(Mn(this.#a),this.#a=null),this.#r&&(Mn(this.#r),this.#r=null);let t=this.#e.failed;const i=r=>{if(this.#d())return;const{reset:a,invoke_onerror:o}=this.#_(r);o(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return kn(()=>{var s=_t;s.b=this,s.f|=Jo,t(this.#t,()=>r,()=>a)})}catch(s){return oi(s,this.#n.parent),null}}))};Ti(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){oi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>oi(a,this.#n&&this.#n.parent)):i(r)}})}}function me(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[el]??=n.nodeValue)&&(n[el]=t,n.nodeValue=`${t}`)}function pp(n,e){return mp(n,e)}const is=new Map;function mp(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:o=!0,transformError:s}){Wh();var l=void 0,c=Zh(()=>{var u=t??e.appendChild(Ci());fp(u,{pending:()=>{}},g=>{En({});var _=rn;a&&(_.c=a),r&&(i.$$events=r),l=n(g,i)||yl(),wn()},s);var f=new Set,p=g=>{for(var _=0;_<g.length;_++){var x=g[_];if(!f.has(x)){f.add(x);var m=rp(x);for(const b of[e,document]){var h=is.get(b);h===void 0&&(h=new Map,is.set(b,h));var E=h.get(x);E===void 0?(b.addEventListener(x,rl,{passive:m}),h.set(x,1)):h.set(x,E+1)}}}};return p(Js(Hd)),il.add(p),()=>{for(var g of f)for(const m of[e,document]){var _=is.get(m),x=_.get(g);--x==0?(m.removeEventListener(g,rl),_.delete(g),_.size===0&&is.delete(m)):_.set(g,x)}il.delete(p),u!==t&&u.parentNode?.removeChild(u)}});return gp.set(l,c),l}let gp=new WeakMap;class vp{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),i=this.#l.get(t);if(i)Hs(i),this.#s.delete(t);else{var r=this.#e.get(t);r&&(Hs(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,o]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(o);s&&(Mn(s.effect),this.#e.delete(o))}for(const[a,o]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var c=document.createDocumentFragment();Ll(o,c),c.append(Ci()),this.#e.set(a,{effect:o,fragment:c})}else Mn(o);this.#s.delete(a),this.#l.delete(a)};this.#n||!i?(this.#s.add(a),pr(o,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,r]of this.#e)t.includes(i)||(Mn(r.effect),this.#e.delete(i))};ensure(e,t){var i=ot,r=Rd();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),o=Ci();a.append(o),this.#e.set(e,{effect:kn(()=>t(o)),fragment:a})}else this.#l.set(e,kn(()=>t(this.anchor)));if(this.#t.set(i,e),r){for(const[s,l]of this.#l)s===e?i.unskip_effect(l):i.skip_effect(l);for(const[s,l]of this.#e)s===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#i),i.ondiscard(this.#a)}else this.#i(i)}}function Ke(n,e,t=!1){var i=new vp(n),r=t?ia:0;function a(o,s){i.ensure(o,s)}Cl(()=>{var o=!1;e((s,l=0)=>{o=!0,a(l,s)}),o||a(-1,null)},r)}function al(n,e){return e}function _p(n,e,t){for(var i=[],r=e.length,a,o=e.length,s=0;s<r;s++){let f=e[s];pr(f,()=>{if(a){if(a.pending.delete(f),a.done.add(f),a.pending.size===0){var p=n.outrogroups;sl(n,Js(a.done)),p.delete(a),p.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&t!==null&&n.pending.size===0;if(l){var c=t,u=c.parentNode;Xh(u),u.append(c),n.items.clear()}sl(n,e,!l)}else a={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(a)}function sl(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const s of o)i.add(n.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(i?.has(a)){a.f|=li;const o=document.createDocumentFragment();Ll(a,o)}else Mn(e[r],t)}}var rc;function wt(n,e,t,i,r,a=null){var o=n,s=new Map,l=(e&sd)!==0;if(l){var c=n;o=c.appendChild(Ci())}var u=null,f=gd(()=>{var E=t();return Zs(E)?E:E==null?[]:Js(E)}),p=new Map,g=!0;function _(E){if((h.effect.f&nn)===0){h.pending.delete(E);var b=d(f);h.fallback=u,xp(h,b,o,e,i),u!==null&&(b.length===0?(u.f&li)===0?Hs(u):(u.f^=li,Ua(u,null,o)):pr(u,()=>{u=null}))}}function x(E){h.pending.delete(E)}var m=Cl(()=>{for(var E=d(f),b=E.length,S=new Set,w=ot,D=Rd(),R=0;R<b;R+=1){var N=E[R],M=i(N,R),A=g?null:s.get(M);A?(A.v&&aa(A.v,N),A.i&&aa(A.i,R),D&&w.unskip_effect(A.e)):(A=bp(s,g?o:rc??=Ci(),N,M,R,r,e,t),g||(A.e.f|=li),s.set(M,A)),S.add(M)}if(b===0&&a&&!u&&(g?u=kn(()=>a(o)):(u=kn(()=>a(rc??=Ci())),u.f|=li)),b>S.size&&bh(),!g)if(p.set(w,S),D){for(const[se,Z]of s)S.has(se)||w.skip_effect(Z.e);w.oncommit(_),w.ondiscard(x)}else _(w);d(f)}),h={effect:m,items:s,pending:p,outrogroups:null,fallback:u};g=!1}function Sa(n){for(;n!==null&&(n.f&ii)===0;)n=n.next;return n}function xp(n,e,t,i,r){var a=(i&sh)!==0,o=e.length,s=n.items,l=Sa(n.effect.first),c,u=null,f,p=[],g=[],_,x,m,h;if(a)for(h=0;h<o;h+=1)_=e[h],x=r(_,h),m=s.get(x).e,(m.f&li)===0&&(m.nodes?.a?.measure(),(f??=new Set).add(m));for(h=0;h<o;h+=1){if(_=e[h],x=r(_,h),m=s.get(x).e,n.outrogroups!==null)for(const A of n.outrogroups)A.pending.delete(m),A.done.delete(m);if((m.f&_n)!==0&&(Hs(m),a&&(m.nodes?.a?.unfix(),(f??=new Set).delete(m))),(m.f&li)!==0)if(m.f^=li,m===l)Ua(m,null,t);else{var E=u?u.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Bi(n,u,m),Bi(n,m,E),Ua(m,E,t),u=m,p=[],g=[],l=Sa(u.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(p.length<g.length){var b=g[0],S;u=b.prev;var w=p[0],D=p[p.length-1];for(S=0;S<p.length;S+=1)Ua(p[S],b,t);for(S=0;S<g.length;S+=1)c.delete(g[S]);Bi(n,w.prev,D.next),Bi(n,u,w),Bi(n,D,b),l=b,u=D,h-=1,p=[],g=[]}else c.delete(m),Ua(m,l,t),Bi(n,m.prev,m.next),Bi(n,m,u===null?n.effect.first:u.next),Bi(n,u,m),u=m;continue}for(p=[],g=[];l!==null&&l!==m;)(c??=new Set).add(l),g.push(l),l=Sa(l.next);if(l===null)continue}(m.f&li)===0&&p.push(m),u=m,l=Sa(m.next)}if(n.outrogroups!==null){for(const A of n.outrogroups)A.pending.size===0&&(sl(n,Js(A.done)),n.outrogroups?.delete(A));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var R=[];if(c!==void 0)for(m of c)(m.f&_n)===0&&R.push(m);for(;l!==null;)(l.f&_n)===0&&l!==n.fallback&&R.push(l),l=Sa(l.next);var N=R.length;if(N>0){var M=(i&sd)!==0&&o===0?t:null;if(a){for(h=0;h<N;h+=1)R[h].nodes?.a?.measure();for(h=0;h<N;h+=1)R[h].nodes?.a?.fix()}_p(n,R,M)}}a&&Ti(()=>{if(f!==void 0)for(m of f)m.nodes?.a?.apply()})}function bp(n,e,t,i,r,a,o,s){var l=(o&rh)!==0?(o&oh)===0?Hh(t,!1,!1):br(t):null,c=(o&ah)!==0?br(r):null;return{v:l,i:c,e:kn(()=>(a(e,l??t,c??r,s),()=>{n.delete(i)}))}}function Ua(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,a=e&&(e.f&li)===0?e.nodes.start:t;i!==null;){var o=Qa(i);if(a.before(i),i===r)return;i=o}}function Bi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const ac=[...` 	
\r\f \v\uFEFF`];function yp(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,o=0;(o=i.indexOf(r,o))>=0;){var s=o+a;(o===0||ac.includes(i[o-1]))&&(s===i.length||ac.includes(i[s]))?i=(o===0?"":i.substring(0,o))+i.substring(s+1):o=s}}return i===""?null:i}function Mp(n,e){return n==null?null:String(n)}function Mt(n,e,t,i,r,a){var o=n[Qo];if(o!==t||o===void 0){var s=yp(t,i,a);s==null?n.removeAttribute("class"):n.className=s,n[Qo]=t}else if(a&&r!==a)for(var l in a){var c=!!a[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return a}function Wi(n,e,t,i){var r=n[$o];if(r!==e){var a=Mp(e);a==null?n.removeAttribute("style"):n.style.cssText=a,n[$o]=e}return i}function Sp(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Ep(n,e){var t=n.__defaultValue,i=n.multiple,r=i?t??[]:null;if(!(i&&!Zs(r))){n.selectedIndex;for(var a of n.options){var o=Qr(a);Sp(a,i?r.includes(o):Ed(o,t))}}}function Vd(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Zs(e))return gh();for(var i of n.options)i.selected=e.includes(Qr(i));return}for(i of n.options){var r=Qr(i);if(Ed(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Ws(n){var e=new MutationObserver(t=>{t.every(wp)||("__defaultValue"in n&&Ep(n),"__value"in n&&Vd(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Al(()=>{e.disconnect()})}function Xs(n,e,t=e){var i=new WeakSet,r=!0;pd(n,"change",a=>{var o=a?"[selected]":":checked",s;if(n.multiple)s=[].map.call(n.querySelectorAll(o),Qr);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");s=l&&Qr(l)}t(s),n.__value=s,ot!==null&&i.add(ot)}),Pd(()=>{var a=e();if(n===document.activeElement){var o=ot;if(i.has(o))return}if(Vd(n,a,r),r&&a===void 0){var s=n.querySelector(":checked");s!==null&&(a=Qr(s),t(a))}n.__value=a,r=!1})}function Qr(n){return"__value"in n?n.__value:n.value}function wp(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const Tp=Symbol("is custom element"),Ap=Symbol("is html"),Rp=ih?"progress":"PROGRESS";function Xa(n,e){var t=Dl(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==Rp)||(n.value=e??"")}function sc(n,e){var t=Dl(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function Qe(n,e,t,i){var r=Dl(n),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(n[nh]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Cp(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Dl(n){return n[ad]??={[Tp]:n.nodeName.includes("-"),[Ap]:n.namespaceURI===ph}}var oc=new Map;function Cp(n){var e=n.getAttribute("is")||n.nodeName,t=oc.get(e);if(t)return t;oc.set(e,t=new Set);for(var i,r=n,a=Element.prototype;a!==r;){i=qf(r);for(var o in i)i[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.add(o);r=ed(r)}return t}function Ot(n,e,t=e){var i=new WeakSet;pd(n,"input",async r=>{var a=r?n.defaultValue:n.value;if(a=ho(n)?po(a):a,t(a),ot!==null&&i.add(ot),await np(),a!==(a=e())){var o=n.selectionStart,s=n.selectionEnd,l=n.value.length;if(n.value=a??"",s!==null){var c=n.value.length;o===s&&s===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(s,c))}}}),ma(e)==null&&n.value&&(t(ho(n)?po(n.value):n.value),ot!==null&&i.add(ot)),Rl(()=>{var r=e();if(n===document.activeElement){var a=ot;if(i.has(a))return}ho(n)&&r===po(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function ho(n){var e=n.type;return e==="number"||e==="range"}function po(n){return n===""?null:+n}function mo(n,e){return n===e||n?.[hr]===e}function Wd(n=yl(),e,t,i){var r=rn.r,a=_t;return Pd(()=>{var o,s;return Rl(()=>{o=s,s=[],ma(()=>{mo(t(...s),n)||(e(n,...s),o&&mo(t(...o),n)&&e(null,...o))})}),()=>{let l=a;for(;l!==r&&l.parent!==null&&l.parent.f&Ga;)l=l.parent;const c=()=>{s&&mo(t(...s),n)&&e(null,...s)},u=l.teardown;l.teardown=()=>{c(),u?.()}}}),n}let rs=!1;function Pp(n){var e=rs;try{return rs=!1,[n(),rs]}finally{rs=e}}function dt(n,e,t,i){var r=!0,a=(t&uh)!==0,o=(t&dh)!==0,s=i,l=!0,c=void 0,u=()=>o&&r?(c??=Ha(i),d(c)):(l&&(l=!1,s=o?ma(i):i),s);let f;if(a){var p=hr in n||th in n;f=Kr(n,e)?.set??(p&&e in n?S=>n[e]=S:void 0)}var g,_=!1;a?[g,_]=Pp(()=>n[e]):g=n[e],g===void 0&&i!==void 0&&(g=u(),f&&(wh(),f(g)));var x;if(x=()=>{var S=n[e];return S===void 0?u():(l=!0,S)},(t&ch)===0)return x;if(f){var m=n.$$legacy;return(function(S,w){return arguments.length>0?((!w||m||_)&&f(w?x():S),S):x()})}var h=!1,E=((t&lh)!==0?Ha:gd)(()=>(h=!1,x()));a&&d(E);var b=_t;return(function(S,w){if(arguments.length>0){const D=w?d(E):a?Rt(S):S;return y(E,D),h=!0,s!==void 0&&(s=D),S}return Di&&h||(b.f&nn)!==0?E.v:d(E)})}function er(n){rn===null&&ud(),In(()=>{const e=ma(n);if(typeof e=="function")return e})}function Lp(n){rn===null&&ud(),er(()=>()=>ma(n))}const Dp="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Dp);var Ip=_e('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">📂 Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),Up=_e('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Np(n,e){En(e,!0);let t=dt(e,"selected",3,!1),i=dt(e,"gameRunning",3,!1),r=dt(e,"menuOpen",3,!1);const a=Ft(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function o(){const N=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&N?N(e.instance.icon_path):"/logo.png"}var s=Up(),l=z(s),c=z(l),u=pe(c),f=C(c,2),p=z(f),g=pe(p,!0),_=C(p,2),x=z(_),m=pe(x,!0),h=C(x,2),E=pe(h,!0),b=C(f,2),S=C(l,2),w=pe(S,!0),D=C(S,2);{var R=N=>{var M=Ip(),A=Pt(M),se=C(A,2),Z=z(se),k=C(Z,2),X=C(k,2),Q=C(X,2),Y=C(Q,4);Fe(()=>Z.disabled=i()),ae("click",A,function(...j){e.onclosemenu?.apply(this,j)}),ae("click",Z,()=>{e.onclosemenu(),e.onplay()}),ae("click",k,()=>{e.onclosemenu(),e.onedit()}),ae("click",X,()=>{e.onclosemenu(),e.onopenfolder()}),ae("click",Q,function(...j){e.onviewlogs?.apply(this,j)}),ae("click",Y,()=>{e.onclosemenu(),e.ondelete()}),re(N,M)};Ke(D,N=>{r()&&N(R)})}Fe((N,M)=>{Mt(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),Qe(s,"aria-selected",t()),Qe(s,"title",e.instance.name),Qe(u,"src",N),me(g,e.instance.name),me(m,e.instance.minecraft_version),Mt(h,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${d(a)??""}`),me(E,e.instance.loader_type),me(w,M)},[()=>o(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),ae("click",s,function(...N){e.onselect?.apply(this,N)}),ae("dblclick",s,function(...N){e.onplay?.apply(this,N)}),ae("keydown",s,N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),e.onplay())}),ae("contextmenu",s,N=>{N.preventDefault(),e.onselect(),e.ontogglemenu()}),$i("error",u,N=>{N.currentTarget.dataset.f||(N.currentTarget.dataset.f="1",N.currentTarget.src="/logo.png")}),ae("click",b,N=>{N.stopPropagation(),e.ontogglemenu()}),re(n,s),wn()}Vn(["click","dblclick","keydown","contextmenu"]);var Op=_e('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Fp=_e('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),kp=_e('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Bp=_e('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function zp(n,e){En(e,!0);var t=Bp();wt(t,21,()=>e.instances,i=>i.id,(i,r)=>{{let a=Ft(()=>e.selectedId===d(r).id),o=Ft(()=>e.menuFor===d(r).id);Np(i,{get instance(){return d(r)},get selected(){return d(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return d(o)},onselect:()=>e.onselect?.(d(r).id),onplay:()=>e.onplay?.(d(r).id),ontogglemenu:()=>e.ontogglemenu?.(d(r).id),onedit:()=>e.onedit?.(d(r)),onopenfolder:()=>e.onopenfolder?.(d(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(d(r).id),get onclosemenu(){return e.onclosemenu}})}},i=>{var r=cp(),a=Pt(r);{var o=u=>{var f=Op(),p=pe(f,!0);Fe(()=>me(p,e.error)),re(u,f)},s=u=>{var f=Fp(),p=pe(f);Fe(g=>me(p,`No instances match "${g??""}".`),[()=>e.query.trim()]),re(u,f)},l=Ft(()=>e.query.trim()),c=u=>{var f=kp(),p=C(z(f),6);ae("click",p,()=>e.onadd?.()),re(u,f)};Ke(a,u=>{e.error?u(o):d(l)?u(s,1):u(c,-1)})}re(i,r)}),re(n,t),wn()}Vn(["click"]);const ja=[];function $s(n){return ja.push(n),n}function eo(n){const e=ja.lastIndexOf(n);e!==-1&&ja.splice(e,1)}function lc(){return ja[ja.length-1]??null}var Gp=_e('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div>'),cc=_e('<div class="p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Hp=_e('<span class="shrink-0 rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent)">✓ Installed</span>'),Vp=_e(`<button class="shrink-0 rounded bg-(--accent) px-3 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Downloads the primary jar into this instance's mods folder"> </button>`),Wp=_e('<div class="flex items-center gap-3 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div> <div class="truncate text-[11px] text-(--text-muted)"> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></div> <!></div>'),Xp=_e('<div class="flex flex-col gap-1.5"></div>'),jp=_e('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[480px] w-[640px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><div class="min-w-0"><h3 class="text-sm font-semibold">Get more mods</h3> <p class="truncate text-[11px] text-(--text-muted)"> <!></p></div> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="border-b border-(--border) p-3"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></div></div>');function Yp(n,e){En(e,!0);let t=xe(""),i=xe(null),r=xe(!1),a=xe(""),o=xe(Rt({})),s=xe(Rt({})),l=0;const c=["fabric","quilt","forge","neoforge"],u=Ft(()=>{const Y=e.instance.loader_type.toLowerCase();return c.includes(Y)?Y:""});function f(Y){return Y>=1e6?`${(Y/1e6).toFixed(1)}M`:Y>=1e3?`${(Y/1e3).toFixed(0)}K`:String(Y)}function p(Y){return Y.icon_url||"/logo.png"}In(()=>{const Y=d(t).trim(),j=++l,W=setTimeout(()=>{y(r,!0),y(a,""),window.__TAURI__.core.invoke("search_modrinth_mods",{query:Y,gameVersion:e.instance.minecraft_version,loader:d(u)}).then(ue=>{j===l&&(y(i,ue,!0),y(r,!1))}).catch(ue=>{j===l&&(y(a,String(ue),!0),y(r,!1))})},350);return()=>clearTimeout(W)});async function g(Y){if(!(d(o)[Y.project_id]||d(s)[Y.project_id])){y(o,{...d(o),[Y.project_id]:!0},!0);try{const j=await window.__TAURI__.core.invoke("install_modrinth_mod",{instanceId:e.instance.id,projectId:Y.project_id,gameVersion:e.instance.minecraft_version,loader:d(u)});y(s,{...d(s),[Y.project_id]:j},!0),e.oninstalled?.(Y)}catch(j){y(a,`Install failed: ${j}`)}finally{y(o,{...d(o),[Y.project_id]:!1},!0)}}}er(()=>{const Y=$s(()=>e.onclose?.());return()=>eo(Y)});var _=jp(),x=z(_),m=z(x),h=z(m),E=C(z(h),2),b=z(E),S=C(b);{var w=Y=>{var j=Ei();Fe(W=>me(j,`· ${W??""}`),[()=>d(u)[0].toUpperCase()+d(u).slice(1)]),re(Y,j)};Ke(S,Y=>{d(u)&&Y(w)})}var D=C(h,2),R=C(m,2),N=z(R),M=C(R,2),A=z(M);{var se=Y=>{var j=Gp(),W=pe(j,!0);Fe(()=>me(W,d(a))),re(Y,j)};Ke(A,Y=>{d(a)&&Y(se)})}var Z=C(A,2);{var k=Y=>{var j=cc(),W=pe(j,!0);Fe(()=>me(W,d(r)?"Searching Modrinth…":"Type to search.")),re(Y,j)},X=Y=>{var j=cc(),W=pe(j);Fe(ue=>me(W,`No mods for MC ${e.instance.minecraft_version??""}${d(u)?` + ${d(u)}`:""} match “${ue??""}”.`),[()=>d(t).trim()]),re(Y,j)},Q=Y=>{var j=Xp();wt(j,21,()=>d(i),W=>W.project_id,(W,ue)=>{var ge=Wp(),q=z(ge),ee=C(q,2),Te=z(ee),we=z(Te),Oe=pe(we,!0),Be=C(we,2),Ve=pe(Be),We=C(Te,2),te=pe(We,!0),De=C(We,2),Le=pe(De),O=C(ee,2);{var Ae=F=>{var G=Hp();Fe(()=>Qe(G,"title",d(s)[d(ue).project_id])),re(F,G)},be=F=>{var G=Vp(),ye=pe(G,!0);Fe(()=>{G.disabled=d(o)[d(ue).project_id],me(ye,d(o)[d(ue).project_id]?"Installing…":"Install")}),ae("click",G,()=>g(d(ue))),re(F,G)};Ke(O,F=>{d(s)[d(ue).project_id]?F(Ae):F(be,-1)})}Fe((F,G,ye)=>{Qe(q,"src",F),Qe(we,"title",d(ue).title),me(Oe,d(ue).title),Qe(Be,"title",`${G??""} downloads`),me(Ve,`⤓ ${ye??""}`),Qe(We,"title",d(ue).description),me(te,d(ue).description),me(Le,`by ${(d(ue).author||"unknown")??""}`)},[()=>p(d(ue)),()=>f(d(ue).downloads),()=>f(d(ue).downloads)]),$i("error",q,F=>{F.currentTarget.dataset.f||(F.currentTarget.dataset.f="1",F.currentTarget.src="/logo.png")}),re(W,ge)}),re(Y,j)};Ke(Z,Y=>{d(i)?d(i).length===0&&!d(r)?Y(X,1):Y(Q,-1):Y(k)})}Fe(()=>me(b,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `)),ae("click",_,Y=>{Y.target===Y.currentTarget&&e.onclose?.()}),ae("click",D,()=>e.onclose?.()),Ot(N,()=>d(t),Y=>y(t,Y)),re(n,_),wn()}Vn(["click"]);var qp=_e('<button><span class="w-5 shrink-0 text-center text-[15px]"> </span> <span class="truncate"> </span></button>'),Kp=_e('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Zp=_e('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),uc=_e('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),go=_e('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Jp=_e(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">📂 Open Mods Folder</button></div>`,1),Qp=_e('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),$p=_e('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),em=_e('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder">📂 Open Screenshots Folder</button>',1),tm=_e('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),nm=_e('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder">📂 Open Logs Folder</button></div>',1),im=_e('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, icon and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p></div>',1),rm=_e('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!></div>');function am(n,e){En(e,!0);let t=dt(e,"storage",3,null);const i=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let r=xe("mods"),a=xe(Rt([])),o=xe(!1),s=xe(""),l=xe(""),c=xe(!1),u=xe(Rt([])),f=xe(Rt([])),p=xe(!1),g=xe("");function _(...te){return[t()?t().instances_dir.replace(/\\/g,"/"):"",e.instance.id,"minecraft",...te].filter(Boolean).join("/")}function x(te){const De=window.__TAURI__?.core?.convertFileSrc;return De?De(te):te}function m(te){return te>=1024*1024?`${(te/1024/1024).toFixed(1)} MB`:te>=1024?`${(te/1024).toFixed(1)} KB`:`${te} B`}function h(te){return te?new Date(te*1e3).toLocaleString():""}function E(){const te=d(l).trim().toLowerCase();return te?d(a).filter(De=>De.display_name.toLowerCase().includes(te)||De.filename.toLowerCase().includes(te)):d(a)}async function b(){y(o,!0);try{y(a,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:e.instance.id}),!0),y(s,"")}catch(te){y(s,String(te),!0)}finally{y(o,!1)}}async function S(te){y(o,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:e.instance.id,filename:te.filename,enable:!te.is_enabled}),d(s)&&y(s,"")}catch(De){y(s,String(De),!0)}finally{y(o,!1)}await b()}async function w(te){y(o,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:e.instance.id,filename:te.filename}),y(s,"")}catch(De){y(s,String(De),!0)}finally{y(o,!1)}await b()}async function D(){const te=window.__TAURI__?.dialog?.open;if(!te){y(s,"File picker unavailable in this build.");return}let De;try{De=await te({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(O){y(s,String(O),!0);return}const Le=De?[].concat(De):[];if(Le.length){y(o,!0);try{for(const O of Le)await window.__TAURI__.core.invoke("import_mod",{instanceId:e.instance.id,jarPath:O});y(s,"")}catch(O){y(s,String(O),!0)}finally{y(o,!1)}await b()}}async function R(te){y(p,!0);try{const De=await window.__TAURI__.core.invoke(te,{instanceId:e.instance.id});y(te==="list_screenshots"?u:f,De,!0),y(g,"")}catch(De){y(g,String(De),!0)}finally{y(p,!1)}}function N(te){window.__TAURI__.core.invoke("open_path",{path:te}).catch(De=>y(g,String(De),!0))}function M(te){N(_("screenshots",te))}er(()=>{b(),R("list_screenshots"),R("list_logs")});var A=rm(),se=z(A),Z=z(se),k=C(Z,2),X=z(k),Q=pe(X,!0),Y=C(X,2),j=pe(Y),W=C(k,2);wt(W,21,()=>i,te=>te.id,(te,De)=>{var Le=qp(),O=z(Le),Ae=pe(O,!0),be=C(O,2),F=pe(be,!0);Fe(()=>{Mt(Le,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${d(r)===d(De).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Qe(Le,"aria-current",d(r)===d(De).id?"true":void 0),me(Ae,d(De).icon),me(F,d(De).label)}),ae("click",Le,()=>y(r,d(De).id,!0)),re(te,Le)});var ue=C(se,2),ge=z(ue),q=z(ge);{var ee=te=>{var De=Kp(),Le=C(Pt(De),4),O=z(Le),Ae=pe(O),be=C(O,2),F=pe(be),G=C(be,2),ye=pe(G);Fe(Ee=>{me(Ae,`Minecraft ${e.instance.minecraft_version??""}`),me(F,`Loader: ${e.instance.loader_type??""}`),me(ye,`Last played: ${Ee??""}`)},[()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleString():"never"]),re(te,De)},Te=te=>{var De=Jp(),Le=C(Pt(De),4),O=z(Le),Ae=pe(O),be=C(O,2),F=C(Le,2),G=C(F,2),ye=C(G,2),Ee=z(ye);wt(Ee,21,E,v=>v.filename,(v,I)=>{var ne=Zp(),le=z(ne),he=z(le);let ke;var Me=pe(he,!0),K=C(he,2),L=pe(K),ie=C(le),de=pe(ie),fe=C(ie),Ie=pe(fe);Fe(je=>{ke=Mt(he,1,"truncate",null,ke,{"opacity-50":!d(I).is_enabled}),me(Me,d(I).display_name),me(L,`${d(I).filename??""} · ${je??""}`),Mt(de,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${d(I).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),Qe(de,"title",d(I).is_enabled?"Disable":"Enable"),de.disabled=d(o),Qe(Ie,"title",`Delete ${d(I).display_name??""}`),Ie.disabled=d(o)},[()=>m(d(I).file_size)]),ae("click",de,()=>S(d(I))),ae("click",Ie,()=>w(d(I))),re(v,ne)},v=>{var I=uc(),ne=z(I),le=z(ne);{var he=Me=>{var K=Ei("Loading mods…");re(Me,K)},ke=Me=>{var K=Ei("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");re(Me,K)};Ke(le,Me=>{d(o)?Me(he):Me(ke,-1)})}re(v,I)});var Ce=C(ye,2);{var Pe=v=>{var I=go(),ne=pe(I,!0);Fe(()=>me(ne,d(s))),re(v,I)};Ke(Ce,v=>{d(s)&&v(Pe)})}var Ge=C(Ce,2),Xe=z(Ge),T=C(Xe,2);Fe(()=>{me(Ae,`Installed (${d(a).length??""})`),be.disabled=d(o),Xe.disabled=d(o),T.disabled=!t(),Qe(T,"title",t()?"Opens the instance mods folder":"Storage unknown")}),ae("click",be,b),Ot(F,()=>d(l),v=>y(l,v)),ae("click",G,()=>y(c,!0)),ae("click",Xe,D),ae("click",T,()=>N(_("mods"))),re(te,De)},we=te=>{var De=em(),Le=C(Pt(De),4);wt(Le,21,()=>d(u),F=>F.name,(F,G)=>{var ye=Qp(),Ee=z(ye),Ce=C(Ee,2),Pe=pe(Ce,!0);Fe((Ge,Xe,T)=>{Qe(ye,"title",`${d(G).name??""} · ${Ge??""} · ${Xe??""}`),Qe(Ee,"src",T),Qe(Ee,"alt",d(G).name),Qe(Ce,"title",d(G).name),me(Pe,d(G).name)},[()=>m(d(G).size),()=>h(d(G).modified),()=>x(_("screenshots",d(G).name))]),ae("click",ye,()=>M(d(G).name)),ae("keydown",ye,Ge=>{(Ge.key==="Enter"||Ge.key===" ")&&(Ge.preventDefault(),M(d(G).name))}),re(F,ye)},F=>{var G=$p(),ye=z(G);{var Ee=Pe=>{var Ge=Ei("Loading screenshots…");re(Pe,Ge)},Ce=Pe=>{var Ge=Ei("No screenshots yet — press F2 in game to capture one.");re(Pe,Ge)};Ke(ye,Pe=>{d(p)?Pe(Ee):Pe(Ce,-1)})}re(F,G)});var O=C(Le,2);{var Ae=F=>{var G=go(),ye=pe(G,!0);Fe(()=>me(ye,d(g))),re(F,G)};Ke(O,F=>{d(g)&&F(Ae)})}var be=C(O,2);ae("click",be,()=>N(_("screenshots"))),re(te,De)},Oe=te=>{var De=nm(),Le=C(Pt(De),4),O=z(Le);wt(O,21,()=>d(f),Ee=>Ee.name,(Ee,Ce)=>{var Pe=tm(),Ge=z(Pe),Xe=z(Ge),T=pe(Xe,!0),v=C(Xe,2),I=pe(v),ne=C(Ge),le=pe(ne);Fe((he,ke)=>{Qe(Xe,"title",d(Ce).name),me(T,d(Ce).name),me(I,`${he??""} · ${ke??""}`)},[()=>m(d(Ce).size),()=>h(d(Ce).modified)]),ae("click",le,()=>N(_("logs",d(Ce).name))),re(Ee,Pe)},Ee=>{var Ce=uc(),Pe=z(Ce),Ge=z(Pe);{var Xe=v=>{var I=Ei("Loading logs…");re(v,I)},T=v=>{var I=Ei("No log files yet — logs appear after the first launch.");re(v,I)};Ke(Ge,v=>{d(p)?v(Xe):v(T,-1)})}re(Ee,Ce)});var Ae=C(Le,2);{var be=Ee=>{var Ce=go(),Pe=pe(Ce,!0);Fe(()=>me(Pe,d(g))),re(Ee,Ce)};Ke(Ae,Ee=>{d(g)&&Ee(be)})}var F=C(Ae,2),G=z(F),ye=C(G,2);ae("click",G,()=>e.onopenconsole?.()),ae("click",ye,()=>N(_("logs"))),re(te,De)},Be=te=>{var De=im(),Le=C(Pt(De),4),O=z(Le),Ae=pe(O,!0),be=C(O,2),F=z(be),G=pe(F),ye=C(F,2),Ee=pe(ye);Fe((Ce,Pe,Ge)=>{me(Ae,e.instance.name),Qe(be,"title",Ce),me(G,`Game folder: ${Pe??""}`),me(Ee,`Mods folder: ${Ge??""}`)},[()=>_(),()=>_(),()=>_("mods")]),re(te,De)};Ke(q,te=>{d(r)==="components"?te(ee):d(r)==="mods"?te(Te,1):d(r)==="screenshots"?te(we,2):d(r)==="logs"?te(Oe,3):te(Be,-1)})}var Ve=C(ue,2);{var We=te=>{Yp(te,{get instance(){return e.instance},onclose:()=>y(c,!1),oninstalled:()=>b()})};Ke(Ve,te=>{d(c)&&te(We)})}Fe(()=>{Qe(X,"title",e.instance.name),me(Q,e.instance.name),me(j,`${e.instance.minecraft_version??""} · ${e.instance.loader_type??""}`)}),ae("click",Z,function(...te){e.onback?.apply(this,te)}),re(n,A),wn()}Vn(["click","keydown"]);var sm=_e('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),om=_e('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),lm=_e('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),cm=_e('<p class="mt-3 text-[12px] text-red-400"> </p>'),um=_e(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),dm=_e('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function fm(n,e){En(e,!0);let t=xe(null),i=xe(""),r=xe(""),a=xe(!1),o=xe("");function s(E){return E>=1024*1024?`${(E/1024/1024).toFixed(1)} MB`:E>=1024?`${(E/1024).toFixed(0)} KB`:`${E} B`}function l(){return!d(t)||!d(t).loader?"Vanilla":d(t).loader[0].toUpperCase()+d(t).loader.slice(1)+(d(t).loader_version?` ${d(t).loader_version}`:" (latest stable)")}er(async()=>{const E=$s(()=>e.onclose?.());try{y(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),y(r,d(t).name,!0)}catch(b){y(i,String(b),!0)}return()=>eo(E)});async function c(){if(!d(a)){y(a,!0),y(o,"");try{const E=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:d(r).trim()});e.oninstalled?.(E)}catch(E){y(o,String(E),!0)}finally{y(a,!1)}}}var u=dm(),f=z(u),p=z(f),g=C(z(p),2),_=C(p,2);{var x=E=>{var b=sm(),S=z(b),w=pe(S,!0),D=C(S,2),R=pe(D,!0);Fe(()=>{me(w,d(i)),Qe(D,"title",e.path),me(R,e.path)}),re(E,b)},m=E=>{var b=om();re(E,b)},h=E=>{var b=um(),S=Pt(b),w=z(S),D=z(w),R=pe(D,!0),N=C(D,2);{var M=Be=>{var Ve=lm(),We=pe(Ve,!0);Fe(()=>me(We,d(t).summary)),re(Be,Ve)};Ke(N,Be=>{d(t).summary&&Be(M)})}var A=C(N,2),se=z(A),Z=pe(se),k=C(se,2),X=pe(k,!0),Q=C(k,2),Y=pe(Q),j=C(Q,2),W=pe(j,!0),ue=C(w,4),ge=C(ue,2);{var q=Be=>{var Ve=cm(),We=pe(Ve,!0);Fe(()=>me(We,d(o))),re(Be,Ve)};Ke(ge,Be=>{d(o)&&Be(q)})}var ee=C(S,2),Te=z(ee),we=C(Te,2),Oe=pe(we,!0);Fe((Be,Ve,We)=>{Qe(D,"title",d(t).name),me(R,d(t).name),me(Z,`MC ${(d(t).game_version||"?")??""}`),me(X,Be),Qe(Q,"title",`${d(t).download_count??""} downloaded, ${d(t).override_count??""} overrides extracted`),me(Y,`${d(t).file_count??""} files`),me(W,Ve),we.disabled=We,me(Oe,d(a)?"Installing…":"Install Modpack")},[()=>l(),()=>s(d(t).archive_size),()=>d(a)||!d(r).trim()]),Ot(ue,()=>d(r),Be=>y(r,Be)),ae("click",Te,()=>e.onclose?.()),ae("click",we,c),re(E,b)};Ke(_,E=>{d(i)?E(x):d(t)?E(h,-1):E(m,1)})}ae("click",u,E=>{E.target===E.currentTarget&&e.onclose?.()}),ae("click",g,()=>e.onclose?.()),re(n,u),wn()}Vn(["click"]);var hm=_e('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),pm=_e('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),dc=_e("<option> </option>"),mm=_e('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),gm=_e('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),vm=_e('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),_m=_e('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),xm=_e('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),bm=_e('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),ym=_e('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Mm=_e('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Sm=_e('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),Em=_e('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),wm=_e('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),Tm=_e('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Am=_e('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),Rm=_e('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),Cm=_e('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),Pm=_e('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),Lm=_e('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>');function Dm(n,e){En(e,!0);let t=dt(e,"groups",19,()=>[]);const i=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],r=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"fabric",label:"Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],a=["","fabric","quilt"],o=["fabric","quilt"],s="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let l=xe(null),c=xe(!0),u=xe(""),f=xe(""),p=xe(Rt(new Set(["release"]))),g=xe(""),_=xe(""),x=xe(""),m=xe(""),h=xe(""),E=xe(""),b=xe(Rt([])),S=xe("idle"),w=0,D=xe(!1),R=xe("");function N(ve,ze){const Ze=window.__TAURI__?.core;return Ze?Ze.invoke(ve,ze):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const M=Ft(()=>{const ve=d(l)?.versions??[],ze=d(f).trim().toLowerCase();return ve.filter(Ze=>d(p).has(Ze.version_type)&&(!ze||Ze.id.toLowerCase().includes(ze)))}),A=Ft(()=>!a.includes(d(h))),se=Ft(()=>o.includes(d(h))),Z=Ft(()=>!!d(g)&&!d(A)&&!d(D)&&!(d(se)&&d(S)==="loading"));function k(ve){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[ve]??ve}function X(ve){if(!ve)return"—";const ze=new Date(ve);if(Number.isNaN(ze.getTime()))return String(ve).slice(0,10);const Ze=mt=>String(mt).padStart(2,"0");return`${Ze(ze.getDate())}/${Ze(ze.getMonth()+1)}/${ze.getFullYear()}`}function Q(ve){const ze=new Set(d(p));ze.has(ve)?ze.delete(ve):ze.add(ve),y(p,ze,!0)}function Y(){const ve=window.__TAURI__?.core?.convertFileSrc;return d(m)&&ve?ve(d(m)):null}async function j(){const ve=window.__TAURI__?.dialog?.open;if(!ve){y(R,"Image picker unavailable in this build.");return}try{const ze=await ve({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});ze&&(y(m,String(ze),!0),y(R,""))}catch(ze){y(R,String(ze),!0)}}async function W(){if(!d(se)||!d(g))return;const ve=++w;y(S,"loading");try{const ze=await N("fetch_loader_versions",{loader:d(h),gameVersion:d(g)});if(ve!==w)return;y(b,ze,!0),y(E,ze.find(Ze=>Ze.stable)?.version??ze[0]?.version??"",!0),y(S,ze.length?"idle":"error",!0)}catch{if(ve!==w)return;y(b,[],!0),y(E,""),y(S,"error")}}async function ue(ve){y(g,ve,!0),d(se)&&await W()}async function ge(ve){y(h,ve,!0),y(E,""),y(b,[],!0),y(S,"idle"),d(se)&&await W()}async function q(){y(c,!0),y(u,"");try{y(l,await N("fetch_vanilla_versions"),!0)}catch(ve){y(u,String(ve),!0)}finally{y(c,!1)}}async function ee(){if(!d(Z))return;y(D,!0),y(R,"");const ve=d(g),ze=d(_).trim()||ve;try{const Ze=await N("create_instance",{name:ze,version:ve,loader:d(h)||null,loaderVersion:d(E).trim()||null});let mt="";if(d(m))try{await N("set_instance_icon",{instanceId:Ze.id,imagePath:d(m)})}catch(bt){mt=`Instance created, but the icon could not be applied: ${bt}`}if(d(x).trim())try{await N("set_instance_group",{instanceId:Ze.id,group:d(x).trim()})}catch(bt){mt=mt?`${mt} The group could not be set: ${bt}`:`Instance created, but the group could not be set: ${bt}`}e.oncreated?.(Ze,mt)}catch(Ze){y(R,String(Ze),!0)}finally{y(D,!1)}}function Te(){window.__TAURI__?.core?.invoke("open_path",{path:s}).catch(ve=>y(R,String(ve),!0))}er(()=>{const ve=$s(()=>e.onclose?.());return q(),()=>eo(ve)});var we=Lm(),Oe=z(we),Be=z(Oe),Ve=z(Be),We=z(Ve);{var te=ve=>{var ze=hm(),Ze=Pt(ze);Fe(mt=>Qe(Ze,"src",mt),[()=>Y()]),re(ve,ze)},De=Ft(()=>Y()),Le=ve=>{var ze=pm();re(ve,ze)};Ke(We,ve=>{d(De)?ve(te):ve(Le,-1)})}var O=C(Ve,2),Ae=z(O),be=C(Ae,2),F=C(z(be),2),G=z(F);G.value=G.__value="";var ye=C(G);wt(ye,16,t,ve=>ve,(ve,ze)=>{var Ze=dc(),mt=pe(Ze,!0),bt={};Fe(()=>{me(mt,ze),bt!==(bt=ze)&&(Ze.value=(Ze.__value=bt)??"")}),re(ve,Ze)}),Ws(F);var Ee=C(O,2),Ce=C(Be,2),Pe=z(Ce),Ge=z(Pe),Xe=z(Ge);{var T=ve=>{var ze=mm();re(ve,ze)},v=ve=>{var ze=gm(),Ze=z(ze),mt=pe(Ze,!0),bt=C(Ze,2);Fe(()=>me(mt,d(u))),ae("click",bt,q),re(ve,ze)},I=ve=>{var ze=bm(),Ze=C(z(ze));wt(Ze,21,()=>d(M),mt=>mt.id,(mt,bt)=>{var an=_m(),It=z(an),Xt=z(It),xn=pe(Xt,!0),ri=C(Xt,2);{var dn=oe=>{var $=vm();re(oe,$)};Ke(ri,oe=>{d(bt).is_latest_release&&oe(dn)})}var Wn=C(It),ai=pe(Wn,!0),P=C(Wn),J=pe(P,!0);Fe((oe,$)=>{Mt(an,1,`cursor-pointer border-b border-(--border)/50 ${d(g)===d(bt).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),me(xn,d(bt).id),me(ai,oe),me(J,$)},[()=>X(d(bt).release_time),()=>k(d(bt).version_type)]),ae("click",an,()=>ue(d(bt).id)),ae("keydown",an,oe=>{(oe.key==="Enter"||oe.key===" ")&&(oe.preventDefault(),ue(d(bt).id))}),re(mt,an)},mt=>{var bt=xm();re(mt,bt)}),re(ve,ze)};Ke(Xe,ve=>{d(c)?ve(T):d(u)?ve(v,1):ve(I,-1)})}var ne=C(Ge,2),le=z(ne),he=C(le,2),ke=pe(he),Me=C(Pe,2),K=z(Me),L=C(z(K),2);wt(L,21,()=>i,ve=>ve.id,(ve,ze)=>{var Ze=ym(),mt=z(Ze),bt=C(mt,2),an=pe(bt,!0);Fe(It=>{sc(mt,It),me(an,d(ze).label)},[()=>d(p).has(d(ze).id)]),ae("change",mt,()=>Q(d(ze).id)),re(ve,Ze)});var ie=C(K,2),de=C(z(ie),2);wt(de,21,()=>r,ve=>ve.id,(ve,ze)=>{var Ze=Mm(),mt=z(Ze),bt=C(mt,2),an=pe(bt,!0);Fe(()=>{Xa(mt,d(ze).id),sc(mt,d(h)===d(ze).id),me(an,d(ze).label)}),ae("change",mt,()=>ge(d(ze).id)),re(ve,Ze)});var fe=C(de,2);{var Ie=ve=>{var ze=Sm();re(ve,ze)},je=ve=>{var ze=Em();re(ve,ze)};Ke(fe,ve=>{d(A)?ve(Ie):d(h)||ve(je,1)})}var Ye=C(fe,2);{var U=ve=>{var ze=Rm(),Ze=C(Pt(ze),2);{var mt=It=>{var Xt=wm();re(It,Xt)},bt=It=>{var Xt=Tm(),xn=Pt(Xt);Ot(xn,()=>d(E),ri=>y(E,ri)),re(It,Xt)},an=It=>{var Xt=Am(),xn=z(Xt);xn.value=xn.__value="";var ri=C(xn);wt(ri,17,()=>d(b),dn=>dn.version,(dn,Wn)=>{var ai=dc(),P=pe(ai),J={};Fe(()=>{me(P,`${d(Wn).version??""}${d(Wn).stable?"":" (unstable)"}`),J!==(J=d(Wn).version)&&(ai.value=(ai.__value=J)??"")}),re(dn,ai)}),Ws(Xt),Xs(Xt,()=>d(E),dn=>y(E,dn)),re(It,Xt)};Ke(Ze,It=>{d(S)==="loading"?It(mt):d(S)==="error"?It(bt,1):It(an,-1)})}re(ve,ze)};Ke(Ye,ve=>{d(se)&&ve(U)})}var Ue=C(Ce,2),V=z(Ue),Se=C(V,2);{var Ne=ve=>{var ze=Cm(),Ze=pe(ze,!0);Fe(()=>{Qe(ze,"title",d(R)),me(Ze,d(R))}),re(ve,ze)},rt=ve=>{var ze=Pm(),Ze=pe(ze,!0);Fe(()=>me(Ze,d(g)?`Selected Minecraft ${d(g)}`:"Pick a version to continue")),re(ve,ze)};Ke(Se,ve=>{d(R)?ve(Ne):ve(rt,-1)})}var at=C(Se,2),ht=C(at,2),Wt=pe(ht,!0);Fe(()=>{Qe(Ae,"placeholder",d(g)?`Instance name (${d(g)})`:"Instance name"),le.disabled=!d(l),me(ke,`${d(M).length??""} shown`),ht.disabled=!d(Z),Qe(ht,"title",d(A)?"This mod loader is not supported yet.":"Create the instance"),me(Wt,d(D)?"Creating…":"OK")}),ae("click",we,ve=>{ve.target===ve.currentTarget&&e.onclose?.()}),ae("click",Ve,j),Ot(Ae,()=>d(_),ve=>y(_,ve)),Xs(F,()=>d(x),ve=>y(x,ve)),ae("click",Ee,()=>e.onclose?.()),Ot(le,()=>d(f),ve=>y(f,ve)),ae("click",V,Te),ae("click",at,()=>e.onclose?.()),ae("click",ht,ee),re(n,we),wn()}Vn(["click","keydown","change"]);var Im=_e('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Um=_e('<button class="w-full rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game">■ Kill</button>'),Nm=_e("<button> </button>"),Om=_e('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Fm=_e('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="w-full rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">▶ Launch</button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">⚙ Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">📂 Folder</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip">⤓ Export</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance">⧉ Copy</button> <button class="w-full rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance">⇱ Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function km(n,e){En(e,!0);let t=dt(e,"storage",3,null),i=dt(e,"gameRunning",3,!1),r=dt(e,"modsCount",3,null),a=dt(e,"groups",19,()=>[]),o=xe(!1),s=xe("");const l=Ft(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function c(){const Ae=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&Ae?Ae(e.instance.icon_path):"/logo.png"}function u(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function f(Ae){const be=new Date(Ae*1e3),F=G=>String(G).padStart(2,"0");return`${F(be.getDate())}/${F(be.getMonth()+1)}/${be.getFullYear()} ${F(be.getHours())}:${F(be.getMinutes())}:${F(be.getSeconds())}`}function p(Ae){const be=Math.max(0,Math.floor(Ae)),F=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],G=[];let ye=be;for(const[Ee,Ce]of F){const Pe=Math.floor(ye/Ee);if(Pe&&(G.push(`${Pe} ${Ce}${Pe===1?"":"s"}`),ye-=Pe*Ee,G.length===2))break}return G.length?G.join(" "):"0 seconds"}const g=Ft(()=>{const Ae=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${Ae}, last played on ${f(e.instance.last_played)}, total played for ${p(e.instance.total_time_played)}`:Ae});function _(Ae){y(o,!1),y(s,""),e.onchangegroup?.(Ae.trim()?Ae.trim():null)}var x=Fm(),m=z(x),h=pe(m),E=C(m,2),b=pe(E,!0),S=C(E,2),w=z(S),D=pe(w,!0),R=C(w,2),N=pe(R,!0),M=C(R,2);{var A=Ae=>{var be=Im(),F=pe(be);Fe(()=>me(F,`▤ ${e.instance.group??""}`)),re(Ae,be)};Ke(M,Ae=>{e.instance.group&&Ae(A)})}var se=C(S,2),Z=pe(se,!0),k=C(se,2),X=z(k),Q=C(X,2);{var Y=Ae=>{var be=Um();ae("click",be,function(...F){e.onkill?.apply(this,F)}),re(Ae,be)};Ke(Q,Ae=>{i()&&Ae(Y)})}var j=C(Q,2),W=C(j,2),ue=C(z(W),2),ge=pe(ue,!0),q=C(W,2);{var ee=Ae=>{var be=Om(),F=z(be),G=C(F,2);wt(G,16,a,Pe=>Pe,(Pe,Ge)=>{var Xe=Nm(),T=pe(Xe,!0);Fe(()=>{Mt(Xe,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===Ge?"font-medium text-(--accent)":"text-(--text-muted)"}`),me(T,Ge)}),ae("click",Xe,()=>_(Ge)),re(Pe,Xe)});var ye=C(G,2),Ee=z(ye),Ce=C(Ee,2);Fe(Pe=>{Mt(F,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),Ce.disabled=Pe},[()=>!d(s).trim()]),ae("click",F,()=>_("")),ae("keydown",Ee,Pe=>{Pe.key==="Enter"&&d(s).trim()&&_(d(s))}),Ot(Ee,()=>d(s),Pe=>y(s,Pe)),ae("click",Ce,()=>_(d(s))),re(Ae,be)};Ke(q,Ae=>{d(o)&&Ae(ee)})}var Te=C(q,2),we=C(Te,2),Oe=C(we,2),Be=C(Oe,2),Ve=C(Be,2),We=C(k,2),te=z(We),De=pe(te,!0),Le=C(te,2),O=pe(Le);Fe((Ae,be,F)=>{Qe(h,"src",Ae),Qe(E,"title",e.instance.name),me(b,e.instance.name),me(D,e.instance.minecraft_version),Mt(R,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${d(l)??""}`),me(N,e.instance.loader_type),Qe(se,"title",be),me(Z,F),X.disabled=i(),Qe(X,"title",i()?"A game is already running":`Launch ${e.instance.name}`),me(ge,d(o)?"▴":"▾"),Te.disabled=!t(),Qe(Te,"title",t()?"Opens the instance folder":"Storage unknown"),me(De,d(g)),me(O,`${r()??"…"??""} mods installed`)},[()=>c(),()=>u(),()=>u()]),$i("error",h,Ae=>{Ae.currentTarget.dataset.f||(Ae.currentTarget.dataset.f="1",Ae.currentTarget.src="/logo.png")}),ae("click",X,function(...Ae){e.onlaunch?.apply(this,Ae)}),ae("click",j,function(...Ae){e.onedit?.apply(this,Ae)}),ae("click",W,()=>y(o,!d(o))),ae("click",Te,function(...Ae){e.onopenfolder?.apply(this,Ae)}),ae("click",we,function(...Ae){e.onexport?.apply(this,Ae)}),ae("click",Oe,function(...Ae){e.oncopy?.apply(this,Ae)}),ae("click",Be,function(...Ae){e.ondelete?.apply(this,Ae)}),ae("click",Ve,function(...Ae){e.onshortcut?.apply(this,Ae)}),re(n,x),wn()}Vn(["click","keydown"]);const Ya="twilight_user_accent",Il="twilight_custom_themes",fc="#06B6D4",hc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],pc="#0F172A",Bm="#FFFFFF",zm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function as(n){return zm[n]??[]}function es(n){let e=n.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function mc(n){const e=t=>{const i=parseInt(n.replace("#","").substring(t,t+2),16)/255;return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function Gm(n){const e=mc(n),t=1.05/(e+.05);return(e+.05)/(mc(pc)+.05)>=t?pc:Bm}function qa(n,{persist:e=!0}={}){const t=es(n);if(!t)return!1;const i=document.documentElement;return i.style.setProperty("--user-accent",t),i.style.setProperty("--on-accent",Gm(t)),e&&localStorage.setItem(Ya,t),!0}function Hm(){localStorage.removeItem(Ya);const n=document.documentElement;n.style.removeProperty("--user-accent"),n.style.removeProperty("--on-accent")}function ol(){return es(localStorage.getItem(Ya)??"")}function Vm(){const n=ol();n&&qa(n)}const to=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:hc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...hc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:as("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:as("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:as("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:as("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],Ul="twilight-dark",ll={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},Wm=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function Xm(n){let e="";for(const t of n){const i=t.codePointAt(0);i>=65&&i<=90?e+=String.fromCharCode(i+32):i>=97&&i<=122||i>=48&&i<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function Xd(n){const e=n&&typeof n=="object"?n:{},t={};for(const[i,r]of Object.entries(ll))t[i]=es(e[i]??"")??r;return t}function jm(n){return typeof n=="string"&&n.startsWith("custom:")}function jd(n){return fr().find(e=>e.id===n)??null}function fr(){try{const n=JSON.parse(localStorage.getItem(Il)??"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e=="object"&&jm(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:Xd(e.tokens)})):[]}catch{return[]}}function gc({name:n,dark:e,tokens:t}){const i=String(n??"").trim()||"Custom theme",r={id:`custom:${Xm(i)||"theme"}`,name:i,dark:!!e,tokens:Xd(t)},a=[...fr().filter(o=>o.id!==r.id),r];return localStorage.setItem(Il,JSON.stringify(a)),r}function Ym(n){const e=fr().filter(t=>t.id!==n);return localStorage.setItem(Il,JSON.stringify(e)),e}function vc(){try{const n=getComputedStyle(document.documentElement),e=(i,r)=>{const a=n.getPropertyValue(i).trim();return es(a)??r},t={};for(const[i,r]of Object.entries(ll)){const a=`--${i.replace(/(\d)$/,"-$1")}`;t[i]=e(a,r)}return t}catch{return{...ll}}}const qm=new Set(to.map(n=>n.id));function Yd(n){const e=(n??"").trim();return e==="dark"?Ul:e==="light"?"twilight-light":qm.has(e)||jd(e)?e:null}function Km(n){const e=n.tokens;return{id:n.id,label:n.name,dark:n.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:n.name,hex:e.accent1}],tokens:e}}function $r(n){const e=Yd(n);return e?to.find(t=>t.id===e)??Km(jd(e)):null}function ss(n){return $r(n)?.dark??!0}const Zm=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let vo="";function Jm(n){const e=$r(n)??$r(Ul);if(!e||e.id===vo)return e;const t=vo==="";vo=e.id;const i=document.documentElement;for(const r of Zm)i.style.removeProperty(r);i.classList.toggle("dark",e.dark),i.classList.toggle("light",!e.dark);for(const r of to)r.cls&&i.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;i.style.setProperty("--bg-1",r.bg1),i.style.setProperty("--bg-2",r.bg2),i.style.setProperty("--bg-3",r.bg3),i.style.setProperty("--border-1",r.border1),i.style.setProperty("--fg-1",r.fg1),i.style.setProperty("--fg-2",r.fg2),i.style.setProperty("--accent-1",r.accent1),i.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(Ya),qa(r.accent1,{persist:!1})}else t||(localStorage.removeItem(Ya),qa(e.accent,{persist:!1}));return e}var Qm=_e("<button></button>"),$m=_e('<span class="text-[11px] text-rose-400">invalid hex</span>'),eg=_e('<span class="text-[11px] text-(--text-muted)">live preview</span>'),tg=_e('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function ng(n,e){En(e,!0);let t=dt(e,"theme",3,"twilight-dark");const i=Ft(()=>$r(t())?.accent??fc),r=Ft(()=>{const b=$r(t())?.suggested??[],S=($r(t())?.accent??fc).toLowerCase();return b.map(w=>({...w,isBuiltin:w.hex.toLowerCase()===S}))});let a=xe(Rt(ol())),o=xe(Rt(d(a)??d(i))),s=xe(!1);In(()=>{t(),y(a,ol(),!0),y(o,d(a)??d(i),!0),y(s,!1)});function l(b){return d(a)===null?b.isBuiltin:d(a)===b.hex.toLowerCase()}function c(b){b.isBuiltin?(Hm(),y(a,null)):qa(b.hex)&&y(a,b.hex.toLowerCase(),!0),y(o,d(a)??d(i),!0),y(s,!1)}function u(b,S){const w=qa(b,{persist:S})?es(b):null;w?(y(a,w,!0),y(s,!1)):y(s,!0)}var f=tg(),p=Pt(f);wt(p,21,()=>d(r),b=>b.hex,(b,S)=>{var w=Qm();Fe((D,R)=>{Mt(w,1,`h-7 w-7 rounded-full ${D??""}`),Wi(w,`background:${d(S).hex??""}`),Qe(w,"title",`${d(S).name??""}${d(S).isBuiltin?" (built-in)":""}`),Qe(w,"aria-label",`${d(S).name??""} accent`),Qe(w,"aria-pressed",R)},[()=>l(d(S))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>l(d(S))]),ae("click",w,()=>c(d(S))),re(b,w)});var g=C(p,2),_=z(g),x=C(_,2),m=C(x,2);{var h=b=>{var S=$m();re(b,S)},E=b=>{var S=eg();re(b,S)};Ke(m,b=>{d(s)?b(h):b(E,-1)})}Fe(()=>{Xa(_,d(o)),Xa(x,d(o)),Qe(x,"placeholder",d(i))}),ae("input",_,b=>{y(o,b.currentTarget.value,!0),u(d(o),!1)}),ae("change",_,b=>u(b.currentTarget.value,!0)),ae("input",x,b=>{y(o,b.currentTarget.value,!0),u(d(o),!1)}),ae("change",x,b=>u(b.currentTarget.value,!0)),re(n,f),wn()}Vn(["click","input","change"]);var ig=_e('<button><span class="w-5 shrink-0 text-center text-[15px]"> </span> <span class="truncate"> </span></button>'),rg=_e('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),ag=_e('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),sg=_e('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),_c=_e('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),og=_e(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),lg=_e("<option> </option>"),cg=_e('<p class="mt-2 text-[12px] text-rose-400"> </p>'),ug=_e('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!></select> <!> <!> <button class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)">↻ Rescan JREs</button> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),xc=_e('<button class="rounded px-4 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Reset</button>'),dg=_e('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="text-[12px] font-medium">Shared library <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick the shared libraries directory">Browse…</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <!></div></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="text-[12px] font-medium">Instances library <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick the instances directory">Browse…</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Rescans the grid from this directory">Save</button> <!></div> <p class="mt-2 text-[11px] text-(--text-muted)">Without an override the grid adopts an existing Prism or FreesmLauncher library when one is present.</p></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">Staging area</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded px-4 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div></div>',1),fg=_e('<h2 class="text-[16px] font-semibold">Storage &amp; Staging</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where the shared artifact library lives and where launch scratch files stage.</p> <!>',1),hg=_e('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),pg=_e("<p> </p>"),mg=_e('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function gg(n,e){En(e,!0);let t=dt(e,"version",3,""),i=dt(e,"theme",15,"twilight-dark"),r=dt(e,"storage",3,null),a=dt(e,"runtimes",19,()=>[]),o=dt(e,"scanning",3,!1),s=dt(e,"javaError",3,""),l=dt(e,"javaPath",15,""),c=dt(e,"minMem",15,0),u=dt(e,"maxMem",15,0),f=dt(e,"sharedInput",15,""),p=dt(e,"instancesInput",15,""),g=dt(e,"storageBusy",3,!1),_=dt(e,"storageMsg",3,""),x=dt(e,"javaMsg",3,""),m=dt(e,"gameRunning",3,!1);const h=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Storage & Staging",icon:"📁"},{id:"about",label:"About & Updates",icon:"ℹ️"}];let E=xe("appearance"),b=xe(Rt(fr())),S=xe(""),w=xe(!0),D=xe(Rt(vc())),R=xe(""),N=xe("");function M(){y(D,vc(),!0),y(N,"Loaded the active theme’s tokens — tweak and save.")}function A(){try{const te=gc({name:d(S),dark:d(w),tokens:d(D)});y(b,fr(),!0),i(te.id),y(N,`Saved “${te.name}”.`)}catch(te){y(N,String(te),!0)}}function se(te){Ym(te),y(b,fr(),!0),i()===te&&i(Ul),y(N,"Theme deleted.")}function Z(){y(R,JSON.stringify({name:d(S).trim()||"My theme",dark:d(w),tokens:d(D)},null,2),!0),y(N,"Theme JSON written below — copy it to share.")}function k(){try{const te=JSON.parse(d(R));if(!te||typeof te!="object"||Array.isArray(te))throw new Error("Expected a theme object.");const De=gc(te);y(b,fr(),!0),i(De.id),y(N,`Imported “${De.name}”.`),y(R,"")}catch(te){y(N,`Import failed: ${te}`)}}async function X(te){const De=window.__TAURI__?.dialog?.open;if(!De)return null;try{const Le=await De({directory:!0,multiple:!1,defaultPath:te&&te.trim()?te.trim():void 0});return typeof Le=="string"?Le:null}catch{return null}}const Q="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var Y=mg(),j=z(Y),W=z(j),ue=C(W,2);wt(ue,21,()=>h,te=>te.id,(te,De)=>{var Le=ig(),O=z(Le),Ae=pe(O,!0),be=C(O,2),F=pe(be,!0);Fe(()=>{Mt(Le,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${d(E)===d(De).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Qe(Le,"aria-current",d(E)===d(De).id?"true":void 0),me(Ae,d(De).icon),me(F,d(De).label)}),ae("click",Le,()=>y(E,d(De).id,!0)),re(te,Le)});var ge=C(j,2),q=z(ge),ee=z(q);{var Te=te=>{var De=og(),Le=C(Pt(De),6),O=z(Le);wt(O,17,()=>to,ie=>ie.id,(ie,de)=>{var fe=rg(),Ie=z(fe),je=z(Ie),Ye=C(je,2),U=C(Ye,2),Ue=C(Ie,2),V=pe(Ue,!0),Se=C(Ue,2),Ne=pe(Se,!0);Fe(()=>{Mt(fe,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===d(de).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Qe(fe,"aria-pressed",i()===d(de).id),Qe(fe,"title",`${d(de).label??""}: ${d(de).dark?"dark":"light"} ground`),Wi(je,`background:${d(de).swatch[0]??""}`),Wi(Ye,`background:${d(de).swatch[1]??""}`),Wi(U,`background:${d(de).swatch[2]??""}`),me(V,d(de).label),me(Ne,d(de).dark?"Dark ground":"Light ground")}),ae("click",fe,()=>i(d(de).id)),re(ie,fe)});var Ae=C(O,2);wt(Ae,17,()=>d(b),ie=>ie.id,(ie,de)=>{var fe=ag(),Ie=z(fe),je=z(Ie),Ye=C(je,2),U=C(Ye,2),Ue=C(Ie,2),V=pe(Ue,!0),Se=C(Ue,2),Ne=pe(Se),rt=C(Se,2);Fe(()=>{Mt(fe,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===d(de).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Qe(fe,"title",`${d(de).name??""}: ${d(de).dark?"dark":"light"} ground`),Wi(je,`background:${d(de).tokens.bg1??""}`),Wi(Ye,`background:${d(de).tokens.bg3??""}`),Wi(U,`background:${d(de).tokens.accent1??""}`),me(V,d(de).name),me(Ne,`Custom · ${d(de).dark?"Dark":"Light"} ground`),Qe(rt,"title",`Delete ${d(de).name??""}`),Qe(rt,"aria-label",`Delete ${d(de).name??""}`)}),ae("click",fe,()=>i(d(de).id)),ae("keydown",fe,at=>{(at.key==="Enter"||at.key===" ")&&(at.preventDefault(),i(d(de).id))}),ae("click",rt,at=>{at.stopPropagation(),se(d(de).id)}),re(ie,fe)});var be=C(Le,4),F=z(be);ng(F,{get theme(){return i()}});var G=C(be,6),ye=z(G),Ee=z(ye),Ce=C(Ee,2),Pe=z(Ce),Ge=C(Pe,2),Xe=C(ye,2);wt(Xe,21,()=>Wm,ie=>ie.key,(ie,de)=>{var fe=sg(),Ie=z(fe),je=pe(Ie,!0),Ye=C(Ie,2),U=z(Ye),Ue=C(U,2);Fe(()=>{me(je,d(de).label),Xa(U,d(D)[d(de).key]),Qe(U,"title",`${d(de).label??""} color`),Qe(U,"aria-label",`${d(de).label??""} color`),Xa(Ue,d(D)[d(de).key]),Qe(Ue,"aria-label",`${d(de).label??""} hex`)}),ae("input",U,V=>y(D,{...d(D),[d(de).key]:V.currentTarget.value},!0)),ae("input",Ue,V=>y(D,{...d(D),[d(de).key]:V.currentTarget.value},!0)),re(ie,fe)});var T=C(Xe,2),v=z(T),I=C(v,2),ne=C(G,4),le=z(ne),he=C(le,2),ke=z(he),Me=C(ke,2),K=C(ne,2);{var L=ie=>{var de=_c(),fe=pe(de,!0);Fe(()=>me(fe,d(N))),re(ie,de)};Ke(K,ie=>{d(N)&&ie(L)})}Fe(()=>{Mt(Pe,1,`px-3 py-1.5 text-[12px] ${d(w)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Qe(Pe,"aria-pressed",d(w)),Mt(Ge,1,`px-3 py-1.5 text-[12px] ${d(w)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),Qe(Ge,"aria-pressed",!d(w))}),Ot(Ee,()=>d(S),ie=>y(S,ie)),ae("click",Pe,()=>y(w,!0)),ae("click",Ge,()=>y(w,!1)),ae("click",v,M),ae("click",I,A),Ot(le,()=>d(R),ie=>y(R,ie)),ae("click",ke,Z),ae("click",Me,k),re(te,De)},we=te=>{var De=ug(),Le=C(Pt(De),6),O=z(Le);O.value=O.__value="";var Ae=C(O);wt(Ae,17,a,ne=>ne.executable,(ne,le)=>{var he=lg(),ke=pe(he),Me={};Fe(()=>{me(ke,`Java ${d(le).major??""} — ${d(le).home??""}`),Me!==(Me=d(le).executable)&&(he.value=(he.__value=Me)??"")}),re(ne,he)}),Ws(Le);var be=C(Le,2);{var F=ne=>{var le=_c(),he=pe(le,!0);Fe(()=>me(he,o()?"Probing system roots…":"No runtimes detected.")),re(ne,le)};Ke(be,ne=>{a().length||ne(F)})}var G=C(be,2);{var ye=ne=>{var le=cg(),he=pe(le,!0);Fe(()=>me(he,s())),re(ne,le)};Ke(G,ne=>{s()&&ne(ye)})}var Ee=C(G,2),Ce=C(Ee,4),Pe=C(z(Ce),2),Ge=C(Pe,2),Xe=C(Ce,2),T=C(z(Xe),2),v=C(T,2),I=C(Xe,4);Fe(()=>Ee.disabled=o()),Xs(Le,l),ae("click",Ee,function(...ne){e.onscanjava?.apply(this,ne)}),Ot(Pe,c),Ot(Ge,c),Ot(T,u),Ot(v,u),ae("click",I,function(...ne){e.onsaveprefs?.apply(this,ne)}),re(te,De)},Oe=te=>{var De=fg(),Le=C(Pt(De),4);{var O=Ae=>{var be=dg(),F=Pt(be),G=z(F),ye=C(z(G)),Ee=pe(ye,!0),Ce=C(G,2),Pe=z(Ce),Ge=C(Pe,2),Xe=C(Ge,2),T=C(Xe,2);{var v=V=>{var Se=xc();Fe(()=>Se.disabled=g()),ae("click",Se,function(...Ne){e.onresetshared?.apply(this,Ne)}),re(V,Se)};Ke(T,V=>{r().is_default_shared||V(v)})}var I=C(F,2),ne=z(I),le=C(z(ne)),he=pe(le,!0),ke=C(ne,2),Me=z(ke),K=C(Me,2),L=C(K,2),ie=C(L,2);{var de=V=>{var Se=xc();Fe(()=>Se.disabled=g()),ae("click",Se,function(...Ne){e.onresetinstances?.apply(this,Ne)}),re(V,Se)};Ke(ie,V=>{r().is_default_instances||V(de)})}var fe=C(I,2),Ie=z(fe),je=z(Ie),Ye=C(z(je),2),U=pe(Ye,!0),Ue=C(je,2);Fe(()=>{me(Ee,r().is_default_shared?"(default)":"(custom)"),Qe(Pe,"placeholder",r().shared_dir),Xe.disabled=g(),me(he,r().is_default_instances?"(default)":"(override)"),Qe(Me,"placeholder",r().instances_dir),L.disabled=g(),Qe(Ye,"title",r().staging_root),me(U,r().staging_root),Ue.disabled=g()||m(),Qe(Ue,"title",m()?"Unavailable while a game is running":"Purges the staging area")}),Ot(Pe,f),ae("click",Ge,async()=>{const V=await X(f());V&&f(V)}),ae("click",Xe,function(...V){e.onsaveshared?.apply(this,V)}),Ot(Me,p),ae("click",K,async()=>{const V=await X(p());V&&p(V)}),ae("click",L,function(...V){e.onsaveinstances?.apply(this,V)}),ae("click",Ue,function(...V){e.oncleanstaging?.apply(this,V)}),re(Ae,be)};Ke(Le,Ae=>{r()&&Ae(O)})}re(te,De)},Be=te=>{var De=hg(),Le=C(Pt(De),4),O=z(Le),Ae=C(z(O),2),be=z(Ae),F=C(z(be)),G=pe(F),ye=C(Le,2),Ee=z(ye),Ce=C(Ee,2),Pe=C(Ce,2);Fe(()=>me(G,`(alpha-v${t()??""})`)),ae("click",Ee,()=>e.onopenurl?.(`${Q}`)),ae("click",Ce,()=>e.onopenurl?.(`${Q}/releases`)),ae("click",Pe,()=>e.onopenurl?.(`${Q}/issues`)),re(te,De)};Ke(ee,te=>{d(E)==="appearance"?te(Te):d(E)==="java"?te(we,1):d(E)==="storage"?te(Oe,2):te(Be,-1)})}var Ve=C(ee,2);{var We=te=>{var De=pg(),Le=pe(De,!0);Fe(()=>{Mt(De,1,`mt-5 text-[12px] ${x()?"text-(--accent)":"text-(--text-muted)"}`),me(Le,x()||_())}),re(te,De)};Ke(Ve,te=>{(x()||_())&&te(We)})}ae("click",W,function(...te){e.onback?.apply(this,te)}),re(n,Y),wn()}Vn(["click","keydown","input"]);const Nl="156",wr={ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vg=0,bc=1,_g=2,qd=1,xg=2,Mi=3,fi=0,Sn=1,Gn=2,Pi=0,ea=1,yc=2,Mc=3,Sc=4,bg=5,Yr=100,yg=101,Mg=102,Ec=103,wc=104,Sg=200,Eg=201,wg=202,Tg=203,Kd=204,Zd=205,Ag=206,Rg=207,Cg=208,Pg=209,Lg=210,Dg=0,Ig=1,Ug=2,cl=3,Ng=4,Og=5,Fg=6,kg=7,Jd=0,Bg=1,zg=2,qi=0,Gg=1,Hg=2,Vg=3,Wg=4,Xg=5,Qd=300,oa=301,la=302,js=303,ul=304,no=306,dl=1e3,Zn=1001,fl=1002,Dt=1003,Tc=1004,_o=1005,Bn=1006,jg=1007,Ka=1008,Ki=1009,Yg=1010,qg=1011,Ol=1012,$d=1013,ji=1014,Ai=1015,ca=1016,ef=1017,tf=1018,gr=1020,Kg=1021,Jn=1023,Zg=1024,Jg=1025,vr=1026,ua=1027,Qg=1028,nf=1029,$g=1030,rf=1031,af=1033,xo=33776,bo=33777,yo=33778,Mo=33779,Ac=35840,Rc=35841,Cc=35842,Pc=35843,ev=36196,Lc=37492,Dc=37496,Ic=37808,Uc=37809,Nc=37810,Oc=37811,Fc=37812,kc=37813,Bc=37814,zc=37815,Gc=37816,Hc=37817,Vc=37818,Wc=37819,Xc=37820,jc=37821,So=36492,Yc=36494,qc=36495,tv=36283,Kc=36284,Zc=36285,Jc=36286,sf=3e3,_r=3001,nv=3200,iv=3201,of=0,rv=1,xr="",At="srgb",hi="srgb-linear",io="display-p3",Eo=7680,av=519,sv=512,ov=513,lv=514,cv=515,uv=516,dv=517,fv=518,hv=519,hl=35044,Qc="300 es",pl=1035,Ri=2e3,Ys=2001;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,ml=180/Math.PI;function Zi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function vn(n,e,t){return Math.max(e,Math.min(t,n))}function pv(n,e){return(n%e+e)%e}function wo(n,e,t){return(1-t)*n+t*e}function $c(n){return(n&n-1)===0&&n!==0}function gl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const mv={DEG2RAD:Ns};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,i,r,a,o,s,l,c){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],p=i[2],g=i[5],_=i[8],x=r[0],m=r[3],h=r[6],E=r[1],b=r[4],S=r[7],w=r[2],D=r[5],R=r[8];return a[0]=o*x+s*E+l*w,a[3]=o*m+s*b+l*D,a[6]=o*h+s*S+l*R,a[1]=c*x+u*E+f*w,a[4]=c*m+u*b+f*D,a[7]=c*h+u*S+f*R,a[2]=p*x+g*E+_*w,a[5]=p*m+g*b+_*D,a[8]=p*h+g*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,p=s*l-u*a,g=c*a-o*l,_=t*f+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(s*i-r*o)*x,e[3]=p*x,e[4]=(u*t-r*l)*x,e[5]=(r*a-s*t)*x,e[6]=g*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new ft;function lf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gv(){const n=qs("canvas");return n.style.display="block",n}const eu={};function Ba(n){n in eu||(eu[n]=!0,console.warn(n))}function ta(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const vv=new ft().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),_v=new ft().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function xv(n){return n.convertSRGBToLinear().applyMatrix3(_v)}function bv(n){return n.applyMatrix3(vv).convertLinearToSRGB()}const yv={[hi]:n=>n,[At]:n=>n.convertSRGBToLinear(),[io]:xv},Mv={[hi]:n=>n,[At]:n=>n.convertLinearToSRGB(),[io]:bv},On={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return hi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=yv[e],r=Mv[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ar;class cf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=qs("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ta(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ta(t[i]/255)*255):t[i]=ta(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sv=0;class uf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Ro(r[o].image)):a.push(Ro(r[o]))}else a=Ro(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ev=0;class ln extends Mr{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=Zn,r=Zn,a=Bn,o=Ka,s=Jn,l=Ki,c=ln.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Zi(),this.name="",this.source=new uf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_r?At:xr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dl:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dl:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?_r:sf}set encoding(e){Ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_r?At:xr}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Qd;ln.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],p=l[1],g=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(g+1)/2,w=(h+1)/2,D=(u+p)/4,R=(f+x)/4,N=(_+m)/4;return b>S&&b>w?b<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(b),r=D/i,a=R/i):S>w?S<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),i=D/r,a=N/r):w<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),i=R/a,r=N/a),this.set(i,r,a,t),this}let E=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-x)/E,this.z=(p-u)/E,this.w=Math.acos((c+g+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wv extends Mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ba("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_r?At:xr),this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends wv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class df extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tv extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const p=a[o+0],g=a[o+1],_=a[o+2],x=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=p,e[t+1]=g,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==p||c!==g||u!==_){let m=1-s;const h=l*p+c*g+u*_+f*x,E=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const w=Math.sqrt(b),D=Math.atan2(w,h*E);m=Math.sin(m*D)/w,s=Math.sin(s*D)/w}const S=s*E;if(l=l*m+p*S,c=c*m+g*S,u=u*m+_*S,f=f*m+x*S,m===1-s){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[o],p=a[o+1],g=a[o+2],_=a[o+3];return e[t]=s*_+u*f+l*g-c*p,e[t+1]=l*_+u*p+c*f-s*g,e[t+2]=c*_+u*g+s*p-l*f,e[t+3]=u*_-s*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(a/2),p=l(i/2),g=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=p*u*f+c*g*_,this._y=c*g*f-p*u*_,this._z=c*u*_+p*g*f,this._w=c*u*f-p*g*_;break;case"YXZ":this._x=p*u*f+c*g*_,this._y=c*g*f-p*u*_,this._z=c*u*_-p*g*f,this._w=c*u*f+p*g*_;break;case"ZXY":this._x=p*u*f-c*g*_,this._y=c*g*f+p*u*_,this._z=c*u*_+p*g*f,this._w=c*u*f-p*g*_;break;case"ZYX":this._x=p*u*f-c*g*_,this._y=c*g*f+p*u*_,this._z=c*u*_-p*g*f,this._w=c*u*f+p*g*_;break;case"YZX":this._x=p*u*f+c*g*_,this._y=c*g*f+p*u*_,this._z=c*u*_-p*g*f,this._w=c*u*f-p*g*_;break;case"XZY":this._x=p*u*f-c*g*_,this._y=c*g*f-p*u*_,this._z=c*u*_+p*g*f,this._w=c*u*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],p=i+s+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-l)*g,this._y=(a-c)*g,this._z=(o-r)*g}else if(i>s&&i>f){const g=2*Math.sqrt(1+i-s-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(a+c)/g}else if(s>f){const g=2*Math.sqrt(1+s-i-f);this._w=(a-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-i-s);this._w=(o-r)/g,this._x=(a+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*r-s*i,u=l*i+s*t-a*r,f=l*r+a*i-o*t,p=-a*t-o*i-s*r;return this.x=c*l+p*-a+u*-s-f*-o,this.y=u*l+p*-o+f*-a-c*-s,this.z=f*l+p*-s+c*-o-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new H,tu=new yr;class ts{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)vi.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else r.boundingBox===null&&r.computeBoundingBox(),Rr.copy(r.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),os.subVectors(this.max,Ea),Cr.subVectors(e.a,Ea),Pr.subVectors(e.b,Ea),Lr.subVectors(e.c,Ea),zi.subVectors(Pr,Cr),Gi.subVectors(Lr,Pr),nr.subVectors(Cr,Lr);let t=[0,-zi.z,zi.y,0,-Gi.z,Gi.y,0,-nr.z,nr.y,zi.z,0,-zi.x,Gi.z,0,-Gi.x,nr.z,0,-nr.x,-zi.y,zi.x,0,-Gi.y,Gi.x,0,-nr.y,nr.x,0];return!Po(t,Cr,Pr,Lr,os)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,Cr,Pr,Lr,os))?!1:(ls.crossVectors(zi,Gi),t=[ls.x,ls.y,ls.z],Po(t,Cr,Pr,Lr,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new H,new H,new H,new H,new H,new H,new H,new H],vi=new H,Rr=new ts,Cr=new H,Pr=new H,Lr=new H,zi=new H,Gi=new H,nr=new H,Ea=new H,os=new H,ls=new H,ir=new H;function Po(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){ir.fromArray(n,a);const s=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Av=new ts,wa=new H,Lo=new H;class Fl{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Av.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(Lo)),this.expandByPoint(wa.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new H,Do=new H,cs=new H,Hi=new H,Io=new H,us=new H,Uo=new H;class ff{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Do.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Do);const a=e.distanceTo(t)*.5,o=-this.direction.dot(cs),s=Hi.dot(this.direction),l=-Hi.dot(cs),c=Hi.lengthSq(),u=Math.abs(1-o*o);let f,p,g,_;if(u>0)if(f=o*l-s,p=o*s-l,_=a*u,f>=0)if(p>=-_)if(p<=_){const x=1/u;f*=x,p*=x,g=f*(f+o*p+2*s)+p*(o*f+p+2*l)+c}else p=a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-o*a+s)),p=f>0?-a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-a,-l),a),g=p*(p+2*l)+c):(f=Math.max(0,-(o*a+s)),p=f>0?a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c);else p=o>0?-a:a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Do).addScaledVector(cs,p),g}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(a=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(s=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,r,a){Io.subVectors(t,e),us.subVectors(i,e),Uo.crossVectors(Io,us);let o=this.direction.dot(Uo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=s*this.direction.dot(us.crossVectors(Hi,us));if(l<0)return null;const c=s*this.direction.dot(Io.cross(Hi));if(c<0||l+c>o)return null;const u=-s*Hi.dot(Uo);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,i,r,a,o,s,l,c,u,f,p,g,_,x,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,u,f,p,g,_,x,m)}set(e,t,i,r,a,o,s,l,c,u,f,p,g,_,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=p,h[3]=g,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),a=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=o*u,g=o*f,_=s*u,x=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=g+_*c,t[5]=p-x*c,t[9]=-s*l,t[2]=x-p*c,t[6]=_+g*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,g=l*f,_=c*u,x=c*f;t[0]=p+x*s,t[4]=_*s-g,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=g*s-_,t[6]=x+p*s,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,g=l*f,_=c*u,x=c*f;t[0]=p-x*s,t[4]=-o*f,t[8]=_+g*s,t[1]=g+_*s,t[5]=o*u,t[9]=x-p*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,g=o*f,_=s*u,x=s*f;t[0]=l*u,t[4]=_*c-g,t[8]=p*c+x,t[1]=l*f,t[5]=x*c+p,t[9]=g*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,g=o*c,_=s*l,x=s*c;t[0]=l*u,t[4]=x-p*f,t[8]=_*f+g,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=g*f+_,t[10]=p-x*f}else if(e.order==="XZY"){const p=o*l,g=o*c,_=s*l,x=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=p*f+x,t[5]=o*u,t[9]=g*f-_,t[2]=_*f-g,t[6]=s*u,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rv,e,Cv)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Vi.crossVectors(i,Rn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Vi.crossVectors(i,Rn)),Vi.normalize(),ds.crossVectors(Rn,Vi),r[0]=Vi.x,r[4]=ds.x,r[8]=Rn.x,r[1]=Vi.y,r[5]=ds.y,r[9]=Rn.y,r[2]=Vi.z,r[6]=ds.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],p=i[9],g=i[13],_=i[2],x=i[6],m=i[10],h=i[14],E=i[3],b=i[7],S=i[11],w=i[15],D=r[0],R=r[4],N=r[8],M=r[12],A=r[1],se=r[5],Z=r[9],k=r[13],X=r[2],Q=r[6],Y=r[10],j=r[14],W=r[3],ue=r[7],ge=r[11],q=r[15];return a[0]=o*D+s*A+l*X+c*W,a[4]=o*R+s*se+l*Q+c*ue,a[8]=o*N+s*Z+l*Y+c*ge,a[12]=o*M+s*k+l*j+c*q,a[1]=u*D+f*A+p*X+g*W,a[5]=u*R+f*se+p*Q+g*ue,a[9]=u*N+f*Z+p*Y+g*ge,a[13]=u*M+f*k+p*j+g*q,a[2]=_*D+x*A+m*X+h*W,a[6]=_*R+x*se+m*Q+h*ue,a[10]=_*N+x*Z+m*Y+h*ge,a[14]=_*M+x*k+m*j+h*q,a[3]=E*D+b*A+S*X+w*W,a[7]=E*R+b*se+S*Q+w*ue,a[11]=E*N+b*Z+S*Y+w*ge,a[15]=E*M+b*k+S*j+w*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],p=e[10],g=e[14],_=e[3],x=e[7],m=e[11],h=e[15];return _*(+a*l*f-r*c*f-a*s*p+i*c*p+r*s*g-i*l*g)+x*(+t*l*g-t*c*p+a*o*p-r*o*g+r*c*u-a*l*u)+m*(+t*c*f-t*s*g-a*o*f+i*o*g+a*s*u-i*c*u)+h*(-r*s*u-t*l*f+t*s*p+r*o*f-i*o*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],p=e[10],g=e[11],_=e[12],x=e[13],m=e[14],h=e[15],E=f*m*c-x*p*c+x*l*g-s*m*g-f*l*h+s*p*h,b=_*p*c-u*m*c-_*l*g+o*m*g+u*l*h-o*p*h,S=u*x*c-_*f*c+_*s*g-o*x*g-u*s*h+o*f*h,w=_*f*l-u*x*l-_*s*p+o*x*p+u*s*m-o*f*m,D=t*E+i*b+r*S+a*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=E*R,e[1]=(x*p*a-f*m*a-x*r*g+i*m*g+f*r*h-i*p*h)*R,e[2]=(s*m*a-x*l*a+x*r*c-i*m*c-s*r*h+i*l*h)*R,e[3]=(f*l*a-s*p*a-f*r*c+i*p*c+s*r*g-i*l*g)*R,e[4]=b*R,e[5]=(u*m*a-_*p*a+_*r*g-t*m*g-u*r*h+t*p*h)*R,e[6]=(_*l*a-o*m*a-_*r*c+t*m*c+o*r*h-t*l*h)*R,e[7]=(o*p*a-u*l*a+u*r*c-t*p*c-o*r*g+t*l*g)*R,e[8]=S*R,e[9]=(_*f*a-u*x*a-_*i*g+t*x*g+u*i*h-t*f*h)*R,e[10]=(o*x*a-_*s*a+_*i*c-t*x*c-o*i*h+t*s*h)*R,e[11]=(u*s*a-o*f*a-u*i*c+t*f*c+o*i*g-t*s*g)*R,e[12]=w*R,e[13]=(u*x*r-_*f*r+_*i*p-t*x*p-u*i*m+t*f*m)*R,e[14]=(_*s*r-o*x*r-_*i*l+t*x*l+o*i*m-t*s*m)*R,e[15]=(o*f*r-u*s*r+u*i*l-t*f*l-o*i*p+t*s*p)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,f=s+s,p=a*c,g=a*u,_=a*f,x=o*u,m=o*f,h=s*f,E=l*c,b=l*u,S=l*f,w=i.x,D=i.y,R=i.z;return r[0]=(1-(x+h))*w,r[1]=(g+S)*w,r[2]=(_-b)*w,r[3]=0,r[4]=(g-S)*D,r[5]=(1-(p+h))*D,r[6]=(m+E)*D,r[7]=0,r[8]=(_+b)*R,r[9]=(m-E)*R,r[10]=(1-(p+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Dr.set(r[0],r[1],r[2]).length();const o=Dr.set(r[4],r[5],r[6]).length(),s=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/a,u=1/o,f=1/s;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Ri){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(s===Ri)g=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===Ys)g=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Ri){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-a),p=(t+e)*c,g=(i+r)*u;let _,x;if(s===Ri)_=(o+a)*f,x=-2*f;else if(s===Ys)_=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Dr=new H,Yn=new Ht,Rv=new H(0,0,0),Cv=new H(1,1,1),Vi=new H,ds=new H,Rn=new H,nu=new Ht,iu=new yr;class ro{constructor(e=0,t=0,i=0,r=ro.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],p=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(vn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(vn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-vn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ro.DEFAULT_ORDER="XYZ";class hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pv=0;const ru=new H,Ir=new yr,xi=new Ht,fs=new H,Ta=new H,Lv=new H,Dv=new yr,au=new H(1,0,0),su=new H(0,1,0),ou=new H(0,0,1),Iv={type:"added"},Uv={type:"removed"};class cn extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new H,t=new ro,i=new yr,r=new H(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ft}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fs.copy(e):fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ta,fs,this.up):xi.lookAt(fs,Ta,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(xi),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Iv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,Dv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new H(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new H,bi=new H,No=new H,yi=new H,Ur=new H,Nr=new H,lu=new H,Oo=new H,Fo=new H,ko=new H;let hs=!1;class zn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){qn.subVectors(r,t),bi.subVectors(i,t),No.subVectors(e,t);const o=qn.dot(qn),s=qn.dot(bi),l=qn.dot(No),c=bi.dot(bi),u=bi.dot(No),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const p=1/f,g=(c*l-s*u)*p,_=(o*u-s*l)*p;return a.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yi),yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,t,i,r,a,o,s,l){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,yi),l.setScalar(0),l.addScaledVector(a,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(s,yi.z),l}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),bi.subVectors(e,t),qn.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),qn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return zn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;Ur.subVectors(r,i),Nr.subVectors(a,i),Oo.subVectors(e,i);const l=Ur.dot(Oo),c=Nr.dot(Oo);if(l<=0&&c<=0)return t.copy(i);Fo.subVectors(e,r);const u=Ur.dot(Fo),f=Nr.dot(Fo);if(u>=0&&f<=u)return t.copy(r);const p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ur,o);ko.subVectors(e,a);const g=Ur.dot(ko),_=Nr.dot(ko);if(_>=0&&g<=_)return t.copy(a);const x=g*c-l*_;if(x<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(i).addScaledVector(Nr,s);const m=u*_-g*f;if(m<=0&&f-u>=0&&g-_>=0)return lu.subVectors(a,r),s=(f-u)/(f-u+(g-_)),t.copy(r).addScaledVector(lu,s);const h=1/(m+x+p);return o=x*h,s=p*h,t.copy(i).addScaledVector(Ur,o).addScaledVector(Nr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Nv=0;class ga extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=ea,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Zd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,On.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=On.workingColorSpace){return this.r=e,this.g=t,this.b=i,On.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=On.workingColorSpace){if(e=pv(e,1),t=vn(t,0,1),i=vn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Bo(o,a,e+1/3),this.g=Bo(o,a,e),this.b=Bo(o,a,e-1/3)}return On.toWorkingColorSpace(this,r),this}setStyle(e,t=At){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=pf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return On.fromWorkingColorSpace(on.copy(this),e),Math.round(vn(on.r*255,0,255))*65536+Math.round(vn(on.g*255,0,255))*256+Math.round(vn(on.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=On.workingColorSpace){On.fromWorkingColorSpace(on.copy(this),t);const i=on.r,r=on.g,a=on.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=On.workingColorSpace){return On.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=At){On.fromWorkingColorSpace(on.copy(this),e);const t=on.r,i=on.g,r=on.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),Kn.h+=e,Kn.s+=t,Kn.l+=i,this.setHSL(Kn.h,Kn.s,Kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(ps);const i=wo(Kn.h,ps.h,t),r=wo(Kn.s,ps.s,t),a=wo(Kn.l,ps.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new xt;xt.NAMES=pf;class mf extends ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new H,ms=new $e;class ni{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hl,this.updateRange={offset:0,count:-1},this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),a=yt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class gf extends ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vf extends ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Li extends ni{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ov=0;const Un=new Ht,zo=new cn,Or=new H,Cn=new ts,Aa=new ts,$t=new H;class Oi extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?vf:gf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ft().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Cn.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Aa.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(Cn.min,Aa.min),Cn.expandByPoint($t),$t.addVectors(Cn.max,Aa.max),Cn.expandByPoint($t)):(Cn.expandByPoint(Aa.min),Cn.expandByPoint(Aa.max))}Cn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)$t.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared($t));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)$t.fromBufferAttribute(s,c),l&&(Or.fromBufferAttribute(e,c),$t.add(Or)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<s;A++)c[A]=new H,u[A]=new H;const f=new H,p=new H,g=new H,_=new $e,x=new $e,m=new $e,h=new H,E=new H;function b(A,se,Z){f.fromArray(r,A*3),p.fromArray(r,se*3),g.fromArray(r,Z*3),_.fromArray(o,A*2),x.fromArray(o,se*2),m.fromArray(o,Z*2),p.sub(f),g.sub(f),x.sub(_),m.sub(_);const k=1/(x.x*m.y-m.x*x.y);isFinite(k)&&(h.copy(p).multiplyScalar(m.y).addScaledVector(g,-x.y).multiplyScalar(k),E.copy(g).multiplyScalar(x.x).addScaledVector(p,-m.x).multiplyScalar(k),c[A].add(h),c[se].add(h),c[Z].add(h),u[A].add(E),u[se].add(E),u[Z].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,se=S.length;A<se;++A){const Z=S[A],k=Z.start,X=Z.count;for(let Q=k,Y=k+X;Q<Y;Q+=3)b(i[Q+0],i[Q+1],i[Q+2])}const w=new H,D=new H,R=new H,N=new H;function M(A){R.fromArray(a,A*3),N.copy(R);const se=c[A];w.copy(se),w.sub(R.multiplyScalar(R.dot(se))).normalize(),D.crossVectors(N,se);const k=D.dot(u[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=k}for(let A=0,se=S.length;A<se;++A){const Z=S[A],k=Z.start,X=Z.count;for(let Q=k,Y=k+X;Q<Y;Q+=3)M(i[Q+0]),M(i[Q+1]),M(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new H,a=new H,o=new H,s=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,p=new c.constructor(l.length*u);let g=0,_=0;for(let x=0,m=l.length;x<m;x++){s.isInterleavedBufferAttribute?g=l[x]*s.data.stride+s.offset:g=l[x]*u;for(let h=0;h<u;h++)p[_++]=c[g++]}return new ni(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const p=c[u],g=e(p,i);l.push(g)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let p=0,g=f.length;p<g;p++)u.push(f[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new Ht,rr=new ff,gs=new Fl,uu=new H,Fr=new H,kr=new H,Br=new H,Go=new H,vs=new H,_s=new $e,xs=new $e,bs=new $e,du=new H,fu=new H,hu=new H,ys=new H,Ms=new H;class St extends cn{constructor(e=new Oi,t=new mf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){vs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(Go.fromBufferAttribute(f,e),o?vs.addScaledVector(Go,u):vs.addScaledVector(Go.sub(t),u))}t.add(vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(a),rr.copy(e.ray).recast(e.near),!(gs.containsPoint(rr.origin)===!1&&(rr.intersectSphere(gs,uu)===null||rr.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(cu.copy(a).invert(),rr.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],h=o[m.materialIndex],E=Math.max(m.start,g.start),b=Math.min(s.count,Math.min(m.start+m.count,g.start+g.count));for(let S=E,w=b;S<w;S+=3){const D=s.getX(S),R=s.getX(S+1),N=s.getX(S+2);r=Ss(this,h,e,i,c,u,f,D,R,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(s.count,g.start+g.count);for(let m=_,h=x;m<h;m+=3){const E=s.getX(m),b=s.getX(m+1),S=s.getX(m+2);r=Ss(this,o,e,i,c,u,f,E,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],h=o[m.materialIndex],E=Math.max(m.start,g.start),b=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=E,w=b;S<w;S+=3){const D=S,R=S+1,N=S+2;r=Ss(this,h,e,i,c,u,f,D,R,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=_,h=x;m<h;m+=3){const E=m,b=m+1,S=m+2;r=Ss(this,o,e,i,c,u,f,E,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fv(n,e,t,i,r,a,o,s){let l;if(e.side===Sn?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===fi,s),l===null)return null;Ms.copy(s),Ms.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:n}}function Ss(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,Fr),n.getVertexPosition(l,kr),n.getVertexPosition(c,Br);const u=Fv(n,e,t,i,Fr,kr,Br,ys);if(u){r&&(_s.fromBufferAttribute(r,s),xs.fromBufferAttribute(r,l),bs.fromBufferAttribute(r,c),u.uv=zn.getInterpolation(ys,Fr,kr,Br,_s,xs,bs,new $e)),a&&(_s.fromBufferAttribute(a,s),xs.fromBufferAttribute(a,l),bs.fromBufferAttribute(a,c),u.uv1=zn.getInterpolation(ys,Fr,kr,Br,_s,xs,bs,new $e),u.uv2=u.uv1),o&&(du.fromBufferAttribute(o,s),fu.fromBufferAttribute(o,l),hu.fromBufferAttribute(o,c),u.normal=zn.getInterpolation(ys,Fr,kr,Br,du,fu,hu,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new H,materialIndex:0};zn.getNormal(Fr,kr,Br,f.normal),u.face=f}return u}class zt extends Oi{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,i,t,e,o,a,0),_("z","y","x",1,-1,i,t,-e,o,a,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,a,4),_("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(u,3)),this.setAttribute("uv",new Li(f,2));function _(x,m,h,E,b,S,w,D,R,N,M){const A=S/R,se=w/N,Z=S/2,k=w/2,X=D/2,Q=R+1,Y=N+1;let j=0,W=0;const ue=new H;for(let ge=0;ge<Y;ge++){const q=ge*se-k;for(let ee=0;ee<Q;ee++){const Te=ee*A-Z;ue[x]=Te*E,ue[m]=q*b,ue[h]=X,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[m]=0,ue[h]=D>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(ee/R),f.push(1-ge/N),j+=1}}for(let ge=0;ge<N;ge++)for(let q=0;q<R;q++){const ee=p+q+Q*ge,Te=p+q+Q*(ge+1),we=p+(q+1)+Q*(ge+1),Oe=p+(q+1)+Q*ge;l.push(ee,Te,Oe),l.push(Te,we,Oe),W+=6}s.addGroup(g,W,M),g+=W,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function da(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function gn(n){const e={};for(let t=0;t<n.length;t++){const i=da(n[t]);for(const r in i)e[r]=i[r]}return e}function kv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _f(n){return n.getRenderTarget()===null?n.outputColorSpace:hi}const xf={clone:da,merge:gn};var Bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bv,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bf extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends bf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Gr=1;class Gv extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Ln(zr,Gr,e,t);r.layers=this.layers,this.add(r);const a=new Ln(zr,Gr,e,t);a.layers=this.layers,this.add(a);const o=new Ln(zr,Gr,e,t);o.layers=this.layers,this.add(o);const s=new Ln(zr,Gr,e,t);s.layers=this.layers,this.add(s);const l=new Ln(zr,Gr,e,t);l.layers=this.layers,this.add(l);const c=new Ln(zr,Gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class yf extends ln{constructor(e,t,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:oa,super(e,t,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hv extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ba("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_r?At:xr),this.texture=new yf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zt(5,5,5),a=new Ui({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Pi});a.uniforms.tEquirect.value=t;const o=new St(r,a),s=t.minFilter;return t.minFilter===Ka&&(t.minFilter=Bn),new Gv(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const Ho=new H,Vv=new H,Wv=new ft;class Xi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ho.subVectors(i,t).cross(Vv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ho),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wv.getNormalMatrix(e),r=this.coplanarPoint(Ho).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Fl,Es=new H;class kl{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,a=new Xi,o=new Xi){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],p=r[7],g=r[8],_=r[9],x=r[10],m=r[11],h=r[12],E=r[13],b=r[14],S=r[15];if(i[0].setComponents(l-a,p-c,m-g,S-h).normalize(),i[1].setComponents(l+a,p+c,m+g,S+h).normalize(),i[2].setComponents(l+o,p+u,m+_,S+E).normalize(),i[3].setComponents(l-o,p-u,m-_,S-E).normalize(),i[4].setComponents(l-s,p-f,m-x,S-b).normalize(),t===Ri)i[5].setComponents(l+s,p+f,m+x,S+b).normalize();else if(t===Ys)i[5].setComponents(s,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Es.x=r.normal.x>0?e.max.x:e.min.x,Es.y=r.normal.y>0?e.max.y:e.min.y,Es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mf(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Xv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,p=c.usage,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,p),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,f){const p=u.array,g=u.updateRange;n.bindBuffer(f,c),g.count===-1?n.bufferSubData(f,0,p):(t?n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(a(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class Bl extends Oi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,p=t/l,g=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const E=h*p-o;for(let b=0;b<c;b++){const S=b*f-a;_.push(S,-E,0),x.push(0,0,1),m.push(b/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<s;E++){const b=E+c*h,S=E+c*(h+1),w=E+1+c*(h+1),D=E+1+c*h;g.push(b,S,D),g.push(S,w,D)}this.setIndex(g),this.setAttribute("position",new Li(_,3)),this.setAttribute("normal",new Li(x,3)),this.setAttribute("uv",new Li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yv=`#ifdef USE_ALPHAHASH
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
#endif`,qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i_=`#ifdef USE_IRIDESCENCE
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
#endif`,r_=`#ifdef USE_BUMPMAP
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
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h_=`#define PI 3.141592653589793
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
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m_=`vec3 transformedNormal = objectNormal;
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
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,__=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L_=`#ifdef USE_GRADIENTMAP
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
}`,D_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O_=`uniform bool receiveShadow;
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
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,k_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
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
#endif`,V_=`struct PhysicalMaterial {
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
}`,W_=`
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
#endif`,X_=`#if defined( RE_IndirectDiffuse )
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,J_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
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
#endif`,ax=`#ifdef USE_MORPHTARGETS
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
#endif`,sx=`#ifdef USE_MORPHTARGETS
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
#endif`,ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fx=`#ifdef USE_NORMALMAP
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
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,Zx=`#if DEPTH_PACKING == 3200
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
}`,Jx=`#define DISTANCE
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
}`,Qx=`#define DISTANCE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#include <common>
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
}`,rb=`uniform vec3 diffuse;
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
}`,ab=`#define LAMBERT
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
}`,sb=`#define LAMBERT
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
}`,ob=`#define MATCAP
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
}`,lb=`#define MATCAP
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
}`,cb=`#define NORMAL
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
}`,ub=`#define NORMAL
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
}`,db=`#define PHONG
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
}`,fb=`#define PHONG
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
}`,hb=`#define STANDARD
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
}`,pb=`#define STANDARD
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
}`,mb=`#define TOON
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
}`,gb=`#define TOON
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
}`,vb=`uniform float size;
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
}`,_b=`uniform vec3 diffuse;
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
}`,xb=`#include <common>
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
}`,bb=`uniform vec3 color;
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
}`,yb=`uniform float rotation;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:jv,alphahash_pars_fragment:Yv,alphamap_fragment:qv,alphamap_pars_fragment:Kv,alphatest_fragment:Zv,alphatest_pars_fragment:Jv,aomap_fragment:Qv,aomap_pars_fragment:$v,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:r_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:u_,color_pars_vertex:d_,color_vertex:f_,common:h_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:v_,emissivemap_fragment:__,emissivemap_pars_fragment:x_,colorspace_fragment:b_,colorspace_pars_fragment:y_,envmap_fragment:M_,envmap_common_pars_fragment:S_,envmap_pars_fragment:E_,envmap_pars_vertex:w_,envmap_physical_pars_fragment:F_,envmap_vertex:T_,fog_vertex:A_,fog_pars_vertex:R_,fog_fragment:C_,fog_pars_fragment:P_,gradientmap_pars_fragment:L_,lightmap_fragment:D_,lightmap_pars_fragment:I_,lights_lambert_fragment:U_,lights_lambert_pars_fragment:N_,lights_pars_begin:O_,lights_toon_fragment:k_,lights_toon_pars_fragment:B_,lights_phong_fragment:z_,lights_phong_pars_fragment:G_,lights_physical_fragment:H_,lights_physical_pars_fragment:V_,lights_fragment_begin:W_,lights_fragment_maps:X_,lights_fragment_end:j_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:Z_,map_fragment:J_,map_pars_fragment:Q_,map_particle_fragment:$_,map_particle_pars_fragment:ex,metalnessmap_fragment:tx,metalnessmap_pars_fragment:nx,morphcolor_vertex:ix,morphnormal_vertex:rx,morphtarget_pars_vertex:ax,morphtarget_vertex:sx,normal_fragment_begin:ox,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:ux,normal_vertex:dx,normalmap_pars_fragment:fx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:vx,packing:_x,premultiplied_alpha_fragment:xx,project_vertex:bx,dithering_fragment:yx,dithering_pars_fragment:Mx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Ex,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:Tx,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Px,skinning_vertex:Lx,skinnormal_vertex:Dx,specularmap_fragment:Ix,specularmap_pars_fragment:Ux,tonemapping_fragment:Nx,tonemapping_pars_fragment:Ox,transmission_fragment:Fx,transmission_pars_fragment:kx,uv_pars_fragment:Bx,uv_pars_vertex:zx,uv_vertex:Gx,worldpos_vertex:Hx,background_vert:Vx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:jx,cube_vert:Yx,cube_frag:qx,depth_vert:Kx,depth_frag:Zx,distanceRGBA_vert:Jx,distanceRGBA_frag:Qx,equirect_vert:$x,equirect_frag:eb,linedashed_vert:tb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:rb,meshlambert_vert:ab,meshlambert_frag:sb,meshmatcap_vert:ob,meshmatcap_frag:lb,meshnormal_vert:cb,meshnormal_frag:ub,meshphong_vert:db,meshphong_frag:fb,meshphysical_vert:hb,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:vb,points_frag:_b,shadow_vert:xb,shadow_frag:bb,sprite_vert:yb,sprite_frag:Mb},He={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},si={basic:{uniforms:gn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:gn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new xt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:gn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:gn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:gn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new xt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:gn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:gn([He.points,He.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:gn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:gn([He.common,He.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:gn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:gn([He.sprite,He.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:gn([He.common,He.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:gn([He.lights,He.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};si.physical={uniforms:gn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const ws={r:0,b:0,g:0};function Sb(n,e,t,i,r,a,o){const s=new xt(0);let l=a===!0?0:1,c,u,f=null,p=0,g=null;function _(m,h){let E=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=(h.backgroundBlurriness>0?t:e).get(b)),b===null?x(s,l):b&&b.isColor&&(x(b,1),E=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===no)?(u===void 0&&(u=new St(new zt(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:da(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=b.colorSpace!==At,(f!==b||p!==b.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,p=b.version,g=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new St(new Bl(2,2),new Ui({name:"BackgroundMaterial",uniforms:da(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=b.colorSpace!==At,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||p!==b.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,p=b.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,h){m.getRGB(ws,_f(n)),i.buffers.color.setClear(ws.r,ws.g,ws.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(s,l)},render:_}}function Eb(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let c=l,u=!1;function f(X,Q,Y,j,W){let ue=!1;if(o){const ge=x(j,Y,Q);c!==ge&&(c=ge,g(c.object)),ue=h(X,j,Y,W),ue&&E(X,j,Y,W)}else{const ge=Q.wireframe===!0;(c.geometry!==j.id||c.program!==Y.id||c.wireframe!==ge)&&(c.geometry=j.id,c.program=Y.id,c.wireframe=ge,ue=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,N(X,Q,Y,j),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function p(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function g(X){return i.isWebGL2?n.bindVertexArray(X):a.bindVertexArrayOES(X)}function _(X){return i.isWebGL2?n.deleteVertexArray(X):a.deleteVertexArrayOES(X)}function x(X,Q,Y){const j=Y.wireframe===!0;let W=s[X.id];W===void 0&&(W={},s[X.id]=W);let ue=W[Q.id];ue===void 0&&(ue={},W[Q.id]=ue);let ge=ue[j];return ge===void 0&&(ge=m(p()),ue[j]=ge),ge}function m(X){const Q=[],Y=[],j=[];for(let W=0;W<r;W++)Q[W]=0,Y[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:Y,attributeDivisors:j,object:X,attributes:{},index:null}}function h(X,Q,Y,j){const W=c.attributes,ue=Q.attributes;let ge=0;const q=Y.getAttributes();for(const ee in q)if(q[ee].location>=0){const we=W[ee];let Oe=ue[ee];if(Oe===void 0&&(ee==="instanceMatrix"&&X.instanceMatrix&&(Oe=X.instanceMatrix),ee==="instanceColor"&&X.instanceColor&&(Oe=X.instanceColor)),we===void 0||we.attribute!==Oe||Oe&&we.data!==Oe.data)return!0;ge++}return c.attributesNum!==ge||c.index!==j}function E(X,Q,Y,j){const W={},ue=Q.attributes;let ge=0;const q=Y.getAttributes();for(const ee in q)if(q[ee].location>=0){let we=ue[ee];we===void 0&&(ee==="instanceMatrix"&&X.instanceMatrix&&(we=X.instanceMatrix),ee==="instanceColor"&&X.instanceColor&&(we=X.instanceColor));const Oe={};Oe.attribute=we,we&&we.data&&(Oe.data=we.data),W[ee]=Oe,ge++}c.attributes=W,c.attributesNum=ge,c.index=j}function b(){const X=c.newAttributes;for(let Q=0,Y=X.length;Q<Y;Q++)X[Q]=0}function S(X){w(X,0)}function w(X,Q){const Y=c.newAttributes,j=c.enabledAttributes,W=c.attributeDivisors;Y[X]=1,j[X]===0&&(n.enableVertexAttribArray(X),j[X]=1),W[X]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,Q),W[X]=Q)}function D(){const X=c.newAttributes,Q=c.enabledAttributes;for(let Y=0,j=Q.length;Y<j;Y++)Q[Y]!==X[Y]&&(n.disableVertexAttribArray(Y),Q[Y]=0)}function R(X,Q,Y,j,W,ue,ge){ge===!0?n.vertexAttribIPointer(X,Q,Y,W,ue):n.vertexAttribPointer(X,Q,Y,j,W,ue)}function N(X,Q,Y,j){if(i.isWebGL2===!1&&(X.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const W=j.attributes,ue=Y.getAttributes(),ge=Q.defaultAttributeValues;for(const q in ue){const ee=ue[q];if(ee.location>=0){let Te=W[q];if(Te===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(Te=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(Te=X.instanceColor)),Te!==void 0){const we=Te.normalized,Oe=Te.itemSize,Be=t.get(Te);if(Be===void 0)continue;const Ve=Be.buffer,We=Be.type,te=Be.bytesPerElement,De=i.isWebGL2===!0&&(We===n.INT||We===n.UNSIGNED_INT||Te.gpuType===$d);if(Te.isInterleavedBufferAttribute){const Le=Te.data,O=Le.stride,Ae=Te.offset;if(Le.isInstancedInterleavedBuffer){for(let be=0;be<ee.locationSize;be++)w(ee.location+be,Le.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let be=0;be<ee.locationSize;be++)S(ee.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let be=0;be<ee.locationSize;be++)R(ee.location+be,Oe/ee.locationSize,We,we,O*te,(Ae+Oe/ee.locationSize*be)*te,De)}else{if(Te.isInstancedBufferAttribute){for(let Le=0;Le<ee.locationSize;Le++)w(ee.location+Le,Te.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Le=0;Le<ee.locationSize;Le++)S(ee.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let Le=0;Le<ee.locationSize;Le++)R(ee.location+Le,Oe/ee.locationSize,We,we,Oe*te,Oe/ee.locationSize*Le*te,De)}}else if(ge!==void 0){const we=ge[q];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(ee.location,we);break;case 3:n.vertexAttrib3fv(ee.location,we);break;case 4:n.vertexAttrib4fv(ee.location,we);break;default:n.vertexAttrib1fv(ee.location,we)}}}}D()}function M(){Z();for(const X in s){const Q=s[X];for(const Y in Q){const j=Q[Y];for(const W in j)_(j[W].object),delete j[W];delete Q[Y]}delete s[X]}}function A(X){if(s[X.id]===void 0)return;const Q=s[X.id];for(const Y in Q){const j=Q[Y];for(const W in j)_(j[W].object),delete j[W];delete Q[Y]}delete s[X.id]}function se(X){for(const Q in s){const Y=s[Q];if(Y[X.id]===void 0)continue;const j=Y[X.id];for(const W in j)_(j[W].object),delete j[W];delete Y[X.id]}}function Z(){k(),u=!0,c!==l&&(c=l,g(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:k,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:se,initAttributes:b,enableAttribute:S,disableUnusedAttributes:D}}function wb(n,e,t,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,u){n.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,f){if(f===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,c,u,f),t.update(u,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function Tb(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,S=o||e.has("OES_texture_float"),w=b&&S,D=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:D}}function Ab(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new Xi,s=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||a&&!m)a?u(null):c();else{const E=a?0:i,b=E*4;let S=h.clippingState||null;l.value=S,S=u(_,p,b,g);for(let w=0;w!==b;++w)S[w]=t[w];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,p,g,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=g+x*4,E=p.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,S=g;b!==x;++b,S+=4)o.copy(f[b]).applyMatrix4(E,s),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Rb(n){let e=new WeakMap;function t(o,s){return s===js?o.mapping=oa:s===ul&&(o.mapping=la),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===js||s===ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hv(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Sf extends bf{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qr=4,pu=[.125,.215,.35,.446,.526,.582],cr=20,Vo=new Sf,mu=new xt;let Wo=null;const or=(1+Math.sqrt(5))/2,Hr=1/or,gu=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,or,Hr),new H(0,or,-Hr),new H(Hr,0,or),new H(-Hr,0,or),new H(or,Hr,0),new H(-or,Hr,0)];class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wo=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo),e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oa||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ca,format:Jn,colorSpace:hi,depthBuffer:!1},r=_u(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(a)),this._blurMaterial=Pb(a,e,t)}return r}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,i,r){const s=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(mu),u.toneMapping=qi,u.autoClear=!1;const g=new mf({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new St(new zt,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(mu),x=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):E===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const b=this._cubeSize;Ts(r,E*b,h>2?b:0,b,b),u.setRenderTarget(r),x&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===oa||e.mapping===la;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Vo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gu[(r-1)%gu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new St(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*cr-1),x=a/_,m=isFinite(a)?1+Math.floor(u*x):cr;m>cr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cr}`);const h=[];let E=0;for(let R=0;R<cr;++R){const N=R/x,M=Math.exp(-N*N/2);h.push(M),R===0?E+=M:R<m&&(E+=2*M)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:b}=this;p.dTheta.value=_,p.mipInt.value=b-i;const S=this._sizeLods[r],w=3*S*(r>b-qr?r-b+qr:0),D=4*(this._cubeSize-S);Ts(t,w,D,3*S,2*S),l.setRenderTarget(t),l.render(f,Vo)}}function Cb(n){const e=[],t=[],i=[];let r=n;const a=n-qr+1+pu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-qr?l=pu[o-n+qr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,_=6,x=3,m=2,h=1,E=new Float32Array(x*_*g),b=new Float32Array(m*_*g),S=new Float32Array(h*_*g);for(let D=0;D<g;D++){const R=D%3*2/3-1,N=D>2?0:-1,M=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];E.set(M,x*_*D),b.set(p,m*_*D);const A=[D,D,D,D,D,D];S.set(A,h*_*D)}const w=new Oi;w.setAttribute("position",new ni(E,x)),w.setAttribute("uv",new ni(b,m)),w.setAttribute("faceIndex",new ni(S,h)),e.push(w),r>qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _u(n,e,t){const i=new Ii(n,e,t);return i.texture.mapping=no,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Pb(n,e,t){const i=new Float32Array(cr),r=new H(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function xu(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function bu(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

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
	`}function Lb(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===js||l===ul,u=l===oa||l===la;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new vu(n)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new vu(n));const p=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Db(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ib(n,e,t,i){const r={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const x=p.morphAttributes[_];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)e.update(p[_],n.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const x=g[_];for(let m=0,h=x.length;m<h;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,_=f.attributes.position;let x=0;if(g!==null){const E=g.array;x=g.version;for(let b=0,S=E.length;b<S;b+=3){const w=E[b+0],D=E[b+1],R=E[b+2];p.push(w,D,D,R,R,w)}}else if(_!==void 0){const E=_.array;x=_.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const w=b+0,D=b+1,R=b+2;p.push(w,D,D,R,R,w)}}else return;const m=new(lf(p)?vf:gf)(p,1);m.version=x;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function u(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Ub(n,e,t,i){const r=i.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(a,g,s,p*l),t.update(g,a,1)}function f(p,g,_){if(_===0)return;let x,m;if(r)x=n,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](a,g,s,p*l,_),t.update(g,a,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Nb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ob(n,e){return n[0]-e[0]}function Fb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function kb(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new Ct,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let m=a.get(u);if(m===void 0||m.count!==x){let Q=function(){k.dispose(),a.delete(u),u.removeEventListener("dispose",Q)};var g=Q;m!==void 0&&m.texture.dispose();const b=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let M=0;b===!0&&(M=1),S===!0&&(M=2),w===!0&&(M=3);let A=u.attributes.position.count*M,se=1;A>e.maxTextureSize&&(se=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Z=new Float32Array(A*se*4*x),k=new df(Z,A,se,x);k.type=Ai,k.needsUpdate=!0;const X=M*4;for(let Y=0;Y<x;Y++){const j=D[Y],W=R[Y],ue=N[Y],ge=A*se*4*Y;for(let q=0;q<j.count;q++){const ee=q*X;b===!0&&(o.fromBufferAttribute(j,q),Z[ge+ee+0]=o.x,Z[ge+ee+1]=o.y,Z[ge+ee+2]=o.z,Z[ge+ee+3]=0),S===!0&&(o.fromBufferAttribute(W,q),Z[ge+ee+4]=o.x,Z[ge+ee+5]=o.y,Z[ge+ee+6]=o.z,Z[ge+ee+7]=0),w===!0&&(o.fromBufferAttribute(ue,q),Z[ge+ee+8]=o.x,Z[ge+ee+9]=o.y,Z[ge+ee+10]=o.z,Z[ge+ee+11]=ue.itemSize===4?o.w:1)}}m={count:x,texture:k,size:new $e(A,se)},a.set(u,m),u.addEventListener("dispose",Q)}let h=0;for(let b=0;b<p.length;b++)h+=p[b];const E=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=p===void 0?0:p.length;let x=i[u.id];if(x===void 0||x.length!==_){x=[];for(let S=0;S<_;S++)x[S]=[S,0];i[u.id]=x}for(let S=0;S<_;S++){const w=x[S];w[0]=S,w[1]=p[S]}x.sort(Fb);for(let S=0;S<8;S++)S<_&&x[S][1]?(s[S][0]=x[S][0],s[S][1]=x[S][1]):(s[S][0]=Number.MAX_SAFE_INTEGER,s[S][1]=0);s.sort(Ob);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const w=s[S],D=w[0],R=w[1];D!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+S)!==m[D]&&u.setAttribute("morphTarget"+S,m[D]),h&&u.getAttribute("morphNormal"+S)!==h[D]&&u.setAttribute("morphNormal"+S,h[D]),r[S]=R,E+=R):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),h&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const b=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Bb(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Ef=new ln,wf=new df,Tf=new Tv,Af=new yf,yu=[],Mu=[],Su=new Float32Array(16),Eu=new Float32Array(9),wu=new Float32Array(4);function va(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=yu[r];if(a===void 0&&(a=new Float32Array(r),yu[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ao(n,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function Hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function Wb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;wu.set(i),n.uniformMatrix2fv(this.addr,!1,wu),Jt(t,i)}}function Xb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),Jt(t,i)}}function jb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),Jt(t,i)}}function Yb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function Jb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function t0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ef,r)}function n0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Tf,r)}function i0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Af,r)}function r0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wf,r)}function a0(n){switch(n){case 5126:return zb;case 35664:return Gb;case 35665:return Hb;case 35666:return Vb;case 35674:return Wb;case 35675:return Xb;case 35676:return jb;case 5124:case 35670:return Yb;case 35667:case 35671:return qb;case 35668:case 35672:return Kb;case 35669:case 35673:return Zb;case 5125:return Jb;case 36294:return Qb;case 36295:return $b;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return r0}}function s0(n,e){n.uniform1fv(this.addr,e)}function o0(n,e){const t=va(e,this.size,2);n.uniform2fv(this.addr,t)}function l0(n,e){const t=va(e,this.size,3);n.uniform3fv(this.addr,t)}function c0(n,e){const t=va(e,this.size,4);n.uniform4fv(this.addr,t)}function u0(n,e){const t=va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d0(n,e){const t=va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f0(n,e){const t=va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h0(n,e){n.uniform1iv(this.addr,e)}function p0(n,e){n.uniform2iv(this.addr,e)}function m0(n,e){n.uniform3iv(this.addr,e)}function g0(n,e){n.uniform4iv(this.addr,e)}function v0(n,e){n.uniform1uiv(this.addr,e)}function _0(n,e){n.uniform2uiv(this.addr,e)}function x0(n,e){n.uniform3uiv(this.addr,e)}function b0(n,e){n.uniform4uiv(this.addr,e)}function y0(n,e,t){const i=this.cache,r=e.length,a=ao(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ef,a[o])}function M0(n,e,t){const i=this.cache,r=e.length,a=ao(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Tf,a[o])}function S0(n,e,t){const i=this.cache,r=e.length,a=ao(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Af,a[o])}function E0(n,e,t){const i=this.cache,r=e.length,a=ao(t,r);Zt(i,a)||(n.uniform1iv(this.addr,a),Jt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wf,a[o])}function w0(n){switch(n){case 5126:return s0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return h0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return _0;case 36295:return x0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}class T0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=a0(t.type)}}class A0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=w0(t.type)}}class R0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Tu(n,e){n.seq.push(e),n.map[e.id]=e}function C0(n,e,t){const i=n.name,r=i.length;for(Xo.lastIndex=0;;){const a=Xo.exec(i),o=Xo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Tu(t,c===void 0?new T0(s,n,e):new A0(s,n,e));break}else{let f=t.map[s];f===void 0&&(f=new R0(s),Tu(t,f)),t=f}}}class Os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);C0(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Au(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let P0=0;function L0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function D0(n){switch(n){case hi:return["Linear","( value )"];case At:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Ru(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+L0(n.getShaderSource(e),o)}else return r}function I0(n,e){const t=D0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function U0(n,e){let t;switch(e){case Gg:t="Linear";break;case Hg:t="Reinhard";break;case Vg:t="OptimizedCineon";break;case Wg:t="ACESFilmic";break;case Xg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function N0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Na).join(`
`)}function O0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Na(n){return n!==""}function Cu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(n){return n.replace(k0,z0)}const B0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function z0(n,e){let t=lt[e];if(t===void 0){const i=B0.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}const G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(G0,H0)}function H0(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Du(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function W0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case oa:case la:e="ENVMAP_TYPE_CUBE";break;case no:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===la&&(e="ENVMAP_MODE_REFRACTION"),e}function j0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jd:e="ENVMAP_BLENDING_MULTIPLY";break;case Bg:e="ENVMAP_BLENDING_MIX";break;case zg:e="ENVMAP_BLENDING_ADD";break}return e}function Y0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function q0(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=V0(t),c=W0(t),u=X0(t),f=j0(t),p=Y0(t),g=t.isWebGL2?"":N0(t),_=O0(a),x=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Na).join(`
`),m.length>0&&(m+=`
`),h=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Na).join(`
`),h.length>0&&(h+=`
`)):(m=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),h=[g,Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?lt.tonemapping_pars_fragment:"",t.toneMapping!==qi?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),o=vl(o),o=Cu(o,t),o=Pu(o,t),s=vl(s),s=Cu(s,t),s=Pu(s,t),o=Lu(o),s=Lu(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=E+m+o,S=E+h+s,w=Au(r,r.VERTEX_SHADER,b),D=Au(r,r.FRAGMENT_SHADER,S);if(r.attachShader(x,w),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),A=r.getShaderInfoLog(w).trim(),se=r.getShaderInfoLog(D).trim();let Z=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,w,D);else{const X=Ru(r,w,"vertex"),Q=Ru(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+X+`
`+Q)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||se==="")&&(k=!1);k&&(this.diagnostics={runnable:Z,programLog:M,vertexShader:{log:A,prefix:m},fragmentShader:{log:se,prefix:h}})}r.deleteShader(w),r.deleteShader(D);let R;this.getUniforms=function(){return R===void 0&&(R=new Os(r,x)),R};let N;return this.getAttributes=function(){return N===void 0&&(N=F0(r,x)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=D,this}let K0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new J0(e),t.set(e,i)),i}}class J0{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}}function Q0(n,e,t,i,r,a,o){const s=new hf,l=new Z0,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,A,se,Z,k){const X=Z.fog,Q=k.geometry,Y=M.isMeshStandardMaterial?Z.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),W=j&&j.mapping===no?j.image.height:null,ue=_[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,q=ge!==void 0?ge.length:0;let ee=0;Q.morphAttributes.position!==void 0&&(ee=1),Q.morphAttributes.normal!==void 0&&(ee=2),Q.morphAttributes.color!==void 0&&(ee=3);let Te,we,Oe,Be;if(ue){const ve=si[ue];Te=ve.vertexShader,we=ve.fragmentShader}else Te=M.vertexShader,we=M.fragmentShader,l.update(M),Oe=l.getVertexShaderID(M),Be=l.getFragmentShaderID(M);const Ve=n.getRenderTarget(),We=k.isInstancedMesh===!0,te=!!M.map,De=!!M.matcap,Le=!!j,O=!!M.aoMap,Ae=!!M.lightMap,be=!!M.bumpMap,F=!!M.normalMap,G=!!M.displacementMap,ye=!!M.emissiveMap,Ee=!!M.metalnessMap,Ce=!!M.roughnessMap,Pe=M.anisotropy>0,Ge=M.clearcoat>0,Xe=M.iridescence>0,T=M.sheen>0,v=M.transmission>0,I=Pe&&!!M.anisotropyMap,ne=Ge&&!!M.clearcoatMap,le=Ge&&!!M.clearcoatNormalMap,he=Ge&&!!M.clearcoatRoughnessMap,ke=Xe&&!!M.iridescenceMap,Me=Xe&&!!M.iridescenceThicknessMap,K=T&&!!M.sheenColorMap,L=T&&!!M.sheenRoughnessMap,ie=!!M.specularMap,de=!!M.specularColorMap,fe=!!M.specularIntensityMap,Ie=v&&!!M.transmissionMap,je=v&&!!M.thicknessMap,Ye=!!M.gradientMap,U=!!M.alphaMap,Ue=M.alphaTest>0,V=!!M.alphaHash,Se=!!M.extensions,Ne=!!Q.attributes.uv1,rt=!!Q.attributes.uv2,at=!!Q.attributes.uv3;let ht=qi;return M.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(ht=n.toneMapping),{isWebGL2:u,shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:Te,fragmentShader:we,defines:M.defines,customVertexShaderID:Oe,customFragmentShaderID:Be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,instancing:We,instancingColor:We&&k.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ve===null?n.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:hi,map:te,matcap:De,envMap:Le,envMapMode:Le&&j.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Ae,bumpMap:be,normalMap:F,displacementMap:p&&G,emissiveMap:ye,normalMapObjectSpace:F&&M.normalMapType===rv,normalMapTangentSpace:F&&M.normalMapType===of,metalnessMap:Ee,roughnessMap:Ce,anisotropy:Pe,anisotropyMap:I,clearcoat:Ge,clearcoatMap:ne,clearcoatNormalMap:le,clearcoatRoughnessMap:he,iridescence:Xe,iridescenceMap:ke,iridescenceThicknessMap:Me,sheen:T,sheenColorMap:K,sheenRoughnessMap:L,specularMap:ie,specularColorMap:de,specularIntensityMap:fe,transmission:v,transmissionMap:Ie,thicknessMap:je,gradientMap:Ye,opaque:M.transparent===!1&&M.blending===ea,alphaMap:U,alphaTest:Ue,alphaHash:V,combine:M.combine,mapUv:te&&x(M.map.channel),aoMapUv:O&&x(M.aoMap.channel),lightMapUv:Ae&&x(M.lightMap.channel),bumpMapUv:be&&x(M.bumpMap.channel),normalMapUv:F&&x(M.normalMap.channel),displacementMapUv:G&&x(M.displacementMap.channel),emissiveMapUv:ye&&x(M.emissiveMap.channel),metalnessMapUv:Ee&&x(M.metalnessMap.channel),roughnessMapUv:Ce&&x(M.roughnessMap.channel),anisotropyMapUv:I&&x(M.anisotropyMap.channel),clearcoatMapUv:ne&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:K&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:L&&x(M.sheenRoughnessMap.channel),specularMapUv:ie&&x(M.specularMap.channel),specularColorMapUv:de&&x(M.specularColorMap.channel),specularIntensityMapUv:fe&&x(M.specularIntensityMap.channel),transmissionMapUv:Ie&&x(M.transmissionMap.channel),thicknessMapUv:je&&x(M.thicknessMap.channel),alphaMapUv:U&&x(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(F||Pe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:rt,vertexUv3s:at,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(te||U),fog:!!X,useFog:M.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&se.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,useLegacyLights:n._useLegacyLights,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&M.map.colorSpace===At,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gn,flipSided:M.side===Sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Se&&M.extensions.derivatives===!0,extensionFragDepth:Se&&M.extensions.fragDepth===!0,extensionDrawBuffers:Se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const se in M.defines)A.push(se),A.push(M.defines[se]);return M.isRawShaderMaterial===!1&&(E(A,M),b(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function E(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function b(M,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),M.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function S(M){const A=_[M.type];let se;if(A){const Z=si[A];se=xf.clone(Z.uniforms)}else se=M.uniforms;return se}function w(M,A){let se;for(let Z=0,k=c.length;Z<k;Z++){const X=c[Z];if(X.cacheKey===A){se=X,++se.usedTimes;break}}return se===void 0&&(se=new q0(n,A,M,a),c.push(se)),se}function D(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:w,releaseProgram:D,releaseShaderCache:R,programs:c,dispose:N}}function $0(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ey(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Iu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(f,p,g,_,x,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=g,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function s(f,p,g,_,x,m){const h=o(f,p,g,_,x,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):t.push(h)}function l(f,p,g,_,x,m){const h=o(f,p,g,_,x,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,p){t.length>1&&t.sort(f||ey),i.length>1&&i.sort(p||Iu),r.length>1&&r.sort(p||Iu)}function u(){for(let f=e,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function ty(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Uu,n.set(i,[o])):r>=a.length?(o=new Uu,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ny(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new xt};break;case"SpotLight":t={position:new H,direction:new H,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function iy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ry=0;function ay(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sy(n,e){const t=new ny,i=iy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new H);const a=new H,o=new Ht,s=new Ht;function l(u,f){let p=0,g=0,_=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let x=0,m=0,h=0,E=0,b=0,S=0,w=0,D=0,R=0,N=0;u.sort(ay);const M=f===!0?Math.PI:1;for(let se=0,Z=u.length;se<Z;se++){const k=u[se],X=k.color,Q=k.intensity,Y=k.distance,j=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=X.r*Q*M,g+=X.g*Q*M,_+=X.b*Q*M;else if(k.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(k.sh.coefficients[W],Q);else if(k.isDirectionalLight){const W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*M),k.castShadow){const ue=k.shadow,ge=i.get(k);ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize=ue.mapSize,r.directionalShadow[x]=ge,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=k.shadow.matrix,S++}r.directional[x]=W,x++}else if(k.isSpotLight){const W=t.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(X).multiplyScalar(Q*M),W.distance=Y,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,r.spot[h]=W;const ue=k.shadow;if(k.map&&(r.spotLightMap[R]=k.map,R++,ue.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[h]=ue.matrix,k.castShadow){const ge=i.get(k);ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize=ue.mapSize,r.spotShadow[h]=ge,r.spotShadowMap[h]=j,D++}h++}else if(k.isRectAreaLight){const W=t.get(k);W.color.copy(X).multiplyScalar(Q),W.halfWidth.set(k.width*.5,0,0),W.halfHeight.set(0,k.height*.5,0),r.rectArea[E]=W,E++}else if(k.isPointLight){const W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*M),W.distance=k.distance,W.decay=k.decay,k.castShadow){const ue=k.shadow,ge=i.get(k);ge.shadowBias=ue.bias,ge.shadowNormalBias=ue.normalBias,ge.shadowRadius=ue.radius,ge.shadowMapSize=ue.mapSize,ge.shadowCameraNear=ue.camera.near,ge.shadowCameraFar=ue.camera.far,r.pointShadow[m]=ge,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=k.shadow.matrix,w++}r.point[m]=W,m++}else if(k.isHemisphereLight){const W=t.get(k);W.skyColor.copy(k.color).multiplyScalar(Q*M),W.groundColor.copy(k.groundColor).multiplyScalar(Q*M),r.hemi[b]=W,b++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==x||A.pointLength!==m||A.spotLength!==h||A.rectAreaLength!==E||A.hemiLength!==b||A.numDirectionalShadows!==S||A.numPointShadows!==w||A.numSpotShadows!==D||A.numSpotMaps!==R)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=E,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=D+R-N,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=N,A.directionalLength=x,A.pointLength=m,A.spotLength=h,A.rectAreaLength=E,A.hemiLength=b,A.numDirectionalShadows=S,A.numPointShadows=w,A.numSpotShadows=D,A.numSpotMaps=R,r.version=ry++)}function c(u,f){let p=0,g=0,_=0,x=0,m=0;const h=f.matrixWorldInverse;for(let E=0,b=u.length;E<b;E++){const S=u[E];if(S.isDirectionalLight){const w=r.directional[p];w.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),p++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),_++}else if(S.isRectAreaLight){const w=r.rectArea[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(h),s.identity(),o.copy(S.matrixWorld),o.premultiply(h),s.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),x++}else if(S.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(h),g++}else if(S.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Nu(n,e){const t=new sy(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function oy(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Nu(n,e),t.set(a,[l])):o>=s.length?(l=new Nu(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ly extends ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
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
}`;function fy(n,e,t){let i=new kl;const r=new $e,a=new $e,o=new Ct,s=new ly({depthPacking:iv}),l=new cy,c={},u=t.maxTextureSize,f={[fi]:Sn,[Sn]:fi,[Gn]:Gn},p=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:uy,fragmentShader:dy}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Oi;_.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new St(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let h=this.type;this.render=function(w,D,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const N=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),se=n.state;se.setBlending(Pi),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Z=h!==Mi&&this.type===Mi,k=h===Mi&&this.type!==Mi;for(let X=0,Q=w.length;X<Q;X++){const Y=w[X],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const W=j.getFrameExtents();if(r.multiply(W),a.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/W.x),r.x=a.x*W.x,j.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/W.y),r.y=a.y*W.y,j.mapSize.y=a.y)),j.map===null||Z===!0||k===!0){const ge=this.type!==Mi?{minFilter:Dt,magFilter:Dt}:{};j.map!==null&&j.map.dispose(),j.map=new Ii(r.x,r.y,ge),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const ue=j.getViewportCount();for(let ge=0;ge<ue;ge++){const q=j.getViewport(ge);o.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),se.viewport(o),j.updateMatrices(Y,ge),i=j.getFrustum(),S(D,R,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Mi&&E(j,R),j.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(N,M,A)};function E(w,D){const R=e.update(x);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ii(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(D,null,R,p,x,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(D,null,R,g,x,null)}function b(w,D,R,N){let M=null;const A=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?l:s,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const se=M.uuid,Z=D.uuid;let k=c[se];k===void 0&&(k={},c[se]=k);let X=k[Z];X===void 0&&(X=M.clone(),k[Z]=X),M=X}if(M.visible=D.visible,M.wireframe=D.wireframe,N===Mi?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:f[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const se=n.properties.get(M);se.light=R}return M}function S(w,D,R,N,M){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Mi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),k=w.material;if(Array.isArray(k)){const X=Z.groups;for(let Q=0,Y=X.length;Q<Y;Q++){const j=X[Q],W=k[j.materialIndex];if(W&&W.visible){const ue=b(w,W,N,M);n.renderBufferDirect(R,null,Z,ue,w,j)}}}else if(k.visible){const X=b(w,k,N,M);n.renderBufferDirect(R,null,Z,X,w,null)}}const se=w.children;for(let Z=0,k=se.length;Z<k;Z++)S(se[Z],D,R,N,M)}}function hy(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const Ue=new Ct;let V=null;const Se=new Ct(0,0,0,0);return{setMask:function(Ne){V!==Ne&&!U&&(n.colorMask(Ne,Ne,Ne,Ne),V=Ne)},setLocked:function(Ne){U=Ne},setClear:function(Ne,rt,at,ht,Wt){Wt===!0&&(Ne*=ht,rt*=ht,at*=ht),Ue.set(Ne,rt,at,ht),Se.equals(Ue)===!1&&(n.clearColor(Ne,rt,at,ht),Se.copy(Ue))},reset:function(){U=!1,V=null,Se.set(-1,0,0,0)}}}function a(){let U=!1,Ue=null,V=null,Se=null;return{setTest:function(Ne){Ne?Ve(n.DEPTH_TEST):We(n.DEPTH_TEST)},setMask:function(Ne){Ue!==Ne&&!U&&(n.depthMask(Ne),Ue=Ne)},setFunc:function(Ne){if(V!==Ne){switch(Ne){case Dg:n.depthFunc(n.NEVER);break;case Ig:n.depthFunc(n.ALWAYS);break;case Ug:n.depthFunc(n.LESS);break;case cl:n.depthFunc(n.LEQUAL);break;case Ng:n.depthFunc(n.EQUAL);break;case Og:n.depthFunc(n.GEQUAL);break;case Fg:n.depthFunc(n.GREATER);break;case kg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}V=Ne}},setLocked:function(Ne){U=Ne},setClear:function(Ne){Se!==Ne&&(n.clearDepth(Ne),Se=Ne)},reset:function(){U=!1,Ue=null,V=null,Se=null}}}function o(){let U=!1,Ue=null,V=null,Se=null,Ne=null,rt=null,at=null,ht=null,Wt=null;return{setTest:function(ve){U||(ve?Ve(n.STENCIL_TEST):We(n.STENCIL_TEST))},setMask:function(ve){Ue!==ve&&!U&&(n.stencilMask(ve),Ue=ve)},setFunc:function(ve,ze,Ze){(V!==ve||Se!==ze||Ne!==Ze)&&(n.stencilFunc(ve,ze,Ze),V=ve,Se=ze,Ne=Ze)},setOp:function(ve,ze,Ze){(rt!==ve||at!==ze||ht!==Ze)&&(n.stencilOp(ve,ze,Ze),rt=ve,at=ze,ht=Ze)},setLocked:function(ve){U=ve},setClear:function(ve){Wt!==ve&&(n.clearStencil(ve),Wt=ve)},reset:function(){U=!1,Ue=null,V=null,Se=null,Ne=null,rt=null,at=null,ht=null,Wt=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let p={},g={},_=new WeakMap,x=[],m=null,h=!1,E=null,b=null,S=null,w=null,D=null,R=null,N=null,M=!1,A=null,se=null,Z=null,k=null,X=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=j>=2);let ue=null,ge={};const q=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),Te=new Ct().fromArray(q),we=new Ct().fromArray(ee);function Oe(U,Ue,V,Se){const Ne=new Uint8Array(4),rt=n.createTexture();n.bindTexture(U,rt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<V;at++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ue,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Ue+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return rt}const Be={};Be[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Be[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ve(n.DEPTH_TEST),l.setFunc(cl),G(!1),ye(bc),Ve(n.CULL_FACE),be(Pi);function Ve(U){p[U]!==!0&&(n.enable(U),p[U]=!0)}function We(U){p[U]!==!1&&(n.disable(U),p[U]=!1)}function te(U,Ue){return g[U]!==Ue?(n.bindFramebuffer(U,Ue),g[U]=Ue,i&&(U===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ue),U===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ue)),!0):!1}function De(U,Ue){let V=x,Se=!1;if(U)if(V=_.get(Ue),V===void 0&&(V=[],_.set(Ue,V)),U.isWebGLMultipleRenderTargets){const Ne=U.texture;if(V.length!==Ne.length||V[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,at=Ne.length;rt<at;rt++)V[rt]=n.COLOR_ATTACHMENT0+rt;V.length=Ne.length,Se=!0}}else V[0]!==n.COLOR_ATTACHMENT0&&(V[0]=n.COLOR_ATTACHMENT0,Se=!0);else V[0]!==n.BACK&&(V[0]=n.BACK,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Le(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const O={[Yr]:n.FUNC_ADD,[yg]:n.FUNC_SUBTRACT,[Mg]:n.FUNC_REVERSE_SUBTRACT};if(i)O[Ec]=n.MIN,O[wc]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(O[Ec]=U.MIN_EXT,O[wc]=U.MAX_EXT)}const Ae={[Sg]:n.ZERO,[Eg]:n.ONE,[wg]:n.SRC_COLOR,[Kd]:n.SRC_ALPHA,[Lg]:n.SRC_ALPHA_SATURATE,[Cg]:n.DST_COLOR,[Ag]:n.DST_ALPHA,[Tg]:n.ONE_MINUS_SRC_COLOR,[Zd]:n.ONE_MINUS_SRC_ALPHA,[Pg]:n.ONE_MINUS_DST_COLOR,[Rg]:n.ONE_MINUS_DST_ALPHA};function be(U,Ue,V,Se,Ne,rt,at,ht){if(U===Pi){h===!0&&(We(n.BLEND),h=!1);return}if(h===!1&&(Ve(n.BLEND),h=!0),U!==bg){if(U!==E||ht!==M){if((b!==Yr||D!==Yr)&&(n.blendEquation(n.FUNC_ADD),b=Yr,D=Yr),ht)switch(U){case ea:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.ONE,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,w=null,R=null,N=null,E=U,M=ht}return}Ne=Ne||Ue,rt=rt||V,at=at||Se,(Ue!==b||Ne!==D)&&(n.blendEquationSeparate(O[Ue],O[Ne]),b=Ue,D=Ne),(V!==S||Se!==w||rt!==R||at!==N)&&(n.blendFuncSeparate(Ae[V],Ae[Se],Ae[rt],Ae[at]),S=V,w=Se,R=rt,N=at),E=U,M=!1}function F(U,Ue){U.side===Gn?We(n.CULL_FACE):Ve(n.CULL_FACE);let V=U.side===Sn;Ue&&(V=!V),G(V),U.blending===ea&&U.transparent===!1?be(Pi):be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),s.setMask(U.colorWrite);const Se=U.stencilWrite;c.setTest(Se),Se&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ve(n.SAMPLE_ALPHA_TO_COVERAGE):We(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(U){A!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),A=U)}function ye(U){U!==vg?(Ve(n.CULL_FACE),U!==se&&(U===bc?n.cullFace(n.BACK):U===_g?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):We(n.CULL_FACE),se=U}function Ee(U){U!==Z&&(Y&&n.lineWidth(U),Z=U)}function Ce(U,Ue,V){U?(Ve(n.POLYGON_OFFSET_FILL),(k!==Ue||X!==V)&&(n.polygonOffset(Ue,V),k=Ue,X=V)):We(n.POLYGON_OFFSET_FILL)}function Pe(U){U?Ve(n.SCISSOR_TEST):We(n.SCISSOR_TEST)}function Ge(U){U===void 0&&(U=n.TEXTURE0+Q-1),ue!==U&&(n.activeTexture(U),ue=U)}function Xe(U,Ue,V){V===void 0&&(ue===null?V=n.TEXTURE0+Q-1:V=ue);let Se=ge[V];Se===void 0&&(Se={type:void 0,texture:void 0},ge[V]=Se),(Se.type!==U||Se.texture!==Ue)&&(ue!==V&&(n.activeTexture(V),ue=V),n.bindTexture(U,Ue||Be[U]),Se.type=U,Se.texture=Ue)}function T(){const U=ge[ue];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){Te.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Te.copy(U))}function fe(U){we.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),we.copy(U))}function Ie(U,Ue){let V=f.get(Ue);V===void 0&&(V=new WeakMap,f.set(Ue,V));let Se=V.get(U);Se===void 0&&(Se=n.getUniformBlockIndex(Ue,U.name),V.set(U,Se))}function je(U,Ue){const Se=f.get(Ue).get(U);u.get(Ue)!==Se&&(n.uniformBlockBinding(Ue,Se,U.__bindingPointIndex),u.set(Ue,Se))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ue=null,ge={},g={},_=new WeakMap,x=[],m=null,h=!1,E=null,b=null,S=null,w=null,D=null,R=null,N=null,M=!1,A=null,se=null,Z=null,k=null,X=null,Te.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ve,disable:We,bindFramebuffer:te,drawBuffers:De,useProgram:Le,setBlending:be,setMaterial:F,setFlipSided:G,setCullFace:ye,setLineWidth:Ee,setPolygonOffset:Ce,setScissorTest:Pe,activeTexture:Ge,bindTexture:Xe,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:L,texImage3D:ie,updateUBOMapping:Ie,uniformBlockBinding:je,texStorage2D:Me,texStorage3D:K,texSubImage2D:ne,texSubImage3D:le,compressedTexSubImage2D:he,compressedTexSubImage3D:ke,scissor:de,viewport:fe,reset:Ye}}function py(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,v){return h?new OffscreenCanvas(T,v):qs("canvas")}function b(T,v,I,ne){let le=1;if((T.width>ne||T.height>ne)&&(le=ne/Math.max(T.width,T.height)),le<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const he=v?gl:Math.floor,ke=he(le*T.width),Me=he(le*T.height);x===void 0&&(x=E(ke,Me));const K=I?E(ke,Me):x;return K.width=ke,K.height=Me,K.getContext("2d").drawImage(T,0,0,ke,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ke+"x"+Me+")."),K}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function S(T){return $c(T.width)&&$c(T.height)}function w(T){return s?!1:T.wrapS!==Zn||T.wrapT!==Zn||T.minFilter!==Dt&&T.minFilter!==Bn}function D(T,v){return T.generateMipmaps&&v&&T.minFilter!==Dt&&T.minFilter!==Bn}function R(T){n.generateMipmap(T)}function N(T,v,I,ne,le=!1){if(s===!1)return v;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he=v;return v===n.RED&&(I===n.FLOAT&&(he=n.R32F),I===n.HALF_FLOAT&&(he=n.R16F),I===n.UNSIGNED_BYTE&&(he=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(he=n.R8UI),I===n.UNSIGNED_SHORT&&(he=n.R16UI),I===n.UNSIGNED_INT&&(he=n.R32UI),I===n.BYTE&&(he=n.R8I),I===n.SHORT&&(he=n.R16I),I===n.INT&&(he=n.R32I)),v===n.RG&&(I===n.FLOAT&&(he=n.RG32F),I===n.HALF_FLOAT&&(he=n.RG16F),I===n.UNSIGNED_BYTE&&(he=n.RG8)),v===n.RGBA&&(I===n.FLOAT&&(he=n.RGBA32F),I===n.HALF_FLOAT&&(he=n.RGBA16F),I===n.UNSIGNED_BYTE&&(he=ne===At&&le===!1?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)),(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function M(T,v,I){return D(T,I)===!0||T.isFramebufferTexture&&T.minFilter!==Dt&&T.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){return T===Dt||T===Tc||T===_o?n.NEAREST:n.LINEAR}function se(T){const v=T.target;v.removeEventListener("dispose",se),k(v),v.isVideoTexture&&_.delete(v)}function Z(T){const v=T.target;v.removeEventListener("dispose",Z),Q(v)}function k(T){const v=i.get(T);if(v.__webglInit===void 0)return;const I=T.source,ne=m.get(I);if(ne){const le=ne[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&X(T),Object.keys(ne).length===0&&m.delete(I)}i.remove(T)}function X(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const I=T.source,ne=m.get(I);delete ne[v.__cacheKey],o.memory.textures--}function Q(T){const v=T.texture,I=i.get(T),ne=i.get(v);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(I.__webglFramebuffer[le]))for(let he=0;he<I.__webglFramebuffer[le].length;he++)n.deleteFramebuffer(I.__webglFramebuffer[le][he]);else n.deleteFramebuffer(I.__webglFramebuffer[le]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[le])}else{if(Array.isArray(I.__webglFramebuffer))for(let le=0;le<I.__webglFramebuffer.length;le++)n.deleteFramebuffer(I.__webglFramebuffer[le]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let le=0;le<I.__webglColorRenderbuffer.length;le++)I.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[le]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let le=0,he=v.length;le<he;le++){const ke=i.get(v[le]);ke.__webglTexture&&(n.deleteTexture(ke.__webglTexture),o.memory.textures--),i.remove(v[le])}i.remove(v),i.remove(T)}let Y=0;function j(){Y=0}function W(){const T=Y;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Y+=1,T}function ue(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function ge(T,v){const I=i.get(T);if(T.isVideoTexture&&Ge(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(I,T,v);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function q(T,v){const I=i.get(T);if(T.version>0&&I.__version!==T.version){te(I,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function ee(T,v){const I=i.get(T);if(T.version>0&&I.__version!==T.version){te(I,T,v);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function Te(T,v){const I=i.get(T);if(T.version>0&&I.__version!==T.version){De(I,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const we={[dl]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},Oe={[Dt]:n.NEAREST,[Tc]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[jg]:n.LINEAR_MIPMAP_NEAREST,[Ka]:n.LINEAR_MIPMAP_LINEAR},Be={[sv]:n.NEVER,[hv]:n.ALWAYS,[ov]:n.LESS,[cv]:n.LEQUAL,[lv]:n.EQUAL,[fv]:n.GEQUAL,[uv]:n.GREATER,[dv]:n.NOTEQUAL};function Ve(T,v,I){if(I?(n.texParameteri(T,n.TEXTURE_WRAP_S,we[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,we[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,we[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Oe[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Oe[v.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Zn||v.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,A(v.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Dt&&v.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Be[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Dt||v.minFilter!==_o&&v.minFilter!==Ka||v.type===Ai&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===ca&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(T,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function We(T,v){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",se));const ne=v.source;let le=m.get(ne);le===void 0&&(le={},m.set(ne,le));const he=ue(v);if(he!==T.__cacheKey){le[he]===void 0&&(le[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),le[he].usedTimes++;const ke=le[T.__cacheKey];ke!==void 0&&(le[T.__cacheKey].usedTimes--,ke.usedTimes===0&&X(v)),T.__cacheKey=he,T.__webglTexture=le[he].texture}return I}function te(T,v,I){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);const le=We(T,v),he=v.source;t.bindTexture(ne,T.__webglTexture,n.TEXTURE0+I);const ke=i.get(he);if(he.version!==ke.__version||le===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Me=w(v)&&S(v.image)===!1;let K=b(v.image,Me,!1,u);K=Xe(v,K);const L=S(K)||s,ie=a.convert(v.format,v.colorSpace);let de=a.convert(v.type),fe=N(v.internalFormat,ie,de,v.colorSpace,v.isVideoTexture);Ve(ne,v,L);let Ie;const je=v.mipmaps,Ye=s&&v.isVideoTexture!==!0,U=ke.__version===void 0||le===!0,Ue=M(v,K,L);if(v.isDepthTexture)fe=n.DEPTH_COMPONENT,s?v.type===Ai?fe=n.DEPTH_COMPONENT32F:v.type===ji?fe=n.DEPTH_COMPONENT24:v.type===gr?fe=n.DEPTH24_STENCIL8:fe=n.DEPTH_COMPONENT16:v.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===vr&&fe===n.DEPTH_COMPONENT&&v.type!==Ol&&v.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ji,de=a.convert(v.type)),v.format===ua&&fe===n.DEPTH_COMPONENT&&(fe=n.DEPTH_STENCIL,v.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=gr,de=a.convert(v.type))),U&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,fe,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,fe,K.width,K.height,0,ie,de,null));else if(v.isDataTexture)if(je.length>0&&L){Ye&&U&&t.texStorage2D(n.TEXTURE_2D,Ue,fe,je[0].width,je[0].height);for(let V=0,Se=je.length;V<Se;V++)Ie=je[V],Ye?t.texSubImage2D(n.TEXTURE_2D,V,0,0,Ie.width,Ie.height,ie,de,Ie.data):t.texImage2D(n.TEXTURE_2D,V,fe,Ie.width,Ie.height,0,ie,de,Ie.data);v.generateMipmaps=!1}else Ye?(U&&t.texStorage2D(n.TEXTURE_2D,Ue,fe,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,ie,de,K.data)):t.texImage2D(n.TEXTURE_2D,0,fe,K.width,K.height,0,ie,de,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,fe,je[0].width,je[0].height,K.depth);for(let V=0,Se=je.length;V<Se;V++)Ie=je[V],v.format!==Jn?ie!==null?Ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,Ie.width,Ie.height,K.depth,ie,Ie.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,fe,Ie.width,Ie.height,K.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,Ie.width,Ie.height,K.depth,ie,de,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,fe,Ie.width,Ie.height,K.depth,0,ie,de,Ie.data)}else{Ye&&U&&t.texStorage2D(n.TEXTURE_2D,Ue,fe,je[0].width,je[0].height);for(let V=0,Se=je.length;V<Se;V++)Ie=je[V],v.format!==Jn?ie!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,Ie.width,Ie.height,ie,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,V,fe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(n.TEXTURE_2D,V,0,0,Ie.width,Ie.height,ie,de,Ie.data):t.texImage2D(n.TEXTURE_2D,V,fe,Ie.width,Ie.height,0,ie,de,Ie.data)}else if(v.isDataArrayTexture)Ye?(U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,fe,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ie,de,K.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,K.width,K.height,K.depth,0,ie,de,K.data);else if(v.isData3DTexture)Ye?(U&&t.texStorage3D(n.TEXTURE_3D,Ue,fe,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ie,de,K.data)):t.texImage3D(n.TEXTURE_3D,0,fe,K.width,K.height,K.depth,0,ie,de,K.data);else if(v.isFramebufferTexture){if(U)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ue,fe,K.width,K.height);else{let V=K.width,Se=K.height;for(let Ne=0;Ne<Ue;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,fe,V,Se,0,ie,de,null),V>>=1,Se>>=1}}else if(je.length>0&&L){Ye&&U&&t.texStorage2D(n.TEXTURE_2D,Ue,fe,je[0].width,je[0].height);for(let V=0,Se=je.length;V<Se;V++)Ie=je[V],Ye?t.texSubImage2D(n.TEXTURE_2D,V,0,0,ie,de,Ie):t.texImage2D(n.TEXTURE_2D,V,fe,ie,de,Ie);v.generateMipmaps=!1}else Ye?(U&&t.texStorage2D(n.TEXTURE_2D,Ue,fe,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie,de,K)):t.texImage2D(n.TEXTURE_2D,0,fe,ie,de,K);D(v,L)&&R(ne),ke.__version=he.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function De(T,v,I){if(v.image.length!==6)return;const ne=We(T,v),le=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+I);const he=i.get(le);if(le.version!==he.__version||ne===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ke=v.isCompressedTexture||v.image[0].isCompressedTexture,Me=v.image[0]&&v.image[0].isDataTexture,K=[];for(let V=0;V<6;V++)!ke&&!Me?K[V]=b(v.image[V],!1,!0,c):K[V]=Me?v.image[V].image:v.image[V],K[V]=Xe(v,K[V]);const L=K[0],ie=S(L)||s,de=a.convert(v.format,v.colorSpace),fe=a.convert(v.type),Ie=N(v.internalFormat,de,fe,v.colorSpace),je=s&&v.isVideoTexture!==!0,Ye=he.__version===void 0||ne===!0;let U=M(v,L,ie);Ve(n.TEXTURE_CUBE_MAP,v,ie);let Ue;if(ke){je&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Ie,L.width,L.height);for(let V=0;V<6;V++){Ue=K[V].mipmaps;for(let Se=0;Se<Ue.length;Se++){const Ne=Ue[Se];v.format!==Jn?de!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,Se,0,0,Ne.width,Ne.height,de,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,Se,Ie,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,Se,0,0,Ne.width,Ne.height,de,fe,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,Se,Ie,Ne.width,Ne.height,0,de,fe,Ne.data)}}}else{Ue=v.mipmaps,je&&Ye&&(Ue.length>0&&U++,t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Ie,K[0].width,K[0].height));for(let V=0;V<6;V++)if(Me){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,K[V].width,K[V].height,de,fe,K[V].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ie,K[V].width,K[V].height,0,de,fe,K[V].data);for(let Se=0;Se<Ue.length;Se++){const rt=Ue[Se].image[V].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,Se+1,0,0,rt.width,rt.height,de,fe,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,Se+1,Ie,rt.width,rt.height,0,de,fe,rt.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,de,fe,K[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Ie,de,fe,K[V]);for(let Se=0;Se<Ue.length;Se++){const Ne=Ue[Se];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,Se+1,0,0,de,fe,Ne.image[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,Se+1,Ie,de,fe,Ne.image[V])}}}D(v,ie)&&R(n.TEXTURE_CUBE_MAP),he.__version=le.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Le(T,v,I,ne,le,he){const ke=a.convert(I.format,I.colorSpace),Me=a.convert(I.type),K=N(I.internalFormat,ke,Me,I.colorSpace);if(!i.get(v).__hasExternalTextures){const ie=Math.max(1,v.width>>he),de=Math.max(1,v.height>>he);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,he,K,ie,de,v.depth,0,ke,Me,null):t.texImage2D(le,he,K,ie,de,0,ke,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Pe(v)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,le,i.get(I).__webglTexture,0,Ce(v)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,le,i.get(I).__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(T,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let ne=n.DEPTH_COMPONENT16;if(I||Pe(v)){const le=v.depthTexture;le&&le.isDepthTexture&&(le.type===Ai?ne=n.DEPTH_COMPONENT32F:le.type===ji&&(ne=n.DEPTH_COMPONENT24));const he=Ce(v);Pe(v)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,ne,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ne,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){const ne=Ce(v);I&&Pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,v.width,v.height):Pe(v)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const ne=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let le=0;le<ne.length;le++){const he=ne[le],ke=a.convert(he.format,he.colorSpace),Me=a.convert(he.type),K=N(he.internalFormat,ke,Me,he.colorSpace),L=Ce(v);I&&Pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,K,v.width,v.height):Pe(v)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ge(v.depthTexture,0);const ne=i.get(v.depthTexture).__webglTexture,le=Ce(v);if(v.depthTexture.format===vr)Pe(v)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(v.depthTexture.format===ua)Pe(v)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function be(T){const v=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ae(v.__webglFramebuffer,T)}else if(I){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=n.createRenderbuffer(),O(v.__webglDepthbuffer[ne],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),O(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(T,v,I){const ne=i.get(T);v!==void 0&&Le(ne.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&be(T)}function G(T){const v=T.texture,I=i.get(T),ne=i.get(v);T.addEventListener("dispose",Z),T.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,o.memory.textures++);const le=T.isWebGLCubeRenderTarget===!0,he=T.isWebGLMultipleRenderTargets===!0,ke=S(T)||s;if(le){I.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(s&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[Me]=[];for(let K=0;K<v.mipmaps.length;K++)I.__webglFramebuffer[Me][K]=n.createFramebuffer()}else I.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let Me=0;Me<v.mipmaps.length;Me++)I.__webglFramebuffer[Me]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(he)if(r.drawBuffers){const Me=T.texture;for(let K=0,L=Me.length;K<L;K++){const ie=i.get(Me[K]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&T.samples>0&&Pe(T)===!1){const Me=he?v:[v];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let K=0;K<Me.length;K++){const L=Me[K];I.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[K]);const ie=a.convert(L.format,L.colorSpace),de=a.convert(L.type),fe=N(L.internalFormat,ie,de,L.colorSpace,T.isXRRenderTarget===!0),Ie=Ce(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,I.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),O(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,v,ke);for(let Me=0;Me<6;Me++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Le(I.__webglFramebuffer[Me][K],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,K);else Le(I.__webglFramebuffer[Me],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);D(v,ke)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const Me=T.texture;for(let K=0,L=Me.length;K<L;K++){const ie=Me[K],de=i.get(ie);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Ve(n.TEXTURE_2D,ie,ke),Le(I.__webglFramebuffer,T,ie,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,0),D(ie,ke)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(s?Me=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,ne.__webglTexture),Ve(Me,v,ke),s&&v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Le(I.__webglFramebuffer[K],T,v,n.COLOR_ATTACHMENT0,Me,K);else Le(I.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,Me,0);D(v,ke)&&R(Me),t.unbindTexture()}T.depthBuffer&&be(T)}function ye(T){const v=S(T)||s,I=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0,le=I.length;ne<le;ne++){const he=I[ne];if(D(he,v)){const ke=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(he).__webglTexture;t.bindTexture(ke,Me),R(ke),t.unbindTexture()}}}function Ee(T){if(s&&T.samples>0&&Pe(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],I=T.width,ne=T.height;let le=n.COLOR_BUFFER_BIT;const he=[],ke=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(T),K=T.isWebGLMultipleRenderTargets===!0;if(K)for(let L=0;L<v.length;L++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let L=0;L<v.length;L++){he.push(n.COLOR_ATTACHMENT0+L),T.depthBuffer&&he.push(ke);const ie=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(ie===!1&&(T.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),K&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[L]),ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ke]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ke])),K){const de=i.get(v[L]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,I,ne,0,0,I,ne,le,n.NEAREST),g&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let L=0;L<v.length;L++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,Me.__webglColorRenderbuffer[L]);const ie=i.get(v[L]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Ce(T){return Math.min(f,T.samples)}function Pe(T){const v=i.get(T);return s&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ge(T){const v=o.render.frame;_.get(T)!==v&&(_.set(T,v),T.update())}function Xe(T,v){const I=T.colorSpace,ne=T.format,le=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===pl||I!==hi&&I!==xr&&(I===At||I===io?s===!1?e.has("EXT_sRGB")===!0&&ne===Jn?(T.format=pl,T.minFilter=Bn,T.generateMipmaps=!1):v=cf.sRGBToLinear(v):(ne!==Jn||le!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=ge,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=Te,this.rebindTextures=F,this.setupRenderTarget=G,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Pe}const my=0,Yt=1;function gy(n,e,t){const i=t.isWebGL2;function r(a,o=xr){let s;const l=o===At||o===io?Yt:my;if(a===Ki)return n.UNSIGNED_BYTE;if(a===ef)return n.UNSIGNED_SHORT_4_4_4_4;if(a===tf)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Yg)return n.BYTE;if(a===qg)return n.SHORT;if(a===Ol)return n.UNSIGNED_SHORT;if(a===$d)return n.INT;if(a===ji)return n.UNSIGNED_INT;if(a===Ai)return n.FLOAT;if(a===ca)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Kg)return n.ALPHA;if(a===Jn)return n.RGBA;if(a===Zg)return n.LUMINANCE;if(a===Jg)return n.LUMINANCE_ALPHA;if(a===vr)return n.DEPTH_COMPONENT;if(a===ua)return n.DEPTH_STENCIL;if(a===pl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Qg)return n.RED;if(a===nf)return n.RED_INTEGER;if(a===$g)return n.RG;if(a===rf)return n.RG_INTEGER;if(a===af)return n.RGBA_INTEGER;if(a===xo||a===bo||a===yo||a===Mo)if(l===Yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ac||a===Rc||a===Cc||a===Pc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Pc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ev)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Lc||a===Dc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Lc)return l===Yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Dc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ic||a===Uc||a===Nc||a===Oc||a===Fc||a===kc||a===Bc||a===zc||a===Gc||a===Hc||a===Vc||a===Wc||a===Xc||a===jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Ic)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Uc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Nc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Oc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Fc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===kc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Bc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===zc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Gc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Hc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Vc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Wc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Xc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===jc)return l===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===So||a===Yc||a===qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===So)return l===Yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===tv||a===Kc||a===Zc||a===Jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===So)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===gr?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class vy extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _y={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&p>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Rf extends ln{constructor(e,t,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:vr,u!==vr&&u!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=ji),i===void 0&&u===ua&&(i=gr),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xy extends Mr{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,p=null,g=null,_=null;const x=t.getContextAttributes();let m=null,h=null;const E=[],b=[],S=new Ln;S.layers.enable(1),S.viewport=new Ct;const w=new Ln;w.layers.enable(2),w.viewport=new Ct;const D=[S,w],R=new vy;R.layers.enable(1),R.layers.enable(2);let N=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=E[q];return ee===void 0&&(ee=new jo,E[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=E[q];return ee===void 0&&(ee=new jo,E[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=E[q];return ee===void 0&&(ee=new jo,E[q]=ee),ee.getHandSpace()};function A(q){const ee=b.indexOf(q.inputSource);if(ee===-1)return;const Te=E[ee];Te!==void 0&&(Te.update(q.inputSource,q.frame,c||o),Te.dispatchEvent({type:q.type,data:q.inputSource}))}function se(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",Z);for(let q=0;q<E.length;q++){const ee=b[q];ee!==null&&(b[q]=null,E[q].disconnect(ee))}N=null,M=null,e.setRenderTarget(m),g=null,p=null,f=null,r=null,h=null,ge.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",se),r.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:g}),h=new Ii(g.framebufferWidth,g.framebufferHeight,{format:Jn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ee=null,Te=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=x.stencil?ua:vr,Te=x.stencil?gr:ji);const Oe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(Oe),r.updateRenderState({layers:[p]}),h=new Ii(p.textureWidth,p.textureHeight,{format:Jn,type:Ki,depthTexture:new Rf(p.textureWidth,p.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Be=e.properties.get(h);Be.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(q){for(let ee=0;ee<q.removed.length;ee++){const Te=q.removed[ee],we=b.indexOf(Te);we>=0&&(b[we]=null,E[we].disconnect(Te))}for(let ee=0;ee<q.added.length;ee++){const Te=q.added[ee];let we=b.indexOf(Te);if(we===-1){for(let Be=0;Be<E.length;Be++)if(Be>=b.length){b.push(Te),we=Be;break}else if(b[Be]===null){b[Be]=Te,we=Be;break}if(we===-1)break}const Oe=E[we];Oe&&Oe.connect(Te)}}const k=new H,X=new H;function Q(q,ee,Te){k.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(Te.matrixWorld);const we=k.distanceTo(X),Oe=ee.projectionMatrix.elements,Be=Te.projectionMatrix.elements,Ve=Oe[14]/(Oe[10]-1),We=Oe[14]/(Oe[10]+1),te=(Oe[9]+1)/Oe[5],De=(Oe[9]-1)/Oe[5],Le=(Oe[8]-1)/Oe[0],O=(Be[8]+1)/Be[0],Ae=Ve*Le,be=Ve*O,F=we/(-Le+O),G=F*-Le;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(G),q.translateZ(F),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const ye=Ve+F,Ee=We+F,Ce=Ae-G,Pe=be+(we-G),Ge=te*We/Ee*ye,Xe=De*We/Ee*ye;q.projectionMatrix.makePerspective(Ce,Pe,Ge,Xe,ye,Ee),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Y(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;R.near=w.near=S.near=q.near,R.far=w.far=S.far=q.far,(N!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),N=R.near,M=R.far);const ee=q.parent,Te=R.cameras;Y(R,ee);for(let we=0;we<Te.length;we++)Y(Te[we],ee);Te.length===2?Q(R,S,w):R.projectionMatrix.copy(S.projectionMatrix),j(q,R,ee)};function j(q,ee,Te){Te===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(Te.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ml*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)};let W=null;function ue(q,ee){if(u=ee.getViewerPose(c||o),_=ee,u!==null){const Te=u.views;g!==null&&(e.setRenderTargetFramebuffer(h,g.framebuffer),e.setRenderTarget(h));let we=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,we=!0);for(let Oe=0;Oe<Te.length;Oe++){const Be=Te[Oe];let Ve=null;if(g!==null)Ve=g.getViewport(Be);else{const te=f.getViewSubImage(p,Be);Ve=te.viewport,Oe===0&&(e.setRenderTargetTextures(h,te.colorTexture,p.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(h))}let We=D[Oe];We===void 0&&(We=new Ln,We.layers.enable(Oe),We.viewport=new Ct,D[Oe]=We),We.matrix.fromArray(Be.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Be.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Oe===0&&(R.matrix.copy(We.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),we===!0&&R.cameras.push(We)}}for(let Te=0;Te<E.length;Te++){const we=b[Te],Oe=E[Te];we!==null&&Oe!==void 0&&Oe.update(we,ee,c||o)}W&&W(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const ge=new Mf;ge.setAnimationLoop(ue),this.setAnimationLoop=function(q){W=q},this.dispose=function(){}}}function by(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,_f(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&g(m,h,S)):h.isMeshMatcapMaterial?(a(m,h),_(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,E,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*b,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yy(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,b){const S=b.program;i.uniformBlockBinding(E,S)}function c(E,b){let S=r[E.id];S===void 0&&(_(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(E,w);const D=e.render.frame;a[E.id]!==D&&(p(E),a[E.id]=D)}function u(E){const b=f();E.__bindingPointIndex=b;const S=n.createBuffer(),w=E.__size,D=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const b=r[E.id],S=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,R=S.length;D<R;D++){const N=S[D];if(g(N,D,w)===!0){const M=N.__offset,A=Array.isArray(N.value)?N.value:[N.value];let se=0;for(let Z=0;Z<A.length;Z++){const k=A[Z],X=x(k);typeof k=="number"?(N.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,M+se,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=k.elements[0],N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=k.elements[0],N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=k.elements[0]):(k.toArray(N.__data,se),se+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,N.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,b,S){const w=E.value;if(S[b]===void 0){if(typeof w=="number")S[b]=w;else{const D=Array.isArray(w)?w:[w],R=[];for(let N=0;N<D.length;N++)R.push(D[N].clone());S[b]=R}return!0}else if(typeof w=="number"){if(S[b]!==w)return S[b]=w,!0}else{const D=Array.isArray(S[b])?S[b]:[S[b]],R=Array.isArray(w)?w:[w];for(let N=0;N<D.length;N++){const M=D[N];if(M.equals(R[N])===!1)return M.copy(R[N]),!0}}return!1}function _(E){const b=E.uniforms;let S=0;const w=16;let D=0;for(let R=0,N=b.length;R<N;R++){const M=b[R],A={boundary:0,storage:0},se=Array.isArray(M.value)?M.value:[M.value];for(let Z=0,k=se.length;Z<k;Z++){const X=se[Z],Q=x(X);A.boundary+=Q.boundary,A.storage+=Q.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,R>0){D=S%w;const Z=w-D;D!==0&&Z-A.boundary<0&&(S+=w-D,M.__offset=S)}S+=A.storage}return D=S%w,D>0&&(S+=w-D),E.__size=S,E.__cache={},this}function x(E){const b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}class Cf{constructor(e={}){const{canvas:t=gv(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const b=this;let S=!1,w=0,D=0,R=null,N=-1,M=null;const A=new Ct,se=new Ct;let Z=null;const k=new xt(0);let X=0,Q=t.width,Y=t.height,j=1,W=null,ue=null;const ge=new Ct(0,0,Q,Y),q=new Ct(0,0,Q,Y);let ee=!1;const Te=new kl;let we=!1,Oe=!1,Be=null;const Ve=new Ht,We=new $e,te=new H,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return R===null?j:1}let O=i;function Ae(P,J){for(let oe=0;oe<P.length;oe++){const $=P[oe],ce=t.getContext($,J);if(ce!==null)return ce}return null}try{const P={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Se,!1),O===null){const J=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&J.shift(),O=Ae(J,P),O===null)throw Ae(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let be,F,G,ye,Ee,Ce,Pe,Ge,Xe,T,v,I,ne,le,he,ke,Me,K,L,ie,de,fe,Ie,je;function Ye(){be=new Db(O),F=new Tb(O,be,e),be.init(F),fe=new gy(O,be,F),G=new hy(O,be,F),ye=new Nb(O),Ee=new $0,Ce=new py(O,be,G,Ee,F,fe,ye),Pe=new Rb(b),Ge=new Lb(b),Xe=new Xv(O,F),Ie=new Eb(O,be,Xe,F),T=new Ib(O,Xe,ye,Ie),v=new Bb(O,T,Xe,ye),L=new kb(O,F,Ce),ke=new Ab(Ee),I=new Q0(b,Pe,Ge,be,F,Ie,ke),ne=new by(b,Ee),le=new ty,he=new oy(be,F),K=new Sb(b,Pe,Ge,G,v,p,l),Me=new fy(b,v,F),je=new yy(O,ye,F,G),ie=new wb(O,be,ye,F),de=new Ub(O,be,ye,F),ye.programs=I.programs,b.capabilities=F,b.extensions=be,b.properties=Ee,b.renderLists=le,b.shadowMap=Me,b.state=G,b.info=ye}Ye();const U=new xy(b,O);this.xr=U,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=be.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=be.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(Q,Y,!1))},this.getSize=function(P){return P.set(Q,Y)},this.setSize=function(P,J,oe=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=P,Y=J,t.width=Math.floor(P*j),t.height=Math.floor(J*j),oe===!0&&(t.style.width=P+"px",t.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(Q*j,Y*j).floor()},this.setDrawingBufferSize=function(P,J,oe){Q=P,Y=J,j=oe,t.width=Math.floor(P*oe),t.height=Math.floor(J*oe),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(ge)},this.setViewport=function(P,J,oe,$){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,J,oe,$),G.viewport(A.copy(ge).multiplyScalar(j).floor())},this.getScissor=function(P){return P.copy(q)},this.setScissor=function(P,J,oe,$){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,J,oe,$),G.scissor(se.copy(q).multiplyScalar(j).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(P){G.setScissorTest(ee=P)},this.setOpaqueSort=function(P){W=P},this.setTransparentSort=function(P){ue=P},this.getClearColor=function(P){return P.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(P=!0,J=!0,oe=!0){let $=0;if(P){let ce=!1;if(R!==null){const qe=R.texture.format;ce=qe===af||qe===rf||qe===nf}if(ce){const qe=R.texture.type,et=qe===Ki||qe===ji||qe===Ol||qe===gr||qe===ef||qe===tf,tt=K.getClearColor(),nt=K.getClearAlpha(),ct=tt.r,it=tt.g,st=tt.b;et?(g[0]=ct,g[1]=it,g[2]=st,g[3]=nt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=ct,_[1]=it,_[2]=st,_[3]=nt,O.clearBufferiv(O.COLOR,0,_))}else $|=O.COLOR_BUFFER_BIT}J&&($|=O.DEPTH_BUFFER_BIT),oe&&($|=O.STENCIL_BUFFER_BIT),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),le.dispose(),he.dispose(),Ee.dispose(),Pe.dispose(),Ge.dispose(),v.dispose(),Ie.dispose(),je.dispose(),I.dispose(),U.dispose(),U.removeEventListener("sessionstart",ve),U.removeEventListener("sessionend",ze),Be&&(Be.dispose(),Be=null),Ze.stop()};function Ue(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=ye.autoReset,J=Me.enabled,oe=Me.autoUpdate,$=Me.needsUpdate,ce=Me.type;Ye(),ye.autoReset=P,Me.enabled=J,Me.autoUpdate=oe,Me.needsUpdate=$,Me.type=ce}function Se(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ne(P){const J=P.target;J.removeEventListener("dispose",Ne),rt(J)}function rt(P){at(P),Ee.remove(P)}function at(P){const J=Ee.get(P).programs;J!==void 0&&(J.forEach(function(oe){I.releaseProgram(oe)}),P.isShaderMaterial&&I.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,oe,$,ce,qe){J===null&&(J=De);const et=ce.isMesh&&ce.matrixWorld.determinant()<0,tt=dn(P,J,oe,$,ce);G.setMaterial($,et);let nt=oe.index,ct=1;if($.wireframe===!0){if(nt=T.getWireframeAttribute(oe),nt===void 0)return;ct=2}const it=oe.drawRange,st=oe.attributes.position;let Tt=it.start*ct,Lt=(it.start+it.count)*ct;qe!==null&&(Tt=Math.max(Tt,qe.start*ct),Lt=Math.min(Lt,(qe.start+qe.count)*ct)),nt!==null?(Tt=Math.max(Tt,0),Lt=Math.min(Lt,nt.count)):st!=null&&(Tt=Math.max(Tt,0),Lt=Math.min(Lt,st.count));const fn=Lt-Tt;if(fn<0||fn===1/0)return;Ie.setup(ce,$,tt,oe,nt);let Xn,Ut=ie;if(nt!==null&&(Xn=Xe.get(nt),Ut=de,Ut.setIndex(Xn)),ce.isMesh)$.wireframe===!0?(G.setLineWidth($.wireframeLinewidth*Le()),Ut.setMode(O.LINES)):Ut.setMode(O.TRIANGLES);else if(ce.isLine){let ut=$.linewidth;ut===void 0&&(ut=1),G.setLineWidth(ut*Le()),ce.isLineSegments?Ut.setMode(O.LINES):ce.isLineLoop?Ut.setMode(O.LINE_LOOP):Ut.setMode(O.LINE_STRIP)}else ce.isPoints?Ut.setMode(O.POINTS):ce.isSprite&&Ut.setMode(O.TRIANGLES);if(ce.isInstancedMesh)Ut.renderInstances(Tt,fn,ce.count);else if(oe.isInstancedBufferGeometry){const ut=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,_a=Math.min(oe.instanceCount,ut);Ut.renderInstances(Tt,fn,_a)}else Ut.render(Tt,fn)},this.compile=function(P,J){function oe($,ce,qe){$.transparent===!0&&$.side===Gn&&$.forceSinglePass===!1?($.side=Sn,$.needsUpdate=!0,xn($,ce,qe),$.side=fi,$.needsUpdate=!0,xn($,ce,qe),$.side=Gn):xn($,ce,qe)}m=he.get(P),m.init(),E.push(m),P.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(b._useLegacyLights),P.traverse(function($){const ce=$.material;if(ce)if(Array.isArray(ce))for(let qe=0;qe<ce.length;qe++){const et=ce[qe];oe(et,P,$)}else oe(ce,P,$)}),E.pop(),m=null};let ht=null;function Wt(P){ht&&ht(P)}function ve(){Ze.stop()}function ze(){Ze.start()}const Ze=new Mf;Ze.setAnimationLoop(Wt),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(P){ht=P,U.setAnimationLoop(P),P===null?Ze.stop():Ze.start()},U.addEventListener("sessionstart",ve),U.addEventListener("sessionend",ze),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(J),J=U.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,J,R),m=he.get(P,E.length),m.init(),E.push(m),Ve.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Te.setFromProjectionMatrix(Ve),Oe=this.localClippingEnabled,we=ke.init(this.clippingPlanes,Oe),x=le.get(P,h.length),x.init(),h.push(x),mt(P,J,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(W,ue),this.info.render.frame++,we===!0&&ke.beginShadows();const oe=m.state.shadowsArray;if(Me.render(oe,P,J),we===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(x,P),m.setupLights(b._useLegacyLights),J.isArrayCamera){const $=J.cameras;for(let ce=0,qe=$.length;ce<qe;ce++){const et=$[ce];bt(x,P,et,et.viewport)}}else bt(x,P,J);R!==null&&(Ce.updateMultisampleRenderTarget(R),Ce.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(b,P,J),Ie.resetDefaultState(),N=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function mt(P,J,oe,$){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Te.intersectsSprite(P)){$&&te.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ve);const et=v.update(P),tt=P.material;tt.visible&&x.push(P,et,tt,oe,te.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Te.intersectsObject(P))){const et=v.update(P),tt=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),te.copy(P.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),te.copy(et.boundingSphere.center)),te.applyMatrix4(P.matrixWorld).applyMatrix4(Ve)),Array.isArray(tt)){const nt=et.groups;for(let ct=0,it=nt.length;ct<it;ct++){const st=nt[ct],Tt=tt[st.materialIndex];Tt&&Tt.visible&&x.push(P,et,Tt,oe,te.z,st)}}else tt.visible&&x.push(P,et,tt,oe,te.z,null)}}const qe=P.children;for(let et=0,tt=qe.length;et<tt;et++)mt(qe[et],J,oe,$)}function bt(P,J,oe,$){const ce=P.opaque,qe=P.transmissive,et=P.transparent;m.setupLightsView(oe),we===!0&&ke.setGlobalState(b.clippingPlanes,oe),qe.length>0&&an(ce,qe,J,oe),$&&G.viewport(A.copy($)),ce.length>0&&It(ce,J,oe),qe.length>0&&It(qe,J,oe),et.length>0&&It(et,J,oe),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function an(P,J,oe,$){const ce=F.isWebGL2;Be===null&&(Be=new Ii(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?ca:Ki,minFilter:Ka,samples:ce?4:0})),b.getDrawingBufferSize(We),ce?Be.setSize(We.x,We.y):Be.setSize(gl(We.x),gl(We.y));const qe=b.getRenderTarget();b.setRenderTarget(Be),b.getClearColor(k),X=b.getClearAlpha(),X<1&&b.setClearColor(16777215,.5),b.clear();const et=b.toneMapping;b.toneMapping=qi,It(P,oe,$),Ce.updateMultisampleRenderTarget(Be),Ce.updateRenderTargetMipmap(Be);let tt=!1;for(let nt=0,ct=J.length;nt<ct;nt++){const it=J[nt],st=it.object,Tt=it.geometry,Lt=it.material,fn=it.group;if(Lt.side===Gn&&st.layers.test($.layers)){const Xn=Lt.side;Lt.side=Sn,Lt.needsUpdate=!0,Xt(st,oe,$,Tt,Lt,fn),Lt.side=Xn,Lt.needsUpdate=!0,tt=!0}}tt===!0&&(Ce.updateMultisampleRenderTarget(Be),Ce.updateRenderTargetMipmap(Be)),b.setRenderTarget(qe),b.setClearColor(k,X),b.toneMapping=et}function It(P,J,oe){const $=J.isScene===!0?J.overrideMaterial:null;for(let ce=0,qe=P.length;ce<qe;ce++){const et=P[ce],tt=et.object,nt=et.geometry,ct=$===null?et.material:$,it=et.group;tt.layers.test(oe.layers)&&Xt(tt,J,oe,nt,ct,it)}}function Xt(P,J,oe,$,ce,qe){P.onBeforeRender(b,J,oe,$,ce,qe),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(b,J,oe,$,P,qe),ce.transparent===!0&&ce.side===Gn&&ce.forceSinglePass===!1?(ce.side=Sn,ce.needsUpdate=!0,b.renderBufferDirect(oe,J,$,ce,P,qe),ce.side=fi,ce.needsUpdate=!0,b.renderBufferDirect(oe,J,$,ce,P,qe),ce.side=Gn):b.renderBufferDirect(oe,J,$,ce,P,qe),P.onAfterRender(b,J,oe,$,ce,qe)}function xn(P,J,oe){J.isScene!==!0&&(J=De);const $=Ee.get(P),ce=m.state.lights,qe=m.state.shadowsArray,et=ce.state.version,tt=I.getParameters(P,ce.state,qe,J,oe),nt=I.getProgramCacheKey(tt);let ct=$.programs;$.environment=P.isMeshStandardMaterial?J.environment:null,$.fog=J.fog,$.envMap=(P.isMeshStandardMaterial?Ge:Pe).get(P.envMap||$.environment),ct===void 0&&(P.addEventListener("dispose",Ne),ct=new Map,$.programs=ct);let it=ct.get(nt);if(it!==void 0){if($.currentProgram===it&&$.lightsStateVersion===et)return ri(P,tt),it}else tt.uniforms=I.getUniforms(P),P.onBuild(oe,tt,b),P.onBeforeCompile(tt,b),it=I.acquireProgram(tt,nt),ct.set(nt,it),$.uniforms=tt.uniforms;const st=$.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(st.clippingPlanes=ke.uniform),ri(P,tt),$.needsLights=ai(P),$.lightsStateVersion=et,$.needsLights&&(st.ambientLightColor.value=ce.state.ambient,st.lightProbe.value=ce.state.probe,st.directionalLights.value=ce.state.directional,st.directionalLightShadows.value=ce.state.directionalShadow,st.spotLights.value=ce.state.spot,st.spotLightShadows.value=ce.state.spotShadow,st.rectAreaLights.value=ce.state.rectArea,st.ltc_1.value=ce.state.rectAreaLTC1,st.ltc_2.value=ce.state.rectAreaLTC2,st.pointLights.value=ce.state.point,st.pointLightShadows.value=ce.state.pointShadow,st.hemisphereLights.value=ce.state.hemi,st.directionalShadowMap.value=ce.state.directionalShadowMap,st.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,st.spotShadowMap.value=ce.state.spotShadowMap,st.spotLightMatrix.value=ce.state.spotLightMatrix,st.spotLightMap.value=ce.state.spotLightMap,st.pointShadowMap.value=ce.state.pointShadowMap,st.pointShadowMatrix.value=ce.state.pointShadowMatrix);const Tt=it.getUniforms(),Lt=Os.seqWithValue(Tt.seq,st);return $.currentProgram=it,$.uniformsList=Lt,it}function ri(P,J){const oe=Ee.get(P);oe.outputColorSpace=J.outputColorSpace,oe.instancing=J.instancing,oe.instancingColor=J.instancingColor,oe.skinning=J.skinning,oe.morphTargets=J.morphTargets,oe.morphNormals=J.morphNormals,oe.morphColors=J.morphColors,oe.morphTargetsCount=J.morphTargetsCount,oe.numClippingPlanes=J.numClippingPlanes,oe.numIntersection=J.numClipIntersection,oe.vertexAlphas=J.vertexAlphas,oe.vertexTangents=J.vertexTangents,oe.toneMapping=J.toneMapping}function dn(P,J,oe,$,ce){J.isScene!==!0&&(J=De),Ce.resetTextureUnits();const qe=J.fog,et=$.isMeshStandardMaterial?J.environment:null,tt=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:hi,nt=($.isMeshStandardMaterial?Ge:Pe).get($.envMap||et),ct=$.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,it=!!oe.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),st=!!oe.morphAttributes.position,Tt=!!oe.morphAttributes.normal,Lt=!!oe.morphAttributes.color;let fn=qi;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fn=b.toneMapping);const Xn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ut=Xn!==void 0?Xn.length:0,ut=Ee.get($),_a=m.state.lights;if(we===!0&&(Oe===!0||P!==M)){const hn=P===M&&$.id===N;ke.setState($,P,hn)}let Nt=!1;$.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==_a.state.version||ut.outputColorSpace!==tt||ce.isInstancedMesh&&ut.instancing===!1||!ce.isInstancedMesh&&ut.instancing===!0||ce.isSkinnedMesh&&ut.skinning===!1||!ce.isSkinnedMesh&&ut.skinning===!0||ce.isInstancedMesh&&ut.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&ut.instancingColor===!1&&ce.instanceColor!==null||ut.envMap!==nt||$.fog===!0&&ut.fog!==qe||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ke.numPlanes||ut.numIntersection!==ke.numIntersection)||ut.vertexAlphas!==ct||ut.vertexTangents!==it||ut.morphTargets!==st||ut.morphNormals!==Tt||ut.morphColors!==Lt||ut.toneMapping!==fn||F.isWebGL2===!0&&ut.morphTargetsCount!==Ut)&&(Nt=!0):(Nt=!0,ut.__version=$.version);let pi=ut.currentProgram;Nt===!0&&(pi=xn($,J,ce));let xa=!1,Fi=!1,ki=!1;const Qt=pi.getUniforms(),mi=ut.uniforms;if(G.useProgram(pi.program)&&(xa=!0,Fi=!0,ki=!0),$.id!==N&&(N=$.id,Fi=!0),xa||M!==P){Qt.setValue(O,"projectionMatrix",P.projectionMatrix),Qt.setValue(O,"viewMatrix",P.matrixWorldInverse);const hn=Qt.map.cameraPosition;hn!==void 0&&hn.setValue(O,te.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&Qt.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Qt.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Fi=!0,ki=!0)}if(ce.isSkinnedMesh){Qt.setOptional(O,ce,"bindMatrix"),Qt.setOptional(O,ce,"bindMatrixInverse");const hn=ce.skeleton;hn&&(F.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Qt.setValue(O,"boneTexture",hn.boneTexture,Ce),Qt.setValue(O,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ba=oe.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0&&F.isWebGL2===!0)&&L.update(ce,oe,pi),(Fi||ut.receiveShadow!==ce.receiveShadow)&&(ut.receiveShadow=ce.receiveShadow,Qt.setValue(O,"receiveShadow",ce.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(mi.envMap.value=nt,mi.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),Fi&&(Qt.setValue(O,"toneMappingExposure",b.toneMappingExposure),ut.needsLights&&Wn(mi,ki),qe&&$.fog===!0&&ne.refreshFogUniforms(mi,qe),ne.refreshMaterialUniforms(mi,$,j,Y,Be),Os.upload(O,ut.uniformsList,mi,Ce)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Os.upload(O,ut.uniformsList,mi,Ce),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Qt.setValue(O,"center",ce.center),Qt.setValue(O,"modelViewMatrix",ce.modelViewMatrix),Qt.setValue(O,"normalMatrix",ce.normalMatrix),Qt.setValue(O,"modelMatrix",ce.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const hn=$.uniformsGroups;for(let tr=0,ya=hn.length;tr<ya;tr++)if(F.isWebGL2){const Sr=hn[tr];je.update(Sr,pi),je.bind(Sr,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Wn(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function ai(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,J,oe){Ee.get(P.texture).__webglTexture=J,Ee.get(P.depthTexture).__webglTexture=oe;const $=Ee.get(P);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=oe===void 0,$.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,J){const oe=Ee.get(P);oe.__webglFramebuffer=J,oe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(P,J=0,oe=0){R=P,w=J,D=oe;let $=!0,ce=null,qe=!1,et=!1;if(P){const nt=Ee.get(P);nt.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(O.FRAMEBUFFER,null),$=!1):nt.__webglFramebuffer===void 0?Ce.setupRenderTarget(P):nt.__hasExternalTextures&&Ce.rebindTextures(P,Ee.get(P.texture).__webglTexture,Ee.get(P.depthTexture).__webglTexture);const ct=P.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(et=!0);const it=Ee.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[J])?ce=it[J][oe]:ce=it[J],qe=!0):F.isWebGL2&&P.samples>0&&Ce.useMultisampledRTT(P)===!1?ce=Ee.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?ce=it[oe]:ce=it,A.copy(P.viewport),se.copy(P.scissor),Z=P.scissorTest}else A.copy(ge).multiplyScalar(j).floor(),se.copy(q).multiplyScalar(j).floor(),Z=ee;if(G.bindFramebuffer(O.FRAMEBUFFER,ce)&&F.drawBuffers&&$&&G.drawBuffers(P,ce),G.viewport(A),G.scissor(se),G.setScissorTest(Z),qe){const nt=Ee.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt.__webglTexture,oe)}else if(et){const nt=Ee.get(P.texture),ct=J||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,nt.__webglTexture,oe||0,ct)}N=-1},this.readRenderTargetPixels=function(P,J,oe,$,ce,qe,et){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Ee.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&et!==void 0&&(tt=tt[et]),tt){G.bindFramebuffer(O.FRAMEBUFFER,tt);try{const nt=P.texture,ct=nt.format,it=nt.type;if(ct!==Jn&&fe.convert(ct)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=it===ca&&(be.has("EXT_color_buffer_half_float")||F.isWebGL2&&be.has("EXT_color_buffer_float"));if(it!==Ki&&fe.convert(it)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Ai&&(F.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-$&&oe>=0&&oe<=P.height-ce&&O.readPixels(J,oe,$,ce,fe.convert(ct),fe.convert(it),qe)}finally{const nt=R!==null?Ee.get(R).__webglFramebuffer:null;G.bindFramebuffer(O.FRAMEBUFFER,nt)}}},this.copyFramebufferToTexture=function(P,J,oe=0){const $=Math.pow(2,-oe),ce=Math.floor(J.image.width*$),qe=Math.floor(J.image.height*$);Ce.setTexture2D(J,0),O.copyTexSubImage2D(O.TEXTURE_2D,oe,0,0,P.x,P.y,ce,qe),G.unbindTexture()},this.copyTextureToTexture=function(P,J,oe,$=0){const ce=J.image.width,qe=J.image.height,et=fe.convert(oe.format),tt=fe.convert(oe.type);Ce.setTexture2D(oe,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,oe.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,oe.unpackAlignment),J.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$,P.x,P.y,ce,qe,et,tt,J.image.data):J.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$,P.x,P.y,J.mipmaps[0].width,J.mipmaps[0].height,et,J.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,$,P.x,P.y,et,tt,J.image),$===0&&oe.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(P,J,oe,$,ce=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const qe=P.max.x-P.min.x+1,et=P.max.y-P.min.y+1,tt=P.max.z-P.min.z+1,nt=fe.convert($.format),ct=fe.convert($.type);let it;if($.isData3DTexture)Ce.setTexture3D($,0),it=O.TEXTURE_3D;else if($.isDataArrayTexture)Ce.setTexture2DArray($,0),it=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);const st=O.getParameter(O.UNPACK_ROW_LENGTH),Tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Lt=O.getParameter(O.UNPACK_SKIP_PIXELS),fn=O.getParameter(O.UNPACK_SKIP_ROWS),Xn=O.getParameter(O.UNPACK_SKIP_IMAGES),Ut=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,P.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,P.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,P.min.z),oe.isDataTexture||oe.isData3DTexture?O.texSubImage3D(it,ce,J.x,J.y,J.z,qe,et,tt,nt,ct,Ut.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(it,ce,J.x,J.y,J.z,qe,et,tt,nt,Ut.data)):O.texSubImage3D(it,ce,J.x,J.y,J.z,qe,et,tt,nt,ct,Ut),O.pixelStorei(O.UNPACK_ROW_LENGTH,st),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,fn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xn),ce===0&&$.generateMipmaps&&O.generateMipmap(it),G.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ce.setTextureCube(P,0):P.isData3DTexture?Ce.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ce.setTexture2DArray(P,0):Ce.setTexture2D(P,0),G.unbindTexture()},this.resetState=function(){w=0,D=0,R=null,G.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?_r:sf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_r?At:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class My extends Cf{}My.prototype.isWebGL1Renderer=!0;class Sy extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ey{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new H;class Ks{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),r=yt(r,this.array),a=yt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new ni(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pf extends ga{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vr;const Ra=new H,Wr=new H,Xr=new H,jr=new $e,Ca=new $e,Lf=new Ht,As=new H,Pa=new H,Rs=new H,Ou=new $e,Yo=new $e,Fu=new $e;class wy extends cn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new Oi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ey(t,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new Ks(i,3,0,!1)),Vr.setAttribute("uv",new Ks(i,2,3,!1))}this.geometry=Vr,this.material=e!==void 0?e:new Pf,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),Lf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;Cs(As.set(-.5,-.5,0),Xr,o,Wr,r,a),Cs(Pa.set(.5,-.5,0),Xr,o,Wr,r,a),Cs(Rs.set(.5,.5,0),Xr,o,Wr,r,a),Ou.set(0,0),Yo.set(1,0),Fu.set(1,1);let s=e.ray.intersectTriangle(As,Pa,Rs,!1,Ra);if(s===null&&(Cs(Pa.set(-.5,.5,0),Xr,o,Wr,r,a),Yo.set(0,1),s=e.ray.intersectTriangle(As,Rs,Pa,!1,Ra),s===null))return;const l=e.ray.origin.distanceTo(Ra);l<e.near||l>e.far||t.push({distance:l,point:Ra.clone(),uv:zn.getInterpolation(Ra,As,Pa,Rs,Ou,Yo,Fu,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cs(n,e,t,i,r,a){jr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ca.x=a*jr.x-r*jr.y,Ca.y=r*jr.x+a*jr.y):Ca.copy(jr),n.copy(e),n.x+=Ca.x,n.y+=Ca.y,n.applyMatrix4(Lf)}class Fs extends ln{constructor(e,t,i,r,a,o,s,l,c){super(e,t,i,r,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Za extends ga{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Df extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qo=new Ht,ku=new H,Bu=new H;class Ty{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(ku),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zu=new Ht,La=new H,Ko=new H;class Ay extends Ty{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),La.setFromMatrixPosition(e.matrixWorld),i.position.copy(La),Ko.copy(i.position),Ko.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ko),i.updateMatrixWorld(),r.makeTranslation(-La.x,-La.y,-La.z),zu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu)}}class Ry extends Df{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ay}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cy extends Df{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class If{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gu(){return(typeof performance>"u"?Date:performance).now()}class Hu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);function Gl(n,e,t,i,r,a,o,s){const l=(R,N,M,A)=>[new $e(R/o,1-A/s),new $e(M/o,1-A/s),new $e(M/o,1-N/s),new $e(R/o,1-N/s)],c=l(e+a,t,e+i+a,t+a),u=l(e+i+a,t,e+i*2+a,t+a),f=l(e,t+a,e+a,t+a+r),p=l(e+a,t+a,e+i+a,t+a+r),g=l(e+i+a,t+a,e+i+a*2,t+r+a),_=l(e+i+a*2,t+a,e+i*2+a*2,t+r+a),x=n.attributes.uv,m=[g[3],g[2],g[0],g[1]],h=[f[3],f[2],f[0],f[1]],E=[c[3],c[2],c[0],c[1]],b=[u[0],u[1],u[3],u[2]],S=[p[3],p[2],p[0],p[1]],w=[_[3],_[2],_[0],_[1]],D=[];for(const R of[m,h,E,b,S,w])for(const N of R)D.push(N.x,N.y);x.set(new Float32Array(D)),x.needsUpdate=!0}function Nn(n,e,t,i,r,a){Gl(n,e,t,i,r,a,64,64)}function _l(n,e,t,i,r,a){Gl(n,e,t,i,r,a,64,32)}class sr extends tn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class Py extends tn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new Za({side:fi}),this.layer2Material=new Za({side:Gn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new zt(8,8,8);Nn(e,0,0,8,8,8);const t=new St(e,this.layer1Material),i=new zt(9,9,9);Nn(i,32,0,8,8,8);const r=new St(i,this.layer2Material);this.head=new sr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new zt(8,12,4);Nn(a,16,16,8,12,4);const o=new St(a,this.layer1Material),s=new zt(8.5,12.5,4.5);Nn(s,16,32,8,12,4);const l=new St(s,this.layer2Material);this.body=new sr(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const c=new zt,u=new St(c,this.layer1MaterialBiased);this.modelListeners.push(()=>{u.scale.x=this.slim?3:4,u.scale.y=12,u.scale.z=4,Nn(c,40,16,this.slim?3:4,12,4)});const f=new zt,p=new St(f,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Nn(f,40,32,this.slim?3:4,12,4)});const g=new tn;g.add(u,p),this.modelListeners.push(()=>{g.position.x=this.slim?-.5:-1}),g.position.y=-4,this.rightArm=new sr(u,p),this.rightArm.name="rightArm",this.rightArm.add(g),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const _=new zt,x=new St(_,this.layer1MaterialBiased);this.modelListeners.push(()=>{x.scale.x=this.slim?3:4,x.scale.y=12,x.scale.z=4,Nn(_,32,48,this.slim?3:4,12,4)});const m=new zt,h=new St(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3.5:4.5,h.scale.y=12.5,h.scale.z=4.5,Nn(m,48,48,this.slim?3:4,12,4)});const E=new tn;E.add(x,h),this.modelListeners.push(()=>{E.position.x=this.slim?.5:1}),E.position.y=-4,this.leftArm=new sr(x,h),this.leftArm.name="leftArm",this.leftArm.add(E),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const b=new zt(4,12,4);Nn(b,0,16,4,12,4);const S=new St(b,this.layer1MaterialBiased),w=new zt(4.5,12.5,4.5);Nn(w,0,32,4,12,4);const D=new St(w,this.layer2MaterialBiased),R=new tn;R.add(S,D),R.position.y=-6,this.rightLeg=new sr(S,D),this.rightLeg.name="rightLeg",this.rightLeg.add(R),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const N=new zt(4,12,4);Nn(N,16,48,4,12,4);const M=new St(N,this.layer1MaterialBiased),A=new zt(4.5,12.5,4.5);Nn(A,0,48,4,12,4);const se=new St(A,this.layer2MaterialBiased),Z=new tn;Z.add(M,se),Z.position.y=-6,this.leftLeg=new sr(M,se),this.leftLeg.name="leftLeg",this.leftLeg.add(Z),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof sr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Ly extends tn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Za({side:Gn,transparent:!0,alphaTest:1e-5});const e=new zt(10,16,1);_l(e,0,0,10,16,1),this.cape=new St(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Dy extends tn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Za({side:Gn,transparent:!0,alphaTest:1e-5});const e=new zt(12,22,4);_l(e,22,0,10,20,2);const t=new St(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new tn,this.leftWing.add(t),this.add(this.leftWing);const i=new zt(12,22,4);_l(i,22,0,10,20,2);const r=new St(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new tn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Iy extends tn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Za({side:fi});const e=new zt(8,8,4/3);Gl(e,0,0,6,6,1,14,7),this.rightEar=new St(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new St(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Vu=10.8*Math.PI/180;class Uy extends tn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new Py,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Ly,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Vu,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new Dy,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Iy,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Vu,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ps(n){return n instanceof HTMLImageElement||n instanceof HTMLVideoElement||n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}function xl(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(a.data[l+3]!==255)return!0}return!1}function so(n){return n/64}function Wu(n,e,t){if(t){if(xl(n,0,0,e,e))return}else if(xl(n,0,0,e,e/2))return;const i=so(e),r=(a,o,s,l)=>n.clearRect(a*i,o*i,s*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function Ny(n,e){n.save(),n.scale(-1,1);const t=so(e),i=(r,a,o,s,l,c)=>n.drawImage(n.canvas,r*t,a*t,o*t,s*t,-l*t,c*t,-o*t,s*t);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),n.restore()}function Oy(n,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=n.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;n.width=r,n.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),Ny(i,r),Wu(i,n.width,!1)}else n.width=e.width,n.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,n.width,n.height),Wu(i,n.width,!0)}function Fy(n){if(n.width===2*n.height)return n.width/64;if(n.width*17===n.height*22)return n.width/22;if(n.width*11===n.height*23)return n.width/46;throw new Error(`Bad cape size: ${n.width}x${n.height}`)}function ky(n,e){const t=Fy(e);n.width=64*t,n.height=32*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function By(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===0&&a.data[l+1]===0&&a.data[l+2]===0&&a.data[l+3]===255))return!1}return!0}function zy(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===255&&a.data[l+1]===255&&a.data[l+2]===255&&a.data[l+3]===255))return!1}return!0}function Gy(n){const e=so(n.width),t=n.getContext("2d",{willReadFrequently:!0}),i=(s,l,c,u)=>xl(t,s*e,l*e,c*e,u*e),r=(s,l,c,u)=>By(t,s*e,l*e,c*e,u*e),a=(s,l,c,u)=>zy(t,s*e,l*e,c*e,u*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function Hy(n){if(n.width===n.height*2&&n.height%7===0)return n.height/7;throw new Error(`Bad ears size: ${n.width}x${n.height}`)}function Vy(n,e){const t=Hy(e);n.width=14*t,n.height=7*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function Xu(n,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=so(e.width),i=14*t,r=7*t;n.width=i,n.height=r;const a=n.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,i,r),a.drawImage(e,24*t,0,i,r,0,0,i,r)}async function Ls(n){const e=document.createElement("img");return new Promise((t,i)=>{e.onload=()=>t(e),e.onerror=i,e.crossOrigin="anonymous",typeof n=="string"?e.src=n:(n.crossOrigin!==void 0&&(e.crossOrigin=n.crossOrigin),n.referrerPolicy!==void 0&&(e.referrerPolicy=n.referrerPolicy),e.src=n.src)})}const ju={type:"change"},Zo={type:"start"},Yu={type:"end"},Ds=new ff,qu=new Xi,Wy=Math.cos(70*mv.DEG2RAD);class Xy extends Mr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",v),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ju),i.update(),a=r.NONE},this.update=(function(){const L=new H,ie=new yr().setFromUnitVectors(e.up,new H(0,1,0)),de=ie.clone().invert(),fe=new H,Ie=new yr,je=new H,Ye=2*Math.PI;return function(Ue=null){const V=i.object.position;L.copy(V).sub(i.target),L.applyQuaternion(ie),s.setFromVector3(L),i.autoRotate&&a===r.NONE&&se(M(Ue)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Se=i.minAzimuthAngle,Ne=i.maxAzimuthAngle;isFinite(Se)&&isFinite(Ne)&&(Se<-Math.PI?Se+=Ye:Se>Math.PI&&(Se-=Ye),Ne<-Math.PI?Ne+=Ye:Ne>Math.PI&&(Ne-=Ye),Se<=Ne?s.theta=Math.max(Se,Math.min(Ne,s.theta)):s.theta=s.theta>(Se+Ne)/2?Math.max(Se,s.theta):Math.min(Ne,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&D||i.object.isOrthographicCamera?s.radius=ue(s.radius):s.radius=ue(s.radius*c),L.setFromSpherical(s),L.applyQuaternion(de),V.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let rt=!1;if(i.zoomToCursor&&D){let at=null;if(i.object.isPerspectiveCamera){const ht=L.length();at=ue(ht*c);const Wt=ht-at;i.object.position.addScaledVector(S,Wt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ht=new H(w.x,w.y,0);ht.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),rt=!0;const Wt=new H(w.x,w.y,0);Wt.unproject(i.object),i.object.position.sub(Wt).add(ht),i.object.updateMatrixWorld(),at=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;at!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(at).add(i.object.position):(Ds.origin.copy(i.object.position),Ds.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ds.direction))<Wy?e.lookAt(i.target):(qu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ds.intersectPlane(qu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),rt=!0);return c=1,D=!1,rt||fe.distanceToSquared(i.object.position)>o||8*(1-Ie.dot(i.object.quaternion))>o||je.distanceToSquared(i.target)>0?(i.dispatchEvent(ju),fe.copy(i.object.position),Ie.copy(i.object.quaternion),je.copy(i.target),rt=!1,!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",le),i.domElement.removeEventListener("pointerdown",Ee),i.domElement.removeEventListener("pointercancel",Pe),i.domElement.removeEventListener("wheel",T),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Pe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Hu,l=new Hu;let c=1;const u=new H,f=new $e,p=new $e,g=new $e,_=new $e,x=new $e,m=new $e,h=new $e,E=new $e,b=new $e,S=new H,w=new $e;let D=!1;const R=[],N={};function M(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function se(L){l.theta-=L}function Z(L){l.phi-=L}const k=(function(){const L=new H;return function(de,fe){L.setFromMatrixColumn(fe,0),L.multiplyScalar(-de),u.add(L)}})(),X=(function(){const L=new H;return function(de,fe){i.screenSpacePanning===!0?L.setFromMatrixColumn(fe,1):(L.setFromMatrixColumn(fe,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(de),u.add(L)}})(),Q=(function(){const L=new H;return function(de,fe){const Ie=i.domElement;if(i.object.isPerspectiveCamera){const je=i.object.position;L.copy(je).sub(i.target);let Ye=L.length();Ye*=Math.tan(i.object.fov/2*Math.PI/180),k(2*de*Ye/Ie.clientHeight,i.object.matrix),X(2*fe*Ye/Ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(de*(i.object.right-i.object.left)/i.object.zoom/Ie.clientWidth,i.object.matrix),X(fe*(i.object.top-i.object.bottom)/i.object.zoom/Ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Y(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(L){if(!i.zoomToCursor)return;D=!0;const ie=i.domElement.getBoundingClientRect(),de=L.clientX-ie.left,fe=L.clientY-ie.top,Ie=ie.width,je=ie.height;w.x=de/Ie*2-1,w.y=-(fe/je)*2+1,S.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function ue(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function ge(L){f.set(L.clientX,L.clientY)}function q(L){W(L),h.set(L.clientX,L.clientY)}function ee(L){_.set(L.clientX,L.clientY)}function Te(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ie=i.domElement;se(2*Math.PI*g.x/ie.clientHeight),Z(2*Math.PI*g.y/ie.clientHeight),f.copy(p),i.update()}function we(L){E.set(L.clientX,L.clientY),b.subVectors(E,h),b.y>0?Y(A()):b.y<0&&j(A()),h.copy(E),i.update()}function Oe(L){x.set(L.clientX,L.clientY),m.subVectors(x,_).multiplyScalar(i.panSpeed),Q(m.x,m.y),_.copy(x),i.update()}function Be(L){W(L),L.deltaY<0?j(A()):L.deltaY>0&&Y(A()),i.update()}function Ve(L){let ie=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?se(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?se(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(-i.keyPanSpeed,0),ie=!0;break}ie&&(L.preventDefault(),i.update())}function We(){if(R.length===1)f.set(R[0].pageX,R[0].pageY);else{const L=.5*(R[0].pageX+R[1].pageX),ie=.5*(R[0].pageY+R[1].pageY);f.set(L,ie)}}function te(){if(R.length===1)_.set(R[0].pageX,R[0].pageY);else{const L=.5*(R[0].pageX+R[1].pageX),ie=.5*(R[0].pageY+R[1].pageY);_.set(L,ie)}}function De(){const L=R[0].pageX-R[1].pageX,ie=R[0].pageY-R[1].pageY,de=Math.sqrt(L*L+ie*ie);h.set(0,de)}function Le(){i.enableZoom&&De(),i.enablePan&&te()}function O(){i.enableZoom&&De(),i.enableRotate&&We()}function Ae(L){if(R.length==1)p.set(L.pageX,L.pageY);else{const de=K(L),fe=.5*(L.pageX+de.x),Ie=.5*(L.pageY+de.y);p.set(fe,Ie)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ie=i.domElement;se(2*Math.PI*g.x/ie.clientHeight),Z(2*Math.PI*g.y/ie.clientHeight),f.copy(p)}function be(L){if(R.length===1)x.set(L.pageX,L.pageY);else{const ie=K(L),de=.5*(L.pageX+ie.x),fe=.5*(L.pageY+ie.y);x.set(de,fe)}m.subVectors(x,_).multiplyScalar(i.panSpeed),Q(m.x,m.y),_.copy(x)}function F(L){const ie=K(L),de=L.pageX-ie.x,fe=L.pageY-ie.y,Ie=Math.sqrt(de*de+fe*fe);E.set(0,Ie),b.set(0,Math.pow(E.y/h.y,i.zoomSpeed)),Y(b.y),h.copy(E)}function G(L){i.enableZoom&&F(L),i.enablePan&&be(L)}function ye(L){i.enableZoom&&F(L),i.enableRotate&&Ae(L)}function Ee(L){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Ce),i.domElement.addEventListener("pointerup",Pe)),he(L),L.pointerType==="touch"?I(L):Ge(L))}function Ce(L){i.enabled!==!1&&(L.pointerType==="touch"?ne(L):Xe(L))}function Pe(L){ke(L),R.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Ce),i.domElement.removeEventListener("pointerup",Pe)),i.dispatchEvent(Yu),a=r.NONE}function Ge(L){let ie;switch(L.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case wr.DOLLY:if(i.enableZoom===!1)return;q(L),a=r.DOLLY;break;case wr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;ee(L),a=r.PAN}else{if(i.enableRotate===!1)return;ge(L),a=r.ROTATE}break;case wr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ge(L),a=r.ROTATE}else{if(i.enablePan===!1)return;ee(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Zo)}function Xe(L){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;Te(L);break;case r.DOLLY:if(i.enableZoom===!1)return;we(L);break;case r.PAN:if(i.enablePan===!1)return;Oe(L);break}}function T(L){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(L.preventDefault(),i.dispatchEvent(Zo),Be(L),i.dispatchEvent(Yu))}function v(L){i.enabled===!1||i.enablePan===!1||Ve(L)}function I(L){switch(Me(L),R.length){case 1:switch(i.touches.ONE){case Tr.ROTATE:if(i.enableRotate===!1)return;We(),a=r.TOUCH_ROTATE;break;case Tr.PAN:if(i.enablePan===!1)return;te(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Tr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(),a=r.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;O(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Zo)}function ne(L){switch(Me(L),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(L),i.update();break;default:a=r.NONE}}function le(L){i.enabled!==!1&&L.preventDefault()}function he(L){R.push(L)}function ke(L){delete N[L.pointerId];for(let ie=0;ie<R.length;ie++)if(R[ie].pointerId==L.pointerId){R.splice(ie,1);return}}function Me(L){let ie=N[L.pointerId];ie===void 0&&(ie=new $e,N[L.pointerId]=ie),ie.set(L.pageX,L.pageY)}function K(L){const ie=L.pointerId===R[0].pointerId?R[1]:R[0];return N[ie.pointerId]}i.domElement.addEventListener("contextmenu",le),i.domElement.addEventListener("pointerdown",Ee),i.domElement.addEventListener("pointercancel",Pe),i.domElement.addEventListener("wheel",T,{passive:!1}),this.update()}}const jy={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class oo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yy=new Sf(-1,1,1,-1,0,1),Hl=new Oi;Hl.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3));Hl.setAttribute("uv",new Li([0,2,0,0,2,0],2));class qy{constructor(e){this._mesh=new St(Hl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Uf extends oo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ui?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xf.clone(e.uniforms),this.material=new Ui({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qy(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ku extends oo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class Ky extends oo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Zy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new Ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ca}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uf(jy),this.copyPass.material.blending=Pi,this.clock=new If}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Ku!==void 0&&(o instanceof Ku?i=!0:o instanceof Ky&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jy extends oo{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Qy={uniforms:{tDiffuse:{value:null},resolution:{value:new $e(1/1024,1/512)}},vertexShader:`

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
	`};class Nf{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const i=t*this.speed;this.animate(e,i),this.animationObjects.forEach((r,a)=>{const o=this.progress0.get(a);r(e,this.progress-o,a)}),this.progress+=i}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Zu extends Nf{animate(e){const t=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class Ju extends Nf{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class $y extends wy{constructor(e="",t={}){const i=new Pf({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const i=t.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new Fs(e);r.magFilter=Dt,r.minFilter=Dt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class eM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new Cy(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new Ry(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new Sy,this.camera=new Ln,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),On.enabled=!1,this.renderer=new Cf({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Ii(0,0,{depthTexture:new Rf(0,0,Ai)})),this.composer=new Zy(this.renderer,t),this.renderPass=new Jy(this.scene,this.camera),this.fxaaPass=new Uf(Qy),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new Uy,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new tn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new Xy(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new If,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Fs(this.skinCanvas),this.skinTexture.magFilter=Dt,this.skinTexture.minFilter=Dt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Fs(this.capeCanvas),this.capeTexture.magFilter=Dt,this.capeTexture.minFilter=Dt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Fs(this.earsCanvas),this.earsTexture.magFilter=Dt,this.earsTexture.minFilter=Dt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ps(e))Oy(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=Gy(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Xu(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Ls(e).then(i=>this.loadSkin(i,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ps(e))ky(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Ls(e).then(i=>this.loadCape(i,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ps(e))t.textureType==="skin"?Xu(this.earsCanvas,e):Vy(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Ls(e).then(i=>this.loadEars(i,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,js)}loadBackground(e,t){if(Ps(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new ln,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Ls(e).then(i=>this.loadBackground(i,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new H).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new $e).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new $e).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof xt||e instanceof ln?this.scene.background=e:this.scene.background=new xt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof cn||(e=new $y(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}var tM=_e("<canvas></canvas>");function Of(n,e){En(e,!0);let t=dt(e,"skin",3,null),i=dt(e,"cape",3,null),r=dt(e,"width",3,260),a=dt(e,"height",3,340),o=dt(e,"walking",3,!1),s=dt(e,"autorotate",3,!1),l=dt(e,"zoom",3,.85),c=xe(null),u=null,f,p;function g(m){if(!m)return null;const h=String(m).trim();if(!h)return null;if(/^(https?:|data:)/i.test(h))return h;const E=window.__TAURI__?.core?.convertFileSrc;return E?E(h):h}function _(){if(!u)return;const m=g(t()),h=g(i());m!==f&&(f=m,m?u.loadSkin(m,{model:"auto-detect"}).catch(()=>{}):u.resetSkin()),h!==p&&(p=h,h?u.loadCape(h).catch(()=>{}):u.resetCape())}er(()=>(u=new eM({canvas:d(c),width:r(),height:a(),zoom:l(),fov:55}),u.controls.enablePan=!1,u.controls.enableZoom=!0,u.autoRotate=s(),u.animation=o()?new Ju:new Zu,_(),()=>{u?.dispose(),u=null})),In(()=>{_()}),In(()=>{u&&(u.animation=o()?new Ju:new Zu)}),In(()=>{u&&(u.autoRotate=s())}),In(()=>{u&&u.setSize(r(),a())});var x=tM();Wd(x,m=>y(c,m),()=>d(c)),Fe(()=>Wi(x,`width:${r()??""}px;height:${a()??""}px;display:block`)),re(n,x),wn()}var nM=_e("<button> </button>"),iM=_e('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),rM=_e('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),aM=_e('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),sM=_e('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),oM=_e('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),lM=_e('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),cM=_e('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),uM=_e('<div class="p-4"><!> <!></div>'),dM=_e('<form class="flex flex-col gap-3 p-4"><div class="flex gap-2"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <button type="button" class="shrink-0 rounded border border-(--border) px-2.5 text-[11px] hover:bg-(--bg-subtle)" title="Use the Ely.by authlib-injector endpoint">Ely.by</button></div> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),fM=_e('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),hM=_e('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),pM=_e('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),mM=_e('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),gM=_e('<div><div class="flex items-center gap-3"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-sm font-bold text-(--accent)"> </span> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape">🎨</button> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),vM=_e('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),_M=_e('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <!> <div class="border-t border-(--border)"></div></div></div></div>');function xM(n,e){En(e,!0);let t=dt(e,"accounts",19,()=>[]),i=dt(e,"active",3,null),r=xe("offline"),a=xe(""),o=xe(!1),s=xe(""),l=xe(""),c=xe("idle"),u=xe(""),f=xe(null),p=xe(!1),g=null,_=xe(""),x=xe(""),m=xe(""),h=xe(""),E=xe(null),b=xe(""),S=xe("");function w(F,G){const ye=window.__TAURI__?.core;return ye?ye.invoke(F,G):Promise.reject(new Error("Tauri backend unavailable in this preview."))}er(()=>{const F=$s(()=>e.onclose?.());return()=>eo(F)}),Lp(()=>D());function D(){g&&(clearInterval(g),g=null)}In(()=>{const F=d(s).trim(),G=setTimeout(async()=>{if(!F){y(l,"");return}try{y(l,await w("offline_uuid",{username:F}),!0)}catch{y(l,"")}},200);return()=>clearTimeout(G)});async function R(F){F.preventDefault(),y(a,""),y(o,!0);try{await w("add_offline_account",{username:d(s).trim()}),y(s,""),y(l,""),await e.onrefresh?.()}catch(G){y(a,String(G),!0)}finally{y(o,!1)}}async function N(){y(u,""),y(p,!1),y(c,"requesting");try{y(f,await w("start_microsoft_device_code"),!0),y(c,"code"),D(),g=setInterval(M,(d(f).interval||5)*1e3)}catch(F){y(c,"idle"),y(u,String(F),!0)}}async function M(){if(d(f))try{const F=await w("poll_microsoft_device_code",{device:d(f)});if(F.state==="pending")return;if(F.state==="slow_down"){D(),g=setInterval(M,((d(f).interval||5)+5)*1e3);return}if(D(),F.state==="failed"){y(u,F.reason,!0),y(f,null),y(c,"idle");return}y(f,null),y(c,"signedin"),await e.onrefresh?.()}catch(F){y(u,String(F),!0)}}async function A(){if(d(f))try{await navigator.clipboard.writeText(d(f).user_code),y(p,!0),setTimeout(()=>y(p,!1),1600)}catch{}}async function se(F){F.preventDefault(),y(a,""),y(o,!0);try{const G=await w("add_custom_yggdrasil_account",{username:d(_).trim(),serverUrl:d(x).trim()});(d(m).trim()||d(h).trim())&&await w("set_account_textures",{id:G.id,skin:d(m).trim()||null,cape:d(h).trim()||null}),y(_,""),y(x,""),y(m,""),y(h,""),await e.onrefresh?.()}catch(G){y(a,String(G),!0)}finally{y(o,!1)}}const Z="https://authserver.ely.by/api/authlib-injector";async function k(F){const G=window.__TAURI__?.dialog?.open;if(!G){y(a,"File picker unavailable in this build.");return}try{const ye=await G({multiple:!1,title:F==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!ye)return;const Ee=String(ye);y(F==="skin"?m:h,Ee,!0),y(a,"")}catch(ye){y(a,String(ye),!0)}}async function X(F){y(a,"");try{await w("set_active_account",{id:F}),await e.onrefresh?.()}catch(G){y(a,String(G),!0)}}async function Q(F){y(a,"");try{await w("remove_account",{id:F}),d(E)===F&&y(E,null),await e.onrefresh?.()}catch(G){y(a,String(G),!0)}}function Y(F){if(d(E)===F.id){y(E,null);return}y(E,F.id,!0),y(b,F.skin??"",!0),y(S,F.cape??"",!0)}async function j(F){const G=window.__TAURI__?.dialog?.open;if(!G){y(a,"File picker unavailable in this build.");return}try{const ye=await G({multiple:!1,title:F==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!ye)return;y(F==="skin"?b:S,String(ye),!0),y(a,"")}catch(ye){y(a,String(ye),!0)}}async function W(){y(a,""),y(o,!0);try{await w("set_account_textures",{id:d(E),skin:d(b).trim()||null,cape:d(S).trim()||null}),await e.onrefresh?.(),y(E,null)}catch(F){y(a,String(F),!0)}finally{y(o,!1)}}async function ue(){y(b,""),y(S,""),await W()}function ge(F){return{offline:"Offline",microsoft:"Microsoft"}[F.account_type.type]??"Yggdrasil"}const q=Ft(()=>t().find(F=>F.id===d(E))??null);var ee=_M(),Te=z(ee),we=z(Te),Oe=C(z(we),2),Be=C(we,2);wt(Be,20,()=>[["offline","Offline"],["microsoft","Microsoft"],["custom","Custom / Ely.by"]],al,(F,G)=>{var ye=Ft(()=>nd(G,2));let Ee=()=>d(ye)[0],Ce=()=>d(ye)[1];var Pe=nM(),Ge=pe(Pe,!0);Fe(()=>{Mt(Pe,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${d(r)===Ee()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),me(Ge,Ce())}),ae("click",Pe,()=>{y(r,Ee(),!0),y(a,"")}),re(F,Pe)});var Ve=C(Be,2),We=z(Ve);{var te=F=>{var G=rM(),ye=Pt(G),Ee=z(ye),Ce=C(Ee,2),Pe=C(ye,2);{var Ge=Xe=>{var T=iM(),v=C(z(T),2),I=pe(v,!0);Fe(()=>me(I,d(l))),re(Xe,T)};Ke(Pe,Xe=>{d(l)&&Xe(Ge)})}Fe(Xe=>Ce.disabled=Xe,[()=>!d(s).trim()||d(o)]),$i("submit",ye,R),Ot(Ee,()=>d(s),Xe=>y(s,Xe)),re(F,G)},De=F=>{var G=uM(),ye=z(G);{var Ee=v=>{var I=aM(),ne=Pt(I);Fe(()=>ne.disabled=d(o)),ae("click",ne,N),re(v,I)},Ce=v=>{var I=sM();re(v,I)},Pe=v=>{var I=oM(),ne=C(z(I),2),le=pe(ne,!0),he=C(ne,4),ke=pe(he,!0),Me=C(he,2),K=z(Me),L=pe(K,!0),ie=C(K,2);Fe(()=>{me(le,d(f).verification_uri),me(ke,d(f).user_code),me(L,d(p)?"Copied ✓":"Copy code")}),ae("click",K,A),ae("click",ie,N),re(v,I)},Ge=v=>{var I=lM(),ne=C(Pt(I),2);ae("click",ne,()=>{y(c,"idle"),y(u,"")}),re(v,I)};Ke(ye,v=>{d(c)==="idle"?v(Ee):d(c)==="requesting"?v(Ce,1):d(c)==="code"&&d(f)?v(Pe,2):d(c)==="signedin"&&v(Ge,3)})}var Xe=C(ye,2);{var T=v=>{var I=cM(),ne=pe(I,!0);Fe(()=>me(ne,d(u))),re(v,I)};Ke(Xe,v=>{d(u)&&v(T)})}re(F,G)},Le=F=>{var G=dM(),ye=z(G),Ee=z(ye),Ce=C(Ee,2),Pe=C(ye,2),Ge=C(Pe,2),Xe=z(Ge),T=C(z(Xe)),v=pe(T,!0),I=C(Xe,2),ne=C(z(I)),le=pe(ne,!0),he=C(Ge,2);Fe(ke=>{me(v,d(m)||"none"),me(le,d(h)||"none"),he.disabled=ke},[()=>!d(_).trim()||!d(x).trim()||d(o)]),$i("submit",G,se),Ot(Ee,()=>d(x),ke=>y(x,ke)),ae("click",Ce,()=>y(x,Z)),Ot(Pe,()=>d(_),ke=>y(_,ke)),ae("click",Xe,()=>k("skin")),ae("click",I,()=>k("cape")),re(F,G)};Ke(We,F=>{d(r)==="offline"?F(te):d(r)==="microsoft"?F(De,1):d(r)==="custom"&&F(Le,2)})}var O=C(We,2);{var Ae=F=>{var G=fM(),ye=pe(G,!0);Fe(()=>me(ye,d(a))),re(F,G)};Ke(O,F=>{d(a)&&F(Ae)})}var be=C(O,2);wt(be,21,t,F=>F.id,(F,G)=>{var ye=gM(),Ee=z(ye),Ce=z(Ee),Pe=pe(Ce,!0),Ge=C(Ce,2),Xe=z(Ge),T=z(Xe),v=pe(T,!0),I=C(T,2),ne=pe(I,!0),le=C(I,2);{var he=Ye=>{var U=hM();re(Ye,U)};Ke(le,Ye=>{i()?.id===d(G).id&&Ye(he)})}var ke=C(Xe,2),Me=pe(ke,!0),K=C(Ge,2),L=z(K),ie=C(L,2);{var de=Ye=>{var U=pM();ae("click",U,()=>X(d(G).id)),re(Ye,U)};Ke(ie,Ye=>{i()?.id!==d(G).id&&Ye(de)})}var fe=C(ie,2),Ie=C(Ee,2);{var je=Ye=>{var U=mM(),Ue=z(U);Of(Ue,{get skin(){return d(b)},get cape(){return d(S)},width:110,height:150});var V=C(Ue,2),Se=z(V),Ne=C(z(Se)),rt=pe(Ne,!0),at=C(Se,2),ht=C(z(at)),Wt=pe(ht,!0),ve=C(at,2),ze=z(ve),Ze=C(ze,2);Fe(()=>{me(rt,d(b)||"default (Steve/Alex)"),me(Wt,d(S)||"none"),ze.disabled=d(o)}),ae("click",Se,()=>j("skin")),ae("click",at,()=>j("cape")),ae("click",ze,W),ae("click",Ze,ue),re(Ye,U)};Ke(Ie,Ye=>{d(E)===d(G).id&&d(q)&&Ye(je)})}Fe((Ye,U)=>{Mt(ye,1,`border-b border-(--border) px-4 py-2.5 ${i()?.id===d(G).id?"bg-(--accent)/10":""}`),me(Pe,Ye),me(v,d(G).username),me(ne,U),me(Me,d(G).uuid)},[()=>d(G).username[0]?.toUpperCase(),()=>ge(d(G))]),ae("click",L,()=>Y(d(G))),ae("click",fe,()=>Q(d(G).id)),re(F,ye)},F=>{var G=vM();re(F,G)}),ae("click",ee,F=>{F.target===F.currentTarget&&e.onclose?.()}),ae("click",Oe,()=>e.onclose?.()),re(n,ee),wn()}Vn(["click"]);var bM=_e('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><span class="text-3xl">👤</span> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),yM=_e('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),MM=_e('<p class="text-center text-[11px] text-red-400"> </p>'),SM=_e("<option> </option>"),EM=_e("<option>No instances yet</option>"),wM=_e('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),TM=_e('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),AM=_e('<p class="mt-2 text-[11px] text-red-400"> </p>'),RM=_e('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer">▶ Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),CM=_e('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function PM(n,e){En(e,!0);let t=dt(e,"instances",19,()=>[]),i=dt(e,"active",3,null),r=dt(e,"gameRunning",3,!1),a=dt(e,"status",3,"Ready");function o(Z,k){const X=window.__TAURI__?.core;return X?X.invoke(Z,k):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let l=xe(Rt(p())),c=xe(""),u=xe(""),f=xe("");function p(){try{const Z=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray(Z)?Z:[]}catch{return[]}}function g(){localStorage.setItem(s,JSON.stringify(d(l)))}function _(Z){Z.preventDefault(),y(f,"");const k=d(u).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(k)){y(f,"Address must be a hostname (optionally host:port).");return}y(l,[...d(l),{name:d(c).trim()||k.split(":")[0],address:k}],!0),g(),y(c,""),y(u,"")}function x(Z){y(l,d(l).filter((k,X)=>X!==Z),!0),g()}let m=xe("");In(()=>{d(m)&&t().some(Z=>Z.id===d(m))||y(m,t()[0]?.id??"",!0)});const h=Ft(()=>t().find(Z=>Z.id===d(m))?.name??"no instance selected");function E(Z){!d(m)||r()||e.onlaunch?.(d(m),Z.address)}let b=xe(""),S=xe(!1);async function w(Z){const k=window.__TAURI__?.dialog?.open;if(!k){y(b,"File picker unavailable in this build.");return}try{const X=await k({multiple:!1,title:Z==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!X)return;y(S,!0),y(b,""),await o("set_account_textures",{id:i().id,skin:Z==="skin"?String(X):null,cape:Z==="cape"?String(X):null}),await e.onrefresh?.()}catch(X){y(b,String(X),!0)}finally{y(S,!1)}}async function D(){if(i())try{y(S,!0),await o("set_account_textures",{id:i().id,skin:null,cape:null}),await e.onrefresh?.()}catch(Z){y(b,String(Z),!0)}finally{y(S,!1)}}function R(Z){return{offline:"Offline",microsoft:"Microsoft"}[Z.account_type.type]??"Yggdrasil"}var N=CM(),M=z(N);{var A=Z=>{var k=bM(),X=C(z(k),6);ae("click",X,()=>e.onopenaccounts?.()),re(Z,k)},se=Z=>{var k=RM(),X=z(k),Q=z(X);Of(Q,{get skin(){return i().skin},get cape(){return i().cape},width:220,height:300});var Y=C(Q,2),j=z(Y),W=pe(j,!0),ue=C(j,2),ge=pe(ue,!0),q=C(Y,2),ee=z(q),Te=C(ee,2),we=C(Te,2);{var Oe=v=>{var I=yM();Fe(()=>I.disabled=d(S)),ae("click",I,D),re(v,I)};Ke(we,v=>{(i().cape||i().skin)&&v(Oe)})}var Be=C(q,2);{var Ve=v=>{var I=MM(),ne=pe(I,!0);Fe(()=>me(ne,d(b))),re(v,I)};Ke(Be,v=>{d(b)&&v(Ve)})}var We=C(X,2),te=z(We),De=C(z(te),2),Le=z(De);wt(Le,21,t,v=>v.id,(v,I)=>{var ne=SM(),le=pe(ne,!0),he={};Fe(()=>{me(le,d(I).name),he!==(he=d(I).id)&&(ne.value=(ne.__value=he)??"")}),re(v,ne)},v=>{var I=EM();I.value=I.__value="",re(v,I)}),Ws(Le);var O=C(Le,2),Ae=C(De,2),be=pe(Ae,!0),F=C(Ae,2),G=pe(F,!0),ye=C(te,2),Ee=C(z(ye),2);wt(Ee,19,()=>d(l),v=>v.address,(v,I,ne)=>{var le=wM(),he=z(le),ke=z(he),Me=pe(ke,!0),K=C(ke,2),L=pe(K,!0),ie=C(he,2),de=C(ie,2);Fe(()=>{me(Me,d(I).name),me(L,d(I).address),ie.disabled=!d(m)||r(),Qe(ie,"title",`Join ${d(I).address} with ${d(h)}`)}),ae("click",ie,()=>E(d(I))),ae("click",de,()=>x(d(ne))),re(v,le)},v=>{var I=TM();re(v,I)});var Ce=C(Ee,2),Pe=z(Ce),Ge=C(Pe,2),Xe=C(Ce,2);{var T=v=>{var I=AM(),ne=pe(I,!0);Fe(()=>me(ne,d(f))),re(v,I)};Ke(Xe,v=>{d(f)&&v(T)})}Fe(v=>{me(W,i().username),me(ge,v),ee.disabled=d(S),Te.disabled=d(S),Ae.disabled=!d(m)||r(),me(be,r()?"GAME RUNNING…":"LAUNCH GAME"),me(G,r()?a():d(h))},[()=>R(i())]),ae("click",ee,()=>w("skin")),ae("click",Te,()=>w("cape")),Xs(Le,()=>d(m),v=>y(m,v)),ae("click",O,()=>e.onopenconsole?.()),ae("click",Ae,()=>e.onlaunch?.(d(m),null)),$i("submit",Ce,_),Ot(Pe,()=>d(c),v=>y(c,v)),Ot(Ge,()=>d(u),v=>y(u,v)),re(Z,k)};Ke(M,Z=>{i()?Z(se,-1):Z(A)})}re(n,N),wn()}Vn(["click"]);var LM=_e('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),DM=_e('<span class="truncate text-[13px]"> </span>'),IM=_e('<button><span class="w-5 shrink-0 text-center text-[15px] leading-none"> </span> <!></button>'),UM=_e('<span class="truncate text-[13px]">Add Instance</span>'),NM=_e('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),OM=_e('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),FM=_e('<button role="tab"> </button>'),kM=_e('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),BM=_e('<div class="mb-4 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">📂 Instance Folder</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance">⤓ Install .mrpack</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">⚙ Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"> </button></div> <!>',1),zM=_e('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),GM=_e('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),HM=_e('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),VM=_e("<div> </div>"),WM=_e('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),XM=_e('<p class="mt-2 text-[12px] text-red-400"> </p>'),jM=_e('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),YM=_e('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),qM=_e('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root">♻ Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),KM=_e('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="w-5 shrink-0 text-center text-[15px] leading-none">＋</span> <!></button></div> <button><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-[11px] font-bold text-(--accent)"><!></span> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!></div>');function ZM(n,e){En(e,!0);let t=xe("…"),i=xe("instances"),r=xe(Rt(Yd(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));In(()=>{Jm(d(r)),localStorage.setItem("twilight-theme",d(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:ss(d(r))?"dark":"light"}).catch(()=>{})}),Vm();let a=xe("Ready"),o=xe(!1),s=xe(Rt(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));In(()=>{localStorage.setItem("twilight-mode",d(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:d(s)}).catch(()=>{})});const l=[{id:"instances",label:"Instances",icon:"▦"},{id:"worlds",label:"Servers & P2P",icon:"⌗"},{id:"downloads",label:"Downloads",icon:"⤓"},{id:"settings",label:"Settings",icon:"⚙"}],c={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]};let u=xe(Rt([])),f=xe(null),p=xe(!1),g=xe(Rt([])),_=xe(!1),x=xe(""),m=xe(!1),h=xe(!1),E=xe(""),b=xe(!1),S=xe(""),w=xe(null),D=Ft(()=>d(w)?"edit":d(i)),R=xe(null),N=xe(null),M=xe(""),A=xe(""),se=xe(!1),Z=xe(""),k=xe(null),X=xe(""),Q=xe(0),Y=xe(0),j=xe("");async function W(B,Re){return window.__TAURI__.core.invoke(B,Re)}function ue(){y(r,ss(d(r))?"twilight-light":"twilight-dark",!0)}async function ge(){y(_,!0),y(x,"");try{y(g,await W("discover_java_installations"),!0)}catch(B){y(x,String(B),!0)}finally{y(_,!1)}}function q(){y(m,!0)}async function ee(){if(d(E).trim()){y(b,!0),y(S,"");try{const B=await W("install_modpack",{pathOrUrl:d(E).trim()});y(h,!1),y(E,""),await Ge(),B&&y(G,B,!0),y(a,"Modpack installed.")}catch(B){y(S,String(B),!0)}finally{y(b,!1)}}}let Te=xe(Rt([])),we=xe(!1),Oe=xe(!1),Be=xe(null);In(()=>{d(Te).length,d(Be)&&(d(Be).scrollTop=d(Be).scrollHeight)});function Ve(B){d(Te).push(B),d(Te).length>5e3&&d(Te).splice(0,d(Te).length-5e3)}function We(){y(Te,[],!0)}function te(B){return B.stream==="stderr"||B.line.includes("/ERROR]")?"text-rose-400":B.line.includes("/WARN]")?"text-(--accent-star)":B.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function De(){const B=d(Te).map(Re=>Re.line).join(`
`);try{await navigator.clipboard.writeText(B)}catch{const Re=document.createElement("textarea");Re.value=B,document.body.append(Re),Re.select(),document.execCommand("copy"),Re.remove()}}async function Le(){if(d(Oe))try{await W("kill_instance"),Ve({stream:"stdout",line:"kill requested"})}catch(B){Ve({stream:"stderr",line:String(B)})}}let O=xe(Rt([])),Ae=xe(""),be=xe(null),F=xe(""),G=xe(null),ye=xe(null),Ee=xe(""),Ce=xe(!1);function Pe(){const B=d(F).trim().toLowerCase();return B?d(O).filter(Re=>Re.name.toLowerCase().includes(B)||Re.minecraft_version.toLowerCase().includes(B)||Re.id.toLowerCase().includes(B)):d(O)}async function Ge(){try{y(O,await W("scan_instances"),!0),y(Ae,"")}catch(B){y(Ae,String(B),!0)}}function Xe(B){y(G,B,!0)}async function T(B,Re=null){if(d(Oe))return;const Je=d(O).find(vt=>vt.id===B),gt=Je?Je.name:B;y(Oe,!0),y(a,Re?`Running ${gt} → ${Re}…`:`Running ${gt}…`,!0),y(we,!0),Ve({stream:"stdout",line:`launching ${gt}…`});try{const vt=await W("launch_instance",{instanceId:B,server:Re});Ve({stream:"stdout",line:`launcher reports exit code ${vt}`}),await Ge(),y(a,"Ready")}catch(vt){console.error("Launch failed:",vt),Ve({stream:"stderr",line:`[ERROR] Launch failed: ${vt}`}),y(a,"Launch failed")}finally{y(Oe,!1),d(a)!=="Launch failed"&&y(a,"Ready")}}function v(){d(N)&&W("open_path",{path:d(N).instances_dir}).catch(B=>y(a,String(B),!0))}function I(B){d(N)&&W("open_path",{path:[d(N).instances_dir.replace(/\\/g,"/"),B].join("/")}).catch(Re=>y(a,String(Re),!0))}function ne(B){y(Ee,""),y(ye,B,!0)}async function le(B){if(!(!d(ye)||d(Ce))){y(Ce,!0),y(Ee,"");try{await W("delete_instance",{instanceId:d(ye),toTrash:B}),d(G)===d(ye)&&y(G,null),y(ye,null),await Ge(),y(a,B?"Instance moved to trash.":"Instance deleted.",!0)}catch(Re){y(Ee,String(Re),!0)}finally{y(Ce,!1)}}}const he=Ft(()=>[...new Set(d(O).map(B=>B.group).filter(Boolean))].sort((B,Re)=>B.localeCompare(Re)));async function ke(B){if(!d(fe))return;const Re=d(fe).name;try{await W("set_instance_group",{instanceId:d(fe).id,group:B}),await Ge(),y(a,B?`Moved ${Re} to ${B}.`:`${Re} is ungrouped.`,!0)}catch(Je){y(a,String(Je),!0)}}async function Me(){if(!d(fe))return;const B=d(fe).name;try{const Re=await W("duplicate_instance",{instanceId:d(fe).id});await Ge(),y(G,Re.id,!0),y(a,`Copied ${B}.`)}catch(Re){y(a,String(Re),!0)}}async function K(){if(!d(fe))return;const B=window.__TAURI__?.dialog?.save;if(!B){y(a,"File picker unavailable in this build.");return}try{const Re=await B({title:"Export instance",defaultPath:`${d(fe).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Re)return;const Je=await W("export_instance_zip",{instanceId:d(fe).id,destPath:Re});y(a,`Exported to ${Je}.`)}catch(Re){y(a,String(Re),!0)}}async function L(){if(d(fe))try{const B=await W("create_desktop_shortcut",{instanceId:d(fe).id});y(a,`Shortcut created: ${B}`)}catch(B){y(a,String(B),!0)}}async function ie(B,Re){y(m,!1),await Ge(),B?.id&&y(G,B.id,!0),y(a,Re||`Instance ${B?.name??""} created.`,!0)}function de(B){y(w,B,!0)}const fe=Ft(()=>d(O).find(B=>B.id===d(G))??null);let Ie=xe(null),je=0;In(()=>{const B=d(fe);d(w);const Re=++je;y(Ie,null),B&&W("list_instance_mods",{instanceId:B.id}).then(Je=>{Re===je&&y(Ie,Je.length,!0)}).catch(()=>{Re===je&&y(Ie,null)})});async function Ye(){try{y(k,await W("get_java_prefs"),!0),y(X,d(k).java_path??"",!0),y(Q,d(k).min_memory_mb,!0),y(Y,d(k).max_memory_mb,!0),y(j,""),d(g).length===0&&await ge()}catch{}}async function U(){y(j,"");try{await W("set_java_prefs",{javaPath:d(X).trim()||null,minMemoryMb:Number(d(Q))||0,maxMemoryMb:Number(d(Y))||0}),y(j,"Java settings saved.")}catch(B){y(j,String(B),!0)}}async function Ue(){y(se,!0);try{y(N,await W("get_storage"),!0),y(M,d(N).is_default_shared?"":d(N).shared_dir,!0),y(A,d(N).is_default_instances?"":d(N).instances_dir,!0)}catch(B){y(Z,String(B),!0)}finally{y(se,!1)}}async function V(){y(se,!0),y(Z,"");try{await W("set_shared_dir",{path:d(M).trim()||null}),y(N,await W("get_storage"),!0),y(M,d(N).is_default_shared?"":d(N).shared_dir,!0),y(A,d(N).is_default_instances?"":d(N).instances_dir,!0),y(Z,"Storage updated."),await Ge()}catch(B){y(Z,String(B),!0)}finally{y(se,!1)}}async function Se(){y(M,""),await V()}async function Ne(){y(se,!0),y(Z,"");try{await W("set_instances_dir",{path:d(A).trim()||null}),y(N,await W("get_storage"),!0),y(A,d(N).is_default_instances?"":d(N).instances_dir,!0),y(Z,"Storage updated."),await Ge(),d(G)&&!d(O).some(B=>B.id===d(G))&&y(G,null)}catch(B){y(Z,String(B),!0)}finally{y(se,!1)}}async function rt(){y(A,""),await Ne()}async function at(){y(se,!0),y(Z,"");try{await W("clean_staging"),y(Z,"Staging cleaned.")}catch(B){y(Z,String(B),!0)}finally{y(se,!1)}}async function ht(){try{y(u,await W("get_accounts"),!0),y(f,await W("get_active_account"),!0)}catch{}}function Wt(B){return{offline:"Offline",microsoft:"Microsoft"}[B.account_type.type]??"Yggdrasil"}er(()=>{const B=[],Re=Je=>{if(Je.key==="Escape"){const jt=lc();if(jt){jt();return}d(be)?y(be,null):d(ye)?(y(ye,null),y(Ee,"")):d(w)?y(w,null):d(G)?y(G,null):d(p)?y(p,!1):d(h)?y(h,!1):d(we)&&y(we,!1);return}if(d(be)||d(ye)||d(p)||d(h)||d(w)||d(we)||lc()||Je.target?.closest?.("input, textarea, select, [contenteditable]"))return;const vt=Pe();if(!vt.length)return;const kt=vt.findIndex(jt=>jt.id===d(G));let Bt=null;if(Je.key==="ArrowDown"||Je.key==="ArrowRight")Bt=kt+1;else if(Je.key==="ArrowUp"||Je.key==="ArrowLeft")Bt=kt<0?0:kt-1;else if(Je.key==="Enter"&&kt>=0&&document.activeElement===document.body){Je.preventDefault(),T(vt[kt].id);return}Bt!=null&&vt[Bt]&&(Je.preventDefault(),y(G,vt[Bt].id,!0))};return window.addEventListener("keydown",Re),(async()=>{try{y(t,await W("get_version"),!0)}catch{y(t,"dev")}try{B.push(await window.__TAURI__.event.listen("launch-log",Je=>Ve(Je.payload))),B.push(await window.__TAURI__.event.listen("tauri://drag-drop",Je=>{const gt=Je.payload?.paths?.[0];gt&&gt.endsWith(".mrpack")&&(d(h)?y(E,gt,!0):y(R,gt,!0))}))}catch{}await ht(),await Ge(),await Ue();try{const Je=await W("get_startup_launch");Je&&d(O).some(gt=>gt.id===Je)&&T(Je)}catch{}})(),()=>B.forEach(Je=>Je())});var ve=KM(),ze=z(ve),Ze=z(ze),mt=C(z(Ze),2);{var bt=B=>{var Re=LM();re(B,Re)};Ke(mt,B=>{d(o)&&B(bt)})}var an=C(Ze,2),It=z(an);wt(It,17,()=>l,B=>B.id,(B,Re)=>{var Je=IM(),gt=z(Je),vt=pe(gt,!0),kt=C(gt,2);{var Bt=jt=>{var bn=DM(),jn=pe(bn,!0);Fe(()=>me(jn,d(Re).label)),re(jt,bn)};Ke(kt,jt=>{d(o)&&jt(Bt)})}Fe(()=>{Mt(Je,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${d(o)?"":"justify-center"} ${d(i)===d(Re).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Qe(Je,"title",d(Re).label),me(vt,d(Re).icon)}),ae("click",Je,()=>{y(i,d(Re).id,!0),y(w,null),y(s,"launcher"),d(Re).id==="settings"&&(Ye(),d(N)||Ue())}),re(B,Je)});var Xt=C(It,2),xn=C(z(Xt),2);{var ri=B=>{var Re=UM();re(B,Re)};Ke(xn,B=>{d(o)&&B(ri)})}var dn=C(an,2),Wn=z(dn),ai=z(Wn);{var P=B=>{var Re=Ei();Fe(Je=>me(Re,Je),[()=>d(f).username[0]?.toUpperCase()]),re(B,Re)},J=B=>{var Re=Ei("?");re(B,Re)};Ke(ai,B=>{d(f)?B(P):B(J,-1)})}var oe=C(Wn,2);{var $=B=>{var Re=NM(),Je=z(Re),gt=pe(Je,!0),vt=C(Je,2),kt=pe(vt,!0);Fe(Bt=>{me(gt,d(f)?d(f).username:"Add account"),me(kt,Bt)},[()=>d(f)?Wt(d(f)):"Offline"]),re(B,Re)};Ke(oe,B=>{d(o)&&B($)})}var ce=C(dn,2),qe=pe(ce,!0),et=C(ze,2),tt=z(et),nt=z(tt),ct=z(nt);{var it=B=>{var Re=OM(),Je=Pt(Re),gt=C(Je,2),vt=pe(gt,!0);Fe(()=>{Qe(gt,"title",d(w)?.name),me(vt,d(w)?.name)}),ae("click",Je,()=>y(w,null)),re(B,Re)},st=B=>{var Re=kM(),Je=Pt(Re),gt=pe(Je),vt=C(Je,4);wt(vt,20,()=>[["launcher","Launcher"],["client","Client"]],al,(kt,Bt)=>{var jt=Ft(()=>nd(Bt,2));let bn=()=>d(jt)[0],jn=()=>d(jt)[1];var Tn=FM(),An=pe(Tn,!0);Fe(()=>{Mt(Tn,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${d(s)===bn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Qe(Tn,"aria-selected",d(s)===bn()),me(An,jn())}),ae("click",Tn,()=>y(s,bn(),!0)),re(kt,Tn)}),Fe(()=>me(gt,`TwilightMC Bolide (alpha-v${d(t)??""})`)),re(B,Re)};Ke(ct,B=>{d(D)==="edit"?B(it):B(st,-1)})}var Tt=C(nt,2),Lt=pe(Tt,!0),fn=C(tt,2),Xn=z(fn);{var Ut=B=>{PM(B,{get instances(){return d(O)},get active(){return d(f)},get gameRunning(){return d(Oe)},get status(){return d(a)},onlaunch:T,onopenconsole:()=>y(we,!0),onrefresh:ht,onopenaccounts:()=>y(p,!0)})},ut=B=>{am(B,{get instance(){return d(w)},get storage(){return d(N)},onback:()=>y(w,null),onopenconsole:()=>y(we,!0)})},_a=B=>{gg(B,{get version(){return d(t)},get storage(){return d(N)},get runtimes(){return d(g)},get scanning(){return d(_)},get javaError(){return d(x)},get storageBusy(){return d(se)},get storageMsg(){return d(Z)},get javaMsg(){return d(j)},get gameRunning(){return d(Oe)},onback:()=>y(i,"instances"),onscanjava:ge,onsaveprefs:U,onsaveshared:V,onresetshared:Se,onsaveinstances:Ne,onresetinstances:rt,oncleanstaging:at,onopenurl:Re=>W("open_path",{path:Re}).catch(Je=>y(a,String(Je),!0)),get theme(){return d(r)},set theme(Re){y(r,Re,!0)},get javaPath(){return d(X)},set javaPath(Re){y(X,Re,!0)},get minMem(){return d(Q)},set minMem(Re){y(Q,Re,!0)},get maxMem(){return d(Y)},set maxMem(Re){y(Y,Re,!0)},get sharedInput(){return d(M)},set sharedInput(Re){y(M,Re,!0)},get instancesInput(){return d(A)},set instancesInput(Re){y(A,Re,!0)}})},Nt=B=>{var Re=BM(),Je=Pt(Re),gt=z(Je),vt=C(gt,2),kt=C(vt,2),Bt=C(kt,2),jt=C(Bt,2),bn=C(jt,4),jn=pe(bn,!0),Tn=C(Je,2);{let An=Ft(Pe);zp(Tn,{get instances(){return d(An)},get error(){return d(Ae)},get query(){return d(F)},get selectedId(){return d(G)},get gameRunning(){return d(Oe)},get menuFor(){return d(be)},onselect:Xe,onplay:T,ontogglemenu:pn=>y(be,d(be)===pn?null:pn,!0),onedit:de,onopenfolder:I,onviewlogs:()=>y(we,!0),ondelete:ne,onclosemenu:()=>y(be,null),onadd:q})}Fe((An,pn)=>{vt.disabled=!d(N),Qe(vt,"title",d(N)?d(N).instances_dir:""),Qe(bn,"title",An),me(jn,pn)},[()=>ss(d(r))?"Twilight Light":"Twilight Dark",()=>ss(d(r))?"☀":"☾"]),ae("click",gt,q),ae("click",vt,v),ae("click",kt,()=>y(h,!0)),ae("click",Bt,()=>{y(i,"settings"),Ye(),d(N)||Ue()}),Ot(jt,()=>d(F),An=>y(F,An)),ae("click",bn,ue),re(B,Re)},pi=B=>{var Re=zM(),Je=Pt(Re),gt=pe(Je,!0),vt=C(Je,2),kt=pe(vt,!0);Fe(()=>{me(gt,c[d(i)][0]),me(kt,c[d(i)][1])}),re(B,Re)};Ke(Xn,B=>{d(s)==="client"?B(Ut):d(D)==="edit"&&d(w)?B(ut,1):d(i)==="settings"?B(_a,2):d(i)==="instances"?B(Nt,3):B(pi,-1)})}var xa=C(fn,2),Fi=z(xa),ki=z(Fi),Qt=z(ki),mi=C(Qt,4);{var ba=B=>{var Re=GM();re(B,Re)};Ke(mi,B=>{d(Oe)&&B(ba)})}var hn=C(ki,2),tr=z(hn),ya=C(tr,2),Sr=C(ya,2),Ff=C(Sr,2);{var kf=B=>{var Re=HM();ae("click",Re,()=>y(we,!1)),re(B,Re)};Ke(Ff,B=>{d(we)&&B(kf)})}var Vl=C(Fi,2);wt(Vl,21,()=>d(Te),al,(B,Re)=>{var Je=VM(),gt=pe(Je,!0);Fe(vt=>{Mt(Je,1,`whitespace-pre-wrap break-all ${vt??""}`),me(gt,d(Re).line)},[()=>te(d(Re))]),re(B,Je)},B=>{var Re=WM();re(B,Re)}),Wd(Vl,B=>y(Be,B),()=>d(Be));var Wl=C(et,2);{var Bf=B=>{km(B,{get instance(){return d(fe)},get storage(){return d(N)},get gameRunning(){return d(Oe)},get modsCount(){return d(Ie)},get groups(){return d(he)},onlaunch:()=>T(d(fe).id),onkill:Le,onedit:()=>de(d(fe)),onchangegroup:ke,onopenfolder:()=>I(d(fe).id),onexport:K,oncopy:Me,ondelete:()=>ne(d(fe).id),onshortcut:L})};Ke(Wl,B=>{d(D)==="instances"&&d(fe)&&B(Bf)})}var Xl=C(Wl,2);{var zf=B=>{fm(B,{get path(){return d(R)},onclose:()=>y(R,null),oninstalled:async Re=>{y(R,null),await Ge(),y(G,Re,!0),y(a,"Modpack installed.")}})};Ke(Xl,B=>{d(R)&&B(zf)})}var jl=C(Xl,2);{var Gf=B=>{xM(B,{get accounts(){return d(u)},get active(){return d(f)},onclose:()=>y(p,!1),onrefresh:ht})};Ke(jl,B=>{d(p)&&B(Gf)})}var Yl=C(jl,2);{var Hf=B=>{Dm(B,{get groups(){return d(he)},onclose:()=>y(m,!1),oncreated:ie})};Ke(Yl,B=>{d(m)&&B(Hf)})}var ql=C(Yl,2);{var Vf=B=>{var Re=jM(),Je=z(Re),gt=z(Je),vt=C(z(gt),2),kt=C(gt,2),Bt=z(kt),jt=C(Bt,2),bn=C(jt,2);{var jn=en=>{var Ma=XM(),jf=pe(Ma,!0);Fe(()=>me(jf,d(S))),re(en,Ma)};Ke(bn,en=>{d(S)&&en(jn)})}var Tn=C(kt,2),An=z(Tn),pn=C(An,2),ns=pe(pn,!0);Fe(en=>{pn.disabled=en,me(ns,d(b)?"Installing…":"Install .mrpack")},[()=>d(b)||!d(E).trim()]),ae("click",Re,en=>{en.target===en.currentTarget&&!d(b)&&y(h,!1)}),ae("click",vt,()=>y(h,!1)),$i("dragover",Bt,en=>en.preventDefault()),$i("drop",Bt,en=>{en.preventDefault();const Ma=en.dataTransfer?.files?.[0]?.path;Ma&&y(E,Ma,!0)}),Ot(jt,()=>d(E),en=>y(E,en)),ae("click",An,()=>y(h,!1)),ae("click",pn,ee),re(B,Re)};Ke(ql,B=>{d(h)&&B(Vf)})}var Wf=C(ql,2);{var Xf=B=>{var Re=qM(),Je=z(Re),gt=C(z(Je),2),vt=C(z(gt)),kt=pe(vt,!0),Bt=C(gt,2);{var jt=pn=>{var ns=YM(),en=pe(ns,!0);Fe(()=>me(en,d(Ee))),re(pn,ns)};Ke(Bt,pn=>{d(Ee)&&pn(jt)})}var bn=C(Bt,2),jn=z(bn),Tn=C(jn,2),An=C(Tn,2);Fe(()=>{me(kt,d(ye)),jn.disabled=d(Ce),Tn.disabled=d(Ce),An.disabled=d(Ce)}),ae("click",Re,pn=>{pn.target===pn.currentTarget&&!d(Ce)&&y(ye,null)}),ae("click",jn,()=>y(ye,null)),ae("click",Tn,()=>le(!0)),ae("click",An,()=>le(!1)),re(B,Re)};Ke(Wf,B=>{d(ye)&&B(Xf)})}Fe(()=>{Mt(ze,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${d(o)?"w-60":"w-16"}`),Mt(Xt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${d(o)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),Mt(dn,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${d(o)?"":"justify-center"}`),Qe(dn,"title",d(f)?d(f).username:"Add account"),Mt(ce,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${d(o)?"":"opacity-0 group-hover/nav:opacity-100"}`),me(qe,d(o)?"«":"»"),me(Lt,d(a)),Mt(xa,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${d(we)?"h-48":"h-10"}`),Qe(ki,"title",d(we)?"Collapse console":"Expand console"),Mt(Qt,1,`h-2 w-2 shrink-0 rounded-full ${d(Oe)?"animate-pulse bg-green-500":"bg-(--border)"}`),tr.disabled=!d(Te).length,ya.disabled=!d(Te).length,Sr.disabled=!d(Oe)}),ae("dblclick",Ze,()=>y(o,!d(o))),ae("click",Xt,q),ae("click",dn,()=>y(p,!0)),ae("click",ce,()=>y(o,!d(o))),ae("click",ki,()=>y(we,!d(we))),ae("click",tr,B=>{B.stopPropagation(),We()}),ae("click",ya,B=>{B.stopPropagation(),De()}),ae("click",Sr,B=>{B.stopPropagation(),Le()}),re(n,ve),wn()}Vn(["dblclick","click"]);pp(ZM,{target:document.getElementById("app")});
