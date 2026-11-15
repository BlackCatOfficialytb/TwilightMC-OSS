(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Td=!1;var uo=Array.isArray,wh=Array.prototype.indexOf,Ja=Array.prototype.includes,fo=Array.from,Ad=Object.defineProperty,na=Object.getOwnPropertyDescriptor,Th=Object.getOwnPropertyDescriptors,Ah=Object.prototype,Rh=Array.prototype,Rd=Object.getPrototypeOf,bc=Object.isExtensible;const Ch=()=>{};function Ph(i){for(var e=0;e<i.length;e++)i[e]()}function Cd(){var i,e,t=new Promise((n,r)=>{i=n,e=r});return{promise:t,resolve:i,reject:e}}function Pd(i,e){if(Array.isArray(i))return i;if(!(Symbol.iterator in i))return Array.from(i);const t=[];for(const n of i)if(t.push(n),t.length===e)break;return t}const yn=2,ca=4,ho=8,Ld=1<<24,ri=16,ui=32,ar=64,hl=128,zl=256,oi=512,sn=1024,kt=2048,On=4096,Tn=8192,mn=16384,ya=32768,Qa=1<<25,ua=65536,$s=1<<17,Lh=1<<18,Sa=1<<19,Dh=1<<20,vi=1<<25,eo=1<<21,ia=1<<22,tr=1<<23,br=Symbol("$state"),Dd=Symbol("component"),Ih=Symbol("legacy props"),Uh=Symbol(""),Id=Symbol("attributes"),pl=Symbol("class"),ml=Symbol("style"),vl=Symbol("text"),Ys=Symbol("form reset"),us=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Nh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),Oh=1,kh=2,Ud=4,Fh=8,Bh=16,zh=1,Gh=4,Hh=8,Vh=16,Wh=1,jh=2,Nd={},an=Symbol("uninitialized"),Xh="http://www.w3.org/1999/xhtml";function qh(){console.warn("https://svelte.dev/e/derived_inert")}function Yh(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Kh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Od(i){return i===this.v}function Zh(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function kd(i){return!Zh(i,this.v)}function Fd(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Jh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Qh(i,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function $h(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ep(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tp(i){throw new Error("https://svelte.dev/e/effect_orphan")}function np(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ip(i){throw new Error("https://svelte.dev/e/props_invalid_value")}function rp(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ap(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sp(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function op(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let lp=!1,vn=null;function da(i){vn=i}function Wt(i,e=!1,t){vn={p:vn,i:!1,c:null,e:null,s:i,x:null,r:wt,l:null}}function jt(i){var e=vn,t=e.e;if(t!==null){e.e=null;for(var n of t)rf(n)}return e.i=!0,vn=e.p,Gl(i)}function Gl(i={}){return Ad(i,Dd,{value:!0}),i}function Bd(){return!0}let gr=[];function zd(){var i=gr;gr=[],Ph(i)}function gi(i){if(gr.length===0&&!Xa){var e=gr;queueMicrotask(()=>{e===gr&&zd()})}gr.push(i)}function cp(){for(;gr.length>0;)zd()}const up=-7169;function Kt(i,e){i.f=i.f&up|e}function Hl(i){(i.f&oi)!==0||i.deps===null?Kt(i,sn):Kt(i,On)}function Gd(i,e){(i.f&kt)!==0?e.set(i,kt):(i.f&On)!==0&&e.get(i)!==kt&&e.set(i,On),Kt(i,sn)}function dp(i,e){{const t=document.body;i.autofocus=!0,gi(()=>{document.activeElement===t&&i.focus()})}}let yc=!1;function fp(){yc||(yc=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(const e of i.target.elements)e[Ys]?.()})},{capture:!0}))}function Ma(i){var e=bt,t=wt;Zn(null),yi(null);try{return i()}finally{Zn(e),yi(t)}}function Hd(i,e,t,n=t){i.addEventListener(e,()=>Ma(t));const r=i[Ys];r?i[Ys]=()=>{r(),n(!0)}:i[Ys]=()=>n(!0),fp()}function hp(i,e,t,n){const r=$a;var a=i.filter(v=>!v.settled),o=e.map(r);if(t.length===0&&a.length===0){n(o);return}var s=wt,c=pp(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(v=>v.promise)):null;function d(v){if((s.f&mn)===0){c();try{n([...o,...v])}catch(x){mi(x,s)}to()}}var h=Vd();if(t.length===0){u.then(()=>d([])).finally(h);return}function f(){Promise.all(t.map(v=>mp(v))).then(d).catch(v=>mi(v,s)).finally(h)}u?u.then(()=>{if((s.f&mn)!==0){h();return}c(),f(),to()}):f()}function pp(){var i=wt,e=bt,t=vn,n=ft;return function(a=!0){yi(i),Zn(e),da(t),a&&(i.f&mn)===0&&(n?.activate(),n?.apply())}}function to(i=!0){yi(null),Zn(null),da(null),i&&ft?.deactivate()}function Vd(){var i=wt,e=i.b,t=ft,n=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(n,i),()=>{e?.update_pending_count(-1,t),t.decrement(n,i)}}function $a(i){var e=yn|kt;return wt!==null&&(wt.f|=Sa),{ctx:vn,deps:null,effects:null,equals:Od,f:e,fn:i,reactions:null,rv:0,v:an,wv:0,parent:wt,ac:null}}const za=Symbol("obsolete");function mp(i,e,t){let n=wt;n===null&&Jh();var r=void 0,a=Ar(an),o=!bt,s=new Set;return Pp(()=>{var c=wt,u=Cd();r=u.promise;try{Promise.resolve(i()).then(u.resolve,v=>{v!==us&&u.reject(v)}).finally(to)}catch(v){u.reject(v),to()}var d=ft;if(o){if((c.f&ya)!==0)var h=Vd();if(n.b?.is_rendered())d.async_deriveds.get(c)?.reject(za);else for(const v of s.values())v.reject(za);s.add(u),d.async_deriveds.set(c,u)}const f=(v,x=void 0)=>{h?.(),s.delete(u),x!==za&&(d.activate(),x?(a.f|=tr,fa(a,x)):((a.f&tr)!==0&&(a.f^=tr),fa(a,v)),d.deactivate())};u.promise.then(f,v=>f(null,v||"unknown"))}),ql(()=>{for(const c of s)c.reject(za)}),new Promise(c=>{function u(d){function h(){d===r?c(a):u(r)}d.then(h,h)}u(r)})}function at(i){const e=$a(i);return uf(e),e}function Wd(i){const e=$a(i);return e.equals=kd,e}function vp(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)Cn(e[t])}}function Vl(i){var e,t=wt,n=i.parent;if(!Gi&&n!==null&&i.v!==an&&(n.f&(mn|Tn))!==0)return qh(),i.v;yi(n);try{vp(i),e=pf(i)}finally{yi(t)}return e}function jd(i){var e=Vl(i);if(!i.equals(e)&&(i.wv=ff(),(!ft?.is_fork||i.deps===null)&&(ft!==null?(ft.capture(i,e,!0),ra?.capture(i,e,!0)):i.v=e,i.deps===null))){Kt(i,sn);return}Gi||(ai!==null?(Xl()||ft?.is_fork)&&ai.set(i,e):Hl(i))}function gp(i){if(i.effects!==null)for(const e of i.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&Ma(()=>{e.ac.abort(us),e.ac=null}),e.fn!==null&&(e.teardown=Ch),ts(e,0),Kl(e))}function Xd(i){if(i.effects!==null)for(const e of i.effects)e.teardown&&e.fn!==null&&ha(e)}let Eo=null,Lr=null,ft=null,ra=null,ai=null,gl=null,Xa=!1,wo=!1,qa=null,Ks=null;var Sc=0;let _p=1;class sr{id=_p++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Lr===null?Eo=Lr=this:(Lr.next=this,this.prev=Lr),Lr=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=n=>this.schedule(n)){var n=this.#o.get(e);if(n){this.#o.delete(e);for(var r of n.d)Kt(r,kt),t(r);for(r of n.m)Kt(r,On),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&mn)!==0||(a.f&(kt|On))===0)){for(var t=a,n=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(ar|ui))!==0){if((r&sn)===0){n=!0;break}t.f^=sn}}n||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,c]of this.#r)Kt(s,c),this.schedule(s);this.apply();for(var e=qa=[],t=[],n=Ks=[];this.#i.length>0;){Sc++>1e3&&(this.#f(),bp());for(const s of this.#u())try{this.#x(s,e,t)}catch(c){throw Kd(s),this.#p()||this.discard(),c}}if(ft=null,n.length>0){var r=sr.ensure();for(const s of n)r.schedule(s)}if(qa=null,Ks=null,this.#p()){this.#v(t),this.#v(e);for(const[s,c]of this.#o)Yd(s,c);n.length>0&&ft.#m();return}const a=this.#S();if(a){this.#v(t),this.#v(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),ra=this,Mc(t),Mc(e),ra=null,this.#n?.resolve();var o=ft;this.#e===0&&(this.#i.length===0||o!==null)&&this.#f(),o!==null&&(xi.clear(),o.#m())}#x(e,t,n){e.f^=sn;for(var r=e.first;r!==null;){var a=r.f,o=(a&(ui|ar))!==0,s=o&&(a&sn)!==0,c=s||(a&Tn)!==0||this.#o.has(r);if(!c&&r.fn!==null){o?r.f^=sn:(a&ca)!==0?t.push(r):fs(r)&&((a&ri)!==0&&this.add_dirty_reaction(r,On),ha(r));var u=r.first;if(u!==null){r=u;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#S(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,n]]of this.current)if(!n&&e.current.has(t))return!0;return!1}#d(e){for(const[n,r]of e.current)!this.previous.has(n)&&e.previous.has(n)&&this.previous.set(n,e.previous.get(n)),this.current.set(n,r);for(const[n,r]of e.async_deriveds){const a=this.async_deriveds.get(n);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=n=>{var r=n.reactions;if(r!==null&&!((n.f&yn)!==0&&(n.f&(kt|On))===0))for(const s of r){var a=s.f;if((a&yn)!==0)t(s);else{var o=s;a&(ia|ri)&&!this.async_deriveds.has(o)&&(this.#r.delete(o),Kt(o,kt),this.schedule(o))}}};for(const n of this.current.keys())t(n);this.oncommit(()=>e.discard()),e.#f(),ft=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)Gd(e[t],this.#r)}capture(e,t,n=!1){e.v!==an&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&tr)===0&&(this.current.set(e,[t,n]),ai?.set(e,t)),this.is_fork||(e.v=t)}activate(){ft=this}deactivate(){ft=null,ai=null}flush(){try{wo=!0,ft=this,this.#m()}finally{Sc=0,gl=null,qa=null,Ks=null,wo=!1,ft=null,ai=null,xi.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(za);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let h=Eo;h!==null;h=h.next){var e=h.id<this.id,t=[];for(const[f,[v,x]]of this.current){if(h.current.has(f)){var n=h.current.get(f)[0];if(e&&v!==n)h.current.set(f,[v,x]);else continue}t.push(f)}if(e)for(const[f,v]of this.async_deriveds){const x=h.async_deriveds.get(f);x&&v.promise.then(x.resolve).catch(x.reject)}var r=[...h.current.keys()].filter(f=>!h.current.get(f)[1]);if(!(!h.started||r.length===0)){var a=r.filter(f=>!this.current.has(f));if(a.length===0)e&&h.discard();else if(t.length>0){if(e)for(const f of this.#h)h.unskip_effect(f,v=>{(v.f&(ri|ia))!==0?h.schedule(v):h.#v([v])});h.activate();var o=new Set,s=new Map;for(var c of t)qd(c,a,o,s);s=new Map;var u=[...h.current].filter(([f,v])=>{const x=this.current.get(f);return x?x[0]!==v[0]||x[1]!==v[1]:!0}).map(([f])=>f);if(u.length>0)for(const f of this.#a)(f.f&(mn|Tn|$s))===0&&Wl(f,u,s)&&((f.f&(ia|ri))!==0?(Kt(f,kt),h.schedule(f)):h.add_dirty_reaction(f,kt));if(h.#i.length>0&&!h.#c){h.apply();for(var d of h.#u())h.#x(d,[],[])}h.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let n=this.#s.get(t)??0;this.#s.set(t,n+1)}}decrement(e,t){if(this.#e-=1,e){let n=this.#s.get(t)??0;n===1?this.#s.delete(t):this.#s.set(t,n-1)}this.#c||(this.#c=!0,gi(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,n]of e)this.add_dirty_reaction(t,n);e.clear()}add_dirty_reaction(e,t){(t===kt||this.#r.get(e)!==kt)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=Cd()).promise}static ensure(){if(ft===null){const e=ft=new sr;!wo&&!Xa&&gi(()=>{e.started||e.flush()})}return ft}apply(){{ai=null;return}}schedule(e){if(gl=e,e.b?.is_pending&&(e.f&(ca|ho|Ld))!==0&&(e.f&ya)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?Eo=t:e.next=t,t===null?Lr=e:t.prev=e,this.linked=!1}}}function xp(i){var e=Xa,t=ra;ra=null,Xa=!0;try{for(var n;;){if(cp(),ft===null)return n;ft.flush()}}finally{Xa=e,ra=t}}function bp(){try{np()}catch(i){mi(i,gl)}}let Ii=null;function Mc(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(mn|Tn))===0&&fs(n)&&(Ii=new Set,ha(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&of(n),Ii?.size>0)){xi.clear();for(const r of Ii){if((r.f&(mn|Tn))!==0)continue;const a=[r];let o=r.parent;for(;o!==null;)Ii.has(o)&&(Ii.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const c=a[s];(c.f&(mn|Tn))===0&&ha(c)}}Ii.clear()}}Ii=null}}function qd(i,e,t,n){if(!t.has(i)&&(t.add(i),i.reactions!==null))for(const r of i.reactions){const a=r.f;(a&yn)!==0?qd(r,e,t,n):(a&(ia|ri))!==0&&(a&kt)===0&&Wl(r,e,n)&&(Kt(r,kt),jl(r))}}function Wl(i,e,t){const n=t.get(i);if(n!==void 0)return n;if(i.deps!==null)for(const r of i.deps){if(Ja.call(e,r))return!0;if((r.f&yn)!==0&&Wl(r,e,t))return t.set(r,!0),!0}return t.set(i,!1),!1}function jl(i){ft.schedule(i)}function Yd(i,e){if(!((i.f&ui)!==0&&(i.f&sn)!==0)){(i.f&kt)!==0?e.d.push(i):(i.f&On)!==0&&e.m.push(i),Kt(i,sn);for(var t=i.first;t!==null;)Yd(t,e),t=t.next}}function Kd(i){Kt(i,sn);for(var e=i.first;e!==null;)Kd(e),e=e.next}let no=new Set;const xi=new Map;let Zd=!1;function Ar(i,e){var t={f:0,v:i,reactions:null,equals:Od,rv:0,wv:0};return t}function de(i,e){const t=Ar(i);return uf(t),t}function yp(i,e=!1,t=!0){const n=Ar(i);return e||(n.equals=kd),n}function g(i,e,t=!1){bt!==null&&(!si||(bt.f&$s)!==0)&&Bd()&&(bt.f&(yn|ri|ia|$s))!==0&&(bi===null||!bi.has(i))&&sp();let n=t?Pt(e):e;return fa(i,n,Ks)}var mr=null,_l=0;function fa(i,e,t=null){if(!i.equals(e)){Gi?xi.set(i,e):xi.has(i)||xi.set(i,i.v);var n=sr.ensure();if(n.capture(i,e),(i.f&yn)!==0){const r=i;(i.f&kt)!==0&&Vl(r),ai===null&&Hl(r)}i.wv=ff(),mr=null,_l=0,Jd(i,kt,t),mr=null,wt!==null&&(wt.f&sn)!==0&&(wt.f&(ui|ar))===0&&(Wn===null?Ip([i]):Wn.push(i)),!n.is_fork&&no.size>0&&!Zd&&Sp()}return e}function Sp(){Zd=!1;for(const i of no){(i.f&sn)!==0&&Kt(i,On);let e;try{e=fs(i)}catch{e=!0}e&&ha(i)}no.clear()}function Ya(i){g(i,i.v+1)}function Jd(i,e,t){var n=i.reactions;if(n!==null){var r=n.length;if(_l+=r,_l>1e5&&mr===null&&(mr=new Set),mr!==null){if(mr.has(i))return;mr.add(i)}for(var a=0;a<r;a++){var o=n[a],s=o.f,c=(s&kt)===0;if(c&&Kt(o,e),(s&$s)!==0)no.add(o);else if((s&yn)!==0){var u=o;ai?.delete(u),Jd(u,On,t)}else if(c){var d=o;(s&ri)!==0&&Ii!==null&&Ii.add(d),t!==null?t.push(d):jl(d)}}}}function Pt(i){if(typeof i!="object"||i===null||br in i||Dd in i)return i;const e=Rd(i);if(e!==Ah&&e!==Rh)return i;var t=new Map,n=uo(i),r=de(0),a=Sr,o=s=>{if(Sr===a)return s();var c=bt,u=Sr;Zn(null),Ac(a);var d=s();return Zn(c),Ac(u),d};return n&&t.set("length",de(i.length)),new Proxy(i,{defineProperty(s,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&rp();var d=t.get(c);return d===void 0?o(()=>{var h=de(u.value);return t.set(c,h),h}):g(d,u.value,!0),!0},deleteProperty(s,c){var u=t.get(c);if(u===void 0){if(c in s){const d=o(()=>de(an));t.set(c,d),Ya(r)}}else g(u,an),Ya(r);return!0},get(s,c,u){if(c===br)return i;var d=t.get(c),h=c in s;if(d===void 0&&(!h||na(s,c)?.writable)&&(d=o(()=>{var v=Pt(h?s[c]:an),x=de(v);return x}),t.set(c,d)),d!==void 0){var f=l(d);return f===an?void 0:f}return Reflect.get(s,c,u)},getOwnPropertyDescriptor(s,c){this.has?.(s,c);var u=Reflect.getOwnPropertyDescriptor(s,c),d=t.get(c);if(d!==void 0){var h=l(d);if(h===an)return;if(u&&"value"in u)u.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(s,c){if(c===br)return!0;var u=t.get(c),d=u!==void 0&&u.v!==an||Reflect.has(s,c);if(u!==void 0||(wt!==null||bt!==null)&&(!d||na(s,c)?.writable)){u===void 0&&(u=o(()=>{var f=d?Pt(s[c]):an,v=de(f);return v}),t.set(c,u));var h=l(u);if(h===an)return!1}return d},set(s,c,u,d){var h=t.get(c),f=c in s;if(n&&c==="length")for(var v=u;v<h.v;v+=1){var x=t.get(v+"");x!==void 0?g(x,an):v in s&&(x=o(()=>de(an)),t.set(v+"",x))}if(h===void 0)(!f||na(s,c)?.writable)&&(h=o(()=>de(void 0)),g(h,Pt(u)),t.set(c,h));else{f=h.v!==an;var b=o(()=>Pt(u));g(h,b)}var m=Reflect.getOwnPropertyDescriptor(s,c);if(m?.set&&m.set.call(d,u),!f){if(n&&typeof c=="string"){var p=t.get("length"),M=Number(c);Number.isInteger(M)&&M>=p.v&&g(p,M+1)}Ya(r)}return!0},ownKeys(s){l(r);var c=Reflect.ownKeys(s).filter(h=>{var f=t.get(h);return f===void 0||f.v!==an});for(var[u,d]of t)d.v!==an&&!(u in s)&&c.push(u);return c},setPrototypeOf(){ap()}})}function Ec(i){try{if(i!==null&&typeof i=="object"&&br in i)return i[br]}catch{}return i}function Qd(i,e){return Object.is(Ec(i),Ec(e))}var wc,$d,ef,tf;function Mp(){if(wc===void 0){wc=window,$d=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;ef=na(e,"firstChild").get,tf=na(e,"nextSibling").get,bc(i)&&(i[pl]=void 0,i[Id]=null,i[ml]=void 0,i.__e=void 0),bc(t)&&(t[vl]=void 0)}}function Fi(i=""){return document.createTextNode(i)}function es(i){return ef.call(i)}function ds(i){return tf.call(i)}function I(i,e){return es(i)}function pt(i,e=!1){{var t=es(i);return t instanceof Comment&&t.data===""?ds(t):t}}function ne(i,e=!1){return es(i)}function E(i,e=1,t=!1){let n=i;for(;e--;)n=ds(n);return n}function Ep(i){i.textContent=""}function nf(){return!1}function wp(i,e,t){return t?document.createElement(i,{is:t}):document.createElement(i)}function Tp(i){var e=wt;if(e===null)return bt.f|=tr,i;if((e.f&ya)===0&&(e.f&ca)===0)throw i;mi(i,e)}function mi(i,e){if(i===Nd)throw i;if(!(e!==null&&(e.f&mn)!==0)){for(;e!==null;){if((e.f&hl)!==0&&(e.f&(mn|Qa))===0){if((e.f&ya)===0)throw i;try{e.b.error(i);return}catch(t){i=t}}e=e.parent}throw i}}function Ap(i){wt===null&&(bt===null&&tp(),ep()),Gi&&$h()}function Rp(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function Wi(i,e){var t=wt;t!==null&&(t.f&Tn)!==0&&(i|=Tn);var n={ctx:vn,deps:null,nodes:null,f:i|kt|oi,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};ft?.register_created_effect(n);var r=n;if((i&ca)!==0)qa!==null?qa.push(n):sr.ensure().schedule(n);else if(e!==null){try{ha(n)}catch(o){throw Cn(n),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&Sa)===0&&(r=r.first,(i&ri)!==0&&(i&ua)!==0&&r!==null&&(r.f|=ua))}if(r!==null&&(r.parent=t,t!==null&&Rp(r,t),bt!==null&&(bt.f&yn)!==0&&(i&ar)===0)){var a=bt;(a.effects??=[]).push(r)}return n}function Xl(){return bt!==null&&!si}function ql(i){const e=Wi(ho,null);return Kt(e,sn),e.teardown=i,e}function qt(i){Ap();var e=wt.f,t=!bt&&(e&ui)!==0&&vn!==null&&!vn.i;if(t){var n=vn;(n.e??=[]).push(i)}else return rf(i)}function rf(i){return Wi(ca|Dh,i)}function Cp(i){sr.ensure();const e=Wi(ar|Sa,i);return(t={})=>new Promise(n=>{t.outro?yr(e,()=>{Cn(e),n(void 0)}):(Cn(e),n(void 0))})}function af(i){return Wi(ca,i)}function Pp(i){return Wi(ia|Sa,i)}function Yl(i,e=0){return Wi(ho|e,i)}function be(i,e=[],t=[],n=[]){hp(n,e,t,r=>{Wi(ho,()=>{i(...r.map(l))})})}function po(i,e=0){var t=Wi(ri|e,i);return t}function jn(i){return Wi(ui|Sa,i)}function sf(i){var e=i.teardown;if(e!==null){const t=Gi,n=bt;Tc(!0),Zn(null);try{e.call(null)}catch(r){mi(r,i.parent)}finally{Tc(t),Zn(n)}}}function Kl(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){const r=t.ac;r!==null&&Ma(()=>{r.abort(us)});var n=t.next;(t.f&ar)!==0?t.parent=null:Cn(t,e),t=n}}function Lp(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&ui)===0&&Cn(e),e=t}}function Cn(i,e=!0){var t=!1;(e||(i.f&Lh)!==0)&&i.nodes!==null&&i.nodes.end!==null&&(Dp(i.nodes.start,i.nodes.end),t=!0),i.f|=Qa,Kl(i,e&&!t),ts(i,0);var n=i.nodes&&i.nodes.t;if(n!==null)for(const a of n)a.stop();sf(i),i.f^=Qa,i.f|=mn;var r=i.parent;r!==null&&r.first!==null&&of(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes=i.ac=i.b=null}function Dp(i,e){for(;i!==null;){var t=i===e?null:ds(i);i.remove(),i=t}}function of(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function yr(i,e,t=!0){var n=[];i.f|=zl,lf(i,n,!0);var r=()=>{t&&Cn(i),e&&e()},a=n.length;if(a>0){var o=()=>--a||r();for(var s of n)s.out(o)}else r()}function lf(i,e,t){if((i.f&Tn)===0){i.f^=Tn;var n=i.nodes&&i.nodes.t;if(n!==null)for(const s of n)(s.is_global||t)&&e.push(s);for(var r=i.first;r!==null;){var a=r.next;if((r.f&ar)===0){var o=(r.f&ua)!==0||(r.f&ui)!==0&&(i.f&ri)!==0;lf(r,e,o?t:!1)}r=a}}}function io(i){i.f&=~zl,cf(i,!0)}function cf(i,e){if((i.f&zl)===0&&(i.f&Tn)!==0){i.f^=Tn,(i.f&sn)===0&&(Kt(i,kt),sr.ensure().schedule(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&ua)!==0||(t.f&ui)!==0;cf(t,r?e:!1),t=n}var a=i.nodes&&i.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function Zl(i,e){if(i.nodes)for(var t=i.nodes.start,n=i.nodes.end;t!==null;){var r=t===n?null:ds(t);e.append(t),t=r}}let Gi=!1;function Tc(i){Gi=i}let bt=null,si=!1;function Zn(i){bt=i}let wt=null;function yi(i){wt=i}let bi=null;function uf(i){bt!==null&&((bt.f&eo)!==0||(bt.f&yn)!==0)&&(bi??=new Set).add(i)}let Rn=null,Un=0,Wn=null;function Ip(i){Wn=i}let df=1,_r=0,Sr=_r;function Ac(i){Sr=i}function ff(){return++df}function fs(i){var e=i.f;if((e&kt)!==0)return!0;if((e&On)!==0){for(var t=i.deps,n=t.length,r=0;r<n;r++){var a=t[r];if(fs(a)&&jd(a),a.wv>i.wv)return!0}(e&oi)!==0&&ai===null&&Kt(i,sn)}return!1}function hf(i,e,t=!0){var n=i.reactions;if(n!==null&&!(bi!==null&&bi.has(i)))for(var r=0;r<n.length;r++){var a=n[r];(a.f&yn)!==0?hf(a,e,!1):e===a&&(t?Kt(a,kt):(a.f&sn)!==0&&Kt(a,On),jl(a))}}function pf(i){var e=Rn,t=Un,n=Wn,r=bt,a=bi,o=vn,s=si,c=Sr,u=i.f;Rn=null,Un=0,Wn=null,bt=(u&(ui|ar))===0?i:null,bi=null,da(i.ctx),si=!1,Sr=++_r,i.ac!==null&&(Ma(()=>{i.ac.abort(us)}),i.ac=null);try{i.f|=eo;var d=i.fn,h=d();i.f|=ya;var f=Rc(i);if(Bd()&&Wn!==null&&!si&&f!==null&&(i.f&(yn|On|kt))===0)for(var v=0;v<Wn.length;v++)hf(Wn[v],i);if(r!==null&&r!==i){if(_r++,r.deps!==null)for(let x=0;x<t;x+=1)r.deps[x].rv=_r;if(e!==null)for(const x of e)x.rv=_r;Wn!==null&&(n===null?n=Wn:n.push(...Wn))}return(i.f&tr)!==0&&(i.f^=tr),h}catch(x){return Rc(i),Tp(x)}finally{i.f^=eo,Rn=e,Un=t,Wn=n,bt=r,bi=a,da(o),si=s,Sr=c}}function Rc(i){var e=i.deps,t=ft?.is_fork;if(Rn!==null){var n;if(t||ts(i,Un),e!==null&&Un>0)for(e.length=Un+Rn.length,n=0;n<Rn.length;n++)e[Un+n]=Rn[n];else i.deps=e=Rn;if(Xl()&&(i.f&oi)!==0)for(n=Un;n<e.length;n++)(e[n].reactions??=[]).push(i)}else!t&&e!==null&&Un<e.length&&(ts(i,Un),e.length=Un);return e}function Up(i,e){let t=e.reactions;if(t!==null){var n=wh.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}if(t===null&&(e.f&yn)!==0&&(Rn===null||!Ja.call(Rn,e))){var a=e;(a.f&oi)!==0&&(a.f^=oi),a.v!==an&&Hl(a),a.ac!==null&&Ma(()=>{a.ac.abort(us),a.ac=null,Kt(a,kt)}),gp(a),ts(a,0)}}function ts(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)Up(i,t[n])}function ha(i){var e=i.f;if((e&mn)===0){Kt(i,sn);var t=wt;wt=i;try{(e&(ri|Ld))!==0?Lp(i):Kl(i),sf(i);var n=pf(i);i.teardown=typeof n=="function"?n:null,i.wv=df;var r;Td&&lp&&(i.f&kt)!==0&&i.deps}finally{wt=t}}}async function Np(){await Promise.resolve(),xp()}function l(i){var e=i.f,t=(e&yn)!==0;if(bt!==null&&!si){var n=wt!==null&&(wt.f&mn)!==0;if(!n&&(bi===null||!bi.has(i))){var r=bt.deps;if((bt.f&eo)!==0)i.rv<_r&&(i.rv=_r,Rn===null&&r!==null&&r[Un]===i?Un++:Rn===null?Rn=[i]:Rn.push(i));else{bt.deps??=[],Ja.call(bt.deps,i)||bt.deps.push(i);var a=i.reactions;a===null?i.reactions=[bt]:Ja.call(a,bt)||a.push(bt)}}}if(Gi&&xi.has(i))return xi.get(i);if(t){var o=i;if(Gi){var s=o.v;return((o.f&sn)===0&&o.reactions!==null||vf(o))&&(s=Vl(o)),xi.set(o,s),s}var c=(o.f&oi)===0&&!si&&bt!==null&&(bt.f&oi)!==0,u=(o.f&ya)===0;fs(o)&&(c&&(o.f|=oi),jd(o)),c&&!u&&(Xd(o),mf(o))}if(ai?.has(i))return ai.get(i);if((i.f&tr)!==0)throw i.v;return i.v}function mf(i){if(i.f|=oi,i.deps!==null)for(const t of i.deps){var e=t.reactions;e===null?t.reactions=[i]:Ja.call(e,i)||e.push(i),(t.f&yn)!==0&&(t.f&oi)===0&&(Xd(t),mf(t))}}function vf(i){if(i.v===an)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(xi.has(e)||(e.f&yn)!==0&&vf(e))return!0;return!1}function Ea(i){var e=si;try{return si=!0,i()}finally{si=e}}const Op=["touchstart","touchmove"];function kp(i){return Op.includes(i)}const Ga=Symbol("events"),gf=new Set,xl=new Set;function Fp(i,e,t,n={}){function r(a){if(n.capture||bl.call(e,a),!a.cancelBubble)return Ma(()=>t?.call(this,a))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?(r.__removed=!1,gi(()=>{r.__removed||e.addEventListener(i,r,n)})):e.addEventListener(i,r,n),r}function kn(i,e,t,n,r){var a={capture:n,passive:r},o=Fp(i,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&ql(()=>{o.__removed=!0,e.removeEventListener(i,o,a)})}function se(i,e,t){(e[Ga]??={})[i]=t}function cn(i){for(var e=0;e<i.length;e++)gf.add(i[e]);for(var t of xl)t(i)}let To=null,Ao=!1;function bl(i){var e=this,t=e.ownerDocument,n=i.type,r=i.composedPath?.()||[],a=r[0]||i.target;To=i,Ao||(Ao=!0,setTimeout(()=>{Ao=!1,To=null}));var o=0,s=To===i&&i[Ga];if(s){var c=r.indexOf(s);if(c!==-1&&(e===document||e===window)){i[Ga]=e;return}var u=r.indexOf(e);if(u===-1)return;c<=u&&(o=c)}if(a=r[o]||i.target,a!==e){Ad(i,"currentTarget",{configurable:!0,get(){return a||t}});var d=bt,h=wt;Zn(null),yi(null);try{for(var f,v=[];a!==null&&a!==e;){try{var x=a[Ga]?.[n];x!=null&&(!a.disabled||i.target===a)&&x.call(a,i)}catch(b){f?v.push(b):f=b}if(i.cancelBubble)break;o++,a=o<r.length?r[o]:null}if(f){for(let b of v)queueMicrotask(()=>{throw b});throw f}}finally{i[Ga]=e,delete i.currentTarget,Zn(d),yi(h)}}}const Bp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:i=>i});function zp(i){return Bp?.createHTML(i)??i}function Gp(i){var e=wp("template");return e.innerHTML=zp(i.replaceAll("<!>","<!---->")),e.content}function ro(i,e){var t=wt;t.nodes===null&&(t.nodes={start:i,end:e,a:null,t:null})}function q(i,e){var t=(e&Wh)!==0,n=(e&jh)!==0,r,a=!i.startsWith("<!>");return()=>{r===void 0&&(r=Gp(a?i:"<!>"+i),t||(r=es(r)));var o=n||$d?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=es(o),c=o.lastChild;ro(s,c)}else ro(o,o);return o}}function Ui(i=""){{var e=Fi(i+"");return ro(e,e),e}}function ns(){var i=document.createDocumentFragment(),e=document.createComment(""),t=Fi();return i.append(e,t),ro(e,t),i}function z(i,e){i!==null&&i.before(e)}function Hp(i){let e=0,t=Ar(0),n;return()=>{Xl()&&(l(t),Yl(()=>(e===0&&(n=Ea(()=>i(()=>Ya(t)))),e+=1,()=>{gi(()=>{e-=1,e===0&&(n?.(),n=void 0,Ya(t))})})))}}var Vp=ua|Sa;function Wp(i,e,t,n){new jp(i,e,t,n)}class jp{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#u=null;#m=Hp(()=>(this.#u=Ar(this.#h),()=>{this.#u=null}));constructor(e,t,n,r){this.#t=e,this.#e=t,this.#s=a=>{var o=wt;o.b=this,o.f|=hl,n(a)},this.parent=wt.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=po(()=>{this.#b()},Vp)}#x(){try{this.#i=jn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#S(e){const t=this.#e.failed,{reset:n,invoke_onerror:r}=this.#_(e);gi(r),t&&(this.#r=jn(()=>{t(this.#t,()=>e,()=>n)}))}#_(e){var t=!1,n=!1;const r=()=>{if(!this.#d()){if(t){Kh();return}t=!0,n&&op(),this.#r!==null&&yr(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{n=!0,this.#e.onerror?.(e,r),n=!1}catch(o){mi(o,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(mn|Qa))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=jn(()=>e(this.#t)),gi(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),n=Fi(),r=!1;if(t.append(n),this.#i=this.#y(()=>{try{return jn(()=>this.#s(n))}catch(a){try{this.error(a),r=!0}catch(o){mi(o,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(ft);return}this.#c===0&&(this.#t.before(t),this.#o=null,yr(this.#a,()=>{this.#a=null}),this.#f(ft))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=jn(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();Zl(this.#i,e);const t=this.#e.pending;this.#a=jn(()=>t(this.#t))}else this.#f(ft)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){Gd(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=wt,n=bt,r=vn;yi(this.#n),Zn(this.#n),da(this.#n.ctx);try{return sr.ensure(),e()}finally{yi(t),Zn(n),da(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&yr(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,gi(()=>{this.#p=!1,this.#u&&fa(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),l(this.#u)}error(e){if(e===Nd||!this.#e.onerror&&!this.#e.failed)throw e;ft?.is_fork?(this.#i&&ft.skip_effect(this.#i),this.#a&&ft.skip_effect(this.#a),this.#r&&ft.skip_effect(this.#r),ft.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(Cn(this.#i),this.#i=null),this.#a&&(Cn(this.#a),this.#a=null),this.#r&&(Cn(this.#r),this.#r=null);let t=this.#e.failed;const n=r=>{if(this.#d())return;const{reset:a,invoke_onerror:o}=this.#_(r);o(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return jn(()=>{var s=wt;s.b=this,s.f|=hl,t(this.#t,()=>r,()=>a)})}catch(s){return mi(s,this.#n.parent),null}}))};gi(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){mi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(n,a=>mi(a,this.#n&&this.#n.parent)):n(r)}})}}function ie(i,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(i[vl]??=i.nodeValue)&&(i[vl]=t,i.nodeValue=`${t}`)}function Xp(i,e){return qp(i,e)}const gs=new Map;function qp(i,{target:e,anchor:t,props:n={},events:r,context:a,intro:o=!0,transformError:s}){Mp();var c=void 0,u=Cp(()=>{var d=t??e.appendChild(Fi());Wp(d,{pending:()=>{}},v=>{Wt({});var x=vn;a&&(x.c=a),r&&(n.$$events=r),c=i(v,n)||Gl(),jt()},s);var h=new Set,f=v=>{for(var x=0;x<v.length;x++){var b=v[x];if(!h.has(b)){h.add(b);var m=kp(b);for(const _ of[e,document]){var p=gs.get(_);p===void 0&&(p=new Map,gs.set(_,p));var M=p.get(b);M===void 0?(_.addEventListener(b,bl,{passive:m}),p.set(b,1)):p.set(b,M+1)}}}};return f(fo(gf)),xl.add(f),()=>{for(var v of h)for(const m of[e,document]){var x=gs.get(m),b=x.get(v);--b==0?(m.removeEventListener(v,bl),x.delete(v),x.size===0&&gs.delete(m)):x.set(v,b)}xl.delete(f),d!==t&&d.parentNode?.removeChild(d)}});return Yp.set(c,u),c}let Yp=new WeakMap;class _f{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),n=this.#l.get(t);if(n)io(n),this.#s.delete(t);else{var r=this.#e.get(t);r&&(io(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[a,o]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(o);s&&(Cn(s.effect),this.#e.delete(o))}for(const[a,o]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var u=document.createDocumentFragment();Zl(o,u),u.append(Fi()),this.#e.set(a,{effect:o,fragment:u})}else Cn(o);this.#s.delete(a),this.#l.delete(a)};this.#n||!n?(this.#s.add(a),yr(o,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[n,r]of this.#e)t.includes(n)||(Cn(r.effect),this.#e.delete(n))};ensure(e,t){var n=ft,r=nf();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),o=Fi();a.append(o),this.#e.set(e,{effect:jn(()=>t(o)),fragment:a})}else this.#l.set(e,jn(()=>t(this.anchor)));if(this.#t.set(n,e),r){for(const[s,c]of this.#l)s===e?n.unskip_effect(c):n.skip_effect(c);for(const[s,c]of this.#e)s===e?n.unskip_effect(c.effect):n.skip_effect(c.effect);n.oncommit(this.#i),n.ondiscard(this.#a)}else this.#i(n)}}function ke(i,e,t=!1){var n=new _f(i),r=t?ua:0;function a(o,s){n.ensure(o,s)}po(()=>{var o=!1;e((s,c=0)=>{o=!0,a(c,s)}),o||a(-1,null)},r)}const Kp=Symbol("NaN");function xf(i,e,t){var n=new _f(i);po(()=>{var r=e();r!==r&&(r=Kp),n.ensure(r,t)})}function yl(i,e){return e}function Zp(i,e,t){for(var n=[],r=e.length,a,o=e.length,s=0;s<r;s++){let h=e[s];yr(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=i.outrogroups;Sl(i,fo(a.done)),f.delete(a),f.size===0&&(i.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=n.length===0&&t!==null&&i.pending.size===0;if(c){var u=t,d=u.parentNode;Ep(d),d.append(u),i.items.clear()}Sl(i,e,!c)}else a={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(a)}function Sl(i,e,t=!0){var n;if(i.pending.size>0){n=new Set;for(const o of i.pending.values())for(const s of o)n.add(i.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(n?.has(a)){a.f|=vi;const o=document.createDocumentFragment();Zl(a,o)}else Cn(e[r],t)}}var Cc;function yt(i,e,t,n,r,a=null){var o=i,s=new Map,c=(e&Ud)!==0;if(c){var u=i;o=u.appendChild(Fi())}var d=null,h=Wd(()=>{var M=t();return uo(M)?M:M==null?[]:fo(M)}),f=new Map,v=!0;function x(M){if((p.effect.f&mn)===0){p.pending.delete(M);var _=l(h);p.fallback=d,Jp(p,_,o,e,n),d!==null&&(_.length===0?(d.f&vi)===0?io(d):(d.f^=vi,Ha(d,null,o)):yr(d,()=>{d=null}))}}function b(M){p.pending.delete(M)}var m=po(()=>{for(var M=l(h),_=M.length,w=new Set,R=ft,D=nf(),P=0;P<_;P+=1){var B=M[P],y=n(B,P),T=v?null:s.get(y);T?(T.v&&fa(T.v,B),T.i&&fa(T.i,P),D&&R.unskip_effect(T.e)):(T=Qp(s,v?o:Cc??=Fi(),B,y,P,r,e,t),v||(T.e.f|=vi),s.set(y,T)),w.add(y)}if(_===0&&a&&!d&&(v?d=jn(()=>a(o)):(d=jn(()=>a(Cc??=Fi())),d.f|=vi)),_>w.size&&Qh(),!v)if(f.set(R,w),D){for(const[ce,V]of s)w.has(ce)||R.skip_effect(V.e);R.oncommit(x),R.ondiscard(b)}else x(R);l(h)}),p={effect:m,items:s,pending:f,outrogroups:null,fallback:d};v=!1}function La(i){for(;i!==null&&(i.f&ui)===0;)i=i.next;return i}function Jp(i,e,t,n,r){var a=(n&Fh)!==0,o=e.length,s=i.items,c=La(i.effect.first),u,d=null,h,f=[],v=[],x,b,m,p;if(a)for(p=0;p<o;p+=1)x=e[p],b=r(x,p),m=s.get(b).e,(m.f&vi)===0&&(m.nodes?.a?.measure(),(h??=new Set).add(m));for(p=0;p<o;p+=1){if(x=e[p],b=r(x,p),m=s.get(b).e,i.outrogroups!==null)for(const T of i.outrogroups)T.pending.delete(m),T.done.delete(m);if((m.f&Tn)!==0&&(io(m),a&&(m.nodes?.a?.unfix(),(h??=new Set).delete(m))),(m.f&vi)!==0)if(m.f^=vi,m===c)Ha(m,null,t);else{var M=d?d.next:c;m===i.effect.last&&(i.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),qi(i,d,m),qi(i,m,M),Ha(m,M,t),d=m,f=[],v=[],c=La(d.next);continue}if(m!==c){if(u!==void 0&&u.has(m)){if(f.length<v.length){var _=v[0],w;d=_.prev;var R=f[0],D=f[f.length-1];for(w=0;w<f.length;w+=1)Ha(f[w],_,t);for(w=0;w<v.length;w+=1)u.delete(v[w]);qi(i,R.prev,D.next),qi(i,d,R),qi(i,D,_),c=_,d=D,p-=1,f=[],v=[]}else u.delete(m),Ha(m,c,t),qi(i,m.prev,m.next),qi(i,m,d===null?i.effect.first:d.next),qi(i,d,m),d=m;continue}for(f=[],v=[];c!==null&&c!==m;)(u??=new Set).add(c),v.push(c),c=La(c.next);if(c===null)continue}(m.f&vi)===0&&f.push(m),d=m,c=La(m.next)}if(i.outrogroups!==null){for(const T of i.outrogroups)T.pending.size===0&&(Sl(i,fo(T.done)),i.outrogroups?.delete(T));i.outrogroups.size===0&&(i.outrogroups=null)}if(c!==null||u!==void 0){var P=[];if(u!==void 0)for(m of u)(m.f&Tn)===0&&P.push(m);for(;c!==null;)(c.f&Tn)===0&&c!==i.fallback&&P.push(c),c=La(c.next);var B=P.length;if(B>0){var y=(n&Ud)!==0&&o===0?t:null;if(a){for(p=0;p<B;p+=1)P[p].nodes?.a?.measure();for(p=0;p<B;p+=1)P[p].nodes?.a?.fix()}Zp(i,P,y)}}a&&gi(()=>{if(h!==void 0)for(m of h)m.nodes?.a?.apply()})}function Qp(i,e,t,n,r,a,o,s){var c=(o&Oh)!==0?(o&Bh)===0?yp(t,!1,!1):Ar(t):null,u=(o&kh)!==0?Ar(r):null;return{v:c,i:u,e:jn(()=>(a(e,c??t,u??r,s),()=>{i.delete(n)}))}}function Ha(i,e,t){if(i.nodes)for(var n=i.nodes.start,r=i.nodes.end,a=e&&(e.f&vi)===0?e.nodes.start:t;n!==null;){var o=ds(n);if(a.before(n),n===r)return;n=o}}function qi(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const Pc=[...` 	
\r\f \v\uFEFF`];function $p(i,e,t){var n=i==null?"":""+i;if(e&&(n=n?n+" "+e:e),t){for(var r of Object.keys(t))if(t[r])n=n?n+" "+r:r;else if(n.length)for(var a=r.length,o=0;(o=n.indexOf(r,o))>=0;){var s=o+a;(o===0||Pc.includes(n[o-1]))&&(s===n.length||Pc.includes(n[s]))?n=(o===0?"":n.substring(0,o))+n.substring(s+1):o=s}}return n===""?null:n}function em(i,e){return i==null?null:String(i)}function ut(i,e,t,n,r,a){var o=i[pl];if(o!==t||o===void 0){var s=$p(t,n,a);s==null?i.removeAttribute("class"):i.className=s,i[pl]=t}else if(a&&r!==a)for(var c in a){var u=!!a[c];(r==null||u!==!!r[c])&&i.classList.toggle(c,u)}return a}function En(i,e,t,n){var r=i[ml];if(r!==e){var a=em(e);a==null?i.removeAttribute("style"):i.style.cssText=a,i[ml]=e}return n}function tm(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function nm(i,e){var t=i.__defaultValue,n=i.multiple,r=n?t??[]:null;if(!(n&&!uo(r))){i.selectedIndex;for(var a of i.options){var o=aa(a);tm(a,n?r.includes(o):Qd(o,t))}}}function bf(i,e,t=!1){if(i.multiple){if(e==null)return;if(!uo(e))return Yh();for(var n of i.options)n.selected=e.includes(aa(n));return}for(n of i.options){var r=aa(n);if(Qd(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function pa(i){var e=new MutationObserver(t=>{t.every(im)||("__defaultValue"in i&&nm(i),"__value"in i&&bf(i,i.__value))});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ql(()=>{e.disconnect()})}function ma(i,e,t=e){var n=new WeakSet,r=!0;Hd(i,"change",a=>{var o=a?"[selected]":":checked",s;if(i.multiple)s=[].map.call(i.querySelectorAll(o),aa);else{var c=i.querySelector(o)??i.querySelector("option:not([disabled])");s=c&&aa(c)}t(s),i.__value=s,ft!==null&&n.add(ft)}),af(()=>{var a=e();if(i===document.activeElement){var o=ft;if(n.has(o))return}if(bf(i,a,r),r&&a===void 0){var s=i.querySelector(":checked");s!==null&&(a=aa(s),t(a))}i.__value=a,r=!1})}function aa(i){return"__value"in i?i.__value:i.value}function im(i){if(i.target.closest("selectedcontent")!==null)return!0;if(i.type==="childList"){var e=[...i.addedNodes,...i.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const rm=Symbol("is custom element"),am=Symbol("is html"),sm=Nh?"progress":"PROGRESS";function is(i,e){var t=Jl(i);t.value===(t.value=e??void 0)||i.value===e&&(e!==0||i.nodeName!==sm)||(i.value=e??"")}function Ka(i,e){var t=Jl(i);t.checked!==(t.checked=e??void 0)&&(i.checked=e)}function je(i,e,t,n){var r=Jl(i),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(i[Uh]=t),t==null?i.removeAttribute(e):typeof t!="string"&&om(i).has(e)?i[e]=t:i.setAttribute(e,t))}function Jl(i){return i[Id]??={[rm]:i.nodeName.includes("-"),[am]:i.namespaceURI===Xh}}var Lc=new Map;function om(i){var e=i.getAttribute("is")||i.nodeName,t=Lc.get(e);if(t)return t;Lc.set(e,t=new Set);for(var n,r=i,a=Element.prototype;a!==r;){n=Th(r);for(var o in n)n[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.add(o);r=Rd(r)}return t}function Bt(i,e,t=e){var n=new WeakSet;Hd(i,"input",async r=>{var a=r?i.defaultValue:i.value;if(a=Ro(i)?Co(a):a,t(a),ft!==null&&n.add(ft),await Np(),a!==(a=e())){var o=i.selectionStart,s=i.selectionEnd,c=i.value.length;if(i.value=a??"",s!==null){var u=i.value.length;o===s&&s===c&&u>c?(i.selectionStart=u,i.selectionEnd=u):(i.selectionStart=o,i.selectionEnd=Math.min(s,u))}}}),Ea(e)==null&&i.value&&(t(Ro(i)?Co(i.value):i.value),ft!==null&&n.add(ft)),Yl(()=>{var r=e();if(i===document.activeElement){var a=ft;if(n.has(a))return}Ro(i)&&r===Co(i.value)||i.type==="date"&&!r&&!i.value||r!==i.value&&(i.value=r??"")})}function Ro(i){var e=i.type;return e==="number"||e==="range"}function Co(i){return i===""?null:+i}function Po(i,e){return i===e||i?.[br]===e}function yf(i=Gl(),e,t,n){var r=vn.r,a=wt;return af(()=>{var o,s;return Yl(()=>{o=s,s=[],Ea(()=>{Po(t(...s),i)||(e(i,...s),o&&Po(t(...o),i)&&e(null,...o))})}),()=>{let c=a;for(;c!==r&&c.parent!==null&&c.parent.f&Qa;)c=c.parent;const u=()=>{s&&Po(t(...s),i)&&e(null,...s)},d=c.teardown;c.teardown=()=>{u(),d?.()}}}),i}let _s=!1;function lm(i){var e=_s;try{return _s=!1,[i(),_s]}finally{_s=e}}function Qe(i,e,t,n){var r=!0,a=(t&Hh)!==0,o=(t&Vh)!==0,s=n,c=!0,u=void 0,d=()=>o&&r?(u??=$a(n),l(u)):(c&&(c=!1,s=o?Ea(n):n),s);let h;if(a){var f=br in i||Ih in i;h=na(i,e)?.set??(f&&e in i?w=>i[e]=w:void 0)}var v,x=!1;a?[v,x]=lm(()=>i[e]):v=i[e],v===void 0&&n!==void 0&&(v=d(),h&&(ip(),h(v)));var b;if(b=()=>{var w=i[e];return w===void 0?d():(c=!0,w)},(t&Gh)===0)return b;if(h){var m=i.$$legacy;return(function(w,R){return arguments.length>0?((!R||m||x)&&h(R?b():w),w):b()})}var p=!1,M=((t&zh)!==0?$a:Wd)(()=>(p=!1,b()));a&&l(M);var _=wt;return(function(w,R){if(arguments.length>0){const D=R?l(M):a?Pt(w):w;return g(M,D),p=!0,s!==void 0&&(s=D),w}return Gi&&p||(_.f&mn)!==0?M.v:l(M)})}function ji(i){vn===null&&Fd(),qt(()=>{const e=Ea(i);if(typeof e=="function")return e})}function Ql(i){vn===null&&Fd(),ji(()=>()=>Ea(i))}const cm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(cm);function um(i){const e=[];for(const t of String(i??"")){const n=t.codePointAt(0);if(!(n===65039||n===65038)){if(n===8205){e.push("200d");continue}e.push(n.toString(16))}}return e.join("-")}const dm=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310","23f9","2b07","1f50d"]),fm="/";function hm(i){const e=um(i);return dm.has(e)?`${fm}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}var pm=q('<img draggable="false"/>'),mm=q("<span> </span>");function _i(i,e){Wt(e,!0);let t=Qe(e,"emoji",3,""),n=Qe(e,"size",3,null),r=Qe(e,"alt",3,""),a=Qe(e,"class",3,"");const o=at(()=>hm(t())),s=at(()=>r()||t()),c=at(()=>n()?`${n()}px`:"1em");var u=ns(),d=pt(u);{var h=v=>{var x=pm();be(()=>{je(x,"src",l(o)),je(x,"alt",l(s)),je(x,"title",r()||void 0),ut(x,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),En(x,`width: ${l(c)??""}; height: ${l(c)??""};`),je(x,"aria-hidden",r()?void 0:"true")}),z(v,x)},f=v=>{var x=mm(),b=ne(x,!0);be(()=>{ut(x,1,`inline-block ${a()??""}`),je(x,"aria-hidden",r()?void 0:"true"),je(x,"title",r()||void 0),ie(b,t())}),z(v,x)};ke(d,v=>{l(o)?v(h):v(f,-1)})}z(i,u),jt()}var vm=q('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),gm=q('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function _m(i,e){Wt(e,!0);let t=Qe(e,"selected",3,!1),n=Qe(e,"gameRunning",3,!1),r=Qe(e,"menuOpen",3,!1);const a=at(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function o(){const B=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&B?B(e.instance.icon_path):"/logo.png"}var s=gm(),c=I(s),u=I(c),d=ne(u),h=E(u,2),f=I(h),v=ne(f,!0),x=E(f,2),b=I(x),m=ne(b,!0),p=E(b,2),M=ne(p,!0),_=E(h,2),w=E(c,2),R=ne(w,!0),D=E(w,2);{var P=B=>{var y=vm(),T=pt(y),ce=E(T,2),V=I(ce),O=E(V,2),F=E(O,2),X=I(F);_i(X,{emoji:"📂"});var _e=E(F,2),K=E(_e,4);be(()=>V.disabled=n()),se("click",T,function(...pe){e.onclosemenu?.apply(this,pe)}),se("click",V,()=>{e.onclosemenu(),e.onplay()}),se("click",O,()=>{e.onclosemenu(),e.onedit()}),se("click",F,()=>{e.onclosemenu(),e.onopenfolder()}),se("click",_e,function(...pe){e.onviewlogs?.apply(this,pe)}),se("click",K,()=>{e.onclosemenu(),e.ondelete()}),z(B,y)};ke(D,B=>{r()&&B(P)})}be((B,y)=>{ut(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),je(s,"aria-selected",t()),je(s,"title",e.instance.name),je(d,"src",B),ie(v,e.instance.name),ie(m,e.instance.minecraft_version),ut(p,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${l(a)??""}`),ie(M,e.instance.loader_type),ie(R,y)},[()=>o(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),se("click",s,function(...B){e.onselect?.apply(this,B)}),se("dblclick",s,function(...B){e.onplay?.apply(this,B)}),se("keydown",s,B=>{(B.key==="Enter"||B.key===" ")&&(B.preventDefault(),e.onplay())}),se("contextmenu",s,B=>{B.preventDefault(),e.onselect(),e.ontogglemenu()}),kn("error",d,B=>{B.currentTarget.dataset.f||(B.currentTarget.dataset.f="1",B.currentTarget.src="/logo.png")}),se("click",_,B=>{B.stopPropagation(),e.ontogglemenu()}),z(i,s),jt()}cn(["click","dblclick","keydown","contextmenu"]);var xm=q('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),bm=q('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),ym=q('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),Sm=q('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function Mm(i,e){Wt(e,!0);var t=Sm();yt(t,21,()=>e.instances,n=>n.id,(n,r)=>{{let a=at(()=>e.selectedId===l(r).id),o=at(()=>e.menuFor===l(r).id);_m(n,{get instance(){return l(r)},get selected(){return l(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return l(o)},onselect:()=>e.onselect?.(l(r).id),onplay:()=>e.onplay?.(l(r).id),ontogglemenu:()=>e.ontogglemenu?.(l(r).id),onedit:()=>e.onedit?.(l(r)),onopenfolder:()=>e.onopenfolder?.(l(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(l(r).id),get onclosemenu(){return e.onclosemenu}})}},n=>{var r=ns(),a=pt(r);{var o=d=>{var h=xm(),f=ne(h,!0);be(()=>ie(f,e.error)),z(d,h)},s=d=>{var h=bm(),f=ne(h);be(v=>ie(f,`No instances match "${v??""}".`),[()=>e.query.trim()]),z(d,h)},c=at(()=>e.query.trim()),u=d=>{var h=ym(),f=E(I(h),6);se("click",f,()=>e.onadd?.()),z(d,h)};ke(a,d=>{e.error?d(o):l(c)?d(s,1):d(u,-1)})}z(n,r)}),z(i,t),jt()}cn(["click"]);const rs=[];function hs(i){return rs.push(i),i}function ps(i){const e=rs.lastIndexOf(i);e!==-1&&rs.splice(e,1)}function Dc(){return rs[rs.length-1]??null}const as="twilight_user_accent",$l="twilight_custom_themes",Ic="#06B6D4",Uc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],Nc="#0F172A",Em="#FFFFFF",wm={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function xs(i){return wm[i]??[]}function ms(i){let e=i.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function Oc(i){const e=t=>{const n=parseInt(i.replace("#","").substring(t,t+2),16)/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function Tm(i){const e=Oc(i),t=1.05/(e+.05);return(e+.05)/(Oc(Nc)+.05)>=t?Nc:Em}function ss(i,{persist:e=!0}={}){const t=ms(i);if(!t)return!1;const n=document.documentElement;return n.style.setProperty("--user-accent",t),n.style.setProperty("--on-accent",Tm(t)),e&&localStorage.setItem(as,t),!0}function Am(){localStorage.removeItem(as);const i=document.documentElement;i.style.removeProperty("--user-accent"),i.style.removeProperty("--on-accent")}function Ml(){return ms(localStorage.getItem(as)??"")}function Rm(){const i=Ml();i&&ss(i)}const mo=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:Uc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...Uc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:xs("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:xs("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:xs("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:xs("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],ec="twilight-dark",El={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},Cm=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function Pm(i){let e="";for(const t of i){const n=t.codePointAt(0);n>=65&&n<=90?e+=String.fromCharCode(n+32):n>=97&&n<=122||n>=48&&n<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function Sf(i){const e=i&&typeof i=="object"?i:{},t={};for(const[n,r]of Object.entries(El))t[n]=ms(e[n]??"")??r;return t}function Lm(i){return typeof i=="string"&&i.startsWith("custom:")}function Mf(i){return xr().find(e=>e.id===i)??null}function xr(){try{const i=JSON.parse(localStorage.getItem($l)??"[]");return Array.isArray(i)?i.filter(e=>e&&typeof e=="object"&&Lm(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:Sf(e.tokens)})):[]}catch{return[]}}function kc({name:i,dark:e,tokens:t}){const n=String(i??"").trim()||"Custom theme",r={id:`custom:${Pm(n)||"theme"}`,name:n,dark:!!e,tokens:Sf(t)},a=[...xr().filter(o=>o.id!==r.id),r];return localStorage.setItem($l,JSON.stringify(a)),r}function Dm(i){const e=xr().filter(t=>t.id!==i);return localStorage.setItem($l,JSON.stringify(e)),e}function Fc(){try{const i=getComputedStyle(document.documentElement),e=(n,r)=>{const a=i.getPropertyValue(n).trim();return ms(a)??r},t={};for(const[n,r]of Object.entries(El)){const a=`--${n.replace(/(\d)$/,"-$1")}`;t[n]=e(a,r)}return t}catch{return{...El}}}const Im=new Set(mo.map(i=>i.id));function tc(i){const e=(i??"").trim();return e==="dark"?ec:e==="light"?"twilight-light":Im.has(e)||Mf(e)?e:null}function Um(i){const e=i.tokens;return{id:i.id,label:i.name,dark:i.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:i.name,hex:e.accent1}],tokens:e}}function sa(i){const e=tc(i);return e?mo.find(t=>t.id===e)??Um(Mf(e)):null}function Va(i){return sa(i)?.dark??!0}const Nm=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Lo="";function Om(i){const e=sa(i)??sa(ec);if(!e||e.id===Lo)return e;const t=Lo==="";Lo=e.id;const n=document.documentElement;for(const r of Nm)n.style.removeProperty(r);n.classList.toggle("dark",e.dark),n.classList.toggle("light",!e.dark);for(const r of mo)r.cls&&n.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;n.style.setProperty("--bg-1",r.bg1),n.style.setProperty("--bg-2",r.bg2),n.style.setProperty("--bg-3",r.bg3),n.style.setProperty("--border-1",r.border1),n.style.setProperty("--fg-1",r.fg1),n.style.setProperty("--fg-2",r.fg2),n.style.setProperty("--accent-1",r.accent1),n.style.setProperty("--accent-2",r.accent2),localStorage.removeItem(as),ss(r.accent1,{persist:!1})}else t||(localStorage.removeItem(as),ss(e.accent,{persist:!1}));return e}const km="/".replace(/\/{2,}/g,"/"),Ef=[{id:"fluent-auto",label:"Fluent (Auto)",hint:"Freesm Fluent · follows the theme"},{id:"fluent",label:"Fluent Light",hint:"Freesm Fluent · light ink"},{id:"fluent_dark",label:"Fluent Dark",hint:"Freesm Fluent · white ink"},{id:"breeze_dark",label:"Breeze Dark",hint:"Prism · KDE Breeze dark"},{id:"breeze_light",label:"Breeze Light",hint:"Prism · KDE Breeze light"},{id:"pe_colored",label:"Prism PE Colored",hint:"Prism · full-color PE"},{id:"twemoji",label:"Twemoji",hint:"Emoji glyphs · the classic look"}],wf=new Set(Ef.map(i=>i.id)),Tf="twilight-icon-pack",Fm={instances:"viewfolder",folder:"viewfolder",server:"server",settings:"settings",accounts:"accounts",new:"new",launch:"launch",edit:"instance-settings",copy:"copy",export:"export",delete:"delete",shortcut:"shortcut",mods:"centralmods",refresh:"refresh",console:"log",tag:"tag",star:"star",help:"help",about:"about",screenshots:"screenshots",worlds:"worlds"},Bc={kill:"⏹",download:"⬇",search:"🔍",sun:"☀",moon:"🌙",package:"📦",modrinth:"🧩",success:"✅",warning:"⚠",error:"⛔",instances:"📁",folder:"📁",server:"🌐",settings:"⚙",accounts:"👤",new:"➕",launch:"▶",edit:"✏",copy:"⧉",export:"⤓",delete:"🗑",shortcut:"🔗",mods:"📦",refresh:"🔄",console:"📜",tag:"🏷",star:"★",help:"❔",about:"ℹ",screenshots:"🖼",worlds:"🌐"};let Wa=null;function ao(){if(Wa)return Wa;const i=localStorage.getItem(Tf);return Wa=wf.has(i??"")?i:"fluent-auto",Wa}function Bm(i){wf.has(i)&&(Wa=i,localStorage.setItem(Tf,i),Af())}let wl="";function zm(i){const e=tc(i)??String(i??"");e!==wl&&(wl=e,Af())}function Gm(i=ao()){return i!=="fluent-auto"?i:Va(wl||"twilight-dark")?"fluent_dark":"fluent"}const Tl=new Set;function Af(){for(const i of Tl)i()}function Hm(i){return Tl.add(i),()=>Tl.delete(i)}function Vm(i,e=null){const t=e??ao(),n=i;if(t==="twemoji"){const o=Bc[i];return o?{kind:"emoji",emoji:o,label:n}:null}const r=Fm[i];if(r)return{kind:"svg",src:`${km}icons/${Gm(t)}/${r}.svg`,label:n};const a=Bc[i];return a?{kind:"emoji",emoji:a,label:n}:null}var Wm=q('<img draggable="false"/>'),jm=q("<span></span>");function Nt(i,e){Wt(e,!0);let t=Qe(e,"name",3,""),n=Qe(e,"pack",3,null),r=Qe(e,"size",3,null),a=Qe(e,"alt",3,""),o=Qe(e,"class",3,""),s=de(0);const c=Hm(()=>g(s,l(s)+1));Ql(c);const u=at(()=>(l(s),Vm(t(),n()))),d=at(()=>r()?`${r()}px`:"1em"),h=at(()=>a()||t());let f=de(!1);qt(()=>{l(u)?.kind,g(f,!1)});var v=ns(),x=pt(v);{var b=M=>{var _=ns(),w=pt(_);xf(w,()=>l(u).src,R=>{var D=Wm();be(()=>{je(D,"src",l(u).src),je(D,"alt",l(h)),je(D,"title",a()||void 0),ut(D,1,`shrink-0 select-none ${o()??""}`),En(D,`width:${l(d)??""};height:${l(d)??""};object-fit:contain`),je(D,"aria-hidden",a()?void 0:"true")}),kn("error",D,()=>g(f,!0)),z(R,D)}),z(M,_)},m=M=>{{let _=at(()=>a()||void 0);_i(M,{get emoji(){return l(u).emoji},get size(){return r()},get alt(){return l(_)},get class(){return o()}})}},p=M=>{var _=jm();be(()=>{ut(_,1,`inline-block shrink-0 ${o()??""}`),En(_,`width:${l(d)??""};height:${l(d)??""}`)}),z(M,_)};ke(x,M=>{l(u)?.kind==="svg"&&!l(f)?M(b):l(u)?.kind==="emoji"?M(m,1):M(p,-1)})}z(i,v),jt()}const li=Pt({dialog:null,toasts:[]});function bs(i){const e=li.dialog;li.dialog=null,e?.resolve?.(i)}let Xm=0;function Qi(i,e="info",{title:t="",duration:n=4500}={}){const r=++Xm;return li.toasts.push({id:r,message:i,kind:e,title:t,duration:n}),li.toasts.length>6&&li.toasts.shift(),r}function zc(i){const e=li.toasts.findIndex(t=>t.id===i);e!==-1&&li.toasts.splice(e,1)}var qm=q('<div class="p-6 text-center text-(--step-body) text-(--fg-2)">Resolving mods and their dependencies…</div>'),Ym=q('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div></div>'),Km=q('<tr><td class="px-3 py-2 align-top"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent-1)"/></td><td> </td><td class="px-3 py-2 align-top text-(--fg-2)"> </td><td class="px-3 py-2 align-top font-mono text-[11px] text-(--fg-2)"> </td><td> </td><td class="px-3 py-2 text-right align-top text-(--fg-2)"> </td></tr>'),Zm=q('<tr><td colspan="6" class="px-3 py-6 text-center text-(--fg-2)">The queue is empty.</td></tr>'),Jm=q('<table class="w-full text-left text-(--step-body)"><thead class="sticky top-0 z-10 bg-(--bg-3)"><tr class="border-b border-(--border-1) text-(--step-caption) uppercase tracking-wide text-(--fg-2)"><th class="w-[36px] px-3 py-2 font-medium"></th><th class="px-3 py-2 font-medium">Mod</th><th class="w-[130px] px-3 py-2 font-medium">Version</th><th class="w-[220px] px-3 py-2 font-medium">File</th><th class="w-[190px] px-3 py-2 font-medium">Source</th><th class="w-[80px] px-3 py-2 text-right font-medium">Size</th></tr></thead><tbody></tbody></table>'),Qm=q('<span class="text-rose-400"> </span>'),$m=q(`<div role="presentation" class="fixed inset-0 z-[60] flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[560px] w-[880px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Confirm download</h3> <p class="text-(--step-meta) text-(--fg-2)">You're about to download the following mods — only rows with a check will be downloaded.</p></div> <button class="text-(--fg-2) hover:text-(--fg-1) disabled:opacity-40">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="min-w-0 truncate text-(--step-meta) text-(--fg-2)"><!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Back</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Downloads every checked file (SHA-1 verified) into this instance's mods folder"> </button></div></div></div></div>`);function ev(i,e){Wt(e,!0);let t=Qe(e,"items",19,()=>[]);const n=["fabric","quilt","forge","neoforge"],r=at(()=>{const j=e.instance.loader_type.toLowerCase();return n.includes(j)?j:""});let a=de(null),o=de(!0),s=de(""),c=de(Pt({})),u=de(!1),d=de("");function h(j){return j>=1024*1024?`${(j/1024/1024).toFixed(1)} MB`:j>=1024?`${(j/1024).toFixed(1)} KB`:`${j} B`}function f(j){return j.required_by.length?`required by ${j.required_by.join(", ")}`:j.installed?"already installed":"your selection"}function v(){return l(a)?.filter(j=>l(c)[j.project_id]).length??0}function x(j){g(c,{...l(c),[j.project_id]:!l(c)[j.project_id]},!0)}function b(j,G){const $=window.__TAURI__?.core;return $?$.invoke(j,G):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function m(){if(!l(a)||l(u))return;const j=l(a).filter(G=>l(c)[G.project_id]).map(G=>({url:G.url,filename:G.filename,sha1:G.sha1}));if(j.length){g(u,!0),g(d,"");try{const G=await b("install_modrinth_batch",{instanceId:e.instance.id,files:j});Qi(`Downloaded ${G.length} mod file${G.length===1?"":"s"}.`,"success"),e.ondownloaded?.(G)}catch(G){g(d,String(G),!0),Qi(`Download failed: ${G}`,"error")}finally{g(u,!1)}}}ji(()=>{const j=hs(()=>l(u)?void 0:e.onclose?.());return b("preview_mod_download_queue",{instanceId:e.instance.id,projects:t(),gameVersion:e.instance.minecraft_version,loader:l(r)}).then(G=>{g(a,G,!0),g(c,Object.fromEntries(G.map($=>[$.project_id,!$.installed])),!0),g(o,!1)}).catch(G=>{g(s,String(G),!0),g(o,!1)}),()=>ps(j)});var p=$m(),M=I(p),_=I(M),w=E(I(_),2),R=E(_,2),D=I(R);{var P=j=>{var G=qm();z(j,G)},B=j=>{var G=Ym(),$=I(G),Se=ne($,!0);be(()=>ie(Se,l(s))),z(j,G)},y=j=>{var G=Jm(),$=E(I(G));yt($,21,()=>l(a),Se=>Se.project_id,(Se,we)=>{var De=Km(),Be=I(De),Xe=I(Be),Ve=E(Be),$e=ne(Ve,!0),dt=E(Ve),Ke=ne(dt,!0),ee=E(dt),lt=ne(ee,!0),We=E(ee),k=ne(We,!0),le=E(We),Ne=ne(le,!0);be((ve,Ae)=>{ut(De,1,`border-b border-(--border-1)/50 ${l(we).installed?"bg-(--bg-3)/60":l(we).required_by.length?"bg-(--brand-tint)/40":""}`),Ka(Xe,l(c)[l(we).project_id]??!1),ut(Ve,1,`px-3 py-2 align-top font-medium ${l(we).installed?"opacity-60":"text-(--fg-1)"}`),ie($e,l(we).title),ie(Ke,l(we).version),je(ee,"title",l(we).filename),ie(lt,l(we).filename),ut(We,1,`px-3 py-2 align-top text-[11px] ${l(we).required_by.length?"text-(--accent-1)":"text-(--fg-2)"}`),ie(k,ve),ie(Ne,Ae)},[()=>f(l(we)),()=>h(l(we).size)]),se("change",Xe,()=>x(l(we))),z(Se,De)},Se=>{var we=Zm();z(Se,we)}),z(j,G)};ke(D,j=>{l(o)?j(P):l(s)?j(B,1):l(a)&&j(y,2)})}var T=E(R,2),ce=I(T),V=I(ce);{var O=j=>{var G=Qm(),$=ne(G,!0);be(()=>ie($,l(d))),z(j,G)},F=j=>{var G=Ui();be(($,Se)=>ie(G,`Downloading ${$??""} file${Se??""}…`),[()=>v(),()=>v()===1?"":"s"]),z(j,G)},X=j=>{var G=Ui();be($=>ie(G,`${$??""} of ${l(a).length??""} rows will download`),[()=>v()]),z(j,G)};ke(V,j=>{l(d)?j(O):l(u)?j(F,1):l(a)&&j(X,2)})}var _e=E(ce,2),K=I(_e),pe=E(K,2),Ee=ne(pe,!0);be(j=>{w.disabled=l(u),je(ce,"title",l(d)),K.disabled=l(u),pe.disabled=j,ie(Ee,l(u)?"Downloading…":"Confirm & Download")},[()=>l(u)||!l(a)||v()===0]),se("click",p,j=>{j.target===j.currentTarget&&!l(u)&&e.onclose?.()}),se("click",w,()=>e.onclose?.()),se("click",K,()=>e.onclose?.()),se("click",pe,m),z(i,p),jt()}cn(["click","change"]);var tv=q('<label class="flex cursor-pointer items-center gap-2 text-(--step-body) capitalize"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent-1)"/> <span> </span></label>'),Gc=q("<option> </option>"),nv=q('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-(--step-body) text-rose-400"> </div>'),Hc=q('<div class="p-6 text-center text-(--step-body) text-(--fg-2)"> </div>'),iv=q('<span class="shrink-0 rounded bg-green-500/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-green-500">installed</span>'),rv=q('<span class="shrink-0 rounded bg-(--accent-1)/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-1)">queued</span>'),av=q('<button><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <span class="min-w-0 flex-1"><span class="flex items-center gap-2"><span class="truncate text-(--step-card) font-medium text-(--fg-1)"> </span> <!> <!></span> <span class="block truncate text-(--step-meta) text-(--fg-2)"> </span> <span class="block truncate text-[10px] text-(--fg-2)"> </span></span></button>'),sv=q('<div class="flex flex-col gap-1.5"></div>'),ov=q('<div class="flex h-full flex-col items-center justify-center p-6 text-center text-(--step-body) text-(--fg-2)"><!> <p class="mt-3">Select a mod to inspect it.</p></div>'),lv=q('<div class="mt-1 flex h-8 items-center rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) text-(--fg-2)">Loading versions…</div>'),cv=q('<select id="mods-version" class="mt-1 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"><option> </option><!></select>'),uv=q('<div class="mt-1 h-8 rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-meta) leading-8 text-(--fg-2)">Latest compatible</div>'),dv=q('<p class="mt-2 text-[11px] text-rose-400"> </p>'),fv=q('<div class="mt-2 text-(--step-meta) whitespace-pre-wrap break-words text-(--fg-2)"> </div>'),hv=q('<div class="flex items-start gap-3 border-b border-(--border-1) p-3"><img alt="" draggable="false" class="h-12 w-12 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="truncate text-(--step-card) font-semibold text-(--fg-1)"> </div> <div class="truncate text-[10px] text-(--fg-2)"> </div> <div class="text-[10px] text-(--fg-2)"> </div></div></div> <div class="border-b border-(--border-1) p-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-version">Version</label> <!></div> <div class="min-h-0 flex-1 p-3"><div class="text-(--step-body) text-(--fg-2)"> </div> <!> <!></div>',1),pv=q('<span class="ml-1 text-[10px]"> </span>'),mv=q('<div role="presentation" class="fixed inset-0 z-50 flex items-center justify-center" style="background: var(--scrim)"><div class="flex h-[720px] w-[1180px] max-w-[95vw] flex-col overflow-hidden rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border-1) px-4 py-3"><div class="min-w-0"><h3 class="text-(--step-heading) font-semibold text-(--fg-1)">Browse &amp; Download Mods</h3> <p class="truncate text-(--step-meta) text-(--fg-2)"> <!></p></div> <button class="text-(--fg-2) hover:text-(--fg-1)">✕</button></div> <div class="flex min-h-0 flex-1"><aside class="flex w-[200px] shrink-0 flex-col gap-4 overflow-y-auto border-r border-(--border-1) p-3"><section><h4 class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)">Categories</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border-1) pt-3"><label class="text-(--step-caption) font-semibold uppercase tracking-wide text-(--fg-2)" for="mods-sort">Sort</label> <select id="mods-sort" class="mt-1.5 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"></select></section></aside> <section class="flex min-w-0 flex-1 flex-col"><div class="border-b border-(--border-1) p-3"><input class="h-9 w-full rounded border border-(--border-1) bg-(--bg-3) px-3 text-(--step-card) text-(--fg-1) outline-none placeholder:text-(--fg-2) focus:border-(--accent-1)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></section> <aside class="flex w-[330px] shrink-0 flex-col overflow-y-auto border-l border-(--border-1)"><!></aside></div> <div class="flex items-center justify-between gap-2 border-t border-(--border-1) px-4 py-3"><span class="text-(--step-body) text-(--fg-2)"> <!></span> <div class="flex items-center gap-2"><button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1) disabled:opacity-40">Clear</button> <button class="flex items-center gap-1.5 rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover) disabled:opacity-40" title="Stages every queued mod plus its required dependencies for confirmation"><!> Review and Confirm…</button></div></div></div></div> <!>',1);function vv(i,e){Wt(e,!0);const t=["fabric","quilt","forge","neoforge"],n=at(()=>{const H=e.instance.loader_type.toLowerCase();return t.includes(H)?H:""}),r=["optimization","utility","library","worldgen","accessibility","technology","adventure","decoration","mobs","equipment","food","storage","transportation","game-mechanics"],a=[{id:"relevance",label:"Relevance"},{id:"downloads",label:"Most downloaded"},{id:"updated",label:"Recently updated"},{id:"newest",label:"Newest"}];let o=de(""),s=de("relevance"),c=de(Pt(new Set)),u=de(null),d=de(!1),h=de(""),f=0,v=de(Pt([]));function x(H){const oe=H.title.toLowerCase().replace(/[^a-z0-9]+/g,"-");return l(v).some(Ce=>Ce.includes(oe))}let b=de(null),m=de(null),p=de(!1),M=de(""),_=0,w=de(""),R=de(Pt([])),D=de(!1);function P(H){const oe=new Set(l(c));oe.has(H)?oe.delete(H):oe.add(H),g(c,oe,!0)}function B(H){return H>=1e6?`${(H/1e6).toFixed(1)}M`:H>=1e3?`${(H/1e3).toFixed(0)}K`:String(H)}function y(H){return H.icon_url||"/logo.png"}function T(H,oe){const Ce=window.__TAURI__?.core;return Ce?Ce.invoke(H,oe):Promise.reject(new Error("Tauri backend unavailable in this preview."))}qt(()=>{const H=l(o).trim(),oe=[...l(c)],Ce=l(s),Ge=++f,N=setTimeout(()=>{g(d,!0),g(h,""),T("search_modrinth_mods",{query:H,gameVersion:e.instance.minecraft_version,loader:l(n),categories:oe,index:Ce}).then(Le=>{Ge===f&&(g(u,Le,!0),g(d,!1))}).catch(Le=>{Ge===f&&(g(h,String(Le),!0),g(d,!1))})},350);return()=>clearTimeout(N)});async function ce(H){if(l(b)?.project_id===H.project_id)return;g(b,H,!0),g(m,null),g(M,""),g(w,"");const oe=++_;g(p,!0);try{const Ce=await T("get_modrinth_project_details",{projectId:H.project_id,gameVersion:e.instance.minecraft_version,loader:l(n)});oe===_&&g(m,Ce,!0)}catch(Ce){oe===_&&g(M,String(Ce),!0)}finally{oe===_&&g(p,!1)}}function V(H){return l(R).some(oe=>oe.project_id===H)}function O(){l(R).length&&g(D,!0)}ji(()=>{const H=hs(()=>e.onclose?.());return T("list_instance_mods",{instanceId:e.instance.id}).then(oe=>g(v,oe.map(Ce=>Ce.filename.toLowerCase()),!0)).catch(()=>{}),()=>ps(H)});var F=mv(),X=pt(F),_e=I(X),K=I(_e),pe=I(K),Ee=E(I(pe),2),j=I(Ee),G=E(j);{var $=H=>{var oe=Ui();be(Ce=>ie(oe,`· ${Ce??""}`),[()=>l(n)[0].toUpperCase()+l(n).slice(1)]),z(H,oe)};ke(G,H=>{l(n)&&H($)})}var Se=E(pe,2),we=E(K,2),De=I(we),Be=I(De),Xe=E(I(Be),2);yt(Xe,20,()=>r,H=>H,(H,oe)=>{var Ce=tv(),Ge=I(Ce),N=E(Ge,2),Le=ne(N,!0);be((ue,Re)=>{Ka(Ge,ue),ie(Le,Re)},[()=>l(c).has(oe),()=>oe.replace("-"," ")]),se("change",Ge,()=>P(oe)),z(H,Ce)});var Ve=E(Be,2),$e=E(I(Ve),2);yt($e,21,()=>a,H=>H.id,(H,oe)=>{var Ce=Gc(),Ge=ne(Ce,!0),N={};be(()=>{ie(Ge,l(oe).label),N!==(N=l(oe).id)&&(Ce.value=(Ce.__value=N)??"")}),z(H,Ce)}),pa($e);var dt=E(De,2),Ke=I(dt),ee=I(Ke),lt=E(Ke,2),We=I(lt);{var k=H=>{var oe=nv(),Ce=ne(oe,!0);be(()=>ie(Ce,l(h))),z(H,oe)};ke(We,H=>{l(h)&&H(k)})}var le=E(We,2);{var Ne=H=>{var oe=Hc(),Ce=ne(oe,!0);be(()=>ie(Ce,l(d)?"Searching Modrinth…":"Type to search.")),z(H,oe)},ve=H=>{var oe=Hc(),Ce=ne(oe);be(Ge=>ie(Ce,`No mods for MC ${e.instance.minecraft_version??""}${l(n)?` + ${l(n)}`:""} match
              “${Ge??""}”.`),[()=>l(o).trim()]),z(H,oe)},Ae=H=>{var oe=sv();yt(oe,21,()=>l(u),Ce=>Ce.project_id,(Ce,Ge)=>{var N=av(),Le=I(N),ue=E(Le,2),Re=I(ue),Me=I(Re),Ue=ne(Me,!0),qe=E(Me,2);{var rt=Tt=>{var Ht=iv();z(Tt,Ht)},xt=at(()=>x(l(Ge)));ke(qe,Tt=>{l(xt)&&Tt(rt)})}var ct=E(qe,2);{var Mt=Tt=>{var Ht=rv();z(Tt,Ht)},mt=at(()=>V(l(Ge).project_id));ke(ct,Tt=>{l(mt)&&Tt(Mt)})}var vt=E(Re,2),Lt=ne(vt,!0),Jt=E(vt,2),nn=ne(Jt);be((Tt,Ht)=>{ut(N,1,`flex items-center gap-3 rounded border px-3 py-2 text-left ${l(b)?.project_id===l(Ge).project_id?"border-(--accent-1) bg-(--brand-tint)":"border-(--border-1) bg-(--bg-3) hover:border-(--accent-1)/60"}`),je(Le,"src",Tt),je(Me,"title",l(Ge).title),ie(Ue,l(Ge).title),je(vt,"title",l(Ge).description),ie(Lt,l(Ge).description),ie(nn,`by ${(l(Ge).author||"unknown")??""} · ${Ht??""} downloads`)},[()=>y(l(Ge)),()=>B(l(Ge).downloads)]),se("click",N,()=>ce(l(Ge))),kn("error",Le,Tt=>{Tt.currentTarget.dataset.f||(Tt.currentTarget.dataset.f="1",Tt.currentTarget.src="/logo.png")}),z(Ce,N)}),z(H,oe)};ke(le,H=>{l(u)?l(u).length===0&&!l(d)?H(ve,1):H(Ae,-1):H(Ne)})}var he=E(dt,2),Fe=I(he);{var Ie=H=>{var oe=ov(),Ce=I(oe);Nt(Ce,{name:"modrinth",size:28}),z(H,oe)},A=H=>{var oe=hv(),Ce=pt(oe),Ge=I(Ce),N=E(Ge,2),Le=I(N),ue=ne(Le,!0),Re=E(Le,2),Me=ne(Re),Ue=E(Re,2),qe=ne(Ue),rt=E(Ce,2),xt=E(I(rt),2);{var ct=Dt=>{var ye=lv();z(Dt,ye)},Mt=Dt=>{var ye=cv(),ze=I(ye),C=ne(ze);ze.value=ze.__value="";var W=E(ze);yt(W,17,()=>l(m).versions,ae=>ae.id,(ae,te)=>{var me=Gc(),He=ne(me),Ze={};be(()=>{ie(He,`${l(te).version??""}${l(te).version_type&&l(te).version_type!=="release"?` (${l(te).version_type})`:""}`),Ze!==(Ze=l(te).id)&&(me.value=(me.__value=Ze)??"")}),z(ae,me)}),pa(ye),be(()=>ie(C,`Latest (${l(m).versions[0]?.version??""})`)),ma(ye,()=>l(w),ae=>g(w,ae)),z(Dt,ye)},mt=Dt=>{var ye=uv();z(Dt,ye)};ke(xt,Dt=>{l(p)?Dt(ct):l(m)?.versions?.length?Dt(Mt,1):Dt(mt,-1)})}var vt=E(rt,2),Lt=I(vt),Jt=ne(Lt,!0),nn=E(Lt,2);{var Tt=Dt=>{var ye=dv(),ze=ne(ye,!0);be(()=>ie(ze,l(M))),z(Dt,ye)};ke(nn,Dt=>{l(M)&&Dt(Tt)})}var Ht=E(nn,2);{var Fn=Dt=>{var ye=fv(),ze=ne(ye,!0);be(()=>ie(ze,l(m).body)),z(Dt,ye)};ke(Ht,Dt=>{l(m)?.body&&Dt(Fn)})}be((Dt,ye)=>{je(Ge,"src",Dt),je(Le,"title",l(b).title),ie(ue,l(b).title),ie(Me,`by ${(l(b).author||"unknown")??""}`),ie(qe,`${ye??""} downloads`),ie(Jt,l(b).description)},[()=>y(l(b)),()=>B(l(b).downloads)]),kn("error",Ge,Dt=>{Dt.currentTarget.dataset.f||(Dt.currentTarget.dataset.f="1",Dt.currentTarget.src="/logo.png")}),z(H,oe)};ke(Fe,H=>{l(b)?H(A,-1):H(Ie)})}var S=E(we,2),U=I(S),Z=I(U),J=E(Z);{var xe=H=>{var oe=pv(),Ce=ne(oe);be(Ge=>ie(Ce,`(${Ge??""})`),[()=>l(R).map(Ge=>Ge.title).join(", ")]),z(H,oe)};ke(J,H=>{l(R).length&&H(xe)})}var Oe=E(U,2),Te=I(Oe),Q=E(Te,2),L=I(Q);Nt(L,{name:"download",size:13});var fe=E(X,2);{var ge=H=>{ev(H,{get instance(){return e.instance},get items(){return l(R)},onclose:()=>g(D,!1),ondownloaded:oe=>{g(D,!1),g(R,[],!0),e.oninstalled?.(oe)}})};ke(fe,H=>{l(D)&&H(ge)})}be(()=>{ie(j,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `),ie(Z,`${l(R).length===0?"No mods selected":`${l(R).length} mod${l(R).length===1?"":"s"} selected`} `),Te.disabled=!l(R).length,Q.disabled=!l(R).length}),se("click",X,H=>{H.target===H.currentTarget&&e.onclose?.()}),se("click",Se,()=>e.onclose?.()),ma($e,()=>l(s),H=>g(s,H)),Bt(ee,()=>l(o),H=>g(o,H)),se("click",Te,()=>g(R,[],!0)),se("click",Q,O),z(i,F),jt()}cn(["click","change"]);var gv=q('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),_v=q('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),xv=q('<div class="mt-4 rounded border border-amber-500/30 bg-amber-500/10 p-3" role="status" aria-live="polite"><p class="text-[12px] text-amber-400"><strong> </strong> </p> <button class="mt-2 rounded border border-amber-500/40 px-3 py-1.5 text-[12px] font-medium text-amber-400 hover:bg-amber-500/20 disabled:opacity-40"> </button></div>'),bv=q('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),Vc=q('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),Do=q('<p class="mt-2 text-[12px] text-rose-400"> </p>'),yv=q(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <!> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),Sv=q('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),Mv=q('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),Ev=q('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),wv=q('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),Tv=q('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),Av=q('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, icon and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p></div>',1),Rv=q('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!></div>');function Cv(i,e){Wt(e,!0);let t=Qe(e,"storage",3,null),n=Qe(e,"blindMode",3,!1),r=Qe(e,"deafMode",3,!1);const a=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let o=de("mods"),s=de(Pt([])),c=de(!1),u=de(""),d=de(""),h=de(!1),f=de(Pt([])),v=de(Pt([])),x=de(!1),b=de("");function m(...k){return[t()?t().instances_dir.replace(/\\/g,"/"):"",e.instance.id,"minecraft",...k].filter(Boolean).join("/")}function p(k){const le=window.__TAURI__?.core?.convertFileSrc;return le?le(k):k}function M(k){return k>=1024*1024?`${(k/1024/1024).toFixed(1)} MB`:k>=1024?`${(k/1024).toFixed(1)} KB`:`${k} B`}function _(k){return k?new Date(k*1e3).toLocaleString():""}function w(){const k=l(d).trim().toLowerCase();return k?l(s).filter(le=>le.display_name.toLowerCase().includes(k)||le.filename.toLowerCase().includes(k)):l(s)}async function R(){g(c,!0);try{g(s,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:e.instance.id}),!0),g(u,"")}catch(k){g(u,String(k),!0)}finally{g(c,!1)}}const D={"minecraft-access":"Minecraft Access",echosight:"EchoSight"},P=at(()=>[...n()&&!l(s).some(k=>k.filename.toLowerCase().includes("minecraft-access"))?["minecraft-access"]:[],...r()&&!l(s).some(k=>k.filename.toLowerCase().includes("echosight"))?["echosight"]:[]]);let B=de(!1);async function y(){g(B,!0);try{for(const k of l(P))await window.__TAURI__.core.invoke("install_mod_with_deps",{instanceId:e.instance.id,projectId:k,gameVersion:e.instance.minecraft_version,loader:e.instance.loader_type.toLowerCase()});g(u,"Accessibility mods installed.")}catch(k){g(u,String(k),!0)}finally{g(B,!1)}await R()}async function T(k){g(c,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:e.instance.id,filename:k.filename,enable:!k.is_enabled}),l(u)&&g(u,"")}catch(le){g(u,String(le),!0)}finally{g(c,!1)}await R()}async function ce(k){g(c,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:e.instance.id,filename:k.filename}),g(u,"")}catch(le){g(u,String(le),!0)}finally{g(c,!1)}await R()}async function V(){const k=window.__TAURI__?.dialog?.open;if(!k){g(u,"File picker unavailable in this build.");return}let le;try{le=await k({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(ve){g(u,String(ve),!0);return}const Ne=le?[].concat(le):[];if(Ne.length){g(c,!0);try{for(const ve of Ne)await window.__TAURI__.core.invoke("import_mod",{instanceId:e.instance.id,jarPath:ve});g(u,"")}catch(ve){g(u,String(ve),!0)}finally{g(c,!1)}await R()}}async function O(k){g(x,!0);try{const le=await window.__TAURI__.core.invoke(k,{instanceId:e.instance.id});g(k==="list_screenshots"?f:v,le,!0),g(b,"")}catch(le){g(b,String(le),!0)}finally{g(x,!1)}}function F(k){window.__TAURI__.core.invoke("open_path",{path:k}).catch(le=>g(b,String(le),!0))}function X(k){F(m("screenshots",k))}ji(()=>{R(),O("list_screenshots"),O("list_logs")});var _e=Rv(),K=I(_e),pe=I(K),Ee=E(pe,2),j=I(Ee),G=ne(j,!0),$=E(j,2),Se=ne($),we=E(Ee,2);yt(we,21,()=>a,k=>k.id,(k,le)=>{var Ne=gv(),ve=I(Ne),Ae=I(ve);_i(Ae,{get emoji(){return l(le).icon},size:15});var he=E(ve,2),Fe=ne(he,!0);be(()=>{ut(Ne,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${l(o)===l(le).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(Ne,"aria-current",l(o)===l(le).id?"true":void 0),ie(Fe,l(le).label)}),se("click",Ne,()=>g(o,l(le).id,!0)),z(k,Ne)});var De=E(K,2),Be=I(De),Xe=I(Be);{var Ve=k=>{var le=_v(),Ne=E(pt(le),4),ve=I(Ne),Ae=ne(ve),he=E(ve,2),Fe=ne(he),Ie=E(he,2),A=ne(Ie);be(S=>{ie(Ae,`Minecraft ${e.instance.minecraft_version??""}`),ie(Fe,`Loader: ${e.instance.loader_type??""}`),ie(A,`Last played: ${S??""}`)},[()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleString():"never"]),z(k,le)},$e=k=>{var le=yv(),Ne=E(pt(le),4);{var ve=fe=>{var ge=xv(),H=I(ge),oe=I(H),Ce=ne(oe,!0),Ge=E(oe),N=E(H,2),Le=ne(N,!0);be(ue=>{ie(Ce,ue),ie(Ge,` ${l(P).length>1?"are":"is"} not installed yet — recommended for your
              accessibility profile. Required dependencies (e.g. Fabric API) install automatically.`),N.disabled=l(c)||l(B),ie(Le,l(B)?"Installing…":"Install Recommended Accessibility Mods")},[()=>l(P).map(ue=>D[ue]??ue).join(" and ")]),se("click",N,y),z(fe,ge)};ke(Ne,fe=>{(n()||r())&&(e.instance.loader_type==="Fabric"||e.instance.loader_type==="Quilt")&&l(P).length&&fe(ve)})}var Ae=E(Ne,2),he=I(Ae),Fe=ne(he),Ie=E(he,2),A=E(Ae,2),S=E(A,2),U=E(S,2),Z=I(U);yt(Z,21,w,fe=>fe.filename,(fe,ge)=>{var H=bv(),oe=I(H),Ce=I(oe);let Ge;var N=ne(Ce,!0),Le=E(Ce,2),ue=ne(Le),Re=E(oe),Me=ne(Re),Ue=E(Re),qe=ne(Ue);be(rt=>{Ge=ut(Ce,1,"truncate",null,Ge,{"opacity-50":!l(ge).is_enabled}),ie(N,l(ge).display_name),ie(ue,`${l(ge).filename??""} · ${rt??""}`),ut(Me,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${l(ge).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),je(Me,"title",l(ge).is_enabled?"Disable":"Enable"),Me.disabled=l(c),je(qe,"title",`Delete ${l(ge).display_name??""}`),qe.disabled=l(c)},[()=>M(l(ge).file_size)]),se("click",Me,()=>T(l(ge))),se("click",qe,()=>ce(l(ge))),z(fe,H)},fe=>{var ge=Vc(),H=I(ge),oe=I(H);{var Ce=N=>{var Le=Ui("Loading mods…");z(N,Le)},Ge=N=>{var Le=Ui("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");z(N,Le)};ke(oe,N=>{l(c)?N(Ce):N(Ge,-1)})}z(fe,ge)});var J=E(U,2);{var xe=fe=>{var ge=Do(),H=ne(ge,!0);be(()=>ie(H,l(u))),z(fe,ge)};ke(J,fe=>{l(u)&&fe(xe)})}var Oe=E(J,2),Te=I(Oe),Q=E(Te,2),L=I(Q);_i(L,{emoji:"📂"}),be(()=>{ie(Fe,`Installed (${l(s).length??""})`),Ie.disabled=l(c),Te.disabled=l(c),Q.disabled=!t(),je(Q,"title",t()?"Opens the instance mods folder":"Storage unknown")}),se("click",Ie,R),Bt(A,()=>l(d),fe=>g(d,fe)),se("click",S,()=>g(h,!0)),se("click",Te,V),se("click",Q,()=>F(m("mods"))),z(k,le)},dt=k=>{var le=Ev(),Ne=E(pt(le),4);yt(Ne,21,()=>l(f),Ie=>Ie.name,(Ie,A)=>{var S=Sv(),U=I(S),Z=E(U,2),J=ne(Z,!0);be((xe,Oe,Te)=>{je(S,"title",`${l(A).name??""} · ${xe??""} · ${Oe??""}`),je(U,"src",Te),je(U,"alt",l(A).name),je(Z,"title",l(A).name),ie(J,l(A).name)},[()=>M(l(A).size),()=>_(l(A).modified),()=>p(m("screenshots",l(A).name))]),se("click",S,()=>X(l(A).name)),se("keydown",S,xe=>{(xe.key==="Enter"||xe.key===" ")&&(xe.preventDefault(),X(l(A).name))}),z(Ie,S)},Ie=>{var A=Mv(),S=I(A);{var U=J=>{var xe=Ui("Loading screenshots…");z(J,xe)},Z=J=>{var xe=Ui("No screenshots yet — press F2 in game to capture one.");z(J,xe)};ke(S,J=>{l(x)?J(U):J(Z,-1)})}z(Ie,A)});var ve=E(Ne,2);{var Ae=Ie=>{var A=Do(),S=ne(A,!0);be(()=>ie(S,l(b))),z(Ie,A)};ke(ve,Ie=>{l(b)&&Ie(Ae)})}var he=E(ve,2),Fe=I(he);_i(Fe,{emoji:"📂"}),se("click",he,()=>F(m("screenshots"))),z(k,le)},Ke=k=>{var le=Tv(),Ne=E(pt(le),4),ve=I(Ne);yt(ve,21,()=>l(v),U=>U.name,(U,Z)=>{var J=wv(),xe=I(J),Oe=I(xe),Te=ne(Oe,!0),Q=E(Oe,2),L=ne(Q),fe=E(xe),ge=ne(fe);be((H,oe)=>{je(Oe,"title",l(Z).name),ie(Te,l(Z).name),ie(L,`${H??""} · ${oe??""}`)},[()=>M(l(Z).size),()=>_(l(Z).modified)]),se("click",ge,()=>F(m("logs",l(Z).name))),z(U,J)},U=>{var Z=Vc(),J=I(Z),xe=I(J);{var Oe=Q=>{var L=Ui("Loading logs…");z(Q,L)},Te=Q=>{var L=Ui("No log files yet — logs appear after the first launch.");z(Q,L)};ke(xe,Q=>{l(x)?Q(Oe):Q(Te,-1)})}z(U,Z)});var Ae=E(Ne,2);{var he=U=>{var Z=Do(),J=ne(Z,!0);be(()=>ie(J,l(b))),z(U,Z)};ke(Ae,U=>{l(b)&&U(he)})}var Fe=E(Ae,2),Ie=I(Fe),A=E(Ie,2),S=I(A);_i(S,{emoji:"📂"}),se("click",Ie,()=>e.onopenconsole?.()),se("click",A,()=>F(m("logs"))),z(k,le)},ee=k=>{var le=Av(),Ne=E(pt(le),4),ve=I(Ne),Ae=ne(ve,!0),he=E(ve,2),Fe=I(he),Ie=ne(Fe),A=E(Fe,2),S=ne(A);be((U,Z,J)=>{ie(Ae,e.instance.name),je(he,"title",U),ie(Ie,`Game folder: ${Z??""}`),ie(S,`Mods folder: ${J??""}`)},[()=>m(),()=>m(),()=>m("mods")]),z(k,le)};ke(Xe,k=>{l(o)==="components"?k(Ve):l(o)==="mods"?k($e,1):l(o)==="screenshots"?k(dt,2):l(o)==="logs"?k(Ke,3):k(ee,-1)})}var lt=E(De,2);{var We=k=>{vv(k,{get instance(){return e.instance},onclose:()=>g(h,!1),oninstalled:()=>R()})};ke(lt,k=>{l(h)&&k(We)})}be(()=>{je(j,"title",e.instance.name),ie(G,e.instance.name),ie(Se,`${e.instance.minecraft_version??""} · ${e.instance.loader_type??""}`)}),se("click",pe,function(...k){e.onback?.apply(this,k)}),z(i,_e),jt()}cn(["click","keydown"]);var Pv=q('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),Lv=q('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),Dv=q('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),Iv=q('<p class="mt-3 text-[12px] text-red-400"> </p>'),Uv=q(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),Nv=q('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function Ov(i,e){Wt(e,!0);let t=de(null),n=de(""),r=de(""),a=de(!1),o=de("");function s(M){return M>=1024*1024?`${(M/1024/1024).toFixed(1)} MB`:M>=1024?`${(M/1024).toFixed(0)} KB`:`${M} B`}function c(){return!l(t)||!l(t).loader?"Vanilla":l(t).loader[0].toUpperCase()+l(t).loader.slice(1)+(l(t).loader_version?` ${l(t).loader_version}`:" (latest stable)")}ji(async()=>{const M=hs(()=>e.onclose?.());try{g(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),g(r,l(t).name,!0)}catch(_){g(n,String(_),!0)}return()=>ps(M)});async function u(){if(!l(a)){g(a,!0),g(o,"");try{const M=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:l(r).trim()});e.oninstalled?.(M)}catch(M){g(o,String(M),!0)}finally{g(a,!1)}}}var d=Nv(),h=I(d),f=I(h),v=E(I(f),2),x=E(f,2);{var b=M=>{var _=Pv(),w=I(_),R=ne(w,!0),D=E(w,2),P=ne(D,!0);be(()=>{ie(R,l(n)),je(D,"title",e.path),ie(P,e.path)}),z(M,_)},m=M=>{var _=Lv();z(M,_)},p=M=>{var _=Uv(),w=pt(_),R=I(w),D=I(R),P=ne(D,!0),B=E(D,2);{var y=Be=>{var Xe=Dv(),Ve=ne(Xe,!0);be(()=>ie(Ve,l(t).summary)),z(Be,Xe)};ke(B,Be=>{l(t).summary&&Be(y)})}var T=E(B,2),ce=I(T),V=ne(ce),O=E(ce,2),F=ne(O,!0),X=E(O,2),_e=ne(X),K=E(X,2),pe=ne(K,!0),Ee=E(R,4),j=E(Ee,2);{var G=Be=>{var Xe=Iv(),Ve=ne(Xe,!0);be(()=>ie(Ve,l(o))),z(Be,Xe)};ke(j,Be=>{l(o)&&Be(G)})}var $=E(w,2),Se=I($),we=E(Se,2),De=ne(we,!0);be((Be,Xe,Ve)=>{je(D,"title",l(t).name),ie(P,l(t).name),ie(V,`MC ${(l(t).game_version||"?")??""}`),ie(F,Be),je(X,"title",`${l(t).download_count??""} downloaded, ${l(t).override_count??""} overrides extracted`),ie(_e,`${l(t).file_count??""} files`),ie(pe,Xe),we.disabled=Ve,ie(De,l(a)?"Installing…":"Install Modpack")},[()=>c(),()=>s(l(t).archive_size),()=>l(a)||!l(r).trim()]),Bt(Ee,()=>l(r),Be=>g(r,Be)),se("click",Se,()=>e.onclose?.()),se("click",we,u),z(M,_)};ke(x,M=>{l(n)?M(b):l(t)?M(p,-1):M(m,1)})}se("click",d,M=>{M.target===M.currentTarget&&e.onclose?.()}),se("click",v,()=>e.onclose?.()),z(i,d),jt()}cn(["click"]);var kv=q('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),Fv=q('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),Wc=q("<option> </option>"),Bv=q('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),zv=q('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),Gv=q('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),Hv=q('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),Vv=q('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),Wv=q('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),jv=q('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Xv=q('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),qv=q('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),Yv=q('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),Kv=q(`<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400">Blind Mode Notice: Vanilla Minecraft's built-in Narrator lacks 3D world navigation and
              block inspection. We strongly recommend selecting <strong>Fabric</strong> or <strong>Quilt</strong> with Minecraft Access.</div>`),Zv=q('<label class="flex cursor-pointer items-start gap-2 text-[12px]"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent)"/> <span><span> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span></label>'),Jv=q('<section class="mt-3 border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Accessibility mods</h4> <p class="mt-0.5 text-[10px] text-(--text-muted)"> </p> <div class="mt-1.5 flex flex-col gap-1.5"></div></section>'),Qv=q('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),$v=q('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),eg=q('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),tg=q('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),ng=q('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),ig=q('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),rg=q('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>');function ag(i,e){Wt(e,!0);let t=Qe(e,"groups",19,()=>[]),n=Qe(e,"blindMode",3,!1),r=Qe(e,"deafMode",3,!1);const a=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],o=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"fabric",label:"Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],s=["","fabric","quilt","forge","neoforge"],c=["fabric","quilt","forge","neoforge"],u="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let d=de(null),h=de(!0),f=de(""),v=de(""),x=de(Pt(new Set(["release"]))),b=de(""),m=de(""),p=de(""),M=de(""),_=de(""),w=de(""),R=de(Pt([])),D=de("idle"),P=0,B=de(!1),y=de("");const T=[{id:"minecraft-access",label:"Minecraft Access",hint:"Core: screen reader & 3D spatial navigation"},{id:"sound-physics-remastered",label:"Sound Physics Remastered",hint:"Optional: spatial acoustics & directional echoes"}],ce=[{id:"echosight",label:"EchoSight",hint:"Directional sound radar & priority subtitles"},{id:"subtitles-visualizer",label:"Subtitles Visualizer",hint:"In-world directional subtitle markers"},{id:"visible-sound",label:"Visible Sound",hint:"In-world block/entity sound highlights"},{id:"soundsight",label:"SoundSight",hint:"Visual threat ring & enhanced subtitles"}];let V=de(Pt(new Set(["minecraft-access"])));const O=at(()=>[...n()?T:[],...r()?ce:[]]);qt(()=>{g(V,new Set(n()&&(l(_)==="fabric"||l(_)==="quilt")?["minecraft-access"]:[]),!0)});function F(ye){const ze=new Set(l(V));ze.has(ye)?ze.delete(ye):ze.add(ye),g(V,ze,!0)}function X(ye,ze){const C=window.__TAURI__?.core;return C?C.invoke(ye,ze):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const _e=at(()=>{const ye=l(d)?.versions??[],ze=l(v).trim().toLowerCase();return ye.filter(C=>l(x).has(C.version_type)&&(!ze||C.id.toLowerCase().includes(ze)))}),K=at(()=>!s.includes(l(_))),pe=at(()=>c.includes(l(_))),Ee=at(()=>!!l(b)&&!l(K)&&!l(B)&&!(l(pe)&&l(D)==="loading"));function j(ye){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[ye]??ye}function G(ye){if(!ye)return"—";const ze=new Date(ye);if(Number.isNaN(ze.getTime()))return String(ye).slice(0,10);const C=W=>String(W).padStart(2,"0");return`${C(ze.getDate())}/${C(ze.getMonth()+1)}/${ze.getFullYear()}`}function $(ye){const ze=new Set(l(x));ze.has(ye)?ze.delete(ye):ze.add(ye),g(x,ze,!0)}function Se(){const ye=window.__TAURI__?.core?.convertFileSrc;return l(M)&&ye?ye(l(M)):null}async function we(){const ye=window.__TAURI__?.dialog?.open;if(!ye){g(y,"Image picker unavailable in this build.");return}try{const ze=await ye({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});ze&&(g(M,String(ze),!0),g(y,""))}catch(ze){g(y,String(ze),!0)}}async function De(){if(!l(pe)||!l(b))return;const ye=++P;g(D,"loading");try{const ze=await X("fetch_loader_versions",{loader:l(_),gameVersion:l(b)});if(ye!==P)return;g(R,ze,!0),g(w,ze.find(C=>C.stable)?.version??ze[0]?.version??"",!0),g(D,ze.length?"idle":"error",!0)}catch{if(ye!==P)return;g(R,[],!0),g(w,""),g(D,"error")}}async function Be(ye){g(b,ye,!0),l(pe)&&await De()}async function Xe(ye){g(_,ye,!0),g(w,""),g(R,[],!0),g(D,"idle"),l(pe)&&await De()}async function Ve(){g(h,!0),g(f,"");try{g(d,await X("fetch_vanilla_versions"),!0)}catch(ye){g(f,String(ye),!0)}finally{g(h,!1)}}async function $e(){if(!l(Ee))return;g(B,!0),g(y,"");const ye=l(b),ze=l(m).trim()||ye;try{const C=await X("create_instance",{name:ze,version:ye,loader:l(_)||null,loaderVersion:l(w).trim()||null});let W="";if(l(M))try{await X("set_instance_icon",{instanceId:C.id,imagePath:l(M)})}catch(ae){W=`Instance created, but the icon could not be applied: ${ae}`}if(l(p).trim())try{await X("set_instance_group",{instanceId:C.id,group:l(p).trim()})}catch(ae){W=W?`${W} The group could not be set: ${ae}`:`Instance created, but the group could not be set: ${ae}`}for(const ae of l(V))try{await X("install_mod_with_deps",{instanceId:C.id,projectId:ae,gameVersion:ye,loader:l(_)})}catch(te){W=W?`${W} ${ae} could not be installed: ${te}`:`Instance created, but ${ae} could not be installed: ${te}`}e.oncreated?.(C,W)}catch(C){g(y,String(C),!0)}finally{g(B,!1)}}function dt(){window.__TAURI__?.core?.invoke("open_path",{path:u}).catch(ye=>g(y,String(ye),!0))}ji(()=>{const ye=hs(()=>e.onclose?.());return Ve(),()=>ps(ye)});var Ke=rg(),ee=I(Ke),lt=I(ee),We=I(lt),k=I(We);{var le=ye=>{var ze=kv(),C=pt(ze);be(W=>je(C,"src",W),[()=>Se()]),z(ye,ze)},Ne=at(()=>Se()),ve=ye=>{var ze=Fv();z(ye,ze)};ke(k,ye=>{l(Ne)?ye(le):ye(ve,-1)})}var Ae=E(We,2),he=I(Ae),Fe=E(he,2),Ie=E(I(Fe),2),A=I(Ie);A.value=A.__value="";var S=E(A);yt(S,16,t,ye=>ye,(ye,ze)=>{var C=Wc(),W=ne(C,!0),ae={};be(()=>{ie(W,ze),ae!==(ae=ze)&&(C.value=(C.__value=ae)??"")}),z(ye,C)}),pa(Ie);var U=E(Ae,2),Z=E(lt,2),J=I(Z),xe=I(J),Oe=I(xe);{var Te=ye=>{var ze=Bv();z(ye,ze)},Q=ye=>{var ze=zv(),C=I(ze),W=ne(C,!0),ae=E(C,2);be(()=>ie(W,l(f))),se("click",ae,Ve),z(ye,ze)},L=ye=>{var ze=Wv(),C=E(I(ze));yt(C,21,()=>l(_e),W=>W.id,(W,ae)=>{var te=Hv(),me=I(te),He=I(me),Ze=ne(He,!0),it=E(He,2);{var et=Et=>{var un=Gv();z(Et,un)};ke(it,Et=>{l(ae).is_latest_release&&Et(et)})}var st=E(me),nt=ne(st,!0),ot=E(st),At=ne(ot,!0);be((Et,un)=>{ut(te,1,`cursor-pointer border-b border-(--border)/50 ${l(b)===l(ae).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),ie(Ze,l(ae).id),ie(nt,Et),ie(At,un)},[()=>G(l(ae).release_time),()=>j(l(ae).version_type)]),se("click",te,()=>Be(l(ae).id)),se("keydown",te,Et=>{(Et.key==="Enter"||Et.key===" ")&&(Et.preventDefault(),Be(l(ae).id))}),z(W,te)},W=>{var ae=Vv();z(W,ae)}),z(ye,ze)};ke(Oe,ye=>{l(h)?ye(Te):l(f)?ye(Q,1):ye(L,-1)})}var fe=E(xe,2),ge=I(fe),H=E(ge,2),oe=ne(H),Ce=E(J,2),Ge=I(Ce),N=E(I(Ge),2);yt(N,21,()=>a,ye=>ye.id,(ye,ze)=>{var C=jv(),W=I(C),ae=E(W,2),te=ne(ae,!0);be(me=>{Ka(W,me),ie(te,l(ze).label)},[()=>l(x).has(l(ze).id)]),se("change",W,()=>$(l(ze).id)),z(ye,C)});var Le=E(Ge,2),ue=E(I(Le),2);yt(ue,21,()=>o,ye=>ye.id,(ye,ze)=>{var C=Xv(),W=I(C),ae=E(W,2),te=ne(ae,!0);be(()=>{is(W,l(ze).id),Ka(W,l(_)===l(ze).id),ie(te,l(ze).label)}),se("change",W,()=>Xe(l(ze).id)),z(ye,C)});var Re=E(ue,2);{var Me=ye=>{var ze=qv();z(ye,ze)},Ue=ye=>{var ze=Yv();z(ye,ze)};ke(Re,ye=>{l(K)?ye(Me):l(_)||ye(Ue,1)})}var qe=E(Re,2);{var rt=ye=>{var ze=Kv();z(ye,ze)};ke(qe,ye=>{n()&&(l(_)===""||l(_)==="horizon")&&ye(rt)})}var xt=E(qe,2);{var ct=ye=>{var ze=Jv(),C=E(I(ze),2),W=ne(C),ae=E(C,2);yt(ae,21,()=>l(O),te=>te.id,(te,me)=>{var He=Zv(),Ze=I(He),it=E(Ze,2),et=I(it),st=ne(et,!0),nt=E(et,2),ot=ne(nt,!0);be(At=>{Ka(Ze,At),ie(st,l(me).label),ie(ot,l(me).hint)},[()=>l(V).has(l(me).id)]),se("change",Ze,()=>F(l(me).id)),z(te,He)}),be(()=>ie(W,`Installed right after the instance is created.
                ${l(_)==="quilt"?"Dependencies resolve through QFAPI.":""}`)),z(ye,ze)};ke(xt,ye=>{(l(_)==="fabric"||l(_)==="quilt")&&l(O).length&&ye(ct)})}var Mt=E(xt,2);{var mt=ye=>{var ze=tg(),C=E(pt(ze),2);{var W=me=>{var He=Qv();z(me,He)},ae=me=>{var He=$v(),Ze=pt(He);Bt(Ze,()=>l(w),it=>g(w,it)),z(me,He)},te=me=>{var He=eg(),Ze=I(He);Ze.value=Ze.__value="";var it=E(Ze);yt(it,17,()=>l(R),et=>et.version,(et,st)=>{var nt=Wc(),ot=ne(nt),At={};be(()=>{ie(ot,`${l(st).version??""}${l(st).stable?"":" (unstable)"}`),At!==(At=l(st).version)&&(nt.value=(nt.__value=At)??"")}),z(et,nt)}),pa(He),ma(He,()=>l(w),et=>g(w,et)),z(me,He)};ke(C,me=>{l(D)==="loading"?me(W):l(D)==="error"?me(ae,1):me(te,-1)})}z(ye,ze)};ke(Mt,ye=>{l(pe)&&ye(mt)})}var vt=E(Z,2),Lt=I(vt),Jt=E(Lt,2);{var nn=ye=>{var ze=ng(),C=ne(ze,!0);be(()=>{je(ze,"title",l(y)),ie(C,l(y))}),z(ye,ze)},Tt=ye=>{var ze=ig(),C=ne(ze,!0);be(()=>ie(C,l(b)?`Selected Minecraft ${l(b)}`:"Pick a version to continue")),z(ye,ze)};ke(Jt,ye=>{l(y)?ye(nn):ye(Tt,-1)})}var Ht=E(Jt,2),Fn=E(Ht,2),Dt=ne(Fn,!0);be(()=>{je(he,"placeholder",l(b)?`Instance name (${l(b)})`:"Instance name"),ge.disabled=!l(d),ie(oe,`${l(_e).length??""} shown`),Fn.disabled=!l(Ee),je(Fn,"title",l(K)?"This mod loader is not supported yet.":"Create the instance"),ie(Dt,l(B)?"Creating…":"OK")}),se("click",Ke,ye=>{ye.target===ye.currentTarget&&e.onclose?.()}),se("click",We,we),Bt(he,()=>l(m),ye=>g(m,ye)),ma(Ie,()=>l(p),ye=>g(p,ye)),se("click",U,()=>e.onclose?.()),Bt(ge,()=>l(v),ye=>g(v,ye)),se("click",Lt,dt),se("click",Ht,()=>e.onclose?.()),se("click",Fn,$e),z(i,Ke),jt()}cn(["click","keydown","change"]);var sg=q('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),og=q('<button class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game"><!> Kill</button>'),lg=q("<button> </button>"),cg=q('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),ug=q('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"><!> Launch</button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip"><!> Export</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance"><!> Copy</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"><!> Delete</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance"><!> Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function dg(i,e){Wt(e,!0);let t=Qe(e,"storage",3,null),n=Qe(e,"gameRunning",3,!1),r=Qe(e,"modsCount",3,null),a=Qe(e,"groups",19,()=>[]),o=de(!1),s=de("");const c=at(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function u(){const he=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&he?he(e.instance.icon_path):"/logo.png"}function d(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function h(he){const Fe=new Date(he*1e3),Ie=A=>String(A).padStart(2,"0");return`${Ie(Fe.getDate())}/${Ie(Fe.getMonth()+1)}/${Fe.getFullYear()} ${Ie(Fe.getHours())}:${Ie(Fe.getMinutes())}:${Ie(Fe.getSeconds())}`}function f(he){const Fe=Math.max(0,Math.floor(he)),Ie=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],A=[];let S=Fe;for(const[U,Z]of Ie){const J=Math.floor(S/U);if(J&&(A.push(`${J} ${Z}${J===1?"":"s"}`),S-=J*U,A.length===2))break}return A.length?A.join(" "):"0 seconds"}const v=at(()=>{const he=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${he}, last played on ${h(e.instance.last_played)}, total played for ${f(e.instance.total_time_played)}`:he});function x(he){g(o,!1),g(s,""),e.onchangegroup?.(he.trim()?he.trim():null)}var b=ug(),m=I(b),p=ne(m),M=E(m,2),_=ne(M,!0),w=E(M,2),R=I(w),D=ne(R,!0),P=E(R,2),B=ne(P,!0),y=E(P,2);{var T=he=>{var Fe=sg(),Ie=ne(Fe);be(()=>ie(Ie,`▤ ${e.instance.group??""}`)),z(he,Fe)};ke(y,he=>{e.instance.group&&he(T)})}var ce=E(w,2),V=ne(ce,!0),O=E(ce,2),F=I(O),X=I(F);Nt(X,{name:"launch",size:13});var _e=E(F,2);{var K=he=>{var Fe=og(),Ie=I(Fe);Nt(Ie,{name:"kill",size:13}),se("click",Fe,function(...A){e.onkill?.apply(this,A)}),z(he,Fe)};ke(_e,he=>{n()&&he(K)})}var pe=E(_e,2),Ee=I(pe);Nt(Ee,{name:"edit",size:13});var j=E(pe,2),G=E(I(j),2),$=ne(G,!0),Se=E(j,2);{var we=he=>{var Fe=cg(),Ie=I(Fe),A=E(Ie,2);yt(A,16,a,J=>J,(J,xe)=>{var Oe=lg(),Te=ne(Oe,!0);be(()=>{ut(Oe,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===xe?"font-medium text-(--accent)":"text-(--text-muted)"}`),ie(Te,xe)}),se("click",Oe,()=>x(xe)),z(J,Oe)});var S=E(A,2),U=I(S),Z=E(U,2);be(J=>{ut(Ie,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),Z.disabled=J},[()=>!l(s).trim()]),se("click",Ie,()=>x("")),se("keydown",U,J=>{J.key==="Enter"&&l(s).trim()&&x(l(s))}),Bt(U,()=>l(s),J=>g(s,J)),se("click",Z,()=>x(l(s))),z(he,Fe)};ke(Se,he=>{l(o)&&he(we)})}var De=E(Se,2),Be=I(De);Nt(Be,{name:"folder",size:13});var Xe=E(De,2),Ve=I(Xe);Nt(Ve,{name:"export",size:13});var $e=E(Xe,2),dt=I($e);Nt(dt,{name:"copy",size:13});var Ke=E($e,2),ee=I(Ke);Nt(ee,{name:"delete",size:13});var lt=E(Ke,2),We=I(lt);Nt(We,{name:"shortcut",size:13});var k=E(O,2),le=I(k),Ne=ne(le,!0),ve=E(le,2),Ae=ne(ve);be((he,Fe,Ie)=>{je(p,"src",he),je(M,"title",e.instance.name),ie(_,e.instance.name),ie(D,e.instance.minecraft_version),ut(P,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${l(c)??""}`),ie(B,e.instance.loader_type),je(ce,"title",Fe),ie(V,Ie),F.disabled=n(),je(F,"title",n()?"A game is already running":`Launch ${e.instance.name}`),ie($,l(o)?"▴":"▾"),De.disabled=!t(),je(De,"title",t()?"Opens the instance folder":"Storage unknown"),ie(Ne,l(v)),ie(Ae,`${r()??"…"??""} mods installed`)},[()=>u(),()=>d(),()=>d()]),kn("error",p,he=>{he.currentTarget.dataset.f||(he.currentTarget.dataset.f="1",he.currentTarget.src="/logo.png")}),se("click",F,function(...he){e.onlaunch?.apply(this,he)}),se("click",pe,function(...he){e.onedit?.apply(this,he)}),se("click",j,()=>g(o,!l(o))),se("click",De,function(...he){e.onopenfolder?.apply(this,he)}),se("click",Xe,function(...he){e.onexport?.apply(this,he)}),se("click",$e,function(...he){e.oncopy?.apply(this,he)}),se("click",Ke,function(...he){e.ondelete?.apply(this,he)}),se("click",lt,function(...he){e.onshortcut?.apply(this,he)}),z(i,b),jt()}cn(["click","keydown"]);var fg=q("<button></button>"),hg=q('<span class="text-[11px] text-rose-400">invalid hex</span>'),pg=q('<span class="text-[11px] text-(--text-muted)">live preview</span>'),mg=q('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function vg(i,e){Wt(e,!0);let t=Qe(e,"theme",3,"twilight-dark");const n=at(()=>sa(t())?.accent??Ic),r=at(()=>{const _=sa(t())?.suggested??[],w=(sa(t())?.accent??Ic).toLowerCase();return _.map(R=>({...R,isBuiltin:R.hex.toLowerCase()===w}))});let a=de(Pt(Ml())),o=de(Pt(l(a)??l(n))),s=de(!1);qt(()=>{t(),g(a,Ml(),!0),g(o,l(a)??l(n),!0),g(s,!1)});function c(_){return l(a)===null?_.isBuiltin:l(a)===_.hex.toLowerCase()}function u(_){_.isBuiltin?(Am(),g(a,null)):ss(_.hex)&&g(a,_.hex.toLowerCase(),!0),g(o,l(a)??l(n),!0),g(s,!1)}function d(_,w){const R=ss(_,{persist:w})?ms(_):null;R?(g(a,R,!0),g(s,!1)):g(s,!0)}var h=mg(),f=pt(h);yt(f,21,()=>l(r),_=>_.hex,(_,w)=>{var R=fg();be((D,P)=>{ut(R,1,`h-7 w-7 rounded-full ${D??""}`),En(R,`background:${l(w).hex??""}`),je(R,"title",`${l(w).name??""}${l(w).isBuiltin?" (built-in)":""}`),je(R,"aria-label",`${l(w).name??""} accent`),je(R,"aria-pressed",P)},[()=>c(l(w))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>c(l(w))]),se("click",R,()=>u(l(w))),z(_,R)});var v=E(f,2),x=I(v),b=E(x,2),m=E(b,2);{var p=_=>{var w=hg();z(_,w)},M=_=>{var w=pg();z(_,w)};ke(m,_=>{l(s)?_(p):_(M,-1)})}be(()=>{is(x,l(o)),is(b,l(o)),je(b,"placeholder",l(n))}),se("input",x,_=>{g(o,_.currentTarget.value,!0),d(l(o),!1)}),se("change",x,_=>d(_.currentTarget.value,!0)),se("input",b,_=>{g(o,_.currentTarget.value,!0),d(l(o),!1)}),se("change",b,_=>d(_.currentTarget.value,!0)),z(i,h),jt()}cn(["click","input","change"]);var gg=q('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),_g=q('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),xg=q('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),bg=q('<button><span class="flex items-center gap-2"><!> <!> <!></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),yg=q('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),jc=q('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),Sg=q(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Icon pack</h3> <p class="mt-1 text-[12px] text-(--text-muted)">The glyph set used across the launcher. Fluent (Auto) follows the theme.</p> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),Mg=q("<option> </option>"),Eg=q('<p class="mt-2 text-[12px] text-rose-400"> </p>'),wg=q('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!></select> <!> <!> <button class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)">↻ Rescan JREs</button> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),Tg=q('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),Ag=q('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),Rg=q('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),Cg=q('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),Pg=q('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),Lg=q(`<h2 class="text-[16px] font-semibold">Accessibility</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Assistive profiles that adapt suggestions, installs and pre-launch setup for screen-reader and caption users.</p> <div class="mt-6 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Blind Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Screen reader &amp; audio navigation. Suggests Minecraft Access and spatial-audio mods on
              Fabric; Fabric is strongly recommended over Vanilla or Horizon.</p></div> <button type="button" role="switch" aria-label="Blind Mode (screen reader and audio navigation): suggests Minecraft Access on Fabric and recommends Fabric over Vanilla or Horizon" title="Toggle Blind Mode"><span aria-hidden="true"></span></button></div> <div class="mt-4 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Deaf Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Closed captions &amp; visual sound cues. Enforces <span class="font-mono">showSubtitles:true</span> in <span class="font-mono">options.txt</span> before every launch and suggests visual-sound Fabric mods.</p></div> <button type="button" role="switch" aria-label="Deaf Mode (closed captions and visual sound cues): enforces showSubtitles true in options.txt before launch and suggests visual-sound Fabric mods" title="Toggle Deaf Mode"><span aria-hidden="true"></span></button></div> <p class="mt-4 text-[11px] text-(--text-muted)" aria-live="polite"> </p>`,1),Dg=q('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),Ig=q("<p> </p>"),Ug=q('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div> <button class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Open the dedicated Accounts page"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <span class="truncate">Accounts</span></button></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function Ng(i,e){Wt(e,!0);let t=Qe(e,"version",3,""),n=Qe(e,"theme",15,"twilight-dark"),r=Qe(e,"blindMode",15,!1),a=Qe(e,"deafMode",15,!1),o=Qe(e,"storage",3,null),s=Qe(e,"runtimes",19,()=>[]),c=Qe(e,"scanning",3,!1),u=Qe(e,"javaError",3,""),d=Qe(e,"javaPath",15,""),h=Qe(e,"minMem",15,0),f=Qe(e,"maxMem",15,0);Qe(e,"sharedInput",11,""),Qe(e,"instancesInput",11,"");let v=Qe(e,"storageBusy",3,!1),x=Qe(e,"storageMsg",3,""),b=Qe(e,"javaMsg",3,""),m=Qe(e,"gameRunning",3,!1);const p=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"accessibility",label:"Accessibility",icon:"♿"},{id:"about",label:"About & Updates",icon:"ℹ"}];let M=de("appearance"),_=de(Pt(ao())),w=de(Pt(xr())),R=de(""),D=de(!0),P=de(Pt(Fc())),B=de(""),y=de("");function T(){g(P,Fc(),!0),g(y,"Loaded the active theme’s tokens — tweak and save.")}function ce(){try{const ve=kc({name:l(R),dark:l(D),tokens:l(P)});g(w,xr(),!0),n(ve.id),g(y,`Saved “${ve.name}”.`)}catch(ve){g(y,String(ve),!0)}}function V(ve){Dm(ve),g(w,xr(),!0),n()===ve&&n(ec),g(y,"Theme deleted.")}function O(){g(B,JSON.stringify({name:l(R).trim()||"My theme",dark:l(D),tokens:l(P)},null,2),!0),g(y,"Theme JSON written below — copy it to share.")}function F(){try{const ve=JSON.parse(l(B));if(!ve||typeof ve!="object"||Array.isArray(ve))throw new Error("Expected a theme object.");const Ae=kc(ve);g(w,xr(),!0),n(Ae.id),g(y,`Imported “${Ae.name}”.`),g(B,"")}catch(ve){g(y,`Import failed: ${ve}`)}}async function X(ve){const Ae=window.__TAURI__?.dialog?.open;if(!Ae)return null;try{const he=await Ae({directory:!0,multiple:!1,defaultPath:ve&&ve.trim()?ve.trim():void 0});return typeof he=="string"?he:null}catch{return null}}const _e=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let K=de(Pt({}));qt(()=>{o()&&g(K,{instances:o().is_default_instances?"":o().instances_dir,shared:o().is_default_shared?"":o().shared_dir,versions:o().is_default_versions?"":o().versions_dir,mods:o().is_default_mods?"":o().mods_dir,icons:o().is_default_icons?"":o().icons_dir,java:o().is_default_java?"":o().java_dir,skins:o().is_default_skins?"":o().skins_dir,downloads:o().downloads_dir||""},!0)});function pe(ve){return o()?ve==="downloads"?o().staging_root:o()[`${ve}_dir`]:""}function Ee(ve){return o()?ve==="downloads"?o().is_default_staging:o()[`is_default_${ve}`]:!0}const j="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var G=Ug(),$=I(G),Se=I($),we=E(Se,2);yt(we,21,()=>p,ve=>ve.id,(ve,Ae)=>{var he=gg(),Fe=I(he),Ie=I(Fe);_i(Ie,{get emoji(){return l(Ae).icon},size:15});var A=E(Fe,2),S=ne(A,!0);be(()=>{ut(he,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${l(M)===l(Ae).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(he,"aria-current",l(M)===l(Ae).id?"true":void 0),ie(S,l(Ae).label)}),se("click",he,()=>g(M,l(Ae).id,!0)),z(ve,he)});var De=E(we,2),Be=I(De),Xe=I(Be);Nt(Xe,{name:"accounts",size:15});var Ve=E($,2),$e=I(Ve),dt=I($e);{var Ke=ve=>{var Ae=Sg(),he=E(pt(Ae),6),Fe=I(he);yt(Fe,17,()=>mo,Me=>Me.id,(Me,Ue)=>{var qe=_g(),rt=I(qe),xt=I(rt),ct=E(xt,2),Mt=E(ct,2),mt=E(rt,2),vt=ne(mt,!0),Lt=E(mt,2),Jt=ne(Lt,!0);be(()=>{ut(qe,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===l(Ue).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(qe,"aria-pressed",n()===l(Ue).id),je(qe,"title",`${l(Ue).label??""}: ${l(Ue).dark?"dark":"light"} ground`),En(xt,`background:${l(Ue).swatch[0]??""}`),En(ct,`background:${l(Ue).swatch[1]??""}`),En(Mt,`background:${l(Ue).swatch[2]??""}`),ie(vt,l(Ue).label),ie(Jt,l(Ue).dark?"Dark ground":"Light ground")}),se("click",qe,()=>n(l(Ue).id)),z(Me,qe)});var Ie=E(Fe,2);yt(Ie,17,()=>l(w),Me=>Me.id,(Me,Ue)=>{var qe=xg(),rt=I(qe),xt=I(rt),ct=E(xt,2),Mt=E(ct,2),mt=E(rt,2),vt=ne(mt,!0),Lt=E(mt,2),Jt=ne(Lt),nn=E(Lt,2);be(()=>{ut(qe,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${n()===l(Ue).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(qe,"title",`${l(Ue).name??""}: ${l(Ue).dark?"dark":"light"} ground`),En(xt,`background:${l(Ue).tokens.bg1??""}`),En(ct,`background:${l(Ue).tokens.bg3??""}`),En(Mt,`background:${l(Ue).tokens.accent1??""}`),ie(vt,l(Ue).name),ie(Jt,`Custom · ${l(Ue).dark?"Dark":"Light"} ground`),je(nn,"title",`Delete ${l(Ue).name??""}`),je(nn,"aria-label",`Delete ${l(Ue).name??""}`)}),se("click",qe,()=>n(l(Ue).id)),se("keydown",qe,Tt=>{(Tt.key==="Enter"||Tt.key===" ")&&(Tt.preventDefault(),n(l(Ue).id))}),se("click",nn,Tt=>{Tt.stopPropagation(),V(l(Ue).id)}),z(Me,qe)});var A=E(he,4),S=I(A);vg(S,{get theme(){return n()}});var U=E(A,6);yt(U,21,()=>Ef,Me=>Me.id,(Me,Ue)=>{var qe=bg(),rt=I(qe),xt=I(rt);Nt(xt,{name:"instances",size:16,get pack(){return l(Ue).id}});var ct=E(xt,2);Nt(ct,{name:"settings",size:16,get pack(){return l(Ue).id}});var Mt=E(ct,2);Nt(Mt,{name:"accounts",size:16,get pack(){return l(Ue).id}});var mt=E(rt,2),vt=ne(mt,!0),Lt=E(mt,2),Jt=ne(Lt,!0);be(()=>{ut(qe,1,`flex flex-col items-start gap-2 rounded border p-2.5 text-left ${l(_)===l(Ue).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(qe,"aria-pressed",l(_)===l(Ue).id),je(qe,"title",`${l(Ue).label??""}: ${l(Ue).hint??""}`),ie(vt,l(Ue).label),ie(Jt,l(Ue).hint)}),se("click",qe,()=>{Bm(l(Ue).id),g(_,ao(),!0)}),z(Me,qe)});var Z=E(U,6),J=I(Z),xe=I(J),Oe=E(xe,2),Te=I(Oe),Q=E(Te,2),L=E(J,2);yt(L,21,()=>Cm,Me=>Me.key,(Me,Ue)=>{var qe=yg(),rt=I(qe),xt=ne(rt,!0),ct=E(rt,2),Mt=I(ct),mt=E(Mt,2);be(()=>{ie(xt,l(Ue).label),is(Mt,l(P)[l(Ue).key]),je(Mt,"title",`${l(Ue).label??""} color`),je(Mt,"aria-label",`${l(Ue).label??""} color`),is(mt,l(P)[l(Ue).key]),je(mt,"aria-label",`${l(Ue).label??""} hex`)}),se("input",Mt,vt=>g(P,{...l(P),[l(Ue).key]:vt.currentTarget.value},!0)),se("input",mt,vt=>g(P,{...l(P),[l(Ue).key]:vt.currentTarget.value},!0)),z(Me,qe)});var fe=E(L,2),ge=I(fe),H=E(ge,2),oe=E(Z,4),Ce=I(oe),Ge=E(Ce,2),N=I(Ge),Le=E(N,2),ue=E(oe,2);{var Re=Me=>{var Ue=jc(),qe=ne(Ue,!0);be(()=>ie(qe,l(y))),z(Me,Ue)};ke(ue,Me=>{l(y)&&Me(Re)})}be(()=>{ut(Te,1,`px-3 py-1.5 text-[12px] ${l(D)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(Te,"aria-pressed",l(D)),ut(Q,1,`px-3 py-1.5 text-[12px] ${l(D)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),je(Q,"aria-pressed",!l(D))}),Bt(xe,()=>l(R),Me=>g(R,Me)),se("click",Te,()=>g(D,!0)),se("click",Q,()=>g(D,!1)),se("click",ge,T),se("click",H,ce),Bt(Ce,()=>l(B),Me=>g(B,Me)),se("click",N,O),se("click",Le,F),z(ve,Ae)},ee=ve=>{var Ae=wg(),he=E(pt(Ae),6),Fe=I(he);Fe.value=Fe.__value="";var Ie=E(Fe);yt(Ie,17,s,H=>H.executable,(H,oe)=>{var Ce=Mg(),Ge=ne(Ce),N={};be(()=>{ie(Ge,`Java ${l(oe).major??""} — ${l(oe).home??""}`),N!==(N=l(oe).executable)&&(Ce.value=(Ce.__value=N)??"")}),z(H,Ce)}),pa(he);var A=E(he,2);{var S=H=>{var oe=jc(),Ce=ne(oe,!0);be(()=>ie(Ce,c()?"Probing system roots…":"No runtimes detected.")),z(H,oe)};ke(A,H=>{s().length||H(S)})}var U=E(A,2);{var Z=H=>{var oe=Eg(),Ce=ne(oe,!0);be(()=>ie(Ce,u())),z(H,oe)};ke(U,H=>{u()&&H(Z)})}var J=E(U,2),xe=E(J,4),Oe=E(I(xe),2),Te=E(Oe,2),Q=E(xe,2),L=E(I(Q),2),fe=E(L,2),ge=E(Q,4);be(()=>J.disabled=c()),ma(he,d),se("click",J,function(...H){e.onscanjava?.apply(this,H)}),Bt(Oe,h),Bt(Te,h),Bt(L,f),Bt(fe,f),se("click",ge,function(...H){e.onsaveprefs?.apply(this,H)}),z(ve,Ae)},lt=ve=>{var Ae=Pg(),he=E(pt(Ae),4);{var Fe=Ie=>{var A=Cg(),S=pt(A),U=I(S),Z=I(U),J=E(I(Z),2),xe=ne(J,!0),Oe=E(Z,2),Te=E(S,2);yt(Te,17,()=>_e,Q=>Q.key,(Q,L)=>{var fe=Rg(),ge=I(fe),H=I(ge),oe=I(H),Ce=E(oe),Ge=ne(Ce,!0),N=E(H,2);{var Le=vt=>{var Lt=Tg();be(()=>Lt.disabled=v()),se("click",Lt,()=>e.onsavefolder?.(l(L).key,"")),z(vt,Lt)},ue=at(()=>!Ee(l(L).key));ke(N,vt=>{l(ue)&&vt(Le)})}var Re=E(ge,2),Me=ne(Re,!0),Ue=E(Re,2),qe=I(Ue),rt=E(qe,2),xt=E(rt,2),ct=E(xt,2),Mt=E(Ue,2);{var mt=vt=>{var Lt=Ag(),Jt=I(Lt),nn=ne(Jt),Tt=E(Jt,2);be(()=>{je(Jt,"title",o().staging_root),ie(nn,`Staging: ${o().staging_root??""}`),Tt.disabled=v()||m(),je(Tt,"title",m()?"Unavailable while a game is running":"Purges the staging area")}),se("click",Tt,function(...Ht){e.oncleanstaging?.apply(this,Ht)}),z(vt,Lt)};ke(Mt,vt=>{l(L).key==="downloads"&&vt(mt)})}be((vt,Lt)=>{ie(oe,`${l(L).label??""} `),ie(Ge,vt),ie(Me,l(L).hint),je(qe,"placeholder",Lt),ct.disabled=v()},[()=>Ee(l(L).key)?"(default)":"(custom)",()=>pe(l(L).key)]),Bt(qe,()=>l(K)[l(L).key],vt=>l(K)[l(L).key]=vt),se("click",rt,async()=>{const vt=await X(l(K)[l(L).key]);vt&&(l(K)[l(L).key]=vt)}),se("click",xt,()=>e.onopenfolder?.(pe(l(L).key))),se("click",ct,()=>e.onsavefolder?.(l(L).key,l(K)[l(L).key])),z(Q,fe)}),be(()=>{je(J,"title",o().app_data),ie(xe,o().app_data)}),se("click",Oe,()=>e.onopenfolder?.(o().app_data)),z(Ie,A)};ke(he,Ie=>{o()&&Ie(Fe)})}z(ve,Ae)},We=ve=>{var Ae=Lg(),he=E(pt(Ae),4),Fe=E(I(he),2),Ie=ne(Fe),A=E(he,2),S=E(I(A),2),U=ne(S),Z=E(A,2),J=ne(Z);be(()=>{je(Fe,"aria-checked",r()),ut(Fe,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${r()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),ut(Ie,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${r()?"translate-x-[22px]":""}`),je(S,"aria-checked",a()),ut(S,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${a()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),ut(U,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${a()?"translate-x-[22px]":""}`),ie(J,`Blind Mode is ${r()?"on":"off"}. Deaf Mode is ${a()?"on":"off"}.`)}),se("click",Fe,()=>r(!r())),se("click",S,()=>a(!a())),z(ve,Ae)},k=ve=>{var Ae=Dg(),he=E(pt(Ae),4),Fe=I(he),Ie=E(I(Fe),2),A=I(Ie),S=E(I(A)),U=ne(S),Z=E(he,2),J=I(Z),xe=E(J,2),Oe=E(xe,2);be(()=>ie(U,`(alpha-v${t()??""})`)),se("click",J,()=>e.onopenurl?.(`${j}`)),se("click",xe,()=>e.onopenurl?.(`${j}/releases`)),se("click",Oe,()=>e.onopenurl?.(`${j}/issues`)),z(ve,Ae)};ke(dt,ve=>{l(M)==="appearance"?ve(Ke):l(M)==="java"?ve(ee,1):l(M)==="storage"?ve(lt,2):l(M)==="accessibility"?ve(We,3):ve(k,-1)})}var le=E(dt,2);{var Ne=ve=>{var Ae=Ig(),he=ne(Ae,!0);be(()=>{ut(Ae,1,`mt-5 text-[12px] ${b()?"text-(--accent)":"text-(--text-muted)"}`),ie(he,b()||x())}),z(ve,Ae)};ke(le,ve=>{(b()||x())&&ve(Ne)})}se("click",Se,function(...ve){e.onback?.apply(this,ve)}),se("click",De,function(...ve){e.onopenaccounts?.apply(this,ve)}),z(i,G),jt()}cn(["click","keydown","input"]);var Og=q("<button> </button>"),kg=q('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),Fg=q('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),Bg=q('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),Xc=q('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),zg=q('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),qc=q('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),Gg=q('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),Hg=q('<div class="p-4"><!> <!></div>'),Vg=q(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),Wg=q('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),jg=q('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),Xg=q('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),qg=q('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),Yg=q(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),Kg=q('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),Zg=q('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),Jg=q('<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div><!> <!></div>',1);function Rf(i,e){Wt(e,!0);let t=de("offline"),n=de(""),r=de(!1),a=de(""),o=de(""),s=de("idle"),c=de(""),u=de(null),d=de(!1),h=null,f=de("idle"),v=de(""),x=de(!1),b=de(!1),m=de(null),p=de(!1),M=null,_=de(""),w=de(""),R=de(!1),D=de(""),P=de(""),B=de(""),y=de("");function T(k,le){const Ne=window.__TAURI__?.core;return Ne?Ne.invoke(k,le):Promise.reject(new Error("Tauri backend unavailable in this preview."))}Ql(()=>{ce(),V()});function ce(){h&&(clearInterval(h),h=null)}function V(){M&&(clearInterval(M),M=null)}qt(()=>{const k=l(a).trim(),le=setTimeout(async()=>{if(!k){g(o,"");return}try{g(o,await T("offline_uuid",{username:k}),!0)}catch{g(o,"")}},200);return()=>clearTimeout(le)});async function O(k){k.preventDefault(),g(n,""),g(r,!0);try{await T("add_offline_account",{username:l(a).trim()}),g(a,""),g(o,""),await e.onrefresh?.()}catch(le){g(n,String(le),!0)}finally{g(r,!1)}}async function F(){g(c,""),g(d,!1),g(s,"requesting");try{g(u,await T("start_microsoft_device_code"),!0),g(s,"code"),ce(),h=setInterval(X,(l(u).interval||5)*1e3)}catch(k){g(s,"idle"),g(c,String(k),!0)}}async function X(){if(l(u))try{const k=await T("poll_microsoft_device_code",{device:l(u)});if(k.state==="pending")return;if(k.state==="slow_down"){ce(),h=setInterval(X,((l(u).interval||5)+5)*1e3);return}if(ce(),k.state==="failed"){g(c,k.reason,!0),g(u,null),g(s,"idle");return}g(u,null),g(s,"signedin"),await e.onrefresh?.()}catch(k){g(c,String(k),!0)}}async function _e(){if(l(u))try{await navigator.clipboard.writeText(l(u).user_code),g(d,!0),setTimeout(()=>g(d,!1),1600)}catch{}}async function K(){g(v,""),g(x,!1),g(b,!0);try{await T("elyby_browser_login"),g(x,!0),await e.onrefresh?.()}catch(k){g(v,String(k),!0)}finally{g(b,!1)}}async function pe(){g(v,""),g(p,!1),g(f,"requesting");try{g(m,await T("start_elyby_device_code"),!0),g(f,"code"),V(),M=setInterval(Ee,(l(m).interval||5)*1e3)}catch(k){g(f,"idle"),g(v,String(k),!0)}}async function Ee(){if(l(m))try{const k=await T("poll_elyby_device_code",{device:l(m)});if(k.state==="pending")return;if(k.state==="slow_down"){V(),M=setInterval(Ee,((l(m).interval||5)+5)*1e3);return}if(V(),k.state==="failed"){g(v,k.reason,!0),g(m,null),g(f,"idle");return}g(m,null),g(f,"signedin"),await e.onrefresh?.()}catch(k){g(v,String(k),!0)}}async function j(){if(l(m))try{await navigator.clipboard.writeText(l(m).user_code),g(p,!0),setTimeout(()=>g(p,!1),1600)}catch{}}function G(){const k=l(m)?.verification_uri_complete??l(m)?.verification_uri;k&&T("open_external_url",{url:k}).catch(()=>{})}async function $(k){k.preventDefault(),g(n,""),g(R,!0),g(x,!1);try{await T("add_elyby_account",{username:l(_).trim(),password:l(w)}),g(_,""),g(w,""),g(x,!0),await e.onrefresh?.()}catch(le){g(n,String(le),!0)}finally{g(R,!1)}}async function Se(k){k.preventDefault(),g(n,""),g(r,!0);try{const le=await T("add_custom_yggdrasil_account",{username:l(D).trim(),serverUrl:l(P).trim()});(l(B).trim()||l(y).trim())&&await T("set_account_textures",{id:le.id,skin:l(B).trim()||null,cape:l(y).trim()||null}),g(D,""),g(P,""),g(B,""),g(y,""),await e.onrefresh?.()}catch(le){g(n,String(le),!0)}finally{g(r,!1)}}async function we(k){const le=window.__TAURI__?.dialog?.open;if(!le){g(n,"File picker unavailable in this build.");return}try{const Ne=await le({multiple:!1,title:k==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Ne)return;const ve=String(Ne);g(k==="skin"?B:y,ve,!0),g(n,"")}catch(Ne){g(n,String(Ne),!0)}}var De=Jg(),Be=pt(De);yt(Be,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],yl,(k,le)=>{var Ne=at(()=>Pd(le,2));let ve=()=>l(Ne)[0],Ae=()=>l(Ne)[1];var he=Og(),Fe=ne(he,!0);be(()=>{ut(he,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${l(t)===ve()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),ie(Fe,Ae())}),se("click",he,()=>{g(t,ve(),!0),g(n,"")}),z(k,he)});var Xe=E(Be,2),Ve=I(Xe);{var $e=k=>{var le=Fg(),Ne=pt(le),ve=I(Ne),Ae=E(ve,2),he=E(Ne,2);{var Fe=Ie=>{var A=kg(),S=E(I(A),2),U=ne(S,!0);be(()=>ie(U,l(o))),z(Ie,A)};ke(he,Ie=>{l(o)&&Ie(Fe)})}be(Ie=>Ae.disabled=Ie,[()=>!l(a).trim()||l(r)]),kn("submit",Ne,O),Bt(ve,()=>l(a),Ie=>g(a,Ie)),z(k,le)},dt=k=>{var le=Hg(),Ne=I(le);{var ve=S=>{var U=Bg(),Z=pt(U);be(()=>Z.disabled=l(r)),se("click",Z,F),z(S,U)},Ae=S=>{var U=Xc();z(S,U)},he=S=>{var U=zg(),Z=E(I(U),2),J=ne(Z,!0),xe=E(Z,4),Oe=ne(xe,!0),Te=E(xe,2),Q=I(Te),L=ne(Q,!0),fe=E(Q,2);be(()=>{ie(J,l(u).verification_uri),ie(Oe,l(u).user_code),ie(L,l(d)?"Copied ✓":"Copy code")}),se("click",Q,_e),se("click",fe,F),z(S,U)},Fe=S=>{var U=qc(),Z=E(pt(U),2);se("click",Z,()=>{g(s,"idle"),g(c,"")}),z(S,U)};ke(Ne,S=>{l(s)==="idle"?S(ve):l(s)==="requesting"?S(Ae,1):l(s)==="code"&&l(u)?S(he,2):l(s)==="signedin"&&S(Fe,3)})}var Ie=E(Ne,2);{var A=S=>{var U=Gg(),Z=ne(U,!0);be(()=>ie(Z,l(c))),z(S,U)};ke(Ie,S=>{l(c)&&S(A)})}z(k,le)},Ke=k=>{var le=Yg(),Ne=E(I(le),2);{var ve=L=>{var fe=Vg(),ge=pt(fe),H=ne(ge,!0),oe=E(ge,4);be(()=>{ge.disabled=l(b),ie(H,l(b)?"Waiting for the browser…":"Sign in with browser (recommended)"),oe.disabled=l(b)}),se("click",ge,K),se("click",oe,pe),z(L,fe)},Ae=L=>{var fe=Xc();z(L,fe)},he=L=>{var fe=jg(),ge=E(I(fe),2),H=ne(ge,!0),oe=E(ge,4),Ce=ne(oe,!0),Ge=E(oe,2),N=I(Ge),Le=ne(N,!0),ue=E(N,2);{var Re=Ue=>{var qe=Wg();se("click",qe,G),z(Ue,qe)};ke(ue,Ue=>{(l(m).verification_uri||l(m).verification_uri_complete)&&Ue(Re)})}var Me=E(ue,2);be(()=>{ie(H,l(m).verification_uri),ie(Ce,l(m).user_code),ie(Le,l(p)?"Copied ✓":"Copy code")}),se("click",N,j),se("click",Me,pe),z(L,fe)},Fe=L=>{var fe=qc(),ge=E(pt(fe),2);se("click",ge,()=>{g(f,"idle"),g(v,"")}),z(L,fe)};ke(Ne,L=>{l(f)==="idle"?L(ve):l(f)==="requesting"?L(Ae,1):l(f)==="code"&&l(m)?L(he,2):l(f)==="signedin"&&L(Fe,3)})}var Ie=E(Ne,2);{var A=L=>{var fe=Xg(),ge=ne(fe,!0);be(()=>ie(ge,l(v))),z(L,fe)};ke(Ie,L=>{l(v)&&L(A)})}var S=E(Ie,2);{var U=L=>{var fe=qg();z(L,fe)};ke(S,L=>{l(x)&&l(f)==="idle"&&L(U)})}var Z=E(S,2),J=E(I(Z),2),xe=I(J),Oe=E(xe,2),Te=E(Oe,2),Q=ne(Te,!0);be(L=>{Te.disabled=L,ie(Q,l(R)?"Signing in…":"Sign in")},[()=>!l(_).trim()||!l(w)||l(R)]),kn("submit",J,$),Bt(xe,()=>l(_),L=>g(_,L)),Bt(Oe,()=>l(w),L=>g(w,L)),z(k,le)},ee=k=>{var le=Kg(),Ne=I(le),ve=E(Ne,2),Ae=E(ve,2),he=I(Ae),Fe=E(I(he)),Ie=ne(Fe,!0),A=E(he,2),S=E(I(A)),U=ne(S,!0),Z=E(Ae,2);be(J=>{ie(Ie,l(B)||"none"),ie(U,l(y)||"none"),Z.disabled=J},[()=>!l(D).trim()||!l(P).trim()||l(r)]),kn("submit",le,Se),Bt(Ne,()=>l(P),J=>g(P,J)),Bt(ve,()=>l(D),J=>g(D,J)),se("click",he,()=>we("skin")),se("click",A,()=>we("cape")),z(k,le)};ke(Ve,k=>{l(t)==="offline"?k($e):l(t)==="microsoft"?k(dt,1):l(t)==="elyby"?k(Ke,2):l(t)==="custom"&&k(ee,3)})}var lt=E(Ve,2);{var We=k=>{var le=Zg(),Ne=ne(le,!0);be(()=>ie(Ne,l(n))),z(k,le)};ke(lt,k=>{l(n)&&k(We)})}z(i,De),jt()}cn(["click"]);const nc="156",Dr={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qg=0,Yc=1,$g=2,Cf=1,e_=2,Di=3,Si=0,Pn=1,Kn=2,Bi=0,oa=1,Kc=2,Zc=3,Jc=4,t_=5,ea=100,n_=101,i_=102,Qc=103,$c=104,r_=200,a_=201,s_=202,o_=203,Pf=204,Lf=205,l_=206,c_=207,u_=208,d_=209,f_=210,h_=0,p_=1,m_=2,Al=3,v_=4,g_=5,__=6,x_=7,Df=0,b_=1,y_=2,nr=0,S_=1,M_=2,E_=3,w_=4,T_=5,If=300,va=301,ga=302,so=303,Rl=304,vo=306,Cl=1e3,ni=1001,Pl=1002,Vt=1003,eu=1004,Io=1005,qn=1006,A_=1007,os=1008,ir=1009,R_=1010,C_=1011,ic=1012,Uf=1013,er=1014,Oi=1015,_a=1016,Nf=1017,Of=1018,Mr=1020,P_=1021,ii=1023,L_=1024,D_=1025,Er=1026,xa=1027,I_=1028,kf=1029,U_=1030,Ff=1031,Bf=1033,Uo=33776,No=33777,Oo=33778,ko=33779,tu=35840,nu=35841,iu=35842,ru=35843,N_=36196,au=37492,su=37496,ou=37808,lu=37809,cu=37810,uu=37811,du=37812,fu=37813,hu=37814,pu=37815,mu=37816,vu=37817,gu=37818,_u=37819,xu=37820,bu=37821,Fo=36492,yu=36494,Su=36495,O_=36283,Mu=36284,Eu=36285,wu=36286,zf=3e3,wr=3001,k_=3200,F_=3201,Gf=0,B_=1,Tr="",zt="srgb",Mi="srgb-linear",go="display-p3",Bo=7680,z_=519,G_=512,H_=513,V_=514,W_=515,j_=516,X_=517,q_=518,Y_=519,Ll=35044,Tu="300 es",Dl=1035,ki=2e3,oo=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,Il=180/Math.PI;function rr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function wn(i,e,t){return Math.max(e,Math.min(t,i))}function K_(i,e){return(i%e+e)%e}function zo(i,e,t){return(1-t)*i+t*e}function Au(i){return(i&i-1)===0&&i!==0}function Ul(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Z_={DEG2RAD:Zs};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,n,r,a,o,s,c,u){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,u)}set(e,t,n,r,a,o,s,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=c,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],c=n[6],u=n[1],d=n[4],h=n[7],f=n[2],v=n[5],x=n[8],b=r[0],m=r[3],p=r[6],M=r[1],_=r[4],w=r[7],R=r[2],D=r[5],P=r[8];return a[0]=o*b+s*M+c*R,a[3]=o*m+s*_+c*D,a[6]=o*p+s*w+c*P,a[1]=u*b+d*M+h*R,a[4]=u*m+d*_+h*D,a[7]=u*p+d*w+h*P,a[2]=f*b+v*M+x*R,a[5]=f*m+v*_+x*D,a[8]=f*p+v*w+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],u=e[7],d=e[8];return t*o*d-t*s*u-n*a*d+n*s*c+r*a*u-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=d*o-s*u,f=s*c-d*a,v=u*a-o*c,x=t*h+n*f+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=h*b,e[1]=(r*u-d*n)*b,e[2]=(s*n-r*o)*b,e[3]=f*b,e[4]=(d*t-r*c)*b,e[5]=(r*a-s*t)*b,e[6]=v*b,e[7]=(n*c-u*t)*b,e[8]=(o*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const c=Math.cos(a),u=Math.sin(a);return this.set(n*c,n*u,-n*(c*o+u*s)+o+e,-r*u,r*c,-r*(-u*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new _t;function Hf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function J_(){const i=lo("canvas");return i.style.display="block",i}const Ru={};function Za(i){i in Ru||(Ru[i]=!0,console.warn(i))}function la(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Q_=new _t().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),$_=new _t().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ex(i){return i.convertSRGBToLinear().applyMatrix3($_)}function tx(i){return i.applyMatrix3(Q_).convertLinearToSRGB()}const nx={[Mi]:i=>i,[zt]:i=>i.convertSRGBToLinear(),[go]:ex},ix={[Mi]:i=>i,[zt]:i=>i.convertLinearToSRGB(),[go]:tx},Vn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Mi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=nx[e],r=ix[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Ur;class Vf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=lo("canvas")),Ur.width=e.width,Ur.height=e.height;const n=Ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=la(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(la(t[n]/255)*255):t[n]=la(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class Wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Vo(r[o].image)):a.push(Vo(r[o]))}else a=Vo(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ax=0;class xn extends Cr{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=ni,r=ni,a=qn,o=os,s=ii,c=ir,u=xn.DEFAULT_ANISOTROPY,d=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=rr(),this.name="",this.source=new Wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===wr?zt:Tr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==If)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cl:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cl:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?wr:zf}set encoding(e){Za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wr?zt:Tr}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=If;xn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,u=c[0],d=c[4],h=c[8],f=c[1],v=c[5],x=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+b)<.1&&Math.abs(x+m)<.1&&Math.abs(u+v+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,w=(v+1)/2,R=(p+1)/2,D=(d+f)/4,P=(h+b)/4,B=(x+m)/4;return _>w&&_>R?_<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(_),r=D/n,a=P/n):w>R?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=D/r,a=B/r):R<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),n=P/a,r=B/a),this.set(n,r,a,t),this}let M=Math.sqrt((m-x)*(m-x)+(h-b)*(h-b)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(h-b)/M,this.z=(f-d)/M,this.w=Math.acos((u+v+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sx extends Cr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Za("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wr?zt:Tr),this.texture=new xn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends sx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jf extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ox extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let c=n[r+0],u=n[r+1],d=n[r+2],h=n[r+3];const f=a[o+0],v=a[o+1],x=a[o+2],b=a[o+3];if(s===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=v,e[t+2]=x,e[t+3]=b;return}if(h!==b||c!==f||u!==v||d!==x){let m=1-s;const p=c*f+u*v+d*x+h*b,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const R=Math.sqrt(_),D=Math.atan2(R,p*M);m=Math.sin(m*D)/R,s=Math.sin(s*D)/R}const w=s*M;if(c=c*m+f*w,u=u*m+v*w,d=d*m+x*w,h=h*m+b*w,m===1-s){const R=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=R,u*=R,d*=R,h*=R}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],c=n[r+1],u=n[r+2],d=n[r+3],h=a[o],f=a[o+1],v=a[o+2],x=a[o+3];return e[t]=s*x+d*h+c*v-u*f,e[t+1]=c*x+d*f+u*h-s*v,e[t+2]=u*x+d*v+s*f-c*h,e[t+3]=d*x-s*h-c*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,u=s(n/2),d=s(r/2),h=s(a/2),f=c(n/2),v=c(r/2),x=c(a/2);switch(o){case"XYZ":this._x=f*d*h+u*v*x,this._y=u*v*h-f*d*x,this._z=u*d*x+f*v*h,this._w=u*d*h-f*v*x;break;case"YXZ":this._x=f*d*h+u*v*x,this._y=u*v*h-f*d*x,this._z=u*d*x-f*v*h,this._w=u*d*h+f*v*x;break;case"ZXY":this._x=f*d*h-u*v*x,this._y=u*v*h+f*d*x,this._z=u*d*x+f*v*h,this._w=u*d*h-f*v*x;break;case"ZYX":this._x=f*d*h-u*v*x,this._y=u*v*h+f*d*x,this._z=u*d*x-f*v*h,this._w=u*d*h+f*v*x;break;case"YZX":this._x=f*d*h+u*v*x,this._y=u*v*h+f*d*x,this._z=u*d*x-f*v*h,this._w=u*d*h-f*v*x;break;case"XZY":this._x=f*d*h-u*v*x,this._y=u*v*h-f*d*x,this._z=u*d*x+f*v*h,this._w=u*d*h+f*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],u=t[2],d=t[6],h=t[10],f=n+s+h;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-c)*v,this._y=(a-u)*v,this._z=(o-r)*v}else if(n>s&&n>h){const v=2*Math.sqrt(1+n-s-h);this._w=(d-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(a+u)/v}else if(s>h){const v=2*Math.sqrt(1+s-n-h);this._w=(a-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+h-n-s);this._w=(o-r)/v,this._x=(a+u)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+o*s+r*u-a*c,this._y=r*d+o*c+a*s-n*u,this._z=a*d+o*u+n*c-r*s,this._w=o*d-n*s-r*c-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),d=Math.atan2(u,s),h=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,n=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,u=c*t+o*r-s*n,d=c*n+s*t-a*r,h=c*r+a*n-o*t,f=-a*t-o*n-s*r;return this.x=u*c+f*-a+d*-s-h*-o,this.y=d*c+f*-o+h*-a-u*-s,this.z=h*c+f*-s+u*-o-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-n*c,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new re,Cu=new Rr;class vs{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox),Nr.applyMatrix4(e.matrixWorld),this.union(Nr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)Ai.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ai)}else r.boundingBox===null&&r.computeBoundingBox(),Nr.copy(r.boundingBox),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),ys.subVectors(this.max,Da),Or.subVectors(e.a,Da),kr.subVectors(e.b,Da),Fr.subVectors(e.c,Da),Yi.subVectors(kr,Or),Ki.subVectors(Fr,kr),cr.subVectors(Or,Fr);let t=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-cr.z,cr.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,cr.z,0,-cr.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-cr.y,cr.x,0];return!jo(t,Or,kr,Fr,ys)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Or,kr,Fr,ys))?!1:(Ss.crossVectors(Yi,Ki),t=[Ss.x,Ss.y,Ss.z],jo(t,Or,kr,Fr,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new re,new re,new re,new re,new re,new re,new re,new re],Ai=new re,Nr=new vs,Or=new re,kr=new re,Fr=new re,Yi=new re,Ki=new re,cr=new re,Da=new re,ys=new re,Ss=new re,ur=new re;function jo(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){ur.fromArray(i,a);const s=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),c=e.dot(ur),u=t.dot(ur),d=n.dot(ur);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>s)return!1}return!0}const lx=new vs,Ia=new re,Xo=new re;class rc{constructor(e=new re,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lx.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const t=Ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ia,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Xo)),this.expandByPoint(Ia.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new re,qo=new re,Ms=new re,Zi=new re,Yo=new re,Es=new re,Ko=new re;class Xf{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qo.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(qo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Ms),s=Zi.dot(this.direction),c=-Zi.dot(Ms),u=Zi.lengthSq(),d=Math.abs(1-o*o);let h,f,v,x;if(d>0)if(h=o*c-s,f=o*s-c,x=a*d,h>=0)if(f>=-x)if(f<=x){const b=1/d;h*=b,f*=b,v=h*(h+o*f+2*s)+f*(o*h+f+2*c)+u}else f=a,h=Math.max(0,-(o*f+s)),v=-h*h+f*(f+2*c)+u;else f=-a,h=Math.max(0,-(o*f+s)),v=-h*h+f*(f+2*c)+u;else f<=-x?(h=Math.max(0,-(-o*a+s)),f=h>0?-a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u):f<=x?(h=0,f=Math.min(Math.max(-a,-c),a),v=f*(f+2*c)+u):(h=Math.max(0,-(o*a+s)),f=h>0?a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u);else f=o>0?-a:a,h=Math.max(0,-(o*f+s)),v=-h*h+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qo).addScaledVector(Ms,f),v}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const n=Ri.dot(this.direction),r=Ri.dot(Ri)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(a=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,r,a){Yo.subVectors(t,e),Es.subVectors(n,e),Ko.crossVectors(Yo,Es);let o=this.direction.dot(Ko),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Zi.subVectors(this.origin,e);const c=s*this.direction.dot(Es.crossVectors(Zi,Es));if(c<0)return null;const u=s*this.direction.dot(Yo.cross(Zi));if(u<0||c+u>o)return null;const d=-s*Zi.dot(Ko);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,n,r,a,o,s,c,u,d,h,f,v,x,b,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,u,d,h,f,v,x,b,m)}set(e,t,n,r,a,o,s,c,u,d,h,f,v,x,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=o,p[9]=s,p[13]=c,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=v,p[7]=x,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),a=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=o*d,v=o*h,x=s*d,b=s*h;t[0]=c*d,t[4]=-c*h,t[8]=u,t[1]=v+x*u,t[5]=f-b*u,t[9]=-s*c,t[2]=b-f*u,t[6]=x+v*u,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,v=c*h,x=u*d,b=u*h;t[0]=f+b*s,t[4]=x*s-v,t[8]=o*u,t[1]=o*h,t[5]=o*d,t[9]=-s,t[2]=v*s-x,t[6]=b+f*s,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,v=c*h,x=u*d,b=u*h;t[0]=f-b*s,t[4]=-o*h,t[8]=x+v*s,t[1]=v+x*s,t[5]=o*d,t[9]=b-f*s,t[2]=-o*u,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,v=o*h,x=s*d,b=s*h;t[0]=c*d,t[4]=x*u-v,t[8]=f*u+b,t[1]=c*h,t[5]=b*u+f,t[9]=v*u-x,t[2]=-u,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,v=o*u,x=s*c,b=s*u;t[0]=c*d,t[4]=b-f*h,t[8]=x*h+v,t[1]=h,t[5]=o*d,t[9]=-s*d,t[2]=-u*d,t[6]=v*h+x,t[10]=f-b*h}else if(e.order==="XZY"){const f=o*c,v=o*u,x=s*c,b=s*u;t[0]=c*d,t[4]=-h,t[8]=u*d,t[1]=f*h+b,t[5]=o*d,t[9]=v*h-x,t[2]=x*h-v,t[6]=s*d,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cx,e,ux)}lookAt(e,t,n){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ji.crossVectors(n,Dn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ji.crossVectors(n,Dn)),Ji.normalize(),ws.crossVectors(Dn,Ji),r[0]=Ji.x,r[4]=ws.x,r[8]=Dn.x,r[1]=Ji.y,r[5]=ws.y,r[9]=Dn.y,r[2]=Ji.z,r[6]=ws.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],c=n[8],u=n[12],d=n[1],h=n[5],f=n[9],v=n[13],x=n[2],b=n[6],m=n[10],p=n[14],M=n[3],_=n[7],w=n[11],R=n[15],D=r[0],P=r[4],B=r[8],y=r[12],T=r[1],ce=r[5],V=r[9],O=r[13],F=r[2],X=r[6],_e=r[10],K=r[14],pe=r[3],Ee=r[7],j=r[11],G=r[15];return a[0]=o*D+s*T+c*F+u*pe,a[4]=o*P+s*ce+c*X+u*Ee,a[8]=o*B+s*V+c*_e+u*j,a[12]=o*y+s*O+c*K+u*G,a[1]=d*D+h*T+f*F+v*pe,a[5]=d*P+h*ce+f*X+v*Ee,a[9]=d*B+h*V+f*_e+v*j,a[13]=d*y+h*O+f*K+v*G,a[2]=x*D+b*T+m*F+p*pe,a[6]=x*P+b*ce+m*X+p*Ee,a[10]=x*B+b*V+m*_e+p*j,a[14]=x*y+b*O+m*K+p*G,a[3]=M*D+_*T+w*F+R*pe,a[7]=M*P+_*ce+w*X+R*Ee,a[11]=M*B+_*V+w*_e+R*j,a[15]=M*y+_*O+w*K+R*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],u=e[13],d=e[2],h=e[6],f=e[10],v=e[14],x=e[3],b=e[7],m=e[11],p=e[15];return x*(+a*c*h-r*u*h-a*s*f+n*u*f+r*s*v-n*c*v)+b*(+t*c*v-t*u*f+a*o*f-r*o*v+r*u*d-a*c*d)+m*(+t*u*h-t*s*v-a*o*h+n*o*v+a*s*d-n*u*d)+p*(-r*s*d-t*c*h+t*s*f+r*o*h-n*o*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],v=e[11],x=e[12],b=e[13],m=e[14],p=e[15],M=h*m*u-b*f*u+b*c*v-s*m*v-h*c*p+s*f*p,_=x*f*u-d*m*u-x*c*v+o*m*v+d*c*p-o*f*p,w=d*b*u-x*h*u+x*s*v-o*b*v-d*s*p+o*h*p,R=x*h*c-d*b*c-x*s*f+o*b*f+d*s*m-o*h*m,D=t*M+n*_+r*w+a*R;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=M*P,e[1]=(b*f*a-h*m*a-b*r*v+n*m*v+h*r*p-n*f*p)*P,e[2]=(s*m*a-b*c*a+b*r*u-n*m*u-s*r*p+n*c*p)*P,e[3]=(h*c*a-s*f*a-h*r*u+n*f*u+s*r*v-n*c*v)*P,e[4]=_*P,e[5]=(d*m*a-x*f*a+x*r*v-t*m*v-d*r*p+t*f*p)*P,e[6]=(x*c*a-o*m*a-x*r*u+t*m*u+o*r*p-t*c*p)*P,e[7]=(o*f*a-d*c*a+d*r*u-t*f*u-o*r*v+t*c*v)*P,e[8]=w*P,e[9]=(x*h*a-d*b*a-x*n*v+t*b*v+d*n*p-t*h*p)*P,e[10]=(o*b*a-x*s*a+x*n*u-t*b*u-o*n*p+t*s*p)*P,e[11]=(d*s*a-o*h*a-d*n*u+t*h*u+o*n*v-t*s*v)*P,e[12]=R*P,e[13]=(d*b*r-x*h*r+x*n*f-t*b*f-d*n*m+t*h*m)*P,e[14]=(x*s*r-o*b*r-x*n*c+t*b*c+o*n*m-t*s*m)*P,e[15]=(o*h*r-d*s*r+d*n*c-t*h*c-o*n*f+t*s*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,c=e.z,u=a*o,d=a*s;return this.set(u*o+n,u*s-r*c,u*c+r*s,0,u*s+r*c,d*s+n,d*c-r*o,0,u*c-r*s,d*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,u=a+a,d=o+o,h=s+s,f=a*u,v=a*d,x=a*h,b=o*d,m=o*h,p=s*h,M=c*u,_=c*d,w=c*h,R=n.x,D=n.y,P=n.z;return r[0]=(1-(b+p))*R,r[1]=(v+w)*R,r[2]=(x-_)*R,r[3]=0,r[4]=(v-w)*D,r[5]=(1-(f+p))*D,r[6]=(m+M)*D,r[7]=0,r[8]=(x+_)*P,r[9]=(m-M)*P,r[10]=(1-(f+b))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),s=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const u=1/a,d=1/o,h=1/s;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=d,$n.elements[5]*=d,$n.elements[6]*=d,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=ki){const c=this.elements,u=2*a/(t-e),d=2*a/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let v,x;if(s===ki)v=-(o+a)/(o-a),x=-2*o*a/(o-a);else if(s===oo)v=-o/(o-a),x=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=ki){const c=this.elements,u=1/(t-e),d=1/(n-r),h=1/(o-a),f=(t+e)*u,v=(n+r)*d;let x,b;if(s===ki)x=(o+a)*h,b=-2*h;else if(s===oo)x=a*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=b,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Br=new re,$n=new Zt,cx=new re(0,0,0),ux=new re(1,1,1),Ji=new re,ws=new re,Dn=new re,Pu=new Zt,Lu=new Rr;class _o{constructor(e=0,t=0,n=0,r=_o.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],u=r[5],d=r[9],h=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(wn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(wn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,v));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_o.DEFAULT_ORDER="XYZ";class qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dx=0;const Du=new re,zr=new Rr,Ci=new Zt,Ts=new re,Ua=new re,fx=new re,hx=new Rr,Iu=new re(1,0,0),Uu=new re(0,1,0),Nu=new re(0,0,1),px={type:"added"},mx={type:"removed"};class bn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new re,t=new _o,n=new Rr,r=new re(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new _t}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Nu,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Ua,Ts,this.up):Ci.lookAt(Ts,Ua,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(Ci),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(px)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),v=o(e.animations),x=o(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),v.length>0&&(n.animations=v),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bn.DEFAULT_UP=new re(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new re,Pi=new re,Zo=new re,Li=new re,Gr=new re,Hr=new re,Ou=new re,Jo=new re,Qo=new re,$o=new re;let As=!1;class Yn{constructor(e=new re,t=new re,n=new re){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ei.subVectors(e,t),r.cross(ei);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){ei.subVectors(r,t),Pi.subVectors(n,t),Zo.subVectors(e,t);const o=ei.dot(ei),s=ei.dot(Pi),c=ei.dot(Zo),u=Pi.dot(Pi),d=Pi.dot(Zo),h=o*u-s*s;if(h===0)return a.set(-2,-1,-1);const f=1/h,v=(u*c-s*d)*f,x=(o*d-s*c)*f;return a.set(1-v-x,x,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Li),Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getUV(e,t,n,r,a,o,s,c){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(e,t,n,r,a,o,s,c)}static getInterpolation(e,t,n,r,a,o,s,c){return this.getBarycoord(e,t,n,r,Li),c.setScalar(0),c.addScaledVector(a,Li.x),c.addScaledVector(o,Li.y),c.addScaledVector(s,Li.z),c}static isFrontFacing(e,t,n,r){return ei.subVectors(n,t),Pi.subVectors(e,t),ei.cross(Pi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ei.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),Yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;Gr.subVectors(r,n),Hr.subVectors(a,n),Jo.subVectors(e,n);const c=Gr.dot(Jo),u=Hr.dot(Jo);if(c<=0&&u<=0)return t.copy(n);Qo.subVectors(e,r);const d=Gr.dot(Qo),h=Hr.dot(Qo);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Gr,o);$o.subVectors(e,a);const v=Gr.dot($o),x=Hr.dot($o);if(x>=0&&v<=x)return t.copy(a);const b=v*u-c*x;if(b<=0&&u>=0&&x<=0)return s=u/(u-x),t.copy(n).addScaledVector(Hr,s);const m=d*x-v*h;if(m<=0&&h-d>=0&&v-x>=0)return Ou.subVectors(a,r),s=(h-d)/(h-d+(v-x)),t.copy(r).addScaledVector(Ou,s);const p=1/(m+b+f);return o=b*p,s=f*p,t.copy(n).addScaledVector(Gr,o).addScaledVector(Hr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vx=0;class wa extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=oa,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Lf,this.blendEquation=ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function el(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Vn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Vn.workingColorSpace){if(e=K_(e,1),t=wn(t,0,1),n=wn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=el(o,a,e+1/3),this.g=el(o,a,e),this.b=el(o,a,e-1/3)}return Vn.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Vn.fromWorkingColorSpace(_n.copy(this),e),Math.round(wn(_n.r*255,0,255))*65536+Math.round(wn(_n.g*255,0,255))*256+Math.round(wn(_n.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vn.workingColorSpace){Vn.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,r=_n.g,a=_n.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let c,u;const d=(s+o)/2;if(s===o)c=0,u=0;else{const h=o-s;switch(u=d<=.5?h/(o+s):h/(2-o-s),o){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=Vn.workingColorSpace){return Vn.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=zt){Vn.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,r=_n.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),ti.h+=e,ti.s+=t,ti.l+=n,this.setHSL(ti.h,ti.s,ti.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Rs);const n=zo(ti.h,Rs.h,t),r=zo(ti.s,Rs.s,t),a=zo(ti.l,Rs.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Rt;Rt.NAMES=Yf;class Kf extends wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new re,Cs=new tt;class ci{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this.updateRange={offset:0,count:-1},this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Zf extends ci{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jf extends ci{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zi extends ci{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gx=0;const Gn=new Zt,tl=new bn,Vr=new re,In=new vs,Na=new vs,dn=new re;class Xi extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?Jf:Zf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new _t().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new zi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];In.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new re,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Na.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(In.min,Na.min),In.expandByPoint(dn),dn.addVectors(In.max,Na.max),In.expandByPoint(dn)):(In.expandByPoint(Na.min),In.expandByPoint(Na.max))}In.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)dn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(dn));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let u=0,d=s.count;u<d;u++)dn.fromBufferAttribute(s,u),c&&(Vr.fromBufferAttribute(e,u),dn.add(Vr)),r=Math.max(r,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let T=0;T<s;T++)u[T]=new re,d[T]=new re;const h=new re,f=new re,v=new re,x=new tt,b=new tt,m=new tt,p=new re,M=new re;function _(T,ce,V){h.fromArray(r,T*3),f.fromArray(r,ce*3),v.fromArray(r,V*3),x.fromArray(o,T*2),b.fromArray(o,ce*2),m.fromArray(o,V*2),f.sub(h),v.sub(h),b.sub(x),m.sub(x);const O=1/(b.x*m.y-m.x*b.y);isFinite(O)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(v,-b.y).multiplyScalar(O),M.copy(v).multiplyScalar(b.x).addScaledVector(f,-m.x).multiplyScalar(O),u[T].add(p),u[ce].add(p),u[V].add(p),d[T].add(M),d[ce].add(M),d[V].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,ce=w.length;T<ce;++T){const V=w[T],O=V.start,F=V.count;for(let X=O,_e=O+F;X<_e;X+=3)_(n[X+0],n[X+1],n[X+2])}const R=new re,D=new re,P=new re,B=new re;function y(T){P.fromArray(a,T*3),B.copy(P);const ce=u[T];R.copy(ce),R.sub(P.multiplyScalar(P.dot(ce))).normalize(),D.crossVectors(B,ce);const O=D.dot(d[T])<0?-1:1;c[T*4]=R.x,c[T*4+1]=R.y,c[T*4+2]=R.z,c[T*4+3]=O}for(let T=0,ce=w.length;T<ce;++T){const V=w[T],O=V.start,F=V.count;for(let X=O,_e=O+F;X<_e;X+=3)y(n[X+0]),y(n[X+1]),y(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,v=n.count;f<v;f++)n.setXYZ(f,0,0,0);const r=new re,a=new re,o=new re,s=new re,c=new re,u=new re,d=new re,h=new re;if(e)for(let f=0,v=e.count;f<v;f+=3){const x=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),s.fromBufferAttribute(n,x),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,m),s.add(d),c.add(d),u.add(d),n.setXYZ(x,s.x,s.y,s.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(s,c){const u=s.array,d=s.itemSize,h=s.normalized,f=new u.constructor(c.length*d);let v=0,x=0;for(let b=0,m=c.length;b<m;b++){s.isInterleavedBufferAttribute?v=c[b]*s.data.stride+s.offset:v=c[b]*d;for(let p=0;p<d;p++)f[x++]=u[v++]}return new ci(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,n=this.index.array,r=this.attributes;for(const s in r){const c=r[s],u=e(c,n);t.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const c=[],u=a[s];for(let d=0,h=u.length;d<h;d++){const f=u[d],v=e(f,n);c.push(v)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const u=o[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const v=u[h];d.push(v.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],h=a[u];for(let f=0,v=h.length;f<v;f++)d.push(h[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ku=new Zt,dr=new Xf,Ps=new rc,Fu=new re,Wr=new re,jr=new re,Xr=new re,nl=new re,Ls=new re,Ds=new tt,Is=new tt,Us=new tt,Bu=new re,zu=new re,Gu=new re,Ns=new re,Os=new re;class Ut extends bn{constructor(e=new Xi,t=new Kf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Ls.set(0,0,0);for(let c=0,u=a.length;c<u;c++){const d=s[c],h=a[c];d!==0&&(nl.fromBufferAttribute(h,e),o?Ls.addScaledVector(nl,d):Ls.addScaledVector(nl.sub(t),d))}t.add(Ls)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(a),dr.copy(e.ray).recast(e.near),!(Ps.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Ps,Fu)===null||dr.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(ku.copy(a).invert(),dr.copy(e.ray).applyMatrix4(ku),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,v=a.drawRange;if(s!==null)if(Array.isArray(o))for(let x=0,b=f.length;x<b;x++){const m=f[x],p=o[m.materialIndex],M=Math.max(m.start,v.start),_=Math.min(s.count,Math.min(m.start+m.count,v.start+v.count));for(let w=M,R=_;w<R;w+=3){const D=s.getX(w),P=s.getX(w+1),B=s.getX(w+2);r=ks(this,p,e,n,u,d,h,D,P,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,v.start),b=Math.min(s.count,v.start+v.count);for(let m=x,p=b;m<p;m+=3){const M=s.getX(m),_=s.getX(m+1),w=s.getX(m+2);r=ks(this,o,e,n,u,d,h,M,_,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,b=f.length;x<b;x++){const m=f[x],p=o[m.materialIndex],M=Math.max(m.start,v.start),_=Math.min(c.count,Math.min(m.start+m.count,v.start+v.count));for(let w=M,R=_;w<R;w+=3){const D=w,P=w+1,B=w+2;r=ks(this,p,e,n,u,d,h,D,P,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,v.start),b=Math.min(c.count,v.start+v.count);for(let m=x,p=b;m<p;m+=3){const M=m,_=m+1,w=m+2;r=ks(this,o,e,n,u,d,h,M,_,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function _x(i,e,t,n,r,a,o,s){let c;if(e.side===Pn?c=n.intersectTriangle(o,a,r,!0,s):c=n.intersectTriangle(r,a,o,e.side===Si,s),c===null)return null;Os.copy(s),Os.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Os);return u<t.near||u>t.far?null:{distance:u,point:Os.clone(),object:i}}function ks(i,e,t,n,r,a,o,s,c,u){i.getVertexPosition(s,Wr),i.getVertexPosition(c,jr),i.getVertexPosition(u,Xr);const d=_x(i,e,t,n,Wr,jr,Xr,Ns);if(d){r&&(Ds.fromBufferAttribute(r,s),Is.fromBufferAttribute(r,c),Us.fromBufferAttribute(r,u),d.uv=Yn.getInterpolation(Ns,Wr,jr,Xr,Ds,Is,Us,new tt)),a&&(Ds.fromBufferAttribute(a,s),Is.fromBufferAttribute(a,c),Us.fromBufferAttribute(a,u),d.uv1=Yn.getInterpolation(Ns,Wr,jr,Xr,Ds,Is,Us,new tt),d.uv2=d.uv1),o&&(Bu.fromBufferAttribute(o,s),zu.fromBufferAttribute(o,c),Gu.fromBufferAttribute(o,u),d.normal=Yn.getInterpolation(Ns,Wr,jr,Xr,Bu,zu,Gu,new re),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:c,c:u,normal:new re,materialIndex:0};Yn.getNormal(Wr,jr,Xr,h.normal),d.face=h}return d}class Yt extends Xi{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],u=[],d=[],h=[];let f=0,v=0;x("z","y","x",-1,-1,n,t,e,o,a,0),x("z","y","x",1,-1,n,t,-e,o,a,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new zi(u,3)),this.setAttribute("normal",new zi(d,3)),this.setAttribute("uv",new zi(h,2));function x(b,m,p,M,_,w,R,D,P,B,y){const T=w/P,ce=R/B,V=w/2,O=R/2,F=D/2,X=P+1,_e=B+1;let K=0,pe=0;const Ee=new re;for(let j=0;j<_e;j++){const G=j*ce-O;for(let $=0;$<X;$++){const Se=$*T-V;Ee[b]=Se*M,Ee[m]=G*_,Ee[p]=F,u.push(Ee.x,Ee.y,Ee.z),Ee[b]=0,Ee[m]=0,Ee[p]=D>0?1:-1,d.push(Ee.x,Ee.y,Ee.z),h.push($/P),h.push(1-j/B),K+=1}}for(let j=0;j<B;j++)for(let G=0;G<P;G++){const $=f+G+X*j,Se=f+G+X*(j+1),we=f+(G+1)+X*(j+1),De=f+(G+1)+X*j;c.push($,Se,De),c.push(Se,we,De),pe+=6}s.addGroup(v,pe,y),v+=pe,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ba(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mn(i){const e={};for(let t=0;t<i.length;t++){const n=ba(i[t]);for(const r in n)e[r]=n[r]}return e}function xx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qf(i){return i.getRenderTarget()===null?i.outputColorSpace:Mi}const $f={clone:ba,merge:Mn};var bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bx,this.fragmentShader=yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class eh extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends eh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,Yr=1;class Sx extends bn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Nn(qr,Yr,e,t);r.layers=this.layers,this.add(r);const a=new Nn(qr,Yr,e,t);a.layers=this.layers,this.add(a);const o=new Nn(qr,Yr,e,t);o.layers=this.layers,this.add(o);const s=new Nn(qr,Yr,e,t);s.layers=this.layers,this.add(s);const c=new Nn(qr,Yr,e,t);c.layers=this.layers,this.add(c);const u=new Nn(qr,Yr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,c]=t;for(const u of t)this.remove(u);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,c,u]=this.children,d=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(d),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class th extends xn{constructor(e,t,n,r,a,o,s,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:va,super(e,t,n,r,a,o,s,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mx extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Za("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wr?zt:Tr),this.texture=new th(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yt(5,5,5),a=new Vi({name:"CubemapFromEquirect",uniforms:ba(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Bi});a.uniforms.tEquirect.value=t;const o=new Ut(r,a),s=t.minFilter;return t.minFilter===os&&(t.minFilter=qn),new Sx(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const il=new re,Ex=new re,wx=new _t;class $i{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=il.subVectors(n,t).cross(Ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(il),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wx.getNormalMatrix(e),r=this.coplanarPoint(il).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new rc,Fs=new re;class ac{constructor(e=new $i,t=new $i,n=new $i,r=new $i,a=new $i,o=new $i){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki){const n=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],v=r[8],x=r[9],b=r[10],m=r[11],p=r[12],M=r[13],_=r[14],w=r[15];if(n[0].setComponents(c-a,f-u,m-v,w-p).normalize(),n[1].setComponents(c+a,f+u,m+v,w+p).normalize(),n[2].setComponents(c+o,f+d,m+x,w+M).normalize(),n[3].setComponents(c-o,f-d,m-x,w-M).normalize(),n[4].setComponents(c-s,f-h,m-b,w-_).normalize(),t===ki)n[5].setComponents(c+s,f+h,m+b,w+_).normalize();else if(t===oo)n[5].setComponents(s,h,b,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nh(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Tx(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,d){const h=u.array,f=u.usage,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,h,f),u.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function a(u,d,h){const f=d.array,v=d.updateRange;i.bindBuffer(h,u),v.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):i.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(i.deleteBuffer(d.buffer),n.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const f=n.get(u);(!f||f.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,r(u,d)):h.version<u.version&&(a(h.buffer,u,d),h.version=u.version)}return{get:o,remove:s,update:c}}class sc extends Xi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),c=Math.floor(r),u=s+1,d=c+1,h=e/s,f=t/c,v=[],x=[],b=[],m=[];for(let p=0;p<d;p++){const M=p*f-o;for(let _=0;_<u;_++){const w=_*h-a;x.push(w,-M,0),b.push(0,0,1),m.push(_/s),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<s;M++){const _=M+u*p,w=M+u*(p+1),R=M+1+u*(p+1),D=M+1+u*p;v.push(_,w,D),v.push(w,R,D)}this.setIndex(v),this.setAttribute("position",new zi(x,3)),this.setAttribute("normal",new zi(b,3)),this.setAttribute("uv",new zi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
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
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
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
#endif`,Bx=`#ifdef USE_BUMPMAP
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yx=`#define PI 3.141592653589793
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
} // validated`,Kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",nb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ib=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fb=`#ifdef USE_GRADIENTMAP
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
}`,hb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
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
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
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
#endif`,Eb=`struct PhysicalMaterial {
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
}`,wb=`
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nb=`#if defined( USE_POINTS_UV )
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
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
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
#endif`,zb=`#ifdef USE_MORPHTARGETS
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
#endif`,Gb=`#ifdef USE_MORPHTARGETS
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
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qb=`#ifdef USE_NORMALMAP
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
#endif`,Yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,D0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,G0=`#define LAMBERT
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
}`,H0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,W0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,X0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,Y0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,Z0=`#define TOON
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
}`,J0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,$0=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ty=`uniform vec3 color;
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
}`,ny=`uniform float rotation;
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
}`,iy=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Ax,alphahash_pars_fragment:Rx,alphamap_fragment:Cx,alphamap_pars_fragment:Px,alphatest_fragment:Lx,alphatest_pars_fragment:Dx,aomap_fragment:Ix,aomap_pars_fragment:Ux,begin_vertex:Nx,beginnormal_vertex:Ox,bsdfs:kx,iridescence_fragment:Fx,bumpmap_pars_fragment:Bx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Gx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Vx,color_fragment:Wx,color_pars_fragment:jx,color_pars_vertex:Xx,color_vertex:qx,common:Yx,cube_uv_reflection_fragment:Kx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Jx,displacementmap_vertex:Qx,emissivemap_fragment:$x,emissivemap_pars_fragment:eb,colorspace_fragment:tb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:rb,envmap_pars_fragment:ab,envmap_pars_vertex:sb,envmap_physical_pars_fragment:_b,envmap_vertex:ob,fog_vertex:lb,fog_pars_vertex:cb,fog_fragment:ub,fog_pars_fragment:db,gradientmap_pars_fragment:fb,lightmap_fragment:hb,lightmap_pars_fragment:pb,lights_lambert_fragment:mb,lights_lambert_pars_fragment:vb,lights_pars_begin:gb,lights_toon_fragment:xb,lights_toon_pars_fragment:bb,lights_phong_fragment:yb,lights_phong_pars_fragment:Sb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Eb,lights_fragment_begin:wb,lights_fragment_maps:Tb,lights_fragment_end:Ab,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:Pb,logdepthbuf_vertex:Lb,map_fragment:Db,map_pars_fragment:Ib,map_particle_fragment:Ub,map_particle_pars_fragment:Nb,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:kb,morphcolor_vertex:Fb,morphnormal_vertex:Bb,morphtarget_pars_vertex:zb,morphtarget_vertex:Gb,normal_fragment_begin:Hb,normal_fragment_maps:Vb,normal_pars_fragment:Wb,normal_pars_vertex:jb,normal_vertex:Xb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:Yb,clearcoat_normal_fragment_maps:Kb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:Jb,opaque_fragment:Qb,packing:$b,premultiplied_alpha_fragment:e0,project_vertex:t0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:o0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:h0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:v0,tonemapping_pars_fragment:g0,transmission_fragment:_0,transmission_pars_fragment:x0,uv_pars_fragment:b0,uv_pars_vertex:y0,uv_vertex:S0,worldpos_vertex:M0,background_vert:E0,background_frag:w0,backgroundCube_vert:T0,backgroundCube_frag:A0,cube_vert:R0,cube_frag:C0,depth_vert:P0,depth_frag:L0,distanceRGBA_vert:D0,distanceRGBA_frag:I0,equirect_vert:U0,equirect_frag:N0,linedashed_vert:O0,linedashed_frag:k0,meshbasic_vert:F0,meshbasic_frag:B0,meshlambert_vert:z0,meshlambert_frag:G0,meshmatcap_vert:H0,meshmatcap_frag:V0,meshnormal_vert:W0,meshnormal_frag:j0,meshphong_vert:X0,meshphong_frag:q0,meshphysical_vert:Y0,meshphysical_frag:K0,meshtoon_vert:Z0,meshtoon_frag:J0,points_vert:Q0,points_frag:$0,shadow_vert:ey,shadow_frag:ty,sprite_vert:ny,sprite_frag:iy},Ye={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},pi={basic:{uniforms:Mn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Mn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Mn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Mn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Mn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Mn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Mn([Ye.points,Ye.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Mn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Mn([Ye.common,Ye.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Mn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Mn([Ye.sprite,Ye.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Mn([Ye.common,Ye.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Mn([Ye.lights,Ye.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};pi.physical={uniforms:Mn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Bs={r:0,b:0,g:0};function ry(i,e,t,n,r,a,o){const s=new Rt(0);let c=a===!0?0:1,u,d,h=null,f=0,v=null;function x(m,p){let M=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?b(s,c):_&&_.isColor&&(b(_,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===vo)?(d===void 0&&(d=new Ut(new Yt(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:ba(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=_.colorSpace!==zt,(h!==_||f!==_.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,h=_,f=_.version,v=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Ut(new sc(2,2),new Vi({name:"BackgroundMaterial",uniforms:ba(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=_.colorSpace!==zt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,v=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function b(m,p){m.getRGB(Bs,Qf(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(m,p=1){s.set(m),c=p,b(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,b(s,c)},render:x}}function ay(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,s={},c=m(null);let u=c,d=!1;function h(F,X,_e,K,pe){let Ee=!1;if(o){const j=b(K,_e,X);u!==j&&(u=j,v(u.object)),Ee=p(F,K,_e,pe),Ee&&M(F,K,_e,pe)}else{const j=X.wireframe===!0;(u.geometry!==K.id||u.program!==_e.id||u.wireframe!==j)&&(u.geometry=K.id,u.program=_e.id,u.wireframe=j,Ee=!0)}pe!==null&&t.update(pe,i.ELEMENT_ARRAY_BUFFER),(Ee||d)&&(d=!1,B(F,X,_e,K),pe!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function v(F){return n.isWebGL2?i.bindVertexArray(F):a.bindVertexArrayOES(F)}function x(F){return n.isWebGL2?i.deleteVertexArray(F):a.deleteVertexArrayOES(F)}function b(F,X,_e){const K=_e.wireframe===!0;let pe=s[F.id];pe===void 0&&(pe={},s[F.id]=pe);let Ee=pe[X.id];Ee===void 0&&(Ee={},pe[X.id]=Ee);let j=Ee[K];return j===void 0&&(j=m(f()),Ee[K]=j),j}function m(F){const X=[],_e=[],K=[];for(let pe=0;pe<r;pe++)X[pe]=0,_e[pe]=0,K[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:_e,attributeDivisors:K,object:F,attributes:{},index:null}}function p(F,X,_e,K){const pe=u.attributes,Ee=X.attributes;let j=0;const G=_e.getAttributes();for(const $ in G)if(G[$].location>=0){const we=pe[$];let De=Ee[$];if(De===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(De=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(De=F.instanceColor)),we===void 0||we.attribute!==De||De&&we.data!==De.data)return!0;j++}return u.attributesNum!==j||u.index!==K}function M(F,X,_e,K){const pe={},Ee=X.attributes;let j=0;const G=_e.getAttributes();for(const $ in G)if(G[$].location>=0){let we=Ee[$];we===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(we=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(we=F.instanceColor));const De={};De.attribute=we,we&&we.data&&(De.data=we.data),pe[$]=De,j++}u.attributes=pe,u.attributesNum=j,u.index=K}function _(){const F=u.newAttributes;for(let X=0,_e=F.length;X<_e;X++)F[X]=0}function w(F){R(F,0)}function R(F,X){const _e=u.newAttributes,K=u.enabledAttributes,pe=u.attributeDivisors;_e[F]=1,K[F]===0&&(i.enableVertexAttribArray(F),K[F]=1),pe[F]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,X),pe[F]=X)}function D(){const F=u.newAttributes,X=u.enabledAttributes;for(let _e=0,K=X.length;_e<K;_e++)X[_e]!==F[_e]&&(i.disableVertexAttribArray(_e),X[_e]=0)}function P(F,X,_e,K,pe,Ee,j){j===!0?i.vertexAttribIPointer(F,X,_e,pe,Ee):i.vertexAttribPointer(F,X,_e,K,pe,Ee)}function B(F,X,_e,K){if(n.isWebGL2===!1&&(F.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const pe=K.attributes,Ee=_e.getAttributes(),j=X.defaultAttributeValues;for(const G in Ee){const $=Ee[G];if($.location>=0){let Se=pe[G];if(Se===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(Se=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(Se=F.instanceColor)),Se!==void 0){const we=Se.normalized,De=Se.itemSize,Be=t.get(Se);if(Be===void 0)continue;const Xe=Be.buffer,Ve=Be.type,$e=Be.bytesPerElement,dt=n.isWebGL2===!0&&(Ve===i.INT||Ve===i.UNSIGNED_INT||Se.gpuType===Uf);if(Se.isInterleavedBufferAttribute){const Ke=Se.data,ee=Ke.stride,lt=Se.offset;if(Ke.isInstancedInterleavedBuffer){for(let We=0;We<$.locationSize;We++)R($.location+We,Ke.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let We=0;We<$.locationSize;We++)w($.location+We);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let We=0;We<$.locationSize;We++)P($.location+We,De/$.locationSize,Ve,we,ee*$e,(lt+De/$.locationSize*We)*$e,dt)}else{if(Se.isInstancedBufferAttribute){for(let Ke=0;Ke<$.locationSize;Ke++)R($.location+Ke,Se.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<$.locationSize;Ke++)w($.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Ke=0;Ke<$.locationSize;Ke++)P($.location+Ke,De/$.locationSize,Ve,we,De*$e,De/$.locationSize*Ke*$e,dt)}}else if(j!==void 0){const we=j[G];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv($.location,we);break;case 3:i.vertexAttrib3fv($.location,we);break;case 4:i.vertexAttrib4fv($.location,we);break;default:i.vertexAttrib1fv($.location,we)}}}}D()}function y(){V();for(const F in s){const X=s[F];for(const _e in X){const K=X[_e];for(const pe in K)x(K[pe].object),delete K[pe];delete X[_e]}delete s[F]}}function T(F){if(s[F.id]===void 0)return;const X=s[F.id];for(const _e in X){const K=X[_e];for(const pe in K)x(K[pe].object),delete K[pe];delete X[_e]}delete s[F.id]}function ce(F){for(const X in s){const _e=s[X];if(_e[F.id]===void 0)continue;const K=_e[F.id];for(const pe in K)x(K[pe].object),delete K[pe];delete _e[F.id]}}function V(){O(),d=!0,u!==c&&(u=c,v(u.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:V,resetDefaultState:O,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:ce,initAttributes:_,enableAttribute:w,disableUnusedAttributes:D}}function sy(i,e,t,n){const r=n.isWebGL2;let a;function o(u){a=u}function s(u,d){i.drawArrays(a,u,d),t.update(d,a,1)}function c(u,d,h){if(h===0)return;let f,v;if(r)f=i,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](a,u,d,h),t.update(d,a,h)}this.setMode=o,this.render=s,this.renderInstances=c}function oy(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const c=a(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,w=o||e.has("OES_texture_float"),R=_&&w,D=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:x,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:R,maxSamples:D}}function ly(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new $i,s=new _t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const v=h.length!==0||f||n!==0||r;return r=f,n=h.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,v){const x=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||x===null||x.length===0||a&&!m)a?d(null):u();else{const M=a?0:n,_=M*4;let w=p.clippingState||null;c.value=w,w=d(x,f,_,v);for(let R=0;R!==_;++R)w[R]=t[R];p.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,v,x){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=c.value,x!==!0||m===null){const p=v+b*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,w=v;_!==b;++_,w+=4)o.copy(h[_]).applyMatrix4(M,s),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function cy(i){let e=new WeakMap;function t(o,s){return s===so?o.mapping=va:s===Rl&&(o.mapping=ga),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===so||s===Rl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Mx(c.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class ih extends eh{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ta=4,Hu=[.125,.215,.35,.446,.526,.582],vr=20,rl=new ih,Vu=new Rt;let al=null;const pr=(1+Math.sqrt(5))/2,Kr=1/pr,Wu=[new re(1,1,1),new re(-1,1,1),new re(1,1,-1),new re(-1,1,-1),new re(0,pr,Kr),new re(0,pr,-Kr),new re(Kr,0,pr),new re(-Kr,0,pr),new re(pr,Kr,0),new re(-pr,Kr,0)];class ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){al=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al),e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===va||e.mapping===ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:_a,format:ii,colorSpace:Mi,depthBuffer:!1},r=Xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(a)),this._blurMaterial=dy(a,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,rl)}_sceneToCubeUV(e,t,n,r){const s=new Nn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Vu),d.toneMapping=nr,d.autoClear=!1;const v=new Kf({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),x=new Ut(new Yt,v);let b=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,b=!0):(v.color.copy(Vu),b=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(s.up.set(0,c[p],0),s.lookAt(u[p],0,0)):M===1?(s.up.set(0,0,c[p]),s.lookAt(0,u[p],0)):(s.up.set(0,c[p],0),s.lookAt(0,0,u[p]));const _=this._cubeSize;zs(r,M*_,p>2?_:0,_,_),d.setRenderTarget(r),b&&d.render(x,s),d.render(e,s)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===va||e.mapping===ga;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;zs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,rl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wu[(r-1)%Wu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ut(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*vr-1),b=a/x,m=isFinite(a)?1+Math.floor(d*b):vr;m>vr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const p=[];let M=0;for(let P=0;P<vr;++P){const B=P/b,y=Math.exp(-B*B/2);p.push(y),P===0?M+=y:P<m&&(M+=2*y)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;const w=this._sizeLods[r],R=3*w*(r>_-ta?r-_+ta:0),D=4*(this._cubeSize-w);zs(t,R,D,3*w,2*w),c.setRenderTarget(t),c.render(h,rl)}}function uy(i){const e=[],t=[],n=[];let r=i;const a=i-ta+1+Hu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>i-ta?c=Hu[o-i+ta-1]:o===0&&(c=0),n.push(c);const u=1/(s-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,x=6,b=3,m=2,p=1,M=new Float32Array(b*x*v),_=new Float32Array(m*x*v),w=new Float32Array(p*x*v);for(let D=0;D<v;D++){const P=D%3*2/3-1,B=D>2?0:-1,y=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];M.set(y,b*x*D),_.set(f,m*x*D);const T=[D,D,D,D,D,D];w.set(T,p*x*D)}const R=new Xi;R.setAttribute("position",new ci(M,b)),R.setAttribute("uv",new ci(_,m)),R.setAttribute("faceIndex",new ci(w,p)),e.push(R),r>ta&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xu(i,e,t){const n=new Hi(i,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dy(i,e,t){const n=new Float32Array(vr),r=new re(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function qu(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Yu(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function fy(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,u=c===so||c===Rl,d=c===va||c===ga;if(u||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new ju(i)),h=u?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(u&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new ju(i));const f=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let c=0;const u=6;for(let d=0;d<u;d++)s[d]!==void 0&&c++;return c===u}function a(s){const c=s.target;c.removeEventListener("dispose",a);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function py(i,e,t,n){const r={},a=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const b=f.morphAttributes[x];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}f.removeEventListener("dispose",o),delete r[f.id];const v=a.get(f);v&&(e.remove(v),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const x in f)e.update(f[x],i.ARRAY_BUFFER);const v=h.morphAttributes;for(const x in v){const b=v[x];for(let m=0,p=b.length;m<p;m++)e.update(b[m],i.ARRAY_BUFFER)}}function u(h){const f=[],v=h.index,x=h.attributes.position;let b=0;if(v!==null){const M=v.array;b=v.version;for(let _=0,w=M.length;_<w;_+=3){const R=M[_+0],D=M[_+1],P=M[_+2];f.push(R,D,D,P,P,R)}}else if(x!==void 0){const M=x.array;b=x.version;for(let _=0,w=M.length/3-1;_<w;_+=3){const R=_+0,D=_+1,P=_+2;f.push(R,D,D,P,P,R)}}else return;const m=new(Hf(f)?Jf:Zf)(f,1);m.version=b;const p=a.get(h);p&&e.remove(p),a.set(h,m)}function d(h){const f=a.get(h);if(f){const v=h.index;v!==null&&f.version<v.version&&u(h)}else u(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function my(i,e,t,n){const r=n.isWebGL2;let a;function o(f){a=f}let s,c;function u(f){s=f.type,c=f.bytesPerElement}function d(f,v){i.drawElements(a,v,s,f*c),t.update(v,a,1)}function h(f,v,x){if(x===0)return;let b,m;if(r)b=i,m="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[m](a,v,s,f*c,x),t.update(v,a,x)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h}function vy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gy(i,e){return i[0]-e[0]}function _y(i,e){return Math.abs(e[1])-Math.abs(i[1])}function xy(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,o=new Gt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function c(u,d,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,b=x!==void 0?x.length:0;let m=a.get(d);if(m===void 0||m.count!==b){let X=function(){O.dispose(),a.delete(d),d.removeEventListener("dispose",X)};var v=X;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,D=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let y=0;_===!0&&(y=1),w===!0&&(y=2),R===!0&&(y=3);let T=d.attributes.position.count*y,ce=1;T>e.maxTextureSize&&(ce=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const V=new Float32Array(T*ce*4*b),O=new jf(V,T,ce,b);O.type=Oi,O.needsUpdate=!0;const F=y*4;for(let _e=0;_e<b;_e++){const K=D[_e],pe=P[_e],Ee=B[_e],j=T*ce*4*_e;for(let G=0;G<K.count;G++){const $=G*F;_===!0&&(o.fromBufferAttribute(K,G),V[j+$+0]=o.x,V[j+$+1]=o.y,V[j+$+2]=o.z,V[j+$+3]=0),w===!0&&(o.fromBufferAttribute(pe,G),V[j+$+4]=o.x,V[j+$+5]=o.y,V[j+$+6]=o.z,V[j+$+7]=0),R===!0&&(o.fromBufferAttribute(Ee,G),V[j+$+8]=o.x,V[j+$+9]=o.y,V[j+$+10]=o.z,V[j+$+11]=Ee.itemSize===4?o.w:1)}}m={count:b,texture:O,size:new tt(T,ce)},a.set(d,m),d.addEventListener("dispose",X)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];const M=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const x=f===void 0?0:f.length;let b=n[d.id];if(b===void 0||b.length!==x){b=[];for(let w=0;w<x;w++)b[w]=[w,0];n[d.id]=b}for(let w=0;w<x;w++){const R=b[w];R[0]=w,R[1]=f[w]}b.sort(_y);for(let w=0;w<8;w++)w<x&&b[w][1]?(s[w][0]=b[w][0],s[w][1]=b[w][1]):(s[w][0]=Number.MAX_SAFE_INTEGER,s[w][1]=0);s.sort(gy);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let M=0;for(let w=0;w<8;w++){const R=s[w],D=R[0],P=R[1];D!==Number.MAX_SAFE_INTEGER&&P?(m&&d.getAttribute("morphTarget"+w)!==m[D]&&d.setAttribute("morphTarget"+w,m[D]),p&&d.getAttribute("morphNormal"+w)!==p[D]&&d.setAttribute("morphNormal"+w,p[D]),r[w]=P,M+=P):(m&&d.hasAttribute("morphTarget"+w)===!0&&d.deleteAttribute("morphTarget"+w),p&&d.hasAttribute("morphNormal"+w)===!0&&d.deleteAttribute("morphNormal"+w),r[w]=0)}const _=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function by(i,e,t,n){let r=new WeakMap;function a(c){const u=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const rh=new xn,ah=new jf,sh=new ox,oh=new th,Ku=[],Zu=[],Ju=new Float32Array(16),Qu=new Float32Array(9),$u=new Float32Array(4);function Ta(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ku[r];if(a===void 0&&(a=new Float32Array(r),Ku[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function on(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xo(i,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function My(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function Ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function wy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),ln(t,n)}}function Ty(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),ln(t,n)}}function Ay(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(on(t,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),ln(t,n)}}function Ry(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function Py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function Ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function Dy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Iy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function Uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function Ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function Oy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||rh,r)}function ky(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||sh,r)}function Fy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||oh,r)}function By(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ah,r)}function zy(i){switch(i){case 5126:return yy;case 35664:return Sy;case 35665:return My;case 35666:return Ey;case 35674:return wy;case 35675:return Ty;case 35676:return Ay;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return Py;case 35669:case 35673:return Ly;case 5125:return Dy;case 36294:return Iy;case 36295:return Uy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return By}}function Gy(i,e){i.uniform1fv(this.addr,e)}function Hy(i,e){const t=Ta(e,this.size,2);i.uniform2fv(this.addr,t)}function Vy(i,e){const t=Ta(e,this.size,3);i.uniform3fv(this.addr,t)}function Wy(i,e){const t=Ta(e,this.size,4);i.uniform4fv(this.addr,t)}function jy(i,e){const t=Ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xy(i,e){const t=Ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qy(i,e){const t=Ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yy(i,e){i.uniform1iv(this.addr,e)}function Ky(i,e){i.uniform2iv(this.addr,e)}function Zy(i,e){i.uniform3iv(this.addr,e)}function Jy(i,e){i.uniform4iv(this.addr,e)}function Qy(i,e){i.uniform1uiv(this.addr,e)}function $y(i,e){i.uniform2uiv(this.addr,e)}function e1(i,e){i.uniform3uiv(this.addr,e)}function t1(i,e){i.uniform4uiv(this.addr,e)}function n1(i,e,t){const n=this.cache,r=e.length,a=xo(t,r);on(n,a)||(i.uniform1iv(this.addr,a),ln(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rh,a[o])}function i1(i,e,t){const n=this.cache,r=e.length,a=xo(t,r);on(n,a)||(i.uniform1iv(this.addr,a),ln(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sh,a[o])}function r1(i,e,t){const n=this.cache,r=e.length,a=xo(t,r);on(n,a)||(i.uniform1iv(this.addr,a),ln(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||oh,a[o])}function a1(i,e,t){const n=this.cache,r=e.length,a=xo(t,r);on(n,a)||(i.uniform1iv(this.addr,a),ln(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ah,a[o])}function s1(i){switch(i){case 5126:return Gy;case 35664:return Hy;case 35665:return Vy;case 35666:return Wy;case 35674:return jy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return Ky;case 35668:case 35672:return Zy;case 35669:case 35673:return Jy;case 5125:return Qy;case 36294:return $y;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return a1}}class o1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=zy(t.type)}}class l1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=s1(t.type)}}class c1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function ed(i,e){i.seq.push(e),i.map[e.id]=e}function u1(i,e,t){const n=i.name,r=n.length;for(sl.lastIndex=0;;){const a=sl.exec(n),o=sl.lastIndex;let s=a[1];const c=a[2]==="]",u=a[3];if(c&&(s=s|0),u===void 0||u==="["&&o+2===r){ed(t,u===void 0?new o1(s,i,e):new l1(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new c1(s),ed(t,h)),t=h}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);u1(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function td(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let d1=0;function f1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function h1(i){switch(i){case Mi:return["Linear","( value )"];case zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function nd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+f1(i.getShaderSource(e),o)}else return r}function p1(i,e){const t=h1(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function m1(i,e){let t;switch(e){case S_:t="Linear";break;case M_:t="Reinhard";break;case E_:t="OptimizedCineon";break;case w_:t="ACESFilmic";break;case T_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function v1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ja).join(`
`)}function g1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function ja(i){return i!==""}function id(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(i){return i.replace(x1,y1)}const b1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function y1(i,e){let t=ht[e];if(t===void 0){const n=b1.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nl(t)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(i){return i.replace(S1,M1)}function M1(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function sd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function w1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case va:case ga:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ga&&(e="ENVMAP_MODE_REFRACTION"),e}function A1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Df:e="ENVMAP_BLENDING_MULTIPLY";break;case b_:e="ENVMAP_BLENDING_MIX";break;case y_:e="ENVMAP_BLENDING_ADD";break}return e}function R1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function C1(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=E1(t),u=w1(t),d=T1(t),h=A1(t),f=R1(t),v=t.isWebGL2?"":v1(t),x=g1(a),b=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ja).join(`
`),m.length>0&&(m+=`
`),p=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ja).join(`
`),p.length>0&&(p+=`
`)):(m=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),p=[v,sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?ht.tonemapping_pars_fragment:"",t.toneMapping!==nr?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,p1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),o=Nl(o),o=id(o,t),o=rd(o,t),s=Nl(s),s=id(s,t),s=rd(s,t),o=ad(o),s=ad(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+o,w=M+p+s,R=td(r,r.VERTEX_SHADER,_),D=td(r,r.FRAGMENT_SHADER,w);if(r.attachShader(b,R),r.attachShader(b,D),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),i.debug.checkShaderErrors){const y=r.getProgramInfoLog(b).trim(),T=r.getShaderInfoLog(R).trim(),ce=r.getShaderInfoLog(D).trim();let V=!0,O=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,R,D);else{const F=nd(r,R,"vertex"),X=nd(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+F+`
`+X)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(T===""||ce==="")&&(O=!1);O&&(this.diagnostics={runnable:V,programLog:y,vertexShader:{log:T,prefix:m},fragmentShader:{log:ce,prefix:p}})}r.deleteShader(R),r.deleteShader(D);let P;this.getUniforms=function(){return P===void 0&&(P=new Js(r,b)),P};let B;return this.getAttributes=function(){return B===void 0&&(B=_1(r,b)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=D,this}let P1=0;class L1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new D1(e),t.set(e,n)),n}}class D1{constructor(e){this.id=P1++,this.code=e,this.usedTimes=0}}function I1(i,e,t,n,r,a,o){const s=new qf,c=new L1,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return y===0?"uv":`uv${y}`}function m(y,T,ce,V,O){const F=V.fog,X=O.geometry,_e=y.isMeshStandardMaterial?V.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||_e),pe=K&&K.mapping===vo?K.image.height:null,Ee=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const j=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,G=j!==void 0?j.length:0;let $=0;X.morphAttributes.position!==void 0&&($=1),X.morphAttributes.normal!==void 0&&($=2),X.morphAttributes.color!==void 0&&($=3);let Se,we,De,Be;if(Ee){const ct=pi[Ee];Se=ct.vertexShader,we=ct.fragmentShader}else Se=y.vertexShader,we=y.fragmentShader,c.update(y),De=c.getVertexShaderID(y),Be=c.getFragmentShaderID(y);const Xe=i.getRenderTarget(),Ve=O.isInstancedMesh===!0,$e=!!y.map,dt=!!y.matcap,Ke=!!K,ee=!!y.aoMap,lt=!!y.lightMap,We=!!y.bumpMap,k=!!y.normalMap,le=!!y.displacementMap,Ne=!!y.emissiveMap,ve=!!y.metalnessMap,Ae=!!y.roughnessMap,he=y.anisotropy>0,Fe=y.clearcoat>0,Ie=y.iridescence>0,A=y.sheen>0,S=y.transmission>0,U=he&&!!y.anisotropyMap,Z=Fe&&!!y.clearcoatMap,J=Fe&&!!y.clearcoatNormalMap,xe=Fe&&!!y.clearcoatRoughnessMap,Oe=Ie&&!!y.iridescenceMap,Te=Ie&&!!y.iridescenceThicknessMap,Q=A&&!!y.sheenColorMap,L=A&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ge=!!y.specularColorMap,H=!!y.specularIntensityMap,oe=S&&!!y.transmissionMap,Ce=S&&!!y.thicknessMap,Ge=!!y.gradientMap,N=!!y.alphaMap,Le=y.alphaTest>0,ue=!!y.alphaHash,Re=!!y.extensions,Me=!!X.attributes.uv1,Ue=!!X.attributes.uv2,qe=!!X.attributes.uv3;let rt=nr;return y.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(rt=i.toneMapping),{isWebGL2:d,shaderID:Ee,shaderType:y.type,shaderName:y.name,vertexShader:Se,fragmentShader:we,defines:y.defines,customVertexShaderID:De,customFragmentShaderID:Be,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,instancing:Ve,instancingColor:Ve&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Xe===null?i.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:Mi,map:$e,matcap:dt,envMap:Ke,envMapMode:Ke&&K.mapping,envMapCubeUVHeight:pe,aoMap:ee,lightMap:lt,bumpMap:We,normalMap:k,displacementMap:f&&le,emissiveMap:Ne,normalMapObjectSpace:k&&y.normalMapType===B_,normalMapTangentSpace:k&&y.normalMapType===Gf,metalnessMap:ve,roughnessMap:Ae,anisotropy:he,anisotropyMap:U,clearcoat:Fe,clearcoatMap:Z,clearcoatNormalMap:J,clearcoatRoughnessMap:xe,iridescence:Ie,iridescenceMap:Oe,iridescenceThicknessMap:Te,sheen:A,sheenColorMap:Q,sheenRoughnessMap:L,specularMap:fe,specularColorMap:ge,specularIntensityMap:H,transmission:S,transmissionMap:oe,thicknessMap:Ce,gradientMap:Ge,opaque:y.transparent===!1&&y.blending===oa,alphaMap:N,alphaTest:Le,alphaHash:ue,combine:y.combine,mapUv:$e&&b(y.map.channel),aoMapUv:ee&&b(y.aoMap.channel),lightMapUv:lt&&b(y.lightMap.channel),bumpMapUv:We&&b(y.bumpMap.channel),normalMapUv:k&&b(y.normalMap.channel),displacementMapUv:le&&b(y.displacementMap.channel),emissiveMapUv:Ne&&b(y.emissiveMap.channel),metalnessMapUv:ve&&b(y.metalnessMap.channel),roughnessMapUv:Ae&&b(y.roughnessMap.channel),anisotropyMapUv:U&&b(y.anisotropyMap.channel),clearcoatMapUv:Z&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:J&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:L&&b(y.sheenRoughnessMap.channel),specularMapUv:fe&&b(y.specularMap.channel),specularColorMapUv:ge&&b(y.specularColorMap.channel),specularIntensityMapUv:H&&b(y.specularIntensityMap.channel),transmissionMapUv:oe&&b(y.transmissionMap.channel),thicknessMapUv:Ce&&b(y.thicknessMap.channel),alphaMapUv:N&&b(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(k||he),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:Ue,vertexUv3s:qe,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&($e||N),fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:$,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&ce.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&y.map.colorSpace===zt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===Pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Re&&y.extensions.derivatives===!0,extensionFragDepth:Re&&y.extensions.fragDepth===!0,extensionDrawBuffers:Re&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const ce in y.defines)T.push(ce),T.push(y.defines[ce]);return y.isRawShaderMaterial===!1&&(M(T,y),_(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function M(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),y.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),y.push(s.mask)}function w(y){const T=x[y.type];let ce;if(T){const V=pi[T];ce=$f.clone(V.uniforms)}else ce=y.uniforms;return ce}function R(y,T){let ce;for(let V=0,O=u.length;V<O;V++){const F=u[V];if(F.cacheKey===T){ce=F,++ce.usedTimes;break}}return ce===void 0&&(ce=new C1(i,T,y,a),u.push(ce)),ce}function D(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function P(y){c.remove(y)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:R,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:B}}function U1(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function N1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ld(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,v,x,b,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:v,groupOrder:x,renderOrder:h.renderOrder,z:b,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=v,p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=b,p.group=m),e++,p}function s(h,f,v,x,b,m){const p=o(h,f,v,x,b,m);v.transmission>0?n.push(p):v.transparent===!0?r.push(p):t.push(p)}function c(h,f,v,x,b,m){const p=o(h,f,v,x,b,m);v.transmission>0?n.unshift(p):v.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,f){t.length>1&&t.sort(h||N1),n.length>1&&n.sort(f||od),r.length>1&&r.sort(f||od)}function d(){for(let h=e,f=i.length;h<f;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:c,finish:d,sort:u}}function O1(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new ld,i.set(n,[o])):r>=a.length?(o=new ld,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function k1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Rt};break;case"SpotLight":t={position:new re,direction:new re,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new re,halfWidth:new re,halfHeight:new re};break}return i[e.id]=t,t}}}function F1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let B1=0;function z1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function G1(i,e){const t=new k1,n=F1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new re);const a=new re,o=new Zt,s=new Zt;function c(d,h){let f=0,v=0,x=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let b=0,m=0,p=0,M=0,_=0,w=0,R=0,D=0,P=0,B=0;d.sort(z1);const y=h===!0?Math.PI:1;for(let ce=0,V=d.length;ce<V;ce++){const O=d[ce],F=O.color,X=O.intensity,_e=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=F.r*X*y,v+=F.g*X*y,x+=F.b*X*y;else if(O.isLightProbe)for(let pe=0;pe<9;pe++)r.probe[pe].addScaledVector(O.sh.coefficients[pe],X);else if(O.isDirectionalLight){const pe=t.get(O);if(pe.color.copy(O.color).multiplyScalar(O.intensity*y),O.castShadow){const Ee=O.shadow,j=n.get(O);j.shadowBias=Ee.bias,j.shadowNormalBias=Ee.normalBias,j.shadowRadius=Ee.radius,j.shadowMapSize=Ee.mapSize,r.directionalShadow[b]=j,r.directionalShadowMap[b]=K,r.directionalShadowMatrix[b]=O.shadow.matrix,w++}r.directional[b]=pe,b++}else if(O.isSpotLight){const pe=t.get(O);pe.position.setFromMatrixPosition(O.matrixWorld),pe.color.copy(F).multiplyScalar(X*y),pe.distance=_e,pe.coneCos=Math.cos(O.angle),pe.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),pe.decay=O.decay,r.spot[p]=pe;const Ee=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,Ee.updateMatrices(O),O.castShadow&&B++),r.spotLightMatrix[p]=Ee.matrix,O.castShadow){const j=n.get(O);j.shadowBias=Ee.bias,j.shadowNormalBias=Ee.normalBias,j.shadowRadius=Ee.radius,j.shadowMapSize=Ee.mapSize,r.spotShadow[p]=j,r.spotShadowMap[p]=K,D++}p++}else if(O.isRectAreaLight){const pe=t.get(O);pe.color.copy(F).multiplyScalar(X),pe.halfWidth.set(O.width*.5,0,0),pe.halfHeight.set(0,O.height*.5,0),r.rectArea[M]=pe,M++}else if(O.isPointLight){const pe=t.get(O);if(pe.color.copy(O.color).multiplyScalar(O.intensity*y),pe.distance=O.distance,pe.decay=O.decay,O.castShadow){const Ee=O.shadow,j=n.get(O);j.shadowBias=Ee.bias,j.shadowNormalBias=Ee.normalBias,j.shadowRadius=Ee.radius,j.shadowMapSize=Ee.mapSize,j.shadowCameraNear=Ee.camera.near,j.shadowCameraFar=Ee.camera.far,r.pointShadow[m]=j,r.pointShadowMap[m]=K,r.pointShadowMatrix[m]=O.shadow.matrix,R++}r.point[m]=pe,m++}else if(O.isHemisphereLight){const pe=t.get(O);pe.skyColor.copy(O.color).multiplyScalar(X*y),pe.groundColor.copy(O.groundColor).multiplyScalar(X*y),r.hemi[_]=pe,_++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ye.LTC_FLOAT_1,r.rectAreaLTC2=Ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ye.LTC_HALF_1,r.rectAreaLTC2=Ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==b||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==M||T.hemiLength!==_||T.numDirectionalShadows!==w||T.numPointShadows!==R||T.numSpotShadows!==D||T.numSpotMaps!==P)&&(r.directional.length=b,r.spot.length=p,r.rectArea.length=M,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=D+P-B,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=B,T.directionalLength=b,T.pointLength=m,T.spotLength=p,T.rectAreaLength=M,T.hemiLength=_,T.numDirectionalShadows=w,T.numPointShadows=R,T.numSpotShadows=D,T.numSpotMaps=P,r.version=B1++)}function u(d,h){let f=0,v=0,x=0,b=0,m=0;const p=h.matrixWorldInverse;for(let M=0,_=d.length;M<_;M++){const w=d[M];if(w.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(p),f++}else if(w.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(p),x++}else if(w.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),s.identity(),o.copy(w.matrixWorld),o.premultiply(p),s.extractRotation(o),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(s),R.halfHeight.applyMatrix4(s),b++}else if(w.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),v++}else if(w.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:u,state:r}}function cd(i,e){const t=new G1(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function o(h){n.push(h)}function s(h){r.push(h)}function c(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:s}}function H1(i,e){let t=new WeakMap;function n(a,o=0){const s=t.get(a);let c;return s===void 0?(c=new cd(i,e),t.set(a,[c])):o>=s.length?(c=new cd(i,e),s.push(c)):c=s[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class V1 extends wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W1 extends wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const j1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X1=`uniform sampler2D shadow_pass;
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
}`;function q1(i,e,t){let n=new ac;const r=new tt,a=new tt,o=new Gt,s=new V1({depthPacking:F_}),c=new W1,u={},d=t.maxTextureSize,h={[Si]:Pn,[Pn]:Si,[Kn]:Kn},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:j1,fragmentShader:X1}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const x=new Xi;x.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ut(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let p=this.type;this.render=function(R,D,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const B=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending(Bi),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const V=p!==Di&&this.type===Di,O=p===Di&&this.type!==Di;for(let F=0,X=R.length;F<X;F++){const _e=R[F],K=_e.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const pe=K.getFrameExtents();if(r.multiply(pe),a.copy(K.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/pe.x),r.x=a.x*pe.x,K.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/pe.y),r.y=a.y*pe.y,K.mapSize.y=a.y)),K.map===null||V===!0||O===!0){const j=this.type!==Di?{minFilter:Vt,magFilter:Vt}:{};K.map!==null&&K.map.dispose(),K.map=new Hi(r.x,r.y,j),K.map.texture.name=_e.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const Ee=K.getViewportCount();for(let j=0;j<Ee;j++){const G=K.getViewport(j);o.set(a.x*G.x,a.y*G.y,a.x*G.z,a.y*G.w),ce.viewport(o),K.updateMatrices(_e,j),n=K.getFrustum(),w(D,P,K.camera,_e,this.type)}K.isPointLightShadow!==!0&&this.type===Di&&M(K,P),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(B,y,T)};function M(R,D){const P=e.update(b);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,v.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Hi(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(D,null,P,f,b,null),v.uniforms.shadow_pass.value=R.mapPass.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(D,null,P,v,b,null)}function _(R,D,P,B){let y=null;const T=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)y=T;else if(y=P.isPointLight===!0?c:s,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ce=y.uuid,V=D.uuid;let O=u[ce];O===void 0&&(O={},u[ce]=O);let F=O[V];F===void 0&&(F=y.clone(),O[V]=F),y=F}if(y.visible=D.visible,y.wireframe=D.wireframe,B===Di?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:h[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const ce=i.properties.get(y);ce.light=P}return y}function w(R,D,P,B,y){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Di)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const V=e.update(R),O=R.material;if(Array.isArray(O)){const F=V.groups;for(let X=0,_e=F.length;X<_e;X++){const K=F[X],pe=O[K.materialIndex];if(pe&&pe.visible){const Ee=_(R,pe,B,y);i.renderBufferDirect(P,null,V,Ee,R,K)}}}else if(O.visible){const F=_(R,O,B,y);i.renderBufferDirect(P,null,V,F,R,null)}}const ce=R.children;for(let V=0,O=ce.length;V<O;V++)w(ce[V],D,P,B,y)}}function Y1(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const Le=new Gt;let ue=null;const Re=new Gt(0,0,0,0);return{setMask:function(Me){ue!==Me&&!N&&(i.colorMask(Me,Me,Me,Me),ue=Me)},setLocked:function(Me){N=Me},setClear:function(Me,Ue,qe,rt,xt){xt===!0&&(Me*=rt,Ue*=rt,qe*=rt),Le.set(Me,Ue,qe,rt),Re.equals(Le)===!1&&(i.clearColor(Me,Ue,qe,rt),Re.copy(Le))},reset:function(){N=!1,ue=null,Re.set(-1,0,0,0)}}}function a(){let N=!1,Le=null,ue=null,Re=null;return{setTest:function(Me){Me?Xe(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(Me){Le!==Me&&!N&&(i.depthMask(Me),Le=Me)},setFunc:function(Me){if(ue!==Me){switch(Me){case h_:i.depthFunc(i.NEVER);break;case p_:i.depthFunc(i.ALWAYS);break;case m_:i.depthFunc(i.LESS);break;case Al:i.depthFunc(i.LEQUAL);break;case v_:i.depthFunc(i.EQUAL);break;case g_:i.depthFunc(i.GEQUAL);break;case __:i.depthFunc(i.GREATER);break;case x_:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Me}},setLocked:function(Me){N=Me},setClear:function(Me){Re!==Me&&(i.clearDepth(Me),Re=Me)},reset:function(){N=!1,Le=null,ue=null,Re=null}}}function o(){let N=!1,Le=null,ue=null,Re=null,Me=null,Ue=null,qe=null,rt=null,xt=null;return{setTest:function(ct){N||(ct?Xe(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(ct){Le!==ct&&!N&&(i.stencilMask(ct),Le=ct)},setFunc:function(ct,Mt,mt){(ue!==ct||Re!==Mt||Me!==mt)&&(i.stencilFunc(ct,Mt,mt),ue=ct,Re=Mt,Me=mt)},setOp:function(ct,Mt,mt){(Ue!==ct||qe!==Mt||rt!==mt)&&(i.stencilOp(ct,Mt,mt),Ue=ct,qe=Mt,rt=mt)},setLocked:function(ct){N=ct},setClear:function(ct){xt!==ct&&(i.clearStencil(ct),xt=ct)},reset:function(){N=!1,Le=null,ue=null,Re=null,Me=null,Ue=null,qe=null,rt=null,xt=null}}}const s=new r,c=new a,u=new o,d=new WeakMap,h=new WeakMap;let f={},v={},x=new WeakMap,b=[],m=null,p=!1,M=null,_=null,w=null,R=null,D=null,P=null,B=null,y=!1,T=null,ce=null,V=null,O=null,F=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let _e=!1,K=0;const pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(pe)[1]),_e=K>=1):pe.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),_e=K>=2);let Ee=null,j={};const G=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),Se=new Gt().fromArray(G),we=new Gt().fromArray($);function De(N,Le,ue,Re){const Me=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(N,Ue),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<ue;qe++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(Le,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Le+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ue}const Be={};Be[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),Be[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Be[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Be[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Xe(i.DEPTH_TEST),c.setFunc(Al),le(!1),Ne(Yc),Xe(i.CULL_FACE),We(Bi);function Xe(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function Ve(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function $e(N,Le){return v[N]!==Le?(i.bindFramebuffer(N,Le),v[N]=Le,n&&(N===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Le),N===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Le)),!0):!1}function dt(N,Le){let ue=b,Re=!1;if(N)if(ue=x.get(Le),ue===void 0&&(ue=[],x.set(Le,ue)),N.isWebGLMultipleRenderTargets){const Me=N.texture;if(ue.length!==Me.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,qe=Me.length;Ue<qe;Ue++)ue[Ue]=i.COLOR_ATTACHMENT0+Ue;ue.length=Me.length,Re=!0}}else ue[0]!==i.COLOR_ATTACHMENT0&&(ue[0]=i.COLOR_ATTACHMENT0,Re=!0);else ue[0]!==i.BACK&&(ue[0]=i.BACK,Re=!0);Re&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ke(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const ee={[ea]:i.FUNC_ADD,[n_]:i.FUNC_SUBTRACT,[i_]:i.FUNC_REVERSE_SUBTRACT};if(n)ee[Qc]=i.MIN,ee[$c]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ee[Qc]=N.MIN_EXT,ee[$c]=N.MAX_EXT)}const lt={[r_]:i.ZERO,[a_]:i.ONE,[s_]:i.SRC_COLOR,[Pf]:i.SRC_ALPHA,[f_]:i.SRC_ALPHA_SATURATE,[u_]:i.DST_COLOR,[l_]:i.DST_ALPHA,[o_]:i.ONE_MINUS_SRC_COLOR,[Lf]:i.ONE_MINUS_SRC_ALPHA,[d_]:i.ONE_MINUS_DST_COLOR,[c_]:i.ONE_MINUS_DST_ALPHA};function We(N,Le,ue,Re,Me,Ue,qe,rt){if(N===Bi){p===!0&&(Ve(i.BLEND),p=!1);return}if(p===!1&&(Xe(i.BLEND),p=!0),N!==t_){if(N!==M||rt!==y){if((_!==ea||D!==ea)&&(i.blendEquation(i.FUNC_ADD),_=ea,D=ea),rt)switch(N){case oa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kc:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,R=null,P=null,B=null,M=N,y=rt}return}Me=Me||Le,Ue=Ue||ue,qe=qe||Re,(Le!==_||Me!==D)&&(i.blendEquationSeparate(ee[Le],ee[Me]),_=Le,D=Me),(ue!==w||Re!==R||Ue!==P||qe!==B)&&(i.blendFuncSeparate(lt[ue],lt[Re],lt[Ue],lt[qe]),w=ue,R=Re,P=Ue,B=qe),M=N,y=!1}function k(N,Le){N.side===Kn?Ve(i.CULL_FACE):Xe(i.CULL_FACE);let ue=N.side===Pn;Le&&(ue=!ue),le(ue),N.blending===oa&&N.transparent===!1?We(Bi):We(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),s.setMask(N.colorWrite);const Re=N.stencilWrite;u.setTest(Re),Re&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(N){T!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),T=N)}function Ne(N){N!==Qg?(Xe(i.CULL_FACE),N!==ce&&(N===Yc?i.cullFace(i.BACK):N===$g?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),ce=N}function ve(N){N!==V&&(_e&&i.lineWidth(N),V=N)}function Ae(N,Le,ue){N?(Xe(i.POLYGON_OFFSET_FILL),(O!==Le||F!==ue)&&(i.polygonOffset(Le,ue),O=Le,F=ue)):Ve(i.POLYGON_OFFSET_FILL)}function he(N){N?Xe(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function Fe(N){N===void 0&&(N=i.TEXTURE0+X-1),Ee!==N&&(i.activeTexture(N),Ee=N)}function Ie(N,Le,ue){ue===void 0&&(Ee===null?ue=i.TEXTURE0+X-1:ue=Ee);let Re=j[ue];Re===void 0&&(Re={type:void 0,texture:void 0},j[ue]=Re),(Re.type!==N||Re.texture!==Le)&&(Ee!==ue&&(i.activeTexture(ue),Ee=ue),i.bindTexture(N,Le||Be[N]),Re.type=N,Re.texture=Le)}function A(){const N=j[Ee];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(N){Se.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Se.copy(N))}function H(N){we.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),we.copy(N))}function oe(N,Le){let ue=h.get(Le);ue===void 0&&(ue=new WeakMap,h.set(Le,ue));let Re=ue.get(N);Re===void 0&&(Re=i.getUniformBlockIndex(Le,N.name),ue.set(N,Re))}function Ce(N,Le){const Re=h.get(Le).get(N);d.get(Le)!==Re&&(i.uniformBlockBinding(Le,Re,N.__bindingPointIndex),d.set(Le,Re))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Ee=null,j={},v={},x=new WeakMap,b=[],m=null,p=!1,M=null,_=null,w=null,R=null,D=null,P=null,B=null,y=!1,T=null,ce=null,V=null,O=null,F=null,Se.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),s.reset(),c.reset(),u.reset()}return{buffers:{color:s,depth:c,stencil:u},enable:Xe,disable:Ve,bindFramebuffer:$e,drawBuffers:dt,useProgram:Ke,setBlending:We,setMaterial:k,setFlipSided:le,setCullFace:Ne,setLineWidth:ve,setPolygonOffset:Ae,setScissorTest:he,activeTexture:Fe,bindTexture:Ie,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:L,texImage3D:fe,updateUBOMapping:oe,uniformBlockBinding:Ce,texStorage2D:Te,texStorage3D:Q,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:xe,compressedTexSubImage3D:Oe,scissor:ge,viewport:H,reset:Ge}}function K1(i,e,t,n,r,a,o){const s=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let b;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,S){return p?new OffscreenCanvas(A,S):lo("canvas")}function _(A,S,U,Z){let J=1;if((A.width>Z||A.height>Z)&&(J=Z/Math.max(A.width,A.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const xe=S?Ul:Math.floor,Oe=xe(J*A.width),Te=xe(J*A.height);b===void 0&&(b=M(Oe,Te));const Q=U?M(Oe,Te):b;return Q.width=Oe,Q.height=Te,Q.getContext("2d").drawImage(A,0,0,Oe,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Oe+"x"+Te+")."),Q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function w(A){return Au(A.width)&&Au(A.height)}function R(A){return s?!1:A.wrapS!==ni||A.wrapT!==ni||A.minFilter!==Vt&&A.minFilter!==qn}function D(A,S){return A.generateMipmaps&&S&&A.minFilter!==Vt&&A.minFilter!==qn}function P(A){i.generateMipmap(A)}function B(A,S,U,Z,J=!1){if(s===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let xe=S;return S===i.RED&&(U===i.FLOAT&&(xe=i.R32F),U===i.HALF_FLOAT&&(xe=i.R16F),U===i.UNSIGNED_BYTE&&(xe=i.R8)),S===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(xe=i.R8UI),U===i.UNSIGNED_SHORT&&(xe=i.R16UI),U===i.UNSIGNED_INT&&(xe=i.R32UI),U===i.BYTE&&(xe=i.R8I),U===i.SHORT&&(xe=i.R16I),U===i.INT&&(xe=i.R32I)),S===i.RG&&(U===i.FLOAT&&(xe=i.RG32F),U===i.HALF_FLOAT&&(xe=i.RG16F),U===i.UNSIGNED_BYTE&&(xe=i.RG8)),S===i.RGBA&&(U===i.FLOAT&&(xe=i.RGBA32F),U===i.HALF_FLOAT&&(xe=i.RGBA16F),U===i.UNSIGNED_BYTE&&(xe=Z===zt&&J===!1?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(xe=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(xe=i.RGB5_A1)),(xe===i.R16F||xe===i.R32F||xe===i.RG16F||xe===i.RG32F||xe===i.RGBA16F||xe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function y(A,S,U){return D(A,U)===!0||A.isFramebufferTexture&&A.minFilter!==Vt&&A.minFilter!==qn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){return A===Vt||A===eu||A===Io?i.NEAREST:i.LINEAR}function ce(A){const S=A.target;S.removeEventListener("dispose",ce),O(S),S.isVideoTexture&&x.delete(S)}function V(A){const S=A.target;S.removeEventListener("dispose",V),X(S)}function O(A){const S=n.get(A);if(S.__webglInit===void 0)return;const U=A.source,Z=m.get(U);if(Z){const J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(A),Object.keys(Z).length===0&&m.delete(U)}n.remove(A)}function F(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const U=A.source,Z=m.get(U);delete Z[S.__cacheKey],o.memory.textures--}function X(A){const S=A.texture,U=n.get(A),Z=n.get(S);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let xe=0;xe<U.__webglFramebuffer[J].length;xe++)i.deleteFramebuffer(U.__webglFramebuffer[J][xe]);else i.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)i.deleteFramebuffer(U.__webglFramebuffer[J]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let J=0,xe=S.length;J<xe;J++){const Oe=n.get(S[J]);Oe.__webglTexture&&(i.deleteTexture(Oe.__webglTexture),o.memory.textures--),n.remove(S[J])}n.remove(S),n.remove(A)}let _e=0;function K(){_e=0}function pe(){const A=_e;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),_e+=1,A}function Ee(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function j(A,S){const U=n.get(A);if(A.isVideoTexture&&Fe(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(U,A,S);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+S)}function G(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){$e(U,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+S)}function $(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){$e(U,A,S);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+S)}function Se(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){dt(U,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+S)}const we={[Cl]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Pl]:i.MIRRORED_REPEAT},De={[Vt]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[Io]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[A_]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},Be={[G_]:i.NEVER,[Y_]:i.ALWAYS,[H_]:i.LESS,[W_]:i.LEQUAL,[V_]:i.EQUAL,[q_]:i.GEQUAL,[j_]:i.GREATER,[X_]:i.NOTEQUAL};function Xe(A,S,U){if(U?(i.texParameteri(A,i.TEXTURE_WRAP_S,we[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,we[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,we[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,De[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,De[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==ni||S.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,T(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==Vt&&S.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Vt||S.minFilter!==Io&&S.minFilter!==os||S.type===Oi&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===_a&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ve(A,S){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",ce));const Z=S.source;let J=m.get(Z);J===void 0&&(J={},m.set(Z,J));const xe=Ee(S);if(xe!==A.__cacheKey){J[xe]===void 0&&(J[xe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),J[xe].usedTimes++;const Oe=J[A.__cacheKey];Oe!==void 0&&(J[A.__cacheKey].usedTimes--,Oe.usedTimes===0&&F(S)),A.__cacheKey=xe,A.__webglTexture=J[xe].texture}return U}function $e(A,S,U){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const J=Ve(A,S),xe=S.source;t.bindTexture(Z,A.__webglTexture,i.TEXTURE0+U);const Oe=n.get(xe);if(xe.version!==Oe.__version||J===!0){t.activeTexture(i.TEXTURE0+U),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Te=R(S)&&w(S.image)===!1;let Q=_(S.image,Te,!1,d);Q=Ie(S,Q);const L=w(Q)||s,fe=a.convert(S.format,S.colorSpace);let ge=a.convert(S.type),H=B(S.internalFormat,fe,ge,S.colorSpace,S.isVideoTexture);Xe(Z,S,L);let oe;const Ce=S.mipmaps,Ge=s&&S.isVideoTexture!==!0,N=Oe.__version===void 0||J===!0,Le=y(S,Q,L);if(S.isDepthTexture)H=i.DEPTH_COMPONENT,s?S.type===Oi?H=i.DEPTH_COMPONENT32F:S.type===er?H=i.DEPTH_COMPONENT24:S.type===Mr?H=i.DEPTH24_STENCIL8:H=i.DEPTH_COMPONENT16:S.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Er&&H===i.DEPTH_COMPONENT&&S.type!==ic&&S.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=er,ge=a.convert(S.type)),S.format===xa&&H===i.DEPTH_COMPONENT&&(H=i.DEPTH_STENCIL,S.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Mr,ge=a.convert(S.type))),N&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,H,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,H,Q.width,Q.height,0,fe,ge,null));else if(S.isDataTexture)if(Ce.length>0&&L){Ge&&N&&t.texStorage2D(i.TEXTURE_2D,Le,H,Ce[0].width,Ce[0].height);for(let ue=0,Re=Ce.length;ue<Re;ue++)oe=Ce[ue],Ge?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,oe.width,oe.height,fe,ge,oe.data):t.texImage2D(i.TEXTURE_2D,ue,H,oe.width,oe.height,0,fe,ge,oe.data);S.generateMipmaps=!1}else Ge?(N&&t.texStorage2D(i.TEXTURE_2D,Le,H,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,fe,ge,Q.data)):t.texImage2D(i.TEXTURE_2D,0,H,Q.width,Q.height,0,fe,ge,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,H,Ce[0].width,Ce[0].height,Q.depth);for(let ue=0,Re=Ce.length;ue<Re;ue++)oe=Ce[ue],S.format!==ii?fe!==null?Ge?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,oe.width,oe.height,Q.depth,fe,oe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,H,oe.width,oe.height,Q.depth,0,oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,oe.width,oe.height,Q.depth,fe,ge,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,H,oe.width,oe.height,Q.depth,0,fe,ge,oe.data)}else{Ge&&N&&t.texStorage2D(i.TEXTURE_2D,Le,H,Ce[0].width,Ce[0].height);for(let ue=0,Re=Ce.length;ue<Re;ue++)oe=Ce[ue],S.format!==ii?fe!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,oe.width,oe.height,fe,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,H,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,oe.width,oe.height,fe,ge,oe.data):t.texImage2D(i.TEXTURE_2D,ue,H,oe.width,oe.height,0,fe,ge,oe.data)}else if(S.isDataArrayTexture)Ge?(N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,H,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,ge,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,H,Q.width,Q.height,Q.depth,0,fe,ge,Q.data);else if(S.isData3DTexture)Ge?(N&&t.texStorage3D(i.TEXTURE_3D,Le,H,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,ge,Q.data)):t.texImage3D(i.TEXTURE_3D,0,H,Q.width,Q.height,Q.depth,0,fe,ge,Q.data);else if(S.isFramebufferTexture){if(N)if(Ge)t.texStorage2D(i.TEXTURE_2D,Le,H,Q.width,Q.height);else{let ue=Q.width,Re=Q.height;for(let Me=0;Me<Le;Me++)t.texImage2D(i.TEXTURE_2D,Me,H,ue,Re,0,fe,ge,null),ue>>=1,Re>>=1}}else if(Ce.length>0&&L){Ge&&N&&t.texStorage2D(i.TEXTURE_2D,Le,H,Ce[0].width,Ce[0].height);for(let ue=0,Re=Ce.length;ue<Re;ue++)oe=Ce[ue],Ge?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,fe,ge,oe):t.texImage2D(i.TEXTURE_2D,ue,H,fe,ge,oe);S.generateMipmaps=!1}else Ge?(N&&t.texStorage2D(i.TEXTURE_2D,Le,H,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,ge,Q)):t.texImage2D(i.TEXTURE_2D,0,H,fe,ge,Q);D(S,L)&&P(Z),Oe.__version=xe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function dt(A,S,U){if(S.image.length!==6)return;const Z=Ve(A,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const xe=n.get(J);if(J.version!==xe.__version||Z===!0){t.activeTexture(i.TEXTURE0+U),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,Te=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let ue=0;ue<6;ue++)!Oe&&!Te?Q[ue]=_(S.image[ue],!1,!0,u):Q[ue]=Te?S.image[ue].image:S.image[ue],Q[ue]=Ie(S,Q[ue]);const L=Q[0],fe=w(L)||s,ge=a.convert(S.format,S.colorSpace),H=a.convert(S.type),oe=B(S.internalFormat,ge,H,S.colorSpace),Ce=s&&S.isVideoTexture!==!0,Ge=xe.__version===void 0||Z===!0;let N=y(S,L,fe);Xe(i.TEXTURE_CUBE_MAP,S,fe);let Le;if(Oe){Ce&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,N,oe,L.width,L.height);for(let ue=0;ue<6;ue++){Le=Q[ue].mipmaps;for(let Re=0;Re<Le.length;Re++){const Me=Le[Re];S.format!==ii?ge!==null?Ce?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Me.width,Me.height,ge,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,0,0,Me.width,Me.height,ge,H,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re,oe,Me.width,Me.height,0,ge,H,Me.data)}}}else{Le=S.mipmaps,Ce&&Ge&&(Le.length>0&&N++,t.texStorage2D(i.TEXTURE_CUBE_MAP,N,oe,Q[0].width,Q[0].height));for(let ue=0;ue<6;ue++)if(Te){Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Q[ue].width,Q[ue].height,ge,H,Q[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,oe,Q[ue].width,Q[ue].height,0,ge,H,Q[ue].data);for(let Re=0;Re<Le.length;Re++){const Ue=Le[Re].image[ue].image;Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,Ue.width,Ue.height,ge,H,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,oe,Ue.width,Ue.height,0,ge,H,Ue.data)}}else{Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ge,H,Q[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,oe,ge,H,Q[ue]);for(let Re=0;Re<Le.length;Re++){const Me=Le[Re];Ce?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,0,0,ge,H,Me.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re+1,oe,ge,H,Me.image[ue])}}}D(S,fe)&&P(i.TEXTURE_CUBE_MAP),xe.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ke(A,S,U,Z,J,xe){const Oe=a.convert(U.format,U.colorSpace),Te=a.convert(U.type),Q=B(U.internalFormat,Oe,Te,U.colorSpace);if(!n.get(S).__hasExternalTextures){const fe=Math.max(1,S.width>>xe),ge=Math.max(1,S.height>>xe);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,xe,Q,fe,ge,S.depth,0,Oe,Te,null):t.texImage2D(J,xe,Q,fe,ge,0,Oe,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),he(S)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,n.get(U).__webglTexture,0,Ae(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,n.get(U).__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(A,S,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let Z=i.DEPTH_COMPONENT16;if(U||he(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===Oi?Z=i.DEPTH_COMPONENT32F:J.type===er&&(Z=i.DEPTH_COMPONENT24));const xe=Ae(S);he(S)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,Z,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Z,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const Z=Ae(S);U&&he(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,S.width,S.height):he(S)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const Z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<Z.length;J++){const xe=Z[J],Oe=a.convert(xe.format,xe.colorSpace),Te=a.convert(xe.type),Q=B(xe.internalFormat,Oe,Te,xe.colorSpace),L=Ae(S);U&&he(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,Q,S.width,S.height):he(S)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,J=Ae(S);if(S.depthTexture.format===Er)he(S)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===xa)he(S)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function We(A){const S=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");lt(S.__webglFramebuffer,A)}else if(U){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]=i.createRenderbuffer(),ee(S.__webglDepthbuffer[Z],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),ee(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(A,S,U){const Z=n.get(A);S!==void 0&&Ke(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&We(A)}function le(A){const S=A.texture,U=n.get(A),Z=n.get(S);A.addEventListener("dispose",V),A.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++);const J=A.isWebGLCubeRenderTarget===!0,xe=A.isWebGLMultipleRenderTargets===!0,Oe=w(A)||s;if(J){U.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(s&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[Te]=[];for(let Q=0;Q<S.mipmaps.length;Q++)U.__webglFramebuffer[Te][Q]=i.createFramebuffer()}else U.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(s&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let Te=0;Te<S.mipmaps.length;Te++)U.__webglFramebuffer[Te]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(xe)if(r.drawBuffers){const Te=A.texture;for(let Q=0,L=Te.length;Q<L;Q++){const fe=n.get(Te[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&he(A)===!1){const Te=xe?S:[S];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Q=0;Q<Te.length;Q++){const L=Te[Q];U.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[Q]);const fe=a.convert(L.format,L.colorSpace),ge=a.convert(L.type),H=B(L.internalFormat,fe,ge,L.colorSpace,A.isXRRenderTarget===!0),oe=Ae(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,H,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,U.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,S,Oe);for(let Te=0;Te<6;Te++)if(s&&S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Ke(U.__webglFramebuffer[Te][Q],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Q);else Ke(U.__webglFramebuffer[Te],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);D(S,Oe)&&P(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){const Te=A.texture;for(let Q=0,L=Te.length;Q<L;Q++){const fe=Te[Q],ge=n.get(fe);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),Xe(i.TEXTURE_2D,fe,Oe),Ke(U.__webglFramebuffer,A,fe,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),D(fe,Oe)&&P(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?Te=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,Z.__webglTexture),Xe(Te,S,Oe),s&&S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Ke(U.__webglFramebuffer[Q],A,S,i.COLOR_ATTACHMENT0,Te,Q);else Ke(U.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,Te,0);D(S,Oe)&&P(Te),t.unbindTexture()}A.depthBuffer&&We(A)}function Ne(A){const S=w(A)||s,U=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Z=0,J=U.length;Z<J;Z++){const xe=U[Z];if(D(xe,S)){const Oe=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Te=n.get(xe).__webglTexture;t.bindTexture(Oe,Te),P(Oe),t.unbindTexture()}}}function ve(A){if(s&&A.samples>0&&he(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],U=A.width,Z=A.height;let J=i.COLOR_BUFFER_BIT;const xe=[],Oe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(A),Q=A.isWebGLMultipleRenderTargets===!0;if(Q)for(let L=0;L<S.length;L++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let L=0;L<S.length;L++){xe.push(i.COLOR_ATTACHMENT0+L),A.depthBuffer&&xe.push(Oe);const fe=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(fe===!1&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Q&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[L]),fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Oe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Oe])),Q){const ge=n.get(S[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,U,Z,0,0,U,Z,J,i.NEAREST),v&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let L=0;L<S.length;L++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,Te.__webglColorRenderbuffer[L]);const fe=n.get(S[L]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function Ae(A){return Math.min(h,A.samples)}function he(A){const S=n.get(A);return s&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(A){const S=o.render.frame;x.get(A)!==S&&(x.set(A,S),A.update())}function Ie(A,S){const U=A.colorSpace,Z=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Dl||U!==Mi&&U!==Tr&&(U===zt||U===go?s===!1?e.has("EXT_sRGB")===!0&&Z===ii?(A.format=Dl,A.minFilter=qn,A.generateMipmaps=!1):S=Vf.sRGBToLinear(S):(Z!==ii||J!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}this.allocateTextureUnit=pe,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=Se,this.rebindTextures=k,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=he}const Z1=0,rn=1;function J1(i,e,t){const n=t.isWebGL2;function r(a,o=Tr){let s;const c=o===zt||o===go?rn:Z1;if(a===ir)return i.UNSIGNED_BYTE;if(a===Nf)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Of)return i.UNSIGNED_SHORT_5_5_5_1;if(a===R_)return i.BYTE;if(a===C_)return i.SHORT;if(a===ic)return i.UNSIGNED_SHORT;if(a===Uf)return i.INT;if(a===er)return i.UNSIGNED_INT;if(a===Oi)return i.FLOAT;if(a===_a)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===P_)return i.ALPHA;if(a===ii)return i.RGBA;if(a===L_)return i.LUMINANCE;if(a===D_)return i.LUMINANCE_ALPHA;if(a===Er)return i.DEPTH_COMPONENT;if(a===xa)return i.DEPTH_STENCIL;if(a===Dl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===I_)return i.RED;if(a===kf)return i.RED_INTEGER;if(a===U_)return i.RG;if(a===Ff)return i.RG_INTEGER;if(a===Bf)return i.RGBA_INTEGER;if(a===Uo||a===No||a===Oo||a===ko)if(c===rn)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Uo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Uo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===No)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===tu||a===nu||a===iu||a===ru)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===tu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===N_)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===au||a===su)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===au)return c===rn?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===su)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ou||a===lu||a===cu||a===uu||a===du||a===fu||a===hu||a===pu||a===mu||a===vu||a===gu||a===_u||a===xu||a===bu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===ou)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===lu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===cu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===uu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===du)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===hu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===pu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===mu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===gu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===_u)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===xu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===bu)return c===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Fo||a===yu||a===Su)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Fo)return c===rn?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===yu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Su)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===O_||a===Mu||a===Eu||a===wu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Fo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Eu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Mr?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class Q1 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pn extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $1={type:"move"};class ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(u,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),v=.02,x=.005;u.inputState.pinching&&f>v+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent($1)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lh extends xn{constructor(e,t,n,r,a,o,s,c,u,d){if(d=d!==void 0?d:Er,d!==Er&&d!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Er&&(n=er),n===void 0&&d===xa&&(n=Mr),super(null,r,a,o,s,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class eS extends Cr{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",c=1,u=null,d=null,h=null,f=null,v=null,x=null;const b=t.getContextAttributes();let m=null,p=null;const M=[],_=[],w=new Nn;w.layers.enable(1),w.viewport=new Gt;const R=new Nn;R.layers.enable(2),R.viewport=new Gt;const D=[w,R],P=new Q1;P.layers.enable(1),P.layers.enable(2);let B=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=M[G];return $===void 0&&($=new ol,M[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=M[G];return $===void 0&&($=new ol,M[G]=$),$.getGripSpace()},this.getHand=function(G){let $=M[G];return $===void 0&&($=new ol,M[G]=$),$.getHandSpace()};function T(G){const $=_.indexOf(G.inputSource);if($===-1)return;const Se=M[$];Se!==void 0&&(Se.update(G.inputSource,G.frame,u||o),Se.dispatchEvent({type:G.type,data:G.inputSource}))}function ce(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",V);for(let G=0;G<M.length;G++){const $=_[G];$!==null&&(_[G]=null,M[G].disconnect($))}B=null,y=null,e.setRenderTarget(m),v=null,f=null,h=null,r=null,p=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:v}),p=new Hi(v.framebufferWidth,v.framebufferHeight,{format:ii,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let $=null,Se=null,we=null;b.depth&&(we=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=b.stencil?xa:Er,Se=b.stencil?Mr:er);const De={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),p=new Hi(f.textureWidth,f.textureHeight,{format:ii,type:ir,depthTexture:new lh(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const Be=e.properties.get(p);Be.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(s),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(G){for(let $=0;$<G.removed.length;$++){const Se=G.removed[$],we=_.indexOf(Se);we>=0&&(_[we]=null,M[we].disconnect(Se))}for(let $=0;$<G.added.length;$++){const Se=G.added[$];let we=_.indexOf(Se);if(we===-1){for(let Be=0;Be<M.length;Be++)if(Be>=_.length){_.push(Se),we=Be;break}else if(_[Be]===null){_[Be]=Se,we=Be;break}if(we===-1)break}const De=M[we];De&&De.connect(Se)}}const O=new re,F=new re;function X(G,$,Se){O.setFromMatrixPosition($.matrixWorld),F.setFromMatrixPosition(Se.matrixWorld);const we=O.distanceTo(F),De=$.projectionMatrix.elements,Be=Se.projectionMatrix.elements,Xe=De[14]/(De[10]-1),Ve=De[14]/(De[10]+1),$e=(De[9]+1)/De[5],dt=(De[9]-1)/De[5],Ke=(De[8]-1)/De[0],ee=(Be[8]+1)/Be[0],lt=Xe*Ke,We=Xe*ee,k=we/(-Ke+ee),le=k*-Ke;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(le),G.translateZ(k),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Ne=Xe+k,ve=Ve+k,Ae=lt-le,he=We+(we-le),Fe=$e*Ve/ve*Ne,Ie=dt*Ve/ve*Ne;G.projectionMatrix.makePerspective(Ae,he,Fe,Ie,Ne,ve),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function _e(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;P.near=R.near=w.near=G.near,P.far=R.far=w.far=G.far,(B!==P.near||y!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,y=P.far);const $=G.parent,Se=P.cameras;_e(P,$);for(let we=0;we<Se.length;we++)_e(Se[we],$);Se.length===2?X(P,w,R):P.projectionMatrix.copy(w.projectionMatrix),K(G,P,$)};function K(G,$,Se){Se===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(Se.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Il*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&v===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=G)};let pe=null;function Ee(G,$){if(d=$.getViewerPose(u||o),x=$,d!==null){const Se=d.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let we=!1;Se.length!==P.cameras.length&&(P.cameras.length=0,we=!0);for(let De=0;De<Se.length;De++){const Be=Se[De];let Xe=null;if(v!==null)Xe=v.getViewport(Be);else{const $e=h.getViewSubImage(f,Be);Xe=$e.viewport,De===0&&(e.setRenderTargetTextures(p,$e.colorTexture,f.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(p))}let Ve=D[De];Ve===void 0&&(Ve=new Nn,Ve.layers.enable(De),Ve.viewport=new Gt,D[De]=Ve),Ve.matrix.fromArray(Be.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Be.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),De===0&&(P.matrix.copy(Ve.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),we===!0&&P.cameras.push(Ve)}}for(let Se=0;Se<M.length;Se++){const we=_[Se],De=M[Se];we!==null&&De!==void 0&&De.update(we,$,u||o)}pe&&pe(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),x=null}const j=new nh;j.setAnimationLoop(Ee),this.setAnimationLoop=function(G){pe=G},this.dispose=function(){}}}function tS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,_,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),d(m,p)):p.isMeshStandardMaterial?(a(m,p),f(m,p),p.isMeshPhysicalMaterial&&v(m,p,w)):p.isMeshMatcapMaterial?(a(m,p),x(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),b(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function v(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function nS(i,e,t,n){let r={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){const w=_.program;n.uniformBlockBinding(M,w)}function u(M,_){let w=r[M.id];w===void 0&&(x(M),w=d(M),r[M.id]=w,M.addEventListener("dispose",m));const R=_.program;n.updateUBOMapping(M,R);const D=e.render.frame;a[M.id]!==D&&(f(M),a[M.id]=D)}function d(M){const _=h();M.__bindingPointIndex=_;const w=i.createBuffer(),R=M.__size,D=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function h(){for(let M=0;M<s;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=r[M.id],w=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let D=0,P=w.length;D<P;D++){const B=w[D];if(v(B,D,R)===!0){const y=B.__offset,T=Array.isArray(B.value)?B.value:[B.value];let ce=0;for(let V=0;V<T.length;V++){const O=T[V],F=b(O);typeof O=="number"?(B.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,y+ce,B.__data)):O.isMatrix3?(B.__data[0]=O.elements[0],B.__data[1]=O.elements[1],B.__data[2]=O.elements[2],B.__data[3]=O.elements[0],B.__data[4]=O.elements[3],B.__data[5]=O.elements[4],B.__data[6]=O.elements[5],B.__data[7]=O.elements[0],B.__data[8]=O.elements[6],B.__data[9]=O.elements[7],B.__data[10]=O.elements[8],B.__data[11]=O.elements[0]):(O.toArray(B.__data,ce),ce+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,B.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(M,_,w){const R=M.value;if(w[_]===void 0){if(typeof R=="number")w[_]=R;else{const D=Array.isArray(R)?R:[R],P=[];for(let B=0;B<D.length;B++)P.push(D[B].clone());w[_]=P}return!0}else if(typeof R=="number"){if(w[_]!==R)return w[_]=R,!0}else{const D=Array.isArray(w[_])?w[_]:[w[_]],P=Array.isArray(R)?R:[R];for(let B=0;B<D.length;B++){const y=D[B];if(y.equals(P[B])===!1)return y.copy(P[B]),!0}}return!1}function x(M){const _=M.uniforms;let w=0;const R=16;let D=0;for(let P=0,B=_.length;P<B;P++){const y=_[P],T={boundary:0,storage:0},ce=Array.isArray(y.value)?y.value:[y.value];for(let V=0,O=ce.length;V<O;V++){const F=ce[V],X=b(F);T.boundary+=X.boundary,T.storage+=X.storage}if(y.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=w,P>0){D=w%R;const V=R-D;D!==0&&V-T.boundary<0&&(w+=R-D,y.__offset=w)}w+=T.storage}return D=w%R,D>0&&(w+=R-D),M.__size=w,M.__cache={},this}function b(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},a={}}return{bind:c,update:u,dispose:p}}class ch{constructor(e={}){const{canvas:t=J_(),context:n=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const v=new Uint32Array(4),x=new Int32Array(4);let b=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const _=this;let w=!1,R=0,D=0,P=null,B=-1,y=null;const T=new Gt,ce=new Gt;let V=null;const O=new Rt(0);let F=0,X=t.width,_e=t.height,K=1,pe=null,Ee=null;const j=new Gt(0,0,X,_e),G=new Gt(0,0,X,_e);let $=!1;const Se=new ac;let we=!1,De=!1,Be=null;const Xe=new Zt,Ve=new tt,$e=new re,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return P===null?K:1}let ee=n;function lt(C,W){for(let ae=0;ae<C.length;ae++){const te=C[ae],me=t.getContext(te,W);if(me!==null)return me}return null}try{const C={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Re,!1),ee===null){const W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),ee=lt(W,C),ee===null)throw lt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ee instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let We,k,le,Ne,ve,Ae,he,Fe,Ie,A,S,U,Z,J,xe,Oe,Te,Q,L,fe,ge,H,oe,Ce;function Ge(){We=new hy(ee),k=new oy(ee,We,e),We.init(k),H=new J1(ee,We,k),le=new Y1(ee,We,k),Ne=new vy(ee),ve=new U1,Ae=new K1(ee,We,le,ve,k,H,Ne),he=new cy(_),Fe=new fy(_),Ie=new Tx(ee,k),oe=new ay(ee,We,Ie,k),A=new py(ee,Ie,Ne,oe),S=new by(ee,A,Ie,Ne),L=new xy(ee,k,Ae),Oe=new ly(ve),U=new I1(_,he,Fe,We,k,oe,Oe),Z=new tS(_,ve),J=new O1,xe=new H1(We,k),Q=new ry(_,he,Fe,le,S,f,c),Te=new q1(_,S,k),Ce=new nS(ee,Ne,k,le),fe=new sy(ee,We,Ne,k),ge=new my(ee,We,Ne,k),Ne.programs=U.programs,_.capabilities=k,_.extensions=We,_.properties=ve,_.renderLists=J,_.shadowMap=Te,_.state=le,_.info=Ne}Ge();const N=new eS(_,ee);this.xr=N,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const C=We.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=We.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(X,_e,!1))},this.getSize=function(C){return C.set(X,_e)},this.setSize=function(C,W,ae=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,_e=W,t.width=Math.floor(C*K),t.height=Math.floor(W*K),ae===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(X*K,_e*K).floor()},this.setDrawingBufferSize=function(C,W,ae){X=C,_e=W,K=ae,t.width=Math.floor(C*ae),t.height=Math.floor(W*ae),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(j)},this.setViewport=function(C,W,ae,te){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,W,ae,te),le.viewport(T.copy(j).multiplyScalar(K).floor())},this.getScissor=function(C){return C.copy(G)},this.setScissor=function(C,W,ae,te){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,W,ae,te),le.scissor(ce.copy(G).multiplyScalar(K).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){le.setScissorTest($=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){Ee=C},this.getClearColor=function(C){return C.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(C=!0,W=!0,ae=!0){let te=0;if(C){let me=!1;if(P!==null){const He=P.texture.format;me=He===Bf||He===Ff||He===kf}if(me){const He=P.texture.type,Ze=He===ir||He===er||He===ic||He===Mr||He===Nf||He===Of,it=Q.getClearColor(),et=Q.getClearAlpha(),st=it.r,nt=it.g,ot=it.b;Ze?(v[0]=st,v[1]=nt,v[2]=ot,v[3]=et,ee.clearBufferuiv(ee.COLOR,0,v)):(x[0]=st,x[1]=nt,x[2]=ot,x[3]=et,ee.clearBufferiv(ee.COLOR,0,x))}else te|=ee.COLOR_BUFFER_BIT}W&&(te|=ee.DEPTH_BUFFER_BIT),ae&&(te|=ee.STENCIL_BUFFER_BIT),ee.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),J.dispose(),xe.dispose(),ve.dispose(),he.dispose(),Fe.dispose(),S.dispose(),oe.dispose(),Ce.dispose(),U.dispose(),N.dispose(),N.removeEventListener("sessionstart",ct),N.removeEventListener("sessionend",Mt),Be&&(Be.dispose(),Be=null),mt.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=Ne.autoReset,W=Te.enabled,ae=Te.autoUpdate,te=Te.needsUpdate,me=Te.type;Ge(),Ne.autoReset=C,Te.enabled=W,Te.autoUpdate=ae,Te.needsUpdate=te,Te.type=me}function Re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const W=C.target;W.removeEventListener("dispose",Me),Ue(W)}function Ue(C){qe(C),ve.remove(C)}function qe(C){const W=ve.get(C).programs;W!==void 0&&(W.forEach(function(ae){U.releaseProgram(ae)}),C.isShaderMaterial&&U.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ae,te,me,He){W===null&&(W=dt);const Ze=me.isMesh&&me.matrixWorld.determinant()<0,it=Dt(C,W,ae,te,me);le.setMaterial(te,Ze);let et=ae.index,st=1;if(te.wireframe===!0){if(et=A.getWireframeAttribute(ae),et===void 0)return;st=2}const nt=ae.drawRange,ot=ae.attributes.position;let At=nt.start*st,Et=(nt.start+nt.count)*st;He!==null&&(At=Math.max(At,He.start*st),Et=Math.min(Et,(He.start+He.count)*st)),et!==null?(At=Math.max(At,0),Et=Math.min(Et,et.count)):ot!=null&&(At=Math.max(At,0),Et=Math.min(Et,ot.count));const un=Et-At;if(un<0||un===1/0)return;oe.setup(me,te,it,ae,et);let Jn,Xt=fe;if(et!==null&&(Jn=Ie.get(et),Xt=ge,Xt.setIndex(Jn)),me.isMesh)te.wireframe===!0?(le.setLineWidth(te.wireframeLinewidth*Ke()),Xt.setMode(ee.LINES)):Xt.setMode(ee.TRIANGLES);else if(me.isLine){let gt=te.linewidth;gt===void 0&&(gt=1),le.setLineWidth(gt*Ke()),me.isLineSegments?Xt.setMode(ee.LINES):me.isLineLoop?Xt.setMode(ee.LINE_LOOP):Xt.setMode(ee.LINE_STRIP)}else me.isPoints?Xt.setMode(ee.POINTS):me.isSprite&&Xt.setMode(ee.TRIANGLES);if(me.isInstancedMesh)Xt.renderInstances(At,un,me.count);else if(ae.isInstancedBufferGeometry){const gt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Pr=Math.min(ae.instanceCount,gt);Xt.renderInstances(At,un,Pr)}else Xt.render(At,un)},this.compile=function(C,W){function ae(te,me,He){te.transparent===!0&&te.side===Kn&&te.forceSinglePass===!1?(te.side=Pn,te.needsUpdate=!0,Ht(te,me,He),te.side=Si,te.needsUpdate=!0,Ht(te,me,He),te.side=Kn):Ht(te,me,He)}m=xe.get(C),m.init(),M.push(m),C.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),m.setupLights(_._useLegacyLights),C.traverse(function(te){const me=te.material;if(me)if(Array.isArray(me))for(let He=0;He<me.length;He++){const Ze=me[He];ae(Ze,C,te)}else ae(me,C,te)}),M.pop(),m=null};let rt=null;function xt(C){rt&&rt(C)}function ct(){mt.stop()}function Mt(){mt.start()}const mt=new nh;mt.setAnimationLoop(xt),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(C){rt=C,N.setAnimationLoop(C),C===null?mt.stop():mt.start()},N.addEventListener("sessionstart",ct),N.addEventListener("sessionend",Mt),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(W),W=N.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,W,P),m=xe.get(C,M.length),m.init(),M.push(m),Xe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Se.setFromProjectionMatrix(Xe),De=this.localClippingEnabled,we=Oe.init(this.clippingPlanes,De),b=J.get(C,p.length),b.init(),p.push(b),vt(C,W,0,_.sortObjects),b.finish(),_.sortObjects===!0&&b.sort(pe,Ee),this.info.render.frame++,we===!0&&Oe.beginShadows();const ae=m.state.shadowsArray;if(Te.render(ae,C,W),we===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(b,C),m.setupLights(_._useLegacyLights),W.isArrayCamera){const te=W.cameras;for(let me=0,He=te.length;me<He;me++){const Ze=te[me];Lt(b,C,Ze,Ze.viewport)}}else Lt(b,C,W);P!==null&&(Ae.updateMultisampleRenderTarget(P),Ae.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(_,C,W),oe.resetDefaultState(),B=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function vt(C,W,ae,te){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Se.intersectsSprite(C)){te&&$e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Xe);const Ze=S.update(C),it=C.material;it.visible&&b.push(C,Ze,it,ae,$e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Se.intersectsObject(C))){const Ze=S.update(C),it=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$e.copy(C.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),$e.copy(Ze.boundingSphere.center)),$e.applyMatrix4(C.matrixWorld).applyMatrix4(Xe)),Array.isArray(it)){const et=Ze.groups;for(let st=0,nt=et.length;st<nt;st++){const ot=et[st],At=it[ot.materialIndex];At&&At.visible&&b.push(C,Ze,At,ae,$e.z,ot)}}else it.visible&&b.push(C,Ze,it,ae,$e.z,null)}}const He=C.children;for(let Ze=0,it=He.length;Ze<it;Ze++)vt(He[Ze],W,ae,te)}function Lt(C,W,ae,te){const me=C.opaque,He=C.transmissive,Ze=C.transparent;m.setupLightsView(ae),we===!0&&Oe.setGlobalState(_.clippingPlanes,ae),He.length>0&&Jt(me,He,W,ae),te&&le.viewport(T.copy(te)),me.length>0&&nn(me,W,ae),He.length>0&&nn(He,W,ae),Ze.length>0&&nn(Ze,W,ae),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Jt(C,W,ae,te){const me=k.isWebGL2;Be===null&&(Be=new Hi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?_a:ir,minFilter:os,samples:me?4:0})),_.getDrawingBufferSize(Ve),me?Be.setSize(Ve.x,Ve.y):Be.setSize(Ul(Ve.x),Ul(Ve.y));const He=_.getRenderTarget();_.setRenderTarget(Be),_.getClearColor(O),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear();const Ze=_.toneMapping;_.toneMapping=nr,nn(C,ae,te),Ae.updateMultisampleRenderTarget(Be),Ae.updateRenderTargetMipmap(Be);let it=!1;for(let et=0,st=W.length;et<st;et++){const nt=W[et],ot=nt.object,At=nt.geometry,Et=nt.material,un=nt.group;if(Et.side===Kn&&ot.layers.test(te.layers)){const Jn=Et.side;Et.side=Pn,Et.needsUpdate=!0,Tt(ot,ae,te,At,Et,un),Et.side=Jn,Et.needsUpdate=!0,it=!0}}it===!0&&(Ae.updateMultisampleRenderTarget(Be),Ae.updateRenderTargetMipmap(Be)),_.setRenderTarget(He),_.setClearColor(O,F),_.toneMapping=Ze}function nn(C,W,ae){const te=W.isScene===!0?W.overrideMaterial:null;for(let me=0,He=C.length;me<He;me++){const Ze=C[me],it=Ze.object,et=Ze.geometry,st=te===null?Ze.material:te,nt=Ze.group;it.layers.test(ae.layers)&&Tt(it,W,ae,et,st,nt)}}function Tt(C,W,ae,te,me,He){C.onBeforeRender(_,W,ae,te,me,He),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),me.onBeforeRender(_,W,ae,te,C,He),me.transparent===!0&&me.side===Kn&&me.forceSinglePass===!1?(me.side=Pn,me.needsUpdate=!0,_.renderBufferDirect(ae,W,te,me,C,He),me.side=Si,me.needsUpdate=!0,_.renderBufferDirect(ae,W,te,me,C,He),me.side=Kn):_.renderBufferDirect(ae,W,te,me,C,He),C.onAfterRender(_,W,ae,te,me,He)}function Ht(C,W,ae){W.isScene!==!0&&(W=dt);const te=ve.get(C),me=m.state.lights,He=m.state.shadowsArray,Ze=me.state.version,it=U.getParameters(C,me.state,He,W,ae),et=U.getProgramCacheKey(it);let st=te.programs;te.environment=C.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(C.isMeshStandardMaterial?Fe:he).get(C.envMap||te.environment),st===void 0&&(C.addEventListener("dispose",Me),st=new Map,te.programs=st);let nt=st.get(et);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Ze)return Fn(C,it),nt}else it.uniforms=U.getUniforms(C),C.onBuild(ae,it,_),C.onBeforeCompile(it,_),nt=U.acquireProgram(it,et),st.set(et,nt),te.uniforms=it.uniforms;const ot=te.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ot.clippingPlanes=Oe.uniform),Fn(C,it),te.needsLights=ze(C),te.lightsStateVersion=Ze,te.needsLights&&(ot.ambientLightColor.value=me.state.ambient,ot.lightProbe.value=me.state.probe,ot.directionalLights.value=me.state.directional,ot.directionalLightShadows.value=me.state.directionalShadow,ot.spotLights.value=me.state.spot,ot.spotLightShadows.value=me.state.spotShadow,ot.rectAreaLights.value=me.state.rectArea,ot.ltc_1.value=me.state.rectAreaLTC1,ot.ltc_2.value=me.state.rectAreaLTC2,ot.pointLights.value=me.state.point,ot.pointLightShadows.value=me.state.pointShadow,ot.hemisphereLights.value=me.state.hemi,ot.directionalShadowMap.value=me.state.directionalShadowMap,ot.directionalShadowMatrix.value=me.state.directionalShadowMatrix,ot.spotShadowMap.value=me.state.spotShadowMap,ot.spotLightMatrix.value=me.state.spotLightMatrix,ot.spotLightMap.value=me.state.spotLightMap,ot.pointShadowMap.value=me.state.pointShadowMap,ot.pointShadowMatrix.value=me.state.pointShadowMatrix);const At=nt.getUniforms(),Et=Js.seqWithValue(At.seq,ot);return te.currentProgram=nt,te.uniformsList=Et,nt}function Fn(C,W){const ae=ve.get(C);ae.outputColorSpace=W.outputColorSpace,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function Dt(C,W,ae,te,me){W.isScene!==!0&&(W=dt),Ae.resetTextureUnits();const He=W.fog,Ze=te.isMeshStandardMaterial?W.environment:null,it=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mi,et=(te.isMeshStandardMaterial?Fe:he).get(te.envMap||Ze),st=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,nt=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ot=!!ae.morphAttributes.position,At=!!ae.morphAttributes.normal,Et=!!ae.morphAttributes.color;let un=nr;te.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(un=_.toneMapping);const Jn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Xt=Jn!==void 0?Jn.length:0,gt=ve.get(te),Pr=m.state.lights;if(we===!0&&(De===!0||C!==y)){const hn=C===y&&te.id===B;Oe.setState(te,C,hn)}let Ot=!1;te.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Pr.state.version||gt.outputColorSpace!==it||me.isInstancedMesh&&gt.instancing===!1||!me.isInstancedMesh&&gt.instancing===!0||me.isSkinnedMesh&&gt.skinning===!1||!me.isSkinnedMesh&&gt.skinning===!0||me.isInstancedMesh&&gt.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&gt.instancingColor===!1&&me.instanceColor!==null||gt.envMap!==et||te.fog===!0&&gt.fog!==He||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Oe.numPlanes||gt.numIntersection!==Oe.numIntersection)||gt.vertexAlphas!==st||gt.vertexTangents!==nt||gt.morphTargets!==ot||gt.morphNormals!==At||gt.morphColors!==Et||gt.toneMapping!==un||k.isWebGL2===!0&&gt.morphTargetsCount!==Xt)&&(Ot=!0):(Ot=!0,gt.__version=te.version);let di=gt.currentProgram;Ot===!0&&(di=Ht(te,W,me));let Aa=!1,or=!1,Ra=!1;const fn=di.getUniforms(),Qn=gt.uniforms;if(le.useProgram(di.program)&&(Aa=!0,or=!0,Ra=!0),te.id!==B&&(B=te.id,or=!0),Aa||y!==C){fn.setValue(ee,"projectionMatrix",C.projectionMatrix),fn.setValue(ee,"viewMatrix",C.matrixWorldInverse);const hn=fn.map.cameraPosition;hn!==void 0&&hn.setValue(ee,$e.setFromMatrixPosition(C.matrixWorld)),k.logarithmicDepthBuffer&&fn.setValue(ee,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&fn.setValue(ee,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,or=!0,Ra=!0)}if(me.isSkinnedMesh){fn.setOptional(ee,me,"bindMatrix"),fn.setOptional(ee,me,"bindMatrixInverse");const hn=me.skeleton;hn&&(k.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),fn.setValue(ee,"boneTexture",hn.boneTexture,Ae),fn.setValue(ee,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lr=ae.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&k.isWebGL2===!0)&&L.update(me,ae,di),(or||gt.receiveShadow!==me.receiveShadow)&&(gt.receiveShadow=me.receiveShadow,fn.setValue(ee,"receiveShadow",me.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Qn.envMap.value=et,Qn.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),or&&(fn.setValue(ee,"toneMappingExposure",_.toneMappingExposure),gt.needsLights&&ye(Qn,Ra),He&&te.fog===!0&&Z.refreshFogUniforms(Qn,He),Z.refreshMaterialUniforms(Qn,te,K,_e,Be),Js.upload(ee,gt.uniformsList,Qn,Ae)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Js.upload(ee,gt.uniformsList,Qn,Ae),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&fn.setValue(ee,"center",me.center),fn.setValue(ee,"modelViewMatrix",me.modelViewMatrix),fn.setValue(ee,"normalMatrix",me.normalMatrix),fn.setValue(ee,"modelMatrix",me.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const hn=te.uniformsGroups;for(let Ca=0,So=hn.length;Ca<So;Ca++)if(k.isWebGL2){const Pa=hn[Ca];Ce.update(Pa,di),Ce.bind(Pa,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function ye(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function ze(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,W,ae){ve.get(C.texture).__webglTexture=W,ve.get(C.depthTexture).__webglTexture=ae;const te=ve.get(C);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ae===void 0,te.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const ae=ve.get(C);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ae=0){P=C,R=W,D=ae;let te=!0,me=null,He=!1,Ze=!1;if(C){const et=ve.get(C);et.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(ee.FRAMEBUFFER,null),te=!1):et.__webglFramebuffer===void 0?Ae.setupRenderTarget(C):et.__hasExternalTextures&&Ae.rebindTextures(C,ve.get(C.texture).__webglTexture,ve.get(C.depthTexture).__webglTexture);const st=C.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ze=!0);const nt=ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?me=nt[W][ae]:me=nt[W],He=!0):k.isWebGL2&&C.samples>0&&Ae.useMultisampledRTT(C)===!1?me=ve.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?me=nt[ae]:me=nt,T.copy(C.viewport),ce.copy(C.scissor),V=C.scissorTest}else T.copy(j).multiplyScalar(K).floor(),ce.copy(G).multiplyScalar(K).floor(),V=$;if(le.bindFramebuffer(ee.FRAMEBUFFER,me)&&k.drawBuffers&&te&&le.drawBuffers(C,me),le.viewport(T),le.scissor(ce),le.setScissorTest(V),He){const et=ve.get(C.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+W,et.__webglTexture,ae)}else if(Ze){const et=ve.get(C.texture),st=W||0;ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,et.__webglTexture,ae||0,st)}B=-1},this.readRenderTargetPixels=function(C,W,ae,te,me,He,Ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ze!==void 0&&(it=it[Ze]),it){le.bindFramebuffer(ee.FRAMEBUFFER,it);try{const et=C.texture,st=et.format,nt=et.type;if(st!==ii&&H.convert(st)!==ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=nt===_a&&(We.has("EXT_color_buffer_half_float")||k.isWebGL2&&We.has("EXT_color_buffer_float"));if(nt!==ir&&H.convert(nt)!==ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===Oi&&(k.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-te&&ae>=0&&ae<=C.height-me&&ee.readPixels(W,ae,te,me,H.convert(st),H.convert(nt),He)}finally{const et=P!==null?ve.get(P).__webglFramebuffer:null;le.bindFramebuffer(ee.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(C,W,ae=0){const te=Math.pow(2,-ae),me=Math.floor(W.image.width*te),He=Math.floor(W.image.height*te);Ae.setTexture2D(W,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,ae,0,0,C.x,C.y,me,He),le.unbindTexture()},this.copyTextureToTexture=function(C,W,ae,te=0){const me=W.image.width,He=W.image.height,Ze=H.convert(ae.format),it=H.convert(ae.type);Ae.setTexture2D(ae,0),ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,ae.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,ae.unpackAlignment),W.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,te,C.x,C.y,me,He,Ze,it,W.image.data):W.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,te,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Ze,W.mipmaps[0].data):ee.texSubImage2D(ee.TEXTURE_2D,te,C.x,C.y,Ze,it,W.image),te===0&&ae.generateMipmaps&&ee.generateMipmap(ee.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(C,W,ae,te,me=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=C.max.x-C.min.x+1,Ze=C.max.y-C.min.y+1,it=C.max.z-C.min.z+1,et=H.convert(te.format),st=H.convert(te.type);let nt;if(te.isData3DTexture)Ae.setTexture3D(te,0),nt=ee.TEXTURE_3D;else if(te.isDataArrayTexture)Ae.setTexture2DArray(te,0),nt=ee.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,te.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,te.unpackAlignment);const ot=ee.getParameter(ee.UNPACK_ROW_LENGTH),At=ee.getParameter(ee.UNPACK_IMAGE_HEIGHT),Et=ee.getParameter(ee.UNPACK_SKIP_PIXELS),un=ee.getParameter(ee.UNPACK_SKIP_ROWS),Jn=ee.getParameter(ee.UNPACK_SKIP_IMAGES),Xt=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;ee.pixelStorei(ee.UNPACK_ROW_LENGTH,Xt.width),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,Xt.height),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,C.min.x),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,C.min.y),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,C.min.z),ae.isDataTexture||ae.isData3DTexture?ee.texSubImage3D(nt,me,W.x,W.y,W.z,He,Ze,it,et,st,Xt.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ee.compressedTexSubImage3D(nt,me,W.x,W.y,W.z,He,Ze,it,et,Xt.data)):ee.texSubImage3D(nt,me,W.x,W.y,W.z,He,Ze,it,et,st,Xt),ee.pixelStorei(ee.UNPACK_ROW_LENGTH,ot),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,At),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,Et),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,un),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,Jn),me===0&&te.generateMipmaps&&ee.generateMipmap(nt),le.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ae.setTextureCube(C,0):C.isData3DTexture?Ae.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ae.setTexture2DArray(C,0):Ae.setTexture2D(C,0),le.unbindTexture()},this.resetState=function(){R=0,D=0,P=null,le.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?wr:zf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wr?zt:Mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iS extends ch{}iS.prototype.isWebGL1Renderer=!0;class rS extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class aS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ll,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=rr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new re;class co{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),a=It(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new ci(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uh extends wa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Zr;const Oa=new re,Jr=new re,Qr=new re,$r=new tt,ka=new tt,dh=new Zt,Gs=new re,Fa=new re,Hs=new re,ud=new tt,ll=new tt,dd=new tt;class sS extends bn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new Xi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new aS(t,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new co(n,3,0,!1)),Zr.setAttribute("uv",new co(n,2,3,!1))}this.geometry=Zr,this.material=e!==void 0?e:new uh,this.center=new tt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),dh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-Qr.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const o=this.center;Vs(Gs.set(-.5,-.5,0),Qr,o,Jr,r,a),Vs(Fa.set(.5,-.5,0),Qr,o,Jr,r,a),Vs(Hs.set(.5,.5,0),Qr,o,Jr,r,a),ud.set(0,0),ll.set(1,0),dd.set(1,1);let s=e.ray.intersectTriangle(Gs,Fa,Hs,!1,Oa);if(s===null&&(Vs(Fa.set(-.5,.5,0),Qr,o,Jr,r,a),ll.set(0,1),s=e.ray.intersectTriangle(Gs,Hs,Fa,!1,Oa),s===null))return;const c=e.ray.origin.distanceTo(Oa);c<e.near||c>e.far||t.push({distance:c,point:Oa.clone(),uv:Yn.getInterpolation(Oa,Gs,Fa,Hs,ud,ll,dd,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Vs(i,e,t,n,r,a){$r.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ka.x=a*$r.x-r*$r.y,ka.y=r*$r.x+a*$r.y):ka.copy($r),i.copy(e),i.x+=ka.x,i.y+=ka.y,i.applyMatrix4(dh)}class Qs extends xn{constructor(e,t,n,r,a,o,s,c,u){super(e,t,n,r,a,o,s,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends wa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fh extends bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const cl=new Zt,fd=new re,hd=new re;class oS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(fd),hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hd),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pd=new Zt,Ba=new re,ul=new re;class lS extends oS{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new re(1,0,0),new re(-1,0,0),new re(0,0,1),new re(0,0,-1),new re(0,1,0),new re(0,-1,0)],this._cubeUps=[new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,0,1),new re(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ba.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ba),ul.copy(n.position),ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ul),n.updateMatrixWorld(),r.makeTranslation(-Ba.x,-Ba.y,-Ba.z),pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd)}}class cS extends fh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new lS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uS extends fh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=md();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function md(){return(typeof performance>"u"?Date:performance).now()}class vd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function lc(i,e,t,n,r,a,o,s){const c=(P,B,y,T)=>[new tt(P/o,1-T/s),new tt(y/o,1-T/s),new tt(y/o,1-B/s),new tt(P/o,1-B/s)],u=c(e+a,t,e+n+a,t+a),d=c(e+n+a,t,e+n*2+a,t+a),h=c(e,t+a,e+a,t+a+r),f=c(e+a,t+a,e+n+a,t+a+r),v=c(e+n+a,t+a,e+n+a*2,t+r+a),x=c(e+n+a*2,t+a,e+n*2+a*2,t+r+a),b=i.attributes.uv,m=[v[3],v[2],v[0],v[1]],p=[h[3],h[2],h[0],h[1]],M=[u[3],u[2],u[0],u[1]],_=[d[0],d[1],d[3],d[2]],w=[f[3],f[2],f[0],f[1]],R=[x[3],x[2],x[0],x[1]],D=[];for(const P of[m,p,M,_,w,R])for(const B of P)D.push(B.x,B.y);b.set(new Float32Array(D)),b.needsUpdate=!0}function Hn(i,e,t,n,r,a){lc(i,e,t,n,r,a,64,64)}function Ol(i,e,t,n,r,a){lc(i,e,t,n,r,a,64,32)}class hr extends pn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class dS extends pn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new ls({side:Si}),this.layer2Material=new ls({side:Kn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new Yt(8,8,8);Hn(e,0,0,8,8,8);const t=new Ut(e,this.layer1Material),n=new Yt(9,9,9);Hn(n,32,0,8,8,8);const r=new Ut(n,this.layer2Material);this.head=new hr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new Yt(8,12,4);Hn(a,16,16,8,12,4);const o=new Ut(a,this.layer1Material),s=new Yt(8.5,12.5,4.5);Hn(s,16,32,8,12,4);const c=new Ut(s,this.layer2Material);this.body=new hr(o,c),this.body.name="body",this.body.add(o,c),this.body.position.y=-6,this.add(this.body);const u=new Yt,d=new Ut(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3:4,d.scale.y=12,d.scale.z=4,Hn(u,40,16,this.slim?3:4,12,4)});const h=new Yt,f=new Ut(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Hn(h,40,32,this.slim?3:4,12,4)});const v=new pn;v.add(d,f),this.modelListeners.push(()=>{v.position.x=this.slim?-.5:-1}),v.position.y=-4,this.rightArm=new hr(d,f),this.rightArm.name="rightArm",this.rightArm.add(v),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const x=new Yt,b=new Ut(x,this.layer1MaterialBiased);this.modelListeners.push(()=>{b.scale.x=this.slim?3:4,b.scale.y=12,b.scale.z=4,Hn(x,32,48,this.slim?3:4,12,4)});const m=new Yt,p=new Ut(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Hn(m,48,48,this.slim?3:4,12,4)});const M=new pn;M.add(b,p),this.modelListeners.push(()=>{M.position.x=this.slim?.5:1}),M.position.y=-4,this.leftArm=new hr(b,p),this.leftArm.name="leftArm",this.leftArm.add(M),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const _=new Yt(4,12,4);Hn(_,0,16,4,12,4);const w=new Ut(_,this.layer1MaterialBiased),R=new Yt(4.5,12.5,4.5);Hn(R,0,32,4,12,4);const D=new Ut(R,this.layer2MaterialBiased),P=new pn;P.add(w,D),P.position.y=-6,this.rightLeg=new hr(w,D),this.rightLeg.name="rightLeg",this.rightLeg.add(P),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const B=new Yt(4,12,4);Hn(B,16,48,4,12,4);const y=new Ut(B,this.layer1MaterialBiased),T=new Yt(4.5,12.5,4.5);Hn(T,0,48,4,12,4);const ce=new Ut(T,this.layer2MaterialBiased),V=new pn;V.add(y,ce),V.position.y=-6,this.leftLeg=new hr(y,ce),this.leftLeg.name="leftLeg",this.leftLeg.add(V),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof hr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class fS extends pn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ls({side:Kn,transparent:!0,alphaTest:1e-5});const e=new Yt(10,16,1);Ol(e,0,0,10,16,1),this.cape=new Ut(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class hS extends pn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ls({side:Kn,transparent:!0,alphaTest:1e-5});const e=new Yt(12,22,4);Ol(e,22,0,10,20,2);const t=new Ut(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new pn,this.leftWing.add(t),this.add(this.leftWing);const n=new Yt(12,22,4);Ol(n,22,0,10,20,2);const r=new Ut(n,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new pn,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class pS extends pn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ls({side:Si});const e=new Yt(8,8,4/3);lc(e,0,0,6,6,1,14,7),this.rightEar=new Ut(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Ut(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const gd=10.8*Math.PI/180;class mS extends pn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new dS,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new fS,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=gd,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new hS,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new pS,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=gd,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ws(i){return i instanceof HTMLImageElement||i instanceof HTMLVideoElement||i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas}function kl(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let o=0;o<n;o++)for(let s=0;s<r;s++){const c=(o+s*n)*4;if(a.data[c+3]!==255)return!0}return!1}function bo(i){return i/64}function _d(i,e,t){if(t){if(kl(i,0,0,e,e))return}else if(kl(i,0,0,e,e/2))return;const n=bo(e),r=(a,o,s,c)=>i.clearRect(a*n,o*n,s*n,c*n);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function vS(i,e){i.save(),i.scale(-1,1);const t=bo(e),n=(r,a,o,s,c,u)=>i.drawImage(i.canvas,r*t,a*t,o*t,s*t,-c*t,u*t,-o*t,s*t);n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52),i.restore()}function gS(i,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=i.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;i.width=r,i.height=r,n.clearRect(0,0,r,r),n.drawImage(e,0,0,r,r/2),vS(n,r),_d(n,i.width,!1)}else i.width=e.width,i.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0,i.width,i.height),_d(n,i.width,!0)}function _S(i){if(i.width===2*i.height)return i.width/64;if(i.width*17===i.height*22)return i.width/22;if(i.width*11===i.height*23)return i.width/46;throw new Error(`Bad cape size: ${i.width}x${i.height}`)}function xS(i,e){const t=_S(e);i.width=64*t,i.height=32*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function bS(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let o=0;o<n;o++)for(let s=0;s<r;s++){const c=(o+s*n)*4;if(!(a.data[c+0]===0&&a.data[c+1]===0&&a.data[c+2]===0&&a.data[c+3]===255))return!1}return!0}function yS(i,e,t,n,r){const a=i.getImageData(e,t,n,r);for(let o=0;o<n;o++)for(let s=0;s<r;s++){const c=(o+s*n)*4;if(!(a.data[c+0]===255&&a.data[c+1]===255&&a.data[c+2]===255&&a.data[c+3]===255))return!1}return!0}function SS(i){const e=bo(i.width),t=i.getContext("2d",{willReadFrequently:!0}),n=(s,c,u,d)=>kl(t,s*e,c*e,u*e,d*e),r=(s,c,u,d)=>bS(t,s*e,c*e,u*e,d*e),a=(s,c,u,d)=>yS(t,s*e,c*e,u*e,d*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function MS(i){if(i.width===i.height*2&&i.height%7===0)return i.height/7;throw new Error(`Bad ears size: ${i.width}x${i.height}`)}function ES(i,e){const t=MS(e);i.width=14*t,i.height=7*t;const n=i.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,i.width,i.height),n.drawImage(e,0,0,e.width,e.height)}function xd(i,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=bo(e.width),n=14*t,r=7*t;i.width=n,i.height=r;const a=i.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,n,r),a.drawImage(e,24*t,0,n,r,0,0,n,r)}async function js(i){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof i=="string"?e.src=i:(i.crossOrigin!==void 0&&(e.crossOrigin=i.crossOrigin),i.referrerPolicy!==void 0&&(e.referrerPolicy=i.referrerPolicy),e.src=i.src)})}const bd={type:"change"},dl={type:"start"},yd={type:"end"},Xs=new Xf,Sd=new $i,wS=Math.cos(70*Z_.DEG2RAD);class TS extends Cr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new re,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dr.ROTATE,MIDDLE:Dr.DOLLY,RIGHT:Dr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",S),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(bd),n.update(),a=r.NONE},this.update=(function(){const L=new re,fe=new Rr().setFromUnitVectors(e.up,new re(0,1,0)),ge=fe.clone().invert(),H=new re,oe=new Rr,Ce=new re,Ge=2*Math.PI;return function(Le=null){const ue=n.object.position;L.copy(ue).sub(n.target),L.applyQuaternion(fe),s.setFromVector3(L),n.autoRotate&&a===r.NONE&&ce(y(Le)),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let Re=n.minAzimuthAngle,Me=n.maxAzimuthAngle;isFinite(Re)&&isFinite(Me)&&(Re<-Math.PI?Re+=Ge:Re>Math.PI&&(Re-=Ge),Me<-Math.PI?Me+=Ge:Me>Math.PI&&(Me-=Ge),Re<=Me?s.theta=Math.max(Re,Math.min(Me,s.theta)):s.theta=s.theta>(Re+Me)/2?Math.max(Re,s.theta):Math.min(Me,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.zoomToCursor&&D||n.object.isOrthographicCamera?s.radius=Ee(s.radius):s.radius=Ee(s.radius*u),L.setFromSpherical(s),L.applyQuaternion(ge),ue.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let Ue=!1;if(n.zoomToCursor&&D){let qe=null;if(n.object.isPerspectiveCamera){const rt=L.length();qe=Ee(rt*u);const xt=rt-qe;n.object.position.addScaledVector(w,xt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const rt=new re(R.x,R.y,0);rt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Ue=!0;const xt=new re(R.x,R.y,0);xt.unproject(n.object),n.object.position.sub(xt).add(rt),n.object.updateMatrixWorld(),qe=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(qe).add(n.object.position):(Xs.origin.copy(n.object.position),Xs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Xs.direction))<wS?e.lookAt(n.target):(Sd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Xs.intersectPlane(Sd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Ue=!0);return u=1,D=!1,Ue||H.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o||Ce.distanceToSquared(n.target)>0?(n.dispatchEvent(bd),H.copy(n.object.position),oe.copy(n.object.quaternion),Ce.copy(n.target),Ue=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",ve),n.domElement.removeEventListener("pointercancel",he),n.domElement.removeEventListener("wheel",A),n.domElement.removeEventListener("pointermove",Ae),n.domElement.removeEventListener("pointerup",he),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",S),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new vd,c=new vd;let u=1;const d=new re,h=new tt,f=new tt,v=new tt,x=new tt,b=new tt,m=new tt,p=new tt,M=new tt,_=new tt,w=new re,R=new tt;let D=!1;const P=[],B={};function y(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function ce(L){c.theta-=L}function V(L){c.phi-=L}const O=(function(){const L=new re;return function(ge,H){L.setFromMatrixColumn(H,0),L.multiplyScalar(-ge),d.add(L)}})(),F=(function(){const L=new re;return function(ge,H){n.screenSpacePanning===!0?L.setFromMatrixColumn(H,1):(L.setFromMatrixColumn(H,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ge),d.add(L)}})(),X=(function(){const L=new re;return function(ge,H){const oe=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;L.copy(Ce).sub(n.target);let Ge=L.length();Ge*=Math.tan(n.object.fov/2*Math.PI/180),O(2*ge*Ge/oe.clientHeight,n.object.matrix),F(2*H*Ge/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(ge*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),F(H*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function _e(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function pe(L){if(!n.zoomToCursor)return;D=!0;const fe=n.domElement.getBoundingClientRect(),ge=L.clientX-fe.left,H=L.clientY-fe.top,oe=fe.width,Ce=fe.height;R.x=ge/oe*2-1,R.y=-(H/Ce)*2+1,w.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ee(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function j(L){h.set(L.clientX,L.clientY)}function G(L){pe(L),p.set(L.clientX,L.clientY)}function $(L){x.set(L.clientX,L.clientY)}function Se(L){f.set(L.clientX,L.clientY),v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const fe=n.domElement;ce(2*Math.PI*v.x/fe.clientHeight),V(2*Math.PI*v.y/fe.clientHeight),h.copy(f),n.update()}function we(L){M.set(L.clientX,L.clientY),_.subVectors(M,p),_.y>0?_e(T()):_.y<0&&K(T()),p.copy(M),n.update()}function De(L){b.set(L.clientX,L.clientY),m.subVectors(b,x).multiplyScalar(n.panSpeed),X(m.x,m.y),x.copy(b),n.update()}function Be(L){pe(L),L.deltaY<0?K(T()):L.deltaY>0&&_e(T()),n.update()}function Xe(L){let fe=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?ce(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?ce(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):X(-n.keyPanSpeed,0),fe=!0;break}fe&&(L.preventDefault(),n.update())}function Ve(){if(P.length===1)h.set(P[0].pageX,P[0].pageY);else{const L=.5*(P[0].pageX+P[1].pageX),fe=.5*(P[0].pageY+P[1].pageY);h.set(L,fe)}}function $e(){if(P.length===1)x.set(P[0].pageX,P[0].pageY);else{const L=.5*(P[0].pageX+P[1].pageX),fe=.5*(P[0].pageY+P[1].pageY);x.set(L,fe)}}function dt(){const L=P[0].pageX-P[1].pageX,fe=P[0].pageY-P[1].pageY,ge=Math.sqrt(L*L+fe*fe);p.set(0,ge)}function Ke(){n.enableZoom&&dt(),n.enablePan&&$e()}function ee(){n.enableZoom&&dt(),n.enableRotate&&Ve()}function lt(L){if(P.length==1)f.set(L.pageX,L.pageY);else{const ge=Q(L),H=.5*(L.pageX+ge.x),oe=.5*(L.pageY+ge.y);f.set(H,oe)}v.subVectors(f,h).multiplyScalar(n.rotateSpeed);const fe=n.domElement;ce(2*Math.PI*v.x/fe.clientHeight),V(2*Math.PI*v.y/fe.clientHeight),h.copy(f)}function We(L){if(P.length===1)b.set(L.pageX,L.pageY);else{const fe=Q(L),ge=.5*(L.pageX+fe.x),H=.5*(L.pageY+fe.y);b.set(ge,H)}m.subVectors(b,x).multiplyScalar(n.panSpeed),X(m.x,m.y),x.copy(b)}function k(L){const fe=Q(L),ge=L.pageX-fe.x,H=L.pageY-fe.y,oe=Math.sqrt(ge*ge+H*H);M.set(0,oe),_.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),_e(_.y),p.copy(M)}function le(L){n.enableZoom&&k(L),n.enablePan&&We(L)}function Ne(L){n.enableZoom&&k(L),n.enableRotate&&lt(L)}function ve(L){n.enabled!==!1&&(P.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Ae),n.domElement.addEventListener("pointerup",he)),xe(L),L.pointerType==="touch"?U(L):Fe(L))}function Ae(L){n.enabled!==!1&&(L.pointerType==="touch"?Z(L):Ie(L))}function he(L){Oe(L),P.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Ae),n.domElement.removeEventListener("pointerup",he)),n.dispatchEvent(yd),a=r.NONE}function Fe(L){let fe;switch(L.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case Dr.DOLLY:if(n.enableZoom===!1)return;G(L),a=r.DOLLY;break;case Dr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;$(L),a=r.PAN}else{if(n.enableRotate===!1)return;j(L),a=r.ROTATE}break;case Dr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;j(L),a=r.ROTATE}else{if(n.enablePan===!1)return;$(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(dl)}function Ie(L){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;Se(L);break;case r.DOLLY:if(n.enableZoom===!1)return;we(L);break;case r.PAN:if(n.enablePan===!1)return;De(L);break}}function A(L){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(L.preventDefault(),n.dispatchEvent(dl),Be(L),n.dispatchEvent(yd))}function S(L){n.enabled===!1||n.enablePan===!1||Xe(L)}function U(L){switch(Te(L),P.length){case 1:switch(n.touches.ONE){case Ir.ROTATE:if(n.enableRotate===!1)return;Ve(),a=r.TOUCH_ROTATE;break;case Ir.PAN:if(n.enablePan===!1)return;$e(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Ir.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(),a=r.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(dl)}function Z(L){switch(Te(L),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;lt(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;We(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;le(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ne(L),n.update();break;default:a=r.NONE}}function J(L){n.enabled!==!1&&L.preventDefault()}function xe(L){P.push(L)}function Oe(L){delete B[L.pointerId];for(let fe=0;fe<P.length;fe++)if(P[fe].pointerId==L.pointerId){P.splice(fe,1);return}}function Te(L){let fe=B[L.pointerId];fe===void 0&&(fe=new tt,B[L.pointerId]=fe),fe.set(L.pageX,L.pageY)}function Q(L){const fe=L.pointerId===P[0].pointerId?P[1]:P[0];return B[fe.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",ve),n.domElement.addEventListener("pointercancel",he),n.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}const AS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class yo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const RS=new ih(-1,1,1,-1,0,1),cc=new Xi;cc.setAttribute("position",new zi([-1,3,0,-1,-1,0,3,-1,0],3));cc.setAttribute("uv",new zi([0,2,0,0,2,0],2));class CS{constructor(e){this._mesh=new Ut(cc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,RS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ph extends yo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$f.clone(e.uniforms),this.material=new Vi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new CS(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Md extends yo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class PS extends yo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class LS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new tt);this._width=n.width,this._height=n.height,t=new Hi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_a}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ph(AS),this.copyPass.material.blending=Bi,this.clock=new hh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Md!==void 0&&(o instanceof Md?n=!0:o instanceof PS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class DS extends yo{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const IS={uniforms:{tDiffuse:{value:null},resolution:{value:new tt(1/1024,1/512)}},vertexShader:`

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
	`};class mh{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const n=t*this.speed;this.animate(e,n),this.animationObjects.forEach((r,a)=>{const o=this.progress0.get(a);r(e,this.progress-o,a)}),this.progress+=n}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Ed extends mh{animate(e){const t=this.progress*2,n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class wd extends mh{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class US extends sS{constructor(e="",t={}){const n=new uh({transparent:!0,alphaTest:1e-5});super(n),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=n,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const n=t.measureText(this.text);e.width=this.margin[3]+n.actualBoundingBoxLeft+n.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+n.actualBoundingBoxAscent+n.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+n.actualBoundingBoxLeft,this.margin[0]+n.actualBoundingBoxAscent);const r=new Qs(e);r.magFilter=Vt,r.minFilter=Vt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class NS{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new uS(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new cS(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new rS,this.camera=new Nn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Vn.enabled=!1,this.renderer=new ch({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Hi(0,0,{depthTexture:new lh(0,0,Oi)})),this.composer=new LS(this.renderer,t),this.renderPass=new DS(this.scene,this.camera),this.fxaaPass=new ph(IS),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new mS,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new pn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new TS(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new hh,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=n=>{n.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",n=>{n.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Qs(this.skinCanvas),this.skinTexture.magFilter=Vt,this.skinTexture.minFilter=Vt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Qs(this.capeCanvas),this.capeTexture.magFilter=Vt,this.capeTexture.minFilter=Vt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Qs(this.earsCanvas),this.earsTexture.magFilter=Vt,this.earsTexture.minFilter=Vt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ws(e))gS(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=SS(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(xd(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return js(e).then(n=>this.loadSkin(n,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ws(e))xS(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return js(e).then(n=>this.loadCape(n,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ws(e))t.textureType==="skin"?xd(this.earsCanvas,e):ES(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return js(e).then(n=>this.loadEars(n,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,so)}loadBackground(e,t){if(Ws(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new xn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return js(e).then(n=>this.loadBackground(n,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new re).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new tt).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new tt).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Rt||e instanceof xn?this.scene.background=e:this.scene.background=new Rt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof bn||(e=new US(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const Xn=Pt({list:[],active:null,ready:!1}),fl=new Map;function Fl(i,e){const t=window.__TAURI__?.core;return t?t.invoke(i,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function qs(){try{Xn.list=await Fl("get_accounts"),Xn.active=await Fl("get_active_account")}catch{}finally{Xn.ready=!0}}function cs(i){return i?i.skin??(i.account_type?.type==="ely_by"?i.username:null):null}async function Bl(i){if(!i)return null;const e=String(i).trim();if(!e||e.startsWith("data:"))return e||null;if(fl.has(e))return fl.get(e);try{const t=await Fl("proxy_skin_png",{source:e});return fl.set(e,t),t}catch{return null}}function OS(i){try{const e=String(i??"").split(",")[1]??"",t=atob(e.slice(0,44));if(t.length<24)return null;const n=o=>t.charCodeAt(o)&255;if(n(1)!==80||n(2)!==78||n(3)!==71)return null;const r=(n(16)<<24|n(17)<<16|n(18)<<8|n(19))>>>0,a=(n(20)<<24|n(21)<<16|n(22)<<8|n(23))>>>0;return!r||!a?null:{width:r,height:a}}catch{return null}}var kS=q('<button title="Toggle the hat/jacket outer layer"> </button>'),FS=q("<canvas></canvas> <!>",1);function uc(i,e){Wt(e,!0);let t=Qe(e,"skin",3,null),n=Qe(e,"cape",3,null),r=Qe(e,"model",3,null),a=Qe(e,"width",3,260),o=Qe(e,"height",3,340),s=Qe(e,"walking",3,!1),c=Qe(e,"autorotate",3,!1),u=Qe(e,"zoom",3,.85),d=Qe(e,"outerLayer",15,!0),h=Qe(e,"showToggle",3,!1),f=de(null),v=null,x,b,m,p=de(null),M=de(null),_=0;function w(V){if(!V)return null;const O=String(V).trim();if(!O)return null;if(/^(https?:|data:)/i.test(O))return O;const F=window.__TAURI__?.core?.convertFileSrc;return F?F(O):O}function R(V){const O=String(V??"").trim().toLowerCase();return O==="slim"?"slim":O==="classic"?"default":"auto-detect"}function D(){v&&((l(p)!==x||R(r())!==m)&&(x=l(p),m=R(r()),l(p)?v.loadSkin(l(p),{model:m}).catch(()=>{}):v.resetSkin()),l(M)!==b&&(b=l(M),l(M)?v.loadCape(l(M)).catch(()=>{}):v.resetCape()))}function P(){const V=v?.playerObject?.skin;if(V)for(const O of[V.head,V.body,V.rightArm,V.leftArm,V.rightLeg,V.leftLeg])O?.outerLayer&&(O.outerLayer.visible=d())}ji(()=>(v=new NS({canvas:l(f),width:a(),height:o(),zoom:u(),fov:55}),v.controls.enablePan=!1,v.controls.enableZoom=!0,v.autoRotate=c(),v.animation=s()?new wd:new Ed,D(),P(),()=>{v?.dispose(),v=null})),qt(()=>{const V=t(),O=n(),F=++_;(async()=>{const X=await Bl(V),_e=await Bl(O);F===_&&(g(p,X??w(V),!0),g(M,_e??w(O),!0))})()}),qt(()=>{D(),P()}),qt(()=>{d(),v&&P()}),qt(()=>{v&&(v.animation=s()?new wd:new Ed)}),qt(()=>{v&&(v.autoRotate=c())}),qt(()=>{v&&v.setSize(a(),o())});var B=FS(),y=pt(B);yf(y,V=>g(f,V),()=>l(f));var T=E(y,2);{var ce=V=>{var O=kS(),F=ne(O);be(()=>{ut(O,1,`rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) ${d()?"text-(--accent)":""}`),je(O,"aria-pressed",d()),ie(F,`Outer layer: ${d()?"on":"off"}`)}),se("click",O,()=>d(!d())),z(V,O)};ke(T,V=>{h()&&V(ce)})}be(()=>En(y,`width:${a()??""}px;height:${o()??""}px;display:block`)),z(i,B),jt()}cn(["click"]);var BS=q('<span class="absolute inset-0"></span> <span class="absolute inset-0"></span>',1),zS=q('<span class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"> </span>'),GS=q("<span><!></span>");function dc(i,e){Wt(e,!0);let t=Qe(e,"source",3,null),n=Qe(e,"size",3,32),r=Qe(e,"letter",3,null),a=Qe(e,"class",3,""),o=de(null),s=de(1),c=0;qt(()=>{const m=t(),p=++c;(async()=>{const M=await Bl(m);if(p!==c)return;g(o,M,!0);const _=M?OS(M):null;g(s,_&&_.height&&_.width?_.height/_.width:1,!0)})()}),Ql(()=>{c+=1});const u=at(()=>(800*l(s)).toFixed(4)),d=at(()=>(100/(8*l(s)-1)).toFixed(4)),h=at(()=>l(o)?`background-image:url(${l(o)});background-size:800% ${l(u)}%;image-rendering:pixelated;`:"");var f=GS(),v=I(f);{var x=m=>{var p=BS(),M=pt(p),_=E(M,2);be(()=>{En(M,`${l(h)}background-position:14.2857% ${l(d)}%`),En(_,`${l(h)}background-position:71.4286% ${l(d)}%`)}),z(m,p)},b=m=>{var p=zS(),M=ne(p,!0);be(()=>{En(p,`font-size:${n()*.45}px`),ie(M,r())}),z(m,p)};ke(v,m=>{l(o)?m(x):r()&&m(b,1)})}be(()=>{ut(f,1,`relative inline-block shrink-0 overflow-hidden ${a()??""}`),En(f,`width:${n()??""}px;height:${n()??""}px`)}),z(i,f),jt()}var HS=q('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),VS=q(`<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40" title="Silently renew this account's token"> </button>`),WS=q('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),jS=q('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),XS=q('<div><div class="flex items-center gap-3"><!> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),qS=q('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),YS=q('<p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),KS=q('<div class="flex flex-col"><!> <!></div>');function vh(i,e){Wt(e,!0);let t=Qe(e,"accounts",19,()=>[]),n=Qe(e,"active",3,null),r=de(""),a=de(!1),o=de(null),s=de(""),c=de(""),u=de(null);function d(y,T){const ce=window.__TAURI__?.core;return ce?ce.invoke(y,T):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function h(y){g(r,"");try{await d("set_active_account",{id:y}),await e.onrefresh?.()}catch(T){g(r,String(T),!0)}}async function f(y){g(r,"");try{await d("remove_account",{id:y}),l(o)===y&&g(o,null),await e.onrefresh?.()}catch(T){g(r,String(T),!0)}}async function v(y){const T=x(y);if(T){g(r,""),g(u,y.id,!0);try{await d(T,{id:y.id}),await e.onrefresh?.()}catch(ce){g(r,String(ce),!0)}finally{g(u,null)}}}function x(y){const T=y.account_type?.type;return T==="microsoft"?"refresh_microsoft_account":T==="ely_by"&&y.refresh_token?"refresh_elyby_account":null}function b(y){if(l(o)===y.id){g(o,null);return}g(o,y.id,!0),g(s,y.skin??"",!0),g(c,y.cape??"",!0)}async function m(y){const T=window.__TAURI__?.dialog?.open;if(!T){g(r,"File picker unavailable in this build.");return}try{const ce=await T({multiple:!1,title:y==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!ce)return;g(y==="skin"?s:c,String(ce),!0),g(r,"")}catch(ce){g(r,String(ce),!0)}}async function p(){g(r,""),g(a,!0);try{await d("set_account_textures",{id:l(o),skin:l(s).trim()||null,cape:l(c).trim()||null}),await e.onrefresh?.(),g(o,null)}catch(y){g(r,String(y),!0)}finally{g(a,!1)}}async function M(){g(s,""),g(c,""),await p()}function _(y){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[y.account_type.type]??"Yggdrasil"}const w=at(()=>t().find(y=>y.id===l(o))??null);var R=KS(),D=I(R);yt(D,17,t,y=>y.id,(y,T)=>{var ce=XS(),V=I(ce),O=I(V);{let k=at(()=>cs(l(T))),le=at(()=>l(T).username[0]?.toUpperCase()??"?");dc(O,{get source(){return l(k)},size:32,get letter(){return l(le)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var F=E(O,2),X=I(F),_e=I(X),K=ne(_e,!0),pe=E(_e,2),Ee=ne(pe,!0),j=E(pe,2);{var G=k=>{var le=HS();z(k,le)};ke(j,k=>{n()?.id===l(T).id&&k(G)})}var $=E(X,2),Se=ne($,!0),we=E(F,2),De=I(we),Be=I(De);_i(Be,{emoji:"🎨"});var Xe=E(De,2);{var Ve=k=>{var le=VS(),Ne=ne(le,!0);be(()=>{le.disabled=l(u)!==null,ie(Ne,l(u)===l(T).id?"Refreshing…":"Refresh token")}),se("click",le,()=>v(l(T))),z(k,le)},$e=at(()=>x(l(T)));ke(Xe,k=>{l($e)&&k(Ve)})}var dt=E(Xe,2);{var Ke=k=>{var le=WS();se("click",le,()=>h(l(T).id)),z(k,le)};ke(dt,k=>{n()?.id!==l(T).id&&k(Ke)})}var ee=E(dt,2),lt=E(V,2);{var We=k=>{var le=jS(),Ne=I(le);{let xe=at(()=>l(w)?.model);uc(Ne,{get skin(){return l(s)},get cape(){return l(c)},get model(){return l(xe)},width:110,height:150})}var ve=E(Ne,2),Ae=I(ve),he=E(I(Ae)),Fe=ne(he,!0),Ie=E(Ae,2),A=E(I(Ie)),S=ne(A,!0),U=E(Ie,2),Z=I(U),J=E(Z,2);be(()=>{ie(Fe,l(s)||"default (Steve/Alex)"),ie(S,l(c)||"none"),Z.disabled=l(a)}),se("click",Ae,()=>m("skin")),se("click",Ie,()=>m("cape")),se("click",Z,p),se("click",J,M),z(k,le)};ke(lt,k=>{l(o)===l(T).id&&l(w)&&k(We)})}be(k=>{ut(ce,1,`border-b border-(--border) px-4 py-2.5 ${n()?.id===l(T).id?"bg-(--accent)/10":""}`),ie(K,l(T).username),ie(Ee,k),ie(Se,l(T).uuid)},[()=>_(l(T))]),se("click",De,()=>b(l(T))),se("click",ee,()=>f(l(T).id)),z(y,ce)},y=>{var T=qS();z(y,T)});var P=E(D,2);{var B=y=>{var T=YS(),ce=ne(T,!0);be(()=>ie(ce,l(r))),z(y,T)};ke(P,y=>{l(r)&&y(B)})}z(i,R),jt()}cn(["click"]);var ZS=q('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <div class="border-t border-(--border)"><!></div></div></div></div>');function JS(i,e){Wt(e,!0);let t=Qe(e,"accounts",19,()=>[]),n=Qe(e,"active",3,null);ji(()=>{const f=hs(()=>e.onclose?.());return()=>ps(f)});var r=ZS(),a=I(r),o=I(a),s=E(I(o),2),c=E(o,2),u=I(c);Rf(u,{get onrefresh(){return e.onrefresh}});var d=E(u,2),h=I(d);vh(h,{get accounts(){return t()},get active(){return n()},get onrefresh(){return e.onrefresh}}),se("click",r,f=>{f.target===f.currentTarget&&e.onclose?.()}),se("click",s,()=>e.onclose?.()),z(i,r),jt()}cn(["click"]);var QS=q('<button><span class="truncate"> </span></button>'),$S=q('<span class="text-[9px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),eM=q('<button><!> <span class="text-[12px] font-medium"> </span> <!></button>'),tM=q('<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]"><dt class="text-(--text-muted)">Profile UUID</dt> <dd class="min-w-0 truncate font-mono"> </dd> <dt class="text-(--text-muted)">Skin source</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Cape</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Renewable token</dt> <dd class="min-w-0 truncate"> </dd></dl></div>'),nM=q('<div class="mt-6 flex flex-wrap gap-2"></div> <!>',1),iM=q(`<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><p class="text-sm font-medium">No accounts yet</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom
              Yggdrasil server — everything lives in the Add Account section.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Add an account</button></div>`),rM=q('<h2 class="text-[16px] font-semibold">Account overview</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The character launches use, with the hat/jacket outer layer included.</p> <!>',1),aM=q('<h2 class="text-[16px] font-semibold">Add account</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.</p> <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),sM=q('<h2 class="text-[16px] font-semibold">Saved accounts</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Set the active profile, renew tokens silently, edit skins — or remove accounts.</p> <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),oM=q('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Accounts sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div></div>');function lM(i,e){Wt(e,!0);const t=[{id:"overview",label:"Overview"},{id:"add",label:"Add Account"},{id:"saved",label:"Saved Accounts"}];let n=de("overview"),r=de(null);const a=at(()=>{const M=Xn.list;return M.find(_=>_.id===l(r))??M.find(_=>_.id===Xn.active?.id)??M[0]??null});let o=de(!0);function s(M){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[M.account_type.type]??"Yggdrasil"}var c=oM(),u=I(c),d=I(u),h=E(d,2);yt(h,21,()=>t,M=>M.id,(M,_)=>{var w=QS(),R=I(w),D=ne(R,!0);be(()=>{ut(w,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${l(n)===l(_).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),je(w,"aria-current",l(n)===l(_).id?"true":void 0),ie(D,l(_).label)}),se("click",w,()=>g(n,l(_).id,!0)),z(M,w)});var f=E(u,2),v=I(f),x=I(v);{var b=M=>{var _=rM(),w=E(pt(_),4);{var R=P=>{var B=nM(),y=pt(B);yt(y,21,()=>Xn.list,V=>V.id,(V,O)=>{var F=eM(),X=I(F);{let j=at(()=>cs(l(O))),G=at(()=>l(O).username[0]?.toUpperCase()??"?");dc(X,{get source(){return l(j)},size:24,get letter(){return l(G)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var _e=E(X,2),K=ne(_e,!0),pe=E(_e,2);{var Ee=j=>{var G=$S();z(j,G)};ke(pe,j=>{Xn.active?.id===l(O).id&&j(Ee)})}be(()=>{ut(F,1,`flex items-center gap-2 rounded border px-2 py-1.5 text-left ${l(a)?.id===l(O).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),je(F,"title",`Preview ${l(O).username??""}`),ie(K,l(O).username)}),se("click",F,()=>g(r,l(O).id,!0)),z(V,F)});var T=E(y,2);{var ce=V=>{var O=tM(),F=I(O);{let $e=at(()=>cs(l(a)));uc(F,{get skin(){return l($e)},get cape(){return l(a).cape},get model(){return l(a).model},width:230,height:310,showToggle:!0,get outerLayer(){return l(o)},set outerLayer(dt){g(o,dt,!0)}})}var X=E(F,2),_e=I(X),K=ne(_e,!0),pe=E(_e,2),Ee=ne(pe,!0),j=E(X,2),G=E(I(j),2),$=ne(G,!0),Se=E(G,4),we=ne(Se,!0),De=E(Se,4),Be=ne(De,!0),Xe=E(De,4),Ve=ne(Xe,!0);be($e=>{ie(K,l(a).username),ie(Ee,$e),je(G,"title",l(a).uuid),ie($,l(a).uuid),je(Se,"title",l(a).skin??"default (Steve/Alex)"),ie(we,l(a).skin?"custom skin":"default (Steve/Alex)"),ie(Be,l(a).cape?"custom cape":"none"),ie(Ve,l(a).refresh_token?"yes — silent refresh available":"no")},[()=>s(l(a))]),z(V,O)};ke(T,V=>{l(a)&&V(ce)})}z(P,B)},D=P=>{var B=iM(),y=E(I(B),4);se("click",y,()=>g(n,"add")),z(P,B)};ke(w,P=>{Xn.list.length?P(R):P(D,-1)})}z(M,_)},m=M=>{var _=aM(),w=E(pt(_),4),R=I(w);Rf(R,{get onrefresh(){return e.onrefresh}}),z(M,_)},p=M=>{var _=sM(),w=E(pt(_),4),R=I(w);vh(R,{get accounts(){return Xn.list},get active(){return Xn.active},get onrefresh(){return e.onrefresh}}),z(M,_)};ke(x,M=>{l(n)==="overview"?M(b):l(n)==="add"?M(m,1):M(p,-1)})}se("click",d,function(...M){e.onback?.apply(this,M)}),z(i,c),jt()}cn(["click"]);var cM=q('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),uM=q('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),dM=q('<p class="text-center text-[11px] text-red-400"> </p>'),fM=q("<option> </option>"),hM=q("<option>No instances yet</option>"),pM=q('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),mM=q('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),vM=q('<p class="mt-2 text-[11px] text-red-400"> </p>'),gM=q('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="flex items-center gap-1.5 rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer"><!> Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),_M=q('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function xM(i,e){Wt(e,!0);let t=Qe(e,"instances",19,()=>[]),n=Qe(e,"active",3,null),r=Qe(e,"gameRunning",3,!1),a=Qe(e,"status",3,"Ready");function o(V,O){const F=window.__TAURI__?.core;return F?F.invoke(V,O):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let c=de(Pt(f())),u=de(""),d=de(""),h=de("");function f(){try{const V=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray(V)?V:[]}catch{return[]}}function v(){localStorage.setItem(s,JSON.stringify(l(c)))}function x(V){V.preventDefault(),g(h,"");const O=l(d).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(O)){g(h,"Address must be a hostname (optionally host:port).");return}g(c,[...l(c),{name:l(u).trim()||O.split(":")[0],address:O}],!0),v(),g(u,""),g(d,"")}function b(V){g(c,l(c).filter((O,F)=>F!==V),!0),v()}let m=de("");qt(()=>{l(m)&&t().some(V=>V.id===l(m))||g(m,t()[0]?.id??"",!0)});const p=at(()=>t().find(V=>V.id===l(m))?.name??"no instance selected");function M(V){!l(m)||r()||e.onlaunch?.(l(m),V.address)}let _=de(""),w=de(!1);async function R(V){const O=window.__TAURI__?.dialog?.open;if(!O){g(_,"File picker unavailable in this build.");return}try{const F=await O({multiple:!1,title:V==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!F)return;g(w,!0),g(_,""),await o("set_account_textures",{id:n().id,skin:V==="skin"?String(F):null,cape:V==="cape"?String(F):null}),await e.onrefresh?.()}catch(F){g(_,String(F),!0)}finally{g(w,!1)}}async function D(){if(n())try{g(w,!0),await o("set_account_textures",{id:n().id,skin:null,cape:null}),await e.onrefresh?.()}catch(V){g(_,String(V),!0)}finally{g(w,!1)}}function P(V){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[V.account_type.type]??"Yggdrasil"}var B=_M(),y=I(B);{var T=V=>{var O=cM(),F=I(O);_i(F,{emoji:"👤",size:30});var X=E(F,6);se("click",X,()=>e.onopenaccounts?.()),z(V,O)},ce=V=>{var O=gM(),F=I(O),X=I(F);xf(X,()=>n()?.id,U=>{{let Z=at(()=>cs(n()));uc(U,{get skin(){return l(Z)},get cape(){return n().cape},get model(){return n().model},width:220,height:300})}});var _e=E(X,2),K=I(_e),pe=ne(K,!0),Ee=E(K,2),j=ne(Ee,!0),G=E(_e,2),$=I(G),Se=E($,2),we=E(Se,2);{var De=U=>{var Z=uM();be(()=>Z.disabled=l(w)),se("click",Z,D),z(U,Z)};ke(we,U=>{(n().cape||n().skin)&&U(De)})}var Be=E(G,2);{var Xe=U=>{var Z=dM(),J=ne(Z,!0);be(()=>ie(J,l(_))),z(U,Z)};ke(Be,U=>{l(_)&&U(Xe)})}var Ve=E(F,2),$e=I(Ve),dt=E(I($e),2),Ke=I(dt);yt(Ke,21,t,U=>U.id,(U,Z)=>{var J=fM(),xe=ne(J,!0),Oe={};be(()=>{ie(xe,l(Z).name),Oe!==(Oe=l(Z).id)&&(J.value=(J.__value=Oe)??"")}),z(U,J)},U=>{var Z=hM();Z.value=Z.__value="",z(U,Z)}),pa(Ke);var ee=E(Ke,2),lt=I(ee);Nt(lt,{name:"log",size:12});var We=E(dt,2),k=ne(We,!0),le=E(We,2),Ne=ne(le,!0),ve=E($e,2),Ae=E(I(ve),2);yt(Ae,19,()=>l(c),U=>U.address,(U,Z,J)=>{var xe=pM(),Oe=I(xe),Te=I(Oe),Q=ne(Te,!0),L=E(Te,2),fe=ne(L,!0),ge=E(Oe,2),H=E(ge,2);be(()=>{ie(Q,l(Z).name),ie(fe,l(Z).address),ge.disabled=!l(m)||r(),je(ge,"title",`Join ${l(Z).address} with ${l(p)}`)}),se("click",ge,()=>M(l(Z))),se("click",H,()=>b(l(J))),z(U,xe)},U=>{var Z=mM();z(U,Z)});var he=E(Ae,2),Fe=I(he),Ie=E(Fe,2),A=E(he,2);{var S=U=>{var Z=vM(),J=ne(Z,!0);be(()=>ie(J,l(h))),z(U,Z)};ke(A,U=>{l(h)&&U(S)})}be(U=>{ie(pe,n().username),ie(j,U),$.disabled=l(w),Se.disabled=l(w),We.disabled=!l(m)||r(),ie(k,r()?"GAME RUNNING…":"LAUNCH GAME"),ie(Ne,r()?a():l(p))},[()=>P(n())]),se("click",$,()=>R("skin")),se("click",Se,()=>R("cape")),ma(Ke,()=>l(m),U=>g(m,U)),se("click",ee,()=>e.onopenconsole?.()),se("click",We,()=>e.onlaunch?.(l(m),null)),kn("submit",he,x),Bt(Fe,()=>l(u),U=>g(u,U)),Bt(Ie,()=>l(d),U=>g(d,U)),z(V,O)};ke(y,V=>{n()?V(ce,-1):V(T)})}z(i,B),jt()}cn(["click"]);var bM=q('<h3 class="text-(--step-heading) font-semibold text-(--fg-1)"> </h3>'),yM=q('<input class="mt-3 h-8 w-full rounded border border-(--border-1) bg-(--bg-3) px-2.5 text-(--step-body) text-(--fg-1) outline-none focus:border-(--accent-1)"/>'),SM=q('<button class="rounded px-3 py-1.5 text-(--step-body) text-(--fg-2) hover:bg-(--bg-3) hover:text-(--fg-1)"> </button>'),MM=q('<div class="fixed inset-0 z-[70] flex items-center justify-center" style="background: var(--scrim)"><div role="alertdialog" aria-modal="true" class="w-[380px] rounded-lg border border-(--border-1) bg-(--bg-2) shadow-2xl animate-[fade-in_120ms_ease-out]"><div class="flex items-start gap-3 p-4"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <div class="min-w-0 flex-1"><!> <p> </p> <!></div></div> <div class="flex items-center justify-end gap-2 border-t border-(--border-1) px-4 py-3"><!> <button class="rounded bg-(--accent-1) px-4 py-1.5 text-(--step-body) font-medium text-(--on-accent) hover:bg-(--accent-1-hover)"> </button></div></div></div>');function EM(i,e){Wt(e,!0);const t={info:{icon:"about",tint:"text-(--accent)"},success:{icon:"success",tint:"text-green-500"},warning:{icon:"warning",tint:"text-(--accent-star)"},error:{icon:"error",tint:"text-rose-400"},confirm:{icon:"help",tint:"text-(--accent)"},prompt:{icon:"edit",tint:"text-(--accent)"}},n=at(()=>li.dialog),r=at(()=>t[l(n)?.variant]??t.info);let a=de("");qt(()=>{l(n),g(a,l(n)?.value??"",!0)});function o(){l(n)?.variant==="prompt"?bs(l(a)):bs(!0)}function s(){l(n)?.variant==="prompt"?bs(null):bs(!1)}function c(f){f.key==="Enter"&&l(n)?.variant!=="prompt"&&(f.preventDefault(),o())}var u=ns(),d=pt(u);{var h=f=>{var v=MM(),x=I(v),b=I(x),m=I(b),p=I(m);{let F=at(()=>l(n).icon||l(r).icon);Nt(p,{get name(){return l(F)},size:17})}var M=E(m,2),_=I(M);{var w=F=>{var X=bM(),_e=ne(X,!0);be(()=>ie(_e,l(n).title)),z(F,X)};ke(_,F=>{l(n).title&&F(w)})}var R=E(_,2),D=ne(R,!0),P=E(R,2);{var B=F=>{var X=yM();dp(X),be(()=>je(X,"placeholder",l(n).placeholder??"")),Bt(X,()=>l(a),_e=>g(a,_e)),z(F,X)};ke(P,F=>{l(n).variant==="prompt"&&F(B)})}var y=E(b,2),T=I(y);{var ce=F=>{var X=SM(),_e=ne(X,!0);be(()=>ie(_e,l(n).cancelLabel??"Cancel")),se("click",X,s),z(F,X)};ke(T,F=>{l(n).variant!=="alert"&&F(ce)})}var V=E(T,2),O=ne(V,!0);be(()=>{je(x,"aria-label",l(n).title||"Alert"),ut(R,1,`mt-1 text-(--step-body) break-words text-(--fg-2) ${l(n).title?"":"font-medium text-(--fg-1)"}`),ie(D,l(n).message),ie(O,l(n).confirmLabel??"OK")}),se("click",v,F=>{F.target===F.currentTarget&&s()}),se("keydown",x,c),se("click",V,o),z(f,v)};ke(d,f=>{l(n)&&f(h)})}z(i,u),jt()}cn(["click","keydown"]);var wM=q('<span class="block truncate text-(--step-body) font-semibold text-(--fg-1)"> </span>'),TM=q('<button title="Click to dismiss"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-(--bg-3)"><!></span> <span class="min-w-0 flex-1"><!> <span class="block text-(--step-meta) break-words text-(--fg-2)"> </span></span> <span class="shrink-0 text-(--step-caption) text-(--fg-2)">✕</span></button>'),AM=q('<div class="pointer-events-none fixed right-4 bottom-4 z-[80] flex w-80 flex-col gap-2"></div>');function RM(i,e){Wt(e,!0);const t={info:{icon:"about",tint:"border-(--accent-1)/50"},success:{icon:"success",tint:"border-green-500/60"},warning:{icon:"warning",tint:"border-(--accent-2)/60"},error:{icon:"error",tint:"border-rose-500/60"}};let n=de(!1);const r=new Map,a=new Set;function o(){if(!l(n))for(const d of li.toasts)a.has(d.id)||(a.add(d.id),r.set(d.id,setTimeout(()=>{a.delete(d.id),r.delete(d.id),zc(d.id)},d.duration)))}function s(){g(n,!0);for(const d of r.values())clearTimeout(d);r.clear(),a.clear()}function c(){g(n,!1),o()}qt(()=>{li.toasts.length,o()});var u=AM();yt(u,21,()=>li.toasts,d=>d.id,(d,h)=>{var f=TM(),v=I(f),x=I(v);Nt(x,{get name(){return(t[l(h).kind]??t.info).icon},size:14});var b=E(v,2),m=I(b);{var p=w=>{var R=wM(),D=ne(R,!0);be(()=>ie(D,l(h).title)),z(w,R)};ke(m,w=>{l(h).title&&w(p)})}var M=E(m,2),_=ne(M,!0);be(()=>{ut(f,1,`pointer-events-auto flex w-full items-start gap-2.5 rounded-lg border ${(t[l(h).kind]??t.info).tint??""} bg-(--bg-2) p-3 text-left shadow-xl animate-[fade-in_120ms_ease-out] hover:bg-(--bg-3)`),ie(_,l(h).message)}),se("click",f,()=>zc(l(h).id)),z(d,f)}),kn("mouseenter",u,s),kn("mouseleave",u,c),z(i,u),jt()}cn(["click"]);var CM=q('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),PM=q('<span class="truncate text-[13px]"> </span>'),LM=q('<button><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button>'),DM=q('<span class="truncate text-[13px]">Add Instance</span>'),IM=q('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),UM=q('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),NM=q('<button role="tab"> </button>'),OM=q('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),kM=q('<div class="mb-4 flex items-center gap-2"><button class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"><!> Add Instance</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance"><!> Install .mrpack</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="flex rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),FM=q('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),BM=q('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),zM=q('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),GM=q("<div> </div>"),HM=q('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),VM=q('<p class="mt-2 text-[12px] text-red-400"> </p>'),WM=q('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),jM=q('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),XM=q('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),qM=q('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button></div> <button><!> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)" aria-live="polite"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <!> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function YM(i,e){Wt(e,!0);let t=de("…"),n=de("instances"),r=de(Pt(tc(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));qt(()=>{Om(l(r)),localStorage.setItem("twilight-theme",l(r)),zm(l(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:Va(l(r))?"dark":"light"}).catch(()=>{})}),Rm();let a=de("Ready"),o=de(!1),s=de(Pt(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));qt(()=>{localStorage.setItem("twilight-mode",l(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:l(s)}).catch(()=>{})});let c=de(localStorage.getItem("twilight-blind-mode")==="true"),u=de(localStorage.getItem("twilight-deaf-mode")==="true");qt(()=>{localStorage.setItem("twilight-blind-mode",String(l(c))),localStorage.setItem("twilight-deaf-mode",String(l(u))),window.__TAURI__?.core.invoke("set_accessibility_config",{blindMode:l(c),deafMode:l(u)}).catch(()=>{})});const d=[{id:"instances",label:"Instances",icon:"instances"},{id:"worlds",label:"Servers & P2P",icon:"worlds"},{id:"downloads",label:"Downloads",icon:"download"},{id:"settings",label:"Settings",icon:"settings"},{id:"accounts",label:"Accounts",icon:"accounts"}],h={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]},f=at(()=>Xn.active);let v=de(!1),x=de(Pt([])),b=de(!1),m=de(""),p=de(!1),M=de(!1),_=de(""),w=de(!1),R=de(""),D=de(null),P=at(()=>l(D)?"edit":l(n)),B=de(null),y=de(null),T=de(!1),ce=de(""),V=de(null),O=de(""),F=de(0),X=de(0),_e=de("");async function K(Y,Pe){return window.__TAURI__.core.invoke(Y,Pe)}function pe(){g(r,Va(l(r))?"twilight-light":"twilight-dark",!0)}async function Ee(){g(b,!0),g(m,"");try{g(x,await K("discover_java_installations"),!0)}catch(Y){g(m,String(Y),!0)}finally{g(b,!1)}}function j(){g(p,!0)}async function G(){if(l(_).trim()){g(w,!0),g(R,"");try{const Y=await K("install_modpack",{pathOrUrl:l(_).trim()});g(M,!1),g(_,""),await he(),Y&&g(k,Y,!0),g(a,"Modpack installed.")}catch(Y){g(R,String(Y),!0)}finally{g(w,!1)}}}let $=de(Pt([])),Se=de(!1),we=de(!1),De=de(null);qt(()=>{l($).length,l(De)&&(l(De).scrollTop=l(De).scrollHeight)});function Be(Y){l($).push(Y),l($).length>5e3&&l($).splice(0,l($).length-5e3)}function Xe(){g($,[],!0)}function Ve(Y){return Y.stream==="stderr"||Y.line.includes("/ERROR]")?"text-rose-400":Y.line.includes("/WARN]")?"text-(--accent-star)":Y.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function $e(){const Y=l($).map(Pe=>Pe.line).join(`
`);try{await navigator.clipboard.writeText(Y),Qi("Logs copied to clipboard.","success")}catch{const Pe=document.createElement("textarea");Pe.value=Y,document.body.append(Pe),Pe.select(),document.execCommand("copy"),Pe.remove()}}async function dt(){if(l(we))try{await K("kill_instance"),Be({stream:"stdout",line:"kill requested"})}catch(Y){Be({stream:"stderr",line:String(Y)})}}let Ke=de(Pt([])),ee=de(""),lt=de(null),We=de(""),k=de(null),le=de(null),Ne=de(""),ve=de(!1);function Ae(){const Y=l(We).trim().toLowerCase();return Y?l(Ke).filter(Pe=>Pe.name.toLowerCase().includes(Y)||Pe.minecraft_version.toLowerCase().includes(Y)||Pe.id.toLowerCase().includes(Y)):l(Ke)}async function he(){try{g(Ke,await K("scan_instances"),!0),g(ee,"")}catch(Y){g(ee,String(Y),!0)}}function Fe(Y){g(k,Y,!0)}async function Ie(Y,Pe=null){if(l(we))return;const Je=l(Ke).find(Ct=>Ct.id===Y),St=Je?Je.name:Y;g(we,!0),g(a,Pe?`Running ${St} → ${Pe}…`:`Running ${St}…`,!0),g(Se,!0);try{const Ct=await K("launch_instance",{instanceId:Y,server:Pe});Be({stream:"stdout",line:`launcher reports exit code ${Ct}`}),await he(),g(a,"Ready")}catch(Ct){console.error("Launch failed:",Ct),Be({stream:"stderr",line:`[ERROR] Launch failed: ${Ct}`}),Qi(`Launch failed: ${Ct}`,"error"),g(a,"Launch failed")}finally{g(we,!1),l(a)!=="Launch failed"&&g(a,"Ready")}}function A(){l(y)&&K("open_path",{path:l(y).instances_dir}).catch(Y=>g(a,String(Y),!0))}function S(Y){l(y)&&K("open_path",{path:[l(y).instances_dir.replace(/\\/g,"/"),Y].join("/")}).catch(Pe=>g(a,String(Pe),!0))}function U(Y){g(Ne,""),g(le,Y,!0)}async function Z(Y){if(!(!l(le)||l(ve))){g(ve,!0),g(Ne,"");try{await K("delete_instance",{instanceId:l(le),toTrash:Y}),l(k)===l(le)&&g(k,null),g(le,null),await he(),g(a,Y?"Instance moved to trash.":"Instance deleted.",!0)}catch(Pe){g(Ne,String(Pe),!0)}finally{g(ve,!1)}}}const J=at(()=>[...new Set(l(Ke).map(Y=>Y.group).filter(Boolean))].sort((Y,Pe)=>Y.localeCompare(Pe)));async function xe(Y){if(!l(ge))return;const Pe=l(ge).name;try{await K("set_instance_group",{instanceId:l(ge).id,group:Y}),await he(),g(a,Y?`Moved ${Pe} to ${Y}.`:`${Pe} is ungrouped.`,!0)}catch(Je){g(a,String(Je),!0)}}async function Oe(){if(!l(ge))return;const Y=l(ge).name;try{const Pe=await K("duplicate_instance",{instanceId:l(ge).id});await he(),g(k,Pe.id,!0),Qi(`Copied ${Y}.`,"success"),g(a,`Copied ${Y}.`)}catch(Pe){g(a,String(Pe),!0),Qi(`Copy failed: ${Pe}`,"error")}}async function Te(){if(!l(ge))return;const Y=window.__TAURI__?.dialog?.save;if(!Y){g(a,"File picker unavailable in this build.");return}try{const Pe=await Y({title:"Export instance",defaultPath:`${l(ge).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Pe)return;const Je=await K("export_instance_zip",{instanceId:l(ge).id,destPath:Pe});g(a,`Exported to ${Je}.`)}catch(Pe){g(a,String(Pe),!0)}}async function Q(){if(l(ge))try{const Y=await K("create_desktop_shortcut",{instanceId:l(ge).id});Qi(`Shortcut created: ${Y}`,"success"),g(a,`Shortcut created: ${Y}`)}catch(Y){g(a,String(Y),!0),Qi(`Shortcut failed: ${Y}`,"error")}}async function L(Y,Pe){g(p,!1),await he(),Y?.id&&g(k,Y.id,!0),g(a,Pe||`Instance ${Y?.name??""} created.`,!0)}function fe(Y){g(D,Y,!0)}const ge=at(()=>l(Ke).find(Y=>Y.id===l(k))??null);let H=de(null),oe=0;qt(()=>{const Y=l(ge);l(D);const Pe=++oe;g(H,null),Y&&K("list_instance_mods",{instanceId:Y.id}).then(Je=>{Pe===oe&&g(H,Je.length,!0)}).catch(()=>{Pe===oe&&g(H,null)})});async function Ce(){try{g(V,await K("get_java_prefs"),!0),g(O,l(V).java_path??"",!0),g(F,l(V).min_memory_mb,!0),g(X,l(V).max_memory_mb,!0),g(_e,""),l(x).length===0&&await Ee()}catch{}}async function Ge(){g(_e,"");try{await K("set_java_prefs",{javaPath:l(O).trim()||null,minMemoryMb:Number(l(F))||0,maxMemoryMb:Number(l(X))||0}),g(_e,"Java settings saved.")}catch(Y){g(_e,String(Y),!0)}}async function N(){g(T,!0);try{g(y,await K("get_storage"),!0)}catch(Y){g(ce,String(Y),!0)}finally{g(T,!1)}}async function Le(Y,Pe){g(T,!0),g(ce,"");try{await K("set_folder_dir",{kind:Y,path:Pe?.trim()||null}),g(y,await K("get_storage"),!0),g(ce,"Folders updated."),(Y==="instances"||Y==="shared")&&(await he(),l(k)&&!l(Ke).some(Je=>Je.id===l(k))&&g(k,null))}catch(Je){g(ce,String(Je),!0)}finally{g(T,!1)}}function ue(Y){K("open_path",{path:Y}).catch(Pe=>g(a,String(Pe),!0))}async function Re(){g(T,!0),g(ce,"");try{await K("clean_staging"),g(ce,"Staging cleaned.")}catch(Y){g(ce,String(Y),!0)}finally{g(T,!1)}}function Me(Y){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[Y.account_type.type]??"Yggdrasil"}ji(()=>{const Y=[],Pe=Je=>{if(Je.key==="Escape"){const $t=Dc();if($t){$t();return}l(lt)?g(lt,null):l(le)?(g(le,null),g(Ne,"")):l(D)?g(D,null):l(k)?g(k,null):l(v)?g(v,!1):l(M)?g(M,!1):l(Se)&&g(Se,!1);return}if(l(lt)||l(le)||l(v)||l(M)||l(D)||l(Se)||Dc()||Je.target?.closest?.("input, textarea, select, [contenteditable]"))return;const Ct=Ae();if(!Ct.length)return;const Ft=Ct.findIndex($t=>$t.id===l(k));let Qt=null;if(Je.key==="ArrowDown"||Je.key==="ArrowRight")Qt=Ft+1;else if(Je.key==="ArrowUp"||Je.key==="ArrowLeft")Qt=Ft<0?0:Ft-1;else if(Je.key==="Enter"&&Ft>=0&&document.activeElement===document.body){Je.preventDefault(),Ie(Ct[Ft].id);return}Qt!=null&&Ct[Qt]&&(Je.preventDefault(),g(k,Ct[Qt].id,!0))};return window.addEventListener("keydown",Pe),(async()=>{try{g(t,await K("get_version"),!0)}catch{g(t,"dev")}try{Y.push(await window.__TAURI__.event.listen("launch-log",Je=>Be(Je.payload))),Y.push(await window.__TAURI__.event.listen("tauri://drag-drop",Je=>{const St=Je.payload?.paths?.[0];St&&St.endsWith(".mrpack")&&(l(M)?g(_,St,!0):g(B,St,!0))}))}catch{}await qs(),await he(),await N();try{const Je=await K("get_startup_launch");Je&&l(Ke).some(St=>St.id===Je)&&Ie(Je)}catch{}})(),()=>Y.forEach(Je=>Je())});var Ue=qM(),qe=I(Ue),rt=I(qe),xt=E(I(rt),2);{var ct=Y=>{var Pe=CM();z(Y,Pe)};ke(xt,Y=>{l(o)&&Y(ct)})}var Mt=E(rt,2),mt=I(Mt);yt(mt,17,()=>d,Y=>Y.id,(Y,Pe)=>{var Je=LM(),St=I(Je),Ct=I(St);Nt(Ct,{get name(){return l(Pe).icon},size:15});var Ft=E(St,2);{var Qt=$t=>{var Bn=PM(),Ln=ne(Bn,!0);be(()=>ie(Ln,l(Pe).label)),z($t,Bn)};ke(Ft,$t=>{l(o)&&$t(Qt)})}be(()=>{ut(Je,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${l(o)?"":"justify-center"} ${l(n)===l(Pe).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),je(Je,"title",l(Pe).label)}),se("click",Je,()=>{g(n,l(Pe).id,!0),g(D,null),g(s,"launcher"),l(Pe).id==="settings"&&(Ce(),l(y)||N())}),z(Y,Je)});var vt=E(mt,2),Lt=I(vt),Jt=I(Lt);Nt(Jt,{name:"new",size:15});var nn=E(Lt,2);{var Tt=Y=>{var Pe=DM();z(Y,Pe)};ke(nn,Y=>{l(o)&&Y(Tt)})}var Ht=E(Mt,2),Fn=I(Ht);{let Y=at(()=>cs(l(f))),Pe=at(()=>l(f)?l(f).username[0]?.toUpperCase():"?");dc(Fn,{get source(){return l(Y)},size:28,get letter(){return l(Pe)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var Dt=E(Fn,2);{var ye=Y=>{var Pe=IM(),Je=I(Pe),St=ne(Je,!0),Ct=E(Je,2),Ft=ne(Ct,!0);be(Qt=>{ie(St,l(f)?l(f).username:"Accounts"),ie(Ft,Qt)},[()=>l(f)?Me(l(f)):"manage & sign in"]),z(Y,Pe)};ke(Dt,Y=>{l(o)&&Y(ye)})}var ze=E(Ht,2),C=ne(ze,!0),W=E(qe,2),ae=I(W),te=I(ae),me=I(te);{var He=Y=>{var Pe=UM(),Je=pt(Pe),St=E(Je,2),Ct=ne(St,!0);be(()=>{je(St,"title",l(D)?.name),ie(Ct,l(D)?.name)}),se("click",Je,()=>g(D,null)),z(Y,Pe)},Ze=Y=>{var Pe=OM(),Je=pt(Pe),St=ne(Je),Ct=E(Je,4);yt(Ct,20,()=>[["launcher","Launcher"],["client","Client"]],yl,(Ft,Qt)=>{var $t=at(()=>Pd(Qt,2));let Bn=()=>l($t)[0],Ln=()=>l($t)[1];var An=NM(),Ei=ne(An,!0);be(()=>{ut(An,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${l(s)===Bn()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),je(An,"aria-selected",l(s)===Bn()),ie(Ei,Ln())}),se("click",An,()=>g(s,Bn(),!0)),z(Ft,An)}),be(()=>ie(St,`TwilightMC Bolide (alpha-v${l(t)??""})`)),z(Y,Pe)};ke(me,Y=>{l(P)==="edit"?Y(He):Y(Ze,-1)})}var it=E(te,2),et=ne(it,!0),st=E(ae,2),nt=I(st);{var ot=Y=>{lM(Y,{onback:()=>g(n,"instances")})},At=Y=>{xM(Y,{get instances(){return l(Ke)},get active(){return l(f)},get gameRunning(){return l(we)},get status(){return l(a)},onlaunch:Ie,onopenconsole:()=>g(Se,!0),get onrefresh(){return qs},onopenaccounts:()=>{g(n,"accounts"),g(s,"launcher")}})},Et=Y=>{Cv(Y,{get instance(){return l(D)},get storage(){return l(y)},get blindMode(){return l(c)},get deafMode(){return l(u)},onback:()=>g(D,null),onopenconsole:()=>g(Se,!0)})},un=Y=>{Ng(Y,{get version(){return l(t)},get storage(){return l(y)},get runtimes(){return l(x)},get scanning(){return l(b)},get javaError(){return l(m)},get storageBusy(){return l(T)},get storageMsg(){return l(ce)},get javaMsg(){return l(_e)},get gameRunning(){return l(we)},onback:()=>g(n,"instances"),onscanjava:Ee,onsaveprefs:Ge,onsavefolder:Le,onopenfolder:ue,oncleanstaging:Re,onopenaccounts:()=>{g(n,"accounts"),g(s,"launcher")},onopenurl:Pe=>K("open_external_url",{url:Pe}).catch(Je=>g(a,String(Je),!0)),get theme(){return l(r)},set theme(Pe){g(r,Pe,!0)},get blindMode(){return l(c)},set blindMode(Pe){g(c,Pe,!0)},get deafMode(){return l(u)},set deafMode(Pe){g(u,Pe,!0)},get javaPath(){return l(O)},set javaPath(Pe){g(O,Pe,!0)},get minMem(){return l(F)},set minMem(Pe){g(F,Pe,!0)},get maxMem(){return l(X)},set maxMem(Pe){g(X,Pe,!0)}})},Jn=Y=>{var Pe=kM(),Je=pt(Pe),St=I(Je),Ct=I(St);Nt(Ct,{name:"new",size:13});var Ft=E(St,2),Qt=I(Ft);Nt(Qt,{name:"folder",size:14});var $t=E(Ft,2),Bn=I($t);Nt(Bn,{name:"package",size:14});var Ln=E($t,2),An=I(Ln);Nt(An,{name:"settings",size:14});var Ei=E(Ln,2),fi=E(Ei,4),hi=I(fi);{var en=zn=>{Nt(zn,{name:"sun",size:15})},wi=at(()=>Va(l(r))),Mo=zn=>{Nt(zn,{name:"moon",size:15})};ke(hi,zn=>{l(wi)?zn(en):zn(Mo,-1)})}var Eh=E(Je,2);{let zn=at(Ae);Mm(Eh,{get instances(){return l(zn)},get error(){return l(ee)},get query(){return l(We)},get selectedId(){return l(k)},get gameRunning(){return l(we)},get menuFor(){return l(lt)},onselect:Fe,onplay:Ie,ontogglemenu:xc=>g(lt,l(lt)===xc?null:xc,!0),onedit:fe,onopenfolder:S,onviewlogs:()=>g(Se,!0),ondelete:U,onclosemenu:()=>g(lt,null),onadd:j})}be(zn=>{Ft.disabled=!l(y),je(Ft,"title",l(y)?l(y).instances_dir:""),je(fi,"title",zn)},[()=>Va(l(r))?"Twilight Light":"Twilight Dark"]),se("click",St,j),se("click",Ft,A),se("click",$t,()=>g(M,!0)),se("click",Ln,()=>{g(n,"settings"),Ce(),l(y)||N()}),Bt(Ei,()=>l(We),zn=>g(We,zn)),se("click",fi,pe),z(Y,Pe)},Xt=Y=>{var Pe=FM(),Je=pt(Pe),St=ne(Je,!0),Ct=E(Je,2),Ft=ne(Ct,!0);be(()=>{ie(St,h[l(n)][0]),ie(Ft,h[l(n)][1])}),z(Y,Pe)};ke(nt,Y=>{l(P)==="accounts"?Y(ot):l(s)==="client"?Y(At,1):l(P)==="edit"&&l(D)?Y(Et,2):l(n)==="settings"?Y(un,3):l(n)==="instances"?Y(Jn,4):Y(Xt,-1)})}var gt=E(st,2),Pr=I(gt),Ot=I(Pr),di=I(Ot),Aa=E(di,2);Nt(Aa,{name:"log",size:13});var or=E(Aa,4);{var Ra=Y=>{var Pe=BM();z(Y,Pe)};ke(or,Y=>{l(we)&&Y(Ra)})}var fn=E(Ot,2),Qn=I(fn),lr=E(Qn,2),hn=E(lr,2),Ca=E(hn,2);{var So=Y=>{var Pe=zM();se("click",Pe,()=>g(Se,!1)),z(Y,Pe)};ke(Ca,Y=>{l(Se)&&Y(So)})}var Pa=E(Pr,2);yt(Pa,21,()=>l($),yl,(Y,Pe)=>{var Je=GM(),St=ne(Je,!0);be(Ct=>{ut(Je,1,`whitespace-pre-wrap break-all ${Ct??""}`),ie(St,l(Pe).line)},[()=>Ve(l(Pe))]),z(Y,Je)},Y=>{var Pe=HM();z(Y,Pe)}),yf(Pa,Y=>g(De,Y),()=>l(De));var fc=E(W,2);{var gh=Y=>{dg(Y,{get instance(){return l(ge)},get storage(){return l(y)},get gameRunning(){return l(we)},get modsCount(){return l(H)},get groups(){return l(J)},onlaunch:()=>Ie(l(ge).id),onkill:dt,onedit:()=>fe(l(ge)),onchangegroup:xe,onopenfolder:()=>S(l(ge).id),onexport:Te,oncopy:Oe,ondelete:()=>U(l(ge).id),onshortcut:Q})};ke(fc,Y=>{l(P)==="instances"&&l(ge)&&Y(gh)})}var hc=E(fc,2);{var _h=Y=>{Ov(Y,{get path(){return l(B)},onclose:()=>g(B,null),oninstalled:async Pe=>{g(B,null),await he(),g(k,Pe,!0),g(a,"Modpack installed.")}})};ke(hc,Y=>{l(B)&&Y(_h)})}var pc=E(hc,2);{var xh=Y=>{JS(Y,{get accounts(){return Xn.list},get active(){return l(f)},onclose:()=>{g(v,!1),qs()},get onrefresh(){return qs}})};ke(pc,Y=>{l(v)&&Y(xh)})}var mc=E(pc,2);{var bh=Y=>{ag(Y,{get groups(){return l(J)},get blindMode(){return l(c)},get deafMode(){return l(u)},onclose:()=>g(p,!1),oncreated:L})};ke(mc,Y=>{l(p)&&Y(bh)})}var vc=E(mc,2);{var yh=Y=>{var Pe=WM(),Je=I(Pe),St=I(Je),Ct=E(I(St),2),Ft=E(St,2),Qt=I(Ft),$t=E(Qt,2),Bn=E($t,2);{var Ln=en=>{var wi=VM(),Mo=ne(wi,!0);be(()=>ie(Mo,l(R))),z(en,wi)};ke(Bn,en=>{l(R)&&en(Ln)})}var An=E(Ft,2),Ei=I(An),fi=E(Ei,2),hi=ne(fi,!0);be(en=>{fi.disabled=en,ie(hi,l(w)?"Installing…":"Install .mrpack")},[()=>l(w)||!l(_).trim()]),se("click",Pe,en=>{en.target===en.currentTarget&&!l(w)&&g(M,!1)}),se("click",Ct,()=>g(M,!1)),kn("dragover",Qt,en=>en.preventDefault()),kn("drop",Qt,en=>{en.preventDefault();const wi=en.dataTransfer?.files?.[0]?.path;wi&&g(_,wi,!0)}),Bt($t,()=>l(_),en=>g(_,en)),se("click",Ei,()=>g(M,!1)),se("click",fi,G),z(Y,Pe)};ke(vc,Y=>{l(M)&&Y(yh)})}var gc=E(vc,2);{var Sh=Y=>{var Pe=XM(),Je=I(Pe),St=E(I(Je),2),Ct=E(I(St)),Ft=ne(Ct,!0),Qt=E(St,2);{var $t=hi=>{var en=jM(),wi=ne(en,!0);be(()=>ie(wi,l(Ne))),z(hi,en)};ke(Qt,hi=>{l(Ne)&&hi($t)})}var Bn=E(Qt,2),Ln=I(Bn),An=E(Ln,2),Ei=I(An);_i(Ei,{emoji:"♻"});var fi=E(An,2);be(()=>{ie(Ft,l(le)),Ln.disabled=l(ve),An.disabled=l(ve),fi.disabled=l(ve)}),se("click",Pe,hi=>{hi.target===hi.currentTarget&&!l(ve)&&g(le,null)}),se("click",Ln,()=>g(le,null)),se("click",An,()=>Z(!0)),se("click",fi,()=>Z(!1)),z(Y,Pe)};ke(gc,Y=>{l(le)&&Y(Sh)})}var _c=E(gc,2);EM(_c,{});var Mh=E(_c,2);RM(Mh,{}),be(()=>{ut(qe,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${l(o)?"w-60":"w-16"}`),ut(vt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${l(o)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),ut(Ht,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${l(o)?"":"justify-center"}`),je(Ht,"title",l(f)?l(f).username:"Manage accounts"),ut(ze,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${l(o)?"":"opacity-0 group-hover/nav:opacity-100"}`),ie(C,l(o)?"«":"»"),ie(et,l(a)),ut(gt,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${l(Se)?"h-48":"h-10"}`),je(Ot,"title",l(Se)?"Collapse console":"Expand console"),ut(di,1,`h-2 w-2 shrink-0 rounded-full ${l(we)?"animate-pulse bg-green-500":"bg-(--border)"}`),Qn.disabled=!l($).length,lr.disabled=!l($).length,hn.disabled=!l(we)}),se("dblclick",rt,()=>g(o,!l(o))),se("click",vt,j),se("click",Ht,()=>{g(n,"accounts"),g(D,null),g(s,"launcher")}),se("click",ze,()=>g(o,!l(o))),se("click",Ot,()=>g(Se,!l(Se))),se("click",Qn,Y=>{Y.stopPropagation(),Xe()}),se("click",lr,Y=>{Y.stopPropagation(),$e()}),se("click",hn,Y=>{Y.stopPropagation(),dt()}),z(i,Ue),jt()}cn(["dblclick","click"]);Xp(YM,{target:document.getElementById("app")});
