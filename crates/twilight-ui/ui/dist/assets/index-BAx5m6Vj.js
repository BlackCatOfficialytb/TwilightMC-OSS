(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const xd=!1;var ro=Array.isArray,_h=Array.prototype.indexOf,Xa=Array.prototype.includes,ao=Array.from,bd=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,xh=Object.getOwnPropertyDescriptors,bh=Object.prototype,yh=Array.prototype,yd=Object.getPrototypeOf,mc=Object.isExtensible;const Sh=()=>{};function Mh(n){for(var e=0;e<n.length;e++)n[e]()}function Sd(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}function Md(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const i of n)if(t.push(i),t.length===e)break;return t}const gn=2,sa=4,so=8,Ed=1<<24,ti=16,si=32,er=64,ul=128,Fl=256,ri=512,en=1024,It=2048,Nn=4096,En=8192,cn=16384,va=32768,Ya=1<<25,oa=65536,Ws=1<<17,Eh=1<<18,ga=1<<19,wh=1<<20,hi=1<<25,js=1<<21,ea=1<<22,Zi=1<<23,gr=Symbol("$state"),wd=Symbol("component"),Th=Symbol("legacy props"),Ah=Symbol(""),Td=Symbol("attributes"),dl=Symbol("class"),fl=Symbol("style"),hl=Symbol("text"),Bs=Symbol("form reset"),rs=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},Rh=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),Ch=1,Ph=2,Ad=4,Lh=8,Dh=16,Ih=1,Uh=4,Nh=8,Oh=16,Fh=1,kh=2,Rd={},$t=Symbol("uninitialized"),Bh="http://www.w3.org/1999/xhtml";function zh(){console.warn("https://svelte.dev/e/derived_inert")}function Gh(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Hh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Cd(n){return n===this.v}function Vh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Pd(n){return!Vh(n,this.v)}function Ld(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Wh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function jh(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Xh(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Yh(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function qh(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Kh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zh(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jh(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qh(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function $h(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ep(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let tp=!1,un=null;function la(n){un=n}function Zt(n,e=!1,t){un={p:un,i:!1,c:null,e:null,s:n,x:null,r:St,l:null}}function Jt(n){var e=un,t=e.e;if(t!==null){e.e=null;for(var i of t)Zd(i)}return e.i=!0,un=e.p,kl(n)}function kl(n={}){return bd(n,wd,{value:!0}),n}function Dd(){return!0}let pr=[];function Id(){var n=pr;pr=[],Mh(n)}function Di(n){if(pr.length===0&&!Ha){var e=pr;queueMicrotask(()=>{e===pr&&Id()})}pr.push(n)}function np(){for(;pr.length>0;)Id()}const ip=-7169;function Vt(n,e){n.f=n.f&ip|e}function Bl(n){(n.f&ri)!==0||n.deps===null?Vt(n,en):Vt(n,Nn)}function Ud(n,e){(n.f&It)!==0?e.set(n,It):(n.f&Nn)!==0&&e.get(n)!==It&&e.set(n,Nn),Vt(n,en)}let vc=!1;function rp(){vc||(vc=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e[Bs]?.()})},{capture:!0}))}function _a(n){var e=gt,t=St;Yn(null),_i(null);try{return n()}finally{Yn(e),_i(t)}}function Nd(n,e,t,i=t){n.addEventListener(e,()=>_a(t));const r=n[Bs];r?n[Bs]=()=>{r(),i(!0)}:n[Bs]=()=>i(!0),rp()}function ap(n,e,t,i){const r=qa;var a=n.filter(v=>!v.settled),o=e.map(r);if(t.length===0&&a.length===0){i(o);return}var s=St,c=sp(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(v=>v.promise)):null;function d(v){if((s.f&cn)===0){c();try{i([...o,...v])}catch(g){fi(g,s)}Xs()}}var h=Od();if(t.length===0){u.then(()=>d([])).finally(h);return}function f(){Promise.all(t.map(v=>op(v))).then(d).catch(v=>fi(v,s)).finally(h)}u?u.then(()=>{if((s.f&cn)!==0){h();return}c(),f(),Xs()}):f()}function sp(){var n=St,e=gt,t=un,i=ut;return function(a=!0){_i(n),Yn(e),la(t),a&&(n.f&cn)===0&&(i?.activate(),i?.apply())}}function Xs(n=!0){_i(null),Yn(null),la(null),n&&ut?.deactivate()}function Od(){var n=St,e=n.b,t=ut,i=!!e?.is_rendered();return e?.update_pending_count(1,t),t.increment(i,n),()=>{e?.update_pending_count(-1,t),t.decrement(i,n)}}function qa(n){var e=gn|It;return St!==null&&(St.f|=ga),{ctx:un,deps:null,effects:null,equals:Cd,f:e,fn:n,reactions:null,rv:0,v:$t,wv:0,parent:St,ac:null}}const Oa=Symbol("obsolete");function op(n,e,t){let i=St;i===null&&Wh();var r=void 0,a=Er($t),o=!gt,s=new Set;return Sp(()=>{var c=St,u=Sd();r=u.promise;try{Promise.resolve(n()).then(u.resolve,v=>{v!==rs&&u.reject(v)}).finally(Xs)}catch(v){u.reject(v),Xs()}var d=ut;if(o){if((c.f&va)!==0)var h=Od();if(i.b?.is_rendered())d.async_deriveds.get(c)?.reject(Oa);else for(const v of s.values())v.reject(Oa);s.add(u),d.async_deriveds.set(c,u)}const f=(v,g=void 0)=>{h?.(),s.delete(u),g!==Oa&&(d.activate(),g?(a.f|=Zi,ca(a,g)):((a.f&Zi)!==0&&(a.f^=Zi),ca(a,v)),d.deactivate())};u.promise.then(f,v=>f(null,v||"unknown"))}),Wl(()=>{for(const c of s)c.reject(Oa)}),new Promise(c=>{function u(d){function h(){d===r?c(a):u(r)}d.then(h,h)}u(r)})}function st(n){const e=qa(n);return nf(e),e}function Fd(n){const e=qa(n);return e.equals=Pd,e}function lp(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)Rn(e[t])}}function zl(n){var e,t=St,i=n.parent;if(!ki&&i!==null&&n.v!==$t&&(i.f&(cn|En))!==0)return zh(),n.v;_i(i);try{lp(n),e=of(n)}finally{_i(t)}return e}function kd(n){var e=zl(n);if(!n.equals(e)&&(n.wv=af(),(!ut?.is_fork||n.deps===null)&&(ut!==null?(ut.capture(n,e,!0),ta?.capture(n,e,!0)):n.v=e,n.deps===null))){Vt(n,en);return}ki||(ni!==null?(Vl()||ut?.is_fork)&&ni.set(n,e):Bl(n))}function cp(n){if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&(e.teardown?.(),e.ac!==null&&_a(()=>{e.ac.abort(rs),e.ac=null}),e.fn!==null&&(e.teardown=Sh),Za(e,0),Xl(e))}function Bd(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&ua(e)}let bo=null,Rr=null,ut=null,ta=null,ni=null,pl=null,Ha=!1,yo=!1,Va=null,zs=null;var gc=0;let up=1;class tr{id=up++;started=!1;linked=!0;prev=null;next=null;async_deriveds=new Map;current=new Map;previous=new Map;#t=new Set;#l=new Set;#e=0;#s=new Map;#n=null;#i=[];#a=[];#r=new Map;#o=new Map;#h=new Set;is_fork=!1;#c=!1;constructor(){Rr===null?bo=Rr=this:(Rr.next=this,this.prev=Rr),Rr=this}#p(){if(this.is_fork)return!0;for(const e of this.#s.keys())if(!this.#g(e))return!0;return!1}#g(e){for(var t=e;t!==null;t=t.parent)if(this.#o.has(t))return!0;return!1}skip_effect(e){this.#o.has(e)||this.#o.set(e,{d:[],m:[]}),this.#h.delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=this.#o.get(e);if(i){this.#o.delete(e);for(var r of i.d)Vt(r,It),t(r);for(r of i.m)Vt(r,Nn),t(r)}this.#h.add(e)}#u(){var e=[];for(const a of this.#i)if(!((a.f&cn)!==0||(a.f&(It|Nn))===0)){for(var t=a,i=!1;t.parent!==null;){t=t.parent;var r=t.f;if((r&(er|si))!==0){if((r&en)===0){i=!0;break}t.f^=en}}i||e.push(t)}return this.#i=[],e}#m(){this.started=!0;for(const[s,c]of this.#r)Vt(s,c),this.schedule(s);this.apply();for(var e=Va=[],t=[],i=zs=[];this.#i.length>0;){gc++>1e3&&(this.#f(),fp());for(const s of this.#u())try{this.#x(s,e,t)}catch(c){throw Hd(s),this.#p()||this.discard(),c}}if(ut=null,i.length>0){var r=tr.ensure();for(const s of i)r.schedule(s)}if(Va=null,zs=null,this.#p()){this.#v(t),this.#v(e);for(const[s,c]of this.#o)Gd(s,c);i.length>0&&ut.#m();return}const a=this.#S();if(a){this.#v(t),this.#v(e),a.#d(this);return}this.#r.clear();for(const s of this.#t)s(this);this.#t.clear(),ta=this,_c(t),_c(e),ta=null,this.#n?.resolve();var o=ut;this.#e===0&&(this.#i.length===0||o!==null)&&this.#f(),o!==null&&(mi.clear(),o.#m())}#x(e,t,i){e.f^=en;for(var r=e.first;r!==null;){var a=r.f,o=(a&(si|er))!==0,s=o&&(a&en)!==0,c=s||(a&En)!==0||this.#o.has(r);if(!c&&r.fn!==null){o?r.f^=en:(a&sa)!==0?t.push(r):ss(r)&&((a&ti)!==0&&this.add_dirty_reaction(r,Nn),ua(r));var u=r.first;if(u!==null){r=u;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}}#S(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&this.#_(e))return e;return null}#_(e){for(const[t,[,i]]of this.current)if(!i&&e.current.has(t))return!0;return!1}#d(e){for(const[i,r]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,r);for(const[i,r]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&r.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(e.#r);const t=i=>{var r=i.reactions;if(r!==null&&!((i.f&gn)!==0&&(i.f&(It|Nn))===0))for(const s of r){var a=s.f;if((a&gn)!==0)t(s);else{var o=s;a&(ea|ti)&&!this.async_deriveds.has(o)&&(this.#r.delete(o),Vt(o,It),this.schedule(o))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),e.#f(),ut=this,this.#m()}#v(e){for(var t=0;t<e.length;t+=1)Ud(e[t],this.#r)}capture(e,t,i=!1){e.v!==$t&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Zi)===0&&(this.current.set(e,[t,i]),ni?.set(e,t)),this.is_fork||(e.v=t)}activate(){ut=this}deactivate(){ut=null,ni=null}flush(){try{yo=!0,ut=this,this.#m()}finally{gc=0,pl=null,Va=null,zs=null,yo=!1,ut=null,ni=null,mi.clear()}}discard(){for(const e of this.#l)e(this);this.#l.clear();for(const e of this.async_deriveds.values())e.reject(Oa);this.#f(),this.#n?.resolve()}register_created_effect(e){this.#a.push(e)}#b(){for(let h=bo;h!==null;h=h.next){var e=h.id<this.id,t=[];for(const[f,[v,g]]of this.current){if(h.current.has(f)){var i=h.current.get(f)[0];if(e&&v!==i)h.current.set(f,[v,g]);else continue}t.push(f)}if(e)for(const[f,v]of this.async_deriveds){const g=h.async_deriveds.get(f);g&&v.promise.then(g.resolve).catch(g.reject)}var r=[...h.current.keys()].filter(f=>!h.current.get(f)[1]);if(!(!h.started||r.length===0)){var a=r.filter(f=>!this.current.has(f));if(a.length===0)e&&h.discard();else if(t.length>0){if(e)for(const f of this.#h)h.unskip_effect(f,v=>{(v.f&(ti|ea))!==0?h.schedule(v):h.#v([v])});h.activate();var o=new Set,s=new Map;for(var c of t)zd(c,a,o,s);s=new Map;var u=[...h.current].filter(([f,v])=>{const g=this.current.get(f);return g?g[0]!==v[0]||g[1]!==v[1]:!0}).map(([f])=>f);if(u.length>0)for(const f of this.#a)(f.f&(cn|En|Ws))===0&&Gl(f,u,s)&&((f.f&(ea|ti))!==0?(Vt(f,It),h.schedule(f)):h.add_dirty_reaction(f,It));if(h.#i.length>0&&!h.#c){h.apply();for(var d of h.#u())h.#x(d,[],[])}h.deactivate()}}}}increment(e,t){if(this.#e+=1,e){let i=this.#s.get(t)??0;this.#s.set(t,i+1)}}decrement(e,t){if(this.#e-=1,e){let i=this.#s.get(t)??0;i===1?this.#s.delete(t):this.#s.set(t,i-1)}this.#c||(this.#c=!0,Di(()=>{this.#c=!1,this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,i]of e)this.add_dirty_reaction(t,i);e.clear()}add_dirty_reaction(e,t){(t===It||this.#r.get(e)!==It)&&this.#r.set(e,t)}oncommit(e){this.#t.add(e)}ondiscard(e){this.#l.add(e)}settled(){return(this.#n??=Sd()).promise}static ensure(){if(ut===null){const e=ut=new tr;!yo&&!Ha&&Di(()=>{e.started||e.flush()})}return ut}apply(){{ni=null;return}}schedule(e){if(pl=e,e.b?.is_pending&&(e.f&(sa|so|Ed))!==0&&(e.f&va)===0){e.b.defer_effect(e);return}this.#i.push(e)}#f(){if(this.linked){var e=this.prev,t=this.next;e===null?bo=t:e.next=t,t===null?Rr=e:t.prev=e,this.linked=!1}}}function dp(n){var e=Ha,t=ta;ta=null,Ha=!0;try{for(var i;;){if(np(),ut===null)return i;ut.flush()}}finally{Ha=e,ta=t}}function fp(){try{Kh()}catch(n){fi(n,pl)}}let Pi=null;function _c(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(cn|En))===0&&ss(i)&&(Pi=new Set,ua(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&$d(i),Pi?.size>0)){mi.clear();for(const r of Pi){if((r.f&(cn|En))!==0)continue;const a=[r];let o=r.parent;for(;o!==null;)Pi.has(o)&&(Pi.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const c=a[s];(c.f&(cn|En))===0&&ua(c)}}Pi.clear()}}Pi=null}}function zd(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const a=r.f;(a&gn)!==0?zd(r,e,t,i):(a&(ea|ti))!==0&&(a&It)===0&&Gl(r,e,i)&&(Vt(r,It),Hl(r))}}function Gl(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Xa.call(e,r))return!0;if((r.f&gn)!==0&&Gl(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Hl(n){ut.schedule(n)}function Gd(n,e){if(!((n.f&si)!==0&&(n.f&en)!==0)){(n.f&It)!==0?e.d.push(n):(n.f&Nn)!==0&&e.m.push(n),Vt(n,en);for(var t=n.first;t!==null;)Gd(t,e),t=t.next}}function Hd(n){Vt(n,en);for(var e=n.first;e!==null;)Hd(e),e=e.next}let Ys=new Set;const mi=new Map;let Vd=!1;function Er(n,e){var t={f:0,v:n,reactions:null,equals:Cd,rv:0,wv:0};return t}function pe(n,e){const t=Er(n);return nf(t),t}function hp(n,e=!1,t=!0){const i=Er(n);return e||(i.equals=Pd),i}function x(n,e,t=!1){gt!==null&&(!ii||(gt.f&Ws)!==0)&&Dd()&&(gt.f&(gn|ti|ea|Ws))!==0&&(vi===null||!vi.has(n))&&$h();let i=t?Pt(e):e;return ca(n,i,zs)}var fr=null,ml=0;function ca(n,e,t=null){if(!n.equals(e)){ki?mi.set(n,e):mi.has(n)||mi.set(n,n.v);var i=tr.ensure();if(i.capture(n,e),(n.f&gn)!==0){const r=n;(n.f&It)!==0&&zl(r),ni===null&&Bl(r)}n.wv=af(),fr=null,ml=0,Wd(n,It,t),fr=null,St!==null&&(St.f&en)!==0&&(St.f&(si|er))===0&&(Gn===null?wp([n]):Gn.push(n)),!i.is_fork&&Ys.size>0&&!Vd&&pp()}return e}function pp(){Vd=!1;for(const n of Ys){(n.f&en)!==0&&Vt(n,Nn);let e;try{e=ss(n)}catch{e=!0}e&&ua(n)}Ys.clear()}function Wa(n){x(n,n.v+1)}function Wd(n,e,t){var i=n.reactions;if(i!==null){var r=i.length;if(ml+=r,ml>1e5&&fr===null&&(fr=new Set),fr!==null){if(fr.has(n))return;fr.add(n)}for(var a=0;a<r;a++){var o=i[a],s=o.f,c=(s&It)===0;if(c&&Vt(o,e),(s&Ws)!==0)Ys.add(o);else if((s&gn)!==0){var u=o;ni?.delete(u),Wd(u,Nn,t)}else if(c){var d=o;(s&ti)!==0&&Pi!==null&&Pi.add(d),t!==null?t.push(d):Hl(d)}}}}function Pt(n){if(typeof n!="object"||n===null||gr in n||wd in n)return n;const e=yd(n);if(e!==bh&&e!==yh)return n;var t=new Map,i=ro(n),r=pe(0),a=xr,o=s=>{if(xr===a)return s();var c=gt,u=xr;Yn(null),Sc(a);var d=s();return Yn(c),Sc(u),d};return i&&t.set("length",pe(n.length)),new Proxy(n,{defineProperty(s,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Jh();var d=t.get(c);return d===void 0?o(()=>{var h=pe(u.value);return t.set(c,h),h}):x(d,u.value,!0),!0},deleteProperty(s,c){var u=t.get(c);if(u===void 0){if(c in s){const d=o(()=>pe($t));t.set(c,d),Wa(r)}}else x(u,$t),Wa(r);return!0},get(s,c,u){if(c===gr)return n;var d=t.get(c),h=c in s;if(d===void 0&&(!h||$r(s,c)?.writable)&&(d=o(()=>{var v=Pt(h?s[c]:$t),g=pe(v);return g}),t.set(c,d)),d!==void 0){var f=l(d);return f===$t?void 0:f}return Reflect.get(s,c,u)},getOwnPropertyDescriptor(s,c){this.has?.(s,c);var u=Reflect.getOwnPropertyDescriptor(s,c),d=t.get(c);if(d!==void 0){var h=l(d);if(h===$t)return;if(u&&"value"in u)u.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return u},has(s,c){if(c===gr)return!0;var u=t.get(c),d=u!==void 0&&u.v!==$t||Reflect.has(s,c);if(u!==void 0||(St!==null||gt!==null)&&(!d||$r(s,c)?.writable)){u===void 0&&(u=o(()=>{var f=d?Pt(s[c]):$t,v=pe(f);return v}),t.set(c,u));var h=l(u);if(h===$t)return!1}return d},set(s,c,u,d){var h=t.get(c),f=c in s;if(i&&c==="length")for(var v=u;v<h.v;v+=1){var g=t.get(v+"");g!==void 0?x(g,$t):v in s&&(g=o(()=>pe($t)),t.set(v+"",g))}if(h===void 0)(!f||$r(s,c)?.writable)&&(h=o(()=>pe(void 0)),x(h,Pt(u)),t.set(c,h));else{f=h.v!==$t;var y=o(()=>Pt(u));x(h,y)}var m=Reflect.getOwnPropertyDescriptor(s,c);if(m?.set&&m.set.call(d,u),!f){if(i&&typeof c=="string"){var p=t.get("length"),M=Number(c);Number.isInteger(M)&&M>=p.v&&x(p,M+1)}Wa(r)}return!0},ownKeys(s){l(r);var c=Reflect.ownKeys(s).filter(h=>{var f=t.get(h);return f===void 0||f.v!==$t});for(var[u,d]of t)d.v!==$t&&!(u in s)&&c.push(u);return c},setPrototypeOf(){Qh()}})}function xc(n){try{if(n!==null&&typeof n=="object"&&gr in n)return n[gr]}catch{}return n}function jd(n,e){return Object.is(xc(n),xc(e))}var bc,Xd,Yd,qd;function mp(){if(bc===void 0){bc=window,Xd=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Yd=$r(e,"firstChild").get,qd=$r(e,"nextSibling").get,mc(n)&&(n[dl]=void 0,n[Td]=null,n[fl]=void 0,n.__e=void 0),mc(t)&&(t[hl]=void 0)}}function Ni(n=""){return document.createTextNode(n)}function Ka(n){return Yd.call(n)}function as(n){return qd.call(n)}function U(n,e){return Ka(n)}function vt(n,e=!1){{var t=Ka(n);return t instanceof Comment&&t.data===""?as(t):t}}function ue(n,e=!1){return Ka(n)}function w(n,e=1,t=!1){let i=n;for(;e--;)i=as(i);return i}function vp(n){n.textContent=""}function Kd(){return!1}function gp(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function _p(n){var e=St;if(e===null)return gt.f|=Zi,n;if((e.f&va)===0&&(e.f&sa)===0)throw n;fi(n,e)}function fi(n,e){if(n===Rd)throw n;if(!(e!==null&&(e.f&cn)!==0)){for(;e!==null;){if((e.f&ul)!==0&&(e.f&(cn|Ya))===0){if((e.f&va)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function xp(n){St===null&&(gt===null&&qh(),Yh()),ki&&Xh()}function bp(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Gi(n,e){var t=St;t!==null&&(t.f&En)!==0&&(n|=En);var i={ctx:un,deps:null,nodes:null,f:n|It|ri,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};ut?.register_created_effect(i);var r=i;if((n&sa)!==0)Va!==null?Va.push(i):tr.ensure().schedule(i);else if(e!==null){try{ua(i)}catch(o){throw Rn(i),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&ga)===0&&(r=r.first,(n&ti)!==0&&(n&oa)!==0&&r!==null&&(r.f|=oa))}if(r!==null&&(r.parent=t,t!==null&&bp(r,t),gt!==null&&(gt.f&gn)!==0&&(n&er)===0)){var a=gt;(a.effects??=[]).push(r)}return i}function Vl(){return gt!==null&&!ii}function Wl(n){const e=Gi(so,null);return Vt(e,en),e.teardown=n,e}function Kt(n){xp();var e=St.f,t=!gt&&(e&si)!==0&&un!==null&&!un.i;if(t){var i=un;(i.e??=[]).push(n)}else return Zd(n)}function Zd(n){return Gi(sa|wh,n)}function yp(n){tr.ensure();const e=Gi(er|ga,n);return(t={})=>new Promise(i=>{t.outro?_r(e,()=>{Rn(e),i(void 0)}):(Rn(e),i(void 0))})}function Jd(n){return Gi(sa,n)}function Sp(n){return Gi(ea|ga,n)}function jl(n,e=0){return Gi(so|e,n)}function we(n,e=[],t=[],i=[]){ap(i,e,t,r=>{Gi(so,()=>{n(...r.map(l))})})}function oo(n,e=0){var t=Gi(ti|e,n);return t}function Hn(n){return Gi(si|ga,n)}function Qd(n){var e=n.teardown;if(e!==null){const t=ki,i=gt;yc(!0),Yn(null);try{e.call(null)}catch(r){fi(r,n.parent)}finally{yc(t),Yn(i)}}}function Xl(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&_a(()=>{r.abort(rs)});var i=t.next;(t.f&er)!==0?t.parent=null:Rn(t,e),t=i}}function Mp(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&si)===0&&Rn(e),e=t}}function Rn(n,e=!0){var t=!1;(e||(n.f&Eh)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Ep(n.nodes.start,n.nodes.end),t=!0),n.f|=Ya,Xl(n,e&&!t),Za(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)a.stop();Qd(n),n.f^=Ya,n.f|=cn;var r=n.parent;r!==null&&r.first!==null&&$d(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Ep(n,e){for(;n!==null;){var t=n===e?null:as(n);n.remove(),n=t}}function $d(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function _r(n,e,t=!0){var i=[];n.f|=Fl,ef(n,i,!0);var r=()=>{t&&Rn(n),e&&e()},a=i.length;if(a>0){var o=()=>--a||r();for(var s of i)s.out(o)}else r()}function ef(n,e,t){if((n.f&En)===0){n.f^=En;var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&e.push(s);for(var r=n.first;r!==null;){var a=r.next;if((r.f&er)===0){var o=(r.f&oa)!==0||(r.f&si)!==0&&(n.f&ti)!==0;ef(r,e,o?t:!1)}r=a}}}function qs(n){n.f&=~Fl,tf(n,!0)}function tf(n,e){if((n.f&Fl)===0&&(n.f&En)!==0){n.f^=En,(n.f&en)===0&&(Vt(n,It),tr.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&oa)!==0||(t.f&si)!==0;tf(t,r?e:!1),t=i}var a=n.nodes&&n.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function Yl(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:as(t);e.append(t),t=r}}let ki=!1;function yc(n){ki=n}let gt=null,ii=!1;function Yn(n){gt=n}let St=null;function _i(n){St=n}let vi=null;function nf(n){gt!==null&&((gt.f&js)!==0||(gt.f&gn)!==0)&&(vi??=new Set).add(n)}let An=null,In=0,Gn=null;function wp(n){Gn=n}let rf=1,mr=0,xr=mr;function Sc(n){xr=n}function af(){return++rf}function ss(n){var e=n.f;if((e&It)!==0)return!0;if((e&Nn)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var a=t[r];if(ss(a)&&kd(a),a.wv>n.wv)return!0}(e&ri)!==0&&ni===null&&Vt(n,en)}return!1}function sf(n,e,t=!0){var i=n.reactions;if(i!==null&&!(vi!==null&&vi.has(n)))for(var r=0;r<i.length;r++){var a=i[r];(a.f&gn)!==0?sf(a,e,!1):e===a&&(t?Vt(a,It):(a.f&en)!==0&&Vt(a,Nn),Hl(a))}}function of(n){var e=An,t=In,i=Gn,r=gt,a=vi,o=un,s=ii,c=xr,u=n.f;An=null,In=0,Gn=null,gt=(u&(si|er))===0?n:null,vi=null,la(n.ctx),ii=!1,xr=++mr,n.ac!==null&&(_a(()=>{n.ac.abort(rs)}),n.ac=null);try{n.f|=js;var d=n.fn,h=d();n.f|=va;var f=Mc(n);if(Dd()&&Gn!==null&&!ii&&f!==null&&(n.f&(gn|Nn|It))===0)for(var v=0;v<Gn.length;v++)sf(Gn[v],n);if(r!==null&&r!==n){if(mr++,r.deps!==null)for(let g=0;g<t;g+=1)r.deps[g].rv=mr;if(e!==null)for(const g of e)g.rv=mr;Gn!==null&&(i===null?i=Gn:i.push(...Gn))}return(n.f&Zi)!==0&&(n.f^=Zi),h}catch(g){return Mc(n),_p(g)}finally{n.f^=js,An=e,In=t,Gn=i,gt=r,vi=a,la(o),ii=s,xr=c}}function Mc(n){var e=n.deps,t=ut?.is_fork;if(An!==null){var i;if(t||Za(n,In),e!==null&&In>0)for(e.length=In+An.length,i=0;i<An.length;i++)e[In+i]=An[i];else n.deps=e=An;if(Vl()&&(n.f&ri)!==0)for(i=In;i<e.length;i++)(e[i].reactions??=[]).push(n)}else!t&&e!==null&&In<e.length&&(Za(n,In),e.length=In);return e}function Tp(n,e){let t=e.reactions;if(t!==null){var i=_h.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&gn)!==0&&(An===null||!Xa.call(An,e))){var a=e;(a.f&ri)!==0&&(a.f^=ri),a.v!==$t&&Bl(a),a.ac!==null&&_a(()=>{a.ac.abort(rs),a.ac=null,Vt(a,It)}),cp(a),Za(a,0)}}function Za(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)Tp(n,t[i])}function ua(n){var e=n.f;if((e&cn)===0){Vt(n,en);var t=St;St=n;try{(e&(ti|Ed))!==0?Mp(n):Xl(n),Qd(n);var i=of(n);n.teardown=typeof i=="function"?i:null,n.wv=rf;var r;xd&&tp&&(n.f&It)!==0&&n.deps}finally{St=t}}}async function Ap(){await Promise.resolve(),dp()}function l(n){var e=n.f,t=(e&gn)!==0;if(gt!==null&&!ii){var i=St!==null&&(St.f&cn)!==0;if(!i&&(vi===null||!vi.has(n))){var r=gt.deps;if((gt.f&js)!==0)n.rv<mr&&(n.rv=mr,An===null&&r!==null&&r[In]===n?In++:An===null?An=[n]:An.push(n));else{gt.deps??=[],Xa.call(gt.deps,n)||gt.deps.push(n);var a=n.reactions;a===null?n.reactions=[gt]:Xa.call(a,gt)||a.push(gt)}}}if(ki&&mi.has(n))return mi.get(n);if(t){var o=n;if(ki){var s=o.v;return((o.f&en)===0&&o.reactions!==null||cf(o))&&(s=zl(o)),mi.set(o,s),s}var c=(o.f&ri)===0&&!ii&&gt!==null&&(gt.f&ri)!==0,u=(o.f&va)===0;ss(o)&&(c&&(o.f|=ri),kd(o)),c&&!u&&(Bd(o),lf(o))}if(ni?.has(n))return ni.get(n);if((n.f&Zi)!==0)throw n.v;return n.v}function lf(n){if(n.f|=ri,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:Xa.call(e,n)||e.push(n),(t.f&gn)!==0&&(t.f&ri)===0&&(Bd(t),lf(t))}}function cf(n){if(n.v===$t)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(mi.has(e)||(e.f&gn)!==0&&cf(e))return!0;return!1}function xa(n){var e=ii;try{return ii=!0,n()}finally{ii=e}}const Rp=["touchstart","touchmove"];function Cp(n){return Rp.includes(n)}const Fa=Symbol("events"),uf=new Set,vl=new Set;function Pp(n,e,t,i={}){function r(a){if(i.capture||gl.call(e,a),!a.cancelBubble)return _a(()=>t?.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(r.__removed=!1,Di(()=>{r.__removed||e.addEventListener(n,r,i)})):e.addEventListener(n,r,i),r}function gi(n,e,t,i,r){var a={capture:i,passive:r},o=Pp(n,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Wl(()=>{o.__removed=!0,e.removeEventListener(n,o,a)})}function ce(n,e,t){(e[Fa]??={})[n]=t}function _n(n){for(var e=0;e<n.length;e++)uf.add(n[e]);for(var t of vl)t(n)}let So=null,Mo=!1;function gl(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],a=r[0]||n.target;So=n,Mo||(Mo=!0,setTimeout(()=>{Mo=!1,So=null}));var o=0,s=So===n&&n[Fa];if(s){var c=r.indexOf(s);if(c!==-1&&(e===document||e===window)){n[Fa]=e;return}var u=r.indexOf(e);if(u===-1)return;c<=u&&(o=c)}if(a=r[o]||n.target,a!==e){bd(n,"currentTarget",{configurable:!0,get(){return a||t}});var d=gt,h=St;Yn(null),_i(null);try{for(var f,v=[];a!==null&&a!==e;){try{var g=a[Fa]?.[i];g!=null&&(!a.disabled||n.target===a)&&g.call(a,n)}catch(y){f?v.push(y):f=y}if(n.cancelBubble)break;o++,a=o<r.length?r[o]:null}if(f){for(let y of v)queueMicrotask(()=>{throw y});throw f}}finally{n[Fa]=e,delete n.currentTarget,Yn(d),_i(h)}}}const Lp=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function Dp(n){return Lp?.createHTML(n)??n}function Ip(n){var e=gp("template");return e.innerHTML=Dp(n.replaceAll("<!>","<!---->")),e.content}function Ks(n,e){var t=St;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function re(n,e){var t=(e&Fh)!==0,i=(e&kh)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=Ip(a?n:"<!>"+n),t||(r=Ka(r)));var o=i||Xd?document.importNode(r,!0):r.cloneNode(!0);if(t){var s=Ka(o),c=o.lastChild;Ks(s,c)}else Ks(o,o);return o}}function ur(n=""){{var e=Ni(n+"");return Ks(e,e),e}}function Zs(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Ni();return n.append(e,t),Ks(e,t),n}function W(n,e){n!==null&&n.before(e)}function Up(n){let e=0,t=Er(0),i;return()=>{Vl()&&(l(t),jl(()=>(e===0&&(i=xa(()=>n(()=>Wa(t)))),e+=1,()=>{Di(()=>{e-=1,e===0&&(i?.(),i=void 0,Wa(t))})})))}}var Np=oa|ga;function Op(n,e,t,i){new Fp(n,e,t,i)}class Fp{parent;is_pending=!1;transform_error;#t;#l=null;#e;#s;#n;#i=null;#a=null;#r=null;#o=null;#h=0;#c=0;#p=!1;#g=new Map;#u=null;#m=Up(()=>(this.#u=Er(this.#h),()=>{this.#u=null}));constructor(e,t,i,r){this.#t=e,this.#e=t,this.#s=a=>{var o=St;o.b=this,o.f|=ul,i(a)},this.parent=St.b,this.transform_error=r??this.parent?.transform_error??(a=>a),this.#n=oo(()=>{this.#b()},Np)}#x(){try{this.#i=Hn(()=>this.#s(this.#t))}catch(e){this.error(e)}}#S(e){const t=this.#e.failed,{reset:i,invoke_onerror:r}=this.#_(e);Di(r),t&&(this.#r=Hn(()=>{t(this.#t,()=>e,()=>i)}))}#_(e){var t=!1,i=!1;const r=()=>{if(!this.#d()){if(t){Hh();return}t=!0,i&&ep(),this.#r!==null&&_r(this.#r,()=>{this.#r=null}),this.#y(()=>{this.#b()})}};return{reset:r,invoke_onerror:()=>{if(!this.#d())try{i=!0,this.#e.onerror?.(e,r),i=!1}catch(o){fi(o,this.#n&&this.#n.parent)}}}}#d(){return(this.#n.f&(cn|Ya))!==0}#v(){const e=this.#e.pending;e&&(this.is_pending=!0,this.#a=Hn(()=>e(this.#t)),Di(()=>{if(!this.#d()){var t=this.#o=document.createDocumentFragment(),i=Ni(),r=!1;if(t.append(i),this.#i=this.#y(()=>{try{return Hn(()=>this.#s(i))}catch(a){try{this.error(a),r=!0}catch(o){fi(o,this.#n.parent)}return null}}),this.#i===null){this.#o=null,r&&this.#f(ut);return}this.#c===0&&(this.#t.before(t),this.#o=null,_r(this.#a,()=>{this.#a=null}),this.#f(ut))}}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#h=0,this.#i=Hn(()=>{this.#s(this.#t)}),this.#c>0){var e=this.#o=document.createDocumentFragment();Yl(this.#i,e);const t=this.#e.pending;this.#a=Hn(()=>t(this.#t))}else this.#f(ut)}catch(t){this.error(t)}}#f(e){this.is_pending=!1,e.transfer_reactions(this.#g)}defer_effect(e){Ud(e,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#e.pending}#y(e){var t=St,i=gt,r=un;_i(this.#n),Yn(this.#n),la(this.#n.ctx);try{return tr.ensure(),e()}finally{_i(t),Yn(i),la(r)}}#M(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#M(e,t);return}this.#c+=e,this.#c===0&&(this.#f(t),this.#a&&_r(this.#a,()=>{this.#a=null}),this.#o&&(this.#t.before(this.#o),this.#o=null))}update_pending_count(e,t){this.#M(e,t),this.#h+=e,!(!this.#u||this.#p)&&(this.#p=!0,Di(()=>{this.#p=!1,this.#u&&ca(this.#u,this.#h)}))}get_effect_pending(){return this.#m(),l(this.#u)}error(e){if(e===Rd||!this.#e.onerror&&!this.#e.failed)throw e;ut?.is_fork?(this.#i&&ut.skip_effect(this.#i),this.#a&&ut.skip_effect(this.#a),this.#r&&ut.skip_effect(this.#r),ut.oncommit(()=>{this.#d()||this.#E(e)})):this.#E(e)}#E(e){this.#i&&(Rn(this.#i),this.#i=null),this.#a&&(Rn(this.#a),this.#a=null),this.#r&&(Rn(this.#r),this.#r=null);let t=this.#e.failed;const i=r=>{if(this.#d())return;const{reset:a,invoke_onerror:o}=this.#_(r);o(),t&&!this.#d()&&(this.#r=this.#y(()=>{try{return Hn(()=>{var s=St;s.b=this,s.f|=ul,t(this.#t,()=>r,()=>a)})}catch(s){return fi(s,this.#n.parent),null}}))};Di(()=>{if(!this.#d()){var r;try{r=this.transform_error(e)}catch(a){fi(a,this.#n&&this.#n.parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,a=>fi(a,this.#n&&this.#n.parent)):i(r)}})}}function de(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[hl]??=n.nodeValue)&&(n[hl]=t,n.nodeValue=`${t}`)}function kp(n,e){return Bp(n,e)}const cs=new Map;function Bp(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:o=!0,transformError:s}){mp();var c=void 0,u=yp(()=>{var d=t??e.appendChild(Ni());Op(d,{pending:()=>{}},v=>{Zt({});var g=un;a&&(g.c=a),r&&(i.$$events=r),c=n(v,i)||kl(),Jt()},s);var h=new Set,f=v=>{for(var g=0;g<v.length;g++){var y=v[g];if(!h.has(y)){h.add(y);var m=Cp(y);for(const _ of[e,document]){var p=cs.get(_);p===void 0&&(p=new Map,cs.set(_,p));var M=p.get(y);M===void 0?(_.addEventListener(y,gl,{passive:m}),p.set(y,1)):p.set(y,M+1)}}}};return f(ao(uf)),vl.add(f),()=>{for(var v of h)for(const m of[e,document]){var g=cs.get(m),y=g.get(v);--y==0?(m.removeEventListener(v,gl),g.delete(v),g.size===0&&cs.delete(m)):g.set(v,y)}vl.delete(f),d!==t&&d.parentNode?.removeChild(d)}});return zp.set(c,u),c}let zp=new WeakMap;class df{anchor;#t=new Map;#l=new Map;#e=new Map;#s=new Set;#n=!0;constructor(e,t=!0){this.anchor=e,this.#n=t}#i=e=>{if(this.#t.has(e)){var t=this.#t.get(e),i=this.#l.get(t);if(i)qs(i),this.#s.delete(t);else{var r=this.#e.get(t);r&&(qs(r.effect),this.#l.set(t,r.effect),this.#e.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,o]of this.#t){if(this.#t.delete(a),a===e)break;const s=this.#e.get(o);s&&(Rn(s.effect),this.#e.delete(o))}for(const[a,o]of this.#l){if(a===t||this.#s.has(a))continue;const s=()=>{if(Array.from(this.#t.values()).includes(a)){var u=document.createDocumentFragment();Yl(o,u),u.append(Ni()),this.#e.set(a,{effect:o,fragment:u})}else Rn(o);this.#s.delete(a),this.#l.delete(a)};this.#n||!i?(this.#s.add(a),_r(o,s,!1)):s()}}};#a=e=>{this.#t.delete(e);const t=Array.from(this.#t.values());for(const[i,r]of this.#e)t.includes(i)||(Rn(r.effect),this.#e.delete(i))};ensure(e,t){var i=ut,r=Kd();if(t&&!this.#l.has(e)&&!this.#e.has(e))if(r){var a=document.createDocumentFragment(),o=Ni();a.append(o),this.#e.set(e,{effect:Hn(()=>t(o)),fragment:a})}else this.#l.set(e,Hn(()=>t(this.anchor)));if(this.#t.set(i,e),r){for(const[s,c]of this.#l)s===e?i.unskip_effect(c):i.skip_effect(c);for(const[s,c]of this.#e)s===e?i.unskip_effect(c.effect):i.skip_effect(c.effect);i.oncommit(this.#i),i.ondiscard(this.#a)}else this.#i(i)}}function ke(n,e,t=!1){var i=new df(n),r=t?oa:0;function a(o,s){i.ensure(o,s)}oo(()=>{var o=!1;e((s,c=0)=>{o=!0,a(c,s)}),o||a(-1,null)},r)}const Gp=Symbol("NaN");function ff(n,e,t){var i=new df(n);oo(()=>{var r=e();r!==r&&(r=Gp),i.ensure(r,t)})}function _l(n,e){return e}function Hp(n,e,t){for(var i=[],r=e.length,a,o=e.length,s=0;s<r;s++){let h=e[s];_r(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var f=n.outrogroups;xl(n,ao(a.done)),f.delete(a),f.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=i.length===0&&t!==null&&n.pending.size===0;if(c){var u=t,d=u.parentNode;vp(d),d.append(u),n.items.clear()}xl(n,e,!c)}else a={pending:new Set(e),done:new Set},(n.outrogroups??=new Set).add(a)}function xl(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const s of o)i.add(n.items.get(s).e)}for(var r=0;r<e.length;r++){var a=e[r];if(i?.has(a)){a.f|=hi;const o=document.createDocumentFragment();Yl(a,o)}else Rn(e[r],t)}}var Ec;function At(n,e,t,i,r,a=null){var o=n,s=new Map,c=(e&Ad)!==0;if(c){var u=n;o=u.appendChild(Ni())}var d=null,h=Fd(()=>{var M=t();return ro(M)?M:M==null?[]:ao(M)}),f=new Map,v=!0;function g(M){if((p.effect.f&cn)===0){p.pending.delete(M);var _=l(h);p.fallback=d,Vp(p,_,o,e,i),d!==null&&(_.length===0?(d.f&hi)===0?qs(d):(d.f^=hi,ka(d,null,o)):_r(d,()=>{d=null}))}}function y(M){p.pending.delete(M)}var m=oo(()=>{for(var M=l(h),_=M.length,E=new Set,C=ut,D=Kd(),P=0;P<_;P+=1){var k=M[P],b=i(k,P),T=v?null:s.get(b);T?(T.v&&ca(T.v,k),T.i&&ca(T.i,P),D&&C.unskip_effect(T.e)):(T=Wp(s,v?o:Ec??=Ni(),k,b,P,r,e,t),v||(T.e.f|=hi),s.set(b,T)),E.add(b)}if(_===0&&a&&!d&&(v?d=Hn(()=>a(o)):(d=Hn(()=>a(Ec??=Ni())),d.f|=hi)),_>E.size&&jh(),!v)if(f.set(C,E),D){for(const[oe,H]of s)E.has(oe)||C.skip_effect(H.e);C.oncommit(g),C.ondiscard(y)}else g(C);l(h)}),p={effect:m,items:s,pending:f,outrogroups:null,fallback:d};v=!1}function Aa(n){for(;n!==null&&(n.f&si)===0;)n=n.next;return n}function Vp(n,e,t,i,r){var a=(i&Lh)!==0,o=e.length,s=n.items,c=Aa(n.effect.first),u,d=null,h,f=[],v=[],g,y,m,p;if(a)for(p=0;p<o;p+=1)g=e[p],y=r(g,p),m=s.get(y).e,(m.f&hi)===0&&(m.nodes?.a?.measure(),(h??=new Set).add(m));for(p=0;p<o;p+=1){if(g=e[p],y=r(g,p),m=s.get(y).e,n.outrogroups!==null)for(const T of n.outrogroups)T.pending.delete(m),T.done.delete(m);if((m.f&En)!==0&&(qs(m),a&&(m.nodes?.a?.unfix(),(h??=new Set).delete(m))),(m.f&hi)!==0)if(m.f^=hi,m===c)ka(m,null,t);else{var M=d?d.next:c;m===n.effect.last&&(n.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Vi(n,d,m),Vi(n,m,M),ka(m,M,t),d=m,f=[],v=[],c=Aa(d.next);continue}if(m!==c){if(u!==void 0&&u.has(m)){if(f.length<v.length){var _=v[0],E;d=_.prev;var C=f[0],D=f[f.length-1];for(E=0;E<f.length;E+=1)ka(f[E],_,t);for(E=0;E<v.length;E+=1)u.delete(v[E]);Vi(n,C.prev,D.next),Vi(n,d,C),Vi(n,D,_),c=_,d=D,p-=1,f=[],v=[]}else u.delete(m),ka(m,c,t),Vi(n,m.prev,m.next),Vi(n,m,d===null?n.effect.first:d.next),Vi(n,d,m),d=m;continue}for(f=[],v=[];c!==null&&c!==m;)(u??=new Set).add(c),v.push(c),c=Aa(c.next);if(c===null)continue}(m.f&hi)===0&&f.push(m),d=m,c=Aa(m.next)}if(n.outrogroups!==null){for(const T of n.outrogroups)T.pending.size===0&&(xl(n,ao(T.done)),n.outrogroups?.delete(T));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||u!==void 0){var P=[];if(u!==void 0)for(m of u)(m.f&En)===0&&P.push(m);for(;c!==null;)(c.f&En)===0&&c!==n.fallback&&P.push(c),c=Aa(c.next);var k=P.length;if(k>0){var b=(i&Ad)!==0&&o===0?t:null;if(a){for(p=0;p<k;p+=1)P[p].nodes?.a?.measure();for(p=0;p<k;p+=1)P[p].nodes?.a?.fix()}Hp(n,P,b)}}a&&Di(()=>{if(h!==void 0)for(m of h)m.nodes?.a?.apply()})}function Wp(n,e,t,i,r,a,o,s){var c=(o&Ch)!==0?(o&Dh)===0?hp(t,!1,!1):Er(t):null,u=(o&Ph)!==0?Er(r):null;return{v:c,i:u,e:Hn(()=>(a(e,c??t,u??r,s),()=>{n.delete(i)}))}}function ka(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,a=e&&(e.f&hi)===0?e.nodes.start:t;i!==null;){var o=as(i);if(a.before(i),i===r)return;i=o}}function Vi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const wc=[...` 	
\r\f \v\uFEFF`];function jp(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r of Object.keys(t))if(t[r])i=i?i+" "+r:r;else if(i.length)for(var a=r.length,o=0;(o=i.indexOf(r,o))>=0;){var s=o+a;(o===0||wc.includes(i[o-1]))&&(s===i.length||wc.includes(i[s]))?i=(o===0?"":i.substring(0,o))+i.substring(s+1):o=s}}return i===""?null:i}function Xp(n,e){return n==null?null:String(n)}function ht(n,e,t,i,r,a){var o=n[dl];if(o!==t||o===void 0){var s=jp(t,i,a);s==null?n.removeAttribute("class"):n.className=s,n[dl]=t}else if(a&&r!==a)for(var c in a){var u=!!a[c];(r==null||u!==!!r[c])&&n.classList.toggle(c,u)}return a}function Sn(n,e,t,i){var r=n[fl];if(r!==e){var a=Xp(e);a==null?n.removeAttribute("style"):n.style.cssText=a,n[fl]=e}return i}function Yp(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function qp(n,e){var t=n.__defaultValue,i=n.multiple,r=i?t??[]:null;if(!(i&&!ro(r))){n.selectedIndex;for(var a of n.options){var o=na(a);Yp(a,i?r.includes(o):jd(o,t))}}}function hf(n,e,t=!1){if(n.multiple){if(e==null)return;if(!ro(e))return Gh();for(var i of n.options)i.selected=e.includes(na(i));return}for(i of n.options){var r=na(i);if(jd(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Js(n){var e=new MutationObserver(t=>{t.every(Kp)||("__defaultValue"in n&&qp(n),"__value"in n&&hf(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Wl(()=>{e.disconnect()})}function Qs(n,e,t=e){var i=new WeakSet,r=!0;Nd(n,"change",a=>{var o=a?"[selected]":":checked",s;if(n.multiple)s=[].map.call(n.querySelectorAll(o),na);else{var c=n.querySelector(o)??n.querySelector("option:not([disabled])");s=c&&na(c)}t(s),n.__value=s,ut!==null&&i.add(ut)}),Jd(()=>{var a=e();if(n===document.activeElement){var o=ut;if(i.has(o))return}if(hf(n,a,r),r&&a===void 0){var s=n.querySelector(":checked");s!==null&&(a=na(s),t(a))}n.__value=a,r=!1})}function na(n){return"__value"in n?n.__value:n.value}function Kp(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const Zp=Symbol("is custom element"),Jp=Symbol("is html"),Qp=Rh?"progress":"PROGRESS";function Ja(n,e){var t=ql(n);t.value===(t.value=e??void 0)||n.value===e&&(e!==0||n.nodeName!==Qp)||(n.value=e??"")}function Eo(n,e){var t=ql(n);t.checked!==(t.checked=e??void 0)&&(n.checked=e)}function Ve(n,e,t,i){var r=ql(n),a=r[e];a!==(r[e]=t)&&(e==="loading"&&(n[Ah]=t),t==null?n.removeAttribute(e):typeof t!="string"&&$p(n).has(e)?n[e]=t:n.setAttribute(e,t))}function ql(n){return n[Td]??={[Zp]:n.nodeName.includes("-"),[Jp]:n.namespaceURI===Bh}}var Tc=new Map;function $p(n){var e=n.getAttribute("is")||n.nodeName,t=Tc.get(e);if(t)return t;Tc.set(e,t=new Set);for(var i,r=n,a=Element.prototype;a!==r;){i=xh(r);for(var o in i)i[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&t.add(o);r=yd(r)}return t}function kt(n,e,t=e){var i=new WeakSet;Nd(n,"input",async r=>{var a=r?n.defaultValue:n.value;if(a=wo(n)?To(a):a,t(a),ut!==null&&i.add(ut),await Ap(),a!==(a=e())){var o=n.selectionStart,s=n.selectionEnd,c=n.value.length;if(n.value=a??"",s!==null){var u=n.value.length;o===s&&s===c&&u>c?(n.selectionStart=u,n.selectionEnd=u):(n.selectionStart=o,n.selectionEnd=Math.min(s,u))}}}),xa(e)==null&&n.value&&(t(wo(n)?To(n.value):n.value),ut!==null&&i.add(ut)),jl(()=>{var r=e();if(n===document.activeElement){var a=ut;if(i.has(a))return}wo(n)&&r===To(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function wo(n){var e=n.type;return e==="number"||e==="range"}function To(n){return n===""?null:+n}function Ao(n,e){return n===e||n?.[gr]===e}function pf(n=kl(),e,t,i){var r=un.r,a=St;return Jd(()=>{var o,s;return jl(()=>{o=s,s=[],xa(()=>{Ao(t(...s),n)||(e(n,...s),o&&Ao(t(...o),n)&&e(null,...o))})}),()=>{let c=a;for(;c!==r&&c.parent!==null&&c.parent.f&Ya;)c=c.parent;const u=()=>{s&&Ao(t(...s),n)&&e(null,...s)},d=c.teardown;c.teardown=()=>{u(),d?.()}}}),n}let us=!1;function em(n){var e=us;try{return us=!1,[n(),us]}finally{us=e}}function Je(n,e,t,i){var r=!0,a=(t&Nh)!==0,o=(t&Oh)!==0,s=i,c=!0,u=void 0,d=()=>o&&r?(u??=qa(i),l(u)):(c&&(c=!1,s=o?xa(i):i),s);let h;if(a){var f=gr in n||Th in n;h=$r(n,e)?.set??(f&&e in n?E=>n[e]=E:void 0)}var v,g=!1;a?[v,g]=em(()=>n[e]):v=n[e],v===void 0&&i!==void 0&&(v=d(),h&&(Zh(),h(v)));var y;if(y=()=>{var E=n[e];return E===void 0?d():(c=!0,E)},(t&Uh)===0)return y;if(h){var m=n.$$legacy;return(function(E,C){return arguments.length>0?((!C||m||g)&&h(C?y():E),E):y()})}var p=!1,M=((t&Ih)!==0?qa:Fd)(()=>(p=!1,y()));a&&l(M);var _=St;return(function(E,C){if(arguments.length>0){const D=C?l(M):a?Pt(E):E;return x(M,D),p=!0,s!==void 0&&(s=D),E}return ki&&p||(_.f&cn)!==0?M.v:l(M)})}function nr(n){un===null&&Ld(),Kt(()=>{const e=xa(n);if(typeof e=="function")return e})}function Kl(n){un===null&&Ld(),nr(()=>()=>xa(n))}const tm="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(tm);function nm(n){const e=[];for(const t of String(n??"")){const i=t.codePointAt(0);if(!(i===65039||i===65038)){if(i===8205){e.push("200d");continue}e.push(i.toString(16))}}return e.join("-")}const im=new Set(["2699","1f4c2","1f4c1","2600","1f319","1f3a8","2615","2139","1f9f1","1f9e9","1f5bc","1f4dc","1f464","2705","2714","267b","1f504","1f517","1f4e6","1f5d1","1f512","1f310","23f9","2b07","1f50d"]),rm="/";function am(n){const e=nm(n);return im.has(e)?`${rm}twemoji/${e}.svg`.replace(/\/{2,}/g,"/"):null}var sm=re('<img draggable="false"/>'),om=re("<span> </span>");function pi(n,e){Zt(e,!0);let t=Je(e,"emoji",3,""),i=Je(e,"size",3,null),r=Je(e,"alt",3,""),a=Je(e,"class",3,"");const o=st(()=>am(t())),s=st(()=>r()||t()),c=st(()=>i()?`${i()}px`:"1em");var u=Zs(),d=vt(u);{var h=v=>{var g=sm();we(()=>{Ve(g,"src",l(o)),Ve(g,"alt",l(s)),Ve(g,"title",r()||void 0),ht(g,1,`inline-block shrink-0 select-none align-[-0.125em] ${a()??""}`),Sn(g,`width: ${l(c)??""}; height: ${l(c)??""};`),Ve(g,"aria-hidden",r()?void 0:"true")}),W(v,g)},f=v=>{var g=om(),y=ue(g,!0);we(()=>{ht(g,1,`inline-block ${a()??""}`),Ve(g,"aria-hidden",r()?void 0:"true"),Ve(g,"title",r()||void 0),de(y,t())}),W(v,g)};ke(d,v=>{l(o)?v(h):v(f,-1)})}W(n,u),Jt()}var lm=re('<div class="fixed inset-0 z-20"></div> <div class="absolute top-9 right-2 z-30 w-44 rounded border border-(--border) bg-(--bg-surface) py-1 shadow-xl"><button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">▶ Play</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">✎ Edit Instance</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)"><!> Open Folder</button> <button class="block w-full px-3 py-1.5 text-left text-[12px] hover:bg-(--bg-subtle)">▤ View Logs</button> <div class="my-1 border-t border-(--border)"></div> <button class="block w-full px-3 py-1.5 text-left text-[12px] text-rose-400 hover:bg-rose-500/10">✕ Delete</button></div>',1),cm=re('<div tabindex="0" role="option"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded bg-(--accent)/15"><img alt="" draggable="false" class="h-8 w-8 object-cover"/></span> <div class="min-w-0 flex-1"><div class="truncate text-[13px] font-medium"> </div> <div class="mt-0.5 flex items-center gap-1"><span class="rounded bg-(--accent)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span></div></div> <button class="shrink-0 rounded px-1.5 text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Menu">⋯</button></div> <span class="text-[11px] text-(--text-muted)"> </span> <!></div>');function um(n,e){Zt(e,!0);let t=Je(e,"selected",3,!1),i=Je(e,"gameRunning",3,!1),r=Je(e,"menuOpen",3,!1);const a=st(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function o(){const k=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&k?k(e.instance.icon_path):"/logo.png"}var s=cm(),c=U(s),u=U(c),d=ue(u),h=w(u,2),f=U(h),v=ue(f,!0),g=w(f,2),y=U(g),m=ue(y,!0),p=w(y,2),M=ue(p,!0),_=w(h,2),E=w(c,2),C=ue(E,!0),D=w(E,2);{var P=k=>{var b=lm(),T=vt(b),oe=w(T,2),H=U(oe),F=w(H,2),z=w(F,2),Z=U(z);pi(Z,{emoji:"📂"});var V=w(z,2),B=w(V,4);we(()=>H.disabled=i()),ce("click",T,function(...ie){e.onclosemenu?.apply(this,ie)}),ce("click",H,()=>{e.onclosemenu(),e.onplay()}),ce("click",F,()=>{e.onclosemenu(),e.onedit()}),ce("click",z,()=>{e.onclosemenu(),e.onopenfolder()}),ce("click",V,function(...ie){e.onviewlogs?.apply(this,ie)}),ce("click",B,()=>{e.onclosemenu(),e.ondelete()}),W(k,b)};ke(D,k=>{r()&&k(P)})}we((k,b)=>{ht(s,1,`relative flex cursor-pointer flex-col gap-2 rounded border bg-(--bg-surface) p-3 outline-none transition-colors duration-100 focus-visible:border-(--accent) focus-visible:ring-1 focus-visible:ring-(--accent) ${t()?"border-(--accent)":"border-(--border) hover:border-(--accent)"}`),Ve(s,"aria-selected",t()),Ve(s,"title",e.instance.name),Ve(d,"src",k),de(v,e.instance.name),de(m,e.instance.minecraft_version),ht(p,1,`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${l(a)??""}`),de(M,e.instance.loader_type),de(C,b)},[()=>o(),()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleDateString():"Never played"]),ce("click",s,function(...k){e.onselect?.apply(this,k)}),ce("dblclick",s,function(...k){e.onplay?.apply(this,k)}),ce("keydown",s,k=>{(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),e.onplay())}),ce("contextmenu",s,k=>{k.preventDefault(),e.onselect(),e.ontogglemenu()}),gi("error",d,k=>{k.currentTarget.dataset.f||(k.currentTarget.dataset.f="1",k.currentTarget.src="/logo.png")}),ce("click",_,k=>{k.stopPropagation(),e.ontogglemenu()}),W(n,s),Jt()}_n(["click","dblclick","keydown","contextmenu"]);var dm=re('<div class="col-span-full rounded border border-(--border) bg-(--bg-surface) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),fm=re('<div class="col-span-full rounded border border-dashed border-(--border) bg-(--bg-subtle) p-6 text-center text-[12px] text-(--text-muted)"> </div>'),hm=re('<div class="col-span-full flex flex-col items-center gap-3 rounded border border-dashed border-(--border) bg-(--bg-subtle) p-10 text-center"><img src="/logo.png" alt="" draggable="false" class="h-14 w-14 opacity-40"/> <p class="text-[13px] font-medium">No instances yet</p> <p class="text-[12px] text-(--text-muted)">Create one from a version list, or drop a .mrpack into the wizard.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">＋ Add Instance</button></div>'),pm=re('<div class="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3" role="listbox" aria-label="Instances"></div>');function mm(n,e){Zt(e,!0);var t=pm();At(t,21,()=>e.instances,i=>i.id,(i,r)=>{{let a=st(()=>e.selectedId===l(r).id),o=st(()=>e.menuFor===l(r).id);um(i,{get instance(){return l(r)},get selected(){return l(a)},get gameRunning(){return e.gameRunning},get menuOpen(){return l(o)},onselect:()=>e.onselect?.(l(r).id),onplay:()=>e.onplay?.(l(r).id),ontogglemenu:()=>e.ontogglemenu?.(l(r).id),onedit:()=>e.onedit?.(l(r)),onopenfolder:()=>e.onopenfolder?.(l(r).id),get onviewlogs(){return e.onviewlogs},ondelete:()=>e.ondelete?.(l(r).id),get onclosemenu(){return e.onclosemenu}})}},i=>{var r=Zs(),a=vt(r);{var o=d=>{var h=dm(),f=ue(h,!0);we(()=>de(f,e.error)),W(d,h)},s=d=>{var h=fm(),f=ue(h);we(v=>de(f,`No instances match "${v??""}".`),[()=>e.query.trim()]),W(d,h)},c=st(()=>e.query.trim()),u=d=>{var h=hm(),f=w(U(h),6);ce("click",f,()=>e.onadd?.()),W(d,h)};ke(a,d=>{e.error?d(o):l(c)?d(s,1):d(u,-1)})}W(i,r)}),W(n,t),Jt()}_n(["click"]);const Qa=[];function lo(n){return Qa.push(n),n}function co(n){const e=Qa.lastIndexOf(n);e!==-1&&Qa.splice(e,1)}function Ac(){return Qa[Qa.length-1]??null}var vm=re('<div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div>'),Rc=re('<div class="p-6 text-center text-[12px] text-(--text-muted)"> </div>'),gm=re('<span class="shrink-0 rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent)">✓ Installed</span>'),_m=re(`<button class="shrink-0 rounded bg-(--accent) px-3 py-1.5 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Downloads the primary jar into this instance's mods folder"> </button>`),xm=re('<div class="flex items-center gap-3 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><img alt="" draggable="false" class="h-9 w-9 shrink-0 rounded object-cover"/> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div> <div class="truncate text-[11px] text-(--text-muted)"> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></div> <!></div>'),bm=re('<div class="flex flex-col gap-1.5"></div>'),ym=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[480px] w-[640px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><div class="min-w-0"><h3 class="text-sm font-semibold">Get more mods</h3> <p class="truncate text-[11px] text-(--text-muted)"> <!></p></div> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="border-b border-(--border) p-3"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search Modrinth mods…"/></div> <div class="min-h-0 flex-1 overflow-y-auto p-3"><!> <!></div></div></div>');function Sm(n,e){Zt(e,!0);let t=pe(""),i=pe(null),r=pe(!1),a=pe(""),o=pe(Pt({})),s=pe(Pt({})),c=0;const u=["fabric","quilt","forge","neoforge"],d=st(()=>{const V=e.instance.loader_type.toLowerCase();return u.includes(V)?V:""});function h(V){return V>=1e6?`${(V/1e6).toFixed(1)}M`:V>=1e3?`${(V/1e3).toFixed(0)}K`:String(V)}function f(V){return V.icon_url||"/logo.png"}Kt(()=>{const V=l(t).trim(),B=++c,ie=setTimeout(()=>{x(r,!0),x(a,""),window.__TAURI__.core.invoke("search_modrinth_mods",{query:V,gameVersion:e.instance.minecraft_version,loader:l(d)}).then(ge=>{B===c&&(x(i,ge,!0),x(r,!1))}).catch(ge=>{B===c&&(x(a,String(ge),!0),x(r,!1))})},350);return()=>clearTimeout(ie)});async function v(V){if(!(l(o)[V.project_id]||l(s)[V.project_id])){x(o,{...l(o),[V.project_id]:!0},!0);try{const B=await window.__TAURI__.core.invoke("install_modrinth_mod",{instanceId:e.instance.id,projectId:V.project_id,gameVersion:e.instance.minecraft_version,loader:l(d)});x(s,{...l(s),[V.project_id]:B},!0),e.oninstalled?.(V)}catch(B){x(a,`Install failed: ${B}`)}finally{x(o,{...l(o),[V.project_id]:!1},!0)}}}nr(()=>{const V=lo(()=>e.onclose?.());return()=>co(V)});var g=ym(),y=U(g),m=U(y),p=U(m),M=w(U(p),2),_=U(M),E=w(_);{var C=V=>{var B=ur();we(ie=>de(B,`· ${ie??""}`),[()=>l(d)[0].toUpperCase()+l(d).slice(1)]),W(V,B)};ke(E,V=>{l(d)&&V(C)})}var D=w(p,2),P=w(m,2),k=U(P),b=w(P,2),T=U(b);{var oe=V=>{var B=vm(),ie=ue(B,!0);we(()=>de(ie,l(a))),W(V,B)};ke(T,V=>{l(a)&&V(oe)})}var H=w(T,2);{var F=V=>{var B=Rc(),ie=ue(B,!0);we(()=>de(ie,l(r)?"Searching Modrinth…":"Type to search.")),W(V,B)},z=V=>{var B=Rc(),ie=ue(B);we(ge=>de(ie,`No mods for MC ${e.instance.minecraft_version??""}${l(d)?` + ${l(d)}`:""} match “${ge??""}”.`),[()=>l(t).trim()]),W(V,B)},Z=V=>{var B=bm();At(B,21,()=>l(i),ie=>ie.project_id,(ie,ge)=>{var ve=xm(),Q=U(ve),ne=w(Q,2),Se=U(ne),Ae=U(Se),Pe=ue(Ae,!0),Fe=w(Ae,2),je=ue(Fe),ze=w(Se,2),Qe=ue(ze,!0),dt=w(ze,2),Xe=ue(dt),J=w(ne,2);{var lt=N=>{var $=gm();we(()=>Ve($,"title",l(s)[l(ge).project_id])),W(N,$)},We=N=>{var $=_m(),Ie=ue($,!0);we(()=>{$.disabled=l(o)[l(ge).project_id],de(Ie,l(o)[l(ge).project_id]?"Installing…":"Install")}),ce("click",$,()=>v(l(ge))),W(N,$)};ke(J,N=>{l(s)[l(ge).project_id]?N(lt):N(We,-1)})}we((N,$,Ie)=>{Ve(Q,"src",N),Ve(Ae,"title",l(ge).title),de(Pe,l(ge).title),Ve(Fe,"title",`${$??""} downloads`),de(je,`⤓ ${Ie??""}`),Ve(ze,"title",l(ge).description),de(Qe,l(ge).description),de(Xe,`by ${(l(ge).author||"unknown")??""}`)},[()=>f(l(ge)),()=>h(l(ge).downloads),()=>h(l(ge).downloads)]),gi("error",Q,N=>{N.currentTarget.dataset.f||(N.currentTarget.dataset.f="1",N.currentTarget.src="/logo.png")}),W(ie,ve)}),W(V,B)};ke(H,V=>{l(i)?l(i).length===0&&!l(r)?V(z,1):V(Z,-1):V(F)})}we(()=>de(_,`Modrinth · ${e.instance.name??""} · MC ${e.instance.minecraft_version??""} `)),ce("click",g,V=>{V.target===V.currentTarget&&e.onclose?.()}),ce("click",D,()=>e.onclose?.()),kt(k,()=>l(t),V=>x(t,V)),W(n,g),Jt()}_n(["click"]);var Mm=re('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Em=re('<h2 class="text-[16px] font-semibold">Version Components</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The version stack this instance launches with.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-1 text-(--text-muted)"> </div> <div class="mt-1 text-(--text-muted)"> </div> <p class="mt-3 text-[11px] text-(--text-muted)">Version component switching (up/downgrade with progression) lands in a later milestone.</p></div>',1),wm=re('<div class="mt-4 rounded border border-amber-500/30 bg-amber-500/10 p-3" role="status" aria-live="polite"><p class="text-[12px] text-amber-400"><strong> </strong> </p> <button class="mt-2 rounded border border-amber-500/40 px-3 py-1.5 text-[12px] font-medium text-amber-400 hover:bg-amber-500/20 disabled:opacity-40"> </button></div>'),Tm=re('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div> </div> <div class="truncate text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button><span class="h-3.5 w-3.5 rounded-full bg-(--bg-surface)"></span></button></td><td class="shrink-0"><button class="rounded px-1.5 py-0.5 text-rose-400 hover:bg-rose-500/10 disabled:opacity-40">✕</button></td></tr>'),Cc=re('<tr><td class="px-3 py-3 text-(--text-muted)"><!></td></tr>'),Ro=re('<p class="mt-2 text-[12px] text-rose-400"> </p>'),Am=re(`<h2 class="text-[16px] font-semibold">Mods</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every <span class="font-mono">.jar</span> in this instance's mods folder; toggling renames it in place.</p> <!> <div class="mt-6 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)"> </span> <button class="text-[12px] text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">↻ Refresh</button></div> <input class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter installed mods…"/> <button class="mt-2 w-full rounded border border-(--border) bg-(--bg-subtle) px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Browse and install mods straight from Modrinth">⤓ Get More Mods</button> <table class="mt-3 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">＋ Add Mod</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Open Mods Folder</button></div>`,1),Rm=re('<div class="group relative overflow-hidden rounded border border-(--border) bg-(--bg-subtle) hover:border-(--accent)" role="button" tabindex="0"><img loading="lazy" class="aspect-video w-full object-cover"/> <div class="truncate px-2 py-1.5 text-[11px] text-(--text-muted)"> </div></div>'),Cm=re('<p class="col-span-full rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px] text-(--text-muted)"><!></p>'),Pm=re('<h2 class="text-[16px] font-semibold">Screenshots</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Every PNG in <span class="font-mono">minecraft/screenshots</span>, newest first.</p> <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"></div> <!> <button class="mt-3 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the screenshots folder"><!> Open Screenshots Folder</button>',1),Lm=re('<tr class="flex items-center gap-3 border-b border-(--border) px-3 py-2 last:border-b-0"><td class="min-w-0 flex-1"><div class="truncate"> </div> <div class="text-[10px] text-(--text-muted)"> </div></td><td class="shrink-0"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-canvas) hover:text-(--text-main)" title="Opens this log file">Open</button></td></tr>'),Dm=re('<h2 class="text-[16px] font-semibold">Logs</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Log files in <span class="font-mono">minecraft/logs</span>, newest first. Live game output renders in the console drawer.</p> <table class="mt-6 w-full overflow-hidden rounded border border-(--border) bg-(--bg-subtle) text-[12px]"><tbody></tbody></table> <!> <div class="mt-3 flex items-center gap-2"><button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">▤ Open console</button> <button class="rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Opens the logs folder"><!> Open Logs Folder</button></div>',1),Im=re('<h2 class="text-[16px] font-semibold">Instance Settings</h2> <p class="mt-1 text-[12px] text-(--text-muted)">On-disk layout of this instance.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4 text-[12px]"><div class="font-medium"> </div> <div class="mt-2 space-y-1 font-mono text-[11px] text-(--text-muted)"><div class="break-all"> </div> <div class="break-all"> </div></div> <p class="mt-3 text-[11px] text-(--text-muted)">Renaming, icon and per-instance java overrides land in a later milestone; use the context panel for groups, copies and exports.</p></div>',1),Um=re('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Instance sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="mb-3 border-b border-(--border) px-2.5 pb-3"><div class="truncate text-[13px] font-semibold"> </div> <div class="mt-0.5 truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div> <!></div>');function Nm(n,e){Zt(e,!0);let t=Je(e,"storage",3,null),i=Je(e,"blindMode",3,!1),r=Je(e,"deafMode",3,!1);const a=[{id:"components",label:"Version Components",icon:"🧱"},{id:"mods",label:"Mods",icon:"🧩"},{id:"screenshots",label:"Screenshots",icon:"🖼"},{id:"logs",label:"Logs",icon:"📜"},{id:"settings",label:"Settings",icon:"⚙"}];let o=pe("mods"),s=pe(Pt([])),c=pe(!1),u=pe(""),d=pe(""),h=pe(!1),f=pe(Pt([])),v=pe(Pt([])),g=pe(!1),y=pe("");function m(...N){return[t()?t().instances_dir.replace(/\\/g,"/"):"",e.instance.id,"minecraft",...N].filter(Boolean).join("/")}function p(N){const $=window.__TAURI__?.core?.convertFileSrc;return $?$(N):N}function M(N){return N>=1024*1024?`${(N/1024/1024).toFixed(1)} MB`:N>=1024?`${(N/1024).toFixed(1)} KB`:`${N} B`}function _(N){return N?new Date(N*1e3).toLocaleString():""}function E(){const N=l(d).trim().toLowerCase();return N?l(s).filter($=>$.display_name.toLowerCase().includes(N)||$.filename.toLowerCase().includes(N)):l(s)}async function C(){x(c,!0);try{x(s,await window.__TAURI__.core.invoke("list_instance_mods",{instanceId:e.instance.id}),!0),x(u,"")}catch(N){x(u,String(N),!0)}finally{x(c,!1)}}const D={"minecraft-access":"Minecraft Access",echosight:"EchoSight"},P=st(()=>[...i()&&!l(s).some(N=>N.filename.toLowerCase().includes("minecraft-access"))?["minecraft-access"]:[],...r()&&!l(s).some(N=>N.filename.toLowerCase().includes("echosight"))?["echosight"]:[]]);let k=pe(!1);async function b(){x(k,!0);try{for(const N of l(P))await window.__TAURI__.core.invoke("install_mod_with_deps",{instanceId:e.instance.id,projectId:N,gameVersion:e.instance.minecraft_version,loader:"fabric"});x(u,"Accessibility mods installed.")}catch(N){x(u,String(N),!0)}finally{x(k,!1)}await C()}async function T(N){x(c,!0);try{await window.__TAURI__.core.invoke("toggle_mod",{instanceId:e.instance.id,filename:N.filename,enable:!N.is_enabled}),l(u)&&x(u,"")}catch($){x(u,String($),!0)}finally{x(c,!1)}await C()}async function oe(N){x(c,!0);try{await window.__TAURI__.core.invoke("delete_mod",{instanceId:e.instance.id,filename:N.filename}),x(u,"")}catch($){x(u,String($),!0)}finally{x(c,!1)}await C()}async function H(){const N=window.__TAURI__?.dialog?.open;if(!N){x(u,"File picker unavailable in this build.");return}let $;try{$=await N({multiple:!0,title:"Add mods",filters:[{name:"Mods",extensions:["jar"]}]})}catch(he){x(u,String(he),!0);return}const Ie=$?[].concat($):[];if(Ie.length){x(c,!0);try{for(const he of Ie)await window.__TAURI__.core.invoke("import_mod",{instanceId:e.instance.id,jarPath:he});x(u,"")}catch(he){x(u,String(he),!0)}finally{x(c,!1)}await C()}}async function F(N){x(g,!0);try{const $=await window.__TAURI__.core.invoke(N,{instanceId:e.instance.id});x(N==="list_screenshots"?f:v,$,!0),x(y,"")}catch($){x(y,String($),!0)}finally{x(g,!1)}}function z(N){window.__TAURI__.core.invoke("open_path",{path:N}).catch($=>x(y,String($),!0))}function Z(N){z(m("screenshots",N))}nr(()=>{C(),F("list_screenshots"),F("list_logs")});var V=Um(),B=U(V),ie=U(B),ge=w(ie,2),ve=U(ge),Q=ue(ve,!0),ne=w(ve,2),Se=ue(ne),Ae=w(ge,2);At(Ae,21,()=>a,N=>N.id,(N,$)=>{var Ie=Mm(),he=U(Ie),Me=U(he);pi(Me,{get emoji(){return l($).icon},size:15});var se=w(he,2),Oe=ue(se,!0);we(()=>{ht(Ie,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${l(o)===l($).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Ve(Ie,"aria-current",l(o)===l($).id?"true":void 0),de(Oe,l($).label)}),ce("click",Ie,()=>x(o,l($).id,!0)),W(N,Ie)});var Pe=w(B,2),Fe=U(Pe),je=U(Fe);{var ze=N=>{var $=Em(),Ie=w(vt($),4),he=U(Ie),Me=ue(he),se=w(he,2),Oe=ue(se),Le=w(se,2),A=ue(Le);we(S=>{de(Me,`Minecraft ${e.instance.minecraft_version??""}`),de(Oe,`Loader: ${e.instance.loader_type??""}`),de(A,`Last played: ${S??""}`)},[()=>e.instance.last_played?new Date(e.instance.last_played*1e3).toLocaleString():"never"]),W(N,$)},Qe=N=>{var $=Am(),Ie=w(vt($),4);{var he=ae=>{var me=wm(),xe=U(me),Ee=U(xe),Ye=ue(Ee,!0),nt=w(Ee),O=w(xe,2),Ne=ue(O,!0);we(le=>{de(Ye,le),de(nt,` ${l(P).length>1?"are":"is"} not installed yet — recommended for your
              accessibility profile. Required dependencies (e.g. Fabric API) install automatically.`),O.disabled=l(c)||l(k),de(Ne,l(k)?"Installing…":"Install Recommended Accessibility Mods")},[()=>l(P).map(le=>D[le]??le).join(" and ")]),ce("click",O,b),W(ae,me)};ke(Ie,ae=>{(i()||r())&&e.instance.loader_type==="Fabric"&&l(P).length&&ae(he)})}var Me=w(Ie,2),se=U(Me),Oe=ue(se),Le=w(se,2),A=w(Me,2),S=w(A,2),I=w(S,2),Y=U(I);At(Y,21,E,ae=>ae.filename,(ae,me)=>{var xe=Tm(),Ee=U(xe),Ye=U(Ee);let nt;var O=ue(Ye,!0),Ne=w(Ye,2),le=ue(Ne),Ce=w(Ee),be=ue(Ce),De=w(Ce),qe=ue(De);we(rt=>{nt=ht(Ye,1,"truncate",null,nt,{"opacity-50":!l(me).is_enabled}),de(O,l(me).display_name),de(le,`${l(me).filename??""} · ${rt??""}`),ht(be,1,`flex h-5 w-9 shrink-0 items-center rounded-full border border-(--border) px-0.5 ${l(me).is_enabled?"justify-end bg-(--accent)":"justify-start bg-(--bg-canvas)"}`),Ve(be,"title",l(me).is_enabled?"Disable":"Enable"),be.disabled=l(c),Ve(qe,"title",`Delete ${l(me).display_name??""}`),qe.disabled=l(c)},[()=>M(l(me).file_size)]),ce("click",be,()=>T(l(me))),ce("click",qe,()=>oe(l(me))),W(ae,xe)},ae=>{var me=Cc(),xe=U(me),Ee=U(xe);{var Ye=O=>{var Ne=ur("Loading mods…");W(O,Ne)},nt=O=>{var Ne=ur("No mods installed — use ＋ Add Mod to pick .jar files, or ⤓ Get More Mods.");W(O,Ne)};ke(Ee,O=>{l(c)?O(Ye):O(nt,-1)})}W(ae,me)});var X=w(I,2);{var _e=ae=>{var me=Ro(),xe=ue(me,!0);we(()=>de(xe,l(u))),W(ae,me)};ke(X,ae=>{l(u)&&ae(_e)})}var Ue=w(X,2),ye=U(Ue),q=w(ye,2),L=U(q);pi(L,{emoji:"📂"}),we(()=>{de(Oe,`Installed (${l(s).length??""})`),Le.disabled=l(c),ye.disabled=l(c),q.disabled=!t(),Ve(q,"title",t()?"Opens the instance mods folder":"Storage unknown")}),ce("click",Le,C),kt(A,()=>l(d),ae=>x(d,ae)),ce("click",S,()=>x(h,!0)),ce("click",ye,H),ce("click",q,()=>z(m("mods"))),W(N,$)},dt=N=>{var $=Pm(),Ie=w(vt($),4);At(Ie,21,()=>l(f),Le=>Le.name,(Le,A)=>{var S=Rm(),I=U(S),Y=w(I,2),X=ue(Y,!0);we((_e,Ue,ye)=>{Ve(S,"title",`${l(A).name??""} · ${_e??""} · ${Ue??""}`),Ve(I,"src",ye),Ve(I,"alt",l(A).name),Ve(Y,"title",l(A).name),de(X,l(A).name)},[()=>M(l(A).size),()=>_(l(A).modified),()=>p(m("screenshots",l(A).name))]),ce("click",S,()=>Z(l(A).name)),ce("keydown",S,_e=>{(_e.key==="Enter"||_e.key===" ")&&(_e.preventDefault(),Z(l(A).name))}),W(Le,S)},Le=>{var A=Cm(),S=U(A);{var I=X=>{var _e=ur("Loading screenshots…");W(X,_e)},Y=X=>{var _e=ur("No screenshots yet — press F2 in game to capture one.");W(X,_e)};ke(S,X=>{l(g)?X(I):X(Y,-1)})}W(Le,A)});var he=w(Ie,2);{var Me=Le=>{var A=Ro(),S=ue(A,!0);we(()=>de(S,l(y))),W(Le,A)};ke(he,Le=>{l(y)&&Le(Me)})}var se=w(he,2),Oe=U(se);pi(Oe,{emoji:"📂"}),ce("click",se,()=>z(m("screenshots"))),W(N,$)},Xe=N=>{var $=Dm(),Ie=w(vt($),4),he=U(Ie);At(he,21,()=>l(v),I=>I.name,(I,Y)=>{var X=Lm(),_e=U(X),Ue=U(_e),ye=ue(Ue,!0),q=w(Ue,2),L=ue(q),ae=w(_e),me=ue(ae);we((xe,Ee)=>{Ve(Ue,"title",l(Y).name),de(ye,l(Y).name),de(L,`${xe??""} · ${Ee??""}`)},[()=>M(l(Y).size),()=>_(l(Y).modified)]),ce("click",me,()=>z(m("logs",l(Y).name))),W(I,X)},I=>{var Y=Cc(),X=U(Y),_e=U(X);{var Ue=q=>{var L=ur("Loading logs…");W(q,L)},ye=q=>{var L=ur("No log files yet — logs appear after the first launch.");W(q,L)};ke(_e,q=>{l(g)?q(Ue):q(ye,-1)})}W(I,Y)});var Me=w(Ie,2);{var se=I=>{var Y=Ro(),X=ue(Y,!0);we(()=>de(X,l(y))),W(I,Y)};ke(Me,I=>{l(y)&&I(se)})}var Oe=w(Me,2),Le=U(Oe),A=w(Le,2),S=U(A);pi(S,{emoji:"📂"}),ce("click",Le,()=>e.onopenconsole?.()),ce("click",A,()=>z(m("logs"))),W(N,$)},J=N=>{var $=Im(),Ie=w(vt($),4),he=U(Ie),Me=ue(he,!0),se=w(he,2),Oe=U(se),Le=ue(Oe),A=w(Oe,2),S=ue(A);we((I,Y,X)=>{de(Me,e.instance.name),Ve(se,"title",I),de(Le,`Game folder: ${Y??""}`),de(S,`Mods folder: ${X??""}`)},[()=>m(),()=>m(),()=>m("mods")]),W(N,$)};ke(je,N=>{l(o)==="components"?N(ze):l(o)==="mods"?N(Qe,1):l(o)==="screenshots"?N(dt,2):l(o)==="logs"?N(Xe,3):N(J,-1)})}var lt=w(Pe,2);{var We=N=>{Sm(N,{get instance(){return e.instance},onclose:()=>x(h,!1),oninstalled:()=>C()})};ke(lt,N=>{l(h)&&N(We)})}we(()=>{Ve(ve,"title",e.instance.name),de(Q,e.instance.name),de(Se,`${e.instance.minecraft_version??""} · ${e.instance.loader_type??""}`)}),ce("click",ie,function(...N){e.onback?.apply(this,N)}),W(n,V),Jt()}_n(["click","keydown"]);var Om=re('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <p class="mt-2 break-all text-[11px] text-(--text-muted)"> </p></div>'),Fm=re('<div class="p-6 text-center text-[12px] text-(--text-muted)">Reading pack…</div>'),km=re('<p class="mt-1 line-clamp-3 text-[11px] text-(--text-muted)"> </p>'),Bm=re('<p class="mt-3 text-[12px] text-red-400"> </p>'),zm=re(`<div class="p-4"><div class="rounded border border-(--border) bg-(--bg-subtle) p-3"><div class="text-[13px] font-semibold"> </div> <!> <div class="mt-2 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span> <span class="rounded bg-(--bg-canvas) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)"> </span></div></div> <label class="mt-4 block text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)" for="mrpack-name">Instance name</label> <input id="mrpack-name" class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Instance name"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40" title="Stages the pack's downloads and overrides into a new instance"> </button></div>`,1),Gm=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <!></div></div>');function Hm(n,e){Zt(e,!0);let t=pe(null),i=pe(""),r=pe(""),a=pe(!1),o=pe("");function s(M){return M>=1024*1024?`${(M/1024/1024).toFixed(1)} MB`:M>=1024?`${(M/1024).toFixed(0)} KB`:`${M} B`}function c(){return!l(t)||!l(t).loader?"Vanilla":l(t).loader[0].toUpperCase()+l(t).loader.slice(1)+(l(t).loader_version?` ${l(t).loader_version}`:" (latest stable)")}nr(async()=>{const M=lo(()=>e.onclose?.());try{x(t,await window.__TAURI__.core.invoke("inspect_modpack",{pathOrUrl:e.path}),!0),x(r,l(t).name,!0)}catch(_){x(i,String(_),!0)}return()=>co(M)});async function u(){if(!l(a)){x(a,!0),x(o,"");try{const M=await window.__TAURI__.core.invoke("install_mrpack",{pathOrUrl:e.path,instanceName:l(r).trim()});e.oninstalled?.(M)}catch(M){x(o,String(M),!0)}finally{x(a,!1)}}}var d=Gm(),h=U(d),f=U(h),v=w(U(f),2),g=w(f,2);{var y=M=>{var _=Om(),E=U(_),C=ue(E,!0),D=w(E,2),P=ue(D,!0);we(()=>{de(C,l(i)),Ve(D,"title",e.path),de(P,e.path)}),W(M,_)},m=M=>{var _=Fm();W(M,_)},p=M=>{var _=zm(),E=vt(_),C=U(E),D=U(C),P=ue(D,!0),k=w(D,2);{var b=Fe=>{var je=km(),ze=ue(je,!0);we(()=>de(ze,l(t).summary)),W(Fe,je)};ke(k,Fe=>{l(t).summary&&Fe(b)})}var T=w(k,2),oe=U(T),H=ue(oe),F=w(oe,2),z=ue(F,!0),Z=w(F,2),V=ue(Z),B=w(Z,2),ie=ue(B,!0),ge=w(C,4),ve=w(ge,2);{var Q=Fe=>{var je=Bm(),ze=ue(je,!0);we(()=>de(ze,l(o))),W(Fe,je)};ke(ve,Fe=>{l(o)&&Fe(Q)})}var ne=w(E,2),Se=U(ne),Ae=w(Se,2),Pe=ue(Ae,!0);we((Fe,je,ze)=>{Ve(D,"title",l(t).name),de(P,l(t).name),de(H,`MC ${(l(t).game_version||"?")??""}`),de(z,Fe),Ve(Z,"title",`${l(t).download_count??""} downloaded, ${l(t).override_count??""} overrides extracted`),de(V,`${l(t).file_count??""} files`),de(ie,je),Ae.disabled=ze,de(Pe,l(a)?"Installing…":"Install Modpack")},[()=>c(),()=>s(l(t).archive_size),()=>l(a)||!l(r).trim()]),kt(ge,()=>l(r),Fe=>x(r,Fe)),ce("click",Se,()=>e.onclose?.()),ce("click",Ae,u),W(M,_)};ke(g,M=>{l(i)?M(y):l(t)?M(p,-1):M(m,1)})}ce("click",d,M=>{M.target===M.currentTarget&&e.onclose?.()}),ce("click",v,()=>e.onclose?.()),W(n,d),Jt()}_n(["click"]);var Vm=re('<img alt="" draggable="false" class="h-full w-full object-cover"/> <span class="absolute inset-0 flex items-center justify-center bg-black/50 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">Change</span>',1),Wm=re('<span class="text-[22px] leading-none">＋</span> <span class="mt-0.5 text-[9px] uppercase tracking-wide">Icon</span>',1),Pc=re("<option> </option>"),jm=re('<div class="flex h-full items-center justify-center text-[12px] text-(--text-muted)">Loading version list…</div>'),Xm=re('<div class="p-4"><div class="rounded border border-rose-500/30 bg-rose-500/10 p-3 text-[12px] text-rose-400"> </div> <button class="mt-2 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)">Retry</button></div>'),Ym=re('<span class="ml-1.5 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-(--accent-star)">latest</span>'),qm=re('<tr role="button" tabindex="0"><td class="px-3 py-1.5"><span class="font-medium"> </span> <!></td><td class="px-3 py-1.5 text-(--text-muted)"> </td><td class="px-3 py-1.5 text-(--text-muted)"> </td></tr>'),Km=re('<tr><td colspan="3" class="px-3 py-6 text-center text-[12px] text-(--text-muted)">No versions match this filter.</td></tr>'),Zm=re('<table class="w-full text-left text-[12px]"><thead class="sticky top-0 z-10 bg-(--bg-surface)"><tr class="border-b border-(--border) text-[10px] uppercase tracking-wide text-(--text-muted)"><th class="px-3 py-2 font-medium">Version</th><th class="w-[110px] px-3 py-2 font-medium">Released</th><th class="w-[90px] px-3 py-2 font-medium">Type</th></tr></thead><tbody></tbody></table>'),Jm=re('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="checkbox" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),Qm=re('<label class="flex cursor-pointer items-center gap-2 text-[12px]"><input type="radio" name="mod-loader" class="h-3.5 w-3.5 accent-(--accent)"/> <span> </span></label>'),$m=re('<p class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-400">This mod loader is not supported yet.</p>'),ev=re('<p class="mt-2 text-[11px] text-(--text-muted)">No mod loader is selected.</p>'),tv=re(`<div role="alert" class="mt-2 rounded border border-amber-500/30 bg-amber-500/10 p-2 text-[11px] text-amber-400">Blind Mode Notice: Vanilla Minecraft's built-in Narrator lacks 3D world navigation and
              block inspection, and Horizon does not support Fabric accessibility mods yet. We
              strongly recommend selecting <strong>Fabric</strong> with Minecraft Access.</div>`),nv=re('<label class="flex cursor-pointer items-start gap-2 text-[12px]"><input type="checkbox" class="mt-0.5 h-3.5 w-3.5 accent-(--accent)"/> <span><span> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span></label>'),iv=re('<section class="mt-3 border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Accessibility mods</h4> <p class="mt-0.5 text-[10px] text-(--text-muted)">Installed right after the instance is created.</p> <div class="mt-1.5 flex flex-col gap-1.5"></div></section>'),rv=re('<div class="mt-1 flex h-8 items-center rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[11px] text-(--text-muted)">Loading builds…</div>'),av=re('<input id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none focus:border-(--accent)" placeholder="version (empty = latest stable)"/> <p class="mt-1 text-[10px] text-(--accent-star)">Build list unavailable — type a version.</p>',1),sv=re('<select id="loader-build" class="mt-1 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>Latest stable</option><!></select>'),ov=re('<label class="mt-2 block text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)" for="loader-build">Loader version</label> <!>',1),lv=re('<span class="min-w-0 flex-1 truncate text-[11px] text-red-400"> </span>'),cv=re('<span class="min-w-0 flex-1 truncate text-[11px] text-(--text-muted)"> </span>'),uv=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex h-[580px] w-[900px] flex-col overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-start gap-3 border-b border-(--border) p-4"><button class="group relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-(--border) bg-(--accent)/10 text-(--text-muted) hover:border-(--accent)" title="Choose an instance icon"><!></button> <div class="min-w-0 flex-1"><input class="h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <div class="mt-2 flex items-center gap-2"><label class="shrink-0 text-[11px] text-(--text-muted)" for="wizard-group">Group</label> <select id="wizard-group" class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[12px] outline-none focus:border-(--accent)"><option>No group</option><!></select></div></div> <button class="shrink-0 text-[13px] text-(--text-muted) hover:text-(--text-main)" title="Close">✕</button></div> <div class="flex min-h-0 flex-1"><div class="flex min-w-0 flex-1 flex-col border-r border-(--border)"><div class="min-h-0 flex-1 overflow-y-auto"><!></div> <div class="flex items-center gap-2 border-t border-(--border) p-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Search versions…"/> <span class="shrink-0 text-[10px] text-(--text-muted)"> </span></div></div> <aside class="flex w-[240px] shrink-0 flex-col gap-4 overflow-y-auto p-3"><section><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Types</h4> <div class="mt-1.5 flex flex-col gap-1"></div></section> <section class="border-t border-(--border) pt-3"><h4 class="text-[10px] font-semibold uppercase tracking-wide text-(--text-muted)">Mod loader</h4> <div class="mt-1.5 flex flex-col gap-1"></div> <!> <!> <!> <!></section></aside></div> <div class="flex items-center gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)" title="Opens the project README">Help</button> <!> <button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>');function dv(n,e){Zt(e,!0);let t=Je(e,"groups",19,()=>[]),i=Je(e,"blindMode",3,!1),r=Je(e,"deafMode",3,!1);const a=[{id:"release",label:"Releases"},{id:"snapshot",label:"Snapshots"},{id:"old_beta",label:"Betas"},{id:"old_alpha",label:"Alphas"},{id:"experiment",label:"Experiments"}],o=[{id:"",label:"None"},{id:"neoforge",label:"NeoForge"},{id:"forge",label:"Forge"},{id:"fabric",label:"Fabric"},{id:"quilt",label:"Quilt"},{id:"liteloader",label:"LiteLoader"}],s=["","fabric","quilt"],c=["fabric","quilt"],u="https://github.com/BlackCatOfficialytb/TwilightMC-OSS#readme";let d=pe(null),h=pe(!0),f=pe(""),v=pe(""),g=pe(Pt(new Set(["release"]))),y=pe(""),m=pe(""),p=pe(""),M=pe(""),_=pe(""),E=pe(""),C=pe(Pt([])),D=pe("idle"),P=0,k=pe(!1),b=pe("");const T=[{id:"minecraft-access",label:"Minecraft Access",hint:"Core: screen reader & 3D spatial navigation"},{id:"sound-physics-remastered",label:"Sound Physics Remastered",hint:"Optional: spatial acoustics & directional echoes"}],oe=[{id:"echosight",label:"EchoSight",hint:"Directional sound radar & priority subtitles"},{id:"subtitles-visualizer",label:"Subtitles Visualizer",hint:"In-world directional subtitle markers"},{id:"visible-sound",label:"Visible Sound",hint:"In-world block/entity sound highlights"},{id:"soundsight",label:"SoundSight",hint:"Visual threat ring & enhanced subtitles"}];let H=pe(Pt(new Set(["minecraft-access"])));const F=st(()=>[...i()?T:[],...r()?oe:[]]);Kt(()=>{x(H,new Set(i()&&l(_)==="fabric"?["minecraft-access"]:[]),!0)});function z(Te){const Be=new Set(l(H));Be.has(Te)?Be.delete(Te):Be.add(Te),x(H,Be,!0)}function Z(Te,Be){const R=window.__TAURI__?.core;return R?R.invoke(Te,Be):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const V=st(()=>{const Te=l(d)?.versions??[],Be=l(v).trim().toLowerCase();return Te.filter(R=>l(g).has(R.version_type)&&(!Be||R.id.toLowerCase().includes(Be)))}),B=st(()=>!s.includes(l(_))),ie=st(()=>c.includes(l(_))),ge=st(()=>!!l(y)&&!l(B)&&!l(k)&&!(l(ie)&&l(D)==="loading"));function ve(Te){return{release:"Release",snapshot:"Snapshot",old_beta:"Beta",old_alpha:"Alpha",experiment:"Experiment"}[Te]??Te}function Q(Te){if(!Te)return"—";const Be=new Date(Te);if(Number.isNaN(Be.getTime()))return String(Te).slice(0,10);const R=G=>String(G).padStart(2,"0");return`${R(Be.getDate())}/${R(Be.getMonth()+1)}/${Be.getFullYear()}`}function ne(Te){const Be=new Set(l(g));Be.has(Te)?Be.delete(Te):Be.add(Te),x(g,Be,!0)}function Se(){const Te=window.__TAURI__?.core?.convertFileSrc;return l(M)&&Te?Te(l(M)):null}async function Ae(){const Te=window.__TAURI__?.dialog?.open;if(!Te){x(b,"Image picker unavailable in this build.");return}try{const Be=await Te({multiple:!1,title:"Choose an instance icon",filters:[{name:"Images",extensions:["png","jpg","jpeg","webp","ico"]}]});Be&&(x(M,String(Be),!0),x(b,""))}catch(Be){x(b,String(Be),!0)}}async function Pe(){if(!l(ie)||!l(y))return;const Te=++P;x(D,"loading");try{const Be=await Z("fetch_loader_versions",{loader:l(_),gameVersion:l(y)});if(Te!==P)return;x(C,Be,!0),x(E,Be.find(R=>R.stable)?.version??Be[0]?.version??"",!0),x(D,Be.length?"idle":"error",!0)}catch{if(Te!==P)return;x(C,[],!0),x(E,""),x(D,"error")}}async function Fe(Te){x(y,Te,!0),l(ie)&&await Pe()}async function je(Te){x(_,Te,!0),x(E,""),x(C,[],!0),x(D,"idle"),l(ie)&&await Pe()}async function ze(){x(h,!0),x(f,"");try{x(d,await Z("fetch_vanilla_versions"),!0)}catch(Te){x(f,String(Te),!0)}finally{x(h,!1)}}async function Qe(){if(!l(ge))return;x(k,!0),x(b,"");const Te=l(y),Be=l(m).trim()||Te;try{const R=await Z("create_instance",{name:Be,version:Te,loader:l(_)||null,loaderVersion:l(E).trim()||null});let G="";if(l(M))try{await Z("set_instance_icon",{instanceId:R.id,imagePath:l(M)})}catch(te){G=`Instance created, but the icon could not be applied: ${te}`}if(l(p).trim())try{await Z("set_instance_group",{instanceId:R.id,group:l(p).trim()})}catch(te){G=G?`${G} The group could not be set: ${te}`:`Instance created, but the group could not be set: ${te}`}for(const te of l(H))try{await Z("install_mod_with_deps",{instanceId:R.id,projectId:te,gameVersion:Te,loader:"fabric"})}catch(ee){G=G?`${G} ${te} could not be installed: ${ee}`:`Instance created, but ${te} could not be installed: ${ee}`}e.oncreated?.(R,G)}catch(R){x(b,String(R),!0)}finally{x(k,!1)}}function dt(){window.__TAURI__?.core?.invoke("open_path",{path:u}).catch(Te=>x(b,String(Te),!0))}nr(()=>{const Te=lo(()=>e.onclose?.());return ze(),()=>co(Te)});var Xe=uv(),J=U(Xe),lt=U(J),We=U(lt),N=U(We);{var $=Te=>{var Be=Vm(),R=vt(Be);we(G=>Ve(R,"src",G),[()=>Se()]),W(Te,Be)},Ie=st(()=>Se()),he=Te=>{var Be=Wm();W(Te,Be)};ke(N,Te=>{l(Ie)?Te($):Te(he,-1)})}var Me=w(We,2),se=U(Me),Oe=w(se,2),Le=w(U(Oe),2),A=U(Le);A.value=A.__value="";var S=w(A);At(S,16,t,Te=>Te,(Te,Be)=>{var R=Pc(),G=ue(R,!0),te={};we(()=>{de(G,Be),te!==(te=Be)&&(R.value=(R.__value=te)??"")}),W(Te,R)}),Js(Le);var I=w(Me,2),Y=w(lt,2),X=U(Y),_e=U(X),Ue=U(_e);{var ye=Te=>{var Be=jm();W(Te,Be)},q=Te=>{var Be=Xm(),R=U(Be),G=ue(R,!0),te=w(R,2);we(()=>de(G,l(f))),ce("click",te,ze),W(Te,Be)},L=Te=>{var Be=Zm(),R=w(U(Be));At(R,21,()=>l(V),G=>G.id,(G,te)=>{var ee=qm(),fe=U(ee),Ge=U(fe),Ke=ue(Ge,!0),it=w(Ge,2);{var et=yt=>{var rn=Ym();W(yt,rn)};ke(it,yt=>{l(te).is_latest_release&&yt(et)})}var at=w(fe),tt=ue(at,!0),ot=w(at),wt=ue(ot,!0);we((yt,rn)=>{ht(ee,1,`cursor-pointer border-b border-(--border)/50 ${l(y)===l(te).id?"bg-(--accent)/10":"hover:bg-(--accent)/5"}`),de(Ke,l(te).id),de(tt,yt),de(wt,rn)},[()=>Q(l(te).release_time),()=>ve(l(te).version_type)]),ce("click",ee,()=>Fe(l(te).id)),ce("keydown",ee,yt=>{(yt.key==="Enter"||yt.key===" ")&&(yt.preventDefault(),Fe(l(te).id))}),W(G,ee)},G=>{var te=Km();W(G,te)}),W(Te,Be)};ke(Ue,Te=>{l(h)?Te(ye):l(f)?Te(q,1):Te(L,-1)})}var ae=w(_e,2),me=U(ae),xe=w(me,2),Ee=ue(xe),Ye=w(X,2),nt=U(Ye),O=w(U(nt),2);At(O,21,()=>a,Te=>Te.id,(Te,Be)=>{var R=Jm(),G=U(R),te=w(G,2),ee=ue(te,!0);we(fe=>{Eo(G,fe),de(ee,l(Be).label)},[()=>l(g).has(l(Be).id)]),ce("change",G,()=>ne(l(Be).id)),W(Te,R)});var Ne=w(nt,2),le=w(U(Ne),2);At(le,21,()=>o,Te=>Te.id,(Te,Be)=>{var R=Qm(),G=U(R),te=w(G,2),ee=ue(te,!0);we(()=>{Ja(G,l(Be).id),Eo(G,l(_)===l(Be).id),de(ee,l(Be).label)}),ce("change",G,()=>je(l(Be).id)),W(Te,R)});var Ce=w(le,2);{var be=Te=>{var Be=$m();W(Te,Be)},De=Te=>{var Be=ev();W(Te,Be)};ke(Ce,Te=>{l(B)?Te(be):l(_)||Te(De,1)})}var qe=w(Ce,2);{var rt=Te=>{var Be=tv();W(Te,Be)};ke(qe,Te=>{i()&&(l(_)===""||l(_)==="horizon")&&Te(rt)})}var Mt=w(qe,2);{var ct=Te=>{var Be=iv(),R=w(U(Be),4);At(R,21,()=>l(F),G=>G.id,(G,te)=>{var ee=nv(),fe=U(ee),Ge=w(fe,2),Ke=U(Ge),it=ue(Ke,!0),et=w(Ke,2),at=ue(et,!0);we(tt=>{Eo(fe,tt),de(it,l(te).label),de(at,l(te).hint)},[()=>l(H).has(l(te).id)]),ce("change",fe,()=>z(l(te).id)),W(G,ee)}),W(Te,Be)};ke(Mt,Te=>{l(_)==="fabric"&&l(F).length&&Te(ct)})}var Rt=w(Mt,2);{var _t=Te=>{var Be=ov(),R=w(vt(Be),2);{var G=fe=>{var Ge=rv();W(fe,Ge)},te=fe=>{var Ge=av(),Ke=vt(Ge);kt(Ke,()=>l(E),it=>x(E,it)),W(fe,Ge)},ee=fe=>{var Ge=sv(),Ke=U(Ge);Ke.value=Ke.__value="";var it=w(Ke);At(it,17,()=>l(C),et=>et.version,(et,at)=>{var tt=Pc(),ot=ue(tt),wt={};we(()=>{de(ot,`${l(at).version??""}${l(at).stable?"":" (unstable)"}`),wt!==(wt=l(at).version)&&(tt.value=(tt.__value=wt)??"")}),W(et,tt)}),Js(Ge),Qs(Ge,()=>l(E),et=>x(E,et)),W(fe,Ge)};ke(R,fe=>{l(D)==="loading"?fe(G):l(D)==="error"?fe(te,1):fe(ee,-1)})}W(Te,Be)};ke(Rt,Te=>{l(ie)&&Te(_t)})}var bt=w(Y,2),Ut=U(bt),dn=w(Ut,2);{var wn=Te=>{var Be=lv(),R=ue(Be,!0);we(()=>{Ve(Be,"title",l(b)),de(R,l(b))}),W(Te,Be)},fn=Te=>{var Be=cv(),R=ue(Be,!0);we(()=>de(R,l(y)?`Selected Minecraft ${l(y)}`:"Pick a version to continue")),W(Te,Be)};ke(dn,Te=>{l(b)?Te(wn):Te(fn,-1)})}var xn=w(dn,2),oi=w(xn,2),Sa=ue(oi,!0);we(()=>{Ve(se,"placeholder",l(y)?`Instance name (${l(y)})`:"Instance name"),me.disabled=!l(d),de(Ee,`${l(V).length??""} shown`),oi.disabled=!l(ge),Ve(oi,"title",l(B)?"This mod loader is not supported yet.":"Create the instance"),de(Sa,l(k)?"Creating…":"OK")}),ce("click",Xe,Te=>{Te.target===Te.currentTarget&&e.onclose?.()}),ce("click",We,Ae),kt(se,()=>l(m),Te=>x(m,Te)),Qs(Le,()=>l(p),Te=>x(p,Te)),ce("click",I,()=>e.onclose?.()),kt(me,()=>l(v),Te=>x(v,Te)),ce("click",Ut,dt),ce("click",xn,()=>e.onclose?.()),ce("click",oi,Qe),W(n,Xe),Jt()}_n(["click","keydown","change"]);const $a="twilight_user_accent",Zl="twilight_custom_themes",Lc="#06B6D4",Dc=[{name:"Diamond Cyan",hex:"#06B6D4"},{name:"Emerald Green",hex:"#10B981"},{name:"Redstone Crimson",hex:"#EF4444"},{name:"Amethyst Mauve",hex:"#C084FC"},{name:"Gold Amber",hex:"#F59E0B"},{name:"Lapis Azure",hex:"#3B82F6"},{name:"Ender Pearl",hex:"#14B8A6"}],Ic="#0F172A",fv="#FFFFFF",hv={latte:[{name:"Rosewater",hex:"#dc8a78"},{name:"Flamingo",hex:"#dd7878"},{name:"Pink",hex:"#ea76cb"},{name:"Mauve",hex:"#8839ef"},{name:"Red",hex:"#d20f39"},{name:"Maroon",hex:"#e64553"},{name:"Peach",hex:"#fe640b"},{name:"Yellow",hex:"#df8e1d"},{name:"Green",hex:"#40a02b"},{name:"Teal",hex:"#179299"},{name:"Sky",hex:"#04a5e5"},{name:"Sapphire",hex:"#209fb5"},{name:"Blue",hex:"#1e66f5"},{name:"Lavender",hex:"#7287fd"}],frappe:[{name:"Rosewater",hex:"#f2d5cf"},{name:"Flamingo",hex:"#eebebe"},{name:"Pink",hex:"#f4b8e4"},{name:"Mauve",hex:"#ca9ee6"},{name:"Red",hex:"#e78284"},{name:"Maroon",hex:"#ea999c"},{name:"Peach",hex:"#ef9f76"},{name:"Yellow",hex:"#e5c890"},{name:"Green",hex:"#a6d189"},{name:"Teal",hex:"#81c8be"},{name:"Sky",hex:"#99d1db"},{name:"Sapphire",hex:"#85c1dc"},{name:"Blue",hex:"#8caaee"},{name:"Lavender",hex:"#babbf1"}],macchiato:[{name:"Rosewater",hex:"#f4dbd6"},{name:"Flamingo",hex:"#f0c6c6"},{name:"Pink",hex:"#f5bde6"},{name:"Mauve",hex:"#c6a0f6"},{name:"Red",hex:"#ed8796"},{name:"Maroon",hex:"#ee99a0"},{name:"Peach",hex:"#f5a97f"},{name:"Yellow",hex:"#eed49f"},{name:"Green",hex:"#a6da95"},{name:"Teal",hex:"#8bd5ca"},{name:"Sky",hex:"#91d7e3"},{name:"Sapphire",hex:"#7dc4e4"},{name:"Blue",hex:"#8aadf4"},{name:"Lavender",hex:"#b7bdf8"}],mocha:[{name:"Rosewater",hex:"#f5e0dc"},{name:"Flamingo",hex:"#f2cdcd"},{name:"Pink",hex:"#f5c2e7"},{name:"Mauve",hex:"#cba6f7"},{name:"Red",hex:"#f38ba8"},{name:"Maroon",hex:"#eba0ac"},{name:"Peach",hex:"#fab387"},{name:"Yellow",hex:"#f9e2af"},{name:"Green",hex:"#a6e3a1"},{name:"Teal",hex:"#94e2d5"},{name:"Sky",hex:"#89dceb"},{name:"Sapphire",hex:"#74c7ec"},{name:"Blue",hex:"#89b4fa"},{name:"Lavender",hex:"#b4befe"}]};function ds(n){return hv[n]??[]}function os(n){let e=n.trim().replace(/^#/,"");return/^[0-9a-f]{3}$/i.test(e)&&(e=e.split("").map(t=>t+t).join("")),/^[0-9a-f]{6}$/i.test(e)?`#${e.toLowerCase()}`:null}function Uc(n){const e=t=>{const i=parseInt(n.replace("#","").substring(t,t+2),16)/255;return i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function pv(n){const e=Uc(n),t=1.05/(e+.05);return(e+.05)/(Uc(Ic)+.05)>=t?Ic:fv}function es(n,{persist:e=!0}={}){const t=os(n);if(!t)return!1;const i=document.documentElement;return i.style.setProperty("--user-accent",t),i.style.setProperty("--on-accent",pv(t)),e&&localStorage.setItem($a,t),!0}function mv(){localStorage.removeItem($a);const n=document.documentElement;n.style.removeProperty("--user-accent"),n.style.removeProperty("--on-accent")}function bl(){return os(localStorage.getItem($a)??"")}function vv(){const n=bl();n&&es(n)}const uo=[{id:"twilight-dark",label:"Twilight Dark",dark:!0,cls:null,swatch:["#0b0f19","#182234","#06B6D4"],accent:"#06B6D4",suggested:Dc},{id:"twilight-light",label:"Twilight Light",dark:!1,cls:null,swatch:["#f1f5f9","#ffffff","#0891b2"],accent:"#0891b2",suggested:[{name:"Diamond Cyan",hex:"#0891B2"},...Dc.slice(1)]},{id:"catppuccin-latte",label:"Catppuccin Latte",dark:!1,cls:"preset-catppuccin-latte",swatch:["#eff1f5","#e6e9ef","#8839ef"],accent:"#8839ef",suggested:ds("latte")},{id:"catppuccin-frappe",label:"Catppuccin Frappé",dark:!0,cls:"preset-catppuccin-frappe",swatch:["#303446","#414559","#ca9ee6"],accent:"#ca9ee6",suggested:ds("frappe")},{id:"catppuccin-macchiato",label:"Catppuccin Macchiato",dark:!0,cls:"preset-catppuccin-macchiato",swatch:["#24273a","#363a4f","#c6a0f6"],accent:"#c6a0f6",suggested:ds("macchiato")},{id:"catppuccin-mocha",label:"Catppuccin Mocha",dark:!0,cls:"preset-catppuccin-mocha",swatch:["#1e1e2e","#313244","#cba6f7"],accent:"#cba6f7",suggested:ds("mocha")},{id:"nord",label:"Nord",dark:!0,cls:"preset-nord",swatch:["#2e3440","#3b4252","#88c0d0"],accent:"#88c0d0",suggested:[{name:"Frost Cyan",hex:"#88c0d0"},{name:"Frost Blue",hex:"#81a1c1"},{name:"Frost Steel",hex:"#5e81ac"},{name:"Aurora Green",hex:"#a3be8c"},{name:"Aurora Yellow",hex:"#ebcb8b"},{name:"Aurora Red",hex:"#bf616a"},{name:"Aurora Mauve",hex:"#b48ead"}]},{id:"tokyo-night",label:"Tokyo Night",dark:!0,cls:"preset-tokyo-night",swatch:["#1a1b26","#24283b","#7aa2f7"],accent:"#7aa2f7",suggested:[{name:"Storm Blue",hex:"#7aa2f7"},{name:"Cyan",hex:"#7dcfff"},{name:"Purple",hex:"#bb9af7"},{name:"Green",hex:"#9ece6a"},{name:"Orange",hex:"#ff9e64"},{name:"Red",hex:"#f7768e"}]},{id:"high-contrast",label:"High Contrast",dark:!0,cls:"preset-high-contrast",swatch:["#000000","#0a0a0a","#00ffff"],accent:"#00ffff",suggested:[{name:"Neon Cyan",hex:"#00ffff"},{name:"Neon Yellow",hex:"#ffff00"},{name:"Neon Green",hex:"#00ff00"},{name:"Neon Magenta",hex:"#ff00ff"}]}],Jl="twilight-dark",yl={bg1:"#0b0f19",bg2:"#111827",bg3:"#182234",border1:"#2d3a4f",fg1:"#f8fafc",fg2:"#94a3b8",accent1:"#06b6d4",accent2:"#f59e0b"},gv=[{key:"bg1",label:"Canvas"},{key:"bg2",label:"Surface"},{key:"bg3",label:"Subtle"},{key:"border1",label:"Border"},{key:"fg1",label:"Text"},{key:"fg2",label:"Muted text"},{key:"accent1",label:"Accent"},{key:"accent2",label:"Star accent"}];function _v(n){let e="";for(const t of n){const i=t.codePointAt(0);i>=65&&i<=90?e+=String.fromCharCode(i+32):i>=97&&i<=122||i>=48&&i<=57||t==="-"||t==="_"?e+=t:(t===" "||t===".")&&(e+="-")}return e.replace(/^-+|-+$/g,"")}function mf(n){const e=n&&typeof n=="object"?n:{},t={};for(const[i,r]of Object.entries(yl))t[i]=os(e[i]??"")??r;return t}function xv(n){return typeof n=="string"&&n.startsWith("custom:")}function vf(n){return vr().find(e=>e.id===n)??null}function vr(){try{const n=JSON.parse(localStorage.getItem(Zl)??"[]");return Array.isArray(n)?n.filter(e=>e&&typeof e=="object"&&xv(e.id)).map(e=>({id:e.id,name:String(e.name??"Custom theme"),dark:!!e.dark,tokens:mf(e.tokens)})):[]}catch{return[]}}function Nc({name:n,dark:e,tokens:t}){const i=String(n??"").trim()||"Custom theme",r={id:`custom:${_v(i)||"theme"}`,name:i,dark:!!e,tokens:mf(t)},a=[...vr().filter(o=>o.id!==r.id),r];return localStorage.setItem(Zl,JSON.stringify(a)),r}function bv(n){const e=vr().filter(t=>t.id!==n);return localStorage.setItem(Zl,JSON.stringify(e)),e}function Oc(){try{const n=getComputedStyle(document.documentElement),e=(i,r)=>{const a=n.getPropertyValue(i).trim();return os(a)??r},t={};for(const[i,r]of Object.entries(yl)){const a=`--${i.replace(/(\d)$/,"-$1")}`;t[i]=e(a,r)}return t}catch{return{...yl}}}const yv=new Set(uo.map(n=>n.id));function Ql(n){const e=(n??"").trim();return e==="dark"?Jl:e==="light"?"twilight-light":yv.has(e)||vf(e)?e:null}function Sv(n){const e=n.tokens;return{id:n.id,label:n.name,dark:n.dark,cls:null,swatch:[e.bg1,e.bg3,e.accent1],accent:e.accent1,suggested:[{name:n.name,hex:e.accent1}],tokens:e}}function ia(n){const e=Ql(n);return e?uo.find(t=>t.id===e)??Sv(vf(e)):null}function Ba(n){return ia(n)?.dark??!0}const Mv=["--bg-1","--bg-2","--bg-3","--border-1","--fg-1","--fg-2","--accent-1","--accent-2"];let Co="";function Ev(n){const e=ia(n)??ia(Jl);if(!e||e.id===Co)return e;const t=Co==="";Co=e.id;const i=document.documentElement;for(const r of Mv)i.style.removeProperty(r);i.classList.toggle("dark",e.dark),i.classList.toggle("light",!e.dark);for(const r of uo)r.cls&&i.classList.toggle(r.cls,e.cls===r.cls);if(e.tokens){const r=e.tokens;i.style.setProperty("--bg-1",r.bg1),i.style.setProperty("--bg-2",r.bg2),i.style.setProperty("--bg-3",r.bg3),i.style.setProperty("--border-1",r.border1),i.style.setProperty("--fg-1",r.fg1),i.style.setProperty("--fg-2",r.fg2),i.style.setProperty("--accent-1",r.accent1),i.style.setProperty("--accent-2",r.accent2),localStorage.removeItem($a),es(r.accent1,{persist:!1})}else t||(localStorage.removeItem($a),es(e.accent,{persist:!1}));return e}const wv="/".replace(/\/{2,}/g,"/"),gf=[{id:"fluent-auto",label:"Fluent (Auto)",hint:"Freesm Fluent · follows the theme"},{id:"fluent",label:"Fluent Light",hint:"Freesm Fluent · light ink"},{id:"fluent_dark",label:"Fluent Dark",hint:"Freesm Fluent · white ink"},{id:"breeze_dark",label:"Breeze Dark",hint:"Prism · KDE Breeze dark"},{id:"breeze_light",label:"Breeze Light",hint:"Prism · KDE Breeze light"},{id:"pe_colored",label:"Prism PE Colored",hint:"Prism · full-color PE"},{id:"twemoji",label:"Twemoji",hint:"Emoji glyphs · the classic look"}],_f=new Set(gf.map(n=>n.id)),xf="twilight-icon-pack",Tv={instances:"viewfolder",folder:"viewfolder",server:"server",settings:"settings",accounts:"accounts",new:"new",launch:"launch",edit:"instance-settings",copy:"copy",export:"export",delete:"delete",shortcut:"shortcut",mods:"centralmods",refresh:"refresh",console:"log",tag:"tag",star:"star",help:"help",about:"about",screenshots:"screenshots",worlds:"worlds"},Fc={kill:"⏹",download:"⬇",search:"🔍",sun:"☀",moon:"🌙",package:"📦",modrinth:"🧩",instances:"📁",folder:"📁",server:"🌐",settings:"⚙",accounts:"👤",new:"➕",launch:"▶",edit:"✏",copy:"⧉",export:"⤓",delete:"🗑",shortcut:"🔗",mods:"📦",refresh:"🔄",console:"📜",tag:"🏷",star:"★",help:"❔",about:"ℹ",screenshots:"🖼",worlds:"🌐"};let za=null;function $s(){if(za)return za;const n=localStorage.getItem(xf);return za=_f.has(n??"")?n:"fluent-auto",za}function Av(n){_f.has(n)&&(za=n,localStorage.setItem(xf,n),bf())}let Sl="";function Rv(n){const e=Ql(n)??String(n??"");e!==Sl&&(Sl=e,bf())}function Cv(n=$s()){return n!=="fluent-auto"?n:Ba(Sl||"twilight-dark")?"fluent_dark":"fluent"}const Ml=new Set;function bf(){for(const n of Ml)n()}function Pv(n){return Ml.add(n),()=>Ml.delete(n)}function Lv(n,e=null){const t=e??$s(),i=n;if(t==="twemoji"){const o=Fc[n];return o?{kind:"emoji",emoji:o,label:i}:null}const r=Tv[n];if(r)return{kind:"svg",src:`${wv}icons/${Cv(t)}/${r}.svg`,label:i};const a=Fc[n];return a?{kind:"emoji",emoji:a,label:i}:null}var Dv=re('<img draggable="false"/>'),Iv=re("<span></span>");function Gt(n,e){Zt(e,!0);let t=Je(e,"name",3,""),i=Je(e,"pack",3,null),r=Je(e,"size",3,null),a=Je(e,"alt",3,""),o=Je(e,"class",3,""),s=pe(0);const c=Pv(()=>x(s,l(s)+1));Kl(c);const u=st(()=>(l(s),Lv(t(),i()))),d=st(()=>r()?`${r()}px`:"1em"),h=st(()=>a()||t());let f=pe(!1);Kt(()=>{l(u)?.kind,x(f,!1)});var v=Zs(),g=vt(v);{var y=M=>{var _=Zs(),E=vt(_);ff(E,()=>l(u).src,C=>{var D=Dv();we(()=>{Ve(D,"src",l(u).src),Ve(D,"alt",l(h)),Ve(D,"title",a()||void 0),ht(D,1,`shrink-0 select-none ${o()??""}`),Sn(D,`width:${l(d)??""};height:${l(d)??""};object-fit:contain`),Ve(D,"aria-hidden",a()?void 0:"true")}),gi("error",D,()=>x(f,!0)),W(C,D)}),W(M,_)},m=M=>{{let _=st(()=>a()||void 0);pi(M,{get emoji(){return l(u).emoji},get size(){return r()},get alt(){return l(_)},get class(){return o()}})}},p=M=>{var _=Iv();we(()=>{ht(_,1,`inline-block shrink-0 ${o()??""}`),Sn(_,`width:${l(d)??""};height:${l(d)??""}`)}),W(M,_)};ke(g,M=>{l(u)?.kind==="svg"&&!l(f)?M(y):l(u)?.kind==="emoji"?M(m,1):M(p,-1)})}W(n,v),Jt()}var Uv=re('<span class="rounded bg-(--bg-subtle) px-2 py-0.5 text-[10px] font-medium text-(--text-muted)" title="Group"> </span>'),Nv=re('<button class="flex w-full items-center justify-center gap-1.5 rounded px-3 py-2 text-[12px] font-medium text-rose-400 hover:bg-rose-500/10" title="Stop the running game"><!> Kill</button>'),Ov=re("<button> </button>"),Fv=re('<div class="flex flex-col gap-1 rounded border border-(--border) bg-(--bg-subtle)/50 p-2"><button>No group</button> <!> <div class="mt-1 flex gap-1"><input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-surface) px-2 text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="New group…"/> <button class="shrink-0 rounded bg-(--accent)/15 px-2 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Add</button></div></div>'),kv=re('<aside class="ctx-in flex w-[280px] shrink-0 flex-col overflow-y-auto border-l border-(--border) bg-(--bg-surface) p-3.5" aria-label="Selected instance details"><span class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-(--accent)/15"><img alt="" draggable="false" class="h-14 w-14 object-cover"/></span> <h3 class="mt-2.5 truncate text-[14px] font-semibold"> </h3> <div class="mt-1.5 flex flex-wrap gap-1.5"><span class="rounded bg-(--accent)/15 px-2 py-0.5 text-[10px] font-medium text-(--accent)"> </span> <span> </span> <!></div> <div class="mt-2 truncate font-mono text-[10px] text-(--text-muted)"> </div> <div class="mt-3 flex flex-col gap-1.5"><button class="flex w-full items-center justify-center gap-1.5 rounded bg-(--accent) px-3 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"><!> Launch</button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Edit</button> <button class="flex w-full items-center rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Move this instance to another group"><span>▤ Change Group</span> <span class="ml-auto text-[9px]"> </span></button> <!> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Folder</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Export this instance as a .zip"><!> Export</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Clone this instance"><!> Copy</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-rose-400 hover:bg-rose-500/10"><!> Delete</button> <button class="flex w-full items-center gap-1.5 rounded px-3 py-2 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Create a desktop shortcut that launches this instance"><!> Create Shortcut</button></div> <div class="mt-auto border-t border-(--border) pt-2.5"><p class="text-[10.5px] leading-relaxed text-(--text-muted)"> </p> <p class="mt-1 text-[10.5px] text-(--text-muted)"> </p></div></aside>');function Bv(n,e){Zt(e,!0);let t=Je(e,"storage",3,null),i=Je(e,"gameRunning",3,!1),r=Je(e,"modsCount",3,null),a=Je(e,"groups",19,()=>[]),o=pe(!1),s=pe("");const c=st(()=>{switch(e.instance.loader_type){case"Fabric":case"Quilt":return"bg-(--accent)/15 text-(--accent)";case"Horizon":case"Forge":case"NeoForge":return"bg-(--accent-star)/15 text-(--accent-star)";default:return"bg-(--bg-subtle) text-(--text-muted)"}});function u(){const se=window.__TAURI__?.core?.convertFileSrc;return e.instance.icon_path&&se?se(e.instance.icon_path):"/logo.png"}function d(){return t()?[t().instances_dir.replace(/\\/g,"/"),e.instance.id].join("/"):e.instance.id}function h(se){const Oe=new Date(se*1e3),Le=A=>String(A).padStart(2,"0");return`${Le(Oe.getDate())}/${Le(Oe.getMonth()+1)}/${Oe.getFullYear()} ${Le(Oe.getHours())}:${Le(Oe.getMinutes())}:${Le(Oe.getSeconds())}`}function f(se){const Oe=Math.max(0,Math.floor(se)),Le=[[86400,"day"],[3600,"hour"],[60,"minute"],[1,"second"]],A=[];let S=Oe;for(const[I,Y]of Le){const X=Math.floor(S/I);if(X&&(A.push(`${X} ${Y}${X===1?"":"s"}`),S-=X*I,A.length===2))break}return A.length?A.join(" "):"0 seconds"}const v=st(()=>{const se=`Minecraft ${e.instance.minecraft_version}`;return e.instance.last_played?`${se}, last played on ${h(e.instance.last_played)}, total played for ${f(e.instance.total_time_played)}`:se});function g(se){x(o,!1),x(s,""),e.onchangegroup?.(se.trim()?se.trim():null)}var y=kv(),m=U(y),p=ue(m),M=w(m,2),_=ue(M,!0),E=w(M,2),C=U(E),D=ue(C,!0),P=w(C,2),k=ue(P,!0),b=w(P,2);{var T=se=>{var Oe=Uv(),Le=ue(Oe);we(()=>de(Le,`▤ ${e.instance.group??""}`)),W(se,Oe)};ke(b,se=>{e.instance.group&&se(T)})}var oe=w(E,2),H=ue(oe,!0),F=w(oe,2),z=U(F),Z=U(z);Gt(Z,{name:"launch",size:13});var V=w(z,2);{var B=se=>{var Oe=Nv(),Le=U(Oe);Gt(Le,{name:"kill",size:13}),ce("click",Oe,function(...A){e.onkill?.apply(this,A)}),W(se,Oe)};ke(V,se=>{i()&&se(B)})}var ie=w(V,2),ge=U(ie);Gt(ge,{name:"edit",size:13});var ve=w(ie,2),Q=w(U(ve),2),ne=ue(Q,!0),Se=w(ve,2);{var Ae=se=>{var Oe=Fv(),Le=U(Oe),A=w(Le,2);At(A,16,a,X=>X,(X,_e)=>{var Ue=Ov(),ye=ue(Ue,!0);we(()=>{ht(Ue,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group===_e?"font-medium text-(--accent)":"text-(--text-muted)"}`),de(ye,_e)}),ce("click",Ue,()=>g(_e)),W(X,Ue)});var S=w(A,2),I=U(S),Y=w(I,2);we(X=>{ht(Le,1,`rounded px-2 py-1 text-left text-[12px] hover:bg-(--bg-subtle) ${e.instance.group?"text-(--text-muted)":"font-medium text-(--accent)"}`),Y.disabled=X},[()=>!l(s).trim()]),ce("click",Le,()=>g("")),ce("keydown",I,X=>{X.key==="Enter"&&l(s).trim()&&g(l(s))}),kt(I,()=>l(s),X=>x(s,X)),ce("click",Y,()=>g(l(s))),W(se,Oe)};ke(Se,se=>{l(o)&&se(Ae)})}var Pe=w(Se,2),Fe=U(Pe);Gt(Fe,{name:"folder",size:13});var je=w(Pe,2),ze=U(je);Gt(ze,{name:"export",size:13});var Qe=w(je,2),dt=U(Qe);Gt(dt,{name:"copy",size:13});var Xe=w(Qe,2),J=U(Xe);Gt(J,{name:"delete",size:13});var lt=w(Xe,2),We=U(lt);Gt(We,{name:"shortcut",size:13});var N=w(F,2),$=U(N),Ie=ue($,!0),he=w($,2),Me=ue(he);we((se,Oe,Le)=>{Ve(p,"src",se),Ve(M,"title",e.instance.name),de(_,e.instance.name),de(D,e.instance.minecraft_version),ht(P,1,`rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${l(c)??""}`),de(k,e.instance.loader_type),Ve(oe,"title",Oe),de(H,Le),z.disabled=i(),Ve(z,"title",i()?"A game is already running":`Launch ${e.instance.name}`),de(ne,l(o)?"▴":"▾"),Pe.disabled=!t(),Ve(Pe,"title",t()?"Opens the instance folder":"Storage unknown"),de(Ie,l(v)),de(Me,`${r()??"…"??""} mods installed`)},[()=>u(),()=>d(),()=>d()]),gi("error",p,se=>{se.currentTarget.dataset.f||(se.currentTarget.dataset.f="1",se.currentTarget.src="/logo.png")}),ce("click",z,function(...se){e.onlaunch?.apply(this,se)}),ce("click",ie,function(...se){e.onedit?.apply(this,se)}),ce("click",ve,()=>x(o,!l(o))),ce("click",Pe,function(...se){e.onopenfolder?.apply(this,se)}),ce("click",je,function(...se){e.onexport?.apply(this,se)}),ce("click",Qe,function(...se){e.oncopy?.apply(this,se)}),ce("click",Xe,function(...se){e.ondelete?.apply(this,se)}),ce("click",lt,function(...se){e.onshortcut?.apply(this,se)}),W(n,y),Jt()}_n(["click","keydown"]);var zv=re("<button></button>"),Gv=re('<span class="text-[11px] text-rose-400">invalid hex</span>'),Hv=re('<span class="text-[11px] text-(--text-muted)">live preview</span>'),Vv=re('<div class="flex flex-wrap items-center gap-2"></div> <div class="mt-2 flex items-center gap-2"><input type="color" class="h-7 w-9 cursor-pointer rounded border border-(--border) bg-(--bg-subtle) p-0.5" title="Custom accent color" aria-label="Custom accent color"/> <input class="h-7 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 font-mono text-[11px] uppercase outline-none placeholder:text-(--text-muted) focus:border-(--accent)" spellcheck="false" aria-label="Accent hex value" title="Accent hex value"/> <!></div>',1);function Wv(n,e){Zt(e,!0);let t=Je(e,"theme",3,"twilight-dark");const i=st(()=>ia(t())?.accent??Lc),r=st(()=>{const _=ia(t())?.suggested??[],E=(ia(t())?.accent??Lc).toLowerCase();return _.map(C=>({...C,isBuiltin:C.hex.toLowerCase()===E}))});let a=pe(Pt(bl())),o=pe(Pt(l(a)??l(i))),s=pe(!1);Kt(()=>{t(),x(a,bl(),!0),x(o,l(a)??l(i),!0),x(s,!1)});function c(_){return l(a)===null?_.isBuiltin:l(a)===_.hex.toLowerCase()}function u(_){_.isBuiltin?(mv(),x(a,null)):es(_.hex)&&x(a,_.hex.toLowerCase(),!0),x(o,l(a)??l(i),!0),x(s,!1)}function d(_,E){const C=es(_,{persist:E})?os(_):null;C?(x(a,C,!0),x(s,!1)):x(s,!0)}var h=Vv(),f=vt(h);At(f,21,()=>l(r),_=>_.hex,(_,E)=>{var C=zv();we((D,P)=>{ht(C,1,`h-7 w-7 rounded-full ${D??""}`),Sn(C,`background:${l(E).hex??""}`),Ve(C,"title",`${l(E).name??""}${l(E).isBuiltin?" (built-in)":""}`),Ve(C,"aria-label",`${l(E).name??""} accent`),Ve(C,"aria-pressed",P)},[()=>c(l(E))?"ring-2 ring-(--accent-1) ring-offset-2 ring-offset-(--bg-surface)":"border border-(--border) hover:opacity-80",()=>c(l(E))]),ce("click",C,()=>u(l(E))),W(_,C)});var v=w(f,2),g=U(v),y=w(g,2),m=w(y,2);{var p=_=>{var E=Gv();W(_,E)},M=_=>{var E=Hv();W(_,E)};ke(m,_=>{l(s)?_(p):_(M,-1)})}we(()=>{Ja(g,l(o)),Ja(y,l(o)),Ve(y,"placeholder",l(i))}),ce("input",g,_=>{x(o,_.currentTarget.value,!0),d(l(o),!1)}),ce("change",g,_=>d(_.currentTarget.value,!0)),ce("input",y,_=>{x(o,_.currentTarget.value,!0),d(l(o),!1)}),ce("change",y,_=>d(_.currentTarget.value,!0)),W(n,h),Jt()}_n(["click","input","change"]);var jv=re('<button><span class="flex w-5 shrink-0 items-center justify-center text-[15px]"><!></span> <span class="truncate"> </span></button>'),Xv=re('<button><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Yv=re('<div role="button" tabindex="0"><span class="flex gap-1" aria-hidden="true"><span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span> <span class="h-4 w-4 rounded-full border border-black/20"></span></span> <span class="truncate pr-4 text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span> <button class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded text-[10px] text-(--text-muted) hover:bg-rose-500/15 hover:text-rose-400">✕</button></div>'),qv=re('<button><span class="flex items-center gap-2"><!> <!> <!></span> <span class="text-[12px] font-medium"> </span> <span class="text-[10px] text-(--text-muted)"> </span></button>'),Kv=re('<label class="flex flex-col gap-1"><span class="text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <span class="flex items-center gap-1"><input type="color" class="h-7 w-8 shrink-0 cursor-pointer rounded border border-(--border) bg-(--bg-canvas) p-0.5"/> <input class="h-7 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-1.5 font-mono text-[11px] uppercase outline-none focus:border-(--accent)" spellcheck="false"/></span></label>'),kc=re('<p class="mt-2 text-[12px] text-(--text-muted)"> </p>'),Zv=re(`<h2 class="text-[16px] font-semibold">Appearance</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Theme mode and the accent that recolors the entire launcher.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Theme</h3> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"><!> <!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Accent color</h3> <div class="mt-3"><!></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Icon pack</h3> <p class="mt-1 text-[12px] text-(--text-muted)">The glyph set used across the launcher. Fluent (Auto) follows the theme.</p> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Create a custom theme</h3> <p class="mt-1 text-[12px] text-(--text-muted)">Build your own palette; it lives in this browser and joins the grid above.</p> <div class="mt-3 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex flex-wrap items-center gap-2"><input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Theme name" aria-label="Theme name"/> <div class="flex overflow-hidden rounded border border-(--border)" role="group" aria-label="Ground type"><button type="button">Dark</button> <button type="button">Light</button></div></div> <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"></div> <div class="mt-3 flex flex-wrap gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Copy the active theme's colors into the builder">Clone active theme</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save theme</button></div></div> <h3 class="mt-6 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Import / export</h3> <div class="mt-2"><textarea rows="5" spellcheck="false" class="w-full rounded border border-(--border) bg-(--bg-canvas) p-2 font-mono text-[11px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Paste an exported theme JSON here" aria-label="Theme JSON"></textarea> <div class="mt-2 flex gap-2"><button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Writes the builder draft into the field">⤒ Export draft</button> <button class="rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Saves the JSON in the field as a custom theme and applies it">⤓ Import from JSON</button></div></div> <!>`,1),Jv=re("<option> </option>"),Qv=re('<p class="mt-2 text-[12px] text-rose-400"> </p>'),$v=re('<h2 class="text-[16px] font-semibold">Java &amp; Memory</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Which JVM runs the game and how much memory it gets.</p> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Java runtime</h3> <select class="mt-2 h-9 w-full rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"><option>Auto-discovery (recommended)</option><!></select> <!> <!> <button class="mt-3 text-[12px] text-(--text-muted) hover:text-(--text-main)">↻ Rescan JREs</button> <h3 class="mt-8 text-[11px] font-semibold uppercase tracking-wide text-(--text-muted)">Memory allocation</h3> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xms</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <div class="mt-3 flex items-center gap-3"><span class="w-12 font-mono text-[12px] text-(--text-muted)">-Xmx</span> <input type="range" min="0" max="16384" step="256" class="flex-1 accent-[var(--accent)]"/> <input type="number" min="0" max="65536" step="256" class="h-8 w-24 rounded border border-(--border) bg-(--bg-subtle) px-2 text-right text-[12px] outline-none focus:border-(--accent)"/> <span class="w-8 text-[11px] text-(--text-muted)">MiB</span></div> <p class="mt-2 text-[12px] text-(--text-muted)">0 = launcher default. Recommended: 2048–4096.</p> <button class="mt-6 rounded bg-(--accent) px-4 py-2 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Save Java settings</button>',1),eg=re('<button class="rounded px-4 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40" title="Back to the default app-data subdirectory">Reset</button>'),tg=re('<div class="mt-2 flex items-center justify-between gap-3"><div class="min-w-0 truncate font-mono text-[11px] text-(--text-muted)"> </div> <button class="shrink-0 rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main) disabled:opacity-40">Purge staging</button></div>'),ng=re('<div class="mt-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="text-[12px] font-medium"> <span class="font-normal text-(--text-muted)"> </span></div> <!></div> <p class="mt-0.5 text-[11px] text-(--text-muted)"> </p> <div class="mt-3 flex gap-2"><input class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-canvas) px-2.5 font-mono text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)"/> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Pick a directory">Browse…</button> <button class="rounded border border-(--border) px-3 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open this folder in the file explorer">Open</button> <button class="rounded bg-(--accent) px-4 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button></div> <!></div>'),ig=re('<div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><div class="text-[12px] font-medium">App data folder</div> <div class="mt-2 truncate font-mono text-[12px] text-(--text-muted)"> </div></div> <button class="shrink-0 rounded border border-(--border) px-3 py-1.5 text-[12px] text-(--text-muted) hover:border-(--accent) hover:text-(--text-main)" title="Open the app data folder in the file explorer">Open</button></div></div> <!>',1),rg=re('<h2 class="text-[16px] font-semibold">Folders</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Where instances, libraries, mods and downloads live. Blank inputs keep the default under the app data folder.</p> <!>',1),ag=re(`<h2 class="text-[16px] font-semibold">Accessibility</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Assistive profiles that adapt suggestions, installs and pre-launch setup for screen-reader and caption users.</p> <div class="mt-6 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Blind Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Screen reader &amp; audio navigation. Suggests Minecraft Access and spatial-audio mods on
              Fabric; Fabric is strongly recommended over Vanilla or Horizon.</p></div> <button type="button" role="switch" aria-label="Blind Mode (screen reader and audio navigation): suggests Minecraft Access on Fabric and recommends Fabric over Vanilla or Horizon" title="Toggle Blind Mode"><span aria-hidden="true"></span></button></div> <div class="mt-4 flex items-center justify-between gap-4 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="min-w-0"><div class="text-[12px] font-medium">Deaf Mode</div> <p class="mt-1 text-[11px] text-(--text-muted)">Closed captions &amp; visual sound cues. Enforces <span class="font-mono">showSubtitles:true</span> in <span class="font-mono">options.txt</span> before every launch and suggests visual-sound Fabric mods.</p></div> <button type="button" role="switch" aria-label="Deaf Mode (closed captions and visual sound cues): enforces showSubtitles true in options.txt before launch and suggests visual-sound Fabric mods" title="Toggle Deaf Mode"><span aria-hidden="true"></span></button></div> <p class="mt-4 text-[11px] text-(--text-muted)" aria-live="polite"> </p>`,1),sg=re('<h2 class="text-[16px] font-semibold">About &amp; Updates</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Build info and project links.</p> <div class="mt-6 rounded border border-(--border) bg-(--bg-subtle) p-4"><div class="flex items-center gap-2"><img src="/logo.png" alt="" draggable="false" class="h-10 w-10"/> <div><div class="text-[13px] font-semibold">TwilightMC Bolide <span class="font-normal text-(--text-muted)"> </span></div> <div class="mt-0.5 text-[12px] text-(--text-muted)">pre-release UI · Bolide channel (alpha builds, may crash and rewrite formats)</div></div></div></div> <div class="mt-4 flex flex-col items-start gap-2"><button class="text-[12px] text-(--accent) hover:underline">↗ GitHub repository</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Releases (stable builds)</button> <button class="text-[12px] text-(--accent) hover:underline">↗ Report an issue</button></div> <p class="mt-6 text-[12px] text-(--text-muted)">An open-source Minecraft launcher. Vanilla, Fabric and Quilt today; more loaders land in later milestones.</p>',1),og=re("<p> </p>"),lg=re('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Settings sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div> <button class="mt-4 flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Open the dedicated Accounts page"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <span class="truncate">Accounts</span></button></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!> <!></div></div></div>');function cg(n,e){Zt(e,!0);let t=Je(e,"version",3,""),i=Je(e,"theme",15,"twilight-dark"),r=Je(e,"blindMode",15,!1),a=Je(e,"deafMode",15,!1),o=Je(e,"storage",3,null),s=Je(e,"runtimes",19,()=>[]),c=Je(e,"scanning",3,!1),u=Je(e,"javaError",3,""),d=Je(e,"javaPath",15,""),h=Je(e,"minMem",15,0),f=Je(e,"maxMem",15,0);Je(e,"sharedInput",11,""),Je(e,"instancesInput",11,"");let v=Je(e,"storageBusy",3,!1),g=Je(e,"storageMsg",3,""),y=Je(e,"javaMsg",3,""),m=Je(e,"gameRunning",3,!1);const p=[{id:"appearance",label:"Appearance",icon:"🎨"},{id:"java",label:"Java & Memory",icon:"☕"},{id:"storage",label:"Folders",icon:"📁"},{id:"accessibility",label:"Accessibility",icon:"♿"},{id:"about",label:"About & Updates",icon:"ℹ"}];let M=pe("appearance"),_=pe(Pt($s())),E=pe(Pt(vr())),C=pe(""),D=pe(!0),P=pe(Pt(Oc())),k=pe(""),b=pe("");function T(){x(P,Oc(),!0),x(b,"Loaded the active theme’s tokens — tweak and save.")}function oe(){try{const he=Nc({name:l(C),dark:l(D),tokens:l(P)});x(E,vr(),!0),i(he.id),x(b,`Saved “${he.name}”.`)}catch(he){x(b,String(he),!0)}}function H(he){bv(he),x(E,vr(),!0),i()===he&&i(Jl),x(b,"Theme deleted.")}function F(){x(k,JSON.stringify({name:l(C).trim()||"My theme",dark:l(D),tokens:l(P)},null,2),!0),x(b,"Theme JSON written below — copy it to share.")}function z(){try{const he=JSON.parse(l(k));if(!he||typeof he!="object"||Array.isArray(he))throw new Error("Expected a theme object.");const Me=Nc(he);x(E,vr(),!0),i(Me.id),x(b,`Imported “${Me.name}”.`),x(k,"")}catch(he){x(b,`Import failed: ${he}`)}}async function Z(he){const Me=window.__TAURI__?.dialog?.open;if(!Me)return null;try{const se=await Me({directory:!0,multiple:!1,defaultPath:he&&he.trim()?he.trim():void 0});return typeof se=="string"?se:null}catch{return null}}const V=[{key:"instances",label:"Instances",hint:"Instance library; adopts an existing Prism or FreesmLauncher store when present"},{key:"shared",label:"Shared Libraries & Assets",hint:"The artifact library launches draw from"},{key:"versions",label:"Versions",hint:"Version metadata & jars"},{key:"mods",label:"Mods",hint:"Central mods folder / cache"},{key:"icons",label:"Icons",hint:"Custom instance icons"},{key:"java",label:"Java Runtimes",hint:"Auto-downloaded Java"},{key:"skins",label:"Skins",hint:"Local skins & free capes store"},{key:"downloads",label:"Downloads",hint:"Downloads & temporary staging"}];let B=pe(Pt({}));Kt(()=>{o()&&x(B,{instances:o().is_default_instances?"":o().instances_dir,shared:o().is_default_shared?"":o().shared_dir,versions:o().is_default_versions?"":o().versions_dir,mods:o().is_default_mods?"":o().mods_dir,icons:o().is_default_icons?"":o().icons_dir,java:o().is_default_java?"":o().java_dir,skins:o().is_default_skins?"":o().skins_dir,downloads:o().downloads_dir||""},!0)});function ie(he){return o()?he==="downloads"?o().staging_root:o()[`${he}_dir`]:""}function ge(he){return o()?he==="downloads"?o().is_default_staging:o()[`is_default_${he}`]:!0}const ve="https://github.com/BlackCatOfficialytb/TwilightMC-OSS";var Q=lg(),ne=U(Q),Se=U(ne),Ae=w(Se,2);At(Ae,21,()=>p,he=>he.id,(he,Me)=>{var se=jv(),Oe=U(se),Le=U(Oe);pi(Le,{get emoji(){return l(Me).icon},size:15});var A=w(Oe,2),S=ue(A,!0);we(()=>{ht(se,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${l(M)===l(Me).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Ve(se,"aria-current",l(M)===l(Me).id?"true":void 0),de(S,l(Me).label)}),ce("click",se,()=>x(M,l(Me).id,!0)),W(he,se)});var Pe=w(Ae,2),Fe=U(Pe),je=U(Fe);Gt(je,{name:"accounts",size:15});var ze=w(ne,2),Qe=U(ze),dt=U(Qe);{var Xe=he=>{var Me=Zv(),se=w(vt(Me),6),Oe=U(se);At(Oe,17,()=>uo,be=>be.id,(be,De)=>{var qe=Xv(),rt=U(qe),Mt=U(rt),ct=w(Mt,2),Rt=w(ct,2),_t=w(rt,2),bt=ue(_t,!0),Ut=w(_t,2),dn=ue(Ut,!0);we(()=>{ht(qe,1,`flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===l(De).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Ve(qe,"aria-pressed",i()===l(De).id),Ve(qe,"title",`${l(De).label??""}: ${l(De).dark?"dark":"light"} ground`),Sn(Mt,`background:${l(De).swatch[0]??""}`),Sn(ct,`background:${l(De).swatch[1]??""}`),Sn(Rt,`background:${l(De).swatch[2]??""}`),de(bt,l(De).label),de(dn,l(De).dark?"Dark ground":"Light ground")}),ce("click",qe,()=>i(l(De).id)),W(be,qe)});var Le=w(Oe,2);At(Le,17,()=>l(E),be=>be.id,(be,De)=>{var qe=Yv(),rt=U(qe),Mt=U(rt),ct=w(Mt,2),Rt=w(ct,2),_t=w(rt,2),bt=ue(_t,!0),Ut=w(_t,2),dn=ue(Ut),wn=w(Ut,2);we(()=>{ht(qe,1,`relative flex flex-col gap-1.5 rounded border p-2.5 text-left ${i()===l(De).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Ve(qe,"title",`${l(De).name??""}: ${l(De).dark?"dark":"light"} ground`),Sn(Mt,`background:${l(De).tokens.bg1??""}`),Sn(ct,`background:${l(De).tokens.bg3??""}`),Sn(Rt,`background:${l(De).tokens.accent1??""}`),de(bt,l(De).name),de(dn,`Custom · ${l(De).dark?"Dark":"Light"} ground`),Ve(wn,"title",`Delete ${l(De).name??""}`),Ve(wn,"aria-label",`Delete ${l(De).name??""}`)}),ce("click",qe,()=>i(l(De).id)),ce("keydown",qe,fn=>{(fn.key==="Enter"||fn.key===" ")&&(fn.preventDefault(),i(l(De).id))}),ce("click",wn,fn=>{fn.stopPropagation(),H(l(De).id)}),W(be,qe)});var A=w(se,4),S=U(A);Wv(S,{get theme(){return i()}});var I=w(A,6);At(I,21,()=>gf,be=>be.id,(be,De)=>{var qe=qv(),rt=U(qe),Mt=U(rt);Gt(Mt,{name:"instances",size:16,get pack(){return l(De).id}});var ct=w(Mt,2);Gt(ct,{name:"settings",size:16,get pack(){return l(De).id}});var Rt=w(ct,2);Gt(Rt,{name:"accounts",size:16,get pack(){return l(De).id}});var _t=w(rt,2),bt=ue(_t,!0),Ut=w(_t,2),dn=ue(Ut,!0);we(()=>{ht(qe,1,`flex flex-col items-start gap-2 rounded border p-2.5 text-left ${l(_)===l(De).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Ve(qe,"aria-pressed",l(_)===l(De).id),Ve(qe,"title",`${l(De).label??""}: ${l(De).hint??""}`),de(bt,l(De).label),de(dn,l(De).hint)}),ce("click",qe,()=>{Av(l(De).id),x(_,$s(),!0)}),W(be,qe)});var Y=w(I,6),X=U(Y),_e=U(X),Ue=w(_e,2),ye=U(Ue),q=w(ye,2),L=w(X,2);At(L,21,()=>gv,be=>be.key,(be,De)=>{var qe=Kv(),rt=U(qe),Mt=ue(rt,!0),ct=w(rt,2),Rt=U(ct),_t=w(Rt,2);we(()=>{de(Mt,l(De).label),Ja(Rt,l(P)[l(De).key]),Ve(Rt,"title",`${l(De).label??""} color`),Ve(Rt,"aria-label",`${l(De).label??""} color`),Ja(_t,l(P)[l(De).key]),Ve(_t,"aria-label",`${l(De).label??""} hex`)}),ce("input",Rt,bt=>x(P,{...l(P),[l(De).key]:bt.currentTarget.value},!0)),ce("input",_t,bt=>x(P,{...l(P),[l(De).key]:bt.currentTarget.value},!0)),W(be,qe)});var ae=w(L,2),me=U(ae),xe=w(me,2),Ee=w(Y,4),Ye=U(Ee),nt=w(Ye,2),O=U(nt),Ne=w(O,2),le=w(Ee,2);{var Ce=be=>{var De=kc(),qe=ue(De,!0);we(()=>de(qe,l(b))),W(be,De)};ke(le,be=>{l(b)&&be(Ce)})}we(()=>{ht(ye,1,`px-3 py-1.5 text-[12px] ${l(D)?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Ve(ye,"aria-pressed",l(D)),ht(q,1,`px-3 py-1.5 text-[12px] ${l(D)?"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)":"bg-(--accent) font-medium text-(--on-accent)"}`),Ve(q,"aria-pressed",!l(D))}),kt(_e,()=>l(C),be=>x(C,be)),ce("click",ye,()=>x(D,!0)),ce("click",q,()=>x(D,!1)),ce("click",me,T),ce("click",xe,oe),kt(Ye,()=>l(k),be=>x(k,be)),ce("click",O,F),ce("click",Ne,z),W(he,Me)},J=he=>{var Me=$v(),se=w(vt(Me),6),Oe=U(se);Oe.value=Oe.__value="";var Le=w(Oe);At(Le,17,s,xe=>xe.executable,(xe,Ee)=>{var Ye=Jv(),nt=ue(Ye),O={};we(()=>{de(nt,`Java ${l(Ee).major??""} — ${l(Ee).home??""}`),O!==(O=l(Ee).executable)&&(Ye.value=(Ye.__value=O)??"")}),W(xe,Ye)}),Js(se);var A=w(se,2);{var S=xe=>{var Ee=kc(),Ye=ue(Ee,!0);we(()=>de(Ye,c()?"Probing system roots…":"No runtimes detected.")),W(xe,Ee)};ke(A,xe=>{s().length||xe(S)})}var I=w(A,2);{var Y=xe=>{var Ee=Qv(),Ye=ue(Ee,!0);we(()=>de(Ye,u())),W(xe,Ee)};ke(I,xe=>{u()&&xe(Y)})}var X=w(I,2),_e=w(X,4),Ue=w(U(_e),2),ye=w(Ue,2),q=w(_e,2),L=w(U(q),2),ae=w(L,2),me=w(q,4);we(()=>X.disabled=c()),Qs(se,d),ce("click",X,function(...xe){e.onscanjava?.apply(this,xe)}),kt(Ue,h),kt(ye,h),kt(L,f),kt(ae,f),ce("click",me,function(...xe){e.onsaveprefs?.apply(this,xe)}),W(he,Me)},lt=he=>{var Me=rg(),se=w(vt(Me),4);{var Oe=Le=>{var A=ig(),S=vt(A),I=U(S),Y=U(I),X=w(U(Y),2),_e=ue(X,!0),Ue=w(Y,2),ye=w(S,2);At(ye,17,()=>V,q=>q.key,(q,L)=>{var ae=ng(),me=U(ae),xe=U(me),Ee=U(xe),Ye=w(Ee),nt=ue(Ye,!0),O=w(xe,2);{var Ne=bt=>{var Ut=eg();we(()=>Ut.disabled=v()),ce("click",Ut,()=>e.onsavefolder?.(l(L).key,"")),W(bt,Ut)},le=st(()=>!ge(l(L).key));ke(O,bt=>{l(le)&&bt(Ne)})}var Ce=w(me,2),be=ue(Ce,!0),De=w(Ce,2),qe=U(De),rt=w(qe,2),Mt=w(rt,2),ct=w(Mt,2),Rt=w(De,2);{var _t=bt=>{var Ut=tg(),dn=U(Ut),wn=ue(dn),fn=w(dn,2);we(()=>{Ve(dn,"title",o().staging_root),de(wn,`Staging: ${o().staging_root??""}`),fn.disabled=v()||m(),Ve(fn,"title",m()?"Unavailable while a game is running":"Purges the staging area")}),ce("click",fn,function(...xn){e.oncleanstaging?.apply(this,xn)}),W(bt,Ut)};ke(Rt,bt=>{l(L).key==="downloads"&&bt(_t)})}we((bt,Ut)=>{de(Ee,`${l(L).label??""} `),de(nt,bt),de(be,l(L).hint),Ve(qe,"placeholder",Ut),ct.disabled=v()},[()=>ge(l(L).key)?"(default)":"(custom)",()=>ie(l(L).key)]),kt(qe,()=>l(B)[l(L).key],bt=>l(B)[l(L).key]=bt),ce("click",rt,async()=>{const bt=await Z(l(B)[l(L).key]);bt&&(l(B)[l(L).key]=bt)}),ce("click",Mt,()=>e.onopenfolder?.(ie(l(L).key))),ce("click",ct,()=>e.onsavefolder?.(l(L).key,l(B)[l(L).key])),W(q,ae)}),we(()=>{Ve(X,"title",o().app_data),de(_e,o().app_data)}),ce("click",Ue,()=>e.onopenfolder?.(o().app_data)),W(Le,A)};ke(se,Le=>{o()&&Le(Oe)})}W(he,Me)},We=he=>{var Me=ag(),se=w(vt(Me),4),Oe=w(U(se),2),Le=ue(Oe),A=w(se,2),S=w(U(A),2),I=ue(S),Y=w(A,2),X=ue(Y);we(()=>{Ve(Oe,"aria-checked",r()),ht(Oe,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${r()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),ht(Le,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${r()?"translate-x-[22px]":""}`),Ve(S,"aria-checked",a()),ht(S,1,`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${a()?"border-transparent bg-(--accent)":"border-(--border) bg-(--bg-surface)"}`),ht(I,1,`absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform ${a()?"translate-x-[22px]":""}`),de(X,`Blind Mode is ${r()?"on":"off"}. Deaf Mode is ${a()?"on":"off"}.`)}),ce("click",Oe,()=>r(!r())),ce("click",S,()=>a(!a())),W(he,Me)},N=he=>{var Me=sg(),se=w(vt(Me),4),Oe=U(se),Le=w(U(Oe),2),A=U(Le),S=w(U(A)),I=ue(S),Y=w(se,2),X=U(Y),_e=w(X,2),Ue=w(_e,2);we(()=>de(I,`(alpha-v${t()??""})`)),ce("click",X,()=>e.onopenurl?.(`${ve}`)),ce("click",_e,()=>e.onopenurl?.(`${ve}/releases`)),ce("click",Ue,()=>e.onopenurl?.(`${ve}/issues`)),W(he,Me)};ke(dt,he=>{l(M)==="appearance"?he(Xe):l(M)==="java"?he(J,1):l(M)==="storage"?he(lt,2):l(M)==="accessibility"?he(We,3):he(N,-1)})}var $=w(dt,2);{var Ie=he=>{var Me=og(),se=ue(Me,!0);we(()=>{ht(Me,1,`mt-5 text-[12px] ${y()?"text-(--accent)":"text-(--text-muted)"}`),de(se,y()||g())}),W(he,Me)};ke($,he=>{(y()||g())&&he(Ie)})}ce("click",Se,function(...he){e.onback?.apply(this,he)}),ce("click",Pe,function(...he){e.onopenaccounts?.apply(this,he)}),W(n,Q),Jt()}_n(["click","keydown","input"]);var ug=re("<button> </button>"),dg=re('<div class="px-4 pb-4 -mt-1"><span class="text-[11px] text-(--text-muted)">JVM UUID v3 preview:</span> <code class="ml-1 select-all text-[11px] text-(--accent)"> </code></div>'),fg=re('<form class="flex items-center gap-2 p-4"><input class="h-8 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Offline username (3-16 letters, digits, _)"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add</button></form> <!> <p class="px-4 pb-4 text-[11px] text-(--text-muted)">No password, no validation — the game runs as this username with a deterministic offline UUID.</p>',1),hg=re('<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Sign in with Microsoft</button> <p class="mt-2 text-[11px] text-(--text-muted)">A device code opens the sign-in at microsoft.com/link — no password ever enters the launcher.</p>',1),Bc=re('<p class="py-6 text-center text-[12px] text-(--text-muted)">Requesting a device code…</p>'),pg=re('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),zc=re('<p class="py-6 text-center text-[12px] font-medium text-(--accent)">Signed in — account saved.</p> <button class="mx-auto block rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">Sign in another account</button>',1),mg=re('<p class="mt-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),vg=re('<div class="p-4"><!> <!></div>'),gg=re(`<button class="w-full rounded bg-(--accent) px-3 py-2 text-[13px] font-semibold text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button> <p class="text-[11px] text-(--text-muted)">Opens <code class="text-(--accent)">account.ely.by</code> in your browser and returns
          automatically — no password ever enters the launcher.</p> <button class="w-full rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle) disabled:opacity-40">Use a device code instead</button>`,1),_g=re('<button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Open page</button>'),xg=re('<div class="flex flex-col items-center gap-2 py-2"><span class="text-[11px] text-(--text-muted)">Enter this code at</span> <code class="select-all rounded bg-(--bg-subtle) px-2 py-1 text-[12px]"> </code> <span class="mt-2 text-[11px] text-(--text-muted)">Device code</span> <code class="select-all rounded bg-(--bg-subtle) px-3 py-1.5 text-xl font-bold tracking-widest text-(--accent)"> </code> <div class="mt-1 flex gap-2"><button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)"> </button> <!> <button class="rounded border border-(--border) px-3 py-1 text-[12px] hover:bg-(--bg-subtle)">Restart</button></div> <p class="mt-3 flex items-center gap-2 text-[11px] text-(--text-muted)"><span class="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent)"></span> Waiting for you to finish signing in…</p></div>'),bg=re('<p class="rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),yg=re('<p class="rounded bg-(--accent)/10 px-3 py-2 text-[12px] font-medium text-(--accent)">Signed in — the Ely.by account is saved and active.</p>'),Sg=re(`<div class="flex flex-col gap-3 p-4"><div class="flex items-center gap-2"><span class="flex h-6 w-6 items-center justify-center rounded bg-[#3a7bd5]/15 text-[11px] font-bold text-[#3a7bd5]">e</span> <span class="text-[12px] font-medium">Sign in with Ely.by</span></div> <!> <!> <!> <details class="rounded border border-(--border)"><summary class="cursor-pointer select-none px-3 py-2 text-[11px] font-medium text-(--text-muted) hover:text-(--text-main)">Classic login (fallback) — username &amp; password</summary> <form class="flex flex-col gap-3 p-3 pt-1"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Ely.by username or email" autocomplete="username"/> <input type="password" class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Password" autocomplete="current-password"/> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></form></details> <p class="text-[11px] text-(--text-muted)">Your skin, cape and UUID come straight from Ely.by. Launches inject the SHA-256 verified
        authlib-injector agent aimed at <code class="text-(--accent)">authserver.ely.by</code> — no URL to configure.</p></div>`),Mg=re('<form class="flex flex-col gap-3 p-4"><input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Server URL (authlib-injector)"/> <input class="h-8 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Username (3-16 letters, digits, _)"/> <div class="grid grid-cols-2 gap-2"><button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Skin PNG: <span class="truncate text-(--accent)"> </span></button> <button type="button" class="rounded border border-(--border) px-2.5 py-1.5 text-[11px] text-left hover:bg-(--bg-subtle)">Cape PNG: <span class="truncate text-(--accent)"> </span></button></div> <button type="submit" class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Add custom account</button> <p class="text-[11px] text-(--text-muted)">The launcher auto-fetches the SHA-256 verified authlib-injector agent into <code class="text-(--accent)">&lt;shared&gt;/libraries/</code> on the next launch of this account.</p></form>'),Eg=re('<p class="mx-4 mb-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),wg=re('<div class="flex gap-1 border-b border-(--border) px-3 pt-2.5"></div> <div><!> <!></div>',1);function yf(n,e){Zt(e,!0);let t=pe("offline"),i=pe(""),r=pe(!1),a=pe(""),o=pe(""),s=pe("idle"),c=pe(""),u=pe(null),d=pe(!1),h=null,f=pe("idle"),v=pe(""),g=pe(!1),y=pe(!1),m=pe(null),p=pe(!1),M=null,_=pe(""),E=pe(""),C=pe(!1),D=pe(""),P=pe(""),k=pe(""),b=pe("");function T(N,$){const Ie=window.__TAURI__?.core;return Ie?Ie.invoke(N,$):Promise.reject(new Error("Tauri backend unavailable in this preview."))}Kl(()=>{oe(),H()});function oe(){h&&(clearInterval(h),h=null)}function H(){M&&(clearInterval(M),M=null)}Kt(()=>{const N=l(a).trim(),$=setTimeout(async()=>{if(!N){x(o,"");return}try{x(o,await T("offline_uuid",{username:N}),!0)}catch{x(o,"")}},200);return()=>clearTimeout($)});async function F(N){N.preventDefault(),x(i,""),x(r,!0);try{await T("add_offline_account",{username:l(a).trim()}),x(a,""),x(o,""),await e.onrefresh?.()}catch($){x(i,String($),!0)}finally{x(r,!1)}}async function z(){x(c,""),x(d,!1),x(s,"requesting");try{x(u,await T("start_microsoft_device_code"),!0),x(s,"code"),oe(),h=setInterval(Z,(l(u).interval||5)*1e3)}catch(N){x(s,"idle"),x(c,String(N),!0)}}async function Z(){if(l(u))try{const N=await T("poll_microsoft_device_code",{device:l(u)});if(N.state==="pending")return;if(N.state==="slow_down"){oe(),h=setInterval(Z,((l(u).interval||5)+5)*1e3);return}if(oe(),N.state==="failed"){x(c,N.reason,!0),x(u,null),x(s,"idle");return}x(u,null),x(s,"signedin"),await e.onrefresh?.()}catch(N){x(c,String(N),!0)}}async function V(){if(l(u))try{await navigator.clipboard.writeText(l(u).user_code),x(d,!0),setTimeout(()=>x(d,!1),1600)}catch{}}async function B(){x(v,""),x(g,!1),x(y,!0);try{await T("elyby_browser_login"),x(g,!0),await e.onrefresh?.()}catch(N){x(v,String(N),!0)}finally{x(y,!1)}}async function ie(){x(v,""),x(p,!1),x(f,"requesting");try{x(m,await T("start_elyby_device_code"),!0),x(f,"code"),H(),M=setInterval(ge,(l(m).interval||5)*1e3)}catch(N){x(f,"idle"),x(v,String(N),!0)}}async function ge(){if(l(m))try{const N=await T("poll_elyby_device_code",{device:l(m)});if(N.state==="pending")return;if(N.state==="slow_down"){H(),M=setInterval(ge,((l(m).interval||5)+5)*1e3);return}if(H(),N.state==="failed"){x(v,N.reason,!0),x(m,null),x(f,"idle");return}x(m,null),x(f,"signedin"),await e.onrefresh?.()}catch(N){x(v,String(N),!0)}}async function ve(){if(l(m))try{await navigator.clipboard.writeText(l(m).user_code),x(p,!0),setTimeout(()=>x(p,!1),1600)}catch{}}function Q(){const N=l(m)?.verification_uri_complete??l(m)?.verification_uri;N&&T("open_external_url",{url:N}).catch(()=>{})}async function ne(N){N.preventDefault(),x(i,""),x(C,!0),x(g,!1);try{await T("add_elyby_account",{username:l(_).trim(),password:l(E)}),x(_,""),x(E,""),x(g,!0),await e.onrefresh?.()}catch($){x(i,String($),!0)}finally{x(C,!1)}}async function Se(N){N.preventDefault(),x(i,""),x(r,!0);try{const $=await T("add_custom_yggdrasil_account",{username:l(D).trim(),serverUrl:l(P).trim()});(l(k).trim()||l(b).trim())&&await T("set_account_textures",{id:$.id,skin:l(k).trim()||null,cape:l(b).trim()||null}),x(D,""),x(P,""),x(k,""),x(b,""),await e.onrefresh?.()}catch($){x(i,String($),!0)}finally{x(r,!1)}}async function Ae(N){const $=window.__TAURI__?.dialog?.open;if(!$){x(i,"File picker unavailable in this build.");return}try{const Ie=await $({multiple:!1,title:N==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!Ie)return;const he=String(Ie);x(N==="skin"?k:b,he,!0),x(i,"")}catch(Ie){x(i,String(Ie),!0)}}var Pe=wg(),Fe=vt(Pe);At(Fe,20,()=>[["offline","Offline"],["elyby","Ely.by"],["microsoft","Microsoft"],["custom","Custom"]],_l,(N,$)=>{var Ie=st(()=>Md($,2));let he=()=>l(Ie)[0],Me=()=>l(Ie)[1];var se=ug(),Oe=ue(se,!0);we(()=>{ht(se,1,`rounded-t px-3 py-1.5 text-[12px] font-medium ${l(t)===he()?"bg-(--bg-subtle) text-(--text-main)":"text-(--text-muted) hover:text-(--text-main)"}`),de(Oe,Me())}),ce("click",se,()=>{x(t,he(),!0),x(i,"")}),W(N,se)});var je=w(Fe,2),ze=U(je);{var Qe=N=>{var $=fg(),Ie=vt($),he=U(Ie),Me=w(he,2),se=w(Ie,2);{var Oe=Le=>{var A=dg(),S=w(U(A),2),I=ue(S,!0);we(()=>de(I,l(o))),W(Le,A)};ke(se,Le=>{l(o)&&Le(Oe)})}we(Le=>Me.disabled=Le,[()=>!l(a).trim()||l(r)]),gi("submit",Ie,F),kt(he,()=>l(a),Le=>x(a,Le)),W(N,$)},dt=N=>{var $=vg(),Ie=U($);{var he=S=>{var I=hg(),Y=vt(I);we(()=>Y.disabled=l(r)),ce("click",Y,z),W(S,I)},Me=S=>{var I=Bc();W(S,I)},se=S=>{var I=pg(),Y=w(U(I),2),X=ue(Y,!0),_e=w(Y,4),Ue=ue(_e,!0),ye=w(_e,2),q=U(ye),L=ue(q,!0),ae=w(q,2);we(()=>{de(X,l(u).verification_uri),de(Ue,l(u).user_code),de(L,l(d)?"Copied ✓":"Copy code")}),ce("click",q,V),ce("click",ae,z),W(S,I)},Oe=S=>{var I=zc(),Y=w(vt(I),2);ce("click",Y,()=>{x(s,"idle"),x(c,"")}),W(S,I)};ke(Ie,S=>{l(s)==="idle"?S(he):l(s)==="requesting"?S(Me,1):l(s)==="code"&&l(u)?S(se,2):l(s)==="signedin"&&S(Oe,3)})}var Le=w(Ie,2);{var A=S=>{var I=mg(),Y=ue(I,!0);we(()=>de(Y,l(c))),W(S,I)};ke(Le,S=>{l(c)&&S(A)})}W(N,$)},Xe=N=>{var $=Sg(),Ie=w(U($),2);{var he=L=>{var ae=gg(),me=vt(ae),xe=ue(me,!0),Ee=w(me,4);we(()=>{me.disabled=l(y),de(xe,l(y)?"Waiting for the browser…":"Sign in with browser (recommended)"),Ee.disabled=l(y)}),ce("click",me,B),ce("click",Ee,ie),W(L,ae)},Me=L=>{var ae=Bc();W(L,ae)},se=L=>{var ae=xg(),me=w(U(ae),2),xe=ue(me,!0),Ee=w(me,4),Ye=ue(Ee,!0),nt=w(Ee,2),O=U(nt),Ne=ue(O,!0),le=w(O,2);{var Ce=De=>{var qe=_g();ce("click",qe,Q),W(De,qe)};ke(le,De=>{(l(m).verification_uri||l(m).verification_uri_complete)&&De(Ce)})}var be=w(le,2);we(()=>{de(xe,l(m).verification_uri),de(Ye,l(m).user_code),de(Ne,l(p)?"Copied ✓":"Copy code")}),ce("click",O,ve),ce("click",be,ie),W(L,ae)},Oe=L=>{var ae=zc(),me=w(vt(ae),2);ce("click",me,()=>{x(f,"idle"),x(v,"")}),W(L,ae)};ke(Ie,L=>{l(f)==="idle"?L(he):l(f)==="requesting"?L(Me,1):l(f)==="code"&&l(m)?L(se,2):l(f)==="signedin"&&L(Oe,3)})}var Le=w(Ie,2);{var A=L=>{var ae=bg(),me=ue(ae,!0);we(()=>de(me,l(v))),W(L,ae)};ke(Le,L=>{l(v)&&L(A)})}var S=w(Le,2);{var I=L=>{var ae=yg();W(L,ae)};ke(S,L=>{l(g)&&l(f)==="idle"&&L(I)})}var Y=w(S,2),X=w(U(Y),2),_e=U(X),Ue=w(_e,2),ye=w(Ue,2),q=ue(ye,!0);we(L=>{ye.disabled=L,de(q,l(C)?"Signing in…":"Sign in")},[()=>!l(_).trim()||!l(E)||l(C)]),gi("submit",X,ne),kt(_e,()=>l(_),L=>x(_,L)),kt(Ue,()=>l(E),L=>x(E,L)),W(N,$)},J=N=>{var $=Mg(),Ie=U($),he=w(Ie,2),Me=w(he,2),se=U(Me),Oe=w(U(se)),Le=ue(Oe,!0),A=w(se,2),S=w(U(A)),I=ue(S,!0),Y=w(Me,2);we(X=>{de(Le,l(k)||"none"),de(I,l(b)||"none"),Y.disabled=X},[()=>!l(D).trim()||!l(P).trim()||l(r)]),gi("submit",$,Se),kt(Ie,()=>l(P),X=>x(P,X)),kt(he,()=>l(D),X=>x(D,X)),ce("click",se,()=>Ae("skin")),ce("click",A,()=>Ae("cape")),W(N,$)};ke(ze,N=>{l(t)==="offline"?N(Qe):l(t)==="microsoft"?N(dt,1):l(t)==="elyby"?N(Xe,2):l(t)==="custom"&&N(J,3)})}var lt=w(ze,2);{var We=N=>{var $=Eg(),Ie=ue($,!0);we(()=>de(Ie,l(i))),W(N,$)};ke(lt,N=>{l(i)&&N(We)})}W(n,Pe),Jt()}_n(["click"]);const $l="156",Cr={ROTATE:0,DOLLY:1,PAN:2},Pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tg=0,Gc=1,Ag=2,Sf=1,Rg=2,Ci=3,xi=0,Cn=1,Xn=2,Oi=0,ra=1,Hc=2,Vc=3,Wc=4,Cg=5,Jr=100,Pg=101,Lg=102,jc=103,Xc=104,Dg=200,Ig=201,Ug=202,Ng=203,Mf=204,Ef=205,Og=206,Fg=207,kg=208,Bg=209,zg=210,Gg=0,Hg=1,Vg=2,El=3,Wg=4,jg=5,Xg=6,Yg=7,wf=0,qg=1,Kg=2,Ji=0,Zg=1,Jg=2,Qg=3,$g=4,e_=5,Tf=300,da=301,fa=302,eo=303,wl=304,fo=306,Tl=1e3,$n=1001,Al=1002,Bt=1003,Yc=1004,Po=1005,Wn=1006,t_=1007,ts=1008,Qi=1009,n_=1010,i_=1011,ec=1012,Af=1013,Ki=1014,Ii=1015,ha=1016,Rf=1017,Cf=1018,br=1020,r_=1021,ei=1023,a_=1024,s_=1025,yr=1026,pa=1027,o_=1028,Pf=1029,l_=1030,Lf=1031,Df=1033,Lo=33776,Do=33777,Io=33778,Uo=33779,qc=35840,Kc=35841,Zc=35842,Jc=35843,c_=36196,Qc=37492,$c=37496,eu=37808,tu=37809,nu=37810,iu=37811,ru=37812,au=37813,su=37814,ou=37815,lu=37816,cu=37817,uu=37818,du=37819,fu=37820,hu=37821,No=36492,pu=36494,mu=36495,u_=36283,vu=36284,gu=36285,_u=36286,If=3e3,Sr=3001,d_=3200,f_=3201,Uf=0,h_=1,Mr="",Ot="srgb",bi="srgb-linear",ho="display-p3",Oo=7680,p_=519,m_=512,v_=513,g_=514,__=515,x_=516,b_=517,y_=518,S_=519,Rl=35044,xu="300 es",Cl=1035,Ui=2e3,to=2001;class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,Pl=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Mn(n,e,t){return Math.max(e,Math.min(t,n))}function M_(n,e){return(n%e+e)%e}function Fo(n,e,t){return(1-t)*n+t*e}function bu(n){return(n&n-1)===0&&n!==0}function Ll(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:Gs};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,i,r,a,o,s,c,u){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,c,u)}set(e,t,i,r,a,o,s,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=a,d[5]=c,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],c=i[6],u=i[1],d=i[4],h=i[7],f=i[2],v=i[5],g=i[8],y=r[0],m=r[3],p=r[6],M=r[1],_=r[4],E=r[7],C=r[2],D=r[5],P=r[8];return a[0]=o*y+s*M+c*C,a[3]=o*m+s*_+c*D,a[6]=o*p+s*E+c*P,a[1]=u*y+d*M+h*C,a[4]=u*m+d*_+h*D,a[7]=u*p+d*E+h*P,a[2]=f*y+v*M+g*C,a[5]=f*m+v*_+g*D,a[8]=f*p+v*E+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],u=e[7],d=e[8];return t*o*d-t*s*u-i*a*d+i*s*c+r*a*u-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=d*o-s*u,f=s*c-d*a,v=u*a-o*c,g=t*h+i*f+r*v;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*u-d*i)*y,e[2]=(s*i-r*o)*y,e[3]=f*y,e[4]=(d*t-r*c)*y,e[5]=(r*a-s*t)*y,e[6]=v*y,e[7]=(i*c-u*t)*y,e[8]=(o*t-i*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const c=Math.cos(a),u=Math.sin(a);return this.set(i*c,i*u,-i*(c*o+u*s)+o+e,-r*u,r*c,-r*(-u*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ko.makeScale(e,t)),this}rotate(e){return this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new mt;function Nf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function w_(){const n=no("canvas");return n.style.display="block",n}const yu={};function ja(n){n in yu||(yu[n]=!0,console.warn(n))}function aa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const T_=new mt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),A_=new mt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function R_(n){return n.convertSRGBToLinear().applyMatrix3(A_)}function C_(n){return n.applyMatrix3(T_).convertLinearToSRGB()}const P_={[bi]:n=>n,[Ot]:n=>n.convertSRGBToLinear(),[ho]:R_},L_={[bi]:n=>n,[Ot]:n=>n.convertLinearToSRGB(),[ho]:C_},zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return bi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=P_[e],r=L_[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Lr;class Of{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Lr===void 0&&(Lr=no("canvas")),Lr.width=e.width,Lr.height=e.height;const i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=no("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=aa(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(aa(t[i]/255)*255):t[i]=aa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let D_=0;class Ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(zo(r[o].image)):a.push(zo(r[o]))}else a=zo(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I_=0;class mn extends Tr{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,i=$n,r=$n,a=Wn,o=ts,s=ei,c=Qi,u=mn.DEFAULT_ANISOTROPY,d=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=$i(),this.name="",this.source=new Ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Sr?Ot:Mr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Sr:If}set encoding(e){ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?Ot:Mr}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Tf;mn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const c=e.elements,u=c[0],d=c[4],h=c[8],f=c[1],v=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+v+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,E=(v+1)/2,C=(p+1)/2,D=(d+f)/4,P=(h+y)/4,k=(g+m)/4;return _>E&&_>C?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=D/i,a=P/i):E>C?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=D/r,a=k/r):C<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(C),i=P/a,r=k/a),this.set(i,r,a,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-y)/M,this.z=(f-d)/M,this.w=Math.acos((u+v+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U_ extends Tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ja("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sr?Ot:Mr),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Wn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ff(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends U_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kf extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class N_ extends mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let c=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=a[o+0],v=a[o+1],g=a[o+2],y=a[o+3];if(s===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=v,e[t+2]=g,e[t+3]=y;return}if(h!==y||c!==f||u!==v||d!==g){let m=1-s;const p=c*f+u*v+d*g+h*y,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),D=Math.atan2(C,p*M);m=Math.sin(m*D)/C,s=Math.sin(s*D)/C}const E=s*M;if(c=c*m+f*E,u=u*m+v*E,d=d*m+g*E,h=h*m+y*E,m===1-s){const C=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=C,u*=C,d*=C,h*=C}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],c=i[r+1],u=i[r+2],d=i[r+3],h=a[o],f=a[o+1],v=a[o+2],g=a[o+3];return e[t]=s*g+d*h+c*v-u*f,e[t+1]=c*g+d*f+u*h-s*v,e[t+2]=u*g+d*v+s*f-c*h,e[t+3]=d*g-s*h-c*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,u=s(i/2),d=s(r/2),h=s(a/2),f=c(i/2),v=c(r/2),g=c(a/2);switch(o){case"XYZ":this._x=f*d*h+u*v*g,this._y=u*v*h-f*d*g,this._z=u*d*g+f*v*h,this._w=u*d*h-f*v*g;break;case"YXZ":this._x=f*d*h+u*v*g,this._y=u*v*h-f*d*g,this._z=u*d*g-f*v*h,this._w=u*d*h+f*v*g;break;case"ZXY":this._x=f*d*h-u*v*g,this._y=u*v*h+f*d*g,this._z=u*d*g+f*v*h,this._w=u*d*h-f*v*g;break;case"ZYX":this._x=f*d*h-u*v*g,this._y=u*v*h+f*d*g,this._z=u*d*g-f*v*h,this._w=u*d*h+f*v*g;break;case"YZX":this._x=f*d*h+u*v*g,this._y=u*v*h+f*d*g,this._z=u*d*g-f*v*h,this._w=u*d*h-f*v*g;break;case"XZY":this._x=f*d*h-u*v*g,this._y=u*v*h-f*d*g,this._z=u*d*g+f*v*h,this._w=u*d*h+f*v*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],u=t[2],d=t[6],h=t[10],f=i+s+h;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-c)*v,this._y=(a-u)*v,this._z=(o-r)*v}else if(i>s&&i>h){const v=2*Math.sqrt(1+i-s-h);this._w=(d-c)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(a+u)/v}else if(s>h){const v=2*Math.sqrt(1+s-i-h);this._w=(a-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+h-i-s);this._w=(o-r)/v,this._x=(a+u)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,u=t._z,d=t._w;return this._x=i*d+o*s+r*u-a*c,this._y=r*d+o*c+a*s-i*u,this._z=a*d+o*u+i*c-r*s,this._w=o*d-i*s-r*c-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),d=Math.atan2(u,s),h=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,u=c*t+o*r-s*i,d=c*i+s*t-a*r,h=c*r+a*i-o*t,f=-a*t-o*i-s*r;return this.x=u*c+f*-a+d*-s-h*-o,this.y=d*c+f*-o+h*-a-u*-s,this.z=h*c+f*-s+u*-o-d*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-i*c,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Go.copy(this).projectOnVector(e),this.sub(Go)}reflect(e){return this.sub(Go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Go=new K,Su=new wr;class ls{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox),Dr.applyMatrix4(e.matrixWorld),this.union(Dr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)Ei.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ei)}else r.boundingBox===null&&r.computeBoundingBox(),Dr.copy(r.boundingBox),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),fs.subVectors(this.max,Ra),Ir.subVectors(e.a,Ra),Ur.subVectors(e.b,Ra),Nr.subVectors(e.c,Ra),Wi.subVectors(Ur,Ir),ji.subVectors(Nr,Ur),ar.subVectors(Ir,Nr);let t=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-ar.z,ar.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,ar.z,0,-ar.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-ar.y,ar.x,0];return!Ho(t,Ir,Ur,Nr,fs)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,Ir,Ur,Nr,fs))?!1:(hs.crossVectors(Wi,ji),t=[hs.x,hs.y,hs.z],Ho(t,Ir,Ur,Nr,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new K,new K,new K,new K,new K,new K,new K,new K],Ei=new K,Dr=new ls,Ir=new K,Ur=new K,Nr=new K,Wi=new K,ji=new K,ar=new K,Ra=new K,fs=new K,hs=new K,sr=new K;function Ho(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){sr.fromArray(n,a);const s=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),c=e.dot(sr),u=t.dot(sr),d=i.dot(sr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>s)return!1}return!0}const O_=new ls,Ca=new K,Vo=new K;class tc{constructor(e=new K,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):O_.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const t=Ca.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(Vo)),this.expandByPoint(Ca.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new K,Wo=new K,ps=new K,Xi=new K,jo=new K,ms=new K,Xo=new K;class Bf{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wo.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Wo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ps),s=Xi.dot(this.direction),c=-Xi.dot(ps),u=Xi.lengthSq(),d=Math.abs(1-o*o);let h,f,v,g;if(d>0)if(h=o*c-s,f=o*s-c,g=a*d,h>=0)if(f>=-g)if(f<=g){const y=1/d;h*=y,f*=y,v=h*(h+o*f+2*s)+f*(o*h+f+2*c)+u}else f=a,h=Math.max(0,-(o*f+s)),v=-h*h+f*(f+2*c)+u;else f=-a,h=Math.max(0,-(o*f+s)),v=-h*h+f*(f+2*c)+u;else f<=-g?(h=Math.max(0,-(-o*a+s)),f=h>0?-a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u):f<=g?(h=0,f=Math.min(Math.max(-a,-c),a),v=f*(f+2*c)+u):(h=Math.max(0,-(o*a+s)),f=h>0?a:Math.min(Math.max(-a,-c),a),v=-h*h+f*(f+2*c)+u);else f=o>0?-a:a,h=Math.max(0,-(o*f+s)),v=-h*h+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wo).addScaledVector(ps,f),v}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,c=i+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(a=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(a=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,r,a){jo.subVectors(t,e),ms.subVectors(i,e),Xo.crossVectors(jo,ms);let o=this.direction.dot(Xo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const c=s*this.direction.dot(ms.crossVectors(Xi,ms));if(c<0)return null;const u=s*this.direction.dot(jo.cross(Xi));if(u<0||c+u>o)return null;const d=-s*Xi.dot(Xo);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,i,r,a,o,s,c,u,d,h,f,v,g,y,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,c,u,d,h,f,v,g,y,m)}set(e,t,i,r,a,o,s,c,u,d,h,f,v,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=o,p[9]=s,p[13]=c,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=v,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),a=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=o*d,v=o*h,g=s*d,y=s*h;t[0]=c*d,t[4]=-c*h,t[8]=u,t[1]=v+g*u,t[5]=f-y*u,t[9]=-s*c,t[2]=y-f*u,t[6]=g+v*u,t[10]=o*c}else if(e.order==="YXZ"){const f=c*d,v=c*h,g=u*d,y=u*h;t[0]=f+y*s,t[4]=g*s-v,t[8]=o*u,t[1]=o*h,t[5]=o*d,t[9]=-s,t[2]=v*s-g,t[6]=y+f*s,t[10]=o*c}else if(e.order==="ZXY"){const f=c*d,v=c*h,g=u*d,y=u*h;t[0]=f-y*s,t[4]=-o*h,t[8]=g+v*s,t[1]=v+g*s,t[5]=o*d,t[9]=y-f*s,t[2]=-o*u,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const f=o*d,v=o*h,g=s*d,y=s*h;t[0]=c*d,t[4]=g*u-v,t[8]=f*u+y,t[1]=c*h,t[5]=y*u+f,t[9]=v*u-g,t[2]=-u,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,v=o*u,g=s*c,y=s*u;t[0]=c*d,t[4]=y-f*h,t[8]=g*h+v,t[1]=h,t[5]=o*d,t[9]=-s*d,t[2]=-u*d,t[6]=v*h+g,t[10]=f-y*h}else if(e.order==="XZY"){const f=o*c,v=o*u,g=s*c,y=s*u;t[0]=c*d,t[4]=-h,t[8]=u*d,t[1]=f*h+y,t[5]=o*d,t[9]=v*h-g,t[2]=g*h-v,t[6]=s*d,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F_,e,k_)}lookAt(e,t,i){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Yi.crossVectors(i,Ln),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Yi.crossVectors(i,Ln)),Yi.normalize(),vs.crossVectors(Ln,Yi),r[0]=Yi.x,r[4]=vs.x,r[8]=Ln.x,r[1]=Yi.y,r[5]=vs.y,r[9]=Ln.y,r[2]=Yi.z,r[6]=vs.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],c=i[8],u=i[12],d=i[1],h=i[5],f=i[9],v=i[13],g=i[2],y=i[6],m=i[10],p=i[14],M=i[3],_=i[7],E=i[11],C=i[15],D=r[0],P=r[4],k=r[8],b=r[12],T=r[1],oe=r[5],H=r[9],F=r[13],z=r[2],Z=r[6],V=r[10],B=r[14],ie=r[3],ge=r[7],ve=r[11],Q=r[15];return a[0]=o*D+s*T+c*z+u*ie,a[4]=o*P+s*oe+c*Z+u*ge,a[8]=o*k+s*H+c*V+u*ve,a[12]=o*b+s*F+c*B+u*Q,a[1]=d*D+h*T+f*z+v*ie,a[5]=d*P+h*oe+f*Z+v*ge,a[9]=d*k+h*H+f*V+v*ve,a[13]=d*b+h*F+f*B+v*Q,a[2]=g*D+y*T+m*z+p*ie,a[6]=g*P+y*oe+m*Z+p*ge,a[10]=g*k+y*H+m*V+p*ve,a[14]=g*b+y*F+m*B+p*Q,a[3]=M*D+_*T+E*z+C*ie,a[7]=M*P+_*oe+E*Z+C*ge,a[11]=M*k+_*H+E*V+C*ve,a[15]=M*b+_*F+E*B+C*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],u=e[13],d=e[2],h=e[6],f=e[10],v=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+a*c*h-r*u*h-a*s*f+i*u*f+r*s*v-i*c*v)+y*(+t*c*v-t*u*f+a*o*f-r*o*v+r*u*d-a*c*d)+m*(+t*u*h-t*s*v-a*o*h+i*o*v+a*s*d-i*u*d)+p*(-r*s*d-t*c*h+t*s*f+r*o*h-i*o*f+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],u=e[7],d=e[8],h=e[9],f=e[10],v=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=h*m*u-y*f*u+y*c*v-s*m*v-h*c*p+s*f*p,_=g*f*u-d*m*u-g*c*v+o*m*v+d*c*p-o*f*p,E=d*y*u-g*h*u+g*s*v-o*y*v-d*s*p+o*h*p,C=g*h*c-d*y*c-g*s*f+o*y*f+d*s*m-o*h*m,D=t*M+i*_+r*E+a*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=M*P,e[1]=(y*f*a-h*m*a-y*r*v+i*m*v+h*r*p-i*f*p)*P,e[2]=(s*m*a-y*c*a+y*r*u-i*m*u-s*r*p+i*c*p)*P,e[3]=(h*c*a-s*f*a-h*r*u+i*f*u+s*r*v-i*c*v)*P,e[4]=_*P,e[5]=(d*m*a-g*f*a+g*r*v-t*m*v-d*r*p+t*f*p)*P,e[6]=(g*c*a-o*m*a-g*r*u+t*m*u+o*r*p-t*c*p)*P,e[7]=(o*f*a-d*c*a+d*r*u-t*f*u-o*r*v+t*c*v)*P,e[8]=E*P,e[9]=(g*h*a-d*y*a-g*i*v+t*y*v+d*i*p-t*h*p)*P,e[10]=(o*y*a-g*s*a+g*i*u-t*y*u-o*i*p+t*s*p)*P,e[11]=(d*s*a-o*h*a-d*i*u+t*h*u+o*i*v-t*s*v)*P,e[12]=C*P,e[13]=(d*y*r-g*h*r+g*i*f-t*y*f-d*i*m+t*h*m)*P,e[14]=(g*s*r-o*y*r-g*i*c+t*y*c+o*i*m-t*s*m)*P,e[15]=(o*h*r-d*s*r+d*i*c-t*h*c-o*i*f+t*s*f)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,c=e.z,u=a*o,d=a*s;return this.set(u*o+i,u*s-r*c,u*c+r*s,0,u*s+r*c,d*s+i,d*c-r*o,0,u*c-r*s,d*c+r*o,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,u=a+a,d=o+o,h=s+s,f=a*u,v=a*d,g=a*h,y=o*d,m=o*h,p=s*h,M=c*u,_=c*d,E=c*h,C=i.x,D=i.y,P=i.z;return r[0]=(1-(y+p))*C,r[1]=(v+E)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(v-E)*D,r[5]=(1-(f+p))*D,r[6]=(m+M)*D,r[7]=0,r[8]=(g+_)*P,r[9]=(m-M)*P,r[10]=(1-(f+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),s=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const u=1/a,d=1/o,h=1/s;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=d,Zn.elements[5]*=d,Zn.elements[6]*=d,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,t.setFromRotationMatrix(Zn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=Ui){const c=this.elements,u=2*a/(t-e),d=2*a/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let v,g;if(s===Ui)v=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===to)v=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=Ui){const c=this.elements,u=1/(t-e),d=1/(i-r),h=1/(o-a),f=(t+e)*u,v=(i+r)*d;let g,y;if(s===Ui)g=(o+a)*h,y=-2*h;else if(s===to)g=a*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Or=new K,Zn=new Wt,F_=new K(0,0,0),k_=new K(1,1,1),Yi=new K,vs=new K,Ln=new K,Mu=new Wt,Eu=new wr;class po{constructor(e=0,t=0,i=0,r=po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],u=r[5],d=r[9],h=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Mn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,v));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}po.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B_=0;const wu=new K,Fr=new wr,Ti=new Wt,gs=new K,Pa=new K,z_=new K,G_=new wr,Tu=new K(1,0,0),Au=new K(0,1,0),Ru=new K(0,0,1),H_={type:"added"},V_={type:"removed"};class vn extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new K,t=new po,i=new wr,r=new K(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new mt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gs.copy(e):gs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Pa,gs,this.up):Ti.lookAt(gs,Pa,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(Ti),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(H_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,G_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,u=this.material.length;c<u;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),v=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),v.length>0&&(i.animations=v),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(s){const c=[];for(const u in s){const d=s[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new K(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new K,Ai=new K,Yo=new K,Ri=new K,kr=new K,Br=new K,Cu=new K,qo=new K,Ko=new K,Zo=new K;let _s=!1;class jn{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Jn.subVectors(r,t),Ai.subVectors(i,t),Yo.subVectors(e,t);const o=Jn.dot(Jn),s=Jn.dot(Ai),c=Jn.dot(Yo),u=Ai.dot(Ai),d=Ai.dot(Yo),h=o*u-s*s;if(h===0)return a.set(-2,-1,-1);const f=1/h,v=(u*c-s*d)*f,g=(o*d-s*c)*f;return a.set(1-v-g,g,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ri),Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(e,t,i,r,a,o,s,c){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),this.getInterpolation(e,t,i,r,a,o,s,c)}static getInterpolation(e,t,i,r,a,o,s,c){return this.getBarycoord(e,t,i,r,Ri),c.setScalar(0),c.addScaledVector(a,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(s,Ri.z),c}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Ai.subVectors(e,t),Jn.cross(Ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;kr.subVectors(r,i),Br.subVectors(a,i),qo.subVectors(e,i);const c=kr.dot(qo),u=Br.dot(qo);if(c<=0&&u<=0)return t.copy(i);Ko.subVectors(e,r);const d=kr.dot(Ko),h=Br.dot(Ko);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(kr,o);Zo.subVectors(e,a);const v=kr.dot(Zo),g=Br.dot(Zo);if(g>=0&&v<=g)return t.copy(a);const y=v*u-c*g;if(y<=0&&u>=0&&g<=0)return s=u/(u-g),t.copy(i).addScaledVector(Br,s);const m=d*g-v*h;if(m<=0&&h-d>=0&&v-g>=0)return Cu.subVectors(a,r),s=(h-d)/(h-d+(v-g)),t.copy(r).addScaledVector(Cu,s);const p=1/(m+y+f);return o=y*p,s=f*p,t.copy(i).addScaledVector(kr,o).addScaledVector(Br,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let W_=0;class ba extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=ra,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=Ef,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Jo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=zn.workingColorSpace){return this.r=e,this.g=t,this.b=i,zn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=zn.workingColorSpace){if(e=M_(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Jo(o,a,e+1/3),this.g=Jo(o,a,e),this.b=Jo(o,a,e-1/3)}return zn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=Gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return zn.fromWorkingColorSpace(pn.copy(this),e),Math.round(Mn(pn.r*255,0,255))*65536+Math.round(Mn(pn.g*255,0,255))*256+Math.round(Mn(pn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zn.workingColorSpace){zn.fromWorkingColorSpace(pn.copy(this),t);const i=pn.r,r=pn.g,a=pn.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let c,u;const d=(s+o)/2;if(s===o)c=0,u=0;else{const h=o-s;switch(u=d<=.5?h/(o+s):h/(2-o-s),o){case i:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-i)/h+2;break;case a:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=zn.workingColorSpace){return zn.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ot){zn.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,i=pn.g,r=pn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),Qn.h+=e,Qn.s+=t,Qn.l+=i,this.setHSL(Qn.h,Qn.s,Qn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(xs);const i=Fo(Qn.h,xs.h,t),r=Fo(Qn.s,xs.s,t),a=Fo(Qn.l,xs.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Et;Et.NAMES=Gf;class Hf extends ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new K,bs=new $e;class ai{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rl,this.updateRange={offset:0,count:-1},this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),a=Ct(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Vf extends ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wf extends ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fi extends ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}let j_=0;const kn=new Wt,Qo=new vn,zr=new K,Dn=new ls,La=new ls,an=new K;class Hi extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?Wf:Vf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new mt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Fi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Dn.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];La.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(Dn.min,La.min),Dn.expandByPoint(an),an.addVectors(Dn.max,La.max),Dn.expandByPoint(an)):(Dn.expandByPoint(La.min),Dn.expandByPoint(La.max))}Dn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)an.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(an));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let u=0,d=s.count;u<d;u++)an.fromBufferAttribute(s,u),c&&(zr.fromBufferAttribute(e,u),an.add(zr)),r=Math.max(r,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let T=0;T<s;T++)u[T]=new K,d[T]=new K;const h=new K,f=new K,v=new K,g=new $e,y=new $e,m=new $e,p=new K,M=new K;function _(T,oe,H){h.fromArray(r,T*3),f.fromArray(r,oe*3),v.fromArray(r,H*3),g.fromArray(o,T*2),y.fromArray(o,oe*2),m.fromArray(o,H*2),f.sub(h),v.sub(h),y.sub(g),m.sub(g);const F=1/(y.x*m.y-m.x*y.y);isFinite(F)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(v,-y.y).multiplyScalar(F),M.copy(v).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(F),u[T].add(p),u[oe].add(p),u[H].add(p),d[T].add(M),d[oe].add(M),d[H].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let T=0,oe=E.length;T<oe;++T){const H=E[T],F=H.start,z=H.count;for(let Z=F,V=F+z;Z<V;Z+=3)_(i[Z+0],i[Z+1],i[Z+2])}const C=new K,D=new K,P=new K,k=new K;function b(T){P.fromArray(a,T*3),k.copy(P);const oe=u[T];C.copy(oe),C.sub(P.multiplyScalar(P.dot(oe))).normalize(),D.crossVectors(k,oe);const F=D.dot(d[T])<0?-1:1;c[T*4]=C.x,c[T*4+1]=C.y,c[T*4+2]=C.z,c[T*4+3]=F}for(let T=0,oe=E.length;T<oe;++T){const H=E[T],F=H.start,z=H.count;for(let Z=F,V=F+z;Z<V;Z+=3)b(i[Z+0]),b(i[Z+1]),b(i[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,v=i.count;f<v;f++)i.setXYZ(f,0,0,0);const r=new K,a=new K,o=new K,s=new K,c=new K,u=new K,d=new K,h=new K;if(e)for(let f=0,v=e.count;f<v;f+=3){const g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),s.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),s.add(d),c.add(d),u.add(d),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,a),h.subVectors(r,a),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(s,c){const u=s.array,d=s.itemSize,h=s.normalized,f=new u.constructor(c.length*d);let v=0,g=0;for(let y=0,m=c.length;y<m;y++){s.isInterleavedBufferAttribute?v=c[y]*s.data.stride+s.offset:v=c[y]*d;for(let p=0;p<d;p++)f[g++]=u[v++]}return new ai(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],u=e(c,i);t.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const c=[],u=a[s];for(let d=0,h=u.length;d<h;d++){const f=u[d],v=e(f,i);c.push(v)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const u=o[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const v=u[h];d.push(v.toJSON(e.data))}d.length>0&&(r[c]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const a=e.morphAttributes;for(const u in a){const d=[],h=a[u];for(let f=0,v=h.length;f<v;f++)d.push(h[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new Wt,or=new Bf,ys=new tc,Lu=new K,Gr=new K,Hr=new K,Vr=new K,$o=new K,Ss=new K,Ms=new $e,Es=new $e,ws=new $e,Du=new K,Iu=new K,Uu=new K,Ts=new K,As=new K;class Lt extends vn{constructor(e=new Hi,t=new Hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Ss.set(0,0,0);for(let c=0,u=a.length;c<u;c++){const d=s[c],h=a[c];d!==0&&($o.fromBufferAttribute(h,e),o?Ss.addScaledVector($o,d):Ss.addScaledVector($o.sub(t),d))}t.add(Ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(a),or.copy(e.ray).recast(e.near),!(ys.containsPoint(or.origin)===!1&&(or.intersectSphere(ys,Lu)===null||or.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Pu.copy(a).invert(),or.copy(e.ray).applyMatrix4(Pu),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,h=a.attributes.normal,f=a.groups,v=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,v.start),_=Math.min(s.count,Math.min(m.start+m.count,v.start+v.count));for(let E=M,C=_;E<C;E+=3){const D=s.getX(E),P=s.getX(E+1),k=s.getX(E+2);r=Rs(this,p,e,i,u,d,h,D,P,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,v.start),y=Math.min(s.count,v.start+v.count);for(let m=g,p=y;m<p;m+=3){const M=s.getX(m),_=s.getX(m+1),E=s.getX(m+2);r=Rs(this,o,e,i,u,d,h,M,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,v.start),_=Math.min(c.count,Math.min(m.start+m.count,v.start+v.count));for(let E=M,C=_;E<C;E+=3){const D=E,P=E+1,k=E+2;r=Rs(this,p,e,i,u,d,h,D,P,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,v.start),y=Math.min(c.count,v.start+v.count);for(let m=g,p=y;m<p;m+=3){const M=m,_=m+1,E=m+2;r=Rs(this,o,e,i,u,d,h,M,_,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function X_(n,e,t,i,r,a,o,s){let c;if(e.side===Cn?c=i.intersectTriangle(o,a,r,!0,s):c=i.intersectTriangle(r,a,o,e.side===xi,s),c===null)return null;As.copy(s),As.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(As);return u<t.near||u>t.far?null:{distance:u,point:As.clone(),object:n}}function Rs(n,e,t,i,r,a,o,s,c,u){n.getVertexPosition(s,Gr),n.getVertexPosition(c,Hr),n.getVertexPosition(u,Vr);const d=X_(n,e,t,i,Gr,Hr,Vr,Ts);if(d){r&&(Ms.fromBufferAttribute(r,s),Es.fromBufferAttribute(r,c),ws.fromBufferAttribute(r,u),d.uv=jn.getInterpolation(Ts,Gr,Hr,Vr,Ms,Es,ws,new $e)),a&&(Ms.fromBufferAttribute(a,s),Es.fromBufferAttribute(a,c),ws.fromBufferAttribute(a,u),d.uv1=jn.getInterpolation(Ts,Gr,Hr,Vr,Ms,Es,ws,new $e),d.uv2=d.uv1),o&&(Du.fromBufferAttribute(o,s),Iu.fromBufferAttribute(o,c),Uu.fromBufferAttribute(o,u),d.normal=jn.getInterpolation(Ts,Gr,Hr,Vr,Du,Iu,Uu,new K),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:c,c:u,normal:new K,materialIndex:0};jn.getNormal(Gr,Hr,Vr,h.normal),d.face=h}return d}class Ht extends Hi{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],u=[],d=[],h=[];let f=0,v=0;g("z","y","x",-1,-1,i,t,e,o,a,0),g("z","y","x",1,-1,i,t,-e,o,a,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new Fi(u,3)),this.setAttribute("normal",new Fi(d,3)),this.setAttribute("uv",new Fi(h,2));function g(y,m,p,M,_,E,C,D,P,k,b){const T=E/P,oe=C/k,H=E/2,F=C/2,z=D/2,Z=P+1,V=k+1;let B=0,ie=0;const ge=new K;for(let ve=0;ve<V;ve++){const Q=ve*oe-F;for(let ne=0;ne<Z;ne++){const Se=ne*T-H;ge[y]=Se*M,ge[m]=Q*_,ge[p]=z,u.push(ge.x,ge.y,ge.z),ge[y]=0,ge[m]=0,ge[p]=D>0?1:-1,d.push(ge.x,ge.y,ge.z),h.push(ne/P),h.push(1-ve/k),B+=1}}for(let ve=0;ve<k;ve++)for(let Q=0;Q<P;Q++){const ne=f+Q+Z*ve,Se=f+Q+Z*(ve+1),Ae=f+(Q+1)+Z*(ve+1),Pe=f+(Q+1)+Z*ve;c.push(ne,Se,Pe),c.push(Se,Ae,Pe),ie+=6}s.addGroup(v,ie,b),v+=ie,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yn(n){const e={};for(let t=0;t<n.length;t++){const i=ma(n[t]);for(const r in i)e[r]=i[r]}return e}function Y_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jf(n){return n.getRenderTarget()===null?n.outputColorSpace:bi}const Xf={clone:ma,merge:yn};var q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=Y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yf extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Un extends Yf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wr=-90,jr=1;class Z_ extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Un(Wr,jr,e,t);r.layers=this.layers,this.add(r);const a=new Un(Wr,jr,e,t);a.layers=this.layers,this.add(a);const o=new Un(Wr,jr,e,t);o.layers=this.layers,this.add(o);const s=new Un(Wr,jr,e,t);s.layers=this.layers,this.add(s);const c=new Un(Wr,jr,e,t);c.layers=this.layers,this.add(c);const u=new Un(Wr,jr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,c]=t;for(const u of t)this.remove(u);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===to)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,c,u]=this.children,d=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(d),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class qf extends mn{constructor(e,t,i,r,a,o,s,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:da,super(e,t,i,r,a,o,s,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J_ extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ja("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sr?Ot:Mr),this.texture=new qf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ht(5,5,5),a=new zi({name:"CubemapFromEquirect",uniforms:ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Oi});a.uniforms.tEquirect.value=t;const o=new Lt(r,a),s=t.minFilter;return t.minFilter===ts&&(t.minFilter=Wn),new Z_(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const el=new K,Q_=new K,$_=new mt;class qi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=el.subVectors(i,t).cross(Q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(el),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$_.getNormalMatrix(e),r=this.coplanarPoint(el).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new tc,Cs=new K;class nc{constructor(e=new qi,t=new qi,i=new qi,r=new qi,a=new qi,o=new qi){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],v=r[8],g=r[9],y=r[10],m=r[11],p=r[12],M=r[13],_=r[14],E=r[15];if(i[0].setComponents(c-a,f-u,m-v,E-p).normalize(),i[1].setComponents(c+a,f+u,m+v,E+p).normalize(),i[2].setComponents(c+o,f+d,m+g,E+M).normalize(),i[3].setComponents(c-o,f-d,m-g,E-M).normalize(),i[4].setComponents(c-s,f-h,m-y,E-_).normalize(),t===Ui)i[5].setComponents(c+s,f+h,m+y,E+_).normalize();else if(t===to)i[5].setComponents(s,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Cs.x=r.normal.x>0?e.max.x:e.min.x,Cs.y=r.normal.y>0?e.max.y:e.min.y,Cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kf(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function ex(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,d){const h=u.array,f=u.usage,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,f),u.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function a(u,d,h){const f=d.array,v=d.updateRange;n.bindBuffer(h,u),v.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):n.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(n.deleteBuffer(d.buffer),i.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,d)):h.version<u.version&&(a(h.buffer,u,d),h.version=u.version)}return{get:o,remove:s,update:c}}class ic extends Hi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),c=Math.floor(r),u=s+1,d=c+1,h=e/s,f=t/c,v=[],g=[],y=[],m=[];for(let p=0;p<d;p++){const M=p*f-o;for(let _=0;_<u;_++){const E=_*h-a;g.push(E,-M,0),y.push(0,0,1),m.push(_/s),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<s;M++){const _=M+u*p,E=M+u*(p+1),C=M+1+u*(p+1),D=M+1+u*p;v.push(_,E,D),v.push(E,C,D)}this.setIndex(v),this.setAttribute("position",new Fi(g,3)),this.setAttribute("normal",new Fi(y,3)),this.setAttribute("uv",new Fi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nx=`#ifdef USE_ALPHAHASH
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
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fx=`#ifdef USE_IRIDESCENCE
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
#endif`,hx=`#ifdef USE_BUMPMAP
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sx=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ex=`vec3 transformedNormal = objectNormal;
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
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
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
}`,Gx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
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
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jx=`PhysicalMaterial material;
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
#endif`,Qx=`struct PhysicalMaterial {
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
}`,$x=`
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
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
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ib=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ab=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cb=`#if defined( USE_POINTS_UV )
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
#endif`,ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hb=`#ifdef USE_MORPHNORMALS
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
#endif`,pb=`#ifdef USE_MORPHTARGETS
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
#endif`,mb=`#ifdef USE_MORPHTARGETS
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
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
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
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fb=`float getShadowMask() {
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
}`,kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bb=`#ifdef USE_SKINNING
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
#endif`,zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gb=`#ifdef USE_SKINNING
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
#endif`,Hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,o0=`#define DISTANCE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`uniform float scale;
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,g0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,x0=`#define NORMAL
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
}`,b0=`#define PHONG
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
}`,y0=`#define PHONG
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
}`,S0=`#define STANDARD
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
}`,M0=`#define STANDARD
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
}`,E0=`#define TOON
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
}`,w0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,P0=`uniform float rotation;
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
}`,L0=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:tx,alphahash_pars_fragment:nx,alphamap_fragment:ix,alphamap_pars_fragment:rx,alphatest_fragment:ax,alphatest_pars_fragment:sx,aomap_fragment:ox,aomap_pars_fragment:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:dx,iridescence_fragment:fx,bumpmap_pars_fragment:hx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:vx,clipping_planes_vertex:gx,color_fragment:_x,color_pars_fragment:xx,color_pars_vertex:bx,color_vertex:yx,common:Sx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:wx,displacementmap_vertex:Tx,emissivemap_fragment:Ax,emissivemap_pars_fragment:Rx,colorspace_fragment:Cx,colorspace_pars_fragment:Px,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Ix,envmap_pars_vertex:Ux,envmap_physical_pars_fragment:Xx,envmap_vertex:Nx,fog_vertex:Ox,fog_pars_vertex:Fx,fog_fragment:kx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_fragment:Gx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Wx,lights_pars_begin:jx,lights_toon_fragment:Yx,lights_toon_pars_fragment:qx,lights_phong_fragment:Kx,lights_phong_pars_fragment:Zx,lights_physical_fragment:Jx,lights_physical_pars_fragment:Qx,lights_fragment_begin:$x,lights_fragment_maps:eb,lights_fragment_end:tb,logdepthbuf_fragment:nb,logdepthbuf_pars_fragment:ib,logdepthbuf_pars_vertex:rb,logdepthbuf_vertex:ab,map_fragment:sb,map_pars_fragment:ob,map_particle_fragment:lb,map_particle_pars_fragment:cb,metalnessmap_fragment:ub,metalnessmap_pars_fragment:db,morphcolor_vertex:fb,morphnormal_vertex:hb,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:vb,normal_fragment_maps:gb,normal_pars_fragment:_b,normal_pars_vertex:xb,normal_vertex:bb,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Mb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:wb,opaque_fragment:Tb,packing:Ab,premultiplied_alpha_fragment:Rb,project_vertex:Cb,dithering_fragment:Pb,dithering_pars_fragment:Lb,roughnessmap_fragment:Db,roughnessmap_pars_fragment:Ib,shadowmap_pars_fragment:Ub,shadowmap_pars_vertex:Nb,shadowmap_vertex:Ob,shadowmask_pars_fragment:Fb,skinbase_vertex:kb,skinning_pars_vertex:Bb,skinning_vertex:zb,skinnormal_vertex:Gb,specularmap_fragment:Hb,specularmap_pars_fragment:Vb,tonemapping_fragment:Wb,tonemapping_pars_fragment:jb,transmission_fragment:Xb,transmission_pars_fragment:Yb,uv_pars_fragment:qb,uv_pars_vertex:Kb,uv_vertex:Zb,worldpos_vertex:Jb,background_vert:Qb,background_frag:$b,backgroundCube_vert:e0,backgroundCube_frag:t0,cube_vert:n0,cube_frag:i0,depth_vert:r0,depth_frag:a0,distanceRGBA_vert:s0,distanceRGBA_frag:o0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:u0,linedashed_frag:d0,meshbasic_vert:f0,meshbasic_frag:h0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:v0,meshmatcap_frag:g0,meshnormal_vert:_0,meshnormal_frag:x0,meshphong_vert:b0,meshphong_frag:y0,meshphysical_vert:S0,meshphysical_frag:M0,meshtoon_vert:E0,meshtoon_frag:w0,points_vert:T0,points_frag:A0,shadow_vert:R0,shadow_frag:C0,sprite_vert:P0,sprite_frag:L0},He={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},di={basic:{uniforms:yn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:yn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:yn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:yn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:yn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Et(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:yn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:yn([He.points,He.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:yn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:yn([He.common,He.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:yn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:yn([He.sprite,He.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:yn([He.common,He.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:yn([He.lights,He.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};di.physical={uniforms:yn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ps={r:0,b:0,g:0};function D0(n,e,t,i,r,a,o){const s=new Et(0);let c=a===!0?0:1,u,d,h=null,f=0,v=null;function g(m,p){let M=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?y(s,c):_&&_.isColor&&(y(_,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===fo)?(d===void 0&&(d=new Lt(new Ht(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:ma(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=_.colorSpace!==Ot,(h!==_||f!==_.version||v!==n.toneMapping)&&(d.material.needsUpdate=!0,h=_,f=_.version,v=n.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Lt(new ic(2,2),new zi({name:"BackgroundMaterial",uniforms:ma(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=_.colorSpace!==Ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||v!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,v=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,p){m.getRGB(Ps,jf(n)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(m,p=1){s.set(m),c=p,y(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(s,c)},render:g}}function I0(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},c=m(null);let u=c,d=!1;function h(z,Z,V,B,ie){let ge=!1;if(o){const ve=y(B,V,Z);u!==ve&&(u=ve,v(u.object)),ge=p(z,B,V,ie),ge&&M(z,B,V,ie)}else{const ve=Z.wireframe===!0;(u.geometry!==B.id||u.program!==V.id||u.wireframe!==ve)&&(u.geometry=B.id,u.program=V.id,u.wireframe=ve,ge=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(ge||d)&&(d=!1,k(z,Z,V,B),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function f(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function v(z){return i.isWebGL2?n.bindVertexArray(z):a.bindVertexArrayOES(z)}function g(z){return i.isWebGL2?n.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function y(z,Z,V){const B=V.wireframe===!0;let ie=s[z.id];ie===void 0&&(ie={},s[z.id]=ie);let ge=ie[Z.id];ge===void 0&&(ge={},ie[Z.id]=ge);let ve=ge[B];return ve===void 0&&(ve=m(f()),ge[B]=ve),ve}function m(z){const Z=[],V=[],B=[];for(let ie=0;ie<r;ie++)Z[ie]=0,V[ie]=0,B[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:V,attributeDivisors:B,object:z,attributes:{},index:null}}function p(z,Z,V,B){const ie=u.attributes,ge=Z.attributes;let ve=0;const Q=V.getAttributes();for(const ne in Q)if(Q[ne].location>=0){const Ae=ie[ne];let Pe=ge[ne];if(Pe===void 0&&(ne==="instanceMatrix"&&z.instanceMatrix&&(Pe=z.instanceMatrix),ne==="instanceColor"&&z.instanceColor&&(Pe=z.instanceColor)),Ae===void 0||Ae.attribute!==Pe||Pe&&Ae.data!==Pe.data)return!0;ve++}return u.attributesNum!==ve||u.index!==B}function M(z,Z,V,B){const ie={},ge=Z.attributes;let ve=0;const Q=V.getAttributes();for(const ne in Q)if(Q[ne].location>=0){let Ae=ge[ne];Ae===void 0&&(ne==="instanceMatrix"&&z.instanceMatrix&&(Ae=z.instanceMatrix),ne==="instanceColor"&&z.instanceColor&&(Ae=z.instanceColor));const Pe={};Pe.attribute=Ae,Ae&&Ae.data&&(Pe.data=Ae.data),ie[ne]=Pe,ve++}u.attributes=ie,u.attributesNum=ve,u.index=B}function _(){const z=u.newAttributes;for(let Z=0,V=z.length;Z<V;Z++)z[Z]=0}function E(z){C(z,0)}function C(z,Z){const V=u.newAttributes,B=u.enabledAttributes,ie=u.attributeDivisors;V[z]=1,B[z]===0&&(n.enableVertexAttribArray(z),B[z]=1),ie[z]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,Z),ie[z]=Z)}function D(){const z=u.newAttributes,Z=u.enabledAttributes;for(let V=0,B=Z.length;V<B;V++)Z[V]!==z[V]&&(n.disableVertexAttribArray(V),Z[V]=0)}function P(z,Z,V,B,ie,ge,ve){ve===!0?n.vertexAttribIPointer(z,Z,V,ie,ge):n.vertexAttribPointer(z,Z,V,B,ie,ge)}function k(z,Z,V,B){if(i.isWebGL2===!1&&(z.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const ie=B.attributes,ge=V.getAttributes(),ve=Z.defaultAttributeValues;for(const Q in ge){const ne=ge[Q];if(ne.location>=0){let Se=ie[Q];if(Se===void 0&&(Q==="instanceMatrix"&&z.instanceMatrix&&(Se=z.instanceMatrix),Q==="instanceColor"&&z.instanceColor&&(Se=z.instanceColor)),Se!==void 0){const Ae=Se.normalized,Pe=Se.itemSize,Fe=t.get(Se);if(Fe===void 0)continue;const je=Fe.buffer,ze=Fe.type,Qe=Fe.bytesPerElement,dt=i.isWebGL2===!0&&(ze===n.INT||ze===n.UNSIGNED_INT||Se.gpuType===Af);if(Se.isInterleavedBufferAttribute){const Xe=Se.data,J=Xe.stride,lt=Se.offset;if(Xe.isInstancedInterleavedBuffer){for(let We=0;We<ne.locationSize;We++)C(ne.location+We,Xe.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let We=0;We<ne.locationSize;We++)E(ne.location+We);n.bindBuffer(n.ARRAY_BUFFER,je);for(let We=0;We<ne.locationSize;We++)P(ne.location+We,Pe/ne.locationSize,ze,Ae,J*Qe,(lt+Pe/ne.locationSize*We)*Qe,dt)}else{if(Se.isInstancedBufferAttribute){for(let Xe=0;Xe<ne.locationSize;Xe++)C(ne.location+Xe,Se.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Xe=0;Xe<ne.locationSize;Xe++)E(ne.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Xe=0;Xe<ne.locationSize;Xe++)P(ne.location+Xe,Pe/ne.locationSize,ze,Ae,Pe*Qe,Pe/ne.locationSize*Xe*Qe,dt)}}else if(ve!==void 0){const Ae=ve[Q];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(ne.location,Ae);break;case 3:n.vertexAttrib3fv(ne.location,Ae);break;case 4:n.vertexAttrib4fv(ne.location,Ae);break;default:n.vertexAttrib1fv(ne.location,Ae)}}}}D()}function b(){H();for(const z in s){const Z=s[z];for(const V in Z){const B=Z[V];for(const ie in B)g(B[ie].object),delete B[ie];delete Z[V]}delete s[z]}}function T(z){if(s[z.id]===void 0)return;const Z=s[z.id];for(const V in Z){const B=Z[V];for(const ie in B)g(B[ie].object),delete B[ie];delete Z[V]}delete s[z.id]}function oe(z){for(const Z in s){const V=s[Z];if(V[z.id]===void 0)continue;const B=V[z.id];for(const ie in B)g(B[ie].object),delete B[ie];delete V[z.id]}}function H(){F(),d=!0,u!==c&&(u=c,v(u.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:H,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:oe,initAttributes:_,enableAttribute:E,disableUnusedAttributes:D}}function U0(n,e,t,i){const r=i.isWebGL2;let a;function o(u){a=u}function s(u,d){n.drawArrays(a,u,d),t.update(d,a,1)}function c(u,d,h){if(h===0)return;let f,v;if(r)f=n,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](a,u,d,h),t.update(d,a,h)}this.setMode=o,this.render=s,this.renderInstances=c}function N0(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const c=a(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,E=o||e.has("OES_texture_float"),C=_&&E,D=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:D}}function O0(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new qi,s=new mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const v=h.length!==0||f||i!==0||r;return r=f,i=h.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,v){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||a&&!m)a?d(null):u();else{const M=a?0:i,_=M*4;let E=p.clippingState||null;c.value=E,E=d(g,f,_,v);for(let C=0;C!==_;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,v,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=v+y*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,E=v;_!==y;++_,E+=4)o.copy(h[_]).applyMatrix4(M,s),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function F0(n){let e=new WeakMap;function t(o,s){return s===eo?o.mapping=da:s===wl&&(o.mapping=fa),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===eo||s===wl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new J_(c.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Zf extends Yf{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qr=4,Nu=[.125,.215,.35,.446,.526,.582],hr=20,tl=new Zf,Ou=new Et;let nl=null;const dr=(1+Math.sqrt(5))/2,Xr=1/dr,Fu=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,dr,Xr),new K(0,dr,-Xr),new K(Xr,0,dr),new K(-Xr,0,dr),new K(dr,Xr,0),new K(-dr,Xr,0)];class ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){nl=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nl),e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===da||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:ha,format:ei,colorSpace:bi,depthBuffer:!1},r=Bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k0(a)),this._blurMaterial=B0(a,e,t)}return r}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,i,r){const s=new Un(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Ou),d.toneMapping=Ji,d.autoClear=!1;const v=new Hf({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new Lt(new Ht,v);let y=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,y=!0):(v.color.copy(Ou),y=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(s.up.set(0,c[p],0),s.lookAt(u[p],0,0)):M===1?(s.up.set(0,0,c[p]),s.lookAt(0,u[p],0)):(s.up.set(0,c[p],0),s.lookAt(0,0,u[p]));const _=this._cubeSize;Ls(r,M*_,p>2?_:0,_,_),d.setRenderTarget(r),y&&d.render(g,s),d.render(e,s)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===da||e.mapping===fa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;Ls(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,tl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fu[(r-1)%Fu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Lt(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*hr-1),y=a/g,m=isFinite(a)?1+Math.floor(d*y):hr;m>hr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const p=[];let M=0;for(let P=0;P<hr;++P){const k=P/y,b=Math.exp(-k*k/2);p.push(b),P===0?M+=b:P<m&&(M+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const E=this._sizeLods[r],C=3*E*(r>_-Qr?r-_+Qr:0),D=4*(this._cubeSize-E);Ls(t,C,D,3*E,2*E),c.setRenderTarget(t),c.render(h,tl)}}function k0(n){const e=[],t=[],i=[];let r=n;const a=n-Qr+1+Nu.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>n-Qr?c=Nu[o-n+Qr-1]:o===0&&(c=0),i.push(c);const u=1/(s-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,g=6,y=3,m=2,p=1,M=new Float32Array(y*g*v),_=new Float32Array(m*g*v),E=new Float32Array(p*g*v);for(let D=0;D<v;D++){const P=D%3*2/3-1,k=D>2?0:-1,b=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];M.set(b,y*g*D),_.set(f,m*g*D);const T=[D,D,D,D,D,D];E.set(T,p*g*D)}const C=new Hi;C.setAttribute("position",new ai(M,y)),C.setAttribute("uv",new ai(_,m)),C.setAttribute("faceIndex",new ai(E,p)),e.push(C),r>Qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bu(n,e,t){const i=new Bi(n,e,t);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function B0(n,e,t){const i=new Float32Array(hr),r=new K(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function zu(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Gu(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function z0(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,u=c===eo||c===wl,d=c===da||c===fa;if(u||d)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new ku(n)),h=u?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(u&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new ku(n));const f=u?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let c=0;const u=6;for(let d=0;d<u;d++)s[d]!==void 0&&c++;return c===u}function a(s){const c=s.target;c.removeEventListener("dispose",a);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function G0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function H0(n,e,t,i){const r={},a=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const v=a.get(f);v&&(e.remove(v),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const v=h.morphAttributes;for(const g in v){const y=v[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function u(h){const f=[],v=h.index,g=h.attributes.position;let y=0;if(v!==null){const M=v.array;y=v.version;for(let _=0,E=M.length;_<E;_+=3){const C=M[_+0],D=M[_+1],P=M[_+2];f.push(C,D,D,P,P,C)}}else if(g!==void 0){const M=g.array;y=g.version;for(let _=0,E=M.length/3-1;_<E;_+=3){const C=_+0,D=_+1,P=_+2;f.push(C,D,D,P,P,C)}}else return;const m=new(Nf(f)?Wf:Vf)(f,1);m.version=y;const p=a.get(h);p&&e.remove(p),a.set(h,m)}function d(h){const f=a.get(h);if(f){const v=h.index;v!==null&&f.version<v.version&&u(h)}else u(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function V0(n,e,t,i){const r=i.isWebGL2;let a;function o(f){a=f}let s,c;function u(f){s=f.type,c=f.bytesPerElement}function d(f,v){n.drawElements(a,v,s,f*c),t.update(v,a,1)}function h(f,v,g){if(g===0)return;let y,m;if(r)y=n,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](a,v,s,f*c,g),t.update(v,a,g)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h}function W0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function j0(n,e){return n[0]-e[0]}function X0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Y0(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new Ft,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function c(u,d,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=g!==void 0?g.length:0;let m=a.get(d);if(m===void 0||m.count!==y){let Z=function(){F.dispose(),a.delete(d),d.removeEventListener("dispose",Z)};var v=Z;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,D=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let b=0;_===!0&&(b=1),E===!0&&(b=2),C===!0&&(b=3);let T=d.attributes.position.count*b,oe=1;T>e.maxTextureSize&&(oe=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*oe*4*y),F=new kf(H,T,oe,y);F.type=Ii,F.needsUpdate=!0;const z=b*4;for(let V=0;V<y;V++){const B=D[V],ie=P[V],ge=k[V],ve=T*oe*4*V;for(let Q=0;Q<B.count;Q++){const ne=Q*z;_===!0&&(o.fromBufferAttribute(B,Q),H[ve+ne+0]=o.x,H[ve+ne+1]=o.y,H[ve+ne+2]=o.z,H[ve+ne+3]=0),E===!0&&(o.fromBufferAttribute(ie,Q),H[ve+ne+4]=o.x,H[ve+ne+5]=o.y,H[ve+ne+6]=o.z,H[ve+ne+7]=0),C===!0&&(o.fromBufferAttribute(ge,Q),H[ve+ne+8]=o.x,H[ve+ne+9]=o.y,H[ve+ne+10]=o.z,H[ve+ne+11]=ge.itemSize===4?o.w:1)}}m={count:y,texture:F,size:new $e(T,oe)},a.set(d,m),d.addEventListener("dispose",Z)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];const M=d.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let y=i[d.id];if(y===void 0||y.length!==g){y=[];for(let E=0;E<g;E++)y[E]=[E,0];i[d.id]=y}for(let E=0;E<g;E++){const C=y[E];C[0]=E,C[1]=f[E]}y.sort(X0);for(let E=0;E<8;E++)E<g&&y[E][1]?(s[E][0]=y[E][0],s[E][1]=y[E][1]):(s[E][0]=Number.MAX_SAFE_INTEGER,s[E][1]=0);s.sort(j0);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let M=0;for(let E=0;E<8;E++){const C=s[E],D=C[0],P=C[1];D!==Number.MAX_SAFE_INTEGER&&P?(m&&d.getAttribute("morphTarget"+E)!==m[D]&&d.setAttribute("morphTarget"+E,m[D]),p&&d.getAttribute("morphNormal"+E)!==p[D]&&d.setAttribute("morphNormal"+E,p[D]),r[E]=P,M+=P):(m&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),p&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),r[E]=0)}const _=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function q0(n,e,t,i){let r=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function s(c){const u=c.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Jf=new mn,Qf=new kf,$f=new N_,eh=new qf,Hu=[],Vu=[],Wu=new Float32Array(16),ju=new Float32Array(9),Xu=new Float32Array(4);function ya(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Hu[r];if(a===void 0&&(a=new Float32Array(r),Hu[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function mo(n,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function K0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function $0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Xu.set(i),n.uniformMatrix2fv(this.addr,!1,Xu),nn(t,i)}}function ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;ju.set(i),n.uniformMatrix3fv(this.addr,!1,ju),nn(t,i)}}function ty(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Wu.set(i),n.uniformMatrix4fv(this.addr,!1,Wu),nn(t,i)}}function ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function sy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function uy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Jf,r)}function dy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$f,r)}function fy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||eh,r)}function hy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qf,r)}function py(n){switch(n){case 5126:return K0;case 35664:return Z0;case 35665:return J0;case 35666:return Q0;case 35674:return $0;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return ry;case 35669:case 35673:return ay;case 5125:return sy;case 36294:return oy;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return hy}}function my(n,e){n.uniform1fv(this.addr,e)}function vy(n,e){const t=ya(e,this.size,2);n.uniform2fv(this.addr,t)}function gy(n,e){const t=ya(e,this.size,3);n.uniform3fv(this.addr,t)}function _y(n,e){const t=ya(e,this.size,4);n.uniform4fv(this.addr,t)}function xy(n,e){const t=ya(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function by(n,e){const t=ya(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yy(n,e){const t=ya(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sy(n,e){n.uniform1iv(this.addr,e)}function My(n,e){n.uniform2iv(this.addr,e)}function Ey(n,e){n.uniform3iv(this.addr,e)}function wy(n,e){n.uniform4iv(this.addr,e)}function Ty(n,e){n.uniform1uiv(this.addr,e)}function Ay(n,e){n.uniform2uiv(this.addr,e)}function Ry(n,e){n.uniform3uiv(this.addr,e)}function Cy(n,e){n.uniform4uiv(this.addr,e)}function Py(n,e,t){const i=this.cache,r=e.length,a=mo(t,r);tn(i,a)||(n.uniform1iv(this.addr,a),nn(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jf,a[o])}function Ly(n,e,t){const i=this.cache,r=e.length,a=mo(t,r);tn(i,a)||(n.uniform1iv(this.addr,a),nn(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$f,a[o])}function Dy(n,e,t){const i=this.cache,r=e.length,a=mo(t,r);tn(i,a)||(n.uniform1iv(this.addr,a),nn(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||eh,a[o])}function Iy(n,e,t){const i=this.cache,r=e.length,a=mo(t,r);tn(i,a)||(n.uniform1iv(this.addr,a),nn(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qf,a[o])}function Uy(n){switch(n){case 5126:return my;case 35664:return vy;case 35665:return gy;case 35666:return _y;case 35674:return xy;case 35675:return by;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return My;case 35668:case 35672:return Ey;case 35669:case 35673:return wy;case 5125:return Ty;case 36294:return Ay;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Iy}}class Ny{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=py(t.type)}}class Oy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Uy(t.type)}}class Fy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function Yu(n,e){n.seq.push(e),n.map[e.id]=e}function ky(n,e,t){const i=n.name,r=i.length;for(il.lastIndex=0;;){const a=il.exec(i),o=il.lastIndex;let s=a[1];const c=a[2]==="]",u=a[3];if(c&&(s=s|0),u===void 0||u==="["&&o+2===r){Yu(t,u===void 0?new Ny(s,n,e):new Oy(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new Fy(s),Yu(t,h)),t=h}}}class Hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);ky(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let By=0;function zy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Gy(n){switch(n){case bi:return["Linear","( value )"];case Ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Ku(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+zy(n.getShaderSource(e),o)}else return r}function Hy(n,e){const t=Gy(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vy(n,e){let t;switch(e){case Zg:t="Linear";break;case Jg:t="Reinhard";break;case Qg:t="OptimizedCineon";break;case $g:t="ACESFilmic";break;case e_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ga).join(`
`)}function jy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function Ga(n){return n!==""}function Zu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(n){return n.replace(Yy,Ky)}const qy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ky(n,e){let t=ft[e];if(t===void 0){const i=qy.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}const Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(n){return n.replace(Zy,Jy)}function Jy(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function $u(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Rg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function $y(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case da:case fa:e="ENVMAP_TYPE_CUBE";break;case fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eS(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===fa&&(e="ENVMAP_MODE_REFRACTION"),e}function tS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wf:e="ENVMAP_BLENDING_MULTIPLY";break;case qg:e="ENVMAP_BLENDING_MIX";break;case Kg:e="ENVMAP_BLENDING_ADD";break}return e}function nS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function iS(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=Qy(t),u=$y(t),d=eS(t),h=tS(t),f=nS(t),v=t.isWebGL2?"":Wy(t),g=jy(a),y=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),m.length>0&&(m+=`
`),p=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(m=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[v,$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ji?Vy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Hy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=Dl(o),o=Zu(o,t),o=Ju(o,t),s=Dl(s),s=Zu(s,t),s=Ju(s,t),o=Qu(o),s=Qu(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+o,E=M+p+s,C=qu(r,r.VERTEX_SHADER,_),D=qu(r,r.FRAGMENT_SHADER,E);if(r.attachShader(y,C),r.attachShader(y,D),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(y).trim(),T=r.getShaderInfoLog(C).trim(),oe=r.getShaderInfoLog(D).trim();let H=!0,F=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,C,D);else{const z=Ku(r,C,"vertex"),Z=Ku(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+z+`
`+Z)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(T===""||oe==="")&&(F=!1);F&&(this.diagnostics={runnable:H,programLog:b,vertexShader:{log:T,prefix:m},fragmentShader:{log:oe,prefix:p}})}r.deleteShader(C),r.deleteShader(D);let P;this.getUniforms=function(){return P===void 0&&(P=new Hs(r,y)),P};let k;return this.getAttributes=function(){return k===void 0&&(k=Xy(r,y)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=By++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=D,this}let rS=0;class aS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sS(e),t.set(e,i)),i}}class sS{constructor(e){this.id=rS++,this.code=e,this.usedTimes=0}}function oS(n,e,t,i,r,a,o){const s=new zf,c=new aS,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===0?"uv":`uv${b}`}function m(b,T,oe,H,F){const z=H.fog,Z=F.geometry,V=b.isMeshStandardMaterial?H.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),ie=B&&B.mapping===fo?B.image.height:null,ge=g[b.type];b.precision!==null&&(v=r.getMaxPrecision(b.precision),v!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Q=ve!==void 0?ve.length:0;let ne=0;Z.morphAttributes.position!==void 0&&(ne=1),Z.morphAttributes.normal!==void 0&&(ne=2),Z.morphAttributes.color!==void 0&&(ne=3);let Se,Ae,Pe,Fe;if(ge){const ct=di[ge];Se=ct.vertexShader,Ae=ct.fragmentShader}else Se=b.vertexShader,Ae=b.fragmentShader,c.update(b),Pe=c.getVertexShaderID(b),Fe=c.getFragmentShaderID(b);const je=n.getRenderTarget(),ze=F.isInstancedMesh===!0,Qe=!!b.map,dt=!!b.matcap,Xe=!!B,J=!!b.aoMap,lt=!!b.lightMap,We=!!b.bumpMap,N=!!b.normalMap,$=!!b.displacementMap,Ie=!!b.emissiveMap,he=!!b.metalnessMap,Me=!!b.roughnessMap,se=b.anisotropy>0,Oe=b.clearcoat>0,Le=b.iridescence>0,A=b.sheen>0,S=b.transmission>0,I=se&&!!b.anisotropyMap,Y=Oe&&!!b.clearcoatMap,X=Oe&&!!b.clearcoatNormalMap,_e=Oe&&!!b.clearcoatRoughnessMap,Ue=Le&&!!b.iridescenceMap,ye=Le&&!!b.iridescenceThicknessMap,q=A&&!!b.sheenColorMap,L=A&&!!b.sheenRoughnessMap,ae=!!b.specularMap,me=!!b.specularColorMap,xe=!!b.specularIntensityMap,Ee=S&&!!b.transmissionMap,Ye=S&&!!b.thicknessMap,nt=!!b.gradientMap,O=!!b.alphaMap,Ne=b.alphaTest>0,le=!!b.alphaHash,Ce=!!b.extensions,be=!!Z.attributes.uv1,De=!!Z.attributes.uv2,qe=!!Z.attributes.uv3;let rt=Ji;return b.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:d,shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:Se,fragmentShader:Ae,defines:b.defines,customVertexShaderID:Pe,customFragmentShaderID:Fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,instancing:ze,instancingColor:ze&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:je===null?n.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:bi,map:Qe,matcap:dt,envMap:Xe,envMapMode:Xe&&B.mapping,envMapCubeUVHeight:ie,aoMap:J,lightMap:lt,bumpMap:We,normalMap:N,displacementMap:f&&$,emissiveMap:Ie,normalMapObjectSpace:N&&b.normalMapType===h_,normalMapTangentSpace:N&&b.normalMapType===Uf,metalnessMap:he,roughnessMap:Me,anisotropy:se,anisotropyMap:I,clearcoat:Oe,clearcoatMap:Y,clearcoatNormalMap:X,clearcoatRoughnessMap:_e,iridescence:Le,iridescenceMap:Ue,iridescenceThicknessMap:ye,sheen:A,sheenColorMap:q,sheenRoughnessMap:L,specularMap:ae,specularColorMap:me,specularIntensityMap:xe,transmission:S,transmissionMap:Ee,thicknessMap:Ye,gradientMap:nt,opaque:b.transparent===!1&&b.blending===ra,alphaMap:O,alphaTest:Ne,alphaHash:le,combine:b.combine,mapUv:Qe&&y(b.map.channel),aoMapUv:J&&y(b.aoMap.channel),lightMapUv:lt&&y(b.lightMap.channel),bumpMapUv:We&&y(b.bumpMap.channel),normalMapUv:N&&y(b.normalMap.channel),displacementMapUv:$&&y(b.displacementMap.channel),emissiveMapUv:Ie&&y(b.emissiveMap.channel),metalnessMapUv:he&&y(b.metalnessMap.channel),roughnessMapUv:Me&&y(b.roughnessMap.channel),anisotropyMapUv:I&&y(b.anisotropyMap.channel),clearcoatMapUv:Y&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:X&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:q&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:L&&y(b.sheenRoughnessMap.channel),specularMapUv:ae&&y(b.specularMap.channel),specularColorMapUv:me&&y(b.specularColorMap.channel),specularIntensityMapUv:xe&&y(b.specularIntensityMap.channel),transmissionMapUv:Ee&&y(b.transmissionMap.channel),thicknessMapUv:Ye&&y(b.thicknessMap.channel),alphaMapUv:O&&y(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(N||se),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:De,vertexUv3s:qe,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Qe||O),fog:!!z,useFog:b.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&oe.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Qe&&b.map.isVideoTexture===!0&&b.map.colorSpace===Ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xn,flipSided:b.side===Cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ce&&b.extensions.derivatives===!0,extensionFragDepth:Ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const oe in b.defines)T.push(oe),T.push(b.defines[oe]);return b.isRawShaderMaterial===!1&&(M(T,b),_(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function M(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function _(b,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),b.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),b.push(s.mask)}function E(b){const T=g[b.type];let oe;if(T){const H=di[T];oe=Xf.clone(H.uniforms)}else oe=b.uniforms;return oe}function C(b,T){let oe;for(let H=0,F=u.length;H<F;H++){const z=u[H];if(z.cacheKey===T){oe=z,++oe.usedTimes;break}}return oe===void 0&&(oe=new iS(n,T,b,a),u.push(oe)),oe}function D(b){if(--b.usedTimes===0){const T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),b.destroy()}}function P(b){c.remove(b)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:k}}function lS(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function cS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ed(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function td(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,v,g,y,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:v,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=v,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=y,p.group=m),e++,p}function s(h,f,v,g,y,m){const p=o(h,f,v,g,y,m);v.transmission>0?i.push(p):v.transparent===!0?r.push(p):t.push(p)}function c(h,f,v,g,y,m){const p=o(h,f,v,g,y,m);v.transmission>0?i.unshift(p):v.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,f){t.length>1&&t.sort(h||cS),i.length>1&&i.sort(f||ed),r.length>1&&r.sort(f||ed)}function d(){for(let h=e,f=n.length;h<f;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:c,finish:d,sort:u}}function uS(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new td,n.set(i,[o])):r>=a.length?(o=new td,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function dS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Et};break;case"SpotLight":t={position:new K,direction:new K,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function fS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hS=0;function pS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mS(n,e){const t=new dS,i=fS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new K);const a=new K,o=new Wt,s=new Wt;function c(d,h){let f=0,v=0,g=0;for(let oe=0;oe<9;oe++)r.probe[oe].set(0,0,0);let y=0,m=0,p=0,M=0,_=0,E=0,C=0,D=0,P=0,k=0;d.sort(pS);const b=h===!0?Math.PI:1;for(let oe=0,H=d.length;oe<H;oe++){const F=d[oe],z=F.color,Z=F.intensity,V=F.distance,B=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=z.r*Z*b,v+=z.g*Z*b,g+=z.b*Z*b;else if(F.isLightProbe)for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(F.sh.coefficients[ie],Z);else if(F.isDirectionalLight){const ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*b),F.castShadow){const ge=F.shadow,ve=i.get(F);ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize=ge.mapSize,r.directionalShadow[y]=ve,r.directionalShadowMap[y]=B,r.directionalShadowMatrix[y]=F.shadow.matrix,E++}r.directional[y]=ie,y++}else if(F.isSpotLight){const ie=t.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(z).multiplyScalar(Z*b),ie.distance=V,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,r.spot[p]=ie;const ge=F.shadow;if(F.map&&(r.spotLightMap[P]=F.map,P++,ge.updateMatrices(F),F.castShadow&&k++),r.spotLightMatrix[p]=ge.matrix,F.castShadow){const ve=i.get(F);ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize=ge.mapSize,r.spotShadow[p]=ve,r.spotShadowMap[p]=B,D++}p++}else if(F.isRectAreaLight){const ie=t.get(F);ie.color.copy(z).multiplyScalar(Z),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=ie,M++}else if(F.isPointLight){const ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*b),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const ge=F.shadow,ve=i.get(F);ve.shadowBias=ge.bias,ve.shadowNormalBias=ge.normalBias,ve.shadowRadius=ge.radius,ve.shadowMapSize=ge.mapSize,ve.shadowCameraNear=ge.camera.near,ve.shadowCameraFar=ge.camera.far,r.pointShadow[m]=ve,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=F.shadow.matrix,C++}r.point[m]=ie,m++}else if(F.isHemisphereLight){const ie=t.get(F);ie.skyColor.copy(F.color).multiplyScalar(Z*b),ie.groundColor.copy(F.groundColor).multiplyScalar(Z*b),r.hemi[_]=ie,_++}}M>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==y||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==M||T.hemiLength!==_||T.numDirectionalShadows!==E||T.numPointShadows!==C||T.numSpotShadows!==D||T.numSpotMaps!==P)&&(r.directional.length=y,r.spot.length=p,r.rectArea.length=M,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=D+P-k,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=k,T.directionalLength=y,T.pointLength=m,T.spotLength=p,T.rectAreaLength=M,T.hemiLength=_,T.numDirectionalShadows=E,T.numPointShadows=C,T.numSpotShadows=D,T.numSpotMaps=P,r.version=hS++)}function u(d,h){let f=0,v=0,g=0,y=0,m=0;const p=h.matrixWorldInverse;for(let M=0,_=d.length;M<_;M++){const E=d[M];if(E.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(p),f++}else if(E.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(p),g++}else if(E.isRectAreaLight){const C=r.rectArea[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),s.identity(),o.copy(E.matrixWorld),o.premultiply(p),s.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),y++}else if(E.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),v++}else if(E.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:c,setupView:u,state:r}}function nd(n,e){const t=new mS(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(h){i.push(h)}function s(h){r.push(h)}function c(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:s}}function vS(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let c;return s===void 0?(c=new nd(n,e),t.set(a,[c])):o>=s.length?(c=new nd(n,e),s.push(c)):c=s[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class gS extends ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _S extends ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bS=`uniform sampler2D shadow_pass;
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
}`;function yS(n,e,t){let i=new nc;const r=new $e,a=new $e,o=new Ft,s=new gS({depthPacking:f_}),c=new _S,u={},d=t.maxTextureSize,h={[xi]:Cn,[Cn]:xi,[Xn]:Xn},f=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:xS,fragmentShader:bS}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const g=new Hi;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sf;let p=this.type;this.render=function(C,D,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const k=n.getRenderTarget(),b=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(Oi),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const H=p!==Ci&&this.type===Ci,F=p===Ci&&this.type!==Ci;for(let z=0,Z=C.length;z<Z;z++){const V=C[z],B=V.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ie=B.getFrameExtents();if(r.multiply(ie),a.copy(B.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ie.x),r.x=a.x*ie.x,B.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ie.y),r.y=a.y*ie.y,B.mapSize.y=a.y)),B.map===null||H===!0||F===!0){const ve=this.type!==Ci?{minFilter:Bt,magFilter:Bt}:{};B.map!==null&&B.map.dispose(),B.map=new Bi(r.x,r.y,ve),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ge=B.getViewportCount();for(let ve=0;ve<ge;ve++){const Q=B.getViewport(ve);o.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),oe.viewport(o),B.updateMatrices(V,ve),i=B.getFrustum(),E(D,P,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Ci&&M(B,P),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(k,b,T)};function M(C,D){const P=e.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Bi(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,P,f,y,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,P,v,y,null)}function _(C,D,P,k){let b=null;const T=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)b=T;else if(b=P.isPointLight===!0?c:s,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const oe=b.uuid,H=D.uuid;let F=u[oe];F===void 0&&(F={},u[oe]=F);let z=F[H];z===void 0&&(z=b.clone(),F[H]=z),b=z}if(b.visible=D.visible,b.wireframe=D.wireframe,k===Ci?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:h[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const oe=n.properties.get(b);oe.light=P}return b}function E(C,D,P,k,b){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Ci)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const H=e.update(C),F=C.material;if(Array.isArray(F)){const z=H.groups;for(let Z=0,V=z.length;Z<V;Z++){const B=z[Z],ie=F[B.materialIndex];if(ie&&ie.visible){const ge=_(C,ie,k,b);n.renderBufferDirect(P,null,H,ge,C,B)}}}else if(F.visible){const z=_(C,F,k,b);n.renderBufferDirect(P,null,H,z,C,null)}}const oe=C.children;for(let H=0,F=oe.length;H<F;H++)E(oe[H],D,P,k,b)}}function SS(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const Ne=new Ft;let le=null;const Ce=new Ft(0,0,0,0);return{setMask:function(be){le!==be&&!O&&(n.colorMask(be,be,be,be),le=be)},setLocked:function(be){O=be},setClear:function(be,De,qe,rt,Mt){Mt===!0&&(be*=rt,De*=rt,qe*=rt),Ne.set(be,De,qe,rt),Ce.equals(Ne)===!1&&(n.clearColor(be,De,qe,rt),Ce.copy(Ne))},reset:function(){O=!1,le=null,Ce.set(-1,0,0,0)}}}function a(){let O=!1,Ne=null,le=null,Ce=null;return{setTest:function(be){be?je(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(be){Ne!==be&&!O&&(n.depthMask(be),Ne=be)},setFunc:function(be){if(le!==be){switch(be){case Gg:n.depthFunc(n.NEVER);break;case Hg:n.depthFunc(n.ALWAYS);break;case Vg:n.depthFunc(n.LESS);break;case El:n.depthFunc(n.LEQUAL);break;case Wg:n.depthFunc(n.EQUAL);break;case jg:n.depthFunc(n.GEQUAL);break;case Xg:n.depthFunc(n.GREATER);break;case Yg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=be}},setLocked:function(be){O=be},setClear:function(be){Ce!==be&&(n.clearDepth(be),Ce=be)},reset:function(){O=!1,Ne=null,le=null,Ce=null}}}function o(){let O=!1,Ne=null,le=null,Ce=null,be=null,De=null,qe=null,rt=null,Mt=null;return{setTest:function(ct){O||(ct?je(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(ct){Ne!==ct&&!O&&(n.stencilMask(ct),Ne=ct)},setFunc:function(ct,Rt,_t){(le!==ct||Ce!==Rt||be!==_t)&&(n.stencilFunc(ct,Rt,_t),le=ct,Ce=Rt,be=_t)},setOp:function(ct,Rt,_t){(De!==ct||qe!==Rt||rt!==_t)&&(n.stencilOp(ct,Rt,_t),De=ct,qe=Rt,rt=_t)},setLocked:function(ct){O=ct},setClear:function(ct){Mt!==ct&&(n.clearStencil(ct),Mt=ct)},reset:function(){O=!1,Ne=null,le=null,Ce=null,be=null,De=null,qe=null,rt=null,Mt=null}}}const s=new r,c=new a,u=new o,d=new WeakMap,h=new WeakMap;let f={},v={},g=new WeakMap,y=[],m=null,p=!1,M=null,_=null,E=null,C=null,D=null,P=null,k=null,b=!1,T=null,oe=null,H=null,F=null,z=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ie)[1]),V=B>=1):ie.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),V=B>=2);let ge=null,ve={};const Q=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Se=new Ft().fromArray(Q),Ae=new Ft().fromArray(ne);function Pe(O,Ne,le,Ce){const be=new Uint8Array(4),De=n.createTexture();n.bindTexture(O,De),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<le;qe++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ne,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ne+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return De}const Fe={};Fe[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),u.setClear(0),je(n.DEPTH_TEST),c.setFunc(El),$(!1),Ie(Gc),je(n.CULL_FACE),We(Oi);function je(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function ze(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function Qe(O,Ne){return v[O]!==Ne?(n.bindFramebuffer(O,Ne),v[O]=Ne,i&&(O===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Ne),O===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Ne)),!0):!1}function dt(O,Ne){let le=y,Ce=!1;if(O)if(le=g.get(Ne),le===void 0&&(le=[],g.set(Ne,le)),O.isWebGLMultipleRenderTargets){const be=O.texture;if(le.length!==be.length||le[0]!==n.COLOR_ATTACHMENT0){for(let De=0,qe=be.length;De<qe;De++)le[De]=n.COLOR_ATTACHMENT0+De;le.length=be.length,Ce=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,Ce=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Xe(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const J={[Jr]:n.FUNC_ADD,[Pg]:n.FUNC_SUBTRACT,[Lg]:n.FUNC_REVERSE_SUBTRACT};if(i)J[jc]=n.MIN,J[Xc]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(J[jc]=O.MIN_EXT,J[Xc]=O.MAX_EXT)}const lt={[Dg]:n.ZERO,[Ig]:n.ONE,[Ug]:n.SRC_COLOR,[Mf]:n.SRC_ALPHA,[zg]:n.SRC_ALPHA_SATURATE,[kg]:n.DST_COLOR,[Og]:n.DST_ALPHA,[Ng]:n.ONE_MINUS_SRC_COLOR,[Ef]:n.ONE_MINUS_SRC_ALPHA,[Bg]:n.ONE_MINUS_DST_COLOR,[Fg]:n.ONE_MINUS_DST_ALPHA};function We(O,Ne,le,Ce,be,De,qe,rt){if(O===Oi){p===!0&&(ze(n.BLEND),p=!1);return}if(p===!1&&(je(n.BLEND),p=!0),O!==Cg){if(O!==M||rt!==b){if((_!==Jr||D!==Jr)&&(n.blendEquation(n.FUNC_ADD),_=Jr,D=Jr),rt)switch(O){case ra:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hc:n.blendFunc(n.ONE,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,C=null,P=null,k=null,M=O,b=rt}return}be=be||Ne,De=De||le,qe=qe||Ce,(Ne!==_||be!==D)&&(n.blendEquationSeparate(J[Ne],J[be]),_=Ne,D=be),(le!==E||Ce!==C||De!==P||qe!==k)&&(n.blendFuncSeparate(lt[le],lt[Ce],lt[De],lt[qe]),E=le,C=Ce,P=De,k=qe),M=O,b=!1}function N(O,Ne){O.side===Xn?ze(n.CULL_FACE):je(n.CULL_FACE);let le=O.side===Cn;Ne&&(le=!le),$(le),O.blending===ra&&O.transparent===!1?We(Oi):We(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ce=O.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Me(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?je(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(O){T!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),T=O)}function Ie(O){O!==Tg?(je(n.CULL_FACE),O!==oe&&(O===Gc?n.cullFace(n.BACK):O===Ag?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),oe=O}function he(O){O!==H&&(V&&n.lineWidth(O),H=O)}function Me(O,Ne,le){O?(je(n.POLYGON_OFFSET_FILL),(F!==Ne||z!==le)&&(n.polygonOffset(Ne,le),F=Ne,z=le)):ze(n.POLYGON_OFFSET_FILL)}function se(O){O?je(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function Oe(O){O===void 0&&(O=n.TEXTURE0+Z-1),ge!==O&&(n.activeTexture(O),ge=O)}function Le(O,Ne,le){le===void 0&&(ge===null?le=n.TEXTURE0+Z-1:le=ge);let Ce=ve[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},ve[le]=Ce),(Ce.type!==O||Ce.texture!==Ne)&&(ge!==le&&(n.activeTexture(le),ge=le),n.bindTexture(O,Ne||Fe[O]),Ce.type=O,Ce.texture=Ne)}function A(){const O=ve[ge];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(O){Se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Se.copy(O))}function xe(O){Ae.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ae.copy(O))}function Ee(O,Ne){let le=h.get(Ne);le===void 0&&(le=new WeakMap,h.set(Ne,le));let Ce=le.get(O);Ce===void 0&&(Ce=n.getUniformBlockIndex(Ne,O.name),le.set(O,Ce))}function Ye(O,Ne){const Ce=h.get(Ne).get(O);d.get(Ne)!==Ce&&(n.uniformBlockBinding(Ne,Ce,O.__bindingPointIndex),d.set(Ne,Ce))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ge=null,ve={},v={},g=new WeakMap,y=[],m=null,p=!1,M=null,_=null,E=null,C=null,D=null,P=null,k=null,b=!1,T=null,oe=null,H=null,F=null,z=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),s.reset(),c.reset(),u.reset()}return{buffers:{color:s,depth:c,stencil:u},enable:je,disable:ze,bindFramebuffer:Qe,drawBuffers:dt,useProgram:Xe,setBlending:We,setMaterial:N,setFlipSided:$,setCullFace:Ie,setLineWidth:he,setPolygonOffset:Me,setScissorTest:se,activeTexture:Oe,bindTexture:Le,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:L,texImage3D:ae,updateUBOMapping:Ee,uniformBlockBinding:Ye,texStorage2D:ye,texStorage3D:q,texSubImage2D:Y,texSubImage3D:X,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ue,scissor:me,viewport:xe,reset:nt}}function MS(n,e,t,i,r,a,o){const s=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,S){return p?new OffscreenCanvas(A,S):no("canvas")}function _(A,S,I,Y){let X=1;if((A.width>Y||A.height>Y)&&(X=Y/Math.max(A.width,A.height)),X<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const _e=S?Ll:Math.floor,Ue=_e(X*A.width),ye=_e(X*A.height);y===void 0&&(y=M(Ue,ye));const q=I?M(Ue,ye):y;return q.width=Ue,q.height=ye,q.getContext("2d").drawImage(A,0,0,Ue,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ue+"x"+ye+")."),q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function E(A){return bu(A.width)&&bu(A.height)}function C(A){return s?!1:A.wrapS!==$n||A.wrapT!==$n||A.minFilter!==Bt&&A.minFilter!==Wn}function D(A,S){return A.generateMipmaps&&S&&A.minFilter!==Bt&&A.minFilter!==Wn}function P(A){n.generateMipmap(A)}function k(A,S,I,Y,X=!1){if(s===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e=S;return S===n.RED&&(I===n.FLOAT&&(_e=n.R32F),I===n.HALF_FLOAT&&(_e=n.R16F),I===n.UNSIGNED_BYTE&&(_e=n.R8)),S===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(_e=n.R8UI),I===n.UNSIGNED_SHORT&&(_e=n.R16UI),I===n.UNSIGNED_INT&&(_e=n.R32UI),I===n.BYTE&&(_e=n.R8I),I===n.SHORT&&(_e=n.R16I),I===n.INT&&(_e=n.R32I)),S===n.RG&&(I===n.FLOAT&&(_e=n.RG32F),I===n.HALF_FLOAT&&(_e=n.RG16F),I===n.UNSIGNED_BYTE&&(_e=n.RG8)),S===n.RGBA&&(I===n.FLOAT&&(_e=n.RGBA32F),I===n.HALF_FLOAT&&(_e=n.RGBA16F),I===n.UNSIGNED_BYTE&&(_e=Y===Ot&&X===!1?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)),(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function b(A,S,I){return D(A,I)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==Wn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){return A===Bt||A===Yc||A===Po?n.NEAREST:n.LINEAR}function oe(A){const S=A.target;S.removeEventListener("dispose",oe),F(S),S.isVideoTexture&&g.delete(S)}function H(A){const S=A.target;S.removeEventListener("dispose",H),Z(S)}function F(A){const S=i.get(A);if(S.__webglInit===void 0)return;const I=A.source,Y=m.get(I);if(Y){const X=Y[S.__cacheKey];X.usedTimes--,X.usedTimes===0&&z(A),Object.keys(Y).length===0&&m.delete(I)}i.remove(A)}function z(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const I=A.source,Y=m.get(I);delete Y[S.__cacheKey],o.memory.textures--}function Z(A){const S=A.texture,I=i.get(A),Y=i.get(S);if(Y.__webglTexture!==void 0&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(I.__webglFramebuffer[X]))for(let _e=0;_e<I.__webglFramebuffer[X].length;_e++)n.deleteFramebuffer(I.__webglFramebuffer[X][_e]);else n.deleteFramebuffer(I.__webglFramebuffer[X]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[X])}else{if(Array.isArray(I.__webglFramebuffer))for(let X=0;X<I.__webglFramebuffer.length;X++)n.deleteFramebuffer(I.__webglFramebuffer[X]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let X=0;X<I.__webglColorRenderbuffer.length;X++)I.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[X]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let X=0,_e=S.length;X<_e;X++){const Ue=i.get(S[X]);Ue.__webglTexture&&(n.deleteTexture(Ue.__webglTexture),o.memory.textures--),i.remove(S[X])}i.remove(S),i.remove(A)}let V=0;function B(){V=0}function ie(){const A=V;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),V+=1,A}function ge(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ve(A,S){const I=i.get(A);if(A.isVideoTexture&&Oe(A),A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(I,A,S);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+S)}function Q(A,S){const I=i.get(A);if(A.version>0&&I.__version!==A.version){Qe(I,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+S)}function ne(A,S){const I=i.get(A);if(A.version>0&&I.__version!==A.version){Qe(I,A,S);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+S)}function Se(A,S){const I=i.get(A);if(A.version>0&&I.__version!==A.version){dt(I,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+S)}const Ae={[Tl]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},Pe={[Bt]:n.NEAREST,[Yc]:n.NEAREST_MIPMAP_NEAREST,[Po]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[t_]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},Fe={[m_]:n.NEVER,[S_]:n.ALWAYS,[v_]:n.LESS,[__]:n.LEQUAL,[g_]:n.EQUAL,[y_]:n.GEQUAL,[x_]:n.GREATER,[b_]:n.NOTEQUAL};function je(A,S,I){if(I?(n.texParameteri(A,n.TEXTURE_WRAP_S,Ae[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Ae[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Ae[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Pe[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Pe[S.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==$n||S.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,T(S.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==Bt&&S.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Bt||S.minFilter!==Po&&S.minFilter!==ts||S.type===Ii&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===ha&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ze(A,S){let I=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",oe));const Y=S.source;let X=m.get(Y);X===void 0&&(X={},m.set(Y,X));const _e=ge(S);if(_e!==A.__cacheKey){X[_e]===void 0&&(X[_e]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),X[_e].usedTimes++;const Ue=X[A.__cacheKey];Ue!==void 0&&(X[A.__cacheKey].usedTimes--,Ue.usedTimes===0&&z(S)),A.__cacheKey=_e,A.__webglTexture=X[_e].texture}return I}function Qe(A,S,I){let Y=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=n.TEXTURE_3D);const X=ze(A,S),_e=S.source;t.bindTexture(Y,A.__webglTexture,n.TEXTURE0+I);const Ue=i.get(_e);if(_e.version!==Ue.__version||X===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ye=C(S)&&E(S.image)===!1;let q=_(S.image,ye,!1,d);q=Le(S,q);const L=E(q)||s,ae=a.convert(S.format,S.colorSpace);let me=a.convert(S.type),xe=k(S.internalFormat,ae,me,S.colorSpace,S.isVideoTexture);je(Y,S,L);let Ee;const Ye=S.mipmaps,nt=s&&S.isVideoTexture!==!0,O=Ue.__version===void 0||X===!0,Ne=b(S,q,L);if(S.isDepthTexture)xe=n.DEPTH_COMPONENT,s?S.type===Ii?xe=n.DEPTH_COMPONENT32F:S.type===Ki?xe=n.DEPTH_COMPONENT24:S.type===br?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:S.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===yr&&xe===n.DEPTH_COMPONENT&&S.type!==ec&&S.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ki,me=a.convert(S.type)),S.format===pa&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,S.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=br,me=a.convert(S.type))),O&&(nt?t.texStorage2D(n.TEXTURE_2D,1,xe,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,xe,q.width,q.height,0,ae,me,null));else if(S.isDataTexture)if(Ye.length>0&&L){nt&&O&&t.texStorage2D(n.TEXTURE_2D,Ne,xe,Ye[0].width,Ye[0].height);for(let le=0,Ce=Ye.length;le<Ce;le++)Ee=Ye[le],nt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,ae,me,Ee.data):t.texImage2D(n.TEXTURE_2D,le,xe,Ee.width,Ee.height,0,ae,me,Ee.data);S.generateMipmaps=!1}else nt?(O&&t.texStorage2D(n.TEXTURE_2D,Ne,xe,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,ae,me,q.data)):t.texImage2D(n.TEXTURE_2D,0,xe,q.width,q.height,0,ae,me,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&O&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,xe,Ye[0].width,Ye[0].height,q.depth);for(let le=0,Ce=Ye.length;le<Ce;le++)Ee=Ye[le],S.format!==ei?ae!==null?nt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,q.depth,ae,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,xe,Ee.width,Ee.height,q.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,q.depth,ae,me,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,xe,Ee.width,Ee.height,q.depth,0,ae,me,Ee.data)}else{nt&&O&&t.texStorage2D(n.TEXTURE_2D,Ne,xe,Ye[0].width,Ye[0].height);for(let le=0,Ce=Ye.length;le<Ce;le++)Ee=Ye[le],S.format!==ei?ae!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,ae,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,le,xe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,ae,me,Ee.data):t.texImage2D(n.TEXTURE_2D,le,xe,Ee.width,Ee.height,0,ae,me,Ee.data)}else if(S.isDataArrayTexture)nt?(O&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,xe,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ae,me,q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,q.width,q.height,q.depth,0,ae,me,q.data);else if(S.isData3DTexture)nt?(O&&t.texStorage3D(n.TEXTURE_3D,Ne,xe,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ae,me,q.data)):t.texImage3D(n.TEXTURE_3D,0,xe,q.width,q.height,q.depth,0,ae,me,q.data);else if(S.isFramebufferTexture){if(O)if(nt)t.texStorage2D(n.TEXTURE_2D,Ne,xe,q.width,q.height);else{let le=q.width,Ce=q.height;for(let be=0;be<Ne;be++)t.texImage2D(n.TEXTURE_2D,be,xe,le,Ce,0,ae,me,null),le>>=1,Ce>>=1}}else if(Ye.length>0&&L){nt&&O&&t.texStorage2D(n.TEXTURE_2D,Ne,xe,Ye[0].width,Ye[0].height);for(let le=0,Ce=Ye.length;le<Ce;le++)Ee=Ye[le],nt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,ae,me,Ee):t.texImage2D(n.TEXTURE_2D,le,xe,ae,me,Ee);S.generateMipmaps=!1}else nt?(O&&t.texStorage2D(n.TEXTURE_2D,Ne,xe,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,me,q)):t.texImage2D(n.TEXTURE_2D,0,xe,ae,me,q);D(S,L)&&P(Y),Ue.__version=_e.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function dt(A,S,I){if(S.image.length!==6)return;const Y=ze(A,S),X=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+I);const _e=i.get(X);if(X.version!==_e.__version||Y===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,q=[];for(let le=0;le<6;le++)!Ue&&!ye?q[le]=_(S.image[le],!1,!0,u):q[le]=ye?S.image[le].image:S.image[le],q[le]=Le(S,q[le]);const L=q[0],ae=E(L)||s,me=a.convert(S.format,S.colorSpace),xe=a.convert(S.type),Ee=k(S.internalFormat,me,xe,S.colorSpace),Ye=s&&S.isVideoTexture!==!0,nt=_e.__version===void 0||Y===!0;let O=b(S,L,ae);je(n.TEXTURE_CUBE_MAP,S,ae);let Ne;if(Ue){Ye&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,O,Ee,L.width,L.height);for(let le=0;le<6;le++){Ne=q[le].mipmaps;for(let Ce=0;Ce<Ne.length;Ce++){const be=Ne[Ce];S.format!==ei?me!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,0,0,be.width,be.height,me,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,0,0,be.width,be.height,me,xe,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce,Ee,be.width,be.height,0,me,xe,be.data)}}}else{Ne=S.mipmaps,Ye&&nt&&(Ne.length>0&&O++,t.texStorage2D(n.TEXTURE_CUBE_MAP,O,Ee,q[0].width,q[0].height));for(let le=0;le<6;le++)if(ye){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,q[le].width,q[le].height,me,xe,q[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ee,q[le].width,q[le].height,0,me,xe,q[le].data);for(let Ce=0;Ce<Ne.length;Ce++){const De=Ne[Ce].image[le].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,0,0,De.width,De.height,me,xe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,Ee,De.width,De.height,0,me,xe,De.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,me,xe,q[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ee,me,xe,q[le]);for(let Ce=0;Ce<Ne.length;Ce++){const be=Ne[Ce];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,0,0,me,xe,be.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce+1,Ee,me,xe,be.image[le])}}}D(S,ae)&&P(n.TEXTURE_CUBE_MAP),_e.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Xe(A,S,I,Y,X,_e){const Ue=a.convert(I.format,I.colorSpace),ye=a.convert(I.type),q=k(I.internalFormat,Ue,ye,I.colorSpace);if(!i.get(S).__hasExternalTextures){const ae=Math.max(1,S.width>>_e),me=Math.max(1,S.height>>_e);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,_e,q,ae,me,S.depth,0,Ue,ye,null):t.texImage2D(X,_e,q,ae,me,0,Ue,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),se(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,X,i.get(I).__webglTexture,0,Me(S)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,X,i.get(I).__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(A,S,I){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let Y=n.DEPTH_COMPONENT16;if(I||se(S)){const X=S.depthTexture;X&&X.isDepthTexture&&(X.type===Ii?Y=n.DEPTH_COMPONENT32F:X.type===Ki&&(Y=n.DEPTH_COMPONENT24));const _e=Me(S);se(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,Y,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,Y,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,Y,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const Y=Me(S);I&&se(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,S.width,S.height):se(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const Y=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let X=0;X<Y.length;X++){const _e=Y[X],Ue=a.convert(_e.format,_e.colorSpace),ye=a.convert(_e.type),q=k(_e.internalFormat,Ue,ye,_e.colorSpace),L=Me(S);I&&se(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,q,S.width,S.height):se(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,q,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ve(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,X=Me(S);if(S.depthTexture.format===yr)se(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(S.depthTexture.format===pa)se(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function We(A){const S=i.get(A),I=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");lt(S.__webglFramebuffer,A)}else if(I){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=n.createRenderbuffer(),J(S.__webglDepthbuffer[Y],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),J(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(A,S,I){const Y=i.get(A);S!==void 0&&Xe(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&We(A)}function $(A){const S=A.texture,I=i.get(A),Y=i.get(S);A.addEventListener("dispose",H),A.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,o.memory.textures++);const X=A.isWebGLCubeRenderTarget===!0,_e=A.isWebGLMultipleRenderTargets===!0,Ue=E(A)||s;if(X){I.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(s&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[ye]=[];for(let q=0;q<S.mipmaps.length;q++)I.__webglFramebuffer[ye][q]=n.createFramebuffer()}else I.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(s&&S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)I.__webglFramebuffer[ye]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(_e)if(r.drawBuffers){const ye=A.texture;for(let q=0,L=ye.length;q<L;q++){const ae=i.get(ye[q]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&se(A)===!1){const ye=_e?S:[S];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let q=0;q<ye.length;q++){const L=ye[q];I.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[q]);const ae=a.convert(L.format,L.colorSpace),me=a.convert(L.type),xe=k(L.internalFormat,ae,me,L.colorSpace,A.isXRRenderTarget===!0),Ee=Me(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,xe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,I.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),J(I.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),je(n.TEXTURE_CUBE_MAP,S,Ue);for(let ye=0;ye<6;ye++)if(s&&S.mipmaps&&S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)Xe(I.__webglFramebuffer[ye][q],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,q);else Xe(I.__webglFramebuffer[ye],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);D(S,Ue)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const ye=A.texture;for(let q=0,L=ye.length;q<L;q++){const ae=ye[q],me=i.get(ae);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),je(n.TEXTURE_2D,ae,Ue),Xe(I.__webglFramebuffer,A,ae,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D,0),D(ae,Ue)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?ye=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,Y.__webglTexture),je(ye,S,Ue),s&&S.mipmaps&&S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)Xe(I.__webglFramebuffer[q],A,S,n.COLOR_ATTACHMENT0,ye,q);else Xe(I.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,ye,0);D(S,Ue)&&P(ye),t.unbindTexture()}A.depthBuffer&&We(A)}function Ie(A){const S=E(A)||s,I=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Y=0,X=I.length;Y<X;Y++){const _e=I[Y];if(D(_e,S)){const Ue=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(_e).__webglTexture;t.bindTexture(Ue,ye),P(Ue),t.unbindTexture()}}}function he(A){if(s&&A.samples>0&&se(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],I=A.width,Y=A.height;let X=n.COLOR_BUFFER_BIT;const _e=[],Ue=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(A),q=A.isWebGLMultipleRenderTargets===!0;if(q)for(let L=0;L<S.length;L++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let L=0;L<S.length;L++){_e.push(n.COLOR_ATTACHMENT0+L),A.depthBuffer&&_e.push(Ue);const ae=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(ae===!1&&(A.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),q&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[L]),ae===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ue]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ue])),q){const me=i.get(S[L]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,I,Y,0,0,I,Y,X,n.NEAREST),v&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let L=0;L<S.length;L++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,ye.__webglColorRenderbuffer[L]);const ae=i.get(S[L]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Me(A){return Math.min(h,A.samples)}function se(A){const S=i.get(A);return s&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Oe(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function Le(A,S){const I=A.colorSpace,Y=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Cl||I!==bi&&I!==Mr&&(I===Ot||I===ho?s===!1?e.has("EXT_sRGB")===!0&&Y===ei?(A.format=Cl,A.minFilter=Wn,A.generateMipmaps=!1):S=Of.sRGBToLinear(S):(Y!==ei||X!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}this.allocateTextureUnit=ie,this.resetTextureUnits=B,this.setTexture2D=ve,this.setTexture2DArray=Q,this.setTexture3D=ne,this.setTextureCube=Se,this.rebindTextures=N,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=se}const ES=0,Qt=1;function wS(n,e,t){const i=t.isWebGL2;function r(a,o=Mr){let s;const c=o===Ot||o===ho?Qt:ES;if(a===Qi)return n.UNSIGNED_BYTE;if(a===Rf)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Cf)return n.UNSIGNED_SHORT_5_5_5_1;if(a===n_)return n.BYTE;if(a===i_)return n.SHORT;if(a===ec)return n.UNSIGNED_SHORT;if(a===Af)return n.INT;if(a===Ki)return n.UNSIGNED_INT;if(a===Ii)return n.FLOAT;if(a===ha)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===r_)return n.ALPHA;if(a===ei)return n.RGBA;if(a===a_)return n.LUMINANCE;if(a===s_)return n.LUMINANCE_ALPHA;if(a===yr)return n.DEPTH_COMPONENT;if(a===pa)return n.DEPTH_STENCIL;if(a===Cl)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===o_)return n.RED;if(a===Pf)return n.RED_INTEGER;if(a===l_)return n.RG;if(a===Lf)return n.RG_INTEGER;if(a===Df)return n.RGBA_INTEGER;if(a===Lo||a===Do||a===Io||a===Uo)if(c===Qt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===qc||a===Kc||a===Zc||a===Jc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Kc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Zc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Jc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===c_)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Qc||a===$c)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Qc)return c===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===$c)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===eu||a===tu||a===nu||a===iu||a===ru||a===au||a===su||a===ou||a===lu||a===cu||a===uu||a===du||a===fu||a===hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===eu)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===tu)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===nu)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===iu)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ru)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===au)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===su)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ou)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===lu)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===cu)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===uu)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===du)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===fu)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===hu)return c===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===No||a===pu||a===mu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===No)return c===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===u_||a===vu||a===gu||a===_u)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===No)return s.COMPRESSED_RED_RGTC1_EXT;if(a===vu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_u)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===br?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class TS extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ln extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AS={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(u,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),v=.02,g=.005;u.inputState.pinching&&f>v+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(AS)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class th extends mn{constructor(e,t,i,r,a,o,s,c,u,d){if(d=d!==void 0?d:yr,d!==yr&&d!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===yr&&(i=Ki),i===void 0&&d===pa&&(i=br),super(null,r,a,o,s,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Bt,this.minFilter=c!==void 0?c:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class RS extends Tr{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",c=1,u=null,d=null,h=null,f=null,v=null,g=null;const y=t.getContextAttributes();let m=null,p=null;const M=[],_=[],E=new Un;E.layers.enable(1),E.viewport=new Ft;const C=new Un;C.layers.enable(2),C.viewport=new Ft;const D=[E,C],P=new TS;P.layers.enable(1),P.layers.enable(2);let k=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=M[Q];return ne===void 0&&(ne=new rl,M[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=M[Q];return ne===void 0&&(ne=new rl,M[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=M[Q];return ne===void 0&&(ne=new rl,M[Q]=ne),ne.getHandSpace()};function T(Q){const ne=_.indexOf(Q.inputSource);if(ne===-1)return;const Se=M[ne];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,u||o),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function oe(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",H);for(let Q=0;Q<M.length;Q++){const ne=_[Q];ne!==null&&(_[Q]=null,M[Q].disconnect(ne))}k=null,b=null,e.setRenderTarget(m),v=null,f=null,h=null,r=null,p=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:v}),p=new Bi(v.framebufferWidth,v.framebufferHeight,{format:ei,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ne=null,Se=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=y.stencil?pa:yr,Se=y.stencil?br:Ki);const Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),p=new Bi(f.textureWidth,f.textureHeight,{format:ei,type:Qi,depthTexture:new th(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Fe=e.properties.get(p);Fe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(s),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(Q){for(let ne=0;ne<Q.removed.length;ne++){const Se=Q.removed[ne],Ae=_.indexOf(Se);Ae>=0&&(_[Ae]=null,M[Ae].disconnect(Se))}for(let ne=0;ne<Q.added.length;ne++){const Se=Q.added[ne];let Ae=_.indexOf(Se);if(Ae===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=_.length){_.push(Se),Ae=Fe;break}else if(_[Fe]===null){_[Fe]=Se,Ae=Fe;break}if(Ae===-1)break}const Pe=M[Ae];Pe&&Pe.connect(Se)}}const F=new K,z=new K;function Z(Q,ne,Se){F.setFromMatrixPosition(ne.matrixWorld),z.setFromMatrixPosition(Se.matrixWorld);const Ae=F.distanceTo(z),Pe=ne.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,je=Pe[14]/(Pe[10]-1),ze=Pe[14]/(Pe[10]+1),Qe=(Pe[9]+1)/Pe[5],dt=(Pe[9]-1)/Pe[5],Xe=(Pe[8]-1)/Pe[0],J=(Fe[8]+1)/Fe[0],lt=je*Xe,We=je*J,N=Ae/(-Xe+J),$=N*-Xe;ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX($),Q.translateZ(N),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const Ie=je+N,he=ze+N,Me=lt-$,se=We+(Ae-$),Oe=Qe*ze/he*Ie,Le=dt*ze/he*Ie;Q.projectionMatrix.makePerspective(Me,se,Oe,Le,Ie,he),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function V(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;P.near=C.near=E.near=Q.near,P.far=C.far=E.far=Q.far,(k!==P.near||b!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),k=P.near,b=P.far);const ne=Q.parent,Se=P.cameras;V(P,ne);for(let Ae=0;Ae<Se.length;Ae++)V(Se[Ae],ne);Se.length===2?Z(P,E,C):P.projectionMatrix.copy(E.projectionMatrix),B(Q,P,ne)};function B(Q,ne,Se){Se===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Pl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&v===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Q)};let ie=null;function ge(Q,ne){if(d=ne.getViewerPose(u||o),g=ne,d!==null){const Se=d.views;v!==null&&(e.setRenderTargetFramebuffer(p,v.framebuffer),e.setRenderTarget(p));let Ae=!1;Se.length!==P.cameras.length&&(P.cameras.length=0,Ae=!0);for(let Pe=0;Pe<Se.length;Pe++){const Fe=Se[Pe];let je=null;if(v!==null)je=v.getViewport(Fe);else{const Qe=h.getViewSubImage(f,Fe);je=Qe.viewport,Pe===0&&(e.setRenderTargetTextures(p,Qe.colorTexture,f.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(p))}let ze=D[Pe];ze===void 0&&(ze=new Un,ze.layers.enable(Pe),ze.viewport=new Ft,D[Pe]=ze),ze.matrix.fromArray(Fe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Fe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(P.matrix.copy(ze.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ae===!0&&P.cameras.push(ze)}}for(let Se=0;Se<M.length;Se++){const Ae=_[Se],Pe=M[Se];Ae!==null&&Pe!==void 0&&Pe.update(Ae,ne,u||o)}ie&&ie(Q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const ve=new Kf;ve.setAnimationLoop(ge),this.setAnimationLoop=function(Q){ie=Q},this.dispose=function(){}}}function CS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,_,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),h(m,p)):p.isMeshPhongMaterial?(a(m,p),d(m,p)):p.isMeshStandardMaterial?(a(m,p),f(m,p),p.isMeshPhysicalMaterial&&v(m,p,E)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),y(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&s(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function s(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function v(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PS(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){const E=_.program;i.uniformBlockBinding(M,E)}function u(M,_){let E=r[M.id];E===void 0&&(g(M),E=d(M),r[M.id]=E,M.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(M,C);const D=e.render.frame;a[M.id]!==D&&(f(M),a[M.id]=D)}function d(M){const _=h();M.__bindingPointIndex=_;const E=n.createBuffer(),C=M.__size,D=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function h(){for(let M=0;M<s;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=r[M.id],E=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let D=0,P=E.length;D<P;D++){const k=E[D];if(v(k,D,C)===!0){const b=k.__offset,T=Array.isArray(k.value)?k.value:[k.value];let oe=0;for(let H=0;H<T.length;H++){const F=T[H],z=y(F);typeof F=="number"?(k.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,b+oe,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=F.elements[0],k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=F.elements[0],k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=F.elements[0]):(F.toArray(k.__data,oe),oe+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,k.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(M,_,E){const C=M.value;if(E[_]===void 0){if(typeof C=="number")E[_]=C;else{const D=Array.isArray(C)?C:[C],P=[];for(let k=0;k<D.length;k++)P.push(D[k].clone());E[_]=P}return!0}else if(typeof C=="number"){if(E[_]!==C)return E[_]=C,!0}else{const D=Array.isArray(E[_])?E[_]:[E[_]],P=Array.isArray(C)?C:[C];for(let k=0;k<D.length;k++){const b=D[k];if(b.equals(P[k])===!1)return b.copy(P[k]),!0}}return!1}function g(M){const _=M.uniforms;let E=0;const C=16;let D=0;for(let P=0,k=_.length;P<k;P++){const b=_[P],T={boundary:0,storage:0},oe=Array.isArray(b.value)?b.value:[b.value];for(let H=0,F=oe.length;H<F;H++){const z=oe[H],Z=y(z);T.boundary+=Z.boundary,T.storage+=Z.storage}if(b.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=E,P>0){D=E%C;const H=C-D;D!==0&&H-T.boundary<0&&(E+=C-D,b.__offset=E)}E+=T.storage}return D=E%C,D>0&&(E+=C-D),M.__size=E,M.__cache={},this}function y(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},a={}}return{bind:c,update:u,dispose:p}}class nh{constructor(e={}){const{canvas:t=w_(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const v=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;const _=this;let E=!1,C=0,D=0,P=null,k=-1,b=null;const T=new Ft,oe=new Ft;let H=null;const F=new Et(0);let z=0,Z=t.width,V=t.height,B=1,ie=null,ge=null;const ve=new Ft(0,0,Z,V),Q=new Ft(0,0,Z,V);let ne=!1;const Se=new nc;let Ae=!1,Pe=!1,Fe=null;const je=new Wt,ze=new $e,Qe=new K,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return P===null?B:1}let J=i;function lt(R,G){for(let te=0;te<R.length;te++){const ee=R[te],fe=t.getContext(ee,G);if(fe!==null)return fe}return null}try{const R={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$l}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),J===null){const G=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&G.shift(),J=lt(G,R),J===null)throw lt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let We,N,$,Ie,he,Me,se,Oe,Le,A,S,I,Y,X,_e,Ue,ye,q,L,ae,me,xe,Ee,Ye;function nt(){We=new G0(J),N=new N0(J,We,e),We.init(N),xe=new wS(J,We,N),$=new SS(J,We,N),Ie=new W0(J),he=new lS,Me=new MS(J,We,$,he,N,xe,Ie),se=new F0(_),Oe=new z0(_),Le=new ex(J,N),Ee=new I0(J,We,Le,N),A=new H0(J,Le,Ie,Ee),S=new q0(J,A,Le,Ie),L=new Y0(J,N,Me),Ue=new O0(he),I=new oS(_,se,Oe,We,N,Ee,Ue),Y=new CS(_,he),X=new uS,_e=new vS(We,N),q=new D0(_,se,Oe,$,S,f,c),ye=new yS(_,S,N),Ye=new PS(J,Ie,N,$),ae=new U0(J,We,Ie,N),me=new V0(J,We,Ie,N),Ie.programs=I.programs,_.capabilities=N,_.extensions=We,_.properties=he,_.renderLists=X,_.shadowMap=ye,_.state=$,_.info=Ie}nt();const O=new RS(_,J);this.xr=O,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const R=We.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=We.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(Z,V,!1))},this.getSize=function(R){return R.set(Z,V)},this.setSize=function(R,G,te=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,V=G,t.width=Math.floor(R*B),t.height=Math.floor(G*B),te===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(Z*B,V*B).floor()},this.setDrawingBufferSize=function(R,G,te){Z=R,V=G,B=te,t.width=Math.floor(R*te),t.height=Math.floor(G*te),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(ve)},this.setViewport=function(R,G,te,ee){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,G,te,ee),$.viewport(T.copy(ve).multiplyScalar(B).floor())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,G,te,ee){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,G,te,ee),$.scissor(oe.copy(Q).multiplyScalar(B).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){$.setScissorTest(ne=R)},this.setOpaqueSort=function(R){ie=R},this.setTransparentSort=function(R){ge=R},this.getClearColor=function(R){return R.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(R=!0,G=!0,te=!0){let ee=0;if(R){let fe=!1;if(P!==null){const Ge=P.texture.format;fe=Ge===Df||Ge===Lf||Ge===Pf}if(fe){const Ge=P.texture.type,Ke=Ge===Qi||Ge===Ki||Ge===ec||Ge===br||Ge===Rf||Ge===Cf,it=q.getClearColor(),et=q.getClearAlpha(),at=it.r,tt=it.g,ot=it.b;Ke?(v[0]=at,v[1]=tt,v[2]=ot,v[3]=et,J.clearBufferuiv(J.COLOR,0,v)):(g[0]=at,g[1]=tt,g[2]=ot,g[3]=et,J.clearBufferiv(J.COLOR,0,g))}else ee|=J.COLOR_BUFFER_BIT}G&&(ee|=J.DEPTH_BUFFER_BIT),te&&(ee|=J.STENCIL_BUFFER_BIT),J.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),X.dispose(),_e.dispose(),he.dispose(),se.dispose(),Oe.dispose(),S.dispose(),Ee.dispose(),Ye.dispose(),I.dispose(),O.dispose(),O.removeEventListener("sessionstart",ct),O.removeEventListener("sessionend",Rt),Fe&&(Fe.dispose(),Fe=null),_t.stop()};function Ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Ie.autoReset,G=ye.enabled,te=ye.autoUpdate,ee=ye.needsUpdate,fe=ye.type;nt(),Ie.autoReset=R,ye.enabled=G,ye.autoUpdate=te,ye.needsUpdate=ee,ye.type=fe}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){const G=R.target;G.removeEventListener("dispose",be),De(G)}function De(R){qe(R),he.remove(R)}function qe(R){const G=he.get(R).programs;G!==void 0&&(G.forEach(function(te){I.releaseProgram(te)}),R.isShaderMaterial&&I.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,te,ee,fe,Ge){G===null&&(G=dt);const Ke=fe.isMesh&&fe.matrixWorld.determinant()<0,it=Sa(R,G,te,ee,fe);$.setMaterial(ee,Ke);let et=te.index,at=1;if(ee.wireframe===!0){if(et=A.getWireframeAttribute(te),et===void 0)return;at=2}const tt=te.drawRange,ot=te.attributes.position;let wt=tt.start*at,yt=(tt.start+tt.count)*at;Ge!==null&&(wt=Math.max(wt,Ge.start*at),yt=Math.min(yt,(Ge.start+Ge.count)*at)),et!==null?(wt=Math.max(wt,0),yt=Math.min(yt,et.count)):ot!=null&&(wt=Math.max(wt,0),yt=Math.min(yt,ot.count));const rn=yt-wt;if(rn<0||rn===1/0)return;Ee.setup(fe,ee,it,te,et);let qn,zt=ae;if(et!==null&&(qn=Le.get(et),zt=me,zt.setIndex(qn)),fe.isMesh)ee.wireframe===!0?($.setLineWidth(ee.wireframeLinewidth*Xe()),zt.setMode(J.LINES)):zt.setMode(J.TRIANGLES);else if(fe.isLine){let pt=ee.linewidth;pt===void 0&&(pt=1),$.setLineWidth(pt*Xe()),fe.isLineSegments?zt.setMode(J.LINES):fe.isLineLoop?zt.setMode(J.LINE_LOOP):zt.setMode(J.LINE_STRIP)}else fe.isPoints?zt.setMode(J.POINTS):fe.isSprite&&zt.setMode(J.TRIANGLES);if(fe.isInstancedMesh)zt.renderInstances(wt,rn,fe.count);else if(te.isInstancedBufferGeometry){const pt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ar=Math.min(te.instanceCount,pt);zt.renderInstances(wt,rn,Ar)}else zt.render(wt,rn)},this.compile=function(R,G){function te(ee,fe,Ge){ee.transparent===!0&&ee.side===Xn&&ee.forceSinglePass===!1?(ee.side=Cn,ee.needsUpdate=!0,xn(ee,fe,Ge),ee.side=xi,ee.needsUpdate=!0,xn(ee,fe,Ge),ee.side=Xn):xn(ee,fe,Ge)}m=_e.get(R),m.init(),M.push(m),R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),m.setupLights(_._useLegacyLights),R.traverse(function(ee){const fe=ee.material;if(fe)if(Array.isArray(fe))for(let Ge=0;Ge<fe.length;Ge++){const Ke=fe[Ge];te(Ke,R,ee)}else te(fe,R,ee)}),M.pop(),m=null};let rt=null;function Mt(R){rt&&rt(R)}function ct(){_t.stop()}function Rt(){_t.start()}const _t=new Kf;_t.setAnimationLoop(Mt),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(R){rt=R,O.setAnimationLoop(R),R===null?_t.stop():_t.start()},O.addEventListener("sessionstart",ct),O.addEventListener("sessionend",Rt),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(G),G=O.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,G,P),m=_e.get(R,M.length),m.init(),M.push(m),je.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Se.setFromProjectionMatrix(je),Pe=this.localClippingEnabled,Ae=Ue.init(this.clippingPlanes,Pe),y=X.get(R,p.length),y.init(),p.push(y),bt(R,G,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(ie,ge),this.info.render.frame++,Ae===!0&&Ue.beginShadows();const te=m.state.shadowsArray;if(ye.render(te,R,G),Ae===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(y,R),m.setupLights(_._useLegacyLights),G.isArrayCamera){const ee=G.cameras;for(let fe=0,Ge=ee.length;fe<Ge;fe++){const Ke=ee[fe];Ut(y,R,Ke,Ke.viewport)}}else Ut(y,R,G);P!==null&&(Me.updateMultisampleRenderTarget(P),Me.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(_,R,G),Ee.resetDefaultState(),k=-1,b=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function bt(R,G,te,ee){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Se.intersectsSprite(R)){ee&&Qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(je);const Ke=S.update(R),it=R.material;it.visible&&y.push(R,Ke,it,te,Qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Se.intersectsObject(R))){const Ke=S.update(R),it=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qe.copy(R.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Qe.copy(Ke.boundingSphere.center)),Qe.applyMatrix4(R.matrixWorld).applyMatrix4(je)),Array.isArray(it)){const et=Ke.groups;for(let at=0,tt=et.length;at<tt;at++){const ot=et[at],wt=it[ot.materialIndex];wt&&wt.visible&&y.push(R,Ke,wt,te,Qe.z,ot)}}else it.visible&&y.push(R,Ke,it,te,Qe.z,null)}}const Ge=R.children;for(let Ke=0,it=Ge.length;Ke<it;Ke++)bt(Ge[Ke],G,te,ee)}function Ut(R,G,te,ee){const fe=R.opaque,Ge=R.transmissive,Ke=R.transparent;m.setupLightsView(te),Ae===!0&&Ue.setGlobalState(_.clippingPlanes,te),Ge.length>0&&dn(fe,Ge,G,te),ee&&$.viewport(T.copy(ee)),fe.length>0&&wn(fe,G,te),Ge.length>0&&wn(Ge,G,te),Ke.length>0&&wn(Ke,G,te),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function dn(R,G,te,ee){const fe=N.isWebGL2;Fe===null&&(Fe=new Bi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?ha:Qi,minFilter:ts,samples:fe?4:0})),_.getDrawingBufferSize(ze),fe?Fe.setSize(ze.x,ze.y):Fe.setSize(Ll(ze.x),Ll(ze.y));const Ge=_.getRenderTarget();_.setRenderTarget(Fe),_.getClearColor(F),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear();const Ke=_.toneMapping;_.toneMapping=Ji,wn(R,te,ee),Me.updateMultisampleRenderTarget(Fe),Me.updateRenderTargetMipmap(Fe);let it=!1;for(let et=0,at=G.length;et<at;et++){const tt=G[et],ot=tt.object,wt=tt.geometry,yt=tt.material,rn=tt.group;if(yt.side===Xn&&ot.layers.test(ee.layers)){const qn=yt.side;yt.side=Cn,yt.needsUpdate=!0,fn(ot,te,ee,wt,yt,rn),yt.side=qn,yt.needsUpdate=!0,it=!0}}it===!0&&(Me.updateMultisampleRenderTarget(Fe),Me.updateRenderTargetMipmap(Fe)),_.setRenderTarget(Ge),_.setClearColor(F,z),_.toneMapping=Ke}function wn(R,G,te){const ee=G.isScene===!0?G.overrideMaterial:null;for(let fe=0,Ge=R.length;fe<Ge;fe++){const Ke=R[fe],it=Ke.object,et=Ke.geometry,at=ee===null?Ke.material:ee,tt=Ke.group;it.layers.test(te.layers)&&fn(it,G,te,et,at,tt)}}function fn(R,G,te,ee,fe,Ge){R.onBeforeRender(_,G,te,ee,fe,Ge),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),fe.onBeforeRender(_,G,te,ee,R,Ge),fe.transparent===!0&&fe.side===Xn&&fe.forceSinglePass===!1?(fe.side=Cn,fe.needsUpdate=!0,_.renderBufferDirect(te,G,ee,fe,R,Ge),fe.side=xi,fe.needsUpdate=!0,_.renderBufferDirect(te,G,ee,fe,R,Ge),fe.side=Xn):_.renderBufferDirect(te,G,ee,fe,R,Ge),R.onAfterRender(_,G,te,ee,fe,Ge)}function xn(R,G,te){G.isScene!==!0&&(G=dt);const ee=he.get(R),fe=m.state.lights,Ge=m.state.shadowsArray,Ke=fe.state.version,it=I.getParameters(R,fe.state,Ge,G,te),et=I.getProgramCacheKey(it);let at=ee.programs;ee.environment=R.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(R.isMeshStandardMaterial?Oe:se).get(R.envMap||ee.environment),at===void 0&&(R.addEventListener("dispose",be),at=new Map,ee.programs=at);let tt=at.get(et);if(tt!==void 0){if(ee.currentProgram===tt&&ee.lightsStateVersion===Ke)return oi(R,it),tt}else it.uniforms=I.getUniforms(R),R.onBuild(te,it,_),R.onBeforeCompile(it,_),tt=I.acquireProgram(it,et),at.set(et,tt),ee.uniforms=it.uniforms;const ot=ee.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ot.clippingPlanes=Ue.uniform),oi(R,it),ee.needsLights=Be(R),ee.lightsStateVersion=Ke,ee.needsLights&&(ot.ambientLightColor.value=fe.state.ambient,ot.lightProbe.value=fe.state.probe,ot.directionalLights.value=fe.state.directional,ot.directionalLightShadows.value=fe.state.directionalShadow,ot.spotLights.value=fe.state.spot,ot.spotLightShadows.value=fe.state.spotShadow,ot.rectAreaLights.value=fe.state.rectArea,ot.ltc_1.value=fe.state.rectAreaLTC1,ot.ltc_2.value=fe.state.rectAreaLTC2,ot.pointLights.value=fe.state.point,ot.pointLightShadows.value=fe.state.pointShadow,ot.hemisphereLights.value=fe.state.hemi,ot.directionalShadowMap.value=fe.state.directionalShadowMap,ot.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,ot.spotShadowMap.value=fe.state.spotShadowMap,ot.spotLightMatrix.value=fe.state.spotLightMatrix,ot.spotLightMap.value=fe.state.spotLightMap,ot.pointShadowMap.value=fe.state.pointShadowMap,ot.pointShadowMatrix.value=fe.state.pointShadowMatrix);const wt=tt.getUniforms(),yt=Hs.seqWithValue(wt.seq,ot);return ee.currentProgram=tt,ee.uniformsList=yt,tt}function oi(R,G){const te=he.get(R);te.outputColorSpace=G.outputColorSpace,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function Sa(R,G,te,ee,fe){G.isScene!==!0&&(G=dt),Me.resetTextureUnits();const Ge=G.fog,Ke=ee.isMeshStandardMaterial?G.environment:null,it=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:bi,et=(ee.isMeshStandardMaterial?Oe:se).get(ee.envMap||Ke),at=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,tt=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ot=!!te.morphAttributes.position,wt=!!te.morphAttributes.normal,yt=!!te.morphAttributes.color;let rn=Ji;ee.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(rn=_.toneMapping);const qn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,zt=qn!==void 0?qn.length:0,pt=he.get(ee),Ar=m.state.lights;if(Ae===!0&&(Pe===!0||R!==b)){const on=R===b&&ee.id===k;Ue.setState(ee,R,on)}let Dt=!1;ee.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Ar.state.version||pt.outputColorSpace!==it||fe.isInstancedMesh&&pt.instancing===!1||!fe.isInstancedMesh&&pt.instancing===!0||fe.isSkinnedMesh&&pt.skinning===!1||!fe.isSkinnedMesh&&pt.skinning===!0||fe.isInstancedMesh&&pt.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&pt.instancingColor===!1&&fe.instanceColor!==null||pt.envMap!==et||ee.fog===!0&&pt.fog!==Ge||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==Ue.numPlanes||pt.numIntersection!==Ue.numIntersection)||pt.vertexAlphas!==at||pt.vertexTangents!==tt||pt.morphTargets!==ot||pt.morphNormals!==wt||pt.morphColors!==yt||pt.toneMapping!==rn||N.isWebGL2===!0&&pt.morphTargetsCount!==zt)&&(Dt=!0):(Dt=!0,pt.__version=ee.version);let li=pt.currentProgram;Dt===!0&&(li=xn(ee,G,fe));let Ma=!1,ir=!1,Ea=!1;const sn=li.getUniforms(),Kn=pt.uniforms;if($.useProgram(li.program)&&(Ma=!0,ir=!0,Ea=!0),ee.id!==k&&(k=ee.id,ir=!0),Ma||b!==R){sn.setValue(J,"projectionMatrix",R.projectionMatrix),sn.setValue(J,"viewMatrix",R.matrixWorldInverse);const on=sn.map.cameraPosition;on!==void 0&&on.setValue(J,Qe.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&sn.setValue(J,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&sn.setValue(J,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,ir=!0,Ea=!0)}if(fe.isSkinnedMesh){sn.setOptional(J,fe,"bindMatrix"),sn.setOptional(J,fe,"bindMatrixInverse");const on=fe.skeleton;on&&(N.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),sn.setValue(J,"boneTexture",on.boneTexture,Me),sn.setValue(J,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const rr=te.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0&&N.isWebGL2===!0)&&L.update(fe,te,li),(ir||pt.receiveShadow!==fe.receiveShadow)&&(pt.receiveShadow=fe.receiveShadow,sn.setValue(J,"receiveShadow",fe.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Kn.envMap.value=et,Kn.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),ir&&(sn.setValue(J,"toneMappingExposure",_.toneMappingExposure),pt.needsLights&&Te(Kn,Ea),Ge&&ee.fog===!0&&Y.refreshFogUniforms(Kn,Ge),Y.refreshMaterialUniforms(Kn,ee,B,V,Fe),Hs.upload(J,pt.uniformsList,Kn,Me)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Hs.upload(J,pt.uniformsList,Kn,Me),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&sn.setValue(J,"center",fe.center),sn.setValue(J,"modelViewMatrix",fe.modelViewMatrix),sn.setValue(J,"normalMatrix",fe.normalMatrix),sn.setValue(J,"modelMatrix",fe.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const on=ee.uniformsGroups;for(let wa=0,_o=on.length;wa<_o;wa++)if(N.isWebGL2){const Ta=on[wa];Ye.update(Ta,li),Ye.bind(Ta,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Te(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Be(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,G,te){he.get(R.texture).__webglTexture=G,he.get(R.depthTexture).__webglTexture=te;const ee=he.get(R);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=te===void 0,ee.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const te=he.get(R);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,te=0){P=R,C=G,D=te;let ee=!0,fe=null,Ge=!1,Ke=!1;if(R){const et=he.get(R);et.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(J.FRAMEBUFFER,null),ee=!1):et.__webglFramebuffer===void 0?Me.setupRenderTarget(R):et.__hasExternalTextures&&Me.rebindTextures(R,he.get(R.texture).__webglTexture,he.get(R.depthTexture).__webglTexture);const at=R.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ke=!0);const tt=he.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[G])?fe=tt[G][te]:fe=tt[G],Ge=!0):N.isWebGL2&&R.samples>0&&Me.useMultisampledRTT(R)===!1?fe=he.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?fe=tt[te]:fe=tt,T.copy(R.viewport),oe.copy(R.scissor),H=R.scissorTest}else T.copy(ve).multiplyScalar(B).floor(),oe.copy(Q).multiplyScalar(B).floor(),H=ne;if($.bindFramebuffer(J.FRAMEBUFFER,fe)&&N.drawBuffers&&ee&&$.drawBuffers(R,fe),$.viewport(T),$.scissor(oe),$.setScissorTest(H),Ge){const et=he.get(R.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+G,et.__webglTexture,te)}else if(Ke){const et=he.get(R.texture),at=G||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,et.__webglTexture,te||0,at)}k=-1},this.readRenderTargetPixels=function(R,G,te,ee,fe,Ge,Ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=he.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){$.bindFramebuffer(J.FRAMEBUFFER,it);try{const et=R.texture,at=et.format,tt=et.type;if(at!==ei&&xe.convert(at)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=tt===ha&&(We.has("EXT_color_buffer_half_float")||N.isWebGL2&&We.has("EXT_color_buffer_float"));if(tt!==Qi&&xe.convert(tt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Ii&&(N.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-ee&&te>=0&&te<=R.height-fe&&J.readPixels(G,te,ee,fe,xe.convert(at),xe.convert(tt),Ge)}finally{const et=P!==null?he.get(P).__webglFramebuffer:null;$.bindFramebuffer(J.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(R,G,te=0){const ee=Math.pow(2,-te),fe=Math.floor(G.image.width*ee),Ge=Math.floor(G.image.height*ee);Me.setTexture2D(G,0),J.copyTexSubImage2D(J.TEXTURE_2D,te,0,0,R.x,R.y,fe,Ge),$.unbindTexture()},this.copyTextureToTexture=function(R,G,te,ee=0){const fe=G.image.width,Ge=G.image.height,Ke=xe.convert(te.format),it=xe.convert(te.type);Me.setTexture2D(te,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,te.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,te.unpackAlignment),G.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,ee,R.x,R.y,fe,Ge,Ke,it,G.image.data):G.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,ee,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Ke,G.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,ee,R.x,R.y,Ke,it,G.image),ee===0&&te.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(R,G,te,ee,fe=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ge=R.max.x-R.min.x+1,Ke=R.max.y-R.min.y+1,it=R.max.z-R.min.z+1,et=xe.convert(ee.format),at=xe.convert(ee.type);let tt;if(ee.isData3DTexture)Me.setTexture3D(ee,0),tt=J.TEXTURE_3D;else if(ee.isDataArrayTexture)Me.setTexture2DArray(ee,0),tt=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ee.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ee.unpackAlignment);const ot=J.getParameter(J.UNPACK_ROW_LENGTH),wt=J.getParameter(J.UNPACK_IMAGE_HEIGHT),yt=J.getParameter(J.UNPACK_SKIP_PIXELS),rn=J.getParameter(J.UNPACK_SKIP_ROWS),qn=J.getParameter(J.UNPACK_SKIP_IMAGES),zt=te.isCompressedTexture?te.mipmaps[0]:te.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,zt.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,zt.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,R.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,R.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,R.min.z),te.isDataTexture||te.isData3DTexture?J.texSubImage3D(tt,fe,G.x,G.y,G.z,Ge,Ke,it,et,at,zt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(tt,fe,G.x,G.y,G.z,Ge,Ke,it,et,zt.data)):J.texSubImage3D(tt,fe,G.x,G.y,G.z,Ge,Ke,it,et,at,zt),J.pixelStorei(J.UNPACK_ROW_LENGTH,ot),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,wt),J.pixelStorei(J.UNPACK_SKIP_PIXELS,yt),J.pixelStorei(J.UNPACK_SKIP_ROWS,rn),J.pixelStorei(J.UNPACK_SKIP_IMAGES,qn),fe===0&&ee.generateMipmaps&&J.generateMipmap(tt),$.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Me.setTextureCube(R,0):R.isData3DTexture?Me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Me.setTexture2DArray(R,0):Me.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){C=0,D=0,P=null,$.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Sr:If}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?Ot:bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class LS extends nh{}LS.prototype.isWebGL1Renderer=!0;class DS extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class IS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new K;class io{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),a=Ct(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new io(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ih extends ba{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yr;const Da=new K,qr=new K,Kr=new K,Zr=new $e,Ia=new $e,rh=new Wt,Ds=new K,Ua=new K,Is=new K,id=new $e,al=new $e,rd=new $e;class US extends vn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Yr===void 0){Yr=new Hi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new IS(t,5);Yr.setIndex([0,1,2,0,2,3]),Yr.setAttribute("position",new io(i,3,0,!1)),Yr.setAttribute("uv",new io(i,2,3,!1))}this.geometry=Yr,this.material=e!==void 0?e:new ih,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),rh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Kr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;Us(Ds.set(-.5,-.5,0),Kr,o,qr,r,a),Us(Ua.set(.5,-.5,0),Kr,o,qr,r,a),Us(Is.set(.5,.5,0),Kr,o,qr,r,a),id.set(0,0),al.set(1,0),rd.set(1,1);let s=e.ray.intersectTriangle(Ds,Ua,Is,!1,Da);if(s===null&&(Us(Ua.set(-.5,.5,0),Kr,o,qr,r,a),al.set(0,1),s=e.ray.intersectTriangle(Ds,Is,Ua,!1,Da),s===null))return;const c=e.ray.origin.distanceTo(Da);c<e.near||c>e.far||t.push({distance:c,point:Da.clone(),uv:jn.getInterpolation(Da,Ds,Ua,Is,id,al,rd,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Us(n,e,t,i,r,a){Zr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ia.x=a*Zr.x-r*Zr.y,Ia.y=r*Zr.x+a*Zr.y):Ia.copy(Zr),n.copy(e),n.x+=Ia.x,n.y+=Ia.y,n.applyMatrix4(rh)}class Vs extends mn{constructor(e,t,i,r,a,o,s,c,u){super(e,t,i,r,a,o,s,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ns extends ba{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ah extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sl=new Wt,ad=new K,sd=new K;class NS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const od=new Wt,Na=new K,ol=new K;class OS extends NS{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Na.setFromMatrixPosition(e.matrixWorld),i.position.copy(Na),ol.copy(i.position),ol.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ol),i.updateMatrixWorld(),r.makeTranslation(-Na.x,-Na.y,-Na.z),od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od)}}class FS extends ah{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new OS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kS extends ah{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ld(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ld();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ld(){return(typeof performance>"u"?Date:performance).now()}class cd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);function ac(n,e,t,i,r,a,o,s){const c=(P,k,b,T)=>[new $e(P/o,1-T/s),new $e(b/o,1-T/s),new $e(b/o,1-k/s),new $e(P/o,1-k/s)],u=c(e+a,t,e+i+a,t+a),d=c(e+i+a,t,e+i*2+a,t+a),h=c(e,t+a,e+a,t+a+r),f=c(e+a,t+a,e+i+a,t+a+r),v=c(e+i+a,t+a,e+i+a*2,t+r+a),g=c(e+i+a*2,t+a,e+i*2+a*2,t+r+a),y=n.attributes.uv,m=[v[3],v[2],v[0],v[1]],p=[h[3],h[2],h[0],h[1]],M=[u[3],u[2],u[0],u[1]],_=[d[0],d[1],d[3],d[2]],E=[f[3],f[2],f[0],f[1]],C=[g[3],g[2],g[0],g[1]],D=[];for(const P of[m,p,M,_,E,C])for(const k of P)D.push(k.x,k.y);y.set(new Float32Array(D)),y.needsUpdate=!0}function Bn(n,e,t,i,r,a){ac(n,e,t,i,r,a,64,64)}function Il(n,e,t,i,r,a){ac(n,e,t,i,r,a,64,32)}class cr extends ln{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class BS extends ln{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new ns({side:xi}),this.layer2Material=new ns({side:Xn,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new Ht(8,8,8);Bn(e,0,0,8,8,8);const t=new Lt(e,this.layer1Material),i=new Ht(9,9,9);Bn(i,32,0,8,8,8);const r=new Lt(i,this.layer2Material);this.head=new cr(t,r),this.head.name="head",this.head.add(t,r),t.position.y=4,r.position.y=4,this.add(this.head);const a=new Ht(8,12,4);Bn(a,16,16,8,12,4);const o=new Lt(a,this.layer1Material),s=new Ht(8.5,12.5,4.5);Bn(s,16,32,8,12,4);const c=new Lt(s,this.layer2Material);this.body=new cr(o,c),this.body.name="body",this.body.add(o,c),this.body.position.y=-6,this.add(this.body);const u=new Ht,d=new Lt(u,this.layer1MaterialBiased);this.modelListeners.push(()=>{d.scale.x=this.slim?3:4,d.scale.y=12,d.scale.z=4,Bn(u,40,16,this.slim?3:4,12,4)});const h=new Ht,f=new Lt(h,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Bn(h,40,32,this.slim?3:4,12,4)});const v=new ln;v.add(d,f),this.modelListeners.push(()=>{v.position.x=this.slim?-.5:-1}),v.position.y=-4,this.rightArm=new cr(d,f),this.rightArm.name="rightArm",this.rightArm.add(v),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const g=new Ht,y=new Lt(g,this.layer1MaterialBiased);this.modelListeners.push(()=>{y.scale.x=this.slim?3:4,y.scale.y=12,y.scale.z=4,Bn(g,32,48,this.slim?3:4,12,4)});const m=new Ht,p=new Lt(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{p.scale.x=this.slim?3.5:4.5,p.scale.y=12.5,p.scale.z=4.5,Bn(m,48,48,this.slim?3:4,12,4)});const M=new ln;M.add(y,p),this.modelListeners.push(()=>{M.position.x=this.slim?.5:1}),M.position.y=-4,this.leftArm=new cr(y,p),this.leftArm.name="leftArm",this.leftArm.add(M),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const _=new Ht(4,12,4);Bn(_,0,16,4,12,4);const E=new Lt(_,this.layer1MaterialBiased),C=new Ht(4.5,12.5,4.5);Bn(C,0,32,4,12,4);const D=new Lt(C,this.layer2MaterialBiased),P=new ln;P.add(E,D),P.position.y=-6,this.rightLeg=new cr(E,D),this.rightLeg.name="rightLeg",this.rightLeg.add(P),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const k=new Ht(4,12,4);Bn(k,16,48,4,12,4);const b=new Lt(k,this.layer1MaterialBiased),T=new Ht(4.5,12.5,4.5);Bn(T,0,48,4,12,4);const oe=new Lt(T,this.layer2MaterialBiased),H=new ln;H.add(b,oe),H.position.y=-6,this.leftLeg=new cr(b,oe),this.leftLeg.name="leftLeg",this.leftLeg.add(H),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof cr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class zS extends ln{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ns({side:Xn,transparent:!0,alphaTest:1e-5});const e=new Ht(10,16,1);Il(e,0,0,10,16,1),this.cape=new Lt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class GS extends ln{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ns({side:Xn,transparent:!0,alphaTest:1e-5});const e=new Ht(12,22,4);Il(e,22,0,10,20,2);const t=new Lt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new ln,this.leftWing.add(t),this.add(this.leftWing);const i=new Ht(12,22,4);Il(i,22,0,10,20,2);const r=new Lt(i,this.material);r.scale.x=-1,r.position.x=5,r.position.y=-10,r.position.z=-1,this.rightWing=new ln,this.rightWing.add(r),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class HS extends ln{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new ns({side:xi});const e=new Ht(8,8,4/3);ac(e,0,0,6,6,1,14,7),this.rightEar=new Lt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new Lt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const ud=10.8*Math.PI/180;class VS extends ln{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new BS,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new zS,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=ud,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new GS,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new HS,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=ud,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function Ns(n){return n instanceof HTMLImageElement||n instanceof HTMLVideoElement||n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas}function Ul(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const c=(o+s*i)*4;if(a.data[c+3]!==255)return!0}return!1}function vo(n){return n/64}function dd(n,e,t){if(t){if(Ul(n,0,0,e,e))return}else if(Ul(n,0,0,e,e/2))return;const i=vo(e),r=(a,o,s,c)=>n.clearRect(a*i,o*i,s*i,c*i);r(40,0,8,8),r(48,0,8,8),r(32,8,8,8),r(40,8,8,8),r(48,8,8,8),r(56,8,8,8),t&&(r(4,32,4,4),r(8,32,4,4),r(0,36,4,12),r(4,36,4,12),r(8,36,4,12),r(12,36,4,12),r(20,32,8,4),r(28,32,8,4),r(16,36,4,12),r(20,36,8,12),r(28,36,4,12),r(32,36,8,12),r(44,32,4,4),r(48,32,4,4),r(40,36,4,12),r(44,36,4,12),r(48,36,4,12),r(52,36,12,12),r(4,48,4,4),r(8,48,4,4),r(0,52,4,12),r(4,52,4,12),r(8,52,4,12),r(12,52,4,12),r(52,48,4,4),r(56,48,4,4),r(48,52,4,12),r(52,52,4,12),r(56,52,4,12),r(60,52,4,12))}function WS(n,e){n.save(),n.scale(-1,1);const t=vo(e),i=(r,a,o,s,c,u)=>n.drawImage(n.canvas,r*t,a*t,o*t,s*t,-c*t,u*t,-o*t,s*t);i(4,16,4,4,20,48),i(8,16,4,4,24,48),i(0,20,4,12,24,52),i(4,20,4,12,20,52),i(8,20,4,12,16,52),i(12,20,4,12,28,52),i(44,16,4,4,36,48),i(48,16,4,4,40,48),i(40,20,4,12,40,52),i(44,20,4,12,36,52),i(48,20,4,12,32,52),i(52,20,4,12,44,52),n.restore()}function jS(n,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const i=n.getContext("2d",{willReadFrequently:!0});if(t){const r=e.width;n.width=r,n.height=r,i.clearRect(0,0,r,r),i.drawImage(e,0,0,r,r/2),WS(i,r),dd(i,n.width,!1)}else n.width=e.width,n.height=e.height,i.clearRect(0,0,e.width,e.height),i.drawImage(e,0,0,n.width,n.height),dd(i,n.width,!0)}function XS(n){if(n.width===2*n.height)return n.width/64;if(n.width*17===n.height*22)return n.width/22;if(n.width*11===n.height*23)return n.width/46;throw new Error(`Bad cape size: ${n.width}x${n.height}`)}function YS(n,e){const t=XS(e);n.width=64*t,n.height=32*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function qS(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const c=(o+s*i)*4;if(!(a.data[c+0]===0&&a.data[c+1]===0&&a.data[c+2]===0&&a.data[c+3]===255))return!1}return!0}function KS(n,e,t,i,r){const a=n.getImageData(e,t,i,r);for(let o=0;o<i;o++)for(let s=0;s<r;s++){const c=(o+s*i)*4;if(!(a.data[c+0]===255&&a.data[c+1]===255&&a.data[c+2]===255&&a.data[c+3]===255))return!1}return!0}function ZS(n){const e=vo(n.width),t=n.getContext("2d",{willReadFrequently:!0}),i=(s,c,u,d)=>Ul(t,s*e,c*e,u*e,d*e),r=(s,c,u,d)=>qS(t,s*e,c*e,u*e,d*e),a=(s,c,u,d)=>KS(t,s*e,c*e,u*e,d*e);return i(50,16,2,4)||i(54,20,2,12)||i(42,48,2,4)||i(46,52,2,12)||r(50,16,2,4)&&r(54,20,2,12)&&r(42,48,2,4)&&r(46,52,2,12)||a(50,16,2,4)&&a(54,20,2,12)&&a(42,48,2,4)&&a(46,52,2,12)?"slim":"default"}function JS(n){if(n.width===n.height*2&&n.height%7===0)return n.height/7;throw new Error(`Bad ears size: ${n.width}x${n.height}`)}function QS(n,e){const t=JS(e);n.width=14*t,n.height=7*t;const i=n.getContext("2d",{willReadFrequently:!0});i.clearRect(0,0,n.width,n.height),i.drawImage(e,0,0,e.width,e.height)}function fd(n,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=vo(e.width),i=14*t,r=7*t;n.width=i,n.height=r;const a=n.getContext("2d",{willReadFrequently:!0});a.clearRect(0,0,i,r),a.drawImage(e,24*t,0,i,r,0,0,i,r)}async function Os(n){const e=document.createElement("img");return new Promise((t,i)=>{e.onload=()=>t(e),e.onerror=i,e.crossOrigin="anonymous",typeof n=="string"?e.src=n:(n.crossOrigin!==void 0&&(e.crossOrigin=n.crossOrigin),n.referrerPolicy!==void 0&&(e.referrerPolicy=n.referrerPolicy),e.src=n.src)})}const hd={type:"change"},ll={type:"start"},pd={type:"end"},Fs=new Bf,md=new qi,$S=Math.cos(70*E_.DEG2RAD);class eM extends Tr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:Pr.ROTATE,TWO:Pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",S),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(hd),i.update(),a=r.NONE},this.update=(function(){const L=new K,ae=new wr().setFromUnitVectors(e.up,new K(0,1,0)),me=ae.clone().invert(),xe=new K,Ee=new wr,Ye=new K,nt=2*Math.PI;return function(Ne=null){const le=i.object.position;L.copy(le).sub(i.target),L.applyQuaternion(ae),s.setFromVector3(L),i.autoRotate&&a===r.NONE&&oe(b(Ne)),i.enableDamping?(s.theta+=c.theta*i.dampingFactor,s.phi+=c.phi*i.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let Ce=i.minAzimuthAngle,be=i.maxAzimuthAngle;isFinite(Ce)&&isFinite(be)&&(Ce<-Math.PI?Ce+=nt:Ce>Math.PI&&(Ce-=nt),be<-Math.PI?be+=nt:be>Math.PI&&(be-=nt),Ce<=be?s.theta=Math.max(Ce,Math.min(be,s.theta)):s.theta=s.theta>(Ce+be)/2?Math.max(Ce,s.theta):Math.min(be,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.zoomToCursor&&D||i.object.isOrthographicCamera?s.radius=ge(s.radius):s.radius=ge(s.radius*u),L.setFromSpherical(s),L.applyQuaternion(me),le.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let De=!1;if(i.zoomToCursor&&D){let qe=null;if(i.object.isPerspectiveCamera){const rt=L.length();qe=ge(rt*u);const Mt=rt-qe;i.object.position.addScaledVector(E,Mt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const rt=new K(C.x,C.y,0);rt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),De=!0;const Mt=new K(C.x,C.y,0);Mt.unproject(i.object),i.object.position.sub(Mt).add(rt),i.object.updateMatrixWorld(),qe=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;qe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(qe).add(i.object.position):(Fs.origin.copy(i.object.position),Fs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Fs.direction))<$S?e.lookAt(i.target):(md.setFromNormalAndCoplanarPoint(i.object.up,i.target),Fs.intersectPlane(md,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),De=!0);return u=1,D=!1,De||xe.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||Ye.distanceToSquared(i.target)>0?(i.dispatchEvent(hd),xe.copy(i.object.position),Ee.copy(i.object.quaternion),Ye.copy(i.target),De=!1,!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",X),i.domElement.removeEventListener("pointerdown",he),i.domElement.removeEventListener("pointercancel",se),i.domElement.removeEventListener("wheel",A),i.domElement.removeEventListener("pointermove",Me),i.domElement.removeEventListener("pointerup",se),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",S),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new cd,c=new cd;let u=1;const d=new K,h=new $e,f=new $e,v=new $e,g=new $e,y=new $e,m=new $e,p=new $e,M=new $e,_=new $e,E=new K,C=new $e;let D=!1;const P=[],k={};function b(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function oe(L){c.theta-=L}function H(L){c.phi-=L}const F=(function(){const L=new K;return function(me,xe){L.setFromMatrixColumn(xe,0),L.multiplyScalar(-me),d.add(L)}})(),z=(function(){const L=new K;return function(me,xe){i.screenSpacePanning===!0?L.setFromMatrixColumn(xe,1):(L.setFromMatrixColumn(xe,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(me),d.add(L)}})(),Z=(function(){const L=new K;return function(me,xe){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const Ye=i.object.position;L.copy(Ye).sub(i.target);let nt=L.length();nt*=Math.tan(i.object.fov/2*Math.PI/180),F(2*me*nt/Ee.clientHeight,i.object.matrix),z(2*xe*nt/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(me*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),z(xe*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function V(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(L){if(!i.zoomToCursor)return;D=!0;const ae=i.domElement.getBoundingClientRect(),me=L.clientX-ae.left,xe=L.clientY-ae.top,Ee=ae.width,Ye=ae.height;C.x=me/Ee*2-1,C.y=-(xe/Ye)*2+1,E.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function ge(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function ve(L){h.set(L.clientX,L.clientY)}function Q(L){ie(L),p.set(L.clientX,L.clientY)}function ne(L){g.set(L.clientX,L.clientY)}function Se(L){f.set(L.clientX,L.clientY),v.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ae=i.domElement;oe(2*Math.PI*v.x/ae.clientHeight),H(2*Math.PI*v.y/ae.clientHeight),h.copy(f),i.update()}function Ae(L){M.set(L.clientX,L.clientY),_.subVectors(M,p),_.y>0?V(T()):_.y<0&&B(T()),p.copy(M),i.update()}function Pe(L){y.set(L.clientX,L.clientY),m.subVectors(y,g).multiplyScalar(i.panSpeed),Z(m.x,m.y),g.copy(y),i.update()}function Fe(L){ie(L),L.deltaY<0?B(T()):L.deltaY>0&&V(T()),i.update()}function je(L){let ae=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?H(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?H(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?oe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?oe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),ae=!0;break}ae&&(L.preventDefault(),i.update())}function ze(){if(P.length===1)h.set(P[0].pageX,P[0].pageY);else{const L=.5*(P[0].pageX+P[1].pageX),ae=.5*(P[0].pageY+P[1].pageY);h.set(L,ae)}}function Qe(){if(P.length===1)g.set(P[0].pageX,P[0].pageY);else{const L=.5*(P[0].pageX+P[1].pageX),ae=.5*(P[0].pageY+P[1].pageY);g.set(L,ae)}}function dt(){const L=P[0].pageX-P[1].pageX,ae=P[0].pageY-P[1].pageY,me=Math.sqrt(L*L+ae*ae);p.set(0,me)}function Xe(){i.enableZoom&&dt(),i.enablePan&&Qe()}function J(){i.enableZoom&&dt(),i.enableRotate&&ze()}function lt(L){if(P.length==1)f.set(L.pageX,L.pageY);else{const me=q(L),xe=.5*(L.pageX+me.x),Ee=.5*(L.pageY+me.y);f.set(xe,Ee)}v.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ae=i.domElement;oe(2*Math.PI*v.x/ae.clientHeight),H(2*Math.PI*v.y/ae.clientHeight),h.copy(f)}function We(L){if(P.length===1)y.set(L.pageX,L.pageY);else{const ae=q(L),me=.5*(L.pageX+ae.x),xe=.5*(L.pageY+ae.y);y.set(me,xe)}m.subVectors(y,g).multiplyScalar(i.panSpeed),Z(m.x,m.y),g.copy(y)}function N(L){const ae=q(L),me=L.pageX-ae.x,xe=L.pageY-ae.y,Ee=Math.sqrt(me*me+xe*xe);M.set(0,Ee),_.set(0,Math.pow(M.y/p.y,i.zoomSpeed)),V(_.y),p.copy(M)}function $(L){i.enableZoom&&N(L),i.enablePan&&We(L)}function Ie(L){i.enableZoom&&N(L),i.enableRotate&&lt(L)}function he(L){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Me),i.domElement.addEventListener("pointerup",se)),_e(L),L.pointerType==="touch"?I(L):Oe(L))}function Me(L){i.enabled!==!1&&(L.pointerType==="touch"?Y(L):Le(L))}function se(L){Ue(L),P.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Me),i.domElement.removeEventListener("pointerup",se)),i.dispatchEvent(pd),a=r.NONE}function Oe(L){let ae;switch(L.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Cr.DOLLY:if(i.enableZoom===!1)return;Q(L),a=r.DOLLY;break;case Cr.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;ne(L),a=r.PAN}else{if(i.enableRotate===!1)return;ve(L),a=r.ROTATE}break;case Cr.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;ve(L),a=r.ROTATE}else{if(i.enablePan===!1)return;ne(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(ll)}function Le(L){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;Se(L);break;case r.DOLLY:if(i.enableZoom===!1)return;Ae(L);break;case r.PAN:if(i.enablePan===!1)return;Pe(L);break}}function A(L){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(L.preventDefault(),i.dispatchEvent(ll),Fe(L),i.dispatchEvent(pd))}function S(L){i.enabled===!1||i.enablePan===!1||je(L)}function I(L){switch(ye(L),P.length){case 1:switch(i.touches.ONE){case Pr.ROTATE:if(i.enableRotate===!1)return;ze(),a=r.TOUCH_ROTATE;break;case Pr.PAN:if(i.enablePan===!1)return;Qe(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case Pr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Xe(),a=r.TOUCH_DOLLY_PAN;break;case Pr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;J(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(ll)}function Y(L){switch(ye(L),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;lt(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;We(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ie(L),i.update();break;default:a=r.NONE}}function X(L){i.enabled!==!1&&L.preventDefault()}function _e(L){P.push(L)}function Ue(L){delete k[L.pointerId];for(let ae=0;ae<P.length;ae++)if(P[ae].pointerId==L.pointerId){P.splice(ae,1);return}}function ye(L){let ae=k[L.pointerId];ae===void 0&&(ae=new $e,k[L.pointerId]=ae),ae.set(L.pageX,L.pageY)}function q(L){const ae=L.pointerId===P[0].pointerId?P[1]:P[0];return k[ae.pointerId]}i.domElement.addEventListener("contextmenu",X),i.domElement.addEventListener("pointerdown",he),i.domElement.addEventListener("pointercancel",se),i.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}const tM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class go{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const nM=new Zf(-1,1,1,-1,0,1),sc=new Hi;sc.setAttribute("position",new Fi([-1,3,0,-1,-1,0,3,-1,0],3));sc.setAttribute("uv",new Fi([0,2,0,0,2,0],2));class iM{constructor(e){this._mesh=new Lt(sc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class oh extends go{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof zi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xf.clone(e.uniforms),this.material=new zi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new iM(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vd extends go{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class rM extends go{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class aM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new Bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ha}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oh(tM),this.copyPass.material.blending=Oi,this.clock=new sh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}vd!==void 0&&(o instanceof vd?i=!0:o instanceof rM&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sM extends go{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const oM={uniforms:{tDiffuse:{value:null},resolution:{value:new $e(1/1024,1/512)}},vertexShader:`

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
	`};class lh{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const i=t*this.speed;this.animate(e,i),this.animationObjects.forEach((r,a)=>{const o=this.progress0.get(a);r(e,this.progress-o,a)}),this.progress+=i}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class gd extends lh{animate(e){const t=this.progress*2,i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i;const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+r}}class _d extends lh{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const i=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+i,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-i,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const r=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+r}}class lM extends US{constructor(e="",t={}){const i=new ih({transparent:!0,alphaTest:1e-5});super(i),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=i,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const i=t.measureText(this.text);e.width=this.margin[3]+i.actualBoundingBoxLeft+i.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+i.actualBoundingBoxLeft,this.margin[0]+i.actualBoundingBoxAscent);const r=new Vs(e);r.magFilter=Bt,r.minFilter=Bt,this.textMaterial.map=r,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class cM{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new kS(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new FS(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new DS,this.camera=new Un,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),zn.enabled=!1,this.renderer=new nh({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Bi(0,0,{depthTexture:new th(0,0,Ii)})),this.composer=new aM(this.renderer,t),this.renderPass=new sM(this.scene,this.camera),this.fxaaPass=new oh(oM),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new VS,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new ln,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new eM(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new sh,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=i=>{i.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",i=>{i.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Vs(this.skinCanvas),this.skinTexture.magFilter=Bt,this.skinTexture.minFilter=Bt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Vs(this.capeCanvas),this.capeTexture.magFilter=Bt,this.capeTexture.minFilter=Bt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Vs(this.earsCanvas),this.earsTexture.magFilter=Bt,this.earsTexture.minFilter=Bt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(Ns(e))jS(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=ZS(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(fd(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Os(e).then(i=>this.loadSkin(i,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(Ns(e))YS(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Os(e).then(i=>this.loadCape(i,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(Ns(e))t.textureType==="skin"?fd(this.earsCanvas,e):QS(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Os(e).then(i=>this.loadEars(i,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,eo)}loadBackground(e,t){if(Ns(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new mn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Os(e).then(i=>this.loadBackground(i,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new K).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new $e).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new $e).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Et||e instanceof mn?this.scene.background=e:this.scene.background=new Et(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof vn||(e=new lM(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const Vn=Pt({list:[],active:null,ready:!1}),cl=new Map;function Nl(n,e){const t=window.__TAURI__?.core;return t?t.invoke(n,e):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function ks(){try{Vn.list=await Nl("get_accounts"),Vn.active=await Nl("get_active_account")}catch{}finally{Vn.ready=!0}}function is(n){return n?n.skin??(n.account_type?.type==="ely_by"?n.username:null):null}async function Ol(n){if(!n)return null;const e=String(n).trim();if(!e||e.startsWith("data:"))return e||null;if(cl.has(e))return cl.get(e);try{const t=await Nl("proxy_skin_png",{source:e});return cl.set(e,t),t}catch{return null}}function uM(n){try{const e=String(n??"").split(",")[1]??"",t=atob(e.slice(0,44));if(t.length<24)return null;const i=o=>t.charCodeAt(o)&255;if(i(1)!==80||i(2)!==78||i(3)!==71)return null;const r=(i(16)<<24|i(17)<<16|i(18)<<8|i(19))>>>0,a=(i(20)<<24|i(21)<<16|i(22)<<8|i(23))>>>0;return!r||!a?null:{width:r,height:a}}catch{return null}}var dM=re('<button title="Toggle the hat/jacket outer layer"> </button>'),fM=re("<canvas></canvas> <!>",1);function oc(n,e){Zt(e,!0);let t=Je(e,"skin",3,null),i=Je(e,"cape",3,null),r=Je(e,"model",3,null),a=Je(e,"width",3,260),o=Je(e,"height",3,340),s=Je(e,"walking",3,!1),c=Je(e,"autorotate",3,!1),u=Je(e,"zoom",3,.85),d=Je(e,"outerLayer",15,!0),h=Je(e,"showToggle",3,!1),f=pe(null),v=null,g,y,m,p=pe(null),M=pe(null),_=0;function E(H){if(!H)return null;const F=String(H).trim();if(!F)return null;if(/^(https?:|data:)/i.test(F))return F;const z=window.__TAURI__?.core?.convertFileSrc;return z?z(F):F}function C(H){const F=String(H??"").trim().toLowerCase();return F==="slim"?"slim":F==="classic"?"default":"auto-detect"}function D(){v&&((l(p)!==g||C(r())!==m)&&(g=l(p),m=C(r()),l(p)?v.loadSkin(l(p),{model:m}).catch(()=>{}):v.resetSkin()),l(M)!==y&&(y=l(M),l(M)?v.loadCape(l(M)).catch(()=>{}):v.resetCape()))}function P(){const H=v?.playerObject?.skin;if(H)for(const F of[H.head,H.body,H.rightArm,H.leftArm,H.rightLeg,H.leftLeg])F?.outerLayer&&(F.outerLayer.visible=d())}nr(()=>(v=new cM({canvas:l(f),width:a(),height:o(),zoom:u(),fov:55}),v.controls.enablePan=!1,v.controls.enableZoom=!0,v.autoRotate=c(),v.animation=s()?new _d:new gd,D(),P(),()=>{v?.dispose(),v=null})),Kt(()=>{const H=t(),F=i(),z=++_;(async()=>{const Z=await Ol(H),V=await Ol(F);z===_&&(x(p,Z??E(H),!0),x(M,V??E(F),!0))})()}),Kt(()=>{D(),P()}),Kt(()=>{d(),v&&P()}),Kt(()=>{v&&(v.animation=s()?new _d:new gd)}),Kt(()=>{v&&(v.autoRotate=c())}),Kt(()=>{v&&v.setSize(a(),o())});var k=fM(),b=vt(k);pf(b,H=>x(f,H),()=>l(f));var T=w(b,2);{var oe=H=>{var F=dM(),z=ue(F);we(()=>{ht(F,1,`rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) ${d()?"text-(--accent)":""}`),Ve(F,"aria-pressed",d()),de(z,`Outer layer: ${d()?"on":"off"}`)}),ce("click",F,()=>d(!d())),W(H,F)};ke(T,H=>{h()&&H(oe)})}we(()=>Sn(b,`width:${a()??""}px;height:${o()??""}px;display:block`)),W(n,k),Jt()}_n(["click"]);var hM=re('<span class="absolute inset-0"></span> <span class="absolute inset-0"></span>',1),pM=re('<span class="absolute inset-0 flex items-center justify-center text-[0.45em] font-bold"> </span>'),mM=re("<span><!></span>");function lc(n,e){Zt(e,!0);let t=Je(e,"source",3,null),i=Je(e,"size",3,32),r=Je(e,"letter",3,null),a=Je(e,"class",3,""),o=pe(null),s=pe(1),c=0;Kt(()=>{const m=t(),p=++c;(async()=>{const M=await Ol(m);if(p!==c)return;x(o,M,!0);const _=M?uM(M):null;x(s,_&&_.height&&_.width?_.height/_.width:1,!0)})()}),Kl(()=>{c+=1});const u=st(()=>(800*l(s)).toFixed(4)),d=st(()=>(100/(8*l(s)-1)).toFixed(4)),h=st(()=>l(o)?`background-image:url(${l(o)});background-size:800% ${l(u)}%;image-rendering:pixelated;`:"");var f=mM(),v=U(f);{var g=m=>{var p=hM(),M=vt(p),_=w(M,2);we(()=>{Sn(M,`${l(h)}background-position:14.2857% ${l(d)}%`),Sn(_,`${l(h)}background-position:71.4286% ${l(d)}%`)}),W(m,p)},y=m=>{var p=pM(),M=ue(p,!0);we(()=>{Sn(p,`font-size:${i()*.45}px`),de(M,r())}),W(m,p)};ke(v,m=>{l(o)?m(g):r()&&m(y,1)})}we(()=>{ht(f,1,`relative inline-block shrink-0 overflow-hidden ${a()??""}`),Sn(f,`width:${i()??""}px;height:${i()??""}px`)}),W(n,f),Jt()}var vM=re('<span class="text-[10px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),gM=re(`<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40" title="Silently renew this account's token"> </button>`),_M=re('<button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)">Set active</button>'),xM=re('<div class="mt-2 flex items-start gap-3 rounded border border-(--border) bg-(--bg-subtle) p-3"><!> <div class="flex min-w-0 flex-1 flex-col gap-2"><button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Skin: <span class="truncate text-(--accent)"> </span></button> <button class="rounded border border-(--border) px-2.5 py-1.5 text-left text-[11px] hover:bg-(--bg-surface)">Cape: <span class="truncate text-(--accent)"> </span></button> <div class="flex gap-2"><button class="rounded bg-(--accent) px-3 py-1 text-[11px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40">Save</button> <button class="rounded border border-(--border) px-3 py-1 text-[11px] hover:bg-(--bg-surface)">Clear</button></div></div></div>'),bM=re('<div><div class="flex items-center gap-3"><!> <div class="min-w-0 flex-1"><div class="flex items-center gap-2"><span class="truncate text-[13px] font-medium"> </span> <span class="rounded bg-(--bg-subtle) px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-(--text-muted)"> </span> <!></div> <div class="truncate text-[11px] text-(--text-muted)"> </div></div> <div class="flex shrink-0 gap-1"><button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Skin &amp; cape"><!></button> <!> <!> <button class="rounded px-2 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400">Remove</button></div></div> <!></div>'),yM=re('<p class="px-4 py-3 text-[12px] text-(--text-muted)">No accounts yet — add one above.</p>'),SM=re('<p class="mx-4 my-3 rounded bg-red-500/10 px-3 py-2 text-[12px] text-red-400"> </p>'),MM=re('<div class="flex flex-col"><!> <!></div>');function ch(n,e){Zt(e,!0);let t=Je(e,"accounts",19,()=>[]),i=Je(e,"active",3,null),r=pe(""),a=pe(!1),o=pe(null),s=pe(""),c=pe(""),u=pe(null);function d(b,T){const oe=window.__TAURI__?.core;return oe?oe.invoke(b,T):Promise.reject(new Error("Tauri backend unavailable in this preview."))}async function h(b){x(r,"");try{await d("set_active_account",{id:b}),await e.onrefresh?.()}catch(T){x(r,String(T),!0)}}async function f(b){x(r,"");try{await d("remove_account",{id:b}),l(o)===b&&x(o,null),await e.onrefresh?.()}catch(T){x(r,String(T),!0)}}async function v(b){const T=g(b);if(T){x(r,""),x(u,b.id,!0);try{await d(T,{id:b.id}),await e.onrefresh?.()}catch(oe){x(r,String(oe),!0)}finally{x(u,null)}}}function g(b){const T=b.account_type?.type;return T==="microsoft"?"refresh_microsoft_account":T==="ely_by"&&b.refresh_token?"refresh_elyby_account":null}function y(b){if(l(o)===b.id){x(o,null);return}x(o,b.id,!0),x(s,b.skin??"",!0),x(c,b.cape??"",!0)}async function m(b){const T=window.__TAURI__?.dialog?.open;if(!T){x(r,"File picker unavailable in this build.");return}try{const oe=await T({multiple:!1,title:b==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!oe)return;x(b==="skin"?s:c,String(oe),!0),x(r,"")}catch(oe){x(r,String(oe),!0)}}async function p(){x(r,""),x(a,!0);try{await d("set_account_textures",{id:l(o),skin:l(s).trim()||null,cape:l(c).trim()||null}),await e.onrefresh?.(),x(o,null)}catch(b){x(r,String(b),!0)}finally{x(a,!1)}}async function M(){x(s,""),x(c,""),await p()}function _(b){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[b.account_type.type]??"Yggdrasil"}const E=st(()=>t().find(b=>b.id===l(o))??null);var C=MM(),D=U(C);At(D,17,t,b=>b.id,(b,T)=>{var oe=bM(),H=U(oe),F=U(H);{let N=st(()=>is(l(T))),$=st(()=>l(T).username[0]?.toUpperCase()??"?");lc(F,{get source(){return l(N)},size:32,get letter(){return l($)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var z=w(F,2),Z=U(z),V=U(Z),B=ue(V,!0),ie=w(V,2),ge=ue(ie,!0),ve=w(ie,2);{var Q=N=>{var $=vM();W(N,$)};ke(ve,N=>{i()?.id===l(T).id&&N(Q)})}var ne=w(Z,2),Se=ue(ne,!0),Ae=w(z,2),Pe=U(Ae),Fe=U(Pe);pi(Fe,{emoji:"🎨"});var je=w(Pe,2);{var ze=N=>{var $=gM(),Ie=ue($,!0);we(()=>{$.disabled=l(u)!==null,de(Ie,l(u)===l(T).id?"Refreshing…":"Refresh token")}),ce("click",$,()=>v(l(T))),W(N,$)},Qe=st(()=>g(l(T)));ke(je,N=>{l(Qe)&&N(ze)})}var dt=w(je,2);{var Xe=N=>{var $=_M();ce("click",$,()=>h(l(T).id)),W(N,$)};ke(dt,N=>{i()?.id!==l(T).id&&N(Xe)})}var J=w(dt,2),lt=w(H,2);{var We=N=>{var $=xM(),Ie=U($);{let _e=st(()=>l(E)?.model);oc(Ie,{get skin(){return l(s)},get cape(){return l(c)},get model(){return l(_e)},width:110,height:150})}var he=w(Ie,2),Me=U(he),se=w(U(Me)),Oe=ue(se,!0),Le=w(Me,2),A=w(U(Le)),S=ue(A,!0),I=w(Le,2),Y=U(I),X=w(Y,2);we(()=>{de(Oe,l(s)||"default (Steve/Alex)"),de(S,l(c)||"none"),Y.disabled=l(a)}),ce("click",Me,()=>m("skin")),ce("click",Le,()=>m("cape")),ce("click",Y,p),ce("click",X,M),W(N,$)};ke(lt,N=>{l(o)===l(T).id&&l(E)&&N(We)})}we(N=>{ht(oe,1,`border-b border-(--border) px-4 py-2.5 ${i()?.id===l(T).id?"bg-(--accent)/10":""}`),de(B,l(T).username),de(ge,N),de(Se,l(T).uuid)},[()=>_(l(T))]),ce("click",Pe,()=>y(l(T))),ce("click",J,()=>f(l(T).id)),W(b,oe)},b=>{var T=yM();W(b,T)});var P=w(D,2);{var k=b=>{var T=SM(),oe=ue(T,!0);we(()=>de(oe,l(r))),W(b,T)};ke(P,b=>{l(r)&&b(k)})}W(n,C),Jt()}_n(["click"]);var EM=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex max-h-[85vh] w-[560px] flex-col rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Accounts</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="min-h-0 flex-1 overflow-y-auto"><!> <div class="border-t border-(--border)"><!></div></div></div></div>');function wM(n,e){Zt(e,!0);let t=Je(e,"accounts",19,()=>[]),i=Je(e,"active",3,null);nr(()=>{const f=lo(()=>e.onclose?.());return()=>co(f)});var r=EM(),a=U(r),o=U(a),s=w(U(o),2),c=w(o,2),u=U(c);yf(u,{get onrefresh(){return e.onrefresh}});var d=w(u,2),h=U(d);ch(h,{get accounts(){return t()},get active(){return i()},get onrefresh(){return e.onrefresh}}),ce("click",r,f=>{f.target===f.currentTarget&&e.onclose?.()}),ce("click",s,()=>e.onclose?.()),W(n,r),Jt()}_n(["click"]);var TM=re('<button><span class="truncate"> </span></button>'),AM=re('<span class="text-[9px] font-semibold tracking-wide text-(--accent)">ACTIVE</span>'),RM=re('<button><!> <span class="text-[12px] font-medium"> </span> <!></button>'),CM=re('<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-6"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <dl class="mt-1 grid w-full max-w-sm grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]"><dt class="text-(--text-muted)">Profile UUID</dt> <dd class="min-w-0 truncate font-mono"> </dd> <dt class="text-(--text-muted)">Skin source</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Cape</dt> <dd class="min-w-0 truncate"> </dd> <dt class="text-(--text-muted)">Renewable token</dt> <dd class="min-w-0 truncate"> </dd></dl></div>'),PM=re('<div class="mt-6 flex flex-wrap gap-2"></div> <!>',1),LM=re(`<div class="mt-6 flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><p class="text-sm font-medium">No accounts yet</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Add an offline profile, sign in with Ely.by or Microsoft, or point at any custom
              Yggdrasil server — everything lives in the Add Account section.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Add an account</button></div>`),DM=re('<h2 class="text-[16px] font-semibold">Account overview</h2> <p class="mt-1 text-[12px] text-(--text-muted)">The character launches use, with the hat/jacket outer layer included.</p> <!>',1),IM=re('<h2 class="text-[16px] font-semibold">Add account</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Offline profiles, Ely.by (browser or device code), Microsoft and custom Yggdrasil servers.</p> <div class="mt-6 overflow-hidden rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),UM=re('<h2 class="text-[16px] font-semibold">Saved accounts</h2> <p class="mt-1 text-[12px] text-(--text-muted)">Set the active profile, renew tokens silently, edit skins — or remove accounts.</p> <div class="mt-6 rounded-lg border border-(--border) bg-(--bg-surface)"><!></div>',1),NM=re('<div class="flex h-full"><nav class="flex w-56 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-3" aria-label="Accounts sections"><button class="mb-3 flex h-9 items-center gap-2 rounded px-2.5 text-left text-[13px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library"><span class="w-5 shrink-0 text-center text-[15px]">←</span> <span class="truncate">Back to Instances</span></button> <div class="flex flex-col gap-0.5"></div></nav> <div class="min-w-0 flex-1 overflow-y-auto"><div class="mx-auto max-w-2xl p-8"><!></div></div></div>');function OM(n,e){Zt(e,!0);const t=[{id:"overview",label:"Overview"},{id:"add",label:"Add Account"},{id:"saved",label:"Saved Accounts"}];let i=pe("overview"),r=pe(null);const a=st(()=>{const M=Vn.list;return M.find(_=>_.id===l(r))??M.find(_=>_.id===Vn.active?.id)??M[0]??null});let o=pe(!0);function s(M){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[M.account_type.type]??"Yggdrasil"}var c=NM(),u=U(c),d=U(u),h=w(d,2);At(h,21,()=>t,M=>M.id,(M,_)=>{var E=TM(),C=U(E),D=ue(C,!0);we(()=>{ht(E,1,`flex h-10 items-center gap-2.5 rounded px-2.5 text-left text-[13px] ${l(i)===l(_).id?"bg-(--brand-tint) font-medium text-(--accent)":"text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)"}`),Ve(E,"aria-current",l(i)===l(_).id?"true":void 0),de(D,l(_).label)}),ce("click",E,()=>x(i,l(_).id,!0)),W(M,E)});var f=w(u,2),v=U(f),g=U(v);{var y=M=>{var _=DM(),E=w(vt(_),4);{var C=P=>{var k=PM(),b=vt(k);At(b,21,()=>Vn.list,H=>H.id,(H,F)=>{var z=RM(),Z=U(z);{let ve=st(()=>is(l(F))),Q=st(()=>l(F).username[0]?.toUpperCase()??"?");lc(Z,{get source(){return l(ve)},size:24,get letter(){return l(Q)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var V=w(Z,2),B=ue(V,!0),ie=w(V,2);{var ge=ve=>{var Q=AM();W(ve,Q)};ke(ie,ve=>{Vn.active?.id===l(F).id&&ve(ge)})}we(()=>{ht(z,1,`flex items-center gap-2 rounded border px-2 py-1.5 text-left ${l(a)?.id===l(F).id?"border-(--accent) bg-(--brand-tint)":"border-(--border) hover:border-(--text-muted)"}`),Ve(z,"title",`Preview ${l(F).username??""}`),de(B,l(F).username)}),ce("click",z,()=>x(r,l(F).id,!0)),W(H,z)});var T=w(b,2);{var oe=H=>{var F=CM(),z=U(F);{let Qe=st(()=>is(l(a)));oc(z,{get skin(){return l(Qe)},get cape(){return l(a).cape},get model(){return l(a).model},width:230,height:310,showToggle:!0,get outerLayer(){return l(o)},set outerLayer(dt){x(o,dt,!0)}})}var Z=w(z,2),V=U(Z),B=ue(V,!0),ie=w(V,2),ge=ue(ie,!0),ve=w(Z,2),Q=w(U(ve),2),ne=ue(Q,!0),Se=w(Q,4),Ae=ue(Se,!0),Pe=w(Se,4),Fe=ue(Pe,!0),je=w(Pe,4),ze=ue(je,!0);we(Qe=>{de(B,l(a).username),de(ge,Qe),Ve(Q,"title",l(a).uuid),de(ne,l(a).uuid),Ve(Se,"title",l(a).skin??"default (Steve/Alex)"),de(Ae,l(a).skin?"custom skin":"default (Steve/Alex)"),de(Fe,l(a).cape?"custom cape":"none"),de(ze,l(a).refresh_token?"yes — silent refresh available":"no")},[()=>s(l(a))]),W(H,F)};ke(T,H=>{l(a)&&H(oe)})}W(P,k)},D=P=>{var k=LM(),b=w(U(k),4);ce("click",b,()=>x(i,"add")),W(P,k)};ke(E,P=>{Vn.list.length?P(C):P(D,-1)})}W(M,_)},m=M=>{var _=IM(),E=w(vt(_),4),C=U(E);yf(C,{get onrefresh(){return e.onrefresh}}),W(M,_)},p=M=>{var _=UM(),E=w(vt(_),4),C=U(E);ch(C,{get accounts(){return Vn.list},get active(){return Vn.active},get onrefresh(){return e.onrefresh}}),W(M,_)};ke(g,M=>{l(i)==="overview"?M(y):l(i)==="add"?M(m,1):M(p,-1)})}ce("click",d,function(...M){e.onback?.apply(this,M)}),W(n,c),Jt()}_n(["click"]);var FM=re('<div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) px-6 py-12 text-center"><!> <p class="text-sm font-medium">No account selected</p> <p class="max-w-sm text-[12px] text-(--text-muted)">Pick or create an account to see your character here.</p> <button class="rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)">Open account manager</button></div>'),kM=re('<button class="rounded border border-(--border) px-2.5 py-1 text-[11px] text-(--text-muted) hover:bg-(--bg-subtle)" title="Back to the default look">Reset</button>'),BM=re('<p class="text-center text-[11px] text-red-400"> </p>'),zM=re("<option> </option>"),GM=re("<option>No instances yet</option>"),HM=re('<div class="mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-subtle) px-3 py-2"><span class="min-w-0 flex-1"><span class="block truncate text-[13px] font-medium"> </span> <span class="block truncate text-[11px] text-(--text-muted)"> </span></span> <button class="rounded bg-(--accent)/15 px-2.5 py-1 text-[11px] font-medium text-(--accent) hover:bg-(--accent)/25 disabled:opacity-40">Join</button> <button class="rounded px-1.5 py-1 text-[11px] text-(--text-muted) hover:bg-red-500/10 hover:text-red-400" title="Remove from my servers">✕</button></div>'),VM=re('<p class="mt-2 text-[12px] text-(--text-muted)">No pinned servers yet — add one below.</p>'),WM=re('<p class="mt-2 text-[11px] text-red-400"> </p>'),jM=re('<div class="grid gap-6 md:grid-cols-[auto_1fr]"><div class="flex flex-col items-center gap-3 rounded-lg border border-(--border) bg-(--bg-surface) p-5"><!> <div class="text-center"><p class="text-sm font-semibold"> </p> <p class="text-[11px] text-(--text-muted)"> </p></div> <div class="flex gap-2"><button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the skin PNG">Skin…</button> <button class="rounded border border-(--border) px-2.5 py-1 text-[11px] hover:bg-(--bg-subtle)" title="Swap the cape PNG">Cape…</button> <!></div> <!></div> <div class="flex min-w-0 flex-col gap-6"><div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">Quick launch</h3> <div class="mt-3 flex items-center gap-2"><select class="h-9 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2 text-[13px] outline-none focus:border-(--accent)"></select> <button class="flex items-center gap-1.5 rounded px-2 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Open the console drawer"><!> Console</button></div> <button class="mt-3 w-full rounded bg-(--accent) px-4 py-3 text-[15px] font-bold tracking-wide text-(--on-accent) hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"> </button> <p class="mt-2 truncate text-center text-[11px] text-(--text-muted)"> </p></div> <div class="rounded-lg border border-(--border) bg-(--bg-surface) p-5"><div class="flex items-center justify-between"><h3 class="text-[11px] font-semibold uppercase tracking-wider text-(--text-muted)">My servers</h3> <span class="text-[10px] text-(--text-muted)">only you decide what lives here</span></div> <!> <form class="mt-3 flex flex-wrap gap-2"><input class="h-8 w-32 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Name"/> <input class="h-8 min-w-0 flex-1 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="host.or.ip[:port]"/> <button type="submit" class="rounded border border-(--border) px-3 py-1.5 text-[12px] hover:bg-(--bg-subtle)">＋ Pin</button></form> <!></div></div></div>'),XM=re('<div class="mx-auto flex w-full max-w-4xl flex-col gap-6"><!></div>');function YM(n,e){Zt(e,!0);let t=Je(e,"instances",19,()=>[]),i=Je(e,"active",3,null),r=Je(e,"gameRunning",3,!1),a=Je(e,"status",3,"Ready");function o(H,F){const z=window.__TAURI__?.core;return z?z.invoke(H,F):Promise.reject(new Error("Tauri backend unavailable in this preview."))}const s="twilight-pinned-servers";let c=pe(Pt(f())),u=pe(""),d=pe(""),h=pe("");function f(){try{const H=JSON.parse(localStorage.getItem(s)??"[]");return Array.isArray(H)?H:[]}catch{return[]}}function v(){localStorage.setItem(s,JSON.stringify(l(c)))}function g(H){H.preventDefault(),x(h,"");const F=l(d).trim();if(!/^[a-z0-9.-]+(:\d{1,5})?$/i.test(F)){x(h,"Address must be a hostname (optionally host:port).");return}x(c,[...l(c),{name:l(u).trim()||F.split(":")[0],address:F}],!0),v(),x(u,""),x(d,"")}function y(H){x(c,l(c).filter((F,z)=>z!==H),!0),v()}let m=pe("");Kt(()=>{l(m)&&t().some(H=>H.id===l(m))||x(m,t()[0]?.id??"",!0)});const p=st(()=>t().find(H=>H.id===l(m))?.name??"no instance selected");function M(H){!l(m)||r()||e.onlaunch?.(l(m),H.address)}let _=pe(""),E=pe(!1);async function C(H){const F=window.__TAURI__?.dialog?.open;if(!F){x(_,"File picker unavailable in this build.");return}try{const z=await F({multiple:!1,title:H==="skin"?"Choose a skin PNG":"Choose a cape PNG",filters:[{name:"PNG textures",extensions:["png"]}]});if(!z)return;x(E,!0),x(_,""),await o("set_account_textures",{id:i().id,skin:H==="skin"?String(z):null,cape:H==="cape"?String(z):null}),await e.onrefresh?.()}catch(z){x(_,String(z),!0)}finally{x(E,!1)}}async function D(){if(i())try{x(E,!0),await o("set_account_textures",{id:i().id,skin:null,cape:null}),await e.onrefresh?.()}catch(H){x(_,String(H),!0)}finally{x(E,!1)}}function P(H){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[H.account_type.type]??"Yggdrasil"}var k=XM(),b=U(k);{var T=H=>{var F=FM(),z=U(F);pi(z,{emoji:"👤",size:30});var Z=w(z,6);ce("click",Z,()=>e.onopenaccounts?.()),W(H,F)},oe=H=>{var F=jM(),z=U(F),Z=U(z);ff(Z,()=>i()?.id,I=>{{let Y=st(()=>is(i()));oc(I,{get skin(){return l(Y)},get cape(){return i().cape},get model(){return i().model},width:220,height:300})}});var V=w(Z,2),B=U(V),ie=ue(B,!0),ge=w(B,2),ve=ue(ge,!0),Q=w(V,2),ne=U(Q),Se=w(ne,2),Ae=w(Se,2);{var Pe=I=>{var Y=kM();we(()=>Y.disabled=l(E)),ce("click",Y,D),W(I,Y)};ke(Ae,I=>{(i().cape||i().skin)&&I(Pe)})}var Fe=w(Q,2);{var je=I=>{var Y=BM(),X=ue(Y,!0);we(()=>de(X,l(_))),W(I,Y)};ke(Fe,I=>{l(_)&&I(je)})}var ze=w(z,2),Qe=U(ze),dt=w(U(Qe),2),Xe=U(dt);At(Xe,21,t,I=>I.id,(I,Y)=>{var X=zM(),_e=ue(X,!0),Ue={};we(()=>{de(_e,l(Y).name),Ue!==(Ue=l(Y).id)&&(X.value=(X.__value=Ue)??"")}),W(I,X)},I=>{var Y=GM();Y.value=Y.__value="",W(I,Y)}),Js(Xe);var J=w(Xe,2),lt=U(J);Gt(lt,{name:"log",size:12});var We=w(dt,2),N=ue(We,!0),$=w(We,2),Ie=ue($,!0),he=w(Qe,2),Me=w(U(he),2);At(Me,19,()=>l(c),I=>I.address,(I,Y,X)=>{var _e=HM(),Ue=U(_e),ye=U(Ue),q=ue(ye,!0),L=w(ye,2),ae=ue(L,!0),me=w(Ue,2),xe=w(me,2);we(()=>{de(q,l(Y).name),de(ae,l(Y).address),me.disabled=!l(m)||r(),Ve(me,"title",`Join ${l(Y).address} with ${l(p)}`)}),ce("click",me,()=>M(l(Y))),ce("click",xe,()=>y(l(X))),W(I,_e)},I=>{var Y=VM();W(I,Y)});var se=w(Me,2),Oe=U(se),Le=w(Oe,2),A=w(se,2);{var S=I=>{var Y=WM(),X=ue(Y,!0);we(()=>de(X,l(h))),W(I,Y)};ke(A,I=>{l(h)&&I(S)})}we(I=>{de(ie,i().username),de(ve,I),ne.disabled=l(E),Se.disabled=l(E),We.disabled=!l(m)||r(),de(N,r()?"GAME RUNNING…":"LAUNCH GAME"),de(Ie,r()?a():l(p))},[()=>P(i())]),ce("click",ne,()=>C("skin")),ce("click",Se,()=>C("cape")),Qs(Xe,()=>l(m),I=>x(m,I)),ce("click",J,()=>e.onopenconsole?.()),ce("click",We,()=>e.onlaunch?.(l(m),null)),gi("submit",se,g),kt(Oe,()=>l(u),I=>x(u,I)),kt(Le,()=>l(d),I=>x(d,I)),W(H,F)};ke(b,H=>{i()?H(oe,-1):H(T)})}W(n,k),Jt()}_n(["click"]);var qM=re('<span class="flex min-w-0 items-center gap-1.5"><span class="truncate text-[13px] font-semibold">TwilightMC</span> <span class="shrink-0 rounded bg-(--accent-star)/15 px-1 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span></span>'),KM=re('<span class="truncate text-[13px]"> </span>'),ZM=re('<button><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button>'),JM=re('<span class="truncate text-[13px]">Add Instance</span>'),QM=re('<span class="min-w-0 flex-1 text-left"><span class="block truncate text-[12px] font-medium"> </span> <span class="block text-[10px] text-(--text-muted)"> </span></span>'),$M=re('<button class="rounded px-2.5 py-1 text-[12px] font-medium text-(--text-muted) hover:bg-(--bg-surface) hover:text-(--text-main)" title="Back to the instance library">← Back to Instances</button> <span class="truncate text-[12px] font-medium text-(--text-muted)"> </span>',1),e1=re('<button role="tab"> </button>'),t1=re('<span class="rounded bg-(--accent)/15 px-2 py-0.5 text-xs font-medium text-(--accent)"> </span> <span class="rounded bg-(--accent-star)/15 px-1.5 py-0.5 text-[10px] font-medium text-(--accent-star)">pre-release UI</span> <div class="ml-2 flex overflow-hidden rounded border border-(--border)" role="tablist"></div>',1),n1=re('<div class="mb-4 flex items-center gap-2"><button class="flex items-center gap-1.5 rounded bg-(--accent) px-3 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover)"><!> Add Instance</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40"><!> Instance Folder</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)" title="Install a Modrinth .mrpack into a new instance"><!> Install .mrpack</button> <button class="flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!> Settings</button> <input class="h-8 w-64 rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[12px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="Filter instances…"/> <span class="flex-1"></span> <button class="flex rounded px-2 py-1 text-sm text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"><!></button></div> <!>',1),i1=re('<h2 class="text-lg font-semibold"> </h2> <p class="mt-1 text-(--text-muted)"> </p>',1),r1=re('<span class="shrink-0 text-[10px] font-medium normal-case tracking-normal text-green-500">running</span>'),a1=re('<button class="text-(--text-muted) hover:text-(--text-main)" title="Collapse">Hide</button>'),s1=re("<div> </div>"),o1=re('<div class="text-(--text-muted)">Game output appears here once you launch.</div>'),l1=re('<p class="mt-2 text-[12px] text-red-400"> </p>'),c1=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[480px] rounded-lg border border-(--border) bg-(--bg-surface) shadow-2xl"><div class="flex items-center justify-between border-b border-(--border) px-4 py-3"><h3 class="text-sm font-semibold">Install Modpack</h3> <button class="text-(--text-muted) hover:text-(--text-main)">✕</button></div> <div class="p-4"><div class="flex h-36 flex-col items-center justify-center rounded border border-dashed border-(--border) text-center text-(--text-muted) hover:border-(--accent)"><span class="text-xl">⤓</span> <span class="mt-2 text-[12px]">Drop an <span class="text-(--text-main)">.mrpack</span> here</span> <span class="text-[11px]">or paste its path / URL below</span></div> <input class="mt-3 h-8 w-full rounded border border-(--border) bg-(--bg-subtle) px-2.5 text-[13px] outline-none placeholder:text-(--text-muted) focus:border-(--accent)" placeholder="C:\\downloads\\pack.mrpack  |  https://modrinth.com/…"/> <!></div> <div class="flex items-center justify-end gap-2 border-t border-(--border) px-4 py-3"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:text-(--text-main)">Cancel</button> <button class="rounded bg-(--accent) px-4 py-1.5 text-[12px] font-medium text-(--on-accent) hover:bg-(--accent-hover) disabled:opacity-40"> </button></div></div></div>'),u1=re('<p class="mt-2 rounded border border-rose-500/40 bg-rose-500/10 px-2 py-1 text-[11px] text-rose-400"> </p>'),d1=re('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="w-[380px] rounded-lg border border-(--border) bg-(--bg-surface) p-5 shadow-2xl"><h3 class="text-[14px] font-semibold">Delete instance</h3> <p class="mt-2 text-[12px] text-(--text-muted)">Delete <span class="font-medium text-(--text-main)"> </span> and all of its game files?</p> <!> <div class="mt-4 flex justify-end gap-2"><button class="rounded px-3 py-1.5 text-[12px] text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main) disabled:opacity-40">Cancel</button> <button class="rounded border border-(--accent-star)/40 bg-(--accent-star)/10 px-3 py-1.5 text-[12px] font-medium text-(--accent-star) hover:bg-(--accent-star)/20 disabled:opacity-40" title="Moves the folder into .twilight-trash next to the instances root"><!> Move to Trash</button> <button class="rounded bg-rose-600 px-3 py-1.5 text-[12px] font-medium text-white hover:bg-rose-500 disabled:opacity-40" title="Removes this instance directory permanently">✕ Delete Permanently</button></div></div></div>'),f1=re('<div class="flex h-full bg-(--bg-canvas) text-sm text-(--text-main)"><nav><div class="flex h-10 items-center gap-2 border-b border-(--border) px-1"><img src="/logo.png" alt="TwilightMC" draggable="false" class="h-7 w-7 shrink-0"/> <!></div> <div class="mt-1 flex flex-1 flex-col gap-0.5"><!> <button title="Add Instance"><span class="flex w-5 shrink-0 items-center justify-center"><!></span> <!></button></div> <button><!> <!></button> <button> </button></nav> <div class="flex min-w-0 flex-1 flex-col"><header class="flex h-11 shrink-0 items-center justify-between border-b border-(--border) bg-(--bg-subtle) px-4"><div class="flex min-w-0 items-center gap-2.5"><!></div> <span class="text-xs text-(--text-muted)" aria-live="polite"> </span></header> <main class="min-w-0 flex-1 overflow-y-auto p-6"><!></main> <section><div class="flex h-10 shrink-0 items-center justify-between gap-2 px-3"><button class="flex min-w-0 flex-1 items-center gap-2 text-left text-[11px] font-semibold uppercase tracking-wide text-(--text-muted) hover:text-(--text-main)"><span></span> <!> <span class="truncate">Console Drawer (Real-time logs)</span> <!></button> <div class="flex shrink-0 items-center gap-3 text-[11px]"><button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Clear</button> <button class="text-(--text-muted) hover:text-(--text-main) disabled:opacity-40">Copy</button> <button class="text-rose-400 hover:text-rose-300 disabled:opacity-40" title="Kill the game process">Kill</button> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto px-3 py-2 font-mono text-[11px] leading-5"></div></section></div> <!> <!> <!> <!> <!> <!></div>');function h1(n,e){Zt(e,!0);let t=pe("…"),i=pe("instances"),r=pe(Pt(Ql(localStorage.getItem("twilight-theme"))??(matchMedia("(prefers-color-scheme: light)").matches?"twilight-light":"twilight-dark")));Kt(()=>{Ev(l(r)),localStorage.setItem("twilight-theme",l(r)),Rv(l(r)),window.__TAURI__?.core.invoke("set_theme_config",{theme:Ba(l(r))?"dark":"light"}).catch(()=>{})}),vv();let a=pe("Ready"),o=pe(!1),s=pe(Pt(localStorage.getItem("twilight-mode")==="client"?"client":"launcher"));Kt(()=>{localStorage.setItem("twilight-mode",l(s)),window.__TAURI__?.core.invoke("set_mode_config",{mode:l(s)}).catch(()=>{})});let c=pe(localStorage.getItem("twilight-blind-mode")==="true"),u=pe(localStorage.getItem("twilight-deaf-mode")==="true");Kt(()=>{localStorage.setItem("twilight-blind-mode",String(l(c))),localStorage.setItem("twilight-deaf-mode",String(l(u))),window.__TAURI__?.core.invoke("set_accessibility_config",{blindMode:l(c),deafMode:l(u)}).catch(()=>{})});const d=[{id:"instances",label:"Instances",icon:"instances"},{id:"worlds",label:"Servers & P2P",icon:"worlds"},{id:"downloads",label:"Downloads",icon:"download"},{id:"settings",label:"Settings",icon:"settings"},{id:"accounts",label:"Accounts",icon:"accounts"}],h={instances:["Instances","Your library — open the wizard or drop a pack."],worlds:["Servers & P2P","Server and P2P management lands in a later milestone."],downloads:["Downloads","Direct downloads land in a later milestone."]},f=st(()=>Vn.active);let v=pe(!1),g=pe(Pt([])),y=pe(!1),m=pe(""),p=pe(!1),M=pe(!1),_=pe(""),E=pe(!1),C=pe(""),D=pe(null),P=st(()=>l(D)?"edit":l(i)),k=pe(null),b=pe(null),T=pe(!1),oe=pe(""),H=pe(null),F=pe(""),z=pe(0),Z=pe(0),V=pe("");async function B(j,Re){return window.__TAURI__.core.invoke(j,Re)}function ie(){x(r,Ba(l(r))?"twilight-light":"twilight-dark",!0)}async function ge(){x(y,!0),x(m,"");try{x(g,await B("discover_java_installations"),!0)}catch(j){x(m,String(j),!0)}finally{x(y,!1)}}function ve(){x(p,!0)}async function Q(){if(l(_).trim()){x(E,!0),x(C,"");try{const j=await B("install_modpack",{pathOrUrl:l(_).trim()});x(M,!1),x(_,""),await se(),j&&x(N,j,!0),x(a,"Modpack installed.")}catch(j){x(C,String(j),!0)}finally{x(E,!1)}}}let ne=pe(Pt([])),Se=pe(!1),Ae=pe(!1),Pe=pe(null);Kt(()=>{l(ne).length,l(Pe)&&(l(Pe).scrollTop=l(Pe).scrollHeight)});function Fe(j){l(ne).push(j),l(ne).length>5e3&&l(ne).splice(0,l(ne).length-5e3)}function je(){x(ne,[],!0)}function ze(j){return j.stream==="stderr"||j.line.includes("/ERROR]")?"text-rose-400":j.line.includes("/WARN]")?"text-(--accent-star)":j.line.includes("/INFO]")?"text-(--accent)/80":"text-(--text-main)"}async function Qe(){const j=l(ne).map(Re=>Re.line).join(`
`);try{await navigator.clipboard.writeText(j)}catch{const Re=document.createElement("textarea");Re.value=j,document.body.append(Re),Re.select(),document.execCommand("copy"),Re.remove()}}async function dt(){if(l(Ae))try{await B("kill_instance"),Fe({stream:"stdout",line:"kill requested"})}catch(j){Fe({stream:"stderr",line:String(j)})}}let Xe=pe(Pt([])),J=pe(""),lt=pe(null),We=pe(""),N=pe(null),$=pe(null),Ie=pe(""),he=pe(!1);function Me(){const j=l(We).trim().toLowerCase();return j?l(Xe).filter(Re=>Re.name.toLowerCase().includes(j)||Re.minecraft_version.toLowerCase().includes(j)||Re.id.toLowerCase().includes(j)):l(Xe)}async function se(){try{x(Xe,await B("scan_instances"),!0),x(J,"")}catch(j){x(J,String(j),!0)}}function Oe(j){x(N,j,!0)}async function Le(j,Re=null){if(l(Ae))return;const Ze=l(Xe).find(Tt=>Tt.id===j),xt=Ze?Ze.name:j;x(Ae,!0),x(a,Re?`Running ${xt} → ${Re}…`:`Running ${xt}…`,!0),x(Se,!0);try{const Tt=await B("launch_instance",{instanceId:j,server:Re});Fe({stream:"stdout",line:`launcher reports exit code ${Tt}`}),await se(),x(a,"Ready")}catch(Tt){console.error("Launch failed:",Tt),Fe({stream:"stderr",line:`[ERROR] Launch failed: ${Tt}`}),x(a,"Launch failed")}finally{x(Ae,!1),l(a)!=="Launch failed"&&x(a,"Ready")}}function A(){l(b)&&B("open_path",{path:l(b).instances_dir}).catch(j=>x(a,String(j),!0))}function S(j){l(b)&&B("open_path",{path:[l(b).instances_dir.replace(/\\/g,"/"),j].join("/")}).catch(Re=>x(a,String(Re),!0))}function I(j){x(Ie,""),x($,j,!0)}async function Y(j){if(!(!l($)||l(he))){x(he,!0),x(Ie,"");try{await B("delete_instance",{instanceId:l($),toTrash:j}),l(N)===l($)&&x(N,null),x($,null),await se(),x(a,j?"Instance moved to trash.":"Instance deleted.",!0)}catch(Re){x(Ie,String(Re),!0)}finally{x(he,!1)}}}const X=st(()=>[...new Set(l(Xe).map(j=>j.group).filter(Boolean))].sort((j,Re)=>j.localeCompare(Re)));async function _e(j){if(!l(me))return;const Re=l(me).name;try{await B("set_instance_group",{instanceId:l(me).id,group:j}),await se(),x(a,j?`Moved ${Re} to ${j}.`:`${Re} is ungrouped.`,!0)}catch(Ze){x(a,String(Ze),!0)}}async function Ue(){if(!l(me))return;const j=l(me).name;try{const Re=await B("duplicate_instance",{instanceId:l(me).id});await se(),x(N,Re.id,!0),x(a,`Copied ${j}.`)}catch(Re){x(a,String(Re),!0)}}async function ye(){if(!l(me))return;const j=window.__TAURI__?.dialog?.save;if(!j){x(a,"File picker unavailable in this build.");return}try{const Re=await j({title:"Export instance",defaultPath:`${l(me).name.replace(/[\\/:*?"<>|]/g,"_")}.zip`,filters:[{name:"Zip archive",extensions:["zip"]}]});if(!Re)return;const Ze=await B("export_instance_zip",{instanceId:l(me).id,destPath:Re});x(a,`Exported to ${Ze}.`)}catch(Re){x(a,String(Re),!0)}}async function q(){if(l(me))try{const j=await B("create_desktop_shortcut",{instanceId:l(me).id});x(a,`Shortcut created: ${j}`)}catch(j){x(a,String(j),!0)}}async function L(j,Re){x(p,!1),await se(),j?.id&&x(N,j.id,!0),x(a,Re||`Instance ${j?.name??""} created.`,!0)}function ae(j){x(D,j,!0)}const me=st(()=>l(Xe).find(j=>j.id===l(N))??null);let xe=pe(null),Ee=0;Kt(()=>{const j=l(me);l(D);const Re=++Ee;x(xe,null),j&&B("list_instance_mods",{instanceId:j.id}).then(Ze=>{Re===Ee&&x(xe,Ze.length,!0)}).catch(()=>{Re===Ee&&x(xe,null)})});async function Ye(){try{x(H,await B("get_java_prefs"),!0),x(F,l(H).java_path??"",!0),x(z,l(H).min_memory_mb,!0),x(Z,l(H).max_memory_mb,!0),x(V,""),l(g).length===0&&await ge()}catch{}}async function nt(){x(V,"");try{await B("set_java_prefs",{javaPath:l(F).trim()||null,minMemoryMb:Number(l(z))||0,maxMemoryMb:Number(l(Z))||0}),x(V,"Java settings saved.")}catch(j){x(V,String(j),!0)}}async function O(){x(T,!0);try{x(b,await B("get_storage"),!0)}catch(j){x(oe,String(j),!0)}finally{x(T,!1)}}async function Ne(j,Re){x(T,!0),x(oe,"");try{await B("set_folder_dir",{kind:j,path:Re?.trim()||null}),x(b,await B("get_storage"),!0),x(oe,"Folders updated."),(j==="instances"||j==="shared")&&(await se(),l(N)&&!l(Xe).some(Ze=>Ze.id===l(N))&&x(N,null))}catch(Ze){x(oe,String(Ze),!0)}finally{x(T,!1)}}function le(j){B("open_path",{path:j}).catch(Re=>x(a,String(Re),!0))}async function Ce(){x(T,!0),x(oe,"");try{await B("clean_staging"),x(oe,"Staging cleaned.")}catch(j){x(oe,String(j),!0)}finally{x(T,!1)}}function be(j){return{offline:"Offline",microsoft:"Microsoft",ely_by:"Ely.by"}[j.account_type.type]??"Yggdrasil"}nr(()=>{const j=[],Re=Ze=>{if(Ze.key==="Escape"){const Xt=Ac();if(Xt){Xt();return}l(lt)?x(lt,null):l($)?(x($,null),x(Ie,"")):l(D)?x(D,null):l(N)?x(N,null):l(v)?x(v,!1):l(M)?x(M,!1):l(Se)&&x(Se,!1);return}if(l(lt)||l($)||l(v)||l(M)||l(D)||l(Se)||Ac()||Ze.target?.closest?.("input, textarea, select, [contenteditable]"))return;const Tt=Me();if(!Tt.length)return;const Nt=Tt.findIndex(Xt=>Xt.id===l(N));let jt=null;if(Ze.key==="ArrowDown"||Ze.key==="ArrowRight")jt=Nt+1;else if(Ze.key==="ArrowUp"||Ze.key==="ArrowLeft")jt=Nt<0?0:Nt-1;else if(Ze.key==="Enter"&&Nt>=0&&document.activeElement===document.body){Ze.preventDefault(),Le(Tt[Nt].id);return}jt!=null&&Tt[jt]&&(Ze.preventDefault(),x(N,Tt[jt].id,!0))};return window.addEventListener("keydown",Re),(async()=>{try{x(t,await B("get_version"),!0)}catch{x(t,"dev")}try{j.push(await window.__TAURI__.event.listen("launch-log",Ze=>Fe(Ze.payload))),j.push(await window.__TAURI__.event.listen("tauri://drag-drop",Ze=>{const xt=Ze.payload?.paths?.[0];xt&&xt.endsWith(".mrpack")&&(l(M)?x(_,xt,!0):x(k,xt,!0))}))}catch{}await ks(),await se(),await O();try{const Ze=await B("get_startup_launch");Ze&&l(Xe).some(xt=>xt.id===Ze)&&Le(Ze)}catch{}})(),()=>j.forEach(Ze=>Ze())});var De=f1(),qe=U(De),rt=U(qe),Mt=w(U(rt),2);{var ct=j=>{var Re=qM();W(j,Re)};ke(Mt,j=>{l(o)&&j(ct)})}var Rt=w(rt,2),_t=U(Rt);At(_t,17,()=>d,j=>j.id,(j,Re)=>{var Ze=ZM(),xt=U(Ze),Tt=U(xt);Gt(Tt,{get name(){return l(Re).icon},size:15});var Nt=w(xt,2);{var jt=Xt=>{var On=KM(),Pn=ue(On,!0);we(()=>de(Pn,l(Re).label)),W(Xt,On)};ke(Nt,Xt=>{l(o)&&Xt(jt)})}we(()=>{ht(Ze,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${l(o)?"":"justify-center"} ${l(i)===l(Re).id?"bg-(--accent) font-medium text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Ve(Ze,"title",l(Re).label)}),ce("click",Ze,()=>{x(i,l(Re).id,!0),x(D,null),x(s,"launcher"),l(Re).id==="settings"&&(Ye(),l(b)||O())}),W(j,Ze)});var bt=w(_t,2),Ut=U(bt),dn=U(Ut);Gt(dn,{name:"new",size:15});var wn=w(Ut,2);{var fn=j=>{var Re=JM();W(j,Re)};ke(wn,j=>{l(o)&&j(fn)})}var xn=w(Rt,2),oi=U(xn);{let j=st(()=>is(l(f))),Re=st(()=>l(f)?l(f).username[0]?.toUpperCase():"?");lc(oi,{get source(){return l(j)},size:28,get letter(){return l(Re)},class:"rounded bg-(--accent)/20 text-(--accent)"})}var Sa=w(oi,2);{var Te=j=>{var Re=QM(),Ze=U(Re),xt=ue(Ze,!0),Tt=w(Ze,2),Nt=ue(Tt,!0);we(jt=>{de(xt,l(f)?l(f).username:"Accounts"),de(Nt,jt)},[()=>l(f)?be(l(f)):"manage & sign in"]),W(j,Re)};ke(Sa,j=>{l(o)&&j(Te)})}var Be=w(xn,2),R=ue(Be,!0),G=w(qe,2),te=U(G),ee=U(te),fe=U(ee);{var Ge=j=>{var Re=$M(),Ze=vt(Re),xt=w(Ze,2),Tt=ue(xt,!0);we(()=>{Ve(xt,"title",l(D)?.name),de(Tt,l(D)?.name)}),ce("click",Ze,()=>x(D,null)),W(j,Re)},Ke=j=>{var Re=t1(),Ze=vt(Re),xt=ue(Ze),Tt=w(Ze,4);At(Tt,20,()=>[["launcher","Launcher"],["client","Client"]],_l,(Nt,jt)=>{var Xt=st(()=>Md(jt,2));let On=()=>l(Xt)[0],Pn=()=>l(Xt)[1];var Tn=e1(),yi=ue(Tn,!0);we(()=>{ht(Tn,1,`px-3 py-1 text-[11px] font-semibold tracking-wide ${l(s)===On()?"bg-(--accent) text-(--on-accent)":"text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)"}`),Ve(Tn,"aria-selected",l(s)===On()),de(yi,Pn())}),ce("click",Tn,()=>x(s,On(),!0)),W(Nt,Tn)}),we(()=>de(xt,`TwilightMC Bolide (alpha-v${l(t)??""})`)),W(j,Re)};ke(fe,j=>{l(P)==="edit"?j(Ge):j(Ke,-1)})}var it=w(ee,2),et=ue(it,!0),at=w(te,2),tt=U(at);{var ot=j=>{OM(j,{onback:()=>x(i,"instances")})},wt=j=>{YM(j,{get instances(){return l(Xe)},get active(){return l(f)},get gameRunning(){return l(Ae)},get status(){return l(a)},onlaunch:Le,onopenconsole:()=>x(Se,!0),get onrefresh(){return ks},onopenaccounts:()=>{x(i,"accounts"),x(s,"launcher")}})},yt=j=>{Nm(j,{get instance(){return l(D)},get storage(){return l(b)},get blindMode(){return l(c)},get deafMode(){return l(u)},onback:()=>x(D,null),onopenconsole:()=>x(Se,!0)})},rn=j=>{cg(j,{get version(){return l(t)},get storage(){return l(b)},get runtimes(){return l(g)},get scanning(){return l(y)},get javaError(){return l(m)},get storageBusy(){return l(T)},get storageMsg(){return l(oe)},get javaMsg(){return l(V)},get gameRunning(){return l(Ae)},onback:()=>x(i,"instances"),onscanjava:ge,onsaveprefs:nt,onsavefolder:Ne,onopenfolder:le,oncleanstaging:Ce,onopenaccounts:()=>{x(i,"accounts"),x(s,"launcher")},onopenurl:Re=>B("open_external_url",{url:Re}).catch(Ze=>x(a,String(Ze),!0)),get theme(){return l(r)},set theme(Re){x(r,Re,!0)},get blindMode(){return l(c)},set blindMode(Re){x(c,Re,!0)},get deafMode(){return l(u)},set deafMode(Re){x(u,Re,!0)},get javaPath(){return l(F)},set javaPath(Re){x(F,Re,!0)},get minMem(){return l(z)},set minMem(Re){x(z,Re,!0)},get maxMem(){return l(Z)},set maxMem(Re){x(Z,Re,!0)}})},qn=j=>{var Re=n1(),Ze=vt(Re),xt=U(Ze),Tt=U(xt);Gt(Tt,{name:"new",size:13});var Nt=w(xt,2),jt=U(Nt);Gt(jt,{name:"viewfolder",size:14});var Xt=w(Nt,2),On=U(Xt);Gt(On,{name:"package",size:14});var Pn=w(Xt,2),Tn=U(Pn);Gt(Tn,{name:"settings",size:14});var yi=w(Pn,2),ci=w(yi,4),ui=U(ci);{var Yt=Fn=>{Gt(Fn,{name:"sun",size:15})},Si=st(()=>Ba(l(r))),xo=Fn=>{Gt(Fn,{name:"moon",size:15})};ke(ui,Fn=>{l(Si)?Fn(Yt):Fn(xo,-1)})}var gh=w(Ze,2);{let Fn=st(Me);mm(gh,{get instances(){return l(Fn)},get error(){return l(J)},get query(){return l(We)},get selectedId(){return l(N)},get gameRunning(){return l(Ae)},get menuFor(){return l(lt)},onselect:Oe,onplay:Le,ontogglemenu:pc=>x(lt,l(lt)===pc?null:pc,!0),onedit:ae,onopenfolder:S,onviewlogs:()=>x(Se,!0),ondelete:I,onclosemenu:()=>x(lt,null),onadd:ve})}we(Fn=>{Nt.disabled=!l(b),Ve(Nt,"title",l(b)?l(b).instances_dir:""),Ve(ci,"title",Fn)},[()=>Ba(l(r))?"Twilight Light":"Twilight Dark"]),ce("click",xt,ve),ce("click",Nt,A),ce("click",Xt,()=>x(M,!0)),ce("click",Pn,()=>{x(i,"settings"),Ye(),l(b)||O()}),kt(yi,()=>l(We),Fn=>x(We,Fn)),ce("click",ci,ie),W(j,Re)},zt=j=>{var Re=i1(),Ze=vt(Re),xt=ue(Ze,!0),Tt=w(Ze,2),Nt=ue(Tt,!0);we(()=>{de(xt,h[l(i)][0]),de(Nt,h[l(i)][1])}),W(j,Re)};ke(tt,j=>{l(P)==="accounts"?j(ot):l(s)==="client"?j(wt,1):l(P)==="edit"&&l(D)?j(yt,2):l(i)==="settings"?j(rn,3):l(i)==="instances"?j(qn,4):j(zt,-1)})}var pt=w(at,2),Ar=U(pt),Dt=U(Ar),li=U(Dt),Ma=w(li,2);Gt(Ma,{name:"log",size:13});var ir=w(Ma,4);{var Ea=j=>{var Re=r1();W(j,Re)};ke(ir,j=>{l(Ae)&&j(Ea)})}var sn=w(Dt,2),Kn=U(sn),rr=w(Kn,2),on=w(rr,2),wa=w(on,2);{var _o=j=>{var Re=a1();ce("click",Re,()=>x(Se,!1)),W(j,Re)};ke(wa,j=>{l(Se)&&j(_o)})}var Ta=w(Ar,2);At(Ta,21,()=>l(ne),_l,(j,Re)=>{var Ze=s1(),xt=ue(Ze,!0);we(Tt=>{ht(Ze,1,`whitespace-pre-wrap break-all ${Tt??""}`),de(xt,l(Re).line)},[()=>ze(l(Re))]),W(j,Ze)},j=>{var Re=o1();W(j,Re)}),pf(Ta,j=>x(Pe,j),()=>l(Pe));var cc=w(G,2);{var uh=j=>{Bv(j,{get instance(){return l(me)},get storage(){return l(b)},get gameRunning(){return l(Ae)},get modsCount(){return l(xe)},get groups(){return l(X)},onlaunch:()=>Le(l(me).id),onkill:dt,onedit:()=>ae(l(me)),onchangegroup:_e,onopenfolder:()=>S(l(me).id),onexport:ye,oncopy:Ue,ondelete:()=>I(l(me).id),onshortcut:q})};ke(cc,j=>{l(P)==="instances"&&l(me)&&j(uh)})}var uc=w(cc,2);{var dh=j=>{Hm(j,{get path(){return l(k)},onclose:()=>x(k,null),oninstalled:async Re=>{x(k,null),await se(),x(N,Re,!0),x(a,"Modpack installed.")}})};ke(uc,j=>{l(k)&&j(dh)})}var dc=w(uc,2);{var fh=j=>{wM(j,{get accounts(){return Vn.list},get active(){return l(f)},onclose:()=>{x(v,!1),ks()},get onrefresh(){return ks}})};ke(dc,j=>{l(v)&&j(fh)})}var fc=w(dc,2);{var hh=j=>{dv(j,{get groups(){return l(X)},get blindMode(){return l(c)},get deafMode(){return l(u)},onclose:()=>x(p,!1),oncreated:L})};ke(fc,j=>{l(p)&&j(hh)})}var hc=w(fc,2);{var ph=j=>{var Re=c1(),Ze=U(Re),xt=U(Ze),Tt=w(U(xt),2),Nt=w(xt,2),jt=U(Nt),Xt=w(jt,2),On=w(Xt,2);{var Pn=Yt=>{var Si=l1(),xo=ue(Si,!0);we(()=>de(xo,l(C))),W(Yt,Si)};ke(On,Yt=>{l(C)&&Yt(Pn)})}var Tn=w(Nt,2),yi=U(Tn),ci=w(yi,2),ui=ue(ci,!0);we(Yt=>{ci.disabled=Yt,de(ui,l(E)?"Installing…":"Install .mrpack")},[()=>l(E)||!l(_).trim()]),ce("click",Re,Yt=>{Yt.target===Yt.currentTarget&&!l(E)&&x(M,!1)}),ce("click",Tt,()=>x(M,!1)),gi("dragover",jt,Yt=>Yt.preventDefault()),gi("drop",jt,Yt=>{Yt.preventDefault();const Si=Yt.dataTransfer?.files?.[0]?.path;Si&&x(_,Si,!0)}),kt(Xt,()=>l(_),Yt=>x(_,Yt)),ce("click",yi,()=>x(M,!1)),ce("click",ci,Q),W(j,Re)};ke(hc,j=>{l(M)&&j(ph)})}var mh=w(hc,2);{var vh=j=>{var Re=d1(),Ze=U(Re),xt=w(U(Ze),2),Tt=w(U(xt)),Nt=ue(Tt,!0),jt=w(xt,2);{var Xt=ui=>{var Yt=u1(),Si=ue(Yt,!0);we(()=>de(Si,l(Ie))),W(ui,Yt)};ke(jt,ui=>{l(Ie)&&ui(Xt)})}var On=w(jt,2),Pn=U(On),Tn=w(Pn,2),yi=U(Tn);pi(yi,{emoji:"♻"});var ci=w(Tn,2);we(()=>{de(Nt,l($)),Pn.disabled=l(he),Tn.disabled=l(he),ci.disabled=l(he)}),ce("click",Re,ui=>{ui.target===ui.currentTarget&&!l(he)&&x($,null)}),ce("click",Pn,()=>x($,null)),ce("click",Tn,()=>Y(!0)),ce("click",ci,()=>Y(!1)),W(j,Re)};ke(mh,j=>{l($)&&j(vh)})}we(()=>{ht(qe,1,`group/nav relative flex w-16 shrink-0 flex-col border-r border-(--border) bg-(--bg-subtle) p-2 transition-[width] duration-150 ${l(o)?"w-60":"w-16"}`),ht(bt,1,`flex h-9 items-center gap-2.5 rounded px-2.5 text-left ${l(o)?"":"justify-center"} text-(--text-muted) hover:bg-(--bg-subtle) hover:text-(--text-main)`),ht(xn,1,`mt-2 flex items-center gap-2 rounded border border-(--border) bg-(--bg-surface) p-2 ${l(o)?"":"justify-center"}`),Ve(xn,"title",l(f)?l(f).username:"Manage accounts"),ht(Be,1,`absolute top-1.5 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-(--border) bg-(--bg-surface) text-[9px] text-(--text-muted) transition-opacity duration-100 hover:text-(--text-main) ${l(o)?"":"opacity-0 group-hover/nav:opacity-100"}`),de(R,l(o)?"«":"»"),de(et,l(a)),ht(pt,1,`flex shrink-0 flex-col overflow-hidden border-t border-(--border) bg-(--bg-subtle) transition-[height] duration-150 ${l(Se)?"h-48":"h-10"}`),Ve(Dt,"title",l(Se)?"Collapse console":"Expand console"),ht(li,1,`h-2 w-2 shrink-0 rounded-full ${l(Ae)?"animate-pulse bg-green-500":"bg-(--border)"}`),Kn.disabled=!l(ne).length,rr.disabled=!l(ne).length,on.disabled=!l(Ae)}),ce("dblclick",rt,()=>x(o,!l(o))),ce("click",bt,ve),ce("click",xn,()=>{x(i,"accounts"),x(D,null),x(s,"launcher")}),ce("click",Be,()=>x(o,!l(o))),ce("click",Dt,()=>x(Se,!l(Se))),ce("click",Kn,j=>{j.stopPropagation(),je()}),ce("click",rr,j=>{j.stopPropagation(),Qe()}),ce("click",on,j=>{j.stopPropagation(),dt()}),W(n,De),Jt()}_n(["dblclick","click"]);kp(h1,{target:document.getElementById("app")});
