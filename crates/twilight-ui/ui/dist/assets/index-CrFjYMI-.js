(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const sd=!1;var $s=Array.isArray,th=Array.prototype.indexOf,Va=Array.prototype.includes,eo=Array.from,od=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,nh=Object.getOwnPropertyDescriptors,ih=Object.prototype,rh=Array.prototype,ld=Object.getPrototypeOf,nc=Object.isExtensible;const ah=()=>{};function sh(n){for(var e=0;e<n.length;e++)n[e]()}function cd(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}function ud(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const i of n)if(t.push(i),t.length===e)break;return t}const xn=2,aa=4,to=8,dd=1<<24,ni=16,oi=32,er=64,il=128,Rl=256,ai=512,en=1024,Pt=2048,On=4096,Sn=8192,un=16384,ma=32768,Wa=1<<25,sa=65536,Gs=1<<17,oh=1<<18,va=1<<19,lh=1<<20,pi=1<<25,Hs=1<<21,$r=1<<22,Zi=1<<23,vr=Symbol("$state"),fd=Symbol("component"),ch=Symbol("legacy props"),uh=Symbol(""),hd=Symbol("attributes"),rl=Symbol("class"),al=Symbol("style"),sl=Symbol("text"),Os=Symbol("form reset"),es=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},dh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),fh=1,hh=2,pd=4,ph=8,mh=16,vh=1,gh=4,_h=8,xh=16,bh=1,yh=2,md={},$t=Symbol("uninitialized"),Mh="http://www.w3.org/1999/xhtml";function Sh(){console.warn("https://svelte.dev/e/derived_inert")}function Eh(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function wh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function vd(n){return n===this.v}function Th(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function gd(n){return!Th(n,this.v)}function _d(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ah(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Rh(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Ch(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ph(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Lh(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Dh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ih(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Uh(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Nh(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Oh(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Fh(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let kh=!1,dn=null;function oa(n){dn=n}function En(n,e=!1,t){dn={p:dn,i:!1,c:null,e:null,s:n,x:null,r:xt,l:null}}function wn(n){var e=dn,t=e.e;if(t!==null){e.e=null;for(var i of t)Fd(i)}return e.i=!0,dn=e.p,Cl(n)}function Cl(n={}){return od(n,fd,{value:!0}),n}function xd(){return!0}let hr=[];function bd(){var n=hr;hr=[],sh(n)}function Pi(n){if(hr.length===0&&!ka){var e=hr;queueMicrotask(()=>{e===hr&&bd()})}hr.push(n)}function Bh(){for(;hr.length>0;)bd()}const zh=-7169;function qt(n,e){n.f=n.f&zh|e}function Pl(n){(n.f&ai)!==0||n.deps===null?qt(n,en):qt(n,On)}function yd(n,e){(n.f&Pt)!==0?e.set(n,Pt):(n.f&On)!==0&&e.get(n)!==Pt&&e.set(n,On),qt(n,en)}let ic=!1;function Gh(){ic||(ic=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e[Os]?.()})},{capture:!0}))}function ga(n){var e=vt,t=xt;Xn(null),gi(null);try{return n()}finally{Xn(e),gi(t)}}function Md(n,e,t,i=t){n.addEventListener(e,()=>ga(t));const r=n[Os];r?n[Os]=()=>{r(),i(!0)}:n[Os]=()=>i(!0),Gh()}function Hh(n,e,t,i){const r=ja;var a=n.filter(v=>!v.settled),o=e.map(r);if(t.length===0&&a.length===0){i(o);return}var s=xt,l=Vh(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(v=>v.promise)):null;function d(v){if((s.f&un)===0){l();try{i([...o,...v])}catch(g){hi(g,s)}Vs()}}var f=Sd();if(t.length===0){u.then(()=>d([])).finally(f);return}function p(){Promise.all(t.map(v=>Wh(v))).then(d).catch(v=>hi(v,s)).finally(f)}u?u.then(()=>{if((s.f&un)!==0){f();return}l(),p(),Vs()}):p()}function Vh(){var n=xt,e=vt,t=dn,i=ut;return function(a=!0){gi(n),Xn(e),oa(t),a&&(n.f&un)===0&&(i?.activate(),i?.apply())}}function Vs(n=!0){gi(null),Xn(null),oa(null),n&&ut?.deactivate()}function Sd(){var n=xt,e=n.b,t=ut,i=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(i,n),()=>{e?.update_pending_count(-1,t),t.decrement(i,n)}}function ja(n){var e=xn|Pt;return xt!==null&&(xt.f|=va),{ctx:dn,deps:null,effects:null,equals:vd,f:e,fn:n,reactions:null,rv:0,v:$t,wv:0,parent:xt,ac:null}}const Ua=Symbol("obsolete");function Wh(n,e,t){let i=xt;i===null&&Ah();var r=void 0,a=Sr($t),o=!vt,s=new Set;return ap(()=>{var l=xt,u=cd();r=u.promise;try{Promise.resolve(n()).then(u.resolve,v=>{v!==es&&u.reject(v)}).finally(Vs)}catch(v){u.reject(v),Vs()}var d=ut;if(o){if((l.f&ma)!==0)var f=Sd();if(i.b?.is_rendered())d.async_deriveds.get(l)?.reject(Ua);else for(const v of s.values())v.reject(Ua);s.add(u),d.async_deriveds.set(l,u)}const p=(v,g=void 0)=>{f?.(),s.delete(u),g!==Ua&&(d.activate(),g?(a.f|=Zi,la(a,g)):((a.f&Zi)!==0&&(a.f^=Zi),la(a,v)),d.deactivate())};u.promise.then(p,v=>p(null,v||"unknown"))}),Nl(()=>{for(const l of s)l.reject(Ua)}),new Promise(l=>{function u(d){function f(){d===r?l(a):u(r)}d.then(f,f)}u(r)})}function St(n){const e=ja(n);return Vd(e),e}function Ed(n){const e=ja(n);return e.equals=gd,e}function jh(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Pn(e[t])}}function Ll(n){var e,t=xt,i=n.parent;if(!Fi&&i!==null&&n.v!==$t&&(i.f&(un|Sn))!==0)return Sh(),n.v;gi(i);try{jh(n),e=qd(n)}finally{gi(t)}return e}function wd(n){var e=Ll(n);if(!n.equals(e)&&(n.wv=jd(),(!ut?.is_fork||n.deps===null)&&(ut!==null?(ut.capture(n,e,!0),ea?.capture(n,e,!0)):n.v=e,n.deps===null))){qt(n,en);return}Fi||(ii!==null?(Ul()||ut?.is_fork)&&ii.set(n,e):Pl(n))}function Xh(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&ga(()=>{e.ac.abort(es),e.ac=null}),e.fn!==null&&(e.teardown=ah),qa(e,0),Fl(e))}function Td(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&ca(e)}let po=null,Ar=null,ut=null,ea=null,ii=null,ol=null,ka=!1,mo=!1,Ba=null,Fs=null;var rc=0;let qh=1;class tr{id=qh++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Ar===null?po=Ar=this:(Ar.next=this,this.prev=Ar),Ar=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=this.#o.get(e);if(i){this.#o.delete(e);for(var r of i.d)qt(r,Pt),t(r);for(r of i.m)qt(r,On),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&un)!==0||(a.f&(Pt|On))===0)){for(var t=a,i=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(er|oi))!==0){if((r&en)===0){i=!0;break}t.f^=en}}i||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,l]of this.#r)qt(s,l),this.schedule(s);this.apply();for(var e=Ba=[],t=[],i=Fs=[];this.#i.length>0;){rc++>1e3&&(this.#f(),Kh());for(const s of this.#u())try{this.#x(s,e,t)}catch(l){throw Cd(s),this.#p()||this.discard(),l}}if(ut=null,i.length>0){var r=tr.ensure();for(const s of i)r.schedule(s)}if(Ba=null,Fs=null,this.#p()){this.#v(t),this.#v(e);for(const[s,l]of this.#o)Rd(s,l);i.length>0&&ut.#m();return}const a=this.#M();if(a){this.#v(t),this.#v(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),ea=this,ac(t),ac(e),ea=null,this.#n?.resolve();var o=ut;this.#e===0&&(this.#i.length===0||o!==null)&&this.#f(),o!==null&&(mi.clear(),o.#m())}#x(e,t,i){e.f^=en;for(var r=e.first;r!==null;){var a=r.f,o=(a&(oi|er))!==0,s=o&&(a&en)!==0,l=s||(a&Sn)!==0||this.#o.has(r);if(!l&&r.fn!==null){o?r.f^=en:(a&aa)!==0?t.push(r):ns(r)&&((a&ni)!==0&&this.add_dirty_reaction(r,On),ca(r));var u=r.first;if(u!==null){r=u;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#M(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,i]]of this.current)if(!i&&e.current.has(t))return!0;return!1}#d(e){for(const[i,r]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,r);for(const[i,r]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=i=>{var r=i.reactions;if(r!==null&&!((i.f&xn)!==0&&(i.f&(Pt|On))===0))for(const s of r){var a=s.f;if((a&xn)!==0)t(s);else{var o=s;a&($r|ni)&&!this.async_deriveds.has(o)&&(this.#r.delete(o),qt(o,Pt),this.schedule(o))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),e.#f(),ut=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)yd(e[t],this.#r)}capture(e,t,i=!1){e.v!==$t&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Zi)===0&&(this.current.set(e,[t,i]),ii?.set(e,t)),this.is_fork||(e.v=t)}activate(){ut=this}deactivate(){ut=null,ii=null}flush(){try{mo=!0,ut=this,this.#m()}finally{rc=0,ol=null,Ba=null,Fs=null,mo=!1,ut=null,ii=null,mi.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Ua);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let f=po;f!==null;f=f.next){var e=f.id<this.id,t=[];for(const[p,[v,g]]of this.current){if(f.current.has(p)){var i=f.current.get(p)[0];if(e&&v!==i)f.current.set(p,[v,g]);else continue}t.push(p)}if(e)for(const[p,v]of this.async_deriveds){const g=f.async_deriveds.get(p);g&&v.promise.then(g.resolve).catch(g.reject)}var r=[...f.current.keys()].filter(p=>!f.current.get(p)[1]);if(!(!f.started||r.length===0)){var a=r.filter(p=>!this.current.has(p));if(a.length===0)e&&f.discard();else if(t.length>0){if(e)for(const p of this.#h)f.unskip_effect(p,v=>{(v.f&(ni|$r))!==0?f.schedule(v):f.#v([v])});f.activate();var o=new Set,s=new Map;for(var l of t)Ad(l,a,o,s);s=new Map;var u=[...f.current].filter(([p,v])=>{const g=this.current.get(p);return g?g[0]!==v[0]||g[1]!==v[1]:!0}).map(([p])=>p);if(u.length>0)for(const p of this.#a)(p.f&(un|Sn|Gs))===0&&Dl(p,u,s)&&((p.f&($r|ni))!==0?(qt(p,Pt),f.schedule(p)):f.add_dirty_reaction(p,Pt));if(f.#i.length>0&&!f.#c){f.apply();for(var d of f.#u())f.#x(d,[],[])}f.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let i=this.#s.get(t)??0;this.#s.set(t,i+1)}}decrement(e,t){if(this.#e-=1,e){let i=this.#s.get(t)??0;i===1?this.#s.delete(t):this.#s.set(t,i-1)}this.#c||(this.#c=!0,Pi(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,i]of e)this.add_dirty_reaction(t,i);e.clear()}add_dirty_reaction(e,t){(t===Pt||this.#r.get(e)!==Pt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=cd()).promise}static ensure(){if(ut===null){const e=ut=new tr;!mo&&!ka&&Pi(()=>{e.started||e.flush()})}return ut}apply(){{ii=null;return}}schedule(e){if(ol=e,e.b?.is_pending&&(e.f&(aa|to|dd))!==0&&(e.f&ma)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?po=t:e.next=t,t===null?Ar=e:t.prev=e,this.linked=!1}}}function Yh(n){var e=ka,t=ea;ea=null,ka=!0;try{for(var i;;){if(Bh(),ut===null)return i;ut.flush()}}finally{ka=e,ea=t}}function Kh(){try{Dh()}catch(n){hi(n,ol)}}let Ri=null;function ac(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(un|Sn))===0&&ns(i)&&(Ri=new Set,ca(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&zd(i),Ri?.size>0)){mi.clear();for(const r of Ri){if((r.f&(un|Sn))!==0)continue;const a=[r];let o=r.parent;for(;o!==null;)Ri.has(o)&&(Ri.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const l=a[s];(l.f&(un|Sn))===0&&ca(l)}}Ri.clear()}}Ri=null}}function Ad(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const a=r.f;(a&xn)!==0?Ad(r,e,t,i):(a&($r|ni))!==0&&(a&Pt)===0&&Dl(r,e,i)&&(qt(r,Pt),Il(r))}}function Dl(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Va.call(e,r))return!0;if((r.f&xn)!==0&&Dl(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Il(n){ut.schedule(n)}function Rd(n,e){if(!((n.f&oi)!==0&&(n.f&en)!==0)){(n.f&Pt)!==0?e.d.push(n):(n.f&On)!==0&&e.m.push(n),qt(n,en);for(var t=n.first;t!==null;)Rd(t,e),t=t.next}}function Cd(n){qt(n,en);for(var e=n.first;e!==null;)Cd(e),e=e.next}let Ws=new Set;const mi=new Map;let Pd=!1;function Sr(n,e){var t={f:0,v:n,reactions:null,equals:vd,rv:0,wv:0};return t}function pe(n,e){const t=Sr(n);return Vd(t),t}function Zh(n,e=!1,t=!0){const i=Sr(n);return e||(i.equals=gd),i}function x(n,e,t=!1){vt!==null&&(!ri||(vt.f&Gs)!==0)&&xd()&&(vt.f&(xn|ni|$r|Gs))!==0&&(vi===null||!vi.has(n))&&Oh();let i=t?Lt(e):e;return la(n,i,Fs)}var dr=null,ll=0;function la(n,e,t=null){if(!n.equals(e)){Fi?mi.set(n,e):mi.has(n)||mi.set(n,n.v);var i=tr.ensure();if(i.capture(n,e),(n.f&xn)!==0){const r=n;(n.f&Pt)!==0&&Ll(r),ii===null&&Pl(r)}n.wv=jd(),dr=null,ll=0,Ld(n,Pt,t),dr=null,xt!==null&&(xt.f&en)!==0&&(xt.f&(oi|er))===0&&(Gn===null?lp([n]):Gn.push(n)),!i.is_fork&&Ws.size>0&&!Pd&&Jh()}return e}function Jh(){Pd=!1;for(const n of Ws){(n.f&en)!==0&&qt(n,On);let e;try{e=ns(n)}catch{e=!0}e&&ca(n)}Ws.clear()}function za(n){x(n,n.v+1)}function Ld(n,e,t){var i=n.reactions;if(i!==null){var r=i.length;if(ll+=r,ll>1e5&&dr===null&&(dr=new Set),dr!==null){if(dr.has(n))return;dr.add(n)}for(var a=0;a<r;a++){var o=i[a],s=o.f,l=(s&Pt)===0;if(l&&qt(o,e),(s&Gs)!==0)Ws.add(o);else if((s&xn)!==0){var u=o;ii?.delete(u),Ld(u,On,t)}else if(l){var d=o;(s&ni)!==0&&Ri!==null&&Ri.add(d),t!==null?t.push(d):Il(d)}}}}function Lt(n){if(typeof n!="object"||n===null||vr in n||fd in n)return n;const e=ld(n);if(e!==ih&&e!==rh)return n;var t=new Map,i=$s(n),r=pe(0),a=_r,o=s=>{if(_r===a)return s();var l=vt,u=_r;Xn(null),cc(a);var d=s();return Xn(l),cc(u),d};return i&&t.set("length",pe(n.length)),new Proxy(n,{defineProperty(s,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Uh();var d=t.get(l);return d===void 0?o(()=>{var f=pe(u.value);return t.set(l,f),f}):x(d,u.value,!0),!0},deleteProperty(s,l){var u=t.get(l);if(u===void 0){if(l in s){const d=o(()=>pe($t));t.set(l,d),za(r)}}else x(u,$t),za(r);return!0},get(s,l,u){if(l===vr)return n;var d=t.get(l),f=l in s;if(d===void 0&&(!f||Qr(s,l)?.writable)&&(d=o(()=>{var v=Lt(f?s[l]:$t),g=pe(v);return g}),t.set(l,d)),d!==void 0){var p=c(d);return p===$t?void 0:p}return Reflect.get(s,l,u)},getOwnPropertyDescriptor(s,l){this.has?.(s,l);var u=Reflect.getOwnPropertyDescriptor(s,l),d=t.get(l);if(d!==void 0){var f=c(d);if(f===$t)return;if(u&&"value"in u)u.value=f;else return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(s,l){if(l===vr)return!0;var u=t.get(l),d=u!==void 0&&u.v!==$t||Reflect.has(s,l);if(u!==void 0||(xt!==null||vt!==null)&&(!d||Qr(s,l)?.writable)){u===void 0&&(u=o(()=>{var p=d?Lt(s[l]):$t,v=pe(p);return v}),t.set(l,u));var f=c(u);if(f===$t)return!1}return d},set(s,l,u,d){var f=t.get(l),p=l in s;if(i&&l==="length")for(var v=u;v<f.v;v+=1){var g=t.get(v+"");g!==void 0?x(g,$t):v in s&&(g=o(()=>pe($t)),t.set(v+"",g))}if(f===void 0)(!p||Qr(s,l)?.writable)&&(f=o(()=>pe(void 0)),x(f,Lt(u)),t.set(l,f));else{p=f.v!==$t;var _=o(()=>Lt(u));x(f,_)}var m=Reflect.getOwnPropertyDescriptor(s,l);if(m?.set&&m.set.call(d,u),!p){if(i&&typeof l=="string"){var h=t.get("length"),E=Number(l);Number.isInteger(E)&&E>=h.v&&x(h,E+1)}za(r)}return!0},ownKeys(s){c(r);var l=Reflect.ownKeys(s).filter(f=>{var p=t.get(f);return p===void 0||p.v!==$t});for(var[u,d]of t)d.v!==$t&&!(u in s)&&l.push(u);return l},setPrototypeOf(){Nh()}})}function sc(n){try{if(n!==null&&typeof n=="object"&&vr in n)return n[vr]}catch{}return n}function Dd(n,e){return Object.is(sc(n),sc(e))}var oc,Id,Ud,Nd;function Qh(){if(oc===void 0){oc=window,Id=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Ud=Qr(e,"firstChild").get,Nd=Qr(e,"nextSibling").get,nc(n)&&(n[rl]=void 0,n[hd]=null,n[al]=void 0,n.__e=void 0),nc(t)&&(t[sl]=void 0)}}function Ii(n=""){return document.createTextNode(n)}function Xa(n){return Ud.call(n)}function ts(n){return Nd.call(n)}function O(n,e){return Xa(n)}function At(n,e=!1){{var t=Xa(n);return t instanceof Comment&&t.data===""?ts(t):t}}function ve(n,e=!1){return Xa(n)}function A(n,e=1,t=!1){let i=n;for(;e--;)i=ts(i);return i}function $h(n){n.textContent=""}function Od(){return!1}function ep(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function tp(n){var e=xt;if(e===null)return vt.f|=Zi,n;if((e.f&ma)===0&&(e.f&aa)===0)throw n;hi(n,e)}function hi(n,e){if(n===md)throw n;if(!(e!==null&&(e.f&un)!==0)){for(;e!==null;){if((e.f&il)!==0&&(e.f&(un|Wa))===0){if((e.f&ma)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function np(n){xt===null&&(vt===null&&Lh(),Ph()),Fi&&Ch()}function ip(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function zi(n,e){var t=xt;t!==null&&(t.f&Sn)!==0&&(n|=Sn);var i={ctx:dn,deps:null,nodes:null,f:n|Pt|ai,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};ut?.register_created_effect(i);var r=i;if((n&aa)!==0)Ba!==null?Ba.push(i):tr.ensure().schedule(i);else if(e!==null){try{ca(i)}catch(o){throw Pn(i),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&va)===0&&(r=r.first,(n&ni)!==0&&(n&sa)!==0&&r!==null&&(r.f|=sa))}if(r!==null&&(r.parent=t,t!==null&&ip(r,t),vt!==null&&(vt.f&xn)!==0&&(n&er)===0)){var a=vt;(a.effects??=[]).push(r)}return i}function Ul(){return vt!==null&&!ri}function Nl(n){const e=zi(to,null);return qt(e,en),e.teardown=n,e}function vn(n){np();var e=xt.f,t=!vt&&(e&oi)!==0&&dn!==null&&!dn.i;if(t){var i=dn;(i.e??=[]).push(n)}else return Fd(n)}function Fd(n){return zi(aa|lh,n)}function rp(n){tr.ensure();const e=zi(er|va,n);return(t={})=>new Promise(i=>{t.outro?gr(e,()=>{Pn(e),i(void 0)}):(Pn(e),i(void 0))})}function kd(n){return zi(aa,n)}function ap(n){return zi($r|va,n)}function Ol(n,e=0){return zi(to|e,n)}function Pe(n,e=[],t=[],i=[]){Hh(i,e,t,r=>{zi(to,()=>{n(...r.map(c))})})}function no(n,e=0){var t=zi(ni|e,n);return t}function Hn(n){return zi(oi|va,n)}function Bd(n){var e=n.teardown;if(e!==null){const t=Fi,i=vt;lc(!0),Xn(null);try{e.call(null)}catch(r){hi(r,n.parent)}finally{lc(t),Xn(i)}}}function Fl(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&ga(()=>{r.abort(es)});var i=t.next;(t.f&er)!==0?t.parent=null:Pn(t,e),t=i}}function sp(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&oi)===0&&Pn(e),e=t}}function Pn(n,e=!0){var t=!1;(e||(n.f&oh)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(op(n.nodes.start,n.nodes.end),t=!0),n.f|=Wa,Fl(n,e&&!t),qa(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)a.stop();Bd(n),n.f^=Wa,n.f|=un;var r=n.parent;r!==null&&r.first!==null&&zd(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function op(n,e){for(;n!==null;){var t=n===e?null:ts(n);n.remove(),n=t}}function zd(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function gr(n,e,t=!0){var i=[];n.f|=Rl,Gd(n,i,!0);var r=()=>{t&&Pn(n),e&&e()},a=i.length;if(a>0){var o=()=>--a||r();for(var s of i)s.out(o)}else r()}function Gd(n,e,t){if((n.f&Sn)===0){n.f^=Sn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&e.push(s);for(var r=n.first;r!==null;){var a=r.next;if((r.f&er)===0){var o=(r.f&sa)!==0||(r.f&oi)!==0&&(n.f&ni)!==0;Gd(r,e,o?t:!1)}r=a}}}function js(n){n.f&=~Rl,Hd(n,!0)}function Hd(n,e){if((n.f&Rl)===0&&(n.f&Sn)!==0){n.f^=Sn,(n.f&en)===0&&(qt(n,Pt),tr.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&sa)!==0||(t.f&oi)!==0;Hd(t,r?e:!1),t=i}var a=n.nodes&&n.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function kl(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:ts(t);e.append(t),t=r}}let Fi=!1;function lc(n){Fi=n}let vt=null,ri=!1;function Xn(n){vt=n}let xt=null;function gi(n){xt=n}let vi=null;function Vd(n){vt!==null&&((vt.f&Hs)!==0||(vt.f&xn)!==0)&&(vi??=new Set).add(n)}let Cn=null,Un=0,Gn=null;function lp(n){Gn=n}let Wd=1,pr=0,_r=pr;function cc(n){_r=n}function jd(){return++Wd}function ns(n){var e=n.f;if((e&Pt)!==0)return!0;if((e&On)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var a=t[r];if(ns(a)&&wd(a),a.wv>n.wv)return!0}(e&ai)!==0&&ii===null&&qt(n,en)}return!1}function Xd(n,e,t=!0){var i=n.reactions;if(i!==null&&!(vi!==null&&vi.has(n)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&xn)!==0?Xd(a,e,!1):e===a&&(t?qt(a,Pt):(a.f&en)!==0&&qt(a,On),Il(a))}}function qd(n){var e=Cn,t=Un,i=Gn,r=vt,a=vi,o=dn,s=ri,l=_r,u=n.f;Cn=null,Un=0,Gn=null,vt=(u&(oi|er))===0?n:null,vi=null,oa(n.ctx),ri=!1,_r=++pr,n.ac!==null&&(ga(()=>{n.ac.abort(es)}),n.ac=null);try{n.f|=Hs;var d=n.fn,f=d();n.f|=ma;var p=uc(n);if(xd()&&Gn!==null&&!ri&&p!==null&&(n.f&(xn|On|Pt))===0)for(var v=0;v<Gn.length;v++)Xd(Gn[v],n);if(r!==null&&r!==n){if(pr++,r.deps!==null)for(let g=0;g<t;g+=1)r.deps[g].rv=pr;if(e!==null)for(const g of e)g.rv=pr;Gn!==null&&(i===null?i=Gn:i.push(...Gn))}return(n.f&Zi)!==0&&(n.f^=Zi),f}catch(g){return uc(n),tp(g)}finally{n.f^=Hs,Cn=e,Un=t,Gn=i,vt=r,vi=a,oa(o),ri=s,_r=l}}function uc(n){var e=n.deps,t=ut?.is_fork;if(Cn!==null){var i;if(t||qa(n,Un),e!==null&&Un>0)for(e.length=Un+Cn.length,i=0;i<Cn.length;i++)e[Un+i]=Cn[i];else n.deps=e=Cn;if(Ul()&&(n.f&ai)!==0)for(i=Un;i<e.length;i++)(e[i].reactions??=[]).push(n)}else!t&&e!==null&&Un<e.length&&(qa(n,Un),e.length=Un);return e}function cp(n,e){let t=e.reactions;if(t!==null){var i=th.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&xn)!==0&&(Cn===null||!Va.call(Cn,e))){var a=e;(a.f&ai)!==0&&(a.f^=ai),a.v!==$t&&Pl(a),a.ac!==null&&ga(()=>{a.ac.abort(es),a.ac=null,qt(a,Pt)}),Xh(a),qa(a,0)}}function qa(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)cp(n,t[i])}function ca(n){var e=n.f;if((e&un)===0){qt(n,en);var t=xt;xt=n;try{(e&(ni|dd))!==0?sp(n):Fl(n),Bd(n);var i=qd(n);n.teardown=typeof i=="function"?i:null,n.wv=Wd;var r;sd&&kh&&(n.f&Pt)!==0&&n.deps}finally{xt=t}}}async function up(){await Promise.resolve(),Yh()}function c(n){var e=n.f,t=(e&xn)!==0;if(vt!==null&&!ri){var i=xt!==null&&(xt.f&un)!==0;if(!i&&(vi===null||!vi.has(n))){var r=vt.deps;if((vt.f&Hs)!==0)n.rv<pr&&(n.rv=pr,Cn===null&&r!==null&&r[Un]===n?Un++:Cn===null?Cn=[n]:Cn.push(n));else{vt.deps??=[],Va.call(vt.deps,n)||vt.deps.push(n);var a=n.reactions;a===null?n.reactions=[vt]:Va.call(a,vt)||a.push(vt)}}}if(Fi&&mi.has(n))return mi.get(n);if(t){var o=n;if(Fi){var s=o.v;return((o.f&en)===0&&o.reactions!==null||Kd(o))&&(s=Ll(o)),mi.set(o,s),s}var l=(o.f&ai)===0&&!ri&&vt!==null&&(vt.f&ai)!==0,u=(o.f&ma)===0;ns(o)&&(l&&(o.f|=ai),wd(o)),l&&!u&&(Td(o),Yd(o))}if(ii?.has(n))return ii.get(n);if((n.f&Zi)!==0)throw n.v;return n.v}function Yd(n){if(n.f|=ai,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:Va.call(e,n)||e.push(n),(t.f&xn)!==0&&(t.f&ai)===0&&(Td(t),Yd(t))}}function Kd(n){if(n.v===$t)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(mi.has(e)||(e.f&xn)!==0&&Kd(e))return!0;return!1}function _a(n){var e=ri;try{return ri=!0,n()}finally{ri=e}}const dp=["touchstart","touchmove"];function fp(n){return dp.includes(n)}const Na=Symbol("events"),Zd=new Set,cl=new Set;function hp(n,e,t,i={}){function r(a){if(i.capture||ul.call(e,a),!a.cancelBubble)return ga(()=>t?.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(r.__removed=!1,Pi(()=>{r.__removed||e.addEventListener(n,r,i)})):e.addEventListener(n,r,i),r}function Ui(n,e,t,i,r){var a={capture:i,passive:r},o=hp(n,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Nl(()=>{o.__removed=!0,e.removeEventListener(n,o,a)})}function ne(n,e,t){(e[Na]??={})[n]=t}function qn(n){for(var e=0;e<n.length;e++)Zd.add(n[e]);for(var t of cl)t(n)}let vo=null,go=!1;function ul(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],a=r[0]||n.target;vo=n,go||(go=!0,setTimeout(()=>{go=!1,vo=null}));var o=0,s=vo===n&&n[Na];if(s){var l=r.indexOf(s);if(l!==-1&&(e===document||e===window)){n[Na]=e;return}var u=r.indexOf(e);if(u===-1)return;l<=u&&(o=l)}if(a=r[o]||n.target,a!==e){od(n,"currentTarget",{configurable:!0,get(){return a||t}});var d=vt,f=xt;Xn(null),gi(null);try{for(var p,v=[];a!==null&&a!==e;){try{var g=a[Na]?.[i];g!=null&&(!a.disabled||n.target===a)&&g.call(a,n)}catch(_){p?v.push(_):p=_}if(n.cancelBubble)break;o++,a=o<r.length?r[o]:null}if(p){for(let _ of v)queueMicrotask(()=>{throw _});throw p}}finally{n[Na]=e,delete n.currentTarget,Xn(d),gi(f)}}}const pp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function mp(n){return pp?.createHTML(n)??n}function vp(n){var e=ep("template");return e.innerHTML=mp(n.replaceAll("<!>","<!---->")),e.content}function Xs(n,e){var t=xt;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function ue(n,e){var t=(e&bh)!==0,i=(e&yh)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=vp(a?n:"<!>"+n),t||(r=Xa(r)));var o=i||Id?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=Xa(o),l=o.lastChild;Xs(s,l)}else Xs(o,o);return o}}function ui(n=""){{var e=Ii(n+"");return Xs(e,e),e}}function Jd(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Ii();return n.append(e,t),Xs(e,t),n}function $(n,e){n!==null&&n.before(e)}function gp(n){let e=0,t=Sr(0),i;return()=>{Ul()&&(c(t),Ol(()=>(e===0&&(i=_a(()=>n(()=>za(t)))),e+=1,()=>{Pi(()=>{e-=1,e===0&&(i?.(),i=void 0,za(t))})})))}}var _p=sa|va;function xp(n,e,t,i){new bp(n,e,t,i)}class bp{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#u=null;#m=gp(()=>(this.#u=Sr(this.#h),()=>{this.#u=null}));constructor(e,t,i,r){this.#t=e,this.#e=t,this.#s=a=>{var o=xt;o.b=this,o.f|=il,i(a)},this.parent=xt.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=no(()=>{this.#b()},_p)}#x(){try{this.#i=Hn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#M(e){const t=this.#e.failed,{reset:i,invoke_onerror:r}=this.#_(e);Pi(r),t&&(this.#r=Hn(()=>{t(this.#t,()=>e,()=>i)}))}#_(e){var t=!1,i=!1;const r=()=>{if(!this.#d()){if(t){wh();return}t=!0,i&&Fh(),this.#r!==null&&gr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{i=!0,this.#e.onerror?.(e,r),i=!1}catch(o){hi(o,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(un|Wa))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=Hn(()=>e(this.#t)),Pi(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),i=Ii(),r=!1;if(t.append(i),this.#i=this.#y(()=>{try{return Hn(()=>this.#s(i))}catch(a){try{this.error(a),r=!0}catch(o){hi(o,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(ut);return}this.#c===0&&(this.#t.before(t),this.#o=null,gr(this.#a,()=>{this.#a=null}),this.#f(ut))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=Hn(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();kl(this.#i,e);const t=this.#e.pending;this.#a=Hn(()=>t(this.#t))}else this.#f(ut)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){yd(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=xt,i=vt,r=dn;gi(this.#n),Xn(this.#n),oa(this.#n.ctx);try{return tr.ensure(),e()}finally{gi(t),Xn(i),oa(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&gr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#S(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Pi(()=>{this.#p=!1,this.#u&&la(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),c(this.#u)}error(e){if(e===md||!this.#e.onerror&&!this.#e.failed)throw e;ut?.is_fork?(this.#i&&ut.skip_effect(this.#i),this.#a&&ut.skip_effect(this.#a),this.#r&&ut.skip_effect(this.#r),ut.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(Pn(this.#i),this.#i=null),this.#a&&(Pn(this.#a),this.#a=null),this.#r&&(Pn(this.#r),this.#r=null);let t=this.#e.failed;const i=r=>{if(this.#d())return;const{reset:a,invoke_onerror:o}=this.#_(r);o(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return Hn(()=>{var s=xt;s.b=this,s.f|=il,t(this.#t,()=>r,()=>a)})}catch(s){return hi(s,this.#n.parent),null}}))};Pi(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){hi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>hi(a,this.#n&&this.#n.parent)):i(r)}})}}function ge(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[sl]??=n.nodeValue)&&(n[sl]=t,n.nodeValue=`${t}`)}function yp(n,e){return Mp(n,e)}const as=new Map;function Mp(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:o=!0,transformError:s}){Qh();var l=void 0,u=rp(()=>{var d=t??e.appendChild(Ii());xp(d,{pending:()=>{}},v=>{En({});var g=dn;a&&(g.c=a),r&&(i.$$events=r),l=n(v,i)||Cl(),wn()},s);var f=new Set,p=v=>{for(var g=0;g<v.length;g++){var _=v[g];if(!f.has(_)){f.add(_);var m=fp(_);for(const y of[e,document]){var h=as.get(y);h===void 0&&(h=new Map,as.set(y,h));var E=h.get(_);E===void 0?(y.addEventListener(_,ul,{passive:m}),h.set(_,1)):h.set(_,E+1)}}}};return p(eo(Zd)),cl.add(p),()=>{for(var v of f)for(const m of[e,document]){var g=as.get(m),_=g.get(v);--_==0?(m.removeEventListener(v,ul),g.delete(v),g.size===0&&as.delete(m)):g.set(v,_)}cl.delete(p),d!==t&&d.parentNode?.removeChild(d)}});return Sp.set(l,u),l}let Sp=new WeakMap;class Qd{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),i=this.#l.get(t);if(i)js(i),this.#s.delete(t);else{var r=this.#e.get(t);r&&(js(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,o]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(o);s&&(Pn(s.effect),this.#e.delete(o))}for(const[a,o]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var u=document.createDocumentFragment();kl(o,u),u.append(Ii()),this.#e.set(a,{effect:o,fragment:u})}else Pn(o);this.#s.delete(a),this.#l.delete(a)};this.#n||!i?(this.#s.add(a),gr(o,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,r]of this.#e)t.includes(i)||(Pn(r.effect),this.#e.delete(i))};ensure(e,t){var i=ut,r=Od();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),o=Ii();a.append(o),this.#e.set(e,{effect:Hn(()=>t(o)),fragment:a})}else this.#l.set(e,Hn(()=>t(this.anchor)));if(this.#t.set(i,e),r){for(const[s,l]of this.#l)s===e?i.unskip_effect(l):i.skip_effect(l);for(const[s,l]of this.#e)s===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#i),i.ondiscard(this.#a)}else this.#i(i)}}function qe(n,e,t=!1){var i=new Qd(n),r=t?sa:0;function a(o,s){i.ensure(o,s)}no(()=>{var o=!1;e((s,l=0)=>{o=!0,a(l,s)}),o||a(-1,null)},r)}const Ep=Symbol("NaN");function wp(n,e,t){var i=new Qd(n);no(()=>{var r=e();r!==r&&(r=Ep),i.ensure(r,t)})}function dl(n,e){return e}function Tp(n,e,t){for(var i=[],r=e.length,a,o=e.length,s=0;s<r;s++){let f=e[s];gr(f,()=>{if(a){if(a.pending.delete(f),a.done.add(f),a.pending.size===0){var p=n.outrogroups;fl(n,eo(a.done)),p.delete(a),p.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&t!==null&&n.pending.size===0;if(l){var u=t,d=u.parentNode;$h(d),d.append(u),n.items.clear()}fl(n,e,!l)}else a={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(a)}function fl(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const s of o)i.add(n.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(i?.has(a)){a.f|=pi;const o=document.createDocumentFragment();kl(a,o)}else Pn(e[r],t)}}var dc;function Ct(n,e,t,i,r,a=null){var o=n,s=new Map,l=(e&pd)!==0;if(l){var u=n;o=u.appendChild(Ii())}var d=null,f=Ed(()=>{var E=t();return $s(E)?E:E==null?[]:eo(E)}),p=new Map,v=!0;function g(E){if((h.effect.f&un)===0){h.pending.delete(E);var y=c(f);h.fallback=d,Ap(h,y,o,e,i),d!==null&&(y.length===0?(d.f&pi)===0?js(d):(d.f^=pi,Oa(d,null,o)):gr(d,()=>{d=null}))}}function _(E){h.pending.delete(E)}var m=no(()=>{for(var E=c(f),y=E.length,S=new Set,C=ut,D=Od(),T=0;T<y;T+=1){var F=E[T],M=i(F,T),R=v?null:s.get(M);R?(R.v&&la(R.v,F),R.i&&la(R.i,T),D&&C.unskip_effect(R.e)):(R=Rp(s,v?o:dc??=Ii(),F,M,T,r,e,t),v||(R.e.f|=pi),s.set(M,R)),S.add(M)}if(y===0&&a&&!d&&(v?d=Hn(()=>a(o)):(d=Hn(()=>a(dc??=Ii())),d.f|=pi)),y>S.size&&Rh(),!v)if(p.set(C,S),D){for(const[ae,K]of s)S.has(ae)||C.skip_effect(K.e);C.oncommit(g),C.ondiscard(_)}else g(C);c(f)}),h={effect:m,items:s,pending:p,outrogroups:null,fallback:d};v=!1}function wa(n){for(;n!==null&&(n.f&oi)===0;)n=n.next;return n}function Ap(n,e,t,i,r){var a=(i&ph)!==0,o=e.length,s=n.items,l=wa(n.effect.first),u,d=null,f,p=[],v=[],g,_,m,h;if(a)for(h=0;h<o;h+=1)g=e[h],_=r(g,h),m=s.get(_).e,(m.f&pi)===0&&(m.nodes?.a?.measure(),(f??=new Set).add(m));for(h=0;h<o;h+=1){if(g=e[h],_=r(g,h),m=s.get(_).e,n.outrogroups!==null)for(const R of n.outrogroups)R.pending.delete(m),R.done.delete(m);if((m.f&Sn)!==0&&(js(m),a&&(m.nodes?.a?.unfix(),(f??=new Set).delete(m))),(m.f&pi)!==0)if(m.f^=pi,m===l)Oa(m,null,t);else{var E=d?d.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Vi(n,d,m),Vi(n,m,E),Oa(m,E,t),d=m,p=[],v=[],l=wa(d.next);continue}if(m!==l){if(u!==void 0&&u.has(m)){if(p.length<v.length){var y=v[0],S;d=y.prev;var C=p[0],D=p[p.length-1];for(S=0;S<p.length;S+=1)Oa(p[S],y,t);for(S=0;S<v.length;S+=1)u.delete(v[S]);Vi(n,C.prev,D.next),Vi(n,d,C),Vi(n,D,y),l=y,d=D,h-=1,p=[],v=[]}else u.delete(m),Oa(m,l,t),Vi(n,m.prev,m.next),Vi(n,m,d===null?n.effect.first:d.next),Vi(n,d,m),d=m;continue}for(p=[],v=[];l!==null&&l!==m;)(u??=new Set).add(l),v.push(l),l=wa(l.next);if(l===null)continue}(m.f&pi)===0&&p.push(m),d=m,l=wa(m.next)}if(n.outrogroups!==null){for(const R of n.outrogroups)R.pending.size===0&&(fl(n,eo(R.done)),n.outrogroups?.delete(R));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||u!==void 0){var T=[];if(u!==void 0)for(m of u)(m.f&Sn)===0&&T.push(m);for(;l!==null;)(l.f&Sn)===0&&l!==n.fallback&&T.push(l),l=wa(l.next);var F=T.length;if(F>0){var M=(i&pd)!==0&&o===0?t:null;if(a){for(h=0;h<F;h+=1)T[h].nodes?.a?.measure();for(h=0;h<F;h+=1)T[h].nodes?.a?.fix()}Tp(n,T,M)}}a&&Pi(()=>{if(f!==void 0)for(m of f)m.nodes?.a?.apply()})}function Rp(n,e,t,i,r,a,o,s){var l=(o&fh)!==0?(o&mh)===0?Zh(t,!1,!1):Sr(t):null,u=(o&hh)!==0?Sr(r):null;return{v:l,i:u,e:Hn(()=>(a(e,l??t,u??r,s),()=>{n.delete(i)}))}}function Oa(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,a=e&&(e.f&pi)===0?e.nodes.start:t;i!==null;){var o=ts(i);if(a.before(i),i===r)return;i=o}}function Vi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const fc=[...` 	
\r\f \v\uFEFF`];function Cp(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,o=0;(o=i.indexOf(r,o))>=0;){var s=o+a;(o===0||fc.includes(i[o-1]))&&(s===i.length||fc.includes(i[s]))?i=(o===0?"":i.substring(0,o))+i.substring(s+1):o=s}}return i===""?null:i}function Pp(n,e){return n==null?null:String(n)}function wt(n,e,t,i,r,a){var o=n[rl];if(o!==t||o===void 0){var s=Cp(t,i,a);s==null?n.removeAttribute("class"):n.className=s,n[rl]=t}else if(a&&r!==a)for(var l in a){var u=!!a[l];(r==null||u!==!!r[l])&&n.classList.toggle(l,u)}return a}function di(n,e,t,i){var r=n[al];if(r!==e){var a=Pp(e);a==null?n.removeAttribute("style"):n.style.cssText=a,n[al]=e}return i}function Lp(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Dp(n,e){var t=n.__defaultValue,i=n.multiple,r=i?t??[]:null;if(!(i&&!$s(r))){n.selectedIndex;for(var a of n.options){var o=ta(a);Lp(a,i?r.includes(o):Dd(o,t))}}}function $d(n,e,t=!1){if(n.multiple){if(e==null)return;if(!$s(e))return Eh();for(var i of n.options)i.selected=e.includes(ta(i));return}for(i of n.options){var r=ta(i);if(Dd(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function qs(n){var e=new MutationObserver(t=>{t.every(Ip)||("__defaultValue"in n&&Dp(n),"__value"in n&&$d(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Nl(()=>{e.disconnect()})}function Ys(n,e,t=e){var i=new WeakSet,r=!0;Md(n,"change",a=>{var o=a?"[selected]":":checked",s;if(n.multiple)s=[].map.call(n.querySelectorAll(o),ta);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");s=l&&ta(l)}t(s),n.__value=s,ut!==null&&i.add(ut)}),kd(()=>{var a=e();if(n===document.activeElement){var o=ut;if(i.has(o))return}if($d(n,a,r),r&&a===void 0){var s=n.querySelector(":checked");s!==null&&(a=ta(s),t(a))}n.__value=a,r=!1})}function ta(n){return"__value"in n?n.__value:n.value}function Ip(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const Up=Symbol("is custom element"),Np=Symbol("is html"),Op=dh?"progress":"PROGRESS";function Ya(n,e){var t=Bl(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==Op)||(n.value=e??"")}function hc(n,e){var t=Bl(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function Qe(n,e,t,i){var r=Bl(n),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(n[uh]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Fp(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Bl(n){return n[hd]??={[Up]:n.nodeName.includes("-"),[Np]:n.namespaceURI===Mh}}var pc=new Map;function Fp(n){var e=n.getAttribute("is")||n.nodeName,t=pc.get(e);if(t)return t;pc.set(e,t=new Set);for(var i,r=n,a=Element.prototype;a!==r;){i=nh(r);for(var o in i)i[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.add(o);r=ld(r)}return t}function kt(n,e,t=e){var i=new WeakSet;Md(n,"input",async r=>{var a=r?n.defaultValue:n.value;if(a=_o(n)?xo(a):a,t(a),ut!==null&&i.add(ut),await up(),a!==(a=e())){var o=n.selectionStart,s=n.selectionEnd,l=n.value.length;if(n.value=a??"",s!==null){var u=n.value.length;o===s&&s===l&&u>l?(n.selectionStart=u,n.selectionEnd=u):(n.selectionStart=o,n.selectionEnd=Math.min(s,u))}}}),_a(e)==null&&n.value&&(t(_o(n)?xo(n.value):n.value),ut!==null&&i.add(ut)),Ol(()=>{var r=e();if(n===document.activeElement){var a=ut;if(i.has(a))return}_o(n)&&r===xo(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function _o(n){var e=n.type;return e==="number"||e==="range"}function xo(n){return n===""?null:+n}function bo(n,e){return n===e||n?.[vr]===e}function ef(n=Cl(),e,t,i){var r=dn.r,a=xt;return kd(()=>{var o,s;return Ol(()=>{o=s,s=[],_a(()=>{bo(t(...s),n)||(e(n,...s),o&&bo(t(...o),n)&&e(null,...o))})}),()=>{let l=a;for(;l!==r&&l.parent!==null&&l.parent.f&Wa;)l=l.parent;const u=()=>{s&&bo(t(...s),n)&&e(null,...s)},d=l.teardown;l.teardown=()=>{u(),d?.()}}}),n}let ss=!1;function kp(n){var e=ss;try{return ss=!1,[n(),ss]}finally{ss=e}}function ct(n,e,t,i){var r=!0,a=(t&_h)!==0,o=(t&xh)!==0,s=i,l=!0,u=void 0,d=()=>o&&r?(u??=ja(i),c(u)):(l&&(l=!1,s=o?_a(i):i),s);let f;if(a){var p=vr in n||ch in n;f=Qr(n,e)?.set??(p&&e in n?S=>n[e]=S:void 0)}var v,g=!1;a?[v,g]=kp(()=>n[e]):v=n[e],v===void 0&&i!==void 0&&(v=d(),f&&(Ih(),f(v)));var _;if(_=()=>{var S=n[e];return S===void 0?d():(l=!0,S)},(t&gh)===0)return _;if(f){var m=n.$$legacy;return(function(S,C){return arguments.length>0?((!C||m||g)&&f(C?_():S),S):_()})}var h=!1,E=((t&vh)!==0?ja:Ed)(()=>(h=!1,_()));a&&c(E);var y=xt;return(function(S,C){if(arguments.length>0){const D=C?c(E):a?Lt(S):S;return x(E,D),h=!0,s!==void 0&&(s=D),S}return Fi&&h||(y.f&un)!==0?E.v:c(E)})}function nr(n){dn===null&&_d(),vn(()=>{const e=_a(n);if(typeof e=="function")return e})}function Bp(n){dn===null&&_d(),nr(()=>()=>_a(n))}const zp="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(zp);function Gp(n){const e=[];for(const t of String(n??"")){const i=t.codePointAt(0);if(!(i===65039||i===65038)){if(i===8205){e.push("200d");continue}e.push(i.toString(16))}}return e.join("-")}const Hp=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310"]),Vp="/";function Wp(n){const e=Gp(n);return Hp.has(e)?`${Vp}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}var jp=ue('<img draggable="false"/>'),Xp=ue("<span> </span>");function mn(n,e){En(e,!0);let t=ct(e,"emoji",3,""),i=ct(e,"size",3,null),r=ct(e,"alt",3,""),a=ct(e,"class",3,"");const o=St(()=>Wp(t())),s=St(()=>r()||t()),l=St(()=>i()?`${i()}px`:"1em");var u=Jd(),d=At(u);{var f=v=>{var g=jp();Pe(()=>{Qe(g,"src",c(o)),Qe(g,"alt",c(s)),Qe(g,"title",r()||void 0),wt(g,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),di(g,`width: ${c(l)??""}; height: ${c(l)??""};`),Qe(g,"aria-hidden",r()?void 0:"true")}),$(v,g)},p=v=>{var g=Xp(),_=ve(g,!0);Pe(()=>{wt(g,1,`inline-block ${a()??""}`),Qe(g,"aria-hidden",r()?void 0:"true"),Qe(g,"title",r()||void 0),ge(_,t())}),$(v,g)};qe(d,v=>{c(o)?v(f):v(p,-1)})}$(n,u),wn()}var qp=ue('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),Yp=ue('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Kp(n,e){En(e,!0);let t=ct(e,"selected",3,!1),i=ct(e,"gameRunning",3,!1),r=ct(e,"menuOpen",3,!1);const a=St(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function o(){const F=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&F?F(e.instance.icon_path):"/logo.png"}var s=Yp(),l=O(s),u=O(l),d=ve(u),f=A(u,2),p=O(f),v=ve(p,!0),g=A(p,2),_=O(g),m=ve(_,!0),h=A(_,2),E=ve(h,!0),y=A(f,2),S=A(l,2),C=ve(S,!0),D=A(S,2);{var T=F=>{var M=qp(),R=At(M),ae=A(R,2),K=O(ae),B=A(K,2),H=A(B,2),X=O(H);mn(X,{emoji:"📂"});var j=A(H,2),k=A(j,4);Pe(()=>K.disabled=i()),ne("click",R,function(...te){e.onclosemenu?.apply(this,te)}),ne("click",K,()=>{e.onclosemenu(),e.onplay()}),ne("click",B,()=>{e.onclosemenu(),e.onedit()}),ne("click",H,()=>{e.onclosemenu(),e.onopenfolder()}),ne("click",j,function(...te){e.onviewlogs?.apply(this,te)}),ne("click",k,()=>{e.onclosemenu(),e.ondelete()}),$(F,M)};qe(D,F=>{r()&&F(T)})}Pe((F,M)=>{wt(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),Qe(s,"aria-selected",t()),Qe(s,"title",e.instance.name),Qe(d,"src",F),ge(v,e.instance.name),ge(m,e.instance.minecraft_version),wt(h,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${c(a)??""}`),ge(E,e.instance.loader_type),ge(C,M)},[()=>o(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),ne("click",s,function(...F){e.onselect?.apply(this,F)}),ne("dblclick",s,function(...F){e.onplay?.apply(this,F)}),ne("keydown",s,F=>{(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),e.onplay())}),ne("contextmenu",s,F=>{F.preventDefault(),e.onselect(),e.ontogglemenu()}),Ui("error",d,F=>{F.currentTarget.dataset.f||(F.currentTarget.dataset.f="1",F.currentTarget.src="/logo.png")}),ne("click",y,F=>{F.stopPropagation(),e.ontogglemenu()}),$(n,s),wn()}qn(["click","dblclick","keydown","contextmenu"]);var Zp=ue('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Jp=ue('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Qp=ue('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),$p=ue('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function em(n,e){En(e,!0);var t=$p();Ct(t,21,()=>e.instances,i=>i.id,(i,r)=>{{let a=St(()=>e.selectedId===c(r).id),o=St(()=>e.menuFor===c(r).id);Kp(i,{get instance(){return c(r)},get selected(){return c(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return c(o)},onselect:()=>e.onselect?.(c(r).id),onplay:()=>e.onplay?.(c(r).id),ontogglemenu:()=>e.ontogglemenu?.(c(r).id),onedit:()=>e.onedit?.(c(r)),onopenfolder:()=>e.onopenfolder?.(c(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(c(r).id),get onclosemenu(){return e.onclosemenu}})}},i=>{var r=Jd(),a=At(r);{var o=d=>{var f=Zp(),p=ve(f,!0);Pe(()=>ge(p,e.error)),$(d,f)},s=d=>{var f=Jp(),p=ve(f);Pe(v=>ge(p,`No instances match "${v??""}".`),[()=>e.query.trim()]),$(d,f)},l=St(()=>e.query.trim()),u=d=>{var f=Qp(),p=A(O(f),6);ne("click",p,()=>e.onadd?.()),$(d,f)};qe(a,d=>{e.error?d(o):c(l)?d(s,1):d(u,-1)})}$(i,r)}),$(n,t),wn()}qn(["click"]);const Ka=[];function io(n){return Ka.push(n),n}function ro(n){const e=Ka.lastIndexOf(n);e!==-1&&Ka.splice(e,1)}function mc(){return Ka[Ka.length-1]??null}var tm=ue('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div>'),vc=ue('<div class="p-6 text-center text-[12px] text-(--text-muted)"> </div>'),nm=ue('<span class="shrink-0 rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent)">✓ Installed</span>'),im=ue(`<button class="shrink-0 rounded bg-(--accent) px-3 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Downloads the primary jar into this instance's mods folder"> </button>`),rm=ue('<div class="flex items-center gap-3 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div> <div class="truncate text-[11px] text-(--text-muted)"> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></div> <!></div>'),am=ue('<div class="flex flex-col gap-1.5"></div>'),sm=ue('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[480px] w-[640px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><div class="min-w-0"><h3 class="text-sm font-semibold">Get more mods</h3> <p class="truncate text-[11px] text-(--text-muted)"> <!></p></div> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="border-b border-(--border) p-3"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></div></div>');function om(n,e){En(e,!0);let t=pe(""),i=pe(null),r=pe(!1),a=pe(""),o=pe(Lt({})),s=pe(Lt({})),l=0;const u=["fabric","quilt","forge","neoforge"],d=St(()=>{const j=e.instance.loader_type.toLowerCase();return u.includes(j)?j:""});function f(j){return j>=1e6?`${(j/1e6).toFixed(1)}M`:j>=1e3?`${(j/1e3).toFixed(0)}K`:String(j)}function p(j){return j.icon_url||"/logo.png"}vn(()=>{const j=c(t).trim(),k=++l,te=setTimeout(()=>{x(r,!0),x(a,""),window.__TAURI__.core.invoke("search_modrinth_mods",{query:j,gameVersion:e.instance.minecraft_version,loader:c(d)}).then(de=>{k===l&&(x(i,de,!0),x(r,!1))}).catch(de=>{k===l&&(x(a,String(de),!0),x(r,!1))})},350);return()=>clearTimeout(te)});async function v(j){if(!(c(o)[j.project_id]||c(s)[j.project_id])){x(o,{...c(o),[j.project_id]:!0},!0);try{const k=await window.__TAURI__.core.invoke("install_modrinth_mod",{instanceId:e.instance.id,projectId:j.project_id,gameVersion:e.instance.minecraft_version,loader:c(d)});x(s,{...c(s),[j.project_id]:k},!0),e.oninstalled?.(j)}catch(k){x(a,`Install failed: ${k}`)}finally{x(o,{...c(o),[j.project_id]:!1},!0)}}}nr(()=>{const j=io(()=>e.onclose?.());return()=>ro(j)});var g=sm(),_=O(g),m=O(_),h=O(m),E=A(O(h),2),y=O(E),S=A(y);{var C=j=>{var k=ui();Pe(te=>ge(k,`· ${te??""}`),[()=>c(d)[0].toUpperCase()+c(d).slice(1)]),$(j,k)};qe(S,j=>{c(d)&&j(C)})}var D=A(h,2),T=A(m,2),F=O(T),M=A(T,2),R=O(M);{var ae=j=>{var k=tm(),te=ve(k,!0);Pe(()=>ge(te,c(a))),$(j,k)};qe(R,j=>{c(a)&&j(ae)})}var K=A(R,2);{var B=j=>{var k=vc(),te=ve(k,!0);Pe(()=>ge(te,c(r)?"Searching Modrinth…":"Type to search.")),$(j,k)},H=j=>{var k=vc(),te=ve(k);Pe(de=>ge(te,`No mods for MC ${e.instance.minecraft_version??""}${c(d)?` + ${c(d)}`:""} match “${de??""}”.`),[()=>c(t).trim()]),$(j,k)},X=j=>{var k=am();Ct(k,21,()=>c(i),te=>te.project_id,(te,de)=>{var be=rm(),Z=O(be),J=A(Z,2),Re=O(J),Ae=O(Re),ke=ve(Ae,!0),Be=A(Ae,2),Ye=ve(Be),je=A(Re,2),Te=ve(je,!0),We=A(je,2),le=ve(We),N=A(J,2);{var ze=ee=>{var _e=nm();Pe(()=>Qe(_e,"title",c(s)[c(de).project_id])),$(ee,_e)},De=ee=>{var _e=im(),Le=ve(_e,!0);Pe(()=>{_e.disabled=c(o)[c(de).project_id],ge(Le,c(o)[c(de).project_id]?"Installing…":"Install")}),ne("click",_e,()=>v(c(de))),$(ee,_e)};qe(N,ee=>{c(s)[c(de).project_id]?ee(ze):ee(De,-1)})}Pe((ee,_e,Le)=>{Qe(Z,"src",ee),Qe(Ae,"title",c(de).title),ge(ke,c(de).title),Qe(Be,"title",`${_e??""} downloads`),ge(Ye,`⤓ ${Le??""}`),Qe(je,"title",c(de).description),ge(Te,c(de).description),ge(le,`by ${(c(de).author||"unknown")??""}`)},[()=>p(c(de)),()=>f(c(de).downloads),()=>f(c(de).downloads)]),Ui("error",Z,ee=>{ee.currentTarget.dataset.f||(ee.currentTarget.dataset.f="1",ee.currentTarget.src="/logo.png")}),$(te,be)}),$(j,k)};qe(K,j=>{c(i)?c(i).length===0&&!c(r)?j(H,1):j(X,-1):j(B)})}Pe(()=>ge(y,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `)),ne("click",g,j=>{j.target===j.currentTarget&&e.onclose?.()}),ne("click",D,()=>e.onclose?.()),kt(F,()=>c(t),j=>x(t,j)),$(n,g),wn()}qn(["click"]);var lm=ue('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),cm=ue('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),um=ue('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),gc=ue('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),yo=ue('<p class="mt-2 text-[12px] text-rose-400"> </p>'),dm=ue(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),fm=ue('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),hm=ue('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),pm=ue('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),mm=ue('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),vm=ue('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),gm=ue('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, icon and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p></div>',1),_m=ue('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!></div>');function xm(n,e){En(e,!0);let t=ct(e,"storage",3,null);const i=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let r=pe("mods"),a=pe(Lt([])),o=pe(!1),s=pe(""),l=pe(""),u=pe(!1),d=pe(Lt([])),f=pe(Lt([])),p=pe(!1),v=pe("");function g(...Te){return[t()?t().instances_dir.replace(/\\/g,"/"):"",e.instance.id,"minecraft",...Te].filter(Boolean).join("/")}function _(Te){const We=window.__TAURI__?.core?.convertFileSrc;return We?We(Te):Te}function m(Te){return Te>=1024*1024?`${(Te/1024/1024).toFixed(1)} MB`:Te>=1024?`${(Te/1024).toFixed(1)} KB`:`${Te} B`}function h(Te){return Te?new Date(Te*1e3).toLocaleString():""}function E(){const Te=c(l).trim().toLowerCase();return Te?c(a).filter(We=>We.display_name.toLowerCase().includes(Te)||We.filename.toLowerCase().includes(Te)):c(a)}async function y(){x(o,!0);try{x(a,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:e.instance.id}),!0),x(s,"")}catch(Te){x(s,String(Te),!0)}finally{x(o,!1)}}async function S(Te){x(o,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:e.instance.id,filename:Te.filename,enable:!Te.is_enabled}),c(s)&&x(s,"")}catch(We){x(s,String(We),!0)}finally{x(o,!1)}await y()}async function C(Te){x(o,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:e.instance.id,filename:Te.filename}),x(s,"")}catch(We){x(s,String(We),!0)}finally{x(o,!1)}await y()}async function D(){const Te=window.__TAURI__?.dialog?.open;if(!Te){x(s,"File picker unavailable in this build.");return}let We;try{We=await Te({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(N){x(s,String(N),!0);return}const le=We?[].concat(We):[];if(le.length){x(o,!0);try{for(const N of le)await window.__TAURI__.core.invoke("import_mod",{instanceId:e.instance.id,jarPath:N});x(s,"")}catch(N){x(s,String(N),!0)}finally{x(o,!1)}await y()}}async function T(Te){x(p,!0);try{const We=await window.__TAURI__.core.invoke(Te,{instanceId:e.instance.id});x(Te==="list_screenshots"?d:f,We,!0),x(v,"")}catch(We){x(v,String(We),!0)}finally{x(p,!1)}}function F(Te){window.__TAURI__.core.invoke("open_path",{path:Te}).catch(We=>x(v,String(We),!0))}function M(Te){F(g("screenshots",Te))}nr(()=>{y(),T("list_screenshots"),T("list_logs")});var R=_m(),ae=O(R),K=O(ae),B=A(K,2),H=O(B),X=ve(H,!0),j=A(H,2),k=ve(j),te=A(B,2);Ct(te,21,()=>i,Te=>Te.id,(Te,We)=>{var le=lm(),N=O(le),ze=O(N);mn(ze,{get emoji(){return c(We).icon},size:15});var De=A(N,2),ee=ve(De,!0);Pe(()=>{wt(le,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${c(r)===c(We).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Qe(le,"aria-current",c(r)===c(We).id?"true":void 0),ge(ee,c(We).label)}),ne("click",le,()=>x(r,c(We).id,!0)),$(Te,le)});var de=A(ae,2),be=O(de),Z=O(be);{var J=Te=>{var We=cm(),le=A(At(We),4),N=O(le),ze=ve(N),De=A(N,2),ee=ve(De),_e=A(De,2),Le=ve(_e);Pe(Ie=>{ge(ze,`Minecraft ${e.instance.minecraft_version??""}`),ge(ee,`Loader: ${e.instance.loader_type??""}`),ge(Le,`Last played: ${Ie??""}`)},[()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleString():"never"]),$(Te,We)},Re=Te=>{var We=dm(),le=A(At(We),4),N=O(le),ze=ve(N),De=A(N,2),ee=A(le,2),_e=A(ee,2),Le=A(_e,2),Ie=O(Le);Ct(Ie,21,E,U=>U.filename,(U,ce)=>{var ye=um(),xe=O(ye),Fe=O(xe);let Ee;var Y=ve(Fe,!0),w=A(Fe,2),V=ve(w),ie=A(xe),se=ve(ie),oe=A(ie),Ne=ve(oe);Pe(Ze=>{Ee=wt(Fe,1,"truncate",null,Ee,{"opacity-50":!c(ce).is_enabled}),ge(Y,c(ce).display_name),ge(V,`${c(ce).filename??""} · ${Ze??""}`),wt(se,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${c(ce).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),Qe(se,"title",c(ce).is_enabled?"Disable":"Enable"),se.disabled=c(o),Qe(Ne,"title",`Delete ${c(ce).display_name??""}`),Ne.disabled=c(o)},[()=>m(c(ce).file_size)]),ne("click",se,()=>S(c(ce))),ne("click",Ne,()=>C(c(ce))),$(U,ye)},U=>{var ce=gc(),ye=O(ce),xe=O(ye);{var Fe=Y=>{var w=ui("Loading mods…");$(Y,w)},Ee=Y=>{var w=ui("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");$(Y,w)};qe(xe,Y=>{c(o)?Y(Fe):Y(Ee,-1)})}$(U,ce)});var Oe=A(Le,2);{var Ue=U=>{var ce=yo(),ye=ve(ce,!0);Pe(()=>ge(ye,c(s))),$(U,ce)};qe(Oe,U=>{c(s)&&U(Ue)})}var $e=A(Oe,2),He=O($e),P=A(He,2),b=O(P);mn(b,{emoji:"📂"}),Pe(()=>{ge(ze,`Installed (${c(a).length??""})`),De.disabled=c(o),He.disabled=c(o),P.disabled=!t(),Qe(P,"title",t()?"Opens the instance mods folder":"Storage unknown")}),ne("click",De,y),kt(ee,()=>c(l),U=>x(l,U)),ne("click",_e,()=>x(u,!0)),ne("click",He,D),ne("click",P,()=>F(g("mods"))),$(Te,We)},Ae=Te=>{var We=pm(),le=A(At(We),4);Ct(le,21,()=>c(d),_e=>_e.name,(_e,Le)=>{var Ie=fm(),Oe=O(Ie),Ue=A(Oe,2),$e=ve(Ue,!0);Pe((He,P,b)=>{Qe(Ie,"title",`${c(Le).name??""} · ${He??""} · ${P??""}`),Qe(Oe,"src",b),Qe(Oe,"alt",c(Le).name),Qe(Ue,"title",c(Le).name),ge($e,c(Le).name)},[()=>m(c(Le).size),()=>h(c(Le).modified),()=>_(g("screenshots",c(Le).name))]),ne("click",Ie,()=>M(c(Le).name)),ne("keydown",Ie,He=>{(He.key==="Enter"||He.key===" ")&&(He.preventDefault(),M(c(Le).name))}),$(_e,Ie)},_e=>{var Le=hm(),Ie=O(Le);{var Oe=$e=>{var He=ui("Loading screenshots…");$($e,He)},Ue=$e=>{var He=ui("No screenshots yet — press F2 in game to capture one.");$($e,He)};qe(Ie,$e=>{c(p)?$e(Oe):$e(Ue,-1)})}$(_e,Le)});var N=A(le,2);{var ze=_e=>{var Le=yo(),Ie=ve(Le,!0);Pe(()=>ge(Ie,c(v))),$(_e,Le)};qe(N,_e=>{c(v)&&_e(ze)})}var De=A(N,2),ee=O(De);mn(ee,{emoji:"📂"}),ne("click",De,()=>F(g("screenshots"))),$(Te,We)},ke=Te=>{var We=vm(),le=A(At(We),4),N=O(le);Ct(N,21,()=>c(f),Oe=>Oe.name,(Oe,Ue)=>{var $e=mm(),He=O($e),P=O(He),b=ve(P,!0),U=A(P,2),ce=ve(U),ye=A(He),xe=ve(ye);Pe((Fe,Ee)=>{Qe(P,"title",c(Ue).name),ge(b,c(Ue).name),ge(ce,`${Fe??""} · ${Ee??""}`)},[()=>m(c(Ue).size),()=>h(c(Ue).modified)]),ne("click",xe,()=>F(g("logs",c(Ue).name))),$(Oe,$e)},Oe=>{var Ue=gc(),$e=O(Ue),He=O($e);{var P=U=>{var ce=ui("Loading logs…");$(U,ce)},b=U=>{var ce=ui("No log files yet — logs appear after the first launch.");$(U,ce)};qe(He,U=>{c(p)?U(P):U(b,-1)})}$(Oe,Ue)});var ze=A(le,2);{var De=Oe=>{var Ue=yo(),$e=ve(Ue,!0);Pe(()=>ge($e,c(v))),$(Oe,Ue)};qe(ze,Oe=>{c(v)&&Oe(De)})}var ee=A(ze,2),_e=O(ee),Le=A(_e,2),Ie=O(Le);mn(Ie,{emoji:"📂"}),ne("click",_e,()=>e.onopenconsole?.()),ne("click",Le,()=>F(g("logs"))),$(Te,We)},Be=Te=>{var We=gm(),le=A(At(We),4),N=O(le),ze=ve(N,!0),De=A(N,2),ee=O(De),_e=ve(ee),Le=A(ee,2),Ie=ve(Le);Pe((Oe,Ue,$e)=>{ge(ze,e.instance.name),Qe(De,"title",Oe),ge(_e,`Game folder: ${Ue??""}`),ge(Ie,`Mods folder: ${$e??""}`)},[()=>g(),()=>g(),()=>g("mods")]),$(Te,We)};qe(Z,Te=>{c(r)==="components"?Te(J):c(r)==="mods"?Te(Re,1):c(r)==="screenshots"?Te(Ae,2):c(r)==="logs"?Te(ke,3):Te(Be,-1)})}var Ye=A(de,2);{var je=Te=>{om(Te,{get instance(){return e.instance},onclose:()=>x(u,!1),oninstalled:()=>y()})};qe(Ye,Te=>{c(u)&&Te(je)})}Pe(()=>{Qe(H,"title",e.instance.name),ge(X,e.instance.name),ge(k,`${e.instance.minecraft_version??""} · ${e.instance.loader_type??""}`)}),ne("click",K,function(...Te){e.onback?.apply(this,Te)}),$(n,R),wn()}qn(["click","keydown"]);var bm=ue('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),ym=ue('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),Mm=ue('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),Sm=ue('<p class="mt-3 text-[12px] text-red-400"> </p>'),Em=ue(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),wm=ue('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function Tm(n,e){En(e,!0);let t=pe(null),i=pe(""),r=pe(""),a=pe(!1),o=pe("");function s(E){return E>=1024*1024?`${(E/1024/1024).toFixed(1)} MB`:E>=1024?`${(E/1024).toFixed(0)} KB`:`${E} B`}function l(){return!c(t)||!c(t).loader?"Vanilla":c(t).loader[0].toUpperCase()+c(t).loader.slice(1)+(c(t).loader_version?` ${c(t).loader_version}`:" (latest stable)")}nr(async()=>{const E=io(()=>e.onclose?.());try{x(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),x(r,c(t).name,!0)}catch(y){x(i,String(y),!0)}return()=>ro(E)});async function u(){if(!c(a)){x(a,!0),x(o,"");try{const E=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:c(r).trim()});e.oninstalled?.(E)}catch(E){x(o,String(E),!0)}finally{x(a,!1)}}}var d=wm(),f=O(d),p=O(f),v=A(O(p),2),g=A(p,2);{var _=E=>{var y=bm(),S=O(y),C=ve(S,!0),D=A(S,2),T=ve(D,!0);Pe(()=>{ge(C,c(i)),Qe(D,"title",e.path),ge(T,e.path)}),$(E,y)},m=E=>{var y=ym();$(E,y)},h=E=>{var y=Em(),S=At(y),C=O(S),D=O(C),T=ve(D,!0),F=A(D,2);{var M=Be=>{var Ye=Mm(),je=ve(Ye,!0);Pe(()=>ge(je,c(t).summary)),$(Be,Ye)};qe(F,Be=>{c(t).summary&&Be(M)})}var R=A(F,2),ae=O(R),K=ve(ae),B=A(ae,2),H=ve(B,!0),X=A(B,2),j=ve(X),k=A(X,2),te=ve(k,!0),de=A(C,4),be=A(de,2);{var Z=Be=>{var Ye=Sm(),je=ve(Ye,!0);Pe(()=>ge(je,c(o))),$(Be,Ye)};qe(be,Be=>{c(o)&&Be(Z)})}var J=A(S,2),Re=O(J),Ae=A(Re,2),ke=ve(Ae,!0);Pe((Be,Ye,je)=>{Qe(D,"title",c(t).name),ge(T,c(t).name),ge(K,`MC ${(c(t).game_version||"?")??""}`),ge(H,Be),Qe(X,"title",`${c(t).download_count??""} downloaded, ${c(t).override_count??""} overrides extracted`),ge(j,`${c(t).file_count??""} files`),ge(te,Ye),Ae.disabled=je,ge(ke,c(a)?"Installing…":"Install Modpack")},[()=>l(),()=>s(c(t).archive_size),()=>c(a)||!c(r).trim()]),kt(de,()=>c(r),Be=>x(r,Be)),ne("click",Re,()=>e.onclose?.()),ne("click",Ae,u),$(E,y)};qe(g,E=>{c(i)?E(_):c(t)?E(h,-1):E(m,1)})}ne("click",d,E=>{E.target===E.currentTarget&&e.onclose?.()}),ne("click",v,()=>e.onclose?.()),$(n,d),wn()}qn(["click"]);var Am=ue('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),Rm=ue('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),_c=ue("<option> </option>"),Cm=ue('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),Pm=ue('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),Lm=ue('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),Dm=ue('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),Im=ue('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),Um=ue('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),Nm=ue('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Om=ue('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Fm=ue('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),km=ue('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),Bm=ue('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),zm=ue('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),Gm=ue('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),Hm=ue('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),Vm=ue('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),Wm=ue('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),jm=ue('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>');function Xm(n,e){En(e,!0);let t=ct(e,"groups",19,()=>[]);const i=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],r=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"fabric",label:"Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],a=["","fabric","quilt"],o=["fabric","quilt"],s="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let l=pe(null),u=pe(!0),d=pe(""),f=pe(""),p=pe(Lt(new Set(["release"]))),v=pe(""),g=pe(""),_=pe(""),m=pe(""),h=pe(""),E=pe(""),y=pe(Lt([])),S=pe("idle"),C=0,D=pe(!1),T=pe("");function F(fe,Me){const Ge=window.__TAURI__?.core;return Ge?Ge.invoke(fe,Me):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const M=St(()=>{const fe=c(l)?.versions??[],Me=c(f).trim().toLowerCase();return fe.filter(Ge=>c(p).has(Ge.version_type)&&(!Me||Ge.id.toLowerCase().includes(Me)))}),R=St(()=>!a.includes(c(h))),ae=St(()=>o.includes(c(h))),K=St(()=>!!c(v)&&!c(R)&&!c(D)&&!(c(ae)&&c(S)==="loading"));function B(fe){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[fe]??fe}function H(fe){if(!fe)return"—";const Me=new Date(fe);if(Number.isNaN(Me.getTime()))return String(fe).slice(0,10);const Ge=it=>String(it).padStart(2,"0");return`${Ge(Me.getDate())}/${Ge(Me.getMonth()+1)}/${Me.getFullYear()}`}function X(fe){const Me=new Set(c(p));Me.has(fe)?Me.delete(fe):Me.add(fe),x(p,Me,!0)}function j(){const fe=window.__TAURI__?.core?.convertFileSrc;return c(m)&&fe?fe(c(m)):null}async function k(){const fe=window.__TAURI__?.dialog?.open;if(!fe){x(T,"Image picker unavailable in this build.");return}try{const Me=await fe({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});Me&&(x(m,String(Me),!0),x(T,""))}catch(Me){x(T,String(Me),!0)}}async function te(){if(!c(ae)||!c(v))return;const fe=++C;x(S,"loading");try{const Me=await F("fetch_loader_versions",{loader:c(h),gameVersion:c(v)});if(fe!==C)return;x(y,Me,!0),x(E,Me.find(Ge=>Ge.stable)?.version??Me[0]?.version??"",!0),x(S,Me.length?"idle":"error",!0)}catch{if(fe!==C)return;x(y,[],!0),x(E,""),x(S,"error")}}async function de(fe){x(v,fe,!0),c(ae)&&await te()}async function be(fe){x(h,fe,!0),x(E,""),x(y,[],!0),x(S,"idle"),c(ae)&&await te()}async function Z(){x(u,!0),x(d,"");try{x(l,await F("fetch_vanilla_versions"),!0)}catch(fe){x(d,String(fe),!0)}finally{x(u,!1)}}async function J(){if(!c(K))return;x(D,!0),x(T,"");const fe=c(v),Me=c(g).trim()||fe;try{const Ge=await F("create_instance",{name:Me,version:fe,loader:c(h)||null,loaderVersion:c(E).trim()||null});let it="";if(c(m))try{await F("set_instance_icon",{instanceId:Ge.id,imagePath:c(m)})}catch(mt){it=`Instance created, but the icon could not be applied: ${mt}`}if(c(_).trim())try{await F("set_instance_group",{instanceId:Ge.id,group:c(_).trim()})}catch(mt){it=it?`${it} The group could not be set: ${mt}`:`Instance created, but the group could not be set: ${mt}`}e.oncreated?.(Ge,it)}catch(Ge){x(T,String(Ge),!0)}finally{x(D,!1)}}function Re(){window.__TAURI__?.core?.invoke("open_path",{path:s}).catch(fe=>x(T,String(fe),!0))}nr(()=>{const fe=io(()=>e.onclose?.());return Z(),()=>ro(fe)});var Ae=jm(),ke=O(Ae),Be=O(ke),Ye=O(Be),je=O(Ye);{var Te=fe=>{var Me=Am(),Ge=At(Me);Pe(it=>Qe(Ge,"src",it),[()=>j()]),$(fe,Me)},We=St(()=>j()),le=fe=>{var Me=Rm();$(fe,Me)};qe(je,fe=>{c(We)?fe(Te):fe(le,-1)})}var N=A(Ye,2),ze=O(N),De=A(ze,2),ee=A(O(De),2),_e=O(ee);_e.value=_e.__value="";var Le=A(_e);Ct(Le,16,t,fe=>fe,(fe,Me)=>{var Ge=_c(),it=ve(Ge,!0),mt={};Pe(()=>{ge(it,Me),mt!==(mt=Me)&&(Ge.value=(Ge.__value=mt)??"")}),$(fe,Ge)}),qs(ee);var Ie=A(N,2),Oe=A(Be,2),Ue=O(Oe),$e=O(Ue),He=O($e);{var P=fe=>{var Me=Cm();$(fe,Me)},b=fe=>{var Me=Pm(),Ge=O(Me),it=ve(Ge,!0),mt=A(Ge,2);Pe(()=>ge(it,c(d))),ne("click",mt,Z),$(fe,Me)},U=fe=>{var Me=Um(),Ge=A(O(Me));Ct(Ge,21,()=>c(M),it=>it.id,(it,mt)=>{var Nt=Dm(),Et=O(Nt),zt=O(Et),yt=ve(zt,!0),Gt=A(zt,2);{var sn=re=>{var Q=Lm();$(re,Q)};qe(Gt,re=>{c(mt).is_latest_release&&re(sn)})}var Tn=A(Et),fn=ve(Tn,!0),L=A(Tn),q=ve(L,!0);Pe((re,Q)=>{wt(Nt,1,`cursor-pointer border-b border-(--border)/50 ${c(v)===c(mt).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),ge(yt,c(mt).id),ge(fn,re),ge(q,Q)},[()=>H(c(mt).release_time),()=>B(c(mt).version_type)]),ne("click",Nt,()=>de(c(mt).id)),ne("keydown",Nt,re=>{(re.key==="Enter"||re.key===" ")&&(re.preventDefault(),de(c(mt).id))}),$(it,Nt)},it=>{var mt=Im();$(it,mt)}),$(fe,Me)};qe(He,fe=>{c(u)?fe(P):c(d)?fe(b,1):fe(U,-1)})}var ce=A($e,2),ye=O(ce),xe=A(ye,2),Fe=ve(xe),Ee=A(Ue,2),Y=O(Ee),w=A(O(Y),2);Ct(w,21,()=>i,fe=>fe.id,(fe,Me)=>{var Ge=Nm(),it=O(Ge),mt=A(it,2),Nt=ve(mt,!0);Pe(Et=>{hc(it,Et),ge(Nt,c(Me).label)},[()=>c(p).has(c(Me).id)]),ne("change",it,()=>X(c(Me).id)),$(fe,Ge)});var V=A(Y,2),ie=A(O(V),2);Ct(ie,21,()=>r,fe=>fe.id,(fe,Me)=>{var Ge=Om(),it=O(Ge),mt=A(it,2),Nt=ve(mt,!0);Pe(()=>{Ya(it,c(Me).id),hc(it,c(h)===c(Me).id),ge(Nt,c(Me).label)}),ne("change",it,()=>be(c(Me).id)),$(fe,Ge)});var se=A(ie,2);{var oe=fe=>{var Me=Fm();$(fe,Me)},Ne=fe=>{var Me=km();$(fe,Me)};qe(se,fe=>{c(R)?fe(oe):c(h)||fe(Ne,1)})}var Ze=A(se,2);{var I=fe=>{var Me=Hm(),Ge=A(At(Me),2);{var it=Et=>{var zt=Bm();$(Et,zt)},mt=Et=>{var zt=zm(),yt=At(zt);kt(yt,()=>c(E),Gt=>x(E,Gt)),$(Et,zt)},Nt=Et=>{var zt=Gm(),yt=O(zt);yt.value=yt.__value="";var Gt=A(yt);Ct(Gt,17,()=>c(y),sn=>sn.version,(sn,Tn)=>{var fn=_c(),L=ve(fn),q={};Pe(()=>{ge(L,`${c(Tn).version??""}${c(Tn).stable?"":" (unstable)"}`),q!==(q=c(Tn).version)&&(fn.value=(fn.__value=q)??"")}),$(sn,fn)}),qs(zt),Ys(zt,()=>c(E),sn=>x(E,sn)),$(Et,zt)};qe(Ge,Et=>{c(S)==="loading"?Et(it):c(S)==="error"?Et(mt,1):Et(Nt,-1)})}$(fe,Me)};qe(Ze,fe=>{c(ae)&&fe(I)})}var Ce=A(Oe,2),G=O(Ce),he=A(G,2);{var we=fe=>{var Me=Vm(),Ge=ve(Me,!0);Pe(()=>{Qe(Me,"title",c(T)),ge(Ge,c(T))}),$(fe,Me)},Xe=fe=>{var Me=Wm(),Ge=ve(Me,!0);Pe(()=>ge(Ge,c(v)?`Selected Minecraft ${c(v)}`:"Pick a version to continue")),$(fe,Me)};qe(he,fe=>{c(T)?fe(we):fe(Xe,-1)})}var tt=A(he,2),rt=A(tt,2),bt=ve(rt,!0);Pe(()=>{Qe(ze,"placeholder",c(v)?`Instance name (${c(v)})`:"Instance name"),ye.disabled=!c(l),ge(Fe,`${c(M).length??""} shown`),rt.disabled=!c(K),Qe(rt,"title",c(R)?"This mod loader is not supported yet.":"Create the instance"),ge(bt,c(D)?"Creating…":"OK")}),ne("click",Ae,fe=>{fe.target===fe.currentTarget&&e.onclose?.()}),ne("click",Ye,k),kt(ze,()=>c(g),fe=>x(g,fe)),Ys(ee,()=>c(_),fe=>x(_,fe)),ne("click",Ie,()=>e.onclose?.()),kt(ye,()=>c(f),fe=>x(f,fe)),ne("click",G,Re),ne("click",tt,()=>e.onclose?.()),ne("click",rt,J),$(n,Ae),wn()}qn(["click","keydown","change"]);var qm=ue('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Ym=ue('<button class="w-full rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game">■ Kill</button>'),Km=ue("<button> </button>"),Zm=ue('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Jm=ue('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="w-full rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">▶ Launch</button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip">⤓ Export</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance">⧉ Copy</button> <button class="w-full rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button> <button class="w-full rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance">⇱ Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Qm(n,e){En(e,!0);let t=ct(e,"storage",3,null),i=ct(e,"gameRunning",3,!1),r=ct(e,"modsCount",3,null),a=ct(e,"groups",19,()=>[]),o=pe(!1),s=pe("");const l=St(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function u(){const ee=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&ee?ee(e.instance.icon_path):"/logo.png"}function d(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function f(ee){const _e=new Date(ee*1e3),Le=Ie=>String(Ie).padStart(2,"0");return`${Le(_e.getDate())}/${Le(_e.getMonth()+1)}/${_e.getFullYear()} ${Le(_e.getHours())}:${Le(_e.getMinutes())}:${Le(_e.getSeconds())}`}function p(ee){const _e=Math.max(0,Math.floor(ee)),Le=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],Ie=[];let Oe=_e;for(const[Ue,$e]of Le){const He=Math.floor(Oe/Ue);if(He&&(Ie.push(`${He} ${$e}${He===1?"":"s"}`),Oe-=He*Ue,Ie.length===2))break}return Ie.length?Ie.join(" "):"0 seconds"}const v=St(()=>{const ee=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${ee}, last played on ${f(e.instance.last_played)}, total played for ${p(e.instance.total_time_played)}`:ee});function g(ee){x(o,!1),x(s,""),e.onchangegroup?.(ee.trim()?ee.trim():null)}var _=Jm(),m=O(_),h=ve(m),E=A(m,2),y=ve(E,!0),S=A(E,2),C=O(S),D=ve(C,!0),T=A(C,2),F=ve(T,!0),M=A(T,2);{var R=ee=>{var _e=qm(),Le=ve(_e);Pe(()=>ge(Le,`▤ ${e.instance.group??""}`)),$(ee,_e)};qe(M,ee=>{e.instance.group&&ee(R)})}var ae=A(S,2),K=ve(ae,!0),B=A(ae,2),H=O(B),X=A(H,2);{var j=ee=>{var _e=Ym();ne("click",_e,function(...Le){e.onkill?.apply(this,Le)}),$(ee,_e)};qe(X,ee=>{i()&&ee(j)})}var k=A(X,2),te=O(k);mn(te,{emoji:"⚙"});var de=A(k,2),be=A(O(de),2),Z=ve(be,!0),J=A(de,2);{var Re=ee=>{var _e=Zm(),Le=O(_e),Ie=A(Le,2);Ct(Ie,16,a,He=>He,(He,P)=>{var b=Km(),U=ve(b,!0);Pe(()=>{wt(b,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===P?"font-medium text-(--accent)":"text-(--text-muted)"}`),ge(U,P)}),ne("click",b,()=>g(P)),$(He,b)});var Oe=A(Ie,2),Ue=O(Oe),$e=A(Ue,2);Pe(He=>{wt(Le,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),$e.disabled=He},[()=>!c(s).trim()]),ne("click",Le,()=>g("")),ne("keydown",Ue,He=>{He.key==="Enter"&&c(s).trim()&&g(c(s))}),kt(Ue,()=>c(s),He=>x(s,He)),ne("click",$e,()=>g(c(s))),$(ee,_e)};qe(J,ee=>{c(o)&&ee(Re)})}var Ae=A(J,2),ke=O(Ae);mn(ke,{emoji:"📂"});var Be=A(Ae,2),Ye=A(Be,2),je=A(Ye,2),Te=A(je,2),We=A(B,2),le=O(We),N=ve(le,!0),ze=A(le,2),De=ve(ze);Pe((ee,_e,Le)=>{Qe(h,"src",ee),Qe(E,"title",e.instance.name),ge(y,e.instance.name),ge(D,e.instance.minecraft_version),wt(T,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${c(l)??""}`),ge(F,e.instance.loader_type),Qe(ae,"title",_e),ge(K,Le),H.disabled=i(),Qe(H,"title",i()?"A game is already running":`Launch ${e.instance.name}`),ge(Z,c(o)?"▴":"▾"),Ae.disabled=!t(),Qe(Ae,"title",t()?"Opens the instance folder":"Storage unknown"),ge(N,c(v)),ge(De,`${r()??"…"??""} mods installed`)},[()=>u(),()=>d(),()=>d()]),Ui("error",h,ee=>{ee.currentTarget.dataset.f||(ee.currentTarget.dataset.f="1",ee.currentTarget.src="/logo.png")}),ne("click",H,function(...ee){e.onlaunch?.apply(this,ee)}),ne("click",k,function(...ee){e.onedit?.apply(this,ee)}),ne("click",de,()=>x(o,!c(o))),ne("click",Ae,function(...ee){e.onopenfolder?.apply(this,ee)}),ne("click",Be,function(...ee){e.onexport?.apply(this,ee)}),ne("click",Ye,function(...ee){e.oncopy?.apply(this,ee)}),ne("click",je,function(...ee){e.ondelete?.apply(this,ee)}),ne("click",Te,function(...ee){e.onshortcut?.apply(this,ee)}),$(n,_),wn()}qn(["click","keydown"]);const Za="twilight_user_accent",zl="twilight_custom_themes",xc="#06B6D4",bc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],yc="#0F172A",$m="#FFFFFF",ev={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function os(n){return ev[n]??[]}function is(n){let e=n.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function Mc(n){const e=t=>{const i=parseInt(n.replace("#","").substring(t,t+2),16)/255;return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function tv(n){const e=Mc(n),t=1.05/(e+.05);return(e+.05)/(Mc(yc)+.05)>=t?yc:$m}function Ja(n,{persist:e=!0}={}){const t=is(n);if(!t)return!1;const i=document.documentElement;return i.style.setProperty("--user-accent",t),i.style.setProperty("--on-accent",tv(t)),e&&localStorage.setItem(Za,t),!0}function nv(){localStorage.removeItem(Za);const n=document.documentElement;n.style.removeProperty("--user-accent"),n.style.removeProperty("--on-accent")}function hl(){return is(localStorage.getItem(Za)??"")}function iv(){const n=hl();n&&Ja(n)}const ao=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:bc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...bc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:os("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:os("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:os("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:os("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],Gl="twilight-dark",pl={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},rv=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function av(n){let e="";for(const t of n){const i=t.codePointAt(0);i>=65&&i<=90?e+=String.fromCharCode(i+32):i>=97&&i<=122||i>=48&&i<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function tf(n){const e=n&&typeof n=="object"?n:{},t={};for(const[i,r]of Object.entries(pl))t[i]=is(e[i]??"")??r;return t}function sv(n){return typeof n=="string"&&n.startsWith("custom:")}function nf(n){return mr().find(e=>e.id===n)??null}function mr(){try{const n=JSON.parse(localStorage.getItem(zl)??"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e=="object"&&sv(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:tf(e.tokens)})):[]}catch{return[]}}function Sc({name:n,dark:e,tokens:t}){const i=String(n??"").trim()||"Custom theme",r={id:`custom:${av(i)||"theme"}`,name:i,dark:!!e,tokens:tf(t)},a=[...mr().filter(o=>o.id!==r.id),r];return localStorage.setItem(zl,JSON.stringify(a)),r}function ov(n){const e=mr().filter(t=>t.id!==n);return localStorage.setItem(zl,JSON.stringify(e)),e}function Ec(){try{const n=getComputedStyle(document.documentElement),e=(i,r)=>{const a=n.getPropertyValue(i).trim();return is(a)??r},t={};for(const[i,r]of Object.entries(pl)){const a=`--${i.replace(/(\d)$/,"-$1")}`;t[i]=e(a,r)}return t}catch{return{...pl}}}const lv=new Set(ao.map(n=>n.id));function rf(n){const e=(n??"").trim();return e==="dark"?Gl:e==="light"?"twilight-light":lv.has(e)||nf(e)?e:null}function cv(n){const e=n.tokens;return{id:n.id,label:n.name,dark:n.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:n.name,hex:e.accent1}],tokens:e}}function na(n){const e=rf(n);return e?ao.find(t=>t.id===e)??cv(nf(e)):null}function ls(n){return na(n)?.dark??!0}const uv=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Mo="";function dv(n){const e=na(n)??na(Gl);if(!e||e.id===Mo)return e;const t=Mo==="";Mo=e.id;const i=document.documentElement;for(const r of uv)i.style.removeProperty(r);i.classList.toggle("dark",e.dark),i.classList.toggle("light",!e.dark);for(const r of ao)r.cls&&i.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;i.style.setProperty("--bg-1",r.bg1),i.style.setProperty("--bg-2",r.bg2),i.style.setProperty("--bg-3",r.bg3),i.style.setProperty("--border-1",r.border1),i.style.setProperty("--fg-1",r.fg1),i.style.setProperty("--fg-2",r.fg2),i.style.setProperty("--accent-1",r.accent1),i.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(Za),Ja(r.accent1,{persist:!1})}else t||(localStorage.removeItem(Za),Ja(e.accent,{persist:!1}));return e}var fv=ue("<button></button>"),hv=ue('<span class="text-[11px] text-rose-400">invalid hex</span>'),pv=ue('<span class="text-[11px] text-(--text-muted)">live preview</span>'),mv=ue('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function vv(n,e){En(e,!0);let t=ct(e,"theme",3,"twilight-dark");const i=St(()=>na(t())?.accent??xc),r=St(()=>{const y=na(t())?.suggested??[],S=(na(t())?.accent??xc).toLowerCase();return y.map(C=>({...C,isBuiltin:C.hex.toLowerCase()===S}))});let a=pe(Lt(hl())),o=pe(Lt(c(a)??c(i))),s=pe(!1);vn(()=>{t(),x(a,hl(),!0),x(o,c(a)??c(i),!0),x(s,!1)});function l(y){return c(a)===null?y.isBuiltin:c(a)===y.hex.toLowerCase()}function u(y){y.isBuiltin?(nv(),x(a,null)):Ja(y.hex)&&x(a,y.hex.toLowerCase(),!0),x(o,c(a)??c(i),!0),x(s,!1)}function d(y,S){const C=Ja(y,{persist:S})?is(y):null;C?(x(a,C,!0),x(s,!1)):x(s,!0)}var f=mv(),p=At(f);Ct(p,21,()=>c(r),y=>y.hex,(y,S)=>{var C=fv();Pe((D,T)=>{wt(C,1,`h-7 w-7 rounded-full ${D??""}`),di(C,`background:${c(S).hex??""}`),Qe(C,"title",`${c(S).name??""}${c(S).isBuiltin?" (built-in)":""}`),Qe(C,"aria-label",`${c(S).name??""} accent`),Qe(C,"aria-pressed",T)},[()=>l(c(S))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>l(c(S))]),ne("click",C,()=>u(c(S))),$(y,C)});var v=A(p,2),g=O(v),_=A(g,2),m=A(_,2);{var h=y=>{var S=hv();$(y,S)},E=y=>{var S=pv();$(y,S)};qe(m,y=>{c(s)?y(h):y(E,-1)})}Pe(()=>{Ya(g,c(o)),Ya(_,c(o)),Qe(_,"placeholder",c(i))}),ne("input",g,y=>{x(o,y.currentTarget.value,!0),d(c(o),!1)}),ne("change",g,y=>d(y.currentTarget.value,!0)),ne("input",_,y=>{x(o,y.currentTarget.value,!0),d(c(o),!1)}),ne("change",_,y=>d(y.currentTarget.value,!0)),$(n,f),wn()}qn(["click","input","change"]);var gv=ue('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),_v=ue('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),xv=ue('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),bv=ue('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),wc=ue('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),yv=ue(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),Mv=ue("<option> </option>"),Sv=ue('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Ev=ue('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!></select> <!> <!> <button class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)">↻ Rescan JREs</button> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),wv=ue('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),Tv=ue('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),Av=ue('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),Rv=ue('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),Cv=ue('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),Pv=ue('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),Lv=ue("<p> </p>"),Dv=ue('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function Iv(n,e){En(e,!0);let t=ct(e,"version",3,""),i=ct(e,"theme",15,"twilight-dark"),r=ct(e,"storage",3,null),a=ct(e,"runtimes",19,()=>[]),o=ct(e,"scanning",3,!1),s=ct(e,"javaError",3,""),l=ct(e,"javaPath",15,""),u=ct(e,"minMem",15,0),d=ct(e,"maxMem",15,0);ct(e,"sharedInput",11,""),ct(e,"instancesInput",11,"");let f=ct(e,"storageBusy",3,!1),p=ct(e,"storageMsg",3,""),v=ct(e,"javaMsg",3,""),g=ct(e,"gameRunning",3,!1);const _=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"about",label:"About & Updates",icon:"ℹ"}];let m=pe("appearance"),h=pe(Lt(mr())),E=pe(""),y=pe(!0),S=pe(Lt(Ec())),C=pe(""),D=pe("");function T(){x(S,Ec(),!0),x(D,"Loaded the active theme’s tokens — tweak and save.")}function F(){try{const le=Sc({name:c(E),dark:c(y),tokens:c(S)});x(h,mr(),!0),i(le.id),x(D,`Saved “${le.name}”.`)}catch(le){x(D,String(le),!0)}}function M(le){ov(le),x(h,mr(),!0),i()===le&&i(Gl),x(D,"Theme deleted.")}function R(){x(C,JSON.stringify({name:c(E).trim()||"My theme",dark:c(y),tokens:c(S)},null,2),!0),x(D,"Theme JSON written below — copy it to share.")}function ae(){try{const le=JSON.parse(c(C));if(!le||typeof le!="object"||Array.isArray(le))throw new Error("Expected a theme object.");const N=Sc(le);x(h,mr(),!0),i(N.id),x(D,`Imported “${N.name}”.`),x(C,"")}catch(le){x(D,`Import failed: ${le}`)}}async function K(le){const N=window.__TAURI__?.dialog?.open;if(!N)return null;try{const ze=await N({directory:!0,multiple:!1,defaultPath:le&&le.trim()?le.trim():void 0});return typeof ze=="string"?ze:null}catch{return null}}const B=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let H=pe(Lt({}));vn(()=>{r()&&x(H,{instances:r().is_default_instances?"":r().instances_dir,shared:r().is_default_shared?"":r().shared_dir,versions:r().is_default_versions?"":r().versions_dir,mods:r().is_default_mods?"":r().mods_dir,icons:r().is_default_icons?"":r().icons_dir,java:r().is_default_java?"":r().java_dir,skins:r().is_default_skins?"":r().skins_dir,downloads:r().downloads_dir||""},!0)});function X(le){return r()?le==="downloads"?r().staging_root:r()[`${le}_dir`]:""}function j(le){return r()?le==="downloads"?r().is_default_staging:r()[`is_default_${le}`]:!0}const k="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var te=Dv(),de=O(te),be=O(de),Z=A(be,2);Ct(Z,21,()=>_,le=>le.id,(le,N)=>{var ze=gv(),De=O(ze),ee=O(De);mn(ee,{get emoji(){return c(N).icon},size:15});var _e=A(De,2),Le=ve(_e,!0);Pe(()=>{wt(ze,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${c(m)===c(N).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Qe(ze,"aria-current",c(m)===c(N).id?"true":void 0),ge(Le,c(N).label)}),ne("click",ze,()=>x(m,c(N).id,!0)),$(le,ze)});var J=A(de,2),Re=O(J),Ae=O(Re);{var ke=le=>{var N=yv(),ze=A(At(N),6),De=O(ze);Ct(De,17,()=>ao,se=>se.id,(se,oe)=>{var Ne=_v(),Ze=O(Ne),I=O(Ze),Ce=A(I,2),G=A(Ce,2),he=A(Ze,2),we=ve(he,!0),Xe=A(he,2),tt=ve(Xe,!0);Pe(()=>{wt(Ne,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===c(oe).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Qe(Ne,"aria-pressed",i()===c(oe).id),Qe(Ne,"title",`${c(oe).label??""}: ${c(oe).dark?"dark":"light"} ground`),di(I,`background:${c(oe).swatch[0]??""}`),di(Ce,`background:${c(oe).swatch[1]??""}`),di(G,`background:${c(oe).swatch[2]??""}`),ge(we,c(oe).label),ge(tt,c(oe).dark?"Dark ground":"Light ground")}),ne("click",Ne,()=>i(c(oe).id)),$(se,Ne)});var ee=A(De,2);Ct(ee,17,()=>c(h),se=>se.id,(se,oe)=>{var Ne=xv(),Ze=O(Ne),I=O(Ze),Ce=A(I,2),G=A(Ce,2),he=A(Ze,2),we=ve(he,!0),Xe=A(he,2),tt=ve(Xe),rt=A(Xe,2);Pe(()=>{wt(Ne,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===c(oe).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Qe(Ne,"title",`${c(oe).name??""}: ${c(oe).dark?"dark":"light"} ground`),di(I,`background:${c(oe).tokens.bg1??""}`),di(Ce,`background:${c(oe).tokens.bg3??""}`),di(G,`background:${c(oe).tokens.accent1??""}`),ge(we,c(oe).name),ge(tt,`Custom · ${c(oe).dark?"Dark":"Light"} ground`),Qe(rt,"title",`Delete ${c(oe).name??""}`),Qe(rt,"aria-label",`Delete ${c(oe).name??""}`)}),ne("click",Ne,()=>i(c(oe).id)),ne("keydown",Ne,bt=>{(bt.key==="Enter"||bt.key===" ")&&(bt.preventDefault(),i(c(oe).id))}),ne("click",rt,bt=>{bt.stopPropagation(),M(c(oe).id)}),$(se,Ne)});var _e=A(ze,4),Le=O(_e);vv(Le,{get theme(){return i()}});var Ie=A(_e,6),Oe=O(Ie),Ue=O(Oe),$e=A(Ue,2),He=O($e),P=A(He,2),b=A(Oe,2);Ct(b,21,()=>rv,se=>se.key,(se,oe)=>{var Ne=bv(),Ze=O(Ne),I=ve(Ze,!0),Ce=A(Ze,2),G=O(Ce),he=A(G,2);Pe(()=>{ge(I,c(oe).label),Ya(G,c(S)[c(oe).key]),Qe(G,"title",`${c(oe).label??""} color`),Qe(G,"aria-label",`${c(oe).label??""} color`),Ya(he,c(S)[c(oe).key]),Qe(he,"aria-label",`${c(oe).label??""} hex`)}),ne("input",G,we=>x(S,{...c(S),[c(oe).key]:we.currentTarget.value},!0)),ne("input",he,we=>x(S,{...c(S),[c(oe).key]:we.currentTarget.value},!0)),$(se,Ne)});var U=A(b,2),ce=O(U),ye=A(ce,2),xe=A(Ie,4),Fe=O(xe),Ee=A(Fe,2),Y=O(Ee),w=A(Y,2),V=A(xe,2);{var ie=se=>{var oe=wc(),Ne=ve(oe,!0);Pe(()=>ge(Ne,c(D))),$(se,oe)};qe(V,se=>{c(D)&&se(ie)})}Pe(()=>{wt(He,1,`px-3 py-1.5 text-[12px] ${c(y)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Qe(He,"aria-pressed",c(y)),wt(P,1,`px-3 py-1.5 text-[12px] ${c(y)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),Qe(P,"aria-pressed",!c(y))}),kt(Ue,()=>c(E),se=>x(E,se)),ne("click",He,()=>x(y,!0)),ne("click",P,()=>x(y,!1)),ne("click",ce,T),ne("click",ye,F),kt(Fe,()=>c(C),se=>x(C,se)),ne("click",Y,R),ne("click",w,ae),$(le,N)},Be=le=>{var N=Ev(),ze=A(At(N),6),De=O(ze);De.value=De.__value="";var ee=A(De);Ct(ee,17,a,xe=>xe.executable,(xe,Fe)=>{var Ee=Mv(),Y=ve(Ee),w={};Pe(()=>{ge(Y,`Java ${c(Fe).major??""} — ${c(Fe).home??""}`),w!==(w=c(Fe).executable)&&(Ee.value=(Ee.__value=w)??"")}),$(xe,Ee)}),qs(ze);var _e=A(ze,2);{var Le=xe=>{var Fe=wc(),Ee=ve(Fe,!0);Pe(()=>ge(Ee,o()?"Probing system roots…":"No runtimes detected.")),$(xe,Fe)};qe(_e,xe=>{a().length||xe(Le)})}var Ie=A(_e,2);{var Oe=xe=>{var Fe=Sv(),Ee=ve(Fe,!0);Pe(()=>ge(Ee,s())),$(xe,Fe)};qe(Ie,xe=>{s()&&xe(Oe)})}var Ue=A(Ie,2),$e=A(Ue,4),He=A(O($e),2),P=A(He,2),b=A($e,2),U=A(O(b),2),ce=A(U,2),ye=A(b,4);Pe(()=>Ue.disabled=o()),Ys(ze,l),ne("click",Ue,function(...xe){e.onscanjava?.apply(this,xe)}),kt(He,u),kt(P,u),kt(U,d),kt(ce,d),ne("click",ye,function(...xe){e.onsaveprefs?.apply(this,xe)}),$(le,N)},Ye=le=>{var N=Cv(),ze=A(At(N),4);{var De=ee=>{var _e=Rv(),Le=At(_e),Ie=O(Le),Oe=O(Ie),Ue=A(O(Oe),2),$e=ve(Ue,!0),He=A(Oe,2),P=A(Le,2);Ct(P,17,()=>B,b=>b.key,(b,U)=>{var ce=Av(),ye=O(ce),xe=O(ye),Fe=O(xe),Ee=A(Fe),Y=ve(Ee,!0),w=A(xe,2);{var V=Xe=>{var tt=wv();Pe(()=>tt.disabled=f()),ne("click",tt,()=>e.onsavefolder?.(c(U).key,"")),$(Xe,tt)},ie=St(()=>!j(c(U).key));qe(w,Xe=>{c(ie)&&Xe(V)})}var se=A(ye,2),oe=ve(se,!0),Ne=A(se,2),Ze=O(Ne),I=A(Ze,2),Ce=A(I,2),G=A(Ce,2),he=A(Ne,2);{var we=Xe=>{var tt=Tv(),rt=O(tt),bt=ve(rt),fe=A(rt,2);Pe(()=>{Qe(rt,"title",r().staging_root),ge(bt,`Staging: ${r().staging_root??""}`),fe.disabled=f()||g(),Qe(fe,"title",g()?"Unavailable while a game is running":"Purges the staging area")}),ne("click",fe,function(...Me){e.oncleanstaging?.apply(this,Me)}),$(Xe,tt)};qe(he,Xe=>{c(U).key==="downloads"&&Xe(we)})}Pe((Xe,tt)=>{ge(Fe,`${c(U).label??""} `),ge(Y,Xe),ge(oe,c(U).hint),Qe(Ze,"placeholder",tt),G.disabled=f()},[()=>j(c(U).key)?"(default)":"(custom)",()=>X(c(U).key)]),kt(Ze,()=>c(H)[c(U).key],Xe=>c(H)[c(U).key]=Xe),ne("click",I,async()=>{const Xe=await K(c(H)[c(U).key]);Xe&&(c(H)[c(U).key]=Xe)}),ne("click",Ce,()=>e.onopenfolder?.(X(c(U).key))),ne("click",G,()=>e.onsavefolder?.(c(U).key,c(H)[c(U).key])),$(b,ce)}),Pe(()=>{Qe(Ue,"title",r().app_data),ge($e,r().app_data)}),ne("click",He,()=>e.onopenfolder?.(r().app_data)),$(ee,_e)};qe(ze,ee=>{r()&&ee(De)})}$(le,N)},je=le=>{var N=Pv(),ze=A(At(N),4),De=O(ze),ee=A(O(De),2),_e=O(ee),Le=A(O(_e)),Ie=ve(Le),Oe=A(ze,2),Ue=O(Oe),$e=A(Ue,2),He=A($e,2);Pe(()=>ge(Ie,`(alpha-v${t()??""})`)),ne("click",Ue,()=>e.onopenurl?.(`${k}`)),ne("click",$e,()=>e.onopenurl?.(`${k}/releases`)),ne("click",He,()=>e.onopenurl?.(`${k}/issues`)),$(le,N)};qe(Ae,le=>{c(m)==="appearance"?le(ke):c(m)==="java"?le(Be,1):c(m)==="storage"?le(Ye,2):le(je,-1)})}var Te=A(Ae,2);{var We=le=>{var N=Lv(),ze=ve(N,!0);Pe(()=>{wt(N,1,`mt-5 text-[12px] ${v()?"text-(--accent)":"text-(--text-muted)"}`),ge(ze,v()||p())}),$(le,N)};qe(Te,le=>{(v()||p())&&le(We)})}ne("click",be,function(...le){e.onback?.apply(this,le)}),$(n,te),wn()}qn(["click","keydown","input"]);const Hl="156",Rr={ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uv=0,Tc=1,Nv=2,af=1,Ov=2,Ai=3,_i=0,Ln=1,jn=2,Ni=0,ia=1,Ac=2,Rc=3,Cc=4,Fv=5,Zr=100,kv=101,Bv=102,Pc=103,Lc=104,zv=200,Gv=201,Hv=202,Vv=203,sf=204,of=205,Wv=206,jv=207,Xv=208,qv=209,Yv=210,Kv=0,Zv=1,Jv=2,ml=3,Qv=4,$v=5,eg=6,tg=7,lf=0,ng=1,ig=2,Ji=0,rg=1,ag=2,sg=3,og=4,lg=5,cf=300,ua=301,da=302,Ks=303,vl=304,so=306,gl=1e3,ei=1001,_l=1002,Bt=1003,Dc=1004,So=1005,Vn=1006,cg=1007,Qa=1008,Qi=1009,ug=1010,dg=1011,Vl=1012,uf=1013,Ki=1014,Li=1015,fa=1016,df=1017,ff=1018,xr=1020,fg=1021,ti=1023,hg=1024,pg=1025,br=1026,ha=1027,mg=1028,hf=1029,vg=1030,pf=1031,mf=1033,Eo=33776,wo=33777,To=33778,Ao=33779,Ic=35840,Uc=35841,Nc=35842,Oc=35843,gg=36196,Fc=37492,kc=37496,Bc=37808,zc=37809,Gc=37810,Hc=37811,Vc=37812,Wc=37813,jc=37814,Xc=37815,qc=37816,Yc=37817,Kc=37818,Zc=37819,Jc=37820,Qc=37821,Ro=36492,$c=36494,eu=36495,_g=36283,tu=36284,nu=36285,iu=36286,vf=3e3,yr=3001,xg=3200,bg=3201,gf=0,yg=1,Mr="",It="srgb",xi="srgb-linear",oo="display-p3",Co=7680,Mg=519,Sg=512,Eg=513,wg=514,Tg=515,Ag=516,Rg=517,Cg=518,Pg=519,xl=35044,ru="300 es",bl=1035,Di=2e3,Zs=2001;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,yl=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Mn(n,e,t){return Math.max(e,Math.min(t,n))}function Lg(n,e){return(n%e+e)%e}function Po(n,e,t){return(1-t)*n+t*e}function au(n){return(n&n-1)===0&&n!==0}function Ml(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dg={DEG2RAD:ks};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,r,a,o,s,l,u){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,u)}set(e,t,i,r,a,o,s,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],u=i[1],d=i[4],f=i[7],p=i[2],v=i[5],g=i[8],_=r[0],m=r[3],h=r[6],E=r[1],y=r[4],S=r[7],C=r[2],D=r[5],T=r[8];return a[0]=o*_+s*E+l*C,a[3]=o*m+s*y+l*D,a[6]=o*h+s*S+l*T,a[1]=u*_+d*E+f*C,a[4]=u*m+d*y+f*D,a[7]=u*h+d*S+f*T,a[2]=p*_+v*E+g*C,a[5]=p*m+v*y+g*D,a[8]=p*h+v*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],d=e[8];return t*o*d-t*s*u-i*a*d+i*s*l+r*a*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],d=e[8],f=d*o-s*u,p=s*l-d*a,v=u*a-o*l,g=t*f+i*p+r*v;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-d*i)*_,e[2]=(s*i-r*o)*_,e[3]=p*_,e[4]=(d*t-r*l)*_,e[5]=(r*a-s*t)*_,e[6]=v*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*o+u*s)+o+e,-r*u,r*l,-r*(-u*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new pt;function _f(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ig(){const n=Js("canvas");return n.style.display="block",n}const su={};function Ga(n){n in su||(su[n]=!0,console.warn(n))}function ra(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Do(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ug=new pt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ng=new pt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Og(n){return n.convertSRGBToLinear().applyMatrix3(Ng)}function Fg(n){return n.applyMatrix3(Ug).convertLinearToSRGB()}const kg={[xi]:n=>n,[It]:n=>n.convertSRGBToLinear(),[oo]:Og},Bg={[xi]:n=>n,[It]:n=>n.convertLinearToSRGB(),[oo]:Fg},zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return xi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=kg[e],r=Bg[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Pr;class xf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=Js("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ra(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ra(t[i]/255)*255):t[i]=ra(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zg=0;class bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Io(r[o].image)):a.push(Io(r[o]))}else a=Io(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Io(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gg=0;class gn extends wr{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,i=ei,r=ei,a=Vn,o=Qa,s=ti,l=Qi,u=gn.DEFAULT_ANISOTROPY,d=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=$i(),this.name="",this.source=new bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===yr?It:Mr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gl:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gl:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?yr:vf}set encoding(e){Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?It:Mr}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=cf;gn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,u=l[0],d=l[4],f=l[8],p=l[1],v=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+v+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,S=(v+1)/2,C=(h+1)/2,D=(d+p)/4,T=(f+_)/4,F=(g+m)/4;return y>S&&y>C?y<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(y),r=D/i,a=T/i):S>C?S<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),i=D/r,a=F/r):C<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(C),i=T/a,r=F/a),this.set(i,r,a,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(p-d)/E,this.w=Math.acos((u+v+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hg extends wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ga("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?It:Mr),this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Vn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Hg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yf extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vg extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const p=a[o+0],v=a[o+1],g=a[o+2],_=a[o+3];if(s===0){e[t+0]=l,e[t+1]=u,e[t+2]=d,e[t+3]=f;return}if(s===1){e[t+0]=p,e[t+1]=v,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==p||u!==v||d!==g){let m=1-s;const h=l*p+u*v+d*g+f*_,E=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),D=Math.atan2(C,h*E);m=Math.sin(m*D)/C,s=Math.sin(s*D)/C}const S=s*E;if(l=l*m+p*S,u=u*m+v*S,d=d*m+g*S,f=f*m+_*S,m===1-s){const C=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=C,u*=C,d*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=a[o],p=a[o+1],v=a[o+2],g=a[o+3];return e[t]=s*g+d*f+l*v-u*p,e[t+1]=l*g+d*p+u*f-s*v,e[t+2]=u*g+d*v+s*p-l*f,e[t+3]=d*g-s*f-l*p-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(i/2),d=s(r/2),f=s(a/2),p=l(i/2),v=l(r/2),g=l(a/2);switch(o){case"XYZ":this._x=p*d*f+u*v*g,this._y=u*v*f-p*d*g,this._z=u*d*g+p*v*f,this._w=u*d*f-p*v*g;break;case"YXZ":this._x=p*d*f+u*v*g,this._y=u*v*f-p*d*g,this._z=u*d*g-p*v*f,this._w=u*d*f+p*v*g;break;case"ZXY":this._x=p*d*f-u*v*g,this._y=u*v*f+p*d*g,this._z=u*d*g+p*v*f,this._w=u*d*f-p*v*g;break;case"ZYX":this._x=p*d*f-u*v*g,this._y=u*v*f+p*d*g,this._z=u*d*g-p*v*f,this._w=u*d*f+p*v*g;break;case"YZX":this._x=p*d*f+u*v*g,this._y=u*v*f+p*d*g,this._z=u*d*g-p*v*f,this._w=u*d*f-p*v*g;break;case"XZY":this._x=p*d*f-u*v*g,this._y=u*v*f-p*d*g,this._z=u*d*g+p*v*f,this._w=u*d*f+p*v*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],u=t[2],d=t[6],f=t[10],p=i+s+f;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(d-l)*v,this._y=(a-u)*v,this._z=(o-r)*v}else if(i>s&&i>f){const v=2*Math.sqrt(1+i-s-f);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(a+u)/v}else if(s>f){const v=2*Math.sqrt(1+s-i-f);this._w=(a-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+f-i-s);this._w=(o-r)/v,this._x=(a+u)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,u=t._z,d=t._w;return this._x=i*d+o*s+r*u-a*l,this._y=r*d+o*l+a*s-i*u,this._z=a*d+o*u+i*l-r*s,this._w=o*d-i*s-r*l-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,s),f=Math.sin((1-t)*d)/u,p=Math.sin(t*d)/u;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=l*t+o*r-s*i,d=l*i+s*t-a*r,f=l*r+a*i-o*t,p=-a*t-o*i-s*r;return this.x=u*l+p*-a+d*-s-f*-o,this.y=d*l+p*-o+f*-a-u*-s,this.z=f*l+p*-s+u*-o-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new W,ou=new Er;class rs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox),Lr.applyMatrix4(e.matrixWorld),this.union(Lr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)Mi.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Mi)}else r.boundingBox===null&&r.computeBoundingBox(),Lr.copy(r.boundingBox),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),cs.subVectors(this.max,Ta),Dr.subVectors(e.a,Ta),Ir.subVectors(e.b,Ta),Ur.subVectors(e.c,Ta),Wi.subVectors(Ir,Dr),ji.subVectors(Ur,Ir),ar.subVectors(Dr,Ur);let t=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-ar.z,ar.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,ar.z,0,-ar.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-ar.y,ar.x,0];return!No(t,Dr,Ir,Ur,cs)||(t=[1,0,0,0,1,0,0,0,1],!No(t,Dr,Ir,Ur,cs))?!1:(us.crossVectors(Wi,ji),t=[us.x,us.y,us.z],No(t,Dr,Ir,Ur,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new W,new W,new W,new W,new W,new W,new W,new W],Mi=new W,Lr=new rs,Dr=new W,Ir=new W,Ur=new W,Wi=new W,ji=new W,ar=new W,Ta=new W,cs=new W,us=new W,sr=new W;function No(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){sr.fromArray(n,a);const s=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),u=t.dot(sr),d=i.dot(sr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>s)return!1}return!0}const Wg=new rs,Aa=new W,Oo=new W;class Wl{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wg.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Oo)),this.expandByPoint(Aa.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new W,Fo=new W,ds=new W,Xi=new W,ko=new W,fs=new W,Bo=new W;class Mf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fo.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Fo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ds),s=Xi.dot(this.direction),l=-Xi.dot(ds),u=Xi.lengthSq(),d=Math.abs(1-o*o);let f,p,v,g;if(d>0)if(f=o*l-s,p=o*s-l,g=a*d,f>=0)if(p>=-g)if(p<=g){const _=1/d;f*=_,p*=_,v=f*(f+o*p+2*s)+p*(o*f+p+2*l)+u}else p=a,f=Math.max(0,-(o*p+s)),v=-f*f+p*(p+2*l)+u;else p=-a,f=Math.max(0,-(o*p+s)),v=-f*f+p*(p+2*l)+u;else p<=-g?(f=Math.max(0,-(-o*a+s)),p=f>0?-a:Math.min(Math.max(-a,-l),a),v=-f*f+p*(p+2*l)+u):p<=g?(f=0,p=Math.min(Math.max(-a,-l),a),v=p*(p+2*l)+u):(f=Math.max(0,-(o*a+s)),p=f>0?a:Math.min(Math.max(-a,-l),a),v=-f*f+p*(p+2*l)+u);else p=o>0?-a:a,f=Math.max(0,-(o*p+s)),v=-f*f+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fo).addScaledVector(ds,p),v}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),d>=0?(a=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(a=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(s=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,a){ko.subVectors(t,e),fs.subVectors(i,e),Bo.crossVectors(ko,fs);let o=this.direction.dot(Bo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=s*this.direction.dot(fs.crossVectors(Xi,fs));if(l<0)return null;const u=s*this.direction.dot(ko.cross(Xi));if(u<0||l+u>o)return null;const d=-s*Xi.dot(Bo);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,r,a,o,s,l,u,d,f,p,v,g,_,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,u,d,f,p,v,g,_,m)}set(e,t,i,r,a,o,s,l,u,d,f,p,v,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=u,h[6]=d,h[10]=f,h[14]=p,h[3]=v,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),a=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=o*d,v=o*f,g=s*d,_=s*f;t[0]=l*d,t[4]=-l*f,t[8]=u,t[1]=v+g*u,t[5]=p-_*u,t[9]=-s*l,t[2]=_-p*u,t[6]=g+v*u,t[10]=o*l}else if(e.order==="YXZ"){const p=l*d,v=l*f,g=u*d,_=u*f;t[0]=p+_*s,t[4]=g*s-v,t[8]=o*u,t[1]=o*f,t[5]=o*d,t[9]=-s,t[2]=v*s-g,t[6]=_+p*s,t[10]=o*l}else if(e.order==="ZXY"){const p=l*d,v=l*f,g=u*d,_=u*f;t[0]=p-_*s,t[4]=-o*f,t[8]=g+v*s,t[1]=v+g*s,t[5]=o*d,t[9]=_-p*s,t[2]=-o*u,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const p=o*d,v=o*f,g=s*d,_=s*f;t[0]=l*d,t[4]=g*u-v,t[8]=p*u+_,t[1]=l*f,t[5]=_*u+p,t[9]=v*u-g,t[2]=-u,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,v=o*u,g=s*l,_=s*u;t[0]=l*d,t[4]=_-p*f,t[8]=g*f+v,t[1]=f,t[5]=o*d,t[9]=-s*d,t[2]=-u*d,t[6]=v*f+g,t[10]=p-_*f}else if(e.order==="XZY"){const p=o*l,v=o*u,g=s*l,_=s*u;t[0]=l*d,t[4]=-f,t[8]=u*d,t[1]=p*f+_,t[5]=o*d,t[9]=v*f-g,t[2]=g*f-v,t[6]=s*d,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,Xg)}lookAt(e,t,i){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),qi.crossVectors(i,Dn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),qi.crossVectors(i,Dn)),qi.normalize(),hs.crossVectors(Dn,qi),r[0]=qi.x,r[4]=hs.x,r[8]=Dn.x,r[1]=qi.y,r[5]=hs.y,r[9]=Dn.y,r[2]=qi.z,r[6]=hs.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],u=i[12],d=i[1],f=i[5],p=i[9],v=i[13],g=i[2],_=i[6],m=i[10],h=i[14],E=i[3],y=i[7],S=i[11],C=i[15],D=r[0],T=r[4],F=r[8],M=r[12],R=r[1],ae=r[5],K=r[9],B=r[13],H=r[2],X=r[6],j=r[10],k=r[14],te=r[3],de=r[7],be=r[11],Z=r[15];return a[0]=o*D+s*R+l*H+u*te,a[4]=o*T+s*ae+l*X+u*de,a[8]=o*F+s*K+l*j+u*be,a[12]=o*M+s*B+l*k+u*Z,a[1]=d*D+f*R+p*H+v*te,a[5]=d*T+f*ae+p*X+v*de,a[9]=d*F+f*K+p*j+v*be,a[13]=d*M+f*B+p*k+v*Z,a[2]=g*D+_*R+m*H+h*te,a[6]=g*T+_*ae+m*X+h*de,a[10]=g*F+_*K+m*j+h*be,a[14]=g*M+_*B+m*k+h*Z,a[3]=E*D+y*R+S*H+C*te,a[7]=E*T+y*ae+S*X+C*de,a[11]=E*F+y*K+S*j+C*be,a[15]=E*M+y*B+S*k+C*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],d=e[2],f=e[6],p=e[10],v=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+a*l*f-r*u*f-a*s*p+i*u*p+r*s*v-i*l*v)+_*(+t*l*v-t*u*p+a*o*p-r*o*v+r*u*d-a*l*d)+m*(+t*u*f-t*s*v-a*o*f+i*o*v+a*s*d-i*u*d)+h*(-r*s*d-t*l*f+t*s*p+r*o*f-i*o*p+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],d=e[8],f=e[9],p=e[10],v=e[11],g=e[12],_=e[13],m=e[14],h=e[15],E=f*m*u-_*p*u+_*l*v-s*m*v-f*l*h+s*p*h,y=g*p*u-d*m*u-g*l*v+o*m*v+d*l*h-o*p*h,S=d*_*u-g*f*u+g*s*v-o*_*v-d*s*h+o*f*h,C=g*f*l-d*_*l-g*s*p+o*_*p+d*s*m-o*f*m,D=t*E+i*y+r*S+a*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/D;return e[0]=E*T,e[1]=(_*p*a-f*m*a-_*r*v+i*m*v+f*r*h-i*p*h)*T,e[2]=(s*m*a-_*l*a+_*r*u-i*m*u-s*r*h+i*l*h)*T,e[3]=(f*l*a-s*p*a-f*r*u+i*p*u+s*r*v-i*l*v)*T,e[4]=y*T,e[5]=(d*m*a-g*p*a+g*r*v-t*m*v-d*r*h+t*p*h)*T,e[6]=(g*l*a-o*m*a-g*r*u+t*m*u+o*r*h-t*l*h)*T,e[7]=(o*p*a-d*l*a+d*r*u-t*p*u-o*r*v+t*l*v)*T,e[8]=S*T,e[9]=(g*f*a-d*_*a-g*i*v+t*_*v+d*i*h-t*f*h)*T,e[10]=(o*_*a-g*s*a+g*i*u-t*_*u-o*i*h+t*s*h)*T,e[11]=(d*s*a-o*f*a-d*i*u+t*f*u+o*i*v-t*s*v)*T,e[12]=C*T,e[13]=(d*_*r-g*f*r+g*i*p-t*_*p-d*i*m+t*f*m)*T,e[14]=(g*s*r-o*_*r-g*i*l+t*_*l+o*i*m-t*s*m)*T,e[15]=(o*f*r-d*s*r+d*i*l-t*f*l-o*i*p+t*s*p)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,u=a*o,d=a*s;return this.set(u*o+i,u*s-r*l,u*l+r*s,0,u*s+r*l,d*s+i,d*l-r*o,0,u*l-r*s,d*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,u=a+a,d=o+o,f=s+s,p=a*u,v=a*d,g=a*f,_=o*d,m=o*f,h=s*f,E=l*u,y=l*d,S=l*f,C=i.x,D=i.y,T=i.z;return r[0]=(1-(_+h))*C,r[1]=(v+S)*C,r[2]=(g-y)*C,r[3]=0,r[4]=(v-S)*D,r[5]=(1-(p+h))*D,r[6]=(m+E)*D,r[7]=0,r[8]=(g+y)*T,r[9]=(m-E)*T,r[10]=(1-(p+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),s=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const u=1/a,d=1/o,f=1/s;return Jn.elements[0]*=u,Jn.elements[1]*=u,Jn.elements[2]*=u,Jn.elements[4]*=d,Jn.elements[5]*=d,Jn.elements[6]*=d,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,t.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Di){const l=this.elements,u=2*a/(t-e),d=2*a/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let v,g;if(s===Di)v=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===Zs)v=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Di){const l=this.elements,u=1/(t-e),d=1/(i-r),f=1/(o-a),p=(t+e)*u,v=(i+r)*d;let g,_;if(s===Di)g=(o+a)*f,_=-2*f;else if(s===Zs)g=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Nr=new W,Jn=new Yt,jg=new W(0,0,0),Xg=new W(1,1,1),qi=new W,hs=new W,Dn=new W,lu=new Yt,cu=new Er;class lo{constructor(e=0,t=0,i=0,r=lo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],u=r[5],d=r[9],f=r[2],p=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Mn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,v));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lo.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qg=0;const uu=new W,Or=new Er,Ei=new Yt,ps=new W,Ra=new W,Yg=new W,Kg=new Er,du=new W(1,0,0),fu=new W(0,1,0),hu=new W(0,0,1),Zg={type:"added"},Jg={type:"removed"};class _n extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new W,t=new lo,i=new Er,r=new W(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yt},normalMatrix:{value:new pt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ps.copy(e):ps.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ra,ps,this.up):Ei.lookAt(ps,Ra,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(Ei),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,Yg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,Kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),v=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),v.length>0&&(i.animations=v),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(s){const l=[];for(const u in s){const d=s[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new W(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new W,wi=new W,zo=new W,Ti=new W,Fr=new W,kr=new W,pu=new W,Go=new W,Ho=new W,Vo=new W;let ms=!1;class Wn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qn.subVectors(e,t),r.cross(Qn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Qn.subVectors(r,t),wi.subVectors(i,t),zo.subVectors(e,t);const o=Qn.dot(Qn),s=Qn.dot(wi),l=Qn.dot(zo),u=wi.dot(wi),d=wi.dot(zo),f=o*u-s*s;if(f===0)return a.set(-2,-1,-1);const p=1/f,v=(u*l-s*d)*p,g=(o*d-s*l)*p;return a.set(1-v-g,g,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ti),Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,i,r,a,o,s,l){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,Ti),l.setScalar(0),l.addScaledVector(a,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(s,Ti.z),l}static isFrontFacing(e,t,i,r){return Qn.subVectors(i,t),wi.subVectors(e,t),Qn.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),Wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;Fr.subVectors(r,i),kr.subVectors(a,i),Go.subVectors(e,i);const l=Fr.dot(Go),u=kr.dot(Go);if(l<=0&&u<=0)return t.copy(i);Ho.subVectors(e,r);const d=Fr.dot(Ho),f=kr.dot(Ho);if(d>=0&&f<=d)return t.copy(r);const p=l*f-d*u;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Fr,o);Vo.subVectors(e,a);const v=Fr.dot(Vo),g=kr.dot(Vo);if(g>=0&&v<=g)return t.copy(a);const _=v*u-l*g;if(_<=0&&u>=0&&g<=0)return s=u/(u-g),t.copy(i).addScaledVector(kr,s);const m=d*g-v*f;if(m<=0&&f-d>=0&&v-g>=0)return pu.subVectors(a,r),s=(f-d)/(f-d+(v-g)),t.copy(r).addScaledVector(pu,s);const h=1/(m+_+p);return o=_*h,s=p*h,t.copy(i).addScaledVector(Fr,o).addScaledVector(kr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qg=0;class xa extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=ia,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=of,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Co,this.stencilZFail=Co,this.stencilZPass=Co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ia&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Wo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=zn.workingColorSpace){return this.r=e,this.g=t,this.b=i,zn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=zn.workingColorSpace){if(e=Lg(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Wo(o,a,e+1/3),this.g=Wo(o,a,e),this.b=Wo(o,a,e-1/3)}return zn.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=Ef[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return zn.fromWorkingColorSpace(pn.copy(this),e),Math.round(Mn(pn.r*255,0,255))*65536+Math.round(Mn(pn.g*255,0,255))*256+Math.round(Mn(pn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zn.workingColorSpace){zn.fromWorkingColorSpace(pn.copy(this),t);const i=pn.r,r=pn.g,a=pn.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,u;const d=(s+o)/2;if(s===o)l=0,u=0;else{const f=o-s;switch(u=d<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,t=zn.workingColorSpace){return zn.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=It){zn.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,r=pn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),$n.h+=e,$n.s+=t,$n.l+=i,this.setHSL($n.h,$n.s,$n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(vs);const i=Po($n.h,vs.h,t),r=Po($n.s,vs.s,t),a=Po($n.l,vs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Mt;Mt.NAMES=Ef;class wf extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new W,gs=new et;class si{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xl,this.updateRange={offset:0,count:-1},this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ci(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),a=Tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Tf extends si{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Af extends si{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Oi extends si{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $g=0;const kn=new Yt,jo=new _n,Br=new W,In=new rs,Ca=new rs,an=new W;class Gi extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?Af:Tf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];In.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Ca.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(In.min,Ca.min),In.expandByPoint(an),an.addVectors(In.max,Ca.max),In.expandByPoint(an)):(In.expandByPoint(Ca.min),In.expandByPoint(Ca.max))}In.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)an.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(an));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let u=0,d=s.count;u<d;u++)an.fromBufferAttribute(s,u),l&&(Br.fromBufferAttribute(e,u),an.add(Br)),r=Math.max(r,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let R=0;R<s;R++)u[R]=new W,d[R]=new W;const f=new W,p=new W,v=new W,g=new et,_=new et,m=new et,h=new W,E=new W;function y(R,ae,K){f.fromArray(r,R*3),p.fromArray(r,ae*3),v.fromArray(r,K*3),g.fromArray(o,R*2),_.fromArray(o,ae*2),m.fromArray(o,K*2),p.sub(f),v.sub(f),_.sub(g),m.sub(g);const B=1/(_.x*m.y-m.x*_.y);isFinite(B)&&(h.copy(p).multiplyScalar(m.y).addScaledVector(v,-_.y).multiplyScalar(B),E.copy(v).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(B),u[R].add(h),u[ae].add(h),u[K].add(h),d[R].add(E),d[ae].add(E),d[K].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let R=0,ae=S.length;R<ae;++R){const K=S[R],B=K.start,H=K.count;for(let X=B,j=B+H;X<j;X+=3)y(i[X+0],i[X+1],i[X+2])}const C=new W,D=new W,T=new W,F=new W;function M(R){T.fromArray(a,R*3),F.copy(T);const ae=u[R];C.copy(ae),C.sub(T.multiplyScalar(T.dot(ae))).normalize(),D.crossVectors(F,ae);const B=D.dot(d[R])<0?-1:1;l[R*4]=C.x,l[R*4+1]=C.y,l[R*4+2]=C.z,l[R*4+3]=B}for(let R=0,ae=S.length;R<ae;++R){const K=S[R],B=K.start,H=K.count;for(let X=B,j=B+H;X<j;X+=3)M(i[X+0]),M(i[X+1]),M(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,v=i.count;p<v;p++)i.setXYZ(p,0,0,0);const r=new W,a=new W,o=new W,s=new W,l=new W,u=new W,d=new W,f=new W;if(e)for(let p=0,v=e.count;p<v;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),d.subVectors(o,a),f.subVectors(r,a),d.cross(f),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),s.add(d),l.add(d),u.add(d),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,v=t.count;p<v;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,a),f.subVectors(r,a),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(s,l){const u=s.array,d=s.itemSize,f=s.normalized,p=new u.constructor(l.length*d);let v=0,g=0;for(let _=0,m=l.length;_<m;_++){s.isInterleavedBufferAttribute?v=l[_]*s.data.stride+s.offset:v=l[_]*d;for(let h=0;h<d;h++)p[g++]=u[v++]}return new si(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gi,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);t.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let d=0,f=u.length;d<f;d++){const p=u[d],v=e(p,i);l.push(v)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,p=u.length;f<p;f++){const v=u[f];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],f=a[u];for(let p=0,v=f.length;p<v;p++)d.push(f[p].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new Yt,or=new Mf,_s=new Wl,vu=new W,zr=new W,Gr=new W,Hr=new W,Xo=new W,xs=new W,bs=new et,ys=new et,Ms=new et,gu=new W,_u=new W,xu=new W,Ss=new W,Es=new W;class Rt extends _n{constructor(e=new Gi,t=new wf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){xs.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const d=s[l],f=a[l];d!==0&&(Xo.fromBufferAttribute(f,e),o?xs.addScaledVector(Xo,d):xs.addScaledVector(Xo.sub(t),d))}t.add(xs)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere),_s.applyMatrix4(a),or.copy(e.ray).recast(e.near),!(_s.containsPoint(or.origin)===!1&&(or.intersectSphere(_s,vu)===null||or.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(mu.copy(a).invert(),or.copy(e.ray).applyMatrix4(mu),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,p=a.groups,v=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],h=o[m.materialIndex],E=Math.max(m.start,v.start),y=Math.min(s.count,Math.min(m.start+m.count,v.start+v.count));for(let S=E,C=y;S<C;S+=3){const D=s.getX(S),T=s.getX(S+1),F=s.getX(S+2);r=ws(this,h,e,i,u,d,f,D,T,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,v.start),_=Math.min(s.count,v.start+v.count);for(let m=g,h=_;m<h;m+=3){const E=s.getX(m),y=s.getX(m+1),S=s.getX(m+2);r=ws(this,o,e,i,u,d,f,E,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],h=o[m.materialIndex],E=Math.max(m.start,v.start),y=Math.min(l.count,Math.min(m.start+m.count,v.start+v.count));for(let S=E,C=y;S<C;S+=3){const D=S,T=S+1,F=S+2;r=ws(this,h,e,i,u,d,f,D,T,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,v.start),_=Math.min(l.count,v.start+v.count);for(let m=g,h=_;m<h;m+=3){const E=m,y=m+1,S=m+2;r=ws(this,o,e,i,u,d,f,E,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function e_(n,e,t,i,r,a,o,s){let l;if(e.side===Ln?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===_i,s),l===null)return null;Es.copy(s),Es.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Es);return u<t.near||u>t.far?null:{distance:u,point:Es.clone(),object:n}}function ws(n,e,t,i,r,a,o,s,l,u){n.getVertexPosition(s,zr),n.getVertexPosition(l,Gr),n.getVertexPosition(u,Hr);const d=e_(n,e,t,i,zr,Gr,Hr,Ss);if(d){r&&(bs.fromBufferAttribute(r,s),ys.fromBufferAttribute(r,l),Ms.fromBufferAttribute(r,u),d.uv=Wn.getInterpolation(Ss,zr,Gr,Hr,bs,ys,Ms,new et)),a&&(bs.fromBufferAttribute(a,s),ys.fromBufferAttribute(a,l),Ms.fromBufferAttribute(a,u),d.uv1=Wn.getInterpolation(Ss,zr,Gr,Hr,bs,ys,Ms,new et),d.uv2=d.uv1),o&&(gu.fromBufferAttribute(o,s),_u.fromBufferAttribute(o,l),xu.fromBufferAttribute(o,u),d.normal=Wn.getInterpolation(Ss,zr,Gr,Hr,gu,_u,xu,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:s,b:l,c:u,normal:new W,materialIndex:0};Wn.getNormal(zr,Gr,Hr,f.normal),d.face=f}return d}class Xt extends Gi{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],d=[],f=[];let p=0,v=0;g("z","y","x",-1,-1,i,t,e,o,a,0),g("z","y","x",1,-1,i,t,-e,o,a,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Oi(u,3)),this.setAttribute("normal",new Oi(d,3)),this.setAttribute("uv",new Oi(f,2));function g(_,m,h,E,y,S,C,D,T,F,M){const R=S/T,ae=C/F,K=S/2,B=C/2,H=D/2,X=T+1,j=F+1;let k=0,te=0;const de=new W;for(let be=0;be<j;be++){const Z=be*ae-B;for(let J=0;J<X;J++){const Re=J*R-K;de[_]=Re*E,de[m]=Z*y,de[h]=H,u.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[h]=D>0?1:-1,d.push(de.x,de.y,de.z),f.push(J/T),f.push(1-be/F),k+=1}}for(let be=0;be<F;be++)for(let Z=0;Z<T;Z++){const J=p+Z+X*be,Re=p+Z+X*(be+1),Ae=p+(Z+1)+X*(be+1),ke=p+(Z+1)+X*be;l.push(J,Re,ke),l.push(Re,Ae,ke),te+=6}s.addGroup(v,te,M),v+=te,p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yn(n){const e={};for(let t=0;t<n.length;t++){const i=pa(n[t]);for(const r in i)e[r]=i[r]}return e}function t_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rf(n){return n.getRenderTarget()===null?n.outputColorSpace:xi}const Cf={clone:pa,merge:yn};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pa(e.uniforms),this.uniformsGroups=t_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pf extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends Pf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vr=-90,Wr=1;class r_ extends _n{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Nn(Vr,Wr,e,t);r.layers=this.layers,this.add(r);const a=new Nn(Vr,Wr,e,t);a.layers=this.layers,this.add(a);const o=new Nn(Vr,Wr,e,t);o.layers=this.layers,this.add(o);const s=new Nn(Vr,Wr,e,t);s.layers=this.layers,this.add(s);const l=new Nn(Vr,Wr,e,t);l.layers=this.layers,this.add(l);const u=new Nn(Vr,Wr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const u of t)this.remove(u);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,l,u]=this.children,d=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(d),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Lf extends gn{constructor(e,t,i,r,a,o,s,l,u,d){e=e!==void 0?e:[],t=t!==void 0?t:ua,super(e,t,i,r,a,o,s,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a_ extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ga("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===yr?It:Mr),this.texture=new Lf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xt(5,5,5),a=new Bi({name:"CubemapFromEquirect",uniforms:pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:Ni});a.uniforms.tEquirect.value=t;const o=new Rt(r,a),s=t.minFilter;return t.minFilter===Qa&&(t.minFilter=Vn),new r_(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const qo=new W,s_=new W,o_=new pt;class Yi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=qo.subVectors(i,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||o_.getNormalMatrix(e),r=this.coplanarPoint(qo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Wl,Ts=new W;class jl{constructor(e=new Yi,t=new Yi,i=new Yi,r=new Yi,a=new Yi,o=new Yi){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],u=r[4],d=r[5],f=r[6],p=r[7],v=r[8],g=r[9],_=r[10],m=r[11],h=r[12],E=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-a,p-u,m-v,S-h).normalize(),i[1].setComponents(l+a,p+u,m+v,S+h).normalize(),i[2].setComponents(l+o,p+d,m+g,S+E).normalize(),i[3].setComponents(l-o,p-d,m-g,S-E).normalize(),i[4].setComponents(l-s,p-f,m-_,S-y).normalize(),t===Di)i[5].setComponents(l+s,p+f,m+_,S+y).normalize();else if(t===Zs)i[5].setComponents(s,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ts.x=r.normal.x>0?e.max.x:e.min.x,Ts.y=r.normal.y>0?e.max.y:e.min.y,Ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Df(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function l_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,d){const f=u.array,p=u.usage,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,f,p),u.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function a(u,d,f){const p=d.array,v=d.updateRange;n.bindBuffer(f,u),v.count===-1?n.bufferSubData(f,0,p):(t?n.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count):n.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(n.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,d)):f.version<u.version&&(a(f.buffer,u,d),f.version=u.version)}return{get:o,remove:s,update:l}}class Xl extends Gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),u=s+1,d=l+1,f=e/s,p=t/l,v=[],g=[],_=[],m=[];for(let h=0;h<d;h++){const E=h*p-o;for(let y=0;y<u;y++){const S=y*f-a;g.push(S,-E,0),_.push(0,0,1),m.push(y/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<s;E++){const y=E+u*h,S=E+u*(h+1),C=E+1+u*(h+1),D=E+1+u*h;v.push(y,S,D),v.push(S,C,D)}this.setIndex(v),this.setAttribute("position",new Oi(g,3)),this.setAttribute("normal",new Oi(_,3)),this.setAttribute("uv",new Oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.widthSegments,e.heightSegments)}}var c_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u_=`#ifdef USE_ALPHAHASH
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
#endif`,d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,p_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,__=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,P_=`#define PI 3.141592653589793
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
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D_=`vec3 transformedNormal = objectNormal;
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
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F_="gl_FragColor = linearToOutputTexel( gl_FragColor );",k_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B_=`#ifdef USE_ENVMAP
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
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y_=`#ifdef USE_GRADIENTMAP
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
}`,K_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$_=`uniform bool receiveShadow;
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
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
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
#endif`,sx=`struct PhysicalMaterial {
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
}`,ox=`
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ux=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gx=`#if defined( USE_POINTS_UV )
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
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yx=`#ifdef USE_MORPHNORMALS
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
#endif`,Mx=`#ifdef USE_MORPHTARGETS
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
#endif`,Sx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
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
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jx=`float getShadowMask() {
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
}`,Xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
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
#endif`,tb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ob=`uniform sampler2D t2D;
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
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`#include <common>
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
}`,hb=`#if DEPTH_PACKING == 3200
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
}`,pb=`#define DISTANCE
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
}`,mb=`#define DISTANCE
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`uniform float scale;
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
}`,xb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,yb=`uniform vec3 diffuse;
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
}`,Mb=`#define LAMBERT
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
}`,Sb=`#define LAMBERT
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
}`,Eb=`#define MATCAP
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
}`,wb=`#define MATCAP
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
}`,Tb=`#define NORMAL
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
}`,Ab=`#define NORMAL
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
}`,Rb=`#define PHONG
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
}`,Cb=`#define PHONG
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
}`,Pb=`#define STANDARD
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
}`,Lb=`#define STANDARD
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
}`,Db=`#define TOON
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
}`,Ib=`#define TOON
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
}`,Ub=`uniform float size;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Fb=`uniform vec3 color;
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
}`,kb=`uniform float rotation;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:c_,alphahash_pars_fragment:u_,alphamap_fragment:d_,alphamap_pars_fragment:f_,alphatest_fragment:h_,alphatest_pars_fragment:p_,aomap_fragment:m_,aomap_pars_fragment:v_,begin_vertex:g_,beginnormal_vertex:__,bsdfs:x_,iridescence_fragment:b_,bumpmap_pars_fragment:y_,clipping_planes_fragment:M_,clipping_planes_pars_fragment:S_,clipping_planes_pars_vertex:E_,clipping_planes_vertex:w_,color_fragment:T_,color_pars_fragment:A_,color_pars_vertex:R_,color_vertex:C_,common:P_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:D_,displacementmap_pars_vertex:I_,displacementmap_vertex:U_,emissivemap_fragment:N_,emissivemap_pars_fragment:O_,colorspace_fragment:F_,colorspace_pars_fragment:k_,envmap_fragment:B_,envmap_common_pars_fragment:z_,envmap_pars_fragment:G_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:ex,envmap_vertex:V_,fog_vertex:W_,fog_pars_vertex:j_,fog_fragment:X_,fog_pars_fragment:q_,gradientmap_pars_fragment:Y_,lightmap_fragment:K_,lightmap_pars_fragment:Z_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:Q_,lights_pars_begin:$_,lights_toon_fragment:tx,lights_toon_pars_fragment:nx,lights_phong_fragment:ix,lights_phong_pars_fragment:rx,lights_physical_fragment:ax,lights_physical_pars_fragment:sx,lights_fragment_begin:ox,lights_fragment_maps:lx,lights_fragment_end:cx,logdepthbuf_fragment:ux,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:fx,logdepthbuf_vertex:hx,map_fragment:px,map_pars_fragment:mx,map_particle_fragment:vx,map_particle_pars_fragment:gx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:xx,morphcolor_vertex:bx,morphnormal_vertex:yx,morphtarget_pars_vertex:Mx,morphtarget_vertex:Sx,normal_fragment_begin:Ex,normal_fragment_maps:wx,normal_pars_fragment:Tx,normal_pars_vertex:Ax,normal_vertex:Rx,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Lx,clearcoat_pars_fragment:Dx,iridescence_pars_fragment:Ix,opaque_fragment:Ux,packing:Nx,premultiplied_alpha_fragment:Ox,project_vertex:Fx,dithering_fragment:kx,dithering_pars_fragment:Bx,roughnessmap_fragment:zx,roughnessmap_pars_fragment:Gx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Wx,shadowmask_pars_fragment:jx,skinbase_vertex:Xx,skinning_pars_vertex:qx,skinning_vertex:Yx,skinnormal_vertex:Kx,specularmap_fragment:Zx,specularmap_pars_fragment:Jx,tonemapping_fragment:Qx,tonemapping_pars_fragment:$x,transmission_fragment:eb,transmission_pars_fragment:tb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:rb,worldpos_vertex:ab,background_vert:sb,background_frag:ob,backgroundCube_vert:lb,backgroundCube_frag:cb,cube_vert:ub,cube_frag:db,depth_vert:fb,depth_frag:hb,distanceRGBA_vert:pb,distanceRGBA_frag:mb,equirect_vert:vb,equirect_frag:gb,linedashed_vert:_b,linedashed_frag:xb,meshbasic_vert:bb,meshbasic_frag:yb,meshlambert_vert:Mb,meshlambert_frag:Sb,meshmatcap_vert:Eb,meshmatcap_frag:wb,meshnormal_vert:Tb,meshnormal_frag:Ab,meshphong_vert:Rb,meshphong_frag:Cb,meshphysical_vert:Pb,meshphysical_frag:Lb,meshtoon_vert:Db,meshtoon_frag:Ib,points_vert:Ub,points_frag:Nb,shadow_vert:Ob,shadow_frag:Fb,sprite_vert:kb,sprite_frag:Bb},Ve={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},fi={basic:{uniforms:yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Mt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:yn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:yn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Mt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:yn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:yn([Ve.points,Ve.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:yn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:yn([Ve.common,Ve.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:yn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:yn([Ve.sprite,Ve.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:yn([Ve.common,Ve.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:yn([Ve.lights,Ve.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};fi.physical={uniforms:yn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const As={r:0,b:0,g:0};function zb(n,e,t,i,r,a,o){const s=new Mt(0);let l=a===!0?0:1,u,d,f=null,p=0,v=null;function g(m,h){let E=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?_(s,l):y&&y.isColor&&(_(y,1),E=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===so)?(d===void 0&&(d=new Rt(new Xt(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:pa(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,D,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=y.colorSpace!==It,(f!==y||p!==y.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,f=y,p=y.version,v=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Rt(new Xl(2,2),new Bi({name:"BackgroundMaterial",uniforms:pa(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=y.colorSpace!==It,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||v!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,p=y.version,v=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,h){m.getRGB(As,Rf(n)),i.buffers.color.setClear(As.r,As.g,As.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(s,l)},render:g}}function Gb(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let u=l,d=!1;function f(H,X,j,k,te){let de=!1;if(o){const be=_(k,j,X);u!==be&&(u=be,v(u.object)),de=h(H,k,j,te),de&&E(H,k,j,te)}else{const be=X.wireframe===!0;(u.geometry!==k.id||u.program!==j.id||u.wireframe!==be)&&(u.geometry=k.id,u.program=j.id,u.wireframe=be,de=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,F(H,X,j,k),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function p(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function v(H){return i.isWebGL2?n.bindVertexArray(H):a.bindVertexArrayOES(H)}function g(H){return i.isWebGL2?n.deleteVertexArray(H):a.deleteVertexArrayOES(H)}function _(H,X,j){const k=j.wireframe===!0;let te=s[H.id];te===void 0&&(te={},s[H.id]=te);let de=te[X.id];de===void 0&&(de={},te[X.id]=de);let be=de[k];return be===void 0&&(be=m(p()),de[k]=be),be}function m(H){const X=[],j=[],k=[];for(let te=0;te<r;te++)X[te]=0,j[te]=0,k[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:k,object:H,attributes:{},index:null}}function h(H,X,j,k){const te=u.attributes,de=X.attributes;let be=0;const Z=j.getAttributes();for(const J in Z)if(Z[J].location>=0){const Ae=te[J];let ke=de[J];if(ke===void 0&&(J==="instanceMatrix"&&H.instanceMatrix&&(ke=H.instanceMatrix),J==="instanceColor"&&H.instanceColor&&(ke=H.instanceColor)),Ae===void 0||Ae.attribute!==ke||ke&&Ae.data!==ke.data)return!0;be++}return u.attributesNum!==be||u.index!==k}function E(H,X,j,k){const te={},de=X.attributes;let be=0;const Z=j.getAttributes();for(const J in Z)if(Z[J].location>=0){let Ae=de[J];Ae===void 0&&(J==="instanceMatrix"&&H.instanceMatrix&&(Ae=H.instanceMatrix),J==="instanceColor"&&H.instanceColor&&(Ae=H.instanceColor));const ke={};ke.attribute=Ae,Ae&&Ae.data&&(ke.data=Ae.data),te[J]=ke,be++}u.attributes=te,u.attributesNum=be,u.index=k}function y(){const H=u.newAttributes;for(let X=0,j=H.length;X<j;X++)H[X]=0}function S(H){C(H,0)}function C(H,X){const j=u.newAttributes,k=u.enabledAttributes,te=u.attributeDivisors;j[H]=1,k[H]===0&&(n.enableVertexAttribArray(H),k[H]=1),te[H]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,X),te[H]=X)}function D(){const H=u.newAttributes,X=u.enabledAttributes;for(let j=0,k=X.length;j<k;j++)X[j]!==H[j]&&(n.disableVertexAttribArray(j),X[j]=0)}function T(H,X,j,k,te,de,be){be===!0?n.vertexAttribIPointer(H,X,j,te,de):n.vertexAttribPointer(H,X,j,k,te,de)}function F(H,X,j,k){if(i.isWebGL2===!1&&(H.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const te=k.attributes,de=j.getAttributes(),be=X.defaultAttributeValues;for(const Z in de){const J=de[Z];if(J.location>=0){let Re=te[Z];if(Re===void 0&&(Z==="instanceMatrix"&&H.instanceMatrix&&(Re=H.instanceMatrix),Z==="instanceColor"&&H.instanceColor&&(Re=H.instanceColor)),Re!==void 0){const Ae=Re.normalized,ke=Re.itemSize,Be=t.get(Re);if(Be===void 0)continue;const Ye=Be.buffer,je=Be.type,Te=Be.bytesPerElement,We=i.isWebGL2===!0&&(je===n.INT||je===n.UNSIGNED_INT||Re.gpuType===uf);if(Re.isInterleavedBufferAttribute){const le=Re.data,N=le.stride,ze=Re.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<J.locationSize;De++)C(J.location+De,le.meshPerAttribute);H.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<J.locationSize;De++)S(J.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let De=0;De<J.locationSize;De++)T(J.location+De,ke/J.locationSize,je,Ae,N*Te,(ze+ke/J.locationSize*De)*Te,We)}else{if(Re.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)C(J.location+le,Re.meshPerAttribute);H.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let le=0;le<J.locationSize;le++)S(J.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let le=0;le<J.locationSize;le++)T(J.location+le,ke/J.locationSize,je,Ae,ke*Te,ke/J.locationSize*le*Te,We)}}else if(be!==void 0){const Ae=be[Z];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(J.location,Ae);break;case 3:n.vertexAttrib3fv(J.location,Ae);break;case 4:n.vertexAttrib4fv(J.location,Ae);break;default:n.vertexAttrib1fv(J.location,Ae)}}}}D()}function M(){K();for(const H in s){const X=s[H];for(const j in X){const k=X[j];for(const te in k)g(k[te].object),delete k[te];delete X[j]}delete s[H]}}function R(H){if(s[H.id]===void 0)return;const X=s[H.id];for(const j in X){const k=X[j];for(const te in k)g(k[te].object),delete k[te];delete X[j]}delete s[H.id]}function ae(H){for(const X in s){const j=s[X];if(j[H.id]===void 0)continue;const k=j[H.id];for(const te in k)g(k[te].object),delete k[te];delete j[H.id]}}function K(){B(),d=!0,u!==l&&(u=l,v(u.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:ae,initAttributes:y,enableAttribute:S,disableUnusedAttributes:D}}function Hb(n,e,t,i){const r=i.isWebGL2;let a;function o(u){a=u}function s(u,d){n.drawArrays(a,u,d),t.update(d,a,1)}function l(u,d,f){if(f===0)return;let p,v;if(r)p=n,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](a,u,d,f),t.update(d,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function Vb(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,S=o||e.has("OES_texture_float"),C=y&&S,D=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:D}}function Wb(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new Yi,s=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const v=f.length!==0||p||i!==0||r;return r=p,i=f.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,v){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||a&&!m)a?d(null):u();else{const E=a?0:i,y=E*4;let S=h.clippingState||null;l.value=S,S=d(g,p,y,v);for(let C=0;C!==y;++C)S[C]=t[C];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,v,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=v+_*4,E=p.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,S=v;y!==_;++y,S+=4)o.copy(f[y]).applyMatrix4(E,s),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function jb(n){let e=new WeakMap;function t(o,s){return s===Ks?o.mapping=ua:s===vl&&(o.mapping=da),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Ks||s===vl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new a_(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class If extends Pf{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jr=4,bu=[.125,.215,.35,.446,.526,.582],fr=20,Yo=new If,yu=new Mt;let Ko=null;const ur=(1+Math.sqrt(5))/2,jr=1/ur,Mu=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,ur,jr),new W(0,ur,-jr),new W(jr,0,ur),new W(-jr,0,ur),new W(ur,jr,0),new W(-ur,jr,0)];class Su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ko=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:fa,format:ti,colorSpace:xi,depthBuffer:!1},r=Eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xb(a)),this._blurMaterial=qb(a,e,t)}return r}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,i,r){const s=new Nn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(yu),d.toneMapping=Ji,d.autoClear=!1;const v=new wf({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),g=new Rt(new Xt,v);let _=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,_=!0):(v.color.copy(yu),_=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(s.up.set(0,l[h],0),s.lookAt(u[h],0,0)):E===1?(s.up.set(0,0,l[h]),s.lookAt(0,u[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,u[h]));const y=this._cubeSize;Rs(r,E*y,h>2?y:0,y,y),d.setRenderTarget(r),_&&d.render(g,s),d.render(e,s)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ua||e.mapping===da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Yo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mu[(r-1)%Mu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Rt(this._lodPlanes[r],u),p=u.uniforms,v=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*fr-1),_=a/g,m=isFinite(a)?1+Math.floor(d*_):fr;m>fr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const h=[];let E=0;for(let T=0;T<fr;++T){const F=T/_,M=Math.exp(-F*F/2);h.push(M),T===0?E+=M:T<m&&(E+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;const S=this._sizeLods[r],C=3*S*(r>y-Jr?r-y+Jr:0),D=4*(this._cubeSize-S);Rs(t,C,D,3*S,2*S),l.setRenderTarget(t),l.render(f,Yo)}}function Xb(n){const e=[],t=[],i=[];let r=n;const a=n-Jr+1+bu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-Jr?l=bu[o-n+Jr-1]:o===0&&(l=0),i.push(l);const u=1/(s-2),d=-u,f=1+u,p=[d,d,f,d,f,f,d,d,f,f,d,f],v=6,g=6,_=3,m=2,h=1,E=new Float32Array(_*g*v),y=new Float32Array(m*g*v),S=new Float32Array(h*g*v);for(let D=0;D<v;D++){const T=D%3*2/3-1,F=D>2?0:-1,M=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];E.set(M,_*g*D),y.set(p,m*g*D);const R=[D,D,D,D,D,D];S.set(R,h*g*D)}const C=new Gi;C.setAttribute("position",new si(E,_)),C.setAttribute("uv",new si(y,m)),C.setAttribute("faceIndex",new si(S,h)),e.push(C),r>Jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eu(n,e,t){const i=new ki(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qb(n,e,t){const i=new Float32Array(fr),r=new W(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ql(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function wu(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Tu(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}function Yb(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===Ks||l===vl,d=l===ua||l===da;if(u||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Su(n)),f=u?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(u&&f&&f.height>0||d&&f&&r(f)){t===null&&(t=new Su(n));const p=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function r(s){let l=0;const u=6;for(let d=0;d<u;d++)s[d]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Kb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zb(n,e,t,i){const r={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}p.removeEventListener("dispose",o),delete r[p.id];const v=a.get(p);v&&(e.remove(v),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const g in p)e.update(p[g],n.ARRAY_BUFFER);const v=f.morphAttributes;for(const g in v){const _=v[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const p=[],v=f.index,g=f.attributes.position;let _=0;if(v!==null){const E=v.array;_=v.version;for(let y=0,S=E.length;y<S;y+=3){const C=E[y+0],D=E[y+1],T=E[y+2];p.push(C,D,D,T,T,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,S=E.length/3-1;y<S;y+=3){const C=y+0,D=y+1,T=y+2;p.push(C,D,D,T,T,C)}}else return;const m=new(_f(p)?Af:Tf)(p,1);m.version=_;const h=a.get(f);h&&e.remove(h),a.set(f,m)}function d(f){const p=a.get(f);if(p){const v=f.index;v!==null&&p.version<v.version&&u(f)}else u(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:d}}function Jb(n,e,t,i){const r=i.isWebGL2;let a;function o(p){a=p}let s,l;function u(p){s=p.type,l=p.bytesPerElement}function d(p,v){n.drawElements(a,v,s,p*l),t.update(v,a,1)}function f(p,v,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](a,v,s,p*l,g),t.update(v,a,g)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=f}function Qb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $b(n,e){return n[0]-e[0]}function e0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function t0(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new Ut,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,d,f){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let m=a.get(d);if(m===void 0||m.count!==_){let X=function(){B.dispose(),a.delete(d),d.removeEventListener("dispose",X)};var v=X;m!==void 0&&m.texture.dispose();const y=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,D=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let M=0;y===!0&&(M=1),S===!0&&(M=2),C===!0&&(M=3);let R=d.attributes.position.count*M,ae=1;R>e.maxTextureSize&&(ae=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const K=new Float32Array(R*ae*4*_),B=new yf(K,R,ae,_);B.type=Li,B.needsUpdate=!0;const H=M*4;for(let j=0;j<_;j++){const k=D[j],te=T[j],de=F[j],be=R*ae*4*j;for(let Z=0;Z<k.count;Z++){const J=Z*H;y===!0&&(o.fromBufferAttribute(k,Z),K[be+J+0]=o.x,K[be+J+1]=o.y,K[be+J+2]=o.z,K[be+J+3]=0),S===!0&&(o.fromBufferAttribute(te,Z),K[be+J+4]=o.x,K[be+J+5]=o.y,K[be+J+6]=o.z,K[be+J+7]=0),C===!0&&(o.fromBufferAttribute(de,Z),K[be+J+8]=o.x,K[be+J+9]=o.y,K[be+J+10]=o.z,K[be+J+11]=de.itemSize===4?o.w:1)}}m={count:_,texture:B,size:new et(R,ae)},a.set(d,m),d.addEventListener("dispose",X)}let h=0;for(let y=0;y<p.length;y++)h+=p[y];const E=d.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let _=i[d.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];i[d.id]=_}for(let S=0;S<g;S++){const C=_[S];C[0]=S,C[1]=p[S]}_.sort(e0);for(let S=0;S<8;S++)S<g&&_[S][1]?(s[S][0]=_[S][0],s[S][1]=_[S][1]):(s[S][0]=Number.MAX_SAFE_INTEGER,s[S][1]=0);s.sort($b);const m=d.morphAttributes.position,h=d.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const C=s[S],D=C[0],T=C[1];D!==Number.MAX_SAFE_INTEGER&&T?(m&&d.getAttribute("morphTarget"+S)!==m[D]&&d.setAttribute("morphTarget"+S,m[D]),h&&d.getAttribute("morphNormal"+S)!==h[D]&&d.setAttribute("morphNormal"+S,h[D]),r[S]=T,E+=T):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),h&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const y=d.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function n0(n,e,t,i){let r=new WeakMap;function a(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Uf=new gn,Nf=new yf,Of=new Vg,Ff=new Lf,Au=[],Ru=[],Cu=new Float32Array(16),Pu=new Float32Array(9),Lu=new Float32Array(4);function ba(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Au[r];if(a===void 0&&(a=new Float32Array(r),Au[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function co(n,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function o0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Lu.set(i),n.uniformMatrix2fv(this.addr,!1,Lu),nn(t,i)}}function l0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Pu.set(i),n.uniformMatrix3fv(this.addr,!1,Pu),nn(t,i)}}function c0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),nn(t,i)}}function u0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function p0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function _0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Uf,r)}function x0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Of,r)}function b0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ff,r)}function y0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Nf,r)}function M0(n){switch(n){case 5126:return i0;case 35664:return r0;case 35665:return a0;case 35666:return s0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return h0;case 5125:return p0;case 36294:return m0;case 36295:return v0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return y0}}function S0(n,e){n.uniform1fv(this.addr,e)}function E0(n,e){const t=ba(e,this.size,2);n.uniform2fv(this.addr,t)}function w0(n,e){const t=ba(e,this.size,3);n.uniform3fv(this.addr,t)}function T0(n,e){const t=ba(e,this.size,4);n.uniform4fv(this.addr,t)}function A0(n,e){const t=ba(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function R0(n,e){const t=ba(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function C0(n,e){const t=ba(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P0(n,e){n.uniform1iv(this.addr,e)}function L0(n,e){n.uniform2iv(this.addr,e)}function D0(n,e){n.uniform3iv(this.addr,e)}function I0(n,e){n.uniform4iv(this.addr,e)}function U0(n,e){n.uniform1uiv(this.addr,e)}function N0(n,e){n.uniform2uiv(this.addr,e)}function O0(n,e){n.uniform3uiv(this.addr,e)}function F0(n,e){n.uniform4uiv(this.addr,e)}function k0(n,e,t){const i=this.cache,r=e.length,a=co(t,r);tn(i,a)||(n.uniform1iv(this.addr,a),nn(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Uf,a[o])}function B0(n,e,t){const i=this.cache,r=e.length,a=co(t,r);tn(i,a)||(n.uniform1iv(this.addr,a),nn(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Of,a[o])}function z0(n,e,t){const i=this.cache,r=e.length,a=co(t,r);tn(i,a)||(n.uniform1iv(this.addr,a),nn(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ff,a[o])}function G0(n,e,t){const i=this.cache,r=e.length,a=co(t,r);tn(i,a)||(n.uniform1iv(this.addr,a),nn(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Nf,a[o])}function H0(n){switch(n){case 5126:return S0;case 35664:return E0;case 35665:return w0;case 35666:return T0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return U0;case 36294:return N0;case 36295:return O0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return G0}}class V0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=M0(t.type)}}class W0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=H0(t.type)}}class j0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function Du(n,e){n.seq.push(e),n.map[e.id]=e}function X0(n,e,t){const i=n.name,r=i.length;for(Zo.lastIndex=0;;){const a=Zo.exec(i),o=Zo.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===r){Du(t,u===void 0?new V0(s,n,e):new W0(s,n,e));break}else{let f=t.map[s];f===void 0&&(f=new j0(s),Du(t,f)),t=f}}}class Bs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);X0(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let q0=0;function Y0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function K0(n){switch(n){case xi:return["Linear","( value )"];case It:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Uu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Y0(n.getShaderSource(e),o)}else return r}function Z0(n,e){const t=K0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function J0(n,e){let t;switch(e){case rg:t="Linear";break;case ag:t="Reinhard";break;case sg:t="OptimizedCineon";break;case og:t="ACESFilmic";break;case lg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fa).join(`
`)}function $0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ey(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Fa(n){return n!==""}function Nu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(n){return n.replace(ty,iy)}const ny=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iy(n,e){let t=dt[e];if(t===void 0){const i=ny.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(n){return n.replace(ry,ay)}function ay(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ku(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===af?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ov?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function oy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ua:case da:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ly(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===da&&(e="ENVMAP_MODE_REFRACTION"),e}function cy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lf:e="ENVMAP_BLENDING_MULTIPLY";break;case ng:e="ENVMAP_BLENDING_MIX";break;case ig:e="ENVMAP_BLENDING_ADD";break}return e}function uy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function dy(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=sy(t),u=oy(t),d=ly(t),f=cy(t),p=uy(t),v=t.isWebGL2?"":Q0(t),g=$0(a),_=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fa).join(`
`),m.length>0&&(m+=`
`),h=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fa).join(`
`),h.length>0&&(h+=`
`)):(m=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),h=[v,ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),o=Sl(o),o=Nu(o,t),o=Ou(o,t),s=Sl(s),s=Nu(s,t),s=Ou(s,t),o=Fu(o),s=Fu(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=E+m+o,S=E+h+s,C=Iu(r,r.VERTEX_SHADER,y),D=Iu(r,r.FRAGMENT_SHADER,S);if(r.attachShader(_,C),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(C).trim(),ae=r.getShaderInfoLog(D).trim();let K=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,D);else{const H=Uu(r,C,"vertex"),X=Uu(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+H+`
`+X)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||ae==="")&&(B=!1);B&&(this.diagnostics={runnable:K,programLog:M,vertexShader:{log:R,prefix:m},fragmentShader:{log:ae,prefix:h}})}r.deleteShader(C),r.deleteShader(D);let T;this.getUniforms=function(){return T===void 0&&(T=new Bs(r,_)),T};let F;return this.getAttributes=function(){return F===void 0&&(F=ey(r,_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=D,this}let fy=0;class hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new py(e),t.set(e,i)),i}}class py{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}}function my(n,e,t,i,r,a,o){const s=new Sf,l=new hy,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,R,ae,K,B){const H=K.fog,X=B.geometry,j=M.isMeshStandardMaterial?K.environment:null,k=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),te=k&&k.mapping===so?k.image.height:null,de=g[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const be=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Z=be!==void 0?be.length:0;let J=0;X.morphAttributes.position!==void 0&&(J=1),X.morphAttributes.normal!==void 0&&(J=2),X.morphAttributes.color!==void 0&&(J=3);let Re,Ae,ke,Be;if(de){const fe=fi[de];Re=fe.vertexShader,Ae=fe.fragmentShader}else Re=M.vertexShader,Ae=M.fragmentShader,l.update(M),ke=l.getVertexShaderID(M),Be=l.getFragmentShaderID(M);const Ye=n.getRenderTarget(),je=B.isInstancedMesh===!0,Te=!!M.map,We=!!M.matcap,le=!!k,N=!!M.aoMap,ze=!!M.lightMap,De=!!M.bumpMap,ee=!!M.normalMap,_e=!!M.displacementMap,Le=!!M.emissiveMap,Ie=!!M.metalnessMap,Oe=!!M.roughnessMap,Ue=M.anisotropy>0,$e=M.clearcoat>0,He=M.iridescence>0,P=M.sheen>0,b=M.transmission>0,U=Ue&&!!M.anisotropyMap,ce=$e&&!!M.clearcoatMap,ye=$e&&!!M.clearcoatNormalMap,xe=$e&&!!M.clearcoatRoughnessMap,Fe=He&&!!M.iridescenceMap,Ee=He&&!!M.iridescenceThicknessMap,Y=P&&!!M.sheenColorMap,w=P&&!!M.sheenRoughnessMap,V=!!M.specularMap,ie=!!M.specularColorMap,se=!!M.specularIntensityMap,oe=b&&!!M.transmissionMap,Ne=b&&!!M.thicknessMap,Ze=!!M.gradientMap,I=!!M.alphaMap,Ce=M.alphaTest>0,G=!!M.alphaHash,he=!!M.extensions,we=!!X.attributes.uv1,Xe=!!X.attributes.uv2,tt=!!X.attributes.uv3;let rt=Ji;return M.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:d,shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:Re,fragmentShader:Ae,defines:M.defines,customVertexShaderID:ke,customFragmentShaderID:Be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,instancing:je,instancingColor:je&&B.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ye===null?n.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:xi,map:Te,matcap:We,envMap:le,envMapMode:le&&k.mapping,envMapCubeUVHeight:te,aoMap:N,lightMap:ze,bumpMap:De,normalMap:ee,displacementMap:p&&_e,emissiveMap:Le,normalMapObjectSpace:ee&&M.normalMapType===yg,normalMapTangentSpace:ee&&M.normalMapType===gf,metalnessMap:Ie,roughnessMap:Oe,anisotropy:Ue,anisotropyMap:U,clearcoat:$e,clearcoatMap:ce,clearcoatNormalMap:ye,clearcoatRoughnessMap:xe,iridescence:He,iridescenceMap:Fe,iridescenceThicknessMap:Ee,sheen:P,sheenColorMap:Y,sheenRoughnessMap:w,specularMap:V,specularColorMap:ie,specularIntensityMap:se,transmission:b,transmissionMap:oe,thicknessMap:Ne,gradientMap:Ze,opaque:M.transparent===!1&&M.blending===ia,alphaMap:I,alphaTest:Ce,alphaHash:G,combine:M.combine,mapUv:Te&&_(M.map.channel),aoMapUv:N&&_(M.aoMap.channel),lightMapUv:ze&&_(M.lightMap.channel),bumpMapUv:De&&_(M.bumpMap.channel),normalMapUv:ee&&_(M.normalMap.channel),displacementMapUv:_e&&_(M.displacementMap.channel),emissiveMapUv:Le&&_(M.emissiveMap.channel),metalnessMapUv:Ie&&_(M.metalnessMap.channel),roughnessMapUv:Oe&&_(M.roughnessMap.channel),anisotropyMapUv:U&&_(M.anisotropyMap.channel),clearcoatMapUv:ce&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:w&&_(M.sheenRoughnessMap.channel),specularMapUv:V&&_(M.specularMap.channel),specularColorMapUv:ie&&_(M.specularColorMap.channel),specularIntensityMapUv:se&&_(M.specularIntensityMap.channel),transmissionMapUv:oe&&_(M.transmissionMap.channel),thicknessMapUv:Ne&&_(M.thicknessMap.channel),alphaMapUv:I&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ee||Ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Xe,vertexUv3s:tt,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Te||I),fog:!!H,useFog:M.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:J,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&ae.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Te&&M.map.isVideoTexture===!0&&M.map.colorSpace===It,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jn,flipSided:M.side===Ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:he&&M.extensions.derivatives===!0,extensionFragDepth:he&&M.extensions.fragDepth===!0,extensionDrawBuffers:he&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ae in M.defines)R.push(ae),R.push(M.defines[ae]);return M.isRawShaderMaterial===!1&&(E(R,M),y(R,M),R.push(n.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function E(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function y(M,R){s.disableAll(),R.isWebGL2&&s.enable(0),R.supportsVertexTextures&&s.enable(1),R.instancing&&s.enable(2),R.instancingColor&&s.enable(3),R.matcap&&s.enable(4),R.envMap&&s.enable(5),R.normalMapObjectSpace&&s.enable(6),R.normalMapTangentSpace&&s.enable(7),R.clearcoat&&s.enable(8),R.iridescence&&s.enable(9),R.alphaTest&&s.enable(10),R.vertexColors&&s.enable(11),R.vertexAlphas&&s.enable(12),R.vertexUv1s&&s.enable(13),R.vertexUv2s&&s.enable(14),R.vertexUv3s&&s.enable(15),R.vertexTangents&&s.enable(16),R.anisotropy&&s.enable(17),M.push(s.mask),s.disableAll(),R.fog&&s.enable(0),R.useFog&&s.enable(1),R.flatShading&&s.enable(2),R.logarithmicDepthBuffer&&s.enable(3),R.skinning&&s.enable(4),R.morphTargets&&s.enable(5),R.morphNormals&&s.enable(6),R.morphColors&&s.enable(7),R.premultipliedAlpha&&s.enable(8),R.shadowMapEnabled&&s.enable(9),R.useLegacyLights&&s.enable(10),R.doubleSided&&s.enable(11),R.flipSided&&s.enable(12),R.useDepthPacking&&s.enable(13),R.dithering&&s.enable(14),R.transmission&&s.enable(15),R.sheen&&s.enable(16),R.opaque&&s.enable(17),R.pointsUvs&&s.enable(18),R.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function S(M){const R=g[M.type];let ae;if(R){const K=fi[R];ae=Cf.clone(K.uniforms)}else ae=M.uniforms;return ae}function C(M,R){let ae;for(let K=0,B=u.length;K<B;K++){const H=u[K];if(H.cacheKey===R){ae=H,++ae.usedTimes;break}}return ae===void 0&&(ae=new dy(n,R,M,a),u.push(ae)),ae}function D(M){if(--M.usedTimes===0){const R=u.indexOf(M);u[R]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:D,releaseShaderCache:T,programs:u,dispose:F}}function vy(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function gy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(f,p,v,g,_,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:v,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=v,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function s(f,p,v,g,_,m){const h=o(f,p,v,g,_,m);v.transmission>0?i.push(h):v.transparent===!0?r.push(h):t.push(h)}function l(f,p,v,g,_,m){const h=o(f,p,v,g,_,m);v.transmission>0?i.unshift(h):v.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,p){t.length>1&&t.sort(f||gy),i.length>1&&i.sort(p||Bu),r.length>1&&r.sort(p||Bu)}function d(){for(let f=e,p=n.length;f<p;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:d,sort:u}}function _y(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new zu,n.set(i,[o])):r>=a.length?(o=new zu,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Mt};break;case"SpotLight":t={position:new W,direction:new W,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function by(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yy=0;function My(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sy(n,e){const t=new xy,i=by(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new W);const a=new W,o=new Yt,s=new Yt;function l(d,f){let p=0,v=0,g=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let _=0,m=0,h=0,E=0,y=0,S=0,C=0,D=0,T=0,F=0;d.sort(My);const M=f===!0?Math.PI:1;for(let ae=0,K=d.length;ae<K;ae++){const B=d[ae],H=B.color,X=B.intensity,j=B.distance,k=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=H.r*X*M,v+=H.g*X*M,g+=H.b*X*M;else if(B.isLightProbe)for(let te=0;te<9;te++)r.probe[te].addScaledVector(B.sh.coefficients[te],X);else if(B.isDirectionalLight){const te=t.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*M),B.castShadow){const de=B.shadow,be=i.get(B);be.shadowBias=de.bias,be.shadowNormalBias=de.normalBias,be.shadowRadius=de.radius,be.shadowMapSize=de.mapSize,r.directionalShadow[_]=be,r.directionalShadowMap[_]=k,r.directionalShadowMatrix[_]=B.shadow.matrix,S++}r.directional[_]=te,_++}else if(B.isSpotLight){const te=t.get(B);te.position.setFromMatrixPosition(B.matrixWorld),te.color.copy(H).multiplyScalar(X*M),te.distance=j,te.coneCos=Math.cos(B.angle),te.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),te.decay=B.decay,r.spot[h]=te;const de=B.shadow;if(B.map&&(r.spotLightMap[T]=B.map,T++,de.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[h]=de.matrix,B.castShadow){const be=i.get(B);be.shadowBias=de.bias,be.shadowNormalBias=de.normalBias,be.shadowRadius=de.radius,be.shadowMapSize=de.mapSize,r.spotShadow[h]=be,r.spotShadowMap[h]=k,D++}h++}else if(B.isRectAreaLight){const te=t.get(B);te.color.copy(H).multiplyScalar(X),te.halfWidth.set(B.width*.5,0,0),te.halfHeight.set(0,B.height*.5,0),r.rectArea[E]=te,E++}else if(B.isPointLight){const te=t.get(B);if(te.color.copy(B.color).multiplyScalar(B.intensity*M),te.distance=B.distance,te.decay=B.decay,B.castShadow){const de=B.shadow,be=i.get(B);be.shadowBias=de.bias,be.shadowNormalBias=de.normalBias,be.shadowRadius=de.radius,be.shadowMapSize=de.mapSize,be.shadowCameraNear=de.camera.near,be.shadowCameraFar=de.camera.far,r.pointShadow[m]=be,r.pointShadowMap[m]=k,r.pointShadowMatrix[m]=B.shadow.matrix,C++}r.point[m]=te,m++}else if(B.isHemisphereLight){const te=t.get(B);te.skyColor.copy(B.color).multiplyScalar(X*M),te.groundColor.copy(B.groundColor).multiplyScalar(X*M),r.hemi[y]=te,y++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==h||R.rectAreaLength!==E||R.hemiLength!==y||R.numDirectionalShadows!==S||R.numPointShadows!==C||R.numSpotShadows!==D||R.numSpotMaps!==T)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=E,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=D+T-F,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=F,R.directionalLength=_,R.pointLength=m,R.spotLength=h,R.rectAreaLength=E,R.hemiLength=y,R.numDirectionalShadows=S,R.numPointShadows=C,R.numSpotShadows=D,R.numSpotMaps=T,r.version=yy++)}function u(d,f){let p=0,v=0,g=0,_=0,m=0;const h=f.matrixWorldInverse;for(let E=0,y=d.length;E<y;E++){const S=d[E];if(S.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(h),p++}else if(S.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(h),g++}else if(S.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(h),s.identity(),o.copy(S.matrixWorld),o.premultiply(h),s.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),_++}else if(S.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(h),v++}else if(S.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function Gu(n,e){const t=new Sy(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function Ey(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Gu(n,e),t.set(a,[l])):o>=s.length?(l=new Gu(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class wy extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ty extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ry=`uniform sampler2D shadow_pass;
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
}`;function Cy(n,e,t){let i=new jl;const r=new et,a=new et,o=new Ut,s=new wy({depthPacking:bg}),l=new Ty,u={},d=t.maxTextureSize,f={[_i]:Ln,[Ln]:_i,[jn]:jn},p=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Ay,fragmentShader:Ry}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const g=new Gi;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let h=this.type;this.render=function(C,D,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const F=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(Ni),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const K=h!==Ai&&this.type===Ai,B=h===Ai&&this.type!==Ai;for(let H=0,X=C.length;H<X;H++){const j=C[H],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const te=k.getFrameExtents();if(r.multiply(te),a.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/te.x),r.x=a.x*te.x,k.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/te.y),r.y=a.y*te.y,k.mapSize.y=a.y)),k.map===null||K===!0||B===!0){const be=this.type!==Ai?{minFilter:Bt,magFilter:Bt}:{};k.map!==null&&k.map.dispose(),k.map=new ki(r.x,r.y,be),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const de=k.getViewportCount();for(let be=0;be<de;be++){const Z=k.getViewport(be);o.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),ae.viewport(o),k.updateMatrices(j,be),i=k.getFrustum(),S(D,T,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===Ai&&E(k,T),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(F,M,R)};function E(C,D){const T=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ki(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,T,p,_,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,T,v,_,null)}function y(C,D,T,F){let M=null;const R=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=T.isPointLight===!0?l:s,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ae=M.uuid,K=D.uuid;let B=u[ae];B===void 0&&(B={},u[ae]=B);let H=B[K];H===void 0&&(H=M.clone(),B[K]=H),M=H}if(M.visible=D.visible,M.wireframe=D.wireframe,F===Ai?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:f[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ae=n.properties.get(M);ae.light=T}return M}function S(C,D,T,F,M){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const K=e.update(C),B=C.material;if(Array.isArray(B)){const H=K.groups;for(let X=0,j=H.length;X<j;X++){const k=H[X],te=B[k.materialIndex];if(te&&te.visible){const de=y(C,te,F,M);n.renderBufferDirect(T,null,K,de,C,k)}}}else if(B.visible){const H=y(C,B,F,M);n.renderBufferDirect(T,null,K,H,C,null)}}const ae=C.children;for(let K=0,B=ae.length;K<B;K++)S(ae[K],D,T,F,M)}}function Py(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const Ce=new Ut;let G=null;const he=new Ut(0,0,0,0);return{setMask:function(we){G!==we&&!I&&(n.colorMask(we,we,we,we),G=we)},setLocked:function(we){I=we},setClear:function(we,Xe,tt,rt,bt){bt===!0&&(we*=rt,Xe*=rt,tt*=rt),Ce.set(we,Xe,tt,rt),he.equals(Ce)===!1&&(n.clearColor(we,Xe,tt,rt),he.copy(Ce))},reset:function(){I=!1,G=null,he.set(-1,0,0,0)}}}function a(){let I=!1,Ce=null,G=null,he=null;return{setTest:function(we){we?Ye(n.DEPTH_TEST):je(n.DEPTH_TEST)},setMask:function(we){Ce!==we&&!I&&(n.depthMask(we),Ce=we)},setFunc:function(we){if(G!==we){switch(we){case Kv:n.depthFunc(n.NEVER);break;case Zv:n.depthFunc(n.ALWAYS);break;case Jv:n.depthFunc(n.LESS);break;case ml:n.depthFunc(n.LEQUAL);break;case Qv:n.depthFunc(n.EQUAL);break;case $v:n.depthFunc(n.GEQUAL);break;case eg:n.depthFunc(n.GREATER);break;case tg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}G=we}},setLocked:function(we){I=we},setClear:function(we){he!==we&&(n.clearDepth(we),he=we)},reset:function(){I=!1,Ce=null,G=null,he=null}}}function o(){let I=!1,Ce=null,G=null,he=null,we=null,Xe=null,tt=null,rt=null,bt=null;return{setTest:function(fe){I||(fe?Ye(n.STENCIL_TEST):je(n.STENCIL_TEST))},setMask:function(fe){Ce!==fe&&!I&&(n.stencilMask(fe),Ce=fe)},setFunc:function(fe,Me,Ge){(G!==fe||he!==Me||we!==Ge)&&(n.stencilFunc(fe,Me,Ge),G=fe,he=Me,we=Ge)},setOp:function(fe,Me,Ge){(Xe!==fe||tt!==Me||rt!==Ge)&&(n.stencilOp(fe,Me,Ge),Xe=fe,tt=Me,rt=Ge)},setLocked:function(fe){I=fe},setClear:function(fe){bt!==fe&&(n.clearStencil(fe),bt=fe)},reset:function(){I=!1,Ce=null,G=null,he=null,we=null,Xe=null,tt=null,rt=null,bt=null}}}const s=new r,l=new a,u=new o,d=new WeakMap,f=new WeakMap;let p={},v={},g=new WeakMap,_=[],m=null,h=!1,E=null,y=null,S=null,C=null,D=null,T=null,F=null,M=!1,R=null,ae=null,K=null,B=null,H=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,k=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=k>=1):te.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=k>=2);let de=null,be={};const Z=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),Re=new Ut().fromArray(Z),Ae=new Ut().fromArray(J);function ke(I,Ce,G,he){const we=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(I,Xe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<G;tt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ce,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Ce+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Xe}const Be={};Be[n.TEXTURE_2D]=ke(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Be[n.TEXTURE_2D_ARRAY]=ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ye(n.DEPTH_TEST),l.setFunc(ml),_e(!1),Le(Tc),Ye(n.CULL_FACE),De(Ni);function Ye(I){p[I]!==!0&&(n.enable(I),p[I]=!0)}function je(I){p[I]!==!1&&(n.disable(I),p[I]=!1)}function Te(I,Ce){return v[I]!==Ce?(n.bindFramebuffer(I,Ce),v[I]=Ce,i&&(I===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Ce),I===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Ce)),!0):!1}function We(I,Ce){let G=_,he=!1;if(I)if(G=g.get(Ce),G===void 0&&(G=[],g.set(Ce,G)),I.isWebGLMultipleRenderTargets){const we=I.texture;if(G.length!==we.length||G[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,tt=we.length;Xe<tt;Xe++)G[Xe]=n.COLOR_ATTACHMENT0+Xe;G.length=we.length,he=!0}}else G[0]!==n.COLOR_ATTACHMENT0&&(G[0]=n.COLOR_ATTACHMENT0,he=!0);else G[0]!==n.BACK&&(G[0]=n.BACK,he=!0);he&&(t.isWebGL2?n.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function le(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const N={[Zr]:n.FUNC_ADD,[kv]:n.FUNC_SUBTRACT,[Bv]:n.FUNC_REVERSE_SUBTRACT};if(i)N[Pc]=n.MIN,N[Lc]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(N[Pc]=I.MIN_EXT,N[Lc]=I.MAX_EXT)}const ze={[zv]:n.ZERO,[Gv]:n.ONE,[Hv]:n.SRC_COLOR,[sf]:n.SRC_ALPHA,[Yv]:n.SRC_ALPHA_SATURATE,[Xv]:n.DST_COLOR,[Wv]:n.DST_ALPHA,[Vv]:n.ONE_MINUS_SRC_COLOR,[of]:n.ONE_MINUS_SRC_ALPHA,[qv]:n.ONE_MINUS_DST_COLOR,[jv]:n.ONE_MINUS_DST_ALPHA};function De(I,Ce,G,he,we,Xe,tt,rt){if(I===Ni){h===!0&&(je(n.BLEND),h=!1);return}if(h===!1&&(Ye(n.BLEND),h=!0),I!==Fv){if(I!==E||rt!==M){if((y!==Zr||D!==Zr)&&(n.blendEquation(n.FUNC_ADD),y=Zr,D=Zr),rt)switch(I){case ia:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,C=null,T=null,F=null,E=I,M=rt}return}we=we||Ce,Xe=Xe||G,tt=tt||he,(Ce!==y||we!==D)&&(n.blendEquationSeparate(N[Ce],N[we]),y=Ce,D=we),(G!==S||he!==C||Xe!==T||tt!==F)&&(n.blendFuncSeparate(ze[G],ze[he],ze[Xe],ze[tt]),S=G,C=he,T=Xe,F=tt),E=I,M=!1}function ee(I,Ce){I.side===jn?je(n.CULL_FACE):Ye(n.CULL_FACE);let G=I.side===Ln;Ce&&(G=!G),_e(G),I.blending===ia&&I.transparent===!1?De(Ni):De(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;u.setTest(he),he&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Oe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ye(n.SAMPLE_ALPHA_TO_COVERAGE):je(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(I){R!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),R=I)}function Le(I){I!==Uv?(Ye(n.CULL_FACE),I!==ae&&(I===Tc?n.cullFace(n.BACK):I===Nv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):je(n.CULL_FACE),ae=I}function Ie(I){I!==K&&(j&&n.lineWidth(I),K=I)}function Oe(I,Ce,G){I?(Ye(n.POLYGON_OFFSET_FILL),(B!==Ce||H!==G)&&(n.polygonOffset(Ce,G),B=Ce,H=G)):je(n.POLYGON_OFFSET_FILL)}function Ue(I){I?Ye(n.SCISSOR_TEST):je(n.SCISSOR_TEST)}function $e(I){I===void 0&&(I=n.TEXTURE0+X-1),de!==I&&(n.activeTexture(I),de=I)}function He(I,Ce,G){G===void 0&&(de===null?G=n.TEXTURE0+X-1:G=de);let he=be[G];he===void 0&&(he={type:void 0,texture:void 0},be[G]=he),(he.type!==I||he.texture!==Ce)&&(de!==G&&(n.activeTexture(G),de=G),n.bindTexture(I,Ce||Be[I]),he.type=I,he.texture=Ce)}function P(){const I=be[de];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function U(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function w(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(I){Re.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Re.copy(I))}function se(I){Ae.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ae.copy(I))}function oe(I,Ce){let G=f.get(Ce);G===void 0&&(G=new WeakMap,f.set(Ce,G));let he=G.get(I);he===void 0&&(he=n.getUniformBlockIndex(Ce,I.name),G.set(I,he))}function Ne(I,Ce){const he=f.get(Ce).get(I);d.get(Ce)!==he&&(n.uniformBlockBinding(Ce,he,I.__bindingPointIndex),d.set(Ce,he))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},de=null,be={},v={},g=new WeakMap,_=[],m=null,h=!1,E=null,y=null,S=null,C=null,D=null,T=null,F=null,M=!1,R=null,ae=null,K=null,B=null,H=null,Re.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:Ye,disable:je,bindFramebuffer:Te,drawBuffers:We,useProgram:le,setBlending:De,setMaterial:ee,setFlipSided:_e,setCullFace:Le,setLineWidth:Ie,setPolygonOffset:Oe,setScissorTest:Ue,activeTexture:$e,bindTexture:He,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:U,texImage2D:w,texImage3D:V,updateUBOMapping:oe,uniformBlockBinding:Ne,texStorage2D:Ee,texStorage3D:Y,texSubImage2D:ce,texSubImage3D:ye,compressedTexSubImage2D:xe,compressedTexSubImage3D:Fe,scissor:ie,viewport:se,reset:Ze}}function Ly(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,b){return h?new OffscreenCanvas(P,b):Js("canvas")}function y(P,b,U,ce){let ye=1;if((P.width>ce||P.height>ce)&&(ye=ce/Math.max(P.width,P.height)),ye<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const xe=b?Ml:Math.floor,Fe=xe(ye*P.width),Ee=xe(ye*P.height);_===void 0&&(_=E(Fe,Ee));const Y=U?E(Fe,Ee):_;return Y.width=Fe,Y.height=Ee,Y.getContext("2d").drawImage(P,0,0,Fe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Fe+"x"+Ee+")."),Y}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return au(P.width)&&au(P.height)}function C(P){return s?!1:P.wrapS!==ei||P.wrapT!==ei||P.minFilter!==Bt&&P.minFilter!==Vn}function D(P,b){return P.generateMipmaps&&b&&P.minFilter!==Bt&&P.minFilter!==Vn}function T(P){n.generateMipmap(P)}function F(P,b,U,ce,ye=!1){if(s===!1)return b;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xe=b;return b===n.RED&&(U===n.FLOAT&&(xe=n.R32F),U===n.HALF_FLOAT&&(xe=n.R16F),U===n.UNSIGNED_BYTE&&(xe=n.R8)),b===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(xe=n.R8UI),U===n.UNSIGNED_SHORT&&(xe=n.R16UI),U===n.UNSIGNED_INT&&(xe=n.R32UI),U===n.BYTE&&(xe=n.R8I),U===n.SHORT&&(xe=n.R16I),U===n.INT&&(xe=n.R32I)),b===n.RG&&(U===n.FLOAT&&(xe=n.RG32F),U===n.HALF_FLOAT&&(xe=n.RG16F),U===n.UNSIGNED_BYTE&&(xe=n.RG8)),b===n.RGBA&&(U===n.FLOAT&&(xe=n.RGBA32F),U===n.HALF_FLOAT&&(xe=n.RGBA16F),U===n.UNSIGNED_BYTE&&(xe=ce===It&&ye===!1?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(xe=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(xe=n.RGB5_A1)),(xe===n.R16F||xe===n.R32F||xe===n.RG16F||xe===n.RG32F||xe===n.RGBA16F||xe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function M(P,b,U){return D(P,U)===!0||P.isFramebufferTexture&&P.minFilter!==Bt&&P.minFilter!==Vn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function R(P){return P===Bt||P===Dc||P===So?n.NEAREST:n.LINEAR}function ae(P){const b=P.target;b.removeEventListener("dispose",ae),B(b),b.isVideoTexture&&g.delete(b)}function K(P){const b=P.target;b.removeEventListener("dispose",K),X(b)}function B(P){const b=i.get(P);if(b.__webglInit===void 0)return;const U=P.source,ce=m.get(U);if(ce){const ye=ce[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&H(P),Object.keys(ce).length===0&&m.delete(U)}i.remove(P)}function H(P){const b=i.get(P);n.deleteTexture(b.__webglTexture);const U=P.source,ce=m.get(U);delete ce[b.__cacheKey],o.memory.textures--}function X(P){const b=P.texture,U=i.get(P),ce=i.get(b);if(ce.__webglTexture!==void 0&&(n.deleteTexture(ce.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(U.__webglFramebuffer[ye]))for(let xe=0;xe<U.__webglFramebuffer[ye].length;xe++)n.deleteFramebuffer(U.__webglFramebuffer[ye][xe]);else n.deleteFramebuffer(U.__webglFramebuffer[ye]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[ye])}else{if(Array.isArray(U.__webglFramebuffer))for(let ye=0;ye<U.__webglFramebuffer.length;ye++)n.deleteFramebuffer(U.__webglFramebuffer[ye]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ye=0;ye<U.__webglColorRenderbuffer.length;ye++)U.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[ye]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ye=0,xe=b.length;ye<xe;ye++){const Fe=i.get(b[ye]);Fe.__webglTexture&&(n.deleteTexture(Fe.__webglTexture),o.memory.textures--),i.remove(b[ye])}i.remove(b),i.remove(P)}let j=0;function k(){j=0}function te(){const P=j;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),j+=1,P}function de(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function be(P,b){const U=i.get(P);if(P.isVideoTexture&&$e(P),P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){const ce=P.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(U,P,b);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+b)}function Z(P,b){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Te(U,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+b)}function J(P,b){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Te(U,P,b);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+b)}function Re(P,b){const U=i.get(P);if(P.version>0&&U.__version!==P.version){We(U,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+b)}const Ae={[gl]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[_l]:n.MIRRORED_REPEAT},ke={[Bt]:n.NEAREST,[Dc]:n.NEAREST_MIPMAP_NEAREST,[So]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[cg]:n.LINEAR_MIPMAP_NEAREST,[Qa]:n.LINEAR_MIPMAP_LINEAR},Be={[Sg]:n.NEVER,[Pg]:n.ALWAYS,[Eg]:n.LESS,[Tg]:n.LEQUAL,[wg]:n.EQUAL,[Cg]:n.GEQUAL,[Ag]:n.GREATER,[Rg]:n.NOTEQUAL};function Ye(P,b,U){if(U?(n.texParameteri(P,n.TEXTURE_WRAP_S,Ae[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Ae[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Ae[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,ke[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,ke[b.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==ei||b.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,R(b.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,R(b.minFilter)),b.minFilter!==Bt&&b.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Bt||b.minFilter!==So&&b.minFilter!==Qa||b.type===Li&&e.has("OES_texture_float_linear")===!1||s===!1&&b.type===fa&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(P,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function je(P,b){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",ae));const ce=b.source;let ye=m.get(ce);ye===void 0&&(ye={},m.set(ce,ye));const xe=de(b);if(xe!==P.__cacheKey){ye[xe]===void 0&&(ye[xe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ye[xe].usedTimes++;const Fe=ye[P.__cacheKey];Fe!==void 0&&(ye[P.__cacheKey].usedTimes--,Fe.usedTimes===0&&H(b)),P.__cacheKey=xe,P.__webglTexture=ye[xe].texture}return U}function Te(P,b,U){let ce=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=n.TEXTURE_3D);const ye=je(P,b),xe=b.source;t.bindTexture(ce,P.__webglTexture,n.TEXTURE0+U);const Fe=i.get(xe);if(xe.version!==Fe.__version||ye===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Ee=C(b)&&S(b.image)===!1;let Y=y(b.image,Ee,!1,d);Y=He(b,Y);const w=S(Y)||s,V=a.convert(b.format,b.colorSpace);let ie=a.convert(b.type),se=F(b.internalFormat,V,ie,b.colorSpace,b.isVideoTexture);Ye(ce,b,w);let oe;const Ne=b.mipmaps,Ze=s&&b.isVideoTexture!==!0,I=Fe.__version===void 0||ye===!0,Ce=M(b,Y,w);if(b.isDepthTexture)se=n.DEPTH_COMPONENT,s?b.type===Li?se=n.DEPTH_COMPONENT32F:b.type===Ki?se=n.DEPTH_COMPONENT24:b.type===xr?se=n.DEPTH24_STENCIL8:se=n.DEPTH_COMPONENT16:b.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===br&&se===n.DEPTH_COMPONENT&&b.type!==Vl&&b.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ki,ie=a.convert(b.type)),b.format===ha&&se===n.DEPTH_COMPONENT&&(se=n.DEPTH_STENCIL,b.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=xr,ie=a.convert(b.type))),I&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,se,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,se,Y.width,Y.height,0,V,ie,null));else if(b.isDataTexture)if(Ne.length>0&&w){Ze&&I&&t.texStorage2D(n.TEXTURE_2D,Ce,se,Ne[0].width,Ne[0].height);for(let G=0,he=Ne.length;G<he;G++)oe=Ne[G],Ze?t.texSubImage2D(n.TEXTURE_2D,G,0,0,oe.width,oe.height,V,ie,oe.data):t.texImage2D(n.TEXTURE_2D,G,se,oe.width,oe.height,0,V,ie,oe.data);b.generateMipmaps=!1}else Ze?(I&&t.texStorage2D(n.TEXTURE_2D,Ce,se,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,V,ie,Y.data)):t.texImage2D(n.TEXTURE_2D,0,se,Y.width,Y.height,0,V,ie,Y.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,se,Ne[0].width,Ne[0].height,Y.depth);for(let G=0,he=Ne.length;G<he;G++)oe=Ne[G],b.format!==ti?V!==null?Ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,oe.width,oe.height,Y.depth,V,oe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,se,oe.width,oe.height,Y.depth,0,oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,oe.width,oe.height,Y.depth,V,ie,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,se,oe.width,oe.height,Y.depth,0,V,ie,oe.data)}else{Ze&&I&&t.texStorage2D(n.TEXTURE_2D,Ce,se,Ne[0].width,Ne[0].height);for(let G=0,he=Ne.length;G<he;G++)oe=Ne[G],b.format!==ti?V!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,oe.width,oe.height,V,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,G,se,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(n.TEXTURE_2D,G,0,0,oe.width,oe.height,V,ie,oe.data):t.texImage2D(n.TEXTURE_2D,G,se,oe.width,oe.height,0,V,ie,oe.data)}else if(b.isDataArrayTexture)Ze?(I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,se,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,V,ie,Y.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,Y.width,Y.height,Y.depth,0,V,ie,Y.data);else if(b.isData3DTexture)Ze?(I&&t.texStorage3D(n.TEXTURE_3D,Ce,se,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,V,ie,Y.data)):t.texImage3D(n.TEXTURE_3D,0,se,Y.width,Y.height,Y.depth,0,V,ie,Y.data);else if(b.isFramebufferTexture){if(I)if(Ze)t.texStorage2D(n.TEXTURE_2D,Ce,se,Y.width,Y.height);else{let G=Y.width,he=Y.height;for(let we=0;we<Ce;we++)t.texImage2D(n.TEXTURE_2D,we,se,G,he,0,V,ie,null),G>>=1,he>>=1}}else if(Ne.length>0&&w){Ze&&I&&t.texStorage2D(n.TEXTURE_2D,Ce,se,Ne[0].width,Ne[0].height);for(let G=0,he=Ne.length;G<he;G++)oe=Ne[G],Ze?t.texSubImage2D(n.TEXTURE_2D,G,0,0,V,ie,oe):t.texImage2D(n.TEXTURE_2D,G,se,V,ie,oe);b.generateMipmaps=!1}else Ze?(I&&t.texStorage2D(n.TEXTURE_2D,Ce,se,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V,ie,Y)):t.texImage2D(n.TEXTURE_2D,0,se,V,ie,Y);D(b,w)&&T(ce),Fe.__version=xe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function We(P,b,U){if(b.image.length!==6)return;const ce=je(P,b),ye=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+U);const xe=i.get(ye);if(ye.version!==xe.__version||ce===!0){t.activeTexture(n.TEXTURE0+U),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Fe=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let G=0;G<6;G++)!Fe&&!Ee?Y[G]=y(b.image[G],!1,!0,u):Y[G]=Ee?b.image[G].image:b.image[G],Y[G]=He(b,Y[G]);const w=Y[0],V=S(w)||s,ie=a.convert(b.format,b.colorSpace),se=a.convert(b.type),oe=F(b.internalFormat,ie,se,b.colorSpace),Ne=s&&b.isVideoTexture!==!0,Ze=xe.__version===void 0||ce===!0;let I=M(b,w,V);Ye(n.TEXTURE_CUBE_MAP,b,V);let Ce;if(Fe){Ne&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,oe,w.width,w.height);for(let G=0;G<6;G++){Ce=Y[G].mipmaps;for(let he=0;he<Ce.length;he++){const we=Ce[he];b.format!==ti?ie!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,he,0,0,we.width,we.height,ie,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,he,oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,he,0,0,we.width,we.height,ie,se,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,he,oe,we.width,we.height,0,ie,se,we.data)}}}else{Ce=b.mipmaps,Ne&&Ze&&(Ce.length>0&&I++,t.texStorage2D(n.TEXTURE_CUBE_MAP,I,oe,Y[0].width,Y[0].height));for(let G=0;G<6;G++)if(Ee){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Y[G].width,Y[G].height,ie,se,Y[G].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,oe,Y[G].width,Y[G].height,0,ie,se,Y[G].data);for(let he=0;he<Ce.length;he++){const Xe=Ce[he].image[G].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,he+1,0,0,Xe.width,Xe.height,ie,se,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,he+1,oe,Xe.width,Xe.height,0,ie,se,Xe.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ie,se,Y[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,oe,ie,se,Y[G]);for(let he=0;he<Ce.length;he++){const we=Ce[he];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,he+1,0,0,ie,se,we.image[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,he+1,oe,ie,se,we.image[G])}}}D(b,V)&&T(n.TEXTURE_CUBE_MAP),xe.__version=ye.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function le(P,b,U,ce,ye,xe){const Fe=a.convert(U.format,U.colorSpace),Ee=a.convert(U.type),Y=F(U.internalFormat,Fe,Ee,U.colorSpace);if(!i.get(b).__hasExternalTextures){const V=Math.max(1,b.width>>xe),ie=Math.max(1,b.height>>xe);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,xe,Y,V,ie,b.depth,0,Fe,Ee,null):t.texImage2D(ye,xe,Y,V,ie,0,Fe,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ue(b)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,ye,i.get(U).__webglTexture,0,Oe(b)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,ye,i.get(U).__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(P,b,U){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let ce=n.DEPTH_COMPONENT16;if(U||Ue(b)){const ye=b.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Li?ce=n.DEPTH_COMPONENT32F:ye.type===Ki&&(ce=n.DEPTH_COMPONENT24));const xe=Oe(b);Ue(b)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,ce,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ce,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,ce,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const ce=Oe(b);U&&Ue(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,b.width,b.height):Ue(b)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const ce=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ye=0;ye<ce.length;ye++){const xe=ce[ye],Fe=a.convert(xe.format,xe.colorSpace),Ee=a.convert(xe.type),Y=F(xe.internalFormat,Fe,Ee,xe.colorSpace),w=Oe(b);U&&Ue(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,w,Y,b.width,b.height):Ue(b)?p.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w,Y,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Y,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),be(b.depthTexture,0);const ce=i.get(b.depthTexture).__webglTexture,ye=Oe(b);if(b.depthTexture.format===br)Ue(b)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(b.depthTexture.format===ha)Ue(b)?p.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function De(P){const b=i.get(P),U=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ze(b.__webglFramebuffer,P)}else if(U){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]=n.createRenderbuffer(),N(b.__webglDepthbuffer[ce],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),N(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(P,b,U){const ce=i.get(P);b!==void 0&&le(ce.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&De(P)}function _e(P){const b=P.texture,U=i.get(P),ce=i.get(b);P.addEventListener("dispose",K),P.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=b.version,o.memory.textures++);const ye=P.isWebGLCubeRenderTarget===!0,xe=P.isWebGLMultipleRenderTargets===!0,Fe=S(P)||s;if(ye){U.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(s&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[Ee]=[];for(let Y=0;Y<b.mipmaps.length;Y++)U.__webglFramebuffer[Ee][Y]=n.createFramebuffer()}else U.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(s&&b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let Ee=0;Ee<b.mipmaps.length;Ee++)U.__webglFramebuffer[Ee]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(xe)if(r.drawBuffers){const Ee=P.texture;for(let Y=0,w=Ee.length;Y<w;Y++){const V=i.get(Ee[Y]);V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&P.samples>0&&Ue(P)===!1){const Ee=xe?b:[b];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<Ee.length;Y++){const w=Ee[Y];U.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);const V=a.convert(w.format,w.colorSpace),ie=a.convert(w.type),se=F(w.internalFormat,V,ie,w.colorSpace,P.isXRRenderTarget===!0),oe=Oe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,se,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),N(U.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,b,Fe);for(let Ee=0;Ee<6;Ee++)if(s&&b.mipmaps&&b.mipmaps.length>0)for(let Y=0;Y<b.mipmaps.length;Y++)le(U.__webglFramebuffer[Ee][Y],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Y);else le(U.__webglFramebuffer[Ee],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);D(b,Fe)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){const Ee=P.texture;for(let Y=0,w=Ee.length;Y<w;Y++){const V=Ee[Y],ie=i.get(V);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Ye(n.TEXTURE_2D,V,Fe),le(U.__webglFramebuffer,P,V,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,0),D(V,Fe)&&T(n.TEXTURE_2D)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(s?Ee=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,ce.__webglTexture),Ye(Ee,b,Fe),s&&b.mipmaps&&b.mipmaps.length>0)for(let Y=0;Y<b.mipmaps.length;Y++)le(U.__webglFramebuffer[Y],P,b,n.COLOR_ATTACHMENT0,Ee,Y);else le(U.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,Ee,0);D(b,Fe)&&T(Ee),t.unbindTexture()}P.depthBuffer&&De(P)}function Le(P){const b=S(P)||s,U=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ce=0,ye=U.length;ce<ye;ce++){const xe=U[ce];if(D(xe,b)){const Fe=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(xe).__webglTexture;t.bindTexture(Fe,Ee),T(Fe),t.unbindTexture()}}}function Ie(P){if(s&&P.samples>0&&Ue(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],U=P.width,ce=P.height;let ye=n.COLOR_BUFFER_BIT;const xe=[],Fe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(P),Y=P.isWebGLMultipleRenderTargets===!0;if(Y)for(let w=0;w<b.length;w++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+w,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+w,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let w=0;w<b.length;w++){xe.push(n.COLOR_ATTACHMENT0+w),P.depthBuffer&&xe.push(Fe);const V=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(V===!1&&(P.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),Y&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[w]),V===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Fe])),Y){const ie=i.get(b[w]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,U,ce,0,0,U,ce,ye,n.NEAREST),v&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let w=0;w<b.length;w++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+w,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[w]);const V=i.get(b[w]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+w,n.TEXTURE_2D,V,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function Oe(P){return Math.min(f,P.samples)}function Ue(P){const b=i.get(P);return s&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $e(P){const b=o.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function He(P,b){const U=P.colorSpace,ce=P.format,ye=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===bl||U!==xi&&U!==Mr&&(U===It||U===oo?s===!1?e.has("EXT_sRGB")===!0&&ce===ti?(P.format=bl,P.minFilter=Vn,P.generateMipmaps=!1):b=xf.sRGBToLinear(b):(ce!==ti||ye!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),b}this.allocateTextureUnit=te,this.resetTextureUnits=k,this.setTexture2D=be,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=Re,this.rebindTextures=ee,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ue}const Dy=0,Qt=1;function Iy(n,e,t){const i=t.isWebGL2;function r(a,o=Mr){let s;const l=o===It||o===oo?Qt:Dy;if(a===Qi)return n.UNSIGNED_BYTE;if(a===df)return n.UNSIGNED_SHORT_4_4_4_4;if(a===ff)return n.UNSIGNED_SHORT_5_5_5_1;if(a===ug)return n.BYTE;if(a===dg)return n.SHORT;if(a===Vl)return n.UNSIGNED_SHORT;if(a===uf)return n.INT;if(a===Ki)return n.UNSIGNED_INT;if(a===Li)return n.FLOAT;if(a===fa)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===fg)return n.ALPHA;if(a===ti)return n.RGBA;if(a===hg)return n.LUMINANCE;if(a===pg)return n.LUMINANCE_ALPHA;if(a===br)return n.DEPTH_COMPONENT;if(a===ha)return n.DEPTH_STENCIL;if(a===bl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===mg)return n.RED;if(a===hf)return n.RED_INTEGER;if(a===vg)return n.RG;if(a===pf)return n.RG_INTEGER;if(a===mf)return n.RGBA_INTEGER;if(a===Eo||a===wo||a===To||a===Ao)if(l===Qt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===To)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ao)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ic||a===Uc||a===Nc||a===Oc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===gg)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Fc||a===kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Fc)return l===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===kc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Bc||a===zc||a===Gc||a===Hc||a===Vc||a===Wc||a===jc||a===Xc||a===qc||a===Yc||a===Kc||a===Zc||a===Jc||a===Qc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Bc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===zc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Gc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Hc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Vc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Wc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===jc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Xc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===qc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Yc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Kc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Zc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Jc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Qc)return l===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ro||a===$c||a===eu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Ro)return l===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===$c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_g||a===tu||a===nu||a===iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(a===tu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===nu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===xr?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class Uy extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cn extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(u,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=d.position.distanceTo(f.position),v=.02,g=.005;u.inputState.pinching&&p>v+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=v-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class kf extends gn{constructor(e,t,i,r,a,o,s,l,u,d){if(d=d!==void 0?d:br,d!==br&&d!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===br&&(i=Ki),i===void 0&&d===ha&&(i=xr),super(null,r,a,o,s,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Oy extends wr{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,u=null,d=null,f=null,p=null,v=null,g=null;const _=t.getContextAttributes();let m=null,h=null;const E=[],y=[],S=new Nn;S.layers.enable(1),S.viewport=new Ut;const C=new Nn;C.layers.enable(2),C.viewport=new Ut;const D=[S,C],T=new Uy;T.layers.enable(1),T.layers.enable(2);let F=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=E[Z];return J===void 0&&(J=new Jo,E[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=E[Z];return J===void 0&&(J=new Jo,E[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=E[Z];return J===void 0&&(J=new Jo,E[Z]=J),J.getHandSpace()};function R(Z){const J=y.indexOf(Z.inputSource);if(J===-1)return;const Re=E[J];Re!==void 0&&(Re.update(Z.inputSource,Z.frame,u||o),Re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ae(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",K);for(let Z=0;Z<E.length;Z++){const J=y[Z];J!==null&&(y[Z]=null,E[Z].disconnect(J))}F=null,M=null,e.setRenderTarget(m),v=null,p=null,f=null,r=null,h=null,be.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",K),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:v}),h=new ki(v.framebufferWidth,v.framebufferHeight,{format:ti,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,Re=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?ha:br,Re=_.stencil?xr:Ki);const ke={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(ke),r.updateRenderState({layers:[p]}),h=new ki(p.textureWidth,p.textureHeight,{format:ti,type:Qi,depthTexture:new kf(p.textureWidth,p.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Be=e.properties.get(h);Be.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(s),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(Z){for(let J=0;J<Z.removed.length;J++){const Re=Z.removed[J],Ae=y.indexOf(Re);Ae>=0&&(y[Ae]=null,E[Ae].disconnect(Re))}for(let J=0;J<Z.added.length;J++){const Re=Z.added[J];let Ae=y.indexOf(Re);if(Ae===-1){for(let Be=0;Be<E.length;Be++)if(Be>=y.length){y.push(Re),Ae=Be;break}else if(y[Be]===null){y[Be]=Re,Ae=Be;break}if(Ae===-1)break}const ke=E[Ae];ke&&ke.connect(Re)}}const B=new W,H=new W;function X(Z,J,Re){B.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(Re.matrixWorld);const Ae=B.distanceTo(H),ke=J.projectionMatrix.elements,Be=Re.projectionMatrix.elements,Ye=ke[14]/(ke[10]-1),je=ke[14]/(ke[10]+1),Te=(ke[9]+1)/ke[5],We=(ke[9]-1)/ke[5],le=(ke[8]-1)/ke[0],N=(Be[8]+1)/Be[0],ze=Ye*le,De=Ye*N,ee=Ae/(-le+N),_e=ee*-le;J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(_e),Z.translateZ(ee),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const Le=Ye+ee,Ie=je+ee,Oe=ze-_e,Ue=De+(Ae-_e),$e=Te*je/Ie*Le,He=We*je/Ie*Le;Z.projectionMatrix.makePerspective(Oe,Ue,$e,He,Le,Ie),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function j(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;T.near=C.near=S.near=Z.near,T.far=C.far=S.far=Z.far,(F!==T.near||M!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,M=T.far);const J=Z.parent,Re=T.cameras;j(T,J);for(let Ae=0;Ae<Re.length;Ae++)j(Re[Ae],J);Re.length===2?X(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),k(Z,T,J)};function k(Z,J,Re){Re===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(Re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=yl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&v===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)};let te=null;function de(Z,J){if(d=J.getViewerPose(u||o),g=J,d!==null){const Re=d.views;v!==null&&(e.setRenderTargetFramebuffer(h,v.framebuffer),e.setRenderTarget(h));let Ae=!1;Re.length!==T.cameras.length&&(T.cameras.length=0,Ae=!0);for(let ke=0;ke<Re.length;ke++){const Be=Re[ke];let Ye=null;if(v!==null)Ye=v.getViewport(Be);else{const Te=f.getViewSubImage(p,Be);Ye=Te.viewport,ke===0&&(e.setRenderTargetTextures(h,Te.colorTexture,p.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(h))}let je=D[ke];je===void 0&&(je=new Nn,je.layers.enable(ke),je.viewport=new Ut,D[ke]=je),je.matrix.fromArray(Be.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Be.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ke===0&&(T.matrix.copy(je.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ae===!0&&T.cameras.push(je)}}for(let Re=0;Re<E.length;Re++){const Ae=y[Re],ke=E[Re];Ae!==null&&ke!==void 0&&ke.update(Ae,J,u||o)}te&&te(Z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const be=new Df;be.setAnimationLoop(de),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}}function Fy(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Rf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,y,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),d(m,h)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&v(m,h,S)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),_(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,E,y):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function v(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ln&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ky(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,y){const S=y.program;i.uniformBlockBinding(E,S)}function u(E,y){let S=r[E.id];S===void 0&&(g(E),S=d(E),r[E.id]=S,E.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(E,C);const D=e.render.frame;a[E.id]!==D&&(p(E),a[E.id]=D)}function d(E){const y=f();E.__bindingPointIndex=y;const S=n.createBuffer(),C=E.__size,D=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function f(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const y=r[E.id],S=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let D=0,T=S.length;D<T;D++){const F=S[D];if(v(F,D,C)===!0){const M=F.__offset,R=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let K=0;K<R.length;K++){const B=R[K],H=_(B);typeof B=="number"?(F.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,M+ae,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=B.elements[0],F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=B.elements[0],F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=B.elements[0]):(B.toArray(F.__data,ae),ae+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,F.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(E,y,S){const C=E.value;if(S[y]===void 0){if(typeof C=="number")S[y]=C;else{const D=Array.isArray(C)?C:[C],T=[];for(let F=0;F<D.length;F++)T.push(D[F].clone());S[y]=T}return!0}else if(typeof C=="number"){if(S[y]!==C)return S[y]=C,!0}else{const D=Array.isArray(S[y])?S[y]:[S[y]],T=Array.isArray(C)?C:[C];for(let F=0;F<D.length;F++){const M=D[F];if(M.equals(T[F])===!1)return M.copy(T[F]),!0}}return!1}function g(E){const y=E.uniforms;let S=0;const C=16;let D=0;for(let T=0,F=y.length;T<F;T++){const M=y[T],R={boundary:0,storage:0},ae=Array.isArray(M.value)?M.value:[M.value];for(let K=0,B=ae.length;K<B;K++){const H=ae[K],X=_(H);R.boundary+=X.boundary,R.storage+=X.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,T>0){D=S%C;const K=C-D;D!==0&&K-R.boundary<0&&(S+=C-D,M.__offset=S)}S+=R.storage}return D=S%C,D>0&&(S+=C-D),E.__size=S,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function h(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},a={}}return{bind:l,update:u,dispose:h}}class Bf{constructor(e={}){const{canvas:t=Ig(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const y=this;let S=!1,C=0,D=0,T=null,F=-1,M=null;const R=new Ut,ae=new Ut;let K=null;const B=new Mt(0);let H=0,X=t.width,j=t.height,k=1,te=null,de=null;const be=new Ut(0,0,X,j),Z=new Ut(0,0,X,j);let J=!1;const Re=new jl;let Ae=!1,ke=!1,Be=null;const Ye=new Yt,je=new et,Te=new W,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return T===null?k:1}let N=i;function ze(L,q){for(let re=0;re<L.length;re++){const Q=L[re],me=t.getContext(Q,q);if(me!==null)return me}return null}try{const L={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){const q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&q.shift(),N=ze(q,L),N===null)throw ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let De,ee,_e,Le,Ie,Oe,Ue,$e,He,P,b,U,ce,ye,xe,Fe,Ee,Y,w,V,ie,se,oe,Ne;function Ze(){De=new Kb(N),ee=new Vb(N,De,e),De.init(ee),se=new Iy(N,De,ee),_e=new Py(N,De,ee),Le=new Qb(N),Ie=new vy,Oe=new Ly(N,De,_e,Ie,ee,se,Le),Ue=new jb(y),$e=new Yb(y),He=new l_(N,ee),oe=new Gb(N,De,He,ee),P=new Zb(N,He,Le,oe),b=new n0(N,P,He,Le),w=new t0(N,ee,Oe),Fe=new Wb(Ie),U=new my(y,Ue,$e,De,ee,oe,Fe),ce=new Fy(y,Ie),ye=new _y,xe=new Ey(De,ee),Y=new zb(y,Ue,$e,_e,b,p,l),Ee=new Cy(y,b,ee),Ne=new ky(N,Le,ee,_e),V=new Hb(N,De,Le,ee),ie=new Jb(N,De,Le,ee),Le.programs=U.programs,y.capabilities=ee,y.extensions=De,y.properties=Ie,y.renderLists=ye,y.shadowMap=Ee,y.state=_e,y.info=Le}Ze();const I=new Oy(y,N);this.xr=I,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const L=De.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=De.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(L){L!==void 0&&(k=L,this.setSize(X,j,!1))},this.getSize=function(L){return L.set(X,j)},this.setSize=function(L,q,re=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=L,j=q,t.width=Math.floor(L*k),t.height=Math.floor(q*k),re===!0&&(t.style.width=L+"px",t.style.height=q+"px"),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(X*k,j*k).floor()},this.setDrawingBufferSize=function(L,q,re){X=L,j=q,k=re,t.width=Math.floor(L*re),t.height=Math.floor(q*re),this.setViewport(0,0,L,q)},this.getCurrentViewport=function(L){return L.copy(R)},this.getViewport=function(L){return L.copy(be)},this.setViewport=function(L,q,re,Q){L.isVector4?be.set(L.x,L.y,L.z,L.w):be.set(L,q,re,Q),_e.viewport(R.copy(be).multiplyScalar(k).floor())},this.getScissor=function(L){return L.copy(Z)},this.setScissor=function(L,q,re,Q){L.isVector4?Z.set(L.x,L.y,L.z,L.w):Z.set(L,q,re,Q),_e.scissor(ae.copy(Z).multiplyScalar(k).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(L){_e.setScissorTest(J=L)},this.setOpaqueSort=function(L){te=L},this.setTransparentSort=function(L){de=L},this.getClearColor=function(L){return L.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(L=!0,q=!0,re=!0){let Q=0;if(L){let me=!1;if(T!==null){const Ke=T.texture.format;me=Ke===mf||Ke===pf||Ke===hf}if(me){const Ke=T.texture.type,nt=Ke===Qi||Ke===Ki||Ke===Vl||Ke===xr||Ke===df||Ke===ff,at=Y.getClearColor(),st=Y.getClearAlpha(),ft=at.r,ot=at.g,lt=at.b;nt?(v[0]=ft,v[1]=ot,v[2]=lt,v[3]=st,N.clearBufferuiv(N.COLOR,0,v)):(g[0]=ft,g[1]=ot,g[2]=lt,g[3]=st,N.clearBufferiv(N.COLOR,0,g))}else Q|=N.COLOR_BUFFER_BIT}q&&(Q|=N.DEPTH_BUFFER_BIT),re&&(Q|=N.STENCIL_BUFFER_BIT),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ye.dispose(),xe.dispose(),Ie.dispose(),Ue.dispose(),$e.dispose(),b.dispose(),oe.dispose(),Ne.dispose(),U.dispose(),I.dispose(),I.removeEventListener("sessionstart",fe),I.removeEventListener("sessionend",Me),Be&&(Be.dispose(),Be=null),Ge.stop()};function Ce(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const L=Le.autoReset,q=Ee.enabled,re=Ee.autoUpdate,Q=Ee.needsUpdate,me=Ee.type;Ze(),Le.autoReset=L,Ee.enabled=q,Ee.autoUpdate=re,Ee.needsUpdate=Q,Ee.type=me}function he(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function we(L){const q=L.target;q.removeEventListener("dispose",we),Xe(q)}function Xe(L){tt(L),Ie.remove(L)}function tt(L){const q=Ie.get(L).programs;q!==void 0&&(q.forEach(function(re){U.releaseProgram(re)}),L.isShaderMaterial&&U.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,re,Q,me,Ke){q===null&&(q=We);const nt=me.isMesh&&me.matrixWorld.determinant()<0,at=sn(L,q,re,Q,me);_e.setMaterial(Q,nt);let st=re.index,ft=1;if(Q.wireframe===!0){if(st=P.getWireframeAttribute(re),st===void 0)return;ft=2}const ot=re.drawRange,lt=re.attributes.position;let Dt=ot.start*ft,Ot=(ot.start+ot.count)*ft;Ke!==null&&(Dt=Math.max(Dt,Ke.start*ft),Ot=Math.min(Ot,(Ke.start+Ke.count)*ft)),st!==null?(Dt=Math.max(Dt,0),Ot=Math.min(Ot,st.count)):lt!=null&&(Dt=Math.max(Dt,0),Ot=Math.min(Ot,lt.count));const An=Ot-Dt;if(An<0||An===1/0)return;oe.setup(me,Q,at,re,st);let Yn,Ht=V;if(st!==null&&(Yn=He.get(st),Ht=ie,Ht.setIndex(Yn)),me.isMesh)Q.wireframe===!0?(_e.setLineWidth(Q.wireframeLinewidth*le()),Ht.setMode(N.LINES)):Ht.setMode(N.TRIANGLES);else if(me.isLine){let ht=Q.linewidth;ht===void 0&&(ht=1),_e.setLineWidth(ht*le()),me.isLineSegments?Ht.setMode(N.LINES):me.isLineLoop?Ht.setMode(N.LINE_LOOP):Ht.setMode(N.LINE_STRIP)}else me.isPoints?Ht.setMode(N.POINTS):me.isSprite&&Ht.setMode(N.TRIANGLES);if(me.isInstancedMesh)Ht.renderInstances(Dt,An,me.count);else if(re.isInstancedBufferGeometry){const ht=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Tr=Math.min(re.instanceCount,ht);Ht.renderInstances(Dt,An,Tr)}else Ht.render(Dt,An)},this.compile=function(L,q){function re(Q,me,Ke){Q.transparent===!0&&Q.side===jn&&Q.forceSinglePass===!1?(Q.side=Ln,Q.needsUpdate=!0,yt(Q,me,Ke),Q.side=_i,Q.needsUpdate=!0,yt(Q,me,Ke),Q.side=jn):yt(Q,me,Ke)}m=xe.get(L),m.init(),E.push(m),L.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(y._useLegacyLights),L.traverse(function(Q){const me=Q.material;if(me)if(Array.isArray(me))for(let Ke=0;Ke<me.length;Ke++){const nt=me[Ke];re(nt,L,Q)}else re(me,L,Q)}),E.pop(),m=null};let rt=null;function bt(L){rt&&rt(L)}function fe(){Ge.stop()}function Me(){Ge.start()}const Ge=new Df;Ge.setAnimationLoop(bt),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(L){rt=L,I.setAnimationLoop(L),L===null?Ge.stop():Ge.start()},I.addEventListener("sessionstart",fe),I.addEventListener("sessionend",Me),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(q),q=I.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,q,T),m=xe.get(L,E.length),m.init(),E.push(m),Ye.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Re.setFromProjectionMatrix(Ye),ke=this.localClippingEnabled,Ae=Fe.init(this.clippingPlanes,ke),_=ye.get(L,h.length),_.init(),h.push(_),it(L,q,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(te,de),this.info.render.frame++,Ae===!0&&Fe.beginShadows();const re=m.state.shadowsArray;if(Ee.render(re,L,q),Ae===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(_,L),m.setupLights(y._useLegacyLights),q.isArrayCamera){const Q=q.cameras;for(let me=0,Ke=Q.length;me<Ke;me++){const nt=Q[me];mt(_,L,nt,nt.viewport)}}else mt(_,L,q);T!==null&&(Oe.updateMultisampleRenderTarget(T),Oe.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(y,L,q),oe.resetDefaultState(),F=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function it(L,q,re,Q){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)re=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Re.intersectsSprite(L)){Q&&Te.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ye);const nt=b.update(L),at=L.material;at.visible&&_.push(L,nt,at,re,Te.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Re.intersectsObject(L))){const nt=b.update(L),at=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Te.copy(L.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),Te.copy(nt.boundingSphere.center)),Te.applyMatrix4(L.matrixWorld).applyMatrix4(Ye)),Array.isArray(at)){const st=nt.groups;for(let ft=0,ot=st.length;ft<ot;ft++){const lt=st[ft],Dt=at[lt.materialIndex];Dt&&Dt.visible&&_.push(L,nt,Dt,re,Te.z,lt)}}else at.visible&&_.push(L,nt,at,re,Te.z,null)}}const Ke=L.children;for(let nt=0,at=Ke.length;nt<at;nt++)it(Ke[nt],q,re,Q)}function mt(L,q,re,Q){const me=L.opaque,Ke=L.transmissive,nt=L.transparent;m.setupLightsView(re),Ae===!0&&Fe.setGlobalState(y.clippingPlanes,re),Ke.length>0&&Nt(me,Ke,q,re),Q&&_e.viewport(R.copy(Q)),me.length>0&&Et(me,q,re),Ke.length>0&&Et(Ke,q,re),nt.length>0&&Et(nt,q,re),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Nt(L,q,re,Q){const me=ee.isWebGL2;Be===null&&(Be=new ki(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?fa:Qi,minFilter:Qa,samples:me?4:0})),y.getDrawingBufferSize(je),me?Be.setSize(je.x,je.y):Be.setSize(Ml(je.x),Ml(je.y));const Ke=y.getRenderTarget();y.setRenderTarget(Be),y.getClearColor(B),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear();const nt=y.toneMapping;y.toneMapping=Ji,Et(L,re,Q),Oe.updateMultisampleRenderTarget(Be),Oe.updateRenderTargetMipmap(Be);let at=!1;for(let st=0,ft=q.length;st<ft;st++){const ot=q[st],lt=ot.object,Dt=ot.geometry,Ot=ot.material,An=ot.group;if(Ot.side===jn&&lt.layers.test(Q.layers)){const Yn=Ot.side;Ot.side=Ln,Ot.needsUpdate=!0,zt(lt,re,Q,Dt,Ot,An),Ot.side=Yn,Ot.needsUpdate=!0,at=!0}}at===!0&&(Oe.updateMultisampleRenderTarget(Be),Oe.updateRenderTargetMipmap(Be)),y.setRenderTarget(Ke),y.setClearColor(B,H),y.toneMapping=nt}function Et(L,q,re){const Q=q.isScene===!0?q.overrideMaterial:null;for(let me=0,Ke=L.length;me<Ke;me++){const nt=L[me],at=nt.object,st=nt.geometry,ft=Q===null?nt.material:Q,ot=nt.group;at.layers.test(re.layers)&&zt(at,q,re,st,ft,ot)}}function zt(L,q,re,Q,me,Ke){L.onBeforeRender(y,q,re,Q,me,Ke),L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),me.onBeforeRender(y,q,re,Q,L,Ke),me.transparent===!0&&me.side===jn&&me.forceSinglePass===!1?(me.side=Ln,me.needsUpdate=!0,y.renderBufferDirect(re,q,Q,me,L,Ke),me.side=_i,me.needsUpdate=!0,y.renderBufferDirect(re,q,Q,me,L,Ke),me.side=jn):y.renderBufferDirect(re,q,Q,me,L,Ke),L.onAfterRender(y,q,re,Q,me,Ke)}function yt(L,q,re){q.isScene!==!0&&(q=We);const Q=Ie.get(L),me=m.state.lights,Ke=m.state.shadowsArray,nt=me.state.version,at=U.getParameters(L,me.state,Ke,q,re),st=U.getProgramCacheKey(at);let ft=Q.programs;Q.environment=L.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(L.isMeshStandardMaterial?$e:Ue).get(L.envMap||Q.environment),ft===void 0&&(L.addEventListener("dispose",we),ft=new Map,Q.programs=ft);let ot=ft.get(st);if(ot!==void 0){if(Q.currentProgram===ot&&Q.lightsStateVersion===nt)return Gt(L,at),ot}else at.uniforms=U.getUniforms(L),L.onBuild(re,at,y),L.onBeforeCompile(at,y),ot=U.acquireProgram(at,st),ft.set(st,ot),Q.uniforms=at.uniforms;const lt=Q.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(lt.clippingPlanes=Fe.uniform),Gt(L,at),Q.needsLights=fn(L),Q.lightsStateVersion=nt,Q.needsLights&&(lt.ambientLightColor.value=me.state.ambient,lt.lightProbe.value=me.state.probe,lt.directionalLights.value=me.state.directional,lt.directionalLightShadows.value=me.state.directionalShadow,lt.spotLights.value=me.state.spot,lt.spotLightShadows.value=me.state.spotShadow,lt.rectAreaLights.value=me.state.rectArea,lt.ltc_1.value=me.state.rectAreaLTC1,lt.ltc_2.value=me.state.rectAreaLTC2,lt.pointLights.value=me.state.point,lt.pointLightShadows.value=me.state.pointShadow,lt.hemisphereLights.value=me.state.hemi,lt.directionalShadowMap.value=me.state.directionalShadowMap,lt.directionalShadowMatrix.value=me.state.directionalShadowMatrix,lt.spotShadowMap.value=me.state.spotShadowMap,lt.spotLightMatrix.value=me.state.spotLightMatrix,lt.spotLightMap.value=me.state.spotLightMap,lt.pointShadowMap.value=me.state.pointShadowMap,lt.pointShadowMatrix.value=me.state.pointShadowMatrix);const Dt=ot.getUniforms(),Ot=Bs.seqWithValue(Dt.seq,lt);return Q.currentProgram=ot,Q.uniformsList=Ot,ot}function Gt(L,q){const re=Ie.get(L);re.outputColorSpace=q.outputColorSpace,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function sn(L,q,re,Q,me){q.isScene!==!0&&(q=We),Oe.resetTextureUnits();const Ke=q.fog,nt=Q.isMeshStandardMaterial?q.environment:null,at=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:xi,st=(Q.isMeshStandardMaterial?$e:Ue).get(Q.envMap||nt),ft=Q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),lt=!!re.morphAttributes.position,Dt=!!re.morphAttributes.normal,Ot=!!re.morphAttributes.color;let An=Ji;Q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(An=y.toneMapping);const Yn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ht=Yn!==void 0?Yn.length:0,ht=Ie.get(Q),Tr=m.state.lights;if(Ae===!0&&(ke===!0||L!==M)){const ln=L===M&&Q.id===F;Fe.setState(Q,L,ln)}let Ft=!1;Q.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==Tr.state.version||ht.outputColorSpace!==at||me.isInstancedMesh&&ht.instancing===!1||!me.isInstancedMesh&&ht.instancing===!0||me.isSkinnedMesh&&ht.skinning===!1||!me.isSkinnedMesh&&ht.skinning===!0||me.isInstancedMesh&&ht.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&ht.instancingColor===!1&&me.instanceColor!==null||ht.envMap!==st||Q.fog===!0&&ht.fog!==Ke||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==Fe.numPlanes||ht.numIntersection!==Fe.numIntersection)||ht.vertexAlphas!==ft||ht.vertexTangents!==ot||ht.morphTargets!==lt||ht.morphNormals!==Dt||ht.morphColors!==Ot||ht.toneMapping!==An||ee.isWebGL2===!0&&ht.morphTargetsCount!==Ht)&&(Ft=!0):(Ft=!0,ht.__version=Q.version);let Fn=ht.currentProgram;Ft===!0&&(Fn=yt(Q,q,me));let ya=!1,ir=!1,Ma=!1;const on=Fn.getUniforms(),Kn=ht.uniforms;if(_e.useProgram(Fn.program)&&(ya=!0,ir=!0,Ma=!0),Q.id!==F&&(F=Q.id,ir=!0),ya||M!==L){on.setValue(N,"projectionMatrix",L.projectionMatrix),on.setValue(N,"viewMatrix",L.matrixWorldInverse);const ln=on.map.cameraPosition;ln!==void 0&&ln.setValue(N,Te.setFromMatrixPosition(L.matrixWorld)),ee.logarithmicDepthBuffer&&on.setValue(N,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&on.setValue(N,"isOrthographic",L.isOrthographicCamera===!0),M!==L&&(M=L,ir=!0,Ma=!0)}if(me.isSkinnedMesh){on.setOptional(N,me,"bindMatrix"),on.setOptional(N,me,"bindMatrixInverse");const ln=me.skeleton;ln&&(ee.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),on.setValue(N,"boneTexture",ln.boneTexture,Oe),on.setValue(N,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const rr=re.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0&&ee.isWebGL2===!0)&&w.update(me,re,Fn),(ir||ht.receiveShadow!==me.receiveShadow)&&(ht.receiveShadow=me.receiveShadow,on.setValue(N,"receiveShadow",me.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Kn.envMap.value=st,Kn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),ir&&(on.setValue(N,"toneMappingExposure",y.toneMappingExposure),ht.needsLights&&Tn(Kn,Ma),Ke&&Q.fog===!0&&ce.refreshFogUniforms(Kn,Ke),ce.refreshMaterialUniforms(Kn,Q,k,j,Be),Bs.upload(N,ht.uniformsList,Kn,Oe)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Bs.upload(N,ht.uniformsList,Kn,Oe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&on.setValue(N,"center",me.center),on.setValue(N,"modelViewMatrix",me.modelViewMatrix),on.setValue(N,"normalMatrix",me.normalMatrix),on.setValue(N,"modelMatrix",me.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ln=Q.uniformsGroups;for(let Sa=0,ho=ln.length;Sa<ho;Sa++)if(ee.isWebGL2){const Ea=ln[Sa];Ne.update(Ea,Fn),Ne.bind(Ea,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function Tn(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function fn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,q,re){Ie.get(L.texture).__webglTexture=q,Ie.get(L.depthTexture).__webglTexture=re;const Q=Ie.get(L);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=re===void 0,Q.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,q){const re=Ie.get(L);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,re=0){T=L,C=q,D=re;let Q=!0,me=null,Ke=!1,nt=!1;if(L){const st=Ie.get(L);st.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1):st.__webglFramebuffer===void 0?Oe.setupRenderTarget(L):st.__hasExternalTextures&&Oe.rebindTextures(L,Ie.get(L.texture).__webglTexture,Ie.get(L.depthTexture).__webglTexture);const ft=L.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(nt=!0);const ot=Ie.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ot[q])?me=ot[q][re]:me=ot[q],Ke=!0):ee.isWebGL2&&L.samples>0&&Oe.useMultisampledRTT(L)===!1?me=Ie.get(L).__webglMultisampledFramebuffer:Array.isArray(ot)?me=ot[re]:me=ot,R.copy(L.viewport),ae.copy(L.scissor),K=L.scissorTest}else R.copy(be).multiplyScalar(k).floor(),ae.copy(Z).multiplyScalar(k).floor(),K=J;if(_e.bindFramebuffer(N.FRAMEBUFFER,me)&&ee.drawBuffers&&Q&&_e.drawBuffers(L,me),_e.viewport(R),_e.scissor(ae),_e.setScissorTest(K),Ke){const st=Ie.get(L.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,st.__webglTexture,re)}else if(nt){const st=Ie.get(L.texture),ft=q||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,st.__webglTexture,re||0,ft)}F=-1},this.readRenderTargetPixels=function(L,q,re,Q,me,Ke,nt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=Ie.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at){_e.bindFramebuffer(N.FRAMEBUFFER,at);try{const st=L.texture,ft=st.format,ot=st.type;if(ft!==ti&&se.convert(ft)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=ot===fa&&(De.has("EXT_color_buffer_half_float")||ee.isWebGL2&&De.has("EXT_color_buffer_float"));if(ot!==Qi&&se.convert(ot)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ot===Li&&(ee.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-Q&&re>=0&&re<=L.height-me&&N.readPixels(q,re,Q,me,se.convert(ft),se.convert(ot),Ke)}finally{const st=T!==null?Ie.get(T).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(L,q,re=0){const Q=Math.pow(2,-re),me=Math.floor(q.image.width*Q),Ke=Math.floor(q.image.height*Q);Oe.setTexture2D(q,0),N.copyTexSubImage2D(N.TEXTURE_2D,re,0,0,L.x,L.y,me,Ke),_e.unbindTexture()},this.copyTextureToTexture=function(L,q,re,Q=0){const me=q.image.width,Ke=q.image.height,nt=se.convert(re.format),at=se.convert(re.type);Oe.setTexture2D(re,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,re.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,re.unpackAlignment),q.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Q,L.x,L.y,me,Ke,nt,at,q.image.data):q.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Q,L.x,L.y,q.mipmaps[0].width,q.mipmaps[0].height,nt,q.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,Q,L.x,L.y,nt,at,q.image),Q===0&&re.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(L,q,re,Q,me=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ke=L.max.x-L.min.x+1,nt=L.max.y-L.min.y+1,at=L.max.z-L.min.z+1,st=se.convert(Q.format),ft=se.convert(Q.type);let ot;if(Q.isData3DTexture)Oe.setTexture3D(Q,0),ot=N.TEXTURE_3D;else if(Q.isDataArrayTexture)Oe.setTexture2DArray(Q,0),ot=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Q.unpackAlignment);const lt=N.getParameter(N.UNPACK_ROW_LENGTH),Dt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ot=N.getParameter(N.UNPACK_SKIP_PIXELS),An=N.getParameter(N.UNPACK_SKIP_ROWS),Yn=N.getParameter(N.UNPACK_SKIP_IMAGES),Ht=re.isCompressedTexture?re.mipmaps[0]:re.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,L.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,L.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,L.min.z),re.isDataTexture||re.isData3DTexture?N.texSubImage3D(ot,me,q.x,q.y,q.z,Ke,nt,at,st,ft,Ht.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(ot,me,q.x,q.y,q.z,Ke,nt,at,st,Ht.data)):N.texSubImage3D(ot,me,q.x,q.y,q.z,Ke,nt,at,st,ft,Ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,lt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ot),N.pixelStorei(N.UNPACK_SKIP_ROWS,An),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Yn),me===0&&Q.generateMipmaps&&N.generateMipmap(ot),_e.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Oe.setTextureCube(L,0):L.isData3DTexture?Oe.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Oe.setTexture2DArray(L,0):Oe.setTexture2D(L,0),_e.unbindTexture()},this.resetState=function(){C=0,D=0,T=null,_e.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?yr:vf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?It:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class By extends Bf{}By.prototype.isWebGL1Renderer=!0;class zy extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Gy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new W;class Qs{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),a=Tt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zf extends xa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xr;const Pa=new W,qr=new W,Yr=new W,Kr=new et,La=new et,Gf=new Yt,Cs=new W,Da=new W,Ps=new W,Hu=new et,Qo=new et,Vu=new et;class Hy extends _n{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Xr===void 0){Xr=new Gi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Gy(t,5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute("position",new Qs(i,3,0,!1)),Xr.setAttribute("uv",new Qs(i,2,3,!1))}this.geometry=Xr,this.material=e!==void 0?e:new zf,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),Gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;Ls(Cs.set(-.5,-.5,0),Yr,o,qr,r,a),Ls(Da.set(.5,-.5,0),Yr,o,qr,r,a),Ls(Ps.set(.5,.5,0),Yr,o,qr,r,a),Hu.set(0,0),Qo.set(1,0),Vu.set(1,1);let s=e.ray.intersectTriangle(Cs,Da,Ps,!1,Pa);if(s===null&&(Ls(Da.set(-.5,.5,0),Yr,o,qr,r,a),Qo.set(0,1),s=e.ray.intersectTriangle(Cs,Ps,Da,!1,Pa),s===null))return;const l=e.ray.origin.distanceTo(Pa);l<e.near||l>e.far||t.push({distance:l,point:Pa.clone(),uv:Wn.getInterpolation(Pa,Cs,Da,Ps,Hu,Qo,Vu,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ls(n,e,t,i,r,a){Kr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(La.x=a*Kr.x-r*Kr.y,La.y=r*Kr.x+a*Kr.y):La.copy(Kr),n.copy(e),n.x+=La.x,n.y+=La.y,n.applyMatrix4(Gf)}class zs extends gn{constructor(e,t,i,r,a,o,s,l,u){super(e,t,i,r,a,o,s,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $a extends xa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hf extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $o=new Yt,Wu=new W,ju=new W;class Vy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),$o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xu=new Yt,Ia=new W,el=new W;class Wy extends Vy{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ia),el.copy(i.position),el.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(el),i.updateMatrixWorld(),r.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Xu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu)}}class jy extends Hf{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Wy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xy extends Hf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qu(){return(typeof performance>"u"?Date:performance).now()}class Yu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);function Yl(n,e,t,i,r,a,o,s){const l=(T,F,M,R)=>[new et(T/o,1-R/s),new et(M/o,1-R/s),new et(M/o,1-F/s),new et(T/o,1-F/s)],u=l(e+a,t,e+i+a,t+a),d=l(e+i+a,t,e+i*2+a,t+a),f=l(e,t+a,e+a,t+a+r),p=l(e+a,t+a,e+i+a,t+a+r),v=l(e+i+a,t+a,e+i+a*2,t+r+a),g=l(e+i+a*2,t+a,e+i*2+a*2,t+r+a),_=n.attributes.uv,m=[v[3],v[2],v[0],v[1]],h=[f[3],f[2],f[0],f[1]],E=[u[3],u[2],u[0],u[1]],y=[d[0],d[1],d[3],d[2]],S=[p[3],p[2],p[0],p[1]],C=[g[3],g[2],g[0],g[1]],D=[];for(const T of[m,h,E,y,S,C])for(const F of T)D.push(F.x,F.y);_.set(new Float32Array(D)),_.needsUpdate=!0}function Bn(n,e,t,i,r,a){Yl(n,e,t,i,r,a,64,64)}function El(n,e,t,i,r,a){Yl(n,e,t,i,r,a,64,32)}class cr extends cn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class qy extends cn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new $a({side:_i}),this.layer2Material=new $a({side:jn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new Xt(8,8,8);Bn(e,0,0,8,8,8);const t=new Rt(e,this.layer1Material),i=new Xt(9,9,9);Bn(i,32,0,8,8,8);const r=new Rt(i,this.layer2Material);this.head=new cr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new Xt(8,12,4);Bn(a,16,16,8,12,4);const o=new Rt(a,this.layer1Material),s=new Xt(8.5,12.5,4.5);Bn(s,16,32,8,12,4);const l=new Rt(s,this.layer2Material);this.body=new cr(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const u=new Xt,d=new Rt(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3:4,d.scale.y=12,d.scale.z=4,Bn(u,40,16,this.slim?3:4,12,4)});const f=new Xt,p=new Rt(f,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Bn(f,40,32,this.slim?3:4,12,4)});const v=new cn;v.add(d,p),this.modelListeners.push(()=>{v.position.x=this.slim?-.5:-1}),v.position.y=-4,this.rightArm=new cr(d,p),this.rightArm.name="rightArm",this.rightArm.add(v),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const g=new Xt,_=new Rt(g,this.layer1MaterialBiased);this.modelListeners.push(()=>{_.scale.x=this.slim?3:4,_.scale.y=12,_.scale.z=4,Bn(g,32,48,this.slim?3:4,12,4)});const m=new Xt,h=new Rt(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3.5:4.5,h.scale.y=12.5,h.scale.z=4.5,Bn(m,48,48,this.slim?3:4,12,4)});const E=new cn;E.add(_,h),this.modelListeners.push(()=>{E.position.x=this.slim?.5:1}),E.position.y=-4,this.leftArm=new cr(_,h),this.leftArm.name="leftArm",this.leftArm.add(E),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const y=new Xt(4,12,4);Bn(y,0,16,4,12,4);const S=new Rt(y,this.layer1MaterialBiased),C=new Xt(4.5,12.5,4.5);Bn(C,0,32,4,12,4);const D=new Rt(C,this.layer2MaterialBiased),T=new cn;T.add(S,D),T.position.y=-6,this.rightLeg=new cr(S,D),this.rightLeg.name="rightLeg",this.rightLeg.add(T),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const F=new Xt(4,12,4);Bn(F,16,48,4,12,4);const M=new Rt(F,this.layer1MaterialBiased),R=new Xt(4.5,12.5,4.5);Bn(R,0,48,4,12,4);const ae=new Rt(R,this.layer2MaterialBiased),K=new cn;K.add(M,ae),K.position.y=-6,this.leftLeg=new cr(M,ae),this.leftLeg.name="leftLeg",this.leftLeg.add(K),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof cr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Yy extends cn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new $a({side:jn,transparent:!0,alphaTest:1e-5});const e=new Xt(10,16,1);El(e,0,0,10,16,1),this.cape=new Rt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Ky extends cn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new $a({side:jn,transparent:!0,alphaTest:1e-5});const e=new Xt(12,22,4);El(e,22,0,10,20,2);const t=new Rt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new cn,this.leftWing.add(t),this.add(this.leftWing);const i=new Xt(12,22,4);El(i,22,0,10,20,2);const r=new Rt(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new cn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Zy extends cn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new $a({side:_i});const e=new Xt(8,8,4/3);Yl(e,0,0,6,6,1,14,7),this.rightEar=new Rt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Rt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Ku=10.8*Math.PI/180;class Jy extends cn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new qy,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Yy,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Ku,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new Ky,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Zy,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Ku,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ds(n){return n instanceof HTMLImageElement||n instanceof HTMLVideoElement||n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}function wl(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(a.data[l+3]!==255)return!0}return!1}function uo(n){return n/64}function Zu(n,e,t){if(t){if(wl(n,0,0,e,e))return}else if(wl(n,0,0,e,e/2))return;const i=uo(e),r=(a,o,s,l)=>n.clearRect(a*i,o*i,s*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function Qy(n,e){n.save(),n.scale(-1,1);const t=uo(e),i=(r,a,o,s,l,u)=>n.drawImage(n.canvas,r*t,a*t,o*t,s*t,-l*t,u*t,-o*t,s*t);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),n.restore()}function $y(n,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=n.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;n.width=r,n.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),Qy(i,r),Zu(i,n.width,!1)}else n.width=e.width,n.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,n.width,n.height),Zu(i,n.width,!0)}function eM(n){if(n.width===2*n.height)return n.width/64;if(n.width*17===n.height*22)return n.width/22;if(n.width*11===n.height*23)return n.width/46;throw new Error(`Bad cape size: ${n.width}x${n.height}`)}function tM(n,e){const t=eM(e);n.width=64*t,n.height=32*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function nM(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===0&&a.data[l+1]===0&&a.data[l+2]===0&&a.data[l+3]===255))return!1}return!0}function iM(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===255&&a.data[l+1]===255&&a.data[l+2]===255&&a.data[l+3]===255))return!1}return!0}function rM(n){const e=uo(n.width),t=n.getContext("2d",{willReadFrequently:!0}),i=(s,l,u,d)=>wl(t,s*e,l*e,u*e,d*e),r=(s,l,u,d)=>nM(t,s*e,l*e,u*e,d*e),a=(s,l,u,d)=>iM(t,s*e,l*e,u*e,d*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function aM(n){if(n.width===n.height*2&&n.height%7===0)return n.height/7;throw new Error(`Bad ears size: ${n.width}x${n.height}`)}function sM(n,e){const t=aM(e);n.width=14*t,n.height=7*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function Ju(n,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=uo(e.width),i=14*t,r=7*t;n.width=i,n.height=r;const a=n.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,i,r),a.drawImage(e,24*t,0,i,r,0,0,i,r)}async function Is(n){const e=document.createElement("img");return new Promise((t,i)=>{e.onload=()=>t(e),e.onerror=i,e.crossOrigin="anonymous",typeof n=="string"?e.src=n:(n.crossOrigin!==void 0&&(e.crossOrigin=n.crossOrigin),n.referrerPolicy!==void 0&&(e.referrerPolicy=n.referrerPolicy),e.src=n.src)})}const Qu={type:"change"},tl={type:"start"},$u={type:"end"},Us=new Mf,ed=new Yi,oM=Math.cos(70*Dg.DEG2RAD);class lM extends wr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",b),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Qu),i.update(),a=r.NONE},this.update=(function(){const w=new W,V=new Er().setFromUnitVectors(e.up,new W(0,1,0)),ie=V.clone().invert(),se=new W,oe=new Er,Ne=new W,Ze=2*Math.PI;return function(Ce=null){const G=i.object.position;w.copy(G).sub(i.target),w.applyQuaternion(V),s.setFromVector3(w),i.autoRotate&&a===r.NONE&&ae(M(Ce)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let he=i.minAzimuthAngle,we=i.maxAzimuthAngle;isFinite(he)&&isFinite(we)&&(he<-Math.PI?he+=Ze:he>Math.PI&&(he-=Ze),we<-Math.PI?we+=Ze:we>Math.PI&&(we-=Ze),he<=we?s.theta=Math.max(he,Math.min(we,s.theta)):s.theta=s.theta>(he+we)/2?Math.max(he,s.theta):Math.min(we,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.zoomToCursor&&D||i.object.isOrthographicCamera?s.radius=de(s.radius):s.radius=de(s.radius*u),w.setFromSpherical(s),w.applyQuaternion(ie),G.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let Xe=!1;if(i.zoomToCursor&&D){let tt=null;if(i.object.isPerspectiveCamera){const rt=w.length();tt=de(rt*u);const bt=rt-tt;i.object.position.addScaledVector(S,bt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const rt=new W(C.x,C.y,0);rt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Xe=!0;const bt=new W(C.x,C.y,0);bt.unproject(i.object),i.object.position.sub(bt).add(rt),i.object.updateMatrixWorld(),tt=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(tt).add(i.object.position):(Us.origin.copy(i.object.position),Us.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Us.direction))<oM?e.lookAt(i.target):(ed.setFromNormalAndCoplanarPoint(i.object.up,i.target),Us.intersectPlane(ed,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Xe=!0);return u=1,D=!1,Xe||se.distanceToSquared(i.object.position)>o||8*(1-oe.dot(i.object.quaternion))>o||Ne.distanceToSquared(i.target)>0?(i.dispatchEvent(Qu),se.copy(i.object.position),oe.copy(i.object.quaternion),Ne.copy(i.target),Xe=!1,!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ye),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",Ue),i.domElement.removeEventListener("wheel",P),i.domElement.removeEventListener("pointermove",Oe),i.domElement.removeEventListener("pointerup",Ue),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",b),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Yu,l=new Yu;let u=1;const d=new W,f=new et,p=new et,v=new et,g=new et,_=new et,m=new et,h=new et,E=new et,y=new et,S=new W,C=new et;let D=!1;const T=[],F={};function M(w){return w!==null?2*Math.PI/60*i.autoRotateSpeed*w:2*Math.PI/60/60*i.autoRotateSpeed}function R(){return Math.pow(.95,i.zoomSpeed)}function ae(w){l.theta-=w}function K(w){l.phi-=w}const B=(function(){const w=new W;return function(ie,se){w.setFromMatrixColumn(se,0),w.multiplyScalar(-ie),d.add(w)}})(),H=(function(){const w=new W;return function(ie,se){i.screenSpacePanning===!0?w.setFromMatrixColumn(se,1):(w.setFromMatrixColumn(se,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(ie),d.add(w)}})(),X=(function(){const w=new W;return function(ie,se){const oe=i.domElement;if(i.object.isPerspectiveCamera){const Ne=i.object.position;w.copy(Ne).sub(i.target);let Ze=w.length();Ze*=Math.tan(i.object.fov/2*Math.PI/180),B(2*ie*Ze/oe.clientHeight,i.object.matrix),H(2*se*Ze/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(B(ie*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),H(se*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function j(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(w){if(!i.zoomToCursor)return;D=!0;const V=i.domElement.getBoundingClientRect(),ie=w.clientX-V.left,se=w.clientY-V.top,oe=V.width,Ne=V.height;C.x=ie/oe*2-1,C.y=-(se/Ne)*2+1,S.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function de(w){return Math.max(i.minDistance,Math.min(i.maxDistance,w))}function be(w){f.set(w.clientX,w.clientY)}function Z(w){te(w),h.set(w.clientX,w.clientY)}function J(w){g.set(w.clientX,w.clientY)}function Re(w){p.set(w.clientX,w.clientY),v.subVectors(p,f).multiplyScalar(i.rotateSpeed);const V=i.domElement;ae(2*Math.PI*v.x/V.clientHeight),K(2*Math.PI*v.y/V.clientHeight),f.copy(p),i.update()}function Ae(w){E.set(w.clientX,w.clientY),y.subVectors(E,h),y.y>0?j(R()):y.y<0&&k(R()),h.copy(E),i.update()}function ke(w){_.set(w.clientX,w.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),X(m.x,m.y),g.copy(_),i.update()}function Be(w){te(w),w.deltaY<0?k(R()):w.deltaY>0&&j(R()),i.update()}function Ye(w){let V=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),V=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),V=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?ae(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),V=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?ae(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),V=!0;break}V&&(w.preventDefault(),i.update())}function je(){if(T.length===1)f.set(T[0].pageX,T[0].pageY);else{const w=.5*(T[0].pageX+T[1].pageX),V=.5*(T[0].pageY+T[1].pageY);f.set(w,V)}}function Te(){if(T.length===1)g.set(T[0].pageX,T[0].pageY);else{const w=.5*(T[0].pageX+T[1].pageX),V=.5*(T[0].pageY+T[1].pageY);g.set(w,V)}}function We(){const w=T[0].pageX-T[1].pageX,V=T[0].pageY-T[1].pageY,ie=Math.sqrt(w*w+V*V);h.set(0,ie)}function le(){i.enableZoom&&We(),i.enablePan&&Te()}function N(){i.enableZoom&&We(),i.enableRotate&&je()}function ze(w){if(T.length==1)p.set(w.pageX,w.pageY);else{const ie=Y(w),se=.5*(w.pageX+ie.x),oe=.5*(w.pageY+ie.y);p.set(se,oe)}v.subVectors(p,f).multiplyScalar(i.rotateSpeed);const V=i.domElement;ae(2*Math.PI*v.x/V.clientHeight),K(2*Math.PI*v.y/V.clientHeight),f.copy(p)}function De(w){if(T.length===1)_.set(w.pageX,w.pageY);else{const V=Y(w),ie=.5*(w.pageX+V.x),se=.5*(w.pageY+V.y);_.set(ie,se)}m.subVectors(_,g).multiplyScalar(i.panSpeed),X(m.x,m.y),g.copy(_)}function ee(w){const V=Y(w),ie=w.pageX-V.x,se=w.pageY-V.y,oe=Math.sqrt(ie*ie+se*se);E.set(0,oe),y.set(0,Math.pow(E.y/h.y,i.zoomSpeed)),j(y.y),h.copy(E)}function _e(w){i.enableZoom&&ee(w),i.enablePan&&De(w)}function Le(w){i.enableZoom&&ee(w),i.enableRotate&&ze(w)}function Ie(w){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",Oe),i.domElement.addEventListener("pointerup",Ue)),xe(w),w.pointerType==="touch"?U(w):$e(w))}function Oe(w){i.enabled!==!1&&(w.pointerType==="touch"?ce(w):He(w))}function Ue(w){Fe(w),T.length===0&&(i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",Oe),i.domElement.removeEventListener("pointerup",Ue)),i.dispatchEvent($u),a=r.NONE}function $e(w){let V;switch(w.button){case 0:V=i.mouseButtons.LEFT;break;case 1:V=i.mouseButtons.MIDDLE;break;case 2:V=i.mouseButtons.RIGHT;break;default:V=-1}switch(V){case Rr.DOLLY:if(i.enableZoom===!1)return;Z(w),a=r.DOLLY;break;case Rr.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;J(w),a=r.PAN}else{if(i.enableRotate===!1)return;be(w),a=r.ROTATE}break;case Rr.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;be(w),a=r.ROTATE}else{if(i.enablePan===!1)return;J(w),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(tl)}function He(w){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;Re(w);break;case r.DOLLY:if(i.enableZoom===!1)return;Ae(w);break;case r.PAN:if(i.enablePan===!1)return;ke(w);break}}function P(w){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(w.preventDefault(),i.dispatchEvent(tl),Be(w),i.dispatchEvent($u))}function b(w){i.enabled===!1||i.enablePan===!1||Ye(w)}function U(w){switch(Ee(w),T.length){case 1:switch(i.touches.ONE){case Cr.ROTATE:if(i.enableRotate===!1)return;je(),a=r.TOUCH_ROTATE;break;case Cr.PAN:if(i.enablePan===!1)return;Te(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Cr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;le(),a=r.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;N(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(tl)}function ce(w){switch(Ee(w),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ze(w),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;De(w),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(w),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Le(w),i.update();break;default:a=r.NONE}}function ye(w){i.enabled!==!1&&w.preventDefault()}function xe(w){T.push(w)}function Fe(w){delete F[w.pointerId];for(let V=0;V<T.length;V++)if(T[V].pointerId==w.pointerId){T.splice(V,1);return}}function Ee(w){let V=F[w.pointerId];V===void 0&&(V=new et,F[w.pointerId]=V),V.set(w.pageX,w.pageY)}function Y(w){const V=w.pointerId===T[0].pointerId?T[1]:T[0];return F[V.pointerId]}i.domElement.addEventListener("contextmenu",ye),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",Ue),i.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const cM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class fo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uM=new If(-1,1,1,-1,0,1),Kl=new Gi;Kl.setAttribute("position",new Oi([-1,3,0,-1,-1,0,3,-1,0],3));Kl.setAttribute("uv",new Oi([0,2,0,0,2,0],2));class dM{constructor(e){this._mesh=new Rt(Kl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wf extends fo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cf.clone(e.uniforms),this.material=new Bi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dM(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class td extends fo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class fM extends fo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new et);this._width=i.width,this._height=i.height,t=new ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fa}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wf(cM),this.copyPass.material.blending=Ni,this.clock=new Vf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}td!==void 0&&(o instanceof td?i=!0:o instanceof fM&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pM extends fo{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const mM={uniforms:{tDiffuse:{value:null},resolution:{value:new et(1/1024,1/512)}},vertexShader:`

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
	`};class jf{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const i=t*this.speed;this.animate(e,i),this.animationObjects.forEach((r,a)=>{const o=this.progress0.get(a);r(e,this.progress-o,a)}),this.progress+=i}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class nd extends jf{animate(e){const t=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class id extends jf{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class vM extends Hy{constructor(e="",t={}){const i=new zf({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const i=t.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new zs(e);r.magFilter=Bt,r.minFilter=Bt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class gM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new Xy(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new jy(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new zy,this.camera=new Nn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),zn.enabled=!1,this.renderer=new Bf({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new ki(0,0,{depthTexture:new kf(0,0,Li)})),this.composer=new hM(this.renderer,t),this.renderPass=new pM(this.scene,this.camera),this.fxaaPass=new Wf(mM),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new Jy,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new cn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new lM(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Vf,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new zs(this.skinCanvas),this.skinTexture.magFilter=Bt,this.skinTexture.minFilter=Bt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new zs(this.capeCanvas),this.capeTexture.magFilter=Bt,this.capeTexture.minFilter=Bt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new zs(this.earsCanvas),this.earsTexture.magFilter=Bt,this.earsTexture.minFilter=Bt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ds(e))$y(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=rM(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(Ju(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Is(e).then(i=>this.loadSkin(i,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ds(e))tM(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Is(e).then(i=>this.loadCape(i,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ds(e))t.textureType==="skin"?Ju(this.earsCanvas,e):sM(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Is(e).then(i=>this.loadEars(i,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,Ks)}loadBackground(e,t){if(Ds(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new gn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Is(e).then(i=>this.loadBackground(i,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new W).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new et).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new et).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Mt||e instanceof gn?this.scene.background=e:this.scene.background=new Mt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof _n||(e=new vM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const Ha=Lt({list:[],active:null,ready:!1}),nl=new Map;function Tl(n,e){const t=window.__TAURI__?.core;return t?t.invoke(n,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function Ns(){try{Ha.list=await Tl("get_accounts"),Ha.active=await Tl("get_active_account")}catch{}finally{Ha.ready=!0}}function Xf(n){return n?n.skin??(n.account_type?.type==="ely_by"?n.username:null):null}async function Al(n){if(!n)return null;const e=String(n).trim();if(!e||e.startsWith("data:"))return e||null;if(nl.has(e))return nl.get(e);try{const t=await Tl("proxy_skin_png",{source:e});return nl.set(e,t),t}catch{return null}}var _M=ue("<canvas></canvas>");function qf(n,e){En(e,!0);let t=ct(e,"skin",3,null),i=ct(e,"cape",3,null),r=ct(e,"model",3,null),a=ct(e,"width",3,260),o=ct(e,"height",3,340),s=ct(e,"walking",3,!1),l=ct(e,"autorotate",3,!1),u=ct(e,"zoom",3,.85),d=pe(null),f=null,p,v,g,_=pe(null),m=pe(null),h=0;function E(D){if(!D)return null;const T=String(D).trim();if(!T)return null;if(/^(https?:|data:)/i.test(T))return T;const F=window.__TAURI__?.core?.convertFileSrc;return F?F(T):T}function y(D){const T=String(D??"").trim().toLowerCase();return T==="slim"?"slim":T==="classic"?"default":"auto-detect"}function S(){f&&((c(_)!==p||y(r())!==g)&&(p=c(_),g=y(r()),c(_)?f.loadSkin(c(_),{model:g}).catch(()=>{}):f.resetSkin()),c(m)!==v&&(v=c(m),c(m)?f.loadCape(c(m)).catch(()=>{}):f.resetCape()))}nr(()=>(f=new gM({canvas:c(d),width:a(),height:o(),zoom:u(),fov:55}),f.controls.enablePan=!1,f.controls.enableZoom=!0,f.autoRotate=l(),f.animation=s()?new id:new nd,S(),()=>{f?.dispose(),f=null})),vn(()=>{const D=t(),T=i(),F=++h;(async()=>{const M=await Al(D),R=await Al(T);F===h&&(x(_,M??E(D),!0),x(m,R??E(T),!0))})()}),vn(()=>{S()}),vn(()=>{f&&(f.animation=s()?new id:new nd)}),vn(()=>{f&&(f.autoRotate=l())}),vn(()=>{f&&f.setSize(a(),o())});var C=_M();ef(C,D=>x(d,D),()=>c(d)),Pe(()=>di(C,`width:${a()??""}px;height:${o()??""}px;display:block`)),$(n,C),wn()}var xM=ue("<button> </button>"),bM=ue('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),yM=ue('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),MM=ue('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),rd=ue('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),SM=ue('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),ad=ue('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),EM=ue('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),wM=ue('<div class="p-4"><!> <!></div>'),TM=ue(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
              automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),AM=ue('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),RM=ue('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),CM=ue('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),PM=ue('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),LM=ue(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
            authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),DM=ue('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),IM=ue('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),UM=ue('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),NM=ue('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),OM=ue('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),FM=ue('<div><div class="flex items-center gap-3"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--accent)/20 text-sm font-bold text-(--accent)"> </span> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),kM=ue('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),BM=ue('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <!> <div class="border-t border-(--border)"></div></div></div></div>');function zM(n,e){En(e,!0);let t=ct(e,"accounts",19,()=>[]),i=ct(e,"active",3,null),r=pe("offline"),a=pe(""),o=pe(!1),s=pe(""),l=pe(""),u=pe("idle"),d=pe(""),f=pe(null),p=pe(!1),v=null,g=pe("idle"),_=pe(""),m=pe(!1),h=pe(!1),E=pe(null),y=pe(!1),S=null,C=pe(""),D=pe(""),T=pe(!1),F=pe(""),M=pe(""),R=pe(""),ae=pe(""),K=pe(null),B=pe(""),H=pe("");function X(w,V){const ie=window.__TAURI__?.core;return ie?ie.invoke(w,V):Promise.reject(new Error("Tauri backend unavailable in this preview."))}nr(()=>{const w=io(()=>e.onclose?.());return()=>ro(w)}),Bp(()=>{j(),k()});function j(){v&&(clearInterval(v),v=null)}function k(){S&&(clearInterval(S),S=null)}vn(()=>{const w=c(s).trim(),V=setTimeout(async()=>{if(!w){x(l,"");return}try{x(l,await X("offline_uuid",{username:w}),!0)}catch{x(l,"")}},200);return()=>clearTimeout(V)});async function te(w){w.preventDefault(),x(a,""),x(o,!0);try{await X("add_offline_account",{username:c(s).trim()}),x(s,""),x(l,""),await e.onrefresh?.()}catch(V){x(a,String(V),!0)}finally{x(o,!1)}}async function de(){x(d,""),x(p,!1),x(u,"requesting");try{x(f,await X("start_microsoft_device_code"),!0),x(u,"code"),j(),v=setInterval(be,(c(f).interval||5)*1e3)}catch(w){x(u,"idle"),x(d,String(w),!0)}}async function be(){if(c(f))try{const w=await X("poll_microsoft_device_code",{device:c(f)});if(w.state==="pending")return;if(w.state==="slow_down"){j(),v=setInterval(be,((c(f).interval||5)+5)*1e3);return}if(j(),w.state==="failed"){x(d,w.reason,!0),x(f,null),x(u,"idle");return}x(f,null),x(u,"signedin"),await e.onrefresh?.()}catch(w){x(d,String(w),!0)}}async function Z(){if(c(f))try{await navigator.clipboard.writeText(c(f).user_code),x(p,!0),setTimeout(()=>x(p,!1),1600)}catch{}}async function J(){x(_,""),x(m,!1),x(h,!0);try{await X("elyby_browser_login"),x(m,!0),await e.onrefresh?.()}catch(w){x(_,String(w),!0)}finally{x(h,!1)}}async function Re(){x(_,""),x(y,!1),x(g,"requesting");try{x(E,await X("start_elyby_device_code"),!0),x(g,"code"),k(),S=setInterval(Ae,(c(E).interval||5)*1e3)}catch(w){x(g,"idle"),x(_,String(w),!0)}}async function Ae(){if(c(E))try{const w=await X("poll_elyby_device_code",{device:c(E)});if(w.state==="pending")return;if(w.state==="slow_down"){k(),S=setInterval(Ae,((c(E).interval||5)+5)*1e3);return}if(k(),w.state==="failed"){x(_,w.reason,!0),x(E,null),x(g,"idle");return}x(E,null),x(g,"signedin"),await e.onrefresh?.()}catch(w){x(_,String(w),!0)}}async function ke(){if(c(E))try{await navigator.clipboard.writeText(c(E).user_code),x(y,!0),setTimeout(()=>x(y,!1),1600)}catch{}}function Be(){const w=c(E)?.verification_uri_complete??c(E)?.verification_uri;w&&X("open_path",{path:w}).catch(()=>{})}async function Ye(w){w.preventDefault(),x(a,""),x(T,!0),x(m,!1);try{await X("add_elyby_account",{username:c(C).trim(),password:c(D)}),x(C,""),x(D,""),x(m,!0),await e.onrefresh?.()}catch(V){x(a,String(V),!0)}finally{x(T,!1)}}async function je(w){w.preventDefault(),x(a,""),x(o,!0);try{const V=await X("add_custom_yggdrasil_account",{username:c(F).trim(),serverUrl:c(M).trim()});(c(R).trim()||c(ae).trim())&&await X("set_account_textures",{id:V.id,skin:c(R).trim()||null,cape:c(ae).trim()||null}),x(F,""),x(M,""),x(R,""),x(ae,""),await e.onrefresh?.()}catch(V){x(a,String(V),!0)}finally{x(o,!1)}}async function Te(w){const V=window.__TAURI__?.dialog?.open;if(!V){x(a,"File picker unavailable in this build.");return}try{const ie=await V({multiple:!1,title:w==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!ie)return;const se=String(ie);x(w==="skin"?R:ae,se,!0),x(a,"")}catch(ie){x(a,String(ie),!0)}}async function We(w){x(a,"");try{await X("set_active_account",{id:w}),await e.onrefresh?.()}catch(V){x(a,String(V),!0)}}async function le(w){x(a,"");try{await X("remove_account",{id:w}),c(K)===w&&x(K,null),await e.onrefresh?.()}catch(V){x(a,String(V),!0)}}function N(w){if(c(K)===w.id){x(K,null);return}x(K,w.id,!0),x(B,w.skin??"",!0),x(H,w.cape??"",!0)}async function ze(w){const V=window.__TAURI__?.dialog?.open;if(!V){x(a,"File picker unavailable in this build.");return}try{const ie=await V({multiple:!1,title:w==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!ie)return;x(w==="skin"?B:H,String(ie),!0),x(a,"")}catch(ie){x(a,String(ie),!0)}}async function De(){x(a,""),x(o,!0);try{await X("set_account_textures",{id:c(K),skin:c(B).trim()||null,cape:c(H).trim()||null}),await e.onrefresh?.(),x(K,null)}catch(w){x(a,String(w),!0)}finally{x(o,!1)}}async function ee(){x(B,""),x(H,""),await De()}function _e(w){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[w.account_type.type]??"Yggdrasil"}const Le=St(()=>t().find(w=>w.id===c(K))??null);var Ie=BM(),Oe=O(Ie),Ue=O(Oe),$e=A(O(Ue),2),He=A(Ue,2);Ct(He,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],dl,(w,V)=>{var ie=St(()=>ud(V,2));let se=()=>c(ie)[0],oe=()=>c(ie)[1];var Ne=xM(),Ze=ve(Ne,!0);Pe(()=>{wt(Ne,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${c(r)===se()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),ge(Ze,oe())}),ne("click",Ne,()=>{x(r,se(),!0),x(a,"")}),$(w,Ne)});var P=A(He,2),b=O(P);{var U=w=>{var V=yM(),ie=At(V),se=O(ie),oe=A(se,2),Ne=A(ie,2);{var Ze=I=>{var Ce=bM(),G=A(O(Ce),2),he=ve(G,!0);Pe(()=>ge(he,c(l))),$(I,Ce)};qe(Ne,I=>{c(l)&&I(Ze)})}Pe(I=>oe.disabled=I,[()=>!c(s).trim()||c(o)]),Ui("submit",ie,te),kt(se,()=>c(s),I=>x(s,I)),$(w,V)},ce=w=>{var V=wM(),ie=O(V);{var se=G=>{var he=MM(),we=At(he);Pe(()=>we.disabled=c(o)),ne("click",we,de),$(G,he)},oe=G=>{var he=rd();$(G,he)},Ne=G=>{var he=SM(),we=A(O(he),2),Xe=ve(we,!0),tt=A(we,4),rt=ve(tt,!0),bt=A(tt,2),fe=O(bt),Me=ve(fe,!0),Ge=A(fe,2);Pe(()=>{ge(Xe,c(f).verification_uri),ge(rt,c(f).user_code),ge(Me,c(p)?"Copied ✓":"Copy code")}),ne("click",fe,Z),ne("click",Ge,de),$(G,he)},Ze=G=>{var he=ad(),we=A(At(he),2);ne("click",we,()=>{x(u,"idle"),x(d,"")}),$(G,he)};qe(ie,G=>{c(u)==="idle"?G(se):c(u)==="requesting"?G(oe,1):c(u)==="code"&&c(f)?G(Ne,2):c(u)==="signedin"&&G(Ze,3)})}var I=A(ie,2);{var Ce=G=>{var he=EM(),we=ve(he,!0);Pe(()=>ge(we,c(d))),$(G,he)};qe(I,G=>{c(d)&&G(Ce)})}$(w,V)},ye=w=>{var V=LM(),ie=A(O(V),2);{var se=Me=>{var Ge=TM(),it=At(Ge),mt=ve(it,!0),Nt=A(it,4);Pe(()=>{it.disabled=c(h),ge(mt,c(h)?"Waiting for the browser…":"Sign in with browser (recommended)"),Nt.disabled=c(h)}),ne("click",it,J),ne("click",Nt,Re),$(Me,Ge)},oe=Me=>{var Ge=rd();$(Me,Ge)},Ne=Me=>{var Ge=RM(),it=A(O(Ge),2),mt=ve(it,!0),Nt=A(it,4),Et=ve(Nt,!0),zt=A(Nt,2),yt=O(zt),Gt=ve(yt,!0),sn=A(yt,2);{var Tn=L=>{var q=AM();ne("click",q,Be),$(L,q)};qe(sn,L=>{(c(E).verification_uri||c(E).verification_uri_complete)&&L(Tn)})}var fn=A(sn,2);Pe(()=>{ge(mt,c(E).verification_uri),ge(Et,c(E).user_code),ge(Gt,c(y)?"Copied ✓":"Copy code")}),ne("click",yt,ke),ne("click",fn,Re),$(Me,Ge)},Ze=Me=>{var Ge=ad(),it=A(At(Ge),2);ne("click",it,()=>{x(g,"idle"),x(_,"")}),$(Me,Ge)};qe(ie,Me=>{c(g)==="idle"?Me(se):c(g)==="requesting"?Me(oe,1):c(g)==="code"&&c(E)?Me(Ne,2):c(g)==="signedin"&&Me(Ze,3)})}var I=A(ie,2);{var Ce=Me=>{var Ge=CM(),it=ve(Ge,!0);Pe(()=>ge(it,c(_))),$(Me,Ge)};qe(I,Me=>{c(_)&&Me(Ce)})}var G=A(I,2);{var he=Me=>{var Ge=PM();$(Me,Ge)};qe(G,Me=>{c(m)&&c(g)==="idle"&&Me(he)})}var we=A(G,2),Xe=A(O(we),2),tt=O(Xe),rt=A(tt,2),bt=A(rt,2),fe=ve(bt,!0);Pe(Me=>{bt.disabled=Me,ge(fe,c(T)?"Signing in…":"Sign in")},[()=>!c(C).trim()||!c(D)||c(T)]),Ui("submit",Xe,Ye),kt(tt,()=>c(C),Me=>x(C,Me)),kt(rt,()=>c(D),Me=>x(D,Me)),$(w,V)},xe=w=>{var V=DM(),ie=O(V),se=A(ie,2),oe=A(se,2),Ne=O(oe),Ze=A(O(Ne)),I=ve(Ze,!0),Ce=A(Ne,2),G=A(O(Ce)),he=ve(G,!0),we=A(oe,2);Pe(Xe=>{ge(I,c(R)||"none"),ge(he,c(ae)||"none"),we.disabled=Xe},[()=>!c(F).trim()||!c(M).trim()||c(o)]),Ui("submit",V,je),kt(ie,()=>c(M),Xe=>x(M,Xe)),kt(se,()=>c(F),Xe=>x(F,Xe)),ne("click",Ne,()=>Te("skin")),ne("click",Ce,()=>Te("cape")),$(w,V)};qe(b,w=>{c(r)==="offline"?w(U):c(r)==="microsoft"?w(ce,1):c(r)==="elyby"?w(ye,2):c(r)==="custom"&&w(xe,3)})}var Fe=A(b,2);{var Ee=w=>{var V=IM(),ie=ve(V,!0);Pe(()=>ge(ie,c(a))),$(w,V)};qe(Fe,w=>{c(a)&&w(Ee)})}var Y=A(Fe,2);Ct(Y,21,t,w=>w.id,(w,V)=>{var ie=FM(),se=O(ie),oe=O(se),Ne=ve(oe,!0),Ze=A(oe,2),I=O(Ze),Ce=O(I),G=ve(Ce,!0),he=A(Ce,2),we=ve(he,!0),Xe=A(he,2);{var tt=yt=>{var Gt=UM();$(yt,Gt)};qe(Xe,yt=>{i()?.id===c(V).id&&yt(tt)})}var rt=A(I,2),bt=ve(rt,!0),fe=A(Ze,2),Me=O(fe),Ge=O(Me);mn(Ge,{emoji:"🎨"});var it=A(Me,2);{var mt=yt=>{var Gt=NM();ne("click",Gt,()=>We(c(V).id)),$(yt,Gt)};qe(it,yt=>{i()?.id!==c(V).id&&yt(mt)})}var Nt=A(it,2),Et=A(se,2);{var zt=yt=>{var Gt=OM(),sn=O(Gt);{let st=St(()=>c(Le)?.model);qf(sn,{get skin(){return c(B)},get cape(){return c(H)},get model(){return c(st)},width:110,height:150})}var Tn=A(sn,2),fn=O(Tn),L=A(O(fn)),q=ve(L,!0),re=A(fn,2),Q=A(O(re)),me=ve(Q,!0),Ke=A(re,2),nt=O(Ke),at=A(nt,2);Pe(()=>{ge(q,c(B)||"default (Steve/Alex)"),ge(me,c(H)||"none"),nt.disabled=c(o)}),ne("click",fn,()=>ze("skin")),ne("click",re,()=>ze("cape")),ne("click",nt,De),ne("click",at,ee),$(yt,Gt)};qe(Et,yt=>{c(K)===c(V).id&&c(Le)&&yt(zt)})}Pe((yt,Gt)=>{wt(ie,1,`border-b border-(--border) px-4 py-2.5 ${i()?.id===c(V).id?"bg-(--accent)/10":""}`),ge(Ne,yt),ge(G,c(V).username),ge(we,Gt),ge(bt,c(V).uuid)},[()=>c(V).username[0]?.toUpperCase(),()=>_e(c(V))]),ne("click",Me,()=>N(c(V))),ne("click",Nt,()=>le(c(V).id)),$(w,ie)},w=>{var V=kM();$(w,V)}),ne("click",Ie,w=>{w.target===w.currentTarget&&e.onclose?.()}),ne("click",$e,()=>e.onclose?.()),$(n,Ie),wn()}qn(["click"]);var GM=ue('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),HM=ue('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),VM=ue('<p class="text-center text-[11px] text-red-400"> </p>'),WM=ue("<option> </option>"),jM=ue("<option>No instances yet</option>"),XM=ue('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),qM=ue('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),YM=ue('<p class="mt-2 text-[11px] text-red-400"> </p>'),KM=ue('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer">▶ Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),ZM=ue('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function JM(n,e){En(e,!0);let t=ct(e,"instances",19,()=>[]),i=ct(e,"active",3,null),r=ct(e,"gameRunning",3,!1),a=ct(e,"status",3,"Ready");function o(K,B){const H=window.__TAURI__?.core;return H?H.invoke(K,B):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let l=pe(Lt(p())),u=pe(""),d=pe(""),f=pe("");function p(){try{const K=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray(K)?K:[]}catch{return[]}}function v(){localStorage.setItem(s,JSON.stringify(c(l)))}function g(K){K.preventDefault(),x(f,"");const B=c(d).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(B)){x(f,"Address must be a hostname (optionally host:port).");return}x(l,[...c(l),{name:c(u).trim()||B.split(":")[0],address:B}],!0),v(),x(u,""),x(d,"")}function _(K){x(l,c(l).filter((B,H)=>H!==K),!0),v()}let m=pe("");vn(()=>{c(m)&&t().some(K=>K.id===c(m))||x(m,t()[0]?.id??"",!0)});const h=St(()=>t().find(K=>K.id===c(m))?.name??"no instance selected");function E(K){!c(m)||r()||e.onlaunch?.(c(m),K.address)}let y=pe(""),S=pe(!1);async function C(K){const B=window.__TAURI__?.dialog?.open;if(!B){x(y,"File picker unavailable in this build.");return}try{const H=await B({multiple:!1,title:K==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!H)return;x(S,!0),x(y,""),await o("set_account_textures",{id:i().id,skin:K==="skin"?String(H):null,cape:K==="cape"?String(H):null}),await e.onrefresh?.()}catch(H){x(y,String(H),!0)}finally{x(S,!1)}}async function D(){if(i())try{x(S,!0),await o("set_account_textures",{id:i().id,skin:null,cape:null}),await e.onrefresh?.()}catch(K){x(y,String(K),!0)}finally{x(S,!1)}}function T(K){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[K.account_type.type]??"Yggdrasil"}var F=ZM(),M=O(F);{var R=K=>{var B=GM(),H=O(B);mn(H,{emoji:"👤",size:30});var X=A(H,6);ne("click",X,()=>e.onopenaccounts?.()),$(K,B)},ae=K=>{var B=KM(),H=O(B),X=O(H);wp(X,()=>i()?.id,b=>{{let U=St(()=>Xf(i()));qf(b,{get skin(){return c(U)},get cape(){return i().cape},get model(){return i().model},width:220,height:300})}});var j=A(X,2),k=O(j),te=ve(k,!0),de=A(k,2),be=ve(de,!0),Z=A(j,2),J=O(Z),Re=A(J,2),Ae=A(Re,2);{var ke=b=>{var U=HM();Pe(()=>U.disabled=c(S)),ne("click",U,D),$(b,U)};qe(Ae,b=>{(i().cape||i().skin)&&b(ke)})}var Be=A(Z,2);{var Ye=b=>{var U=VM(),ce=ve(U,!0);Pe(()=>ge(ce,c(y))),$(b,U)};qe(Be,b=>{c(y)&&b(Ye)})}var je=A(H,2),Te=O(je),We=A(O(Te),2),le=O(We);Ct(le,21,t,b=>b.id,(b,U)=>{var ce=WM(),ye=ve(ce,!0),xe={};Pe(()=>{ge(ye,c(U).name),xe!==(xe=c(U).id)&&(ce.value=(ce.__value=xe)??"")}),$(b,ce)},b=>{var U=jM();U.value=U.__value="",$(b,U)}),qs(le);var N=A(le,2),ze=A(We,2),De=ve(ze,!0),ee=A(ze,2),_e=ve(ee,!0),Le=A(Te,2),Ie=A(O(Le),2);Ct(Ie,19,()=>c(l),b=>b.address,(b,U,ce)=>{var ye=XM(),xe=O(ye),Fe=O(xe),Ee=ve(Fe,!0),Y=A(Fe,2),w=ve(Y,!0),V=A(xe,2),ie=A(V,2);Pe(()=>{ge(Ee,c(U).name),ge(w,c(U).address),V.disabled=!c(m)||r(),Qe(V,"title",`Join ${c(U).address} with ${c(h)}`)}),ne("click",V,()=>E(c(U))),ne("click",ie,()=>_(c(ce))),$(b,ye)},b=>{var U=qM();$(b,U)});var Oe=A(Ie,2),Ue=O(Oe),$e=A(Ue,2),He=A(Oe,2);{var P=b=>{var U=YM(),ce=ve(U,!0);Pe(()=>ge(ce,c(f))),$(b,U)};qe(He,b=>{c(f)&&b(P)})}Pe(b=>{ge(te,i().username),ge(be,b),J.disabled=c(S),Re.disabled=c(S),ze.disabled=!c(m)||r(),ge(De,r()?"GAME RUNNING…":"LAUNCH GAME"),ge(_e,r()?a():c(h))},[()=>T(i())]),ne("click",J,()=>C("skin")),ne("click",Re,()=>C("cape")),Ys(le,()=>c(m),b=>x(m,b)),ne("click",N,()=>e.onopenconsole?.()),ne("click",ze,()=>e.onlaunch?.(c(m),null)),Ui("submit",Oe,g),kt(Ue,()=>c(u),b=>x(u,b)),kt($e,()=>c(d),b=>x(d,b)),$(K,B)};qe(M,K=>{i()?K(ae,-1):K(R)})}$(n,F),wn()}qn(["click"]);var QM=ue('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),$M=ue('<span class="truncate text-[13px]"> </span>'),eS=ue('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px] leading-none"><!></span> <!></button>'),tS=ue('<span class="truncate text-[13px]">Add Instance</span>'),nS=ue('<span class="h-7 w-7"></span>'),iS=ue('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),rS=ue('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),aS=ue('<button role="tab"> </button>'),sS=ue('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),oS=ue('<div class="mb-4 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance">⤓ Install .mrpack</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),lS=ue('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),cS=ue('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),uS=ue('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),dS=ue("<div> </div>"),fS=ue('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),hS=ue('<p class="mt-2 text-[12px] text-red-400"> </p>'),pS=ue('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),mS=ue('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),vS=ue('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),gS=ue('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="w-5 shrink-0 text-center text-[15px] leading-none">＋</span> <!></button></div> <button><span class="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/20 text-[11px] font-bold text-(--accent)"><!></span> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!></div>');function _S(n,e){En(e,!0);let t=pe("…"),i=pe("instances"),r=pe(Lt(rf(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));vn(()=>{dv(c(r)),localStorage.setItem("twilight-theme",c(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:ls(c(r))?"dark":"light"}).catch(()=>{})}),iv();let a=pe("Ready"),o=pe(!1),s=pe(Lt(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));vn(()=>{localStorage.setItem("twilight-mode",c(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:c(s)}).catch(()=>{})});const l=[{id:"instances",label:"Instances",icon:"▦"},{id:"worlds",label:"Servers & P2P",icon:"⌗"},{id:"downloads",label:"Downloads",icon:"⤓"},{id:"settings",label:"Settings",icon:"⚙"}],u={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]},d=St(()=>Ha.active);let f=pe(!1),p=pe(null),v=0;vn(()=>{const z=Xf(c(d)),Se=++v;(async()=>{const Je=await Al(z);Se===v&&x(p,Je,!0)})()});let g=pe(Lt([])),_=pe(!1),m=pe(""),h=pe(!1),E=pe(!1),y=pe(""),S=pe(!1),C=pe(""),D=pe(null),T=St(()=>c(D)?"edit":c(i)),F=pe(null),M=pe(null),R=pe(!1),ae=pe(""),K=pe(null),B=pe(""),H=pe(0),X=pe(0),j=pe("");async function k(z,Se){return window.__TAURI__.core.invoke(z,Se)}function te(){x(r,ls(c(r))?"twilight-light":"twilight-dark",!0)}async function de(){x(_,!0),x(m,"");try{x(g,await k("discover_java_installations"),!0)}catch(z){x(m,String(z),!0)}finally{x(_,!1)}}function be(){x(h,!0)}async function Z(){if(c(y).trim()){x(S,!0),x(C,"");try{const z=await k("install_modpack",{pathOrUrl:c(y).trim()});x(E,!1),x(y,""),await Ue(),z&&x(ee,z,!0),x(a,"Modpack installed.")}catch(z){x(C,String(z),!0)}finally{x(S,!1)}}}let J=pe(Lt([])),Re=pe(!1),Ae=pe(!1),ke=pe(null);vn(()=>{c(J).length,c(ke)&&(c(ke).scrollTop=c(ke).scrollHeight)});function Be(z){c(J).push(z),c(J).length>5e3&&c(J).splice(0,c(J).length-5e3)}function Ye(){x(J,[],!0)}function je(z){return z.stream==="stderr"||z.line.includes("/ERROR]")?"text-rose-400":z.line.includes("/WARN]")?"text-(--accent-star)":z.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function Te(){const z=c(J).map(Se=>Se.line).join(`
