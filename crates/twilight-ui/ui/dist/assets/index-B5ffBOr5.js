(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Qu=!1;var Qs=Array.isArray,jf=Array.prototype.indexOf,Ga=Array.prototype.includes,$s=Array.from,$u=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Xf=Object.getOwnPropertyDescriptors,Yf=Object.prototype,qf=Array.prototype,ed=Object.getPrototypeOf,Zl=Object.isExtensible;const Kf=()=>{};function Zf(n){for(var e=0;e<n.length;e++)n[e]()}function td(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}function nd(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const i of n)if(t.push(i),t.length===e)break;return t}const pn=2,aa=4,eo=8,id=1<<24,Qn=16,ii=32,er=64,$o=128,Ml=256,ti=512,Qt=1024,Ct=2048,Dn=4096,xn=8192,sn=16384,ma=32768,Ha=1<<25,sa=65536,zs=1<<17,Jf=1<<18,ga=1<<19,Qf=1<<20,hi=1<<25,Gs=1<<21,$r=1<<22,Zi=1<<23,gr=Symbol("$state"),rd=Symbol("component"),$f=Symbol("legacy props"),eh=Symbol(""),ad=Symbol("attributes"),el=Symbol("class"),tl=Symbol("style"),nl=Symbol("text"),Ns=Symbol("form reset"),Qa=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},th=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),nh=1,ih=2,sd=4,rh=8,ah=16,sh=1,oh=4,lh=8,ch=16,uh=1,dh=2,od={},Jt=Symbol("uninitialized"),fh="http://www.w3.org/1999/xhtml";function hh(){console.warn("https://svelte.dev/e/derived_inert")}function ph(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function mh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ld(n){return n===this.v}function gh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function cd(n){return!gh(n,this.v)}function ud(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function vh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function _h(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function xh(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function bh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yh(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Mh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Sh(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Eh(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function wh(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Th(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ah(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Rh=!1,on=null;function oa(n){on=n}function bn(n,e=!1,t){on={p:on,i:!1,c:null,e:null,s:n,x:null,r:xt,l:null}}function yn(n){var e=on,t=e.e;if(t!==null){e.e=null;for(var i of t)Cd(i)}return e.i=!0,on=e.p,Sl(n)}function Sl(n={}){return $u(n,rd,{value:!0}),n}function dd(){return!0}let hr=[];function fd(){var n=hr;hr=[],Zf(n)}function Pi(n){if(hr.length===0&&!Fa){var e=hr;queueMicrotask(()=>{e===hr&&fd()})}hr.push(n)}function Ch(){for(;hr.length>0;)fd()}const Ph=-7169;function Wt(n,e){n.f=n.f&Ph|e}function El(n){(n.f&ti)!==0||n.deps===null?Wt(n,Qt):Wt(n,Dn)}function hd(n,e){(n.f&Ct)!==0?e.set(n,Ct):(n.f&Dn)!==0&&e.get(n)!==Ct&&e.set(n,Dn),Wt(n,Qt)}let Jl=!1;function Lh(){Jl||(Jl=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e[Ns]?.()})},{capture:!0}))}function va(n){var e=mt,t=xt;Gn(null),gi(null);try{return n()}finally{Gn(e),gi(t)}}function pd(n,e,t,i=t){n.addEventListener(e,()=>va(t));const r=n[Ns];r?n[Ns]=()=>{r(),i(!0)}:n[Ns]=()=>i(!0),Lh()}function Dh(n,e,t,i){const r=Va;var a=n.filter(g=>!g.settled),o=e.map(r);if(t.length===0&&a.length===0){i(o);return}var s=xt,l=Ih(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function d(g){if((s.f&sn)===0){l();try{i([...o,...g])}catch(v){fi(v,s)}Hs()}}var f=md();if(t.length===0){c.then(()=>d([])).finally(f);return}function p(){Promise.all(t.map(g=>Uh(g))).then(d).catch(g=>fi(g,s)).finally(f)}c?c.then(()=>{if((s.f&sn)!==0){f();return}l(),p(),Hs()}):p()}function Ih(){var n=xt,e=mt,t=on,i=ct;return function(a=!0){gi(n),Gn(e),oa(t),a&&(n.f&sn)===0&&(i?.activate(),i?.apply())}}function Hs(n=!0){gi(null),Gn(null),oa(null),n&&ct?.deactivate()}function md(){var n=xt,e=n.b,t=ct,i=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(i,n),()=>{e?.update_pending_count(-1,t),t.decrement(i,n)}}function Va(n){var e=pn|Ct;return xt!==null&&(xt.f|=ga),{ctx:on,deps:null,effects:null,equals:ld,f:e,fn:n,reactions:null,rv:0,v:Jt,wv:0,parent:xt,ac:null}}const Ia=Symbol("obsolete");function Uh(n,e,t){let i=xt;i===null&&vh();var r=void 0,a=Sr(Jt),o=!mt,s=new Set;return Kh(()=>{var l=xt,c=td();r=c.promise;try{Promise.resolve(n()).then(c.resolve,g=>{g!==Qa&&c.reject(g)}).finally(Hs)}catch(g){c.reject(g),Hs()}var d=ct;if(o){if((l.f&ma)!==0)var f=md();if(i.b?.is_rendered())d.async_deriveds.get(l)?.reject(Ia);else for(const g of s.values())g.reject(Ia);s.add(c),d.async_deriveds.set(l,c)}const p=(g,v=void 0)=>{f?.(),s.delete(c),v!==Ia&&(d.activate(),v?(a.f|=Zi,la(a,v)):((a.f&Zi)!==0&&(a.f^=Zi),la(a,g)),d.deactivate())};c.promise.then(p,g=>p(null,g||"unknown"))}),Cl(()=>{for(const l of s)l.reject(Ia)}),new Promise(l=>{function c(d){function f(){d===r?l(a):c(r)}d.then(f,f)}c(r)})}function wt(n){const e=Va(n);return Nd(e),e}function gd(n){const e=Va(n);return e.equals=cd,e}function Nh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Tn(e[t])}}function wl(n){var e,t=xt,i=n.parent;if(!Fi&&i!==null&&n.v!==Jt&&(i.f&(sn|xn))!==0)return hh(),n.v;gi(i);try{Nh(n),e=Bd(n)}finally{gi(t)}return e}function vd(n){var e=wl(n);if(!n.equals(e)&&(n.wv=Fd(),(!ct?.is_fork||n.deps===null)&&(ct!==null?(ct.capture(n,e,!0),ea?.capture(n,e,!0)):n.v=e,n.deps===null))){Wt(n,Qt);return}Fi||($n!==null?(Rl()||ct?.is_fork)&&$n.set(n,e):El(n))}function Oh(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&va(()=>{e.ac.abort(Qa),e.ac=null}),e.fn!==null&&(e.teardown=Kf),ja(e,0),Dl(e))}function _d(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&ca(e)}let uo=null,Ar=null,ct=null,ea=null,$n=null,il=null,Fa=!1,fo=!1,ka=null,Os=null;var Ql=0;let Fh=1;class tr{id=Fh++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Ar===null?uo=Ar=this:(Ar.next=this,this.prev=Ar),Ar=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#v(e))return!0;return!1}#v(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=this.#o.get(e);if(i){this.#o.delete(e);for(var r of i.d)Wt(r,Ct),t(r);for(r of i.m)Wt(r,Dn),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&sn)!==0||(a.f&(Ct|Dn))===0)){for(var t=a,i=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(er|ii))!==0){if((r&Qt)===0){i=!0;break}t.f^=Qt}}i||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,l]of this.#r)Wt(s,l),this.schedule(s);this.apply();for(var e=ka=[],t=[],i=Os=[];this.#i.length>0;){Ql++>1e3&&(this.#f(),Bh());for(const s of this.#u())try{this.#x(s,e,t)}catch(l){throw yd(s),this.#p()||this.discard(),l}}if(ct=null,i.length>0){var r=tr.ensure();for(const s of i)r.schedule(s)}if(ka=null,Os=null,this.#p()){this.#g(t),this.#g(e);for(const[s,l]of this.#o)bd(s,l);i.length>0&&ct.#m();return}const a=this.#M();if(a){this.#g(t),this.#g(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),ea=this,$l(t),$l(e),ea=null,this.#n?.resolve();var o=ct;this.#e===0&&(this.#i.length===0||o!==null)&&this.#f(),o!==null&&(pi.clear(),o.#m())}#x(e,t,i){e.f^=Qt;for(var r=e.first;r!==null;){var a=r.f,o=(a&(ii|er))!==0,s=o&&(a&Qt)!==0,l=s||(a&xn)!==0||this.#o.has(r);if(!l&&r.fn!==null){o?r.f^=Qt:(a&aa)!==0?t.push(r):es(r)&&((a&Qn)!==0&&this.add_dirty_reaction(r,Dn),ca(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#M(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,i]]of this.current)if(!i&&e.current.has(t))return!0;return!1}#d(e){for(const[i,r]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,r);for(const[i,r]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=i=>{var r=i.reactions;if(r!==null&&!((i.f&pn)!==0&&(i.f&(Ct|Dn))===0))for(const s of r){var a=s.f;if((a&pn)!==0)t(s);else{var o=s;a&($r|Qn)&&!this.async_deriveds.has(o)&&(this.#r.delete(o),Wt(o,Ct),this.schedule(o))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),e.#f(),ct=this,this.#m()}#g(e){for(var t=0;t<e.length;t+=1)hd(e[t],this.#r)}capture(e,t,i=!1){e.v!==Jt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Zi)===0&&(this.current.set(e,[t,i]),$n?.set(e,t)),this.is_fork||(e.v=t)}activate(){ct=this}deactivate(){ct=null,$n=null}flush(){try{fo=!0,ct=this,this.#m()}finally{Ql=0,il=null,ka=null,Os=null,fo=!1,ct=null,$n=null,pi.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Ia);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let f=uo;f!==null;f=f.next){var e=f.id<this.id,t=[];for(const[p,[g,v]]of this.current){if(f.current.has(p)){var i=f.current.get(p)[0];if(e&&g!==i)f.current.set(p,[g,v]);else continue}t.push(p)}if(e)for(const[p,g]of this.async_deriveds){const v=f.async_deriveds.get(p);v&&g.promise.then(v.resolve).catch(v.reject)}var r=[...f.current.keys()].filter(p=>!f.current.get(p)[1]);if(!(!f.started||r.length===0)){var a=r.filter(p=>!this.current.has(p));if(a.length===0)e&&f.discard();else if(t.length>0){if(e)for(const p of this.#h)f.unskip_effect(p,g=>{(g.f&(Qn|$r))!==0?f.schedule(g):f.#g([g])});f.activate();var o=new Set,s=new Map;for(var l of t)xd(l,a,o,s);s=new Map;var c=[...f.current].filter(([p,g])=>{const v=this.current.get(p);return v?v[0]!==g[0]||v[1]!==g[1]:!0}).map(([p])=>p);if(c.length>0)for(const p of this.#a)(p.f&(sn|xn|zs))===0&&Tl(p,c,s)&&((p.f&($r|Qn))!==0?(Wt(p,Ct),f.schedule(p)):f.add_dirty_reaction(p,Ct));if(f.#i.length>0&&!f.#c){f.apply();for(var d of f.#u())f.#x(d,[],[])}f.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let i=this.#s.get(t)??0;this.#s.set(t,i+1)}}decrement(e,t){if(this.#e-=1,e){let i=this.#s.get(t)??0;i===1?this.#s.delete(t):this.#s.set(t,i-1)}this.#c||(this.#c=!0,Pi(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,i]of e)this.add_dirty_reaction(t,i);e.clear()}add_dirty_reaction(e,t){(t===Ct||this.#r.get(e)!==Ct)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=td()).promise}static ensure(){if(ct===null){const e=ct=new tr;!fo&&!Fa&&Pi(()=>{e.started||e.flush()})}return ct}apply(){{$n=null;return}}schedule(e){if(il=e,e.b?.is_pending&&(e.f&(aa|eo|id))!==0&&(e.f&ma)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?uo=t:e.next=t,t===null?Ar=e:t.prev=e,this.linked=!1}}}function kh(n){var e=Fa,t=ea;ea=null,Fa=!0;try{for(var i;;){if(Ch(),ct===null)return i;ct.flush()}}finally{Fa=e,ea=t}}function Bh(){try{Mh()}catch(n){fi(n,il)}}let Ai=null;function $l(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(sn|xn))===0&&es(i)&&(Ai=new Set,ca(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Dd(i),Ai?.size>0)){pi.clear();for(const r of Ai){if((r.f&(sn|xn))!==0)continue;const a=[r];let o=r.parent;for(;o!==null;)Ai.has(o)&&(Ai.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const l=a[s];(l.f&(sn|xn))===0&&ca(l)}}Ai.clear()}}Ai=null}}function xd(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const a=r.f;(a&pn)!==0?xd(r,e,t,i):(a&($r|Qn))!==0&&(a&Ct)===0&&Tl(r,e,i)&&(Wt(r,Ct),Al(r))}}function Tl(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Ga.call(e,r))return!0;if((r.f&pn)!==0&&Tl(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Al(n){ct.schedule(n)}function bd(n,e){if(!((n.f&ii)!==0&&(n.f&Qt)!==0)){(n.f&Ct)!==0?e.d.push(n):(n.f&Dn)!==0&&e.m.push(n),Wt(n,Qt);for(var t=n.first;t!==null;)bd(t,e),t=t.next}}function yd(n){Wt(n,Qt);for(var e=n.first;e!==null;)yd(e),e=e.next}let Vs=new Set;const pi=new Map;let Md=!1;function Sr(n,e){var t={f:0,v:n,reactions:null,equals:ld,rv:0,wv:0};return t}function ge(n,e){const t=Sr(n);return Nd(t),t}function zh(n,e=!1,t=!0){const i=Sr(n);return e||(i.equals=cd),i}function y(n,e,t=!1){mt!==null&&(!ei||(mt.f&zs)!==0)&&dd()&&(mt.f&(pn|Qn|$r|zs))!==0&&(mi===null||!mi.has(n))&&Th();let i=t?Pt(e):e;return la(n,i,Os)}var dr=null,rl=0;function la(n,e,t=null){if(!n.equals(e)){Fi?pi.set(n,e):pi.has(n)||pi.set(n,n.v);var i=tr.ensure();if(i.capture(n,e),(n.f&pn)!==0){const r=n;(n.f&Ct)!==0&&wl(r),$n===null&&El(r)}n.wv=Fd(),dr=null,rl=0,Sd(n,Ct,t),dr=null,xt!==null&&(xt.f&Qt)!==0&&(xt.f&(ii|er))===0&&(On===null?Qh([n]):On.push(n)),!i.is_fork&&Vs.size>0&&!Md&&Gh()}return e}function Gh(){Md=!1;for(const n of Vs){(n.f&Qt)!==0&&Wt(n,Dn);let e;try{e=es(n)}catch{e=!0}e&&ca(n)}Vs.clear()}function Ba(n){y(n,n.v+1)}function Sd(n,e,t){var i=n.reactions;if(i!==null){var r=i.length;if(rl+=r,rl>1e5&&dr===null&&(dr=new Set),dr!==null){if(dr.has(n))return;dr.add(n)}for(var a=0;a<r;a++){var o=i[a],s=o.f,l=(s&Ct)===0;if(l&&Wt(o,e),(s&zs)!==0)Vs.add(o);else if((s&pn)!==0){var c=o;$n?.delete(c),Sd(c,Dn,t)}else if(l){var d=o;(s&Qn)!==0&&Ai!==null&&Ai.add(d),t!==null?t.push(d):Al(d)}}}}function Pt(n){if(typeof n!="object"||n===null||gr in n||rd in n)return n;const e=ed(n);if(e!==Yf&&e!==qf)return n;var t=new Map,i=Qs(n),r=ge(0),a=_r,o=s=>{if(_r===a)return s();var l=mt,c=_r;Gn(null),ic(a);var d=s();return Gn(l),ic(c),d};return i&&t.set("length",ge(n.length)),new Proxy(n,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Eh();var d=t.get(l);return d===void 0?o(()=>{var f=ge(c.value);return t.set(l,f),f}):y(d,c.value,!0),!0},deleteProperty(s,l){var c=t.get(l);if(c===void 0){if(l in s){const d=o(()=>ge(Jt));t.set(l,d),Ba(r)}}else y(c,Jt),Ba(r);return!0},get(s,l,c){if(l===gr)return n;var d=t.get(l),f=l in s;if(d===void 0&&(!f||Qr(s,l)?.writable)&&(d=o(()=>{var g=Pt(f?s[l]:Jt),v=ge(g);return v}),t.set(l,d)),d!==void 0){var p=u(d);return p===Jt?void 0:p}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){this.has?.(s,l);var c=Reflect.getOwnPropertyDescriptor(s,l),d=t.get(l);if(d!==void 0){var f=u(d);if(f===Jt)return;if(c&&"value"in c)c.value=f;else return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(s,l){if(l===gr)return!0;var c=t.get(l),d=c!==void 0&&c.v!==Jt||Reflect.has(s,l);if(c!==void 0||(xt!==null||mt!==null)&&(!d||Qr(s,l)?.writable)){c===void 0&&(c=o(()=>{var p=d?Pt(s[l]):Jt,g=ge(p);return g}),t.set(l,c));var f=u(c);if(f===Jt)return!1}return d},set(s,l,c,d){var f=t.get(l),p=l in s;if(i&&l==="length")for(var g=c;g<f.v;g+=1){var v=t.get(g+"");v!==void 0?y(v,Jt):g in s&&(v=o(()=>ge(Jt)),t.set(g+"",v))}if(f===void 0)(!p||Qr(s,l)?.writable)&&(f=o(()=>ge(void 0)),y(f,Pt(c)),t.set(l,f));else{p=f.v!==Jt;var x=o(()=>Pt(c));y(f,x)}var m=Reflect.getOwnPropertyDescriptor(s,l);if(m?.set&&m.set.call(d,c),!p){if(i&&typeof l=="string"){var h=t.get("length"),E=Number(l);Number.isInteger(E)&&E>=h.v&&y(h,E+1)}Ba(r)}return!0},ownKeys(s){u(r);var l=Reflect.ownKeys(s).filter(f=>{var p=t.get(f);return p===void 0||p.v!==Jt});for(var[c,d]of t)d.v!==Jt&&!(c in s)&&l.push(c);return l},setPrototypeOf(){wh()}})}function ec(n){try{if(n!==null&&typeof n=="object"&&gr in n)return n[gr]}catch{}return n}function Ed(n,e){return Object.is(ec(n),ec(e))}var tc,wd,Td,Ad;function Hh(){if(tc===void 0){tc=window,wd=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Td=Qr(e,"firstChild").get,Ad=Qr(e,"nextSibling").get,Zl(n)&&(n[el]=void 0,n[ad]=null,n[tl]=void 0,n.__e=void 0),Zl(t)&&(t[nl]=void 0)}}function Ii(n=""){return document.createTextNode(n)}function Wa(n){return Td.call(n)}function $a(n){return Ad.call(n)}function F(n,e){return Wa(n)}function Lt(n,e=!1){{var t=Wa(n);return t instanceof Comment&&t.data===""?$a(t):t}}function ve(n,e=!1){return Wa(n)}function C(n,e=1,t=!1){let i=n;for(;e--;)i=$a(i);return i}function Vh(n){n.textContent=""}function Rd(){return!1}function Wh(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function jh(n){var e=xt;if(e===null)return mt.f|=Zi,n;if((e.f&ma)===0&&(e.f&aa)===0)throw n;fi(n,e)}function fi(n,e){if(n===od)throw n;if(!(e!==null&&(e.f&sn)!==0)){for(;e!==null;){if((e.f&$o)!==0&&(e.f&(sn|Ha))===0){if((e.f&ma)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function Xh(n){xt===null&&(mt===null&&yh(),bh()),Fi&&xh()}function Yh(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function zi(n,e){var t=xt;t!==null&&(t.f&xn)!==0&&(n|=xn);var i={ctx:on,deps:null,nodes:null,f:n|Ct|ti,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};ct?.register_created_effect(i);var r=i;if((n&aa)!==0)ka!==null?ka.push(i):tr.ensure().schedule(i);else if(e!==null){try{ca(i)}catch(o){throw Tn(i),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&ga)===0&&(r=r.first,(n&Qn)!==0&&(n&sa)!==0&&r!==null&&(r.f|=sa))}if(r!==null&&(r.parent=t,t!==null&&Yh(r,t),mt!==null&&(mt.f&pn)!==0&&(n&er)===0)){var a=mt;(a.effects??=[]).push(r)}return i}function Rl(){return mt!==null&&!ei}function Cl(n){const e=zi(eo,null);return Wt(e,Qt),e.teardown=n,e}function wn(n){Xh();var e=xt.f,t=!mt&&(e&ii)!==0&&on!==null&&!on.i;if(t){var i=on;(i.e??=[]).push(n)}else return Cd(n)}function Cd(n){return zi(aa|Qf,n)}function qh(n){tr.ensure();const e=zi(er|ga,n);return(t={})=>new Promise(i=>{t.outro?vr(e,()=>{Tn(e),i(void 0)}):(Tn(e),i(void 0))})}function Pd(n){return zi(aa,n)}function Kh(n){return zi($r|ga,n)}function Pl(n,e=0){return zi(eo|e,n)}function Ue(n,e=[],t=[],i=[]){Dh(i,e,t,r=>{zi(eo,()=>{n(...r.map(u))})})}function Ll(n,e=0){var t=zi(Qn|e,n);return t}function Fn(n){return zi(ii|ga,n)}function Ld(n){var e=n.teardown;if(e!==null){const t=Fi,i=mt;nc(!0),Gn(null);try{e.call(null)}catch(r){fi(r,n.parent)}finally{nc(t),Gn(i)}}}function Dl(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&va(()=>{r.abort(Qa)});var i=t.next;(t.f&er)!==0?t.parent=null:Tn(t,e),t=i}}function Zh(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&ii)===0&&Tn(e),e=t}}function Tn(n,e=!0){var t=!1;(e||(n.f&Jf)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Jh(n.nodes.start,n.nodes.end),t=!0),n.f|=Ha,Dl(n,e&&!t),ja(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)a.stop();Ld(n),n.f^=Ha,n.f|=sn;var r=n.parent;r!==null&&r.first!==null&&Dd(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Jh(n,e){for(;n!==null;){var t=n===e?null:$a(n);n.remove(),n=t}}function Dd(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function vr(n,e,t=!0){var i=[];n.f|=Ml,Id(n,i,!0);var r=()=>{t&&Tn(n),e&&e()},a=i.length;if(a>0){var o=()=>--a||r();for(var s of i)s.out(o)}else r()}function Id(n,e,t){if((n.f&xn)===0){n.f^=xn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&e.push(s);for(var r=n.first;r!==null;){var a=r.next;if((r.f&er)===0){var o=(r.f&sa)!==0||(r.f&ii)!==0&&(n.f&Qn)!==0;Id(r,e,o?t:!1)}r=a}}}function Ws(n){n.f&=~Ml,Ud(n,!0)}function Ud(n,e){if((n.f&Ml)===0&&(n.f&xn)!==0){n.f^=xn,(n.f&Qt)===0&&(Wt(n,Ct),tr.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&sa)!==0||(t.f&ii)!==0;Ud(t,r?e:!1),t=i}var a=n.nodes&&n.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function Il(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:$a(t);e.append(t),t=r}}let Fi=!1;function nc(n){Fi=n}let mt=null,ei=!1;function Gn(n){mt=n}let xt=null;function gi(n){xt=n}let mi=null;function Nd(n){mt!==null&&((mt.f&Gs)!==0||(mt.f&pn)!==0)&&(mi??=new Set).add(n)}let En=null,Pn=0,On=null;function Qh(n){On=n}let Od=1,pr=0,_r=pr;function ic(n){_r=n}function Fd(){return++Od}function es(n){var e=n.f;if((e&Ct)!==0)return!0;if((e&Dn)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var a=t[r];if(es(a)&&vd(a),a.wv>n.wv)return!0}(e&ti)!==0&&$n===null&&Wt(n,Qt)}return!1}function kd(n,e,t=!0){var i=n.reactions;if(i!==null&&!(mi!==null&&mi.has(n)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&pn)!==0?kd(a,e,!1):e===a&&(t?Wt(a,Ct):(a.f&Qt)!==0&&Wt(a,Dn),Al(a))}}function Bd(n){var e=En,t=Pn,i=On,r=mt,a=mi,o=on,s=ei,l=_r,c=n.f;En=null,Pn=0,On=null,mt=(c&(ii|er))===0?n:null,mi=null,oa(n.ctx),ei=!1,_r=++pr,n.ac!==null&&(va(()=>{n.ac.abort(Qa)}),n.ac=null);try{n.f|=Gs;var d=n.fn,f=d();n.f|=ma;var p=rc(n);if(dd()&&On!==null&&!ei&&p!==null&&(n.f&(pn|Dn|Ct))===0)for(var g=0;g<On.length;g++)kd(On[g],n);if(r!==null&&r!==n){if(pr++,r.deps!==null)for(let v=0;v<t;v+=1)r.deps[v].rv=pr;if(e!==null)for(const v of e)v.rv=pr;On!==null&&(i===null?i=On:i.push(...On))}return(n.f&Zi)!==0&&(n.f^=Zi),f}catch(v){return rc(n),jh(v)}finally{n.f^=Gs,En=e,Pn=t,On=i,mt=r,mi=a,oa(o),ei=s,_r=l}}function rc(n){var e=n.deps,t=ct?.is_fork;if(En!==null){var i;if(t||ja(n,Pn),e!==null&&Pn>0)for(e.length=Pn+En.length,i=0;i<En.length;i++)e[Pn+i]=En[i];else n.deps=e=En;if(Rl()&&(n.f&ti)!==0)for(i=Pn;i<e.length;i++)(e[i].reactions??=[]).push(n)}else!t&&e!==null&&Pn<e.length&&(ja(n,Pn),e.length=Pn);return e}function $h(n,e){let t=e.reactions;if(t!==null){var i=jf.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&pn)!==0&&(En===null||!Ga.call(En,e))){var a=e;(a.f&ti)!==0&&(a.f^=ti),a.v!==Jt&&El(a),a.ac!==null&&va(()=>{a.ac.abort(Qa),a.ac=null,Wt(a,Ct)}),Oh(a),ja(a,0)}}function ja(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)$h(n,t[i])}function ca(n){var e=n.f;if((e&sn)===0){Wt(n,Qt);var t=xt;xt=n;try{(e&(Qn|id))!==0?Zh(n):Dl(n),Ld(n);var i=Bd(n);n.teardown=typeof i=="function"?i:null,n.wv=Od;var r;Qu&&Rh&&(n.f&Ct)!==0&&n.deps}finally{xt=t}}}async function ep(){await Promise.resolve(),kh()}function u(n){var e=n.f,t=(e&pn)!==0;if(mt!==null&&!ei){var i=xt!==null&&(xt.f&sn)!==0;if(!i&&(mi===null||!mi.has(n))){var r=mt.deps;if((mt.f&Gs)!==0)n.rv<pr&&(n.rv=pr,En===null&&r!==null&&r[Pn]===n?Pn++:En===null?En=[n]:En.push(n));else{mt.deps??=[],Ga.call(mt.deps,n)||mt.deps.push(n);var a=n.reactions;a===null?n.reactions=[mt]:Ga.call(a,mt)||a.push(mt)}}}if(Fi&&pi.has(n))return pi.get(n);if(t){var o=n;if(Fi){var s=o.v;return((o.f&Qt)===0&&o.reactions!==null||Gd(o))&&(s=wl(o)),pi.set(o,s),s}var l=(o.f&ti)===0&&!ei&&mt!==null&&(mt.f&ti)!==0,c=(o.f&ma)===0;es(o)&&(l&&(o.f|=ti),vd(o)),l&&!c&&(_d(o),zd(o))}if($n?.has(n))return $n.get(n);if((n.f&Zi)!==0)throw n.v;return n.v}function zd(n){if(n.f|=ti,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:Ga.call(e,n)||e.push(n),(t.f&pn)!==0&&(t.f&ti)===0&&(_d(t),zd(t))}}function Gd(n){if(n.v===Jt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(pi.has(e)||(e.f&pn)!==0&&Gd(e))return!0;return!1}function _a(n){var e=ei;try{return ei=!0,n()}finally{ei=e}}const tp=["touchstart","touchmove"];function np(n){return tp.includes(n)}const Ua=Symbol("events"),Hd=new Set,al=new Set;function ip(n,e,t,i={}){function r(a){if(i.capture||sl.call(e,a),!a.cancelBubble)return va(()=>t?.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(r.__removed=!1,Pi(()=>{r.__removed||e.addEventListener(n,r,i)})):e.addEventListener(n,r,i),r}function Ui(n,e,t,i,r){var a={capture:i,passive:r},o=ip(n,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Cl(()=>{o.__removed=!0,e.removeEventListener(n,o,a)})}function oe(n,e,t){(e[Ua]??={})[n]=t}function Hn(n){for(var e=0;e<n.length;e++)Hd.add(n[e]);for(var t of al)t(n)}let ho=null,po=!1;function sl(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],a=r[0]||n.target;ho=n,po||(po=!0,setTimeout(()=>{po=!1,ho=null}));var o=0,s=ho===n&&n[Ua];if(s){var l=r.indexOf(s);if(l!==-1&&(e===document||e===window)){n[Ua]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(a=r[o]||n.target,a!==e){$u(n,"currentTarget",{configurable:!0,get(){return a||t}});var d=mt,f=xt;Gn(null),gi(null);try{for(var p,g=[];a!==null&&a!==e;){try{var v=a[Ua]?.[i];v!=null&&(!a.disabled||n.target===a)&&v.call(a,n)}catch(x){p?g.push(x):p=x}if(n.cancelBubble)break;o++,a=o<r.length?r[o]:null}if(p){for(let x of g)queueMicrotask(()=>{throw x});throw p}}finally{n[Ua]=e,delete n.currentTarget,Gn(d),gi(f)}}}const rp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function ap(n){return rp?.createHTML(n)??n}function sp(n){var e=Wh("template");return e.innerHTML=ap(n.replaceAll("<!>","<!---->")),e.content}function js(n,e){var t=xt;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function de(n,e){var t=(e&uh)!==0,i=(e&dh)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=sp(a?n:"<!>"+n),t||(r=Wa(r)));var o=i||wd?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=Wa(o),l=o.lastChild;js(s,l)}else js(o,o);return o}}function ui(n=""){{var e=Ii(n+"");return js(e,e),e}}function Vd(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Ii();return n.append(e,t),js(e,t),n}function ne(n,e){n!==null&&n.before(e)}function op(n){let e=0,t=Sr(0),i;return()=>{Rl()&&(u(t),Pl(()=>(e===0&&(i=_a(()=>n(()=>Ba(t)))),e+=1,()=>{Pi(()=>{e-=1,e===0&&(i?.(),i=void 0,Ba(t))})})))}}var lp=sa|ga;function cp(n,e,t,i){new up(n,e,t,i)}class up{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#v=new Map;#u=null;#m=op(()=>(this.#u=Sr(this.#h),()=>{this.#u=null}));constructor(e,t,i,r){this.#t=e,this.#e=t,this.#s=a=>{var o=xt;o.b=this,o.f|=$o,i(a)},this.parent=xt.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=Ll(()=>{this.#b()},lp)}#x(){try{this.#i=Fn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#M(e){const t=this.#e.failed,{reset:i,invoke_onerror:r}=this.#_(e);Pi(r),t&&(this.#r=Fn(()=>{t(this.#t,()=>e,()=>i)}))}#_(e){var t=!1,i=!1;const r=()=>{if(!this.#d()){if(t){mh();return}t=!0,i&&Ah(),this.#r!==null&&vr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{i=!0,this.#e.onerror?.(e,r),i=!1}catch(o){fi(o,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(sn|Ha))!==0}#g(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=Fn(()=>e(this.#t)),Pi(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),i=Ii(),r=!1;if(t.append(i),this.#i=this.#y(()=>{try{return Fn(()=>this.#s(i))}catch(a){try{this.error(a),r=!0}catch(o){fi(o,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(ct);return}this.#c===0&&(this.#t.before(t),this.#o=null,vr(this.#a,()=>{this.#a=null}),this.#f(ct))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=Fn(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();Il(this.#i,e);const t=this.#e.pending;this.#a=Fn(()=>t(this.#t))}else this.#f(ct)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#v)}defer_effect(e){hd(e,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=xt,i=mt,r=on;gi(this.#n),Gn(this.#n),oa(this.#n.ctx);try{return tr.ensure(),e()}finally{gi(t),Gn(i),oa(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&vr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#S(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Pi(()=>{this.#p=!1,this.#u&&la(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),u(this.#u)}error(e){if(e===od||!this.#e.onerror&&!this.#e.failed)throw e;ct?.is_fork?(this.#i&&ct.skip_effect(this.#i),this.#a&&ct.skip_effect(this.#a),this.#r&&ct.skip_effect(this.#r),ct.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(Tn(this.#i),this.#i=null),this.#a&&(Tn(this.#a),this.#a=null),this.#r&&(Tn(this.#r),this.#r=null);let t=this.#e.failed;const i=r=>{if(this.#d())return;const{reset:a,invoke_onerror:o}=this.#_(r);o(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return Fn(()=>{var s=xt;s.b=this,s.f|=$o,t(this.#t,()=>r,()=>a)})}catch(s){return fi(s,this.#n.parent),null}}))};Pi(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){fi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>fi(a,this.#n&&this.#n.parent)):i(r)}})}}function _e(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[nl]??=n.nodeValue)&&(n[nl]=t,n.nodeValue=`${t}`)}function dp(n,e){return fp(n,e)}const as=new Map;function fp(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:o=!0,transformError:s}){Hh();var l=void 0,c=qh(()=>{var d=t??e.appendChild(Ii());cp(d,{pending:()=>{}},g=>{bn({});var v=on;a&&(v.c=a),r&&(i.$$events=r),l=n(g,i)||Sl(),yn()},s);var f=new Set,p=g=>{for(var v=0;v<g.length;v++){var x=g[v];if(!f.has(x)){f.add(x);var m=np(x);for(const b of[e,document]){var h=as.get(b);h===void 0&&(h=new Map,as.set(b,h));var E=h.get(x);E===void 0?(b.addEventListener(x,sl,{passive:m}),h.set(x,1)):h.set(x,E+1)}}}};return p($s(Hd)),al.add(p),()=>{for(var g of f)for(const m of[e,document]){var v=as.get(m),x=v.get(g);--x==0?(m.removeEventListener(g,sl),v.delete(g),v.size===0&&as.delete(m)):v.set(g,x)}al.delete(p),d!==t&&d.parentNode?.removeChild(d)}});return hp.set(l,c),l}let hp=new WeakMap;class pp{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),i=this.#l.get(t);if(i)Ws(i),this.#s.delete(t);else{var r=this.#e.get(t);r&&(Ws(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,o]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(o);s&&(Tn(s.effect),this.#e.delete(o))}for(const[a,o]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var c=document.createDocumentFragment();Il(o,c),c.append(Ii()),this.#e.set(a,{effect:o,fragment:c})}else Tn(o);this.#s.delete(a),this.#l.delete(a)};this.#n||!i?(this.#s.add(a),vr(o,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,r]of this.#e)t.includes(i)||(Tn(r.effect),this.#e.delete(i))};ensure(e,t){var i=ct,r=Rd();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),o=Ii();a.append(o),this.#e.set(e,{effect:Fn(()=>t(o)),fragment:a})}else this.#l.set(e,Fn(()=>t(this.anchor)));if(this.#t.set(i,e),r){for(const[s,l]of this.#l)s===e?i.unskip_effect(l):i.skip_effect(l);for(const[s,l]of this.#e)s===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#i),i.ondiscard(this.#a)}else this.#i(i)}}function qe(n,e,t=!1){var i=new pp(n),r=t?sa:0;function a(o,s){i.ensure(o,s)}Ll(()=>{var o=!1;e((s,l=0)=>{o=!0,a(l,s)}),o||a(-1,null)},r)}function ol(n,e){return e}function mp(n,e,t){for(var i=[],r=e.length,a,o=e.length,s=0;s<r;s++){let f=e[s];vr(f,()=>{if(a){if(a.pending.delete(f),a.done.add(f),a.pending.size===0){var p=n.outrogroups;ll(n,$s(a.done)),p.delete(a),p.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&t!==null&&n.pending.size===0;if(l){var c=t,d=c.parentNode;Vh(d),d.append(c),n.items.clear()}ll(n,e,!l)}else a={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(a)}function ll(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const s of o)i.add(n.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(i?.has(a)){a.f|=hi;const o=document.createDocumentFragment();Il(a,o)}else Tn(e[r],t)}}var ac;function At(n,e,t,i,r,a=null){var o=n,s=new Map,l=(e&sd)!==0;if(l){var c=n;o=c.appendChild(Ii())}var d=null,f=gd(()=>{var E=t();return Qs(E)?E:E==null?[]:$s(E)}),p=new Map,g=!0;function v(E){if((h.effect.f&sn)===0){h.pending.delete(E);var b=u(f);h.fallback=d,gp(h,b,o,e,i),d!==null&&(b.length===0?(d.f&hi)===0?Ws(d):(d.f^=hi,Na(d,null,o)):vr(d,()=>{d=null}))}}function x(E){h.pending.delete(E)}var m=Ll(()=>{for(var E=u(f),b=E.length,S=new Set,T=ct,D=Rd(),R=0;R<b;R+=1){var O=E[R],M=i(O,R),A=g?null:s.get(M);A?(A.v&&la(A.v,O),A.i&&la(A.i,R),D&&T.unskip_effect(A.e)):(A=vp(s,g?o:ac??=Ii(),O,M,R,r,e,t),g||(A.e.f|=hi),s.set(M,A)),S.add(M)}if(b===0&&a&&!d&&(g?d=Fn(()=>a(o)):(d=Fn(()=>a(ac??=Ii())),d.f|=hi)),b>S.size&&_h(),!g)if(p.set(T,S),D){for(const[ce,Q]of s)S.has(ce)||T.skip_effect(Q.e);T.oncommit(v),T.ondiscard(x)}else v(T);u(f)}),h={effect:m,items:s,pending:p,outrogroups:null,fallback:d};g=!1}function Ea(n){for(;n!==null&&(n.f&ii)===0;)n=n.next;return n}function gp(n,e,t,i,r){var a=(i&rh)!==0,o=e.length,s=n.items,l=Ea(n.effect.first),c,d=null,f,p=[],g=[],v,x,m,h;if(a)for(h=0;h<o;h+=1)v=e[h],x=r(v,h),m=s.get(x).e,(m.f&hi)===0&&(m.nodes?.a?.measure(),(f??=new Set).add(m));for(h=0;h<o;h+=1){if(v=e[h],x=r(v,h),m=s.get(x).e,n.outrogroups!==null)for(const A of n.outrogroups)A.pending.delete(m),A.done.delete(m);if((m.f&xn)!==0&&(Ws(m),a&&(m.nodes?.a?.unfix(),(f??=new Set).delete(m))),(m.f&hi)!==0)if(m.f^=hi,m===l)Na(m,null,t);else{var E=d?d.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Vi(n,d,m),Vi(n,m,E),Na(m,E,t),d=m,p=[],g=[],l=Ea(d.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(p.length<g.length){var b=g[0],S;d=b.prev;var T=p[0],D=p[p.length-1];for(S=0;S<p.length;S+=1)Na(p[S],b,t);for(S=0;S<g.length;S+=1)c.delete(g[S]);Vi(n,T.prev,D.next),Vi(n,d,T),Vi(n,D,b),l=b,d=D,h-=1,p=[],g=[]}else c.delete(m),Na(m,l,t),Vi(n,m.prev,m.next),Vi(n,m,d===null?n.effect.first:d.next),Vi(n,d,m),d=m;continue}for(p=[],g=[];l!==null&&l!==m;)(c??=new Set).add(l),g.push(l),l=Ea(l.next);if(l===null)continue}(m.f&hi)===0&&p.push(m),d=m,l=Ea(m.next)}if(n.outrogroups!==null){for(const A of n.outrogroups)A.pending.size===0&&(ll(n,$s(A.done)),n.outrogroups?.delete(A));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var R=[];if(c!==void 0)for(m of c)(m.f&xn)===0&&R.push(m);for(;l!==null;)(l.f&xn)===0&&l!==n.fallback&&R.push(l),l=Ea(l.next);var O=R.length;if(O>0){var M=(i&sd)!==0&&o===0?t:null;if(a){for(h=0;h<O;h+=1)R[h].nodes?.a?.measure();for(h=0;h<O;h+=1)R[h].nodes?.a?.fix()}mp(n,R,M)}}a&&Pi(()=>{if(f!==void 0)for(m of f)m.nodes?.a?.apply()})}function vp(n,e,t,i,r,a,o,s){var l=(o&nh)!==0?(o&ah)===0?zh(t,!1,!1):Sr(t):null,c=(o&ih)!==0?Sr(r):null;return{v:l,i:c,e:Fn(()=>(a(e,l??t,c??r,s),()=>{n.delete(i)}))}}function Na(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,a=e&&(e.f&hi)===0?e.nodes.start:t;i!==null;){var o=$a(i);if(a.before(i),i===r)return;i=o}}function Vi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const sc=[...` 	
\r\f \v\uFEFF`];function _p(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,o=0;(o=i.indexOf(r,o))>=0;){var s=o+a;(o===0||sc.includes(i[o-1]))&&(s===i.length||sc.includes(i[s]))?i=(o===0?"":i.substring(0,o))+i.substring(s+1):o=s}}return i===""?null:i}function xp(n,e){return n==null?null:String(n)}function yt(n,e,t,i,r,a){var o=n[el];if(o!==t||o===void 0){var s=_p(t,i,a);s==null?n.removeAttribute("class"):n.className=s,n[el]=t}else if(a&&r!==a)for(var l in a){var c=!!a[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return a}function Ri(n,e,t,i){var r=n[tl];if(r!==e){var a=xp(e);a==null?n.removeAttribute("style"):n.style.cssText=a,n[tl]=e}return i}function bp(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function yp(n,e){var t=n.__defaultValue,i=n.multiple,r=i?t??[]:null;if(!(i&&!Qs(r))){n.selectedIndex;for(var a of n.options){var o=ta(a);bp(a,i?r.includes(o):Ed(o,t))}}}function Wd(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Qs(e))return ph();for(var i of n.options)i.selected=e.includes(ta(i));return}for(i of n.options){var r=ta(i);if(Ed(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Xs(n){var e=new MutationObserver(t=>{t.every(Mp)||("__defaultValue"in n&&yp(n),"__value"in n&&Wd(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Cl(()=>{e.disconnect()})}function Ys(n,e,t=e){var i=new WeakSet,r=!0;pd(n,"change",a=>{var o=a?"[selected]":":checked",s;if(n.multiple)s=[].map.call(n.querySelectorAll(o),ta);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");s=l&&ta(l)}t(s),n.__value=s,ct!==null&&i.add(ct)}),Pd(()=>{var a=e();if(n===document.activeElement){var o=ct;if(i.has(o))return}if(Wd(n,a,r),r&&a===void 0){var s=n.querySelector(":checked");s!==null&&(a=ta(s),t(a))}n.__value=a,r=!1})}function ta(n){return"__value"in n?n.__value:n.value}function Mp(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const Sp=Symbol("is custom element"),Ep=Symbol("is html"),wp=th?"progress":"PROGRESS";function Xa(n,e){var t=Ul(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==wp)||(n.value=e??"")}function oc(n,e){var t=Ul(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function Je(n,e,t,i){var r=Ul(n),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(n[eh]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Tp(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Ul(n){return n[ad]??={[Sp]:n.nodeName.includes("-"),[Ep]:n.namespaceURI===fh}}var lc=new Map;function Tp(n){var e=n.getAttribute("is")||n.nodeName,t=lc.get(e);if(t)return t;lc.set(e,t=new Set);for(var i,r=n,a=Element.prototype;a!==r;){i=Xf(r);for(var o in i)i[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.add(o);r=ed(r)}return t}function Ot(n,e,t=e){var i=new WeakSet;pd(n,"input",async r=>{var a=r?n.defaultValue:n.value;if(a=mo(n)?go(a):a,t(a),ct!==null&&i.add(ct),await ep(),a!==(a=e())){var o=n.selectionStart,s=n.selectionEnd,l=n.value.length;if(n.value=a??"",s!==null){var c=n.value.length;o===s&&s===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(s,c))}}}),_a(e)==null&&n.value&&(t(mo(n)?go(n.value):n.value),ct!==null&&i.add(ct)),Pl(()=>{var r=e();if(n===document.activeElement){var a=ct;if(i.has(a))return}mo(n)&&r===go(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function mo(n){var e=n.type;return e==="number"||e==="range"}function go(n){return n===""?null:+n}function vo(n,e){return n===e||n?.[gr]===e}function jd(n=Sl(),e,t,i){var r=on.r,a=xt;return Pd(()=>{var o,s;return Pl(()=>{o=s,s=[],_a(()=>{vo(t(...s),n)||(e(n,...s),o&&vo(t(...o),n)&&e(null,...o))})}),()=>{let l=a;for(;l!==r&&l.parent!==null&&l.parent.f&Ha;)l=l.parent;const c=()=>{s&&vo(t(...s),n)&&e(null,...s)},d=l.teardown;l.teardown=()=>{c(),d?.()}}}),n}let ss=!1;function Ap(n){var e=ss;try{return ss=!1,[n(),ss]}finally{ss=e}}function lt(n,e,t,i){var r=!0,a=(t&lh)!==0,o=(t&ch)!==0,s=i,l=!0,c=void 0,d=()=>o&&r?(c??=Va(i),u(c)):(l&&(l=!1,s=o?_a(i):i),s);let f;if(a){var p=gr in n||$f in n;f=Qr(n,e)?.set??(p&&e in n?S=>n[e]=S:void 0)}var g,v=!1;a?[g,v]=Ap(()=>n[e]):g=n[e],g===void 0&&i!==void 0&&(g=d(),f&&(Sh(),f(g)));var x;if(x=()=>{var S=n[e];return S===void 0?d():(l=!0,S)},(t&oh)===0)return x;if(f){var m=n.$$legacy;return(function(S,T){return arguments.length>0?((!T||m||v)&&f(T?x():S),S):x()})}var h=!1,E=((t&sh)!==0?Va:gd)(()=>(h=!1,x()));a&&u(E);var b=xt;return(function(S,T){if(arguments.length>0){const D=T?u(E):a?Pt(S):S;return y(E,D),h=!0,s!==void 0&&(s=D),S}return Fi&&h||(b.f&sn)!==0?E.v:u(E)})}function nr(n){on===null&&ud(),wn(()=>{const e=_a(n);if(typeof e=="function")return e})}function Rp(n){on===null&&ud(),nr(()=>()=>_a(n))}const Cp="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Cp);function Pp(n){const e=[];for(const t of String(n??"")){const i=t.codePointAt(0);if(!(i===65039||i===65038)){if(i===8205){e.push("200d");continue}e.push(i.toString(16))}}return e.join("-")}const Lp=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310"]),Dp="/";function Ip(n){const e=Pp(n);return Lp.has(e)?`${Dp}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}var Up=de('<img draggable="false"/>'),Np=de("<span> </span>");function dn(n,e){bn(e,!0);let t=lt(e,"emoji",3,""),i=lt(e,"size",3,null),r=lt(e,"alt",3,""),a=lt(e,"class",3,"");const o=wt(()=>Ip(t())),s=wt(()=>r()||t()),l=wt(()=>i()?`${i()}px`:"1em");var c=Vd(),d=Lt(c);{var f=g=>{var v=Up();Ue(()=>{Je(v,"src",u(o)),Je(v,"alt",u(s)),Je(v,"title",r()||void 0),yt(v,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),Ri(v,`width: ${u(l)??""}; height: ${u(l)??""};`),Je(v,"aria-hidden",r()?void 0:"true")}),ne(g,v)},p=g=>{var v=Np(),x=ve(v,!0);Ue(()=>{yt(v,1,`inline-block ${a()??""}`),Je(v,"aria-hidden",r()?void 0:"true"),Je(v,"title",r()||void 0),_e(x,t())}),ne(g,v)};qe(d,g=>{u(o)?g(f):g(p,-1)})}ne(n,c),yn()}var Op=de('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),Fp=de('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function kp(n,e){bn(e,!0);let t=lt(e,"selected",3,!1),i=lt(e,"gameRunning",3,!1),r=lt(e,"menuOpen",3,!1);const a=wt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function o(){const O=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&O?O(e.instance.icon_path):"/logo.png"}var s=Fp(),l=F(s),c=F(l),d=ve(c),f=C(c,2),p=F(f),g=ve(p,!0),v=C(p,2),x=F(v),m=ve(x,!0),h=C(x,2),E=ve(h,!0),b=C(f,2),S=C(l,2),T=ve(S,!0),D=C(S,2);{var R=O=>{var M=Op(),A=Lt(M),ce=C(A,2),Q=F(ce),B=C(Q,2),G=C(B,2),q=F(G);dn(q,{emoji:"📂"});var k=C(G,2),j=C(k,4);Ue(()=>Q.disabled=i()),oe("click",A,function(...ee){e.onclosemenu?.apply(this,ee)}),oe("click",Q,()=>{e.onclosemenu(),e.onplay()}),oe("click",B,()=>{e.onclosemenu(),e.onedit()}),oe("click",G,()=>{e.onclosemenu(),e.onopenfolder()}),oe("click",k,function(...ee){e.onviewlogs?.apply(this,ee)}),oe("click",j,()=>{e.onclosemenu(),e.ondelete()}),ne(O,M)};qe(D,O=>{r()&&O(R)})}Ue((O,M)=>{yt(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),Je(s,"aria-selected",t()),Je(s,"title",e.instance.name),Je(d,"src",O),_e(g,e.instance.name),_e(m,e.instance.minecraft_version),yt(h,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${u(a)??""}`),_e(E,e.instance.loader_type),_e(T,M)},[()=>o(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),oe("click",s,function(...O){e.onselect?.apply(this,O)}),oe("dblclick",s,function(...O){e.onplay?.apply(this,O)}),oe("keydown",s,O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),e.onplay())}),oe("contextmenu",s,O=>{O.preventDefault(),e.onselect(),e.ontogglemenu()}),Ui("error",d,O=>{O.currentTarget.dataset.f||(O.currentTarget.dataset.f="1",O.currentTarget.src="/logo.png")}),oe("click",b,O=>{O.stopPropagation(),e.ontogglemenu()}),ne(n,s),yn()}Hn(["click","dblclick","keydown","contextmenu"]);var Bp=de('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),zp=de('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Gp=de('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Hp=de('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function Vp(n,e){bn(e,!0);var t=Hp();At(t,21,()=>e.instances,i=>i.id,(i,r)=>{{let a=wt(()=>e.selectedId===u(r).id),o=wt(()=>e.menuFor===u(r).id);kp(i,{get instance(){return u(r)},get selected(){return u(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return u(o)},onselect:()=>e.onselect?.(u(r).id),onplay:()=>e.onplay?.(u(r).id),ontogglemenu:()=>e.ontogglemenu?.(u(r).id),onedit:()=>e.onedit?.(u(r)),onopenfolder:()=>e.onopenfolder?.(u(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(u(r).id),get onclosemenu(){return e.onclosemenu}})}},i=>{var r=Vd(),a=Lt(r);{var o=d=>{var f=Bp(),p=ve(f,!0);Ue(()=>_e(p,e.error)),ne(d,f)},s=d=>{var f=zp(),p=ve(f);Ue(g=>_e(p,`No instances match "${g??""}".`),[()=>e.query.trim()]),ne(d,f)},l=wt(()=>e.query.trim()),c=d=>{var f=Gp(),p=C(F(f),6);oe("click",p,()=>e.onadd?.()),ne(d,f)};qe(a,d=>{e.error?d(o):u(l)?d(s,1):d(c,-1)})}ne(i,r)}),ne(n,t),yn()}Hn(["click"]);const Ya=[];function to(n){return Ya.push(n),n}function no(n){const e=Ya.lastIndexOf(n);e!==-1&&Ya.splice(e,1)}function cc(){return Ya[Ya.length-1]??null}var Wp=de('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div>'),uc=de('<div class="p-6 text-center text-[12px] text-(--text-muted)"> </div>'),jp=de('<span class="shrink-0 rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent)">✓ Installed</span>'),Xp=de(`<button class="shrink-0 rounded bg-(--accent) px-3 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Downloads the primary jar into this instance's mods folder"> </button>`),Yp=de('<div class="flex items-center gap-3 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div> <div class="truncate text-[11px] text-(--text-muted)"> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></div> <!></div>'),qp=de('<div class="flex flex-col gap-1.5"></div>'),Kp=de('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[480px] w-[640px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><div class="min-w-0"><h3 class="text-sm font-semibold">Get more mods</h3> <p class="truncate text-[11px] text-(--text-muted)"> <!></p></div> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="border-b border-(--border) p-3"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></div></div>');function Zp(n,e){bn(e,!0);let t=ge(""),i=ge(null),r=ge(!1),a=ge(""),o=ge(Pt({})),s=ge(Pt({})),l=0;const c=["fabric","quilt","forge","neoforge"],d=wt(()=>{const k=e.instance.loader_type.toLowerCase();return c.includes(k)?k:""});function f(k){return k>=1e6?`${(k/1e6).toFixed(1)}M`:k>=1e3?`${(k/1e3).toFixed(0)}K`:String(k)}function p(k){return k.icon_url||"/logo.png"}wn(()=>{const k=u(t).trim(),j=++l,ee=setTimeout(()=>{y(r,!0),y(a,""),window.__TAURI__.core.invoke("search_modrinth_mods",{query:k,gameVersion:e.instance.minecraft_version,loader:u(d)}).then(le=>{j===l&&(y(i,le,!0),y(r,!1))}).catch(le=>{j===l&&(y(a,String(le),!0),y(r,!1))})},350);return()=>clearTimeout(ee)});async function g(k){if(!(u(o)[k.project_id]||u(s)[k.project_id])){y(o,{...u(o),[k.project_id]:!0},!0);try{const j=await window.__TAURI__.core.invoke("install_modrinth_mod",{instanceId:e.instance.id,projectId:k.project_id,gameVersion:e.instance.minecraft_version,loader:u(d)});y(s,{...u(s),[k.project_id]:j},!0),e.oninstalled?.(k)}catch(j){y(a,`Install failed: ${j}`)}finally{y(o,{...u(o),[k.project_id]:!1},!0)}}}nr(()=>{const k=to(()=>e.onclose?.());return()=>no(k)});var v=Kp(),x=F(v),m=F(x),h=F(m),E=C(F(h),2),b=F(E),S=C(b);{var T=k=>{var j=ui();Ue(ee=>_e(j,`· ${ee??""}`),[()=>u(d)[0].toUpperCase()+u(d).slice(1)]),ne(k,j)};qe(S,k=>{u(d)&&k(T)})}var D=C(h,2),R=C(m,2),O=F(R),M=C(R,2),A=F(M);{var ce=k=>{var j=Wp(),ee=ve(j,!0);Ue(()=>_e(ee,u(a))),ne(k,j)};qe(A,k=>{u(a)&&k(ce)})}var Q=C(A,2);{var B=k=>{var j=uc(),ee=ve(j,!0);Ue(()=>_e(ee,u(r)?"Searching Modrinth…":"Type to search.")),ne(k,j)},G=k=>{var j=uc(),ee=ve(j);Ue(le=>_e(ee,`No mods for MC ${e.instance.minecraft_version??""}${u(d)?` + ${u(d)}`:""} match “${le??""}”.`),[()=>u(t).trim()]),ne(k,j)},q=k=>{var j=qp();At(j,21,()=>u(i),ee=>ee.project_id,(ee,le)=>{var xe=Yp(),W=F(xe),X=C(W,2),Ce=F(X),Pe=F(Ce),Fe=ve(Pe,!0),Ge=C(Pe,2),Ye=ve(Ge),We=C(Ce,2),we=ve(We,!0),Be=C(We,2),fe=ve(Be),U=C(X,2);{var je=$=>{var be=jp();Ue(()=>Je(be,"title",u(s)[u(le).project_id])),ne($,be)},Ae=$=>{var be=Xp(),Le=ve(be,!0);Ue(()=>{be.disabled=u(o)[u(le).project_id],_e(Le,u(o)[u(le).project_id]?"Installing…":"Install")}),oe("click",be,()=>g(u(le))),ne($,be)};qe(U,$=>{u(s)[u(le).project_id]?$(je):$(Ae,-1)})}Ue(($,be,Le)=>{Je(W,"src",$),Je(Pe,"title",u(le).title),_e(Fe,u(le).title),Je(Ge,"title",`${be??""} downloads`),_e(Ye,`⤓ ${Le??""}`),Je(We,"title",u(le).description),_e(we,u(le).description),_e(fe,`by ${(u(le).author||"unknown")??""}`)},[()=>p(u(le)),()=>f(u(le).downloads),()=>f(u(le).downloads)]),Ui("error",W,$=>{$.currentTarget.dataset.f||($.currentTarget.dataset.f="1",$.currentTarget.src="/logo.png")}),ne(ee,xe)}),ne(k,j)};qe(Q,k=>{u(i)?u(i).length===0&&!u(r)?k(G,1):k(q,-1):k(B)})}Ue(()=>_e(b,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `)),oe("click",v,k=>{k.target===k.currentTarget&&e.onclose?.()}),oe("click",D,()=>e.onclose?.()),Ot(O,()=>u(t),k=>y(t,k)),ne(n,v),yn()}Hn(["click"]);var Jp=de('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Qp=de('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),$p=de('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),dc=de('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),_o=de('<p class="mt-2 text-[12px] text-rose-400"> </p>'),em=de(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),tm=de('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),nm=de('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),im=de('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),rm=de('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),am=de('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),sm=de('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, icon and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p></div>',1),om=de('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!></div>');function lm(n,e){bn(e,!0);let t=lt(e,"storage",3,null);const i=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let r=ge("mods"),a=ge(Pt([])),o=ge(!1),s=ge(""),l=ge(""),c=ge(!1),d=ge(Pt([])),f=ge(Pt([])),p=ge(!1),g=ge("");function v(...we){return[t()?t().instances_dir.replace(/\\/g,"/"):"",e.instance.id,"minecraft",...we].filter(Boolean).join("/")}function x(we){const Be=window.__TAURI__?.core?.convertFileSrc;return Be?Be(we):we}function m(we){return we>=1024*1024?`${(we/1024/1024).toFixed(1)} MB`:we>=1024?`${(we/1024).toFixed(1)} KB`:`${we} B`}function h(we){return we?new Date(we*1e3).toLocaleString():""}function E(){const we=u(l).trim().toLowerCase();return we?u(a).filter(Be=>Be.display_name.toLowerCase().includes(we)||Be.filename.toLowerCase().includes(we)):u(a)}async function b(){y(o,!0);try{y(a,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:e.instance.id}),!0),y(s,"")}catch(we){y(s,String(we),!0)}finally{y(o,!1)}}async function S(we){y(o,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:e.instance.id,filename:we.filename,enable:!we.is_enabled}),u(s)&&y(s,"")}catch(Be){y(s,String(Be),!0)}finally{y(o,!1)}await b()}async function T(we){y(o,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:e.instance.id,filename:we.filename}),y(s,"")}catch(Be){y(s,String(Be),!0)}finally{y(o,!1)}await b()}async function D(){const we=window.__TAURI__?.dialog?.open;if(!we){y(s,"File picker unavailable in this build.");return}let Be;try{Be=await we({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(U){y(s,String(U),!0);return}const fe=Be?[].concat(Be):[];if(fe.length){y(o,!0);try{for(const U of fe)await window.__TAURI__.core.invoke("import_mod",{instanceId:e.instance.id,jarPath:U});y(s,"")}catch(U){y(s,String(U),!0)}finally{y(o,!1)}await b()}}async function R(we){y(p,!0);try{const Be=await window.__TAURI__.core.invoke(we,{instanceId:e.instance.id});y(we==="list_screenshots"?d:f,Be,!0),y(g,"")}catch(Be){y(g,String(Be),!0)}finally{y(p,!1)}}function O(we){window.__TAURI__.core.invoke("open_path",{path:we}).catch(Be=>y(g,String(Be),!0))}function M(we){O(v("screenshots",we))}nr(()=>{b(),R("list_screenshots"),R("list_logs")});var A=om(),ce=F(A),Q=F(ce),B=C(Q,2),G=F(B),q=ve(G,!0),k=C(G,2),j=ve(k),ee=C(B,2);At(ee,21,()=>i,we=>we.id,(we,Be)=>{var fe=Jp(),U=F(fe),je=F(U);dn(je,{get emoji(){return u(Be).icon},size:15});var Ae=C(U,2),$=ve(Ae,!0);Ue(()=>{yt(fe,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${u(r)===u(Be).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Je(fe,"aria-current",u(r)===u(Be).id?"true":void 0),_e($,u(Be).label)}),oe("click",fe,()=>y(r,u(Be).id,!0)),ne(we,fe)});var le=C(ce,2),xe=F(le),W=F(xe);{var X=we=>{var Be=Qp(),fe=C(Lt(Be),4),U=F(fe),je=ve(U),Ae=C(U,2),$=ve(Ae),be=C(Ae,2),Le=ve(be);Ue(ke=>{_e(je,`Minecraft ${e.instance.minecraft_version??""}`),_e($,`Loader: ${e.instance.loader_type??""}`),_e(Le,`Last played: ${ke??""}`)},[()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleString():"never"]),ne(we,Be)},Ce=we=>{var Be=em(),fe=C(Lt(Be),4),U=F(fe),je=ve(U),Ae=C(U,2),$=C(fe,2),be=C($,2),Le=C(be,2),ke=F(Le);At(ke,21,E,I=>I.filename,(I,ie)=>{var ae=$p(),te=F(ae),Se=F(te);let ue;var H=ve(Se,!0),L=C(Se,2),re=ve(L),Ne=C(te),Me=ve(Ne),me=C(Ne),He=ve(me);Ue($e=>{ue=yt(Se,1,"truncate",null,ue,{"opacity-50":!u(ie).is_enabled}),_e(H,u(ie).display_name),_e(re,`${u(ie).filename??""} · ${$e??""}`),yt(Me,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${u(ie).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),Je(Me,"title",u(ie).is_enabled?"Disable":"Enable"),Me.disabled=u(o),Je(He,"title",`Delete ${u(ie).display_name??""}`),He.disabled=u(o)},[()=>m(u(ie).file_size)]),oe("click",Me,()=>S(u(ie))),oe("click",He,()=>T(u(ie))),ne(I,ae)},I=>{var ie=dc(),ae=F(ie),te=F(ae);{var Se=H=>{var L=ui("Loading mods…");ne(H,L)},ue=H=>{var L=ui("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");ne(H,L)};qe(te,H=>{u(o)?H(Se):H(ue,-1)})}ne(I,ie)});var De=C(Le,2);{var Z=I=>{var ie=_o(),ae=ve(ie,!0);Ue(()=>_e(ae,u(s))),ne(I,ie)};qe(De,I=>{u(s)&&I(Z)})}var ye=C(De,2),Re=F(ye),w=C(Re,2),_=F(w);dn(_,{emoji:"📂"}),Ue(()=>{_e(je,`Installed (${u(a).length??""})`),Ae.disabled=u(o),Re.disabled=u(o),w.disabled=!t(),Je(w,"title",t()?"Opens the instance mods folder":"Storage unknown")}),oe("click",Ae,b),Ot($,()=>u(l),I=>y(l,I)),oe("click",be,()=>y(c,!0)),oe("click",Re,D),oe("click",w,()=>O(v("mods"))),ne(we,Be)},Pe=we=>{var Be=im(),fe=C(Lt(Be),4);At(fe,21,()=>u(d),be=>be.name,(be,Le)=>{var ke=tm(),De=F(ke),Z=C(De,2),ye=ve(Z,!0);Ue((Re,w,_)=>{Je(ke,"title",`${u(Le).name??""} · ${Re??""} · ${w??""}`),Je(De,"src",_),Je(De,"alt",u(Le).name),Je(Z,"title",u(Le).name),_e(ye,u(Le).name)},[()=>m(u(Le).size),()=>h(u(Le).modified),()=>x(v("screenshots",u(Le).name))]),oe("click",ke,()=>M(u(Le).name)),oe("keydown",ke,Re=>{(Re.key==="Enter"||Re.key===" ")&&(Re.preventDefault(),M(u(Le).name))}),ne(be,ke)},be=>{var Le=nm(),ke=F(Le);{var De=ye=>{var Re=ui("Loading screenshots…");ne(ye,Re)},Z=ye=>{var Re=ui("No screenshots yet — press F2 in game to capture one.");ne(ye,Re)};qe(ke,ye=>{u(p)?ye(De):ye(Z,-1)})}ne(be,Le)});var U=C(fe,2);{var je=be=>{var Le=_o(),ke=ve(Le,!0);Ue(()=>_e(ke,u(g))),ne(be,Le)};qe(U,be=>{u(g)&&be(je)})}var Ae=C(U,2),$=F(Ae);dn($,{emoji:"📂"}),oe("click",Ae,()=>O(v("screenshots"))),ne(we,Be)},Fe=we=>{var Be=am(),fe=C(Lt(Be),4),U=F(fe);At(U,21,()=>u(f),De=>De.name,(De,Z)=>{var ye=rm(),Re=F(ye),w=F(Re),_=ve(w,!0),I=C(w,2),ie=ve(I),ae=C(Re),te=ve(ae);Ue((Se,ue)=>{Je(w,"title",u(Z).name),_e(_,u(Z).name),_e(ie,`${Se??""} · ${ue??""}`)},[()=>m(u(Z).size),()=>h(u(Z).modified)]),oe("click",te,()=>O(v("logs",u(Z).name))),ne(De,ye)},De=>{var Z=dc(),ye=F(Z),Re=F(ye);{var w=I=>{var ie=ui("Loading logs…");ne(I,ie)},_=I=>{var ie=ui("No log files yet — logs appear after the first launch.");ne(I,ie)};qe(Re,I=>{u(p)?I(w):I(_,-1)})}ne(De,Z)});var je=C(fe,2);{var Ae=De=>{var Z=_o(),ye=ve(Z,!0);Ue(()=>_e(ye,u(g))),ne(De,Z)};qe(je,De=>{u(g)&&De(Ae)})}var $=C(je,2),be=F($),Le=C(be,2),ke=F(Le);dn(ke,{emoji:"📂"}),oe("click",be,()=>e.onopenconsole?.()),oe("click",Le,()=>O(v("logs"))),ne(we,Be)},Ge=we=>{var Be=sm(),fe=C(Lt(Be),4),U=F(fe),je=ve(U,!0),Ae=C(U,2),$=F(Ae),be=ve($),Le=C($,2),ke=ve(Le);Ue((De,Z,ye)=>{_e(je,e.instance.name),Je(Ae,"title",De),_e(be,`Game folder: ${Z??""}`),_e(ke,`Mods folder: ${ye??""}`)},[()=>v(),()=>v(),()=>v("mods")]),ne(we,Be)};qe(W,we=>{u(r)==="components"?we(X):u(r)==="mods"?we(Ce,1):u(r)==="screenshots"?we(Pe,2):u(r)==="logs"?we(Fe,3):we(Ge,-1)})}var Ye=C(le,2);{var We=we=>{Zp(we,{get instance(){return e.instance},onclose:()=>y(c,!1),oninstalled:()=>b()})};qe(Ye,we=>{u(c)&&we(We)})}Ue(()=>{Je(G,"title",e.instance.name),_e(q,e.instance.name),_e(j,`${e.instance.minecraft_version??""} · ${e.instance.loader_type??""}`)}),oe("click",Q,function(...we){e.onback?.apply(this,we)}),ne(n,A),yn()}Hn(["click","keydown"]);var cm=de('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),um=de('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),dm=de('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),fm=de('<p class="mt-3 text-[12px] text-red-400"> </p>'),hm=de(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),pm=de('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function mm(n,e){bn(e,!0);let t=ge(null),i=ge(""),r=ge(""),a=ge(!1),o=ge("");function s(E){return E>=1024*1024?`${(E/1024/1024).toFixed(1)} MB`:E>=1024?`${(E/1024).toFixed(0)} KB`:`${E} B`}function l(){return!u(t)||!u(t).loader?"Vanilla":u(t).loader[0].toUpperCase()+u(t).loader.slice(1)+(u(t).loader_version?` ${u(t).loader_version}`:" (latest stable)")}nr(async()=>{const E=to(()=>e.onclose?.());try{y(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),y(r,u(t).name,!0)}catch(b){y(i,String(b),!0)}return()=>no(E)});async function c(){if(!u(a)){y(a,!0),y(o,"");try{const E=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:u(r).trim()});e.oninstalled?.(E)}catch(E){y(o,String(E),!0)}finally{y(a,!1)}}}var d=pm(),f=F(d),p=F(f),g=C(F(p),2),v=C(p,2);{var x=E=>{var b=cm(),S=F(b),T=ve(S,!0),D=C(S,2),R=ve(D,!0);Ue(()=>{_e(T,u(i)),Je(D,"title",e.path),_e(R,e.path)}),ne(E,b)},m=E=>{var b=um();ne(E,b)},h=E=>{var b=hm(),S=Lt(b),T=F(S),D=F(T),R=ve(D,!0),O=C(D,2);{var M=Ge=>{var Ye=dm(),We=ve(Ye,!0);Ue(()=>_e(We,u(t).summary)),ne(Ge,Ye)};qe(O,Ge=>{u(t).summary&&Ge(M)})}var A=C(O,2),ce=F(A),Q=ve(ce),B=C(ce,2),G=ve(B,!0),q=C(B,2),k=ve(q),j=C(q,2),ee=ve(j,!0),le=C(T,4),xe=C(le,2);{var W=Ge=>{var Ye=fm(),We=ve(Ye,!0);Ue(()=>_e(We,u(o))),ne(Ge,Ye)};qe(xe,Ge=>{u(o)&&Ge(W)})}var X=C(S,2),Ce=F(X),Pe=C(Ce,2),Fe=ve(Pe,!0);Ue((Ge,Ye,We)=>{Je(D,"title",u(t).name),_e(R,u(t).name),_e(Q,`MC ${(u(t).game_version||"?")??""}`),_e(G,Ge),Je(q,"title",`${u(t).download_count??""} downloaded, ${u(t).override_count??""} overrides extracted`),_e(k,`${u(t).file_count??""} files`),_e(ee,Ye),Pe.disabled=We,_e(Fe,u(a)?"Installing…":"Install Modpack")},[()=>l(),()=>s(u(t).archive_size),()=>u(a)||!u(r).trim()]),Ot(le,()=>u(r),Ge=>y(r,Ge)),oe("click",Ce,()=>e.onclose?.()),oe("click",Pe,c),ne(E,b)};qe(v,E=>{u(i)?E(x):u(t)?E(h,-1):E(m,1)})}oe("click",d,E=>{E.target===E.currentTarget&&e.onclose?.()}),oe("click",g,()=>e.onclose?.()),ne(n,d),yn()}Hn(["click"]);var gm=de('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),vm=de('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),fc=de("<option> </option>"),_m=de('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),xm=de('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),bm=de('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),ym=de('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),Mm=de('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),Sm=de('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),Em=de('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),wm=de('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Tm=de('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),Am=de('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),Rm=de('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),Cm=de('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Pm=de('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),Lm=de('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),Dm=de('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),Im=de('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),Um=de('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>');function Nm(n,e){bn(e,!0);let t=lt(e,"groups",19,()=>[]);const i=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],r=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"fabric",label:"Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],a=["","fabric","quilt"],o=["fabric","quilt"],s="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let l=ge(null),c=ge(!0),d=ge(""),f=ge(""),p=ge(Pt(new Set(["release"]))),g=ge(""),v=ge(""),x=ge(""),m=ge(""),h=ge(""),E=ge(""),b=ge(Pt([])),S=ge("idle"),T=0,D=ge(!1),R=ge("");function O(he,ze){const Qe=window.__TAURI__?.core;return Qe?Qe.invoke(he,ze):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const M=wt(()=>{const he=u(l)?.versions??[],ze=u(f).trim().toLowerCase();return he.filter(Qe=>u(p).has(Qe.version_type)&&(!ze||Qe.id.toLowerCase().includes(ze)))}),A=wt(()=>!a.includes(u(h))),ce=wt(()=>o.includes(u(h))),Q=wt(()=>!!u(g)&&!u(A)&&!u(D)&&!(u(ce)&&u(S)==="loading"));function B(he){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[he]??he}function G(he){if(!he)return"—";const ze=new Date(he);if(Number.isNaN(ze.getTime()))return String(he).slice(0,10);const Qe=ut=>String(ut).padStart(2,"0");return`${Qe(ze.getDate())}/${Qe(ze.getMonth()+1)}/${ze.getFullYear()}`}function q(he){const ze=new Set(u(p));ze.has(he)?ze.delete(he):ze.add(he),y(p,ze,!0)}function k(){const he=window.__TAURI__?.core?.convertFileSrc;return u(m)&&he?he(u(m)):null}async function j(){const he=window.__TAURI__?.dialog?.open;if(!he){y(R,"Image picker unavailable in this build.");return}try{const ze=await he({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});ze&&(y(m,String(ze),!0),y(R,""))}catch(ze){y(R,String(ze),!0)}}async function ee(){if(!u(ce)||!u(g))return;const he=++T;y(S,"loading");try{const ze=await O("fetch_loader_versions",{loader:u(h),gameVersion:u(g)});if(he!==T)return;y(b,ze,!0),y(E,ze.find(Qe=>Qe.stable)?.version??ze[0]?.version??"",!0),y(S,ze.length?"idle":"error",!0)}catch{if(he!==T)return;y(b,[],!0),y(E,""),y(S,"error")}}async function le(he){y(g,he,!0),u(ce)&&await ee()}async function xe(he){y(h,he,!0),y(E,""),y(b,[],!0),y(S,"idle"),u(ce)&&await ee()}async function W(){y(c,!0),y(d,"");try{y(l,await O("fetch_vanilla_versions"),!0)}catch(he){y(d,String(he),!0)}finally{y(c,!1)}}async function X(){if(!u(Q))return;y(D,!0),y(R,"");const he=u(g),ze=u(v).trim()||he;try{const Qe=await O("create_instance",{name:ze,version:he,loader:u(h)||null,loaderVersion:u(E).trim()||null});let ut="";if(u(m))try{await O("set_instance_icon",{instanceId:Qe.id,imagePath:u(m)})}catch(vt){ut=`Instance created, but the icon could not be applied: ${vt}`}if(u(x).trim())try{await O("set_instance_group",{instanceId:Qe.id,group:u(x).trim()})}catch(vt){ut=ut?`${ut} The group could not be set: ${vt}`:`Instance created, but the group could not be set: ${vt}`}e.oncreated?.(Qe,ut)}catch(Qe){y(R,String(Qe),!0)}finally{y(D,!1)}}function Ce(){window.__TAURI__?.core?.invoke("open_path",{path:s}).catch(he=>y(R,String(he),!0))}nr(()=>{const he=to(()=>e.onclose?.());return W(),()=>no(he)});var Pe=Um(),Fe=F(Pe),Ge=F(Fe),Ye=F(Ge),We=F(Ye);{var we=he=>{var ze=gm(),Qe=Lt(ze);Ue(ut=>Je(Qe,"src",ut),[()=>k()]),ne(he,ze)},Be=wt(()=>k()),fe=he=>{var ze=vm();ne(he,ze)};qe(We,he=>{u(Be)?he(we):he(fe,-1)})}var U=C(Ye,2),je=F(U),Ae=C(je,2),$=C(F(Ae),2),be=F($);be.value=be.__value="";var Le=C(be);At(Le,16,t,he=>he,(he,ze)=>{var Qe=fc(),ut=ve(Qe,!0),vt={};Ue(()=>{_e(ut,ze),vt!==(vt=ze)&&(Qe.value=(Qe.__value=vt)??"")}),ne(he,Qe)}),Xs($);var ke=C(U,2),De=C(Ge,2),Z=F(De),ye=F(Z),Re=F(ye);{var w=he=>{var ze=_m();ne(he,ze)},_=he=>{var ze=xm(),Qe=F(ze),ut=ve(Qe,!0),vt=C(Qe,2);Ue(()=>_e(ut,u(d))),oe("click",vt,W),ne(he,ze)},I=he=>{var ze=Sm(),Qe=C(F(ze));At(Qe,21,()=>u(M),ut=>ut.id,(ut,vt)=>{var rn=ym(),St=F(rn),kt=F(St),ln=ve(kt,!0),ri=C(kt,2);{var Vn=se=>{var J=bm();ne(se,J)};qe(ri,se=>{u(vt).is_latest_release&&se(Vn)})}var ai=C(St),si=ve(ai,!0),P=C(ai),Y=ve(P,!0);Ue((se,J)=>{yt(rn,1,`cursor-pointer border-b border-(--border)/50 ${u(g)===u(vt).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),_e(ln,u(vt).id),_e(si,se),_e(Y,J)},[()=>G(u(vt).release_time),()=>B(u(vt).version_type)]),oe("click",rn,()=>le(u(vt).id)),oe("keydown",rn,se=>{(se.key==="Enter"||se.key===" ")&&(se.preventDefault(),le(u(vt).id))}),ne(ut,rn)},ut=>{var vt=Mm();ne(ut,vt)}),ne(he,ze)};qe(Re,he=>{u(c)?he(w):u(d)?he(_,1):he(I,-1)})}var ie=C(ye,2),ae=F(ie),te=C(ae,2),Se=ve(te),ue=C(Z,2),H=F(ue),L=C(F(H),2);At(L,21,()=>i,he=>he.id,(he,ze)=>{var Qe=Em(),ut=F(Qe),vt=C(ut,2),rn=ve(vt,!0);Ue(St=>{oc(ut,St),_e(rn,u(ze).label)},[()=>u(p).has(u(ze).id)]),oe("change",ut,()=>q(u(ze).id)),ne(he,Qe)});var re=C(H,2),Ne=C(F(re),2);At(Ne,21,()=>r,he=>he.id,(he,ze)=>{var Qe=wm(),ut=F(Qe),vt=C(ut,2),rn=ve(vt,!0);Ue(()=>{Xa(ut,u(ze).id),oc(ut,u(h)===u(ze).id),_e(rn,u(ze).label)}),oe("change",ut,()=>xe(u(ze).id)),ne(he,Qe)});var Me=C(Ne,2);{var me=he=>{var ze=Tm();ne(he,ze)},He=he=>{var ze=Am();ne(he,ze)};qe(Me,he=>{u(A)?he(me):u(h)||he(He,1)})}var $e=C(Me,2);{var N=he=>{var ze=Lm(),Qe=C(Lt(ze),2);{var ut=St=>{var kt=Rm();ne(St,kt)},vt=St=>{var kt=Cm(),ln=Lt(kt);Ot(ln,()=>u(E),ri=>y(E,ri)),ne(St,kt)},rn=St=>{var kt=Pm(),ln=F(kt);ln.value=ln.__value="";var ri=C(ln);At(ri,17,()=>u(b),Vn=>Vn.version,(Vn,ai)=>{var si=fc(),P=ve(si),Y={};Ue(()=>{_e(P,`${u(ai).version??""}${u(ai).stable?"":" (unstable)"}`),Y!==(Y=u(ai).version)&&(si.value=(si.__value=Y)??"")}),ne(Vn,si)}),Xs(kt),Ys(kt,()=>u(E),Vn=>y(E,Vn)),ne(St,kt)};qe(Qe,St=>{u(S)==="loading"?St(ut):u(S)==="error"?St(vt,1):St(rn,-1)})}ne(he,ze)};qe($e,he=>{u(ce)&&he(N)})}var Oe=C(De,2),K=F(Oe),Ee=C(K,2);{var Ie=he=>{var ze=Dm(),Qe=ve(ze,!0);Ue(()=>{Je(ze,"title",u(R)),_e(Qe,u(R))}),ne(he,ze)},Xe=he=>{var ze=Im(),Qe=ve(ze,!0);Ue(()=>_e(Qe,u(g)?`Selected Minecraft ${u(g)}`:"Pick a version to continue")),ne(he,ze)};qe(Ee,he=>{u(R)?he(Ie):he(Xe,-1)})}var et=C(Ee,2),st=C(et,2),Mt=ve(st,!0);Ue(()=>{Je(je,"placeholder",u(g)?`Instance name (${u(g)})`:"Instance name"),ae.disabled=!u(l),_e(Se,`${u(M).length??""} shown`),st.disabled=!u(Q),Je(st,"title",u(A)?"This mod loader is not supported yet.":"Create the instance"),_e(Mt,u(D)?"Creating…":"OK")}),oe("click",Pe,he=>{he.target===he.currentTarget&&e.onclose?.()}),oe("click",Ye,j),Ot(je,()=>u(v),he=>y(v,he)),Ys($,()=>u(x),he=>y(x,he)),oe("click",ke,()=>e.onclose?.()),Ot(ae,()=>u(f),he=>y(f,he)),oe("click",K,Ce),oe("click",et,()=>e.onclose?.()),oe("click",st,X),ne(n,Pe),yn()}Hn(["click","keydown","change"]);var Om=de('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Fm=de('<button class="w-full rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game">■ Kill</button>'),km=de("<button> </button>"),Bm=de('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),zm=de('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="w-full rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">▶ Launch</button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip">⤓ Export</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance">⧉ Copy</button> <button class="w-full rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance">⇱ Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Gm(n,e){bn(e,!0);let t=lt(e,"storage",3,null),i=lt(e,"gameRunning",3,!1),r=lt(e,"modsCount",3,null),a=lt(e,"groups",19,()=>[]),o=ge(!1),s=ge("");const l=wt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function c(){const $=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&$?$(e.instance.icon_path):"/logo.png"}function d(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function f($){const be=new Date($*1e3),Le=ke=>String(ke).padStart(2,"0");return`${Le(be.getDate())}/${Le(be.getMonth()+1)}/${be.getFullYear()} ${Le(be.getHours())}:${Le(be.getMinutes())}:${Le(be.getSeconds())}`}function p($){const be=Math.max(0,Math.floor($)),Le=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],ke=[];let De=be;for(const[Z,ye]of Le){const Re=Math.floor(De/Z);if(Re&&(ke.push(`${Re} ${ye}${Re===1?"":"s"}`),De-=Re*Z,ke.length===2))break}return ke.length?ke.join(" "):"0 seconds"}const g=wt(()=>{const $=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${$}, last played on ${f(e.instance.last_played)}, total played for ${p(e.instance.total_time_played)}`:$});function v($){y(o,!1),y(s,""),e.onchangegroup?.($.trim()?$.trim():null)}var x=zm(),m=F(x),h=ve(m),E=C(m,2),b=ve(E,!0),S=C(E,2),T=F(S),D=ve(T,!0),R=C(T,2),O=ve(R,!0),M=C(R,2);{var A=$=>{var be=Om(),Le=ve(be);Ue(()=>_e(Le,`▤ ${e.instance.group??""}`)),ne($,be)};qe(M,$=>{e.instance.group&&$(A)})}var ce=C(S,2),Q=ve(ce,!0),B=C(ce,2),G=F(B),q=C(G,2);{var k=$=>{var be=Fm();oe("click",be,function(...Le){e.onkill?.apply(this,Le)}),ne($,be)};qe(q,$=>{i()&&$(k)})}var j=C(q,2),ee=F(j);dn(ee,{emoji:"⚙"});var le=C(j,2),xe=C(F(le),2),W=ve(xe,!0),X=C(le,2);{var Ce=$=>{var be=Bm(),Le=F(be),ke=C(Le,2);At(ke,16,a,Re=>Re,(Re,w)=>{var _=km(),I=ve(_,!0);Ue(()=>{yt(_,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===w?"font-medium text-(--accent)":"text-(--text-muted)"}`),_e(I,w)}),oe("click",_,()=>v(w)),ne(Re,_)});var De=C(ke,2),Z=F(De),ye=C(Z,2);Ue(Re=>{yt(Le,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),ye.disabled=Re},[()=>!u(s).trim()]),oe("click",Le,()=>v("")),oe("keydown",Z,Re=>{Re.key==="Enter"&&u(s).trim()&&v(u(s))}),Ot(Z,()=>u(s),Re=>y(s,Re)),oe("click",ye,()=>v(u(s))),ne($,be)};qe(X,$=>{u(o)&&$(Ce)})}var Pe=C(X,2),Fe=F(Pe);dn(Fe,{emoji:"📂"});var Ge=C(Pe,2),Ye=C(Ge,2),We=C(Ye,2),we=C(We,2),Be=C(B,2),fe=F(Be),U=ve(fe,!0),je=C(fe,2),Ae=ve(je);Ue(($,be,Le)=>{Je(h,"src",$),Je(E,"title",e.instance.name),_e(b,e.instance.name),_e(D,e.instance.minecraft_version),yt(R,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${u(l)??""}`),_e(O,e.instance.loader_type),Je(ce,"title",be),_e(Q,Le),G.disabled=i(),Je(G,"title",i()?"A game is already running":`Launch ${e.instance.name}`),_e(W,u(o)?"▴":"▾"),Pe.disabled=!t(),Je(Pe,"title",t()?"Opens the instance folder":"Storage unknown"),_e(U,u(g)),_e(Ae,`${r()??"…"??""} mods installed`)},[()=>c(),()=>d(),()=>d()]),Ui("error",h,$=>{$.currentTarget.dataset.f||($.currentTarget.dataset.f="1",$.currentTarget.src="/logo.png")}),oe("click",G,function(...$){e.onlaunch?.apply(this,$)}),oe("click",j,function(...$){e.onedit?.apply(this,$)}),oe("click",le,()=>y(o,!u(o))),oe("click",Pe,function(...$){e.onopenfolder?.apply(this,$)}),oe("click",Ge,function(...$){e.onexport?.apply(this,$)}),oe("click",Ye,function(...$){e.oncopy?.apply(this,$)}),oe("click",We,function(...$){e.ondelete?.apply(this,$)}),oe("click",we,function(...$){e.onshortcut?.apply(this,$)}),ne(n,x),yn()}Hn(["click","keydown"]);const qa="twilight_user_accent",Nl="twilight_custom_themes",hc="#06B6D4",pc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],mc="#0F172A",Hm="#FFFFFF",Vm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function os(n){return Vm[n]??[]}function ts(n){let e=n.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function gc(n){const e=t=>{const i=parseInt(n.replace("#","").substring(t,t+2),16)/255;return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function Wm(n){const e=gc(n),t=1.05/(e+.05);return(e+.05)/(gc(mc)+.05)>=t?mc:Hm}function Ka(n,{persist:e=!0}={}){const t=ts(n);if(!t)return!1;const i=document.documentElement;return i.style.setProperty("--user-accent",t),i.style.setProperty("--on-accent",Wm(t)),e&&localStorage.setItem(qa,t),!0}function jm(){localStorage.removeItem(qa);const n=document.documentElement;n.style.removeProperty("--user-accent"),n.style.removeProperty("--on-accent")}function cl(){return ts(localStorage.getItem(qa)??"")}function Xm(){const n=cl();n&&Ka(n)}const io=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:pc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...pc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:os("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:os("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:os("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:os("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],Ol="twilight-dark",ul={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},Ym=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function qm(n){let e="";for(const t of n){const i=t.codePointAt(0);i>=65&&i<=90?e+=String.fromCharCode(i+32):i>=97&&i<=122||i>=48&&i<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function Xd(n){const e=n&&typeof n=="object"?n:{},t={};for(const[i,r]of Object.entries(ul))t[i]=ts(e[i]??"")??r;return t}function Km(n){return typeof n=="string"&&n.startsWith("custom:")}function Yd(n){return mr().find(e=>e.id===n)??null}function mr(){try{const n=JSON.parse(localStorage.getItem(Nl)??"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e=="object"&&Km(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:Xd(e.tokens)})):[]}catch{return[]}}function vc({name:n,dark:e,tokens:t}){const i=String(n??"").trim()||"Custom theme",r={id:`custom:${qm(i)||"theme"}`,name:i,dark:!!e,tokens:Xd(t)},a=[...mr().filter(o=>o.id!==r.id),r];return localStorage.setItem(Nl,JSON.stringify(a)),r}function Zm(n){const e=mr().filter(t=>t.id!==n);return localStorage.setItem(Nl,JSON.stringify(e)),e}function _c(){try{const n=getComputedStyle(document.documentElement),e=(i,r)=>{const a=n.getPropertyValue(i).trim();return ts(a)??r},t={};for(const[i,r]of Object.entries(ul)){const a=`--${i.replace(/(\d)$/,"-$1")}`;t[i]=e(a,r)}return t}catch{return{...ul}}}const Jm=new Set(io.map(n=>n.id));function qd(n){const e=(n??"").trim();return e==="dark"?Ol:e==="light"?"twilight-light":Jm.has(e)||Yd(e)?e:null}function Qm(n){const e=n.tokens;return{id:n.id,label:n.name,dark:n.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:n.name,hex:e.accent1}],tokens:e}}function na(n){const e=qd(n);return e?io.find(t=>t.id===e)??Qm(Yd(e)):null}function ls(n){return na(n)?.dark??!0}const $m=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let xo="";function eg(n){const e=na(n)??na(Ol);if(!e||e.id===xo)return e;const t=xo==="";xo=e.id;const i=document.documentElement;for(const r of $m)i.style.removeProperty(r);i.classList.toggle("dark",e.dark),i.classList.toggle("light",!e.dark);for(const r of io)r.cls&&i.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;i.style.setProperty("--bg-1",r.bg1),i.style.setProperty("--bg-2",r.bg2),i.style.setProperty("--bg-3",r.bg3),i.style.setProperty("--border-1",r.border1),i.style.setProperty("--fg-1",r.fg1),i.style.setProperty("--fg-2",r.fg2),i.style.setProperty("--accent-1",r.accent1),i.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(qa),Ka(r.accent1,{persist:!1})}else t||(localStorage.removeItem(qa),Ka(e.accent,{persist:!1}));return e}var tg=de("<button></button>"),ng=de('<span class="text-[11px] text-rose-400">invalid hex</span>'),ig=de('<span class="text-[11px] text-(--text-muted)">live preview</span>'),rg=de('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function ag(n,e){bn(e,!0);let t=lt(e,"theme",3,"twilight-dark");const i=wt(()=>na(t())?.accent??hc),r=wt(()=>{const b=na(t())?.suggested??[],S=(na(t())?.accent??hc).toLowerCase();return b.map(T=>({...T,isBuiltin:T.hex.toLowerCase()===S}))});let a=ge(Pt(cl())),o=ge(Pt(u(a)??u(i))),s=ge(!1);wn(()=>{t(),y(a,cl(),!0),y(o,u(a)??u(i),!0),y(s,!1)});function l(b){return u(a)===null?b.isBuiltin:u(a)===b.hex.toLowerCase()}function c(b){b.isBuiltin?(jm(),y(a,null)):Ka(b.hex)&&y(a,b.hex.toLowerCase(),!0),y(o,u(a)??u(i),!0),y(s,!1)}function d(b,S){const T=Ka(b,{persist:S})?ts(b):null;T?(y(a,T,!0),y(s,!1)):y(s,!0)}var f=rg(),p=Lt(f);At(p,21,()=>u(r),b=>b.hex,(b,S)=>{var T=tg();Ue((D,R)=>{yt(T,1,`h-7 w-7 rounded-full ${D??""}`),Ri(T,`background:${u(S).hex??""}`),Je(T,"title",`${u(S).name??""}${u(S).isBuiltin?" (built-in)":""}`),Je(T,"aria-label",`${u(S).name??""} accent`),Je(T,"aria-pressed",R)},[()=>l(u(S))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>l(u(S))]),oe("click",T,()=>c(u(S))),ne(b,T)});var g=C(p,2),v=F(g),x=C(v,2),m=C(x,2);{var h=b=>{var S=ng();ne(b,S)},E=b=>{var S=ig();ne(b,S)};qe(m,b=>{u(s)?b(h):b(E,-1)})}Ue(()=>{Xa(v,u(o)),Xa(x,u(o)),Je(x,"placeholder",u(i))}),oe("input",v,b=>{y(o,b.currentTarget.value,!0),d(u(o),!1)}),oe("change",v,b=>d(b.currentTarget.value,!0)),oe("input",x,b=>{y(o,b.currentTarget.value,!0),d(u(o),!1)}),oe("change",x,b=>d(b.currentTarget.value,!0)),ne(n,f),yn()}Hn(["click","input","change"]);var sg=de('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),og=de('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),lg=de('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),cg=de('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),xc=de('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),ug=de(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),dg=de("<option> </option>"),fg=de('<p class="mt-2 text-[12px] text-rose-400"> </p>'),hg=de('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!></select> <!> <!> <button class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)">↻ Rescan JREs</button> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),pg=de('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),mg=de('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),gg=de('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),vg=de('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),_g=de('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),xg=de('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),bg=de("<p> </p>"),yg=de('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function Mg(n,e){bn(e,!0);let t=lt(e,"version",3,""),i=lt(e,"theme",15,"twilight-dark"),r=lt(e,"storage",3,null),a=lt(e,"runtimes",19,()=>[]),o=lt(e,"scanning",3,!1),s=lt(e,"javaError",3,""),l=lt(e,"javaPath",15,""),c=lt(e,"minMem",15,0),d=lt(e,"maxMem",15,0);lt(e,"sharedInput",11,""),lt(e,"instancesInput",11,"");let f=lt(e,"storageBusy",3,!1),p=lt(e,"storageMsg",3,""),g=lt(e,"javaMsg",3,""),v=lt(e,"gameRunning",3,!1);const x=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"about",label:"About & Updates",icon:"ℹ"}];let m=ge("appearance"),h=ge(Pt(mr())),E=ge(""),b=ge(!0),S=ge(Pt(_c())),T=ge(""),D=ge("");function R(){y(S,_c(),!0),y(D,"Loaded the active theme’s tokens — tweak and save.")}function O(){try{const fe=vc({name:u(E),dark:u(b),tokens:u(S)});y(h,mr(),!0),i(fe.id),y(D,`Saved “${fe.name}”.`)}catch(fe){y(D,String(fe),!0)}}function M(fe){Zm(fe),y(h,mr(),!0),i()===fe&&i(Ol),y(D,"Theme deleted.")}function A(){y(T,JSON.stringify({name:u(E).trim()||"My theme",dark:u(b),tokens:u(S)},null,2),!0),y(D,"Theme JSON written below — copy it to share.")}function ce(){try{const fe=JSON.parse(u(T));if(!fe||typeof fe!="object"||Array.isArray(fe))throw new Error("Expected a theme object.");const U=vc(fe);y(h,mr(),!0),i(U.id),y(D,`Imported “${U.name}”.`),y(T,"")}catch(fe){y(D,`Import failed: ${fe}`)}}async function Q(fe){const U=window.__TAURI__?.dialog?.open;if(!U)return null;try{const je=await U({directory:!0,multiple:!1,defaultPath:fe&&fe.trim()?fe.trim():void 0});return typeof je=="string"?je:null}catch{return null}}const B=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let G=ge(Pt({}));wn(()=>{r()&&y(G,{instances:r().is_default_instances?"":r().instances_dir,shared:r().is_default_shared?"":r().shared_dir,versions:r().is_default_versions?"":r().versions_dir,mods:r().is_default_mods?"":r().mods_dir,icons:r().is_default_icons?"":r().icons_dir,java:r().is_default_java?"":r().java_dir,skins:r().is_default_skins?"":r().skins_dir,downloads:r().downloads_dir||""},!0)});function q(fe){return r()?fe==="downloads"?r().staging_root:r()[`${fe}_dir`]:""}function k(fe){return r()?fe==="downloads"?r().is_default_staging:r()[`is_default_${fe}`]:!0}const j="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var ee=yg(),le=F(ee),xe=F(le),W=C(xe,2);At(W,21,()=>x,fe=>fe.id,(fe,U)=>{var je=sg(),Ae=F(je),$=F(Ae);dn($,{get emoji(){return u(U).icon},size:15});var be=C(Ae,2),Le=ve(be,!0);Ue(()=>{yt(je,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${u(m)===u(U).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Je(je,"aria-current",u(m)===u(U).id?"true":void 0),_e(Le,u(U).label)}),oe("click",je,()=>y(m,u(U).id,!0)),ne(fe,je)});var X=C(le,2),Ce=F(X),Pe=F(Ce);{var Fe=fe=>{var U=ug(),je=C(Lt(U),6),Ae=F(je);At(Ae,17,()=>io,Me=>Me.id,(Me,me)=>{var He=og(),$e=F(He),N=F($e),Oe=C(N,2),K=C(Oe,2),Ee=C($e,2),Ie=ve(Ee,!0),Xe=C(Ee,2),et=ve(Xe,!0);Ue(()=>{yt(He,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===u(me).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Je(He,"aria-pressed",i()===u(me).id),Je(He,"title",`${u(me).label??""}: ${u(me).dark?"dark":"light"} ground`),Ri(N,`background:${u(me).swatch[0]??""}`),Ri(Oe,`background:${u(me).swatch[1]??""}`),Ri(K,`background:${u(me).swatch[2]??""}`),_e(Ie,u(me).label),_e(et,u(me).dark?"Dark ground":"Light ground")}),oe("click",He,()=>i(u(me).id)),ne(Me,He)});var $=C(Ae,2);At($,17,()=>u(h),Me=>Me.id,(Me,me)=>{var He=lg(),$e=F(He),N=F($e),Oe=C(N,2),K=C(Oe,2),Ee=C($e,2),Ie=ve(Ee,!0),Xe=C(Ee,2),et=ve(Xe),st=C(Xe,2);Ue(()=>{yt(He,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===u(me).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Je(He,"title",`${u(me).name??""}: ${u(me).dark?"dark":"light"} ground`),Ri(N,`background:${u(me).tokens.bg1??""}`),Ri(Oe,`background:${u(me).tokens.bg3??""}`),Ri(K,`background:${u(me).tokens.accent1??""}`),_e(Ie,u(me).name),_e(et,`Custom · ${u(me).dark?"Dark":"Light"} ground`),Je(st,"title",`Delete ${u(me).name??""}`),Je(st,"aria-label",`Delete ${u(me).name??""}`)}),oe("click",He,()=>i(u(me).id)),oe("keydown",He,Mt=>{(Mt.key==="Enter"||Mt.key===" ")&&(Mt.preventDefault(),i(u(me).id))}),oe("click",st,Mt=>{Mt.stopPropagation(),M(u(me).id)}),ne(Me,He)});var be=C(je,4),Le=F(be);ag(Le,{get theme(){return i()}});var ke=C(be,6),De=F(ke),Z=F(De),ye=C(Z,2),Re=F(ye),w=C(Re,2),_=C(De,2);At(_,21,()=>Ym,Me=>Me.key,(Me,me)=>{var He=cg(),$e=F(He),N=ve($e,!0),Oe=C($e,2),K=F(Oe),Ee=C(K,2);Ue(()=>{_e(N,u(me).label),Xa(K,u(S)[u(me).key]),Je(K,"title",`${u(me).label??""} color`),Je(K,"aria-label",`${u(me).label??""} color`),Xa(Ee,u(S)[u(me).key]),Je(Ee,"aria-label",`${u(me).label??""} hex`)}),oe("input",K,Ie=>y(S,{...u(S),[u(me).key]:Ie.currentTarget.value},!0)),oe("input",Ee,Ie=>y(S,{...u(S),[u(me).key]:Ie.currentTarget.value},!0)),ne(Me,He)});var I=C(_,2),ie=F(I),ae=C(ie,2),te=C(ke,4),Se=F(te),ue=C(Se,2),H=F(ue),L=C(H,2),re=C(te,2);{var Ne=Me=>{var me=xc(),He=ve(me,!0);Ue(()=>_e(He,u(D))),ne(Me,me)};qe(re,Me=>{u(D)&&Me(Ne)})}Ue(()=>{yt(Re,1,`px-3 py-1.5 text-[12px] ${u(b)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Je(Re,"aria-pressed",u(b)),yt(w,1,`px-3 py-1.5 text-[12px] ${u(b)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),Je(w,"aria-pressed",!u(b))}),Ot(Z,()=>u(E),Me=>y(E,Me)),oe("click",Re,()=>y(b,!0)),oe("click",w,()=>y(b,!1)),oe("click",ie,R),oe("click",ae,O),Ot(Se,()=>u(T),Me=>y(T,Me)),oe("click",H,A),oe("click",L,ce),ne(fe,U)},Ge=fe=>{var U=hg(),je=C(Lt(U),6),Ae=F(je);Ae.value=Ae.__value="";var $=C(Ae);At($,17,a,te=>te.executable,(te,Se)=>{var ue=dg(),H=ve(ue),L={};Ue(()=>{_e(H,`Java ${u(Se).major??""} — ${u(Se).home??""}`),L!==(L=u(Se).executable)&&(ue.value=(ue.__value=L)??"")}),ne(te,ue)}),Xs(je);var be=C(je,2);{var Le=te=>{var Se=xc(),ue=ve(Se,!0);Ue(()=>_e(ue,o()?"Probing system roots…":"No runtimes detected.")),ne(te,Se)};qe(be,te=>{a().length||te(Le)})}var ke=C(be,2);{var De=te=>{var Se=fg(),ue=ve(Se,!0);Ue(()=>_e(ue,s())),ne(te,Se)};qe(ke,te=>{s()&&te(De)})}var Z=C(ke,2),ye=C(Z,4),Re=C(F(ye),2),w=C(Re,2),_=C(ye,2),I=C(F(_),2),ie=C(I,2),ae=C(_,4);Ue(()=>Z.disabled=o()),Ys(je,l),oe("click",Z,function(...te){e.onscanjava?.apply(this,te)}),Ot(Re,c),Ot(w,c),Ot(I,d),Ot(ie,d),oe("click",ae,function(...te){e.onsaveprefs?.apply(this,te)}),ne(fe,U)},Ye=fe=>{var U=_g(),je=C(Lt(U),4);{var Ae=$=>{var be=vg(),Le=Lt(be),ke=F(Le),De=F(ke),Z=C(F(De),2),ye=ve(Z,!0),Re=C(De,2),w=C(Le,2);At(w,17,()=>B,_=>_.key,(_,I)=>{var ie=gg(),ae=F(ie),te=F(ae),Se=F(te),ue=C(Se),H=ve(ue,!0),L=C(te,2);{var re=Xe=>{var et=pg();Ue(()=>et.disabled=f()),oe("click",et,()=>e.onsavefolder?.(u(I).key,"")),ne(Xe,et)},Ne=wt(()=>!k(u(I).key));qe(L,Xe=>{u(Ne)&&Xe(re)})}var Me=C(ae,2),me=ve(Me,!0),He=C(Me,2),$e=F(He),N=C($e,2),Oe=C(N,2),K=C(Oe,2),Ee=C(He,2);{var Ie=Xe=>{var et=mg(),st=F(et),Mt=ve(st),he=C(st,2);Ue(()=>{Je(st,"title",r().staging_root),_e(Mt,`Staging: ${r().staging_root??""}`),he.disabled=f()||v(),Je(he,"title",v()?"Unavailable while a game is running":"Purges the staging area")}),oe("click",he,function(...ze){e.oncleanstaging?.apply(this,ze)}),ne(Xe,et)};qe(Ee,Xe=>{u(I).key==="downloads"&&Xe(Ie)})}Ue((Xe,et)=>{_e(Se,`${u(I).label??""} `),_e(H,Xe),_e(me,u(I).hint),Je($e,"placeholder",et),K.disabled=f()},[()=>k(u(I).key)?"(default)":"(custom)",()=>q(u(I).key)]),Ot($e,()=>u(G)[u(I).key],Xe=>u(G)[u(I).key]=Xe),oe("click",N,async()=>{const Xe=await Q(u(G)[u(I).key]);Xe&&(u(G)[u(I).key]=Xe)}),oe("click",Oe,()=>e.onopenfolder?.(q(u(I).key))),oe("click",K,()=>e.onsavefolder?.(u(I).key,u(G)[u(I).key])),ne(_,ie)}),Ue(()=>{Je(Z,"title",r().app_data),_e(ye,r().app_data)}),oe("click",Re,()=>e.onopenfolder?.(r().app_data)),ne($,be)};qe(je,$=>{r()&&$(Ae)})}ne(fe,U)},We=fe=>{var U=xg(),je=C(Lt(U),4),Ae=F(je),$=C(F(Ae),2),be=F($),Le=C(F(be)),ke=ve(Le),De=C(je,2),Z=F(De),ye=C(Z,2),Re=C(ye,2);Ue(()=>_e(ke,`(alpha-v${t()??""})`)),oe("click",Z,()=>e.onopenurl?.(`${j}`)),oe("click",ye,()=>e.onopenurl?.(`${j}/releases`)),oe("click",Re,()=>e.onopenurl?.(`${j}/issues`)),ne(fe,U)};qe(Pe,fe=>{u(m)==="appearance"?fe(Fe):u(m)==="java"?fe(Ge,1):u(m)==="storage"?fe(Ye,2):fe(We,-1)})}var we=C(Pe,2);{var Be=fe=>{var U=bg(),je=ve(U,!0);Ue(()=>{yt(U,1,`mt-5 text-[12px] ${g()?"text-(--accent)":"text-(--text-muted)"}`),_e(je,g()||p())}),ne(fe,U)};qe(we,fe=>{(g()||p())&&fe(Be)})}oe("click",xe,function(...fe){e.onback?.apply(this,fe)}),ne(n,ee),yn()}Hn(["click","keydown","input"]);const Fl="156",Rr={ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sg=0,bc=1,Eg=2,Kd=1,wg=2,Ti=3,vi=0,An=1,zn=2,Ni=0,ia=1,yc=2,Mc=3,Sc=4,Tg=5,Zr=100,Ag=101,Rg=102,Ec=103,wc=104,Cg=200,Pg=201,Lg=202,Dg=203,Zd=204,Jd=205,Ig=206,Ug=207,Ng=208,Og=209,Fg=210,kg=0,Bg=1,zg=2,dl=3,Gg=4,Hg=5,Vg=6,Wg=7,Qd=0,jg=1,Xg=2,Ji=0,Yg=1,qg=2,Kg=3,Zg=4,Jg=5,$d=300,ua=301,da=302,qs=303,fl=304,ro=306,hl=1e3,Zn=1001,pl=1002,Ft=1003,Tc=1004,bo=1005,kn=1006,Qg=1007,Za=1008,Qi=1009,$g=1010,ev=1011,kl=1012,ef=1013,Ki=1014,Li=1015,fa=1016,tf=1017,nf=1018,xr=1020,tv=1021,Jn=1023,nv=1024,iv=1025,br=1026,ha=1027,rv=1028,rf=1029,av=1030,af=1031,sf=1033,yo=33776,Mo=33777,So=33778,Eo=33779,Ac=35840,Rc=35841,Cc=35842,Pc=35843,sv=36196,Lc=37492,Dc=37496,Ic=37808,Uc=37809,Nc=37810,Oc=37811,Fc=37812,kc=37813,Bc=37814,zc=37815,Gc=37816,Hc=37817,Vc=37818,Wc=37819,jc=37820,Xc=37821,wo=36492,Yc=36494,qc=36495,ov=36283,Kc=36284,Zc=36285,Jc=36286,of=3e3,yr=3001,lv=3200,cv=3201,lf=0,uv=1,Mr="",It="srgb",_i="srgb-linear",ao="display-p3",To=7680,dv=519,fv=512,hv=513,pv=514,mv=515,gv=516,vv=517,_v=518,xv=519,ml=35044,Qc="300 es",gl=1035,Di=2e3,Ks=2001;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fs=Math.PI/180,vl=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function _n(n,e,t){return Math.max(e,Math.min(t,n))}function bv(n,e){return(n%e+e)%e}function Ao(n,e,t){return(1-t)*n+t*e}function $c(n){return(n&n-1)===0&&n!==0}function _l(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yv={DEG2RAD:Fs};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,r,a,o,s,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],g=i[5],v=i[8],x=r[0],m=r[3],h=r[6],E=r[1],b=r[4],S=r[7],T=r[2],D=r[5],R=r[8];return a[0]=o*x+s*E+l*T,a[3]=o*m+s*b+l*D,a[6]=o*h+s*S+l*R,a[1]=c*x+d*E+f*T,a[4]=c*m+d*b+f*D,a[7]=c*h+d*S+f*R,a[2]=p*x+g*E+v*T,a[5]=p*m+g*b+v*D,a[8]=p*h+g*S+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*s*c-i*a*d+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=d*o-s*c,p=s*l-d*a,g=c*a-o*l,v=t*f+i*p+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(s*i-r*o)*x,e[3]=p*x,e[4]=(d*t-r*l)*x,e[5]=(r*a-s*t)*x,e[6]=g*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new pt;function cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mv(){const n=Zs("canvas");return n.style.display="block",n}const eu={};function za(n){n in eu||(eu[n]=!0,console.warn(n))}function ra(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Sv=new pt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ev=new pt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function wv(n){return n.convertSRGBToLinear().applyMatrix3(Ev)}function Tv(n){return n.applyMatrix3(Sv).convertLinearToSRGB()}const Av={[_i]:n=>n,[It]:n=>n.convertSRGBToLinear(),[ao]:wv},Rv={[_i]:n=>n,[It]:n=>n.convertLinearToSRGB(),[ao]:Tv},Nn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return _i},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Av[e],r=Rv[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Pr;class uf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=Zs("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ra(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ra(t[i]/255)*255):t[i]=ra(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cv=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Po(r[o].image)):a.push(Po(r[o]))}else a=Po(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pv=0;class fn extends wr{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Zn,r=Zn,a=kn,o=Za,s=Jn,l=Qi,c=fn.DEFAULT_ANISOTROPY,d=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=$i(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===yr?It:Mr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hl:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hl:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?yr:of}set encoding(e){za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?It:Mr}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=$d;fn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],g=l[5],v=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(g+1)/2,T=(h+1)/2,D=(d+p)/4,R=(f+x)/4,O=(v+m)/4;return b>S&&b>T?b<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(b),r=D/i,a=R/i):S>T?S<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),i=D/r,a=O/r):T<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(T),i=R/a,r=O/a),this.set(i,r,a,t),this}let E=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(f-x)/E,this.z=(p-d)/E,this.w=Math.acos((c+g+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lv extends wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(za("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?It:Mr),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:kn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Lv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ff extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dv extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=a[o+0],g=a[o+1],v=a[o+2],x=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(s===1){e[t+0]=p,e[t+1]=g,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==p||c!==g||d!==v){let m=1-s;const h=l*p+c*g+d*v+f*x,E=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const T=Math.sqrt(b),D=Math.atan2(T,h*E);m=Math.sin(m*D)/T,s=Math.sin(s*D)/T}const S=s*E;if(l=l*m+p*S,c=c*m+g*S,d=d*m+v*S,f=f*m+x*S,m===1-s){const T=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=T,c*=T,d*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=a[o],p=a[o+1],g=a[o+2],v=a[o+3];return e[t]=s*v+d*f+l*g-c*p,e[t+1]=l*v+d*p+c*f-s*g,e[t+2]=c*v+d*g+s*p-l*f,e[t+3]=d*v-s*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),d=s(r/2),f=s(a/2),p=l(i/2),g=l(r/2),v=l(a/2);switch(o){case"XYZ":this._x=p*d*f+c*g*v,this._y=c*g*f-p*d*v,this._z=c*d*v+p*g*f,this._w=c*d*f-p*g*v;break;case"YXZ":this._x=p*d*f+c*g*v,this._y=c*g*f-p*d*v,this._z=c*d*v-p*g*f,this._w=c*d*f+p*g*v;break;case"ZXY":this._x=p*d*f-c*g*v,this._y=c*g*f+p*d*v,this._z=c*d*v+p*g*f,this._w=c*d*f-p*g*v;break;case"ZYX":this._x=p*d*f-c*g*v,this._y=c*g*f+p*d*v,this._z=c*d*v-p*g*f,this._w=c*d*f+p*g*v;break;case"YZX":this._x=p*d*f+c*g*v,this._y=c*g*f+p*d*v,this._z=c*d*v-p*g*f,this._w=c*d*f-p*g*v;break;case"XZY":this._x=p*d*f-c*g*v,this._y=c*g*f-p*d*v,this._z=c*d*v+p*g*f,this._w=c*d*f+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],d=t[6],f=t[10],p=i+s+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(a-c)*g,this._z=(o-r)*g}else if(i>s&&i>f){const g=2*Math.sqrt(1+i-s-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(a+c)/g}else if(s>f){const g=2*Math.sqrt(1+s-i-f);this._w=(a-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-s);this._w=(o-r)/g,this._x=(a+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*s+r*c-a*l,this._y=r*d+o*l+a*s-i*c,this._z=a*d+o*c+i*l-r*s,this._w=o*d-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,s),f=Math.sin((1-t)*d)/c,p=Math.sin(t*d)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*r-s*i,d=l*i+s*t-a*r,f=l*r+a*i-o*t,p=-a*t-o*i-s*r;return this.x=c*l+p*-a+d*-s-f*-o,this.y=d*l+p*-o+f*-a-c*-s,this.z=f*l+p*-s+c*-o-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new V,tu=new Er;class ns{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox),Lr.applyMatrix4(e.matrixWorld),this.union(Lr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)yi.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(yi)}else r.boundingBox===null&&r.computeBoundingBox(),Lr.copy(r.boundingBox),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),cs.subVectors(this.max,wa),Dr.subVectors(e.a,wa),Ir.subVectors(e.b,wa),Ur.subVectors(e.c,wa),Wi.subVectors(Ir,Dr),ji.subVectors(Ur,Ir),ar.subVectors(Dr,Ur);let t=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-ar.z,ar.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,ar.z,0,-ar.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-ar.y,ar.x,0];return!Do(t,Dr,Ir,Ur,cs)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,Dr,Ir,Ur,cs))?!1:(us.crossVectors(Wi,ji),t=[us.x,us.y,us.z],Do(t,Dr,Ir,Ur,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new V,new V,new V,new V,new V,new V,new V,new V],yi=new V,Lr=new ns,Dr=new V,Ir=new V,Ur=new V,Wi=new V,ji=new V,ar=new V,wa=new V,cs=new V,us=new V,sr=new V;function Do(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){sr.fromArray(n,a);const s=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),d=i.dot(sr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}const Iv=new ns,Ta=new V,Io=new V;class Bl{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Iv.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(Io)),this.expandByPoint(Ta.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new V,Uo=new V,ds=new V,Xi=new V,No=new V,fs=new V,Oo=new V;class hf{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uo.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Uo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ds),s=Xi.dot(this.direction),l=-Xi.dot(ds),c=Xi.lengthSq(),d=Math.abs(1-o*o);let f,p,g,v;if(d>0)if(f=o*l-s,p=o*s-l,v=a*d,f>=0)if(p>=-v)if(p<=v){const x=1/d;f*=x,p*=x,g=f*(f+o*p+2*s)+p*(o*f+p+2*l)+c}else p=a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p<=-v?(f=Math.max(0,-(-o*a+s)),p=f>0?-a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c):p<=v?(f=0,p=Math.min(Math.max(-a,-l),a),g=p*(p+2*l)+c):(f=Math.max(0,-(o*a+s)),p=f>0?a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c);else p=o>0?-a:a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Uo).addScaledVector(ds,p),g}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(a=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(a=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(s=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,r,a){No.subVectors(t,e),fs.subVectors(i,e),Oo.crossVectors(No,fs);let o=this.direction.dot(Oo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=s*this.direction.dot(fs.crossVectors(Xi,fs));if(l<0)return null;const c=s*this.direction.dot(No.cross(Xi));if(c<0||l+c>o)return null;const d=-s*Xi.dot(Oo);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,i,r,a,o,s,l,c,d,f,p,g,v,x,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,d,f,p,g,v,x,m)}set(e,t,i,r,a,o,s,l,c,d,f,p,g,v,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=p,h[3]=g,h[7]=v,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),a=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=o*d,g=o*f,v=s*d,x=s*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=g+v*c,t[5]=p-x*c,t[9]=-s*l,t[2]=x-p*c,t[6]=v+g*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*d,g=l*f,v=c*d,x=c*f;t[0]=p+x*s,t[4]=v*s-g,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-s,t[2]=g*s-v,t[6]=x+p*s,t[10]=o*l}else if(e.order==="ZXY"){const p=l*d,g=l*f,v=c*d,x=c*f;t[0]=p-x*s,t[4]=-o*f,t[8]=v+g*s,t[1]=g+v*s,t[5]=o*d,t[9]=x-p*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const p=o*d,g=o*f,v=s*d,x=s*f;t[0]=l*d,t[4]=v*c-g,t[8]=p*c+x,t[1]=l*f,t[5]=x*c+p,t[9]=g*c-v,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,g=o*c,v=s*l,x=s*c;t[0]=l*d,t[4]=x-p*f,t[8]=v*f+g,t[1]=f,t[5]=o*d,t[9]=-s*d,t[2]=-c*d,t[6]=g*f+v,t[10]=p-x*f}else if(e.order==="XZY"){const p=o*l,g=o*c,v=s*l,x=s*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=p*f+x,t[5]=o*d,t[9]=g*f-v,t[2]=v*f-g,t[6]=s*d,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uv,e,Nv)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Yi.crossVectors(i,Rn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Yi.crossVectors(i,Rn)),Yi.normalize(),hs.crossVectors(Rn,Yi),r[0]=Yi.x,r[4]=hs.x,r[8]=Rn.x,r[1]=Yi.y,r[5]=hs.y,r[9]=Rn.y,r[2]=Yi.z,r[6]=hs.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],g=i[13],v=i[2],x=i[6],m=i[10],h=i[14],E=i[3],b=i[7],S=i[11],T=i[15],D=r[0],R=r[4],O=r[8],M=r[12],A=r[1],ce=r[5],Q=r[9],B=r[13],G=r[2],q=r[6],k=r[10],j=r[14],ee=r[3],le=r[7],xe=r[11],W=r[15];return a[0]=o*D+s*A+l*G+c*ee,a[4]=o*R+s*ce+l*q+c*le,a[8]=o*O+s*Q+l*k+c*xe,a[12]=o*M+s*B+l*j+c*W,a[1]=d*D+f*A+p*G+g*ee,a[5]=d*R+f*ce+p*q+g*le,a[9]=d*O+f*Q+p*k+g*xe,a[13]=d*M+f*B+p*j+g*W,a[2]=v*D+x*A+m*G+h*ee,a[6]=v*R+x*ce+m*q+h*le,a[10]=v*O+x*Q+m*k+h*xe,a[14]=v*M+x*B+m*j+h*W,a[3]=E*D+b*A+S*G+T*ee,a[7]=E*R+b*ce+S*q+T*le,a[11]=E*O+b*Q+S*k+T*xe,a[15]=E*M+b*B+S*j+T*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],g=e[14],v=e[3],x=e[7],m=e[11],h=e[15];return v*(+a*l*f-r*c*f-a*s*p+i*c*p+r*s*g-i*l*g)+x*(+t*l*g-t*c*p+a*o*p-r*o*g+r*c*d-a*l*d)+m*(+t*c*f-t*s*g-a*o*f+i*o*g+a*s*d-i*c*d)+h*(-r*s*d-t*l*f+t*s*p+r*o*f-i*o*p+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],g=e[11],v=e[12],x=e[13],m=e[14],h=e[15],E=f*m*c-x*p*c+x*l*g-s*m*g-f*l*h+s*p*h,b=v*p*c-d*m*c-v*l*g+o*m*g+d*l*h-o*p*h,S=d*x*c-v*f*c+v*s*g-o*x*g-d*s*h+o*f*h,T=v*f*l-d*x*l-v*s*p+o*x*p+d*s*m-o*f*m,D=t*E+i*b+r*S+a*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=E*R,e[1]=(x*p*a-f*m*a-x*r*g+i*m*g+f*r*h-i*p*h)*R,e[2]=(s*m*a-x*l*a+x*r*c-i*m*c-s*r*h+i*l*h)*R,e[3]=(f*l*a-s*p*a-f*r*c+i*p*c+s*r*g-i*l*g)*R,e[4]=b*R,e[5]=(d*m*a-v*p*a+v*r*g-t*m*g-d*r*h+t*p*h)*R,e[6]=(v*l*a-o*m*a-v*r*c+t*m*c+o*r*h-t*l*h)*R,e[7]=(o*p*a-d*l*a+d*r*c-t*p*c-o*r*g+t*l*g)*R,e[8]=S*R,e[9]=(v*f*a-d*x*a-v*i*g+t*x*g+d*i*h-t*f*h)*R,e[10]=(o*x*a-v*s*a+v*i*c-t*x*c-o*i*h+t*s*h)*R,e[11]=(d*s*a-o*f*a-d*i*c+t*f*c+o*i*g-t*s*g)*R,e[12]=T*R,e[13]=(d*x*r-v*f*r+v*i*p-t*x*p-d*i*m+t*f*m)*R,e[14]=(v*s*r-o*x*r-v*i*l+t*x*l+o*i*m-t*s*m)*R,e[15]=(o*f*r-d*s*r+d*i*l-t*f*l-o*i*p+t*s*p)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,d=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,d*s+i,d*l-r*o,0,c*l-r*s,d*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,d=o+o,f=s+s,p=a*c,g=a*d,v=a*f,x=o*d,m=o*f,h=s*f,E=l*c,b=l*d,S=l*f,T=i.x,D=i.y,R=i.z;return r[0]=(1-(x+h))*T,r[1]=(g+S)*T,r[2]=(v-b)*T,r[3]=0,r[4]=(g-S)*D,r[5]=(1-(p+h))*D,r[6]=(m+E)*D,r[7]=0,r[8]=(v+b)*R,r[9]=(m-E)*R,r[10]=(1-(p+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),s=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/a,d=1/o,f=1/s;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Di){const l=this.elements,c=2*a/(t-e),d=2*a/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(s===Di)g=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(s===Ks)g=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Di){const l=this.elements,c=1/(t-e),d=1/(i-r),f=1/(o-a),p=(t+e)*c,g=(i+r)*d;let v,x;if(s===Di)v=(o+a)*f,x=-2*f;else if(s===Ks)v=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Nr=new V,Yn=new jt,Uv=new V(0,0,0),Nv=new V(1,1,1),Yi=new V,hs=new V,Rn=new V,nu=new jt,iu=new Er;class so{constructor(e=0,t=0,i=0,r=so.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(_n(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(_n(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-_n(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}so.DEFAULT_ORDER="XYZ";class pf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ov=0;const ru=new V,Or=new Er,Si=new jt,ps=new V,Aa=new V,Fv=new V,kv=new Er,au=new V(1,0,0),su=new V(0,1,0),ou=new V(0,0,1),Bv={type:"added"},zv={type:"removed"};class hn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new V,t=new so,i=new Er,r=new V(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new pt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ps.copy(e):ps.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Aa,ps,this.up):Si.lookAt(ps,Aa,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(Si),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,Fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),v=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new V(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new V,Ei=new V,Fo=new V,wi=new V,Fr=new V,kr=new V,lu=new V,ko=new V,Bo=new V,zo=new V;let ms=!1;class Bn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){qn.subVectors(r,t),Ei.subVectors(i,t),Fo.subVectors(e,t);const o=qn.dot(qn),s=qn.dot(Ei),l=qn.dot(Fo),c=Ei.dot(Ei),d=Ei.dot(Fo),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const p=1/f,g=(c*l-s*d)*p,v=(o*d-s*l)*p;return a.set(1-g-v,v,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi),wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,i,r,a,o,s,l){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,wi),l.setScalar(0),l.addScaledVector(a,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(s,wi.z),l}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),Ei.subVectors(e,t),qn.cross(Ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),qn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;Fr.subVectors(r,i),kr.subVectors(a,i),ko.subVectors(e,i);const l=Fr.dot(ko),c=kr.dot(ko);if(l<=0&&c<=0)return t.copy(i);Bo.subVectors(e,r);const d=Fr.dot(Bo),f=kr.dot(Bo);if(d>=0&&f<=d)return t.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Fr,o);zo.subVectors(e,a);const g=Fr.dot(zo),v=kr.dot(zo);if(v>=0&&g<=v)return t.copy(a);const x=g*c-l*v;if(x<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(i).addScaledVector(kr,s);const m=d*v-g*f;if(m<=0&&f-d>=0&&g-v>=0)return lu.subVectors(a,r),s=(f-d)/(f-d+(g-v)),t.copy(r).addScaledVector(lu,s);const h=1/(m+x+p);return o=x*h,s=p*h,t.copy(i).addScaledVector(Fr,o).addScaledVector(kr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gv=0;class xa extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=ia,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Jd,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ia&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Go(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Nn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Nn.workingColorSpace){if(e=bv(e,1),t=_n(t,0,1),i=_n(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Go(o,a,e+1/3),this.g=Go(o,a,e),this.b=Go(o,a,e-1/3)}return Nn.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=mf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Nn.fromWorkingColorSpace(un.copy(this),e),Math.round(_n(un.r*255,0,255))*65536+Math.round(_n(un.g*255,0,255))*256+Math.round(_n(un.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nn.workingColorSpace){Nn.fromWorkingColorSpace(un.copy(this),t);const i=un.r,r=un.g,a=un.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const d=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=d<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Nn.workingColorSpace){return Nn.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=It){Nn.fromWorkingColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),Kn.h+=e,Kn.s+=t,Kn.l+=i,this.setHSL(Kn.h,Kn.s,Kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(gs);const i=Ao(Kn.h,gs.h,t),r=Ao(Kn.s,gs.s,t),a=Ao(Kn.l,gs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new bt;bt.NAMES=mf;class gf extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new V,vs=new tt;class ni{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ml,this.updateRange={offset:0,count:-1},this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array),a=Et(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class vf extends ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _f extends ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Oi extends ni{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hv=0;const In=new jt,Ho=new hn,Br=new V,Cn=new ns,Ra=new ns,nn=new V;class Gi extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?_f:vf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Cn.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Ra.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(Cn.min,Ra.min),Cn.expandByPoint(nn),nn.addVectors(Cn.max,Ra.max),Cn.expandByPoint(nn)):(Cn.expandByPoint(Ra.min),Cn.expandByPoint(Ra.max))}Cn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)nn.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(nn));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)nn.fromBufferAttribute(s,c),l&&(Br.fromBufferAttribute(e,c),nn.add(Br)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let A=0;A<s;A++)c[A]=new V,d[A]=new V;const f=new V,p=new V,g=new V,v=new tt,x=new tt,m=new tt,h=new V,E=new V;function b(A,ce,Q){f.fromArray(r,A*3),p.fromArray(r,ce*3),g.fromArray(r,Q*3),v.fromArray(o,A*2),x.fromArray(o,ce*2),m.fromArray(o,Q*2),p.sub(f),g.sub(f),x.sub(v),m.sub(v);const B=1/(x.x*m.y-m.x*x.y);isFinite(B)&&(h.copy(p).multiplyScalar(m.y).addScaledVector(g,-x.y).multiplyScalar(B),E.copy(g).multiplyScalar(x.x).addScaledVector(p,-m.x).multiplyScalar(B),c[A].add(h),c[ce].add(h),c[Q].add(h),d[A].add(E),d[ce].add(E),d[Q].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let A=0,ce=S.length;A<ce;++A){const Q=S[A],B=Q.start,G=Q.count;for(let q=B,k=B+G;q<k;q+=3)b(i[q+0],i[q+1],i[q+2])}const T=new V,D=new V,R=new V,O=new V;function M(A){R.fromArray(a,A*3),O.copy(R);const ce=c[A];T.copy(ce),T.sub(R.multiplyScalar(R.dot(ce))).normalize(),D.crossVectors(O,ce);const B=D.dot(d[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=B}for(let A=0,ce=S.length;A<ce;++A){const Q=S[A],B=Q.start,G=Q.count;for(let q=B,k=B+G;q<k;q+=3)M(i[q+0]),M(i[q+1]),M(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new V,a=new V,o=new V,s=new V,l=new V,c=new V,d=new V,f=new V;if(e)for(let p=0,g=e.count;p<g;p+=3){const v=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,a),f.subVectors(r,a),d.cross(f),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),s.add(d),l.add(d),c.add(d),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,a),f.subVectors(r,a),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(s,l){const c=s.array,d=s.itemSize,f=s.normalized,p=new c.constructor(l.length*d);let g=0,v=0;for(let x=0,m=l.length;x<m;x++){s.isInterleavedBufferAttribute?g=l[x]*s.data.stride+s.offset:g=l[x]*d;for(let h=0;h<d;h++)p[v++]=c[g++]}return new ni(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gi,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let d=0,f=c.length;d<f;d++){const p=c[d],g=e(p,i);l.push(g)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let p=0,g=f.length;p<g;p++)d.push(f[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new jt,or=new hf,_s=new Bl,uu=new V,zr=new V,Gr=new V,Hr=new V,Vo=new V,xs=new V,bs=new tt,ys=new tt,Ms=new tt,du=new V,fu=new V,hu=new V,Ss=new V,Es=new V;class Tt extends hn{constructor(e=new Gi,t=new gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){xs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=s[l],f=a[l];d!==0&&(Vo.fromBufferAttribute(f,e),o?xs.addScaledVector(Vo,d):xs.addScaledVector(Vo.sub(t),d))}t.add(xs)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(a),or.copy(e.ray).recast(e.near),!(_s.containsPoint(or.origin)===!1&&(or.intersectSphere(_s,uu)===null||or.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(cu.copy(a).invert(),or.copy(e.ray).applyMatrix4(cu),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const m=p[v],h=o[m.materialIndex],E=Math.max(m.start,g.start),b=Math.min(s.count,Math.min(m.start+m.count,g.start+g.count));for(let S=E,T=b;S<T;S+=3){const D=s.getX(S),R=s.getX(S+1),O=s.getX(S+2);r=ws(this,h,e,i,c,d,f,D,R,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),x=Math.min(s.count,g.start+g.count);for(let m=v,h=x;m<h;m+=3){const E=s.getX(m),b=s.getX(m+1),S=s.getX(m+2);r=ws(this,o,e,i,c,d,f,E,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const m=p[v],h=o[m.materialIndex],E=Math.max(m.start,g.start),b=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=E,T=b;S<T;S+=3){const D=S,R=S+1,O=S+2;r=ws(this,h,e,i,c,d,f,D,R,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=v,h=x;m<h;m+=3){const E=m,b=m+1,S=m+2;r=ws(this,o,e,i,c,d,f,E,b,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Vv(n,e,t,i,r,a,o,s){let l;if(e.side===An?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===vi,s),l===null)return null;Es.copy(s),Es.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Es);return c<t.near||c>t.far?null:{distance:c,point:Es.clone(),object:n}}function ws(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,zr),n.getVertexPosition(l,Gr),n.getVertexPosition(c,Hr);const d=Vv(n,e,t,i,zr,Gr,Hr,Ss);if(d){r&&(bs.fromBufferAttribute(r,s),ys.fromBufferAttribute(r,l),Ms.fromBufferAttribute(r,c),d.uv=Bn.getInterpolation(Ss,zr,Gr,Hr,bs,ys,Ms,new tt)),a&&(bs.fromBufferAttribute(a,s),ys.fromBufferAttribute(a,l),Ms.fromBufferAttribute(a,c),d.uv1=Bn.getInterpolation(Ss,zr,Gr,Hr,bs,ys,Ms,new tt),d.uv2=d.uv1),o&&(du.fromBufferAttribute(o,s),fu.fromBufferAttribute(o,l),hu.fromBufferAttribute(o,c),d.normal=Bn.getInterpolation(Ss,zr,Gr,Hr,du,fu,hu,new V),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new V,materialIndex:0};Bn.getNormal(zr,Gr,Hr,f.normal),d.face=f}return d}class Vt extends Gi{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],d=[],f=[];let p=0,g=0;v("z","y","x",-1,-1,i,t,e,o,a,0),v("z","y","x",1,-1,i,t,-e,o,a,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Oi(c,3)),this.setAttribute("normal",new Oi(d,3)),this.setAttribute("uv",new Oi(f,2));function v(x,m,h,E,b,S,T,D,R,O,M){const A=S/R,ce=T/O,Q=S/2,B=T/2,G=D/2,q=R+1,k=O+1;let j=0,ee=0;const le=new V;for(let xe=0;xe<k;xe++){const W=xe*ce-B;for(let X=0;X<q;X++){const Ce=X*A-Q;le[x]=Ce*E,le[m]=W*b,le[h]=G,c.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[h]=D>0?1:-1,d.push(le.x,le.y,le.z),f.push(X/R),f.push(1-xe/O),j+=1}}for(let xe=0;xe<O;xe++)for(let W=0;W<R;W++){const X=p+W+q*xe,Ce=p+W+q*(xe+1),Pe=p+(W+1)+q*(xe+1),Fe=p+(W+1)+q*xe;l.push(X,Ce,Fe),l.push(Ce,Pe,Fe),ee+=6}s.addGroup(g,ee,M),g+=ee,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=pa(n[t]);for(const r in i)e[r]=i[r]}return e}function Wv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xf(n){return n.getRenderTarget()===null?n.outputColorSpace:_i}const bf={clone:pa,merge:vn};var jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jv,this.fragmentShader=Xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=Wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yf extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends yf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=-90,Wr=1;class Yv extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Ln(Vr,Wr,e,t);r.layers=this.layers,this.add(r);const a=new Ln(Vr,Wr,e,t);a.layers=this.layers,this.add(a);const o=new Ln(Vr,Wr,e,t);o.layers=this.layers,this.add(o);const s=new Ln(Vr,Wr,e,t);s.layers=this.layers,this.add(s);const l=new Ln(Vr,Wr,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Vr,Wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,l,c]=this.children,d=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Mf extends fn{constructor(e,t,i,r,a,o,s,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ua,super(e,t,i,r,a,o,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qv extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(za("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yr?It:Mr),this.texture=new Mf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vt(5,5,5),a=new Bi({name:"CubemapFromEquirect",uniforms:pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Ni});a.uniforms.tEquirect.value=t;const o=new Tt(r,a),s=t.minFilter;return t.minFilter===Za&&(t.minFilter=kn),new Yv(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const Wo=new V,Kv=new V,Zv=new pt;class qi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wo.subVectors(i,t).cross(Kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zv.getNormalMatrix(e),r=this.coplanarPoint(Wo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Bl,Ts=new V;class zl{constructor(e=new qi,t=new qi,i=new qi,r=new qi,a=new qi,o=new qi){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],g=r[8],v=r[9],x=r[10],m=r[11],h=r[12],E=r[13],b=r[14],S=r[15];if(i[0].setComponents(l-a,p-c,m-g,S-h).normalize(),i[1].setComponents(l+a,p+c,m+g,S+h).normalize(),i[2].setComponents(l+o,p+d,m+v,S+E).normalize(),i[3].setComponents(l-o,p-d,m-v,S-E).normalize(),i[4].setComponents(l-s,p-f,m-x,S-b).normalize(),t===Di)i[5].setComponents(l+s,p+f,m+x,S+b).normalize();else if(t===Ks)i[5].setComponents(s,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ts.x=r.normal.x>0?e.max.x:e.min.x,Ts.y=r.normal.y>0?e.max.y:e.min.y,Ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sf(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Jv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,p=c.usage,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,f,p),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,d,f){const p=d.array,g=d.updateRange;n.bindBuffer(f,c),g.count===-1?n.bufferSubData(f,0,p):(t?n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,d)):f.version<c.version&&(a(f.buffer,c,d),f.version=c.version)}return{get:o,remove:s,update:l}}class Gl extends Gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,d=l+1,f=e/s,p=t/l,g=[],v=[],x=[],m=[];for(let h=0;h<d;h++){const E=h*p-o;for(let b=0;b<c;b++){const S=b*f-a;v.push(S,-E,0),x.push(0,0,1),m.push(b/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<s;E++){const b=E+c*h,S=E+c*(h+1),T=E+1+c*(h+1),D=E+1+c*h;g.push(b,S,D),g.push(S,T,D)}this.setIndex(g),this.setAttribute("position",new Oi(v,3)),this.setAttribute("normal",new Oi(x,3)),this.setAttribute("uv",new Oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$v=`#ifdef USE_ALPHAHASH
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
#endif`,e_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c_=`#ifdef USE_IRIDESCENCE
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
#endif`,u_=`#ifdef USE_BUMPMAP
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
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,x_=`#define PI 3.141592653589793
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
} // validated`,b_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y_=`vec3 transformedNormal = objectNormal;
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
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",A_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,k_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,B_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
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
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,W_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
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
#endif`,K_=`struct PhysicalMaterial {
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
}`,Z_=`
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sx=`#if defined( USE_POINTS_UV )
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
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ux=`#ifdef USE_MORPHNORMALS
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
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
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
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ux=`float getShadowMask() {
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
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
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
#endif`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
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
}`,nb=`#if DEPTH_PACKING == 3200
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
}`,ib=`#define DISTANCE
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
}`,rb=`#define DISTANCE
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`uniform float scale;
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#include <common>
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
}`,ub=`uniform vec3 diffuse;
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
}`,db=`#define LAMBERT
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
}`,fb=`#define LAMBERT
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
}`,hb=`#define MATCAP
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
}`,pb=`#define MATCAP
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
}`,mb=`#define NORMAL
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
}`,gb=`#define NORMAL
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
}`,vb=`#define PHONG
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
}`,_b=`#define PHONG
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
}`,xb=`#define STANDARD
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
}`,bb=`#define STANDARD
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
}`,yb=`#define TOON
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
}`,Mb=`#define TOON
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
}`,Sb=`uniform float size;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Tb=`uniform vec3 color;
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
}`,Ab=`uniform float rotation;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Qv,alphahash_pars_fragment:$v,alphamap_fragment:e_,alphamap_pars_fragment:t_,alphatest_fragment:n_,alphatest_pars_fragment:i_,aomap_fragment:r_,aomap_pars_fragment:a_,begin_vertex:s_,beginnormal_vertex:o_,bsdfs:l_,iridescence_fragment:c_,bumpmap_pars_fragment:u_,clipping_planes_fragment:d_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:h_,clipping_planes_vertex:p_,color_fragment:m_,color_pars_fragment:g_,color_pars_vertex:v_,color_vertex:__,common:x_,cube_uv_reflection_fragment:b_,defaultnormal_vertex:y_,displacementmap_pars_vertex:M_,displacementmap_vertex:S_,emissivemap_fragment:E_,emissivemap_pars_fragment:w_,colorspace_fragment:T_,colorspace_pars_fragment:A_,envmap_fragment:R_,envmap_common_pars_fragment:C_,envmap_pars_fragment:P_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:V_,envmap_vertex:D_,fog_vertex:I_,fog_pars_vertex:U_,fog_fragment:N_,fog_pars_fragment:O_,gradientmap_pars_fragment:F_,lightmap_fragment:k_,lightmap_pars_fragment:B_,lights_lambert_fragment:z_,lights_lambert_pars_fragment:G_,lights_pars_begin:H_,lights_toon_fragment:W_,lights_toon_pars_fragment:j_,lights_phong_fragment:X_,lights_phong_pars_fragment:Y_,lights_physical_fragment:q_,lights_physical_pars_fragment:K_,lights_fragment_begin:Z_,lights_fragment_maps:J_,lights_fragment_end:Q_,logdepthbuf_fragment:$_,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:rx,map_particle_fragment:ax,map_particle_pars_fragment:sx,metalnessmap_fragment:ox,metalnessmap_pars_fragment:lx,morphcolor_vertex:cx,morphnormal_vertex:ux,morphtarget_pars_vertex:dx,morphtarget_vertex:fx,normal_fragment_begin:hx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:gx,normal_vertex:vx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:yx,iridescence_pars_fragment:Mx,opaque_fragment:Sx,packing:Ex,premultiplied_alpha_fragment:wx,project_vertex:Tx,dithering_fragment:Ax,dithering_pars_fragment:Rx,roughnessmap_fragment:Cx,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Dx,shadowmap_vertex:Ix,shadowmask_pars_fragment:Ux,skinbase_vertex:Nx,skinning_pars_vertex:Ox,skinning_vertex:Fx,skinnormal_vertex:kx,specularmap_fragment:Bx,specularmap_pars_fragment:zx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Hx,transmission_fragment:Vx,transmission_pars_fragment:Wx,uv_pars_fragment:jx,uv_pars_vertex:Xx,uv_vertex:Yx,worldpos_vertex:qx,background_vert:Kx,background_frag:Zx,backgroundCube_vert:Jx,backgroundCube_frag:Qx,cube_vert:$x,cube_frag:eb,depth_vert:tb,depth_frag:nb,distanceRGBA_vert:ib,distanceRGBA_frag:rb,equirect_vert:ab,equirect_frag:sb,linedashed_vert:ob,linedashed_frag:lb,meshbasic_vert:cb,meshbasic_frag:ub,meshlambert_vert:db,meshlambert_frag:fb,meshmatcap_vert:hb,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:gb,meshphong_vert:vb,meshphong_frag:_b,meshphysical_vert:xb,meshphysical_frag:bb,meshtoon_vert:yb,meshtoon_frag:Mb,points_vert:Sb,points_frag:Eb,shadow_vert:wb,shadow_frag:Tb,sprite_vert:Ab,sprite_frag:Rb},Ve={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},di={basic:{uniforms:vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:vn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:vn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:vn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:vn([Ve.points,Ve.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:vn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:vn([Ve.common,Ve.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:vn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:vn([Ve.sprite,Ve.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:vn([Ve.common,Ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:vn([Ve.lights,Ve.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};di.physical={uniforms:vn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const As={r:0,b:0,g:0};function Cb(n,e,t,i,r,a,o){const s=new bt(0);let l=a===!0?0:1,c,d,f=null,p=0,g=null;function v(m,h){let E=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=(h.backgroundBlurriness>0?t:e).get(b)),b===null?x(s,l):b&&b.isColor&&(x(b,1),E=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ro)?(d===void 0&&(d=new Tt(new Vt(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:pa(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=b.colorSpace!==It,(f!==b||p!==b.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,f=b,p=b.version,g=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Tt(new Gl(2,2),new Bi({name:"BackgroundMaterial",uniforms:pa(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=b.colorSpace!==It,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||p!==b.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,p=b.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,h){m.getRGB(As,xf(n)),i.buffers.color.setClear(As.r,As.g,As.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(s,l)},render:v}}function Pb(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let c=l,d=!1;function f(G,q,k,j,ee){let le=!1;if(o){const xe=x(j,k,q);c!==xe&&(c=xe,g(c.object)),le=h(G,j,k,ee),le&&E(G,j,k,ee)}else{const xe=q.wireframe===!0;(c.geometry!==j.id||c.program!==k.id||c.wireframe!==xe)&&(c.geometry=j.id,c.program=k.id,c.wireframe=xe,le=!0)}ee!==null&&t.update(ee,n.ELEMENT_ARRAY_BUFFER),(le||d)&&(d=!1,O(G,q,k,j),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function p(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function g(G){return i.isWebGL2?n.bindVertexArray(G):a.bindVertexArrayOES(G)}function v(G){return i.isWebGL2?n.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function x(G,q,k){const j=k.wireframe===!0;let ee=s[G.id];ee===void 0&&(ee={},s[G.id]=ee);let le=ee[q.id];le===void 0&&(le={},ee[q.id]=le);let xe=le[j];return xe===void 0&&(xe=m(p()),le[j]=xe),xe}function m(G){const q=[],k=[],j=[];for(let ee=0;ee<r;ee++)q[ee]=0,k[ee]=0,j[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:k,attributeDivisors:j,object:G,attributes:{},index:null}}function h(G,q,k,j){const ee=c.attributes,le=q.attributes;let xe=0;const W=k.getAttributes();for(const X in W)if(W[X].location>=0){const Pe=ee[X];let Fe=le[X];if(Fe===void 0&&(X==="instanceMatrix"&&G.instanceMatrix&&(Fe=G.instanceMatrix),X==="instanceColor"&&G.instanceColor&&(Fe=G.instanceColor)),Pe===void 0||Pe.attribute!==Fe||Fe&&Pe.data!==Fe.data)return!0;xe++}return c.attributesNum!==xe||c.index!==j}function E(G,q,k,j){const ee={},le=q.attributes;let xe=0;const W=k.getAttributes();for(const X in W)if(W[X].location>=0){let Pe=le[X];Pe===void 0&&(X==="instanceMatrix"&&G.instanceMatrix&&(Pe=G.instanceMatrix),X==="instanceColor"&&G.instanceColor&&(Pe=G.instanceColor));const Fe={};Fe.attribute=Pe,Pe&&Pe.data&&(Fe.data=Pe.data),ee[X]=Fe,xe++}c.attributes=ee,c.attributesNum=xe,c.index=j}function b(){const G=c.newAttributes;for(let q=0,k=G.length;q<k;q++)G[q]=0}function S(G){T(G,0)}function T(G,q){const k=c.newAttributes,j=c.enabledAttributes,ee=c.attributeDivisors;k[G]=1,j[G]===0&&(n.enableVertexAttribArray(G),j[G]=1),ee[G]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,q),ee[G]=q)}function D(){const G=c.newAttributes,q=c.enabledAttributes;for(let k=0,j=q.length;k<j;k++)q[k]!==G[k]&&(n.disableVertexAttribArray(k),q[k]=0)}function R(G,q,k,j,ee,le,xe){xe===!0?n.vertexAttribIPointer(G,q,k,ee,le):n.vertexAttribPointer(G,q,k,j,ee,le)}function O(G,q,k,j){if(i.isWebGL2===!1&&(G.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const ee=j.attributes,le=k.getAttributes(),xe=q.defaultAttributeValues;for(const W in le){const X=le[W];if(X.location>=0){let Ce=ee[W];if(Ce===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(Ce=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(Ce=G.instanceColor)),Ce!==void 0){const Pe=Ce.normalized,Fe=Ce.itemSize,Ge=t.get(Ce);if(Ge===void 0)continue;const Ye=Ge.buffer,We=Ge.type,we=Ge.bytesPerElement,Be=i.isWebGL2===!0&&(We===n.INT||We===n.UNSIGNED_INT||Ce.gpuType===ef);if(Ce.isInterleavedBufferAttribute){const fe=Ce.data,U=fe.stride,je=Ce.offset;if(fe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<X.locationSize;Ae++)T(X.location+Ae,fe.meshPerAttribute);G.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ae=0;Ae<X.locationSize;Ae++)S(X.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Ae=0;Ae<X.locationSize;Ae++)R(X.location+Ae,Fe/X.locationSize,We,Pe,U*we,(je+Fe/X.locationSize*Ae)*we,Be)}else{if(Ce.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)T(X.location+fe,Ce.meshPerAttribute);G.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let fe=0;fe<X.locationSize;fe++)S(X.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let fe=0;fe<X.locationSize;fe++)R(X.location+fe,Fe/X.locationSize,We,Pe,Fe*we,Fe/X.locationSize*fe*we,Be)}}else if(xe!==void 0){const Pe=xe[W];if(Pe!==void 0)switch(Pe.length){case 2:n.vertexAttrib2fv(X.location,Pe);break;case 3:n.vertexAttrib3fv(X.location,Pe);break;case 4:n.vertexAttrib4fv(X.location,Pe);break;default:n.vertexAttrib1fv(X.location,Pe)}}}}D()}function M(){Q();for(const G in s){const q=s[G];for(const k in q){const j=q[k];for(const ee in j)v(j[ee].object),delete j[ee];delete q[k]}delete s[G]}}function A(G){if(s[G.id]===void 0)return;const q=s[G.id];for(const k in q){const j=q[k];for(const ee in j)v(j[ee].object),delete j[ee];delete q[k]}delete s[G.id]}function ce(G){for(const q in s){const k=s[q];if(k[G.id]===void 0)continue;const j=k[G.id];for(const ee in j)v(j[ee].object),delete j[ee];delete k[G.id]}}function Q(){B(),d=!0,c!==l&&(c=l,g(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:ce,initAttributes:b,enableAttribute:S,disableUnusedAttributes:D}}function Lb(n,e,t,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,d){n.drawArrays(a,c,d),t.update(d,a,1)}function l(c,d,f){if(f===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,c,d,f),t.update(d,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function Db(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,S=o||e.has("OES_texture_float"),T=b&&S,D=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:D}}function Ib(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new qi,s=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,g){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||a&&!m)a?d(null):c();else{const E=a?0:i,b=E*4;let S=h.clippingState||null;l.value=S,S=d(v,p,b,g);for(let T=0;T!==b;++T)S[T]=t[T];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,g,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const h=g+x*4,E=p.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,S=g;b!==x;++b,S+=4)o.copy(f[b]).applyMatrix4(E,s),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ub(n){let e=new WeakMap;function t(o,s){return s===qs?o.mapping=ua:s===fl&&(o.mapping=da),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===qs||s===fl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qv(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Ef extends yf{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jr=4,pu=[.125,.215,.35,.446,.526,.582],fr=20,jo=new Ef,mu=new bt;let Xo=null;const ur=(1+Math.sqrt(5))/2,jr=1/ur,gu=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,ur,jr),new V(0,ur,-jr),new V(jr,0,ur),new V(-jr,0,ur),new V(ur,jr,0),new V(-ur,jr,0)];class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xo=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:fa,format:Jn,colorSpace:_i,depthBuffer:!1},r=_u(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nb(a)),this._blurMaterial=Ob(a,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,r){const s=new Ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(mu),d.toneMapping=Ji,d.autoClear=!1;const g=new gf({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),v=new Tt(new Vt,g);let x=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(mu),x=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):E===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const b=this._cubeSize;Rs(r,E*b,h>2?b:0,b,b),d.setRenderTarget(r),x&&d.render(v,s),d.render(e,s)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ua||e.mapping===da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gu[(r-1)%gu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Tt(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*fr-1),x=a/v,m=isFinite(a)?1+Math.floor(d*x):fr;m>fr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const h=[];let E=0;for(let R=0;R<fr;++R){const O=R/x,M=Math.exp(-O*O/2);h.push(M),R===0?E+=M:R<m&&(E+=2*M)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-i;const S=this._sizeLods[r],T=3*S*(r>b-Jr?r-b+Jr:0),D=4*(this._cubeSize-S);Rs(t,T,D,3*S,2*S),l.setRenderTarget(t),l.render(f,jo)}}function Nb(n){const e=[],t=[],i=[];let r=n;const a=n-Jr+1+pu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-Jr?l=pu[o-n+Jr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,v=6,x=3,m=2,h=1,E=new Float32Array(x*v*g),b=new Float32Array(m*v*g),S=new Float32Array(h*v*g);for(let D=0;D<g;D++){const R=D%3*2/3-1,O=D>2?0:-1,M=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];E.set(M,x*v*D),b.set(p,m*v*D);const A=[D,D,D,D,D,D];S.set(A,h*v*D)}const T=new Gi;T.setAttribute("position",new ni(E,x)),T.setAttribute("uv",new ni(b,m)),T.setAttribute("faceIndex",new ni(S,h)),e.push(T),r>Jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _u(n,e,t){const i=new ki(n,e,t);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ob(n,e,t){const i=new Float32Array(fr),r=new V(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function xu(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function bu(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function Fb(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===qs||l===fl,d=l===ua||l===da;if(c||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new vu(n)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||d&&f&&r(f)){t===null&&(t=new vu(n));const p=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let d=0;d<c;d++)s[d]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function kb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bb(n,e,t,i){const r={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const x=p.morphAttributes[v];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete r[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)e.update(p[v],n.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const x=g[v];for(let m=0,h=x.length;m<h;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,v=f.attributes.position;let x=0;if(g!==null){const E=g.array;x=g.version;for(let b=0,S=E.length;b<S;b+=3){const T=E[b+0],D=E[b+1],R=E[b+2];p.push(T,D,D,R,R,T)}}else if(v!==void 0){const E=v.array;x=v.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const T=b+0,D=b+1,R=b+2;p.push(T,D,D,R,R,T)}}else return;const m=new(cf(p)?_f:vf)(p,1);m.version=x;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function d(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:d}}function zb(n,e,t,i){const r=i.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function d(p,g){n.drawElements(a,g,s,p*l),t.update(g,a,1)}function f(p,g,v){if(v===0)return;let x,m;if(r)x=n,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](a,g,s,p*l,v),t.update(g,a,v)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f}function Gb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Hb(n,e){return n[0]-e[0]}function Vb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Wb(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new Ut,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,d,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let m=a.get(d);if(m===void 0||m.count!==x){let q=function(){B.dispose(),a.delete(d),d.removeEventListener("dispose",q)};var g=q;m!==void 0&&m.texture.dispose();const b=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,T=d.morphAttributes.color!==void 0,D=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let M=0;b===!0&&(M=1),S===!0&&(M=2),T===!0&&(M=3);let A=d.attributes.position.count*M,ce=1;A>e.maxTextureSize&&(ce=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Q=new Float32Array(A*ce*4*x),B=new ff(Q,A,ce,x);B.type=Li,B.needsUpdate=!0;const G=M*4;for(let k=0;k<x;k++){const j=D[k],ee=R[k],le=O[k],xe=A*ce*4*k;for(let W=0;W<j.count;W++){const X=W*G;b===!0&&(o.fromBufferAttribute(j,W),Q[xe+X+0]=o.x,Q[xe+X+1]=o.y,Q[xe+X+2]=o.z,Q[xe+X+3]=0),S===!0&&(o.fromBufferAttribute(ee,W),Q[xe+X+4]=o.x,Q[xe+X+5]=o.y,Q[xe+X+6]=o.z,Q[xe+X+7]=0),T===!0&&(o.fromBufferAttribute(le,W),Q[xe+X+8]=o.x,Q[xe+X+9]=o.y,Q[xe+X+10]=o.z,Q[xe+X+11]=le.itemSize===4?o.w:1)}}m={count:x,texture:B,size:new tt(A,ce)},a.set(d,m),d.addEventListener("dispose",q)}let h=0;for(let b=0;b<p.length;b++)h+=p[b];const E=d.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=p===void 0?0:p.length;let x=i[d.id];if(x===void 0||x.length!==v){x=[];for(let S=0;S<v;S++)x[S]=[S,0];i[d.id]=x}for(let S=0;S<v;S++){const T=x[S];T[0]=S,T[1]=p[S]}x.sort(Vb);for(let S=0;S<8;S++)S<v&&x[S][1]?(s[S][0]=x[S][0],s[S][1]=x[S][1]):(s[S][0]=Number.MAX_SAFE_INTEGER,s[S][1]=0);s.sort(Hb);const m=d.morphAttributes.position,h=d.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const T=s[S],D=T[0],R=T[1];D!==Number.MAX_SAFE_INTEGER&&R?(m&&d.getAttribute("morphTarget"+S)!==m[D]&&d.setAttribute("morphTarget"+S,m[D]),h&&d.getAttribute("morphNormal"+S)!==h[D]&&d.setAttribute("morphNormal"+S,h[D]),r[S]=R,E+=R):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),h&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const b=d.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function jb(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const wf=new fn,Tf=new ff,Af=new Dv,Rf=new Mf,yu=[],Mu=[],Su=new Float32Array(16),Eu=new Float32Array(9),wu=new Float32Array(4);function ba(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=yu[r];if(a===void 0&&(a=new Float32Array(r),yu[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oo(n,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function Zb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if($t(t,i))return;wu.set(i),n.uniformMatrix2fv(this.addr,!1,wu),en(t,i)}}function Jb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if($t(t,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),en(t,i)}}function Qb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if($t(t,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),en(t,i)}}function $b(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function o0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||wf,r)}function l0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Af,r)}function c0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rf,r)}function u0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tf,r)}function d0(n){switch(n){case 5126:return Xb;case 35664:return Yb;case 35665:return qb;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return Qb;case 5124:case 35670:return $b;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return r0;case 36295:return a0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}function f0(n,e){n.uniform1fv(this.addr,e)}function h0(n,e){const t=ba(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){const t=ba(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){const t=ba(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){const t=ba(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v0(n,e){const t=ba(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _0(n,e){const t=ba(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x0(n,e){n.uniform1iv(this.addr,e)}function b0(n,e){n.uniform2iv(this.addr,e)}function y0(n,e){n.uniform3iv(this.addr,e)}function M0(n,e){n.uniform4iv(this.addr,e)}function S0(n,e){n.uniform1uiv(this.addr,e)}function E0(n,e){n.uniform2uiv(this.addr,e)}function w0(n,e){n.uniform3uiv(this.addr,e)}function T0(n,e){n.uniform4uiv(this.addr,e)}function A0(n,e,t){const i=this.cache,r=e.length,a=oo(t,r);$t(i,a)||(n.uniform1iv(this.addr,a),en(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||wf,a[o])}function R0(n,e,t){const i=this.cache,r=e.length,a=oo(t,r);$t(i,a)||(n.uniform1iv(this.addr,a),en(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Af,a[o])}function C0(n,e,t){const i=this.cache,r=e.length,a=oo(t,r);$t(i,a)||(n.uniform1iv(this.addr,a),en(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rf,a[o])}function P0(n,e,t){const i=this.cache,r=e.length,a=oo(t,r);$t(i,a)||(n.uniform1iv(this.addr,a),en(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Tf,a[o])}function L0(n){switch(n){case 5126:return f0;case 35664:return h0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return v0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return b0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return E0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}class D0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=d0(t.type)}}class I0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=L0(t.type)}}class U0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function Tu(n,e){n.seq.push(e),n.map[e.id]=e}function N0(n,e,t){const i=n.name,r=i.length;for(Yo.lastIndex=0;;){const a=Yo.exec(i),o=Yo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Tu(t,c===void 0?new D0(s,n,e):new I0(s,n,e));break}else{let f=t.map[s];f===void 0&&(f=new U0(s),Tu(t,f)),t=f}}}class ks{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);N0(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Au(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let O0=0;function F0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function k0(n){switch(n){case _i:return["Linear","( value )"];case It:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Ru(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F0(n.getShaderSource(e),o)}else return r}function B0(n,e){const t=k0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function z0(n,e){let t;switch(e){case Yg:t="Linear";break;case qg:t="Reinhard";break;case Kg:t="OptimizedCineon";break;case Zg:t="ACESFilmic";break;case Jg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function G0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oa).join(`
`)}function H0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function V0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Oa(n){return n!==""}function Cu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(n){return n.replace(W0,X0)}const j0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X0(n,e){let t=dt[e];if(t===void 0){const i=j0.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(n){return n.replace(Y0,q0)}function q0(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Du(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Z0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ua:case da:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===da&&(e="ENVMAP_MODE_REFRACTION"),e}function Q0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qd:e="ENVMAP_BLENDING_MULTIPLY";break;case jg:e="ENVMAP_BLENDING_MIX";break;case Xg:e="ENVMAP_BLENDING_ADD";break}return e}function $0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ey(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=K0(t),c=Z0(t),d=J0(t),f=Q0(t),p=$0(t),g=t.isWebGL2?"":G0(t),v=H0(a),x=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Oa).join(`
`),m.length>0&&(m+=`
`),h=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Oa).join(`
`),h.length>0&&(h+=`
`)):(m=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),h=[g,Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,B0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),o=xl(o),o=Cu(o,t),o=Pu(o,t),s=xl(s),s=Cu(s,t),s=Pu(s,t),o=Lu(o),s=Lu(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=E+m+o,S=E+h+s,T=Au(r,r.VERTEX_SHADER,b),D=Au(r,r.FRAGMENT_SHADER,S);if(r.attachShader(x,T),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),A=r.getShaderInfoLog(T).trim(),ce=r.getShaderInfoLog(D).trim();let Q=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,T,D);else{const G=Ru(r,T,"vertex"),q=Ru(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+G+`
`+q)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||ce==="")&&(B=!1);B&&(this.diagnostics={runnable:Q,programLog:M,vertexShader:{log:A,prefix:m},fragmentShader:{log:ce,prefix:h}})}r.deleteShader(T),r.deleteShader(D);let R;this.getUniforms=function(){return R===void 0&&(R=new ks(r,x)),R};let O;return this.getAttributes=function(){return O===void 0&&(O=V0(r,x)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=D,this}let ty=0;class ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new iy(e),t.set(e,i)),i}}class iy{constructor(e){this.id=ty++,this.code=e,this.usedTimes=0}}function ry(n,e,t,i,r,a,o){const s=new pf,l=new ny,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,A,ce,Q,B){const G=Q.fog,q=B.geometry,k=M.isMeshStandardMaterial?Q.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),ee=j&&j.mapping===ro?j.image.height:null,le=v[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,W=xe!==void 0?xe.length:0;let X=0;q.morphAttributes.position!==void 0&&(X=1),q.morphAttributes.normal!==void 0&&(X=2),q.morphAttributes.color!==void 0&&(X=3);let Ce,Pe,Fe,Ge;if(le){const he=di[le];Ce=he.vertexShader,Pe=he.fragmentShader}else Ce=M.vertexShader,Pe=M.fragmentShader,l.update(M),Fe=l.getVertexShaderID(M),Ge=l.getFragmentShaderID(M);const Ye=n.getRenderTarget(),We=B.isInstancedMesh===!0,we=!!M.map,Be=!!M.matcap,fe=!!j,U=!!M.aoMap,je=!!M.lightMap,Ae=!!M.bumpMap,$=!!M.normalMap,be=!!M.displacementMap,Le=!!M.emissiveMap,ke=!!M.metalnessMap,De=!!M.roughnessMap,Z=M.anisotropy>0,ye=M.clearcoat>0,Re=M.iridescence>0,w=M.sheen>0,_=M.transmission>0,I=Z&&!!M.anisotropyMap,ie=ye&&!!M.clearcoatMap,ae=ye&&!!M.clearcoatNormalMap,te=ye&&!!M.clearcoatRoughnessMap,Se=Re&&!!M.iridescenceMap,ue=Re&&!!M.iridescenceThicknessMap,H=w&&!!M.sheenColorMap,L=w&&!!M.sheenRoughnessMap,re=!!M.specularMap,Ne=!!M.specularColorMap,Me=!!M.specularIntensityMap,me=_&&!!M.transmissionMap,He=_&&!!M.thicknessMap,$e=!!M.gradientMap,N=!!M.alphaMap,Oe=M.alphaTest>0,K=!!M.alphaHash,Ee=!!M.extensions,Ie=!!q.attributes.uv1,Xe=!!q.attributes.uv2,et=!!q.attributes.uv3;let st=Ji;return M.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:d,shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:Ce,fragmentShader:Pe,defines:M.defines,customVertexShaderID:Fe,customFragmentShaderID:Ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,instancing:We,instancingColor:We&&B.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ye===null?n.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:_i,map:we,matcap:Be,envMap:fe,envMapMode:fe&&j.mapping,envMapCubeUVHeight:ee,aoMap:U,lightMap:je,bumpMap:Ae,normalMap:$,displacementMap:p&&be,emissiveMap:Le,normalMapObjectSpace:$&&M.normalMapType===uv,normalMapTangentSpace:$&&M.normalMapType===lf,metalnessMap:ke,roughnessMap:De,anisotropy:Z,anisotropyMap:I,clearcoat:ye,clearcoatMap:ie,clearcoatNormalMap:ae,clearcoatRoughnessMap:te,iridescence:Re,iridescenceMap:Se,iridescenceThicknessMap:ue,sheen:w,sheenColorMap:H,sheenRoughnessMap:L,specularMap:re,specularColorMap:Ne,specularIntensityMap:Me,transmission:_,transmissionMap:me,thicknessMap:He,gradientMap:$e,opaque:M.transparent===!1&&M.blending===ia,alphaMap:N,alphaTest:Oe,alphaHash:K,combine:M.combine,mapUv:we&&x(M.map.channel),aoMapUv:U&&x(M.aoMap.channel),lightMapUv:je&&x(M.lightMap.channel),bumpMapUv:Ae&&x(M.bumpMap.channel),normalMapUv:$&&x(M.normalMap.channel),displacementMapUv:be&&x(M.displacementMap.channel),emissiveMapUv:Le&&x(M.emissiveMap.channel),metalnessMapUv:ke&&x(M.metalnessMap.channel),roughnessMapUv:De&&x(M.roughnessMap.channel),anisotropyMapUv:I&&x(M.anisotropyMap.channel),clearcoatMapUv:ie&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:H&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:L&&x(M.sheenRoughnessMap.channel),specularMapUv:re&&x(M.specularMap.channel),specularColorMapUv:Ne&&x(M.specularColorMap.channel),specularIntensityMapUv:Me&&x(M.specularIntensityMap.channel),transmissionMapUv:me&&x(M.transmissionMap.channel),thicknessMapUv:He&&x(M.thicknessMap.channel),alphaMapUv:N&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Xe,vertexUv3s:et,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(we||N),fog:!!G,useFog:M.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:X,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&ce.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&M.map.colorSpace===It,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===An,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ee&&M.extensions.derivatives===!0,extensionFragDepth:Ee&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ce in M.defines)A.push(ce),A.push(M.defines[ce]);return M.isRawShaderMaterial===!1&&(E(A,M),b(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function E(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function b(M,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),M.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function S(M){const A=v[M.type];let ce;if(A){const Q=di[A];ce=bf.clone(Q.uniforms)}else ce=M.uniforms;return ce}function T(M,A){let ce;for(let Q=0,B=c.length;Q<B;Q++){const G=c[Q];if(G.cacheKey===A){ce=G,++ce.usedTimes;break}}return ce===void 0&&(ce=new ey(n,A,M,a),c.push(ce)),ce}function D(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:T,releaseProgram:D,releaseShaderCache:R,programs:c,dispose:O}}function ay(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function sy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Iu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(f,p,g,v,x,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:g,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=g,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function s(f,p,g,v,x,m){const h=o(f,p,g,v,x,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):t.push(h)}function l(f,p,g,v,x,m){const h=o(f,p,g,v,x,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,p){t.length>1&&t.sort(f||sy),i.length>1&&i.sort(p||Iu),r.length>1&&r.sort(p||Iu)}function d(){for(let f=e,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:d,sort:c}}function oy(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Uu,n.set(i,[o])):r>=a.length?(o=new Uu,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ly(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new bt};break;case"SpotLight":t={position:new V,direction:new V,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function cy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uy=0;function dy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fy(n,e){const t=new ly,i=cy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new V);const a=new V,o=new jt,s=new jt;function l(d,f){let p=0,g=0,v=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let x=0,m=0,h=0,E=0,b=0,S=0,T=0,D=0,R=0,O=0;d.sort(dy);const M=f===!0?Math.PI:1;for(let ce=0,Q=d.length;ce<Q;ce++){const B=d[ce],G=B.color,q=B.intensity,k=B.distance,j=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=G.r*q*M,g+=G.g*q*M,v+=G.b*q*M;else if(B.isLightProbe)for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(B.sh.coefficients[ee],q);else if(B.isDirectionalLight){const ee=t.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity*M),B.castShadow){const le=B.shadow,xe=i.get(B);xe.shadowBias=le.bias,xe.shadowNormalBias=le.normalBias,xe.shadowRadius=le.radius,xe.shadowMapSize=le.mapSize,r.directionalShadow[x]=xe,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=B.shadow.matrix,S++}r.directional[x]=ee,x++}else if(B.isSpotLight){const ee=t.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(G).multiplyScalar(q*M),ee.distance=k,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,r.spot[h]=ee;const le=B.shadow;if(B.map&&(r.spotLightMap[R]=B.map,R++,le.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[h]=le.matrix,B.castShadow){const xe=i.get(B);xe.shadowBias=le.bias,xe.shadowNormalBias=le.normalBias,xe.shadowRadius=le.radius,xe.shadowMapSize=le.mapSize,r.spotShadow[h]=xe,r.spotShadowMap[h]=j,D++}h++}else if(B.isRectAreaLight){const ee=t.get(B);ee.color.copy(G).multiplyScalar(q),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),r.rectArea[E]=ee,E++}else if(B.isPointLight){const ee=t.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity*M),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const le=B.shadow,xe=i.get(B);xe.shadowBias=le.bias,xe.shadowNormalBias=le.normalBias,xe.shadowRadius=le.radius,xe.shadowMapSize=le.mapSize,xe.shadowCameraNear=le.camera.near,xe.shadowCameraFar=le.camera.far,r.pointShadow[m]=xe,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=B.shadow.matrix,T++}r.point[m]=ee,m++}else if(B.isHemisphereLight){const ee=t.get(B);ee.skyColor.copy(B.color).multiplyScalar(q*M),ee.groundColor.copy(B.groundColor).multiplyScalar(q*M),r.hemi[b]=ee,b++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==x||A.pointLength!==m||A.spotLength!==h||A.rectAreaLength!==E||A.hemiLength!==b||A.numDirectionalShadows!==S||A.numPointShadows!==T||A.numSpotShadows!==D||A.numSpotMaps!==R)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=E,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=D+R-O,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=O,A.directionalLength=x,A.pointLength=m,A.spotLength=h,A.rectAreaLength=E,A.hemiLength=b,A.numDirectionalShadows=S,A.numPointShadows=T,A.numSpotShadows=D,A.numSpotMaps=R,r.version=uy++)}function c(d,f){let p=0,g=0,v=0,x=0,m=0;const h=f.matrixWorldInverse;for(let E=0,b=d.length;E<b;E++){const S=d[E];if(S.isDirectionalLight){const T=r.directional[p];T.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(h),p++}else if(S.isSpotLight){const T=r.spot[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(h),v++}else if(S.isRectAreaLight){const T=r.rectArea[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),s.identity(),o.copy(S.matrixWorld),o.premultiply(h),s.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),x++}else if(S.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),g++}else if(S.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Nu(n,e){const t=new fy(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function hy(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Nu(n,e),t.set(a,[l])):o>=s.length?(l=new Nu(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class py extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class my extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
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
}`;function _y(n,e,t){let i=new zl;const r=new tt,a=new tt,o=new Ut,s=new py({depthPacking:cv}),l=new my,c={},d=t.maxTextureSize,f={[vi]:An,[An]:vi,[zn]:zn},p=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:gy,fragmentShader:vy}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new Gi;v.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tt(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let h=this.type;this.render=function(T,D,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const O=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),ce=n.state;ce.setBlending(Ni),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const Q=h!==Ti&&this.type===Ti,B=h===Ti&&this.type!==Ti;for(let G=0,q=T.length;G<q;G++){const k=T[G],j=k.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ee=j.getFrameExtents();if(r.multiply(ee),a.copy(j.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ee.x),r.x=a.x*ee.x,j.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ee.y),r.y=a.y*ee.y,j.mapSize.y=a.y)),j.map===null||Q===!0||B===!0){const xe=this.type!==Ti?{minFilter:Ft,magFilter:Ft}:{};j.map!==null&&j.map.dispose(),j.map=new ki(r.x,r.y,xe),j.map.texture.name=k.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const le=j.getViewportCount();for(let xe=0;xe<le;xe++){const W=j.getViewport(xe);o.set(a.x*W.x,a.y*W.y,a.x*W.z,a.y*W.w),ce.viewport(o),j.updateMatrices(k,xe),i=j.getFrustum(),S(D,R,j.camera,k,this.type)}j.isPointLightShadow!==!0&&this.type===Ti&&E(j,R),j.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(O,M,A)};function E(T,D){const R=e.update(x);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ki(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(D,null,R,p,x,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(D,null,R,g,x,null)}function b(T,D,R,O){let M=null;const A=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?l:s,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ce=M.uuid,Q=D.uuid;let B=c[ce];B===void 0&&(B={},c[ce]=B);let G=B[Q];G===void 0&&(G=M.clone(),B[Q]=G),M=G}if(M.visible=D.visible,M.wireframe=D.wireframe,O===Ti?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:f[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ce=n.properties.get(M);ce.light=R}return M}function S(T,D,R,O,M){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const Q=e.update(T),B=T.material;if(Array.isArray(B)){const G=Q.groups;for(let q=0,k=G.length;q<k;q++){const j=G[q],ee=B[j.materialIndex];if(ee&&ee.visible){const le=b(T,ee,O,M);n.renderBufferDirect(R,null,Q,le,T,j)}}}else if(B.visible){const G=b(T,B,O,M);n.renderBufferDirect(R,null,Q,G,T,null)}}const ce=T.children;for(let Q=0,B=ce.length;Q<B;Q++)S(ce[Q],D,R,O,M)}}function xy(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const Oe=new Ut;let K=null;const Ee=new Ut(0,0,0,0);return{setMask:function(Ie){K!==Ie&&!N&&(n.colorMask(Ie,Ie,Ie,Ie),K=Ie)},setLocked:function(Ie){N=Ie},setClear:function(Ie,Xe,et,st,Mt){Mt===!0&&(Ie*=st,Xe*=st,et*=st),Oe.set(Ie,Xe,et,st),Ee.equals(Oe)===!1&&(n.clearColor(Ie,Xe,et,st),Ee.copy(Oe))},reset:function(){N=!1,K=null,Ee.set(-1,0,0,0)}}}function a(){let N=!1,Oe=null,K=null,Ee=null;return{setTest:function(Ie){Ie?Ye(n.DEPTH_TEST):We(n.DEPTH_TEST)},setMask:function(Ie){Oe!==Ie&&!N&&(n.depthMask(Ie),Oe=Ie)},setFunc:function(Ie){if(K!==Ie){switch(Ie){case kg:n.depthFunc(n.NEVER);break;case Bg:n.depthFunc(n.ALWAYS);break;case zg:n.depthFunc(n.LESS);break;case dl:n.depthFunc(n.LEQUAL);break;case Gg:n.depthFunc(n.EQUAL);break;case Hg:n.depthFunc(n.GEQUAL);break;case Vg:n.depthFunc(n.GREATER);break;case Wg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=Ie}},setLocked:function(Ie){N=Ie},setClear:function(Ie){Ee!==Ie&&(n.clearDepth(Ie),Ee=Ie)},reset:function(){N=!1,Oe=null,K=null,Ee=null}}}function o(){let N=!1,Oe=null,K=null,Ee=null,Ie=null,Xe=null,et=null,st=null,Mt=null;return{setTest:function(he){N||(he?Ye(n.STENCIL_TEST):We(n.STENCIL_TEST))},setMask:function(he){Oe!==he&&!N&&(n.stencilMask(he),Oe=he)},setFunc:function(he,ze,Qe){(K!==he||Ee!==ze||Ie!==Qe)&&(n.stencilFunc(he,ze,Qe),K=he,Ee=ze,Ie=Qe)},setOp:function(he,ze,Qe){(Xe!==he||et!==ze||st!==Qe)&&(n.stencilOp(he,ze,Qe),Xe=he,et=ze,st=Qe)},setLocked:function(he){N=he},setClear:function(he){Mt!==he&&(n.clearStencil(he),Mt=he)},reset:function(){N=!1,Oe=null,K=null,Ee=null,Ie=null,Xe=null,et=null,st=null,Mt=null}}}const s=new r,l=new a,c=new o,d=new WeakMap,f=new WeakMap;let p={},g={},v=new WeakMap,x=[],m=null,h=!1,E=null,b=null,S=null,T=null,D=null,R=null,O=null,M=!1,A=null,ce=null,Q=null,B=null,G=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=j>=1):ee.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=j>=2);let le=null,xe={};const W=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),Ce=new Ut().fromArray(W),Pe=new Ut().fromArray(X);function Fe(N,Oe,K,Ee){const Ie=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(N,Xe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<K;et++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(Oe,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Oe+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return Xe}const Ge={};Ge[n.TEXTURE_2D]=Fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ge[n.TEXTURE_CUBE_MAP]=Fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[n.TEXTURE_2D_ARRAY]=Fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ge[n.TEXTURE_3D]=Fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ye(n.DEPTH_TEST),l.setFunc(dl),be(!1),Le(bc),Ye(n.CULL_FACE),Ae(Ni);function Ye(N){p[N]!==!0&&(n.enable(N),p[N]=!0)}function We(N){p[N]!==!1&&(n.disable(N),p[N]=!1)}function we(N,Oe){return g[N]!==Oe?(n.bindFramebuffer(N,Oe),g[N]=Oe,i&&(N===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Oe),N===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Oe)),!0):!1}function Be(N,Oe){let K=x,Ee=!1;if(N)if(K=v.get(Oe),K===void 0&&(K=[],v.set(Oe,K)),N.isWebGLMultipleRenderTargets){const Ie=N.texture;if(K.length!==Ie.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,et=Ie.length;Xe<et;Xe++)K[Xe]=n.COLOR_ATTACHMENT0+Xe;K.length=Ie.length,Ee=!0}}else K[0]!==n.COLOR_ATTACHMENT0&&(K[0]=n.COLOR_ATTACHMENT0,Ee=!0);else K[0]!==n.BACK&&(K[0]=n.BACK,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function fe(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const U={[Zr]:n.FUNC_ADD,[Ag]:n.FUNC_SUBTRACT,[Rg]:n.FUNC_REVERSE_SUBTRACT};if(i)U[Ec]=n.MIN,U[wc]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(U[Ec]=N.MIN_EXT,U[wc]=N.MAX_EXT)}const je={[Cg]:n.ZERO,[Pg]:n.ONE,[Lg]:n.SRC_COLOR,[Zd]:n.SRC_ALPHA,[Fg]:n.SRC_ALPHA_SATURATE,[Ng]:n.DST_COLOR,[Ig]:n.DST_ALPHA,[Dg]:n.ONE_MINUS_SRC_COLOR,[Jd]:n.ONE_MINUS_SRC_ALPHA,[Og]:n.ONE_MINUS_DST_COLOR,[Ug]:n.ONE_MINUS_DST_ALPHA};function Ae(N,Oe,K,Ee,Ie,Xe,et,st){if(N===Ni){h===!0&&(We(n.BLEND),h=!1);return}if(h===!1&&(Ye(n.BLEND),h=!0),N!==Tg){if(N!==E||st!==M){if((b!==Zr||D!==Zr)&&(n.blendEquation(n.FUNC_ADD),b=Zr,D=Zr),st)switch(N){case ia:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.ONE,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,T=null,R=null,O=null,E=N,M=st}return}Ie=Ie||Oe,Xe=Xe||K,et=et||Ee,(Oe!==b||Ie!==D)&&(n.blendEquationSeparate(U[Oe],U[Ie]),b=Oe,D=Ie),(K!==S||Ee!==T||Xe!==R||et!==O)&&(n.blendFuncSeparate(je[K],je[Ee],je[Xe],je[et]),S=K,T=Ee,R=Xe,O=et),E=N,M=!1}function $(N,Oe){N.side===zn?We(n.CULL_FACE):Ye(n.CULL_FACE);let K=N.side===An;Oe&&(K=!K),be(K),N.blending===ia&&N.transparent===!1?Ae(Ni):Ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ee=N.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),De(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ye(n.SAMPLE_ALPHA_TO_COVERAGE):We(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(N){A!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),A=N)}function Le(N){N!==Sg?(Ye(n.CULL_FACE),N!==ce&&(N===bc?n.cullFace(n.BACK):N===Eg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):We(n.CULL_FACE),ce=N}function ke(N){N!==Q&&(k&&n.lineWidth(N),Q=N)}function De(N,Oe,K){N?(Ye(n.POLYGON_OFFSET_FILL),(B!==Oe||G!==K)&&(n.polygonOffset(Oe,K),B=Oe,G=K)):We(n.POLYGON_OFFSET_FILL)}function Z(N){N?Ye(n.SCISSOR_TEST):We(n.SCISSOR_TEST)}function ye(N){N===void 0&&(N=n.TEXTURE0+q-1),le!==N&&(n.activeTexture(N),le=N)}function Re(N,Oe,K){K===void 0&&(le===null?K=n.TEXTURE0+q-1:K=le);let Ee=xe[K];Ee===void 0&&(Ee={type:void 0,texture:void 0},xe[K]=Ee),(Ee.type!==N||Ee.texture!==Oe)&&(le!==K&&(n.activeTexture(K),le=K),n.bindTexture(N,Oe||Ge[N]),Ee.type=N,Ee.texture=Oe)}function w(){const N=xe[le];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(N){Ce.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ce.copy(N))}function Me(N){Pe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Pe.copy(N))}function me(N,Oe){let K=f.get(Oe);K===void 0&&(K=new WeakMap,f.set(Oe,K));let Ee=K.get(N);Ee===void 0&&(Ee=n.getUniformBlockIndex(Oe,N.name),K.set(N,Ee))}function He(N,Oe){const Ee=f.get(Oe).get(N);d.get(Oe)!==Ee&&(n.uniformBlockBinding(Oe,Ee,N.__bindingPointIndex),d.set(Oe,Ee))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},le=null,xe={},g={},v=new WeakMap,x=[],m=null,h=!1,E=null,b=null,S=null,T=null,D=null,R=null,O=null,M=!1,A=null,ce=null,Q=null,B=null,G=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ye,disable:We,bindFramebuffer:we,drawBuffers:Be,useProgram:fe,setBlending:Ae,setMaterial:$,setFlipSided:be,setCullFace:Le,setLineWidth:ke,setPolygonOffset:De,setScissorTest:Z,activeTexture:ye,bindTexture:Re,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:L,texImage3D:re,updateUBOMapping:me,uniformBlockBinding:He,texStorage2D:ue,texStorage3D:H,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:te,compressedTexSubImage3D:Se,scissor:Ne,viewport:Me,reset:$e}}function by(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,_){return h?new OffscreenCanvas(w,_):Zs("canvas")}function b(w,_,I,ie){let ae=1;if((w.width>ie||w.height>ie)&&(ae=ie/Math.max(w.width,w.height)),ae<1||_===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=_?_l:Math.floor,Se=te(ae*w.width),ue=te(ae*w.height);x===void 0&&(x=E(Se,ue));const H=I?E(Se,ue):x;return H.width=Se,H.height=ue,H.getContext("2d").drawImage(w,0,0,Se,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Se+"x"+ue+")."),H}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return $c(w.width)&&$c(w.height)}function T(w){return s?!1:w.wrapS!==Zn||w.wrapT!==Zn||w.minFilter!==Ft&&w.minFilter!==kn}function D(w,_){return w.generateMipmaps&&_&&w.minFilter!==Ft&&w.minFilter!==kn}function R(w){n.generateMipmap(w)}function O(w,_,I,ie,ae=!1){if(s===!1)return _;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=_;return _===n.RED&&(I===n.FLOAT&&(te=n.R32F),I===n.HALF_FLOAT&&(te=n.R16F),I===n.UNSIGNED_BYTE&&(te=n.R8)),_===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(te=n.R8UI),I===n.UNSIGNED_SHORT&&(te=n.R16UI),I===n.UNSIGNED_INT&&(te=n.R32UI),I===n.BYTE&&(te=n.R8I),I===n.SHORT&&(te=n.R16I),I===n.INT&&(te=n.R32I)),_===n.RG&&(I===n.FLOAT&&(te=n.RG32F),I===n.HALF_FLOAT&&(te=n.RG16F),I===n.UNSIGNED_BYTE&&(te=n.RG8)),_===n.RGBA&&(I===n.FLOAT&&(te=n.RGBA32F),I===n.HALF_FLOAT&&(te=n.RGBA16F),I===n.UNSIGNED_BYTE&&(te=ie===It&&ae===!1?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)),(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(w,_,I){return D(w,I)===!0||w.isFramebufferTexture&&w.minFilter!==Ft&&w.minFilter!==kn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function A(w){return w===Ft||w===Tc||w===bo?n.NEAREST:n.LINEAR}function ce(w){const _=w.target;_.removeEventListener("dispose",ce),B(_),_.isVideoTexture&&v.delete(_)}function Q(w){const _=w.target;_.removeEventListener("dispose",Q),q(_)}function B(w){const _=i.get(w);if(_.__webglInit===void 0)return;const I=w.source,ie=m.get(I);if(ie){const ae=ie[_.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&G(w),Object.keys(ie).length===0&&m.delete(I)}i.remove(w)}function G(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const I=w.source,ie=m.get(I);delete ie[_.__cacheKey],o.memory.textures--}function q(w){const _=w.texture,I=i.get(w),ie=i.get(_);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(I.__webglFramebuffer[ae]))for(let te=0;te<I.__webglFramebuffer[ae].length;te++)n.deleteFramebuffer(I.__webglFramebuffer[ae][te]);else n.deleteFramebuffer(I.__webglFramebuffer[ae]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[ae])}else{if(Array.isArray(I.__webglFramebuffer))for(let ae=0;ae<I.__webglFramebuffer.length;ae++)n.deleteFramebuffer(I.__webglFramebuffer[ae]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ae=0;ae<I.__webglColorRenderbuffer.length;ae++)I.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[ae]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ae=0,te=_.length;ae<te;ae++){const Se=i.get(_[ae]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(_[ae])}i.remove(_),i.remove(w)}let k=0;function j(){k=0}function ee(){const w=k;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),k+=1,w}function le(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function xe(w,_){const I=i.get(w);if(w.isVideoTexture&&ye(w),w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){const ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(I,w,_);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+_)}function W(w,_){const I=i.get(w);if(w.version>0&&I.__version!==w.version){we(I,w,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+_)}function X(w,_){const I=i.get(w);if(w.version>0&&I.__version!==w.version){we(I,w,_);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+_)}function Ce(w,_){const I=i.get(w);if(w.version>0&&I.__version!==w.version){Be(I,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+_)}const Pe={[hl]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},Fe={[Ft]:n.NEAREST,[Tc]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[Qg]:n.LINEAR_MIPMAP_NEAREST,[Za]:n.LINEAR_MIPMAP_LINEAR},Ge={[fv]:n.NEVER,[xv]:n.ALWAYS,[hv]:n.LESS,[mv]:n.LEQUAL,[pv]:n.EQUAL,[_v]:n.GEQUAL,[gv]:n.GREATER,[vv]:n.NOTEQUAL};function Ye(w,_,I){if(I?(n.texParameteri(w,n.TEXTURE_WRAP_S,Pe[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Pe[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Pe[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Fe[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Fe[_.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Zn||_.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,A(_.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==Ft&&_.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Ft||_.minFilter!==bo&&_.minFilter!==Za||_.type===Li&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===fa&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(w,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function We(w,_){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",ce));const ie=_.source;let ae=m.get(ie);ae===void 0&&(ae={},m.set(ie,ae));const te=le(_);if(te!==w.__cacheKey){ae[te]===void 0&&(ae[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ae[te].usedTimes++;const Se=ae[w.__cacheKey];Se!==void 0&&(ae[w.__cacheKey].usedTimes--,Se.usedTimes===0&&G(_)),w.__cacheKey=te,w.__webglTexture=ae[te].texture}return I}function we(w,_,I){let ie=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ie=n.TEXTURE_3D);const ae=We(w,_),te=_.source;t.bindTexture(ie,w.__webglTexture,n.TEXTURE0+I);const Se=i.get(te);if(te.version!==Se.__version||ae===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ue=T(_)&&S(_.image)===!1;let H=b(_.image,ue,!1,d);H=Re(_,H);const L=S(H)||s,re=a.convert(_.format,_.colorSpace);let Ne=a.convert(_.type),Me=O(_.internalFormat,re,Ne,_.colorSpace,_.isVideoTexture);Ye(ie,_,L);let me;const He=_.mipmaps,$e=s&&_.isVideoTexture!==!0,N=Se.__version===void 0||ae===!0,Oe=M(_,H,L);if(_.isDepthTexture)Me=n.DEPTH_COMPONENT,s?_.type===Li?Me=n.DEPTH_COMPONENT32F:_.type===Ki?Me=n.DEPTH_COMPONENT24:_.type===xr?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:_.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===br&&Me===n.DEPTH_COMPONENT&&_.type!==kl&&_.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Ki,Ne=a.convert(_.type)),_.format===ha&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,_.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=xr,Ne=a.convert(_.type))),N&&($e?t.texStorage2D(n.TEXTURE_2D,1,Me,H.width,H.height):t.texImage2D(n.TEXTURE_2D,0,Me,H.width,H.height,0,re,Ne,null));else if(_.isDataTexture)if(He.length>0&&L){$e&&N&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,He[0].width,He[0].height);for(let K=0,Ee=He.length;K<Ee;K++)me=He[K],$e?t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,re,Ne,me.data):t.texImage2D(n.TEXTURE_2D,K,Me,me.width,me.height,0,re,Ne,me.data);_.generateMipmaps=!1}else $e?(N&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,H.width,H.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,H.width,H.height,re,Ne,H.data)):t.texImage2D(n.TEXTURE_2D,0,Me,H.width,H.height,0,re,Ne,H.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Me,He[0].width,He[0].height,H.depth);for(let K=0,Ee=He.length;K<Ee;K++)me=He[K],_.format!==Jn?re!==null?$e?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,H.depth,re,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Me,me.width,me.height,H.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,H.depth,re,Ne,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Me,me.width,me.height,H.depth,0,re,Ne,me.data)}else{$e&&N&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,He[0].width,He[0].height);for(let K=0,Ee=He.length;K<Ee;K++)me=He[K],_.format!==Jn?re!==null?$e?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,re,me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Me,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,re,Ne,me.data):t.texImage2D(n.TEXTURE_2D,K,Me,me.width,me.height,0,re,Ne,me.data)}else if(_.isDataArrayTexture)$e?(N&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,Me,H.width,H.height,H.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,re,Ne,H.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,H.width,H.height,H.depth,0,re,Ne,H.data);else if(_.isData3DTexture)$e?(N&&t.texStorage3D(n.TEXTURE_3D,Oe,Me,H.width,H.height,H.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,re,Ne,H.data)):t.texImage3D(n.TEXTURE_3D,0,Me,H.width,H.height,H.depth,0,re,Ne,H.data);else if(_.isFramebufferTexture){if(N)if($e)t.texStorage2D(n.TEXTURE_2D,Oe,Me,H.width,H.height);else{let K=H.width,Ee=H.height;for(let Ie=0;Ie<Oe;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Me,K,Ee,0,re,Ne,null),K>>=1,Ee>>=1}}else if(He.length>0&&L){$e&&N&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,He[0].width,He[0].height);for(let K=0,Ee=He.length;K<Ee;K++)me=He[K],$e?t.texSubImage2D(n.TEXTURE_2D,K,0,0,re,Ne,me):t.texImage2D(n.TEXTURE_2D,K,Me,re,Ne,me);_.generateMipmaps=!1}else $e?(N&&t.texStorage2D(n.TEXTURE_2D,Oe,Me,H.width,H.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,Ne,H)):t.texImage2D(n.TEXTURE_2D,0,Me,re,Ne,H);D(_,L)&&R(ie),Se.__version=te.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Be(w,_,I){if(_.image.length!==6)return;const ie=We(w,_),ae=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+I);const te=i.get(ae);if(ae.version!==te.__version||ie===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,H=[];for(let K=0;K<6;K++)!Se&&!ue?H[K]=b(_.image[K],!1,!0,c):H[K]=ue?_.image[K].image:_.image[K],H[K]=Re(_,H[K]);const L=H[0],re=S(L)||s,Ne=a.convert(_.format,_.colorSpace),Me=a.convert(_.type),me=O(_.internalFormat,Ne,Me,_.colorSpace),He=s&&_.isVideoTexture!==!0,$e=te.__version===void 0||ie===!0;let N=M(_,L,re);Ye(n.TEXTURE_CUBE_MAP,_,re);let Oe;if(Se){He&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,N,me,L.width,L.height);for(let K=0;K<6;K++){Oe=H[K].mipmaps;for(let Ee=0;Ee<Oe.length;Ee++){const Ie=Oe[Ee];_.format!==Jn?Ne!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,0,0,Ie.width,Ie.height,Ne,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,me,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,0,0,Ie.width,Ie.height,Ne,Me,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,me,Ie.width,Ie.height,0,Ne,Me,Ie.data)}}}else{Oe=_.mipmaps,He&&$e&&(Oe.length>0&&N++,t.texStorage2D(n.TEXTURE_CUBE_MAP,N,me,H[0].width,H[0].height));for(let K=0;K<6;K++)if(ue){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,H[K].width,H[K].height,Ne,Me,H[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,me,H[K].width,H[K].height,0,Ne,Me,H[K].data);for(let Ee=0;Ee<Oe.length;Ee++){const Xe=Oe[Ee].image[K].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,0,0,Xe.width,Xe.height,Ne,Me,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,me,Xe.width,Xe.height,0,Ne,Me,Xe.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ne,Me,H[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,me,Ne,Me,H[K]);for(let Ee=0;Ee<Oe.length;Ee++){const Ie=Oe[Ee];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,0,0,Ne,Me,Ie.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,me,Ne,Me,Ie.image[K])}}}D(_,re)&&R(n.TEXTURE_CUBE_MAP),te.__version=ae.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function fe(w,_,I,ie,ae,te){const Se=a.convert(I.format,I.colorSpace),ue=a.convert(I.type),H=O(I.internalFormat,Se,ue,I.colorSpace);if(!i.get(_).__hasExternalTextures){const re=Math.max(1,_.width>>te),Ne=Math.max(1,_.height>>te);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,te,H,re,Ne,_.depth,0,Se,ue,null):t.texImage2D(ae,te,H,re,Ne,0,Se,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Z(_)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ae,i.get(I).__webglTexture,0,De(_)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ae,i.get(I).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(w,_,I){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer&&!_.stencilBuffer){let ie=n.DEPTH_COMPONENT16;if(I||Z(_)){const ae=_.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Li?ie=n.DEPTH_COMPONENT32F:ae.type===Ki&&(ie=n.DEPTH_COMPONENT24));const te=De(_);Z(_)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ie,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ie,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(_.depthBuffer&&_.stencilBuffer){const ie=De(_);I&&Z(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,_.width,_.height):Z(_)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const ie=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ae=0;ae<ie.length;ae++){const te=ie[ae],Se=a.convert(te.format,te.colorSpace),ue=a.convert(te.type),H=O(te.internalFormat,Se,ue,te.colorSpace),L=De(_);I&&Z(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,H,_.width,_.height):Z(_)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,H,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,H,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function je(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),xe(_.depthTexture,0);const ie=i.get(_.depthTexture).__webglTexture,ae=De(_);if(_.depthTexture.format===br)Z(_)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(_.depthTexture.format===ha)Z(_)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ae(w){const _=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");je(_.__webglFramebuffer,w)}else if(I){_.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ie]),_.__webglDepthbuffer[ie]=n.createRenderbuffer(),U(_.__webglDepthbuffer[ie],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),U(_.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(w,_,I){const ie=i.get(w);_!==void 0&&fe(ie.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ae(w)}function be(w){const _=w.texture,I=i.get(w),ie=i.get(_);w.addEventListener("dispose",Q),w.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=_.version,o.memory.textures++);const ae=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,Se=S(w)||s;if(ae){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(s&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let H=0;H<_.mipmaps.length;H++)I.__webglFramebuffer[ue][H]=n.createFramebuffer()}else I.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(s&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)I.__webglFramebuffer[ue]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const ue=w.texture;for(let H=0,L=ue.length;H<L;H++){const re=i.get(ue[H]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&w.samples>0&&Z(w)===!1){const ue=te?_:[_];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let H=0;H<ue.length;H++){const L=ue[H];I.__webglColorRenderbuffer[H]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[H]);const re=a.convert(L.format,L.colorSpace),Ne=a.convert(L.type),Me=O(L.internalFormat,re,Ne,L.colorSpace,w.isXRRenderTarget===!0),me=De(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Me,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+H,n.RENDERBUFFER,I.__webglColorRenderbuffer[H])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),U(I.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,_,Se);for(let ue=0;ue<6;ue++)if(s&&_.mipmaps&&_.mipmaps.length>0)for(let H=0;H<_.mipmaps.length;H++)fe(I.__webglFramebuffer[ue][H],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,H);else fe(I.__webglFramebuffer[ue],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);D(_,Se)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ue=w.texture;for(let H=0,L=ue.length;H<L;H++){const re=ue[H],Ne=i.get(re);t.bindTexture(n.TEXTURE_2D,Ne.__webglTexture),Ye(n.TEXTURE_2D,re,Se),fe(I.__webglFramebuffer,w,re,n.COLOR_ATTACHMENT0+H,n.TEXTURE_2D,0),D(re,Se)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(s?ue=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ie.__webglTexture),Ye(ue,_,Se),s&&_.mipmaps&&_.mipmaps.length>0)for(let H=0;H<_.mipmaps.length;H++)fe(I.__webglFramebuffer[H],w,_,n.COLOR_ATTACHMENT0,ue,H);else fe(I.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,ue,0);D(_,Se)&&R(ue),t.unbindTexture()}w.depthBuffer&&Ae(w)}function Le(w){const _=S(w)||s,I=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0,ae=I.length;ie<ae;ie++){const te=I[ie];if(D(te,_)){const Se=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(te).__webglTexture;t.bindTexture(Se,ue),R(Se),t.unbindTexture()}}}function ke(w){if(s&&w.samples>0&&Z(w)===!1){const _=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],I=w.width,ie=w.height;let ae=n.COLOR_BUFFER_BIT;const te=[],Se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(w),H=w.isWebGLMultipleRenderTargets===!0;if(H)for(let L=0;L<_.length;L++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let L=0;L<_.length;L++){te.push(n.COLOR_ATTACHMENT0+L),w.depthBuffer&&te.push(Se);const re=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(re===!1&&(w.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),H&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[L]),re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),H){const Ne=i.get(_[L]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,I,ie,0,0,I,ie,ae,n.NEAREST),g&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),H)for(let L=0;L<_.length;L++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,ue.__webglColorRenderbuffer[L]);const re=i.get(_[L]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function De(w){return Math.min(f,w.samples)}function Z(w){const _=i.get(w);return s&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ye(w){const _=o.render.frame;v.get(w)!==_&&(v.set(w,_),w.update())}function Re(w,_){const I=w.colorSpace,ie=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===gl||I!==_i&&I!==Mr&&(I===It||I===ao?s===!1?e.has("EXT_sRGB")===!0&&ie===Jn?(w.format=gl,w.minFilter=kn,w.generateMipmaps=!1):_=uf.sRGBToLinear(_):(ie!==Jn||ae!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}this.allocateTextureUnit=ee,this.resetTextureUnits=j,this.setTexture2D=xe,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=Ce,this.rebindTextures=$,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Z}const yy=0,Zt=1;function My(n,e,t){const i=t.isWebGL2;function r(a,o=Mr){let s;const l=o===It||o===ao?Zt:yy;if(a===Qi)return n.UNSIGNED_BYTE;if(a===tf)return n.UNSIGNED_SHORT_4_4_4_4;if(a===nf)return n.UNSIGNED_SHORT_5_5_5_1;if(a===$g)return n.BYTE;if(a===ev)return n.SHORT;if(a===kl)return n.UNSIGNED_SHORT;if(a===ef)return n.INT;if(a===Ki)return n.UNSIGNED_INT;if(a===Li)return n.FLOAT;if(a===fa)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===tv)return n.ALPHA;if(a===Jn)return n.RGBA;if(a===nv)return n.LUMINANCE;if(a===iv)return n.LUMINANCE_ALPHA;if(a===br)return n.DEPTH_COMPONENT;if(a===ha)return n.DEPTH_STENCIL;if(a===gl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===rv)return n.RED;if(a===rf)return n.RED_INTEGER;if(a===av)return n.RG;if(a===af)return n.RG_INTEGER;if(a===sf)return n.RGBA_INTEGER;if(a===yo||a===Mo||a===So||a===Eo)if(l===Zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ac||a===Rc||a===Cc||a===Pc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Pc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===sv)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Lc||a===Dc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Lc)return l===Zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Dc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ic||a===Uc||a===Nc||a===Oc||a===Fc||a===kc||a===Bc||a===zc||a===Gc||a===Hc||a===Vc||a===Wc||a===jc||a===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Ic)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Uc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Nc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Oc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Fc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===kc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Bc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===zc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Gc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Hc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Vc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Wc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===jc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Xc)return l===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===wo||a===Yc||a===qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===wo)return l===Zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ov||a===Kc||a===Zc||a===Jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===wo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===xr?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class Sy extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class an extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ey={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),g=.02,v=.005;c.inputState.pinching&&p>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new an;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Cf extends fn{constructor(e,t,i,r,a,o,s,l,c,d){if(d=d!==void 0?d:br,d!==br&&d!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===br&&(i=Ki),i===void 0&&d===ha&&(i=xr),super(null,r,a,o,s,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wy extends wr{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,d=null,f=null,p=null,g=null,v=null;const x=t.getContextAttributes();let m=null,h=null;const E=[],b=[],S=new Ln;S.layers.enable(1),S.viewport=new Ut;const T=new Ln;T.layers.enable(2),T.viewport=new Ut;const D=[S,T],R=new Sy;R.layers.enable(1),R.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let X=E[W];return X===void 0&&(X=new qo,E[W]=X),X.getTargetRaySpace()},this.getControllerGrip=function(W){let X=E[W];return X===void 0&&(X=new qo,E[W]=X),X.getGripSpace()},this.getHand=function(W){let X=E[W];return X===void 0&&(X=new qo,E[W]=X),X.getHandSpace()};function A(W){const X=b.indexOf(W.inputSource);if(X===-1)return;const Ce=E[X];Ce!==void 0&&(Ce.update(W.inputSource,W.frame,c||o),Ce.dispatchEvent({type:W.type,data:W.inputSource}))}function ce(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",Q);for(let W=0;W<E.length;W++){const X=b[W];X!==null&&(b[W]=null,E[W].disconnect(X))}O=null,M=null,e.setRenderTarget(m),g=null,p=null,f=null,r=null,h=null,xe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:g}),h=new ki(g.framebufferWidth,g.framebufferHeight,{format:Jn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let X=null,Ce=null,Pe=null;x.depth&&(Pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=x.stencil?ha:br,Ce=x.stencil?xr:Ki);const Fe={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(Fe),r.updateRenderState({layers:[p]}),h=new ki(p.textureWidth,p.textureHeight,{format:Jn,type:Qi,depthTexture:new Cf(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ge=e.properties.get(h);Ge.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(W){for(let X=0;X<W.removed.length;X++){const Ce=W.removed[X],Pe=b.indexOf(Ce);Pe>=0&&(b[Pe]=null,E[Pe].disconnect(Ce))}for(let X=0;X<W.added.length;X++){const Ce=W.added[X];let Pe=b.indexOf(Ce);if(Pe===-1){for(let Ge=0;Ge<E.length;Ge++)if(Ge>=b.length){b.push(Ce),Pe=Ge;break}else if(b[Ge]===null){b[Ge]=Ce,Pe=Ge;break}if(Pe===-1)break}const Fe=E[Pe];Fe&&Fe.connect(Ce)}}const B=new V,G=new V;function q(W,X,Ce){B.setFromMatrixPosition(X.matrixWorld),G.setFromMatrixPosition(Ce.matrixWorld);const Pe=B.distanceTo(G),Fe=X.projectionMatrix.elements,Ge=Ce.projectionMatrix.elements,Ye=Fe[14]/(Fe[10]-1),We=Fe[14]/(Fe[10]+1),we=(Fe[9]+1)/Fe[5],Be=(Fe[9]-1)/Fe[5],fe=(Fe[8]-1)/Fe[0],U=(Ge[8]+1)/Ge[0],je=Ye*fe,Ae=Ye*U,$=Pe/(-fe+U),be=$*-fe;X.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(be),W.translateZ($),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Le=Ye+$,ke=We+$,De=je-be,Z=Ae+(Pe-be),ye=we*We/ke*Le,Re=Be*We/ke*Le;W.projectionMatrix.makePerspective(De,Z,ye,Re,Le,ke),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function k(W,X){X===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(X.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;R.near=T.near=S.near=W.near,R.far=T.far=S.far=W.far,(O!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,M=R.far);const X=W.parent,Ce=R.cameras;k(R,X);for(let Pe=0;Pe<Ce.length;Pe++)k(Ce[Pe],X);Ce.length===2?q(R,S,T):R.projectionMatrix.copy(S.projectionMatrix),j(W,R,X)};function j(W,X,Ce){Ce===null?W.matrix.copy(X.matrixWorld):(W.matrix.copy(Ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(X.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=vl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)};let ee=null;function le(W,X){if(d=X.getViewerPose(c||o),v=X,d!==null){const Ce=d.views;g!==null&&(e.setRenderTargetFramebuffer(h,g.framebuffer),e.setRenderTarget(h));let Pe=!1;Ce.length!==R.cameras.length&&(R.cameras.length=0,Pe=!0);for(let Fe=0;Fe<Ce.length;Fe++){const Ge=Ce[Fe];let Ye=null;if(g!==null)Ye=g.getViewport(Ge);else{const we=f.getViewSubImage(p,Ge);Ye=we.viewport,Fe===0&&(e.setRenderTargetTextures(h,we.colorTexture,p.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(h))}let We=D[Fe];We===void 0&&(We=new Ln,We.layers.enable(Fe),We.viewport=new Ut,D[Fe]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Fe===0&&(R.matrix.copy(We.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Pe===!0&&R.cameras.push(We)}}for(let Ce=0;Ce<E.length;Ce++){const Pe=b[Ce],Fe=E[Ce];Pe!==null&&Fe!==void 0&&Fe.update(Pe,X,c||o)}ee&&ee(W,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),v=null}const xe=new Sf;xe.setAnimationLoop(le),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}}function Ty(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,xf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),d(m,h)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&g(m,h,S)):h.isMeshMatcapMaterial?(a(m,h),v(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,E,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===An&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===An&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*b,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===An&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ay(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,b){const S=b.program;i.uniformBlockBinding(E,S)}function c(E,b){let S=r[E.id];S===void 0&&(v(E),S=d(E),r[E.id]=S,E.addEventListener("dispose",m));const T=b.program;i.updateUBOMapping(E,T);const D=e.render.frame;a[E.id]!==D&&(p(E),a[E.id]=D)}function d(E){const b=f();E.__bindingPointIndex=b;const S=n.createBuffer(),T=E.__size,D=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const b=r[E.id],S=E.uniforms,T=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,R=S.length;D<R;D++){const O=S[D];if(g(O,D,T)===!0){const M=O.__offset,A=Array.isArray(O.value)?O.value:[O.value];let ce=0;for(let Q=0;Q<A.length;Q++){const B=A[Q],G=x(B);typeof B=="number"?(O.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,M+ce,O.__data)):B.isMatrix3?(O.__data[0]=B.elements[0],O.__data[1]=B.elements[1],O.__data[2]=B.elements[2],O.__data[3]=B.elements[0],O.__data[4]=B.elements[3],O.__data[5]=B.elements[4],O.__data[6]=B.elements[5],O.__data[7]=B.elements[0],O.__data[8]=B.elements[6],O.__data[9]=B.elements[7],O.__data[10]=B.elements[8],O.__data[11]=B.elements[0]):(B.toArray(O.__data,ce),ce+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,O.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,b,S){const T=E.value;if(S[b]===void 0){if(typeof T=="number")S[b]=T;else{const D=Array.isArray(T)?T:[T],R=[];for(let O=0;O<D.length;O++)R.push(D[O].clone());S[b]=R}return!0}else if(typeof T=="number"){if(S[b]!==T)return S[b]=T,!0}else{const D=Array.isArray(S[b])?S[b]:[S[b]],R=Array.isArray(T)?T:[T];for(let O=0;O<D.length;O++){const M=D[O];if(M.equals(R[O])===!1)return M.copy(R[O]),!0}}return!1}function v(E){const b=E.uniforms;let S=0;const T=16;let D=0;for(let R=0,O=b.length;R<O;R++){const M=b[R],A={boundary:0,storage:0},ce=Array.isArray(M.value)?M.value:[M.value];for(let Q=0,B=ce.length;Q<B;Q++){const G=ce[Q],q=x(G);A.boundary+=q.boundary,A.storage+=q.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,R>0){D=S%T;const Q=T-D;D!==0&&Q-A.boundary<0&&(S+=T-D,M.__offset=S)}S+=A.storage}return D=S%T,D>0&&(S+=T-D),E.__size=S,E.__cache={},this}function x(E){const b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}class Pf{constructor(e={}){const{canvas:t=Mv(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const b=this;let S=!1,T=0,D=0,R=null,O=-1,M=null;const A=new Ut,ce=new Ut;let Q=null;const B=new bt(0);let G=0,q=t.width,k=t.height,j=1,ee=null,le=null;const xe=new Ut(0,0,q,k),W=new Ut(0,0,q,k);let X=!1;const Ce=new zl;let Pe=!1,Fe=!1,Ge=null;const Ye=new jt,We=new tt,we=new V,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return R===null?j:1}let U=i;function je(P,Y){for(let se=0;se<P.length;se++){const J=P[se],pe=t.getContext(J,Y);if(pe!==null)return pe}return null}try{const P={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fl}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),U===null){const Y=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&Y.shift(),U=je(Y,P),U===null)throw je(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ae,$,be,Le,ke,De,Z,ye,Re,w,_,I,ie,ae,te,Se,ue,H,L,re,Ne,Me,me,He;function $e(){Ae=new kb(U),$=new Db(U,Ae,e),Ae.init($),Me=new My(U,Ae,$),be=new xy(U,Ae,$),Le=new Gb(U),ke=new ay,De=new by(U,Ae,be,ke,$,Me,Le),Z=new Ub(b),ye=new Fb(b),Re=new Jv(U,$),me=new Pb(U,Ae,Re,$),w=new Bb(U,Re,Le,me),_=new jb(U,w,Re,Le),L=new Wb(U,$,De),Se=new Ib(ke),I=new ry(b,Z,ye,Ae,$,me,Se),ie=new Ty(b,ke),ae=new oy,te=new hy(Ae,$),H=new Cb(b,Z,ye,be,_,p,l),ue=new _y(b,_,$),He=new Ay(U,Le,$,be),re=new Lb(U,Ae,Le,$),Ne=new zb(U,Ae,Le,$),Le.programs=I.programs,b.capabilities=$,b.extensions=Ae,b.properties=ke,b.renderLists=ae,b.shadowMap=ue,b.state=be,b.info=Le}$e();const N=new wy(b,U);this.xr=N,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const P=Ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(q,k,!1))},this.getSize=function(P){return P.set(q,k)},this.setSize=function(P,Y,se=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=P,k=Y,t.width=Math.floor(P*j),t.height=Math.floor(Y*j),se===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(q*j,k*j).floor()},this.setDrawingBufferSize=function(P,Y,se){q=P,k=Y,j=se,t.width=Math.floor(P*se),t.height=Math.floor(Y*se),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(xe)},this.setViewport=function(P,Y,se,J){P.isVector4?xe.set(P.x,P.y,P.z,P.w):xe.set(P,Y,se,J),be.viewport(A.copy(xe).multiplyScalar(j).floor())},this.getScissor=function(P){return P.copy(W)},this.setScissor=function(P,Y,se,J){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,Y,se,J),be.scissor(ce.copy(W).multiplyScalar(j).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(P){be.setScissorTest(X=P)},this.setOpaqueSort=function(P){ee=P},this.setTransparentSort=function(P){le=P},this.getClearColor=function(P){return P.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(P=!0,Y=!0,se=!0){let J=0;if(P){let pe=!1;if(R!==null){const Ke=R.texture.format;pe=Ke===sf||Ke===af||Ke===rf}if(pe){const Ke=R.texture.type,nt=Ke===Qi||Ke===Ki||Ke===kl||Ke===xr||Ke===tf||Ke===nf,rt=H.getClearColor(),at=H.getClearAlpha(),ft=rt.r,it=rt.g,ot=rt.b;nt?(g[0]=ft,g[1]=it,g[2]=ot,g[3]=at,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=ft,v[1]=it,v[2]=ot,v[3]=at,U.clearBufferiv(U.COLOR,0,v))}else J|=U.COLOR_BUFFER_BIT}Y&&(J|=U.DEPTH_BUFFER_BIT),se&&(J|=U.STENCIL_BUFFER_BIT),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),ae.dispose(),te.dispose(),ke.dispose(),Z.dispose(),ye.dispose(),_.dispose(),me.dispose(),He.dispose(),I.dispose(),N.dispose(),N.removeEventListener("sessionstart",he),N.removeEventListener("sessionend",ze),Ge&&(Ge.dispose(),Ge=null),Qe.stop()};function Oe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=Le.autoReset,Y=ue.enabled,se=ue.autoUpdate,J=ue.needsUpdate,pe=ue.type;$e(),Le.autoReset=P,ue.enabled=Y,ue.autoUpdate=se,ue.needsUpdate=J,ue.type=pe}function Ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ie(P){const Y=P.target;Y.removeEventListener("dispose",Ie),Xe(Y)}function Xe(P){et(P),ke.remove(P)}function et(P){const Y=ke.get(P).programs;Y!==void 0&&(Y.forEach(function(se){I.releaseProgram(se)}),P.isShaderMaterial&&I.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,se,J,pe,Ke){Y===null&&(Y=Be);const nt=pe.isMesh&&pe.matrixWorld.determinant()<0,rt=Vn(P,Y,se,J,pe);be.setMaterial(J,nt);let at=se.index,ft=1;if(J.wireframe===!0){if(at=w.getWireframeAttribute(se),at===void 0)return;ft=2}const it=se.drawRange,ot=se.attributes.position;let Dt=it.start*ft,Nt=(it.start+it.count)*ft;Ke!==null&&(Dt=Math.max(Dt,Ke.start*ft),Nt=Math.min(Nt,(Ke.start+Ke.count)*ft)),at!==null?(Dt=Math.max(Dt,0),Nt=Math.min(Nt,at.count)):ot!=null&&(Dt=Math.max(Dt,0),Nt=Math.min(Nt,ot.count));const Mn=Nt-Dt;if(Mn<0||Mn===1/0)return;me.setup(pe,J,rt,se,at);let Wn,Bt=re;if(at!==null&&(Wn=Re.get(at),Bt=Ne,Bt.setIndex(Wn)),pe.isMesh)J.wireframe===!0?(be.setLineWidth(J.wireframeLinewidth*fe()),Bt.setMode(U.LINES)):Bt.setMode(U.TRIANGLES);else if(pe.isLine){let ht=J.linewidth;ht===void 0&&(ht=1),be.setLineWidth(ht*fe()),pe.isLineSegments?Bt.setMode(U.LINES):pe.isLineLoop?Bt.setMode(U.LINE_LOOP):Bt.setMode(U.LINE_STRIP)}else pe.isPoints?Bt.setMode(U.POINTS):pe.isSprite&&Bt.setMode(U.TRIANGLES);if(pe.isInstancedMesh)Bt.renderInstances(Dt,Mn,pe.count);else if(se.isInstancedBufferGeometry){const ht=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Tr=Math.min(se.instanceCount,ht);Bt.renderInstances(Dt,Mn,Tr)}else Bt.render(Dt,Mn)},this.compile=function(P,Y){function se(J,pe,Ke){J.transparent===!0&&J.side===zn&&J.forceSinglePass===!1?(J.side=An,J.needsUpdate=!0,ln(J,pe,Ke),J.side=vi,J.needsUpdate=!0,ln(J,pe,Ke),J.side=zn):ln(J,pe,Ke)}m=te.get(P),m.init(),E.push(m),P.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(b._useLegacyLights),P.traverse(function(J){const pe=J.material;if(pe)if(Array.isArray(pe))for(let Ke=0;Ke<pe.length;Ke++){const nt=pe[Ke];se(nt,P,J)}else se(pe,P,J)}),E.pop(),m=null};let st=null;function Mt(P){st&&st(P)}function he(){Qe.stop()}function ze(){Qe.start()}const Qe=new Sf;Qe.setAnimationLoop(Mt),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(P){st=P,N.setAnimationLoop(P),P===null?Qe.stop():Qe.start()},N.addEventListener("sessionstart",he),N.addEventListener("sessionend",ze),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(Y),Y=N.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,Y,R),m=te.get(P,E.length),m.init(),E.push(m),Ye.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ce.setFromProjectionMatrix(Ye),Fe=this.localClippingEnabled,Pe=Se.init(this.clippingPlanes,Fe),x=ae.get(P,h.length),x.init(),h.push(x),ut(P,Y,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(ee,le),this.info.render.frame++,Pe===!0&&Se.beginShadows();const se=m.state.shadowsArray;if(ue.render(se,P,Y),Pe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(x,P),m.setupLights(b._useLegacyLights),Y.isArrayCamera){const J=Y.cameras;for(let pe=0,Ke=J.length;pe<Ke;pe++){const nt=J[pe];vt(x,P,nt,nt.viewport)}}else vt(x,P,Y);R!==null&&(De.updateMultisampleRenderTarget(R),De.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(b,P,Y),me.resetDefaultState(),O=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function ut(P,Y,se,J){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ce.intersectsSprite(P)){J&&we.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ye);const nt=_.update(P),rt=P.material;rt.visible&&x.push(P,nt,rt,se,we.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ce.intersectsObject(P))){const nt=_.update(P),rt=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),we.copy(P.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),we.copy(nt.boundingSphere.center)),we.applyMatrix4(P.matrixWorld).applyMatrix4(Ye)),Array.isArray(rt)){const at=nt.groups;for(let ft=0,it=at.length;ft<it;ft++){const ot=at[ft],Dt=rt[ot.materialIndex];Dt&&Dt.visible&&x.push(P,nt,Dt,se,we.z,ot)}}else rt.visible&&x.push(P,nt,rt,se,we.z,null)}}const Ke=P.children;for(let nt=0,rt=Ke.length;nt<rt;nt++)ut(Ke[nt],Y,se,J)}function vt(P,Y,se,J){const pe=P.opaque,Ke=P.transmissive,nt=P.transparent;m.setupLightsView(se),Pe===!0&&Se.setGlobalState(b.clippingPlanes,se),Ke.length>0&&rn(pe,Ke,Y,se),J&&be.viewport(A.copy(J)),pe.length>0&&St(pe,Y,se),Ke.length>0&&St(Ke,Y,se),nt.length>0&&St(nt,Y,se),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function rn(P,Y,se,J){const pe=$.isWebGL2;Ge===null&&(Ge=new ki(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?fa:Qi,minFilter:Za,samples:pe?4:0})),b.getDrawingBufferSize(We),pe?Ge.setSize(We.x,We.y):Ge.setSize(_l(We.x),_l(We.y));const Ke=b.getRenderTarget();b.setRenderTarget(Ge),b.getClearColor(B),G=b.getClearAlpha(),G<1&&b.setClearColor(16777215,.5),b.clear();const nt=b.toneMapping;b.toneMapping=Ji,St(P,se,J),De.updateMultisampleRenderTarget(Ge),De.updateRenderTargetMipmap(Ge);let rt=!1;for(let at=0,ft=Y.length;at<ft;at++){const it=Y[at],ot=it.object,Dt=it.geometry,Nt=it.material,Mn=it.group;if(Nt.side===zn&&ot.layers.test(J.layers)){const Wn=Nt.side;Nt.side=An,Nt.needsUpdate=!0,kt(ot,se,J,Dt,Nt,Mn),Nt.side=Wn,Nt.needsUpdate=!0,rt=!0}}rt===!0&&(De.updateMultisampleRenderTarget(Ge),De.updateRenderTargetMipmap(Ge)),b.setRenderTarget(Ke),b.setClearColor(B,G),b.toneMapping=nt}function St(P,Y,se){const J=Y.isScene===!0?Y.overrideMaterial:null;for(let pe=0,Ke=P.length;pe<Ke;pe++){const nt=P[pe],rt=nt.object,at=nt.geometry,ft=J===null?nt.material:J,it=nt.group;rt.layers.test(se.layers)&&kt(rt,Y,se,at,ft,it)}}function kt(P,Y,se,J,pe,Ke){P.onBeforeRender(b,Y,se,J,pe,Ke),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),pe.onBeforeRender(b,Y,se,J,P,Ke),pe.transparent===!0&&pe.side===zn&&pe.forceSinglePass===!1?(pe.side=An,pe.needsUpdate=!0,b.renderBufferDirect(se,Y,J,pe,P,Ke),pe.side=vi,pe.needsUpdate=!0,b.renderBufferDirect(se,Y,J,pe,P,Ke),pe.side=zn):b.renderBufferDirect(se,Y,J,pe,P,Ke),P.onAfterRender(b,Y,se,J,pe,Ke)}function ln(P,Y,se){Y.isScene!==!0&&(Y=Be);const J=ke.get(P),pe=m.state.lights,Ke=m.state.shadowsArray,nt=pe.state.version,rt=I.getParameters(P,pe.state,Ke,Y,se),at=I.getProgramCacheKey(rt);let ft=J.programs;J.environment=P.isMeshStandardMaterial?Y.environment:null,J.fog=Y.fog,J.envMap=(P.isMeshStandardMaterial?ye:Z).get(P.envMap||J.environment),ft===void 0&&(P.addEventListener("dispose",Ie),ft=new Map,J.programs=ft);let it=ft.get(at);if(it!==void 0){if(J.currentProgram===it&&J.lightsStateVersion===nt)return ri(P,rt),it}else rt.uniforms=I.getUniforms(P),P.onBuild(se,rt,b),P.onBeforeCompile(rt,b),it=I.acquireProgram(rt,at),ft.set(at,it),J.uniforms=rt.uniforms;const ot=J.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ot.clippingPlanes=Se.uniform),ri(P,rt),J.needsLights=si(P),J.lightsStateVersion=nt,J.needsLights&&(ot.ambientLightColor.value=pe.state.ambient,ot.lightProbe.value=pe.state.probe,ot.directionalLights.value=pe.state.directional,ot.directionalLightShadows.value=pe.state.directionalShadow,ot.spotLights.value=pe.state.spot,ot.spotLightShadows.value=pe.state.spotShadow,ot.rectAreaLights.value=pe.state.rectArea,ot.ltc_1.value=pe.state.rectAreaLTC1,ot.ltc_2.value=pe.state.rectAreaLTC2,ot.pointLights.value=pe.state.point,ot.pointLightShadows.value=pe.state.pointShadow,ot.hemisphereLights.value=pe.state.hemi,ot.directionalShadowMap.value=pe.state.directionalShadowMap,ot.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,ot.spotShadowMap.value=pe.state.spotShadowMap,ot.spotLightMatrix.value=pe.state.spotLightMatrix,ot.spotLightMap.value=pe.state.spotLightMap,ot.pointShadowMap.value=pe.state.pointShadowMap,ot.pointShadowMatrix.value=pe.state.pointShadowMatrix);const Dt=it.getUniforms(),Nt=ks.seqWithValue(Dt.seq,ot);return J.currentProgram=it,J.uniformsList=Nt,it}function ri(P,Y){const se=ke.get(P);se.outputColorSpace=Y.outputColorSpace,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Vn(P,Y,se,J,pe){Y.isScene!==!0&&(Y=Be),De.resetTextureUnits();const Ke=Y.fog,nt=J.isMeshStandardMaterial?Y.environment:null,rt=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:_i,at=(J.isMeshStandardMaterial?ye:Z).get(J.envMap||nt),ft=J.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ot=!!se.morphAttributes.position,Dt=!!se.morphAttributes.normal,Nt=!!se.morphAttributes.color;let Mn=Ji;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Mn=b.toneMapping);const Wn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Bt=Wn!==void 0?Wn.length:0,ht=ke.get(J),Tr=m.state.lights;if(Pe===!0&&(Fe===!0||P!==M)){const mn=P===M&&J.id===O;Se.setState(J,P,mn)}let Rt=!1;J.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==Tr.state.version||ht.outputColorSpace!==rt||pe.isInstancedMesh&&ht.instancing===!1||!pe.isInstancedMesh&&ht.instancing===!0||pe.isSkinnedMesh&&ht.skinning===!1||!pe.isSkinnedMesh&&ht.skinning===!0||pe.isInstancedMesh&&ht.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&ht.instancingColor===!1&&pe.instanceColor!==null||ht.envMap!==at||J.fog===!0&&ht.fog!==Ke||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==Se.numPlanes||ht.numIntersection!==Se.numIntersection)||ht.vertexAlphas!==ft||ht.vertexTangents!==it||ht.morphTargets!==ot||ht.morphNormals!==Dt||ht.morphColors!==Nt||ht.toneMapping!==Mn||$.isWebGL2===!0&&ht.morphTargetsCount!==Bt)&&(Rt=!0):(Rt=!0,ht.__version=J.version);let oi=ht.currentProgram;Rt===!0&&(oi=ln(J,Y,pe));let is=!1,ir=!1,ya=!1;const Kt=oi.getUniforms(),jn=ht.uniforms;if(be.useProgram(oi.program)&&(is=!0,ir=!0,ya=!0),J.id!==O&&(O=J.id,ir=!0),is||M!==P){Kt.setValue(U,"projectionMatrix",P.projectionMatrix),Kt.setValue(U,"viewMatrix",P.matrixWorldInverse);const mn=Kt.map.cameraPosition;mn!==void 0&&mn.setValue(U,we.setFromMatrixPosition(P.matrixWorld)),$.logarithmicDepthBuffer&&Kt.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Kt.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,ir=!0,ya=!0)}if(pe.isSkinnedMesh){Kt.setOptional(U,pe,"bindMatrix"),Kt.setOptional(U,pe,"bindMatrixInverse");const mn=pe.skeleton;mn&&($.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Kt.setValue(U,"boneTexture",mn.boneTexture,De),Kt.setValue(U,"boneTextureSize",mn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const rr=se.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0&&$.isWebGL2===!0)&&L.update(pe,se,oi),(ir||ht.receiveShadow!==pe.receiveShadow)&&(ht.receiveShadow=pe.receiveShadow,Kt.setValue(U,"receiveShadow",pe.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(jn.envMap.value=at,jn.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),ir&&(Kt.setValue(U,"toneMappingExposure",b.toneMappingExposure),ht.needsLights&&ai(jn,ya),Ke&&J.fog===!0&&ie.refreshFogUniforms(jn,Ke),ie.refreshMaterialUniforms(jn,J,j,k,Ge),ks.upload(U,ht.uniformsList,jn,De)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ks.upload(U,ht.uniformsList,jn,De),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Kt.setValue(U,"center",pe.center),Kt.setValue(U,"modelViewMatrix",pe.modelViewMatrix),Kt.setValue(U,"normalMatrix",pe.normalMatrix),Kt.setValue(U,"modelMatrix",pe.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const mn=J.uniformsGroups;for(let Ma=0,rs=mn.length;Ma<rs;Ma++)if($.isWebGL2){const Sa=mn[Ma];He.update(Sa,oi),He.bind(Sa,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function ai(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function si(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,Y,se){ke.get(P.texture).__webglTexture=Y,ke.get(P.depthTexture).__webglTexture=se;const J=ke.get(P);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=se===void 0,J.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Y){const se=ke.get(P);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,se=0){R=P,T=Y,D=se;let J=!0,pe=null,Ke=!1,nt=!1;if(P){const at=ke.get(P);at.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(U.FRAMEBUFFER,null),J=!1):at.__webglFramebuffer===void 0?De.setupRenderTarget(P):at.__hasExternalTextures&&De.rebindTextures(P,ke.get(P.texture).__webglTexture,ke.get(P.depthTexture).__webglTexture);const ft=P.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(nt=!0);const it=ke.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?pe=it[Y][se]:pe=it[Y],Ke=!0):$.isWebGL2&&P.samples>0&&De.useMultisampledRTT(P)===!1?pe=ke.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?pe=it[se]:pe=it,A.copy(P.viewport),ce.copy(P.scissor),Q=P.scissorTest}else A.copy(xe).multiplyScalar(j).floor(),ce.copy(W).multiplyScalar(j).floor(),Q=X;if(be.bindFramebuffer(U.FRAMEBUFFER,pe)&&$.drawBuffers&&J&&be.drawBuffers(P,pe),be.viewport(A),be.scissor(ce),be.setScissorTest(Q),Ke){const at=ke.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,at.__webglTexture,se)}else if(nt){const at=ke.get(P.texture),ft=Y||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,at.__webglTexture,se||0,ft)}O=-1},this.readRenderTargetPixels=function(P,Y,se,J,pe,Ke,nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=ke.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&nt!==void 0&&(rt=rt[nt]),rt){be.bindFramebuffer(U.FRAMEBUFFER,rt);try{const at=P.texture,ft=at.format,it=at.type;if(ft!==Jn&&Me.convert(ft)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=it===fa&&(Ae.has("EXT_color_buffer_half_float")||$.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(it!==Qi&&Me.convert(it)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Li&&($.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-J&&se>=0&&se<=P.height-pe&&U.readPixels(Y,se,J,pe,Me.convert(ft),Me.convert(it),Ke)}finally{const at=R!==null?ke.get(R).__webglFramebuffer:null;be.bindFramebuffer(U.FRAMEBUFFER,at)}}},this.copyFramebufferToTexture=function(P,Y,se=0){const J=Math.pow(2,-se),pe=Math.floor(Y.image.width*J),Ke=Math.floor(Y.image.height*J);De.setTexture2D(Y,0),U.copyTexSubImage2D(U.TEXTURE_2D,se,0,0,P.x,P.y,pe,Ke),be.unbindTexture()},this.copyTextureToTexture=function(P,Y,se,J=0){const pe=Y.image.width,Ke=Y.image.height,nt=Me.convert(se.format),rt=Me.convert(se.type);De.setTexture2D(se,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,se.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,se.unpackAlignment),Y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,J,P.x,P.y,pe,Ke,nt,rt,Y.image.data):Y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,J,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,nt,Y.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,J,P.x,P.y,nt,rt,Y.image),J===0&&se.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,se,J,pe=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ke=P.max.x-P.min.x+1,nt=P.max.y-P.min.y+1,rt=P.max.z-P.min.z+1,at=Me.convert(J.format),ft=Me.convert(J.type);let it;if(J.isData3DTexture)De.setTexture3D(J,0),it=U.TEXTURE_3D;else if(J.isDataArrayTexture)De.setTexture2DArray(J,0),it=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment);const ot=U.getParameter(U.UNPACK_ROW_LENGTH),Dt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Nt=U.getParameter(U.UNPACK_SKIP_PIXELS),Mn=U.getParameter(U.UNPACK_SKIP_ROWS),Wn=U.getParameter(U.UNPACK_SKIP_IMAGES),Bt=se.isCompressedTexture?se.mipmaps[0]:se.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Bt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,P.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,P.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,P.min.z),se.isDataTexture||se.isData3DTexture?U.texSubImage3D(it,pe,Y.x,Y.y,Y.z,Ke,nt,rt,at,ft,Bt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(it,pe,Y.x,Y.y,Y.z,Ke,nt,rt,at,Bt.data)):U.texSubImage3D(it,pe,Y.x,Y.y,Y.z,Ke,nt,rt,at,ft,Bt),U.pixelStorei(U.UNPACK_ROW_LENGTH,ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Wn),pe===0&&J.generateMipmaps&&U.generateMipmap(it),be.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?De.setTextureCube(P,0):P.isData3DTexture?De.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?De.setTexture2DArray(P,0):De.setTexture2D(P,0),be.unbindTexture()},this.resetState=function(){T=0,D=0,R=null,be.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?yr:of}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?It:_i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ry extends Pf{}Ry.prototype.isWebGL1Renderer=!0;class Cy extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Py{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ml,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new V;class Js{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array),a=Et(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new ni(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lf extends xa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xr;const Ca=new V,Yr=new V,qr=new V,Kr=new tt,Pa=new tt,Df=new jt,Cs=new V,La=new V,Ps=new V,Ou=new tt,Ko=new tt,Fu=new tt;class Ly extends hn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new Gi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Py(t,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new Js(i,3,0,!1)),Xr.setAttribute("uv",new Js(i,2,3,!1))}this.geometry=Xr,this.material=e!==void 0?e:new Lf,this.center=new tt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),Df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-qr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;Ls(Cs.set(-.5,-.5,0),qr,o,Yr,r,a),Ls(La.set(.5,-.5,0),qr,o,Yr,r,a),Ls(Ps.set(.5,.5,0),qr,o,Yr,r,a),Ou.set(0,0),Ko.set(1,0),Fu.set(1,1);let s=e.ray.intersectTriangle(Cs,La,Ps,!1,Ca);if(s===null&&(Ls(La.set(-.5,.5,0),qr,o,Yr,r,a),Ko.set(0,1),s=e.ray.intersectTriangle(Cs,Ps,La,!1,Ca),s===null))return;const l=e.ray.origin.distanceTo(Ca);l<e.near||l>e.far||t.push({distance:l,point:Ca.clone(),uv:Bn.getInterpolation(Ca,Cs,La,Ps,Ou,Ko,Fu,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ls(n,e,t,i,r,a){Kr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Pa.x=a*Kr.x-r*Kr.y,Pa.y=r*Kr.x+a*Kr.y):Pa.copy(Kr),n.copy(e),n.x+=Pa.x,n.y+=Pa.y,n.applyMatrix4(Df)}class Bs extends fn{constructor(e,t,i,r,a,o,s,l,c){super(e,t,i,r,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ja extends xa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class If extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Zo=new jt,ku=new V,Bu=new V;class Dy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(ku),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zu=new jt,Da=new V,Jo=new V;class Iy extends Dy{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Da.setFromMatrixPosition(e.matrixWorld),i.position.copy(Da),Jo.copy(i.position),Jo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jo),i.updateMatrixWorld(),r.makeTranslation(-Da.x,-Da.y,-Da.z),zu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu)}}class Uy extends If{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Iy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ny extends If{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Uf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gu(){return(typeof performance>"u"?Date:performance).now()}class Hu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_n(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);function Vl(n,e,t,i,r,a,o,s){const l=(R,O,M,A)=>[new tt(R/o,1-A/s),new tt(M/o,1-A/s),new tt(M/o,1-O/s),new tt(R/o,1-O/s)],c=l(e+a,t,e+i+a,t+a),d=l(e+i+a,t,e+i*2+a,t+a),f=l(e,t+a,e+a,t+a+r),p=l(e+a,t+a,e+i+a,t+a+r),g=l(e+i+a,t+a,e+i+a*2,t+r+a),v=l(e+i+a*2,t+a,e+i*2+a*2,t+r+a),x=n.attributes.uv,m=[g[3],g[2],g[0],g[1]],h=[f[3],f[2],f[0],f[1]],E=[c[3],c[2],c[0],c[1]],b=[d[0],d[1],d[3],d[2]],S=[p[3],p[2],p[0],p[1]],T=[v[3],v[2],v[0],v[1]],D=[];for(const R of[m,h,E,b,S,T])for(const O of R)D.push(O.x,O.y);x.set(new Float32Array(D)),x.needsUpdate=!0}function Un(n,e,t,i,r,a){Vl(n,e,t,i,r,a,64,64)}function bl(n,e,t,i,r,a){Vl(n,e,t,i,r,a,64,32)}class cr extends an{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class Oy extends an{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new Ja({side:vi}),this.layer2Material=new Ja({side:zn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new Vt(8,8,8);Un(e,0,0,8,8,8);const t=new Tt(e,this.layer1Material),i=new Vt(9,9,9);Un(i,32,0,8,8,8);const r=new Tt(i,this.layer2Material);this.head=new cr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new Vt(8,12,4);Un(a,16,16,8,12,4);const o=new Tt(a,this.layer1Material),s=new Vt(8.5,12.5,4.5);Un(s,16,32,8,12,4);const l=new Tt(s,this.layer2Material);this.body=new cr(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const c=new Vt,d=new Tt(c,this.layer1MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3:4,d.scale.y=12,d.scale.z=4,Un(c,40,16,this.slim?3:4,12,4)});const f=new Vt,p=new Tt(f,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Un(f,40,32,this.slim?3:4,12,4)});const g=new an;g.add(d,p),this.modelListeners.push(()=>{g.position.x=this.slim?-.5:-1}),g.position.y=-4,this.rightArm=new cr(d,p),this.rightArm.name="rightArm",this.rightArm.add(g),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const v=new Vt,x=new Tt(v,this.layer1MaterialBiased);this.modelListeners.push(()=>{x.scale.x=this.slim?3:4,x.scale.y=12,x.scale.z=4,Un(v,32,48,this.slim?3:4,12,4)});const m=new Vt,h=new Tt(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3.5:4.5,h.scale.y=12.5,h.scale.z=4.5,Un(m,48,48,this.slim?3:4,12,4)});const E=new an;E.add(x,h),this.modelListeners.push(()=>{E.position.x=this.slim?.5:1}),E.position.y=-4,this.leftArm=new cr(x,h),this.leftArm.name="leftArm",this.leftArm.add(E),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const b=new Vt(4,12,4);Un(b,0,16,4,12,4);const S=new Tt(b,this.layer1MaterialBiased),T=new Vt(4.5,12.5,4.5);Un(T,0,32,4,12,4);const D=new Tt(T,this.layer2MaterialBiased),R=new an;R.add(S,D),R.position.y=-6,this.rightLeg=new cr(S,D),this.rightLeg.name="rightLeg",this.rightLeg.add(R),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const O=new Vt(4,12,4);Un(O,16,48,4,12,4);const M=new Tt(O,this.layer1MaterialBiased),A=new Vt(4.5,12.5,4.5);Un(A,0,48,4,12,4);const ce=new Tt(A,this.layer2MaterialBiased),Q=new an;Q.add(M,ce),Q.position.y=-6,this.leftLeg=new cr(M,ce),this.leftLeg.name="leftLeg",this.leftLeg.add(Q),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof cr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Fy extends an{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ja({side:zn,transparent:!0,alphaTest:1e-5});const e=new Vt(10,16,1);bl(e,0,0,10,16,1),this.cape=new Tt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class ky extends an{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ja({side:zn,transparent:!0,alphaTest:1e-5});const e=new Vt(12,22,4);bl(e,22,0,10,20,2);const t=new Tt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new an,this.leftWing.add(t),this.add(this.leftWing);const i=new Vt(12,22,4);bl(i,22,0,10,20,2);const r=new Tt(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new an,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class By extends an{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ja({side:vi});const e=new Vt(8,8,4/3);Vl(e,0,0,6,6,1,14,7),this.rightEar=new Tt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Tt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Vu=10.8*Math.PI/180;class zy extends an{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new Oy,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Fy,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Vu,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new ky,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new By,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Vu,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ds(n){return n instanceof HTMLImageElement||n instanceof HTMLVideoElement||n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}function yl(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(a.data[l+3]!==255)return!0}return!1}function lo(n){return n/64}function Wu(n,e,t){if(t){if(yl(n,0,0,e,e))return}else if(yl(n,0,0,e,e/2))return;const i=lo(e),r=(a,o,s,l)=>n.clearRect(a*i,o*i,s*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function Gy(n,e){n.save(),n.scale(-1,1);const t=lo(e),i=(r,a,o,s,l,c)=>n.drawImage(n.canvas,r*t,a*t,o*t,s*t,-l*t,c*t,-o*t,s*t);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),n.restore()}function Hy(n,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=n.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;n.width=r,n.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),Gy(i,r),Wu(i,n.width,!1)}else n.width=e.width,n.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,n.width,n.height),Wu(i,n.width,!0)}function Vy(n){if(n.width===2*n.height)return n.width/64;if(n.width*17===n.height*22)return n.width/22;if(n.width*11===n.height*23)return n.width/46;throw new Error(`Bad cape size: ${n.width}x${n.height}`)}function Wy(n,e){const t=Vy(e);n.width=64*t,n.height=32*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function jy(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===0&&a.data[l+1]===0&&a.data[l+2]===0&&a.data[l+3]===255))return!1}return!0}function Xy(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===255&&a.data[l+1]===255&&a.data[l+2]===255&&a.data[l+3]===255))return!1}return!0}function Yy(n){const e=lo(n.width),t=n.getContext("2d",{willReadFrequently:!0}),i=(s,l,c,d)=>yl(t,s*e,l*e,c*e,d*e),r=(s,l,c,d)=>jy(t,s*e,l*e,c*e,d*e),a=(s,l,c,d)=>Xy(t,s*e,l*e,c*e,d*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function qy(n){if(n.width===n.height*2&&n.height%7===0)return n.height/7;throw new Error(`Bad ears size: ${n.width}x${n.height}`)}function Ky(n,e){const t=qy(e);n.width=14*t,n.height=7*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function ju(n,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=lo(e.width),i=14*t,r=7*t;n.width=i,n.height=r;const a=n.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,i,r),a.drawImage(e,24*t,0,i,r,0,0,i,r)}async function Is(n){const e=document.createElement("img");return new Promise((t,i)=>{e.onload=()=>t(e),e.onerror=i,e.crossOrigin="anonymous",typeof n=="string"?e.src=n:(n.crossOrigin!==void 0&&(e.crossOrigin=n.crossOrigin),n.referrerPolicy!==void 0&&(e.referrerPolicy=n.referrerPolicy),e.src=n.src)})}const Xu={type:"change"},Qo={type:"start"},Yu={type:"end"},Us=new hf,qu=new qi,Zy=Math.cos(70*yv.DEG2RAD);class Jy extends wr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",_),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xu),i.update(),a=r.NONE},this.update=(function(){const L=new V,re=new Er().setFromUnitVectors(e.up,new V(0,1,0)),Ne=re.clone().invert(),Me=new V,me=new Er,He=new V,$e=2*Math.PI;return function(Oe=null){const K=i.object.position;L.copy(K).sub(i.target),L.applyQuaternion(re),s.setFromVector3(L),i.autoRotate&&a===r.NONE&&ce(M(Oe)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Ee=i.minAzimuthAngle,Ie=i.maxAzimuthAngle;isFinite(Ee)&&isFinite(Ie)&&(Ee<-Math.PI?Ee+=$e:Ee>Math.PI&&(Ee-=$e),Ie<-Math.PI?Ie+=$e:Ie>Math.PI&&(Ie-=$e),Ee<=Ie?s.theta=Math.max(Ee,Math.min(Ie,s.theta)):s.theta=s.theta>(Ee+Ie)/2?Math.max(Ee,s.theta):Math.min(Ie,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.zoomToCursor&&D||i.object.isOrthographicCamera?s.radius=le(s.radius):s.radius=le(s.radius*c),L.setFromSpherical(s),L.applyQuaternion(Ne),K.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let Xe=!1;if(i.zoomToCursor&&D){let et=null;if(i.object.isPerspectiveCamera){const st=L.length();et=le(st*c);const Mt=st-et;i.object.position.addScaledVector(S,Mt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const st=new V(T.x,T.y,0);st.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xe=!0;const Mt=new V(T.x,T.y,0);Mt.unproject(i.object),i.object.position.sub(Mt).add(st),i.object.updateMatrixWorld(),et=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;et!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(et).add(i.object.position):(Us.origin.copy(i.object.position),Us.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Us.direction))<Zy?e.lookAt(i.target):(qu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Us.intersectPlane(qu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xe=!0);return c=1,D=!1,Xe||Me.distanceToSquared(i.object.position)>o||8*(1-me.dot(i.object.quaternion))>o||He.distanceToSquared(i.target)>0?(i.dispatchEvent(Xu),Me.copy(i.object.position),me.copy(i.object.quaternion),He.copy(i.target),Xe=!1,!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ae),i.domElement.removeEventListener("pointerdown",ke),i.domElement.removeEventListener("pointercancel",Z),i.domElement.removeEventListener("wheel",w),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",Z),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Hu,l=new Hu;let c=1;const d=new V,f=new tt,p=new tt,g=new tt,v=new tt,x=new tt,m=new tt,h=new tt,E=new tt,b=new tt,S=new V,T=new tt;let D=!1;const R=[],O={};function M(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function ce(L){l.theta-=L}function Q(L){l.phi-=L}const B=(function(){const L=new V;return function(Ne,Me){L.setFromMatrixColumn(Me,0),L.multiplyScalar(-Ne),d.add(L)}})(),G=(function(){const L=new V;return function(Ne,Me){i.screenSpacePanning===!0?L.setFromMatrixColumn(Me,1):(L.setFromMatrixColumn(Me,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ne),d.add(L)}})(),q=(function(){const L=new V;return function(Ne,Me){const me=i.domElement;if(i.object.isPerspectiveCamera){const He=i.object.position;L.copy(He).sub(i.target);let $e=L.length();$e*=Math.tan(i.object.fov/2*Math.PI/180),B(2*Ne*$e/me.clientHeight,i.object.matrix),G(2*Me*$e/me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(B(Ne*(i.object.right-i.object.left)/i.object.zoom/me.clientWidth,i.object.matrix),G(Me*(i.object.top-i.object.bottom)/i.object.zoom/me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function k(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(L){if(!i.zoomToCursor)return;D=!0;const re=i.domElement.getBoundingClientRect(),Ne=L.clientX-re.left,Me=L.clientY-re.top,me=re.width,He=re.height;T.x=Ne/me*2-1,T.y=-(Me/He)*2+1,S.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function le(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function xe(L){f.set(L.clientX,L.clientY)}function W(L){ee(L),h.set(L.clientX,L.clientY)}function X(L){v.set(L.clientX,L.clientY)}function Ce(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const re=i.domElement;ce(2*Math.PI*g.x/re.clientHeight),Q(2*Math.PI*g.y/re.clientHeight),f.copy(p),i.update()}function Pe(L){E.set(L.clientX,L.clientY),b.subVectors(E,h),b.y>0?k(A()):b.y<0&&j(A()),h.copy(E),i.update()}function Fe(L){x.set(L.clientX,L.clientY),m.subVectors(x,v).multiplyScalar(i.panSpeed),q(m.x,m.y),v.copy(x),i.update()}function Ge(L){ee(L),L.deltaY<0?j(A()):L.deltaY>0&&k(A()),i.update()}function Ye(L){let re=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,i.keyPanSpeed),re=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,-i.keyPanSpeed),re=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?ce(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(i.keyPanSpeed,0),re=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?ce(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(-i.keyPanSpeed,0),re=!0;break}re&&(L.preventDefault(),i.update())}function We(){if(R.length===1)f.set(R[0].pageX,R[0].pageY);else{const L=.5*(R[0].pageX+R[1].pageX),re=.5*(R[0].pageY+R[1].pageY);f.set(L,re)}}function we(){if(R.length===1)v.set(R[0].pageX,R[0].pageY);else{const L=.5*(R[0].pageX+R[1].pageX),re=.5*(R[0].pageY+R[1].pageY);v.set(L,re)}}function Be(){const L=R[0].pageX-R[1].pageX,re=R[0].pageY-R[1].pageY,Ne=Math.sqrt(L*L+re*re);h.set(0,Ne)}function fe(){i.enableZoom&&Be(),i.enablePan&&we()}function U(){i.enableZoom&&Be(),i.enableRotate&&We()}function je(L){if(R.length==1)p.set(L.pageX,L.pageY);else{const Ne=H(L),Me=.5*(L.pageX+Ne.x),me=.5*(L.pageY+Ne.y);p.set(Me,me)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const re=i.domElement;ce(2*Math.PI*g.x/re.clientHeight),Q(2*Math.PI*g.y/re.clientHeight),f.copy(p)}function Ae(L){if(R.length===1)x.set(L.pageX,L.pageY);else{const re=H(L),Ne=.5*(L.pageX+re.x),Me=.5*(L.pageY+re.y);x.set(Ne,Me)}m.subVectors(x,v).multiplyScalar(i.panSpeed),q(m.x,m.y),v.copy(x)}function $(L){const re=H(L),Ne=L.pageX-re.x,Me=L.pageY-re.y,me=Math.sqrt(Ne*Ne+Me*Me);E.set(0,me),b.set(0,Math.pow(E.y/h.y,i.zoomSpeed)),k(b.y),h.copy(E)}function be(L){i.enableZoom&&$(L),i.enablePan&&Ae(L)}function Le(L){i.enableZoom&&$(L),i.enableRotate&&je(L)}function ke(L){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",De),i.domElement.addEventListener("pointerup",Z)),te(L),L.pointerType==="touch"?I(L):ye(L))}function De(L){i.enabled!==!1&&(L.pointerType==="touch"?ie(L):Re(L))}function Z(L){Se(L),R.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",Z)),i.dispatchEvent(Yu),a=r.NONE}function ye(L){let re;switch(L.button){case 0:re=i.mouseButtons.LEFT;break;case 1:re=i.mouseButtons.MIDDLE;break;case 2:re=i.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Rr.DOLLY:if(i.enableZoom===!1)return;W(L),a=r.DOLLY;break;case Rr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;X(L),a=r.PAN}else{if(i.enableRotate===!1)return;xe(L),a=r.ROTATE}break;case Rr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;xe(L),a=r.ROTATE}else{if(i.enablePan===!1)return;X(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Qo)}function Re(L){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;Ce(L);break;case r.DOLLY:if(i.enableZoom===!1)return;Pe(L);break;case r.PAN:if(i.enablePan===!1)return;Fe(L);break}}function w(L){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(L.preventDefault(),i.dispatchEvent(Qo),Ge(L),i.dispatchEvent(Yu))}function _(L){i.enabled===!1||i.enablePan===!1||Ye(L)}function I(L){switch(ue(L),R.length){case 1:switch(i.touches.ONE){case Cr.ROTATE:if(i.enableRotate===!1)return;We(),a=r.TOUCH_ROTATE;break;case Cr.PAN:if(i.enablePan===!1)return;we(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Cr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;fe(),a=r.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Qo)}function ie(L){switch(ue(L),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;je(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ae(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Le(L),i.update();break;default:a=r.NONE}}function ae(L){i.enabled!==!1&&L.preventDefault()}function te(L){R.push(L)}function Se(L){delete O[L.pointerId];for(let re=0;re<R.length;re++)if(R[re].pointerId==L.pointerId){R.splice(re,1);return}}function ue(L){let re=O[L.pointerId];re===void 0&&(re=new tt,O[L.pointerId]=re),re.set(L.pageX,L.pageY)}function H(L){const re=L.pointerId===R[0].pointerId?R[1]:R[0];return O[re.pointerId]}i.domElement.addEventListener("contextmenu",ae),i.domElement.addEventListener("pointerdown",ke),i.domElement.addEventListener("pointercancel",Z),i.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}const Qy={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class co{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $y=new Ef(-1,1,1,-1,0,1),Wl=new Gi;Wl.setAttribute("position",new Oi([-1,3,0,-1,-1,0,3,-1,0],3));Wl.setAttribute("uv",new Oi([0,2,0,0,2,0],2));class eM{constructor(e){this._mesh=new Tt(Wl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$y)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nf extends co{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bf.clone(e.uniforms),this.material=new Bi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new eM(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ku extends co{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class tM extends co{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new tt);this._width=i.width,this._height=i.height,t=new ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fa}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nf(Qy),this.copyPass.material.blending=Ni,this.clock=new Uf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Ku!==void 0&&(o instanceof Ku?i=!0:o instanceof tM&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class iM extends co{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new bt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const rM={uniforms:{tDiffuse:{value:null},resolution:{value:new tt(1/1024,1/512)}},vertexShader:`

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
	`};class Of{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const i=t*this.speed;this.animate(e,i),this.animationObjects.forEach((r,a)=>{const o=this.progress0.get(a);r(e,this.progress-o,a)}),this.progress+=i}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Zu extends Of{animate(e){const t=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class Ju extends Of{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class aM extends Ly{constructor(e="",t={}){const i=new Lf({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const i=t.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new Bs(e);r.magFilter=Ft,r.minFilter=Ft,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class sM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new Ny(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new Uy(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new Cy,this.camera=new Ln,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Nn.enabled=!1,this.renderer=new Pf({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new ki(0,0,{depthTexture:new Cf(0,0,Li)})),this.composer=new nM(this.renderer,t),this.renderPass=new iM(this.scene,this.camera),this.fxaaPass=new Nf(rM),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new zy,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new an,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new Jy(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Uf,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Bs(this.skinCanvas),this.skinTexture.magFilter=Ft,this.skinTexture.minFilter=Ft,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Bs(this.capeCanvas),this.capeTexture.magFilter=Ft,this.capeTexture.minFilter=Ft,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Bs(this.earsCanvas),this.earsTexture.magFilter=Ft,this.earsTexture.minFilter=Ft,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ds(e))Hy(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=Yy(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(ju(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Is(e).then(i=>this.loadSkin(i,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ds(e))Wy(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Is(e).then(i=>this.loadCape(i,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ds(e))t.textureType==="skin"?ju(this.earsCanvas,e):Ky(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Is(e).then(i=>this.loadEars(i,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,qs)}loadBackground(e,t){if(Ds(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new fn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Is(e).then(i=>this.loadBackground(i,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new V).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new tt).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new tt).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof bt||e instanceof fn?this.scene.background=e:this.scene.background=new bt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof hn||(e=new aM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}var oM=de("<canvas></canvas>");function Ff(n,e){bn(e,!0);let t=lt(e,"skin",3,null),i=lt(e,"cape",3,null),r=lt(e,"width",3,260),a=lt(e,"height",3,340),o=lt(e,"walking",3,!1),s=lt(e,"autorotate",3,!1),l=lt(e,"zoom",3,.85),c=ge(null),d=null,f,p;function g(m){if(!m)return null;const h=String(m).trim();if(!h)return null;if(/^(https?:|data:)/i.test(h))return h;const E=window.__TAURI__?.core?.convertFileSrc;return E?E(h):h}function v(){if(!d)return;const m=g(t()),h=g(i());m!==f&&(f=m,m?d.loadSkin(m,{model:"auto-detect"}).catch(()=>{}):d.resetSkin()),h!==p&&(p=h,h?d.loadCape(h).catch(()=>{}):d.resetCape())}nr(()=>(d=new sM({canvas:u(c),width:r(),height:a(),zoom:l(),fov:55}),d.controls.enablePan=!1,d.controls.enableZoom=!0,d.autoRotate=s(),d.animation=o()?new Ju:new Zu,v(),()=>{d?.dispose(),d=null})),wn(()=>{v()}),wn(()=>{d&&(d.animation=o()?new Ju:new Zu)}),wn(()=>{d&&(d.autoRotate=s())}),wn(()=>{d&&d.setSize(r(),a())});var x=oM();jd(x,m=>y(c,m),()=>u(c)),Ue(()=>Ri(x,`width:${r()??""}px;height:${a()??""}px;display:block`)),ne(n,x),yn()}var lM=de("<button> </button>"),cM=de('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),uM=de('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),dM=de('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),fM=de('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),hM=de('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),pM=de('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),mM=de('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),gM=de('<div class="p-4"><!> <!></div>'),vM=de('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),_M=de(`<form class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <!> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
            authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></form>`),xM=de('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),bM=de('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),yM=de('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),MM=de('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),SM=de('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),EM=de('<div><div class="flex items-center gap-3"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-sm font-bold text-(--accent)"> </span> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),wM=de('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),TM=de('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <!> <div class="border-t border-(--border)"></div></div></div></div>');function AM(n,e){bn(e,!0);let t=lt(e,"accounts",19,()=>[]),i=lt(e,"active",3,null),r=ge("offline"),a=ge(""),o=ge(!1),s=ge(""),l=ge(""),c=ge("idle"),d=ge(""),f=ge(null),p=ge(!1),g=null,v=ge(""),x=ge(""),m=ge(!1),h=ge(!1),E=ge(""),b=ge(""),S=ge(""),T=ge(""),D=ge(null),R=ge(""),O=ge("");function M(Z,ye){const Re=window.__TAURI__?.core;return Re?Re.invoke(Z,ye):Promise.reject(new Error("Tauri backend unavailable in this preview."))}nr(()=>{const Z=to(()=>e.onclose?.());return()=>no(Z)}),Rp(()=>A());function A(){g&&(clearInterval(g),g=null)}wn(()=>{const Z=u(s).trim(),ye=setTimeout(async()=>{if(!Z){y(l,"");return}try{y(l,await M("offline_uuid",{username:Z}),!0)}catch{y(l,"")}},200);return()=>clearTimeout(ye)});async function ce(Z){Z.preventDefault(),y(a,""),y(o,!0);try{await M("add_offline_account",{username:u(s).trim()}),y(s,""),y(l,""),await e.onrefresh?.()}catch(ye){y(a,String(ye),!0)}finally{y(o,!1)}}async function Q(){y(d,""),y(p,!1),y(c,"requesting");try{y(f,await M("start_microsoft_device_code"),!0),y(c,"code"),A(),g=setInterval(B,(u(f).interval||5)*1e3)}catch(Z){y(c,"idle"),y(d,String(Z),!0)}}async function B(){if(u(f))try{const Z=await M("poll_microsoft_device_code",{device:u(f)});if(Z.state==="pending")return;if(Z.state==="slow_down"){A(),g=setInterval(B,((u(f).interval||5)+5)*1e3);return}if(A(),Z.state==="failed"){y(d,Z.reason,!0),y(f,null),y(c,"idle");return}y(f,null),y(c,"signedin"),await e.onrefresh?.()}catch(Z){y(d,String(Z),!0)}}async function G(){if(u(f))try{await navigator.clipboard.writeText(u(f).user_code),y(p,!0),setTimeout(()=>y(p,!1),1600)}catch{}}async function q(Z){Z.preventDefault(),y(a,""),y(m,!0),y(h,!1);try{await M("add_elyby_account",{username:u(v).trim(),password:u(x)}),y(v,""),y(x,""),y(h,!0),await e.onrefresh?.()}catch(ye){y(a,String(ye),!0)}finally{y(m,!1)}}async function k(Z){Z.preventDefault(),y(a,""),y(o,!0);try{const ye=await M("add_custom_yggdrasil_account",{username:u(E).trim(),serverUrl:u(b).trim()});(u(S).trim()||u(T).trim())&&await M("set_account_textures",{id:ye.id,skin:u(S).trim()||null,cape:u(T).trim()||null}),y(E,""),y(b,""),y(S,""),y(T,""),await e.onrefresh?.()}catch(ye){y(a,String(ye),!0)}finally{y(o,!1)}}async function j(Z){const ye=window.__TAURI__?.dialog?.open;if(!ye){y(a,"File picker unavailable in this build.");return}try{const Re=await ye({multiple:!1,title:Z==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Re)return;const w=String(Re);y(Z==="skin"?S:T,w,!0),y(a,"")}catch(Re){y(a,String(Re),!0)}}async function ee(Z){y(a,"");try{await M("set_active_account",{id:Z}),await e.onrefresh?.()}catch(ye){y(a,String(ye),!0)}}async function le(Z){y(a,"");try{await M("remove_account",{id:Z}),u(D)===Z&&y(D,null),await e.onrefresh?.()}catch(ye){y(a,String(ye),!0)}}function xe(Z){if(u(D)===Z.id){y(D,null);return}y(D,Z.id,!0),y(R,Z.skin??"",!0),y(O,Z.cape??"",!0)}async function W(Z){const ye=window.__TAURI__?.dialog?.open;if(!ye){y(a,"File picker unavailable in this build.");return}try{const Re=await ye({multiple:!1,title:Z==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Re)return;y(Z==="skin"?R:O,String(Re),!0),y(a,"")}catch(Re){y(a,String(Re),!0)}}async function X(){y(a,""),y(o,!0);try{await M("set_account_textures",{id:u(D),skin:u(R).trim()||null,cape:u(O).trim()||null}),await e.onrefresh?.(),y(D,null)}catch(Z){y(a,String(Z),!0)}finally{y(o,!1)}}async function Ce(){y(R,""),y(O,""),await X()}function Pe(Z){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[Z.account_type.type]??"Yggdrasil"}const Fe=wt(()=>t().find(Z=>Z.id===u(D))??null);var Ge=TM(),Ye=F(Ge),We=F(Ye),we=C(F(We),2),Be=C(We,2);At(Be,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],ol,(Z,ye)=>{var Re=wt(()=>nd(ye,2));let w=()=>u(Re)[0],_=()=>u(Re)[1];var I=lM(),ie=ve(I,!0);Ue(()=>{yt(I,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${u(r)===w()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),_e(ie,_())}),oe("click",I,()=>{y(r,w(),!0),y(a,"")}),ne(Z,I)});var fe=C(Be,2),U=F(fe);{var je=Z=>{var ye=uM(),Re=Lt(ye),w=F(Re),_=C(w,2),I=C(Re,2);{var ie=ae=>{var te=cM(),Se=C(F(te),2),ue=ve(Se,!0);Ue(()=>_e(ue,u(l))),ne(ae,te)};qe(I,ae=>{u(l)&&ae(ie)})}Ue(ae=>_.disabled=ae,[()=>!u(s).trim()||u(o)]),Ui("submit",Re,ce),Ot(w,()=>u(s),ae=>y(s,ae)),ne(Z,ye)},Ae=Z=>{var ye=gM(),Re=F(ye);{var w=Se=>{var ue=dM(),H=Lt(ue);Ue(()=>H.disabled=u(o)),oe("click",H,Q),ne(Se,ue)},_=Se=>{var ue=fM();ne(Se,ue)},I=Se=>{var ue=hM(),H=C(F(ue),2),L=ve(H,!0),re=C(H,4),Ne=ve(re,!0),Me=C(re,2),me=F(Me),He=ve(me,!0),$e=C(me,2);Ue(()=>{_e(L,u(f).verification_uri),_e(Ne,u(f).user_code),_e(He,u(p)?"Copied ✓":"Copy code")}),oe("click",me,G),oe("click",$e,Q),ne(Se,ue)},ie=Se=>{var ue=pM(),H=C(Lt(ue),2);oe("click",H,()=>{y(c,"idle"),y(d,"")}),ne(Se,ue)};qe(Re,Se=>{u(c)==="idle"?Se(w):u(c)==="requesting"?Se(_,1):u(c)==="code"&&u(f)?Se(I,2):u(c)==="signedin"&&Se(ie,3)})}var ae=C(Re,2);{var te=Se=>{var ue=mM(),H=ve(ue,!0);Ue(()=>_e(H,u(d))),ne(Se,ue)};qe(ae,Se=>{u(d)&&Se(te)})}ne(Z,ye)},$=Z=>{var ye=_M(),Re=C(F(ye),2),w=C(Re,2),_=C(w,2),I=ve(_,!0),ie=C(_,2);{var ae=te=>{var Se=vM();ne(te,Se)};qe(ie,te=>{u(h)&&te(ae)})}Ue(te=>{_.disabled=te,_e(I,u(m)?"Signing in…":"Sign in")},[()=>!u(v).trim()||!u(x)||u(m)]),Ui("submit",ye,q),Ot(Re,()=>u(v),te=>y(v,te)),Ot(w,()=>u(x),te=>y(x,te)),ne(Z,ye)},be=Z=>{var ye=xM(),Re=F(ye),w=C(Re,2),_=C(w,2),I=F(_),ie=C(F(I)),ae=ve(ie,!0),te=C(I,2),Se=C(F(te)),ue=ve(Se,!0),H=C(_,2);Ue(L=>{_e(ae,u(S)||"none"),_e(ue,u(T)||"none"),H.disabled=L},[()=>!u(E).trim()||!u(b).trim()||u(o)]),Ui("submit",ye,k),Ot(Re,()=>u(b),L=>y(b,L)),Ot(w,()=>u(E),L=>y(E,L)),oe("click",I,()=>j("skin")),oe("click",te,()=>j("cape")),ne(Z,ye)};qe(U,Z=>{u(r)==="offline"?Z(je):u(r)==="microsoft"?Z(Ae,1):u(r)==="elyby"?Z($,2):u(r)==="custom"&&Z(be,3)})}var Le=C(U,2);{var ke=Z=>{var ye=bM(),Re=ve(ye,!0);Ue(()=>_e(Re,u(a))),ne(Z,ye)};qe(Le,Z=>{u(a)&&Z(ke)})}var De=C(Le,2);At(De,21,t,Z=>Z.id,(Z,ye)=>{var Re=EM(),w=F(Re),_=F(w),I=ve(_,!0),ie=C(_,2),ae=F(ie),te=F(ae),Se=ve(te,!0),ue=C(te,2),H=ve(ue,!0),L=C(ue,2);{var re=Xe=>{var et=yM();ne(Xe,et)};qe(L,Xe=>{i()?.id===u(ye).id&&Xe(re)})}var Ne=C(ae,2),Me=ve(Ne,!0),me=C(ie,2),He=F(me),$e=F(He);dn($e,{emoji:"🎨"});var N=C(He,2);{var Oe=Xe=>{var et=MM();oe("click",et,()=>ee(u(ye).id)),ne(Xe,et)};qe(N,Xe=>{i()?.id!==u(ye).id&&Xe(Oe)})}var K=C(N,2),Ee=C(w,2);{var Ie=Xe=>{var et=SM(),st=F(et);Ff(st,{get skin(){return u(R)},get cape(){return u(O)},width:110,height:150});var Mt=C(st,2),he=F(Mt),ze=C(F(he)),Qe=ve(ze,!0),ut=C(he,2),vt=C(F(ut)),rn=ve(vt,!0),St=C(ut,2),kt=F(St),ln=C(kt,2);Ue(()=>{_e(Qe,u(R)||"default (Steve/Alex)"),_e(rn,u(O)||"none"),kt.disabled=u(o)}),oe("click",he,()=>W("skin")),oe("click",ut,()=>W("cape")),oe("click",kt,X),oe("click",ln,Ce),ne(Xe,et)};qe(Ee,Xe=>{u(D)===u(ye).id&&u(Fe)&&Xe(Ie)})}Ue((Xe,et)=>{yt(Re,1,`border-b border-(--border) px-4 py-2.5 ${i()?.id===u(ye).id?"bg-(--accent)/10":""}`),_e(I,Xe),_e(Se,u(ye).username),_e(H,et),_e(Me,u(ye).uuid)},[()=>u(ye).username[0]?.toUpperCase(),()=>Pe(u(ye))]),oe("click",He,()=>xe(u(ye))),oe("click",K,()=>le(u(ye).id)),ne(Z,Re)},Z=>{var ye=wM();ne(Z,ye)}),oe("click",Ge,Z=>{Z.target===Z.currentTarget&&e.onclose?.()}),oe("click",we,()=>e.onclose?.()),ne(n,Ge),yn()}Hn(["click"]);var RM=de('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),CM=de('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),PM=de('<p class="text-center text-[11px] text-red-400"> </p>'),LM=de("<option> </option>"),DM=de("<option>No instances yet</option>"),IM=de('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),UM=de('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),NM=de('<p class="mt-2 text-[11px] text-red-400"> </p>'),OM=de('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer">▶ Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),FM=de('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function kM(n,e){bn(e,!0);let t=lt(e,"instances",19,()=>[]),i=lt(e,"active",3,null),r=lt(e,"gameRunning",3,!1),a=lt(e,"status",3,"Ready");function o(Q,B){const G=window.__TAURI__?.core;return G?G.invoke(Q,B):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let l=ge(Pt(p())),c=ge(""),d=ge(""),f=ge("");function p(){try{const Q=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray(Q)?Q:[]}catch{return[]}}function g(){localStorage.setItem(s,JSON.stringify(u(l)))}function v(Q){Q.preventDefault(),y(f,"");const B=u(d).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(B)){y(f,"Address must be a hostname (optionally host:port).");return}y(l,[...u(l),{name:u(c).trim()||B.split(":")[0],address:B}],!0),g(),y(c,""),y(d,"")}function x(Q){y(l,u(l).filter((B,G)=>G!==Q),!0),g()}let m=ge("");wn(()=>{u(m)&&t().some(Q=>Q.id===u(m))||y(m,t()[0]?.id??"",!0)});const h=wt(()=>t().find(Q=>Q.id===u(m))?.name??"no instance selected");function E(Q){!u(m)||r()||e.onlaunch?.(u(m),Q.address)}let b=ge(""),S=ge(!1);async function T(Q){const B=window.__TAURI__?.dialog?.open;if(!B){y(b,"File picker unavailable in this build.");return}try{const G=await B({multiple:!1,title:Q==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!G)return;y(S,!0),y(b,""),await o("set_account_textures",{id:i().id,skin:Q==="skin"?String(G):null,cape:Q==="cape"?String(G):null}),await e.onrefresh?.()}catch(G){y(b,String(G),!0)}finally{y(S,!1)}}async function D(){if(i())try{y(S,!0),await o("set_account_textures",{id:i().id,skin:null,cape:null}),await e.onrefresh?.()}catch(Q){y(b,String(Q),!0)}finally{y(S,!1)}}function R(Q){return{offline:"Offline",microsoft:"Microsoft"}[Q.account_type.type]??"Yggdrasil"}var O=FM(),M=F(O);{var A=Q=>{var B=RM(),G=F(B);dn(G,{emoji:"👤",size:30});var q=C(G,6);oe("click",q,()=>e.onopenaccounts?.()),ne(Q,B)},ce=Q=>{var B=OM(),G=F(B),q=F(G);Ff(q,{get skin(){return i().skin},get cape(){return i().cape},width:220,height:300});var k=C(q,2),j=F(k),ee=ve(j,!0),le=C(j,2),xe=ve(le,!0),W=C(k,2),X=F(W),Ce=C(X,2),Pe=C(Ce,2);{var Fe=_=>{var I=CM();Ue(()=>I.disabled=u(S)),oe("click",I,D),ne(_,I)};qe(Pe,_=>{(i().cape||i().skin)&&_(Fe)})}var Ge=C(W,2);{var Ye=_=>{var I=PM(),ie=ve(I,!0);Ue(()=>_e(ie,u(b))),ne(_,I)};qe(Ge,_=>{u(b)&&_(Ye)})}var We=C(G,2),we=F(We),Be=C(F(we),2),fe=F(Be);At(fe,21,t,_=>_.id,(_,I)=>{var ie=LM(),ae=ve(ie,!0),te={};Ue(()=>{_e(ae,u(I).name),te!==(te=u(I).id)&&(ie.value=(ie.__value=te)??"")}),ne(_,ie)},_=>{var I=DM();I.value=I.__value="",ne(_,I)}),Xs(fe);var U=C(fe,2),je=C(Be,2),Ae=ve(je,!0),$=C(je,2),be=ve($,!0),Le=C(we,2),ke=C(F(Le),2);At(ke,19,()=>u(l),_=>_.address,(_,I,ie)=>{var ae=IM(),te=F(ae),Se=F(te),ue=ve(Se,!0),H=C(Se,2),L=ve(H,!0),re=C(te,2),Ne=C(re,2);Ue(()=>{_e(ue,u(I).name),_e(L,u(I).address),re.disabled=!u(m)||r(),Je(re,"title",`Join ${u(I).address} with ${u(h)}`)}),oe("click",re,()=>E(u(I))),oe("click",Ne,()=>x(u(ie))),ne(_,ae)},_=>{var I=UM();ne(_,I)});var De=C(ke,2),Z=F(De),ye=C(Z,2),Re=C(De,2);{var w=_=>{var I=NM(),ie=ve(I,!0);Ue(()=>_e(ie,u(f))),ne(_,I)};qe(Re,_=>{u(f)&&_(w)})}Ue(_=>{_e(ee,i().username),_e(xe,_),X.disabled=u(S),Ce.disabled=u(S),je.disabled=!u(m)||r(),_e(Ae,r()?"GAME RUNNING…":"LAUNCH GAME"),_e(be,r()?a():u(h))},[()=>R(i())]),oe("click",X,()=>T("skin")),oe("click",Ce,()=>T("cape")),Ys(fe,()=>u(m),_=>y(m,_)),oe("click",U,()=>e.onopenconsole?.()),oe("click",je,()=>e.onlaunch?.(u(m),null)),Ui("submit",De,v),Ot(Z,()=>u(c),_=>y(c,_)),Ot(ye,()=>u(d),_=>y(d,_)),ne(Q,B)};qe(M,Q=>{i()?Q(ce,-1):Q(A)})}ne(n,O),yn()}Hn(["click"]);var BM=de('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),zM=de('<span class="truncate text-[13px]"> </span>'),GM=de('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px] leading-none"><!></span> <!></button>'),HM=de('<span class="truncate text-[13px]">Add Instance</span>'),VM=de('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),WM=de('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),jM=de('<button role="tab"> </button>'),XM=de('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),YM=de('<div class="mb-4 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance">⤓ Install .mrpack</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),qM=de('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),KM=de('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),ZM=de('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),JM=de("<div> </div>"),QM=de('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),$M=de('<p class="mt-2 text-[12px] text-red-400"> </p>'),eS=de('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),tS=de('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),nS=de('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),iS=de('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="w-5 shrink-0 text-center text-[15px] leading-none">＋</span> <!></button></div> <button><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-[11px] font-bold text-(--accent)"><!></span> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!></div>');function rS(n,e){bn(e,!0);let t=ge("…"),i=ge("instances"),r=ge(Pt(qd(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));wn(()=>{eg(u(r)),localStorage.setItem("twilight-theme",u(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:ls(u(r))?"dark":"light"}).catch(()=>{})}),Xm();let a=ge("Ready"),o=ge(!1),s=ge(Pt(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));wn(()=>{localStorage.setItem("twilight-mode",u(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:u(s)}).catch(()=>{})});const l=[{id:"instances",label:"Instances",icon:"▦"},{id:"worlds",label:"Servers & P2P",icon:"⌗"},{id:"downloads",label:"Downloads",icon:"⤓"},{id:"settings",label:"Settings",icon:"⚙"}],c={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]};let d=ge(Pt([])),f=ge(null),p=ge(!1),g=ge(Pt([])),v=ge(!1),x=ge(""),m=ge(!1),h=ge(!1),E=ge(""),b=ge(!1),S=ge(""),T=ge(null),D=wt(()=>u(T)?"edit":u(i)),R=ge(null),O=ge(null),M=ge(!1),A=ge(""),ce=ge(null),Q=ge(""),B=ge(0),G=ge(0),q=ge("");async function k(z,Te){return window.__TAURI__.core.invoke(z,Te)}function j(){y(r,ls(u(r))?"twilight-light":"twilight-dark",!0)}async function ee(){y(v,!0),y(x,"");try{y(g,await k("discover_java_installations"),!0)}catch(z){y(x,String(z),!0)}finally{y(v,!1)}}function le(){y(m,!0)}async function xe(){if(u(E).trim()){y(b,!0),y(S,"");try{const z=await k("install_modpack",{pathOrUrl:u(E).trim()});y(h,!1),y(E,""),await De(),z&&y(Ae,z,!0),y(a,"Modpack installed.")}catch(z){y(S,String(z),!0)}finally{y(b,!1)}}}let W=ge(Pt([])),X=ge(!1),Ce=ge(!1),Pe=ge(null);wn(()=>{u(W).length,u(Pe)&&(u(Pe).scrollTop=u(Pe).scrollHeight)});function Fe(z){u(W).push(z),u(W).length>5e3&&u(W).splice(0,u(W).length-5e3)}function Ge(){y(W,[],!0)}function Ye(z){return z.stream==="stderr"||z.line.includes("/ERROR]")?"text-rose-400":z.line.includes("/WARN]")?"text-(--accent-star)":z.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function We(){const z=u(W).map(Te=>Te.line).join(`
`);try{await navigator.clipboard.writeText(z)}catch{const Te=document.createElement("textarea");Te.value=z,document.body.append(Te),Te.select(),document.execCommand("copy"),Te.remove()}}async function we(){if(u(Ce))try{await k("kill_instance"),Fe({stream:"stdout",line:"kill requested"})}catch(z){Fe({stream:"stderr",line:String(z)})}}let Be=ge(Pt([])),fe=ge(""),U=ge(null),je=ge(""),Ae=ge(null),$=ge(null),be=ge(""),Le=ge(!1);function ke(){const z=u(je).trim().toLowerCase();return z?u(Be).filter(Te=>Te.name.toLowerCase().includes(z)||Te.minecraft_version.toLowerCase().includes(z)||Te.id.toLowerCase().includes(z)):u(Be)}async function De(){try{y(Be,await k("scan_instances"),!0),y(fe,"")}catch(z){y(fe,String(z),!0)}}function Z(z){y(Ae,z,!0)}async function ye(z,Te=null){if(u(Ce))return;const Ze=u(Be).find(gt=>gt.id===z),_t=Ze?Ze.name:z;y(Ce,!0),y(a,Te?`Running ${_t} → ${Te}…`:`Running ${_t}…`,!0),y(X,!0);try{const gt=await k("launch_instance",{instanceId:z,server:Te});Fe({stream:"stdout",line:`launcher reports exit code ${gt}`}),await De(),y(a,"Ready")}catch(gt){console.error("Launch failed:",gt),Fe({stream:"stderr",line:`[ERROR] Launch failed: ${gt}`}),y(a,"Launch failed")}finally{y(Ce,!1),u(a)!=="Launch failed"&&y(a,"Ready")}}function Re(){u(O)&&k("open_path",{path:u(O).instances_dir}).catch(z=>y(a,String(z),!0))}function w(z){u(O)&&k("open_path",{path:[u(O).instances_dir.replace(/\\/g,"/"),z].join("/")}).catch(Te=>y(a,String(Te),!0))}function _(z){y(be,""),y($,z,!0)}async function I(z){if(!(!u($)||u(Le))){y(Le,!0),y(be,"");try{await k("delete_instance",{instanceId:u($),toTrash:z}),u(Ae)===u($)&&y(Ae,null),y($,null),await De(),y(a,z?"Instance moved to trash.":"Instance deleted.",!0)}catch(Te){y(be,String(Te),!0)}finally{y(Le,!1)}}}const ie=wt(()=>[...new Set(u(Be).map(z=>z.group).filter(Boolean))].sort((z,Te)=>z.localeCompare(Te)));async function ae(z){if(!u(re))return;const Te=u(re).name;try{await k("set_instance_group",{instanceId:u(re).id,group:z}),await De(),y(a,z?`Moved ${Te} to ${z}.`:`${Te} is ungrouped.`,!0)}catch(Ze){y(a,String(Ze),!0)}}async function te(){if(!u(re))return;const z=u(re).name;try{const Te=await k("duplicate_instance",{instanceId:u(re).id});await De(),y(Ae,Te.id,!0),y(a,`Copied ${z}.`)}catch(Te){y(a,String(Te),!0)}}async function Se(){if(!u(re))return;const z=window.__TAURI__?.dialog?.save;if(!z){y(a,"File picker unavailable in this build.");return}try{const Te=await z({title:"Export instance",defaultPath:`${u(re).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Te)return;const Ze=await k("export_instance_zip",{instanceId:u(re).id,destPath:Te});y(a,`Exported to ${Ze}.`)}catch(Te){y(a,String(Te),!0)}}async function ue(){if(u(re))try{const z=await k("create_desktop_shortcut",{instanceId:u(re).id});y(a,`Shortcut created: ${z}`)}catch(z){y(a,String(z),!0)}}async function H(z,Te){y(m,!1),await De(),z?.id&&y(Ae,z.id,!0),y(a,Te||`Instance ${z?.name??""} created.`,!0)}function L(z){y(T,z,!0)}const re=wt(()=>u(Be).find(z=>z.id===u(Ae))??null);let Ne=ge(null),Me=0;wn(()=>{const z=u(re);u(T);const Te=++Me;y(Ne,null),z&&k("list_instance_mods",{instanceId:z.id}).then(Ze=>{Te===Me&&y(Ne,Ze.length,!0)}).catch(()=>{Te===Me&&y(Ne,null)})});async function me(){try{y(ce,await k("get_java_prefs"),!0),y(Q,u(ce).java_path??"",!0),y(B,u(ce).min_memory_mb,!0),y(G,u(ce).max_memory_mb,!0),y(q,""),u(g).length===0&&await ee()}catch{}}async function He(){y(q,"");try{await k("set_java_prefs",{javaPath:u(Q).trim()||null,minMemoryMb:Number(u(B))||0,maxMemoryMb:Number(u(G))||0}),y(q,"Java settings saved.")}catch(z){y(q,String(z),!0)}}async function $e(){y(M,!0);try{y(O,await k("get_storage"),!0)}catch(z){y(A,String(z),!0)}finally{y(M,!1)}}async function N(z,Te){y(M,!0),y(A,"");try{await k("set_folder_dir",{kind:z,path:Te?.trim()||null}),y(O,await k("get_storage"),!0),y(A,"Folders updated."),(z==="instances"||z==="shared")&&(await De(),u(Ae)&&!u(Be).some(Ze=>Ze.id===u(Ae))&&y(Ae,null))}catch(Ze){y(A,String(Ze),!0)}finally{y(M,!1)}}function Oe(z){k("open_path",{path:z}).catch(Te=>y(a,String(Te),!0))}async function K(){y(M,!0),y(A,"");try{await k("clean_staging"),y(A,"Staging cleaned.")}catch(z){y(A,String(z),!0)}finally{y(M,!1)}}async function Ee(){try{y(d,await k("get_accounts"),!0),y(f,await k("get_active_account"),!0)}catch{}}function Ie(z){return{offline:"Offline",microsoft:"Microsoft"}[z.account_type.type]??"Yggdrasil"}nr(()=>{const z=[],Te=Ze=>{if(Ze.key==="Escape"){const tn=cc();if(tn){tn();return}u(U)?y(U,null):u($)?(y($,null),y(be,"")):u(T)?y(T,null):u(Ae)?y(Ae,null):u(p)?y(p,!1):u(h)?y(h,!1):u(X)&&y(X,!1);return}if(u(U)||u($)||u(p)||u(h)||u(T)||u(X)||cc()||Ze.target?.closest?.("input, textarea, select, [contenteditable]"))return;const gt=ke();if(!gt.length)return;const Xt=gt.findIndex(tn=>tn.id===u(Ae));let Gt=null;if(Ze.key==="ArrowDown"||Ze.key==="ArrowRight")Gt=Xt+1;else if(Ze.key==="ArrowUp"||Ze.key==="ArrowLeft")Gt=Xt<0?0:Xt-1;else if(Ze.key==="Enter"&&Xt>=0&&document.activeElement===document.body){Ze.preventDefault(),ye(gt[Xt].id);return}Gt!=null&&gt[Gt]&&(Ze.preventDefault(),y(Ae,gt[Gt].id,!0))};return window.addEventListener("keydown",Te),(async()=>{try{y(t,await k("get_version"),!0)}catch{y(t,"dev")}try{z.push(await window.__TAURI__.event.listen("launch-log",Ze=>Fe(Ze.payload))),z.push(await window.__TAURI__.event.listen("tauri://drag-drop",Ze=>{const _t=Ze.payload?.paths?.[0];_t&&_t.endsWith(".mrpack")&&(u(h)?y(E,_t,!0):y(R,_t,!0))}))}catch{}await Ee(),await De(),await $e();try{const Ze=await k("get_startup_launch");Ze&&u(Be).some(_t=>_t.id===Ze)&&ye(Ze)}catch{}})(),()=>z.forEach(Ze=>Ze())});var Xe=iS(),et=F(Xe),st=F(et),Mt=C(F(st),2);{var he=z=>{var Te=BM();ne(z,Te)};qe(Mt,z=>{u(o)&&z(he)})}var ze=C(st,2),Qe=F(ze);At(Qe,17,()=>l,z=>z.id,(z,Te)=>{var Ze=GM(),_t=F(Ze),gt=F(_t);{var Xt=Ht=>{dn(Ht,{get emoji(){return u(Te).icon},size:15})},Gt=Ht=>{var zt=ui();Ue(()=>_e(zt,u(Te).icon)),ne(Ht,zt)};qe(gt,Ht=>{u(Te).id==="settings"?Ht(Xt):Ht(Gt,-1)})}var tn=C(_t,2);{var Xn=Ht=>{var zt=zM(),li=ve(zt,!0);Ue(()=>_e(li,u(Te).label)),ne(Ht,zt)};qe(tn,Ht=>{u(o)&&Ht(Xn)})}Ue(()=>{yt(Ze,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${u(o)?"":"justify-center"} ${u(i)===u(Te).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Je(Ze,"title",u(Te).label)}),oe("click",Ze,()=>{y(i,u(Te).id,!0),y(T,null),y(s,"launcher"),u(Te).id==="settings"&&(me(),u(O)||$e())}),ne(z,Ze)});var ut=C(Qe,2),vt=C(F(ut),2);{var rn=z=>{var Te=HM();ne(z,Te)};qe(vt,z=>{u(o)&&z(rn)})}var St=C(ze,2),kt=F(St),ln=F(kt);{var ri=z=>{var Te=ui();Ue(Ze=>_e(Te,Ze),[()=>u(f).username[0]?.toUpperCase()]),ne(z,Te)},Vn=z=>{var Te=ui("?");ne(z,Te)};qe(ln,z=>{u(f)?z(ri):z(Vn,-1)})}var ai=C(kt,2);{var si=z=>{var Te=VM(),Ze=F(Te),_t=ve(Ze,!0),gt=C(Ze,2),Xt=ve(gt,!0);Ue(Gt=>{_e(_t,u(f)?u(f).username:"Add account"),_e(Xt,Gt)},[()=>u(f)?Ie(u(f)):"Offline"]),ne(z,Te)};qe(ai,z=>{u(o)&&z(si)})}var P=C(St,2),Y=ve(P,!0),se=C(et,2),J=F(se),pe=F(J),Ke=F(pe);{var nt=z=>{var Te=WM(),Ze=Lt(Te),_t=C(Ze,2),gt=ve(_t,!0);Ue(()=>{Je(_t,"title",u(T)?.name),_e(gt,u(T)?.name)}),oe("click",Ze,()=>y(T,null)),ne(z,Te)},rt=z=>{var Te=XM(),Ze=Lt(Te),_t=ve(Ze),gt=C(Ze,4);At(gt,20,()=>[["launcher","Launcher"],["client","Client"]],ol,(Xt,Gt)=>{var tn=wt(()=>nd(Gt,2));let Xn=()=>u(tn)[0],Ht=()=>u(tn)[1];var zt=jM(),li=ve(zt,!0);Ue(()=>{yt(zt,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${u(s)===Xn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Je(zt,"aria-selected",u(s)===Xn()),_e(li,Ht())}),oe("click",zt,()=>y(s,Xn(),!0)),ne(Xt,zt)}),Ue(()=>_e(_t,`TwilightMC Bolide (alpha-v${u(t)??""})`)),ne(z,Te)};qe(Ke,z=>{u(D)==="edit"?z(nt):z(rt,-1)})}var at=C(pe,2),ft=ve(at,!0),it=C(J,2),ot=F(it);{var Dt=z=>{kM(z,{get instances(){return u(Be)},get active(){return u(f)},get gameRunning(){return u(Ce)},get status(){return u(a)},onlaunch:ye,onopenconsole:()=>y(X,!0),onrefresh:Ee,onopenaccounts:()=>y(p,!0)})},Nt=z=>{lm(z,{get instance(){return u(T)},get storage(){return u(O)},onback:()=>y(T,null),onopenconsole:()=>y(X,!0)})},Mn=z=>{Mg(z,{get version(){return u(t)},get storage(){return u(O)},get runtimes(){return u(g)},get scanning(){return u(v)},get javaError(){return u(x)},get storageBusy(){return u(M)},get storageMsg(){return u(A)},get javaMsg(){return u(q)},get gameRunning(){return u(Ce)},onback:()=>y(i,"instances"),onscanjava:ee,onsaveprefs:He,onsavefolder:N,onopenfolder:Oe,oncleanstaging:K,onopenurl:Te=>k("open_path",{path:Te}).catch(Ze=>y(a,String(Ze),!0)),get theme(){return u(r)},set theme(Te){y(r,Te,!0)},get javaPath(){return u(Q)},set javaPath(Te){y(Q,Te,!0)},get minMem(){return u(B)},set minMem(Te){y(B,Te,!0)},get maxMem(){return u(G)},set maxMem(Te){y(G,Te,!0)}})},Wn=z=>{var Te=YM(),Ze=Lt(Te),_t=F(Ze),gt=C(_t,2),Xt=F(gt);dn(Xt,{emoji:"📂"});var Gt=C(gt,2),tn=C(Gt,2),Xn=F(tn);dn(Xn,{emoji:"⚙"});var Ht=C(tn,2),zt=C(Ht,4),li=F(zt);{var Hi=Sn=>{dn(Sn,{emoji:"☀",alt:"Light theme"})},ci=wt(()=>ls(u(r))),Yt=Sn=>{dn(Sn,{emoji:"🌙",alt:"Dark theme"})};qe(li,Sn=>{u(ci)?Sn(Hi):Sn(Yt,-1)})}var xi=C(Ze,2);{let Sn=wt(ke);Vp(xi,{get instances(){return u(Sn)},get error(){return u(fe)},get query(){return u(je)},get selectedId(){return u(Ae)},get gameRunning(){return u(Ce)},get menuFor(){return u(U)},onselect:Z,onplay:ye,ontogglemenu:Kl=>y(U,u(U)===Kl?null:Kl,!0),onedit:L,onopenfolder:w,onviewlogs:()=>y(X,!0),ondelete:_,onclosemenu:()=>y(U,null),onadd:le})}Ue(Sn=>{gt.disabled=!u(O),Je(gt,"title",u(O)?u(O).instances_dir:""),Je(zt,"title",Sn)},[()=>ls(u(r))?"Twilight Light":"Twilight Dark"]),oe("click",_t,le),oe("click",gt,Re),oe("click",Gt,()=>y(h,!0)),oe("click",tn,()=>{y(i,"settings"),me(),u(O)||$e()}),Ot(Ht,()=>u(je),Sn=>y(je,Sn)),oe("click",zt,j),ne(z,Te)},Bt=z=>{var Te=qM(),Ze=Lt(Te),_t=ve(Ze,!0),gt=C(Ze,2),Xt=ve(gt,!0);Ue(()=>{_e(_t,c[u(i)][0]),_e(Xt,c[u(i)][1])}),ne(z,Te)};qe(ot,z=>{u(s)==="client"?z(Dt):u(D)==="edit"&&u(T)?z(Nt,1):u(i)==="settings"?z(Mn,2):u(i)==="instances"?z(Wn,3):z(Bt,-1)})}var ht=C(it,2),Tr=F(ht),Rt=F(Tr),oi=F(Rt),is=C(oi,4);{var ir=z=>{var Te=KM();ne(z,Te)};qe(is,z=>{u(Ce)&&z(ir)})}var ya=C(Rt,2),Kt=F(ya),jn=C(Kt,2),rr=C(jn,2),mn=C(rr,2);{var Ma=z=>{var Te=ZM();oe("click",Te,()=>y(X,!1)),ne(z,Te)};qe(mn,z=>{u(X)&&z(Ma)})}var rs=C(Tr,2);At(rs,21,()=>u(W),ol,(z,Te)=>{var Ze=JM(),_t=ve(Ze,!0);Ue(gt=>{yt(Ze,1,`whitespace-pre-wrap break-all ${gt??""}`),_e(_t,u(Te).line)},[()=>Ye(u(Te))]),ne(z,Ze)},z=>{var Te=QM();ne(z,Te)}),jd(rs,z=>y(Pe,z),()=>u(Pe));var Sa=C(se,2);{var kf=z=>{Gm(z,{get instance(){return u(re)},get storage(){return u(O)},get gameRunning(){return u(Ce)},get modsCount(){return u(Ne)},get groups(){return u(ie)},onlaunch:()=>ye(u(re).id),onkill:we,onedit:()=>L(u(re)),onchangegroup:ae,onopenfolder:()=>w(u(re).id),onexport:Se,oncopy:te,ondelete:()=>_(u(re).id),onshortcut:ue})};qe(Sa,z=>{u(D)==="instances"&&u(re)&&z(kf)})}var jl=C(Sa,2);{var Bf=z=>{mm(z,{get path(){return u(R)},onclose:()=>y(R,null),oninstalled:async Te=>{y(R,null),await De(),y(Ae,Te,!0),y(a,"Modpack installed.")}})};qe(jl,z=>{u(R)&&z(Bf)})}var Xl=C(jl,2);{var zf=z=>{AM(z,{get accounts(){return u(d)},get active(){return u(f)},onclose:()=>y(p,!1),onrefresh:Ee})};qe(Xl,z=>{u(p)&&z(zf)})}var Yl=C(Xl,2);{var Gf=z=>{Nm(z,{get groups(){return u(ie)},onclose:()=>y(m,!1),oncreated:H})};qe(Yl,z=>{u(m)&&z(Gf)})}var ql=C(Yl,2);{var Hf=z=>{var Te=eS(),Ze=F(Te),_t=F(Ze),gt=C(F(_t),2),Xt=C(_t,2),Gt=F(Xt),tn=C(Gt,2),Xn=C(tn,2);{var Ht=Yt=>{var xi=$M(),Sn=ve(xi,!0);Ue(()=>_e(Sn,u(S))),ne(Yt,xi)};qe(Xn,Yt=>{u(S)&&Yt(Ht)})}var zt=C(Xt,2),li=F(zt),Hi=C(li,2),ci=ve(Hi,!0);Ue(Yt=>{Hi.disabled=Yt,_e(ci,u(b)?"Installing…":"Install .mrpack")},[()=>u(b)||!u(E).trim()]),oe("click",Te,Yt=>{Yt.target===Yt.currentTarget&&!u(b)&&y(h,!1)}),oe("click",gt,()=>y(h,!1)),Ui("dragover",Gt,Yt=>Yt.preventDefault()),Ui("drop",Gt,Yt=>{Yt.preventDefault();const xi=Yt.dataTransfer?.files?.[0]?.path;xi&&y(E,xi,!0)}),Ot(tn,()=>u(E),Yt=>y(E,Yt)),oe("click",li,()=>y(h,!1)),oe("click",Hi,xe),ne(z,Te)};qe(ql,z=>{u(h)&&z(Hf)})}var Vf=C(ql,2);{var Wf=z=>{var Te=nS(),Ze=F(Te),_t=C(F(Ze),2),gt=C(F(_t)),Xt=ve(gt,!0),Gt=C(_t,2);{var tn=ci=>{var Yt=tS(),xi=ve(Yt,!0);Ue(()=>_e(xi,u(be))),ne(ci,Yt)};qe(Gt,ci=>{u(be)&&ci(tn)})}var Xn=C(Gt,2),Ht=F(Xn),zt=C(Ht,2),li=F(zt);dn(li,{emoji:"♻"});var Hi=C(zt,2);Ue(()=>{_e(Xt,u($)),Ht.disabled=u(Le),zt.disabled=u(Le),Hi.disabled=u(Le)}),oe("click",Te,ci=>{ci.target===ci.currentTarget&&!u(Le)&&y($,null)}),oe("click",Ht,()=>y($,null)),oe("click",zt,()=>I(!0)),oe("click",Hi,()=>I(!1)),ne(z,Te)};qe(Vf,z=>{u($)&&z(Wf)})}Ue(()=>{yt(et,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${u(o)?"w-60":"w-16"}`),yt(ut,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${u(o)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),yt(St,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${u(o)?"":"justify-center"}`),Je(St,"title",u(f)?u(f).username:"Add account"),yt(P,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${u(o)?"":"opacity-0 group-hover/nav:opacity-100"}`),_e(Y,u(o)?"«":"»"),_e(ft,u(a)),yt(ht,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${u(X)?"h-48":"h-10"}`),Je(Rt,"title",u(X)?"Collapse console":"Expand console"),yt(oi,1,`h-2 w-2 shrink-0 rounded-full ${u(Ce)?"animate-pulse bg-green-500":"bg-(--border)"}`),Kt.disabled=!u(W).length,jn.disabled=!u(W).length,rr.disabled=!u(Ce)}),oe("dblclick",st,()=>y(o,!u(o))),oe("click",ut,le),oe("click",St,()=>y(p,!0)),oe("click",P,()=>y(o,!u(o))),oe("click",Rt,()=>y(X,!u(X))),oe("click",Kt,z=>{z.stopPropagation(),Ge()}),oe("click",jn,z=>{z.stopPropagation(),We()}),oe("click",rr,z=>{z.stopPropagation(),we()}),ne(n,Xe),yn()}Hn(["dblclick","click"]);dp(rS,{target:document.getElementById("app")});
