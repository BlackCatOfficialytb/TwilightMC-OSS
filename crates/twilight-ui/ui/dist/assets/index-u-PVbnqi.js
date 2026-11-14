(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ju=!1;var Ys=Array.isArray,Vf=Array.prototype.indexOf,ka=Array.prototype.includes,qs=Array.from,Qu=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Wf=Object.getOwnPropertyDescriptors,Xf=Object.prototype,jf=Array.prototype,$u=Object.getPrototypeOf,ql=Object.isExtensible;const Yf=()=>{};function qf(n){for(var e=0;e<n.length;e++)n[e]()}function ed(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}function Kf(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const i of n)if(t.push(i),t.length===e)break;return t}const dn=2,na=4,Ks=8,td=1<<24,Yn=16,$n=32,Ki=64,Ko=128,xl=256,Jn=512,Yt=1024,St=2048,An=4096,gn=8192,nn=16384,fa=32768,Ba=1<<25,ia=65536,Fs=1<<17,Zf=1<<18,ha=1<<19,Jf=1<<20,oi=1<<25,ks=1<<21,Zr=1<<22,Xi=1<<23,hr=Symbol("$state"),nd=Symbol("component"),Qf=Symbol("legacy props"),$f=Symbol(""),id=Symbol("attributes"),Zo=Symbol("class"),Jo=Symbol("style"),Qo=Symbol("text"),Ds=Symbol("form reset"),Ka=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},eh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),th=1,nh=2,rd=4,ih=8,rh=16,ah=1,sh=4,oh=8,lh=16,ch=1,uh=2,ad={},jt=Symbol("uninitialized"),dh="http://www.w3.org/1999/xhtml";function fh(){console.warn("https://svelte.dev/e/derived_inert")}function hh(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ph(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function sd(n){return n===this.v}function mh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function od(n){return!mh(n,this.v)}function ld(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function gh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function vh(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function _h(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function bh(n){throw new Error("https://svelte.dev/e/effect_orphan")}function yh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Mh(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Sh(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Eh(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Th(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function wh(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Ah=!1,rn=null;function ra(n){rn=n}function Rn(n,e=!1,t){rn={p:rn,i:!1,c:null,e:null,s:n,x:null,r:vt,l:null}}function Cn(n){var e=rn,t=e.e;if(t!==null){e.e=null;for(var i of t)Ad(i)}return e.i=!0,rn=e.p,bl(n)}function bl(n={}){return Qu(n,nd,{value:!0}),n}function cd(){return!0}let ur=[];function ud(){var n=ur;ur=[],qf(n)}function Ti(n){if(ur.length===0&&!Ua){var e=ur;queueMicrotask(()=>{e===ur&&ud()})}ur.push(n)}function Rh(){for(;ur.length>0;)ud()}const Ch=-7169;function Ft(n,e){n.f=n.f&Ch|e}function yl(n){(n.f&Jn)!==0||n.deps===null?Ft(n,Yt):Ft(n,An)}function dd(n,e){(n.f&St)!==0?e.set(n,St):(n.f&An)!==0&&e.get(n)!==St&&e.set(n,An),Ft(n,Yt)}let Kl=!1;function Ph(){Kl||(Kl=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e[Ds]?.()})},{capture:!0}))}function pa(n){var e=ht,t=vt;Bn(null),ui(null);try{return n()}finally{Bn(e),ui(t)}}function fd(n,e,t,i=t){n.addEventListener(e,()=>pa(t));const r=n[Ds];r?n[Ds]=()=>{r(),i(!0)}:n[Ds]=()=>i(!0),Ph()}function Lh(n,e,t,i){const r=za;var a=n.filter(g=>!g.settled),o=e.map(r);if(t.length===0&&a.length===0){i(o);return}var s=vt,l=Dh(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function u(g){if((s.f&nn)===0){l();try{i([...o,...g])}catch(v){si(v,s)}Bs()}}var f=hd();if(t.length===0){c.then(()=>u([])).finally(f);return}function p(){Promise.all(t.map(g=>Ih(g))).then(u).catch(g=>si(g,s)).finally(f)}c?c.then(()=>{if((s.f&nn)!==0){f();return}l(),p(),Bs()}):p()}function Dh(){var n=vt,e=ht,t=rn,i=ot;return function(a=!0){ui(n),Bn(e),ra(t),a&&(n.f&nn)===0&&(i?.activate(),i?.apply())}}function Bs(n=!0){ui(null),Bn(null),ra(null),n&&ot?.deactivate()}function hd(){var n=vt,e=n.b,t=ot,i=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(i,n),()=>{e?.update_pending_count(-1,t),t.decrement(i,n)}}function za(n){var e=dn|St;return vt!==null&&(vt.f|=ha),{ctx:rn,deps:null,effects:null,equals:sd,f:e,fn:n,reactions:null,rv:0,v:jt,wv:0,parent:vt,ac:null}}const Pa=Symbol("obsolete");function Ih(n,e,t){let i=vt;i===null&&gh();var r=void 0,a=br(jt),o=!ht,s=new Set;return qh(()=>{var l=vt,c=ed();r=c.promise;try{Promise.resolve(n()).then(c.resolve,g=>{g!==Ka&&c.reject(g)}).finally(Bs)}catch(g){c.reject(g),Bs()}var u=ot;if(o){if((l.f&fa)!==0)var f=hd();if(i.b?.is_rendered())u.async_deriveds.get(l)?.reject(Pa);else for(const g of s.values())g.reject(Pa);s.add(c),u.async_deriveds.set(l,c)}const p=(g,v=void 0)=>{f?.(),s.delete(c),v!==Pa&&(u.activate(),v?(a.f|=Xi,aa(a,v)):((a.f&Xi)!==0&&(a.f^=Xi),aa(a,g)),u.deactivate())};c.promise.then(p,g=>p(null,g||"unknown"))}),wl(()=>{for(const l of s)l.reject(Pa)}),new Promise(l=>{function c(u){function f(){u===r?l(a):c(r)}u.then(f,f)}c(r)})}function Gt(n){const e=za(n);return Id(e),e}function pd(n){const e=za(n);return e.equals=od,e}function Uh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)yn(e[t])}}function Ml(n){var e,t=vt,i=n.parent;if(!Li&&i!==null&&n.v!==jt&&(i.f&(nn|gn))!==0)return fh(),n.v;ui(i);try{Uh(n),e=Fd(n)}finally{ui(t)}return e}function md(n){var e=Ml(n);if(!n.equals(e)&&(n.wv=Nd(),(!ot?.is_fork||n.deps===null)&&(ot!==null?(ot.capture(n,e,!0),Jr?.capture(n,e,!0)):n.v=e,n.deps===null))){Ft(n,Yt);return}Li||(qn!==null?(Tl()||ot?.is_fork)&&qn.set(n,e):yl(n))}function Nh(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&pa(()=>{e.ac.abort(Ka),e.ac=null}),e.fn!==null&&(e.teardown=Yf),Ga(e,0),Cl(e))}function gd(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&sa(e)}let so=null,Er=null,ot=null,Jr=null,qn=null,$o=null,Ua=!1,oo=!1,Na=null,Is=null;var Zl=0;let Oh=1;class Zi{id=Oh++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Er===null?so=Er=this:(Er.next=this,this.prev=Er),Er=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#v(e))return!0;return!1}#v(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=this.#o.get(e);if(i){this.#o.delete(e);for(var r of i.d)Ft(r,St),t(r);for(r of i.m)Ft(r,An),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&nn)!==0||(a.f&(St|An))===0)){for(var t=a,i=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(Ki|$n))!==0){if((r&Yt)===0){i=!0;break}t.f^=Yt}}i||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,l]of this.#r)Ft(s,l),this.schedule(s);this.apply();for(var e=Na=[],t=[],i=Is=[];this.#i.length>0;){Zl++>1e3&&(this.#f(),kh());for(const s of this.#u())try{this.#x(s,e,t)}catch(l){throw xd(s),this.#p()||this.discard(),l}}if(ot=null,i.length>0){var r=Zi.ensure();for(const s of i)r.schedule(s)}if(Na=null,Is=null,this.#p()){this.#g(t),this.#g(e);for(const[s,l]of this.#o)_d(s,l);i.length>0&&ot.#m();return}const a=this.#M();if(a){this.#g(t),this.#g(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),Jr=this,Jl(t),Jl(e),Jr=null,this.#n?.resolve();var o=ot;this.#e===0&&(this.#i.length===0||o!==null)&&this.#f(),o!==null&&(li.clear(),o.#m())}#x(e,t,i){e.f^=Yt;for(var r=e.first;r!==null;){var a=r.f,o=(a&($n|Ki))!==0,s=o&&(a&Yt)!==0,l=s||(a&gn)!==0||this.#o.has(r);if(!l&&r.fn!==null){o?r.f^=Yt:(a&na)!==0?t.push(r):Ja(r)&&((a&Yn)!==0&&this.add_dirty_reaction(r,An),sa(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}}#M(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,i]]of this.current)if(!i&&e.current.has(t))return!0;return!1}#d(e){for(const[i,r]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,r);for(const[i,r]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=i=>{var r=i.reactions;if(r!==null&&!((i.f&dn)!==0&&(i.f&(St|An))===0))for(const s of r){var a=s.f;if((a&dn)!==0)t(s);else{var o=s;a&(Zr|Yn)&&!this.async_deriveds.has(o)&&(this.#r.delete(o),Ft(o,St),this.schedule(o))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),e.#f(),ot=this,this.#m()}#g(e){for(var t=0;t<e.length;t+=1)dd(e[t],this.#r)}capture(e,t,i=!1){e.v!==jt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Xi)===0&&(this.current.set(e,[t,i]),qn?.set(e,t)),this.is_fork||(e.v=t)}activate(){ot=this}deactivate(){ot=null,qn=null}flush(){try{oo=!0,ot=this,this.#m()}finally{Zl=0,$o=null,Na=null,Is=null,oo=!1,ot=null,qn=null,li.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Pa);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let f=so;f!==null;f=f.next){var e=f.id<this.id,t=[];for(const[p,[g,v]]of this.current){if(f.current.has(p)){var i=f.current.get(p)[0];if(e&&g!==i)f.current.set(p,[g,v]);else continue}t.push(p)}if(e)for(const[p,g]of this.async_deriveds){const v=f.async_deriveds.get(p);v&&g.promise.then(v.resolve).catch(v.reject)}var r=[...f.current.keys()].filter(p=>!f.current.get(p)[1]);if(!(!f.started||r.length===0)){var a=r.filter(p=>!this.current.has(p));if(a.length===0)e&&f.discard();else if(t.length>0){if(e)for(const p of this.#h)f.unskip_effect(p,g=>{(g.f&(Yn|Zr))!==0?f.schedule(g):f.#g([g])});f.activate();var o=new Set,s=new Map;for(var l of t)vd(l,a,o,s);s=new Map;var c=[...f.current].filter(([p,g])=>{const v=this.current.get(p);return v?v[0]!==g[0]||v[1]!==g[1]:!0}).map(([p])=>p);if(c.length>0)for(const p of this.#a)(p.f&(nn|gn|Fs))===0&&Sl(p,c,s)&&((p.f&(Zr|Yn))!==0?(Ft(p,St),f.schedule(p)):f.add_dirty_reaction(p,St));if(f.#i.length>0&&!f.#c){f.apply();for(var u of f.#u())f.#x(u,[],[])}f.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let i=this.#s.get(t)??0;this.#s.set(t,i+1)}}decrement(e,t){if(this.#e-=1,e){let i=this.#s.get(t)??0;i===1?this.#s.delete(t):this.#s.set(t,i-1)}this.#c||(this.#c=!0,Ti(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,i]of e)this.add_dirty_reaction(t,i);e.clear()}add_dirty_reaction(e,t){(t===St||this.#r.get(e)!==St)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=ed()).promise}static ensure(){if(ot===null){const e=ot=new Zi;!oo&&!Ua&&Ti(()=>{e.started||e.flush()})}return ot}apply(){{qn=null;return}}schedule(e){if($o=e,e.b?.is_pending&&(e.f&(na|Ks|td))!==0&&(e.f&fa)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?so=t:e.next=t,t===null?Er=e:t.prev=e,this.linked=!1}}}function Fh(n){var e=Ua,t=Jr;Jr=null,Ua=!0;try{for(var i;;){if(Rh(),ot===null)return i;ot.flush()}}finally{Ua=e,Jr=t}}function kh(){try{yh()}catch(n){si(n,$o)}}let Mi=null;function Jl(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(nn|gn))===0&&Ja(i)&&(Mi=new Set,sa(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Pd(i),Mi?.size>0)){li.clear();for(const r of Mi){if((r.f&(nn|gn))!==0)continue;const a=[r];let o=r.parent;for(;o!==null;)Mi.has(o)&&(Mi.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const l=a[s];(l.f&(nn|gn))===0&&sa(l)}}Mi.clear()}}Mi=null}}function vd(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const a=r.f;(a&dn)!==0?vd(r,e,t,i):(a&(Zr|Yn))!==0&&(a&St)===0&&Sl(r,e,i)&&(Ft(r,St),El(r))}}function Sl(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(ka.call(e,r))return!0;if((r.f&dn)!==0&&Sl(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function El(n){ot.schedule(n)}function _d(n,e){if(!((n.f&$n)!==0&&(n.f&Yt)!==0)){(n.f&St)!==0?e.d.push(n):(n.f&An)!==0&&e.m.push(n),Ft(n,Yt);for(var t=n.first;t!==null;)_d(t,e),t=t.next}}function xd(n){Ft(n,Yt);for(var e=n.first;e!==null;)xd(e),e=e.next}let zs=new Set;const li=new Map;let bd=!1;function br(n,e){var t={f:0,v:n,reactions:null,equals:sd,rv:0,wv:0};return t}function ve(n,e){const t=br(n);return Id(t),t}function Bh(n,e=!1,t=!0){const i=br(n);return e||(i.equals=od),i}function y(n,e,t=!1){ht!==null&&(!Zn||(ht.f&Fs)!==0)&&cd()&&(ht.f&(dn|Yn|Zr|Fs))!==0&&(ci===null||!ci.has(n))&&Th();let i=t?Ut(e):e;return aa(n,i,Is)}var lr=null,el=0;function aa(n,e,t=null){if(!n.equals(e)){Li?li.set(n,e):li.has(n)||li.set(n,n.v);var i=Zi.ensure();if(i.capture(n,e),(n.f&dn)!==0){const r=n;(n.f&St)!==0&&Ml(r),qn===null&&yl(r)}n.wv=Nd(),lr=null,el=0,yd(n,St,t),lr=null,vt!==null&&(vt.f&Yt)!==0&&(vt.f&($n|Ki))===0&&(Un===null?Jh([n]):Un.push(n)),!i.is_fork&&zs.size>0&&!bd&&zh()}return e}function zh(){bd=!1;for(const n of zs){(n.f&Yt)!==0&&Ft(n,An);let e;try{e=Ja(n)}catch{e=!0}e&&sa(n)}zs.clear()}function Oa(n){y(n,n.v+1)}function yd(n,e,t){var i=n.reactions;if(i!==null){var r=i.length;if(el+=r,el>1e5&&lr===null&&(lr=new Set),lr!==null){if(lr.has(n))return;lr.add(n)}for(var a=0;a<r;a++){var o=i[a],s=o.f,l=(s&St)===0;if(l&&Ft(o,e),(s&Fs)!==0)zs.add(o);else if((s&dn)!==0){var c=o;qn?.delete(c),yd(c,An,t)}else if(l){var u=o;(s&Yn)!==0&&Mi!==null&&Mi.add(u),t!==null?t.push(u):El(u)}}}}function Ut(n){if(typeof n!="object"||n===null||hr in n||nd in n)return n;const e=$u(n);if(e!==Xf&&e!==jf)return n;var t=new Map,i=Ys(n),r=ve(0),a=mr,o=s=>{if(mr===a)return s();var l=ht,c=mr;Bn(null),tc(a);var u=s();return Bn(l),tc(c),u};return i&&t.set("length",ve(n.length)),new Proxy(n,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Sh();var u=t.get(l);return u===void 0?o(()=>{var f=ve(c.value);return t.set(l,f),f}):y(u,c.value,!0),!0},deleteProperty(s,l){var c=t.get(l);if(c===void 0){if(l in s){const u=o(()=>ve(jt));t.set(l,u),Oa(r)}}else y(c,jt),Oa(r);return!0},get(s,l,c){if(l===hr)return n;var u=t.get(l),f=l in s;if(u===void 0&&(!f||Kr(s,l)?.writable)&&(u=o(()=>{var g=Ut(f?s[l]:jt),v=ve(g);return v}),t.set(l,u)),u!==void 0){var p=d(u);return p===jt?void 0:p}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){this.has?.(s,l);var c=Reflect.getOwnPropertyDescriptor(s,l),u=t.get(l);if(u!==void 0){var f=d(u);if(f===jt)return;if(c&&"value"in c)c.value=f;else return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(s,l){if(l===hr)return!0;var c=t.get(l),u=c!==void 0&&c.v!==jt||Reflect.has(s,l);if(c!==void 0||(vt!==null||ht!==null)&&(!u||Kr(s,l)?.writable)){c===void 0&&(c=o(()=>{var p=u?Ut(s[l]):jt,g=ve(p);return g}),t.set(l,c));var f=d(c);if(f===jt)return!1}return u},set(s,l,c,u){var f=t.get(l),p=l in s;if(i&&l==="length")for(var g=c;g<f.v;g+=1){var v=t.get(g+"");v!==void 0?y(v,jt):g in s&&(v=o(()=>ve(jt)),t.set(g+"",v))}if(f===void 0)(!p||Kr(s,l)?.writable)&&(f=o(()=>ve(void 0)),y(f,Ut(c)),t.set(l,f));else{p=f.v!==jt;var _=o(()=>Ut(c));y(f,_)}var m=Reflect.getOwnPropertyDescriptor(s,l);if(m?.set&&m.set.call(u,c),!p){if(i&&typeof l=="string"){var h=t.get("length"),E=Number(l);Number.isInteger(E)&&E>=h.v&&y(h,E+1)}Oa(r)}return!0},ownKeys(s){d(r);var l=Reflect.ownKeys(s).filter(f=>{var p=t.get(f);return p===void 0||p.v!==jt});for(var[c,u]of t)u.v!==jt&&!(c in s)&&l.push(c);return l},setPrototypeOf(){Eh()}})}function Ql(n){try{if(n!==null&&typeof n=="object"&&hr in n)return n[hr]}catch{}return n}function Md(n,e){return Object.is(Ql(n),Ql(e))}var $l,Sd,Ed,Td;function Hh(){if($l===void 0){$l=window,Sd=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Ed=Kr(e,"firstChild").get,Td=Kr(e,"nextSibling").get,ql(n)&&(n[Zo]=void 0,n[id]=null,n[Jo]=void 0,n.__e=void 0),ql(t)&&(t[Qo]=void 0)}}function Ri(n=""){return document.createTextNode(n)}function Ha(n){return Ed.call(n)}function Za(n){return Td.call(n)}function V(n,e){return Ha(n)}function Ct(n,e=!1){{var t=Ha(n);return t instanceof Comment&&t.data===""?Za(t):t}}function me(n,e=!1){return Ha(n)}function P(n,e=1,t=!1){let i=n;for(;e--;)i=Za(i);return i}function Gh(n){n.textContent=""}function wd(){return!1}function Vh(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function Wh(n){var e=vt;if(e===null)return ht.f|=Xi,n;if((e.f&fa)===0&&(e.f&na)===0)throw n;si(n,e)}function si(n,e){if(n===ad)throw n;if(!(e!==null&&(e.f&nn)!==0)){for(;e!==null;){if((e.f&Ko)!==0&&(e.f&(nn|Ba))===0){if((e.f&fa)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function Xh(n){vt===null&&(ht===null&&bh(),xh()),Li&&_h()}function jh(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Ui(n,e){var t=vt;t!==null&&(t.f&gn)!==0&&(n|=gn);var i={ctx:rn,deps:null,nodes:null,f:n|St|Jn,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};ot?.register_created_effect(i);var r=i;if((n&na)!==0)Na!==null?Na.push(i):Zi.ensure().schedule(i);else if(e!==null){try{sa(i)}catch(o){throw yn(i),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&ha)===0&&(r=r.first,(n&Yn)!==0&&(n&ia)!==0&&r!==null&&(r.f|=ia))}if(r!==null&&(r.parent=t,t!==null&&jh(r,t),ht!==null&&(ht.f&dn)!==0&&(n&Ki)===0)){var a=ht;(a.effects??=[]).push(r)}return i}function Tl(){return ht!==null&&!Zn}function wl(n){const e=Ui(Ks,null);return Ft(e,Yt),e.teardown=n,e}function Kn(n){Xh();var e=vt.f,t=!ht&&(e&$n)!==0&&rn!==null&&!rn.i;if(t){var i=rn;(i.e??=[]).push(n)}else return Ad(n)}function Ad(n){return Ui(na|Jf,n)}function Yh(n){Zi.ensure();const e=Ui(Ki|ha,n);return(t={})=>new Promise(i=>{t.outro?pr(e,()=>{yn(e),i(void 0)}):(yn(e),i(void 0))})}function Rd(n){return Ui(na,n)}function qh(n){return Ui(Zr|ha,n)}function Al(n,e=0){return Ui(Ks|e,n)}function ze(n,e=[],t=[],i=[]){Lh(i,e,t,r=>{Ui(Ks,()=>{n(...r.map(d))})})}function Rl(n,e=0){var t=Ui(Yn|e,n);return t}function Nn(n){return Ui($n|ha,n)}function Cd(n){var e=n.teardown;if(e!==null){const t=Li,i=ht;ec(!0),Bn(null);try{e.call(null)}catch(r){si(r,n.parent)}finally{ec(t),Bn(i)}}}function Cl(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&pa(()=>{r.abort(Ka)});var i=t.next;(t.f&Ki)!==0?t.parent=null:yn(t,e),t=i}}function Kh(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&$n)===0&&yn(e),e=t}}function yn(n,e=!0){var t=!1;(e||(n.f&Zf)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Zh(n.nodes.start,n.nodes.end),t=!0),n.f|=Ba,Cl(n,e&&!t),Ga(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)a.stop();Cd(n),n.f^=Ba,n.f|=nn;var r=n.parent;r!==null&&r.first!==null&&Pd(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Zh(n,e){for(;n!==null;){var t=n===e?null:Za(n);n.remove(),n=t}}function Pd(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function pr(n,e,t=!0){var i=[];n.f|=xl,Ld(n,i,!0);var r=()=>{t&&yn(n),e&&e()},a=i.length;if(a>0){var o=()=>--a||r();for(var s of i)s.out(o)}else r()}function Ld(n,e,t){if((n.f&gn)===0){n.f^=gn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&e.push(s);for(var r=n.first;r!==null;){var a=r.next;if((r.f&Ki)===0){var o=(r.f&ia)!==0||(r.f&$n)!==0&&(n.f&Yn)!==0;Ld(r,e,o?t:!1)}r=a}}}function Hs(n){n.f&=~xl,Dd(n,!0)}function Dd(n,e){if((n.f&xl)===0&&(n.f&gn)!==0){n.f^=gn,(n.f&Yt)===0&&(Ft(n,St),Zi.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&ia)!==0||(t.f&$n)!==0;Dd(t,r?e:!1),t=i}var a=n.nodes&&n.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function Pl(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Za(t);e.append(t),t=r}}let Li=!1;function ec(n){Li=n}let ht=null,Zn=!1;function Bn(n){ht=n}let vt=null;function ui(n){vt=n}let ci=null;function Id(n){ht!==null&&((ht.f&ks)!==0||(ht.f&dn)!==0)&&(ci??=new Set).add(n)}let bn=null,Tn=0,Un=null;function Jh(n){Un=n}let Ud=1,dr=0,mr=dr;function tc(n){mr=n}function Nd(){return++Ud}function Ja(n){var e=n.f;if((e&St)!==0)return!0;if((e&An)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var a=t[r];if(Ja(a)&&md(a),a.wv>n.wv)return!0}(e&Jn)!==0&&qn===null&&Ft(n,Yt)}return!1}function Od(n,e,t=!0){var i=n.reactions;if(i!==null&&!(ci!==null&&ci.has(n)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&dn)!==0?Od(a,e,!1):e===a&&(t?Ft(a,St):(a.f&Yt)!==0&&Ft(a,An),El(a))}}function Fd(n){var e=bn,t=Tn,i=Un,r=ht,a=ci,o=rn,s=Zn,l=mr,c=n.f;bn=null,Tn=0,Un=null,ht=(c&($n|Ki))===0?n:null,ci=null,ra(n.ctx),Zn=!1,mr=++dr,n.ac!==null&&(pa(()=>{n.ac.abort(Ka)}),n.ac=null);try{n.f|=ks;var u=n.fn,f=u();n.f|=fa;var p=nc(n);if(cd()&&Un!==null&&!Zn&&p!==null&&(n.f&(dn|An|St))===0)for(var g=0;g<Un.length;g++)Od(Un[g],n);if(r!==null&&r!==n){if(dr++,r.deps!==null)for(let v=0;v<t;v+=1)r.deps[v].rv=dr;if(e!==null)for(const v of e)v.rv=dr;Un!==null&&(i===null?i=Un:i.push(...Un))}return(n.f&Xi)!==0&&(n.f^=Xi),f}catch(v){return nc(n),Wh(v)}finally{n.f^=ks,bn=e,Tn=t,Un=i,ht=r,ci=a,ra(o),Zn=s,mr=l}}function nc(n){var e=n.deps,t=ot?.is_fork;if(bn!==null){var i;if(t||Ga(n,Tn),e!==null&&Tn>0)for(e.length=Tn+bn.length,i=0;i<bn.length;i++)e[Tn+i]=bn[i];else n.deps=e=bn;if(Tl()&&(n.f&Jn)!==0)for(i=Tn;i<e.length;i++)(e[i].reactions??=[]).push(n)}else!t&&e!==null&&Tn<e.length&&(Ga(n,Tn),e.length=Tn);return e}function Qh(n,e){let t=e.reactions;if(t!==null){var i=Vf.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&dn)!==0&&(bn===null||!ka.call(bn,e))){var a=e;(a.f&Jn)!==0&&(a.f^=Jn),a.v!==jt&&yl(a),a.ac!==null&&pa(()=>{a.ac.abort(Ka),a.ac=null,Ft(a,St)}),Nh(a),Ga(a,0)}}function Ga(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Qh(n,t[i])}function sa(n){var e=n.f;if((e&nn)===0){Ft(n,Yt);var t=vt;vt=n;try{(e&(Yn|td))!==0?Kh(n):Cl(n),Cd(n);var i=Fd(n);n.teardown=typeof i=="function"?i:null,n.wv=Ud;var r;Ju&&Ah&&(n.f&St)!==0&&n.deps}finally{vt=t}}}async function $h(){await Promise.resolve(),Fh()}function d(n){var e=n.f,t=(e&dn)!==0;if(ht!==null&&!Zn){var i=vt!==null&&(vt.f&nn)!==0;if(!i&&(ci===null||!ci.has(n))){var r=ht.deps;if((ht.f&ks)!==0)n.rv<dr&&(n.rv=dr,bn===null&&r!==null&&r[Tn]===n?Tn++:bn===null?bn=[n]:bn.push(n));else{ht.deps??=[],ka.call(ht.deps,n)||ht.deps.push(n);var a=n.reactions;a===null?n.reactions=[ht]:ka.call(a,ht)||a.push(ht)}}}if(Li&&li.has(n))return li.get(n);if(t){var o=n;if(Li){var s=o.v;return((o.f&Yt)===0&&o.reactions!==null||Bd(o))&&(s=Ml(o)),li.set(o,s),s}var l=(o.f&Jn)===0&&!Zn&&ht!==null&&(ht.f&Jn)!==0,c=(o.f&fa)===0;Ja(o)&&(l&&(o.f|=Jn),md(o)),l&&!c&&(gd(o),kd(o))}if(qn?.has(n))return qn.get(n);if((n.f&Xi)!==0)throw n.v;return n.v}function kd(n){if(n.f|=Jn,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:ka.call(e,n)||e.push(n),(t.f&dn)!==0&&(t.f&Jn)===0&&(gd(t),kd(t))}}function Bd(n){if(n.v===jt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(li.has(e)||(e.f&dn)!==0&&Bd(e))return!0;return!1}function ma(n){var e=Zn;try{return Zn=!0,n()}finally{Zn=e}}const ep=["touchstart","touchmove"];function tp(n){return ep.includes(n)}const La=Symbol("events"),zd=new Set,tl=new Set;function np(n,e,t,i={}){function r(a){if(i.capture||nl.call(e,a),!a.cancelBubble)return pa(()=>t?.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(r.__removed=!1,Ti(()=>{r.__removed||e.addEventListener(n,r,i)})):e.addEventListener(n,r,i),r}function yr(n,e,t,i,r){var a={capture:i,passive:r},o=np(n,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&wl(()=>{o.__removed=!0,e.removeEventListener(n,o,a)})}function oe(n,e,t){(e[La]??={})[n]=t}function ei(n){for(var e=0;e<n.length;e++)zd.add(n[e]);for(var t of tl)t(n)}let lo=null,co=!1;function nl(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],a=r[0]||n.target;lo=n,co||(co=!0,setTimeout(()=>{co=!1,lo=null}));var o=0,s=lo===n&&n[La];if(s){var l=r.indexOf(s);if(l!==-1&&(e===document||e===window)){n[La]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(a=r[o]||n.target,a!==e){Qu(n,"currentTarget",{configurable:!0,get(){return a||t}});var u=ht,f=vt;Bn(null),ui(null);try{for(var p,g=[];a!==null&&a!==e;){try{var v=a[La]?.[i];v!=null&&(!a.disabled||n.target===a)&&v.call(a,n)}catch(_){p?g.push(_):p=_}if(n.cancelBubble)break;o++,a=o<r.length?r[o]:null}if(p){for(let _ of g)queueMicrotask(()=>{throw _});throw p}}finally{n[La]=e,delete n.currentTarget,Bn(u),ui(f)}}}const ip=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function rp(n){return ip?.createHTML(n)??n}function ap(n){var e=Vh("template");return e.innerHTML=rp(n.replaceAll("<!>","<!---->")),e.content}function Gs(n,e){var t=vt;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function be(n,e){var t=(e&ch)!==0,i=(e&uh)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=ap(a?n:"<!>"+n),t||(r=Ha(r)));var o=i||Sd?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=Ha(o),l=o.lastChild;Gs(s,l)}else Gs(o,o);return o}}function Si(n=""){{var e=Ri(n+"");return Gs(e,e),e}}function sp(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Ri();return n.append(e,t),Gs(e,t),n}function le(n,e){n!==null&&n.before(e)}function op(n){let e=0,t=br(0),i;return()=>{Tl()&&(d(t),Al(()=>(e===0&&(i=ma(()=>n(()=>Oa(t)))),e+=1,()=>{Ti(()=>{e-=1,e===0&&(i?.(),i=void 0,Oa(t))})})))}}var lp=ia|ha;function cp(n,e,t,i){new up(n,e,t,i)}class up{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#v=new Map;#u=null;#m=op(()=>(this.#u=br(this.#h),()=>{this.#u=null}));constructor(e,t,i,r){this.#t=e,this.#e=t,this.#s=a=>{var o=vt;o.b=this,o.f|=Ko,i(a)},this.parent=vt.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=Rl(()=>{this.#b()},lp)}#x(){try{this.#i=Nn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#M(e){const t=this.#e.failed,{reset:i,invoke_onerror:r}=this.#_(e);Ti(r),t&&(this.#r=Nn(()=>{t(this.#t,()=>e,()=>i)}))}#_(e){var t=!1,i=!1;const r=()=>{if(!this.#d()){if(t){ph();return}t=!0,i&&wh(),this.#r!==null&&pr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{i=!0,this.#e.onerror?.(e,r),i=!1}catch(o){si(o,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(nn|Ba))!==0}#g(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=Nn(()=>e(this.#t)),Ti(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),i=Ri(),r=!1;if(t.append(i),this.#i=this.#y(()=>{try{return Nn(()=>this.#s(i))}catch(a){try{this.error(a),r=!0}catch(o){si(o,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(ot);return}this.#c===0&&(this.#t.before(t),this.#o=null,pr(this.#a,()=>{this.#a=null}),this.#f(ot))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=Nn(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();Pl(this.#i,e);const t=this.#e.pending;this.#a=Nn(()=>t(this.#t))}else this.#f(ot)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#v)}defer_effect(e){dd(e,this.#v)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=vt,i=ht,r=rn;ui(this.#n),Bn(this.#n),ra(this.#n.ctx);try{return Zi.ensure(),e()}finally{ui(t),Bn(i),ra(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&pr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#S(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Ti(()=>{this.#p=!1,this.#u&&aa(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),d(this.#u)}error(e){if(e===ad||!this.#e.onerror&&!this.#e.failed)throw e;ot?.is_fork?(this.#i&&ot.skip_effect(this.#i),this.#a&&ot.skip_effect(this.#a),this.#r&&ot.skip_effect(this.#r),ot.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(yn(this.#i),this.#i=null),this.#a&&(yn(this.#a),this.#a=null),this.#r&&(yn(this.#r),this.#r=null);let t=this.#e.failed;const i=r=>{if(this.#d())return;const{reset:a,invoke_onerror:o}=this.#_(r);o(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return Nn(()=>{var s=vt;s.b=this,s.f|=Ko,t(this.#t,()=>r,()=>a)})}catch(s){return si(s,this.#n.parent),null}}))};Ti(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){si(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>si(a,this.#n&&this.#n.parent)):i(r)}})}}function _e(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[Qo]??=n.nodeValue)&&(n[Qo]=t,n.nodeValue=`${t}`)}function dp(n,e){return fp(n,e)}const ns=new Map;function fp(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:o=!0,transformError:s}){Hh();var l=void 0,c=Yh(()=>{var u=t??e.appendChild(Ri());cp(u,{pending:()=>{}},g=>{Rn({});var v=rn;a&&(v.c=a),r&&(i.$$events=r),l=n(g,i)||bl(),Cn()},s);var f=new Set,p=g=>{for(var v=0;v<g.length;v++){var _=g[v];if(!f.has(_)){f.add(_);var m=tp(_);for(const b of[e,document]){var h=ns.get(b);h===void 0&&(h=new Map,ns.set(b,h));var E=h.get(_);E===void 0?(b.addEventListener(_,nl,{passive:m}),h.set(_,1)):h.set(_,E+1)}}}};return p(qs(zd)),tl.add(p),()=>{for(var g of f)for(const m of[e,document]){var v=ns.get(m),_=v.get(g);--_==0?(m.removeEventListener(g,nl),v.delete(g),v.size===0&&ns.delete(m)):v.set(g,_)}tl.delete(p),u!==t&&u.parentNode?.removeChild(u)}});return hp.set(l,c),l}let hp=new WeakMap;class pp{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),i=this.#l.get(t);if(i)Hs(i),this.#s.delete(t);else{var r=this.#e.get(t);r&&(Hs(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,o]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(o);s&&(yn(s.effect),this.#e.delete(o))}for(const[a,o]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var c=document.createDocumentFragment();Pl(o,c),c.append(Ri()),this.#e.set(a,{effect:o,fragment:c})}else yn(o);this.#s.delete(a),this.#l.delete(a)};this.#n||!i?(this.#s.add(a),pr(o,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,r]of this.#e)t.includes(i)||(yn(r.effect),this.#e.delete(i))};ensure(e,t){var i=ot,r=wd();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),o=Ri();a.append(o),this.#e.set(e,{effect:Nn(()=>t(o)),fragment:a})}else this.#l.set(e,Nn(()=>t(this.anchor)));if(this.#t.set(i,e),r){for(const[s,l]of this.#l)s===e?i.unskip_effect(l):i.skip_effect(l);for(const[s,l]of this.#e)s===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#i),i.ondiscard(this.#a)}else this.#i(i)}}function Ke(n,e,t=!1){var i=new pp(n),r=t?ia:0;function a(o,s){i.ensure(o,s)}Rl(()=>{var o=!1;e((s,l=0)=>{o=!0,a(l,s)}),o||a(-1,null)},r)}function Hd(n,e){return e}function mp(n,e,t){for(var i=[],r=e.length,a,o=e.length,s=0;s<r;s++){let f=e[s];pr(f,()=>{if(a){if(a.pending.delete(f),a.done.add(f),a.pending.size===0){var p=n.outrogroups;il(n,qs(a.done)),p.delete(a),p.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&t!==null&&n.pending.size===0;if(l){var c=t,u=c.parentNode;Gh(u),u.append(c),n.items.clear()}il(n,e,!l)}else a={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(a)}function il(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const s of o)i.add(n.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(i?.has(a)){a.f|=oi;const o=document.createDocumentFragment();Pl(a,o)}else yn(e[r],t)}}var ic;function Nt(n,e,t,i,r,a=null){var o=n,s=new Map,l=(e&rd)!==0;if(l){var c=n;o=c.appendChild(Ri())}var u=null,f=pd(()=>{var E=t();return Ys(E)?E:E==null?[]:qs(E)}),p=new Map,g=!0;function v(E){if((h.effect.f&nn)===0){h.pending.delete(E);var b=d(f);h.fallback=u,gp(h,b,o,e,i),u!==null&&(b.length===0?(u.f&oi)===0?Hs(u):(u.f^=oi,Da(u,null,o)):pr(u,()=>{u=null}))}}function _(E){h.pending.delete(E)}var m=Rl(()=>{for(var E=d(f),b=E.length,M=new Set,w=ot,D=wd(),T=0;T<b;T+=1){var F=E[T],S=i(F,T),A=g?null:s.get(S);A?(A.v&&aa(A.v,F),A.i&&aa(A.i,T),D&&w.unskip_effect(A.e)):(A=vp(s,g?o:ic??=Ri(),F,S,T,r,e,t),g||(A.e.f|=oi),s.set(S,A)),M.add(S)}if(b===0&&a&&!u&&(g?u=Nn(()=>a(o)):(u=Nn(()=>a(ic??=Ri())),u.f|=oi)),b>M.size&&vh(),!g)if(p.set(w,M),D){for(const[ie,fe]of s)M.has(ie)||w.skip_effect(fe.e);w.oncommit(v),w.ondiscard(_)}else v(w);d(f)}),h={effect:m,items:s,pending:p,outrogroups:null,fallback:u};g=!1}function ya(n){for(;n!==null&&(n.f&$n)===0;)n=n.next;return n}function gp(n,e,t,i,r){var a=(i&ih)!==0,o=e.length,s=n.items,l=ya(n.effect.first),c,u=null,f,p=[],g=[],v,_,m,h;if(a)for(h=0;h<o;h+=1)v=e[h],_=r(v,h),m=s.get(_).e,(m.f&oi)===0&&(m.nodes?.a?.measure(),(f??=new Set).add(m));for(h=0;h<o;h+=1){if(v=e[h],_=r(v,h),m=s.get(_).e,n.outrogroups!==null)for(const A of n.outrogroups)A.pending.delete(m),A.done.delete(m);if((m.f&gn)!==0&&(Hs(m),a&&(m.nodes?.a?.unfix(),(f??=new Set).delete(m))),(m.f&oi)!==0)if(m.f^=oi,m===l)Da(m,null,t);else{var E=u?u.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Fi(n,u,m),Fi(n,m,E),Da(m,E,t),u=m,p=[],g=[],l=ya(u.next);continue}if(m!==l){if(c!==void 0&&c.has(m)){if(p.length<g.length){var b=g[0],M;u=b.prev;var w=p[0],D=p[p.length-1];for(M=0;M<p.length;M+=1)Da(p[M],b,t);for(M=0;M<g.length;M+=1)c.delete(g[M]);Fi(n,w.prev,D.next),Fi(n,u,w),Fi(n,D,b),l=b,u=D,h-=1,p=[],g=[]}else c.delete(m),Da(m,l,t),Fi(n,m.prev,m.next),Fi(n,m,u===null?n.effect.first:u.next),Fi(n,u,m),u=m;continue}for(p=[],g=[];l!==null&&l!==m;)(c??=new Set).add(l),g.push(l),l=ya(l.next);if(l===null)continue}(m.f&oi)===0&&p.push(m),u=m,l=ya(m.next)}if(n.outrogroups!==null){for(const A of n.outrogroups)A.pending.size===0&&(il(n,qs(A.done)),n.outrogroups?.delete(A));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var T=[];if(c!==void 0)for(m of c)(m.f&gn)===0&&T.push(m);for(;l!==null;)(l.f&gn)===0&&l!==n.fallback&&T.push(l),l=ya(l.next);var F=T.length;if(F>0){var S=(i&rd)!==0&&o===0?t:null;if(a){for(h=0;h<F;h+=1)T[h].nodes?.a?.measure();for(h=0;h<F;h+=1)T[h].nodes?.a?.fix()}mp(n,T,S)}}a&&Ti(()=>{if(f!==void 0)for(m of f)m.nodes?.a?.apply()})}function vp(n,e,t,i,r,a,o,s){var l=(o&th)!==0?(o&rh)===0?Bh(t,!1,!1):br(t):null,c=(o&nh)!==0?br(r):null;return{v:l,i:c,e:Nn(()=>(a(e,l??t,c??r,s),()=>{n.delete(i)}))}}function Da(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,a=e&&(e.f&oi)===0?e.nodes.start:t;i!==null;){var o=Za(i);if(a.before(i),i===r)return;i=o}}function Fi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const rc=[...` 	
\r\f \v\uFEFF`];function _p(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,o=0;(o=i.indexOf(r,o))>=0;){var s=o+a;(o===0||rc.includes(i[o-1]))&&(s===i.length||rc.includes(i[s]))?i=(o===0?"":i.substring(0,o))+i.substring(s+1):o=s}}return i===""?null:i}function xp(n,e){return n==null?null:String(n)}function Mt(n,e,t,i,r,a){var o=n[Zo];if(o!==t||o===void 0){var s=_p(t,i,a);s==null?n.removeAttribute("class"):n.className=s,n[Zo]=t}else if(a&&r!==a)for(var l in a){var c=!!a[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return a}function Gi(n,e,t,i){var r=n[Jo];if(r!==e){var a=xp(e);a==null?n.removeAttribute("style"):n.style.cssText=a,n[Jo]=e}return i}function bp(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function yp(n,e){var t=n.__defaultValue,i=n.multiple,r=i?t??[]:null;if(!(i&&!Ys(r))){n.selectedIndex;for(var a of n.options){var o=Qr(a);bp(a,i?r.includes(o):Md(o,t))}}}function Gd(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Ys(e))return hh();for(var i of n.options)i.selected=e.includes(Qr(i));return}for(i of n.options){var r=Qr(i);if(Md(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function rl(n){var e=new MutationObserver(t=>{t.every(Mp)||("__defaultValue"in n&&yp(n),"__value"in n&&Gd(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),wl(()=>{e.disconnect()})}function al(n,e,t=e){var i=new WeakSet,r=!0;fd(n,"change",a=>{var o=a?"[selected]":":checked",s;if(n.multiple)s=[].map.call(n.querySelectorAll(o),Qr);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");s=l&&Qr(l)}t(s),n.__value=s,ot!==null&&i.add(ot)}),Rd(()=>{var a=e();if(n===document.activeElement){var o=ot;if(i.has(o))return}if(Gd(n,a,r),r&&a===void 0){var s=n.querySelector(":checked");s!==null&&(a=Qr(s),t(a))}n.__value=a,r=!1})}function Qr(n){return"__value"in n?n.__value:n.value}function Mp(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const Sp=Symbol("is custom element"),Ep=Symbol("is html"),Tp=eh?"progress":"PROGRESS";function Va(n,e){var t=Ll(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==Tp)||(n.value=e??"")}function ac(n,e){var t=Ll(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function $e(n,e,t,i){var r=Ll(n),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(n[$f]=t),t==null?n.removeAttribute(e):typeof t!="string"&&wp(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Ll(n){return n[id]??={[Sp]:n.nodeName.includes("-"),[Ep]:n.namespaceURI===dh}}var sc=new Map;function wp(n){var e=n.getAttribute("is")||n.nodeName,t=sc.get(e);if(t)return t;sc.set(e,t=new Set);for(var i,r=n,a=Element.prototype;a!==r;){i=Wf(r);for(var o in i)i[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.add(o);r=$u(r)}return t}function Ht(n,e,t=e){var i=new WeakSet;fd(n,"input",async r=>{var a=r?n.defaultValue:n.value;if(a=uo(n)?fo(a):a,t(a),ot!==null&&i.add(ot),await $h(),a!==(a=e())){var o=n.selectionStart,s=n.selectionEnd,l=n.value.length;if(n.value=a??"",s!==null){var c=n.value.length;o===s&&s===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(s,c))}}}),ma(e)==null&&n.value&&(t(uo(n)?fo(n.value):n.value),ot!==null&&i.add(ot)),Al(()=>{var r=e();if(n===document.activeElement){var a=ot;if(i.has(a))return}uo(n)&&r===fo(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function uo(n){var e=n.type;return e==="number"||e==="range"}function fo(n){return n===""?null:+n}function ho(n,e){return n===e||n?.[hr]===e}function Vd(n=bl(),e,t,i){var r=rn.r,a=vt;return Rd(()=>{var o,s;return Al(()=>{o=s,s=[],ma(()=>{ho(t(...s),n)||(e(n,...s),o&&ho(t(...o),n)&&e(null,...o))})}),()=>{let l=a;for(;l!==r&&l.parent!==null&&l.parent.f&Ba;)l=l.parent;const c=()=>{s&&ho(t(...s),n)&&e(null,...s)},u=l.teardown;l.teardown=()=>{c(),u?.()}}}),n}let is=!1;function Ap(n){var e=is;try{return is=!1,[n(),is]}finally{is=e}}function gt(n,e,t,i){var r=!0,a=(t&oh)!==0,o=(t&lh)!==0,s=i,l=!0,c=void 0,u=()=>o&&r?(c??=za(i),d(c)):(l&&(l=!1,s=o?ma(i):i),s);let f;if(a){var p=hr in n||Qf in n;f=Kr(n,e)?.set??(p&&e in n?M=>n[e]=M:void 0)}var g,v=!1;a?[g,v]=Ap(()=>n[e]):g=n[e],g===void 0&&i!==void 0&&(g=u(),f&&(Mh(),f(g)));var _;if(_=()=>{var M=n[e];return M===void 0?u():(l=!0,M)},(t&sh)===0)return _;if(f){var m=n.$$legacy;return(function(M,w){return arguments.length>0?((!w||m||v)&&f(w?_():M),M):_()})}var h=!1,E=((t&ah)!==0?za:pd)(()=>(h=!1,_()));a&&d(E);var b=vt;return(function(M,w){if(arguments.length>0){const D=w?d(E):a?Ut(M):M;return y(E,D),h=!0,s!==void 0&&(s=D),M}return Li&&h||(b.f&nn)!==0?E.v:d(E)})}function Ji(n){rn===null&&ld(),Kn(()=>{const e=ma(n);if(typeof e=="function")return e})}function Rp(n){rn===null&&ld(),Ji(()=>()=>ma(n))}const Cp="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Cp);var Pp=be('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">📂 Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),Lp=be('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Dp(n,e){Rn(e,!0);let t=gt(e,"selected",3,!1),i=gt(e,"gameRunning",3,!1),r=gt(e,"menuOpen",3,!1);const a=Gt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function o(){const F=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&F?F(e.instance.icon_path):"/logo.png"}var s=Lp(),l=V(s),c=V(l),u=me(c),f=P(c,2),p=V(f),g=me(p,!0),v=P(p,2),_=V(v),m=me(_,!0),h=P(_,2),E=me(h,!0),b=P(f,2),M=P(l,2),w=me(M,!0),D=P(M,2);{var T=F=>{var S=Pp(),A=Ct(S),ie=P(A,2),fe=V(ie),W=P(fe,2),Q=P(W,2),J=P(Q,2),X=P(J,4);ze(()=>fe.disabled=i()),oe("click",A,function(...k){e.onclosemenu?.apply(this,k)}),oe("click",fe,()=>{e.onclosemenu(),e.onplay()}),oe("click",W,()=>{e.onclosemenu(),e.onedit()}),oe("click",Q,()=>{e.onclosemenu(),e.onopenfolder()}),oe("click",J,function(...k){e.onviewlogs?.apply(this,k)}),oe("click",X,()=>{e.onclosemenu(),e.ondelete()}),le(F,S)};Ke(D,F=>{r()&&F(T)})}ze((F,S)=>{Mt(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),$e(s,"aria-selected",t()),$e(s,"title",e.instance.name),$e(u,"src",F),_e(g,e.instance.name),_e(m,e.instance.minecraft_version),Mt(h,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${d(a)??""}`),_e(E,e.instance.loader_type),_e(w,S)},[()=>o(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),oe("click",s,function(...F){e.onselect?.apply(this,F)}),oe("dblclick",s,function(...F){e.onplay?.apply(this,F)}),oe("keydown",s,F=>{(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),e.onplay())}),oe("contextmenu",s,F=>{F.preventDefault(),e.onselect(),e.ontogglemenu()}),yr("error",u,F=>{F.currentTarget.dataset.f||(F.currentTarget.dataset.f="1",F.currentTarget.src="/logo.png")}),oe("click",b,F=>{F.stopPropagation(),e.ontogglemenu()}),le(n,s),Cn()}ei(["click","dblclick","keydown","contextmenu"]);var Ip=be('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Up=be('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Np=be('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Op=be('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function Fp(n,e){Rn(e,!0);var t=Op();Nt(t,21,()=>e.instances,i=>i.id,(i,r)=>{{let a=Gt(()=>e.selectedId===d(r).id),o=Gt(()=>e.menuFor===d(r).id);Dp(i,{get instance(){return d(r)},get selected(){return d(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return d(o)},onselect:()=>e.onselect?.(d(r).id),onplay:()=>e.onplay?.(d(r).id),ontogglemenu:()=>e.ontogglemenu?.(d(r).id),onedit:()=>e.onedit?.(d(r)),onopenfolder:()=>e.onopenfolder?.(d(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(d(r).id),get onclosemenu(){return e.onclosemenu}})}},i=>{var r=sp(),a=Ct(r);{var o=u=>{var f=Ip(),p=me(f,!0);ze(()=>_e(p,e.error)),le(u,f)},s=u=>{var f=Up(),p=me(f);ze(g=>_e(p,`No instances match "${g??""}".`),[()=>e.query.trim()]),le(u,f)},l=Gt(()=>e.query.trim()),c=u=>{var f=Np(),p=P(V(f),6);oe("click",p,()=>e.onadd?.()),le(u,f)};Ke(a,u=>{e.error?u(o):d(l)?u(s,1):u(c,-1)})}le(i,r)}),le(n,t),Cn()}ei(["click"]);const Wa=[];function Zs(n){return Wa.push(n),n}function Js(n){const e=Wa.lastIndexOf(n);e!==-1&&Wa.splice(e,1)}function oc(){return Wa[Wa.length-1]??null}var kp=be('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div>'),lc=be('<div class="p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Bp=be('<span class="shrink-0 rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent)">✓ Installed</span>'),zp=be(`<button class="shrink-0 rounded bg-(--accent) px-3 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Downloads the primary jar into this instance's mods folder"> </button>`),Hp=be('<div class="flex items-center gap-3 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div> <div class="truncate text-[11px] text-(--text-muted)"> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></div> <!></div>'),Gp=be('<div class="flex flex-col gap-1.5"></div>'),Vp=be('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[480px] w-[640px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><div class="min-w-0"><h3 class="text-sm font-semibold">Get more mods</h3> <p class="truncate text-[11px] text-(--text-muted)"> <!></p></div> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="border-b border-(--border) p-3"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></div></div>');function Wp(n,e){Rn(e,!0);let t=ve(""),i=ve(null),r=ve(!1),a=ve(""),o=ve(Ut({})),s=ve(Ut({})),l=0;const c=["fabric","quilt","forge","neoforge"],u=Gt(()=>{const X=e.instance.loader_type.toLowerCase();return c.includes(X)?X:""});function f(X){return X>=1e6?`${(X/1e6).toFixed(1)}M`:X>=1e3?`${(X/1e3).toFixed(0)}K`:String(X)}function p(X){return X.icon_url||"/logo.png"}Kn(()=>{const X=d(t).trim(),k=++l,ee=setTimeout(()=>{y(r,!0),y(a,""),window.__TAURI__.core.invoke("search_modrinth_mods",{query:X,gameVersion:e.instance.minecraft_version,loader:d(u)}).then(ce=>{k===l&&(y(i,ce,!0),y(r,!1))}).catch(ce=>{k===l&&(y(a,String(ce),!0),y(r,!1))})},350);return()=>clearTimeout(ee)});async function g(X){if(!(d(o)[X.project_id]||d(s)[X.project_id])){y(o,{...d(o),[X.project_id]:!0},!0);try{const k=await window.__TAURI__.core.invoke("install_modrinth_mod",{instanceId:e.instance.id,projectId:X.project_id,gameVersion:e.instance.minecraft_version,loader:d(u)});y(s,{...d(s),[X.project_id]:k},!0),e.oninstalled?.(X)}catch(k){y(a,`Install failed: ${k}`)}finally{y(o,{...d(o),[X.project_id]:!1},!0)}}}Ji(()=>{const X=Zs(()=>e.onclose?.());return()=>Js(X)});var v=Vp(),_=V(v),m=V(_),h=V(m),E=P(V(h),2),b=V(E),M=P(b);{var w=X=>{var k=Si();ze(ee=>_e(k,`· ${ee??""}`),[()=>d(u)[0].toUpperCase()+d(u).slice(1)]),le(X,k)};Ke(M,X=>{d(u)&&X(w)})}var D=P(h,2),T=P(m,2),F=V(T),S=P(T,2),A=V(S);{var ie=X=>{var k=kp(),ee=me(k,!0);ze(()=>_e(ee,d(a))),le(X,k)};Ke(A,X=>{d(a)&&X(ie)})}var fe=P(A,2);{var W=X=>{var k=lc(),ee=me(k,!0);ze(()=>_e(ee,d(r)?"Searching Modrinth…":"Type to search.")),le(X,k)},Q=X=>{var k=lc(),ee=me(k);ze(ce=>_e(ee,`No mods for MC ${e.instance.minecraft_version??""}${d(u)?` + ${d(u)}`:""} match “${ce??""}”.`),[()=>d(t).trim()]),le(X,k)},J=X=>{var k=Gp();Nt(k,21,()=>d(i),ee=>ee.project_id,(ee,ce)=>{var he=Hp(),q=V(he),K=P(q,2),Re=V(K),Pe=V(Re),Oe=me(Pe,!0),Fe=P(Pe,2),We=me(Fe),Ge=P(Re,2),$=me(Ge,!0),Le=P(Ge,2),Ce=me(Le),U=P(K,2);{var Te=O=>{var G=Bp();ze(()=>$e(G,"title",d(s)[d(ce).project_id])),le(O,G)},Se=O=>{var G=zp(),we=me(G,!0);ze(()=>{G.disabled=d(o)[d(ce).project_id],_e(we,d(o)[d(ce).project_id]?"Installing…":"Install")}),oe("click",G,()=>g(d(ce))),le(O,G)};Ke(U,O=>{d(s)[d(ce).project_id]?O(Te):O(Se,-1)})}ze((O,G,we)=>{$e(q,"src",O),$e(Pe,"title",d(ce).title),_e(Oe,d(ce).title),$e(Fe,"title",`${G??""} downloads`),_e(We,`⤓ ${we??""}`),$e(Ge,"title",d(ce).description),_e($,d(ce).description),_e(Ce,`by ${(d(ce).author||"unknown")??""}`)},[()=>p(d(ce)),()=>f(d(ce).downloads),()=>f(d(ce).downloads)]),yr("error",q,O=>{O.currentTarget.dataset.f||(O.currentTarget.dataset.f="1",O.currentTarget.src="/logo.png")}),le(ee,he)}),le(X,k)};Ke(fe,X=>{d(i)?d(i).length===0&&!d(r)?X(Q,1):X(J,-1):X(W)})}ze(()=>_e(b,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `)),oe("click",v,X=>{X.target===X.currentTarget&&e.onclose?.()}),oe("click",D,()=>e.onclose?.()),Ht(F,()=>d(t),X=>y(t,X)),le(n,v),Cn()}ei(["click"]);var Xp=be('<button><span class="w-5 shrink-0 text-center text-[15px]"> </span> <span class="truncate"> </span></button>'),jp=be('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Yp=be('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),cc=be('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),po=be('<p class="mt-2 text-[12px] text-rose-400"> </p>'),qp=be(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">📂 Open Mods Folder</button></div>`,1),Kp=be('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),Zp=be('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),Jp=be('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder">📂 Open Screenshots Folder</button>',1),Qp=be('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),$p=be('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder">📂 Open Logs Folder</button></div>',1),em=be('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, icon and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p></div>',1),tm=be('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!></div>');function nm(n,e){Rn(e,!0);let t=gt(e,"storage",3,null);const i=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let r=ve("mods"),a=ve(Ut([])),o=ve(!1),s=ve(""),l=ve(""),c=ve(!1),u=ve(Ut([])),f=ve(Ut([])),p=ve(!1),g=ve("");function v(...$){return[t()?t().instances_dir.replace(/\\/g,"/"):"",e.instance.id,"minecraft",...$].filter(Boolean).join("/")}function _($){const Le=window.__TAURI__?.core?.convertFileSrc;return Le?Le($):$}function m($){return $>=1024*1024?`${($/1024/1024).toFixed(1)} MB`:$>=1024?`${($/1024).toFixed(1)} KB`:`${$} B`}function h($){return $?new Date($*1e3).toLocaleString():""}function E(){const $=d(l).trim().toLowerCase();return $?d(a).filter(Le=>Le.display_name.toLowerCase().includes($)||Le.filename.toLowerCase().includes($)):d(a)}async function b(){y(o,!0);try{y(a,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:e.instance.id}),!0),y(s,"")}catch($){y(s,String($),!0)}finally{y(o,!1)}}async function M($){y(o,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:e.instance.id,filename:$.filename,enable:!$.is_enabled}),d(s)&&y(s,"")}catch(Le){y(s,String(Le),!0)}finally{y(o,!1)}await b()}async function w($){y(o,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:e.instance.id,filename:$.filename}),y(s,"")}catch(Le){y(s,String(Le),!0)}finally{y(o,!1)}await b()}async function D(){const $=window.__TAURI__?.dialog?.open;if(!$){y(s,"File picker unavailable in this build.");return}let Le;try{Le=await $({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(U){y(s,String(U),!0);return}const Ce=Le?[].concat(Le):[];if(Ce.length){y(o,!0);try{for(const U of Ce)await window.__TAURI__.core.invoke("import_mod",{instanceId:e.instance.id,jarPath:U});y(s,"")}catch(U){y(s,String(U),!0)}finally{y(o,!1)}await b()}}async function T($){y(p,!0);try{const Le=await window.__TAURI__.core.invoke($,{instanceId:e.instance.id});y($==="list_screenshots"?u:f,Le,!0),y(g,"")}catch(Le){y(g,String(Le),!0)}finally{y(p,!1)}}function F($){window.__TAURI__.core.invoke("open_path",{path:$}).catch(Le=>y(g,String(Le),!0))}function S($){F(v("screenshots",$))}Ji(()=>{b(),T("list_screenshots"),T("list_logs")});var A=tm(),ie=V(A),fe=V(ie),W=P(fe,2),Q=V(W),J=me(Q,!0),X=P(Q,2),k=me(X),ee=P(W,2);Nt(ee,21,()=>i,$=>$.id,($,Le)=>{var Ce=Xp(),U=V(Ce),Te=me(U,!0),Se=P(U,2),O=me(Se,!0);ze(()=>{Mt(Ce,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${d(r)===d(Le).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),$e(Ce,"aria-current",d(r)===d(Le).id?"true":void 0),_e(Te,d(Le).icon),_e(O,d(Le).label)}),oe("click",Ce,()=>y(r,d(Le).id,!0)),le($,Ce)});var ce=P(ie,2),he=V(ce),q=V(he);{var K=$=>{var Le=jp(),Ce=P(Ct(Le),4),U=V(Ce),Te=me(U),Se=P(U,2),O=me(Se),G=P(Se,2),we=me(G);ze(Ee=>{_e(Te,`Minecraft ${e.instance.minecraft_version??""}`),_e(O,`Loader: ${e.instance.loader_type??""}`),_e(we,`Last played: ${Ee??""}`)},[()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleString():"never"]),le($,Le)},Re=$=>{var Le=qp(),Ce=P(Ct(Le),4),U=V(Ce),Te=me(U),Se=P(U,2),O=P(Ce,2),G=P(O,2),we=P(G,2),Ee=V(we);Nt(Ee,21,E,x=>x.filename,(x,N)=>{var ae=Yp(),se=V(ae),pe=V(se);let ke;var ye=me(pe,!0),Y=P(pe,2),L=me(Y),te=P(se),ne=me(te),xe=P(te),De=me(xe);ze(Ye=>{ke=Mt(pe,1,"truncate",null,ke,{"opacity-50":!d(N).is_enabled}),_e(ye,d(N).display_name),_e(L,`${d(N).filename??""} · ${Ye??""}`),Mt(ne,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${d(N).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),$e(ne,"title",d(N).is_enabled?"Disable":"Enable"),ne.disabled=d(o),$e(De,"title",`Delete ${d(N).display_name??""}`),De.disabled=d(o)},[()=>m(d(N).file_size)]),oe("click",ne,()=>M(d(N))),oe("click",De,()=>w(d(N))),le(x,ae)},x=>{var N=cc(),ae=V(N),se=V(ae);{var pe=ye=>{var Y=Si("Loading mods…");le(ye,Y)},ke=ye=>{var Y=Si("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");le(ye,Y)};Ke(se,ye=>{d(o)?ye(pe):ye(ke,-1)})}le(x,N)});var Ue=P(we,2);{var Me=x=>{var N=po(),ae=me(N,!0);ze(()=>_e(ae,d(s))),le(x,N)};Ke(Ue,x=>{d(s)&&x(Me)})}var Xe=P(Ue,2),Ve=V(Xe),R=P(Ve,2);ze(()=>{_e(Te,`Installed (${d(a).length??""})`),Se.disabled=d(o),Ve.disabled=d(o),R.disabled=!t(),$e(R,"title",t()?"Opens the instance mods folder":"Storage unknown")}),oe("click",Se,b),Ht(O,()=>d(l),x=>y(l,x)),oe("click",G,()=>y(c,!0)),oe("click",Ve,D),oe("click",R,()=>F(v("mods"))),le($,Le)},Pe=$=>{var Le=Jp(),Ce=P(Ct(Le),4);Nt(Ce,21,()=>d(u),O=>O.name,(O,G)=>{var we=Kp(),Ee=V(we),Ue=P(Ee,2),Me=me(Ue,!0);ze((Xe,Ve,R)=>{$e(we,"title",`${d(G).name??""} · ${Xe??""} · ${Ve??""}`),$e(Ee,"src",R),$e(Ee,"alt",d(G).name),$e(Ue,"title",d(G).name),_e(Me,d(G).name)},[()=>m(d(G).size),()=>h(d(G).modified),()=>_(v("screenshots",d(G).name))]),oe("click",we,()=>S(d(G).name)),oe("keydown",we,Xe=>{(Xe.key==="Enter"||Xe.key===" ")&&(Xe.preventDefault(),S(d(G).name))}),le(O,we)},O=>{var G=Zp(),we=V(G);{var Ee=Me=>{var Xe=Si("Loading screenshots…");le(Me,Xe)},Ue=Me=>{var Xe=Si("No screenshots yet — press F2 in game to capture one.");le(Me,Xe)};Ke(we,Me=>{d(p)?Me(Ee):Me(Ue,-1)})}le(O,G)});var U=P(Ce,2);{var Te=O=>{var G=po(),we=me(G,!0);ze(()=>_e(we,d(g))),le(O,G)};Ke(U,O=>{d(g)&&O(Te)})}var Se=P(U,2);oe("click",Se,()=>F(v("screenshots"))),le($,Le)},Oe=$=>{var Le=$p(),Ce=P(Ct(Le),4),U=V(Ce);Nt(U,21,()=>d(f),Ee=>Ee.name,(Ee,Ue)=>{var Me=Qp(),Xe=V(Me),Ve=V(Xe),R=me(Ve,!0),x=P(Ve,2),N=me(x),ae=P(Xe),se=me(ae);ze((pe,ke)=>{$e(Ve,"title",d(Ue).name),_e(R,d(Ue).name),_e(N,`${pe??""} · ${ke??""}`)},[()=>m(d(Ue).size),()=>h(d(Ue).modified)]),oe("click",se,()=>F(v("logs",d(Ue).name))),le(Ee,Me)},Ee=>{var Ue=cc(),Me=V(Ue),Xe=V(Me);{var Ve=x=>{var N=Si("Loading logs…");le(x,N)},R=x=>{var N=Si("No log files yet — logs appear after the first launch.");le(x,N)};Ke(Xe,x=>{d(p)?x(Ve):x(R,-1)})}le(Ee,Ue)});var Te=P(Ce,2);{var Se=Ee=>{var Ue=po(),Me=me(Ue,!0);ze(()=>_e(Me,d(g))),le(Ee,Ue)};Ke(Te,Ee=>{d(g)&&Ee(Se)})}var O=P(Te,2),G=V(O),we=P(G,2);oe("click",G,()=>e.onopenconsole?.()),oe("click",we,()=>F(v("logs"))),le($,Le)},Fe=$=>{var Le=em(),Ce=P(Ct(Le),4),U=V(Ce),Te=me(U,!0),Se=P(U,2),O=V(Se),G=me(O),we=P(O,2),Ee=me(we);ze((Ue,Me,Xe)=>{_e(Te,e.instance.name),$e(Se,"title",Ue),_e(G,`Game folder: ${Me??""}`),_e(Ee,`Mods folder: ${Xe??""}`)},[()=>v(),()=>v(),()=>v("mods")]),le($,Le)};Ke(q,$=>{d(r)==="components"?$(K):d(r)==="mods"?$(Re,1):d(r)==="screenshots"?$(Pe,2):d(r)==="logs"?$(Oe,3):$(Fe,-1)})}var We=P(ce,2);{var Ge=$=>{Wp($,{get instance(){return e.instance},onclose:()=>y(c,!1),oninstalled:()=>b()})};Ke(We,$=>{d(c)&&$(Ge)})}ze(()=>{$e(Q,"title",e.instance.name),_e(J,e.instance.name),_e(k,`${e.instance.minecraft_version??""} · ${e.instance.loader_type??""}`)}),oe("click",fe,function(...$){e.onback?.apply(this,$)}),le(n,A),Cn()}ei(["click","keydown"]);var im=be('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),rm=be('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),am=be('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),sm=be('<p class="mt-3 text-[12px] text-red-400"> </p>'),om=be(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),lm=be('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function cm(n,e){Rn(e,!0);let t=ve(null),i=ve(""),r=ve(""),a=ve(!1),o=ve("");function s(E){return E>=1024*1024?`${(E/1024/1024).toFixed(1)} MB`:E>=1024?`${(E/1024).toFixed(0)} KB`:`${E} B`}function l(){return!d(t)||!d(t).loader?"Vanilla":d(t).loader[0].toUpperCase()+d(t).loader.slice(1)+(d(t).loader_version?` ${d(t).loader_version}`:" (latest stable)")}Ji(async()=>{const E=Zs(()=>e.onclose?.());try{y(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),y(r,d(t).name,!0)}catch(b){y(i,String(b),!0)}return()=>Js(E)});async function c(){if(!d(a)){y(a,!0),y(o,"");try{const E=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:d(r).trim()});e.oninstalled?.(E)}catch(E){y(o,String(E),!0)}finally{y(a,!1)}}}var u=lm(),f=V(u),p=V(f),g=P(V(p),2),v=P(p,2);{var _=E=>{var b=im(),M=V(b),w=me(M,!0),D=P(M,2),T=me(D,!0);ze(()=>{_e(w,d(i)),$e(D,"title",e.path),_e(T,e.path)}),le(E,b)},m=E=>{var b=rm();le(E,b)},h=E=>{var b=om(),M=Ct(b),w=V(M),D=V(w),T=me(D,!0),F=P(D,2);{var S=Fe=>{var We=am(),Ge=me(We,!0);ze(()=>_e(Ge,d(t).summary)),le(Fe,We)};Ke(F,Fe=>{d(t).summary&&Fe(S)})}var A=P(F,2),ie=V(A),fe=me(ie),W=P(ie,2),Q=me(W,!0),J=P(W,2),X=me(J),k=P(J,2),ee=me(k,!0),ce=P(w,4),he=P(ce,2);{var q=Fe=>{var We=sm(),Ge=me(We,!0);ze(()=>_e(Ge,d(o))),le(Fe,We)};Ke(he,Fe=>{d(o)&&Fe(q)})}var K=P(M,2),Re=V(K),Pe=P(Re,2),Oe=me(Pe,!0);ze((Fe,We,Ge)=>{$e(D,"title",d(t).name),_e(T,d(t).name),_e(fe,`MC ${(d(t).game_version||"?")??""}`),_e(Q,Fe),$e(J,"title",`${d(t).download_count??""} downloaded, ${d(t).override_count??""} overrides extracted`),_e(X,`${d(t).file_count??""} files`),_e(ee,We),Pe.disabled=Ge,_e(Oe,d(a)?"Installing…":"Install Modpack")},[()=>l(),()=>s(d(t).archive_size),()=>d(a)||!d(r).trim()]),Ht(ce,()=>d(r),Fe=>y(r,Fe)),oe("click",Re,()=>e.onclose?.()),oe("click",Pe,c),le(E,b)};Ke(v,E=>{d(i)?E(_):d(t)?E(h,-1):E(m,1)})}oe("click",u,E=>{E.target===E.currentTarget&&e.onclose?.()}),oe("click",g,()=>e.onclose?.()),le(n,u),Cn()}ei(["click"]);var um=be('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),dm=be('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),uc=be("<option> </option>"),fm=be('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),hm=be('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),pm=be('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),mm=be('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),gm=be('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),vm=be('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),_m=be('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),xm=be('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),bm=be('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),ym=be('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),Mm=be('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),Sm=be('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Em=be('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),Tm=be('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),wm=be('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),Am=be('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),Rm=be('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>');function Cm(n,e){Rn(e,!0);let t=gt(e,"groups",19,()=>[]);const i=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],r=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"fabric",label:"Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],a=["","fabric","quilt"],o=["fabric","quilt"],s="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let l=ve(null),c=ve(!0),u=ve(""),f=ve(""),p=ve(Ut(new Set(["release"]))),g=ve(""),v=ve(""),_=ve(""),m=ve(""),h=ve(""),E=ve(""),b=ve(Ut([])),M=ve("idle"),w=0,D=ve(!1),T=ve("");function F(de,Be){const Ze=window.__TAURI__?.core;return Ze?Ze.invoke(de,Be):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const S=Gt(()=>{const de=d(l)?.versions??[],Be=d(f).trim().toLowerCase();return de.filter(Ze=>d(p).has(Ze.version_type)&&(!Be||Ze.id.toLowerCase().includes(Be)))}),A=Gt(()=>!a.includes(d(h))),ie=Gt(()=>o.includes(d(h))),fe=Gt(()=>!!d(g)&&!d(A)&&!d(D)&&!(d(ie)&&d(M)==="loading"));function W(de){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[de]??de}function Q(de){if(!de)return"—";const Be=new Date(de);if(Number.isNaN(Be.getTime()))return String(de).slice(0,10);const Ze=mt=>String(mt).padStart(2,"0");return`${Ze(Be.getDate())}/${Ze(Be.getMonth()+1)}/${Be.getFullYear()}`}function J(de){const Be=new Set(d(p));Be.has(de)?Be.delete(de):Be.add(de),y(p,Be,!0)}function X(){const de=window.__TAURI__?.core?.convertFileSrc;return d(m)&&de?de(d(m)):null}async function k(){const de=window.__TAURI__?.dialog?.open;if(!de){y(T,"Image picker unavailable in this build.");return}try{const Be=await de({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});Be&&(y(m,String(Be),!0),y(T,""))}catch(Be){y(T,String(Be),!0)}}async function ee(){if(!d(ie)||!d(g))return;const de=++w;y(M,"loading");try{const Be=await F("fetch_loader_versions",{loader:d(h),gameVersion:d(g)});if(de!==w)return;y(b,Be,!0),y(E,Be.find(Ze=>Ze.stable)?.version??Be[0]?.version??"",!0),y(M,Be.length?"idle":"error",!0)}catch{if(de!==w)return;y(b,[],!0),y(E,""),y(M,"error")}}async function ce(de){y(g,de,!0),d(ie)&&await ee()}async function he(de){y(h,de,!0),y(E,""),y(b,[],!0),y(M,"idle"),d(ie)&&await ee()}async function q(){y(c,!0),y(u,"");try{y(l,await F("fetch_vanilla_versions"),!0)}catch(de){y(u,String(de),!0)}finally{y(c,!1)}}async function K(){if(!d(fe))return;y(D,!0),y(T,"");const de=d(g),Be=d(v).trim()||de;try{const Ze=await F("create_instance",{name:Be,version:de,loader:d(h)||null,loaderVersion:d(E).trim()||null});let mt="";if(d(m))try{await F("set_instance_icon",{instanceId:Ze.id,imagePath:d(m)})}catch(_t){mt=`Instance created, but the icon could not be applied: ${_t}`}if(d(_).trim())try{await F("set_instance_group",{instanceId:Ze.id,group:d(_).trim()})}catch(_t){mt=mt?`${mt} The group could not be set: ${_t}`:`Instance created, but the group could not be set: ${_t}`}e.oncreated?.(Ze,mt)}catch(Ze){y(T,String(Ze),!0)}finally{y(D,!1)}}function Re(){window.__TAURI__?.core?.invoke("open_path",{path:s}).catch(de=>y(T,String(de),!0))}Ji(()=>{const de=Zs(()=>e.onclose?.());return q(),()=>Js(de)});var Pe=Rm(),Oe=V(Pe),Fe=V(Oe),We=V(Fe),Ge=V(We);{var $=de=>{var Be=um(),Ze=Ct(Be);ze(mt=>$e(Ze,"src",mt),[()=>X()]),le(de,Be)},Le=Gt(()=>X()),Ce=de=>{var Be=dm();le(de,Be)};Ke(Ge,de=>{d(Le)?de($):de(Ce,-1)})}var U=P(We,2),Te=V(U),Se=P(Te,2),O=P(V(Se),2),G=V(O);G.value=G.__value="";var we=P(G);Nt(we,16,t,de=>de,(de,Be)=>{var Ze=uc(),mt=me(Ze,!0),_t={};ze(()=>{_e(mt,Be),_t!==(_t=Be)&&(Ze.value=(Ze.__value=_t)??"")}),le(de,Ze)}),rl(O);var Ee=P(U,2),Ue=P(Fe,2),Me=V(Ue),Xe=V(Me),Ve=V(Xe);{var R=de=>{var Be=fm();le(de,Be)},x=de=>{var Be=hm(),Ze=V(Be),mt=me(Ze,!0),_t=P(Ze,2);ze(()=>_e(mt,d(u))),oe("click",_t,q),le(de,Be)},N=de=>{var Be=vm(),Ze=P(V(Be));Nt(Ze,21,()=>d(S),mt=>mt.id,(mt,_t)=>{var an=mm(),Pt=V(an),Jt=V(Pt),vn=me(Jt,!0),_n=P(Jt,2);{var Pn=re=>{var Z=pm();le(re,Z)};Ke(_n,re=>{d(_t).is_latest_release&&re(Pn)})}var ti=P(Pt),ni=me(ti,!0),C=P(ti),j=me(C,!0);ze((re,Z)=>{Mt(an,1,`cursor-pointer border-b border-(--border)/50 ${d(g)===d(_t).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),_e(vn,d(_t).id),_e(ni,re),_e(j,Z)},[()=>Q(d(_t).release_time),()=>W(d(_t).version_type)]),oe("click",an,()=>ce(d(_t).id)),oe("keydown",an,re=>{(re.key==="Enter"||re.key===" ")&&(re.preventDefault(),ce(d(_t).id))}),le(mt,an)},mt=>{var _t=gm();le(mt,_t)}),le(de,Be)};Ke(Ve,de=>{d(c)?de(R):d(u)?de(x,1):de(N,-1)})}var ae=P(Xe,2),se=V(ae),pe=P(se,2),ke=me(pe),ye=P(Me,2),Y=V(ye),L=P(V(Y),2);Nt(L,21,()=>i,de=>de.id,(de,Be)=>{var Ze=_m(),mt=V(Ze),_t=P(mt,2),an=me(_t,!0);ze(Pt=>{ac(mt,Pt),_e(an,d(Be).label)},[()=>d(p).has(d(Be).id)]),oe("change",mt,()=>J(d(Be).id)),le(de,Ze)});var te=P(Y,2),ne=P(V(te),2);Nt(ne,21,()=>r,de=>de.id,(de,Be)=>{var Ze=xm(),mt=V(Ze),_t=P(mt,2),an=me(_t,!0);ze(()=>{Va(mt,d(Be).id),ac(mt,d(h)===d(Be).id),_e(an,d(Be).label)}),oe("change",mt,()=>he(d(Be).id)),le(de,Ze)});var xe=P(ne,2);{var De=de=>{var Be=bm();le(de,Be)},Ye=de=>{var Be=ym();le(de,Be)};Ke(xe,de=>{d(A)?de(De):d(h)||de(Ye,1)})}var qe=P(xe,2);{var I=de=>{var Be=Tm(),Ze=P(Ct(Be),2);{var mt=Pt=>{var Jt=Mm();le(Pt,Jt)},_t=Pt=>{var Jt=Sm(),vn=Ct(Jt);Ht(vn,()=>d(E),_n=>y(E,_n)),le(Pt,Jt)},an=Pt=>{var Jt=Em(),vn=V(Jt);vn.value=vn.__value="";var _n=P(vn);Nt(_n,17,()=>d(b),Pn=>Pn.version,(Pn,ti)=>{var ni=uc(),C=me(ni),j={};ze(()=>{_e(C,`${d(ti).version??""}${d(ti).stable?"":" (unstable)"}`),j!==(j=d(ti).version)&&(ni.value=(ni.__value=j)??"")}),le(Pn,ni)}),rl(Jt),al(Jt,()=>d(E),Pn=>y(E,Pn)),le(Pt,Jt)};Ke(Ze,Pt=>{d(M)==="loading"?Pt(mt):d(M)==="error"?Pt(_t,1):Pt(an,-1)})}le(de,Be)};Ke(qe,de=>{d(ie)&&de(I)})}var Ie=P(Ue,2),H=V(Ie),ge=P(H,2);{var Ne=de=>{var Be=wm(),Ze=me(Be,!0);ze(()=>{$e(Be,"title",d(T)),_e(Ze,d(T))}),le(de,Be)},it=de=>{var Be=Am(),Ze=me(Be,!0);ze(()=>_e(Ze,d(g)?`Selected Minecraft ${d(g)}`:"Pick a version to continue")),le(de,Be)};Ke(ge,de=>{d(T)?de(Ne):de(it,-1)})}var at=P(ge,2),pt=P(at,2),Bt=me(pt,!0);ze(()=>{$e(Te,"placeholder",d(g)?`Instance name (${d(g)})`:"Instance name"),se.disabled=!d(l),_e(ke,`${d(S).length??""} shown`),pt.disabled=!d(fe),$e(pt,"title",d(A)?"This mod loader is not supported yet.":"Create the instance"),_e(Bt,d(D)?"Creating…":"OK")}),oe("click",Pe,de=>{de.target===de.currentTarget&&e.onclose?.()}),oe("click",We,k),Ht(Te,()=>d(v),de=>y(v,de)),al(O,()=>d(_),de=>y(_,de)),oe("click",Ee,()=>e.onclose?.()),Ht(se,()=>d(f),de=>y(f,de)),oe("click",H,Re),oe("click",at,()=>e.onclose?.()),oe("click",pt,K),le(n,Pe),Cn()}ei(["click","keydown","change"]);var Pm=be('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Lm=be('<button class="w-full rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game">■ Kill</button>'),Dm=be("<button> </button>"),Im=be('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Um=be('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="w-full rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">▶ Launch</button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">⚙ Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">📂 Folder</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip">⤓ Export</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance">⧉ Copy</button> <button class="w-full rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance">⇱ Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Nm(n,e){Rn(e,!0);let t=gt(e,"storage",3,null),i=gt(e,"gameRunning",3,!1),r=gt(e,"modsCount",3,null),a=gt(e,"groups",19,()=>[]),o=ve(!1),s=ve("");const l=Gt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function c(){const Te=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&Te?Te(e.instance.icon_path):"/logo.png"}function u(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function f(Te){const Se=new Date(Te*1e3),O=G=>String(G).padStart(2,"0");return`${O(Se.getDate())}/${O(Se.getMonth()+1)}/${Se.getFullYear()} ${O(Se.getHours())}:${O(Se.getMinutes())}:${O(Se.getSeconds())}`}function p(Te){const Se=Math.max(0,Math.floor(Te)),O=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],G=[];let we=Se;for(const[Ee,Ue]of O){const Me=Math.floor(we/Ee);if(Me&&(G.push(`${Me} ${Ue}${Me===1?"":"s"}`),we-=Me*Ee,G.length===2))break}return G.length?G.join(" "):"0 seconds"}const g=Gt(()=>{const Te=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${Te}, last played on ${f(e.instance.last_played)}, total played for ${p(e.instance.total_time_played)}`:Te});function v(Te){y(o,!1),y(s,""),e.onchangegroup?.(Te.trim()?Te.trim():null)}var _=Um(),m=V(_),h=me(m),E=P(m,2),b=me(E,!0),M=P(E,2),w=V(M),D=me(w,!0),T=P(w,2),F=me(T,!0),S=P(T,2);{var A=Te=>{var Se=Pm(),O=me(Se);ze(()=>_e(O,`▤ ${e.instance.group??""}`)),le(Te,Se)};Ke(S,Te=>{e.instance.group&&Te(A)})}var ie=P(M,2),fe=me(ie,!0),W=P(ie,2),Q=V(W),J=P(Q,2);{var X=Te=>{var Se=Lm();oe("click",Se,function(...O){e.onkill?.apply(this,O)}),le(Te,Se)};Ke(J,Te=>{i()&&Te(X)})}var k=P(J,2),ee=P(k,2),ce=P(V(ee),2),he=me(ce,!0),q=P(ee,2);{var K=Te=>{var Se=Im(),O=V(Se),G=P(O,2);Nt(G,16,a,Me=>Me,(Me,Xe)=>{var Ve=Dm(),R=me(Ve,!0);ze(()=>{Mt(Ve,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===Xe?"font-medium text-(--accent)":"text-(--text-muted)"}`),_e(R,Xe)}),oe("click",Ve,()=>v(Xe)),le(Me,Ve)});var we=P(G,2),Ee=V(we),Ue=P(Ee,2);ze(Me=>{Mt(O,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),Ue.disabled=Me},[()=>!d(s).trim()]),oe("click",O,()=>v("")),oe("keydown",Ee,Me=>{Me.key==="Enter"&&d(s).trim()&&v(d(s))}),Ht(Ee,()=>d(s),Me=>y(s,Me)),oe("click",Ue,()=>v(d(s))),le(Te,Se)};Ke(q,Te=>{d(o)&&Te(K)})}var Re=P(q,2),Pe=P(Re,2),Oe=P(Pe,2),Fe=P(Oe,2),We=P(Fe,2),Ge=P(W,2),$=V(Ge),Le=me($,!0),Ce=P($,2),U=me(Ce);ze((Te,Se,O)=>{$e(h,"src",Te),$e(E,"title",e.instance.name),_e(b,e.instance.name),_e(D,e.instance.minecraft_version),Mt(T,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${d(l)??""}`),_e(F,e.instance.loader_type),$e(ie,"title",Se),_e(fe,O),Q.disabled=i(),$e(Q,"title",i()?"A game is already running":`Launch ${e.instance.name}`),_e(he,d(o)?"▴":"▾"),Re.disabled=!t(),$e(Re,"title",t()?"Opens the instance folder":"Storage unknown"),_e(Le,d(g)),_e(U,`${r()??"…"??""} mods installed`)},[()=>c(),()=>u(),()=>u()]),yr("error",h,Te=>{Te.currentTarget.dataset.f||(Te.currentTarget.dataset.f="1",Te.currentTarget.src="/logo.png")}),oe("click",Q,function(...Te){e.onlaunch?.apply(this,Te)}),oe("click",k,function(...Te){e.onedit?.apply(this,Te)}),oe("click",ee,()=>y(o,!d(o))),oe("click",Re,function(...Te){e.onopenfolder?.apply(this,Te)}),oe("click",Pe,function(...Te){e.onexport?.apply(this,Te)}),oe("click",Oe,function(...Te){e.oncopy?.apply(this,Te)}),oe("click",Fe,function(...Te){e.ondelete?.apply(this,Te)}),oe("click",We,function(...Te){e.onshortcut?.apply(this,Te)}),le(n,_),Cn()}ei(["click","keydown"]);const Xa="twilight_user_accent",Dl="twilight_custom_themes",dc="#06B6D4",fc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],hc="#0F172A",Om="#FFFFFF",Fm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function rs(n){return Fm[n]??[]}function Qa(n){let e=n.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function pc(n){const e=t=>{const i=parseInt(n.replace("#","").substring(t,t+2),16)/255;return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function km(n){const e=pc(n),t=1.05/(e+.05);return(e+.05)/(pc(hc)+.05)>=t?hc:Om}function ja(n,{persist:e=!0}={}){const t=Qa(n);if(!t)return!1;const i=document.documentElement;return i.style.setProperty("--user-accent",t),i.style.setProperty("--on-accent",km(t)),e&&localStorage.setItem(Xa,t),!0}function Bm(){localStorage.removeItem(Xa);const n=document.documentElement;n.style.removeProperty("--user-accent"),n.style.removeProperty("--on-accent")}function sl(){return Qa(localStorage.getItem(Xa)??"")}function zm(){const n=sl();n&&ja(n)}const Qs=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:fc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...fc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:rs("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:rs("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:rs("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:rs("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],Il="twilight-dark",ol={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},Hm=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function Gm(n){let e="";for(const t of n){const i=t.codePointAt(0);i>=65&&i<=90?e+=String.fromCharCode(i+32):i>=97&&i<=122||i>=48&&i<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function Wd(n){const e=n&&typeof n=="object"?n:{},t={};for(const[i,r]of Object.entries(ol))t[i]=Qa(e[i]??"")??r;return t}function Vm(n){return typeof n=="string"&&n.startsWith("custom:")}function Xd(n){return fr().find(e=>e.id===n)??null}function fr(){try{const n=JSON.parse(localStorage.getItem(Dl)??"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e=="object"&&Vm(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:Wd(e.tokens)})):[]}catch{return[]}}function mc({name:n,dark:e,tokens:t}){const i=String(n??"").trim()||"Custom theme",r={id:`custom:${Gm(i)||"theme"}`,name:i,dark:!!e,tokens:Wd(t)},a=[...fr().filter(o=>o.id!==r.id),r];return localStorage.setItem(Dl,JSON.stringify(a)),r}function Wm(n){const e=fr().filter(t=>t.id!==n);return localStorage.setItem(Dl,JSON.stringify(e)),e}function gc(){try{const n=getComputedStyle(document.documentElement),e=(i,r)=>{const a=n.getPropertyValue(i).trim();return Qa(a)??r},t={};for(const[i,r]of Object.entries(ol)){const a=`--${i.replace(/(\d)$/,"-$1")}`;t[i]=e(a,r)}return t}catch{return{...ol}}}const Xm=new Set(Qs.map(n=>n.id));function jd(n){const e=(n??"").trim();return e==="dark"?Il:e==="light"?"twilight-light":Xm.has(e)||Xd(e)?e:null}function jm(n){const e=n.tokens;return{id:n.id,label:n.name,dark:n.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:n.name,hex:e.accent1}],tokens:e}}function $r(n){const e=jd(n);return e?Qs.find(t=>t.id===e)??jm(Xd(e)):null}function as(n){return $r(n)?.dark??!0}const Ym=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let mo="";function qm(n){const e=$r(n)??$r(Il);if(!e||e.id===mo)return e;const t=mo==="";mo=e.id;const i=document.documentElement;for(const r of Ym)i.style.removeProperty(r);i.classList.toggle("dark",e.dark),i.classList.toggle("light",!e.dark);for(const r of Qs)r.cls&&i.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;i.style.setProperty("--bg-1",r.bg1),i.style.setProperty("--bg-2",r.bg2),i.style.setProperty("--bg-3",r.bg3),i.style.setProperty("--border-1",r.border1),i.style.setProperty("--fg-1",r.fg1),i.style.setProperty("--fg-2",r.fg2),i.style.setProperty("--accent-1",r.accent1),i.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(Xa),ja(r.accent1,{persist:!1})}else t||(localStorage.removeItem(Xa),ja(e.accent,{persist:!1}));return e}var Km=be("<button></button>"),Zm=be('<span class="text-[11px] text-rose-400">invalid hex</span>'),Jm=be('<span class="text-[11px] text-(--text-muted)">live preview</span>'),Qm=be('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function $m(n,e){Rn(e,!0);let t=gt(e,"theme",3,"twilight-dark");const i=Gt(()=>$r(t())?.accent??dc),r=Gt(()=>{const b=$r(t())?.suggested??[],M=($r(t())?.accent??dc).toLowerCase();return b.map(w=>({...w,isBuiltin:w.hex.toLowerCase()===M}))});let a=ve(Ut(sl())),o=ve(Ut(d(a)??d(i))),s=ve(!1);Kn(()=>{t(),y(a,sl(),!0),y(o,d(a)??d(i),!0),y(s,!1)});function l(b){return d(a)===null?b.isBuiltin:d(a)===b.hex.toLowerCase()}function c(b){b.isBuiltin?(Bm(),y(a,null)):ja(b.hex)&&y(a,b.hex.toLowerCase(),!0),y(o,d(a)??d(i),!0),y(s,!1)}function u(b,M){const w=ja(b,{persist:M})?Qa(b):null;w?(y(a,w,!0),y(s,!1)):y(s,!0)}var f=Qm(),p=Ct(f);Nt(p,21,()=>d(r),b=>b.hex,(b,M)=>{var w=Km();ze((D,T)=>{Mt(w,1,`h-7 w-7 rounded-full ${D??""}`),Gi(w,`background:${d(M).hex??""}`),$e(w,"title",`${d(M).name??""}${d(M).isBuiltin?" (built-in)":""}`),$e(w,"aria-label",`${d(M).name??""} accent`),$e(w,"aria-pressed",T)},[()=>l(d(M))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>l(d(M))]),oe("click",w,()=>c(d(M))),le(b,w)});var g=P(p,2),v=V(g),_=P(v,2),m=P(_,2);{var h=b=>{var M=Zm();le(b,M)},E=b=>{var M=Jm();le(b,M)};Ke(m,b=>{d(s)?b(h):b(E,-1)})}ze(()=>{Va(v,d(o)),Va(_,d(o)),$e(_,"placeholder",d(i))}),oe("input",v,b=>{y(o,b.currentTarget.value,!0),u(d(o),!1)}),oe("change",v,b=>u(b.currentTarget.value,!0)),oe("input",_,b=>{y(o,b.currentTarget.value,!0),u(d(o),!1)}),oe("change",_,b=>u(b.currentTarget.value,!0)),le(n,f),Cn()}ei(["click","input","change"]);var eg=be('<button><span class="w-5 shrink-0 text-center text-[15px]"> </span> <span class="truncate"> </span></button>'),tg=be('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),ng=be('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),ig=be('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),vc=be('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),rg=be(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),ag=be("<option> </option>"),sg=be('<p class="mt-2 text-[12px] text-rose-400"> </p>'),og=be('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!></select> <!> <!> <button class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)">↻ Rescan JREs</button> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),_c=be('<button class="rounded px-4 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Reset</button>'),lg=be('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="text-[12px] font-medium">Shared library <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick the shared libraries directory">Browse…</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <!></div></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="text-[12px] font-medium">Instances library <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick the instances directory">Browse…</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Rescans the grid from this directory">Save</button> <!></div> <p class="mt-2 text-[11px] text-(--text-muted)">Without an override the grid adopts an existing Prism or FreesmLauncher library when one is present.</p></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">Staging area</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded px-4 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div></div>',1),cg=be('<h2 class="text-[16px] font-semibold">Storage &amp; Staging</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where the shared artifact library lives and where launch scratch files stage.</p> <!>',1),ug=be('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),dg=be("<p> </p>"),fg=be('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function hg(n,e){Rn(e,!0);let t=gt(e,"version",3,""),i=gt(e,"theme",15,"twilight-dark"),r=gt(e,"storage",3,null),a=gt(e,"runtimes",19,()=>[]),o=gt(e,"scanning",3,!1),s=gt(e,"javaError",3,""),l=gt(e,"javaPath",15,""),c=gt(e,"minMem",15,0),u=gt(e,"maxMem",15,0),f=gt(e,"sharedInput",15,""),p=gt(e,"instancesInput",15,""),g=gt(e,"storageBusy",3,!1),v=gt(e,"storageMsg",3,""),_=gt(e,"javaMsg",3,""),m=gt(e,"gameRunning",3,!1);const h=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Storage & Staging",icon:"📁"},{id:"about",label:"About & Updates",icon:"ℹ️"}];let E=ve("appearance"),b=ve(Ut(fr())),M=ve(""),w=ve(!0),D=ve(Ut(gc())),T=ve(""),F=ve("");function S(){y(D,gc(),!0),y(F,"Loaded the active theme’s tokens — tweak and save.")}function A(){try{const $=mc({name:d(M),dark:d(w),tokens:d(D)});y(b,fr(),!0),i($.id),y(F,`Saved “${$.name}”.`)}catch($){y(F,String($),!0)}}function ie($){Wm($),y(b,fr(),!0),i()===$&&i(Il),y(F,"Theme deleted.")}function fe(){y(T,JSON.stringify({name:d(M).trim()||"My theme",dark:d(w),tokens:d(D)},null,2),!0),y(F,"Theme JSON written below — copy it to share.")}function W(){try{const $=JSON.parse(d(T));if(!$||typeof $!="object"||Array.isArray($))throw new Error("Expected a theme object.");const Le=mc($);y(b,fr(),!0),i(Le.id),y(F,`Imported “${Le.name}”.`),y(T,"")}catch($){y(F,`Import failed: ${$}`)}}async function Q($){const Le=window.__TAURI__?.dialog?.open;if(!Le)return null;try{const Ce=await Le({directory:!0,multiple:!1,defaultPath:$&&$.trim()?$.trim():void 0});return typeof Ce=="string"?Ce:null}catch{return null}}const J="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var X=fg(),k=V(X),ee=V(k),ce=P(ee,2);Nt(ce,21,()=>h,$=>$.id,($,Le)=>{var Ce=eg(),U=V(Ce),Te=me(U,!0),Se=P(U,2),O=me(Se,!0);ze(()=>{Mt(Ce,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${d(E)===d(Le).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),$e(Ce,"aria-current",d(E)===d(Le).id?"true":void 0),_e(Te,d(Le).icon),_e(O,d(Le).label)}),oe("click",Ce,()=>y(E,d(Le).id,!0)),le($,Ce)});var he=P(k,2),q=V(he),K=V(q);{var Re=$=>{var Le=rg(),Ce=P(Ct(Le),6),U=V(Ce);Nt(U,17,()=>Qs,te=>te.id,(te,ne)=>{var xe=tg(),De=V(xe),Ye=V(De),qe=P(Ye,2),I=P(qe,2),Ie=P(De,2),H=me(Ie,!0),ge=P(Ie,2),Ne=me(ge,!0);ze(()=>{Mt(xe,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===d(ne).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),$e(xe,"aria-pressed",i()===d(ne).id),$e(xe,"title",`${d(ne).label??""}: ${d(ne).dark?"dark":"light"} ground`),Gi(Ye,`background:${d(ne).swatch[0]??""}`),Gi(qe,`background:${d(ne).swatch[1]??""}`),Gi(I,`background:${d(ne).swatch[2]??""}`),_e(H,d(ne).label),_e(Ne,d(ne).dark?"Dark ground":"Light ground")}),oe("click",xe,()=>i(d(ne).id)),le(te,xe)});var Te=P(U,2);Nt(Te,17,()=>d(b),te=>te.id,(te,ne)=>{var xe=ng(),De=V(xe),Ye=V(De),qe=P(Ye,2),I=P(qe,2),Ie=P(De,2),H=me(Ie,!0),ge=P(Ie,2),Ne=me(ge),it=P(ge,2);ze(()=>{Mt(xe,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===d(ne).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),$e(xe,"title",`${d(ne).name??""}: ${d(ne).dark?"dark":"light"} ground`),Gi(Ye,`background:${d(ne).tokens.bg1??""}`),Gi(qe,`background:${d(ne).tokens.bg3??""}`),Gi(I,`background:${d(ne).tokens.accent1??""}`),_e(H,d(ne).name),_e(Ne,`Custom · ${d(ne).dark?"Dark":"Light"} ground`),$e(it,"title",`Delete ${d(ne).name??""}`),$e(it,"aria-label",`Delete ${d(ne).name??""}`)}),oe("click",xe,()=>i(d(ne).id)),oe("keydown",xe,at=>{(at.key==="Enter"||at.key===" ")&&(at.preventDefault(),i(d(ne).id))}),oe("click",it,at=>{at.stopPropagation(),ie(d(ne).id)}),le(te,xe)});var Se=P(Ce,4),O=V(Se);$m(O,{get theme(){return i()}});var G=P(Se,6),we=V(G),Ee=V(we),Ue=P(Ee,2),Me=V(Ue),Xe=P(Me,2),Ve=P(we,2);Nt(Ve,21,()=>Hm,te=>te.key,(te,ne)=>{var xe=ig(),De=V(xe),Ye=me(De,!0),qe=P(De,2),I=V(qe),Ie=P(I,2);ze(()=>{_e(Ye,d(ne).label),Va(I,d(D)[d(ne).key]),$e(I,"title",`${d(ne).label??""} color`),$e(I,"aria-label",`${d(ne).label??""} color`),Va(Ie,d(D)[d(ne).key]),$e(Ie,"aria-label",`${d(ne).label??""} hex`)}),oe("input",I,H=>y(D,{...d(D),[d(ne).key]:H.currentTarget.value},!0)),oe("input",Ie,H=>y(D,{...d(D),[d(ne).key]:H.currentTarget.value},!0)),le(te,xe)});var R=P(Ve,2),x=V(R),N=P(x,2),ae=P(G,4),se=V(ae),pe=P(se,2),ke=V(pe),ye=P(ke,2),Y=P(ae,2);{var L=te=>{var ne=vc(),xe=me(ne,!0);ze(()=>_e(xe,d(F))),le(te,ne)};Ke(Y,te=>{d(F)&&te(L)})}ze(()=>{Mt(Me,1,`px-3 py-1.5 text-[12px] ${d(w)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),$e(Me,"aria-pressed",d(w)),Mt(Xe,1,`px-3 py-1.5 text-[12px] ${d(w)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),$e(Xe,"aria-pressed",!d(w))}),Ht(Ee,()=>d(M),te=>y(M,te)),oe("click",Me,()=>y(w,!0)),oe("click",Xe,()=>y(w,!1)),oe("click",x,S),oe("click",N,A),Ht(se,()=>d(T),te=>y(T,te)),oe("click",ke,fe),oe("click",ye,W),le($,Le)},Pe=$=>{var Le=og(),Ce=P(Ct(Le),6),U=V(Ce);U.value=U.__value="";var Te=P(U);Nt(Te,17,a,ae=>ae.executable,(ae,se)=>{var pe=ag(),ke=me(pe),ye={};ze(()=>{_e(ke,`Java ${d(se).major??""} — ${d(se).home??""}`),ye!==(ye=d(se).executable)&&(pe.value=(pe.__value=ye)??"")}),le(ae,pe)}),rl(Ce);var Se=P(Ce,2);{var O=ae=>{var se=vc(),pe=me(se,!0);ze(()=>_e(pe,o()?"Probing system roots…":"No runtimes detected.")),le(ae,se)};Ke(Se,ae=>{a().length||ae(O)})}var G=P(Se,2);{var we=ae=>{var se=sg(),pe=me(se,!0);ze(()=>_e(pe,s())),le(ae,se)};Ke(G,ae=>{s()&&ae(we)})}var Ee=P(G,2),Ue=P(Ee,4),Me=P(V(Ue),2),Xe=P(Me,2),Ve=P(Ue,2),R=P(V(Ve),2),x=P(R,2),N=P(Ve,4);ze(()=>Ee.disabled=o()),al(Ce,l),oe("click",Ee,function(...ae){e.onscanjava?.apply(this,ae)}),Ht(Me,c),Ht(Xe,c),Ht(R,u),Ht(x,u),oe("click",N,function(...ae){e.onsaveprefs?.apply(this,ae)}),le($,Le)},Oe=$=>{var Le=cg(),Ce=P(Ct(Le),4);{var U=Te=>{var Se=lg(),O=Ct(Se),G=V(O),we=P(V(G)),Ee=me(we,!0),Ue=P(G,2),Me=V(Ue),Xe=P(Me,2),Ve=P(Xe,2),R=P(Ve,2);{var x=H=>{var ge=_c();ze(()=>ge.disabled=g()),oe("click",ge,function(...Ne){e.onresetshared?.apply(this,Ne)}),le(H,ge)};Ke(R,H=>{r().is_default_shared||H(x)})}var N=P(O,2),ae=V(N),se=P(V(ae)),pe=me(se,!0),ke=P(ae,2),ye=V(ke),Y=P(ye,2),L=P(Y,2),te=P(L,2);{var ne=H=>{var ge=_c();ze(()=>ge.disabled=g()),oe("click",ge,function(...Ne){e.onresetinstances?.apply(this,Ne)}),le(H,ge)};Ke(te,H=>{r().is_default_instances||H(ne)})}var xe=P(N,2),De=V(xe),Ye=V(De),qe=P(V(Ye),2),I=me(qe,!0),Ie=P(Ye,2);ze(()=>{_e(Ee,r().is_default_shared?"(default)":"(custom)"),$e(Me,"placeholder",r().shared_dir),Ve.disabled=g(),_e(pe,r().is_default_instances?"(default)":"(override)"),$e(ye,"placeholder",r().instances_dir),L.disabled=g(),$e(qe,"title",r().staging_root),_e(I,r().staging_root),Ie.disabled=g()||m(),$e(Ie,"title",m()?"Unavailable while a game is running":"Purges the staging area")}),Ht(Me,f),oe("click",Xe,async()=>{const H=await Q(f());H&&f(H)}),oe("click",Ve,function(...H){e.onsaveshared?.apply(this,H)}),Ht(ye,p),oe("click",Y,async()=>{const H=await Q(p());H&&p(H)}),oe("click",L,function(...H){e.onsaveinstances?.apply(this,H)}),oe("click",Ie,function(...H){e.oncleanstaging?.apply(this,H)}),le(Te,Se)};Ke(Ce,Te=>{r()&&Te(U)})}le($,Le)},Fe=$=>{var Le=ug(),Ce=P(Ct(Le),4),U=V(Ce),Te=P(V(U),2),Se=V(Te),O=P(V(Se)),G=me(O),we=P(Ce,2),Ee=V(we),Ue=P(Ee,2),Me=P(Ue,2);ze(()=>_e(G,`(alpha-v${t()??""})`)),oe("click",Ee,()=>e.onopenurl?.(`${J}`)),oe("click",Ue,()=>e.onopenurl?.(`${J}/releases`)),oe("click",Me,()=>e.onopenurl?.(`${J}/issues`)),le($,Le)};Ke(K,$=>{d(E)==="appearance"?$(Re):d(E)==="java"?$(Pe,1):d(E)==="storage"?$(Oe,2):$(Fe,-1)})}var We=P(K,2);{var Ge=$=>{var Le=dg(),Ce=me(Le,!0);ze(()=>{Mt(Le,1,`mt-5 text-[12px] ${_()?"text-(--accent)":"text-(--text-muted)"}`),_e(Ce,_()||v())}),le($,Le)};Ke(We,$=>{(_()||v())&&$(Ge)})}oe("click",ee,function(...$){e.onback?.apply(this,$)}),le(n,X),Cn()}ei(["click","keydown","input"]);const Ul="156",Tr={ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pg=0,xc=1,mg=2,Yd=1,gg=2,yi=3,di=0,Mn=1,kn=2,Ci=0,ea=1,bc=2,yc=3,Mc=4,vg=5,Yr=100,_g=101,xg=102,Sc=103,Ec=104,bg=200,yg=201,Mg=202,Sg=203,qd=204,Kd=205,Eg=206,Tg=207,wg=208,Ag=209,Rg=210,Cg=0,Pg=1,Lg=2,ll=3,Dg=4,Ig=5,Ug=6,Ng=7,Zd=0,Og=1,Fg=2,ji=0,kg=1,Bg=2,zg=3,Hg=4,Gg=5,Jd=300,oa=301,la=302,Vs=303,cl=304,$s=306,ul=1e3,Xn=1001,dl=1002,Dt=1003,Tc=1004,go=1005,On=1006,Vg=1007,Ya=1008,Yi=1009,Wg=1010,Xg=1011,Nl=1012,Qd=1013,Wi=1014,wi=1015,ca=1016,$d=1017,ef=1018,gr=1020,jg=1021,jn=1023,Yg=1024,qg=1025,vr=1026,ua=1027,Kg=1028,tf=1029,Zg=1030,nf=1031,rf=1033,vo=33776,_o=33777,xo=33778,bo=33779,wc=35840,Ac=35841,Rc=35842,Cc=35843,Jg=36196,Pc=37492,Lc=37496,Dc=37808,Ic=37809,Uc=37810,Nc=37811,Oc=37812,Fc=37813,kc=37814,Bc=37815,zc=37816,Hc=37817,Gc=37818,Vc=37819,Wc=37820,Xc=37821,yo=36492,jc=36494,Yc=36495,Qg=36283,qc=36284,Kc=36285,Zc=36286,af=3e3,_r=3001,$g=3200,ev=3201,sf=0,tv=1,xr="",At="srgb",fi="srgb-linear",eo="display-p3",Mo=7680,nv=519,iv=512,rv=513,av=514,sv=515,ov=516,lv=517,cv=518,uv=519,fl=35044,Jc="300 es",hl=1035,Ai=2e3,Ws=2001;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,pl=180/Math.PI;function qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function mn(n,e,t){return Math.max(e,Math.min(t,n))}function dv(n,e){return(n%e+e)%e}function So(n,e,t){return(1-t)*n+t*e}function Qc(n){return(n&n-1)===0&&n!==0}function ml(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fv={DEG2RAD:Us};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,i,r,a,o,s,l,c){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c)}set(e,t,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],p=i[2],g=i[5],v=i[8],_=r[0],m=r[3],h=r[6],E=r[1],b=r[4],M=r[7],w=r[2],D=r[5],T=r[8];return a[0]=o*_+s*E+l*w,a[3]=o*m+s*b+l*D,a[6]=o*h+s*M+l*T,a[1]=c*_+u*E+f*w,a[4]=c*m+u*b+f*D,a[7]=c*h+u*M+f*T,a[2]=p*_+g*E+v*w,a[5]=p*m+g*b+v*D,a[8]=p*h+g*M+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,p=s*l-u*a,g=c*a-o*l,v=t*f+i*p+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(s*i-r*o)*_,e[3]=p*_,e[4]=(u*t-r*l)*_,e[5]=(r*a-s*t)*_,e[6]=g*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eo=new dt;function of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hv(){const n=Xs("canvas");return n.style.display="block",n}const $c={};function Fa(n){n in $c||($c[n]=!0,console.warn(n))}function ta(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function To(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const pv=new dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),mv=new dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function gv(n){return n.convertSRGBToLinear().applyMatrix3(mv)}function vv(n){return n.applyMatrix3(pv).convertLinearToSRGB()}const _v={[fi]:n=>n,[At]:n=>n.convertSRGBToLinear(),[eo]:gv},xv={[fi]:n=>n,[At]:n=>n.convertLinearToSRGB(),[eo]:vv},In={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return fi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=_v[e],r=xv[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ar;class lf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=Xs("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ta(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ta(t[i]/255)*255):t[i]=ta(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bv=0;class cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=qi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(wo(r[o].image)):a.push(wo(r[o]))}else a=wo(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yv=0;class cn extends Sr{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Xn,r=Xn,a=On,o=Ya,s=jn,l=Yi,c=cn.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=qi(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_r?At:xr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ul:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ul:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?_r:af}set encoding(e){Fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_r?At:xr}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Jd;cn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],p=l[1],g=l[5],v=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(g+1)/2,w=(h+1)/2,D=(u+p)/4,T=(f+_)/4,F=(v+m)/4;return b>M&&b>w?b<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(b),r=D/i,a=T/i):M>w?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=D/r,a=F/r):w<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),i=T/a,r=F/a),this.set(i,r,a,t),this}let E=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(p-u)*(p-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(f-_)/E,this.z=(p-u)/E,this.w=Math.acos((c+g+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mv extends Sr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Fa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_r?At:xr),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:On,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Mv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uf extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sv extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const p=a[o+0],g=a[o+1],v=a[o+2],_=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=p,e[t+1]=g,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==p||c!==g||u!==v){let m=1-s;const h=l*p+c*g+u*v+f*_,E=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const w=Math.sqrt(b),D=Math.atan2(w,h*E);m=Math.sin(m*D)/w,s=Math.sin(s*D)/w}const M=s*E;if(l=l*m+p*M,c=c*m+g*M,u=u*m+v*M,f=f*m+_*M,m===1-s){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[o],p=a[o+1],g=a[o+2],v=a[o+3];return e[t]=s*v+u*f+l*g-c*p,e[t+1]=l*v+u*p+c*f-s*g,e[t+2]=c*v+u*g+s*p-l*f,e[t+3]=u*v-s*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(a/2),p=l(i/2),g=l(r/2),v=l(a/2);switch(o){case"XYZ":this._x=p*u*f+c*g*v,this._y=c*g*f-p*u*v,this._z=c*u*v+p*g*f,this._w=c*u*f-p*g*v;break;case"YXZ":this._x=p*u*f+c*g*v,this._y=c*g*f-p*u*v,this._z=c*u*v-p*g*f,this._w=c*u*f+p*g*v;break;case"ZXY":this._x=p*u*f-c*g*v,this._y=c*g*f+p*u*v,this._z=c*u*v+p*g*f,this._w=c*u*f-p*g*v;break;case"ZYX":this._x=p*u*f-c*g*v,this._y=c*g*f+p*u*v,this._z=c*u*v-p*g*f,this._w=c*u*f+p*g*v;break;case"YZX":this._x=p*u*f+c*g*v,this._y=c*g*f+p*u*v,this._z=c*u*v-p*g*f,this._w=c*u*f-p*g*v;break;case"XZY":this._x=p*u*f-c*g*v,this._y=c*g*f-p*u*v,this._z=c*u*v+p*g*f,this._w=c*u*f+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],p=i+s+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-l)*g,this._y=(a-c)*g,this._z=(o-r)*g}else if(i>s&&i>f){const g=2*Math.sqrt(1+i-s-f);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(a+c)/g}else if(s>f){const g=2*Math.sqrt(1+s-i-f);this._w=(a-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+f-i-s);this._w=(o-r)/g,this._x=(a+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*r-s*i,u=l*i+s*t-a*r,f=l*r+a*i-o*t,p=-a*t-o*i-s*r;return this.x=c*l+p*-a+u*-s-f*-o,this.y=u*l+p*-o+f*-a-c*-s,this.z=f*l+p*-s+c*-o-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new z,eu=new Mr;class $a{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)gi.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(gi)}else r.boundingBox===null&&r.computeBoundingBox(),Rr.copy(r.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),ss.subVectors(this.max,Ma),Cr.subVectors(e.a,Ma),Pr.subVectors(e.b,Ma),Lr.subVectors(e.c,Ma),ki.subVectors(Pr,Cr),Bi.subVectors(Lr,Pr),nr.subVectors(Cr,Lr);let t=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-nr.z,nr.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,nr.z,0,-nr.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-nr.y,nr.x,0];return!Ro(t,Cr,Pr,Lr,ss)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Cr,Pr,Lr,ss))?!1:(os.crossVectors(ki,Bi),t=[os.x,os.y,os.z],Ro(t,Cr,Pr,Lr,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new z,new z,new z,new z,new z,new z,new z,new z],gi=new z,Rr=new $a,Cr=new z,Pr=new z,Lr=new z,ki=new z,Bi=new z,nr=new z,Ma=new z,ss=new z,os=new z,ir=new z;function Ro(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){ir.fromArray(n,a);const s=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Ev=new $a,Sa=new z,Co=new z;class Ol{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ev.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Co)),this.expandByPoint(Sa.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new z,Po=new z,ls=new z,zi=new z,Lo=new z,cs=new z,Do=new z;class df{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Po.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Po);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ls),s=zi.dot(this.direction),l=-zi.dot(ls),c=zi.lengthSq(),u=Math.abs(1-o*o);let f,p,g,v;if(u>0)if(f=o*l-s,p=o*s-l,v=a*u,f>=0)if(p>=-v)if(p<=v){const _=1/u;f*=_,p*=_,g=f*(f+o*p+2*s)+p*(o*f+p+2*l)+c}else p=a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p<=-v?(f=Math.max(0,-(-o*a+s)),p=f>0?-a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c):p<=v?(f=0,p=Math.min(Math.max(-a,-l),a),g=p*(p+2*l)+c):(f=Math.max(0,-(o*a+s)),p=f>0?a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c);else p=o>0?-a:a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Po).addScaledVector(ls,p),g}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(a=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(s=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,r,a){Lo.subVectors(t,e),cs.subVectors(i,e),Do.crossVectors(Lo,cs);let o=this.direction.dot(Do),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=s*this.direction.dot(cs.crossVectors(zi,cs));if(l<0)return null;const c=s*this.direction.dot(Lo.cross(zi));if(c<0||l+c>o)return null;const u=-s*zi.dot(Do);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,i,r,a,o,s,l,c,u,f,p,g,v,_,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,c,u,f,p,g,v,_,m)}set(e,t,i,r,a,o,s,l,c,u,f,p,g,v,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=p,h[3]=g,h[7]=v,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),a=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=o*u,g=o*f,v=s*u,_=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=g+v*c,t[5]=p-_*c,t[9]=-s*l,t[2]=_-p*c,t[6]=v+g*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,g=l*f,v=c*u,_=c*f;t[0]=p+_*s,t[4]=v*s-g,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=g*s-v,t[6]=_+p*s,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,g=l*f,v=c*u,_=c*f;t[0]=p-_*s,t[4]=-o*f,t[8]=v+g*s,t[1]=g+v*s,t[5]=o*u,t[9]=_-p*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,g=o*f,v=s*u,_=s*f;t[0]=l*u,t[4]=v*c-g,t[8]=p*c+_,t[1]=l*f,t[5]=_*c+p,t[9]=g*c-v,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,g=o*c,v=s*l,_=s*c;t[0]=l*u,t[4]=_-p*f,t[8]=v*f+g,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=g*f+v,t[10]=p-_*f}else if(e.order==="XZY"){const p=o*l,g=o*c,v=s*l,_=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=p*f+_,t[5]=o*u,t[9]=g*f-v,t[2]=v*f-g,t[6]=s*u,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,wv)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Hi.crossVectors(i,Sn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Hi.crossVectors(i,Sn)),Hi.normalize(),us.crossVectors(Sn,Hi),r[0]=Hi.x,r[4]=us.x,r[8]=Sn.x,r[1]=Hi.y,r[5]=us.y,r[9]=Sn.y,r[2]=Hi.z,r[6]=us.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],p=i[9],g=i[13],v=i[2],_=i[6],m=i[10],h=i[14],E=i[3],b=i[7],M=i[11],w=i[15],D=r[0],T=r[4],F=r[8],S=r[12],A=r[1],ie=r[5],fe=r[9],W=r[13],Q=r[2],J=r[6],X=r[10],k=r[14],ee=r[3],ce=r[7],he=r[11],q=r[15];return a[0]=o*D+s*A+l*Q+c*ee,a[4]=o*T+s*ie+l*J+c*ce,a[8]=o*F+s*fe+l*X+c*he,a[12]=o*S+s*W+l*k+c*q,a[1]=u*D+f*A+p*Q+g*ee,a[5]=u*T+f*ie+p*J+g*ce,a[9]=u*F+f*fe+p*X+g*he,a[13]=u*S+f*W+p*k+g*q,a[2]=v*D+_*A+m*Q+h*ee,a[6]=v*T+_*ie+m*J+h*ce,a[10]=v*F+_*fe+m*X+h*he,a[14]=v*S+_*W+m*k+h*q,a[3]=E*D+b*A+M*Q+w*ee,a[7]=E*T+b*ie+M*J+w*ce,a[11]=E*F+b*fe+M*X+w*he,a[15]=E*S+b*W+M*k+w*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],p=e[10],g=e[14],v=e[3],_=e[7],m=e[11],h=e[15];return v*(+a*l*f-r*c*f-a*s*p+i*c*p+r*s*g-i*l*g)+_*(+t*l*g-t*c*p+a*o*p-r*o*g+r*c*u-a*l*u)+m*(+t*c*f-t*s*g-a*o*f+i*o*g+a*s*u-i*c*u)+h*(-r*s*u-t*l*f+t*s*p+r*o*f-i*o*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],p=e[10],g=e[11],v=e[12],_=e[13],m=e[14],h=e[15],E=f*m*c-_*p*c+_*l*g-s*m*g-f*l*h+s*p*h,b=v*p*c-u*m*c-v*l*g+o*m*g+u*l*h-o*p*h,M=u*_*c-v*f*c+v*s*g-o*_*g-u*s*h+o*f*h,w=v*f*l-u*_*l-v*s*p+o*_*p+u*s*m-o*f*m,D=t*E+i*b+r*M+a*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/D;return e[0]=E*T,e[1]=(_*p*a-f*m*a-_*r*g+i*m*g+f*r*h-i*p*h)*T,e[2]=(s*m*a-_*l*a+_*r*c-i*m*c-s*r*h+i*l*h)*T,e[3]=(f*l*a-s*p*a-f*r*c+i*p*c+s*r*g-i*l*g)*T,e[4]=b*T,e[5]=(u*m*a-v*p*a+v*r*g-t*m*g-u*r*h+t*p*h)*T,e[6]=(v*l*a-o*m*a-v*r*c+t*m*c+o*r*h-t*l*h)*T,e[7]=(o*p*a-u*l*a+u*r*c-t*p*c-o*r*g+t*l*g)*T,e[8]=M*T,e[9]=(v*f*a-u*_*a-v*i*g+t*_*g+u*i*h-t*f*h)*T,e[10]=(o*_*a-v*s*a+v*i*c-t*_*c-o*i*h+t*s*h)*T,e[11]=(u*s*a-o*f*a-u*i*c+t*f*c+o*i*g-t*s*g)*T,e[12]=w*T,e[13]=(u*_*r-v*f*r+v*i*p-t*_*p-u*i*m+t*f*m)*T,e[14]=(v*s*r-o*_*r-v*i*l+t*_*l+o*i*m-t*s*m)*T,e[15]=(o*f*r-u*s*r+u*i*l-t*f*l-o*i*p+t*s*p)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,f=s+s,p=a*c,g=a*u,v=a*f,_=o*u,m=o*f,h=s*f,E=l*c,b=l*u,M=l*f,w=i.x,D=i.y,T=i.z;return r[0]=(1-(_+h))*w,r[1]=(g+M)*w,r[2]=(v-b)*w,r[3]=0,r[4]=(g-M)*D,r[5]=(1-(p+h))*D,r[6]=(m+E)*D,r[7]=0,r[8]=(v+b)*T,r[9]=(m-E)*T,r[10]=(1-(p+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Dr.set(r[0],r[1],r[2]).length();const o=Dr.set(r[4],r[5],r[6]).length(),s=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/a,u=1/o,f=1/s;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Ai){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(s===Ai)g=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(s===Ws)g=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Ai){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-a),p=(t+e)*c,g=(i+r)*u;let v,_;if(s===Ai)v=(o+a)*f,_=-2*f;else if(s===Ws)v=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Dr=new z,Gn=new kt,Tv=new z(0,0,0),wv=new z(1,1,1),Hi=new z,us=new z,Sn=new z,tu=new kt,nu=new Mr;class to{constructor(e=0,t=0,i=0,r=to.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],p=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(mn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}to.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Av=0;const iu=new z,Ir=new Mr,_i=new kt,ds=new z,Ea=new z,Rv=new z,Cv=new Mr,ru=new z(1,0,0),au=new z(0,1,0),su=new z(0,0,1),Pv={type:"added"},Lv={type:"removed"};class un extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new z,t=new to,i=new Mr,r=new z(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new dt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ds.copy(e):ds.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ea,ds,this.up):_i.lookAt(ds,Ea,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(_i),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,Rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,Cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),v=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new z(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new z,xi=new z,Io=new z,bi=new z,Ur=new z,Nr=new z,ou=new z,Uo=new z,No=new z,Oo=new z;let fs=!1;class Fn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Vn.subVectors(r,t),xi.subVectors(i,t),Io.subVectors(e,t);const o=Vn.dot(Vn),s=Vn.dot(xi),l=Vn.dot(Io),c=xi.dot(xi),u=xi.dot(Io),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const p=1/f,g=(c*l-s*u)*p,v=(o*u-s*l)*p;return a.set(1-g-v,v,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,i,r,a,o,s,l){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,bi),l.setScalar(0),l.addScaledVector(a,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(s,bi.z),l}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),xi.subVectors(e,t),Vn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;Ur.subVectors(r,i),Nr.subVectors(a,i),Uo.subVectors(e,i);const l=Ur.dot(Uo),c=Nr.dot(Uo);if(l<=0&&c<=0)return t.copy(i);No.subVectors(e,r);const u=Ur.dot(No),f=Nr.dot(No);if(u>=0&&f<=u)return t.copy(r);const p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ur,o);Oo.subVectors(e,a);const g=Ur.dot(Oo),v=Nr.dot(Oo);if(v>=0&&g<=v)return t.copy(a);const _=g*c-l*v;if(_<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(i).addScaledVector(Nr,s);const m=u*v-g*f;if(m<=0&&f-u>=0&&g-v>=0)return ou.subVectors(a,r),s=(f-u)/(f-u+(g-v)),t.copy(r).addScaledVector(ou,s);const h=1/(m+_+p);return o=_*h,s=p*h,t.copy(i).addScaledVector(Ur,o).addScaledVector(Nr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dv=0;class ga extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=ea,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Kd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Fo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=In.workingColorSpace){return this.r=e,this.g=t,this.b=i,In.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=In.workingColorSpace){if(e=dv(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Fo(o,a,e+1/3),this.g=Fo(o,a,e),this.b=Fo(o,a,e-1/3)}return In.toWorkingColorSpace(this,r),this}setStyle(e,t=At){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=hf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return In.fromWorkingColorSpace(ln.copy(this),e),Math.round(mn(ln.r*255,0,255))*65536+Math.round(mn(ln.g*255,0,255))*256+Math.round(mn(ln.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=In.workingColorSpace){In.fromWorkingColorSpace(ln.copy(this),t);const i=ln.r,r=ln.g,a=ln.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=In.workingColorSpace){return In.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=At){In.fromWorkingColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,r=ln.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),Wn.h+=e,Wn.s+=t,Wn.l+=i,this.setHSL(Wn.h,Wn.s,Wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(hs);const i=So(Wn.h,hs.h,t),r=So(Wn.s,hs.s,t),a=So(Wn.l,hs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new xt;xt.NAMES=hf;class pf extends ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new z,ps=new Qe;class Qn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fl,this.updateRange={offset:0,count:-1},this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),a=bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class mf extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gf extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pi extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Iv=0;const Ln=new kt,ko=new un,Or=new z,En=new $a,Ta=new $a,Zt=new z;class Ni extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?gf:mf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new dt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];En.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Ta.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(En.min,Ta.min),En.expandByPoint(Zt),Zt.addVectors(En.max,Ta.max),En.expandByPoint(Zt)):(En.expandByPoint(Ta.min),En.expandByPoint(Ta.max))}En.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Zt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Zt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Zt.fromBufferAttribute(s,c),l&&(Or.fromBufferAttribute(e,c),Zt.add(Or)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<s;A++)c[A]=new z,u[A]=new z;const f=new z,p=new z,g=new z,v=new Qe,_=new Qe,m=new Qe,h=new z,E=new z;function b(A,ie,fe){f.fromArray(r,A*3),p.fromArray(r,ie*3),g.fromArray(r,fe*3),v.fromArray(o,A*2),_.fromArray(o,ie*2),m.fromArray(o,fe*2),p.sub(f),g.sub(f),_.sub(v),m.sub(v);const W=1/(_.x*m.y-m.x*_.y);isFinite(W)&&(h.copy(p).multiplyScalar(m.y).addScaledVector(g,-_.y).multiplyScalar(W),E.copy(g).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(W),c[A].add(h),c[ie].add(h),c[fe].add(h),u[A].add(E),u[ie].add(E),u[fe].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let A=0,ie=M.length;A<ie;++A){const fe=M[A],W=fe.start,Q=fe.count;for(let J=W,X=W+Q;J<X;J+=3)b(i[J+0],i[J+1],i[J+2])}const w=new z,D=new z,T=new z,F=new z;function S(A){T.fromArray(a,A*3),F.copy(T);const ie=c[A];w.copy(ie),w.sub(T.multiplyScalar(T.dot(ie))).normalize(),D.crossVectors(F,ie);const W=D.dot(u[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=W}for(let A=0,ie=M.length;A<ie;++A){const fe=M[A],W=fe.start,Q=fe.count;for(let J=W,X=W+Q;J<X;J+=3)S(i[J+0]),S(i[J+1]),S(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new z,a=new z,o=new z,s=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let p=0,g=e.count;p<g;p+=3){const v=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,p=new c.constructor(l.length*u);let g=0,v=0;for(let _=0,m=l.length;_<m;_++){s.isInterleavedBufferAttribute?g=l[_]*s.data.stride+s.offset:g=l[_]*u;for(let h=0;h<u;h++)p[v++]=c[g++]}return new Qn(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ni,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const p=c[u],g=e(p,i);l.push(g)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let p=0,g=f.length;p<g;p++)u.push(f[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new kt,rr=new df,ms=new Ol,cu=new z,Fr=new z,kr=new z,Br=new z,Bo=new z,gs=new z,vs=new Qe,_s=new Qe,xs=new Qe,uu=new z,du=new z,fu=new z,bs=new z,ys=new z;class yt extends un{constructor(e=new Ni,t=new pf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){gs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(Bo.fromBufferAttribute(f,e),o?gs.addScaledVector(Bo,u):gs.addScaledVector(Bo.sub(t),u))}t.add(gs)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(a),rr.copy(e.ray).recast(e.near),!(ms.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ms,cu)===null||rr.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(lu.copy(a).invert(),rr.copy(e.ray).applyMatrix4(lu),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){const m=p[v],h=o[m.materialIndex],E=Math.max(m.start,g.start),b=Math.min(s.count,Math.min(m.start+m.count,g.start+g.count));for(let M=E,w=b;M<w;M+=3){const D=s.getX(M),T=s.getX(M+1),F=s.getX(M+2);r=Ms(this,h,e,i,c,u,f,D,T,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),_=Math.min(s.count,g.start+g.count);for(let m=v,h=_;m<h;m+=3){const E=s.getX(m),b=s.getX(m+1),M=s.getX(m+2);r=Ms(this,o,e,i,c,u,f,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){const m=p[v],h=o[m.materialIndex],E=Math.max(m.start,g.start),b=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=E,w=b;M<w;M+=3){const D=M,T=M+1,F=M+2;r=Ms(this,h,e,i,c,u,f,D,T,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=v,h=_;m<h;m+=3){const E=m,b=m+1,M=m+2;r=Ms(this,o,e,i,c,u,f,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Uv(n,e,t,i,r,a,o,s){let l;if(e.side===Mn?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===di,s),l===null)return null;ys.copy(s),ys.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:n}}function Ms(n,e,t,i,r,a,o,s,l,c){n.getVertexPosition(s,Fr),n.getVertexPosition(l,kr),n.getVertexPosition(c,Br);const u=Uv(n,e,t,i,Fr,kr,Br,bs);if(u){r&&(vs.fromBufferAttribute(r,s),_s.fromBufferAttribute(r,l),xs.fromBufferAttribute(r,c),u.uv=Fn.getInterpolation(bs,Fr,kr,Br,vs,_s,xs,new Qe)),a&&(vs.fromBufferAttribute(a,s),_s.fromBufferAttribute(a,l),xs.fromBufferAttribute(a,c),u.uv1=Fn.getInterpolation(bs,Fr,kr,Br,vs,_s,xs,new Qe),u.uv2=u.uv1),o&&(uu.fromBufferAttribute(o,s),du.fromBufferAttribute(o,l),fu.fromBufferAttribute(o,c),u.normal=Fn.getInterpolation(bs,Fr,kr,Br,uu,du,fu,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new z,materialIndex:0};Fn.getNormal(Fr,kr,Br,f.normal),u.face=f}return u}class Ot extends Ni{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let p=0,g=0;v("z","y","x",-1,-1,i,t,e,o,a,0),v("z","y","x",1,-1,i,t,-e,o,a,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,a,4),v("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Pi(c,3)),this.setAttribute("normal",new Pi(u,3)),this.setAttribute("uv",new Pi(f,2));function v(_,m,h,E,b,M,w,D,T,F,S){const A=M/T,ie=w/F,fe=M/2,W=w/2,Q=D/2,J=T+1,X=F+1;let k=0,ee=0;const ce=new z;for(let he=0;he<X;he++){const q=he*ie-W;for(let K=0;K<J;K++){const Re=K*A-fe;ce[_]=Re*E,ce[m]=q*b,ce[h]=Q,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[h]=D>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(K/T),f.push(1-he/F),k+=1}}for(let he=0;he<F;he++)for(let q=0;q<T;q++){const K=p+q+J*he,Re=p+q+J*(he+1),Pe=p+(q+1)+J*(he+1),Oe=p+(q+1)+J*he;l.push(K,Re,Oe),l.push(Re,Pe,Oe),ee+=6}s.addGroup(g,ee,S),g+=ee,p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function da(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function pn(n){const e={};for(let t=0;t<n.length;t++){const i=da(n[t]);for(const r in i)e[r]=i[r]}return e}function Nv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vf(n){return n.getRenderTarget()===null?n.outputColorSpace:fi}const _f={clone:da,merge:pn};var Ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ov,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=Nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xf extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends xf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Hr=1;class kv extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new wn(zr,Hr,e,t);r.layers=this.layers,this.add(r);const a=new wn(zr,Hr,e,t);a.layers=this.layers,this.add(a);const o=new wn(zr,Hr,e,t);o.layers=this.layers,this.add(o);const s=new wn(zr,Hr,e,t);s.layers=this.layers,this.add(s);const l=new wn(zr,Hr,e,t);l.layers=this.layers,this.add(l);const c=new wn(zr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class bf extends cn{constructor(e,t,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:oa,super(e,t,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bv extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Fa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_r?At:xr),this.texture=new bf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ot(5,5,5),a=new Ii({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Ci});a.uniforms.tEquirect.value=t;const o=new yt(r,a),s=t.minFilter;return t.minFilter===Ya&&(t.minFilter=On),new kv(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const zo=new z,zv=new z,Hv=new dt;class Vi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zo.subVectors(i,t).cross(zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hv.getNormalMatrix(e),r=this.coplanarPoint(zo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Ol,Ss=new z;class Fl{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,a=new Vi,o=new Vi){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],p=r[7],g=r[8],v=r[9],_=r[10],m=r[11],h=r[12],E=r[13],b=r[14],M=r[15];if(i[0].setComponents(l-a,p-c,m-g,M-h).normalize(),i[1].setComponents(l+a,p+c,m+g,M+h).normalize(),i[2].setComponents(l+o,p+u,m+v,M+E).normalize(),i[3].setComponents(l-o,p-u,m-v,M-E).normalize(),i[4].setComponents(l-s,p-f,m-_,M-b).normalize(),t===Ai)i[5].setComponents(l+s,p+f,m+_,M+b).normalize();else if(t===Ws)i[5].setComponents(s,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yf(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Gv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,p=c.usage,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,p),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,f){const p=u.array,g=u.updateRange;n.bindBuffer(f,c),g.count===-1?n.bufferSubData(f,0,p):(t?n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(a(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class kl extends Ni{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,p=t/l,g=[],v=[],_=[],m=[];for(let h=0;h<u;h++){const E=h*p-o;for(let b=0;b<c;b++){const M=b*f-a;v.push(M,-E,0),_.push(0,0,1),m.push(b/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<s;E++){const b=E+c*h,M=E+c*(h+1),w=E+1+c*(h+1),D=E+1+c*h;g.push(b,M,D),g.push(M,w,D)}this.setIndex(g),this.setAttribute("position",new Pi(v,3)),this.setAttribute("normal",new Pi(_,3)),this.setAttribute("uv",new Pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
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
#endif`,Xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$v=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e_=`#ifdef USE_IRIDESCENCE
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
#endif`,t_=`#ifdef USE_BUMPMAP
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,u_=`#define PI 3.141592653589793
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
} // validated`,d_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f_=`vec3 transformedNormal = objectNormal;
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
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v_="gl_FragColor = linearToOutputTexel( gl_FragColor );",__=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
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
}`,C_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I_=`uniform bool receiveShadow;
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
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
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
#endif`,z_=`struct PhysicalMaterial {
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J_=`#if defined( USE_POINTS_UV )
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
#endif`,Q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
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
#endif`,nx=`#ifdef USE_MORPHTARGETS
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
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
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
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
}`,qx=`#define DISTANCE
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
}`,Kx=`#define DISTANCE
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,$x=`uniform vec3 diffuse;
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
}`,eb=`#include <common>
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
}`,tb=`uniform vec3 diffuse;
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define LAMBERT
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
}`,rb=`#define MATCAP
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
}`,ab=`#define MATCAP
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
}`,sb=`#define NORMAL
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
}`,ob=`#define NORMAL
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
}`,lb=`#define PHONG
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
}`,cb=`#define PHONG
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
}`,ub=`#define STANDARD
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
}`,db=`#define STANDARD
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
}`,fb=`#define TOON
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
}`,hb=`#define TOON
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
}`,pb=`uniform float size;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,vb=`uniform vec3 color;
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
}`,_b=`uniform float rotation;
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
}`,xb=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Vv,alphahash_pars_fragment:Wv,alphamap_fragment:Xv,alphamap_pars_fragment:jv,alphatest_fragment:Yv,alphatest_pars_fragment:qv,aomap_fragment:Kv,aomap_pars_fragment:Zv,begin_vertex:Jv,beginnormal_vertex:Qv,bsdfs:$v,iridescence_fragment:e_,bumpmap_pars_fragment:t_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:a_,color_fragment:s_,color_pars_fragment:o_,color_pars_vertex:l_,color_vertex:c_,common:u_,cube_uv_reflection_fragment:d_,defaultnormal_vertex:f_,displacementmap_pars_vertex:h_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:g_,colorspace_fragment:v_,colorspace_pars_fragment:__,envmap_fragment:x_,envmap_common_pars_fragment:b_,envmap_pars_fragment:y_,envmap_pars_vertex:M_,envmap_physical_pars_fragment:U_,envmap_vertex:S_,fog_vertex:E_,fog_pars_vertex:T_,fog_fragment:w_,fog_pars_fragment:A_,gradientmap_pars_fragment:R_,lightmap_fragment:C_,lightmap_pars_fragment:P_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:D_,lights_pars_begin:I_,lights_toon_fragment:N_,lights_toon_pars_fragment:O_,lights_phong_fragment:F_,lights_phong_pars_fragment:k_,lights_physical_fragment:B_,lights_physical_pars_fragment:z_,lights_fragment_begin:H_,lights_fragment_maps:G_,lights_fragment_end:V_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:j_,logdepthbuf_vertex:Y_,map_fragment:q_,map_pars_fragment:K_,map_particle_fragment:Z_,map_particle_pars_fragment:J_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:$_,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:rx,normal_fragment_maps:ax,normal_pars_fragment:sx,normal_pars_vertex:ox,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:fx,iridescence_pars_fragment:hx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:vx,dithering_fragment:_x,dithering_pars_fragment:xx,roughnessmap_fragment:bx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:Sx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Tx,skinbase_vertex:wx,skinning_pars_vertex:Ax,skinning_vertex:Rx,skinnormal_vertex:Cx,specularmap_fragment:Px,specularmap_pars_fragment:Lx,tonemapping_fragment:Dx,tonemapping_pars_fragment:Ix,transmission_fragment:Ux,transmission_pars_fragment:Nx,uv_pars_fragment:Ox,uv_pars_vertex:Fx,uv_vertex:kx,worldpos_vertex:Bx,background_vert:zx,background_frag:Hx,backgroundCube_vert:Gx,backgroundCube_frag:Vx,cube_vert:Wx,cube_frag:Xx,depth_vert:jx,depth_frag:Yx,distanceRGBA_vert:qx,distanceRGBA_frag:Kx,equirect_vert:Zx,equirect_frag:Jx,linedashed_vert:Qx,linedashed_frag:$x,meshbasic_vert:eb,meshbasic_frag:tb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:rb,meshmatcap_frag:ab,meshnormal_vert:sb,meshnormal_frag:ob,meshphong_vert:lb,meshphong_frag:cb,meshphysical_vert:ub,meshphysical_frag:db,meshtoon_vert:fb,meshtoon_frag:hb,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:vb,sprite_vert:_b,sprite_frag:xb},He={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},ai={basic:{uniforms:pn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:pn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new xt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:pn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:pn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:pn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new xt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:pn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:pn([He.points,He.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:pn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:pn([He.common,He.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:pn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:pn([He.sprite,He.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:pn([He.common,He.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:pn([He.lights,He.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};ai.physical={uniforms:pn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Es={r:0,b:0,g:0};function bb(n,e,t,i,r,a,o){const s=new xt(0);let l=a===!0?0:1,c,u,f=null,p=0,g=null;function v(m,h){let E=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=(h.backgroundBlurriness>0?t:e).get(b)),b===null?_(s,l):b&&b.isColor&&(_(b,1),E=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===$s)?(u===void 0&&(u=new yt(new Ot(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:da(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,D,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=b.colorSpace!==At,(f!==b||p!==b.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,p=b.version,g=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new yt(new kl(2,2),new Ii({name:"BackgroundMaterial",uniforms:da(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=b.colorSpace!==At,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||p!==b.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,p=b.version,g=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,h){m.getRGB(Es,vf(n)),i.buffers.color.setClear(Es.r,Es.g,Es.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(s,l)},render:v}}function yb(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let c=l,u=!1;function f(Q,J,X,k,ee){let ce=!1;if(o){const he=_(k,X,J);c!==he&&(c=he,g(c.object)),ce=h(Q,k,X,ee),ce&&E(Q,k,X,ee)}else{const he=J.wireframe===!0;(c.geometry!==k.id||c.program!==X.id||c.wireframe!==he)&&(c.geometry=k.id,c.program=X.id,c.wireframe=he,ce=!0)}ee!==null&&t.update(ee,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,F(Q,J,X,k),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function p(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function g(Q){return i.isWebGL2?n.bindVertexArray(Q):a.bindVertexArrayOES(Q)}function v(Q){return i.isWebGL2?n.deleteVertexArray(Q):a.deleteVertexArrayOES(Q)}function _(Q,J,X){const k=X.wireframe===!0;let ee=s[Q.id];ee===void 0&&(ee={},s[Q.id]=ee);let ce=ee[J.id];ce===void 0&&(ce={},ee[J.id]=ce);let he=ce[k];return he===void 0&&(he=m(p()),ce[k]=he),he}function m(Q){const J=[],X=[],k=[];for(let ee=0;ee<r;ee++)J[ee]=0,X[ee]=0,k[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:X,attributeDivisors:k,object:Q,attributes:{},index:null}}function h(Q,J,X,k){const ee=c.attributes,ce=J.attributes;let he=0;const q=X.getAttributes();for(const K in q)if(q[K].location>=0){const Pe=ee[K];let Oe=ce[K];if(Oe===void 0&&(K==="instanceMatrix"&&Q.instanceMatrix&&(Oe=Q.instanceMatrix),K==="instanceColor"&&Q.instanceColor&&(Oe=Q.instanceColor)),Pe===void 0||Pe.attribute!==Oe||Oe&&Pe.data!==Oe.data)return!0;he++}return c.attributesNum!==he||c.index!==k}function E(Q,J,X,k){const ee={},ce=J.attributes;let he=0;const q=X.getAttributes();for(const K in q)if(q[K].location>=0){let Pe=ce[K];Pe===void 0&&(K==="instanceMatrix"&&Q.instanceMatrix&&(Pe=Q.instanceMatrix),K==="instanceColor"&&Q.instanceColor&&(Pe=Q.instanceColor));const Oe={};Oe.attribute=Pe,Pe&&Pe.data&&(Oe.data=Pe.data),ee[K]=Oe,he++}c.attributes=ee,c.attributesNum=he,c.index=k}function b(){const Q=c.newAttributes;for(let J=0,X=Q.length;J<X;J++)Q[J]=0}function M(Q){w(Q,0)}function w(Q,J){const X=c.newAttributes,k=c.enabledAttributes,ee=c.attributeDivisors;X[Q]=1,k[Q]===0&&(n.enableVertexAttribArray(Q),k[Q]=1),ee[Q]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Q,J),ee[Q]=J)}function D(){const Q=c.newAttributes,J=c.enabledAttributes;for(let X=0,k=J.length;X<k;X++)J[X]!==Q[X]&&(n.disableVertexAttribArray(X),J[X]=0)}function T(Q,J,X,k,ee,ce,he){he===!0?n.vertexAttribIPointer(Q,J,X,ee,ce):n.vertexAttribPointer(Q,J,X,k,ee,ce)}function F(Q,J,X,k){if(i.isWebGL2===!1&&(Q.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const ee=k.attributes,ce=X.getAttributes(),he=J.defaultAttributeValues;for(const q in ce){const K=ce[q];if(K.location>=0){let Re=ee[q];if(Re===void 0&&(q==="instanceMatrix"&&Q.instanceMatrix&&(Re=Q.instanceMatrix),q==="instanceColor"&&Q.instanceColor&&(Re=Q.instanceColor)),Re!==void 0){const Pe=Re.normalized,Oe=Re.itemSize,Fe=t.get(Re);if(Fe===void 0)continue;const We=Fe.buffer,Ge=Fe.type,$=Fe.bytesPerElement,Le=i.isWebGL2===!0&&(Ge===n.INT||Ge===n.UNSIGNED_INT||Re.gpuType===Qd);if(Re.isInterleavedBufferAttribute){const Ce=Re.data,U=Ce.stride,Te=Re.offset;if(Ce.isInstancedInterleavedBuffer){for(let Se=0;Se<K.locationSize;Se++)w(K.location+Se,Ce.meshPerAttribute);Q.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Se=0;Se<K.locationSize;Se++)M(K.location+Se);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Se=0;Se<K.locationSize;Se++)T(K.location+Se,Oe/K.locationSize,Ge,Pe,U*$,(Te+Oe/K.locationSize*Se)*$,Le)}else{if(Re.isInstancedBufferAttribute){for(let Ce=0;Ce<K.locationSize;Ce++)w(K.location+Ce,Re.meshPerAttribute);Q.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ce=0;Ce<K.locationSize;Ce++)M(K.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Ce=0;Ce<K.locationSize;Ce++)T(K.location+Ce,Oe/K.locationSize,Ge,Pe,Oe*$,Oe/K.locationSize*Ce*$,Le)}}else if(he!==void 0){const Pe=he[q];if(Pe!==void 0)switch(Pe.length){case 2:n.vertexAttrib2fv(K.location,Pe);break;case 3:n.vertexAttrib3fv(K.location,Pe);break;case 4:n.vertexAttrib4fv(K.location,Pe);break;default:n.vertexAttrib1fv(K.location,Pe)}}}}D()}function S(){fe();for(const Q in s){const J=s[Q];for(const X in J){const k=J[X];for(const ee in k)v(k[ee].object),delete k[ee];delete J[X]}delete s[Q]}}function A(Q){if(s[Q.id]===void 0)return;const J=s[Q.id];for(const X in J){const k=J[X];for(const ee in k)v(k[ee].object),delete k[ee];delete J[X]}delete s[Q.id]}function ie(Q){for(const J in s){const X=s[J];if(X[Q.id]===void 0)continue;const k=X[Q.id];for(const ee in k)v(k[ee].object),delete k[ee];delete X[Q.id]}}function fe(){W(),u=!0,c!==l&&(c=l,g(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:fe,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:ie,initAttributes:b,enableAttribute:M,disableUnusedAttributes:D}}function Mb(n,e,t,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,u){n.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,f){if(f===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,c,u,f),t.update(u,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function Sb(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,M=o||e.has("OES_texture_float"),w=b&&M,D=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:D}}function Eb(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new Vi,s=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,g){const v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||a&&!m)a?u(null):c();else{const E=a?0:i,b=E*4;let M=h.clippingState||null;l.value=M,M=u(v,p,b,g);for(let w=0;w!==b;++w)M[w]=t[w];h.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,p,g,v){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const h=g+_*4,E=p.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,M=g;b!==_;++b,M+=4)o.copy(f[b]).applyMatrix4(E,s),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tb(n){let e=new WeakMap;function t(o,s){return s===Vs?o.mapping=oa:s===cl&&(o.mapping=la),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Vs||s===cl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bv(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Mf extends xf{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qr=4,hu=[.125,.215,.35,.446,.526,.582],cr=20,Ho=new Mf,pu=new xt;let Go=null;const or=(1+Math.sqrt(5))/2,Gr=1/or,mu=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,or,Gr),new z(0,or,-Gr),new z(Gr,0,or),new z(-Gr,0,or),new z(or,Gr,0),new z(-or,Gr,0)];class gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Go=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Go),e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oa||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:ca,format:jn,colorSpace:fi,depthBuffer:!1},r=vu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wb(a)),this._blurMaterial=Ab(a,e,t)}return r}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,i,r){const s=new wn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(pu),u.toneMapping=ji,u.autoClear=!1;const g=new pf({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),v=new yt(new Ot,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(pu),_=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):E===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const b=this._cubeSize;Ts(r,E*b,h>2?b:0,b,b),u.setRenderTarget(r),_&&u.render(v,s),u.render(e,s)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===oa||e.mapping===la;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mu[(r-1)%mu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new yt(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*cr-1),_=a/v,m=isFinite(a)?1+Math.floor(u*_):cr;m>cr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cr}`);const h=[];let E=0;for(let T=0;T<cr;++T){const F=T/_,S=Math.exp(-F*F/2);h.push(S),T===0?E+=S:T<m&&(E+=2*S)}for(let T=0;T<h.length;T++)h[T]=h[T]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-i;const M=this._sizeLods[r],w=3*M*(r>b-qr?r-b+qr:0),D=4*(this._cubeSize-M);Ts(t,w,D,3*M,2*M),l.setRenderTarget(t),l.render(f,Ho)}}function wb(n){const e=[],t=[],i=[];let r=n;const a=n-qr+1+hu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-qr?l=hu[o-n+qr-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,v=6,_=3,m=2,h=1,E=new Float32Array(_*v*g),b=new Float32Array(m*v*g),M=new Float32Array(h*v*g);for(let D=0;D<g;D++){const T=D%3*2/3-1,F=D>2?0:-1,S=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];E.set(S,_*v*D),b.set(p,m*v*D);const A=[D,D,D,D,D,D];M.set(A,h*v*D)}const w=new Ni;w.setAttribute("position",new Qn(E,_)),w.setAttribute("uv",new Qn(b,m)),w.setAttribute("faceIndex",new Qn(M,h)),e.push(w),r>qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vu(n,e,t){const i=new Di(n,e,t);return i.texture.mapping=$s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ab(n,e,t){const i=new Float32Array(cr),r=new z(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function _u(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function xu(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function Rb(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Vs||l===cl,u=l===oa||l===la;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new gu(n)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new gu(n));const p=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Cb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pb(n,e,t,i){const r={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const _=p.morphAttributes[v];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}p.removeEventListener("dispose",o),delete r[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)e.update(p[v],n.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const _=g[v];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,v=f.attributes.position;let _=0;if(g!==null){const E=g.array;_=g.version;for(let b=0,M=E.length;b<M;b+=3){const w=E[b+0],D=E[b+1],T=E[b+2];p.push(w,D,D,T,T,w)}}else if(v!==void 0){const E=v.array;_=v.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const w=b+0,D=b+1,T=b+2;p.push(w,D,D,T,T,w)}}else return;const m=new(of(p)?gf:mf)(p,1);m.version=_;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function u(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Lb(n,e,t,i){const r=i.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function u(p,g){n.drawElements(a,g,s,p*l),t.update(g,a,1)}function f(p,g,v){if(v===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](a,g,s,p*l,v),t.update(g,a,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Db(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ib(n,e){return n[0]-e[0]}function Ub(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Nb(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new Rt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let m=a.get(u);if(m===void 0||m.count!==_){let J=function(){W.dispose(),a.delete(u),u.removeEventListener("dispose",J)};var g=J;m!==void 0&&m.texture.dispose();const b=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let S=0;b===!0&&(S=1),M===!0&&(S=2),w===!0&&(S=3);let A=u.attributes.position.count*S,ie=1;A>e.maxTextureSize&&(ie=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const fe=new Float32Array(A*ie*4*_),W=new uf(fe,A,ie,_);W.type=wi,W.needsUpdate=!0;const Q=S*4;for(let X=0;X<_;X++){const k=D[X],ee=T[X],ce=F[X],he=A*ie*4*X;for(let q=0;q<k.count;q++){const K=q*Q;b===!0&&(o.fromBufferAttribute(k,q),fe[he+K+0]=o.x,fe[he+K+1]=o.y,fe[he+K+2]=o.z,fe[he+K+3]=0),M===!0&&(o.fromBufferAttribute(ee,q),fe[he+K+4]=o.x,fe[he+K+5]=o.y,fe[he+K+6]=o.z,fe[he+K+7]=0),w===!0&&(o.fromBufferAttribute(ce,q),fe[he+K+8]=o.x,fe[he+K+9]=o.y,fe[he+K+10]=o.z,fe[he+K+11]=ce.itemSize===4?o.w:1)}}m={count:_,texture:W,size:new Qe(A,ie)},a.set(u,m),u.addEventListener("dispose",J)}let h=0;for(let b=0;b<p.length;b++)h+=p[b];const E=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=p===void 0?0:p.length;let _=i[u.id];if(_===void 0||_.length!==v){_=[];for(let M=0;M<v;M++)_[M]=[M,0];i[u.id]=_}for(let M=0;M<v;M++){const w=_[M];w[0]=M,w[1]=p[M]}_.sort(Ub);for(let M=0;M<8;M++)M<v&&_[M][1]?(s[M][0]=_[M][0],s[M][1]=_[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(Ib);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const w=s[M],D=w[0],T=w[1];D!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+M)!==m[D]&&u.setAttribute("morphTarget"+M,m[D]),h&&u.getAttribute("morphNormal"+M)!==h[D]&&u.setAttribute("morphNormal"+M,h[D]),r[M]=T,E+=T):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),h&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const b=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Ob(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Sf=new cn,Ef=new uf,Tf=new Sv,wf=new bf,bu=[],yu=[],Mu=new Float32Array(16),Su=new Float32Array(9),Eu=new Float32Array(4);function va(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=bu[r];if(a===void 0&&(a=new Float32Array(r),bu[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function no(n,e){let t=yu[e];t===void 0&&(t=new Int32Array(e),yu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function Hb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),Kt(t,i)}}function Gb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,i))return;Su.set(i),n.uniformMatrix3fv(this.addr,!1,Su),Kt(t,i)}}function Vb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(qt(t,i))return;Mu.set(i),n.uniformMatrix4fv(this.addr,!1,Mu),Kt(t,i)}}function Wb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function qb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function Jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function Qb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Sf,r)}function $b(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Tf,r)}function e0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wf,r)}function t0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ef,r)}function n0(n){switch(n){case 5126:return Fb;case 35664:return kb;case 35665:return Bb;case 35666:return zb;case 35674:return Hb;case 35675:return Gb;case 35676:return Vb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return jb;case 35669:case 35673:return Yb;case 5125:return qb;case 36294:return Kb;case 36295:return Zb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}function i0(n,e){n.uniform1fv(this.addr,e)}function r0(n,e){const t=va(e,this.size,2);n.uniform2fv(this.addr,t)}function a0(n,e){const t=va(e,this.size,3);n.uniform3fv(this.addr,t)}function s0(n,e){const t=va(e,this.size,4);n.uniform4fv(this.addr,t)}function o0(n,e){const t=va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function l0(n,e){const t=va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function c0(n,e){const t=va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u0(n,e){n.uniform1iv(this.addr,e)}function d0(n,e){n.uniform2iv(this.addr,e)}function f0(n,e){n.uniform3iv(this.addr,e)}function h0(n,e){n.uniform4iv(this.addr,e)}function p0(n,e){n.uniform1uiv(this.addr,e)}function m0(n,e){n.uniform2uiv(this.addr,e)}function g0(n,e){n.uniform3uiv(this.addr,e)}function v0(n,e){n.uniform4uiv(this.addr,e)}function _0(n,e,t){const i=this.cache,r=e.length,a=no(t,r);qt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sf,a[o])}function x0(n,e,t){const i=this.cache,r=e.length,a=no(t,r);qt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Tf,a[o])}function b0(n,e,t){const i=this.cache,r=e.length,a=no(t,r);qt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wf,a[o])}function y0(n,e,t){const i=this.cache,r=e.length,a=no(t,r);qt(i,a)||(n.uniform1iv(this.addr,a),Kt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ef,a[o])}function M0(n){switch(n){case 5126:return i0;case 35664:return r0;case 35665:return a0;case 35666:return s0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return h0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return y0}}class S0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=n0(t.type)}}class E0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=M0(t.type)}}class T0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Tu(n,e){n.seq.push(e),n.map[e.id]=e}function w0(n,e,t){const i=n.name,r=i.length;for(Vo.lastIndex=0;;){const a=Vo.exec(i),o=Vo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Tu(t,c===void 0?new S0(s,n,e):new E0(s,n,e));break}else{let f=t.map[s];f===void 0&&(f=new T0(s),Tu(t,f)),t=f}}}class Ns{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);w0(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function wu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let A0=0;function R0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function C0(n){switch(n){case fi:return["Linear","( value )"];case At:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Au(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+R0(n.getShaderSource(e),o)}else return r}function P0(n,e){const t=C0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function L0(n,e){let t;switch(e){case kg:t="Linear";break;case Bg:t="Reinhard";break;case zg:t="OptimizedCineon";break;case Hg:t="ACESFilmic";break;case Gg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function D0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ia).join(`
`)}function I0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function U0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Ia(n){return n!==""}function Ru(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(N0,F0)}const O0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F0(n,e){let t=lt[e];if(t===void 0){const i=O0.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(n){return n.replace(k0,B0)}function B0(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Lu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function H0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case oa:case la:e="ENVMAP_TYPE_CUBE";break;case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===la&&(e="ENVMAP_MODE_REFRACTION"),e}function V0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zd:e="ENVMAP_BLENDING_MULTIPLY";break;case Og:e="ENVMAP_BLENDING_MIX";break;case Fg:e="ENVMAP_BLENDING_ADD";break}return e}function W0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function X0(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=z0(t),c=H0(t),u=G0(t),f=V0(t),p=W0(t),g=t.isWebGL2?"":D0(t),v=I0(a),_=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ia).join(`
`),m.length>0&&(m+=`
`),h=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ia).join(`
`),h.length>0&&(h+=`
`)):(m=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),h=[g,Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?lt.tonemapping_pars_fragment:"",t.toneMapping!==ji?L0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),o=gl(o),o=Ru(o,t),o=Cu(o,t),s=gl(s),s=Ru(s,t),s=Cu(s,t),o=Pu(o),s=Pu(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=E+m+o,M=E+h+s,w=wu(r,r.VERTEX_SHADER,b),D=wu(r,r.FRAGMENT_SHADER,M);if(r.attachShader(_,w),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(w).trim(),ie=r.getShaderInfoLog(D).trim();let fe=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,D);else{const Q=Au(r,w,"vertex"),J=Au(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+Q+`
`+J)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||ie==="")&&(W=!1);W&&(this.diagnostics={runnable:fe,programLog:S,vertexShader:{log:A,prefix:m},fragmentShader:{log:ie,prefix:h}})}r.deleteShader(w),r.deleteShader(D);let T;this.getUniforms=function(){return T===void 0&&(T=new Ns(r,_)),T};let F;return this.getAttributes=function(){return F===void 0&&(F=U0(r,_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=D,this}let j0=0;class Y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new q0(e),t.set(e,i)),i}}class q0{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}}function K0(n,e,t,i,r,a,o){const s=new ff,l=new Y0,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,A,ie,fe,W){const Q=fe.fog,J=W.geometry,X=S.isMeshStandardMaterial?fe.environment:null,k=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),ee=k&&k.mapping===$s?k.image.height:null,ce=v[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,q=he!==void 0?he.length:0;let K=0;J.morphAttributes.position!==void 0&&(K=1),J.morphAttributes.normal!==void 0&&(K=2),J.morphAttributes.color!==void 0&&(K=3);let Re,Pe,Oe,Fe;if(ce){const de=ai[ce];Re=de.vertexShader,Pe=de.fragmentShader}else Re=S.vertexShader,Pe=S.fragmentShader,l.update(S),Oe=l.getVertexShaderID(S),Fe=l.getFragmentShaderID(S);const We=n.getRenderTarget(),Ge=W.isInstancedMesh===!0,$=!!S.map,Le=!!S.matcap,Ce=!!k,U=!!S.aoMap,Te=!!S.lightMap,Se=!!S.bumpMap,O=!!S.normalMap,G=!!S.displacementMap,we=!!S.emissiveMap,Ee=!!S.metalnessMap,Ue=!!S.roughnessMap,Me=S.anisotropy>0,Xe=S.clearcoat>0,Ve=S.iridescence>0,R=S.sheen>0,x=S.transmission>0,N=Me&&!!S.anisotropyMap,ae=Xe&&!!S.clearcoatMap,se=Xe&&!!S.clearcoatNormalMap,pe=Xe&&!!S.clearcoatRoughnessMap,ke=Ve&&!!S.iridescenceMap,ye=Ve&&!!S.iridescenceThicknessMap,Y=R&&!!S.sheenColorMap,L=R&&!!S.sheenRoughnessMap,te=!!S.specularMap,ne=!!S.specularColorMap,xe=!!S.specularIntensityMap,De=x&&!!S.transmissionMap,Ye=x&&!!S.thicknessMap,qe=!!S.gradientMap,I=!!S.alphaMap,Ie=S.alphaTest>0,H=!!S.alphaHash,ge=!!S.extensions,Ne=!!J.attributes.uv1,it=!!J.attributes.uv2,at=!!J.attributes.uv3;let pt=ji;return S.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(pt=n.toneMapping),{isWebGL2:u,shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:Re,fragmentShader:Pe,defines:S.defines,customVertexShaderID:Oe,customFragmentShaderID:Fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:Ge,instancingColor:Ge&&W.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:We===null?n.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:fi,map:$,matcap:Le,envMap:Ce,envMapMode:Ce&&k.mapping,envMapCubeUVHeight:ee,aoMap:U,lightMap:Te,bumpMap:Se,normalMap:O,displacementMap:p&&G,emissiveMap:we,normalMapObjectSpace:O&&S.normalMapType===tv,normalMapTangentSpace:O&&S.normalMapType===sf,metalnessMap:Ee,roughnessMap:Ue,anisotropy:Me,anisotropyMap:N,clearcoat:Xe,clearcoatMap:ae,clearcoatNormalMap:se,clearcoatRoughnessMap:pe,iridescence:Ve,iridescenceMap:ke,iridescenceThicknessMap:ye,sheen:R,sheenColorMap:Y,sheenRoughnessMap:L,specularMap:te,specularColorMap:ne,specularIntensityMap:xe,transmission:x,transmissionMap:De,thicknessMap:Ye,gradientMap:qe,opaque:S.transparent===!1&&S.blending===ea,alphaMap:I,alphaTest:Ie,alphaHash:H,combine:S.combine,mapUv:$&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Te&&_(S.lightMap.channel),bumpMapUv:Se&&_(S.bumpMap.channel),normalMapUv:O&&_(S.normalMap.channel),displacementMapUv:G&&_(S.displacementMap.channel),emissiveMapUv:we&&_(S.emissiveMap.channel),metalnessMapUv:Ee&&_(S.metalnessMap.channel),roughnessMapUv:Ue&&_(S.roughnessMap.channel),anisotropyMapUv:N&&_(S.anisotropyMap.channel),clearcoatMapUv:ae&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:L&&_(S.sheenRoughnessMap.channel),specularMapUv:te&&_(S.specularMap.channel),specularColorMapUv:ne&&_(S.specularColorMap.channel),specularIntensityMapUv:xe&&_(S.specularIntensityMap.channel),transmissionMapUv:De&&_(S.transmissionMap.channel),thicknessMapUv:Ye&&_(S.thicknessMap.channel),alphaMapUv:I&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(O||Me),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:it,vertexUv3s:at,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&($||I),fog:!!Q,useFog:S.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:K,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&ie.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:$&&S.map.isVideoTexture===!0&&S.map.colorSpace===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===kn,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ge&&S.extensions.derivatives===!0,extensionFragDepth:ge&&S.extensions.fragDepth===!0,extensionDrawBuffers:ge&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const ie in S.defines)A.push(ie),A.push(S.defines[ie]);return S.isRawShaderMaterial===!1&&(E(A,S),b(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function E(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function b(S,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),S.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function M(S){const A=v[S.type];let ie;if(A){const fe=ai[A];ie=_f.clone(fe.uniforms)}else ie=S.uniforms;return ie}function w(S,A){let ie;for(let fe=0,W=c.length;fe<W;fe++){const Q=c[fe];if(Q.cacheKey===A){ie=Q,++ie.usedTimes;break}}return ie===void 0&&(ie=new X0(n,A,S,a),c.push(ie)),ie}function D(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:w,releaseProgram:D,releaseShaderCache:T,programs:c,dispose:F}}function Z0(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function J0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Iu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(f,p,g,v,_,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:g,groupOrder:v,renderOrder:f.renderOrder,z:_,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=g,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function s(f,p,g,v,_,m){const h=o(f,p,g,v,_,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):t.push(h)}function l(f,p,g,v,_,m){const h=o(f,p,g,v,_,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,p){t.length>1&&t.sort(f||J0),i.length>1&&i.sort(p||Du),r.length>1&&r.sort(p||Du)}function u(){for(let f=e,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function Q0(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new Iu,n.set(i,[o])):r>=a.length?(o=new Iu,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new xt};break;case"SpotLight":t={position:new z,direction:new z,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function ey(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ty=0;function ny(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iy(n,e){const t=new $0,i=ey(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new z);const a=new z,o=new kt,s=new kt;function l(u,f){let p=0,g=0,v=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let _=0,m=0,h=0,E=0,b=0,M=0,w=0,D=0,T=0,F=0;u.sort(ny);const S=f===!0?Math.PI:1;for(let ie=0,fe=u.length;ie<fe;ie++){const W=u[ie],Q=W.color,J=W.intensity,X=W.distance,k=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)p+=Q.r*J*S,g+=Q.g*J*S,v+=Q.b*J*S;else if(W.isLightProbe)for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(W.sh.coefficients[ee],J);else if(W.isDirectionalLight){const ee=t.get(W);if(ee.color.copy(W.color).multiplyScalar(W.intensity*S),W.castShadow){const ce=W.shadow,he=i.get(W);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,r.directionalShadow[_]=he,r.directionalShadowMap[_]=k,r.directionalShadowMatrix[_]=W.shadow.matrix,M++}r.directional[_]=ee,_++}else if(W.isSpotLight){const ee=t.get(W);ee.position.setFromMatrixPosition(W.matrixWorld),ee.color.copy(Q).multiplyScalar(J*S),ee.distance=X,ee.coneCos=Math.cos(W.angle),ee.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),ee.decay=W.decay,r.spot[h]=ee;const ce=W.shadow;if(W.map&&(r.spotLightMap[T]=W.map,T++,ce.updateMatrices(W),W.castShadow&&F++),r.spotLightMatrix[h]=ce.matrix,W.castShadow){const he=i.get(W);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,r.spotShadow[h]=he,r.spotShadowMap[h]=k,D++}h++}else if(W.isRectAreaLight){const ee=t.get(W);ee.color.copy(Q).multiplyScalar(J),ee.halfWidth.set(W.width*.5,0,0),ee.halfHeight.set(0,W.height*.5,0),r.rectArea[E]=ee,E++}else if(W.isPointLight){const ee=t.get(W);if(ee.color.copy(W.color).multiplyScalar(W.intensity*S),ee.distance=W.distance,ee.decay=W.decay,W.castShadow){const ce=W.shadow,he=i.get(W);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,r.pointShadow[m]=he,r.pointShadowMap[m]=k,r.pointShadowMatrix[m]=W.shadow.matrix,w++}r.point[m]=ee,m++}else if(W.isHemisphereLight){const ee=t.get(W);ee.skyColor.copy(W.color).multiplyScalar(J*S),ee.groundColor.copy(W.groundColor).multiplyScalar(J*S),r.hemi[b]=ee,b++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==_||A.pointLength!==m||A.spotLength!==h||A.rectAreaLength!==E||A.hemiLength!==b||A.numDirectionalShadows!==M||A.numPointShadows!==w||A.numSpotShadows!==D||A.numSpotMaps!==T)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=E,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=D+T-F,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=F,A.directionalLength=_,A.pointLength=m,A.spotLength=h,A.rectAreaLength=E,A.hemiLength=b,A.numDirectionalShadows=M,A.numPointShadows=w,A.numSpotShadows=D,A.numSpotMaps=T,r.version=ty++)}function c(u,f){let p=0,g=0,v=0,_=0,m=0;const h=f.matrixWorldInverse;for(let E=0,b=u.length;E<b;E++){const M=u[E];if(M.isDirectionalLight){const w=r.directional[p];w.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),p++}else if(M.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(h),v++}else if(M.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(h),s.identity(),o.copy(M.matrixWorld),o.premultiply(h),s.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),_++}else if(M.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(h),g++}else if(M.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Uu(n,e){const t=new iy(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function ry(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Uu(n,e),t.set(a,[l])):o>=s.length?(l=new Uu(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ay extends ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sy extends ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
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
}`;function cy(n,e,t){let i=new Fl;const r=new Qe,a=new Qe,o=new Rt,s=new ay({depthPacking:ev}),l=new sy,c={},u=t.maxTextureSize,f={[di]:Mn,[Mn]:di,[kn]:kn},p=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:oy,fragmentShader:ly}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new Ni;v.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new yt(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yd;let h=this.type;this.render=function(w,D,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const F=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(Ci),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const fe=h!==yi&&this.type===yi,W=h===yi&&this.type!==yi;for(let Q=0,J=w.length;Q<J;Q++){const X=w[Q],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ee=k.getFrameExtents();if(r.multiply(ee),a.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ee.x),r.x=a.x*ee.x,k.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ee.y),r.y=a.y*ee.y,k.mapSize.y=a.y)),k.map===null||fe===!0||W===!0){const he=this.type!==yi?{minFilter:Dt,magFilter:Dt}:{};k.map!==null&&k.map.dispose(),k.map=new Di(r.x,r.y,he),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ce=k.getViewportCount();for(let he=0;he<ce;he++){const q=k.getViewport(he);o.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),ie.viewport(o),k.updateMatrices(X,he),i=k.getFrustum(),M(D,T,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===yi&&E(k,T),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(F,S,A)};function E(w,D){const T=e.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Di(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(D,null,T,p,_,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(D,null,T,g,_,null)}function b(w,D,T,F){let S=null;const A=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?l:s,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ie=S.uuid,fe=D.uuid;let W=c[ie];W===void 0&&(W={},c[ie]=W);let Q=W[fe];Q===void 0&&(Q=S.clone(),W[fe]=Q),S=Q}if(S.visible=D.visible,S.wireframe=D.wireframe,F===yi?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ie=n.properties.get(S);ie.light=T}return S}function M(w,D,T,F,S){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const fe=e.update(w),W=w.material;if(Array.isArray(W)){const Q=fe.groups;for(let J=0,X=Q.length;J<X;J++){const k=Q[J],ee=W[k.materialIndex];if(ee&&ee.visible){const ce=b(w,ee,F,S);n.renderBufferDirect(T,null,fe,ce,w,k)}}}else if(W.visible){const Q=b(w,W,F,S);n.renderBufferDirect(T,null,fe,Q,w,null)}}const ie=w.children;for(let fe=0,W=ie.length;fe<W;fe++)M(ie[fe],D,T,F,S)}}function uy(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const Ie=new Rt;let H=null;const ge=new Rt(0,0,0,0);return{setMask:function(Ne){H!==Ne&&!I&&(n.colorMask(Ne,Ne,Ne,Ne),H=Ne)},setLocked:function(Ne){I=Ne},setClear:function(Ne,it,at,pt,Bt){Bt===!0&&(Ne*=pt,it*=pt,at*=pt),Ie.set(Ne,it,at,pt),ge.equals(Ie)===!1&&(n.clearColor(Ne,it,at,pt),ge.copy(Ie))},reset:function(){I=!1,H=null,ge.set(-1,0,0,0)}}}function a(){let I=!1,Ie=null,H=null,ge=null;return{setTest:function(Ne){Ne?We(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(Ne){Ie!==Ne&&!I&&(n.depthMask(Ne),Ie=Ne)},setFunc:function(Ne){if(H!==Ne){switch(Ne){case Cg:n.depthFunc(n.NEVER);break;case Pg:n.depthFunc(n.ALWAYS);break;case Lg:n.depthFunc(n.LESS);break;case ll:n.depthFunc(n.LEQUAL);break;case Dg:n.depthFunc(n.EQUAL);break;case Ig:n.depthFunc(n.GEQUAL);break;case Ug:n.depthFunc(n.GREATER);break;case Ng:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}H=Ne}},setLocked:function(Ne){I=Ne},setClear:function(Ne){ge!==Ne&&(n.clearDepth(Ne),ge=Ne)},reset:function(){I=!1,Ie=null,H=null,ge=null}}}function o(){let I=!1,Ie=null,H=null,ge=null,Ne=null,it=null,at=null,pt=null,Bt=null;return{setTest:function(de){I||(de?We(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(de){Ie!==de&&!I&&(n.stencilMask(de),Ie=de)},setFunc:function(de,Be,Ze){(H!==de||ge!==Be||Ne!==Ze)&&(n.stencilFunc(de,Be,Ze),H=de,ge=Be,Ne=Ze)},setOp:function(de,Be,Ze){(it!==de||at!==Be||pt!==Ze)&&(n.stencilOp(de,Be,Ze),it=de,at=Be,pt=Ze)},setLocked:function(de){I=de},setClear:function(de){Bt!==de&&(n.clearStencil(de),Bt=de)},reset:function(){I=!1,Ie=null,H=null,ge=null,Ne=null,it=null,at=null,pt=null,Bt=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let p={},g={},v=new WeakMap,_=[],m=null,h=!1,E=null,b=null,M=null,w=null,D=null,T=null,F=null,S=!1,A=null,ie=null,fe=null,W=null,Q=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,k=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ee)[1]),X=k>=1):ee.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),X=k>=2);let ce=null,he={};const q=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),Re=new Rt().fromArray(q),Pe=new Rt().fromArray(K);function Oe(I,Ie,H,ge){const Ne=new Uint8Array(4),it=n.createTexture();n.bindTexture(I,it),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<H;at++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ie,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Ie+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return it}const Fe={};Fe[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),We(n.DEPTH_TEST),l.setFunc(ll),G(!1),we(xc),We(n.CULL_FACE),Se(Ci);function We(I){p[I]!==!0&&(n.enable(I),p[I]=!0)}function Ge(I){p[I]!==!1&&(n.disable(I),p[I]=!1)}function $(I,Ie){return g[I]!==Ie?(n.bindFramebuffer(I,Ie),g[I]=Ie,i&&(I===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ie),I===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ie)),!0):!1}function Le(I,Ie){let H=_,ge=!1;if(I)if(H=v.get(Ie),H===void 0&&(H=[],v.set(Ie,H)),I.isWebGLMultipleRenderTargets){const Ne=I.texture;if(H.length!==Ne.length||H[0]!==n.COLOR_ATTACHMENT0){for(let it=0,at=Ne.length;it<at;it++)H[it]=n.COLOR_ATTACHMENT0+it;H.length=Ne.length,ge=!0}}else H[0]!==n.COLOR_ATTACHMENT0&&(H[0]=n.COLOR_ATTACHMENT0,ge=!0);else H[0]!==n.BACK&&(H[0]=n.BACK,ge=!0);ge&&(t.isWebGL2?n.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function Ce(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const U={[Yr]:n.FUNC_ADD,[_g]:n.FUNC_SUBTRACT,[xg]:n.FUNC_REVERSE_SUBTRACT};if(i)U[Sc]=n.MIN,U[Ec]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(U[Sc]=I.MIN_EXT,U[Ec]=I.MAX_EXT)}const Te={[bg]:n.ZERO,[yg]:n.ONE,[Mg]:n.SRC_COLOR,[qd]:n.SRC_ALPHA,[Rg]:n.SRC_ALPHA_SATURATE,[wg]:n.DST_COLOR,[Eg]:n.DST_ALPHA,[Sg]:n.ONE_MINUS_SRC_COLOR,[Kd]:n.ONE_MINUS_SRC_ALPHA,[Ag]:n.ONE_MINUS_DST_COLOR,[Tg]:n.ONE_MINUS_DST_ALPHA};function Se(I,Ie,H,ge,Ne,it,at,pt){if(I===Ci){h===!0&&(Ge(n.BLEND),h=!1);return}if(h===!1&&(We(n.BLEND),h=!0),I!==vg){if(I!==E||pt!==S){if((b!==Yr||D!==Yr)&&(n.blendEquation(n.FUNC_ADD),b=Yr,D=Yr),pt)switch(I){case ea:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bc:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,w=null,T=null,F=null,E=I,S=pt}return}Ne=Ne||Ie,it=it||H,at=at||ge,(Ie!==b||Ne!==D)&&(n.blendEquationSeparate(U[Ie],U[Ne]),b=Ie,D=Ne),(H!==M||ge!==w||it!==T||at!==F)&&(n.blendFuncSeparate(Te[H],Te[ge],Te[it],Te[at]),M=H,w=ge,T=it,F=at),E=I,S=!1}function O(I,Ie){I.side===kn?Ge(n.CULL_FACE):We(n.CULL_FACE);let H=I.side===Mn;Ie&&(H=!H),G(H),I.blending===ea&&I.transparent===!1?Se(Ci):Se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;c.setTest(ge),ge&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?We(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(I){A!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),A=I)}function we(I){I!==pg?(We(n.CULL_FACE),I!==ie&&(I===xc?n.cullFace(n.BACK):I===mg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),ie=I}function Ee(I){I!==fe&&(X&&n.lineWidth(I),fe=I)}function Ue(I,Ie,H){I?(We(n.POLYGON_OFFSET_FILL),(W!==Ie||Q!==H)&&(n.polygonOffset(Ie,H),W=Ie,Q=H)):Ge(n.POLYGON_OFFSET_FILL)}function Me(I){I?We(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function Xe(I){I===void 0&&(I=n.TEXTURE0+J-1),ce!==I&&(n.activeTexture(I),ce=I)}function Ve(I,Ie,H){H===void 0&&(ce===null?H=n.TEXTURE0+J-1:H=ce);let ge=he[H];ge===void 0&&(ge={type:void 0,texture:void 0},he[H]=ge),(ge.type!==I||ge.texture!==Ie)&&(ce!==H&&(n.activeTexture(H),ce=H),n.bindTexture(I,Ie||Fe[I]),ge.type=I,ge.texture=Ie)}function R(){const I=he[ce];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(I){Re.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Re.copy(I))}function xe(I){Pe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Pe.copy(I))}function De(I,Ie){let H=f.get(Ie);H===void 0&&(H=new WeakMap,f.set(Ie,H));let ge=H.get(I);ge===void 0&&(ge=n.getUniformBlockIndex(Ie,I.name),H.set(I,ge))}function Ye(I,Ie){const ge=f.get(Ie).get(I);u.get(Ie)!==ge&&(n.uniformBlockBinding(Ie,ge,I.__bindingPointIndex),u.set(Ie,ge))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ce=null,he={},g={},v=new WeakMap,_=[],m=null,h=!1,E=null,b=null,M=null,w=null,D=null,T=null,F=null,S=!1,A=null,ie=null,fe=null,W=null,Q=null,Re.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:We,disable:Ge,bindFramebuffer:$,drawBuffers:Le,useProgram:Ce,setBlending:Se,setMaterial:O,setFlipSided:G,setCullFace:we,setLineWidth:Ee,setPolygonOffset:Ue,setScissorTest:Me,activeTexture:Xe,bindTexture:Ve,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:L,texImage3D:te,updateUBOMapping:De,uniformBlockBinding:Ye,texStorage2D:ye,texStorage3D:Y,texSubImage2D:ae,texSubImage3D:se,compressedTexSubImage2D:pe,compressedTexSubImage3D:ke,scissor:ne,viewport:xe,reset:qe}}function dy(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,x){return h?new OffscreenCanvas(R,x):Xs("canvas")}function b(R,x,N,ae){let se=1;if((R.width>ae||R.height>ae)&&(se=ae/Math.max(R.width,R.height)),se<1||x===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const pe=x?ml:Math.floor,ke=pe(se*R.width),ye=pe(se*R.height);_===void 0&&(_=E(ke,ye));const Y=N?E(ke,ye):_;return Y.width=ke,Y.height=ye,Y.getContext("2d").drawImage(R,0,0,ke,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ke+"x"+ye+")."),Y}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return Qc(R.width)&&Qc(R.height)}function w(R){return s?!1:R.wrapS!==Xn||R.wrapT!==Xn||R.minFilter!==Dt&&R.minFilter!==On}function D(R,x){return R.generateMipmaps&&x&&R.minFilter!==Dt&&R.minFilter!==On}function T(R){n.generateMipmap(R)}function F(R,x,N,ae,se=!1){if(s===!1)return x;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe=x;return x===n.RED&&(N===n.FLOAT&&(pe=n.R32F),N===n.HALF_FLOAT&&(pe=n.R16F),N===n.UNSIGNED_BYTE&&(pe=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(pe=n.R8UI),N===n.UNSIGNED_SHORT&&(pe=n.R16UI),N===n.UNSIGNED_INT&&(pe=n.R32UI),N===n.BYTE&&(pe=n.R8I),N===n.SHORT&&(pe=n.R16I),N===n.INT&&(pe=n.R32I)),x===n.RG&&(N===n.FLOAT&&(pe=n.RG32F),N===n.HALF_FLOAT&&(pe=n.RG16F),N===n.UNSIGNED_BYTE&&(pe=n.RG8)),x===n.RGBA&&(N===n.FLOAT&&(pe=n.RGBA32F),N===n.HALF_FLOAT&&(pe=n.RGBA16F),N===n.UNSIGNED_BYTE&&(pe=ae===At&&se===!1?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)),(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function S(R,x,N){return D(R,N)===!0||R.isFramebufferTexture&&R.minFilter!==Dt&&R.minFilter!==On?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){return R===Dt||R===Tc||R===go?n.NEAREST:n.LINEAR}function ie(R){const x=R.target;x.removeEventListener("dispose",ie),W(x),x.isVideoTexture&&v.delete(x)}function fe(R){const x=R.target;x.removeEventListener("dispose",fe),J(x)}function W(R){const x=i.get(R);if(x.__webglInit===void 0)return;const N=R.source,ae=m.get(N);if(ae){const se=ae[x.__cacheKey];se.usedTimes--,se.usedTimes===0&&Q(R),Object.keys(ae).length===0&&m.delete(N)}i.remove(R)}function Q(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const N=R.source,ae=m.get(N);delete ae[x.__cacheKey],o.memory.textures--}function J(R){const x=R.texture,N=i.get(R),ae=i.get(x);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(N.__webglFramebuffer[se]))for(let pe=0;pe<N.__webglFramebuffer[se].length;pe++)n.deleteFramebuffer(N.__webglFramebuffer[se][pe]);else n.deleteFramebuffer(N.__webglFramebuffer[se]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[se])}else{if(Array.isArray(N.__webglFramebuffer))for(let se=0;se<N.__webglFramebuffer.length;se++)n.deleteFramebuffer(N.__webglFramebuffer[se]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let se=0;se<N.__webglColorRenderbuffer.length;se++)N.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[se]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let se=0,pe=x.length;se<pe;se++){const ke=i.get(x[se]);ke.__webglTexture&&(n.deleteTexture(ke.__webglTexture),o.memory.textures--),i.remove(x[se])}i.remove(x),i.remove(R)}let X=0;function k(){X=0}function ee(){const R=X;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),X+=1,R}function ce(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function he(R,x){const N=i.get(R);if(R.isVideoTexture&&Xe(R),R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){const ae=R.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,R,x);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function q(R,x){const N=i.get(R);if(R.version>0&&N.__version!==R.version){$(N,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function K(R,x){const N=i.get(R);if(R.version>0&&N.__version!==R.version){$(N,R,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function Re(R,x){const N=i.get(R);if(R.version>0&&N.__version!==R.version){Le(N,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const Pe={[ul]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},Oe={[Dt]:n.NEAREST,[Tc]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[Vg]:n.LINEAR_MIPMAP_NEAREST,[Ya]:n.LINEAR_MIPMAP_LINEAR},Fe={[iv]:n.NEVER,[uv]:n.ALWAYS,[rv]:n.LESS,[sv]:n.LEQUAL,[av]:n.EQUAL,[cv]:n.GEQUAL,[ov]:n.GREATER,[lv]:n.NOTEQUAL};function We(R,x,N){if(N?(n.texParameteri(R,n.TEXTURE_WRAP_S,Pe[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Pe[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Pe[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Oe[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Oe[x.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Xn||x.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,A(x.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Dt&&x.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Dt||x.minFilter!==go&&x.minFilter!==Ya||x.type===wi&&e.has("OES_texture_float_linear")===!1||s===!1&&x.type===ca&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Ge(R,x){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",ie));const ae=x.source;let se=m.get(ae);se===void 0&&(se={},m.set(ae,se));const pe=ce(x);if(pe!==R.__cacheKey){se[pe]===void 0&&(se[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),se[pe].usedTimes++;const ke=se[R.__cacheKey];ke!==void 0&&(se[R.__cacheKey].usedTimes--,ke.usedTimes===0&&Q(x)),R.__cacheKey=pe,R.__webglTexture=se[pe].texture}return N}function $(R,x,N){let ae=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ae=n.TEXTURE_3D);const se=Ge(R,x),pe=x.source;t.bindTexture(ae,R.__webglTexture,n.TEXTURE0+N);const ke=i.get(pe);if(pe.version!==ke.__version||se===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ye=w(x)&&M(x.image)===!1;let Y=b(x.image,ye,!1,u);Y=Ve(x,Y);const L=M(Y)||s,te=a.convert(x.format,x.colorSpace);let ne=a.convert(x.type),xe=F(x.internalFormat,te,ne,x.colorSpace,x.isVideoTexture);We(ae,x,L);let De;const Ye=x.mipmaps,qe=s&&x.isVideoTexture!==!0,I=ke.__version===void 0||se===!0,Ie=S(x,Y,L);if(x.isDepthTexture)xe=n.DEPTH_COMPONENT,s?x.type===wi?xe=n.DEPTH_COMPONENT32F:x.type===Wi?xe=n.DEPTH_COMPONENT24:x.type===gr?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:x.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===vr&&xe===n.DEPTH_COMPONENT&&x.type!==Nl&&x.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Wi,ne=a.convert(x.type)),x.format===ua&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,x.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=gr,ne=a.convert(x.type))),I&&(qe?t.texStorage2D(n.TEXTURE_2D,1,xe,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,xe,Y.width,Y.height,0,te,ne,null));else if(x.isDataTexture)if(Ye.length>0&&L){qe&&I&&t.texStorage2D(n.TEXTURE_2D,Ie,xe,Ye[0].width,Ye[0].height);for(let H=0,ge=Ye.length;H<ge;H++)De=Ye[H],qe?t.texSubImage2D(n.TEXTURE_2D,H,0,0,De.width,De.height,te,ne,De.data):t.texImage2D(n.TEXTURE_2D,H,xe,De.width,De.height,0,te,ne,De.data);x.generateMipmaps=!1}else qe?(I&&t.texStorage2D(n.TEXTURE_2D,Ie,xe,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,te,ne,Y.data)):t.texImage2D(n.TEXTURE_2D,0,xe,Y.width,Y.height,0,te,ne,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qe&&I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,xe,Ye[0].width,Ye[0].height,Y.depth);for(let H=0,ge=Ye.length;H<ge;H++)De=Ye[H],x.format!==jn?te!==null?qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,De.width,De.height,Y.depth,te,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,xe,De.width,De.height,Y.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,De.width,De.height,Y.depth,te,ne,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,xe,De.width,De.height,Y.depth,0,te,ne,De.data)}else{qe&&I&&t.texStorage2D(n.TEXTURE_2D,Ie,xe,Ye[0].width,Ye[0].height);for(let H=0,ge=Ye.length;H<ge;H++)De=Ye[H],x.format!==jn?te!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,De.width,De.height,te,De.data):t.compressedTexImage2D(n.TEXTURE_2D,H,xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(n.TEXTURE_2D,H,0,0,De.width,De.height,te,ne,De.data):t.texImage2D(n.TEXTURE_2D,H,xe,De.width,De.height,0,te,ne,De.data)}else if(x.isDataArrayTexture)qe?(I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,xe,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,te,ne,Y.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,Y.width,Y.height,Y.depth,0,te,ne,Y.data);else if(x.isData3DTexture)qe?(I&&t.texStorage3D(n.TEXTURE_3D,Ie,xe,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,te,ne,Y.data)):t.texImage3D(n.TEXTURE_3D,0,xe,Y.width,Y.height,Y.depth,0,te,ne,Y.data);else if(x.isFramebufferTexture){if(I)if(qe)t.texStorage2D(n.TEXTURE_2D,Ie,xe,Y.width,Y.height);else{let H=Y.width,ge=Y.height;for(let Ne=0;Ne<Ie;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,xe,H,ge,0,te,ne,null),H>>=1,ge>>=1}}else if(Ye.length>0&&L){qe&&I&&t.texStorage2D(n.TEXTURE_2D,Ie,xe,Ye[0].width,Ye[0].height);for(let H=0,ge=Ye.length;H<ge;H++)De=Ye[H],qe?t.texSubImage2D(n.TEXTURE_2D,H,0,0,te,ne,De):t.texImage2D(n.TEXTURE_2D,H,xe,te,ne,De);x.generateMipmaps=!1}else qe?(I&&t.texStorage2D(n.TEXTURE_2D,Ie,xe,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,ne,Y)):t.texImage2D(n.TEXTURE_2D,0,xe,te,ne,Y);D(x,L)&&T(ae),ke.__version=pe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Le(R,x,N){if(x.image.length!==6)return;const ae=Ge(R,x),se=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+N);const pe=i.get(se);if(se.version!==pe.__version||ae===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ke=x.isCompressedTexture||x.image[0].isCompressedTexture,ye=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let H=0;H<6;H++)!ke&&!ye?Y[H]=b(x.image[H],!1,!0,c):Y[H]=ye?x.image[H].image:x.image[H],Y[H]=Ve(x,Y[H]);const L=Y[0],te=M(L)||s,ne=a.convert(x.format,x.colorSpace),xe=a.convert(x.type),De=F(x.internalFormat,ne,xe,x.colorSpace),Ye=s&&x.isVideoTexture!==!0,qe=pe.__version===void 0||ae===!0;let I=S(x,L,te);We(n.TEXTURE_CUBE_MAP,x,te);let Ie;if(ke){Ye&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,De,L.width,L.height);for(let H=0;H<6;H++){Ie=Y[H].mipmaps;for(let ge=0;ge<Ie.length;ge++){const Ne=Ie[ge];x.format!==jn?ne!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge,0,0,Ne.width,Ne.height,ne,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge,De,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge,0,0,Ne.width,Ne.height,ne,xe,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge,De,Ne.width,Ne.height,0,ne,xe,Ne.data)}}}else{Ie=x.mipmaps,Ye&&qe&&(Ie.length>0&&I++,t.texStorage2D(n.TEXTURE_CUBE_MAP,I,De,Y[0].width,Y[0].height));for(let H=0;H<6;H++)if(ye){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Y[H].width,Y[H].height,ne,xe,Y[H].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,De,Y[H].width,Y[H].height,0,ne,xe,Y[H].data);for(let ge=0;ge<Ie.length;ge++){const it=Ie[ge].image[H].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge+1,0,0,it.width,it.height,ne,xe,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge+1,De,it.width,it.height,0,ne,xe,it.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,ne,xe,Y[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,De,ne,xe,Y[H]);for(let ge=0;ge<Ie.length;ge++){const Ne=Ie[ge];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge+1,0,0,ne,xe,Ne.image[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge+1,De,ne,xe,Ne.image[H])}}}D(x,te)&&T(n.TEXTURE_CUBE_MAP),pe.__version=se.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ce(R,x,N,ae,se,pe){const ke=a.convert(N.format,N.colorSpace),ye=a.convert(N.type),Y=F(N.internalFormat,ke,ye,N.colorSpace);if(!i.get(x).__hasExternalTextures){const te=Math.max(1,x.width>>pe),ne=Math.max(1,x.height>>pe);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,pe,Y,te,ne,x.depth,0,ke,ye,null):t.texImage2D(se,pe,Y,te,ne,0,ke,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Me(x)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,se,i.get(N).__webglTexture,0,Ue(x)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,se,i.get(N).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(R,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer&&!x.stencilBuffer){let ae=n.DEPTH_COMPONENT16;if(N||Me(x)){const se=x.depthTexture;se&&se.isDepthTexture&&(se.type===wi?ae=n.DEPTH_COMPONENT32F:se.type===Wi&&(ae=n.DEPTH_COMPONENT24));const pe=Ue(x);Me(x)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ae,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ae,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(x.depthBuffer&&x.stencilBuffer){const ae=Ue(x);N&&Me(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,x.width,x.height):Me(x)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ae=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let se=0;se<ae.length;se++){const pe=ae[se],ke=a.convert(pe.format,pe.colorSpace),ye=a.convert(pe.type),Y=F(pe.internalFormat,ke,ye,pe.colorSpace),L=Ue(x);N&&Me(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,Y,x.width,x.height):Me(x)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),he(x.depthTexture,0);const ae=i.get(x.depthTexture).__webglTexture,se=Ue(x);if(x.depthTexture.format===vr)Me(x)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(x.depthTexture.format===ua)Me(x)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Se(R){const x=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Te(x.__webglFramebuffer,R)}else if(N){x.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ae]),x.__webglDepthbuffer[ae]=n.createRenderbuffer(),U(x.__webglDepthbuffer[ae],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),U(x.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(R,x,N){const ae=i.get(R);x!==void 0&&Ce(ae.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Se(R)}function G(R){const x=R.texture,N=i.get(R),ae=i.get(x);R.addEventListener("dispose",fe),R.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=x.version,o.memory.textures++);const se=R.isWebGLCubeRenderTarget===!0,pe=R.isWebGLMultipleRenderTargets===!0,ke=M(R)||s;if(se){N.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(s&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ye]=[];for(let Y=0;Y<x.mipmaps.length;Y++)N.__webglFramebuffer[ye][Y]=n.createFramebuffer()}else N.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(s&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ye=0;ye<x.mipmaps.length;ye++)N.__webglFramebuffer[ye]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(pe)if(r.drawBuffers){const ye=R.texture;for(let Y=0,L=ye.length;Y<L;Y++){const te=i.get(ye[Y]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&R.samples>0&&Me(R)===!1){const ye=pe?x:[x];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<ye.length;Y++){const L=ye[Y];N.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);const te=a.convert(L.format,L.colorSpace),ne=a.convert(L.type),xe=F(L.internalFormat,te,ne,L.colorSpace,R.isXRRenderTarget===!0),De=Ue(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,xe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),U(N.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),We(n.TEXTURE_CUBE_MAP,x,ke);for(let ye=0;ye<6;ye++)if(s&&x.mipmaps&&x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Ce(N.__webglFramebuffer[ye][Y],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Y);else Ce(N.__webglFramebuffer[ye],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);D(x,ke)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){const ye=R.texture;for(let Y=0,L=ye.length;Y<L;Y++){const te=ye[Y],ne=i.get(te);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),We(n.TEXTURE_2D,te,ke),Ce(N.__webglFramebuffer,R,te,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,0),D(te,ke)&&T(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(s?ye=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,ae.__webglTexture),We(ye,x,ke),s&&x.mipmaps&&x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Ce(N.__webglFramebuffer[Y],R,x,n.COLOR_ATTACHMENT0,ye,Y);else Ce(N.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,ye,0);D(x,ke)&&T(ye),t.unbindTexture()}R.depthBuffer&&Se(R)}function we(R){const x=M(R)||s,N=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ae=0,se=N.length;ae<se;ae++){const pe=N[ae];if(D(pe,x)){const ke=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(pe).__webglTexture;t.bindTexture(ke,ye),T(ke),t.unbindTexture()}}}function Ee(R){if(s&&R.samples>0&&Me(R)===!1){const x=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],N=R.width,ae=R.height;let se=n.COLOR_BUFFER_BIT;const pe=[],ke=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(R),Y=R.isWebGLMultipleRenderTargets===!0;if(Y)for(let L=0;L<x.length;L++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let L=0;L<x.length;L++){pe.push(n.COLOR_ATTACHMENT0+L),R.depthBuffer&&pe.push(ke);const te=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(te===!1&&(R.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),Y&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[L]),te===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ke]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ke])),Y){const ne=i.get(x[L]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,N,ae,0,0,N,ae,se,n.NEAREST),g&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let L=0;L<x.length;L++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,ye.__webglColorRenderbuffer[L]);const te=i.get(x[L]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Ue(R){return Math.min(f,R.samples)}function Me(R){const x=i.get(R);return s&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xe(R){const x=o.render.frame;v.get(R)!==x&&(v.set(R,x),R.update())}function Ve(R,x){const N=R.colorSpace,ae=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===hl||N!==fi&&N!==xr&&(N===At||N===eo?s===!1?e.has("EXT_sRGB")===!0&&ae===jn?(R.format=hl,R.minFilter=On,R.generateMipmaps=!1):x=lf.sRGBToLinear(x):(ae!==jn||se!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.setTexture2D=he,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=Re,this.rebindTextures=O,this.setupRenderTarget=G,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Me}const fy=0,Xt=1;function hy(n,e,t){const i=t.isWebGL2;function r(a,o=xr){let s;const l=o===At||o===eo?Xt:fy;if(a===Yi)return n.UNSIGNED_BYTE;if(a===$d)return n.UNSIGNED_SHORT_4_4_4_4;if(a===ef)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Wg)return n.BYTE;if(a===Xg)return n.SHORT;if(a===Nl)return n.UNSIGNED_SHORT;if(a===Qd)return n.INT;if(a===Wi)return n.UNSIGNED_INT;if(a===wi)return n.FLOAT;if(a===ca)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===jg)return n.ALPHA;if(a===jn)return n.RGBA;if(a===Yg)return n.LUMINANCE;if(a===qg)return n.LUMINANCE_ALPHA;if(a===vr)return n.DEPTH_COMPONENT;if(a===ua)return n.DEPTH_STENCIL;if(a===hl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Kg)return n.RED;if(a===tf)return n.RED_INTEGER;if(a===Zg)return n.RG;if(a===nf)return n.RG_INTEGER;if(a===rf)return n.RGBA_INTEGER;if(a===vo||a===_o||a===xo||a===bo)if(l===Xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wc||a===Ac||a===Rc||a===Cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Jg)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Pc||a===Lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Pc)return l===Xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Lc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Dc||a===Ic||a===Uc||a===Nc||a===Oc||a===Fc||a===kc||a===Bc||a===zc||a===Hc||a===Gc||a===Vc||a===Wc||a===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Dc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ic)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Uc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Nc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Oc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===kc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Bc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===zc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Hc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Gc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Vc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Wc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Xc)return l===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===yo||a===jc||a===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===yo)return l===Xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Qg||a===qc||a===Kc||a===Zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===gr?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class py extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const my={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),g=.02,v=.005;c.inputState.pinching&&p>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(my)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Af extends cn{constructor(e,t,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:vr,u!==vr&&u!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=Wi),i===void 0&&u===ua&&(i=gr),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gy extends Sr{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,p=null,g=null,v=null;const _=t.getContextAttributes();let m=null,h=null;const E=[],b=[],M=new wn;M.layers.enable(1),M.viewport=new Rt;const w=new wn;w.layers.enable(2),w.viewport=new Rt;const D=[M,w],T=new py;T.layers.enable(1),T.layers.enable(2);let F=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=E[q];return K===void 0&&(K=new Wo,E[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=E[q];return K===void 0&&(K=new Wo,E[q]=K),K.getGripSpace()},this.getHand=function(q){let K=E[q];return K===void 0&&(K=new Wo,E[q]=K),K.getHandSpace()};function A(q){const K=b.indexOf(q.inputSource);if(K===-1)return;const Re=E[K];Re!==void 0&&(Re.update(q.inputSource,q.frame,c||o),Re.dispatchEvent({type:q.type,data:q.inputSource}))}function ie(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",fe);for(let q=0;q<E.length;q++){const K=b[q];K!==null&&(b[q]=null,E[q].disconnect(K))}F=null,S=null,e.setRenderTarget(m),g=null,p=null,f=null,r=null,h=null,he.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",fe),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:g}),h=new Di(g.framebufferWidth,g.framebufferHeight,{format:jn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,Re=null,Pe=null;_.depth&&(Pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?ua:vr,Re=_.stencil?gr:Wi);const Oe={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(Oe),r.updateRenderState({layers:[p]}),h=new Di(p.textureWidth,p.textureHeight,{format:jn,type:Yi,depthTexture:new Af(p.textureWidth,p.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Fe=e.properties.get(h);Fe.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function fe(q){for(let K=0;K<q.removed.length;K++){const Re=q.removed[K],Pe=b.indexOf(Re);Pe>=0&&(b[Pe]=null,E[Pe].disconnect(Re))}for(let K=0;K<q.added.length;K++){const Re=q.added[K];let Pe=b.indexOf(Re);if(Pe===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=b.length){b.push(Re),Pe=Fe;break}else if(b[Fe]===null){b[Fe]=Re,Pe=Fe;break}if(Pe===-1)break}const Oe=E[Pe];Oe&&Oe.connect(Re)}}const W=new z,Q=new z;function J(q,K,Re){W.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(Re.matrixWorld);const Pe=W.distanceTo(Q),Oe=K.projectionMatrix.elements,Fe=Re.projectionMatrix.elements,We=Oe[14]/(Oe[10]-1),Ge=Oe[14]/(Oe[10]+1),$=(Oe[9]+1)/Oe[5],Le=(Oe[9]-1)/Oe[5],Ce=(Oe[8]-1)/Oe[0],U=(Fe[8]+1)/Fe[0],Te=We*Ce,Se=We*U,O=Pe/(-Ce+U),G=O*-Ce;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(G),q.translateZ(O),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const we=We+O,Ee=Ge+O,Ue=Te-G,Me=Se+(Pe-G),Xe=$*Ge/Ee*we,Ve=Le*Ge/Ee*we;q.projectionMatrix.makePerspective(Ue,Me,Xe,Ve,we,Ee),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function X(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;T.near=w.near=M.near=q.near,T.far=w.far=M.far=q.far,(F!==T.near||S!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,S=T.far);const K=q.parent,Re=T.cameras;X(T,K);for(let Pe=0;Pe<Re.length;Pe++)X(Re[Pe],K);Re.length===2?J(T,M,w):T.projectionMatrix.copy(M.projectionMatrix),k(q,T,K)};function k(q,K,Re){Re===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(Re.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)};let ee=null;function ce(q,K){if(u=K.getViewerPose(c||o),v=K,u!==null){const Re=u.views;g!==null&&(e.setRenderTargetFramebuffer(h,g.framebuffer),e.setRenderTarget(h));let Pe=!1;Re.length!==T.cameras.length&&(T.cameras.length=0,Pe=!0);for(let Oe=0;Oe<Re.length;Oe++){const Fe=Re[Oe];let We=null;if(g!==null)We=g.getViewport(Fe);else{const $=f.getViewSubImage(p,Fe);We=$.viewport,Oe===0&&(e.setRenderTargetTextures(h,$.colorTexture,p.ignoreDepthValues?void 0:$.depthStencilTexture),e.setRenderTarget(h))}let Ge=D[Oe];Ge===void 0&&(Ge=new wn,Ge.layers.enable(Oe),Ge.viewport=new Rt,D[Oe]=Ge),Ge.matrix.fromArray(Fe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Fe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(We.x,We.y,We.width,We.height),Oe===0&&(T.matrix.copy(Ge.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Pe===!0&&T.cameras.push(Ge)}}for(let Re=0;Re<E.length;Re++){const Pe=b[Re],Oe=E[Re];Pe!==null&&Oe!==void 0&&Oe.update(Pe,K,c||o)}ee&&ee(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const he=new yf;he.setAnimationLoop(ce),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}function vy(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,vf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,b,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&g(m,h,M)):h.isMeshMatcapMaterial?(a(m,h),v(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),_(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,E,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Mn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Mn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*b,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _y(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,b){const M=b.program;i.uniformBlockBinding(E,M)}function c(E,b){let M=r[E.id];M===void 0&&(v(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(E,w);const D=e.render.frame;a[E.id]!==D&&(p(E),a[E.id]=D)}function u(E){const b=f();E.__bindingPointIndex=b;const M=n.createBuffer(),w=E.__size,D=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const b=r[E.id],M=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,T=M.length;D<T;D++){const F=M[D];if(g(F,D,w)===!0){const S=F.__offset,A=Array.isArray(F.value)?F.value:[F.value];let ie=0;for(let fe=0;fe<A.length;fe++){const W=A[fe],Q=_(W);typeof W=="number"?(F.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,S+ie,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=W.elements[0],F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=W.elements[0],F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=W.elements[0]):(W.toArray(F.__data,ie),ie+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,F.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(E,b,M){const w=E.value;if(M[b]===void 0){if(typeof w=="number")M[b]=w;else{const D=Array.isArray(w)?w:[w],T=[];for(let F=0;F<D.length;F++)T.push(D[F].clone());M[b]=T}return!0}else if(typeof w=="number"){if(M[b]!==w)return M[b]=w,!0}else{const D=Array.isArray(M[b])?M[b]:[M[b]],T=Array.isArray(w)?w:[w];for(let F=0;F<D.length;F++){const S=D[F];if(S.equals(T[F])===!1)return S.copy(T[F]),!0}}return!1}function v(E){const b=E.uniforms;let M=0;const w=16;let D=0;for(let T=0,F=b.length;T<F;T++){const S=b[T],A={boundary:0,storage:0},ie=Array.isArray(S.value)?S.value:[S.value];for(let fe=0,W=ie.length;fe<W;fe++){const Q=ie[fe],J=_(Q);A.boundary+=J.boundary,A.storage+=J.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,T>0){D=M%w;const fe=w-D;D!==0&&fe-A.boundary<0&&(M+=w-D,S.__offset=M)}M+=A.storage}return D=M%w,D>0&&(M+=w-D),E.__size=M,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}class Rf{constructor(e={}){const{canvas:t=hv(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;const b=this;let M=!1,w=0,D=0,T=null,F=-1,S=null;const A=new Rt,ie=new Rt;let fe=null;const W=new xt(0);let Q=0,J=t.width,X=t.height,k=1,ee=null,ce=null;const he=new Rt(0,0,J,X),q=new Rt(0,0,J,X);let K=!1;const Re=new Fl;let Pe=!1,Oe=!1,Fe=null;const We=new kt,Ge=new Qe,$=new z,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return T===null?k:1}let U=i;function Te(C,j){for(let re=0;re<C.length;re++){const Z=C[re],ue=t.getContext(Z,j);if(ue!==null)return ue}return null}try{const C={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",ge,!1),U===null){const j=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&j.shift(),U=Te(j,C),U===null)throw Te(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Se,O,G,we,Ee,Ue,Me,Xe,Ve,R,x,N,ae,se,pe,ke,ye,Y,L,te,ne,xe,De,Ye;function qe(){Se=new Cb(U),O=new Sb(U,Se,e),Se.init(O),xe=new hy(U,Se,O),G=new uy(U,Se,O),we=new Db(U),Ee=new Z0,Ue=new dy(U,Se,G,Ee,O,xe,we),Me=new Tb(b),Xe=new Rb(b),Ve=new Gv(U,O),De=new yb(U,Se,Ve,O),R=new Pb(U,Ve,we,De),x=new Ob(U,R,Ve,we),L=new Nb(U,O,Ue),ke=new Eb(Ee),N=new K0(b,Me,Xe,Se,O,De,ke),ae=new vy(b,Ee),se=new Q0,pe=new ry(Se,O),Y=new bb(b,Me,Xe,G,x,p,l),ye=new cy(b,x,O),Ye=new _y(U,we,O,G),te=new Mb(U,Se,we,O),ne=new Lb(U,Se,we,O),we.programs=N.programs,b.capabilities=O,b.extensions=Se,b.properties=Ee,b.renderLists=se,b.shadowMap=ye,b.state=G,b.info=we}qe();const I=new gy(b,U);this.xr=I,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(J,X,!1))},this.getSize=function(C){return C.set(J,X)},this.setSize=function(C,j,re=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,X=j,t.width=Math.floor(C*k),t.height=Math.floor(j*k),re===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(J*k,X*k).floor()},this.setDrawingBufferSize=function(C,j,re){J=C,X=j,k=re,t.width=Math.floor(C*re),t.height=Math.floor(j*re),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,j,re,Z){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,j,re,Z),G.viewport(A.copy(he).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,j,re,Z){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,j,re,Z),G.scissor(ie.copy(q).multiplyScalar(k).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){G.setScissorTest(K=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(C=!0,j=!0,re=!0){let Z=0;if(C){let ue=!1;if(T!==null){const je=T.texture.format;ue=je===rf||je===nf||je===tf}if(ue){const je=T.texture.type,et=je===Yi||je===Wi||je===Nl||je===gr||je===$d||je===ef,tt=Y.getClearColor(),rt=Y.getClearAlpha(),ct=tt.r,nt=tt.g,st=tt.b;et?(g[0]=ct,g[1]=nt,g[2]=st,g[3]=rt,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=ct,v[1]=nt,v[2]=st,v[3]=rt,U.clearBufferiv(U.COLOR,0,v))}else Z|=U.COLOR_BUFFER_BIT}j&&(Z|=U.DEPTH_BUFFER_BIT),re&&(Z|=U.STENCIL_BUFFER_BIT),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),se.dispose(),pe.dispose(),Ee.dispose(),Me.dispose(),Xe.dispose(),x.dispose(),De.dispose(),Ye.dispose(),N.dispose(),I.dispose(),I.removeEventListener("sessionstart",de),I.removeEventListener("sessionend",Be),Fe&&(Fe.dispose(),Fe=null),Ze.stop()};function Ie(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=we.autoReset,j=ye.enabled,re=ye.autoUpdate,Z=ye.needsUpdate,ue=ye.type;qe(),we.autoReset=C,ye.enabled=j,ye.autoUpdate=re,ye.needsUpdate=Z,ye.type=ue}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ne(C){const j=C.target;j.removeEventListener("dispose",Ne),it(j)}function it(C){at(C),Ee.remove(C)}function at(C){const j=Ee.get(C).programs;j!==void 0&&(j.forEach(function(re){N.releaseProgram(re)}),C.isShaderMaterial&&N.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,re,Z,ue,je){j===null&&(j=Le);const et=ue.isMesh&&ue.matrixWorld.determinant()<0,tt=Pn(C,j,re,Z,ue);G.setMaterial(Z,et);let rt=re.index,ct=1;if(Z.wireframe===!0){if(rt=R.getWireframeAttribute(re),rt===void 0)return;ct=2}const nt=re.drawRange,st=re.attributes.position;let Et=nt.start*ct,Tt=(nt.start+nt.count)*ct;je!==null&&(Et=Math.max(Et,je.start*ct),Tt=Math.min(Tt,(je.start+je.count)*ct)),rt!==null?(Et=Math.max(Et,0),Tt=Math.min(Tt,rt.count)):st!=null&&(Et=Math.max(Et,0),Tt=Math.min(Tt,st.count));const xn=Tt-Et;if(xn<0||xn===1/0)return;De.setup(ue,Z,tt,re,rt);let zn,It=te;if(rt!==null&&(zn=Ve.get(rt),It=ne,It.setIndex(zn)),ue.isMesh)Z.wireframe===!0?(G.setLineWidth(Z.wireframeLinewidth*Ce()),It.setMode(U.LINES)):It.setMode(U.TRIANGLES);else if(ue.isLine){let ut=Z.linewidth;ut===void 0&&(ut=1),G.setLineWidth(ut*Ce()),ue.isLineSegments?It.setMode(U.LINES):ue.isLineLoop?It.setMode(U.LINE_LOOP):It.setMode(U.LINE_STRIP)}else ue.isPoints?It.setMode(U.POINTS):ue.isSprite&&It.setMode(U.TRIANGLES);if(ue.isInstancedMesh)It.renderInstances(Et,xn,ue.count);else if(re.isInstancedBufferGeometry){const ut=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,_a=Math.min(re.instanceCount,ut);It.renderInstances(Et,xn,_a)}else It.render(Et,xn)},this.compile=function(C,j){function re(Z,ue,je){Z.transparent===!0&&Z.side===kn&&Z.forceSinglePass===!1?(Z.side=Mn,Z.needsUpdate=!0,vn(Z,ue,je),Z.side=di,Z.needsUpdate=!0,vn(Z,ue,je),Z.side=kn):vn(Z,ue,je)}m=pe.get(C),m.init(),E.push(m),C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(b._useLegacyLights),C.traverse(function(Z){const ue=Z.material;if(ue)if(Array.isArray(ue))for(let je=0;je<ue.length;je++){const et=ue[je];re(et,C,Z)}else re(ue,C,Z)}),E.pop(),m=null};let pt=null;function Bt(C){pt&&pt(C)}function de(){Ze.stop()}function Be(){Ze.start()}const Ze=new yf;Ze.setAnimationLoop(Bt),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(C){pt=C,I.setAnimationLoop(C),C===null?Ze.stop():Ze.start()},I.addEventListener("sessionstart",de),I.addEventListener("sessionend",Be),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(j),j=I.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,j,T),m=pe.get(C,E.length),m.init(),E.push(m),We.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Re.setFromProjectionMatrix(We),Oe=this.localClippingEnabled,Pe=ke.init(this.clippingPlanes,Oe),_=se.get(C,h.length),_.init(),h.push(_),mt(C,j,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(ee,ce),this.info.render.frame++,Pe===!0&&ke.beginShadows();const re=m.state.shadowsArray;if(ye.render(re,C,j),Pe===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(_,C),m.setupLights(b._useLegacyLights),j.isArrayCamera){const Z=j.cameras;for(let ue=0,je=Z.length;ue<je;ue++){const et=Z[ue];_t(_,C,et,et.viewport)}}else _t(_,C,j);T!==null&&(Ue.updateMultisampleRenderTarget(T),Ue.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(b,C,j),De.resetDefaultState(),F=-1,S=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function mt(C,j,re,Z){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Re.intersectsSprite(C)){Z&&$.setFromMatrixPosition(C.matrixWorld).applyMatrix4(We);const et=x.update(C),tt=C.material;tt.visible&&_.push(C,et,tt,re,$.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Re.intersectsObject(C))){const et=x.update(C),tt=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$.copy(C.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),$.copy(et.boundingSphere.center)),$.applyMatrix4(C.matrixWorld).applyMatrix4(We)),Array.isArray(tt)){const rt=et.groups;for(let ct=0,nt=rt.length;ct<nt;ct++){const st=rt[ct],Et=tt[st.materialIndex];Et&&Et.visible&&_.push(C,et,Et,re,$.z,st)}}else tt.visible&&_.push(C,et,tt,re,$.z,null)}}const je=C.children;for(let et=0,tt=je.length;et<tt;et++)mt(je[et],j,re,Z)}function _t(C,j,re,Z){const ue=C.opaque,je=C.transmissive,et=C.transparent;m.setupLightsView(re),Pe===!0&&ke.setGlobalState(b.clippingPlanes,re),je.length>0&&an(ue,je,j,re),Z&&G.viewport(A.copy(Z)),ue.length>0&&Pt(ue,j,re),je.length>0&&Pt(je,j,re),et.length>0&&Pt(et,j,re),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function an(C,j,re,Z){const ue=O.isWebGL2;Fe===null&&(Fe=new Di(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?ca:Yi,minFilter:Ya,samples:ue?4:0})),b.getDrawingBufferSize(Ge),ue?Fe.setSize(Ge.x,Ge.y):Fe.setSize(ml(Ge.x),ml(Ge.y));const je=b.getRenderTarget();b.setRenderTarget(Fe),b.getClearColor(W),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear();const et=b.toneMapping;b.toneMapping=ji,Pt(C,re,Z),Ue.updateMultisampleRenderTarget(Fe),Ue.updateRenderTargetMipmap(Fe);let tt=!1;for(let rt=0,ct=j.length;rt<ct;rt++){const nt=j[rt],st=nt.object,Et=nt.geometry,Tt=nt.material,xn=nt.group;if(Tt.side===kn&&st.layers.test(Z.layers)){const zn=Tt.side;Tt.side=Mn,Tt.needsUpdate=!0,Jt(st,re,Z,Et,Tt,xn),Tt.side=zn,Tt.needsUpdate=!0,tt=!0}}tt===!0&&(Ue.updateMultisampleRenderTarget(Fe),Ue.updateRenderTargetMipmap(Fe)),b.setRenderTarget(je),b.setClearColor(W,Q),b.toneMapping=et}function Pt(C,j,re){const Z=j.isScene===!0?j.overrideMaterial:null;for(let ue=0,je=C.length;ue<je;ue++){const et=C[ue],tt=et.object,rt=et.geometry,ct=Z===null?et.material:Z,nt=et.group;tt.layers.test(re.layers)&&Jt(tt,j,re,rt,ct,nt)}}function Jt(C,j,re,Z,ue,je){C.onBeforeRender(b,j,re,Z,ue,je),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ue.onBeforeRender(b,j,re,Z,C,je),ue.transparent===!0&&ue.side===kn&&ue.forceSinglePass===!1?(ue.side=Mn,ue.needsUpdate=!0,b.renderBufferDirect(re,j,Z,ue,C,je),ue.side=di,ue.needsUpdate=!0,b.renderBufferDirect(re,j,Z,ue,C,je),ue.side=kn):b.renderBufferDirect(re,j,Z,ue,C,je),C.onAfterRender(b,j,re,Z,ue,je)}function vn(C,j,re){j.isScene!==!0&&(j=Le);const Z=Ee.get(C),ue=m.state.lights,je=m.state.shadowsArray,et=ue.state.version,tt=N.getParameters(C,ue.state,je,j,re),rt=N.getProgramCacheKey(tt);let ct=Z.programs;Z.environment=C.isMeshStandardMaterial?j.environment:null,Z.fog=j.fog,Z.envMap=(C.isMeshStandardMaterial?Xe:Me).get(C.envMap||Z.environment),ct===void 0&&(C.addEventListener("dispose",Ne),ct=new Map,Z.programs=ct);let nt=ct.get(rt);if(nt!==void 0){if(Z.currentProgram===nt&&Z.lightsStateVersion===et)return _n(C,tt),nt}else tt.uniforms=N.getUniforms(C),C.onBuild(re,tt,b),C.onBeforeCompile(tt,b),nt=N.acquireProgram(tt,rt),ct.set(rt,nt),Z.uniforms=tt.uniforms;const st=Z.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(st.clippingPlanes=ke.uniform),_n(C,tt),Z.needsLights=ni(C),Z.lightsStateVersion=et,Z.needsLights&&(st.ambientLightColor.value=ue.state.ambient,st.lightProbe.value=ue.state.probe,st.directionalLights.value=ue.state.directional,st.directionalLightShadows.value=ue.state.directionalShadow,st.spotLights.value=ue.state.spot,st.spotLightShadows.value=ue.state.spotShadow,st.rectAreaLights.value=ue.state.rectArea,st.ltc_1.value=ue.state.rectAreaLTC1,st.ltc_2.value=ue.state.rectAreaLTC2,st.pointLights.value=ue.state.point,st.pointLightShadows.value=ue.state.pointShadow,st.hemisphereLights.value=ue.state.hemi,st.directionalShadowMap.value=ue.state.directionalShadowMap,st.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,st.spotShadowMap.value=ue.state.spotShadowMap,st.spotLightMatrix.value=ue.state.spotLightMatrix,st.spotLightMap.value=ue.state.spotLightMap,st.pointShadowMap.value=ue.state.pointShadowMap,st.pointShadowMatrix.value=ue.state.pointShadowMatrix);const Et=nt.getUniforms(),Tt=Ns.seqWithValue(Et.seq,st);return Z.currentProgram=nt,Z.uniformsList=Tt,nt}function _n(C,j){const re=Ee.get(C);re.outputColorSpace=j.outputColorSpace,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function Pn(C,j,re,Z,ue){j.isScene!==!0&&(j=Le),Ue.resetTextureUnits();const je=j.fog,et=Z.isMeshStandardMaterial?j.environment:null,tt=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:fi,rt=(Z.isMeshStandardMaterial?Xe:Me).get(Z.envMap||et),ct=Z.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),st=!!re.morphAttributes.position,Et=!!re.morphAttributes.normal,Tt=!!re.morphAttributes.color;let xn=ji;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(xn=b.toneMapping);const zn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,It=zn!==void 0?zn.length:0,ut=Ee.get(Z),_a=m.state.lights;if(Pe===!0&&(Oe===!0||C!==S)){const $t=C===S&&Z.id===F;ke.setState(Z,C,$t)}let Lt=!1;Z.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==_a.state.version||ut.outputColorSpace!==tt||ue.isInstancedMesh&&ut.instancing===!1||!ue.isInstancedMesh&&ut.instancing===!0||ue.isSkinnedMesh&&ut.skinning===!1||!ue.isSkinnedMesh&&ut.skinning===!0||ue.isInstancedMesh&&ut.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&ut.instancingColor===!1&&ue.instanceColor!==null||ut.envMap!==rt||Z.fog===!0&&ut.fog!==je||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==ke.numPlanes||ut.numIntersection!==ke.numIntersection)||ut.vertexAlphas!==ct||ut.vertexTangents!==nt||ut.morphTargets!==st||ut.morphNormals!==Et||ut.morphColors!==Tt||ut.toneMapping!==xn||O.isWebGL2===!0&&ut.morphTargetsCount!==It)&&(Lt=!0):(Lt=!0,ut.__version=Z.version);let ii=ut.currentProgram;Lt===!0&&(ii=vn(Z,j,ue));let Qi=!1,Oi=!1,xa=!1;const Qt=ii.getUniforms(),hi=ut.uniforms;if(G.useProgram(ii.program)&&(Qi=!0,Oi=!0,xa=!0),Z.id!==F&&(F=Z.id,Oi=!0),Qi||S!==C){Qt.setValue(U,"projectionMatrix",C.projectionMatrix),Qt.setValue(U,"viewMatrix",C.matrixWorldInverse);const $t=Qt.map.cameraPosition;$t!==void 0&&$t.setValue(U,$.setFromMatrixPosition(C.matrixWorld)),O.logarithmicDepthBuffer&&Qt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Qt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Oi=!0,xa=!0)}if(ue.isSkinnedMesh){Qt.setOptional(U,ue,"bindMatrix"),Qt.setOptional(U,ue,"bindMatrixInverse");const $t=ue.skeleton;$t&&(O.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Qt.setValue(U,"boneTexture",$t.boneTexture,Ue),Qt.setValue(U,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $i=re.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0&&O.isWebGL2===!0)&&L.update(ue,re,ii),(Oi||ut.receiveShadow!==ue.receiveShadow)&&(ut.receiveShadow=ue.receiveShadow,Qt.setValue(U,"receiveShadow",ue.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(hi.envMap.value=rt,hi.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),Oi&&(Qt.setValue(U,"toneMappingExposure",b.toneMappingExposure),ut.needsLights&&ti(hi,xa),je&&Z.fog===!0&&ae.refreshFogUniforms(hi,je),ae.refreshMaterialUniforms(hi,Z,k,X,Fe),Ns.upload(U,ut.uniformsList,hi,Ue)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ns.upload(U,ut.uniformsList,hi,Ue),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Qt.setValue(U,"center",ue.center),Qt.setValue(U,"modelViewMatrix",ue.modelViewMatrix),Qt.setValue(U,"normalMatrix",ue.normalMatrix),Qt.setValue(U,"modelMatrix",ue.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const $t=Z.uniformsGroups;for(let er=0,ao=$t.length;er<ao;er++)if(O.isWebGL2){const es=$t[er];Ye.update(es,ii),Ye.bind(es,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function ti(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function ni(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,j,re){Ee.get(C.texture).__webglTexture=j,Ee.get(C.depthTexture).__webglTexture=re;const Z=Ee.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=re===void 0,Z.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){const re=Ee.get(C);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,re=0){T=C,w=j,D=re;let Z=!0,ue=null,je=!1,et=!1;if(C){const rt=Ee.get(C);rt.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1):rt.__webglFramebuffer===void 0?Ue.setupRenderTarget(C):rt.__hasExternalTextures&&Ue.rebindTextures(C,Ee.get(C.texture).__webglTexture,Ee.get(C.depthTexture).__webglTexture);const ct=C.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(et=!0);const nt=Ee.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?ue=nt[j][re]:ue=nt[j],je=!0):O.isWebGL2&&C.samples>0&&Ue.useMultisampledRTT(C)===!1?ue=Ee.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?ue=nt[re]:ue=nt,A.copy(C.viewport),ie.copy(C.scissor),fe=C.scissorTest}else A.copy(he).multiplyScalar(k).floor(),ie.copy(q).multiplyScalar(k).floor(),fe=K;if(G.bindFramebuffer(U.FRAMEBUFFER,ue)&&O.drawBuffers&&Z&&G.drawBuffers(C,ue),G.viewport(A),G.scissor(ie),G.setScissorTest(fe),je){const rt=Ee.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt.__webglTexture,re)}else if(et){const rt=Ee.get(C.texture),ct=j||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,rt.__webglTexture,re||0,ct)}F=-1},this.readRenderTargetPixels=function(C,j,re,Z,ue,je,et){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(tt=tt[et]),tt){G.bindFramebuffer(U.FRAMEBUFFER,tt);try{const rt=C.texture,ct=rt.format,nt=rt.type;if(ct!==jn&&xe.convert(ct)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=nt===ca&&(Se.has("EXT_color_buffer_half_float")||O.isWebGL2&&Se.has("EXT_color_buffer_float"));if(nt!==Yi&&xe.convert(nt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===wi&&(O.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-Z&&re>=0&&re<=C.height-ue&&U.readPixels(j,re,Z,ue,xe.convert(ct),xe.convert(nt),je)}finally{const rt=T!==null?Ee.get(T).__webglFramebuffer:null;G.bindFramebuffer(U.FRAMEBUFFER,rt)}}},this.copyFramebufferToTexture=function(C,j,re=0){const Z=Math.pow(2,-re),ue=Math.floor(j.image.width*Z),je=Math.floor(j.image.height*Z);Ue.setTexture2D(j,0),U.copyTexSubImage2D(U.TEXTURE_2D,re,0,0,C.x,C.y,ue,je),G.unbindTexture()},this.copyTextureToTexture=function(C,j,re,Z=0){const ue=j.image.width,je=j.image.height,et=xe.convert(re.format),tt=xe.convert(re.type);Ue.setTexture2D(re,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,re.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,re.unpackAlignment),j.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Z,C.x,C.y,ue,je,et,tt,j.image.data):j.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Z,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,et,j.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,Z,C.x,C.y,et,tt,j.image),Z===0&&re.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(C,j,re,Z,ue=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const je=C.max.x-C.min.x+1,et=C.max.y-C.min.y+1,tt=C.max.z-C.min.z+1,rt=xe.convert(Z.format),ct=xe.convert(Z.type);let nt;if(Z.isData3DTexture)Ue.setTexture3D(Z,0),nt=U.TEXTURE_3D;else if(Z.isDataArrayTexture)Ue.setTexture2DArray(Z,0),nt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment);const st=U.getParameter(U.UNPACK_ROW_LENGTH),Et=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Tt=U.getParameter(U.UNPACK_SKIP_PIXELS),xn=U.getParameter(U.UNPACK_SKIP_ROWS),zn=U.getParameter(U.UNPACK_SKIP_IMAGES),It=re.isCompressedTexture?re.mipmaps[0]:re.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),re.isDataTexture||re.isData3DTexture?U.texSubImage3D(nt,ue,j.x,j.y,j.z,je,et,tt,rt,ct,It.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(nt,ue,j.x,j.y,j.z,je,et,tt,rt,It.data)):U.texSubImage3D(nt,ue,j.x,j.y,j.z,je,et,tt,rt,ct,It),U.pixelStorei(U.UNPACK_ROW_LENGTH,st),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),U.pixelStorei(U.UNPACK_SKIP_ROWS,xn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zn),ue===0&&Z.generateMipmaps&&U.generateMipmap(nt),G.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ue.setTextureCube(C,0):C.isData3DTexture?Ue.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ue.setTexture2DArray(C,0):Ue.setTexture2D(C,0),G.unbindTexture()},this.resetState=function(){w=0,D=0,T=null,G.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?_r:af}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_r?At:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xy extends Rf{}xy.prototype.isWebGL1Renderer=!0;class by extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class yy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new z;class js{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),a=bt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Qn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cf extends ga{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Vr;const wa=new z,Wr=new z,Xr=new z,jr=new Qe,Aa=new Qe,Pf=new kt,ws=new z,Ra=new z,As=new z,Nu=new Qe,Xo=new Qe,Ou=new Qe;class My extends un{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new Ni;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yy(t,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new js(i,3,0,!1)),Vr.setAttribute("uv",new js(i,2,3,!1))}this.geometry=Vr,this.material=e!==void 0?e:new Cf,this.center=new Qe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),Pf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;Rs(ws.set(-.5,-.5,0),Xr,o,Wr,r,a),Rs(Ra.set(.5,-.5,0),Xr,o,Wr,r,a),Rs(As.set(.5,.5,0),Xr,o,Wr,r,a),Nu.set(0,0),Xo.set(1,0),Ou.set(1,1);let s=e.ray.intersectTriangle(ws,Ra,As,!1,wa);if(s===null&&(Rs(Ra.set(-.5,.5,0),Xr,o,Wr,r,a),Xo.set(0,1),s=e.ray.intersectTriangle(ws,As,Ra,!1,wa),s===null))return;const l=e.ray.origin.distanceTo(wa);l<e.near||l>e.far||t.push({distance:l,point:wa.clone(),uv:Fn.getInterpolation(wa,ws,Ra,As,Nu,Xo,Ou,new Qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rs(n,e,t,i,r,a){jr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Aa.x=a*jr.x-r*jr.y,Aa.y=r*jr.x+a*jr.y):Aa.copy(jr),n.copy(e),n.x+=Aa.x,n.y+=Aa.y,n.applyMatrix4(Pf)}class Os extends cn{constructor(e,t,i,r,a,o,s,l,c){super(e,t,i,r,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qa extends ga{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sf,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lf extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jo=new kt,Fu=new z,ku=new z;class Sy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bu=new kt,Ca=new z,Yo=new z;class Ey extends Sy{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ca),Yo.copy(i.position),Yo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yo),i.updateMatrixWorld(),r.makeTranslation(-Ca.x,-Ca.y,-Ca.z),Bu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu)}}class Ty extends Lf{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ey}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wy extends Lf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Df{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zu(){return(typeof performance>"u"?Date:performance).now()}class Hu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);function zl(n,e,t,i,r,a,o,s){const l=(T,F,S,A)=>[new Qe(T/o,1-A/s),new Qe(S/o,1-A/s),new Qe(S/o,1-F/s),new Qe(T/o,1-F/s)],c=l(e+a,t,e+i+a,t+a),u=l(e+i+a,t,e+i*2+a,t+a),f=l(e,t+a,e+a,t+a+r),p=l(e+a,t+a,e+i+a,t+a+r),g=l(e+i+a,t+a,e+i+a*2,t+r+a),v=l(e+i+a*2,t+a,e+i*2+a*2,t+r+a),_=n.attributes.uv,m=[g[3],g[2],g[0],g[1]],h=[f[3],f[2],f[0],f[1]],E=[c[3],c[2],c[0],c[1]],b=[u[0],u[1],u[3],u[2]],M=[p[3],p[2],p[0],p[1]],w=[v[3],v[2],v[0],v[1]],D=[];for(const T of[m,h,E,b,M,w])for(const F of T)D.push(F.x,F.y);_.set(new Float32Array(D)),_.needsUpdate=!0}function Dn(n,e,t,i,r,a){zl(n,e,t,i,r,a,64,64)}function vl(n,e,t,i,r,a){zl(n,e,t,i,r,a,64,32)}class sr extends tn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class Ay extends tn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new qa({side:di}),this.layer2Material=new qa({side:kn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new Ot(8,8,8);Dn(e,0,0,8,8,8);const t=new yt(e,this.layer1Material),i=new Ot(9,9,9);Dn(i,32,0,8,8,8);const r=new yt(i,this.layer2Material);this.head=new sr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new Ot(8,12,4);Dn(a,16,16,8,12,4);const o=new yt(a,this.layer1Material),s=new Ot(8.5,12.5,4.5);Dn(s,16,32,8,12,4);const l=new yt(s,this.layer2Material);this.body=new sr(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const c=new Ot,u=new yt(c,this.layer1MaterialBiased);this.modelListeners.push(()=>{u.scale.x=this.slim?3:4,u.scale.y=12,u.scale.z=4,Dn(c,40,16,this.slim?3:4,12,4)});const f=new Ot,p=new yt(f,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Dn(f,40,32,this.slim?3:4,12,4)});const g=new tn;g.add(u,p),this.modelListeners.push(()=>{g.position.x=this.slim?-.5:-1}),g.position.y=-4,this.rightArm=new sr(u,p),this.rightArm.name="rightArm",this.rightArm.add(g),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const v=new Ot,_=new yt(v,this.layer1MaterialBiased);this.modelListeners.push(()=>{_.scale.x=this.slim?3:4,_.scale.y=12,_.scale.z=4,Dn(v,32,48,this.slim?3:4,12,4)});const m=new Ot,h=new yt(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3.5:4.5,h.scale.y=12.5,h.scale.z=4.5,Dn(m,48,48,this.slim?3:4,12,4)});const E=new tn;E.add(_,h),this.modelListeners.push(()=>{E.position.x=this.slim?.5:1}),E.position.y=-4,this.leftArm=new sr(_,h),this.leftArm.name="leftArm",this.leftArm.add(E),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const b=new Ot(4,12,4);Dn(b,0,16,4,12,4);const M=new yt(b,this.layer1MaterialBiased),w=new Ot(4.5,12.5,4.5);Dn(w,0,32,4,12,4);const D=new yt(w,this.layer2MaterialBiased),T=new tn;T.add(M,D),T.position.y=-6,this.rightLeg=new sr(M,D),this.rightLeg.name="rightLeg",this.rightLeg.add(T),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const F=new Ot(4,12,4);Dn(F,16,48,4,12,4);const S=new yt(F,this.layer1MaterialBiased),A=new Ot(4.5,12.5,4.5);Dn(A,0,48,4,12,4);const ie=new yt(A,this.layer2MaterialBiased),fe=new tn;fe.add(S,ie),fe.position.y=-6,this.leftLeg=new sr(S,ie),this.leftLeg.name="leftLeg",this.leftLeg.add(fe),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof sr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Ry extends tn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new qa({side:kn,transparent:!0,alphaTest:1e-5});const e=new Ot(10,16,1);vl(e,0,0,10,16,1),this.cape=new yt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Cy extends tn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new qa({side:kn,transparent:!0,alphaTest:1e-5});const e=new Ot(12,22,4);vl(e,22,0,10,20,2);const t=new yt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new tn,this.leftWing.add(t),this.add(this.leftWing);const i=new Ot(12,22,4);vl(i,22,0,10,20,2);const r=new yt(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new tn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Py extends tn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new qa({side:di});const e=new Ot(8,8,4/3);zl(e,0,0,6,6,1,14,7),this.rightEar=new yt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new yt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Gu=10.8*Math.PI/180;class Ly extends tn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new Ay,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Ry,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Gu,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new Cy,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Py,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Gu,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Cs(n){return n instanceof HTMLImageElement||n instanceof HTMLVideoElement||n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}function _l(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(a.data[l+3]!==255)return!0}return!1}function io(n){return n/64}function Vu(n,e,t){if(t){if(_l(n,0,0,e,e))return}else if(_l(n,0,0,e,e/2))return;const i=io(e),r=(a,o,s,l)=>n.clearRect(a*i,o*i,s*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function Dy(n,e){n.save(),n.scale(-1,1);const t=io(e),i=(r,a,o,s,l,c)=>n.drawImage(n.canvas,r*t,a*t,o*t,s*t,-l*t,c*t,-o*t,s*t);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),n.restore()}function Iy(n,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=n.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;n.width=r,n.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),Dy(i,r),Vu(i,n.width,!1)}else n.width=e.width,n.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,n.width,n.height),Vu(i,n.width,!0)}function Uy(n){if(n.width===2*n.height)return n.width/64;if(n.width*17===n.height*22)return n.width/22;if(n.width*11===n.height*23)return n.width/46;throw new Error(`Bad cape size: ${n.width}x${n.height}`)}function Ny(n,e){const t=Uy(e);n.width=64*t,n.height=32*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function Oy(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===0&&a.data[l+1]===0&&a.data[l+2]===0&&a.data[l+3]===255))return!1}return!0}function Fy(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===255&&a.data[l+1]===255&&a.data[l+2]===255&&a.data[l+3]===255))return!1}return!0}function ky(n){const e=io(n.width),t=n.getContext("2d",{willReadFrequently:!0}),i=(s,l,c,u)=>_l(t,s*e,l*e,c*e,u*e),r=(s,l,c,u)=>Oy(t,s*e,l*e,c*e,u*e),a=(s,l,c,u)=>Fy(t,s*e,l*e,c*e,u*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function By(n){if(n.width===n.height*2&&n.height%7===0)return n.height/7;throw new Error(`Bad ears size: ${n.width}x${n.height}`)}function zy(n,e){const t=By(e);n.width=14*t,n.height=7*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function Wu(n,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=io(e.width),i=14*t,r=7*t;n.width=i,n.height=r;const a=n.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,i,r),a.drawImage(e,24*t,0,i,r,0,0,i,r)}async function Ps(n){const e=document.createElement("img");return new Promise((t,i)=>{e.onload=()=>t(e),e.onerror=i,e.crossOrigin="anonymous",typeof n=="string"?e.src=n:(n.crossOrigin!==void 0&&(e.crossOrigin=n.crossOrigin),n.referrerPolicy!==void 0&&(e.referrerPolicy=n.referrerPolicy),e.src=n.src)})}const Xu={type:"change"},qo={type:"start"},ju={type:"end"},Ls=new df,Yu=new Vi,Hy=Math.cos(70*fv.DEG2RAD);class Gy extends Sr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",x),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",x),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xu),i.update(),a=r.NONE},this.update=(function(){const L=new z,te=new Mr().setFromUnitVectors(e.up,new z(0,1,0)),ne=te.clone().invert(),xe=new z,De=new Mr,Ye=new z,qe=2*Math.PI;return function(Ie=null){const H=i.object.position;L.copy(H).sub(i.target),L.applyQuaternion(te),s.setFromVector3(L),i.autoRotate&&a===r.NONE&&ie(S(Ie)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let ge=i.minAzimuthAngle,Ne=i.maxAzimuthAngle;isFinite(ge)&&isFinite(Ne)&&(ge<-Math.PI?ge+=qe:ge>Math.PI&&(ge-=qe),Ne<-Math.PI?Ne+=qe:Ne>Math.PI&&(Ne-=qe),ge<=Ne?s.theta=Math.max(ge,Math.min(Ne,s.theta)):s.theta=s.theta>(ge+Ne)/2?Math.max(ge,s.theta):Math.min(Ne,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&D||i.object.isOrthographicCamera?s.radius=ce(s.radius):s.radius=ce(s.radius*c),L.setFromSpherical(s),L.applyQuaternion(ne),H.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let it=!1;if(i.zoomToCursor&&D){let at=null;if(i.object.isPerspectiveCamera){const pt=L.length();at=ce(pt*c);const Bt=pt-at;i.object.position.addScaledVector(M,Bt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const pt=new z(w.x,w.y,0);pt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),it=!0;const Bt=new z(w.x,w.y,0);Bt.unproject(i.object),i.object.position.sub(Bt).add(pt),i.object.updateMatrixWorld(),at=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;at!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(at).add(i.object.position):(Ls.origin.copy(i.object.position),Ls.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ls.direction))<Hy?e.lookAt(i.target):(Yu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ls.intersectPlane(Yu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),it=!0);return c=1,D=!1,it||xe.distanceToSquared(i.object.position)>o||8*(1-De.dot(i.object.quaternion))>o||Ye.distanceToSquared(i.target)>0?(i.dispatchEvent(Xu),xe.copy(i.object.position),De.copy(i.object.quaternion),Ye.copy(i.target),it=!1,!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",se),i.domElement.removeEventListener("pointerdown",Ee),i.domElement.removeEventListener("pointercancel",Me),i.domElement.removeEventListener("wheel",R),i.domElement.removeEventListener("pointermove",Ue),i.domElement.removeEventListener("pointerup",Me),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",x),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Hu,l=new Hu;let c=1;const u=new z,f=new Qe,p=new Qe,g=new Qe,v=new Qe,_=new Qe,m=new Qe,h=new Qe,E=new Qe,b=new Qe,M=new z,w=new Qe;let D=!1;const T=[],F={};function S(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function ie(L){l.theta-=L}function fe(L){l.phi-=L}const W=(function(){const L=new z;return function(ne,xe){L.setFromMatrixColumn(xe,0),L.multiplyScalar(-ne),u.add(L)}})(),Q=(function(){const L=new z;return function(ne,xe){i.screenSpacePanning===!0?L.setFromMatrixColumn(xe,1):(L.setFromMatrixColumn(xe,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(ne),u.add(L)}})(),J=(function(){const L=new z;return function(ne,xe){const De=i.domElement;if(i.object.isPerspectiveCamera){const Ye=i.object.position;L.copy(Ye).sub(i.target);let qe=L.length();qe*=Math.tan(i.object.fov/2*Math.PI/180),W(2*ne*qe/De.clientHeight,i.object.matrix),Q(2*xe*qe/De.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(W(ne*(i.object.right-i.object.left)/i.object.zoom/De.clientWidth,i.object.matrix),Q(xe*(i.object.top-i.object.bottom)/i.object.zoom/De.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function X(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(L){if(!i.zoomToCursor)return;D=!0;const te=i.domElement.getBoundingClientRect(),ne=L.clientX-te.left,xe=L.clientY-te.top,De=te.width,Ye=te.height;w.x=ne/De*2-1,w.y=-(xe/Ye)*2+1,M.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function ce(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function he(L){f.set(L.clientX,L.clientY)}function q(L){ee(L),h.set(L.clientX,L.clientY)}function K(L){v.set(L.clientX,L.clientY)}function Re(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const te=i.domElement;ie(2*Math.PI*g.x/te.clientHeight),fe(2*Math.PI*g.y/te.clientHeight),f.copy(p),i.update()}function Pe(L){E.set(L.clientX,L.clientY),b.subVectors(E,h),b.y>0?X(A()):b.y<0&&k(A()),h.copy(E),i.update()}function Oe(L){_.set(L.clientX,L.clientY),m.subVectors(_,v).multiplyScalar(i.panSpeed),J(m.x,m.y),v.copy(_),i.update()}function Fe(L){ee(L),L.deltaY<0?k(A()):L.deltaY>0&&X(A()),i.update()}function We(L){let te=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?fe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?fe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):J(-i.keyPanSpeed,0),te=!0;break}te&&(L.preventDefault(),i.update())}function Ge(){if(T.length===1)f.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),te=.5*(T[0].pageY+T[1].pageY);f.set(L,te)}}function $(){if(T.length===1)v.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),te=.5*(T[0].pageY+T[1].pageY);v.set(L,te)}}function Le(){const L=T[0].pageX-T[1].pageX,te=T[0].pageY-T[1].pageY,ne=Math.sqrt(L*L+te*te);h.set(0,ne)}function Ce(){i.enableZoom&&Le(),i.enablePan&&$()}function U(){i.enableZoom&&Le(),i.enableRotate&&Ge()}function Te(L){if(T.length==1)p.set(L.pageX,L.pageY);else{const ne=Y(L),xe=.5*(L.pageX+ne.x),De=.5*(L.pageY+ne.y);p.set(xe,De)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const te=i.domElement;ie(2*Math.PI*g.x/te.clientHeight),fe(2*Math.PI*g.y/te.clientHeight),f.copy(p)}function Se(L){if(T.length===1)_.set(L.pageX,L.pageY);else{const te=Y(L),ne=.5*(L.pageX+te.x),xe=.5*(L.pageY+te.y);_.set(ne,xe)}m.subVectors(_,v).multiplyScalar(i.panSpeed),J(m.x,m.y),v.copy(_)}function O(L){const te=Y(L),ne=L.pageX-te.x,xe=L.pageY-te.y,De=Math.sqrt(ne*ne+xe*xe);E.set(0,De),b.set(0,Math.pow(E.y/h.y,i.zoomSpeed)),X(b.y),h.copy(E)}function G(L){i.enableZoom&&O(L),i.enablePan&&Se(L)}function we(L){i.enableZoom&&O(L),i.enableRotate&&Te(L)}function Ee(L){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Ue),i.domElement.addEventListener("pointerup",Me)),pe(L),L.pointerType==="touch"?N(L):Xe(L))}function Ue(L){i.enabled!==!1&&(L.pointerType==="touch"?ae(L):Ve(L))}function Me(L){ke(L),T.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Ue),i.domElement.removeEventListener("pointerup",Me)),i.dispatchEvent(ju),a=r.NONE}function Xe(L){let te;switch(L.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Tr.DOLLY:if(i.enableZoom===!1)return;q(L),a=r.DOLLY;break;case Tr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;K(L),a=r.PAN}else{if(i.enableRotate===!1)return;he(L),a=r.ROTATE}break;case Tr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;he(L),a=r.ROTATE}else{if(i.enablePan===!1)return;K(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(qo)}function Ve(L){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;Re(L);break;case r.DOLLY:if(i.enableZoom===!1)return;Pe(L);break;case r.PAN:if(i.enablePan===!1)return;Oe(L);break}}function R(L){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(L.preventDefault(),i.dispatchEvent(qo),Fe(L),i.dispatchEvent(ju))}function x(L){i.enabled===!1||i.enablePan===!1||We(L)}function N(L){switch(ye(L),T.length){case 1:switch(i.touches.ONE){case wr.ROTATE:if(i.enableRotate===!1)return;Ge(),a=r.TOUCH_ROTATE;break;case wr.PAN:if(i.enablePan===!1)return;$(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case wr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ce(),a=r.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(qo)}function ae(L){switch(ye(L),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Te(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Se(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;we(L),i.update();break;default:a=r.NONE}}function se(L){i.enabled!==!1&&L.preventDefault()}function pe(L){T.push(L)}function ke(L){delete F[L.pointerId];for(let te=0;te<T.length;te++)if(T[te].pointerId==L.pointerId){T.splice(te,1);return}}function ye(L){let te=F[L.pointerId];te===void 0&&(te=new Qe,F[L.pointerId]=te),te.set(L.pageX,L.pageY)}function Y(L){const te=L.pointerId===T[0].pointerId?T[1]:T[0];return F[te.pointerId]}i.domElement.addEventListener("contextmenu",se),i.domElement.addEventListener("pointerdown",Ee),i.domElement.addEventListener("pointercancel",Me),i.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}const Vy={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ro{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Wy=new Mf(-1,1,1,-1,0,1),Hl=new Ni;Hl.setAttribute("position",new Pi([-1,3,0,-1,-1,0,3,-1,0],3));Hl.setAttribute("uv",new Pi([0,2,0,0,2,0],2));class Xy{constructor(e){this._mesh=new yt(Hl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Wy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class If extends ro{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ii?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_f.clone(e.uniforms),this.material=new Ii({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Xy(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qu extends ro{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class jy extends ro{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Yy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Qe);this._width=i.width,this._height=i.height,t=new Di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ca}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new If(Vy),this.copyPass.material.blending=Ci,this.clock=new Df}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}qu!==void 0&&(o instanceof qu?i=!0:o instanceof jy&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qy extends ro{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Ky={uniforms:{tDiffuse:{value:null},resolution:{value:new Qe(1/1024,1/512)}},vertexShader:`

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
	`};class Uf{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const i=t*this.speed;this.animate(e,i),this.animationObjects.forEach((r,a)=>{const o=this.progress0.get(a);r(e,this.progress-o,a)}),this.progress+=i}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Ku extends Uf{animate(e){const t=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class Zu extends Uf{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class Zy extends My{constructor(e="",t={}){const i=new Cf({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const i=t.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new Os(e);r.magFilter=Dt,r.minFilter=Dt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class Jy{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new wy(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new Ty(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new by,this.camera=new wn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),In.enabled=!1,this.renderer=new Rf({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Di(0,0,{depthTexture:new Af(0,0,wi)})),this.composer=new Yy(this.renderer,t),this.renderPass=new qy(this.scene,this.camera),this.fxaaPass=new If(Ky),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new Ly,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new tn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new Gy(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Df,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Os(this.skinCanvas),this.skinTexture.magFilter=Dt,this.skinTexture.minFilter=Dt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Os(this.capeCanvas),this.capeTexture.magFilter=Dt,this.capeTexture.minFilter=Dt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Os(this.earsCanvas),this.earsTexture.magFilter=Dt,this.earsTexture.minFilter=Dt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Cs(e))Iy(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=ky(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Wu(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Ps(e).then(i=>this.loadSkin(i,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Cs(e))Ny(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Ps(e).then(i=>this.loadCape(i,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Cs(e))t.textureType==="skin"?Wu(this.earsCanvas,e):zy(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Ps(e).then(i=>this.loadEars(i,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,Vs)}loadBackground(e,t){if(Cs(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new cn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Ps(e).then(i=>this.loadBackground(i,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new z).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new Qe).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new Qe).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof xt||e instanceof cn?this.scene.background=e:this.scene.background=new xt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof un||(e=new Zy(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}var Qy=be("<canvas></canvas>");function $y(n,e){Rn(e,!0);let t=gt(e,"skin",3,null),i=gt(e,"cape",3,null),r=gt(e,"width",3,260),a=gt(e,"height",3,340),o=gt(e,"walking",3,!1),s=gt(e,"autorotate",3,!1),l=gt(e,"zoom",3,.85),c=ve(null),u=null,f,p;function g(m){if(!m)return null;const h=String(m).trim();if(!h)return null;if(/^(https?:|data:)/i.test(h))return h;const E=window.__TAURI__?.core?.convertFileSrc;return E?E(h):h}function v(){if(!u)return;const m=g(t()),h=g(i());m!==f&&(f=m,m?u.loadSkin(m,{model:"auto-detect"}).catch(()=>{}):u.resetSkin()),h!==p&&(p=h,h?u.loadCape(h).catch(()=>{}):u.resetCape())}Ji(()=>(u=new Jy({canvas:d(c),width:r(),height:a(),zoom:l(),fov:55}),u.controls.enablePan=!1,u.controls.enableZoom=!0,u.autoRotate=s(),u.animation=o()?new Zu:new Ku,v(),()=>{u?.dispose(),u=null})),Kn(()=>{v()}),Kn(()=>{u&&(u.animation=o()?new Zu:new Ku)}),Kn(()=>{u&&(u.autoRotate=s())}),Kn(()=>{u&&u.setSize(r(),a())});var _=Qy();Vd(_,m=>y(c,m),()=>d(c)),ze(()=>Gi(_,`width:${r()??""}px;height:${a()??""}px;display:block`)),le(n,_),Cn()}var eM=be("<button> </button>"),tM=be('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),nM=be('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),iM=be('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),rM=be('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),aM=be('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),sM=be('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),oM=be('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),lM=be('<div class="p-4"><!> <!></div>'),cM=be('<form class="flex flex-col gap-3 p-4"><div class="flex gap-2"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <button type="button" class="shrink-0 rounded border border-(--border) px-2.5 text-[11px] hover:bg-(--bg-subtle)" title="Use the Ely.by authlib-injector endpoint">Ely.by</button></div> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),uM=be('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),dM=be('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),fM=be('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),hM=be('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),pM=be('<div><div class="flex items-center gap-3"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-sm font-bold text-(--accent)"> </span> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape">🎨</button> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),mM=be('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),gM=be('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <!> <div class="border-t border-(--border)"></div></div></div></div>');function vM(n,e){Rn(e,!0);let t=gt(e,"accounts",19,()=>[]),i=gt(e,"active",3,null),r=ve("offline"),a=ve(""),o=ve(!1),s=ve(""),l=ve(""),c=ve("idle"),u=ve(""),f=ve(null),p=ve(!1),g=null,v=ve(""),_=ve(""),m=ve(""),h=ve(""),E=ve(null),b=ve(""),M=ve("");function w(O,G){const we=window.__TAURI__?.core;return we?we.invoke(O,G):Promise.reject(new Error("Tauri backend unavailable in this preview."))}Ji(()=>{const O=Zs(()=>e.onclose?.());return()=>Js(O)}),Rp(()=>D());function D(){g&&(clearInterval(g),g=null)}Kn(()=>{const O=d(s).trim(),G=setTimeout(async()=>{if(!O){y(l,"");return}try{y(l,await w("offline_uuid",{username:O}),!0)}catch{y(l,"")}},200);return()=>clearTimeout(G)});async function T(O){O.preventDefault(),y(a,""),y(o,!0);try{await w("add_offline_account",{username:d(s).trim()}),y(s,""),y(l,""),await e.onrefresh?.()}catch(G){y(a,String(G),!0)}finally{y(o,!1)}}async function F(){y(u,""),y(p,!1),y(c,"requesting");try{y(f,await w("start_microsoft_device_code"),!0),y(c,"code"),D(),g=setInterval(S,(d(f).interval||5)*1e3)}catch(O){y(c,"idle"),y(u,String(O),!0)}}async function S(){if(d(f))try{const O=await w("poll_microsoft_device_code",{device:d(f)});if(O.state==="pending")return;if(O.state==="slow_down"){D(),g=setInterval(S,((d(f).interval||5)+5)*1e3);return}if(D(),O.state==="failed"){y(u,O.reason,!0),y(f,null),y(c,"idle");return}y(f,null),y(c,"signedin"),await e.onrefresh?.()}catch(O){y(u,String(O),!0)}}async function A(){if(d(f))try{await navigator.clipboard.writeText(d(f).user_code),y(p,!0),setTimeout(()=>y(p,!1),1600)}catch{}}async function ie(O){O.preventDefault(),y(a,""),y(o,!0);try{const G=await w("add_custom_yggdrasil_account",{username:d(v).trim(),serverUrl:d(_).trim()});(d(m).trim()||d(h).trim())&&await w("set_account_textures",{id:G.id,skin:d(m).trim()||null,cape:d(h).trim()||null}),y(v,""),y(_,""),y(m,""),y(h,""),await e.onrefresh?.()}catch(G){y(a,String(G),!0)}finally{y(o,!1)}}const fe="https://authserver.ely.by/api/authlib-injector";async function W(O){const G=window.__TAURI__?.dialog?.open;if(!G){y(a,"File picker unavailable in this build.");return}try{const we=await G({multiple:!1,title:O==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!we)return;const Ee=String(we);y(O==="skin"?m:h,Ee,!0),y(a,"")}catch(we){y(a,String(we),!0)}}async function Q(O){y(a,"");try{await w("set_active_account",{id:O}),await e.onrefresh?.()}catch(G){y(a,String(G),!0)}}async function J(O){y(a,"");try{await w("remove_account",{id:O}),d(E)===O&&y(E,null),await e.onrefresh?.()}catch(G){y(a,String(G),!0)}}function X(O){if(d(E)===O.id){y(E,null);return}y(E,O.id,!0),y(b,O.skin??"",!0),y(M,O.cape??"",!0)}async function k(O){const G=window.__TAURI__?.dialog?.open;if(!G){y(a,"File picker unavailable in this build.");return}try{const we=await G({multiple:!1,title:O==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!we)return;y(O==="skin"?b:M,String(we),!0),y(a,"")}catch(we){y(a,String(we),!0)}}async function ee(){y(a,""),y(o,!0);try{await w("set_account_textures",{id:d(E),skin:d(b).trim()||null,cape:d(M).trim()||null}),await e.onrefresh?.(),y(E,null)}catch(O){y(a,String(O),!0)}finally{y(o,!1)}}async function ce(){y(b,""),y(M,""),await ee()}function he(O){return{offline:"Offline",microsoft:"Microsoft"}[O.account_type.type]??"Yggdrasil"}const q=Gt(()=>t().find(O=>O.id===d(E))??null);var K=gM(),Re=V(K),Pe=V(Re),Oe=P(V(Pe),2),Fe=P(Pe,2);Nt(Fe,20,()=>[["offline","Offline"],["microsoft","Microsoft"],["custom","Custom / Ely.by"]],Hd,(O,G)=>{var we=Gt(()=>Kf(G,2));let Ee=()=>d(we)[0],Ue=()=>d(we)[1];var Me=eM(),Xe=me(Me,!0);ze(()=>{Mt(Me,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${d(r)===Ee()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),_e(Xe,Ue())}),oe("click",Me,()=>{y(r,Ee(),!0),y(a,"")}),le(O,Me)});var We=P(Fe,2),Ge=V(We);{var $=O=>{var G=nM(),we=Ct(G),Ee=V(we),Ue=P(Ee,2),Me=P(we,2);{var Xe=Ve=>{var R=tM(),x=P(V(R),2),N=me(x,!0);ze(()=>_e(N,d(l))),le(Ve,R)};Ke(Me,Ve=>{d(l)&&Ve(Xe)})}ze(Ve=>Ue.disabled=Ve,[()=>!d(s).trim()||d(o)]),yr("submit",we,T),Ht(Ee,()=>d(s),Ve=>y(s,Ve)),le(O,G)},Le=O=>{var G=lM(),we=V(G);{var Ee=x=>{var N=iM(),ae=Ct(N);ze(()=>ae.disabled=d(o)),oe("click",ae,F),le(x,N)},Ue=x=>{var N=rM();le(x,N)},Me=x=>{var N=aM(),ae=P(V(N),2),se=me(ae,!0),pe=P(ae,4),ke=me(pe,!0),ye=P(pe,2),Y=V(ye),L=me(Y,!0),te=P(Y,2);ze(()=>{_e(se,d(f).verification_uri),_e(ke,d(f).user_code),_e(L,d(p)?"Copied ✓":"Copy code")}),oe("click",Y,A),oe("click",te,F),le(x,N)},Xe=x=>{var N=sM(),ae=P(Ct(N),2);oe("click",ae,()=>{y(c,"idle"),y(u,"")}),le(x,N)};Ke(we,x=>{d(c)==="idle"?x(Ee):d(c)==="requesting"?x(Ue,1):d(c)==="code"&&d(f)?x(Me,2):d(c)==="signedin"&&x(Xe,3)})}var Ve=P(we,2);{var R=x=>{var N=oM(),ae=me(N,!0);ze(()=>_e(ae,d(u))),le(x,N)};Ke(Ve,x=>{d(u)&&x(R)})}le(O,G)},Ce=O=>{var G=cM(),we=V(G),Ee=V(we),Ue=P(Ee,2),Me=P(we,2),Xe=P(Me,2),Ve=V(Xe),R=P(V(Ve)),x=me(R,!0),N=P(Ve,2),ae=P(V(N)),se=me(ae,!0),pe=P(Xe,2);ze(ke=>{_e(x,d(m)||"none"),_e(se,d(h)||"none"),pe.disabled=ke},[()=>!d(v).trim()||!d(_).trim()||d(o)]),yr("submit",G,ie),Ht(Ee,()=>d(_),ke=>y(_,ke)),oe("click",Ue,()=>y(_,fe)),Ht(Me,()=>d(v),ke=>y(v,ke)),oe("click",Ve,()=>W("skin")),oe("click",N,()=>W("cape")),le(O,G)};Ke(Ge,O=>{d(r)==="offline"?O($):d(r)==="microsoft"?O(Le,1):d(r)==="custom"&&O(Ce,2)})}var U=P(Ge,2);{var Te=O=>{var G=uM(),we=me(G,!0);ze(()=>_e(we,d(a))),le(O,G)};Ke(U,O=>{d(a)&&O(Te)})}var Se=P(U,2);Nt(Se,21,t,O=>O.id,(O,G)=>{var we=pM(),Ee=V(we),Ue=V(Ee),Me=me(Ue,!0),Xe=P(Ue,2),Ve=V(Xe),R=V(Ve),x=me(R,!0),N=P(R,2),ae=me(N,!0),se=P(N,2);{var pe=qe=>{var I=dM();le(qe,I)};Ke(se,qe=>{i()?.id===d(G).id&&qe(pe)})}var ke=P(Ve,2),ye=me(ke,!0),Y=P(Xe,2),L=V(Y),te=P(L,2);{var ne=qe=>{var I=fM();oe("click",I,()=>Q(d(G).id)),le(qe,I)};Ke(te,qe=>{i()?.id!==d(G).id&&qe(ne)})}var xe=P(te,2),De=P(Ee,2);{var Ye=qe=>{var I=hM(),Ie=V(I);$y(Ie,{get skin(){return d(b)},get cape(){return d(M)},width:110,height:150});var H=P(Ie,2),ge=V(H),Ne=P(V(ge)),it=me(Ne,!0),at=P(ge,2),pt=P(V(at)),Bt=me(pt,!0),de=P(at,2),Be=V(de),Ze=P(Be,2);ze(()=>{_e(it,d(b)||"default (Steve/Alex)"),_e(Bt,d(M)||"none"),Be.disabled=d(o)}),oe("click",ge,()=>k("skin")),oe("click",at,()=>k("cape")),oe("click",Be,ee),oe("click",Ze,ce),le(qe,I)};Ke(De,qe=>{d(E)===d(G).id&&d(q)&&qe(Ye)})}ze((qe,I)=>{Mt(we,1,`border-b border-(--border) px-4 py-2.5 ${i()?.id===d(G).id?"bg-(--accent)/10":""}`),_e(Me,qe),_e(x,d(G).username),_e(ae,I),_e(ye,d(G).uuid)},[()=>d(G).username[0]?.toUpperCase(),()=>he(d(G))]),oe("click",L,()=>X(d(G))),oe("click",xe,()=>J(d(G).id)),le(O,we)},O=>{var G=mM();le(O,G)}),oe("click",K,O=>{O.target===O.currentTarget&&e.onclose?.()}),oe("click",Oe,()=>e.onclose?.()),le(n,K),Cn()}ei(["click"]);var _M=be('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),xM=be('<span class="truncate text-[13px]"> </span>'),bM=be('<button><span class="w-5 shrink-0 text-center text-[15px] leading-none"> </span> <!></button>'),yM=be('<span class="truncate text-[13px]">Add Instance</span>'),MM=be('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),SM=be('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),EM=be('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span>',1),TM=be('<div class="mb-4 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">📂 Instance Folder</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance">⤓ Install .mrpack</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">⚙ Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"> </button></div> <!>',1),wM=be('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),AM=be('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),RM=be('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),CM=be("<div> </div>"),PM=be('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),LM=be('<p class="mt-2 text-[12px] text-red-400"> </p>'),DM=be('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),IM=be('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),UM=be('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root">♻ Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),NM=be('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="w-5 shrink-0 text-center text-[15px] leading-none">＋</span> <!></button></div> <button><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-[11px] font-bold text-(--accent)"><!></span> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!></div>');function OM(n,e){Rn(e,!0);let t=ve("…"),i=ve("instances"),r=ve(Ut(jd(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));Kn(()=>{qm(d(r)),localStorage.setItem("twilight-theme",d(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:as(d(r))?"dark":"light"}).catch(()=>{})}),zm();let a=ve("Ready"),o=ve(!1);const s=[{id:"instances",label:"Instances",icon:"▦"},{id:"worlds",label:"Servers & P2P",icon:"⌗"},{id:"downloads",label:"Downloads",icon:"⤓"},{id:"settings",label:"Settings",icon:"⚙"}],l={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]};let c=ve(Ut([])),u=ve(null),f=ve(!1),p=ve(Ut([])),g=ve(!1),v=ve(""),_=ve(!1),m=ve(!1),h=ve(""),E=ve(!1),b=ve(""),M=ve(null),w=Gt(()=>d(M)?"edit":d(i)),D=ve(null),T=ve(null),F=ve(""),S=ve(""),A=ve(!1),ie=ve(""),fe=ve(null),W=ve(""),Q=ve(0),J=ve(0),X=ve("");async function k(B,Ae){return window.__TAURI__.core.invoke(B,Ae)}function ee(){y(r,as(d(r))?"twilight-light":"twilight-dark",!0)}async function ce(){y(g,!0),y(v,"");try{y(p,await k("discover_java_installations"),!0)}catch(B){y(v,String(B),!0)}finally{y(g,!1)}}function he(){y(_,!0)}async function q(){if(d(h).trim()){y(E,!0),y(b,"");try{const B=await k("install_modpack",{pathOrUrl:d(h).trim()});y(m,!1),y(h,""),await Me(),B&&y(O,B,!0),y(a,"Modpack installed.")}catch(B){y(b,String(B),!0)}finally{y(E,!1)}}}let K=ve(Ut([])),Re=ve(!1),Pe=ve(!1),Oe=ve(null);Kn(()=>{d(K).length,d(Oe)&&(d(Oe).scrollTop=d(Oe).scrollHeight)});function Fe(B){d(K).push(B),d(K).length>5e3&&d(K).splice(0,d(K).length-5e3)}function We(){y(K,[],!0)}function Ge(B){return B.stream==="stderr"||B.line.includes("/ERROR]")?"text-rose-400":B.line.includes("/WARN]")?"text-(--accent-star)":B.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function $(){const B=d(K).map(Ae=>Ae.line).join(`
`);try{await navigator.clipboard.writeText(B)}catch{const Ae=document.createElement("textarea");Ae.value=B,document.body.append(Ae),Ae.select(),document.execCommand("copy"),Ae.remove()}}async function Le(){if(d(Pe))try{await k("kill_instance"),Fe({stream:"stdout",line:"kill requested"})}catch(B){Fe({stream:"stderr",line:String(B)})}}let Ce=ve(Ut([])),U=ve(""),Te=ve(null),Se=ve(""),O=ve(null),G=ve(null),we=ve(""),Ee=ve(!1);function Ue(){const B=d(Se).trim().toLowerCase();return B?d(Ce).filter(Ae=>Ae.name.toLowerCase().includes(B)||Ae.minecraft_version.toLowerCase().includes(B)||Ae.id.toLowerCase().includes(B)):d(Ce)}async function Me(){try{y(Ce,await k("scan_instances"),!0),y(U,"")}catch(B){y(U,String(B),!0)}}function Xe(B){y(O,B,!0)}async function Ve(B){if(d(Pe))return;const Ae=d(Ce).find(ft=>ft.id===B),Je=Ae?Ae.name:B;y(Pe,!0),y(a,`Running ${Je}…`),y(Re,!0),Fe({stream:"stdout",line:`launching ${Je}…`});try{const ft=await k("launch_instance",{instanceId:B});Fe({stream:"stdout",line:`launcher reports exit code ${ft}`}),await Me(),y(a,"Ready")}catch(ft){console.error("Launch failed:",ft),Fe({stream:"stderr",line:`[ERROR] Launch failed: ${ft}`}),y(a,"Launch failed")}finally{y(Pe,!1),d(a)!=="Launch failed"&&y(a,"Ready")}}function R(){d(T)&&k("open_path",{path:d(T).instances_dir}).catch(B=>y(a,String(B),!0))}function x(B){d(T)&&k("open_path",{path:[d(T).instances_dir.replace(/\\/g,"/"),B].join("/")}).catch(Ae=>y(a,String(Ae),!0))}function N(B){y(we,""),y(G,B,!0)}async function ae(B){if(!(!d(G)||d(Ee))){y(Ee,!0),y(we,"");try{await k("delete_instance",{instanceId:d(G),toTrash:B}),d(O)===d(G)&&y(O,null),y(G,null),await Me(),y(a,B?"Instance moved to trash.":"Instance deleted.",!0)}catch(Ae){y(we,String(Ae),!0)}finally{y(Ee,!1)}}}const se=Gt(()=>[...new Set(d(Ce).map(B=>B.group).filter(Boolean))].sort((B,Ae)=>B.localeCompare(Ae)));async function pe(B){if(!d(ne))return;const Ae=d(ne).name;try{await k("set_instance_group",{instanceId:d(ne).id,group:B}),await Me(),y(a,B?`Moved ${Ae} to ${B}.`:`${Ae} is ungrouped.`,!0)}catch(Je){y(a,String(Je),!0)}}async function ke(){if(!d(ne))return;const B=d(ne).name;try{const Ae=await k("duplicate_instance",{instanceId:d(ne).id});await Me(),y(O,Ae.id,!0),y(a,`Copied ${B}.`)}catch(Ae){y(a,String(Ae),!0)}}async function ye(){if(!d(ne))return;const B=window.__TAURI__?.dialog?.save;if(!B){y(a,"File picker unavailable in this build.");return}try{const Ae=await B({title:"Export instance",defaultPath:`${d(ne).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Ae)return;const Je=await k("export_instance_zip",{instanceId:d(ne).id,destPath:Ae});y(a,`Exported to ${Je}.`)}catch(Ae){y(a,String(Ae),!0)}}async function Y(){if(d(ne))try{const B=await k("create_desktop_shortcut",{instanceId:d(ne).id});y(a,`Shortcut created: ${B}`)}catch(B){y(a,String(B),!0)}}async function L(B,Ae){y(_,!1),await Me(),B?.id&&y(O,B.id,!0),y(a,Ae||`Instance ${B?.name??""} created.`,!0)}function te(B){y(M,B,!0)}const ne=Gt(()=>d(Ce).find(B=>B.id===d(O))??null);let xe=ve(null),De=0;Kn(()=>{const B=d(ne);d(M);const Ae=++De;y(xe,null),B&&k("list_instance_mods",{instanceId:B.id}).then(Je=>{Ae===De&&y(xe,Je.length,!0)}).catch(()=>{Ae===De&&y(xe,null)})});async function Ye(){try{y(fe,await k("get_java_prefs"),!0),y(W,d(fe).java_path??"",!0),y(Q,d(fe).min_memory_mb,!0),y(J,d(fe).max_memory_mb,!0),y(X,""),d(p).length===0&&await ce()}catch{}}async function qe(){y(X,"");try{await k("set_java_prefs",{javaPath:d(W).trim()||null,minMemoryMb:Number(d(Q))||0,maxMemoryMb:Number(d(J))||0}),y(X,"Java settings saved.")}catch(B){y(X,String(B),!0)}}async function I(){y(A,!0);try{y(T,await k("get_storage"),!0),y(F,d(T).is_default_shared?"":d(T).shared_dir,!0),y(S,d(T).is_default_instances?"":d(T).instances_dir,!0)}catch(B){y(ie,String(B),!0)}finally{y(A,!1)}}async function Ie(){y(A,!0),y(ie,"");try{await k("set_shared_dir",{path:d(F).trim()||null}),y(T,await k("get_storage"),!0),y(F,d(T).is_default_shared?"":d(T).shared_dir,!0),y(S,d(T).is_default_instances?"":d(T).instances_dir,!0),y(ie,"Storage updated."),await Me()}catch(B){y(ie,String(B),!0)}finally{y(A,!1)}}async function H(){y(F,""),await Ie()}async function ge(){y(A,!0),y(ie,"");try{await k("set_instances_dir",{path:d(S).trim()||null}),y(T,await k("get_storage"),!0),y(S,d(T).is_default_instances?"":d(T).instances_dir,!0),y(ie,"Storage updated."),await Me(),d(O)&&!d(Ce).some(B=>B.id===d(O))&&y(O,null)}catch(B){y(ie,String(B),!0)}finally{y(A,!1)}}async function Ne(){y(S,""),await ge()}async function it(){y(A,!0),y(ie,"");try{await k("clean_staging"),y(ie,"Staging cleaned.")}catch(B){y(ie,String(B),!0)}finally{y(A,!1)}}async function at(){try{y(c,await k("get_accounts"),!0),y(u,await k("get_active_account"),!0)}catch{}}function pt(B){return{offline:"Offline",microsoft:"Microsoft"}[B.account_type.type]??"Yggdrasil"}Ji(()=>{const B=[],Ae=Je=>{if(Je.key==="Escape"){const sn=oc();if(sn){sn();return}d(Te)?y(Te,null):d(G)?(y(G,null),y(we,"")):d(M)?y(M,null):d(O)?y(O,null):d(f)?y(f,!1):d(m)?y(m,!1):d(Re)&&y(Re,!1);return}if(d(Te)||d(G)||d(f)||d(m)||d(M)||d(Re)||oc()||Je.target?.closest?.("input, textarea, select, [contenteditable]"))return;const wt=Ue();if(!wt.length)return;const Vt=wt.findIndex(sn=>sn.id===d(O));let Wt=null;if(Je.key==="ArrowDown"||Je.key==="ArrowRight")Wt=Vt+1;else if(Je.key==="ArrowUp"||Je.key==="ArrowLeft")Wt=Vt<0?0:Vt-1;else if(Je.key==="Enter"&&Vt>=0&&document.activeElement===document.body){Je.preventDefault(),Ve(wt[Vt].id);return}Wt!=null&&wt[Wt]&&(Je.preventDefault(),y(O,wt[Wt].id,!0))};return window.addEventListener("keydown",Ae),(async()=>{try{y(t,await k("get_version"),!0)}catch{y(t,"dev")}try{B.push(await window.__TAURI__.event.listen("launch-log",Je=>Fe(Je.payload))),B.push(await window.__TAURI__.event.listen("tauri://drag-drop",Je=>{const ft=Je.payload?.paths?.[0];ft&&ft.endsWith(".mrpack")&&(d(m)?y(h,ft,!0):y(D,ft,!0))}))}catch{}await at(),await Me(),await I();try{const Je=await k("get_startup_launch");Je&&d(Ce).some(ft=>ft.id===Je)&&Ve(Je)}catch{}})(),()=>B.forEach(Je=>Je())});var Bt=NM(),de=V(Bt),Be=V(de),Ze=P(V(Be),2);{var mt=B=>{var Ae=_M();le(B,Ae)};Ke(Ze,B=>{d(o)&&B(mt)})}var _t=P(Be,2),an=V(_t);Nt(an,17,()=>s,B=>B.id,(B,Ae)=>{var Je=bM(),ft=V(Je),wt=me(ft,!0),Vt=P(ft,2);{var Wt=sn=>{var ri=xM(),pi=me(ri,!0);ze(()=>_e(pi,d(Ae).label)),le(sn,ri)};Ke(Vt,sn=>{d(o)&&sn(Wt)})}ze(()=>{Mt(Je,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${d(o)?"":"justify-center"} ${d(i)===d(Ae).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),$e(Je,"title",d(Ae).label),_e(wt,d(Ae).icon)}),oe("click",Je,()=>{y(i,d(Ae).id,!0),y(M,null),d(Ae).id==="settings"&&(Ye(),d(T)||I())}),le(B,Je)});var Pt=P(an,2),Jt=P(V(Pt),2);{var vn=B=>{var Ae=yM();le(B,Ae)};Ke(Jt,B=>{d(o)&&B(vn)})}var _n=P(_t,2),Pn=V(_n),ti=V(Pn);{var ni=B=>{var Ae=Si();ze(Je=>_e(Ae,Je),[()=>d(u).username[0]?.toUpperCase()]),le(B,Ae)},C=B=>{var Ae=Si("?");le(B,Ae)};Ke(ti,B=>{d(u)?B(ni):B(C,-1)})}var j=P(Pn,2);{var re=B=>{var Ae=MM(),Je=V(Ae),ft=me(Je,!0),wt=P(Je,2),Vt=me(wt,!0);ze(Wt=>{_e(ft,d(u)?d(u).username:"Add account"),_e(Vt,Wt)},[()=>d(u)?pt(d(u)):"Offline"]),le(B,Ae)};Ke(j,B=>{d(o)&&B(re)})}var Z=P(_n,2),ue=me(Z,!0),je=P(de,2),et=V(je),tt=V(et),rt=V(tt);{var ct=B=>{var Ae=SM(),Je=Ct(Ae),ft=P(Je,2),wt=me(ft,!0);ze(()=>{$e(ft,"title",d(M)?.name),_e(wt,d(M)?.name)}),oe("click",Je,()=>y(M,null)),le(B,Ae)},nt=B=>{var Ae=EM(),Je=Ct(Ae),ft=me(Je);ze(()=>_e(ft,`TwilightMC Bolide (alpha-v${d(t)??""})`)),le(B,Ae)};Ke(rt,B=>{d(w)==="edit"?B(ct):B(nt,-1)})}var st=P(tt,2),Et=me(st,!0),Tt=P(et,2),xn=V(Tt);{var zn=B=>{nm(B,{get instance(){return d(M)},get storage(){return d(T)},onback:()=>y(M,null),onopenconsole:()=>y(Re,!0)})},It=B=>{hg(B,{get version(){return d(t)},get storage(){return d(T)},get runtimes(){return d(p)},get scanning(){return d(g)},get javaError(){return d(v)},get storageBusy(){return d(A)},get storageMsg(){return d(ie)},get javaMsg(){return d(X)},get gameRunning(){return d(Pe)},onback:()=>y(i,"instances"),onscanjava:ce,onsaveprefs:qe,onsaveshared:Ie,onresetshared:H,onsaveinstances:ge,onresetinstances:Ne,oncleanstaging:it,onopenurl:Ae=>k("open_path",{path:Ae}).catch(Je=>y(a,String(Je),!0)),get theme(){return d(r)},set theme(Ae){y(r,Ae,!0)},get javaPath(){return d(W)},set javaPath(Ae){y(W,Ae,!0)},get minMem(){return d(Q)},set minMem(Ae){y(Q,Ae,!0)},get maxMem(){return d(J)},set maxMem(Ae){y(J,Ae,!0)},get sharedInput(){return d(F)},set sharedInput(Ae){y(F,Ae,!0)},get instancesInput(){return d(S)},set instancesInput(Ae){y(S,Ae,!0)}})},ut=B=>{var Ae=TM(),Je=Ct(Ae),ft=V(Je),wt=P(ft,2),Vt=P(wt,2),Wt=P(Vt,2),sn=P(Wt,2),ri=P(sn,4),pi=me(ri,!0),tr=P(Je,2);{let Hn=Gt(Ue);Fp(tr,{get instances(){return d(Hn)},get error(){return d(U)},get query(){return d(Se)},get selectedId(){return d(O)},get gameRunning(){return d(Pe)},get menuFor(){return d(Te)},onselect:Xe,onplay:Ve,ontogglemenu:fn=>y(Te,d(Te)===fn?null:fn,!0),onedit:te,onopenfolder:x,onviewlogs:()=>y(Re,!0),ondelete:N,onclosemenu:()=>y(Te,null),onadd:he})}ze((Hn,fn)=>{wt.disabled=!d(T),$e(wt,"title",d(T)?d(T).instances_dir:""),$e(ri,"title",Hn),_e(pi,fn)},[()=>as(d(r))?"Twilight Light":"Twilight Dark",()=>as(d(r))?"☀":"☾"]),oe("click",ft,he),oe("click",wt,R),oe("click",Vt,()=>y(m,!0)),oe("click",Wt,()=>{y(i,"settings"),Ye(),d(T)||I()}),Ht(sn,()=>d(Se),Hn=>y(Se,Hn)),oe("click",ri,ee),le(B,Ae)},_a=B=>{var Ae=wM(),Je=Ct(Ae),ft=me(Je,!0),wt=P(Je,2),Vt=me(wt,!0);ze(()=>{_e(ft,l[d(i)][0]),_e(Vt,l[d(i)][1])}),le(B,Ae)};Ke(xn,B=>{d(w)==="edit"&&d(M)?B(zn):d(i)==="settings"?B(It,1):d(i)==="instances"?B(ut,2):B(_a,-1)})}var Lt=P(Tt,2),ii=V(Lt),Qi=V(ii),Oi=V(Qi),xa=P(Oi,4);{var Qt=B=>{var Ae=AM();le(B,Ae)};Ke(xa,B=>{d(Pe)&&B(Qt)})}var hi=P(Qi,2),$i=V(hi),$t=P($i,2),er=P($t,2),ao=P(er,2);{var es=B=>{var Ae=RM();oe("click",Ae,()=>y(Re,!1)),le(B,Ae)};Ke(ao,B=>{d(Re)&&B(es)})}var Gl=P(ii,2);Nt(Gl,21,()=>d(K),Hd,(B,Ae)=>{var Je=CM(),ft=me(Je,!0);ze(wt=>{Mt(Je,1,`whitespace-pre-wrap break-all ${wt??""}`),_e(ft,d(Ae).line)},[()=>Ge(d(Ae))]),le(B,Je)},B=>{var Ae=PM();le(B,Ae)}),Vd(Gl,B=>y(Oe,B),()=>d(Oe));var Vl=P(je,2);{var Nf=B=>{Nm(B,{get instance(){return d(ne)},get storage(){return d(T)},get gameRunning(){return d(Pe)},get modsCount(){return d(xe)},get groups(){return d(se)},onlaunch:()=>Ve(d(ne).id),onkill:Le,onedit:()=>te(d(ne)),onchangegroup:pe,onopenfolder:()=>x(d(ne).id),onexport:ye,oncopy:ke,ondelete:()=>N(d(ne).id),onshortcut:Y})};Ke(Vl,B=>{d(w)==="instances"&&d(ne)&&B(Nf)})}var Wl=P(Vl,2);{var Of=B=>{cm(B,{get path(){return d(D)},onclose:()=>y(D,null),oninstalled:async Ae=>{y(D,null),await Me(),y(O,Ae,!0),y(a,"Modpack installed.")}})};Ke(Wl,B=>{d(D)&&B(Of)})}var Xl=P(Wl,2);{var Ff=B=>{vM(B,{get accounts(){return d(c)},get active(){return d(u)},onclose:()=>y(f,!1),onrefresh:at})};Ke(Xl,B=>{d(f)&&B(Ff)})}var jl=P(Xl,2);{var kf=B=>{Cm(B,{get groups(){return d(se)},onclose:()=>y(_,!1),oncreated:L})};Ke(jl,B=>{d(_)&&B(kf)})}var Yl=P(jl,2);{var Bf=B=>{var Ae=DM(),Je=V(Ae),ft=V(Je),wt=P(V(ft),2),Vt=P(ft,2),Wt=V(Vt),sn=P(Wt,2),ri=P(sn,2);{var pi=en=>{var ba=LM(),Gf=me(ba,!0);ze(()=>_e(Gf,d(b))),le(en,ba)};Ke(ri,en=>{d(b)&&en(pi)})}var tr=P(Vt,2),Hn=V(tr),fn=P(Hn,2),ts=me(fn,!0);ze(en=>{fn.disabled=en,_e(ts,d(E)?"Installing…":"Install .mrpack")},[()=>d(E)||!d(h).trim()]),oe("click",Ae,en=>{en.target===en.currentTarget&&!d(E)&&y(m,!1)}),oe("click",wt,()=>y(m,!1)),yr("dragover",Wt,en=>en.preventDefault()),yr("drop",Wt,en=>{en.preventDefault();const ba=en.dataTransfer?.files?.[0]?.path;ba&&y(h,ba,!0)}),Ht(sn,()=>d(h),en=>y(h,en)),oe("click",Hn,()=>y(m,!1)),oe("click",fn,q),le(B,Ae)};Ke(Yl,B=>{d(m)&&B(Bf)})}var zf=P(Yl,2);{var Hf=B=>{var Ae=UM(),Je=V(Ae),ft=P(V(Je),2),wt=P(V(ft)),Vt=me(wt,!0),Wt=P(ft,2);{var sn=fn=>{var ts=IM(),en=me(ts,!0);ze(()=>_e(en,d(we))),le(fn,ts)};Ke(Wt,fn=>{d(we)&&fn(sn)})}var ri=P(Wt,2),pi=V(ri),tr=P(pi,2),Hn=P(tr,2);ze(()=>{_e(Vt,d(G)),pi.disabled=d(Ee),tr.disabled=d(Ee),Hn.disabled=d(Ee)}),oe("click",Ae,fn=>{fn.target===fn.currentTarget&&!d(Ee)&&y(G,null)}),oe("click",pi,()=>y(G,null)),oe("click",tr,()=>ae(!0)),oe("click",Hn,()=>ae(!1)),le(B,Ae)};Ke(zf,B=>{d(G)&&B(Hf)})}ze(()=>{Mt(de,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${d(o)?"w-60":"w-16"}`),Mt(Pt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${d(o)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),Mt(_n,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${d(o)?"":"justify-center"}`),$e(_n,"title",d(u)?d(u).username:"Add account"),Mt(Z,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${d(o)?"":"opacity-0 group-hover/nav:opacity-100"}`),_e(ue,d(o)?"«":"»"),_e(Et,d(a)),Mt(Lt,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${d(Re)?"h-48":"h-10"}`),$e(Qi,"title",d(Re)?"Collapse console":"Expand console"),Mt(Oi,1,`h-2 w-2 shrink-0 rounded-full ${d(Pe)?"animate-pulse bg-green-500":"bg-(--border)"}`),$i.disabled=!d(K).length,$t.disabled=!d(K).length,er.disabled=!d(Pe)}),oe("dblclick",Be,()=>y(o,!d(o))),oe("click",Pt,he),oe("click",_n,()=>y(f,!0)),oe("click",Z,()=>y(o,!d(o))),oe("click",Qi,()=>y(Re,!d(Re))),oe("click",$i,B=>{B.stopPropagation(),We()}),oe("click",$t,B=>{B.stopPropagation(),$()}),oe("click",er,B=>{B.stopPropagation(),Le()}),le(n,Bt),Cn()}ei(["dblclick","click"]);dp(OM,{target:document.getElementById("app")});