`);try{await navigator.clipboard.writeText(z)}catch{const Se=document.createElement("textarea");Se.value=z,document.body.append(Se),Se.select(),document.execCommand("copy"),Se.remove()}}async function We(){if(c(Ae))try{await k("kill_instance"),Be({stream:"stdout",line:"kill requested"})}catch(z){Be({stream:"stderr",line:String(z)})}}let le=pe(Lt([])),N=pe(""),ze=pe(null),De=pe(""),ee=pe(null),_e=pe(null),Le=pe(""),Ie=pe(!1);function Oe(){const z=c(De).trim().toLowerCase();return z?c(le).filter(Se=>Se.name.toLowerCase().includes(z)||Se.minecraft_version.toLowerCase().includes(z)||Se.id.toLowerCase().includes(z)):c(le)}async function Ue(){try{x(le,await k("scan_instances"),!0),x(N,"")}catch(z){x(N,String(z),!0)}}function $e(z){x(ee,z,!0)}async function He(z,Se=null){if(c(Ae))return;const Je=c(le).find(gt=>gt.id===z),_t=Je?Je.name:z;x(Ae,!0),x(a,Se?`Running ${_t} → ${Se}…`:`Running ${_t}…`,!0),x(Re,!0);try{const gt=await k("launch_instance",{instanceId:z,server:Se});Be({stream:"stdout",line:`launcher reports exit code ${gt}`}),await Ue(),x(a,"Ready")}catch(gt){console.error("Launch failed:",gt),Be({stream:"stderr",line:`[ERROR] Launch failed: ${gt}`}),x(a,"Launch failed")}finally{x(Ae,!1),c(a)!=="Launch failed"&&x(a,"Ready")}}function P(){c(M)&&k("open_path",{path:c(M).instances_dir}).catch(z=>x(a,String(z),!0))}function b(z){c(M)&&k("open_path",{path:[c(M).instances_dir.replace(/\\/g,"/"),z].join("/")}).catch(Se=>x(a,String(Se),!0))}function U(z){x(Le,""),x(_e,z,!0)}async function ce(z){if(!(!c(_e)||c(Ie))){x(Ie,!0),x(Le,"");try{await k("delete_instance",{instanceId:c(_e),toTrash:z}),c(ee)===c(_e)&&x(ee,null),x(_e,null),await Ue(),x(a,z?"Instance moved to trash.":"Instance deleted.",!0)}catch(Se){x(Le,String(Se),!0)}finally{x(Ie,!1)}}}const ye=St(()=>[...new Set(c(le).map(z=>z.group).filter(Boolean))].sort((z,Se)=>z.localeCompare(Se)));async function xe(z){if(!c(ie))return;const Se=c(ie).name;try{await k("set_instance_group",{instanceId:c(ie).id,group:z}),await Ue(),x(a,z?`Moved ${Se} to ${z}.`:`${Se} is ungrouped.`,!0)}catch(Je){x(a,String(Je),!0)}}async function Fe(){if(!c(ie))return;const z=c(ie).name;try{const Se=await k("duplicate_instance",{instanceId:c(ie).id});await Ue(),x(ee,Se.id,!0),x(a,`Copied ${z}.`)}catch(Se){x(a,String(Se),!0)}}async function Ee(){if(!c(ie))return;const z=window.__TAURI__?.dialog?.save;if(!z){x(a,"File picker unavailable in this build.");return}try{const Se=await z({title:"Export instance",defaultPath:`${c(ie).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Se)return;const Je=await k("export_instance_zip",{instanceId:c(ie).id,destPath:Se});x(a,`Exported to ${Je}.`)}catch(Se){x(a,String(Se),!0)}}async function Y(){if(c(ie))try{const z=await k("create_desktop_shortcut",{instanceId:c(ie).id});x(a,`Shortcut created: ${z}`)}catch(z){x(a,String(z),!0)}}async function w(z,Se){x(h,!1),await Ue(),z?.id&&x(ee,z.id,!0),x(a,Se||`Instance ${z?.name??""} created.`,!0)}function V(z){x(D,z,!0)}const ie=St(()=>c(le).find(z=>z.id===c(ee))??null);let se=pe(null),oe=0;vn(()=>{const z=c(ie);c(D);const Se=++oe;x(se,null),z&&k("list_instance_mods",{instanceId:z.id}).then(Je=>{Se===oe&&x(se,Je.length,!0)}).catch(()=>{Se===oe&&x(se,null)})});async function Ne(){try{x(K,await k("get_java_prefs"),!0),x(B,c(K).java_path??"",!0),x(H,c(K).min_memory_mb,!0),x(X,c(K).max_memory_mb,!0),x(j,""),c(g).length===0&&await de()}catch{}}async function Ze(){x(j,"");try{await k("set_java_prefs",{javaPath:c(B).trim()||null,minMemoryMb:Number(c(H))||0,maxMemoryMb:Number(c(X))||0}),x(j,"Java settings saved.")}catch(z){x(j,String(z),!0)}}async function I(){x(R,!0);try{x(M,await k("get_storage"),!0)}catch(z){x(ae,String(z),!0)}finally{x(R,!1)}}async function Ce(z,Se){x(R,!0),x(ae,"");try{await k("set_folder_dir",{kind:z,path:Se?.trim()||null}),x(M,await k("get_storage"),!0),x(ae,"Folders updated."),(z==="instances"||z==="shared")&&(await Ue(),c(ee)&&!c(le).some(Je=>Je.id===c(ee))&&x(ee,null))}catch(Je){x(ae,String(Je),!0)}finally{x(R,!1)}}function G(z){k("open_path",{path:z}).catch(Se=>x(a,String(Se),!0))}async function he(){x(R,!0),x(ae,"");try{await k("clean_staging"),x(ae,"Staging cleaned.")}catch(z){x(ae,String(z),!0)}finally{x(R,!1)}}function we(z){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[z.account_type.type]??"Yggdrasil"}nr(()=>{const z=[],Se=Je=>{if(Je.key==="Escape"){const rn=mc();if(rn){rn();return}c(ze)?x(ze,null):c(_e)?(x(_e,null),x(Le,"")):c(D)?x(D,null):c(ee)?x(ee,null):c(f)?x(f,!1):c(E)?x(E,!1):c(Re)&&x(Re,!1);return}if(c(ze)||c(_e)||c(f)||c(E)||c(D)||c(Re)||mc()||Je.target?.closest?.("input, textarea, select, [contenteditable]"))return;const gt=Oe();if(!gt.length)return;const Kt=gt.findIndex(rn=>rn.id===c(ee));let Wt=null;if(Je.key==="ArrowDown"||Je.key==="ArrowRight")Wt=Kt+1;else if(Je.key==="ArrowUp"||Je.key==="ArrowLeft")Wt=Kt<0?0:Kt-1;else if(Je.key==="Enter"&&Kt>=0&&document.activeElement===document.body){Je.preventDefault(),He(gt[Kt].id);return}Wt!=null&&gt[Wt]&&(Je.preventDefault(),x(ee,gt[Wt].id,!0))};return window.addEventListener("keydown",Se),(async()=>{try{x(t,await k("get_version"),!0)}catch{x(t,"dev")}try{z.push(await window.__TAURI__.event.listen("launch-log",Je=>Be(Je.payload))),z.push(await window.__TAURI__.event.listen("tauri://drag-drop",Je=>{const _t=Je.payload?.paths?.[0];_t&&_t.endsWith(".mrpack")&&(c(E)?x(y,_t,!0):x(F,_t,!0))}))}catch{}await Ns(),await Ue(),await I();try{const Je=await k("get_startup_launch");Je&&c(le).some(_t=>_t.id===Je)&&He(Je)}catch{}})(),()=>z.forEach(Je=>Je())});var Xe=gS(),tt=O(Xe),rt=O(tt),bt=A(O(rt),2);{var fe=z=>{var Se=QM();$(z,Se)};qe(bt,z=>{c(o)&&z(fe)})}var Me=A(rt,2),Ge=O(Me);Ct(Ge,17,()=>l,z=>z.id,(z,Se)=>{var Je=eS(),_t=O(Je),gt=O(_t);{var Kt=jt=>{mn(jt,{get emoji(){return c(Se).icon},size:15})},Wt=jt=>{var Vt=ui();Pe(()=>ge(Vt,c(Se).icon)),$(jt,Vt)};qe(gt,jt=>{c(Se).id==="settings"?jt(Kt):jt(Wt,-1)})}var rn=A(_t,2);{var Zn=jt=>{var Vt=$M(),li=ve(Vt,!0);Pe(()=>ge(li,c(Se).label)),$(jt,Vt)};qe(rn,jt=>{c(o)&&jt(Zn)})}Pe(()=>{wt(Je,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${c(o)?"":"justify-center"} ${c(i)===c(Se).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Qe(Je,"title",c(Se).label)}),ne("click",Je,()=>{x(i,c(Se).id,!0),x(D,null),x(s,"launcher"),c(Se).id==="settings"&&(Ne(),c(M)||I())}),$(z,Je)});var it=A(Ge,2),mt=A(O(it),2);{var Nt=z=>{var Se=tS();$(z,Se)};qe(mt,z=>{c(o)&&z(Nt)})}var Et=A(Me,2),zt=O(Et),yt=O(zt);{var Gt=z=>{var Se=nS();Pe(()=>di(Se,`background-image:url(${c(p)});background-size:800% 800%;background-position:14.2857% 14.2857%;image-rendering:pixelated`)),$(z,Se)},sn=z=>{var Se=ui();Pe(Je=>ge(Se,Je),[()=>c(d).username[0]?.toUpperCase()]),$(z,Se)},Tn=z=>{var Se=ui("?");$(z,Se)};qe(yt,z=>{c(p)?z(Gt):c(d)?z(sn,1):z(Tn,-1)})}var fn=A(zt,2);{var L=z=>{var Se=iS(),Je=O(Se),_t=ve(Je,!0),gt=A(Je,2),Kt=ve(gt,!0);Pe(Wt=>{ge(_t,c(d)?c(d).username:"Add account"),ge(Kt,Wt)},[()=>c(d)?we(c(d)):"Offline"]),$(z,Se)};qe(fn,z=>{c(o)&&z(L)})}var q=A(Et,2),re=ve(q,!0),Q=A(tt,2),me=O(Q),Ke=O(me),nt=O(Ke);{var at=z=>{var Se=rS(),Je=At(Se),_t=A(Je,2),gt=ve(_t,!0);Pe(()=>{Qe(_t,"title",c(D)?.name),ge(gt,c(D)?.name)}),ne("click",Je,()=>x(D,null)),$(z,Se)},st=z=>{var Se=sS(),Je=At(Se),_t=ve(Je),gt=A(Je,4);Ct(gt,20,()=>[["launcher","Launcher"],["client","Client"]],dl,(Kt,Wt)=>{var rn=St(()=>ud(Wt,2));let Zn=()=>c(rn)[0],jt=()=>c(rn)[1];var Vt=aS(),li=ve(Vt,!0);Pe(()=>{wt(Vt,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${c(s)===Zn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Qe(Vt,"aria-selected",c(s)===Zn()),ge(li,jt())}),ne("click",Vt,()=>x(s,Zn(),!0)),$(Kt,Vt)}),Pe(()=>ge(_t,`TwilightMC Bolide (alpha-v${c(t)??""})`)),$(z,Se)};qe(nt,z=>{c(T)==="edit"?z(at):z(st,-1)})}var ft=A(Ke,2),ot=ve(ft,!0),lt=A(me,2),Dt=O(lt);{var Ot=z=>{JM(z,{get instances(){return c(le)},get active(){return c(d)},get gameRunning(){return c(Ae)},get status(){return c(a)},onlaunch:He,onopenconsole:()=>x(Re,!0),get onrefresh(){return Ns},onopenaccounts:()=>x(f,!0)})},An=z=>{xm(z,{get instance(){return c(D)},get storage(){return c(M)},onback:()=>x(D,null),onopenconsole:()=>x(Re,!0)})},Yn=z=>{Iv(z,{get version(){return c(t)},get storage(){return c(M)},get runtimes(){return c(g)},get scanning(){return c(_)},get javaError(){return c(m)},get storageBusy(){return c(R)},get storageMsg(){return c(ae)},get javaMsg(){return c(j)},get gameRunning(){return c(Ae)},onback:()=>x(i,"instances"),onscanjava:de,onsaveprefs:Ze,onsavefolder:Ce,onopenfolder:G,oncleanstaging:he,onopenurl:Se=>k("open_path",{path:Se}).catch(Je=>x(a,String(Je),!0)),get theme(){return c(r)},set theme(Se){x(r,Se,!0)},get javaPath(){return c(B)},set javaPath(Se){x(B,Se,!0)},get minMem(){return c(H)},set minMem(Se){x(H,Se,!0)},get maxMem(){return c(X)},set maxMem(Se){x(X,Se,!0)}})},Ht=z=>{var Se=oS(),Je=At(Se),_t=O(Je),gt=A(_t,2),Kt=O(gt);mn(Kt,{emoji:"📂"});var Wt=A(gt,2),rn=A(Wt,2),Zn=O(rn);mn(Zn,{emoji:"⚙"});var jt=A(rn,2),Vt=A(jt,4),li=O(Vt);{var Hi=Rn=>{mn(Rn,{emoji:"☀",alt:"Light theme"})},ci=St(()=>ls(c(r))),Zt=Rn=>{mn(Rn,{emoji:"🌙",alt:"Dark theme"})};qe(li,Rn=>{c(ci)?Rn(Hi):Rn(Zt,-1)})}var bi=A(Je,2);{let Rn=St(Oe);em(bi,{get instances(){return c(Rn)},get error(){return c(N)},get query(){return c(De)},get selectedId(){return c(ee)},get gameRunning(){return c(Ae)},get menuFor(){return c(ze)},onselect:$e,onplay:He,ontogglemenu:tc=>x(ze,c(ze)===tc?null:tc,!0),onedit:V,onopenfolder:b,onviewlogs:()=>x(Re,!0),ondelete:U,onclosemenu:()=>x(ze,null),onadd:be})}Pe(Rn=>{gt.disabled=!c(M),Qe(gt,"title",c(M)?c(M).instances_dir:""),Qe(Vt,"title",Rn)},[()=>ls(c(r))?"Twilight Light":"Twilight Dark"]),ne("click",_t,be),ne("click",gt,P),ne("click",Wt,()=>x(E,!0)),ne("click",rn,()=>{x(i,"settings"),Ne(),c(M)||I()}),kt(jt,()=>c(De),Rn=>x(De,Rn)),ne("click",Vt,te),$(z,Se)},ht=z=>{var Se=lS(),Je=At(Se),_t=ve(Je,!0),gt=A(Je,2),Kt=ve(gt,!0);Pe(()=>{ge(_t,u[c(i)][0]),ge(Kt,u[c(i)][1])}),$(z,Se)};qe(Dt,z=>{c(s)==="client"?z(Ot):c(T)==="edit"&&c(D)?z(An,1):c(i)==="settings"?z(Yn,2):c(i)==="instances"?z(Ht,3):z(ht,-1)})}var Tr=A(lt,2),Ft=O(Tr),Fn=O(Ft),ya=O(Fn),ir=A(ya,4);{var Ma=z=>{var Se=cS();$(z,Se)};qe(ir,z=>{c(Ae)&&z(Ma)})}var on=A(Fn,2),Kn=O(on),rr=A(Kn,2),ln=A(rr,2),Sa=A(ln,2);{var ho=z=>{var Se=uS();ne("click",Se,()=>x(Re,!1)),$(z,Se)};qe(Sa,z=>{c(Re)&&z(ho)})}var Ea=A(Ft,2);Ct(Ea,21,()=>c(J),dl,(z,Se)=>{var Je=dS(),_t=ve(Je,!0);Pe(gt=>{wt(Je,1,`whitespace-pre-wrap break-all ${gt??""}`),ge(_t,c(Se).line)},[()=>je(c(Se))]),$(z,Je)},z=>{var Se=fS();$(z,Se)}),ef(Ea,z=>x(ke,z),()=>c(ke));var Zl=A(Q,2);{var Yf=z=>{Qm(z,{get instance(){return c(ie)},get storage(){return c(M)},get gameRunning(){return c(Ae)},get modsCount(){return c(se)},get groups(){return c(ye)},onlaunch:()=>He(c(ie).id),onkill:We,onedit:()=>V(c(ie)),onchangegroup:xe,onopenfolder:()=>b(c(ie).id),onexport:Ee,oncopy:Fe,ondelete:()=>U(c(ie).id),onshortcut:Y})};qe(Zl,z=>{c(T)==="instances"&&c(ie)&&z(Yf)})}var Jl=A(Zl,2);{var Kf=z=>{Tm(z,{get path(){return c(F)},onclose:()=>x(F,null),oninstalled:async Se=>{x(F,null),await Ue(),x(ee,Se,!0),x(a,"Modpack installed.")}})};qe(Jl,z=>{c(F)&&z(Kf)})}var Ql=A(Jl,2);{var Zf=z=>{zM(z,{get accounts(){return Ha.list},get active(){return c(d)},onclose:()=>{x(f,!1),Ns()},get onrefresh(){return Ns}})};qe(Ql,z=>{c(f)&&z(Zf)})}var $l=A(Ql,2);{var Jf=z=>{Xm(z,{get groups(){return c(ye)},onclose:()=>x(h,!1),oncreated:w})};qe($l,z=>{c(h)&&z(Jf)})}var ec=A($l,2);{var Qf=z=>{var Se=pS(),Je=O(Se),_t=O(Je),gt=A(O(_t),2),Kt=A(_t,2),Wt=O(Kt),rn=A(Wt,2),Zn=A(rn,2);{var jt=Zt=>{var bi=hS(),Rn=ve(bi,!0);Pe(()=>ge(Rn,c(C))),$(Zt,bi)};qe(Zn,Zt=>{c(C)&&Zt(jt)})}var Vt=A(Kt,2),li=O(Vt),Hi=A(li,2),ci=ve(Hi,!0);Pe(Zt=>{Hi.disabled=Zt,ge(ci,c(S)?"Installing…":"Install .mrpack")},[()=>c(S)||!c(y).trim()]),ne("click",Se,Zt=>{Zt.target===Zt.currentTarget&&!c(S)&&x(E,!1)}),ne("click",gt,()=>x(E,!1)),Ui("dragover",Wt,Zt=>Zt.preventDefault()),Ui("drop",Wt,Zt=>{Zt.preventDefault();const bi=Zt.dataTransfer?.files?.[0]?.path;bi&&x(y,bi,!0)}),kt(rn,()=>c(y),Zt=>x(y,Zt)),ne("click",li,()=>x(E,!1)),ne("click",Hi,Z),$(z,Se)};qe(ec,z=>{c(E)&&z(Qf)})}var $f=A(ec,2);{var eh=z=>{var Se=vS(),Je=O(Se),_t=A(O(Je),2),gt=A(O(_t)),Kt=ve(gt,!0),Wt=A(_t,2);{var rn=ci=>{var Zt=mS(),bi=ve(Zt,!0);Pe(()=>ge(bi,c(Le))),$(ci,Zt)};qe(Wt,ci=>{c(Le)&&ci(rn)})}var Zn=A(Wt,2),jt=O(Zn),Vt=A(jt,2),li=O(Vt);mn(li,{emoji:"♻"});var Hi=A(Vt,2);Pe(()=>{ge(Kt,c(_e)),jt.disabled=c(Ie),Vt.disabled=c(Ie),Hi.disabled=c(Ie)}),ne("click",Se,ci=>{ci.target===ci.currentTarget&&!c(Ie)&&x(_e,null)}),ne("click",jt,()=>x(_e,null)),ne("click",Vt,()=>ce(!0)),ne("click",Hi,()=>ce(!1)),$(z,Se)};qe($f,z=>{c(_e)&&z(eh)})}Pe(()=>{wt(tt,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${c(o)?"w-60":"w-16"}`),wt(it,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${c(o)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),wt(Et,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${c(o)?"":"justify-center"}`),Qe(Et,"title",c(d)?c(d).username:"Add account"),wt(q,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${c(o)?"":"opacity-0 group-hover/nav:opacity-100"}`),ge(re,c(o)?"«":"»"),ge(ot,c(a)),wt(Tr,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${c(Re)?"h-48":"h-10"}`),Qe(Fn,"title",c(Re)?"Collapse console":"Expand console"),wt(ya,1,`h-2 w-2 shrink-0 rounded-full ${c(Ae)?"animate-pulse bg-green-500":"bg-(--border)"}`),Kn.disabled=!c(J).length,rr.disabled=!c(J).length,ln.disabled=!c(Ae)}),ne("dblclick",rt,()=>x(o,!c(o))),ne("click",it,be),ne("click",Et,()=>x(f,!0)),ne("click",q,()=>x(o,!c(o))),ne("click",Fn,()=>x(Re,!c(Re))),ne("click",Kn,z=>{z.stopPropagation(),Ye()}),ne("click",rr,z=>{z.stopPropagation(),Te()}),ne("click",ln,z=>{z.stopPropagation(),We()}),$(n,Xe),wn()}qn(["dblclick","click"]);yp(_S,{target:document.getElementById("app")});
