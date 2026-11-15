(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const _d=!1;var ao=Array.isArray,vh=Array.prototype.indexOf,Wa=Array.prototype.includes,so=Array.from,xd=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,gh=Object.getOwnPropertyDescriptors,_h=Object.prototype,xh=Array.prototype,bd=Object.getPrototypeOf,hc=Object.isExtensible;const bh=()=>{};function yh(n){for(var e=0;e<n.length;e++)n[e]()}function yd(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}function Sd(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const i of n)if(t.push(i),t.length===e)break;return t}const pn=2,la=4,oo=8,Md=1<<24,ti=16,si=32,tr=64,cl=128,Ol=256,ri=512,$t=1024,Pt=2048,Un=4096,yn=8192,ln=16384,_a=32768,ja=1<<25,ca=65536,js=1<<17,Sh=1<<18,xa=1<<19,Mh=1<<20,hi=1<<25,Xs=1<<21,na=1<<22,Ji=1<<23,_r=Symbol("$state"),Ed=Symbol("component"),Eh=Symbol("legacy props"),wh=Symbol(""),wd=Symbol("attributes"),ul=Symbol("class"),dl=Symbol("style"),fl=Symbol("text"),zs=Symbol("form reset"),ns=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Th=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),Ah=1,Rh=2,Td=4,Ch=8,Ph=16,Lh=1,Dh=4,Ih=8,Uh=16,Nh=1,Oh=2,Ad={},Qt=Symbol("uninitialized"),Fh="http://www.w3.org/1999/xhtml";function kh(){console.warn("https://svelte.dev/e/derived_inert")}function Bh(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function zh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Rd(n){return n===this.v}function Gh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Cd(n){return!Gh(n,this.v)}function Pd(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Hh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Vh(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Wh(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function jh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Xh(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Yh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qh(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kh(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zh(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Jh(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Qh(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let $h=!1,cn=null;function ua(n){cn=n}function qt(n,e=!1,t){cn={p:cn,i:!1,c:null,e:null,s:n,x:null,r:St,l:null}}function Kt(n){var e=cn,t=e.e;if(t!==null){e.e=null;for(var i of t)Kd(i)}return e.i=!0,cn=e.p,Fl(n)}function Fl(n={}){return xd(n,Ed,{value:!0}),n}function Ld(){return!0}let mr=[];function Dd(){var n=mr;mr=[],yh(n)}function Ii(n){if(mr.length===0&&!za){var e=mr;queueMicrotask(()=>{e===mr&&Dd()})}mr.push(n)}function ep(){for(;mr.length>0;)Dd()}const tp=-7169;function Ht(n,e){n.f=n.f&tp|e}function kl(n){(n.f&ri)!==0||n.deps===null?Ht(n,$t):Ht(n,Un)}function Id(n,e){(n.f&Pt)!==0?e.set(n,Pt):(n.f&Un)!==0&&e.get(n)!==Pt&&e.set(n,Un),Ht(n,$t)}let pc=!1;function np(){pc||(pc=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e[zs]?.()})},{capture:!0}))}function ba(n){var e=gt,t=St;Yn(null),_i(null);try{return n()}finally{Yn(e),_i(t)}}function Ud(n,e,t,i=t){n.addEventListener(e,()=>ba(t));const r=n[zs];r?n[zs]=()=>{r(),i(!0)}:n[zs]=()=>i(!0),np()}function ip(n,e,t,i){const r=Xa;var a=n.filter(v=>!v.settled),o=e.map(r);if(t.length===0&&a.length===0){i(o);return}var s=St,l=rp(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(v=>v.promise)):null;function d(v){if((s.f&ln)===0){l();try{i([...o,...v])}catch(g){fi(g,s)}Ys()}}var p=Nd();if(t.length===0){u.then(()=>d([])).finally(p);return}function f(){Promise.all(t.map(v=>ap(v))).then(d).catch(v=>fi(v,s)).finally(p)}u?u.then(()=>{if((s.f&ln)!==0){p();return}l(),f(),Ys()}):f()}function rp(){var n=St,e=gt,t=cn,i=ut;return function(a=!0){_i(n),Yn(e),ua(t),a&&(n.f&ln)===0&&(i?.activate(),i?.apply())}}function Ys(n=!0){_i(null),Yn(null),ua(null),n&&ut?.deactivate()}function Nd(){var n=St,e=n.b,t=ut,i=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(i,n),()=>{e?.update_pending_count(-1,t),t.decrement(i,n)}}function Xa(n){var e=pn|Pt;return St!==null&&(St.f|=xa),{ctx:cn,deps:null,effects:null,equals:Rd,f:e,fn:n,reactions:null,rv:0,v:Qt,wv:0,parent:St,ac:null}}const Ua=Symbol("obsolete");function ap(n,e,t){let i=St;i===null&&Hh();var r=void 0,a=wr(Qt),o=!gt,s=new Set;return bp(()=>{var l=St,u=yd();r=u.promise;try{Promise.resolve(n()).then(u.resolve,v=>{v!==ns&&u.reject(v)}).finally(Ys)}catch(v){u.reject(v),Ys()}var d=ut;if(o){if((l.f&_a)!==0)var p=Nd();if(i.b?.is_rendered())d.async_deriveds.get(l)?.reject(Ua);else for(const v of s.values())v.reject(Ua);s.add(u),d.async_deriveds.set(l,u)}const f=(v,g=void 0)=>{p?.(),s.delete(u),g!==Ua&&(d.activate(),g?(a.f|=Ji,da(a,g)):((a.f&Ji)!==0&&(a.f^=Ji),da(a,v)),d.deactivate())};u.promise.then(f,v=>f(null,v||"unknown"))}),Vl(()=>{for(const l of s)l.reject(Ua)}),new Promise(l=>{function u(d){function p(){d===r?l(a):u(r)}d.then(p,p)}u(r)})}function lt(n){const e=Xa(n);return tf(e),e}function Od(n){const e=Xa(n);return e.equals=Cd,e}function sp(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Tn(e[t])}}function Bl(n){var e,t=St,i=n.parent;if(!Bi&&i!==null&&n.v!==Qt&&(i.f&(ln|yn))!==0)return kh(),n.v;_i(i);try{sp(n),e=sf(n)}finally{_i(t)}return e}function Fd(n){var e=Bl(n);if(!n.equals(e)&&(n.wv=rf(),(!ut?.is_fork||n.deps===null)&&(ut!==null?(ut.capture(n,e,!0),ia?.capture(n,e,!0)):n.v=e,n.deps===null))){Ht(n,$t);return}Bi||(ni!==null?(Hl()||ut?.is_fork)&&ni.set(n,e):kl(n))}function op(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&ba(()=>{e.ac.abort(ns),e.ac=null}),e.fn!==null&&(e.teardown=bh),qa(e,0),jl(e))}function kd(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&fa(e)}let bo=null,Pr=null,ut=null,ia=null,ni=null,hl=null,za=!1,yo=!1,Ga=null,Gs=null;var mc=0;let lp=1;class nr{id=lp++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Pr===null?bo=Pr=this:(Pr.next=this,this.prev=Pr),Pr=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=this.#o.get(e);if(i){this.#o.delete(e);for(var r of i.d)Ht(r,Pt),t(r);for(r of i.m)Ht(r,Un),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&ln)!==0||(a.f&(Pt|Un))===0)){for(var t=a,i=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(tr|si))!==0){if((r&$t)===0){i=!0;break}t.f^=$t}}i||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,l]of this.#r)Ht(s,l),this.schedule(s);this.apply();for(var e=Ga=[],t=[],i=Gs=[];this.#i.length>0;){mc++>1e3&&(this.#f(),up());for(const s of this.#u())try{this.#x(s,e,t)}catch(l){throw Gd(s),this.#p()||this.discard(),l}}if(ut=null,i.length>0){var r=nr.ensure();for(const s of i)r.schedule(s)}if(Ga=null,Gs=null,this.#p()){this.#v(t),this.#v(e);for(const[s,l]of this.#o)zd(s,l);i.length>0&&ut.#m();return}const a=this.#S();if(a){this.#v(t),this.#v(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),ia=this,vc(t),vc(e),ia=null,this.#n?.resolve();var o=ut;this.#e===0&&(this.#i.length===0||o!==null)&&this.#f(),o!==null&&(mi.clear(),o.#m())}#x(e,t,i){e.f^=$t;for(var r=e.first;r!==null;){var a=r.f,o=(a&(si|tr))!==0,s=o&&(a&$t)!==0,l=s||(a&yn)!==0||this.#o.has(r);if(!l&&r.fn!==null){o?r.f^=$t:(a&la)!==0?t.push(r):rs(r)&&((a&ti)!==0&&this.add_dirty_reaction(r,Un),fa(r));var u=r.first;if(u!==null){r=u;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#S(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,i]]of this.current)if(!i&&e.current.has(t))return!0;return!1}#d(e){for(const[i,r]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,r);for(const[i,r]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=i=>{var r=i.reactions;if(r!==null&&!((i.f&pn)!==0&&(i.f&(Pt|Un))===0))for(const s of r){var a=s.f;if((a&pn)!==0)t(s);else{var o=s;a&(na|ti)&&!this.async_deriveds.has(o)&&(this.#r.delete(o),Ht(o,Pt),this.schedule(o))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),e.#f(),ut=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)Id(e[t],this.#r)}capture(e,t,i=!1){e.v!==Qt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Ji)===0&&(this.current.set(e,[t,i]),ni?.set(e,t)),this.is_fork||(e.v=t)}activate(){ut=this}deactivate(){ut=null,ni=null}flush(){try{yo=!0,ut=this,this.#m()}finally{mc=0,hl=null,Ga=null,Gs=null,yo=!1,ut=null,ni=null,mi.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Ua);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let p=bo;p!==null;p=p.next){var e=p.id<this.id,t=[];for(const[f,[v,g]]of this.current){if(p.current.has(f)){var i=p.current.get(f)[0];if(e&&v!==i)p.current.set(f,[v,g]);else continue}t.push(f)}if(e)for(const[f,v]of this.async_deriveds){const g=p.async_deriveds.get(f);g&&v.promise.then(g.resolve).catch(g.reject)}var r=[...p.current.keys()].filter(f=>!p.current.get(f)[1]);if(!(!p.started||r.length===0)){var a=r.filter(f=>!this.current.has(f));if(a.length===0)e&&p.discard();else if(t.length>0){if(e)for(const f of this.#h)p.unskip_effect(f,v=>{(v.f&(ti|na))!==0?p.schedule(v):p.#v([v])});p.activate();var o=new Set,s=new Map;for(var l of t)Bd(l,a,o,s);s=new Map;var u=[...p.current].filter(([f,v])=>{const g=this.current.get(f);return g?g[0]!==v[0]||g[1]!==v[1]:!0}).map(([f])=>f);if(u.length>0)for(const f of this.#a)(f.f&(ln|yn|js))===0&&zl(f,u,s)&&((f.f&(na|ti))!==0?(Ht(f,Pt),p.schedule(f)):p.add_dirty_reaction(f,Pt));if(p.#i.length>0&&!p.#c){p.apply();for(var d of p.#u())p.#x(d,[],[])}p.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let i=this.#s.get(t)??0;this.#s.set(t,i+1)}}decrement(e,t){if(this.#e-=1,e){let i=this.#s.get(t)??0;i===1?this.#s.delete(t):this.#s.set(t,i-1)}this.#c||(this.#c=!0,Ii(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,i]of e)this.add_dirty_reaction(t,i);e.clear()}add_dirty_reaction(e,t){(t===Pt||this.#r.get(e)!==Pt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=yd()).promise}static ensure(){if(ut===null){const e=ut=new nr;!yo&&!za&&Ii(()=>{e.started||e.flush()})}return ut}apply(){{ni=null;return}}schedule(e){if(hl=e,e.b?.is_pending&&(e.f&(la|oo|Md))!==0&&(e.f&_a)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?bo=t:e.next=t,t===null?Pr=e:t.prev=e,this.linked=!1}}}function cp(n){var e=za,t=ia;ia=null,za=!0;try{for(var i;;){if(ep(),ut===null)return i;ut.flush()}}finally{za=e,ia=t}}function up(){try{Yh()}catch(n){fi(n,hl)}}let Li=null;function vc(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(ln|yn))===0&&rs(i)&&(Li=new Set,fa(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&Qd(i),Li?.size>0)){mi.clear();for(const r of Li){if((r.f&(ln|yn))!==0)continue;const a=[r];let o=r.parent;for(;o!==null;)Li.has(o)&&(Li.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const l=a[s];(l.f&(ln|yn))===0&&fa(l)}}Li.clear()}}Li=null}}function Bd(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const a=r.f;(a&pn)!==0?Bd(r,e,t,i):(a&(na|ti))!==0&&(a&Pt)===0&&zl(r,e,i)&&(Ht(r,Pt),Gl(r))}}function zl(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Wa.call(e,r))return!0;if((r.f&pn)!==0&&zl(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Gl(n){ut.schedule(n)}function zd(n,e){if(!((n.f&si)!==0&&(n.f&$t)!==0)){(n.f&Pt)!==0?e.d.push(n):(n.f&Un)!==0&&e.m.push(n),Ht(n,$t);for(var t=n.first;t!==null;)zd(t,e),t=t.next}}function Gd(n){Ht(n,$t);for(var e=n.first;e!==null;)Gd(e),e=e.next}let qs=new Set;const mi=new Map;let Hd=!1;function wr(n,e){var t={f:0,v:n,reactions:null,equals:Rd,rv:0,wv:0};return t}function fe(n,e){const t=wr(n);return tf(t),t}function dp(n,e=!1,t=!0){const i=wr(n);return e||(i.equals=Cd),i}function x(n,e,t=!1){gt!==null&&(!ii||(gt.f&js)!==0)&&Ld()&&(gt.f&(pn|ti|na|js))!==0&&(vi===null||!vi.has(n))&&Jh();let i=t?Rt(e):e;return da(n,i,Gs)}var hr=null,pl=0;function da(n,e,t=null){if(!n.equals(e)){Bi?mi.set(n,e):mi.has(n)||mi.set(n,n.v);var i=nr.ensure();if(i.capture(n,e),(n.f&pn)!==0){const r=n;(n.f&Pt)!==0&&Bl(r),ni===null&&kl(r)}n.wv=rf(),hr=null,pl=0,Vd(n,Pt,t),hr=null,St!==null&&(St.f&$t)!==0&&(St.f&(si|tr))===0&&(Gn===null?Mp([n]):Gn.push(n)),!i.is_fork&&qs.size>0&&!Hd&&fp()}return e}function fp(){Hd=!1;for(const n of qs){(n.f&$t)!==0&&Ht(n,Un);let e;try{e=rs(n)}catch{e=!0}e&&fa(n)}qs.clear()}function Ha(n){x(n,n.v+1)}function Vd(n,e,t){var i=n.reactions;if(i!==null){var r=i.length;if(pl+=r,pl>1e5&&hr===null&&(hr=new Set),hr!==null){if(hr.has(n))return;hr.add(n)}for(var a=0;a<r;a++){var o=i[a],s=o.f,l=(s&Pt)===0;if(l&&Ht(o,e),(s&js)!==0)qs.add(o);else if((s&pn)!==0){var u=o;ni?.delete(u),Vd(u,Un,t)}else if(l){var d=o;(s&ti)!==0&&Li!==null&&Li.add(d),t!==null?t.push(d):Gl(d)}}}}function Rt(n){if(typeof n!="object"||n===null||_r in n||Ed in n)return n;const e=bd(n);if(e!==_h&&e!==xh)return n;var t=new Map,i=ao(n),r=fe(0),a=br,o=s=>{if(br===a)return s();var l=gt,u=br;Yn(null),bc(a);var d=s();return Yn(l),bc(u),d};return i&&t.set("length",fe(n.length)),new Proxy(n,{defineProperty(s,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Kh();var d=t.get(l);return d===void 0?o(()=>{var p=fe(u.value);return t.set(l,p),p}):x(d,u.value,!0),!0},deleteProperty(s,l){var u=t.get(l);if(u===void 0){if(l in s){const d=o(()=>fe(Qt));t.set(l,d),Ha(r)}}else x(u,Qt),Ha(r);return!0},get(s,l,u){if(l===_r)return n;var d=t.get(l),p=l in s;if(d===void 0&&(!p||ta(s,l)?.writable)&&(d=o(()=>{var v=Rt(p?s[l]:Qt),g=fe(v);return g}),t.set(l,d)),d!==void 0){var f=c(d);return f===Qt?void 0:f}return Reflect.get(s,l,u)},getOwnPropertyDescriptor(s,l){this.has?.(s,l);var u=Reflect.getOwnPropertyDescriptor(s,l),d=t.get(l);if(d!==void 0){var p=c(d);if(p===Qt)return;if(u&&"value"in u)u.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return u},has(s,l){if(l===_r)return!0;var u=t.get(l),d=u!==void 0&&u.v!==Qt||Reflect.has(s,l);if(u!==void 0||(St!==null||gt!==null)&&(!d||ta(s,l)?.writable)){u===void 0&&(u=o(()=>{var f=d?Rt(s[l]):Qt,v=fe(f);return v}),t.set(l,u));var p=c(u);if(p===Qt)return!1}return d},set(s,l,u,d){var p=t.get(l),f=l in s;if(i&&l==="length")for(var v=u;v<p.v;v+=1){var g=t.get(v+"");g!==void 0?x(g,Qt):v in s&&(g=o(()=>fe(Qt)),t.set(v+"",g))}if(p===void 0)(!f||ta(s,l)?.writable)&&(p=o(()=>fe(void 0)),x(p,Rt(u)),t.set(l,p));else{f=p.v!==Qt;var b=o(()=>Rt(u));x(p,b)}var m=Reflect.getOwnPropertyDescriptor(s,l);if(m?.set&&m.set.call(d,u),!f){if(i&&typeof l=="string"){var h=t.get("length"),M=Number(l);Number.isInteger(M)&&M>=h.v&&x(h,M+1)}Ha(r)}return!0},ownKeys(s){c(r);var l=Reflect.ownKeys(s).filter(p=>{var f=t.get(p);return f===void 0||f.v!==Qt});for(var[u,d]of t)d.v!==Qt&&!(u in s)&&l.push(u);return l},setPrototypeOf(){Zh()}})}function gc(n){try{if(n!==null&&typeof n=="object"&&_r in n)return n[_r]}catch{}return n}function Wd(n,e){return Object.is(gc(n),gc(e))}var _c,jd,Xd,Yd;function hp(){if(_c===void 0){_c=window,jd=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Xd=ta(e,"firstChild").get,Yd=ta(e,"nextSibling").get,hc(n)&&(n[ul]=void 0,n[wd]=null,n[dl]=void 0,n.__e=void 0),hc(t)&&(t[fl]=void 0)}}function Oi(n=""){return document.createTextNode(n)}function Ya(n){return Xd.call(n)}function is(n){return Yd.call(n)}function U(n,e){return Ya(n)}function xt(n,e=!1){{var t=Ya(n);return t instanceof Comment&&t.data===""?is(t):t}}function ue(n,e=!1){return Ya(n)}function T(n,e=1,t=!1){let i=n;for(;e--;)i=is(i);return i}function pp(n){n.textContent=""}function qd(){return!1}function mp(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function vp(n){var e=St;if(e===null)return gt.f|=Ji,n;if((e.f&_a)===0&&(e.f&la)===0)throw n;fi(n,e)}function fi(n,e){if(n===Ad)throw n;if(!(e!==null&&(e.f&ln)!==0)){for(;e!==null;){if((e.f&cl)!==0&&(e.f&(ln|ja))===0){if((e.f&_a)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function gp(n){St===null&&(gt===null&&Xh(),jh()),Bi&&Wh()}function _p(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Hi(n,e){var t=St;t!==null&&(t.f&yn)!==0&&(n|=yn);var i={ctx:cn,deps:null,nodes:null,f:n|Pt|ri,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};ut?.register_created_effect(i);var r=i;if((n&la)!==0)Ga!==null?Ga.push(i):nr.ensure().schedule(i);else if(e!==null){try{fa(i)}catch(o){throw Tn(i),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&xa)===0&&(r=r.first,(n&ti)!==0&&(n&ca)!==0&&r!==null&&(r.f|=ca))}if(r!==null&&(r.parent=t,t!==null&&_p(r,t),gt!==null&&(gt.f&pn)!==0&&(n&tr)===0)){var a=gt;(a.effects??=[]).push(r)}return i}function Hl(){return gt!==null&&!ii}function Vl(n){const e=Hi(oo,null);return Ht(e,$t),e.teardown=n,e}function an(n){gp();var e=St.f,t=!gt&&(e&si)!==0&&cn!==null&&!cn.i;if(t){var i=cn;(i.e??=[]).push(n)}else return Kd(n)}function Kd(n){return Hi(la|Mh,n)}function xp(n){nr.ensure();const e=Hi(tr|xa,n);return(t={})=>new Promise(i=>{t.outro?xr(e,()=>{Tn(e),i(void 0)}):(Tn(e),i(void 0))})}function Zd(n){return Hi(la,n)}function bp(n){return Hi(na|xa,n)}function Wl(n,e=0){return Hi(oo|e,n)}function Me(n,e=[],t=[],i=[]){ip(i,e,t,r=>{Hi(oo,()=>{n(...r.map(c))})})}function lo(n,e=0){var t=Hi(ti|e,n);return t}function Hn(n){return Hi(si|xa,n)}function Jd(n){var e=n.teardown;if(e!==null){const t=Bi,i=gt;xc(!0),Yn(null);try{e.call(null)}catch(r){fi(r,n.parent)}finally{xc(t),Yn(i)}}}function jl(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&ba(()=>{r.abort(ns)});var i=t.next;(t.f&tr)!==0?t.parent=null:Tn(t,e),t=i}}function yp(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&si)===0&&Tn(e),e=t}}function Tn(n,e=!0){var t=!1;(e||(n.f&Sh)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Sp(n.nodes.start,n.nodes.end),t=!0),n.f|=ja,jl(n,e&&!t),qa(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)a.stop();Jd(n),n.f^=ja,n.f|=ln;var r=n.parent;r!==null&&r.first!==null&&Qd(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Sp(n,e){for(;n!==null;){var t=n===e?null:is(n);n.remove(),n=t}}function Qd(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function xr(n,e,t=!0){var i=[];n.f|=Ol,$d(n,i,!0);var r=()=>{t&&Tn(n),e&&e()},a=i.length;if(a>0){var o=()=>--a||r();for(var s of i)s.out(o)}else r()}function $d(n,e,t){if((n.f&yn)===0){n.f^=yn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&e.push(s);for(var r=n.first;r!==null;){var a=r.next;if((r.f&tr)===0){var o=(r.f&ca)!==0||(r.f&si)!==0&&(n.f&ti)!==0;$d(r,e,o?t:!1)}r=a}}}function Ks(n){n.f&=~Ol,ef(n,!0)}function ef(n,e){if((n.f&Ol)===0&&(n.f&yn)!==0){n.f^=yn,(n.f&$t)===0&&(Ht(n,Pt),nr.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&ca)!==0||(t.f&si)!==0;ef(t,r?e:!1),t=i}var a=n.nodes&&n.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function Xl(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:is(t);e.append(t),t=r}}let Bi=!1;function xc(n){Bi=n}let gt=null,ii=!1;function Yn(n){gt=n}let St=null;function _i(n){St=n}let vi=null;function tf(n){gt!==null&&((gt.f&Xs)!==0||(gt.f&pn)!==0)&&(vi??=new Set).add(n)}let wn=null,Dn=0,Gn=null;function Mp(n){Gn=n}let nf=1,vr=0,br=vr;function bc(n){br=n}function rf(){return++nf}function rs(n){var e=n.f;if((e&Pt)!==0)return!0;if((e&Un)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var a=t[r];if(rs(a)&&Fd(a),a.wv>n.wv)return!0}(e&ri)!==0&&ni===null&&Ht(n,$t)}return!1}function af(n,e,t=!0){var i=n.reactions;if(i!==null&&!(vi!==null&&vi.has(n)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&pn)!==0?af(a,e,!1):e===a&&(t?Ht(a,Pt):(a.f&$t)!==0&&Ht(a,Un),Gl(a))}}function sf(n){var e=wn,t=Dn,i=Gn,r=gt,a=vi,o=cn,s=ii,l=br,u=n.f;wn=null,Dn=0,Gn=null,gt=(u&(si|tr))===0?n:null,vi=null,ua(n.ctx),ii=!1,br=++vr,n.ac!==null&&(ba(()=>{n.ac.abort(ns)}),n.ac=null);try{n.f|=Xs;var d=n.fn,p=d();n.f|=_a;var f=yc(n);if(Ld()&&Gn!==null&&!ii&&f!==null&&(n.f&(pn|Un|Pt))===0)for(var v=0;v<Gn.length;v++)af(Gn[v],n);if(r!==null&&r!==n){if(vr++,r.deps!==null)for(let g=0;g<t;g+=1)r.deps[g].rv=vr;if(e!==null)for(const g of e)g.rv=vr;Gn!==null&&(i===null?i=Gn:i.push(...Gn))}return(n.f&Ji)!==0&&(n.f^=Ji),p}catch(g){return yc(n),vp(g)}finally{n.f^=Xs,wn=e,Dn=t,Gn=i,gt=r,vi=a,ua(o),ii=s,br=l}}function yc(n){var e=n.deps,t=ut?.is_fork;if(wn!==null){var i;if(t||qa(n,Dn),e!==null&&Dn>0)for(e.length=Dn+wn.length,i=0;i<wn.length;i++)e[Dn+i]=wn[i];else n.deps=e=wn;if(Hl()&&(n.f&ri)!==0)for(i=Dn;i<e.length;i++)(e[i].reactions??=[]).push(n)}else!t&&e!==null&&Dn<e.length&&(qa(n,Dn),e.length=Dn);return e}function Ep(n,e){let t=e.reactions;if(t!==null){var i=vh.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&pn)!==0&&(wn===null||!Wa.call(wn,e))){var a=e;(a.f&ri)!==0&&(a.f^=ri),a.v!==Qt&&kl(a),a.ac!==null&&ba(()=>{a.ac.abort(ns),a.ac=null,Ht(a,Pt)}),op(a),qa(a,0)}}function qa(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Ep(n,t[i])}function fa(n){var e=n.f;if((e&ln)===0){Ht(n,$t);var t=St;St=n;try{(e&(ti|Md))!==0?yp(n):jl(n),Jd(n);var i=sf(n);n.teardown=typeof i=="function"?i:null,n.wv=nf;var r;_d&&$h&&(n.f&Pt)!==0&&n.deps}finally{St=t}}}async function wp(){await Promise.resolve(),cp()}function c(n){var e=n.f,t=(e&pn)!==0;if(gt!==null&&!ii){var i=St!==null&&(St.f&ln)!==0;if(!i&&(vi===null||!vi.has(n))){var r=gt.deps;if((gt.f&Xs)!==0)n.rv<vr&&(n.rv=vr,wn===null&&r!==null&&r[Dn]===n?Dn++:wn===null?wn=[n]:wn.push(n));else{gt.deps??=[],Wa.call(gt.deps,n)||gt.deps.push(n);var a=n.reactions;a===null?n.reactions=[gt]:Wa.call(a,gt)||a.push(gt)}}}if(Bi&&mi.has(n))return mi.get(n);if(t){var o=n;if(Bi){var s=o.v;return((o.f&$t)===0&&o.reactions!==null||lf(o))&&(s=Bl(o)),mi.set(o,s),s}var l=(o.f&ri)===0&&!ii&&gt!==null&&(gt.f&ri)!==0,u=(o.f&_a)===0;rs(o)&&(l&&(o.f|=ri),Fd(o)),l&&!u&&(kd(o),of(o))}if(ni?.has(n))return ni.get(n);if((n.f&Ji)!==0)throw n.v;return n.v}function of(n){if(n.f|=ri,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:Wa.call(e,n)||e.push(n),(t.f&pn)!==0&&(t.f&ri)===0&&(kd(t),of(t))}}function lf(n){if(n.v===Qt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(mi.has(e)||(e.f&pn)!==0&&lf(e))return!0;return!1}function ya(n){var e=ii;try{return ii=!0,n()}finally{ii=e}}const Tp=["touchstart","touchmove"];function Ap(n){return Tp.includes(n)}const Na=Symbol("events"),cf=new Set,ml=new Set;function Rp(n,e,t,i={}){function r(a){if(i.capture||vl.call(e,a),!a.cancelBubble)return ba(()=>t?.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(r.__removed=!1,Ii(()=>{r.__removed||e.addEventListener(n,r,i)})):e.addEventListener(n,r,i),r}function gi(n,e,t,i,r){var a={capture:i,passive:r},o=Rp(n,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Vl(()=>{o.__removed=!0,e.removeEventListener(n,o,a)})}function oe(n,e,t){(e[Na]??={})[n]=t}function mn(n){for(var e=0;e<n.length;e++)cf.add(n[e]);for(var t of ml)t(n)}let So=null,Mo=!1;function vl(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],a=r[0]||n.target;So=n,Mo||(Mo=!0,setTimeout(()=>{Mo=!1,So=null}));var o=0,s=So===n&&n[Na];if(s){var l=r.indexOf(s);if(l!==-1&&(e===document||e===window)){n[Na]=e;return}var u=r.indexOf(e);if(u===-1)return;l<=u&&(o=l)}if(a=r[o]||n.target,a!==e){xd(n,"currentTarget",{configurable:!0,get(){return a||t}});var d=gt,p=St;Yn(null),_i(null);try{for(var f,v=[];a!==null&&a!==e;){try{var g=a[Na]?.[i];g!=null&&(!a.disabled||n.target===a)&&g.call(a,n)}catch(b){f?v.push(b):f=b}if(n.cancelBubble)break;o++,a=o<r.length?r[o]:null}if(f){for(let b of v)queueMicrotask(()=>{throw b});throw f}}finally{n[Na]=e,delete n.currentTarget,Yn(d),_i(p)}}}const Cp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function Pp(n){return Cp?.createHTML(n)??n}function Lp(n){var e=mp("template");return e.innerHTML=Pp(n.replaceAll("<!>","<!---->")),e.content}function Zs(n,e){var t=St;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function re(n,e){var t=(e&Nh)!==0,i=(e&Oh)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=Lp(a?n:"<!>"+n),t||(r=Ya(r)));var o=i||jd?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=Ya(o),l=o.lastChild;Zs(s,l)}else Zs(o,o);return o}}function dr(n=""){{var e=Oi(n+"");return Zs(e,e),e}}function Js(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Oi();return n.append(e,t),Zs(e,t),n}function Y(n,e){n!==null&&n.before(e)}function Dp(n){let e=0,t=wr(0),i;return()=>{Hl()&&(c(t),Wl(()=>(e===0&&(i=ya(()=>n(()=>Ha(t)))),e+=1,()=>{Ii(()=>{e-=1,e===0&&(i?.(),i=void 0,Ha(t))})})))}}var Ip=ca|xa;function Up(n,e,t,i){new Np(n,e,t,i)}class Np{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#u=null;#m=Dp(()=>(this.#u=wr(this.#h),()=>{this.#u=null}));constructor(e,t,i,r){this.#t=e,this.#e=t,this.#s=a=>{var o=St;o.b=this,o.f|=cl,i(a)},this.parent=St.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=lo(()=>{this.#b()},Ip)}#x(){try{this.#i=Hn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#S(e){const t=this.#e.failed,{reset:i,invoke_onerror:r}=this.#_(e);Ii(r),t&&(this.#r=Hn(()=>{t(this.#t,()=>e,()=>i)}))}#_(e){var t=!1,i=!1;const r=()=>{if(!this.#d()){if(t){zh();return}t=!0,i&&Qh(),this.#r!==null&&xr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{i=!0,this.#e.onerror?.(e,r),i=!1}catch(o){fi(o,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(ln|ja))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=Hn(()=>e(this.#t)),Ii(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),i=Oi(),r=!1;if(t.append(i),this.#i=this.#y(()=>{try{return Hn(()=>this.#s(i))}catch(a){try{this.error(a),r=!0}catch(o){fi(o,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(ut);return}this.#c===0&&(this.#t.before(t),this.#o=null,xr(this.#a,()=>{this.#a=null}),this.#f(ut))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=Hn(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();Xl(this.#i,e);const t=this.#e.pending;this.#a=Hn(()=>t(this.#t))}else this.#f(ut)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){Id(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=St,i=gt,r=cn;_i(this.#n),Yn(this.#n),ua(this.#n.ctx);try{return nr.ensure(),e()}finally{_i(t),Yn(i),ua(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&xr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Ii(()=>{this.#p=!1,this.#u&&da(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),c(this.#u)}error(e){if(e===Ad||!this.#e.onerror&&!this.#e.failed)throw e;ut?.is_fork?(this.#i&&ut.skip_effect(this.#i),this.#a&&ut.skip_effect(this.#a),this.#r&&ut.skip_effect(this.#r),ut.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(Tn(this.#i),this.#i=null),this.#a&&(Tn(this.#a),this.#a=null),this.#r&&(Tn(this.#r),this.#r=null);let t=this.#e.failed;const i=r=>{if(this.#d())return;const{reset:a,invoke_onerror:o}=this.#_(r);o(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return Hn(()=>{var s=St;s.b=this,s.f|=cl,t(this.#t,()=>r,()=>a)})}catch(s){return fi(s,this.#n.parent),null}}))};Ii(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){fi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>fi(a,this.#n&&this.#n.parent)):i(r)}})}}function he(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[fl]??=n.nodeValue)&&(n[fl]=t,n.nodeValue=`${t}`)}function Op(n,e){return Fp(n,e)}const us=new Map;function Fp(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:o=!0,transformError:s}){hp();var l=void 0,u=xp(()=>{var d=t??e.appendChild(Oi());Up(d,{pending:()=>{}},v=>{qt({});var g=cn;a&&(g.c=a),r&&(i.$$events=r),l=n(v,i)||Fl(),Kt()},s);var p=new Set,f=v=>{for(var g=0;g<v.length;g++){var b=v[g];if(!p.has(b)){p.add(b);var m=Ap(b);for(const _ of[e,document]){var h=us.get(_);h===void 0&&(h=new Map,us.set(_,h));var M=h.get(b);M===void 0?(_.addEventListener(b,vl,{passive:m}),h.set(b,1)):h.set(b,M+1)}}}};return f(so(cf)),ml.add(f),()=>{for(var v of p)for(const m of[e,document]){var g=us.get(m),b=g.get(v);--b==0?(m.removeEventListener(v,vl),g.delete(v),g.size===0&&us.delete(m)):g.set(v,b)}ml.delete(f),d!==t&&d.parentNode?.removeChild(d)}});return kp.set(l,u),l}let kp=new WeakMap;class uf{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),i=this.#l.get(t);if(i)Ks(i),this.#s.delete(t);else{var r=this.#e.get(t);r&&(Ks(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,o]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(o);s&&(Tn(s.effect),this.#e.delete(o))}for(const[a,o]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var u=document.createDocumentFragment();Xl(o,u),u.append(Oi()),this.#e.set(a,{effect:o,fragment:u})}else Tn(o);this.#s.delete(a),this.#l.delete(a)};this.#n||!i?(this.#s.add(a),xr(o,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,r]of this.#e)t.includes(i)||(Tn(r.effect),this.#e.delete(i))};ensure(e,t){var i=ut,r=qd();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),o=Oi();a.append(o),this.#e.set(e,{effect:Hn(()=>t(o)),fragment:a})}else this.#l.set(e,Hn(()=>t(this.anchor)));if(this.#t.set(i,e),r){for(const[s,l]of this.#l)s===e?i.unskip_effect(l):i.skip_effect(l);for(const[s,l]of this.#e)s===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#i),i.ondiscard(this.#a)}else this.#i(i)}}function Ve(n,e,t=!1){var i=new uf(n),r=t?ca:0;function a(o,s){i.ensure(o,s)}lo(()=>{var o=!1;e((s,l=0)=>{o=!0,a(l,s)}),o||a(-1,null)},r)}const Bp=Symbol("NaN");function df(n,e,t){var i=new uf(n);lo(()=>{var r=e();r!==r&&(r=Bp),i.ensure(r,t)})}function gl(n,e){return e}function zp(n,e,t){for(var i=[],r=e.length,a,o=e.length,s=0;s<r;s++){let p=e[s];xr(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var f=n.outrogroups;_l(n,so(a.done)),f.delete(a),f.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&t!==null&&n.pending.size===0;if(l){var u=t,d=u.parentNode;pp(d),d.append(u),n.items.clear()}_l(n,e,!l)}else a={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(a)}function _l(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const s of o)i.add(n.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(i?.has(a)){a.f|=hi;const o=document.createDocumentFragment();Xl(a,o)}else Tn(e[r],t)}}var Sc;function wt(n,e,t,i,r,a=null){var o=n,s=new Map,l=(e&Td)!==0;if(l){var u=n;o=u.appendChild(Oi())}var d=null,p=Od(()=>{var M=t();return ao(M)?M:M==null?[]:so(M)}),f=new Map,v=!0;function g(M){if((h.effect.f&ln)===0){h.pending.delete(M);var _=c(p);h.fallback=d,Gp(h,_,o,e,i),d!==null&&(_.length===0?(d.f&hi)===0?Ks(d):(d.f^=hi,Oa(d,null,o)):xr(d,()=>{d=null}))}}function b(M){h.pending.delete(M)}var m=lo(()=>{for(var M=c(p),_=M.length,E=new Set,C=ut,D=qd(),A=0;A<_;A+=1){var k=M[A],y=i(k,A),w=v?null:s.get(y);w?(w.v&&da(w.v,k),w.i&&da(w.i,A),D&&C.unskip_effect(w.e)):(w=Hp(s,v?o:Sc??=Oi(),k,y,A,r,e,t),v||(w.e.f|=hi),s.set(y,w)),E.add(y)}if(_===0&&a&&!d&&(v?d=Hn(()=>a(o)):(d=Hn(()=>a(Sc??=Oi())),d.f|=hi)),_>E.size&&Vh(),!v)if(f.set(C,E),D){for(const[ie,V]of s)E.has(ie)||C.skip_effect(V.e);C.oncommit(g),C.ondiscard(b)}else g(C);c(p)}),h={effect:m,items:s,pending:f,outrogroups:null,fallback:d};v=!1}function wa(n){for(;n!==null&&(n.f&si)===0;)n=n.next;return n}function Gp(n,e,t,i,r){var a=(i&Ch)!==0,o=e.length,s=n.items,l=wa(n.effect.first),u,d=null,p,f=[],v=[],g,b,m,h;if(a)for(h=0;h<o;h+=1)g=e[h],b=r(g,h),m=s.get(b).e,(m.f&hi)===0&&(m.nodes?.a?.measure(),(p??=new Set).add(m));for(h=0;h<o;h+=1){if(g=e[h],b=r(g,h),m=s.get(b).e,n.outrogroups!==null)for(const w of n.outrogroups)w.pending.delete(m),w.done.delete(m);if((m.f&yn)!==0&&(Ks(m),a&&(m.nodes?.a?.unfix(),(p??=new Set).delete(m))),(m.f&hi)!==0)if(m.f^=hi,m===l)Oa(m,null,t);else{var M=d?d.next:l;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Wi(n,d,m),Wi(n,m,M),Oa(m,M,t),d=m,f=[],v=[],l=wa(d.next);continue}if(m!==l){if(u!==void 0&&u.has(m)){if(f.length<v.length){var _=v[0],E;d=_.prev;var C=f[0],D=f[f.length-1];for(E=0;E<f.length;E+=1)Oa(f[E],_,t);for(E=0;E<v.length;E+=1)u.delete(v[E]);Wi(n,C.prev,D.next),Wi(n,d,C),Wi(n,D,_),l=_,d=D,h-=1,f=[],v=[]}else u.delete(m),Oa(m,l,t),Wi(n,m.prev,m.next),Wi(n,m,d===null?n.effect.first:d.next),Wi(n,d,m),d=m;continue}for(f=[],v=[];l!==null&&l!==m;)(u??=new Set).add(l),v.push(l),l=wa(l.next);if(l===null)continue}(m.f&hi)===0&&f.push(m),d=m,l=wa(m.next)}if(n.outrogroups!==null){for(const w of n.outrogroups)w.pending.size===0&&(_l(n,so(w.done)),n.outrogroups?.delete(w));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||u!==void 0){var A=[];if(u!==void 0)for(m of u)(m.f&yn)===0&&A.push(m);for(;l!==null;)(l.f&yn)===0&&l!==n.fallback&&A.push(l),l=wa(l.next);var k=A.length;if(k>0){var y=(i&Td)!==0&&o===0?t:null;if(a){for(h=0;h<k;h+=1)A[h].nodes?.a?.measure();for(h=0;h<k;h+=1)A[h].nodes?.a?.fix()}zp(n,A,y)}}a&&Ii(()=>{if(p!==void 0)for(m of p)m.nodes?.a?.apply()})}function Hp(n,e,t,i,r,a,o,s){var l=(o&Ah)!==0?(o&Ph)===0?dp(t,!1,!1):wr(t):null,u=(o&Rh)!==0?wr(r):null;return{v:l,i:u,e:Hn(()=>(a(e,l??t,u??r,s),()=>{n.delete(i)}))}}function Oa(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,a=e&&(e.f&hi)===0?e.nodes.start:t;i!==null;){var o=is(i);if(a.before(i),i===r)return;i=o}}function Wi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const Mc=[...` 	
\r\f \v\uFEFF`];function Vp(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,o=0;(o=i.indexOf(r,o))>=0;){var s=o+a;(o===0||Mc.includes(i[o-1]))&&(s===i.length||Mc.includes(i[s]))?i=(o===0?"":i.substring(0,o))+i.substring(s+1):o=s}}return i===""?null:i}function Wp(n,e){return n==null?null:String(n)}function _t(n,e,t,i,r,a){var o=n[ul];if(o!==t||o===void 0){var s=Vp(t,i,a);s==null?n.removeAttribute("class"):n.className=s,n[ul]=t}else if(a&&r!==a)for(var l in a){var u=!!a[l];(r==null||u!==!!r[l])&&n.classList.toggle(l,u)}return a}function xn(n,e,t,i){var r=n[dl];if(r!==e){var a=Wp(e);a==null?n.removeAttribute("style"):n.style.cssText=a,n[dl]=e}return i}function jp(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function Xp(n,e){var t=n.__defaultValue,i=n.multiple,r=i?t??[]:null;if(!(i&&!ao(r))){n.selectedIndex;for(var a of n.options){var o=ra(a);jp(a,i?r.includes(o):Wd(o,t))}}}function ff(n,e,t=!1){if(n.multiple){if(e==null)return;if(!ao(e))return Bh();for(var i of n.options)i.selected=e.includes(ra(i));return}for(i of n.options){var r=ra(i);if(Wd(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Qs(n){var e=new MutationObserver(t=>{t.every(Yp)||("__defaultValue"in n&&Xp(n),"__value"in n&&ff(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Vl(()=>{e.disconnect()})}function $s(n,e,t=e){var i=new WeakSet,r=!0;Ud(n,"change",a=>{var o=a?"[selected]":":checked",s;if(n.multiple)s=[].map.call(n.querySelectorAll(o),ra);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");s=l&&ra(l)}t(s),n.__value=s,ut!==null&&i.add(ut)}),Zd(()=>{var a=e();if(n===document.activeElement){var o=ut;if(i.has(o))return}if(ff(n,a,r),r&&a===void 0){var s=n.querySelector(":checked");s!==null&&(a=ra(s),t(a))}n.__value=a,r=!1})}function ra(n){return"__value"in n?n.__value:n.value}function Yp(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const qp=Symbol("is custom element"),Kp=Symbol("is html"),Zp=Th?"progress":"PROGRESS";function Ka(n,e){var t=Yl(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==Zp)||(n.value=e??"")}function Ec(n,e){var t=Yl(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function Xe(n,e,t,i){var r=Yl(n),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(n[wh]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Jp(n).has(e)?n[e]=t:n.setAttribute(e,t))}function Yl(n){return n[wd]??={[qp]:n.nodeName.includes("-"),[Kp]:n.namespaceURI===Fh}}var wc=new Map;function Jp(n){var e=n.getAttribute("is")||n.nodeName,t=wc.get(e);if(t)return t;wc.set(e,t=new Set);for(var i,r=n,a=Element.prototype;a!==r;){i=gh(r);for(var o in i)i[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.add(o);r=bd(r)}return t}function kt(n,e,t=e){var i=new WeakSet;Ud(n,"input",async r=>{var a=r?n.defaultValue:n.value;if(a=Eo(n)?wo(a):a,t(a),ut!==null&&i.add(ut),await wp(),a!==(a=e())){var o=n.selectionStart,s=n.selectionEnd,l=n.value.length;if(n.value=a??"",s!==null){var u=n.value.length;o===s&&s===l&&u>l?(n.selectionStart=u,n.selectionEnd=u):(n.selectionStart=o,n.selectionEnd=Math.min(s,u))}}}),ya(e)==null&&n.value&&(t(Eo(n)?wo(n.value):n.value),ut!==null&&i.add(ut)),Wl(()=>{var r=e();if(n===document.activeElement){var a=ut;if(i.has(a))return}Eo(n)&&r===wo(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function Eo(n){var e=n.type;return e==="number"||e==="range"}function wo(n){return n===""?null:+n}function To(n,e){return n===e||n?.[_r]===e}function hf(n=Fl(),e,t,i){var r=cn.r,a=St;return Zd(()=>{var o,s;return Wl(()=>{o=s,s=[],ya(()=>{To(t(...s),n)||(e(n,...s),o&&To(t(...o),n)&&e(null,...o))})}),()=>{let l=a;for(;l!==r&&l.parent!==null&&l.parent.f&ja;)l=l.parent;const u=()=>{s&&To(t(...s),n)&&e(null,...s)},d=l.teardown;l.teardown=()=>{u(),d?.()}}}),n}let ds=!1;function Qp(n){var e=ds;try{return ds=!1,[n(),ds]}finally{ds=e}}function et(n,e,t,i){var r=!0,a=(t&Ih)!==0,o=(t&Uh)!==0,s=i,l=!0,u=void 0,d=()=>o&&r?(u??=Xa(i),c(u)):(l&&(l=!1,s=o?ya(i):i),s);let p;if(a){var f=_r in n||Eh in n;p=ta(n,e)?.set??(f&&e in n?E=>n[e]=E:void 0)}var v,g=!1;a?[v,g]=Qp(()=>n[e]):v=n[e],v===void 0&&i!==void 0&&(v=d(),p&&(qh(),p(v)));var b;if(b=()=>{var E=n[e];return E===void 0?d():(l=!0,E)},(t&Dh)===0)return b;if(p){var m=n.$$legacy;return(function(E,C){return arguments.length>0?((!C||m||g)&&p(C?b():E),E):b()})}var h=!1,M=((t&Lh)!==0?Xa:Od)(()=>(h=!1,b()));a&&c(M);var _=St;return(function(E,C){if(arguments.length>0){const D=C?c(M):a?Rt(E):E;return x(M,D),h=!0,s!==void 0&&(s=D),E}return Bi&&h||(_.f&ln)!==0?M.v:c(M)})}function ir(n){cn===null&&Pd(),an(()=>{const e=ya(n);if(typeof e=="function")return e})}function ql(n){cn===null&&Pd(),ir(()=>()=>ya(n))}const $p="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add($p);function em(n){const e=[];for(const t of String(n??"")){const i=t.codePointAt(0);if(!(i===65039||i===65038)){if(i===8205){e.push("200d");continue}e.push(i.toString(16))}}return e.join("-")}const tm=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310","23f9","2b07","1f50d"]),nm="/";function im(n){const e=em(n);return tm.has(e)?`${nm}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}var rm=re('<img draggable="false"/>'),am=re("<span> </span>");function pi(n,e){qt(e,!0);let t=et(e,"emoji",3,""),i=et(e,"size",3,null),r=et(e,"alt",3,""),a=et(e,"class",3,"");const o=lt(()=>im(t())),s=lt(()=>r()||t()),l=lt(()=>i()?`${i()}px`:"1em");var u=Js(),d=xt(u);{var p=v=>{var g=rm();Me(()=>{Xe(g,"src",c(o)),Xe(g,"alt",c(s)),Xe(g,"title",r()||void 0),_t(g,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),xn(g,`width: ${c(l)??""}; height: ${c(l)??""};`),Xe(g,"aria-hidden",r()?void 0:"true")}),Y(v,g)},f=v=>{var g=am(),b=ue(g,!0);Me(()=>{_t(g,1,`inline-block ${a()??""}`),Xe(g,"aria-hidden",r()?void 0:"true"),Xe(g,"title",r()||void 0),he(b,t())}),Y(v,g)};Ve(d,v=>{c(o)?v(p):v(f,-1)})}Y(n,u),Kt()}var sm=re('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),om=re('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function lm(n,e){qt(e,!0);let t=et(e,"selected",3,!1),i=et(e,"gameRunning",3,!1),r=et(e,"menuOpen",3,!1);const a=lt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function o(){const k=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&k?k(e.instance.icon_path):"/logo.png"}var s=om(),l=U(s),u=U(l),d=ue(u),p=T(u,2),f=U(p),v=ue(f,!0),g=T(f,2),b=U(g),m=ue(b,!0),h=T(b,2),M=ue(h,!0),_=T(p,2),E=T(l,2),C=ue(E,!0),D=T(E,2);{var A=k=>{var y=sm(),w=xt(y),ie=T(w,2),V=U(ie),N=T(V,2),G=T(N,2),H=U(G);pi(H,{emoji:"📂"});var X=T(G,2),Q=T(X,4);Me(()=>V.disabled=i()),oe("click",w,function(...te){e.onclosemenu?.apply(this,te)}),oe("click",V,()=>{e.onclosemenu(),e.onplay()}),oe("click",N,()=>{e.onclosemenu(),e.onedit()}),oe("click",G,()=>{e.onclosemenu(),e.onopenfolder()}),oe("click",X,function(...te){e.onviewlogs?.apply(this,te)}),oe("click",Q,()=>{e.onclosemenu(),e.ondelete()}),Y(k,y)};Ve(D,k=>{r()&&k(A)})}Me((k,y)=>{_t(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),Xe(s,"aria-selected",t()),Xe(s,"title",e.instance.name),Xe(d,"src",k),he(v,e.instance.name),he(m,e.instance.minecraft_version),_t(h,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${c(a)??""}`),he(M,e.instance.loader_type),he(C,y)},[()=>o(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),oe("click",s,function(...k){e.onselect?.apply(this,k)}),oe("dblclick",s,function(...k){e.onplay?.apply(this,k)}),oe("keydown",s,k=>{(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),e.onplay())}),oe("contextmenu",s,k=>{k.preventDefault(),e.onselect(),e.ontogglemenu()}),gi("error",d,k=>{k.currentTarget.dataset.f||(k.currentTarget.dataset.f="1",k.currentTarget.src="/logo.png")}),oe("click",_,k=>{k.stopPropagation(),e.ontogglemenu()}),Y(n,s),Kt()}mn(["click","dblclick","keydown","contextmenu"]);var cm=re('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),um=re('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),dm=re('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),fm=re('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function hm(n,e){qt(e,!0);var t=fm();wt(t,21,()=>e.instances,i=>i.id,(i,r)=>{{let a=lt(()=>e.selectedId===c(r).id),o=lt(()=>e.menuFor===c(r).id);lm(i,{get instance(){return c(r)},get selected(){return c(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return c(o)},onselect:()=>e.onselect?.(c(r).id),onplay:()=>e.onplay?.(c(r).id),ontogglemenu:()=>e.ontogglemenu?.(c(r).id),onedit:()=>e.onedit?.(c(r)),onopenfolder:()=>e.onopenfolder?.(c(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(c(r).id),get onclosemenu(){return e.onclosemenu}})}},i=>{var r=Js(),a=xt(r);{var o=d=>{var p=cm(),f=ue(p,!0);Me(()=>he(f,e.error)),Y(d,p)},s=d=>{var p=um(),f=ue(p);Me(v=>he(f,`No instances match "${v??""}".`),[()=>e.query.trim()]),Y(d,p)},l=lt(()=>e.query.trim()),u=d=>{var p=dm(),f=T(U(p),6);oe("click",f,()=>e.onadd?.()),Y(d,p)};Ve(a,d=>{e.error?d(o):c(l)?d(s,1):d(u,-1)})}Y(i,r)}),Y(n,t),Kt()}mn(["click"]);const Za=[];function co(n){return Za.push(n),n}function uo(n){const e=Za.lastIndexOf(n);e!==-1&&Za.splice(e,1)}function Tc(){return Za[Za.length-1]??null}var pm=re('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div>'),Ac=re('<div class="p-6 text-center text-[12px] text-(--text-muted)"> </div>'),mm=re('<span class="shrink-0 rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent)">✓ Installed</span>'),vm=re(`<button class="shrink-0 rounded bg-(--accent) px-3 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Downloads the primary jar into this instance's mods folder"> </button>`),gm=re('<div class="flex items-center gap-3 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div> <div class="truncate text-[11px] text-(--text-muted)"> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></div> <!></div>'),_m=re('<div class="flex flex-col gap-1.5"></div>'),xm=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[480px] w-[640px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><div class="min-w-0"><h3 class="text-sm font-semibold">Get more mods</h3> <p class="truncate text-[11px] text-(--text-muted)"> <!></p></div> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="border-b border-(--border) p-3"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></div></div>');function bm(n,e){qt(e,!0);let t=fe(""),i=fe(null),r=fe(!1),a=fe(""),o=fe(Rt({})),s=fe(Rt({})),l=0;const u=["fabric","quilt","forge","neoforge"],d=lt(()=>{const X=e.instance.loader_type.toLowerCase();return u.includes(X)?X:""});function p(X){return X>=1e6?`${(X/1e6).toFixed(1)}M`:X>=1e3?`${(X/1e3).toFixed(0)}K`:String(X)}function f(X){return X.icon_url||"/logo.png"}an(()=>{const X=c(t).trim(),Q=++l,te=setTimeout(()=>{x(r,!0),x(a,""),window.__TAURI__.core.invoke("search_modrinth_mods",{query:X,gameVersion:e.instance.minecraft_version,loader:c(d)}).then(me=>{Q===l&&(x(i,me,!0),x(r,!1))}).catch(me=>{Q===l&&(x(a,String(me),!0),x(r,!1))})},350);return()=>clearTimeout(te)});async function v(X){if(!(c(o)[X.project_id]||c(s)[X.project_id])){x(o,{...c(o),[X.project_id]:!0},!0);try{const Q=await window.__TAURI__.core.invoke("install_modrinth_mod",{instanceId:e.instance.id,projectId:X.project_id,gameVersion:e.instance.minecraft_version,loader:c(d)});x(s,{...c(s),[X.project_id]:Q},!0),e.oninstalled?.(X)}catch(Q){x(a,`Install failed: ${Q}`)}finally{x(o,{...c(o),[X.project_id]:!1},!0)}}}ir(()=>{const X=co(()=>e.onclose?.());return()=>uo(X)});var g=xm(),b=U(g),m=U(b),h=U(m),M=T(U(h),2),_=U(M),E=T(_);{var C=X=>{var Q=dr();Me(te=>he(Q,`· ${te??""}`),[()=>c(d)[0].toUpperCase()+c(d).slice(1)]),Y(X,Q)};Ve(E,X=>{c(d)&&X(C)})}var D=T(h,2),A=T(m,2),k=U(A),y=T(A,2),w=U(y);{var ie=X=>{var Q=pm(),te=ue(Q,!0);Me(()=>he(te,c(a))),Y(X,Q)};Ve(w,X=>{c(a)&&X(ie)})}var V=T(w,2);{var N=X=>{var Q=Ac(),te=ue(Q,!0);Me(()=>he(te,c(r)?"Searching Modrinth…":"Type to search.")),Y(X,Q)},G=X=>{var Q=Ac(),te=ue(Q);Me(me=>he(te,`No mods for MC ${e.instance.minecraft_version??""}${c(d)?` + ${c(d)}`:""} match “${me??""}”.`),[()=>c(t).trim()]),Y(X,Q)},H=X=>{var Q=_m();wt(Q,21,()=>c(i),te=>te.project_id,(te,me)=>{var ce=gm(),W=U(ce),$=T(W,2),we=U($),Le=U(we),Oe=ue(Le,!0),ze=T(Le,2),We=ue(ze),He=T(we,2),_e=ue(He,!0),Ge=T(He,2),Be=ue(Ge),z=T($,2);{var qe=O=>{var Z=mm();Me(()=>Xe(Z,"title",c(s)[c(me).project_id])),Y(O,Z)},Ie=O=>{var Z=vm(),be=ue(Z,!0);Me(()=>{Z.disabled=c(o)[c(me).project_id],he(be,c(o)[c(me).project_id]?"Installing…":"Install")}),oe("click",Z,()=>v(c(me))),Y(O,Z)};Ve(z,O=>{c(s)[c(me).project_id]?O(qe):O(Ie,-1)})}Me((O,Z,be)=>{Xe(W,"src",O),Xe(Le,"title",c(me).title),he(Oe,c(me).title),Xe(ze,"title",`${Z??""} downloads`),he(We,`⤓ ${be??""}`),Xe(He,"title",c(me).description),he(_e,c(me).description),he(Be,`by ${(c(me).author||"unknown")??""}`)},[()=>f(c(me)),()=>p(c(me).downloads),()=>p(c(me).downloads)]),gi("error",W,O=>{O.currentTarget.dataset.f||(O.currentTarget.dataset.f="1",O.currentTarget.src="/logo.png")}),Y(te,ce)}),Y(X,Q)};Ve(V,X=>{c(i)?c(i).length===0&&!c(r)?X(G,1):X(H,-1):X(N)})}Me(()=>he(_,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `)),oe("click",g,X=>{X.target===X.currentTarget&&e.onclose?.()}),oe("click",D,()=>e.onclose?.()),kt(k,()=>c(t),X=>x(t,X)),Y(n,g),Kt()}mn(["click"]);var ym=re('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Sm=re('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Mm=re('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),Rc=re('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),Ao=re('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Em=re(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),wm=re('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),Tm=re('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),Am=re('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),Rm=re('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),Cm=re('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),Pm=re('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, icon and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p></div>',1),Lm=re('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!></div>');function Dm(n,e){qt(e,!0);let t=et(e,"storage",3,null);const i=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let r=fe("mods"),a=fe(Rt([])),o=fe(!1),s=fe(""),l=fe(""),u=fe(!1),d=fe(Rt([])),p=fe(Rt([])),f=fe(!1),v=fe("");function g(..._e){return[t()?t().instances_dir.replace(/\\/g,"/"):"",e.instance.id,"minecraft",..._e].filter(Boolean).join("/")}function b(_e){const Ge=window.__TAURI__?.core?.convertFileSrc;return Ge?Ge(_e):_e}function m(_e){return _e>=1024*1024?`${(_e/1024/1024).toFixed(1)} MB`:_e>=1024?`${(_e/1024).toFixed(1)} KB`:`${_e} B`}function h(_e){return _e?new Date(_e*1e3).toLocaleString():""}function M(){const _e=c(l).trim().toLowerCase();return _e?c(a).filter(Ge=>Ge.display_name.toLowerCase().includes(_e)||Ge.filename.toLowerCase().includes(_e)):c(a)}async function _(){x(o,!0);try{x(a,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:e.instance.id}),!0),x(s,"")}catch(_e){x(s,String(_e),!0)}finally{x(o,!1)}}async function E(_e){x(o,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:e.instance.id,filename:_e.filename,enable:!_e.is_enabled}),c(s)&&x(s,"")}catch(Ge){x(s,String(Ge),!0)}finally{x(o,!1)}await _()}async function C(_e){x(o,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:e.instance.id,filename:_e.filename}),x(s,"")}catch(Ge){x(s,String(Ge),!0)}finally{x(o,!1)}await _()}async function D(){const _e=window.__TAURI__?.dialog?.open;if(!_e){x(s,"File picker unavailable in this build.");return}let Ge;try{Ge=await _e({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(z){x(s,String(z),!0);return}const Be=Ge?[].concat(Ge):[];if(Be.length){x(o,!0);try{for(const z of Be)await window.__TAURI__.core.invoke("import_mod",{instanceId:e.instance.id,jarPath:z});x(s,"")}catch(z){x(s,String(z),!0)}finally{x(o,!1)}await _()}}async function A(_e){x(f,!0);try{const Ge=await window.__TAURI__.core.invoke(_e,{instanceId:e.instance.id});x(_e==="list_screenshots"?d:p,Ge,!0),x(v,"")}catch(Ge){x(v,String(Ge),!0)}finally{x(f,!1)}}function k(_e){window.__TAURI__.core.invoke("open_path",{path:_e}).catch(Ge=>x(v,String(Ge),!0))}function y(_e){k(g("screenshots",_e))}ir(()=>{_(),A("list_screenshots"),A("list_logs")});var w=Lm(),ie=U(w),V=U(ie),N=T(V,2),G=U(N),H=ue(G,!0),X=T(G,2),Q=ue(X),te=T(N,2);wt(te,21,()=>i,_e=>_e.id,(_e,Ge)=>{var Be=ym(),z=U(Be),qe=U(z);pi(qe,{get emoji(){return c(Ge).icon},size:15});var Ie=T(z,2),O=ue(Ie,!0);Me(()=>{_t(Be,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${c(r)===c(Ge).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Xe(Be,"aria-current",c(r)===c(Ge).id?"true":void 0),he(O,c(Ge).label)}),oe("click",Be,()=>x(r,c(Ge).id,!0)),Y(_e,Be)});var me=T(ie,2),ce=U(me),W=U(ce);{var $=_e=>{var Ge=Sm(),Be=T(xt(Ge),4),z=U(Be),qe=ue(z),Ie=T(z,2),O=ue(Ie),Z=T(Ie,2),be=ue(Z);Me(Ae=>{he(qe,`Minecraft ${e.instance.minecraft_version??""}`),he(O,`Loader: ${e.instance.loader_type??""}`),he(be,`Last played: ${Ae??""}`)},[()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleString():"never"]),Y(_e,Ge)},we=_e=>{var Ge=Em(),Be=T(xt(Ge),4),z=U(Be),qe=ue(z),Ie=T(z,2),O=T(Be,2),Z=T(O,2),be=T(Z,2),Ae=U(be);wt(Ae,21,M,I=>I.filename,(I,K)=>{var ne=Mm(),xe=U(ne),Te=U(xe);let Se;var J=ue(Te,!0),P=T(Te,2),se=ue(P),ye=T(xe),Ce=ue(ye),Ne=T(ye),Qe=ue(Ne);Me(at=>{Se=_t(Te,1,"truncate",null,Se,{"opacity-50":!c(K).is_enabled}),he(J,c(K).display_name),he(se,`${c(K).filename??""} · ${at??""}`),_t(Ce,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${c(K).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),Xe(Ce,"title",c(K).is_enabled?"Disable":"Enable"),Ce.disabled=c(o),Xe(Qe,"title",`Delete ${c(K).display_name??""}`),Qe.disabled=c(o)},[()=>m(c(K).file_size)]),oe("click",Ce,()=>E(c(K))),oe("click",Qe,()=>C(c(K))),Y(I,ne)},I=>{var K=Rc(),ne=U(K),xe=U(ne);{var Te=J=>{var P=dr("Loading mods…");Y(J,P)},Se=J=>{var P=dr("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");Y(J,P)};Ve(xe,J=>{c(o)?J(Te):J(Se,-1)})}Y(I,K)});var De=T(be,2);{var de=I=>{var K=Ao(),ne=ue(K,!0);Me(()=>he(ne,c(s))),Y(I,K)};Ve(De,I=>{c(s)&&I(de)})}var Fe=T(De,2),ke=U(Fe),R=T(ke,2),S=U(R);pi(S,{emoji:"📂"}),Me(()=>{he(qe,`Installed (${c(a).length??""})`),Ie.disabled=c(o),ke.disabled=c(o),R.disabled=!t(),Xe(R,"title",t()?"Opens the instance mods folder":"Storage unknown")}),oe("click",Ie,_),kt(O,()=>c(l),I=>x(l,I)),oe("click",Z,()=>x(u,!0)),oe("click",ke,D),oe("click",R,()=>k(g("mods"))),Y(_e,Ge)},Le=_e=>{var Ge=Am(),Be=T(xt(Ge),4);wt(Be,21,()=>c(d),Z=>Z.name,(Z,be)=>{var Ae=wm(),De=U(Ae),de=T(De,2),Fe=ue(de,!0);Me((ke,R,S)=>{Xe(Ae,"title",`${c(be).name??""} · ${ke??""} · ${R??""}`),Xe(De,"src",S),Xe(De,"alt",c(be).name),Xe(de,"title",c(be).name),he(Fe,c(be).name)},[()=>m(c(be).size),()=>h(c(be).modified),()=>b(g("screenshots",c(be).name))]),oe("click",Ae,()=>y(c(be).name)),oe("keydown",Ae,ke=>{(ke.key==="Enter"||ke.key===" ")&&(ke.preventDefault(),y(c(be).name))}),Y(Z,Ae)},Z=>{var be=Tm(),Ae=U(be);{var De=Fe=>{var ke=dr("Loading screenshots…");Y(Fe,ke)},de=Fe=>{var ke=dr("No screenshots yet — press F2 in game to capture one.");Y(Fe,ke)};Ve(Ae,Fe=>{c(f)?Fe(De):Fe(de,-1)})}Y(Z,be)});var z=T(Be,2);{var qe=Z=>{var be=Ao(),Ae=ue(be,!0);Me(()=>he(Ae,c(v))),Y(Z,be)};Ve(z,Z=>{c(v)&&Z(qe)})}var Ie=T(z,2),O=U(Ie);pi(O,{emoji:"📂"}),oe("click",Ie,()=>k(g("screenshots"))),Y(_e,Ge)},Oe=_e=>{var Ge=Cm(),Be=T(xt(Ge),4),z=U(Be);wt(z,21,()=>c(p),De=>De.name,(De,de)=>{var Fe=Rm(),ke=U(Fe),R=U(ke),S=ue(R,!0),I=T(R,2),K=ue(I),ne=T(ke),xe=ue(ne);Me((Te,Se)=>{Xe(R,"title",c(de).name),he(S,c(de).name),he(K,`${Te??""} · ${Se??""}`)},[()=>m(c(de).size),()=>h(c(de).modified)]),oe("click",xe,()=>k(g("logs",c(de).name))),Y(De,Fe)},De=>{var de=Rc(),Fe=U(de),ke=U(Fe);{var R=I=>{var K=dr("Loading logs…");Y(I,K)},S=I=>{var K=dr("No log files yet — logs appear after the first launch.");Y(I,K)};Ve(ke,I=>{c(f)?I(R):I(S,-1)})}Y(De,de)});var qe=T(Be,2);{var Ie=De=>{var de=Ao(),Fe=ue(de,!0);Me(()=>he(Fe,c(v))),Y(De,de)};Ve(qe,De=>{c(v)&&De(Ie)})}var O=T(qe,2),Z=U(O),be=T(Z,2),Ae=U(be);pi(Ae,{emoji:"📂"}),oe("click",Z,()=>e.onopenconsole?.()),oe("click",be,()=>k(g("logs"))),Y(_e,Ge)},ze=_e=>{var Ge=Pm(),Be=T(xt(Ge),4),z=U(Be),qe=ue(z,!0),Ie=T(z,2),O=U(Ie),Z=ue(O),be=T(O,2),Ae=ue(be);Me((De,de,Fe)=>{he(qe,e.instance.name),Xe(Ie,"title",De),he(Z,`Game folder: ${de??""}`),he(Ae,`Mods folder: ${Fe??""}`)},[()=>g(),()=>g(),()=>g("mods")]),Y(_e,Ge)};Ve(W,_e=>{c(r)==="components"?_e($):c(r)==="mods"?_e(we,1):c(r)==="screenshots"?_e(Le,2):c(r)==="logs"?_e(Oe,3):_e(ze,-1)})}var We=T(me,2);{var He=_e=>{bm(_e,{get instance(){return e.instance},onclose:()=>x(u,!1),oninstalled:()=>_()})};Ve(We,_e=>{c(u)&&_e(He)})}Me(()=>{Xe(G,"title",e.instance.name),he(H,e.instance.name),he(Q,`${e.instance.minecraft_version??""} · ${e.instance.loader_type??""}`)}),oe("click",V,function(..._e){e.onback?.apply(this,_e)}),Y(n,w),Kt()}mn(["click","keydown"]);var Im=re('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),Um=re('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),Nm=re('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),Om=re('<p class="mt-3 text-[12px] text-red-400"> </p>'),Fm=re(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),km=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function Bm(n,e){qt(e,!0);let t=fe(null),i=fe(""),r=fe(""),a=fe(!1),o=fe("");function s(M){return M>=1024*1024?`${(M/1024/1024).toFixed(1)} MB`:M>=1024?`${(M/1024).toFixed(0)} KB`:`${M} B`}function l(){return!c(t)||!c(t).loader?"Vanilla":c(t).loader[0].toUpperCase()+c(t).loader.slice(1)+(c(t).loader_version?` ${c(t).loader_version}`:" (latest stable)")}ir(async()=>{const M=co(()=>e.onclose?.());try{x(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),x(r,c(t).name,!0)}catch(_){x(i,String(_),!0)}return()=>uo(M)});async function u(){if(!c(a)){x(a,!0),x(o,"");try{const M=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:c(r).trim()});e.oninstalled?.(M)}catch(M){x(o,String(M),!0)}finally{x(a,!1)}}}var d=km(),p=U(d),f=U(p),v=T(U(f),2),g=T(f,2);{var b=M=>{var _=Im(),E=U(_),C=ue(E,!0),D=T(E,2),A=ue(D,!0);Me(()=>{he(C,c(i)),Xe(D,"title",e.path),he(A,e.path)}),Y(M,_)},m=M=>{var _=Um();Y(M,_)},h=M=>{var _=Fm(),E=xt(_),C=U(E),D=U(C),A=ue(D,!0),k=T(D,2);{var y=ze=>{var We=Nm(),He=ue(We,!0);Me(()=>he(He,c(t).summary)),Y(ze,We)};Ve(k,ze=>{c(t).summary&&ze(y)})}var w=T(k,2),ie=U(w),V=ue(ie),N=T(ie,2),G=ue(N,!0),H=T(N,2),X=ue(H),Q=T(H,2),te=ue(Q,!0),me=T(C,4),ce=T(me,2);{var W=ze=>{var We=Om(),He=ue(We,!0);Me(()=>he(He,c(o))),Y(ze,We)};Ve(ce,ze=>{c(o)&&ze(W)})}var $=T(E,2),we=U($),Le=T(we,2),Oe=ue(Le,!0);Me((ze,We,He)=>{Xe(D,"title",c(t).name),he(A,c(t).name),he(V,`MC ${(c(t).game_version||"?")??""}`),he(G,ze),Xe(H,"title",`${c(t).download_count??""} downloaded, ${c(t).override_count??""} overrides extracted`),he(X,`${c(t).file_count??""} files`),he(te,We),Le.disabled=He,he(Oe,c(a)?"Installing…":"Install Modpack")},[()=>l(),()=>s(c(t).archive_size),()=>c(a)||!c(r).trim()]),kt(me,()=>c(r),ze=>x(r,ze)),oe("click",we,()=>e.onclose?.()),oe("click",Le,u),Y(M,_)};Ve(g,M=>{c(i)?M(b):c(t)?M(h,-1):M(m,1)})}oe("click",d,M=>{M.target===M.currentTarget&&e.onclose?.()}),oe("click",v,()=>e.onclose?.()),Y(n,d),Kt()}mn(["click"]);var zm=re('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),Gm=re('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),Cc=re("<option> </option>"),Hm=re('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),Vm=re('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),Wm=re('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),jm=re('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),Xm=re('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),Ym=re('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),qm=re('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Km=re('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Zm=re('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),Jm=re('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),Qm=re('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),$m=re('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),ev=re('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),tv=re('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),nv=re('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),iv=re('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),rv=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>');function av(n,e){qt(e,!0);let t=et(e,"groups",19,()=>[]);const i=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],r=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"fabric",label:"Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],a=["","fabric","quilt"],o=["fabric","quilt"],s="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let l=fe(null),u=fe(!0),d=fe(""),p=fe(""),f=fe(Rt(new Set(["release"]))),v=fe(""),g=fe(""),b=fe(""),m=fe(""),h=fe(""),M=fe(""),_=fe(Rt([])),E=fe("idle"),C=0,D=fe(!1),A=fe("");function k(le,Ue){const Ye=window.__TAURI__?.core;return Ye?Ye.invoke(le,Ue):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const y=lt(()=>{const le=c(l)?.versions??[],Ue=c(p).trim().toLowerCase();return le.filter(Ye=>c(f).has(Ye.version_type)&&(!Ue||Ye.id.toLowerCase().includes(Ue)))}),w=lt(()=>!a.includes(c(h))),ie=lt(()=>o.includes(c(h))),V=lt(()=>!!c(v)&&!c(w)&&!c(D)&&!(c(ie)&&c(E)==="loading"));function N(le){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[le]??le}function G(le){if(!le)return"—";const Ue=new Date(le);if(Number.isNaN(Ue.getTime()))return String(le).slice(0,10);const Ye=dt=>String(dt).padStart(2,"0");return`${Ye(Ue.getDate())}/${Ye(Ue.getMonth()+1)}/${Ue.getFullYear()}`}function H(le){const Ue=new Set(c(f));Ue.has(le)?Ue.delete(le):Ue.add(le),x(f,Ue,!0)}function X(){const le=window.__TAURI__?.core?.convertFileSrc;return c(m)&&le?le(c(m)):null}async function Q(){const le=window.__TAURI__?.dialog?.open;if(!le){x(A,"Image picker unavailable in this build.");return}try{const Ue=await le({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});Ue&&(x(m,String(Ue),!0),x(A,""))}catch(Ue){x(A,String(Ue),!0)}}async function te(){if(!c(ie)||!c(v))return;const le=++C;x(E,"loading");try{const Ue=await k("fetch_loader_versions",{loader:c(h),gameVersion:c(v)});if(le!==C)return;x(_,Ue,!0),x(M,Ue.find(Ye=>Ye.stable)?.version??Ue[0]?.version??"",!0),x(E,Ue.length?"idle":"error",!0)}catch{if(le!==C)return;x(_,[],!0),x(M,""),x(E,"error")}}async function me(le){x(v,le,!0),c(ie)&&await te()}async function ce(le){x(h,le,!0),x(M,""),x(_,[],!0),x(E,"idle"),c(ie)&&await te()}async function W(){x(u,!0),x(d,"");try{x(l,await k("fetch_vanilla_versions"),!0)}catch(le){x(d,String(le),!0)}finally{x(u,!1)}}async function $(){if(!c(V))return;x(D,!0),x(A,"");const le=c(v),Ue=c(g).trim()||le;try{const Ye=await k("create_instance",{name:Ue,version:le,loader:c(h)||null,loaderVersion:c(M).trim()||null});let dt="";if(c(m))try{await k("set_instance_icon",{instanceId:Ye.id,imagePath:c(m)})}catch(ft){dt=`Instance created, but the icon could not be applied: ${ft}`}if(c(b).trim())try{await k("set_instance_group",{instanceId:Ye.id,group:c(b).trim()})}catch(ft){dt=dt?`${dt} The group could not be set: ${ft}`:`Instance created, but the group could not be set: ${ft}`}e.oncreated?.(Ye,dt)}catch(Ye){x(A,String(Ye),!0)}finally{x(D,!1)}}function we(){window.__TAURI__?.core?.invoke("open_path",{path:s}).catch(le=>x(A,String(le),!0))}ir(()=>{const le=co(()=>e.onclose?.());return W(),()=>uo(le)});var Le=rv(),Oe=U(Le),ze=U(Oe),We=U(ze),He=U(We);{var _e=le=>{var Ue=zm(),Ye=xt(Ue);Me(dt=>Xe(Ye,"src",dt),[()=>X()]),Y(le,Ue)},Ge=lt(()=>X()),Be=le=>{var Ue=Gm();Y(le,Ue)};Ve(He,le=>{c(Ge)?le(_e):le(Be,-1)})}var z=T(We,2),qe=U(z),Ie=T(qe,2),O=T(U(Ie),2),Z=U(O);Z.value=Z.__value="";var be=T(Z);wt(be,16,t,le=>le,(le,Ue)=>{var Ye=Cc(),dt=ue(Ye,!0),ft={};Me(()=>{he(dt,Ue),ft!==(ft=Ue)&&(Ye.value=(Ye.__value=ft)??"")}),Y(le,Ye)}),Qs(O);var Ae=T(z,2),De=T(ze,2),de=U(De),Fe=U(de),ke=U(Fe);{var R=le=>{var Ue=Hm();Y(le,Ue)},S=le=>{var Ue=Vm(),Ye=U(Ue),dt=ue(Ye,!0),ft=T(Ye,2);Me(()=>he(dt,c(d))),oe("click",ft,W),Y(le,Ue)},I=le=>{var Ue=Ym(),Ye=T(U(Ue));wt(Ye,21,()=>c(y),dt=>dt.id,(dt,ft)=>{var sn=jm(),Ct=U(sn),nn=U(Ct),Sn=ue(nn,!0),oi=T(nn,2);{var Rn=pe=>{var ae=Wm();Y(pe,ae)};Ve(oi,pe=>{c(ft).is_latest_release&&pe(Rn)})}var li=T(Ct),qn=ue(li,!0),L=T(li),ee=ue(L,!0);Me((pe,ae)=>{_t(sn,1,`cursor-pointer border-b border-(--border)/50 ${c(v)===c(ft).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),he(Sn,c(ft).id),he(qn,pe),he(ee,ae)},[()=>G(c(ft).release_time),()=>N(c(ft).version_type)]),oe("click",sn,()=>me(c(ft).id)),oe("keydown",sn,pe=>{(pe.key==="Enter"||pe.key===" ")&&(pe.preventDefault(),me(c(ft).id))}),Y(dt,sn)},dt=>{var ft=Xm();Y(dt,ft)}),Y(le,Ue)};Ve(ke,le=>{c(u)?le(R):c(d)?le(S,1):le(I,-1)})}var K=T(Fe,2),ne=U(K),xe=T(ne,2),Te=ue(xe),Se=T(de,2),J=U(Se),P=T(U(J),2);wt(P,21,()=>i,le=>le.id,(le,Ue)=>{var Ye=qm(),dt=U(Ye),ft=T(dt,2),sn=ue(ft,!0);Me(Ct=>{Ec(dt,Ct),he(sn,c(Ue).label)},[()=>c(f).has(c(Ue).id)]),oe("change",dt,()=>H(c(Ue).id)),Y(le,Ye)});var se=T(J,2),ye=T(U(se),2);wt(ye,21,()=>r,le=>le.id,(le,Ue)=>{var Ye=Km(),dt=U(Ye),ft=T(dt,2),sn=ue(ft,!0);Me(()=>{Ka(dt,c(Ue).id),Ec(dt,c(h)===c(Ue).id),he(sn,c(Ue).label)}),oe("change",dt,()=>ce(c(Ue).id)),Y(le,Ye)});var Ce=T(ye,2);{var Ne=le=>{var Ue=Zm();Y(le,Ue)},Qe=le=>{var Ue=Jm();Y(le,Ue)};Ve(Ce,le=>{c(w)?le(Ne):c(h)||le(Qe,1)})}var at=T(Ce,2);{var F=le=>{var Ue=tv(),Ye=T(xt(Ue),2);{var dt=Ct=>{var nn=Qm();Y(Ct,nn)},ft=Ct=>{var nn=$m(),Sn=xt(nn);kt(Sn,()=>c(M),oi=>x(M,oi)),Y(Ct,nn)},sn=Ct=>{var nn=ev(),Sn=U(nn);Sn.value=Sn.__value="";var oi=T(Sn);wt(oi,17,()=>c(_),Rn=>Rn.version,(Rn,li)=>{var qn=Cc(),L=ue(qn),ee={};Me(()=>{he(L,`${c(li).version??""}${c(li).stable?"":" (unstable)"}`),ee!==(ee=c(li).version)&&(qn.value=(qn.__value=ee)??"")}),Y(Rn,qn)}),Qs(nn),$s(nn,()=>c(M),Rn=>x(M,Rn)),Y(Ct,nn)};Ve(Ye,Ct=>{c(E)==="loading"?Ct(dt):c(E)==="error"?Ct(ft,1):Ct(sn,-1)})}Y(le,Ue)};Ve(at,le=>{c(ie)&&le(F)})}var Ee=T(De,2),B=U(Ee),ve=T(B,2);{var Re=le=>{var Ue=nv(),Ye=ue(Ue,!0);Me(()=>{Xe(Ue,"title",c(A)),he(Ye,c(A))}),Y(le,Ue)},Je=le=>{var Ue=iv(),Ye=ue(Ue,!0);Me(()=>he(Ye,c(v)?`Selected Minecraft ${c(v)}`:"Pick a version to continue")),Y(le,Ue)};Ve(ve,le=>{c(A)?le(Re):le(Je,-1)})}var nt=T(ve,2),st=T(nt,2),yt=ue(st,!0);Me(()=>{Xe(qe,"placeholder",c(v)?`Instance name (${c(v)})`:"Instance name"),ne.disabled=!c(l),he(Te,`${c(y).length??""} shown`),st.disabled=!c(V),Xe(st,"title",c(w)?"This mod loader is not supported yet.":"Create the instance"),he(yt,c(D)?"Creating…":"OK")}),oe("click",Le,le=>{le.target===le.currentTarget&&e.onclose?.()}),oe("click",We,Q),kt(qe,()=>c(g),le=>x(g,le)),$s(O,()=>c(b),le=>x(b,le)),oe("click",Ae,()=>e.onclose?.()),kt(ne,()=>c(p),le=>x(p,le)),oe("click",B,we),oe("click",nt,()=>e.onclose?.()),oe("click",st,$),Y(n,Le),Kt()}mn(["click","keydown","change"]);const Ja="twilight_user_accent",Kl="twilight_custom_themes",Pc="#06B6D4",Lc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],Dc="#0F172A",sv="#FFFFFF",ov={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function fs(n){return ov[n]??[]}function as(n){let e=n.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function Ic(n){const e=t=>{const i=parseInt(n.replace("#","").substring(t,t+2),16)/255;return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function lv(n){const e=Ic(n),t=1.05/(e+.05);return(e+.05)/(Ic(Dc)+.05)>=t?Dc:sv}function Qa(n,{persist:e=!0}={}){const t=as(n);if(!t)return!1;const i=document.documentElement;return i.style.setProperty("--user-accent",t),i.style.setProperty("--on-accent",lv(t)),e&&localStorage.setItem(Ja,t),!0}function cv(){localStorage.removeItem(Ja);const n=document.documentElement;n.style.removeProperty("--user-accent"),n.style.removeProperty("--on-accent")}function xl(){return as(localStorage.getItem(Ja)??"")}function uv(){const n=xl();n&&Qa(n)}const fo=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:Lc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...Lc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:fs("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:fs("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:fs("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:fs("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],Zl="twilight-dark",bl={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},dv=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function fv(n){let e="";for(const t of n){const i=t.codePointAt(0);i>=65&&i<=90?e+=String.fromCharCode(i+32):i>=97&&i<=122||i>=48&&i<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function pf(n){const e=n&&typeof n=="object"?n:{},t={};for(const[i,r]of Object.entries(bl))t[i]=as(e[i]??"")??r;return t}function hv(n){return typeof n=="string"&&n.startsWith("custom:")}function mf(n){return gr().find(e=>e.id===n)??null}function gr(){try{const n=JSON.parse(localStorage.getItem(Kl)??"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e=="object"&&hv(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:pf(e.tokens)})):[]}catch{return[]}}function Uc({name:n,dark:e,tokens:t}){const i=String(n??"").trim()||"Custom theme",r={id:`custom:${fv(i)||"theme"}`,name:i,dark:!!e,tokens:pf(t)},a=[...gr().filter(o=>o.id!==r.id),r];return localStorage.setItem(Kl,JSON.stringify(a)),r}function pv(n){const e=gr().filter(t=>t.id!==n);return localStorage.setItem(Kl,JSON.stringify(e)),e}function Nc(){try{const n=getComputedStyle(document.documentElement),e=(i,r)=>{const a=n.getPropertyValue(i).trim();return as(a)??r},t={};for(const[i,r]of Object.entries(bl)){const a=`--${i.replace(/(\d)$/,"-$1")}`;t[i]=e(a,r)}return t}catch{return{...bl}}}const mv=new Set(fo.map(n=>n.id));function Jl(n){const e=(n??"").trim();return e==="dark"?Zl:e==="light"?"twilight-light":mv.has(e)||mf(e)?e:null}function vv(n){const e=n.tokens;return{id:n.id,label:n.name,dark:n.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:n.name,hex:e.accent1}],tokens:e}}function aa(n){const e=Jl(n);return e?fo.find(t=>t.id===e)??vv(mf(e)):null}function Fa(n){return aa(n)?.dark??!0}const gv=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Ro="";function _v(n){const e=aa(n)??aa(Zl);if(!e||e.id===Ro)return e;const t=Ro==="";Ro=e.id;const i=document.documentElement;for(const r of gv)i.style.removeProperty(r);i.classList.toggle("dark",e.dark),i.classList.toggle("light",!e.dark);for(const r of fo)r.cls&&i.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;i.style.setProperty("--bg-1",r.bg1),i.style.setProperty("--bg-2",r.bg2),i.style.setProperty("--bg-3",r.bg3),i.style.setProperty("--border-1",r.border1),i.style.setProperty("--fg-1",r.fg1),i.style.setProperty("--fg-2",r.fg2),i.style.setProperty("--accent-1",r.accent1),i.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(Ja),Qa(r.accent1,{persist:!1})}else t||(localStorage.removeItem(Ja),Qa(e.accent,{persist:!1}));return e}const xv="/".replace(/\/{2,}/g,"/"),vf=[{id:"fluent-auto",label:"Fluent (Auto)",hint:"Freesm Fluent · follows the theme"},{id:"fluent",label:"Fluent Light",hint:"Freesm Fluent · light ink"},{id:"fluent_dark",label:"Fluent Dark",hint:"Freesm Fluent · white ink"},{id:"breeze_dark",label:"Breeze Dark",hint:"Prism · KDE Breeze dark"},{id:"breeze_light",label:"Breeze Light",hint:"Prism · KDE Breeze light"},{id:"pe_colored",label:"Prism PE Colored",hint:"Prism · full-color PE"},{id:"twemoji",label:"Twemoji",hint:"Emoji glyphs · the classic look"}],gf=new Set(vf.map(n=>n.id)),_f="twilight-icon-pack",bv={instances:"viewfolder",folder:"viewfolder",server:"server",settings:"settings",accounts:"accounts",new:"new",launch:"launch",edit:"instance-settings",copy:"copy",export:"export",delete:"delete",shortcut:"shortcut",mods:"centralmods",refresh:"refresh",console:"log",tag:"tag",star:"star",help:"help",about:"about",screenshots:"screenshots",worlds:"worlds"},Oc={kill:"⏹",download:"⬇",search:"🔍",sun:"☀",moon:"🌙",package:"📦",modrinth:"🧩",instances:"📁",folder:"📁",server:"🌐",settings:"⚙",accounts:"👤",new:"➕",launch:"▶",edit:"✏",copy:"⧉",export:"⤓",delete:"🗑",shortcut:"🔗",mods:"📦",refresh:"🔄",console:"📜",tag:"🏷",star:"★",help:"❔",about:"ℹ",screenshots:"🖼",worlds:"🌐"};let ka=null;function eo(){if(ka)return ka;const n=localStorage.getItem(_f);return ka=gf.has(n??"")?n:"fluent-auto",ka}function yv(n){gf.has(n)&&(ka=n,localStorage.setItem(_f,n),xf())}let yl="";function Sv(n){const e=Jl(n)??String(n??"");e!==yl&&(yl=e,xf())}function Mv(n=eo()){return n!=="fluent-auto"?n:Fa(yl||"twilight-dark")?"fluent_dark":"fluent"}const Sl=new Set;function xf(){for(const n of Sl)n()}function Ev(n){return Sl.add(n),()=>Sl.delete(n)}function wv(n,e=null){const t=e??eo(),i=n;if(t==="twemoji"){const o=Oc[n];return o?{kind:"emoji",emoji:o,label:i}:null}const r=bv[n];if(r)return{kind:"svg",src:`${xv}icons/${Mv(t)}/${r}.svg`,label:i};const a=Oc[n];return a?{kind:"emoji",emoji:a,label:i}:null}var Tv=re('<img draggable="false"/>'),Av=re("<span></span>");function zt(n,e){qt(e,!0);let t=et(e,"name",3,""),i=et(e,"pack",3,null),r=et(e,"size",3,null),a=et(e,"alt",3,""),o=et(e,"class",3,""),s=fe(0);const l=Ev(()=>x(s,c(s)+1));ql(l);const u=lt(()=>(c(s),wv(t(),i()))),d=lt(()=>r()?`${r()}px`:"1em"),p=lt(()=>a()||t());let f=fe(!1);an(()=>{c(u)?.kind,x(f,!1)});var v=Js(),g=xt(v);{var b=M=>{var _=Js(),E=xt(_);df(E,()=>c(u).src,C=>{var D=Tv();Me(()=>{Xe(D,"src",c(u).src),Xe(D,"alt",c(p)),Xe(D,"title",a()||void 0),_t(D,1,`shrink-0 select-none ${o()??""}`),xn(D,`width:${c(d)??""};height:${c(d)??""};object-fit:contain`),Xe(D,"aria-hidden",a()?void 0:"true")}),gi("error",D,()=>x(f,!0)),Y(C,D)}),Y(M,_)},m=M=>{{let _=lt(()=>a()||void 0);pi(M,{get emoji(){return c(u).emoji},get size(){return r()},get alt(){return c(_)},get class(){return o()}})}},h=M=>{var _=Av();Me(()=>{_t(_,1,`inline-block shrink-0 ${o()??""}`),xn(_,`width:${c(d)??""};height:${c(d)??""}`)}),Y(M,_)};Ve(g,M=>{c(u)?.kind==="svg"&&!c(f)?M(b):c(u)?.kind==="emoji"?M(m,1):M(h,-1)})}Y(n,v),Kt()}var Rv=re('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Cv=re('<button class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game"><!> Kill</button>'),Pv=re("<button> </button>"),Lv=re('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Dv=re('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"><!> Launch</button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip"><!> Export</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance"><!> Copy</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"><!> Delete</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance"><!> Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Iv(n,e){qt(e,!0);let t=et(e,"storage",3,null),i=et(e,"gameRunning",3,!1),r=et(e,"modsCount",3,null),a=et(e,"groups",19,()=>[]),o=fe(!1),s=fe("");const l=lt(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function u(){const de=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&de?de(e.instance.icon_path):"/logo.png"}function d(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function p(de){const Fe=new Date(de*1e3),ke=R=>String(R).padStart(2,"0");return`${ke(Fe.getDate())}/${ke(Fe.getMonth()+1)}/${Fe.getFullYear()} ${ke(Fe.getHours())}:${ke(Fe.getMinutes())}:${ke(Fe.getSeconds())}`}function f(de){const Fe=Math.max(0,Math.floor(de)),ke=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],R=[];let S=Fe;for(const[I,K]of ke){const ne=Math.floor(S/I);if(ne&&(R.push(`${ne} ${K}${ne===1?"":"s"}`),S-=ne*I,R.length===2))break}return R.length?R.join(" "):"0 seconds"}const v=lt(()=>{const de=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${de}, last played on ${p(e.instance.last_played)}, total played for ${f(e.instance.total_time_played)}`:de});function g(de){x(o,!1),x(s,""),e.onchangegroup?.(de.trim()?de.trim():null)}var b=Dv(),m=U(b),h=ue(m),M=T(m,2),_=ue(M,!0),E=T(M,2),C=U(E),D=ue(C,!0),A=T(C,2),k=ue(A,!0),y=T(A,2);{var w=de=>{var Fe=Rv(),ke=ue(Fe);Me(()=>he(ke,`▤ ${e.instance.group??""}`)),Y(de,Fe)};Ve(y,de=>{e.instance.group&&de(w)})}var ie=T(E,2),V=ue(ie,!0),N=T(ie,2),G=U(N),H=U(G);zt(H,{name:"launch",size:13});var X=T(G,2);{var Q=de=>{var Fe=Cv(),ke=U(Fe);zt(ke,{name:"kill",size:13}),oe("click",Fe,function(...R){e.onkill?.apply(this,R)}),Y(de,Fe)};Ve(X,de=>{i()&&de(Q)})}var te=T(X,2),me=U(te);zt(me,{name:"edit",size:13});var ce=T(te,2),W=T(U(ce),2),$=ue(W,!0),we=T(ce,2);{var Le=de=>{var Fe=Lv(),ke=U(Fe),R=T(ke,2);wt(R,16,a,ne=>ne,(ne,xe)=>{var Te=Pv(),Se=ue(Te,!0);Me(()=>{_t(Te,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===xe?"font-medium text-(--accent)":"text-(--text-muted)"}`),he(Se,xe)}),oe("click",Te,()=>g(xe)),Y(ne,Te)});var S=T(R,2),I=U(S),K=T(I,2);Me(ne=>{_t(ke,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),K.disabled=ne},[()=>!c(s).trim()]),oe("click",ke,()=>g("")),oe("keydown",I,ne=>{ne.key==="Enter"&&c(s).trim()&&g(c(s))}),kt(I,()=>c(s),ne=>x(s,ne)),oe("click",K,()=>g(c(s))),Y(de,Fe)};Ve(we,de=>{c(o)&&de(Le)})}var Oe=T(we,2),ze=U(Oe);zt(ze,{name:"folder",size:13});var We=T(Oe,2),He=U(We);zt(He,{name:"export",size:13});var _e=T(We,2),Ge=U(_e);zt(Ge,{name:"copy",size:13});var Be=T(_e,2),z=U(Be);zt(z,{name:"delete",size:13});var qe=T(Be,2),Ie=U(qe);zt(Ie,{name:"shortcut",size:13});var O=T(N,2),Z=U(O),be=ue(Z,!0),Ae=T(Z,2),De=ue(Ae);Me((de,Fe,ke)=>{Xe(h,"src",de),Xe(M,"title",e.instance.name),he(_,e.instance.name),he(D,e.instance.minecraft_version),_t(A,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${c(l)??""}`),he(k,e.instance.loader_type),Xe(ie,"title",Fe),he(V,ke),G.disabled=i(),Xe(G,"title",i()?"A game is already running":`Launch ${e.instance.name}`),he($,c(o)?"▴":"▾"),Oe.disabled=!t(),Xe(Oe,"title",t()?"Opens the instance folder":"Storage unknown"),he(be,c(v)),he(De,`${r()??"…"??""} mods installed`)},[()=>u(),()=>d(),()=>d()]),gi("error",h,de=>{de.currentTarget.dataset.f||(de.currentTarget.dataset.f="1",de.currentTarget.src="/logo.png")}),oe("click",G,function(...de){e.onlaunch?.apply(this,de)}),oe("click",te,function(...de){e.onedit?.apply(this,de)}),oe("click",ce,()=>x(o,!c(o))),oe("click",Oe,function(...de){e.onopenfolder?.apply(this,de)}),oe("click",We,function(...de){e.onexport?.apply(this,de)}),oe("click",_e,function(...de){e.oncopy?.apply(this,de)}),oe("click",Be,function(...de){e.ondelete?.apply(this,de)}),oe("click",qe,function(...de){e.onshortcut?.apply(this,de)}),Y(n,b),Kt()}mn(["click","keydown"]);var Uv=re("<button></button>"),Nv=re('<span class="text-[11px] text-rose-400">invalid hex</span>'),Ov=re('<span class="text-[11px] text-(--text-muted)">live preview</span>'),Fv=re('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function kv(n,e){qt(e,!0);let t=et(e,"theme",3,"twilight-dark");const i=lt(()=>aa(t())?.accent??Pc),r=lt(()=>{const _=aa(t())?.suggested??[],E=(aa(t())?.accent??Pc).toLowerCase();return _.map(C=>({...C,isBuiltin:C.hex.toLowerCase()===E}))});let a=fe(Rt(xl())),o=fe(Rt(c(a)??c(i))),s=fe(!1);an(()=>{t(),x(a,xl(),!0),x(o,c(a)??c(i),!0),x(s,!1)});function l(_){return c(a)===null?_.isBuiltin:c(a)===_.hex.toLowerCase()}function u(_){_.isBuiltin?(cv(),x(a,null)):Qa(_.hex)&&x(a,_.hex.toLowerCase(),!0),x(o,c(a)??c(i),!0),x(s,!1)}function d(_,E){const C=Qa(_,{persist:E})?as(_):null;C?(x(a,C,!0),x(s,!1)):x(s,!0)}var p=Fv(),f=xt(p);wt(f,21,()=>c(r),_=>_.hex,(_,E)=>{var C=Uv();Me((D,A)=>{_t(C,1,`h-7 w-7 rounded-full ${D??""}`),xn(C,`background:${c(E).hex??""}`),Xe(C,"title",`${c(E).name??""}${c(E).isBuiltin?" (built-in)":""}`),Xe(C,"aria-label",`${c(E).name??""} accent`),Xe(C,"aria-pressed",A)},[()=>l(c(E))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>l(c(E))]),oe("click",C,()=>u(c(E))),Y(_,C)});var v=T(f,2),g=U(v),b=T(g,2),m=T(b,2);{var h=_=>{var E=Nv();Y(_,E)},M=_=>{var E=Ov();Y(_,E)};Ve(m,_=>{c(s)?_(h):_(M,-1)})}Me(()=>{Ka(g,c(o)),Ka(b,c(o)),Xe(b,"placeholder",c(i))}),oe("input",g,_=>{x(o,_.currentTarget.value,!0),d(c(o),!1)}),oe("change",g,_=>d(_.currentTarget.value,!0)),oe("input",b,_=>{x(o,_.currentTarget.value,!0),d(c(o),!1)}),oe("change",b,_=>d(_.currentTarget.value,!0)),Y(n,p),Kt()}mn(["click","input","change"]);var Bv=re('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),zv=re('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Gv=re('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),Hv=re('<button><span class="flex items-center gap-2"><!> <!> <!></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Vv=re('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),Fc=re('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),Wv=re(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Icon pack</h3> <p class="mt-1 text-[12px] text-(--text-muted)">The glyph set used across the launcher. Fluent (Auto) follows the theme.</p> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),jv=re("<option> </option>"),Xv=re('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Yv=re('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!></select> <!> <!> <button class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)">↻ Rescan JREs</button> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),qv=re('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),Kv=re('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),Zv=re('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),Jv=re('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),Qv=re('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),$v=re('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),eg=re("<p> </p>"),tg=re('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div> <button class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Open the dedicated Accounts page"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <span class="truncate">Accounts</span></button></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function ng(n,e){qt(e,!0);let t=et(e,"version",3,""),i=et(e,"theme",15,"twilight-dark"),r=et(e,"storage",3,null),a=et(e,"runtimes",19,()=>[]),o=et(e,"scanning",3,!1),s=et(e,"javaError",3,""),l=et(e,"javaPath",15,""),u=et(e,"minMem",15,0),d=et(e,"maxMem",15,0);et(e,"sharedInput",11,""),et(e,"instancesInput",11,"");let p=et(e,"storageBusy",3,!1),f=et(e,"storageMsg",3,""),v=et(e,"javaMsg",3,""),g=et(e,"gameRunning",3,!1);const b=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"about",label:"About & Updates",icon:"ℹ"}];let m=fe("appearance"),h=fe(Rt(eo())),M=fe(Rt(gr())),_=fe(""),E=fe(!0),C=fe(Rt(Nc())),D=fe(""),A=fe("");function k(){x(C,Nc(),!0),x(A,"Loaded the active theme’s tokens — tweak and save.")}function y(){try{const O=Uc({name:c(_),dark:c(E),tokens:c(C)});x(M,gr(),!0),i(O.id),x(A,`Saved “${O.name}”.`)}catch(O){x(A,String(O),!0)}}function w(O){pv(O),x(M,gr(),!0),i()===O&&i(Zl),x(A,"Theme deleted.")}function ie(){x(D,JSON.stringify({name:c(_).trim()||"My theme",dark:c(E),tokens:c(C)},null,2),!0),x(A,"Theme JSON written below — copy it to share.")}function V(){try{const O=JSON.parse(c(D));if(!O||typeof O!="object"||Array.isArray(O))throw new Error("Expected a theme object.");const Z=Uc(O);x(M,gr(),!0),i(Z.id),x(A,`Imported “${Z.name}”.`),x(D,"")}catch(O){x(A,`Import failed: ${O}`)}}async function N(O){const Z=window.__TAURI__?.dialog?.open;if(!Z)return null;try{const be=await Z({directory:!0,multiple:!1,defaultPath:O&&O.trim()?O.trim():void 0});return typeof be=="string"?be:null}catch{return null}}const G=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let H=fe(Rt({}));an(()=>{r()&&x(H,{instances:r().is_default_instances?"":r().instances_dir,shared:r().is_default_shared?"":r().shared_dir,versions:r().is_default_versions?"":r().versions_dir,mods:r().is_default_mods?"":r().mods_dir,icons:r().is_default_icons?"":r().icons_dir,java:r().is_default_java?"":r().java_dir,skins:r().is_default_skins?"":r().skins_dir,downloads:r().downloads_dir||""},!0)});function X(O){return r()?O==="downloads"?r().staging_root:r()[`${O}_dir`]:""}function Q(O){return r()?O==="downloads"?r().is_default_staging:r()[`is_default_${O}`]:!0}const te="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var me=tg(),ce=U(me),W=U(ce),$=T(W,2);wt($,21,()=>b,O=>O.id,(O,Z)=>{var be=Bv(),Ae=U(be),De=U(Ae);pi(De,{get emoji(){return c(Z).icon},size:15});var de=T(Ae,2),Fe=ue(de,!0);Me(()=>{_t(be,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${c(m)===c(Z).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Xe(be,"aria-current",c(m)===c(Z).id?"true":void 0),he(Fe,c(Z).label)}),oe("click",be,()=>x(m,c(Z).id,!0)),Y(O,be)});var we=T($,2),Le=U(we),Oe=U(Le);zt(Oe,{name:"accounts",size:15});var ze=T(ce,2),We=U(ze),He=U(We);{var _e=O=>{var Z=Wv(),be=T(xt(Z),6),Ae=U(be);wt(Ae,17,()=>fo,Ee=>Ee.id,(Ee,B)=>{var ve=zv(),Re=U(ve),Je=U(Re),nt=T(Je,2),st=T(nt,2),yt=T(Re,2),le=ue(yt,!0),Ue=T(yt,2),Ye=ue(Ue,!0);Me(()=>{_t(ve,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===c(B).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Xe(ve,"aria-pressed",i()===c(B).id),Xe(ve,"title",`${c(B).label??""}: ${c(B).dark?"dark":"light"} ground`),xn(Je,`background:${c(B).swatch[0]??""}`),xn(nt,`background:${c(B).swatch[1]??""}`),xn(st,`background:${c(B).swatch[2]??""}`),he(le,c(B).label),he(Ye,c(B).dark?"Dark ground":"Light ground")}),oe("click",ve,()=>i(c(B).id)),Y(Ee,ve)});var De=T(Ae,2);wt(De,17,()=>c(M),Ee=>Ee.id,(Ee,B)=>{var ve=Gv(),Re=U(ve),Je=U(Re),nt=T(Je,2),st=T(nt,2),yt=T(Re,2),le=ue(yt,!0),Ue=T(yt,2),Ye=ue(Ue),dt=T(Ue,2);Me(()=>{_t(ve,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===c(B).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Xe(ve,"title",`${c(B).name??""}: ${c(B).dark?"dark":"light"} ground`),xn(Je,`background:${c(B).tokens.bg1??""}`),xn(nt,`background:${c(B).tokens.bg3??""}`),xn(st,`background:${c(B).tokens.accent1??""}`),he(le,c(B).name),he(Ye,`Custom · ${c(B).dark?"Dark":"Light"} ground`),Xe(dt,"title",`Delete ${c(B).name??""}`),Xe(dt,"aria-label",`Delete ${c(B).name??""}`)}),oe("click",ve,()=>i(c(B).id)),oe("keydown",ve,ft=>{(ft.key==="Enter"||ft.key===" ")&&(ft.preventDefault(),i(c(B).id))}),oe("click",dt,ft=>{ft.stopPropagation(),w(c(B).id)}),Y(Ee,ve)});var de=T(be,4),Fe=U(de);kv(Fe,{get theme(){return i()}});var ke=T(de,6);wt(ke,21,()=>vf,Ee=>Ee.id,(Ee,B)=>{var ve=Hv(),Re=U(ve),Je=U(Re);zt(Je,{name:"instances",size:16,get pack(){return c(B).id}});var nt=T(Je,2);zt(nt,{name:"settings",size:16,get pack(){return c(B).id}});var st=T(nt,2);zt(st,{name:"accounts",size:16,get pack(){return c(B).id}});var yt=T(Re,2),le=ue(yt,!0),Ue=T(yt,2),Ye=ue(Ue,!0);Me(()=>{_t(ve,1,`flex flex-col items-start gap-2 rounded border p-2.5 text-left ${c(h)===c(B).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Xe(ve,"aria-pressed",c(h)===c(B).id),Xe(ve,"title",`${c(B).label??""}: ${c(B).hint??""}`),he(le,c(B).label),he(Ye,c(B).hint)}),oe("click",ve,()=>{yv(c(B).id),x(h,eo(),!0)}),Y(Ee,ve)});var R=T(ke,6),S=U(R),I=U(S),K=T(I,2),ne=U(K),xe=T(ne,2),Te=T(S,2);wt(Te,21,()=>dv,Ee=>Ee.key,(Ee,B)=>{var ve=Vv(),Re=U(ve),Je=ue(Re,!0),nt=T(Re,2),st=U(nt),yt=T(st,2);Me(()=>{he(Je,c(B).label),Ka(st,c(C)[c(B).key]),Xe(st,"title",`${c(B).label??""} color`),Xe(st,"aria-label",`${c(B).label??""} color`),Ka(yt,c(C)[c(B).key]),Xe(yt,"aria-label",`${c(B).label??""} hex`)}),oe("input",st,le=>x(C,{...c(C),[c(B).key]:le.currentTarget.value},!0)),oe("input",yt,le=>x(C,{...c(C),[c(B).key]:le.currentTarget.value},!0)),Y(Ee,ve)});var Se=T(Te,2),J=U(Se),P=T(J,2),se=T(R,4),ye=U(se),Ce=T(ye,2),Ne=U(Ce),Qe=T(Ne,2),at=T(se,2);{var F=Ee=>{var B=Fc(),ve=ue(B,!0);Me(()=>he(ve,c(A))),Y(Ee,B)};Ve(at,Ee=>{c(A)&&Ee(F)})}Me(()=>{_t(ne,1,`px-3 py-1.5 text-[12px] ${c(E)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Xe(ne,"aria-pressed",c(E)),_t(xe,1,`px-3 py-1.5 text-[12px] ${c(E)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),Xe(xe,"aria-pressed",!c(E))}),kt(I,()=>c(_),Ee=>x(_,Ee)),oe("click",ne,()=>x(E,!0)),oe("click",xe,()=>x(E,!1)),oe("click",J,k),oe("click",P,y),kt(ye,()=>c(D),Ee=>x(D,Ee)),oe("click",Ne,ie),oe("click",Qe,V),Y(O,Z)},Ge=O=>{var Z=Yv(),be=T(xt(Z),6),Ae=U(be);Ae.value=Ae.__value="";var De=T(Ae);wt(De,17,a,P=>P.executable,(P,se)=>{var ye=jv(),Ce=ue(ye),Ne={};Me(()=>{he(Ce,`Java ${c(se).major??""} — ${c(se).home??""}`),Ne!==(Ne=c(se).executable)&&(ye.value=(ye.__value=Ne)??"")}),Y(P,ye)}),Qs(be);var de=T(be,2);{var Fe=P=>{var se=Fc(),ye=ue(se,!0);Me(()=>he(ye,o()?"Probing system roots…":"No runtimes detected.")),Y(P,se)};Ve(de,P=>{a().length||P(Fe)})}var ke=T(de,2);{var R=P=>{var se=Xv(),ye=ue(se,!0);Me(()=>he(ye,s())),Y(P,se)};Ve(ke,P=>{s()&&P(R)})}var S=T(ke,2),I=T(S,4),K=T(U(I),2),ne=T(K,2),xe=T(I,2),Te=T(U(xe),2),Se=T(Te,2),J=T(xe,4);Me(()=>S.disabled=o()),$s(be,l),oe("click",S,function(...P){e.onscanjava?.apply(this,P)}),kt(K,u),kt(ne,u),kt(Te,d),kt(Se,d),oe("click",J,function(...P){e.onsaveprefs?.apply(this,P)}),Y(O,Z)},Be=O=>{var Z=Qv(),be=T(xt(Z),4);{var Ae=De=>{var de=Jv(),Fe=xt(de),ke=U(Fe),R=U(ke),S=T(U(R),2),I=ue(S,!0),K=T(R,2),ne=T(Fe,2);wt(ne,17,()=>G,xe=>xe.key,(xe,Te)=>{var Se=Zv(),J=U(Se),P=U(J),se=U(P),ye=T(se),Ce=ue(ye,!0),Ne=T(P,2);{var Qe=le=>{var Ue=qv();Me(()=>Ue.disabled=p()),oe("click",Ue,()=>e.onsavefolder?.(c(Te).key,"")),Y(le,Ue)},at=lt(()=>!Q(c(Te).key));Ve(Ne,le=>{c(at)&&le(Qe)})}var F=T(J,2),Ee=ue(F,!0),B=T(F,2),ve=U(B),Re=T(ve,2),Je=T(Re,2),nt=T(Je,2),st=T(B,2);{var yt=le=>{var Ue=Kv(),Ye=U(Ue),dt=ue(Ye),ft=T(Ye,2);Me(()=>{Xe(Ye,"title",r().staging_root),he(dt,`Staging: ${r().staging_root??""}`),ft.disabled=p()||g(),Xe(ft,"title",g()?"Unavailable while a game is running":"Purges the staging area")}),oe("click",ft,function(...sn){e.oncleanstaging?.apply(this,sn)}),Y(le,Ue)};Ve(st,le=>{c(Te).key==="downloads"&&le(yt)})}Me((le,Ue)=>{he(se,`${c(Te).label??""} `),he(Ce,le),he(Ee,c(Te).hint),Xe(ve,"placeholder",Ue),nt.disabled=p()},[()=>Q(c(Te).key)?"(default)":"(custom)",()=>X(c(Te).key)]),kt(ve,()=>c(H)[c(Te).key],le=>c(H)[c(Te).key]=le),oe("click",Re,async()=>{const le=await N(c(H)[c(Te).key]);le&&(c(H)[c(Te).key]=le)}),oe("click",Je,()=>e.onopenfolder?.(X(c(Te).key))),oe("click",nt,()=>e.onsavefolder?.(c(Te).key,c(H)[c(Te).key])),Y(xe,Se)}),Me(()=>{Xe(S,"title",r().app_data),he(I,r().app_data)}),oe("click",K,()=>e.onopenfolder?.(r().app_data)),Y(De,de)};Ve(be,De=>{r()&&De(Ae)})}Y(O,Z)},z=O=>{var Z=$v(),be=T(xt(Z),4),Ae=U(be),De=T(U(Ae),2),de=U(De),Fe=T(U(de)),ke=ue(Fe),R=T(be,2),S=U(R),I=T(S,2),K=T(I,2);Me(()=>he(ke,`(alpha-v${t()??""})`)),oe("click",S,()=>e.onopenurl?.(`${te}`)),oe("click",I,()=>e.onopenurl?.(`${te}/releases`)),oe("click",K,()=>e.onopenurl?.(`${te}/issues`)),Y(O,Z)};Ve(He,O=>{c(m)==="appearance"?O(_e):c(m)==="java"?O(Ge,1):c(m)==="storage"?O(Be,2):O(z,-1)})}var qe=T(He,2);{var Ie=O=>{var Z=eg(),be=ue(Z,!0);Me(()=>{_t(Z,1,`mt-5 text-[12px] ${v()?"text-(--accent)":"text-(--text-muted)"}`),he(be,v()||f())}),Y(O,Z)};Ve(qe,O=>{(v()||f())&&O(Ie)})}oe("click",W,function(...O){e.onback?.apply(this,O)}),oe("click",we,function(...O){e.onopenaccounts?.apply(this,O)}),Y(n,me),Kt()}mn(["click","keydown","input"]);var ig=re("<button> </button>"),rg=re('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),ag=re('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),sg=re('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),kc=re('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),og=re('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),Bc=re('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),lg=re('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),cg=re('<div class="p-4"><!> <!></div>'),ug=re(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),dg=re('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),fg=re('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),hg=re('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),pg=re('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),mg=re(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),vg=re('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),gg=re('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),_g=re('<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div><!> <!></div>',1);function bf(n,e){qt(e,!0);let t=fe("offline"),i=fe(""),r=fe(!1),a=fe(""),o=fe(""),s=fe("idle"),l=fe(""),u=fe(null),d=fe(!1),p=null,f=fe("idle"),v=fe(""),g=fe(!1),b=fe(!1),m=fe(null),h=fe(!1),M=null,_=fe(""),E=fe(""),C=fe(!1),D=fe(""),A=fe(""),k=fe(""),y=fe("");function w(O,Z){const be=window.__TAURI__?.core;return be?be.invoke(O,Z):Promise.reject(new Error("Tauri backend unavailable in this preview."))}ql(()=>{ie(),V()});function ie(){p&&(clearInterval(p),p=null)}function V(){M&&(clearInterval(M),M=null)}an(()=>{const O=c(a).trim(),Z=setTimeout(async()=>{if(!O){x(o,"");return}try{x(o,await w("offline_uuid",{username:O}),!0)}catch{x(o,"")}},200);return()=>clearTimeout(Z)});async function N(O){O.preventDefault(),x(i,""),x(r,!0);try{await w("add_offline_account",{username:c(a).trim()}),x(a,""),x(o,""),await e.onrefresh?.()}catch(Z){x(i,String(Z),!0)}finally{x(r,!1)}}async function G(){x(l,""),x(d,!1),x(s,"requesting");try{x(u,await w("start_microsoft_device_code"),!0),x(s,"code"),ie(),p=setInterval(H,(c(u).interval||5)*1e3)}catch(O){x(s,"idle"),x(l,String(O),!0)}}async function H(){if(c(u))try{const O=await w("poll_microsoft_device_code",{device:c(u)});if(O.state==="pending")return;if(O.state==="slow_down"){ie(),p=setInterval(H,((c(u).interval||5)+5)*1e3);return}if(ie(),O.state==="failed"){x(l,O.reason,!0),x(u,null),x(s,"idle");return}x(u,null),x(s,"signedin"),await e.onrefresh?.()}catch(O){x(l,String(O),!0)}}async function X(){if(c(u))try{await navigator.clipboard.writeText(c(u).user_code),x(d,!0),setTimeout(()=>x(d,!1),1600)}catch{}}async function Q(){x(v,""),x(g,!1),x(b,!0);try{await w("elyby_browser_login"),x(g,!0),await e.onrefresh?.()}catch(O){x(v,String(O),!0)}finally{x(b,!1)}}async function te(){x(v,""),x(h,!1),x(f,"requesting");try{x(m,await w("start_elyby_device_code"),!0),x(f,"code"),V(),M=setInterval(me,(c(m).interval||5)*1e3)}catch(O){x(f,"idle"),x(v,String(O),!0)}}async function me(){if(c(m))try{const O=await w("poll_elyby_device_code",{device:c(m)});if(O.state==="pending")return;if(O.state==="slow_down"){V(),M=setInterval(me,((c(m).interval||5)+5)*1e3);return}if(V(),O.state==="failed"){x(v,O.reason,!0),x(m,null),x(f,"idle");return}x(m,null),x(f,"signedin"),await e.onrefresh?.()}catch(O){x(v,String(O),!0)}}async function ce(){if(c(m))try{await navigator.clipboard.writeText(c(m).user_code),x(h,!0),setTimeout(()=>x(h,!1),1600)}catch{}}function W(){const O=c(m)?.verification_uri_complete??c(m)?.verification_uri;O&&w("open_external_url",{url:O}).catch(()=>{})}async function $(O){O.preventDefault(),x(i,""),x(C,!0),x(g,!1);try{await w("add_elyby_account",{username:c(_).trim(),password:c(E)}),x(_,""),x(E,""),x(g,!0),await e.onrefresh?.()}catch(Z){x(i,String(Z),!0)}finally{x(C,!1)}}async function we(O){O.preventDefault(),x(i,""),x(r,!0);try{const Z=await w("add_custom_yggdrasil_account",{username:c(D).trim(),serverUrl:c(A).trim()});(c(k).trim()||c(y).trim())&&await w("set_account_textures",{id:Z.id,skin:c(k).trim()||null,cape:c(y).trim()||null}),x(D,""),x(A,""),x(k,""),x(y,""),await e.onrefresh?.()}catch(Z){x(i,String(Z),!0)}finally{x(r,!1)}}async function Le(O){const Z=window.__TAURI__?.dialog?.open;if(!Z){x(i,"File picker unavailable in this build.");return}try{const be=await Z({multiple:!1,title:O==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!be)return;const Ae=String(be);x(O==="skin"?k:y,Ae,!0),x(i,"")}catch(be){x(i,String(be),!0)}}var Oe=_g(),ze=xt(Oe);wt(ze,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],gl,(O,Z)=>{var be=lt(()=>Sd(Z,2));let Ae=()=>c(be)[0],De=()=>c(be)[1];var de=ig(),Fe=ue(de,!0);Me(()=>{_t(de,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${c(t)===Ae()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),he(Fe,De())}),oe("click",de,()=>{x(t,Ae(),!0),x(i,"")}),Y(O,de)});var We=T(ze,2),He=U(We);{var _e=O=>{var Z=ag(),be=xt(Z),Ae=U(be),De=T(Ae,2),de=T(be,2);{var Fe=ke=>{var R=rg(),S=T(U(R),2),I=ue(S,!0);Me(()=>he(I,c(o))),Y(ke,R)};Ve(de,ke=>{c(o)&&ke(Fe)})}Me(ke=>De.disabled=ke,[()=>!c(a).trim()||c(r)]),gi("submit",be,N),kt(Ae,()=>c(a),ke=>x(a,ke)),Y(O,Z)},Ge=O=>{var Z=cg(),be=U(Z);{var Ae=S=>{var I=sg(),K=xt(I);Me(()=>K.disabled=c(r)),oe("click",K,G),Y(S,I)},De=S=>{var I=kc();Y(S,I)},de=S=>{var I=og(),K=T(U(I),2),ne=ue(K,!0),xe=T(K,4),Te=ue(xe,!0),Se=T(xe,2),J=U(Se),P=ue(J,!0),se=T(J,2);Me(()=>{he(ne,c(u).verification_uri),he(Te,c(u).user_code),he(P,c(d)?"Copied ✓":"Copy code")}),oe("click",J,X),oe("click",se,G),Y(S,I)},Fe=S=>{var I=Bc(),K=T(xt(I),2);oe("click",K,()=>{x(s,"idle"),x(l,"")}),Y(S,I)};Ve(be,S=>{c(s)==="idle"?S(Ae):c(s)==="requesting"?S(De,1):c(s)==="code"&&c(u)?S(de,2):c(s)==="signedin"&&S(Fe,3)})}var ke=T(be,2);{var R=S=>{var I=lg(),K=ue(I,!0);Me(()=>he(K,c(l))),Y(S,I)};Ve(ke,S=>{c(l)&&S(R)})}Y(O,Z)},Be=O=>{var Z=mg(),be=T(U(Z),2);{var Ae=P=>{var se=ug(),ye=xt(se),Ce=ue(ye,!0),Ne=T(ye,4);Me(()=>{ye.disabled=c(b),he(Ce,c(b)?"Waiting for the browser…":"Sign in with browser (recommended)"),Ne.disabled=c(b)}),oe("click",ye,Q),oe("click",Ne,te),Y(P,se)},De=P=>{var se=kc();Y(P,se)},de=P=>{var se=fg(),ye=T(U(se),2),Ce=ue(ye,!0),Ne=T(ye,4),Qe=ue(Ne,!0),at=T(Ne,2),F=U(at),Ee=ue(F,!0),B=T(F,2);{var ve=Je=>{var nt=dg();oe("click",nt,W),Y(Je,nt)};Ve(B,Je=>{(c(m).verification_uri||c(m).verification_uri_complete)&&Je(ve)})}var Re=T(B,2);Me(()=>{he(Ce,c(m).verification_uri),he(Qe,c(m).user_code),he(Ee,c(h)?"Copied ✓":"Copy code")}),oe("click",F,ce),oe("click",Re,te),Y(P,se)},Fe=P=>{var se=Bc(),ye=T(xt(se),2);oe("click",ye,()=>{x(f,"idle"),x(v,"")}),Y(P,se)};Ve(be,P=>{c(f)==="idle"?P(Ae):c(f)==="requesting"?P(De,1):c(f)==="code"&&c(m)?P(de,2):c(f)==="signedin"&&P(Fe,3)})}var ke=T(be,2);{var R=P=>{var se=hg(),ye=ue(se,!0);Me(()=>he(ye,c(v))),Y(P,se)};Ve(ke,P=>{c(v)&&P(R)})}var S=T(ke,2);{var I=P=>{var se=pg();Y(P,se)};Ve(S,P=>{c(g)&&c(f)==="idle"&&P(I)})}var K=T(S,2),ne=T(U(K),2),xe=U(ne),Te=T(xe,2),Se=T(Te,2),J=ue(Se,!0);Me(P=>{Se.disabled=P,he(J,c(C)?"Signing in…":"Sign in")},[()=>!c(_).trim()||!c(E)||c(C)]),gi("submit",ne,$),kt(xe,()=>c(_),P=>x(_,P)),kt(Te,()=>c(E),P=>x(E,P)),Y(O,Z)},z=O=>{var Z=vg(),be=U(Z),Ae=T(be,2),De=T(Ae,2),de=U(De),Fe=T(U(de)),ke=ue(Fe,!0),R=T(de,2),S=T(U(R)),I=ue(S,!0),K=T(De,2);Me(ne=>{he(ke,c(k)||"none"),he(I,c(y)||"none"),K.disabled=ne},[()=>!c(D).trim()||!c(A).trim()||c(r)]),gi("submit",Z,we),kt(be,()=>c(A),ne=>x(A,ne)),kt(Ae,()=>c(D),ne=>x(D,ne)),oe("click",de,()=>Le("skin")),oe("click",R,()=>Le("cape")),Y(O,Z)};Ve(He,O=>{c(t)==="offline"?O(_e):c(t)==="microsoft"?O(Ge,1):c(t)==="elyby"?O(Be,2):c(t)==="custom"&&O(z,3)})}var qe=T(He,2);{var Ie=O=>{var Z=gg(),be=ue(Z,!0);Me(()=>he(be,c(i))),Y(O,Z)};Ve(qe,O=>{c(i)&&O(Ie)})}Y(n,Oe),Kt()}mn(["click"]);const Ql="156",Lr={ROTATE:0,DOLLY:1,PAN:2},Dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xg=0,zc=1,bg=2,yf=1,yg=2,Pi=3,xi=0,An=1,Xn=2,Fi=0,sa=1,Gc=2,Hc=3,Vc=4,Sg=5,$r=100,Mg=101,Eg=102,Wc=103,jc=104,wg=200,Tg=201,Ag=202,Rg=203,Sf=204,Mf=205,Cg=206,Pg=207,Lg=208,Dg=209,Ig=210,Ug=0,Ng=1,Og=2,Ml=3,Fg=4,kg=5,Bg=6,zg=7,Ef=0,Gg=1,Hg=2,Qi=0,Vg=1,Wg=2,jg=3,Xg=4,Yg=5,wf=300,ha=301,pa=302,to=303,El=304,ho=306,wl=1e3,$n=1001,Tl=1002,Bt=1003,Xc=1004,Co=1005,Wn=1006,qg=1007,$a=1008,$i=1009,Kg=1010,Zg=1011,$l=1012,Tf=1013,Zi=1014,Ui=1015,ma=1016,Af=1017,Rf=1018,yr=1020,Jg=1021,ei=1023,Qg=1024,$g=1025,Sr=1026,va=1027,e_=1028,Cf=1029,t_=1030,Pf=1031,Lf=1033,Po=33776,Lo=33777,Do=33778,Io=33779,Yc=35840,qc=35841,Kc=35842,Zc=35843,n_=36196,Jc=37492,Qc=37496,$c=37808,eu=37809,tu=37810,nu=37811,iu=37812,ru=37813,au=37814,su=37815,ou=37816,lu=37817,cu=37818,uu=37819,du=37820,fu=37821,Uo=36492,hu=36494,pu=36495,i_=36283,mu=36284,vu=36285,gu=36286,Df=3e3,Mr=3001,r_=3200,a_=3201,If=0,s_=1,Er="",It="srgb",bi="srgb-linear",po="display-p3",No=7680,o_=519,l_=512,c_=513,u_=514,d_=515,f_=516,h_=517,p_=518,m_=519,Al=35044,_u="300 es",Rl=1035,Ni=2e3,no=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,Cl=180/Math.PI;function er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function bn(n,e,t){return Math.max(e,Math.min(t,n))}function v_(n,e){return(n%e+e)%e}function Oo(n,e,t){return(1-t)*n+t*e}function xu(n){return(n&n-1)===0&&n!==0}function Pl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const g_={DEG2RAD:Hs};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,i,r,a,o,s,l,u){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,u)}set(e,t,i,r,a,o,s,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],u=i[1],d=i[4],p=i[7],f=i[2],v=i[5],g=i[8],b=r[0],m=r[3],h=r[6],M=r[1],_=r[4],E=r[7],C=r[2],D=r[5],A=r[8];return a[0]=o*b+s*M+l*C,a[3]=o*m+s*_+l*D,a[6]=o*h+s*E+l*A,a[1]=u*b+d*M+p*C,a[4]=u*m+d*_+p*D,a[7]=u*h+d*E+p*A,a[2]=f*b+v*M+g*C,a[5]=f*m+v*_+g*D,a[8]=f*h+v*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],d=e[8];return t*o*d-t*s*u-i*a*d+i*s*l+r*a*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],d=e[8],p=d*o-s*u,f=s*l-d*a,v=u*a-o*l,g=t*p+i*f+r*v;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=p*b,e[1]=(r*u-d*i)*b,e[2]=(s*i-r*o)*b,e[3]=f*b,e[4]=(d*t-r*l)*b,e[5]=(r*a-s*t)*b,e[6]=v*b,e[7]=(i*l-u*t)*b,e[8]=(o*t-i*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*o+u*s)+o+e,-r*u,r*l,-r*(-u*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Fo.makeScale(e,t)),this}rotate(e){return this.premultiply(Fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new vt;function Uf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function io(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function __(){const n=io("canvas");return n.style.display="block",n}const bu={};function Va(n){n in bu||(bu[n]=!0,console.warn(n))}function oa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const x_=new vt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),b_=new vt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function y_(n){return n.convertSRGBToLinear().applyMatrix3(b_)}function S_(n){return n.applyMatrix3(x_).convertLinearToSRGB()}const M_={[bi]:n=>n,[It]:n=>n.convertSRGBToLinear(),[po]:y_},E_={[bi]:n=>n,[It]:n=>n.convertLinearToSRGB(),[po]:S_},zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return bi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=M_[e],r=E_[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ir;class Nf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=io("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=oa(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oa(t[i]/255)*255):t[i]=oa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w_=0;class Of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Bo(r[o].image)):a.push(Bo(r[o]))}else a=Bo(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T_=0;class fn extends Ar{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=$n,r=$n,a=Wn,o=$a,s=ei,l=$i,u=fn.DEFAULT_ANISOTROPY,d=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=er(),this.name="",this.source=new Of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Mr?It:Er),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wl:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wl:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Mr:Df}set encoding(e){Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mr?It:Er}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=wf;fn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,u=l[0],d=l[4],p=l[8],f=l[1],v=l[5],g=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+b)<.1&&Math.abs(g+m)<.1&&Math.abs(u+v+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,E=(v+1)/2,C=(h+1)/2,D=(d+f)/4,A=(p+b)/4,k=(g+m)/4;return _>E&&_>C?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=D/i,a=A/i):E>C?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=D/r,a=k/r):C<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(C),i=A/a,r=k/a),this.set(i,r,a,t),this}let M=Math.sqrt((m-g)*(m-g)+(p-b)*(p-b)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-b)/M,this.z=(f-d)/M,this.w=Math.acos((u+v+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A_ extends Ar{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mr?It:Er),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Wn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends A_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ff extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class R_ extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let l=i[r+0],u=i[r+1],d=i[r+2],p=i[r+3];const f=a[o+0],v=a[o+1],g=a[o+2],b=a[o+3];if(s===0){e[t+0]=l,e[t+1]=u,e[t+2]=d,e[t+3]=p;return}if(s===1){e[t+0]=f,e[t+1]=v,e[t+2]=g,e[t+3]=b;return}if(p!==b||l!==f||u!==v||d!==g){let m=1-s;const h=l*f+u*v+d*g+p*b,M=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const C=Math.sqrt(_),D=Math.atan2(C,h*M);m=Math.sin(m*D)/C,s=Math.sin(s*D)/C}const E=s*M;if(l=l*m+f*E,u=u*m+v*E,d=d*m+g*E,p=p*m+b*E,m===1-s){const C=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=C,u*=C,d*=C,p*=C}}e[t]=l,e[t+1]=u,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],l=i[r+1],u=i[r+2],d=i[r+3],p=a[o],f=a[o+1],v=a[o+2],g=a[o+3];return e[t]=s*g+d*p+l*v-u*f,e[t+1]=l*g+d*f+u*p-s*v,e[t+2]=u*g+d*v+s*f-l*p,e[t+3]=d*g-s*p-l*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(i/2),d=s(r/2),p=s(a/2),f=l(i/2),v=l(r/2),g=l(a/2);switch(o){case"XYZ":this._x=f*d*p+u*v*g,this._y=u*v*p-f*d*g,this._z=u*d*g+f*v*p,this._w=u*d*p-f*v*g;break;case"YXZ":this._x=f*d*p+u*v*g,this._y=u*v*p-f*d*g,this._z=u*d*g-f*v*p,this._w=u*d*p+f*v*g;break;case"ZXY":this._x=f*d*p-u*v*g,this._y=u*v*p+f*d*g,this._z=u*d*g+f*v*p,this._w=u*d*p-f*v*g;break;case"ZYX":this._x=f*d*p-u*v*g,this._y=u*v*p+f*d*g,this._z=u*d*g-f*v*p,this._w=u*d*p+f*v*g;break;case"YZX":this._x=f*d*p+u*v*g,this._y=u*v*p+f*d*g,this._z=u*d*g-f*v*p,this._w=u*d*p-f*v*g;break;case"XZY":this._x=f*d*p-u*v*g,this._y=u*v*p-f*d*g,this._z=u*d*g+f*v*p,this._w=u*d*p+f*v*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],u=t[2],d=t[6],p=t[10],f=i+s+p;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-l)*v,this._y=(a-u)*v,this._z=(o-r)*v}else if(i>s&&i>p){const v=2*Math.sqrt(1+i-s-p);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(a+u)/v}else if(s>p){const v=2*Math.sqrt(1+s-i-p);this._w=(a-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+p-i-s);this._w=(o-r)/v,this._x=(a+u)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,u=t._z,d=t._w;return this._x=i*d+o*s+r*u-a*l,this._y=r*d+o*l+a*s-i*u,this._z=a*d+o*u+i*l-r*s,this._w=o*d-i*s-r*l-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,s),p=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=o*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=a*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=l*t+o*r-s*i,d=l*i+s*t-a*r,p=l*r+a*i-o*t,f=-a*t-o*i-s*r;return this.x=u*l+f*-a+d*-s-p*-o,this.y=d*l+f*-o+p*-a-u*-s,this.z=p*l+f*-s+u*-o-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new q,yu=new Tr;class ss{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox),Ur.applyMatrix4(e.matrixWorld),this.union(Ur);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)wi.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(wi)}else r.boundingBox===null&&r.computeBoundingBox(),Ur.copy(r.boundingBox),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),hs.subVectors(this.max,Ta),Nr.subVectors(e.a,Ta),Or.subVectors(e.b,Ta),Fr.subVectors(e.c,Ta),ji.subVectors(Or,Nr),Xi.subVectors(Fr,Or),sr.subVectors(Nr,Fr);let t=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-sr.z,sr.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,sr.z,0,-sr.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-sr.y,sr.x,0];return!Go(t,Nr,Or,Fr,hs)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,Nr,Or,Fr,hs))?!1:(ps.crossVectors(ji,Xi),t=[ps.x,ps.y,ps.z],Go(t,Nr,Or,Fr,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new q,new q,new q,new q,new q,new q,new q,new q],wi=new q,Ur=new ss,Nr=new q,Or=new q,Fr=new q,ji=new q,Xi=new q,sr=new q,Ta=new q,hs=new q,ps=new q,or=new q;function Go(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){or.fromArray(n,a);const s=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),u=t.dot(or),d=i.dot(or);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>s)return!1}return!0}const C_=new ss,Aa=new q,Ho=new q;class ec{constructor(e=new q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):C_.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Ho)),this.expandByPoint(Aa.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new q,Vo=new q,ms=new q,Yi=new q,Wo=new q,vs=new q,jo=new q;class kf{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vo.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Vo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ms),s=Yi.dot(this.direction),l=-Yi.dot(ms),u=Yi.lengthSq(),d=Math.abs(1-o*o);let p,f,v,g;if(d>0)if(p=o*l-s,f=o*s-l,g=a*d,p>=0)if(f>=-g)if(f<=g){const b=1/d;p*=b,f*=b,v=p*(p+o*f+2*s)+f*(o*p+f+2*l)+u}else f=a,p=Math.max(0,-(o*f+s)),v=-p*p+f*(f+2*l)+u;else f=-a,p=Math.max(0,-(o*f+s)),v=-p*p+f*(f+2*l)+u;else f<=-g?(p=Math.max(0,-(-o*a+s)),f=p>0?-a:Math.min(Math.max(-a,-l),a),v=-p*p+f*(f+2*l)+u):f<=g?(p=0,f=Math.min(Math.max(-a,-l),a),v=f*(f+2*l)+u):(p=Math.max(0,-(o*a+s)),f=p>0?a:Math.min(Math.max(-a,-l),a),v=-p*p+f*(f+2*l)+u);else f=o>0?-a:a,p=Math.max(0,-(o*f+s)),v=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Vo).addScaledVector(ms,f),v}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,l;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(a=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),p>=0?(s=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(s=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,a){Wo.subVectors(t,e),vs.subVectors(i,e),jo.crossVectors(Wo,vs);let o=this.direction.dot(jo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=s*this.direction.dot(vs.crossVectors(Yi,vs));if(l<0)return null;const u=s*this.direction.dot(Wo.cross(Yi));if(u<0||l+u>o)return null;const d=-s*Yi.dot(jo);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,i,r,a,o,s,l,u,d,p,f,v,g,b,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,l,u,d,p,f,v,g,b,m)}set(e,t,i,r,a,o,s,l,u,d,p,f,v,g,b,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=u,h[6]=d,h[10]=p,h[14]=f,h[3]=v,h[7]=g,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),a=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const f=o*d,v=o*p,g=s*d,b=s*p;t[0]=l*d,t[4]=-l*p,t[8]=u,t[1]=v+g*u,t[5]=f-b*u,t[9]=-s*l,t[2]=b-f*u,t[6]=g+v*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,v=l*p,g=u*d,b=u*p;t[0]=f+b*s,t[4]=g*s-v,t[8]=o*u,t[1]=o*p,t[5]=o*d,t[9]=-s,t[2]=v*s-g,t[6]=b+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,v=l*p,g=u*d,b=u*p;t[0]=f-b*s,t[4]=-o*p,t[8]=g+v*s,t[1]=v+g*s,t[5]=o*d,t[9]=b-f*s,t[2]=-o*u,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,v=o*p,g=s*d,b=s*p;t[0]=l*d,t[4]=g*u-v,t[8]=f*u+b,t[1]=l*p,t[5]=b*u+f,t[9]=v*u-g,t[2]=-u,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,v=o*u,g=s*l,b=s*u;t[0]=l*d,t[4]=b-f*p,t[8]=g*p+v,t[1]=p,t[5]=o*d,t[9]=-s*d,t[2]=-u*d,t[6]=v*p+g,t[10]=f-b*p}else if(e.order==="XZY"){const f=o*l,v=o*u,g=s*l,b=s*u;t[0]=l*d,t[4]=-p,t[8]=u*d,t[1]=f*p+b,t[5]=o*d,t[9]=v*p-g,t[2]=g*p-v,t[6]=s*d,t[10]=b*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P_,e,L_)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),qi.crossVectors(i,Pn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),qi.crossVectors(i,Pn)),qi.normalize(),gs.crossVectors(Pn,qi),r[0]=qi.x,r[4]=gs.x,r[8]=Pn.x,r[1]=qi.y,r[5]=gs.y,r[9]=Pn.y,r[2]=qi.z,r[6]=gs.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],u=i[12],d=i[1],p=i[5],f=i[9],v=i[13],g=i[2],b=i[6],m=i[10],h=i[14],M=i[3],_=i[7],E=i[11],C=i[15],D=r[0],A=r[4],k=r[8],y=r[12],w=r[1],ie=r[5],V=r[9],N=r[13],G=r[2],H=r[6],X=r[10],Q=r[14],te=r[3],me=r[7],ce=r[11],W=r[15];return a[0]=o*D+s*w+l*G+u*te,a[4]=o*A+s*ie+l*H+u*me,a[8]=o*k+s*V+l*X+u*ce,a[12]=o*y+s*N+l*Q+u*W,a[1]=d*D+p*w+f*G+v*te,a[5]=d*A+p*ie+f*H+v*me,a[9]=d*k+p*V+f*X+v*ce,a[13]=d*y+p*N+f*Q+v*W,a[2]=g*D+b*w+m*G+h*te,a[6]=g*A+b*ie+m*H+h*me,a[10]=g*k+b*V+m*X+h*ce,a[14]=g*y+b*N+m*Q+h*W,a[3]=M*D+_*w+E*G+C*te,a[7]=M*A+_*ie+E*H+C*me,a[11]=M*k+_*V+E*X+C*ce,a[15]=M*y+_*N+E*Q+C*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],d=e[2],p=e[6],f=e[10],v=e[14],g=e[3],b=e[7],m=e[11],h=e[15];return g*(+a*l*p-r*u*p-a*s*f+i*u*f+r*s*v-i*l*v)+b*(+t*l*v-t*u*f+a*o*f-r*o*v+r*u*d-a*l*d)+m*(+t*u*p-t*s*v-a*o*p+i*o*v+a*s*d-i*u*d)+h*(-r*s*d-t*l*p+t*s*f+r*o*p-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],d=e[8],p=e[9],f=e[10],v=e[11],g=e[12],b=e[13],m=e[14],h=e[15],M=p*m*u-b*f*u+b*l*v-s*m*v-p*l*h+s*f*h,_=g*f*u-d*m*u-g*l*v+o*m*v+d*l*h-o*f*h,E=d*b*u-g*p*u+g*s*v-o*b*v-d*s*h+o*p*h,C=g*p*l-d*b*l-g*s*f+o*b*f+d*s*m-o*p*m,D=t*M+i*_+r*E+a*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=M*A,e[1]=(b*f*a-p*m*a-b*r*v+i*m*v+p*r*h-i*f*h)*A,e[2]=(s*m*a-b*l*a+b*r*u-i*m*u-s*r*h+i*l*h)*A,e[3]=(p*l*a-s*f*a-p*r*u+i*f*u+s*r*v-i*l*v)*A,e[4]=_*A,e[5]=(d*m*a-g*f*a+g*r*v-t*m*v-d*r*h+t*f*h)*A,e[6]=(g*l*a-o*m*a-g*r*u+t*m*u+o*r*h-t*l*h)*A,e[7]=(o*f*a-d*l*a+d*r*u-t*f*u-o*r*v+t*l*v)*A,e[8]=E*A,e[9]=(g*p*a-d*b*a-g*i*v+t*b*v+d*i*h-t*p*h)*A,e[10]=(o*b*a-g*s*a+g*i*u-t*b*u-o*i*h+t*s*h)*A,e[11]=(d*s*a-o*p*a-d*i*u+t*p*u+o*i*v-t*s*v)*A,e[12]=C*A,e[13]=(d*b*r-g*p*r+g*i*f-t*b*f-d*i*m+t*p*m)*A,e[14]=(g*s*r-o*b*r-g*i*l+t*b*l+o*i*m-t*s*m)*A,e[15]=(o*p*r-d*s*r+d*i*l-t*p*l-o*i*f+t*s*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,u=a*o,d=a*s;return this.set(u*o+i,u*s-r*l,u*l+r*s,0,u*s+r*l,d*s+i,d*l-r*o,0,u*l-r*s,d*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,u=a+a,d=o+o,p=s+s,f=a*u,v=a*d,g=a*p,b=o*d,m=o*p,h=s*p,M=l*u,_=l*d,E=l*p,C=i.x,D=i.y,A=i.z;return r[0]=(1-(b+h))*C,r[1]=(v+E)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(v-E)*D,r[5]=(1-(f+h))*D,r[6]=(m+M)*D,r[7]=0,r[8]=(g+_)*A,r[9]=(m-M)*A,r[10]=(1-(f+b))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=kr.set(r[0],r[1],r[2]).length();const o=kr.set(r[4],r[5],r[6]).length(),s=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const u=1/a,d=1/o,p=1/s;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=d,Zn.elements[5]*=d,Zn.elements[6]*=d,Zn.elements[8]*=p,Zn.elements[9]*=p,Zn.elements[10]*=p,t.setFromRotationMatrix(Zn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Ni){const l=this.elements,u=2*a/(t-e),d=2*a/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r);let v,g;if(s===Ni)v=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===no)v=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Ni){const l=this.elements,u=1/(t-e),d=1/(i-r),p=1/(o-a),f=(t+e)*u,v=(i+r)*d;let g,b;if(s===Ni)g=(o+a)*p,b=-2*p;else if(s===no)g=a*p,b=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=b,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const kr=new q,Zn=new Vt,P_=new q(0,0,0),L_=new q(1,1,1),qi=new q,gs=new q,Pn=new q,Su=new Vt,Mu=new Tr;class mo{constructor(e=0,t=0,i=0,r=mo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],u=r[5],d=r[9],p=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(bn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(s,v));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mo.DEFAULT_ORDER="XYZ";class Bf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D_=0;const Eu=new q,Br=new Tr,Ai=new Vt,_s=new q,Ra=new q,I_=new q,U_=new Tr,wu=new q(1,0,0),Tu=new q(0,1,0),Au=new q(0,0,1),N_={type:"added"},O_={type:"removed"};class hn extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new q,t=new mo,i=new Tr,r=new q(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new vt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Au,e)}translateOnAxis(e,t){return Eu.copy(e).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ra,_s,this.up):Ai.lookAt(_s,Ra,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(Ai),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(N_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,I_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,U_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const p=l[u];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),p=o(e.shapes),f=o(e.skeletons),v=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),v.length>0&&(i.animations=v),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(s){const l=[];for(const u in s){const d=s[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new q(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new q,Ri=new q,Xo=new q,Ci=new q,zr=new q,Gr=new q,Ru=new q,Yo=new q,qo=new q,Ko=new q;let xs=!1;class jn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Jn.subVectors(r,t),Ri.subVectors(i,t),Xo.subVectors(e,t);const o=Jn.dot(Jn),s=Jn.dot(Ri),l=Jn.dot(Xo),u=Ri.dot(Ri),d=Ri.dot(Xo),p=o*u-s*s;if(p===0)return a.set(-2,-1,-1);const f=1/p,v=(u*l-s*d)*f,g=(o*d-s*l)*f;return a.set(1-v-g,g,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ci),Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,t,i,r,a,o,s,l){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),this.getInterpolation(e,t,i,r,a,o,s,l)}static getInterpolation(e,t,i,r,a,o,s,l){return this.getBarycoord(e,t,i,r,Ci),l.setScalar(0),l.addScaledVector(a,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(s,Ci.z),l}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Ri.subVectors(e,t),Jn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Jn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;zr.subVectors(r,i),Gr.subVectors(a,i),Yo.subVectors(e,i);const l=zr.dot(Yo),u=Gr.dot(Yo);if(l<=0&&u<=0)return t.copy(i);qo.subVectors(e,r);const d=zr.dot(qo),p=Gr.dot(qo);if(d>=0&&p<=d)return t.copy(r);const f=l*p-d*u;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(zr,o);Ko.subVectors(e,a);const v=zr.dot(Ko),g=Gr.dot(Ko);if(g>=0&&v<=g)return t.copy(a);const b=v*u-l*g;if(b<=0&&u>=0&&g<=0)return s=u/(u-g),t.copy(i).addScaledVector(Gr,s);const m=d*g-v*p;if(m<=0&&p-d>=0&&v-g>=0)return Ru.subVectors(a,r),s=(p-d)/(p-d+(v-g)),t.copy(r).addScaledVector(Ru,s);const h=1/(m+b+f);return o=b*h,s=f*h,t.copy(i).addScaledVector(zr,o).addScaledVector(Gr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let F_=0;class Sa extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=er(),this.name="",this.type="Material",this.blending=sa,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=Mf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sa&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Zo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=zn.workingColorSpace){return this.r=e,this.g=t,this.b=i,zn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=zn.workingColorSpace){if(e=v_(e,1),t=bn(t,0,1),i=bn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Zo(o,a,e+1/3),this.g=Zo(o,a,e),this.b=Zo(o,a,e-1/3)}return zn.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=zf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return zn.fromWorkingColorSpace(dn.copy(this),e),Math.round(bn(dn.r*255,0,255))*65536+Math.round(bn(dn.g*255,0,255))*256+Math.round(bn(dn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zn.workingColorSpace){zn.fromWorkingColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,a=dn.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,u;const d=(s+o)/2;if(s===o)l=0,u=0;else{const p=o-s;switch(u=d<=.5?p/(o+s):p/(2-o-s),o){case i:l=(r-a)/p+(r<a?6:0);break;case r:l=(a-i)/p+2;break;case a:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,t=zn.workingColorSpace){return zn.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=It){zn.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),Qn.h+=e,Qn.s+=t,Qn.l+=i,this.setHSL(Qn.h,Qn.s,Qn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(bs);const i=Oo(Qn.h,bs.h,t),r=Oo(Qn.s,bs.s,t),a=Oo(Qn.l,bs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Mt;Mt.NAMES=zf;class Gf extends Sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new q,ys=new $e;class ai{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Al,this.updateRange={offset:0,count:-1},this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),a=Tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Hf extends ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vf extends ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ki extends ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}let k_=0;const kn=new Vt,Jo=new hn,Hr=new q,Ln=new ss,Ca=new ss,rn=new q;class Vi extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uf(e)?Vf:Hf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new vt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ki(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Ln.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Ca.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(Ln.min,Ca.min),Ln.expandByPoint(rn),rn.addVectors(Ln.max,Ca.max),Ln.expandByPoint(rn)):(Ln.expandByPoint(Ca.min),Ln.expandByPoint(Ca.max))}Ln.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)rn.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let u=0,d=s.count;u<d;u++)rn.fromBufferAttribute(s,u),l&&(Hr.fromBufferAttribute(e,u),rn.add(Hr)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let w=0;w<s;w++)u[w]=new q,d[w]=new q;const p=new q,f=new q,v=new q,g=new $e,b=new $e,m=new $e,h=new q,M=new q;function _(w,ie,V){p.fromArray(r,w*3),f.fromArray(r,ie*3),v.fromArray(r,V*3),g.fromArray(o,w*2),b.fromArray(o,ie*2),m.fromArray(o,V*2),f.sub(p),v.sub(p),b.sub(g),m.sub(g);const N=1/(b.x*m.y-m.x*b.y);isFinite(N)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(v,-b.y).multiplyScalar(N),M.copy(v).multiplyScalar(b.x).addScaledVector(f,-m.x).multiplyScalar(N),u[w].add(h),u[ie].add(h),u[V].add(h),d[w].add(M),d[ie].add(M),d[V].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let w=0,ie=E.length;w<ie;++w){const V=E[w],N=V.start,G=V.count;for(let H=N,X=N+G;H<X;H+=3)_(i[H+0],i[H+1],i[H+2])}const C=new q,D=new q,A=new q,k=new q;function y(w){A.fromArray(a,w*3),k.copy(A);const ie=u[w];C.copy(ie),C.sub(A.multiplyScalar(A.dot(ie))).normalize(),D.crossVectors(k,ie);const N=D.dot(d[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=N}for(let w=0,ie=E.length;w<ie;++w){const V=E[w],N=V.start,G=V.count;for(let H=N,X=N+G;H<X;H+=3)y(i[H+0]),y(i[H+1]),y(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,v=i.count;f<v;f++)i.setXYZ(f,0,0,0);const r=new q,a=new q,o=new q,s=new q,l=new q,u=new q,d=new q,p=new q;if(e)for(let f=0,v=e.count;f<v;f+=3){const g=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),d.subVectors(o,a),p.subVectors(r,a),d.cross(p),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,m),s.add(d),l.add(d),u.add(d),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,a),p.subVectors(r,a),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(s,l){const u=s.array,d=s.itemSize,p=s.normalized,f=new u.constructor(l.length*d);let v=0,g=0;for(let b=0,m=l.length;b<m;b++){s.isInterleavedBufferAttribute?v=l[b]*s.data.stride+s.offset:v=l[b]*d;for(let h=0;h<d;h++)f[g++]=u[v++]}return new ai(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vi,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);t.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let d=0,p=u.length;d<p;d++){const f=u[d],v=e(f,i);l.push(v)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let p=0,f=u.length;p<f;p++){const v=u[p];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],p=a[u];for(let f=0,v=p.length;f<v;f++)d.push(p[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new Vt,lr=new kf,Ss=new ec,Pu=new q,Vr=new q,Wr=new q,jr=new q,Qo=new q,Ms=new q,Es=new $e,ws=new $e,Ts=new $e,Lu=new q,Du=new q,Iu=new q,As=new q,Rs=new q;class At extends hn{constructor(e=new Vi,t=new Gf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Ms.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const d=s[l],p=a[l];d!==0&&(Qo.fromBufferAttribute(p,e),o?Ms.addScaledVector(Qo,d):Ms.addScaledVector(Qo.sub(t),d))}t.add(Ms)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(a),lr.copy(e.ray).recast(e.near),!(Ss.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Ss,Pu)===null||lr.origin.distanceToSquared(Pu)>(e.far-e.near)**2))&&(Cu.copy(a).invert(),lr.copy(e.ray).applyMatrix4(Cu),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,f=a.groups,v=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,b=f.length;g<b;g++){const m=f[g],h=o[m.materialIndex],M=Math.max(m.start,v.start),_=Math.min(s.count,Math.min(m.start+m.count,v.start+v.count));for(let E=M,C=_;E<C;E+=3){const D=s.getX(E),A=s.getX(E+1),k=s.getX(E+2);r=Cs(this,h,e,i,u,d,p,D,A,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,v.start),b=Math.min(s.count,v.start+v.count);for(let m=g,h=b;m<h;m+=3){const M=s.getX(m),_=s.getX(m+1),E=s.getX(m+2);r=Cs(this,o,e,i,u,d,p,M,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=f.length;g<b;g++){const m=f[g],h=o[m.materialIndex],M=Math.max(m.start,v.start),_=Math.min(l.count,Math.min(m.start+m.count,v.start+v.count));for(let E=M,C=_;E<C;E+=3){const D=E,A=E+1,k=E+2;r=Cs(this,h,e,i,u,d,p,D,A,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,v.start),b=Math.min(l.count,v.start+v.count);for(let m=g,h=b;m<h;m+=3){const M=m,_=m+1,E=m+2;r=Cs(this,o,e,i,u,d,p,M,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function B_(n,e,t,i,r,a,o,s){let l;if(e.side===An?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===xi,s),l===null)return null;Rs.copy(s),Rs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Rs);return u<t.near||u>t.far?null:{distance:u,point:Rs.clone(),object:n}}function Cs(n,e,t,i,r,a,o,s,l,u){n.getVertexPosition(s,Vr),n.getVertexPosition(l,Wr),n.getVertexPosition(u,jr);const d=B_(n,e,t,i,Vr,Wr,jr,As);if(d){r&&(Es.fromBufferAttribute(r,s),ws.fromBufferAttribute(r,l),Ts.fromBufferAttribute(r,u),d.uv=jn.getInterpolation(As,Vr,Wr,jr,Es,ws,Ts,new $e)),a&&(Es.fromBufferAttribute(a,s),ws.fromBufferAttribute(a,l),Ts.fromBufferAttribute(a,u),d.uv1=jn.getInterpolation(As,Vr,Wr,jr,Es,ws,Ts,new $e),d.uv2=d.uv1),o&&(Lu.fromBufferAttribute(o,s),Du.fromBufferAttribute(o,l),Iu.fromBufferAttribute(o,u),d.normal=jn.getInterpolation(As,Vr,Wr,jr,Lu,Du,Iu,new q),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:s,b:l,c:u,normal:new q,materialIndex:0};jn.getNormal(Vr,Wr,jr,p.normal),d.face=p}return d}class Gt extends Vi{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],d=[],p=[];let f=0,v=0;g("z","y","x",-1,-1,i,t,e,o,a,0),g("z","y","x",1,-1,i,t,-e,o,a,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new ki(u,3)),this.setAttribute("normal",new ki(d,3)),this.setAttribute("uv",new ki(p,2));function g(b,m,h,M,_,E,C,D,A,k,y){const w=E/A,ie=C/k,V=E/2,N=C/2,G=D/2,H=A+1,X=k+1;let Q=0,te=0;const me=new q;for(let ce=0;ce<X;ce++){const W=ce*ie-N;for(let $=0;$<H;$++){const we=$*w-V;me[b]=we*M,me[m]=W*_,me[h]=G,u.push(me.x,me.y,me.z),me[b]=0,me[m]=0,me[h]=D>0?1:-1,d.push(me.x,me.y,me.z),p.push($/A),p.push(1-ce/k),Q+=1}}for(let ce=0;ce<k;ce++)for(let W=0;W<A;W++){const $=f+W+H*ce,we=f+W+H*(ce+1),Le=f+(W+1)+H*(ce+1),Oe=f+(W+1)+H*ce;l.push($,we,Oe),l.push(we,Le,Oe),te+=6}s.addGroup(v,te,y),v+=te,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ga(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=ga(n[t]);for(const r in i)e[r]=i[r]}return e}function z_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wf(n){return n.getRenderTarget()===null?n.outputColorSpace:bi}const jf={clone:ga,merge:_n};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xf extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends Xf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xr=-90,Yr=1;class V_ extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new In(Xr,Yr,e,t);r.layers=this.layers,this.add(r);const a=new In(Xr,Yr,e,t);a.layers=this.layers,this.add(a);const o=new In(Xr,Yr,e,t);o.layers=this.layers,this.add(o);const s=new In(Xr,Yr,e,t);s.layers=this.layers,this.add(s);const l=new In(Xr,Yr,e,t);l.layers=this.layers,this.add(l);const u=new In(Xr,Yr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,l]=t;for(const u of t)this.remove(u);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,l,u]=this.children,d=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Yf extends fn{constructor(e,t,i,r,a,o,s,l,u,d){e=e!==void 0?e:[],t=t!==void 0?t:ha,super(e,t,i,r,a,o,s,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W_ extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mr?It:Er),this.texture=new Yf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gt(5,5,5),a=new Gi({name:"CubemapFromEquirect",uniforms:ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:Fi});a.uniforms.tEquirect.value=t;const o=new At(r,a),s=t.minFilter;return t.minFilter===$a&&(t.minFilter=Wn),new V_(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const $o=new q,j_=new q,X_=new vt;class Ki{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$o.subVectors(i,t).cross(j_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($o),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||X_.getNormalMatrix(e),r=this.coplanarPoint($o).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new ec,Ps=new q;class tc{constructor(e=new Ki,t=new Ki,i=new Ki,r=new Ki,a=new Ki,o=new Ki){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],u=r[4],d=r[5],p=r[6],f=r[7],v=r[8],g=r[9],b=r[10],m=r[11],h=r[12],M=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-a,f-u,m-v,E-h).normalize(),i[1].setComponents(l+a,f+u,m+v,E+h).normalize(),i[2].setComponents(l+o,f+d,m+g,E+M).normalize(),i[3].setComponents(l-o,f-d,m-g,E-M).normalize(),i[4].setComponents(l-s,f-p,m-b,E-_).normalize(),t===Ni)i[5].setComponents(l+s,f+p,m+b,E+_).normalize();else if(t===no)i[5].setComponents(s,p,b,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qf(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Y_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,d){const p=u.array,f=u.usage,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,p,f),u.onUploadCallback();let g;if(p instanceof Float32Array)g=n.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=n.SHORT;else if(p instanceof Uint32Array)g=n.UNSIGNED_INT;else if(p instanceof Int32Array)g=n.INT;else if(p instanceof Int8Array)g=n.BYTE;else if(p instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function a(u,d,p){const f=d.array,v=d.updateRange;n.bindBuffer(p,u),v.count===-1?n.bufferSubData(p,0,f):(t?n.bufferSubData(p,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):n.bufferSubData(p,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(n.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);p===void 0?i.set(u,r(u,d)):p.version<u.version&&(a(p.buffer,u,d),p.version=u.version)}return{get:o,remove:s,update:l}}class nc extends Vi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(r),u=s+1,d=l+1,p=e/s,f=t/l,v=[],g=[],b=[],m=[];for(let h=0;h<d;h++){const M=h*f-o;for(let _=0;_<u;_++){const E=_*p-a;g.push(E,-M,0),b.push(0,0,1),m.push(_/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<s;M++){const _=M+u*h,E=M+u*(h+1),C=M+1+u*(h+1),D=M+1+u*h;v.push(_,E,D),v.push(E,C,D)}this.setIndex(v),this.setAttribute("position",new ki(g,3)),this.setAttribute("normal",new ki(b,3)),this.setAttribute("uv",new ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.widthSegments,e.heightSegments)}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K_=`#ifdef USE_ALPHAHASH
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
#endif`,Z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ax=`#ifdef USE_IRIDESCENCE
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
#endif`,sx=`#ifdef USE_BUMPMAP
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
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mx=`#define PI 3.141592653589793
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
} // validated`,vx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gx=`vec3 transformedNormal = objectNormal;
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
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ex=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
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
}`,Ux=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
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
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
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
#endif`,jx=`struct PhysicalMaterial {
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
}`,Xx=`
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nb=`#if defined( USE_POINTS_UV )
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
#endif`,ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ab=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,lb=`#ifdef USE_MORPHTARGETS
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
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
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
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pb=`float getShadowMask() {
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
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ub=`#ifdef USE_SKINNING
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
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`#include <common>
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
}`,Qb=`#if DEPTH_PACKING == 3200
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
}`,$b=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,s0=`uniform vec3 diffuse;
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,g0=`#define TOON
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
}`,_0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:q_,alphahash_pars_fragment:K_,alphamap_fragment:Z_,alphamap_pars_fragment:J_,alphatest_fragment:Q_,alphatest_pars_fragment:$_,aomap_fragment:ex,aomap_pars_fragment:tx,begin_vertex:nx,beginnormal_vertex:ix,bsdfs:rx,iridescence_fragment:ax,bumpmap_pars_fragment:sx,clipping_planes_fragment:ox,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:cx,clipping_planes_vertex:ux,color_fragment:dx,color_pars_fragment:fx,color_pars_vertex:hx,color_vertex:px,common:mx,cube_uv_reflection_fragment:vx,defaultnormal_vertex:gx,displacementmap_pars_vertex:_x,displacementmap_vertex:xx,emissivemap_fragment:bx,emissivemap_pars_fragment:yx,colorspace_fragment:Sx,colorspace_pars_fragment:Mx,envmap_fragment:Ex,envmap_common_pars_fragment:wx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Bx,envmap_vertex:Rx,fog_vertex:Cx,fog_pars_vertex:Px,fog_fragment:Lx,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ix,lightmap_fragment:Ux,lightmap_pars_fragment:Nx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Fx,lights_pars_begin:kx,lights_toon_fragment:zx,lights_toon_pars_fragment:Gx,lights_phong_fragment:Hx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Wx,lights_physical_pars_fragment:jx,lights_fragment_begin:Xx,lights_fragment_maps:Yx,lights_fragment_end:qx,logdepthbuf_fragment:Kx,logdepthbuf_pars_fragment:Zx,logdepthbuf_pars_vertex:Jx,logdepthbuf_vertex:Qx,map_fragment:$x,map_pars_fragment:eb,map_particle_fragment:tb,map_particle_pars_fragment:nb,metalnessmap_fragment:ib,metalnessmap_pars_fragment:rb,morphcolor_vertex:ab,morphnormal_vertex:sb,morphtarget_pars_vertex:ob,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:ub,normal_pars_fragment:db,normal_pars_vertex:fb,normal_vertex:hb,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:vb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:_b,opaque_fragment:xb,packing:bb,premultiplied_alpha_fragment:yb,project_vertex:Sb,dithering_fragment:Mb,dithering_pars_fragment:Eb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Tb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:Rb,shadowmap_vertex:Cb,shadowmask_pars_fragment:Pb,skinbase_vertex:Lb,skinning_pars_vertex:Db,skinning_vertex:Ib,skinnormal_vertex:Ub,specularmap_fragment:Nb,specularmap_pars_fragment:Ob,tonemapping_fragment:Fb,tonemapping_pars_fragment:kb,transmission_fragment:Bb,transmission_pars_fragment:zb,uv_pars_fragment:Gb,uv_pars_vertex:Hb,uv_vertex:Vb,worldpos_vertex:Wb,background_vert:jb,background_frag:Xb,backgroundCube_vert:Yb,backgroundCube_frag:qb,cube_vert:Kb,cube_frag:Zb,depth_vert:Jb,depth_frag:Qb,distanceRGBA_vert:$b,distanceRGBA_frag:e0,equirect_vert:t0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:r0,meshbasic_vert:a0,meshbasic_frag:s0,meshlambert_vert:o0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:u0,meshnormal_vert:d0,meshnormal_frag:f0,meshphong_vert:h0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:v0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:x0,points_frag:b0,shadow_vert:y0,shadow_frag:S0,sprite_vert:M0,sprite_frag:E0},je={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},di={basic:{uniforms:_n([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:_n([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Mt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:_n([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:_n([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:_n([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new Mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:_n([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:_n([je.points,je.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:_n([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:_n([je.common,je.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:_n([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:_n([je.sprite,je.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:_n([je.common,je.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:_n([je.lights,je.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};di.physical={uniforms:_n([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ls={r:0,b:0,g:0};function w0(n,e,t,i,r,a,o){const s=new Mt(0);let l=a===!0?0:1,u,d,p=null,f=0,v=null;function g(m,h){let M=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?b(s,l):_&&_.isColor&&(b(_,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ho)?(d===void 0&&(d=new At(new Gt(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:ga(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=_.colorSpace!==It,(p!==_||f!==_.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,p=_,f=_.version,v=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new At(new nc(2,2),new Gi({name:"BackgroundMaterial",uniforms:ga(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=_.colorSpace!==It,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||f!==_.version||v!==n.toneMapping)&&(u.material.needsUpdate=!0,p=_,f=_.version,v=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function b(m,h){m.getRGB(Ls,Wf(n)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(m,h=1){s.set(m),l=h,b(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,b(s,l)},render:g}}function T0(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let u=l,d=!1;function p(G,H,X,Q,te){let me=!1;if(o){const ce=b(Q,X,H);u!==ce&&(u=ce,v(u.object)),me=h(G,Q,X,te),me&&M(G,Q,X,te)}else{const ce=H.wireframe===!0;(u.geometry!==Q.id||u.program!==X.id||u.wireframe!==ce)&&(u.geometry=Q.id,u.program=X.id,u.wireframe=ce,me=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(me||d)&&(d=!1,k(G,H,X,Q),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function f(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function v(G){return i.isWebGL2?n.bindVertexArray(G):a.bindVertexArrayOES(G)}function g(G){return i.isWebGL2?n.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function b(G,H,X){const Q=X.wireframe===!0;let te=s[G.id];te===void 0&&(te={},s[G.id]=te);let me=te[H.id];me===void 0&&(me={},te[H.id]=me);let ce=me[Q];return ce===void 0&&(ce=m(f()),me[Q]=ce),ce}function m(G){const H=[],X=[],Q=[];for(let te=0;te<r;te++)H[te]=0,X[te]=0,Q[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:Q,object:G,attributes:{},index:null}}function h(G,H,X,Q){const te=u.attributes,me=H.attributes;let ce=0;const W=X.getAttributes();for(const $ in W)if(W[$].location>=0){const Le=te[$];let Oe=me[$];if(Oe===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(Oe=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(Oe=G.instanceColor)),Le===void 0||Le.attribute!==Oe||Oe&&Le.data!==Oe.data)return!0;ce++}return u.attributesNum!==ce||u.index!==Q}function M(G,H,X,Q){const te={},me=H.attributes;let ce=0;const W=X.getAttributes();for(const $ in W)if(W[$].location>=0){let Le=me[$];Le===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(Le=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(Le=G.instanceColor));const Oe={};Oe.attribute=Le,Le&&Le.data&&(Oe.data=Le.data),te[$]=Oe,ce++}u.attributes=te,u.attributesNum=ce,u.index=Q}function _(){const G=u.newAttributes;for(let H=0,X=G.length;H<X;H++)G[H]=0}function E(G){C(G,0)}function C(G,H){const X=u.newAttributes,Q=u.enabledAttributes,te=u.attributeDivisors;X[G]=1,Q[G]===0&&(n.enableVertexAttribArray(G),Q[G]=1),te[G]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,H),te[G]=H)}function D(){const G=u.newAttributes,H=u.enabledAttributes;for(let X=0,Q=H.length;X<Q;X++)H[X]!==G[X]&&(n.disableVertexAttribArray(X),H[X]=0)}function A(G,H,X,Q,te,me,ce){ce===!0?n.vertexAttribIPointer(G,H,X,te,me):n.vertexAttribPointer(G,H,X,Q,te,me)}function k(G,H,X,Q){if(i.isWebGL2===!1&&(G.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const te=Q.attributes,me=X.getAttributes(),ce=H.defaultAttributeValues;for(const W in me){const $=me[W];if($.location>=0){let we=te[W];if(we===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(we=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(we=G.instanceColor)),we!==void 0){const Le=we.normalized,Oe=we.itemSize,ze=t.get(we);if(ze===void 0)continue;const We=ze.buffer,He=ze.type,_e=ze.bytesPerElement,Ge=i.isWebGL2===!0&&(He===n.INT||He===n.UNSIGNED_INT||we.gpuType===Tf);if(we.isInterleavedBufferAttribute){const Be=we.data,z=Be.stride,qe=we.offset;if(Be.isInstancedInterleavedBuffer){for(let Ie=0;Ie<$.locationSize;Ie++)C($.location+Ie,Be.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Ie=0;Ie<$.locationSize;Ie++)E($.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Ie=0;Ie<$.locationSize;Ie++)A($.location+Ie,Oe/$.locationSize,He,Le,z*_e,(qe+Oe/$.locationSize*Ie)*_e,Ge)}else{if(we.isInstancedBufferAttribute){for(let Be=0;Be<$.locationSize;Be++)C($.location+Be,we.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Be=0;Be<$.locationSize;Be++)E($.location+Be);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Be=0;Be<$.locationSize;Be++)A($.location+Be,Oe/$.locationSize,He,Le,Oe*_e,Oe/$.locationSize*Be*_e,Ge)}}else if(ce!==void 0){const Le=ce[W];if(Le!==void 0)switch(Le.length){case 2:n.vertexAttrib2fv($.location,Le);break;case 3:n.vertexAttrib3fv($.location,Le);break;case 4:n.vertexAttrib4fv($.location,Le);break;default:n.vertexAttrib1fv($.location,Le)}}}}D()}function y(){V();for(const G in s){const H=s[G];for(const X in H){const Q=H[X];for(const te in Q)g(Q[te].object),delete Q[te];delete H[X]}delete s[G]}}function w(G){if(s[G.id]===void 0)return;const H=s[G.id];for(const X in H){const Q=H[X];for(const te in Q)g(Q[te].object),delete Q[te];delete H[X]}delete s[G.id]}function ie(G){for(const H in s){const X=s[H];if(X[G.id]===void 0)continue;const Q=X[G.id];for(const te in Q)g(Q[te].object),delete Q[te];delete X[G.id]}}function V(){N(),d=!0,u!==l&&(u=l,v(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:V,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:ie,initAttributes:_,enableAttribute:E,disableUnusedAttributes:D}}function A0(n,e,t,i){const r=i.isWebGL2;let a;function o(u){a=u}function s(u,d){n.drawArrays(a,u,d),t.update(d,a,1)}function l(u,d,p){if(p===0)return;let f,v;if(r)f=n,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](a,u,d,p),t.update(d,a,p)}this.setMode=o,this.render=s,this.renderInstances=l}function R0(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),b=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,E=o||e.has("OES_texture_float"),C=_&&E,D=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:D}}function C0(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new Ki,s=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const v=p.length!==0||f||i!==0||r;return r=f,i=p.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,f){t=d(p,f,0)},this.setState=function(p,f,v){const g=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,h=n.get(p);if(!r||g===null||g.length===0||a&&!m)a?d(null):u();else{const M=a?0:i,_=M*4;let E=h.clippingState||null;l.value=E,E=d(g,f,_,v);for(let C=0;C!==_;++C)E[C]=t[C];h.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,v,g){const b=p!==null?p.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const h=v+b*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,E=v;_!==b;++_,E+=4)o.copy(p[_]).applyMatrix4(M,s),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function P0(n){let e=new WeakMap;function t(o,s){return s===to?o.mapping=ha:s===El&&(o.mapping=pa),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===to||s===El)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new W_(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Kf extends Xf{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ea=4,Uu=[.125,.215,.35,.446,.526,.582],pr=20,el=new Kf,Nu=new Mt;let tl=null;const fr=(1+Math.sqrt(5))/2,qr=1/fr,Ou=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,fr,qr),new q(0,fr,-qr),new q(qr,0,fr),new q(-qr,0,fr),new q(fr,qr,0),new q(-fr,qr,0)];class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tl=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl),e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ha||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:ma,format:ei,colorSpace:bi,depthBuffer:!1},r=ku(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(a)),this._blurMaterial=D0(a,e,t)}return r}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,i,r){const s=new In(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,f=d.toneMapping;d.getClearColor(Nu),d.toneMapping=Qi,d.autoClear=!1;const v=new Gf({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new At(new Gt,v);let b=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,b=!0):(v.color.copy(Nu),b=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(s.up.set(0,l[h],0),s.lookAt(u[h],0,0)):M===1?(s.up.set(0,0,l[h]),s.lookAt(0,u[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,u[h]));const _=this._cubeSize;Ds(r,M*_,h>2?_:0,_,_),d.setRenderTarget(r),b&&d.render(g,s),d.render(e,s)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=p,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ha||e.mapping===pa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,el)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ou[(r-1)%Ou.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new At(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*pr-1),b=a/g,m=isFinite(a)?1+Math.floor(d*b):pr;m>pr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const h=[];let M=0;for(let A=0;A<pr;++A){const k=A/b,y=Math.exp(-k*k/2);h.push(y),A===0?M+=y:A<m&&(M+=2*y)}for(let A=0;A<h.length;A++)h[A]=h[A]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const E=this._sizeLods[r],C=3*E*(r>_-ea?r-_+ea:0),D=4*(this._cubeSize-E);Ds(t,C,D,3*E,2*E),l.setRenderTarget(t),l.render(p,el)}}function L0(n){const e=[],t=[],i=[];let r=n;const a=n-ea+1+Uu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>n-ea?l=Uu[o-n+ea-1]:o===0&&(l=0),i.push(l);const u=1/(s-2),d=-u,p=1+u,f=[d,d,p,d,p,p,d,d,p,p,d,p],v=6,g=6,b=3,m=2,h=1,M=new Float32Array(b*g*v),_=new Float32Array(m*g*v),E=new Float32Array(h*g*v);for(let D=0;D<v;D++){const A=D%3*2/3-1,k=D>2?0:-1,y=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];M.set(y,b*g*D),_.set(f,m*g*D);const w=[D,D,D,D,D,D];E.set(w,h*g*D)}const C=new Vi;C.setAttribute("position",new ai(M,b)),C.setAttribute("uv",new ai(_,m)),C.setAttribute("faceIndex",new ai(E,h)),e.push(C),r>ea&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ku(n,e,t){const i=new zi(n,e,t);return i.texture.mapping=ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function D0(n,e,t){const i=new Float32Array(pr),r=new q(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Bu(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function zu(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function I0(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===to||l===El,d=l===ha||l===pa;if(u||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let p=e.get(s);return t===null&&(t=new Fu(n)),p=u?t.fromEquirectangular(s,p):t.fromCubemap(s,p),e.set(s,p),p.texture}else{if(e.has(s))return e.get(s).texture;{const p=s.image;if(u&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new Fu(n));const f=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let l=0;const u=6;for(let d=0;d<u;d++)s[d]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function U0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function N0(n,e,t,i){const r={},a=new WeakMap;function o(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const b=f.morphAttributes[g];for(let m=0,h=b.length;m<h;m++)e.remove(b[m])}f.removeEventListener("dispose",o),delete r[f.id];const v=a.get(f);v&&(e.remove(v),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(p,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(p){const f=p.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const v=p.morphAttributes;for(const g in v){const b=v[g];for(let m=0,h=b.length;m<h;m++)e.update(b[m],n.ARRAY_BUFFER)}}function u(p){const f=[],v=p.index,g=p.attributes.position;let b=0;if(v!==null){const M=v.array;b=v.version;for(let _=0,E=M.length;_<E;_+=3){const C=M[_+0],D=M[_+1],A=M[_+2];f.push(C,D,D,A,A,C)}}else if(g!==void 0){const M=g.array;b=g.version;for(let _=0,E=M.length/3-1;_<E;_+=3){const C=_+0,D=_+1,A=_+2;f.push(C,D,D,A,A,C)}}else return;const m=new(Uf(f)?Vf:Hf)(f,1);m.version=b;const h=a.get(p);h&&e.remove(h),a.set(p,m)}function d(p){const f=a.get(p);if(f){const v=p.index;v!==null&&f.version<v.version&&u(p)}else u(p);return a.get(p)}return{get:s,update:l,getWireframeAttribute:d}}function O0(n,e,t,i){const r=i.isWebGL2;let a;function o(f){a=f}let s,l;function u(f){s=f.type,l=f.bytesPerElement}function d(f,v){n.drawElements(a,v,s,f*l),t.update(v,a,1)}function p(f,v,g){if(g===0)return;let b,m;if(r)b=n,m="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[m](a,v,s,f*l,g),t.update(v,a,g)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=p}function F0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function k0(n,e){return n[0]-e[0]}function B0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function z0(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new Ut,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,d,p){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=g!==void 0?g.length:0;let m=a.get(d);if(m===void 0||m.count!==b){let H=function(){N.dispose(),a.delete(d),d.removeEventListener("dispose",H)};var v=H;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,D=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let y=0;_===!0&&(y=1),E===!0&&(y=2),C===!0&&(y=3);let w=d.attributes.position.count*y,ie=1;w>e.maxTextureSize&&(ie=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const V=new Float32Array(w*ie*4*b),N=new Ff(V,w,ie,b);N.type=Ui,N.needsUpdate=!0;const G=y*4;for(let X=0;X<b;X++){const Q=D[X],te=A[X],me=k[X],ce=w*ie*4*X;for(let W=0;W<Q.count;W++){const $=W*G;_===!0&&(o.fromBufferAttribute(Q,W),V[ce+$+0]=o.x,V[ce+$+1]=o.y,V[ce+$+2]=o.z,V[ce+$+3]=0),E===!0&&(o.fromBufferAttribute(te,W),V[ce+$+4]=o.x,V[ce+$+5]=o.y,V[ce+$+6]=o.z,V[ce+$+7]=0),C===!0&&(o.fromBufferAttribute(me,W),V[ce+$+8]=o.x,V[ce+$+9]=o.y,V[ce+$+10]=o.z,V[ce+$+11]=me.itemSize===4?o.w:1)}}m={count:b,texture:N,size:new $e(w,ie)},a.set(d,m),d.addEventListener("dispose",H)}let h=0;for(let _=0;_<f.length;_++)h+=f[_];const M=d.morphTargetsRelative?1:1-h;p.getUniforms().setValue(n,"morphTargetBaseInfluence",M),p.getUniforms().setValue(n,"morphTargetInfluences",f),p.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let b=i[d.id];if(b===void 0||b.length!==g){b=[];for(let E=0;E<g;E++)b[E]=[E,0];i[d.id]=b}for(let E=0;E<g;E++){const C=b[E];C[0]=E,C[1]=f[E]}b.sort(B0);for(let E=0;E<8;E++)E<g&&b[E][1]?(s[E][0]=b[E][0],s[E][1]=b[E][1]):(s[E][0]=Number.MAX_SAFE_INTEGER,s[E][1]=0);s.sort(k0);const m=d.morphAttributes.position,h=d.morphAttributes.normal;let M=0;for(let E=0;E<8;E++){const C=s[E],D=C[0],A=C[1];D!==Number.MAX_SAFE_INTEGER&&A?(m&&d.getAttribute("morphTarget"+E)!==m[D]&&d.setAttribute("morphTarget"+E,m[D]),h&&d.getAttribute("morphNormal"+E)!==h[D]&&d.setAttribute("morphNormal"+E,h[D]),r[E]=A,M+=A):(m&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),h&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),r[E]=0)}const _=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(n,"morphTargetBaseInfluence",_),p.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function G0(n,e,t,i){let r=new WeakMap;function a(l){const u=i.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return p}function o(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Zf=new fn,Jf=new Ff,Qf=new R_,$f=new Yf,Gu=[],Hu=[],Vu=new Float32Array(16),Wu=new Float32Array(9),ju=new Float32Array(4);function Ma(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Gu[r];if(a===void 0&&(a=new Float32Array(r),Gu[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vo(n,e){let t=Hu[e];t===void 0&&(t=new Int32Array(e),Hu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function H0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function V0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function W0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function j0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function X0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;ju.set(i),n.uniformMatrix2fv(this.addr,!1,ju),tn(t,i)}}function Y0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Wu.set(i),n.uniformMatrix3fv(this.addr,!1,Wu),tn(t,i)}}function q0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Vu.set(i),n.uniformMatrix4fv(this.addr,!1,Vu),tn(t,i)}}function K0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function $0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function iy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Zf,r)}function ry(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qf,r)}function ay(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||$f,r)}function sy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jf,r)}function oy(n){switch(n){case 5126:return H0;case 35664:return V0;case 35665:return W0;case 35666:return j0;case 35674:return X0;case 35675:return Y0;case 35676:return q0;case 5124:case 35670:return K0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return $0;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return sy}}function ly(n,e){n.uniform1fv(this.addr,e)}function cy(n,e){const t=Ma(e,this.size,2);n.uniform2fv(this.addr,t)}function uy(n,e){const t=Ma(e,this.size,3);n.uniform3fv(this.addr,t)}function dy(n,e){const t=Ma(e,this.size,4);n.uniform4fv(this.addr,t)}function fy(n,e){const t=Ma(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hy(n,e){const t=Ma(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function py(n,e){const t=Ma(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function my(n,e){n.uniform1iv(this.addr,e)}function vy(n,e){n.uniform2iv(this.addr,e)}function gy(n,e){n.uniform3iv(this.addr,e)}function _y(n,e){n.uniform4iv(this.addr,e)}function xy(n,e){n.uniform1uiv(this.addr,e)}function by(n,e){n.uniform2uiv(this.addr,e)}function yy(n,e){n.uniform3uiv(this.addr,e)}function Sy(n,e){n.uniform4uiv(this.addr,e)}function My(n,e,t){const i=this.cache,r=e.length,a=vo(t,r);en(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zf,a[o])}function Ey(n,e,t){const i=this.cache,r=e.length,a=vo(t,r);en(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qf,a[o])}function wy(n,e,t){const i=this.cache,r=e.length,a=vo(t,r);en(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||$f,a[o])}function Ty(n,e,t){const i=this.cache,r=e.length,a=vo(t,r);en(i,a)||(n.uniform1iv(this.addr,a),tn(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jf,a[o])}function Ay(n){switch(n){case 5126:return ly;case 35664:return cy;case 35665:return uy;case 35666:return dy;case 35674:return fy;case 35675:return hy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return vy;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return xy;case 36294:return by;case 36295:return yy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ty}}class Ry{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=oy(t.type)}}class Cy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Ay(t.type)}}class Py{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function Xu(n,e){n.seq.push(e),n.map[e.id]=e}function Ly(n,e,t){const i=n.name,r=i.length;for(nl.lastIndex=0;;){const a=nl.exec(i),o=nl.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===r){Xu(t,u===void 0?new Ry(s,n,e):new Cy(s,n,e));break}else{let p=t.map[s];p===void 0&&(p=new Py(s),Xu(t,p)),t=p}}}class Vs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Ly(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Yu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Dy=0;function Iy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Uy(n){switch(n){case bi:return["Linear","( value )"];case It:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function qu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Iy(n.getShaderSource(e),o)}else return r}function Ny(n,e){const t=Uy(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Oy(n,e){let t;switch(e){case Vg:t="Linear";break;case Wg:t="Reinhard";break;case jg:t="OptimizedCineon";break;case Xg:t="ACESFilmic";break;case Yg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ba).join(`
`)}function ky(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function By(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Ba(n){return n!==""}function Ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(n){return n.replace(zy,Hy)}const Gy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hy(n,e){let t=pt[e];if(t===void 0){const i=Gy.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ll(t)}const Vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(n){return n.replace(Vy,Wy)}function Wy(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Qu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Xy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ha:case pa:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===pa&&(e="ENVMAP_MODE_REFRACTION"),e}function qy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ef:e="ENVMAP_BLENDING_MULTIPLY";break;case Gg:e="ENVMAP_BLENDING_MIX";break;case Hg:e="ENVMAP_BLENDING_ADD";break}return e}function Ky(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Zy(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=jy(t),u=Xy(t),d=Yy(t),p=qy(t),f=Ky(t),v=t.isWebGL2?"":Fy(t),g=ky(a),b=r.createProgram();let m,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ba).join(`
`),m.length>0&&(m+=`
`),h=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ba).join(`
`),h.length>0&&(h+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),h=[v,Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?Oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Ny("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),o=Ll(o),o=Ku(o,t),o=Zu(o,t),s=Ll(s),s=Ku(s,t),s=Zu(s,t),o=Ju(o),s=Ju(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=M+m+o,E=M+h+s,C=Yu(r,r.VERTEX_SHADER,_),D=Yu(r,r.FRAGMENT_SHADER,E);if(r.attachShader(b,C),r.attachShader(b,D),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),n.debug.checkShaderErrors){const y=r.getProgramInfoLog(b).trim(),w=r.getShaderInfoLog(C).trim(),ie=r.getShaderInfoLog(D).trim();let V=!0,N=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,C,D);else{const G=qu(r,C,"vertex"),H=qu(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+G+`
`+H)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(w===""||ie==="")&&(N=!1);N&&(this.diagnostics={runnable:V,programLog:y,vertexShader:{log:w,prefix:m},fragmentShader:{log:ie,prefix:h}})}r.deleteShader(C),r.deleteShader(D);let A;this.getUniforms=function(){return A===void 0&&(A=new Vs(r,b)),A};let k;return this.getAttributes=function(){return k===void 0&&(k=By(r,b)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dy++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=D,this}let Jy=0;class Qy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $y(e),t.set(e,i)),i}}class $y{constructor(e){this.id=Jy++,this.code=e,this.usedTimes=0}}function eS(n,e,t,i,r,a,o){const s=new Bf,l=new Qy,u=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return y===0?"uv":`uv${y}`}function m(y,w,ie,V,N){const G=V.fog,H=N.geometry,X=y.isMeshStandardMaterial?V.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),te=Q&&Q.mapping===ho?Q.image.height:null,me=g[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,W=ce!==void 0?ce.length:0;let $=0;H.morphAttributes.position!==void 0&&($=1),H.morphAttributes.normal!==void 0&&($=2),H.morphAttributes.color!==void 0&&($=3);let we,Le,Oe,ze;if(me){const le=di[me];we=le.vertexShader,Le=le.fragmentShader}else we=y.vertexShader,Le=y.fragmentShader,l.update(y),Oe=l.getVertexShaderID(y),ze=l.getFragmentShaderID(y);const We=n.getRenderTarget(),He=N.isInstancedMesh===!0,_e=!!y.map,Ge=!!y.matcap,Be=!!Q,z=!!y.aoMap,qe=!!y.lightMap,Ie=!!y.bumpMap,O=!!y.normalMap,Z=!!y.displacementMap,be=!!y.emissiveMap,Ae=!!y.metalnessMap,De=!!y.roughnessMap,de=y.anisotropy>0,Fe=y.clearcoat>0,ke=y.iridescence>0,R=y.sheen>0,S=y.transmission>0,I=de&&!!y.anisotropyMap,K=Fe&&!!y.clearcoatMap,ne=Fe&&!!y.clearcoatNormalMap,xe=Fe&&!!y.clearcoatRoughnessMap,Te=ke&&!!y.iridescenceMap,Se=ke&&!!y.iridescenceThicknessMap,J=R&&!!y.sheenColorMap,P=R&&!!y.sheenRoughnessMap,se=!!y.specularMap,ye=!!y.specularColorMap,Ce=!!y.specularIntensityMap,Ne=S&&!!y.transmissionMap,Qe=S&&!!y.thicknessMap,at=!!y.gradientMap,F=!!y.alphaMap,Ee=y.alphaTest>0,B=!!y.alphaHash,ve=!!y.extensions,Re=!!H.attributes.uv1,Je=!!H.attributes.uv2,nt=!!H.attributes.uv3;let st=Qi;return y.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:d,shaderID:me,shaderType:y.type,shaderName:y.name,vertexShader:we,fragmentShader:Le,defines:y.defines,customVertexShaderID:Oe,customFragmentShaderID:ze,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,instancing:He,instancingColor:He&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:We===null?n.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:bi,map:_e,matcap:Ge,envMap:Be,envMapMode:Be&&Q.mapping,envMapCubeUVHeight:te,aoMap:z,lightMap:qe,bumpMap:Ie,normalMap:O,displacementMap:f&&Z,emissiveMap:be,normalMapObjectSpace:O&&y.normalMapType===s_,normalMapTangentSpace:O&&y.normalMapType===If,metalnessMap:Ae,roughnessMap:De,anisotropy:de,anisotropyMap:I,clearcoat:Fe,clearcoatMap:K,clearcoatNormalMap:ne,clearcoatRoughnessMap:xe,iridescence:ke,iridescenceMap:Te,iridescenceThicknessMap:Se,sheen:R,sheenColorMap:J,sheenRoughnessMap:P,specularMap:se,specularColorMap:ye,specularIntensityMap:Ce,transmission:S,transmissionMap:Ne,thicknessMap:Qe,gradientMap:at,opaque:y.transparent===!1&&y.blending===sa,alphaMap:F,alphaTest:Ee,alphaHash:B,combine:y.combine,mapUv:_e&&b(y.map.channel),aoMapUv:z&&b(y.aoMap.channel),lightMapUv:qe&&b(y.lightMap.channel),bumpMapUv:Ie&&b(y.bumpMap.channel),normalMapUv:O&&b(y.normalMap.channel),displacementMapUv:Z&&b(y.displacementMap.channel),emissiveMapUv:be&&b(y.emissiveMap.channel),metalnessMapUv:Ae&&b(y.metalnessMap.channel),roughnessMapUv:De&&b(y.roughnessMap.channel),anisotropyMapUv:I&&b(y.anisotropyMap.channel),clearcoatMapUv:K&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:J&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:P&&b(y.sheenRoughnessMap.channel),specularMapUv:se&&b(y.specularMap.channel),specularColorMapUv:ye&&b(y.specularColorMap.channel),specularIntensityMapUv:Ce&&b(y.specularIntensityMap.channel),transmissionMapUv:Ne&&b(y.transmissionMap.channel),thicknessMapUv:Qe&&b(y.thicknessMap.channel),alphaMapUv:F&&b(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(O||de),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Je,vertexUv3s:nt,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(_e||F),fog:!!G,useFog:y.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&ie.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:_e&&y.map.isVideoTexture===!0&&y.map.colorSpace===It,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xn,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ve&&y.extensions.derivatives===!0,extensionFragDepth:ve&&y.extensions.fragDepth===!0,extensionDrawBuffers:ve&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const ie in y.defines)w.push(ie),w.push(y.defines[ie]);return y.isRawShaderMaterial===!1&&(M(w,y),_(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function M(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),y.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),y.push(s.mask)}function E(y){const w=g[y.type];let ie;if(w){const V=di[w];ie=jf.clone(V.uniforms)}else ie=y.uniforms;return ie}function C(y,w){let ie;for(let V=0,N=u.length;V<N;V++){const G=u[V];if(G.cacheKey===w){ie=G,++ie.usedTimes;break}}return ie===void 0&&(ie=new Zy(n,w,y,a),u.push(ie)),ie}function D(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:C,releaseProgram:D,releaseShaderCache:A,programs:u,dispose:k}}function tS(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function nS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ed(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(p,f,v,g,b,m){let h=n[e];return h===void 0?(h={id:p.id,object:p,geometry:f,material:v,groupOrder:g,renderOrder:p.renderOrder,z:b,group:m},n[e]=h):(h.id=p.id,h.object=p,h.geometry=f,h.material=v,h.groupOrder=g,h.renderOrder=p.renderOrder,h.z=b,h.group=m),e++,h}function s(p,f,v,g,b,m){const h=o(p,f,v,g,b,m);v.transmission>0?i.push(h):v.transparent===!0?r.push(h):t.push(h)}function l(p,f,v,g,b,m){const h=o(p,f,v,g,b,m);v.transmission>0?i.unshift(h):v.transparent===!0?r.unshift(h):t.unshift(h)}function u(p,f){t.length>1&&t.sort(p||nS),i.length>1&&i.sort(f||$u),r.length>1&&r.sort(f||$u)}function d(){for(let p=e,f=n.length;p<f;p++){const v=n[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:d,sort:u}}function iS(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new ed,n.set(i,[o])):r>=a.length?(o=new ed,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Mt};break;case"SpotLight":t={position:new q,direction:new q,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function aS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sS=0;function oS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lS(n,e){const t=new rS,i=aS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new q);const a=new q,o=new Vt,s=new Vt;function l(d,p){let f=0,v=0,g=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let b=0,m=0,h=0,M=0,_=0,E=0,C=0,D=0,A=0,k=0;d.sort(oS);const y=p===!0?Math.PI:1;for(let ie=0,V=d.length;ie<V;ie++){const N=d[ie],G=N.color,H=N.intensity,X=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=G.r*H*y,v+=G.g*H*y,g+=G.b*H*y;else if(N.isLightProbe)for(let te=0;te<9;te++)r.probe[te].addScaledVector(N.sh.coefficients[te],H);else if(N.isDirectionalLight){const te=t.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity*y),N.castShadow){const me=N.shadow,ce=i.get(N);ce.shadowBias=me.bias,ce.shadowNormalBias=me.normalBias,ce.shadowRadius=me.radius,ce.shadowMapSize=me.mapSize,r.directionalShadow[b]=ce,r.directionalShadowMap[b]=Q,r.directionalShadowMatrix[b]=N.shadow.matrix,E++}r.directional[b]=te,b++}else if(N.isSpotLight){const te=t.get(N);te.position.setFromMatrixPosition(N.matrixWorld),te.color.copy(G).multiplyScalar(H*y),te.distance=X,te.coneCos=Math.cos(N.angle),te.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),te.decay=N.decay,r.spot[h]=te;const me=N.shadow;if(N.map&&(r.spotLightMap[A]=N.map,A++,me.updateMatrices(N),N.castShadow&&k++),r.spotLightMatrix[h]=me.matrix,N.castShadow){const ce=i.get(N);ce.shadowBias=me.bias,ce.shadowNormalBias=me.normalBias,ce.shadowRadius=me.radius,ce.shadowMapSize=me.mapSize,r.spotShadow[h]=ce,r.spotShadowMap[h]=Q,D++}h++}else if(N.isRectAreaLight){const te=t.get(N);te.color.copy(G).multiplyScalar(H),te.halfWidth.set(N.width*.5,0,0),te.halfHeight.set(0,N.height*.5,0),r.rectArea[M]=te,M++}else if(N.isPointLight){const te=t.get(N);if(te.color.copy(N.color).multiplyScalar(N.intensity*y),te.distance=N.distance,te.decay=N.decay,N.castShadow){const me=N.shadow,ce=i.get(N);ce.shadowBias=me.bias,ce.shadowNormalBias=me.normalBias,ce.shadowRadius=me.radius,ce.shadowMapSize=me.mapSize,ce.shadowCameraNear=me.camera.near,ce.shadowCameraFar=me.camera.far,r.pointShadow[m]=ce,r.pointShadowMap[m]=Q,r.pointShadowMatrix[m]=N.shadow.matrix,C++}r.point[m]=te,m++}else if(N.isHemisphereLight){const te=t.get(N);te.skyColor.copy(N.color).multiplyScalar(H*y),te.groundColor.copy(N.groundColor).multiplyScalar(H*y),r.hemi[_]=te,_++}}M>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=je.LTC_FLOAT_1,r.rectAreaLTC2=je.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=je.LTC_HALF_1,r.rectAreaLTC2=je.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==b||w.pointLength!==m||w.spotLength!==h||w.rectAreaLength!==M||w.hemiLength!==_||w.numDirectionalShadows!==E||w.numPointShadows!==C||w.numSpotShadows!==D||w.numSpotMaps!==A)&&(r.directional.length=b,r.spot.length=h,r.rectArea.length=M,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=D+A-k,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=k,w.directionalLength=b,w.pointLength=m,w.spotLength=h,w.rectAreaLength=M,w.hemiLength=_,w.numDirectionalShadows=E,w.numPointShadows=C,w.numSpotShadows=D,w.numSpotMaps=A,r.version=sS++)}function u(d,p){let f=0,v=0,g=0,b=0,m=0;const h=p.matrixWorldInverse;for(let M=0,_=d.length;M<_;M++){const E=d[M];if(E.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(h),f++}else if(E.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(h),g++}else if(E.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(h),s.identity(),o.copy(E.matrixWorld),o.premultiply(h),s.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),b++}else if(E.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(h),v++}else if(E.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function td(n,e){const t=new lS(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(p){i.push(p)}function s(p){r.push(p)}function l(p){t.setup(i,p)}function u(p){t.setupView(i,p)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function cS(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new td(n,e),t.set(a,[l])):o>=s.length?(l=new td(n,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class uS extends Sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dS extends Sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hS=`uniform sampler2D shadow_pass;
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
}`;function pS(n,e,t){let i=new tc;const r=new $e,a=new $e,o=new Ut,s=new uS({depthPacking:a_}),l=new dS,u={},d=t.maxTextureSize,p={[xi]:An,[An]:xi,[Xn]:Xn},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:fS,fragmentShader:hS}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const g=new Vi;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new At(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yf;let h=this.type;this.render=function(C,D,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const k=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(Fi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const V=h!==Pi&&this.type===Pi,N=h===Pi&&this.type!==Pi;for(let G=0,H=C.length;G<H;G++){const X=C[G],Q=X.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const te=Q.getFrameExtents();if(r.multiply(te),a.copy(Q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/te.x),r.x=a.x*te.x,Q.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/te.y),r.y=a.y*te.y,Q.mapSize.y=a.y)),Q.map===null||V===!0||N===!0){const ce=this.type!==Pi?{minFilter:Bt,magFilter:Bt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new zi(r.x,r.y,ce),Q.map.texture.name=X.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const me=Q.getViewportCount();for(let ce=0;ce<me;ce++){const W=Q.getViewport(ce);o.set(a.x*W.x,a.y*W.y,a.x*W.z,a.y*W.w),ie.viewport(o),Q.updateMatrices(X,ce),i=Q.getFrustum(),E(D,A,Q.camera,X,this.type)}Q.isPointLightShadow!==!0&&this.type===Pi&&M(Q,A),Q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(k,y,w)};function M(C,D){const A=e.update(b);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new zi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,A,f,b,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,A,v,b,null)}function _(C,D,A,k){let y=null;const w=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)y=w;else if(y=A.isPointLight===!0?l:s,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ie=y.uuid,V=D.uuid;let N=u[ie];N===void 0&&(N={},u[ie]=N);let G=N[V];G===void 0&&(G=y.clone(),N[V]=G),y=G}if(y.visible=D.visible,y.wireframe=D.wireframe,k===Pi?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:p[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const ie=n.properties.get(y);ie.light=A}return y}function E(C,D,A,k,y){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Pi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const V=e.update(C),N=C.material;if(Array.isArray(N)){const G=V.groups;for(let H=0,X=G.length;H<X;H++){const Q=G[H],te=N[Q.materialIndex];if(te&&te.visible){const me=_(C,te,k,y);n.renderBufferDirect(A,null,V,me,C,Q)}}}else if(N.visible){const G=_(C,N,k,y);n.renderBufferDirect(A,null,V,G,C,null)}}const ie=C.children;for(let V=0,N=ie.length;V<N;V++)E(ie[V],D,A,k,y)}}function mS(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const Ee=new Ut;let B=null;const ve=new Ut(0,0,0,0);return{setMask:function(Re){B!==Re&&!F&&(n.colorMask(Re,Re,Re,Re),B=Re)},setLocked:function(Re){F=Re},setClear:function(Re,Je,nt,st,yt){yt===!0&&(Re*=st,Je*=st,nt*=st),Ee.set(Re,Je,nt,st),ve.equals(Ee)===!1&&(n.clearColor(Re,Je,nt,st),ve.copy(Ee))},reset:function(){F=!1,B=null,ve.set(-1,0,0,0)}}}function a(){let F=!1,Ee=null,B=null,ve=null;return{setTest:function(Re){Re?We(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(Re){Ee!==Re&&!F&&(n.depthMask(Re),Ee=Re)},setFunc:function(Re){if(B!==Re){switch(Re){case Ug:n.depthFunc(n.NEVER);break;case Ng:n.depthFunc(n.ALWAYS);break;case Og:n.depthFunc(n.LESS);break;case Ml:n.depthFunc(n.LEQUAL);break;case Fg:n.depthFunc(n.EQUAL);break;case kg:n.depthFunc(n.GEQUAL);break;case Bg:n.depthFunc(n.GREATER);break;case zg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}B=Re}},setLocked:function(Re){F=Re},setClear:function(Re){ve!==Re&&(n.clearDepth(Re),ve=Re)},reset:function(){F=!1,Ee=null,B=null,ve=null}}}function o(){let F=!1,Ee=null,B=null,ve=null,Re=null,Je=null,nt=null,st=null,yt=null;return{setTest:function(le){F||(le?We(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(le){Ee!==le&&!F&&(n.stencilMask(le),Ee=le)},setFunc:function(le,Ue,Ye){(B!==le||ve!==Ue||Re!==Ye)&&(n.stencilFunc(le,Ue,Ye),B=le,ve=Ue,Re=Ye)},setOp:function(le,Ue,Ye){(Je!==le||nt!==Ue||st!==Ye)&&(n.stencilOp(le,Ue,Ye),Je=le,nt=Ue,st=Ye)},setLocked:function(le){F=le},setClear:function(le){yt!==le&&(n.clearStencil(le),yt=le)},reset:function(){F=!1,Ee=null,B=null,ve=null,Re=null,Je=null,nt=null,st=null,yt=null}}}const s=new r,l=new a,u=new o,d=new WeakMap,p=new WeakMap;let f={},v={},g=new WeakMap,b=[],m=null,h=!1,M=null,_=null,E=null,C=null,D=null,A=null,k=null,y=!1,w=null,ie=null,V=null,N=null,G=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(te)[1]),X=Q>=1):te.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),X=Q>=2);let me=null,ce={};const W=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),we=new Ut().fromArray(W),Le=new Ut().fromArray($);function Oe(F,Ee,B,ve){const Re=new Uint8Array(4),Je=n.createTexture();n.bindTexture(F,Je),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<B;nt++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Ee+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Je}const ze={};ze[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ze[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),We(n.DEPTH_TEST),l.setFunc(Ml),Z(!1),be(zc),We(n.CULL_FACE),Ie(Fi);function We(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function He(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function _e(F,Ee){return v[F]!==Ee?(n.bindFramebuffer(F,Ee),v[F]=Ee,i&&(F===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Ee),F===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function Ge(F,Ee){let B=b,ve=!1;if(F)if(B=g.get(Ee),B===void 0&&(B=[],g.set(Ee,B)),F.isWebGLMultipleRenderTargets){const Re=F.texture;if(B.length!==Re.length||B[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,nt=Re.length;Je<nt;Je++)B[Je]=n.COLOR_ATTACHMENT0+Je;B.length=Re.length,ve=!0}}else B[0]!==n.COLOR_ATTACHMENT0&&(B[0]=n.COLOR_ATTACHMENT0,ve=!0);else B[0]!==n.BACK&&(B[0]=n.BACK,ve=!0);ve&&(t.isWebGL2?n.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function Be(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const z={[$r]:n.FUNC_ADD,[Mg]:n.FUNC_SUBTRACT,[Eg]:n.FUNC_REVERSE_SUBTRACT};if(i)z[Wc]=n.MIN,z[jc]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(z[Wc]=F.MIN_EXT,z[jc]=F.MAX_EXT)}const qe={[wg]:n.ZERO,[Tg]:n.ONE,[Ag]:n.SRC_COLOR,[Sf]:n.SRC_ALPHA,[Ig]:n.SRC_ALPHA_SATURATE,[Lg]:n.DST_COLOR,[Cg]:n.DST_ALPHA,[Rg]:n.ONE_MINUS_SRC_COLOR,[Mf]:n.ONE_MINUS_SRC_ALPHA,[Dg]:n.ONE_MINUS_DST_COLOR,[Pg]:n.ONE_MINUS_DST_ALPHA};function Ie(F,Ee,B,ve,Re,Je,nt,st){if(F===Fi){h===!0&&(He(n.BLEND),h=!1);return}if(h===!1&&(We(n.BLEND),h=!0),F!==Sg){if(F!==M||st!==y){if((_!==$r||D!==$r)&&(n.blendEquation(n.FUNC_ADD),_=$r,D=$r),st)switch(F){case sa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gc:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case sa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,C=null,A=null,k=null,M=F,y=st}return}Re=Re||Ee,Je=Je||B,nt=nt||ve,(Ee!==_||Re!==D)&&(n.blendEquationSeparate(z[Ee],z[Re]),_=Ee,D=Re),(B!==E||ve!==C||Je!==A||nt!==k)&&(n.blendFuncSeparate(qe[B],qe[ve],qe[Je],qe[nt]),E=B,C=ve,A=Je,k=nt),M=F,y=!1}function O(F,Ee){F.side===Xn?He(n.CULL_FACE):We(n.CULL_FACE);let B=F.side===An;Ee&&(B=!B),Z(B),F.blending===sa&&F.transparent===!1?Ie(Fi):Ie(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),s.setMask(F.colorWrite);const ve=F.stencilWrite;u.setTest(ve),ve&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),De(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?We(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(F){w!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),w=F)}function be(F){F!==xg?(We(n.CULL_FACE),F!==ie&&(F===zc?n.cullFace(n.BACK):F===bg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),ie=F}function Ae(F){F!==V&&(X&&n.lineWidth(F),V=F)}function De(F,Ee,B){F?(We(n.POLYGON_OFFSET_FILL),(N!==Ee||G!==B)&&(n.polygonOffset(Ee,B),N=Ee,G=B)):He(n.POLYGON_OFFSET_FILL)}function de(F){F?We(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function Fe(F){F===void 0&&(F=n.TEXTURE0+H-1),me!==F&&(n.activeTexture(F),me=F)}function ke(F,Ee,B){B===void 0&&(me===null?B=n.TEXTURE0+H-1:B=me);let ve=ce[B];ve===void 0&&(ve={type:void 0,texture:void 0},ce[B]=ve),(ve.type!==F||ve.texture!==Ee)&&(me!==B&&(n.activeTexture(B),me=B),n.bindTexture(F,Ee||ze[F]),ve.type=F,ve.texture=Ee)}function R(){const F=ce[me];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function P(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(F){we.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),we.copy(F))}function Ce(F){Le.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Le.copy(F))}function Ne(F,Ee){let B=p.get(Ee);B===void 0&&(B=new WeakMap,p.set(Ee,B));let ve=B.get(F);ve===void 0&&(ve=n.getUniformBlockIndex(Ee,F.name),B.set(F,ve))}function Qe(F,Ee){const ve=p.get(Ee).get(F);d.get(Ee)!==ve&&(n.uniformBlockBinding(Ee,ve,F.__bindingPointIndex),d.set(Ee,ve))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},me=null,ce={},v={},g=new WeakMap,b=[],m=null,h=!1,M=null,_=null,E=null,C=null,D=null,A=null,k=null,y=!1,w=null,ie=null,V=null,N=null,G=null,we.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:We,disable:He,bindFramebuffer:_e,drawBuffers:Ge,useProgram:Be,setBlending:Ie,setMaterial:O,setFlipSided:Z,setCullFace:be,setLineWidth:Ae,setPolygonOffset:De,setScissorTest:de,activeTexture:Fe,bindTexture:ke,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:P,texImage3D:se,updateUBOMapping:Ne,uniformBlockBinding:Qe,texStorage2D:Se,texStorage3D:J,texSubImage2D:K,texSubImage3D:ne,compressedTexSubImage2D:xe,compressedTexSubImage3D:Te,scissor:ye,viewport:Ce,reset:at}}function vS(n,e,t,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,p=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let b;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,S){return h?new OffscreenCanvas(R,S):io("canvas")}function _(R,S,I,K){let ne=1;if((R.width>K||R.height>K)&&(ne=K/Math.max(R.width,R.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const xe=S?Pl:Math.floor,Te=xe(ne*R.width),Se=xe(ne*R.height);b===void 0&&(b=M(Te,Se));const J=I?M(Te,Se):b;return J.width=Te,J.height=Se,J.getContext("2d").drawImage(R,0,0,Te,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+Se+")."),J}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function E(R){return xu(R.width)&&xu(R.height)}function C(R){return s?!1:R.wrapS!==$n||R.wrapT!==$n||R.minFilter!==Bt&&R.minFilter!==Wn}function D(R,S){return R.generateMipmaps&&S&&R.minFilter!==Bt&&R.minFilter!==Wn}function A(R){n.generateMipmap(R)}function k(R,S,I,K,ne=!1){if(s===!1)return S;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xe=S;return S===n.RED&&(I===n.FLOAT&&(xe=n.R32F),I===n.HALF_FLOAT&&(xe=n.R16F),I===n.UNSIGNED_BYTE&&(xe=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(xe=n.R8UI),I===n.UNSIGNED_SHORT&&(xe=n.R16UI),I===n.UNSIGNED_INT&&(xe=n.R32UI),I===n.BYTE&&(xe=n.R8I),I===n.SHORT&&(xe=n.R16I),I===n.INT&&(xe=n.R32I)),S===n.RG&&(I===n.FLOAT&&(xe=n.RG32F),I===n.HALF_FLOAT&&(xe=n.RG16F),I===n.UNSIGNED_BYTE&&(xe=n.RG8)),S===n.RGBA&&(I===n.FLOAT&&(xe=n.RGBA32F),I===n.HALF_FLOAT&&(xe=n.RGBA16F),I===n.UNSIGNED_BYTE&&(xe=K===It&&ne===!1?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(xe=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(xe=n.RGB5_A1)),(xe===n.R16F||xe===n.R32F||xe===n.RG16F||xe===n.RG32F||xe===n.RGBA16F||xe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function y(R,S,I){return D(R,I)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==Wn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){return R===Bt||R===Xc||R===Co?n.NEAREST:n.LINEAR}function ie(R){const S=R.target;S.removeEventListener("dispose",ie),N(S),S.isVideoTexture&&g.delete(S)}function V(R){const S=R.target;S.removeEventListener("dispose",V),H(S)}function N(R){const S=i.get(R);if(S.__webglInit===void 0)return;const I=R.source,K=m.get(I);if(K){const ne=K[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&G(R),Object.keys(K).length===0&&m.delete(I)}i.remove(R)}function G(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const I=R.source,K=m.get(I);delete K[S.__cacheKey],o.memory.textures--}function H(R){const S=R.texture,I=i.get(R),K=i.get(S);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(I.__webglFramebuffer[ne]))for(let xe=0;xe<I.__webglFramebuffer[ne].length;xe++)n.deleteFramebuffer(I.__webglFramebuffer[ne][xe]);else n.deleteFramebuffer(I.__webglFramebuffer[ne]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[ne])}else{if(Array.isArray(I.__webglFramebuffer))for(let ne=0;ne<I.__webglFramebuffer.length;ne++)n.deleteFramebuffer(I.__webglFramebuffer[ne]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let ne=0;ne<I.__webglColorRenderbuffer.length;ne++)I.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[ne]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,xe=S.length;ne<xe;ne++){const Te=i.get(S[ne]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(S[ne])}i.remove(S),i.remove(R)}let X=0;function Q(){X=0}function te(){const R=X;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),X+=1,R}function me(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function ce(R,S){const I=i.get(R);if(R.isVideoTexture&&Fe(R),R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(I,R,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function W(R,S){const I=i.get(R);if(R.version>0&&I.__version!==R.version){_e(I,R,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function $(R,S){const I=i.get(R);if(R.version>0&&I.__version!==R.version){_e(I,R,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function we(R,S){const I=i.get(R);if(R.version>0&&I.__version!==R.version){Ge(I,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const Le={[wl]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Tl]:n.MIRRORED_REPEAT},Oe={[Bt]:n.NEAREST,[Xc]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[qg]:n.LINEAR_MIPMAP_NEAREST,[$a]:n.LINEAR_MIPMAP_LINEAR},ze={[l_]:n.NEVER,[m_]:n.ALWAYS,[c_]:n.LESS,[d_]:n.LEQUAL,[u_]:n.EQUAL,[p_]:n.GEQUAL,[f_]:n.GREATER,[h_]:n.NOTEQUAL};function We(R,S,I){if(I?(n.texParameteri(R,n.TEXTURE_WRAP_S,Le[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Le[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Le[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Oe[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Oe[S.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==$n||S.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,w(S.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Bt&&S.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ze[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Bt||S.minFilter!==Co&&S.minFilter!==$a||S.type===Ui&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===ma&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function He(R,S){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",ie));const K=S.source;let ne=m.get(K);ne===void 0&&(ne={},m.set(K,ne));const xe=me(S);if(xe!==R.__cacheKey){ne[xe]===void 0&&(ne[xe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ne[xe].usedTimes++;const Te=ne[R.__cacheKey];Te!==void 0&&(ne[R.__cacheKey].usedTimes--,Te.usedTimes===0&&G(S)),R.__cacheKey=xe,R.__webglTexture=ne[xe].texture}return I}function _e(R,S,I){let K=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=n.TEXTURE_3D);const ne=He(R,S),xe=S.source;t.bindTexture(K,R.__webglTexture,n.TEXTURE0+I);const Te=i.get(xe);if(xe.version!==Te.__version||ne===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Se=C(S)&&E(S.image)===!1;let J=_(S.image,Se,!1,d);J=ke(S,J);const P=E(J)||s,se=a.convert(S.format,S.colorSpace);let ye=a.convert(S.type),Ce=k(S.internalFormat,se,ye,S.colorSpace,S.isVideoTexture);We(K,S,P);let Ne;const Qe=S.mipmaps,at=s&&S.isVideoTexture!==!0,F=Te.__version===void 0||ne===!0,Ee=y(S,J,P);if(S.isDepthTexture)Ce=n.DEPTH_COMPONENT,s?S.type===Ui?Ce=n.DEPTH_COMPONENT32F:S.type===Zi?Ce=n.DEPTH_COMPONENT24:S.type===yr?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:S.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Sr&&Ce===n.DEPTH_COMPONENT&&S.type!==$l&&S.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Zi,ye=a.convert(S.type)),S.format===va&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,S.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=yr,ye=a.convert(S.type))),F&&(at?t.texStorage2D(n.TEXTURE_2D,1,Ce,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ce,J.width,J.height,0,se,ye,null));else if(S.isDataTexture)if(Qe.length>0&&P){at&&F&&t.texStorage2D(n.TEXTURE_2D,Ee,Ce,Qe[0].width,Qe[0].height);for(let B=0,ve=Qe.length;B<ve;B++)Ne=Qe[B],at?t.texSubImage2D(n.TEXTURE_2D,B,0,0,Ne.width,Ne.height,se,ye,Ne.data):t.texImage2D(n.TEXTURE_2D,B,Ce,Ne.width,Ne.height,0,se,ye,Ne.data);S.generateMipmaps=!1}else at?(F&&t.texStorage2D(n.TEXTURE_2D,Ee,Ce,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,se,ye,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,J.width,J.height,0,se,ye,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){at&&F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ce,Qe[0].width,Qe[0].height,J.depth);for(let B=0,ve=Qe.length;B<ve;B++)Ne=Qe[B],S.format!==ei?se!==null?at?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Ne.width,Ne.height,J.depth,se,Ne.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,Ce,Ne.width,Ne.height,J.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,Ne.width,Ne.height,J.depth,se,ye,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,B,Ce,Ne.width,Ne.height,J.depth,0,se,ye,Ne.data)}else{at&&F&&t.texStorage2D(n.TEXTURE_2D,Ee,Ce,Qe[0].width,Qe[0].height);for(let B=0,ve=Qe.length;B<ve;B++)Ne=Qe[B],S.format!==ei?se!==null?at?t.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,Ne.width,Ne.height,se,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,B,Ce,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage2D(n.TEXTURE_2D,B,0,0,Ne.width,Ne.height,se,ye,Ne.data):t.texImage2D(n.TEXTURE_2D,B,Ce,Ne.width,Ne.height,0,se,ye,Ne.data)}else if(S.isDataArrayTexture)at?(F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ce,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,ye,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,J.width,J.height,J.depth,0,se,ye,J.data);else if(S.isData3DTexture)at?(F&&t.texStorage3D(n.TEXTURE_3D,Ee,Ce,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,ye,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,J.width,J.height,J.depth,0,se,ye,J.data);else if(S.isFramebufferTexture){if(F)if(at)t.texStorage2D(n.TEXTURE_2D,Ee,Ce,J.width,J.height);else{let B=J.width,ve=J.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(n.TEXTURE_2D,Re,Ce,B,ve,0,se,ye,null),B>>=1,ve>>=1}}else if(Qe.length>0&&P){at&&F&&t.texStorage2D(n.TEXTURE_2D,Ee,Ce,Qe[0].width,Qe[0].height);for(let B=0,ve=Qe.length;B<ve;B++)Ne=Qe[B],at?t.texSubImage2D(n.TEXTURE_2D,B,0,0,se,ye,Ne):t.texImage2D(n.TEXTURE_2D,B,Ce,se,ye,Ne);S.generateMipmaps=!1}else at?(F&&t.texStorage2D(n.TEXTURE_2D,Ee,Ce,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,ye,J)):t.texImage2D(n.TEXTURE_2D,0,Ce,se,ye,J);D(S,P)&&A(K),Te.__version=xe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ge(R,S,I){if(S.image.length!==6)return;const K=He(R,S),ne=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+I);const xe=i.get(ne);if(ne.version!==xe.__version||K===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,J=[];for(let B=0;B<6;B++)!Te&&!Se?J[B]=_(S.image[B],!1,!0,u):J[B]=Se?S.image[B].image:S.image[B],J[B]=ke(S,J[B]);const P=J[0],se=E(P)||s,ye=a.convert(S.format,S.colorSpace),Ce=a.convert(S.type),Ne=k(S.internalFormat,ye,Ce,S.colorSpace),Qe=s&&S.isVideoTexture!==!0,at=xe.__version===void 0||K===!0;let F=y(S,P,se);We(n.TEXTURE_CUBE_MAP,S,se);let Ee;if(Te){Qe&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Ne,P.width,P.height);for(let B=0;B<6;B++){Ee=J[B].mipmaps;for(let ve=0;ve<Ee.length;ve++){const Re=Ee[ve];S.format!==ei?ye!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve,0,0,Re.width,Re.height,ye,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve,Ne,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve,0,0,Re.width,Re.height,ye,Ce,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve,Ne,Re.width,Re.height,0,ye,Ce,Re.data)}}}else{Ee=S.mipmaps,Qe&&at&&(Ee.length>0&&F++,t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Ne,J[0].width,J[0].height));for(let B=0;B<6;B++)if(Se){Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,J[B].width,J[B].height,ye,Ce,J[B].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ne,J[B].width,J[B].height,0,ye,Ce,J[B].data);for(let ve=0;ve<Ee.length;ve++){const Je=Ee[ve].image[B].image;Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve+1,0,0,Je.width,Je.height,ye,Ce,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve+1,Ne,Je.width,Je.height,0,ye,Ce,Je.data)}}else{Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ye,Ce,J[B]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ne,ye,Ce,J[B]);for(let ve=0;ve<Ee.length;ve++){const Re=Ee[ve];Qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve+1,0,0,ye,Ce,Re.image[B]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve+1,Ne,ye,Ce,Re.image[B])}}}D(S,se)&&A(n.TEXTURE_CUBE_MAP),xe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Be(R,S,I,K,ne,xe){const Te=a.convert(I.format,I.colorSpace),Se=a.convert(I.type),J=k(I.internalFormat,Te,Se,I.colorSpace);if(!i.get(S).__hasExternalTextures){const se=Math.max(1,S.width>>xe),ye=Math.max(1,S.height>>xe);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,xe,J,se,ye,S.depth,0,Te,Se,null):t.texImage2D(ne,xe,J,se,ye,0,Te,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),de(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ne,i.get(I).__webglTexture,0,De(S)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ne,i.get(I).__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function z(R,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let K=n.DEPTH_COMPONENT16;if(I||de(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ui?K=n.DEPTH_COMPONENT32F:ne.type===Zi&&(K=n.DEPTH_COMPONENT24));const xe=De(S);de(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,K,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,K,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const K=De(S);I&&de(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,S.width,S.height):de(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const K=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<K.length;ne++){const xe=K[ne],Te=a.convert(xe.format,xe.colorSpace),Se=a.convert(xe.type),J=k(xe.internalFormat,Te,Se,xe.colorSpace),P=De(S);I&&de(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,P,J,S.width,S.height):de(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ce(S.depthTexture,0);const K=i.get(S.depthTexture).__webglTexture,ne=De(S);if(S.depthTexture.format===Sr)de(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(S.depthTexture.format===va)de(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const S=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");qe(S.__webglFramebuffer,R)}else if(I){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=n.createRenderbuffer(),z(S.__webglDepthbuffer[K],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),z(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(R,S,I){const K=i.get(R);S!==void 0&&Be(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ie(R)}function Z(R){const S=R.texture,I=i.get(R),K=i.get(S);R.addEventListener("dispose",V),R.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=S.version,o.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,xe=R.isWebGLMultipleRenderTargets===!0,Te=E(R)||s;if(ne){I.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(s&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[Se]=[];for(let J=0;J<S.mipmaps.length;J++)I.__webglFramebuffer[Se][J]=n.createFramebuffer()}else I.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(s&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let Se=0;Se<S.mipmaps.length;Se++)I.__webglFramebuffer[Se]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(xe)if(r.drawBuffers){const Se=R.texture;for(let J=0,P=Se.length;J<P;J++){const se=i.get(Se[J]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&R.samples>0&&de(R)===!1){const Se=xe?S:[S];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let J=0;J<Se.length;J++){const P=Se[J];I.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[J]);const se=a.convert(P.format,P.colorSpace),ye=a.convert(P.type),Ce=k(P.internalFormat,se,ye,P.colorSpace,R.isXRRenderTarget===!0),Ne=De(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ce,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,I.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),z(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),We(n.TEXTURE_CUBE_MAP,S,Te);for(let Se=0;Se<6;Se++)if(s&&S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Be(I.__webglFramebuffer[Se][J],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,J);else Be(I.__webglFramebuffer[Se],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);D(S,Te)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){const Se=R.texture;for(let J=0,P=Se.length;J<P;J++){const se=Se[J],ye=i.get(se);t.bindTexture(n.TEXTURE_2D,ye.__webglTexture),We(n.TEXTURE_2D,se,Te),Be(I.__webglFramebuffer,R,se,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,0),D(se,Te)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(s?Se=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,K.__webglTexture),We(Se,S,Te),s&&S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Be(I.__webglFramebuffer[J],R,S,n.COLOR_ATTACHMENT0,Se,J);else Be(I.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,Se,0);D(S,Te)&&A(Se),t.unbindTexture()}R.depthBuffer&&Ie(R)}function be(R){const S=E(R)||s,I=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let K=0,ne=I.length;K<ne;K++){const xe=I[K];if(D(xe,S)){const Te=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(xe).__webglTexture;t.bindTexture(Te,Se),A(Te),t.unbindTexture()}}}function Ae(R){if(s&&R.samples>0&&de(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],I=R.width,K=R.height;let ne=n.COLOR_BUFFER_BIT;const xe=[],Te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(R),J=R.isWebGLMultipleRenderTargets===!0;if(J)for(let P=0;P<S.length;P++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let P=0;P<S.length;P++){xe.push(n.COLOR_ATTACHMENT0+P),R.depthBuffer&&xe.push(Te);const se=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(se===!1&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),J&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[P]),se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),J){const ye=i.get(S[P]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,I,K,0,0,I,K,ne,n.NEAREST),v&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let P=0;P<S.length;P++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,Se.__webglColorRenderbuffer[P]);const se=i.get(S[P]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function De(R){return Math.min(p,R.samples)}function de(R){const S=i.get(R);return s&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(R){const S=o.render.frame;g.get(R)!==S&&(g.set(R,S),R.update())}function ke(R,S){const I=R.colorSpace,K=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Rl||I!==bi&&I!==Er&&(I===It||I===po?s===!1?e.has("EXT_sRGB")===!0&&K===ei?(R.format=Rl,R.minFilter=Wn,R.generateMipmaps=!1):S=Nf.sRGBToLinear(S):(K!==ei||ne!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}this.allocateTextureUnit=te,this.resetTextureUnits=Q,this.setTexture2D=ce,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=we,this.rebindTextures=O,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=de}const gS=0,Jt=1;function _S(n,e,t){const i=t.isWebGL2;function r(a,o=Er){let s;const l=o===It||o===po?Jt:gS;if(a===$i)return n.UNSIGNED_BYTE;if(a===Af)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Rf)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Kg)return n.BYTE;if(a===Zg)return n.SHORT;if(a===$l)return n.UNSIGNED_SHORT;if(a===Tf)return n.INT;if(a===Zi)return n.UNSIGNED_INT;if(a===Ui)return n.FLOAT;if(a===ma)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Jg)return n.ALPHA;if(a===ei)return n.RGBA;if(a===Qg)return n.LUMINANCE;if(a===$g)return n.LUMINANCE_ALPHA;if(a===Sr)return n.DEPTH_COMPONENT;if(a===va)return n.DEPTH_STENCIL;if(a===Rl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===e_)return n.RED;if(a===Cf)return n.RED_INTEGER;if(a===t_)return n.RG;if(a===Pf)return n.RG_INTEGER;if(a===Lf)return n.RGBA_INTEGER;if(a===Po||a===Lo||a===Do||a===Io)if(l===Jt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Yc||a===qc||a===Kc||a===Zc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===n_)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Jc||a===Qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Jc)return l===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Qc)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===$c||a===eu||a===tu||a===nu||a===iu||a===ru||a===au||a===su||a===ou||a===lu||a===cu||a===uu||a===du||a===fu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===$c)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===eu)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===tu)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===nu)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===iu)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ru)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===au)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===su)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ou)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===lu)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===cu)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===uu)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===du)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fu)return l===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Uo||a===hu||a===pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Uo)return l===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===hu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===i_||a===mu||a===vu||a===gu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Uo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===gu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===yr?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class xS extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class on extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bS={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),h=this._getHandJoint(u,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),v=.02,g=.005;u.inputState.pinching&&f>v+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(bS)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new on;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class eh extends fn{constructor(e,t,i,r,a,o,s,l,u,d){if(d=d!==void 0?d:Sr,d!==Sr&&d!==va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Sr&&(i=Zi),i===void 0&&d===va&&(i=yr),super(null,r,a,o,s,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yS extends Ar{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,u=null,d=null,p=null,f=null,v=null,g=null;const b=t.getContextAttributes();let m=null,h=null;const M=[],_=[],E=new In;E.layers.enable(1),E.viewport=new Ut;const C=new In;C.layers.enable(2),C.viewport=new Ut;const D=[E,C],A=new xS;A.layers.enable(1),A.layers.enable(2);let k=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=M[W];return $===void 0&&($=new il,M[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=M[W];return $===void 0&&($=new il,M[W]=$),$.getGripSpace()},this.getHand=function(W){let $=M[W];return $===void 0&&($=new il,M[W]=$),$.getHandSpace()};function w(W){const $=_.indexOf(W.inputSource);if($===-1)return;const we=M[$];we!==void 0&&(we.update(W.inputSource,W.frame,u||o),we.dispatchEvent({type:W.type,data:W.inputSource}))}function ie(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",V);for(let W=0;W<M.length;W++){const $=_[W];$!==null&&(_[W]=null,M[W].disconnect($))}k=null,y=null,e.setRenderTarget(m),v=null,f=null,p=null,r=null,h=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:v}),h=new zi(v.framebufferWidth,v.framebufferHeight,{format:ei,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let $=null,we=null,Le=null;b.depth&&(Le=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=b.stencil?va:Sr,we=b.stencil?yr:Zi);const Oe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),h=new zi(f.textureWidth,f.textureHeight,{format:ei,type:$i,depthTexture:new eh(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const ze=e.properties.get(h);ze.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(s),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(W){for(let $=0;$<W.removed.length;$++){const we=W.removed[$],Le=_.indexOf(we);Le>=0&&(_[Le]=null,M[Le].disconnect(we))}for(let $=0;$<W.added.length;$++){const we=W.added[$];let Le=_.indexOf(we);if(Le===-1){for(let ze=0;ze<M.length;ze++)if(ze>=_.length){_.push(we),Le=ze;break}else if(_[ze]===null){_[ze]=we,Le=ze;break}if(Le===-1)break}const Oe=M[Le];Oe&&Oe.connect(we)}}const N=new q,G=new q;function H(W,$,we){N.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(we.matrixWorld);const Le=N.distanceTo(G),Oe=$.projectionMatrix.elements,ze=we.projectionMatrix.elements,We=Oe[14]/(Oe[10]-1),He=Oe[14]/(Oe[10]+1),_e=(Oe[9]+1)/Oe[5],Ge=(Oe[9]-1)/Oe[5],Be=(Oe[8]-1)/Oe[0],z=(ze[8]+1)/ze[0],qe=We*Be,Ie=We*z,O=Le/(-Be+z),Z=O*-Be;$.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Z),W.translateZ(O),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const be=We+O,Ae=He+O,De=qe-Z,de=Ie+(Le-Z),Fe=_e*He/Ae*be,ke=Ge*He/Ae*be;W.projectionMatrix.makePerspective(De,de,Fe,ke,be,Ae),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function X(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;A.near=C.near=E.near=W.near,A.far=C.far=E.far=W.far,(k!==A.near||y!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,y=A.far);const $=W.parent,we=A.cameras;X(A,$);for(let Le=0;Le<we.length;Le++)X(we[Le],$);we.length===2?H(A,E,C):A.projectionMatrix.copy(E.projectionMatrix),Q(W,A,$)};function Q(W,$,we){we===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(we.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Cl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&v===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=W)};let te=null;function me(W,$){if(d=$.getViewerPose(u||o),g=$,d!==null){const we=d.views;v!==null&&(e.setRenderTargetFramebuffer(h,v.framebuffer),e.setRenderTarget(h));let Le=!1;we.length!==A.cameras.length&&(A.cameras.length=0,Le=!0);for(let Oe=0;Oe<we.length;Oe++){const ze=we[Oe];let We=null;if(v!==null)We=v.getViewport(ze);else{const _e=p.getViewSubImage(f,ze);We=_e.viewport,Oe===0&&(e.setRenderTargetTextures(h,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(h))}let He=D[Oe];He===void 0&&(He=new In,He.layers.enable(Oe),He.viewport=new Ut,D[Oe]=He),He.matrix.fromArray(ze.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ze.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(We.x,We.y,We.width,We.height),Oe===0&&(A.matrix.copy(He.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Le===!0&&A.cameras.push(He)}}for(let we=0;we<M.length;we++){const Le=_[we],Oe=M[we];Le!==null&&Oe!==void 0&&Oe.update(Le,$,u||o)}te&&te(W,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const ce=new qf;ce.setAnimationLoop(me),this.setAnimationLoop=function(W){te=W},this.dispose=function(){}}}function SS(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Wf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,M,_,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),p(m,h)):h.isMeshPhongMaterial?(a(m,h),d(m,h)):h.isMeshStandardMaterial?(a(m,h),f(m,h),h.isMeshPhysicalMaterial&&v(m,h,E)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),b(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,M,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===An&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===An&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const M=e.get(h).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,M,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*M,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function v(m,h,M){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===An&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){const M=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MS(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){const E=_.program;i.uniformBlockBinding(M,E)}function u(M,_){let E=r[M.id];E===void 0&&(g(M),E=d(M),r[M.id]=E,M.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(M,C);const D=e.render.frame;a[M.id]!==D&&(f(M),a[M.id]=D)}function d(M){const _=p();M.__bindingPointIndex=_;const E=n.createBuffer(),C=M.__size,D=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function p(){for(let M=0;M<s;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=r[M.id],E=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let D=0,A=E.length;D<A;D++){const k=E[D];if(v(k,D,C)===!0){const y=k.__offset,w=Array.isArray(k.value)?k.value:[k.value];let ie=0;for(let V=0;V<w.length;V++){const N=w[V],G=b(N);typeof N=="number"?(k.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,y+ie,k.__data)):N.isMatrix3?(k.__data[0]=N.elements[0],k.__data[1]=N.elements[1],k.__data[2]=N.elements[2],k.__data[3]=N.elements[0],k.__data[4]=N.elements[3],k.__data[5]=N.elements[4],k.__data[6]=N.elements[5],k.__data[7]=N.elements[0],k.__data[8]=N.elements[6],k.__data[9]=N.elements[7],k.__data[10]=N.elements[8],k.__data[11]=N.elements[0]):(N.toArray(k.__data,ie),ie+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,k.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(M,_,E){const C=M.value;if(E[_]===void 0){if(typeof C=="number")E[_]=C;else{const D=Array.isArray(C)?C:[C],A=[];for(let k=0;k<D.length;k++)A.push(D[k].clone());E[_]=A}return!0}else if(typeof C=="number"){if(E[_]!==C)return E[_]=C,!0}else{const D=Array.isArray(E[_])?E[_]:[E[_]],A=Array.isArray(C)?C:[C];for(let k=0;k<D.length;k++){const y=D[k];if(y.equals(A[k])===!1)return y.copy(A[k]),!0}}return!1}function g(M){const _=M.uniforms;let E=0;const C=16;let D=0;for(let A=0,k=_.length;A<k;A++){const y=_[A],w={boundary:0,storage:0},ie=Array.isArray(y.value)?y.value:[y.value];for(let V=0,N=ie.length;V<N;V++){const G=ie[V],H=b(G);w.boundary+=H.boundary,w.storage+=H.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=E,A>0){D=E%C;const V=C-D;D!==0&&V-w.boundary<0&&(E+=C-D,y.__offset=E)}E+=w.storage}return D=E%C,D>0&&(E+=C-D),M.__size=E,M.__cache={},this}function b(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function h(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},a={}}return{bind:l,update:u,dispose:h}}class th{constructor(e={}){const{canvas:t=__(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const v=new Uint32Array(4),g=new Int32Array(4);let b=null,m=null;const h=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Qi,this.toneMappingExposure=1;const _=this;let E=!1,C=0,D=0,A=null,k=-1,y=null;const w=new Ut,ie=new Ut;let V=null;const N=new Mt(0);let G=0,H=t.width,X=t.height,Q=1,te=null,me=null;const ce=new Ut(0,0,H,X),W=new Ut(0,0,H,X);let $=!1;const we=new tc;let Le=!1,Oe=!1,ze=null;const We=new Vt,He=new $e,_e=new q,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return A===null?Q:1}let z=i;function qe(L,ee){for(let pe=0;pe<L.length;pe++){const ae=L[pe],ge=t.getContext(ae,ee);if(ge!==null)return ge}return null}try{const L={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ql}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ve,!1),z===null){const ee=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ee.shift(),z=qe(ee,L),z===null)throw qe(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ie,O,Z,be,Ae,De,de,Fe,ke,R,S,I,K,ne,xe,Te,Se,J,P,se,ye,Ce,Ne,Qe;function at(){Ie=new U0(z),O=new R0(z,Ie,e),Ie.init(O),Ce=new _S(z,Ie,O),Z=new mS(z,Ie,O),be=new F0(z),Ae=new tS,De=new vS(z,Ie,Z,Ae,O,Ce,be),de=new P0(_),Fe=new I0(_),ke=new Y_(z,O),Ne=new T0(z,Ie,ke,O),R=new N0(z,ke,be,Ne),S=new G0(z,R,ke,be),P=new z0(z,O,De),Te=new C0(Ae),I=new eS(_,de,Fe,Ie,O,Ne,Te),K=new SS(_,Ae),ne=new iS,xe=new cS(Ie,O),J=new w0(_,de,Fe,Z,S,f,l),Se=new pS(_,S,O),Qe=new MS(z,be,O,Z),se=new A0(z,Ie,be,O),ye=new O0(z,Ie,be,O),be.programs=I.programs,_.capabilities=O,_.extensions=Ie,_.properties=Ae,_.renderLists=ne,_.shadowMap=Se,_.state=Z,_.info=be}at();const F=new yS(_,z);this.xr=F,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const L=Ie.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ie.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(L){L!==void 0&&(Q=L,this.setSize(H,X,!1))},this.getSize=function(L){return L.set(H,X)},this.setSize=function(L,ee,pe=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=L,X=ee,t.width=Math.floor(L*Q),t.height=Math.floor(ee*Q),pe===!0&&(t.style.width=L+"px",t.style.height=ee+"px"),this.setViewport(0,0,L,ee)},this.getDrawingBufferSize=function(L){return L.set(H*Q,X*Q).floor()},this.setDrawingBufferSize=function(L,ee,pe){H=L,X=ee,Q=pe,t.width=Math.floor(L*pe),t.height=Math.floor(ee*pe),this.setViewport(0,0,L,ee)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(ce)},this.setViewport=function(L,ee,pe,ae){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,ee,pe,ae),Z.viewport(w.copy(ce).multiplyScalar(Q).floor())},this.getScissor=function(L){return L.copy(W)},this.setScissor=function(L,ee,pe,ae){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,ee,pe,ae),Z.scissor(ie.copy(W).multiplyScalar(Q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(L){Z.setScissorTest($=L)},this.setOpaqueSort=function(L){te=L},this.setTransparentSort=function(L){me=L},this.getClearColor=function(L){return L.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(L=!0,ee=!0,pe=!0){let ae=0;if(L){let ge=!1;if(A!==null){const Ke=A.texture.format;ge=Ke===Lf||Ke===Pf||Ke===Cf}if(ge){const Ke=A.texture.type,tt=Ke===$i||Ke===Zi||Ke===$l||Ke===yr||Ke===Af||Ke===Rf,it=J.getClearColor(),ot=J.getClearAlpha(),mt=it.r,rt=it.g,ct=it.b;tt?(v[0]=mt,v[1]=rt,v[2]=ct,v[3]=ot,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=mt,g[1]=rt,g[2]=ct,g[3]=ot,z.clearBufferiv(z.COLOR,0,g))}else ae|=z.COLOR_BUFFER_BIT}ee&&(ae|=z.DEPTH_BUFFER_BIT),pe&&(ae|=z.STENCIL_BUFFER_BIT),z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ne.dispose(),xe.dispose(),Ae.dispose(),de.dispose(),Fe.dispose(),S.dispose(),Ne.dispose(),Qe.dispose(),I.dispose(),F.dispose(),F.removeEventListener("sessionstart",le),F.removeEventListener("sessionend",Ue),ze&&(ze.dispose(),ze=null),Ye.stop()};function Ee(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const L=be.autoReset,ee=Se.enabled,pe=Se.autoUpdate,ae=Se.needsUpdate,ge=Se.type;at(),be.autoReset=L,Se.enabled=ee,Se.autoUpdate=pe,Se.needsUpdate=ae,Se.type=ge}function ve(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Re(L){const ee=L.target;ee.removeEventListener("dispose",Re),Je(ee)}function Je(L){nt(L),Ae.remove(L)}function nt(L){const ee=Ae.get(L).programs;ee!==void 0&&(ee.forEach(function(pe){I.releaseProgram(pe)}),L.isShaderMaterial&&I.releaseShaderCache(L))}this.renderBufferDirect=function(L,ee,pe,ae,ge,Ke){ee===null&&(ee=Ge);const tt=ge.isMesh&&ge.matrixWorld.determinant()<0,it=Rn(L,ee,pe,ae,ge);Z.setMaterial(ae,tt);let ot=pe.index,mt=1;if(ae.wireframe===!0){if(ot=R.getWireframeAttribute(pe),ot===void 0)return;mt=2}const rt=pe.drawRange,ct=pe.attributes.position;let Lt=rt.start*mt,Nt=(rt.start+rt.count)*mt;Ke!==null&&(Lt=Math.max(Lt,Ke.start*mt),Nt=Math.min(Nt,(Ke.start+Ke.count)*mt)),ot!==null?(Lt=Math.max(Lt,0),Nt=Math.min(Nt,ot.count)):ct!=null&&(Lt=Math.max(Lt,0),Nt=Math.min(Nt,ct.count));const Mn=Nt-Lt;if(Mn<0||Mn===1/0)return;Ne.setup(ge,ae,it,pe,ot);let Nn,Ot=se;if(ot!==null&&(Nn=ke.get(ot),Ot=ye,Ot.setIndex(Nn)),ge.isMesh)ae.wireframe===!0?(Z.setLineWidth(ae.wireframeLinewidth*Be()),Ot.setMode(z.LINES)):Ot.setMode(z.TRIANGLES);else if(ge.isLine){let ht=ae.linewidth;ht===void 0&&(ht=1),Z.setLineWidth(ht*Be()),ge.isLineSegments?Ot.setMode(z.LINES):ge.isLineLoop?Ot.setMode(z.LINE_LOOP):Ot.setMode(z.LINE_STRIP)}else ge.isPoints?Ot.setMode(z.POINTS):ge.isSprite&&Ot.setMode(z.TRIANGLES);if(ge.isInstancedMesh)Ot.renderInstances(Lt,Mn,ge.count);else if(pe.isInstancedBufferGeometry){const ht=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Rr=Math.min(pe.instanceCount,ht);Ot.renderInstances(Lt,Mn,Rr)}else Ot.render(Lt,Mn)},this.compile=function(L,ee){function pe(ae,ge,Ke){ae.transparent===!0&&ae.side===Xn&&ae.forceSinglePass===!1?(ae.side=An,ae.needsUpdate=!0,Sn(ae,ge,Ke),ae.side=xi,ae.needsUpdate=!0,Sn(ae,ge,Ke),ae.side=Xn):Sn(ae,ge,Ke)}m=xe.get(L),m.init(),M.push(m),L.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(m.pushLight(ae),ae.castShadow&&m.pushShadow(ae))}),m.setupLights(_._useLegacyLights),L.traverse(function(ae){const ge=ae.material;if(ge)if(Array.isArray(ge))for(let Ke=0;Ke<ge.length;Ke++){const tt=ge[Ke];pe(tt,L,ae)}else pe(ge,L,ae)}),M.pop(),m=null};let st=null;function yt(L){st&&st(L)}function le(){Ye.stop()}function Ue(){Ye.start()}const Ye=new qf;Ye.setAnimationLoop(yt),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(L){st=L,F.setAnimationLoop(L),L===null?Ye.stop():Ye.start()},F.addEventListener("sessionstart",le),F.addEventListener("sessionend",Ue),this.render=function(L,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(ee),ee=F.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,ee,A),m=xe.get(L,M.length),m.init(),M.push(m),We.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),we.setFromProjectionMatrix(We),Oe=this.localClippingEnabled,Le=Te.init(this.clippingPlanes,Oe),b=ne.get(L,h.length),b.init(),h.push(b),dt(L,ee,0,_.sortObjects),b.finish(),_.sortObjects===!0&&b.sort(te,me),this.info.render.frame++,Le===!0&&Te.beginShadows();const pe=m.state.shadowsArray;if(Se.render(pe,L,ee),Le===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(b,L),m.setupLights(_._useLegacyLights),ee.isArrayCamera){const ae=ee.cameras;for(let ge=0,Ke=ae.length;ge<Ke;ge++){const tt=ae[ge];ft(b,L,tt,tt.viewport)}}else ft(b,L,ee);A!==null&&(De.updateMultisampleRenderTarget(A),De.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(_,L,ee),Ne.resetDefaultState(),k=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,h.pop(),h.length>0?b=h[h.length-1]:b=null};function dt(L,ee,pe,ae){if(L.visible===!1)return;if(L.layers.test(ee.layers)){if(L.isGroup)pe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ee);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||we.intersectsSprite(L)){ae&&_e.setFromMatrixPosition(L.matrixWorld).applyMatrix4(We);const tt=S.update(L),it=L.material;it.visible&&b.push(L,tt,it,pe,_e.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||we.intersectsObject(L))){const tt=S.update(L),it=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),_e.copy(L.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),_e.copy(tt.boundingSphere.center)),_e.applyMatrix4(L.matrixWorld).applyMatrix4(We)),Array.isArray(it)){const ot=tt.groups;for(let mt=0,rt=ot.length;mt<rt;mt++){const ct=ot[mt],Lt=it[ct.materialIndex];Lt&&Lt.visible&&b.push(L,tt,Lt,pe,_e.z,ct)}}else it.visible&&b.push(L,tt,it,pe,_e.z,null)}}const Ke=L.children;for(let tt=0,it=Ke.length;tt<it;tt++)dt(Ke[tt],ee,pe,ae)}function ft(L,ee,pe,ae){const ge=L.opaque,Ke=L.transmissive,tt=L.transparent;m.setupLightsView(pe),Le===!0&&Te.setGlobalState(_.clippingPlanes,pe),Ke.length>0&&sn(ge,Ke,ee,pe),ae&&Z.viewport(w.copy(ae)),ge.length>0&&Ct(ge,ee,pe),Ke.length>0&&Ct(Ke,ee,pe),tt.length>0&&Ct(tt,ee,pe),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function sn(L,ee,pe,ae){const ge=O.isWebGL2;ze===null&&(ze=new zi(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?ma:$i,minFilter:$a,samples:ge?4:0})),_.getDrawingBufferSize(He),ge?ze.setSize(He.x,He.y):ze.setSize(Pl(He.x),Pl(He.y));const Ke=_.getRenderTarget();_.setRenderTarget(ze),_.getClearColor(N),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear();const tt=_.toneMapping;_.toneMapping=Qi,Ct(L,pe,ae),De.updateMultisampleRenderTarget(ze),De.updateRenderTargetMipmap(ze);let it=!1;for(let ot=0,mt=ee.length;ot<mt;ot++){const rt=ee[ot],ct=rt.object,Lt=rt.geometry,Nt=rt.material,Mn=rt.group;if(Nt.side===Xn&&ct.layers.test(ae.layers)){const Nn=Nt.side;Nt.side=An,Nt.needsUpdate=!0,nn(ct,pe,ae,Lt,Nt,Mn),Nt.side=Nn,Nt.needsUpdate=!0,it=!0}}it===!0&&(De.updateMultisampleRenderTarget(ze),De.updateRenderTargetMipmap(ze)),_.setRenderTarget(Ke),_.setClearColor(N,G),_.toneMapping=tt}function Ct(L,ee,pe){const ae=ee.isScene===!0?ee.overrideMaterial:null;for(let ge=0,Ke=L.length;ge<Ke;ge++){const tt=L[ge],it=tt.object,ot=tt.geometry,mt=ae===null?tt.material:ae,rt=tt.group;it.layers.test(pe.layers)&&nn(it,ee,pe,ot,mt,rt)}}function nn(L,ee,pe,ae,ge,Ke){L.onBeforeRender(_,ee,pe,ae,ge,Ke),L.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ge.onBeforeRender(_,ee,pe,ae,L,Ke),ge.transparent===!0&&ge.side===Xn&&ge.forceSinglePass===!1?(ge.side=An,ge.needsUpdate=!0,_.renderBufferDirect(pe,ee,ae,ge,L,Ke),ge.side=xi,ge.needsUpdate=!0,_.renderBufferDirect(pe,ee,ae,ge,L,Ke),ge.side=Xn):_.renderBufferDirect(pe,ee,ae,ge,L,Ke),L.onAfterRender(_,ee,pe,ae,ge,Ke)}function Sn(L,ee,pe){ee.isScene!==!0&&(ee=Ge);const ae=Ae.get(L),ge=m.state.lights,Ke=m.state.shadowsArray,tt=ge.state.version,it=I.getParameters(L,ge.state,Ke,ee,pe),ot=I.getProgramCacheKey(it);let mt=ae.programs;ae.environment=L.isMeshStandardMaterial?ee.environment:null,ae.fog=ee.fog,ae.envMap=(L.isMeshStandardMaterial?Fe:de).get(L.envMap||ae.environment),mt===void 0&&(L.addEventListener("dispose",Re),mt=new Map,ae.programs=mt);let rt=mt.get(ot);if(rt!==void 0){if(ae.currentProgram===rt&&ae.lightsStateVersion===tt)return oi(L,it),rt}else it.uniforms=I.getUniforms(L),L.onBuild(pe,it,_),L.onBeforeCompile(it,_),rt=I.acquireProgram(it,ot),mt.set(ot,rt),ae.uniforms=it.uniforms;const ct=ae.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ct.clippingPlanes=Te.uniform),oi(L,it),ae.needsLights=qn(L),ae.lightsStateVersion=tt,ae.needsLights&&(ct.ambientLightColor.value=ge.state.ambient,ct.lightProbe.value=ge.state.probe,ct.directionalLights.value=ge.state.directional,ct.directionalLightShadows.value=ge.state.directionalShadow,ct.spotLights.value=ge.state.spot,ct.spotLightShadows.value=ge.state.spotShadow,ct.rectAreaLights.value=ge.state.rectArea,ct.ltc_1.value=ge.state.rectAreaLTC1,ct.ltc_2.value=ge.state.rectAreaLTC2,ct.pointLights.value=ge.state.point,ct.pointLightShadows.value=ge.state.pointShadow,ct.hemisphereLights.value=ge.state.hemi,ct.directionalShadowMap.value=ge.state.directionalShadowMap,ct.directionalShadowMatrix.value=ge.state.directionalShadowMatrix,ct.spotShadowMap.value=ge.state.spotShadowMap,ct.spotLightMatrix.value=ge.state.spotLightMatrix,ct.spotLightMap.value=ge.state.spotLightMap,ct.pointShadowMap.value=ge.state.pointShadowMap,ct.pointShadowMatrix.value=ge.state.pointShadowMatrix);const Lt=rt.getUniforms(),Nt=Vs.seqWithValue(Lt.seq,ct);return ae.currentProgram=rt,ae.uniformsList=Nt,rt}function oi(L,ee){const pe=Ae.get(L);pe.outputColorSpace=ee.outputColorSpace,pe.instancing=ee.instancing,pe.instancingColor=ee.instancingColor,pe.skinning=ee.skinning,pe.morphTargets=ee.morphTargets,pe.morphNormals=ee.morphNormals,pe.morphColors=ee.morphColors,pe.morphTargetsCount=ee.morphTargetsCount,pe.numClippingPlanes=ee.numClippingPlanes,pe.numIntersection=ee.numClipIntersection,pe.vertexAlphas=ee.vertexAlphas,pe.vertexTangents=ee.vertexTangents,pe.toneMapping=ee.toneMapping}function Rn(L,ee,pe,ae,ge){ee.isScene!==!0&&(ee=Ge),De.resetTextureUnits();const Ke=ee.fog,tt=ae.isMeshStandardMaterial?ee.environment:null,it=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bi,ot=(ae.isMeshStandardMaterial?Fe:de).get(ae.envMap||tt),mt=ae.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,rt=!!pe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ct=!!pe.morphAttributes.position,Lt=!!pe.morphAttributes.normal,Nt=!!pe.morphAttributes.color;let Mn=Qi;ae.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mn=_.toneMapping);const Nn=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Ot=Nn!==void 0?Nn.length:0,ht=Ae.get(ae),Rr=m.state.lights;if(Le===!0&&(Oe===!0||L!==y)){const vn=L===y&&ae.id===k;Te.setState(ae,L,vn)}let Ft=!1;ae.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==Rr.state.version||ht.outputColorSpace!==it||ge.isInstancedMesh&&ht.instancing===!1||!ge.isInstancedMesh&&ht.instancing===!0||ge.isSkinnedMesh&&ht.skinning===!1||!ge.isSkinnedMesh&&ht.skinning===!0||ge.isInstancedMesh&&ht.instancingColor===!0&&ge.instanceColor===null||ge.isInstancedMesh&&ht.instancingColor===!1&&ge.instanceColor!==null||ht.envMap!==ot||ae.fog===!0&&ht.fog!==Ke||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==Te.numPlanes||ht.numIntersection!==Te.numIntersection)||ht.vertexAlphas!==mt||ht.vertexTangents!==rt||ht.morphTargets!==ct||ht.morphNormals!==Lt||ht.morphColors!==Nt||ht.toneMapping!==Mn||O.isWebGL2===!0&&ht.morphTargetsCount!==Ot)&&(Ft=!0):(Ft=!0,ht.__version=ae.version);let yi=ht.currentProgram;Ft===!0&&(yi=Sn(ae,ee,ge));let os=!1,rr=!1,ar=!1;const Zt=yi.getUniforms(),Kn=ht.uniforms;if(Z.useProgram(yi.program)&&(os=!0,rr=!0,ar=!0),ae.id!==k&&(k=ae.id,rr=!0),os||y!==L){Zt.setValue(z,"projectionMatrix",L.projectionMatrix),Zt.setValue(z,"viewMatrix",L.matrixWorldInverse);const vn=Zt.map.cameraPosition;vn!==void 0&&vn.setValue(z,_e.setFromMatrixPosition(L.matrixWorld)),O.logarithmicDepthBuffer&&Zt.setValue(z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Zt.setValue(z,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,rr=!0,ar=!0)}if(ge.isSkinnedMesh){Zt.setOptional(z,ge,"bindMatrix"),Zt.setOptional(z,ge,"bindMatrixInverse");const vn=ge.skeleton;vn&&(O.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Zt.setValue(z,"boneTexture",vn.boneTexture,De),Zt.setValue(z,"boneTextureSize",vn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ea=pe.morphAttributes;if((Ea.position!==void 0||Ea.normal!==void 0||Ea.color!==void 0&&O.isWebGL2===!0)&&P.update(ge,pe,yi),(rr||ht.receiveShadow!==ge.receiveShadow)&&(ht.receiveShadow=ge.receiveShadow,Zt.setValue(z,"receiveShadow",ge.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Kn.envMap.value=ot,Kn.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),rr&&(Zt.setValue(z,"toneMappingExposure",_.toneMappingExposure),ht.needsLights&&li(Kn,ar),Ke&&ae.fog===!0&&K.refreshFogUniforms(Kn,Ke),K.refreshMaterialUniforms(Kn,ae,Q,X,ze),Vs.upload(z,ht.uniformsList,Kn,De)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Vs.upload(z,ht.uniformsList,Kn,De),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Zt.setValue(z,"center",ge.center),Zt.setValue(z,"modelViewMatrix",ge.modelViewMatrix),Zt.setValue(z,"normalMatrix",ge.normalMatrix),Zt.setValue(z,"modelMatrix",ge.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const vn=ae.uniformsGroups;for(let Cr=0,ls=vn.length;Cr<ls;Cr++)if(O.isWebGL2){const cs=vn[Cr];Qe.update(cs,yi),Qe.bind(cs,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function li(L,ee){L.ambientLightColor.needsUpdate=ee,L.lightProbe.needsUpdate=ee,L.directionalLights.needsUpdate=ee,L.directionalLightShadows.needsUpdate=ee,L.pointLights.needsUpdate=ee,L.pointLightShadows.needsUpdate=ee,L.spotLights.needsUpdate=ee,L.spotLightShadows.needsUpdate=ee,L.rectAreaLights.needsUpdate=ee,L.hemisphereLights.needsUpdate=ee}function qn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,ee,pe){Ae.get(L.texture).__webglTexture=ee,Ae.get(L.depthTexture).__webglTexture=pe;const ae=Ae.get(L);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=pe===void 0,ae.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,ee){const pe=Ae.get(L);pe.__webglFramebuffer=ee,pe.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(L,ee=0,pe=0){A=L,C=ee,D=pe;let ae=!0,ge=null,Ke=!1,tt=!1;if(L){const ot=Ae.get(L);ot.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(z.FRAMEBUFFER,null),ae=!1):ot.__webglFramebuffer===void 0?De.setupRenderTarget(L):ot.__hasExternalTextures&&De.rebindTextures(L,Ae.get(L.texture).__webglTexture,Ae.get(L.depthTexture).__webglTexture);const mt=L.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(tt=!0);const rt=Ae.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(rt[ee])?ge=rt[ee][pe]:ge=rt[ee],Ke=!0):O.isWebGL2&&L.samples>0&&De.useMultisampledRTT(L)===!1?ge=Ae.get(L).__webglMultisampledFramebuffer:Array.isArray(rt)?ge=rt[pe]:ge=rt,w.copy(L.viewport),ie.copy(L.scissor),V=L.scissorTest}else w.copy(ce).multiplyScalar(Q).floor(),ie.copy(W).multiplyScalar(Q).floor(),V=$;if(Z.bindFramebuffer(z.FRAMEBUFFER,ge)&&O.drawBuffers&&ae&&Z.drawBuffers(L,ge),Z.viewport(w),Z.scissor(ie),Z.setScissorTest(V),Ke){const ot=Ae.get(L.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ot.__webglTexture,pe)}else if(tt){const ot=Ae.get(L.texture),mt=ee||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ot.__webglTexture,pe||0,mt)}k=-1},this.readRenderTargetPixels=function(L,ee,pe,ae,ge,Ke,tt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=Ae.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&tt!==void 0&&(it=it[tt]),it){Z.bindFramebuffer(z.FRAMEBUFFER,it);try{const ot=L.texture,mt=ot.format,rt=ot.type;if(mt!==ei&&Ce.convert(mt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ct=rt===ma&&(Ie.has("EXT_color_buffer_half_float")||O.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(rt!==$i&&Ce.convert(rt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===Ui&&(O.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=L.width-ae&&pe>=0&&pe<=L.height-ge&&z.readPixels(ee,pe,ae,ge,Ce.convert(mt),Ce.convert(rt),Ke)}finally{const ot=A!==null?Ae.get(A).__webglFramebuffer:null;Z.bindFramebuffer(z.FRAMEBUFFER,ot)}}},this.copyFramebufferToTexture=function(L,ee,pe=0){const ae=Math.pow(2,-pe),ge=Math.floor(ee.image.width*ae),Ke=Math.floor(ee.image.height*ae);De.setTexture2D(ee,0),z.copyTexSubImage2D(z.TEXTURE_2D,pe,0,0,L.x,L.y,ge,Ke),Z.unbindTexture()},this.copyTextureToTexture=function(L,ee,pe,ae=0){const ge=ee.image.width,Ke=ee.image.height,tt=Ce.convert(pe.format),it=Ce.convert(pe.type);De.setTexture2D(pe,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,pe.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pe.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,pe.unpackAlignment),ee.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ae,L.x,L.y,ge,Ke,tt,it,ee.image.data):ee.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ae,L.x,L.y,ee.mipmaps[0].width,ee.mipmaps[0].height,tt,ee.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,ae,L.x,L.y,tt,it,ee.image),ae===0&&pe.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(L,ee,pe,ae,ge=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ke=L.max.x-L.min.x+1,tt=L.max.y-L.min.y+1,it=L.max.z-L.min.z+1,ot=Ce.convert(ae.format),mt=Ce.convert(ae.type);let rt;if(ae.isData3DTexture)De.setTexture3D(ae,0),rt=z.TEXTURE_3D;else if(ae.isDataArrayTexture)De.setTexture2DArray(ae,0),rt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,ae.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,ae.unpackAlignment);const ct=z.getParameter(z.UNPACK_ROW_LENGTH),Lt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Nt=z.getParameter(z.UNPACK_SKIP_PIXELS),Mn=z.getParameter(z.UNPACK_SKIP_ROWS),Nn=z.getParameter(z.UNPACK_SKIP_IMAGES),Ot=pe.isCompressedTexture?pe.mipmaps[0]:pe.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Ot.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,L.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,L.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,L.min.z),pe.isDataTexture||pe.isData3DTexture?z.texSubImage3D(rt,ge,ee.x,ee.y,ee.z,Ke,tt,it,ot,mt,Ot.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(rt,ge,ee.x,ee.y,ee.z,Ke,tt,it,ot,Ot.data)):z.texSubImage3D(rt,ge,ee.x,ee.y,ee.z,Ke,tt,it,ot,mt,Ot),z.pixelStorei(z.UNPACK_ROW_LENGTH,ct),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Lt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Mn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Nn),ge===0&&ae.generateMipmaps&&z.generateMipmap(rt),Z.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?De.setTextureCube(L,0):L.isData3DTexture?De.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?De.setTexture2DArray(L,0):De.setTexture2D(L,0),Z.unbindTexture()},this.resetState=function(){C=0,D=0,A=null,Z.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Mr:Df}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mr?It:bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ES extends th{}ES.prototype.isWebGL1Renderer=!0;class wS extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class TS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Al,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new q;class ro{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),i=Tt(i,this.array),r=Tt(r,this.array),a=Tt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ro(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nh extends Sa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Kr;const Pa=new q,Zr=new q,Jr=new q,Qr=new $e,La=new $e,ih=new Vt,Is=new q,Da=new q,Us=new q,nd=new $e,rl=new $e,id=new $e;class AS extends hn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new Vi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new TS(t,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new ro(i,3,0,!1)),Kr.setAttribute("uv",new ro(i,2,3,!1))}this.geometry=Kr,this.material=e!==void 0?e:new nh,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),ih.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Jr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;Ns(Is.set(-.5,-.5,0),Jr,o,Zr,r,a),Ns(Da.set(.5,-.5,0),Jr,o,Zr,r,a),Ns(Us.set(.5,.5,0),Jr,o,Zr,r,a),nd.set(0,0),rl.set(1,0),id.set(1,1);let s=e.ray.intersectTriangle(Is,Da,Us,!1,Pa);if(s===null&&(Ns(Da.set(-.5,.5,0),Jr,o,Zr,r,a),rl.set(0,1),s=e.ray.intersectTriangle(Is,Us,Da,!1,Pa),s===null))return;const l=e.ray.origin.distanceTo(Pa);l<e.near||l>e.far||t.push({distance:l,point:Pa.clone(),uv:jn.getInterpolation(Pa,Is,Da,Us,nd,rl,id,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ns(n,e,t,i,r,a){Qr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(La.x=a*Qr.x-r*Qr.y,La.y=r*Qr.x+a*Qr.y):La.copy(Qr),n.copy(e),n.x+=La.x,n.y+=La.y,n.applyMatrix4(ih)}class Ws extends fn{constructor(e,t,i,r,a,o,s,l,u){super(e,t,i,r,a,o,s,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class es extends Sa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=If,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rh extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const al=new Vt,rd=new q,ad=new q;class RS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sd=new Vt,Ia=new q,sl=new q;class CS extends RS{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ia),sl.copy(i.position),sl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sl),i.updateMatrixWorld(),r.makeTranslation(-Ia.x,-Ia.y,-Ia.z),sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd)}}class PS extends rh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new CS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LS extends rh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ah{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=od(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=od();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function od(){return(typeof performance>"u"?Date:performance).now()}class ld{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);function rc(n,e,t,i,r,a,o,s){const l=(A,k,y,w)=>[new $e(A/o,1-w/s),new $e(y/o,1-w/s),new $e(y/o,1-k/s),new $e(A/o,1-k/s)],u=l(e+a,t,e+i+a,t+a),d=l(e+i+a,t,e+i*2+a,t+a),p=l(e,t+a,e+a,t+a+r),f=l(e+a,t+a,e+i+a,t+a+r),v=l(e+i+a,t+a,e+i+a*2,t+r+a),g=l(e+i+a*2,t+a,e+i*2+a*2,t+r+a),b=n.attributes.uv,m=[v[3],v[2],v[0],v[1]],h=[p[3],p[2],p[0],p[1]],M=[u[3],u[2],u[0],u[1]],_=[d[0],d[1],d[3],d[2]],E=[f[3],f[2],f[0],f[1]],C=[g[3],g[2],g[0],g[1]],D=[];for(const A of[m,h,M,_,E,C])for(const k of A)D.push(k.x,k.y);b.set(new Float32Array(D)),b.needsUpdate=!0}function Bn(n,e,t,i,r,a){rc(n,e,t,i,r,a,64,64)}function Dl(n,e,t,i,r,a){rc(n,e,t,i,r,a,64,32)}class ur extends on{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class DS extends on{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new es({side:xi}),this.layer2Material=new es({side:Xn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new Gt(8,8,8);Bn(e,0,0,8,8,8);const t=new At(e,this.layer1Material),i=new Gt(9,9,9);Bn(i,32,0,8,8,8);const r=new At(i,this.layer2Material);this.head=new ur(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new Gt(8,12,4);Bn(a,16,16,8,12,4);const o=new At(a,this.layer1Material),s=new Gt(8.5,12.5,4.5);Bn(s,16,32,8,12,4);const l=new At(s,this.layer2Material);this.body=new ur(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const u=new Gt,d=new At(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3:4,d.scale.y=12,d.scale.z=4,Bn(u,40,16,this.slim?3:4,12,4)});const p=new Gt,f=new At(p,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Bn(p,40,32,this.slim?3:4,12,4)});const v=new on;v.add(d,f),this.modelListeners.push(()=>{v.position.x=this.slim?-.5:-1}),v.position.y=-4,this.rightArm=new ur(d,f),this.rightArm.name="rightArm",this.rightArm.add(v),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const g=new Gt,b=new At(g,this.layer1MaterialBiased);this.modelListeners.push(()=>{b.scale.x=this.slim?3:4,b.scale.y=12,b.scale.z=4,Bn(g,32,48,this.slim?3:4,12,4)});const m=new Gt,h=new At(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3.5:4.5,h.scale.y=12.5,h.scale.z=4.5,Bn(m,48,48,this.slim?3:4,12,4)});const M=new on;M.add(b,h),this.modelListeners.push(()=>{M.position.x=this.slim?.5:1}),M.position.y=-4,this.leftArm=new ur(b,h),this.leftArm.name="leftArm",this.leftArm.add(M),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const _=new Gt(4,12,4);Bn(_,0,16,4,12,4);const E=new At(_,this.layer1MaterialBiased),C=new Gt(4.5,12.5,4.5);Bn(C,0,32,4,12,4);const D=new At(C,this.layer2MaterialBiased),A=new on;A.add(E,D),A.position.y=-6,this.rightLeg=new ur(E,D),this.rightLeg.name="rightLeg",this.rightLeg.add(A),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const k=new Gt(4,12,4);Bn(k,16,48,4,12,4);const y=new At(k,this.layer1MaterialBiased),w=new Gt(4.5,12.5,4.5);Bn(w,0,48,4,12,4);const ie=new At(w,this.layer2MaterialBiased),V=new on;V.add(y,ie),V.position.y=-6,this.leftLeg=new ur(y,ie),this.leftLeg.name="leftLeg",this.leftLeg.add(V),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof ur)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class IS extends on{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new es({side:Xn,transparent:!0,alphaTest:1e-5});const e=new Gt(10,16,1);Dl(e,0,0,10,16,1),this.cape=new At(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class US extends on{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new es({side:Xn,transparent:!0,alphaTest:1e-5});const e=new Gt(12,22,4);Dl(e,22,0,10,20,2);const t=new At(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new on,this.leftWing.add(t),this.add(this.leftWing);const i=new Gt(12,22,4);Dl(i,22,0,10,20,2);const r=new At(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new on,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class NS extends on{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new es({side:xi});const e=new Gt(8,8,4/3);rc(e,0,0,6,6,1,14,7),this.rightEar=new At(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new At(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const cd=10.8*Math.PI/180;class OS extends on{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new DS,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new IS,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=cd,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new US,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new NS,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=cd,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Os(n){return n instanceof HTMLImageElement||n instanceof HTMLVideoElement||n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}function Il(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(a.data[l+3]!==255)return!0}return!1}function go(n){return n/64}function ud(n,e,t){if(t){if(Il(n,0,0,e,e))return}else if(Il(n,0,0,e,e/2))return;const i=go(e),r=(a,o,s,l)=>n.clearRect(a*i,o*i,s*i,l*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function FS(n,e){n.save(),n.scale(-1,1);const t=go(e),i=(r,a,o,s,l,u)=>n.drawImage(n.canvas,r*t,a*t,o*t,s*t,-l*t,u*t,-o*t,s*t);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),n.restore()}function kS(n,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=n.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;n.width=r,n.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),FS(i,r),ud(i,n.width,!1)}else n.width=e.width,n.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,n.width,n.height),ud(i,n.width,!0)}function BS(n){if(n.width===2*n.height)return n.width/64;if(n.width*17===n.height*22)return n.width/22;if(n.width*11===n.height*23)return n.width/46;throw new Error(`Bad cape size: ${n.width}x${n.height}`)}function zS(n,e){const t=BS(e);n.width=64*t,n.height=32*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function GS(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===0&&a.data[l+1]===0&&a.data[l+2]===0&&a.data[l+3]===255))return!1}return!0}function HS(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const l=(o+s*i)*4;if(!(a.data[l+0]===255&&a.data[l+1]===255&&a.data[l+2]===255&&a.data[l+3]===255))return!1}return!0}function VS(n){const e=go(n.width),t=n.getContext("2d",{willReadFrequently:!0}),i=(s,l,u,d)=>Il(t,s*e,l*e,u*e,d*e),r=(s,l,u,d)=>GS(t,s*e,l*e,u*e,d*e),a=(s,l,u,d)=>HS(t,s*e,l*e,u*e,d*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function WS(n){if(n.width===n.height*2&&n.height%7===0)return n.height/7;throw new Error(`Bad ears size: ${n.width}x${n.height}`)}function jS(n,e){const t=WS(e);n.width=14*t,n.height=7*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function dd(n,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=go(e.width),i=14*t,r=7*t;n.width=i,n.height=r;const a=n.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,i,r),a.drawImage(e,24*t,0,i,r,0,0,i,r)}async function Fs(n){const e=document.createElement("img");return new Promise((t,i)=>{e.onload=()=>t(e),e.onerror=i,e.crossOrigin="anonymous",typeof n=="string"?e.src=n:(n.crossOrigin!==void 0&&(e.crossOrigin=n.crossOrigin),n.referrerPolicy!==void 0&&(e.referrerPolicy=n.referrerPolicy),e.src=n.src)})}const fd={type:"change"},ol={type:"start"},hd={type:"end"},ks=new kf,pd=new Ki,XS=Math.cos(70*g_.DEG2RAD);class YS extends Ar{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Lr.ROTATE,MIDDLE:Lr.DOLLY,RIGHT:Lr.PAN},this.touches={ONE:Dr.ROTATE,TWO:Dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",S),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fd),i.update(),a=r.NONE},this.update=(function(){const P=new q,se=new Tr().setFromUnitVectors(e.up,new q(0,1,0)),ye=se.clone().invert(),Ce=new q,Ne=new Tr,Qe=new q,at=2*Math.PI;return function(Ee=null){const B=i.object.position;P.copy(B).sub(i.target),P.applyQuaternion(se),s.setFromVector3(P),i.autoRotate&&a===r.NONE&&ie(y(Ee)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let ve=i.minAzimuthAngle,Re=i.maxAzimuthAngle;isFinite(ve)&&isFinite(Re)&&(ve<-Math.PI?ve+=at:ve>Math.PI&&(ve-=at),Re<-Math.PI?Re+=at:Re>Math.PI&&(Re-=at),ve<=Re?s.theta=Math.max(ve,Math.min(Re,s.theta)):s.theta=s.theta>(ve+Re)/2?Math.max(ve,s.theta):Math.min(Re,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.zoomToCursor&&D||i.object.isOrthographicCamera?s.radius=me(s.radius):s.radius=me(s.radius*u),P.setFromSpherical(s),P.applyQuaternion(ye),B.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let Je=!1;if(i.zoomToCursor&&D){let nt=null;if(i.object.isPerspectiveCamera){const st=P.length();nt=me(st*u);const yt=st-nt;i.object.position.addScaledVector(E,yt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const st=new q(C.x,C.y,0);st.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Je=!0;const yt=new q(C.x,C.y,0);yt.unproject(i.object),i.object.position.sub(yt).add(st),i.object.updateMatrixWorld(),nt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;nt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(nt).add(i.object.position):(ks.origin.copy(i.object.position),ks.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ks.direction))<XS?e.lookAt(i.target):(pd.setFromNormalAndCoplanarPoint(i.object.up,i.target),ks.intersectPlane(pd,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Je=!0);return u=1,D=!1,Je||Ce.distanceToSquared(i.object.position)>o||8*(1-Ne.dot(i.object.quaternion))>o||Qe.distanceToSquared(i.target)>0?(i.dispatchEvent(fd),Ce.copy(i.object.position),Ne.copy(i.object.quaternion),Qe.copy(i.target),Je=!1,!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ne),i.domElement.removeEventListener("pointerdown",Ae),i.domElement.removeEventListener("pointercancel",de),i.domElement.removeEventListener("wheel",R),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",de),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",S),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new ld,l=new ld;let u=1;const d=new q,p=new $e,f=new $e,v=new $e,g=new $e,b=new $e,m=new $e,h=new $e,M=new $e,_=new $e,E=new q,C=new $e;let D=!1;const A=[],k={};function y(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function ie(P){l.theta-=P}function V(P){l.phi-=P}const N=(function(){const P=new q;return function(ye,Ce){P.setFromMatrixColumn(Ce,0),P.multiplyScalar(-ye),d.add(P)}})(),G=(function(){const P=new q;return function(ye,Ce){i.screenSpacePanning===!0?P.setFromMatrixColumn(Ce,1):(P.setFromMatrixColumn(Ce,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(ye),d.add(P)}})(),H=(function(){const P=new q;return function(ye,Ce){const Ne=i.domElement;if(i.object.isPerspectiveCamera){const Qe=i.object.position;P.copy(Qe).sub(i.target);let at=P.length();at*=Math.tan(i.object.fov/2*Math.PI/180),N(2*ye*at/Ne.clientHeight,i.object.matrix),G(2*Ce*at/Ne.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(ye*(i.object.right-i.object.left)/i.object.zoom/Ne.clientWidth,i.object.matrix),G(Ce*(i.object.top-i.object.bottom)/i.object.zoom/Ne.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function X(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(P){if(!i.zoomToCursor)return;D=!0;const se=i.domElement.getBoundingClientRect(),ye=P.clientX-se.left,Ce=P.clientY-se.top,Ne=se.width,Qe=se.height;C.x=ye/Ne*2-1,C.y=-(Ce/Qe)*2+1,E.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function me(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function ce(P){p.set(P.clientX,P.clientY)}function W(P){te(P),h.set(P.clientX,P.clientY)}function $(P){g.set(P.clientX,P.clientY)}function we(P){f.set(P.clientX,P.clientY),v.subVectors(f,p).multiplyScalar(i.rotateSpeed);const se=i.domElement;ie(2*Math.PI*v.x/se.clientHeight),V(2*Math.PI*v.y/se.clientHeight),p.copy(f),i.update()}function Le(P){M.set(P.clientX,P.clientY),_.subVectors(M,h),_.y>0?X(w()):_.y<0&&Q(w()),h.copy(M),i.update()}function Oe(P){b.set(P.clientX,P.clientY),m.subVectors(b,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(b),i.update()}function ze(P){te(P),P.deltaY<0?Q(w()):P.deltaY>0&&X(w()),i.update()}function We(P){let se=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),se=!0;break}se&&(P.preventDefault(),i.update())}function He(){if(A.length===1)p.set(A[0].pageX,A[0].pageY);else{const P=.5*(A[0].pageX+A[1].pageX),se=.5*(A[0].pageY+A[1].pageY);p.set(P,se)}}function _e(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const P=.5*(A[0].pageX+A[1].pageX),se=.5*(A[0].pageY+A[1].pageY);g.set(P,se)}}function Ge(){const P=A[0].pageX-A[1].pageX,se=A[0].pageY-A[1].pageY,ye=Math.sqrt(P*P+se*se);h.set(0,ye)}function Be(){i.enableZoom&&Ge(),i.enablePan&&_e()}function z(){i.enableZoom&&Ge(),i.enableRotate&&He()}function qe(P){if(A.length==1)f.set(P.pageX,P.pageY);else{const ye=J(P),Ce=.5*(P.pageX+ye.x),Ne=.5*(P.pageY+ye.y);f.set(Ce,Ne)}v.subVectors(f,p).multiplyScalar(i.rotateSpeed);const se=i.domElement;ie(2*Math.PI*v.x/se.clientHeight),V(2*Math.PI*v.y/se.clientHeight),p.copy(f)}function Ie(P){if(A.length===1)b.set(P.pageX,P.pageY);else{const se=J(P),ye=.5*(P.pageX+se.x),Ce=.5*(P.pageY+se.y);b.set(ye,Ce)}m.subVectors(b,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(b)}function O(P){const se=J(P),ye=P.pageX-se.x,Ce=P.pageY-se.y,Ne=Math.sqrt(ye*ye+Ce*Ce);M.set(0,Ne),_.set(0,Math.pow(M.y/h.y,i.zoomSpeed)),X(_.y),h.copy(M)}function Z(P){i.enableZoom&&O(P),i.enablePan&&Ie(P)}function be(P){i.enableZoom&&O(P),i.enableRotate&&qe(P)}function Ae(P){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",De),i.domElement.addEventListener("pointerup",de)),xe(P),P.pointerType==="touch"?I(P):Fe(P))}function De(P){i.enabled!==!1&&(P.pointerType==="touch"?K(P):ke(P))}function de(P){Te(P),A.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",de)),i.dispatchEvent(hd),a=r.NONE}function Fe(P){let se;switch(P.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Lr.DOLLY:if(i.enableZoom===!1)return;W(P),a=r.DOLLY;break;case Lr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;$(P),a=r.PAN}else{if(i.enableRotate===!1)return;ce(P),a=r.ROTATE}break;case Lr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;ce(P),a=r.ROTATE}else{if(i.enablePan===!1)return;$(P),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(ol)}function ke(P){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;we(P);break;case r.DOLLY:if(i.enableZoom===!1)return;Le(P);break;case r.PAN:if(i.enablePan===!1)return;Oe(P);break}}function R(P){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(P.preventDefault(),i.dispatchEvent(ol),ze(P),i.dispatchEvent(hd))}function S(P){i.enabled===!1||i.enablePan===!1||We(P)}function I(P){switch(Se(P),A.length){case 1:switch(i.touches.ONE){case Dr.ROTATE:if(i.enableRotate===!1)return;He(),a=r.TOUCH_ROTATE;break;case Dr.PAN:if(i.enablePan===!1)return;_e(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Dr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(),a=r.TOUCH_DOLLY_PAN;break;case Dr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;z(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(ol)}function K(P){switch(Se(P),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;qe(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ie(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Z(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(P),i.update();break;default:a=r.NONE}}function ne(P){i.enabled!==!1&&P.preventDefault()}function xe(P){A.push(P)}function Te(P){delete k[P.pointerId];for(let se=0;se<A.length;se++)if(A[se].pointerId==P.pointerId){A.splice(se,1);return}}function Se(P){let se=k[P.pointerId];se===void 0&&(se=new $e,k[P.pointerId]=se),se.set(P.pageX,P.pageY)}function J(P){const se=P.pointerId===A[0].pointerId?A[1]:A[0];return k[se.pointerId]}i.domElement.addEventListener("contextmenu",ne),i.domElement.addEventListener("pointerdown",Ae),i.domElement.addEventListener("pointercancel",de),i.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}const qS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _o{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const KS=new Kf(-1,1,1,-1,0,1),ac=new Vi;ac.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3));ac.setAttribute("uv",new ki([0,2,0,0,2,0],2));class ZS{constructor(e){this._mesh=new At(ac,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,KS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class sh extends _o{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jf.clone(e.uniforms),this.material=new Gi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ZS(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class md extends _o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class JS extends _o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class QS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new zi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ma}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sh(qS),this.copyPass.material.blending=Fi,this.clock=new ah}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}md!==void 0&&(o instanceof md?i=!0:o instanceof JS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $S extends _o{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const eM={uniforms:{tDiffuse:{value:null},resolution:{value:new $e(1/1024,1/512)}},vertexShader:`

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
	`};class oh{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const i=t*this.speed;this.animate(e,i),this.animationObjects.forEach((r,a)=>{const o=this.progress0.get(a);r(e,this.progress-o,a)}),this.progress+=i}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class vd extends oh{animate(e){const t=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class gd extends oh{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class tM extends AS{constructor(e="",t={}){const i=new nh({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const i=t.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new Ws(e);r.magFilter=Bt,r.minFilter=Bt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class nM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new LS(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new PS(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new wS,this.camera=new In,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),zn.enabled=!1,this.renderer=new th({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new zi(0,0,{depthTexture:new eh(0,0,Ui)})),this.composer=new QS(this.renderer,t),this.renderPass=new $S(this.scene,this.camera),this.fxaaPass=new sh(eM),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new OS,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new on,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new YS(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new ah,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Ws(this.skinCanvas),this.skinTexture.magFilter=Bt,this.skinTexture.minFilter=Bt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Ws(this.capeCanvas),this.capeTexture.magFilter=Bt,this.capeTexture.minFilter=Bt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Ws(this.earsCanvas),this.earsTexture.magFilter=Bt,this.earsTexture.minFilter=Bt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Os(e))kS(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=VS(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(dd(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Fs(e).then(i=>this.loadSkin(i,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Os(e))zS(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Fs(e).then(i=>this.loadCape(i,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Os(e))t.textureType==="skin"?dd(this.earsCanvas,e):jS(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Fs(e).then(i=>this.loadEars(i,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,to)}loadBackground(e,t){if(Os(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new fn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Fs(e).then(i=>this.loadBackground(i,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new q).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new $e).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new $e).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Mt||e instanceof fn?this.scene.background=e:this.scene.background=new Mt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof hn||(e=new tM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const Vn=Rt({list:[],active:null,ready:!1}),ll=new Map;function Ul(n,e){const t=window.__TAURI__?.core;return t?t.invoke(n,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function Bs(){try{Vn.list=await Ul("get_accounts"),Vn.active=await Ul("get_active_account")}catch{}finally{Vn.ready=!0}}function ts(n){return n?n.skin??(n.account_type?.type==="ely_by"?n.username:null):null}async function Nl(n){if(!n)return null;const e=String(n).trim();if(!e||e.startsWith("data:"))return e||null;if(ll.has(e))return ll.get(e);try{const t=await Ul("proxy_skin_png",{source:e});return ll.set(e,t),t}catch{return null}}function iM(n){try{const e=String(n??"").split(",")[1]??"",t=atob(e.slice(0,44));if(t.length<24)return null;const i=o=>t.charCodeAt(o)&255;if(i(1)!==80||i(2)!==78||i(3)!==71)return null;const r=(i(16)<<24|i(17)<<16|i(18)<<8|i(19))>>>0,a=(i(20)<<24|i(21)<<16|i(22)<<8|i(23))>>>0;return!r||!a?null:{width:r,height:a}}catch{return null}}var rM=re('<button title="Toggle the hat/jacket outer layer"> </button>'),aM=re("<canvas></canvas> <!>",1);function sc(n,e){qt(e,!0);let t=et(e,"skin",3,null),i=et(e,"cape",3,null),r=et(e,"model",3,null),a=et(e,"width",3,260),o=et(e,"height",3,340),s=et(e,"walking",3,!1),l=et(e,"autorotate",3,!1),u=et(e,"zoom",3,.85),d=et(e,"outerLayer",15,!0),p=et(e,"showToggle",3,!1),f=fe(null),v=null,g,b,m,h=fe(null),M=fe(null),_=0;function E(V){if(!V)return null;const N=String(V).trim();if(!N)return null;if(/^(https?:|data:)/i.test(N))return N;const G=window.__TAURI__?.core?.convertFileSrc;return G?G(N):N}function C(V){const N=String(V??"").trim().toLowerCase();return N==="slim"?"slim":N==="classic"?"default":"auto-detect"}function D(){v&&((c(h)!==g||C(r())!==m)&&(g=c(h),m=C(r()),c(h)?v.loadSkin(c(h),{model:m}).catch(()=>{}):v.resetSkin()),c(M)!==b&&(b=c(M),c(M)?v.loadCape(c(M)).catch(()=>{}):v.resetCape()))}function A(){const V=v?.playerObject?.skin;if(V)for(const N of[V.head,V.body,V.rightArm,V.leftArm,V.rightLeg,V.leftLeg])N?.outerLayer&&(N.outerLayer.visible=d())}ir(()=>(v=new nM({canvas:c(f),width:a(),height:o(),zoom:u(),fov:55}),v.controls.enablePan=!1,v.controls.enableZoom=!0,v.autoRotate=l(),v.animation=s()?new gd:new vd,D(),A(),()=>{v?.dispose(),v=null})),an(()=>{const V=t(),N=i(),G=++_;(async()=>{const H=await Nl(V),X=await Nl(N);G===_&&(x(h,H??E(V),!0),x(M,X??E(N),!0))})()}),an(()=>{D(),A()}),an(()=>{d(),v&&A()}),an(()=>{v&&(v.animation=s()?new gd:new vd)}),an(()=>{v&&(v.autoRotate=l())}),an(()=>{v&&v.setSize(a(),o())});var k=aM(),y=xt(k);hf(y,V=>x(f,V),()=>c(f));var w=T(y,2);{var ie=V=>{var N=rM(),G=ue(N);Me(()=>{_t(N,1,`rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) ${d()?"text-(--accent)":""}`),Xe(N,"aria-pressed",d()),he(G,`Outer layer: ${d()?"on":"off"}`)}),oe("click",N,()=>d(!d())),Y(V,N)};Ve(w,V=>{p()&&V(ie)})}Me(()=>xn(y,`width:${a()??""}px;height:${o()??""}px;display:block`)),Y(n,k),Kt()}mn(["click"]);var sM=re('<span class="absolute inset-0"></span> <span class="absolute inset-0"></span>',1),oM=re('<span class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"> </span>'),lM=re("<span><!></span>");function oc(n,e){qt(e,!0);let t=et(e,"source",3,null),i=et(e,"size",3,32),r=et(e,"letter",3,null),a=et(e,"class",3,""),o=fe(null),s=fe(1),l=0;an(()=>{const m=t(),h=++l;(async()=>{const M=await Nl(m);if(h!==l)return;x(o,M,!0);const _=M?iM(M):null;x(s,_&&_.height&&_.width?_.height/_.width:1,!0)})()}),ql(()=>{l+=1});const u=lt(()=>(800*c(s)).toFixed(4)),d=lt(()=>(100/(8*c(s)-1)).toFixed(4)),p=lt(()=>c(o)?`background-image:url(${c(o)});background-size:800% ${c(u)}%;image-rendering:pixelated;`:"");var f=lM(),v=U(f);{var g=m=>{var h=sM(),M=xt(h),_=T(M,2);Me(()=>{xn(M,`${c(p)}background-position:14.2857% ${c(d)}%`),xn(_,`${c(p)}background-position:71.4286% ${c(d)}%`)}),Y(m,h)},b=m=>{var h=oM(),M=ue(h,!0);Me(()=>{xn(h,`font-size:${i()*.45}px`),he(M,r())}),Y(m,h)};Ve(v,m=>{c(o)?m(g):r()&&m(b,1)})}Me(()=>{_t(f,1,`relative inline-block shrink-0 overflow-hidden ${a()??""}`),xn(f,`width:${i()??""}px;height:${i()??""}px`)}),Y(n,f),Kt()}var cM=re('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),uM=re(`<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40" title="Silently renew this account's token"> </button>`),dM=re('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),fM=re('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),hM=re('<div><div class="flex items-center gap-3"><!> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),pM=re('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),mM=re('<p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),vM=re('<div class="flex flex-col"><!> <!></div>');function lh(n,e){qt(e,!0);let t=et(e,"accounts",19,()=>[]),i=et(e,"active",3,null),r=fe(""),a=fe(!1),o=fe(null),s=fe(""),l=fe(""),u=fe(null);function d(y,w){const ie=window.__TAURI__?.core;return ie?ie.invoke(y,w):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function p(y){x(r,"");try{await d("set_active_account",{id:y}),await e.onrefresh?.()}catch(w){x(r,String(w),!0)}}async function f(y){x(r,"");try{await d("remove_account",{id:y}),c(o)===y&&x(o,null),await e.onrefresh?.()}catch(w){x(r,String(w),!0)}}async function v(y){const w=g(y);if(w){x(r,""),x(u,y.id,!0);try{await d(w,{id:y.id}),await e.onrefresh?.()}catch(ie){x(r,String(ie),!0)}finally{x(u,null)}}}function g(y){const w=y.account_type?.type;return w==="microsoft"?"refresh_microsoft_account":w==="ely_by"&&y.refresh_token?"refresh_elyby_account":null}function b(y){if(c(o)===y.id){x(o,null);return}x(o,y.id,!0),x(s,y.skin??"",!0),x(l,y.cape??"",!0)}async function m(y){const w=window.__TAURI__?.dialog?.open;if(!w){x(r,"File picker unavailable in this build.");return}try{const ie=await w({multiple:!1,title:y==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!ie)return;x(y==="skin"?s:l,String(ie),!0),x(r,"")}catch(ie){x(r,String(ie),!0)}}async function h(){x(r,""),x(a,!0);try{await d("set_account_textures",{id:c(o),skin:c(s).trim()||null,cape:c(l).trim()||null}),await e.onrefresh?.(),x(o,null)}catch(y){x(r,String(y),!0)}finally{x(a,!1)}}async function M(){x(s,""),x(l,""),await h()}function _(y){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[y.account_type.type]??"Yggdrasil"}const E=lt(()=>t().find(y=>y.id===c(o))??null);var C=vM(),D=U(C);wt(D,17,t,y=>y.id,(y,w)=>{var ie=hM(),V=U(ie),N=U(V);{let O=lt(()=>ts(c(w))),Z=lt(()=>c(w).username[0]?.toUpperCase()??"?");oc(N,{get source(){return c(O)},size:32,get letter(){return c(Z)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var G=T(N,2),H=U(G),X=U(H),Q=ue(X,!0),te=T(X,2),me=ue(te,!0),ce=T(te,2);{var W=O=>{var Z=cM();Y(O,Z)};Ve(ce,O=>{i()?.id===c(w).id&&O(W)})}var $=T(H,2),we=ue($,!0),Le=T(G,2),Oe=U(Le),ze=U(Oe);pi(ze,{emoji:"🎨"});var We=T(Oe,2);{var He=O=>{var Z=uM(),be=ue(Z,!0);Me(()=>{Z.disabled=c(u)!==null,he(be,c(u)===c(w).id?"Refreshing…":"Refresh token")}),oe("click",Z,()=>v(c(w))),Y(O,Z)},_e=lt(()=>g(c(w)));Ve(We,O=>{c(_e)&&O(He)})}var Ge=T(We,2);{var Be=O=>{var Z=dM();oe("click",Z,()=>p(c(w).id)),Y(O,Z)};Ve(Ge,O=>{i()?.id!==c(w).id&&O(Be)})}var z=T(Ge,2),qe=T(V,2);{var Ie=O=>{var Z=fM(),be=U(Z);{let xe=lt(()=>c(E)?.model);sc(be,{get skin(){return c(s)},get cape(){return c(l)},get model(){return c(xe)},width:110,height:150})}var Ae=T(be,2),De=U(Ae),de=T(U(De)),Fe=ue(de,!0),ke=T(De,2),R=T(U(ke)),S=ue(R,!0),I=T(ke,2),K=U(I),ne=T(K,2);Me(()=>{he(Fe,c(s)||"default (Steve/Alex)"),he(S,c(l)||"none"),K.disabled=c(a)}),oe("click",De,()=>m("skin")),oe("click",ke,()=>m("cape")),oe("click",K,h),oe("click",ne,M),Y(O,Z)};Ve(qe,O=>{c(o)===c(w).id&&c(E)&&O(Ie)})}Me(O=>{_t(ie,1,`border-b border-(--border) px-4 py-2.5 ${i()?.id===c(w).id?"bg-(--accent)/10":""}`),he(Q,c(w).username),he(me,O),he(we,c(w).uuid)},[()=>_(c(w))]),oe("click",Oe,()=>b(c(w))),oe("click",z,()=>f(c(w).id)),Y(y,ie)},y=>{var w=pM();Y(y,w)});var A=T(D,2);{var k=y=>{var w=mM(),ie=ue(w,!0);Me(()=>he(ie,c(r))),Y(y,w)};Ve(A,y=>{c(r)&&y(k)})}Y(n,C),Kt()}mn(["click"]);var gM=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <div class="border-t border-(--border)"><!></div></div></div></div>');function _M(n,e){qt(e,!0);let t=et(e,"accounts",19,()=>[]),i=et(e,"active",3,null);ir(()=>{const f=co(()=>e.onclose?.());return()=>uo(f)});var r=gM(),a=U(r),o=U(a),s=T(U(o),2),l=T(o,2),u=U(l);bf(u,{get onrefresh(){return e.onrefresh}});var d=T(u,2),p=U(d);lh(p,{get accounts(){return t()},get active(){return i()},get onrefresh(){return e.onrefresh}}),oe("click",r,f=>{f.target===f.currentTarget&&e.onclose?.()}),oe("click",s,()=>e.onclose?.()),Y(n,r),Kt()}mn(["click"]);var xM=re('<button><span class="truncate"> </span></button>'),bM=re('<span class="text-[9px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),yM=re('<button><!> <span class="text-[12px] font-medium"> </span> <!></button>'),SM=re('<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]"><dt class="text-(--text-muted)">Profile UUID</dt> <dd class="min-w-0 truncate font-mono"> </dd> <dt class="text-(--text-muted)">Skin source</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Cape</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Renewable token</dt> <dd class="min-w-0 truncate"> </dd></dl></div>'),MM=re('<div class="mt-6 flex flex-wrap gap-2"></div> <!>',1),EM=re(`<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><p class="text-sm font-medium">No accounts yet</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom
              Yggdrasil server — everything lives in the Add Account section.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Add an account</button></div>`),wM=re('<h2 class="text-[16px] font-semibold">Account overview</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The character launches use, with the hat/jacket outer layer included.</p> <!>',1),TM=re('<h2 class="text-[16px] font-semibold">Add account</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.</p> <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),AM=re('<h2 class="text-[16px] font-semibold">Saved accounts</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Set the active profile, renew tokens silently, edit skins — or remove accounts.</p> <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),RM=re('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Accounts sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div></div>');function CM(n,e){qt(e,!0);const t=[{id:"overview",label:"Overview"},{id:"add",label:"Add Account"},{id:"saved",label:"Saved Accounts"}];let i=fe("overview"),r=fe(null);const a=lt(()=>{const M=Vn.list;return M.find(_=>_.id===c(r))??M.find(_=>_.id===Vn.active?.id)??M[0]??null});let o=fe(!0);function s(M){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[M.account_type.type]??"Yggdrasil"}var l=RM(),u=U(l),d=U(u),p=T(d,2);wt(p,21,()=>t,M=>M.id,(M,_)=>{var E=xM(),C=U(E),D=ue(C,!0);Me(()=>{_t(E,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${c(i)===c(_).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Xe(E,"aria-current",c(i)===c(_).id?"true":void 0),he(D,c(_).label)}),oe("click",E,()=>x(i,c(_).id,!0)),Y(M,E)});var f=T(u,2),v=U(f),g=U(v);{var b=M=>{var _=wM(),E=T(xt(_),4);{var C=A=>{var k=MM(),y=xt(k);wt(y,21,()=>Vn.list,V=>V.id,(V,N)=>{var G=yM(),H=U(G);{let ce=lt(()=>ts(c(N))),W=lt(()=>c(N).username[0]?.toUpperCase()??"?");oc(H,{get source(){return c(ce)},size:24,get letter(){return c(W)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var X=T(H,2),Q=ue(X,!0),te=T(X,2);{var me=ce=>{var W=bM();Y(ce,W)};Ve(te,ce=>{Vn.active?.id===c(N).id&&ce(me)})}Me(()=>{_t(G,1,`flex items-center gap-2 rounded border px-2 py-1.5 text-left ${c(a)?.id===c(N).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Xe(G,"title",`Preview ${c(N).username??""}`),he(Q,c(N).username)}),oe("click",G,()=>x(r,c(N).id,!0)),Y(V,G)});var w=T(y,2);{var ie=V=>{var N=SM(),G=U(N);{let _e=lt(()=>ts(c(a)));sc(G,{get skin(){return c(_e)},get cape(){return c(a).cape},get model(){return c(a).model},width:230,height:310,showToggle:!0,get outerLayer(){return c(o)},set outerLayer(Ge){x(o,Ge,!0)}})}var H=T(G,2),X=U(H),Q=ue(X,!0),te=T(X,2),me=ue(te,!0),ce=T(H,2),W=T(U(ce),2),$=ue(W,!0),we=T(W,4),Le=ue(we,!0),Oe=T(we,4),ze=ue(Oe,!0),We=T(Oe,4),He=ue(We,!0);Me(_e=>{he(Q,c(a).username),he(me,_e),Xe(W,"title",c(a).uuid),he($,c(a).uuid),Xe(we,"title",c(a).skin??"default (Steve/Alex)"),he(Le,c(a).skin?"custom skin":"default (Steve/Alex)"),he(ze,c(a).cape?"custom cape":"none"),he(He,c(a).refresh_token?"yes — silent refresh available":"no")},[()=>s(c(a))]),Y(V,N)};Ve(w,V=>{c(a)&&V(ie)})}Y(A,k)},D=A=>{var k=EM(),y=T(U(k),4);oe("click",y,()=>x(i,"add")),Y(A,k)};Ve(E,A=>{Vn.list.length?A(C):A(D,-1)})}Y(M,_)},m=M=>{var _=TM(),E=T(xt(_),4),C=U(E);bf(C,{get onrefresh(){return e.onrefresh}}),Y(M,_)},h=M=>{var _=AM(),E=T(xt(_),4),C=U(E);lh(C,{get accounts(){return Vn.list},get active(){return Vn.active},get onrefresh(){return e.onrefresh}}),Y(M,_)};Ve(g,M=>{c(i)==="overview"?M(b):c(i)==="add"?M(m,1):M(h,-1)})}oe("click",d,function(...M){e.onback?.apply(this,M)}),Y(n,l),Kt()}mn(["click"]);var PM=re('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),LM=re('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),DM=re('<p class="text-center text-[11px] text-red-400"> </p>'),IM=re("<option> </option>"),UM=re("<option>No instances yet</option>"),NM=re('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),OM=re('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),FM=re('<p class="mt-2 text-[11px] text-red-400"> </p>'),kM=re('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="flex items-center gap-1.5 rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer"><!> Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),BM=re('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function zM(n,e){qt(e,!0);let t=et(e,"instances",19,()=>[]),i=et(e,"active",3,null),r=et(e,"gameRunning",3,!1),a=et(e,"status",3,"Ready");function o(V,N){const G=window.__TAURI__?.core;return G?G.invoke(V,N):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let l=fe(Rt(f())),u=fe(""),d=fe(""),p=fe("");function f(){try{const V=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray(V)?V:[]}catch{return[]}}function v(){localStorage.setItem(s,JSON.stringify(c(l)))}function g(V){V.preventDefault(),x(p,"");const N=c(d).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(N)){x(p,"Address must be a hostname (optionally host:port).");return}x(l,[...c(l),{name:c(u).trim()||N.split(":")[0],address:N}],!0),v(),x(u,""),x(d,"")}function b(V){x(l,c(l).filter((N,G)=>G!==V),!0),v()}let m=fe("");an(()=>{c(m)&&t().some(V=>V.id===c(m))||x(m,t()[0]?.id??"",!0)});const h=lt(()=>t().find(V=>V.id===c(m))?.name??"no instance selected");function M(V){!c(m)||r()||e.onlaunch?.(c(m),V.address)}let _=fe(""),E=fe(!1);async function C(V){const N=window.__TAURI__?.dialog?.open;if(!N){x(_,"File picker unavailable in this build.");return}try{const G=await N({multiple:!1,title:V==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!G)return;x(E,!0),x(_,""),await o("set_account_textures",{id:i().id,skin:V==="skin"?String(G):null,cape:V==="cape"?String(G):null}),await e.onrefresh?.()}catch(G){x(_,String(G),!0)}finally{x(E,!1)}}async function D(){if(i())try{x(E,!0),await o("set_account_textures",{id:i().id,skin:null,cape:null}),await e.onrefresh?.()}catch(V){x(_,String(V),!0)}finally{x(E,!1)}}function A(V){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[V.account_type.type]??"Yggdrasil"}var k=BM(),y=U(k);{var w=V=>{var N=PM(),G=U(N);pi(G,{emoji:"👤",size:30});var H=T(G,6);oe("click",H,()=>e.onopenaccounts?.()),Y(V,N)},ie=V=>{var N=kM(),G=U(N),H=U(G);df(H,()=>i()?.id,I=>{{let K=lt(()=>ts(i()));sc(I,{get skin(){return c(K)},get cape(){return i().cape},get model(){return i().model},width:220,height:300})}});var X=T(H,2),Q=U(X),te=ue(Q,!0),me=T(Q,2),ce=ue(me,!0),W=T(X,2),$=U(W),we=T($,2),Le=T(we,2);{var Oe=I=>{var K=LM();Me(()=>K.disabled=c(E)),oe("click",K,D),Y(I,K)};Ve(Le,I=>{(i().cape||i().skin)&&I(Oe)})}var ze=T(W,2);{var We=I=>{var K=DM(),ne=ue(K,!0);Me(()=>he(ne,c(_))),Y(I,K)};Ve(ze,I=>{c(_)&&I(We)})}var He=T(G,2),_e=U(He),Ge=T(U(_e),2),Be=U(Ge);wt(Be,21,t,I=>I.id,(I,K)=>{var ne=IM(),xe=ue(ne,!0),Te={};Me(()=>{he(xe,c(K).name),Te!==(Te=c(K).id)&&(ne.value=(ne.__value=Te)??"")}),Y(I,ne)},I=>{var K=UM();K.value=K.__value="",Y(I,K)}),Qs(Be);var z=T(Be,2),qe=U(z);zt(qe,{name:"log",size:12});var Ie=T(Ge,2),O=ue(Ie,!0),Z=T(Ie,2),be=ue(Z,!0),Ae=T(_e,2),De=T(U(Ae),2);wt(De,19,()=>c(l),I=>I.address,(I,K,ne)=>{var xe=NM(),Te=U(xe),Se=U(Te),J=ue(Se,!0),P=T(Se,2),se=ue(P,!0),ye=T(Te,2),Ce=T(ye,2);Me(()=>{he(J,c(K).name),he(se,c(K).address),ye.disabled=!c(m)||r(),Xe(ye,"title",`Join ${c(K).address} with ${c(h)}`)}),oe("click",ye,()=>M(c(K))),oe("click",Ce,()=>b(c(ne))),Y(I,xe)},I=>{var K=OM();Y(I,K)});var de=T(De,2),Fe=U(de),ke=T(Fe,2),R=T(de,2);{var S=I=>{var K=FM(),ne=ue(K,!0);Me(()=>he(ne,c(p))),Y(I,K)};Ve(R,I=>{c(p)&&I(S)})}Me(I=>{he(te,i().username),he(ce,I),$.disabled=c(E),we.disabled=c(E),Ie.disabled=!c(m)||r(),he(O,r()?"GAME RUNNING…":"LAUNCH GAME"),he(be,r()?a():c(h))},[()=>A(i())]),oe("click",$,()=>C("skin")),oe("click",we,()=>C("cape")),$s(Be,()=>c(m),I=>x(m,I)),oe("click",z,()=>e.onopenconsole?.()),oe("click",Ie,()=>e.onlaunch?.(c(m),null)),gi("submit",de,g),kt(Fe,()=>c(u),I=>x(u,I)),kt(ke,()=>c(d),I=>x(d,I)),Y(V,N)};Ve(y,V=>{i()?V(ie,-1):V(w)})}Y(n,k),Kt()}mn(["click"]);var GM=re('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),HM=re('<span class="truncate text-[13px]"> </span>'),VM=re('<button><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button>'),WM=re('<span class="truncate text-[13px]">Add Instance</span>'),jM=re('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),XM=re('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),YM=re('<button role="tab"> </button>'),qM=re('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),KM=re('<div class="mb-4 flex items-center gap-2"><button class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"><!> Add Instance</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance"><!> Install .mrpack</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="flex rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),ZM=re('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),JM=re('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),QM=re('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),$M=re("<div> </div>"),e1=re('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),t1=re('<p class="mt-2 text-[12px] text-red-400"> </p>'),n1=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),i1=re('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),r1=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),a1=re('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button></div> <button><!> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <!> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!></div>');function s1(n,e){qt(e,!0);let t=fe("…"),i=fe("instances"),r=fe(Rt(Jl(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));an(()=>{_v(c(r)),localStorage.setItem("twilight-theme",c(r)),Sv(c(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:Fa(c(r))?"dark":"light"}).catch(()=>{})}),uv();let a=fe("Ready"),o=fe(!1),s=fe(Rt(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));an(()=>{localStorage.setItem("twilight-mode",c(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:c(s)}).catch(()=>{})});const l=[{id:"instances",label:"Instances",icon:"instances"},{id:"worlds",label:"Servers & P2P",icon:"worlds"},{id:"downloads",label:"Downloads",icon:"download"},{id:"settings",label:"Settings",icon:"settings"},{id:"accounts",label:"Accounts",icon:"accounts"}],u={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]},d=lt(()=>Vn.active);let p=fe(!1),f=fe(Rt([])),v=fe(!1),g=fe(""),b=fe(!1),m=fe(!1),h=fe(""),M=fe(!1),_=fe(""),E=fe(null),C=lt(()=>c(E)?"edit":c(i)),D=fe(null),A=fe(null),k=fe(!1),y=fe(""),w=fe(null),ie=fe(""),V=fe(0),N=fe(0),G=fe("");async function H(j,Pe){return window.__TAURI__.core.invoke(j,Pe)}function X(){x(r,Fa(c(r))?"twilight-light":"twilight-dark",!0)}async function Q(){x(v,!0),x(g,"");try{x(f,await H("discover_java_installations"),!0)}catch(j){x(g,String(j),!0)}finally{x(v,!1)}}function te(){x(b,!0)}async function me(){if(c(h).trim()){x(M,!0),x(_,"");try{const j=await H("install_modpack",{pathOrUrl:c(h).trim()});x(m,!1),x(h,""),await Ae(),j&&x(qe,j,!0),x(a,"Modpack installed.")}catch(j){x(_,String(j),!0)}finally{x(M,!1)}}}let ce=fe(Rt([])),W=fe(!1),$=fe(!1),we=fe(null);an(()=>{c(ce).length,c(we)&&(c(we).scrollTop=c(we).scrollHeight)});function Le(j){c(ce).push(j),c(ce).length>5e3&&c(ce).splice(0,c(ce).length-5e3)}function Oe(){x(ce,[],!0)}function ze(j){return j.stream==="stderr"||j.line.includes("/ERROR]")?"text-rose-400":j.line.includes("/WARN]")?"text-(--accent-star)":j.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function We(){const j=c(ce).map(Pe=>Pe.line).join(`
`);try{await navigator.clipboard.writeText(j)}catch{const Pe=document.createElement("textarea");Pe.value=j,document.body.append(Pe),Pe.select(),document.execCommand("copy"),Pe.remove()}}async function He(){if(c($))try{await H("kill_instance"),Le({stream:"stdout",line:"kill requested"})}catch(j){Le({stream:"stderr",line:String(j)})}}let _e=fe(Rt([])),Ge=fe(""),Be=fe(null),z=fe(""),qe=fe(null),Ie=fe(null),O=fe(""),Z=fe(!1);function be(){const j=c(z).trim().toLowerCase();return j?c(_e).filter(Pe=>Pe.name.toLowerCase().includes(j)||Pe.minecraft_version.toLowerCase().includes(j)||Pe.id.toLowerCase().includes(j)):c(_e)}async function Ae(){try{x(_e,await H("scan_instances"),!0),x(Ge,"")}catch(j){x(Ge,String(j),!0)}}function De(j){x(qe,j,!0)}async function de(j,Pe=null){if(c($))return;const Ze=c(_e).find(Et=>Et.id===j),bt=Ze?Ze.name:j;x($,!0),x(a,Pe?`Running ${bt} → ${Pe}…`:`Running ${bt}…`,!0),x(W,!0);try{const Et=await H("launch_instance",{instanceId:j,server:Pe});Le({stream:"stdout",line:`launcher reports exit code ${Et}`}),await Ae(),x(a,"Ready")}catch(Et){console.error("Launch failed:",Et),Le({stream:"stderr",line:`[ERROR] Launch failed: ${Et}`}),x(a,"Launch failed")}finally{x($,!1),c(a)!=="Launch failed"&&x(a,"Ready")}}function Fe(){c(A)&&H("open_path",{path:c(A).instances_dir}).catch(j=>x(a,String(j),!0))}function ke(j){c(A)&&H("open_path",{path:[c(A).instances_dir.replace(/\\/g,"/"),j].join("/")}).catch(Pe=>x(a,String(Pe),!0))}function R(j){x(O,""),x(Ie,j,!0)}async function S(j){if(!(!c(Ie)||c(Z))){x(Z,!0),x(O,"");try{await H("delete_instance",{instanceId:c(Ie),toTrash:j}),c(qe)===c(Ie)&&x(qe,null),x(Ie,null),await Ae(),x(a,j?"Instance moved to trash.":"Instance deleted.",!0)}catch(Pe){x(O,String(Pe),!0)}finally{x(Z,!1)}}}const I=lt(()=>[...new Set(c(_e).map(j=>j.group).filter(Boolean))].sort((j,Pe)=>j.localeCompare(Pe)));async function K(j){if(!c(P))return;const Pe=c(P).name;try{await H("set_instance_group",{instanceId:c(P).id,group:j}),await Ae(),x(a,j?`Moved ${Pe} to ${j}.`:`${Pe} is ungrouped.`,!0)}catch(Ze){x(a,String(Ze),!0)}}async function ne(){if(!c(P))return;const j=c(P).name;try{const Pe=await H("duplicate_instance",{instanceId:c(P).id});await Ae(),x(qe,Pe.id,!0),x(a,`Copied ${j}.`)}catch(Pe){x(a,String(Pe),!0)}}async function xe(){if(!c(P))return;const j=window.__TAURI__?.dialog?.save;if(!j){x(a,"File picker unavailable in this build.");return}try{const Pe=await j({title:"Export instance",defaultPath:`${c(P).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Pe)return;const Ze=await H("export_instance_zip",{instanceId:c(P).id,destPath:Pe});x(a,`Exported to ${Ze}.`)}catch(Pe){x(a,String(Pe),!0)}}async function Te(){if(c(P))try{const j=await H("create_desktop_shortcut",{instanceId:c(P).id});x(a,`Shortcut created: ${j}`)}catch(j){x(a,String(j),!0)}}async function Se(j,Pe){x(b,!1),await Ae(),j?.id&&x(qe,j.id,!0),x(a,Pe||`Instance ${j?.name??""} created.`,!0)}function J(j){x(E,j,!0)}const P=lt(()=>c(_e).find(j=>j.id===c(qe))??null);let se=fe(null),ye=0;an(()=>{const j=c(P);c(E);const Pe=++ye;x(se,null),j&&H("list_instance_mods",{instanceId:j.id}).then(Ze=>{Pe===ye&&x(se,Ze.length,!0)}).catch(()=>{Pe===ye&&x(se,null)})});async function Ce(){try{x(w,await H("get_java_prefs"),!0),x(ie,c(w).java_path??"",!0),x(V,c(w).min_memory_mb,!0),x(N,c(w).max_memory_mb,!0),x(G,""),c(f).length===0&&await Q()}catch{}}async function Ne(){x(G,"");try{await H("set_java_prefs",{javaPath:c(ie).trim()||null,minMemoryMb:Number(c(V))||0,maxMemoryMb:Number(c(N))||0}),x(G,"Java settings saved.")}catch(j){x(G,String(j),!0)}}async function Qe(){x(k,!0);try{x(A,await H("get_storage"),!0)}catch(j){x(y,String(j),!0)}finally{x(k,!1)}}async function at(j,Pe){x(k,!0),x(y,"");try{await H("set_folder_dir",{kind:j,path:Pe?.trim()||null}),x(A,await H("get_storage"),!0),x(y,"Folders updated."),(j==="instances"||j==="shared")&&(await Ae(),c(qe)&&!c(_e).some(Ze=>Ze.id===c(qe))&&x(qe,null))}catch(Ze){x(y,String(Ze),!0)}finally{x(k,!1)}}function F(j){H("open_path",{path:j}).catch(Pe=>x(a,String(Pe),!0))}async function Ee(){x(k,!0),x(y,"");try{await H("clean_staging"),x(y,"Staging cleaned.")}catch(j){x(y,String(j),!0)}finally{x(k,!1)}}function B(j){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[j.account_type.type]??"Yggdrasil"}ir(()=>{const j=[],Pe=Ze=>{if(Ze.key==="Escape"){const jt=Tc();if(jt){jt();return}c(Be)?x(Be,null):c(Ie)?(x(Ie,null),x(O,"")):c(E)?x(E,null):c(qe)?x(qe,null):c(p)?x(p,!1):c(m)?x(m,!1):c(W)&&x(W,!1);return}if(c(Be)||c(Ie)||c(p)||c(m)||c(E)||c(W)||Tc()||Ze.target?.closest?.("input, textarea, select, [contenteditable]"))return;const Et=be();if(!Et.length)return;const Dt=Et.findIndex(jt=>jt.id===c(qe));let Wt=null;if(Ze.key==="ArrowDown"||Ze.key==="ArrowRight")Wt=Dt+1;else if(Ze.key==="ArrowUp"||Ze.key==="ArrowLeft")Wt=Dt<0?0:Dt-1;else if(Ze.key==="Enter"&&Dt>=0&&document.activeElement===document.body){Ze.preventDefault(),de(Et[Dt].id);return}Wt!=null&&Et[Wt]&&(Ze.preventDefault(),x(qe,Et[Wt].id,!0))};return window.addEventListener("keydown",Pe),(async()=>{try{x(t,await H("get_version"),!0)}catch{x(t,"dev")}try{j.push(await window.__TAURI__.event.listen("launch-log",Ze=>Le(Ze.payload))),j.push(await window.__TAURI__.event.listen("tauri://drag-drop",Ze=>{const bt=Ze.payload?.paths?.[0];bt&&bt.endsWith(".mrpack")&&(c(m)?x(h,bt,!0):x(D,bt,!0))}))}catch{}await Bs(),await Ae(),await Qe();try{const Ze=await H("get_startup_launch");Ze&&c(_e).some(bt=>bt.id===Ze)&&de(Ze)}catch{}})(),()=>j.forEach(Ze=>Ze())});var ve=a1(),Re=U(ve),Je=U(Re),nt=T(U(Je),2);{var st=j=>{var Pe=GM();Y(j,Pe)};Ve(nt,j=>{c(o)&&j(st)})}var yt=T(Je,2),le=U(yt);wt(le,17,()=>l,j=>j.id,(j,Pe)=>{var Ze=VM(),bt=U(Ze),Et=U(bt);zt(Et,{get name(){return c(Pe).icon},size:15});var Dt=T(bt,2);{var Wt=jt=>{var On=HM(),Cn=ue(On,!0);Me(()=>he(Cn,c(Pe).label)),Y(jt,On)};Ve(Dt,jt=>{c(o)&&jt(Wt)})}Me(()=>{_t(Ze,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${c(o)?"":"justify-center"} ${c(i)===c(Pe).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Xe(Ze,"title",c(Pe).label)}),oe("click",Ze,()=>{x(i,c(Pe).id,!0),x(E,null),x(s,"launcher"),c(Pe).id==="settings"&&(Ce(),c(A)||Qe())}),Y(j,Ze)});var Ue=T(le,2),Ye=U(Ue),dt=U(Ye);zt(dt,{name:"new",size:15});var ft=T(Ye,2);{var sn=j=>{var Pe=WM();Y(j,Pe)};Ve(ft,j=>{c(o)&&j(sn)})}var Ct=T(yt,2),nn=U(Ct);{let j=lt(()=>ts(c(d))),Pe=lt(()=>c(d)?c(d).username[0]?.toUpperCase():"?");oc(nn,{get source(){return c(j)},size:28,get letter(){return c(Pe)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var Sn=T(nn,2);{var oi=j=>{var Pe=jM(),Ze=U(Pe),bt=ue(Ze,!0),Et=T(Ze,2),Dt=ue(Et,!0);Me(Wt=>{he(bt,c(d)?c(d).username:"Accounts"),he(Dt,Wt)},[()=>c(d)?B(c(d)):"manage & sign in"]),Y(j,Pe)};Ve(Sn,j=>{c(o)&&j(oi)})}var Rn=T(Ct,2),li=ue(Rn,!0),qn=T(Re,2),L=U(qn),ee=U(L),pe=U(ee);{var ae=j=>{var Pe=XM(),Ze=xt(Pe),bt=T(Ze,2),Et=ue(bt,!0);Me(()=>{Xe(bt,"title",c(E)?.name),he(Et,c(E)?.name)}),oe("click",Ze,()=>x(E,null)),Y(j,Pe)},ge=j=>{var Pe=qM(),Ze=xt(Pe),bt=ue(Ze),Et=T(Ze,4);wt(Et,20,()=>[["launcher","Launcher"],["client","Client"]],gl,(Dt,Wt)=>{var jt=lt(()=>Sd(Wt,2));let On=()=>c(jt)[0],Cn=()=>c(jt)[1];var En=YM(),Si=ue(En,!0);Me(()=>{_t(En,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${c(s)===On()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Xe(En,"aria-selected",c(s)===On()),he(Si,Cn())}),oe("click",En,()=>x(s,On(),!0)),Y(Dt,En)}),Me(()=>he(bt,`TwilightMC Bolide (alpha-v${c(t)??""})`)),Y(j,Pe)};Ve(pe,j=>{c(C)==="edit"?j(ae):j(ge,-1)})}var Ke=T(ee,2),tt=ue(Ke,!0),it=T(L,2),ot=U(it);{var mt=j=>{CM(j,{onback:()=>x(i,"instances")})},rt=j=>{zM(j,{get instances(){return c(_e)},get active(){return c(d)},get gameRunning(){return c($)},get status(){return c(a)},onlaunch:de,onopenconsole:()=>x(W,!0),get onrefresh(){return Bs},onopenaccounts:()=>{x(i,"accounts"),x(s,"launcher")}})},ct=j=>{Dm(j,{get instance(){return c(E)},get storage(){return c(A)},onback:()=>x(E,null),onopenconsole:()=>x(W,!0)})},Lt=j=>{ng(j,{get version(){return c(t)},get storage(){return c(A)},get runtimes(){return c(f)},get scanning(){return c(v)},get javaError(){return c(g)},get storageBusy(){return c(k)},get storageMsg(){return c(y)},get javaMsg(){return c(G)},get gameRunning(){return c($)},onback:()=>x(i,"instances"),onscanjava:Q,onsaveprefs:Ne,onsavefolder:at,onopenfolder:F,oncleanstaging:Ee,onopenaccounts:()=>{x(i,"accounts"),x(s,"launcher")},onopenurl:Pe=>H("open_external_url",{url:Pe}).catch(Ze=>x(a,String(Ze),!0)),get theme(){return c(r)},set theme(Pe){x(r,Pe,!0)},get javaPath(){return c(ie)},set javaPath(Pe){x(ie,Pe,!0)},get minMem(){return c(V)},set minMem(Pe){x(V,Pe,!0)},get maxMem(){return c(N)},set maxMem(Pe){x(N,Pe,!0)}})},Nt=j=>{var Pe=KM(),Ze=xt(Pe),bt=U(Ze),Et=U(bt);zt(Et,{name:"new",size:13});var Dt=T(bt,2),Wt=U(Dt);zt(Wt,{name:"viewfolder",size:14});var jt=T(Dt,2),On=U(jt);zt(On,{name:"package",size:14});var Cn=T(jt,2),En=U(Cn);zt(En,{name:"settings",size:14});var Si=T(Cn,2),ci=T(Si,4),ui=U(ci);{var Xt=Fn=>{zt(Fn,{name:"sun",size:15})},Mi=lt(()=>Fa(c(r))),xo=Fn=>{zt(Fn,{name:"moon",size:15})};Ve(ui,Fn=>{c(Mi)?Fn(Xt):Fn(xo,-1)})}var mh=T(Ze,2);{let Fn=lt(be);hm(mh,{get instances(){return c(Fn)},get error(){return c(Ge)},get query(){return c(z)},get selectedId(){return c(qe)},get gameRunning(){return c($)},get menuFor(){return c(Be)},onselect:De,onplay:de,ontogglemenu:fc=>x(Be,c(Be)===fc?null:fc,!0),onedit:J,onopenfolder:ke,onviewlogs:()=>x(W,!0),ondelete:R,onclosemenu:()=>x(Be,null),onadd:te})}Me(Fn=>{Dt.disabled=!c(A),Xe(Dt,"title",c(A)?c(A).instances_dir:""),Xe(ci,"title",Fn)},[()=>Fa(c(r))?"Twilight Light":"Twilight Dark"]),oe("click",bt,te),oe("click",Dt,Fe),oe("click",jt,()=>x(m,!0)),oe("click",Cn,()=>{x(i,"settings"),Ce(),c(A)||Qe()}),kt(Si,()=>c(z),Fn=>x(z,Fn)),oe("click",ci,X),Y(j,Pe)},Mn=j=>{var Pe=ZM(),Ze=xt(Pe),bt=ue(Ze,!0),Et=T(Ze,2),Dt=ue(Et,!0);Me(()=>{he(bt,u[c(i)][0]),he(Dt,u[c(i)][1])}),Y(j,Pe)};Ve(ot,j=>{c(C)==="accounts"?j(mt):c(s)==="client"?j(rt,1):c(C)==="edit"&&c(E)?j(ct,2):c(i)==="settings"?j(Lt,3):c(i)==="instances"?j(Nt,4):j(Mn,-1)})}var Nn=T(it,2),Ot=U(Nn),ht=U(Ot),Rr=U(ht),Ft=T(Rr,2);zt(Ft,{name:"log",size:13});var yi=T(Ft,4);{var os=j=>{var Pe=JM();Y(j,Pe)};Ve(yi,j=>{c($)&&j(os)})}var rr=T(ht,2),ar=U(rr),Zt=T(ar,2),Kn=T(Zt,2),Ea=T(Kn,2);{var vn=j=>{var Pe=QM();oe("click",Pe,()=>x(W,!1)),Y(j,Pe)};Ve(Ea,j=>{c(W)&&j(vn)})}var Cr=T(Ot,2);wt(Cr,21,()=>c(ce),gl,(j,Pe)=>{var Ze=$M(),bt=ue(Ze,!0);Me(Et=>{_t(Ze,1,`whitespace-pre-wrap break-all ${Et??""}`),he(bt,c(Pe).line)},[()=>ze(c(Pe))]),Y(j,Ze)},j=>{var Pe=e1();Y(j,Pe)}),hf(Cr,j=>x(we,j),()=>c(we));var ls=T(qn,2);{var cs=j=>{Iv(j,{get instance(){return c(P)},get storage(){return c(A)},get gameRunning(){return c($)},get modsCount(){return c(se)},get groups(){return c(I)},onlaunch:()=>de(c(P).id),onkill:He,onedit:()=>J(c(P)),onchangegroup:K,onopenfolder:()=>ke(c(P).id),onexport:xe,oncopy:ne,ondelete:()=>R(c(P).id),onshortcut:Te})};Ve(ls,j=>{c(C)==="instances"&&c(P)&&j(cs)})}var lc=T(ls,2);{var ch=j=>{Bm(j,{get path(){return c(D)},onclose:()=>x(D,null),oninstalled:async Pe=>{x(D,null),await Ae(),x(qe,Pe,!0),x(a,"Modpack installed.")}})};Ve(lc,j=>{c(D)&&j(ch)})}var cc=T(lc,2);{var uh=j=>{_M(j,{get accounts(){return Vn.list},get active(){return c(d)},onclose:()=>{x(p,!1),Bs()},get onrefresh(){return Bs}})};Ve(cc,j=>{c(p)&&j(uh)})}var uc=T(cc,2);{var dh=j=>{av(j,{get groups(){return c(I)},onclose:()=>x(b,!1),oncreated:Se})};Ve(uc,j=>{c(b)&&j(dh)})}var dc=T(uc,2);{var fh=j=>{var Pe=n1(),Ze=U(Pe),bt=U(Ze),Et=T(U(bt),2),Dt=T(bt,2),Wt=U(Dt),jt=T(Wt,2),On=T(jt,2);{var Cn=Xt=>{var Mi=t1(),xo=ue(Mi,!0);Me(()=>he(xo,c(_))),Y(Xt,Mi)};Ve(On,Xt=>{c(_)&&Xt(Cn)})}var En=T(Dt,2),Si=U(En),ci=T(Si,2),ui=ue(ci,!0);Me(Xt=>{ci.disabled=Xt,he(ui,c(M)?"Installing…":"Install .mrpack")},[()=>c(M)||!c(h).trim()]),oe("click",Pe,Xt=>{Xt.target===Xt.currentTarget&&!c(M)&&x(m,!1)}),oe("click",Et,()=>x(m,!1)),gi("dragover",Wt,Xt=>Xt.preventDefault()),gi("drop",Wt,Xt=>{Xt.preventDefault();const Mi=Xt.dataTransfer?.files?.[0]?.path;Mi&&x(h,Mi,!0)}),kt(jt,()=>c(h),Xt=>x(h,Xt)),oe("click",Si,()=>x(m,!1)),oe("click",ci,me),Y(j,Pe)};Ve(dc,j=>{c(m)&&j(fh)})}var hh=T(dc,2);{var ph=j=>{var Pe=r1(),Ze=U(Pe),bt=T(U(Ze),2),Et=T(U(bt)),Dt=ue(Et,!0),Wt=T(bt,2);{var jt=ui=>{var Xt=i1(),Mi=ue(Xt,!0);Me(()=>he(Mi,c(O))),Y(ui,Xt)};Ve(Wt,ui=>{c(O)&&ui(jt)})}var On=T(Wt,2),Cn=U(On),En=T(Cn,2),Si=U(En);pi(Si,{emoji:"♻"});var ci=T(En,2);Me(()=>{he(Dt,c(Ie)),Cn.disabled=c(Z),En.disabled=c(Z),ci.disabled=c(Z)}),oe("click",Pe,ui=>{ui.target===ui.currentTarget&&!c(Z)&&x(Ie,null)}),oe("click",Cn,()=>x(Ie,null)),oe("click",En,()=>S(!0)),oe("click",ci,()=>S(!1)),Y(j,Pe)};Ve(hh,j=>{c(Ie)&&j(ph)})}Me(()=>{_t(Re,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${c(o)?"w-60":"w-16"}`),_t(Ue,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${c(o)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),_t(Ct,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${c(o)?"":"justify-center"}`),Xe(Ct,"title",c(d)?c(d).username:"Manage accounts"),_t(Rn,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${c(o)?"":"opacity-0 group-hover/nav:opacity-100"}`),he(li,c(o)?"«":"»"),he(tt,c(a)),_t(Nn,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${c(W)?"h-48":"h-10"}`),Xe(ht,"title",c(W)?"Collapse console":"Expand console"),_t(Rr,1,`h-2 w-2 shrink-0 rounded-full ${c($)?"animate-pulse bg-green-500":"bg-(--border)"}`),ar.disabled=!c(ce).length,Zt.disabled=!c(ce).length,Kn.disabled=!c($)}),oe("dblclick",Je,()=>x(o,!c(o))),oe("click",Ue,te),oe("click",Ct,()=>{x(i,"accounts"),x(E,null),x(s,"launcher")}),oe("click",Rn,()=>x(o,!c(o))),oe("click",ht,()=>x(W,!c(W))),oe("click",ar,j=>{j.stopPropagation(),Oe()}),oe("click",Zt,j=>{j.stopPropagation(),We()}),oe("click",Kn,j=>{j.stopPropagation(),He()}),Y(n,ve),Kt()}mn(["dblclick","click"]);Op(s1,{target:document.getElementById("app")});
