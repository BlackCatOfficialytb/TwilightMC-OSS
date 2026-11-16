(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Rd=!1;var uo=Array.isArray,Ph=Array.prototype.indexOf,$a=Array.prototype.includes,fo=Array.from,Cd=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,Lh=Object.getOwnPropertyDescriptors,Dh=Object.prototype,Ih=Array.prototype,Pd=Object.getPrototypeOf,Sc=Object.isExtensible;const Uh=()=>{};function Nh(i){for(var e=0;e<i.length;e++)i[e]()}function Ld(){var i,e,t=new Promise((n,r)=>{i=n,e=r});return{promise:t,resolve:i,reject:e}}function Dd(i,e){if(Array.isArray(i))return i;if(!(Symbol.iterator in i))return Array.from(i);const t=[];for(const n of i)if(t.push(n),t.length===e)break;return t}const Tn=2,fa=4,ho=8,Id=1<<24,ci=16,mi=32,dr=64,pl=128,Hl=256,fi=512,fn=1024,Gt=2048,Wn=4096,Dn=8192,xn=16384,Ea=32768,es=1<<25,ha=65536,$s=1<<17,Oh=1<<18,wa=1<<19,kh=1<<20,yi=1<<25,eo=1<<21,sa=1<<22,or=1<<23,Er=Symbol("$state"),Ud=Symbol("component"),Fh=Symbol("legacy props"),Bh=Symbol(""),Nd=Symbol("attributes"),ml=Symbol("class"),vl=Symbol("style"),gl=Symbol("text"),Ys=Symbol("form reset"),fs=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},zh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),Gh=1,Hh=2,Od=4,Vh=8,Wh=16,jh=1,Xh=4,qh=8,Yh=16,Kh=1,Zh=2,kd={},dn=Symbol("uninitialized"),Jh="http://www.w3.org/1999/xhtml";function Qh(){console.warn("https://svelte.dev/e/derived_inert")}function $h(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ep(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Fd(i){return i===this.v}function tp(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Bd(i){return!tp(i,this.v)}function zd(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function np(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ip(i,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function rp(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ap(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sp(i){throw new Error("https://svelte.dev/e/effect_orphan")}function op(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function lp(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function cp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function up(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function dp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function fp(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let hp=!1,bn=null;function pa(i){bn=i}function qt(i,e=!1,t){bn={p:bn,i:!1,c:null,e:null,s:i,x:null,r:Pt,l:null}}function Yt(i){var e=bn,t=e.e;if(t!==null){e.e=null;for(var n of t)sf(n)}return e.i=!0,bn=e.p,Vl(i)}function Vl(i={}){return Cd(i,Ud,{value:!0}),i}function Gd(){return!0}let yr=[];function Hd(){var i=yr;yr=[],Nh(i)}function Si(i){if(yr.length===0&&!Ya){var e=yr;queueMicrotask(()=>{e===yr&&Hd()})}yr.push(i)}function pp(){for(;yr.length>0;)Hd()}const mp=-7169;function nn(i,e){i.f=i.f&mp|e}function Wl(i){(i.f&fi)!==0||i.deps===null?nn(i,fn):nn(i,Wn)}function Vd(i,e){(i.f&Gt)!==0?e.set(i,Gt):(i.f&Wn)!==0&&e.get(i)!==Gt&&e.set(i,Wn),nn(i,fn)}function vp(i,e){{const t=document.body;i.autofocus=!0,Si(()=>{document.activeElement===t&&i.focus()})}}let Mc=!1;function gp(){Mc||(Mc=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const e of i.target.elements)e[Ys]?.()})},{capture:!0}))}function Ta(i){var e=Tt,t=Pt;ii(null),Ti(null);try{return i()}finally{ii(e),Ti(t)}}function Wd(i,e,t,n=t){i.addEventListener(e,()=>Ta(t));const r=i[Ys];r?i[Ys]=()=>{r(),n(!0)}:i[Ys]=()=>n(!0),gp()}function _p(i,e,t,n){const r=ts;var a=i.filter(v=>!v.settled),o=e.map(r);if(t.length===0&&a.length===0){n(o);return}var s=Pt,c=xp(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(v=>v.promise)):null;function d(v){if((s.f&xn)===0){c();try{n([...o,...v])}catch(y){bi(y,s)}to()}}var h=jd();if(t.length===0){u.then(()=>d([])).finally(h);return}function f(){Promise.all(t.map(v=>bp(v))).then(d).catch(v=>bi(v,s)).finally(h)}u?u.then(()=>{if((s.f&xn)!==0){h();return}c(),f(),to()}):f()}function xp(){var i=Pt,e=Tt,t=bn,n=yt;return function(a=!0){Ti(i),ii(e),pa(t),a&&(i.f&xn)===0&&(n?.activate(),n?.apply())}}function to(i=!0){Ti(null),ii(null),pa(null),i&&yt?.deactivate()}function jd(){var i=Pt,e=i.b,t=yt,n=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(n,i),()=>{e?.update_pending_count(-1,t),t.decrement(n,i)}}function ts(i){var e=Tn|Gt;return Pt!==null&&(Pt.f|=wa),{ctx:bn,deps:null,effects:null,equals:Fd,f:e,fn:i,reactions:null,rv:0,v:dn,wv:0,parent:Pt,ac:null}}const Ha=Symbol("obsolete");function bp(i,e,t){let n=Pt;n===null&&np();var r=void 0,a=Lr(dn),o=!Tt,s=new Set;return Np(()=>{var c=Pt,u=Ld();r=u.promise;try{Promise.resolve(i()).then(u.resolve,v=>{v!==fs&&u.reject(v)}).finally(to)}catch(v){u.reject(v),to()}var d=yt;if(o){if((c.f&Ea)!==0)var h=jd();if(n.b?.is_rendered())d.async_deriveds.get(c)?.reject(Ha);else for(const v of s.values())v.reject(Ha);s.add(u),d.async_deriveds.set(c,u)}const f=(v,y=void 0)=>{h?.(),s.delete(u),y!==Ha&&(d.activate(),y?(a.f|=or,ma(a,y)):((a.f&or)!==0&&(a.f^=or),ma(a,v)),d.deactivate())};u.promise.then(f,v=>f(null,v||"unknown"))}),Kl(()=>{for(const c of s)c.reject(Ha)}),new Promise(c=>{function u(d){function h(){d===r?c(a):u(r)}d.then(h,h)}u(r)})}function st(i){const e=ts(i);return ff(e),e}function Xd(i){const e=ts(i);return e.equals=Bd,e}function yp(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)On(e[t])}}function jl(i){var e,t=Pt,n=i.parent;if(!Yi&&n!==null&&i.v!==dn&&(n.f&(xn|Dn))!==0)return Qh(),i.v;Ti(n);try{yp(i),e=vf(i)}finally{Ti(t)}return e}function qd(i){var e=jl(i);if(!i.equals(e)&&(i.wv=pf(),(!yt?.is_fork||i.deps===null)&&(yt!==null?(yt.capture(i,e,!0),oa?.capture(i,e,!0)):i.v=e,i.deps===null))){nn(i,fn);return}Yi||(ui!==null?(Yl()||yt?.is_fork)&&ui.set(i,e):Wl(i))}function Sp(i){if(i.effects!==null)for(const e of i.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&Ta(()=>{e.ac.abort(fs),e.ac=null}),e.fn!==null&&(e.teardown=Uh),is(e,0),Jl(e))}function Yd(i){if(i.effects!==null)for(const e of i.effects)e.teardown&&e.fn!==null&&va(e)}let wo=null,Ur=null,yt=null,oa=null,ui=null,_l=null,Ya=!1,To=!1,Ka=null,Ks=null;var Ec=0;let Mp=1;class fr{id=Mp++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Ur===null?wo=Ur=this:(Ur.next=this,this.prev=Ur),Ur=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=n=>this.schedule(n)){var n=this.#o.get(e);if(n){this.#o.delete(e);for(var r of n.d)nn(r,Gt),t(r);for(r of n.m)nn(r,Wn),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&xn)!==0||(a.f&(Gt|Wn))===0)){for(var t=a,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(dr|mi))!==0){if((r&fn)===0){n=!0;break}t.f^=fn}}n||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,c]of this.#r)nn(s,c),this.schedule(s);this.apply();for(var e=Ka=[],t=[],n=Ks=[];this.#i.length>0;){Ec++>1e3&&(this.#f(),wp());for(const s of this.#u())try{this.#x(s,e,t)}catch(c){throw Jd(s),this.#p()||this.discard(),c}}if(yt=null,n.length>0){var r=fr.ensure();for(const s of n)r.schedule(s)}if(Ka=null,Ks=null,this.#p()){this.#v(t),this.#v(e);for(const[s,c]of this.#o)Zd(s,c);n.length>0&&yt.#m();return}const a=this.#S();if(a){this.#v(t),this.#v(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),oa=this,wc(t),wc(e),oa=null,this.#n?.resolve();var o=yt;this.#e===0&&(this.#i.length===0||o!==null)&&this.#f(),o!==null&&(Ei.clear(),o.#m())}#x(e,t,n){e.f^=fn;for(var r=e.first;r!==null;){var a=r.f,o=(a&(mi|dr))!==0,s=o&&(a&fn)!==0,c=s||(a&Dn)!==0||this.#o.has(r);if(!c&&r.fn!==null){o?r.f^=fn:(a&fa)!==0?t.push(r):ps(r)&&((a&ci)!==0&&this.add_dirty_reaction(r,Wn),va(r));var u=r.first;if(u!==null){r=u;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#S(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,n]]of this.current)if(!n&&e.current.has(t))return!0;return!1}#d(e){for(const[n,r]of e.current)!this.previous.has(n)&&e.previous.has(n)&&this.previous.set(n,e.previous.get(n)),this.current.set(n,r);for(const[n,r]of e.async_deriveds){const a=this.async_deriveds.get(n);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=n=>{var r=n.reactions;if(r!==null&&!((n.f&Tn)!==0&&(n.f&(Gt|Wn))===0))for(const s of r){var a=s.f;if((a&Tn)!==0)t(s);else{var o=s;a&(sa|ci)&&!this.async_deriveds.has(o)&&(this.#r.delete(o),nn(o,Gt),this.schedule(o))}}};for(const n of this.current.keys())t(n);this.oncommit(()=>e.discard()),e.#f(),yt=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)Vd(e[t],this.#r)}capture(e,t,n=!1){e.v!==dn&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&or)===0&&(this.current.set(e,[t,n]),ui?.set(e,t)),this.is_fork||(e.v=t)}activate(){yt=this}deactivate(){yt=null,ui=null}flush(){try{To=!0,yt=this,this.#m()}finally{Ec=0,_l=null,Ka=null,Ks=null,To=!1,yt=null,ui=null,Ei.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Ha);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let h=wo;h!==null;h=h.next){var e=h.id<this.id,t=[];for(const[f,[v,y]]of this.current){if(h.current.has(f)){var n=h.current.get(f)[0];if(e&&v!==n)h.current.set(f,[v,y]);else continue}t.push(f)}if(e)for(const[f,v]of this.async_deriveds){const y=h.async_deriveds.get(f);y&&v.promise.then(y.resolve).catch(y.reject)}var r=[...h.current.keys()].filter(f=>!h.current.get(f)[1]);if(!(!h.started||r.length===0)){var a=r.filter(f=>!this.current.has(f));if(a.length===0)e&&h.discard();else if(t.length>0){if(e)for(const f of this.#h)h.unskip_effect(f,v=>{(v.f&(ci|sa))!==0?h.schedule(v):h.#v([v])});h.activate();var o=new Set,s=new Map;for(var c of t)Kd(c,a,o,s);s=new Map;var u=[...h.current].filter(([f,v])=>{const y=this.current.get(f);return y?y[0]!==v[0]||y[1]!==v[1]:!0}).map(([f])=>f);if(u.length>0)for(const f of this.#a)(f.f&(xn|Dn|$s))===0&&Xl(f,u,s)&&((f.f&(sa|ci))!==0?(nn(f,Gt),h.schedule(f)):h.add_dirty_reaction(f,Gt));if(h.#i.length>0&&!h.#c){h.apply();for(var d of h.#u())h.#x(d,[],[])}h.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let n=this.#s.get(t)??0;this.#s.set(t,n+1)}}decrement(e,t){if(this.#e-=1,e){let n=this.#s.get(t)??0;n===1?this.#s.delete(t):this.#s.set(t,n-1)}this.#c||(this.#c=!0,Si(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,n]of e)this.add_dirty_reaction(t,n);e.clear()}add_dirty_reaction(e,t){(t===Gt||this.#r.get(e)!==Gt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=Ld()).promise}static ensure(){if(yt===null){const e=yt=new fr;!To&&!Ya&&Si(()=>{e.started||e.flush()})}return yt}apply(){{ui=null;return}}schedule(e){if(_l=e,e.b?.is_pending&&(e.f&(fa|ho|Id))!==0&&(e.f&Ea)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?wo=t:e.next=t,t===null?Ur=e:t.prev=e,this.linked=!1}}}function Ep(i){var e=Ya,t=oa;oa=null,Ya=!0;try{for(var n;;){if(pp(),yt===null)return n;yt.flush()}}finally{Ya=e,oa=t}}function wp(){try{op()}catch(i){bi(i,_l)}}let zi=null;function wc(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(xn|Dn))===0&&ps(n)&&(zi=new Set,va(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&cf(n),zi?.size>0)){Ei.clear();for(const r of zi){if((r.f&(xn|Dn))!==0)continue;const a=[r];let o=r.parent;for(;o!==null;)zi.has(o)&&(zi.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const c=a[s];(c.f&(xn|Dn))===0&&va(c)}}zi.clear()}}zi=null}}function Kd(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const r of i.reactions){const a=r.f;(a&Tn)!==0?Kd(r,e,t,n):(a&(sa|ci))!==0&&(a&Gt)===0&&Xl(r,e,n)&&(nn(r,Gt),ql(r))}}function Xl(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const r of i.deps){if($a.call(e,r))return!0;if((r.f&Tn)!==0&&Xl(r,e,t))return t.set(r,!0),!0}return t.set(i,!1),!1}function ql(i){yt.schedule(i)}function Zd(i,e){if(!((i.f&mi)!==0&&(i.f&fn)!==0)){(i.f&Gt)!==0?e.d.push(i):(i.f&Wn)!==0&&e.m.push(i),nn(i,fn);for(var t=i.first;t!==null;)Zd(t,e),t=t.next}}function Jd(i){nn(i,fn);for(var e=i.first;e!==null;)Jd(e),e=e.next}let no=new Set;const Ei=new Map;let Qd=!1;function Lr(i,e){var t={f:0,v:i,reactions:null,equals:Fd,rv:0,wv:0};return t}function ae(i,e){const t=Lr(i);return ff(t),t}function Tp(i,e=!1,t=!0){const n=Lr(i);return e||(n.equals=Bd),n}function g(i,e,t=!1){Tt!==null&&(!di||(Tt.f&$s)!==0)&&Gd()&&(Tt.f&(Tn|ci|sa|$s))!==0&&(wi===null||!wi.has(i))&&dp();let n=t?Ut(e):e;return ma(i,n,Ks)}var xr=null,xl=0;function ma(i,e,t=null){if(!i.equals(e)){Yi?Ei.set(i,e):Ei.has(i)||Ei.set(i,i.v);var n=fr.ensure();if(n.capture(i,e),(i.f&Tn)!==0){const r=i;(i.f&Gt)!==0&&jl(r),ui===null&&Wl(r)}i.wv=pf(),xr=null,xl=0,$d(i,Gt,t),xr=null,Pt!==null&&(Pt.f&fn)!==0&&(Pt.f&(mi|dr))===0&&(Jn===null?Fp([i]):Jn.push(i)),!n.is_fork&&no.size>0&&!Qd&&Ap()}return e}function Ap(){Qd=!1;for(const i of no){(i.f&fn)!==0&&nn(i,Wn);let e;try{e=ps(i)}catch{e=!0}e&&va(i)}no.clear()}function Za(i){g(i,i.v+1)}function $d(i,e,t){var n=i.reactions;if(n!==null){var r=n.length;if(xl+=r,xl>1e5&&xr===null&&(xr=new Set),xr!==null){if(xr.has(i))return;xr.add(i)}for(var a=0;a<r;a++){var o=n[a],s=o.f,c=(s&Gt)===0;if(c&&nn(o,e),(s&$s)!==0)no.add(o);else if((s&Tn)!==0){var u=o;ui?.delete(u),$d(u,Wn,t)}else if(c){var d=o;(s&ci)!==0&&zi!==null&&zi.add(d),t!==null?t.push(d):ql(d)}}}}function Ut(i){if(typeof i!="object"||i===null||Er in i||Ud in i)return i;const e=Pd(i);if(e!==Dh&&e!==Ih)return i;var t=new Map,n=uo(i),r=ae(0),a=Tr,o=s=>{if(Tr===a)return s();var c=Tt,u=Tr;ii(null),Cc(a);var d=s();return ii(c),Cc(u),d};return n&&t.set("length",ae(i.length)),new Proxy(i,{defineProperty(s,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&cp();var d=t.get(c);return d===void 0?o(()=>{var h=ae(u.value);return t.set(c,h),h}):g(d,u.value,!0),!0},deleteProperty(s,c){var u=t.get(c);if(u===void 0){if(c in s){const d=o(()=>ae(dn));t.set(c,d),Za(r)}}else g(u,dn),Za(r);return!0},get(s,c,u){if(c===Er)return i;var d=t.get(c),h=c in s;if(d===void 0&&(!h||aa(s,c)?.writable)&&(d=o(()=>{var v=Ut(h?s[c]:dn),y=ae(v);return y}),t.set(c,d)),d!==void 0){var f=l(d);return f===dn?void 0:f}return Reflect.get(s,c,u)},getOwnPropertyDescriptor(s,c){this.has?.(s,c);var u=Reflect.getOwnPropertyDescriptor(s,c),d=t.get(c);if(d!==void 0){var h=l(d);if(h===dn)return;if(u&&"value"in u)u.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(s,c){if(c===Er)return!0;var u=t.get(c),d=u!==void 0&&u.v!==dn||Reflect.has(s,c);if(u!==void 0||(Pt!==null||Tt!==null)&&(!d||aa(s,c)?.writable)){u===void 0&&(u=o(()=>{var f=d?Ut(s[c]):dn,v=ae(f);return v}),t.set(c,u));var h=l(u);if(h===dn)return!1}return d},set(s,c,u,d){var h=t.get(c),f=c in s;if(n&&c==="length")for(var v=u;v<h.v;v+=1){var y=t.get(v+"");y!==void 0?g(y,dn):v in s&&(y=o(()=>ae(dn)),t.set(v+"",y))}if(h===void 0)(!f||aa(s,c)?.writable)&&(h=o(()=>ae(void 0)),g(h,Ut(u)),t.set(c,h));else{f=h.v!==dn;var S=o(()=>Ut(u));g(h,S)}var m=Reflect.getOwnPropertyDescriptor(s,c);if(m?.set&&m.set.call(d,u),!f){if(n&&typeof c=="string"){var p=t.get("length"),E=Number(c);Number.isInteger(E)&&E>=p.v&&g(p,E+1)}Za(r)}return!0},ownKeys(s){l(r);var c=Reflect.ownKeys(s).filter(h=>{var f=t.get(h);return f===void 0||f.v!==dn});for(var[u,d]of t)d.v!==dn&&!(u in s)&&c.push(u);return c},setPrototypeOf(){up()}})}function Tc(i){try{if(i!==null&&typeof i=="object"&&Er in i)return i[Er]}catch{}return i}function ef(i,e){return Object.is(Tc(i),Tc(e))}var Ac,tf,nf,rf;function Rp(){if(Ac===void 0){Ac=window,tf=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;nf=aa(e,"firstChild").get,rf=aa(e,"nextSibling").get,Sc(i)&&(i[ml]=void 0,i[Nd]=null,i[vl]=void 0,i.__e=void 0),Sc(t)&&(t[gl]=void 0)}}function ji(i=""){return document.createTextNode(i)}function ns(i){return nf.call(i)}function hs(i){return rf.call(i)}function D(i,e){return ns(i)}function St(i,e=!1){{var t=ns(i);return t instanceof Comment&&t.data===""?hs(t):t}}function K(i,e=!1){return ns(i)}function M(i,e=1,t=!1){let n=i;for(;e--;)n=hs(n);return n}function Cp(i){i.textContent=""}function af(){return!1}function Pp(i,e,t){return t?document.createElement(i,{is:t}):document.createElement(i)}function Lp(i){var e=Pt;if(e===null)return Tt.f|=or,i;if((e.f&Ea)===0&&(e.f&fa)===0)throw i;bi(i,e)}function bi(i,e){if(i===kd)throw i;if(!(e!==null&&(e.f&xn)!==0)){for(;e!==null;){if((e.f&pl)!==0&&(e.f&(xn|es))===0){if((e.f&Ea)===0)throw i;try{e.b.error(i);return}catch(t){i=t}}e=e.parent}throw i}}function Dp(i){Pt===null&&(Tt===null&&sp(),ap()),Yi&&rp()}function Ip(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function Ji(i,e){var t=Pt;t!==null&&(t.f&Dn)!==0&&(i|=Dn);var n={ctx:bn,deps:null,nodes:null,f:i|Gt|fi,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};yt?.register_created_effect(n);var r=n;if((i&fa)!==0)Ka!==null?Ka.push(n):fr.ensure().schedule(n);else if(e!==null){try{va(n)}catch(o){throw On(n),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&wa)===0&&(r=r.first,(i&ci)!==0&&(i&ha)!==0&&r!==null&&(r.f|=ha))}if(r!==null&&(r.parent=t,t!==null&&Ip(r,t),Tt!==null&&(Tt.f&Tn)!==0&&(i&dr)===0)){var a=Tt;(a.effects??=[]).push(r)}return n}function Yl(){return Tt!==null&&!di}function Kl(i){const e=Ji(ho,null);return nn(e,fn),e.teardown=i,e}function $t(i){Dp();var e=Pt.f,t=!Tt&&(e&mi)!==0&&bn!==null&&!bn.i;if(t){var n=bn;(n.e??=[]).push(i)}else return sf(i)}function sf(i){return Ji(fa|kh,i)}function Up(i){fr.ensure();const e=Ji(dr|wa,i);return(t={})=>new Promise(n=>{t.outro?wr(e,()=>{On(e),n(void 0)}):(On(e),n(void 0))})}function of(i){return Ji(fa,i)}function Np(i){return Ji(sa|wa,i)}function Zl(i,e=0){return Ji(ho|e,i)}function ge(i,e=[],t=[],n=[]){_p(n,e,t,r=>{Ji(ho,()=>{i(...r.map(l))})})}function po(i,e=0){var t=Ji(ci|e,i);return t}function Qn(i){return Ji(mi|wa,i)}function lf(i){var e=i.teardown;if(e!==null){const t=Yi,n=Tt;Rc(!0),ii(null);try{e.call(null)}catch(r){bi(r,i.parent)}finally{Rc(t),ii(n)}}}function Jl(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const r=t.ac;r!==null&&Ta(()=>{r.abort(fs)});var n=t.next;(t.f&dr)!==0?t.parent=null:On(t,e),t=n}}function Op(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&mi)===0&&On(e),e=t}}function On(i,e=!0){var t=!1;(e||(i.f&Oh)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(kp(i.nodes.start,i.nodes.end),t=!0),i.f|=es,Jl(i,e&&!t),is(i,0);var n=i.nodes&&i.nodes.t;if(n!==null)for(const a of n)a.stop();lf(i),i.f^=es,i.f|=xn;var r=i.parent;r!==null&&r.first!==null&&cf(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=i.b=null}function kp(i,e){for(;i!==null;){var t=i===e?null:hs(i);i.remove(),i=t}}function cf(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function wr(i,e,t=!0){var n=[];i.f|=Hl,uf(i,n,!0);var r=()=>{t&&On(i),e&&e()},a=n.length;if(a>0){var o=()=>--a||r();for(var s of n)s.out(o)}else r()}function uf(i,e,t){if((i.f&Dn)===0){i.f^=Dn;var n=i.nodes&&i.nodes.t;if(n!==null)for(const s of n)(s.is_global||t)&&e.push(s);for(var r=i.first;r!==null;){var a=r.next;if((r.f&dr)===0){var o=(r.f&ha)!==0||(r.f&mi)!==0&&(i.f&ci)!==0;uf(r,e,o?t:!1)}r=a}}}function io(i){i.f&=~Hl,df(i,!0)}function df(i,e){if((i.f&Hl)===0&&(i.f&Dn)!==0){i.f^=Dn,(i.f&fn)===0&&(nn(i,Gt),fr.ensure().schedule(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&ha)!==0||(t.f&mi)!==0;df(t,r?e:!1),t=n}var a=i.nodes&&i.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function Ql(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var r=t===n?null:hs(t);e.append(t),t=r}}let Yi=!1;function Rc(i){Yi=i}let Tt=null,di=!1;function ii(i){Tt=i}let Pt=null;function Ti(i){Pt=i}let wi=null;function ff(i){Tt!==null&&((Tt.f&eo)!==0||(Tt.f&Tn)!==0)&&(wi??=new Set).add(i)}let Nn=null,Hn=0,Jn=null;function Fp(i){Jn=i}let hf=1,Sr=0,Tr=Sr;function Cc(i){Tr=i}function pf(){return++hf}function ps(i){var e=i.f;if((e&Gt)!==0)return!0;if((e&Wn)!==0){for(var t=i.deps,n=t.length,r=0;r<n;r++){var a=t[r];if(ps(a)&&qd(a),a.wv>i.wv)return!0}(e&fi)!==0&&ui===null&&nn(i,fn)}return!1}function mf(i,e,t=!0){var n=i.reactions;if(n!==null&&!(wi!==null&&wi.has(i)))for(var r=0;r<n.length;r++){var a=n[r];(a.f&Tn)!==0?mf(a,e,!1):e===a&&(t?nn(a,Gt):(a.f&fn)!==0&&nn(a,Wn),ql(a))}}function vf(i){var e=Nn,t=Hn,n=Jn,r=Tt,a=wi,o=bn,s=di,c=Tr,u=i.f;Nn=null,Hn=0,Jn=null,Tt=(u&(mi|dr))===0?i:null,wi=null,pa(i.ctx),di=!1,Tr=++Sr,i.ac!==null&&(Ta(()=>{i.ac.abort(fs)}),i.ac=null);try{i.f|=eo;var d=i.fn,h=d();i.f|=Ea;var f=Pc(i);if(Gd()&&Jn!==null&&!di&&f!==null&&(i.f&(Tn|Wn|Gt))===0)for(var v=0;v<Jn.length;v++)mf(Jn[v],i);if(r!==null&&r!==i){if(Sr++,r.deps!==null)for(let y=0;y<t;y+=1)r.deps[y].rv=Sr;if(e!==null)for(const y of e)y.rv=Sr;Jn!==null&&(n===null?n=Jn:n.push(...Jn))}return(i.f&or)!==0&&(i.f^=or),h}catch(y){return Pc(i),Lp(y)}finally{i.f^=eo,Nn=e,Hn=t,Jn=n,Tt=r,wi=a,pa(o),di=s,Tr=c}}function Pc(i){var e=i.deps,t=yt?.is_fork;if(Nn!==null){var n;if(t||is(i,Hn),e!==null&&Hn>0)for(e.length=Hn+Nn.length,n=0;n<Nn.length;n++)e[Hn+n]=Nn[n];else i.deps=e=Nn;if(Yl()&&(i.f&fi)!==0)for(n=Hn;n<e.length;n++)(e[n].reactions??=[]).push(i)}else!t&&e!==null&&Hn<e.length&&(is(i,Hn),e.length=Hn);return e}function Bp(i,e){let t=e.reactions;if(t!==null){var n=Ph.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}if(t===null&&(e.f&Tn)!==0&&(Nn===null||!$a.call(Nn,e))){var a=e;(a.f&fi)!==0&&(a.f^=fi),a.v!==dn&&Wl(a),a.ac!==null&&Ta(()=>{a.ac.abort(fs),a.ac=null,nn(a,Gt)}),Sp(a),is(a,0)}}function is(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)Bp(i,t[n])}function va(i){var e=i.f;if((e&xn)===0){nn(i,fn);var t=Pt;Pt=i;try{(e&(ci|Id))!==0?Op(i):Jl(i),lf(i);var n=vf(i);i.teardown=typeof n=="function"?n:null,i.wv=hf;var r;Rd&&hp&&(i.f&Gt)!==0&&i.deps}finally{Pt=t}}}async function zp(){await Promise.resolve(),Ep()}function l(i){var e=i.f,t=(e&Tn)!==0;if(Tt!==null&&!di){var n=Pt!==null&&(Pt.f&xn)!==0;if(!n&&(wi===null||!wi.has(i))){var r=Tt.deps;if((Tt.f&eo)!==0)i.rv<Sr&&(i.rv=Sr,Nn===null&&r!==null&&r[Hn]===i?Hn++:Nn===null?Nn=[i]:Nn.push(i));else{Tt.deps??=[],$a.call(Tt.deps,i)||Tt.deps.push(i);var a=i.reactions;a===null?i.reactions=[Tt]:$a.call(a,Tt)||a.push(Tt)}}}if(Yi&&Ei.has(i))return Ei.get(i);if(t){var o=i;if(Yi){var s=o.v;return((o.f&fn)===0&&o.reactions!==null||_f(o))&&(s=jl(o)),Ei.set(o,s),s}var c=(o.f&fi)===0&&!di&&Tt!==null&&(Tt.f&fi)!==0,u=(o.f&Ea)===0;ps(o)&&(c&&(o.f|=fi),qd(o)),c&&!u&&(Yd(o),gf(o))}if(ui?.has(i))return ui.get(i);if((i.f&or)!==0)throw i.v;return i.v}function gf(i){if(i.f|=fi,i.deps!==null)for(const t of i.deps){var e=t.reactions;e===null?t.reactions=[i]:$a.call(e,i)||e.push(i),(t.f&Tn)!==0&&(t.f&fi)===0&&(Yd(t),gf(t))}}function _f(i){if(i.v===dn)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(Ei.has(e)||(e.f&Tn)!==0&&_f(e))return!0;return!1}function Aa(i){var e=di;try{return di=!0,i()}finally{di=e}}const Gp=["touchstart","touchmove"];function Hp(i){return Gp.includes(i)}const Va=Symbol("events"),xf=new Set,bl=new Set;function Vp(i,e,t,n={}){function r(a){if(n.capture||yl.call(e,a),!a.cancelBubble)return Ta(()=>t?.call(this,a))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?(r.__removed=!1,Si(()=>{r.__removed||e.addEventListener(i,r,n)})):e.addEventListener(i,r,n),r}function jn(i,e,t,n,r){var a={capture:n,passive:r},o=Vp(i,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Kl(()=>{o.__removed=!0,e.removeEventListener(i,o,a)})}function ie(i,e,t){(e[Va]??={})[i]=t}function cn(i){for(var e=0;e<i.length;e++)xf.add(i[e]);for(var t of bl)t(i)}let Ao=null,Ro=!1;function yl(i){var e=this,t=e.ownerDocument,n=i.type,r=i.composedPath?.()||[],a=r[0]||i.target;Ao=i,Ro||(Ro=!0,setTimeout(()=>{Ro=!1,Ao=null}));var o=0,s=Ao===i&&i[Va];if(s){var c=r.indexOf(s);if(c!==-1&&(e===document||e===window)){i[Va]=e;return}var u=r.indexOf(e);if(u===-1)return;c<=u&&(o=c)}if(a=r[o]||i.target,a!==e){Cd(i,"currentTarget",{configurable:!0,get(){return a||t}});var d=Tt,h=Pt;ii(null),Ti(null);try{for(var f,v=[];a!==null&&a!==e;){try{var y=a[Va]?.[n];y!=null&&(!a.disabled||i.target===a)&&y.call(a,i)}catch(S){f?v.push(S):f=S}if(i.cancelBubble)break;o++,a=o<r.length?r[o]:null}if(f){for(let S of v)queueMicrotask(()=>{throw S});throw f}}finally{i[Va]=e,delete i.currentTarget,ii(d),Ti(h)}}}const Wp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function jp(i){return Wp?.createHTML(i)??i}function Xp(i){var e=Pp("template");return e.innerHTML=jp(i.replaceAll("<!>","<!---->")),e.content}function ro(i,e){var t=Pt;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function W(i,e){var t=(e&Kh)!==0,n=(e&Zh)!==0,r,a=!i.startsWith("<!>");return()=>{r===void 0&&(r=Xp(a?i:"<!>"+i),t||(r=ns(r)));var o=n||tf?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=ns(o),c=o.lastChild;ro(s,c)}else ro(o,o);return o}}function Gi(i=""){{var e=ji(i+"");return ro(e,e),e}}function rs(){var i=document.createDocumentFragment(),e=document.createComment(""),t=ji();return i.append(e,t),ro(e,t),i}function k(i,e){i!==null&&i.before(e)}function qp(i){let e=0,t=Lr(0),n;return()=>{Yl()&&(l(t),Zl(()=>(e===0&&(n=Aa(()=>i(()=>Za(t)))),e+=1,()=>{Si(()=>{e-=1,e===0&&(n?.(),n=void 0,Za(t))})})))}}var Yp=ha|wa;function Kp(i,e,t,n){new Zp(i,e,t,n)}class Zp{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#u=null;#m=qp(()=>(this.#u=Lr(this.#h),()=>{this.#u=null}));constructor(e,t,n,r){this.#t=e,this.#e=t,this.#s=a=>{var o=Pt;o.b=this,o.f|=pl,n(a)},this.parent=Pt.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=po(()=>{this.#b()},Yp)}#x(){try{this.#i=Qn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#S(e){const t=this.#e.failed,{reset:n,invoke_onerror:r}=this.#_(e);Si(r),t&&(this.#r=Qn(()=>{t(this.#t,()=>e,()=>n)}))}#_(e){var t=!1,n=!1;const r=()=>{if(!this.#d()){if(t){ep();return}t=!0,n&&fp(),this.#r!==null&&wr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{n=!0,this.#e.onerror?.(e,r),n=!1}catch(o){bi(o,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(xn|es))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=Qn(()=>e(this.#t)),Si(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),n=ji(),r=!1;if(t.append(n),this.#i=this.#y(()=>{try{return Qn(()=>this.#s(n))}catch(a){try{this.error(a),r=!0}catch(o){bi(o,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(yt);return}this.#c===0&&(this.#t.before(t),this.#o=null,wr(this.#a,()=>{this.#a=null}),this.#f(yt))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=Qn(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();Ql(this.#i,e);const t=this.#e.pending;this.#a=Qn(()=>t(this.#t))}else this.#f(yt)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){Vd(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=Pt,n=Tt,r=bn;Ti(this.#n),ii(this.#n),pa(this.#n.ctx);try{return fr.ensure(),e()}finally{Ti(t),ii(n),pa(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&wr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Si(()=>{this.#p=!1,this.#u&&ma(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),l(this.#u)}error(e){if(e===kd||!this.#e.onerror&&!this.#e.failed)throw e;yt?.is_fork?(this.#i&&yt.skip_effect(this.#i),this.#a&&yt.skip_effect(this.#a),this.#r&&yt.skip_effect(this.#r),yt.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(On(this.#i),this.#i=null),this.#a&&(On(this.#a),this.#a=null),this.#r&&(On(this.#r),this.#r=null);let t=this.#e.failed;const n=r=>{if(this.#d())return;const{reset:a,invoke_onerror:o}=this.#_(r);o(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return Qn(()=>{var s=Pt;s.b=this,s.f|=pl,t(this.#t,()=>r,()=>a)})}catch(s){return bi(s,this.#n.parent),null}}))};Si(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){bi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(n,a=>bi(a,this.#n&&this.#n.parent)):n(r)}})}}function J(i,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(i[gl]??=i.nodeValue)&&(i[gl]=t,i.nodeValue=`${t}`)}function Jp(i,e){return Qp(i,e)}const gs=new Map;function Qp(i,{target:e,anchor:t,props:n={},events:r,context:a,intro:o=!0,transformError:s}){Rp();var c=void 0,u=Up(()=>{var d=t??e.appendChild(ji());Kp(d,{pending:()=>{}},v=>{qt({});var y=bn;a&&(y.c=a),r&&(n.$$events=r),c=i(v,n)||Vl(),Yt()},s);var h=new Set,f=v=>{for(var y=0;y<v.length;y++){var S=v[y];if(!h.has(S)){h.add(S);var m=Hp(S);for(const b of[e,document]){var p=gs.get(b);p===void 0&&(p=new Map,gs.set(b,p));var E=p.get(S);E===void 0?(b.addEventListener(S,yl,{passive:m}),p.set(S,1)):p.set(S,E+1)}}}};return f(fo(xf)),bl.add(f),()=>{for(var v of h)for(const m of[e,document]){var y=gs.get(m),S=y.get(v);--S==0?(m.removeEventListener(v,yl),y.delete(v),y.size===0&&gs.delete(m)):y.set(v,S)}bl.delete(f),d!==t&&d.parentNode?.removeChild(d)}});return $p.set(c,u),c}let $p=new WeakMap;class bf{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),n=this.#l.get(t);if(n)io(n),this.#s.delete(t);else{var r=this.#e.get(t);r&&(io(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[a,o]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(o);s&&(On(s.effect),this.#e.delete(o))}for(const[a,o]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var u=document.createDocumentFragment();Ql(o,u),u.append(ji()),this.#e.set(a,{effect:o,fragment:u})}else On(o);this.#s.delete(a),this.#l.delete(a)};this.#n||!n?(this.#s.add(a),wr(o,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[n,r]of this.#e)t.includes(n)||(On(r.effect),this.#e.delete(n))};ensure(e,t){var n=yt,r=af();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),o=ji();a.append(o),this.#e.set(e,{effect:Qn(()=>t(o)),fragment:a})}else this.#l.set(e,Qn(()=>t(this.anchor)));if(this.#t.set(n,e),r){for(const[s,c]of this.#l)s===e?n.unskip_effect(c):n.skip_effect(c);for(const[s,c]of this.#e)s===e?n.unskip_effect(c.effect):n.skip_effect(c.effect);n.oncommit(this.#i),n.ondiscard(this.#a)}else this.#i(n)}}function Ie(i,e,t=!1){var n=new bf(i),r=t?ha:0;function a(o,s){n.ensure(o,s)}po(()=>{var o=!1;e((s,c=0)=>{o=!0,a(c,s)}),o||a(-1,null)},r)}const em=Symbol("NaN");function yf(i,e,t){var n=new bf(i);po(()=>{var r=e();r!==r&&(r=em),n.ensure(r,t)})}function Sl(i,e){return e}function tm(i,e,t){for(var n=[],r=e.length,a,o=e.length,s=0;s<r;s++){let h=e[s];wr(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=i.outrogroups;Ml(i,fo(a.done)),f.delete(a),f.size===0&&(i.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=n.length===0&&t!==null&&i.pending.size===0;if(c){var u=t,d=u.parentNode;Cp(d),d.append(u),i.items.clear()}Ml(i,e,!c)}else a={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(a)}function Ml(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const o of i.pending.values())for(const s of o)n.add(i.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(n?.has(a)){a.f|=yi;const o=document.createDocumentFragment();Ql(a,o)}else On(e[r],t)}}var Lc;function wt(i,e,t,n,r,a=null){var o=i,s=new Map,c=(e&Od)!==0;if(c){var u=i;o=u.appendChild(ji())}var d=null,h=Xd(()=>{var E=t();return uo(E)?E:E==null?[]:fo(E)}),f=new Map,v=!0;function y(E){if((p.effect.f&xn)===0){p.pending.delete(E);var b=l(h);p.fallback=d,nm(p,b,o,e,n),d!==null&&(b.length===0?(d.f&yi)===0?io(d):(d.f^=yi,Wa(d,null,o)):wr(d,()=>{d=null}))}}function S(E){p.pending.delete(E)}var m=po(()=>{for(var E=l(h),b=E.length,T=new Set,A=yt,L=af(),R=0;R<b;R+=1){var H=E[R],x=n(H,R),w=v?null:s.get(x);w?(w.v&&ma(w.v,H),w.i&&ma(w.i,R),L&&A.unskip_effect(w.e)):(w=im(s,v?o:Lc??=ji(),H,x,R,r,e,t),v||(w.e.f|=yi),s.set(x,w)),T.add(x)}if(b===0&&a&&!d&&(v?d=Qn(()=>a(o)):(d=Qn(()=>a(Lc??=ji())),d.f|=yi)),b>T.size&&ip(),!v)if(f.set(A,T),L){for(const[Z,B]of s)T.has(Z)||A.skip_effect(B.e);A.oncommit(y),A.ondiscard(S)}else y(A);l(h)}),p={effect:m,items:s,pending:f,outrogroups:null,fallback:d};v=!1}function Ia(i){for(;i!==null&&(i.f&mi)===0;)i=i.next;return i}function nm(i,e,t,n,r){var a=(n&Vh)!==0,o=e.length,s=i.items,c=Ia(i.effect.first),u,d=null,h,f=[],v=[],y,S,m,p;if(a)for(p=0;p<o;p+=1)y=e[p],S=r(y,p),m=s.get(S).e,(m.f&yi)===0&&(m.nodes?.a?.measure(),(h??=new Set).add(m));for(p=0;p<o;p+=1){if(y=e[p],S=r(y,p),m=s.get(S).e,i.outrogroups!==null)for(const w of i.outrogroups)w.pending.delete(m),w.done.delete(m);if((m.f&Dn)!==0&&(io(m),a&&(m.nodes?.a?.unfix(),(h??=new Set).delete(m))),(m.f&yi)!==0)if(m.f^=yi,m===c)Wa(m,null,t);else{var E=d?d.next:c;m===i.effect.last&&(i.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),$i(i,d,m),$i(i,m,E),Wa(m,E,t),d=m,f=[],v=[],c=Ia(d.next);continue}if(m!==c){if(u!==void 0&&u.has(m)){if(f.length<v.length){var b=v[0],T;d=b.prev;var A=f[0],L=f[f.length-1];for(T=0;T<f.length;T+=1)Wa(f[T],b,t);for(T=0;T<v.length;T+=1)u.delete(v[T]);$i(i,A.prev,L.next),$i(i,d,A),$i(i,L,b),c=b,d=L,p-=1,f=[],v=[]}else u.delete(m),Wa(m,c,t),$i(i,m.prev,m.next),$i(i,m,d===null?i.effect.first:d.next),$i(i,d,m),d=m;continue}for(f=[],v=[];c!==null&&c!==m;)(u??=new Set).add(c),v.push(c),c=Ia(c.next);if(c===null)continue}(m.f&yi)===0&&f.push(m),d=m,c=Ia(m.next)}if(i.outrogroups!==null){for(const w of i.outrogroups)w.pending.size===0&&(Ml(i,fo(w.done)),i.outrogroups?.delete(w));i.outrogroups.size===0&&(i.outrogroups=null)}if(c!==null||u!==void 0){var R=[];if(u!==void 0)for(m of u)(m.f&Dn)===0&&R.push(m);for(;c!==null;)(c.f&Dn)===0&&c!==i.fallback&&R.push(c),c=Ia(c.next);var H=R.length;if(H>0){var x=(n&Od)!==0&&o===0?t:null;if(a){for(p=0;p<H;p+=1)R[p].nodes?.a?.measure();for(p=0;p<H;p+=1)R[p].nodes?.a?.fix()}tm(i,R,x)}}a&&Si(()=>{if(h!==void 0)for(m of h)m.nodes?.a?.apply()})}function im(i,e,t,n,r,a,o,s){var c=(o&Gh)!==0?(o&Wh)===0?Tp(t,!1,!1):Lr(t):null,u=(o&Hh)!==0?Lr(r):null;return{v:c,i:u,e:Qn(()=>(a(e,c??t,u??r,s),()=>{i.delete(n)}))}}function Wa(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,a=e&&(e.f&yi)===0?e.nodes.start:t;n!==null;){var o=hs(n);if(a.before(n),n===r)return;n=o}}function $i(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const Dc=[...` 	
\r\f \v\uFEFF`];function rm(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var r of Object.keys(t))if(t[r])n=n?n+" "+r:r;else if(n.length)for(var a=r.length,o=0;(o=n.indexOf(r,o))>=0;){var s=o+a;(o===0||Dc.includes(n[o-1]))&&(s===n.length||Dc.includes(n[s]))?n=(o===0?"":n.substring(0,o))+n.substring(s+1):o=s}}return n===""?null:n}function am(i,e){return i==null?null:String(i)}function dt(i,e,t,n,r,a){var o=i[ml];if(o!==t||o===void 0){var s=rm(t,n,a);s==null?i.removeAttribute("class"):i.className=s,i[ml]=t}else if(a&&r!==a)for(var c in a){var u=!!a[c];(r==null||u!==!!r[c])&&i.classList.toggle(c,u)}return a}function Pn(i,e,t,n){var r=i[vl];if(r!==e){var a=am(e);a==null?i.removeAttribute("style"):i.style.cssText=a,i[vl]=e}return n}function sm(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function om(i,e){var t=i.__defaultValue,n=i.multiple,r=n?t??[]:null;if(!(n&&!uo(r))){i.selectedIndex;for(var a of i.options){var o=la(a);sm(a,n?r.includes(o):ef(o,t))}}}function Sf(i,e,t=!1){if(i.multiple){if(e==null)return;if(!uo(e))return $h();for(var n of i.options)n.selected=e.includes(la(n));return}for(n of i.options){var r=la(n);if(ef(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function ga(i){var e=new MutationObserver(t=>{t.every(lm)||("__defaultValue"in i&&om(i),"__value"in i&&Sf(i,i.__value))});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Kl(()=>{e.disconnect()})}function _a(i,e,t=e){var n=new WeakSet,r=!0;Wd(i,"change",a=>{var o=a?"[selected]":":checked",s;if(i.multiple)s=[].map.call(i.querySelectorAll(o),la);else{var c=i.querySelector(o)??i.querySelector("option:not([disabled])");s=c&&la(c)}t(s),i.__value=s,yt!==null&&n.add(yt)}),of(()=>{var a=e();if(i===document.activeElement){var o=yt;if(n.has(o))return}if(Sf(i,a,r),r&&a===void 0){var s=i.querySelector(":checked");s!==null&&(a=la(s),t(a))}i.__value=a,r=!1})}function la(i){return"__value"in i?i.__value:i.value}function lm(i){if(i.target.closest("selectedcontent")!==null)return!0;if(i.type==="childList"){var e=[...i.addedNodes,...i.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const cm=Symbol("is custom element"),um=Symbol("is html"),dm=zh?"progress":"PROGRESS";function as(i,e){var t=$l(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==dm)||(i.value=e??"")}function Ja(i,e){var t=$l(i);t.checked!==(t.checked=e??void 0)&&(i.checked=e)}function ze(i,e,t,n){var r=$l(i),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(i[Bh]=t),t==null?i.removeAttribute(e):typeof t!="string"&&fm(i).has(e)?i[e]=t:i.setAttribute(e,t))}function $l(i){return i[Nd]??={[cm]:i.nodeName.includes("-"),[um]:i.namespaceURI===Jh}}var Ic=new Map;function fm(i){var e=i.getAttribute("is")||i.nodeName,t=Ic.get(e);if(t)return t;Ic.set(e,t=new Set);for(var n,r=i,a=Element.prototype;a!==r;){n=Lh(r);for(var o in n)n[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.add(o);r=Pd(r)}return t}function Wt(i,e,t=e){var n=new WeakSet;Wd(i,"input",async r=>{var a=r?i.defaultValue:i.value;if(a=Co(i)?Po(a):a,t(a),yt!==null&&n.add(yt),await zp(),a!==(a=e())){var o=i.selectionStart,s=i.selectionEnd,c=i.value.length;if(i.value=a??"",s!==null){var u=i.value.length;o===s&&s===c&&u>c?(i.selectionStart=u,i.selectionEnd=u):(i.selectionStart=o,i.selectionEnd=Math.min(s,u))}}}),Aa(e)==null&&i.value&&(t(Co(i)?Po(i.value):i.value),yt!==null&&n.add(yt)),Zl(()=>{var r=e();if(i===document.activeElement){var a=yt;if(n.has(a))return}Co(i)&&r===Po(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function Co(i){var e=i.type;return e==="number"||e==="range"}function Po(i){return i===""?null:+i}function Lo(i,e){return i===e||i?.[Er]===e}function Mf(i=Vl(),e,t,n){var r=bn.r,a=Pt;return of(()=>{var o,s;return Zl(()=>{o=s,s=[],Aa(()=>{Lo(t(...s),i)||(e(i,...s),o&&Lo(t(...o),i)&&e(null,...o))})}),()=>{let c=a;for(;c!==r&&c.parent!==null&&c.parent.f&es;)c=c.parent;const u=()=>{s&&Lo(t(...s),i)&&e(null,...s)},d=c.teardown;c.teardown=()=>{u(),d?.()}}}),i}let _s=!1;function hm(i){var e=_s;try{return _s=!1,[i(),_s]}finally{_s=e}}function $e(i,e,t,n){var r=!0,a=(t&qh)!==0,o=(t&Yh)!==0,s=n,c=!0,u=void 0,d=()=>o&&r?(u??=ts(n),l(u)):(c&&(c=!1,s=o?Aa(n):n),s);let h;if(a){var f=Er in i||Fh in i;h=aa(i,e)?.set??(f&&e in i?T=>i[e]=T:void 0)}var v,y=!1;a?[v,y]=hm(()=>i[e]):v=i[e],v===void 0&&n!==void 0&&(v=d(),h&&(lp(),h(v)));var S;if(S=()=>{var T=i[e];return T===void 0?d():(c=!0,T)},(t&Xh)===0)return S;if(h){var m=i.$$legacy;return(function(T,A){return arguments.length>0?((!A||m||y)&&h(A?S():T),T):S()})}var p=!1,E=((t&jh)!==0?ts:Xd)(()=>(p=!1,S()));a&&l(E);var b=Pt;return(function(T,A){if(arguments.length>0){const L=A?l(E):a?Ut(T):T;return g(E,L),p=!0,s!==void 0&&(s=L),T}return Yi&&p||(b.f&xn)!==0?E.v:l(E)})}function Ci(i){bn===null&&zd(),$t(()=>{const e=Aa(i);if(typeof e=="function")return e})}function ec(i){bn===null&&zd(),Ci(()=>()=>Aa(i))}const pm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(pm);function mm(i){const e=[];for(const t of String(i??"")){const n=t.codePointAt(0);if(!(n===65039||n===65038)){if(n===8205){e.push("200d");continue}e.push(n.toString(16))}}return e.join("-")}const Ef=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310","23f9","2b07","1f50d","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","1f980","2b50","1f9ed","1f5e1","1f52e","1f409","1f47e","2693","1f3b2","1f4a3","1f36a","1f331","1f9bb","1f4da","2696","1f3c6","1f451","1f9ea","1f52d","1f6e9"]),vm=["1f980","2694","1f6e1","26cf","1f3f9","1f48e","1f525","1f680","2b50","1f9ed","1f310","1f409","1f47e","1f4a3","1f36a","1f331","1f9ea","1f52e","1f52d","2693","1f3b2","1f4da","2696","1f3c6","1f451","1f5e1","1f9f1","1f9e9"],wf=["grass","dirt","stone","diamond","gold","iron","brick","planks","creeper","squarecreeper","enderman","skeleton","steve","herobrine","chicken","fox","bee","meat","enderpearl","netherstar","flame","tnt","gear","magitech","fabricmc","quiltmc","neoforged","modrinth","ftb_logo","prismlauncher"],El="/";function gm(i){const e=mm(i);return Ef.has(e)?`${El}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}function mo(i){const e=String(i??"").trim();if(!e)return null;if(e.startsWith("twemoji:")){const t=e.slice(8);return Ef.has(t)?`${El}twemoji/${t}.svg`.replace(/\/{2,}/g,"/"):null}if(e.startsWith("prism:")){const t=e.slice(6);return wf.includes(t)?`${El}instance-icons/prism/${t}.svg`.replace(/\/{2,}/g,"/"):null}return null}var _m=W('<img draggable="false"/>'),xm=W("<span> </span>");function Mi(i,e){qt(e,!0);let t=$e(e,"emoji",3,""),n=$e(e,"size",3,null),r=$e(e,"alt",3,""),a=$e(e,"class",3,"");const o=st(()=>gm(t())),s=st(()=>r()||t()),c=st(()=>n()?`${n()}px`:"1em");var u=rs(),d=St(u);{var h=v=>{var y=_m();ge(()=>{ze(y,"src",l(o)),ze(y,"alt",l(s)),ze(y,"title",r()||void 0),dt(y,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),Pn(y,`width: ${l(c)??""}; height: ${l(c)??""};`),ze(y,"aria-hidden",r()?void 0:"true")}),k(v,y)},f=v=>{var y=xm(),S=K(y,!0);ge(()=>{dt(y,1,`inline-block ${a()??""}`),ze(y,"aria-hidden",r()?void 0:"true"),ze(y,"title",r()||void 0),J(S,t())}),k(v,y)};Ie(d,v=>{l(o)?v(h):v(f,-1)})}k(i,u),Yt()}var bm=W('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),ym=W('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function Sm(i,e){qt(e,!0);let t=$e(e,"selected",3,!1),n=$e(e,"gameRunning",3,!1),r=$e(e,"menuOpen",3,!1);const a=st(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function o(){const H=mo(e.instance.icon_key);if(H)return H;const x=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&x?x(e.instance.icon_path):"/logo.png"}var s=ym(),c=D(s),u=D(c),d=K(u),h=M(u,2),f=D(h),v=K(f,!0),y=M(f,2),S=D(y),m=K(S,!0),p=M(S,2),E=K(p,!0),b=M(h,2),T=M(c,2),A=K(T,!0),L=M(T,2);{var R=H=>{var x=bm(),w=St(x),Z=M(w,2),B=D(Z),O=M(B,2),F=M(O,2),V=D(F);Mi(V,{emoji:"📂"});var he=M(F,2),X=M(he,4);ge(()=>B.disabled=n()),ie("click",w,function(...le){e.onclosemenu?.apply(this,le)}),ie("click",B,()=>{e.onclosemenu(),e.onplay()}),ie("click",O,()=>{e.onclosemenu(),e.onedit()}),ie("click",F,()=>{e.onclosemenu(),e.onopenfolder()}),ie("click",he,function(...le){e.onviewlogs?.apply(this,le)}),ie("click",X,()=>{e.onclosemenu(),e.ondelete()}),k(H,x)};Ie(L,H=>{r()&&H(R)})}ge((H,x)=>{dt(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),ze(s,"aria-selected",t()),ze(s,"title",e.instance.name),ze(d,"src",H),J(v,e.instance.name),J(m,e.instance.minecraft_version),dt(p,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${l(a)??""}`),J(E,e.instance.loader_type),J(A,x)},[()=>o(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),ie("click",s,function(...H){e.onselect?.apply(this,H)}),ie("dblclick",s,function(...H){e.onplay?.apply(this,H)}),ie("keydown",s,H=>{(H.key==="Enter"||H.key===" ")&&(H.preventDefault(),e.onplay())}),ie("contextmenu",s,H=>{H.preventDefault(),e.onselect(),e.ontogglemenu()}),jn("error",d,H=>{H.currentTarget.dataset.f||(H.currentTarget.dataset.f="1",H.currentTarget.src="/logo.png")}),ie("click",b,H=>{H.stopPropagation(),e.ontogglemenu()}),k(i,s),Yt()}cn(["click","dblclick","keydown","contextmenu"]);var Mm=W('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),Em=W('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),wm=W('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Tm=W('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function Am(i,e){qt(e,!0);var t=Tm();wt(t,21,()=>e.instances,n=>n.id,(n,r)=>{{let a=st(()=>e.selectedId===l(r).id),o=st(()=>e.menuFor===l(r).id);Sm(n,{get instance(){return l(r)},get selected(){return l(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return l(o)},onselect:()=>e.onselect?.(l(r).id),onplay:()=>e.onplay?.(l(r).id),ontogglemenu:()=>e.ontogglemenu?.(l(r).id),onedit:()=>e.onedit?.(l(r)),onopenfolder:()=>e.onopenfolder?.(l(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(l(r).id),get onclosemenu(){return e.onclosemenu}})}},n=>{var r=rs(),a=St(r);{var o=d=>{var h=Mm(),f=K(h,!0);ge(()=>J(f,e.error)),k(d,h)},s=d=>{var h=Em(),f=K(h);ge(v=>J(f,`No instances match "${v??""}".`),[()=>e.query.trim()]),k(d,h)},c=st(()=>e.query.trim()),u=d=>{var h=wm(),f=M(D(h),6);ie("click",f,()=>e.onadd?.()),k(d,h)};Ie(a,d=>{e.error?d(o):l(c)?d(s,1):d(u,-1)})}k(n,r)}),k(i,t),Yt()}cn(["click"]);const ss=[];function Ra(i){return ss.push(i),i}function Ca(i){const e=ss.lastIndexOf(i);e!==-1&&ss.splice(e,1)}function Uc(){return ss[ss.length-1]??null}var Rm=W('<button type="button" role="tab"> </button>'),Cm=W('<button type="button"><img alt="" class="h-12 w-12 object-contain" draggable="false" loading="lazy"/> <span class="w-full truncate text-center text-[10px] text-(--text-muted)"> </span></button>'),Pm=W('<div class="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2"></div>'),Lm=W('<button type="button"><img alt="" class="h-8 w-8" draggable="false" loading="lazy"/></button>'),Dm=W('<div class="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-2"></div>'),Im=W('<div class="flex items-center gap-2 rounded border border-(--border) p-2"><img alt="" class="h-10 w-10 object-contain" draggable="false"/> <span class="truncate text-[11px] text-(--text-muted)"> </span></div>'),Um=W('<p role="alert" class="text-[11px] text-red-400"> </p>'),Nm=W(`<div class="flex flex-col items-start gap-3"><p class="text-[12px] text-(--text-muted)">Pick a PNG, JPG, SVG, WEBP or ICO from disk. The file is copied into the instance
            directory, so the instance stays self-contained.</p> <!> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-xs font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-50"> </button> <!></div>`),Om=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Choose an instance icon"><div class="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-xl"><header class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h2 class="text-sm font-semibold">Instance icon</h2> <button type="button" class="rounded px-2 py-1 text-xs text-(--text-muted) hover:bg-(--bg-subtle)" aria-label="Close icon picker">Close</button></header> <div class="flex gap-1 border-b border-(--border) px-3 py-2" role="tablist" aria-label="Icon sources"></div> <div class="min-h-0 flex-1 overflow-y-auto p-4"><!></div></div></div>');function Tf(i,e){qt(e,!0);let t=$e(e,"currentKey",3,""),n=$e(e,"currentPath",3,"");const r=[{id:"prism",label:"Prism / Freesm"},{id:"twemoji",label:"Twemoji"},{id:"custom",label:"Custom image…"}];let a=ae("prism"),o=ae(!1),s=ae("");const c="/",u=x=>`${c}${x}`.replace(/\/{2,}/g,"/"),d=x=>u(`instance-icons/prism/${x}.svg`),h=x=>u(`twemoji/${x}.svg`),f=x=>x.replace(/_/g," ").replace(/\b\w/g,w=>w.toUpperCase()).replace(/^(Fabricmc|Quiltmc|Neoforged|Ftb)\b/,w=>({Fabricmc:"Fabric",Quiltmc:"Quilt",Neoforged:"NeoForge",Ftb:"FTB"})[w]??w);Ci(()=>{const x=Ra(()=>e.onclose?.());return()=>Ca(x)});function v(x){e.onpick?.(x),e.onclose?.()}async function y(){if(!l(o)){g(o,!0),g(s,"");try{const x=await e.oncustom?.();if(x==null)return;e.onclose?.()}catch(x){g(s,String(x),!0)}finally{g(o,!1)}}}var S=Om(),m=D(S),p=D(m),E=M(D(p),2),b=M(p,2);wt(b,21,()=>r,x=>x.id,(x,w)=>{var Z=Rm(),B=K(Z,!0);ge(()=>{ze(Z,"aria-selected",l(a)===l(w).id),dt(Z,1,`rounded px-2.5 py-1 text-xs font-medium transition-colors ${l(a)===l(w).id?"bg-(--accent)/15 text-(--accent)":"text-(--text-muted) hover:bg-(--bg-subtle)"}`),J(B,l(w).label)}),ie("click",Z,()=>g(a,l(w).id,!0)),k(x,Z)});var T=M(b,2),A=D(T);{var L=x=>{var w=Pm();wt(w,20,()=>wf,Z=>Z,(Z,B)=>{var O=Cm(),F=D(O),V=M(F,2),he=K(V,!0);ge((X,le,Me)=>{dt(O,1,`group flex flex-col items-center gap-1 rounded border p-2 transition-colors ${t()===`prism:${B}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),ze(O,"title",X),ze(F,"src",le),J(he,Me)},[()=>f(B),()=>d(B),()=>f(B)]),ie("click",O,()=>v(`prism:${B}`)),k(Z,O)}),k(x,w)},R=x=>{var w=Dm();wt(w,20,()=>vm,Z=>Z,(Z,B)=>{var O=Lm(),F=K(O);ge(V=>{dt(O,1,`flex items-center justify-center rounded border p-2 transition-colors ${t()===`twemoji:${B}`?"border-(--accent) bg-(--accent)/10":"border-(--border) hover:border-(--accent)"}`),ze(O,"title",B),ze(O,"aria-label",`Twemoji ${B}`),ze(F,"src",V)},[()=>h(B)]),ie("click",O,()=>v(`twemoji:${B}`)),k(Z,O)}),k(x,w)},H=x=>{var w=Nm(),Z=M(D(w),2);{var B=X=>{var le=Im(),Me=D(le),j=M(Me,2),G=K(j,!0);ge(()=>{ze(Me,"src",n()),J(G,n())}),k(X,le)};Ie(Z,X=>{n()&&X(B)})}var O=M(Z,2),F=K(O,!0),V=M(O,2);{var he=X=>{var le=Um(),Me=K(le,!0);ge(()=>J(Me,l(s))),k(X,le)};Ie(V,X=>{l(s)&&X(he)})}ge(()=>{O.disabled=l(o),J(F,l(o)?"Copying…":"Choose file…")}),ie("click",O,y),k(x,w)};Ie(A,x=>{l(a)==="prism"?x(L):l(a)==="twemoji"?x(R,1):x(H,-1)})}ie("click",E,function(...x){e.onclose?.apply(this,x)}),k(i,S),Yt()}cn(["click"]);const os="twilight_user_accent",tc="twilight_custom_themes",Nc="#06B6D4",Oc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],kc="#0F172A",km="#FFFFFF",Fm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function xs(i){return Fm[i]??[]}function ms(i){let e=i.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function Fc(i){const e=t=>{const n=parseInt(i.replace("#","").substring(t,t+2),16)/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function Bm(i){const e=Fc(i),t=1.05/(e+.05);return(e+.05)/(Fc(kc)+.05)>=t?kc:km}function ls(i,{persist:e=!0}={}){const t=ms(i);if(!t)return!1;const n=document.documentElement;return n.style.setProperty("--user-accent",t),n.style.setProperty("--on-accent",Bm(t)),e&&localStorage.setItem(os,t),!0}function zm(){localStorage.removeItem(os);const i=document.documentElement;i.style.removeProperty("--user-accent"),i.style.removeProperty("--on-accent")}function wl(){return ms(localStorage.getItem(os)??"")}function Gm(){const i=wl();i&&ls(i)}const vo=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:Oc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...Oc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:xs("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:xs("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:xs("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:xs("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],nc="twilight-dark",Tl={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},Hm=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function Vm(i){let e="";for(const t of i){const n=t.codePointAt(0);n>=65&&n<=90?e+=String.fromCharCode(n+32):n>=97&&n<=122||n>=48&&n<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function Af(i){const e=i&&typeof i=="object"?i:{},t={};for(const[n,r]of Object.entries(Tl))t[n]=ms(e[n]??"")??r;return t}function Wm(i){return typeof i=="string"&&i.startsWith("custom:")}function Rf(i){return Mr().find(e=>e.id===i)??null}function Mr(){try{const i=JSON.parse(localStorage.getItem(tc)??"[]");return Array.isArray(i)?i.filter(e=>e&&typeof e=="object"&&Wm(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:Af(e.tokens)})):[]}catch{return[]}}function Bc({name:i,dark:e,tokens:t}){const n=String(i??"").trim()||"Custom theme",r={id:`custom:${Vm(n)||"theme"}`,name:n,dark:!!e,tokens:Af(t)},a=[...Mr().filter(o=>o.id!==r.id),r];return localStorage.setItem(tc,JSON.stringify(a)),r}function jm(i){const e=Mr().filter(t=>t.id!==i);return localStorage.setItem(tc,JSON.stringify(e)),e}function zc(){try{const i=getComputedStyle(document.documentElement),e=(n,r)=>{const a=i.getPropertyValue(n).trim();return ms(a)??r},t={};for(const[n,r]of Object.entries(Tl)){const a=`--${n.replace(/(\d)$/,"-$1")}`;t[n]=e(a,r)}return t}catch{return{...Tl}}}const Xm=new Set(vo.map(i=>i.id));function ic(i){const e=(i??"").trim();return e==="dark"?nc:e==="light"?"twilight-light":Xm.has(e)||Rf(e)?e:null}function qm(i){const e=i.tokens;return{id:i.id,label:i.name,dark:i.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:i.name,hex:e.accent1}],tokens:e}}function ca(i){const e=ic(i);return e?vo.find(t=>t.id===e)??qm(Rf(e)):null}function ja(i){return ca(i)?.dark??!0}const Ym=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Do="";function Km(i){const e=ca(i)??ca(nc);if(!e||e.id===Do)return e;const t=Do==="";Do=e.id;const n=document.documentElement;for(const r of Ym)n.style.removeProperty(r);n.classList.toggle("dark",e.dark),n.classList.toggle("light",!e.dark);for(const r of vo)r.cls&&n.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;n.style.setProperty("--bg-1",r.bg1),n.style.setProperty("--bg-2",r.bg2),n.style.setProperty("--bg-3",r.bg3),n.style.setProperty("--border-1",r.border1),n.style.setProperty("--fg-1",r.fg1),n.style.setProperty("--fg-2",r.fg2),n.style.setProperty("--accent-1",r.accent1),n.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(os),ls(r.accent1,{persist:!1})}else t||(localStorage.removeItem(os),ls(e.accent,{persist:!1}));return e}const Zm="/".replace(/\/{2,}/g,"/"),Cf=[{id:"fluent-auto",label:"Fluent (Auto)",hint:"Freesm Fluent · follows the theme"},{id:"fluent",label:"Fluent Light",hint:"Freesm Fluent · light ink"},{id:"fluent_dark",label:"Fluent Dark",hint:"Freesm Fluent · white ink"},{id:"breeze_dark",label:"Breeze Dark",hint:"Prism · KDE Breeze dark"},{id:"breeze_light",label:"Breeze Light",hint:"Prism · KDE Breeze light"},{id:"pe_colored",label:"Prism PE Colored",hint:"Prism · full-color PE"},{id:"twemoji",label:"Twemoji",hint:"Emoji glyphs · the classic look"}],Pf=new Set(Cf.map(i=>i.id)),Lf="twilight-icon-pack",Jm={instances:"viewfolder",folder:"viewfolder",server:"server",settings:"settings",accounts:"accounts",new:"new",launch:"launch",edit:"instance-settings",copy:"copy",export:"export",delete:"delete",shortcut:"shortcut",mods:"centralmods",refresh:"refresh",console:"log",tag:"tag",star:"star",help:"help",about:"about",screenshots:"screenshots",worlds:"worlds"},Gc={kill:"⏹",download:"⬇",search:"🔍",sun:"☀",moon:"🌙",package:"📦",modrinth:"🧩",success:"✅",warning:"⚠",error:"⛔",instances:"📁",folder:"📁",server:"🌐",settings:"⚙",accounts:"👤",new:"➕",launch:"▶",edit:"✏",copy:"⧉",export:"⤓",delete:"🗑",shortcut:"🔗",mods:"📦",refresh:"🔄",console:"📜",tag:"🏷",star:"★",help:"❔",about:"ℹ",screenshots:"🖼",worlds:"🌐"};let Xa=null;function ao(){if(Xa)return Xa;const i=localStorage.getItem(Lf);return Xa=Pf.has(i??"")?i:"fluent-auto",Xa}function Qm(i){Pf.has(i)&&(Xa=i,localStorage.setItem(Lf,i),Df())}let Al="";function $m(i){const e=ic(i)??String(i??"");e!==Al&&(Al=e,Df())}function ev(i=ao()){return i!=="fluent-auto"?i:ja(Al||"twilight-dark")?"fluent_dark":"fluent"}const Rl=new Set;function Df(){for(const i of Rl)i()}function tv(i){return Rl.add(i),()=>Rl.delete(i)}function nv(i,e=null){const t=e??ao(),n=i;if(t==="twemoji"){const o=Gc[i];return o?{kind:"emoji",emoji:o,label:n}:null}const r=Jm[i];if(r)return{kind:"svg",src:`${Zm}icons/${ev(t)}/${r}.svg`,label:n};const a=Gc[i];return a?{kind:"emoji",emoji:a,label:n}:null}var iv=W('<img draggable="false"/>'),rv=W("<span></span>");function zt(i,e){qt(e,!0);let t=$e(e,"name",3,""),n=$e(e,"pack",3,null),r=$e(e,"size",3,null),a=$e(e,"alt",3,""),o=$e(e,"class",3,""),s=ae(0);const c=tv(()=>g(s,l(s)+1));ec(c);const u=st(()=>(l(s),nv(t(),n()))),d=st(()=>r()?`${r()}px`:"1em"),h=st(()=>a()||t());let f=ae(!1);$t(()=>{l(u)?.kind,g(f,!1)});var v=rs(),y=St(v);{var S=E=>{var b=rs(),T=St(b);yf(T,()=>l(u).src,A=>{var L=iv();ge(()=>{ze(L,"src",l(u).src),ze(L,"alt",l(h)),ze(L,"title",a()||void 0),dt(L,1,`shrink-0 select-none ${o()??""}`),Pn(L,`width:${l(d)??""};height:${l(d)??""};object-fit:contain`),ze(L,"aria-hidden",a()?void 0:"true")}),jn("error",L,()=>g(f,!0)),k(A,L)}),k(E,b)},m=E=>{{let b=st(()=>a()||void 0);Mi(E,{get emoji(){return l(u).emoji},get size(){return r()},get alt(){return l(b)},get class(){return o()}})}},p=E=>{var b=rv();ge(()=>{dt(b,1,`inline-block shrink-0 ${o()??""}`),Pn(b,`width:${l(d)??""};height:${l(d)??""}`)}),k(E,b)};Ie(y,E=>{l(u)?.kind==="svg"&&!l(f)?E(S):l(u)?.kind==="emoji"?E(m,1):E(p,-1)})}k(i,v),Yt()}const hi=Ut({dialog:null,toasts:[]});function bs(i){const e=hi.dialog;hi.dialog=null,e?.resolve?.(i)}let av=0;function rr(i,e="info",{title:t="",duration:n=4500}={}){const r=++av;return hi.toasts.push({id:r,message:i,kind:e,title:t,duration:n}),hi.toasts.length>6&&hi.toasts.shift(),r}function Hc(i){const e=hi.toasts.findIndex(t=>t.id===i);e!==-1&&hi.toasts.splice(e,1)}var sv=W('<div class="p-6 text-center text-(--step-body) text-(--fg-2)">Resolving mods and their dependencies…</div>'),ov=W('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div></div>'),lv=W('<tr><td class="px-3 py-2 align-top"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent-1)"/></td><td> </td><td class="px-3 py-2 align-top text-(--fg-2)"> </td><td class="px-3 py-2 align-top font-mono text-[11px] text-(--fg-2)"> </td><td> </td><td class="px-3 py-2 text-right align-top text-(--fg-2)"> </td></tr>'),cv=W('<tr><td colspan="6" class="px-3 py-6 text-center text-(--fg-2)">The queue is empty.</td></tr>'),uv=W('<table class="w-full text-left text-(--step-body)"><thead class="sticky top-0 z-10 bg-(--bg-3)"><tr class="border-b border-(--border-1) text-(--step-caption) uppercase tracking-wide text-(--fg-2)"><th class="w-[36px] px-3 py-2 font-medium"></th><th class="px-3 py-2 font-medium">Mod</th><th class="w-[130px] px-3 py-2 font-medium">Version</th><th class="w-[220px] px-3 py-2 font-medium">File</th><th class="w-[190px] px-3 py-2 font-medium">Source</th><th class="w-[80px] px-3 py-2 text-right font-medium">Size</th></tr></thead><tbody></tbody></table>'),dv=W('<span class="text-rose-400"> </span>'),fv=W(`<div role="presentation" class="fixed inset-0 z-[60] flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[560px] w-[880px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Confirm download</h3> <p class="text-(--step-meta) text-(--fg-2)">You're about to download the following mods — only rows with a check will be downloaded.</p></div> <button class="text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="min-w-0 truncate text-(--step-meta) text-(--fg-2)"><!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Back</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Downloads every checked file (SHA-1 verified) into this instance's mods folder"> </button></div></div></div></div>`);function hv(i,e){qt(e,!0);let t=$e(e,"items",19,()=>[]);const n=["fabric","quilt","forge","neoforge"],r=st(()=>{const j=e.instance.loader_type.toLowerCase();return n.includes(j)?j:""});let a=ae(null),o=ae(!0),s=ae(""),c=ae(Ut({})),u=ae(!1),d=ae("");function h(j){return j>=1024*1024?`${(j/1024/1024).toFixed(1)} MB`:j>=1024?`${(j/1024).toFixed(1)} KB`:`${j} B`}function f(j){return j.required_by.length?`required by ${j.required_by.join(", ")}`:j.installed?"already installed":"your selection"}function v(){return l(a)?.filter(j=>l(c)[j.project_id]).length??0}function y(j){g(c,{...l(c),[j.project_id]:!l(c)[j.project_id]},!0)}function S(j,G){const ee=window.__TAURI__?.core;return ee?ee.invoke(j,G):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function m(){if(!l(a)||l(u))return;const j=l(a).filter(G=>l(c)[G.project_id]).map(G=>({url:G.url,filename:G.filename,sha1:G.sha1}));if(j.length){g(u,!0),g(d,"");try{const G=await S("install_modrinth_batch",{instanceId:e.instance.id,files:j});rr(`Downloaded ${G.length} mod file${G.length===1?"":"s"}.`,"success"),e.ondownloaded?.(G)}catch(G){g(d,String(G),!0),rr(`Download failed: ${G}`,"error")}finally{g(u,!1)}}}Ci(()=>{const j=Ra(()=>l(u)?void 0:e.onclose?.());return S("preview_mod_download_queue",{instanceId:e.instance.id,projects:t(),gameVersion:e.instance.minecraft_version,loader:l(r)}).then(G=>{g(a,G,!0),g(c,Object.fromEntries(G.map(ee=>[ee.project_id,!ee.installed])),!0),g(o,!1)}).catch(G=>{g(s,String(G),!0),g(o,!1)}),()=>Ca(j)});var p=fv(),E=D(p),b=D(E),T=M(D(b),2),A=M(b,2),L=D(A);{var R=j=>{var G=sv();k(j,G)},H=j=>{var G=ov(),ee=D(G),Ee=K(ee,!0);ge(()=>J(Ee,l(s))),k(j,G)},x=j=>{var G=uv(),ee=M(D(G));wt(ee,21,()=>l(a),Ee=>Ee.project_id,(Ee,we)=>{var Ue=lv(),Fe=D(Ue),We=D(Fe),Ve=M(Fe),et=K(Ve,!0),mt=M(Ve),Ye=K(mt,!0),te=M(mt),ft=K(te,!0),je=M(te),de=K(je,!0),Re=M(je),Xe=K(Re,!0);ge((ye,Oe)=>{dt(Ue,1,`border-b border-(--border-1)/50 ${l(we).installed?"bg-(--bg-3)/60":l(we).required_by.length?"bg-(--brand-tint)/40":""}`),Ja(We,l(c)[l(we).project_id]??!1),dt(Ve,1,`px-3 py-2 align-top font-medium ${l(we).installed?"opacity-60":"text-(--fg-1)"}`),J(et,l(we).title),J(Ye,l(we).version),ze(te,"title",l(we).filename),J(ft,l(we).filename),dt(je,1,`px-3 py-2 align-top text-[11px] ${l(we).required_by.length?"text-(--accent-1)":"text-(--fg-2)"}`),J(de,ye),J(Xe,Oe)},[()=>f(l(we)),()=>h(l(we).size)]),ie("change",We,()=>y(l(we))),k(Ee,Ue)},Ee=>{var we=cv();k(Ee,we)}),k(j,G)};Ie(L,j=>{l(o)?j(R):l(s)?j(H,1):l(a)&&j(x,2)})}var w=M(A,2),Z=D(w),B=D(Z);{var O=j=>{var G=dv(),ee=K(G,!0);ge(()=>J(ee,l(d))),k(j,G)},F=j=>{var G=Gi();ge((ee,Ee)=>J(G,`Downloading ${ee??""} file${Ee??""}…`),[()=>v(),()=>v()===1?"":"s"]),k(j,G)},V=j=>{var G=Gi();ge(ee=>J(G,`${ee??""} of ${l(a).length??""} rows will download`),[()=>v()]),k(j,G)};Ie(B,j=>{l(d)?j(O):l(u)?j(F,1):l(a)&&j(V,2)})}var he=M(Z,2),X=D(he),le=M(X,2),Me=K(le,!0);ge(j=>{T.disabled=l(u),ze(Z,"title",l(d)),X.disabled=l(u),le.disabled=j,J(Me,l(u)?"Downloading…":"Confirm & Download")},[()=>l(u)||!l(a)||v()===0]),ie("click",p,j=>{j.target===j.currentTarget&&!l(u)&&e.onclose?.()}),ie("click",T,()=>e.onclose?.()),ie("click",X,()=>e.onclose?.()),ie("click",le,m),k(i,p),Yt()}cn(["click","change"]);var pv=W('<label class="flex cursor-pointer items-center gap-2 text-(--step-body) capitalize"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent-1)"/> <span> </span></label>'),Vc=W("<option> </option>"),mv=W('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div>'),Wc=W('<div class="p-6 text-center text-(--step-body) text-(--fg-2)"> </div>'),vv=W('<span class="shrink-0 rounded bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-green-500">installed</span>'),gv=W('<span class="shrink-0 rounded bg-(--accent-1)/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-1)">queued</span>'),_v=W('<button><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <span class="min-w-0 flex-1"><span class="flex items-center gap-2"><span class="truncate text-(--step-card) font-medium text-(--fg-1)"> </span> <!> <!></span> <span class="block truncate text-(--step-meta) text-(--fg-2)"> </span> <span class="block truncate text-[10px] text-(--fg-2)"> </span></span></button>'),xv=W('<div class="flex flex-col gap-1.5"></div>'),bv=W('<div class="flex h-full flex-col items-center justify-center p-6 text-center text-(--step-body) text-(--fg-2)"><!> <p class="mt-3">Select a mod to inspect it.</p></div>'),yv=W('<div class="mt-1 flex h-8 items-center rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) text-(--fg-2)">Loading versions…</div>'),Sv=W('<select id="mods-version" class="mt-1 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"><option> </option><!></select>'),Mv=W('<div class="mt-1 h-8 rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) leading-8 text-(--fg-2)">Latest compatible</div>'),Ev=W('<p class="mt-2 text-[11px] text-rose-400"> </p>'),wv=W('<div class="mt-2 text-(--step-meta) whitespace-pre-wrap break-words text-(--fg-2)"> </div>'),Tv=W('<div class="flex items-start gap-3 border-b border-(--border-1) p-3"><img alt="" draggable="false" class="h-12 w-12 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="truncate text-(--step-card) font-semibold text-(--fg-1)"> </div> <div class="truncate text-[10px] text-(--fg-2)"> </div> <div class="text-[10px] text-(--fg-2)"> </div></div></div> <div class="border-b border-(--border-1) p-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-version">Version</label> <!></div> <div class="min-h-0 flex-1 p-3"><div class="text-(--step-body) text-(--fg-2)"> </div> <!> <!></div>',1),Av=W('<span class="ml-1 text-[10px]"> </span>'),Rv=W('<div role="presentation" class="fixed inset-0 z-50 flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[720px] w-[1180px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Browse &amp; Download Mods</h3> <p class="truncate text-(--step-meta) text-(--fg-2)"> <!></p></div> <button class="text-(--fg-2) hover:text-(--fg-1)">✕</button></div> <div class="flex min-h-0 flex-1"><aside class="flex w-[200px] shrink-0 flex-col gap-4 overflow-y-auto border-r border-(--border-1) p-3"><section><h4 class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)">Categories</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border-1) pt-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-sort">Sort</label> <select id="mods-sort" class="mt-1.5 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"></select></section></aside> <section class="flex min-w-0 flex-1 flex-col"><div class="border-b border-(--border-1) p-3"><input class="h-9 w-full rounded border border-(--border-1) bg-(--bg-3) px-3 text-(--step-card) text-(--fg-1) outline-none placeholder:text-(--fg-2) focus:border-(--accent-1)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></section> <aside class="flex w-[330px] shrink-0 flex-col overflow-y-auto border-l border-(--border-1)"><!></aside></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="text-(--step-body) text-(--fg-2)"> <!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Clear</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Stages every queued mod plus its required dependencies for confirmation"><!> Review and Confirm…</button></div></div></div></div> <!>',1);function Cv(i,e){qt(e,!0);const t=["fabric","quilt","forge","neoforge","legacy-fabric"],n=st(()=>{const z=e.instance.loader_type.toLowerCase();return z==="legacy fabric"||z==="legacyfabric"?"legacy-fabric":z==="cleanroom"?"forge":t.includes(z)?z:""}),r=["optimization","utility","library","worldgen","accessibility","technology","adventure","decoration","mobs","equipment","food","storage","transportation","game-mechanics"],a=[{id:"relevance",label:"Relevance"},{id:"downloads",label:"Most downloaded"},{id:"updated",label:"Recently updated"},{id:"newest",label:"Newest"}];let o=ae(""),s=ae("relevance"),c=ae(Ut(new Set)),u=ae(null),d=ae(!1),h=ae(""),f=0,v=ae(Ut([]));function y(z){const ne=z.title.toLowerCase().replace(/[^a-z0-9]+/g,"-");return l(v).some(Ae=>Ae.includes(ne))}let S=ae(null),m=ae(null),p=ae(!1),E=ae(""),b=0,T=ae(""),A=ae(Ut([])),L=ae(!1);function R(z){const ne=new Set(l(c));ne.has(z)?ne.delete(z):ne.add(z),g(c,ne,!0)}function H(z){return z>=1e6?`${(z/1e6).toFixed(1)}M`:z>=1e3?`${(z/1e3).toFixed(0)}K`:String(z)}function x(z){return z.icon_url||"/logo.png"}function w(z,ne){const Ae=window.__TAURI__?.core;return Ae?Ae.invoke(z,ne):Promise.reject(new Error("Tauri backend unavailable in this preview."))}$t(()=>{const z=l(o).trim(),ne=[...l(c)],Ae=l(s),Be=++f,N=setTimeout(()=>{g(d,!0),g(h,""),w("search_modrinth_mods",{query:z,gameVersion:e.instance.minecraft_version,loader:l(n),categories:ne,index:Ae}).then(Pe=>{Be===f&&(g(u,Pe,!0),g(d,!1))}).catch(Pe=>{Be===f&&(g(h,String(Pe),!0),g(d,!1))})},350);return()=>clearTimeout(N)});async function Z(z){if(l(S)?.project_id===z.project_id)return;g(S,z,!0),g(m,null),g(E,""),g(T,"");const ne=++b;g(p,!0);try{const Ae=await w("get_modrinth_project_details",{projectId:z.project_id,gameVersion:e.instance.minecraft_version,loader:l(n)});ne===b&&g(m,Ae,!0)}catch(Ae){ne===b&&g(E,String(Ae),!0)}finally{ne===b&&g(p,!1)}}function B(z){return l(A).some(ne=>ne.project_id===z)}function O(){l(A).length&&g(L,!0)}Ci(()=>{const z=Ra(()=>e.onclose?.());return w("list_instance_mods",{instanceId:e.instance.id}).then(ne=>g(v,ne.map(Ae=>Ae.filename.toLowerCase()),!0)).catch(()=>{}),()=>Ca(z)});var F=Rv(),V=St(F),he=D(V),X=D(he),le=D(X),Me=M(D(le),2),j=D(Me),G=M(j);{var ee=z=>{var ne=Gi();ge(Ae=>J(ne,`· ${Ae??""}`),[()=>l(n)[0].toUpperCase()+l(n).slice(1)]),k(z,ne)};Ie(G,z=>{l(n)&&z(ee)})}var Ee=M(le,2),we=M(X,2),Ue=D(we),Fe=D(Ue),We=M(D(Fe),2);wt(We,20,()=>r,z=>z,(z,ne)=>{var Ae=pv(),Be=D(Ae),N=M(Be,2),Pe=K(N,!0);ge((se,Se)=>{Ja(Be,se),J(Pe,Se)},[()=>l(c).has(ne),()=>ne.replace("-"," ")]),ie("change",Be,()=>R(ne)),k(z,Ae)});var Ve=M(Fe,2),et=M(D(Ve),2);wt(et,21,()=>a,z=>z.id,(z,ne)=>{var Ae=Vc(),Be=K(Ae,!0),N={};ge(()=>{J(Be,l(ne).label),N!==(N=l(ne).id)&&(Ae.value=(Ae.__value=N)??"")}),k(z,Ae)}),ga(et);var mt=M(Ue,2),Ye=D(mt),te=D(Ye),ft=M(Ye,2),je=D(ft);{var de=z=>{var ne=mv(),Ae=K(ne,!0);ge(()=>J(Ae,l(h))),k(z,ne)};Ie(je,z=>{l(h)&&z(de)})}var Re=M(je,2);{var Xe=z=>{var ne=Wc(),Ae=K(ne,!0);ge(()=>J(Ae,l(d)?"Searching Modrinth…":"Type to search.")),k(z,ne)},ye=z=>{var ne=Wc(),Ae=K(ne);ge(Be=>J(Ae,`No mods for MC ${e.instance.minecraft_version??""}${l(n)?` + ${l(n)}`:""} match
              “${Be??""}”.`),[()=>l(o).trim()]),k(z,ne)},Oe=z=>{var ne=xv();wt(ne,21,()=>l(u),Ae=>Ae.project_id,(Ae,Be)=>{var N=_v(),Pe=D(N),se=M(Pe,2),Se=D(se),ve=D(Se),Le=K(ve,!0),ke=M(ve,2);{var Ze=Rt=>{var Jt=vv();k(Rt,Jt)},ht=st(()=>y(l(Be)));Ie(ke,Rt=>{l(ht)&&Rt(Ze)})}var nt=M(ke,2);{var _t=Rt=>{var Jt=gv();k(Rt,Jt)},pt=st(()=>B(l(Be).project_id));Ie(nt,Rt=>{l(pt)&&Rt(_t)})}var xt=M(Se,2),At=K(xt,!0),en=M(xt,2),Ht=K(en);ge((Rt,Jt)=>{dt(N,1,`flex items-center gap-3 rounded border px-3 py-2 text-left ${l(S)?.project_id===l(Be).project_id?"border-(--accent-1) bg-(--brand-tint)":"border-(--border-1) bg-(--bg-3) hover:border-(--accent-1)/60"}`),ze(Pe,"src",Rt),ze(ve,"title",l(Be).title),J(Le,l(Be).title),ze(xt,"title",l(Be).description),J(At,l(Be).description),J(Ht,`by ${(l(Be).author||"unknown")??""} · ${Jt??""} downloads`)},[()=>x(l(Be)),()=>H(l(Be).downloads)]),ie("click",N,()=>Z(l(Be))),jn("error",Pe,Rt=>{Rt.currentTarget.dataset.f||(Rt.currentTarget.dataset.f="1",Rt.currentTarget.src="/logo.png")}),k(Ae,N)}),k(z,ne)};Ie(Re,z=>{l(u)?l(u).length===0&&!l(d)?z(ye,1):z(Oe,-1):z(Xe)})}var pe=M(mt,2),Ge=D(pe);{var He=z=>{var ne=bv(),Ae=D(ne);zt(Ae,{name:"modrinth",size:28}),k(z,ne)},P=z=>{var ne=Tv(),Ae=St(ne),Be=D(Ae),N=M(Be,2),Pe=D(N),se=K(Pe,!0),Se=M(Pe,2),ve=K(Se),Le=M(Se,2),ke=K(Le),Ze=M(Ae,2),ht=M(D(Ze),2);{var nt=Nt=>{var Kt=yv();k(Nt,Kt)},_t=Nt=>{var Kt=Sv(),yn=D(Kt),I=K(yn);yn.value=yn.__value="";var ue=M(yn);wt(ue,17,()=>l(m).versions,_e=>_e.id,(_e,ce)=>{var xe=Vc(),Je=K(xe),rt={};ge(()=>{J(Je,`${l(ce).version??""}${l(ce).version_type&&l(ce).version_type!=="release"?` (${l(ce).version_type})`:""}`),rt!==(rt=l(ce).id)&&(xe.value=(xe.__value=rt)??"")}),k(_e,xe)}),ga(Kt),ge(()=>J(I,`Latest (${l(m).versions[0]?.version??""})`)),_a(Kt,()=>l(T),_e=>g(T,_e)),k(Nt,Kt)},pt=Nt=>{var Kt=Mv();k(Nt,Kt)};Ie(ht,Nt=>{l(p)?Nt(nt):l(m)?.versions?.length?Nt(_t,1):Nt(pt,-1)})}var xt=M(Ze,2),At=D(xt),en=K(At,!0),Ht=M(At,2);{var Rt=Nt=>{var Kt=Ev(),yn=K(Kt,!0);ge(()=>J(yn,l(E))),k(Nt,Kt)};Ie(Ht,Nt=>{l(E)&&Nt(Rt)})}var Jt=M(Ht,2);{var vi=Nt=>{var Kt=wv(),yn=K(Kt,!0);ge(()=>J(yn,l(m).body)),k(Nt,Kt)};Ie(Jt,Nt=>{l(m)?.body&&Nt(vi)})}ge((Nt,Kt)=>{ze(Be,"src",Nt),ze(Pe,"title",l(S).title),J(se,l(S).title),J(ve,`by ${(l(S).author||"unknown")??""}`),J(ke,`${Kt??""} downloads`),J(en,l(S).description)},[()=>x(l(S)),()=>H(l(S).downloads)]),jn("error",Be,Nt=>{Nt.currentTarget.dataset.f||(Nt.currentTarget.dataset.f="1",Nt.currentTarget.src="/logo.png")}),k(z,ne)};Ie(Ge,z=>{l(S)?z(P,-1):z(He)})}var _=M(we,2),U=D(_),q=D(U),Q=M(q);{var be=z=>{var ne=Av(),Ae=K(ne);ge(Be=>J(Ae,`(${Be??""})`),[()=>l(A).map(Be=>Be.title).join(", ")]),k(z,ne)};Ie(Q,z=>{l(A).length&&z(be)})}var Ne=M(U,2),Te=D(Ne),Y=M(Te,2),C=D(Y);zt(C,{name:"download",size:13});var oe=M(V,2);{var me=z=>{hv(z,{get instance(){return e.instance},get items(){return l(A)},onclose:()=>g(L,!1),ondownloaded:ne=>{g(L,!1),g(A,[],!0),e.oninstalled?.(ne)}})};Ie(oe,z=>{l(L)&&z(me)})}ge(()=>{J(j,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `),J(q,`${l(A).length===0?"No mods selected":`${l(A).length} mod${l(A).length===1?"":"s"} selected`} `),Te.disabled=!l(A).length,Y.disabled=!l(A).length}),ie("click",V,z=>{z.target===z.currentTarget&&e.onclose?.()}),ie("click",Ee,()=>e.onclose?.()),_a(et,()=>l(s),z=>g(s,z)),Wt(te,()=>l(o),z=>g(o,z)),ie("click",Te,()=>g(A,[],!0)),ie("click",Y,O),k(i,F),Yt()}cn(["click","change"]);var Pv=W('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Lv=W('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),Dv=W('<div class="mt-4 rounded border border-amber-500/30 bg-amber-500/10 p-3" role="status" aria-live="polite"><p class="text-[12px] text-amber-400"><strong> </strong> </p> <button class="mt-2 rounded border border-amber-500/40 px-3 py-1.5 text-[12px] font-medium text-amber-400 hover:bg-amber-500/20 disabled:opacity-40"> </button></div>'),Iv=W('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),jc=W('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),Io=W('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Uv=W(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <!> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),Nv=W('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),Ov=W('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),kv=W('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),Fv=W('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),Bv=W('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),zv=W('<button type="button" class="rounded px-2.5 py-1.5 text-[11px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)">Reset</button>'),Gv=W('<p role="alert" class="mt-2 text-[11px] text-red-400"> </p>'),Hv=W(`<div role="alert" class="mt-4 rounded border border-red-500/40 bg-red-500/10 p-3 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
              it works — it is prone to crashes and only a limited subset of Forge mods support it.</p></div>`),Vv=W('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div></div> <div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium">Instance icon</div> <p class="mt-1 text-[11px] text-(--text-muted)">Pick a bundled launcher icon, a Twemoji, or a custom image.</p> <div class="mt-3 flex items-center gap-3"><span class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded border border-(--border) bg-(--accent)/10"><img alt="" draggable="false" class="h-full w-full object-cover"/></span> <button type="button" class="rounded border border-(--accent) bg-(--accent)/15 px-3 py-1.5 text-[12px] font-medium text-(--accent) hover:bg-(--accent)/25">Change icon…</button> <!></div> <!></div> <!> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, loader switching and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p>',1),Wv=W('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!> <!></div>');function jv(i,e){qt(e,!0);let t=$e(e,"instance",7),n=$e(e,"storage",3,null),r=$e(e,"blindMode",3,!1),a=$e(e,"deafMode",3,!1);const o=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let s=ae("mods"),c=ae(Ut([])),u=ae(!1),d=ae(""),h=ae(""),f=ae(!1),v=ae(!1),y=ae(Ut(t().icon_key??"")),S=ae("");function m(){const _=mo(l(y));return _||(t().icon_path?H(t().icon_path):"/logo.png")}async function p(_){g(S,"");try{await window.__TAURI__.core.invoke("set_instance_icon_key",{instanceId:t().id,iconKey:_}),g(y,_,!0),t().icon_key=_,t().icon_path=null}catch(U){g(S,String(U),!0)}}async function E(){const _=window.__TAURI__?.dialog?.open;if(!_)throw new Error("Image picker unavailable in this build.");const U=await _({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});if(!U)return null;const q=await window.__TAURI__.core.invoke("set_instance_icon",{instanceId:t().id,imagePath:String(U)});return g(y,""),t().icon_key=null,t().icon_path=q,q}let b=ae(Ut([])),T=ae(Ut([])),A=ae(!1),L=ae("");function R(..._){return[n()?n().instances_dir.replace(/\\/g,"/"):"",t().id,"minecraft",..._].filter(Boolean).join("/")}function H(_){const U=window.__TAURI__?.core?.convertFileSrc;return U?U(_):_}function x(_){return _>=1024*1024?`${(_/1024/1024).toFixed(1)} MB`:_>=1024?`${(_/1024).toFixed(1)} KB`:`${_} B`}function w(_){return _?new Date(_*1e3).toLocaleString():""}function Z(){const _=l(h).trim().toLowerCase();return _?l(c).filter(U=>U.display_name.toLowerCase().includes(_)||U.filename.toLowerCase().includes(_)):l(c)}async function B(){g(u,!0);try{g(c,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:t().id}),!0),g(d,"")}catch(_){g(d,String(_),!0)}finally{g(u,!1)}}const O={"minecraft-access":"Minecraft Access",echosight:"EchoSight"},F=st(()=>[...r()&&!l(c).some(_=>_.filename.toLowerCase().includes("minecraft-access"))?["minecraft-access"]:[],...a()&&!l(c).some(_=>_.filename.toLowerCase().includes("echosight"))?["echosight"]:[]]);let V=ae(!1);async function he(){g(V,!0);try{for(const _ of l(F))await window.__TAURI__.core.invoke("install_mod_with_deps",{instanceId:t().id,projectId:_,gameVersion:t().minecraft_version,loader:t().loader_type.toLowerCase()});g(d,"Accessibility mods installed.")}catch(_){g(d,String(_),!0)}finally{g(V,!1)}await B()}async function X(_){g(u,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:t().id,filename:_.filename,enable:!_.is_enabled}),l(d)&&g(d,"")}catch(U){g(d,String(U),!0)}finally{g(u,!1)}await B()}async function le(_){g(u,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:t().id,filename:_.filename}),g(d,"")}catch(U){g(d,String(U),!0)}finally{g(u,!1)}await B()}async function Me(){const _=window.__TAURI__?.dialog?.open;if(!_){g(d,"File picker unavailable in this build.");return}let U;try{U=await _({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(Q){g(d,String(Q),!0);return}const q=U?[].concat(U):[];if(q.length){g(u,!0);try{for(const Q of q)await window.__TAURI__.core.invoke("import_mod",{instanceId:t().id,jarPath:Q});g(d,"")}catch(Q){g(d,String(Q),!0)}finally{g(u,!1)}await B()}}async function j(_){g(A,!0);try{const U=await window.__TAURI__.core.invoke(_,{instanceId:t().id});g(_==="list_screenshots"?b:T,U,!0),g(L,"")}catch(U){g(L,String(U),!0)}finally{g(A,!1)}}function G(_){window.__TAURI__.core.invoke("open_path",{path:_}).catch(U=>g(L,String(U),!0))}function ee(_){G(R("screenshots",_))}Ci(()=>{B(),j("list_screenshots"),j("list_logs")});var Ee=Wv(),we=D(Ee),Ue=D(we),Fe=M(Ue,2),We=D(Fe),Ve=K(We,!0),et=M(We,2),mt=K(et),Ye=M(Fe,2);wt(Ye,21,()=>o,_=>_.id,(_,U)=>{var q=Pv(),Q=D(q),be=D(Q);Mi(be,{get emoji(){return l(U).icon},size:15});var Ne=M(Q,2),Te=K(Ne,!0);ge(()=>{dt(q,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${l(s)===l(U).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),ze(q,"aria-current",l(s)===l(U).id?"true":void 0),J(Te,l(U).label)}),ie("click",q,()=>g(s,l(U).id,!0)),k(_,q)});var te=M(we,2),ft=D(te),je=D(ft);{var de=_=>{var U=Lv(),q=M(St(U),4),Q=D(q),be=K(Q),Ne=M(Q,2),Te=K(Ne),Y=M(Ne,2),C=K(Y);ge(oe=>{J(be,`Minecraft ${t().minecraft_version??""}`),J(Te,`Loader: ${t().loader_type??""}`),J(C,`Last played: ${oe??""}`)},[()=>t().last_played?new Date(t().last_played*1e3).toLocaleString():"never"]),k(_,U)},Re=_=>{var U=Uv(),q=M(St(U),4);{var Q=Se=>{var ve=Dv(),Le=D(ve),ke=D(Le),Ze=K(ke,!0),ht=M(ke),nt=M(Le,2),_t=K(nt,!0);ge(pt=>{J(Ze,pt),J(ht,` ${l(F).length>1?"are":"is"} not installed yet — recommended for your
              accessibility profile. Required dependencies (e.g. Fabric API) install automatically.`),nt.disabled=l(u)||l(V),J(_t,l(V)?"Installing…":"Install Recommended Accessibility Mods")},[()=>l(F).map(pt=>O[pt]??pt).join(" and ")]),ie("click",nt,he),k(Se,ve)};Ie(q,Se=>{(r()||a())&&(t().loader_type==="Fabric"||t().loader_type==="Quilt")&&l(F).length&&Se(Q)})}var be=M(q,2),Ne=D(be),Te=K(Ne),Y=M(Ne,2),C=M(be,2),oe=M(C,2),me=M(oe,2),z=D(me);wt(z,21,Z,Se=>Se.filename,(Se,ve)=>{var Le=Iv(),ke=D(Le),Ze=D(ke);let ht;var nt=K(Ze,!0),_t=M(Ze,2),pt=K(_t),xt=M(ke),At=K(xt),en=M(xt),Ht=K(en);ge(Rt=>{ht=dt(Ze,1,"truncate",null,ht,{"opacity-50":!l(ve).is_enabled}),J(nt,l(ve).display_name),J(pt,`${l(ve).filename??""} · ${Rt??""}`),dt(At,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${l(ve).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),ze(At,"title",l(ve).is_enabled?"Disable":"Enable"),At.disabled=l(u),ze(Ht,"title",`Delete ${l(ve).display_name??""}`),Ht.disabled=l(u)},[()=>x(l(ve).file_size)]),ie("click",At,()=>X(l(ve))),ie("click",Ht,()=>le(l(ve))),k(Se,Le)},Se=>{var ve=jc(),Le=D(ve),ke=D(Le);{var Ze=nt=>{var _t=Gi("Loading mods…");k(nt,_t)},ht=nt=>{var _t=Gi("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");k(nt,_t)};Ie(ke,nt=>{l(u)?nt(Ze):nt(ht,-1)})}k(Se,ve)});var ne=M(me,2);{var Ae=Se=>{var ve=Io(),Le=K(ve,!0);ge(()=>J(Le,l(d))),k(Se,ve)};Ie(ne,Se=>{l(d)&&Se(Ae)})}var Be=M(ne,2),N=D(Be),Pe=M(N,2),se=D(Pe);Mi(se,{emoji:"📂"}),ge(()=>{J(Te,`Installed (${l(c).length??""})`),Y.disabled=l(u),N.disabled=l(u),Pe.disabled=!n(),ze(Pe,"title",n()?"Opens the instance mods folder":"Storage unknown")}),ie("click",Y,B),Wt(C,()=>l(h),Se=>g(h,Se)),ie("click",oe,()=>g(f,!0)),ie("click",N,Me),ie("click",Pe,()=>G(R("mods"))),k(_,U)},Xe=_=>{var U=kv(),q=M(St(U),4);wt(q,21,()=>l(b),Y=>Y.name,(Y,C)=>{var oe=Nv(),me=D(oe),z=M(me,2),ne=K(z,!0);ge((Ae,Be,N)=>{ze(oe,"title",`${l(C).name??""} · ${Ae??""} · ${Be??""}`),ze(me,"src",N),ze(me,"alt",l(C).name),ze(z,"title",l(C).name),J(ne,l(C).name)},[()=>x(l(C).size),()=>w(l(C).modified),()=>H(R("screenshots",l(C).name))]),ie("click",oe,()=>ee(l(C).name)),ie("keydown",oe,Ae=>{(Ae.key==="Enter"||Ae.key===" ")&&(Ae.preventDefault(),ee(l(C).name))}),k(Y,oe)},Y=>{var C=Ov(),oe=D(C);{var me=ne=>{var Ae=Gi("Loading screenshots…");k(ne,Ae)},z=ne=>{var Ae=Gi("No screenshots yet — press F2 in game to capture one.");k(ne,Ae)};Ie(oe,ne=>{l(A)?ne(me):ne(z,-1)})}k(Y,C)});var Q=M(q,2);{var be=Y=>{var C=Io(),oe=K(C,!0);ge(()=>J(oe,l(L))),k(Y,C)};Ie(Q,Y=>{l(L)&&Y(be)})}var Ne=M(Q,2),Te=D(Ne);Mi(Te,{emoji:"📂"}),ie("click",Ne,()=>G(R("screenshots"))),k(_,U)},ye=_=>{var U=Bv(),q=M(St(U),4),Q=D(q);wt(Q,21,()=>l(T),me=>me.name,(me,z)=>{var ne=Fv(),Ae=D(ne),Be=D(Ae),N=K(Be,!0),Pe=M(Be,2),se=K(Pe),Se=M(Ae),ve=K(Se);ge((Le,ke)=>{ze(Be,"title",l(z).name),J(N,l(z).name),J(se,`${Le??""} · ${ke??""}`)},[()=>x(l(z).size),()=>w(l(z).modified)]),ie("click",ve,()=>G(R("logs",l(z).name))),k(me,ne)},me=>{var z=jc(),ne=D(z),Ae=D(ne);{var Be=Pe=>{var se=Gi("Loading logs…");k(Pe,se)},N=Pe=>{var se=Gi("No log files yet — logs appear after the first launch.");k(Pe,se)};Ie(Ae,Pe=>{l(A)?Pe(Be):Pe(N,-1)})}k(me,z)});var be=M(q,2);{var Ne=me=>{var z=Io(),ne=K(z,!0);ge(()=>J(ne,l(L))),k(me,z)};Ie(be,me=>{l(L)&&me(Ne)})}var Te=M(be,2),Y=D(Te),C=M(Y,2),oe=D(C);Mi(oe,{emoji:"📂"}),ie("click",Y,()=>e.onopenconsole?.()),ie("click",C,()=>G(R("logs"))),k(_,U)},Oe=_=>{var U=Vv(),q=M(St(U),4),Q=D(q),be=K(Q,!0),Ne=M(Q,2),Te=D(Ne),Y=K(Te),C=M(Te,2),oe=K(C),me=M(q,2),z=M(D(me),4),ne=D(z),Ae=K(ne),Be=M(ne,2),N=M(Be,2);{var Pe=ke=>{var Ze=zv();ie("click",Ze,()=>p("")),k(ke,Ze)};Ie(N,ke=>{l(y)&&ke(Pe)})}var se=M(z,2);{var Se=ke=>{var Ze=Gv(),ht=K(Ze,!0);ge(()=>J(ht,l(S))),k(ke,Ze)};Ie(se,ke=>{l(S)&&ke(Se)})}var ve=M(me,2);{var Le=ke=>{var Ze=Hv();k(ke,Ze)};Ie(ve,ke=>{t().loader_type==="Cleanroom"&&ke(Le)})}ge((ke,Ze,ht,nt)=>{J(be,t().name),ze(Ne,"title",ke),J(Y,`Game folder: ${Ze??""}`),J(oe,`Mods folder: ${ht??""}`),ze(Ae,"src",nt)},[()=>R(),()=>R(),()=>R("mods"),()=>m()]),ie("click",Be,()=>g(v,!0)),k(_,U)};Ie(je,_=>{l(s)==="components"?_(de):l(s)==="mods"?_(Re,1):l(s)==="screenshots"?_(Xe,2):l(s)==="logs"?_(ye,3):_(Oe,-1)})}var pe=M(te,2);{var Ge=_=>{{let U=st(()=>l(y)?"":m());Tf(_,{get currentKey(){return l(y)},get currentPath(){return l(U)},onpick:q=>{p(q),g(v,!1)},oncustom:E,onclose:()=>g(v,!1)})}};Ie(pe,_=>{l(v)&&_(Ge)})}var He=M(pe,2);{var P=_=>{Cv(_,{get instance(){return t()},onclose:()=>g(f,!1),oninstalled:()=>B()})};Ie(He,_=>{l(f)&&_(P)})}ge(()=>{ze(We,"title",t().name),J(Ve,t().name),J(mt,`${t().minecraft_version??""} · ${t().loader_type??""}`)}),ie("click",Ue,function(..._){e.onback?.apply(this,_)}),k(i,Ee),Yt()}cn(["click","keydown"]);var Xv=W('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),qv=W('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),Yv=W('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),Kv=W('<p class="mt-3 text-[12px] text-red-400"> </p>'),Zv=W(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),Jv=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function Qv(i,e){qt(e,!0);let t=ae(null),n=ae(""),r=ae(""),a=ae(!1),o=ae("");function s(E){return E>=1024*1024?`${(E/1024/1024).toFixed(1)} MB`:E>=1024?`${(E/1024).toFixed(0)} KB`:`${E} B`}function c(){return!l(t)||!l(t).loader?"Vanilla":l(t).loader[0].toUpperCase()+l(t).loader.slice(1)+(l(t).loader_version?` ${l(t).loader_version}`:" (latest stable)")}Ci(async()=>{const E=Ra(()=>e.onclose?.());try{g(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),g(r,l(t).name,!0)}catch(b){g(n,String(b),!0)}return()=>Ca(E)});async function u(){if(!l(a)){g(a,!0),g(o,"");try{const E=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:l(r).trim()});e.oninstalled?.(E)}catch(E){g(o,String(E),!0)}finally{g(a,!1)}}}var d=Jv(),h=D(d),f=D(h),v=M(D(f),2),y=M(f,2);{var S=E=>{var b=Xv(),T=D(b),A=K(T,!0),L=M(T,2),R=K(L,!0);ge(()=>{J(A,l(n)),ze(L,"title",e.path),J(R,e.path)}),k(E,b)},m=E=>{var b=qv();k(E,b)},p=E=>{var b=Zv(),T=St(b),A=D(T),L=D(A),R=K(L,!0),H=M(L,2);{var x=Fe=>{var We=Yv(),Ve=K(We,!0);ge(()=>J(Ve,l(t).summary)),k(Fe,We)};Ie(H,Fe=>{l(t).summary&&Fe(x)})}var w=M(H,2),Z=D(w),B=K(Z),O=M(Z,2),F=K(O,!0),V=M(O,2),he=K(V),X=M(V,2),le=K(X,!0),Me=M(A,4),j=M(Me,2);{var G=Fe=>{var We=Kv(),Ve=K(We,!0);ge(()=>J(Ve,l(o))),k(Fe,We)};Ie(j,Fe=>{l(o)&&Fe(G)})}var ee=M(T,2),Ee=D(ee),we=M(Ee,2),Ue=K(we,!0);ge((Fe,We,Ve)=>{ze(L,"title",l(t).name),J(R,l(t).name),J(B,`MC ${(l(t).game_version||"?")??""}`),J(F,Fe),ze(V,"title",`${l(t).download_count??""} downloaded, ${l(t).override_count??""} overrides extracted`),J(he,`${l(t).file_count??""} files`),J(le,We),we.disabled=Ve,J(Ue,l(a)?"Installing…":"Install Modpack")},[()=>c(),()=>s(l(t).archive_size),()=>l(a)||!l(r).trim()]),Wt(Me,()=>l(r),Fe=>g(r,Fe)),ie("click",Ee,()=>e.onclose?.()),ie("click",we,u),k(E,b)};Ie(y,E=>{l(n)?E(S):l(t)?E(p,-1):E(m,1)})}ie("click",d,E=>{E.target===E.currentTarget&&e.onclose?.()}),ie("click",v,()=>e.onclose?.()),k(i,d),Yt()}cn(["click"]);var $v=W('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),eg=W('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),Xc=W("<option> </option>"),tg=W('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),ng=W('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),ig=W('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),rg=W('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),ag=W('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),sg=W('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),og=W('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),lg=W('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),cg=W('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),ug=W('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),dg=W('<p class="mt-1.5 font-medium">Cleanroom only runs Minecraft 1.12.2 — select that version to continue.</p>'),fg=W(`<div role="alert" class="mt-2 rounded border border-red-500/40 bg-red-500/10 p-2.5 text-[11px] leading-relaxed text-red-300"><p class="font-semibold text-red-400">Warning (Advanced Users)</p> <p class="mt-1">CleanroomMC runs 1.12.2 on modern Java (21+). Do NOT use it unless you understand how
                it works — it is prone to crashes and only a limited subset of Forge mods support it.</p> <!></div>`),hg=W('<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400"> <strong>Fabric</strong>.</div>'),pg=W(`<p role="status" class="mt-2 rounded border border-amber-500/20 bg-amber-500/5 p-2 text-[11px] text-amber-400"> <strong>Legacy Fabric</strong> is
              the recommended loader for it.</p>`),mg=W(`<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400">Blind Mode Notice: Vanilla Minecraft's built-in Narrator lacks 3D world navigation and
              block inspection. We strongly recommend selecting <strong>Fabric</strong> or <strong>Quilt</strong> with Minecraft Access.</div>`),vg=W('<label class="flex cursor-pointer items-start gap-2 text-[12px]"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent)"/> <span><span> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span></label>'),gg=W('<section class="mt-3 border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Accessibility mods</h4> <p class="mt-0.5 text-[10px] text-(--text-muted)"> </p> <div class="mt-1.5 flex flex-col gap-1.5"></div></section>'),_g=W('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),xg=W('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),bg=W('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),yg=W('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),Sg=W('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),Mg=W('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),Eg=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!> <!> <!> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div> <!>',1);function wg(i,e){qt(e,!0);let t=$e(e,"groups",19,()=>[]),n=$e(e,"blindMode",3,!1),r=$e(e,"deafMode",3,!1);const a=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],o=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"cleanroom",label:"Cleanroom"},{id:"fabric",label:"Fabric"},{id:"legacyfabric",label:"Legacy Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],s=["","fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],c=["fabric","quilt","forge","neoforge","legacyfabric","cleanroom"],u="1.13.2";function d(fe,Ce){const Ke=Qe=>String(Qe??"").split(".").map(Dt=>parseInt(Dt,10)||0),ot=Ke(fe),tt=Ke(Ce);for(let Qe=0;Qe<Math.max(ot.length,tt.length);Qe+=1){const Dt=ot[Qe]??0,gt=tt[Qe]??0;if(Dt!==gt)return Dt<gt}return!0}const h=st(()=>!!l(b)&&d(l(b),u)),f=st(()=>l(x)==="cleanroom"&&l(b)!=="1.12.2"),v="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let y=ae(null),S=ae(!0),m=ae(""),p=ae(""),E=ae(Ut(new Set(["release"]))),b=ae(""),T=ae(""),A=ae(""),L=ae(""),R=ae(""),H=ae(!1),x=ae(""),w=ae(""),Z=ae(Ut([])),B=ae("idle"),O=0,F=ae(!1),V=ae("");const he=[{id:"minecraft-access",label:"Minecraft Access",hint:"Core: screen reader & 3D spatial navigation"},{id:"sound-physics-remastered",label:"Sound Physics Remastered",hint:"Optional: spatial acoustics & directional echoes"}],X=[{id:"echosight",label:"EchoSight",hint:"Directional sound radar & priority subtitles"},{id:"subtitles-visualizer",label:"Subtitles Visualizer",hint:"In-world directional subtitle markers"},{id:"visible-sound",label:"Visible Sound",hint:"In-world block/entity sound highlights"},{id:"soundsight",label:"SoundSight",hint:"Visual threat ring & enhanced subtitles"}];let le=ae(Ut(new Set(["minecraft-access"])));const Me=st(()=>[...n()?he:[],...r()?X:[]]);$t(()=>{g(le,new Set(n()&&(l(x)==="fabric"||l(x)==="quilt")?["minecraft-access"]:[]),!0)});function j(fe){const Ce=new Set(l(le));Ce.has(fe)?Ce.delete(fe):Ce.add(fe),g(le,Ce,!0)}function G(fe,Ce){const Ke=window.__TAURI__?.core;return Ke?Ke.invoke(fe,Ce):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const ee=st(()=>{const fe=l(y)?.versions??[],Ce=l(p).trim().toLowerCase();return fe.filter(Ke=>l(E).has(Ke.version_type)&&(!Ce||Ke.id.toLowerCase().includes(Ce)))}),Ee=st(()=>!s.includes(l(x))),we=st(()=>c.includes(l(x))),Ue=st(()=>!!l(b)&&!l(Ee)&&!l(f)&&!l(F)&&!(l(we)&&l(B)==="loading"));function Fe(fe){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[fe]??fe}function We(fe){if(!fe)return"—";const Ce=new Date(fe);if(Number.isNaN(Ce.getTime()))return String(fe).slice(0,10);const Ke=ot=>String(ot).padStart(2,"0");return`${Ke(Ce.getDate())}/${Ke(Ce.getMonth()+1)}/${Ce.getFullYear()}`}function Ve(fe){const Ce=new Set(l(E));Ce.has(fe)?Ce.delete(fe):Ce.add(fe),g(E,Ce,!0)}function et(){const fe=mo(l(R));if(fe)return fe;const Ce=window.__TAURI__?.core?.convertFileSrc;return l(L)&&Ce?Ce(l(L)):null}async function mt(){const fe=window.__TAURI__?.dialog?.open;if(!fe){g(V,"Image picker unavailable in this build.");return}try{const Ce=await fe({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});return Ce&&(g(R,""),g(L,String(Ce),!0),g(V,"")),Ce?String(Ce):null}catch(Ce){return g(V,String(Ce),!0),null}}async function Ye(){if(!l(we)||!l(b))return;const fe=++O;g(B,"loading");try{const Ce=await G("fetch_loader_versions",{loader:l(x),gameVersion:l(b)});if(fe!==O)return;g(Z,Ce,!0),g(w,Ce.find(Ke=>Ke.stable)?.version??Ce[0]?.version??"",!0),g(B,Ce.length?"idle":"error",!0)}catch{if(fe!==O)return;g(Z,[],!0),g(w,""),g(B,"error")}}async function te(fe){g(b,fe,!0),!l(x)&&d(fe,u)&&g(x,"legacyfabric"),l(we)&&await Ye()}async function ft(fe){g(x,fe,!0),g(w,""),g(Z,[],!0),g(B,"idle"),l(we)&&await Ye()}async function je(){g(S,!0),g(m,"");try{g(y,await G("fetch_vanilla_versions"),!0)}catch(fe){g(m,String(fe),!0)}finally{g(S,!1)}}async function de(){if(!l(Ue))return;g(F,!0),g(V,"");const fe=l(b),Ce=l(T).trim()||fe;try{const Ke=await G("create_instance",{name:Ce,version:fe,loader:l(x)||null,loaderVersion:l(w).trim()||null});let ot="";if(l(R))try{await G("set_instance_icon_key",{instanceId:Ke.id,iconKey:l(R)})}catch(tt){ot=`Instance created, but the icon could not be applied: ${tt}`}else if(l(L))try{await G("set_instance_icon",{instanceId:Ke.id,imagePath:l(L)})}catch(tt){ot=`Instance created, but the icon could not be applied: ${tt}`}if(l(A).trim())try{await G("set_instance_group",{instanceId:Ke.id,group:l(A).trim()})}catch(tt){ot=ot?`${ot} The group could not be set: ${tt}`:`Instance created, but the group could not be set: ${tt}`}for(const tt of l(le))try{await G("install_mod_with_deps",{instanceId:Ke.id,projectId:tt,gameVersion:fe,loader:l(x)})}catch(Qe){ot=ot?`${ot} ${tt} could not be installed: ${Qe}`:`Instance created, but ${tt} could not be installed: ${Qe}`}e.oncreated?.(Ke,ot)}catch(Ke){g(V,String(Ke),!0)}finally{g(F,!1)}}function Re(){window.__TAURI__?.core?.invoke("open_path",{path:v}).catch(fe=>g(V,String(fe),!0))}Ci(()=>{const fe=Ra(()=>e.onclose?.());return je(),()=>Ca(fe)});var Xe=Eg(),ye=St(Xe),Oe=D(ye),pe=D(Oe),Ge=D(pe),He=D(Ge);{var P=fe=>{var Ce=$v(),Ke=St(Ce);ge(ot=>ze(Ke,"src",ot),[()=>et()]),k(fe,Ce)},_=st(()=>et()),U=fe=>{var Ce=eg();k(fe,Ce)};Ie(He,fe=>{l(_)?fe(P):fe(U,-1)})}var q=M(Ge,2),Q=D(q),be=M(Q,2),Ne=M(D(be),2),Te=D(Ne);Te.value=Te.__value="";var Y=M(Te);wt(Y,16,t,fe=>fe,(fe,Ce)=>{var Ke=Xc(),ot=K(Ke,!0),tt={};ge(()=>{J(ot,Ce),tt!==(tt=Ce)&&(Ke.value=(Ke.__value=tt)??"")}),k(fe,Ke)}),ga(Ne);var C=M(q,2),oe=M(pe,2),me=D(oe),z=D(me),ne=D(z);{var Ae=fe=>{var Ce=tg();k(fe,Ce)},Be=fe=>{var Ce=ng(),Ke=D(Ce),ot=K(Ke,!0),tt=M(Ke,2);ge(()=>J(ot,l(m))),ie("click",tt,je),k(fe,Ce)},N=fe=>{var Ce=sg(),Ke=M(D(Ce));wt(Ke,21,()=>l(ee),ot=>ot.id,(ot,tt)=>{var Qe=rg(),Dt=D(Qe),gt=D(Dt),Qt=K(gt,!0),Fn=M(gt,2);{var mn=Ot=>{var Pi=ig();k(Ot,Pi)};Ie(Fn,Ot=>{l(tt).is_latest_release&&Ot(mn)})}var In=M(Dt),Ft=K(In,!0),gn=M(In),An=K(gn,!0);ge((Ot,Pi)=>{dt(Qe,1,`cursor-pointer border-b border-(--border)/50 ${l(b)===l(tt).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),J(Qt,l(tt).id),J(Ft,Ot),J(An,Pi)},[()=>We(l(tt).release_time),()=>Fe(l(tt).version_type)]),ie("click",Qe,()=>te(l(tt).id)),ie("keydown",Qe,Ot=>{(Ot.key==="Enter"||Ot.key===" ")&&(Ot.preventDefault(),te(l(tt).id))}),k(ot,Qe)},ot=>{var tt=ag();k(ot,tt)}),k(fe,Ce)};Ie(ne,fe=>{l(S)?fe(Ae):l(m)?fe(Be,1):fe(N,-1)})}var Pe=M(z,2),se=D(Pe),Se=M(se,2),ve=K(Se),Le=M(me,2),ke=D(Le),Ze=M(D(ke),2);wt(Ze,21,()=>a,fe=>fe.id,(fe,Ce)=>{var Ke=og(),ot=D(Ke),tt=M(ot,2),Qe=K(tt,!0);ge(Dt=>{Ja(ot,Dt),J(Qe,l(Ce).label)},[()=>l(E).has(l(Ce).id)]),ie("change",ot,()=>Ve(l(Ce).id)),k(fe,Ke)});var ht=M(ke,2),nt=M(D(ht),2);wt(nt,21,()=>o,fe=>fe.id,(fe,Ce)=>{var Ke=lg(),ot=D(Ke),tt=M(ot,2),Qe=K(tt,!0);ge(()=>{as(ot,l(Ce).id),Ja(ot,l(x)===l(Ce).id),J(Qe,l(Ce).label)}),ie("change",ot,()=>ft(l(Ce).id)),k(fe,Ke)});var _t=M(nt,2);{var pt=fe=>{var Ce=cg();k(fe,Ce)},xt=fe=>{var Ce=ug();k(fe,Ce)};Ie(_t,fe=>{l(Ee)?fe(pt):l(x)||fe(xt,1)})}var At=M(_t,2);{var en=fe=>{var Ce=fg(),Ke=M(D(Ce),4);{var ot=tt=>{var Qe=dg();k(tt,Qe)};Ie(Ke,tt=>{l(f)&&tt(ot)})}k(fe,Ce)};Ie(At,fe=>{l(x)==="cleanroom"&&fe(en)})}var Ht=M(At,2);{var Rt=fe=>{var Ce=hg(),Ke=D(Ce);Ke.nodeValue=`Legacy Fabric targets Minecraft 1.13.2 and older; newer versions should use
              regular `,k(fe,Ce)},Jt=fe=>{var Ce=pg(),Ke=D(Ce);ge(()=>J(Ke,`Minecraft ${l(b)??""} predates modern Fabric — `)),k(fe,Ce)};Ie(Ht,fe=>{l(x)==="legacyfabric"&&!l(h)?fe(Rt):l(x)===""&&l(h)&&fe(Jt,1)})}var vi=M(Ht,2);{var Nt=fe=>{var Ce=mg();k(fe,Ce)};Ie(vi,fe=>{n()&&(l(x)===""||l(x)==="horizon")&&fe(Nt)})}var Kt=M(vi,2);{var yn=fe=>{var Ce=gg(),Ke=M(D(Ce),2),ot=K(Ke),tt=M(Ke,2);wt(tt,21,()=>l(Me),Qe=>Qe.id,(Qe,Dt)=>{var gt=vg(),Qt=D(gt),Fn=M(Qt,2),mn=D(Fn),In=K(mn,!0),Ft=M(mn,2),gn=K(Ft,!0);ge(An=>{Ja(Qt,An),J(In,l(Dt).label),J(gn,l(Dt).hint)},[()=>l(le).has(l(Dt).id)]),ie("change",Qt,()=>j(l(Dt).id)),k(Qe,gt)}),ge(()=>J(ot,`Installed right after the instance is created.
                ${l(x)==="quilt"?"Dependencies resolve through QFAPI.":""}`)),k(fe,Ce)};Ie(Kt,fe=>{(l(x)==="fabric"||l(x)==="quilt")&&l(Me).length&&fe(yn)})}var I=M(Kt,2);{var ue=fe=>{var Ce=yg(),Ke=M(St(Ce),2);{var ot=Dt=>{var gt=_g();k(Dt,gt)},tt=Dt=>{var gt=xg(),Qt=St(gt);Wt(Qt,()=>l(w),Fn=>g(w,Fn)),k(Dt,gt)},Qe=Dt=>{var gt=bg(),Qt=D(gt);Qt.value=Qt.__value="";var Fn=M(Qt);wt(Fn,17,()=>l(Z),mn=>mn.version,(mn,In)=>{var Ft=Xc(),gn=K(Ft),An={};ge(()=>{J(gn,`${l(In).version??""}${l(In).stable?"":" (unstable)"}`),An!==(An=l(In).version)&&(Ft.value=(Ft.__value=An)??"")}),k(mn,Ft)}),ga(gt),_a(gt,()=>l(w),mn=>g(w,mn)),k(Dt,gt)};Ie(Ke,Dt=>{l(B)==="loading"?Dt(ot):l(B)==="error"?Dt(tt,1):Dt(Qe,-1)})}k(fe,Ce)};Ie(I,fe=>{l(we)&&fe(ue)})}var _e=M(oe,2),ce=D(_e),xe=M(ce,2);{var Je=fe=>{var Ce=Sg(),Ke=K(Ce,!0);ge(()=>{ze(Ce,"title",l(V)),J(Ke,l(V))}),k(fe,Ce)},rt=fe=>{var Ce=Mg(),Ke=K(Ce,!0);ge(()=>J(Ke,l(b)?`Selected Minecraft ${l(b)}`:"Pick a version to continue")),k(fe,Ce)};Ie(xe,fe=>{l(V)?fe(Je):fe(rt,-1)})}var ct=M(xe,2),lt=M(ct,2),bt=K(lt,!0),ut=M(ye,2);{var vt=fe=>{{let Ce=st(()=>et()??"");Tf(fe,{get currentKey(){return l(R)},get currentPath(){return l(Ce)},onpick:Ke=>{g(R,Ke,!0),g(L,""),g(H,!1)},oncustom:async()=>{const Ke=await mt();return Ke&&g(R,""),Ke},onclose:()=>g(H,!1)})}};Ie(ut,fe=>{l(H)&&fe(vt)})}ge(()=>{ze(Q,"placeholder",l(b)?`Instance name (${l(b)})`:"Instance name"),se.disabled=!l(y),J(ve,`${l(ee).length??""} shown`),lt.disabled=!l(Ue),ze(lt,"title",l(Ee)?"This mod loader is not supported yet.":"Create the instance"),J(bt,l(F)?"Creating…":"OK")}),ie("click",ye,fe=>{fe.target===fe.currentTarget&&e.onclose?.()}),ie("click",Ge,()=>g(H,!0)),Wt(Q,()=>l(T),fe=>g(T,fe)),_a(Ne,()=>l(A),fe=>g(A,fe)),ie("click",C,()=>e.onclose?.()),Wt(se,()=>l(p),fe=>g(p,fe)),ie("click",ce,Re),ie("click",ct,()=>e.onclose?.()),ie("click",lt,de),k(i,Xe),Yt()}cn(["click","keydown","change"]);var Tg=W('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Ag=W('<button class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game"><!> Kill</button>'),Rg=W("<button> </button>"),Cg=W('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),Pg=W('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"><!> Launch</button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip"><!> Export</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance"><!> Copy</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"><!> Delete</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance"><!> Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Lg(i,e){qt(e,!0);let t=$e(e,"storage",3,null),n=$e(e,"gameRunning",3,!1),r=$e(e,"modsCount",3,null),a=$e(e,"groups",19,()=>[]),o=ae(!1),s=ae("");const c=st(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function u(){const pe=mo(e.instance.icon_key);if(pe)return pe;const Ge=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&Ge?Ge(e.instance.icon_path):"/logo.png"}function d(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function h(pe){const Ge=new Date(pe*1e3),He=P=>String(P).padStart(2,"0");return`${He(Ge.getDate())}/${He(Ge.getMonth()+1)}/${Ge.getFullYear()} ${He(Ge.getHours())}:${He(Ge.getMinutes())}:${He(Ge.getSeconds())}`}function f(pe){const Ge=Math.max(0,Math.floor(pe)),He=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],P=[];let _=Ge;for(const[U,q]of He){const Q=Math.floor(_/U);if(Q&&(P.push(`${Q} ${q}${Q===1?"":"s"}`),_-=Q*U,P.length===2))break}return P.length?P.join(" "):"0 seconds"}const v=st(()=>{const pe=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${pe}, last played on ${h(e.instance.last_played)}, total played for ${f(e.instance.total_time_played)}`:pe});function y(pe){g(o,!1),g(s,""),e.onchangegroup?.(pe.trim()?pe.trim():null)}var S=Pg(),m=D(S),p=K(m),E=M(m,2),b=K(E,!0),T=M(E,2),A=D(T),L=K(A,!0),R=M(A,2),H=K(R,!0),x=M(R,2);{var w=pe=>{var Ge=Tg(),He=K(Ge);ge(()=>J(He,`▤ ${e.instance.group??""}`)),k(pe,Ge)};Ie(x,pe=>{e.instance.group&&pe(w)})}var Z=M(T,2),B=K(Z,!0),O=M(Z,2),F=D(O),V=D(F);zt(V,{name:"launch",size:13});var he=M(F,2);{var X=pe=>{var Ge=Ag(),He=D(Ge);zt(He,{name:"kill",size:13}),ie("click",Ge,function(...P){e.onkill?.apply(this,P)}),k(pe,Ge)};Ie(he,pe=>{n()&&pe(X)})}var le=M(he,2),Me=D(le);zt(Me,{name:"edit",size:13});var j=M(le,2),G=M(D(j),2),ee=K(G,!0),Ee=M(j,2);{var we=pe=>{var Ge=Cg(),He=D(Ge),P=M(He,2);wt(P,16,a,Q=>Q,(Q,be)=>{var Ne=Rg(),Te=K(Ne,!0);ge(()=>{dt(Ne,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===be?"font-medium text-(--accent)":"text-(--text-muted)"}`),J(Te,be)}),ie("click",Ne,()=>y(be)),k(Q,Ne)});var _=M(P,2),U=D(_),q=M(U,2);ge(Q=>{dt(He,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),q.disabled=Q},[()=>!l(s).trim()]),ie("click",He,()=>y("")),ie("keydown",U,Q=>{Q.key==="Enter"&&l(s).trim()&&y(l(s))}),Wt(U,()=>l(s),Q=>g(s,Q)),ie("click",q,()=>y(l(s))),k(pe,Ge)};Ie(Ee,pe=>{l(o)&&pe(we)})}var Ue=M(Ee,2),Fe=D(Ue);zt(Fe,{name:"folder",size:13});var We=M(Ue,2),Ve=D(We);zt(Ve,{name:"export",size:13});var et=M(We,2),mt=D(et);zt(mt,{name:"copy",size:13});var Ye=M(et,2),te=D(Ye);zt(te,{name:"delete",size:13});var ft=M(Ye,2),je=D(ft);zt(je,{name:"shortcut",size:13});var de=M(O,2),Re=D(de),Xe=K(Re,!0),ye=M(Re,2),Oe=K(ye);ge((pe,Ge,He)=>{ze(p,"src",pe),ze(E,"title",e.instance.name),J(b,e.instance.name),J(L,e.instance.minecraft_version),dt(R,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${l(c)??""}`),J(H,e.instance.loader_type),ze(Z,"title",Ge),J(B,He),F.disabled=n(),ze(F,"title",n()?"A game is already running":`Launch ${e.instance.name}`),J(ee,l(o)?"▴":"▾"),Ue.disabled=!t(),ze(Ue,"title",t()?"Opens the instance folder":"Storage unknown"),J(Xe,l(v)),J(Oe,`${r()??"…"??""} mods installed`)},[()=>u(),()=>d(),()=>d()]),jn("error",p,pe=>{pe.currentTarget.dataset.f||(pe.currentTarget.dataset.f="1",pe.currentTarget.src="/logo.png")}),ie("click",F,function(...pe){e.onlaunch?.apply(this,pe)}),ie("click",le,function(...pe){e.onedit?.apply(this,pe)}),ie("click",j,()=>g(o,!l(o))),ie("click",Ue,function(...pe){e.onopenfolder?.apply(this,pe)}),ie("click",We,function(...pe){e.onexport?.apply(this,pe)}),ie("click",et,function(...pe){e.oncopy?.apply(this,pe)}),ie("click",Ye,function(...pe){e.ondelete?.apply(this,pe)}),ie("click",ft,function(...pe){e.onshortcut?.apply(this,pe)}),k(i,S),Yt()}cn(["click","keydown"]);var Dg=W("<button></button>"),Ig=W('<span class="text-[11px] text-rose-400">invalid hex</span>'),Ug=W('<span class="text-[11px] text-(--text-muted)">live preview</span>'),Ng=W('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function Og(i,e){qt(e,!0);let t=$e(e,"theme",3,"twilight-dark");const n=st(()=>ca(t())?.accent??Nc),r=st(()=>{const b=ca(t())?.suggested??[],T=(ca(t())?.accent??Nc).toLowerCase();return b.map(A=>({...A,isBuiltin:A.hex.toLowerCase()===T}))});let a=ae(Ut(wl())),o=ae(Ut(l(a)??l(n))),s=ae(!1);$t(()=>{t(),g(a,wl(),!0),g(o,l(a)??l(n),!0),g(s,!1)});function c(b){return l(a)===null?b.isBuiltin:l(a)===b.hex.toLowerCase()}function u(b){b.isBuiltin?(zm(),g(a,null)):ls(b.hex)&&g(a,b.hex.toLowerCase(),!0),g(o,l(a)??l(n),!0),g(s,!1)}function d(b,T){const A=ls(b,{persist:T})?ms(b):null;A?(g(a,A,!0),g(s,!1)):g(s,!0)}var h=Ng(),f=St(h);wt(f,21,()=>l(r),b=>b.hex,(b,T)=>{var A=Dg();ge((L,R)=>{dt(A,1,`h-7 w-7 rounded-full ${L??""}`),Pn(A,`background:${l(T).hex??""}`),ze(A,"title",`${l(T).name??""}${l(T).isBuiltin?" (built-in)":""}`),ze(A,"aria-label",`${l(T).name??""} accent`),ze(A,"aria-pressed",R)},[()=>c(l(T))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>c(l(T))]),ie("click",A,()=>u(l(T))),k(b,A)});var v=M(f,2),y=D(v),S=M(y,2),m=M(S,2);{var p=b=>{var T=Ig();k(b,T)},E=b=>{var T=Ug();k(b,T)};Ie(m,b=>{l(s)?b(p):b(E,-1)})}ge(()=>{as(y,l(o)),as(S,l(o)),ze(S,"placeholder",l(n))}),ie("input",y,b=>{g(o,b.currentTarget.value,!0),d(l(o),!1)}),ie("change",y,b=>d(b.currentTarget.value,!0)),ie("input",S,b=>{g(o,b.currentTarget.value,!0),d(l(o),!1)}),ie("change",S,b=>d(b.currentTarget.value,!0)),k(i,h),Yt()}cn(["click","input","change"]);var kg=W('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Fg=W('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Bg=W('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),zg=W('<button><span class="flex items-center gap-2"><!> <!> <!></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Gg=W('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),qc=W('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),Hg=W(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Icon pack</h3> <p class="mt-1 text-[12px] text-(--text-muted)">The glyph set used across the launcher. Fluent (Auto) follows the theme.</p> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),Vg=W("<option> </option>"),Wg=W('<p class="mt-2 text-[12px] text-rose-400"> </p>'),jg=W('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!></select> <!> <!> <button class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)">↻ Rescan JREs</button> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),Xg=W('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),qg=W('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),Yg=W('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),Kg=W('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),Zg=W('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),Jg=W(`<h2 class="text-[16px] font-semibold">Accessibility</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Assistive profiles that adapt suggestions, installs and pre-launch setup for screen-reader and caption users.</p> <div class="mt-6 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Blind Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Screen reader &amp; audio navigation. Suggests Minecraft Access and spatial-audio mods on
              Fabric; Fabric is strongly recommended over Vanilla or Horizon.</p></div> <button type="button" role="switch" aria-label="Blind Mode (screen reader and audio navigation): suggests Minecraft Access on Fabric and recommends Fabric over Vanilla or Horizon" title="Toggle Blind Mode"><span aria-hidden="true"></span></button></div> <div class="mt-4 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Deaf Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Closed captions &amp; visual sound cues. Enforces <span class="font-mono">showSubtitles:true</span> in <span class="font-mono">options.txt</span> before every launch and suggests visual-sound Fabric mods.</p></div> <button type="button" role="switch" aria-label="Deaf Mode (closed captions and visual sound cues): enforces showSubtitles true in options.txt before launch and suggests visual-sound Fabric mods" title="Toggle Deaf Mode"><span aria-hidden="true"></span></button></div> <p class="mt-4 text-[11px] text-(--text-muted)" aria-live="polite"> </p>`,1),Qg=W('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),$g=W("<p> </p>"),e_=W('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div> <button class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Open the dedicated Accounts page"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <span class="truncate">Accounts</span></button></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function t_(i,e){qt(e,!0);let t=$e(e,"version",3,""),n=$e(e,"theme",15,"twilight-dark"),r=$e(e,"blindMode",15,!1),a=$e(e,"deafMode",15,!1),o=$e(e,"storage",3,null),s=$e(e,"runtimes",19,()=>[]),c=$e(e,"scanning",3,!1),u=$e(e,"javaError",3,""),d=$e(e,"javaPath",15,""),h=$e(e,"minMem",15,0),f=$e(e,"maxMem",15,0);$e(e,"sharedInput",11,""),$e(e,"instancesInput",11,"");let v=$e(e,"storageBusy",3,!1),y=$e(e,"storageMsg",3,""),S=$e(e,"javaMsg",3,""),m=$e(e,"gameRunning",3,!1);const p=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"accessibility",label:"Accessibility",icon:"♿"},{id:"about",label:"About & Updates",icon:"ℹ"}];let E=ae("appearance"),b=ae(Ut(ao())),T=ae(Ut(Mr())),A=ae(""),L=ae(!0),R=ae(Ut(zc())),H=ae(""),x=ae("");function w(){g(R,zc(),!0),g(x,"Loaded the active theme’s tokens — tweak and save.")}function Z(){try{const ye=Bc({name:l(A),dark:l(L),tokens:l(R)});g(T,Mr(),!0),n(ye.id),g(x,`Saved “${ye.name}”.`)}catch(ye){g(x,String(ye),!0)}}function B(ye){jm(ye),g(T,Mr(),!0),n()===ye&&n(nc),g(x,"Theme deleted.")}function O(){g(H,JSON.stringify({name:l(A).trim()||"My theme",dark:l(L),tokens:l(R)},null,2),!0),g(x,"Theme JSON written below — copy it to share.")}function F(){try{const ye=JSON.parse(l(H));if(!ye||typeof ye!="object"||Array.isArray(ye))throw new Error("Expected a theme object.");const Oe=Bc(ye);g(T,Mr(),!0),n(Oe.id),g(x,`Imported “${Oe.name}”.`),g(H,"")}catch(ye){g(x,`Import failed: ${ye}`)}}async function V(ye){const Oe=window.__TAURI__?.dialog?.open;if(!Oe)return null;try{const pe=await Oe({directory:!0,multiple:!1,defaultPath:ye&&ye.trim()?ye.trim():void 0});return typeof pe=="string"?pe:null}catch{return null}}const he=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let X=ae(Ut({}));$t(()=>{o()&&g(X,{instances:o().is_default_instances?"":o().instances_dir,shared:o().is_default_shared?"":o().shared_dir,versions:o().is_default_versions?"":o().versions_dir,mods:o().is_default_mods?"":o().mods_dir,icons:o().is_default_icons?"":o().icons_dir,java:o().is_default_java?"":o().java_dir,skins:o().is_default_skins?"":o().skins_dir,downloads:o().downloads_dir||""},!0)});function le(ye){return o()?ye==="downloads"?o().staging_root:o()[`${ye}_dir`]:""}function Me(ye){return o()?ye==="downloads"?o().is_default_staging:o()[`is_default_${ye}`]:!0}const j="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var G=e_(),ee=D(G),Ee=D(ee),we=M(Ee,2);wt(we,21,()=>p,ye=>ye.id,(ye,Oe)=>{var pe=kg(),Ge=D(pe),He=D(Ge);Mi(He,{get emoji(){return l(Oe).icon},size:15});var P=M(Ge,2),_=K(P,!0);ge(()=>{dt(pe,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${l(E)===l(Oe).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),ze(pe,"aria-current",l(E)===l(Oe).id?"true":void 0),J(_,l(Oe).label)}),ie("click",pe,()=>g(E,l(Oe).id,!0)),k(ye,pe)});var Ue=M(we,2),Fe=D(Ue),We=D(Fe);zt(We,{name:"accounts",size:15});var Ve=M(ee,2),et=D(Ve),mt=D(et);{var Ye=ye=>{var Oe=Hg(),pe=M(St(Oe),6),Ge=D(pe);wt(Ge,17,()=>vo,ve=>ve.id,(ve,Le)=>{var ke=Fg(),Ze=D(ke),ht=D(Ze),nt=M(ht,2),_t=M(nt,2),pt=M(Ze,2),xt=K(pt,!0),At=M(pt,2),en=K(At,!0);ge(()=>{dt(ke,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===l(Le).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),ze(ke,"aria-pressed",n()===l(Le).id),ze(ke,"title",`${l(Le).label??""}: ${l(Le).dark?"dark":"light"} ground`),Pn(ht,`background:${l(Le).swatch[0]??""}`),Pn(nt,`background:${l(Le).swatch[1]??""}`),Pn(_t,`background:${l(Le).swatch[2]??""}`),J(xt,l(Le).label),J(en,l(Le).dark?"Dark ground":"Light ground")}),ie("click",ke,()=>n(l(Le).id)),k(ve,ke)});var He=M(Ge,2);wt(He,17,()=>l(T),ve=>ve.id,(ve,Le)=>{var ke=Bg(),Ze=D(ke),ht=D(Ze),nt=M(ht,2),_t=M(nt,2),pt=M(Ze,2),xt=K(pt,!0),At=M(pt,2),en=K(At),Ht=M(At,2);ge(()=>{dt(ke,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===l(Le).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),ze(ke,"title",`${l(Le).name??""}: ${l(Le).dark?"dark":"light"} ground`),Pn(ht,`background:${l(Le).tokens.bg1??""}`),Pn(nt,`background:${l(Le).tokens.bg3??""}`),Pn(_t,`background:${l(Le).tokens.accent1??""}`),J(xt,l(Le).name),J(en,`Custom · ${l(Le).dark?"Dark":"Light"} ground`),ze(Ht,"title",`Delete ${l(Le).name??""}`),ze(Ht,"aria-label",`Delete ${l(Le).name??""}`)}),ie("click",ke,()=>n(l(Le).id)),ie("keydown",ke,Rt=>{(Rt.key==="Enter"||Rt.key===" ")&&(Rt.preventDefault(),n(l(Le).id))}),ie("click",Ht,Rt=>{Rt.stopPropagation(),B(l(Le).id)}),k(ve,ke)});var P=M(pe,4),_=D(P);Og(_,{get theme(){return n()}});var U=M(P,6);wt(U,21,()=>Cf,ve=>ve.id,(ve,Le)=>{var ke=zg(),Ze=D(ke),ht=D(Ze);zt(ht,{name:"instances",size:16,get pack(){return l(Le).id}});var nt=M(ht,2);zt(nt,{name:"settings",size:16,get pack(){return l(Le).id}});var _t=M(nt,2);zt(_t,{name:"accounts",size:16,get pack(){return l(Le).id}});var pt=M(Ze,2),xt=K(pt,!0),At=M(pt,2),en=K(At,!0);ge(()=>{dt(ke,1,`flex flex-col items-start gap-2 rounded border p-2.5 text-left ${l(b)===l(Le).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),ze(ke,"aria-pressed",l(b)===l(Le).id),ze(ke,"title",`${l(Le).label??""}: ${l(Le).hint??""}`),J(xt,l(Le).label),J(en,l(Le).hint)}),ie("click",ke,()=>{Qm(l(Le).id),g(b,ao(),!0)}),k(ve,ke)});var q=M(U,6),Q=D(q),be=D(Q),Ne=M(be,2),Te=D(Ne),Y=M(Te,2),C=M(Q,2);wt(C,21,()=>Hm,ve=>ve.key,(ve,Le)=>{var ke=Gg(),Ze=D(ke),ht=K(Ze,!0),nt=M(Ze,2),_t=D(nt),pt=M(_t,2);ge(()=>{J(ht,l(Le).label),as(_t,l(R)[l(Le).key]),ze(_t,"title",`${l(Le).label??""} color`),ze(_t,"aria-label",`${l(Le).label??""} color`),as(pt,l(R)[l(Le).key]),ze(pt,"aria-label",`${l(Le).label??""} hex`)}),ie("input",_t,xt=>g(R,{...l(R),[l(Le).key]:xt.currentTarget.value},!0)),ie("input",pt,xt=>g(R,{...l(R),[l(Le).key]:xt.currentTarget.value},!0)),k(ve,ke)});var oe=M(C,2),me=D(oe),z=M(me,2),ne=M(q,4),Ae=D(ne),Be=M(Ae,2),N=D(Be),Pe=M(N,2),se=M(ne,2);{var Se=ve=>{var Le=qc(),ke=K(Le,!0);ge(()=>J(ke,l(x))),k(ve,Le)};Ie(se,ve=>{l(x)&&ve(Se)})}ge(()=>{dt(Te,1,`px-3 py-1.5 text-[12px] ${l(L)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),ze(Te,"aria-pressed",l(L)),dt(Y,1,`px-3 py-1.5 text-[12px] ${l(L)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),ze(Y,"aria-pressed",!l(L))}),Wt(be,()=>l(A),ve=>g(A,ve)),ie("click",Te,()=>g(L,!0)),ie("click",Y,()=>g(L,!1)),ie("click",me,w),ie("click",z,Z),Wt(Ae,()=>l(H),ve=>g(H,ve)),ie("click",N,O),ie("click",Pe,F),k(ye,Oe)},te=ye=>{var Oe=jg(),pe=M(St(Oe),6),Ge=D(pe);Ge.value=Ge.__value="";var He=M(Ge);wt(He,17,s,z=>z.executable,(z,ne)=>{var Ae=Vg(),Be=K(Ae),N={};ge(()=>{J(Be,`Java ${l(ne).major??""} — ${l(ne).home??""}`),N!==(N=l(ne).executable)&&(Ae.value=(Ae.__value=N)??"")}),k(z,Ae)}),ga(pe);var P=M(pe,2);{var _=z=>{var ne=qc(),Ae=K(ne,!0);ge(()=>J(Ae,c()?"Probing system roots…":"No runtimes detected.")),k(z,ne)};Ie(P,z=>{s().length||z(_)})}var U=M(P,2);{var q=z=>{var ne=Wg(),Ae=K(ne,!0);ge(()=>J(Ae,u())),k(z,ne)};Ie(U,z=>{u()&&z(q)})}var Q=M(U,2),be=M(Q,4),Ne=M(D(be),2),Te=M(Ne,2),Y=M(be,2),C=M(D(Y),2),oe=M(C,2),me=M(Y,4);ge(()=>Q.disabled=c()),_a(pe,d),ie("click",Q,function(...z){e.onscanjava?.apply(this,z)}),Wt(Ne,h),Wt(Te,h),Wt(C,f),Wt(oe,f),ie("click",me,function(...z){e.onsaveprefs?.apply(this,z)}),k(ye,Oe)},ft=ye=>{var Oe=Zg(),pe=M(St(Oe),4);{var Ge=He=>{var P=Kg(),_=St(P),U=D(_),q=D(U),Q=M(D(q),2),be=K(Q,!0),Ne=M(q,2),Te=M(_,2);wt(Te,17,()=>he,Y=>Y.key,(Y,C)=>{var oe=Yg(),me=D(oe),z=D(me),ne=D(z),Ae=M(ne),Be=K(Ae,!0),N=M(z,2);{var Pe=xt=>{var At=Xg();ge(()=>At.disabled=v()),ie("click",At,()=>e.onsavefolder?.(l(C).key,"")),k(xt,At)},se=st(()=>!Me(l(C).key));Ie(N,xt=>{l(se)&&xt(Pe)})}var Se=M(me,2),ve=K(Se,!0),Le=M(Se,2),ke=D(Le),Ze=M(ke,2),ht=M(Ze,2),nt=M(ht,2),_t=M(Le,2);{var pt=xt=>{var At=qg(),en=D(At),Ht=K(en),Rt=M(en,2);ge(()=>{ze(en,"title",o().staging_root),J(Ht,`Staging: ${o().staging_root??""}`),Rt.disabled=v()||m(),ze(Rt,"title",m()?"Unavailable while a game is running":"Purges the staging area")}),ie("click",Rt,function(...Jt){e.oncleanstaging?.apply(this,Jt)}),k(xt,At)};Ie(_t,xt=>{l(C).key==="downloads"&&xt(pt)})}ge((xt,At)=>{J(ne,`${l(C).label??""} `),J(Be,xt),J(ve,l(C).hint),ze(ke,"placeholder",At),nt.disabled=v()},[()=>Me(l(C).key)?"(default)":"(custom)",()=>le(l(C).key)]),Wt(ke,()=>l(X)[l(C).key],xt=>l(X)[l(C).key]=xt),ie("click",Ze,async()=>{const xt=await V(l(X)[l(C).key]);xt&&(l(X)[l(C).key]=xt)}),ie("click",ht,()=>e.onopenfolder?.(le(l(C).key))),ie("click",nt,()=>e.onsavefolder?.(l(C).key,l(X)[l(C).key])),k(Y,oe)}),ge(()=>{ze(Q,"title",o().app_data),J(be,o().app_data)}),ie("click",Ne,()=>e.onopenfolder?.(o().app_data)),k(He,P)};Ie(pe,He=>{o()&&He(Ge)})}k(ye,Oe)},je=ye=>{var Oe=Jg(),pe=M(St(Oe),4),Ge=M(D(pe),2),He=K(Ge),P=M(pe,2),_=M(D(P),2),U=K(_),q=M(P,2),Q=K(q);ge(()=>{ze(Ge,"aria-checked",r()),dt(Ge,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${r()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),dt(He,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${r()?"translate-x-[22px]":""}`),ze(_,"aria-checked",a()),dt(_,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${a()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),dt(U,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${a()?"translate-x-[22px]":""}`),J(Q,`Blind Mode is ${r()?"on":"off"}. Deaf Mode is ${a()?"on":"off"}.`)}),ie("click",Ge,()=>r(!r())),ie("click",_,()=>a(!a())),k(ye,Oe)},de=ye=>{var Oe=Qg(),pe=M(St(Oe),4),Ge=D(pe),He=M(D(Ge),2),P=D(He),_=M(D(P)),U=K(_),q=M(pe,2),Q=D(q),be=M(Q,2),Ne=M(be,2);ge(()=>J(U,`(alpha-v${t()??""})`)),ie("click",Q,()=>e.onopenurl?.(`${j}`)),ie("click",be,()=>e.onopenurl?.(`${j}/releases`)),ie("click",Ne,()=>e.onopenurl?.(`${j}/issues`)),k(ye,Oe)};Ie(mt,ye=>{l(E)==="appearance"?ye(Ye):l(E)==="java"?ye(te,1):l(E)==="storage"?ye(ft,2):l(E)==="accessibility"?ye(je,3):ye(de,-1)})}var Re=M(mt,2);{var Xe=ye=>{var Oe=$g(),pe=K(Oe,!0);ge(()=>{dt(Oe,1,`mt-5 text-[12px] ${S()?"text-(--accent)":"text-(--text-muted)"}`),J(pe,S()||y())}),k(ye,Oe)};Ie(Re,ye=>{(S()||y())&&ye(Xe)})}ie("click",Ee,function(...ye){e.onback?.apply(this,ye)}),ie("click",Ue,function(...ye){e.onopenaccounts?.apply(this,ye)}),k(i,G),Yt()}cn(["click","keydown","input"]);var n_=W("<button> </button>"),i_=W('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),r_=W('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),a_=W('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),Yc=W('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),s_=W('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),Kc=W('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),o_=W('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),l_=W('<div class="p-4"><!> <!></div>'),c_=W(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),u_=W('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),d_=W('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),f_=W('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),h_=W('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),p_=W(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),m_=W('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),v_=W('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),g_=W('<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div><!> <!></div>',1);function If(i,e){qt(e,!0);let t=ae("offline"),n=ae(""),r=ae(!1),a=ae(""),o=ae(""),s=ae("idle"),c=ae(""),u=ae(null),d=ae(!1),h=null,f=ae("idle"),v=ae(""),y=ae(!1),S=ae(!1),m=ae(null),p=ae(!1),E=null,b=ae(""),T=ae(""),A=ae(!1),L=ae(""),R=ae(""),H=ae(""),x=ae("");function w(de,Re){const Xe=window.__TAURI__?.core;return Xe?Xe.invoke(de,Re):Promise.reject(new Error("Tauri backend unavailable in this preview."))}ec(()=>{Z(),B()});function Z(){h&&(clearInterval(h),h=null)}function B(){E&&(clearInterval(E),E=null)}$t(()=>{const de=l(a).trim(),Re=setTimeout(async()=>{if(!de){g(o,"");return}try{g(o,await w("offline_uuid",{username:de}),!0)}catch{g(o,"")}},200);return()=>clearTimeout(Re)});async function O(de){de.preventDefault(),g(n,""),g(r,!0);try{await w("add_offline_account",{username:l(a).trim()}),g(a,""),g(o,""),await e.onrefresh?.()}catch(Re){g(n,String(Re),!0)}finally{g(r,!1)}}async function F(){g(c,""),g(d,!1),g(s,"requesting");try{g(u,await w("start_microsoft_device_code"),!0),g(s,"code"),Z(),h=setInterval(V,(l(u).interval||5)*1e3)}catch(de){g(s,"idle"),g(c,String(de),!0)}}async function V(){if(l(u))try{const de=await w("poll_microsoft_device_code",{device:l(u)});if(de.state==="pending")return;if(de.state==="slow_down"){Z(),h=setInterval(V,((l(u).interval||5)+5)*1e3);return}if(Z(),de.state==="failed"){g(c,de.reason,!0),g(u,null),g(s,"idle");return}g(u,null),g(s,"signedin"),await e.onrefresh?.()}catch(de){g(c,String(de),!0)}}async function he(){if(l(u))try{await navigator.clipboard.writeText(l(u).user_code),g(d,!0),setTimeout(()=>g(d,!1),1600)}catch{}}async function X(){g(v,""),g(y,!1),g(S,!0);try{await w("elyby_browser_login"),g(y,!0),await e.onrefresh?.()}catch(de){g(v,String(de),!0)}finally{g(S,!1)}}async function le(){g(v,""),g(p,!1),g(f,"requesting");try{g(m,await w("start_elyby_device_code"),!0),g(f,"code"),B(),E=setInterval(Me,(l(m).interval||5)*1e3)}catch(de){g(f,"idle"),g(v,String(de),!0)}}async function Me(){if(l(m))try{const de=await w("poll_elyby_device_code",{device:l(m)});if(de.state==="pending")return;if(de.state==="slow_down"){B(),E=setInterval(Me,((l(m).interval||5)+5)*1e3);return}if(B(),de.state==="failed"){g(v,de.reason,!0),g(m,null),g(f,"idle");return}g(m,null),g(f,"signedin"),await e.onrefresh?.()}catch(de){g(v,String(de),!0)}}async function j(){if(l(m))try{await navigator.clipboard.writeText(l(m).user_code),g(p,!0),setTimeout(()=>g(p,!1),1600)}catch{}}function G(){const de=l(m)?.verification_uri_complete??l(m)?.verification_uri;de&&w("open_external_url",{url:de}).catch(()=>{})}async function ee(de){de.preventDefault(),g(n,""),g(A,!0),g(y,!1);try{await w("add_elyby_account",{username:l(b).trim(),password:l(T)}),g(b,""),g(T,""),g(y,!0),await e.onrefresh?.()}catch(Re){g(n,String(Re),!0)}finally{g(A,!1)}}async function Ee(de){de.preventDefault(),g(n,""),g(r,!0);try{const Re=await w("add_custom_yggdrasil_account",{username:l(L).trim(),serverUrl:l(R).trim()});(l(H).trim()||l(x).trim())&&await w("set_account_textures",{id:Re.id,skin:l(H).trim()||null,cape:l(x).trim()||null}),g(L,""),g(R,""),g(H,""),g(x,""),await e.onrefresh?.()}catch(Re){g(n,String(Re),!0)}finally{g(r,!1)}}async function we(de){const Re=window.__TAURI__?.dialog?.open;if(!Re){g(n,"File picker unavailable in this build.");return}try{const Xe=await Re({multiple:!1,title:de==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Xe)return;const ye=String(Xe);g(de==="skin"?H:x,ye,!0),g(n,"")}catch(Xe){g(n,String(Xe),!0)}}var Ue=g_(),Fe=St(Ue);wt(Fe,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],Sl,(de,Re)=>{var Xe=st(()=>Dd(Re,2));let ye=()=>l(Xe)[0],Oe=()=>l(Xe)[1];var pe=n_(),Ge=K(pe,!0);ge(()=>{dt(pe,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${l(t)===ye()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),J(Ge,Oe())}),ie("click",pe,()=>{g(t,ye(),!0),g(n,"")}),k(de,pe)});var We=M(Fe,2),Ve=D(We);{var et=de=>{var Re=r_(),Xe=St(Re),ye=D(Xe),Oe=M(ye,2),pe=M(Xe,2);{var Ge=He=>{var P=i_(),_=M(D(P),2),U=K(_,!0);ge(()=>J(U,l(o))),k(He,P)};Ie(pe,He=>{l(o)&&He(Ge)})}ge(He=>Oe.disabled=He,[()=>!l(a).trim()||l(r)]),jn("submit",Xe,O),Wt(ye,()=>l(a),He=>g(a,He)),k(de,Re)},mt=de=>{var Re=l_(),Xe=D(Re);{var ye=_=>{var U=a_(),q=St(U);ge(()=>q.disabled=l(r)),ie("click",q,F),k(_,U)},Oe=_=>{var U=Yc();k(_,U)},pe=_=>{var U=s_(),q=M(D(U),2),Q=K(q,!0),be=M(q,4),Ne=K(be,!0),Te=M(be,2),Y=D(Te),C=K(Y,!0),oe=M(Y,2);ge(()=>{J(Q,l(u).verification_uri),J(Ne,l(u).user_code),J(C,l(d)?"Copied ✓":"Copy code")}),ie("click",Y,he),ie("click",oe,F),k(_,U)},Ge=_=>{var U=Kc(),q=M(St(U),2);ie("click",q,()=>{g(s,"idle"),g(c,"")}),k(_,U)};Ie(Xe,_=>{l(s)==="idle"?_(ye):l(s)==="requesting"?_(Oe,1):l(s)==="code"&&l(u)?_(pe,2):l(s)==="signedin"&&_(Ge,3)})}var He=M(Xe,2);{var P=_=>{var U=o_(),q=K(U,!0);ge(()=>J(q,l(c))),k(_,U)};Ie(He,_=>{l(c)&&_(P)})}k(de,Re)},Ye=de=>{var Re=p_(),Xe=M(D(Re),2);{var ye=C=>{var oe=c_(),me=St(oe),z=K(me,!0),ne=M(me,4);ge(()=>{me.disabled=l(S),J(z,l(S)?"Waiting for the browser…":"Sign in with browser (recommended)"),ne.disabled=l(S)}),ie("click",me,X),ie("click",ne,le),k(C,oe)},Oe=C=>{var oe=Yc();k(C,oe)},pe=C=>{var oe=d_(),me=M(D(oe),2),z=K(me,!0),ne=M(me,4),Ae=K(ne,!0),Be=M(ne,2),N=D(Be),Pe=K(N,!0),se=M(N,2);{var Se=Le=>{var ke=u_();ie("click",ke,G),k(Le,ke)};Ie(se,Le=>{(l(m).verification_uri||l(m).verification_uri_complete)&&Le(Se)})}var ve=M(se,2);ge(()=>{J(z,l(m).verification_uri),J(Ae,l(m).user_code),J(Pe,l(p)?"Copied ✓":"Copy code")}),ie("click",N,j),ie("click",ve,le),k(C,oe)},Ge=C=>{var oe=Kc(),me=M(St(oe),2);ie("click",me,()=>{g(f,"idle"),g(v,"")}),k(C,oe)};Ie(Xe,C=>{l(f)==="idle"?C(ye):l(f)==="requesting"?C(Oe,1):l(f)==="code"&&l(m)?C(pe,2):l(f)==="signedin"&&C(Ge,3)})}var He=M(Xe,2);{var P=C=>{var oe=f_(),me=K(oe,!0);ge(()=>J(me,l(v))),k(C,oe)};Ie(He,C=>{l(v)&&C(P)})}var _=M(He,2);{var U=C=>{var oe=h_();k(C,oe)};Ie(_,C=>{l(y)&&l(f)==="idle"&&C(U)})}var q=M(_,2),Q=M(D(q),2),be=D(Q),Ne=M(be,2),Te=M(Ne,2),Y=K(Te,!0);ge(C=>{Te.disabled=C,J(Y,l(A)?"Signing in…":"Sign in")},[()=>!l(b).trim()||!l(T)||l(A)]),jn("submit",Q,ee),Wt(be,()=>l(b),C=>g(b,C)),Wt(Ne,()=>l(T),C=>g(T,C)),k(de,Re)},te=de=>{var Re=m_(),Xe=D(Re),ye=M(Xe,2),Oe=M(ye,2),pe=D(Oe),Ge=M(D(pe)),He=K(Ge,!0),P=M(pe,2),_=M(D(P)),U=K(_,!0),q=M(Oe,2);ge(Q=>{J(He,l(H)||"none"),J(U,l(x)||"none"),q.disabled=Q},[()=>!l(L).trim()||!l(R).trim()||l(r)]),jn("submit",Re,Ee),Wt(Xe,()=>l(R),Q=>g(R,Q)),Wt(ye,()=>l(L),Q=>g(L,Q)),ie("click",pe,()=>we("skin")),ie("click",P,()=>we("cape")),k(de,Re)};Ie(Ve,de=>{l(t)==="offline"?de(et):l(t)==="microsoft"?de(mt,1):l(t)==="elyby"?de(Ye,2):l(t)==="custom"&&de(te,3)})}var ft=M(Ve,2);{var je=de=>{var Re=v_(),Xe=K(Re,!0);ge(()=>J(Xe,l(n))),k(de,Re)};Ie(ft,de=>{l(n)&&de(je)})}k(i,Ue),Yt()}cn(["click"]);const rc="156",Nr={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},__=0,Zc=1,x_=2,Uf=1,b_=2,Bi=3,Ai=0,kn=1,ni=2,Xi=0,ua=1,Jc=2,Qc=3,$c=4,y_=5,ia=100,S_=101,M_=102,eu=103,tu=104,E_=200,w_=201,T_=202,A_=203,Nf=204,Of=205,R_=206,C_=207,P_=208,L_=209,D_=210,I_=0,U_=1,N_=2,Cl=3,O_=4,k_=5,F_=6,B_=7,kf=0,z_=1,G_=2,lr=0,H_=1,V_=2,W_=3,j_=4,X_=5,Ff=300,xa=301,ba=302,so=303,Pl=304,go=306,Ll=1e3,oi=1001,Dl=1002,Zt=1003,nu=1004,Uo=1005,ei=1006,q_=1007,cs=1008,cr=1009,Y_=1010,K_=1011,ac=1012,Bf=1013,sr=1014,Vi=1015,ya=1016,zf=1017,Gf=1018,Ar=1020,Z_=1021,li=1023,J_=1024,Q_=1025,Rr=1026,Sa=1027,$_=1028,Hf=1029,ex=1030,Vf=1031,Wf=1033,No=33776,Oo=33777,ko=33778,Fo=33779,iu=35840,ru=35841,au=35842,su=35843,tx=36196,ou=37492,lu=37496,cu=37808,uu=37809,du=37810,fu=37811,hu=37812,pu=37813,mu=37814,vu=37815,gu=37816,_u=37817,xu=37818,bu=37819,yu=37820,Su=37821,Bo=36492,Mu=36494,Eu=36495,nx=36283,wu=36284,Tu=36285,Au=36286,jf=3e3,Cr=3001,ix=3200,rx=3201,Xf=0,ax=1,Pr="",jt="srgb",Ri="srgb-linear",_o="display-p3",zo=7680,sx=519,ox=512,lx=513,cx=514,ux=515,dx=516,fx=517,hx=518,px=519,Il=35044,Ru="300 es",Ul=1035,Wi=2e3,oo=2001;class Ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,Nl=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function Ln(i,e,t){return Math.max(e,Math.min(t,i))}function mx(i,e){return(i%e+e)%e}function Go(i,e,t){return(1-t)*i+t*e}function Cu(i){return(i&i-1)===0&&i!==0}function Ol(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vx={DEG2RAD:Zs};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,t,n,r,a,o,s,c,u){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,u)}set(e,t,n,r,a,o,s,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],c=n[6],u=n[1],d=n[4],h=n[7],f=n[2],v=n[5],y=n[8],S=r[0],m=r[3],p=r[6],E=r[1],b=r[4],T=r[7],A=r[2],L=r[5],R=r[8];return a[0]=o*S+s*E+c*A,a[3]=o*m+s*b+c*L,a[6]=o*p+s*T+c*R,a[1]=u*S+d*E+h*A,a[4]=u*m+d*b+h*L,a[7]=u*p+d*T+h*R,a[2]=f*S+v*E+y*A,a[5]=f*m+v*b+y*L,a[8]=f*p+v*T+y*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],u=e[7],d=e[8];return t*o*d-t*s*u-n*a*d+n*s*c+r*a*u-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=d*o-s*u,f=s*c-d*a,v=u*a-o*c,y=t*h+n*f+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=h*S,e[1]=(r*u-d*n)*S,e[2]=(s*n-r*o)*S,e[3]=f*S,e[4]=(d*t-r*c)*S,e[5]=(r*a-s*t)*S,e[6]=v*S,e[7]=(n*c-u*t)*S,e[8]=(o*t-n*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const c=Math.cos(a),u=Math.sin(a);return this.set(n*c,n*u,-n*(c*o+u*s)+o+e,-r*u,r*c,-r*(-u*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new Et;function qf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gx(){const i=lo("canvas");return i.style.display="block",i}const Pu={};function Qa(i){i in Pu||(Pu[i]=!0,console.warn(i))}function da(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const _x=new Et().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),xx=new Et().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function bx(i){return i.convertSRGBToLinear().applyMatrix3(xx)}function yx(i){return i.applyMatrix3(_x).convertLinearToSRGB()}const Sx={[Ri]:i=>i,[jt]:i=>i.convertSRGBToLinear(),[_o]:bx},Mx={[Ri]:i=>i,[jt]:i=>i.convertLinearToSRGB(),[_o]:yx},Zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Ri},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Sx[e],r=Mx[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let kr;class Yf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kr===void 0&&(kr=lo("canvas")),kr.width=e.width,kr.height=e.height;const n=kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=da(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(da(t[n]/255)*255):t[n]=da(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ex=0;class Kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Wo(r[o].image)):a.push(Wo(r[o]))}else a=Wo(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wx=0;class En extends Ir{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,n=oi,r=oi,a=ei,o=cs,s=li,c=cr,u=En.DEFAULT_ANISOTROPY,d=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=ur(),this.name="",this.source=new Kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Cr?jt:Pr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?Cr:jf}set encoding(e){Qa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cr?jt:Pr}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Ff;En.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,u=c[0],d=c[4],h=c[8],f=c[1],v=c[5],y=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(y+m)<.1&&Math.abs(u+v+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,T=(v+1)/2,A=(p+1)/2,L=(d+f)/4,R=(h+S)/4,H=(y+m)/4;return b>T&&b>A?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=L/n,a=R/n):T>A?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=L/r,a=H/r):A<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),n=R/a,r=H/a),this.set(n,r,a,t),this}let E=Math.sqrt((m-y)*(m-y)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(m-y)/E,this.y=(h-S)/E,this.z=(f-d)/E,this.w=Math.acos((u+v+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tx extends Ir{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Qa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cr?jt:Pr),this.texture=new En(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ei,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Tx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zf extends En{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ax extends En{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let c=n[r+0],u=n[r+1],d=n[r+2],h=n[r+3];const f=a[o+0],v=a[o+1],y=a[o+2],S=a[o+3];if(s===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=v,e[t+2]=y,e[t+3]=S;return}if(h!==S||c!==f||u!==v||d!==y){let m=1-s;const p=c*f+u*v+d*y+h*S,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const A=Math.sqrt(b),L=Math.atan2(A,p*E);m=Math.sin(m*L)/A,s=Math.sin(s*L)/A}const T=s*E;if(c=c*m+f*T,u=u*m+v*T,d=d*m+y*T,h=h*m+S*T,m===1-s){const A=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=A,u*=A,d*=A,h*=A}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],c=n[r+1],u=n[r+2],d=n[r+3],h=a[o],f=a[o+1],v=a[o+2],y=a[o+3];return e[t]=s*y+d*h+c*v-u*f,e[t+1]=c*y+d*f+u*h-s*v,e[t+2]=u*y+d*v+s*f-c*h,e[t+3]=d*y-s*h-c*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,u=s(n/2),d=s(r/2),h=s(a/2),f=c(n/2),v=c(r/2),y=c(a/2);switch(o){case"XYZ":this._x=f*d*h+u*v*y,this._y=u*v*h-f*d*y,this._z=u*d*y+f*v*h,this._w=u*d*h-f*v*y;break;case"YXZ":this._x=f*d*h+u*v*y,this._y=u*v*h-f*d*y,this._z=u*d*y-f*v*h,this._w=u*d*h+f*v*y;break;case"ZXY":this._x=f*d*h-u*v*y,this._y=u*v*h+f*d*y,this._z=u*d*y+f*v*h,this._w=u*d*h-f*v*y;break;case"ZYX":this._x=f*d*h-u*v*y,this._y=u*v*h+f*d*y,this._z=u*d*y-f*v*h,this._w=u*d*h+f*v*y;break;case"YZX":this._x=f*d*h+u*v*y,this._y=u*v*h+f*d*y,this._z=u*d*y-f*v*h,this._w=u*d*h-f*v*y;break;case"XZY":this._x=f*d*h-u*v*y,this._y=u*v*h-f*d*y,this._z=u*d*y+f*v*h,this._w=u*d*h+f*v*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],u=t[2],d=t[6],h=t[10],f=n+s+h;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-c)*v,this._y=(a-u)*v,this._z=(o-r)*v}else if(n>s&&n>h){const v=2*Math.sqrt(1+n-s-h);this._w=(d-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(a+u)/v}else if(s>h){const v=2*Math.sqrt(1+s-n-h);this._w=(a-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+h-n-s);this._w=(o-r)/v,this._x=(a+u)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+o*s+r*u-a*c,this._y=r*d+o*c+a*s-n*u,this._z=a*d+o*u+n*c-r*s,this._w=o*d-n*s-r*c-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),d=Math.atan2(u,s),h=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,n=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,u=c*t+o*r-s*n,d=c*n+s*t-a*r,h=c*r+a*n-o*t,f=-a*t-o*n-s*r;return this.x=u*c+f*-a+d*-s-h*-o,this.y=d*c+f*-o+h*-a-u*-s,this.z=h*c+f*-s+u*-o-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-n*c,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new re,Lu=new Dr;class vs{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox),Fr.applyMatrix4(e.matrixWorld),this.union(Fr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)Ui.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ui)}else r.boundingBox===null&&r.computeBoundingBox(),Fr.copy(r.boundingBox),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),ys.subVectors(this.max,Ua),Br.subVectors(e.a,Ua),zr.subVectors(e.b,Ua),Gr.subVectors(e.c,Ua),er.subVectors(zr,Br),tr.subVectors(Gr,zr),hr.subVectors(Br,Gr);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-hr.z,hr.y,er.z,0,-er.x,tr.z,0,-tr.x,hr.z,0,-hr.x,-er.y,er.x,0,-tr.y,tr.x,0,-hr.y,hr.x,0];return!Xo(t,Br,zr,Gr,ys)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Br,zr,Gr,ys))?!1:(Ss.crossVectors(er,tr),t=[Ss.x,Ss.y,Ss.z],Xo(t,Br,zr,Gr,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new re,new re,new re,new re,new re,new re,new re,new re],Ui=new re,Fr=new vs,Br=new re,zr=new re,Gr=new re,er=new re,tr=new re,hr=new re,Ua=new re,ys=new re,Ss=new re,pr=new re;function Xo(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){pr.fromArray(i,a);const s=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),c=e.dot(pr),u=t.dot(pr),d=n.dot(pr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>s)return!1}return!0}const Rx=new vs,Na=new re,qo=new re;class sc{constructor(e=new re,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rx.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Na,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(qo)),this.expandByPoint(Na.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new re,Yo=new re,Ms=new re,nr=new re,Ko=new re,Es=new re,Zo=new re;class Jf{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yo.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(Yo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Ms),s=nr.dot(this.direction),c=-nr.dot(Ms),u=nr.lengthSq(),d=Math.abs(1-o*o);let h,f,v,y;if(d>0)if(h=o*c-s,f=o*s-c,y=a*d,h>=0)if(f>=-y)if(f<=y){const S=1/d;h*=S,f*=S,v=h*(h+o*f+2*s)+f*(o*h+f+2*c)+u}else f=a,h=Math.max(0,-(o*f+s)),v=-h*h+f*(f+2*c)+u;else f=-a,h=Math.max(0,-(o*f+s)),v=-h*h+f*(f+2*c)+u;else f<=-y?(h=Math.max(0,-(-o*a+s)),f=h>0?-a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u):f<=y?(h=0,f=Math.min(Math.max(-a,-c),a),v=f*(f+2*c)+u):(h=Math.max(0,-(o*a+s)),f=h>0?a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u);else f=o>0?-a:a,h=Math.max(0,-(o*f+s)),v=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Yo).addScaledVector(Ms,f),v}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),r=Ni.dot(Ni)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(a=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,r,a){Ko.subVectors(t,e),Es.subVectors(n,e),Zo.crossVectors(Ko,Es);let o=this.direction.dot(Zo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;nr.subVectors(this.origin,e);const c=s*this.direction.dot(Es.crossVectors(nr,Es));if(c<0)return null;const u=s*this.direction.dot(Ko.cross(nr));if(u<0||c+u>o)return null;const d=-s*nr.dot(Zo);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,t,n,r,a,o,s,c,u,d,h,f,v,y,S,m){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,u,d,h,f,v,y,S,m)}set(e,t,n,r,a,o,s,c,u,d,h,f,v,y,S,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=o,p[9]=s,p[13]=c,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=v,p[7]=y,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),a=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=o*d,v=o*h,y=s*d,S=s*h;t[0]=c*d,t[4]=-c*h,t[8]=u,t[1]=v+y*u,t[5]=f-S*u,t[9]=-s*c,t[2]=S-f*u,t[6]=y+v*u,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,v=c*h,y=u*d,S=u*h;t[0]=f+S*s,t[4]=y*s-v,t[8]=o*u,t[1]=o*h,t[5]=o*d,t[9]=-s,t[2]=v*s-y,t[6]=S+f*s,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,v=c*h,y=u*d,S=u*h;t[0]=f-S*s,t[4]=-o*h,t[8]=y+v*s,t[1]=v+y*s,t[5]=o*d,t[9]=S-f*s,t[2]=-o*u,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,v=o*h,y=s*d,S=s*h;t[0]=c*d,t[4]=y*u-v,t[8]=f*u+S,t[1]=c*h,t[5]=S*u+f,t[9]=v*u-y,t[2]=-u,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,v=o*u,y=s*c,S=s*u;t[0]=c*d,t[4]=S-f*h,t[8]=y*h+v,t[1]=h,t[5]=o*d,t[9]=-s*d,t[2]=-u*d,t[6]=v*h+y,t[10]=f-S*h}else if(e.order==="XZY"){const f=o*c,v=o*u,y=s*c,S=s*u;t[0]=c*d,t[4]=-h,t[8]=u*d,t[1]=f*h+S,t[5]=o*d,t[9]=v*h-y,t[2]=y*h-v,t[6]=s*d,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cx,e,Px)}lookAt(e,t,n){const r=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ir.crossVectors(n,zn),ir.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ir.crossVectors(n,zn)),ir.normalize(),ws.crossVectors(zn,ir),r[0]=ir.x,r[4]=ws.x,r[8]=zn.x,r[1]=ir.y,r[5]=ws.y,r[9]=zn.y,r[2]=ir.z,r[6]=ws.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],c=n[8],u=n[12],d=n[1],h=n[5],f=n[9],v=n[13],y=n[2],S=n[6],m=n[10],p=n[14],E=n[3],b=n[7],T=n[11],A=n[15],L=r[0],R=r[4],H=r[8],x=r[12],w=r[1],Z=r[5],B=r[9],O=r[13],F=r[2],V=r[6],he=r[10],X=r[14],le=r[3],Me=r[7],j=r[11],G=r[15];return a[0]=o*L+s*w+c*F+u*le,a[4]=o*R+s*Z+c*V+u*Me,a[8]=o*H+s*B+c*he+u*j,a[12]=o*x+s*O+c*X+u*G,a[1]=d*L+h*w+f*F+v*le,a[5]=d*R+h*Z+f*V+v*Me,a[9]=d*H+h*B+f*he+v*j,a[13]=d*x+h*O+f*X+v*G,a[2]=y*L+S*w+m*F+p*le,a[6]=y*R+S*Z+m*V+p*Me,a[10]=y*H+S*B+m*he+p*j,a[14]=y*x+S*O+m*X+p*G,a[3]=E*L+b*w+T*F+A*le,a[7]=E*R+b*Z+T*V+A*Me,a[11]=E*H+b*B+T*he+A*j,a[15]=E*x+b*O+T*X+A*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],u=e[13],d=e[2],h=e[6],f=e[10],v=e[14],y=e[3],S=e[7],m=e[11],p=e[15];return y*(+a*c*h-r*u*h-a*s*f+n*u*f+r*s*v-n*c*v)+S*(+t*c*v-t*u*f+a*o*f-r*o*v+r*u*d-a*c*d)+m*(+t*u*h-t*s*v-a*o*h+n*o*v+a*s*d-n*u*d)+p*(-r*s*d-t*c*h+t*s*f+r*o*h-n*o*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],v=e[11],y=e[12],S=e[13],m=e[14],p=e[15],E=h*m*u-S*f*u+S*c*v-s*m*v-h*c*p+s*f*p,b=y*f*u-d*m*u-y*c*v+o*m*v+d*c*p-o*f*p,T=d*S*u-y*h*u+y*s*v-o*S*v-d*s*p+o*h*p,A=y*h*c-d*S*c-y*s*f+o*S*f+d*s*m-o*h*m,L=t*E+n*b+r*T+a*A;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=E*R,e[1]=(S*f*a-h*m*a-S*r*v+n*m*v+h*r*p-n*f*p)*R,e[2]=(s*m*a-S*c*a+S*r*u-n*m*u-s*r*p+n*c*p)*R,e[3]=(h*c*a-s*f*a-h*r*u+n*f*u+s*r*v-n*c*v)*R,e[4]=b*R,e[5]=(d*m*a-y*f*a+y*r*v-t*m*v-d*r*p+t*f*p)*R,e[6]=(y*c*a-o*m*a-y*r*u+t*m*u+o*r*p-t*c*p)*R,e[7]=(o*f*a-d*c*a+d*r*u-t*f*u-o*r*v+t*c*v)*R,e[8]=T*R,e[9]=(y*h*a-d*S*a-y*n*v+t*S*v+d*n*p-t*h*p)*R,e[10]=(o*S*a-y*s*a+y*n*u-t*S*u-o*n*p+t*s*p)*R,e[11]=(d*s*a-o*h*a-d*n*u+t*h*u+o*n*v-t*s*v)*R,e[12]=A*R,e[13]=(d*S*r-y*h*r+y*n*f-t*S*f-d*n*m+t*h*m)*R,e[14]=(y*s*r-o*S*r-y*n*c+t*S*c+o*n*m-t*s*m)*R,e[15]=(o*h*r-d*s*r+d*n*c-t*h*c-o*n*f+t*s*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,c=e.z,u=a*o,d=a*s;return this.set(u*o+n,u*s-r*c,u*c+r*s,0,u*s+r*c,d*s+n,d*c-r*o,0,u*c-r*s,d*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,u=a+a,d=o+o,h=s+s,f=a*u,v=a*d,y=a*h,S=o*d,m=o*h,p=s*h,E=c*u,b=c*d,T=c*h,A=n.x,L=n.y,R=n.z;return r[0]=(1-(S+p))*A,r[1]=(v+T)*A,r[2]=(y-b)*A,r[3]=0,r[4]=(v-T)*L,r[5]=(1-(f+p))*L,r[6]=(m+E)*L,r[7]=0,r[8]=(y+b)*R,r[9]=(m-E)*R,r[10]=(1-(f+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Hr.set(r[0],r[1],r[2]).length();const o=Hr.set(r[4],r[5],r[6]).length(),s=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const u=1/a,d=1/o,h=1/s;return ri.elements[0]*=u,ri.elements[1]*=u,ri.elements[2]*=u,ri.elements[4]*=d,ri.elements[5]*=d,ri.elements[6]*=d,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=Wi){const c=this.elements,u=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let v,y;if(s===Wi)v=-(o+a)/(o-a),y=-2*o*a/(o-a);else if(s===oo)v=-o/(o-a),y=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=Wi){const c=this.elements,u=1/(t-e),d=1/(n-r),h=1/(o-a),f=(t+e)*u,v=(n+r)*d;let y,S;if(s===Wi)y=(o+a)*h,S=-2*h;else if(s===oo)y=a*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=S,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hr=new re,ri=new rn,Cx=new re(0,0,0),Px=new re(1,1,1),ir=new re,ws=new re,zn=new re,Du=new rn,Iu=new Dr;class xo{constructor(e=0,t=0,n=0,r=xo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],u=r[5],d=r[9],h=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Ln(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,v));break;case"XZY":this._z=Math.asin(-Ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xo.DEFAULT_ORDER="XYZ";class Qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lx=0;const Uu=new re,Vr=new Dr,Oi=new rn,Ts=new re,Oa=new re,Dx=new re,Ix=new Dr,Nu=new re(1,0,0),Ou=new re(0,1,0),ku=new re(0,0,1),Ux={type:"added"},Nx={type:"removed"};class wn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new re,t=new xo,n=new Dr,r=new re(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rn},normalMatrix:{value:new Et}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(ku,e)}translateOnAxis(e,t){return Uu.copy(e).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(ku,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Oa,Ts,this.up):Oi.lookAt(Ts,Oa,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(Oi),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ux)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,Dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),v=o(e.animations),y=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wn.DEFAULT_UP=new re(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new re,ki=new re,Jo=new re,Fi=new re,Wr=new re,jr=new re,Fu=new re,Qo=new re,$o=new re,el=new re;let As=!1;class ti{constructor(e=new re,t=new re,n=new re){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ai.subVectors(e,t),r.cross(ai);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){ai.subVectors(r,t),ki.subVectors(n,t),Jo.subVectors(e,t);const o=ai.dot(ai),s=ai.dot(ki),c=ai.dot(Jo),u=ki.dot(ki),d=ki.dot(Jo),h=o*u-s*s;if(h===0)return a.set(-2,-1,-1);const f=1/h,v=(u*c-s*d)*f,y=(o*d-s*c)*f;return a.set(1-v-y,y,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fi),Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,n,r,a,o,s,c){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(e,t,n,r,a,o,s,c)}static getInterpolation(e,t,n,r,a,o,s,c){return this.getBarycoord(e,t,n,r,Fi),c.setScalar(0),c.addScaledVector(a,Fi.x),c.addScaledVector(o,Fi.y),c.addScaledVector(s,Fi.z),c}static isFrontFacing(e,t,n,r){return ai.subVectors(n,t),ki.subVectors(e,t),ai.cross(ki).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ai.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),ti.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;Wr.subVectors(r,n),jr.subVectors(a,n),Qo.subVectors(e,n);const c=Wr.dot(Qo),u=jr.dot(Qo);if(c<=0&&u<=0)return t.copy(n);$o.subVectors(e,r);const d=Wr.dot($o),h=jr.dot($o);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Wr,o);el.subVectors(e,a);const v=Wr.dot(el),y=jr.dot(el);if(y>=0&&v<=y)return t.copy(a);const S=v*u-c*y;if(S<=0&&u>=0&&y<=0)return s=u/(u-y),t.copy(n).addScaledVector(jr,s);const m=d*y-v*h;if(m<=0&&h-d>=0&&v-y>=0)return Fu.subVectors(a,r),s=(h-d)/(h-d+(v-y)),t.copy(r).addScaledVector(Fu,s);const p=1/(m+S+f);return o=S*p,s=f*p,t.copy(n).addScaledVector(Wr,o).addScaledVector(jr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ox=0;class Pa extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=ua,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Of,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function tl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Zn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Zn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Zn.workingColorSpace){if(e=mx(e,1),t=Ln(t,0,1),n=Ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=tl(o,a,e+1/3),this.g=tl(o,a,e),this.b=tl(o,a,e-1/3)}return Zn.toWorkingColorSpace(this,r),this}setStyle(e,t=jt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=$f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Zn.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Ln(Mn.r*255,0,255))*65536+Math.round(Ln(Mn.g*255,0,255))*256+Math.round(Ln(Mn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zn.workingColorSpace){Zn.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,r=Mn.g,a=Mn.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let c,u;const d=(s+o)/2;if(s===o)c=0,u=0;else{const h=o-s;switch(u=d<=.5?h/(o+s):h/(2-o-s),o){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=Zn.workingColorSpace){return Zn.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=jt){Zn.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,r=Mn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(si),si.h+=e,si.s+=t,si.l+=n,this.setHSL(si.h,si.s,si.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Rs);const n=Go(si.h,Rs.h,t),r=Go(si.s,Rs.s,t),a=Go(si.l,Rs.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Lt;Lt.NAMES=$f;class eh extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new re,Cs=new at;class pi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Il,this.updateRange={offset:0,count:-1},this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class th extends pi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nh extends pi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qi extends pi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kx=0;const Yn=new rn,nl=new wn,Xr=new re,Gn=new vs,ka=new vs,vn=new re;class Qi extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?nh:th)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Et().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new qi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Gn.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new re,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];ka.setFromBufferAttribute(s),this.morphTargetsRelative?(vn.addVectors(Gn.min,ka.min),Gn.expandByPoint(vn),vn.addVectors(Gn.max,ka.max),Gn.expandByPoint(vn)):(Gn.expandByPoint(ka.min),Gn.expandByPoint(ka.max))}Gn.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)vn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(vn));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let u=0,d=s.count;u<d;u++)vn.fromBufferAttribute(s,u),c&&(Xr.fromBufferAttribute(e,u),vn.add(Xr)),r=Math.max(r,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let w=0;w<s;w++)u[w]=new re,d[w]=new re;const h=new re,f=new re,v=new re,y=new at,S=new at,m=new at,p=new re,E=new re;function b(w,Z,B){h.fromArray(r,w*3),f.fromArray(r,Z*3),v.fromArray(r,B*3),y.fromArray(o,w*2),S.fromArray(o,Z*2),m.fromArray(o,B*2),f.sub(h),v.sub(h),S.sub(y),m.sub(y);const O=1/(S.x*m.y-m.x*S.y);isFinite(O)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(v,-S.y).multiplyScalar(O),E.copy(v).multiplyScalar(S.x).addScaledVector(f,-m.x).multiplyScalar(O),u[w].add(p),u[Z].add(p),u[B].add(p),d[w].add(E),d[Z].add(E),d[B].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let w=0,Z=T.length;w<Z;++w){const B=T[w],O=B.start,F=B.count;for(let V=O,he=O+F;V<he;V+=3)b(n[V+0],n[V+1],n[V+2])}const A=new re,L=new re,R=new re,H=new re;function x(w){R.fromArray(a,w*3),H.copy(R);const Z=u[w];A.copy(Z),A.sub(R.multiplyScalar(R.dot(Z))).normalize(),L.crossVectors(H,Z);const O=L.dot(d[w])<0?-1:1;c[w*4]=A.x,c[w*4+1]=A.y,c[w*4+2]=A.z,c[w*4+3]=O}for(let w=0,Z=T.length;w<Z;++w){const B=T[w],O=B.start,F=B.count;for(let V=O,he=O+F;V<he;V+=3)x(n[V+0]),x(n[V+1]),x(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);const r=new re,a=new re,o=new re,s=new re,c=new re,u=new re,d=new re,h=new re;if(e)for(let f=0,v=e.count;f<v;f+=3){const y=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),s.fromBufferAttribute(n,y),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,m),s.add(d),c.add(d),u.add(d),n.setXYZ(y,s.x,s.y,s.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(s,c){const u=s.array,d=s.itemSize,h=s.normalized,f=new u.constructor(c.length*d);let v=0,y=0;for(let S=0,m=c.length;S<m;S++){s.isInterleavedBufferAttribute?v=c[S]*s.data.stride+s.offset:v=c[S]*d;for(let p=0;p<d;p++)f[y++]=u[v++]}return new pi(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qi,n=this.index.array,r=this.attributes;for(const s in r){const c=r[s],u=e(c,n);t.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const c=[],u=a[s];for(let d=0,h=u.length;d<h;d++){const f=u[d],v=e(f,n);c.push(v)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const u=o[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const v=u[h];d.push(v.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],h=a[u];for(let f=0,v=h.length;f<v;f++)d.push(h[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bu=new rn,mr=new Jf,Ps=new sc,zu=new re,qr=new re,Yr=new re,Kr=new re,il=new re,Ls=new re,Ds=new at,Is=new at,Us=new at,Gu=new re,Hu=new re,Vu=new re,Ns=new re,Os=new re;class Bt extends wn{constructor(e=new Qi,t=new eh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Ls.set(0,0,0);for(let c=0,u=a.length;c<u;c++){const d=s[c],h=a[c];d!==0&&(il.fromBufferAttribute(h,e),o?Ls.addScaledVector(il,d):Ls.addScaledVector(il.sub(t),d))}t.add(Ls)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(a),mr.copy(e.ray).recast(e.near),!(Ps.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Ps,zu)===null||mr.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(Bu.copy(a).invert(),mr.copy(e.ray).applyMatrix4(Bu),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,v=a.drawRange;if(s!==null)if(Array.isArray(o))for(let y=0,S=f.length;y<S;y++){const m=f[y],p=o[m.materialIndex],E=Math.max(m.start,v.start),b=Math.min(s.count,Math.min(m.start+m.count,v.start+v.count));for(let T=E,A=b;T<A;T+=3){const L=s.getX(T),R=s.getX(T+1),H=s.getX(T+2);r=ks(this,p,e,n,u,d,h,L,R,H),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),S=Math.min(s.count,v.start+v.count);for(let m=y,p=S;m<p;m+=3){const E=s.getX(m),b=s.getX(m+1),T=s.getX(m+2);r=ks(this,o,e,n,u,d,h,E,b,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,S=f.length;y<S;y++){const m=f[y],p=o[m.materialIndex],E=Math.max(m.start,v.start),b=Math.min(c.count,Math.min(m.start+m.count,v.start+v.count));for(let T=E,A=b;T<A;T+=3){const L=T,R=T+1,H=T+2;r=ks(this,p,e,n,u,d,h,L,R,H),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),S=Math.min(c.count,v.start+v.count);for(let m=y,p=S;m<p;m+=3){const E=m,b=m+1,T=m+2;r=ks(this,o,e,n,u,d,h,E,b,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fx(i,e,t,n,r,a,o,s){let c;if(e.side===kn?c=n.intersectTriangle(o,a,r,!0,s):c=n.intersectTriangle(r,a,o,e.side===Ai,s),c===null)return null;Os.copy(s),Os.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Os);return u<t.near||u>t.far?null:{distance:u,point:Os.clone(),object:i}}function ks(i,e,t,n,r,a,o,s,c,u){i.getVertexPosition(s,qr),i.getVertexPosition(c,Yr),i.getVertexPosition(u,Kr);const d=Fx(i,e,t,n,qr,Yr,Kr,Ns);if(d){r&&(Ds.fromBufferAttribute(r,s),Is.fromBufferAttribute(r,c),Us.fromBufferAttribute(r,u),d.uv=ti.getInterpolation(Ns,qr,Yr,Kr,Ds,Is,Us,new at)),a&&(Ds.fromBufferAttribute(a,s),Is.fromBufferAttribute(a,c),Us.fromBufferAttribute(a,u),d.uv1=ti.getInterpolation(Ns,qr,Yr,Kr,Ds,Is,Us,new at),d.uv2=d.uv1),o&&(Gu.fromBufferAttribute(o,s),Hu.fromBufferAttribute(o,c),Vu.fromBufferAttribute(o,u),d.normal=ti.getInterpolation(Ns,qr,Yr,Kr,Gu,Hu,Vu,new re),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:c,c:u,normal:new re,materialIndex:0};ti.getNormal(qr,Yr,Kr,h.normal),d.face=h}return d}class tn extends Qi{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],u=[],d=[],h=[];let f=0,v=0;y("z","y","x",-1,-1,n,t,e,o,a,0),y("z","y","x",1,-1,n,t,-e,o,a,1),y("x","z","y",1,1,e,n,t,r,o,2),y("x","z","y",1,-1,e,n,-t,r,o,3),y("x","y","z",1,-1,e,t,n,r,a,4),y("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new qi(u,3)),this.setAttribute("normal",new qi(d,3)),this.setAttribute("uv",new qi(h,2));function y(S,m,p,E,b,T,A,L,R,H,x){const w=T/R,Z=A/H,B=T/2,O=A/2,F=L/2,V=R+1,he=H+1;let X=0,le=0;const Me=new re;for(let j=0;j<he;j++){const G=j*Z-O;for(let ee=0;ee<V;ee++){const Ee=ee*w-B;Me[S]=Ee*E,Me[m]=G*b,Me[p]=F,u.push(Me.x,Me.y,Me.z),Me[S]=0,Me[m]=0,Me[p]=L>0?1:-1,d.push(Me.x,Me.y,Me.z),h.push(ee/R),h.push(1-j/H),X+=1}}for(let j=0;j<H;j++)for(let G=0;G<R;G++){const ee=f+G+V*j,Ee=f+G+V*(j+1),we=f+(G+1)+V*(j+1),Ue=f+(G+1)+V*j;c.push(ee,Ee,Ue),c.push(Ee,we,Ue),le+=6}s.addGroup(v,le,x),v+=le,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ma(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Cn(i){const e={};for(let t=0;t<i.length;t++){const n=Ma(i[t]);for(const r in n)e[r]=n[r]}return e}function Bx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ih(i){return i.getRenderTarget()===null?i.outputColorSpace:Ri}const rh={clone:Ma,merge:Cn};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ah extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vn extends ah{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,Jr=1;class Hx extends wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Vn(Zr,Jr,e,t);r.layers=this.layers,this.add(r);const a=new Vn(Zr,Jr,e,t);a.layers=this.layers,this.add(a);const o=new Vn(Zr,Jr,e,t);o.layers=this.layers,this.add(o);const s=new Vn(Zr,Jr,e,t);s.layers=this.layers,this.add(s);const c=new Vn(Zr,Jr,e,t);c.layers=this.layers,this.add(c);const u=new Vn(Zr,Jr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,c]=t;for(const u of t)this.remove(u);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,c,u]=this.children,d=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(d),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class sh extends En{constructor(e,t,n,r,a,o,s,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:xa,super(e,t,n,r,a,o,s,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vx extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Qa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Cr?jt:Pr),this.texture=new sh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tn(5,5,5),a=new Zi({name:"CubemapFromEquirect",uniforms:Ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Xi});a.uniforms.tEquirect.value=t;const o=new Bt(r,a),s=t.minFilter;return t.minFilter===cs&&(t.minFilter=ei),new Hx(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const rl=new re,Wx=new re,jx=new Et;class ar{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=rl.subVectors(n,t).cross(Wx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jx.getNormalMatrix(e),r=this.coplanarPoint(rl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new sc,Fs=new re;class oc{constructor(e=new ar,t=new ar,n=new ar,r=new ar,a=new ar,o=new ar){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){const n=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],v=r[8],y=r[9],S=r[10],m=r[11],p=r[12],E=r[13],b=r[14],T=r[15];if(n[0].setComponents(c-a,f-u,m-v,T-p).normalize(),n[1].setComponents(c+a,f+u,m+v,T+p).normalize(),n[2].setComponents(c+o,f+d,m+y,T+E).normalize(),n[3].setComponents(c-o,f-d,m-y,T-E).normalize(),n[4].setComponents(c-s,f-h,m-S,T-b).normalize(),t===Wi)n[5].setComponents(c+s,f+h,m+S,T+b).normalize();else if(t===oo)n[5].setComponents(s,h,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oh(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Xx(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,d){const h=u.array,f=u.usage,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,h,f),u.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function a(u,d,h){const f=d.array,v=d.updateRange;i.bindBuffer(h,u),v.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(i.deleteBuffer(d.buffer),n.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,r(u,d)):h.version<u.version&&(a(h.buffer,u,d),h.version=u.version)}return{get:o,remove:s,update:c}}class lc extends Qi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),c=Math.floor(r),u=s+1,d=c+1,h=e/s,f=t/c,v=[],y=[],S=[],m=[];for(let p=0;p<d;p++){const E=p*f-o;for(let b=0;b<u;b++){const T=b*h-a;y.push(T,-E,0),S.push(0,0,1),m.push(b/s),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<s;E++){const b=E+u*p,T=E+u*(p+1),A=E+1+u*(p+1),L=E+1+u*p;v.push(b,T,L),v.push(T,A,L)}this.setIndex(v),this.setAttribute("position",new qi(y,3)),this.setAttribute("normal",new qi(S,3)),this.setAttribute("uv",new qi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yx=`#ifdef USE_ALPHAHASH
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
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rb=`#ifdef USE_IRIDESCENCE
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
#endif`,ab=`#ifdef USE_BUMPMAP
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
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pb=`#define PI 3.141592653589793
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
} // validated`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vb=`vec3 transformedNormal = objectNormal;
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
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Ib=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
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
#endif`,Wb=`struct PhysicalMaterial {
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
}`,jb=`
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
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
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,$0=`#define DISTANCE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`uniform float scale;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,ay=`uniform vec3 diffuse;
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
}`,sy=`#define LAMBERT
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
}`,oy=`#define LAMBERT
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
}`,ly=`#define MATCAP
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
}`,cy=`#define MATCAP
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
}`,uy=`#define NORMAL
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
}`,dy=`#define NORMAL
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
}`,fy=`#define PHONG
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
}`,hy=`#define PHONG
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
}`,py=`#define STANDARD
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
}`,my=`#define STANDARD
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
}`,vy=`#define TOON
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
}`,gy=`#define TOON
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
}`,_y=`uniform float size;
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
}`,xy=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,yy=`uniform vec3 color;
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
}`,Sy=`uniform float rotation;
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
}`,My=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:qx,alphahash_pars_fragment:Yx,alphamap_fragment:Kx,alphamap_pars_fragment:Zx,alphatest_fragment:Jx,alphatest_pars_fragment:Qx,aomap_fragment:$x,aomap_pars_fragment:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:rb,bumpmap_pars_fragment:ab,clipping_planes_fragment:sb,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:ub,color_pars_fragment:db,color_pars_vertex:fb,color_vertex:hb,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:vb,displacementmap_pars_vertex:gb,displacementmap_vertex:_b,emissivemap_fragment:xb,emissivemap_pars_fragment:bb,colorspace_fragment:yb,colorspace_pars_fragment:Sb,envmap_fragment:Mb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:wb,envmap_pars_vertex:Tb,envmap_physical_pars_fragment:Fb,envmap_vertex:Ab,fog_vertex:Rb,fog_pars_vertex:Cb,fog_fragment:Pb,fog_pars_fragment:Lb,gradientmap_pars_fragment:Db,lightmap_fragment:Ib,lightmap_pars_fragment:Ub,lights_lambert_fragment:Nb,lights_lambert_pars_fragment:Ob,lights_pars_begin:kb,lights_toon_fragment:Bb,lights_toon_pars_fragment:zb,lights_phong_fragment:Gb,lights_phong_pars_fragment:Hb,lights_physical_fragment:Vb,lights_physical_pars_fragment:Wb,lights_fragment_begin:jb,lights_fragment_maps:Xb,lights_fragment_end:qb,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:Jb,map_fragment:Qb,map_pars_fragment:$b,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphcolor_vertex:r0,morphnormal_vertex:a0,morphtarget_pars_vertex:s0,morphtarget_vertex:o0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:u0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:g0,opaque_fragment:_0,packing:x0,premultiplied_alpha_fragment:b0,project_vertex:y0,dithering_fragment:S0,dithering_pars_fragment:M0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:I0,specularmap_fragment:U0,specularmap_pars_fragment:N0,tonemapping_fragment:O0,tonemapping_pars_fragment:k0,transmission_fragment:F0,transmission_pars_fragment:B0,uv_pars_fragment:z0,uv_pars_vertex:G0,uv_vertex:H0,worldpos_vertex:V0,background_vert:W0,background_frag:j0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:K0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:$0,equirect_vert:ey,equirect_frag:ty,linedashed_vert:ny,linedashed_frag:iy,meshbasic_vert:ry,meshbasic_frag:ay,meshlambert_vert:sy,meshlambert_frag:oy,meshmatcap_vert:ly,meshmatcap_frag:cy,meshnormal_vert:uy,meshnormal_frag:dy,meshphong_vert:fy,meshphong_frag:hy,meshphysical_vert:py,meshphysical_frag:my,meshtoon_vert:vy,meshtoon_frag:gy,points_vert:_y,points_frag:xy,shadow_vert:by,shadow_frag:yy,sprite_vert:Sy,sprite_frag:My},qe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},xi={basic:{uniforms:Cn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Cn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Cn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Cn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Cn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Cn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Cn([qe.points,qe.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Cn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Cn([qe.common,qe.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Cn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Cn([qe.sprite,qe.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Cn([qe.common,qe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Cn([qe.lights,qe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};xi.physical={uniforms:Cn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Bs={r:0,b:0,g:0};function Ey(i,e,t,n,r,a,o){const s=new Lt(0);let c=a===!0?0:1,u,d,h=null,f=0,v=null;function y(m,p){let E=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?t:e).get(b)),b===null?S(s,c):b&&b.isColor&&(S(b,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===go)?(d===void 0&&(d=new Bt(new tn(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Ma(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=b.colorSpace!==jt,(h!==b||f!==b.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,v=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new Bt(new lc(2,2),new Zi({name:"BackgroundMaterial",uniforms:Ma(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=b.colorSpace!==jt,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,v=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function S(m,p){m.getRGB(Bs,ih(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(m,p=1){s.set(m),c=p,S(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,S(s,c)},render:y}}function wy(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,s={},c=m(null);let u=c,d=!1;function h(F,V,he,X,le){let Me=!1;if(o){const j=S(X,he,V);u!==j&&(u=j,v(u.object)),Me=p(F,X,he,le),Me&&E(F,X,he,le)}else{const j=V.wireframe===!0;(u.geometry!==X.id||u.program!==he.id||u.wireframe!==j)&&(u.geometry=X.id,u.program=he.id,u.wireframe=j,Me=!0)}le!==null&&t.update(le,i.ELEMENT_ARRAY_BUFFER),(Me||d)&&(d=!1,H(F,V,he,X),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function v(F){return n.isWebGL2?i.bindVertexArray(F):a.bindVertexArrayOES(F)}function y(F){return n.isWebGL2?i.deleteVertexArray(F):a.deleteVertexArrayOES(F)}function S(F,V,he){const X=he.wireframe===!0;let le=s[F.id];le===void 0&&(le={},s[F.id]=le);let Me=le[V.id];Me===void 0&&(Me={},le[V.id]=Me);let j=Me[X];return j===void 0&&(j=m(f()),Me[X]=j),j}function m(F){const V=[],he=[],X=[];for(let le=0;le<r;le++)V[le]=0,he[le]=0,X[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:he,attributeDivisors:X,object:F,attributes:{},index:null}}function p(F,V,he,X){const le=u.attributes,Me=V.attributes;let j=0;const G=he.getAttributes();for(const ee in G)if(G[ee].location>=0){const we=le[ee];let Ue=Me[ee];if(Ue===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(Ue=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(Ue=F.instanceColor)),we===void 0||we.attribute!==Ue||Ue&&we.data!==Ue.data)return!0;j++}return u.attributesNum!==j||u.index!==X}function E(F,V,he,X){const le={},Me=V.attributes;let j=0;const G=he.getAttributes();for(const ee in G)if(G[ee].location>=0){let we=Me[ee];we===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(we=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(we=F.instanceColor));const Ue={};Ue.attribute=we,we&&we.data&&(Ue.data=we.data),le[ee]=Ue,j++}u.attributes=le,u.attributesNum=j,u.index=X}function b(){const F=u.newAttributes;for(let V=0,he=F.length;V<he;V++)F[V]=0}function T(F){A(F,0)}function A(F,V){const he=u.newAttributes,X=u.enabledAttributes,le=u.attributeDivisors;he[F]=1,X[F]===0&&(i.enableVertexAttribArray(F),X[F]=1),le[F]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,V),le[F]=V)}function L(){const F=u.newAttributes,V=u.enabledAttributes;for(let he=0,X=V.length;he<X;he++)V[he]!==F[he]&&(i.disableVertexAttribArray(he),V[he]=0)}function R(F,V,he,X,le,Me,j){j===!0?i.vertexAttribIPointer(F,V,he,le,Me):i.vertexAttribPointer(F,V,he,X,le,Me)}function H(F,V,he,X){if(n.isWebGL2===!1&&(F.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const le=X.attributes,Me=he.getAttributes(),j=V.defaultAttributeValues;for(const G in Me){const ee=Me[G];if(ee.location>=0){let Ee=le[G];if(Ee===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(Ee=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(Ee=F.instanceColor)),Ee!==void 0){const we=Ee.normalized,Ue=Ee.itemSize,Fe=t.get(Ee);if(Fe===void 0)continue;const We=Fe.buffer,Ve=Fe.type,et=Fe.bytesPerElement,mt=n.isWebGL2===!0&&(Ve===i.INT||Ve===i.UNSIGNED_INT||Ee.gpuType===Bf);if(Ee.isInterleavedBufferAttribute){const Ye=Ee.data,te=Ye.stride,ft=Ee.offset;if(Ye.isInstancedInterleavedBuffer){for(let je=0;je<ee.locationSize;je++)A(ee.location+je,Ye.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let je=0;je<ee.locationSize;je++)T(ee.location+je);i.bindBuffer(i.ARRAY_BUFFER,We);for(let je=0;je<ee.locationSize;je++)R(ee.location+je,Ue/ee.locationSize,Ve,we,te*et,(ft+Ue/ee.locationSize*je)*et,mt)}else{if(Ee.isInstancedBufferAttribute){for(let Ye=0;Ye<ee.locationSize;Ye++)A(ee.location+Ye,Ee.meshPerAttribute);F.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ye=0;Ye<ee.locationSize;Ye++)T(ee.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Ye=0;Ye<ee.locationSize;Ye++)R(ee.location+Ye,Ue/ee.locationSize,Ve,we,Ue*et,Ue/ee.locationSize*Ye*et,mt)}}else if(j!==void 0){const we=j[G];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv(ee.location,we);break;case 3:i.vertexAttrib3fv(ee.location,we);break;case 4:i.vertexAttrib4fv(ee.location,we);break;default:i.vertexAttrib1fv(ee.location,we)}}}}L()}function x(){B();for(const F in s){const V=s[F];for(const he in V){const X=V[he];for(const le in X)y(X[le].object),delete X[le];delete V[he]}delete s[F]}}function w(F){if(s[F.id]===void 0)return;const V=s[F.id];for(const he in V){const X=V[he];for(const le in X)y(X[le].object),delete X[le];delete V[he]}delete s[F.id]}function Z(F){for(const V in s){const he=s[V];if(he[F.id]===void 0)continue;const X=he[F.id];for(const le in X)y(X[le].object),delete X[le];delete he[F.id]}}function B(){O(),d=!0,u!==c&&(u=c,v(u.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:B,resetDefaultState:O,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:Z,initAttributes:b,enableAttribute:T,disableUnusedAttributes:L}}function Ty(i,e,t,n){const r=n.isWebGL2;let a;function o(u){a=u}function s(u,d){i.drawArrays(a,u,d),t.update(d,a,1)}function c(u,d,h){if(h===0)return;let f,v;if(r)f=i,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](a,u,d,h),t.update(d,a,h)}this.setMode=o,this.render=s,this.renderInstances=c}function Ay(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const c=a(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,T=o||e.has("OES_texture_float"),A=b&&T,L=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:L}}function Ry(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new ar,s=new Et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const v=h.length!==0||f||n!==0||r;return r=f,n=h.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,v){const y=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||y===null||y.length===0||a&&!m)a?d(null):u();else{const E=a?0:n,b=E*4;let T=p.clippingState||null;c.value=T,T=d(y,f,b,v);for(let A=0;A!==b;++A)T[A]=t[A];p.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,v,y){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=c.value,y!==!0||m===null){const p=v+S*4,E=f.matrixWorldInverse;s.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,T=v;b!==S;++b,T+=4)o.copy(h[b]).applyMatrix4(E,s),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Cy(i){let e=new WeakMap;function t(o,s){return s===so?o.mapping=xa:s===Pl&&(o.mapping=ba),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===so||s===Pl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Vx(c.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class lh extends ah{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ra=4,Wu=[.125,.215,.35,.446,.526,.582],br=20,al=new lh,ju=new Lt;let sl=null;const _r=(1+Math.sqrt(5))/2,Qr=1/_r,Xu=[new re(1,1,1),new re(-1,1,1),new re(1,1,-1),new re(-1,1,-1),new re(0,_r,Qr),new re(0,_r,-Qr),new re(Qr,0,_r),new re(-Qr,0,_r),new re(_r,Qr,0),new re(-_r,Qr,0)];class qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){sl=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl),e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xa||e.mapping===ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:ya,format:li,colorSpace:Ri,depthBuffer:!1},r=Yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Py(a)),this._blurMaterial=Ly(a,e,t)}return r}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,al)}_sceneToCubeUV(e,t,n,r){const s=new Vn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ju),d.toneMapping=lr,d.autoClear=!1;const v=new eh({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new Bt(new tn,v);let S=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,S=!0):(v.color.copy(ju),S=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(s.up.set(0,c[p],0),s.lookAt(u[p],0,0)):E===1?(s.up.set(0,0,c[p]),s.lookAt(0,u[p],0)):(s.up.set(0,c[p],0),s.lookAt(0,0,u[p]));const b=this._cubeSize;zs(r,E*b,p>2?b:0,b,b),d.setRenderTarget(r),S&&d.render(y,s),d.render(e,s)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===xa||e.mapping===ba;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;zs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,al)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xu[(r-1)%Xu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Bt(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*br-1),S=a/y,m=isFinite(a)?1+Math.floor(d*S):br;m>br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let E=0;for(let R=0;R<br;++R){const H=R/S,x=Math.exp(-H*H/2);p.push(x),R===0?E+=x:R<m&&(E+=2*x)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:b}=this;f.dTheta.value=y,f.mipInt.value=b-n;const T=this._sizeLods[r],A=3*T*(r>b-ra?r-b+ra:0),L=4*(this._cubeSize-T);zs(t,A,L,3*T,2*T),c.setRenderTarget(t),c.render(h,al)}}function Py(i){const e=[],t=[],n=[];let r=i;const a=i-ra+1+Wu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>i-ra?c=Wu[o-i+ra-1]:o===0&&(c=0),n.push(c);const u=1/(s-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,y=6,S=3,m=2,p=1,E=new Float32Array(S*y*v),b=new Float32Array(m*y*v),T=new Float32Array(p*y*v);for(let L=0;L<v;L++){const R=L%3*2/3-1,H=L>2?0:-1,x=[R,H,0,R+2/3,H,0,R+2/3,H+1,0,R,H,0,R+2/3,H+1,0,R,H+1,0];E.set(x,S*y*L),b.set(f,m*y*L);const w=[L,L,L,L,L,L];T.set(w,p*y*L)}const A=new Qi;A.setAttribute("position",new pi(E,S)),A.setAttribute("uv",new pi(b,m)),A.setAttribute("faceIndex",new pi(T,p)),e.push(A),r>ra&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yu(i,e,t){const n=new Ki(i,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ly(i,e,t){const n=new Float32Array(br),r=new re(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ku(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Zu(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

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
	`}function Dy(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,u=c===so||c===Pl,d=c===xa||c===ba;if(u||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new qu(i)),h=u?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(u&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new qu(i));const f=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let c=0;const u=6;for(let d=0;d<u;d++)s[d]!==void 0&&c++;return c===u}function a(s){const c=s.target;c.removeEventListener("dispose",a);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Iy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Uy(i,e,t,n){const r={},a=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const S=f.morphAttributes[y];for(let m=0,p=S.length;m<p;m++)e.remove(S[m])}f.removeEventListener("dispose",o),delete r[f.id];const v=a.get(f);v&&(e.remove(v),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const y in f)e.update(f[y],i.ARRAY_BUFFER);const v=h.morphAttributes;for(const y in v){const S=v[y];for(let m=0,p=S.length;m<p;m++)e.update(S[m],i.ARRAY_BUFFER)}}function u(h){const f=[],v=h.index,y=h.attributes.position;let S=0;if(v!==null){const E=v.array;S=v.version;for(let b=0,T=E.length;b<T;b+=3){const A=E[b+0],L=E[b+1],R=E[b+2];f.push(A,L,L,R,R,A)}}else if(y!==void 0){const E=y.array;S=y.version;for(let b=0,T=E.length/3-1;b<T;b+=3){const A=b+0,L=b+1,R=b+2;f.push(A,L,L,R,R,A)}}else return;const m=new(qf(f)?nh:th)(f,1);m.version=S;const p=a.get(h);p&&e.remove(p),a.set(h,m)}function d(h){const f=a.get(h);if(f){const v=h.index;v!==null&&f.version<v.version&&u(h)}else u(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function Ny(i,e,t,n){const r=n.isWebGL2;let a;function o(f){a=f}let s,c;function u(f){s=f.type,c=f.bytesPerElement}function d(f,v){i.drawElements(a,v,s,f*c),t.update(v,a,1)}function h(f,v,y){if(y===0)return;let S,m;if(r)S=i,m="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[m](a,v,s,f*c,y),t.update(v,a,y)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h}function Oy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ky(i,e){return i[0]-e[0]}function Fy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function By(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,o=new Xt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function c(u,d,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=y!==void 0?y.length:0;let m=a.get(d);if(m===void 0||m.count!==S){let V=function(){O.dispose(),a.delete(d),d.removeEventListener("dispose",V)};var v=V;m!==void 0&&m.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],H=d.morphAttributes.color||[];let x=0;b===!0&&(x=1),T===!0&&(x=2),A===!0&&(x=3);let w=d.attributes.position.count*x,Z=1;w>e.maxTextureSize&&(Z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const B=new Float32Array(w*Z*4*S),O=new Zf(B,w,Z,S);O.type=Vi,O.needsUpdate=!0;const F=x*4;for(let he=0;he<S;he++){const X=L[he],le=R[he],Me=H[he],j=w*Z*4*he;for(let G=0;G<X.count;G++){const ee=G*F;b===!0&&(o.fromBufferAttribute(X,G),B[j+ee+0]=o.x,B[j+ee+1]=o.y,B[j+ee+2]=o.z,B[j+ee+3]=0),T===!0&&(o.fromBufferAttribute(le,G),B[j+ee+4]=o.x,B[j+ee+5]=o.y,B[j+ee+6]=o.z,B[j+ee+7]=0),A===!0&&(o.fromBufferAttribute(Me,G),B[j+ee+8]=o.x,B[j+ee+9]=o.y,B[j+ee+10]=o.z,B[j+ee+11]=Me.itemSize===4?o.w:1)}}m={count:S,texture:O,size:new at(w,Z)},a.set(d,m),d.addEventListener("dispose",V)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];const E=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const y=f===void 0?0:f.length;let S=n[d.id];if(S===void 0||S.length!==y){S=[];for(let T=0;T<y;T++)S[T]=[T,0];n[d.id]=S}for(let T=0;T<y;T++){const A=S[T];A[0]=T,A[1]=f[T]}S.sort(Fy);for(let T=0;T<8;T++)T<y&&S[T][1]?(s[T][0]=S[T][0],s[T][1]=S[T][1]):(s[T][0]=Number.MAX_SAFE_INTEGER,s[T][1]=0);s.sort(ky);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let E=0;for(let T=0;T<8;T++){const A=s[T],L=A[0],R=A[1];L!==Number.MAX_SAFE_INTEGER&&R?(m&&d.getAttribute("morphTarget"+T)!==m[L]&&d.setAttribute("morphTarget"+T,m[L]),p&&d.getAttribute("morphNormal"+T)!==p[L]&&d.setAttribute("morphNormal"+T,p[L]),r[T]=R,E+=R):(m&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),p&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),r[T]=0)}const b=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function zy(i,e,t,n){let r=new WeakMap;function a(c){const u=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const ch=new En,uh=new Zf,dh=new Ax,fh=new sh,Ju=[],Qu=[],$u=new Float32Array(16),ed=new Float32Array(9),td=new Float32Array(4);function La(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ju[r];if(a===void 0&&(a=new Float32Array(r),Ju[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bo(i,e){let t=Qu[e];t===void 0&&(t=new Int32Array(e),Qu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function Vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function Wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function jy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,n))return;td.set(n),i.uniformMatrix2fv(this.addr,!1,td),pn(t,n)}}function Xy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,n))return;ed.set(n),i.uniformMatrix3fv(this.addr,!1,ed),pn(t,n)}}function qy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),pn(t,n)}}function Yy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ky(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function Zy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function Jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function Qy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function e1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function t1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function n1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||ch,r)}function i1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||dh,r)}function r1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fh,r)}function a1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||uh,r)}function s1(i){switch(i){case 5126:return Gy;case 35664:return Hy;case 35665:return Vy;case 35666:return Wy;case 35674:return jy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return Ky;case 35668:case 35672:return Zy;case 35669:case 35673:return Jy;case 5125:return Qy;case 36294:return $y;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return a1}}function o1(i,e){i.uniform1fv(this.addr,e)}function l1(i,e){const t=La(e,this.size,2);i.uniform2fv(this.addr,t)}function c1(i,e){const t=La(e,this.size,3);i.uniform3fv(this.addr,t)}function u1(i,e){const t=La(e,this.size,4);i.uniform4fv(this.addr,t)}function d1(i,e){const t=La(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f1(i,e){const t=La(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function h1(i,e){const t=La(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p1(i,e){i.uniform1iv(this.addr,e)}function m1(i,e){i.uniform2iv(this.addr,e)}function v1(i,e){i.uniform3iv(this.addr,e)}function g1(i,e){i.uniform4iv(this.addr,e)}function _1(i,e){i.uniform1uiv(this.addr,e)}function x1(i,e){i.uniform2uiv(this.addr,e)}function b1(i,e){i.uniform3uiv(this.addr,e)}function y1(i,e){i.uniform4uiv(this.addr,e)}function S1(i,e,t){const n=this.cache,r=e.length,a=bo(t,r);hn(n,a)||(i.uniform1iv(this.addr,a),pn(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ch,a[o])}function M1(i,e,t){const n=this.cache,r=e.length,a=bo(t,r);hn(n,a)||(i.uniform1iv(this.addr,a),pn(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dh,a[o])}function E1(i,e,t){const n=this.cache,r=e.length,a=bo(t,r);hn(n,a)||(i.uniform1iv(this.addr,a),pn(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||fh,a[o])}function w1(i,e,t){const n=this.cache,r=e.length,a=bo(t,r);hn(n,a)||(i.uniform1iv(this.addr,a),pn(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||uh,a[o])}function T1(i){switch(i){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return d1;case 35675:return f1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return v1;case 35669:case 35673:return g1;case 5125:return _1;case 36294:return x1;case 36295:return b1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return w1}}class A1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=s1(t.type)}}class R1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=T1(t.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function nd(i,e){i.seq.push(e),i.map[e.id]=e}function P1(i,e,t){const n=i.name,r=n.length;for(ol.lastIndex=0;;){const a=ol.exec(n),o=ol.lastIndex;let s=a[1];const c=a[2]==="]",u=a[3];if(c&&(s=s|0),u===void 0||u==="["&&o+2===r){nd(t,u===void 0?new A1(s,i,e):new R1(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new C1(s),nd(t,h)),t=h}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);P1(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function id(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let L1=0;function D1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function I1(i){switch(i){case Ri:return["Linear","( value )"];case jt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function rd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+D1(i.getShaderSource(e),o)}else return r}function U1(i,e){const t=I1(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function N1(i,e){let t;switch(e){case H_:t="Linear";break;case V_:t="Reinhard";break;case W_:t="OptimizedCineon";break;case j_:t="ACESFilmic";break;case X_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qa).join(`
`)}function k1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function qa(i){return i!==""}function ad(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(i){return i.replace(B1,G1)}const z1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function G1(i,e){let t=Mt[e];if(t===void 0){const n=z1.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(i){return i.replace(H1,V1)}function V1(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ld(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function j1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xa:case ba:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ba&&(e="ENVMAP_MODE_REFRACTION"),e}function q1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kf:e="ENVMAP_BLENDING_MULTIPLY";break;case z_:e="ENVMAP_BLENDING_MIX";break;case G_:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K1(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=W1(t),u=j1(t),d=X1(t),h=q1(t),f=Y1(t),v=t.isWebGL2?"":O1(t),y=k1(a),S=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(qa).join(`
`),m.length>0&&(m+=`
`),p=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(qa).join(`
`),p.length>0&&(p+=`
`)):(m=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),p=[v,ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Mt.tonemapping_pars_fragment:"",t.toneMapping!==lr?N1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,U1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),o=kl(o),o=ad(o,t),o=sd(o,t),s=kl(s),s=ad(s,t),s=sd(s,t),o=od(o),s=od(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+o,T=E+p+s,A=id(r,r.VERTEX_SHADER,b),L=id(r,r.FRAGMENT_SHADER,T);if(r.attachShader(S,A),r.attachShader(S,L),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),i.debug.checkShaderErrors){const x=r.getProgramInfoLog(S).trim(),w=r.getShaderInfoLog(A).trim(),Z=r.getShaderInfoLog(L).trim();let B=!0,O=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,A,L);else{const F=rd(r,A,"vertex"),V=rd(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+F+`
`+V)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(w===""||Z==="")&&(O=!1);O&&(this.diagnostics={runnable:B,programLog:x,vertexShader:{log:w,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(A),r.deleteShader(L);let R;this.getUniforms=function(){return R===void 0&&(R=new Js(r,S)),R};let H;return this.getAttributes=function(){return H===void 0&&(H=F1(r,S)),H},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=L,this}let Z1=0;class J1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q1(e),t.set(e,n)),n}}class Q1{constructor(e){this.id=Z1++,this.code=e,this.usedTimes=0}}function $1(i,e,t,n,r,a,o){const s=new Qf,c=new J1,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return x===0?"uv":`uv${x}`}function m(x,w,Z,B,O){const F=B.fog,V=O.geometry,he=x.isMeshStandardMaterial?B.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||he),le=X&&X.mapping===go?X.image.height:null,Me=y[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,G=j!==void 0?j.length:0;let ee=0;V.morphAttributes.position!==void 0&&(ee=1),V.morphAttributes.normal!==void 0&&(ee=2),V.morphAttributes.color!==void 0&&(ee=3);let Ee,we,Ue,Fe;if(Me){const nt=xi[Me];Ee=nt.vertexShader,we=nt.fragmentShader}else Ee=x.vertexShader,we=x.fragmentShader,c.update(x),Ue=c.getVertexShaderID(x),Fe=c.getFragmentShaderID(x);const We=i.getRenderTarget(),Ve=O.isInstancedMesh===!0,et=!!x.map,mt=!!x.matcap,Ye=!!X,te=!!x.aoMap,ft=!!x.lightMap,je=!!x.bumpMap,de=!!x.normalMap,Re=!!x.displacementMap,Xe=!!x.emissiveMap,ye=!!x.metalnessMap,Oe=!!x.roughnessMap,pe=x.anisotropy>0,Ge=x.clearcoat>0,He=x.iridescence>0,P=x.sheen>0,_=x.transmission>0,U=pe&&!!x.anisotropyMap,q=Ge&&!!x.clearcoatMap,Q=Ge&&!!x.clearcoatNormalMap,be=Ge&&!!x.clearcoatRoughnessMap,Ne=He&&!!x.iridescenceMap,Te=He&&!!x.iridescenceThicknessMap,Y=P&&!!x.sheenColorMap,C=P&&!!x.sheenRoughnessMap,oe=!!x.specularMap,me=!!x.specularColorMap,z=!!x.specularIntensityMap,ne=_&&!!x.transmissionMap,Ae=_&&!!x.thicknessMap,Be=!!x.gradientMap,N=!!x.alphaMap,Pe=x.alphaTest>0,se=!!x.alphaHash,Se=!!x.extensions,ve=!!V.attributes.uv1,Le=!!V.attributes.uv2,ke=!!V.attributes.uv3;let Ze=lr;return x.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:d,shaderID:Me,shaderType:x.type,shaderName:x.name,vertexShader:Ee,fragmentShader:we,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:Fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,instancing:Ve,instancingColor:Ve&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:We===null?i.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Ri,map:et,matcap:mt,envMap:Ye,envMapMode:Ye&&X.mapping,envMapCubeUVHeight:le,aoMap:te,lightMap:ft,bumpMap:je,normalMap:de,displacementMap:f&&Re,emissiveMap:Xe,normalMapObjectSpace:de&&x.normalMapType===ax,normalMapTangentSpace:de&&x.normalMapType===Xf,metalnessMap:ye,roughnessMap:Oe,anisotropy:pe,anisotropyMap:U,clearcoat:Ge,clearcoatMap:q,clearcoatNormalMap:Q,clearcoatRoughnessMap:be,iridescence:He,iridescenceMap:Ne,iridescenceThicknessMap:Te,sheen:P,sheenColorMap:Y,sheenRoughnessMap:C,specularMap:oe,specularColorMap:me,specularIntensityMap:z,transmission:_,transmissionMap:ne,thicknessMap:Ae,gradientMap:Be,opaque:x.transparent===!1&&x.blending===ua,alphaMap:N,alphaTest:Pe,alphaHash:se,combine:x.combine,mapUv:et&&S(x.map.channel),aoMapUv:te&&S(x.aoMap.channel),lightMapUv:ft&&S(x.lightMap.channel),bumpMapUv:je&&S(x.bumpMap.channel),normalMapUv:de&&S(x.normalMap.channel),displacementMapUv:Re&&S(x.displacementMap.channel),emissiveMapUv:Xe&&S(x.emissiveMap.channel),metalnessMapUv:ye&&S(x.metalnessMap.channel),roughnessMapUv:Oe&&S(x.roughnessMap.channel),anisotropyMapUv:U&&S(x.anisotropyMap.channel),clearcoatMapUv:q&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:Q&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:C&&S(x.sheenRoughnessMap.channel),specularMapUv:oe&&S(x.specularMap.channel),specularColorMapUv:me&&S(x.specularColorMap.channel),specularIntensityMapUv:z&&S(x.specularIntensityMap.channel),transmissionMapUv:ne&&S(x.transmissionMap.channel),thicknessMapUv:Ae&&S(x.thicknessMap.channel),alphaMapUv:N&&S(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(de||pe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:Le,vertexUv3s:ke,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(et||N),fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:et&&x.map.isVideoTexture===!0&&x.map.colorSpace===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Se&&x.extensions.derivatives===!0,extensionFragDepth:Se&&x.extensions.fragDepth===!0,extensionDrawBuffers:Se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Z in x.defines)w.push(Z),w.push(x.defines[Z]);return x.isRawShaderMaterial===!1&&(E(w,x),b(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function E(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),x.push(s.mask)}function T(x){const w=y[x.type];let Z;if(w){const B=xi[w];Z=rh.clone(B.uniforms)}else Z=x.uniforms;return Z}function A(x,w){let Z;for(let B=0,O=u.length;B<O;B++){const F=u[B];if(F.cacheKey===w){Z=F,++Z.usedTimes;break}}return Z===void 0&&(Z=new K1(i,w,x,a),u.push(Z)),Z}function L(x){if(--x.usedTimes===0){const w=u.indexOf(x);u[w]=u[u.length-1],u.pop(),x.destroy()}}function R(x){c.remove(x)}function H(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:A,releaseProgram:L,releaseShaderCache:R,programs:u,dispose:H}}function eS(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function tS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ud(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,v,y,S,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:v,groupOrder:y,renderOrder:h.renderOrder,z:S,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=v,p.groupOrder=y,p.renderOrder=h.renderOrder,p.z=S,p.group=m),e++,p}function s(h,f,v,y,S,m){const p=o(h,f,v,y,S,m);v.transmission>0?n.push(p):v.transparent===!0?r.push(p):t.push(p)}function c(h,f,v,y,S,m){const p=o(h,f,v,y,S,m);v.transmission>0?n.unshift(p):v.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,f){t.length>1&&t.sort(h||tS),n.length>1&&n.sort(f||cd),r.length>1&&r.sort(f||cd)}function d(){for(let h=e,f=i.length;h<f;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:c,finish:d,sort:u}}function nS(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new ud,i.set(n,[o])):r>=a.length?(o=new ud,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function iS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Lt};break;case"SpotLight":t={position:new re,direction:new re,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new re,halfWidth:new re,halfHeight:new re};break}return i[e.id]=t,t}}}function rS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let aS=0;function sS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function oS(i,e){const t=new iS,n=rS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new re);const a=new re,o=new rn,s=new rn;function c(d,h){let f=0,v=0,y=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let S=0,m=0,p=0,E=0,b=0,T=0,A=0,L=0,R=0,H=0;d.sort(sS);const x=h===!0?Math.PI:1;for(let Z=0,B=d.length;Z<B;Z++){const O=d[Z],F=O.color,V=O.intensity,he=O.distance,X=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=F.r*V*x,v+=F.g*V*x,y+=F.b*V*x;else if(O.isLightProbe)for(let le=0;le<9;le++)r.probe[le].addScaledVector(O.sh.coefficients[le],V);else if(O.isDirectionalLight){const le=t.get(O);if(le.color.copy(O.color).multiplyScalar(O.intensity*x),O.castShadow){const Me=O.shadow,j=n.get(O);j.shadowBias=Me.bias,j.shadowNormalBias=Me.normalBias,j.shadowRadius=Me.radius,j.shadowMapSize=Me.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=X,r.directionalShadowMatrix[S]=O.shadow.matrix,T++}r.directional[S]=le,S++}else if(O.isSpotLight){const le=t.get(O);le.position.setFromMatrixPosition(O.matrixWorld),le.color.copy(F).multiplyScalar(V*x),le.distance=he,le.coneCos=Math.cos(O.angle),le.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),le.decay=O.decay,r.spot[p]=le;const Me=O.shadow;if(O.map&&(r.spotLightMap[R]=O.map,R++,Me.updateMatrices(O),O.castShadow&&H++),r.spotLightMatrix[p]=Me.matrix,O.castShadow){const j=n.get(O);j.shadowBias=Me.bias,j.shadowNormalBias=Me.normalBias,j.shadowRadius=Me.radius,j.shadowMapSize=Me.mapSize,r.spotShadow[p]=j,r.spotShadowMap[p]=X,L++}p++}else if(O.isRectAreaLight){const le=t.get(O);le.color.copy(F).multiplyScalar(V),le.halfWidth.set(O.width*.5,0,0),le.halfHeight.set(0,O.height*.5,0),r.rectArea[E]=le,E++}else if(O.isPointLight){const le=t.get(O);if(le.color.copy(O.color).multiplyScalar(O.intensity*x),le.distance=O.distance,le.decay=O.decay,O.castShadow){const Me=O.shadow,j=n.get(O);j.shadowBias=Me.bias,j.shadowNormalBias=Me.normalBias,j.shadowRadius=Me.radius,j.shadowMapSize=Me.mapSize,j.shadowCameraNear=Me.camera.near,j.shadowCameraFar=Me.camera.far,r.pointShadow[m]=j,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=O.shadow.matrix,A++}r.point[m]=le,m++}else if(O.isHemisphereLight){const le=t.get(O);le.skyColor.copy(O.color).multiplyScalar(V*x),le.groundColor.copy(O.groundColor).multiplyScalar(V*x),r.hemi[b]=le,b++}}E>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=y;const w=r.hash;(w.directionalLength!==S||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==E||w.hemiLength!==b||w.numDirectionalShadows!==T||w.numPointShadows!==A||w.numSpotShadows!==L||w.numSpotMaps!==R)&&(r.directional.length=S,r.spot.length=p,r.rectArea.length=E,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=L+R-H,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=H,w.directionalLength=S,w.pointLength=m,w.spotLength=p,w.rectAreaLength=E,w.hemiLength=b,w.numDirectionalShadows=T,w.numPointShadows=A,w.numSpotShadows=L,w.numSpotMaps=R,r.version=aS++)}function u(d,h){let f=0,v=0,y=0,S=0,m=0;const p=h.matrixWorldInverse;for(let E=0,b=d.length;E<b;E++){const T=d[E];if(T.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(p),f++}else if(T.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(p),y++}else if(T.isRectAreaLight){const A=r.rectArea[S];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),s.identity(),o.copy(T.matrixWorld),o.premultiply(p),s.extractRotation(o),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),S++}else if(T.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),v++}else if(T.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:u,state:r}}function dd(i,e){const t=new oS(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function o(h){n.push(h)}function s(h){r.push(h)}function c(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:s}}function lS(i,e){let t=new WeakMap;function n(a,o=0){const s=t.get(a);let c;return s===void 0?(c=new dd(i,e),t.set(a,[c])):o>=s.length?(c=new dd(i,e),s.push(c)):c=s[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class cS extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uS extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fS=`uniform sampler2D shadow_pass;
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
}`;function hS(i,e,t){let n=new oc;const r=new at,a=new at,o=new Xt,s=new cS({depthPacking:rx}),c=new uS,u={},d=t.maxTextureSize,h={[Ai]:kn,[kn]:Ai,[ni]:ni},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:dS,fragmentShader:fS}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const y=new Qi;y.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Bt(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let p=this.type;this.render=function(A,L,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const H=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Xi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const B=p!==Bi&&this.type===Bi,O=p===Bi&&this.type!==Bi;for(let F=0,V=A.length;F<V;F++){const he=A[F],X=he.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const le=X.getFrameExtents();if(r.multiply(le),a.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/le.x),r.x=a.x*le.x,X.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/le.y),r.y=a.y*le.y,X.mapSize.y=a.y)),X.map===null||B===!0||O===!0){const j=this.type!==Bi?{minFilter:Zt,magFilter:Zt}:{};X.map!==null&&X.map.dispose(),X.map=new Ki(r.x,r.y,j),X.map.texture.name=he.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const Me=X.getViewportCount();for(let j=0;j<Me;j++){const G=X.getViewport(j);o.set(a.x*G.x,a.y*G.y,a.x*G.z,a.y*G.w),Z.viewport(o),X.updateMatrices(he,j),n=X.getFrustum(),T(L,R,X.camera,he,this.type)}X.isPointLightShadow!==!0&&this.type===Bi&&E(X,R),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(H,x,w)};function E(A,L){const R=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ki(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(L,null,R,f,S,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(L,null,R,v,S,null)}function b(A,L,R,H){let x=null;const w=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)x=w;else if(x=R.isPointLight===!0?c:s,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Z=x.uuid,B=L.uuid;let O=u[Z];O===void 0&&(O={},u[Z]=O);let F=O[B];F===void 0&&(F=x.clone(),O[B]=F),x=F}if(x.visible=L.visible,x.wireframe=L.wireframe,H===Bi?x.side=L.shadowSide!==null?L.shadowSide:L.side:x.side=L.shadowSide!==null?L.shadowSide:h[L.side],x.alphaMap=L.alphaMap,x.alphaTest=L.alphaTest,x.map=L.map,x.clipShadows=L.clipShadows,x.clippingPlanes=L.clippingPlanes,x.clipIntersection=L.clipIntersection,x.displacementMap=L.displacementMap,x.displacementScale=L.displacementScale,x.displacementBias=L.displacementBias,x.wireframeLinewidth=L.wireframeLinewidth,x.linewidth=L.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Z=i.properties.get(x);Z.light=R}return x}function T(A,L,R,H,x){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Bi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const B=e.update(A),O=A.material;if(Array.isArray(O)){const F=B.groups;for(let V=0,he=F.length;V<he;V++){const X=F[V],le=O[X.materialIndex];if(le&&le.visible){const Me=b(A,le,H,x);i.renderBufferDirect(R,null,B,Me,A,X)}}}else if(O.visible){const F=b(A,O,H,x);i.renderBufferDirect(R,null,B,F,A,null)}}const Z=A.children;for(let B=0,O=Z.length;B<O;B++)T(Z[B],L,R,H,x)}}function pS(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const Pe=new Xt;let se=null;const Se=new Xt(0,0,0,0);return{setMask:function(ve){se!==ve&&!N&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){N=ve},setClear:function(ve,Le,ke,Ze,ht){ht===!0&&(ve*=Ze,Le*=Ze,ke*=Ze),Pe.set(ve,Le,ke,Ze),Se.equals(Pe)===!1&&(i.clearColor(ve,Le,ke,Ze),Se.copy(Pe))},reset:function(){N=!1,se=null,Se.set(-1,0,0,0)}}}function a(){let N=!1,Pe=null,se=null,Se=null;return{setTest:function(ve){ve?We(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(ve){Pe!==ve&&!N&&(i.depthMask(ve),Pe=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case I_:i.depthFunc(i.NEVER);break;case U_:i.depthFunc(i.ALWAYS);break;case N_:i.depthFunc(i.LESS);break;case Cl:i.depthFunc(i.LEQUAL);break;case O_:i.depthFunc(i.EQUAL);break;case k_:i.depthFunc(i.GEQUAL);break;case F_:i.depthFunc(i.GREATER);break;case B_:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){N=ve},setClear:function(ve){Se!==ve&&(i.clearDepth(ve),Se=ve)},reset:function(){N=!1,Pe=null,se=null,Se=null}}}function o(){let N=!1,Pe=null,se=null,Se=null,ve=null,Le=null,ke=null,Ze=null,ht=null;return{setTest:function(nt){N||(nt?We(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(nt){Pe!==nt&&!N&&(i.stencilMask(nt),Pe=nt)},setFunc:function(nt,_t,pt){(se!==nt||Se!==_t||ve!==pt)&&(i.stencilFunc(nt,_t,pt),se=nt,Se=_t,ve=pt)},setOp:function(nt,_t,pt){(Le!==nt||ke!==_t||Ze!==pt)&&(i.stencilOp(nt,_t,pt),Le=nt,ke=_t,Ze=pt)},setLocked:function(nt){N=nt},setClear:function(nt){ht!==nt&&(i.clearStencil(nt),ht=nt)},reset:function(){N=!1,Pe=null,se=null,Se=null,ve=null,Le=null,ke=null,Ze=null,ht=null}}}const s=new r,c=new a,u=new o,d=new WeakMap,h=new WeakMap;let f={},v={},y=new WeakMap,S=[],m=null,p=!1,E=null,b=null,T=null,A=null,L=null,R=null,H=null,x=!1,w=null,Z=null,B=null,O=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,X=0;const le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(le)[1]),he=X>=1):le.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),he=X>=2);let Me=null,j={};const G=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),Ee=new Xt().fromArray(G),we=new Xt().fromArray(ee);function Ue(N,Pe,se,Se){const ve=new Uint8Array(4),Le=i.createTexture();i.bindTexture(N,Le),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<se;ke++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(Pe,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(Pe+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return Le}const Fe={};Fe[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Fe[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),u.setClear(0),We(i.DEPTH_TEST),c.setFunc(Cl),Re(!1),Xe(Zc),We(i.CULL_FACE),je(Xi);function We(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function Ve(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function et(N,Pe){return v[N]!==Pe?(i.bindFramebuffer(N,Pe),v[N]=Pe,n&&(N===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Pe),N===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function mt(N,Pe){let se=S,Se=!1;if(N)if(se=y.get(Pe),se===void 0&&(se=[],y.set(Pe,se)),N.isWebGLMultipleRenderTargets){const ve=N.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,ke=ve.length;Le<ke;Le++)se[Le]=i.COLOR_ATTACHMENT0+Le;se.length=ve.length,Se=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,Se=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,Se=!0);Se&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Ye(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const te={[ia]:i.FUNC_ADD,[S_]:i.FUNC_SUBTRACT,[M_]:i.FUNC_REVERSE_SUBTRACT};if(n)te[eu]=i.MIN,te[tu]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(te[eu]=N.MIN_EXT,te[tu]=N.MAX_EXT)}const ft={[E_]:i.ZERO,[w_]:i.ONE,[T_]:i.SRC_COLOR,[Nf]:i.SRC_ALPHA,[D_]:i.SRC_ALPHA_SATURATE,[P_]:i.DST_COLOR,[R_]:i.DST_ALPHA,[A_]:i.ONE_MINUS_SRC_COLOR,[Of]:i.ONE_MINUS_SRC_ALPHA,[L_]:i.ONE_MINUS_DST_COLOR,[C_]:i.ONE_MINUS_DST_ALPHA};function je(N,Pe,se,Se,ve,Le,ke,Ze){if(N===Xi){p===!0&&(Ve(i.BLEND),p=!1);return}if(p===!1&&(We(i.BLEND),p=!0),N!==y_){if(N!==E||Ze!==x){if((b!==ia||L!==ia)&&(i.blendEquation(i.FUNC_ADD),b=ia,L=ia),Ze)switch(N){case ua:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jc:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ua:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,A=null,R=null,H=null,E=N,x=Ze}return}ve=ve||Pe,Le=Le||se,ke=ke||Se,(Pe!==b||ve!==L)&&(i.blendEquationSeparate(te[Pe],te[ve]),b=Pe,L=ve),(se!==T||Se!==A||Le!==R||ke!==H)&&(i.blendFuncSeparate(ft[se],ft[Se],ft[Le],ft[ke]),T=se,A=Se,R=Le,H=ke),E=N,x=!1}function de(N,Pe){N.side===ni?Ve(i.CULL_FACE):We(i.CULL_FACE);let se=N.side===kn;Pe&&(se=!se),Re(se),N.blending===ua&&N.transparent===!1?je(Xi):je(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),s.setMask(N.colorWrite);const Se=N.stencilWrite;u.setTest(Se),Se&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?We(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(N){w!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),w=N)}function Xe(N){N!==__?(We(i.CULL_FACE),N!==Z&&(N===Zc?i.cullFace(i.BACK):N===x_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),Z=N}function ye(N){N!==B&&(he&&i.lineWidth(N),B=N)}function Oe(N,Pe,se){N?(We(i.POLYGON_OFFSET_FILL),(O!==Pe||F!==se)&&(i.polygonOffset(Pe,se),O=Pe,F=se)):Ve(i.POLYGON_OFFSET_FILL)}function pe(N){N?We(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function Ge(N){N===void 0&&(N=i.TEXTURE0+V-1),Me!==N&&(i.activeTexture(N),Me=N)}function He(N,Pe,se){se===void 0&&(Me===null?se=i.TEXTURE0+V-1:se=Me);let Se=j[se];Se===void 0&&(Se={type:void 0,texture:void 0},j[se]=Se),(Se.type!==N||Se.texture!==Pe)&&(Me!==se&&(i.activeTexture(se),Me=se),i.bindTexture(N,Pe||Fe[N]),Se.type=N,Se.texture=Pe)}function P(){const N=j[Me];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function C(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(N){Ee.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ee.copy(N))}function z(N){we.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),we.copy(N))}function ne(N,Pe){let se=h.get(Pe);se===void 0&&(se=new WeakMap,h.set(Pe,se));let Se=se.get(N);Se===void 0&&(Se=i.getUniformBlockIndex(Pe,N.name),se.set(N,Se))}function Ae(N,Pe){const Se=h.get(Pe).get(N);d.get(Pe)!==Se&&(i.uniformBlockBinding(Pe,Se,N.__bindingPointIndex),d.set(Pe,Se))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Me=null,j={},v={},y=new WeakMap,S=[],m=null,p=!1,E=null,b=null,T=null,A=null,L=null,R=null,H=null,x=!1,w=null,Z=null,B=null,O=null,F=null,Ee.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),s.reset(),c.reset(),u.reset()}return{buffers:{color:s,depth:c,stencil:u},enable:We,disable:Ve,bindFramebuffer:et,drawBuffers:mt,useProgram:Ye,setBlending:je,setMaterial:de,setFlipSided:Re,setCullFace:Xe,setLineWidth:ye,setPolygonOffset:Oe,setScissorTest:pe,activeTexture:Ge,bindTexture:He,unbindTexture:P,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:C,texImage3D:oe,updateUBOMapping:ne,uniformBlockBinding:Ae,texStorage2D:Te,texStorage3D:Y,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:be,compressedTexSubImage3D:Ne,scissor:me,viewport:z,reset:Be}}function mS(i,e,t,n,r,a,o){const s=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let S;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,_){return p?new OffscreenCanvas(P,_):lo("canvas")}function b(P,_,U,q){let Q=1;if((P.width>q||P.height>q)&&(Q=q/Math.max(P.width,P.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const be=_?Ol:Math.floor,Ne=be(Q*P.width),Te=be(Q*P.height);S===void 0&&(S=E(Ne,Te));const Y=U?E(Ne,Te):S;return Y.width=Ne,Y.height=Te,Y.getContext("2d").drawImage(P,0,0,Ne,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ne+"x"+Te+")."),Y}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function T(P){return Cu(P.width)&&Cu(P.height)}function A(P){return s?!1:P.wrapS!==oi||P.wrapT!==oi||P.minFilter!==Zt&&P.minFilter!==ei}function L(P,_){return P.generateMipmaps&&_&&P.minFilter!==Zt&&P.minFilter!==ei}function R(P){i.generateMipmap(P)}function H(P,_,U,q,Q=!1){if(s===!1)return _;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let be=_;return _===i.RED&&(U===i.FLOAT&&(be=i.R32F),U===i.HALF_FLOAT&&(be=i.R16F),U===i.UNSIGNED_BYTE&&(be=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(be=i.R8UI),U===i.UNSIGNED_SHORT&&(be=i.R16UI),U===i.UNSIGNED_INT&&(be=i.R32UI),U===i.BYTE&&(be=i.R8I),U===i.SHORT&&(be=i.R16I),U===i.INT&&(be=i.R32I)),_===i.RG&&(U===i.FLOAT&&(be=i.RG32F),U===i.HALF_FLOAT&&(be=i.RG16F),U===i.UNSIGNED_BYTE&&(be=i.RG8)),_===i.RGBA&&(U===i.FLOAT&&(be=i.RGBA32F),U===i.HALF_FLOAT&&(be=i.RGBA16F),U===i.UNSIGNED_BYTE&&(be=q===jt&&Q===!1?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(be=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(be=i.RGB5_A1)),(be===i.R16F||be===i.R32F||be===i.RG16F||be===i.RG32F||be===i.RGBA16F||be===i.RGBA32F)&&e.get("EXT_color_buffer_float"),be}function x(P,_,U){return L(P,U)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==ei?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function w(P){return P===Zt||P===nu||P===Uo?i.NEAREST:i.LINEAR}function Z(P){const _=P.target;_.removeEventListener("dispose",Z),O(_),_.isVideoTexture&&y.delete(_)}function B(P){const _=P.target;_.removeEventListener("dispose",B),V(_)}function O(P){const _=n.get(P);if(_.__webglInit===void 0)return;const U=P.source,q=m.get(U);if(q){const Q=q[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&F(P),Object.keys(q).length===0&&m.delete(U)}n.remove(P)}function F(P){const _=n.get(P);i.deleteTexture(_.__webglTexture);const U=P.source,q=m.get(U);delete q[_.__cacheKey],o.memory.textures--}function V(P){const _=P.texture,U=n.get(P),q=n.get(_);if(q.__webglTexture!==void 0&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(U.__webglFramebuffer[Q]))for(let be=0;be<U.__webglFramebuffer[Q].length;be++)i.deleteFramebuffer(U.__webglFramebuffer[Q][be]);else i.deleteFramebuffer(U.__webglFramebuffer[Q]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[Q])}else{if(Array.isArray(U.__webglFramebuffer))for(let Q=0;Q<U.__webglFramebuffer.length;Q++)i.deleteFramebuffer(U.__webglFramebuffer[Q]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let Q=0,be=_.length;Q<be;Q++){const Ne=n.get(_[Q]);Ne.__webglTexture&&(i.deleteTexture(Ne.__webglTexture),o.memory.textures--),n.remove(_[Q])}n.remove(_),n.remove(P)}let he=0;function X(){he=0}function le(){const P=he;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),he+=1,P}function Me(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function j(P,_){const U=n.get(P);if(P.isVideoTexture&&Ge(P),P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){const q=P.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(U,P,_);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function G(P,_){const U=n.get(P);if(P.version>0&&U.__version!==P.version){et(U,P,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function ee(P,_){const U=n.get(P);if(P.version>0&&U.__version!==P.version){et(U,P,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function Ee(P,_){const U=n.get(P);if(P.version>0&&U.__version!==P.version){mt(U,P,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}const we={[Ll]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},Ue={[Zt]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[Uo]:i.NEAREST_MIPMAP_LINEAR,[ei]:i.LINEAR,[q_]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},Fe={[ox]:i.NEVER,[px]:i.ALWAYS,[lx]:i.LESS,[ux]:i.LEQUAL,[cx]:i.EQUAL,[hx]:i.GEQUAL,[dx]:i.GREATER,[fx]:i.NOTEQUAL};function We(P,_,U){if(U?(i.texParameteri(P,i.TEXTURE_WRAP_S,we[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,we[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,we[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ue[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ue[_.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==oi||_.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,w(_.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,w(_.minFilter)),_.minFilter!==Zt&&_.minFilter!==ei&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Zt||_.minFilter!==Uo&&_.minFilter!==cs||_.type===Vi&&e.has("OES_texture_float_linear")===!1||s===!1&&_.type===ya&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Ve(P,_){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",Z));const q=_.source;let Q=m.get(q);Q===void 0&&(Q={},m.set(q,Q));const be=Me(_);if(be!==P.__cacheKey){Q[be]===void 0&&(Q[be]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[be].usedTimes++;const Ne=Q[P.__cacheKey];Ne!==void 0&&(Q[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&F(_)),P.__cacheKey=be,P.__webglTexture=Q[be].texture}return U}function et(P,_,U){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const Q=Ve(P,_),be=_.source;t.bindTexture(q,P.__webglTexture,i.TEXTURE0+U);const Ne=n.get(be);if(be.version!==Ne.__version||Q===!0){t.activeTexture(i.TEXTURE0+U),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Te=A(_)&&T(_.image)===!1;let Y=b(_.image,Te,!1,d);Y=He(_,Y);const C=T(Y)||s,oe=a.convert(_.format,_.colorSpace);let me=a.convert(_.type),z=H(_.internalFormat,oe,me,_.colorSpace,_.isVideoTexture);We(q,_,C);let ne;const Ae=_.mipmaps,Be=s&&_.isVideoTexture!==!0,N=Ne.__version===void 0||Q===!0,Pe=x(_,Y,C);if(_.isDepthTexture)z=i.DEPTH_COMPONENT,s?_.type===Vi?z=i.DEPTH_COMPONENT32F:_.type===sr?z=i.DEPTH_COMPONENT24:_.type===Ar?z=i.DEPTH24_STENCIL8:z=i.DEPTH_COMPONENT16:_.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Rr&&z===i.DEPTH_COMPONENT&&_.type!==ac&&_.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=sr,me=a.convert(_.type)),_.format===Sa&&z===i.DEPTH_COMPONENT&&(z=i.DEPTH_STENCIL,_.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ar,me=a.convert(_.type))),N&&(Be?t.texStorage2D(i.TEXTURE_2D,1,z,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,z,Y.width,Y.height,0,oe,me,null));else if(_.isDataTexture)if(Ae.length>0&&C){Be&&N&&t.texStorage2D(i.TEXTURE_2D,Pe,z,Ae[0].width,Ae[0].height);for(let se=0,Se=Ae.length;se<Se;se++)ne=Ae[se],Be?t.texSubImage2D(i.TEXTURE_2D,se,0,0,ne.width,ne.height,oe,me,ne.data):t.texImage2D(i.TEXTURE_2D,se,z,ne.width,ne.height,0,oe,me,ne.data);_.generateMipmaps=!1}else Be?(N&&t.texStorage2D(i.TEXTURE_2D,Pe,z,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,oe,me,Y.data)):t.texImage2D(i.TEXTURE_2D,0,z,Y.width,Y.height,0,oe,me,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,z,Ae[0].width,Ae[0].height,Y.depth);for(let se=0,Se=Ae.length;se<Se;se++)ne=Ae[se],_.format!==li?oe!==null?Be?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ne.width,ne.height,Y.depth,oe,ne.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,z,ne.width,ne.height,Y.depth,0,ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ne.width,ne.height,Y.depth,oe,me,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,z,ne.width,ne.height,Y.depth,0,oe,me,ne.data)}else{Be&&N&&t.texStorage2D(i.TEXTURE_2D,Pe,z,Ae[0].width,Ae[0].height);for(let se=0,Se=Ae.length;se<Se;se++)ne=Ae[se],_.format!==li?oe!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,ne.width,ne.height,oe,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,se,z,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(i.TEXTURE_2D,se,0,0,ne.width,ne.height,oe,me,ne.data):t.texImage2D(i.TEXTURE_2D,se,z,ne.width,ne.height,0,oe,me,ne.data)}else if(_.isDataArrayTexture)Be?(N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,z,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,oe,me,Y.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,z,Y.width,Y.height,Y.depth,0,oe,me,Y.data);else if(_.isData3DTexture)Be?(N&&t.texStorage3D(i.TEXTURE_3D,Pe,z,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,oe,me,Y.data)):t.texImage3D(i.TEXTURE_3D,0,z,Y.width,Y.height,Y.depth,0,oe,me,Y.data);else if(_.isFramebufferTexture){if(N)if(Be)t.texStorage2D(i.TEXTURE_2D,Pe,z,Y.width,Y.height);else{let se=Y.width,Se=Y.height;for(let ve=0;ve<Pe;ve++)t.texImage2D(i.TEXTURE_2D,ve,z,se,Se,0,oe,me,null),se>>=1,Se>>=1}}else if(Ae.length>0&&C){Be&&N&&t.texStorage2D(i.TEXTURE_2D,Pe,z,Ae[0].width,Ae[0].height);for(let se=0,Se=Ae.length;se<Se;se++)ne=Ae[se],Be?t.texSubImage2D(i.TEXTURE_2D,se,0,0,oe,me,ne):t.texImage2D(i.TEXTURE_2D,se,z,oe,me,ne);_.generateMipmaps=!1}else Be?(N&&t.texStorage2D(i.TEXTURE_2D,Pe,z,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,me,Y)):t.texImage2D(i.TEXTURE_2D,0,z,oe,me,Y);L(_,C)&&R(q),Ne.__version=be.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function mt(P,_,U){if(_.image.length!==6)return;const q=Ve(P,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+U);const be=n.get(Q);if(Q.version!==be.__version||q===!0){t.activeTexture(i.TEXTURE0+U),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ne=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,Y=[];for(let se=0;se<6;se++)!Ne&&!Te?Y[se]=b(_.image[se],!1,!0,u):Y[se]=Te?_.image[se].image:_.image[se],Y[se]=He(_,Y[se]);const C=Y[0],oe=T(C)||s,me=a.convert(_.format,_.colorSpace),z=a.convert(_.type),ne=H(_.internalFormat,me,z,_.colorSpace),Ae=s&&_.isVideoTexture!==!0,Be=be.__version===void 0||q===!0;let N=x(_,C,oe);We(i.TEXTURE_CUBE_MAP,_,oe);let Pe;if(Ne){Ae&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,N,ne,C.width,C.height);for(let se=0;se<6;se++){Pe=Y[se].mipmaps;for(let Se=0;Se<Pe.length;Se++){const ve=Pe[Se];_.format!==li?me!==null?Ae?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,ve.width,ve.height,me,z,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,ne,ve.width,ve.height,0,me,z,ve.data)}}}else{Pe=_.mipmaps,Ae&&Be&&(Pe.length>0&&N++,t.texStorage2D(i.TEXTURE_CUBE_MAP,N,ne,Y[0].width,Y[0].height));for(let se=0;se<6;se++)if(Te){Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Y[se].width,Y[se].height,me,z,Y[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ne,Y[se].width,Y[se].height,0,me,z,Y[se].data);for(let Se=0;Se<Pe.length;Se++){const Le=Pe[Se].image[se].image;Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,Le.width,Le.height,me,z,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,ne,Le.width,Le.height,0,me,z,Le.data)}}else{Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,me,z,Y[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ne,me,z,Y[se]);for(let Se=0;Se<Pe.length;Se++){const ve=Pe[Se];Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,me,z,ve.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,ne,me,z,ve.image[se])}}}L(_,oe)&&R(i.TEXTURE_CUBE_MAP),be.__version=Q.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Ye(P,_,U,q,Q,be){const Ne=a.convert(U.format,U.colorSpace),Te=a.convert(U.type),Y=H(U.internalFormat,Ne,Te,U.colorSpace);if(!n.get(_).__hasExternalTextures){const oe=Math.max(1,_.width>>be),me=Math.max(1,_.height>>be);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,be,Y,oe,me,_.depth,0,Ne,Te,null):t.texImage2D(Q,be,Y,oe,me,0,Ne,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),pe(_)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,n.get(U).__webglTexture,0,Oe(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,n.get(U).__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(P,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer&&!_.stencilBuffer){let q=i.DEPTH_COMPONENT16;if(U||pe(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Vi?q=i.DEPTH_COMPONENT32F:Q.type===sr&&(q=i.DEPTH_COMPONENT24));const be=Oe(_);pe(_)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,q,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,be,q,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(_.depthBuffer&&_.stencilBuffer){const q=Oe(_);U&&pe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,_.width,_.height):pe(_)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<q.length;Q++){const be=q[Q],Ne=a.convert(be.format,be.colorSpace),Te=a.convert(be.type),Y=H(be.internalFormat,Ne,Te,be.colorSpace),C=Oe(_);U&&pe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,C,Y,_.width,_.height):pe(_)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(P,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const q=n.get(_.depthTexture).__webglTexture,Q=Oe(_);if(_.depthTexture.format===Rr)pe(_)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(_.depthTexture.format===Sa)pe(_)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function je(P){const _=n.get(P),U=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ft(_.__webglFramebuffer,P)}else if(U){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]=i.createRenderbuffer(),te(_.__webglDepthbuffer[q],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),te(_.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(P,_,U){const q=n.get(P);_!==void 0&&Ye(q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&je(P)}function Re(P){const _=P.texture,U=n.get(P),q=n.get(_);P.addEventListener("dispose",B),P.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,o.memory.textures++);const Q=P.isWebGLCubeRenderTarget===!0,be=P.isWebGLMultipleRenderTargets===!0,Ne=T(P)||s;if(Q){U.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(s&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[Te]=[];for(let Y=0;Y<_.mipmaps.length;Y++)U.__webglFramebuffer[Te][Y]=i.createFramebuffer()}else U.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(s&&_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let Te=0;Te<_.mipmaps.length;Te++)U.__webglFramebuffer[Te]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(be)if(r.drawBuffers){const Te=P.texture;for(let Y=0,C=Te.length;Y<C;Y++){const oe=n.get(Te[Y]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&P.samples>0&&pe(P)===!1){const Te=be?_:[_];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<Te.length;Y++){const C=Te[Y];U.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);const oe=a.convert(C.format,C.colorSpace),me=a.convert(C.type),z=H(C.internalFormat,oe,me,C.colorSpace,P.isXRRenderTarget===!0),ne=Oe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,z,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),te(U.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),We(i.TEXTURE_CUBE_MAP,_,Ne);for(let Te=0;Te<6;Te++)if(s&&_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ye(U.__webglFramebuffer[Te][Y],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Y);else Ye(U.__webglFramebuffer[Te],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);L(_,Ne)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){const Te=P.texture;for(let Y=0,C=Te.length;Y<C;Y++){const oe=Te[Y],me=n.get(oe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),We(i.TEXTURE_2D,oe,Ne),Ye(U.__webglFramebuffer,P,oe,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,0),L(oe,Ne)&&R(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(s?Te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,q.__webglTexture),We(Te,_,Ne),s&&_.mipmaps&&_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)Ye(U.__webglFramebuffer[Y],P,_,i.COLOR_ATTACHMENT0,Te,Y);else Ye(U.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,Te,0);L(_,Ne)&&R(Te),t.unbindTexture()}P.depthBuffer&&je(P)}function Xe(P){const _=T(P)||s,U=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let q=0,Q=U.length;q<Q;q++){const be=U[q];if(L(be,_)){const Ne=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Te=n.get(be).__webglTexture;t.bindTexture(Ne,Te),R(Ne),t.unbindTexture()}}}function ye(P){if(s&&P.samples>0&&pe(P)===!1){const _=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],U=P.width,q=P.height;let Q=i.COLOR_BUFFER_BIT;const be=[],Ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(P),Y=P.isWebGLMultipleRenderTargets===!0;if(Y)for(let C=0;C<_.length;C++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let C=0;C<_.length;C++){be.push(i.COLOR_ATTACHMENT0+C),P.depthBuffer&&be.push(Ne);const oe=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(oe===!1&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Y&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[C]),oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ne]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ne])),Y){const me=n.get(_[C]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,U,q,0,0,U,q,Q,i.NEAREST),v&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let C=0;C<_.length;C++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,Te.__webglColorRenderbuffer[C]);const oe=n.get(_[C]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function Oe(P){return Math.min(h,P.samples)}function pe(P){const _=n.get(P);return s&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ge(P){const _=o.render.frame;y.get(P)!==_&&(y.set(P,_),P.update())}function He(P,_){const U=P.colorSpace,q=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ul||U!==Ri&&U!==Pr&&(U===jt||U===_o?s===!1?e.has("EXT_sRGB")===!0&&q===li?(P.format=Ul,P.minFilter=ei,P.generateMipmaps=!1):_=Yf.sRGBToLinear(_):(q!==li||Q!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}this.allocateTextureUnit=le,this.resetTextureUnits=X,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=ee,this.setTextureCube=Ee,this.rebindTextures=de,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=pe}const vS=0,un=1;function gS(i,e,t){const n=t.isWebGL2;function r(a,o=Pr){let s;const c=o===jt||o===_o?un:vS;if(a===cr)return i.UNSIGNED_BYTE;if(a===zf)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Gf)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Y_)return i.BYTE;if(a===K_)return i.SHORT;if(a===ac)return i.UNSIGNED_SHORT;if(a===Bf)return i.INT;if(a===sr)return i.UNSIGNED_INT;if(a===Vi)return i.FLOAT;if(a===ya)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Z_)return i.ALPHA;if(a===li)return i.RGBA;if(a===J_)return i.LUMINANCE;if(a===Q_)return i.LUMINANCE_ALPHA;if(a===Rr)return i.DEPTH_COMPONENT;if(a===Sa)return i.DEPTH_STENCIL;if(a===Ul)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===$_)return i.RED;if(a===Hf)return i.RED_INTEGER;if(a===ex)return i.RG;if(a===Vf)return i.RG_INTEGER;if(a===Wf)return i.RGBA_INTEGER;if(a===No||a===Oo||a===ko||a===Fo)if(c===un)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===iu||a===ru||a===au||a===su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===au)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===tx)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ou||a===lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===ou)return c===un?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===lu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===cu||a===uu||a===du||a===fu||a===hu||a===pu||a===mu||a===vu||a===gu||a===_u||a===xu||a===bu||a===yu||a===Su)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===cu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===uu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===du)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===fu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===hu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===pu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===mu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===vu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===gu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===_u)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===bu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===yu)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Su)return c===un?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Bo||a===Mu||a===Eu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Bo)return c===un?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===nx||a===wu||a===Tu||a===Au)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Bo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ar?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class _S extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _n extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),p=this._getHandJoint(u,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),v=.02,y=.005;u.inputState.pinching&&f>v+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hh extends En{constructor(e,t,n,r,a,o,s,c,u,d){if(d=d!==void 0?d:Rr,d!==Rr&&d!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Rr&&(n=sr),n===void 0&&d===Sa&&(n=Ar),super(null,r,a,o,s,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bS extends Ir{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",c=1,u=null,d=null,h=null,f=null,v=null,y=null;const S=t.getContextAttributes();let m=null,p=null;const E=[],b=[],T=new Vn;T.layers.enable(1),T.viewport=new Xt;const A=new Vn;A.layers.enable(2),A.viewport=new Xt;const L=[T,A],R=new _S;R.layers.enable(1),R.layers.enable(2);let H=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ee=E[G];return ee===void 0&&(ee=new ll,E[G]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(G){let ee=E[G];return ee===void 0&&(ee=new ll,E[G]=ee),ee.getGripSpace()},this.getHand=function(G){let ee=E[G];return ee===void 0&&(ee=new ll,E[G]=ee),ee.getHandSpace()};function w(G){const ee=b.indexOf(G.inputSource);if(ee===-1)return;const Ee=E[ee];Ee!==void 0&&(Ee.update(G.inputSource,G.frame,u||o),Ee.dispatchEvent({type:G.type,data:G.inputSource}))}function Z(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",B);for(let G=0;G<E.length;G++){const ee=b[G];ee!==null&&(b[G]=null,E[G].disconnect(ee))}H=null,x=null,e.setRenderTarget(m),v=null,f=null,h=null,r=null,p=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:v}),p=new Ki(v.framebufferWidth,v.framebufferHeight,{format:li,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ee=null,Ee=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=S.stencil?Sa:Rr,Ee=S.stencil?Ar:sr);const Ue={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),p=new Ki(f.textureWidth,f.textureHeight,{format:li,type:cr,depthTexture:new hh(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const Fe=e.properties.get(p);Fe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(s),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(G){for(let ee=0;ee<G.removed.length;ee++){const Ee=G.removed[ee],we=b.indexOf(Ee);we>=0&&(b[we]=null,E[we].disconnect(Ee))}for(let ee=0;ee<G.added.length;ee++){const Ee=G.added[ee];let we=b.indexOf(Ee);if(we===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=b.length){b.push(Ee),we=Fe;break}else if(b[Fe]===null){b[Fe]=Ee,we=Fe;break}if(we===-1)break}const Ue=E[we];Ue&&Ue.connect(Ee)}}const O=new re,F=new re;function V(G,ee,Ee){O.setFromMatrixPosition(ee.matrixWorld),F.setFromMatrixPosition(Ee.matrixWorld);const we=O.distanceTo(F),Ue=ee.projectionMatrix.elements,Fe=Ee.projectionMatrix.elements,We=Ue[14]/(Ue[10]-1),Ve=Ue[14]/(Ue[10]+1),et=(Ue[9]+1)/Ue[5],mt=(Ue[9]-1)/Ue[5],Ye=(Ue[8]-1)/Ue[0],te=(Fe[8]+1)/Fe[0],ft=We*Ye,je=We*te,de=we/(-Ye+te),Re=de*-Ye;ee.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Re),G.translateZ(de),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Xe=We+de,ye=Ve+de,Oe=ft-Re,pe=je+(we-Re),Ge=et*Ve/ye*Xe,He=mt*Ve/ye*Xe;G.projectionMatrix.makePerspective(Oe,pe,Ge,He,Xe,ye),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function he(G,ee){ee===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ee.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;R.near=A.near=T.near=G.near,R.far=A.far=T.far=G.far,(H!==R.near||x!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,x=R.far);const ee=G.parent,Ee=R.cameras;he(R,ee);for(let we=0;we<Ee.length;we++)he(Ee[we],ee);Ee.length===2?V(R,T,A):R.projectionMatrix.copy(T.projectionMatrix),X(G,R,ee)};function X(G,ee,Ee){Ee===null?G.matrix.copy(ee.matrixWorld):(G.matrix.copy(Ee.matrixWorld),G.matrix.invert(),G.matrix.multiply(ee.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Nl*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&v===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=G)};let le=null;function Me(G,ee){if(d=ee.getViewerPose(u||o),y=ee,d!==null){const Ee=d.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let we=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,we=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Fe=Ee[Ue];let We=null;if(v!==null)We=v.getViewport(Fe);else{const et=h.getViewSubImage(f,Fe);We=et.viewport,Ue===0&&(e.setRenderTargetTextures(p,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(p))}let Ve=L[Ue];Ve===void 0&&(Ve=new Vn,Ve.layers.enable(Ue),Ve.viewport=new Xt,L[Ue]=Ve),Ve.matrix.fromArray(Fe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Fe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(We.x,We.y,We.width,We.height),Ue===0&&(R.matrix.copy(Ve.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),we===!0&&R.cameras.push(Ve)}}for(let Ee=0;Ee<E.length;Ee++){const we=b[Ee],Ue=E[Ee];we!==null&&Ue!==void 0&&Ue.update(we,ee,u||o)}le&&le(G,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),y=null}const j=new oh;j.setAnimationLoop(Me),this.setAnimationLoop=function(G){le=G},this.dispose=function(){}}}function yS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ih(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,b,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),d(m,p)):p.isMeshStandardMaterial?(a(m,p),f(m,p),p.isMeshPhysicalMaterial&&v(m,p,T)):p.isMeshMatcapMaterial?(a(m,p),y(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),S(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?c(m,p,E,b):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function v(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function SS(i,e,t,n){let r={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,b){const T=b.program;n.uniformBlockBinding(E,T)}function u(E,b){let T=r[E.id];T===void 0&&(y(E),T=d(E),r[E.id]=T,E.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(E,A);const L=e.render.frame;a[E.id]!==L&&(f(E),a[E.id]=L)}function d(E){const b=h();E.__bindingPointIndex=b;const T=i.createBuffer(),A=E.__size,L=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function h(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=r[E.id],T=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let L=0,R=T.length;L<R;L++){const H=T[L];if(v(H,L,A)===!0){const x=H.__offset,w=Array.isArray(H.value)?H.value:[H.value];let Z=0;for(let B=0;B<w.length;B++){const O=w[B],F=S(O);typeof O=="number"?(H.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,x+Z,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=O.elements[0],H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=O.elements[0],H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=O.elements[0]):(O.toArray(H.__data,Z),Z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,H.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(E,b,T){const A=E.value;if(T[b]===void 0){if(typeof A=="number")T[b]=A;else{const L=Array.isArray(A)?A:[A],R=[];for(let H=0;H<L.length;H++)R.push(L[H].clone());T[b]=R}return!0}else if(typeof A=="number"){if(T[b]!==A)return T[b]=A,!0}else{const L=Array.isArray(T[b])?T[b]:[T[b]],R=Array.isArray(A)?A:[A];for(let H=0;H<L.length;H++){const x=L[H];if(x.equals(R[H])===!1)return x.copy(R[H]),!0}}return!1}function y(E){const b=E.uniforms;let T=0;const A=16;let L=0;for(let R=0,H=b.length;R<H;R++){const x=b[R],w={boundary:0,storage:0},Z=Array.isArray(x.value)?x.value:[x.value];for(let B=0,O=Z.length;B<O;B++){const F=Z[B],V=S(F);w.boundary+=V.boundary,w.storage+=V.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=T,R>0){L=T%A;const B=A-L;L!==0&&B-w.boundary<0&&(T+=A-L,x.__offset=T)}T+=w.storage}return L=T%A,L>0&&(T+=A-L),E.__size=T,E.__cache={},this}function S(E){const b={boundary:0,storage:0};return typeof E=="number"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},a={}}return{bind:c,update:u,dispose:p}}class ph{constructor(e={}){const{canvas:t=gx(),context:n=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const v=new Uint32Array(4),y=new Int32Array(4);let S=null,m=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const b=this;let T=!1,A=0,L=0,R=null,H=-1,x=null;const w=new Xt,Z=new Xt;let B=null;const O=new Lt(0);let F=0,V=t.width,he=t.height,X=1,le=null,Me=null;const j=new Xt(0,0,V,he),G=new Xt(0,0,V,he);let ee=!1;const Ee=new oc;let we=!1,Ue=!1,Fe=null;const We=new rn,Ve=new at,et=new re,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return R===null?X:1}let te=n;function ft(I,ue){for(let _e=0;_e<I.length;_e++){const ce=I[_e],xe=t.getContext(ce,ue);if(xe!==null)return xe}return null}try{const I={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Se,!1),te===null){const ue=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&ue.shift(),te=ft(ue,I),te===null)throw ft(ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let je,de,Re,Xe,ye,Oe,pe,Ge,He,P,_,U,q,Q,be,Ne,Te,Y,C,oe,me,z,ne,Ae;function Be(){je=new Iy(te),de=new Ay(te,je,e),je.init(de),z=new gS(te,je,de),Re=new pS(te,je,de),Xe=new Oy(te),ye=new eS,Oe=new mS(te,je,Re,ye,de,z,Xe),pe=new Cy(b),Ge=new Dy(b),He=new Xx(te,de),ne=new wy(te,je,He,de),P=new Uy(te,He,Xe,ne),_=new zy(te,P,He,Xe),C=new By(te,de,Oe),Ne=new Ry(ye),U=new $1(b,pe,Ge,je,de,ne,Ne),q=new yS(b,ye),Q=new nS,be=new lS(je,de),Y=new Ey(b,pe,Ge,Re,_,f,c),Te=new hS(b,_,de),Ae=new SS(te,Xe,de,Re),oe=new Ty(te,je,Xe,de),me=new Ny(te,je,Xe,de),Xe.programs=U.programs,b.capabilities=de,b.extensions=je,b.properties=ye,b.renderLists=Q,b.shadowMap=Te,b.state=Re,b.info=Xe}Be();const N=new bS(b,te);this.xr=N,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const I=je.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=je.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(I){I!==void 0&&(X=I,this.setSize(V,he,!1))},this.getSize=function(I){return I.set(V,he)},this.setSize=function(I,ue,_e=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=I,he=ue,t.width=Math.floor(I*X),t.height=Math.floor(ue*X),_e===!0&&(t.style.width=I+"px",t.style.height=ue+"px"),this.setViewport(0,0,I,ue)},this.getDrawingBufferSize=function(I){return I.set(V*X,he*X).floor()},this.setDrawingBufferSize=function(I,ue,_e){V=I,he=ue,X=_e,t.width=Math.floor(I*_e),t.height=Math.floor(ue*_e),this.setViewport(0,0,I,ue)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(j)},this.setViewport=function(I,ue,_e,ce){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,ue,_e,ce),Re.viewport(w.copy(j).multiplyScalar(X).floor())},this.getScissor=function(I){return I.copy(G)},this.setScissor=function(I,ue,_e,ce){I.isVector4?G.set(I.x,I.y,I.z,I.w):G.set(I,ue,_e,ce),Re.scissor(Z.copy(G).multiplyScalar(X).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(I){Re.setScissorTest(ee=I)},this.setOpaqueSort=function(I){le=I},this.setTransparentSort=function(I){Me=I},this.getClearColor=function(I){return I.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(I=!0,ue=!0,_e=!0){let ce=0;if(I){let xe=!1;if(R!==null){const Je=R.texture.format;xe=Je===Wf||Je===Vf||Je===Hf}if(xe){const Je=R.texture.type,rt=Je===cr||Je===sr||Je===ac||Je===Ar||Je===zf||Je===Gf,ct=Y.getClearColor(),lt=Y.getClearAlpha(),bt=ct.r,ut=ct.g,vt=ct.b;rt?(v[0]=bt,v[1]=ut,v[2]=vt,v[3]=lt,te.clearBufferuiv(te.COLOR,0,v)):(y[0]=bt,y[1]=ut,y[2]=vt,y[3]=lt,te.clearBufferiv(te.COLOR,0,y))}else ce|=te.COLOR_BUFFER_BIT}ue&&(ce|=te.DEPTH_BUFFER_BIT),_e&&(ce|=te.STENCIL_BUFFER_BIT),te.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Q.dispose(),be.dispose(),ye.dispose(),pe.dispose(),Ge.dispose(),_.dispose(),ne.dispose(),Ae.dispose(),U.dispose(),N.dispose(),N.removeEventListener("sessionstart",nt),N.removeEventListener("sessionend",_t),Fe&&(Fe.dispose(),Fe=null),pt.stop()};function Pe(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const I=Xe.autoReset,ue=Te.enabled,_e=Te.autoUpdate,ce=Te.needsUpdate,xe=Te.type;Be(),Xe.autoReset=I,Te.enabled=ue,Te.autoUpdate=_e,Te.needsUpdate=ce,Te.type=xe}function Se(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ve(I){const ue=I.target;ue.removeEventListener("dispose",ve),Le(ue)}function Le(I){ke(I),ye.remove(I)}function ke(I){const ue=ye.get(I).programs;ue!==void 0&&(ue.forEach(function(_e){U.releaseProgram(_e)}),I.isShaderMaterial&&U.releaseShaderCache(I))}this.renderBufferDirect=function(I,ue,_e,ce,xe,Je){ue===null&&(ue=mt);const rt=xe.isMesh&&xe.matrixWorld.determinant()<0,ct=Nt(I,ue,_e,ce,xe);Re.setMaterial(ce,rt);let lt=_e.index,bt=1;if(ce.wireframe===!0){if(lt=P.getWireframeAttribute(_e),lt===void 0)return;bt=2}const ut=_e.drawRange,vt=_e.attributes.position;let fe=ut.start*bt,Ce=(ut.start+ut.count)*bt;Je!==null&&(fe=Math.max(fe,Je.start*bt),Ce=Math.min(Ce,(Je.start+Je.count)*bt)),lt!==null?(fe=Math.max(fe,0),Ce=Math.min(Ce,lt.count)):vt!=null&&(fe=Math.max(fe,0),Ce=Math.min(Ce,vt.count));const Ke=Ce-fe;if(Ke<0||Ke===1/0)return;ne.setup(xe,ce,ct,_e,lt);let ot,tt=oe;if(lt!==null&&(ot=He.get(lt),tt=me,tt.setIndex(ot)),xe.isMesh)ce.wireframe===!0?(Re.setLineWidth(ce.wireframeLinewidth*Ye()),tt.setMode(te.LINES)):tt.setMode(te.TRIANGLES);else if(xe.isLine){let Qe=ce.linewidth;Qe===void 0&&(Qe=1),Re.setLineWidth(Qe*Ye()),xe.isLineSegments?tt.setMode(te.LINES):xe.isLineLoop?tt.setMode(te.LINE_LOOP):tt.setMode(te.LINE_STRIP)}else xe.isPoints?tt.setMode(te.POINTS):xe.isSprite&&tt.setMode(te.TRIANGLES);if(xe.isInstancedMesh)tt.renderInstances(fe,Ke,xe.count);else if(_e.isInstancedBufferGeometry){const Qe=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,Dt=Math.min(_e.instanceCount,Qe);tt.renderInstances(fe,Ke,Dt)}else tt.render(fe,Ke)},this.compile=function(I,ue){function _e(ce,xe,Je){ce.transparent===!0&&ce.side===ni&&ce.forceSinglePass===!1?(ce.side=kn,ce.needsUpdate=!0,Jt(ce,xe,Je),ce.side=Ai,ce.needsUpdate=!0,Jt(ce,xe,Je),ce.side=ni):Jt(ce,xe,Je)}m=be.get(I),m.init(),E.push(m),I.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ue.layers)&&(m.pushLight(ce),ce.castShadow&&m.pushShadow(ce))}),m.setupLights(b._useLegacyLights),I.traverse(function(ce){const xe=ce.material;if(xe)if(Array.isArray(xe))for(let Je=0;Je<xe.length;Je++){const rt=xe[Je];_e(rt,I,ce)}else _e(xe,I,ce)}),E.pop(),m=null};let Ze=null;function ht(I){Ze&&Ze(I)}function nt(){pt.stop()}function _t(){pt.start()}const pt=new oh;pt.setAnimationLoop(ht),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(I){Ze=I,N.setAnimationLoop(I),I===null?pt.stop():pt.start()},N.addEventListener("sessionstart",nt),N.addEventListener("sessionend",_t),this.render=function(I,ue){if(ue!==void 0&&ue.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ue.parent===null&&ue.matrixWorldAutoUpdate===!0&&ue.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(ue),ue=N.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,ue,R),m=be.get(I,E.length),m.init(),E.push(m),We.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),Ee.setFromProjectionMatrix(We),Ue=this.localClippingEnabled,we=Ne.init(this.clippingPlanes,Ue),S=Q.get(I,p.length),S.init(),p.push(S),xt(I,ue,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(le,Me),this.info.render.frame++,we===!0&&Ne.beginShadows();const _e=m.state.shadowsArray;if(Te.render(_e,I,ue),we===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(S,I),m.setupLights(b._useLegacyLights),ue.isArrayCamera){const ce=ue.cameras;for(let xe=0,Je=ce.length;xe<Je;xe++){const rt=ce[xe];At(S,I,rt,rt.viewport)}}else At(S,I,ue);R!==null&&(Oe.updateMultisampleRenderTarget(R),Oe.updateRenderTargetMipmap(R)),I.isScene===!0&&I.onAfterRender(b,I,ue),ne.resetDefaultState(),H=-1,x=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function xt(I,ue,_e,ce){if(I.visible===!1)return;if(I.layers.test(ue.layers)){if(I.isGroup)_e=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ue);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ee.intersectsSprite(I)){ce&&et.setFromMatrixPosition(I.matrixWorld).applyMatrix4(We);const rt=_.update(I),ct=I.material;ct.visible&&S.push(I,rt,ct,_e,et.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ee.intersectsObject(I))){const rt=_.update(I),ct=I.material;if(ce&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),et.copy(I.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),et.copy(rt.boundingSphere.center)),et.applyMatrix4(I.matrixWorld).applyMatrix4(We)),Array.isArray(ct)){const lt=rt.groups;for(let bt=0,ut=lt.length;bt<ut;bt++){const vt=lt[bt],fe=ct[vt.materialIndex];fe&&fe.visible&&S.push(I,rt,fe,_e,et.z,vt)}}else ct.visible&&S.push(I,rt,ct,_e,et.z,null)}}const Je=I.children;for(let rt=0,ct=Je.length;rt<ct;rt++)xt(Je[rt],ue,_e,ce)}function At(I,ue,_e,ce){const xe=I.opaque,Je=I.transmissive,rt=I.transparent;m.setupLightsView(_e),we===!0&&Ne.setGlobalState(b.clippingPlanes,_e),Je.length>0&&en(xe,Je,ue,_e),ce&&Re.viewport(w.copy(ce)),xe.length>0&&Ht(xe,ue,_e),Je.length>0&&Ht(Je,ue,_e),rt.length>0&&Ht(rt,ue,_e),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function en(I,ue,_e,ce){const xe=de.isWebGL2;Fe===null&&(Fe=new Ki(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?ya:cr,minFilter:cs,samples:xe?4:0})),b.getDrawingBufferSize(Ve),xe?Fe.setSize(Ve.x,Ve.y):Fe.setSize(Ol(Ve.x),Ol(Ve.y));const Je=b.getRenderTarget();b.setRenderTarget(Fe),b.getClearColor(O),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear();const rt=b.toneMapping;b.toneMapping=lr,Ht(I,_e,ce),Oe.updateMultisampleRenderTarget(Fe),Oe.updateRenderTargetMipmap(Fe);let ct=!1;for(let lt=0,bt=ue.length;lt<bt;lt++){const ut=ue[lt],vt=ut.object,fe=ut.geometry,Ce=ut.material,Ke=ut.group;if(Ce.side===ni&&vt.layers.test(ce.layers)){const ot=Ce.side;Ce.side=kn,Ce.needsUpdate=!0,Rt(vt,_e,ce,fe,Ce,Ke),Ce.side=ot,Ce.needsUpdate=!0,ct=!0}}ct===!0&&(Oe.updateMultisampleRenderTarget(Fe),Oe.updateRenderTargetMipmap(Fe)),b.setRenderTarget(Je),b.setClearColor(O,F),b.toneMapping=rt}function Ht(I,ue,_e){const ce=ue.isScene===!0?ue.overrideMaterial:null;for(let xe=0,Je=I.length;xe<Je;xe++){const rt=I[xe],ct=rt.object,lt=rt.geometry,bt=ce===null?rt.material:ce,ut=rt.group;ct.layers.test(_e.layers)&&Rt(ct,ue,_e,lt,bt,ut)}}function Rt(I,ue,_e,ce,xe,Je){I.onBeforeRender(b,ue,_e,ce,xe,Je),I.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),xe.onBeforeRender(b,ue,_e,ce,I,Je),xe.transparent===!0&&xe.side===ni&&xe.forceSinglePass===!1?(xe.side=kn,xe.needsUpdate=!0,b.renderBufferDirect(_e,ue,ce,xe,I,Je),xe.side=Ai,xe.needsUpdate=!0,b.renderBufferDirect(_e,ue,ce,xe,I,Je),xe.side=ni):b.renderBufferDirect(_e,ue,ce,xe,I,Je),I.onAfterRender(b,ue,_e,ce,xe,Je)}function Jt(I,ue,_e){ue.isScene!==!0&&(ue=mt);const ce=ye.get(I),xe=m.state.lights,Je=m.state.shadowsArray,rt=xe.state.version,ct=U.getParameters(I,xe.state,Je,ue,_e),lt=U.getProgramCacheKey(ct);let bt=ce.programs;ce.environment=I.isMeshStandardMaterial?ue.environment:null,ce.fog=ue.fog,ce.envMap=(I.isMeshStandardMaterial?Ge:pe).get(I.envMap||ce.environment),bt===void 0&&(I.addEventListener("dispose",ve),bt=new Map,ce.programs=bt);let ut=bt.get(lt);if(ut!==void 0){if(ce.currentProgram===ut&&ce.lightsStateVersion===rt)return vi(I,ct),ut}else ct.uniforms=U.getUniforms(I),I.onBuild(_e,ct,b),I.onBeforeCompile(ct,b),ut=U.acquireProgram(ct,lt),bt.set(lt,ut),ce.uniforms=ct.uniforms;const vt=ce.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(vt.clippingPlanes=Ne.uniform),vi(I,ct),ce.needsLights=yn(I),ce.lightsStateVersion=rt,ce.needsLights&&(vt.ambientLightColor.value=xe.state.ambient,vt.lightProbe.value=xe.state.probe,vt.directionalLights.value=xe.state.directional,vt.directionalLightShadows.value=xe.state.directionalShadow,vt.spotLights.value=xe.state.spot,vt.spotLightShadows.value=xe.state.spotShadow,vt.rectAreaLights.value=xe.state.rectArea,vt.ltc_1.value=xe.state.rectAreaLTC1,vt.ltc_2.value=xe.state.rectAreaLTC2,vt.pointLights.value=xe.state.point,vt.pointLightShadows.value=xe.state.pointShadow,vt.hemisphereLights.value=xe.state.hemi,vt.directionalShadowMap.value=xe.state.directionalShadowMap,vt.directionalShadowMatrix.value=xe.state.directionalShadowMatrix,vt.spotShadowMap.value=xe.state.spotShadowMap,vt.spotLightMatrix.value=xe.state.spotLightMatrix,vt.spotLightMap.value=xe.state.spotLightMap,vt.pointShadowMap.value=xe.state.pointShadowMap,vt.pointShadowMatrix.value=xe.state.pointShadowMatrix);const fe=ut.getUniforms(),Ce=Js.seqWithValue(fe.seq,vt);return ce.currentProgram=ut,ce.uniformsList=Ce,ut}function vi(I,ue){const _e=ye.get(I);_e.outputColorSpace=ue.outputColorSpace,_e.instancing=ue.instancing,_e.instancingColor=ue.instancingColor,_e.skinning=ue.skinning,_e.morphTargets=ue.morphTargets,_e.morphNormals=ue.morphNormals,_e.morphColors=ue.morphColors,_e.morphTargetsCount=ue.morphTargetsCount,_e.numClippingPlanes=ue.numClippingPlanes,_e.numIntersection=ue.numClipIntersection,_e.vertexAlphas=ue.vertexAlphas,_e.vertexTangents=ue.vertexTangents,_e.toneMapping=ue.toneMapping}function Nt(I,ue,_e,ce,xe){ue.isScene!==!0&&(ue=mt),Oe.resetTextureUnits();const Je=ue.fog,rt=ce.isMeshStandardMaterial?ue.environment:null,ct=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ri,lt=(ce.isMeshStandardMaterial?Ge:pe).get(ce.envMap||rt),bt=ce.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,ut=!!_e.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),vt=!!_e.morphAttributes.position,fe=!!_e.morphAttributes.normal,Ce=!!_e.morphAttributes.color;let Ke=lr;ce.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ke=b.toneMapping);const ot=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,tt=ot!==void 0?ot.length:0,Qe=ye.get(ce),Dt=m.state.lights;if(we===!0&&(Ue===!0||I!==x)){const Ot=I===x&&ce.id===H;Ne.setState(ce,I,Ot)}let gt=!1;ce.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Dt.state.version||Qe.outputColorSpace!==ct||xe.isInstancedMesh&&Qe.instancing===!1||!xe.isInstancedMesh&&Qe.instancing===!0||xe.isSkinnedMesh&&Qe.skinning===!1||!xe.isSkinnedMesh&&Qe.skinning===!0||xe.isInstancedMesh&&Qe.instancingColor===!0&&xe.instanceColor===null||xe.isInstancedMesh&&Qe.instancingColor===!1&&xe.instanceColor!==null||Qe.envMap!==lt||ce.fog===!0&&Qe.fog!==Je||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ne.numPlanes||Qe.numIntersection!==Ne.numIntersection)||Qe.vertexAlphas!==bt||Qe.vertexTangents!==ut||Qe.morphTargets!==vt||Qe.morphNormals!==fe||Qe.morphColors!==Ce||Qe.toneMapping!==Ke||de.isWebGL2===!0&&Qe.morphTargetsCount!==tt)&&(gt=!0):(gt=!0,Qe.__version=ce.version);let Qt=Qe.currentProgram;gt===!0&&(Qt=Jt(ce,ue,xe));let Fn=!1,mn=!1,In=!1;const Ft=Qt.getUniforms(),gn=Qe.uniforms;if(Re.useProgram(Qt.program)&&(Fn=!0,mn=!0,In=!0),ce.id!==H&&(H=ce.id,mn=!0),Fn||x!==I){Ft.setValue(te,"projectionMatrix",I.projectionMatrix),Ft.setValue(te,"viewMatrix",I.matrixWorldInverse);const Ot=Ft.map.cameraPosition;Ot!==void 0&&Ot.setValue(te,et.setFromMatrixPosition(I.matrixWorld)),de.logarithmicDepthBuffer&&Ft.setValue(te,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ft.setValue(te,"isOrthographic",I.isOrthographicCamera===!0),x!==I&&(x=I,mn=!0,In=!0)}if(xe.isSkinnedMesh){Ft.setOptional(te,xe,"bindMatrix"),Ft.setOptional(te,xe,"bindMatrixInverse");const Ot=xe.skeleton;Ot&&(de.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),Ft.setValue(te,"boneTexture",Ot.boneTexture,Oe),Ft.setValue(te,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const An=_e.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0&&de.isWebGL2===!0)&&C.update(xe,_e,Qt),(mn||Qe.receiveShadow!==xe.receiveShadow)&&(Qe.receiveShadow=xe.receiveShadow,Ft.setValue(te,"receiveShadow",xe.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(gn.envMap.value=lt,gn.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),mn&&(Ft.setValue(te,"toneMappingExposure",b.toneMappingExposure),Qe.needsLights&&Kt(gn,In),Je&&ce.fog===!0&&q.refreshFogUniforms(gn,Je),q.refreshMaterialUniforms(gn,ce,X,he,Fe),Js.upload(te,Qe.uniformsList,gn,Oe)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Js.upload(te,Qe.uniformsList,gn,Oe),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ft.setValue(te,"center",xe.center),Ft.setValue(te,"modelViewMatrix",xe.modelViewMatrix),Ft.setValue(te,"normalMatrix",xe.normalMatrix),Ft.setValue(te,"modelMatrix",xe.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Ot=ce.uniformsGroups;for(let Pi=0,Mo=Ot.length;Pi<Mo;Pi++)if(de.isWebGL2){const Da=Ot[Pi];Ae.update(Da,Qt),Ae.bind(Da,Qt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qt}function Kt(I,ue){I.ambientLightColor.needsUpdate=ue,I.lightProbe.needsUpdate=ue,I.directionalLights.needsUpdate=ue,I.directionalLightShadows.needsUpdate=ue,I.pointLights.needsUpdate=ue,I.pointLightShadows.needsUpdate=ue,I.spotLights.needsUpdate=ue,I.spotLightShadows.needsUpdate=ue,I.rectAreaLights.needsUpdate=ue,I.hemisphereLights.needsUpdate=ue}function yn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(I,ue,_e){ye.get(I.texture).__webglTexture=ue,ye.get(I.depthTexture).__webglTexture=_e;const ce=ye.get(I);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=_e===void 0,ce.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,ue){const _e=ye.get(I);_e.__webglFramebuffer=ue,_e.__useDefaultFramebuffer=ue===void 0},this.setRenderTarget=function(I,ue=0,_e=0){R=I,A=ue,L=_e;let ce=!0,xe=null,Je=!1,rt=!1;if(I){const lt=ye.get(I);lt.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(te.FRAMEBUFFER,null),ce=!1):lt.__webglFramebuffer===void 0?Oe.setupRenderTarget(I):lt.__hasExternalTextures&&Oe.rebindTextures(I,ye.get(I.texture).__webglTexture,ye.get(I.depthTexture).__webglTexture);const bt=I.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(rt=!0);const ut=ye.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ut[ue])?xe=ut[ue][_e]:xe=ut[ue],Je=!0):de.isWebGL2&&I.samples>0&&Oe.useMultisampledRTT(I)===!1?xe=ye.get(I).__webglMultisampledFramebuffer:Array.isArray(ut)?xe=ut[_e]:xe=ut,w.copy(I.viewport),Z.copy(I.scissor),B=I.scissorTest}else w.copy(j).multiplyScalar(X).floor(),Z.copy(G).multiplyScalar(X).floor(),B=ee;if(Re.bindFramebuffer(te.FRAMEBUFFER,xe)&&de.drawBuffers&&ce&&Re.drawBuffers(I,xe),Re.viewport(w),Re.scissor(Z),Re.setScissorTest(B),Je){const lt=ye.get(I.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+ue,lt.__webglTexture,_e)}else if(rt){const lt=ye.get(I.texture),bt=ue||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,lt.__webglTexture,_e||0,bt)}H=-1},this.readRenderTargetPixels=function(I,ue,_e,ce,xe,Je,rt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=ye.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&rt!==void 0&&(ct=ct[rt]),ct){Re.bindFramebuffer(te.FRAMEBUFFER,ct);try{const lt=I.texture,bt=lt.format,ut=lt.type;if(bt!==li&&z.convert(bt)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const vt=ut===ya&&(je.has("EXT_color_buffer_half_float")||de.isWebGL2&&je.has("EXT_color_buffer_float"));if(ut!==cr&&z.convert(ut)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ut===Vi&&(de.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ue>=0&&ue<=I.width-ce&&_e>=0&&_e<=I.height-xe&&te.readPixels(ue,_e,ce,xe,z.convert(bt),z.convert(ut),Je)}finally{const lt=R!==null?ye.get(R).__webglFramebuffer:null;Re.bindFramebuffer(te.FRAMEBUFFER,lt)}}},this.copyFramebufferToTexture=function(I,ue,_e=0){const ce=Math.pow(2,-_e),xe=Math.floor(ue.image.width*ce),Je=Math.floor(ue.image.height*ce);Oe.setTexture2D(ue,0),te.copyTexSubImage2D(te.TEXTURE_2D,_e,0,0,I.x,I.y,xe,Je),Re.unbindTexture()},this.copyTextureToTexture=function(I,ue,_e,ce=0){const xe=ue.image.width,Je=ue.image.height,rt=z.convert(_e.format),ct=z.convert(_e.type);Oe.setTexture2D(_e,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,_e.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,_e.unpackAlignment),ue.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,ce,I.x,I.y,xe,Je,rt,ct,ue.image.data):ue.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,ce,I.x,I.y,ue.mipmaps[0].width,ue.mipmaps[0].height,rt,ue.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,ce,I.x,I.y,rt,ct,ue.image),ce===0&&_e.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(I,ue,_e,ce,xe=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Je=I.max.x-I.min.x+1,rt=I.max.y-I.min.y+1,ct=I.max.z-I.min.z+1,lt=z.convert(ce.format),bt=z.convert(ce.type);let ut;if(ce.isData3DTexture)Oe.setTexture3D(ce,0),ut=te.TEXTURE_3D;else if(ce.isDataArrayTexture)Oe.setTexture2DArray(ce,0),ut=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ce.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,ce.unpackAlignment);const vt=te.getParameter(te.UNPACK_ROW_LENGTH),fe=te.getParameter(te.UNPACK_IMAGE_HEIGHT),Ce=te.getParameter(te.UNPACK_SKIP_PIXELS),Ke=te.getParameter(te.UNPACK_SKIP_ROWS),ot=te.getParameter(te.UNPACK_SKIP_IMAGES),tt=_e.isCompressedTexture?_e.mipmaps[0]:_e.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,tt.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,tt.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,I.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,I.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,I.min.z),_e.isDataTexture||_e.isData3DTexture?te.texSubImage3D(ut,xe,ue.x,ue.y,ue.z,Je,rt,ct,lt,bt,tt.data):_e.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(ut,xe,ue.x,ue.y,ue.z,Je,rt,ct,lt,tt.data)):te.texSubImage3D(ut,xe,ue.x,ue.y,ue.z,Je,rt,ct,lt,bt,tt),te.pixelStorei(te.UNPACK_ROW_LENGTH,vt),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,fe),te.pixelStorei(te.UNPACK_SKIP_PIXELS,Ce),te.pixelStorei(te.UNPACK_SKIP_ROWS,Ke),te.pixelStorei(te.UNPACK_SKIP_IMAGES,ot),xe===0&&ce.generateMipmaps&&te.generateMipmap(ut),Re.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?Oe.setTextureCube(I,0):I.isData3DTexture?Oe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Oe.setTexture2DArray(I,0):Oe.setTexture2D(I,0),Re.unbindTexture()},this.resetState=function(){A=0,L=0,R=null,Re.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?Cr:jf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cr?jt:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MS extends ph{}MS.prototype.isWebGL1Renderer=!0;class ES extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class wS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new re;class co{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array),a=kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mh extends Pa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $r;const Fa=new re,ea=new re,ta=new re,na=new at,Ba=new at,vh=new rn,Gs=new re,za=new re,Hs=new re,fd=new at,cl=new at,hd=new at;class TS extends wn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new Qi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wS(t,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new co(n,3,0,!1)),$r.setAttribute("uv",new co(n,2,3,!1))}this.geometry=$r,this.material=e!==void 0?e:new mh,this.center=new at(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ea.setFromMatrixScale(this.matrixWorld),vh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ta.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ea.multiplyScalar(-ta.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const o=this.center;Vs(Gs.set(-.5,-.5,0),ta,o,ea,r,a),Vs(za.set(.5,-.5,0),ta,o,ea,r,a),Vs(Hs.set(.5,.5,0),ta,o,ea,r,a),fd.set(0,0),cl.set(1,0),hd.set(1,1);let s=e.ray.intersectTriangle(Gs,za,Hs,!1,Fa);if(s===null&&(Vs(za.set(-.5,.5,0),ta,o,ea,r,a),cl.set(0,1),s=e.ray.intersectTriangle(Gs,Hs,za,!1,Fa),s===null))return;const c=e.ray.origin.distanceTo(Fa);c<e.near||c>e.far||t.push({distance:c,point:Fa.clone(),uv:ti.getInterpolation(Fa,Gs,za,Hs,fd,cl,hd,new at),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vs(i,e,t,n,r,a){na.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ba.x=a*na.x-r*na.y,Ba.y=r*na.x+a*na.y):Ba.copy(na),i.copy(e),i.x+=Ba.x,i.y+=Ba.y,i.applyMatrix4(vh)}class Qs extends En{constructor(e,t,n,r,a,o,s,c,u){super(e,t,n,r,a,o,s,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us extends Pa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gh extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ul=new rn,pd=new re,md=new re;class AS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(pd),md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(md),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vd=new rn,Ga=new re,dl=new re;class RS extends AS{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new re(1,0,0),new re(-1,0,0),new re(0,0,1),new re(0,0,-1),new re(0,1,0),new re(0,-1,0)],this._cubeUps=[new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,0,1),new re(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ga),dl.copy(n.position),dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dl),n.updateMatrixWorld(),r.makeTranslation(-Ga.x,-Ga.y,-Ga.z),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd)}}class CS extends gh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new RS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class PS extends gh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _h{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gd(){return(typeof performance>"u"?Date:performance).now()}class _d{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function uc(i,e,t,n,r,a,o,s){const c=(R,H,x,w)=>[new at(R/o,1-w/s),new at(x/o,1-w/s),new at(x/o,1-H/s),new at(R/o,1-H/s)],u=c(e+a,t,e+n+a,t+a),d=c(e+n+a,t,e+n*2+a,t+a),h=c(e,t+a,e+a,t+a+r),f=c(e+a,t+a,e+n+a,t+a+r),v=c(e+n+a,t+a,e+n+a*2,t+r+a),y=c(e+n+a*2,t+a,e+n*2+a*2,t+r+a),S=i.attributes.uv,m=[v[3],v[2],v[0],v[1]],p=[h[3],h[2],h[0],h[1]],E=[u[3],u[2],u[0],u[1]],b=[d[0],d[1],d[3],d[2]],T=[f[3],f[2],f[0],f[1]],A=[y[3],y[2],y[0],y[1]],L=[];for(const R of[m,p,E,b,T,A])for(const H of R)L.push(H.x,H.y);S.set(new Float32Array(L)),S.needsUpdate=!0}function Kn(i,e,t,n,r,a){uc(i,e,t,n,r,a,64,64)}function Fl(i,e,t,n,r,a){uc(i,e,t,n,r,a,64,32)}class gr extends _n{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class LS extends _n{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new us({side:Ai}),this.layer2Material=new us({side:ni,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new tn(8,8,8);Kn(e,0,0,8,8,8);const t=new Bt(e,this.layer1Material),n=new tn(9,9,9);Kn(n,32,0,8,8,8);const r=new Bt(n,this.layer2Material);this.head=new gr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new tn(8,12,4);Kn(a,16,16,8,12,4);const o=new Bt(a,this.layer1Material),s=new tn(8.5,12.5,4.5);Kn(s,16,32,8,12,4);const c=new Bt(s,this.layer2Material);this.body=new gr(o,c),this.body.name="body",this.body.add(o,c),this.body.position.y=-6,this.add(this.body);const u=new tn,d=new Bt(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3:4,d.scale.y=12,d.scale.z=4,Kn(u,40,16,this.slim?3:4,12,4)});const h=new tn,f=new Bt(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Kn(h,40,32,this.slim?3:4,12,4)});const v=new _n;v.add(d,f),this.modelListeners.push(()=>{v.position.x=this.slim?-.5:-1}),v.position.y=-4,this.rightArm=new gr(d,f),this.rightArm.name="rightArm",this.rightArm.add(v),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const y=new tn,S=new Bt(y,this.layer1MaterialBiased);this.modelListeners.push(()=>{S.scale.x=this.slim?3:4,S.scale.y=12,S.scale.z=4,Kn(y,32,48,this.slim?3:4,12,4)});const m=new tn,p=new Bt(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Kn(m,48,48,this.slim?3:4,12,4)});const E=new _n;E.add(S,p),this.modelListeners.push(()=>{E.position.x=this.slim?.5:1}),E.position.y=-4,this.leftArm=new gr(S,p),this.leftArm.name="leftArm",this.leftArm.add(E),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const b=new tn(4,12,4);Kn(b,0,16,4,12,4);const T=new Bt(b,this.layer1MaterialBiased),A=new tn(4.5,12.5,4.5);Kn(A,0,32,4,12,4);const L=new Bt(A,this.layer2MaterialBiased),R=new _n;R.add(T,L),R.position.y=-6,this.rightLeg=new gr(T,L),this.rightLeg.name="rightLeg",this.rightLeg.add(R),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const H=new tn(4,12,4);Kn(H,16,48,4,12,4);const x=new Bt(H,this.layer1MaterialBiased),w=new tn(4.5,12.5,4.5);Kn(w,0,48,4,12,4);const Z=new Bt(w,this.layer2MaterialBiased),B=new _n;B.add(x,Z),B.position.y=-6,this.leftLeg=new gr(x,Z),this.leftLeg.name="leftLeg",this.leftLeg.add(B),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof gr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class DS extends _n{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new us({side:ni,transparent:!0,alphaTest:1e-5});const e=new tn(10,16,1);Fl(e,0,0,10,16,1),this.cape=new Bt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class IS extends _n{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new us({side:ni,transparent:!0,alphaTest:1e-5});const e=new tn(12,22,4);Fl(e,22,0,10,20,2);const t=new Bt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new _n,this.leftWing.add(t),this.add(this.leftWing);const n=new tn(12,22,4);Fl(n,22,0,10,20,2);const r=new Bt(n,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new _n,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class US extends _n{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new us({side:Ai});const e=new tn(8,8,4/3);uc(e,0,0,6,6,1,14,7),this.rightEar=new Bt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Bt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const xd=10.8*Math.PI/180;class NS extends _n{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new LS,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new DS,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=xd,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new IS,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new US,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=xd,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ws(i){return i instanceof HTMLImageElement||i instanceof HTMLVideoElement||i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas}function Bl(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let o=0;o<n;o++)for(let s=0;s<r;s++){const c=(o+s*n)*4;if(a.data[c+3]!==255)return!0}return!1}function yo(i){return i/64}function bd(i,e,t){if(t){if(Bl(i,0,0,e,e))return}else if(Bl(i,0,0,e,e/2))return;const n=yo(e),r=(a,o,s,c)=>i.clearRect(a*n,o*n,s*n,c*n);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function OS(i,e){i.save(),i.scale(-1,1);const t=yo(e),n=(r,a,o,s,c,u)=>i.drawImage(i.canvas,r*t,a*t,o*t,s*t,-c*t,u*t,-o*t,s*t);n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52),i.restore()}function kS(i,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=i.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;i.width=r,i.height=r,n.clearRect(0,0,r,r),n.drawImage(e,0,0,r,r/2),OS(n,r),bd(n,i.width,!1)}else i.width=e.width,i.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0,i.width,i.height),bd(n,i.width,!0)}function FS(i){if(i.width===2*i.height)return i.width/64;if(i.width*17===i.height*22)return i.width/22;if(i.width*11===i.height*23)return i.width/46;throw new Error(`Bad cape size: ${i.width}x${i.height}`)}function BS(i,e){const t=FS(e);i.width=64*t,i.height=32*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function zS(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let o=0;o<n;o++)for(let s=0;s<r;s++){const c=(o+s*n)*4;if(!(a.data[c+0]===0&&a.data[c+1]===0&&a.data[c+2]===0&&a.data[c+3]===255))return!1}return!0}function GS(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let o=0;o<n;o++)for(let s=0;s<r;s++){const c=(o+s*n)*4;if(!(a.data[c+0]===255&&a.data[c+1]===255&&a.data[c+2]===255&&a.data[c+3]===255))return!1}return!0}function HS(i){const e=yo(i.width),t=i.getContext("2d",{willReadFrequently:!0}),n=(s,c,u,d)=>Bl(t,s*e,c*e,u*e,d*e),r=(s,c,u,d)=>zS(t,s*e,c*e,u*e,d*e),a=(s,c,u,d)=>GS(t,s*e,c*e,u*e,d*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function VS(i){if(i.width===i.height*2&&i.height%7===0)return i.height/7;throw new Error(`Bad ears size: ${i.width}x${i.height}`)}function WS(i,e){const t=VS(e);i.width=14*t,i.height=7*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function yd(i,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=yo(e.width),n=14*t,r=7*t;i.width=n,i.height=r;const a=i.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,n,r),a.drawImage(e,24*t,0,n,r,0,0,n,r)}async function js(i){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof i=="string"?e.src=i:(i.crossOrigin!==void 0&&(e.crossOrigin=i.crossOrigin),i.referrerPolicy!==void 0&&(e.referrerPolicy=i.referrerPolicy),e.src=i.src)})}const Sd={type:"change"},fl={type:"start"},Md={type:"end"},Xs=new Jf,Ed=new ar,jS=Math.cos(70*vx.DEG2RAD);class XS extends Ir{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new re,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",_),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Sd),n.update(),a=r.NONE},this.update=(function(){const C=new re,oe=new Dr().setFromUnitVectors(e.up,new re(0,1,0)),me=oe.clone().invert(),z=new re,ne=new Dr,Ae=new re,Be=2*Math.PI;return function(Pe=null){const se=n.object.position;C.copy(se).sub(n.target),C.applyQuaternion(oe),s.setFromVector3(C),n.autoRotate&&a===r.NONE&&Z(x(Pe)),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let Se=n.minAzimuthAngle,ve=n.maxAzimuthAngle;isFinite(Se)&&isFinite(ve)&&(Se<-Math.PI?Se+=Be:Se>Math.PI&&(Se-=Be),ve<-Math.PI?ve+=Be:ve>Math.PI&&(ve-=Be),Se<=ve?s.theta=Math.max(Se,Math.min(ve,s.theta)):s.theta=s.theta>(Se+ve)/2?Math.max(Se,s.theta):Math.min(ve,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&L||n.object.isOrthographicCamera?s.radius=Me(s.radius):s.radius=Me(s.radius*u),C.setFromSpherical(s),C.applyQuaternion(me),se.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let Le=!1;if(n.zoomToCursor&&L){let ke=null;if(n.object.isPerspectiveCamera){const Ze=C.length();ke=Me(Ze*u);const ht=Ze-ke;n.object.position.addScaledVector(T,ht),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ze=new re(A.x,A.y,0);Ze.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Le=!0;const ht=new re(A.x,A.y,0);ht.unproject(n.object),n.object.position.sub(ht).add(Ze),n.object.updateMatrixWorld(),ke=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ke).add(n.object.position):(Xs.origin.copy(n.object.position),Xs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xs.direction))<jS?e.lookAt(n.target):(Ed.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xs.intersectPlane(Ed,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Le=!0);return u=1,L=!1,Le||z.distanceToSquared(n.object.position)>o||8*(1-ne.dot(n.object.quaternion))>o||Ae.distanceToSquared(n.target)>0?(n.dispatchEvent(Sd),z.copy(n.object.position),ne.copy(n.object.quaternion),Ae.copy(n.target),Le=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Q),n.domElement.removeEventListener("pointerdown",ye),n.domElement.removeEventListener("pointercancel",pe),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Oe),n.domElement.removeEventListener("pointerup",pe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new _d,c=new _d;let u=1;const d=new re,h=new at,f=new at,v=new at,y=new at,S=new at,m=new at,p=new at,E=new at,b=new at,T=new re,A=new at;let L=!1;const R=[],H={};function x(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function Z(C){c.theta-=C}function B(C){c.phi-=C}const O=(function(){const C=new re;return function(me,z){C.setFromMatrixColumn(z,0),C.multiplyScalar(-me),d.add(C)}})(),F=(function(){const C=new re;return function(me,z){n.screenSpacePanning===!0?C.setFromMatrixColumn(z,1):(C.setFromMatrixColumn(z,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(me),d.add(C)}})(),V=(function(){const C=new re;return function(me,z){const ne=n.domElement;if(n.object.isPerspectiveCamera){const Ae=n.object.position;C.copy(Ae).sub(n.target);let Be=C.length();Be*=Math.tan(n.object.fov/2*Math.PI/180),O(2*me*Be/ne.clientHeight,n.object.matrix),F(2*z*Be/ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(me*(n.object.right-n.object.left)/n.object.zoom/ne.clientWidth,n.object.matrix),F(z*(n.object.top-n.object.bottom)/n.object.zoom/ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function he(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(C){if(!n.zoomToCursor)return;L=!0;const oe=n.domElement.getBoundingClientRect(),me=C.clientX-oe.left,z=C.clientY-oe.top,ne=oe.width,Ae=oe.height;A.x=me/ne*2-1,A.y=-(z/Ae)*2+1,T.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function Me(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function j(C){h.set(C.clientX,C.clientY)}function G(C){le(C),p.set(C.clientX,C.clientY)}function ee(C){y.set(C.clientX,C.clientY)}function Ee(C){f.set(C.clientX,C.clientY),v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const oe=n.domElement;Z(2*Math.PI*v.x/oe.clientHeight),B(2*Math.PI*v.y/oe.clientHeight),h.copy(f),n.update()}function we(C){E.set(C.clientX,C.clientY),b.subVectors(E,p),b.y>0?he(w()):b.y<0&&X(w()),p.copy(E),n.update()}function Ue(C){S.set(C.clientX,C.clientY),m.subVectors(S,y).multiplyScalar(n.panSpeed),V(m.x,m.y),y.copy(S),n.update()}function Fe(C){le(C),C.deltaY<0?X(w()):C.deltaY>0&&he(w()),n.update()}function We(C){let oe=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),oe=!0;break}oe&&(C.preventDefault(),n.update())}function Ve(){if(R.length===1)h.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),oe=.5*(R[0].pageY+R[1].pageY);h.set(C,oe)}}function et(){if(R.length===1)y.set(R[0].pageX,R[0].pageY);else{const C=.5*(R[0].pageX+R[1].pageX),oe=.5*(R[0].pageY+R[1].pageY);y.set(C,oe)}}function mt(){const C=R[0].pageX-R[1].pageX,oe=R[0].pageY-R[1].pageY,me=Math.sqrt(C*C+oe*oe);p.set(0,me)}function Ye(){n.enableZoom&&mt(),n.enablePan&&et()}function te(){n.enableZoom&&mt(),n.enableRotate&&Ve()}function ft(C){if(R.length==1)f.set(C.pageX,C.pageY);else{const me=Y(C),z=.5*(C.pageX+me.x),ne=.5*(C.pageY+me.y);f.set(z,ne)}v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const oe=n.domElement;Z(2*Math.PI*v.x/oe.clientHeight),B(2*Math.PI*v.y/oe.clientHeight),h.copy(f)}function je(C){if(R.length===1)S.set(C.pageX,C.pageY);else{const oe=Y(C),me=.5*(C.pageX+oe.x),z=.5*(C.pageY+oe.y);S.set(me,z)}m.subVectors(S,y).multiplyScalar(n.panSpeed),V(m.x,m.y),y.copy(S)}function de(C){const oe=Y(C),me=C.pageX-oe.x,z=C.pageY-oe.y,ne=Math.sqrt(me*me+z*z);E.set(0,ne),b.set(0,Math.pow(E.y/p.y,n.zoomSpeed)),he(b.y),p.copy(E)}function Re(C){n.enableZoom&&de(C),n.enablePan&&je(C)}function Xe(C){n.enableZoom&&de(C),n.enableRotate&&ft(C)}function ye(C){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",Oe),n.domElement.addEventListener("pointerup",pe)),be(C),C.pointerType==="touch"?U(C):Ge(C))}function Oe(C){n.enabled!==!1&&(C.pointerType==="touch"?q(C):He(C))}function pe(C){Ne(C),R.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",Oe),n.domElement.removeEventListener("pointerup",pe)),n.dispatchEvent(Md),a=r.NONE}function Ge(C){let oe;switch(C.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Nr.DOLLY:if(n.enableZoom===!1)return;G(C),a=r.DOLLY;break;case Nr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;ee(C),a=r.PAN}else{if(n.enableRotate===!1)return;j(C),a=r.ROTATE}break;case Nr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;j(C),a=r.ROTATE}else{if(n.enablePan===!1)return;ee(C),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(fl)}function He(C){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Ee(C);break;case r.DOLLY:if(n.enableZoom===!1)return;we(C);break;case r.PAN:if(n.enablePan===!1)return;Ue(C);break}}function P(C){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(C.preventDefault(),n.dispatchEvent(fl),Fe(C),n.dispatchEvent(Md))}function _(C){n.enabled===!1||n.enablePan===!1||We(C)}function U(C){switch(Te(C),R.length){case 1:switch(n.touches.ONE){case Or.ROTATE:if(n.enableRotate===!1)return;Ve(),a=r.TOUCH_ROTATE;break;case Or.PAN:if(n.enablePan===!1)return;et(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Or.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(),a=r.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(fl)}function q(C){switch(Te(C),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ft(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;je(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(C),n.update();break;default:a=r.NONE}}function Q(C){n.enabled!==!1&&C.preventDefault()}function be(C){R.push(C)}function Ne(C){delete H[C.pointerId];for(let oe=0;oe<R.length;oe++)if(R[oe].pointerId==C.pointerId){R.splice(oe,1);return}}function Te(C){let oe=H[C.pointerId];oe===void 0&&(oe=new at,H[C.pointerId]=oe),oe.set(C.pageX,C.pageY)}function Y(C){const oe=C.pointerId===R[0].pointerId?R[1]:R[0];return H[oe.pointerId]}n.domElement.addEventListener("contextmenu",Q),n.domElement.addEventListener("pointerdown",ye),n.domElement.addEventListener("pointercancel",pe),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const qS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class So{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const YS=new lh(-1,1,1,-1,0,1),dc=new Qi;dc.setAttribute("position",new qi([-1,3,0,-1,-1,0,3,-1,0],3));dc.setAttribute("uv",new qi([0,2,0,0,2,0],2));class KS{constructor(e){this._mesh=new Bt(dc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xh extends So{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rh.clone(e.uniforms),this.material=new Zi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new KS(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wd extends So{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class ZS extends So{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class JS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new at);this._width=n.width,this._height=n.height,t=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ya}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xh(qS),this.copyPass.material.blending=Xi,this.clock=new _h}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}wd!==void 0&&(o instanceof wd?n=!0:o instanceof ZS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class QS extends So{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const $S={uniforms:{tDiffuse:{value:null},resolution:{value:new at(1/1024,1/512)}},vertexShader:`

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
	`};class bh{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const n=t*this.speed;this.animate(e,n),this.animationObjects.forEach((r,a)=>{const o=this.progress0.get(a);r(e,this.progress-o,a)}),this.progress+=n}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Td extends bh{animate(e){const t=this.progress*2,n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class Ad extends bh{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class eM extends TS{constructor(e="",t={}){const n=new mh({transparent:!0,alphaTest:1e-5});super(n),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=n,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const n=t.measureText(this.text);e.width=this.margin[3]+n.actualBoundingBoxLeft+n.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+n.actualBoundingBoxAscent+n.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+n.actualBoundingBoxLeft,this.margin[0]+n.actualBoundingBoxAscent);const r=new Qs(e);r.magFilter=Zt,r.minFilter=Zt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class tM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new PS(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new CS(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new ES,this.camera=new Vn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Zn.enabled=!1,this.renderer=new ph({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Ki(0,0,{depthTexture:new hh(0,0,Vi)})),this.composer=new JS(this.renderer,t),this.renderPass=new QS(this.scene,this.camera),this.fxaaPass=new xh($S),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new NS,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new _n,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new XS(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new _h,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=n=>{n.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",n=>{n.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Qs(this.skinCanvas),this.skinTexture.magFilter=Zt,this.skinTexture.minFilter=Zt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Qs(this.capeCanvas),this.capeTexture.magFilter=Zt,this.capeTexture.minFilter=Zt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Qs(this.earsCanvas),this.earsTexture.magFilter=Zt,this.earsTexture.minFilter=Zt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ws(e))kS(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=HS(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(yd(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return js(e).then(n=>this.loadSkin(n,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ws(e))BS(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return js(e).then(n=>this.loadCape(n,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ws(e))t.textureType==="skin"?yd(this.earsCanvas,e):WS(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return js(e).then(n=>this.loadEars(n,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,so)}loadBackground(e,t){if(Ws(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new En,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return js(e).then(n=>this.loadBackground(n,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new re).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new at).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new at).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Lt||e instanceof En?this.scene.background=e:this.scene.background=new Lt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof wn||(e=new eM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const $n=Ut({list:[],active:null,ready:!1}),hl=new Map;function zl(i,e){const t=window.__TAURI__?.core;return t?t.invoke(i,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function qs(){try{$n.list=await zl("get_accounts"),$n.active=await zl("get_active_account")}catch{}finally{$n.ready=!0}}function ds(i){return i?i.skin??(i.account_type?.type==="ely_by"?i.username:null):null}async function Gl(i){if(!i)return null;const e=String(i).trim();if(!e||e.startsWith("data:"))return e||null;if(hl.has(e))return hl.get(e);try{const t=await zl("proxy_skin_png",{source:e});return hl.set(e,t),t}catch{return null}}function nM(i){try{const e=String(i??"").split(",")[1]??"",t=atob(e.slice(0,44));if(t.length<24)return null;const n=o=>t.charCodeAt(o)&255;if(n(1)!==80||n(2)!==78||n(3)!==71)return null;const r=(n(16)<<24|n(17)<<16|n(18)<<8|n(19))>>>0,a=(n(20)<<24|n(21)<<16|n(22)<<8|n(23))>>>0;return!r||!a?null:{width:r,height:a}}catch{return null}}var iM=W('<button title="Toggle the hat/jacket outer layer"> </button>'),rM=W("<canvas></canvas> <!>",1);function fc(i,e){qt(e,!0);let t=$e(e,"skin",3,null),n=$e(e,"cape",3,null),r=$e(e,"model",3,null),a=$e(e,"width",3,260),o=$e(e,"height",3,340),s=$e(e,"walking",3,!1),c=$e(e,"autorotate",3,!1),u=$e(e,"zoom",3,.85),d=$e(e,"outerLayer",15,!0),h=$e(e,"showToggle",3,!1),f=ae(null),v=null,y,S,m,p=ae(null),E=ae(null),b=0;function T(B){if(!B)return null;const O=String(B).trim();if(!O)return null;if(/^(https?:|data:)/i.test(O))return O;const F=window.__TAURI__?.core?.convertFileSrc;return F?F(O):O}function A(B){const O=String(B??"").trim().toLowerCase();return O==="slim"?"slim":O==="classic"?"default":"auto-detect"}function L(){v&&((l(p)!==y||A(r())!==m)&&(y=l(p),m=A(r()),l(p)?v.loadSkin(l(p),{model:m}).catch(()=>{}):v.resetSkin()),l(E)!==S&&(S=l(E),l(E)?v.loadCape(l(E)).catch(()=>{}):v.resetCape()))}function R(){const B=v?.playerObject?.skin;if(B)for(const O of[B.head,B.body,B.rightArm,B.leftArm,B.rightLeg,B.leftLeg])O?.outerLayer&&(O.outerLayer.visible=d())}Ci(()=>(v=new tM({canvas:l(f),width:a(),height:o(),zoom:u(),fov:55}),v.controls.enablePan=!1,v.controls.enableZoom=!0,v.autoRotate=c(),v.animation=s()?new Ad:new Td,L(),R(),()=>{v?.dispose(),v=null})),$t(()=>{const B=t(),O=n(),F=++b;(async()=>{const V=await Gl(B),he=await Gl(O);F===b&&(g(p,V??T(B),!0),g(E,he??T(O),!0))})()}),$t(()=>{L(),R()}),$t(()=>{d(),v&&R()}),$t(()=>{v&&(v.animation=s()?new Ad:new Td)}),$t(()=>{v&&(v.autoRotate=c())}),$t(()=>{v&&v.setSize(a(),o())});var H=rM(),x=St(H);Mf(x,B=>g(f,B),()=>l(f));var w=M(x,2);{var Z=B=>{var O=iM(),F=K(O);ge(()=>{dt(O,1,`rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) ${d()?"text-(--accent)":""}`),ze(O,"aria-pressed",d()),J(F,`Outer layer: ${d()?"on":"off"}`)}),ie("click",O,()=>d(!d())),k(B,O)};Ie(w,B=>{h()&&B(Z)})}ge(()=>Pn(x,`width:${a()??""}px;height:${o()??""}px;display:block`)),k(i,H),Yt()}cn(["click"]);var aM=W('<span class="absolute inset-0"></span> <span class="absolute inset-0"></span>',1),sM=W('<span class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"> </span>'),oM=W("<span><!></span>");function hc(i,e){qt(e,!0);let t=$e(e,"source",3,null),n=$e(e,"size",3,32),r=$e(e,"letter",3,null),a=$e(e,"class",3,""),o=ae(null),s=ae(1),c=0;$t(()=>{const m=t(),p=++c;(async()=>{const E=await Gl(m);if(p!==c)return;g(o,E,!0);const b=E?nM(E):null;g(s,b&&b.height&&b.width?b.height/b.width:1,!0)})()}),ec(()=>{c+=1});const u=st(()=>(800*l(s)).toFixed(4)),d=st(()=>(100/(8*l(s)-1)).toFixed(4)),h=st(()=>l(o)?`background-image:url(${l(o)});background-size:800% ${l(u)}%;image-rendering:pixelated;`:"");var f=oM(),v=D(f);{var y=m=>{var p=aM(),E=St(p),b=M(E,2);ge(()=>{Pn(E,`${l(h)}background-position:14.2857% ${l(d)}%`),Pn(b,`${l(h)}background-position:71.4286% ${l(d)}%`)}),k(m,p)},S=m=>{var p=sM(),E=K(p,!0);ge(()=>{Pn(p,`font-size:${n()*.45}px`),J(E,r())}),k(m,p)};Ie(v,m=>{l(o)?m(y):r()&&m(S,1)})}ge(()=>{dt(f,1,`relative inline-block shrink-0 overflow-hidden ${a()??""}`),Pn(f,`width:${n()??""}px;height:${n()??""}px`)}),k(i,f),Yt()}var lM=W('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),cM=W(`<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40" title="Silently renew this account's token"> </button>`),uM=W('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),dM=W('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),fM=W('<div><div class="flex items-center gap-3"><!> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),hM=W('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),pM=W('<p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),mM=W('<div class="flex flex-col"><!> <!></div>');function yh(i,e){qt(e,!0);let t=$e(e,"accounts",19,()=>[]),n=$e(e,"active",3,null),r=ae(""),a=ae(!1),o=ae(null),s=ae(""),c=ae(""),u=ae(null);function d(x,w){const Z=window.__TAURI__?.core;return Z?Z.invoke(x,w):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function h(x){g(r,"");try{await d("set_active_account",{id:x}),await e.onrefresh?.()}catch(w){g(r,String(w),!0)}}async function f(x){g(r,"");try{await d("remove_account",{id:x}),l(o)===x&&g(o,null),await e.onrefresh?.()}catch(w){g(r,String(w),!0)}}async function v(x){const w=y(x);if(w){g(r,""),g(u,x.id,!0);try{await d(w,{id:x.id}),await e.onrefresh?.()}catch(Z){g(r,String(Z),!0)}finally{g(u,null)}}}function y(x){const w=x.account_type?.type;return w==="microsoft"?"refresh_microsoft_account":w==="ely_by"&&x.refresh_token?"refresh_elyby_account":null}function S(x){if(l(o)===x.id){g(o,null);return}g(o,x.id,!0),g(s,x.skin??"",!0),g(c,x.cape??"",!0)}async function m(x){const w=window.__TAURI__?.dialog?.open;if(!w){g(r,"File picker unavailable in this build.");return}try{const Z=await w({multiple:!1,title:x==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Z)return;g(x==="skin"?s:c,String(Z),!0),g(r,"")}catch(Z){g(r,String(Z),!0)}}async function p(){g(r,""),g(a,!0);try{await d("set_account_textures",{id:l(o),skin:l(s).trim()||null,cape:l(c).trim()||null}),await e.onrefresh?.(),g(o,null)}catch(x){g(r,String(x),!0)}finally{g(a,!1)}}async function E(){g(s,""),g(c,""),await p()}function b(x){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[x.account_type.type]??"Yggdrasil"}const T=st(()=>t().find(x=>x.id===l(o))??null);var A=mM(),L=D(A);wt(L,17,t,x=>x.id,(x,w)=>{var Z=fM(),B=D(Z),O=D(B);{let de=st(()=>ds(l(w))),Re=st(()=>l(w).username[0]?.toUpperCase()??"?");hc(O,{get source(){return l(de)},size:32,get letter(){return l(Re)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var F=M(O,2),V=D(F),he=D(V),X=K(he,!0),le=M(he,2),Me=K(le,!0),j=M(le,2);{var G=de=>{var Re=lM();k(de,Re)};Ie(j,de=>{n()?.id===l(w).id&&de(G)})}var ee=M(V,2),Ee=K(ee,!0),we=M(F,2),Ue=D(we),Fe=D(Ue);Mi(Fe,{emoji:"🎨"});var We=M(Ue,2);{var Ve=de=>{var Re=cM(),Xe=K(Re,!0);ge(()=>{Re.disabled=l(u)!==null,J(Xe,l(u)===l(w).id?"Refreshing…":"Refresh token")}),ie("click",Re,()=>v(l(w))),k(de,Re)},et=st(()=>y(l(w)));Ie(We,de=>{l(et)&&de(Ve)})}var mt=M(We,2);{var Ye=de=>{var Re=uM();ie("click",Re,()=>h(l(w).id)),k(de,Re)};Ie(mt,de=>{n()?.id!==l(w).id&&de(Ye)})}var te=M(mt,2),ft=M(B,2);{var je=de=>{var Re=dM(),Xe=D(Re);{let be=st(()=>l(T)?.model);fc(Xe,{get skin(){return l(s)},get cape(){return l(c)},get model(){return l(be)},width:110,height:150})}var ye=M(Xe,2),Oe=D(ye),pe=M(D(Oe)),Ge=K(pe,!0),He=M(Oe,2),P=M(D(He)),_=K(P,!0),U=M(He,2),q=D(U),Q=M(q,2);ge(()=>{J(Ge,l(s)||"default (Steve/Alex)"),J(_,l(c)||"none"),q.disabled=l(a)}),ie("click",Oe,()=>m("skin")),ie("click",He,()=>m("cape")),ie("click",q,p),ie("click",Q,E),k(de,Re)};Ie(ft,de=>{l(o)===l(w).id&&l(T)&&de(je)})}ge(de=>{dt(Z,1,`border-b border-(--border) px-4 py-2.5 ${n()?.id===l(w).id?"bg-(--accent)/10":""}`),J(X,l(w).username),J(Me,de),J(Ee,l(w).uuid)},[()=>b(l(w))]),ie("click",Ue,()=>S(l(w))),ie("click",te,()=>f(l(w).id)),k(x,Z)},x=>{var w=hM();k(x,w)});var R=M(L,2);{var H=x=>{var w=pM(),Z=K(w,!0);ge(()=>J(Z,l(r))),k(x,w)};Ie(R,x=>{l(r)&&x(H)})}k(i,A),Yt()}cn(["click"]);var vM=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <div class="border-t border-(--border)"><!></div></div></div></div>');function gM(i,e){qt(e,!0);let t=$e(e,"accounts",19,()=>[]),n=$e(e,"active",3,null);Ci(()=>{const f=Ra(()=>e.onclose?.());return()=>Ca(f)});var r=vM(),a=D(r),o=D(a),s=M(D(o),2),c=M(o,2),u=D(c);If(u,{get onrefresh(){return e.onrefresh}});var d=M(u,2),h=D(d);yh(h,{get accounts(){return t()},get active(){return n()},get onrefresh(){return e.onrefresh}}),ie("click",r,f=>{f.target===f.currentTarget&&e.onclose?.()}),ie("click",s,()=>e.onclose?.()),k(i,r),Yt()}cn(["click"]);var _M=W('<button><span class="truncate"> </span></button>'),xM=W('<span class="text-[9px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),bM=W('<button><!> <span class="text-[12px] font-medium"> </span> <!></button>'),yM=W('<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]"><dt class="text-(--text-muted)">Profile UUID</dt> <dd class="min-w-0 truncate font-mono"> </dd> <dt class="text-(--text-muted)">Skin source</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Cape</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Renewable token</dt> <dd class="min-w-0 truncate"> </dd></dl></div>'),SM=W('<div class="mt-6 flex flex-wrap gap-2"></div> <!>',1),MM=W(`<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><p class="text-sm font-medium">No accounts yet</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom
              Yggdrasil server — everything lives in the Add Account section.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Add an account</button></div>`),EM=W('<h2 class="text-[16px] font-semibold">Account overview</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The character launches use, with the hat/jacket outer layer included.</p> <!>',1),wM=W('<h2 class="text-[16px] font-semibold">Add account</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.</p> <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),TM=W('<h2 class="text-[16px] font-semibold">Saved accounts</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Set the active profile, renew tokens silently, edit skins — or remove accounts.</p> <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),AM=W('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Accounts sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div></div>');function RM(i,e){qt(e,!0);const t=[{id:"overview",label:"Overview"},{id:"add",label:"Add Account"},{id:"saved",label:"Saved Accounts"}];let n=ae("overview"),r=ae(null);const a=st(()=>{const E=$n.list;return E.find(b=>b.id===l(r))??E.find(b=>b.id===$n.active?.id)??E[0]??null});let o=ae(!0);function s(E){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[E.account_type.type]??"Yggdrasil"}var c=AM(),u=D(c),d=D(u),h=M(d,2);wt(h,21,()=>t,E=>E.id,(E,b)=>{var T=_M(),A=D(T),L=K(A,!0);ge(()=>{dt(T,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${l(n)===l(b).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),ze(T,"aria-current",l(n)===l(b).id?"true":void 0),J(L,l(b).label)}),ie("click",T,()=>g(n,l(b).id,!0)),k(E,T)});var f=M(u,2),v=D(f),y=D(v);{var S=E=>{var b=EM(),T=M(St(b),4);{var A=R=>{var H=SM(),x=St(H);wt(x,21,()=>$n.list,B=>B.id,(B,O)=>{var F=bM(),V=D(F);{let j=st(()=>ds(l(O))),G=st(()=>l(O).username[0]?.toUpperCase()??"?");hc(V,{get source(){return l(j)},size:24,get letter(){return l(G)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var he=M(V,2),X=K(he,!0),le=M(he,2);{var Me=j=>{var G=xM();k(j,G)};Ie(le,j=>{$n.active?.id===l(O).id&&j(Me)})}ge(()=>{dt(F,1,`flex items-center gap-2 rounded border px-2 py-1.5 text-left ${l(a)?.id===l(O).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),ze(F,"title",`Preview ${l(O).username??""}`),J(X,l(O).username)}),ie("click",F,()=>g(r,l(O).id,!0)),k(B,F)});var w=M(x,2);{var Z=B=>{var O=yM(),F=D(O);{let et=st(()=>ds(l(a)));fc(F,{get skin(){return l(et)},get cape(){return l(a).cape},get model(){return l(a).model},width:230,height:310,showToggle:!0,get outerLayer(){return l(o)},set outerLayer(mt){g(o,mt,!0)}})}var V=M(F,2),he=D(V),X=K(he,!0),le=M(he,2),Me=K(le,!0),j=M(V,2),G=M(D(j),2),ee=K(G,!0),Ee=M(G,4),we=K(Ee,!0),Ue=M(Ee,4),Fe=K(Ue,!0),We=M(Ue,4),Ve=K(We,!0);ge(et=>{J(X,l(a).username),J(Me,et),ze(G,"title",l(a).uuid),J(ee,l(a).uuid),ze(Ee,"title",l(a).skin??"default (Steve/Alex)"),J(we,l(a).skin?"custom skin":"default (Steve/Alex)"),J(Fe,l(a).cape?"custom cape":"none"),J(Ve,l(a).refresh_token?"yes — silent refresh available":"no")},[()=>s(l(a))]),k(B,O)};Ie(w,B=>{l(a)&&B(Z)})}k(R,H)},L=R=>{var H=MM(),x=M(D(H),4);ie("click",x,()=>g(n,"add")),k(R,H)};Ie(T,R=>{$n.list.length?R(A):R(L,-1)})}k(E,b)},m=E=>{var b=wM(),T=M(St(b),4),A=D(T);If(A,{get onrefresh(){return e.onrefresh}}),k(E,b)},p=E=>{var b=TM(),T=M(St(b),4),A=D(T);yh(A,{get accounts(){return $n.list},get active(){return $n.active},get onrefresh(){return e.onrefresh}}),k(E,b)};Ie(y,E=>{l(n)==="overview"?E(S):l(n)==="add"?E(m,1):E(p,-1)})}ie("click",d,function(...E){e.onback?.apply(this,E)}),k(i,c),Yt()}cn(["click"]);var CM=W('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),PM=W('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),LM=W('<p class="text-center text-[11px] text-red-400"> </p>'),DM=W("<option> </option>"),IM=W("<option>No instances yet</option>"),UM=W('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),NM=W('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),OM=W('<p class="mt-2 text-[11px] text-red-400"> </p>'),kM=W('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="flex items-center gap-1.5 rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer"><!> Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),FM=W('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function BM(i,e){qt(e,!0);let t=$e(e,"instances",19,()=>[]),n=$e(e,"active",3,null),r=$e(e,"gameRunning",3,!1),a=$e(e,"status",3,"Ready");function o(B,O){const F=window.__TAURI__?.core;return F?F.invoke(B,O):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let c=ae(Ut(f())),u=ae(""),d=ae(""),h=ae("");function f(){try{const B=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray(B)?B:[]}catch{return[]}}function v(){localStorage.setItem(s,JSON.stringify(l(c)))}function y(B){B.preventDefault(),g(h,"");const O=l(d).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(O)){g(h,"Address must be a hostname (optionally host:port).");return}g(c,[...l(c),{name:l(u).trim()||O.split(":")[0],address:O}],!0),v(),g(u,""),g(d,"")}function S(B){g(c,l(c).filter((O,F)=>F!==B),!0),v()}let m=ae("");$t(()=>{l(m)&&t().some(B=>B.id===l(m))||g(m,t()[0]?.id??"",!0)});const p=st(()=>t().find(B=>B.id===l(m))?.name??"no instance selected");function E(B){!l(m)||r()||e.onlaunch?.(l(m),B.address)}let b=ae(""),T=ae(!1);async function A(B){const O=window.__TAURI__?.dialog?.open;if(!O){g(b,"File picker unavailable in this build.");return}try{const F=await O({multiple:!1,title:B==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!F)return;g(T,!0),g(b,""),await o("set_account_textures",{id:n().id,skin:B==="skin"?String(F):null,cape:B==="cape"?String(F):null}),await e.onrefresh?.()}catch(F){g(b,String(F),!0)}finally{g(T,!1)}}async function L(){if(n())try{g(T,!0),await o("set_account_textures",{id:n().id,skin:null,cape:null}),await e.onrefresh?.()}catch(B){g(b,String(B),!0)}finally{g(T,!1)}}function R(B){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[B.account_type.type]??"Yggdrasil"}var H=FM(),x=D(H);{var w=B=>{var O=CM(),F=D(O);Mi(F,{emoji:"👤",size:30});var V=M(F,6);ie("click",V,()=>e.onopenaccounts?.()),k(B,O)},Z=B=>{var O=kM(),F=D(O),V=D(F);yf(V,()=>n()?.id,U=>{{let q=st(()=>ds(n()));fc(U,{get skin(){return l(q)},get cape(){return n().cape},get model(){return n().model},width:220,height:300})}});var he=M(V,2),X=D(he),le=K(X,!0),Me=M(X,2),j=K(Me,!0),G=M(he,2),ee=D(G),Ee=M(ee,2),we=M(Ee,2);{var Ue=U=>{var q=PM();ge(()=>q.disabled=l(T)),ie("click",q,L),k(U,q)};Ie(we,U=>{(n().cape||n().skin)&&U(Ue)})}var Fe=M(G,2);{var We=U=>{var q=LM(),Q=K(q,!0);ge(()=>J(Q,l(b))),k(U,q)};Ie(Fe,U=>{l(b)&&U(We)})}var Ve=M(F,2),et=D(Ve),mt=M(D(et),2),Ye=D(mt);wt(Ye,21,t,U=>U.id,(U,q)=>{var Q=DM(),be=K(Q,!0),Ne={};ge(()=>{J(be,l(q).name),Ne!==(Ne=l(q).id)&&(Q.value=(Q.__value=Ne)??"")}),k(U,Q)},U=>{var q=IM();q.value=q.__value="",k(U,q)}),ga(Ye);var te=M(Ye,2),ft=D(te);zt(ft,{name:"log",size:12});var je=M(mt,2),de=K(je,!0),Re=M(je,2),Xe=K(Re,!0),ye=M(et,2),Oe=M(D(ye),2);wt(Oe,19,()=>l(c),U=>U.address,(U,q,Q)=>{var be=UM(),Ne=D(be),Te=D(Ne),Y=K(Te,!0),C=M(Te,2),oe=K(C,!0),me=M(Ne,2),z=M(me,2);ge(()=>{J(Y,l(q).name),J(oe,l(q).address),me.disabled=!l(m)||r(),ze(me,"title",`Join ${l(q).address} with ${l(p)}`)}),ie("click",me,()=>E(l(q))),ie("click",z,()=>S(l(Q))),k(U,be)},U=>{var q=NM();k(U,q)});var pe=M(Oe,2),Ge=D(pe),He=M(Ge,2),P=M(pe,2);{var _=U=>{var q=OM(),Q=K(q,!0);ge(()=>J(Q,l(h))),k(U,q)};Ie(P,U=>{l(h)&&U(_)})}ge(U=>{J(le,n().username),J(j,U),ee.disabled=l(T),Ee.disabled=l(T),je.disabled=!l(m)||r(),J(de,r()?"GAME RUNNING…":"LAUNCH GAME"),J(Xe,r()?a():l(p))},[()=>R(n())]),ie("click",ee,()=>A("skin")),ie("click",Ee,()=>A("cape")),_a(Ye,()=>l(m),U=>g(m,U)),ie("click",te,()=>e.onopenconsole?.()),ie("click",je,()=>e.onlaunch?.(l(m),null)),jn("submit",pe,y),Wt(Ge,()=>l(u),U=>g(u,U)),Wt(He,()=>l(d),U=>g(d,U)),k(B,O)};Ie(x,B=>{n()?B(Z,-1):B(w)})}k(i,H),Yt()}cn(["click"]);var zM=W('<h3 class="text-(--step-heading) font-semibold text-(--fg-1)"> </h3>'),GM=W('<input class="mt-3 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"/>'),HM=W('<button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1)"> </button>'),VM=W('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="alertdialog" aria-modal="true" class="w-[380px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><!> <p> </p> <!></div></div> <div class="flex items-center justify-end gap-2 border-t border-(--border-1) px-4 py-3"><!> <button class="rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"> </button></div></div></div>');function WM(i,e){qt(e,!0);const t={info:{icon:"about",tint:"text-(--accent)"},success:{icon:"success",tint:"text-green-500"},warning:{icon:"warning",tint:"text-(--accent-star)"},error:{icon:"error",tint:"text-rose-400"},confirm:{icon:"help",tint:"text-(--accent)"},prompt:{icon:"edit",tint:"text-(--accent)"}},n=st(()=>hi.dialog),r=st(()=>t[l(n)?.variant]??t.info);let a=ae("");$t(()=>{l(n),g(a,l(n)?.value??"",!0)});function o(){l(n)?.variant==="prompt"?bs(l(a)):bs(!0)}function s(){l(n)?.variant==="prompt"?bs(null):bs(!1)}function c(f){f.key==="Enter"&&l(n)?.variant!=="prompt"&&(f.preventDefault(),o())}var u=rs(),d=St(u);{var h=f=>{var v=VM(),y=D(v),S=D(y),m=D(S),p=D(m);{let F=st(()=>l(n).icon||l(r).icon);zt(p,{get name(){return l(F)},size:17})}var E=M(m,2),b=D(E);{var T=F=>{var V=zM(),he=K(V,!0);ge(()=>J(he,l(n).title)),k(F,V)};Ie(b,F=>{l(n).title&&F(T)})}var A=M(b,2),L=K(A,!0),R=M(A,2);{var H=F=>{var V=GM();vp(V),ge(()=>ze(V,"placeholder",l(n).placeholder??"")),Wt(V,()=>l(a),he=>g(a,he)),k(F,V)};Ie(R,F=>{l(n).variant==="prompt"&&F(H)})}var x=M(S,2),w=D(x);{var Z=F=>{var V=HM(),he=K(V,!0);ge(()=>J(he,l(n).cancelLabel??"Cancel")),ie("click",V,s),k(F,V)};Ie(w,F=>{l(n).variant!=="alert"&&F(Z)})}var B=M(w,2),O=K(B,!0);ge(()=>{ze(y,"aria-label",l(n).title||"Alert"),dt(A,1,`mt-1 text-(--step-body) break-words text-(--fg-2) ${l(n).title?"":"font-medium text-(--fg-1)"}`),J(L,l(n).message),J(O,l(n).confirmLabel??"OK")}),ie("click",v,F=>{F.target===F.currentTarget&&s()}),ie("keydown",y,c),ie("click",B,o),k(f,v)};Ie(d,f=>{l(n)&&f(h)})}k(i,u),Yt()}cn(["click","keydown"]);var jM=W('<span class="block truncate text-(--step-body) font-semibold text-(--fg-1)"> </span>'),XM=W('<button title="Click to dismiss"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <span class="min-w-0 flex-1"><!> <span class="block text-(--step-meta) break-words text-(--fg-2)"> </span></span> <span class="shrink-0 text-(--step-caption) text-(--fg-2)">✕</span></button>'),qM=W('<div class="pointer-events-none fixed right-4 bottom-4 z-[80] flex w-80 flex-col gap-2"></div>');function YM(i,e){qt(e,!0);const t={info:{icon:"about",tint:"border-(--accent-1)/50"},success:{icon:"success",tint:"border-green-500/60"},warning:{icon:"warning",tint:"border-(--accent-2)/60"},error:{icon:"error",tint:"border-rose-500/60"}};let n=ae(!1);const r=new Map,a=new Set;function o(){if(!l(n))for(const d of hi.toasts)a.has(d.id)||(a.add(d.id),r.set(d.id,setTimeout(()=>{a.delete(d.id),r.delete(d.id),Hc(d.id)},d.duration)))}function s(){g(n,!0);for(const d of r.values())clearTimeout(d);r.clear(),a.clear()}function c(){g(n,!1),o()}$t(()=>{hi.toasts.length,o()});var u=qM();wt(u,21,()=>hi.toasts,d=>d.id,(d,h)=>{var f=XM(),v=D(f),y=D(v);zt(y,{get name(){return(t[l(h).kind]??t.info).icon},size:14});var S=M(v,2),m=D(S);{var p=T=>{var A=jM(),L=K(A,!0);ge(()=>J(L,l(h).title)),k(T,A)};Ie(m,T=>{l(h).title&&T(p)})}var E=M(m,2),b=K(E,!0);ge(()=>{dt(f,1,`pointer-events-auto flex w-full items-start gap-2.5 rounded-lg border ${(t[l(h).kind]??t.info).tint??""} bg-(--bg-2) p-3 text-left shadow-xl animate-[fade-in_120ms_ease-out] hover:bg-(--bg-3)`),J(b,l(h).message)}),ie("click",f,()=>Hc(l(h).id)),k(d,f)}),jn("mouseenter",u,s),jn("mouseleave",u,c),k(i,u),Yt()}cn(["click"]);var KM=W('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),ZM=W('<span class="truncate text-[13px]"> </span>'),JM=W('<button><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button>'),QM=W('<span class="truncate text-[13px]">Add Instance</span>'),$M=W('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),eE=W('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),tE=W('<button role="tab"> </button>'),nE=W('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),iE=W('<div class="mb-4 flex items-center gap-2"><button class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"><!> Add Instance</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance"><!> Install .mrpack</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="flex rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),rE=W('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),aE=W('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),sE=W('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),oE=W("<div> </div>"),lE=W('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),cE=W('<p class="mt-2 text-[12px] text-red-400"> </p>'),uE=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),dE=W('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),fE=W('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),hE=W('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button></div> <button><!> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)" aria-live="polite"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <!> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function pE(i,e){qt(e,!0);let t=ae("…"),n=ae("instances"),r=ae(Ut(ic(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));$t(()=>{Km(l(r)),localStorage.setItem("twilight-theme",l(r)),$m(l(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:ja(l(r))?"dark":"light"}).catch(()=>{})}),Gm();let a=ae("Ready"),o=ae(!1),s=ae(Ut(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));$t(()=>{localStorage.setItem("twilight-mode",l(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:l(s)}).catch(()=>{})});let c=ae(localStorage.getItem("twilight-blind-mode")==="true"),u=ae(localStorage.getItem("twilight-deaf-mode")==="true");$t(()=>{localStorage.setItem("twilight-blind-mode",String(l(c))),localStorage.setItem("twilight-deaf-mode",String(l(u))),window.__TAURI__?.core.invoke("set_accessibility_config",{blindMode:l(c),deafMode:l(u)}).catch(()=>{})});const d=[{id:"instances",label:"Instances",icon:"instances"},{id:"worlds",label:"Servers & P2P",icon:"worlds"},{id:"downloads",label:"Downloads",icon:"download"},{id:"settings",label:"Settings",icon:"settings"},{id:"accounts",label:"Accounts",icon:"accounts"}],h={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]},f=st(()=>$n.active);let v=ae(!1),y=ae(Ut([])),S=ae(!1),m=ae(""),p=ae(!1),E=ae(!1),b=ae(""),T=ae(!1),A=ae(""),L=ae(null),R=st(()=>l(L)?"edit":l(n)),H=ae(null),x=ae(null),w=ae(!1),Z=ae(""),B=ae(null),O=ae(""),F=ae(0),V=ae(0),he=ae("");async function X($,De){return window.__TAURI__.core.invoke($,De)}function le(){g(r,ja(l(r))?"twilight-light":"twilight-dark",!0)}async function Me(){g(S,!0),g(m,"");try{g(y,await X("discover_java_installations"),!0)}catch($){g(m,String($),!0)}finally{g(S,!1)}}function j(){g(p,!0)}async function G(){if(l(b).trim()){g(T,!0),g(A,"");try{const $=await X("install_modpack",{pathOrUrl:l(b).trim()});g(E,!1),g(b,""),await pe(),$&&g(de,$,!0),g(a,"Modpack installed.")}catch($){g(A,String($),!0)}finally{g(T,!1)}}}let ee=ae(Ut([])),Ee=ae(!1),we=ae(!1),Ue=ae(null);$t(()=>{l(ee).length,l(Ue)&&(l(Ue).scrollTop=l(Ue).scrollHeight)});function Fe($){l(ee).push($),l(ee).length>5e3&&l(ee).splice(0,l(ee).length-5e3)}function We(){g(ee,[],!0)}function Ve($){return $.stream==="stderr"||$.line.includes("/ERROR]")?"text-rose-400":$.line.includes("/WARN]")?"text-(--accent-star)":$.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function et(){const $=l(ee).map(De=>De.line).join(`
`);try{await navigator.clipboard.writeText($),rr("Logs copied to clipboard.","success")}catch{const De=document.createElement("textarea");De.value=$,document.body.append(De),De.select(),document.execCommand("copy"),De.remove()}}async function mt(){if(l(we))try{await X("kill_instance"),Fe({stream:"stdout",line:"kill requested"})}catch($){Fe({stream:"stderr",line:String($)})}}let Ye=ae(Ut([])),te=ae(""),ft=ae(null),je=ae(""),de=ae(null),Re=ae(null),Xe=ae(""),ye=ae(!1);function Oe(){const $=l(je).trim().toLowerCase();return $?l(Ye).filter(De=>De.name.toLowerCase().includes($)||De.minecraft_version.toLowerCase().includes($)||De.id.toLowerCase().includes($)):l(Ye)}async function pe(){try{g(Ye,await X("scan_instances"),!0),g(te,"")}catch($){g(te,String($),!0)}}function Ge($){g(de,$,!0)}async function He($,De=null){if(l(we))return;const it=l(Ye).find(It=>It.id===$),Ct=it?it.name:$;g(we,!0),g(a,De?`Running ${Ct} → ${De}…`:`Running ${Ct}…`,!0),g(Ee,!0);try{const It=await X("launch_instance",{instanceId:$,server:De});Fe({stream:"stdout",line:`launcher reports exit code ${It}`}),await pe(),g(a,"Ready")}catch(It){console.error("Launch failed:",It),Fe({stream:"stderr",line:`[ERROR] Launch failed: ${It}`}),rr(`Launch failed: ${It}`,"error"),g(a,"Launch failed")}finally{g(we,!1),l(a)!=="Launch failed"&&g(a,"Ready")}}function P(){l(x)&&X("open_path",{path:l(x).instances_dir}).catch($=>g(a,String($),!0))}function _($){l(x)&&X("open_path",{path:[l(x).instances_dir.replace(/\\/g,"/"),$].join("/")}).catch(De=>g(a,String(De),!0))}function U($){g(Xe,""),g(Re,$,!0)}async function q($){if(!(!l(Re)||l(ye))){g(ye,!0),g(Xe,"");try{await X("delete_instance",{instanceId:l(Re),toTrash:$}),l(de)===l(Re)&&g(de,null),g(Re,null),await pe(),g(a,$?"Instance moved to trash.":"Instance deleted.",!0)}catch(De){g(Xe,String(De),!0)}finally{g(ye,!1)}}}const Q=st(()=>[...new Set(l(Ye).map($=>$.group).filter(Boolean))].sort(($,De)=>$.localeCompare(De)));async function be($){if(!l(me))return;const De=l(me).name;try{await X("set_instance_group",{instanceId:l(me).id,group:$}),await pe(),g(a,$?`Moved ${De} to ${$}.`:`${De} is ungrouped.`,!0)}catch(it){g(a,String(it),!0)}}async function Ne(){if(!l(me))return;const $=l(me).name;try{const De=await X("duplicate_instance",{instanceId:l(me).id});await pe(),g(de,De.id,!0),rr(`Copied ${$}.`,"success"),g(a,`Copied ${$}.`)}catch(De){g(a,String(De),!0),rr(`Copy failed: ${De}`,"error")}}async function Te(){if(!l(me))return;const $=window.__TAURI__?.dialog?.save;if(!$){g(a,"File picker unavailable in this build.");return}try{const De=await $({title:"Export instance",defaultPath:`${l(me).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!De)return;const it=await X("export_instance_zip",{instanceId:l(me).id,destPath:De});g(a,`Exported to ${it}.`)}catch(De){g(a,String(De),!0)}}async function Y(){if(l(me))try{const $=await X("create_desktop_shortcut",{instanceId:l(me).id});rr(`Shortcut created: ${$}`,"success"),g(a,`Shortcut created: ${$}`)}catch($){g(a,String($),!0),rr(`Shortcut failed: ${$}`,"error")}}async function C($,De){g(p,!1),await pe(),$?.id&&g(de,$.id,!0),g(a,De||`Instance ${$?.name??""} created.`,!0)}function oe($){g(L,$,!0)}const me=st(()=>l(Ye).find($=>$.id===l(de))??null);let z=ae(null),ne=0;$t(()=>{const $=l(me);l(L);const De=++ne;g(z,null),$&&X("list_instance_mods",{instanceId:$.id}).then(it=>{De===ne&&g(z,it.length,!0)}).catch(()=>{De===ne&&g(z,null)})});async function Ae(){try{g(B,await X("get_java_prefs"),!0),g(O,l(B).java_path??"",!0),g(F,l(B).min_memory_mb,!0),g(V,l(B).max_memory_mb,!0),g(he,""),l(y).length===0&&await Me()}catch{}}async function Be(){g(he,"");try{await X("set_java_prefs",{javaPath:l(O).trim()||null,minMemoryMb:Number(l(F))||0,maxMemoryMb:Number(l(V))||0}),g(he,"Java settings saved.")}catch($){g(he,String($),!0)}}async function N(){g(w,!0);try{g(x,await X("get_storage"),!0)}catch($){g(Z,String($),!0)}finally{g(w,!1)}}async function Pe($,De){g(w,!0),g(Z,"");try{await X("set_folder_dir",{kind:$,path:De?.trim()||null}),g(x,await X("get_storage"),!0),g(Z,"Folders updated."),($==="instances"||$==="shared")&&(await pe(),l(de)&&!l(Ye).some(it=>it.id===l(de))&&g(de,null))}catch(it){g(Z,String(it),!0)}finally{g(w,!1)}}function se($){X("open_path",{path:$}).catch(De=>g(a,String(De),!0))}async function Se(){g(w,!0),g(Z,"");try{await X("clean_staging"),g(Z,"Staging cleaned.")}catch($){g(Z,String($),!0)}finally{g(w,!1)}}function ve($){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[$.account_type.type]??"Yggdrasil"}Ci(()=>{const $=[],De=it=>{if(it.key==="Escape"){const sn=Uc();if(sn){sn();return}l(ft)?g(ft,null):l(Re)?(g(Re,null),g(Xe,"")):l(L)?g(L,null):l(de)?g(de,null):l(v)?g(v,!1):l(E)?g(E,!1):l(Ee)&&g(Ee,!1);return}if(l(ft)||l(Re)||l(v)||l(E)||l(L)||l(Ee)||Uc()||it.target?.closest?.("input, textarea, select, [contenteditable]"))return;const It=Oe();if(!It.length)return;const Vt=It.findIndex(sn=>sn.id===l(de));let an=null;if(it.key==="ArrowDown"||it.key==="ArrowRight")an=Vt+1;else if(it.key==="ArrowUp"||it.key==="ArrowLeft")an=Vt<0?0:Vt-1;else if(it.key==="Enter"&&Vt>=0&&document.activeElement===document.body){it.preventDefault(),He(It[Vt].id);return}an!=null&&It[an]&&(it.preventDefault(),g(de,It[an].id,!0))};return window.addEventListener("keydown",De),(async()=>{try{g(t,await X("get_version"),!0)}catch{g(t,"dev")}try{$.push(await window.__TAURI__.event.listen("launch-log",it=>Fe(it.payload))),$.push(await window.__TAURI__.event.listen("tauri://drag-drop",it=>{const Ct=it.payload?.paths?.[0];Ct&&Ct.endsWith(".mrpack")&&(l(E)?g(b,Ct,!0):g(H,Ct,!0))}))}catch{}await qs(),await pe(),await N();try{const it=await X("get_startup_launch");it&&l(Ye).some(Ct=>Ct.id===it)&&He(it)}catch{}})(),()=>$.forEach(it=>it())});var Le=hE(),ke=D(Le),Ze=D(ke),ht=M(D(Ze),2);{var nt=$=>{var De=KM();k($,De)};Ie(ht,$=>{l(o)&&$(nt)})}var _t=M(Ze,2),pt=D(_t);wt(pt,17,()=>d,$=>$.id,($,De)=>{var it=JM(),Ct=D(it),It=D(Ct);zt(It,{get name(){return l(De).icon},size:15});var Vt=M(Ct,2);{var an=sn=>{var Xn=ZM(),Bn=K(Xn,!0);ge(()=>J(Bn,l(De).label)),k(sn,Xn)};Ie(Vt,sn=>{l(o)&&sn(an)})}ge(()=>{dt(it,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${l(o)?"":"justify-center"} ${l(n)===l(De).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),ze(it,"title",l(De).label)}),ie("click",it,()=>{g(n,l(De).id,!0),g(L,null),g(s,"launcher"),l(De).id==="settings"&&(Ae(),l(x)||N())}),k($,it)});var xt=M(pt,2),At=D(xt),en=D(At);zt(en,{name:"new",size:15});var Ht=M(At,2);{var Rt=$=>{var De=QM();k($,De)};Ie(Ht,$=>{l(o)&&$(Rt)})}var Jt=M(_t,2),vi=D(Jt);{let $=st(()=>ds(l(f))),De=st(()=>l(f)?l(f).username[0]?.toUpperCase():"?");hc(vi,{get source(){return l($)},size:28,get letter(){return l(De)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var Nt=M(vi,2);{var Kt=$=>{var De=$M(),it=D(De),Ct=K(it,!0),It=M(it,2),Vt=K(It,!0);ge(an=>{J(Ct,l(f)?l(f).username:"Accounts"),J(Vt,an)},[()=>l(f)?ve(l(f)):"manage & sign in"]),k($,De)};Ie(Nt,$=>{l(o)&&$(Kt)})}var yn=M(Jt,2),I=K(yn,!0),ue=M(ke,2),_e=D(ue),ce=D(_e),xe=D(ce);{var Je=$=>{var De=eE(),it=St(De),Ct=M(it,2),It=K(Ct,!0);ge(()=>{ze(Ct,"title",l(L)?.name),J(It,l(L)?.name)}),ie("click",it,()=>g(L,null)),k($,De)},rt=$=>{var De=nE(),it=St(De),Ct=K(it),It=M(it,4);wt(It,20,()=>[["launcher","Launcher"],["client","Client"]],Sl,(Vt,an)=>{var sn=st(()=>Dd(an,2));let Xn=()=>l(sn)[0],Bn=()=>l(sn)[1];var Un=tE(),Li=K(Un,!0);ge(()=>{dt(Un,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${l(s)===Xn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),ze(Un,"aria-selected",l(s)===Xn()),J(Li,Bn())}),ie("click",Un,()=>g(s,Xn(),!0)),k(Vt,Un)}),ge(()=>J(Ct,`TwilightMC Bolide (alpha-v${l(t)??""})`)),k($,De)};Ie(xe,$=>{l(R)==="edit"?$(Je):$(rt,-1)})}var ct=M(ce,2),lt=K(ct,!0),bt=M(_e,2),ut=D(bt);{var vt=$=>{RM($,{onback:()=>g(n,"instances")})},fe=$=>{BM($,{get instances(){return l(Ye)},get active(){return l(f)},get gameRunning(){return l(we)},get status(){return l(a)},onlaunch:He,onopenconsole:()=>g(Ee,!0),get onrefresh(){return qs},onopenaccounts:()=>{g(n,"accounts"),g(s,"launcher")}})},Ce=$=>{jv($,{get instance(){return l(L)},get storage(){return l(x)},get blindMode(){return l(c)},get deafMode(){return l(u)},onback:()=>g(L,null),onopenconsole:()=>g(Ee,!0)})},Ke=$=>{t_($,{get version(){return l(t)},get storage(){return l(x)},get runtimes(){return l(y)},get scanning(){return l(S)},get javaError(){return l(m)},get storageBusy(){return l(w)},get storageMsg(){return l(Z)},get javaMsg(){return l(he)},get gameRunning(){return l(we)},onback:()=>g(n,"instances"),onscanjava:Me,onsaveprefs:Be,onsavefolder:Pe,onopenfolder:se,oncleanstaging:Se,onopenaccounts:()=>{g(n,"accounts"),g(s,"launcher")},onopenurl:De=>X("open_external_url",{url:De}).catch(it=>g(a,String(it),!0)),get theme(){return l(r)},set theme(De){g(r,De,!0)},get blindMode(){return l(c)},set blindMode(De){g(c,De,!0)},get deafMode(){return l(u)},set deafMode(De){g(u,De,!0)},get javaPath(){return l(O)},set javaPath(De){g(O,De,!0)},get minMem(){return l(F)},set minMem(De){g(F,De,!0)},get maxMem(){return l(V)},set maxMem(De){g(V,De,!0)}})},ot=$=>{var De=iE(),it=St(De),Ct=D(it),It=D(Ct);zt(It,{name:"new",size:13});var Vt=M(Ct,2),an=D(Vt);zt(an,{name:"folder",size:14});var sn=M(Vt,2),Xn=D(sn);zt(Xn,{name:"package",size:14});var Bn=M(sn,2),Un=D(Bn);zt(Un,{name:"settings",size:14});var Li=M(Bn,2),gi=M(Li,4),_i=D(gi);{var on=qn=>{zt(qn,{name:"sun",size:15})},Di=st(()=>ja(l(r))),Eo=qn=>{zt(qn,{name:"moon",size:15})};Ie(_i,qn=>{l(Di)?qn(on):qn(Eo,-1)})}var Ch=M(it,2);{let qn=st(Oe);Am(Ch,{get instances(){return l(qn)},get error(){return l(te)},get query(){return l(je)},get selectedId(){return l(de)},get gameRunning(){return l(we)},get menuFor(){return l(ft)},onselect:Ge,onplay:He,ontogglemenu:yc=>g(ft,l(ft)===yc?null:yc,!0),onedit:oe,onopenfolder:_,onviewlogs:()=>g(Ee,!0),ondelete:U,onclosemenu:()=>g(ft,null),onadd:j})}ge(qn=>{Vt.disabled=!l(x),ze(Vt,"title",l(x)?l(x).instances_dir:""),ze(gi,"title",qn)},[()=>ja(l(r))?"Twilight Light":"Twilight Dark"]),ie("click",Ct,j),ie("click",Vt,P),ie("click",sn,()=>g(E,!0)),ie("click",Bn,()=>{g(n,"settings"),Ae(),l(x)||N()}),Wt(Li,()=>l(je),qn=>g(je,qn)),ie("click",gi,le),k($,De)},tt=$=>{var De=rE(),it=St(De),Ct=K(it,!0),It=M(it,2),Vt=K(It,!0);ge(()=>{J(Ct,h[l(n)][0]),J(Vt,h[l(n)][1])}),k($,De)};Ie(ut,$=>{l(R)==="accounts"?$(vt):l(s)==="client"?$(fe,1):l(R)==="edit"&&l(L)?$(Ce,2):l(n)==="settings"?$(Ke,3):l(n)==="instances"?$(ot,4):$(tt,-1)})}var Qe=M(bt,2),Dt=D(Qe),gt=D(Dt),Qt=D(gt),Fn=M(Qt,2);zt(Fn,{name:"log",size:13});var mn=M(Fn,4);{var In=$=>{var De=aE();k($,De)};Ie(mn,$=>{l(we)&&$(In)})}var Ft=M(gt,2),gn=D(Ft),An=M(gn,2),Ot=M(An,2),Pi=M(Ot,2);{var Mo=$=>{var De=sE();ie("click",De,()=>g(Ee,!1)),k($,De)};Ie(Pi,$=>{l(Ee)&&$(Mo)})}var Da=M(Dt,2);wt(Da,21,()=>l(ee),Sl,($,De)=>{var it=oE(),Ct=K(it,!0);ge(It=>{dt(it,1,`whitespace-pre-wrap break-all ${It??""}`),J(Ct,l(De).line)},[()=>Ve(l(De))]),k($,it)},$=>{var De=lE();k($,De)}),Mf(Da,$=>g(Ue,$),()=>l(Ue));var pc=M(ue,2);{var Sh=$=>{Lg($,{get instance(){return l(me)},get storage(){return l(x)},get gameRunning(){return l(we)},get modsCount(){return l(z)},get groups(){return l(Q)},onlaunch:()=>He(l(me).id),onkill:mt,onedit:()=>oe(l(me)),onchangegroup:be,onopenfolder:()=>_(l(me).id),onexport:Te,oncopy:Ne,ondelete:()=>U(l(me).id),onshortcut:Y})};Ie(pc,$=>{l(R)==="instances"&&l(me)&&$(Sh)})}var mc=M(pc,2);{var Mh=$=>{Qv($,{get path(){return l(H)},onclose:()=>g(H,null),oninstalled:async De=>{g(H,null),await pe(),g(de,De,!0),g(a,"Modpack installed.")}})};Ie(mc,$=>{l(H)&&$(Mh)})}var vc=M(mc,2);{var Eh=$=>{gM($,{get accounts(){return $n.list},get active(){return l(f)},onclose:()=>{g(v,!1),qs()},get onrefresh(){return qs}})};Ie(vc,$=>{l(v)&&$(Eh)})}var gc=M(vc,2);{var wh=$=>{wg($,{get groups(){return l(Q)},get blindMode(){return l(c)},get deafMode(){return l(u)},onclose:()=>g(p,!1),oncreated:C})};Ie(gc,$=>{l(p)&&$(wh)})}var _c=M(gc,2);{var Th=$=>{var De=uE(),it=D(De),Ct=D(it),It=M(D(Ct),2),Vt=M(Ct,2),an=D(Vt),sn=M(an,2),Xn=M(sn,2);{var Bn=on=>{var Di=cE(),Eo=K(Di,!0);ge(()=>J(Eo,l(A))),k(on,Di)};Ie(Xn,on=>{l(A)&&on(Bn)})}var Un=M(Vt,2),Li=D(Un),gi=M(Li,2),_i=K(gi,!0);ge(on=>{gi.disabled=on,J(_i,l(T)?"Installing…":"Install .mrpack")},[()=>l(T)||!l(b).trim()]),ie("click",De,on=>{on.target===on.currentTarget&&!l(T)&&g(E,!1)}),ie("click",It,()=>g(E,!1)),jn("dragover",an,on=>on.preventDefault()),jn("drop",an,on=>{on.preventDefault();const Di=on.dataTransfer?.files?.[0]?.path;Di&&g(b,Di,!0)}),Wt(sn,()=>l(b),on=>g(b,on)),ie("click",Li,()=>g(E,!1)),ie("click",gi,G),k($,De)};Ie(_c,$=>{l(E)&&$(Th)})}var xc=M(_c,2);{var Ah=$=>{var De=fE(),it=D(De),Ct=M(D(it),2),It=M(D(Ct)),Vt=K(It,!0),an=M(Ct,2);{var sn=_i=>{var on=dE(),Di=K(on,!0);ge(()=>J(Di,l(Xe))),k(_i,on)};Ie(an,_i=>{l(Xe)&&_i(sn)})}var Xn=M(an,2),Bn=D(Xn),Un=M(Bn,2),Li=D(Un);Mi(Li,{emoji:"♻"});var gi=M(Un,2);ge(()=>{J(Vt,l(Re)),Bn.disabled=l(ye),Un.disabled=l(ye),gi.disabled=l(ye)}),ie("click",De,_i=>{_i.target===_i.currentTarget&&!l(ye)&&g(Re,null)}),ie("click",Bn,()=>g(Re,null)),ie("click",Un,()=>q(!0)),ie("click",gi,()=>q(!1)),k($,De)};Ie(xc,$=>{l(Re)&&$(Ah)})}var bc=M(xc,2);WM(bc,{});var Rh=M(bc,2);YM(Rh,{}),ge(()=>{dt(ke,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${l(o)?"w-60":"w-16"}`),dt(xt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${l(o)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),dt(Jt,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${l(o)?"":"justify-center"}`),ze(Jt,"title",l(f)?l(f).username:"Manage accounts"),dt(yn,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${l(o)?"":"opacity-0 group-hover/nav:opacity-100"}`),J(I,l(o)?"«":"»"),J(lt,l(a)),dt(Qe,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${l(Ee)?"h-48":"h-10"}`),ze(gt,"title",l(Ee)?"Collapse console":"Expand console"),dt(Qt,1,`h-2 w-2 shrink-0 rounded-full ${l(we)?"animate-pulse bg-green-500":"bg-(--border)"}`),gn.disabled=!l(ee).length,An.disabled=!l(ee).length,Ot.disabled=!l(we)}),ie("dblclick",Ze,()=>g(o,!l(o))),ie("click",xt,j),ie("click",Jt,()=>{g(n,"accounts"),g(L,null),g(s,"launcher")}),ie("click",yn,()=>g(o,!l(o))),ie("click",gt,()=>g(Ee,!l(Ee))),ie("click",gn,$=>{$.stopPropagation(),We()}),ie("click",An,$=>{$.stopPropagation(),et()}),ie("click",Ot,$=>{$.stopPropagation(),mt()}),k(i,Le),Yt()}cn(["dblclick","click"]);Jp(pE,{target:document.getElementById("app")});
